/* small-multiples (pro block) */
(function(){var A=globalThis.__ARC__;
A.regCss(13744, ".root{--line:var(--series-1);--gutter:40px;--plot-height:92px;position:relative;box-sizing:border-box;width:min(100%,1180px);min-width:0;margin-inline:auto;overflow:hidden;container-type:inline-size;border:1px solid var(--border);border-radius:20px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root *,.root :after,.root :before{box-sizing:border-box}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.empty{margin:0;padding:0 24px 24px;color:var(--text-secondary)}\n.header{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:16px 24px;padding:20px 24px 0}\n.header{padding:16px 16px 0}\n.heading{flex:1 1 240px;min-width:0}\n.title{margin:0;font-size:var(--text-base);font-weight:500;line-height:var(--leading-body)}\n.description{margin:2px 0 0;color:var(--text-muted);font-size:var(--text-xs)}\n.controls{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;min-width:0}\n.controls{width:100%}\n@media (pointer:coarse){.controls button{min-height:var(--control-height-md)}\n.segment{min-width:0}\n.switch{flex:0 0 auto}\n.readout{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 20px;padding:20px 24px 16px;border-bottom:1px solid var(--border-subtle)}\n.readout{padding:16px 16px 12px;gap:4px 16px}\n.legend,.total,.when{margin:0}\n.when{display:inline-flex;align-items:baseline;gap:8px;min-width:0}\n.total{display:inline-flex;align-items:baseline;gap:6px}\n.legend{display:flex;flex-wrap:wrap;gap:4px 16px;margin-left:auto;color:var(--text-muted);font-size:var(--text-xs)}\n.legend{margin-left:0;width:100%}\n.date{min-width:9.5em;font-size:var(--text-lg);font-weight:500;letter-spacing:var(--tracking-body);font-variant-numeric:tabular-nums;white-space:nowrap}\n.date{min-width:0;font-size:var(--text-base)}\n.state{min-width:4.5em;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;white-space:nowrap}\n.totalLabel{color:var(--text-muted)}\n.totalValue{min-width:4.4em;font-weight:500;font-variant-numeric:tabular-nums}\n.key{display:inline-flex;align-items:center;gap:6px;white-space:nowrap}\n.keyGhost,.keyLine{display:inline-block;width:14px;height:0;border-top:2px solid var(--line);border-radius:1px}\n.keyGhost{border-top:1px dashed var(--text-muted);border-radius:0;opacity:.7}\n.grid{position:relative;min-width:0;touch-action:pan-y;-webkit-tap-highlight-color:transparent}\n.list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));margin:0 -1px -1px 0;padding:0;list-style:none}\n@container (min-width: 640px){.list{grid-template-columns:repeat(4,minmax(0,1fr))}\n@container (min-width: 1000px){.list{--plot-height:104px}\n@container (max-width: 560px){.list{--gutter:38px;--plot-height:76px}\n.panel{position:relative;min-width:0;background:var(--surface);box-shadow:inset -1px -1px 0 var(--border-subtle)}\n.panel[data-dim] .panelInner{opacity:.38}\n.panelInner{display:grid;gap:2px;padding:16px 20px 18px;transition:opacity var(--duration-standard) var(--ease-standard)}\n.panelInner{padding:18px 24px 20px}\n.panelInner{padding:14px 14px 16px}\n@media (prefers-reduced-motion:reduce){.panelInner,.value,.xLayer[data-cross]{transition:none}\n.panelHead{display:flex;align-items:baseline;justify-content:space-between;gap:8px;min-width:0}\n.panelHead{flex-direction:column;align-items:flex-start;gap:0}\n.name{min-width:0;margin:0;overflow:hidden;font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);text-overflow:ellipsis;white-space:nowrap}\n.name{max-width:100%}\n.value{flex:0 0 auto;color:var(--foreground);font-size:var(--text-sm);font-variant-numeric:tabular-nums;transition:color var(--duration-fast) var(--ease-standard)}\n.value{font-size:var(--text-base);font-weight:500}\n.trend{display:flex;align-items:center;gap:4px;min-width:0;margin:0 0 12px;color:var(--text-secondary);font-size:var(--text-xs);white-space:nowrap}\n.trend svg{flex:0 0 auto}\n.trend[data-flat]{color:var(--text-muted)}\n.trend[data-flat] .trendValue{color:var(--text-secondary)}\n.compare,.trendValue{font-variant-numeric:tabular-nums}\n.compare{min-width:0;overflow:hidden;color:var(--text-muted);text-overflow:ellipsis}\n.plot{position:relative;height:var(--plot-height);padding-right:var(--gutter)}\n.ticks{position:absolute;inset:0;overflow:hidden;pointer-events:none}\n.tickLayer{position:absolute;top:0;left:0;width:100%;height:100%}\n.tickLine{position:absolute;top:0;left:0;right:var(--gutter);height:1px;margin-top:-.5px;background:var(--border-subtle)}\n.tickLabel{position:absolute;top:0;right:0;width:calc(var(--gutter) - 6px);color:var(--text-muted);font-size:11px;font-variant-numeric:tabular-nums;letter-spacing:0;line-height:1;text-align:right;transform:translateY(-50%);white-space:nowrap}\n.tickLabel{font-size:10px}\n.chart{position:relative;height:100%;cursor:crosshair}\n.chart{cursor:default}\n.svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}\n.ghostLine{fill:none;stroke:var(--text-muted);stroke-opacity:.45;stroke-width:1;stroke-dasharray:3 3;stroke-linejoin:round}\n.area{fill:var(--line);fill-opacity:.07}\n.line{fill:none;stroke:var(--line);stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}\n.xLayer{position:absolute;inset:0;pointer-events:none}\n.xLayer[data-cross]{opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}\n.xLayer[data-cross][data-on]{opacity:1}\n.yLayer{position:absolute;top:0;left:0;width:0;height:100%}\n.crossDot,.endDot{position:absolute;top:0;left:0;border-radius:50%}\n.endDot{width:6px;height:6px;margin:-3px 0 0 -3px;background:var(--line)}\n.crossDot{width:9px;height:9px;margin:-4.5px 0 0 -4.5px;border:2px solid var(--line);background:var(--surface)}\n.crossLine{position:absolute;top:-6px;bottom:-6px;left:-.5px;width:1px;background:var(--foreground);opacity:.28}", {"root":"root","srOnly":"srOnly","empty":"empty","header":"header","heading":"heading","title":"title","description":"description","controls":"controls","segment":"segment","switch":"switch","readout":"readout","legend":"legend","total":"total","when":"when","date":"date","state":"state","totalLabel":"totalLabel","totalValue":"totalValue","key":"key","keyGhost":"keyGhost","keyLine":"keyLine","grid":"grid","list":"list","panel":"panel","panelInner":"panelInner","value":"value","xLayer":"xLayer","panelHead":"panelHead","name":"name","trend":"trend","trendValue":"trendValue","compare":"compare","plot":"plot","ticks":"ticks","tickLayer":"tickLayer","tickLine":"tickLine","tickLabel":"tickLabel","chart":"chart","svg":"svg","ghostLine":"ghostLine","area":"area","line":"line","yLayer":"yLayer","crossDot":"crossDot","endDot":"endDot","crossLine":"crossLine"});
A.reg(71556, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => n });
  var a = r(51811);
  let i = {
    name: "arrow-down-right",
    size: 24,
    node: [
      ["path", { d: "m7 7 10 10", key: "1fmybs" }],
      ["path", { d: "M17 7v10H7", key: "6fjiku" }]
    ]
  };
  i.node;
  let n = (0, a.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(98625, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { SmallMultiples: () => Y, default: () => U });
  var l = a(95155), s = a(12115), n = a(28245), r = a(92171), i = a(55809), o = a(25354), c = a(18310), u = a(36565), d = a(9751), m = a(71556), h = a(66558), p = a(50680), _ = a(7770);
  let f = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ], g = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ], x = Array.from({ length: 24 }, (e2, t2) => {
    let a2 = (9 + t2) % 12, l2 = 2024 + Math.floor((9 + t2) / 12);
    return { short: `${f[a2]} ${l2}`, long: `${g[a2]} ${l2}` };
  }), y = [
    {
      id: "na",
      name: "North America",
      base: 1180,
      growth: 0.016,
      season: 0.06,
      noise: 0.018,
      seed: 11
    },
    {
      id: "uk",
      name: "United Kingdom",
      base: 540,
      growth: 9e-3,
      season: 0.05,
      noise: 0.02,
      seed: 23
    },
    {
      id: "de",
      name: "Germany",
      base: 612,
      growth: 8e-4,
      season: 0.04,
      noise: 0.012,
      seed: 37
    },
    {
      id: "fr",
      name: "France",
      base: 384,
      growth: -6e-4,
      season: 0.05,
      noise: 0.012,
      seed: 41
    },
    {
      id: "nordics",
      name: "Nordics",
      base: 236,
      growth: 0.024,
      season: 0.07,
      noise: 0.022,
      seed: 53
    },
    {
      id: "jp",
      name: "Japan",
      base: 428,
      growth: -0.011,
      season: 0.03,
      noise: 0.016,
      seed: 67
    },
    {
      id: "au",
      name: "Australia",
      base: 262,
      growth: 12e-4,
      season: 0.04,
      noise: 0.014,
      seed: 79
    },
    {
      id: "br",
      name: "Brazil",
      base: 148,
      growth: 0.038,
      season: 0.05,
      noise: 0.03,
      seed: 97
    }
  ].map((e2) => {
    let t2, a2 = (t2 = e2.seed, () => {
      t2 |= 0;
      let e3 = Math.imul((t2 = t2 + 1831565813 | 0) ^ t2 >>> 15, 1 | t2);
      return (((e3 = e3 + Math.imul(e3 ^ e3 >>> 7, 61 | e3) ^ e3) ^ e3 >>> 14) >>> 0) / 4294967296;
    });
    return {
      id: e2.id,
      name: e2.name,
      values: Array.from({ length: 24 }, (t3, l2) => {
        let s2 = 1 + e2.season * Math.cos(((9 + l2) % 12 - 11) / 12 * Math.PI * 2), n2 = 1 + (2 * a2() - 1) * e2.noise;
        return Math.round(e2.base * Math.pow(1 + e2.growth, l2) * s2 * n2);
      })
    };
  });
  var v = a(13744), j = a.n(v);
  let { spring: b, duration: w, ease: N } = _.T, k = { ...b.smooth, visualDuration: 0.55 }, M = { ...b.smooth, visualDuration: 0.6 }, $ = { type: "spring", visualDuration: 0.16, bounce: 0 }, L = { duration: 0 }, A = { duration: w.standard, ease: [...N.standard] }, S = [
    { value: "latest", label: "Latest" },
    { value: "growth", label: "Growth" },
    { value: "name", label: "Name" }
  ], P = [
    { value: "independent", label: "Independent" },
    { value: "shared", label: "Shared" }
  ], D = { latest: "latest value", growth: "growth", name: "name" }, E = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2));
  function R(e2) {
    return Math.abs(e2) >= 1e3 ? `$${(e2 / 1e3).toFixed(2)}M` : `$${Math.round(e2)}k`;
  }
  function T(e2) {
    return Math.abs(e2) >= 1e3 ? `$${Number((e2 / 1e3).toFixed(1))}M` : `$${Math.round(e2)}k`;
  }
  function O(e2) {
    let t2 = 100 * Math.abs(e2);
    return `${e2 < 0 && t2 >= 0.05 ? "\u2212" : "+"}${t2.toFixed(1)}%`;
  }
  function F(e2, t2) {
    let a2 = e2 / Math.max(1, t2), l2 = Math.pow(10, Math.floor(Math.log10(a2 || 1))), s2 = a2 / l2;
    return (s2 < 1.5 ? 1 : s2 < 3 ? 2 : s2 < 7 ? 5 : 10) * l2;
  }
  function G(e2, t2, a2) {
    let l2 = F(t2 - e2, a2), s2 = [];
    for (let a3 = Math.ceil(e2 / l2) * l2; a3 <= t2 + 1e-9; a3 += l2)
      s2.push(Math.round(1e6 * a3) / 1e6);
    return s2;
  }
  function C(e2, t2, a2) {
    let l2 = a2 - t2 || 1, s2 = Math.max(1, e2.length - 1);
    return e2.map(
      (e3, a3) => `${a3 ? "L" : "M"}${(a3 / s2 * 1e3).toFixed(2)},${((1 - (e3 - t2) / l2) * 100).toFixed(2)}`
    ).join("");
  }
  function I({ value: e2, visible: t2, lo: a2, hi: s2, label: n2 }) {
    let r2 = (0, i.G)(
      () => `${(1 - (e2 - a2.get()) / (s2.get() - a2.get() || 1)) * 100}%`
    );
    return (0, l.jsxs)(o.PY1.div, {
      className: j().tickLayer,
      style: { y: r2 },
      initial: false,
      animate: { opacity: +!!t2 },
      transition: A,
      "aria-hidden": "true",
      children: [
        (0, l.jsx)("span", { className: j().tickLine }),
        (0, l.jsx)("span", { className: j().tickLabel, children: n2 })
      ]
    });
  }
  let B = (0, s.memo)(function({
    item: e2,
    latest: t2,
    growth: a2,
    flat: c2,
    dim: h2,
    target: p2,
    ticks: _2,
    ghost: f2,
    cx: g2,
    cursor: x2,
    compareLabel: y2,
    layoutKey: v2,
    reduce: b2,
    formatValue: w2,
    formatTick: N2
  }) {
    let $2, A2, { lo: S2, hi: P2 } = ($2 = (0, n.d)(p2.lo), A2 = (0, n.d)(p2.hi), (0, s.useEffect)(() => {
      let e3 = (0, r.i)($2, p2.lo, b2 ? L : k), t3 = (0, r.i)(A2, p2.hi, b2 ? L : k);
      return () => {
        e3.stop(), t3.stop();
      };
    }, [p2.lo, p2.hi, $2, A2, b2]), { lo: $2, hi: A2 }), D2 = e2.values, R2 = Math.max(1, D2.length - 1), T2 = (0, i.G)(() => C(D2, S2.get(), P2.get())), F2 = (0, i.G)(() => `${C(D2, S2.get(), P2.get())}L1000,100L0,100Z`), G2 = (e3) => `${(1 - (e3 - S2.get()) / (P2.get() - S2.get() || 1)) * 100}%`, B2 = (0, i.G)(() => G2(D2[D2.length - 1])), Y2 = (0, i.G)(() => `${100 * g2.get()}%`), U2 = (0, i.G)(() => {
      let e3, t3, a3;
      return G2(
        (t3 = Math.floor(e3 = E(g2.get() * R2, 0, D2.length - 1)), a3 = Math.min(D2.length - 1, t3 + 1), D2[t3] + (D2[a3] - D2[t3]) * (e3 - t3))
      );
    }), V = null === x2 ? t2 : D2[E(x2, 0, D2.length - 1)], H = c2 ? u.A : a2 > 0 ? d.A : m.A, K = c2 ? "Flat" : O(a2), X = `${c2 ? "Flat trend, " : a2 > 0 ? "Up " : "Down "}${c2 ? O(a2) : `${Math.abs(100 * a2).toFixed(1)}%`} ${y2}`;
    return (0, l.jsx)(o.PY1.li, {
      className: j().panel,
      layout: "position",
      layoutDependency: v2,
      transition: b2 ? L : M,
      "data-dim": h2 || void 0,
      children: (0, l.jsxs)("div", {
        className: j().panelInner,
        children: [
          (0, l.jsxs)("div", {
            className: j().panelHead,
            children: [
              (0, l.jsx)("h3", { className: j().name, children: e2.name }),
              (0, l.jsx)("span", {
                className: j().value,
                "data-scrub": null !== x2 || void 0,
                children: w2(V)
              })
            ]
          }),
          (0, l.jsxs)("p", {
            className: j().trend,
            "data-flat": c2 || void 0,
            children: [
              (0, l.jsx)(H, {
                size: 14,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              }),
              (0, l.jsx)("span", {
                className: j().trendValue,
                "aria-hidden": "true",
                children: K
              }),
              (0, l.jsx)("span", {
                className: j().compare,
                "aria-hidden": "true",
                children: c2 ? O(a2) : y2
              }),
              (0, l.jsx)("span", { className: j().srOnly, children: X })
            ]
          }),
          (0, l.jsxs)("div", {
            className: j().plot,
            "aria-hidden": "true",
            children: [
              (0, l.jsx)("div", {
                className: j().ticks,
                children: _2.map(
                  (e3) => (0, l.jsx)(
                    I,
                    {
                      value: e3.value,
                      visible: e3.visible,
                      lo: S2,
                      hi: P2,
                      label: N2(e3.value)
                    },
                    e3.value
                  )
                )
              }),
              (0, l.jsxs)("div", {
                className: j().chart,
                "data-plot": "",
                children: [
                  (0, l.jsxs)("svg", {
                    className: j().svg,
                    viewBox: "0 0 1000 100",
                    preserveAspectRatio: "none",
                    focusable: "false",
                    children: [
                      (0, l.jsx)("path", {
                        className: j().ghostLine,
                        d: f2,
                        vectorEffect: "non-scaling-stroke"
                      }),
                      (0, l.jsx)(o.PY1.path, { className: j().area, d: F2 }),
                      (0, l.jsx)(o.PY1.path, {
                        className: j().line,
                        d: T2,
                        vectorEffect: "non-scaling-stroke"
                      })
                    ]
                  }),
                  (0, l.jsx)("div", {
                    className: j().xLayer,
                    style: { transform: "translateX(100%)" },
                    children: (0, l.jsx)(o.PY1.div, {
                      className: j().yLayer,
                      style: { y: B2 },
                      children: (0, l.jsx)("span", { className: j().endDot })
                    })
                  }),
                  (0, l.jsxs)(o.PY1.div, {
                    className: j().xLayer,
                    "data-cross": "",
                    "data-on": null !== x2 || void 0,
                    style: { x: Y2 },
                    children: [
                      (0, l.jsx)("span", { className: j().crossLine }),
                      (0, l.jsx)(o.PY1.div, {
                        className: j().yLayer,
                        style: { y: U2 },
                        children: (0, l.jsx)("span", {
                          className: j().crossDot
                        })
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    });
  });
  function Y({
    series: e2 = y,
    periods: t2 = x,
    title: a2 = "Revenue by region",
    description: i2 = "Monthly net revenue, October 2024 to September 2026",
    defaultSort: o2 = "latest",
    defaultScale: u2 = "independent",
    defaultDimFlat: d2 = true,
    flatThreshold: m2 = 0.05,
    growthLag: _2 = 12,
    formatValue: f2 = R,
    formatTick: g2 = T,
    onSortChange: v2,
    onScaleChange: b2,
    onIndexChange: w2,
    className: N2
  }) {
    let k2 = (0, s.useId)(), M2 = (0, c.I)() ?? false, [L2, A2] = (0, s.useState)(o2), [I2, U2] = (0, s.useState)(u2), [V, H] = (0, s.useState)(d2), [K, X] = (0, s.useState)(null), [J, z] = (0, s.useState)(""), Q = Math.max(0, ...e2.map((e3) => e3.values.length), +!!t2.length), W = Math.max(0, Q - 1), Z = E(_2, 1, Math.max(1, W)), q = `vs ${t2[W - Z]?.short ?? "start"}`, ee = (0, s.useMemo)(
      () => e2.map((e3) => {
        let t3 = e3.values, a3 = t3[t3.length - 1] ?? 0, l2 = t3[Math.max(0, t3.length - 1 - Z)] ?? a3, s2 = l2 ? a3 / l2 - 1 : 0;
        return {
          item: e3,
          latest: a3,
          growth: s2,
          flat: Math.abs(s2) < m2,
          min: Math.min(...t3),
          max: Math.max(...t3)
        };
      }),
      [e2, Z, m2]
    ), et = (0, s.useMemo)(
      () => Array.from(
        { length: Q },
        (t3, a3) => e2.reduce((e3, t4) => e3 + (t4.values[a3] ?? 0), 0)
      ),
      [e2, Q]
    ), ea = (0, s.useMemo)(() => {
      if (!et.length) return "";
      let e3 = Math.min(...et), t3 = Math.max(...et), a3 = 0.45 * (t3 - e3 || 1);
      return C(et, e3 - 0.4 * a3, t3 + 0.2 * a3);
    }, [et]), el = (0, s.useMemo)(() => {
      let e3 = [...ee];
      return "latest" === L2 ? e3.sort((e4, t3) => t3.latest - e4.latest) : "growth" === L2 ? e3.sort((e4, t3) => t3.growth - e4.growth) : e3.sort((e4, t3) => e4.item.name.localeCompare(t3.item.name, "en")), e3;
    }, [ee, L2]), es = el.map((e3) => e3.item.id).join(","), en = (0, s.useMemo)(() => {
      let e3 = Math.max(1, ...ee.map((e4) => e4.max)), t3 = F(e3, 3);
      return Math.ceil(1.08 * e3 / t3) * t3;
    }, [ee]), er = (0, s.useMemo)(
      () => new Map(
        ee.map((e3) => {
          let t3 = 0.22 * (e3.max - e3.min || e3.max || 1), a3 = { lo: e3.min - t3, hi: e3.max + 0.9 * t3 }, l2 = { lo: 0, hi: en }, s2 = (e4, t4) => {
            let a4 = 1 - (e4 - t4.lo) / (t4.hi - t4.lo);
            return a4 >= 0.14 && a4 <= 0.9;
          }, n2 = G(a3.lo, a3.hi, 3).filter((e4) => s2(e4, a3)), r2 = G(0, en, 4).filter((e4) => s2(e4, l2)), i3 = [.../* @__PURE__ */ new Set([...n2, ...r2])].sort((e4, t4) => e4 - t4);
          return [
            e3.item.id,
            {
              independent: a3,
              shared: l2,
              ticks: {
                independent: i3.map((e4) => ({
                  value: e4,
                  visible: n2.includes(e4)
                })),
                shared: i3.map((e4) => ({
                  value: e4,
                  visible: r2.includes(e4)
                }))
              }
            }
          ];
        })
      ),
      [ee, en]
    ), ei = (0, n.d)(1), eo = (0, s.useRef)(null);
    (0, s.useEffect)(() => {
      let e3 = eo.current;
      if (eo.current = K, null === K) return;
      let t3 = W ? K / W : 1;
      if (null === e3 || M2) return void ei.set(t3);
      let a3 = (0, r.i)(ei, t3, $);
      return () => a3.stop();
    }, [K, W, M2, ei]);
    let ec = (0, s.useRef)(w2);
    (0, s.useEffect)(() => {
      ec.current = w2;
    });
    let eu = (0, s.useRef)(null), ed = (e3) => {
      eu.current !== e3 && (eu.current = e3, X(e3), ec.current?.(e3));
    }, em = (e3) => {
      let t3 = e3.target?.closest?.("[data-plot]");
      if (!t3) return null;
      let a3 = t3.getBoundingClientRect();
      return Math.round(E((e3.clientX - a3.left) / (a3.width || 1), 0, 1) * W);
    }, eh = ee.filter((e3) => e3.flat).map((e3) => e3.item.name), ep = K ?? W, e_ = t2[ep], ef = `${k2}-hint`, eg = [j().root, N2].filter(Boolean).join(" ");
    return e2.length && Q ? (0, l.jsxs)("section", {
      className: eg,
      "aria-labelledby": `${k2}-title`,
      children: [
        (0, l.jsxs)("div", {
          className: j().header,
          children: [
            (0, l.jsxs)("div", {
              className: j().heading,
              children: [
                (0, l.jsx)("h2", {
                  className: j().title,
                  id: `${k2}-title`,
                  children: a2
                }),
                i2 ? (0, l.jsx)("p", {
                  className: j().description,
                  children: i2
                }) : null
              ]
            }),
            (0, l.jsxs)("div", {
              className: j().controls,
              children: [
                (0, l.jsx)(h.A, {
                  className: j().segment,
                  label: "Sort panels by",
                  options: S,
                  value: L2,
                  onValueChange: (e3) => {
                    A2(e3), v2?.(e3);
                    let t3 = [...ee].sort(
                      (t4, a3) => "latest" === e3 ? a3.latest - t4.latest : "growth" === e3 ? a3.growth - t4.growth : t4.item.name.localeCompare(a3.item.name, "en")
                    )[0];
                    z(
                      `Sorted by ${D[e3]}.${t3 ? ` ${t3.item.name} is first.` : ""}`
                    );
                  }
                }),
                (0, l.jsx)(h.A, {
                  className: j().segment,
                  label: "Y scale",
                  options: P,
                  value: I2,
                  onValueChange: (e3) => {
                    U2(e3), b2?.(e3), z(
                      "shared" === e3 ? "Shared scale. Panel heights now compare size." : "Independent scale. Panel heights now compare shape."
                    );
                  }
                }),
                (0, l.jsx)(p.d, {
                  className: j().switch,
                  label: "Dim flat trends",
                  checked: V,
                  onCheckedChange: (e3) => {
                    var t3;
                    H(e3), z(
                      e3 ? eh.length ? `Flat trends dimmed: ${(t3 = eh).length < 2 ? t3.join("") : `${t3.slice(0, -1).join(", ")} and ${t3[t3.length - 1]}`}.` : "No flat trends to dim." : "All panels at full strength."
                    );
                  }
                })
              ]
            })
          ]
        }),
        (0, l.jsxs)("div", {
          className: j().readout,
          children: [
            (0, l.jsxs)("p", {
              className: j().when,
              children: [
                (0, l.jsx)("span", {
                  className: j().date,
                  children: e_?.long
                }),
                (0, l.jsx)("span", {
                  className: j().state,
                  children: null === K ? "Latest" : `${ep + 1} of ${Q}`
                })
              ]
            }),
            (0, l.jsxs)("p", {
              className: j().total,
              children: [
                (0, l.jsx)("span", {
                  className: j().totalLabel,
                  children: "Total"
                }),
                " ",
                (0, l.jsx)("span", {
                  className: j().totalValue,
                  children: f2(et[ep] ?? 0)
                })
              ]
            }),
            (0, l.jsxs)("p", {
              className: j().legend,
              "aria-hidden": "true",
              children: [
                (0, l.jsxs)("span", {
                  className: j().key,
                  children: [
                    (0, l.jsx)("span", { className: j().keyLine }),
                    "Region"
                  ]
                }),
                (0, l.jsxs)("span", {
                  className: j().key,
                  children: [
                    (0, l.jsx)("span", { className: j().keyGhost }),
                    "All regions, scaled to fit"
                  ]
                })
              ]
            })
          ]
        }),
        (0, l.jsxs)("div", {
          className: j().grid,
          role: "group",
          tabIndex: 0,
          "aria-label": `${a2}, ${e2.length} panels`,
          "aria-describedby": ef,
          onPointerMove: (e3) => {
            if ("touch" === e3.pointerType && !e3.buttons) return;
            let t3 = em(e3);
            null !== t3 && ed(t3);
          },
          onPointerDown: (e3) => {
            let t3 = em(e3);
            null !== t3 && ed(t3);
          },
          onPointerLeave: (e3) => {
            "mouse" !== e3.pointerType || e3.currentTarget.matches(":focus-visible") || ed(null);
          },
          onKeyDown: (a3) => {
            let l2, s2 = K ?? W, n2 = "ArrowLeft" === a3.key || "ArrowDown" === a3.key ? s2 - 1 : "ArrowRight" === a3.key || "ArrowUp" === a3.key ? s2 + 1 : "PageUp" === a3.key ? s2 - 12 : "PageDown" === a3.key ? s2 + 12 : "Home" === a3.key ? 0 : "End" === a3.key ? W : null;
            if ("Escape" === a3.key) {
              if (null === K) return;
              a3.preventDefault(), ed(null), z("Crosshair cleared. Showing the latest month.");
              return;
            }
            if (null === n2) return;
            a3.preventDefault();
            let r2 = E(n2, 0, W);
            ed(r2), z(
              (l2 = [...e2].sort(
                (e3, t3) => (t3.values[r2] ?? 0) - (e3.values[r2] ?? 0)
              )[0], `${t2[r2]?.long ?? ""}. Total ${f2(et[r2] ?? 0)}.${l2 ? ` Highest ${l2.name} at ${f2(l2.values[r2] ?? 0)}.` : ""}`)
            );
          },
          onFocus: (e3) => {
            e3.target === e3.currentTarget && null === K && e3.currentTarget.matches(":focus-visible") && ed(W);
          },
          onBlur: (e3) => {
            e3.target === e3.currentTarget && ed(null);
          },
          "data-scale": I2,
          children: [
            (0, l.jsx)("p", {
              id: ef,
              className: j().srOnly,
              children: "Use the left and right arrow keys to move the crosshair across months in every panel at once. Home and End jump to the first and latest month, Escape clears it."
            }),
            (0, l.jsx)("ul", {
              className: j().list,
              children: el.map((e3) => {
                let t3 = er.get(e3.item.id);
                return (0, l.jsx)(
                  B,
                  {
                    item: e3.item,
                    latest: e3.latest,
                    growth: e3.growth,
                    flat: e3.flat,
                    dim: V && e3.flat,
                    target: t3[I2],
                    ticks: t3.ticks[I2],
                    ghost: ea,
                    cx: ei,
                    cursor: K,
                    compareLabel: q,
                    layoutKey: es,
                    reduce: M2,
                    formatValue: f2,
                    formatTick: g2
                  },
                  e3.item.id
                );
              })
            })
          ]
        }),
        (0, l.jsx)("div", {
          className: j().srOnly,
          children: (0, l.jsxs)("table", {
            children: [
              (0, l.jsx)("caption", {
                children: `${a2}, ${e_?.long ?? ""}, sorted by ${D[L2]}`
              }),
              (0, l.jsx)("thead", {
                children: (0, l.jsxs)("tr", {
                  children: [
                    (0, l.jsx)("th", { scope: "col", children: "Series" }),
                    (0, l.jsx)("th", { scope: "col", children: "Value" }),
                    (0, l.jsx)("th", {
                      scope: "col",
                      children: `Growth ${q}`
                    }),
                    (0, l.jsx)("th", { scope: "col", children: "Trend" })
                  ]
                })
              }),
              (0, l.jsx)("tbody", {
                children: el.map(
                  (e3) => (0, l.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, l.jsx)("th", {
                          scope: "row",
                          children: e3.item.name
                        }),
                        (0, l.jsx)("td", {
                          children: f2(e3.item.values[ep] ?? 0)
                        }),
                        (0, l.jsx)("td", { children: O(e3.growth) }),
                        (0, l.jsx)("td", {
                          children: e3.flat ? "Flat" : e3.growth > 0 ? "Rising" : "Falling"
                        })
                      ]
                    },
                    e3.item.id
                  )
                )
              })
            ]
          })
        }),
        (0, l.jsx)("p", {
          className: j().srOnly,
          role: "status",
          "aria-live": "polite",
          children: J
        })
      ]
    }) : (0, l.jsxs)("section", {
      className: eg,
      "aria-label": a2,
      children: [
        (0, l.jsx)("div", {
          className: j().header,
          children: (0, l.jsx)("div", {
            className: j().heading,
            children: (0, l.jsx)("h2", {
              className: j().title,
              children: a2
            })
          })
        }),
        (0, l.jsx)("p", {
          className: j().empty,
          children: "No series to compare yet. Pass at least one series with values."
        })
      ]
    });
  }
  let U = Y;
}

__m(__module,__exports,__require);
});
A.cssFor("small-multiples", [13744]);
A.item("small-multiples", {entry:98625, export:"SmallMultiples", kind:"block", tier:"pro", unresolved:[]});
})();