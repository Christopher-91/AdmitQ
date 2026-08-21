import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logosDir = path.join(__dirname, '../client/public/logos');

const fetchJson = url => new Promise(res => https.get(url, {headers: {"User-Agent": "AdmitQ/1.0"}}, r => { let b = ""; r.on("data", c => b+=c); r.on("end", () => res(JSON.parse(b))); }));

const download = (url, dest) => new Promise((res, rej) => https.get(url, {headers: {"User-Agent": "AdmitQ/1.0"}}, r => {
  if (r.statusCode >= 300 && r.statusCode < 400 && r.headers.location) return download(r.headers.location, dest).then(res).catch(rej);
  r.pipe(fs.createWriteStream(dest)).on("close", res);
}));

const universities = [
  { title: "Kyungpook National University", slug: "kyungpook-national-university" },
  { title: "Canadian University Dubai", slug: "canadian-university-dubai" },
  { title: "University of Galway", slug: "national-university-of-ireland-galway" },
  { title: "Kaplan, Inc.", slug: "kaplan-higher-education" },
  { title: "Sapienza University of Rome", slug: "sapienza-university-of-rome" },
  { title: "University of Padua", slug: "university-of-padua" }
];

async function run() {
  for (const u of universities) {
    try {
      const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(u.title)}&prop=pageimages&pithumbsize=500&format=json`;
      const data = await fetchJson(url);
      const pages = data.query.pages;
      const pageId = Object.keys(pages)[0];
      
      if (pages[pageId].thumbnail) {
        let imgUrl = pages[pageId].thumbnail.source;
        console.log(`Downloading ${u.title} from ${imgUrl}`);
        await download(imgUrl, path.join(logosDir, `${u.slug}.png`));
        console.log(`SUCCESS: ${u.title}`);
      } else {
        console.log(`NO IMAGE: ${u.title}`);
      }
    } catch (err) {
      console.log(`ERROR ${u.title}: ${err.message}`);
    }
  }
}

run().catch(console.error);
