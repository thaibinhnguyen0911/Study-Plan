export type LinkType = 'HARD_PREREQ' | 'READ_ALONGSIDE' | 'REREAD_OF' | 'INFORMS' | 'SAME_COURSE';

export interface BookLink {
  from_book: string;
  to_book: string;
  link_type: LinkType;
  note?: string;
}

export const BOOK_LINKS: BookLink[] = [

  {
    from_book: 'ORIG-035', // Aristotle, Prior Analytics (Book I)
    to_book: 'ORIG-260',   // Priest, Non-Classical Logic
    link_type: 'HARD_PREREQ',
    note: 'Classical deductive syllogistic logic and bivalence required before non-classical formalisms',
  },
  {
    from_book: 'N58',      // Hume, Enquiry
    to_book: 'ORIG-133',   // Kant, Critique of Pure Reason
    link_type: 'HARD_PREREQ',
    note: 'Humean skepticism awakes Kant from dogmatic slumber',
  },
  {
    from_book: 'N60',      // Hegel, Phenomenology selections
    to_book: 'ORIG-138',   // Communist Manifesto
    link_type: 'HARD_PREREQ',
    note: 'Hegelian dialectic materialist inversion',
  },
  {
    from_book: 'N60',      // Hegel
    to_book: 'ORIG-135',   // Nietzsche, Beyond Good and Evil
    link_type: 'HARD_PREREQ',
    note: 'Critique of German idealism and dialectical systems',
  },
  {
    from_book: 'N60',      // Hegel
    to_book: 'ORIG-137',   // Nietzsche Reader
    link_type: 'HARD_PREREQ',
    note: 'Post-Hegelian genealogical critique',
  },
  {
    from_book: 'N60',      // Hegel
    to_book: 'ORIG-209',   // Fanon, The Wretched of the Earth
    link_type: 'HARD_PREREQ',
    note: 'Master-slave dialectic applied to colonization',
  },
  {
    from_book: 'N60',      // Hegel
    to_book: 'N73',        // Beauvoir, The Second Sex
    link_type: 'HARD_PREREQ',
    note: 'Master-slave dialectic and existential othering',
  },
  {
    from_book: 'N60',      // Hegel
    to_book: 'N75',        // Du Bois, The Souls of Black Folk
    link_type: 'HARD_PREREQ',
    note: 'Double-consciousness grounded in dialectical recognition',
  },
  {
    from_book: 'N74',      // Said, Orientalism
    to_book: 'ORIG-216',   // Bhabha, The Location of Culture
    link_type: 'HARD_PREREQ',
    note: 'Postcolonial discourse theory prerequisite',
  },
  {
    from_book: 'ORIG-256', // Frege-Russell selections in Phil of Language
    to_book: 'ORIG-225',   // Wittgenstein, Philosophical Investigations
    link_type: 'HARD_PREREQ',
    note: 'Early analytic logic of language required before late language-games critique',
  },
  {
    from_book: 'ORIG-114', // Smith, Wealth of Nations
    to_book: 'ORIG-262',   // Rawls, A Theory of Justice
    link_type: 'HARD_PREREQ',
    note: 'Classical political economy and contractarianism required for modern justice theory',
  },
  {
    from_book: 'N63',      // Weber, Protestant Ethic
    to_book: 'ORIG-265',   // Rosenberg, Philosophy of Social Science
    link_type: 'HARD_PREREQ',
    note: 'Foundational sociology required for advanced philosophy of social science',
  },
  {
    from_book: 'N71',      // Tocqueville, Democracy in America
    to_book: 'ORIG-264',   // Tebbit, Philosophy of Law
    link_type: 'HARD_PREREQ',
    note: 'Democratic institutional theory required for jurisprudence',
  },
  {
    from_book: 'N75',      // Du Bois
    to_book: 'ORIG-265',   // Rosenberg
    link_type: 'HARD_PREREQ',
    note: 'Sociology of race and knowledge required for philosophy of social science',
  },
  {
    from_book: 'ORIG-029', // Aristotle selections
    to_book: 'ORIG-058',   // Aquinas, Basic Writings
    link_type: 'HARD_PREREQ',
    note: 'Aristotelian teleology required for Thomistic scholastic synthesis',
  },

  {
    from_book: 'ORIG-018', // Tanakh
    to_book: 'ORIG-012',   // Perry, Bratman & Fischer, Intro to Philosophy
    link_type: 'READ_ALONGSIDE',
    note: 'Orientation pairing: Ancient covenant and myth paired with philosophical method',
  },
  {
    from_book: 'ORIG-020', // Iliad
    to_book: 'ORIG-012',
    link_type: 'READ_ALONGSIDE',
    note: 'Orientation pairing: Homeric virtue alongside introductory philosophical ethics',
  },
  {
    from_book: 'ORIG-021', // Odyssey
    to_book: 'ORIG-012',
    link_type: 'READ_ALONGSIDE',
    note: 'Orientation pairing: Mythological journey paired with introductory philosophical writing',
  },
  {
    from_book: 'ORIG-022', // Herodotus
    to_book: 'ORIG-004',   // Bloch, The Historian's Craft
    link_type: 'READ_ALONGSIDE',
    note: 'Inquiry and evidence: Herodotus read against Marc Bloch’s craft of historical testimony',
  },
  {
    from_book: 'ORIG-024', // Thucydides
    to_book: 'ORIG-006',   // Grafton, The Footnote
    link_type: 'READ_ALONGSIDE',
    note: 'Historiographical rigour: Thucydides’ critical documentary method against Grafton’s history of the footnote',
  },
  {
    from_book: 'N57',      // Gilgamesh
    to_book: 'ORIG-017',   // Van De Mieroop, History of the Ancient Near East
    link_type: 'READ_ALONGSIDE',
    note: 'Archaeological and historical matrix of Mesopotamia surrounding Gilgamesh',
  },
  {
    from_book: 'ORIG-027', // Plato, Republic
    to_book: 'ORIG-025',   // Kenny, Ancient Philosophy
    link_type: 'READ_ALONGSIDE',
    note: 'Dialectical context: Kenny’s historical survey contextualizing Platonic dialogue',
  },
  {
    from_book: 'ORIG-029', // Aristotle
    to_book: 'ORIG-025',   // Kenny
    link_type: 'READ_ALONGSIDE',
    note: 'Systematic context: Kenny’s analysis of Aristotle’s physics, metaphysics, and ethics',
  },
  {
    from_book: 'ORIG-046', // Sima Qian
    to_book: 'ORIG-045',   // Lewis, Early Chinese Empires
    link_type: 'READ_ALONGSIDE',
    note: 'Imperial Qin and Han structures framing the Shiji’s historical narrative',
  },
  {
    from_book: 'ORIG-096', // Copernicus
    to_book: 'ORIG-095',   // Saliba, Islamic Science and European Renaissance
    link_type: 'READ_ALONGSIDE',
    note: 'Non-Western planetary models that enabled the Copernican astronomical reform',
  },
  {
    from_book: 'ORIG-098', // Newton
    to_book: 'ORIG-100',   // Elman, On Their Own Terms
    link_type: 'READ_ALONGSIDE',
    note: 'Comparative perspective: European natural philosophy alongside Jesuit science in China',
  },
  {
    from_book: 'ORIG-116', // Don Quixote
    to_book: 'N64',        // Historical Poetry Anthology
    link_type: 'READ_ALONGSIDE',
    note: 'Golden Age chivalric romance parodied alongside Renaissance lyrical poetry',
  },
  {
    from_book: 'ORIG-123', // Las Casas
    to_book: 'ORIG-125',   // Stern, Peru's Indian Peoples
    link_type: 'READ_ALONGSIDE',
    note: 'Colonial reality: Las Casas’ polemic against Stern’s indigenous archival ethnohistory',
  },
  {
    from_book: 'ORIG-130', // Doyle, French Revolution
    to_book: 'ORIG-127',   // Colley, Britons
    link_type: 'READ_ALONGSIDE',
    note: 'Cross-Channel contrast: French republican rupture versus British imperial state-building',
  },
  {
    from_book: 'ORIG-133', // Kant, CPR
    to_book: 'ORIG-132',   // Guyer, Kant
    link_type: 'READ_ALONGSIDE',
    note: 'Authoritative contemporary commentary on the transcendental deduction',
  },
  {
    from_book: 'ORIG-145', // Wollstonecraft
    to_book: 'ORIG-146',   // Wiesner-Hanks, Gender in History
    link_type: 'READ_ALONGSIDE',
    note: 'Global historical context for early feminist political claims',
  },
  {
    from_book: 'ORIG-157', // Crosby, Ecological Imperialism
    to_book: 'ORIG-159',   // Elvin, Retreat of the Elephants
    link_type: 'READ_ALONGSIDE',
    note: 'Biotic Columbian exchange paired with Chinese three-millennium deforestation history',
  },
  {
    from_book: 'N61',      // Equiano
    to_book: 'ORIG-172',   // Patterson, Slavery and Social Death
    link_type: 'READ_ALONGSIDE',
    note: 'First-person testimony read alongside comparative sociological theory of natal alienation',
  },
  {
    from_book: 'N62',      // Frederick Douglass
    to_book: 'ORIG-172',   // Patterson, Slavery and Social Death
    link_type: 'READ_ALONGSIDE',
    note: 'Abolitionist slave narrative read alongside sociological definition of slavery',
  },
  {
    from_book: 'N71',      // Tocqueville
    to_book: 'ORIG-174',   // Foner, Give Me Liberty!
    link_type: 'READ_ALONGSIDE',
    note: 'Foreign aristocratic analysis of American democracy paired with American radical democratic history',
  },
  {
    from_book: 'ORIG-189', // Arendt, Totalitarianism
    to_book: 'ORIG-191',   // Browning, Origins of Final Solution
    link_type: 'READ_ALONGSIDE',
    note: 'Philosophical analysis of totalitarian terror paired with detailed bureaucratic archival history',
  },
  {
    from_book: 'ORIG-209', // Fanon
    to_book: 'ORIG-208',   // Rodney, How Europe Underdeveloped Africa
    link_type: 'READ_ALONGSIDE',
    note: 'Psychological and armed anti-colonial theory paired with economic dependency history',
  },
  {
    from_book: 'ORIG-216', // Bhabha
    to_book: 'ORIG-214',   // Chatterjee, The Nation and Its Fragments
    link_type: 'READ_ALONGSIDE',
    note: 'Postcolonial mimicry and hybridity paired with Subaltern Studies anti-colonial nationalist analysis',
  },
  {
    from_book: 'ORIG-221', // Hayden White
    to_book: 'ORIG-219',   // Koselleck, Futures Past
    link_type: 'READ_ALONGSIDE',
    note: 'Narratological emplotment theory paired with German Begriffsgeschichte and historical temporalities',
  },
  {
    from_book: 'ORIG-262', // Rawls
    to_book: 'ORIG-261',   // Kymlicka, Contemporary Political Philosophy
    link_type: 'READ_ALONGSIDE',
    note: 'Systematic liberal justice theory paired with analytical survey of libertarian and communitarian critics',
  },

  {
    from_book: 'ORIG-008', // Giambattista Vico, The New Science
    to_book: 'ORIG-009',   // R. G. Collingwood, The Idea of History
    link_type: 'READ_ALONGSIDE',
    note: 'Vico poetic wisdom and civil origins paired with Collingwood philosophical history and historical reenactment',
  },
  {
    from_book: 'ORIG-008', // Giambattista Vico, The New Science
    to_book: 'ORIG-138',   // Marx & Engels, The Communist Manifesto
    link_type: 'INFORMS',
    note: 'Vico civil institutions and verum-factum principle informing Marxian materialist conception of history',
  },
  {
    from_book: 'ORIG-009', // R. G. Collingwood, The Idea of History
    to_book: 'ORIG-024',   // Thucydides, History of the Peloponnesian War
    link_type: 'INFORMS',
    note: 'Collingwood critique of Greco-Roman substantialism and Thucydidean psychological historiography',
  },
  {
    from_book: 'ORIG-015', // Plato, Gorgias
    to_book: 'ORIG-027',   // Plato, Complete Works (Selected Dialogues)
    link_type: 'INFORMS',
    note: 'Gorgias refutation of Callicles and sophistical rhetoric directly prefiguring Republic examination of justice',
  },
  {
    from_book: 'ORIG-015', // Plato, Gorgias
    to_book: 'N77',        // Nietzsche, On the Genealogy of Morality
    link_type: 'INFORMS',
    note: 'Callicles doctrine of the natural right of the stronger prefiguring Nietzschean master morality',
  },
  {
    from_book: 'ORIG-274', // John Henry Newman, The Idea of a University
    to_book: 'ORIG-272',   // Curren (ed.), Philosophy of Education: An Anthology
    link_type: 'INFORMS',
    note: 'Newman defense of liberal education as an end in itself grounding modern philosophy of higher education',
  },
  {
    from_book: 'ORIG-274', // John Henry Newman, The Idea of a University
    to_book: 'ORIG-139',   // Mill, On Liberty
    link_type: 'INFORMS',
    note: 'Newman philosophical cultivation in dialogue with Mill utilitarian liberty and educational development',
  },
  {
    from_book: 'ORIG-035', // Aristotle, Prior Analytics (Book I)
    to_book: 'ORIG-034',   // Euclid, Elements
    link_type: 'READ_ALONGSIDE',
    note: 'Aristotelian formal syllogistic deduction paired alongside Euclidean axiomatic-deductive geometry',
  },
  {
    from_book: 'ORIG-035', // Aristotle, Prior Analytics (Book I)
    to_book: 'REPL-001',   // Russell, Introduction to Mathematical Philosophy
    link_type: 'READ_ALONGSIDE',
    note: 'Aristotle classical syllogistic logic paired with Russell modern foundational logic and philosophy of mathematics',
  },
  {
    from_book: 'ORIG-018', // Hebrew Bible (Tanakh)
    to_book: 'ORIG-058',   // Aquinas, Basic Writings
    link_type: 'INFORMS',
    note: 'Hebrew Biblical covenant and revelation informing Thomistic sacred doctrine in the Summa Theologiae',
  },

  { from_book: 'ORIG-056', to_book: 'ORIG-058', link_type: 'INFORMS', note: 'Augustinian illumination in dialogue with Thomistic Aristotelian synthesis' },
  { from_book: 'ORIG-058', to_book: 'ORIG-067', link_type: 'INFORMS', note: 'Latin Averroism and the Aristotle reception' },
  { from_book: 'ORIG-066', to_book: 'ORIG-067', link_type: 'INFORMS', note: 'Dialectical opponents: Tahafut al-Falasifa refuted by Tahafut al-Tahafut on causality and reason' },
  { from_book: 'N78',      to_book: 'ORIG-058', link_type: 'INFORMS', note: 'Maimonides influence on Aquinas regarding divine attributes and negative theology' },

  { from_book: 'ORIG-027', to_book: 'ORIG-029', link_type: 'INFORMS', note: 'Platonic transcendent forms in dialogue with Aristotelian immanence and teleology' },
  { from_book: 'ORIG-020', to_book: 'ORIG-021', link_type: 'INFORMS', note: 'Homeric heroic wrath and post-war wandering' },
  { from_book: 'ORIG-020', to_book: 'ORIG-027', link_type: 'INFORMS', note: 'Platonic censorship and admiration of Homeric poetry' },

  { from_book: 'ORIG-114', to_book: 'ORIG-154', link_type: 'INFORMS', note: 'Adam Smith market integration vs Pomeranz coal-and-colonies Great Divergence' },
  { from_book: 'ORIG-114', to_book: 'ORIG-155', link_type: 'INFORMS', note: 'Smithian division of labor vs Allen high-wage economy thesis' },
  { from_book: 'ORIG-123', to_book: 'ORIG-124', link_type: 'INFORMS', note: 'Primary polemical account vs Restall seven myths revision' },

  { from_book: 'ORIG-111', to_book: 'ORIG-112', link_type: 'INFORMS', note: 'Hobbesian absolutist covenant vs Lockean fiduciary trust' },
  { from_book: 'ORIG-112', to_book: 'ORIG-113', link_type: 'INFORMS', note: 'Lockean representative property rights vs Rousseau general will' },
  { from_book: 'ORIG-110', to_book: 'ORIG-111', link_type: 'INFORMS', note: 'Machiavellian virtù and statecraft informing modern sovereign power' },

  { from_book: 'N81',      to_book: 'ORIG-128', link_type: 'INFORMS', note: 'Burkean prescription and organic continuity contested by Paine radical democratic rights of man' },
  { from_book: 'ORIG-138', to_book: 'ORIG-114', link_type: 'INFORMS', note: 'Marxist surplus value critique of classical bourgeois economics' },
  { from_book: 'N58',      to_book: 'ORIG-133', link_type: 'INFORMS', note: 'Humean cause-and-effect skepticism informing Kantian synthetic a priori' },
  { from_book: 'ORIG-133', to_book: 'N60',      link_type: 'INFORMS', note: 'Kantian limits of reason transformed into Hegelian historical Spirit' },
  { from_book: 'ORIG-135', to_book: 'ORIG-133', link_type: 'INFORMS', note: 'Nietzschean psychology of will to truth undermining Kantian morality' },

  { from_book: 'ORIG-209', to_book: 'N74',      link_type: 'INFORMS', note: 'Fanonian anti-colonial psychology informing Said’s critique of colonial discourse' },
  { from_book: 'N74',      to_book: 'ORIG-216', link_type: 'INFORMS', note: 'Said’s imaginative geography developed into Bhabha’s ambivalent third space' },
  { from_book: 'ORIG-189', to_book: 'ORIG-191', link_type: 'INFORMS', note: 'Arendt’s banality of evil in dialogue with Browning’s ordinary men' },
  { from_book: 'N61',      to_book: 'N62',      link_type: 'INFORMS', note: 'Trans-Atlantic middle passage memoir informing American plantation slavery narrative' },

  // --- SJC Great Books & Liberal Arts Added Connections ---
  { from_book: 'ORIG-020', to_book: 'SJC-001', link_type: 'HARD_PREREQ', note: 'Homeric archaic heroic cosmology required for tragic divine contest' },
  { from_book: 'SJC-001', to_book: 'N56', link_type: 'INFORMS', note: 'Completes SJC Aeschylus cluster, testing Zeus\'s justice against Oresteia civic reconciliation' },
  { from_book: 'SJC-001', to_book: 'ORIG-023', link_type: 'INFORMS', note: 'Divine sovereignty and cosmic order tested against Sophoclean human hubris' },
  { from_book: 'SJC-001', to_book: 'ORIG-027', link_type: 'INFORMS', note: 'Prefigures Platonic critique of mythic gods and the philosophic lawgiver' },

  { from_book: 'ORIG-020', to_book: 'SJC-002', link_type: 'INFORMS', note: 'Ajax honor culture and despair read directly against Homeric Achilles' },
  { from_book: 'SJC-002', to_book: 'ORIG-023', link_type: 'INFORMS', note: 'Extends Sophoclean tragic corpus to wounded-hero ethics and isolation' },
  { from_book: 'SJC-002', to_book: 'ORIG-029', link_type: 'INFORMS', note: 'Paradigmatic demonstration of Aristotle Poetics on tragic character and hamartia' },

  { from_book: 'SJC-003', to_book: 'N56', link_type: 'INFORMS', note: 'Late-classical tragic transformation of religious ecstasy and destructive divine passion' },
  { from_book: 'SJC-003', to_book: 'N94', link_type: 'INFORMS', note: 'Tragic Dionysian frenzy in direct thematic contrast to comic underworld judgment in Frogs' },
  { from_book: 'SJC-003', to_book: 'SJC-039', link_type: 'INFORMS', note: 'Ancient Greek tragic archetype directly reworked into Racine French neoclassical Phèdre' },

  { from_book: 'SJC-004', to_book: 'ORIG-027', link_type: 'INFORMS', note: 'Immediate comic satire on Socrates that Plato answers directly in the Apology' },
  { from_book: 'SJC-004', to_book: 'ORIG-025', link_type: 'INFORMS', note: 'Contemporary comic caricature illuminating Kenny account of the fifth-century Sophistic movement' },

  { from_book: 'SJC-005', to_book: 'ORIG-020', link_type: 'INFORMS', note: 'Sappho Helen fragment reframes Homeric epic warfare through private erotic yearning' },
  { from_book: 'SJC-005', to_book: 'ORIG-027', link_type: 'INFORMS', note: 'Ancient lyric passion quoted and analyzed in Plato Phaedrus discourse on love' },

  { from_book: 'SJC-006', to_book: 'N83', link_type: 'READ_ALONGSIDE', note: 'Roman Stoicism: emancipated Greek slave teacher paired with reigning Roman emperor' },
  { from_book: 'ORIG-029', to_book: 'SJC-006', link_type: 'INFORMS', note: 'Hellenistic Stoic tranquility developed from Aristotelian teleology and eudaimonia' },

  { from_book: 'ORIG-024', to_book: 'SJC-007', link_type: 'INFORMS', note: 'Thucydidean political realism extended into imperial Roman autocratic dynastic history' },
  { from_book: 'SJC-007', to_book: 'N95', link_type: 'INFORMS', note: 'Imperial annals in dialogue with Plutarch comparative moral biography of statesmen' },
  { from_book: 'SJC-007', to_book: 'ORIG-007', link_type: 'INFORMS', note: 'Historiographical autopsy of imperial narrative power and silenced republican dissent' },

  { from_book: 'SJC-008', to_book: 'SJC-028', link_type: 'INFORMS', note: 'Republican founding narrative serving as the direct primary object of Machiavelli Discourses' },
  { from_book: 'SJC-008', to_book: 'ORIG-031', link_type: 'INFORMS', note: 'Primary textual foundation for Boatwright et al. Roman republican history' },

  { from_book: 'ORIG-029', to_book: 'SJC-009', link_type: 'INFORMS', note: 'Epicurean atomism challenging Aristotelian teleology, form, and final causes' },
  { from_book: 'SJC-009', to_book: 'ORIG-056', link_type: 'INFORMS', note: 'Materialist atomism that Augustine Christian Platonism explicitly refutes in Confessions' },
  { from_book: 'SJC-009', to_book: 'SJC-016', link_type: 'INFORMS', note: 'Post-Aristotelian divergence: pure physical materialism versus transcendent Neoplatonic emanation' },

  { from_book: 'ORIG-034', to_book: 'SJC-010', link_type: 'HARD_PREREQ', note: 'Euclidean synthetic plane geometry strictly required before conic curves' },
  { from_book: 'SJC-010', to_book: 'SJC-015', link_type: 'INFORMS', note: 'Ancient conic geometric properties translated into Cartesian algebraic coordinate equations' },
  { from_book: 'SJC-010', to_book: 'ORIG-107', link_type: 'INFORMS', note: 'Mathematical curve theory underlying Keplerian planetary ellipses and Newtonian orbits' },

  { from_book: 'ORIG-034', to_book: 'SJC-011', link_type: 'HARD_PREREQ', note: 'Euclidean axiomatic method required for method of exhaustion and mechanical theorems' },
  { from_book: 'SJC-011', to_book: 'SJC-010', link_type: 'INFORMS', note: 'Hellenistic mathematical dialogue on curves, spirals, quadrature, and hydrostatics' },
  { from_book: 'SJC-011', to_book: 'ORIG-107', link_type: 'INFORMS', note: 'Exhaustion method directly prefiguring the infinitesimal calculus of Newton' },

  { from_book: 'ORIG-034', to_book: 'SJC-012', link_type: 'INFORMS', note: 'Completes classical quadrivium: discrete numerical theory alongside continuous spatial geometry' },
  { from_book: 'SJC-012', to_book: 'ORIG-258', link_type: 'INFORMS', note: 'Pythagorean-Platonic arithmetic informing modern structural philosophy of mathematics' },

  { from_book: 'SJC-013', to_book: 'SJC-015', link_type: 'HARD_PREREQ', note: 'Foundational symbolic algebra required for Descartes analytic geometry' },

  { from_book: 'SJC-010', to_book: 'SJC-014', link_type: 'INFORMS', note: 'Projective synthetic alternative to Apollonian metric conic theory' },
  { from_book: 'SJC-014', to_book: 'SJC-015', link_type: 'INFORMS', note: 'Synthetic projective method contrasting with Cartesian coordinate analysis' },

  { from_book: 'ORIG-034', to_book: 'SJC-015', link_type: 'HARD_PREREQ', note: 'Euclid Elements required as axiomatic baseline for analytic geometric synthesis' },
  { from_book: 'SJC-015', to_book: 'ORIG-106', link_type: 'INFORMS', note: 'Mathematical companion to Discourse on Method and Cartesian epistemological rationalism' },
  { from_book: 'SJC-015', to_book: 'ORIG-107', link_type: 'INFORMS', note: 'Coordinate geometry supplying analytical apparatus for Newton Principia' },

  { from_book: 'ORIG-027', to_book: 'SJC-016', link_type: 'HARD_PREREQ', note: 'Platonic metaphysics of the Good and Timaeus cosmology required for Neoplatonic One' },
  { from_book: 'SJC-016', to_book: 'ORIG-056', link_type: 'INFORMS', note: 'The books of the Platonists read by Augustine in Book VII before conversion' },

  { from_book: 'ORIG-029', to_book: 'SJC-017', link_type: 'HARD_PREREQ', note: 'Aristotelian corpus required for the falsafa tradition of al-Farabi and Avicenna' },
  { from_book: 'SJC-017', to_book: 'ORIG-066', link_type: 'INFORMS', note: 'The rationalist metaphysics that al-Ghazali attacks in Incoherence of the Philosophers' },
  { from_book: 'SJC-017', to_book: 'ORIG-067', link_type: 'INFORMS', note: 'Primary textual heritage defended by Averroes in Decisive Treatise' },

  { from_book: 'ORIG-020', to_book: 'SJC-018', link_type: 'INFORMS', note: 'Comparative world epic: Persian royal myth and heroic destiny beside Homeric glory' },
  { from_book: 'SJC-018', to_book: 'ORIG-069', link_type: 'INFORMS', note: 'Foundational poetic epic world preceding Rumi and Persian Sufi literature' },

  { from_book: 'ORIG-018', to_book: 'SJC-019', link_type: 'INFORMS', note: 'Solomonic covenant and Ark of the Covenant narrative in dialogue with the Tanakh' },
  { from_book: 'ORIG-065', to_book: 'SJC-019', link_type: 'INFORMS', note: 'Comparative scriptural narrative of Solomon and the Queen of Sheba' },

  { from_book: 'ORIG-104', to_book: 'SJC-020', link_type: 'HARD_PREREQ', note: 'Copernican heliocentrism required before elliptical orbital mechanics' },
  { from_book: 'SJC-020', to_book: 'SJC-021', link_type: 'READ_ALONGSIDE', note: 'Paired core texts: planetary laws in Epitome and physical derivation in Astronomia Nova' },
  { from_book: 'SJC-020', to_book: 'ORIG-107', link_type: 'INFORMS', note: 'Kepler empirical laws supplying mathematical basis for universal gravitation' },

  { from_book: 'ORIG-034', to_book: 'SJC-022', link_type: 'HARD_PREREQ', note: 'Euclidean geometric proportion theory required for kinematics of acceleration' },
  { from_book: 'ORIG-105', to_book: 'SJC-022', link_type: 'READ_ALONGSIDE', note: 'Completes SJC Galileo pair: celestial dialogue joined to terrestrial mechanics' },
  { from_book: 'SJC-022', to_book: 'ORIG-107', link_type: 'INFORMS', note: 'Kinematics of falling bodies and inertia feeding Newtonian mechanics' },

  { from_book: 'SJC-023', to_book: 'ORIG-106', link_type: 'INFORMS', note: 'Inductive experimental method contrasted directly with Cartesian deductive rationalism' },
  { from_book: 'SJC-023', to_book: 'ORIG-240', link_type: 'INFORMS', note: 'Baconian inductivism and idols of the mind foundational for modern philosophy of science' },

  { from_book: 'SJC-024', to_book: 'ORIG-107', link_type: 'INFORMS', note: 'Wave theory of light in historic controversy with Newton corpuscular theory' },
  { from_book: 'ORIG-106', to_book: 'SJC-024', link_type: 'INFORMS', note: 'Collision physics correcting and formalizing Cartesian impact laws' },

  { from_book: 'SJC-023', to_book: 'SJC-025', link_type: 'INFORMS', note: 'Hydrostatic experiments exemplifying Baconian experimental philosophy' },
  { from_book: 'SJC-025', to_book: 'ORIG-107', link_type: 'INFORMS', note: 'Atmospheric and fluid pressure mechanics informing classical Newtonian physics' },

  { from_book: 'SJC-026', to_book: 'ORIG-107', link_type: 'INFORMS', note: 'Chemical revolution and conservation of mass paralleling Newtonian mechanics' },
  { from_book: 'SJC-026', to_book: 'SJC-066', link_type: 'INFORMS', note: 'Nomenclature reform and oxygen theory foundational for 19th-century chemistry' },

  { from_book: 'ORIG-110', to_book: 'SJC-028', link_type: 'READ_ALONGSIDE', note: 'The two faces of Machiavelli: princely autocracy alongside republican civic liberty' },
  { from_book: 'SJC-028', to_book: 'ORIG-111', link_type: 'INFORMS', note: 'Republican civic humanism informing early modern sovereign statecraft' },

  { from_book: 'SJC-029', to_book: 'ORIG-113', link_type: 'HARD_PREREQ', note: 'Critique of civil society and property required before Social Contract general will' },
  { from_book: 'ORIG-111', to_book: 'SJC-029', link_type: 'INFORMS', note: 'Direct rejection of Hobbesian warlike state of nature' },
  { from_book: 'SJC-029', to_book: 'ORIG-145', link_type: 'INFORMS', note: 'Rousseauian natural education challenged by Wollstonecraft Vindication of Rights of Woman' },

  { from_book: 'ORIG-106', to_book: 'SJC-030', link_type: 'INFORMS', note: 'Fideist-skeptical rejoinder to Cartesian rationalism: the wager and limits of geometric reason' },
  { from_book: 'N65', to_book: 'SJC-030', link_type: 'INFORMS', note: 'Montaignean skepticism converted into Christian theological reflection on human misery and greatness' },

  { from_book: 'ORIG-106', to_book: 'SJC-031', link_type: 'INFORMS', note: 'Radical naturalistic transformation of Cartesian substance metaphysics into democratic secular politics' },
  { from_book: 'ORIG-111', to_book: 'SJC-031', link_type: 'INFORMS', note: 'Biblical hermeneutics and freedom of thought in dialogue with Hobbesian sovereignty' },

  { from_book: 'ORIG-106', to_book: 'SJC-032', link_type: 'INFORMS', note: 'Dynamics and monadology challenging Cartesian conservation of motion and passive extension' },
  { from_book: 'N58', to_book: 'SJC-032', link_type: 'INFORMS', note: 'Rationalist pre-established harmony in sharp philosophical contrast with Humean empiricism' },
  { from_book: 'SJC-032', to_book: 'ORIG-133', link_type: 'INFORMS', note: 'Pre-critical rationalist metaphysics dismantled by Kant Critique of Pure Reason' },

  { from_book: 'SJC-034', to_book: 'SJC-035', link_type: 'READ_ALONGSIDE', note: 'Declaration of natural rights informing the constitutional framework of government' },
  { from_book: 'SJC-033', to_book: 'SJC-035', link_type: 'INFORMS', note: 'Articles of Confederation crisis directly precipitating the constitutional convention' },
  { from_book: 'SJC-035', to_book: 'ORIG-129', link_type: 'HARD_PREREQ', note: 'Constitutional text required for the Federalist ratification defense' },
  { from_book: 'ORIG-112', to_book: 'SJC-034', link_type: 'INFORMS', note: 'Lockean natural rights and consent of the governed formulated into revolutionary law' },

  { from_book: 'ORIG-115', to_book: 'SJC-036', link_type: 'INFORMS', note: 'Completes SJC dramatic sequence across English history plays, major comedies, and Roman tragedies' },
  { from_book: 'ORIG-110', to_book: 'SJC-036', link_type: 'INFORMS', note: 'Henriad history plays illuminating Machiavellian political theater and monarchical power' },

  { from_book: 'ORIG-018', to_book: 'SJC-037', link_type: 'INFORMS', note: 'Monumental poetic theodicy synthesizing Genesis, the fall, and divine justice' },
  { from_book: 'ORIG-032', to_book: 'SJC-037', link_type: 'INFORMS', note: 'Classical Virgilian epic majesty adapted into Christian cosmic drama' },

  { from_book: 'ORIG-116', to_book: 'SJC-038', link_type: 'INFORMS', note: 'Satirical traveler narrative in dialogue with Don Quixote on human folly and romance' },
  { from_book: 'N65', to_book: 'SJC-038', link_type: 'INFORMS', note: 'Augustan misanthropic skepticism on human pride and scientific vanity' },

  { from_book: 'SJC-039', to_book: 'SJC-040', link_type: 'INFORMS', note: 'French classical theatre: high neoclassical tragedy of passion paired with Molière social comedy' },

  { from_book: 'SJC-040', to_book: 'SJC-030', link_type: 'INFORMS', note: 'Comic moral psychology on sincerity, societal deceit, and misanthropy' },

  { from_book: 'SJC-041', to_book: 'ORIG-135', link_type: 'INFORMS', note: 'French moraliste aphorism uncovering self-love prefiguring Nietzschean moral psychology' },

  { from_book: 'SJC-042', to_book: 'ORIG-110', link_type: 'INFORMS', note: 'Aesopian animal allegories reflecting early modern political intrigue and statecraft' },

  { from_book: 'SJC-043', to_book: 'ORIG-141', link_type: 'INFORMS', note: 'Functionalist stream of thought contrasted with Freudian unconscious repression' },
  { from_book: 'SJC-043', to_book: 'ORIG-223', link_type: 'INFORMS', note: 'Pragmatist psychology laying foundations for Dewey instrumentalist educational theory' },

  { from_book: 'ORIG-141', to_book: 'SJC-044', link_type: 'HARD_PREREQ', note: 'Foundational dream analysis required before systematic general clinical lectures' },
  { from_book: 'SJC-044', to_book: 'ORIG-216', link_type: 'INFORMS', note: 'Psychoanalytic apparatus applied to postcolonial cultural mimicry and trauma' },

  { from_book: 'N60', to_book: 'SJC-045', link_type: 'HARD_PREREQ', note: 'Hegelian dialectic of labor and alienation required for philosophical manuscripts' },
  { from_book: 'SJC-045', to_book: 'ORIG-209', link_type: 'INFORMS', note: 'Early Marxist humanism and alienation theory informing Fanon anti-colonial struggle' },

  { from_book: 'N60', to_book: 'SJC-046', link_type: 'HARD_PREREQ', note: 'Idealist German philosophy required for historical materialist inversion' },
  { from_book: 'SJC-046', to_book: 'N63', link_type: 'INFORMS', note: 'Materialist base-superstructure thesis in dialogue with Weberian religious sociology' },
  { from_book: 'SJC-046', to_book: 'ORIG-215', link_type: 'INFORMS', note: 'Critique of European historical universality informing postcolonial subaltern studies' },

  { from_book: 'N66', to_book: 'SJC-047', link_type: 'READ_ALONGSIDE', note: 'Austen comedic mastery: courtship, epistolary wit, and free indirect discourse' },
  { from_book: 'SJC-047', to_book: 'SJC-048', link_type: 'INFORMS', note: 'Provincial domestic comedy contrasted with Eliot comprehensive provincial social canvas' },

  { from_book: 'SJC-048', to_book: 'ORIG-143', link_type: 'INFORMS', note: 'Grand nineteenth-century psychological and social realism beside Tolstoy War and Peace' },

  { from_book: 'SJC-049', to_book: 'N67', link_type: 'INFORMS', note: 'American Romantic conscience, moral guilt, and dark Calvinist covenantal legacy' },
  { from_book: 'SJC-049', to_book: 'SJC-050', link_type: 'INFORMS', note: 'Individual moral integrity in revolt against puritan and antebellum social hypocrisy' },

  { from_book: 'N62', to_book: 'SJC-050', link_type: 'INFORMS', note: 'Vernacular raft journey confronting plantation slavery in dialogue with Douglass Narrative' },

  { from_book: 'N61', to_book: 'SJC-051', link_type: 'INFORMS', note: 'Slave rebellion novella confronting white racial blindness and Atlantic slave trade cruelty' },
  { from_book: 'ORIG-123', to_book: 'SJC-051', link_type: 'INFORMS', note: 'Moral indictment of New World colonial oppression and maritime subjugation' },

  { from_book: 'SJC-052', to_book: 'ORIG-142', link_type: 'INFORMS', note: 'Romantic poetic growth of a mind through nature and revolution beside Goethe Faust' },
  { from_book: 'SJC-052', to_book: 'N68', link_type: 'INFORMS', note: 'Romantic temporal lyric introspection prefiguring modernist stream of consciousness' },

  { from_book: 'SJC-035', to_book: 'SJC-053', link_type: 'HARD_PREREQ', note: 'Constitutional compact required for Civil War speeches on union, law, and emancipation' },
  { from_book: 'SJC-053', to_book: 'SJC-054', link_type: 'INFORMS', note: 'Presidential unionist rhetoric in direct historical dialogue with Douglass radical abolitionism' },
  { from_book: 'SJC-053', to_book: 'N75', link_type: 'INFORMS', note: 'Lincoln emancipation promise reflected in Du Bois double-consciousness and sorrow songs' },

  { from_book: 'N62', to_book: 'SJC-054', link_type: 'READ_ALONGSIDE', note: 'Autobiographical narrative of escape joined to mature Fourth of July oratorical power' },
  { from_book: 'SJC-054', to_book: 'N75', link_type: 'INFORMS', note: 'Nineteenth-century abolitionist civil rights tradition foundational for Du Bois' },

  { from_book: 'SJC-055', to_book: 'N75', link_type: 'INFORMS', note: 'Atlanta Compromise industrial strategy directly debated and critiqued by Du Bois in Chapter III' },

  { from_book: 'SJC-035', to_book: 'SJC-056', link_type: 'HARD_PREREQ', note: 'Federal Constitution text strictly required for judicial review and landmark rulings' },
  { from_book: 'ORIG-129', to_book: 'SJC-056', link_type: 'INFORMS', note: 'Federalist theories of judicial power tested in landmark constitutional jurisprudence' },
  { from_book: 'SJC-056', to_book: 'ORIG-264', link_type: 'INFORMS', note: 'American constitutional precedent informing Tebbit legal philosophy' },
  { from_book: 'SJC-057', to_book: 'ORIG-177', link_type: 'INFORMS', note: 'Historical treaties, charters, and executive proclamations framing Blackhawk history' },

  { from_book: 'N60', to_book: 'SJC-058', link_type: 'HARD_PREREQ', note: 'Phenomenology of Spirit required before mature encyclopedic dialectical logic' },
  { from_book: 'SJC-058', to_book: 'SJC-059', link_type: 'INFORMS', note: 'Totalizing speculative dialectic against which Kierkegaard poses the individual of faith' },

  { from_book: 'N60', to_book: 'SJC-059', link_type: 'HARD_PREREQ', note: 'Hegelian rational ethical life required for the teleological suspension of the ethical' },
  { from_book: 'ORIG-018', to_book: 'SJC-059', link_type: 'INFORMS', note: 'Genesis Abrahamic sacrifice examined through existential terror and absurd faith' },
  { from_book: 'SJC-059', to_book: 'SJC-060', link_type: 'READ_ALONGSIDE', note: 'Complementary pseudonymous works: subjective inward faith and the paradoxical Moment' },
  { from_book: 'ORIG-027', to_book: 'SJC-060', link_type: 'INFORMS', note: 'Socratic recollection in Meno contrasted with the Christian revelation of the Teacher' },
  { from_book: 'ORIG-133', to_book: 'SJC-060', link_type: 'INFORMS', note: 'Kantian limits of understanding converted into the collision of reason with the Paradox' },

  { from_book: 'ORIG-106', to_book: 'SJC-061', link_type: 'INFORMS', note: 'Phenomenological diagnosis of modern scientific abstraction since Galilean-Cartesian physics' },
  { from_book: 'SJC-061', to_book: 'SJC-062', link_type: 'HARD_PREREQ', note: 'Transcendental phenomenology and life-world required for Heidegger existential ontology' },
  { from_book: 'SJC-062', to_book: 'ORIG-231', link_type: 'INFORMS', note: 'The Origin of the Work of Art establishing ontological aesthetic theory in dialogue with anthology' },

  { from_book: 'ORIG-034', to_book: 'SJC-063', link_type: 'HARD_PREREQ', note: 'Euclidean geometric continuity required for arithmetic Dedekind cut construction' },
  { from_book: 'SJC-063', to_book: 'ORIG-259', link_type: 'READ_ALONGSIDE', note: 'Pioneering structuralist foundation for modern philosophy of arithmetic' },
  { from_book: 'ORIG-034', to_book: 'SJC-064', link_type: 'HARD_PREREQ', note: 'Euclid parallel postulate required before hyperbolic non-Euclidean geometry' },
  { from_book: 'SJC-064', to_book: 'ORIG-237', link_type: 'INFORMS', note: 'Non-Euclidean geometry supplying mathematical foundations for Einstein general relativity' },

  { from_book: 'SJC-065', to_book: 'ORIG-237', link_type: 'INFORMS', note: 'Documents experimental discoveries in quantum mechanics and relativity' },
  { from_book: 'ORIG-140', to_book: 'SJC-067', link_type: 'HARD_PREREQ', note: 'Darwinian natural selection required before Mendelian inheritance and modern genetics' },
];

