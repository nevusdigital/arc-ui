function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => C, I: () => S });
  var n = a(95155), i = a(12115), r = a(28245), s = a(92171), l = a(25354), o = a(79196), d = a(55809), c = a(80642), u = a(18310), p = a(57700), m = a(7770), h = a(58272), f = a.n(h);
  let g = "\0more", _ = [...m.T.ease.standard], x = [...m.T.ease.enter], y = { duration: m.T.duration.fast, ease: _ }, b = { duration: 0.15, ease: _ }, v = { duration: m.T.duration.fast, ease: _ }, j = { opacity: 1, y: "0em", scale: 1, filter: "blur(0px)" }, w = { opacity: 0, y: "0.3em", filter: `blur(${m.T.blur.soft}px)` }, N = { opacity: 0, y: "-0.3em", filter: `blur(${m.T.blur.subtle}px)`, transition: v };
  function T(e2, t2, a2) {
    let n2 = (0, r.d)(0), l2 = (0, i.useRef)(null);
    return (0, i.useLayoutEffect)(() => {
      let t3 = e2.current;
      if (!t3) return;
      let i2 = t3.offsetWidth, r2 = l2.current;
      if (l2.current = i2, null === r2 || r2 === i2) return;
      if (a2) return void n2.jump(0);
      let o2 = n2.getVelocity();
      n2.jump(n2.get() + r2 - i2), (0, s.i)(n2, 0, { ...m.T.spring.morph, velocity: o2 });
    }, [t2, n2, e2, a2]), (0, i.useEffect)(() => {
      let t3 = e2.current;
      if (!t3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(() => {
        l2.current = t3.offsetWidth;
      });
      return a3.observe(t3), () => a3.disconnect();
    }, [e2]), n2;
  }
  function k({ morphKey: e2, reduce: t2, children: a2 }) {
    let o2 = (0, i.useRef)(null), d2 = (0, i.useRef)(null), c2 = (0, r.d)("auto"), u2 = (0, i.useRef)(0), p2 = (0, i.useRef)(void 0), h2 = (0, i.useRef)(false);
    return (0, i.useLayoutEffect)(() => {
      u2.current = performance.now();
      let e3 = o2.current;
      if (t2 || !e3 || void 0 === p2.current) return;
      let a3 = c2.get(), n2 = "number" == typeof a3 ? a3 : p2.current;
      c2.jump(n2), Object.assign(e3.style, { overflow: "clip", height: `${n2}px`, minHeight: `${n2}px` });
      let i2 = 0, r2 = requestAnimationFrame(() => {
        i2 = requestAnimationFrame(() => {
          !h2.current && (c2.jump("auto"), o2.current && Object.assign(o2.current.style, { overflow: "", height: "auto", minHeight: "" }));
        });
      });
      return () => {
        cancelAnimationFrame(r2), cancelAnimationFrame(i2);
      };
    }, [e2, t2, c2]), (0, i.useEffect)(() => {
      let e3, a3 = d2.current;
      if (!a3 || "u" < typeof ResizeObserver) return;
      let n2 = () => {
        h2.current = false, c2.jump("auto"), o2.current && Object.assign(o2.current.style, { overflow: "", height: "auto", minHeight: "" });
      }, i2 = c2.on("change", (e4) => {
        o2.current && (o2.current.style.minHeight = "number" == typeof e4 ? `${e4}px` : "");
      }), r2 = new ResizeObserver(([i3]) => {
        if (!i3) return;
        let r3 = i3.borderBoxSize?.[0]?.blockSize ?? a3.offsetHeight, l2 = c2.get(), d3 = "number" == typeof l2 ? l2 : p2.current;
        if (p2.current = r3, e3?.stop(), t2 || void 0 === d3 || 0.5 > Math.abs(d3 - r3) || performance.now() - u2.current > 160) return n2();
        o2.current && Object.assign(o2.current.style, { overflow: "clip", height: `${d3}px`, minHeight: `${d3}px` }), h2.current = true, e3 = (0, s.i)(c2, [d3, r3], { ...m.T.spring.smooth, onComplete: n2 });
      });
      return r2.observe(a3), () => {
        r2.disconnect(), i2(), e3?.stop();
      };
    }, [c2, t2]), (0, n.jsx)(l.PY1.div, { ref: o2, className: f().frame, style: { height: c2 }, children: (0, n.jsx)("div", { ref: d2, className: f().content, children: a2 }) });
  }
  function M({ follow: e2, style: t2, ...a2 }) {
    let s2 = (0, o.tF)(), d2 = (0, r.d)(0);
    return (0, i.useLayoutEffect)(() => {
      !s2 && e2 && d2.jump(e2.get());
    }, [s2, e2, d2]), (0, n.jsx)(l.PY1.span, { ...a2, style: e2 ? { ...t2, x: s2 ? e2 : d2 } : t2, "aria-hidden": !s2 || a2["aria-hidden"] });
  }
  function $({ option: e2, selected: t2, tabbable: a2, reduce: s2, delay: c2, onToggle: u2, onFocusChip: p2, ref: h2 }) {
    let g2 = (0, o.tF)(), x2 = (0, i.useRef)(null), v2 = T(x2, String(t2), s2), j2 = (0, i.useRef)(18 * !!t2), w2 = (0, r.d)(+!!t2), N2 = (0, d.G)(v2, (e3) => -e3), k2 = (0, d.G)(w2, (e3) => Math.min(e3, 1.1)), M2 = (0, d.G)(w2, (e3) => Math.min(1, 1.4 * e3)), A2 = (0, d.G)(w2, (e3) => e3 >= 1 ? "none" : `blur(${((1 - e3) * m.T.blur.subtle).toFixed(2)}px)`), S2 = (0, d.G)(w2, (e3) => Math.min(1, Math.max(1e-3, e3)));
    (0, i.useLayoutEffect)(() => {
      j2.current = 18 * !!t2;
      let e3 = () => w2.set(Math.max(0, (j2.current + v2.get()) / 18));
      return e3(), v2.on("change", e3);
    }, [t2, v2, w2]);
    let C2 = s2 ? { layout: { duration: 0 }, default: b } : { layout: m.T.spring.morph, default: { ...m.T.spring.snappy, delay: c2 }, opacity: { ...y, delay: c2 } };
    return (0, n.jsx)(l.PY1.button, { ref: h2, type: "button", className: f().chip, "data-chip": e2.value, "aria-pressed": t2, "aria-hidden": !g2 || void 0, tabIndex: g2 && a2 ? 0 : -1, onClick: () => u2(e2.value), onFocus: () => p2(e2.value), layout: "position", initial: s2 ? { opacity: 0 } : { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: s2 ? { opacity: 0, transition: b } : { opacity: 0, scale: 0.9, transition: { duration: m.T.duration.instant, ease: _ } }, transition: C2, children: (0, n.jsxs)("span", { ref: x2, className: f().body, "data-selected": t2, children: [(0, n.jsx)(l.PY1.span, { className: f().surface, style: { right: N2 }, "aria-hidden": "true" }), (0, n.jsx)(l.PY1.span, { className: f().check, style: { scale: k2, opacity: M2, filter: A2 }, "aria-hidden": "true", children: (0, n.jsx)("svg", { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round", children: (0, n.jsx)(l.PY1.path, { d: "M4 12.5 9.5 18 20 6.5", style: { pathLength: S2 } }) }) }), (0, n.jsx)("span", { className: f().slot, "aria-hidden": "true" }), (0, n.jsx)(l.PY1.span, { className: f().label, style: { x: v2 }, children: e2.label })] }) });
  }
  function A({ hidden: e2, expanded: t2, tabbable: a2, reduce: r2, onToggle: s2, onFocusChip: o2, ref: u2 }) {
    let p2 = (0, i.useRef)(null), h2 = t2 ? "Show less" : `+${e2} more`, _2 = T(p2, h2, r2), y2 = (0, d.G)(_2, (e3) => -e3), v2 = (0, d.G)(_2, (e3) => e3 / 2);
    return (0, n.jsx)(l.PY1.button, { ref: u2, type: "button", className: `${f().chip} ${f().more}`, "data-more": "", "aria-expanded": t2, tabIndex: a2 ? 0 : -1, onClick: s2, onFocus: () => o2(g), layout: "position", transition: { layout: r2 ? { duration: 0 } : m.T.spring.morph }, children: (0, n.jsxs)("span", { ref: p2, className: f().body, children: [(0, n.jsx)(l.PY1.span, { className: f().surface, style: { right: y2 }, "aria-hidden": "true" }), (0, n.jsx)("span", { className: f().moreText, children: (0, n.jsx)(c.N, { mode: "popLayout", initial: false, children: (0, n.jsx)(M, { follow: v2, className: f().moreLine, initial: r2 ? { opacity: 0 } : w, animate: j, exit: r2 ? { opacity: 0, transition: b } : N, transition: r2 ? b : { duration: m.T.duration.standard, ease: x }, children: h2 }, h2) }) })] }) });
  }
  function S({ options: e2, value: t2, onValueChange: a2, label: r2, multiple: s2 = true, maxVisible: l2 = 1 / 0, className: o2 }) {
    let d2 = (0, i.useId)(), h2 = !!(0, u.I)(), [_2, x2] = (0, i.useState)(false), [y2, b2] = (0, i.useState)(t2), [v2, j2] = (0, i.useState)(null), w2 = e2.length > l2, N2 = !w2 || _2 ? e2 : e2.filter((e3, a3) => a3 < l2 || y2.includes(e3.value) || t2.includes(e3.value)), T2 = e2.length - N2.length, M2 = w2 && (_2 || T2 > 0), C2 = [...N2.map((e3) => e3.value), ...M2 ? [g] : []], P = null !== v2 && C2.includes(v2) ? v2 : N2.find((e3) => t2.includes(e3.value))?.value ?? C2[0];
    function L(n2) {
      let i2 = t2.includes(n2);
      if (!s2) return a2(i2 ? [] : [n2]);
      a2(e2.filter((e3) => e3.value === n2 ? !i2 : t2.includes(e3.value)).map((e3) => e3.value));
    }
    return (0, n.jsx)(p.o, { id: d2, children: (0, n.jsx)(k, { morphKey: `${_2}|${t2.join(",")}`, reduce: h2, children: (0, n.jsx)("div", { className: [f().group, o2].filter(Boolean).join(" "), role: "group", "aria-label": r2, onKeyDown: function(e3) {
      let t3 = Array.from(e3.currentTarget.querySelectorAll(":is(button[data-chip], button[data-more]):not([aria-hidden='true'])")), a3 = t3.indexOf(document.activeElement);
      if (a3 < 0) return;
      let n2 = t3.length - 1, i2 = { ArrowRight: a3 === n2 ? 0 : a3 + 1, ArrowDown: a3 === n2 ? 0 : a3 + 1, ArrowLeft: 0 === a3 ? n2 : a3 - 1, ArrowUp: 0 === a3 ? n2 : a3 - 1, Home: 0, End: n2 };
      e3.key in i2 && (e3.preventDefault(), t3[i2[e3.key]].focus());
    }, children: (0, n.jsxs)(c.N, { mode: "popLayout", initial: false, children: [N2.map((e3, a3) => (0, n.jsx)($, { option: e3, selected: t2.includes(e3.value), tabbable: P === e3.value, reduce: h2, delay: _2 ? Math.min(Math.max(0, a3 - l2) * m.T.stagger.item, 0.3) : 0, onToggle: L, onFocusChip: j2 }, e3.value)), M2 ? (0, n.jsx)(A, { hidden: T2, expanded: _2, tabbable: P === g, reduce: h2, onToggle: function() {
      _2 && b2(t2), x2(!_2);
    }, onFocusChip: j2 }, g) : null] }) }) }) });
  }
  let C = S;
}

__m(__module,__exports,__require);
}