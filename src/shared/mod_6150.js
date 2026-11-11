function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { BillingToggleDemo: () => h, default: () => _ });
  var i = a(95155), n = a(12115), l = a(18310), r = a(80642), s = a(25354), o = a(35552), d = a(7770), c = a(80326), u = a.n(c);
  let g = [{ id: "solo", name: "Solo", detail: "One person, every device", monthly: 10, yearly: 8 }, { id: "team", name: "Team", detail: "Shared spaces for up to 20", monthly: 20, yearly: 16 }, { id: "company", name: "Company", detail: "SSO, audit log, and admin roles", monthly: 40, yearly: 32 }], { duration: p, ease: m, blur: y } = d.T;
  function h() {
    let [e2, t2] = (0, n.useState)("yearly"), a2 = !!(0, l.I)(), d2 = "yearly" === e2;
    return (0, i.jsxs)("section", { className: u().card, "aria-labelledby": "billing-toggle-demo-title", children: [(0, i.jsxs)("div", { className: u().head, children: [(0, i.jsx)("h3", { id: "billing-toggle-demo-title", className: u().title, children: "Plans" }), (0, i.jsx)(o.Cc, { value: e2, onValueChange: t2, options: [{ value: "monthly", label: "Monthly" }, { value: "yearly", label: "Yearly", badge: "Save 20%", activeBadge: "Saving 20%" }] })] }), (0, i.jsx)("ul", { className: u().plans, children: g.map((e3) => {
      let t3 = d2 ? `$${12 * e3.yearly} billed yearly` : "Billed monthly";
      return (0, i.jsxs)("li", { className: u().plan, children: [(0, i.jsxs)("div", { className: u().copy, children: [(0, i.jsx)("p", { className: u().name, children: e3.name }), (0, i.jsx)("p", { className: u().detail, children: e3.detail })] }), (0, i.jsxs)("div", { className: u().priceCell, children: [(0, i.jsx)(o.x2, { className: u().price, amount: d2 ? e3.yearly : e3.monthly, was: d2 ? e3.monthly : void 0, period: "/ mo" }), (0, i.jsxs)("span", { className: u().note, children: [(0, i.jsx)("span", { className: u().noteSizer, "aria-hidden": "true", children: `$${12 * e3.yearly} billed yearly` }), (0, i.jsx)(r.N, { initial: false, children: (0, i.jsx)(s.PY1.span, { className: u().noteText, initial: a2 ? { opacity: 0 } : { opacity: 0, y: 6, filter: `blur(${y.subtle}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: p.standard, ease: [...m.enter] } }, exit: a2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -6, filter: `blur(${y.subtle}px)`, transition: { duration: p.fast, ease: [...m.standard] } }, children: t3 }, t3) })] })] })] }, e3.id);
    }) })] });
  }
  let _ = h;
}

__m(__module,__exports,__require);
}