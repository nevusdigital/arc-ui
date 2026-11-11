function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { X: () => s });
  let n = (t2) => null !== t2;
  function s(t2, { repeat: e2, repeatType: i2 = "loop" }, r, o = 1) {
    let a = t2.filter(n), l = o < 0 || e2 && "loop" !== i2 && e2 % 2 == 1 ? 0 : a.length - 1;
    return l && void 0 !== r ? r : a[l];
  }
}

__m(__module,__exports,__require);
}