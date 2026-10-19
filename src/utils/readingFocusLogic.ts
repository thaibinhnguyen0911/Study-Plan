import { LiberalBook, REVISED_LIBERAL_WORKS } from '../data/curriculumData';
import {
  BOOK_LINKS,
  BookLink,
  getHardPrerequisitesForBook,
  getUnlocksLaterForBook,
  getReadAlongsideForBook,
  getRereadLinksForBook,
  getInformsLinksForBook,
  STAGE_GATES,
  StageGate,
} from '../data/bookLinks';

export interface EnrichedBook {
  id: string;
  sourceId: string;
  title: string;
  author: string;
  course: string;
  courseTitle: string;
  stage: number;
  stageName: string;
  order: number;
  lane: 'spine' | 'context' | 'reference';
  status: 'core' | 'core-pivotal-secondary' | 'context-track' | 'optional' | 'reference' | 'elective';
  tier?: 1 | 2 | 3;
  is_addition: boolean;
  type: 'P' | 'A' | 'C' | 'S' | 'T';
  track?: string;
  paired_with?: string;
}

export interface SynthesisTask {
  id: string;
  type: 'essay' | 'return_seminar';
  stage: number;
  title: string;
  subtitle: string;
  author?: string;
  bookId?: string;
  promptText: string;
  originalStage?: number;
  originalCourse?: string;
}

export interface FocusState {
  currentStage: number;
  stageName: string;
  primary: {
    type: 'book' | 'synthesis';
    book?: EnrichedBook;
    synthesis?: SynthesisTask;
  };
  companion: {
    book: EnrichedBook;
    reasonText: string;
    isCanonical: boolean;
  } | null;
  companionMessage?: string;
  linkedBooks: {
    requiresFirst: { link: BookLink; book: EnrichedBook; isDone: boolean }[];
    readAlongside?: { link: BookLink; book: EnrichedBook };
    informs: { link: BookLink; book: EnrichedBook }[];
    rereadEvents: { link: BookLink; originalStageName?: string; note?: string }[];
    unlocksLater: { link: BookLink; book: EnrichedBook; isDependentDone: boolean }[];
  };
  upNext: EnrichedBook[];
  stageProgress: {
    completed: number;
    total: number;
    percent: number;
  };
  overallSpineProgress: {
    completed: number;
    total: number;
    percent: number;
  };
  stageGateStatus: {
    isLocked: boolean;
    remainingItems: string[];
  };
}

export interface ContextTrack {
  id: string;
  name: string;
  desc: string;
}

export const CONTEXT_TRACKS: ContextTrack[] = [
  { id: 'none', name: 'None (Generalist / Single Track)', desc: 'Focus strictly on the Spine core sequence without parallel sub-tracks.' },
  { id: 'african-diaspora', name: 'African Diaspora & Atlantic History', desc: 'Slavery, trans-Atlantic migrations, and African intellectual history.' },
  { id: 'east-asia', name: 'East Asian & Silk Road History', desc: 'Chinese dynastic transitions, Japanese culture, and Eurasian commerce.' },
  { id: 'environmental', name: 'Global Environmental History', desc: 'Ecological imperialism, resource frontiers, and human-nature relations.' },
  { id: 'science-tech', name: 'History of Science & Technology', desc: 'Scientific revolutions, Islamic transmission, and technological divergence.' },
  { id: 'islamic-near-east', name: 'Islamic & Near Eastern Studies', desc: 'Ottoman, Persianate, and Arab-Islamic historiography and philosophy.' },
  { id: 'latin-america', name: 'Latin American & Indigenous Americas', desc: 'Conquest, colonial societies, and Maya/Aztec/Inca indigenous civilizations.' },
  { id: 'gender-thought', name: 'Gender & Feminist Thought', desc: 'Gender in world history, feminist epistemology, and philosophical anthropology.' },
  { id: 'social-political', name: 'Social & Political Philosophy', desc: 'State formation, theories of justice, and modern institutional critique.' },
];

