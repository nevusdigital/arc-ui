function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { i: () => d });
  var n = i(8441), s = i(85843), r = i(72975), o = i(28153), a = i(94712), l = i(21649), h = i(86075), u = i(59337);
  function d({
    duration: t2 = 300,
    keyframes: e2,
    times: i2,
    ease: c = "easeInOut"
  }) {
    var p;
    let m = (0, s.h)(c) ? c.map(r.K) : (0, r.K)(c), f = { done: false, value: e2[0] };
    if (2 === e2.length && !Array.isArray(m) && (!i2 || 2 !== i2.length || 0 === i2[0] && 1 === i2[1])) {
      let [i3, n2] = e2, s2 = i3 === n2 ? void 0 : (o.W.mix || h.j)(i3, n2);
      return {
        calculatedDuration: t2,
        next: (e3) => (f.value = s2 ? s2(m(t2 > 0 ? (0, a.q)(0, 1, e3 / t2) : 1)) : n2, f.done = e3 >= t2, f)
      };
    }
    let v = (p = i2 && i2.length === e2.length ? i2 : (0, u.Z)(e2), p.map((e3) => e3 * t2)), y = (0, l.G)(v, e2, {
      ease: Array.isArray(m) ? m : e2.map(() => m || n.am).splice(0, e2.length - 1)
    });
    return {
      calculatedDuration: t2,
      next: (e3) => (f.value = y(e3), f.done = e3 >= t2, f)
    };
  }
}

__m(__module,__exports,__require);
}