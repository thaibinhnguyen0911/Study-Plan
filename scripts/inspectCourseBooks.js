import fs from 'fs';

const content = fs.readFileSync('src/data/curriculumData.ts', 'utf8');
const bookRegex = /{\s*id:\s*'([^']+)',\s*sourceId:\s*'([^']*)',\s*orderNum:\s*(\d+),\s*title:\s*'([^']+)',\s*author:\s*'([^']+)',\s*courseCode:\s*'([^']+)',\s*courseTitle:\s*'([^']+)',\s*stage:\s*(\d+),\s*stageName:\s*'([^']+)',\s*lane:\s*'([^']+)',\s*status:\s*'([^']+)',\s*type:\s*'([^']+)'/g;

let m;
const books = [];
while ((m = bookRegex.exec(content)) !== null) {
  books.push({
    id: m[1],
    orderNum: parseInt(m[3]),
    title: m[4],
    author: m[5],
    courseCode: m[6],
    courseTitle: m[7],
    stage: parseInt(m[8]),
    lane: m[10],
    type: m[12]
  });
}
console.log('Total books parsed in REVISED_LIBERAL_WORKS:', books.length);

const byCourse = {};
books.forEach(b => {
  if (!byCourse[b.courseCode]) byCourse[b.courseCode] = [];
  byCourse[b.courseCode].push(b);
});

for (const [cc, bList] of Object.entries(byCourse)) {
  if (cc.startsWith('MAT') || cc.startsWith('SCI') || cc.startsWith('PHI 706') || bList[0].courseTitle.includes('Logic')) {
    console.log(`\n=== ${cc}: ${bList[0].courseTitle} (${bList.length} books) ===`);
    bList.forEach(b => console.log(`  [${b.id}] (${b.lane}/${b.type}) ${b.author}: ${b.title}`));
  }
}
