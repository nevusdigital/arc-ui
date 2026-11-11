function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, {
    G: () => function e2(t2, n2, l, u) {
      if ("function" == typeof t2) {
        let e3;
        return i.bt.current = [], t2(), e3 = (0, a.j)(i.bt.current, t2), i.bt.current = void 0, e3;
      }
      if (void 0 !== l && !Array.isArray(l) && "function" != typeof n2) {
        var c = t2, d = n2, p = l, f = u;
        let r2 = (0, o.M)(() => Object.keys(p)), a2 = (0, o.M)(() => ({}));
        for (let t3 of r2) a2[t3] = e2(c, d, p[t3], f);
        return a2;
      }
      let h = "function" == typeof n2 ? n2 : (function(...e3) {
        let t3 = !Array.isArray(e3[0]), n3 = t3 ? 0 : -1, o2 = e3[0 + n3], a2 = e3[1 + n3], i2 = e3[2 + n3], s2 = e3[3 + n3], l2 = (0, r.G)(a2, i2, s2);
        return t3 ? l2(o2) : l2;
      })(n2, l, u), b = Array.isArray(t2) ? s(t2, h) : s([t2], ([e3]) => h(e3)), y = Array.isArray(t2) ? void 0 : t2.accelerate;
      return y && !y.isTransformed && "function" != typeof n2 && Array.isArray(l) && u?.clamp !== false && (b.accelerate = {
        ...y,
        times: n2,
        keyframes: l,
        isTransformed: true,
        ...u?.ease ? { ease: u.ease } : {}
      }), b;
    }
  });
  var r = n(21649), o = n(28819), a = n(71013), i = n(6900);
  function s(e2, t2) {
    let n2 = (0, o.M)(() => []);
    return (0, a.j)(e2, () => {
      n2.length = 0;
      let r2 = e2.length;
      for (let t3 = 0; t3 < r2; t3++) n2[t3] = e2[t3].get();
      return t2(n2);
    });
  }
}

__m(__module,__exports,__require);
}