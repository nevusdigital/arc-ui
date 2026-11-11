function(__module,__exports,__require){
"use strict";
function __m(e, t, l) {
  "use strict";
  l.r(t), l.d(t, { ToggleGroupDemo: () => N, default: () => z });
  var a = l(95155), n = l(12115), r = l(95112), i = l(67357), s = l(51811);
  let o = { name: "underline", size: 24, node: [["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }], ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]] };
  o.node;
  let d = (0, s.A)(o);
  var u = l(31935);
  let c = { name: "text-align-center", size: 24, node: [["path", { d: "M21 5H3", key: "1fi0y6" }], ["path", { d: "M17 12H7", key: "16if0g" }], ["path", { d: "M19 19H5", key: "vjpgq2" }]], aliases: ["align-center"] };
  c.node;
  let g = (0, s.A)(c), p = { name: "text-align-end", size: 24, node: [["path", { d: "M21 5H3", key: "1fi0y6" }], ["path", { d: "M21 12H9", key: "dn1m92" }], ["path", { d: "M21 19H7", key: "4cu937" }]], aliases: ["align-right"] };
  p.node;
  let f = (0, s.A)(p), h = { name: "text-align-justify", size: 24, node: [["path", { d: "M3 5h18", key: "1u36vt" }], ["path", { d: "M3 12h18", key: "1i2n21" }], ["path", { d: "M3 19h18", key: "awlh7x" }]], aliases: ["align-justify"] };
  h.node;
  let y = (0, s.A)(h);
  var x = l(18310), m = l(25354), v = l(7770), j = l(57700), b = l(35096), _ = l.n(b);
  let k = (0, n.createContext)(null), w = (e2) => Array.from(e2?.querySelectorAll("[data-toggle-item]:not(:disabled)") ?? []);
  function A(e2) {
    let { children: t2, label: l2, size: r2 = "md", disabled: i2 = false, className: s2 } = e2, o2 = e2.type ?? "single", d2 = (0, n.useId)(), u2 = (0, x.I)() ?? false, c2 = (0, n.useRef)(null), [g2, p2] = (0, n.useState)(() => "multiple" === e2.type ? e2.defaultValue ?? [] : e2.defaultValue ? [e2.defaultValue] : []), f2 = void 0 !== e2.value, h2 = "multiple" === e2.type ? e2.value ?? g2 : f2 ? e2.value ? [e2.value] : [] : g2, [y2, m2] = (0, n.useState)(null), [v2, b2] = (0, n.useState)([]);
    (0, n.useLayoutEffect)(() => {
      let e3 = w(c2.current).map((e4) => e4.dataset.value ?? "");
      b2((t3) => t3.join("\0") === e3.join("\0") ? t3 : e3);
    }, [t2]);
    let A2 = (y2 && v2.includes(y2) ? y2 : h2.find((e3) => v2.includes(e3))) ?? v2[0] ?? null, M2 = [_().group, _()[r2], s2].filter(Boolean).join(" ");
    return (0, a.jsx)(k.Provider, { value: { type: o2, id: d2, pressed: h2, toggle: (t3) => {
      if ("multiple" === e2.type) {
        let l3 = h2.includes(t3) ? h2.filter((e3) => e3 !== t3) : [...h2, t3];
        f2 || p2(l3), e2.onValueChange?.(l3);
        return;
      }
      h2[0] !== t3 && (f2 || p2([t3]), e2.onValueChange?.(t3));
    }, tabStop: A2, setFocused: m2, disabled: i2, reduced: u2 }, children: (0, a.jsx)("div", { ref: c2, className: M2, role: "single" === o2 ? "radiogroup" : "group", "aria-label": l2, "aria-disabled": i2 || void 0, "data-type": o2, onKeyDown: (e3) => {
      let t3 = w(c2.current), l3 = t3.findIndex((e4) => e4 === document.activeElement);
      if (l3 < 0) return;
      let a2 = t3.length - 1, n2 = "ArrowRight" === e3.key || "ArrowDown" === e3.key ? l3 === a2 ? 0 : l3 + 1 : "ArrowLeft" === e3.key || "ArrowUp" === e3.key ? 0 === l3 ? a2 : l3 - 1 : "Home" === e3.key ? 0 : "End" === e3.key ? a2 : -1;
      n2 < 0 || (e3.preventDefault(), t3[n2].focus());
    }, children: (0, a.jsx)(j.o, { id: d2, children: t2 }) }) });
  }
  function M({ value: e2, label: t2, children: l2, disabled: r2, className: i2, title: s2, onClick: o2, onFocus: d2, ...u2 }) {
    let c2 = (0, n.useContext)(k);
    if (!c2) throw Error("ToggleGroupItem must be used inside a ToggleGroup.");
    let { type: g2, pressed: p2, toggle: f2, tabStop: h2, setFocused: y2, disabled: x2, reduced: j2 } = c2, b2 = p2.includes(e2), w2 = "single" === g2;
    return (0, a.jsxs)("button", { ...u2, type: "button", className: [_().item, i2].filter(Boolean).join(" "), "data-toggle-item": "", "data-value": e2, "data-state": b2 ? "on" : "off", role: w2 ? "radio" : void 0, "aria-checked": w2 ? b2 : void 0, "aria-pressed": w2 ? void 0 : b2, "aria-label": t2, title: s2 ?? t2, disabled: x2 || r2, tabIndex: h2 === e2 ? 0 : -1, onFocus: (t3) => {
      y2(e2), d2?.(t3);
    }, onClick: (t3) => {
      o2?.(t3), t3.defaultPrevented || f2(e2);
    }, children: [w2 ? b2 && (0, a.jsx)(m.PY1.span, { className: _().fill, layoutId: "fill", initial: false, style: { borderRadius: 15 }, transition: j2 ? { duration: 0 } : v.T.spring.morph, "aria-hidden": "true" }) : (0, a.jsx)("span", { className: _().fill, "aria-hidden": "true" }), (0, a.jsx)("span", { className: _().content, children: l2 })] });
  }
  A.Item = M;
  var C = l(62582), E = l.n(C);
  let H = "Our spring release is about the details people touch every day: faster search, calmer notifications, and a sidebar that remembers where you left off. Every change was tested with the teams who asked for it.".split(" ");
  function N() {
    let e2 = (0, x.I)(), [t2, l2] = (0, n.useState)(["bold"]), [s2, o2] = (0, n.useState)("left"), c2 = (0, n.useRef)(null);
    (0, n.useLayoutEffect)(() => {
      let e3 = c2.current;
      if (!e3) return;
      let t3 = () => {
        let t4 = Array.from(e3.querySelectorAll("[data-word]"));
        t4.forEach((e4, l4) => {
          let a2 = t4[l4 + 1], n2 = a2 && a2.offsetTop === e4.offsetTop ? a2.offsetLeft - (e4.offsetLeft + e4.offsetWidth) + 1 : 0;
          e4.style.setProperty("--gap", `${Math.max(0, n2)}px`);
        });
      };
      t3();
      let l3 = new ResizeObserver(t3);
      return l3.observe(e3), () => l3.disconnect();
    }, [t2, s2]);
    let p2 = e2 ? { duration: 0 } : v.T.spring.smooth;
    return (0, a.jsxs)("div", { className: E().demo, children: [(0, a.jsxs)("div", { className: E().toolbar, children: [(0, a.jsxs)(A, { type: "multiple", label: "Text style", value: t2, onValueChange: l2, children: [(0, a.jsx)(M, { value: "bold", label: "Bold", children: (0, a.jsx)(r.A, {}) }), (0, a.jsx)(M, { value: "italic", label: "Italic", children: (0, a.jsx)(i.A, {}) }), (0, a.jsx)(M, { value: "underline", label: "Underline", children: (0, a.jsx)(d, {}) })] }), (0, a.jsxs)(A, { type: "single", label: "Alignment", value: s2, onValueChange: (e3) => o2(e3), children: [(0, a.jsx)(M, { value: "left", label: "Align left", children: (0, a.jsx)(u.A, {}) }), (0, a.jsx)(M, { value: "center", label: "Align center", children: (0, a.jsx)(g, {}) }), (0, a.jsx)(M, { value: "right", label: "Align right", children: (0, a.jsx)(f, {}) }), (0, a.jsx)(M, { value: "justify", label: "Justify", children: (0, a.jsx)(y, {}) })] })] }), (0, a.jsx)("div", { className: E().page, children: (0, a.jsx)("p", { ref: c2, className: E().text, style: { textAlign: s2 }, "data-bold": t2.includes("bold") || void 0, "data-italic": t2.includes("italic") || void 0, "data-underline": t2.includes("underline") || void 0, children: H.map((e3, t3) => (0, a.jsxs)(n.Fragment, { children: [(0, a.jsx)(m.PY1.span, { "data-word": "", className: E().word, style: { "--i": t3 }, layout: "position", transition: p2, children: e3 }), t3 < H.length - 1 ? " " : null] }, t3)) }) })] });
  }
  let z = N;
}

__m(__module,__exports,__require);
}