export const STAGE_SYNTHESIS_TASKS: Record<number, SynthesisTask[]> = {
  100: [
    {
      id: 'SYNTH-100-ESSAY',
      type: 'essay',
      stage: 100,
      title: 'Stage 100 Comparative Synthesis Essay',
      subtitle: 'The Archaic Horizon: Myth, Covenant, and Moral Reflection',
      promptText: 'Synthesize the moral architectures of the Tanakh and the Homeric epics alongside introductory ethical theory.',
    },
  ],
  200: [
    {
      id: 'SYNTH-200-ESSAY',
      type: 'essay',
      stage: 200,
      title: 'Stage 200 Comparative Synthesis Essay',
      subtitle: 'Classical Polities and Philosophical Orders',
      promptText: 'Compare governance, virtue, and cosmos across Hellas, India, and Classical China.',
    },
  ],
  300: [
    {
      id: 'SYNTH-300-ESSAY',
      type: 'essay',
      stage: 300,
      title: 'Stage 300 Comparative Synthesis Essay',
      subtitle: 'Eurasian Integrations: Revelation, Scholasticism, and Imperium',
      promptText: 'Analyze trans-Eurasian trade, scholastic synthesis, and indigenous American polities.',
    },
  ],
  400: [
    {
      id: 'SYNTH-400-ESSAY',
      type: 'essay',
      stage: 400,
      title: 'Stage 400 Comparative Synthesis Essay',
      subtitle: 'The Early Modern Fracture: Method, Sovereignty, and the Global Encounter',
      promptText: 'Examine how scientific empiricism and colonial conquest redefined European sovereignty.',
    },
    {
      id: 'RETURN-1-018',
      type: 'return_seminar',
      stage: 400,
      bookId: 'ORIG-018',
      title: 'Return Seminar I: The Hebrew Bible (Tanakh)',
      subtitle: 'Rereading covenant and law through Spinoza and early modern critique',
      author: 'Traditional',
      originalStage: 100,
      originalCourse: 'GB 101',
      promptText: 'Re-examine biblical narrative, sovereignty, and theological-political authority from an early modern perspective.',
    },
    {
      id: 'RETURN-1-037',
      type: 'return_seminar',
      stage: 400,
      bookId: 'ORIG-037',
      title: 'Return Seminar I: Analects of Confucius',
      subtitle: 'Rereading ritual order (li) and virtue against Machiavelli & Hobbes',
      author: 'Confucius',
      originalStage: 200,
      originalCourse: 'PHI 206',
      promptText: 'Re-evaluate Ruist political harmony and ethical cultivation against early modern Realpolitik and state contractarianism.',
    },
    {
      id: 'RETURN-1-027',
      type: 'return_seminar',
      stage: 400,
      bookId: 'ORIG-027',
      title: "Return Seminar I: Plato's Republic",
      subtitle: 'Rereading justice and the philosopher-king against modern political economy',
      author: 'Plato',
      originalStage: 200,
      originalCourse: 'PHI 203',
      promptText: 'Revisit the Kallipolis and the allegory of the cave in dialogue with commercial civil society and the social contract.',
    },
  ],
  500: [
    {
      id: 'SYNTH-500-ESSAY',
      type: 'essay',
      stage: 500,
      title: 'Stage 500 Comparative Synthesis Essay',
      subtitle: 'Dialectics of Modernity: Capital, Evolution, and Consciousness',
      promptText: 'Interrogate industrialization, dialectical historicism, and the crisis of metaphysical value.',
    },
    {
      id: 'RETURN-2-020',
      type: 'return_seminar',
      stage: 500,
      bookId: 'ORIG-020',
      title: 'Return Seminar II: Homer’s Iliad',
      subtitle: 'Rereading heroic mortality through 19th-century tragedy and historicism',
      author: 'Homer',
      originalStage: 100,
      originalCourse: 'GB 101',
      promptText: 'Reread Achilles’ wrath and the tragic heroic code in light of modern alienation, national epics, and Nietzschean critique.',
    },
    {
      id: 'RETURN-2-029',
      type: 'return_seminar',
      stage: 500,
      bookId: 'ORIG-029',
      title: "Return Seminar II: Aristotle's Nicomachean Ethics",
      subtitle: 'Rereading eudaimonia against Kantian deontology and utilitarianism',
      author: 'Aristotle',
      originalStage: 200,
      originalCourse: 'PHI 203',
      promptText: 'Assess classical teleological virtue ethics in the context of modern industrial utility, rights, and autonomy.',
    },
    {
      id: 'RETURN-2-057',
      type: 'return_seminar',
      stage: 500,
      bookId: 'ORIG-060',
      title: "Return Seminar II: Dante's Inferno (Divine Comedy)",
      subtitle: 'Rereading cosmic moral hierarchy against Faustian modernity',
      author: 'Dante',
      originalStage: 300,
      originalCourse: 'PHI 302',
      promptText: 'Re-evaluate medieval divine justice and moral categorization against Goethe’s Faust and modern psychological guilt.',
    },
  ],
  600: [
    {
      id: 'SYNTH-600-ESSAY',
      type: 'essay',
      stage: 600,
      title: 'Stage 600 Comparative Synthesis Essay',
      subtitle: 'The Crisis of the European Sciences and the Postcolonial Horizon',
      promptText: 'Evaluate total war, totalitarianism, decolonization, and structural critique in the 20th century.',
    },
    {
      id: 'RETURN-3-056',
      type: 'return_seminar',
      stage: 600,
      bookId: 'ORIG-056',
      title: "Return Seminar III: Augustine's Confessions",
      subtitle: 'Rereading introspection, memory, and grace against psychoanalysis',
      author: 'Augustine',
      originalStage: 300,
      originalCourse: 'PHI 302',
      promptText: 'Revisit Augustinian internal temporality, desire, and sin through Freudian, phenomenological, and existential frameworks.',
    },
    {
      id: 'RETURN-3-117',
      type: 'return_seminar',
      stage: 600,
      bookId: 'ORIG-117',
      title: "Return Seminar III: Shakespeare's King Lear",
      subtitle: 'Rereading nihilism, blindness, and sovereign collapse after Auschwitz',
      author: 'Shakespeare',
      originalStage: 400,
      originalCourse: 'LIT 405',
      promptText: 'Examine Lear’s tragedy through mid-twentieth-century absurdity, existential anguish, and political catastrophe.',
    },
    {
      id: 'RETURN-3-144',
      type: 'return_seminar',
      stage: 600,
      bookId: 'ORIG-144',
      title: "Return Seminar III: The Brothers Karamazov",
      subtitle: 'Rereading the Grand Inquisitor through modern totalitarian trauma',
      author: 'Dostoevsky',
      originalStage: 500,
      originalCourse: 'LIT 503',
      promptText: 'Revisit Ivan’s rebellion and the Grand Inquisitor in dialogue with twentieth-century ideology and existential faith.',
    },
  ],
};

