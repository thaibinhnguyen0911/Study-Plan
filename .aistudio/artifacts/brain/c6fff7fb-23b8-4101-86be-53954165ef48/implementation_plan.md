# Curriculum Refinement, Universal Essay Coverage, Granular Accolades & Bidirectional Relationships

A comprehensive engineering plan to complete 100% synthesis essay coverage across all 314 Liberal Studies books, refine Music and Language taxonomy filters, reorganize the Total Dashboard into sequential track focus cards, expand progression badge granularity across all three tracks, provide purposeful micro-animations, and expose full bidirectional Reference book relationships.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> The following design decisions were confirmed in Phase 1 interactive clarification:
> - **Animation Feedback**: Gentle micro-interactions with subtle badge glow, smooth bar width easing, and restrained check transitions, fully honoring `prefers-reduced-motion`.
> - **Reference Book Relationships**: Comprehensive bidirectional drawer with full spine, context, course, and essay connections, matching the existing Context-book inspection experience.
> - **Total Dashboard Hierarchy**: Sequential track cards prioritizing the current active focus lane alongside an overarching university status badge, keeping detailed 100–700 stages exclusively in the Liberal Studies tab.

---

### 1. Overview & Core Concept

The application is a lifelong polymath university curriculum spanning three completely independent tracks:
1. **Languages**: 22 languages structured by genuine genealogical linguistic families (Indo-European branches, Sino-Tibetan, Afroasiatic, Japonic, Koreanic, Austroasiatic) with diagnostic proficiencies integrated directly into the curriculum.
2. **Music**: 76 certification milestones across 9 core musical subjects (Musical Theatre, Classical Singing, Dance, Music Theory, Composition, Music Production, Jazz Piano, Jazz Guitar, Teaching).
3. **Liberal Studies**: 314 Great Books arranged across Stages 100 to 700 (Spine, Context, and Reference works), each anchored by dedicated synthesis essays and deep relational networks.

This targeted refinement ensures:
- Every single Liberal Studies book (including *The Hebrew Bible* as the first independent anchor) has a dedicated, scholarly end-of-reading synthesis essay.
- Subject-only filtering in Music, and genealogical linguistic family/branch filtering in Languages (retiring artificial geographical buckets and redundant standalone reference shelves).
- Clean separation of concerns: stages 100–700 live exclusively in Liberal Studies; Total Dashboard presents an overarching scholar status indicator with 3 sequential track cards.
- Granular intermediate badges and accolades (e.g. 10, 25, 50, 75, 100, 150, 200, 250, 300 books; stepped music and language milestones).
- Complete bidirectional reference and context relationship navigation with gentle, polished micro-animations.

---

### 2. User Experience & Visual Design

