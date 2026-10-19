import React from 'react';
import { LayoutDashboard, Languages, Music, BookOpen } from 'lucide-react';

interface BottomNavProps {
  activeTab: 'dashboard' | 'languages' | 'music' | 'liberal';
  setActiveTab: (tab: 'dashboard' | 'languages' | 'music' | 'liberal') => void;
  counts: {
    languages: number;
    music: number;
    liberal: number;
  };
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  setActiveTab,
  counts,
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden backdrop-blur-xl bg-[#FFFBF7]/92 dark:bg-[#111113]/92 border-t border-black/[0.08] dark:border-white/[0.08] pb-safe transition-colors">
      <div className="grid grid-cols-4 items-center h-16 max-w-lg mx-auto px-2">
        <button
          onClick={() => {
            setActiveTab('dashboard');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center min-h-[48px] rounded-xl transition-all cursor-pointer ${
            activeTab === 'dashboard'
              ? 'text-zinc-950 dark:text-white font-semibold'
              : 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
          }`}
        >
          <div className="relative">
            <LayoutDashboard className="w-5 h-5" />
          </div>
          <span className="text-[10px] tracking-tight mt-1">Dashboard</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('liberal');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center min-h-[48px] rounded-xl transition-all cursor-pointer ${
            activeTab === 'liberal'
              ? 'text-zinc-950 dark:text-white font-semibold'
              : 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
          }`}
        >
          <div className="relative">
            <BookOpen className="w-5 h-5" />
            <span className="absolute -top-1 -right-2 text-[9px] font-mono px-1 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300">
              {counts.liberal}
            </span>
          </div>
          <span className="text-[10px] tracking-tight mt-1">Liberal</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('music');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center min-h-[48px] rounded-xl transition-all cursor-pointer ${
            activeTab === 'music'
              ? 'text-zinc-950 dark:text-white font-semibold'
              : 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
          }`}
        >
          <div className="relative">
            <Music className="w-5 h-5" />
            <span className="absolute -top-1 -right-2 text-[9px] font-mono px-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300">
              {counts.music}
            </span>
          </div>
          <span className="text-[10px] tracking-tight mt-1">Music</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('languages');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center min-h-[48px] rounded-xl transition-all cursor-pointer ${
            activeTab === 'languages'
              ? 'text-zinc-950 dark:text-white font-semibold'
              : 'text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'
          }`}
        >
          <div className="relative">
            <Languages className="w-5 h-5" />
            <span className="absolute -top-1 -right-2 text-[9px] font-mono px-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
              {counts.languages}
            </span>
          </div>
          <span className="text-[10px] tracking-tight mt-1">Languages</span>
        </button>
      </div>
    </nav>
  );
};
