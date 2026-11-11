function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { SlotTextDemo: () => h, default: () => f });
  var l = r(95155), s = r(12115), a = r(15458), n = r(66558), o = r(68848), i = r.n(o);
  let u = [{ id: "day", label: "Today", revenue: 4218, change: 3.2 }, { id: "week", label: "Week", revenue: 31904, change: 12.4 }, { id: "month", label: "Month", revenue: 128450, change: 8.7 }, { id: "year", label: "Year", revenue: 1482360, change: 41.9 }], c = u.map((e2) => ({ value: e2.id, label: e2.label })), d = (e2) => `$${e2.toLocaleString("en-US")}`, p = (e2) => `+${e2.toFixed(1)}%`;
  function h() {
    let [e2, t2] = (0, s.useState)("week"), r2 = u.find((t3) => t3.id === e2) ?? u[1];
    return (0, l.jsxs)("div", { className: i().card, children: [(0, l.jsxs)("div", { className: i().head, children: [(0, l.jsxs)("span", { className: i().label, children: [(0, l.jsx)("span", { className: i().swatch, "aria-hidden": "true" }), "Revenue"] }), (0, l.jsx)(a.W, { className: i().change, value: r2.change, format: p, duration: 0.7, spins: 0 })] }), (0, l.jsx)(a.W, { className: i().value, value: r2.revenue, format: d, announce: true }), (0, l.jsx)("div", { className: i().periods, children: (0, l.jsx)(n.A, { label: "Period", options: c, value: e2, onValueChange: t2 }) })] });
  }
  let f = h;
}

__m(__module,__exports,__require);
}