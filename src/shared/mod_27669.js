function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  function n({ top: t2, left: e2, right: i2, bottom: s2 }) {
    return { x: { min: e2, max: i2 }, y: { min: t2, max: s2 } };
  }
  function s({ x: t2, y: e2 }) {
    return { top: e2.min, right: t2.max, bottom: e2.max, left: t2.min };
  }
  function r(t2, e2) {
    if (!e2) return t2;
    let i2 = e2({ x: t2.left, y: t2.top }), n2 = e2({ x: t2.right, y: t2.bottom });
    return { top: i2.y, left: i2.x, bottom: n2.y, right: n2.x };
  }
  i.d(e, { FY: () => n, bS: () => r, pA: () => s });
}

__m(__module,__exports,__require);
}