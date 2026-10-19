export interface SynthesisEssay {
  id: string;
  spineBookId: string;
  spineBookTitle: string;
  spineBookAuthor: string;
  courseCode: string;
  courseTitle: string;
  stage: number;
  title: string;
  prompt: string;
  priorBookIds: string[];
  analyticalMode: string;
  wordCountGuideline: string;
  rubricCriteria: string[];
}

export const SYNTHESIS_ESSAYS: SynthesisEssay[] = [
  {
    "id": "ESSAY-ORIG-018",
    "spineBookId": "ORIG-018",
    "spineBookTitle": "The Hebrew Bible (Tanakh)",
    "spineBookAuthor": "Traditional",
    "courseCode": "GB 101",
    "courseTitle": "The Opening Seminar",
    "stage": 100,
    "title": "The Inaugural Covenant: Creation, Law, and the Moral Universe in the Tanakh",
    "prompt": "As the inaugural cornerstone of the Liberal Studies curriculum, The Hebrew Bible (Tanakh) articulates an unprecedented synthesis of monotheistic cosmology, historical teleology, and covenantal ethics. Analyze how the Genesis cosmogony, the Mosaic legal code (Torah), and the prophetic critique (Nevi'im) construct a distinct moral ontology. Examine how the covenant (berit) reconfigures human agency, divine justice, and historical obligation as the foundational anchor of the Western intellectual tradition, without reliance on prior textual precursors.",
    "priorBookIds": [],
    "analyticalMode": "Foundational Theodicy and Covenantal Ethics",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Analysis of covenantal theology (berit) and divine justice versus mythological arbitrariness",
      "Close examination of ethical obligation, the Ten Commandments, and prophetic righteousness",
      "Evaluation of literary structure, historical narrative, and moral responsibility as the curriculum's foundational anchor"
    ]
  },
  {
    "id": "ESSAY-ORIG-020",
    "spineBookId": "ORIG-020",
    "spineBookTitle": "Iliad",
    "spineBookAuthor": "Homer",
    "courseCode": "GB 101",
    "courseTitle": "The Opening Seminar",
    "stage": 100,
    "title": "The Heroic Code and Divine Righteousness: Mortality, Honor, and Covenant",
    "prompt": "In Homer's Iliad, Achilles' wrath (mênis) confronts the inexorable tragedy of human mortality and cosmic indifference, where honor (timê) and glory (kleos) are purchased with blood. Contrast this heroic ethos with the covenantal theology of The Hebrew Bible (Tanakh), examining how each text conceptualizes the relationship between divine sovereignty, human obedience, and the moral meaning of suffering.",
    "priorBookIds": [
      "ORIG-018"
    ],
    "analyticalMode": "Comparative Ethics and Theological Ontology",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Textual analysis of Achilles' rejection of Agamemnon's gifts versus biblical covenantal stipulations",
      "Rigorous contrast between Homeric theophany and biblical divine command",
      "Examination of how human finitude and suffering are invested with meaning in both traditions"
    ]
  },
  {
    "id": "ESSAY-ORIG-021",
    "spineBookId": "ORIG-021",
    "spineBookTitle": "Odyssey",
    "spineBookAuthor": "Homer",
    "courseCode": "GB 101",
    "courseTitle": "The Opening Seminar",
    "stage": 100,
    "title": "Nostos, Polytropia, and the Moral Order of the Cosmos",
    "prompt": "While the Iliad examines battlefield mortality and existential fury, the Odyssey centers on homecoming (nostos), endurance, and cunning intelligence (mêtis/polytropia). Analyze how Odysseus' reclamation of Ithaca reconfigures justice and cosmic order in comparison to the covenantal restoration found in the prophetic narratives of The Hebrew Bible and the tragic fatalism of the Iliad.",
    "priorBookIds": [
      "ORIG-018",
      "ORIG-020"
    ],
    "analyticalMode": "Narrative Ethics and Cosmic Justice",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Analysis of Odysseus' moral agency compared to Achilles' tragic intransigence",
      "Evaluation of the restoration of domestic order alongside biblical prophetic visions of return",
      "Examination of divine justice (dikê) in Homer versus covenantal justice (tsedeq) in the Tanakh"
    ]
  },
  {
    "id": "ESSAY-ORIG-012",
    "spineBookId": "ORIG-012",
    "spineBookTitle": "Introduction to Philosophy",
    "spineBookAuthor": "Perry, Bratman & Fischer, eds.",
    "courseCode": "PHI 101",
    "courseTitle": "Introduction to Philosophy",
    "stage": 100,
    "title": "From Mythos to Logos: Rational Inquiry, Epistemic Skepticism, and the Soul",
    "prompt": "Drawing upon the foundational philosophical problems presented in Perry, Bratman & Fischer's Introduction to Philosophy, evaluate how formal analytical inquiry (epistemology, personal identity, and the problem of evil) marks a methodological rupture from the mythopoetic explanations of Homer (Iliad, Odyssey) and the scriptural revelations of The Hebrew Bible.",
    "priorBookIds": [
      "ORIG-018",
      "ORIG-020",
      "ORIG-021"
    ],
    "analyticalMode": "Epistemological Reconstruction and Methodological Shift",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Formulation of the transition from narrative/theological authority to dialectical reason",
      "Critique of personal identity and moral accountability across Homeric and philosophical models",
      "Analysis of the problem of unjustified suffering in systematic philosophy versus the Book of Job"
    ]
  },
  {
    "id": "ESSAY-ORIG-014",
    "spineBookId": "ORIG-014",
    "spineBookTitle": "Ethical Theory: An Anthology",
    "spineBookAuthor": "Shafer-Landau, ed.",
    "courseCode": "PHI 102",
    "courseTitle": "Ethics and Philosophical Writing",
    "stage": 100,
    "title": "Normative Grounds of Obligation: Deontology, Teleology, and Moral Sentiment",
    "prompt": "Using the selections in Shafer-Landau's Ethical Theory: An Anthology, construct a critical dialogue between modern normative frameworks (virtue ethics, consequentialism, contractualism) and the moral architectures encountered earlier in the curriculum. How do secular philosophical accounts of obligation challenge or formalize both Homeric shame culture and biblical divine command theory?",
    "priorBookIds": [
      "ORIG-018",
      "ORIG-020",
      "ORIG-021",
      "ORIG-012"
    ],
    "analyticalMode": "Normative Ethics and Metaethical Comparison",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Comparative evaluation of divine command theory versus autonomous rational ethics",
      "Contrast between Homeric honor-based virtue and modern virtue ethics / utilitarianism",
      "Coherent argumentation regarding the grounding of moral obligations"
    ]
  },
  {
    "id": "ESSAY-ORIG-004",
    "spineBookId": "ORIG-004",
    "spineBookTitle": "The Historian's Craft",
    "spineBookAuthor": "Bloch",
    "courseCode": "HIS 102",
    "courseTitle": "The Historian's Craft",
    "stage": 100,
    "title": "The Historian's Craft: Evidence, Time, and the Reconstruction of the Past",
    "prompt": "In The Historian's Craft, Marc Bloch argues that history is the \"science of men in time,\" demanding critical cross-examination of involuntary evidence rather than passive chronicle. Analyze Bloch's historical methodology against the historiographical assumptions embedded in the biblical historical books (Tanakh) and Homeric epic memory, demonstrating how historical criticism establishes epistemic validity.",
    "priorBookIds": [
      "ORIG-018",
      "ORIG-020",
      "ORIG-021",
      "ORIG-012"
    ],
    "analyticalMode": "Historiographical Epistemology and Source Criticism",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Contrast between Bloch's critical method and providential / epic historical narrative",
      "Analysis of involuntary testimony and historical witnesses",
      "Evaluation of the epistemic status of historical truth versus philosophical certainty"
    ]
  },
  {
    "id": "ESSAY-ORIG-005",
    "spineBookId": "ORIG-005",
    "spineBookTitle": "The Cheese and the Worms",
    "spineBookAuthor": "Ginzburg",
    "courseCode": "HIS 102",
    "courseTitle": "The Historian's Craft",
    "stage": 100,
    "title": "Microhistory, Cosmology, and Popular Belief: The Menocchio Case",
    "prompt": "In The Cheese and the Worms, Carlo Ginzburg investigates the inquisitorial trials of the miller Menocchio to unearth popular culture and peasant cosmogony. Compare Ginzburg's microhistorical method with Bloch's overarching structural craft (The Historian's Craft), evaluating how both authors challenge monolithic interpretations of religious authority originally articulated in scriptural and philosophical traditions.",
    "priorBookIds": [
      "ORIG-018",
      "ORIG-004"
    ],
    "analyticalMode": "Microhistorical Analysis and Cultural Epistemology",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Critique of elite versus popular appropriations of sacred texts",
      "Methodological comparison between Ginzburg's microhistory and Bloch's comparative method",
      "Analysis of inquisitorial documentation as historical evidence"
    ]
  },
  {
    "id": "ESSAY-ORIG-007",
    "spineBookId": "ORIG-007",
    "spineBookTitle": "Silencing the Past",
    "spineBookAuthor": "Trouillot",
    "courseCode": "HIS 102",
    "courseTitle": "The Historian's Craft",
    "stage": 100,
    "title": "Power, Silence, and the Production of History",
    "prompt": "Michel-Rolph Trouillot demonstrates in Silencing the Past that historical production is inherently entwined with power at four distinct moments: the making of sources, the making of archives, the making of narratives, and the making of history. Interrogate Trouillot's critique of historical silencing in light of Marc Bloch's craft, Homer's selective epic commemorations, and biblical canonical formation.",
    "priorBookIds": [
      "ORIG-018",
      "ORIG-020",
      "ORIG-004",
      "ORIG-005"
    ],
    "analyticalMode": "Critical Historiography and Power Analysis",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Application of Trouillot's four silences to early foundational texts and archives",
      "Dialogue with Bloch and Ginzburg on archival bias and subaltern voices",
      "Philosophical reflection on memory, erasure, and historical responsibility"
    ]
  },
  {
    "id": "ESSAY-N57",
    "spineBookId": "N57",
    "spineBookTitle": "The Epic of Gilgamesh",
    "spineBookAuthor": "Anonymous",
    "courseCode": "HIS 201",
    "courseTitle": "The Ancient Near East",
    "stage": 200,
    "title": "The Finitude of Kingship: Mortality and Civilization in Gilgamesh",
    "prompt": "The Epic of Gilgamesh explores the agony of Enkidu's death and Gilgamesh's futile quest for bodily immortality. Synthesize this Mesopotamian meditation on civilization, friendship, and mortality with the Homeric tragic vision in the Iliad and the covenantal anthropology of Genesis in The Hebrew Bible, examining how early civilizations reconciled human grandeur with unavoidable extinction.",
    "priorBookIds": [
      "ORIG-018",
      "ORIG-020"
    ],
    "analyticalMode": "Archaic Epic Comparison and Existential Anthropology",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Comparative analysis of Gilgamesh's and Achilles' responses to the death of their companions",
      "Contrast between the Mesopotamian underworld and Sheol/Hades",
      "Examination of urban civilization versus wild nature in archaic thought"
    ]
  },
  {
    "id": "ESSAY-ORIG-022",
    "spineBookId": "ORIG-022",
    "spineBookTitle": "Histories",
    "spineBookAuthor": "Herodotus",
    "courseCode": "HUM 202",
    "courseTitle": "The Greek World",
    "stage": 200,
    "title": "Inquiry into the Human Condition: Herodotus, Epic Memory, and Cultural Pluralism",
    "prompt": "Herodotus opens his Histories claiming to preserve the memory of great deeds while investigating the causes of conflict between Greeks and non-Greeks. Evaluate how Herodotus transforms Homeric epic storytelling and archaic chronicles into an empirical inquiry (historiê) of human customs, fortune (tychê), and hubris, synthesizing his approach with Bloch's historical craft.",
    "priorBookIds": [
      "ORIG-020",
      "ORIG-021",
      "ORIG-004"
    ],
    "analyticalMode": "Comparative Historiography and Cultural Theory",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Differentiation of Herodotean historiê from epic kleos and poetic myth",
      "Analysis of custom (nomos) as \"king of all\" across Persian, Egyptian, and Greek perspectives",
      "Evaluation of divine retribution (nemesis) and human causality"
    ]
  },
  {
    "id": "ESSAY-ORIG-023",
    "spineBookId": "ORIG-023",
    "spineBookTitle": "The Theban Plays",
    "spineBookAuthor": "Sophocles",
    "courseCode": "HUM 202",
    "courseTitle": "The Greek World",
    "stage": 200,
    "title": "Power, Realpolitik, and Human Nature in Thucydides",
    "prompt": "Thucydides explicitly claims his History of the Peloponnesian War is a possession for all time (ktêma es aiei) because human nature remains constant. Contrast Thucydides' rigorous political realism, speech-act reconstructions, and clinical diagnosis of stasis (civil strife) with Herodotus' ethnographic inquiry and Homer's heroic worldview.",
    "priorBookIds": [
      "ORIG-020",
      "ORIG-022"
    ],
    "analyticalMode": "Political Realism and Historiographical Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Detailed analysis of the Melian Dialogue and the Athenian justification of empire",
      "Contrast between Thucydidean secular political causality and Herodotean divine envy",
      "Critique of the collapse of democratic discourse during plague and revolution"
    ]
  },
  {
    "id": "ESSAY-ORIG-024",
    "spineBookId": "ORIG-024",
    "spineBookTitle": "History of the Peloponnesian War",
    "spineBookAuthor": "Thucydides",
    "courseCode": "HUM 202",
    "courseTitle": "The Greek World",
    "stage": 200,
    "title": "Fate, Hubris, and Civic Crisis in Greek Tragedy",
    "prompt": "Drawing upon Greek Tragedies (Sophocles, Euripides), examine how Athenian drama interrogates the conflicting claims of kinship, civic law, and divine command. Contrast the tragic dilemmas of Antigone and Oedipus with the moral obligations of biblical covenant (Tanakh) and the heroic imperatives of the Homeric epic.",
    "priorBookIds": [
      "ORIG-018",
      "ORIG-020",
      "ORIG-023"
    ],
    "analyticalMode": "Dramatic Ethics and Legal Conflict",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Contrast between divine/unwritten law in Antigone and biblical Torah",
      "Analysis of tragic knowledge (pathei mathos) versus epic prowess",
      "Evaluation of the political resonance of tragedy in democratic Athens after Thucydides"
    ]
  },
  {
    "id": "ESSAY-N56",
    "spineBookId": "N56",
    "spineBookTitle": "Oresteia",
    "spineBookAuthor": "Aeschylus",
    "courseCode": "HUM 202",
    "courseTitle": "The Greek World",
    "stage": 200,
    "title": "From Blood Vengeance to Civic Justice: Aeschylus' Oresteia",
    "prompt": "Aeschylus' Oresteia traces the transition from the private vendetta of the Furies to the civic jurisprudence of the Areopagus under Athena's guidance. Synthesize this transformation with the legal codes of The Hebrew Bible and Thucydides' portrait of legal breakdown in Corcyra, analyzing whether civic justice successfully redeems archaic violence.",
    "priorBookIds": [
      "ORIG-018",
      "ORIG-020",
      "ORIG-023",
      "ORIG-024"
    ],
    "analyticalMode": "Jurisprudence and Mythological Rationalization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Transformation of archaic retribution into institutionalized civic trial",
      "Comparison with biblical lex talionis and cities of refuge",
      "Assessment of the gender dynamics and patriarchal resolution of the trial of Orestes"
    ]
  },
  {
    "id": "ESSAY-ORIG-026",
    "spineBookId": "ORIG-026",
    "spineBookTitle": "Readings in Ancient Greek Philosophy",
    "spineBookAuthor": "Cohen, Curd & Reeve, eds.",
    "courseCode": "PHI 203",
    "courseTitle": "Plato and Aristotle",
    "stage": 200,
    "title": "The Examined Life and the Athenian Polis: The Trial and Death of Socrates",
    "prompt": "In Plato's Apology, Crito, and Phaedo, Socrates defines philosophy as care of the soul (epimeleia psyches) and preparation for death, refusing to compromise his divine calling before the Athenian jury. Reconstruct Socrates' defense against the background of the Peloponnesian War (Thucydides) and the traditional piety of Homeric and tragic literature.",
    "priorBookIds": [
      "ORIG-020",
      "ORIG-023",
      "ORIG-024"
    ],
    "analyticalMode": "Philosophical Apology and Political Philosophy",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Contrast between Socratic elenchus and Sophistic rhetoric in Thucydides",
      "Socrates' conception of citizenship and obedience to law in Crito versus Antigone",
      "The philosophical redefinition of virtue (aretê) against traditional aristocratic honor"
    ]
  },
  {
    "id": "ESSAY-ORIG-027",
    "spineBookId": "ORIG-027",
    "spineBookTitle": "Complete Works (Selected Dialogues)",
    "spineBookAuthor": "Plato (Cooper, ed.)",
    "courseCode": "PHI 203",
    "courseTitle": "Plato and Aristotle",
    "stage": 200,
    "title": "The Architecture of the Just Soul and the Kallipolis: Plato's Republic",
    "prompt": "In the Republic, Plato constructs the ideal city in speech (Kallipolis) through a rigorous analogy between the tripartite soul and the tripartite state, culminating in the rule of the philosopher-king and the Allegory of the Cave. Critique Plato's vision of justice against the political realities of Thucydides and the archaic covenantal society of The Hebrew Bible.",
    "priorBookIds": [
      "ORIG-018",
      "ORIG-023",
      "ORIG-026"
    ],
    "analyticalMode": "Systematic Political Philosophy and Epistemic Metaphysics",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Critique of Thrasymachus' definition of justice alongside the Melian Dialogue",
      "Analysis of the Theory of Forms and the Cave as a departure from poetic mimesis",
      "Comparative evaluation of Plato's philosopher-king with biblical prophetic leadership"
    ]
  },
  {
    "id": "ESSAY-ORIG-029",
    "spineBookId": "ORIG-029",
    "spineBookTitle": "The Complete Works of Aristotle (Selections)",
    "spineBookAuthor": "Aristotle (Barnes, ed.)",
    "courseCode": "PHI 203",
    "courseTitle": "Plato and Aristotle",
    "stage": 200,
    "title": "Teleology, Eudaimonia, and the Polis: Aristotle's Ethics and Politics",
    "prompt": "Aristotle defines human flourishing (eudaimonia) as an activity of the soul in accordance with complete virtue, arguing in the Politics that the human being is by nature a political animal (zôon politikon). Contrast Aristotle's teleological ethics with Plato's transcendent Form of the Good (Republic) and the deontological and consequentialist theories studied in modern ethics (Shafer-Landau).",
    "priorBookIds": [
      "ORIG-014",
      "ORIG-026",
      "ORIG-027"
    ],
    "analyticalMode": "Teleological Ethics and Political Ontology",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Contrast between Aristotelian immanent teleology and Platonic transcendent Forms",
      "Analysis of the doctrine of the mean and phronêsis (practical wisdom)",
      "Critical assessment of Aristotle's natural teleology regarding women, slaves, and citizenship"
    ]
  },
  {
    "id": "ESSAY-ORIG-032",
    "spineBookId": "ORIG-032",
    "spineBookTitle": "Aeneid",
    "spineBookAuthor": "Virgil",
    "courseCode": "HUM 204",
    "courseTitle": "The Roman World",
    "stage": 200,
    "title": "Empire, Pietas, and the Burden of Destiny: Virgil's Aeneid",
    "prompt": "Virgil's Aeneid appropriates Homeric epic to provide an ideological and mythological foundation for Augustan Rome, casting Aeneas as an emblem of dutiful devotion (pietas) subordinated to historical destiny. Synthesize Virgil's tragic celebration of imperium with Homer's individualistic Achilles (Iliad), Thucydides' critique of imperial hubris, and Plato's philosopher-state.",
    "priorBookIds": [
      "ORIG-020",
      "ORIG-021",
      "ORIG-023",
      "ORIG-027"
    ],
    "analyticalMode": "Epic Ideology and Imperial Theology",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "The transformation of Homeric heroic timê into Roman imperial pietas and labor",
      "The cost of empire illustrated through the tragedies of Dido and Turnus",
      "Virgil's historical teleology contrasted with Thucydidean cyclical realism"
    ]
  },
  {
    "id": "ESSAY-ORIG-033",
    "spineBookId": "ORIG-033",
    "spineBookTitle": "The New Testament",
    "spineBookAuthor": "Traditional",
    "courseCode": "HUM 204",
    "courseTitle": "The Roman World",
    "stage": 200,
    "title": "Metamorphosis, Eros, and Cosmic Instability: Ovid versus the Epic Tradition",
    "prompt": "In the Metamorphoses, Ovid presents a universe characterized by perpetual flux, tyrannical divine lust, and bodily transformation. Interrogate Ovid's subversive poetic cosmology as a direct challenge to Virgil's teleological Roman destiny (Aeneid), Homer's heroic cosmos (Iliad), and the theological creation narratives of Genesis (Tanakh).",
    "priorBookIds": [
      "ORIG-018",
      "ORIG-020",
      "ORIG-032"
    ],
    "analyticalMode": "Poetic Ontology and Political Subversion",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Comparative analysis of cosmogony: Ovid's chaos/transformation versus Genesis and Hesiod",
      "Ovid's portrait of capricious divine authority as veiled political critique of Augustan power",
      "The instability of personal identity in Ovid contrasted with Homeric epic integrity"
    ]
  },
  {
    "id": "ESSAY-ORIG-034",
    "spineBookId": "ORIG-034",
    "spineBookTitle": "Elements",
    "spineBookAuthor": "Euclid",
    "courseCode": "MAT 205",
    "courseTitle": "Euclid and Formal Logic",
    "stage": 200,
    "title": "Axiomatic Deduction and the Synthetic A Priori: Euclid's Elements",
    "prompt": "Euclid's Elements establishes the paradigm of deductive mathematical demonstration, deriving complex geometrical truths from a minimal set of definitions, postulates, and common notions. Analyze the epistemic significance of the Euclidean method for philosophical certainty, comparing its rigorous demonstration with Platonic dialectic (Republic) and formal ethical reasoning (Shafer-Landau).",
    "priorBookIds": [
      "ORIG-014",
      "ORIG-026",
      "ORIG-027"
    ],
    "analyticalMode": "Mathematical Epistemology and Deductive Method",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Analysis of Euclid's axiomatic method and the fifth postulate",
      "Plato's use of geometry in Meno/Republic as a bridge to noesis and the Forms",
      "The historical impact of Euclidean deduction on concepts of universal, necessary truth"
    ]
  },
  {
    "id": "ESSAY-ORIG-036",
    "spineBookId": "ORIG-036",
    "spineBookTitle": "Classics of Asian Philosophy",
    "spineBookAuthor": "Kupperman, ed.",
    "courseCode": "PHI 206",
    "courseTitle": "Classical Asian Philosophy",
    "stage": 200,
    "title": "Dharma, Nishkama Karma, and Transcendent Duty in the Bhagavad Gita",
    "prompt": "In the Bhagavad Gita, Krishna instructs Arjuna on selfless action (nishkama karma), devotion (bhakti), and cosmic duty (svadharma) in the midst of fratricidal battlefield despair. Compare Arjuna's ethical crisis with Achilles' withdrawal in the Iliad and Socrates' adherence to moral duty in Plato's Crito, evaluating how different civilizations ground action in cosmic order.",
    "priorBookIds": [
      "ORIG-018",
      "ORIG-020",
      "ORIG-026",
      "ORIG-027"
    ],
    "analyticalMode": "Comparative Duty Ethics and Metaphysics of Action",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Contrast between nishkama karma and Western consequentialist / deontological frameworks",
      "Arjuna's moral grief compared to Achilles' wrath and heroic pride",
      "The theophany of Vishvarupa contrasted with the biblical theophany in Job / Exodus"
    ]
  },
  {
    "id": "ESSAY-ORIG-037",
    "spineBookId": "ORIG-037",
    "spineBookTitle": "Analects",
    "spineBookAuthor": "Confucius (Slingerland, tr.)",
    "courseCode": "PHI 206",
    "courseTitle": "Classical Asian Philosophy",
    "stage": 200,
    "title": "Ritual, Filial Piety, and Moral Cultivation: Confucius' Analects",
    "prompt": "Confucius anchors human flourishing and social harmony in ritual propriety (li), humaneness (ren), and the self-cultivation of the exemplary person (junzi). Contrast the Ruist vision of virtuous governance through moral radiance with Plato's philosopher-ruler (Republic), Aristotle's virtue ethics (Ethics), and biblical covenantal law (Tanakh).",
    "priorBookIds": [
      "ORIG-018",
      "ORIG-027",
      "ORIG-029",
      "ORIG-036"
    ],
    "analyticalMode": "Comparative Virtue Ethics and Social Philosophy",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "The role of ritual (li) as embodied ethical discipline versus Platonic abstract Forms",
      "Governance by moral authority (de) versus rule by legal punishment (fa) or coercion",
      "Filial piety (xiao) and familial embeddedness versus universal philosophical claims"
    ]
  },
  {
    "id": "ESSAY-ORIG-038",
    "spineBookId": "ORIG-038",
    "spineBookTitle": "Readings in Classical Chinese Philosophy",
    "spineBookAuthor": "Ivanhoe & Van Norden, eds.",
    "courseCode": "PHI 206",
    "courseTitle": "Classical Asian Philosophy",
    "stage": 200,
    "title": "Human Nature and the Sprouts of Goodness: Mencius",
    "prompt": "Mencius defends the innate goodness of human nature (xing shan), using the parable of the child at the well to argue that moral sprouts (four seeds) require benevolent political and agricultural nurturing. Contrast Mencius' moral optimism with Thucydides' pessimistic assessment of human nature during war and the biblical narrative of the human heart after Eden.",
    "priorBookIds": [
      "ORIG-018",
      "ORIG-023",
      "ORIG-037"
    ],
    "analyticalMode": "Philosophical Anthropology and Political Ethics",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Reconstruction of the Mencian debate on human nature and the four moral sprouts",
      "Contrast with Thucydidean realpolitik and biblical doctrine of original sin/corruption",
      "Mencius' doctrine of the Mandate of Heaven and the right to depose tyrannical rulers"
    ]
  },
  {
    "id": "ESSAY-ORIG-039",
    "spineBookId": "ORIG-039",
    "spineBookTitle": "The Bhagavad Gita",
    "spineBookAuthor": "Traditional (Olivelle, tr.)",
    "courseCode": "PHI 206",
    "courseTitle": "Classical Asian Philosophy",
    "stage": 200,
    "title": "The Dao, Spontaneity, and Skeptical Freedom in Classical Asian Philosophy",
    "prompt": "Synthesize the mystical and skeptical insights of Laozi's Daodejing and Zhuangzi's Inner Chapters with the Ruist humanism of Confucius and Mencius. How does Daoist non-action (wuwei) and perspective relativism challenge both Confucius' ritual order and the rationalist teleology of Greek philosophy (Plato, Aristotle)?",
    "priorBookIds": [
      "ORIG-027",
      "ORIG-029",
      "ORIG-037",
      "ORIG-038"
    ],
    "analyticalMode": "Comparative Metaphysics and Epistemic Skepticism",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Detailed contrast between Confucian artificial cultivation and Daoist natural uncarved block (pu)",
      "Zhuangzi's butterfly dream and skepticism compared with Socratic ignorance and Plato's Cave",
      "Political critique of statecraft and war in the Daodejing"
    ]
  },
  {
    "id": "ESSAY-ORIG-042",
    "spineBookId": "ORIG-042",
    "spineBookTitle": "Early India",
    "spineBookAuthor": "Thapar",
    "courseCode": "HIS 207",
    "courseTitle": "Ancient India: History and Letters",
    "stage": 200,
    "title": "Cumulative Synthesis: Early India in Dialogue with The Epic of Gilgamesh",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Thapar's Early India (HIS 207), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Epic of Gilgamesh and The Historian's Craft. Focus your inquiry on how Early India reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N57",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Early India",
      "Substantive synthesis with preceding works (The Epic of Gilgamesh, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-043",
    "spineBookId": "ORIG-043",
    "spineBookTitle": "Arthashastra",
    "spineBookAuthor": "Kautilya",
    "courseCode": "HIS 207",
    "courseTitle": "Ancient India: History and Letters",
    "stage": 200,
    "title": "Cumulative Synthesis: Arthashastra in Dialogue with Early India",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Kautilya's Arthashastra (HIS 207), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Early India and The Historian's Craft. Focus your inquiry on how Arthashastra reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-042",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Arthashastra",
      "Substantive synthesis with preceding works (Early India, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-044",
    "spineBookId": "ORIG-044",
    "spineBookTitle": "Shakuntala",
    "spineBookAuthor": "Kalidasa",
    "courseCode": "HIS 207",
    "courseTitle": "Ancient India: History and Letters",
    "stage": 200,
    "title": "Cumulative Synthesis: Shakuntala in Dialogue with Arthashastra",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Kalidasa's Shakuntala (HIS 207), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Arthashastra and The Historian's Craft. Focus your inquiry on how Shakuntala reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-043",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Shakuntala",
      "Substantive synthesis with preceding works (Arthashastra, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-045",
    "spineBookId": "ORIG-045",
    "spineBookTitle": "The Early Chinese Empires",
    "spineBookAuthor": "Lewis",
    "courseCode": "HIS 208",
    "courseTitle": "Ancient China: History and Texts",
    "stage": 200,
    "title": "Cumulative Synthesis: The Early Chinese Empires in Dialogue with Shakuntala",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Lewis's The Early Chinese Empires (HIS 208), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Shakuntala and The Historian's Craft. Focus your inquiry on how The Early Chinese Empires reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-044",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Early Chinese Empires",
      "Substantive synthesis with preceding works (Shakuntala, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-046",
    "spineBookId": "ORIG-046",
    "spineBookTitle": "Records of the Grand Historian",
    "spineBookAuthor": "Sima Qian",
    "courseCode": "HIS 208",
    "courseTitle": "Ancient China: History and Texts",
    "stage": 200,
    "title": "Cumulative Synthesis: Records of the Grand Historian in Dialogue with The Early Chinese Empires",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Sima Qian's Records of the Grand Historian (HIS 208), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Early Chinese Empires and The Historian's Craft. Focus your inquiry on how Records of the Grand Historian reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-045",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Records of the Grand Historian",
      "Substantive synthesis with preceding works (The Early Chinese Empires, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-047",
    "spineBookId": "ORIG-047",
    "spineBookTitle": "The Art of War",
    "spineBookAuthor": "Sun Tzu",
    "courseCode": "HIS 208",
    "courseTitle": "Ancient China: History and Texts",
    "stage": 200,
    "title": "Cumulative Synthesis: The Art of War in Dialogue with Records of the Grand Historian",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Sun Tzu's The Art of War (HIS 208), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Records of the Grand Historian and The Historian's Craft. Focus your inquiry on how The Art of War reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-046",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Art of War",
      "Substantive synthesis with preceding works (Records of the Grand Historian, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-048",
    "spineBookId": "ORIG-048",
    "spineBookTitle": "The World of Late Antiquity",
    "spineBookAuthor": "Brown",
    "courseCode": "HIS 301",
    "courseTitle": "Late Antique and Medieval Europe",
    "stage": 300,
    "title": "Cumulative Synthesis: The World of Late Antiquity in Dialogue with The Art of War",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Brown's The World of Late Antiquity (HIS 301), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Art of War and The Historian's Craft. Focus your inquiry on how The World of Late Antiquity reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-047",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The World of Late Antiquity",
      "Substantive synthesis with preceding works (The Art of War, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-052",
    "spineBookId": "ORIG-052",
    "spineBookTitle": "Medieval Europe",
    "spineBookAuthor": "Wickham",
    "courseCode": "HIS 301",
    "courseTitle": "Late Antique and Medieval Europe",
    "stage": 300,
    "title": "Cumulative Synthesis: Medieval Europe in Dialogue with The World of Late Antiquity",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Wickham's Medieval Europe (HIS 301), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The World of Late Antiquity and The Historian's Craft. Focus your inquiry on how Medieval Europe reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-048",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Medieval Europe",
      "Substantive synthesis with preceding works (The World of Late Antiquity, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-056",
    "spineBookId": "ORIG-056",
    "spineBookTitle": "Confessions",
    "spineBookAuthor": "Augustine",
    "courseCode": "PHI 302",
    "courseTitle": "The Medieval Christian Synthesis",
    "stage": 300,
    "title": "Cumulative Synthesis: Confessions in Dialogue with The Bhagavad Gita",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Augustine's Confessions (PHI 302), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Bhagavad Gita and Introduction to Philosophy. Focus your inquiry on how Confessions reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-039",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Confessions",
      "Substantive synthesis with preceding works (The Bhagavad Gita, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-057",
    "spineBookId": "ORIG-057",
    "spineBookTitle": "Medieval Philosophy",
    "spineBookAuthor": "Marenbon",
    "courseCode": "PHI 302",
    "courseTitle": "The Medieval Christian Synthesis",
    "stage": 300,
    "title": "Cumulative Synthesis: Medieval Philosophy in Dialogue with Confessions",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Marenbon's Medieval Philosophy (PHI 302), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Confessions and Introduction to Philosophy. Focus your inquiry on how Medieval Philosophy reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-056",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Medieval Philosophy",
      "Substantive synthesis with preceding works (Confessions, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-058",
    "spineBookId": "ORIG-058",
    "spineBookTitle": "Basic Writings of Saint Thomas Aquinas",
    "spineBookAuthor": "Aquinas (Pegis, ed.)",
    "courseCode": "PHI 302",
    "courseTitle": "The Medieval Christian Synthesis",
    "stage": 300,
    "title": "Cumulative Synthesis: Basic Writings of Saint Thomas Aquinas in Dialogue with Medieval Philosophy",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Aquinas (Pegis, ed.)'s Basic Writings of Saint Thomas Aquinas (PHI 302), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Medieval Philosophy and Introduction to Philosophy. Focus your inquiry on how Basic Writings of Saint Thomas Aquinas reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-057",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Basic Writings of Saint Thomas Aquinas",
      "Substantive synthesis with preceding works (Medieval Philosophy, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-060",
    "spineBookId": "ORIG-060",
    "spineBookTitle": "Divine Comedy",
    "spineBookAuthor": "Dante",
    "courseCode": "PHI 302",
    "courseTitle": "The Medieval Christian Synthesis",
    "stage": 300,
    "title": "Cumulative Synthesis: Divine Comedy in Dialogue with Basic Writings of Saint Thomas Aquinas",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Dante's Divine Comedy (PHI 302), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Basic Writings of Saint Thomas Aquinas and Introduction to Philosophy. Focus your inquiry on how Divine Comedy reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-058",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Divine Comedy",
      "Substantive synthesis with preceding works (Basic Writings of Saint Thomas Aquinas, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-N78",
    "spineBookId": "N78",
    "spineBookTitle": "The Guide of the Perplexed (Selections)",
    "spineBookAuthor": "Maimonides",
    "courseCode": "PHI 302",
    "courseTitle": "The Medieval Christian Synthesis",
    "stage": 300,
    "title": "Cumulative Synthesis: The Guide of the Perplexed (Selections) in Dialogue with Divine Comedy",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Maimonides's The Guide of the Perplexed (Selections) (PHI 302), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Divine Comedy and Introduction to Philosophy. Focus your inquiry on how The Guide of the Perplexed (Selections) reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-060",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Guide of the Perplexed (Selections)",
      "Substantive synthesis with preceding works (Divine Comedy, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-062",
    "spineBookId": "ORIG-062",
    "spineBookTitle": "The Qur'an",
    "spineBookAuthor": "Traditional",
    "courseCode": "REL 303",
    "courseTitle": "Qur'an and Islamic Origins",
    "stage": 300,
    "title": "Cumulative Synthesis: The Qur'an in Dialogue with The Guide of the Perplexed (Selections)",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Traditional's The Qur'an (REL 303), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Guide of the Perplexed (Selections) and The Hebrew Bible (Tanakh). Focus your inquiry on how The Qur'an reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N78",
      "ORIG-018"
    ],
    "analyticalMode": "Comparative Analysis and Historical Reconstruction",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Qur'an",
      "Substantive synthesis with preceding works (The Guide of the Perplexed (Selections), The Hebrew Bible (Tanakh)) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in comparative analysis and historical reconstruction"
    ]
  },
  {
    "id": "ESSAY-ORIG-063",
    "spineBookId": "ORIG-063",
    "spineBookTitle": "The Prophet and the Age of the Caliphates",
    "spineBookAuthor": "Kennedy",
    "courseCode": "REL 303",
    "courseTitle": "Qur'an and Islamic Origins",
    "stage": 300,
    "title": "Cumulative Synthesis: The Prophet and the Age of the Caliphates in Dialogue with The Qur'an",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Kennedy's The Prophet and the Age of the Caliphates (REL 303), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Qur'an and The Hebrew Bible (Tanakh). Focus your inquiry on how The Prophet and the Age of the Caliphates reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-062",
      "ORIG-018"
    ],
    "analyticalMode": "Comparative Analysis and Historical Reconstruction",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Prophet and the Age of the Caliphates",
      "Substantive synthesis with preceding works (The Qur'an, The Hebrew Bible (Tanakh)) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in comparative analysis and historical reconstruction"
    ]
  },
  {
    "id": "ESSAY-ORIG-066",
    "spineBookId": "ORIG-066",
    "spineBookTitle": "Deliverance from Error",
    "spineBookAuthor": "al-Ghazali",
    "courseCode": "HUM 304",
    "courseTitle": "Islamic Thought and Letters",
    "stage": 300,
    "title": "Cumulative Synthesis: Deliverance from Error in Dialogue with The New Testament",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of al-Ghazali's Deliverance from Error (HUM 304), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The New Testament and Histories. Focus your inquiry on how Deliverance from Error reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-033",
      "ORIG-022"
    ],
    "analyticalMode": "Comparative Analysis and Historical Reconstruction",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Deliverance from Error",
      "Substantive synthesis with preceding works (The New Testament, Histories) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in comparative analysis and historical reconstruction"
    ]
  },
  {
    "id": "ESSAY-ORIG-067",
    "spineBookId": "ORIG-067",
    "spineBookTitle": "The Decisive Treatise and Epistle Dedicatory",
    "spineBookAuthor": "Averroes",
    "courseCode": "HUM 304",
    "courseTitle": "Islamic Thought and Letters",
    "stage": 300,
    "title": "Cumulative Synthesis: The Decisive Treatise and Epistle Dedicatory in Dialogue with Deliverance from Error",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Averroes's The Decisive Treatise and Epistle Dedicatory (HUM 304), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Deliverance from Error and Histories. Focus your inquiry on how The Decisive Treatise and Epistle Dedicatory reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-066",
      "ORIG-022"
    ],
    "analyticalMode": "Comparative Analysis and Historical Reconstruction",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Decisive Treatise and Epistle Dedicatory",
      "Substantive synthesis with preceding works (Deliverance from Error, Histories) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in comparative analysis and historical reconstruction"
    ]
  },
  {
    "id": "ESSAY-ORIG-068",
    "spineBookId": "ORIG-068",
    "spineBookTitle": "The Masnavi, Book One",
    "spineBookAuthor": "Rumi",
    "courseCode": "HUM 304",
    "courseTitle": "Islamic Thought and Letters",
    "stage": 300,
    "title": "Cumulative Synthesis: The Masnavi, Book One in Dialogue with The Decisive Treatise and Epistle Dedicatory",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Rumi's The Masnavi, Book One (HUM 304), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Decisive Treatise and Epistle Dedicatory and Histories. Focus your inquiry on how The Masnavi, Book One reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-067",
      "ORIG-022"
    ],
    "analyticalMode": "Comparative Analysis and Historical Reconstruction",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Masnavi, Book One",
      "Substantive synthesis with preceding works (The Decisive Treatise and Epistle Dedicatory, Histories) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in comparative analysis and historical reconstruction"
    ]
  },
  {
    "id": "ESSAY-ORIG-069",
    "spineBookId": "ORIG-069",
    "spineBookTitle": "Travels",
    "spineBookAuthor": "Ibn Battuta",
    "courseCode": "HUM 304",
    "courseTitle": "Islamic Thought and Letters",
    "stage": 300,
    "title": "Cumulative Synthesis: Travels in Dialogue with The Masnavi, Book One",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Ibn Battuta's Travels (HUM 304), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Masnavi, Book One and Histories. Focus your inquiry on how Travels reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-068",
      "ORIG-022"
    ],
    "analyticalMode": "Comparative Analysis and Historical Reconstruction",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Travels",
      "Substantive synthesis with preceding works (The Masnavi, Book One, Histories) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in comparative analysis and historical reconstruction"
    ]
  },
  {
    "id": "ESSAY-ORIG-070",
    "spineBookId": "ORIG-070",
    "spineBookTitle": "The Muqaddimah",
    "spineBookAuthor": "Ibn Khaldun (Rosenthal, tr.)",
    "courseCode": "HUM 304",
    "courseTitle": "Islamic Thought and Letters",
    "stage": 300,
    "title": "Cumulative Synthesis: The Muqaddimah in Dialogue with Travels",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Ibn Khaldun (Rosenthal, tr.)'s The Muqaddimah (HUM 304), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Travels and Histories. Focus your inquiry on how The Muqaddimah reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-069",
      "ORIG-022"
    ],
    "analyticalMode": "Comparative Analysis and Historical Reconstruction",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Muqaddimah",
      "Substantive synthesis with preceding works (Travels, Histories) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in comparative analysis and historical reconstruction"
    ]
  },
  {
    "id": "ESSAY-ORIG-075",
    "spineBookId": "ORIG-075",
    "spineBookTitle": "The Fundamental Wisdom of the Middle Way",
    "spineBookAuthor": "Nagarjuna (Garfield, tr.)",
    "courseCode": "HIS 306",
    "courseTitle": "Buddhism, Silk Road, Steppe Empires",
    "stage": 300,
    "title": "Cumulative Synthesis: The Fundamental Wisdom of the Middle Way in Dialogue with Medieval Europe",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Nagarjuna (Garfield, tr.)'s The Fundamental Wisdom of the Middle Way (HIS 306), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Medieval Europe and The Historian's Craft. Focus your inquiry on how The Fundamental Wisdom of the Middle Way reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-052",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Fundamental Wisdom of the Middle Way",
      "Substantive synthesis with preceding works (Medieval Europe, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-076",
    "spineBookId": "ORIG-076",
    "spineBookTitle": "Nagarjuna's Madhyamaka",
    "spineBookAuthor": "Westerhoff",
    "courseCode": "HIS 306",
    "courseTitle": "Buddhism, Silk Road, Steppe Empires",
    "stage": 300,
    "title": "Cumulative Synthesis: Nagarjuna's Madhyamaka in Dialogue with The Fundamental Wisdom of the Middle Way",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Westerhoff's Nagarjuna's Madhyamaka (HIS 306), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Fundamental Wisdom of the Middle Way and The Historian's Craft. Focus your inquiry on how Nagarjuna's Madhyamaka reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-075",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Nagarjuna's Madhyamaka",
      "Substantive synthesis with preceding works (The Fundamental Wisdom of the Middle Way, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-085",
    "spineBookId": "ORIG-085",
    "spineBookTitle": "The Tale of Genji",
    "spineBookAuthor": "Murasaki Shikibu",
    "courseCode": "HIS 307",
    "courseTitle": "China and Japan to 1800",
    "stage": 300,
    "title": "Cumulative Synthesis: The Tale of Genji in Dialogue with Nagarjuna's Madhyamaka",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Murasaki Shikibu's The Tale of Genji (HIS 307), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Nagarjuna's Madhyamaka and The Historian's Craft. Focus your inquiry on how The Tale of Genji reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-076",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Tale of Genji",
      "Substantive synthesis with preceding works (Nagarjuna's Madhyamaka, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-086",
    "spineBookId": "ORIG-086",
    "spineBookTitle": "The Narrow Road to the Deep North",
    "spineBookAuthor": "Bashō",
    "courseCode": "HIS 307",
    "courseTitle": "China and Japan to 1800",
    "stage": 300,
    "title": "Cumulative Synthesis: The Narrow Road to the Deep North in Dialogue with The Tale of Genji",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Bashō's The Narrow Road to the Deep North (HIS 307), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Tale of Genji and The Historian's Craft. Focus your inquiry on how The Narrow Road to the Deep North reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-085",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Narrow Road to the Deep North",
      "Substantive synthesis with preceding works (The Tale of Genji, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-087",
    "spineBookId": "ORIG-087",
    "spineBookTitle": "Sunjata: A New Prose Version",
    "spineBookAuthor": "Conrad, ed. and tr.",
    "courseCode": "HIS 308",
    "courseTitle": "African Worlds to 1800",
    "stage": 300,
    "title": "Cumulative Synthesis: Sunjata: A New Prose Version in Dialogue with The Narrow Road to the Deep North",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Conrad, ed. and tr.'s Sunjata: A New Prose Version (HIS 308), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Narrow Road to the Deep North and The Historian's Craft. Focus your inquiry on how Sunjata: A New Prose Version reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-086",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Sunjata: A New Prose Version",
      "Substantive synthesis with preceding works (The Narrow Road to the Deep North, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-091",
    "spineBookId": "ORIG-091",
    "spineBookTitle": "Popol Vuh",
    "spineBookAuthor": "Traditional (Christenson, tr.)",
    "courseCode": "HUM 309",
    "courseTitle": "Ancient and Indigenous Americas",
    "stage": 300,
    "title": "Cumulative Synthesis: Popol Vuh in Dialogue with The Muqaddimah",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Traditional (Christenson, tr.)'s Popol Vuh (HUM 309), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Muqaddimah and Histories. Focus your inquiry on how Popol Vuh reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-070",
      "ORIG-022"
    ],
    "analyticalMode": "Comparative Analysis and Historical Reconstruction",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Popol Vuh",
      "Substantive synthesis with preceding works (The Muqaddimah, Histories) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in comparative analysis and historical reconstruction"
    ]
  },
  {
    "id": "ESSAY-N79",
    "spineBookId": "N79",
    "spineBookTitle": "Almagest (Selections)",
    "spineBookAuthor": "Ptolemy",
    "courseCode": "SCI 401",
    "courseTitle": "The Scientific Revolution",
    "stage": 400,
    "title": "Cumulative Synthesis: Almagest (Selections) in Dialogue with Popol Vuh",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Ptolemy's Almagest (Selections) (SCI 401), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Popol Vuh and The Hebrew Bible (Tanakh). Focus your inquiry on how Almagest (Selections) reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-091",
      "ORIG-018"
    ],
    "analyticalMode": "Scientific Epistemology and Paradigm Shift",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Almagest (Selections)",
      "Substantive synthesis with preceding works (Popol Vuh, The Hebrew Bible (Tanakh)) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in scientific epistemology and paradigm shift"
    ]
  },
  {
    "id": "ESSAY-ORIG-096",
    "spineBookId": "ORIG-096",
    "spineBookTitle": "On the Revolutions of the Heavenly Spheres",
    "spineBookAuthor": "Copernicus",
    "courseCode": "SCI 401",
    "courseTitle": "The Scientific Revolution",
    "stage": 400,
    "title": "Cumulative Synthesis: On the Revolutions of the Heavenly Spheres in Dialogue with Almagest (Selections)",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Copernicus's On the Revolutions of the Heavenly Spheres (SCI 401), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Almagest (Selections) and The Hebrew Bible (Tanakh). Focus your inquiry on how On the Revolutions of the Heavenly Spheres reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N79",
      "ORIG-018"
    ],
    "analyticalMode": "Scientific Epistemology and Paradigm Shift",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in On the Revolutions of the Heavenly Spheres",
      "Substantive synthesis with preceding works (Almagest (Selections), The Hebrew Bible (Tanakh)) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in scientific epistemology and paradigm shift"
    ]
  },
  {
    "id": "ESSAY-ORIG-097",
    "spineBookId": "ORIG-097",
    "spineBookTitle": "Dialogue Concerning the Two Chief World Systems",
    "spineBookAuthor": "Galileo",
    "courseCode": "SCI 401",
    "courseTitle": "The Scientific Revolution",
    "stage": 400,
    "title": "Cumulative Synthesis: Dialogue Concerning the Two Chief World Systems in Dialogue with On the Revolutions of the Heavenly Spheres",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Galileo's Dialogue Concerning the Two Chief World Systems (SCI 401), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in On the Revolutions of the Heavenly Spheres and Almagest (Selections). Focus your inquiry on how Dialogue Concerning the Two Chief World Systems reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-096",
      "N79"
    ],
    "analyticalMode": "Scientific Epistemology and Paradigm Shift",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Dialogue Concerning the Two Chief World Systems",
      "Substantive synthesis with preceding works (On the Revolutions of the Heavenly Spheres, Almagest (Selections)) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in scientific epistemology and paradigm shift"
    ]
  },
  {
    "id": "ESSAY-N80",
    "spineBookId": "N80",
    "spineBookTitle": "On the Motion of the Heart and Blood",
    "spineBookAuthor": "Harvey",
    "courseCode": "SCI 401",
    "courseTitle": "The Scientific Revolution",
    "stage": 400,
    "title": "Cumulative Synthesis: On the Motion of the Heart and Blood in Dialogue with Dialogue Concerning the Two Chief World Systems",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Harvey's On the Motion of the Heart and Blood (SCI 401), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Dialogue Concerning the Two Chief World Systems and Almagest (Selections). Focus your inquiry on how On the Motion of the Heart and Blood reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-097",
      "N79"
    ],
    "analyticalMode": "Scientific Epistemology and Paradigm Shift",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in On the Motion of the Heart and Blood",
      "Substantive synthesis with preceding works (Dialogue Concerning the Two Chief World Systems, Almagest (Selections)) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in scientific epistemology and paradigm shift"
    ]
  },
  {
    "id": "ESSAY-ORIG-098",
    "spineBookId": "ORIG-098",
    "spineBookTitle": "Principia (Selected Axioms and Laws)",
    "spineBookAuthor": "Newton",
    "courseCode": "SCI 401",
    "courseTitle": "The Scientific Revolution",
    "stage": 400,
    "title": "Cumulative Synthesis: Principia (Selected Axioms and Laws) in Dialogue with On the Motion of the Heart and Blood",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Newton's Principia (Selected Axioms and Laws) (SCI 401), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in On the Motion of the Heart and Blood and Almagest (Selections). Focus your inquiry on how Principia (Selected Axioms and Laws) reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N80",
      "N79"
    ],
    "analyticalMode": "Scientific Epistemology and Paradigm Shift",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Principia (Selected Axioms and Laws)",
      "Substantive synthesis with preceding works (On the Motion of the Heart and Blood, Almagest (Selections)) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in scientific epistemology and paradigm shift"
    ]
  },
  {
    "id": "ESSAY-ORIG-099",
    "spineBookId": "ORIG-099",
    "spineBookTitle": "The Scientific Revolution",
    "spineBookAuthor": "Shapin",
    "courseCode": "SCI 401",
    "courseTitle": "The Scientific Revolution",
    "stage": 400,
    "title": "Cumulative Synthesis: The Scientific Revolution in Dialogue with Principia (Selected Axioms and Laws)",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Shapin's The Scientific Revolution (SCI 401), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Principia (Selected Axioms and Laws) and Almagest (Selections). Focus your inquiry on how The Scientific Revolution reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-098",
      "N79"
    ],
    "analyticalMode": "Scientific Epistemology and Paradigm Shift",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Scientific Revolution",
      "Substantive synthesis with preceding works (Principia (Selected Axioms and Laws), Almagest (Selections)) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in scientific epistemology and paradigm shift"
    ]
  },
  {
    "id": "ESSAY-ORIG-102",
    "spineBookId": "ORIG-102",
    "spineBookTitle": "Philosophical Writings",
    "spineBookAuthor": "Descartes (Cottingham et al., tr.)",
    "courseCode": "PHI 402",
    "courseTitle": "Descartes and Modern Philosophy",
    "stage": 400,
    "title": "Cumulative Synthesis: Philosophical Writings in Dialogue with The Guide of the Perplexed (Selections)",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Descartes (Cottingham et al., tr.)'s Philosophical Writings (PHI 402), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Guide of the Perplexed (Selections) and Introduction to Philosophy. Focus your inquiry on how Philosophical Writings reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N78",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Philosophical Writings",
      "Substantive synthesis with preceding works (The Guide of the Perplexed (Selections), Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-104",
    "spineBookId": "ORIG-104",
    "spineBookTitle": "Modern Philosophy: Primary Sources",
    "spineBookAuthor": "Ariew & Watkins, eds.",
    "courseCode": "PHI 402",
    "courseTitle": "Descartes and Modern Philosophy",
    "stage": 400,
    "title": "Cumulative Synthesis: Modern Philosophy: Primary Sources in Dialogue with Philosophical Writings",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Ariew & Watkins, eds.'s Modern Philosophy: Primary Sources (PHI 402), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Philosophical Writings and Introduction to Philosophy. Focus your inquiry on how Modern Philosophy: Primary Sources reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-102",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Modern Philosophy: Primary Sources",
      "Substantive synthesis with preceding works (Philosophical Writings, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-N58",
    "spineBookId": "N58",
    "spineBookTitle": "An Enquiry Concerning Human Understanding",
    "spineBookAuthor": "Hume",
    "courseCode": "PHI 402",
    "courseTitle": "Descartes and Modern Philosophy",
    "stage": 400,
    "title": "Cumulative Synthesis: An Enquiry Concerning Human Understanding in Dialogue with Modern Philosophy: Primary Sources",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Hume's An Enquiry Concerning Human Understanding (PHI 402), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Modern Philosophy: Primary Sources and Introduction to Philosophy. Focus your inquiry on how An Enquiry Concerning Human Understanding reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-104",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in An Enquiry Concerning Human Understanding",
      "Substantive synthesis with preceding works (Modern Philosophy: Primary Sources, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-110",
    "spineBookId": "ORIG-110",
    "spineBookTitle": "The Prince",
    "spineBookAuthor": "Machiavelli",
    "courseCode": "POL 404",
    "courseTitle": "Politics and Political Economy",
    "stage": 400,
    "title": "Cumulative Synthesis: The Prince in Dialogue with An Enquiry Concerning Human Understanding",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Machiavelli's The Prince (POL 404), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in An Enquiry Concerning Human Understanding and The Hebrew Bible (Tanakh). Focus your inquiry on how The Prince reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N58",
      "ORIG-018"
    ],
    "analyticalMode": "Political Theory and Institutional Analysis",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Prince",
      "Substantive synthesis with preceding works (An Enquiry Concerning Human Understanding, The Hebrew Bible (Tanakh)) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in political theory and institutional analysis"
    ]
  },
  {
    "id": "ESSAY-ORIG-111",
    "spineBookId": "ORIG-111",
    "spineBookTitle": "Leviathan",
    "spineBookAuthor": "Hobbes",
    "courseCode": "POL 404",
    "courseTitle": "Politics and Political Economy",
    "stage": 400,
    "title": "Cumulative Synthesis: Leviathan in Dialogue with The Prince",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Hobbes's Leviathan (POL 404), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Prince and The Hebrew Bible (Tanakh). Focus your inquiry on how Leviathan reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-110",
      "ORIG-018"
    ],
    "analyticalMode": "Political Theory and Institutional Analysis",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Leviathan",
      "Substantive synthesis with preceding works (The Prince, The Hebrew Bible (Tanakh)) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in political theory and institutional analysis"
    ]
  },
  {
    "id": "ESSAY-ORIG-112",
    "spineBookId": "ORIG-112",
    "spineBookTitle": "Second Treatise of Government",
    "spineBookAuthor": "Locke",
    "courseCode": "POL 404",
    "courseTitle": "Politics and Political Economy",
    "stage": 400,
    "title": "Cumulative Synthesis: Second Treatise of Government in Dialogue with Leviathan",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Locke's Second Treatise of Government (POL 404), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Leviathan and The Prince. Focus your inquiry on how Second Treatise of Government reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-111",
      "ORIG-110"
    ],
    "analyticalMode": "Political Theory and Institutional Analysis",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Second Treatise of Government",
      "Substantive synthesis with preceding works (Leviathan, The Prince) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in political theory and institutional analysis"
    ]
  },
  {
    "id": "ESSAY-ORIG-113",
    "spineBookId": "ORIG-113",
    "spineBookTitle": "The Social Contract",
    "spineBookAuthor": "Rousseau",
    "courseCode": "POL 404",
    "courseTitle": "Politics and Political Economy",
    "stage": 400,
    "title": "Cumulative Synthesis: The Social Contract in Dialogue with Second Treatise of Government",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Rousseau's The Social Contract (POL 404), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Second Treatise of Government and The Prince. Focus your inquiry on how The Social Contract reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-112",
      "ORIG-110"
    ],
    "analyticalMode": "Political Theory and Institutional Analysis",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Social Contract",
      "Substantive synthesis with preceding works (Second Treatise of Government, The Prince) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in political theory and institutional analysis"
    ]
  },
  {
    "id": "ESSAY-ORIG-114",
    "spineBookId": "ORIG-114",
    "spineBookTitle": "The Wealth of Nations (Books I–III)",
    "spineBookAuthor": "Smith",
    "courseCode": "POL 404",
    "courseTitle": "Politics and Political Economy",
    "stage": 400,
    "title": "Cumulative Synthesis: The Wealth of Nations (Books I–III) in Dialogue with The Social Contract",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Smith's The Wealth of Nations (Books I–III) (POL 404), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Social Contract and The Prince. Focus your inquiry on how The Wealth of Nations (Books I–III) reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-113",
      "ORIG-110"
    ],
    "analyticalMode": "Political Theory and Institutional Analysis",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Wealth of Nations (Books I–III)",
      "Substantive synthesis with preceding works (The Social Contract, The Prince) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in political theory and institutional analysis"
    ]
  },
  {
    "id": "ESSAY-ORIG-115",
    "spineBookId": "ORIG-115",
    "spineBookTitle": "Hamlet",
    "spineBookAuthor": "Shakespeare",
    "courseCode": "LIT 405",
    "courseTitle": "Renaissance and Early Modern Literature",
    "stage": 400,
    "title": "Cumulative Synthesis: Hamlet in Dialogue with The Wealth of Nations (Books I–III)",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Shakespeare's Hamlet (LIT 405), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Wealth of Nations (Books I–III) and The Hebrew Bible (Tanakh). Focus your inquiry on how Hamlet reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-114",
      "ORIG-018"
    ],
    "analyticalMode": "Literary Form and Cultural Hermeneutics",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Hamlet",
      "Substantive synthesis with preceding works (The Wealth of Nations (Books I–III), The Hebrew Bible (Tanakh)) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in literary form and cultural hermeneutics"
    ]
  },
  {
    "id": "ESSAY-ORIG-116",
    "spineBookId": "ORIG-116",
    "spineBookTitle": "Don Quixote",
    "spineBookAuthor": "Cervantes",
    "courseCode": "LIT 405",
    "courseTitle": "Renaissance and Early Modern Literature",
    "stage": 400,
    "title": "Cumulative Synthesis: Don Quixote in Dialogue with Hamlet",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Cervantes's Don Quixote (LIT 405), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Hamlet and The Hebrew Bible (Tanakh). Focus your inquiry on how Don Quixote reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-115",
      "ORIG-018"
    ],
    "analyticalMode": "Literary Form and Cultural Hermeneutics",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Don Quixote",
      "Substantive synthesis with preceding works (Hamlet, The Hebrew Bible (Tanakh)) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in literary form and cultural hermeneutics"
    ]
  },
  {
    "id": "ESSAY-ORIG-117",
    "spineBookId": "ORIG-117",
    "spineBookTitle": "King Lear",
    "spineBookAuthor": "Shakespeare",
    "courseCode": "LIT 405",
    "courseTitle": "Renaissance and Early Modern Literature",
    "stage": 400,
    "title": "Cumulative Synthesis: King Lear in Dialogue with Don Quixote",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Shakespeare's King Lear (LIT 405), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Don Quixote and Hamlet. Focus your inquiry on how King Lear reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-116",
      "ORIG-115"
    ],
    "analyticalMode": "Literary Form and Cultural Hermeneutics",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in King Lear",
      "Substantive synthesis with preceding works (Don Quixote, Hamlet) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in literary form and cultural hermeneutics"
    ]
  },
  {
    "id": "ESSAY-ORIG-118",
    "spineBookId": "ORIG-118",
    "spineBookTitle": "The Story of the Stone",
    "spineBookAuthor": "Cao Xueqin",
    "courseCode": "LIT 405",
    "courseTitle": "Renaissance and Early Modern Literature",
    "stage": 400,
    "title": "Cumulative Synthesis: The Story of the Stone in Dialogue with King Lear",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Cao Xueqin's The Story of the Stone (LIT 405), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in King Lear and Hamlet. Focus your inquiry on how The Story of the Stone reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-117",
      "ORIG-115"
    ],
    "analyticalMode": "Literary Form and Cultural Hermeneutics",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Story of the Stone",
      "Substantive synthesis with preceding works (King Lear, Hamlet) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in literary form and cultural hermeneutics"
    ]
  },
  {
    "id": "ESSAY-N64",
    "spineBookId": "N64",
    "spineBookTitle": "Historical Poetry Anthology",
    "spineBookAuthor": "Curated Lyric Selection",
    "courseCode": "LIT 405",
    "courseTitle": "Renaissance and Early Modern Literature",
    "stage": 400,
    "title": "Cumulative Synthesis: Historical Poetry Anthology in Dialogue with The Story of the Stone",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Curated Lyric Selection's Historical Poetry Anthology (LIT 405), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Story of the Stone and Hamlet. Focus your inquiry on how Historical Poetry Anthology reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-118",
      "ORIG-115"
    ],
    "analyticalMode": "Literary Form and Cultural Hermeneutics",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Historical Poetry Anthology",
      "Substantive synthesis with preceding works (The Story of the Stone, Hamlet) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in literary form and cultural hermeneutics"
    ]
  },
  {
    "id": "ESSAY-N65",
    "spineBookId": "N65",
    "spineBookTitle": "Essays (Selections)",
    "spineBookAuthor": "Montaigne",
    "courseCode": "LIT 405",
    "courseTitle": "Renaissance and Early Modern Literature",
    "stage": 400,
    "title": "Cumulative Synthesis: Essays (Selections) in Dialogue with Historical Poetry Anthology",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Montaigne's Essays (Selections) (LIT 405), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Historical Poetry Anthology and Hamlet. Focus your inquiry on how Essays (Selections) reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N64",
      "ORIG-115"
    ],
    "analyticalMode": "Literary Form and Cultural Hermeneutics",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Essays (Selections)",
      "Substantive synthesis with preceding works (Historical Poetry Anthology, Hamlet) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in literary form and cultural hermeneutics"
    ]
  },
  {
    "id": "ESSAY-ORIG-123",
    "spineBookId": "ORIG-123",
    "spineBookTitle": "A Short Account of the Destruction of the Indies",
    "spineBookAuthor": "Las Casas",
    "courseCode": "HIS 407",
    "courseTitle": "Conquest and Colonial Americas",
    "stage": 400,
    "title": "Cumulative Synthesis: A Short Account of the Destruction of the Indies in Dialogue with Sunjata: A New Prose Version",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Las Casas's A Short Account of the Destruction of the Indies (HIS 407), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Sunjata: A New Prose Version and The Historian's Craft. Focus your inquiry on how A Short Account of the Destruction of the Indies reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-087",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in A Short Account of the Destruction of the Indies",
      "Substantive synthesis with preceding works (Sunjata: A New Prose Version, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-124",
    "spineBookId": "ORIG-124",
    "spineBookTitle": "Seven Myths of the Spanish Conquest",
    "spineBookAuthor": "Restall",
    "courseCode": "HIS 407",
    "courseTitle": "Conquest and Colonial Americas",
    "stage": 400,
    "title": "Cumulative Synthesis: Seven Myths of the Spanish Conquest in Dialogue with A Short Account of the Destruction of the Indies",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Restall's Seven Myths of the Spanish Conquest (HIS 407), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in A Short Account of the Destruction of the Indies and The Historian's Craft. Focus your inquiry on how Seven Myths of the Spanish Conquest reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-123",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Seven Myths of the Spanish Conquest",
      "Substantive synthesis with preceding works (A Short Account of the Destruction of the Indies, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-128",
    "spineBookId": "ORIG-128",
    "spineBookTitle": "Common Sense",
    "spineBookAuthor": "Paine",
    "courseCode": "HIS 408",
    "courseTitle": "Atlantic Revolutions",
    "stage": 400,
    "title": "Cumulative Synthesis: Common Sense in Dialogue with Seven Myths of the Spanish Conquest",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Paine's Common Sense (HIS 408), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Seven Myths of the Spanish Conquest and The Historian's Craft. Focus your inquiry on how Common Sense reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-124",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Common Sense",
      "Substantive synthesis with preceding works (Seven Myths of the Spanish Conquest, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-129",
    "spineBookId": "ORIG-129",
    "spineBookTitle": "The Federalist",
    "spineBookAuthor": "Hamilton, Madison & Jay",
    "courseCode": "HIS 408",
    "courseTitle": "Atlantic Revolutions",
    "stage": 400,
    "title": "Cumulative Synthesis: The Federalist in Dialogue with Common Sense",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Hamilton, Madison & Jay's The Federalist (HIS 408), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Common Sense and The Historian's Craft. Focus your inquiry on how The Federalist reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-128",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Federalist",
      "Substantive synthesis with preceding works (Common Sense, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-N81",
    "spineBookId": "N81",
    "spineBookTitle": "Reflections on the Revolution in France",
    "spineBookAuthor": "Burke",
    "courseCode": "HIS 408",
    "courseTitle": "Atlantic Revolutions",
    "stage": 400,
    "title": "Cumulative Synthesis: Reflections on the Revolution in France in Dialogue with The Federalist",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Burke's Reflections on the Revolution in France (HIS 408), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Federalist and The Historian's Craft. Focus your inquiry on how Reflections on the Revolution in France reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-129",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Reflections on the Revolution in France",
      "Substantive synthesis with preceding works (The Federalist, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-133",
    "spineBookId": "ORIG-133",
    "spineBookTitle": "Critique of Pure Reason",
    "spineBookAuthor": "Kant (Guyer & Wood, tr.)",
    "courseCode": "PHI 501",
    "courseTitle": "Kant, Hegel, Nietzsche",
    "stage": 500,
    "title": "Cumulative Synthesis: Critique of Pure Reason in Dialogue with An Enquiry Concerning Human Understanding",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Kant (Guyer & Wood, tr.)'s Critique of Pure Reason (PHI 501), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in An Enquiry Concerning Human Understanding and Introduction to Philosophy. Focus your inquiry on how Critique of Pure Reason reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N58",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Critique of Pure Reason",
      "Substantive synthesis with preceding works (An Enquiry Concerning Human Understanding, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-N59",
    "spineBookId": "N59",
    "spineBookTitle": "Groundwork of the Metaphysics of Morals",
    "spineBookAuthor": "Kant",
    "courseCode": "PHI 501",
    "courseTitle": "Kant, Hegel, Nietzsche",
    "stage": 500,
    "title": "Cumulative Synthesis: Groundwork of the Metaphysics of Morals in Dialogue with Critique of Pure Reason",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Kant's Groundwork of the Metaphysics of Morals (PHI 501), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Critique of Pure Reason and Introduction to Philosophy. Focus your inquiry on how Groundwork of the Metaphysics of Morals reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-133",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Groundwork of the Metaphysics of Morals",
      "Substantive synthesis with preceding works (Critique of Pure Reason, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-N60",
    "spineBookId": "N60",
    "spineBookTitle": "Phenomenology of Spirit (Selections)",
    "spineBookAuthor": "Hegel",
    "courseCode": "PHI 501",
    "courseTitle": "Kant, Hegel, Nietzsche",
    "stage": 500,
    "title": "Cumulative Synthesis: Phenomenology of Spirit (Selections) in Dialogue with Groundwork of the Metaphysics of Morals",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Hegel's Phenomenology of Spirit (Selections) (PHI 501), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Groundwork of the Metaphysics of Morals and Introduction to Philosophy. Focus your inquiry on how Phenomenology of Spirit (Selections) reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N59",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Phenomenology of Spirit (Selections)",
      "Substantive synthesis with preceding works (Groundwork of the Metaphysics of Morals, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-135",
    "spineBookId": "ORIG-135",
    "spineBookTitle": "Beyond Good and Evil",
    "spineBookAuthor": "Nietzsche (Norman, tr.)",
    "courseCode": "PHI 501",
    "courseTitle": "Kant, Hegel, Nietzsche",
    "stage": 500,
    "title": "Cumulative Synthesis: Beyond Good and Evil in Dialogue with Phenomenology of Spirit (Selections)",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Nietzsche (Norman, tr.)'s Beyond Good and Evil (PHI 501), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Phenomenology of Spirit (Selections) and Introduction to Philosophy. Focus your inquiry on how Beyond Good and Evil reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N60",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Beyond Good and Evil",
      "Substantive synthesis with preceding works (Phenomenology of Spirit (Selections), Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-N77",
    "spineBookId": "N77",
    "spineBookTitle": "On the Genealogy of Morality",
    "spineBookAuthor": "Nietzsche",
    "courseCode": "PHI 501",
    "courseTitle": "Kant, Hegel, Nietzsche",
    "stage": 500,
    "title": "Cumulative Synthesis: On the Genealogy of Morality in Dialogue with Beyond Good and Evil",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Nietzsche's On the Genealogy of Morality (PHI 501), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Beyond Good and Evil and Introduction to Philosophy. Focus your inquiry on how On the Genealogy of Morality reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-135",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in On the Genealogy of Morality",
      "Substantive synthesis with preceding works (Beyond Good and Evil, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-134",
    "spineBookId": "ORIG-134",
    "spineBookTitle": "Thus Spoke Zarathustra",
    "spineBookAuthor": "Nietzsche",
    "courseCode": "PHI 501",
    "courseTitle": "Kant, Hegel, Nietzsche",
    "stage": 500,
    "title": "Cumulative Synthesis: Thus Spoke Zarathustra in Dialogue with On the Genealogy of Morality",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Nietzsche's Thus Spoke Zarathustra (PHI 501), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in On the Genealogy of Morality and Introduction to Philosophy. Focus your inquiry on how Thus Spoke Zarathustra reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N77",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Thus Spoke Zarathustra",
      "Substantive synthesis with preceding works (On the Genealogy of Morality, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-137",
    "spineBookId": "ORIG-137",
    "spineBookTitle": "The Nietzsche Reader",
    "spineBookAuthor": "Ansell-Pearson & Large, eds.",
    "courseCode": "PHI 501",
    "courseTitle": "Kant, Hegel, Nietzsche",
    "stage": 500,
    "title": "Cumulative Synthesis: The Nietzsche Reader in Dialogue with Thus Spoke Zarathustra",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Ansell-Pearson & Large, eds.'s The Nietzsche Reader (PHI 501), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Thus Spoke Zarathustra and Introduction to Philosophy. Focus your inquiry on how The Nietzsche Reader reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-134",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Nietzsche Reader",
      "Substantive synthesis with preceding works (Thus Spoke Zarathustra, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-138",
    "spineBookId": "ORIG-138",
    "spineBookTitle": "The Communist Manifesto",
    "spineBookAuthor": "Marx & Engels",
    "courseCode": "HUM 502",
    "courseTitle": "Marx, Mill, Darwin, Freud",
    "stage": 500,
    "title": "Cumulative Synthesis: The Communist Manifesto in Dialogue with Popol Vuh",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Marx & Engels's The Communist Manifesto (HUM 502), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Popol Vuh and Histories. Focus your inquiry on how The Communist Manifesto reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-091",
      "ORIG-022"
    ],
    "analyticalMode": "Comparative Analysis and Historical Reconstruction",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Communist Manifesto",
      "Substantive synthesis with preceding works (Popol Vuh, Histories) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in comparative analysis and historical reconstruction"
    ]
  },
  {
    "id": "ESSAY-N76",
    "spineBookId": "N76",
    "spineBookTitle": "Capital, Volume I (Core Selections)",
    "spineBookAuthor": "Marx",
    "courseCode": "HUM 502",
    "courseTitle": "Marx, Mill, Darwin, Freud",
    "stage": 500,
    "title": "Cumulative Synthesis: Capital, Volume I (Core Selections) in Dialogue with The Communist Manifesto",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Marx's Capital, Volume I (Core Selections) (HUM 502), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Communist Manifesto and Histories. Focus your inquiry on how Capital, Volume I (Core Selections) reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-138",
      "ORIG-022"
    ],
    "analyticalMode": "Comparative Analysis and Historical Reconstruction",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Capital, Volume I (Core Selections)",
      "Substantive synthesis with preceding works (The Communist Manifesto, Histories) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in comparative analysis and historical reconstruction"
    ]
  },
  {
    "id": "ESSAY-ORIG-139",
    "spineBookId": "ORIG-139",
    "spineBookTitle": "On Liberty",
    "spineBookAuthor": "Mill",
    "courseCode": "HUM 502",
    "courseTitle": "Marx, Mill, Darwin, Freud",
    "stage": 500,
    "title": "Cumulative Synthesis: On Liberty in Dialogue with Capital, Volume I (Core Selections)",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Mill's On Liberty (HUM 502), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Capital, Volume I (Core Selections) and Histories. Focus your inquiry on how On Liberty reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N76",
      "ORIG-022"
    ],
    "analyticalMode": "Comparative Analysis and Historical Reconstruction",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in On Liberty",
      "Substantive synthesis with preceding works (Capital, Volume I (Core Selections), Histories) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in comparative analysis and historical reconstruction"
    ]
  },
  {
    "id": "ESSAY-ORIG-140",
    "spineBookId": "ORIG-140",
    "spineBookTitle": "On the Origin of Species",
    "spineBookAuthor": "Darwin",
    "courseCode": "HUM 502",
    "courseTitle": "Marx, Mill, Darwin, Freud",
    "stage": 500,
    "title": "Cumulative Synthesis: On the Origin of Species in Dialogue with On Liberty",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Darwin's On the Origin of Species (HUM 502), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in On Liberty and Histories. Focus your inquiry on how On the Origin of Species reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-139",
      "ORIG-022"
    ],
    "analyticalMode": "Comparative Analysis and Historical Reconstruction",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in On the Origin of Species",
      "Substantive synthesis with preceding works (On Liberty, Histories) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in comparative analysis and historical reconstruction"
    ]
  },
  {
    "id": "ESSAY-ORIG-141",
    "spineBookId": "ORIG-141",
    "spineBookTitle": "The Interpretation of Dreams (Selections)",
    "spineBookAuthor": "Freud",
    "courseCode": "HUM 502",
    "courseTitle": "Marx, Mill, Darwin, Freud",
    "stage": 500,
    "title": "Cumulative Synthesis: The Interpretation of Dreams (Selections) in Dialogue with On the Origin of Species",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Freud's The Interpretation of Dreams (Selections) (HUM 502), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in On the Origin of Species and Histories. Focus your inquiry on how The Interpretation of Dreams (Selections) reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-140",
      "ORIG-022"
    ],
    "analyticalMode": "Comparative Analysis and Historical Reconstruction",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Interpretation of Dreams (Selections)",
      "Substantive synthesis with preceding works (On the Origin of Species, Histories) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in comparative analysis and historical reconstruction"
    ]
  },
  {
    "id": "ESSAY-ORIG-142",
    "spineBookId": "ORIG-142",
    "spineBookTitle": "Faust",
    "spineBookAuthor": "Goethe",
    "courseCode": "LIT 503",
    "courseTitle": "Nineteenth-Century Novel and Drama",
    "stage": 500,
    "title": "Cumulative Synthesis: Faust in Dialogue with Essays (Selections)",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Goethe's Faust (LIT 503), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Essays (Selections) and Hamlet. Focus your inquiry on how Faust reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N65",
      "ORIG-115"
    ],
    "analyticalMode": "Literary Form and Cultural Hermeneutics",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Faust",
      "Substantive synthesis with preceding works (Essays (Selections), Hamlet) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in literary form and cultural hermeneutics"
    ]
  },
  {
    "id": "ESSAY-N66",
    "spineBookId": "N66",
    "spineBookTitle": "Pride and Prejudice",
    "spineBookAuthor": "Austen",
    "courseCode": "LIT 503",
    "courseTitle": "Nineteenth-Century Novel and Drama",
    "stage": 500,
    "title": "Cumulative Synthesis: Pride and Prejudice in Dialogue with Faust",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Austen's Pride and Prejudice (LIT 503), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Faust and Hamlet. Focus your inquiry on how Pride and Prejudice reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-142",
      "ORIG-115"
    ],
    "analyticalMode": "Literary Form and Cultural Hermeneutics",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Pride and Prejudice",
      "Substantive synthesis with preceding works (Faust, Hamlet) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in literary form and cultural hermeneutics"
    ]
  },
  {
    "id": "ESSAY-N67",
    "spineBookId": "N67",
    "spineBookTitle": "Moby-Dick",
    "spineBookAuthor": "Melville",
    "courseCode": "LIT 503",
    "courseTitle": "Nineteenth-Century Novel and Drama",
    "stage": 500,
    "title": "Cumulative Synthesis: Moby-Dick in Dialogue with Pride and Prejudice",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Melville's Moby-Dick (LIT 503), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Pride and Prejudice and Hamlet. Focus your inquiry on how Moby-Dick reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N66",
      "ORIG-115"
    ],
    "analyticalMode": "Literary Form and Cultural Hermeneutics",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Moby-Dick",
      "Substantive synthesis with preceding works (Pride and Prejudice, Hamlet) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in literary form and cultural hermeneutics"
    ]
  },
  {
    "id": "ESSAY-ORIG-143",
    "spineBookId": "ORIG-143",
    "spineBookTitle": "War and Peace",
    "spineBookAuthor": "Tolstoy",
    "courseCode": "LIT 503",
    "courseTitle": "Nineteenth-Century Novel and Drama",
    "stage": 500,
    "title": "Cumulative Synthesis: War and Peace in Dialogue with Moby-Dick",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Tolstoy's War and Peace (LIT 503), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Moby-Dick and Hamlet. Focus your inquiry on how War and Peace reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N67",
      "ORIG-115"
    ],
    "analyticalMode": "Literary Form and Cultural Hermeneutics",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in War and Peace",
      "Substantive synthesis with preceding works (Moby-Dick, Hamlet) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in literary form and cultural hermeneutics"
    ]
  },
  {
    "id": "ESSAY-ORIG-144",
    "spineBookId": "ORIG-144",
    "spineBookTitle": "The Brothers Karamazov",
    "spineBookAuthor": "Dostoevsky",
    "courseCode": "LIT 503",
    "courseTitle": "Nineteenth-Century Novel and Drama",
    "stage": 500,
    "title": "Cumulative Synthesis: The Brothers Karamazov in Dialogue with War and Peace",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Dostoevsky's The Brothers Karamazov (LIT 503), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in War and Peace and Hamlet. Focus your inquiry on how The Brothers Karamazov reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-143",
      "ORIG-115"
    ],
    "analyticalMode": "Literary Form and Cultural Hermeneutics",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Brothers Karamazov",
      "Substantive synthesis with preceding works (War and Peace, Hamlet) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in literary form and cultural hermeneutics"
    ]
  },
  {
    "id": "ESSAY-ORIG-145",
    "spineBookId": "ORIG-145",
    "spineBookTitle": "A Vindication of the Rights of Woman",
    "spineBookAuthor": "Wollstonecraft",
    "courseCode": "HIS 504",
    "courseTitle": "Gender in History",
    "stage": 500,
    "title": "Cumulative Synthesis: A Vindication of the Rights of Woman in Dialogue with Reflections on the Revolution in France",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Wollstonecraft's A Vindication of the Rights of Woman (HIS 504), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Reflections on the Revolution in France and The Historian's Craft. Focus your inquiry on how A Vindication of the Rights of Woman reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N81",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in A Vindication of the Rights of Woman",
      "Substantive synthesis with preceding works (Reflections on the Revolution in France, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-N72",
    "spineBookId": "N72",
    "spineBookTitle": "The Subjection of Women",
    "spineBookAuthor": "Mill",
    "courseCode": "HIS 504",
    "courseTitle": "Gender in History",
    "stage": 500,
    "title": "Cumulative Synthesis: The Subjection of Women in Dialogue with A Vindication of the Rights of Woman",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Mill's The Subjection of Women (HIS 504), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in A Vindication of the Rights of Woman and The Historian's Craft. Focus your inquiry on how The Subjection of Women reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-145",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Subjection of Women",
      "Substantive synthesis with preceding works (A Vindication of the Rights of Woman, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-N73",
    "spineBookId": "N73",
    "spineBookTitle": "The Second Sex (Selections)",
    "spineBookAuthor": "Beauvoir",
    "courseCode": "HIS 504",
    "courseTitle": "Gender in History",
    "stage": 500,
    "title": "Cumulative Synthesis: The Second Sex (Selections) in Dialogue with The Subjection of Women",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Beauvoir's The Second Sex (Selections) (HIS 504), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Subjection of Women and The Historian's Craft. Focus your inquiry on how The Second Sex (Selections) reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N72",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Second Sex (Selections)",
      "Substantive synthesis with preceding works (The Subjection of Women, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-149",
    "spineBookId": "ORIG-149",
    "spineBookTitle": "The Transformation of the World",
    "spineBookAuthor": "Osterhammel",
    "courseCode": "HIS 505",
    "courseTitle": "The Global Nineteenth Century",
    "stage": 500,
    "title": "Cumulative Synthesis: The Transformation of the World in Dialogue with The Second Sex (Selections)",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Osterhammel's The Transformation of the World (HIS 505), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Second Sex (Selections) and The Historian's Craft. Focus your inquiry on how The Transformation of the World reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N73",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Transformation of the World",
      "Substantive synthesis with preceding works (The Second Sex (Selections), The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-152",
    "spineBookId": "ORIG-152",
    "spineBookTitle": "Imagined Communities",
    "spineBookAuthor": "Anderson",
    "courseCode": "HIS 505",
    "courseTitle": "The Global Nineteenth Century",
    "stage": 500,
    "title": "Cumulative Synthesis: Imagined Communities in Dialogue with The Transformation of the World",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Anderson's Imagined Communities (HIS 505), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Transformation of the World and The Historian's Craft. Focus your inquiry on how Imagined Communities reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-149",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Imagined Communities",
      "Substantive synthesis with preceding works (The Transformation of the World, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-N63",
    "spineBookId": "N63",
    "spineBookTitle": "The Protestant Ethic and the Spirit of Capitalism",
    "spineBookAuthor": "Weber",
    "courseCode": "HIS 506",
    "courseTitle": "Industry, Capitalism, Technology",
    "stage": 500,
    "title": "Cumulative Synthesis: The Protestant Ethic and the Spirit of Capitalism in Dialogue with Imagined Communities",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Weber's The Protestant Ethic and the Spirit of Capitalism (HIS 506), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Imagined Communities and The Historian's Craft. Focus your inquiry on how The Protestant Ethic and the Spirit of Capitalism reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-152",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Protestant Ethic and the Spirit of Capitalism",
      "Substantive synthesis with preceding works (Imagined Communities, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-154",
    "spineBookId": "ORIG-154",
    "spineBookTitle": "The Great Divergence",
    "spineBookAuthor": "Pomeranz",
    "courseCode": "HIS 506",
    "courseTitle": "Industry, Capitalism, Technology",
    "stage": 500,
    "title": "Cumulative Synthesis: The Great Divergence in Dialogue with The Protestant Ethic and the Spirit of Capitalism",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Pomeranz's The Great Divergence (HIS 506), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Protestant Ethic and the Spirit of Capitalism and The Historian's Craft. Focus your inquiry on how The Great Divergence reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N63",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Great Divergence",
      "Substantive synthesis with preceding works (The Protestant Ethic and the Spirit of Capitalism, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-155",
    "spineBookId": "ORIG-155",
    "spineBookTitle": "The British Industrial Revolution in Global Perspective",
    "spineBookAuthor": "Allen",
    "courseCode": "HIS 506",
    "courseTitle": "Industry, Capitalism, Technology",
    "stage": 500,
    "title": "Cumulative Synthesis: The British Industrial Revolution in Global Perspective in Dialogue with The Great Divergence",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Allen's The British Industrial Revolution in Global Perspective (HIS 506), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Great Divergence and The Historian's Craft. Focus your inquiry on how The British Industrial Revolution in Global Perspective reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-154",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The British Industrial Revolution in Global Perspective",
      "Substantive synthesis with preceding works (The Great Divergence, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-157",
    "spineBookId": "ORIG-157",
    "spineBookTitle": "Ecological Imperialism",
    "spineBookAuthor": "Crosby",
    "courseCode": "HIS 507",
    "courseTitle": "Global Environmental History",
    "stage": 500,
    "title": "Cumulative Synthesis: Ecological Imperialism in Dialogue with The British Industrial Revolution in Global Perspective",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Crosby's Ecological Imperialism (HIS 507), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The British Industrial Revolution in Global Perspective and The Historian's Craft. Focus your inquiry on how Ecological Imperialism reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-155",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Ecological Imperialism",
      "Substantive synthesis with preceding works (The British Industrial Revolution in Global Perspective, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-N61",
    "spineBookId": "N61",
    "spineBookTitle": "The Interesting Narrative of Olaudah Equiano",
    "spineBookAuthor": "Equiano",
    "courseCode": "HIS 509",
    "courseTitle": "Slavery and the African Diaspora",
    "stage": 500,
    "title": "Cumulative Synthesis: The Interesting Narrative of Olaudah Equiano in Dialogue with Ecological Imperialism",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Equiano's The Interesting Narrative of Olaudah Equiano (HIS 509), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Ecological Imperialism and The Historian's Craft. Focus your inquiry on how The Interesting Narrative of Olaudah Equiano reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-157",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Interesting Narrative of Olaudah Equiano",
      "Substantive synthesis with preceding works (Ecological Imperialism, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-N62",
    "spineBookId": "N62",
    "spineBookTitle": "Narrative of the Life of Frederick Douglass",
    "spineBookAuthor": "Douglass",
    "courseCode": "HIS 509",
    "courseTitle": "Slavery and the African Diaspora",
    "stage": 500,
    "title": "Cumulative Synthesis: Narrative of the Life of Frederick Douglass in Dialogue with The Interesting Narrative of Olaudah Equiano",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Douglass's Narrative of the Life of Frederick Douglass (HIS 509), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Interesting Narrative of Olaudah Equiano and The Historian's Craft. Focus your inquiry on how Narrative of the Life of Frederick Douglass reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N61",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Narrative of the Life of Frederick Douglass",
      "Substantive synthesis with preceding works (The Interesting Narrative of Olaudah Equiano, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-171",
    "spineBookId": "ORIG-171",
    "spineBookTitle": "The Making of New World Slavery",
    "spineBookAuthor": "Blackburn",
    "courseCode": "HIS 509",
    "courseTitle": "Slavery and the African Diaspora",
    "stage": 500,
    "title": "Cumulative Synthesis: The Making of New World Slavery in Dialogue with Narrative of the Life of Frederick Douglass",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Blackburn's The Making of New World Slavery (HIS 509), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Narrative of the Life of Frederick Douglass and The Historian's Craft. Focus your inquiry on how The Making of New World Slavery reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N62",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Making of New World Slavery",
      "Substantive synthesis with preceding works (Narrative of the Life of Frederick Douglass, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-N71",
    "spineBookId": "N71",
    "spineBookTitle": "Democracy in America (Selections)",
    "spineBookAuthor": "Tocqueville",
    "courseCode": "HIS 510",
    "courseTitle": "Histories of the Americas",
    "stage": 500,
    "title": "Cumulative Synthesis: Democracy in America (Selections) in Dialogue with The Making of New World Slavery",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Tocqueville's Democracy in America (Selections) (HIS 510), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Making of New World Slavery and The Historian's Craft. Focus your inquiry on how Democracy in America (Selections) reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-171",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Democracy in America (Selections)",
      "Substantive synthesis with preceding works (The Making of New World Slavery, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-N75",
    "spineBookId": "N75",
    "spineBookTitle": "The Souls of Black Folk",
    "spineBookAuthor": "Du Bois",
    "courseCode": "HIS 510",
    "courseTitle": "Histories of the Americas",
    "stage": 500,
    "title": "Cumulative Synthesis: The Souls of Black Folk in Dialogue with Democracy in America (Selections)",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Du Bois's The Souls of Black Folk (HIS 510), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Democracy in America (Selections) and The Historian's Craft. Focus your inquiry on how The Souls of Black Folk reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N71",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Souls of Black Folk",
      "Substantive synthesis with preceding works (Democracy in America (Selections), The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-177",
    "spineBookId": "ORIG-177",
    "spineBookTitle": "The Rediscovery of America",
    "spineBookAuthor": "Blackhawk",
    "courseCode": "HIS 510",
    "courseTitle": "Histories of the Americas",
    "stage": 500,
    "title": "Cumulative Synthesis: The Rediscovery of America in Dialogue with The Souls of Black Folk",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Blackhawk's The Rediscovery of America (HIS 510), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Souls of Black Folk and The Historian's Craft. Focus your inquiry on how The Rediscovery of America reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N75",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Rediscovery of America",
      "Substantive synthesis with preceding works (The Souls of Black Folk, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-188",
    "spineBookId": "ORIG-188",
    "spineBookTitle": "The Russian Revolution",
    "spineBookAuthor": "Fitzpatrick",
    "courseCode": "HIS 602",
    "courseTitle": "Revolution, Totalitarianism, Holocaust",
    "stage": 600,
    "title": "Cumulative Synthesis: The Russian Revolution in Dialogue with The Rediscovery of America",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Fitzpatrick's The Russian Revolution (HIS 602), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Rediscovery of America and The Historian's Craft. Focus your inquiry on how The Russian Revolution reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-177",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Russian Revolution",
      "Substantive synthesis with preceding works (The Rediscovery of America, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-189",
    "spineBookId": "ORIG-189",
    "spineBookTitle": "The Origins of Totalitarianism",
    "spineBookAuthor": "Arendt",
    "courseCode": "HIS 602",
    "courseTitle": "Revolution, Totalitarianism, Holocaust",
    "stage": 600,
    "title": "Cumulative Synthesis: The Origins of Totalitarianism in Dialogue with The Russian Revolution",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Arendt's The Origins of Totalitarianism (HIS 602), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Russian Revolution and The Historian's Craft. Focus your inquiry on how The Origins of Totalitarianism reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-188",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Origins of Totalitarianism",
      "Substantive synthesis with preceding works (The Russian Revolution, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-193",
    "spineBookId": "ORIG-193",
    "spineBookTitle": "The Global Cold War",
    "spineBookAuthor": "Westad",
    "courseCode": "POL 603",
    "courseTitle": "Cold War and After",
    "stage": 600,
    "title": "Cumulative Synthesis: The Global Cold War in Dialogue with The Wealth of Nations (Books I–III)",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Westad's The Global Cold War (POL 603), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Wealth of Nations (Books I–III) and The Prince. Focus your inquiry on how The Global Cold War reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-114",
      "ORIG-110"
    ],
    "analyticalMode": "Political Theory and Institutional Analysis",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Global Cold War",
      "Substantive synthesis with preceding works (The Wealth of Nations (Books I–III), The Prince) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in political theory and institutional analysis"
    ]
  },
  {
    "id": "ESSAY-ORIG-209",
    "spineBookId": "ORIG-209",
    "spineBookTitle": "The Wretched of the Earth",
    "spineBookAuthor": "Fanon",
    "courseCode": "HIS 606",
    "courseTitle": "Africa and Decolonization",
    "stage": 600,
    "title": "Cumulative Synthesis: The Wretched of the Earth in Dialogue with The Origins of Totalitarianism",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Fanon's The Wretched of the Earth (HIS 606), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Origins of Totalitarianism and The Historian's Craft. Focus your inquiry on how The Wretched of the Earth reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-189",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Wretched of the Earth",
      "Substantive synthesis with preceding works (The Origins of Totalitarianism, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-210",
    "spineBookId": "ORIG-210",
    "spineBookTitle": "Citizen and Subject",
    "spineBookAuthor": "Mamdani",
    "courseCode": "HIS 606",
    "courseTitle": "Africa and Decolonization",
    "stage": 600,
    "title": "Cumulative Synthesis: Citizen and Subject in Dialogue with The Wretched of the Earth",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Mamdani's Citizen and Subject (HIS 606), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Wretched of the Earth and The Historian's Craft. Focus your inquiry on how Citizen and Subject reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-209",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Citizen and Subject",
      "Substantive synthesis with preceding works (The Wretched of the Earth, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-N74",
    "spineBookId": "N74",
    "spineBookTitle": "Orientalism",
    "spineBookAuthor": "Said",
    "courseCode": "HIS 607",
    "courseTitle": "Postcolonial Intellectual History",
    "stage": 600,
    "title": "Cumulative Synthesis: Orientalism in Dialogue with Citizen and Subject",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Said's Orientalism (HIS 607), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Citizen and Subject and The Historian's Craft. Focus your inquiry on how Orientalism reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-210",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Orientalism",
      "Substantive synthesis with preceding works (Citizen and Subject, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-215",
    "spineBookId": "ORIG-215",
    "spineBookTitle": "Provincializing Europe",
    "spineBookAuthor": "Chakrabarty",
    "courseCode": "HIS 607",
    "courseTitle": "Postcolonial Intellectual History",
    "stage": 600,
    "title": "Cumulative Synthesis: Provincializing Europe in Dialogue with Orientalism",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Chakrabarty's Provincializing Europe (HIS 607), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Orientalism and The Historian's Craft. Focus your inquiry on how Provincializing Europe reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N74",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Provincializing Europe",
      "Substantive synthesis with preceding works (Orientalism, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-217",
    "spineBookId": "ORIG-217",
    "spineBookTitle": "In My Father's House",
    "spineBookAuthor": "Appiah",
    "courseCode": "HIS 607",
    "courseTitle": "Postcolonial Intellectual History",
    "stage": 600,
    "title": "Cumulative Synthesis: In My Father's House in Dialogue with Provincializing Europe",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Appiah's In My Father's House (HIS 607), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Provincializing Europe and The Historian's Craft. Focus your inquiry on how In My Father's House reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-215",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in In My Father's House",
      "Substantive synthesis with preceding works (Provincializing Europe, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-221",
    "spineBookId": "ORIG-221",
    "spineBookTitle": "Metahistory",
    "spineBookAuthor": "White",
    "courseCode": "HIS 608",
    "courseTitle": "Historical Theory and Critique",
    "stage": 600,
    "title": "Cumulative Synthesis: Metahistory in Dialogue with In My Father's House",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of White's Metahistory (HIS 608), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in In My Father's House and The Historian's Craft. Focus your inquiry on how Metahistory reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-217",
      "ORIG-004"
    ],
    "analyticalMode": "Historiographical Synthesis and Contextualization",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Metahistory",
      "Substantive synthesis with preceding works (In My Father's House, The Historian's Craft) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in historiographical synthesis and contextualization"
    ]
  },
  {
    "id": "ESSAY-ORIG-223",
    "spineBookId": "ORIG-223",
    "spineBookTitle": "The Essential Dewey",
    "spineBookAuthor": "Hickman & Alexander, eds.",
    "courseCode": "PHI 609",
    "courseTitle": "Dewey, Wittgenstein, Arendt",
    "stage": 600,
    "title": "Cumulative Synthesis: The Essential Dewey in Dialogue with The Nietzsche Reader",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Hickman & Alexander, eds.'s The Essential Dewey (PHI 609), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Nietzsche Reader and Introduction to Philosophy. Focus your inquiry on how The Essential Dewey reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-137",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Essential Dewey",
      "Substantive synthesis with preceding works (The Nietzsche Reader, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-225",
    "spineBookId": "ORIG-225",
    "spineBookTitle": "Philosophical Investigations",
    "spineBookAuthor": "Wittgenstein",
    "courseCode": "PHI 609",
    "courseTitle": "Dewey, Wittgenstein, Arendt",
    "stage": 600,
    "title": "Cumulative Synthesis: Philosophical Investigations in Dialogue with The Essential Dewey",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Wittgenstein's Philosophical Investigations (PHI 609), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Essential Dewey and Introduction to Philosophy. Focus your inquiry on how Philosophical Investigations reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-223",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Philosophical Investigations",
      "Substantive synthesis with preceding works (The Essential Dewey, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-227",
    "spineBookId": "ORIG-227",
    "spineBookTitle": "The Human Condition",
    "spineBookAuthor": "Arendt",
    "courseCode": "PHI 609",
    "courseTitle": "Dewey, Wittgenstein, Arendt",
    "stage": 600,
    "title": "Cumulative Synthesis: The Human Condition in Dialogue with Philosophical Investigations",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Arendt's The Human Condition (PHI 609), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Philosophical Investigations and Introduction to Philosophy. Focus your inquiry on how The Human Condition reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-225",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Human Condition",
      "Substantive synthesis with preceding works (Philosophical Investigations, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-230",
    "spineBookId": "ORIG-230",
    "spineBookTitle": "The Continental Philosophy Reader",
    "spineBookAuthor": "Kearney & Rainwater, eds.",
    "courseCode": "PHI 610",
    "courseTitle": "Continental Philosophy and Aesthetics",
    "stage": 600,
    "title": "Cumulative Synthesis: The Continental Philosophy Reader in Dialogue with The Human Condition",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Kearney & Rainwater, eds.'s The Continental Philosophy Reader (PHI 610), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Human Condition and Introduction to Philosophy. Focus your inquiry on how The Continental Philosophy Reader reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-227",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Continental Philosophy Reader",
      "Substantive synthesis with preceding works (The Human Condition, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-231",
    "spineBookId": "ORIG-231",
    "spineBookTitle": "Aesthetics: A Comprehensive Anthology",
    "spineBookAuthor": "Cahn & Meskin, eds.",
    "courseCode": "PHI 610",
    "courseTitle": "Continental Philosophy and Aesthetics",
    "stage": 600,
    "title": "Cumulative Synthesis: Aesthetics: A Comprehensive Anthology in Dialogue with The Continental Philosophy Reader",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Cahn & Meskin, eds.'s Aesthetics: A Comprehensive Anthology (PHI 610), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Continental Philosophy Reader and Introduction to Philosophy. Focus your inquiry on how Aesthetics: A Comprehensive Anthology reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-230",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Aesthetics: A Comprehensive Anthology",
      "Substantive synthesis with preceding works (The Continental Philosophy Reader, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-233",
    "spineBookId": "ORIG-233",
    "spineBookTitle": "An Inquiry into the Good",
    "spineBookAuthor": "Nishida",
    "courseCode": "PHI 611",
    "courseTitle": "Japanese Philosophy",
    "stage": 600,
    "title": "Cumulative Synthesis: An Inquiry into the Good in Dialogue with Aesthetics: A Comprehensive Anthology",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Nishida's An Inquiry into the Good (PHI 611), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Aesthetics: A Comprehensive Anthology and Introduction to Philosophy. Focus your inquiry on how An Inquiry into the Good reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-231",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in An Inquiry into the Good",
      "Substantive synthesis with preceding works (Aesthetics: A Comprehensive Anthology, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-234",
    "spineBookId": "ORIG-234",
    "spineBookTitle": "Japanese Philosophy: A Sourcebook",
    "spineBookAuthor": "Heisig, Kasulis & Maraldo, eds.",
    "courseCode": "PHI 611",
    "courseTitle": "Japanese Philosophy",
    "stage": 600,
    "title": "Cumulative Synthesis: Japanese Philosophy: A Sourcebook in Dialogue with An Inquiry into the Good",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Heisig, Kasulis & Maraldo, eds.'s Japanese Philosophy: A Sourcebook (PHI 611), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in An Inquiry into the Good and Introduction to Philosophy. Focus your inquiry on how Japanese Philosophy: A Sourcebook reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-233",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Japanese Philosophy: A Sourcebook",
      "Substantive synthesis with preceding works (An Inquiry into the Good, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-235",
    "spineBookId": "ORIG-235",
    "spineBookTitle": "Things Fall Apart",
    "spineBookAuthor": "Achebe",
    "courseCode": "LIT 612",
    "courseTitle": "Modern and Postcolonial Fiction",
    "stage": 600,
    "title": "Cumulative Synthesis: Things Fall Apart in Dialogue with The Brothers Karamazov",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Achebe's Things Fall Apart (LIT 612), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Brothers Karamazov and Hamlet. Focus your inquiry on how Things Fall Apart reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-144",
      "ORIG-115"
    ],
    "analyticalMode": "Literary Form and Cultural Hermeneutics",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Things Fall Apart",
      "Substantive synthesis with preceding works (The Brothers Karamazov, Hamlet) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in literary form and cultural hermeneutics"
    ]
  },
  {
    "id": "ESSAY-ORIG-236",
    "spineBookId": "ORIG-236",
    "spineBookTitle": "One Hundred Years of Solitude",
    "spineBookAuthor": "García Márquez",
    "courseCode": "LIT 612",
    "courseTitle": "Modern and Postcolonial Fiction",
    "stage": 600,
    "title": "Cumulative Synthesis: One Hundred Years of Solitude in Dialogue with Things Fall Apart",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of García Márquez's One Hundred Years of Solitude (LIT 612), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Things Fall Apart and Hamlet. Focus your inquiry on how One Hundred Years of Solitude reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-235",
      "ORIG-115"
    ],
    "analyticalMode": "Literary Form and Cultural Hermeneutics",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in One Hundred Years of Solitude",
      "Substantive synthesis with preceding works (Things Fall Apart, Hamlet) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in literary form and cultural hermeneutics"
    ]
  },
  {
    "id": "ESSAY-N68",
    "spineBookId": "N68",
    "spineBookTitle": "To the Lighthouse",
    "spineBookAuthor": "Woolf",
    "courseCode": "LIT 612",
    "courseTitle": "Modern and Postcolonial Fiction",
    "stage": 600,
    "title": "Cumulative Synthesis: To the Lighthouse in Dialogue with One Hundred Years of Solitude",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Woolf's To the Lighthouse (LIT 612), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in One Hundred Years of Solitude and Hamlet. Focus your inquiry on how To the Lighthouse reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-236",
      "ORIG-115"
    ],
    "analyticalMode": "Literary Form and Cultural Hermeneutics",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in To the Lighthouse",
      "Substantive synthesis with preceding works (One Hundred Years of Solitude, Hamlet) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in literary form and cultural hermeneutics"
    ]
  },
  {
    "id": "ESSAY-N69",
    "spineBookId": "N69",
    "spineBookTitle": "The Metamorphosis and Other Stories",
    "spineBookAuthor": "Kafka",
    "courseCode": "LIT 612",
    "courseTitle": "Modern and Postcolonial Fiction",
    "stage": 600,
    "title": "Cumulative Synthesis: The Metamorphosis and Other Stories in Dialogue with To the Lighthouse",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Kafka's The Metamorphosis and Other Stories (LIT 612), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in To the Lighthouse and Hamlet. Focus your inquiry on how The Metamorphosis and Other Stories reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N68",
      "ORIG-115"
    ],
    "analyticalMode": "Literary Form and Cultural Hermeneutics",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Metamorphosis and Other Stories",
      "Substantive synthesis with preceding works (To the Lighthouse, Hamlet) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in literary form and cultural hermeneutics"
    ]
  },
  {
    "id": "ESSAY-N70",
    "spineBookId": "N70",
    "spineBookTitle": "Dubliners",
    "spineBookAuthor": "Joyce",
    "courseCode": "LIT 612",
    "courseTitle": "Modern and Postcolonial Fiction",
    "stage": 600,
    "title": "Cumulative Synthesis: Dubliners in Dialogue with The Metamorphosis and Other Stories",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Joyce's Dubliners (LIT 612), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Metamorphosis and Other Stories and Hamlet. Focus your inquiry on how Dubliners reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "N69",
      "ORIG-115"
    ],
    "analyticalMode": "Literary Form and Cultural Hermeneutics",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Dubliners",
      "Substantive synthesis with preceding works (The Metamorphosis and Other Stories, Hamlet) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in literary form and cultural hermeneutics"
    ]
  },
  {
    "id": "ESSAY-ORIG-237",
    "spineBookId": "ORIG-237",
    "spineBookTitle": "Relativity",
    "spineBookAuthor": "Einstein",
    "courseCode": "SCI 613",
    "courseTitle": "Science, Technology, Environment",
    "stage": 600,
    "title": "Cumulative Synthesis: Relativity in Dialogue with The Scientific Revolution",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Einstein's Relativity (SCI 613), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Scientific Revolution and Almagest (Selections). Focus your inquiry on how Relativity reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-099",
      "N79"
    ],
    "analyticalMode": "Scientific Epistemology and Paradigm Shift",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Relativity",
      "Substantive synthesis with preceding works (The Scientific Revolution, Almagest (Selections)) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in scientific epistemology and paradigm shift"
    ]
  },
  {
    "id": "ESSAY-ORIG-239",
    "spineBookId": "ORIG-239",
    "spineBookTitle": "Silent Spring",
    "spineBookAuthor": "Carson",
    "courseCode": "SCI 613",
    "courseTitle": "Science, Technology, Environment",
    "stage": 600,
    "title": "Cumulative Synthesis: Silent Spring in Dialogue with Relativity",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Carson's Silent Spring (SCI 613), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Relativity and Almagest (Selections). Focus your inquiry on how Silent Spring reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-237",
      "N79"
    ],
    "analyticalMode": "Scientific Epistemology and Paradigm Shift",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Silent Spring",
      "Substantive synthesis with preceding works (Relativity, Almagest (Selections)) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in scientific epistemology and paradigm shift"
    ]
  },
  {
    "id": "ESSAY-ORIG-241",
    "spineBookId": "ORIG-241",
    "spineBookTitle": "Philosophy of Science: Historical Anthology",
    "spineBookAuthor": "McGrew, Alspector-Kelly et al.",
    "courseCode": "PHI 701",
    "courseTitle": "Philosophy of Science",
    "stage": 700,
    "title": "Cumulative Synthesis: Philosophy of Science: Historical Anthology in Dialogue with Japanese Philosophy: A Sourcebook",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of McGrew, Alspector-Kelly et al.'s Philosophy of Science: Historical Anthology (PHI 701), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Japanese Philosophy: A Sourcebook and Introduction to Philosophy. Focus your inquiry on how Philosophy of Science: Historical Anthology reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-234",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Philosophy of Science: Historical Anthology",
      "Substantive synthesis with preceding works (Japanese Philosophy: A Sourcebook, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-242",
    "spineBookId": "ORIG-242",
    "spineBookTitle": "Philosophy of Science: Contemporary Readings",
    "spineBookAuthor": "Balashov & Rosenberg, eds.",
    "courseCode": "PHI 701",
    "courseTitle": "Philosophy of Science",
    "stage": 700,
    "title": "Cumulative Synthesis: Philosophy of Science: Contemporary Readings in Dialogue with Philosophy of Science: Historical Anthology",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Balashov & Rosenberg, eds.'s Philosophy of Science: Contemporary Readings (PHI 701), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Philosophy of Science: Historical Anthology and Introduction to Philosophy. Focus your inquiry on how Philosophy of Science: Contemporary Readings reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-241",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Philosophy of Science: Contemporary Readings",
      "Substantive synthesis with preceding works (Philosophy of Science: Historical Anthology, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-248",
    "spineBookId": "ORIG-248",
    "spineBookTitle": "Metaphysics: The Big Questions",
    "spineBookAuthor": "van Inwagen & Zimmerman, eds.",
    "courseCode": "PHI 703",
    "courseTitle": "Metaphysics",
    "stage": 700,
    "title": "Cumulative Synthesis: Metaphysics: The Big Questions in Dialogue with Philosophy of Science: Contemporary Readings",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of van Inwagen & Zimmerman, eds.'s Metaphysics: The Big Questions (PHI 703), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Philosophy of Science: Contemporary Readings and Introduction to Philosophy. Focus your inquiry on how Metaphysics: The Big Questions reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-242",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Metaphysics: The Big Questions",
      "Substantive synthesis with preceding works (Philosophy of Science: Contemporary Readings, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-251",
    "spineBookId": "ORIG-251",
    "spineBookTitle": "Epistemology: An Anthology",
    "spineBookAuthor": "Sosa, Kim et al., eds.",
    "courseCode": "PHI 704",
    "courseTitle": "Epistemology",
    "stage": 700,
    "title": "Cumulative Synthesis: Epistemology: An Anthology in Dialogue with Metaphysics: The Big Questions",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Sosa, Kim et al., eds.'s Epistemology: An Anthology (PHI 704), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Metaphysics: The Big Questions and Introduction to Philosophy. Focus your inquiry on how Epistemology: An Anthology reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-248",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Epistemology: An Anthology",
      "Substantive synthesis with preceding works (Metaphysics: The Big Questions, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-254",
    "spineBookId": "ORIG-254",
    "spineBookTitle": "Philosophy of Mind: Readings",
    "spineBookAuthor": "Chalmers, ed.",
    "courseCode": "PHI 705",
    "courseTitle": "Mind, Language, Action",
    "stage": 700,
    "title": "Cumulative Synthesis: Philosophy of Mind: Readings in Dialogue with Epistemology: An Anthology",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Chalmers, ed.'s Philosophy of Mind: Readings (PHI 705), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Epistemology: An Anthology and Introduction to Philosophy. Focus your inquiry on how Philosophy of Mind: Readings reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-251",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Philosophy of Mind: Readings",
      "Substantive synthesis with preceding works (Epistemology: An Anthology, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-256",
    "spineBookId": "ORIG-256",
    "spineBookTitle": "The Philosophy of Language",
    "spineBookAuthor": "Martinich & Sosa, eds.",
    "courseCode": "PHI 705",
    "courseTitle": "Mind, Language, Action",
    "stage": 700,
    "title": "Cumulative Synthesis: The Philosophy of Language in Dialogue with Philosophy of Mind: Readings",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Martinich & Sosa, eds.'s The Philosophy of Language (PHI 705), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Philosophy of Mind: Readings and Introduction to Philosophy. Focus your inquiry on how The Philosophy of Language reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-254",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in The Philosophy of Language",
      "Substantive synthesis with preceding works (Philosophy of Mind: Readings, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-259",
    "spineBookId": "ORIG-259",
    "spineBookTitle": "Philosophy of Mathematics: Selected Readings",
    "spineBookAuthor": "Benacerraf & Putnam, eds.",
    "courseCode": "PHI 706",
    "courseTitle": "Philosophy of Logic and Mathematics",
    "stage": 700,
    "title": "Cumulative Synthesis: Philosophy of Mathematics: Selected Readings in Dialogue with The Philosophy of Language",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Benacerraf & Putnam, eds.'s Philosophy of Mathematics: Selected Readings (PHI 706), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in The Philosophy of Language and Introduction to Philosophy. Focus your inquiry on how Philosophy of Mathematics: Selected Readings reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-256",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Philosophy of Mathematics: Selected Readings",
      "Substantive synthesis with preceding works (The Philosophy of Language, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-262",
    "spineBookId": "ORIG-262",
    "spineBookTitle": "A Theory of Justice",
    "spineBookAuthor": "Rawls",
    "courseCode": "PHI 707",
    "courseTitle": "Political and Social Philosophy",
    "stage": 700,
    "title": "Cumulative Synthesis: A Theory of Justice in Dialogue with Philosophy of Mathematics: Selected Readings",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Rawls's A Theory of Justice (PHI 707), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Philosophy of Mathematics: Selected Readings and Introduction to Philosophy. Focus your inquiry on how A Theory of Justice reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-259",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in A Theory of Justice",
      "Substantive synthesis with preceding works (Philosophy of Mathematics: Selected Readings, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-268",
    "spineBookId": "ORIG-268",
    "spineBookTitle": "Feminist Theory: A Philosophical Anthology",
    "spineBookAuthor": "Cudd & Andreasen, eds.",
    "courseCode": "PHI 709",
    "courseTitle": "Feminist Philosophy and Race",
    "stage": 700,
    "title": "Cumulative Synthesis: Feminist Theory: A Philosophical Anthology in Dialogue with A Theory of Justice",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Cudd & Andreasen, eds.'s Feminist Theory: A Philosophical Anthology (PHI 709), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in A Theory of Justice and Introduction to Philosophy. Focus your inquiry on how Feminist Theory: A Philosophical Anthology reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-262",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Feminist Theory: A Philosophical Anthology",
      "Substantive synthesis with preceding works (A Theory of Justice, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  },
  {
    "id": "ESSAY-ORIG-272",
    "spineBookId": "ORIG-272",
    "spineBookTitle": "Philosophy of Education: An Anthology",
    "spineBookAuthor": "Curren, ed.",
    "courseCode": "PHI 710",
    "courseTitle": "The Thesis Capstone",
    "stage": 700,
    "title": "Cumulative Synthesis: Philosophy of Education: An Anthology in Dialogue with Feminist Theory: A Philosophical Anthology",
    "prompt": "Examine the central arguments, methodologies, and thematic preoccupations of Curren, ed.'s Philosophy of Education: An Anthology (PHI 710), evaluating how this work transforms, critiques, or synthesizes foundational problems established earlier in the curriculum—specifically in Feminist Theory: A Philosophical Anthology and Introduction to Philosophy. Focus your inquiry on how Philosophy of Education: An Anthology reconfigures the relationship between core claims of authority, evidence, and human agency, demonstrating how the newly completed work advances or destabilizes the intellectual commitments of its predecessors.",
    "priorBookIds": [
      "ORIG-268",
      "ORIG-012"
    ],
    "analyticalMode": "Dialectical Argumentation and Epistemic Critique",
    "wordCountGuideline": "1,500 – 2,000 words",
    "rubricCriteria": [
      "Rigorous textual analysis of primary concepts in Philosophy of Education: An Anthology",
      "Substantive synthesis with preceding works (Feminist Theory: A Philosophical Anthology, Introduction to Philosophy) without reliance on future curricular texts",
      "Coherent, thesis-driven argumentation evaluating transformations in dialectical argumentation and epistemic critique"
    ]
  }
];

