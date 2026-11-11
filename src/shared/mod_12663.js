function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { L: () => n });
  function n(t2, e2, i2, s = 0, r = 1) {
    let o = Array.from(t2).sort((t3, e3) => t3.sortNodePosition(e3)).indexOf(e2), a = t2.size, l = (a - 1) * s;
    return "function" == typeof i2 ? i2(o, a) : 1 === r ? o * s : l - o * s;
  }
}

__m(__module,__exports,__require);
}