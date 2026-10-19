import { REVISED_LIBERAL_WORKS, LiberalBook } from './curriculumData';

export const CONTEXT_TO_SPINE_MAP: Record<string, string[]> = {
  "ORIG-010": [
    "ORIG-012"
  ],
  "ORIG-011": [
    "ORIG-012"
  ],
  "ORIG-013": [
    "ORIG-014"
  ],
  "ORIG-015": [
    "ORIG-014"
  ],
  "ORIG-001": [
    "ORIG-018",
    "ORIG-020",
    "ORIG-021",
    "ORIG-004"
  ],
  "ORIG-002": [
    "ORIG-018",
    "ORIG-004",
    "ORIG-005"
  ],
  "ORIG-003": [
    "ORIG-018",
    "ORIG-020",
    "ORIG-004"
  ],
  "ORIG-006": [
    "ORIG-004",
    "ORIG-005",
    "ORIG-007"
  ],
  "ORIG-016": [
    "N57",
    "ORIG-018"
  ],
  "ORIG-017": [
    "N57",
    "ORIG-018"
  ],
  "ORIG-019": [
    "ORIG-022",
    "ORIG-023",
    "ORIG-024",
    "N56"
  ],
  "N94": [
    "ORIG-024",
    "N56",
    "ORIG-026"
  ],
  "ORIG-025": [
    "ORIG-026",
    "ORIG-027",
    "ORIG-029"
  ],
  "ORIG-031": [
    "ORIG-032",
    "ORIG-033"
  ],
  "N83": [
    "ORIG-032",
    "ORIG-029"
  ],
  "N95": [
    "ORIG-032",
    "ORIG-022",
    "ORIG-023"
  ],
  "ORIG-035": [
    "ORIG-034"
  ],
  "N87": [
    "ORIG-036"
  ],
  "N89": [
    "ORIG-037",
    "ORIG-038",
    "ORIG-039"
  ],
  "N90": [
    "ORIG-037",
    "ORIG-038",
    "ORIG-039"
  ],
  "ORIG-049": [
    "ORIG-048",
    "ORIG-052"
  ],
  "ORIG-050": [
    "ORIG-048",
    "ORIG-052"
  ],
  "ORIG-051": [
    "ORIG-048",
    "ORIG-056"
  ],
  "ORIG-053": [
    "ORIG-048",
    "ORIG-052"
  ],
  "ORIG-054": [
    "ORIG-048",
    "ORIG-058",
    "ORIG-062"
  ],
  "N84": [
    "ORIG-056",
    "ORIG-057",
    "ORIG-060"
  ],
  "N85": [
    "ORIG-056",
    "ORIG-058"
  ],
  "ORIG-061": [
    "ORIG-062",
    "ORIG-063"
  ],
  "ORIG-064": [
    "ORIG-062",
    "ORIG-063"
  ],
  "ORIG-065": [
    "ORIG-062",
    "ORIG-063",
    "ORIG-067"
  ],
  "ORIG-071": [
    "ORIG-075",
    "ORIG-068"
  ],
  "ORIG-072": [
    "ORIG-068",
    "ORIG-069"
  ],
  "ORIG-073": [
    "ORIG-063",
    "ORIG-070"
  ],
  "ORIG-074": [
    "ORIG-063",
    "ORIG-070"
  ],
  "ORIG-077": [
    "ORIG-075",
    "ORIG-069"
  ],
  "ORIG-078": [
    "ORIG-075",
    "ORIG-066",
    "ORIG-069"
  ],
  "ORIG-079": [
    "ORIG-069",
    "ORIG-070"
  ],
  "ORIG-080": [
    "ORIG-069",
    "ORIG-070"
  ],
  "N88": [
    "ORIG-075",
    "ORIG-076"
  ],
  "ORIG-081": [
    "ORIG-085",
    "ORIG-037"
  ],
  "ORIG-082": [
    "ORIG-085",
    "ORIG-086"
  ],
  "ORIG-083": [
    "ORIG-085",
    "ORIG-086"
  ],
  "ORIG-084": [
    "ORIG-085",
    "ORIG-086"
  ],
  "ORIG-088": [
    "ORIG-087"
  ],
  "ORIG-089": [
    "ORIG-087",
    "ORIG-069"
  ],
  "ORIG-090": [
    "ORIG-087"
  ],
  "ORIG-092": [
    "ORIG-091"
  ],
  "ORIG-093": [
    "ORIG-091"
  ],
  "ORIG-094": [
    "ORIG-091"
  ],
  "ORIG-095": [
    "N79",
    "ORIG-096",
    "ORIG-097"
  ],
  "ORIG-100": [
    "ORIG-096",
    "ORIG-098"
  ],
  "ORIG-101": [
    "ORIG-102",
    "ORIG-104",
    "N58"
  ],
  "ORIG-105": [
    "ORIG-110",
    "ORIG-111",
    "ORIG-112",
    "ORIG-115"
  ],
  "ORIG-106": [
    "ORIG-110",
    "ORIG-115",
    "ORIG-116"
  ],
  "ORIG-107": [
    "ORIG-111",
    "ORIG-112",
    "ORIG-114"
  ],
  "ORIG-108": [
    "ORIG-110",
    "ORIG-111"
  ],
  "ORIG-109": [
    "ORIG-110",
    "ORIG-111",
    "ORIG-112"
  ],
  "N86": [
    "ORIG-110",
    "ORIG-111",
    "N65"
  ],
  "N93": [
    "ORIG-115",
    "ORIG-116",
    "ORIG-117",
    "N65"
  ],
  "ORIG-119": [
    "ORIG-111",
    "ORIG-116",
    "ORIG-118"
  ],
  "ORIG-120": [
    "ORIG-118",
    "ORIG-114"
  ],
  "ORIG-121": [
    "ORIG-114",
    "ORIG-123"
  ],
  "ORIG-122": [
    "ORIG-111",
    "ORIG-112",
    "ORIG-118"
  ],
  "ORIG-125": [
    "ORIG-123",
    "ORIG-124"
  ],
  "ORIG-126": [
    "ORIG-123",
    "ORIG-124"
  ],
  "ORIG-127": [
    "ORIG-128",
    "ORIG-129",
    "N81"
  ],
  "ORIG-130": [
    "ORIG-128",
    "N81",
    "ORIG-113"
  ],
  "ORIG-131": [
    "ORIG-128",
    "ORIG-113",
    "ORIG-129"
  ],
  "ORIG-132": [
    "ORIG-133",
    "N59"
  ],
  "ORIG-146": [
    "ORIG-145",
    "N72",
    "N73"
  ],
  "ORIG-147": [
    "ORIG-145",
    "N72",
    "N73"
  ],
  "ORIG-148": [
    "ORIG-145",
    "N73",
    "ORIG-062"
  ],
  "ORIG-151": [
    "ORIG-149",
    "ORIG-152",
    "ORIG-143",
    "ORIG-144"
  ],
  "ORIG-153": [
    "N63",
    "ORIG-154",
    "ORIG-155",
    "ORIG-138"
  ],
  "ORIG-156": [
    "ORIG-154",
    "ORIG-155",
    "ORIG-157"
  ],
  "ORIG-158": [
    "ORIG-157"
  ],
  "ORIG-159": [
    "ORIG-157",
    "ORIG-149"
  ],
  "ORIG-160": [
    "ORIG-157"
  ],
  "ORIG-161": [
    "ORIG-157"
  ],
  "ORIG-162": [
    "ORIG-157",
    "ORIG-149"
  ],
  "ORIG-163": [
    "ORIG-157",
    "ORIG-149",
    "ORIG-138"
  ],
  "ORIG-164": [
    "N67",
    "ORIG-149"
  ],
  "ORIG-165": [
    "N67",
    "ORIG-149"
  ],
  "ORIG-166": [
    "ORIG-149",
    "ORIG-154"
  ],
  "ORIG-167": [
    "ORIG-149",
    "ORIG-154"
  ],
  "ORIG-168": [
    "ORIG-149",
    "ORIG-152"
  ],
  "ORIG-169": [
    "N61",
    "N62",
    "ORIG-171"
  ],
  "ORIG-172": [
    "N61",
    "N62",
    "ORIG-171"
  ],
  "ORIG-173": [
    "N61",
    "N62",
    "ORIG-171"
  ],
  "N92": [
    "N61",
    "N62",
    "ORIG-171"
  ],
  "ORIG-174": [
    "N71",
    "N75",
    "ORIG-177"
  ],
  "ORIG-175": [
    "N62",
    "N75",
    "ORIG-177"
  ],
  "ORIG-176": [
    "N71",
    "N75"
  ],
  "ORIG-178": [
    "ORIG-171",
    "ORIG-149"
  ],
  "ORIG-179": [
    "ORIG-149",
    "ORIG-152"
  ],
  "ORIG-180": [
    "ORIG-177",
    "N71"
  ],
  "ORIG-181": [
    "ORIG-177",
    "ORIG-152"
  ],
  "ORIG-182": [
    "ORIG-157",
    "ORIG-177"
  ],
  "ORIG-183": [
    "ORIG-177",
    "ORIG-152",
    "ORIG-189"
  ],
  "ORIG-185": [
    "ORIG-188",
    "ORIG-189"
  ],
  "ORIG-186": [
    "ORIG-188",
    "ORIG-189"
  ],
  "ORIG-187": [
    "ORIG-188",
    "ORIG-189"
  ],
  "ORIG-190": [
    "ORIG-189"
  ],
  "ORIG-191": [
    "ORIG-189"
  ],
  "ORIG-192": [
    "ORIG-193",
    "ORIG-188"
  ],
  "ORIG-194": [
    "ORIG-193",
    "ORIG-209"
  ],
  "ORIG-195": [
    "ORIG-193"
  ],
  "ORIG-196": [
    "ORIG-233",
    "ORIG-234",
    "ORIG-193"
  ],
  "ORIG-197": [
    "ORIG-193",
    "ORIG-188"
  ],
  "ORIG-198": [
    "ORIG-193"
  ],
  "ORIG-199": [
    "ORIG-193",
    "ORIG-152"
  ],
  "ORIG-200": [
    "ORIG-189",
    "ORIG-233"
  ],
  "ORIG-201": [
    "ORIG-189",
    "ORIG-193"
  ],
  "ORIG-202": [
    "ORIG-193"
  ],
  "ORIG-203": [
    "ORIG-209",
    "ORIG-215"
  ],
  "ORIG-204": [
    "ORIG-209",
    "ORIG-215"
  ],
  "ORIG-205": [
    "ORIG-189",
    "N74"
  ],
  "ORIG-206": [
    "ORIG-193",
    "N74"
  ],
  "ORIG-207": [
    "ORIG-193",
    "N74"
  ],
  "N91": [
    "ORIG-209",
    "N74",
    "ORIG-215"
  ],
  "ORIG-208": [
    "ORIG-209",
    "ORIG-210"
  ],
  "ORIG-211": [
    "ORIG-209",
    "ORIG-210"
  ],
  "ORIG-212": [
    "N74",
    "ORIG-215",
    "ORIG-217"
  ],
  "ORIG-213": [
    "N74",
    "ORIG-215",
    "ORIG-217"
  ],
  "ORIG-214": [
    "N74",
    "ORIG-215",
    "ORIG-152"
  ],
  "ORIG-216": [
    "N74",
    "ORIG-215",
    "ORIG-217"
  ],
  "ORIG-218": [
    "ORIG-221"
  ],
  "ORIG-219": [
    "ORIG-221"
  ],
  "ORIG-220": [
    "ORIG-221"
  ],
  "ORIG-222": [
    "ORIG-221"
  ],
  "ORIG-229": [
    "ORIG-230",
    "ORIG-231"
  ],
  "ORIG-238": [
    "ORIG-237",
    "ORIG-239"
  ],
  "N82": [
    "ORIG-237"
  ],
  "ORIG-240": [
    "ORIG-241",
    "ORIG-242"
  ],
  "ORIG-244": [
    "ORIG-262",
    "ORIG-268"
  ],
  "ORIG-245": [
    "ORIG-262",
    "ORIG-268"
  ],
  "ORIG-247": [
    "ORIG-248"
  ],
  "ORIG-250": [
    "ORIG-251"
  ],
  "ORIG-253": [
    "ORIG-254"
  ],
  "ORIG-255": [
    "ORIG-256"
  ],
  "ORIG-257": [
    "ORIG-254",
    "ORIG-256"
  ],
  "ORIG-258": [
    "ORIG-259"
  ],
  "ORIG-260": [
    "ORIG-259"
  ],
  "ORIG-261": [
    "ORIG-262"
  ],
  "ORIG-264": [
    "ORIG-262"
  ],
  "ORIG-265": [
    "ORIG-262"
  ],
  "ORIG-266": [
    "ORIG-242",
    "ORIG-272"
  ],
  "ORIG-274": [
    "ORIG-272"
  ],
  "ORIG-055": [
    "ORIG-248",
    "ORIG-251"
  ]
};

