import { REVISED_MUSIC_WORKS, MusicItem } from '../data/curriculumData';
import { calculateConcurrentSchedule } from './languageSchedule';

export interface CalculatedMusicItem extends MusicItem {
  startDate: string;
  completionDate: string;
  completionDateISO: string;
  weeklyRate: number; // 5, 10, or 20
  rateDescription: string;
  phase: 'pre_german' | 'post_german' | 'post_language';
}

export interface MusicScheduleResult {
  items: CalculatedMusicItem[];
  germanMasteryDate: string;
  finalLanguageDate: string;
  finalLanguageName: string;
  isGermanMastered: boolean;
  isFinalLanguageAcquired: boolean;
  currentWeeklyAllocation: number; // 5, 10, or 20
  ruleDescription: string;
  summary: {
    totalItems: number;
    totalHours: number;
    startDate: string;
    projectedCompletionDate: string;
    itemsAt5HoursPerWeek: number;
    itemsAt10HoursPerWeek: number;
    itemsAt20HoursPerWeek: number;
  };
}

function parseDMY(s: string): Date {
  const [d, m, y] = s.split('/').map(Number);
  return new Date(Date.UTC(y, m - 1, d, 0, 0, 0));
}

function formatDMY(d: Date): string {
  const day = String(d.getUTCDate()).padStart(2, '0');
  const month = String(d.getUTCMonth() + 1).padStart(2, '0');
  const year = d.getUTCFullYear();
  return `${day}/${month}/${year}`;
}

 *    elevates to 20 hours per week.
 */
export function calculateMusicSchedule(
  completedIds: Record<string, boolean> = {}
): MusicScheduleResult {
  const langSchedule = calculateConcurrentSchedule(completedIds);
  const germanMasteryDate = langSchedule.germanMasteryDate; // "29/12/2030"
  const germanMasteryMs = parseDMY(germanMasteryDate).getTime();

  const finalLanguage = langSchedule.languages[langSchedule.languages.length - 1]; // Albanian (LANG-24)
  const finalLanguageDate = finalLanguage.projectedMasteryDate; // e.g. "25/04/2046"
  const finalLanguageMs = parseDMY(finalLanguageDate).getTime();

  const isGermanMastered = Boolean(completedIds['LANG-05']) || langSchedule.isGermanMastered;
  const isFinalLanguageAcquired = Boolean(completedIds[finalLanguage.id]);

  let currentWeeklyAllocation = 5;
  if (isFinalLanguageAcquired) {
    currentWeeklyAllocation = 20;
  } else if (isGermanMastered) {
    currentWeeklyAllocation = 10;
  }

  const items: CalculatedMusicItem[] = [];
  let curTimeMs = parseDMY('22/12/2026').getTime();
  let itemsAt5 = 0;
  let itemsAt10 = 0;
  let itemsAt20 = 0;
  let totalHours = 0;

  for (let i = 0; i < REVISED_MUSIC_WORKS.length; i++) {
    const work = REVISED_MUSIC_WORKS[i];
    totalHours += work.hours;

    if (i === 0) {
      // MUS-01 Grade 2 Musical Theatre completed historical baseline
      itemsAt5++;
      items.push({
        ...work,
        startDate: '01/09/2026',
        completionDate: '22/12/2026',
        completionDateISO: new Date(curTimeMs).toISOString(),
        year: '2026',
        weeklyRate: 5,
        rateDescription: '5 hrs/wk (Pre-German Baseline)',
        phase: 'pre_german',
      });
      continue;
    }

    const startTimeMs = curTimeMs;
    let remainingHours = work.hours;

    while (remainingHours > 1e-6) {
      let rateHrsPerDay = 5 / 7;
      let nextBoundaryMs = germanMasteryMs;

      if (curTimeMs >= finalLanguageMs) {
        rateHrsPerDay = 20 / 7;
        nextBoundaryMs = Infinity;
      } else if (curTimeMs >= germanMasteryMs) {
        rateHrsPerDay = 10 / 7;
        nextBoundaryMs = finalLanguageMs;
      }

      const msToBoundary = nextBoundaryMs - curTimeMs;
      const daysToBoundary = msToBoundary / (86400 * 1000);
      const hoursPossibleInWindow = daysToBoundary * rateHrsPerDay;

      if (remainingHours <= hoursPossibleInWindow) {
        const daysNeeded = remainingHours / rateHrsPerDay;
        curTimeMs += daysNeeded * 86400 * 1000;
        remainingHours = 0;
      } else {
        remainingHours -= hoursPossibleInWindow;
        curTimeMs = nextBoundaryMs;
      }
    }

    const finishTimeMs = curTimeMs;
    const completionDateObj = new Date(finishTimeMs);

    let weeklyRate = 5;
    let phase: 'pre_german' | 'post_german' | 'post_language' = 'pre_german';
    let rateDescription = '5 hrs/wk (Pre-German Phase)';

    if (finishTimeMs >= finalLanguageMs) {
      weeklyRate = 20;
      phase = 'post_language';
      rateDescription = '20 hrs/wk (Post-Language Elevation)';
      itemsAt20++;
    } else if (finishTimeMs >= germanMasteryMs) {
      weeklyRate = 10;
      phase = 'post_german';
      rateDescription = '10 hrs/wk (Post-German Conservatory Acceleration)';
      itemsAt10++;
    } else {
      weeklyRate = 5;
      phase = 'pre_german';
      rateDescription = '5 hrs/wk (Pre-German Concurrent Phase)';
      itemsAt5++;
    }

    items.push({
      ...work,
      startDate: formatDMY(new Date(startTimeMs)),
      completionDate: formatDMY(completionDateObj),
      completionDateISO: completionDateObj.toISOString(),
      year: String(completionDateObj.getUTCFullYear()),
      weeklyRate,
      rateDescription,
      phase,
    });
  }

  return {
    items,
    germanMasteryDate,
    finalLanguageDate,
    finalLanguageName: finalLanguage.lang,
    isGermanMastered,
    isFinalLanguageAcquired,
    currentWeeklyAllocation,
    ruleDescription: `Music pacing: 5 hrs/wk until German (${germanMasteryDate}) → 10 hrs/wk until final language (${finalLanguage.lang}, ${finalLanguageDate}) → 20 hrs/wk thereafter.`,
    summary: {
      totalItems: items.length,
      totalHours,
      startDate: '01/09/2026',
      projectedCompletionDate: items[items.length - 1].completionDate,
      itemsAt5HoursPerWeek: itemsAt5,
      itemsAt10HoursPerWeek: itemsAt10,
      itemsAt20HoursPerWeek: itemsAt20,
    },
  };
}
