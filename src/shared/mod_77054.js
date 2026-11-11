function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { y: () => o });
  var n = i(30281), s = i(88158), r = i(27994);
  let o = {
    test: (t2) => r.B.test(t2) || n.u.test(t2) || s.V.test(t2),
    parse: (t2) => r.B.test(t2) ? r.B.parse(t2) : s.V.test(t2) ? s.V.parse(t2) : n.u.parse(t2),
    transform: (t2) => "string" == typeof t2 ? t2 : t2.hasOwnProperty("red") ? r.B.transform(t2) : s.V.transform(t2),
    getAnimatableNone: (t2) => {
      let e2 = o.parse(t2);
      return e2.alpha = 0, o.transform(e2);
    }
  };
}

__m(__module,__exports,__require);
}