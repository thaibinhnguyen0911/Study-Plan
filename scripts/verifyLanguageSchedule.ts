import { REVISED_LANGUAGE_WORKS } from '../src/data/curriculumData';
import { LANG } from '../src/data/timelineData';

export interface LanguageScheduleItem {
  id: string;
  orderNum: number;
  lang: string;
  title: string;
  group: string;
  subgroup: string;
  stage: number;
  stageName: string;
  lane: 'Spine' | 'Context' | 'Reference';
  status: 'Core' | 'Context-track' | 'Consultative';
  requiredHours: number;
  accumulatedHours: number;
  accumulatedAsSecondary: number;
  remainingHoursAtPromotion: number;
  startDateAsSecondary: string | null;
  startDateAsPrimary: string;
  projectedMasteryDate: string;
  projectedMasteryDateISO: string;
  weeklyAllocationHours: number; // 10 if active primary, 5 if active secondary, 0 otherwise
  primaryDurationDays: number;
  secondaryDurationDays: number;
}

export function calculateConcurrentLanguageSchedule(): {
  items: LanguageScheduleItem[];
  transitions: Array<{
    date: string;
    description: string;
    primaryLang: string;
    secondaryLang: string | null;
    totalWeeklyHours: number;
  }>;
} {
  // Master language list with required hours from original LANG data
  const rawLanguages = REVISED_LANGUAGE_WORKS.map(item => {
    const origLang = LANG.find(l => l.lang.toLowerCase() === item.lang.toLowerCase()) || LANG[item.orderNum - 1];
    const requiredHours = origLang ? origLang.hours : 500;
    return {
      ...item,
      requiredHours,
    };
  });

  const START_DATE = new Date(Date.UTC(2026, 4, 1, 0, 0, 0)); // 2026-05-01
  const TRANSITION_DATE = new Date(Date.UTC(2026, 9, 1, 0, 0, 0)); // 2026-10-01

  // Days before Oct 1, 2026
  const preOctDays = (TRANSITION_DATE.getTime() - START_DATE.getTime()) / (1000 * 86400); // 153 days
  const preOctPrimaryHours = preOctDays * (10 / 7); // 218.5714...

  const state = rawLanguages.map(item => ({
    ...item,
    accumulatedHours: 0,
    accumulatedAsSecondary: 0,
    remainingHoursAtPromotion: item.requiredHours,
    startDateAsSecondary: null as Date | null,
    startDateAsPrimary: null as Date | null,
    projectedMasteryDate: null as Date | null,
    primaryDurationDays: 0,
    secondaryDurationDays: 0,
  }));

  // Historical phase: May 1 to Oct 1
  state[0].startDateAsPrimary = new Date(START_DATE);
  state[0].accumulatedHours = preOctPrimaryHours;

  let currentTimeMs = TRANSITION_DATE.getTime();
  const transitions: Array<{
    date: string;
    description: string;
    primaryLang: string;
    secondaryLang: string | null;
    totalWeeklyHours: number;
  }> = [];

  // Starting Oct 1, 2026: Mandarin primary (10h/w), Japanese secondary (5h/w)
  state[1].startDateAsSecondary = new Date(TRANSITION_DATE);
  transitions.push({
    date: '01/10/2026',
    description: 'Concurrent Model Activation: Mandarin Chinese continues as Primary (10 hrs/wk), Japanese begins as Secondary (5 hrs/wk)',
    primaryLang: state[0].lang,
    secondaryLang: state[1].lang,
    totalWeeklyHours: 15,
  });

  for (let i = 0; i < state.length; i++) {
    const primary = state[i];
    if (!primary.startDateAsPrimary) {
      primary.startDateAsPrimary = new Date(currentTimeMs);
    }
    primary.accumulatedAsSecondary = primary.accumulatedHours;
    primary.remainingHoursAtPromotion = Math.max(0, primary.requiredHours - primary.accumulatedHours);

    const remainingHours = primary.remainingHoursAtPromotion;
    // Primary studies at 10 hrs/week = (10/7) hrs/day
    const primaryDaysNeeded = remainingHours / (10 / 7);
    primary.primaryDurationDays = primaryDaysNeeded;
    primary.accumulatedHours += remainingHours;

    const hasSecondary = i + 1 < state.length;
    if (hasSecondary) {
      const secondary = state[i + 1];
      if (!secondary.startDateAsSecondary) {
        secondary.startDateAsSecondary = new Date(currentTimeMs);
      }
      // Secondary studies at 5 hrs/week = (5/7) hrs/day during primary's active phase
      const secondaryHoursAccrued = primaryDaysNeeded * (5 / 7);
      secondary.accumulatedHours += secondaryHoursAccrued;
      secondary.secondaryDurationDays = primaryDaysNeeded;
    }

    const finishTimeMs = currentTimeMs + primaryDaysNeeded * 86400 * 1000;
    primary.projectedMasteryDate = new Date(finishTimeMs);
    currentTimeMs = finishTimeMs;

    if (hasSecondary) {
      const nextSecondary = i + 2 < state.length ? state[i + 2].lang : null;
      transitions.push({
        date: formatDate(primary.projectedMasteryDate),
        description: `${primary.lang} reaches ${primary.requiredHours}h mastery. ${state[i + 1].lang} promoted to Primary (10 hrs/wk)` +
          (nextSecondary ? `, ${nextSecondary} assigned as Secondary (5 hrs/wk)` : ' (Final language: 10 hrs/wk, no secondary)'),
        primaryLang: state[i + 1].lang,
        secondaryLang: nextSecondary,
        totalWeeklyHours: nextSecondary ? 15 : 10,
      });
    }
  }

  function formatDate(d: Date): string {
    const day = String(d.getUTCDate()).padStart(2, '0');
    const month = String(d.getUTCMonth() + 1).padStart(2, '0');
    const year = d.getUTCFullYear();
    return `${day}/${month}/${year}`;
  }

  const items: LanguageScheduleItem[] = state.map((s, idx) => {
    // Current role as of reference: for display
    return {
      id: s.id,
      orderNum: s.orderNum,
      lang: s.lang,
      title: s.title,
      group: s.group,
      subgroup: s.subgroup,
      stage: s.stage,
      stageName: s.stageName,
      lane: s.lane,
      status: s.status,
      requiredHours: s.requiredHours,
      accumulatedHours: Math.round(s.accumulatedHours * 100) / 100,
      accumulatedAsSecondary: Math.round(s.accumulatedAsSecondary * 100) / 100,
      remainingHoursAtPromotion: Math.round(s.remainingHoursAtPromotion * 100) / 100,
      startDateAsSecondary: s.startDateAsSecondary ? formatDate(s.startDateAsSecondary) : null,
      startDateAsPrimary: formatDate(s.startDateAsPrimary!),
      projectedMasteryDate: formatDate(s.projectedMasteryDate!),
      projectedMasteryDateISO: s.projectedMasteryDate!.toISOString(),
      weeklyAllocationHours: idx === 0 ? 10 : idx === 1 ? 5 : 0,
      primaryDurationDays: Math.round(s.primaryDurationDays * 10) / 10,
      secondaryDurationDays: Math.round(s.secondaryDurationDays * 10) / 10,
    };
  });

  return { items, transitions };
}

// Self-executing verification script
const { items, transitions } = calculateConcurrentLanguageSchedule();
console.log('=== CONCURRENT PRIMARY-SECONDARY LANGUAGE SCHEDULE VERIFICATION ===\n');
console.log('Found ' + items.length + ' languages.');
console.table(
  items.map(l => ({
    Order: l.orderNum,
    Language: l.lang,
    Target: `${l.requiredHours}h`,
    AccAsSec: `${l.accumulatedAsSecondary}h`,
    RemAtPromo: `${l.remainingHoursAtPromotion}h`,
    PrimDays: `${l.primaryDurationDays}d`,
    StartPrim: l.startDateAsPrimary,
    MasteryDate: l.projectedMasteryDate,
  }))
);

console.log('\n=== TRANSITIONS (' + transitions.length + ') ===');
transitions.forEach(t => {
  console.log(`[${t.date}] ${t.description} (Planned load: ${t.totalWeeklyHours} hrs/wk)`);
});
