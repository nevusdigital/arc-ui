function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { UsageMeterDemo: () => k, default: () => x });
  var a = r(95155), n = r(12115), s = r(80642), l = r(25354), o = r(18310), i = r(68562), u = r(92298), c = r(49810), d = r(66558), f = r(7770), p = r(874), m = r.n(p);
  let y = [{ id: "documents", label: "Documents", value: 4.2 }, { id: "photos", label: "Photos", value: 5.1 }, { id: "backups", label: "Backups", value: 3.1 }], h = [{ name: "Brand shoot RAWs", size: 2.4, to: "photos" }, { name: "Nightly backup", size: 1.6, to: "backups" }, { name: "Q3 supplier contracts", size: 0.9, to: "documents" }, { name: "Launch film edit", size: 3.2, to: "photos" }], v = [{ value: "15", label: "15 GB" }, { value: "50", label: "50 GB" }], b = [...f.T.ease.enter], g = [...f.T.ease.standard];
  function _({ text: e2, reduced: t2 }) {
    return (0, a.jsx)("span", { className: m().rise, children: (0, a.jsx)(s.N, { mode: "popLayout", initial: false, children: (0, a.jsx)(l.PY1.span, { className: m().riseLine, initial: t2 ? { opacity: 0 } : { opacity: 0, y: "0.3em", filter: `blur(${f.T.blur.soft}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: t2 ? { opacity: 0, transition: { duration: 0.1 } } : { opacity: 0, y: "-0.3em", filter: `blur(${f.T.blur.subtle}px)`, transition: { duration: 0.14, ease: g } }, transition: { duration: t2 ? 0.15 : 0.22, ease: b }, children: e2 }, e2) }) });
  }
  function k() {
    let e2 = (0, o.I)() ?? false, [t2, r2] = (0, n.useState)(y), [s2, l2] = (0, n.useState)(0), [f2, p2] = (0, n.useState)("15"), [b2, g2] = (0, n.useState)(""), k2 = h[s2], x2 = 0 === s2 && "15" === f2;
    return (0, a.jsxs)("section", { className: m().card, children: [(0, a.jsx)(c.H, { label: "Storage", segments: t2, limit: Number(f2), unit: "GB" }), (0, a.jsxs)("div", { className: m().controls, children: [(0, a.jsxs)("div", { className: m().actions, children: [(0, a.jsxs)("button", { type: "button", className: m().primary, onClick: function() {
      if (!k2) return;
      r2((e4) => e4.map((e5) => e5.id === k2.to ? { ...e5, value: Math.round((e5.value + k2.size) * 10) / 10 } : e5)), l2(s2 + 1);
      let e3 = y.find((e4) => e4.id === k2.to)?.label ?? "the workspace";
      g2(`Added ${k2.name}, ${k2.size} GB, to ${e3}. ${s2 + 1 === h.length ? "Queue empty." : ""}`);
    }, "aria-disabled": !k2, children: [(0, a.jsx)(i.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Add files"] }), (0, a.jsxs)("button", { type: "button", className: m().secondary, onClick: function() {
      x2 || (r2(y), l2(0), p2("15"), g2("Back to this morning, on the 15 GB plan."));
    }, "aria-disabled": x2, children: [(0, a.jsx)(u.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Reset"] })] }), (0, a.jsx)(d.A, { label: "Plan", options: v, value: f2, onValueChange: function(e3) {
      p2(e3), g2("50" === e3 ? "Switched to the 50 GB plan." : "Back on the 15 GB plan.");
    } })] }), (0, a.jsx)("p", { className: m().srOnly, "aria-live": "polite", children: (0, a.jsx)(_, { text: b2, reduced: e2 }) })] });
  }
  let x = k;
}

__m(__module,__exports,__require);
}