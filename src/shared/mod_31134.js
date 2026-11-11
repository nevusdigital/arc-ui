function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { LogoMarquee: () => _, default: () => b });
  var o = t(95155), n = t(12115), r = t(36619), s = t(79267), i = t(51288), l = t(23074), d = t.n(l);
  let c = [{ name: "Figma", icon: "block-logos/figma.svg", colorIcon: "block-logos/figma-color.svg" }, { name: "Linear", icon: "block-logos/linear.svg", color: "#5E6AD2" }, { name: "Notion", icon: "block-logos/notion.svg" }, { name: "Slack", icon: "block-logos/slack.svg", colorIcon: "block-logos/slack-color.svg" }, { name: "GitHub", icon: "block-logos/github.svg" }, { name: "Stripe", icon: "block-logos/stripe.svg", color: "#635BFF" }, { name: "Vercel", icon: "block-logos/vercel.svg" }];
  function u({ brand: e2, tone: a2 }) {
    return "color" === a2 && e2.colorIcon ? (0, o.jsx)("img", { className: d().brandMark, src: e2.colorIcon, alt: "", width: 22, height: 22, draggable: false }) : (0, o.jsx)("span", { className: d().brandMark, style: { maskImage: `url("${e2.icon}")`, WebkitMaskImage: `url("${e2.icon}")`, color: "color" === a2 ? e2.color : void 0 }, "aria-hidden": "true" });
  }
  function m({ brands: e2, tone: a2, duplicate: t2 = false }) {
    return (0, o.jsx)("ul", { className: d().brandList, "aria-label": t2 ? void 0 : "Illustrative tool logos", "aria-hidden": t2 || void 0, children: e2.map((e3, t3) => (0, o.jsxs)("li", { className: d().brand, children: [(0, o.jsx)(u, { brand: e3, tone: a2 }), (0, o.jsx)("span", { className: d().brandName, children: e3.name })] }, `${e3.name}-${t3}`)) });
  }
  function _({ title: e2 = "Good work moves between tools", description: a2 = "From the first idea to the final handoff, a familiar set of tools stays close to the work.", brands: t2 = c, tone: l2 = "color" }) {
    let u2 = (0, n.useId)(), [b2, p] = (0, n.useState)(false);
    return (0, o.jsxs)("section", { className: d().section, "data-tone": l2, "aria-labelledby": u2, children: [(0, o.jsxs)("div", { className: d().intro, children: [(0, o.jsx)("h2", { id: u2, children: e2 }), (0, o.jsx)("p", { children: a2 })] }), (0, o.jsx)("div", { className: d().marquee, role: "region", "aria-label": "Illustrative tool logos", children: (0, o.jsxs)("div", { className: `${d().track}${b2 ? ` ${d().paused}` : ""}`, children: [(0, o.jsx)(m, { brands: t2, tone: l2 }), (0, o.jsx)(m, { brands: t2, tone: l2, duplicate: true })] }) }), (0, o.jsxs)("div", { className: d().footer, children: [(0, o.jsx)(i.$, { variant: "ghost", size: "sm", className: d().motionButton, "aria-label": b2 ? "Play logo motion" : "Pause logo motion", onClick: () => p((e3) => !e3), children: b2 ? (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(r.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Play"] }) : (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(s.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Pause"] }) }), (0, o.jsx)("span", { className: d().motionStatus, "aria-live": "polite", children: b2 ? "Motion paused" : "" })] })] });
  }
  let b = _;
}

__m(__module,__exports,__require);
}