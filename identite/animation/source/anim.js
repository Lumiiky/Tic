// Timeline in seconds, page px. g constant.
const g=5011, R=27.6;
const P={x:902.9,y:666.2};            // pivot of the i
const A0=-19.8;                      // upright angle (deg)
const t1=0.44, t2=0.955, t3=1.274;
const s0={x:941,y:-60}, s1={x:943.4,y:452.6}, s2={x:1137.8,y:459.4}, s3={x:1182.8,y:466};
function arc(a,b,dt,t){ // ballistic from a to b in dt, at local t
  const vx=(b.x-a.x)/dt, vy=(b.y-a.y-0.5*g*dt*dt)/dt;
  return {x:a.x+vx*t,y:a.y+vy*t+0.5*g*t*t};
}
function dotAt(t){
  if(t<t1){const u=t1-t;return {x:s1.x,y:s1.y-0.5*g*u*u};}    // free fall ending at s1
  if(t<t2) return arc(s1,s2,t2-t1,t-t1);
  if(t<t3) return arc(s2,s3,t3-t2,t-t2);
  const u=t-t3; return {x:s3.x+380*u,y:s3.y-400*u+0.5*g*u*u};
}
function squash(t){ // returns [sx,sy] around impacts
  let s=0; for(const ti of [t1,t2,t3]){const d=t-ti; if(d>=-0.017&&d<0.07){s=Math.max(s,(d<0?1+d/0.017:1-d/0.07))*(ti===t1?1:0.7);}}
  return [1+0.22*s,1-0.22*s];
}
function angleAt(t){
  if(t<t1) return A0;
  const d=t-t1, T=0.2;
  if(d<T){const u=d/T; return A0*(1-u*u);}                       // topples, accelerating
  const e=d-T; return 4.5*Math.exp(-e*14)*Math.sin(e*26);        // overshoot then settles
}
function render(t){
  document.getElementById('stick').setAttribute("transform",`translate(${11*Math.max(0,angleAt(t)/A0)} 0) rotate(${angleAt(t)} 12 128)`);
  const p=dotAt(t), [sx,sy]=squash(t);
  const d=document.getElementById('dot');
  d.setAttribute('cx',p.x); d.setAttribute('cy',p.y+R*(1-sy)); d.setAttribute('rx',R*sx); d.setAttribute('ry',R*sy);
}
