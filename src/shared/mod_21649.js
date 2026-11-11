function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { G: () => u });
  var n = i(28153), s = i(72025), r = i(34017), o = i(5556), a = i(18844), l = i(94712), h = i(86075);
  function u(t2, e2, { clamp: i2 = true, ease: d, mixer: c } = {}) {
    let p = t2.length;
    if ((0, o.V)(
      p === e2.length,
      "Both input and output ranges must be the same length",
      "range-length"
    ), 1 === p)
      return () => e2[0];
    if (2 === p && e2[0] === e2[1]) return () => e2[1];
    let m = t2[0] === t2[1];
    t2[0] > t2[p - 1] && (t2 = [...t2].reverse(), e2 = [...e2].reverse());
    let f = (function(t3, e3, i3) {
      let o2 = [], a2 = i3 || n.W.mix || h.j, l2 = t3.length - 1;
      for (let i4 = 0; i4 < l2; i4++) {
        let n2 = a2(t3[i4], t3[i4 + 1]);
        if (e3) {
          let t4 = Array.isArray(e3) ? e3[i4] || s.l : e3;
          n2 = (0, r.F)(t4, n2);
        }
        o2.push(n2);
      }
      return o2;
    })(e2, d, c), v = f.length, y = (i3) => {
      if (m && i3 < t2[0]) return e2[0];
      let n2 = 0;
      if (v > 1) for (; n2 < t2.length - 2 && !(i3 < t2[n2 + 1]); n2++) ;
      let s2 = (0, a.q)(t2[n2], t2[n2 + 1], i3);
      return f[n2](s2);
    };
    return i2 ? (e3) => y((0, l.q)(t2[0], t2[p - 1], e3)) : y;
  }
}

__m(__module,__exports,__require);
}