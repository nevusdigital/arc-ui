/* budget-variance (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(20192, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, {
    BudgetVariance: () => S,
    budgetDepartments: () => _,
    budgetPeriods: () => p,
    default: () => C
  });
  var s = t(95155), n = t(12115), i = t(28245), r = t(92171), l = t(25354), d = t(18310), o = t(80642), c = t(12363), m = t(7770), u = t(92218), h = t(66558), g = t(67752);
  let p = [
    {
      id: "month",
      label: "Month",
      description: "September 2026",
      phrase: "in September"
    },
    {
      id: "quarter",
      label: "Quarter",
      description: "Q3 2026, July to September",
      phrase: "in the third quarter"
    },
    {
      id: "ytd",
      label: "Year to date",
      description: "January to September 2026",
      phrase: "so far this year"
    }
  ];
  function v(e2, a2, t2, s2) {
    let n2 = Array.from({ length: 9 }, (e3, a3) => Array.isArray(t2) ? t2[a3] : t2), i2 = n2.map((e3, a3) => 10 * Math.round(e3 * s2[a3] / 10)), r2 = (e3, a3) => e3.slice(a3).reduce((e4, a4) => e4 + a4, 0);
    return {
      id: e2,
      name: a2,
      budget: { month: n2[8], quarter: r2(n2, 6), ytd: r2(n2, 0) },
      actual: { month: i2[8], quarter: r2(i2, 6), ytd: r2(i2, 0) }
    };
  }
  let _ = [
    {
      id: "engineering",
      name: "Engineering",
      owner: { name: "Nathan Cole", avatar: (0, g.my)("nathan-cole") },
      lines: [
        v(
          "eng-salaries",
          "Salaries and benefits",
          [98e4, 98e4, 995e3, 1005e3, 1005e3, 102e4, 102e4, 1035e3, 1035e3],
          [0.98, 0.97, 0.99, 0.98, 0.96, 0.97, 0.96, 0.95, 0.96]
        ),
        v(
          "eng-cloud",
          "Cloud infrastructure",
          182e3,
          [1.01, 1.03, 1.04, 1.06, 1.08, 1.11, 1.13, 1.16, 1.19]
        ),
        v(
          "eng-contractors",
          "Contractors",
          96e3,
          [0.92, 1.08, 1.12, 0.88, 0.94, 1.02, 1.06, 1.1, 0.97]
        ),
        v(
          "eng-tools",
          "Software and tools",
          48e3,
          [1, 1, 1.02, 1.02, 1.03, 1.03, 1.05, 1.05, 1.06]
        ),
        v(
          "eng-travel",
          "Travel",
          12e3,
          [0.62, 0.8, 0.74, 1.1, 0.7, 0.66, 0.58, 0.9, 1.24]
        )
      ]
    },
    {
      id: "sales",
      name: "Sales",
      owner: { name: "Tyler Hayes", avatar: (0, g.my)("tyler-hayes") },
      lines: [
        v(
          "sales-comp",
          "Salaries and commissions",
          612e3,
          [0.94, 0.97, 1.04, 0.96, 1, 1.07, 0.98, 1.02, 1.09]
        ),
        v(
          "sales-events",
          "Travel and client events",
          64e3,
          [0.78, 0.9, 1.12, 1.05, 1.14, 0.96, 0.84, 0.88, 1.18]
        ),
        v(
          "sales-tools",
          "Sales tools",
          38e3,
          [1, 1, 1, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01]
        ),
        v(
          "sales-referrals",
          "Partner referrals",
          42e3,
          [0.6, 0.72, 0.81, 0.9, 0.77, 0.95, 0.88, 1.14, 1.26]
        )
      ]
    },
    {
      id: "marketing",
      name: "Marketing",
      owner: { name: "Ava Mitchell", avatar: (0, g.my)("ava-mitchell") },
      lines: [
        v(
          "mkt-paid",
          "Paid acquisition",
          24e4,
          [0.86, 0.9, 0.95, 0.92, 0.97, 1.01, 0.88, 0.84, 0.9]
        ),
        v(
          "mkt-salaries",
          "Salaries and benefits",
          186e3,
          [0.99, 0.99, 1, 1, 0.98, 0.98, 0.97, 0.97, 0.97]
        ),
        v(
          "mkt-events",
          "Events and sponsorships",
          [6e4, 6e4, 9e4, 6e4, 6e4, 11e4, 6e4, 6e4, 14e4],
          [0.7, 0.82, 1.06, 0.74, 0.9, 1.02, 0.8, 0.96, 0.93]
        ),
        v(
          "mkt-content",
          "Content and design",
          58e3,
          [0.9, 0.94, 0.88, 1.02, 0.97, 0.91, 0.95, 0.92, 0.89]
        ),
        v(
          "mkt-tools",
          "Marketing tools",
          22e3,
          [1, 1, 1, 1, 1.04, 1.04, 1.04, 1.04, 1.04]
        )
      ]
    },
    {
      id: "customer-success",
      name: "Customer success",
      owner: { name: "Hannah Walsh", avatar: (0, g.my)("hannah-walsh") },
      lines: [
        v(
          "cs-salaries",
          "Salaries and benefits",
          292e3,
          [0.99, 1, 1, 1.01, 1.02, 1.02, 1.03, 1.03, 1.04]
        ),
        v(
          "cs-onboarding",
          "Onboarding services",
          44e3,
          [1.1, 1.14, 1.08, 1.2, 1.16, 1.22, 1.18, 1.24, 1.29]
        ),
        v(
          "cs-tools",
          "Support tooling",
          26e3,
          [1, 1, 1, 1, 1, 1.08, 1.08, 1.08, 1.08]
        ),
        v(
          "cs-training",
          "Training",
          9e3,
          [0.4, 0.66, 0.9, 0.52, 0.7, 1.1, 0.44, 0.6, 0.82]
        )
      ]
    },
    {
      id: "product",
      name: "Product and design",
      owner: { name: "Jasmine Brooks", avatar: (0, g.my)("jasmine-brooks") },
      lines: [
        v(
          "pd-salaries",
          "Salaries and benefits",
          342e3,
          [0.97, 0.98, 0.98, 0.99, 0.99, 1, 1, 1.01, 1.01]
        ),
        v(
          "pd-research",
          "Research panels",
          18e3,
          [0.7, 1.2, 0.85, 0.9, 1.3, 0.6, 0.75, 1.1, 0.88]
        ),
        v(
          "pd-tools",
          "Design tools",
          11e3,
          [1, 1, 1, 1, 1, 1, 0.96, 0.96, 0.96]
        )
      ]
    },
    {
      id: "finance-legal",
      name: "Finance and legal",
      owner: { name: "Andre Williams", avatar: (0, g.my)("andre-williams") },
      lines: [
        v(
          "fl-salaries",
          "Salaries and benefits",
          152e3,
          [1, 1, 1, 1, 1, 1, 1.01, 1.01, 1.01]
        ),
        v(
          "fl-legal",
          "Legal counsel",
          55e3,
          [0.8, 0.9, 1.6, 1.2, 0.85, 0.9, 1.4, 1.1, 1.36]
        ),
        v(
          "fl-audit",
          "Audit and tax",
          [3e4, 3e4, 9e4, 3e4, 3e4, 3e4, 3e4, 3e4, 3e4],
          [0.9, 0.95, 1.12, 0.8, 0.85, 0.9, 0.92, 0.86, 0.9]
        ),
        v(
          "fl-insurance",
          "Insurance",
          31e3,
          [1, 1, 1, 1, 1, 1, 1.03, 1.03, 1.03]
        )
      ]
    },
    {
      id: "people",
      name: "People",
      owner: { name: "Sofia Ramirez", avatar: (0, g.my)("sofia-ramirez") },
      lines: [
        v(
          "ppl-recruiting",
          "Recruiting",
          68e3,
          [0.9, 0.82, 0.76, 0.88, 0.7, 0.64, 0.72, 0.6, 0.58]
        ),
        v(
          "ppl-offsites",
          "Offsites and culture",
          [18e3, 18e3, 18e3, 18e3, 7e4, 18e3, 18e3, 18e3, 7e4],
          [0.6, 0.7, 0.8, 0.5, 1.04, 0.7, 0.66, 0.8, 1.08]
        ),
        v(
          "ppl-benefits",
          "Benefits administration",
          21e3,
          [1, 1, 1, 1, 1, 1, 1, 1, 1]
        ),
        v(
          "ppl-learning",
          "Learning budget",
          14e3,
          [0.5, 0.62, 0.8, 0.7, 0.74, 0.9, 0.66, 0.78, 0.84]
        )
      ]
    }
  ];
  var b = t(52176), f = t.n(b);
  function x(e2, a2, t2) {
    let s2 = a2 - e2, n2 = e2 > 0 ? s2 / e2 : 0, i2 = Math.abs(n2) < t2 ? "plan" : n2 > 0 ? "over" : "under";
    return {
      budget: e2,
      actual: a2,
      variance: s2,
      share: n2,
      ratio: e2 > 0 ? a2 / e2 : 0,
      tone: i2
    };
  }
  function j(e2, a2, t2 = false) {
    let s2 = Math.abs(e2), n2 = t2 && 0 !== Math.round(s2) ? e2 > 0 ? "+" : "\u2212" : "", i2 = s2 >= 999500 ? `${(s2 / 1e6).toFixed(2)}M` : s2 >= 1e3 ? `${(s2 / 1e3).toFixed(1)}k` : `${Math.round(s2)}`;
    return `${n2}${a2}${i2}`;
  }
  let w = { over: "over", under: "under", plan: "on plan" };
  function y(e2, a2, t2, s2) {
    let n2 = j(Math.abs(a2.variance), t2), i2 = "plan" === a2.tone ? "on plan" : `${n2} ${a2.tone} budget, ${Math.abs(Math.round(1e3 * a2.share) / 10).toFixed(1)}%${"over" === a2.tone ? ", unfavorable" : ", favorable"}`;
    return `${e2}: ${j(a2.actual, t2)} spent of ${j(a2.budget, t2)} ${s2}, ${i2}.`;
  }
  function N(e2, a2) {
    let t2 = (0, i.d)(e2);
    return (0, n.useEffect)(() => {
      if (a2) return void t2.jump(e2);
      let s2 = (0, r.i)(t2, e2, m.T.spring.smooth);
      return () => s2.stop();
    }, [a2, e2, t2]), t2;
  }
  function k({ value: e2, format: a2, reduce: t2, className: i2 }) {
    let r2 = (0, n.useRef)(null), [l2] = (0, n.useState)(() => a2(e2)), d2 = N(e2, t2), o2 = (0, n.useRef)(a2);
    return (0, n.useEffect)(() => {
      o2.current = a2;
    }), (0, n.useEffect)(() => {
      let e3 = (e4) => {
        r2.current && (r2.current.textContent = o2.current(e4));
      };
      return e3(d2.get()), d2.on("change", e3);
    }, [d2]), (0, s.jsx)("span", { ref: r2, className: i2, children: l2 });
  }
  function $({ ratio: e2, scaleMax: a2, ranges: t2, reduce: n2, size: i2 }) {
    let r2 = N(Math.min(e2, a2) / a2, n2), l2 = (e3) => `${Math.min(e3, a2) / a2 * 100}%`;
    return (0, s.jsxs)("span", {
      className: f().bullet,
      "data-size": i2,
      style: { "--target": l2(1) },
      "aria-hidden": "true",
      children: [
        (0, s.jsxs)("span", {
          className: f().track,
          children: [
            (0, s.jsx)("span", {
              className: f().band,
              style: { left: 0, width: l2(t2[0]) }
            }),
            (0, s.jsx)("span", {
              className: f().band,
              "data-band": "tolerance",
              style: { left: l2(t2[0]), width: `calc(${l2(t2[1])} - ${l2(t2[0])})` }
            }),
            (0, s.jsx)("span", {
              className: f().band,
              "data-band": "over",
              style: { left: l2(t2[1]), right: 0 }
            }),
            (0, s.jsx)(M, { fill: r2 }),
            (0, s.jsx)("span", {
              className: f().overClip,
              children: (0, s.jsx)(M, { fill: r2, over: true })
            })
          ]
        }),
        (0, s.jsx)("span", { className: f().tick })
      ]
    });
  }
  function M({ fill: e2, over: a2 }) {
    return (0, s.jsx)(l.PY1.span, {
      className: f().bar,
      "data-over": a2 || void 0,
      style: { scaleX: e2 }
    });
  }
  function A({ f: e2, currency: a2, threshold: t2, reduce: n2, large: i2 }) {
    return (0, s.jsxs)("span", {
      className: f().variance,
      "data-tone": e2.tone,
      "data-large": i2 || void 0,
      children: [
        (0, s.jsx)(k, {
          value: e2.variance,
          format: (e3) => j(e3, a2, true),
          reduce: n2,
          className: f().varianceAmount
        }),
        (0, s.jsx)(k, {
          value: e2.share,
          format: (e3) => {
            let a3;
            return `${a3 = Math.round(1e3 * e3) / 10, `${a3 > 0 ? "+" : a3 < 0 ? "\u2212" : ""}${Math.abs(a3).toFixed(1)}%`} ${w[Math.abs(e3) < t2 ? "plan" : e3 > 0 ? "over" : "under"]}`;
          },
          reduce: n2,
          className: f().varianceShare
        })
      ]
    });
  }
  function S({
    departments: e2 = _,
    periods: a2 = p,
    defaultPeriod: t2,
    defaultExpanded: i2 = "engineering",
    ranges: r2 = [0.9, 1.1],
    onPlanThreshold: g2 = 5e-3,
    currency: v2 = "$",
    title: b2 = "Budget vs actual",
    description: w2,
    onPeriodChange: N2,
    onDepartmentToggle: M2,
    className: C2
  }) {
    let T = (0, n.useId)(), E = !!(0, d.I)(), [z, B] = (0, n.useState)(
      () => a2.some((e3) => e3.id === t2) ? t2 : a2[0]?.id ?? ""
    ), [I, O] = (0, n.useState)(
      () => i2 && e2.some((e3) => e3.id === i2) ? i2 : null
    ), [F, D] = (0, n.useState)(""), P = (0, n.useRef)(null), R = a2.find((e3) => e3.id === z) ?? a2[0], W = (0, n.useMemo)(() => {
      let t3 = Math.max(1.2, r2[1] + 0.1);
      for (let s2 of e2)
        for (let e3 of s2.lines)
          for (let s3 of a2) {
            let a3 = e3.budget[s3.id] ?? 0;
            a3 > 0 && (t3 = Math.max(t3, (e3.actual[s3.id] ?? 0) / a3));
          }
      return Math.ceil(10 * t3 - 1e-9) / 10;
    }, [e2, a2, r2]), H = (0, n.useMemo)(
      () => e2.map((e3) => {
        let a3 = e3.lines.map((e4) => ({
          item: e4,
          f: x(e4.budget[z] ?? 0, e4.actual[z] ?? 0, g2)
        })), t3 = a3.reduce((e4, a4) => e4 + a4.f.budget, 0), s2 = a3.reduce((e4, a4) => e4 + a4.f.actual, 0);
        return { department: e3, lines: a3, f: x(t3, s2, g2) };
      }),
      [e2, g2, z]
    ), L = (0, n.useMemo)(
      () => x(
        H.reduce((e3, a3) => e3 + a3.f.budget, 0),
        H.reduce((e3, a3) => e3 + a3.f.actual, 0),
        g2
      ),
      [g2, H]
    ), q = R?.phrase ?? "", J = [0, 0.5, 1].filter((e3) => e3 <= W), Q = E ? { duration: 0 } : m.T.spring.smooth, Y = E ? { duration: 0 } : { duration: m.T.duration.exit, ease: [...m.T.ease.standard] };
    return (0, s.jsx)("section", {
      className: [f().root, C2].filter(Boolean).join(" "),
      "aria-labelledby": `${T}-title`,
      children: (0, s.jsxs)("div", {
        className: f().inner,
        children: [
          (0, s.jsxs)("header", {
            className: f().header,
            children: [
              (0, s.jsxs)("div", {
                className: f().heading,
                children: [
                  (0, s.jsx)("h2", {
                    id: `${T}-title`,
                    className: f().title,
                    children: b2
                  }),
                  (0, s.jsx)("p", {
                    className: f().description,
                    children: w2 ?? R?.description
                  })
                ]
              }),
              a2.length > 1 && (0, s.jsx)(h.A, {
                className: f().switch,
                label: "Reporting period",
                options: a2.map((e3) => ({ value: e3.id, label: e3.label })),
                value: z,
                onValueChange: (t3) => {
                  if (t3 === z) return;
                  B(t3), N2?.(t3);
                  let s2 = a2.find((e3) => e3.id === t3), n2 = 0, i3 = 0;
                  for (let a3 of e2)
                    for (let e3 of a3.lines)
                      n2 += e3.budget[t3] ?? 0, i3 += e3.actual[t3] ?? 0;
                  D(
                    s2 ? `Showing ${s2.description}. ${y("Total operating spend", x(n2, i3, g2), v2, s2.phrase)}` : ""
                  );
                }
              })
            ]
          }),
          0 === H.length ? (0, s.jsx)("p", {
            className: f().empty,
            children: "No departments have a budget for this period yet. Add a budget line to compare it with actual spend."
          }) : (0, s.jsxs)("div", {
            className: f().table,
            children: [
              (0, s.jsxs)("div", {
                className: `${f().grid} ${f().head}`,
                "aria-hidden": "true",
                children: [
                  (0, s.jsx)("span", {
                    className: f().colName,
                    children: "Department"
                  }),
                  (0, s.jsx)("span", {
                    className: f().axis,
                    style: { "--target": `${100 / W}%` },
                    children: J.map(
                      (e3) => (0, s.jsx)(
                        "span",
                        {
                          className: f().axisTick,
                          "data-edge": 0 === e3 ? "start" : void 0,
                          style: { left: `${e3 / W * 100}%` },
                          children: `${Math.round(100 * e3)}%`
                        },
                        e3
                      )
                    )
                  }),
                  (0, s.jsx)("span", {
                    className: f().colNum,
                    children: "Actual"
                  }),
                  (0, s.jsx)("span", {
                    className: f().colNum,
                    children: "Budget"
                  }),
                  (0, s.jsx)("span", {
                    className: f().colNum,
                    children: "Variance"
                  }),
                  (0, s.jsx)("span", { className: f().spacer })
                ]
              }),
              (0, s.jsxs)("div", {
                className: f().totalItem,
                children: [
                  (0, s.jsxs)("div", {
                    className: `${f().grid} ${f().total}`,
                    "aria-hidden": "true",
                    children: [
                      (0, s.jsx)("span", {
                        className: f().name,
                        children: (0, s.jsxs)("span", {
                          className: f().nameText,
                          children: [
                            (0, s.jsx)("span", {
                              className: f().primary,
                              children: "Total operating spend"
                            }),
                            (0, s.jsxs)("span", {
                              className: f().secondary,
                              "data-show": "wide",
                              children: [H.length, " departments"]
                            }),
                            (0, s.jsxs)("span", {
                              className: f().secondary,
                              "data-show": "narrow",
                              children: [
                                (0, s.jsx)(k, {
                                  value: L.actual,
                                  format: (e3) => j(e3, v2),
                                  reduce: E
                                }),
                                " of ",
                                (0, s.jsx)(k, {
                                  value: L.budget,
                                  format: (e3) => j(e3, v2),
                                  reduce: E
                                })
                              ]
                            })
                          ]
                        })
                      }),
                      (0, s.jsx)("span", {
                        className: f().chart,
                        children: (0, s.jsx)($, {
                          ratio: L.ratio,
                          scaleMax: W,
                          ranges: r2,
                          reduce: E,
                          size: "total"
                        })
                      }),
                      (0, s.jsx)(k, {
                        value: L.actual,
                        format: (e3) => j(e3, v2),
                        reduce: E,
                        className: `${f().num} ${f().lead}`
                      }),
                      (0, s.jsx)(k, {
                        value: L.budget,
                        format: (e3) => j(e3, v2),
                        reduce: E,
                        className: `${f().num} ${f().muted}`
                      }),
                      (0, s.jsx)(A, {
                        f: L,
                        currency: v2,
                        threshold: g2,
                        reduce: E,
                        large: true
                      }),
                      (0, s.jsx)("span", { className: f().spacer })
                    ]
                  }),
                  (0, s.jsx)("p", {
                    className: f().srOnly,
                    children: y("Total operating spend", L, v2, q)
                  })
                ]
              }),
              (0, s.jsx)("ul", {
                ref: P,
                className: f().list,
                children: H.map(({ department: e3, lines: a3, f: t3 }, n2) => {
                  let i3 = I === e3.id, d2 = `${T}-${e3.id}-lines`;
                  return (0, s.jsxs)(
                    "li",
                    {
                      className: f().group,
                      "data-open": i3 || void 0,
                      children: [
                        (0, s.jsx)("h3", {
                          className: f().rowHeading,
                          children: (0, s.jsxs)("button", {
                            type: "button",
                            "data-row": true,
                            className: `${f().grid} ${f().row}`,
                            "aria-expanded": i3,
                            "aria-controls": d2,
                            "aria-label": y(e3.name, t3, v2, q),
                            onClick: () => {
                              var a4;
                              let t4;
                              return t4 = I === (a4 = e3.id) ? null : a4, void (I && I !== a4 && M2?.(I, false), O(t4), M2?.(a4, t4 === a4));
                            },
                            onKeyDown: (e4) => {
                              let a4, t4, s2;
                              return t4 = (a4 = Array.from(
                                P.current?.querySelectorAll(
                                  "[data-row]"
                                ) ?? []
                              )).length - 1, void (!((s2 = "ArrowDown" === e4.key ? Math.min(t4, n2 + 1) : "ArrowUp" === e4.key ? Math.max(0, n2 - 1) : "Home" === e4.key ? 0 : "End" === e4.key ? t4 : -1) < 0) && (e4.preventDefault(), a4[s2]?.focus()));
                            },
                            children: [
                              (0, s.jsxs)("span", {
                                className: f().name,
                                children: [
                                  (0, s.jsx)(u.e, {
                                    name: e3.owner.name,
                                    src: e3.owner.avatar,
                                    size: "sm",
                                    className: f().avatar,
                                    "aria-hidden": "true"
                                  }),
                                  (0, s.jsxs)("span", {
                                    className: f().nameText,
                                    children: [
                                      (0, s.jsx)("span", {
                                        className: f().primary,
                                        children: e3.name
                                      }),
                                      (0, s.jsx)("span", {
                                        className: f().secondary,
                                        "data-show": "wide",
                                        children: e3.owner.name
                                      }),
                                      (0, s.jsxs)("span", {
                                        className: f().secondary,
                                        "data-show": "narrow",
                                        children: [
                                          (0, s.jsx)(k, {
                                            value: t3.actual,
                                            format: (e4) => j(e4, v2),
                                            reduce: E
                                          }),
                                          " of ",
                                          (0, s.jsx)(k, {
                                            value: t3.budget,
                                            format: (e4) => j(e4, v2),
                                            reduce: E
                                          })
                                        ]
                                      })
                                    ]
                                  })
                                ]
                              }),
                              (0, s.jsx)("span", {
                                className: f().chart,
                                children: (0, s.jsx)($, {
                                  ratio: t3.ratio,
                                  scaleMax: W,
                                  ranges: r2,
                                  reduce: E,
                                  size: "department"
                                })
                              }),
                              (0, s.jsx)(k, {
                                value: t3.actual,
                                format: (e4) => j(e4, v2),
                                reduce: E,
                                className: f().num
                              }),
                              (0, s.jsx)(k, {
                                value: t3.budget,
                                format: (e4) => j(e4, v2),
                                reduce: E,
                                className: `${f().num} ${f().muted}`
                              }),
                              (0, s.jsx)(A, {
                                f: t3,
                                currency: v2,
                                threshold: g2,
                                reduce: E
                              }),
                              (0, s.jsx)(c.A, {
                                className: f().chevron,
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            ]
                          })
                        }),
                        (0, s.jsx)(o.N, {
                          initial: false,
                          children: i3 && (0, s.jsx)(
                            l.PY1.div,
                            {
                              id: d2,
                              role: "region",
                              "aria-label": `${e3.name} budget lines`,
                              className: f().panel,
                              initial: { height: 0, opacity: 0 },
                              animate: {
                                height: "auto",
                                opacity: 1,
                                transition: Q
                              },
                              exit: {
                                height: 0,
                                opacity: 0,
                                transition: Y
                              },
                              children: (0, s.jsx)("ul", {
                                className: f().lines,
                                children: a3.map(
                                  ({ item: e4, f: a4 }) => (0, s.jsxs)(
                                    "li",
                                    {
                                      className: f().lineItem,
                                      children: [
                                        (0, s.jsxs)("div", {
                                          className: `${f().grid} ${f().line}`,
                                          "aria-hidden": "true",
                                          children: [
                                            (0, s.jsx)("span", {
                                              className: f().name,
                                              children: (0, s.jsxs)(
                                                "span",
                                                {
                                                  className: f().nameText,
                                                  children: [
                                                    (0, s.jsx)("span", {
                                                      className: f().primary,
                                                      children: e4.name
                                                    }),
                                                    (0, s.jsxs)("span", {
                                                      className: f().secondary,
                                                      "data-show": "narrow",
                                                      children: [
                                                        (0, s.jsx)(k, {
                                                          value: a4.actual,
                                                          format: (e5) => j(e5, v2),
                                                          reduce: E
                                                        }),
                                                        " of ",
                                                        (0, s.jsx)(k, {
                                                          value: a4.budget,
                                                          format: (e5) => j(e5, v2),
                                                          reduce: E
                                                        })
                                                      ]
                                                    })
                                                  ]
                                                }
                                              )
                                            }),
                                            (0, s.jsx)("span", {
                                              className: f().chart,
                                              children: (0, s.jsx)($, {
                                                ratio: a4.ratio,
                                                scaleMax: W,
                                                ranges: r2,
                                                reduce: E,
                                                size: "line"
                                              })
                                            }),
                                            (0, s.jsx)(k, {
                                              value: a4.actual,
                                              format: (e5) => j(e5, v2),
                                              reduce: E,
                                              className: f().num
                                            }),
                                            (0, s.jsx)(k, {
                                              value: a4.budget,
                                              format: (e5) => j(e5, v2),
                                              reduce: E,
                                              className: `${f().num} ${f().muted}`
                                            }),
                                            (0, s.jsx)(A, {
                                              f: a4,
                                              currency: v2,
                                              threshold: g2,
                                              reduce: E
                                            }),
                                            (0, s.jsx)("span", {
                                              className: f().spacer
                                            })
                                          ]
                                        }),
                                        (0, s.jsx)("span", {
                                          className: f().srOnly,
                                          children: y(e4.name, a4, v2, q)
                                        })
                                      ]
                                    },
                                    e4.id
                                  )
                                )
                              })
                            },
                            "lines"
                          )
                        })
                      ]
                    },
                    e3.id
                  );
                })
              }),
              (0, s.jsxs)("div", {
                className: f().legend,
                "aria-hidden": "true",
                children: [
                  (0, s.jsxs)("span", {
                    className: f().legendItem,
                    children: [
                      (0, s.jsx)("i", { className: f().keyBar }),
                      "Actual"
                    ]
                  }),
                  (0, s.jsxs)("span", {
                    className: f().legendItem,
                    children: [
                      (0, s.jsx)("i", { className: f().keyTick }),
                      "Budget"
                    ]
                  }),
                  (0, s.jsxs)("span", {
                    className: f().legendItem,
                    children: [
                      (0, s.jsx)("i", { className: f().keyOver }),
                      "Over budget"
                    ]
                  }),
                  (0, s.jsxs)("span", {
                    className: f().legendItem,
                    children: [
                      (0, s.jsx)("i", { className: f().keyBand }),
                      Math.round(100 * r2[0]),
                      " to ",
                      Math.round(100 * r2[1]),
                      "% of budget"
                    ]
                  })
                ]
              })
            ]
          }),
          (0, s.jsx)("p", {
            className: f().srOnly,
            role: "status",
            "aria-live": "polite",
            children: F
          })
        ]
      })
    });
  }
  let C = S;
}

__m(__module,__exports,__require);
});
A.regCss(52176, ".root{--band-under:color-mix(in oklab,var(--foreground) 6%,transparent);--band-tolerance:color-mix(in oklab,var(--foreground) 11%,transparent);--band-over:color-mix(in oklab,var(--foreground) 17%,transparent);box-sizing:border-box;width:min(100%,1100px);min-width:0;margin-inline:auto;container-type:inline-size;border:1px solid var(--border);border-radius:16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.inner{display:grid;gap:20px;padding:16px 20px 20px}\n@container (max-width: 560px){.inner{gap:16px;padding:16px}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.empty{margin:0;color:var(--text-secondary)}\n.header{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:12px 24px}\n.heading{min-width:0;flex:1 1 240px}\n.title{margin:0;font-size:var(--text-base);font-weight:500;line-height:var(--leading-body)}\n.description{margin:2px 0 0;color:var(--text-muted);font-size:var(--text-sm);font-variant-numeric:tabular-nums}\n.table{display:grid;min-width:0}\n.grid{position:relative;box-sizing:border-box;display:grid;grid-template-columns:minmax(0,1fr) auto 16px;grid-template-areas:\"name variance chevron\" \"chart chart chart\";align-items:center;gap:10px 16px;min-width:0}\n.grid>*{min-width:0}\n.grid>.name{grid-area:name}\n.grid>.chart{grid-area:chart}\n.grid>.variance{grid-area:variance}\n.grid>.chevron,.grid>.spacer{grid-area:chevron}\n.grid>.colName,.grid>.colNum,.grid>.num{display:none}\n@container (min-width: 760px){.grid{grid-template-columns:minmax(170px,1.1fr) minmax(200px,2.4fr) 84px 84px 112px 16px;grid-template-areas:none;gap:0 20px}\n.grid>.chart,.grid>.chevron,.grid>.name,.grid>.spacer,.grid>.variance,.head>.axis{grid-area:auto}\n.grid>.colName,.grid>.colNum,.grid>.num{display:block}\n.name{display:flex;align-items:center;gap:12px}\n.line .name{padding-left:40px}\n.variance{display:grid;justify-items:end;font-variant-numeric:tabular-nums;white-space:nowrap}\n.variance[data-tone=over] .varianceAmount{color:var(--danger)}\n.variance[data-tone=under] .varianceAmount{color:var(--success)}\n.variance[data-large] .varianceAmount{font-size:var(--text-base)}\n.chevron{justify-self:end;color:var(--text-muted);transition:transform var(--duration-spring) var(--ease-spring),color var(--duration-fast) var(--ease-standard)}\n.row[aria-expanded=true] .chevron{transform:rotate(180deg);color:var(--accent)}\n@media (prefers-reduced-motion:reduce){.bar,.chevron,.group,.row,.varianceAmount{transition:none}\n.head>.spacer{display:none}\n.head>.spacer,.secondary[data-show=wide]{display:block}\n.num{font-variant-numeric:tabular-nums;text-align:right;white-space:nowrap}\n.colNum{text-align:right}\n.head{grid-template-areas:\"chart chart chart\";padding:0 12px 6px;color:var(--text-muted);font-size:var(--text-xs)}\n.head>.axis{grid-area:chart}\n.head{grid-template-areas:none}\n.head,.total{padding-inline:12px}\n.axis{position:relative;display:block;height:16px;font-variant-numeric:tabular-nums}\n.axisTick{position:absolute;top:0;transform:translateX(-50%);white-space:nowrap;line-height:16px}\n.axisTick[data-edge=start]{transform:none}\n.avatar{flex:none}\n.nameText{display:grid;min-width:0}\n.primary{overflow-wrap:anywhere}\n.total .primary{font-weight:500}\n.row .primary{font-weight:500}\n.line .primary{color:var(--text-secondary)}\n.secondary{overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;text-overflow:ellipsis;white-space:nowrap}\n.secondary[data-show=wide]{display:none}\n.secondary[data-show=narrow]{display:none}\n.muted{color:var(--text-secondary)}\n.varianceAmount{color:var(--text-secondary);transition:color var(--duration-standard) var(--ease-standard)}\n.varianceShare{color:var(--text-muted);font-size:var(--text-xs)}\n.totalItem{border-bottom:1px solid var(--border-subtle);margin-bottom:6px}\n.total{padding:14px 12px}\n.lead{font-size:var(--text-base)}\n.list{display:grid;gap:2px;margin:0;padding:0;list-style:none}\n.group{border-radius:12px;background:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n.group[data-open]{background:var(--surface-muted)}\n.group[data-open] .row:focus-visible{background:color-mix(in oklab,var(--foreground) 5%,var(--surface-muted))}\n.group[data-open] .row:hover{background:color-mix(in oklab,var(--foreground) 5%,var(--surface-muted))}\n.rowHeading{margin:0;font:inherit}\n.row{width:100%;min-height:60px;padding:10px 12px;border:0;border-radius:12px;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n.row:focus-visible{background:var(--surface-muted)}\n@media (hover:hover) and (pointer:fine){.row:hover{background:var(--surface-muted)}\n.row{padding:12px}\n.panel{overflow:hidden}\n.lines{display:grid;margin:0 12px;padding:4px 0 8px;border-top:1px solid var(--border-subtle);list-style:none}\n.lineItem{position:relative}\n.line{padding:8px 0}\n.bullet{--track:14px;--bar:6px;position:relative;display:block;height:var(--track)}\n.bullet[data-size=total]{--track:18px;--bar:8px}\n.bullet[data-size=line]{--track:8px;--bar:4px}\n.bullet[data-size=line] .tick{top:-2px;bottom:-2px}\n.track{position:absolute;inset:0;overflow:hidden;border-radius:3px}\n.band{position:absolute;top:0;bottom:0;background:var(--band-under)}\n.band[data-band=tolerance]{background:var(--band-tolerance)}\n.band[data-band=over]{background:var(--band-over)}\n.bar{position:absolute;top:50%;left:0;width:100%;height:var(--bar);margin-top:calc(var(--bar) / -2);background:var(--foreground);transform-origin:0 50%;transition:background-color var(--duration-standard) var(--ease-standard)}\n.bar[data-over]{background:var(--danger)}\n.overClip{position:absolute;inset:0;clip-path:inset(0 0 0 var(--target))}\n.tick{position:absolute;top:-3px;bottom:-3px;left:var(--target);width:2px;margin-left:-1px;border-radius:1px;background:var(--foreground)}\n.legend{display:flex;flex-wrap:wrap;gap:8px 20px;padding:14px 12px 0;color:var(--text-muted);font-size:var(--text-xs)}\n.legendItem{display:inline-flex;align-items:center;gap:8px;white-space:nowrap}\n.legendItem i{display:block;flex:none}\n.keyBar,.keyOver{width:14px;height:4px;background:var(--foreground)}\n.keyOver{background:var(--danger)}\n.keyTick{width:2px;height:12px;border-radius:1px;background:var(--foreground)}\n.keyBand{width:14px;height:10px;border-radius:2px;background:var(--band-tolerance)}\n@media (pointer:coarse){.switch button{min-height:var(--control-height-md)}\n.switch{width:100%}\n.switch>div{flex:1 1 auto}\n.switch button{flex:1 1 0}", {"root":"root","inner":"inner","srOnly":"srOnly","empty":"empty","header":"header","heading":"heading","title":"title","description":"description","table":"table","grid":"grid","name":"name","chart":"chart","variance":"variance","chevron":"chevron","spacer":"spacer","colName":"colName","colNum":"colNum","num":"num","head":"head","axis":"axis","line":"line","varianceAmount":"varianceAmount","row":"row","bar":"bar","group":"group","secondary":"secondary","total":"total","axisTick":"axisTick","avatar":"avatar","nameText":"nameText","primary":"primary","muted":"muted","varianceShare":"varianceShare","totalItem":"totalItem","lead":"lead","list":"list","rowHeading":"rowHeading","panel":"panel","lines":"lines","lineItem":"lineItem","bullet":"bullet","tick":"tick","track":"track","band":"band","overClip":"overClip","legend":"legend","legendItem":"legendItem","keyBar":"keyBar","keyOver":"keyOver","keyTick":"keyTick","keyBand":"keyBand","switch":"switch"});
A.cssFor("budget-variance", [52176]);
A.item("budget-variance", {entry:20192, export:"BudgetVariance", kind:"block", tier:"pro", unresolved:[]});
})();