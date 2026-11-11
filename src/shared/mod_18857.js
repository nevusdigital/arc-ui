function(__module,__exports,__require){
"use strict";
function __m(e, t) {
  function r(e2, t2) {
    let r2 = e2 || 75;
    return t2?.qualities?.length ? t2.qualities.reduce(
      (e3, t3) => Math.abs(t3 - r2) < Math.abs(e3 - r2) ? t3 : e3,
      t2.qualities[0]
    ) : r2;
  }
  Object.defineProperty(t, "__esModule", { value: true }), Object.defineProperty(t, "findClosestQuality", {
    enumerable: true,
    get: function() {
      return r;
    }
  });
}

__m(__module,__exports,__require);
}