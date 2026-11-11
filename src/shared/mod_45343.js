function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { Y: () => s });
  var n = i(79537);
  function s(t2, e2, i2 = 0) {
    var r, o;
    let a;
    return e2 <= 0 ? i2 : t2.velocity ? t2.velocity(e2) : (r = (e3) => t2.next(e3).value, o = t2.next(e2).value, a = Math.max(e2 - 5, 0), (0, n.f)(o - r(a), e2 - a));
  }
}

__m(__module,__exports,__require);
}