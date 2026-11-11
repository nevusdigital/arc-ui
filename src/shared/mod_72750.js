function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { CtaSection: () => S, CtaSectionBlock: () => W, default: () => z });
  var i = t(95155), s = t(12115), n = t(61792), r = t(18310), o = t(80642), l = t(25354), d = t(28245), c = t(92171), p = t(90467), h = t(64577), m = t(9005), u = t(51288), g = t(66558), b = t(7770), f = t(67752);
  let _ = { centered: { title: "Start building in minutes", description: "Set up a workspace, invite your team, and ship the first project this week. Free for 14 days.", primary: { label: "Start free trial", confirmedLabel: "Trial started" }, secondary: { label: "Talk to sales", confirmedLabel: "We'll email you" }, note: "No credit card required" }, split: { title: "Your team, set up before lunch", description: "Import your projects, bring everyone in, and keep working the way you already do.", primary: { label: "Create a workspace", confirmedLabel: "Workspace created" }, secondary: { label: "Book a demo", confirmedLabel: "Demo requested" }, points: ["Import from any tracker in one step", "Single sign-on and audit logs included", "Cancel anytime from settings"] }, banner: { title: "Workflows are here", description: "Automate handoffs between teams with no code.", primary: { label: "See how it works", confirmedLabel: "Opened" } } }, w = ["sofia-ramirez", "nathan-cole", "chloe-nguyen", "tyler-hayes"].map((e2) => (0, f.my)(e2)), v = { workspace: "Northwind", steps: ["Create workspace", "Import 214 issues", "Invite 4 teammates"], faces: ["emma-collins", "marcus-johnson", "jasmine-brooks", "daniel-kim"].map((e2) => (0, f.my)(e2)) };
  var j = t(28704), y = t.n(j);
  let x = [...b.T.ease.enter], k = [...b.T.ease.standard];
  function N({ action: e2, variant: a2, size: t2 = "lg", arrow: n2 }) {
    let [r2, o2] = (0, s.useState)(false);
    if (e2.href) return (0, i.jsxs)("a", { className: y().linkAction, "data-variant": a2, "data-size": t2, href: e2.href, children: [e2.label, n2 && (0, i.jsx)(p.A, { className: y().arrow, size: 16, strokeWidth: 2, "aria-hidden": "true" })] });
    let l2 = !e2.onClick;
    return (0, i.jsx)(u.$, { className: y().action, variant: a2, size: t2, "aria-live": l2 ? "polite" : void 0, onClick: () => {
      e2.onClick ? e2.onClick() : o2((e3) => !e3);
    }, children: r2 ? (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(h.A, { size: 16, strokeWidth: 2.25, "aria-hidden": "true" }), e2.confirmedLabel ?? e2.label] }) : (0, i.jsxs)(i.Fragment, { children: [e2.label, n2 && (0, i.jsx)(p.A, { className: y().arrow, size: 16, strokeWidth: 2, "aria-hidden": "true" })] }) });
  }
  function A({ reduced: e2 }) {
    let a2 = (0, s.useRef)(null), t2 = (0, n.W)(a2, { once: true, amount: 0.5 }), r2 = v.steps.length, [o2, l2] = (0, s.useState)(0), d2 = e2 ? r2 : o2;
    return (0, s.useEffect)(() => {
      if (!t2 || e2) return;
      let a3 = v.steps.map((e3, a4) => window.setTimeout(() => l2(a4 + 1), 520 + 620 * a4));
      return () => a3.forEach(window.clearTimeout);
    }, [t2, e2]), (0, i.jsxs)("div", { ref: a2, className: y().setup, "aria-hidden": "true", "data-done": d2 === r2 ? "" : void 0, children: [(0, i.jsxs)("div", { className: y().setupHead, children: [(0, i.jsx)("span", { className: y().workspaceMark, children: v.workspace.charAt(0) }), (0, i.jsx)("span", { className: y().setupTitle, children: v.workspace }), (0, i.jsxs)("span", { className: y().setupStatus, children: [(0, i.jsx)("span", { "data-shown": d2 < r2 ? "" : void 0, children: "Setting up" }), (0, i.jsx)("span", { "data-shown": d2 === r2 ? "" : void 0, children: "Ready" })] })] }), (0, i.jsx)("div", { className: y().progress, children: (0, i.jsx)("span", { style: { transform: `scaleX(${d2 / r2})` } }) }), (0, i.jsx)("ol", { className: y().steps, children: v.steps.map((e3, a3) => (0, i.jsxs)("li", { className: y().step, "data-done": a3 < d2 ? "" : void 0, "data-active": a3 === d2 ? "" : void 0, children: [(0, i.jsx)("span", { className: y().stepMark, children: (0, i.jsx)(h.A, { size: 12, strokeWidth: 2.75 }) }), (0, i.jsx)("span", { className: y().stepLabel, children: e3 }), a3 === r2 - 1 && (0, i.jsx)("span", { className: y().stepFaces, children: v.faces.map((e4, a4) => (0, i.jsx)("img", { src: e4, alt: "", width: 22, height: 22, style: { transitionDelay: `${60 * a4}ms` } }, e4)) })] }, e3)) })] });
  }
  function T({ faces: e2 }) {
    return e2.length ? (0, i.jsx)("span", { className: y().faces, "aria-hidden": "true", children: e2.slice(0, 4).map((e3) => (0, i.jsx)("img", { src: e3, alt: "", width: 26, height: 26 }, e3)) }) : null;
  }
  let S = (0, s.forwardRef)(function({ variant: e2 = "centered", title: a2, description: t2, primaryAction: n2, secondaryAction: d2, note: c2, faces: p2 = w, points: u2, visual: g2, onDismiss: f2, className: v2 }, j2) {
    let S2 = (0, s.useId)(), C2 = !!(0, r.I)(), [W2, z2] = (0, s.useState)(true), L = _[e2], R = a2 ?? L.title, E = t2 ?? L.description, P = n2 ?? L.primary, M = null === d2 ? null : d2 ?? ("secondary" in L ? L.secondary : void 0), I = [y().cta, v2].filter(Boolean).join(" ");
    if ("banner" === e2) return (0, i.jsx)("section", { ref: j2, className: I, "data-variant": "banner", "aria-labelledby": `${S2}-title`, children: (0, i.jsx)(o.N, { initial: false, onExitComplete: f2, children: W2 && (0, i.jsx)(l.PY1.div, { className: y().bannerWrap, exit: C2 ? { opacity: 0, transition: { duration: b.T.duration.instant } } : { opacity: 0, height: 0, transition: { height: b.T.spring.smooth, opacity: { duration: b.T.duration.fast, ease: k } } }, children: (0, i.jsx)("div", { className: y().bannerPad, children: (0, i.jsxs)("div", { className: y().banner, children: [(0, i.jsxs)("p", { className: y().bannerText, children: [(0, i.jsx)("strong", { id: `${S2}-title`, children: R }), (0, i.jsx)("span", { children: E })] }), (0, i.jsxs)("div", { className: y().bannerActions, children: [(0, i.jsx)(N, { action: P, variant: "primary", size: "sm", arrow: true }), void 0 !== f2 && (0, i.jsx)("button", { type: "button", className: y().dismiss, "aria-label": "Dismiss", onClick: () => z2(false), children: (0, i.jsx)(m.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }) })] })] }) }) }, "banner") }) });
    if ("split" === e2) {
      let e3 = u2 ?? _.split.points;
      return (0, i.jsx)("section", { ref: j2, className: I, "data-variant": "split", "aria-labelledby": `${S2}-title`, children: (0, i.jsxs)("div", { className: y().split, children: [(0, i.jsxs)("div", { className: y().splitCopy, children: [(0, i.jsx)("h2", { id: `${S2}-title`, className: y().title, children: R }), (0, i.jsx)("p", { className: y().description, children: E }), e3.length > 0 && (0, i.jsx)("ul", { className: y().points, children: e3.map((e4) => (0, i.jsxs)("li", { children: [(0, i.jsx)(h.A, { size: 16, strokeWidth: 2, "aria-hidden": "true" }), e4] }, e4)) }), (0, i.jsxs)("div", { className: y().actions, children: [(0, i.jsx)(N, { action: P, variant: "primary", arrow: true }), M && (0, i.jsx)(N, { action: M, variant: "secondary" })] })] }), (0, i.jsx)(l.PY1.div, { className: y().stage, initial: !C2 && { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.35 }, transition: { duration: b.T.duration.considered, ease: x }, children: g2 ?? (0, i.jsx)(A, { reduced: C2 }) })] }) });
    }
    let B = c2 ?? _.centered.note;
    return (0, i.jsx)("section", { ref: j2, className: I, "data-variant": "centered", "aria-labelledby": `${S2}-title`, children: (0, i.jsx)("div", { className: y().centeredWrap, children: (0, i.jsxs)("div", { className: y().centered, children: [(0, i.jsx)("h2", { id: `${S2}-title`, className: y().title, children: R }), (0, i.jsx)("p", { className: y().description, children: E }), (0, i.jsxs)("div", { className: y().actions, children: [(0, i.jsx)(N, { action: P, variant: "primary", arrow: true }), M && (0, i.jsx)(N, { action: M, variant: "secondary" })] }), (B || p2.length > 0) && (0, i.jsxs)("p", { className: y().note, children: [(0, i.jsx)(T, { faces: p2 }), B] })] }) }) });
  });
  S.displayName = "CtaSection";
  let C = [{ value: "centered", label: "Centered" }, { value: "split", label: "Split" }, { value: "banner", label: "Banner" }];
  function W() {
    let e2, a2, t2, n2, o2 = !!(0, r.I)(), [p2, h2] = (0, s.useState)("centered"), [m2, f2] = (0, s.useState)(false), _2 = "banner" === p2 && m2, w2 = _2 ? "restore" : p2, { content: v2, height: j2 } = (e2 = (0, s.useRef)(null), a2 = (0, d.d)("auto"), t2 = (0, s.useRef)(w2), n2 = (0, s.useRef)(0), (0, s.useLayoutEffect)(() => {
      t2.current !== w2 && (t2.current = w2, n2.current = performance.now() + 700);
    }, [w2]), (0, s.useEffect)(() => {
      let t3 = e2.current;
      if (!t3 || "u" < typeof ResizeObserver) return;
      let i2 = false, s2 = new ResizeObserver(() => {
        let e3 = t3.offsetHeight;
        if (!i2 || o2 || performance.now() > n2.current) {
          i2 = e3 > 0, a2.jump(e3 || "auto");
          return;
        }
        (0, c.i)(a2, e3, b.T.spring.smooth);
      });
      return s2.observe(t3), () => s2.disconnect();
    }, [a2, o2]), { content: e2, height: a2 }), [x2, N2] = (0, s.useState)(false);
    return (0, i.jsxs)("div", { className: y().preview, children: [(0, i.jsx)(g.A, { label: "Call to action layout", options: C, value: p2, onValueChange: (e3) => {
      N2(true), h2(e3), f2(false);
    } }), (0, i.jsx)(l.PY1.div, { className: y().frame, style: { height: j2 }, children: (0, i.jsx)("div", { ref: v2, children: (0, i.jsx)(l.PY1.div, { initial: !o2 && !!x2 && { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: b.T.duration.standard, ease: k }, children: _2 ? (0, i.jsx)("div", { className: y().restore, children: (0, i.jsx)(u.$, { variant: "secondary", size: "sm", onClick: () => f2(false), children: "Show the banner again" }) }) : (0, i.jsx)(S, { variant: p2, onDismiss: "banner" === p2 ? () => {
      N2(true), f2(true);
    } : void 0 }) }, w2) }) })] });
  }
  let z = W;
}

__m(__module,__exports,__require);
}