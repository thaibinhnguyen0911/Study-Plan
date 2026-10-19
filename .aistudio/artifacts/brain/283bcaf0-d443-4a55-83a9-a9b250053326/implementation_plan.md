# Curriculum Purification, Research-Verified Connections & Content-First Presentation

A comprehensive plan to purify the Liberal Arts curriculum of mechanical drill manuals and applied technical guides, replace them with verifiably accessible primary sources and foundational companions, reconstruct the research-grounded intellectual connection network, and maintain a content-first, editorial-free interface while strictly preserving the protected Music and Language tracks.

## User Review & Critical Decisions

> [!IMPORTANT]
> **Confirmed Decisions from Phase 1 Interactive Clarification:**
> - **Purification Scope**: Target modern formal drill manuals, standardized composition guides, and routine procedural manuals for replacement, while preserving valuable comprehensive reference handbooks and scholarly companions.
> - **Replacement Strategy**: Pair historical primary sources with foundational narrative companions (e.g., Aristotle's *Prior Analytics* + Russell's *Introduction to Mathematical Philosophy* replacing formal logic problem-set manual `forall x: Calgary`; Vico's *New Science* + Collingwood's *The Idea of History* replacing applied oral/digital history trade guides).
> - **Audit Artifact Location**: Deliver the full three-section Purification, Preservation Rationale, and Sanitized Curriculum Report in `docs/curriculum-purification-audit.md`.

---

## 1. Overview & Core Concept

### What It Delivers
1. **Task A: Curriculum Purification & Substantive Replacements**:
   - Audits all 381 works in `REVISED_LIBERAL_WORKS` against the four purge criteria (formal Bourbaki drill manuals, standardized pedagogical workbooks, applied trade/operational manuals, and data errors).
   - Replaces qualifying procedural works (`ORIG-035` formal logic drills, `ORIG-008` & `ORIG-009` applied trade guides, `ORIG-015` & `ORIG-274` mechanical essay writing guides) with world-renowned primary sources and foundational companions (Aristotle, Russell, Vico, Collingwood, Plato, Newman).
   - Every replacement is verifiably accessible online with direct open-access/public-domain URLs and explicit course integration.
2. **Task B: Research-Based Intellectual Connection Network**:
   - Reconstructs and strengthens `BOOK_LINKS` and `src/data/bookConnectionResearch.json` across all surviving and replacement books.
   - Eliminates dangling references, updates bidirectional discovery, and grounds each relationship in primary text citations, chapter references, and documented scholarly debates.
3. **Task C: Content-First Interface & Editorial Cleanup**:
   - Ensures zero editorial commentary, instructional tutorials, or artificial slogans clutter the interface.
   - Presents curriculum records directly with minimal, accurate numerical indicators.
   - Strictly preserves the 76 Music certifications and 22 Language records byte-for-byte in data and behavior.

---

## 2. User Experience & Visual Design

### Editorial Curatorial Atmosphere (Museum & Academic Archive DNA)
- **Content-First Curricular Reading Cadence**:
  - The interface presents authors, canonical titles, course assignments, and verified reading sequences without meta-commentary or tutorial prompts.
  - Zero static pill enclosures on metadata: cleanly formatted inline typography (`Aristotle · Prior Analytics · MAT 205 (Spine)`).
- **Curriculum Relationship Discovery**:
  - `DetailModal` surfaces verified intellectual linkages: `Required Prerequisites`, `Companion Reading`, and `Intellectual Connections`.
  - Relationship notes articulate the exact philosophical debate or conceptual lineage without internal audit tags or process clutter.
- **Reading Queue & Focus Transitions**:
  - "What to Read Now" dynamically recalculates active primary and companion readings based on completed items and prerequisite gates.
  - Complete curriculum views allow seamless filtering by stage (100–700), curricular lane (Spine, Context, Reference), and text type (Primary, Secondary, Anthology, Treatise, Context).

---

## 3. Key Product Decisions & Trade-Offs

### 1. Targeted Purification vs. Indiscriminate Pruning
- **Chosen Approach**: Purge specific applied composition workbooks (`ORIG-015`, `ORIG-274`), technical trade workflows (`ORIG-008`, `ORIG-009`), and formal definition-theorem drill manuals (`ORIG-035`). Retain substantive modern scholarly companions (e.g., Guyer on Kant, Shapin on the Scientific Revolution, Saliba on Arabic science) as protected Category B/C works.
- **Why**: Protects the curriculum from generic procedural instruction while honoring the rule that difficulty, technicality, and specialized scholarship must not be equated with bad pedagogy.

