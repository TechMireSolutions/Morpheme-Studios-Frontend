import { chromium } from 'playwright';
import fs from 'fs';
const targets = [
  { path: '/studio', width: 1024 },
  { path: '/studio', width: 768 },
  { path: '/studio', width: 480 },
  { path: '/studio', width: 390 },
  { path: '/studio', width: 375 },
  { path: '/studio', width: 320 },
  { path: '/careers', width: 1024 },
  { path: '/careers', width: 768 },
  { path: '/careers', width: 480 },
  { path: '/careers', width: 390 },
  { path: '/careers', width: 375 },
  { path: '/careers', width: 320 },
  { path: '/contact', width: 1024 },
  { path: '/contact', width: 768 },
  { path: '/contact', width: 480 },
  { path: '/contact', width: 390 },
  { path: '/contact', width: 375 },
  { path: '/contact', width: 320 },
];
const browser = await chromium.launch();
const page = await browser.newPage();
const out = [];
for (const { path, width } of targets) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto('http://127.0.0.1:5175' + path, { waitUntil: 'load', timeout: 60000 });
  await page.waitForTimeout(200);
  const items = await page.evaluate(() => {
    const arr = [];
    for (const el of Array.from(document.querySelectorAll('*'))) {
      const s = el.scrollWidth;
      const c = el.clientWidth;
      const diff = s - c;
      if (diff > 0) {
        let sel = '';
        if (el.id) sel = '#' + el.id;
        else {
          sel = el.tagName.toLowerCase();
          if (el.className) {
            const cls = el.className.toString().trim().split(/\s+/).filter(Boolean);
            if (cls.length) sel += '.' + cls.join('.');
          }
        }
        arr.push({ selector: sel, width: Math.round(el.getBoundingClientRect().width), clientWidth: c, scrollWidth: s, overflow: diff, tag: el.tagName.toLowerCase() });
      }
    }
    return arr.sort((a, b) => b.overflow - a.overflow).slice(0, 20);
  });
  out.push({ path, width, items });
}
await browser.close();
fs.writeFileSync('overflow-debug.json', JSON.stringify(out, null, 2));
console.log('written overflow-debug.json');
