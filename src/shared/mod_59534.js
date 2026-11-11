function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { InViewTitle: () => v, default: () => x });
  var i = n(95155), a = n(12115), r = n(61792), l = n(18310), s = n(25354), o = n(7770), c = n(65742), d = n.n(c);
  let p = () => () => {
  }, _ = () => true, u = () => false, h = performance.now() > 2400, m = [...o.T.ease.enter], g = [...o.T.ease.standard];
  function f(e2, t2, n2, i2 = 0.8) {
    if (e2) return { duration: 0 };
    if (!t2) return { duration: o.T.duration.exit, ease: g };
    let a2 = (e3, t3 = m) => ({ duration: e3, delay: n2, ease: t3 });
    return { y: a2(i2), x: a2(i2), "--wipe": a2(i2, g), filter: a2(0.78 * i2), opacity: a2(0.56 * i2, g) };
  }
  function v({ text: e2, variant: t2 = "blur", as: n2 = "h2", lines: c2, className: m2, id: g2, once: x2 = true }) {
    let y = (0, a.useRef)(null), b = (0, r.W)(y, { once: x2, amount: 0.45 }), [w, j] = (0, a.useState)(false);
    (0, a.useEffect)(() => {
      if (b || w) return;
      let e3 = () => {
        y.current && y.current.getBoundingClientRect().top < 0 && j(true);
      };
      return e3(), window.addEventListener("scroll", e3, { passive: true }), () => window.removeEventListener("scroll", e3);
    }, [b, w]);
    let S = (0, l.I)(), N = (0, a.useSyncExternalStore)(p, _, u), [k] = (0, a.useState)(!N), C = N && S, P = N && k && h, I = C || P || b || w, L = !!(C || P), T = [d().wrap, N ? "" : d().pending, m2].filter(Boolean).join(" "), $ = e2.split(" ").filter(Boolean), A = Math.min(1.5 * o.T.stagger.word, 0.4 / Math.max($.length, 1));
    if ("word" === t2) return (0, i.jsx)("div", { ref: y, className: T, children: (0, i.jsx)(n2, { id: g2, "aria-label": e2, children: $.map((e3, t3) => (0, i.jsxs)(a.Fragment, { children: [(0, i.jsx)("span", { className: d().clip, "aria-hidden": "true", children: (0, i.jsx)(s.PY1.span, { className: d().part, initial: false, animate: I ? { y: "0em", opacity: 1 } : { y: "0.9em", opacity: 0 }, transition: f(L, I, t3 * A), children: e3 }) }), t3 < $.length - 1 ? " " : null] }, `${e3}-${t3}`)) }) });
    if ("line" === t2) {
      let t3 = c2?.length ? c2 : [e2];
      return (0, i.jsx)("div", { ref: y, className: T, children: (0, i.jsx)(n2, { id: g2, "aria-label": e2, children: t3.map((e3, t4) => (0, i.jsx)("span", { className: d().lineClip, "aria-hidden": "true", children: (0, i.jsx)(s.PY1.span, { className: d().part, initial: false, animate: I ? { y: "0%", opacity: 1 } : { y: "112%", opacity: 0 }, transition: f(L, I, t4 * o.T.stagger.line, 0.86), children: e3 }) }, `${e3}-${t4}`)) }) });
    }
    return "blur" === t2 ? (0, i.jsx)("div", { ref: y, className: T, children: (0, i.jsx)(n2, { id: g2, "aria-label": e2, children: $.map((e3, t3) => (0, i.jsxs)(a.Fragment, { children: [(0, i.jsx)(s.PY1.span, { className: `${d().blurWord} ${d().part}`, "aria-hidden": "true", initial: false, animate: I ? { opacity: 1, y: "0em", filter: "blur(0px)" } : { opacity: 0, y: "0.2em", filter: `blur(${o.T.blur.text}px)` }, transition: f(L, I, t3 * A), children: e3 }), t3 < $.length - 1 ? " " : null] }, `${e3}-${t3}`)) }) }) : "tracking" === t2 ? (0, i.jsx)("div", { ref: y, className: T, children: (0, i.jsx)(n2, { id: g2, "aria-label": e2, children: $.map((e3, t3) => {
      let n3 = Array.from(e3), r2 = (n3.length - 1) / 2, l2 = t3 * o.T.stagger.char * 2;
      return (0, i.jsxs)(a.Fragment, { children: [(0, i.jsx)(s.PY1.span, { className: `${d().trackWord} ${d().part}`, "aria-hidden": "true", initial: false, animate: I ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0, filter: `blur(${o.T.blur.soft}px)` }, transition: f(L, I, l2, 0.9), children: n3.map((e4, t4) => (0, i.jsx)(s.PY1.span, { className: d().part, initial: false, animate: { x: I ? "0em" : `${(r2 - t4) * 0.06}em` }, transition: f(L, I, l2, 1), children: e4 }, t4)) }), t3 < $.length - 1 ? " " : null] }, `${e3}-${t3}`);
    }) }) }) : (0, i.jsx)("div", { ref: y, className: T, children: (0, i.jsx)(s.PY1.div, { className: `${d().wipe} ${d().part}`, initial: false, animate: I ? { "--wipe": "0%", x: "0em" } : { "--wipe": "100%", x: "-0.12em" }, transition: f(L, I, 0, 0.9), children: (0, i.jsx)(n2, { id: g2, children: e2 }) }) });
  }
  let x = v;
}

__m(__module,__exports,__require);
}