function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { d: () => o });
  var a = i(6900), r = i(12115), n = i(24866), s = i(28819);
  function o(e2) {
    let t2 = (0, s.M)(() => (0, a.OQ)(e2)), { isStatic: i2 } = (0, r.useContext)(n.Q);
    if (i2) {
      let [, i3] = (0, r.useState)(e2);
      (0, r.useEffect)(() => t2.on("change", i3), []);
    }
    return t2;
  }
}

__m(__module,__exports,__require);
}