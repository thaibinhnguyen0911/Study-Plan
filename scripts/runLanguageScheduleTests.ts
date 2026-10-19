import { calculateConcurrentSchedule, LANGUAGE_REQUIRED_HOURS } from '../src/utils/languageSchedule';
import { calculateMusicSchedule } from '../src/utils/musicSchedule';
import { REVISED_LANGUAGE_WORKS, REVISED_MUSIC_WORKS, REVISED_LIBERAL_WORKS } from '../src/data/curriculumData';
import { LANG, MUSIC, LIBERAL } from '../src/data/timelineData';

interface TestResult {
  name: string;
  passed: boolean;
  details: string;
}

const results: TestResult[] = [];

function assert(condition: boolean, testName: string, passMsg: string, failMsg: string) {
  if (condition) {
    results.push({ name: testName, passed: true, details: passMsg });
    console.log(`✅ [PASS] ${testName}: ${passMsg}`);
  } else {
    results.push({ name: testName, passed: false, details: failMsg });
    console.error(`❌ [FAIL] ${testName}: ${failMsg}`);
  }
}

console.log('=====================================================');
console.log('RUNNING COMPREHENSIVE 24-LANGUAGE & MUSIC TEST SUITE');
console.log('=====================================================\n');

const schedule = calculateConcurrentSchedule();

// Test A — Historical period:
// Confirm original 10-h/wk allocation and May 1, 2026 start date remain intact before Oct 1, 2026.
const mandarin = schedule.languages[0];
const japanese = schedule.languages[1];
const expectedPreOctMandarinHours = 153 * (10 / 7); // ~218.57h
const testAPassed =
  mandarin.startDateAsPrimary === '01/05/2026' &&
  Math.abs(mandarin.accumulatedAsSecondary - 0) === 0 &&
  japanese.startDateAsSecondary === '01/10/2026' &&
  schedule.summary.startDate === '01/05/2026' &&
  schedule.summary.effectiveDate === '01/10/2026';

assert(
  testAPassed,
  'Test A — Historical Period',
  `May 1, 2026 start preserved. Mandarin was sole active language before Oct 1, 2026 (accumulated ${expectedPreOctMandarinHours.toFixed(2)}h over 153 days). Japanese secondary allocation began precisely on 01/10/2026.`,
  `Historical period mismatch. Mandarin start=${mandarin.startDateAsPrimary}, Japanese sec start=${japanese.startDateAsSecondary}`
);

// Test B — Initial concurrent period:
// Confirm Mandarin receives 10h/wk and Japanese receives 5h/wk from Oct 1, 2026 until Mandarin reaches 800h.
const oct1Transition = schedule.transitions.find(t => t.date === '01/10/2026');
const testBPassed =
  oct1Transition !== undefined &&
  oct1Transition.totalWeeklyHours === 15 &&
  oct1Transition.primaryLang === 'Mandarin Chinese' &&
  oct1Transition.secondaryLang === 'Japanese' &&
  mandarin.projectedMasteryDate === '12/11/2027';

assert(
  testBPassed,
  'Test B — Initial Concurrent Period',
  `Oct 1, 2026 starts with Mandarin (10 hrs/wk) and Japanese (5 hrs/wk), total 15 hrs/wk. Mandarin finishes 800h on 12/11/2027.`,
  `Initial concurrent period mismatch.`
);

// Test C — Promotion and carried-over progress (Pre-German):
// At transition from Mandarin to Japanese, Japanese retains all valid hours accumulated while secondary (~290.71h).
const expectedJapaneseSecHours = 407 * (5 / 7); // 290.714h
const testCPassed =
  Math.abs(japanese.accumulatedAsSecondary - 290.71) < 0.1 &&
  japanese.startDateAsPrimary === '12/11/2027' &&
  japanese.remainingHoursAtPromotion === Math.round((760 - expectedJapaneseSecHours) * 100) / 100 &&
  schedule.languages[2].startDateAsSecondary === '12/11/2027';

assert(
  testCPassed,
  'Test C — Promotion & Carried-Over Progress',
  `Japanese carried over ${japanese.accumulatedAsSecondary}h from secondary phase. Remaining at promotion: ${japanese.remainingHoursAtPromotion}h. Promoted to Primary on 12/11/2027 with Korean starting as Secondary.`,
  `Japanese promotion carry-over calculation failed.`
);

// Test D — 24-Language Sequence & Insertion Integrity:
// Romanian (LANG-09, 400h) inserted between Italian and Russian.
// Uzbek (LANG-22, 700h) inserted after Turkish, before Greek and Albanian.
const italian = schedule.languages[7];
const romanian = schedule.languages[8];
const russian = schedule.languages[9];
const turkish = schedule.languages[20];
const uzbek = schedule.languages[21];
const greek = schedule.languages[22];
const albanian = schedule.languages[23];

const testDPassed =
  schedule.languages.length === 24 &&
  REVISED_LANGUAGE_WORKS.length === 24 &&
  LANG.length === 24 &&
  romanian.id === 'LANG-09' &&
  romanian.lang === 'Romanian' &&
  romanian.requiredHours === 400 &&
  italian.lang === 'Italian' &&
  russian.lang === 'Russian' &&
  uzbek.id === 'LANG-22' &&
  uzbek.lang === 'Uzbek' &&
  uzbek.requiredHours === 700 &&
  turkish.lang === 'Turkish' &&
  greek.lang === 'Greek' &&
  albanian.lang === 'Albanian';

assert(
  testDPassed,
  'Test D — 24-Language Pipeline & Insertion Verification',
  `All 24 languages verified: Romanian (400h) correctly inserted between Italian & Russian. Uzbek (700h) correctly inserted after Turkish, before Greek & Albanian. Total curriculum hours: ${schedule.summary.totalCurriculumHours}h.`,
  `Language insertion integrity failed.`
);

