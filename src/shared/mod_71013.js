function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { j: () => i });
  var r = n(27933), o = n(65239), a = n(28245);
  function i(e2, t2) {
    let n2 = (0, a.d)(t2()), i2 = () => n2.set(t2());
    return i2(), (0, o.E)(() => {
      let t3 = () => r.Gt.preRender(i2, false, true), n3 = e2.map((e3) => e3.on("change", t3));
      return () => {
        n3.forEach((e3) => e3()), (0, r.WG)(i2);
      };
    }), n2;
  }
}

__m(__module,__exports,__require);
}