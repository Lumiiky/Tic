// Intro v2 : Tic bat comme un métronome. Barre du « i » centrée entre le t et le c,
// elle va au bout à droite puis au bout à gauche (120 bpm, 4 battements en 2 s, boucle).
// Le point rebondit sur le haut de la barre à chaque bout de course et passe de l'autre côté.
const BEAT=0.5, TILT=17.5;
let P={x:941.6,y:662};                  // pied de la barre, recalé sur le « t » au chargement
const L=163.3, CAP=22.65, R=27.7, H=120;  // longueur, demi-épaisseur, rayon du point, hauteur du saut
const g=8*H/(BEAT*BEAT);
function angleAt(t){ return TILT*Math.cos(Math.PI*t/BEAT); }   // +TILT à droite à t=0
function tip(a){ const r=a*Math.PI/180; return {x:P.x+L*Math.sin(r), y:P.y-L*Math.cos(r)}; }
function dotAt(t){
  const k=Math.floor(t/BEAT), u=t-k*BEAT, s=(k%2===0)?1:-1;     // part de droite si k pair
  const a=tip(s*TILT), b=tip(-s*TILT), y0=a.y-CAP-R;
  const vy=-g*BEAT/2;
  return {x:a.x+(b.x-a.x)*u/BEAT, y:y0+vy*u+0.5*g*u*u};
}
function squash(t){
  const d=t-Math.round(t/BEAT)*BEAT;
  const s=d<0 ? (d>-0.02?1+d/0.02:0) : (d<0.07?1-d/0.07:0);
  return [1+0.2*s,1-0.2*s];
}
function render(t){
  const tc=document.getElementById('t').getBoundingClientRect(), cc=document.getElementById('c').getBoundingClientRect();
  P.x=tc.right+73.5;                     // même place que la barre du logo statique
  const a=angleAt(t), p=tip(a), bar=document.getElementById('bar');
  bar.setAttribute('x1',P.x); bar.setAttribute('y1',P.y); bar.setAttribute('x2',p.x); bar.setAttribute('y2',p.y);
  const q=dotAt(t), [sx,sy]=squash(t), d=document.getElementById('dot');
  d.setAttribute('cx',q.x); d.setAttribute('cy',q.y+R*(1-sy)); d.setAttribute('rx',R*sx); d.setAttribute('ry',R*sy);
}
