function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { x: () => r });
  var n = i(51469), s = i(19274);
  function r(t2, e2, i2) {
    let r2 = t2.style, o = e2?.style, a = {};
    if (!r2) return a;
    for (let e3 in r2)
      ((0, n.S)(r2[e3]) || o && (0, n.S)(o[e3]) || (0, s.zK)(e3, t2) || i2?.getValue(e3)?.liveStyle !== void 0) && (a[e3] = r2[e3]);
    return a;
  }
}

__m(__module,__exports,__require);
}