export const SPINE_TO_CONTEXT_MAP: Record<string, string[]> = {};

Object.entries(CONTEXT_TO_SPINE_MAP).forEach(([contextId, spineIds]) => {
  spineIds.forEach(spineId => {
    if (!SPINE_TO_CONTEXT_MAP[spineId]) {
      SPINE_TO_CONTEXT_MAP[spineId] = [];
    }
    if (!SPINE_TO_CONTEXT_MAP[spineId].includes(contextId)) {
      SPINE_TO_CONTEXT_MAP[spineId].push(contextId);
    }
  });
});

export function getRelatedSpineBooksForContext(contextBookId: string): LiberalBook[] {
  let spineIds = CONTEXT_TO_SPINE_MAP[contextBookId] || [];
  if (spineIds.length === 0) {
    const contextBook = REVISED_LIBERAL_WORKS.find(b => b.id === contextBookId);
    if (contextBook) {
      spineIds = REVISED_LIBERAL_WORKS
        .filter(b => b.lane === 'Spine' && b.courseCode === contextBook.courseCode && b.stage === contextBook.stage)
        .map(b => b.id);
    }
  }
  return spineIds
    .map(id => REVISED_LIBERAL_WORKS.find(b => b.id === id))
    .filter((b): b is LiberalBook => Boolean(b));
}

