import React, { useState, useMemo } from 'react';
import {
  Search,
  X,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Circle,
  Languages,
  Eye,
  ListFilter,
  Compass,
  Globe,
  Clock,
  Zap,
  Calendar,
  Layers,
} from 'lucide-react';
import {
  REVISED_LANGUAGE_WORKS,
  LanguageItem,
} from '../data/curriculumData';
import {
  calculateConcurrentSchedule,
  ConcurrentLanguageScheduleItem,
} from '../utils/languageSchedule';
import { SelectedItem } from './DetailModal';

interface LanguageViewProps {
  onSelectItem: (item: SelectedItem) => void;
  isCompleted: (id: string) => boolean;
  toggleCompleted: (id: string) => void;
}

export const LINGUISTIC_FILTER_KEYS = [
  'all',
  'Indo-European (Romance)',
  'Indo-European (Germanic)',
  'Indo-European (Slavic)',
  'Indo-European (Indo-Iranian)',
  'Indo-European (Hellenic & Albanian)',
  'Sino-Tibetan (Sinitic)',
  'Afroasiatic (Semitic)',
  'Japonic',
  'Koreanic',
  'Austronesian & Turkic',
] as const;

export const GENEALOGICAL_FAMILIES = [
  'Indo-European',
  'Sino-Tibetan',
  'Afroasiatic',
  'Japonic',
  'Koreanic',
  'Austronesian',
  'Turkic',
] as const;