### 2. Paired Replacements with Verifiable Open-Access
- **Chosen Approach**:
  - Replace `ORIG-035` (`forall x: Calgary`) with Aristotle's *Prior Analytics* (MIT Classics / Perseus) and Bertrand Russell's *Introduction to Mathematical Philosophy* (Project Gutenberg / Internet Archive).
  - Replace `ORIG-008` & `ORIG-009` (oral/digital history manuals) with Giambattista Vico's *New Science* (Internet Archive) and R.G. Collingwood's *The Idea of History* (Oxford / Internet Archive).
  - Replace `ORIG-015` (`Philosophical Writing`) with Plato's *Gorgias* (Perseus / Gutenberg).
  - Replace `ORIG-274` (`Writing Philosophy`) with John Henry Newman's *The Idea of a University* (Gutenberg / Newman Institute).
- **Why**: Replaces mechanical homework drills with the greatest foundational reflections on logic, historical knowledge, philosophical inquiry, and liberal learning in human history.

### 3. Dedicated Markdown Audit Report
- **Chosen Approach**: Store the exhaustive 3-section report in `docs/curriculum-purification-audit.md` and machine-readable research evidence in `src/data/bookConnectionResearch.json`.
- **Why**: Keeps the user-facing runtime lightning-fast and distraction-free while offering 100% transparent auditability for scholarly review.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        User Interface Layer                            │
│                                                                        │
│   ┌──────────────────────────┐   ┌──────────────────────────────────┐  │
│   │ Minimal Track Headers    │   │ Staged Curriculum & Focus Queue  │  │
│   │ (Direct Titles & Counts) │   │ (Spine / Context / Reference)    │  │
│   └────────────┬─────────────┘   └────────────────┬─────────────────┘  │
│                │                                  │                    │
│                ▼                                  ▼                    │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │  DetailModal: Verified Relationships & Scholarly Connections   │   │
│   │  (Prerequisites, Canonical Companions, Intellectual Debates)   │   │
│   └──────────────────────────────┬─────────────────────────────────┘   │
└──────────────────────────────────┼─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   Curriculum Data & Graph Model                        │
│                                                                        │
│   ┌──────────────────────────┐   ┌──────────────────────────────────┐  │
│   │  REVISED_LIBERAL_WORKS   │   │            BOOK_LINKS            │  │
│   │  (Purified & Replaced)   │   │   (Audited Intellectual Graph)   │  │
│   └────────────┬─────────────┘   └────────────────┬─────────────────┘  │
│                │                                  │                    │
│                ▼                                  ▼                    │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │ Non-Runtime Scholarly Evidence & Audit Artifacts:              │   │
│   │ 1. src/data/bookConnectionResearch.json (200+ Verified Citations)│  │
│   │ 2. docs/curriculum-purification-audit.md (3-Section Audit Report) │ │
│   └────────────────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────────────────┘
```

### Execution Steps
1. **Curriculum Purification (`src/data/curriculumData.ts`)**:
   - Replace purged drill items (`ORIG-035`, `ORIG-008`, `ORIG-009`, `ORIG-015`, `ORIG-274`) with verified primary and companion works (Aristotle, Russell, Vico, Collingwood, Plato, Newman).
   - Ensure bibliographic accuracy, stable identifiers, and course assignments.
2. **Connection Re-Alignment (`src/data/bookLinks.ts`)**:
   - Reconnect former edges attached to purged works to their substantive replacements.
   - Verify bidirectional discovery and ensure zero dangling references or duplicate reciprocal links.
3. **Research Registry & Audit Artifact Generation**:
   - Update `src/data/bookConnectionResearch.json` with citations for replacement connections.
   - Generate `docs/curriculum-purification-audit.md` containing Section 1 (Purged Items & Rationale), Section 2 (Preserved Items & Scholarly Justification), and Section 3 (Sanitized Curriculum & Online Access URLs).
4. **Interface & Regression Validation**:
   - Verify dynamic metrics across `DashboardView.tsx`, `LiberalArtsView.tsx`, `MusicView.tsx`, `LanguageView.tsx`, and `StatSummaryStrip.tsx`.
   - Run `compile_applet` and `lint_applet` to guarantee error-free compilation and strict preservation of protected tracks.