export function getHardPrerequisitesForBook(bookId: string): BookLink[] {
  return BOOK_LINKS.filter(l => l.link_type === 'HARD_PREREQ' && l.to_book === bookId);
}

export function getUnlocksLaterForBook(bookId: string): BookLink[] {
  return BOOK_LINKS.filter(l => l.link_type === 'HARD_PREREQ' && l.from_book === bookId);
}

export function getReadAlongsideForBook(bookId: string): BookLink | undefined {
  return BOOK_LINKS.find(l => l.link_type === 'READ_ALONGSIDE' && (l.from_book === bookId || l.to_book === bookId));
}

export function getRereadLinksForBook(bookId: string): BookLink[] {
  return BOOK_LINKS.filter(l => l.link_type === 'REREAD_OF' && (l.from_book === bookId || l.to_book === bookId));
}

export function getInformsLinksForBook(bookId: string): BookLink[] {
  const seen = new Set<string>();
  const results: BookLink[] = [];
  for (const l of BOOK_LINKS) {
    if (l.link_type === 'INFORMS' && (l.from_book === bookId || l.to_book === bookId)) {
      const otherId = l.from_book === bookId ? l.to_book : l.from_book;
      if (!seen.has(otherId)) {
        seen.add(otherId);
        results.push(l);
      }
    }
  }
  return results;
}

export interface StageGate {
  stage: number;
  requiredStages: number[];
  name: string;
}

export const STAGE_GATES: Record<number, StageGate> = {
  200: { stage: 200, requiredStages: [100], name: 'Stage 100 Spine Completion' },
  300: { stage: 300, requiredStages: [200], name: 'Stage 200 Spine Completion' },
  400: { stage: 400, requiredStages: [200, 300], name: 'Stages 200 & 300 Spine Completion' },
  500: { stage: 500, requiredStages: [400], name: 'Stage 400 Spine & Synthesis Completion' },
  600: { stage: 600, requiredStages: [500], name: 'Stage 500 Spine & Synthesis Completion' },
  700: { stage: 700, requiredStages: [500, 600], name: 'Stages 500 & 600 Spine & Synthesis Completion' },
};
