function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { BarChartDemo: () => v, default: () => g });
  var r = a(95155), n = a(12115), i = a(13974), l = a(66558), s = a(90829), o = a.n(s);
  let u = [42, 38, 30, 22, 38, 33, 52, 34, 29, 34, 31, 12, 36, 118, 44, 48, 44, 38, 36, 27, 64, 49, 31, 46, 58, 24, 41, 86, 67, 18], c = Date.UTC(2026, 7, 23), d = (e2) => new Intl.DateTimeFormat("en-US", { timeZone: "UTC", ...e2 }), h = d({ weekday: "short", month: "short", day: "numeric" }), f = d({ weekday: "narrow" }), p = d({ month: "short", day: "numeric" }), m = u.map((e2, t2) => {
    let a2 = new Date(c + 864e5 * t2), r2 = t2 === u.length - 1;
    return { key: a2.toISOString().slice(0, 10), label: r2 ? "Today, Sep 21" : h.format(a2), axisLabel: 1 === a2.getUTCDay() ? p.format(a2) : void 0, value: e2 };
  }), x = m.slice(-7).map((e2) => ({ ...e2, axisLabel: f.format(/* @__PURE__ */ new Date(`${e2.key}T00:00:00Z`)) })), y = [{ value: "week", label: "Week" }, { value: "month", label: "Month" }], b = { week: "Sep 15\u201321, 2026", month: "Aug 23 \u2013 Sep 21, 2026" };
  function v() {
    let [e2, t2] = (0, n.useState)("week"), a2 = (0, n.useId)();
    return (0, r.jsxs)("section", { className: o().card, "aria-labelledby": a2, children: [(0, r.jsxs)("div", { className: o().top, children: [(0, r.jsx)("h3", { id: a2, className: o().title, children: "Active minutes" }), (0, r.jsx)(l.A, { label: "Range", options: y, value: e2, onValueChange: t2 })] }), (0, r.jsx)(i.E, { data: "week" === e2 ? x : m, label: "Active minutes", unit: "min", period: b[e2] })] });
  }
  let g = v;
}

__m(__module,__exports,__require);
}