export function buildEnrichedCurriculum(): EnrichedBook[] {
  const courseCounts: Record<string, number> = {};

  return REVISED_LIBERAL_WORKS.map(book => {
    courseCounts[book.courseCode] = (courseCounts[book.courseCode] || 0) + 1;
    const courseOrder = courseCounts[book.courseCode];

    const rawLane = String(book.lane || '').toLowerCase();
    const lane: 'spine' | 'context' | 'reference' =
      rawLane === 'spine' ? 'spine' : rawLane === 'reference' ? 'reference' : 'context';

    const isReference =
      lane === 'reference' ||
      book.type === 'C' ||
      book.id === 'ORIG-008' ||
      book.id === 'ORIG-009' ||
      book.title.includes('Companion') ||
      book.title.includes('Handbook');

    let status: EnrichedBook['status'] = 'context-track';
    if (isReference) {
      status = 'reference';
    } else if (lane === 'spine') {
      if (book.type === 'S') {
        status = 'core-pivotal-secondary';
      } else {
        status = 'core';
      }
    } else if (
      book.id === 'ORIG-158' ||
      book.id === 'ORIG-160' ||
      book.id === 'ORIG-176' ||
      book.id === 'ORIG-198' ||
      book.id === 'ORIG-222'
    ) {
      status = 'optional';
    } else if (book.courseCode === 'PHI 708' || book.courseCode === 'PHI 711' || book.id === 'ORIG-195') {
      status = 'elective';
    } else if (book.tier === 3) {
      status = 'optional';
    }

    let track: string | undefined;
    if (book.courseCode === 'HIS 308' || book.courseCode === 'HIS 408' || book.courseCode === 'HIS 509') {
      track = 'african-diaspora';
    } else if (book.courseCode === 'HIS 208' || book.courseCode === 'HIS 306' || book.courseCode === 'HIS 307' || book.courseCode === 'HIS 508') {
      track = 'east-asia';
    } else if (book.courseCode === 'HIS 507') {
      track = 'environmental';
    } else if (book.courseCode === 'SCI 401' || book.courseCode === 'HIS 506') {
      track = 'science-tech';
    } else if (book.courseCode === 'HIS 201' || book.courseCode === 'HIS 305') {
      track = 'islamic-near-east';
    } else if (book.courseCode === 'HUM 309' || book.courseCode === 'HIS 407') {
      track = 'latin-america';
    } else if (book.courseCode === 'HIS 504' || book.courseCode === 'PHI 709') {
      track = 'gender-thought';
    } else if (book.courseCode === 'POL 404' || book.courseCode === 'HIS 403' || book.courseCode === 'PHI 707') {
      track = 'social-political';
    }

    let paired_with: string | undefined;
    if (book.id === 'ORIG-124') {
      paired_with = 'ORIG-123';
    } else if (book.id === 'ORIG-099') {
      paired_with = 'ORIG-098';
    } else if (book.id === 'ORIG-154' || book.id === 'ORIG-155') {
      paired_with = 'ORIG-114';
    }

    return {
      id: book.id,
      sourceId: book.sourceId,
      title: book.title,
      author: book.author,
      course: book.courseCode,
      courseTitle: book.courseTitle,
      stage: book.stage,
      stageName: book.stageName,
      order: courseOrder,
      lane: isReference ? 'reference' : lane,
      status,
      tier: book.tier as (1 | 2 | 3 | undefined),
      is_addition: Boolean(book.isAddition),
      type: book.type,
      track,
      paired_with,
    };
  });
}

