function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { K: () => c });
  var n = i(5556), s = i(72025), r = i(25903), o = i(1406), a = i(89722), l = i(25505), h = i(8441), u = i(9331);
  let d = {
    linear: s.l,
    easeIn: h.a6,
    easeInOut: h.am,
    easeOut: h.vT,
    circIn: a.po,
    circInOut: a.tn,
    circOut: a.yT,
    backIn: o.dg,
    backInOut: o.ZZ,
    backOut: o.Sz,
    anticipate: r.b
  }, c = (t2) => {
    if ((0, u.D)(t2)) {
      (0, n.V)(
        4 === t2.length,
        "Cubic bezier arrays must contain four numerical values.",
        "cubic-bezier-length"
      );
      let [e2, i2, s2, r2] = t2;
      return (0, l.A)(e2, i2, s2, r2);
    }
    return "string" == typeof t2 ? ((0, n.V)(
      void 0 !== d[t2],
      `Invalid easing type '${t2}'`,
      "invalid-easing-type"
    ), d[t2]) : t2;
  };
}

__m(__module,__exports,__require);
}