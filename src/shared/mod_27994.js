function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { B: () => l });
  var n = i(94712), s = i(49637), r = i(71939), o = i(82163);
  let a = { ...s.ai, transform: (t2) => Math.round((0, n.q)(0, 255, t2)) }, l = {
    test: (0, o.$)("rgb", "red"),
    parse: (0, o.q)("red", "green", "blue"),
    transform: ({ red: t2, green: e2, blue: i2, alpha: n2 = 1 }) => "rgba(" + a.transform(t2) + ", " + a.transform(e2) + ", " + a.transform(i2) + ", " + (0, r.a)(s.X4.transform(n2)) + ")"
  };
}

__m(__module,__exports,__require);
}