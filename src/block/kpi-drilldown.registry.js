/* kpi-drilldown (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(23116, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => n });
  var r = t(51811);
  let i = {
    name: "git-compare-arrows",
    size: 24,
    node: [
      ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
      ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7", key: "1yj91y" }],
      ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
      ["circle", { cx: "19", cy: "18", r: "3", key: "1qljk2" }],
      ["path", { d: "M12 18H7a2 2 0 0 1-2-2V9", key: "16sdep" }],
      ["path", { d: "m9 15 3 3-3 3", key: "1m3kbl" }]
    ]
  };
  i.node;
  let n = (0, r.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(69318, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { KpiDrilldown: () => K, default: () => Z });
  var r = t(95155), i = t(12115), n = t(80642), s = t(25354), l = t(28245), d = t(92171), o = t(18310), c = t(90467), u = t(9751), p = t(71556), h = t(9005), m = t(23116), f = t(65024), x = t(7770);
  let _ = [
    { value: "plan", label: "Plan" },
    { value: "region", label: "Region" },
    { value: "channel", label: "Channel" }
  ];
  function y(e2, a2, t2, r2, i2 = 0) {
    let n2, s2 = (n2 = e2 >>> 0, () => (n2 = 1664525 * n2 + 1013904223 >>> 0) / 4294967296), l2 = 0;
    return Array.from({ length: 180 }, (e3, n3) => {
      let d2 = n3 / 179;
      l2 = 0.82 * l2 + (s2() - 0.5) * r2;
      let o2 = i2 ? Math.sin(n3 / 7 * Math.PI * 2) * i2 : 0;
      return a2 + (t2 - a2) * (d2 * d2 * 0.35 + 0.65 * d2) + l2 + o2;
    });
  }
  let g = (e2, a2, t2, r2) => [
    { name: "Enterprise", share: 0.46, delta: e2 },
    { name: "Scale", share: 0.31, delta: a2 },
    { name: "Pro", share: 0.17, delta: t2 },
    { name: "Starter", share: 0.06, delta: r2 }
  ], b = (e2, a2, t2, r2) => [
    { name: "Europe", share: 0.41, delta: e2 },
    { name: "North America", share: 0.37, delta: a2 },
    { name: "Asia Pacific", share: 0.15, delta: t2 },
    { name: "Latin America", share: 0.07, delta: r2 }
  ], v = (e2, a2, t2, r2) => [
    { name: "Self serve", share: 0.44, delta: e2 },
    { name: "Sales led", share: 0.34, delta: a2 },
    { name: "Partners", share: 0.14, delta: t2 },
    { name: "Marketplace", share: 0.08, delta: r2 }
  ], j = [
    {
      id: "mrr",
      label: "Monthly recurring revenue",
      kind: "total",
      format: { prefix: "\u20AC", divisor: 1e3, suffix: "k", decimals: 1 },
      series: y(11, 151400, 184200, 1900, 600),
      description: "Recurring revenue from active subscriptions, before tax.",
      breakdowns: {
        plan: g(0.071, 0.064, 0.042, -0.018),
        region: b(0.082, 0.051, 0.096, 0.034),
        channel: v(0.058, 0.077, 0.049, 0.112)
      }
    },
    {
      id: "accounts",
      label: "Active accounts",
      kind: "total",
      format: { decimals: 0 },
      series: y(23, 2188, 2418, 16, 9),
      description: "Workspaces with at least one paid seat and activity this week.",
      breakdowns: {
        plan: g(0.021, 0.035, 0.038, 0.012),
        region: b(0.033, 0.028, 0.052, 0.019),
        channel: v(0.041, 0.022, 0.026, 0.064)
      }
    },
    {
      id: "nrr",
      label: "Net revenue retention",
      kind: "rate",
      format: { suffix: "%", decimals: 1 },
      series: y(37, 114.2, 118.3, 0.5),
      description: "Revenue kept from customers a year ago, including expansion.",
      breakdowns: {
        plan: g(0.031, 0.022, -8e-3, -0.024),
        region: b(0.019, 0.026, 0.014, -0.011),
        channel: v(0.012, 0.028, 0.017, 6e-3)
      }
    },
    {
      id: "churn",
      label: "Logo churn",
      kind: "rate",
      lowerIsBetter: true,
      format: { suffix: "%", decimals: 1 },
      series: y(41, 2.4, 1.9, 0.12),
      description: "Share of paying accounts that cancelled in the last 30 days.",
      breakdowns: {
        plan: g(-4e-3, -3e-3, -6e-3, 2e-3),
        region: b(-5e-3, -4e-3, 1e-3, -2e-3),
        channel: v(-6e-3, -2e-3, -3e-3, 4e-3)
      }
    },
    {
      id: "arpa",
      label: "Revenue per account",
      kind: "total",
      format: { prefix: "\u20AC", decimals: 1 },
      series: y(53, 69.2, 76.2, 0.6),
      description: "Monthly recurring revenue divided by active accounts.",
      breakdowns: {
        plan: g(0.038, 0.024, 0.011, 4e-3),
        region: b(0.029, 0.021, 0.035, 0.012),
        channel: v(0.014, 0.041, 0.022, 0.018)
      }
    },
    {
      id: "trials",
      label: "Trial conversion",
      kind: "rate",
      format: { suffix: "%", decimals: 1 },
      series: y(67, 19.8, 22.4, 0.7, 0.4),
      description: "Trials that became paid within 14 days of starting.",
      breakdowns: {
        plan: g(0.018, 0.024, 0.031, 9e-3),
        region: b(0.022, 0.017, 0.028, 6e-3),
        channel: v(0.026, 0.012, 0.019, 0.033)
      }
    }
  ];
  var k = t(79780), w = t.n(k);
  let N = [
    { value: "7", label: "7 days" },
    { value: "30", label: "30 days" },
    { value: "90", label: "90 days" }
  ], M = [
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
  ], T = x.T.spring.smooth, $ = { type: "spring", visualDuration: 0.5, bounce: 0 }, A = { duration: 0 }, L = { duration: x.T.duration.standard, ease: [...x.T.ease.standard] }, P = { duration: 0.08, ease: [...x.T.ease.standard] };
  function C(e2, a2) {
    return 1 === e2.length ? Array(a2).fill(e2[0]) : Array.from({ length: a2 }, (t2, r2) => {
      let i2 = r2 / (a2 - 1) * (e2.length - 1), n2 = Math.floor(i2), s2 = Math.min(e2.length - 1, n2 + 1);
      return e2[n2] + (e2[s2] - e2[n2]) * (i2 - n2);
    });
  }
  function S(e2, a2) {
    let t2 = a2.decimals ?? 0, r2 = e2 / (a2.divisor ?? 1);
    return `${a2.prefix ?? ""}${r2.toLocaleString("en-US", { minimumFractionDigits: t2, maximumFractionDigits: t2 })}${a2.suffix ?? ""}`;
  }
  function H(e2, a2, t2) {
    let r2 = "rate" === e2.kind ? a2 - t2 : (a2 - t2) / t2 * 100, i2 = 0.05 > Math.abs(r2), n2 = e2.lowerIsBetter ? r2 < 0 : r2 > 0, s2 = i2 ? "" : r2 > 0 ? "+" : "\u2212", l2 = Number(Math.abs(i2 ? 0 : r2).toFixed(1)), d2 = "rate" === e2.kind ? "\xA0pts" : "%";
    return {
      raw: r2,
      good: n2,
      flat: i2,
      sign: s2,
      amount: l2,
      unit: d2,
      text: `${s2}${l2.toFixed(1)}${d2}`
    };
  }
  function R(e2, a2) {
    let t2 = /* @__PURE__ */ new Date(`${e2}T12:00:00Z`);
    return t2.setUTCDate(t2.getUTCDate() - a2), `${M[t2.getUTCMonth()]} ${t2.getUTCDate()}`;
  }
  function E(e2, a2) {
    let t2 = e2.getBoundingClientRect(), r2 = a2.getBoundingClientRect();
    return {
      x: t2.left - r2.left,
      y: t2.top - r2.top,
      width: t2.width,
      height: t2.height
    };
  }
  function D(e2, a2, t2, r2, i2, n2 = 0) {
    let s2 = i2 - r2 || 1;
    return e2.map(
      (i3, l2) => `${l2 ? "L" : "M"}${(l2 / (e2.length - 1) * a2).toFixed(2)},${(n2 + (1 - (i3 - r2) / s2) * t2).toFixed(2)}`
    ).join("");
  }
  function B(e2) {
    let [a2, t2] = (0, i.useState)(0);
    return (0, i.useLayoutEffect)(() => {
      let a3 = e2.current;
      if (!a3 || (t2(a3.offsetWidth), "u" < typeof ResizeObserver)) return;
      let r2 = new ResizeObserver(() => t2(a3.offsetWidth));
      return r2.observe(a3), () => r2.disconnect();
    }, [e2]), a2;
  }
  function Y({ id: e2, children: a2, reduce: t2, className: i2 }) {
    return (0, r.jsx)("span", {
      className: `${w().swap} ${i2 ?? ""}`,
      children: (0, r.jsx)(n.N, {
        initial: false,
        children: (0, r.jsx)(
          s.PY1.span,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: t2 ? A : L },
            exit: { opacity: 0, transition: t2 ? A : P },
            children: a2
          },
          e2
        )
      })
    });
  }
  function F({ options: e2, value: a2, onChange: t2, label: n2, reduce: o2 }) {
    let c2 = (0, i.useRef)(null), u2 = (0, l.d)(0), p2 = (0, l.d)(0), h2 = (0, l.d)(0), m2 = (0, i.useRef)(false);
    return (0, i.useLayoutEffect)(() => {
      let e3 = c2.current?.querySelector('[aria-pressed="true"]');
      if (!e3) return;
      if (!m2.current || o2) {
        u2.jump(e3.offsetLeft), p2.jump(e3.offsetWidth), h2.jump(1), c2.current?.setAttribute("data-ready", ""), m2.current = true;
        return;
      }
      let a3 = (0, d.i)(u2, e3.offsetLeft, T), t3 = (0, d.i)(p2, e3.offsetWidth, T);
      return () => {
        a3.stop(), t3.stop();
      };
    }, [o2, h2, a2, p2, u2]), (0, i.useEffect)(() => {
      let e3 = c2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(() => {
        let a4 = e3.querySelector('[aria-pressed="true"]');
        !a4 || u2.isAnimating() || p2.isAnimating() || (u2.jump(a4.offsetLeft), p2.jump(a4.offsetWidth));
      });
      return a3.observe(e3), () => a3.disconnect();
    }, [p2, u2]), (0, r.jsx)("div", {
      className: w().tabs,
      role: "group",
      "aria-label": n2,
      children: (0, r.jsxs)("div", {
        ref: c2,
        className: w().tabTrack,
        children: [
          (0, r.jsx)(s.PY1.span, {
            className: w().indicator,
            style: { x: u2, width: p2, opacity: h2 },
            "aria-hidden": "true"
          }),
          e2.map(
            (e3) => (0, r.jsx)(
              "button",
              {
                type: "button",
                className: w().tab,
                "aria-pressed": e3.value === a2,
                onClick: () => t2(e3.value),
                children: e3.label
              },
              e3.value
            )
          )
        ]
      })
    });
  }
  function O({ kpi: e2, value: a2 }) {
    let {
      prefix: t2 = "",
      suffix: i2 = "",
      divisor: n2 = 1,
      decimals: s2 = 0
    } = e2.format;
    return (0, r.jsx)(f.q, {
      value: Number((a2 / n2).toFixed(s2)),
      prefix: t2,
      suffix: i2,
      decimals: s2
    });
  }
  function z({ delta: e2, label: a2, reduce: t2 }) {
    let i2 = e2.flat ? c.A : e2.raw > 0 ? u.A : p.A, n2 = e2.flat ? "flat" : e2.raw > 0 ? "up" : "down";
    return (0, r.jsxs)("span", {
      className: w().delta,
      "data-good": e2.good && !e2.flat ? "" : void 0,
      "data-flat": e2.flat ? "" : void 0,
      children: [
        (0, r.jsx)(Y, {
          id: n2,
          reduce: t2,
          className: w().deltaIcon,
          children: (0, r.jsx)(i2, { size: 13, "aria-hidden": "true" })
        }),
        (0, r.jsx)(f.q, {
          value: e2.amount,
          decimals: 1,
          prefix: e2.sign,
          suffix: e2.unit
        }),
        a2 && (0, r.jsxs)("span", { className: w().srOnly, children: [" ", a2] })
      ]
    });
  }
  function I({ values: e2, reduce: a2 }) {
    let t2 = C(e2, 40), i2 = Math.min(...t2), n2 = Math.max(...t2), l2 = D(t2, 100, 28, i2, n2, 2);
    return (0, r.jsxs)("svg", {
      className: w().spark,
      viewBox: "0 0 100 32",
      preserveAspectRatio: "none",
      "aria-hidden": "true",
      children: [
        (0, r.jsx)(s.PY1.path, {
          d: `${l2}L100,32L0,32Z`,
          className: w().sparkArea,
          initial: false,
          animate: { d: `${l2}L100,32L0,32Z` },
          transition: a2 ? A : T
        }),
        (0, r.jsx)(s.PY1.path, {
          d: l2,
          className: w().sparkLine,
          initial: false,
          animate: { d: l2 },
          transition: a2 ? A : T
        })
      ]
    });
  }
  function W(e2, a2, t2) {
    let r2 = (e3, a3) => e3 + (a3 - e3) * t2;
    return {
      a: a2.a.map((a3, t3) => r2(e2.a[t3] ?? a3, a3)),
      b: a2.b.map((a3, t3) => r2(e2.b[t3] ?? a3, a3)),
      min: r2(e2.min, a2.min),
      max: r2(e2.max, a2.max),
      pad: r2(e2.pad, a2.pad)
    };
  }
  function q({
    kpi: e2,
    current: a2,
    previous: t2,
    compare: o2,
    days: c2,
    end: u2,
    reduce: p2
  }) {
    let h2 = (0, i.useRef)(null), m2 = (0, i.useId)(), f2 = B(h2), [_2, y2] = (0, i.useState)(null), g2 = Math.max(0, f2 - 56), b2 = (0, i.useMemo)(() => {
      let e3, r2, i2, n2, s2, l2;
      return e3 = C(a2, 72), r2 = C(t2, 72), n2 = Math.min(...i2 = o2 ? [...e3, ...r2] : e3), l2 = ((s2 = Math.max(...i2)) - n2) * 0.12 || 1, { a: e3, b: r2, min: n2 - l2, max: s2 + l2, pad: l2 };
    }, [o2, a2, t2]), v2 = (0, l.d)(1), j2 = (0, i.useRef)({ from: b2, to: b2, inner: 0, format: e2.format }), k2 = (0, l.d)(""), N2 = (0, l.d)(""), M2 = (0, l.d)(""), $2 = (0, l.d)(""), L2 = (0, l.d)(""), P2 = (0, l.d)(""), H2 = (0, i.useCallback)(() => {
      let { from: e3, to: a3, inner: t3, format: r2 } = j2.current, i2 = W(e3, a3, v2.get()), n2 = D(i2.a, t3, 186, i2.min, i2.max, 10);
      k2.set(n2), N2.set(`${n2}L${t3},${196}L0,${196}Z`), M2.set(D(i2.b, t3, 186, i2.min, i2.max, 10)), $2.set(S(i2.max - i2.pad, r2)), L2.set(S((i2.max + i2.min) / 2, r2)), P2.set(S(i2.min + i2.pad, r2));
    }, [N2, M2, k2, v2, $2, P2, L2]);
    (0, i.useLayoutEffect)(() => {
      j2.current.inner = g2, j2.current.format = e2.format, H2();
    }, [g2, e2.format, H2]), (0, i.useEffect)(() => v2.on("change", H2), [H2, v2]), (0, i.useLayoutEffect)(() => {
      let e3 = j2.current;
      if (e3.from = W(e3.from, e3.to, v2.get()), e3.to = b2, p2) {
        v2.jump(1), H2();
        return;
      }
      v2.jump(0);
      let a3 = (0, d.i)(v2, 1, T);
      return () => a3.stop();
    }, [H2, v2, p2, b2]);
    let E2 = (e3) => 10 + (1 - (e3 - b2.min) / (b2.max - b2.min)) * 186, Y2 = [b2.pad, (b2.max - b2.min) / 2, b2.max - b2.min - b2.pad].map(
      (e3) => 10 + (1 - e3 / (b2.max - b2.min)) * 186
    ), F2 = null === _2 ? null : Math.round(_2 / 71 * (c2 - 1));
    function O2(e3) {
      let a3 = e3.currentTarget.getBoundingClientRect();
      y2(
        Math.round(
          71 * Math.max(0, Math.min(1, (e3.clientX - a3.left) / Math.max(1, g2)))
        )
      );
    }
    let z2 = null === _2 ? 0 : _2 / 71 * g2, I2 = `${e2.label} over the last ${c2} days, from ${S(a2[0], e2.format)} to ${S(a2[a2.length - 1], e2.format)}.`, U2 = [0, Math.floor((c2 - 1) / 2), c2 - 1];
    return (0, r.jsxs)("div", {
      ref: h2,
      className: w().chart,
      role: "img",
      "aria-label": I2,
      tabIndex: 0,
      onPointerMove: O2,
      onPointerDown: O2,
      onPointerLeave: () => y2(null),
      onKeyDown: function(e3) {
        let a3 = "ArrowRight" === e3.key ? 1 : "ArrowLeft" === e3.key ? -1 : 0;
        if ("Escape" === e3.key && null !== _2) {
          e3.stopPropagation(), y2(null);
          return;
        }
        if (!a3) return;
        e3.preventDefault();
        let t3 = 71 / Math.max(1, c2 - 1);
        y2((e4) => Math.max(0, Math.min(71, Math.round((e4 ?? 71) + a3 * t3))));
      },
      onBlur: () => y2(null),
      children: [
        f2 > 0 && (0, r.jsxs)("svg", {
          width: f2,
          height: 220,
          "aria-hidden": "true",
          children: [
            (0, r.jsx)("defs", {
              children: (0, r.jsx)("clipPath", {
                id: m2,
                children: (0, r.jsx)("rect", {
                  x: -2,
                  y: 0,
                  width: g2 + 4,
                  height: 196
                })
              })
            }),
            [$2, L2, P2].map(
              (e3, a3) => (0, r.jsxs)(
                "g",
                {
                  children: [
                    (0, r.jsx)("line", {
                      x1: 0,
                      x2: g2,
                      y1: Y2[2 - a3],
                      y2: Y2[2 - a3],
                      className: w().gridLine
                    }),
                    (0, r.jsx)(s.PY1.text, {
                      x: g2 + 10,
                      y: Y2[2 - a3] + 4,
                      className: w().axisText,
                      children: e3
                    })
                  ]
                },
                a3
              )
            ),
            (0, r.jsxs)("g", {
              clipPath: `url(#${m2})`,
              children: [
                (0, r.jsx)(s.PY1.path, { d: N2, className: w().chartArea }),
                (0, r.jsx)(s.PY1.path, {
                  d: M2,
                  className: w().chartBefore,
                  initial: false,
                  animate: { opacity: +!!o2 },
                  transition: p2 ? A : {
                    duration: x.T.duration.standard,
                    ease: [...x.T.ease.standard]
                  }
                }),
                (0, r.jsx)(s.PY1.path, { d: k2, className: w().chartLine })
              ]
            }),
            U2.map(
              (e3, a3) => (0, r.jsx)(
                G,
                {
                  text: R(u2, c2 - 1 - e3),
                  x: e3 / Math.max(1, c2 - 1) * g2,
                  anchor: 0 === a3 ? "start" : 2 === a3 ? "end" : "middle",
                  reduce: p2
                },
                a3
              )
            ),
            null !== _2 && (0, r.jsxs)("g", {
              className: w().cursor,
              children: [
                (0, r.jsx)("line", { x1: z2, x2: z2, y1: 10, y2: 196 }),
                o2 && (0, r.jsx)("circle", {
                  cx: z2,
                  cy: E2(b2.b[_2]),
                  r: 3,
                  className: w().cursorBefore
                }),
                (0, r.jsx)("circle", { cx: z2, cy: E2(b2.a[_2]), r: 3.5 })
              ]
            })
          ]
        }),
        (0, r.jsx)(n.N, {
          children: null !== _2 && null !== F2 && (0, r.jsxs)(s.PY1.div, {
            className: w().tip,
            style: { left: Math.max(70, Math.min(g2 - 70, z2)) },
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: p2 ? 0 : x.T.duration.instant },
            children: [
              (0, r.jsx)("span", { children: R(u2, c2 - 1 - F2) }),
              (0, r.jsx)("strong", { children: S(a2[F2], e2.format) }),
              o2 && (0, r.jsxs)("small", {
                children: [S(t2[F2], e2.format), " a period earlier"]
              })
            ]
          })
        })
      ]
    });
  }
  function G({ text: e2, x: a2, anchor: t2, reduce: i2 }) {
    return (0, r.jsx)(n.N, {
      initial: false,
      children: (0, r.jsx)(
        s.PY1.text,
        {
          x: a2,
          y: 214,
          className: w().axisText,
          textAnchor: t2,
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: i2 ? A : { duration: x.T.duration.fast },
          children: e2
        },
        e2
      )
    });
  }
  function U({
    kpi: e2,
    value: a2,
    dimension: t2,
    dimensions: i2,
    onDimension: n2,
    reduce: l2
  }) {
    let d2 = e2.breakdowns[t2] ?? [], o2 = i2.find((e3) => e3.value === t2)?.label ?? "Segment", c2 = "rate" === e2.kind ? "\xA0pts" : "%", {
      prefix: u2 = "",
      suffix: p2 = "",
      divisor: h2 = 1,
      decimals: m2 = 0
    } = e2.format;
    return (0, r.jsxs)("section", {
      className: w().breakdown,
      "aria-label": `${e2.label} by ${o2.toLowerCase()}`,
      children: [
        (0, r.jsxs)("div", {
          className: w().breakdownHead,
          children: [
            (0, r.jsx)("h4", { children: "Breakdown" }),
            (0, r.jsx)(F, {
              options: i2,
              value: t2,
              onChange: n2,
              label: "Break down by",
              reduce: l2
            })
          ]
        }),
        (0, r.jsxs)("table", {
          className: w().table,
          children: [
            (0, r.jsx)("thead", {
              children: (0, r.jsxs)("tr", {
                children: [
                  (0, r.jsx)("th", {
                    scope: "col",
                    className: w().nameHead,
                    children: (0, r.jsx)(Y, { id: o2, reduce: l2, children: o2 })
                  }),
                  (0, r.jsx)("th", {
                    scope: "col",
                    className: w().shareHead,
                    children: "rate" === e2.kind ? "Accounts" : "Share"
                  }),
                  (0, r.jsx)("th", {
                    scope: "col",
                    className: `${w().num} ${w().valueHead}`,
                    children: "Value"
                  }),
                  (0, r.jsx)("th", {
                    scope: "col",
                    className: `${w().num} ${w().changeHead}`,
                    children: "Change"
                  })
                ]
              })
            }),
            (0, r.jsx)("tbody", {
              children: d2.map((t3, i3) => {
                let n3 = "rate" === e2.kind ? a2 * (1 + 4 * t3.delta) : a2 * t3.share, d3 = Number((100 * t3.delta).toFixed(1)), o3 = e2.lowerIsBetter ? d3 < 0 : d3 > 0;
                return (0, r.jsxs)(
                  "tr",
                  {
                    children: [
                      (0, r.jsx)("th", {
                        scope: "row",
                        children: (0, r.jsx)(Y, {
                          id: t3.name,
                          reduce: l2,
                          children: t3.name
                        })
                      }),
                      (0, r.jsxs)("td", {
                        className: w().share,
                        children: [
                          (0, r.jsx)("span", {
                            className: w().bar,
                            children: (0, r.jsx)(s.PY1.span, {
                              initial: false,
                              animate: { scaleX: t3.share },
                              transition: l2 ? A : T
                            })
                          }),
                          (0, r.jsx)("span", {
                            className: w().percent,
                            children: (0, r.jsx)(f.q, {
                              value: Math.round(100 * t3.share),
                              suffix: "%"
                            })
                          })
                        ]
                      }),
                      (0, r.jsx)("td", {
                        className: w().num,
                        children: (0, r.jsx)(f.q, {
                          value: Number((n3 / h2).toFixed(m2)),
                          prefix: u2,
                          suffix: p2,
                          decimals: m2
                        })
                      }),
                      (0, r.jsx)("td", {
                        className: w().num,
                        children: (0, r.jsx)("span", {
                          className: w().rowDelta,
                          "data-good": o3 ? "" : void 0,
                          children: (0, r.jsx)(f.q, {
                            value: Math.abs(d3),
                            decimals: 1,
                            prefix: d3 >= 0 ? "+" : "\u2212",
                            suffix: c2
                          })
                        })
                      })
                    ]
                  },
                  i3
                );
              })
            })
          ]
        })
      ]
    });
  }
  function J({
    kpi: e2,
    origin: a2,
    bounds: t2,
    closing: n2,
    onClosed: o2,
    onClose: c2,
    onMeasure: u2,
    days: p2,
    compare: m2,
    end: f2,
    dimension: _2,
    dimensions: y2,
    onDimension: g2,
    reduce: b2
  }) {
    let v2 = (0, l.d)(b2 ? 8 : a2.x), j2 = (0, l.d)(b2 ? 8 : a2.y), k2 = (0, l.d)(b2 ? t2.width : a2.width), N2 = (0, l.d)(b2 ? t2.height : a2.height), M2 = (0, l.d)(+!b2), T2 = (0, l.d)(0), L2 = (0, i.useRef)(null), P2 = (0, i.useRef)(null), C2 = (0, i.useId)(), R2 = (0, i.useMemo)(() => e2.series.slice(-p2), [p2, e2.series]), E2 = (0, i.useMemo)(() => e2.series.slice(-(2 * p2), -p2), [p2, e2.series]), D2 = R2[R2.length - 1], B2 = E2[E2.length - 1], F2 = H(e2, D2, B2);
    return (0, i.useLayoutEffect)(() => {
      let e3 = P2.current;
      if (!e3 || (u2(e3.offsetHeight + 2), "u" < typeof ResizeObserver)) return;
      let a3 = new ResizeObserver(() => u2(e3.offsetHeight + 2));
      return a3.observe(e3), () => a3.disconnect();
    }, [u2]), (0, i.useLayoutEffect)(() => {
      if (!n2) {
        if (b2) {
          v2.jump(8), j2.jump(8), k2.jump(t2.width), N2.jump(t2.height);
          return;
        }
        (0, d.i)(v2, 8, $), (0, d.i)(j2, 8, $), (0, d.i)(k2, t2.width, $), (0, d.i)(N2, t2.height, $);
      }
    }, [t2.height, t2.width, n2, N2, b2, k2, v2, j2]), (0, i.useEffect)(() => {
      n2 || ((0, d.i)(M2, 1, { duration: b2 ? x.T.duration.fast : 0 }), (0, d.i)(T2, 1, {
        duration: b2 ? x.T.duration.fast : x.T.duration.considered,
        delay: 0.12 * !b2,
        ease: [...x.T.ease.enter]
      }), L2.current?.focus({ preventScroll: true }));
    }, [n2, T2, b2, M2]), (0, i.useEffect)(() => {
      if (!n2) return;
      if (b2) {
        let e4 = (0, d.i)(M2, 0, { duration: x.T.duration.fast });
        return e4.then(o2), () => e4.stop();
      }
      let e3 = [
        (0, d.i)(T2, 0, { duration: x.T.duration.instant }),
        (0, d.i)(v2, n2.x, $),
        (0, d.i)(j2, n2.y, $),
        (0, d.i)(k2, n2.width, $),
        (0, d.i)(N2, n2.height, $)
      ], a3 = true;
      return Promise.all(e3).then(() => {
        a3 && o2();
      }), () => {
        a3 = false, e3.forEach((e4) => e4.stop());
      };
    }, [n2, T2, N2, o2, b2, M2, k2, v2, j2]), (0, r.jsx)(s.PY1.div, {
      className: w().panel,
      role: "region",
      "aria-labelledby": C2,
      "data-closing": n2 ? "" : void 0,
      style: { x: v2, y: j2, width: k2, height: N2, opacity: M2 },
      onKeyDown: (e3) => {
        "Escape" === e3.key && (e3.preventDefault(), c2());
      },
      children: (0, r.jsxs)("div", {
        ref: P2,
        className: w().panelContent,
        style: { width: t2.width - 2 },
        children: [
          (0, r.jsxs)("div", {
            className: w().panelHead,
            children: [
              (0, r.jsxs)("div", {
                className: w().cardTop,
                children: [
                  (0, r.jsx)("h3", {
                    id: C2,
                    className: w().label,
                    children: e2.label
                  }),
                  (0, r.jsx)("button", {
                    ref: L2,
                    type: "button",
                    className: w().close,
                    onClick: c2,
                    "aria-label": "Back to overview",
                    children: (0, r.jsx)(h.A, {
                      size: 16,
                      "aria-hidden": "true"
                    })
                  })
                ]
              }),
              (0, r.jsxs)("div", {
                className: w().valueRow,
                children: [
                  (0, r.jsx)("span", {
                    className: w().value,
                    children: (0, r.jsx)(O, { kpi: e2, value: D2 })
                  }),
                  (0, r.jsx)(z, {
                    delta: F2,
                    label: `versus the previous ${p2} days`,
                    reduce: b2
                  }),
                  (0, r.jsx)(s.PY1.span, {
                    className: w().versus,
                    style: { opacity: T2 },
                    children: (0, r.jsxs)(Y, {
                      id: `${p2}`,
                      reduce: b2,
                      children: [
                        "vs ",
                        S(B2, e2.format),
                        " the ",
                        p2,
                        " days before"
                      ]
                    })
                  })
                ]
              })
            ]
          }),
          (0, r.jsxs)(s.PY1.div, {
            className: w().panelBody,
            style: { opacity: T2 },
            children: [
              (0, r.jsx)("p", {
                className: w().description,
                children: e2.description
              }),
              (0, r.jsx)(q, {
                kpi: e2,
                current: R2,
                previous: E2,
                compare: m2,
                days: p2,
                end: f2,
                reduce: b2
              }),
              (0, r.jsxs)("div", {
                className: w().legend,
                "aria-hidden": "true",
                children: [
                  (0, r.jsx)("span", {
                    className: w().legendNow,
                    children: (0, r.jsxs)(Y, {
                      id: `${p2}`,
                      reduce: b2,
                      children: ["Last ", p2, " days"]
                    })
                  }),
                  (0, r.jsx)(s.PY1.span, {
                    className: w().legendBefore,
                    initial: false,
                    animate: { opacity: +!!m2 },
                    transition: b2 ? A : { duration: x.T.duration.standard },
                    children: (0, r.jsxs)(Y, {
                      id: `${p2}`,
                      reduce: b2,
                      children: ["Previous ", p2, " days"]
                    })
                  })
                ]
              }),
              (0, r.jsx)(U, {
                kpi: e2,
                value: D2,
                dimension: _2,
                dimensions: y2,
                onDimension: g2,
                reduce: b2
              })
            ]
          })
        ]
      })
    });
  }
  function K({
    kpis: e2 = j,
    dimensions: a2 = _,
    end: t2 = "2026-09-24",
    defaultRange: c2 = "30",
    selected: u2,
    onSelectedChange: p2,
    title: h2 = "Overview",
    className: f2
  }) {
    let y2 = !!(0, o.I)(), [g2, b2] = (0, i.useState)(c2), [v2, k2] = (0, i.useState)(true), [M2, T2] = (0, i.useState)(a2[0]?.value ?? "plan"), [A2, L2] = (0, i.useState)(null), [P2, C2] = (0, i.useState)(null), [R2, D2] = (0, i.useState)(null), [Y2, W2] = (0, i.useState)(0), [q2, G2] = (0, i.useState)(0), U2 = (0, i.useRef)(null), Z2 = (0, i.useRef)(null), V = (0, i.useRef)(/* @__PURE__ */ new Map()), X = B(U2), Q = (0, l.d)(0), ee = Number(g2), ea = void 0 !== u2 ? u2 : A2;
    (0, i.useLayoutEffect)(() => {
      let e3 = Z2.current;
      if (!e3) return;
      let a3 = () => W2(e3.offsetHeight + 2 * e3.offsetTop);
      if (a3(), "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(a3);
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, i.useLayoutEffect)(
      () => Q.on("change", (e3) => {
        U2.current && (U2.current.style.minHeight = `${e3}px`);
      }),
      [Q]
    );
    let et = P2 ? Math.max(Y2, q2 + 16) : Y2;
    function er(e3) {
      void 0 === u2 && L2(e3), p2?.(e3);
    }
    (0, i.useLayoutEffect)(() => {
      if (!Y2) return;
      let e3 = P2 && !R2 ? et : Y2;
      if (y2 || 0 === Q.get()) return void Q.jump(P2 && !R2 ? e3 : Y2);
      let a3 = (0, d.i)(Q, e3, $);
      return () => a3.stop();
    }, [R2, Q, Y2, P2, et, y2]), (0, i.useEffect)(() => {
      let e3 = requestAnimationFrame(() => {
        let e4 = U2.current;
        if (ea && P2?.id === ea) {
          R2 && D2(null);
          return;
        }
        if (ea) {
          let a3 = V.current.get(ea);
          a3 && e4 && (D2(null), C2({ id: ea, origin: E(a3, e4) }));
        } else if (P2 && !R2) {
          let a3 = V.current.get(P2.id);
          a3 && e4 && D2(E(a3, e4));
        }
      });
      return () => cancelAnimationFrame(e3);
    }, [R2, P2, ea]);
    let ei = (0, i.useCallback)(() => {
      let e3 = P2?.id;
      C2(null), D2(null), e3 && requestAnimationFrame(
        () => V.current.get(e3)?.focus({ preventScroll: true })
      );
    }, [P2?.id]), en = (0, i.useCallback)((e3) => G2(e3), []), es = e2.find((e3) => e3.id === P2?.id) ?? null, el = (0, i.useMemo)(
      () => e2.map((e3) => {
        let a3 = e3.series.slice(-ee), t3 = e3.series.slice(-(2 * ee), -ee), r2 = a3[a3.length - 1];
        return {
          kpi: e3,
          current: a3,
          value: r2,
          delta: H(e3, r2, t3[t3.length - 1])
        };
      }),
      [ee, e2]
    );
    return (0, r.jsxs)("div", {
      className: `${w().root} ${f2 ?? ""}`,
      onKeyDown: (e3) => {
        "Escape" === e3.key && P2 && !R2 && (e3.preventDefault(), er(null));
      },
      children: [
        (0, r.jsxs)("header", {
          className: w().header,
          children: [
            (0, r.jsx)("h2", { children: h2 }),
            (0, r.jsxs)("div", {
              className: w().controls,
              children: [
                (0, r.jsxs)("button", {
                  type: "button",
                  className: w().compare,
                  "aria-pressed": v2,
                  onClick: () => k2((e3) => !e3),
                  children: [
                    (0, r.jsx)(m.A, { size: 14, "aria-hidden": "true" }),
                    (0, r.jsx)("span", { children: "Compare" })
                  ]
                }),
                (0, r.jsx)(F, {
                  options: N,
                  value: g2,
                  onChange: (e3) => b2(e3),
                  label: "Date range",
                  reduce: y2
                })
              ]
            })
          ]
        }),
        (0, r.jsxs)("div", {
          ref: U2,
          className: w().body,
          children: [
            (0, r.jsx)("ul", {
              ref: Z2,
              className: w().grid,
              "aria-hidden": !!P2 || void 0,
              children: el.map(
                ({ kpi: e3, current: a3, value: t3, delta: i2 }) => (0, r.jsx)(
                  "li",
                  {
                    children: (0, r.jsxs)("button", {
                      type: "button",
                      ref: (a4) => {
                        a4 ? V.current.set(e3.id, a4) : V.current.delete(e3.id);
                      },
                      className: w().card,
                      "data-hidden": P2?.id === e3.id ? "" : void 0,
                      onClick: () => er(e3.id),
                      tabIndex: P2 ? -1 : void 0,
                      "aria-label": `${e3.label}, ${S(t3, e3.format)}, ${i2.text} versus the previous ${ee} days. Open details`,
                      children: [
                        (0, r.jsx)("span", {
                          className: w().cardTop,
                          children: (0, r.jsx)("span", {
                            className: w().label,
                            children: e3.label
                          })
                        }),
                        (0, r.jsxs)("span", {
                          className: w().valueRow,
                          children: [
                            (0, r.jsx)("span", {
                              className: w().value,
                              children: (0, r.jsx)(O, { kpi: e3, value: t3 })
                            }),
                            (0, r.jsx)(z, { delta: i2, reduce: y2 })
                          ]
                        }),
                        (0, r.jsx)(I, { values: a3, reduce: y2 })
                      ]
                    })
                  },
                  e3.id
                )
              )
            }),
            (0, r.jsx)(n.N, {
              children: P2 && !R2 && (0, r.jsx)(
                s.PY1.div,
                {
                  className: w().veil,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: {
                    duration: y2 ? x.T.duration.instant : x.T.duration.standard
                  },
                  "aria-hidden": "true"
                },
                "veil"
              )
            }),
            P2 && es && X > 0 && (0, r.jsx)(J, {
              kpi: es,
              origin: P2.origin,
              bounds: { width: X - 16, height: q2 || et - 16 },
              closing: R2,
              onClosed: ei,
              onClose: () => er(null),
              onMeasure: en,
              days: ee,
              compare: v2,
              end: t2,
              dimension: M2,
              dimensions: a2,
              onDimension: T2,
              reduce: y2
            })
          ]
        })
      ]
    });
  }
  let Z = K;
}

__m(__module,__exports,__require);
});
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
A.regCss(79780, ".root{container-type:inline-size;width:min(100%,1000px);min-width:0;margin-inline:auto;border:1px solid var(--border);border-radius:16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.header{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px 16px;border-bottom:1px solid var(--border);padding:12px 16px}\n.header h2{margin:0;font-size:var(--text-sm);font-weight:500;letter-spacing:var(--tracking-body)}\n@container (max-width: 520px){.header{padding-inline:12px}\n.controls{display:flex;align-items:center;gap:8px}\n.tabs{display:inline-flex;min-width:0;flex:none;border:1px solid var(--border);border-radius:10px;background:var(--surface-muted)}\n.tabTrack{position:relative;isolation:isolate;display:flex;gap:2px;padding:3px}\n.tabTrack:not([data-ready]) .tab[aria-pressed=true]{background:var(--surface);box-shadow:inset 0 0 0 1px var(--border),var(--shadow-resting)}\n.indicator{position:absolute;z-index:-1;top:3px;bottom:3px;left:0;border:1px solid var(--border);border-radius:7px;background:var(--surface);box-shadow:var(--shadow-resting);will-change:transform,width}\n.tab{position:relative;height:26px;flex:none;border:0;border-radius:7px;padding:0 12px;background:transparent;color:var(--text-muted);font:inherit;font-size:var(--text-xs);font-weight:500;white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.tab:hover{color:var(--foreground)}\n.tab[aria-pressed=true]{color:var(--foreground)}\n@media (prefers-reduced-motion:reduce){.card,.close,.compare,.delta,.rowDelta,.tab{transition:none}\n.compare{display:inline-flex;height:34px;align-items:center;gap:6px;border:1px solid var(--border);border-radius:9px;padding:0 10px;background:var(--surface);color:var(--text-secondary);font:inherit;font-size:var(--text-xs);font-weight:500;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.compare:active{transform:scale(.97)}\n.compare[aria-pressed=true]{border-color:color-mix(in oklab,var(--accent) 40%,var(--border));background:var(--accent-subtle);color:var(--accent-strong)}\n.compare span,.shareHead,.share{display:none}\n.body{--pad:16px;position:relative;display:grid;align-content:start;min-height:580px;padding:var(--pad)}\n.body{--pad:12px}\n.grid{display:grid;min-height:calc(580px - var(--pad) * 2);grid-template-columns:repeat(3,minmax(0,1fr));grid-auto-rows:minmax(0,1fr);gap:12px;margin:0;padding:0;list-style:none}\n@container (max-width: 760px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))}\n.grid{grid-template-columns:minmax(0,1fr);grid-auto-rows:auto;gap:10px}\n.card{display:flex;width:100%;height:100%;flex-direction:column;gap:6px;border:1px solid var(--border);border-radius:14px;padding:16px;background:var(--surface);color:inherit;font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.card:active{transform:scale(.985)}\n.card[data-hidden]{visibility:hidden}\n@media (hover:hover) and (pointer:fine){.card:hover{border-color:var(--border-strong);box-shadow:var(--shadow-resting)}\n.cardTop{display:flex;min-height:20px;align-items:center;justify-content:space-between;gap:8px}\n.label{overflow:hidden;margin:0;color:var(--text-secondary);font-size:var(--text-sm);font-weight:400;line-height:20px;text-overflow:ellipsis;white-space:nowrap}\n.valueRow{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px}\n.value{font-family:var(--font-display);font-size:var(--text-2xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display);font-variant-numeric:tabular-nums}\n.value>span{font:inherit;letter-spacing:inherit}\n.value{font-size:var(--text-xl)}\n.delta{display:inline-flex;align-items:center;gap:2px;color:var(--danger);font-size:var(--text-xs);font-weight:500;font-variant-numeric:tabular-nums;white-space:nowrap;transition:color var(--duration-fast) var(--ease-standard)}\n.delta>span:not(.deltaIcon),.percent>span,.table td.num span{font:inherit;letter-spacing:inherit}\n.delta>span,.percent>span,.rowDelta span{color:inherit}\n.delta[data-good]{color:var(--success)}\n.delta[data-flat]{color:var(--text-muted)}\n.deltaIcon{width:13px;height:13px}\n.deltaIcon svg{display:block}\n.table{width:100%;table-layout:fixed;border-collapse:collapse;font-size:var(--text-sm)}\n.table td,.table th{padding:9px 12px 9px 0;text-align:left}\n.table thead th{padding-top:4px;color:var(--text-muted);font-size:var(--text-xs);font-weight:400}\n.table tbody th{overflow:hidden;font-weight:500;white-space:nowrap}\n.table tbody th .swap{display:grid}\n.table tbody th .swap>*{overflow:hidden;text-overflow:ellipsis}\n.table tbody tr>*{border-top:1px solid var(--border-subtle)}\n.table .num{padding-right:0;text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}\n.table .num+.num{padding-left:12px}\n.percent{display:inline-block;width:44px;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;text-align:right;vertical-align:middle}\n.rowDelta{color:var(--danger);transition:color var(--duration-fast) var(--ease-standard)}\n.rowDelta[data-good]{color:var(--success)}\n.spark{display:block;width:100%;min-height:44px;flex:1;margin-top:auto;padding-top:12px;overflow:visible}\n.spark{height:44px;flex:none}\n.sparkLine{fill:none;stroke:var(--accent);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke}\n.sparkArea{fill:color-mix(in oklab,var(--accent) 9%,transparent)}\n.veil{position:absolute;z-index:3;inset:0;border-radius:0 0 16px 16px;background:color-mix(in oklab,var(--surface) 70%,transparent)}\n.panel{box-sizing:border-box;position:absolute;z-index:4;top:0;left:0;overflow:hidden;border:1px solid var(--border);border-radius:14px;background:var(--surface-raised);box-shadow:var(--shadow-floating);will-change:transform;transition:background-color var(--duration-considered) var(--ease-standard),box-shadow var(--duration-considered) var(--ease-standard)}\n.panel[data-closing]{background:var(--surface);box-shadow:0 0 0 transparent}\n.panelContent{box-sizing:border-box;padding:15px 16px 16px}\n.panelHead{display:grid;gap:6px}\n.close{display:grid;width:30px;height:30px;flex:none;place-items:center;margin:-6px -6px -6px 0;border:0;border-radius:9px;background:transparent;color:var(--text-muted);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.close:hover{background:var(--surface-muted);color:var(--foreground)}\n.versus{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.swap{display:inline-grid}\n.swap>*{grid-area:1/1;white-space:nowrap}\n.panelBody{display:grid;gap:12px;margin-top:10px}\n.description{margin:0;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.chart{position:relative;margin-top:4px;cursor:crosshair;touch-action:pan-y}\n.chart svg{display:block;overflow:visible}\n.gridLine{stroke:var(--border-subtle);stroke-width:1}\n.axisText{fill:var(--text-muted);font-family:var(--font-body);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.chartArea{fill:color-mix(in oklab,var(--accent) 10%,transparent)}\n.chartLine{fill:none;stroke:var(--accent);stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}\n.chartBefore{fill:none;stroke:var(--text-muted);stroke-width:1.5;stroke-dasharray:3 4;stroke-linecap:round}\n.cursor line{stroke:var(--border-strong);stroke-width:1}\n.cursor circle{fill:var(--surface-raised);stroke:var(--accent);stroke-width:1.75}\n.cursor .cursorBefore{stroke:var(--text-muted)}\n.tip{position:absolute;top:0;z-index:2;display:grid;gap:1px;min-width:128px;transform:translateX(-50%);border:1px solid var(--border);border-radius:10px;padding:7px 10px;background:var(--surface-raised);box-shadow:var(--shadow-raised);pointer-events:none;white-space:nowrap}\n.tip small,.tip span{color:var(--text-muted);font-size:var(--text-xs)}\n.tip strong{font-size:var(--text-sm);font-weight:500;font-variant-numeric:tabular-nums}\n.legend{display:flex;gap:16px;color:var(--text-muted);font-size:var(--text-xs)}\n.legend>span{display:inline-flex;align-items:center;gap:6px}\n.legend>span:before{content:\"\";width:14px;height:0;border-top:1.75px solid var(--accent)}\n.legend .legendBefore:before{border-top:1.5px dashed var(--text-muted)}\n.breakdown{margin-top:8px;border-top:1px solid var(--border-subtle);padding-top:14px}\n.breakdownHead{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px}\n.breakdownHead h4{margin:0;font-size:var(--text-sm);font-weight:500}\n.nameHead{width:30%}\n.nameHead{width:auto}\n.valueHead{width:96px}\n.valueHead{width:76px}\n.changeHead{width:88px}\n.changeHead{width:68px}\n.share{white-space:nowrap}\n.bar{display:inline-block;width:calc(100% - 44px);height:6px;overflow:hidden;vertical-align:middle;border-radius:var(--radius-pill);background:var(--surface-muted)}\n.bar>span{display:block;height:100%;border-radius:inherit;transform-origin:left center;background:var(--accent)}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"root":"root","header":"header","controls":"controls","tabs":"tabs","tabTrack":"tabTrack","tab":"tab","indicator":"indicator","card":"card","close":"close","compare":"compare","delta":"delta","rowDelta":"rowDelta","shareHead":"shareHead","share":"share","body":"body","grid":"grid","cardTop":"cardTop","label":"label","valueRow":"valueRow","value":"value","deltaIcon":"deltaIcon","percent":"percent","table":"table","num":"num","swap":"swap","spark":"spark","sparkLine":"sparkLine","sparkArea":"sparkArea","veil":"veil","panel":"panel","panelContent":"panelContent","panelHead":"panelHead","versus":"versus","panelBody":"panelBody","description":"description","chart":"chart","gridLine":"gridLine","axisText":"axisText","chartArea":"chartArea","chartLine":"chartLine","chartBefore":"chartBefore","cursor":"cursor","cursorBefore":"cursorBefore","tip":"tip","legend":"legend","legendBefore":"legendBefore","breakdown":"breakdown","breakdownHead":"breakdownHead","nameHead":"nameHead","valueHead":"valueHead","changeHead":"changeHead","bar":"bar","srOnly":"srOnly"});
A.cssFor("kpi-drilldown", [79780]);
A.item("kpi-drilldown", {entry:69318, export:"KpiDrilldown", kind:"block", tier:"pro", unresolved:[]});
})();