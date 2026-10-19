import { REVISED_LANGUAGE_WORKS, LanguageItem } from '../data/curriculumData';

/**
 * Authoritative required mastery hours for each of the 24 languages in the curriculum.
 * Preserves the exact original total hours from the language track, including Romanian (400h) and Uzbek (700h).
 */
export const LANGUAGE_REQUIRED_HOURS: Record<string, number> = {
  'LANG-01': 800, // Mandarin Chinese
  'LANG-02': 760, // Japanese
  'LANG-03': 720, // Korean
  'LANG-04': 500, // French
  'LANG-05': 550, // German
  'LANG-06': 432, // Cantonese
  'LANG-07': 256, // Dutch
  'LANG-08': 300, // Italian
  'LANG-09': 400, // Romanian
  'LANG-10': 660, // Russian
  'LANG-11': 950, // MSA Arabic
  'LANG-12': 323, // Indonesian
  'LANG-13': 440, // Hebrew
  'LANG-14': 320, // Swedish
  'LANG-15': 480, // Persian Farsi
  'LANG-16': 245, // Spanish
  'LANG-17': 364, // Polish
  'LANG-18': 338, // Urdu
  'LANG-19': 208, // European Portuguese
  'LANG-20': 224, // Hindi
  'LANG-21': 450, // Turkish
  'LANG-22': 700, // Uzbek
  'LANG-23': 546, // Greek
  'LANG-24': 570, // Albanian
};

export interface ConcurrentLanguageScheduleItem extends LanguageItem {
  requiredHours: number;
  accumulatedAsSecondary: number;
  remainingHoursAtPromotion: number;
  totalAccumulatedHours: number;
  startDateAsSecondary: string | null;
  startDateAsPrimary: string;
  projectedMasteryDate: string;
  projectedMasteryDateISO: string;
  role: 'primary' | 'secondary' | 'dual_active' | 'completed' | 'queued';
  currentWeeklyHours: number;
  primaryDurationDays: number;
  secondaryDurationDays: number;
  isPostGerman: boolean;
}

export interface ScheduleTransition {
  date: string;
  dateISO: string;
  event: string;
  primaryLang: string;
  secondaryLang: string | null;
  totalWeeklyHours: number;
}

export interface ConcurrentScheduleResult {
  languages: ConcurrentLanguageScheduleItem[];
  activePrimary: ConcurrentLanguageScheduleItem;
  activeSecondary: ConcurrentLanguageScheduleItem | null;
  activeLanguages: ConcurrentLanguageScheduleItem[];
  isGermanMastered: boolean;
  germanMasteryDate: string;
  totalWeeklyHours: number;
  transitions: ScheduleTransition[];
  summary: {
    totalCurriculumHours: number;
    startDate: string;
    effectiveDate: string;
    germanMasteryDate: string;
    projectedCompletionDate: string;
  };
}

