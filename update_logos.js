const https = require('https');
const fs = require('fs');
const path = require('path');

const universities = [
  { name: 'Wuhan University', wiki: 'Wuhan_University', slug: 'wuhan-university' },
  { name: 'University of Electronic Science and Technology of China', wiki: 'University_of_Electronic_Science_and_Technology_of_China', slug: 'uestc' },
  { name: 'Xidian University', wiki: 'Xidian_University', slug: 'xidian-university' },
  { name: 'Sichuan University', wiki: 'Sichuan_University', slug: 'sichuan-university' },
  { name: 'Sun Yat-sen University', wiki: 'Sun_Yat-sen_University', slug: 'sun-yat-sen-university' },
  { name: 'Shandong University', wiki: 'Shandong_University', slug: 'shandong-university' },
  { name: 'Xiamen University', wiki: 'Xiamen_University', slug: 'xiamen-university' },
  { name: 'Tongji University', wiki: 'Tongji_University', slug: 'tongji-university' },
  { name: 'Nankai University', wiki: 'Nankai_University', slug: 'nankai-university' },
  { name: 'Central South University', wiki: 'Central_South_University', slug: 'central-south-university' }
];

const download = (url, dest) => new Promise((resolve, reject) => {
  https.get(url, { headers: { 'User-Agent': 'AdmitQBot/1.0' } }, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 303 || res.statusCode === 307 || res.statusCode === 308) {
      let loc = res.headers.location;
      if (loc.startsWith('/')) loc = 'https://upload.wikimedia.org' + loc; // handle relative redirects
      return download(loc, dest).then(resolve).catch(reject);
    }
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => { file.close(resolve); });
  }).on('error', reject);
});

async function run() {
  const updates = [];
  for (const uni of universities) {
    const url = `https://en.wikipedia.org/wiki/${uni.wiki}`;
    
    const html = await new Promise((resolve) => {
      https.get(url, { headers: { 'User-Agent': 'AdmitQBot/1.0' } }, (res) => {
        let d = '';
        res.on('data', chunk => d += chunk);
        res.on('end', () => resolve(d));
      });
    });

    try {
      // Find infobox image
      let imgUrl = null;
      // Look for the first image inside the infobox
      const infoboxMatch = html.match(/<table class="infobox[^>]*>.*?<img[^>]+src="([^"]+)"/s);
      if (infoboxMatch && infoboxMatch[1]) {
        imgUrl = infoboxMatch[1];
        if (imgUrl.startsWith('//')) {
          imgUrl = 'https:' + imgUrl;
        } else if (imgUrl.startsWith('/')) {
          imgUrl = 'https://en.wikipedia.org' + imgUrl;
        }
      } else {
        // Fallback to og:image
        const ogMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
        if (ogMatch && ogMatch[1]) {
          imgUrl = ogMatch[1].split('?')[0]; // remove query params
        }
      }

      if (imgUrl) {
        // Remove query parameters
        imgUrl = imgUrl.split('?')[0];

        // Use the exact imgUrl from the HTML (it's guaranteed to be an actual image, usually a PNG thumbnail)
        // We avoid guessing the original SVG URL as it often redirects to an HTML error page due to Wikimedia CDN rules.
        const originalUrl = imgUrl;

        const ext = originalUrl.split('.').pop().toLowerCase();
        // Fallback to png if ext is strange
        const safeExt = ['png', 'jpg', 'jpeg', 'svg'].includes(ext) ? ext : 'png';
        const filename = `${uni.slug}-logo.${safeExt}`;
        const dest = path.join(__dirname, 'client/public', filename);
        
        console.log(`Downloading ${uni.name} logo from ${originalUrl}...`);
        await download(originalUrl, dest);
        
        const safeName = uni.name.replace(/'/g, "''");
        updates.push(`UPDATE universities SET logo_url = '/${filename}' WHERE name ILIKE '%${safeName}%';`);
      } else {
        console.log(`No image found for ${uni.name}`);
      }
    } catch (e) {
      console.log(`Error processing ${uni.name}: `, e.message);
    }
  }
  
  fs.writeFileSync(path.join(__dirname, 'server/update_logos.sql'), updates.join('\n'));
  console.log('Saved SQL updates to server/update_logos.sql');
}

run();
