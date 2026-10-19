import React, { useState, useMemo } from 'react';
import {
  Languages,
  Music,
  BookOpen,
  Trophy,
  ArrowRight,
  GraduationCap,
  Sparkles,
  Award,
  CheckCircle2,
  Clock,
  Compass,
  Layers,
  ChevronRight,
  Flame,
} from 'lucide-react';
import {
  REVISED_LIBERAL_WORKS,
  REVISED_MUSIC_WORKS,
  REVISED_LANGUAGE_WORKS,
  STAGE_CONFIG,
} from '../data/curriculumData';
import { calculateConcurrentSchedule } from '../utils/languageSchedule';
import { calculateMusicSchedule } from '../utils/musicSchedule';

export interface DashboardViewProps {
  completedCount: number;
  totalItems: number;
  completedIds: Record<string, boolean>;
  onSelectTrack: (track: 'liberal' | 'music' | 'languages') => void;
}

export interface Achievement {
  id: string;
  title: string;
  desc: string;
  icon: string;
  unlocked: boolean;
  category: 'languages' | 'music' | 'liberal' | 'polymath';
  badgeColor: string;
  threshold: number;
  current: number;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  completedCount,
  totalItems,
  completedIds,
  onSelectTrack,
}) => {
  const [badgeCategory, setBadgeCategory] = useState<
    'all' | 'languages' | 'music' | 'liberal' | 'polymath'
  >('all');

  const percent = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;

  const langCompleted = useMemo(
    () => REVISED_LANGUAGE_WORKS.filter(l => completedIds[l.id]).length,
    [completedIds]
  );
  const musicCompleted = useMemo(
    () => REVISED_MUSIC_WORKS.filter(m => completedIds[m.id]).length,
    [completedIds]
  );
  const liberalCompleted = useMemo(
    () => REVISED_LIBERAL_WORKS.filter(b => completedIds[b.id]).length,
    [completedIds]
  );

  // Active focus items for each track
  const activeLiberal = useMemo(() => {
    return REVISED_LIBERAL_WORKS.find(b => !completedIds[b.id]) || REVISED_LIBERAL_WORKS[0];
  }, [completedIds]);

  const activeMusic = useMemo(() => {
    return REVISED_MUSIC_WORKS.find(m => !completedIds[m.id]) || REVISED_MUSIC_WORKS[0];
  }, [completedIds]);

  const concurrentLangSchedule = useMemo(() => {
    return calculateConcurrentSchedule(completedIds);
  }, [completedIds]);

  const musicSchedule = useMemo(() => {
    return calculateMusicSchedule(completedIds);
  }, [completedIds]);

  const activeLang = concurrentLangSchedule.activePrimary;

  // Overall Polymath Stage Status
  let rank = 'Stage I: Apprentice Scholar';
  let nextRankThreshold = 10;
  let prevRankThreshold = 0;
  let levelNum = 1;

  if (completedCount >= 300) {
    rank = 'Stage VII: Grand Polymath Master';
    prevRankThreshold = 300;
    nextRankThreshold = totalItems;
    levelNum = 7;
  } else if (completedCount >= 200) {
    rank = 'Stage VI: Virtuoso Synthesizer';
    prevRankThreshold = 200;
    nextRankThreshold = 300;
    levelNum = 6;
  } else if (completedCount >= 120) {
    rank = 'Stage V: Erudite Fellow';
    prevRankThreshold = 120;
    nextRankThreshold = 200;
    levelNum = 5;
  } else if (completedCount >= 60) {
    rank = 'Stage IV: Quadrivium Scholar';
    prevRankThreshold = 60;
    nextRankThreshold = 120;
    levelNum = 4;
  } else if (completedCount >= 25) {
    rank = 'Stage III: Trivium Explorer';
    prevRankThreshold = 25;
    nextRankThreshold = 60;
    levelNum = 3;
  } else if (completedCount >= 10) {
    rank = 'Stage II: Inquisitive Reader';
    prevRankThreshold = 10;
    nextRankThreshold = 25;
    levelNum = 2;
  }

  const levelProgress = useMemo(() => {
    const range = nextRankThreshold - prevRankThreshold;
    if (range <= 0) return 100;
    const progress = completedCount - prevRankThreshold;
    return Math.min(100, Math.max(0, Math.round((progress / range) * 100)));
  }, [completedCount, prevRankThreshold, nextRankThreshold]);

  // Comprehensive Granular Progression Badges & Accolades (29 milestones)
  const achievements = useMemo<Achievement[]>(
    () => [
      // --- LIBERAL STUDIES ACCOLADES (10 milestones: 1, 10, 25, 50, 75, 100, 150, 200, 250, 300) ---
      {
        id: 'lib-1',
        title: 'First Great Book',
        desc: 'Complete your foundational reading in the Great Books curriculum',
        icon: '📖',
        unlocked: liberalCompleted >= 1,
        category: 'liberal',
        badgeColor: '#FFD6E0',
        threshold: 1,
        current: liberalCompleted,
      },
      {
        id: 'lib-10',
        title: 'Trivium Initiate',
        desc: 'Read and synthesize 10 Great Books of the foundational canon',
        icon: '📜',
        unlocked: liberalCompleted >= 10,
        category: 'liberal',
        badgeColor: '#FFD6E0',
        threshold: 10,
        current: liberalCompleted,
      },
      {
        id: 'lib-25',
        title: 'Bibliophile Inquirer',
        desc: 'Complete 25 Great Books across the Opening and Antiquity seminars',
        icon: '🏛️',
        unlocked: liberalCompleted >= 25,
        category: 'liberal',
        badgeColor: '#BAE1FF',
        threshold: 25,
        current: liberalCompleted,
      },
      {
        id: 'lib-50',
        title: 'Humanities Scholar',
        desc: 'Complete 50 Great Books and associated synthesis essays',
        icon: '🕯️',
        unlocked: liberalCompleted >= 50,
        category: 'liberal',
        badgeColor: '#BAE1FF',
        threshold: 50,
        current: liberalCompleted,
      },
      {
        id: 'lib-75',
        title: 'Canon Explorer',
        desc: 'Advance through 75 Great Books across Classical and Medieval Worlds',
        icon: '🗺️',
        unlocked: liberalCompleted >= 75,
        category: 'liberal',
        badgeColor: '#C1E1C1',
        threshold: 75,
        current: liberalCompleted,
      },
      {
        id: 'lib-100',
        title: 'Centurion Reader',
        desc: 'Reach the centennial milestone of 100 Great Books studied',
        icon: '🌿',
        unlocked: liberalCompleted >= 100,
        category: 'liberal',
        badgeColor: '#C1E1C1',
        threshold: 100,
        current: liberalCompleted,
      },
      {
        id: 'lib-150',
        title: 'Scholastic Fellow',
        desc: 'Read and critically synthesize 150 primary texts and monographs',
        icon: '✒️',
        unlocked: liberalCompleted >= 150,
        category: 'liberal',
        badgeColor: '#FFDFBA',
        threshold: 150,
        current: liberalCompleted,
      },
      {
        id: 'lib-200',
        title: 'Erudite Master',
        desc: 'Master 200 Great Books through Early Modern and 19th Century canons',
        icon: '🎓',
        unlocked: liberalCompleted >= 200,
        category: 'liberal',
        badgeColor: '#E2BAFF',
        threshold: 200,
        current: liberalCompleted,
      },
      {
        id: 'lib-250',
        title: 'Sage of Letters',
        desc: 'Complete 250 Great Books advancing into the 20th Century critique',
        icon: '🔮',
        unlocked: liberalCompleted >= 250,
        category: 'liberal',
        badgeColor: '#FFFFBA',
        threshold: 250,
        current: liberalCompleted,
      },
      {
        id: 'lib-300',
        title: 'Great Books Laureate',
        desc: 'Attain the ultimate summit of 300+ Great Books across all 7 stages',
        icon: '👑',
        unlocked: liberalCompleted >= 300,
        category: 'liberal',
        badgeColor: '#D6C7FF',
        threshold: 300,
        current: liberalCompleted,
      },

      // --- MUSIC CONSERVATORY ACCOLADES (7 milestones: 1, 5, 15, 25, 40, 55, 70) ---
      {
        id: 'mus-1',
        title: 'First Performance Step',
        desc: 'Earn your first graded music certification',
        icon: '🎵',
        unlocked: musicCompleted >= 1,
        category: 'music',
        badgeColor: '#BAE1FF',
        threshold: 1,
        current: musicCompleted,
      },
      {
        id: 'mus-5',
        title: 'Cadence Explorer',
        desc: 'Complete 5 music qualifications across singing, dance, and theory',
        icon: '🎹',
        unlocked: musicCompleted >= 5,
        category: 'music',
        badgeColor: '#BAE1FF',
        threshold: 5,
        current: musicCompleted,
      },
      {
        id: 'mus-15',
        title: 'Harmonic Apprentice',
        desc: 'Attain 15 certifications establishing intermediate conservatory breadth',
        icon: '🎼',
        unlocked: musicCompleted >= 15,
        category: 'music',
        badgeColor: '#C1E1C1',
        threshold: 15,
        current: musicCompleted,
      },
      {
        id: 'mus-25',
        title: 'Polyphonic Scholar',
        desc: 'Complete 25 performance and theory exams across multiple instruments',
        icon: '🎻',
        unlocked: musicCompleted >= 25,
        category: 'music',
        badgeColor: '#FFDFBA',
        threshold: 25,
        current: musicCompleted,
      },
      {
        id: 'mus-40',
        title: 'Conservatory Fellow',
        desc: 'Earn 40 certifications reaching advanced diploma and recital standards',
        icon: '🎷',
        unlocked: musicCompleted >= 40,
        category: 'music',
        badgeColor: '#E2BAFF',
        threshold: 40,
        current: musicCompleted,
      },
      {
        id: 'mus-55',
        title: 'Virtuoso Performer',
        desc: 'Achieve 55 performance certifications and advanced production credentials',
        icon: '🎺',
        unlocked: musicCompleted >= 55,
        category: 'music',
        badgeColor: '#FFFFBA',
        threshold: 55,
        current: musicCompleted,
      },
      {
        id: 'mus-70',
        title: 'Maestro of All Disciplines',
        desc: 'Complete 70+ professional licentiates, theses, and conservatory diplomas',
        icon: '🌟',
        unlocked: musicCompleted >= 70,
        category: 'music',
        badgeColor: '#D6C7FF',
        threshold: 70,
        current: musicCompleted,
      },

      // --- LANGUAGES ACCOLADES (8 milestones: 1, 2, 5, 8, 12, 16, 20, 22) ---
      {
        id: 'lang-1',
        title: 'First Foreign Tongue',
        desc: 'Pass your first advanced language proficiency certification',
        icon: '🗣️',
        unlocked: langCompleted >= 1,
        category: 'languages',
        badgeColor: '#C1E1C1',
        threshold: 1,
        current: langCompleted,
      },
      {
        id: 'lang-2',
        title: 'Bilingual Scholar',
        desc: 'Demonstrate dual language mastery with certified diagnostic standards',
        icon: '🌐',
        unlocked: langCompleted >= 2,
        category: 'languages',
        badgeColor: '#C1E1C1',
        threshold: 2,
        current: langCompleted,
      },
      {
        id: 'lang-5',
        title: 'Trilingual Voyager',
        desc: 'Master 5 languages spanning European and Asian linguistic families',
        icon: '🧭',
        unlocked: langCompleted >= 5,
        category: 'languages',
        badgeColor: '#FFDFBA',
        threshold: 5,
        current: langCompleted,
      },
      {
        id: 'lang-8',
        title: 'Multilingual Explorer',
        desc: 'Attain proficiency in 8 languages across diverse branches',
        icon: '🗺️',
        unlocked: langCompleted >= 8,
        category: 'languages',
        badgeColor: '#FFDFBA',
        threshold: 8,
        current: langCompleted,
      },
      {
        id: 'lang-12',
        title: 'Polyglot Fellow',
        desc: 'Command 12 languages including Classical, Semitic, and Slavic tongues',
        icon: '📚',
        unlocked: langCompleted >= 12,
        category: 'languages',
        badgeColor: '#E2BAFF',
        threshold: 12,
        current: langCompleted,
      },
      {
        id: 'lang-16',
        title: 'Cosmopolitan Linguist',
        desc: 'Master 16 languages across Indo-European, Sino-Tibetan, and Afroasiatic',
        icon: '🏛️',
        unlocked: langCompleted >= 16,
        category: 'languages',
        badgeColor: '#FFFFBA',
        threshold: 16,
        current: langCompleted,
      },
      {
        id: 'lang-20',
        title: 'Master Hyperpolyglot',
        desc: 'Achieve certified fluency across 20 global languages',
        icon: '⚡',
        unlocked: langCompleted >= 20,
        category: 'languages',
        badgeColor: '#D6C7FF',
        threshold: 20,
        current: langCompleted,
      },
      {
        id: 'lang-22',
        title: 'Universal Linguist Laureate',
        desc: 'Complete all 22 languages in the genealogical curriculum',
        icon: '🕊️',
        unlocked: langCompleted >= 22,
        category: 'languages',
        badgeColor: '#FFD6E0',
        threshold: 22,
        current: langCompleted,
      },

      // --- POLYMATH INTEGRATION ACCOLADES (4 milestones) ---
      {
        id: 'poly-triad',
        title: 'Triad Spark',
        desc: 'Unlock at least 1 milestone in each of the three independent tracks',
        icon: '✨',
        unlocked: liberalCompleted >= 1 && musicCompleted >= 1 && langCompleted >= 1,
        category: 'polymath',
        badgeColor: '#FFD6E0',
        threshold: 1,
        current: Math.min(liberalCompleted, musicCompleted, langCompleted),
      },
      {
        id: 'poly-quad',
        title: 'Trivium & Quadrivium Synthesizer',
        desc: 'Complete at least 5 milestones in Liberal Arts, Music, and Languages',
        icon: '📐',
        unlocked: liberalCompleted >= 5 && musicCompleted >= 5 && langCompleted >= 5,
        category: 'polymath',
        badgeColor: '#BAE1FF',
        threshold: 5,
        current: Math.min(liberalCompleted, musicCompleted, langCompleted),
      },
      {
        id: 'poly-erudite',
        title: 'Erudite Triad Fellow',
        desc: 'Complete at least 15 milestones in all three learning domains',
        icon: '🏆',
        unlocked: liberalCompleted >= 15 && musicCompleted >= 15 && langCompleted >= 15,
        category: 'polymath',
        badgeColor: '#E2BAFF',
        threshold: 15,
        current: Math.min(liberalCompleted, musicCompleted, langCompleted),
      },
      {
        id: 'poly-universal',
        title: 'Universal Polymath Mind',
        desc: 'Complete 250 total milestones across languages, music, and great books',
        icon: '👑',
        unlocked: completedCount >= 250,
        category: 'polymath',
        badgeColor: '#D6C7FF',
        threshold: 250,
        current: completedCount,
      },
    ],
    [completedCount, langCompleted, musicCompleted, liberalCompleted]
  );

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const filteredAchievements = achievements.filter(
    a => badgeCategory === 'all' || a.category === badgeCategory
  );

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* 1. TOP-LEVEL ACADEMIC STATUS BANNER */}
      <section className="relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white via-[#FFFDF9] to-[#FFF5EB] dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-850 border border-black/[0.08] dark:border-white/[0.1] shadow-xs">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 dark:bg-amber-950/60 border border-amber-200/60 dark:border-amber-800/40 text-amber-900 dark:text-amber-200 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Degree Progression</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {rank}
            </h1>

          </div>

          <div className="flex items-center gap-4 shrink-0 bg-white/80 dark:bg-zinc-800/70 p-4 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-rose-400 flex items-center justify-center text-white font-serif font-black text-2xl shadow-sm">
              L{levelNum}
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-zinc-900 dark:text-zinc-100 tabular-nums">
                {completedCount}{' '}
                <span className="text-xs font-mono font-normal text-zinc-400 dark:text-zinc-500">
                  / {totalItems}
                </span>
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                {percent}% Overall Progress
              </div>
            </div>
          </div>
        </div>

        {/* Level Progression Bar */}
        <div className="mt-6 pt-5 border-t border-black/[0.06] dark:border-white/[0.08] space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <span>Next Polymath Rank: {levelNum < 7 ? `Level ${levelNum + 1}` : 'Maximum Attainment'}</span>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">{levelProgress}%</span>
          </div>
          <div className="h-2.5 w-full rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-rose-400 via-amber-400 to-emerald-400 progress-bar-smooth"
              style={{ width: `${levelProgress}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] font-mono text-zinc-400">
            <span>Current tier: {prevRankThreshold} milestones</span>
            <span>Next milestone: {nextRankThreshold} completions</span>
          </div>
        </div>
      </section>

      {/* 2. THREE SEQUENTIAL TRACK CARDS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif font-bold text-lg text-zinc-900 dark:text-zinc-100">
              Curriculum Tracks
            </h2>
            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              3 Disciplines · Active Focus Targets
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* TRACK 1: LIBERAL STUDIES (Active Focus Priority 1) */}
          <div
            onClick={() => onSelectTrack('liberal')}
            className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border-2 border-rose-300 dark:border-rose-900/60 hover:border-rose-500 dark:hover:border-rose-500 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-950/70 text-rose-800 dark:text-rose-300 flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-200">
                  Primary Focus
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-rose-600 transition">
                  Liberal Studies
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-mono">
                  Stages 100–700 · Primary Spine & Context Readings
                </p>
              </div>

              {/* Current Active Reading Focus */}
              <div className="p-3.5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 space-y-1">
                <span className="text-[10px] font-mono uppercase text-rose-700 dark:text-rose-400 font-semibold block">
                  Current Reading Focus:
                </span>
                <p className="font-serif text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate">
                  {activeLiberal.title}
                </p>
                <p className="text-[11px] text-zinc-500 truncate">
                  {activeLiberal.author} · {activeLiberal.courseCode} ({activeLiberal.lane})
                </p>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-500">Books Completed</span>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">
                    {liberalCompleted} / {REVISED_LIBERAL_WORKS.length}
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-rose-500 progress-bar-smooth"
                    style={{
                      width: `${(liberalCompleted / REVISED_LIBERAL_WORKS.length) * 100}%`,
                    }}
                  />
                </div>
                <p className="text-[10px] text-zinc-400 font-mono">
                  {REVISED_LIBERAL_WORKS.length} Works across 7 Stages
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between text-xs font-semibold text-rose-600 dark:text-rose-400">
              <span>Open Liberal Studies Tab</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* TRACK 2: MUSIC CONSERVATORY (Active Focus Priority 2) */}
          <div
            onClick={() => onSelectTrack('music')}
            className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-black/[0.08] dark:border-white/[0.1] hover:border-amber-400 dark:hover:border-amber-500 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 flex items-center justify-center">
                  <Music className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200">
                  Performance
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-amber-600 transition">
                  Music Conservatory
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-mono">
                  9 Subject Disciplines · Graded Exams & Diplomas
                </p>
              </div>

              {/* Current Active Music Focus */}
              <div className="p-3.5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-amber-700 dark:text-amber-400 font-semibold block">
                    Current Certification Focus:
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200">
                    {musicSchedule.currentWeeklyAllocation} hrs/wk
                  </span>
                </div>
                <p className="font-serif text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate">
                  {activeMusic.title}
                </p>
                <div className="flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <span>{activeMusic.subject} · {activeMusic.hours} hrs</span>
                  <span>Target: {activeMusic.year}</span>
                </div>
                <p className="text-[10px] text-amber-800/80 dark:text-amber-300/80 font-mono pt-1 border-t border-amber-200/50 dark:border-amber-900/40">
                  {musicSchedule.currentWeeklyAllocation === 20
                    ? `Elevated to 20 hrs/wk (All 24 languages acquired)`
                    : musicSchedule.currentWeeklyAllocation === 10
                    ? `Accelerated to 10 hrs/wk (German mastered · 20h/wk post-${musicSchedule.finalLanguageName})`
                    : `5 hrs/wk until German (${musicSchedule.germanMasteryDate}) → 10 hrs/wk → 20 hrs/wk post-languages`}
                </p>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-500">Exams Certified</span>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">
                    {musicCompleted} / {REVISED_MUSIC_WORKS.length}
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-amber-500 progress-bar-smooth"
                    style={{
                      width: `${(musicCompleted / REVISED_MUSIC_WORKS.length) * 100}%`,
                    }}
                  />
                </div>
                <p className="text-[10px] text-zinc-400 font-mono">
                  {REVISED_MUSIC_WORKS.length} Certifications across 9 Disciplines
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400">
              <span>Open Music Track</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* TRACK 3: LANGUAGES (Active Focus Priority 3) */}
          <div
            onClick={() => onSelectTrack('languages')}
            className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-black/[0.08] dark:border-white/[0.1] hover:border-emerald-400 dark:hover:border-emerald-500 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 flex items-center justify-center">
                  <Languages className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200">
                  Linguistics
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-emerald-600 transition">
                  Languages Curriculum
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-mono">
                  8 Genealogical Families · Standardized Proficiency Levels
                </p>
              </div>

              {/* Concurrent Active Language Focus */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-emerald-700 dark:text-emerald-400 font-semibold block">
                    {concurrentLangSchedule.isGermanMastered ? 'Dual Simultaneous Focus' : 'Concurrent Active Focus'} ({concurrentLangSchedule.totalWeeklyHours} hrs/wk):
                  </span>
                </div>
                {activeLang && (
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-serif font-bold text-zinc-900 dark:text-zinc-100 truncate">
                        {concurrentLangSchedule.isGermanMastered ? 'Track A' : 'Primary'}: {activeLang.lang}
                      </span>
                      <span className="font-mono text-[10px] text-emerald-700 dark:text-emerald-300 font-bold shrink-0">
                        {activeLang.currentWeeklyHours}h/wk (→ {activeLang.projectedMasteryDate})
                      </span>
                    </div>
                    {concurrentLangSchedule.activeSecondary ? (
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-serif text-zinc-700 dark:text-zinc-300 truncate">
                          {concurrentLangSchedule.isGermanMastered ? 'Track B' : 'Secondary'}: {concurrentLangSchedule.activeSecondary.lang}
                        </span>
                        <span className="font-mono text-[10px] text-teal-700 dark:text-teal-300 shrink-0">
                          {concurrentLangSchedule.activeSecondary.currentWeeklyHours}h/wk (→ {concurrentLangSchedule.activeSecondary.projectedMasteryDate})
                        </span>
                      </div>
                    ) : (
                      <div className="text-[11px] text-zinc-400 italic">Final language in curriculum (10 hrs/wk)</div>
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-zinc-500">Proficiency Certified</span>
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">
                    {langCompleted} / {REVISED_LANGUAGE_WORKS.length}
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-emerald-500 progress-bar-smooth"
                    style={{
                      width: `${(langCompleted / REVISED_LANGUAGE_WORKS.length) * 100}%`,
                    }}
                  />
                </div>
                <p className="text-[10px] text-zinc-400 font-mono">
                  {REVISED_LANGUAGE_WORKS.length} Languages across 7 Families
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span>Open Languages Track</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. GRANULAR PROGRESSION BADGES & ACCOLADES GALLERY */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-500" />
              <h2 className="font-serif font-bold text-lg text-zinc-900 dark:text-zinc-100">
                Progression Badges & Accolades
              </h2>
            </div>
            <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
              {unlockedCount} of {achievements.length} milestones unlocked
            </p>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {(['all', 'polymath', 'liberal', 'music', 'languages'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setBadgeCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium capitalize cursor-pointer transition whitespace-nowrap ${
                  badgeCategory === cat
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-semibold shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5 border border-black/[0.04] dark:border-white/[0.06]'
                }`}
              >
                {cat === 'all'
                  ? 'All Accolades'
                  : cat === 'liberal'
                  ? 'Liberal Studies'
                  : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredAchievements.map(ach => (
            <div
              key={ach.id}
              className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                ach.unlocked
                  ? 'bg-white dark:bg-zinc-850/80 border-amber-300/80 dark:border-amber-700/60 shadow-xs ring-1 ring-amber-400/20'
                  : 'bg-zinc-50/50 dark:bg-zinc-900/40 border-black/[0.04] dark:border-white/[0.04] opacity-50'
              }`}
            >
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center text-xl shrink-0 border transition-transform ${
                  ach.unlocked ? 'animate-badgeUnlock' : ''
                }`}
                style={{
                  backgroundColor: ach.unlocked ? ach.badgeColor : '#e4e4e7',
                  borderColor: ach.unlocked ? `${ach.badgeColor}` : '#d4d4d8',
                }}
              >
                {ach.icon}
              </div>

              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="font-serif font-bold text-xs text-zinc-900 dark:text-zinc-100 truncate">
                    {ach.title}
                  </h4>
                  <span
                    className={`text-[9px] font-mono px-1.5 py-0.5 rounded-full ${
                      ach.unlocked
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    {ach.unlocked
                      ? 'Earned'
                      : `${ach.current} / ${ach.threshold}`}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">
                  {ach.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
