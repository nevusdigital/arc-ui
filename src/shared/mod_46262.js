function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { k: () => w });
  var r = a(95155), i = a(12115), n = a(79196), s = a(25354), l = a(18310), o = a(28245), c = a(55809), d = a(92171), u = a(80642), p = a(64577), h = a(7770), m = a(85702), f = a.n(m);
  let _ = { duration: h.T.duration.fast, ease: [...h.T.ease.standard] }, x = { opacity: 0, y: "0.3em", filter: `blur(${h.T.blur.soft}px)` }, v = { opacity: 0, y: "-0.3em", filter: `blur(${h.T.blur.subtle}px)`, transition: _ }, b = { opacity: 0, scale: 0.6, filter: `blur(${h.T.blur.subtle}px)` }, y = { opacity: 1, y: "0em", scale: 1, filter: "blur(0px)" }, j = { opacity: 0, transition: { duration: h.T.duration.instant } };
  function g(e2) {
    let t2 = (0, n.tF)();
    return (0, r.jsx)(s.PY1.span, { ...e2, "aria-hidden": !t2 || e2["aria-hidden"] });
  }
  function w({ value: e2 = 0, max: t2 = 100, label: a2, showValue: n2 = false, className: m2, ...N }) {
    let k = (0, l.I)(), T = t2 > 0 ? t2 : 100, C = Math.min(Math.max(e2, 0), T), R = Math.round(C / T * 100), P = R >= 100, S = (0, o.d)(R), $ = (0, c.G)(S, (e3) => `${Math.min(Math.max(e3, 0), 100) - 100}%`), A = (0, c.G)(S, (e3) => `${Math.round(Math.min(Math.max(e3, 0), 100))}%`);
    (0, i.useEffect)(() => {
      if (k) return void S.jump(R);
      let e3 = (0, d.i)(S, R, h.T.spring.smooth);
      return () => e3.stop();
    }, [R, S, k]);
    let E = k ? { duration: h.T.duration.instant } : { duration: h.T.duration.standard, ease: [...h.T.ease.enter] }, L = [f().progress, m2].filter(Boolean).join(" ");
    return (0, r.jsxs)("div", { ...N, className: L, "data-complete": P ? "" : void 0, role: "progressbar", "aria-label": a2 ?? "Progress", "aria-valuemin": 0, "aria-valuemax": T, "aria-valuenow": C, "aria-valuetext": `${R}%`, children: [a2 || n2 ? (0, r.jsxs)("div", { className: f().meta, children: [a2 ? (0, r.jsx)("span", { className: f().label, children: (0, r.jsx)(u.N, { mode: "popLayout", initial: false, children: (0, r.jsx)(g, { className: f().line, initial: k ? { opacity: 0 } : x, animate: y, exit: k ? j : v, transition: E, children: a2 }, a2) }) }) : (0, r.jsx)("span", {}), n2 ? (0, r.jsxs)("span", { className: f().value, children: [(0, r.jsx)(u.N, { initial: false, children: P && (0, r.jsx)(s.PY1.span, { className: f().done, initial: k ? { opacity: 0 } : b, animate: y, exit: k ? j : { ...b, transition: _ }, transition: k ? E : { ...h.T.spring.snappy, delay: 0.24 }, children: (0, r.jsx)(p.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }) }, "done") }), (0, r.jsx)(s.PY1.span, { className: f().count, children: A })] }) : null] }) : null, (0, r.jsx)("div", { className: f().track, children: (0, r.jsx)(s.PY1.span, { className: f().fill, style: { x: $ } }) })] });
  }
}

__m(__module,__exports,__require);
}