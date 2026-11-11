function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { E4: () => a, Hr: () => p, W9: () => u, dB: () => d });
  var n = i(11698), s = i(25952), r = i(49637), o = i(11048);
  let a = (t2) => t2 === r.ai || t2 === o.px, l = /* @__PURE__ */ new Set(["x", "y", "z"]), h = s.U.filter((t2) => !l.has(t2));
  function u(t2) {
    let e2 = [];
    return h.forEach((i2) => {
      let n2 = t2.getValue(i2);
      if (void 0 !== n2) {
        let t3 = n2.get(), s2 = +!!i2.startsWith("scale");
        if (t3 === s2) return;
        e2.push([i2, t3]), n2.set(s2);
      }
    }), e2;
  }
  let d = /* @__PURE__ */ new Set(["bottom", "right"]);
  function c(t2, e2, i2, n2, s2, r2) {
    let o2 = parseFloat(t2);
    if (!isNaN(o2)) return o2;
    let { min: a2, max: l2 } = e2()[i2], h2 = l2 - a2;
    return "border-box" === r2 ? h2 : h2 - parseFloat(n2) - parseFloat(s2);
  }
  let p = {
    width: ({ width: t2, paddingLeft: e2 = "0", paddingRight: i2 = "0", boxSizing: n2 }, s2) => c(t2, s2, "x", e2, i2, n2),
    height: ({ height: t2, paddingTop: e2 = "0", paddingBottom: i2 = "0", boxSizing: n2 }, s2) => c(t2, s2, "y", e2, i2, n2),
    top: ({ top: t2 }) => parseFloat(t2),
    left: ({ left: t2 }) => parseFloat(t2),
    bottom: ({ top: t2 }, e2) => {
      let { y: i2 } = e2();
      return parseFloat(t2) + (i2.max - i2.min);
    },
    right: ({ left: t2 }, e2) => {
      let { x: i2 } = e2();
      return parseFloat(t2) + (i2.max - i2.min);
    },
    x: ({ transform: t2 }) => (0, n.ry)(t2, "x"),
    y: ({ transform: t2 }) => (0, n.ry)(t2, "y")
  };
  p.translateX = p.x, p.translateY = p.y;
}

__m(__module,__exports,__require);
}