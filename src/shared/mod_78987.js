function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { K: () => n });
  let n = (t2, e2, i2 = 10) => {
    let n2 = "", s = Math.max(Math.round(e2 / i2), 2);
    for (let e3 = 0; e3 < s; e3++)
      n2 += Math.round(1e4 * t2(e3 / (s - 1))) / 1e4 + ", ";
    return `linear(${n2.substring(0, n2.length - 2)})`;
  };
}

__m(__module,__exports,__require);
}