export const LanguageView: React.FC<LanguageViewProps> = ({
  onSelectItem,
  isCompleted,
  toggleCompleted,
}) => {
  const [viewMode, setViewMode] = useState<'focused' | 'full'>('focused');
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [collapsedFamilies, setCollapsedFamilies] = useState<Record<string, boolean>>({});
  const [showTransitions, setShowTransitions] = useState<boolean>(false);

  // Compute live concurrent schedule reflecting any stored completions
  const scheduleData = useMemo(() => {
    const completedMap: Record<string, boolean> = {};
    REVISED_LANGUAGE_WORKS.forEach(item => {
      if (isCompleted(item.id)) completedMap[item.id] = true;
    });
    return calculateConcurrentSchedule(completedMap);
  }, [isCompleted]);

  const completedItems = useMemo(() => {
    return REVISED_LANGUAGE_WORKS.filter(l => isCompleted(l.id));
  }, [isCompleted]);

  const progressPercent = Math.round(
    (completedItems.length / REVISED_LANGUAGE_WORKS.length) * 100
  );

  const activePrimary = scheduleData.activePrimary;
  const activeSecondary = scheduleData.activeSecondary;

  // Upcoming queue: uncompleted items following active secondary
  const upcomingQueue = useMemo(() => {
    const primaryId = activePrimary?.id;
    const secondaryId = activeSecondary?.id;
    return scheduleData.languages
      .filter(l => !isCompleted(l.id) && l.id !== primaryId && l.id !== secondaryId)
      .slice(0, 4);
  }, [scheduleData.languages, activePrimary, activeSecondary, isCompleted]);

  const matchesLinguisticFilter = (item: LanguageItem, filterKey: string) => {
    if (filterKey === 'all') return true;
    if (filterKey === 'Indo-European (Romance)') {
      return item.group === 'Indo-European' && item.subgroup === 'Romance';
    }
    if (filterKey === 'Indo-European (Germanic)') {
      return item.group === 'Indo-European' && item.subgroup === 'Germanic';
    }
    if (filterKey === 'Indo-European (Slavic)') {
      return item.group === 'Indo-European' && item.subgroup === 'Slavic';
    }
    if (filterKey === 'Indo-European (Indo-Iranian)') {
      return item.group === 'Indo-European' && item.subgroup === 'Indo-Iranian';
    }
    if (filterKey === 'Indo-European (Hellenic & Albanian)') {
      return item.group === 'Indo-European' && (item.subgroup === 'Hellenic' || item.subgroup === 'Albanian');
    }
    if (filterKey === 'Sino-Tibetan (Sinitic)') {
      return item.group === 'Sino-Tibetan';
    }
    if (filterKey === 'Afroasiatic (Semitic)') {
      return item.group === 'Afroasiatic';
    }
    if (filterKey === 'Japonic') {
      return item.group === 'Japonic';
    }
    if (filterKey === 'Koreanic') {
      return item.group === 'Koreanic';
    }
    if (filterKey === 'Austronesian & Turkic') {
      return item.group === 'Austronesian' || item.group === 'Turkic';
    }
    return true;
  };

  const filteredWorks = useMemo(() => {
    const q = search.toLowerCase().trim();
    return scheduleData.languages.filter(item => {
      const matchText =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.lang.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q) ||
        item.subgroup.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q) ||
        String(item.orderNum) === q;
      const matchLinguistic = matchesLinguisticFilter(item, activeFilter);
      return matchText && matchLinguistic;
    });
  }, [search, activeFilter, scheduleData.languages]);

  const groupedByFamily = useMemo(() => {
    const map: Record<string, ConcurrentLanguageScheduleItem[]> = {};
    filteredWorks.forEach(item => {
      if (!map[item.group]) map[item.group] = [];
      map[item.group].push(item);
    });
    return map;
  }, [filteredWorks]);

  const toggleFamilyCollapse = (fam: string) => {
    setCollapsedFamilies(prev => ({
      ...prev,
      [fam]: !prev[fam],
    }));
  };

  const expandAll = () => setCollapsedFamilies({});
  const collapseAll = () => {
    const allCollapsed: Record<string, boolean> = {};
    GENEALOGICAL_FAMILIES.forEach(f => {
      allCollapsed[f] = true;
    });
    setCollapsedFamilies(allCollapsed);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Header & View Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-black/[0.06] dark:border-white/[0.08]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 flex items-center justify-center">
              <Languages className="w-4 h-4" />
            </div>
            <h1 className="font-serif text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Genealogical Polyglot Curriculum
            </h1>
          </div>
          <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
            {scheduleData.languages.length} Languages · 7 Genealogical Families · 15 hrs/wk Combined
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
              <span>Complete Curriculum ({scheduleData.languages.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Clean Unified Status Strip */}
      <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-black/[0.06] dark:border-white/[0.08] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-emerald-500 shrink-0" />
          <div>
            <div className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400">
              Languages Certified Complete
            </div>
            <div className="text-lg font-serif font-bold text-zinc-900 dark:text-zinc-100">
              {completedItems.length}{' '}
              <span className="text-xs font-mono font-normal text-zinc-400">
                / {scheduleData.languages.length} languages ({progressPercent}%)
              </span>
            </div>
          </div>
        </div>

        {/* Current Active Duo Pacing */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap text-xs font-mono">
          <div className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span>{scheduleData.isGermanMastered ? 'Track A' : 'Primary'}: <strong>{activePrimary?.lang || 'All Acquired'}</strong> ({activePrimary?.currentWeeklyHours ?? 0}h/wk)</span>
          </div>
          {activeSecondary && (
            <div className="px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200/60 dark:border-teal-800/40 text-teal-900 dark:text-teal-200 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-400 inline-block" />
              <span>{scheduleData.isGermanMastered ? 'Track B' : 'Secondary'}: <strong>{activeSecondary.lang}</strong> ({activeSecondary.currentWeeklyHours}h/wk)</span>
            </div>
          )}
          <div className="px-2.5 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold">
            {scheduleData.totalWeeklyHours} hrs/wk Combined
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
                <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <h2 className="font-serif text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  What You Need to Study Now
                </h2>
              </div>
              <span className="text-xs font-mono text-zinc-400">
                {scheduleData.isGermanMastered
                  ? 'Dual Simultaneous Study (5 hrs/wk each · 10 hrs/wk total)'
                  : 'Concurrent Primary (10 hrs/wk) & Secondary (5 hrs/wk) Model'}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* 1. PRIMARY / TRACK A STUDY TARGET */}
              {activePrimary ? (
                <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-850 border-2 border-emerald-500/80 dark:border-emerald-600/80 shadow-sm space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-black/[0.05] dark:border-white/[0.06] pb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-600 text-white shadow-xs">
                          {scheduleData.isGermanMastered ? 'Active Track A' : 'Primary Target'} · {activePrimary.currentWeeklyHours} hrs/wk
                        </span>
                        <span className="text-xs font-mono text-zinc-400">
                          #{activePrimary.orderNum} of {scheduleData.languages.length}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-emerald-100/80 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                        Active Study Now
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
                        {activePrimary.lang}
                      </h3>
                      <p className="text-xs font-serif italic text-zinc-600 dark:text-zinc-300">
                        {activePrimary.title}
                      </p>
                      <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500 pt-0.5 flex-wrap">
                        <span>Family: {activePrimary.group}</span>
                        <span>·</span>
                        <span>Branch: {activePrimary.subgroup}</span>
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 rounded-2xl bg-white/90 dark:bg-zinc-800/80 border border-emerald-100 dark:border-emerald-900/50 text-xs font-mono">
                      <div>
                        <span className="text-[10px] text-zinc-400 block">Total Target</span>
                        <span className="font-bold text-zinc-900 dark:text-zinc-100">{activePrimary.requiredHours} hrs</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-400 block">Pre-Study Credit</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">
                          +{activePrimary.orderNum === 1 ? '218.6h' : `${activePrimary.accumulatedAsSecondary}h`}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-400 block">Remaining Work</span>
                        <span className="font-bold text-zinc-900 dark:text-zinc-100">{activePrimary.remainingHoursAtPromotion} hrs</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-400 block">Projected Mastery</span>
                        <span className="font-bold text-emerald-700 dark:text-emerald-300">{activePrimary.projectedMasteryDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-3 border-t border-black/[0.05] dark:border-white/[0.06]">
                    <button
                      onClick={() => toggleCompleted(activePrimary.id)}
                      className={`py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer shadow-xs ${
                        isCompleted(activePrimary.id)
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                          : 'bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950'
                      }`}
                    >
                      {isCompleted(activePrimary.id) ? (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Certified Mastered</span>
                        </>
                      ) : (
                        <>
                          <Circle className="w-4 h-4" />
                          <span>Mark Certified Complete</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onSelectItem({ type: 'lang', data: activePrimary })}
                      className="py-2.5 px-3.5 rounded-xl border border-black/[0.08] dark:border-white/[0.12] bg-white dark:bg-zinc-800 text-xs font-medium flex items-center gap-1.5 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 transition cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Details</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-3xl bg-emerald-50/50 dark:bg-zinc-900 border border-emerald-200 dark:border-emerald-800 text-center p-8 flex flex-col items-center justify-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  <h3 className="font-serif text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    All 24 Languages Certified Complete!
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    You have achieved certified hyperpolyglot fluency across the entire 24-language curriculum.
                  </p>
                </div>
              )}

              {/* 2. SECONDARY / TRACK B STUDY TARGET */}
              {activeSecondary ? (
                <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-white via-teal-50/25 to-sky-50/20 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-850 border-2 border-teal-400/70 dark:border-teal-700/60 shadow-sm space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-black/[0.05] dark:border-white/[0.06] pb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950/80 text-teal-800 dark:text-teal-200 border border-teal-200/50 shadow-xs">
                          {scheduleData.isGermanMastered ? 'Active Track B' : 'Secondary Target'} · {activeSecondary.currentWeeklyHours} hrs/wk
                        </span>
                        <span className="text-xs font-mono text-zinc-400">
                          #{activeSecondary.orderNum} of {scheduleData.languages.length}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-teal-100/80 dark:bg-teal-950 text-teal-800 dark:text-teal-300">
                        {scheduleData.isGermanMastered ? 'Simultaneous Track' : 'Concurrent Prep'}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
                        {activeSecondary.lang}
                      </h3>
                      <p className="text-xs font-serif italic text-zinc-600 dark:text-zinc-300">
                        {activeSecondary.title}
                      </p>
                      <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500 pt-0.5 flex-wrap">
                        <span>Family: {activeSecondary.group}</span>
                        <span>·</span>
                        <span>Branch: {activeSecondary.subgroup}</span>
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 rounded-2xl bg-white/90 dark:bg-zinc-800/80 border border-teal-100 dark:border-teal-900/50 text-xs font-mono">
                      <div>
                        <span className="text-[10px] text-zinc-400 block">Total Target</span>
                        <span className="font-bold text-zinc-900 dark:text-zinc-100">{activeSecondary.requiredHours} hrs</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-400 block">
                          {scheduleData.isGermanMastered ? 'Current Accrual' : 'Accruing Credit'}
                        </span>
                        <span className="font-bold text-teal-600 dark:text-teal-400">
                          +{scheduleData.isGermanMastered ? `${activeSecondary.totalAccumulatedHours}h` : `${activeSecondary.accumulatedAsSecondary}h`}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-400 block">
                          {scheduleData.isGermanMastered ? 'Start Date' : 'Promotion Date'}
                        </span>
                        <span className="font-bold text-zinc-900 dark:text-zinc-100">{activeSecondary.startDateAsPrimary}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-400 block">Projected Mastery</span>
                        <span className="font-bold text-teal-700 dark:text-teal-300">{activeSecondary.projectedMasteryDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-3 border-t border-black/[0.05] dark:border-white/[0.06]">
                    <div className="text-[11px] text-zinc-500 font-mono">
                      {scheduleData.isGermanMastered
                        ? '5h/wk allocation alongside Track A.'
                        : 'Accrues preparation hours at 5h/wk until promoted to Primary.'}
                    </div>

                    <button
                      onClick={() => onSelectItem({ type: 'lang', data: activeSecondary })}
                      className="py-2.5 px-3.5 rounded-xl border border-black/[0.08] dark:border-white/[0.12] bg-white dark:bg-zinc-800 text-xs font-medium flex items-center gap-1.5 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 transition cursor-pointer shrink-0"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Details</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-dashed border-zinc-200 dark:border-zinc-800 flex flex-col items-center justify-center text-center p-8 space-y-2">
                  <span className="text-xs font-mono text-zinc-400">Final Language in Sequence</span>
                  <p className="font-serif text-sm font-semibold text-zinc-600 dark:text-zinc-300">
                    Albanian is the 24th and final language. Planned load is 10 hrs/wk to finish the curriculum.
                  </p>
                </div>
              )}
            </div>

          {/* Upcoming Language Pipeline (Queue) */}
          {upcomingQueue.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Upcoming Languages in Sequence
                </h3>
                <span className="text-xs font-mono text-zinc-400">
                  Next {upcomingQueue.length} languages queued for promotion
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {upcomingQueue.map(item => (
                  <div
                    key={item.id}
                    onClick={() => onSelectItem({ type: 'lang', data: item })}
                    className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-black/[0.06] dark:border-white/[0.08] hover:border-emerald-400 dark:hover:border-emerald-500 transition cursor-pointer shadow-xs space-y-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                        #{item.orderNum}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">
                        {item.requiredHours} hrs
                      </span>
                    </div>

                    <h4 className="font-serif text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition truncate">
                      {item.lang}
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                      {item.group} ({item.subgroup})
                    </p>

                    <div className="text-[10px] font-mono text-zinc-400 pt-1 border-t border-black/[0.04] dark:border-white/[0.04] flex justify-between">
                      <span>Secondary: {item.startDateAsSecondary || 'Queued'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Collapsible Schedule Transitions Log */}
          <div className="rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-zinc-900 overflow-hidden shadow-xs">
            <button
              onClick={() => setShowTransitions(prev => !prev)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition cursor-pointer select-none"
            >
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="font-serif font-bold text-sm text-zinc-900 dark:text-zinc-100">
                  Curriculum Timeline & Promotion Log ({scheduleData.transitions.length} Transitions)
                </span>
              </div>
              <div className="text-zinc-400">
                {showTransitions ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {showTransitions && (
              <div className="p-4 pt-1 border-t border-black/[0.05] dark:border-white/[0.05] space-y-2 max-h-96 overflow-y-auto">
                {scheduleData.transitions.map((t, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 text-xs font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-emerald-700 dark:text-emerald-300 min-w-[85px]">
                        {t.date}
                      </span>
                      <span className="text-zinc-700 dark:text-zinc-300">
                        {t.event}
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-400 font-semibold shrink-0">
                      Load: {t.totalWeeklyHours}h/wk
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* VIEW MODE: FULL CURRICULUM */}
      {viewMode === 'full' && (
        <div className="space-y-5">
          {/* Search & Linguistic Family Filter Area */}
          <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-black/[0.06] dark:border-white/[0.08] shadow-xs space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Search languages by title, family, branch, exam..."
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

            {/* Genuine Linguistic Family & Branch Filter Chips */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                Filter by Linguistic Family & Branch:
              </span>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {LINGUISTIC_FILTER_KEYS.map(f => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition cursor-pointer ${
                      activeFilter === f
                        ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-semibold'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                    }`}
                  >
                    {f === 'all' ? 'All Languages (22)' : f}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1 border-t border-black/[0.04] dark:border-white/[0.04]">
              <span className="text-zinc-500 font-mono">
                Showing {filteredWorks.length} of {scheduleData.languages.length} languages
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={expandAll}
                  className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 font-mono text-[11px] cursor-pointer"
                >
                  Expand All
                </button>
                <span className="text-zinc-300 dark:text-zinc-700">·</span>
                <button
                  onClick={collapseAll}
                  className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 font-mono text-[11px] cursor-pointer"
                >
                  Collapse All
                </button>
              </div>
            </div>
          </div>

          {/* Grouped by Genealogical Family Accordions */}
          <div className="space-y-4">
            {GENEALOGICAL_FAMILIES.map(fam => {
              const itemsInFam = groupedByFamily[fam] || [];
              if (itemsInFam.length === 0) return null;

              const famCompletedCount = itemsInFam.filter(i => isCompleted(i.id)).length;
              const famPercent = Math.round((famCompletedCount / itemsInFam.length) * 100);
              const isCollapsed = collapsedFamilies[fam];

              return (
                <div
                  key={fam}
                  className="rounded-3xl bg-white dark:bg-zinc-900 border border-black/[0.06] dark:border-white/[0.08] shadow-xs overflow-hidden"
                >
                  <div
                    onClick={() => toggleFamilyCollapse(fam)}
                    className="p-4 flex items-center justify-between gap-3 cursor-pointer select-none transition hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100/70 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 flex items-center justify-center font-bold text-xs">
                        {fam.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-serif text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                          {fam} Family
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                          <span>
                            {famCompletedCount} / {itemsInFam.length} completed ({famPercent}%)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="hidden sm:block w-32 h-1.5 rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-emerald-500 progress-bar-smooth"
                          style={{ width: `${famPercent}%` }}
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
                      {itemsInFam.map(item => {
                        const completed = isCompleted(item.id);
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
                                  {/* Dynamic Role Badge */}
                                  {item.role === 'primary' && (
                                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 border border-emerald-300/50">
                                      Primary · 10 hrs/wk
                                    </span>
                                  )}
                                  {item.role === 'secondary' && (
                                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-200 border border-teal-300/50">
                                      Secondary · 5 hrs/wk
                                    </span>
                                  )}
                                  {item.role === 'dual_active' && (
                                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 border border-emerald-300/50">
                                      Active · {item.currentWeeklyHours} hrs/wk
                                    </span>
                                  )}
                                  {item.role === 'queued' && (
                                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                                      Queued · 0 hrs/wk
                                    </span>
                                  )}
                                  {item.role === 'completed' && (
                                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300">
                                      Completed
                                    </span>
                                  )}

                                  <span className="text-[10px] font-mono text-zinc-400">
                                    Branch: {item.subgroup}
                                  </span>
                                </div>

                                <h4
                                  onClick={() => onSelectItem({ type: 'lang', data: item })}
                                  className={`font-serif text-sm font-semibold truncate hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer transition ${
                                    completed
                                      ? 'line-through text-zinc-400 dark:text-zinc-500'
                                      : 'text-zinc-900 dark:text-zinc-100'
                                  }`}
                                >
                                  {item.lang}
                                </h4>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                                  {item.title}
                                </p>

                                <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400 pt-0.5 flex-wrap">
                                  <span>Target: {item.requiredHours}h</span>
                                  <span>·</span>
                                  <span>Pre-Study: +{item.orderNum === 1 ? '218.6h' : `${item.accumulatedAsSecondary}h`}</span>
                                  <span>·</span>
                                  <span>Mastery: {item.projectedMasteryDate}</span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <button
                                onClick={() => onSelectItem({ type: 'lang', data: item })}
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
