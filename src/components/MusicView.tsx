import React, { useState, useMemo } from 'react';
import {
  Search,
  X,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Circle,
  Clock,
  Music,
  ArrowRight,
  Eye,
  ListFilter,
  Compass,
  Award,
  Sparkles,
} from 'lucide-react';
import {
  REVISED_MUSIC_WORKS,
  MusicItem,
} from '../data/curriculumData';
import { calculateMusicSchedule } from '../utils/musicSchedule';
import { SelectedItem } from './DetailModal';

interface MusicViewProps {
  onSelectItem: (item: SelectedItem) => void;
  isCompleted: (id: string) => boolean;
  toggleCompleted: (id: string) => void;
  completedIds?: Record<string, boolean>;
}

export const MUSIC_SUBJECT_KEYS = [
  'all',
  'Musical Theatre',
  'Classical Singing',
  'Dance',
  'Music Theory',
  'Composition',
  'Music Production',
  'Jazz Piano',
  'Jazz Guitar',
  'Teaching',
] as const;

export const MusicView: React.FC<MusicViewProps> = ({
  onSelectItem,
  isCompleted,
  toggleCompleted,
  completedIds = {},
}) => {
  const [viewMode, setViewMode] = useState<'focused' | 'full'>('focused');
  const [search, setSearch] = useState('');
  const [activeSubject, setActiveSubject] = useState<string>('all');
  const [collapsedSubjects, setCollapsedSubjects] = useState<Record<string, boolean>>({});

  const musicScheduleData = useMemo(() => calculateMusicSchedule(completedIds), [completedIds]);
  const musicScheduleMap = useMemo(() => {
    const map = new Map<string, (typeof musicScheduleData.items)[0]>();
    musicScheduleData.items.forEach(it => map.set(it.id, it));
    return map;
  }, [musicScheduleData]);

  const completedItems = useMemo(() => {
    return REVISED_MUSIC_WORKS.filter(m => isCompleted(m.id));
  }, [isCompleted]);

  const progressPercent = Math.round(
    (completedItems.length / REVISED_MUSIC_WORKS.length) * 100
  );

  // Active Primary Item (immediate next uncompleted exam)
  const primaryIndex = useMemo(() => {
    const idx = REVISED_MUSIC_WORKS.findIndex(m => !isCompleted(m.id));
    return idx !== -1 ? idx : 0;
  }, [isCompleted]);

  const primaryItem = REVISED_MUSIC_WORKS[primaryIndex] || REVISED_MUSIC_WORKS[0];
  const primaryItemSched = musicScheduleMap.get(primaryItem.id);

  // Active Secondary Item (the upcoming qualification following primary)
  const secondaryItem = primaryIndex + 1 < REVISED_MUSIC_WORKS.length ? REVISED_MUSIC_WORKS[primaryIndex + 1] : null;
  const secondaryItemSched = secondaryItem ? musicScheduleMap.get(secondaryItem.id) : null;

  // Upcoming Queue: 4 qualifications following secondary
  const upcomingQueue = useMemo(() => {
    return REVISED_MUSIC_WORKS.slice(primaryIndex + 2, primaryIndex + 6);
  }, [primaryIndex]);

  const filteredWorks = useMemo(() => {
    const q = search.toLowerCase().trim();
    return REVISED_MUSIC_WORKS.filter(item => {
      const matchText =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.subject.toLowerCase().includes(q) ||
        item.year.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q) ||
        String(item.orderNum) === q;
      const matchSubject = activeSubject === 'all' || item.subject === activeSubject;
      return matchText && matchSubject;
    });
  }, [search, activeSubject]);

  const subjectsList = useMemo(() => {
    return MUSIC_SUBJECT_KEYS.filter(s => s !== 'all') as string[];
  }, []);

  const groupedBySubject = useMemo(() => {
    const map: Record<string, MusicItem[]> = {};
    filteredWorks.forEach(item => {
      if (!map[item.subject]) map[item.subject] = [];
      map[item.subject].push(item);
    });
    return map;
  }, [filteredWorks]);

  const toggleSubjectCollapse = (subj: string) => {
    setCollapsedSubjects(prev => ({
      ...prev,
      [subj]: !prev[subj],
    }));
  };

  const expandAll = () => setCollapsedSubjects({});
  const collapseAll = () => {
    const allCollapsed: Record<string, boolean> = {};
    subjectsList.forEach(s => {
      allCollapsed[s] = true;
    });
    setCollapsedSubjects(allCollapsed);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Header & View Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 flex items-center justify-center">
              <Music className="w-4 h-4" />
            </div>
            <h1 className="font-serif text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Western Western & World Music Conservatory World Music
            </h1>
          </div>
          <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
            {REVISED_MUSIC_WORKS.length} Certifications · 9 Subject Disciplines · Performance & Composition
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center gap-1 text-xs font-medium">
            <button
              onClick={() => setViewMode('focused')}
              className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'focused'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-semibold shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>What to Study Now</span>
            </button>
            <button
              onClick={() => setViewMode('full')}
              className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'full'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-semibold shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900'
              }`}
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>Complete Curriculum ({REVISED_MUSIC_WORKS.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Clean Unified Status Strip */}
      <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-black/[0.06] dark:border-white/[0.08] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Award className="w-5 h-5 text-amber-500 shrink-0" />
          <div>
            <div className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400">
              Milestones Certified
            </div>
            <div className="text-lg font-serif font-bold text-zinc-900 dark:text-zinc-100">
              {completedItems.length}{' '}
              <span className="text-xs font-mono font-normal text-zinc-400">
                / {REVISED_MUSIC_WORKS.length} qualifications ({progressPercent}%)
              </span>
            </div>
          </div>
        </div>

        {/* Current Allocation Pill */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap text-xs font-mono">
          <div className="px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/40 text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Weekly Allocation: <strong>{musicScheduleData.currentWeeklyAllocation} hrs/wk</strong></span>
            <span className="text-zinc-400">·</span>
            <span>{musicScheduleData.isFinalLanguageAcquired ? 'Elevated (Languages Completed)' : 'Strict Baseline'}</span>
          </div>
          <div className="px-2.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold">
            9 Disciplines
          </div>
        </div>
      </div>

      {/* VIEW MODE: WHAT TO STUDY NOW (FOCUSED) */}
      {viewMode === 'focused' && (
        <div className="space-y-6">
          {/* Main Hero: What You Need to Study Now */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <h2 className="font-serif text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  What You Need to Study Now
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                Primary Examination ({primaryItemSched?.weeklyRate || 5} hrs/wk) & Secondary Upcoming Repertoire
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* 1. PRIMARY PRACTICE TARGET */}
              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-white via-amber-50/30 to-orange-50/20 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-850 border-2 border-amber-400/80 dark:border-amber-600/80 shadow-sm space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-black/[0.05] dark:border-white/[0.06] pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500 text-white shadow-xs">
                        Primary Target · {primaryItemSched?.weeklyRate || 5} hrs/wk
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        #{primaryItem.orderNum} of {REVISED_MUSIC_WORKS.length}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                      Active Examination
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-amber-100/70 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200 border border-amber-200/50">
                        {primaryItem.subject}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        Stage {primaryItem.stage} · {primaryItem.stageName}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight pt-1">
                      {primaryItem.title}
                    </h3>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 rounded-2xl bg-white/90 dark:bg-zinc-800/80 border border-amber-100 dark:border-amber-900/50 text-xs font-mono">
                    <div>
                      <span className="text-[10px] text-zinc-400 block">Required Hours</span>
                      <span className="font-bold text-zinc-900 dark:text-zinc-100">{primaryItem.hours} hrs</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-400 block">Weekly Pacing</span>
                      <span className="font-bold text-amber-700 dark:text-amber-400">
                        {primaryItemSched?.weeklyRate || 5} hrs/wk
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-400 block">Projected Completion</span>
                      <span className="font-bold text-zinc-900 dark:text-zinc-100">{primaryItemSched?.completionDate || primaryItem.year}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-400 block">Pacing Status</span>
                      <span className="font-bold text-amber-800 dark:text-amber-300">
                        {primaryItemSched?.weeklyRate === 20
                          ? 'Elevated (20h/wk)'
                          : primaryItemSched?.weeklyRate === 10
                          ? 'Accelerated (10h/wk)'
                          : 'Baseline (5h/wk)'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 pt-3 border-t border-black/[0.05] dark:border-white/[0.06]">
                  <button
                    onClick={() => toggleCompleted(primaryItem.id)}
                    className={`py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer shadow-xs ${
                      isCompleted(primaryItem.id)
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        : 'bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950'
                    }`}
                  >
                    {isCompleted(primaryItem.id) ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Certified Complete</span>
                      </>
                    ) : (
                      <>
                        <Circle className="w-4 h-4" />
                        <span>Mark Certification Complete</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onSelectItem({ type: 'music', data: primaryItem })}
                    className="py-2.5 px-3.5 rounded-xl border border-black/[0.08] dark:border-white/[0.12] bg-white dark:bg-zinc-800 text-xs font-medium flex items-center gap-1.5 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 transition cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect Details</span>
                  </button>
                </div>
              </div>

              {/* 2. SECONDARY PRACTICE TARGET (Up Next in Repertoire) */}
              {secondaryItem ? (
                <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-white via-orange-50/20 to-amber-50/20 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-850 border-2 border-amber-300/60 dark:border-amber-700/50 shadow-sm space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-black/[0.05] dark:border-white/[0.06] pb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-200 border border-amber-200/50 shadow-xs">
                          Secondary Target · Up Next
                        </span>
                        <span className="text-xs font-mono text-zinc-400">
                          #{secondaryItem.orderNum} of {REVISED_MUSIC_WORKS.length}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-amber-100/70 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
                        In Preparation
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-amber-100/70 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200 border border-amber-200/50">
                          {secondaryItem.subject}
                        </span>
                        <span className="text-xs font-mono text-zinc-400">
                          Stage {secondaryItem.stage} · {secondaryItem.stageName}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight pt-1">
                        {secondaryItem.title}
                      </h3>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 rounded-2xl bg-white/90 dark:bg-zinc-800/80 border border-amber-100 dark:border-amber-900/50 text-xs font-mono">
                      <div>
                        <span className="text-[10px] text-zinc-400 block">Required Hours</span>
                        <span className="font-bold text-zinc-900 dark:text-zinc-100">{secondaryItem.hours} hrs</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-400 block">Projected Start</span>
                        <span className="font-bold text-zinc-900 dark:text-zinc-100">{secondaryItemSched?.startDate || 'Upon Primary Pass'}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-400 block">Projected Target</span>
                        <span className="font-bold text-amber-700 dark:text-amber-300">{secondaryItemSched?.completionDate || secondaryItem.year}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-400 block">Planned Rate</span>
                        <span className="font-bold text-amber-800 dark:text-amber-300">
                          {secondaryItemSched?.weeklyRate || 5} hrs/wk
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-3 border-t border-black/[0.05] dark:border-white/[0.06]">
                    <div className="text-[11px] text-zinc-500 font-mono">
                      Next sequential certification. Build repertoire technique in parallel.
                    </div>

                    <button
                      onClick={() => onSelectItem({ type: 'music', data: secondaryItem })}
                      className="py-2.5 px-3.5 rounded-xl border border-black/[0.08] dark:border-white/[0.12] bg-white dark:bg-zinc-800 text-xs font-medium flex items-center gap-1.5 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 transition cursor-pointer shrink-0"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Details</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-dashed border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center text-center p-8 space-y-2">
                  <span className="text-xs font-mono text-zinc-400">Final Qualification in Sequence</span>
                  <p className="font-serif text-sm font-semibold text-zinc-600 dark:text-zinc-300">
                    You have reached the final conservatory qualification in the sequence.
                  </p>
                </div>
              )}
            </div>

          {/* Upcoming Pipeline */}
          {upcomingQueue.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Upcoming Queue
                </h3>
                <span className="text-xs font-mono text-zinc-400">
                  Next {upcomingQueue.length} qualifications in sequence
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {upcomingQueue.map(item => {
                  const sched = musicScheduleMap.get(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => onSelectItem({ type: 'music', data: item })}
                      className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-black/[0.06] dark:border-white/[0.08] hover:border-amber-400 dark:hover:border-amber-500 transition cursor-pointer shadow-xs space-y-2 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                          #{item.orderNum}
                        </span>
                        <span className="text-[10px] font-mono text-amber-700 dark:text-amber-400 font-medium">
                          {item.subject}
                        </span>
                      </div>

                      <h4 className="font-serif text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition truncate">
                        {item.title}
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                        {item.hours} hrs · Target: {sched?.completionDate || item.year}
                      </p>

                      <div className="text-[10px] font-mono text-zinc-400 pt-1 border-t border-black/[0.04] dark:border-white/[0.04] flex justify-between">
                        <span>Pacing: {sched?.weeklyRate || 5} hrs/wk</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* VIEW MODE: FULL CURRICULUM */}
      {viewMode === 'full' && (
        <div className="space-y-5">
          {/* Search & Pure Subject Filter Area */}
          <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-black/[0.06] dark:border-white/[0.08] shadow-xs space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Search music exams by certification title, subject, year..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-9 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-black/[0.06] dark:border-white/[0.08] text-xs font-sans text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Subject Filter Chips ONLY */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                Filter by Music Subject:
              </span>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {MUSIC_SUBJECT_KEYS.map(s => (
                  <button
                    key={s}
                    onClick={() => setActiveSubject(s)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition shrink-0 cursor-pointer ${
                      activeSubject === s
                        ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-semibold shadow-xs'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                    }`}
                  >
                    {s === 'all' ? 'All Subjects' : s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-500 pt-2 border-t border-black/[0.05] dark:border-white/[0.06]">
              <span>
                Showing {filteredWorks.length} of {REVISED_MUSIC_WORKS.length} items
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={expandAll}
                  className="hover:text-zinc-900 dark:hover:text-white transition cursor-pointer font-mono text-[11px]"
                >
                  Expand All
                </button>
                <span>·</span>
                <button
                  onClick={collapseAll}
                  className="hover:text-zinc-900 dark:hover:text-white transition cursor-pointer font-mono text-[11px]"
                >
                  Collapse All
                </button>
              </div>
            </div>
          </div>

          {/* Grouped by Subject */}
          <div className="space-y-4">
            {subjectsList.map(subj => {
              const itemsInSubj = groupedBySubject[subj] || [];
              if (itemsInSubj.length === 0) return null;
              const isCollapsed = Boolean(collapsedSubjects[subj]);
              const subjCompletedCount = itemsInSubj.filter(m => isCompleted(m.id)).length;
              const subjPercent = Math.round((subjCompletedCount / itemsInSubj.length) * 100);

              return (
                <div
                  key={subj}
                  className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08] overflow-hidden bg-white dark:bg-zinc-900 shadow-xs"
                >
                  <div
                    onClick={() => toggleSubjectCollapse(subj)}
                    className="p-4 flex items-center justify-between gap-3 cursor-pointer select-none transition hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-100/70 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 flex items-center justify-center font-bold text-xs">
                        {subj.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-serif text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                          {subj}
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                          <span>
                            {subjCompletedCount} / {itemsInSubj.length} completed ({subjPercent}%)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="hidden sm:block w-32 h-1.5 rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-amber-500 progress-bar-smooth"
                          style={{ width: `${subjPercent}%` }}
                        />
                      </div>
                      <div className="text-zinc-400">
                        {isCollapsed ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronUp className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                  </div>

                  {!isCollapsed && (
                    <div className="p-4 pt-1 border-t border-black/[0.05] dark:border-white/[0.05] divide-y divide-black/[0.04] dark:divide-white/[0.04]">
                      {itemsInSubj.map(item => {
                        const completed = isCompleted(item.id);
                        const sched = musicScheduleMap.get(item.id);
                        return (
                          <div
                            key={item.id}
                            className="py-3 flex items-start justify-between gap-3 group"
                          >
                            <div className="flex items-start gap-3 flex-1 min-w-0">
                              <button
                                onClick={() => toggleCompleted(item.id)}
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
                                  <span className="text-[10px] font-mono font-semibold text-zinc-400">
                                    #{item.orderNum}
                                  </span>
                                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                                    {item.subject}
                                  </span>
                                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200 font-semibold border border-amber-200/40">
                                    {sched?.weeklyRate === 20 ? '20 hrs/wk' : '5 hrs/wk'}
                                  </span>
                                </div>

                                <h4
                                  onClick={() => onSelectItem({ type: 'music', data: item })}
                                  className={`font-serif text-sm font-semibold truncate hover:text-amber-600 dark:hover:text-amber-400 cursor-pointer transition ${
                                    completed
                                      ? 'line-through text-zinc-400 dark:text-zinc-500'
                                      : 'text-zinc-900 dark:text-zinc-100'
                                  }`}
                                >
                                  {item.title}
                                </h4>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                                  {item.hours} hours · Target: {sched?.completionDate || item.year}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <button
                                onClick={() => onSelectItem({ type: 'music', data: item })}
                                className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 transition cursor-pointer"
                              >
                                Details
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
    </div>
  );
};