export function getRelatedContextBooksForSpine(spineBookId: string): LiberalBook[] {
  let contextIds = SPINE_TO_CONTEXT_MAP[spineBookId] || [];
  if (contextIds.length === 0) {
    const spineBook = REVISED_LIBERAL_WORKS.find(b => b.id === spineBookId);
    if (spineBook) {
      contextIds = REVISED_LIBERAL_WORKS
        .filter(b => b.lane === 'Context' && b.courseCode === spineBook.courseCode && b.stage === spineBook.stage)
        .map(b => b.id);
    }
  }
  return contextIds
    .map(id => REVISED_LIBERAL_WORKS.find(b => b.id === id))
    .filter((b): b is LiberalBook => Boolean(b));
}


export const REFERENCE_TO_SPINE_MAP: Record<string, string[]> = {
  // Stage 100
  "ORIG-008": ["ORIG-004", "ORIG-005", "ORIG-007"],
  "ORIG-009": ["ORIG-004", "ORIG-005", "ORIG-007"],
  // Stage 200
  "ORIG-028": ["ORIG-026", "ORIG-027"],
  "ORIG-030": ["ORIG-026", "ORIG-029"],
  "ORIG-040": ["ORIG-036", "ORIG-039"],
  "ORIG-041": ["ORIG-036", "ORIG-037", "ORIG-038", "ORIG-039"],
  // Stage 300
  "ORIG-059": ["ORIG-057", "ORIG-058"],
  // Stage 400
  "ORIG-103": ["ORIG-102"],
  // Stage 500
  "ORIG-136": ["ORIG-135", "ORIG-137"],
  "ORIG-150": ["ORIG-149", "ORIG-152"],
  "ORIG-170": ["N61", "N62", "ORIG-171"],
  // Stage 600
  "ORIG-184": ["ORIG-181"],
  "ORIG-224": ["ORIG-223"],
  "ORIG-226": ["ORIG-225"],
  "ORIG-228": ["ORIG-227"],
  "ORIG-232": ["ORIG-230"],
  // Stage 700
  "ORIG-243": ["ORIG-241", "ORIG-242"],
  "ORIG-246": ["ORIG-014", "ORIG-248"],
  "ORIG-249": ["ORIG-248"],
  "ORIG-252": ["ORIG-251"],
  "ORIG-263": ["ORIG-262"],
  "ORIG-267": ["ORIG-268", "ORIG-241"],
  "ORIG-269": ["ORIG-268"],
  "ORIG-270": ["ORIG-268"],
  "ORIG-271": ["ORIG-268", "N75"],
  "ORIG-273": ["ORIG-272"],
  // SJC Reference Carriers
  "SJC-027": ["ORIG-107", "SJC-020", "SJC-022", "SJC-024", "SJC-025"],
  "SJC-065": ["ORIG-237"],
  "SJC-066": ["SJC-026", "ORIG-140", "ORIG-239"],
  "SJC-067": ["ORIG-140"]
};

