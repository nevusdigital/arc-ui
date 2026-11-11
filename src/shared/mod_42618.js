function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { C: () => k });
  var r = a(95155), i = a(12115), s = a(28245), n = a(92171), l = a(25354), o = a(80642), c = a(18310), d = a(7770), p = a(41658), u = a.n(p);
  let m = (e2) => `blur(${e2}px)`, _ = { duration: 0 }, h = { duration: d.T.duration.fast, ease: [...d.T.ease.standard] }, f = { duration: d.T.duration.standard, ease: [...d.T.ease.enter] }, x = { opacity: 0, y: "0.3em", filter: m(d.T.blur.soft) }, v = { opacity: 1, y: 0, filter: m(0) }, g = { opacity: 0, y: "-0.3em", filter: m(d.T.blur.subtle) }, y = { opacity: 0, scale: 0.5, filter: m(d.T.blur.subtle) }, b = { opacity: 1, scale: 1, filter: m(0) };
  function j({ text: e2, className: t2, reduced: a2 }) {
    let c2 = (0, i.useRef)(null), p2 = (0, i.useRef)(0), m2 = (0, s.d)("auto");
    return (0, i.useLayoutEffect)(() => {
      p2.current = performance.now() + 700;
    }, [e2]), (0, i.useEffect)(() => {
      let e3 = c2.current, t3 = e3?.parentElement;
      if (!e3 || !t3 || "u" < typeof ResizeObserver) return;
      let r2 = false, i2 = new ResizeObserver(() => {
        let t4 = e3.offsetHeight;
        if (!r2 || a2 || performance.now() > p2.current) {
          r2 = true, m2.jump(t4);
          return;
        }
        (0, n.i)(m2, t4, d.T.spring.smooth);
      });
      return i2.observe(e3), () => i2.disconnect();
    }, [m2, a2]), (0, r.jsx)(l.PY1.span, { className: u().slot, style: { height: m2 }, children: (0, r.jsx)("span", { ref: c2, className: u().slotInner, children: (0, r.jsx)(o.N, { mode: "popLayout", initial: false, children: e2 ? (0, r.jsx)(l.PY1.span, { className: t2, initial: x, animate: v, exit: { ...g, transition: a2 ? _ : h }, transition: a2 ? _ : f, children: e2 }, `${t2}:${e2}`) : null }) }) });
  }
  function N({ kind: e2, number: t2, delay: a2, reduced: i2 }) {
    let s2 = i2 ? _ : { scale: { ...d.T.spring.snappy, delay: a2 }, opacity: { duration: d.T.duration.fast, delay: a2 }, filter: { duration: d.T.duration.fast, delay: a2 } }, n2 = { ...y, transition: i2 ? _ : h }, o2 = i2 ? _ : { duration: d.T.duration.standard, ease: d.T.ease.enter, delay: a2 + 0.04 };
    return "number" === e2 ? (0, r.jsx)(l.PY1.span, { className: u().glyph, initial: y, animate: b, exit: n2, transition: s2, children: t2 }) : (0, r.jsx)(l.PY1.svg, { className: `${u().glyph} ${u().icon}`, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round", initial: y, animate: b, exit: n2, transition: s2, children: "check" === e2 ? (0, r.jsx)(l.PY1.path, { d: "M5.5 12.5l4.25 4.25L18.5 8", initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: o2 }) : (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(l.PY1.path, { d: "M12 6.75v6.5", initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: o2 }), (0, r.jsx)(l.PY1.circle, { cx: 12, cy: 17.4, r: 1.4, fill: "currentColor", stroke: "none", initial: { scale: 0 }, animate: { scale: 1 }, transition: i2 ? _ : { ...d.T.spring.snappy, delay: a2 + 0.16 } })] }) });
  }
  function w({ number: e2, kind: t2, current: a2, glyphDelay: i2, ringDelay: s2, reduced: n2 }) {
    return (0, r.jsxs)("span", { className: u().marker, "aria-hidden": "true", children: [(0, r.jsx)(o.N, { initial: false, children: a2 ? (0, r.jsx)(l.PY1.span, { className: u().ring, initial: { opacity: 0, scale: 0.6 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.6, transition: n2 ? _ : h }, transition: n2 ? _ : { scale: { ...d.T.spring.snappy, delay: s2 }, opacity: { duration: d.T.duration.fast, delay: s2 } } }, "ring") : null }), (0, r.jsx)("span", { className: u().disc, children: (0, r.jsx)(o.N, { initial: false, children: (0, r.jsx)(N, { kind: t2, number: e2, delay: i2, reduced: n2 }, t2) }) })] });
  }
  let T = { complete: "Completed", current: "", upcoming: "Not started", error: "Error" };
  function k({ steps: e2, current: t2, orientation: a2 = "horizontal", onStepSelect: s2, details: n2 = "all", compact: o2 = false, label: p2 = "Progress", completeLabel: m2 = "All steps complete", className: h2 }) {
    let f2 = (0, c.I)() ?? false, x2 = e2.length, v2 = Math.min(Math.max(Math.round(t2), 0), x2), [g2, y2] = (0, i.useState)({ to: v2, from: v2 });
    g2.to !== v2 && y2({ to: v2, from: g2.to });
    let b2 = g2.from, N2 = d.T.stagger.line, L = (e3) => f2 ? 0 : v2 > b2 ? e3 >= b2 && e3 < v2 ? (e3 - b2) * N2 : 0 : e3 >= v2 && e3 < b2 ? (b2 - 1 - e3) * N2 : 0, S = f2 ? 0 : Math.max(0, Math.abs(v2 - b2) - 1) * N2 + 0.12, C = !!s2, $ = "vertical" === a2, P = v2 >= x2 ? void 0 : e2[v2], z = [u().root, $ ? u().vertical : u().horizontal, o2 ? u().compact : "", h2].filter(Boolean).join(" ");
    return (0, r.jsxs)(C ? "nav" : "div", { className: z, "aria-label": p2, role: C ? void 0 : "group", children: [(0, r.jsx)("ol", { className: u().list, style: $ ? void 0 : { gridTemplateColumns: x2 > 1 ? `repeat(${x2 - 1}, minmax(0, 1fr)) auto` : "auto" }, onKeyDown: C ? function(e3) {
      let t3 = !$ && "rtl" === getComputedStyle(e3.currentTarget).direction, a3 = ["ArrowUp", t3 ? "ArrowRight" : "ArrowLeft"];
      if (![...a3, "ArrowDown", t3 ? "ArrowLeft" : "ArrowRight", "Home", "End"].includes(e3.key)) return;
      let r2 = Array.from(e3.currentTarget.querySelectorAll("button[data-reachable]")), i2 = r2.indexOf(e3.target);
      if (i2 < 0) return;
      e3.preventDefault();
      let s3 = "Home" === e3.key ? 0 : "End" === e3.key ? r2.length - 1 : a3.includes(e3.key) ? Math.max(0, i2 - 1) : Math.min(r2.length - 1, i2 + 1);
      r2[s3]?.focus();
    } : void 0, children: e2.map((e3, t3) => {
      let i2 = t3 === v2, o3 = e3.error ? "error" : t3 < v2 ? "complete" : i2 ? "current" : "upcoming", c2 = C && t3 < v2, p3 = e3.error ?? ("all" === n2 || i2 ? e3.description : void 0), m3 = e3.error ? "error" : t3 < v2 ? "check" : "number", h3 = (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(w, { number: t3 + 1, kind: m3, current: i2, glyphDelay: L(t3), ringDelay: S, reduced: f2 }), (0, r.jsxs)("span", { className: u().text, children: [(0, r.jsx)("span", { className: u().label, children: e3.label }), T[o3] ? (0, r.jsxs)("span", { className: u().srOnly, children: [", ", T[o3]] }) : null, (0, r.jsx)(j, { text: p3, className: e3.error ? u().error : u().description, reduced: f2 })] })] });
      return (0, r.jsxs)("li", { className: u().item, "data-status": o3, children: [t3 < x2 - 1 ? (0, r.jsx)("span", { className: u().connector, "aria-hidden": "true", children: (0, r.jsx)(l.PY1.span, { className: u().fill, initial: false, animate: $ ? { scaleY: +(t3 < v2) } : { scaleX: +(t3 < v2) }, transition: f2 ? _ : { ...d.T.spring.smooth, delay: L(t3) } }, a2) }) : null, C ? (0, r.jsx)("button", { type: "button", className: u().head, "data-clickable": c2 || void 0, "data-reachable": t3 <= v2 || void 0, "aria-current": i2 ? "step" : void 0, "aria-disabled": !c2 || void 0, tabIndex: c2 ? void 0 : -1, onClick: c2 ? () => s2?.(t3) : void 0, children: h3 }) : (0, r.jsx)("span", { className: u().head, "aria-current": i2 ? "step" : void 0, children: h3 })] }, e3.id);
    }) }), $ ? null : (0, r.jsxs)("span", { className: u().caption, "aria-hidden": "true", children: [(0, r.jsx)(j, { text: P?.label ?? m2, className: u().captionLabel, reduced: f2 }), (0, r.jsx)(j, { text: P?.error ?? P?.description, className: P?.error ? u().error : u().description, reduced: f2 })] }), (0, r.jsx)("span", { className: u().srOnly, "aria-live": "polite", children: P ? `Step ${v2 + 1} of ${x2}: ${P.label}` : m2 })] });
  }
}

__m(__module,__exports,__require);
}