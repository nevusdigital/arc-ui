function(__module,__exports,__require){
"use strict";
function __m(e, i, o) {
  "use strict";
  o.d(i, { Accordion: () => P });
  var r = o(95155), t = o(12115), n = o(89372), s = o(12363), a = o(18310), l = o(25354), _ = o(7770), c = o(88986), d = o.n(c);
  let h = { height: "auto", opacity: 1, visibility: "visible" }, p = { height: 0, opacity: 0, transitionEnd: { visibility: "hidden" } }, m = { y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }, u = { y: -6, filter: `blur(${_.T.blur.subtle}px)` }, v = { open: { ...h, transition: { height: _.T.spring.smooth, opacity: { duration: _.T.duration.standard, ease: [..._.T.ease.enter] } } }, closed: { ...p, transition: { height: _.T.spring.smooth, opacity: { duration: _.T.duration.fast, ease: [..._.T.ease.standard] } } } }, b = { open: { ...m, transition: { y: _.T.spring.smooth, filter: { duration: _.T.duration.standard, ease: [..._.T.ease.enter] } } }, closed: { ...u, transition: { duration: _.T.duration.fast, ease: [..._.T.ease.standard] } } }, g = { open: { ...h, transition: { duration: 0 } }, closed: { ...p, transition: { duration: 0 } } }, f = { open: { ...m, transition: { duration: 0 } }, closed: { ...u, transition: { duration: 0 } } };
  function P({ items: e2, defaultOpen: i2 = 0, size: o2 = "md" }) {
    let c2 = i2 >= 0 && i2 < e2.length ? String(i2) : "", [h2, p2] = (0, t.useState)(c2), m2 = (0, a.I)();
    return (0, r.jsx)(n.bL, { className: [d().accordion, "lg" === o2 ? d().lg : ""].filter(Boolean).join(" "), type: "single", collapsible: true, value: h2, onValueChange: p2, children: e2.map((e3, i3) => {
      let o3 = h2 === String(i3);
      return (0, r.jsxs)(n.q7, { className: d().item, value: String(i3), children: [(0, r.jsx)(n.Y9, { className: d().header, children: (0, r.jsxs)(n.l9, { className: d().trigger, children: [(0, r.jsx)("span", { children: e3.title }), (0, r.jsx)(l.PY1.span, { className: d().icon, initial: false, animate: { rotate: 180 * !!o3 }, transition: m2 ? { duration: 0 } : _.T.spring.snappy, children: (0, r.jsx)(s.A, { width: 17, height: 17, "aria-hidden": "true" }) })] }) }), (0, r.jsx)(n.UC, { forceMount: true, asChild: true, children: (0, r.jsx)(l.PY1.div, { className: d().panel, initial: false, animate: o3 ? "open" : "closed", variants: m2 ? g : v, children: (0, r.jsx)(l.PY1.div, { className: d().panelInner, variants: m2 ? f : b, children: e3.content }) }) })] }, `${e3.title}-${i3}`);
    }) });
  }
}

__m(__module,__exports,__require);
}