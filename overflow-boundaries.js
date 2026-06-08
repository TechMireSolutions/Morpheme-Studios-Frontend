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
    const win = window.innerWidth;
    const arr = [];
    for (const el of Array.from(document.querySelectorAll('*'))) {
      const rect = el.getBoundingClientRect();
      const overLeft = rect.left < -0.5;
      const overRight = rect.right > win + 0.5;
      if (overLeft || overRight) {
        let sel = el.tagName.toLowerCase();
        if (el.id) sel += '#' + el.id;
        if (el.className) {
          const classes = el.className.toString().trim().split(/\s+/).filter(Boolean);
          if (classes.length) sel += '.' + classes.join('.');
        }
        arr.push({ selector: sel, tag: el.tagName.toLowerCase(), rect: { left: Number(rect.left.toFixed(2)), right: Number(rect.right.toFixed(2)), width: Number(rect.width.toFixed(2)), top: Number(rect.top.toFixed(2)), bottom: Number(rect.bottom.toFixed(2)) }, style: getComputedStyle(el).cssText.slice(0, 500) });
      }
    }
    return arr.slice(0, 40);
  });
  out.push({ path, width, items });
}
await browser.close();
fs.writeFileSync('overflow-boundaries.json', JSON.stringify(out, null, 2));
console.log('written overflow-boundaries.json');
