function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { PlanComparison: () => j, default: () => v });
  var n = a(95155), r = a(12115), l = a(18310), i = a(92171), s = a(25354), o = a(80642), c = a(64577), d = a(51288), u = a(66558), p = a(50680), m = a(7770), h = a(3992), _ = a.n(h);
  let f = [{ label: "Active projects", team: "Unlimited", studio: "Unlimited", shared: true }, { label: "Shared workspaces", team: "1 workspace", studio: "Unlimited" }, { label: "Guest reviewers", team: "5 per project", studio: "Unlimited" }, { label: "Version history", team: "30 days", studio: "Unlimited" }, { label: "Approval flows", team: "Not included", studio: "Included" }, { label: "Custom roles", team: "Not included", studio: "Included" }, { label: "Source exports", team: "Included", studio: "Included", shared: true }, { label: "Support", team: "Email", studio: "Priority email" }], b = { team: { monthly: 13, yearly: 10 }, studio: { monthly: 27, yearly: 22 } };
  function y({ text: e2 }) {
    return "Included" === e2 ? (0, n.jsxs)("span", { className: _().included, children: [(0, n.jsx)(c.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Included"] }) : (0, n.jsx)("span", { className: "Not included" === e2 ? _().unavailable : void 0, children: e2 });
  }
  function x({ value: e2 }) {
    let t2 = (0, l.I)(), [a2, s2] = (0, r.useState)(e2), o2 = (0, r.useRef)(e2);
    return (0, r.useEffect)(() => {
      if (t2) {
        o2.current = e2;
        return;
      }
      let a3 = (0, i.i)(o2.current, e2, { duration: m.T.duration.standard, ease: [...m.T.ease.enter], onUpdate: (e3) => s2(Math.round(e3)) });
      return o2.current = e2, () => a3.stop();
    }, [t2, e2]), (0, n.jsx)(n.Fragment, { children: t2 ? e2 : a2 });
  }
  function j() {
    let e2 = (0, r.useId)(), t2 = (0, l.I)(), [a2, i2] = (0, r.useState)("monthly"), [c2, h2] = (0, r.useState)(false), [j2, v2] = (0, r.useState)(null), g = (0, r.useRef)(null), [w, N] = (0, r.useState)("lg");
    (0, r.useLayoutEffect)(() => {
      let e3 = g.current;
      if (!e3) return;
      let t3 = (e4) => N(e4 <= 340 ? "xs" : e4 <= 540 ? "sm" : e4 <= 720 ? "md" : "lg");
      t3(e3.getBoundingClientRect().width);
      let a3 = new ResizeObserver(([e4]) => {
        e4 && t3(e4.contentRect.width);
      });
      return a3.observe(e3), () => a3.disconnect();
    }, []);
    let S = c2 ? f.filter((e3) => !e3.shared) : f;
    return (0, n.jsxs)("section", { ref: g, className: _().comparison, "data-size": w, "aria-labelledby": `${e2}-title`, children: [(0, n.jsxs)("div", { className: _().intro, children: [(0, n.jsxs)("div", { children: [(0, n.jsx)("h2", { id: `${e2}-title`, children: "Room for the way you work" }), (0, n.jsx)("p", { children: "Only the details that change between plans. Switch billing to see what you would pay." })] }), (0, n.jsxs)("div", { className: _().billing, children: [(0, n.jsx)(u.A, { label: "Billing period", value: a2, onValueChange: (e3) => i2(e3), options: [{ value: "monthly", label: "Monthly" }, { value: "yearly", label: "Yearly" }] }), (0, n.jsx)("small", { children: "yearly" === a2 ? "Billed yearly, save up to 23%" : "Billed month to month" })] })] }), (0, n.jsxs)("div", { className: _().filter, children: [(0, n.jsxs)("div", { children: [(0, n.jsx)("h3", { children: "Compare plans" }), (0, n.jsxs)("span", { className: _().featureCount, children: [(0, n.jsx)(x, { value: S.length }), " of ", f.length, " features"] })] }), (0, n.jsx)(p.d, { checked: c2, onCheckedChange: h2, label: "Show differences only" })] }), (0, n.jsxs)("div", { className: _().matrix, role: "table", "aria-label": "Team and Studio plan comparison", children: [(0, n.jsxs)("div", { className: _().planHeader, role: "row", children: [(0, n.jsx)("div", { className: _().featureHeader, role: "columnheader", children: "What changes" }), ["team", "studio"].map((r2) => (0, n.jsxs)("div", { className: `${_().planCell} ${j2 === r2 ? _().planSelected : ""}`, role: "columnheader", "aria-label": `${"team" === r2 ? "Team" : "Studio"} plan`, children: [(0, n.jsxs)("div", { className: _().planTop, children: [(0, n.jsx)("h3", { children: "team" === r2 ? "Team" : "Studio" }), (0, n.jsx)("span", { children: "team" === r2 ? "For smaller teams" : "For work across teams" })] }), (0, n.jsxs)("div", { className: _().price, children: [(0, n.jsxs)("span", { className: _().priceValue, "aria-live": "polite", "aria-atomic": "true", children: ["$", (0, n.jsx)(x, { value: b[r2][a2] })] }), (0, n.jsx)("span", { className: _().pricePeriod, children: "per seat / month" })] }), (0, n.jsx)(d.$, { type: "button", variant: j2 === r2 ? "primary" : "secondary", className: _().selectButton, "aria-pressed": j2 === r2, onClick: () => v2((e3) => e3 === r2 ? null : r2), children: j2 === r2 ? "Selected" : `Select ${"team" === r2 ? "Team" : "Studio"}` }), j2 === r2 && (0, n.jsx)(s.PY1.span, { className: _().selectedRail, layoutId: `${e2}-selected-rail`, transition: t2 ? { duration: 0 } : m.T.spring.responsive, "aria-hidden": "true" })] }, r2))] }), (0, n.jsx)("div", { className: _().rows, role: "rowgroup", children: (0, n.jsx)(o.N, { initial: false, children: S.map((e3) => (0, n.jsxs)(s.PY1.div, { className: _().featureRow, role: "row", initial: !t2 && { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: t2 ? void 0 : { height: 0, opacity: 0, transition: { height: m.T.spring.smooth, opacity: { duration: m.T.duration.fast } } }, transition: t2 ? { duration: 0 } : { height: m.T.spring.smooth, opacity: { duration: m.T.duration.standard, ease: [...m.T.ease.enter], delay: 0.04 } }, children: [(0, n.jsx)("div", { className: _().featureName, role: "rowheader", children: e3.label }), (0, n.jsxs)("div", { className: `${_().featureValue} ${"team" === j2 ? _().valueSelected : ""}`, role: "cell", children: [(0, n.jsx)("span", { className: _().mobilePlan, children: "Team" }), (0, n.jsx)(y, { text: e3.team })] }), (0, n.jsxs)("div", { className: `${_().featureValue} ${"studio" === j2 ? _().valueSelected : ""}`, role: "cell", children: [(0, n.jsx)("span", { className: _().mobilePlan, children: "Studio" }), (0, n.jsx)(y, { text: e3.studio })] })] }, e3.label)) }) })] }), (0, n.jsxs)("div", { className: _().footer, children: [(0, n.jsx)("span", { children: "Prices in USD per seat. Yearly plans are billed annually." }), (0, n.jsx)("p", { className: _().srOnly, role: "status", "aria-live": "polite", children: j2 ? `${"team" === j2 ? "Team" : "Studio"} selected` : "" })] })] });
  }
  let v = j;
}

__m(__module,__exports,__require);
}