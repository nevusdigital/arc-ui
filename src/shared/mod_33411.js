function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  function n(t2) {
    return void 0 === t2 || 1 === t2;
  }
  function s({ scale: t2, scaleX: e2, scaleY: i2 }) {
    return !n(t2) || !n(e2) || !n(i2);
  }
  function r(t2) {
    return s(t2) || o(t2) || t2.z || t2.rotate || t2.rotateX || t2.rotateY || t2.skewX || t2.skewY;
  }
  function o(t2) {
    var e2, i2;
    return (e2 = t2.x) && "0%" !== e2 || (i2 = t2.y) && "0%" !== i2;
  }
  i.d(e, { HD: () => r, vF: () => o, vk: () => s });
}

__m(__module,__exports,__require);
}