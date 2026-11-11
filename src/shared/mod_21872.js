function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { H: () => h });
  var n = i(33177), s = i(11048);
  function r(t2, e2) {
    return e2.max === e2.min ? 0 : t2 / (e2.max - e2.min) * 100;
  }
  let o = {
    correct: (t2, e2) => {
      if (!e2.target) return t2;
      if ("string" == typeof t2)
        if (!s.px.test(t2)) return t2;
        else t2 = parseFloat(t2);
      let i2 = r(t2, e2.target.x), n2 = r(t2, e2.target.y);
      return `${i2}% ${n2}%`;
    }
  };
  var a = i(83399), l = i(56260);
  let h = {
    borderRadius: { ...o, applyTo: [...n.S] },
    borderTopLeftRadius: o,
    borderTopRightRadius: o,
    borderBottomLeftRadius: o,
    borderBottomRightRadius: o,
    boxShadow: {
      correct: (t2, { treeScale: e2, projectionDelta: i2 }) => {
        let n2 = a.f.parse(t2);
        if (n2.length > 5) return t2;
        let s2 = a.f.createTransformer(t2), r2 = +("number" != typeof n2[0]), o2 = i2.x.scale * e2.x, h2 = i2.y.scale * e2.y;
        n2[0 + r2] /= o2, n2[1 + r2] /= h2;
        let u = (0, l.k)(o2, h2, 0.5);
        return "number" == typeof n2[2 + r2] && (n2[2 + r2] /= u), "number" == typeof n2[3 + r2] && (n2[3 + r2] /= u), s2(n2);
      }
    }
  };
}

__m(__module,__exports,__require);
}