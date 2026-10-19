import fs from 'fs';
import { REVISED_LIBERAL_WORKS } from '../src/data/curriculumData.ts';

console.log('REVISED_LIBERAL_WORKS actual length:', REVISED_LIBERAL_WORKS.length);

// Group by type
const typeCounts: Record<string, number> = {};
REVISED_LIBERAL_WORKS.forEach(b => {
  typeCounts[b.type] = (typeCounts[b.type] || 0) + 1;
});
console.log('Type breakdown:', typeCounts);

// Look for type 'T' (Textbook) or titles with 'Introduction', 'Guide', 'Handbook', 'Manual', 'Calculus', etc.
const textbooks = REVISED_LIBERAL_WORKS.filter(b => b.type === 'T' || b.type === 'C');
console.log(`\nFound ${textbooks.length} Textbook (T) or Consultative/Reference (C) works:`);
textbooks.forEach(b => {
  console.log(`[${b.id}] (${b.courseCode} · ${b.lane}) ${b.author}: "${b.title}"`);
});
