import React, { useState, useEffect } from 'react';
import { Sun, Moon, MapPin } from 'lucide-react';
import { fmtHanoiDate, fmtHanoiTime } from '../data/timelineData';

interface HeaderProps {
  activeTab: 'dashboard' | 'languages' | 'music' | 'liberal';
  setActiveTab: (tab: 'dashboard' | 'languages' | 'music' | 'liberal') => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  totalStats: {
    languages: number;
    music: number;
    liberal: number;
    completedCount: number;
  };
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  isDarkMode,
  toggleDarkMode,
  totalStats,
}) => {
  const [hanoiTime, setHanoiTime] = useState<string>('');
  const [hanoiDate, setHanoiDate] = useState<string>('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setHanoiTime(fmtHanoiTime(now));
      setHanoiDate(fmtHanoiDate(now));
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#FFFBF7]/85 dark:bg-[#111113]/85 border-b border-black/[0.06] dark:border-white/[0.08] transition-colors">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center font-serif font-bold text-base shadow-sm">
            S
          </div>
          <div className="leading-tight">
            <span className="font-serif font-semibold text-base sm:text-lg text-zinc-900 dark:text-zinc-100 tracking-tight">
              Pastel Timeline
            </span>
            <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
              <span className="font-medium text-zinc-800 dark:text-zinc-200 tabular-nums">{hanoiTime || '--:--:--'}</span>
              <span>·</span>
              <span className="truncate hidden sm:inline">{hanoiDate}</span>
              <span className="inline sm:hidden">Hanoi</span>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 text-[13px] font-medium text-zinc-600 dark:text-zinc-300">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-1.5 rounded-full transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'dashboard'
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-semibold shadow-xs'
                : 'hover:text-zinc-950 dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('liberal')}
            className={`px-4 py-1.5 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'liberal'
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-semibold shadow-xs'
                : 'hover:text-zinc-950 dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
            }`}
          >
            Liberal Arts ({totalStats.liberal})
          </button>
          <button
            onClick={() => setActiveTab('music')}
            className={`px-4 py-1.5 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'music'
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-semibold shadow-xs'
                : 'hover:text-zinc-950 dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
            }`}
          >
            Music ({totalStats.music})
          </button>
          <button
            onClick={() => setActiveTab('languages')}
            className={`px-4 py-1.5 rounded-full transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'languages'
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-semibold shadow-xs'
                : 'hover:text-zinc-950 dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
            }`}
          >
            Languages ({totalStats.languages})
          </button>
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-zinc-500 dark:text-zinc-400 px-2.5 py-1 rounded-full border border-black/[0.06] dark:border-white/[0.08] bg-white/60 dark:bg-zinc-900/60">
            <MapPin className="w-3 h-3 text-zinc-400" />
            <span>Hanoi GMT+7</span>
          </div>

          <button
            onClick={toggleDarkMode}
            type="button"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="w-10 h-10 rounded-full border border-black/[0.08] dark:border-white/[0.12] bg-white dark:bg-zinc-800 flex items-center justify-center text-zinc-800 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition active:scale-95 shadow-xs cursor-pointer"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
