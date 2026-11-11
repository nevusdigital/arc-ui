function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { StatsBand: () => y, StatsBandBlock: () => M, default: () => w });
  var s = a(95155), n = a(12115), r = a(92171), i = a(61792), l = a(66558), d = a(7770);
  let f = [{ value: 2334e3, notation: "compact", decimals: 1, label: "Deploys in the last 12 months", detail: "Across 12,400 teams", context: "Up from 1.4M the year before", visual: { kind: "trend", values: [141, 148, 139, 162, 171, 184, 196, 203, 221, 238, 257, 274] } }, { value: 99.99, decimals: 2, suffix: "%", label: "API uptime over 90 days", detail: "Measured every 30 seconds", context: "12 minutes down, 11 of them on July 14", visual: { kind: "uptime", days: Array.from({ length: 90 }, (e2, t2) => 51 === t2 ? 99.24 : 23 === t2 ? 99.93 : 100) } }, { value: 38, suffix: "ms", label: "Median response time", detail: "At the edge, worldwide", context: "p95 is 96 ms, down from 141 ms", visual: { kind: "distribution", bins: [2, 8, 18, 26, 15, 10, 7, 5, 3, 2, 1.5, 1, 0.8, 0.7, 0.5, 0.3], max: 160, marker: 38 } }, { value: 35, label: "Edge regions on six continents", detail: "Most people are under 20 ms away", context: "Eight added this year, including Lagos", visual: { kind: "map", points: [[-122.4, 37.8], [-118.2, 34], [-96.8, 32.8], [-87.6, 41.9], [-77.5, 39], [-74, 40.7], [-79.4, 43.7], [-99.1, 19.4], [-74.1, 4.7], [-77, -12], [-46.6, -23.5], [-70.7, -33.4], [-58.4, -34.6], [-0.1, 51.5], [-6.3, 53.3], [2.35, 48.9], [4.9, 52.4], [8.7, 50.1], [18, 59.3], [-3.7, 40.4], [9.2, 45.5], [21, 52.2], [3.4, 6.5], [28, -26.2], [36.8, -1.3], [55.3, 25.3], [34.8, 32.1], [72.9, 19.1], [103.8, 1.35], [114.2, 22.3], [139.7, 35.7], [127, 37.6], [106.8, -6.2], [151.2, -33.9], [174.8, -36.8]] } }], c = ["001f007f800020fc0000", "7fc0cc7f00781ffffff8", "7ffffe38c0dffffffff8", "7fff0e1003bfffffff60", "40ffcf0009bffffff0c0", "007fff801ffffffff880", "003fff0007fffffff000", "003ffc001c737fffec00", "003ff800181f7fff4800", "001ff0000f07ffff3000", "000f80001fff7fff0000", "000f00003ffb9fff0000", "000340003fffc7b80000", "0001c0003ffd82380000", "000020003ffe021c0000", "00001f001fff00100000", "00000fc001ff00010000", "00000fe001fe00028000", "00001ff800fc00080c00", "00000ff800fc00000200", "000007f800fc00003000", "000003f800fd0000fc00", "000003f000790001fe00", "000007e000780001fe00", "000007c000700001de00", "00000780000000000e00", "00000600000000000008", "00000600000000000020", "00000400000000000000", "00000400000000000000"].flatMap((e2) => [...e2].flatMap((e3) => {
    let t2 = parseInt(e3, 16);
    return [8, 4, 2, 1].map((e4) => (t2 & e4) != 0);
  }));
  var o = a(70131), u = a.n(o);
  let m = [...d.T.ease.enter], _ = "(prefers-reduced-motion: reduce)", x = (e2) => {
    let t2 = window.matchMedia(_);
    return t2.addEventListener("change", e2), () => t2.removeEventListener("change", e2);
  };
  function h({ stat: e2, run: t2, delay: a2, duration: i2, reduced: l2, locale: d2 }) {
    let f2 = (0, n.useRef)(null), c2 = (0, n.useRef)(false), { unit: o2, format: _2 } = (0, n.useMemo)(() => {
      let t3 = e2.decimals ?? 0, a3 = new Intl.NumberFormat(d2, { minimumFractionDigits: t3, maximumFractionDigits: t3, numberingSystem: "latn" });
      if ("compact" !== e2.notation) return { unit: "", format: (e3) => a3.format(e3) };
      let s2 = Math.abs(e2.value), n2 = s2 >= 1e12 ? 1e12 : s2 >= 1e9 ? 1e9 : s2 >= 1e6 ? 1e6 : s2 >= 1e3 ? 1e3 : 1;
      return { unit: 1 === n2 ? "" : new Intl.NumberFormat(d2, { notation: "compact" }).formatToParts(n2).find((e3) => "compact" === e3.type)?.value ?? "", format: (e3) => a3.format(e3 / n2) };
    }, [e2.decimals, e2.notation, e2.value, d2]), x2 = _2(e2.value), p2 = `${o2}${e2.suffix ?? ""}`;
    return (0, n.useLayoutEffect)(() => {
      l2 || c2.current || !f2.current || (f2.current.textContent = _2(0));
    }, [_2, l2]), (0, n.useEffect)(() => {
      let s2 = f2.current;
      if (!s2) return;
      if (l2) {
        s2.textContent = x2, c2.current = true;
        return;
      }
      if (!t2 || c2.current) return;
      let n2 = (0, r.i)(0, e2.value, { duration: i2, delay: a2, ease: m, onUpdate: (e3) => {
        s2.textContent = _2(e3);
      }, onComplete: () => {
        s2.textContent = x2, c2.current = true;
      } });
      return () => n2.stop();
    }, [t2, l2, e2.value, a2, i2, _2, x2]), (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)("span", { className: u().srOnly, children: [e2.prefix, x2, p2] }), (0, s.jsxs)("span", { className: u().number, "aria-hidden": "true", children: [e2.prefix && (0, s.jsx)("span", { className: u().prefix, children: e2.prefix }), (0, s.jsxs)("span", { className: u().digits, children: [(0, s.jsx)("span", { className: u().sizer, children: x2 }), (0, s.jsx)("span", { ref: f2, className: u().live, children: x2 })] }), p2 && (0, s.jsx)("span", { className: u().suffix, children: p2 })] })] });
  }
  function p({ values: e2 }) {
    let t2 = Math.min(...e2), a2 = Math.max(...e2) - t2 || 1, n2 = e2.map((s2, n3) => [e2.length > 1 ? n3 / (e2.length - 1) * 100 : 100, 36 - (s2 - t2) / a2 * 32]), r2 = n2.map(([e3, t3], a3) => `${a3 ? "L" : "M"}${e3.toFixed(2)} ${t3.toFixed(2)}`).join(" "), [i2, l2] = n2[n2.length - 1];
    return (0, s.jsxs)("div", { className: u().trend, children: [(0, s.jsxs)("svg", { className: u().draw, viewBox: "0 0 100 40", preserveAspectRatio: "none", children: [(0, s.jsx)("path", { className: u().area, d: `${r2} L100 40 L0 40 Z` }), (0, s.jsx)("path", { className: u().line, d: r2, vectorEffect: "non-scaling-stroke" })] }), (0, s.jsx)("span", { className: u().endDot, style: { left: `${i2}%`, top: `${l2 / 40 * 100}%` } })] });
  }
  function b({ days: e2 }) {
    return (0, s.jsx)("div", { className: u().bars, "data-dense": "", children: e2.map((t2, a2) => (0, s.jsx)("span", { className: u().bar, "data-ink": t2 < 100 ? "" : void 0, style: { "--j": a2 / e2.length, "--h": Math.min(1, Math.max(0.3, 1 - (100 - t2) * 0.7)) } }, a2)) });
  }
  function v({ bins: e2, max: t2, marker: a2 }) {
    let n2 = Math.max(...e2) || 1, r2 = t2 / e2.length;
    return (0, s.jsx)("div", { className: u().bars, children: e2.map((t3, i2) => (0, s.jsx)("span", { className: u().bar, "data-ink": i2 * r2 < a2 ? "" : void 0, style: { "--j": i2 / e2.length, "--h": Math.max(0.04, t3 / n2) } }, i2)) });
  }
  function j({ points: e2 }) {
    let t2 = (0, n.useMemo)(() => new Set(e2.map(([e3, t3]) => (function(e4, t4) {
      let [a2, s2] = [Math.min(79, Math.max(0, Math.floor(((e4 - -168) % 360 + 360) % 360 / 360 * 80))), Math.min(29, Math.max(0, Math.floor((76 - t4) / 132 * 30)))], n2 = 80 * s2 + a2, r2 = 1 / 0;
      for (let e5 = -2; e5 <= 2; e5++) for (let t5 = -2; t5 <= 2; t5++) {
        let i2 = a2 + t5, l2 = s2 + e5;
        if (i2 < 0 || l2 < 0 || i2 >= 80 || l2 >= 30 || !c[80 * l2 + i2]) continue;
        let d2 = t5 * t5 + e5 * e5;
        d2 < r2 && (r2 = d2, n2 = 80 * l2 + i2);
      }
      return n2;
    })(e3, t3))), [e2]);
    return (0, s.jsx)("div", { className: u().map, children: (0, s.jsxs)("svg", { className: u().draw, viewBox: "0 0 80 30", children: [c.map((e3, a2) => e3 && !t2.has(a2) && (0, s.jsx)("circle", { className: u().land, cx: a2 % 80 + 0.5, cy: Math.floor(a2 / 80) + 0.5, r: 0.3 }, a2)), [...t2].map((e3) => (0, s.jsx)("circle", { className: u().lit, cx: e3 % 80 + 0.5, cy: Math.floor(e3 / 80) + 0.5, r: 0.5 }, e3))] }) });
  }
  function g({ visual: e2 }) {
    switch (e2.kind) {
      case "trend":
        return (0, s.jsx)(p, { values: e2.values });
      case "uptime":
        return (0, s.jsx)(b, { days: e2.days });
      case "distribution":
        return (0, s.jsx)(v, { bins: e2.bins, max: e2.max, marker: e2.marker });
      case "map":
        return (0, s.jsx)(j, { points: e2.points });
    }
  }
  let y = (0, n.forwardRef)(function({ stats: e2 = f, layout: t2 = "plain", title: a2, description: r2, duration: l2 = 1.6, locale: d2 = "en-US", className: c2 }, o2) {
    let m2 = (0, n.useId)(), p2 = (0, n.useRef)(null), b2 = (0, i.W)(p2, { once: true, amount: 0.4 }), v2 = (0, n.useSyncExternalStore)(x, () => window.matchMedia(_).matches, () => false), j2 = e2.some((e3) => e3.visual);
    return (0, s.jsx)("section", { ref: o2, className: [u().band, c2].filter(Boolean).join(" "), "data-layout": t2, "data-in-view": b2 || v2 ? "" : void 0, "aria-labelledby": a2 ? `${m2}-title` : void 0, "aria-label": a2 ? void 0 : "Key numbers", children: (0, s.jsxs)("div", { className: u().inner, children: [(a2 || r2) && (0, s.jsxs)("header", { className: u().header, children: [a2 && (0, s.jsx)("h2", { id: `${m2}-title`, className: u().title, children: a2 }), r2 && (0, s.jsx)("p", { className: u().description, children: r2 })] }), (0, s.jsx)("dl", { ref: p2, className: u().stats, "data-count": Math.min(e2.length, 4), "data-visuals": j2 ? "" : void 0, style: { "--count": Math.min(e2.length, 4), "--draw": `${Math.round(420 * l2)}ms` }, children: e2.map((e3, t3) => (0, s.jsxs)("div", { className: u().stat, style: { "--i": t3 }, tabIndex: e3.context ? 0 : void 0, "data-context": e3.context && e3.detail ? "" : void 0, children: [(0, s.jsx)("dt", { className: u().label, children: e3.label }), (0, s.jsx)("dd", { className: u().figure, children: (0, s.jsx)(h, { stat: e3, run: b2, delay: 0.09 * t3, duration: l2, reduced: v2, locale: d2 }) }), (e3.detail || e3.context) && (0, s.jsxs)("dd", { className: u().caption, children: [e3.detail && (0, s.jsx)("span", { className: u().detail, children: e3.detail }), e3.context && (0, s.jsx)("span", { className: u().context, children: e3.context })] }), j2 && (0, s.jsx)("dd", { className: u().visual, "aria-hidden": "true", children: e3.visual && (0, s.jsx)(g, { visual: e3.visual }) })] }, `${e3.label}-${t3}`)) })] }) });
  });
  y.displayName = "StatsBand";
  let N = [{ value: "divided", label: "Divided" }, { value: "plain", label: "Plain" }];
  function M() {
    let [e2, t2] = (0, n.useState)("divided");
    return (0, s.jsxs)("div", { className: u().preview, children: [(0, s.jsx)(l.A, { label: "Stats layout", options: N, value: e2, onValueChange: (e3) => t2(e3) }), (0, s.jsx)("div", { className: u().frame, children: (0, s.jsx)(y, { layout: e2, title: "Fast, steady, and close to everyone", description: "Measured across every region from October 2025 to September 2026." }, e2) })] });
  }
  let w = M;
}

__m(__module,__exports,__require);
}