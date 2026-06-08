import { chromium } from 'playwright';
import fs from 'fs';
const pages=['/','/studio','/projects','/blog','/careers','/contact'];
const widths=[1024,768,480,390,375,320];
const results=[];
const browser = await chromium.launch();
const page = await browser.newPage();
for(const width of widths){
  await page.setViewportSize({width,height:900});
  for(const path of pages){
    await page.goto('http://127.0.0.1:5175'+path,{waitUntil:'load',timeout:60000});
    await page.waitForTimeout(200);
    const candidates = await page.evaluate(() => {
      const cssPath = (el) => {
        if(!el||el.nodeType!==1) return null;
        const parts=[];
        while(el && el.nodeType===1 && el.tagName.toLowerCase()!=='html'){
          let part=el.tagName.toLowerCase();
          if(el.id) part += '#'+el.id;
          else if(el.className){
            const cls = el.className.toString().trim().split(/\s+/).filter(Boolean);
            if(cls.length) part += '.'+cls.join('.');
          }
          const parent=el.parentElement;
          if(parent){
            const same=Array.from(parent.children).filter(c=>c.tagName===el.tagName);
            if(same.length>1) part += `:nth-of-type(${same.indexOf(el)+1})`;
          }
          parts.unshift(part);
          el=parent;
        }
        return parts.join(' > ');
      };
      const win=window.innerWidth;
      const out=[];
      for(const el of Array.from(document.querySelectorAll('*'))){
        const rect=el.getBoundingClientRect();
        const width=Math.round(rect.width);
        const client=el.clientWidth;
        const scroll=el.scrollWidth;
        const overflow=Math.max(0, width-win, scroll-client);
        if(overflow>0.5){
          const style=getComputedStyle(el);
          out.push({selector:cssPath(el), tag:el.tagName.toLowerCase(), width, clientWidth:client, scrollWidth:scroll, overflowAmount:Math.round(overflow), widthStyle:style.width, minWidth:style.minWidth, display:style.display, position:style.position, left:style.left, right:style.right, marginLeft:style.marginLeft, marginRight:style.marginRight, transform:style.transform, flexWrap:style.flexWrap, flexShrink:style.flexShrink, gridTemplateColumns:style.gridTemplateColumns, gridAutoColumns:style.gridAutoColumns, boxSizing:style.boxSizing});
        }
      }
      out.sort((a,b)=>b.overflowAmount-a.overflowAmount);
      return out.slice(0,10);
    });
    results.push({path,width,candidates});
  }
}
await browser.close();
fs.writeFileSync('overflow-scan-results.json', JSON.stringify(results,null,2));
console.log('done');
