import React, { useState, useMemo } from 'react';
import {
  Search,
  X,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Circle,
  BookOpen,
  ArrowRight,
  Eye,
  ListFilter,
  Sparkles,
  Bookmark,
  Layers,
  GraduationCap,
  PenTool,
  Lock,
  Unlock,
  GitBranch,
  ArrowUpRight,
  RotateCcw,
  AlertCircle,
  Info,
  Check,
  Download,
  FileText,
} from 'lucide-react';
import {
  computeWhatToReadNow,
  EnrichedBook,
  SynthesisTask,
  ENRICHED_LIBERAL_WORKS,
} from '../utils/readingFocusLogic';
import { STAGE_CONFIG, BOOK_TYPE_MAP, LANE_CONFIG, REVISED_LIBERAL_WORKS } from '../data/curriculumData';
import {
  getRelatedSpineBooksForContext,
  getRelatedContextBooksForSpine,
  getRelatedSpineBooksForReference,
  getRelatedContextBooksForReference,
} from '../data/contextSpineLinks';
import { getSynthesisEssayForBook, SYNTHESIS_ESSAYS } from '../data/synthesisEssays';
import masterCurriculumData from '../data/masterCurriculum.json';
import { SelectedItem } from './DetailModal';

interface LiberalArtsViewProps {
  onSelectItem: (item: SelectedItem) => void;
  isCompleted: (id: string) => boolean;
  toggleCompleted: (id: string) => void;
}

const STAGE_KEYS = ['all', '100', '200', '300', '400', '500', '600', '700'] as const;
const LANE_KEYS = ['all', 'Spine', 'Context', 'Reference'] as const;
const TYPE_KEYS = ['all', 'P', 'S', 'T', 'A', 'C'] as const;

