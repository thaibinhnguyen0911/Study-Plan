import React, { useState } from 'react';
import { Languages, Music, BookOpen, Trophy, X, Shield, Sparkles } from 'lucide-react';
import { REVISED_LIBERAL_WORKS, REVISED_MUSIC_WORKS, REVISED_LANGUAGE_WORKS } from '../data/curriculumData';

interface StatSummaryStripProps {
  completedCount: number;
  totalItems: number;
  completedIds: Record<string, boolean>;
  onSelectTrack?: (track: 'languages' | 'music' | 'liberal') => void;
}

interface Achievement {
  id: string;
  title: string;
  desc: string;
  icon: string;
  unlocked: boolean;
  category: 'languages' | 'music' | 'liberal' | 'polymath';
  badgeColor: string;
}

export const StatSummaryStrip: React.FC<StatSummaryStripProps> = ({
  completedCount,
  totalItems,
  completedIds,
  onSelectTrack,
}) => {
  const [showBadges, setShowBadges] = useState(false);
  const [badgeFilter, setBadgeFilter] = useState<'all' | 'languages' | 'music' | 'liberal' | 'polymath'>('all');

  const percent = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;

  const langCompleted = REVISED_LANGUAGE_WORKS.filter(l => completedIds[l.id]).length;
  const musicCompleted = REVISED_MUSIC_WORKS.filter(m => completedIds[m.id]).length;
  const liberalCompleted = REVISED_LIBERAL_WORKS.filter(b => completedIds[b.id]).length;

  const liberalSpineCount = REVISED_LIBERAL_WORKS.filter(b => b.lane.toLowerCase() === 'spine').length;
  const liberalContextCount = REVISED_LIBERAL_WORKS.filter(b => b.lane.toLowerCase() === 'context').length;
  const liberalRefCount = REVISED_LIBERAL_WORKS.filter(b => b.lane.toLowerCase() === 'reference').length;

  const musicSpineCount = REVISED_MUSIC_WORKS.filter(m => m.lane.toLowerCase() === 'spine').length;
  const musicContextCount = REVISED_MUSIC_WORKS.filter(m => m.lane.toLowerCase() === 'context').length;
  const musicRefCount = REVISED_MUSIC_WORKS.filter(m => m.lane.toLowerCase() === 'reference').length;

  const langSpineCount = REVISED_LANGUAGE_WORKS.filter(l => l.lane.toLowerCase() === 'spine').length;
  const langContextCount = REVISED_LANGUAGE_WORKS.filter(l => l.lane.toLowerCase() === 'context').length;
  const langRefCount = REVISED_LANGUAGE_WORKS.filter(l => l.lane.toLowerCase() === 'reference').length;

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

  const levelProgress = Math.min(
    100,
    Math.round(((completedCount - prevRankThreshold) / Math.max(1, nextRankThreshold - prevRankThreshold)) * 100)
  );

  const achievements: Achievement[] = [
    {
      id: 'first-step',
      title: 'First Milestone',
      desc: 'Complete your first curriculum milestone in any track',
      icon: '✨',
      unlocked: completedCount >= 1,
      category: 'polymath',
      badgeColor: '#FFD6E0',
    },
    {
      id: 'polyglot-starter',
      title: 'Polyglot Spark',
      desc: 'Achieve your first language certification',
      icon: '🗣️',
      unlocked: langCompleted >= 1,
      category: 'languages',
      badgeColor: '#C1E1C1',
    },
    {
      id: 'trilingual',
      title: 'Trilingual Path',
      desc: 'Master 3 language proficiencies',
      icon: '🌐',
      unlocked: langCompleted >= 3,
      category: 'languages',
      badgeColor: '#C1E1C1',
    },
    {
      id: 'polyglot-diplomat',
      title: 'Polyglot Diplomat',
      desc: 'Attain 10 advanced language proficiencies across regional families',
      icon: '📜',
      unlocked: langCompleted >= 10,
      category: 'languages',
      badgeColor: '#BAE1FF',
    },
    {
      id: 'omniglot-master',
      title: 'Omniglot Laureate',
      desc: 'Complete all 24 global language certifications',
      icon: '👑',
      unlocked: langCompleted >= REVISED_LANGUAGE_WORKS.length,
      category: 'languages',
      badgeColor: '#E2BAFF',
    },
    {
      id: 'music-cadence',
      title: 'First Performance',
      desc: 'Complete your first graded music certification',
      icon: '🎵',
      unlocked: musicCompleted >= 1,
      category: 'music',
      badgeColor: '#FFFFBA',
    },
    {
      id: 'harmony-master',
      title: 'Musical Virtuosity',
      desc: 'Complete 5 music certifications',
      icon: '🎼',
      unlocked: musicCompleted >= 5,
      category: 'music',
      badgeColor: '#FFDFBA',
    },
    {
      id: 'conservatory-fellow',
      title: 'Conservatory Fellow',
      desc: 'Attain 20 graded certifications across performance, theory, and production',
      icon: '🎹',
      unlocked: musicCompleted >= 20,
      category: 'music',
      badgeColor: '#D6C7FF',
    },
    {
      id: 'maestro-virtuoso',
      title: 'Maestro Laureate',
      desc: 'Master 50 music milestones across classical, jazz, and theory',
      icon: '🎻',
      unlocked: musicCompleted >= 50,
      category: 'music',
      badgeColor: '#FFD6E0',
    },
    {
      id: 'trivium-starter',
      title: 'Great Books Reader',
      desc: 'Complete 5 Great Books primary texts',
      icon: '📖',
      unlocked: liberalCompleted >= 5,
      category: 'liberal',
      badgeColor: '#FFDFBA',
    },
    {
      id: 'deep-reader',
      title: 'Spine Anchor',
      desc: 'Complete 25 primary and secondary texts',
      icon: '🏛️',
      unlocked: liberalCompleted >= 25,
      category: 'liberal',
      badgeColor: '#E2BAFF',
    },
    {
      id: 'century-reader',
      title: 'Centurion of Letters',
      desc: 'Complete 100 Great Books texts across the classical and modern eras',
      icon: '📚',
      unlocked: liberalCompleted >= 100,
      category: 'liberal',
      badgeColor: '#BAE1FF',
    },
    {
      id: 'great-books-fellow',
      title: 'Canon Laureate',
      desc: 'Complete 200 Great Books curriculum works',
      icon: '🗿',
      unlocked: liberalCompleted >= 200,
      category: 'liberal',
      badgeColor: '#FFD6E0',
    },
    {
      id: 'century-club',
      title: 'Centurion of Letters',
      desc: 'Complete 100 total curriculum milestones across all tracks',
      icon: '🏆',
      unlocked: completedCount >= 100,
      category: 'polymath',
      badgeColor: '#FFD6E0',
    },
    {
      id: 'polymath-triad',
      title: 'Triad Synchronizer',
      desc: 'Attain at least 10 milestones in each of the three curriculum tracks',
      icon: '⚡',
      unlocked: langCompleted >= 10 && musicCompleted >= 10 && liberalCompleted >= 10,
      category: 'polymath',
      badgeColor: '#BAE1FF',
    },
    {
      id: 'universal-mind',
      title: 'Universal Polymath',
      desc: 'Complete 250 total milestones across languages, music, and great books',
      icon: '🌟',
      unlocked: completedCount >= 250,
      category: 'polymath',
      badgeColor: '#E2BAFF',
    },
  ];

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const filteredAchievements = achievements.filter(a => badgeFilter === 'all' || a.category === badgeFilter);

  return (
    <div className="space-y-4">
      <div className="rounded-3xl p-5 sm:p-6 bg-gradient-to-br from-white via-[#FFFDF9] to-[#FFF5EB] dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-850 border border-black/[0.08] dark:border-white/[0.1] shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-serif font-bold text-xs shadow-xs">
                L{levelNum}
              </span>
              <span className="font-serif font-bold text-lg sm:text-xl text-zinc-900 dark:text-zinc-50 tracking-tight">
                {rank}
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {completedCount} of {totalItems} total curriculum milestones mastered ({percent}%)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowBadges(true)}
              className="px-3.5 py-2 rounded-2xl border border-black/[0.08] dark:border-white/[0.12] bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-750 text-xs font-semibold text-zinc-700 dark:text-zinc-200 flex items-center gap-2 transition cursor-pointer shadow-xs active:scale-95"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>Progression Badges ({unlockedCount}/{achievements.length})</span>
            </button>
          </div>
        </div>

        <div className="mt-4 space-y-1.5">
          <div className="flex justify-between text-[11px] font-mono text-zinc-500">
            <span>Progress to Next Rank</span>
            <span>{levelProgress}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-rose-300 via-amber-300 to-emerald-300 transition-all duration-500"
              style={{ width: `${levelProgress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-black/[0.05] dark:border-white/[0.06]">
          <div
            onClick={() => onSelectTrack && onSelectTrack('languages')}
            className="p-3.5 rounded-2xl bg-white/70 dark:bg-zinc-800/50 border border-black/[0.04] dark:border-white/[0.06] hover:border-emerald-400 dark:hover:border-emerald-600 transition cursor-pointer space-y-2 group"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                <Languages className="w-3.5 h-3.5 text-emerald-500" />
                Languages Track
              </span>
              <span className="font-mono text-[11px] text-zinc-500">
                {langCompleted}/{REVISED_LANGUAGE_WORKS.length} ({Math.round((langCompleted / REVISED_LANGUAGE_WORKS.length) * 100)}%)
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-400 transition-all duration-300"
                style={{ width: `${Math.round((langCompleted / REVISED_LANGUAGE_WORKS.length) * 100)}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono pt-0.5">
              <span>{langSpineCount} Spine · {langContextCount} Context · {langRefCount} Ref</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">Open Track →</span>
            </div>
          </div>

          <div
            onClick={() => onSelectTrack && onSelectTrack('music')}
            className="p-3.5 rounded-2xl bg-white/70 dark:bg-zinc-800/50 border border-black/[0.04] dark:border-white/[0.06] hover:border-amber-400 dark:hover:border-amber-600 transition cursor-pointer space-y-2 group"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition">
                <Music className="w-3.5 h-3.5 text-amber-500" />
                Music Track
              </span>
              <span className="font-mono text-[11px] text-zinc-500">
                {musicCompleted}/{REVISED_MUSIC_WORKS.length} ({Math.round((musicCompleted / REVISED_MUSIC_WORKS.length) * 100)}%)
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-amber-400 transition-all duration-300"
                style={{ width: `${Math.round((musicCompleted / REVISED_MUSIC_WORKS.length) * 100)}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono pt-0.5">
              <span>{musicSpineCount} Spine · {musicContextCount} Context · {musicRefCount} Ref</span>
              <span className="text-amber-600 dark:text-amber-400 font-medium">Open Track →</span>
            </div>
          </div>

          <div
            onClick={() => onSelectTrack && onSelectTrack('liberal')}
            className="p-3.5 rounded-2xl bg-white/70 dark:bg-zinc-800/50 border border-black/[0.04] dark:border-white/[0.06] hover:border-rose-400 dark:hover:border-rose-600 transition cursor-pointer space-y-2 group"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition">
                <BookOpen className="w-3.5 h-3.5 text-rose-500" />
                Liberal Arts Track
              </span>
              <span className="font-mono text-[11px] text-zinc-500">
                {liberalCompleted}/{REVISED_LIBERAL_WORKS.length} ({Math.round((liberalCompleted / REVISED_LIBERAL_WORKS.length) * 100)}%)
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-black/5 dark:bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-rose-400 transition-all duration-300"
                style={{ width: `${Math.round((liberalCompleted / REVISED_LIBERAL_WORKS.length) * 100)}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono pt-0.5">
              <span>{liberalSpineCount} Spine · {liberalContextCount} Context · {liberalRefCount} Ref</span>
              <span className="text-rose-600 dark:text-rose-400 font-medium">Open Track →</span>
            </div>
          </div>
        </div>
      </div>

      {showBadges && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs transition-opacity">
          <div className="absolute inset-0" onClick={() => setShowBadges(false)} aria-hidden="true" />

          <div className="relative w-full max-w-xl bg-white dark:bg-zinc-900 rounded-3xl border border-black/[0.08] dark:border-white/[0.12] shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col">
            <div className="px-6 py-4 flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.08]">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-500" />
                <h3 className="font-serif font-bold text-base text-zinc-900 dark:text-zinc-100">
                  Curriculum Progression Badges
                </h3>
              </div>
              <button
                onClick={() => setShowBadges(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white bg-black/5 dark:bg-white/10 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="px-6 py-3 border-b border-black/[0.06] dark:border-white/[0.08] flex items-center gap-1.5 overflow-x-auto scrollbar-none">
              {(['all', 'languages', 'music', 'liberal', 'polymath'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setBadgeFilter(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-medium capitalize cursor-pointer transition ${
                    badgeFilter === cat
                      ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {cat === 'all' ? 'All Badges' : cat === 'liberal' ? 'Liberal Arts' : cat}
                </button>
              ))}
            </div>

            <div className="p-6 overflow-y-auto space-y-3 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredAchievements.map(ach => (
                  <div
                    key={ach.id}
                    className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3 ${
                      ach.unlocked
                        ? 'bg-white dark:bg-zinc-800/70 border-black/10 dark:border-white/15 shadow-xs'
                        : 'bg-zinc-50/60 dark:bg-zinc-900/40 border-black/[0.04] dark:border-white/[0.04] opacity-50'
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg shrink-0 border"
                      style={{
                        backgroundColor: ach.unlocked ? ach.badgeColor : '#e4e4e7',
                        borderColor: ach.unlocked ? `${ach.badgeColor}` : '#d4d4d8',
                      }}
                    >
                      {ach.icon}
                    </div>
                    <div className="min-w-0 flex-1 space-y-0.5">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="font-serif font-bold text-xs text-zinc-900 dark:text-zinc-100 truncate">
                          {ach.title}
                        </h4>
                        <span
                          className={`text-[9px] font-mono px-1.5 py-0.2 rounded-full ${
                            ach.unlocked
                              ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400'
                          }`}
                        >
                          {ach.unlocked ? 'Unlocked' : 'Locked'}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">
                        {ach.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-black/[0.06] dark:border-white/[0.08] bg-zinc-50/80 dark:bg-zinc-900/80 text-center text-xs text-zinc-500">
              Completed {unlockedCount} of {achievements.length} progression badges
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