export const ENRICHED_LIBERAL_WORKS = buildEnrichedCurriculum();

export function checkBookLockStatus(
  bookId: string,
  isCompleted: (id: string) => boolean,
  completedStages: number[]
): { isLocked: boolean; missingPrereqs: { id: string; title: string; note?: string }[] } {
  const prereqLinks = getHardPrerequisitesForBook(bookId);
  const missingPrereqs: { id: string; title: string; note?: string }[] = [];

  for (const link of prereqLinks) {
    if (!isCompleted(link.from_book)) {
      const pBook = ENRICHED_LIBERAL_WORKS.find(b => b.id === link.from_book);
      missingPrereqs.push({
        id: link.from_book,
        title: pBook ? pBook.title : link.from_book,
        note: link.note,
      });
    }
  }

  if (bookId === 'ORIG-262') {
    const pol404Books = ENRICHED_LIBERAL_WORKS.filter(b => b.course === 'POL 404' && b.lane === 'spine');
    const pol404Done = pol404Books.every(b => isCompleted(b.id));
    if (!pol404Done) {
      missingPrereqs.push({
        id: 'POL 404',
        title: 'POL 404: Politics and Political Economy (All Spine)',
        note: 'Complete POL 404 foundation required for Rawls A Theory of Justice',
      });
    }
  }

  return {
    isLocked: missingPrereqs.length > 0,
    missingPrereqs,
  };
}

