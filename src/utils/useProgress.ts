import { useState, useEffect } from 'react';

export function useCompletedItems() {
  const [completed, setCompleted] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('pastel_completed_items');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('pastel_completed_items', JSON.stringify(completed));
    } catch {

    }
  }, [completed]);

  const toggleCompleted = (id: string) => {
    setCompleted(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const isCompleted = (id: string) => !!completed[id];

  return { completed, toggleCompleted, isCompleted };
}
