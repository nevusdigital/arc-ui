function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { A: () => r });
  var n = i(72025);
  let s = (t2, e2, i2) => (((1 - 3 * i2 + 3 * e2) * t2 + (3 * i2 - 6 * e2)) * t2 + 3 * e2) * t2;
  function r(t2, e2, i2, r2) {
    return t2 === e2 && i2 === r2 ? n.l : (n2) => 0 === n2 || 1 === n2 ? n2 : s(
      (function(t3, e3, i3, n3, r3) {
        let o, a, l = 0;
        do
          (o = s(a = e3 + (i3 - e3) / 2, n3, r3) - t3) > 0 ? i3 = a : e3 = a;
        while (Math.abs(o) > 1e-7 && ++l < 12);
        return a;
      })(n2, 0, 1, t2, i2),
      e2,
      r2
    );
  }
}

__m(__module,__exports,__require);
}