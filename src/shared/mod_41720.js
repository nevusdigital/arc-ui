function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { B: () => s });
  var n = i(13031);
  function s({
    keyframes: t2,
    velocity: e2 = 0,
    power: i2 = 0.8,
    timeConstant: r = 325,
    bounceDamping: o = 10,
    bounceStiffness: a = 500,
    modifyTarget: l,
    min: h,
    max: u,
    restDelta: d = 0.5,
    restSpeed: c
  }) {
    let p, m, f = t2[0], v = { done: false, value: f }, y = i2 * e2, g = f + y, x = void 0 === l ? g : l(g);
    x !== g && (y = x - f);
    let w = (t3) => -y * Math.exp(-t3 / r), S = (t3) => {
      let e3 = w(t3);
      v.done = Math.abs(e3) <= d, v.value = v.done ? x : x + e3;
    }, b = (t3) => {
      let e3;
      if ((e3 = v.value) < h || e3 > u) {
        var i3;
        p = t3, m = (0, n.o)({
          keyframes: [
            v.value,
            (i3 = v.value, void 0 === h ? u : void 0 === u || Math.abs(h - i3) < Math.abs(u - i3) ? h : u)
          ],
          velocity: -w(t3) / r * 1e3,
          damping: o,
          stiffness: a,
          restDelta: d,
          restSpeed: c
        });
      }
    };
    return b(0), {
      calculatedDuration: null,
      next: (t3) => {
        let e3 = false;
        return (m || void 0 !== p || (e3 = true, S(t3), b(t3)), void 0 !== p && t3 >= p) ? m.next(t3 - p) : (e3 || S(t3), v);
      }
    };
  }
}

__m(__module,__exports,__require);
}