function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  function n(t2) {
    let e2 = [{}, {}];
    return t2?.values.forEach((t3, i2) => {
      e2[0][i2] = t3.get(), e2[1][i2] = t3.getVelocity();
    }), e2;
  }
  function s(t2, e2, i2, s2) {
    if ("function" == typeof e2) {
      let [r, o] = n(s2);
      e2 = e2(void 0 !== i2 ? i2 : t2.custom, r, o);
    }
    if ("string" == typeof e2 && (e2 = t2.variants && t2.variants[e2]), "function" == typeof e2) {
      let [r, o] = n(s2);
      e2 = e2(void 0 !== i2 ? i2 : t2.custom, r, o);
    }
    return e2;
  }
  i.d(e, { a: () => s });
}

__m(__module,__exports,__require);
}