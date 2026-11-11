function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { $: () => r, q: () => o });
  var n = i(21620);
  let s = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, r = (t2, e2) => (i2) => !!("string" == typeof i2 && s.test(i2) && i2.startsWith(t2) || e2 && null != i2 && Object.prototype.hasOwnProperty.call(i2, e2)), o = (t2, e2, i2) => (s2) => {
    if ("string" != typeof s2) return s2;
    let [r2, o2, a, l] = s2.match(n.S);
    return {
      [t2]: parseFloat(r2),
      [e2]: parseFloat(o2),
      [i2]: parseFloat(a),
      alpha: void 0 !== l ? parseFloat(l) : 1
    };
  };
}

__m(__module,__exports,__require);
}