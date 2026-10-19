import React from 'react';
import {
  X,
  CheckCircle2,
  Circle,
  Clock,
  ExternalLink,
  Copy,
  Check,
  Lock,
  GitBranch,
  Bookmark,
  Sparkles,
  RotateCcw,
  Unlock,
  PenTool,
  ArrowRight,
  BookOpen,
  Layers,
  GraduationCap,
  Award,
} from 'lucide-react';
import {
  LanguageItem,
  MusicItem,
  STAGE_CONFIG,
  BOOK_TYPE_MAP,
  LANE_CONFIG,
  REVISED_LIBERAL_WORKS,
  LiberalBook,
} from '../data/curriculumData';
import { calculateConcurrentSchedule } from '../utils/languageSchedule';
import { calculateMusicSchedule } from '../utils/musicSchedule';
import {
  getHardPrerequisitesForBook,
  getReadAlongsideForBook,
  getInformsLinksForBook,
  getRereadLinksForBook,
  getUnlocksLaterForBook,
} from '../data/bookLinks';
import {
  getRelatedSpineBooksForContext,
  getRelatedContextBooksForSpine,
  getRelatedSpineBooksForReference,
  getRelatedContextBooksForReference,
  getRelatedReferenceBooksForSpine,
  getRelatedReferenceBooksForContext,
} from '../data/contextSpineLinks';
import { getSynthesisEssayForBook } from '../data/synthesisEssays';
import { EnrichedBook } from '../utils/readingFocusLogic';

export type SelectedItem =
  | { type: 'lang'; data: LanguageItem }
  | { type: 'music'; data: MusicItem }
  | { type: 'liberal'; data: EnrichedBook | LiberalBook | any };