export function computeWhatToReadNow(
  isCompleted: (id: string) => boolean,
  selectedTrack: string = 'none',
  optInTier3: boolean = false
): FocusState {
  const books = ENRICHED_LIBERAL_WORKS;

  const spineQueue = books.filter(b => {
    if (b.lane !== 'spine') return false;
    if (b.status === 'reference') return false;
    if (b.status === 'elective') return false;
    if (b.status === 'optional') return false;
    if (b.tier === 3 && !optInTier3) return false;
    if (b.id === 'ORIG-008' || b.id === 'ORIG-009') return false;
    return true;
  });

  const completedSpineBooks = spineQueue.filter(b => isCompleted(b.id));
  const overallSpinePercent = Math.round((completedSpineBooks.length / Math.max(1, spineQueue.length)) * 100);

  const stages = [100, 200, 300, 400, 500, 600, 700];

  let currentStage = 100;
  let primaryBook: EnrichedBook | undefined;
  let activeSynthesisTask: SynthesisTask | undefined;
  const completedStagesList: number[] = [];

  for (const stg of stages) {
    const stageSpine = spineQueue.filter(b => b.stage === stg);
    const unfinishedInStage = stageSpine.filter(b => !isCompleted(b.id));

    if (unfinishedInStage.length > 0) {
      currentStage = stg;

      primaryBook = unfinishedInStage[0];
      break;
    }

    const stageTasks = STAGE_SYNTHESIS_TASKS[stg] || [];
    const unfinishedTask = stageTasks.find(t => !isCompleted(t.id));

    if (unfinishedTask) {
      currentStage = stg;
      activeSynthesisTask = unfinishedTask;
      break;
    }

    if (stg === 400) {
      const humeDone = isCompleted('N58'); // Hume Enquiry
      const newtonDone = isCompleted('ORIG-098'); // Newton Principia
      if (!humeDone || !newtonDone) {
        currentStage = 400;
        break;
      }
    }

    completedStagesList.push(stg);
    currentStage = stg;
  }

  const stageSpineAll = spineQueue.filter(b => b.stage === currentStage);
  const stageSpineDone = stageSpineAll.filter(b => isCompleted(b.id));
  const stagePercent = Math.round((stageSpineDone.length / Math.max(1, stageSpineAll.length)) * 100);

  const stageName =
    currentStage === 100 ? 'Opening and Orientation' :
    currentStage === 200 ? 'Antiquity and Classical Worlds' :
    currentStage === 300 ? 'Medieval and Early Worlds' :
    currentStage === 400 ? 'Early Modern' :
    currentStage === 500 ? 'The Long Nineteenth Century' :
    currentStage === 600 ? 'The Twentieth Century and Critique' :
    'The Return and Advanced Specialization';

  const nextStageNum = stages.find(s => s > currentStage) || currentStage;
  const gateDef = STAGE_GATES[nextStageNum];
  const remainingGateItems: string[] = [];
  if (gateDef) {
    for (const reqStage of gateDef.requiredStages) {
      const unfinishedReq = spineQueue.filter(b => b.stage === reqStage && !isCompleted(b.id));
      if (unfinishedReq.length > 0) {
        remainingGateItems.push(`Stage ${reqStage}: ${unfinishedReq.length} spine books remaining`);
      }
      const unfinishedSynth = (STAGE_SYNTHESIS_TASKS[reqStage] || []).filter(t => !isCompleted(t.id));
      if (unfinishedSynth.length > 0) {
        remainingGateItems.push(`Stage ${reqStage}: ${unfinishedSynth.map(t => t.title).join(', ')}`);
      }
    }
  }

  let companion: FocusState['companion'] = null;
  let companionMessage: string | undefined;

  if (primaryBook) {

    const canonicalLink = getReadAlongsideForBook(primaryBook.id);
    if (canonicalLink) {
      const companionBook = books.find(b => b.id === canonicalLink.to_book);

      if (companionBook && companionBook.lane !== 'reference' && companionBook.status !== 'reference') {
        companion = {
          book: companionBook,
          reasonText: canonicalLink.note || `Canonical companion for ${primaryBook.title}`,
          isCanonical: true,
        };
      }
    }

    if (!companion) {
      const sameCourseContext = books.find(b => {
        if (b.course !== primaryBook!.course) return false;
        if (b.lane !== 'context') return false;
        if (b.status === 'reference') return false;
        if (b.status === 'elective') return false;
        if (b.id === primaryBook!.id) return false;
        return !isCompleted(b.id);
      });

      if (sameCourseContext) {
        companion = {
          book: sameCourseContext,
          reasonText: `Context monograph from the same course (${primaryBook.course})`,
          isCanonical: false,
        };
      }
    }

    if (!companion && selectedTrack && selectedTrack !== 'none') {
      const trackBook = books.find(b => {
        if (b.track !== selectedTrack) return false;
        if (b.stage !== currentStage) return false;
        if (b.lane !== 'context') return false;
        if (b.status === 'reference') return false;
        if (b.status === 'elective') return false;
        return !isCompleted(b.id);
      });

      if (trackBook) {
        const trackObj = CONTEXT_TRACKS.find(t => t.id === selectedTrack);
        companion = {
          book: trackBook,
          reasonText: `Aligned monograph from your ${trackObj ? trackObj.name : selectedTrack} track (Stage ${currentStage})`,
          isCanonical: false,
        };
      }
    }

    if (!companion) {
      const tier3SameCourse = books.find(b => {
        if (b.course !== primaryBook!.course) return false;
        if (b.tier !== 3) return false;
        if (b.lane === 'reference' || b.status === 'reference') return false;
        return !isCompleted(b.id);
      });

      if (tier3SameCourse) {
        companion = {
          book: tier3SameCourse,
          reasonText: `Optional Tier 3 reading for course ${primaryBook.course}`,
          isCanonical: false,
        };
      }
    }

    if (!companion) {
      companionMessage = 'No companion recommended. Read this one straight through.';
    }
  }

  const linkedBooks: FocusState['linkedBooks'] = {
    requiresFirst: [],
    informs: [],
    rereadEvents: [],
    unlocksLater: [],
  };

  const focusBookId = primaryBook ? primaryBook.id : (activeSynthesisTask?.bookId || '');

  if (focusBookId) {

    const prereqLinks = getHardPrerequisitesForBook(focusBookId);
    linkedBooks.requiresFirst = prereqLinks.map(link => {
      const pBook = books.find(b => b.id === link.from_book) || {
        id: link.from_book,
        sourceId: '',
        title: link.from_book,
        author: '',
        course: '',
        courseTitle: '',
        stage: 100,
        stageName: '',
        order: 1,
        lane: 'spine' as const,
        status: 'core' as const,
        is_addition: false,
        type: 'P' as const,
      };
      return {
        link,
        book: pBook,
        isDone: isCompleted(link.from_book),
      };
    });

    if (companion) {
      const matchLink = getReadAlongsideForBook(focusBookId);
      linkedBooks.readAlongside = {
        link: matchLink || {
          from_book: focusBookId,
          to_book: companion.book.id,
          link_type: 'READ_ALONGSIDE',
          note: companion.reasonText,
        },
        book: companion.book,
      };
    }

    const informsLinks = getInformsLinksForBook(focusBookId);
    linkedBooks.informs = informsLinks.map(link => {
      const otherId = link.from_book === focusBookId ? link.to_book : link.from_book;
      const otherBook = books.find(b => b.id === otherId) || {
        id: otherId,
        sourceId: '',
        title: otherId,
        author: '',
        course: '',
        courseTitle: '',
        stage: 100,
        stageName: '',
        order: 1,
        lane: 'spine' as const,
        status: 'core' as const,
        is_addition: false,
        type: 'P' as const,
      };
      return {
        link,
        book: otherBook,
      };
    });

    const rereadLinks = getRereadLinksForBook(focusBookId);
    linkedBooks.rereadEvents = rereadLinks.map(link => ({
      link,
      note: link.note,
    }));

    const unlocksLinks = getUnlocksLaterForBook(focusBookId);
    linkedBooks.unlocksLater = unlocksLinks.map(link => {
      const depBook = books.find(b => b.id === link.to_book) || {
        id: link.to_book,
        sourceId: '',
        title: link.to_book,
        author: '',
        course: '',
        courseTitle: '',
        stage: 100,
        stageName: '',
        order: 1,
        lane: 'spine' as const,
        status: 'core' as const,
        is_addition: false,
        type: 'P' as const,
      };
      return {
        link,
        book: depBook,
        isDependentDone: isCompleted(link.to_book),
      };
    });
  }

  let upNext: EnrichedBook[] = [];
  if (primaryBook) {
    const currentIdx = spineQueue.findIndex(b => b.id === primaryBook!.id);
    if (currentIdx !== -1) {
      upNext = spineQueue.slice(currentIdx + 1, currentIdx + 3);
    }
  }

  return {
    currentStage,
    stageName,
    primary: activeSynthesisTask
      ? { type: 'synthesis', synthesis: activeSynthesisTask }
      : { type: 'book', book: primaryBook || spineQueue[0] },
    companion,
    companionMessage,
    linkedBooks,
    upNext,
    stageProgress: {
      completed: stageSpineDone.length,
      total: stageSpineAll.length,
      percent: stagePercent,
    },
    overallSpineProgress: {
      completed: completedSpineBooks.length,
      total: spineQueue.length,
      percent: overallSpinePercent,
    },
    stageGateStatus: {
      isLocked: remainingGateItems.length > 0,
      remainingItems: remainingGateItems,
    },
  };
}

export function getAvailableNotRequiredBooks(): EnrichedBook[] {
  return ENRICHED_LIBERAL_WORKS.filter(b => {
    if (b.lane === 'reference' || b.status === 'reference') return false;
    return b.status === 'optional' || b.status === 'elective' || b.tier === 3;
  });
}

export function getReferenceShelfBooks(): EnrichedBook[] {
  return ENRICHED_LIBERAL_WORKS.filter(b => b.lane === 'reference' || b.status === 'reference' || b.type === 'C');
}

export function getContextLaneBooks(): EnrichedBook[] {
  return ENRICHED_LIBERAL_WORKS.filter(b => b.lane === 'context' && b.status !== 'reference' && b.status !== 'elective');
}
