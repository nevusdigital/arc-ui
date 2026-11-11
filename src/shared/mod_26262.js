function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { X: () => r });
  var n = i(38621), s = i(17964);
  function r(t2, e2 = 100, i2) {
    let o = i2({ ...t2, keyframes: [0, e2] }), a = Math.min((0, s.t)(o), s.Y);
    return {
      type: "keyframes",
      ease: (t3) => o.next(a * t3).value / e2,
      duration: (0, n.X)(a)
    };
  }
}

__m(__module,__exports,__require);
}