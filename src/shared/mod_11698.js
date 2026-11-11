function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { Ib: () => c, ry: () => d, zs: () => u });
  let n = (t2) => 180 * t2 / Math.PI, s = (t2) => o(n(Math.atan2(t2[1], t2[0]))), r = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (t2) => (Math.abs(t2[0]) + Math.abs(t2[3])) / 2,
    rotate: s,
    rotateZ: s,
    skewX: (t2) => n(Math.atan(t2[1])),
    skewY: (t2) => n(Math.atan(t2[2])),
    skew: (t2) => (Math.abs(t2[1]) + Math.abs(t2[2])) / 2
  }, o = (t2) => ((t2 %= 360) < 0 && (t2 += 360), t2), a = (t2) => Math.sqrt(t2[0] * t2[0] + t2[1] * t2[1]), l = (t2) => Math.sqrt(t2[4] * t2[4] + t2[5] * t2[5]), h = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: a,
    scaleY: l,
    scale: (t2) => (a(t2) + l(t2)) / 2,
    rotateX: (t2) => o(n(Math.atan2(t2[6], t2[5]))),
    rotateY: (t2) => o(n(Math.atan2(-t2[2], t2[0]))),
    rotateZ: s,
    rotate: s,
    skewX: (t2) => n(Math.atan(t2[4])),
    skewY: (t2) => n(Math.atan(t2[1])),
    skew: (t2) => (Math.abs(t2[1]) + Math.abs(t2[4])) / 2
  };
  function u(t2) {
    return +!!t2.includes("scale");
  }
  function d(t2, e2) {
    let i2, n2;
    if (!t2 || "none" === t2) return u(e2);
    let s2 = t2.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    if (s2) i2 = h, n2 = s2;
    else {
      let e3 = t2.match(/^matrix\(([-\d.e\s,]+)\)$/u);
      i2 = r, n2 = e3;
    }
    if (!n2) return u(e2);
    let o2 = i2[e2], a2 = n2[1].split(",").map(p);
    return "function" == typeof o2 ? o2(a2) : a2[o2];
  }
  let c = (t2, e2) => {
    let { transform: i2 = "none" } = getComputedStyle(t2);
    return d(i2, e2);
  };
  function p(t2) {
    return parseFloat(t2.trim());
  }
}

__m(__module,__exports,__require);
}