#### A. Total Dashboard Reorganization
```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ACADEMIC STATUS BANNER: Stage III Trivium Explorer (42 / 412 Completed)     │
│  [==========================>                     ] 10.2% Total Degree      │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  TRACK 1: LIBERAL STUDIES (Active Focus Lane)                     [Open Tab] │
│  Current Book: Plato, Republic (GB 102 · Stage 100 Spine)                    │
│  Progress: 18 / 314 Books (5.7%) · 3 / 7 Stages Active                       │
│  Next Accolade: Bibliophile Inquirer (25 Books) · 7 books remaining          │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  TRACK 2: MUSIC CERTIFICATIONS                                    [Open Tab] │
│  Current Focus: Music Theory Grade 5 (Theory & Composition)                 │
│  Progress: 12 / 76 Milestones (15.8%) · 9 Active Subjects                    │
│  Next Accolade: Harmonic Apprentice (15 Certifications)                      │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  TRACK 3: LANGUAGES TRACK                                         [Open Tab] │
│  Current Focus: Latin Lingua Latina per se Illustrata (Italic / Romance)     │
│  Progress: 4 / 22 Languages (18.2%) · 6 Linguistic Families                  │
│  Next Accolade: Polyglot Initiate (5 Languages)                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

#### B. Refined Curriculum Filters
- **Music Track**:
  - Filter chips restricted exclusively to subjects: `All`, `Musical Theatre`, `Classical Singing`, `Dance`, `Music Theory`, `Composition`, `Music Production`, `Jazz Piano`, `Jazz Guitar`, `Teaching`.
  - No Stage or Lane chips in the filter area.
  - Standalone Music Reference Shelf removed; reference items are integrated into their respective musical subjects.
- **Languages Track**:
  - Filter chips restricted exclusively to genealogical linguistic families and branches: `All`, `Indo-European (Romance)`, `Indo-European (Germanic)`, `Indo-European (Slavic)`, `Indo-European (Indo-Iranian / Classical)`, `Sino-Tibetan (Sinitic)`, `Afroasiatic (Semitic)`, `Japonic`, `Koreanic`, `Austroasiatic`.
  - Replaces geographical regions ("East Asian", "Western European", etc.).
  - Standalone Language Reference Shelf and separate Advanced Diagnostic Standards section removed; diagnostic tests and learning materials are embedded within their proper linguistic family/stage.
- **Liberal Studies Stages 100–700**:
  - Live exclusively in the Liberal Studies tab with stage headers, progress meters, and book lists.
  - Languages and Music maintain their own internal level/subject groupings without inheriting Liberal Studies 100–700 stages.

#### C. Universal Essay Coverage & Book Relationships
- Every book card in Liberal Studies includes a direct indicator for its synthesis essay.
- *The Hebrew Bible (Tanakh)* has a standalone inaugural synthesis essay on Genesis cosmogony, covenantal ontology (*berit*), and divine justice without prior-book comparisons.
- Subsequent Spine books synthesize cumulatively with preceding works. Context and Reference books focus primarily on the selected text.
- Reference book drawer provides clickable bidirectional links:
  - Supports Spine Book(s)
  - Complements Context Book(s)
  - Associated Stage & Course
  - Dedicated Synthesis Essay Prompt & Rubric

#### D. Purposeful Micro-Animations
- **Checkbox / Completion**: Smooth 180ms scale-in of check icon with gentle stroke fill; instant, satisfying tactile feel.
- **Progress Bars**: Smooth CSS `transition: width 350ms cubic-bezier(0.16, 1, 0.3, 1)`.
- **Badge Unlocks**: Subtle gold/amber halo pulse (`ring-2 ring-amber-400/50 shadow-md`) that settles smoothly without disruptive confetti or screen shakes.
- **Drawer / Modal Transitions**: Fluid opacity and 8px translateY slide (`transition: transform 200ms ease, opacity 200ms ease`).
- **Reduced Motion Support**: Fully queries `@media (prefers-reduced-motion: reduce)` to disable motion transforms and provide instantaneous opacity shifts.

---

### 3. Key Product Decisions & Trade-Offs

| Decision | Chosen Approach | Rationale |
| :--- | :--- | :--- |
| **Complete Essay Coverage** | 314 dedicated synthesis essays mapped 1:1 to every Liberal Studies book. | Satisfies academic rigor and ensures no book is treated as an orphan or secondary read without analytical closure. |
| **Hebrew Bible Essay** | Dedicated foundational essay on covenantal ethics and theodicy (*berit*, Mosaic law, prophetic justice) with zero prior-reading prerequisites. | Respects the biblical canon as the inaugural text of the Western intellectual spine. |
| **Music Taxonomy** | Pure subject-based filter chips (9 subjects). Removed reference shelf. | Aligns with standard conservatory divisions; eliminates artificial reference vs curriculum dichotomy. |
| **Language Taxonomy** | Strict genealogical linguistic classifications (Indo-European branches, Sino-Tibetan, Afroasiatic, etc.). Removed reference shelf & diagnostic sections. | Prevents linguistically unsound geographical grouping; embeds CEFR/HSK diagnostic milestones directly in language courses. |
| **Stage Scoping** | Stages 100–700 restricted to Liberal Studies tab only. | Eliminates cross-track confusion and preserves track independence. |
| **Accolade Granularity** | Stepped thresholds across all tracks (Books: 10, 25, 50, 75, 100, 150, 200, 250, 300; Music: 5, 15, 25, 40, 55, 70; Languages: 2, 5, 8, 12, 16, 20, 22). | Eliminates oversized progress deserts while honoring existing accomplishments without progress loss. |

---

### 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            App.tsx (Global State)                           │
│     completedIds: Record<string, boolean> (localStorage persistence)         │
└───────┬─────────────────────────┬─────────────────────────┬─────────────────┘
        │                         │                         │                  
┌───────▼───────────────┐ ┌───────▼───────────────┐ ┌───────▼────────────────┐
│   DashboardView.tsx   │ │  LiberalArtsView.tsx  │ │   MusicView.tsx        │
│  - Academic Status    │ │  - Stages 100 - 700   │ │  - Subjects-only       │
│  - 3 Sequential Cards │ │  - Full 314 Books     │ │    filters             │
│  - Granular Accolades │ │  - Essay Indicators   │ │  - Integrated Certs    │
└───────────────────────┘ └───────┬───────────────┘ └────────────────────────┘
                                  │                         │                 
                          ┌───────▼───────────────┐ ┌───────▼────────────────┐
                          │   DetailModal.tsx     │ │   LanguageView.tsx     │
                          │  - Bidirectional Links│ │  - Linguistic Family   │
                          │  - Essay Prompts      │ │    & Branch Filters    │
                          │  - Reference Connections│- Integrated Diagnostics│
                          └───────────────────────┘ └────────────────────────┘
```

