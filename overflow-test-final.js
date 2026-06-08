import playwright from 'playwright';
import fs from 'fs';
import path from 'path';

const VIEWPORTS = [
  { name: '1024px', width: 1024, height: 768 },
  { name: '768px', width: 768, height: 1024 },
  { name: '480px', width: 480, height: 800 },
  { name: '390px', width: 390, height: 844 },
  { name: '375px', width: 375, height: 667 },
  { name: '320px', width: 320, height: 568 },
];

const ROUTES = ['/', '/studio', '/careers', '/contact', '/projects', '/blog'];

async function testOverflow() {
  const browser = await playwright.chromium.launch();
  const results = {};

  for (const vp of VIEWPORTS) {
    results[vp.name] = {};

    for (const route of ROUTES) {
      try {
        const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
        await page.goto(`http://localhost:5174${route}`, { waitUntil: 'networkidle' });
        
        // Get page-level scroll overflow
        const pageOverflow = await page.evaluate(() => {
          const html = document.documentElement;
          return {
            scrollWidth: html.scrollWidth,
            clientWidth: html.clientWidth,
            hasOverflow: html.scrollWidth > html.clientWidth,
            overflowAmount: html.scrollWidth - html.clientWidth,
          };
        });

        // Find overflow elements
        const overflowElements = await page.evaluate(() => {
          const elements = [];
          document.querySelectorAll('*').forEach((el) => {
            if (el.scrollWidth > el.clientWidth && el.clientWidth > 0) {
              const rect = el.getBoundingClientRect();
              if (rect.right > window.innerWidth || rect.left < 0) {
                elements.push({
                  tag: el.tagName,
                  class: el.className,
                  id: el.id,
                  scrollWidth: el.scrollWidth,
                  clientWidth: el.clientWidth,
                  overflowAmount: el.scrollWidth - el.clientWidth,
                });
              }
            }
          });
          return elements;
        });

        results[vp.name][route] = {
          pageOverflow,
          overflowElements: overflowElements.slice(0, 5), // Top 5 overflow elements
          status: pageOverflow.hasOverflow ? '❌ OVERFLOW' : '✓ OK',
        };

        await page.close();
      } catch (err) {
        results[vp.name][route] = { error: err.message, status: '⚠️ ERROR' };
      }
    }
  }

  await browser.close();

  // Write results to file
  const outputPath = 'overflow-test-results.json';
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\n✓ Overflow test complete. Results saved to ${outputPath}\n`);

  // Print summary
  console.log('=== OVERFLOW TEST SUMMARY ===\n');
  for (const vp of VIEWPORTS) {
    console.log(`\n[${vp.name}]`);
    for (const route of ROUTES) {
      const result = results[vp.name][route];
      if (result.error) {
        console.log(`  ${route}: ⚠️ ${result.error}`);
      } else {
        console.log(`  ${route}: ${result.status} (${result.pageOverflow.overflowAmount}px)`);
        if (result.overflowElements.length > 0) {
          console.log(`    → Top overflow: ${result.overflowElements[0].tag}.${result.overflowElements[0].class} (+${result.overflowElements[0].overflowAmount}px)`);
        }
      }
    }
  }
}

testOverflow().catch(console.error);
