function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ActivityHeatmapDemo: () => j, default: () => $ });
  var r = a(95155), n = a(12115), i = a(28245), l = a(92171), s = a(25354), o = a(18310), c = a(80642), u = a(28432), d = a(66558), m = a(7770), h = a(67235), p = a.n(h);
  let y = ["2025", "2024", "2023"], f = [3, 6, 10], _ = ["atlas-web", "billing-api", "design-tokens", "atlas-web"], v = [...m.T.ease.enter], x = [...m.T.ease.standard], g = (e2, t2, a2) => `${e2} ${1 === e2 ? t2 : a2}`, b = new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric", timeZone: "UTC" }), w = () => () => {
  };
  function T({ changeKey: e2, reduced: t2, className: a2, children: o2 }) {
    let c2 = (0, n.useRef)(null), u2 = (0, i.d)("auto"), d2 = (0, n.useRef)(e2), h2 = (0, n.useRef)(0);
    return (0, n.useLayoutEffect)(() => {
      d2.current !== e2 && (d2.current = e2, h2.current = performance.now() + 600);
    }, [e2]), (0, n.useEffect)(() => {
      let e3 = c2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(() => {
        let a4 = e3.offsetHeight;
        t2 || performance.now() > h2.current || "auto" === u2.get() ? u2.jump(a4) : (0, l.i)(u2, a4, m.T.spring.smooth);
      });
      return a3.observe(e3), () => a3.disconnect();
    }, [u2, t2]), (0, r.jsx)(s.PY1.span, { className: a2, style: { height: u2 }, children: (0, r.jsx)("span", { ref: c2, className: p().morphInner, children: o2 }) });
  }
  function j() {
    let e2 = (0, n.useSyncExternalStore)(w, () => true, () => false), t2 = ((0, o.I)() ?? false) && e2, a2 = (0, n.useMemo)(() => Object.fromEntries(y.map((e3) => [e3, (function(e4) {
      let t3, a3 = (t3 = 7919 * e4, () => {
        let e5 = Math.imul((t3 = t3 + 1831565813 | 0) ^ t3 >>> 15, 1 | t3);
        return (((e5 = e5 + Math.imul(e5 ^ e5 >>> 7, 61 | e5) ^ e5) ^ e5 >>> 14) >>> 0) / 4294967296;
      }), r2 = [Date.UTC(e4, 2, 18 + e4 % 3), Date.UTC(e4, 5, 24 - e4 % 4), Date.UTC(e4, 9, 8 + e4 % 5)], n2 = Date.UTC(e4, 7, 4 + e4 % 3 * 3), i3 = [];
      for (let t4 = Date.UTC(e4, 0, 1); t4 <= Date.UTC(e4, 11, 31); t4 += 864e5) {
        let l3 = new Date(t4).getUTCDay(), s2 = 0 === l3 || 6 === l3, o2 = t4 >= n2 && t4 < n2 + 10368e5 || t4 >= Date.UTC(e4, 11, 22), c2 = r2.some((e5) => t4 <= e5 && e5 - t4 < 13824e5), u2 = o2 ? 0.05 : c2 ? s2 ? 0.45 : 0.98 : s2 ? 0.16 : 0.8, d2 = (c2 ? 8.5 : 4.4) * (0.35 + a3() ** 1.7 * 1.5) + +(2 === l3 || 3 === l3);
        i3.push({ date: new Date(t4).toISOString().slice(0, 10), count: a3() < u2 ? Math.max(1, Math.round(d2)) : 0 });
      }
      return i3;
    })(Number(e3))])), []), [i2, l2] = (0, n.useState)("2025"), [h2, j2] = (0, n.useState)("2025-03-18"), $2 = (function(e3, t3) {
      let a3, r2, n2;
      if (!e3) return "Select a day to see what was shipped.";
      let i3 = t3.find((t4) => t4.date === e3)?.count ?? 0, l3 = b.format(/* @__PURE__ */ new Date(`${e3}T00:00:00Z`));
      if (!i3) return `${l3}: no contributions.`;
      let { commits: s2, pulls: o2, reviews: c2, repository: u2 } = (r2 = Math.round(i3 * (0.12 + (a3 = [...e3].reduce((e4, t4) => (31 * e4 + t4.charCodeAt(0)) % 9973, 7)) % 5 * 0.03)), n2 = Math.round(i3 * (0.14 + a3 % 7 * 0.02)), { commits: Math.max(0, i3 - r2 - n2), pulls: r2, reviews: n2, repository: _[a3 % _.length] }), d2 = [s2 && g(s2, "commit", "commits"), o2 && g(o2, "pull request", "pull requests"), c2 && g(c2, "review", "reviews")].filter(Boolean), m2 = d2.length > 1 ? `${d2.slice(0, -1).join(", ")} and ${d2.at(-1)}` : d2[0];
      return `${l3}: ${m2}, mostly in ${u2}.`;
    })(h2, a2[i2]);
    return (0, r.jsxs)("section", { className: p().card, "aria-label": "Emma Collins's contributions", children: [(0, r.jsx)(u.k, { days: a2[i2], label: `Emma Collins's contributions in ${i2}`, period: i2, thresholds: f, selectedDate: h2, onSelectDate: j2, actions: (0, r.jsx)(d.A, { label: "Year", value: i2, onValueChange: function(e3) {
      l2(e3), j2((t3) => (function(e4, t4) {
        if (!e4) return null;
        let [, a3, r2] = e4.split("-").map(Number), n2 = new Date(Date.UTC(Number(t4), a3 - 1, r2));
        return n2.getUTCMonth() === a3 - 1 ? n2.toISOString().slice(0, 10) : `${t4}-02-28`;
      })(t3, e3));
    }, options: y.map((e3) => ({ value: e3, label: e3 })) }) }), (0, r.jsx)("p", { className: p().detail, "aria-live": "polite", children: (0, r.jsx)(T, { changeKey: $2, reduced: t2, className: p().morph, children: (0, r.jsx)(c.N, { mode: "popLayout", initial: false, children: (0, r.jsx)(s.PY1.span, { className: p().detailLine, initial: t2 ? { opacity: 0 } : { opacity: 0, y: "0.3em", filter: `blur(${m.T.blur.soft}px)` }, animate: { opacity: 1, y: "0em", filter: "blur(0px)" }, exit: t2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: "-0.3em", filter: `blur(${m.T.blur.subtle}px)`, transition: { duration: m.T.duration.instant, ease: x } }, transition: { duration: t2 ? m.T.duration.fast : m.T.duration.standard, ease: v }, children: $2 }, $2) }) }) })] });
  }
  let $ = j;
}

__m(__module,__exports,__require);
}