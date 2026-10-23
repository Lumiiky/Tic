const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'}).catch(()=>chromium.launch());
const p=await b.newPage({viewport:{width:1920,height:1080}});
await p.goto('file://'+process.cwd()+'/scene-metronome.html');await p.evaluate(()=>document.fonts.ready);
require('fs').mkdirSync('frames',{recursive:true});
const N=120;for(let i=0;i<N;i++){await p.evaluate(t=>render(t),i/60);await p.screenshot({path:`frames/f${String(i).padStart(3,'0')}.png`});}
await b.close();})();
