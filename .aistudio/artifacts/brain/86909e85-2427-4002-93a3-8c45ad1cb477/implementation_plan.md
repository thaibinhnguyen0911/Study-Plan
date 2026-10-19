# 24-Language Dual Track & Music Reallocation Architecture

Systematic expansion of the language curriculum from 22 to 24 languages—integrating **Romanian** (400 hrs, ILR Atestarea C2) and **Uzbek** (700 hrs, UzPro C2)—and transition of weekly pacing rules post-German mastery: language shifts to dual simultaneous 5 hrs/week study (10 hrs/week total) with preserved spillover balances, while music increases from 5 to 10 hrs/week post-German and elevates to 20 hrs/week upon final language completion.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The following decisions were clarified and confirmed with the user:
> - **Uzbek Sequence Placement**: Inserted immediately after Turkish as Language #22, before Greek (#23) and Albanian (#24).
> - **Final Active Language Load**: When the 23rd language completes and only the 24th language (Albanian) remains active, Albanian receives the full 10 hrs/week to complete the curriculum without unallocated dead time.
> - **Music Elevation Post-Final Language**: Once all 24 languages are fully mastered, the music track elevates from 10 hrs/week to 20 hrs/week.

---

### 1. Overview & Core Concept

- **What It Does**:
  - Expands the linguistic curriculum to 24 world languages across 8 major language families, totaling 11,266 hours of rigorous study.
  - Models the concurrent study transition:
    1. **Pre-German Phase** (May 1, 2026 until German mastery): 15 hrs/wk language load (10 hrs/wk Primary + 5 hrs/wk Secondary), with Music at 5 hrs/wk.
    2. **Post-German Phase** (From German completion onwards): Language allocation shifts to 10 hrs/wk total, split equally as 5 hrs/wk to each of the two active languages studied simultaneously (no 2.5 split, both active languages advance in parallel). Music allocation doubles from 5 to 10 hrs/wk.
    3. **Spillover Balance Rule**: When German completes, all hours accrued by in-progress languages (e.g. Cantonese) are strictly preserved, with continued accrual at 5 hrs/wk.
    4. **Post-Linguistic Elevation**: When all 24 languages are mastered, Music elevates to 20 hrs/wk to accelerate conservatory performance and diploma completions.
- **Target Audience**: Dedicated polymaths and lifelong scholars executing an ambitious multi-decade classical curriculum across Great Books, musical performance, and polyglot mastery.

---

### 2. User Experience & Visual Design

- **Language View (`LanguageView.tsx`)**:
  - Displays all 24 languages in strict genealogical and chronological order.
  - Active study cards prominently display the current study mode:
    - *Pre-German*: "Primary Target (10 hrs/wk)" and "Secondary Preparation (5 hrs/wk)".
    - *Post-German*: "Active Track A (5 hrs/wk)" and "Active Track B (5 hrs/wk)" with live hour balances and countdowns.
  - Updated family filters: Romance filter includes Romanian (400h); Turkic filter includes Turkish (450h) and Uzbek (700h).
- **Music View (`MusicView.tsx`)**:
  - Updated Pacing Banner displaying the current allocation phase:
    - *Current*: 5 hrs/week (Phase 1: Pre-German).
    - *Post-German*: 10 hrs/week (Phase 2: Accelerated Conservatory).
    - *Post-Language*: 20 hrs/week (Phase 3: Full Conservatory Focus).
  - Clear timeline showing calculated exam target dates for all 76 music qualifications.
- **Dashboard View (`DashboardView.tsx`)**:
  - Stat summary strip shows "24 Languages (11,266 hrs)" and "76 Music Exams (4,750 hrs)".
  - Active focus cards display live primary/secondary or dual-active languages and the active music exam with their respective weekly allocations.

---

### 3. Key Product Decisions & Mathematical Strategy

#### Decision 1: Language Sequence & Identifiers (24 Total)
```
LANG-01: Mandarin Chinese    (800h)  · HSK 7–9
LANG-02: Japanese            (760h)  · JLPT N1 + ACTFL OPI/WPT
LANG-03: Korean              (720h)  · TOPIK II, Level 6
LANG-04: French              (500h)  · DALF C2
LANG-05: German              (550h)  · Goethe-Zertifikat C2 (GDS)  <-- Allocation Pivot
LANG-06: Cantonese           (432h)  · ACTFL C2
LANG-07: Dutch               (256h)  · ACTFL C2
LANG-08: Italian             (300h)  · CELI 5 / ACTFL C2
LANG-09: Romanian            (400h)  · ILR Atestarea C2            <-- NEW (Between Italian & Russian)
LANG-10: Russian             (660h)  · TORFL-IV
LANG-11: MSA Arabic          (950h)  · ACTFL C2
LANG-12: Indonesian          (323h)  · UKBI Adaptif C2
LANG-13: Hebrew              (440h)  · ACTFL C2
LANG-14: Swedish             (320h)  · ACTFL C2
LANG-15: Persian Farsi       (480h)  · ACTFL C2
LANG-16: Spanish             (245h)  · DELE C2
LANG-17: Polish              (364h)  · ACTFL C2
LANG-18: Urdu                (338h)  · ACTFL C2
LANG-19: European Portuguese (208h)  · ACTFL C2
LANG-20: Hindi               (224h)  · ACTFL C2
LANG-21: Turkish             (450h)  · Ankara TÖMER C1
LANG-22: Uzbek               (700h)  · UzPro C2                    <-- NEW (After Turkish)
LANG-23: Greek               (546h)  · ACTFL C2
LANG-24: Albanian            (570h)  · ACTFL C2
```