interface DetailModalProps {
  selected: SelectedItem | null;
  onClose: () => void;
  isCompleted: boolean;
  onToggleCompleted: () => void;
  onNavigateItem?: (item: SelectedItem) => void;
  isItemCompleted?: (id: string) => boolean;
  toggleItemCompleted?: (id: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  selected,
  onClose,
  isCompleted,
  onToggleCompleted,
  onNavigateItem,
  isItemCompleted = () => false,
  toggleItemCompleted = () => {},
}) => {
  const [copied, setCopied] = React.useState(false);
  const [showEssayRubric, setShowEssayRubric] = React.useState(false);

  if (!selected) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  let title = '';
  let subtitle = '';
  let badgeLabel = '';
  let stageName = '';
  let stageColor = '#FFD6E0';
  let laneName = '';
  let laneColor = '#BAE1FF';
  let shareText = '';
  let searchWebUrl = '';

  if (selected.type === 'lang') {
    title = selected.data.title;
    subtitle = `${selected.data.lang} · ${selected.data.group} (${selected.data.subgroup})`;
    badgeLabel = 'Language Track';
    stageName = '';
    stageColor = '#C1E1C1';
    laneName = '';
    laneColor = '#C1E1C1';
    shareText = `${selected.data.lang} - ${selected.data.title}`;
    searchWebUrl = `https://www.google.com/search?q=${encodeURIComponent(`${selected.data.lang} ${selected.data.title}`)}`;
  } else if (selected.type === 'music') {
    title = selected.data.title;
    subtitle = `${selected.data.subject} · ${selected.data.year}`;
    badgeLabel = 'Music Track';
    stageName = '';
    stageColor = '#BAE1FF';
    laneName = '';
    laneColor = '#BAE1FF';
    shareText = `${selected.data.title} (${selected.data.subject}, ${selected.data.year})`;
    searchWebUrl = `https://www.google.com/search?q=${encodeURIComponent(selected.data.title)}`;
  } else {
    const courseCode = selected.data.course || selected.data.courseCode || '';
    const courseTitle = selected.data.courseTitle || '';
    title = selected.data.title;
    subtitle = `${selected.data.author || 'Anonymous'} · ${courseCode}: ${courseTitle}`;
    badgeLabel = 'Liberal Arts';
    stageName = `Stage ${selected.data.stage} · ${selected.data.stageName}`;
    stageColor = STAGE_CONFIG[selected.data.stage]?.color || '#FFD6E0';
    laneName = String(selected.data.lane || '').toUpperCase();
    const laneKey = String(selected.data.lane || '').toLowerCase() === 'spine' ? 'Spine' : String(selected.data.lane || '').toLowerCase() === 'reference' ? 'Reference' : 'Context';
    laneColor = LANE_CONFIG[laneKey]?.color || '#BAE1FF';
    shareText = `${selected.data.title} by ${selected.data.author} (${courseCode})`;
    searchWebUrl = `https://www.google.com/search?q=${encodeURIComponent(`${selected.data.title} ${selected.data.author}`)}`;
  }

  const courseCode = selected.type === 'liberal' ? (selected.data.course || selected.data.courseCode || '') : '';
  const courseTitle = selected.type === 'liberal' ? (selected.data.courseTitle || '') : '';

  const bookId = selected.type === 'liberal' ? selected.data.id : null;
  const isContextLane = selected.type === 'liberal' && String(selected.data.lane).toLowerCase() === 'context';
  const isSpineLane = selected.type === 'liberal' && String(selected.data.lane).toLowerCase() === 'spine';
  const isReferenceLane = selected.type === 'liberal' && String(selected.data.lane).toLowerCase() === 'reference';

  const relatedSpineBooks = bookId && isContextLane
    ? getRelatedSpineBooksForContext(bookId)
    : (bookId && isReferenceLane ? getRelatedSpineBooksForReference(bookId) : []);
  const relatedContextBooks = bookId && isSpineLane
    ? getRelatedContextBooksForSpine(bookId)
    : (bookId && isReferenceLane ? getRelatedContextBooksForReference(bookId) : []);
  const relatedReferenceBooks = bookId && isSpineLane
    ? getRelatedReferenceBooksForSpine(bookId)
    : (bookId && isContextLane ? getRelatedReferenceBooksForContext(bookId) : []);

  const attachedEssay = bookId ? getSynthesisEssayForBook(bookId) : undefined;
  const isEssayDone = attachedEssay ? isItemCompleted(attachedEssay.id) : false;

  const hardPrereqs = bookId ? getHardPrerequisitesForBook(bookId) : [];
  const readAlongside = bookId ? getReadAlongsideForBook(bookId) : null;
  const informsLinks = bookId ? getInformsLinksForBook(bookId) : [];
  const unlocksLater = bookId ? getUnlocksLaterForBook(bookId) : [];

  const navigateToBook = (book: LiberalBook) => {
    if (onNavigateItem) {
      onNavigateItem({ type: 'liberal', data: book });
    }
  };

  const getBookById = (id: string): LiberalBook | undefined => {
    return REVISED_LIBERAL_WORKS.find(b => b.id === id);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-xs transition-opacity animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-t-3xl sm:rounded-2xl border border-black/[0.08] dark:border-white/[0.12] shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col">
        <div className="sm:hidden w-12 h-1.5 bg-zinc-300 dark:bg-zinc-700 rounded-full mx-auto mt-3 mb-1" />

        <div
          className="px-6 py-4 flex items-center justify-between border-b border-black/[0.05] dark:border-white/[0.08]"
          style={{ backgroundColor: stageColor + '30' }}
        >
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full border border-black/10"
              style={{ backgroundColor: stageColor }}
            />
            <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
              {badgeLabel}
            </span>
            <span className="text-xs font-mono text-zinc-400">·</span>
            <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
              {selected.data.id}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white bg-black/5 dark:bg-white/10 transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-5">

          <div>
            <div className="flex items-center gap-2 flex-wrap mb-2">
              {selected.type === 'liberal' && (
                <>
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border"
                    style={{
                      backgroundColor: stageColor + '25',
                      borderColor: stageColor,
                      color: '#27272a',
                    }}
                  >
                    {stageName}
                  </span>
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border"
                    style={{
                      backgroundColor: laneColor + '25',
                      borderColor: laneColor,
                      color: '#27272a',
                    }}
                  >
                    Lane: {laneName}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-black/5 dark:border-white/10">
                    {BOOK_TYPE_MAP[selected.data.type]?.label || 'Text'}
                  </span>
                </>
              )}
              {selected.type === 'lang' && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-200 border border-emerald-300/40">
                  Language Track · Concurrent Model
                </span>
              )}
              {selected.type === 'music' && (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-200 border border-amber-300/40">
                  Music Track
                </span>
              )}
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 leading-snug">
              {title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className={`p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-black/[0.05] dark:border-white/[0.06] space-y-1 ${selected.type !== 'liberal' ? 'col-span-2' : ''}`}>
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                {selected.type === 'lang' ? 'Curriculum Order' : selected.type === 'music' ? 'Qualification Order' : 'Course Order / Seq'}
              </span>
              <p className="font-semibold text-zinc-800 dark:text-zinc-200">
                #{selected.data.order || selected.data.orderNum}
              </p>
            </div>

            {selected.type === 'liberal' && (
              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-black/[0.05] dark:border-white/[0.06] space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Curriculum Status
                </span>
                <p className="font-semibold text-zinc-800 dark:text-zinc-200 capitalize">
                  {selected.data.status}
                </p>
              </div>
            )}

            {selected.type === 'lang' && (() => {
              const langSched = calculateConcurrentSchedule().languages.find(l => l.id === selected.data.id);
              if (!langSched) return null;
              return (
                <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 space-y-2 col-span-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 dark:text-emerald-300 font-bold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      Concurrent Staggered Schedule (Effective Oct 1, 2026)
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200">
                      {langSched.currentWeeklyHours} hrs/wk
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono pt-1">
                    <div>
                      <span className="text-zinc-400 text-[10px] block">Target Hours</span>
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">{langSched.requiredHours} hrs</span>
                    </div>
                    <div>
                      <span className="text-zinc-400 text-[10px] block">Secondary Credit</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">
                        +{langSched.orderNum === 1 ? '218.6h' : `${langSched.accumulatedAsSecondary}h`}
                      </span>
                    </div>
                    <div>
                      <span className="text-zinc-400 text-[10px] block">Primary Promotion</span>
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">{langSched.startDateAsPrimary}</span>
                    </div>
                    <div>
                      <span className="text-zinc-400 text-[10px] block">Projected Mastery</span>
                      <span className="font-bold text-emerald-700 dark:text-emerald-300">{langSched.projectedMasteryDate}</span>
                    </div>
                  </div>
                    
                  </p>
                </div>
              );
            })()}

            {selected.type === 'music' && (() => {
              const musicSchedItem = calculateMusicSchedule().items.find(m => m.id === selected.data.id);
              return (
                <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 space-y-2 col-span-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 dark:text-amber-300 font-bold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      Study Pacing
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200">
                      {musicSchedItem ? `${musicSchedItem.weeklyRate} hrs/wk` : '5 hrs/wk'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-mono pt-1">
                    <div>
                      <span className="text-zinc-400 text-[10px] block">Required Hours</span>
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">{selected.data.hours} hrs</span>
                    </div>
                    <div>
                      <span className="text-zinc-400 text-[10px] block">Weekly Allocation</span>
                      <span className="font-bold text-amber-700 dark:text-amber-300">
                        {musicSchedItem?.weeklyRate === 20 ? '20 hrs/wk (Elevated)' : musicSchedItem?.weeklyRate === 10 ? '10 hrs/wk (Accelerated)' : '5 hrs/wk (Baseline)'}
                      </span>
                    </div>
                    <div>
                      <span className="text-zinc-400 text-[10px] block">Projected Completion</span>
                      <span className="font-bold text-amber-800 dark:text-amber-200">
                        {musicSchedItem?.completionDate || selected.data.year}
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed pt-1 border-t border-amber-200/40 dark:border-amber-800/30">
                    {musicSchedItem?.phase === 'post_language'
                      ? 'Elevated to 20 hrs/week following full acquisition of all 24 languages in the curriculum.'
                      : musicSchedItem?.phase === 'post_german'
                      ? 'Accelerated to 10 hrs/week following German mastery (supporting dual language tracks), elevating to 20 hrs/week once all 24 languages complete.'
                      : 'Scheduled at 5 hrs/week during pre-German language study, increasing to 10 hrs/week upon German mastery.'}
                  </p>
                </div>
              );
            })()}

            {selected.type === 'liberal' && courseCode && (
              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-black/[0.05] dark:border-white/[0.06] space-y-1 col-span-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Course Assignment
                </span>
                <p className="font-semibold text-zinc-800 dark:text-zinc-200">
                  {courseCode} — {courseTitle}
                </p>
              </div>
            )}
          </div>

          {isContextLane && (
            <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border-2 border-amber-300 dark:border-amber-800/70 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200">
                    Related spine book(s)
                  </span>
                </div>
                <span className="text-[11px] font-mono text-amber-700 dark:text-amber-400">
                  Provides Context For
                </span>
              </div>
              <p className="text-xs text-amber-800 dark:text-amber-300">
                This context monograph directly supports and complements the following compulsory spine work(s):
              </p>

              <div className="space-y-2 pt-1">
                {relatedSpineBooks.map(spineBook => (
                  <div
                    key={spineBook.id}
                    onClick={() => navigateToBook(spineBook)}
                    className="p-3 rounded-xl bg-white dark:bg-zinc-800/90 border border-amber-200 dark:border-amber-900/50 hover:border-amber-400 dark:hover:border-amber-600 cursor-pointer transition flex items-center justify-between gap-3 group shadow-xs"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 mb-0.5">
                        <span className="px-1.5 py-0.2 rounded bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-bold border border-sky-200">
                          Spine
                        </span>
                        <span>{spineBook.courseCode}</span>
                        <span>·</span>
                        <span>Stage {spineBook.stage}</span>
                      </div>
                      <h4 className="font-serif text-sm font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition truncate">
                        {spineBook.title}
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                        {spineBook.author} ({spineBook.courseTitle})
                      </p>
                    </div>
                    <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-700 text-zinc-400 group-hover:text-amber-600 transition shrink-0">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {isReferenceLane && (
            <div className="p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/20 border-2 border-indigo-300 dark:border-indigo-800/70 space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-200">
                    Authoritative Reference & Companion Relationships
                  </span>
                </div>
                <span className="text-[11px] font-mono text-indigo-700 dark:text-indigo-400">
                  Method & Apparatus
                </span>
              </div>
              <p className="text-xs text-indigo-900 dark:text-indigo-200 leading-relaxed">
                This authoritative reference companion provides historical context, scholarly commentary, and interpretive apparatus for the primary sources and monographs in {courseCode}: {courseTitle}.
              </p>

              {relatedSpineBooks.length > 0 && (
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-800 dark:text-indigo-300 font-semibold flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-sky-500" />
                    Related Compulsory Spine Works ({relatedSpineBooks.length}):
                  </span>
                  <div className="space-y-2">
                    {relatedSpineBooks.map(sBook => (
                      <div
                        key={sBook.id}
                        onClick={() => navigateToBook(sBook)}
                        className="p-3 rounded-xl bg-white dark:bg-zinc-800/90 border border-indigo-200 dark:border-indigo-900/50 hover:border-indigo-400 dark:hover:border-indigo-600 cursor-pointer transition flex items-center justify-between gap-3 group shadow-xs"
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 mb-0.5">
                            <span className="px-1.5 py-0.2 rounded bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-bold border border-sky-200">
                              Spine
                            </span>
                            <span>{sBook.courseCode}</span>
                            <span>·</span>
                            <span>Stage {sBook.stage}</span>
                          </div>
                          <h4 className="font-serif text-sm font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition truncate">
                            {sBook.title}
                          </h4>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                            {sBook.author} ({sBook.courseTitle})
                          </p>
                        </div>
                        <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-700 text-zinc-400 group-hover:text-indigo-600 transition shrink-0">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {relatedContextBooks.length > 0 && (
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-800 dark:text-indigo-300 font-semibold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-amber-500" />
                    Related Context Monographs ({relatedContextBooks.length}):
                  </span>
                  <div className="space-y-2">
                    {relatedContextBooks.map(cBook => (
                      <div
                        key={cBook.id}
                        onClick={() => navigateToBook(cBook)}
                        className="p-3 rounded-xl bg-white dark:bg-zinc-800/90 border border-amber-200 dark:border-amber-900/50 hover:border-amber-400 dark:hover:border-amber-600 cursor-pointer transition flex items-center justify-between gap-3 group shadow-xs"
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 mb-0.5">
                            <span className="px-1.5 py-0.2 rounded bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold border border-amber-200">
                              Context
                            </span>
                            <span>{cBook.courseCode}</span>
                            <span>·</span>
                            <span>Stage {cBook.stage}</span>
                          </div>
                          <h4 className="font-serif text-sm font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition truncate">
                            {cBook.title}
                          </h4>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                            {cBook.author} ({cBook.courseTitle})
                          </p>
                        </div>
                        <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-700 text-zinc-400 group-hover:text-amber-600 transition shrink-0">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {isSpineLane && relatedReferenceBooks.length > 0 && (
            <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/50 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5 text-indigo-500" />
                  Reference Handbooks & Companions for this work
                </span>
                <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400">
                  {relatedReferenceBooks.length} available
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {relatedReferenceBooks.map(rBook => (
                  <button
                    key={rBook.id}
                    onClick={() => navigateToBook(rBook)}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-800 border border-indigo-200 dark:border-indigo-900/40 hover:border-indigo-400 text-xs font-serif text-zinc-900 dark:text-zinc-100 transition flex items-center gap-2 cursor-pointer shadow-xs group"
                  >
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300">
                      Reference
                    </span>
                    <span className="font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {rBook.title}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">({rBook.author})</span>
                    <ArrowRight className="w-3 h-3 text-zinc-400 group-hover:text-indigo-500" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {selected.type === 'liberal' && attachedEssay && (
            <div className="p-5 rounded-2xl bg-rose-50/70 dark:bg-rose-950/20 border-2 border-rose-300 dark:border-rose-900/60 space-y-3.5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <PenTool className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-rose-900 dark:text-rose-200">
                    {isSpineLane
                      ? 'Compulsory Primary Text Synthesis Essay'
                      : isReferenceLane
                      ? 'Reference Apparatus & Critical Synthesis Essay'
                      : 'Monograph Disciplinary Context Synthesis Essay'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200 font-semibold">
                    {attachedEssay.analyticalMode}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">
                    {attachedEssay.wordCountGuideline}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-serif text-base font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                  {attachedEssay.title}
                </h4>
                <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-800/90 border border-rose-200/70 dark:border-rose-900/50 text-xs text-zinc-700 dark:text-zinc-200 leading-relaxed mt-2.5">
                  <p className="font-medium">{attachedEssay.prompt}</p>
                </div>
              </div>

              {attachedEssay.priorBookIds.length === 0 ? (
                <div className="p-3 rounded-xl bg-white dark:bg-zinc-800 border border-rose-200/60 dark:border-rose-900/40 text-xs text-zinc-700 dark:text-zinc-300 space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-rose-800 dark:text-rose-300 font-bold block">
                    Inaugural Cornerstone / Foundational Anchor:
                  </span>
                  <p className="text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                    As the foundational cornerstone opening the curriculum, this inaugural essay establishes core cosmological, covenantal, and ethical paradigms without preceding textual prerequisites.
                  </p>
                </div>
              ) : (
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-rose-800 dark:text-rose-300 font-semibold block">
                    Synthesized Dialogue Works ({attachedEssay.priorBookIds.length}):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {attachedEssay.priorBookIds.map(priorId => {
                      const priorBook = getBookById(priorId);
                      return (
                        <button
                          key={priorId}
                          onClick={() => priorBook && navigateToBook(priorBook)}
                          className="px-2.5 py-1 rounded-lg bg-white dark:bg-zinc-800 border border-rose-200 dark:border-rose-900/40 text-xs font-serif text-zinc-800 dark:text-zinc-200 hover:border-rose-400 transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <BookOpen className="w-3 h-3 text-rose-500" />
                          <span>{priorBook ? priorBook.title : priorId}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div>
                <button
                  onClick={() => setShowEssayRubric(!showEssayRubric)}
                  className="text-xs font-mono text-rose-700 dark:text-rose-300 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>{showEssayRubric ? 'Hide Assessment Rubric' : 'View Assessment Rubric & Criteria'}</span>
                </button>
                {showEssayRubric && (
                  <ul className="mt-2 space-y-1 text-xs text-zinc-600 dark:text-zinc-400 list-disc list-inside bg-white/70 dark:bg-zinc-800/70 p-3 rounded-xl border border-rose-100 dark:border-rose-900/30">
                    {attachedEssay.rubricCriteria.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-2 border-t border-rose-200/50 dark:border-rose-900/30 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">
                  Assignment Status: {isEssayDone ? 'Completed' : 'Drafting Required'}
                </span>
                <button
                  onClick={() => toggleItemCompleted(attachedEssay.id)}
                  className={`px-3 py-1.5 rounded-xl font-semibold text-xs flex items-center gap-1.5 transition cursor-pointer ${
                    isEssayDone
                      ? 'bg-emerald-600 text-white'
                      : 'bg-rose-600 hover:bg-rose-700 text-white'
                  }`}
                >
                  {isEssayDone ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Essay Marked Complete</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-3.5 h-3.5" />
                      <span>Mark Essay Complete</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {selected.type === 'liberal' && (hardPrereqs.length > 0 || readAlongside || informsLinks.length > 0 || unlocksLater.length > 0) && (
            <div className="space-y-3 pt-1 border-t border-black/[0.05] dark:border-white/[0.06]">
              <div className="flex items-center gap-2">
                <GitBranch className="w-3.5 h-3.5 text-indigo-500" />
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  Curriculum Relationship Graph
                </h4>
              </div>

              {hardPrereqs.length > 0 && (
                <div className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 text-xs space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase text-rose-800 dark:text-rose-300 flex items-center gap-1">
                    <Lock className="w-3 h-3 text-rose-500" />
                    Required Prerequisites
                  </span>
                  {hardPrereqs.map((prereq, idx) => {
                    const prereqBook = getBookById(prereq.from_book);
                    return (
                      <div
                        key={idx}
                        onClick={() => prereqBook && navigateToBook(prereqBook)}
                        className="text-zinc-800 dark:text-zinc-200 text-xs pl-4 border-l-2 border-rose-400 cursor-pointer hover:underline"
                      >
                        <p className="font-serif font-medium">{prereqBook ? `${prereqBook.title} (${prereqBook.author})` : prereq.from_book}</p>
                        {prereq.note && <p className="text-[11px] text-rose-700 dark:text-rose-300 italic">{prereq.note}</p>}
                      </div>
                    );
                  })}
                </div>
              )}

              {readAlongside && (
                <div className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-xs space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase text-amber-800 dark:text-amber-300 flex items-center gap-1">
                    <Bookmark className="w-3 h-3 text-amber-500" />
                    Companion Reading
                  </span>
                  {(() => {
                    const otherId = readAlongside.from_book === bookId ? readAlongside.to_book : readAlongside.from_book;
                    const cBook = getBookById(otherId);
                    return (
                      <div
                        onClick={() => cBook && navigateToBook(cBook)}
                        className="text-zinc-800 dark:text-zinc-200 text-xs pl-4 border-l-2 border-amber-400 cursor-pointer hover:underline"
                      >
                        <p className="font-serif font-medium">{cBook ? `${cBook.title} (${cBook.author})` : otherId}</p>
                        {readAlongside.note && <p className="text-[11px] text-amber-700 dark:text-amber-300 italic">{readAlongside.note}</p>}
                      </div>
                    );
                  })()}
                </div>
              )}

              {informsLinks.length > 0 && (
                <div className="p-3 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/40 text-xs space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase text-indigo-800 dark:text-indigo-300 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-indigo-500" />
                    Intellectual Connections ({informsLinks.length})
                  </span>
                  {informsLinks.map((link, idx) => {
                    const otherId = link.from_book === bookId ? link.to_book : link.from_book;
                    const oBook = getBookById(otherId);
                    return (
                      <div
                        key={idx}
                        onClick={() => oBook && navigateToBook(oBook)}
                        className="text-zinc-800 dark:text-zinc-200 text-xs pl-4 border-l-2 border-indigo-400 cursor-pointer hover:underline"
                      >
                        <p className="font-serif font-medium">{oBook ? `${oBook.title} (${oBook.author})` : otherId}</p>
                        {link.note && <p className="text-[11px] text-indigo-700 dark:text-indigo-300 italic">{link.note}</p>}
                      </div>
                    );
                  })}
                </div>
              )}

              {unlocksLater.length > 0 && (
                <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 text-xs space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
                    <Unlock className="w-3 h-3 text-emerald-500" />
                    Unlocks Downstream
                  </span>
                  {unlocksLater.map((link, idx) => {
                    const targetBook = getBookById(link.to_book);
                    return (
                      <div
                        key={idx}
                        onClick={() => targetBook && navigateToBook(targetBook)}
                        className="text-zinc-800 dark:text-zinc-200 text-xs pl-4 border-l-2 border-emerald-400 cursor-pointer hover:underline"
                      >
                        <p className="font-serif font-medium">{targetBook ? `${targetBook.title} (${targetBook.author})` : link.to_book}</p>
                        {link.note && <p className="text-[11px] text-emerald-700 dark:text-emerald-300 italic">{link.note}</p>}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          <div className="flex flex-col gap-2.5 pt-2">
            <button
              onClick={onToggleCompleted}
              className={`w-full py-3 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition active:scale-[0.99] cursor-pointer shadow-xs ${
                isCompleted
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-600'
                  : 'bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white'
              }`}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Finished · Click to Unmark</span>
                </>
              ) : (
                <>
                  <Circle className="w-4 h-4" />
                  <span>Mark as Finished</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2">
              <a
                href={searchWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl border border-black/[0.08] dark:border-white/[0.12] bg-white dark:bg-zinc-800/80 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 text-xs font-medium flex items-center justify-center gap-1.5 transition text-center"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Search Information</span>
              </a>

              <button
                onClick={() => handleCopy(shareText)}
                className="py-2.5 px-4 rounded-xl border border-black/[0.08] dark:border-white/[0.12] bg-white dark:bg-zinc-800/80 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 text-xs font-medium flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