export const REFERENCE_TO_CONTEXT_MAP: Record<string, string[]> = {
  // Stage 100
  "ORIG-008": ["ORIG-006"],
  "ORIG-009": ["ORIG-006"],
  // Stage 200
  "ORIG-028": ["ORIG-025"],
  "ORIG-030": ["ORIG-025"],
  "ORIG-040": ["N87"],
  "ORIG-041": ["N89", "N90"],
  // Stage 300
  "ORIG-059": ["ORIG-056"],
  // Stage 400
  "ORIG-103": ["ORIG-101"],
  // Stage 500
  "ORIG-136": ["ORIG-130"],
  "ORIG-150": ["ORIG-151"],
  "ORIG-170": ["ORIG-169", "ORIG-172", "ORIG-173", "N92"],
  // Stage 600
  "ORIG-184": ["ORIG-182", "ORIG-183"],
  "ORIG-224": ["ORIG-220", "ORIG-222"],
  "ORIG-226": ["ORIG-221", "ORIG-222"],
  "ORIG-228": ["ORIG-229"],
  "ORIG-232": ["ORIG-231"],
  // Stage 700
  "ORIG-243": ["ORIG-240"],
  "ORIG-246": ["ORIG-244", "ORIG-245"],
  "ORIG-249": ["ORIG-247"],
  "ORIG-252": ["ORIG-250"],
  "ORIG-263": ["ORIG-261", "ORIG-264", "ORIG-265"],
  "ORIG-267": ["ORIG-266"],
  "ORIG-269": ["ORIG-147"],
  "ORIG-270": ["ORIG-147"],
  "ORIG-271": ["ORIG-171"],
  "ORIG-273": ["ORIG-274"]
};