#### Key Files & Implementation Strategy
1. **`src/data/synthesisEssays.ts`**:
   - Verify and complete dedicated essay assignments for all 314 Liberal Studies books.
   - Ensure `ESSAY-ORIG-018` for *The Hebrew Bible* contains zero prior dependencies and focuses on internal theodicy/covenant.
   - Provide an accessor `getSynthesisEssayForBook(bookId: string)` that accurately resolves for every Spine, Context, and Reference book.
2. **`src/data/contextSpineLinks.ts` & `src/data/bookLinks.ts`**:
   - Ensure bidirectional linking between Reference books and their companion Spine and Context works.
   - Expose helper functions `getRelatedRecordsForReference(bookId: string)` returning supported Spine books, Context books, stages, and courses.
3. **`src/data/curriculumData.ts`**:
   - Update Language items with genuine genealogical `group` and `subgroup` (e.g. `Indo-European (Romance)`, `Indo-European (Germanic)`, `Sino-Tibetan (Sinitic)`, etc.).
   - Integrate former reference and diagnostic items into their proper curricular subjects/families.
4. **`src/components/DashboardView.tsx`**:
   - Restructure to feature the primary academic status badge and 3 sequential track cards (prioritizing the active focus lane).
   - Remove detailed 100–700 stage breakdowns from the Total Dashboard.
   - Update badge/accolade definitions with granular milestones across all three tracks.
5. **`src/components/MusicView.tsx`**:
   - Filter chips limited strictly to `SUBJECT_KEYS`.
   - Remove Stage, Lane, and Reference Shelf filter chips.
   - Remove standalone Reference Shelf section; display all works unified by subject.
6. **`src/components/LanguageView.tsx`**:
   - Filter chips limited strictly to genuine linguistic families/branches.
   - Remove Stage, Lane, and Reference Shelf chips.
   - Remove standalone Language Reference Shelf and Advanced Diagnostic Standards sections; integrate items into language family sequences.
7. **`src/components/LiberalArtsView.tsx`**:
   - Host the canonical 100–700 stage breakdown with progress indicators.
   - Render Reference book relationships and essay status badges on book cards.
8. **`src/components/DetailModal.tsx`**:
   - Complete bidirectional relationship drawer for Reference books (linking to Spine books, Context books, courses, stages, and essays).
   - Include direct interactive essay viewer with word count guidelines and analytical rubrics.
9. **`src/index.css` & Micro-Animations**:
   - Polish smooth transitions for progress bars, checkbox triggers, and badge unlocks with `@media (prefers-reduced-motion)` safety.

---

### 5. Acceptance & Verification Steps

1. **Build & Lint Verification**: `compile_applet` succeeds with 0 errors.
2. **Essay Coverage Audit**: Verify that all 314 books in `REVISED_LIBERAL_WORKS` have an essay resolved by `getSynthesisEssayForBook()`.
3. **Hebrew Bible Verification**: Verify `ESSAY-ORIG-018` has `priorBookIds: []` and book-specific prompt.
4. **Music Filters Check**: Verify only subject chips appear; no reference shelf section exists.
5. **Languages Filters Check**: Verify only linguistic family/branch chips appear; no geographic buckets or reference shelf sections.
6. **Dashboard Hierarchy Check**: Verify primary academic status + 3 sequential cards; confirm 100–700 stages appear only in Liberal Studies tab.
7. **Reference Relationships Check**: Open multiple Reference books and verify bidirectional links to Spine and Context works.
8. **Animation Quality Check**: Test marking items complete and unlocking badges; confirm smooth, non-disruptive feedback.
