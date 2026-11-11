function(__module,__exports,__require){
"use strict";
function __m(e, a, r) {
  "use strict";
  let d;
  r.d(a, { J: () => b });
  var s = r(95155), i = r(12115), t = r(18310), l = r(28245), n = r(92171), o = r(25354), c = r(7770), u = r(72150), p = r.n(u);
  let y = [...c.T.ease.standard], m = { type: "spring", stiffness: (d = 2 * Math.PI / 0.504) * d, damping: 2 * d, mass: 1 }, h = () => () => {
  }, b = (0, i.forwardRef)(function({ options: e2, value: a2, defaultValue: r2 = null, onValueChange: d2, layout: u2 = "grid", minColumnWidth: b2 = 180, name: v, required: f, disabled: _ = false, className: k, style: x, ...g }, j) {
    let A, w = (A = (0, i.useSyncExternalStore)(h, () => true, () => false), !!(0, t.I)() && A), N = (0, i.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), R = (0, i.useRef)(null);
    (0, i.useImperativeHandle)(j, () => R.current);
    let [z, D] = (0, i.useState)(r2), S = void 0 !== a2 ? a2 : z, $ = e2.findIndex((e3) => e3.value === S), M = (e3) => !_ && !e3.disabled, T = $ >= 0 && M(e2[$]) ? $ : e2.findIndex(M), C = (e3) => {
      e3 !== S && (void 0 === a2 && D(e3), d2?.(e3));
    }, E = (0, l.d)(0), L = (0, l.d)(0), q = (0, l.d)(0), H = (0, l.d)(0), I = (0, l.d)(0), O = (0, i.useRef)(false), V = (0, i.useCallback)((e3) => {
      let a3 = $ < 0 ? null : R.current?.querySelector(`[data-card="${$}"]`);
      if (!a3) {
        I.set(0), O.current = false;
        return;
      }
      let r3 = [a3.offsetLeft, a3.offsetTop, a3.offsetWidth, a3.offsetHeight];
      if (!e3 || !O.current || w) {
        E.jump(r3[0]), L.jump(r3[1]), q.jump(r3[2]), H.jump(r3[3]), O.current || w || !e3 ? I.jump(1) : (I.jump(0), (0, n.i)(I, 1, { duration: c.T.duration.fast, ease: y })), O.current = true;
        return;
      }
      (0, n.i)(E, r3[0], m), (0, n.i)(L, r3[1], m), (0, n.i)(q, r3[2], m), (0, n.i)(H, r3[3], m), I.set(1);
    }, [H, I, w, $, q, E, L]), P = (0, i.useRef)(V);
    (0, i.useLayoutEffect)(() => {
      P.current = V, V(true);
    }, [V]), (0, i.useLayoutEffect)(() => {
      let e3 = R.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(() => P.current(false));
      return a3.observe(e3), () => a3.disconnect();
    }, []);
    let B = () => Array.from(R.current?.querySelectorAll("[data-card]") ?? []);
    return (0, s.jsxs)("div", { ref: R, role: "radiogroup", "aria-disabled": _ || void 0, "aria-required": f || void 0, className: [p().root, k].filter(Boolean).join(" "), "data-layout": u2, style: { "--min-column": `${b2}px`, ...x }, ...g, children: [(0, s.jsx)(o.PY1.span, { className: p().ring, style: { x: E, y: L, width: q, height: H, opacity: I }, "aria-hidden": "true" }), e2.map((a3, r3) => {
      let d3 = r3 === $, i2 = !M(a3), t2 = `${N}-${r3}-label`, l2 = `${N}-${r3}-description`, n2 = i2 && a3.disabledReason ? a3.disabledReason : a3.description;
      return (0, s.jsxs)("div", { role: "radio", "data-card": r3, className: p().card, "aria-checked": d3, "aria-disabled": i2 || void 0, "aria-labelledby": t2, "aria-describedby": n2 ? l2 : void 0, tabIndex: r3 === T ? 0 : -1, "data-checked": d3 || void 0, onClick: () => {
        i2 || C(a3.value);
      }, onKeyDown: (a4) => ((a5, r4) => {
        let d4 = "ArrowRight" === a5.key || "ArrowDown" === a5.key ? 1 : "ArrowLeft" === a5.key || "ArrowUp" === a5.key ? -1 : 0;
        if (" " === a5.key || "Enter" === a5.key) {
          a5.preventDefault(), M(e2[r4]) && C(e2[r4].value);
          return;
        }
        if (!d4 && "Home" !== a5.key && "End" !== a5.key) return;
        a5.preventDefault();
        let s2 = e2.length, i3 = d4 && ("ArrowLeft" === a5.key || "ArrowRight" === a5.key) && "rtl" === getComputedStyle(a5.currentTarget).direction ? -1 : 1, t3 = "Home" === a5.key ? -1 : "End" === a5.key ? s2 : r4, l3 = "Home" === a5.key ? 1 : "End" === a5.key ? -1 : d4 * i3;
        for (let a6 = 0; a6 < s2; a6++) if (M(e2[t3 = (t3 + l3 + s2) % s2])) {
          B()[t3]?.focus(), C(e2[t3].value);
          return;
        }
      })(a4, r3), children: [(0, s.jsx)("span", { className: p().indicator, "aria-hidden": "true", children: (0, s.jsx)(o.PY1.span, { className: p().indicatorDot, initial: false, animate: { scale: +!!d3 }, transition: w ? { duration: 0 } : c.T.spring.snappy }) }), (0, s.jsxs)("span", { className: p().body, children: [(0, s.jsxs)("span", { id: t2, className: p().label, children: [a3.icon && (0, s.jsx)("span", { className: p().icon, children: a3.icon }), (0, s.jsx)("span", { className: p().labelText, children: a3.label })] }), n2 && (0, s.jsx)("span", { id: l2, className: p().description, children: n2 })] }), a3.meta && (0, s.jsx)("span", { className: p().meta, children: a3.meta })] }, a3.value);
    }), v && (0, s.jsx)("input", { type: "hidden", name: v, value: S ?? "", required: f })] });
  });
}

__m(__module,__exports,__require);
}