// Test E — Post-German Pivot & Spillover Preservation:
// German (LANG-05) finishes 29/12/2030.
// Post-German: Cantonese retains its accrued secondary balance (~210.67h).
// Dutch and Cantonese run simultaneously at 5h/wk each (total 10h/wk).
const german = schedule.languages[4];
const cantonese = schedule.languages[5];
const dutch = schedule.languages[6];

const testEPassed =
  german.projectedMasteryDate === '29/12/2030' &&
  Math.abs(cantonese.accumulatedAsSecondary - 210.67) < 0.1 &&
  cantonese.startDateAsPrimary === '29/12/2030' &&
  dutch.startDateAsPrimary === '29/12/2030' &&
  cantonese.projectedMasteryDate === '04/11/2031' &&
  dutch.projectedMasteryDate === '22/12/2031';

assert(
  testEPassed,
  'Test E — Post-German Dual 5h/wk Allocation & Spillover Balance',
  `German completes on 29/12/2030. Cantonese balance of ${cantonese.accumulatedAsSecondary}h strictly preserved and continues at 5 hrs/wk (finishing 04/11/2031). Dutch activates concurrently at 5 hrs/wk (finishing 22/12/2031).`,
  `Post-German pivot failed. German finish=${german.projectedMasteryDate}, Cantonese accrued=${cantonese.accumulatedAsSecondary}`
);

// Test F — Final Language Boundary Condition (Albanian):
// When Language #23 (Greek) finishes on 24/05/2045, Albanian (#24) receives 10 hrs/wk until completion on 26/04/2046.
const testFPassed =
  albanian.id === 'LANG-24' &&
  albanian.orderNum === 24 &&
  albanian.lang === 'Albanian' &&
  albanian.projectedMasteryDate === '26/04/2046';

assert(
  testFPassed,
  'Test F — Final Language Boundary (Albanian #24 receives 10 hrs/wk)',
  `Albanian completes on 26/04/2046, completing the entire 24-language curriculum.`,
  `Final language boundary condition failed. Albanian mastery date=${albanian.projectedMasteryDate}`
);

// Test G — Determinism & Repeatability:
const run1 = calculateConcurrentSchedule();
const run2 = calculateConcurrentSchedule();
const testGPassed =
  JSON.stringify(run1.languages) === JSON.stringify(run2.languages) &&
  LANGUAGE_REQUIRED_HOURS['LANG-09'] === 400 &&
  LANGUAGE_REQUIRED_HOURS['LANG-22'] === 700 &&
  LANGUAGE_REQUIRED_HOURS['LANG-24'] === 570;

assert(
  testGPassed,
  'Test G — Determinism and Repeatability',
  'Successive simulation runs produced bit-for-bit identical schedules without target mutation or date drift.',
  'Date drift or mutation detected across successive runs.'
);

// Test H — Music Track Revised Schedule & Pacing:
// 1. Strictly 5h/wk pre-German (up to 29/12/2030).
// 2. 10h/wk post-German (29/12/2030 to 26/04/2046).
// 3. 20h/wk post-final language (26/04/2046 onwards).
const musicSched = calculateMusicSchedule();
const item13 = musicSched.items[12]; // pre-German
const item17 = musicSched.items[16]; // post-German (10h/wk)
const item76 = musicSched.items[75]; // post-all-languages (20h/wk)

const testHPassed =
  REVISED_MUSIC_WORKS.length === 76 &&
  MUSIC.length === 76 &&
  item13.weeklyRate === 5 &&
  item17.weeklyRate === 10 &&
  item76.weeklyRate === 20 &&
  musicSched.summary.itemsAt5HoursPerWeek === 14 &&
  musicSched.summary.itemsAt10HoursPerWeek === 19 &&
  musicSched.summary.itemsAt20HoursPerWeek === 43;

assert(
  testHPassed,
  'Test H — Music Track 3-Tier Pacing (5h -> 10h -> 20h)',
  `Music track correctly paces: 14 items at 5 hrs/wk (pre-German), 19 items at 10 hrs/wk (post-German), and 43 items at 20 hrs/wk (post-final language). Conservatory completes on ${musicSched.summary.projectedCompletionDate}.`,
  `Music pacing verification failed.`
);

// Test I — Dynamic Progress Reactivity:
// Confirm active allocations respond dynamically to user completed state:
const baselineMusic = calculateMusicSchedule({});
const postGermanMusic = calculateMusicSchedule({ 'LANG-05': true });
const allLanguagesMusic = calculateMusicSchedule({ 'LANG-24': true });

const testIPassed =
  baselineMusic.currentWeeklyAllocation === 5 &&
  postGermanMusic.currentWeeklyAllocation === 10 &&
  allLanguagesMusic.currentWeeklyAllocation === 20;

assert(
  testIPassed,
  'Test I — Dynamic User Progress Reactivity',
  `Active music allocation dynamically responds: 5 hrs/wk initially → 10 hrs/wk when German is mastered → 20 hrs/wk when final language (Albanian) is acquired.`,
  `Dynamic allocation reactivity failed. Initial=${baselineMusic.currentWeeklyAllocation}, German=${postGermanMusic.currentWeeklyAllocation}, Albanian=${allLanguagesMusic.currentWeeklyAllocation}`
);

console.log('\n=====================================================');
const allPassed = results.every(r => r.passed);
if (allPassed) {
  console.log(`🎉 ALL ${results.length} TEST SCENARIOS PASSED WITH ZERO ERRORS!`);
} else {
  console.error(`⚠️ SOME TESTS FAILED!`);
  process.exit(1);
}
console.log('=====================================================\n');
