function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { V: () => a });
  var n = i(49637), s = i(11048), r = i(71939), o = i(82163);
  let a = {
    test: (0, o.$)("hsl", "hue"),
    parse: (0, o.q)("hue", "saturation", "lightness"),
    transform: ({ hue: t2, saturation: e2, lightness: i2, alpha: o2 = 1 }) => "hsla(" + Math.round(t2) + ", " + s.KN.transform((0, r.a)(e2)) + ", " + s.KN.transform((0, r.a)(i2)) + ", " + (0, r.a)(n.X4.transform(o2)) + ")"
  };
}

__m(__module,__exports,__require);
}