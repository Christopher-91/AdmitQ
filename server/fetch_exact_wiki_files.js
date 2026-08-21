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

const files = [
  { title: "File:Logo Sapienza Università di Roma.jpg", slug: "sapienza-university-of-rome" },
  { title: "File:University of Galway logo 2022.png", slug: "national-university-of-ireland-galway" },
  { title: "File:Kaplan, Inc. logo.svg", slug: "kaplan-higher-education" },
  { title: "File:University of Padua seal.svg", slug: "university-of-padua" }
];

async function run() {
  for (const f of files) {
    try {
      const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(f.title)}&prop=imageinfo&iiprop=url&iiurlwidth=500&format=json`;
      const data = await fetchJson(url);
      const pages = data.query.pages;
      const pageId = Object.keys(pages)[0];
      
      if (pages[pageId].imageinfo) {
        let imgUrl = pages[pageId].imageinfo[0].thumburl || pages[pageId].imageinfo[0].url;
        console.log(`Downloading ${f.title} from ${imgUrl}`);
        await download(imgUrl, path.join(logosDir, `${f.slug}.png`));
        console.log(`SUCCESS: ${f.title}`);
      } else {
        console.log(`NO IMAGE INFO: ${f.title}`);
      }
    } catch (err) {
      console.log(`ERROR ${f.title}: ${err.message}`);
    }
  }
}

run().catch(console.error);
