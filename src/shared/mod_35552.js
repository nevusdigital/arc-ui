function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { Cc: () => y, x2: () => j });
  var l = t(95155), i = t(12115), n = t(80642), r = t(25354), s = t(18310), o = t(65024), c = t(7770), u = t(68156), d = t.n(u);
  let { duration: p, ease: m, blur: h } = c.T, _ = { type: "spring", visualDuration: 0.34, bounce: 0 }, x = [{ value: "monthly", label: "Monthly" }, { value: "yearly", label: "Yearly", badge: "Save 20%" }], b = { hidden: { opacity: 0, y: "0.45em", filter: `blur(${h.subtle}px)` }, shown: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: p.standard, ease: [...m.enter] } }, gone: { opacity: 0, y: "-0.45em", filter: `blur(${h.subtle}px)`, transition: { duration: p.fast, ease: [...m.standard] } } }, f = { hidden: { opacity: 0 }, shown: { opacity: 1, transition: { duration: p.fast } }, gone: { opacity: 0, transition: { duration: 0 } } };
  function g({ text: e2, candidates: a2, reduced: t2, className: i2 }) {
    return (0, l.jsxs)("span", { className: [d().swap, i2].filter(Boolean).join(" "), children: [[...new Set(a2)].map((e3) => (0, l.jsx)("span", { className: d().swapSizer, "aria-hidden": "true", children: e3 }, e3)), (0, l.jsx)(n.N, { initial: false, children: (0, l.jsx)(r.PY1.span, { className: d().swapText, variants: t2 ? f : b, initial: "hidden", animate: "shown", exit: "gone", children: e2 }, e2) })] });
  }
  function y({ value: e2, onValueChange: a2, options: t2 = x, label: n2 = "Billing period", size: o2 = "md", className: c2 }) {
    let u2 = !!(0, s.I)(), p2 = (0, i.useRef)(null), m2 = (0, i.useRef)([]), [h2, b2] = (0, i.useState)(null), f2 = Math.max(0, t2.findIndex((a3) => a3.value === e2)), v2 = (0, i.useCallback)(() => {
      let e3 = m2.current[f2];
      e3 && b2((a3) => a3 && a3.x === e3.offsetLeft && a3.width === e3.offsetWidth ? a3 : { x: e3.offsetLeft, width: e3.offsetWidth });
    }, [f2]);
    return (0, i.useLayoutEffect)(() => {
      v2();
      let e3 = p2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(v2);
      return a3.observe(e3), () => a3.disconnect();
    }, [v2]), (0, l.jsxs)("div", { ref: p2, role: "radiogroup", "aria-label": n2, className: [d().root, c2].filter(Boolean).join(" "), "data-size": o2, children: [h2 ? (0, l.jsx)(r.PY1.span, { className: d().thumb, "aria-hidden": "true", initial: false, animate: { x: h2.x, width: h2.width }, transition: u2 ? { duration: 0 } : _ }) : null, t2.map((e3, i2) => {
      let n3 = i2 === f2, r2 = n3 ? e3.activeBadge ?? e3.badge : e3.badge, s2 = [e3.badge, e3.activeBadge].filter((e4) => !!e4);
      return (0, l.jsxs)("button", { ref: (e4) => {
        m2.current[i2] = e4;
      }, type: "button", role: "radio", "aria-checked": n3, tabIndex: n3 ? 0 : -1, className: d().option, "data-selected": n3 || void 0, onClick: () => a2(e3.value), onKeyDown: (e4) => {
        let l2, n4;
        return l2 = "ArrowRight" === e4.key || "ArrowDown" === e4.key ? 1 : "ArrowLeft" === e4.key || "ArrowUp" === e4.key ? -1 : 0, void (!((n4 = "Home" === e4.key ? 0 : "End" === e4.key ? t2.length - 1 : l2 ? (i2 + l2 + t2.length) % t2.length : -1) < 0) && (e4.preventDefault(), a2(t2[n4].value), m2.current[n4]?.focus()));
      }, children: [n3 && !h2 ? (0, l.jsx)("span", { className: d().thumbStatic, "aria-hidden": "true" }) : null, (0, l.jsxs)("span", { className: d().content, children: [(0, l.jsx)("span", { className: d().label, children: e3.label }), r2 ? (0, l.jsx)("span", { className: d().badge, "data-active": n3 || void 0, children: (0, l.jsx)(g, { text: r2, candidates: s2, reduced: u2 }) }) : null] })] }, e3.value);
    })] });
  }
  let v = { type: "spring", visualDuration: 0.36, bounce: 0 };
  function j({ amount: e2, currency: a2 = "$", period: t2, was: c2, decimals: u2 = 0, className: h2 }) {
    let _2 = !!(0, s.I)(), x2 = void 0 !== c2 && c2 > e2, g2 = (0, i.useRef)(null), [y2, N] = (0, i.useState)(null);
    return (0, i.useLayoutEffect)(() => {
      let e3 = g2.current;
      e3 && N(e3.offsetWidth);
    }, [t2]), (0, l.jsxs)("span", { className: [d().price, h2].filter(Boolean).join(" "), children: [(0, l.jsxs)("span", { className: d().amount, children: [(0, l.jsx)("span", { className: d().currency, children: a2 }), (0, l.jsx)("span", { className: d().counter, children: (0, l.jsx)(o.q, { value: e2, decimals: u2 }) })] }), (0, l.jsxs)("span", { className: d().aside, children: [(0, l.jsx)(n.N, { initial: false, children: x2 ? (0, l.jsx)(r.PY1.span, { className: d().wasSlot, initial: _2 ? { opacity: 0 } : { opacity: 0, width: 0 }, animate: { opacity: 1, width: "auto" }, exit: _2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, width: 0, transition: { ...v, opacity: { duration: p.fast } } }, transition: _2 ? { duration: p.fast } : { ...v, opacity: { duration: p.standard, ease: [...m.enter] } }, children: (0, l.jsxs)("del", { className: d().was, children: [a2, c2.toFixed(u2)] }) }, "was") : null }), t2 ? (0, l.jsxs)(r.PY1.span, { className: d().period, initial: false, animate: null === y2 ? void 0 : { width: y2 }, transition: _2 ? { duration: 0 } : v, children: [(0, l.jsx)("span", { ref: g2, className: d().periodSizer, "aria-hidden": "true", children: t2 }), (0, l.jsx)(n.N, { initial: false, children: (0, l.jsx)(r.PY1.span, { className: d().periodText, variants: _2 ? f : b, initial: "hidden", animate: "shown", exit: "gone", children: t2 }, t2) })] }) : null] })] });
  }
}

__m(__module,__exports,__require);
}