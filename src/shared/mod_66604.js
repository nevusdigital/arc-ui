function(__module,__exports,__require){
"use strict";
function __m(t, i, a) {
  "use strict";
  a.d(i, { F8: () => Y, ZB: () => j, cW: () => $, ev: () => P, oO: () => M });
  var n = a(95155), e = a(12115), r = a(18310), s = a(25354), o = a(7770), c = a(10160), l = a.n(c);
  let { spring: h } = o.T, d = { duration: 0 }, u = () => () => {
  };
  function p() {
    let t2 = (0, e.useSyncExternalStore)(u, () => true, () => false);
    return !!(0, r.I)() && t2;
  }
  function x() {
    return (0, e.useId)().replace(/[^a-zA-Z0-9-]/g, "");
  }
  function y(t2) {
    let [i2, a2] = (0, e.useState)(t2), [n2, r2] = (0, e.useState)(0);
    return i2 !== t2 && (a2(t2), t2 && r2((t3) => t3 + 1)), n2;
  }
  function m({ size: t2 = 24, strokeWidth: i2 = 1.75, className: a2, children: e2, ...r2 }) {
    return (0, n.jsx)("svg", { viewBox: "0 0 24 24", width: t2, height: t2, fill: "none", stroke: "currentColor", strokeWidth: i2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", focusable: "false", className: [l().icon, a2].filter(Boolean).join(" "), ...r2, children: e2 });
  }
  function j({ state: t2 = false, ...i2 }) {
    let a2 = p(), e2 = a2 ? d : h.morph;
    return (0, n.jsxs)(m, { ...i2, children: [(0, n.jsx)(s.PY1.path, { d: "M4 6h16", initial: false, animate: t2 ? { y: 6, rotate: 45 } : { y: 0, rotate: 0 }, transition: e2 }), (0, n.jsx)(s.PY1.path, { d: "M4 12h16", initial: false, animate: t2 ? { opacity: 0, scaleX: 0.2 } : { opacity: 1, scaleX: 1 }, transition: a2 ? d : { ...h.snappy, opacity: { duration: o.T.duration.fast } } }), (0, n.jsx)(s.PY1.path, { d: "M4 18h16", initial: false, animate: t2 ? { y: -6, rotate: -45 } : { y: 0, rotate: 0 }, transition: e2 })] });
  }
  let f = ["M7 4.5 L12 7.42 L12 16.58 L7 19.5 Z", "M12 7.42 L19.5 11.8 L19.5 12.2 L12 16.58 Z"], L = ["M6.5 5 L10 5 L10 19 L6.5 19 Z", "M14 5 L17.5 5 L17.5 19 L14 19 Z"];
  function M({ state: t2 = false, ...i2 }) {
    let a2 = p() ? d : h.morph;
    return (0, n.jsx)(m, { ...i2, children: f.map((i3, e2) => (0, n.jsx)(s.PY1.path, { d: i3, fill: "currentColor", strokeWidth: 1.5, initial: false, animate: { d: t2 ? L[e2] : i3 }, transition: a2 }, e2)) });
  }
  function P({ state: t2 = false, ...i2 }) {
    let a2 = p() ? d : h.morph;
    return (0, n.jsxs)(m, { ...i2, children: [(0, n.jsx)(s.PY1.path, { d: "M12 5 L12 19", initial: false, animate: { d: t2 ? "M20 6.5 L9.5 17" : "M12 5 L12 19" }, transition: a2 }), (0, n.jsx)(s.PY1.path, { d: "M5 12 L19 12", initial: false, animate: { d: t2 ? "M4.5 12 L9.5 17" : "M5 12 L19 12" }, transition: a2 })] });
  }
  let k = Array.from({ length: 8 }, (t2, i2) => {
    let a2 = i2 * Math.PI / 4, n2 = Math.cos(a2), e2 = Math.sin(a2), r2 = (t3) => Math.round(100 * t3) / 100;
    return `M${r2(12 + 7.5 * n2)} ${r2(12 + 7.5 * e2)} L${r2(12 + 10 * n2)} ${r2(12 + 10 * e2)}`;
  });
  function Y({ state: t2 = false, ...i2 }) {
    let a2 = p(), e2 = x(), r2 = a2 ? d : h.morph, c2 = { r: t2 ? 8.5 : 4.5 }, l2 = t2 ? { cx: 18, cy: 6, r: 6.5 } : { cx: 30, cy: -6, r: 6.5 };
    return (0, n.jsxs)(m, { ...i2, children: [(0, n.jsxs)("defs", { children: [(0, n.jsxs)("mask", { id: `${e2}-bite`, maskUnits: "userSpaceOnUse", x: "-8", y: "-8", width: "40", height: "40", children: [(0, n.jsx)("rect", { x: "-8", y: "-8", width: "40", height: "40", fill: "white", stroke: "none" }), (0, n.jsx)(s.PY1.circle, { cx: 30, cy: -6, r: 6.5, fill: "black", stroke: "none", initial: false, animate: l2, transition: r2 })] }), (0, n.jsx)("clipPath", { id: `${e2}-disc`, children: (0, n.jsx)(s.PY1.circle, { cx: 12, cy: 12, r: 4.5, initial: false, animate: c2, transition: r2 }) })] }), (0, n.jsx)(s.PY1.circle, { cx: 12, cy: 12, r: 4.5, mask: `url(#${e2}-bite)`, initial: false, animate: c2, transition: r2 }), (0, n.jsx)(s.PY1.circle, { cx: 30, cy: -6, r: 6.5, clipPath: `url(#${e2}-disc)`, initial: false, animate: l2, transition: r2 }), (0, n.jsx)(s.PY1.g, { initial: false, animate: t2 ? { rotate: 90, scale: 0.4, opacity: 0 } : { rotate: 0, scale: 1, opacity: 1 }, transition: a2 ? d : { ...h.morph, opacity: { duration: o.T.duration.fast } }, children: k.map((t3) => (0, n.jsx)("path", { d: t3 }, t3)) })] });
  }
  let g = Array.from({ length: 7 }, (t2, i2) => {
    let a2 = -Math.PI / 2 + 2 * i2 * Math.PI / 7;
    return { x: Math.cos(a2), y: Math.sin(a2), r: i2 % 2 ? 1 : 1.4 };
  }), w = { menu: j, play: M, plus: P, copy: function({ state: t2 = false, ...i2 }) {
    let a2 = p(), e2 = a2 ? d : h.smooth, r2 = a2 ? d : { duration: o.T.duration.fast };
    return (0, n.jsxs)(m, { ...i2, children: [(0, n.jsx)(s.PY1.path, { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", initial: false, animate: t2 ? { x: 4, y: 4, opacity: 0 } : { x: 0, y: 0, opacity: 1 }, transition: { ...e2, opacity: r2 } }), (0, n.jsx)(s.PY1.rect, { x: "8", y: "8", width: "14", height: "14", rx: "2", initial: false, animate: t2 ? { scale: 0.7, opacity: 0 } : { scale: 1, opacity: 1 }, transition: { ...e2, opacity: r2 } }), (0, n.jsx)(s.PY1.path, { d: "M5 12.5 L9.5 17 L19 7.5", initial: false, animate: t2 ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }, transition: a2 ? d : { ...h.smooth, delay: 0.06 * !!t2, opacity: { duration: 0.08, delay: 0.06 * !!t2 } } })] });
  }, theme: Y, chevron: function({ state: t2 = false, turn: i2 = 180, pointing: a2 = "down", ...e2 }) {
    let r2 = p();
    return (0, n.jsx)(m, { ...e2, children: (0, n.jsx)(s.PY1.path, { d: "down" === a2 ? "M6 9 L12 15 L18 9" : "M9 6 L15 12 L9 18", initial: false, animate: { rotate: t2 ? i2 : 0 }, style: { transformOrigin: "50% 50%" }, transition: r2 ? d : h.morph }) });
  }, bell: function({ state: t2 = false, ...i2 }) {
    let a2 = p(), e2 = x(), r2 = y(t2), o2 = r2 > 0 && !a2, c2 = a2 ? d : { ...h.smooth, opacity: { duration: 0.08 } }, l2 = { pathLength: +!t2, opacity: +!t2 };
    return (0, n.jsxs)(m, { ...i2, children: [(0, n.jsx)("defs", { children: (0, n.jsxs)("mask", { id: `${e2}-cut`, maskUnits: "userSpaceOnUse", x: "-4", y: "-4", width: "32", height: "32", children: [(0, n.jsx)("rect", { x: "-4", y: "-4", width: "32", height: "32", fill: "white", stroke: "none" }), (0, n.jsx)(s.PY1.path, { d: "M3 3 L21 21", stroke: "black", strokeWidth: 5, initial: false, animate: l2, transition: c2 })] }) }), (0, n.jsxs)("g", { mask: `url(#${e2}-cut)`, children: [(0, n.jsx)(s.PY1.g, { style: { transformOrigin: "50% 0%" }, animate: o2 ? { rotate: [0, 16, -13, 9, -6, 3, 0] } : { rotate: 0 }, transition: { duration: 0.9, ease: "easeOut" }, children: (0, n.jsx)("path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }) }, `bell-${r2}`), (0, n.jsx)(s.PY1.path, { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", animate: o2 ? { x: [0, -2.2, 2, -1.4, 0.9, -0.4, 0] } : { x: 0 }, transition: { duration: 0.9, ease: "easeOut", delay: 0.04 } }, `clapper-${r2}`)] }), (0, n.jsx)(s.PY1.path, { d: "M3 3 L21 21", initial: false, animate: l2, transition: c2 })] });
  }, heart: function({ state: t2 = false, className: i2, ...a2 }) {
    let e2 = p(), r2 = y(t2), c2 = r2 > 0 && t2 && !e2;
    return (0, n.jsxs)(m, { ...a2, className: [l().heart, i2].filter(Boolean).join(" "), "data-on": t2 ? "" : void 0, overflow: "visible", children: [c2 && (0, n.jsxs)("g", { stroke: "none", children: [(0, n.jsx)(s.PY1.circle, { cx: 12, cy: 12, fill: "none", stroke: "currentColor", initial: { r: 4, strokeWidth: 3, opacity: 0.5 }, animate: { r: 13, strokeWidth: 0, opacity: 0 }, transition: { duration: 0.5, ease: [...o.T.ease.enter] } }), g.map((t3, i3) => (0, n.jsx)(s.PY1.circle, { cx: 12, cy: 12, r: t3.r, fill: "currentColor", initial: { x: 7 * t3.x, y: 7 * t3.y, opacity: 1, scale: 1 }, animate: { x: 14 * t3.x, y: 14 * t3.y, opacity: 0, scale: 0.3 }, transition: { duration: 0.55, delay: 0.05, ease: [...o.T.ease.enter] } }, i3))] }, `burst-${r2}`), (0, n.jsx)(s.PY1.g, { style: { transformOrigin: "50% 50%" }, animate: c2 ? { scale: [0.72, 1.14, 1] } : { scale: 1 }, transition: { duration: 0.45, ease: [...o.T.ease.enter] }, children: (0, n.jsx)(s.PY1.path, { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z", initial: { fillOpacity: t2 && !c2 ? 1 : 0 }, animate: { fillOpacity: +!!t2 }, fill: "currentColor", transition: e2 ? d : { duration: o.T.duration.fast } }) }, `heart-${r2}`)] });
  } };
  function $({ name: t2, ...i2 }) {
    let a2 = w[t2];
    return (0, n.jsx)(a2, { ...i2 });
  }
}

__m(__module,__exports,__require);
}