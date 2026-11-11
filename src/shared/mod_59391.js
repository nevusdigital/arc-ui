function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { DonutChartDemo: () => v, default: () => h });
  var l = a(95155), r = a(12115), s = a(28802), n = a(66558), u = a(49593), o = a.n(u);
  let c = { week: { period: "Sep 15\u201321, 2026", data: [{ key: "search", label: "Search", value: 4210 }, { key: "direct", label: "Direct", value: 2380 }, { key: "newsletter", label: "Newsletter", value: 1940 }, { key: "referrals", label: "Referrals", value: 1120 }, { key: "social", label: "Social", value: 310 }, { key: "podcasts", label: "Podcasts", value: 180 }, { key: "partners", label: "Partners", value: 95 }] }, month: { period: "Aug 23 \u2013 Sep 21, 2026", data: [{ key: "search", label: "Search", value: 16840 }, { key: "direct", label: "Direct", value: 8120 }, { key: "newsletter", label: "Newsletter", value: 5260 }, { key: "referrals", label: "Referrals", value: 6430 }, { key: "social", label: "Social", value: 2910 }, { key: "podcasts", label: "Podcasts", value: 640 }, { key: "partners", label: "Partners", value: 410 }] }, year: { period: "Oct 2025 \u2013 Sep 2026", data: [{ key: "search", label: "Search", value: 168300 }, { key: "direct", label: "Direct", value: 71900 }, { key: "newsletter", label: "Newsletter", value: 38400 }, { key: "referrals", label: "Referrals", value: 52700 }, { key: "social", label: "Social", value: 41200 }, { key: "podcasts", label: "Podcasts", value: 19600 }, { key: "partners", label: "Partners", value: 6900 }] } }, i = [{ value: "week", label: "Week" }, { value: "month", label: "Month" }, { value: "year", label: "Year" }], d = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }), b = new Intl.NumberFormat("en-US");
  function v() {
    let e2 = (0, r.useId)(), [t2, a2] = (0, r.useState)("month"), { period: u2, data: v2 } = c[t2];
    return (0, l.jsxs)("section", { className: o().card, "aria-labelledby": e2, children: [(0, l.jsxs)("div", { className: o().top, children: [(0, l.jsxs)("div", { className: o().heading, children: [(0, l.jsx)("h3", { id: e2, className: o().title, children: "Visits by source" }), (0, l.jsx)("p", { className: o().period, children: u2 })] }), (0, l.jsx)(n.A, { label: "Period", options: i, value: t2, onValueChange: a2 })] }), (0, l.jsx)(s.V, { data: v2, label: `Visits by source, ${u2}`, totalLabel: "Visits", formatValue: (e3) => e3 >= 1e5 ? d.format(e3) : b.format(e3) })] });
  }
  let h = v;
}

__m(__module,__exports,__require);
}