#### Decision 2: Simulation Mechanics & Preservation of Accrued Spillover
- Simulation operates on an exact day-by-day or event-driven chronological queue.
- At any time $t$:
  - If German is NOT yet completed:
    - Active Primary studies at $10/7$ hrs/day.
    - Active Secondary studies at $5/7$ hrs/day.
    - Music studies at $5/7$ hrs/day.
  - At the moment German completes ($t = t_{\text{German}}$):
    - German is marked complete.
    - The language in progress (Cantonese) preserves its accrued hours balance $H_{\text{accrued}}$.
    - Dutch is activated as the second active language ($H = 0$).
    - From $t_{\text{German}}$ forward, both active languages accrue hours at $5/7$ hrs/day each.
    - Music switches immediately to $10/7$ hrs/day.
  - When either of the two active languages reaches its target hours:
    - That language is marked complete on that exact calendar date.
    - The next unstarted language from the queue is activated immediately at $5/7$ hrs/day, while the surviving active language continues uninterrupted at $5/7$ hrs/day.
  - When Language #23 completes and only Language #24 (Albanian) remains:
    - Albanian increases from $5/7$ hrs/day to $10/7$ hrs/day (10 hrs/week total) until completion.
  - When Language #24 completes:
    - Language curriculum is 100% finished.
    - Music allocation elevates to $20/7$ hrs/day (20 hrs/week).

---

### 4. Technical Architecture & Simulation Flow

```
┌────────────────────────────────────────────────────────────────────────┐
│                   CALENDAR SIMULATION ENGINE                           │
│                                                                        │
│  [2026-05-01] ─── Mandarin (10h)                                      │
│  [2026-10-01] ─── Mandarin (10h) + Japanese (5h) | Music: 5h/wk       │
│        │                                                               │
│        ▼                                                               │
│  [German Complete] ─── Pivot Date                                      │
│        │                                                               │
│        ├─► Language Track: Dual Active (5h/wk + 5h/wk = 10h/wk)        │
│        │   • Preserved spillover balances                              │
│        │   • Dynamic replacement upon individual language completion   │
│        │                                                               │
│        └─► Music Track: 10 hrs/week                                    │
│        │                                                               │
│        ▼                                                               │
│  [Only Lang #24 Remaining] ─── Lang #24 gets 10h/wk                   │
│        │                                                               │
│        ▼                                                               │
│  [All 24 Languages Complete] ─── Music Track Elevates to 20h/wk       │
└────────────────────────────────────────────────────────────────────────┘
```

---

### 5. Implementation Steps (Upon Approval)

1. **Curriculum & Timeline Data Updates (`curriculumData.ts`, `timelineData.ts`)**:
   - Add Romanian (ID `LANG-09`, 400h, Stage 200/300, Romance) and re-index following languages to `LANG-10` through `LANG-24`.
   - Add Uzbek (ID `LANG-22`, 700h, Stage 600, Turkic/Karluk).
   - Recompute static reference dates in `timelineData.ts` for both languages and all 76 music works to match the authoritative simulation output.
2. **Simulation Utilities (`languageSchedule.ts`, `musicSchedule.ts`)**:
   - Rewrite `calculateConcurrentSchedule` to support the post-German dual 5h/5h execution model, event-based multi-language queue, and spillover preservation.
   - Update `calculateMusicSchedule` to query the dynamic German mastery date and final language completion date, applying 5h/wk pre-German, 10h/wk post-German, and 20h/wk post-final language.
3. **UI Components (`LanguageView.tsx`, `MusicView.tsx`, `DashboardView.tsx`, `DetailModal.tsx`)**:
   - Update language counts (24), hours (11,266), role labels, and allocation badges.
   - Ensure filters cleanly accommodate Romanian (Romance) and Uzbek (Turkic).
   - Ensure the UI highlights active tracks intuitively.
4. **Verification & Testing (`scripts/runLanguageScheduleTests.ts`)**:
   - Expand the comprehensive test suite to cover all 24 languages, the German completion pivot, spillover preservation, dual 5h/5h rate, 10h final language allocation, and music pacing.
   - Run compilation and tests to ensure zero regressions.
