import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { DashboardView } from './components/DashboardView';
import { LanguageView } from './components/LanguageView';
import { MusicView } from './components/MusicView';
import { LiberalArtsView } from './components/LiberalArtsView';
import { DetailModal, SelectedItem } from './components/DetailModal';
import { useCompletedItems } from './utils/useProgress';
import {
  REVISED_LIBERAL_WORKS,
  REVISED_MUSIC_WORKS,
  REVISED_LANGUAGE_WORKS,
} from './data/curriculumData';
import { shouldHanoiBeDarkNow } from './data/timelineData';

export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'languages' | 'music' | 'liberal'>('dashboard');
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('pastel_dark_mode');
      if (saved !== null) return saved === '1';
      return shouldHanoiBeDarkNow();
    } catch {
      return false;
    }
  });

  const { completed, toggleCompleted, isCompleted } = useCompletedItems();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.body.classList.toggle('dark', isDarkMode);
    try {
      localStorage.setItem('pastel_dark_mode', isDarkMode ? '1' : '0');
    } catch {

    }
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setInterval(() => {
      const manual = localStorage.getItem('pastel_dark_mode_manual');
      if (!manual) {
        const auto = shouldHanoiBeDarkNow();
        setIsDarkMode(auto);
      }
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      document.body.classList.toggle('dark', next);
      try {
        localStorage.setItem('pastel_dark_mode', next ? '1' : '0');
        localStorage.setItem('pastel_dark_mode_manual', '1');
      } catch {

      }
      return next;
    });
  };

  const totalItems = REVISED_LANGUAGE_WORKS.length + REVISED_MUSIC_WORKS.length + REVISED_LIBERAL_WORKS.length;
  const completedCount = Object.values(completed).filter(Boolean).length;

  const selectedId = selectedItem ? selectedItem.data.id : '';

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBF7] dark:bg-[#111113] text-[#18181b] dark:text-[#f4f4f5] transition-colors pb-24 md:pb-12">
      
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        totalStats={{
          languages: REVISED_LANGUAGE_WORKS.length,
          music: REVISED_MUSIC_WORKS.length,
          liberal: REVISED_LIBERAL_WORKS.length,
          completedCount,
        }}
      />

      <main className="flex-1 max-w-[1320px] w-full mx-auto px-4 sm:px-6 py-5 sm:py-7 space-y-6">
        
        {activeTab === 'dashboard' && (
          <DashboardView
            completedCount={completedCount}
            totalItems={totalItems}
            completedIds={completed}
            onSelectTrack={setActiveTab}
          />
        )}

        {activeTab === 'liberal' && (
          <LiberalArtsView
            onSelectItem={setSelectedItem}
            isCompleted={isCompleted}
            toggleCompleted={toggleCompleted}
          />
        )}

        {activeTab === 'music' && (
          <MusicView
            onSelectItem={setSelectedItem}
            isCompleted={isCompleted}
            toggleCompleted={toggleCompleted}
            completedIds={completed}
          />
        )}

        {activeTab === 'languages' && (
          <LanguageView
            onSelectItem={setSelectedItem}
            isCompleted={isCompleted}
            toggleCompleted={toggleCompleted}
          />
        )}
      </main>

      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        counts={{
          languages: REVISED_LANGUAGE_WORKS.length,
          music: REVISED_MUSIC_WORKS.length,
          liberal: REVISED_LIBERAL_WORKS.length,
        }}
      />

      <DetailModal
        selected={selectedItem}
        onClose={() => setSelectedItem(null)}
        isCompleted={isCompleted(selectedId)}
        onToggleCompleted={() => {
          if (selectedId) toggleCompleted(selectedId);
        }}
        onNavigateItem={setSelectedItem}
        isItemCompleted={isCompleted}
        toggleItemCompleted={toggleCompleted}
      />
    </div>
  );
}