export const SPINE_TO_REFERENCE_MAP: Record<string, string[]> = {};
Object.entries(REFERENCE_TO_SPINE_MAP).forEach(([refId, spineIds]) => {
  spineIds.forEach(spineId => {
    if (!SPINE_TO_REFERENCE_MAP[spineId]) {
      SPINE_TO_REFERENCE_MAP[spineId] = [];
    }
    if (!SPINE_TO_REFERENCE_MAP[spineId].includes(refId)) {
      SPINE_TO_REFERENCE_MAP[spineId].push(refId);
    }
  });
});

export function getRelatedSpineBooksForReference(refBookId: string): LiberalBook[] {
  let spineIds = REFERENCE_TO_SPINE_MAP[refBookId] || [];
  if (spineIds.length === 0) {
    const refBook = REVISED_LIBERAL_WORKS.find(b => b.id === refBookId);
    if (refBook) {
      spineIds = REVISED_LIBERAL_WORKS
        .filter(b => b.lane === 'Spine' && b.courseCode === refBook.courseCode && b.stage === refBook.stage)
        .map(b => b.id);
    }
  }
  return spineIds
    .map(id => REVISED_LIBERAL_WORKS.find(b => b.id === id))
    .filter((b): b is LiberalBook => Boolean(b));
}

export function getRelatedContextBooksForReference(refBookId: string): LiberalBook[] {
  let contextIds = REFERENCE_TO_CONTEXT_MAP[refBookId] || [];
  if (contextIds.length === 0) {
    const refBook = REVISED_LIBERAL_WORKS.find(b => b.id === refBookId);
    if (refBook) {
      contextIds = REVISED_LIBERAL_WORKS
        .filter(b => b.lane === 'Context' && b.courseCode === refBook.courseCode && b.stage === refBook.stage)
        .map(b => b.id);
    }
  }
  return contextIds
    .map(id => REVISED_LIBERAL_WORKS.find(b => b.id === id))
    .filter((b): b is LiberalBook => Boolean(b));
}

export function getRelatedReferenceBooksForSpine(spineBookId: string): LiberalBook[] {
  let refIds = SPINE_TO_REFERENCE_MAP[spineBookId] || [];
  if (refIds.length === 0) {
    const spineBook = REVISED_LIBERAL_WORKS.find(b => b.id === spineBookId);
    if (spineBook) {
      refIds = REVISED_LIBERAL_WORKS
        .filter(b => b.lane === 'Reference' && b.courseCode === spineBook.courseCode && b.stage === spineBook.stage)
        .map(b => b.id);
    }
  }
  return refIds
    .map(id => REVISED_LIBERAL_WORKS.find(b => b.id === id))
    .filter((b): b is LiberalBook => Boolean(b));
}

export function getRelatedReferenceBooksForContext(contextBookId: string): LiberalBook[] {
  const contextBook = REVISED_LIBERAL_WORKS.find(b => b.id === contextBookId);
  if (!contextBook) return [];
  return REVISED_LIBERAL_WORKS.filter(
    b => b.lane === 'Reference' && b.courseCode === contextBook.courseCode && b.stage === contextBook.stage
  );
}


