export interface LangItem {
  date: string;
  exam: string;
  hours: number;
  lang: string;
  group: string;
  subgroup: string;
}

export interface MusicItem {
  exam: string;
  hours: number;
  subject: string;
  date?: string;
}

export interface LiberalItem {
  num: number;
  course_code: string;
  course_title: string;
  level: number;
  book_title: string;
  author: string;
  id: string;
  type: 'P' | 'S' | 'T' | 'A' | 'C' | string;
}

export interface CourseItem {
  code: string;
  name: string;
  start: number;
  end: number;
}

export interface LevelItem {
  name: string;
  desc: string;
  color: string;
}

export const BOOK_TYPE_MAP: Record<string, { label: string; desc: string; badge: string }> = {
  P: { label: 'Primary Source', desc: 'Original foundational text or literary work', badge: 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/40' },
  S: { label: 'Secondary Monograph', desc: 'Scholarly historical or thematic study', badge: 'bg-sky-50 text-sky-800 dark:bg-sky-950/50 dark:text-sky-300 border-sky-200 dark:border-sky-800/40' },
  T: { label: 'Textbook / Survey', desc: 'Systematic discipline overview or methodology manual', badge: 'bg-amber-50 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300 border-amber-200 dark:border-amber-800/40' },
  A: { label: 'Anthology / Sourcebook', desc: 'Curated collection of philosophical or historical readings', badge: 'bg-purple-50 text-purple-800 dark:bg-purple-950/50 dark:text-purple-300 border-purple-200 dark:border-purple-800/40' },
  C: { label: 'Companion / Handbook', desc: 'Authoritative Cambridge/Oxford reference handbook', badge: 'bg-rose-50 text-rose-800 dark:bg-rose-950/50 dark:text-rose-300 border-rose-200 dark:border-rose-800/40' },
};

export const LANG: LangItem[] = [
  {
    "date": "12/11/2027",
    "exam": "Mandarin Chinese — HSK 7–9 Examination",
    "hours": 800,
    "lang": "Mandarin Chinese",
    "group": "Sino-Tibetan",
    "subgroup": "Sinitic"
  },
  {
    "date": "05/10/2028",
    "exam": "Japanese — JLPT N1 + ACTFL OPI & WPT",
    "hours": 760,
    "lang": "Japanese",
    "group": "Japonic",
    "subgroup": "Japonic"
  },
  {
    "date": "10/09/2029",
    "exam": "Korean — TOPIK II, Level 6",
    "hours": 720,
    "lang": "Korean",
    "group": "Koreanic",
    "subgroup": "Koreanic"
  },
  {
    "date": "09/03/2030",
    "exam": "French — DALF C2",
    "hours": 500,
    "lang": "French",
    "group": "Indo-European",
    "subgroup": "Romance"
  },
  {
    "date": "29/12/2030",
    "exam": "German — Goethe-Zertifikat C2 (GDS)",
    "hours": 550,
    "lang": "German",
    "group": "Indo-European",
    "subgroup": "Germanic"
  },
  {
    "date": "04/11/2031",
    "exam": "Cantonese — ACTFL C2",
    "hours": 432,
    "lang": "Cantonese",
    "group": "Sino-Tibetan",
    "subgroup": "Sinitic"
  },
  {
    "date": "22/12/2031",
    "exam": "Dutch — ACTFL C2",
    "hours": 256,
    "lang": "Dutch",
    "group": "Indo-European",
    "subgroup": "Germanic"
  },
  {
    "date": "28/12/2032",
    "exam": "Italian — CELI 5 / ACTFL C2",
    "hours": 300,
    "lang": "Italian",
    "group": "Indo-European",
    "subgroup": "Romance"
  },
  {
    "date": "04/07/2033",
    "exam": "Romanian — ILR Atestarea C2",
    "hours": 400,
    "lang": "Romanian",
    "group": "Indo-European",
    "subgroup": "Romance"
  },
  {
    "date": "10/07/2035",
    "exam": "Russian — TORFL-IV",
    "hours": 660,
    "lang": "Russian",
    "group": "Indo-European",
    "subgroup": "Slavic"
  },
  {
    "date": "23/02/2037",
    "exam": "MSA Arabic — ACTFL C2",
    "hours": 950,
    "lang": "MSA Arabic",
    "group": "Afroasiatic",
    "subgroup": "Semitic"
  },
  {
    "date": "04/10/2036",
    "exam": "Indonesian — UKBI Adaptif C2",
    "hours": 323,
    "lang": "Indonesian",
    "group": "Austronesian",
    "subgroup": "Malayo-Polynesian"
  },
  {
    "date": "12/06/2038",
    "exam": "Hebrew — ACTFL C2",
    "hours": 440,
    "lang": "Hebrew",
    "group": "Afroasiatic",
    "subgroup": "Semitic"
  },
  {
    "date": "17/05/2038",
    "exam": "Swedish — ACTFL C2",
    "hours": 320,
    "lang": "Swedish",
    "group": "Indo-European",
    "subgroup": "Germanic"
  },
  {
    "date": "19/03/2040",
    "exam": "Persian Farsi — ACTFL C2",
    "hours": 480,
    "lang": "Persian Farsi",
    "group": "Indo-European",
    "subgroup": "Indo-Iranian"
  },
  {
    "date": "21/05/2039",
    "exam": "Spanish — DELE C2",
    "hours": 245,
    "lang": "Spanish",
    "group": "Indo-European",
    "subgroup": "Romance"
  },
  {
    "date": "11/10/2040",
    "exam": "Polish — ACTFL C2",
    "hours": 364,
    "lang": "Polish",
    "group": "Indo-European",
    "subgroup": "Slavic"
  },
  {
    "date": "05/07/2041",
    "exam": "Urdu — ACTFL C2",
    "hours": 338,
    "lang": "Urdu",
    "group": "Indo-European",
    "subgroup": "Indo-Iranian"
  },
  {
    "date": "30/07/2041",
    "exam": "European Portuguese — ACTFL C2",
    "hours": 208,
    "lang": "European Portuguese",
    "group": "Indo-European",
    "subgroup": "Romance"
  },
  {
    "date": "15/05/2042",
    "exam": "Hindi — ACTFL C2",
    "hours": 224,
    "lang": "Hindi",
    "group": "Indo-European",
    "subgroup": "Indo-Iranian"
  },
  {
    "date": "21/04/2043",
    "exam": "Turkish — Ankara TÖMER C1",
    "hours": 450,
    "lang": "Turkish",
    "group": "Turkic",
    "subgroup": "Oghuz"
  },
  {
    "date": "19/01/2045",
    "exam": "Uzbek — UzPro C2",
    "hours": 700,
    "lang": "Uzbek",
    "group": "Turkic",
    "subgroup": "Karluk"
  },
  {
    "date": "24/05/2045",
    "exam": "Greek — ACTFL C2",
    "hours": 546,
    "lang": "Greek",
    "group": "Indo-European",
    "subgroup": "Hellenic"
  },
  {
    "date": "26/04/2046",
    "exam": "Albanian — ACTFL C2",
    "hours": 570,
    "lang": "Albanian",

];

export const LIBERAL: LiberalItem[] = [
  {"num": 1, "course_code": "HIS 101", "course_title": "Global History Frameworks", "level": 100, "book_title": "The Human Web", "author": "McNeill & McNeill", "id": "H101.1", "type": "S"},
  {"num": 2, "course_code": "HIS 101", "course_title": "Global History Frameworks", "level": 100, "book_title": "Before European Hegemony", "author": "Abu-Lughod", "id": "H101.2", "type": "S"},
  {"num": 3, "course_code": "HIS 101", "course_title": "Global History Frameworks", "level": 100, "book_title": "Empires in World History", "author": "Burbank & Cooper", "id": "H101.4", "type": "S"},
  {"num": 4, "course_code": "HIS 102", "course_title": "The Historian's Craft", "level": 100, "book_title": "The Historian's Craft", "author": "Bloch", "id": "H102.1", "type": "P"},
  {"num": 5, "course_code": "HIS 102", "course_title": "The Historian's Craft", "level": 100, "book_title": "The Cheese and the Worms", "author": "Ginzburg", "id": "H102.3", "type": "S"},
  {"num": 6, "course_code": "HIS 102", "course_title": "The Historian's Craft", "level": 100, "book_title": "The Footnote", "author": "Grafton", "id": "H102.5", "type": "S"},
  {"num": 7, "course_code": "HIS 102", "course_title": "The Historian's Craft", "level": 100, "book_title": "Silencing the Past", "author": "Trouillot", "id": "H102.2", "type": "S"},
  {"num": 8, "course_code": "HIS 102", "course_title": "The Historian's Craft", "level": 100, "book_title": "Doing Oral History", "author": "Ritchie", "id": "H102.6", "type": "T"},
  {"num": 9, "course_code": "HIS 102", "course_title": "The Historian's Craft", "level": 100, "book_title": "Digital History", "author": "Cohen & Rosenzweig", "id": "H102.4", "type": "T"},
  {"num": 10, "course_code": "PHI 101", "course_title": "Introduction to Philosophy", "level": 100, "book_title": "ed., Philosophy 1", "author": "Grayling", "id": "P101.1", "type": "T"},
  {"num": 11, "course_code": "PHI 101", "course_title": "Introduction to Philosophy", "level": 100, "book_title": "ed., Philosophy 2", "author": "Grayling", "id": "P101.2", "type": "T"},
  {"num": 12, "course_code": "PHI 101", "course_title": "Introduction to Philosophy", "level": 100, "book_title": "Bratman & Fischer, eds., Introduction to Philosophy", "author": "Perry", "id": "P101.3", "type": "A"},
  {"num": 13, "course_code": "PHI 102", "course_title": "Ethics and Philosophical Writing", "level": 100, "book_title": "The Fundamentals of Ethics", "author": "Shafer-Landau", "id": "P102.1", "type": "T"},
  {"num": 14, "course_code": "PHI 102", "course_title": "Ethics and Philosophical Writing", "level": 100, "book_title": "ed., Ethical Theory: An Anthology", "author": "Shafer-Landau", "id": "P102.2", "type": "A"},
  {"num": 15, "course_code": "PHI 102", "course_title": "Ethics and Philosophical Writing", "level": 100, "book_title": "Philosophical Writing", "author": "Martinich", "id": "P103.1", "type": "T"},
  {"num": 16, "course_code": "HIS 201", "course_title": "Near East and Hebrew Bible", "level": 200, "book_title": "A History of Ancient Egypt", "author": "Van De Mieroop", "id": "H104.1", "type": "T"},
  {"num": 17, "course_code": "HIS 201", "course_title": "Near East and Hebrew Bible", "level": 200, "book_title": "A History of the Ancient Near East", "author": "Van De Mieroop", "id": "H104.2", "type": "T"},
  {"num": 18, "course_code": "HIS 201", "course_title": "Near East and Hebrew Bible", "level": 200, "book_title": "The Hebrew Bible (Tanakh)", "author": "", "id": "N06", "type": "P"},
  {"num": 19, "course_code": "HUM 202", "course_title": "The Greek World", "level": 200, "book_title": "Ancient Greece", "author": "Pomeroy et al.", "id": "H201.5", "type": "T"},
  {"num": 20, "course_code": "HUM 202", "course_title": "The Greek World", "level": 200, "book_title": "Iliad", "author": "Homer", "id": "N01", "type": "P"},
  {"num": 21, "course_code": "HUM 202", "course_title": "The Greek World", "level": 200, "book_title": "Odyssey", "author": "Homer", "id": "N02", "type": "P"},
  {"num": 22, "course_code": "HUM 202", "course_title": "The Greek World", "level": 200, "book_title": "Histories", "author": "Herodotus", "id": "N03", "type": "P"},
  {"num": 23, "course_code": "HUM 202", "course_title": "The Greek World", "level": 200, "book_title": "The Theban Plays", "author": "Sophocles", "id": "N04", "type": "P"},
  {"num": 24, "course_code": "HUM 202", "course_title": "The Greek World", "level": 200, "book_title": "History of the Peloponnesian War", "author": "Thucydides", "id": "H103.6", "type": "P"},
  {"num": 25, "course_code": "PHI 203", "course_title": "Plato and Aristotle", "level": 200, "book_title": "Ancient Philosophy", "author": "Kenny", "id": "P202.1", "type": "S"},
  {"num": 26, "course_code": "PHI 203", "course_title": "Plato and Aristotle", "level": 200, "book_title": "Curd & Reeve, eds., Readings in Ancient Greek Philosophy", "author": "Cohen", "id": "P202.2", "type": "A"},
  {"num": 27, "course_code": "PHI 203", "course_title": "Plato and Aristotle", "level": 200, "book_title": "ed., Plato: Complete Works", "author": "Cooper", "id": "P203.2", "type": "P"},
  {"num": 28, "course_code": "PHI 203", "course_title": "Plato and Aristotle", "level": 200, "book_title": "ed., The Cambridge Companion to Plato", "author": "Kraut", "id": "P203.1", "type": "C"},
  {"num": 29, "course_code": "PHI 203", "course_title": "Plato and Aristotle", "level": 200, "book_title": "ed., The Complete Works of Aristotle", "author": "Barnes", "id": "P204.2", "type": "P"},
  {"num": 30, "course_code": "PHI 203", "course_title": "Plato and Aristotle", "level": 200, "book_title": "ed., The Cambridge Companion to Aristotle", "author": "Barnes", "id": "P204.1", "type": "C"},
  {"num": 31, "course_code": "HUM 204", "course_title": "The Roman World", "level": 200, "book_title": "The Romans", "author": "Boatwright et al.", "id": "H201.4", "type": "T"},
  {"num": 32, "course_code": "HUM 204", "course_title": "The Roman World", "level": 200, "book_title": "Aeneid", "author": "Virgil", "id": "N07", "type": "P"},
  {"num": 33, "course_code": "HUM 204", "course_title": "The Roman World", "level": 200, "book_title": "The New Testament", "author": "", "id": "N12", "type": "P"},
  {"num": 34, "course_code": "MAT 205", "course_title": "Euclid and Formal Logic", "level": 200, "book_title": "Elements", "author": "Euclid", "id": "N05", "type": "P"},
  {"num": 35, "course_code": "MAT 205", "course_title": "Euclid and Formal Logic", "level": 200, "book_title": "Button, Loftis, Thomas-Bolduc & Zach, forall x: Calgary", "author": "Magnus", "id": "P201.1", "type": "T"},
  {"num": 36, "course_code": "PHI 206", "course_title": "Classical Asian Philosophy", "level": 200, "book_title": "ed., Classics of Asian Philosophy", "author": "Kupperman", "id": "P205.2", "type": "A"},
  {"num": 37, "course_code": "PHI 206", "course_title": "Classical Asian Philosophy", "level": 200, "book_title": "Analects, tr. Slingerland", "author": "Confucius", "id": "P205.1", "type": "P"},
  {"num": 38, "course_code": "PHI 206", "course_title": "Classical Asian Philosophy", "level": 200, "book_title": "eds., Readings in Classical Chinese Philosophy", "author": "Ivanhoe & Van Norden", "id": "P205.3", "type": "A"},
  {"num": 39, "course_code": "PHI 206", "course_title": "Classical Asian Philosophy", "level": 200, "book_title": "tr. Olivelle", "author": "The Bhagavad Gita", "id": "P206.1", "type": "P"},
  {"num": 40, "course_code": "PHI 206", "course_title": "Classical Asian Philosophy", "level": 200, "book_title": "ed., The Oxford Handbook of Indian Philosophy", "author": "Ganeri", "id": "P206.3", "type": "C"},
  {"num": 41, "course_code": "PHI 206", "course_title": "Classical Asian Philosophy", "level": 200, "book_title": "eds., The Oxford Handbook of World Philosophy", "author": "Garfield & Edelglass", "id": "P206.2", "type": "C"},
  {"num": 42, "course_code": "HIS 207", "course_title": "Ancient India: History and Letters", "level": 200, "book_title": "Early India", "author": "Thapar", "id": "H207.3", "type": "S"},
  {"num": 43, "course_code": "HIS 207", "course_title": "Ancient India: History and Letters", "level": 200, "book_title": "Arthashastra", "author": "Kautilya", "id": "N11", "type": "P"},
  {"num": 44, "course_code": "HIS 207", "course_title": "Ancient India: History and Letters", "level": 200, "book_title": "Shakuntala", "author": "Kalidasa", "id": "N09", "type": "P"},
  {"num": 45, "course_code": "HIS 208", "course_title": "Ancient China: History and Texts", "level": 200, "book_title": "The Early Chinese Empires", "author": "Lewis", "id": "H204.3", "type": "S"},
  {"num": 46, "course_code": "HIS 208", "course_title": "Ancient China: History and Texts", "level": 200, "book_title": "Records of the Grand Historian", "author": "Sima Qian", "id": "N08", "type": "P"},
  {"num": 47, "course_code": "HIS 208", "course_title": "Ancient China: History and Texts", "level": 200, "book_title": "The Art of War", "author": "Sun Tzu", "id": "N10", "type": "P"},
  {"num": 48, "course_code": "HIS 301", "course_title": "Late Antique and Medieval Europe", "level": 300, "book_title": "The World of Late Antiquity", "author": "Brown", "id": "H201.1", "type": "S"},
  {"num": 49, "course_code": "HIS 301", "course_title": "Late Antique and Medieval Europe", "level": 300, "book_title": "A Short History of the Byzantine Empire", "author": "Stathakopoulos", "id": "H201.2", "type": "T"},
  {"num": 50, "course_code": "HIS 301", "course_title": "Late Antique and Medieval Europe", "level": 300, "book_title": "Romanland", "author": "Kaldellis", "id": "H201.3", "type": "S"},
  {"num": 51, "course_code": "HIS 301", "course_title": "Late Antique and Medieval Europe", "level": 300, "book_title": "The Church of the East", "author": "Baum & Winkler", "id": "H307.2", "type": "T"},
  {"num": 52, "course_code": "HIS 301", "course_title": "Late Antique and Medieval Europe", "level": 300, "book_title": "Medieval Europe", "author": "Wickham", "id": "H202.4", "type": "S"},
  {"num": 53, "course_code": "HIS 301", "course_title": "Late Antique and Medieval Europe", "level": 300, "book_title": "The Making of Europe", "author": "Bartlett", "id": "H202.6", "type": "S"},
  {"num": 54, "course_code": "HIS 301", "course_title": "Late Antique and Medieval Europe", "level": 300, "book_title": "Under Crescent and Cross", "author": "Cohen", "id": "H307.3", "type": "S"},
  {"num": 55, "course_code": "PHI 302", "course_title": "Medieval Christian Synthesis", "level": 300, "book_title": "An Introduction to the Philosophy of Religion", "author": "Davies", "id": "P107.1", "type": "T"},
  {"num": 56, "course_code": "PHI 302", "course_title": "Medieval Christian Synthesis", "level": 300, "book_title": "Confessions", "author": "Augustine", "id": "N13", "type": "P"},
  {"num": 57, "course_code": "PHI 302", "course_title": "Medieval Christian Synthesis", "level": 300, "book_title": "Medieval Philosophy", "author": "Marenbon", "id": "P208.1", "type": "S"},
  {"num": 58, "course_code": "PHI 302", "course_title": "Medieval Christian Synthesis", "level": 300, "book_title": "ed., Basic Writings of Saint Thomas Aquinas", "author": "Pegis", "id": "P209.2", "type": "A"},
  {"num": 59, "course_code": "PHI 302", "course_title": "Medieval Christian Synthesis", "level": 300, "book_title": "eds., The Cambridge Companion to Aquinas", "author": "Kretzmann & Stump", "id": "P209.1", "type": "C"},
  {"num": 60, "course_code": "PHI 302", "course_title": "Medieval Christian Synthesis", "level": 300, "book_title": "Divine Comedy", "author": "Dante", "id": "N17", "type": "P"},
  {"num": 61, "course_code": "REL 303", "course_title": "Qur'an and Islamic Origins", "level": 300, "book_title": "Sasanian Persia", "author": "Daryaee", "id": "H209.2", "type": "S"},
  {"num": 62, "course_code": "REL 303", "course_title": "Qur'an and Islamic Origins", "level": 300, "book_title": "The Qur'an", "author": "", "id": "N14", "type": "P"},
  {"num": 63, "course_code": "REL 303", "course_title": "Qur'an and Islamic Origins", "level": 300, "book_title": "The Prophet and the Age of the Caliphates", "author": "Kennedy", "id": "H209.5", "type": "S"},
  {"num": 64, "course_code": "REL 303", "course_title": "Qur'an and Islamic Origins", "level": 300, "book_title": "Conversion to Islam in the Medieval Period", "author": "Bulliet", "id": "H307.1", "type": "S"},
  {"num": 65, "course_code": "REL 303", "course_title": "Qur'an and Islamic Origins", "level": 300, "book_title": "An Introduction to Islamic Law", "author": "Hallaq", "id": "H209.1", "type": "T"},
  {"num": 66, "course_code": "HUM 304", "course_title": "Islamic Thought and Letters", "level": 300, "book_title": "Deliverance from Error", "author": "al-Ghazali", "id": "N53", "type": "P"},
  {"num": 67, "course_code": "HUM 304", "course_title": "Islamic Thought and Letters", "level": 300, "book_title": "The Decisive Treatise and Epistle Dedicatory", "author": "Averroes", "id": "N54", "type": "P"},
  {"num": 68, "course_code": "HUM 304", "course_title": "Islamic Thought and Letters", "level": 300, "book_title": "The Masnavi, Book One", "author": "Rumi", "id": "N15", "type": "P"},
  {"num": 69, "course_code": "HUM 304", "course_title": "Islamic Thought and Letters", "level": 300, "book_title": "Travels", "author": "Ibn Battuta", "id": "N18", "type": "P"},
  {"num": 70, "course_code": "HUM 304", "course_title": "Islamic Thought and Letters", "level": 300, "book_title": "The Muqaddimah, tr. Rosenthal", "author": "Ibn Khaldun", "id": "H103.3", "type": "P"},
  {"num": 71, "course_code": "HIS 305", "course_title": "Ottoman, Persianate, Sanskrit Worlds", "level": 300, "book_title": "The Language of the Gods in the World of Men", "author": "Pollock", "id": "H207.5", "type": "S"},
  {"num": 72, "course_code": "HIS 305", "course_title": "Ottoman, Persianate, Sanskrit Worlds", "level": 300, "book_title": "India in the Persianate Age", "author": "Eaton", "id": "H207.4", "type": "S"},
  {"num": 73, "course_code": "HIS 305", "course_title": "Ottoman, Persianate, Sanskrit Worlds", "level": 300, "book_title": "The Ottoman Empire: The Classical Age", "author": "İnalcık", "id": "H209.3", "type": "S"},
  {"num": 74, "course_code": "HIS 305", "course_title": "Ottoman, Persianate, Sanskrit Worlds", "level": 300, "book_title": "The Imperial Harem", "author": "Peirce", "id": "H209.4", "type": "S"},
  {"num": 75, "course_code": "HIS 306", "course_title": "Buddhism, Silk Road, Steppe Empires", "level": 300, "book_title": "The Fundamental Wisdom of the Middle Way, tr. Garfield", "author": "Nagarjuna", "id": "P207.2", "type": "P"},
  {"num": 76, "course_code": "HIS 306", "course_title": "Buddhism, Silk Road, Steppe Empires", "level": 300, "book_title": "Nagarjuna's Madhyamaka", "author": "Westerhoff", "id": "P207.1", "type": "S"},
  {"num": 77, "course_code": "HIS 306", "course_title": "Buddhism, Silk Road, Steppe Empires", "level": 300, "book_title": "The Silk Road", "author": "Hansen", "id": "H301.3", "type": "S"},
  {"num": 78, "course_code": "HIS 306", "course_title": "Buddhism, Silk Road, Steppe Empires", "level": 300, "book_title": "Buddhism and Islam on the Silk Road", "author": "Elverskog", "id": "H307.5", "type": "S"},
  {"num": 79, "course_code": "HIS 306", "course_title": "Buddhism, Silk Road, Steppe Empires", "level": 300, "book_title": "The Mongols", "author": "Morgan", "id": "H301.2", "type": "S"},
  {"num": 80, "course_code": "HIS 306", "course_title": "Buddhism, Silk Road, Steppe Empires", "level": 300, "book_title": "Culture and Conquest in Mongol Eurasia", "author": "Allsen", "id": "H301.1", "type": "S"},
  {"num": 81, "course_code": "HIS 307", "course_title": "China and Japan to 1800", "level": 300, "book_title": "China Between Empires", "author": "Lewis", "id": "H204.2", "type": "S"},
  {"num": 82, "course_code": "HIS 307", "course_title": "China and Japan to 1800", "level": 300, "book_title": "The Open Empire", "author": "Hansen", "id": "H204.4", "type": "S"},
  {"num": 83, "course_code": "HIS 307", "course_title": "China and Japan to 1800", "level": 300, "book_title": "The Pattern of the Chinese Past", "author": "Elvin", "id": "H204.5", "type": "S"},
  {"num": 84, "course_code": "HIS 307", "course_title": "China and Japan to 1800", "level": 300, "book_title": "Premodern Japan", "author": "Hane & Perez", "id": "H204.1", "type": "T"},
  {"num": 85, "course_code": "HIS 307", "course_title": "China and Japan to 1800", "level": 300, "book_title": "The Tale of Genji", "author": "Murasaki Shikibu", "id": "N16", "type": "P"},
  {"num": 86, "course_code": "HIS 307", "course_title": "China and Japan to 1800", "level": 300, "book_title": "The Narrow Road to the Deep North", "author": "Bashō", "id": "N29", "type": "P"},
  {"num": 87, "course_code": "HIS 308", "course_title": "African Worlds to 1800", "level": 300, "book_title": "ed. and tr. Conrad", "author": "Sunjata: A New Prose Version", "id": "N19", "type": "P"},
  {"num": 88, "course_code": "HIS 308", "course_title": "African Worlds to 1800", "level": 300, "book_title": "Medieval Africa 1250–1800", "author": "Oliver & Atmore", "id": "H211.4", "type": "T"},
  {"num": 89, "course_code": "HIS 308", "course_title": "African Worlds to 1800", "level": 300, "book_title": "Muslim Societies in African History", "author": "Robinson", "id": "H211.1", "type": "S"},
  {"num": 90, "course_code": "HIS 308", "course_title": "African Worlds to 1800", "level": 300, "book_title": "Africans", "author": "Iliffe", "id": "H211.5", "type": "S"},
  {"num": 91, "course_code": "HUM 309", "course_title": "Ancient and Indigenous Americas", "level": 300, "book_title": "tr. Christenson", "author": "Popol Vuh", "id": "N20", "type": "P"},
  {"num": 92, "course_code": "HUM 309", "course_title": "Ancient and Indigenous Americas", "level": 300, "book_title": "The Maya", "author": "Coe & Houston", "id": "H213.2", "type": "T"},
  {"num": 93, "course_code": "HUM 309", "course_title": "Ancient and Indigenous Americas", "level": 300, "book_title": "The Aztecs", "author": "Smith", "id": "H213.3", "type": "S"},
  {"num": 94, "course_code": "HUM 309", "course_title": "Ancient and Indigenous Americas", "level": 300, "book_title": "The Incas", "author": "D'Altroy", "id": "H213.5", "type": "S"},
  {"num": 95, "course_code": "SCI 401", "course_title": "The Scientific Revolution", "level": 400, "book_title": "Islamic Science and the Making of the European Renaissance", "author": "Saliba", "id": "H310.2", "type": "S"},
  {"num": 96, "course_code": "SCI 401", "course_title": "The Scientific Revolution", "level": 400, "book_title": "On the Revolutions of the Heavenly Spheres", "author": "Copernicus", "id": "N23", "type": "P"},
  {"num": 97, "course_code": "SCI 401", "course_title": "The Scientific Revolution", "level": 400, "book_title": "Dialogue Concerning the Two Chief World Systems", "author": "Galileo", "id": "N24", "type": "P"},
  {"num": 98, "course_code": "SCI 401", "course_title": "The Scientific Revolution", "level": 400, "book_title": "Principia", "author": "Newton", "id": "N25", "type": "P"},
  {"num": 99, "course_code": "SCI 401", "course_title": "The Scientific Revolution", "level": 400, "book_title": "The Scientific Revolution", "author": "Shapin", "id": "H310.1", "type": "S"},
  {"num": 100, "course_code": "SCI 401", "course_title": "The Scientific Revolution", "level": 400, "book_title": "On Their Own Terms", "author": "Elman", "id": "H310.5", "type": "S"},
  {"num": 101, "course_code": "PHI 402", "course_title": "Descartes and Modern Philosophy", "level": 400, "book_title": "The Rise of Modern Philosophy", "author": "Kenny", "id": "P210.1", "type": "S"},
  {"num": 102, "course_code": "PHI 402", "course_title": "Descartes and Modern Philosophy", "level": 400, "book_title": "Philosophical Writings, tr. Cottingham, Stoothoff & Murdoch", "author": "Descartes", "id": "P211.2", "type": "P"},
  {"num": 103, "course_code": "PHI 402", "course_title": "Descartes and Modern Philosophy", "level": 400, "book_title": "ed., The Cambridge Companion to Descartes", "author": "Cottingham", "id": "P211.1", "type": "C"},
  {"num": 104, "course_code": "PHI 402", "course_title": "Descartes and Modern Philosophy", "level": 400, "book_title": "eds., Modern Philosophy: An Anthology of Primary Sources", "author": "Ariew & Watkins", "id": "P210.2", "type": "A"},
  {"num": 105, "course_code": "HIS 403", "course_title": "Early Modern Europe", "level": 400, "book_title": "Early Modern Europe", "author": "Wiesner-Hanks", "id": "H202.2", "type": "T"},
  {"num": 106, "course_code": "HIS 403", "course_title": "Early Modern Europe", "level": 400, "book_title": "Popular Culture in Early Modern Europe", "author": "Burke", "id": "H202.5", "type": "S"},
  {"num": 107, "course_code": "HIS 403", "course_title": "Early Modern Europe", "level": 400, "book_title": "Earthly Necessities", "author": "Wrightson", "id": "H202.3", "type": "S"},
  {"num": 108, "course_code": "HIS 403", "course_title": "Early Modern Europe", "level": 400, "book_title": "The Military Revolution", "author": "Parker", "id": "H202.1", "type": "S"},
  {"num": 109, "course_code": "HIS 403", "course_title": "Early Modern Europe", "level": 400, "book_title": "Lineages of the Absolutist State", "author": "Anderson", "id": "H202.8", "type": "S"},
  {"num": 110, "course_code": "POL 404", "course_title": "Politics and Political Economy", "level": 400, "book_title": "The Prince", "author": "Machiavelli", "id": "N22", "type": "P"},
  {"num": 111, "course_code": "POL 404", "course_title": "Politics and Political Economy", "level": 400, "book_title": "Leviathan", "author": "Hobbes", "id": "N30", "type": "P"},
  {"num": 112, "course_code": "POL 404", "course_title": "Politics and Political Economy", "level": 400, "book_title": "Second Treatise of Government", "author": "Locke", "id": "N31", "type": "P"},
  {"num": 113, "course_code": "POL 404", "course_title": "Politics and Political Economy", "level": 400, "book_title": "The Social Contract", "author": "Rousseau", "id": "N33", "type": "P"},
  {"num": 114, "course_code": "POL 404", "course_title": "Politics and Political Economy", "level": 400, "book_title": "The Wealth of Nations", "author": "Smith", "id": "N32", "type": "P"},
  {"num": 115, "course_code": "LIT 405", "course_title": "Renaissance and Early Modern Literature", "level": 400, "book_title": "Hamlet", "author": "Shakespeare", "id": "N26", "type": "P"},
  {"num": 116, "course_code": "LIT 405", "course_title": "Renaissance and Early Modern Literature", "level": 400, "book_title": "Don Quixote", "author": "Cervantes", "id": "N28", "type": "P"},
  {"num": 117, "course_code": "LIT 405", "course_title": "Renaissance and Early Modern Literature", "level": 400, "book_title": "King Lear", "author": "Shakespeare", "id": "N27", "type": "P"},
  {"num": 118, "course_code": "LIT 405", "course_title": "Renaissance and Early Modern Literature", "level": 400, "book_title": "The Story of the Stone (Dream of the Red Chamber)", "author": "Cao Xueqin", "id": "N43", "type": "P"},
  {"num": 119, "course_code": "HIS 406", "course_title": "Global Early Modernity", "level": 400, "book_title": "Global Crisis", "author": "Parker", "id": "H311.2", "type": "S"},
  {"num": 120, "course_code": "HIS 406", "course_title": "Global Early Modernity", "level": 400, "book_title": "The Pilgrim Art", "author": "Finlay", "id": "H311.1", "type": "S"},
  {"num": 121, "course_code": "HIS 406", "course_title": "Global Early Modernity", "level": 400, "book_title": "A History of Southeast Asia", "author": "Reid", "id": "H208.1", "type": "S"},
  {"num": 122, "course_code": "HIS 406", "course_title": "Global Early Modernity", "level": 400, "book_title": "The Art of Not Being Governed", "author": "Scott", "id": "H208.2", "type": "S"},
  {"num": 123, "course_code": "HIS 407", "course_title": "Conquest and Colonial Americas", "level": 400, "book_title": "A Short Account of the Destruction of the Indies", "author": "Las Casas", "id": "N21", "type": "P"},
  {"num": 124, "course_code": "HIS 407", "course_title": "Conquest and Colonial Americas", "level": 400, "book_title": "Seven Myths of the Spanish Conquest", "author": "Restall", "id": "H213.1", "type": "S"},
  {"num": 125, "course_code": "HIS 407", "course_title": "Conquest and Colonial Americas", "level": 400, "book_title": "Peru's Indian Peoples and the Challenge of Spanish Conquest", "author": "Stern", "id": "H212.1", "type": "S"},
  {"num": 126, "course_code": "HIS 407", "course_title": "Conquest and Colonial Americas", "level": 400, "book_title": "Colonial Latin America", "author": "Burkholder & Johnson", "id": "H212.2", "type": "T"},
  {"num": 127, "course_code": "HIS 408", "course_title": "Atlantic Revolutions", "level": 400, "book_title": "Britons", "author": "Colley", "id": "H203.6", "type": "S"},
  {"num": 128, "course_code": "HIS 408", "course_title": "Atlantic Revolutions", "level": 400, "book_title": "Common Sense", "author": "Paine", "id": "N34", "type": "P"},
  {"num": 129, "course_code": "HIS 408", "course_title": "Atlantic Revolutions", "level": 400, "book_title": "Madison & Jay, The Federalist", "author": "Hamilton", "id": "N35", "type": "P"},
  {"num": 130, "course_code": "HIS 408", "course_title": "Atlantic Revolutions", "level": 400, "book_title": "The Oxford History of the French Revolution", "author": "Doyle", "id": "H202.7", "type": "S"},
  {"num": 131, "course_code": "HIS 408", "course_title": "Atlantic Revolutions", "level": 400, "book_title": "Avengers of the New World", "author": "Dubois", "id": "H302.7", "type": "S"},
  {"num": 132, "course_code": "PHI 501", "course_title": "Kant and Nietzsche", "level": 500, "book_title": "Kant", "author": "Guyer", "id": "P301.1", "type": "S"},
  {"num": 133, "course_code": "PHI 501", "course_title": "Kant and Nietzsche", "level": 500, "book_title": "Critique of Pure Reason, tr. Guyer & Wood", "author": "Kant", "id": "P301.2", "type": "P"},
  {"num": 134, "course_code": "PHI 501", "course_title": "Kant and Nietzsche", "level": 500, "book_title": "Thus Spoke Zarathustra", "author": "Nietzsche", "id": "N44", "type": "P"},
  {"num": 135, "course_code": "PHI 501", "course_title": "Kant and Nietzsche", "level": 500, "book_title": "Beyond Good and Evil, tr. Norman", "author": "Nietzsche", "id": "P302.1", "type": "P"},
  {"num": 136, "course_code": "PHI 501", "course_title": "Kant and Nietzsche", "level": 500, "book_title": "eds., The Cambridge Companion to Nietzsche", "author": "Magnus & Higgins", "id": "P302.2", "type": "C"},
  {"num": 137, "course_code": "PHI 501", "course_title": "Kant and Nietzsche", "level": 500, "book_title": "eds., The Nietzsche Reader", "author": "Ansell-Pearson & Large", "id": "P302.3", "type": "A"},
  {"num": 138, "course_code": "HUM 502", "course_title": "Marx, Mill, Darwin, Freud", "level": 500, "book_title": "The Communist Manifesto", "author": "Marx & Engels", "id": "N38", "type": "P"},
  {"num": 139, "course_code": "HUM 502", "course_title": "Marx, Mill, Darwin, Freud", "level": 500, "book_title": "On Liberty", "author": "Mill", "id": "N39", "type": "P"},
  {"num": 140, "course_code": "HUM 502", "course_title": "Marx, Mill, Darwin, Freud", "level": 500, "book_title": "On the Origin of Species", "author": "Darwin", "id": "N40", "type": "P"},
  {"num": 141, "course_code": "HUM 502", "course_title": "Marx, Mill, Darwin, Freud", "level": 500, "book_title": "The Interpretation of Dreams", "author": "Freud", "id": "N45", "type": "P"},
  {"num": 142, "course_code": "LIT 503", "course_title": "Nineteenth-Century Novel and Drama", "level": 500, "book_title": "Faust", "author": "Goethe", "id": "N37", "type": "P"},
  {"num": 143, "course_code": "LIT 503", "course_title": "Nineteenth-Century Novel and Drama", "level": 500, "book_title": "War and Peace", "author": "Tolstoy", "id": "N41", "type": "P"},
  {"num": 144, "course_code": "LIT 503", "course_title": "Nineteenth-Century Novel and Drama", "level": 500, "book_title": "The Brothers Karamazov", "author": "Dostoevsky", "id": "N42", "type": "P"},
  {"num": 145, "course_code": "HIS 504", "course_title": "Gender in History", "level": 500, "book_title": "A Vindication of the Rights of Woman", "author": "Wollstonecraft", "id": "N36", "type": "P"},
  {"num": 146, "course_code": "HIS 504", "course_title": "Gender in History", "level": 500, "book_title": "Gender in History", "author": "Wiesner-Hanks", "id": "H306.1", "type": "T"},
  {"num": 147, "course_code": "HIS 504", "course_title": "Gender in History", "level": 500, "book_title": "Gender and the Politics of History", "author": "Scott", "id": "H306.2", "type": "S"},
  {"num": 148, "course_code": "HIS 504", "course_title": "Gender in History", "level": 500, "book_title": "Women and Gender in Islam", "author": "Ahmed", "id": "H306.3", "type": "S"},
  {"num": 149, "course_code": "HIS 505", "course_title": "The Global Nineteenth Century", "level": 500, "book_title": "The Transformation of the World", "author": "Osterhammel", "id": "H101.5", "type": "S"},
  {"num": 150, "course_code": "HIS 505", "course_title": "The Global Nineteenth Century", "level": 500, "book_title": "ed., The Nineteenth Century: Europe 1789–1914", "author": "Blanning", "id": "H203.3", "type": "C"},
  {"num": 151, "course_code": "HIS 505", "course_title": "The Global Nineteenth Century", "level": 500, "book_title": "The Russian Empire", "author": "Kappeler", "id": "H203.5", "type": "S"},
  {"num": 152, "course_code": "HIS 505", "course_title": "The Global Nineteenth Century", "level": 500, "book_title": "Imagined Communities", "author": "Anderson", "id": "H302.3", "type": "S"},
  {"num": 153, "course_code": "HIS 506", "course_title": "Industry, Capitalism, Technology", "level": 500, "book_title": "Capitalism: A Short History", "author": "Kocka", "id": "H302.1", "type": "S"},
  {"num": 154, "course_code": "HIS 506", "course_title": "Industry, Capitalism, Technology", "level": 500, "book_title": "The Great Divergence", "author": "Pomeranz", "id": "H205.2", "type": "S"},
  {"num": 155, "course_code": "HIS 506", "course_title": "Industry, Capitalism, Technology", "level": 500, "book_title": "The British Industrial Revolution in Global Perspective", "author": "Allen", "id": "H302.5", "type": "S"},
  {"num": 156, "course_code": "HIS 506", "course_title": "Industry, Capitalism, Technology", "level": 500, "book_title": "Power over Peoples", "author": "Headrick", "id": "H310.4", "type": "S"},
  {"num": 157, "course_code": "HIS 507", "course_title": "Global Environmental History", "level": 500, "book_title": "Ecological Imperialism", "author": "Crosby", "id": "H305.3", "type": "S"},
  {"num": 158, "course_code": "HIS 507", "course_title": "Global Environmental History", "level": 500, "book_title": "Ecological Revolutions", "author": "Merchant", "id": "H304.1", "type": "S"},
  {"num": 159, "course_code": "HIS 507", "course_title": "Global Environmental History", "level": 500, "book_title": "The Retreat of the Elephants", "author": "Elvin", "id": "H305.4", "type": "S"},
  {"num": 160, "course_code": "HIS 507", "course_title": "Global Environmental History", "level": 500, "book_title": "Nature and Power", "author": "Radkau", "id": "H304.3", "type": "S"},
  {"num": 161, "course_code": "HIS 507", "course_title": "Global Environmental History", "level": 500, "book_title": "The Unquiet Woods", "author": "Guha", "id": "H305.1", "type": "S"},
  {"num": 162, "course_code": "HIS 507", "course_title": "Global Environmental History", "level": 500, "book_title": "Colonizing the Body", "author": "Arnold", "id": "H305.2", "type": "S"},
  {"num": 163, "course_code": "HIS 507", "course_title": "Global Environmental History", "level": 500, "book_title": "Late Victorian Holocausts", "author": "Davis", "id": "H304.2", "type": "S"},
  {"num": 164, "course_code": "HIS 508", "course_title": "Oceans and Migration", "level": 500, "book_title": "Pacific Worlds", "author": "Matsuda", "id": "H309.2", "type": "S"},
  {"num": 165, "course_code": "HIS 508", "course_title": "Oceans and Migration", "level": 500, "book_title": "Islands and Beaches", "author": "Dening", "id": "H309.4", "type": "S"},
  {"num": 166, "course_code": "HIS 508", "course_title": "Oceans and Migration", "level": 500, "book_title": "A Hundred Horizons", "author": "Bose", "id": "H309.3", "type": "S"},
  {"num": 167, "course_code": "HIS 508", "course_title": "Oceans and Migration", "level": 500, "book_title": "Crossing the Bay of Bengal", "author": "Amrith", "id": "H309.1", "type": "S"},
  {"num": 168, "course_code": "HIS 508", "course_title": "Oceans and Migration", "level": 500, "book_title": "Melancholy Order", "author": "McKeown", "id": "H309.5", "type": "S"},
  {"num": 169, "course_code": "HIS 509", "course_title": "Slavery and African Diaspora", "level": 500, "book_title": "Africa and Africans in the Making of the Atlantic World", "author": "Thornton", "id": "H303.2", "type": "S"},
  {"num": 170, "course_code": "HIS 509", "course_title": "Slavery and African Diaspora", "level": 500, "book_title": "ed., Tropical Babylons", "author": "Schwartz", "id": "H303.3", "type": "C"},
  {"num": 171, "course_code": "HIS 509", "course_title": "Slavery and African Diaspora", "level": 500, "book_title": "The Making of New World Slavery", "author": "Blackburn", "id": "H303.5", "type": "S"},
  {"num": 172, "course_code": "HIS 509", "course_title": "Slavery and African Diaspora", "level": 500, "book_title": "Slavery and Social Death", "author": "Patterson", "id": "H303.4", "type": "S"},
  {"num": 173, "course_code": "HIS 509", "course_title": "Slavery and African Diaspora", "level": 500, "book_title": "Reversing Sail", "author": "Gomez", "id": "H303.1", "type": "S"},
  {"num": 174, "course_code": "HIS 510", "course_title": "Histories of the Americas", "level": 500, "book_title": "Give Me Liberty!", "author": "Foner", "id": "H214.3", "type": "T"},
  {"num": 175, "course_code": "HIS 510", "course_title": "Histories of the Americas", "level": 500, "book_title": "From Slavery to Freedom", "author": "Franklin & Higginbotham", "id": "H303.7", "type": "T"},
  {"num": 176, "course_code": "HIS 510", "course_title": "Histories of the Americas", "level": 500, "book_title": "American Judaism", "author": "Sarna", "id": "H307.6", "type": "S"},
  {"num": 177, "course_code": "HIS 510", "course_title": "Histories of the Americas", "level": 500, "book_title": "The Rediscovery of America", "author": "Blackhawk", "id": "H213.6", "type": "S"},
  {"num": 178, "course_code": "HIS 510", "course_title": "Histories of the Americas", "level": 500, "book_title": "A Concise History of Brazil", "author": "Fausto", "id": "H212.3", "type": "T"},
  {"num": 179, "course_code": "HIS 510", "course_title": "Histories of the Americas", "level": 500, "book_title": "Smith & Green, Modern Latin America", "author": "Skidmore", "id": "H212.4", "type": "T"},
  {"num": 180, "course_code": "HIS 511", "course_title": "Settler Colonialism and Genocide", "level": 500, "book_title": "The Comanche Empire", "author": "Hämäläinen", "id": "H213.4", "type": "S"},
  {"num": 181, "course_code": "HIS 511", "course_title": "Settler Colonialism and Genocide", "level": 500, "book_title": "Settler Colonialism", "author": "Veracini", "id": "H214.1", "type": "S"},
  {"num": 182, "course_code": "HIS 511", "course_title": "Settler Colonialism and Genocide", "level": 500, "book_title": "Aboriginal Australians", "author": "Broome", "id": "H214.2", "type": "T"},
  {"num": 183, "course_code": "HIS 511", "course_title": "Settler Colonialism and Genocide", "level": 500, "book_title": "Blood and Soil", "author": "Kiernan", "id": "H303.6", "type": "S"},
  {"num": 184, "course_code": "HIS 601", "course_title": "Twentieth-Century War and Order", "level": 600, "book_title": "eds., The Oxford History of the Twentieth Century", "author": "Howard & Louis", "id": "H101.3", "type": "C"},
  {"num": 185, "course_code": "HIS 601", "course_title": "Twentieth-Century War and Order", "level": 600, "book_title": "The Origins of the First World War", "author": "Joll & Martel", "id": "H203.4", "type": "T"},
  {"num": 186, "course_code": "HIS 601", "course_title": "Twentieth-Century War and Order", "level": 600, "book_title": "Waging War", "author": "Lee", "id": "H203.7", "type": "S"},
  {"num": 187, "course_code": "HIS 601", "course_title": "Twentieth-Century War and Order", "level": 600, "book_title": "A World at Arms", "author": "Weinberg", "id": "H203.8", "type": "S"},
  {"num": 188, "course_code": "HIS 602", "course_title": "Revolution, Totalitarianism, Holocaust", "level": 600, "book_title": "The Russian Revolution", "author": "Fitzpatrick", "id": "H203.1", "type": "S"},
  {"num": 189, "course_code": "HIS 602", "course_title": "Revolution, Totalitarianism, Holocaust", "level": 600, "book_title": "The Origins of Totalitarianism", "author": "Arendt", "id": "N47", "type": "P"},
  {"num": 190, "course_code": "HIS 602", "course_title": "Revolution, Totalitarianism, Holocaust", "level": 600, "book_title": "War and Genocide", "author": "Bergen", "id": "H307.4", "type": "T"},
  {"num": 191, "course_code": "HIS 602", "course_title": "Revolution, Totalitarianism, Holocaust", "level": 600, "book_title": "The Origins of the Final Solution", "author": "Browning", "id": "H307.7", "type": "S"},
  {"num": 192, "course_code": "HIS 602", "course_title": "Revolution, Totalitarianism, Holocaust", "level": 600, "book_title": "Armageddon Averted", "author": "Kotkin", "id": "H203.2", "type": "S"},
  {"num": 193, "course_code": "POL 603", "course_title": "Cold War and Global Order", "level": 600, "book_title": "The Global Cold War", "author": "Westad", "id": "H211.7", "type": "S"},
  {"num": 194, "course_code": "POL 603", "course_title": "Cold War and Global Order", "level": 600, "book_title": "The Last Utopia", "author": "Moyn", "id": "H302.6", "type": "S"},
  {"num": 195, "course_code": "POL 603", "course_title": "Cold War and Global Order", "level": 600, "book_title": "House of Debt", "author": "Mian & Sufi", "id": "H302.2", "type": "S"},
  {"num": 196, "course_code": "HIS 604", "course_title": "Modern East Asia", "level": 600, "book_title": "A Modern History of Japan", "author": "Gordon", "id": "H206.2", "type": "T"},
  {"num": 197, "course_code": "HIS 604", "course_title": "Modern East Asia", "level": 600, "book_title": "The Search for Modern China", "author": "Spence", "id": "H205.3", "type": "T"},
  {"num": 198, "course_code": "HIS 604", "course_title": "Modern East Asia", "level": 600, "book_title": "A History of Korea", "author": "Hwang", "id": "H206.1", "type": "T"},
  {"num": 199, "course_code": "HIS 604", "course_title": "Modern East Asia", "level": 600, "book_title": "Korea Between Empires", "author": "Schmid", "id": "H206.3", "type": "S"},
  {"num": 200, "course_code": "HIS 604", "course_title": "Modern East Asia", "level": 600, "book_title": "Japan's Total Empire", "author": "Young", "id": "H206.4", "type": "S"},
  {"num": 201, "course_code": "HIS 604", "course_title": "Modern East Asia", "level": 600, "book_title": "The Chinese People at War", "author": "Lary", "id": "H205.1", "type": "S"},
  {"num": 202, "course_code": "HIS 604", "course_title": "Modern East Asia", "level": 600, "book_title": "Korea's Place in the Sun", "author": "Cumings", "id": "H206.5", "type": "S"},
  {"num": 203, "course_code": "HIS 605", "course_title": "South Asia and Middle East", "level": 600, "book_title": "A Concise History of Modern India", "author": "Metcalf & Metcalf", "id": "H207.2", "type": "T"},
  {"num": 204, "course_code": "HIS 605", "course_title": "South Asia and Middle East", "level": 600, "book_title": "The Great Partition", "author": "Khan", "id": "H207.1", "type": "S"},
  {"num": 205, "course_code": "HIS 605", "course_title": "South Asia and Middle East", "level": 600, "book_title": "A Brief History of the Late Ottoman Empire", "author": "Hanioğlu", "id": "H210.1", "type": "T"},
  {"num": 206, "course_code": "HIS 605", "course_title": "South Asia and Middle East", "level": 600, "book_title": "A History of Modern Iran", "author": "Abrahamian", "id": "H210.2", "type": "T"},
  {"num": 207, "course_code": "HIS 605", "course_title": "South Asia and Middle East", "level": 600, "book_title": "The Modern Middle East", "author": "Gelvin", "id": "H210.3", "type": "T"},
  {"num": 208, "course_code": "HIS 606", "course_title": "Africa and Decolonization", "level": 600, "book_title": "How Europe Underdeveloped Africa", "author": "Rodney", "id": "H211.3", "type": "S"},
  {"num": 209, "course_code": "HIS 606", "course_title": "Africa and Decolonization", "level": 600, "book_title": "The Wretched of the Earth", "author": "Fanon", "id": "N48", "type": "P"},
  {"num": 210, "course_code": "HIS 606", "course_title": "Africa and Decolonization", "level": 600, "book_title": "Citizen and Subject", "author": "Mamdani", "id": "H211.6", "type": "S"},
  {"num": 211, "course_code": "HIS 606", "course_title": "Africa and Decolonization", "level": 600, "book_title": "Africa Since 1940", "author": "Cooper", "id": "H211.2", "type": "S"},
  {"num": 212, "course_code": "HIS 607", "course_title": "Postcolonial Intellectual History", "level": 600, "book_title": "Recovering Liberties", "author": "Bayly", "id": "H308.3", "type": "S"},
  {"num": 213, "course_code": "HIS 607", "course_title": "Postcolonial Intellectual History", "level": 600, "book_title": "The Idea of the Muslim World", "author": "Aydin", "id": "H308.2", "type": "S"},
  {"num": 214, "course_code": "HIS 607", "course_title": "Postcolonial Intellectual History", "level": 600, "book_title": "The Nation and Its Fragments", "author": "Chatterjee", "id": "H302.4", "type": "S"},
  {"num": 215, "course_code": "HIS 607", "course_title": "Postcolonial Intellectual History", "level": 600, "book_title": "Provincializing Europe", "author": "Chakrabarty", "id": "H308.1", "type": "S"},
  {"num": 216, "course_code": "HIS 607", "course_title": "Postcolonial Intellectual History", "level": 600, "book_title": "The Location of Culture", "author": "Bhabha", "id": "H308.4", "type": "S"},
  {"num": 217, "course_code": "HIS 607", "course_title": "Postcolonial Intellectual History", "level": 600, "book_title": "In My Father's House: Africa in the Philosophy of Culture", "author": "Appiah", "id": "N55", "type": "P"},
  {"num": 218, "course_code": "HIS 608", "course_title": "Historical Theory and Critique", "level": 600, "book_title": "Wang & Mukherjee, A Global History of Modern Historiography", "author": "Iggers", "id": "H103.4", "type": "S"},
  {"num": 219, "course_code": "HIS 608", "course_title": "Historical Theory and Critique", "level": 600, "book_title": "Futures Past", "author": "Koselleck", "id": "H103.2", "type": "S"},
  {"num": 220, "course_code": "HIS 608", "course_title": "Historical Theory and Critique", "level": 600, "book_title": "The Writing of History", "author": "de Certeau", "id": "H102.7", "type": "S"},
  {"num": 221, "course_code": "HIS 608", "course_title": "Historical Theory and Critique", "level": 600, "book_title": "Metahistory", "author": "White", "id": "H103.5", "type": "S"},
  {"num": 222, "course_code": "HIS 608", "course_title": "Historical Theory and Critique", "level": 600, "book_title": "Deconstructing History", "author": "Munslow", "id": "H103.1", "type": "T"},
  {"num": 223, "course_code": "PHI 609", "course_title": "Dewey, Wittgenstein, Arendt", "level": 600, "book_title": "eds., The Essential Dewey", "author": "Hickman & Alexander", "id": "P304.2", "type": "A"},
  {"num": 224, "course_code": "PHI 609", "course_title": "Dewey, Wittgenstein, Arendt", "level": 600, "book_title": "ed., The Cambridge Companion to Dewey", "author": "Rogers", "id": "P304.1", "type": "C"},
  {"num": 225, "course_code": "PHI 609", "course_title": "Dewey, Wittgenstein, Arendt", "level": 600, "book_title": "Philosophical Investigations", "author": "Wittgenstein", "id": "P303.2", "type": "P"},
  {"num": 226, "course_code": "PHI 609", "course_title": "Dewey, Wittgenstein, Arendt", "level": 600, "book_title": "eds., The Cambridge Companion to Wittgenstein", "author": "Sluga & Stern", "id": "P303.1", "type": "C"},
  {"num": 227, "course_code": "PHI 609", "course_title": "Dewey, Wittgenstein, Arendt", "level": 600, "book_title": "The Human Condition", "author": "Arendt", "id": "P305.2", "type": "P"},
  {"num": 228, "course_code": "PHI 609", "course_title": "Dewey, Wittgenstein, Arendt", "level": 600, "book_title": "ed., The Cambridge Companion to Hannah Arendt", "author": "Villa", "id": "P305.1", "type": "C"},
  {"num": 229, "course_code": "PHI 610", "course_title": "Continental Philosophy and Aesthetics", "level": 600, "book_title": "Continental Philosophy", "author": "Cutrofello", "id": "P306.1", "type": "T"},
  {"num": 230, "course_code": "PHI 610", "course_title": "Continental Philosophy and Aesthetics", "level": 600, "book_title": "eds., The Continental Philosophy Reader", "author": "Kearney & Rainwater", "id": "P306.3", "type": "A"},
  {"num": 231, "course_code": "PHI 610", "course_title": "Continental Philosophy and Aesthetics", "level": 600, "book_title": "eds., Aesthetics: A Comprehensive Anthology", "author": "Cahn & Meskin", "id": "P306.2", "type": "A"},
  {"num": 232, "course_code": "PHI 610", "course_title": "Continental Philosophy and Aesthetics", "level": 600, "book_title": "ed., The Oxford Handbook of Aesthetics", "author": "Levinson", "id": "P306.4", "type": "C"},
  {"num": 233, "course_code": "PHI 611", "course_title": "Japanese Philosophy", "level": 600, "book_title": "An Inquiry into the Good", "author": "Nishida", "id": "P307.1", "type": "P"},
  {"num": 234, "course_code": "PHI 611", "course_title": "Japanese Philosophy", "level": 600, "book_title": "Kasulis & Maraldo, eds., Japanese Philosophy: A Sourcebook", "author": "Heisig", "id": "P307.2", "type": "A"},
  {"num": 235, "course_code": "LIT 612", "course_title": "Postcolonial Global Fiction", "level": 600, "book_title": "Things Fall Apart", "author": "Achebe", "id": "N49", "type": "P"},
  {"num": 236, "course_code": "LIT 612", "course_title": "Postcolonial Global Fiction", "level": 600, "book_title": "One Hundred Years of Solitude", "author": "García Márquez", "id": "N50", "type": "P"},
  {"num": 237, "course_code": "SCI 613", "course_title": "Science, Technology, Environment", "level": 600, "book_title": "Relativity", "author": "Einstein", "id": "N46", "type": "P"},
  {"num": 238, "course_code": "SCI 613", "course_title": "Science, Technology, Environment", "level": 600, "book_title": "The Shock of the Old", "author": "Edgerton", "id": "H310.3", "type": "S"},
  {"num": 239, "course_code": "SCI 613", "course_title": "Science, Technology, Environment", "level": 600, "book_title": "Silent Spring", "author": "Carson", "id": "N52", "type": "P"},
  {"num": 240, "course_code": "PHI 701", "course_title": "Philosophy of Science", "level": 700, "book_title": "Theory and Reality", "author": "Godfrey-Smith", "id": "P308.1", "type": "T"},
  {"num": 241, "course_code": "PHI 701", "course_title": "Philosophy of Science", "level": 700, "book_title": "Alspector-Kelly & Allhoff, eds., Philosophy of Science: A Historical Anthology", "author": "McGrew", "id": "P308.3", "type": "A"},
  {"num": 242, "course_code": "PHI 701", "course_title": "Philosophy of Science", "level": 700, "book_title": "eds., Philosophy of Science: Contemporary Readings", "author": "Balashov & Rosenberg", "id": "P308.2", "type": "A"},
  {"num": 243, "course_code": "PHI 701", "course_title": "Philosophy of Science", "level": 700, "book_title": "eds., The Routledge Companion to Philosophy of Science", "author": "Psillos & Curd", "id": "P308.4", "type": "C"},
  {"num": 244, "course_code": "PHI 702", "course_title": "Ethics and Metaethics", "level": 700, "book_title": "Pettit & Slote, Three Methods of Ethics", "author": "Baron", "id": "P309.1", "type": "S"},
  {"num": 245, "course_code": "PHI 702", "course_title": "Ethics and Metaethics", "level": 700, "book_title": "Metaethics", "author": "Miller", "id": "P309.2", "type": "T"},
  {"num": 246, "course_code": "PHI 702", "course_title": "Ethics and Metaethics", "level": 700, "book_title": "ed., The Oxford Handbook of Ethical Theory", "author": "Copp", "id": "P309.3", "type": "C"},
  {"num": 247, "course_code": "PHI 703", "course_title": "Metaphysics", "level": 700, "book_title": "Metaphysics", "author": "Loux & Crisp", "id": "P310.1", "type": "T"},
  {"num": 248, "course_code": "PHI 703", "course_title": "Metaphysics", "level": 700, "book_title": "eds., Metaphysics: The Big Questions", "author": "van Inwagen & Zimmerman", "id": "P310.2", "type": "A"},
  {"num": 249, "course_code": "PHI 703", "course_title": "Metaphysics", "level": 700, "book_title": "eds., The Oxford Handbook of Metaphysics", "author": "Loux & Zimmerman", "id": "P310.3", "type": "C"},
  {"num": 250, "course_code": "PHI 704", "course_title": "Epistemology", "level": 700, "book_title": "Epistemology", "author": "Audi", "id": "P311.1", "type": "T"},
  {"num": 251, "course_code": "PHI 704", "course_title": "Epistemology", "level": 700, "book_title": "Kim, Fantl & McGrath, eds., Epistemology: An Anthology", "author": "Sosa", "id": "P311.2", "type": "A"},
  {"num": 252, "course_code": "PHI 704", "course_title": "Epistemology", "level": 700, "book_title": "ed., The Oxford Handbook of Epistemology", "author": "Moser", "id": "P311.3", "type": "C"},
  {"num": 253, "course_code": "PHI 705", "course_title": "Mind, Language, Action", "level": 700, "book_title": "Philosophy of Mind", "author": "Kim & Rupert", "id": "P312.1", "type": "T"},
  {"num": 254, "course_code": "PHI 705", "course_title": "Mind, Language, Action", "level": 700, "book_title": "ed., Philosophy of Mind: Classical and Contemporary Readings", "author": "Chalmers", "id": "P312.2", "type": "A"},
  {"num": 255, "course_code": "PHI 705", "course_title": "Mind, Language, Action", "level": 700, "book_title": "Philosophy of Language", "author": "Lycan", "id": "P313.1", "type": "T"},
  {"num": 256, "course_code": "PHI 705", "course_title": "Mind, Language, Action", "level": 700, "book_title": "eds., The Philosophy of Language", "author": "Martinich & Sosa", "id": "P313.2", "type": "A"},
  {"num": 257, "course_code": "PHI 705", "course_title": "Mind, Language, Action", "level": 700, "book_title": "Philosophy of Action", "author": "Paul", "id": "P318.1", "type": "T"},
  {"num": 258, "course_code": "PHI 706", "course_title": "Philosophy of Logic and Mathematics", "level": 700, "book_title": "Philosophy of Mathematics", "author": "Linnebo", "id": "P315.1", "type": "T"},
  {"num": 259, "course_code": "PHI 706", "course_title": "Philosophy of Logic and Mathematics", "level": 700, "book_title": "eds., Philosophy of Mathematics: Selected Readings", "author": "Benacerraf & Putnam", "id": "P315.2", "type": "A"},
  {"num": 260, "course_code": "PHI 706", "course_title": "Philosophy of Logic and Mathematics", "level": 700, "book_title": "An Introduction to Non-Classical Logic", "author": "Priest", "id": "P314.1", "type": "T"},
  {"num": 261, "course_code": "PHI 707", "course_title": "Political and Social Philosophy", "level": 700, "book_title": "Contemporary Political Philosophy", "author": "Kymlicka", "id": "P317.2", "type": "T"},
  {"num": 262, "course_code": "PHI 707", "course_title": "Political and Social Philosophy", "level": 700, "book_title": "A Theory of Justice", "author": "Rawls", "id": "N51", "type": "P"},
  {"num": 263, "course_code": "PHI 707", "course_title": "Political and Social Philosophy", "level": 700, "book_title": "eds., A Companion to Political Philosophy", "author": "Goodin & Pettit", "id": "P317.3", "type": "C"},
  {"num": 264, "course_code": "PHI 707", "course_title": "Political and Social Philosophy", "level": 700, "book_title": "Philosophy of Law", "author": "Tebbit", "id": "P317.1", "type": "T"},
  {"num": 265, "course_code": "PHI 707", "course_title": "Political and Social Philosophy", "level": 700, "book_title": "Philosophy of Social Science", "author": "Rosenberg & McIntyre", "id": "P316.1", "type": "T"},
  {"num": 266, "course_code": "PHI 708", "course_title": "Philosophy of Technology", "level": 700, "book_title": "eds., Human Enhancement", "author": "Savulescu & Bostrom", "id": "P105.1", "type": "C"},
  {"num": 267, "course_code": "PHI 708", "course_title": "Philosophy of Technology", "level": 700, "book_title": "ed., The Oxford Handbook of Philosophy of Technology, 2nd ed.", "author": "Vallor", "id": "P105.2", "type": "C"},
  {"num": 268, "course_code": "PHI 709", "course_title": "Feminist Philosophy and Race", "level": 700, "book_title": "eds., Feminist Theory: A Philosophical Anthology", "author": "Cudd & Andreasen", "id": "P106.2", "type": "A"},
  {"num": 269, "course_code": "PHI 709", "course_title": "Feminist Philosophy and Race", "level": 700, "book_title": "eds., The Cambridge Companion to Feminism in Philosophy", "author": "Fricker & Hornsby", "id": "P106.1", "type": "C"},
  {"num": 270, "course_code": "PHI 709", "course_title": "Feminist Philosophy and Race", "level": 700, "book_title": "Khader & Stone, eds., The Routledge Companion to Feminist Philosophy", "author": "Garry", "id": "P106.3", "type": "C"},
  {"num": 271, "course_code": "PHI 709", "course_title": "Feminist Philosophy and Race", "level": 700, "book_title": "ed., The Oxford Handbook of Philosophy and Race", "author": "Zack", "id": "P106.4", "type": "C"},
  {"num": 272, "course_code": "PHI 710", "course_title": "Education and Philosophical Writing", "level": 700, "book_title": "ed., Philosophy of Education: An Anthology", "author": "Curren", "id": "P103.2", "type": "A"},
  {"num": 273, "course_code": "PHI 710", "course_title": "Education and Philosophical Writing", "level": 700, "book_title": "ed., The Oxford Handbook of Philosophy of Education", "author": "Siegel", "id": "P104.2", "type": "C"},
  {"num": 274, "course_code": "PHI 710", "course_title": "Education and Philosophical Writing", "level": 700, "book_title": "Writing Philosophy", "author": "Watson", "id": "P104.1", "type": "T"}
];

export const LIBERAL_COURSES: CourseItem[] = [
  {"code": "HIS 101", "name": "Global History Frameworks", "start": 1, "end": 3},
  {"code": "HIS 102", "name": "The Historian's Craft", "start": 4, "end": 9},
  {"code": "PHI 101", "name": "Introduction to Philosophy", "start": 10, "end": 12},
  {"code": "PHI 102", "name": "Ethics and Philosophical Writing", "start": 13, "end": 15},
  {"code": "HIS 201", "name": "Near East and Hebrew Bible", "start": 16, "end": 18},
  {"code": "HUM 202", "name": "The Greek World", "start": 19, "end": 24},
  {"code": "PHI 203", "name": "Plato and Aristotle", "start": 25, "end": 30},
  {"code": "HUM 204", "name": "The Roman World", "start": 31, "end": 33},
  {"code": "MAT 205", "name": "Euclid and Formal Logic", "start": 34, "end": 35},
  {"code": "PHI 206", "name": "Classical Asian Philosophy", "start": 36, "end": 41},
  {"code": "HIS 207", "name": "Ancient India: History and Letters", "start": 42, "end": 44},
  {"code": "HIS 208", "name": "Ancient China: History and Texts", "start": 45, "end": 47},
  {"code": "HIS 301", "name": "Late Antique and Medieval Europe", "start": 48, "end": 54},
  {"code": "PHI 302", "name": "Medieval Christian Synthesis", "start": 55, "end": 60},
  {"code": "REL 303", "name": "Qur'an and Islamic Origins", "start": 61, "end": 65},
  {"code": "HUM 304", "name": "Islamic Thought and Letters", "start": 66, "end": 70},
  {"code": "HIS 305", "name": "Ottoman, Persianate, Sanskrit Worlds", "start": 71, "end": 74},
  {"code": "HIS 306", "name": "Buddhism, Silk Road, Steppe Empires", "start": 75, "end": 80},
  {"code": "HIS 307", "name": "China and Japan to 1800", "start": 81, "end": 86},
  {"code": "HIS 308", "name": "African Worlds to 1800", "start": 87, "end": 90},
  {"code": "HUM 309", "name": "Ancient and Indigenous Americas", "start": 91, "end": 94},
  {"code": "SCI 401", "name": "The Scientific Revolution", "start": 95, "end": 100},
  {"code": "PHI 402", "name": "Descartes and Modern Philosophy", "start": 101, "end": 104},
  {"code": "HIS 403", "name": "Early Modern Europe", "start": 105, "end": 109},
  {"code": "POL 404", "name": "Politics and Political Economy", "start": 110, "end": 114},
  {"code": "LIT 405", "name": "Renaissance and Early Modern Literature", "start": 115, "end": 118},
  {"code": "HIS 406", "name": "Global Early Modernity", "start": 119, "end": 122},
  {"code": "HIS 407", "name": "Conquest and Colonial Americas", "start": 123, "end": 126},
  {"code": "HIS 408", "name": "Atlantic Revolutions", "start": 127, "end": 131},
  {"code": "PHI 501", "name": "Kant and Nietzsche", "start": 132, "end": 137},
  {"code": "HUM 502", "name": "Marx, Mill, Darwin, Freud", "start": 138, "end": 141},
  {"code": "LIT 503", "name": "Nineteenth-Century Novel and Drama", "start": 142, "end": 144},
  {"code": "HIS 504", "name": "Gender in History", "start": 145, "end": 148},
  {"code": "HIS 505", "name": "The Global Nineteenth Century", "start": 149, "end": 152},
  {"code": "HIS 506", "name": "Industry, Capitalism, Technology", "start": 153, "end": 156},
  {"code": "HIS 507", "name": "Global Environmental History", "start": 157, "end": 163},
  {"code": "HIS 508", "name": "Oceans and Migration", "start": 164, "end": 168},
  {"code": "HIS 509", "name": "Slavery and African Diaspora", "start": 169, "end": 173},
  {"code": "HIS 510", "name": "Histories of the Americas", "start": 174, "end": 179},
  {"code": "HIS 511", "name": "Settler Colonialism and Genocide", "start": 180, "end": 183},
  {"code": "HIS 601", "name": "Twentieth-Century War and Order", "start": 184, "end": 187},
  {"code": "HIS 602", "name": "Revolution, Totalitarianism, Holocaust", "start": 188, "end": 192},
  {"code": "POL 603", "name": "Cold War and Global Order", "start": 193, "end": 195},
  {"code": "HIS 604", "name": "Modern East Asia", "start": 196, "end": 202},
  {"code": "HIS 605", "name": "South Asia and Middle East", "start": 203, "end": 207},
  {"code": "HIS 606", "name": "Africa and Decolonization", "start": 208, "end": 211},
  {"code": "HIS 607", "name": "Postcolonial Intellectual History", "start": 212, "end": 217},
  {"code": "HIS 608", "name": "Historical Theory and Critique", "start": 218, "end": 222},
  {"code": "PHI 609", "name": "Dewey, Wittgenstein, Arendt", "start": 223, "end": 228},
  {"code": "PHI 610", "name": "Continental Philosophy and Aesthetics", "start": 229, "end": 232},
  {"code": "PHI 611", "name": "Japanese Philosophy", "start": 233, "end": 234},
  {"code": "LIT 612", "name": "Postcolonial Global Fiction", "start": 235, "end": 236},
  {"code": "SCI 613", "name": "Science, Technology, Environment", "start": 237, "end": 239},
  {"code": "PHI 701", "name": "Philosophy of Science", "start": 240, "end": 243},
  {"code": "PHI 702", "name": "Ethics and Metaethics", "start": 244, "end": 246},
  {"code": "PHI 703", "name": "Metaphysics", "start": 247, "end": 249},
  {"code": "PHI 704", "name": "Epistemology", "start": 250, "end": 252},
  {"code": "PHI 705", "name": "Mind, Language, Action", "start": 253, "end": 257},
  {"code": "PHI 706", "name": "Philosophy of Logic and Mathematics", "start": 258, "end": 260},
  {"code": "PHI 707", "name": "Political and Social Philosophy", "start": 261, "end": 265},
  {"code": "PHI 708", "name": "Philosophy of Technology", "start": 266, "end": 267},
  {"code": "PHI 709", "name": "Feminist Philosophy and Race", "start": 268, "end": 271},
  {"code": "PHI 710", "name": "Education and Philosophical Writing", "start": 272, "end": 274}
];

export const LIBERAL_LEVELS: Record<string, LevelItem> = {
  "100": { name: "Foundations (001–015)", desc: "Global frameworks, historian's craft, intro philosophy, ethics", color: "#FFD6E0" },
  "200": { name: "Antiquity and Classical Worlds (016–047)", desc: "Near East, Greece, Rome, India, China, Euclid", color: "#BAE1FF" },
  "300": { name: "Medieval and Early Worlds (048–094)", desc: "Christian, Islamic, Buddhist, African, American worlds to 1800", color: "#C1E1C1" },
  "400": { name: "Early Modern (095–131)", desc: "Scientific revolution, modern philosophy, Atlantic revolutions", color: "#FFDFBA" },
  "500": { name: "Long Nineteenth Century (132–183)", desc: "Kant to Freud, empire, capital, slavery, gender", color: "#E2BAFF" },
  "600": { name: "Twentieth Century and Critique (184–239)", desc: "World wars, decolonization, postcolonial thought", color: "#FFFFBA" },
  "700": { name: "Advanced Specialization (240–274)", desc: "Analytic fields, political philosophy, capstone", color: "#D6C7FF" }
};

export const PASTEL_PALETTE = [
  "#FFD6E0",
  "#BAE1FF",
  "#E2BAFF",
  "#FFFFBA",
  "#FFDFBA",
  "#C1E1C1",
  "#C4FAF8",
  "#D6C7FF",
  "#FFC8A2",
  "#B5EAD7"
];

export function getPastel(key: string): string {
  let h = 0;
  for (let i = 0; i < key.length; i++) {
    h = (h * 31 + key.charCodeAt(i)) % PASTEL_PALETTE.length;
  }
  return PASTEL_PALETTE[h];
}

export function getHanoiSunsetSunrise(date: Date): { sunrise: number; sunset: number } {
  const lat = 21.0285;
  const lng = 105.8342;
  const zenith = 90.833;
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const D = Math.floor((date.getTime() - startOfYear.getTime()) / 86400000);
  const lngHour = lng / 15;
  const t_rise = D + ((6 - lngHour) / 24);
  const t_set = D + ((18 - lngHour) / 24);

  function calc(t: number, isRise: boolean): number | null {
    const M = (0.9856 * t) - 3.289;
    let L = M + (1.916 * Math.sin((M * Math.PI) / 180)) + (0.02 * Math.sin((2 * M * Math.PI) / 180)) + 282.634;
    L = ((L % 360) + 360) % 360;
    let RA = (Math.atan(0.91764 * Math.tan((L * Math.PI) / 180)) * 180) / Math.PI;
    RA = ((RA % 360) + 360) % 360;
    const Lquad = Math.floor(L / 90) * 90;
    const RAquad = Math.floor(RA / 90) * 90;
    RA = RA + (Lquad - RAquad);
    RA = RA / 15;
    const sinDec = 0.39782 * Math.sin((L * Math.PI) / 180);
    const cosDec = Math.cos(Math.asin(sinDec));
    const cosH = (Math.cos((zenith * Math.PI) / 180) - (sinDec * Math.sin((lat * Math.PI) / 180))) / (cosDec * Math.cos((lat * Math.PI) / 180));
    if (cosH > 1 || cosH < -1) return null;
    let H = isRise ? 360 - (Math.acos(cosH) * 180) / Math.PI : (Math.acos(cosH) * 180) / Math.PI;
    H = H / 15;
    const T = H + RA - (0.06571 * t) - 6.622;
    let UT = T - lngHour;
    UT = ((UT % 24) + 24) % 24;
    return UT;
  }

  const UT_rise = calc(t_rise, true);
  const UT_set = calc(t_set, false);
  if (UT_rise === null || UT_set === null) return { sunrise: 6, sunset: 18 };
  return { sunrise: (UT_rise + 7) % 24, sunset: (UT_set + 7) % 24 };
}

export function shouldHanoiBeDarkNow(): boolean {
  const now = new Date();
  const hm = now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Ho_Chi_Minh', hour12: false, hour: '2-digit', minute: '2-digit' });
  const [h, m] = hm.split(':').map(Number);
  const hanoiHour = h + m / 60;
  const times = getHanoiSunsetSunrise(now);
  if (times.sunset > times.sunrise) {
    return hanoiHour >= times.sunset || hanoiHour < times.sunrise;
  } else {
    return hanoiHour >= times.sunset && hanoiHour < times.sunrise;
  }
}

export function fmtHanoiDate(d: Date): string {
  return d.toLocaleDateString('en-GB', {
    timeZone: 'Asia/Ho_Chi_Minh',
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}

export function fmtHanoiTime(d: Date): string {
  return d.toLocaleTimeString('en-GB', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}