function formatDate(d: Date): string {
  const day = String(d.getUTCDate()).padStart(2, '0');
  const month = String(d.getUTCMonth() + 1).padStart(2, '0');
  const year = d.getUTCFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * Calculates the concurrent language study schedule across all 24 languages.
 *
 * Rules:
 * 1. Start date: May 1, 2026.
 * 2. Pre-transition (May 1, 2026 - Sept 30, 2026):
 *    Primary gets 10 hrs/wk, Secondary gets 0 hrs/wk (153 calendar days = 218.57 hours accumulated).
 * 3. Pre-German Era (Oct 1, 2026 until German LANG-05 mastery):
 *    Primary gets 10 hrs/wk, Secondary gets 5 hrs/wk (15 hrs/wk combined load).
 * 4. Post-German Mastery Pivot:
 *    - Language allocation shifts to 10 hrs/week total, split equally as 5 hrs/week to EACH of
 *      the two active languages studied simultaneously (no 2.5 split, both active languages studied together).
 *    - Spillover Rule: Hours already accumulated for an in-progress language (Cantonese) are strictly
 *      preserved, and counting continues from that balance at 5 hrs/week.
 *    - As each language completes, the next unstarted language from the queue enters at 5 hrs/week.
 * 5. Final Language Boundary: When only Language #24 (Albanian) remains active, it receives 10 hrs/week
 *    to complete the curriculum.
 */
export function calculateConcurrentSchedule(
  completedIds: Record<string, boolean> = {}
): ConcurrentScheduleResult {
  const START_DATE = new Date(Date.UTC(2026, 4, 1, 0, 0, 0)); // 2026-05-01
  const TRANSITION_DATE = new Date(Date.UTC(2026, 9, 1, 0, 0, 0)); // 2026-10-01

  // Elapsed calendar days in historical period (May 1 - Sep 30, 2026)
  const preOctDays = (TRANSITION_DATE.getTime() - START_DATE.getTime()) / (1000 * 86400); // 153 days
  const preOctPrimaryHours = preOctDays * (10 / 7); // 1530 / 7 = 218.5714...

  // Create clean calculation state for all 24 languages
  const state = REVISED_LANGUAGE_WORKS.map(item => {
    const requiredHours = LANGUAGE_REQUIRED_HOURS[item.id] ?? 500;
    return {
      ...item,
      requiredHours,
      accumulatedHours: 0,
      accumulatedAsSecondary: 0,
      remainingHoursAtPromotion: requiredHours,
      startDateAsSecondary: null as Date | null,
      startDateAsPrimary: null as Date | null,
      projectedMasteryDate: null as Date | null,
      primaryDurationDays: 0,
      secondaryDurationDays: 0,
      isPostGerman: false,
    };
  });

  // Step 1: Historical period (May 1 to Oct 1, 2026)
  state[0].startDateAsPrimary = new Date(START_DATE);
  state[0].accumulatedHours = preOctPrimaryHours;

  let currentTimeMs = TRANSITION_DATE.getTime();
  const transitions: ScheduleTransition[] = [];

  // Oct 1, 2026: Concurrent activation
  state[1].startDateAsSecondary = new Date(TRANSITION_DATE);
  transitions.push({
    date: formatDate(TRANSITION_DATE),
    dateISO: TRANSITION_DATE.toISOString(),
    event: 'Concurrent Model Activation: Mandarin Chinese continues as Primary (10 hrs/wk); Japanese commences as Secondary (5 hrs/wk)',
    primaryLang: state[0].lang,
    secondaryLang: state[1].lang,
    totalWeeklyHours: 15,
  });

  // Step 2: Pre-German Era (Languages 0 through 4: Mandarin, Japanese, Korean, French, German)
  for (let i = 0; i <= 4; i++) {
    const primary = state[i];
    if (!primary.startDateAsPrimary) {
      primary.startDateAsPrimary = new Date(currentTimeMs);
    }

    primary.accumulatedAsSecondary = i === 0 ? 0 : primary.accumulatedHours;
    primary.remainingHoursAtPromotion = Math.max(0, primary.requiredHours - primary.accumulatedHours);

    const remainingHours = primary.remainingHoursAtPromotion;
    const primaryDaysNeeded = remainingHours / (10 / 7);
    primary.primaryDurationDays = primaryDaysNeeded;
    primary.accumulatedHours += remainingHours;

    if (i + 1 < state.length) {
      const secondary = state[i + 1];
      if (!secondary.startDateAsSecondary) {
        secondary.startDateAsSecondary = new Date(currentTimeMs);
      }
      const secondaryHoursAccrued = primaryDaysNeeded * (5 / 7);
      secondary.accumulatedHours += secondaryHoursAccrued;
      secondary.secondaryDurationDays = primaryDaysNeeded;
    }

    const finishTimeMs = currentTimeMs + primaryDaysNeeded * 86400 * 1000;
    primary.projectedMasteryDate = new Date(finishTimeMs);
    currentTimeMs = finishTimeMs;

    if (i < 4) {
      transitions.push({
        date: formatDate(primary.projectedMasteryDate),
        dateISO: primary.projectedMasteryDate.toISOString(),
        event: `${primary.lang} completes ${primary.requiredHours}h mastery. ${state[i + 1].lang} promoted to Primary (10 hrs/wk), ${state[i + 2].lang} commences as Secondary (5 hrs/wk)`,
        primaryLang: state[i + 1].lang,
        secondaryLang: state[i + 2].lang,
        totalWeeklyHours: 15,
      });
    }
  }

  // German completed
  const germanMasteryDate = formatDate(state[4].projectedMasteryDate!);
  const germanFinishTimeMs = currentTimeMs;

  transitions.push({
    date: germanMasteryDate,
    dateISO: state[4].projectedMasteryDate!.toISOString(),
    event: `German completes 550h mastery. Language track shifts to dual simultaneous study at 5 hrs/week each (10 hrs/wk total). Cantonese preserves ${Math.round(state[5].accumulatedHours * 100) / 100}h accrued balance. Music allocation increases from 5 to 10 hrs/wk.`,
    primaryLang: state[5].lang,
    secondaryLang: state[6].lang,
    totalWeeklyHours: 10,
  });

  // Step 3: Post-German Era (Languages 5 through 23)
  // Both slots active simultaneously at 5 hrs/week each.
  // Spillover balances are preserved and continued at 5 hrs/week.
  for (let j = 5; j < state.length; j++) {
    state[j].isPostGerman = true;
  }

  let slot1Index = 5; // Cantonese (with ~210.67h accrued)
  let slot2Index = 6; // Dutch (0h accrued)
  let nextQueueIndex = 7; // Italian

  state[slot1Index].startDateAsPrimary = new Date(germanFinishTimeMs);
  state[slot1Index].accumulatedAsSecondary = state[slot1Index].accumulatedHours;
  state[slot1Index].remainingHoursAtPromotion = Math.max(0, state[slot1Index].requiredHours - state[slot1Index].accumulatedHours);

  state[slot2Index].startDateAsPrimary = new Date(germanFinishTimeMs);
  state[slot2Index].accumulatedAsSecondary = 0;
  state[slot2Index].remainingHoursAtPromotion = state[slot2Index].requiredHours;

  while (slot1Index !== -1 || slot2Index !== -1) {
    // Only one language remaining (e.g. final language Albanian #24)
    if (slot1Index !== -1 && slot2Index === -1) {
      const lang = state[slot1Index];
      const remaining = lang.requiredHours - lang.accumulatedHours;
      const days = remaining / (10 / 7); // Final language gets 10 hrs/wk
      lang.primaryDurationDays += days;
      lang.accumulatedHours = lang.requiredHours;
      currentTimeMs += days * 86400 * 1000;
      lang.projectedMasteryDate = new Date(currentTimeMs);
      transitions.push({
        date: formatDate(lang.projectedMasteryDate),
        dateISO: lang.projectedMasteryDate.toISOString(),
        event: `${lang.lang} completes ${lang.requiredHours}h mastery. All 24 curriculum languages acquired! Music elevates to 20 hrs/wk.`,
        primaryLang: lang.lang,
        secondaryLang: null,
        totalWeeklyHours: 0,
      });
      slot1Index = -1;
      break;
    }

    if (slot2Index !== -1 && slot1Index === -1) {
      const lang = state[slot2Index];
      const remaining = lang.requiredHours - lang.accumulatedHours;
      const days = remaining / (10 / 7);
      lang.primaryDurationDays += days;
      lang.accumulatedHours = lang.requiredHours;
      currentTimeMs += days * 86400 * 1000;
      lang.projectedMasteryDate = new Date(currentTimeMs);
      transitions.push({
        date: formatDate(lang.projectedMasteryDate),
        dateISO: lang.projectedMasteryDate.toISOString(),
        event: `${lang.lang} completes ${lang.requiredHours}h mastery. All 24 curriculum languages acquired! Music elevates to 20 hrs/wk.`,
        primaryLang: lang.lang,
        secondaryLang: null,
        totalWeeklyHours: 0,
      });
      slot2Index = -1;
      break;
    }

    // Both slots active at 5 hrs/week = (5/7) hrs/day
    const l1 = state[slot1Index];
    const l2 = state[slot2Index];
    const rem1 = l1.requiredHours - l1.accumulatedHours;
    const rem2 = l2.requiredHours - l2.accumulatedHours;
    const days1 = rem1 / (5 / 7);
    const days2 = rem2 / (5 / 7);

    if (Math.abs(days1 - days2) < 1e-6) {
      // Both finish at the same time
      currentTimeMs += days1 * 86400 * 1000;
      l1.accumulatedHours = l1.requiredHours;
      l2.accumulatedHours = l2.requiredHours;
      l1.primaryDurationDays += days1;
      l2.primaryDurationDays += days1;
      l1.projectedMasteryDate = new Date(currentTimeMs);
      l2.projectedMasteryDate = new Date(currentTimeMs);

      const next1 = nextQueueIndex < state.length ? nextQueueIndex++ : -1;
      const next2 = nextQueueIndex < state.length ? nextQueueIndex++ : -1;

      transitions.push({
        date: formatDate(l1.projectedMasteryDate),
        dateISO: l1.projectedMasteryDate.toISOString(),
        event: `${l1.lang} and ${l2.lang} simultaneously complete requirements.`,
        primaryLang: next1 !== -1 ? state[next1].lang : '',
        secondaryLang: next2 !== -1 ? state[next2].lang : null,
        totalWeeklyHours: next1 !== -1 ? (next2 !== -1 ? 10 : 10) : 0,
      });

      slot1Index = next1;
      slot2Index = next2;
      if (slot1Index !== -1) {
        state[slot1Index].startDateAsPrimary = new Date(currentTimeMs);
        state[slot1Index].remainingHoursAtPromotion = state[slot1Index].requiredHours;
      }
      if (slot2Index !== -1) {
        state[slot2Index].startDateAsPrimary = new Date(currentTimeMs);
        state[slot2Index].remainingHoursAtPromotion = state[slot2Index].requiredHours;
      }
    } else if (days1 < days2) {
      // Slot 1 finishes first
      currentTimeMs += days1 * 86400 * 1000;
      l1.accumulatedHours = l1.requiredHours;
      l1.primaryDurationDays += days1;
      l1.projectedMasteryDate = new Date(currentTimeMs);

      l2.accumulatedHours += days1 * (5 / 7);
      l2.primaryDurationDays += days1;

      const nextLangIndex = nextQueueIndex < state.length ? nextQueueIndex++ : -1;
      transitions.push({
        date: formatDate(l1.projectedMasteryDate),
        dateISO: l1.projectedMasteryDate.toISOString(),
        event: `${l1.lang} completes ${l1.requiredHours}h mastery.` +
          (nextLangIndex !== -1
            ? ` ${state[nextLangIndex].lang} activates alongside ${l2.lang} (both 5 hrs/wk).`
            : ` Only ${l2.lang} remains active, elevates to 10 hrs/wk.`),
        primaryLang: l2.lang,
        secondaryLang: nextLangIndex !== -1 ? state[nextLangIndex].lang : null,
        totalWeeklyHours: 10,
      });

      slot1Index = nextLangIndex;
      if (slot1Index !== -1) {
        state[slot1Index].startDateAsPrimary = new Date(currentTimeMs);
        state[slot1Index].remainingHoursAtPromotion = state[slot1Index].requiredHours;
      }
    } else {
      // Slot 2 finishes first
      currentTimeMs += days2 * 86400 * 1000;
      l2.accumulatedHours = l2.requiredHours;
      l2.primaryDurationDays += days2;
      l2.projectedMasteryDate = new Date(currentTimeMs);

      l1.accumulatedHours += days2 * (5 / 7);
      l1.primaryDurationDays += days2;

      const nextLangIndex = nextQueueIndex < state.length ? nextQueueIndex++ : -1;
      transitions.push({
        date: formatDate(l2.projectedMasteryDate),
        dateISO: l2.projectedMasteryDate.toISOString(),
        event: `${l2.lang} completes ${l2.requiredHours}h mastery.` +
          (nextLangIndex !== -1
            ? ` ${state[nextLangIndex].lang} activates alongside ${l1.lang} (both 5 hrs/wk).`
            : ` Only ${l1.lang} remains active, elevates to 10 hrs/wk.`),
        primaryLang: l1.lang,
        secondaryLang: nextLangIndex !== -1 ? state[nextLangIndex].lang : null,
        totalWeeklyHours: 10,
      });

      slot2Index = nextLangIndex;
      if (slot2Index !== -1) {
        state[slot2Index].startDateAsPrimary = new Date(currentTimeMs);
        state[slot2Index].remainingHoursAtPromotion = state[slot2Index].requiredHours;
      }
    }
  }

  // Determine current active languages from completedIds
  const uncompletedLanguages = state.filter(l => !completedIds[l.id]);
  const isGermanMasteredByUser = !!completedIds['LANG-05'];

  let activeLanguages: ConcurrentLanguageScheduleItem[] = [];
  const languages: ConcurrentLanguageScheduleItem[] = state.map((s) => {
    let role: 'primary' | 'secondary' | 'dual_active' | 'completed' | 'queued' = 'queued';
    let currentWeeklyHours = 0;

    if (completedIds[s.id]) {
      role = 'completed';
      currentWeeklyHours = 0;
    }

    return {
      id: s.id,
      orderNum: s.orderNum,
      title: s.title,
      lang: s.lang,
      group: s.group,
      subgroup: s.subgroup,
      stage: s.stage,
      stageName: s.stageName,
      lane: s.lane,
      status: s.status,
      requiredHours: s.requiredHours,
      accumulatedAsSecondary: Math.round(s.accumulatedAsSecondary * 100) / 100,
      remainingHoursAtPromotion: Math.round(s.remainingHoursAtPromotion * 100) / 100,
      totalAccumulatedHours: Math.round(s.accumulatedHours * 100) / 100,
      startDateAsSecondary: s.startDateAsSecondary ? formatDate(s.startDateAsSecondary) : null,
      startDateAsPrimary: formatDate(s.startDateAsPrimary!),
      projectedMasteryDate: formatDate(s.projectedMasteryDate!),
      projectedMasteryDateISO: s.projectedMasteryDate!.toISOString(),
      role,
      currentWeeklyHours,
      primaryDurationDays: Math.round(s.primaryDurationDays * 10) / 10,
      secondaryDurationDays: Math.round(s.secondaryDurationDays * 10) / 10,
      isPostGerman: s.isPostGerman,
    };
  });

  // Assign active roles based on completion status
  if (uncompletedLanguages.length > 0) {
    if (isGermanMasteredByUser || uncompletedLanguages[0].id > 'LANG-05') {
      // Post-German era: up to two active languages at 5 hrs/week each (or 10 if only 1 remains)
      if (uncompletedLanguages.length === 1) {
        const item = languages.find(l => l.id === uncompletedLanguages[0].id)!;
        item.role = 'dual_active';
        item.currentWeeklyHours = 10;
        activeLanguages = [item];
      } else {
        const item1 = languages.find(l => l.id === uncompletedLanguages[0].id)!;
        const item2 = languages.find(l => l.id === uncompletedLanguages[1].id)!;
        item1.role = 'dual_active';
        item1.currentWeeklyHours = 5;
        item2.role = 'dual_active';
        item2.currentWeeklyHours = 5;
        activeLanguages = [item1, item2];
      }
    } else {
      // Pre-German era: Primary (10 hrs/wk) + Secondary (5 hrs/wk)
      const primaryItem = languages.find(l => l.id === uncompletedLanguages[0].id)!;
      primaryItem.role = 'primary';
      primaryItem.currentWeeklyHours = 10;

      if (uncompletedLanguages.length > 1) {
        const secondaryItem = languages.find(l => l.id === uncompletedLanguages[1].id)!;
        secondaryItem.role = 'secondary';
        secondaryItem.currentWeeklyHours = 5;
        activeLanguages = [primaryItem, secondaryItem];
      } else {
        activeLanguages = [primaryItem];
      }
    }
  }

  const activePrimary = activeLanguages[0] ?? languages[0];
  const activeSecondary = activeLanguages[1] ?? null;
  const totalWeeklyHours = activeLanguages.reduce((sum, l) => sum + l.currentWeeklyHours, 0);
  const totalCurriculumHours = Object.values(LANGUAGE_REQUIRED_HOURS).reduce((a, b) => a + b, 0);

  return {
    languages,
    activePrimary,
    activeSecondary,
    activeLanguages,
    isGermanMastered: isGermanMasteredByUser || !uncompletedLanguages.some(l => l.id <= 'LANG-05'),
    germanMasteryDate,
    totalWeeklyHours,
    transitions,
    summary: {
      totalCurriculumHours,
      startDate: '01/05/2026',
      effectiveDate: '01/10/2026',
      germanMasteryDate,
      projectedCompletionDate: languages[languages.length - 1].projectedMasteryDate,
    },
  };
}
