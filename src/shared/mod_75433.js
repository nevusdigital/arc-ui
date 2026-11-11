function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { LineChartDemo: () => x, default: () => _ });
  var a = r(95155), n = r(12115), i = r(73178), s = r(65024), l = r(66558), o = r(94959), u = r.n(o);
  let c = Date.UTC(2026, 8, 21);
  function d(e2, t2) {
    let r2 = [0, 6].includes(new Date(c - 864e5 * e2).getUTCDay()) ? 0.62 : 1;
    return Math.round((t2 ? 212 - 0.35 * e2 : 248 - 0.7 * e2) * r2 * (t2 || 12 !== e2 ? t2 || 11 !== e2 ? 1 : 1.45 : 2.1) * (1 + 0.16 * (43758.5453 * Math.sin(12.9898 * (e2 + 400 * !!t2)) % 1)));
  }
  let h = (e2) => new Intl.DateTimeFormat("en-US", { timeZone: "UTC", ...e2 }), p = h({ weekday: "short", month: "short", day: "numeric" }), m = h({ month: "short", day: "numeric" });
  function f(e2) {
    return Array.from({ length: e2 }, (t2, r2) => {
      let a2 = e2 - 1 - r2, n2 = new Date(c - 864e5 * a2), i2 = e2 <= 7 || (e2 <= 30 ? 1 === n2.getUTCDay() : 1 === n2.getUTCDate() || 15 === n2.getUTCDate());
      return { key: n2.toISOString().slice(0, 10), label: 0 === a2 ? "Today, Sep 21" : p.format(n2), axisLabel: i2 ? m.format(n2) : void 0, values: { current: d(a2, false), previous: d(a2, true) } };
    });
  }
  let g = { "7d": f(7), "30d": f(30), "90d": f(90) }, y = [{ value: "7d", label: "7 days" }, { value: "30d", label: "30 days" }, { value: "90d", label: "90 days" }], v = [{ key: "current", label: "This period" }, { key: "previous", label: "Previous period", dashed: true }], b = (e2, t2) => e2.reduce((e3, r2) => e3 + (r2.values[t2] ?? 0), 0);
  function x() {
    let e2 = (0, n.useId)(), [t2, r2] = (0, n.useState)("30d"), [o2, c2] = (0, n.useState)("30d"), [d2, h2] = (0, n.useState)(null), p2 = (0, n.useRef)(null);
    (0, n.useEffect)(() => () => {
      p2.current && clearTimeout(p2.current);
    }, []);
    let m2 = g[o2], f2 = b(m2, "current"), x2 = b(m2, "previous"), _2 = (f2 - x2) / x2, T = d2 ? d2.values.current ?? 0 : f2, w = d2 ? `${d2.values.previous ?? 0} in the previous period` : `${_2 >= 0 ? "+" : "\u2212"}${Math.abs(100 * _2).toFixed(1)}% vs previous ${m2.length} days`;
    return (0, a.jsxs)("section", { className: u().card, "aria-labelledby": e2, children: [(0, a.jsxs)("div", { className: u().top, children: [(0, a.jsx)("h3", { id: e2, className: u().title, children: "Trial signups" }), (0, a.jsx)(l.A, { label: "Range", options: y, value: t2, onValueChange: (e3) => {
      r2(e3), p2.current && clearTimeout(p2.current), p2.current = setTimeout(() => c2(e3), 480);
    } })] }), (0, a.jsxs)("div", { className: u().readout, children: [(0, a.jsx)(s.q, { value: T, label: d2 ? d2.label : "Total signups" }), (0, a.jsx)("p", { className: u().note, "data-up": !d2 && _2 >= 0 || void 0, children: w })] }), (0, a.jsx)(i.b, { data: m2, series: v, label: "Trial signups", loading: t2 !== o2, onActiveChange: (e3, t3) => h2(t3) })] });
  }
  let _ = x;
}

__m(__module,__exports,__require);
}