export const SYNTHESIS_ESSAY_MAP: Record<string, SynthesisEssay> = {};
SYNTHESIS_ESSAYS.forEach(essay => {
  SYNTHESIS_ESSAY_MAP[essay.spineBookId] = essay;
});

// Import Liberal Works to generate complete essay coverage for all Context and Reference books
import { REVISED_LIBERAL_WORKS } from './curriculumData';

REVISED_LIBERAL_WORKS.forEach(book => {
  if (!SYNTHESIS_ESSAY_MAP[book.id]) {
    const isReference = book.lane === 'Reference';
    const isContext = book.lane === 'Context';
    
    // Find preceding spine books in the same course or stage for synthesis dialogue
    const relatedSpine = REVISED_LIBERAL_WORKS.filter(
      b => b.lane === 'Spine' && b.stage <= book.stage && (b.courseCode === book.courseCode || b.stage === book.stage)
    );
    const priorIds = relatedSpine.slice(0, 3).map(b => b.id);

    const generatedEssay: SynthesisEssay = {
      id: `ESSAY-${book.id}`,
      spineBookId: book.id,
      spineBookTitle: book.title,
      spineBookAuthor: book.author,
      courseCode: book.courseCode,
      courseTitle: book.courseTitle,
      stage: book.stage,
      title: isReference
        ? `Scholarly Apparatus & Critical Synthesis: ${book.title} in Dialogue with ${book.courseCode} Foundations`
        : isContext
        ? `Monograph Disciplinary Synthesis: ${book.title} (${book.author}) and ${book.courseCode} Problems`
        : `Cumulative Synthesis: ${book.title} in Stage ${book.stage} Dialogue`,
      prompt: isReference
        ? `Examine how ${book.author}'s authoritative reference companion "${book.title}" (${book.courseCode}: ${book.courseTitle}) operates as a critical interpretive apparatus for the primary sources and curricular monographs of Stage ${book.stage}. Analyze how its scholarly commentary contextualizes contending historiographical paradigms, elucidates foundational concepts, and enriches the dialectical reading of the primary canon.`
        : isContext
        ? `Evaluate the central arguments, historical methodologies, and critical evidence presented in ${book.author}'s "${book.title}" (${book.courseCode}: ${book.courseTitle}). Analyze how this secondary monograph refines, challenges, or contextualizes the core primary questions of Stage ${book.stage}, focusing on human agency, historical contingency, and normative commitments.`
        : `Analyze the core philosophical, literary, or historical contributions of "${book.title}" (${book.author}) within ${book.courseCode}. Formulate an argumentative evaluation of how this work synthesizes foundational themes of authority, methodology, and critique across Stage ${book.stage}.`,
      priorBookIds: priorIds,
      analyticalMode: isReference
        ? 'Critical Apparatus & Scholarly Commentary Analysis'
        : isContext
        ? 'Historiographical Context & Methodological Synthesis'
        : 'Intertextual and Disciplinary Synthesis',
      wordCountGuideline: '1,500 – 2,000 words',
      rubricCriteria: [
        `Rigorous critical engagement with the principal arguments and evidentiary claims in ${book.title}`,
        `Substantive synthesis with Stage ${book.stage} primary spine works and foundational course themes`,
        `Methodological evaluation of authority, textual interpretation, and scholarly evidence`,
      ],
    };

    SYNTHESIS_ESSAYS.push(generatedEssay);
    SYNTHESIS_ESSAY_MAP[book.id] = generatedEssay;
  }
});

export function getSynthesisEssayForBook(bookId: string): SynthesisEssay | undefined {
  return SYNTHESIS_ESSAY_MAP[bookId];
}