export const LiberalArtsView: React.FC<LiberalArtsViewProps> = ({
  onSelectItem,
  isCompleted,
  toggleCompleted,
}) => {
  const [viewMode, setViewMode] = useState<'focus' | 'full'>('focus');

  const [showRelationshipGraph, setShowRelationshipGraph] = useState(true);
  const [showPrimaryEssayPrompt, setShowPrimaryEssayPrompt] = useState(false);
  const [showMasterCurriculumModal, setShowMasterCurriculumModal] = useState(false);

  const [search, setSearch] = useState('');
  const [activeStage, setActiveStage] = useState<string>('all');
  const [activeLane, setActiveLane] = useState<string>('all');
  const [activeType, setActiveType] = useState<string>('all');
  const [collapsedStages, setCollapsedStages] = useState<Record<string, boolean>>({
    '200': true,
    '300': true,
    '400': true,
    '500': true,
    '600': true,
    '700': true,
  });

  const focusState = useMemo(() => {
    return computeWhatToReadNow(isCompleted, 'none', false);
  }, [isCompleted]);

  const filteredWorks = useMemo(() => {
    const q = search.toLowerCase().trim();
    const lanePriority = (lane: string) => (lane === 'spine' ? 0 : lane === 'context' ? 1 : 2);

    return ENRICHED_LIBERAL_WORKS.filter(item => {
      const matchText =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.author.toLowerCase().includes(q) ||
        item.course.toLowerCase().includes(q) ||
        item.courseTitle.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q);
      const matchStage = activeStage === 'all' || String(item.stage) === activeStage;
      const matchLane = activeLane === 'all' || item.lane.toLowerCase() === activeLane.toLowerCase();
      const matchType = activeType === 'all' || item.type === activeType;
      return matchText && matchStage && matchLane && matchType;
    }).sort((a, b) => {

      if (a.stage !== b.stage) return a.stage - b.stage;

      if (a.course !== b.course) return a.course.localeCompare(b.course);

      const prioA = lanePriority(a.lane);
      const prioB = lanePriority(b.lane);
      if (prioA !== prioB) return prioA - prioB;

      return a.order - b.order;
    });
  }, [search, activeStage, activeLane, activeType]);

  const groupedByStage = useMemo(() => {
    const map: Record<number, EnrichedBook[]> = {};
    filteredWorks.forEach(book => {
      if (!map[book.stage]) map[book.stage] = [];
      map[book.stage].push(book);
    });
    return map;
  }, [filteredWorks]);

  const stagesList = useMemo(() => [100, 200, 300, 400, 500, 600, 700], []);

  const toggleStageCollapse = (stg: number) => {
    setCollapsedStages(prev => ({
      ...prev,
      [String(stg)]: !prev[String(stg)],
    }));
  };

  const expandAll = () => setCollapsedStages({});
  const collapseAll = () => {
    const c: Record<string, boolean> = {};
    stagesList.forEach(s => { c[String(s)] = true; });
    setCollapsedStages(c);
  };

  const stageColor = STAGE_CONFIG[focusState.currentStage]?.color || '#FFD6E0';

  const hasUnmetPrereqs = useMemo(() => {
    return focusState.linkedBooks.requiresFirst.some(r => !r.isDone);
  }, [focusState.linkedBooks.requiresFirst]);

  const primaryEssay = useMemo(() => {
    if (focusState.primary.type === 'book' && focusState.primary.book) {
      return getSynthesisEssayForBook(focusState.primary.book.id);
    }
    return undefined;
  }, [focusState.primary]);

  const isPrimaryEssayDone = primaryEssay ? isCompleted(primaryEssay.id) : false;

  const companionRelatedSpines = useMemo(() => {
    if (focusState.companion) {
      return getRelatedSpineBooksForContext(focusState.companion.book.id);
    }
    return [];
  }, [focusState.companion]);

  const handleDownloadMasterCurriculum = () => {
    const blob = new Blob([JSON.stringify(masterCurriculumData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'LGBU-Master-Curriculum-Specification.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              The Lifelong Great Books University
            </h1>
          </div>
          <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1">
            {REVISED_LIBERAL_WORKS.length} Works · 7 Stages · Seminars & Capstone
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <div className="inline-flex p-1 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-black/[0.06] dark:border-white/[0.08] shadow-xs">
            <button
              onClick={() => setViewMode('focus')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition cursor-pointer ${
                viewMode === 'focus'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-rose-500" />
              <span>What to Read Now</span>
            </button>
            <button
              onClick={() => setViewMode('full')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition cursor-pointer ${
                viewMode === 'full'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <ListFilter className="w-3.5 h-3.5 text-sky-500" />
              <span>Complete Curriculum</span>
            </button>
          </div>

          <button
            onClick={() => setShowMasterCurriculumModal(true)}
            className="p-2 rounded-xl border border-black/[0.08] dark:border-white/[0.12] bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-xs font-medium flex items-center gap-1.5 transition cursor-pointer shadow-xs"
            title="Inspect & download clean master curriculum specification"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-500" />
            <span className="hidden sm:inline">Curriculum Artifact</span>
          </button>
        </div>
      </div>

      {viewMode === 'focus' && (
        <div className="space-y-6">

          <div
            className="rounded-3xl p-5 sm:p-6 border transition shadow-xs"
            style={{
              backgroundColor: stageColor + '18',
              borderColor: stageColor + '55',
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border"
                    style={{
                      backgroundColor: stageColor + '40',
                      borderColor: stageColor,
                      color: '#18181b',
                    }}
                  >
                    Stage {focusState.currentStage}
                  </span>
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-50">
                    Stage {focusState.currentStage} — {focusState.stageName}
                  </h2>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  Current stage progress: {focusState.stageProgress.completed} of {focusState.stageProgress.total} spine books completed ({focusState.stageProgress.percent}%)
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono">
                <div className="p-2.5 px-3.5 rounded-2xl bg-white/80 dark:bg-zinc-900/80 border border-black/5 dark:border-white/10 shadow-xs">
                  <span className="text-[10px] text-zinc-400 block uppercase font-sans">Spine Mastered</span>
                  <span className="font-bold text-zinc-800 dark:text-zinc-200">
                    {focusState.overallSpineProgress.percent}% ({focusState.overallSpineProgress.completed}/{focusState.overallSpineProgress.total})
                  </span>
                </div>
                <div className="p-2.5 px-3.5 rounded-2xl bg-white/80 dark:bg-zinc-900/80 border border-black/5 dark:border-white/10 shadow-xs">
                  <span className="text-[10px] text-zinc-400 block uppercase font-sans">Stage Spine</span>
                  <span className="font-bold text-zinc-800 dark:text-zinc-200">
                    {focusState.stageProgress.percent}%
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 h-2 w-full rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-rose-400 transition-all duration-500"
                style={{ width: `${focusState.stageProgress.percent}%` }}
              />
            </div>
          </div>

          {focusState.stageGateStatus.isLocked && (
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-3">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-500 mt-0.5" />
              <div>
                <span className="font-semibold block mb-0.5">Stage Gate Requirements Pending:</span>
                <ul className="list-disc list-inside space-y-0.5 text-[11px] text-amber-800 dark:text-amber-300">
                  {focusState.stageGateStatus.remainingItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">

            <div className={`${focusState.companion ? 'lg:col-span-7' : 'lg:col-span-8'} rounded-3xl p-6 sm:p-7 bg-white dark:bg-zinc-900 border-2 border-zinc-900/90 dark:border-white/90 shadow-md flex flex-col justify-between relative`}>
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-zinc-900 text-white dark:bg-white dark:text-zinc-950">
                      Now Reading
                    </span>
                    <span className="text-xs font-mono font-semibold text-rose-600 dark:text-rose-400">
                      Required Primary
                    </span>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">
                    {focusState.primary.type === 'book' ? `Stage ${focusState.primary.book?.stage}` : 'Stage Synthesis'}
                  </span>
                </div>

                {focusState.primary.type === 'book' && focusState.primary.book && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 flex-wrap text-xs">
                      <span className="px-2 py-0.5 rounded-md font-mono font-semibold bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                        Spine
                      </span>
                      <span className="px-2 py-0.5 rounded-md font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {focusState.primary.book.course}
                      </span>
                      <span className="px-2 py-0.5 rounded-md font-mono text-[11px] text-zinc-500">
                        {BOOK_TYPE_MAP[focusState.primary.book.type]?.label || 'Primary Text'}
                      </span>
                      {hasUnmetPrereqs && (
                        <span className="px-2 py-0.5 rounded-md font-mono text-[11px] bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 flex items-center gap-1">
                          <Lock className="w-3 h-3" />
                          Prerequisites Listed Below
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 leading-snug">
                      {focusState.primary.book.title}
                    </h3>

                    <p className="text-base text-zinc-600 dark:text-zinc-300 font-medium">
                      {focusState.primary.book.author}
                    </p>

                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {focusState.primary.book.courseTitle} · Course reading #{focusState.primary.book.order}
                    </p>

                    {primaryEssay && (
                      <div className="mt-4 p-4 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/50 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-rose-800 dark:text-rose-300">
                            <PenTool className="w-3.5 h-3.5 text-rose-600" />
                            <span>Attached Synthesis Essay</span>
                          </div>
                          <span className="text-[10px] font-mono text-zinc-500">
                            {primaryEssay.wordCountGuideline}
                          </span>
                        </div>
                        <h4 className="font-serif text-sm font-bold text-zinc-900 dark:text-zinc-100">
                          {primaryEssay.title}
                        </h4>
                        <div className="flex items-center justify-between pt-1">
                          <button
                            onClick={() => setShowPrimaryEssayPrompt(!showPrimaryEssayPrompt)}
                            className="text-xs font-mono text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
                          >
                            {showPrimaryEssayPrompt ? 'Hide Essay Prompt' : 'View Essay Prompt'}
                          </button>
                          <button
                            onClick={() => toggleCompleted(primaryEssay.id)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition cursor-pointer ${
                              isPrimaryEssayDone
                                ? 'bg-emerald-600 text-white'
                                : 'bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200 hover:bg-rose-200'
                            }`}
                          >
                            {isPrimaryEssayDone ? 'Essay Done ✓' : 'Mark Essay Done'}
                          </button>
                        </div>
                        {showPrimaryEssayPrompt && (
                          <div className="p-3 rounded-xl bg-white dark:bg-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 italic border border-rose-100 dark:border-rose-900/30 mt-2">
                            "{primaryEssay.prompt}"
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {focusState.primary.type === 'synthesis' && focusState.primary.synthesis && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 flex-wrap text-xs">
                      <span className="px-2 py-0.5 rounded-md font-mono bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 font-semibold">
                        {focusState.primary.synthesis.type === 'essay' ? 'Synthesis Essay' : 'Return Seminar Reread'}
                      </span>
                      <span className="px-2 py-0.5 rounded-md font-mono text-[11px] text-zinc-500">
                        Stage {focusState.primary.synthesis.stage} Capstone
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 leading-snug">
                      {focusState.primary.synthesis.title}
                    </h3>

                    {focusState.primary.synthesis.author && (
                      <p className="text-base text-zinc-600 dark:text-zinc-300 font-medium">
                        {focusState.primary.synthesis.author}
                      </p>
                    )}

                    <p className="text-xs text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
                      {focusState.primary.synthesis.subtitle}
                    </p>

                    <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-black/5 dark:border-white/10 text-xs text-zinc-600 dark:text-zinc-400 italic">
                      "{focusState.primary.synthesis.promptText}"
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-black/[0.06] dark:border-white/[0.08]">
                {focusState.primary.type === 'book' && focusState.primary.book && (
                  <>
                    <button
                      onClick={() => toggleCompleted(focusState.primary.book!.id)}
                      className={`py-2.5 px-5 rounded-2xl font-semibold text-xs flex items-center justify-center gap-2 transition active:scale-95 cursor-pointer shadow-xs ${
                        isCompleted(focusState.primary.book.id)
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                          : 'bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white'
                      }`}
                    >
                      {isCompleted(focusState.primary.book.id) ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-white" />
                          <span>Finished</span>
                        </>
                      ) : (
                        <>
                          <Circle className="w-4 h-4" />
                          <span>Mark Finished</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onSelectItem({ type: 'liberal', data: focusState.primary.book as any })}
                      className="py-2.5 px-4 rounded-2xl border border-black/[0.08] dark:border-white/[0.12] bg-zinc-50 dark:bg-zinc-800/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Review Details</span>
                    </button>
                  </>
                )}

                {focusState.primary.type === 'synthesis' && focusState.primary.synthesis && (
                  <button
                    onClick={() => toggleCompleted(focusState.primary.synthesis!.id)}
                    className={`w-full py-3 px-5 rounded-2xl font-semibold text-xs flex items-center justify-center gap-2 transition active:scale-95 cursor-pointer shadow-xs ${
                      isCompleted(focusState.primary.synthesis.id)
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        : 'bg-rose-600 hover:bg-rose-700 text-white'
                    }`}
                  >
                    {isCompleted(focusState.primary.synthesis.id) ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-white" />
                        <span>Synthesis Completed</span>
                      </>
                    ) : (
                      <>
                        <PenTool className="w-4 h-4" />
                        <span>Complete Stage Synthesis</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            <div className={`${focusState.companion ? 'lg:col-span-5' : 'lg:col-span-4'} flex flex-col justify-between`}>
              {focusState.companion ? (
                <div className="rounded-3xl p-6 bg-white/90 dark:bg-zinc-900/90 border border-amber-200 dark:border-amber-800/60 shadow-xs flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 border border-amber-300 dark:border-amber-700">
                          Optional Companion
                        </span>
                        <span className="text-[11px] font-mono text-zinc-500">
                          Read Alongside
                        </span>
                      </div>
                      <span className="text-[11px] font-mono uppercase text-amber-600 dark:text-amber-400 font-semibold">
                        {focusState.companion.isCanonical ? 'Canonical Pair' : 'Context Monograph'}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/40 text-xs font-mono text-amber-800 dark:text-amber-300 flex items-start gap-2 mb-3">
                      <Bookmark className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" />
                      <span className="leading-snug">{focusState.companion.reasonText}</span>
                    </div>

                    {companionRelatedSpines.length > 0 && (
                      <div className="mb-3 p-2 rounded-xl bg-zinc-50 dark:bg-zinc-800 text-[11px] text-zinc-600 dark:text-zinc-300 border border-black/5 dark:border-white/5">
                        <span className="font-mono text-[10px] text-amber-700 dark:text-amber-400 uppercase font-bold block">
                          Related Spine Book:
                        </span>
                        <span className="font-serif font-semibold text-zinc-800 dark:text-zinc-200 truncate block">
                          {companionRelatedSpines[0]?.title}
                        </span>
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                        {focusState.companion.book.lane} lane · {focusState.companion.book.course}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-zinc-50 leading-snug">
                        {focusState.companion.book.title}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        {focusState.companion.book.author}
                      </p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {focusState.companion.book.courseTitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 pt-5 mt-5 border-t border-black/[0.05] dark:border-white/[0.06]">
                    <button
                      onClick={() => toggleCompleted(focusState.companion!.book.id)}
                      className={`flex-1 py-2 px-3 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer shadow-xs ${
                        isCompleted(focusState.companion.book.id)
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                          : 'bg-zinc-800 hover:bg-zinc-700 text-white dark:bg-zinc-200 dark:text-zinc-900'
                      }`}
                    >
                      {isCompleted(focusState.companion.book.id) ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                          <span>Finished</span>
                        </>
                      ) : (
                        <>
                          <Circle className="w-3.5 h-3.5" />
                          <span>Mark Read</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onSelectItem({ type: 'liberal', data: focusState.companion!.book as any })}
                      className="py-2 px-3 rounded-xl border border-black/[0.08] dark:border-white/[0.12] bg-zinc-50 dark:bg-zinc-800/60 hover:bg-zinc-100 text-zinc-700 dark:text-zinc-200 text-xs font-semibold flex items-center justify-center gap-1 transition cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Review Details</span>
                    </button>
                  </div>
                </div>
              ) : (

                <div className="rounded-3xl p-6 bg-zinc-50/70 dark:bg-zinc-900/40 border border-black/[0.06] dark:border-white/[0.06] flex flex-col justify-center items-center text-center h-full min-h-[180px] p-8 space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
                    <BookOpen className="w-5 h-5 text-zinc-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-serif font-semibold text-zinc-800 dark:text-zinc-200">
                      Single Focus
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-xs">
                      {focusState.companionMessage || 'No companion recommended. Read this one straight through.'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {focusState.primary.type === 'book' && focusState.primary.book && (
            <div className="rounded-3xl p-6 bg-white dark:bg-zinc-900 border border-black/[0.08] dark:border-white/[0.1] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-indigo-500" />
                  <h3 className="font-serif font-bold text-base text-zinc-900 dark:text-zinc-100">
                    Relationship Graph & Connections for {focusState.primary.book.title}
                  </h3>
                </div>
                <button
                  onClick={() => setShowRelationshipGraph(!showRelationshipGraph)}
                  className="text-xs font-mono text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 flex items-center gap-1 cursor-pointer"
                >
                  {showRelationshipGraph ? 'Collapse' : 'Expand'}
                  {showRelationshipGraph ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              {showRelationshipGraph && (
                <div className="space-y-4 pt-1">

                  {focusState.linkedBooks.requiresFirst.length > 0 ? (
                    <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
                          <Lock className="w-3.5 h-3.5 text-rose-500" />
                          Requires First (Blocking Prerequisite)
                        </span>
                        <span className="text-[11px] font-mono text-rose-700 dark:text-rose-400">
                          {focusState.linkedBooks.requiresFirst.filter(r => r.isDone).length} of {focusState.linkedBooks.requiresFirst.length} complete
                        </span>
                      </div>
                      <div className="divide-y divide-rose-200/40 dark:divide-rose-900/30">
                        {focusState.linkedBooks.requiresFirst.map((item, idx) => (
                          <div key={idx} className="py-2.5 flex items-start justify-between gap-3">
                            <div className="flex items-start gap-2.5">
                              {item.isDone ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              ) : (
                                <Lock className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                              )}
                              <div>
                                <h4
                                  onClick={() => onSelectItem({ type: 'liberal', data: item.book as any })}
                                  className="font-serif text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-rose-600 dark:hover:text-rose-400 cursor-pointer"
                                >
                                  {item.book.title}
                                </h4>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                  {item.book.author} · {item.book.course}
                                </p>
                                {item.link.note && (
                                  <p className="text-[11px] text-rose-700 dark:text-rose-300 italic mt-0.5">
                                    "{item.link.note}"
                                  </p>
                                )}
                              </div>
                            </div>
                            <button
                              onClick={() => toggleCompleted(item.book.id)}
                              className="text-xs font-mono px-2 py-1 rounded bg-white dark:bg-zinc-800 border border-black/5 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:text-emerald-500 transition cursor-pointer shrink-0"
                            >
                              {item.isDone ? 'Finished' : 'Mark Done'}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {focusState.linkedBooks.informs.length > 0 && (
                    <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-900/40 space-y-2.5">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-800 dark:text-indigo-300 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                        Part of this Conversation (Dialectical & Historical Dialogue)
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {focusState.linkedBooks.informs.map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => onSelectItem({ type: 'liberal', data: item.book as any })}
                            className="p-3 rounded-xl bg-white dark:bg-zinc-800/80 border border-indigo-100 dark:border-indigo-900/40 hover:border-indigo-400 cursor-pointer transition space-y-1"
                          >
                            <span className="font-serif font-semibold text-xs text-zinc-900 dark:text-zinc-100 block truncate">
                              {item.book.title}
                            </span>
                            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block truncate">
                              {item.book.author} · {item.book.course}
                            </span>
                            {item.link.note && (
                              <p className="text-[10px] text-indigo-600 dark:text-indigo-400 line-clamp-2 italic">
                                {item.link.note}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {focusState.linkedBooks.rereadEvents.length > 0 && (
                    <div className="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/60 dark:border-purple-900/40 space-y-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-800 dark:text-purple-300 flex items-center gap-1.5">
                        <RotateCcw className="w-3.5 h-3.5 text-purple-500" />
                        You Will Reread This In (Return Seminars)
                      </span>
                      <div className="space-y-1.5">
                        {focusState.linkedBooks.rereadEvents.map((event, idx) => (
                          <div key={idx} className="p-2.5 rounded-xl bg-white dark:bg-zinc-800/80 text-xs text-purple-900 dark:text-purple-200 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                            <span>{event.note || 'Scheduled for future synthetic re-encounter in Return Seminar'}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {focusState.linkedBooks.unlocksLater.length > 0 && (
                    <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 space-y-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                        <Unlock className="w-3.5 h-3.5 text-emerald-500" />
                        Unlocks Later (Subsequent Works Requiring This Text)
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {focusState.linkedBooks.unlocksLater.map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() => onSelectItem({ type: 'liberal', data: item.book as any })}
                            className="p-2.5 rounded-xl bg-white dark:bg-zinc-800/80 border border-emerald-100 dark:border-emerald-900/40 flex items-center justify-between gap-2 hover:border-emerald-400 cursor-pointer transition"
                          >
                            <div className="truncate">
                              <span className="font-serif font-semibold text-xs text-zinc-900 dark:text-zinc-100 block truncate">
                                {item.book.title}
                              </span>
                              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block truncate">
                                {item.book.author} · Stage {item.book.stage}
                              </span>
                            </div>
                            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {focusState.upNext.length > 0 && (
            <div className="p-5 rounded-3xl bg-zinc-50/80 dark:bg-zinc-900/60 border border-black/[0.05] dark:border-white/[0.06] space-y-2.5">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Up next in the spine queue
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {focusState.upNext.map((b, idx) => (
                  <div
                    key={b.id}
                    className="p-3.5 rounded-2xl border border-black/[0.05] dark:border-white/[0.06] bg-white/60 dark:bg-zinc-800/40 text-zinc-400 dark:text-zinc-500 flex items-center justify-between gap-3 select-none"
                  >
                    <div className="truncate">
                      <span className="text-[10px] font-mono block text-zinc-400">
                        #{idx + 1} subsequent · {b.course}
                      </span>
                      <span className="font-serif font-semibold text-sm text-zinc-500 dark:text-zinc-400 truncate block">
                        {b.title}
                      </span>
                      <span className="text-xs text-zinc-400 truncate block">
                        {b.author}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 shrink-0 text-zinc-300 dark:text-zinc-600" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {viewMode === 'full' && (
        <div className="space-y-6">

          <div className="p-5 rounded-3xl bg-white dark:bg-zinc-900 border border-black/[0.06] dark:border-white/[0.08] shadow-xs space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Search Great Books by title, author, or course code..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-black/[0.06] dark:border-white/[0.08] text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 dark:focus:ring-white/10"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">

              <div className="flex items-center gap-1 bg-zinc-50 dark:bg-zinc-800/60 p-1 rounded-xl border border-black/[0.04] dark:border-white/[0.06]">
                <span className="text-[10px] font-mono text-zinc-400 px-1.5 uppercase">Lane:</span>
                {LANE_KEYS.map(lane => (
                  <button
                    key={lane}
                    onClick={() => setActiveLane(lane)}
                    className={`px-2.5 py-1 rounded-lg font-mono transition cursor-pointer ${
                      activeLane === lane
                        ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-semibold shadow-xs'
                        : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    {lane}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1 bg-zinc-50 dark:bg-zinc-800/60 p-1 rounded-xl border border-black/[0.04] dark:border-white/[0.06]">
                <span className="text-[10px] font-mono text-zinc-400 px-1.5 uppercase">Stage:</span>
                {STAGE_KEYS.map(stg => (
                  <button
                    key={stg}
                    onClick={() => setActiveStage(stg)}
                    className={`px-2 py-1 rounded-lg font-mono transition cursor-pointer ${
                      activeStage === stg
                        ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-semibold shadow-xs'
                        : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    {stg === 'all' ? 'All' : stg}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1 bg-zinc-50 dark:bg-zinc-800/60 p-1 rounded-xl border border-black/[0.04] dark:border-white/[0.06]">
                <span className="text-[10px] font-mono text-zinc-400 px-1.5 uppercase">Type:</span>
                {TYPE_KEYS.map(tk => (
                  <button
                    key={tk}
                    onClick={() => setActiveType(tk)}
                    className={`px-2 py-1 rounded-lg font-mono transition cursor-pointer ${
                      activeType === tk
                        ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-semibold shadow-xs'
                        : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    {tk === 'all' ? 'All' : BOOK_TYPE_MAP[tk as keyof typeof BOOK_TYPE_MAP]?.label || tk}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-black/[0.05] dark:border-white/[0.06] text-xs text-zinc-500 font-mono">
              <span>Showing {filteredWorks.length} of {ENRICHED_LIBERAL_WORKS.length} works</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={expandAll}
                  className="hover:text-zinc-900 dark:hover:text-zinc-200 transition cursor-pointer"
                >
                  Expand All
                </button>
                <span>·</span>
                <button
                  onClick={collapseAll}
                  className="hover:text-zinc-900 dark:hover:text-zinc-200 transition cursor-pointer"
                >
                  Collapse All
                </button>
                <span>·</span>
                <button
                  onClick={handleDownloadMasterCurriculum}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Download className="w-3 h-3" />
                  <span>Download Curriculum</span>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {stagesList.map(stg => {
              const booksInStage = groupedByStage[stg] || [];
              if (booksInStage.length === 0) return null;
              const isCollapsed = Boolean(collapsedStages[String(stg)]);
              const stageCompletedCount = booksInStage.filter(b => isCompleted(b.id)).length;
              const stgColor = STAGE_CONFIG[stg]?.color || '#FFD6E0';

              return (
                <div
                  key={stg}
                  className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] overflow-hidden bg-white dark:bg-zinc-900"
                >

                  <div
                    onClick={() => toggleStageCollapse(stg)}
                    className="p-4 flex items-center justify-between gap-3 cursor-pointer select-none transition hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
                    style={{ borderLeft: `5px solid ${stgColor}` }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        Stage {stg}
                      </span>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                        {STAGE_CONFIG[stg]?.name}
                      </h3>
                      <span className="text-xs font-mono text-zinc-400">
                        ({stageCompletedCount}/{booksInStage.length})
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-zinc-400">
                      {isCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                    </div>
                  </div>

                  {!isCollapsed && (
                    <div className="p-4 pt-1 border-t border-black/[0.05] dark:border-white/[0.05] divide-y divide-black/[0.04] dark:divide-white/[0.04]">
                      {booksInStage.map(book => {
                        const completed = isCompleted(book.id);
                        const isContext = book.lane === 'context';
                        const isSpine = book.lane === 'spine';
                        const isReference = book.lane === 'reference';
                        const relatedSpine = isContext ? getRelatedSpineBooksForContext(book.id) : [];
                        const refRelatedSpines = isReference ? getRelatedSpineBooksForReference(book.id) : [];
                        const essay = getSynthesisEssayForBook(book.id);
                        const isEssayCompleted = essay ? isCompleted(essay.id) : false;

                        return (
                          <div
                            key={book.id}
                            className="py-3 flex items-start justify-between gap-3 group"
                          >
                            <div className="flex items-start gap-3 flex-1 min-w-0">
                              <button
                                onClick={() => toggleCompleted(book.id)}
                                className="mt-1 text-zinc-400 hover:text-emerald-500 transition cursor-pointer shrink-0"
                              >
                                {completed ? (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                ) : (
                                  <Circle className="w-4 h-4" />
                                )}
                              </button>

                              <div className="space-y-1 flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span
                                    className="text-[10px] font-mono px-1.5 py-0.5 rounded border uppercase"
                                    style={{
                                      backgroundColor: (LANE_CONFIG[book.lane === 'spine' ? 'Spine' : book.lane === 'reference' ? 'Reference' : 'Context']?.color || '#BAE1FF') + '25',
                                      borderColor: LANE_CONFIG[book.lane === 'spine' ? 'Spine' : book.lane === 'reference' ? 'Reference' : 'Context']?.color || '#BAE1FF',
                                      color: '#27272a',
                                    }}
                                  >
                                    {book.lane}
                                  </span>
                                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                                    {book.course}
                                  </span>
                                  <span className="text-[10px] font-mono text-zinc-400">
                                    {book.status}
                                  </span>

                                  {isContext && relatedSpine.length > 0 && (
                                    <span
                                      onClick={() => onSelectItem({ type: 'liberal', data: relatedSpine[0] as any })}
                                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 hover:border-amber-400 cursor-pointer"
                                      title={`Provides context for: ${relatedSpine.map(s => s.title).join(', ')}`}
                                    >
                                      Context for: {relatedSpine[0].title}{relatedSpine.length > 1 ? ` (+${relatedSpine.length - 1})` : ''}
                                    </span>
                                  )}

                                  {isReference && refRelatedSpines.length > 0 && (
                                    <span
                                      onClick={() => onSelectItem({ type: 'liberal', data: refRelatedSpines[0] as any })}
                                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 hover:border-indigo-400 cursor-pointer"
                                      title={`Supports Spine: ${refRelatedSpines.map(s => s.title).join(', ')}`}
                                    >
                                      Supports: {refRelatedSpines[0].title}{refRelatedSpines.length > 1 ? ` (+${refRelatedSpines.length - 1})` : ''}
                                    </span>
                                  )}

                                  {essay && (
                                    <span
                                      onClick={() => onSelectItem({ type: 'liberal', data: book as any })}
                                      className={`text-[10px] font-mono px-2 py-0.5 rounded-md border flex items-center gap-1 cursor-pointer transition ${
                                        isEssayCompleted
                                          ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200'
                                          : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-900/40 hover:border-rose-400'
                                      }`}
                                      title={`Attached synthesis essay: ${essay.title}`}
                                    >
                                      <PenTool className="w-2.5 h-2.5" />
                                      <span>Synthesis Essay{isEssayCompleted ? ' ✓' : ''}</span>
                                    </span>
                                  )}
                                </div>

                                <h4
                                  onClick={() => onSelectItem({ type: 'liberal', data: book as any })}
                                  className={`font-serif text-sm font-semibold truncate hover:text-rose-600 dark:hover:text-rose-400 cursor-pointer transition ${
                                    completed ? 'line-through text-zinc-400 dark:text-zinc-500' : 'text-zinc-900 dark:text-zinc-100'
                                  }`}
                                >
                                  {book.title}
                                </h4>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                                  {book.author} · {book.courseTitle}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <button
                                onClick={() => onSelectItem({ type: 'liberal', data: book as any })}
                                className="p-1.5 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition cursor-pointer"
                                title="Review more information"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {showMasterCurriculumModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-xl bg-white dark:bg-zinc-900 rounded-2xl border border-black/[0.08] dark:border-white/[0.12] shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] dark:border-white/[0.08]">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-indigo-500" />
                <h3 className="font-serif font-bold text-lg text-zinc-900 dark:text-zinc-50">
                  Master Curriculum Specification Deliverable
                </h3>
              </div>
              <button
                onClick={() => setShowMasterCurriculumModal(false)}
                className="p-1 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <p>
                The master curriculum data has been cleaned and unified. All internal development notes, drafting annotations, and meta-commentary have been purged.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-black/5 dark:border-white/5">
                <div>Total Preserved Works: <strong className="text-zinc-900 dark:text-white">314</strong></div>
                <div>Compulsory Spine Works: <strong className="text-zinc-900 dark:text-white">139</strong></div>
                <div>Context Works Mapped: <strong className="text-zinc-900 dark:text-white">149 (100%)</strong></div>
                <div>Cumulative Synthesis Essays: <strong className="text-zinc-900 dark:text-white">138</strong></div>
                <div>First Spine Exemption: <strong className="text-zinc-900 dark:text-white">ORIG-018 (Hebrew Bible)</strong></div>
                <div>Curriculum Stages: <strong className="text-zinc-900 dark:text-white">7 (100–700)</strong></div>
              </div>
              <p className="text-[11px] text-zinc-500">
                You can download the full, machine-readable JSON specification containing every work record, its assigned course, explicit spine associations, and attached synthesis essay prompts.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2.5">
              <button
                onClick={() => setShowMasterCurriculumModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              >
                Close
              </button>
              <button
                onClick={handleDownloadMasterCurriculum}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 flex items-center gap-1.5 shadow-xs transition hover:opacity-90"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Master JSON</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
