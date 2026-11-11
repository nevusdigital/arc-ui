/* metrics-dashboard (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(13068, function(__module,__exports,__require){
"use strict";
function __m(e, a, s) {
  "use strict";
  s.r(a), s.d(a, { MetricsDashboard: () => F, default: () => I });
  var t = s(95155), r = s(12115), i = s(18310), n = s(92171), o = s(25354), d = s(80642), l = s(64577), c = s(50825), h = s(9751), u = s(71556), m = s(7770), p = s(71068), _ = s.n(p);
  let x = [
    { key: "visitors", label: "Visitors", unit: "count" },
    { key: "signups", label: "Signups", unit: "count" },
    { key: "conversion", label: "Conversion", unit: "percent" },
    {
      key: "bounce",
      label: "Bounce rate",
      unit: "percent",
      lowerIsBetter: true
    }
  ], b = [
    { value: "7d", label: "7D", long: "Last 7 days", days: 7, step: 1 },
    { value: "30d", label: "30D", long: "Last 30 days", days: 30, step: 1 },
    { value: "90d", label: "90D", long: "Last 90 days", days: 90, step: 7 }
  ], v = new Date(2025, 8, 30);
  function g(e2, a2) {
    return 0.5 * Math.sin(0.9 * e2 + a2) + 0.35 * Math.sin(0.23 * e2 + 2 * a2) + 0.15 * Math.sin(2.1 * e2 + 3 * a2);
  }
  let j = Array.from({ length: 180 }, (e2, a2) => {
    let s2 = new Date(v.getTime() - (179 - a2) * 864e5).getDay(), t2 = Math.round(
      (620 + 4.2 * a2) * (0 === s2 || 6 === s2 ? 0.78 : 1) * (1 + 0.12 * g(a2, 1))
    ), r2 = 4.1 + 4e-3 * a2 + 0.35 * g(a2, 4);
    return {
      visitors: t2,
      signups: Math.round(t2 * r2 / 100),
      conversion: r2,
      bounce: 44 - 0.02 * a2 + 2.4 * g(a2, 7)
    };
  });
  function k(e2, a2) {
    return "visitors" === a2 || "signups" === a2 ? e2.reduce((e3, s2) => e3 + s2[a2], 0) : "conversion" === a2 ? e2.reduce((e3, a3) => e3 + a3.signups, 0) / e2.reduce((e3, a3) => e3 + a3.visitors, 0) * 100 : e2.reduce((e3, a3) => e3 + a3.bounce * a3.visitors, 0) / e2.reduce((e3, a3) => e3 + a3.visitors, 0);
  }
  let y = [
    { name: "/", share: 0.31 },
    { name: "/pricing", share: 0.17 },
    { name: "/docs/getting-started", share: 0.12 },
    { name: "/blog/usage-based-billing", share: 0.08 },
    { name: "/changelog", share: 0.05 }
  ], f = [
    { name: "Direct", share: 0.38 },
    { name: "Google", share: 0.29 },
    { name: "Hacker News", share: 0.11 },
    { name: "X", share: 0.08 },
    { name: "Newsletter", share: 0.06 }
  ], w = new Intl.NumberFormat("en-US"), N = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1
  }), M = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }), A = (e2, a2) => "percent" === e2.unit ? a2.toFixed(1) + "%" : w.format(Math.round(a2));
  function T({ value: e2, format: a2 }) {
    let s2 = (0, r.useRef)(null), o2 = (0, r.useRef)(e2), d2 = (0, r.useRef)(a2), [l2] = (0, r.useState)(() => a2(e2)), c2 = (0, i.I)();
    return (0, r.useEffect)(() => {
      d2.current = a2;
    }), (0, r.useEffect)(() => {
      let a3 = s2.current;
      if (!a3) return;
      if (c2) {
        o2.current = e2, a3.textContent = d2.current(e2);
        return;
      }
      let t2 = (0, n.i)(o2.current, e2, {
        duration: m.T.duration.considered,
        ease: m.T.ease.standard,
        onUpdate: (e3) => {
          o2.current = e3, a3.textContent = d2.current(e3);
        }
      });
      return () => t2.stop();
    }, [e2, c2]), (0, t.jsx)("span", { ref: s2, children: l2 });
  }
  function F() {
    let e2 = (0, i.I)(), a2 = (0, r.useId)(), [s2, n2] = (0, r.useState)("30d"), [p2, g2] = (0, r.useState)("visitors"), [w2, F2] = (0, r.useState)(false), [I2, L] = (0, r.useState)(null), [P, $] = (0, r.useState)(false), S = (0, r.useRef)(void 0), B = (0, r.useRef)(null), [R, C] = (0, r.useState)("lg");
    (0, r.useLayoutEffect)(() => {
      let e3 = B.current;
      if (!e3) return;
      let a3 = (e4) => C(e4 < 460 ? "sm" : e4 < 640 ? "md" : "lg");
      a3(e3.getBoundingClientRect().width);
      let s3 = new ResizeObserver(([e4]) => a3(e4.contentRect.width));
      return s3.observe(e3), () => s3.disconnect();
    }, []);
    let z = (0, r.useMemo)(
      () => (function(e3) {
        let { days: a3, step: s3 } = b.find((a4) => a4.value === e3), t2 = j.slice(180 - a3), r2 = j.slice(180 - 2 * a3, 180 - a3), i2 = {};
        for (let e4 of x) {
          let n4 = [];
          for (let i3 = 0; i3 < a3; i3 += s3) {
            let o2 = new Date(v.getTime() - (a3 - 1 - i3) * 864e5);
            n4.push({
              date: o2,
              value: k(t2.slice(i3, i3 + s3), e4.key),
              previous: k(r2.slice(i3, i3 + s3), e4.key)
            });
          }
          i2[e4.key] = n4;
        }
        let n3 = Object.fromEntries(
          x.map((e4) => {
            let a4 = k(t2, e4.key), s4 = k(r2, e4.key);
            return [
              e4.key,
              {
                value: a4,
                delta: "percent" === e4.unit ? a4 - s4 : (a4 - s4) / s4 * 100
              }
            ];
          })
        );
        return {
          series: i2,
          totals: n3,
          step: s3,
          visitors: n3.visitors.value
        };
      })(s2),
      [s2]
    ), E = x.find((e3) => e3.key === p2), Q = z.series[p2], V = b.find((e3) => e3.value === s2), H = (0, r.useMemo)(() => {
      var e3, a3;
      let s3, t2, r2, i2, n3, o2 = Q.flatMap((e4) => w2 ? [e4.value, e4.previous] : [e4.value]), d2 = (e3 = Math.min(...o2), a3 = Math.max(...o2), s3 = "percent" === E.unit ? Math.max(0, e3 - (a3 - e3) * 0.6) : 0, t2 = (a3 - s3 || 1) / 3, r2 = 10 ** Math.floor(Math.log10(t2)), {
        min: n3 = Math.floor(
          s3 / (i2 = [1, 2, 2.5, 5, 10].map((e4) => e4 * r2).find((e4) => e4 >= t2) ?? t2)
        ) * i2,
        max: n3 + 3 * i2,
        ticks: [0, 1, 2, 3].map((e4) => n3 + i2 * e4)
      }), l2 = (e4) => 1 === Q.length ? 300 : e4 / (Q.length - 1) * 600, c2 = (e4) => 180 - (e4 - d2.min) / (d2.max - d2.min) * 180, h2 = (e4) => (function(e5) {
        if (e5.length < 3)
          return e5.map(
            ([e6, a5], s5) => (s5 ? "L" : "M") + e6.toFixed(1) + " " + a5.toFixed(1)
          ).join(" ");
        let a4 = e5.length, s4 = e5.slice(1).map(([a5, s5], t4) => (s5 - e5[t4][1]) / (a5 - e5[t4][0])), t3 = e5.map((e6, t4) => {
          if (0 === t4) return s4[0];
          if (t4 === a4 - 1) return s4[a4 - 2];
          let r4 = s4[t4 - 1], i3 = s4[t4];
          return r4 * i3 <= 0 ? 0 : 2 * r4 * i3 / (r4 + i3);
        }), r3 = `M${e5[0][0].toFixed(1)} ${e5[0][1].toFixed(1)}`;
        for (let s5 = 0; s5 < a4 - 1; s5++) {
          let [a5, i3] = e5[s5], [n4, o3] = e5[s5 + 1], d3 = (n4 - a5) / 3;
          r3 += ` C${(a5 + d3).toFixed(1)} ${(i3 + t3[s5] * d3).toFixed(1)} ${(n4 - d3).toFixed(1)} ${(o3 - t3[s5 + 1] * d3).toFixed(1)} ${n4.toFixed(1)} ${o3.toFixed(1)}`;
        }
        return r3;
      })(Q.map((a4, s4) => [l2(s4), c2(a4[e4])])), u2 = h2("value");
      return {
        scale: d2,
        x: l2,
        y: c2,
        current: u2,
        previous: h2("previous"),
        area: u2 + " L600 180 L0 180 Z"
      };
    }, [Q, w2, E.unit]), Y = Math.ceil(Q.length / ("sm" === R ? 4 : "md" === R ? 5 : 6)), U = null === I2 ? null : Q[I2];
    function q(e3) {
      let a3 = e3.currentTarget.getBoundingClientRect();
      L(
        Math.round(
          Math.min(1, Math.max(0, (e3.clientX - a3.left) / a3.width)) * (Q.length - 1)
        )
      );
    }
    (0, r.useEffect)(() => () => window.clearTimeout(S.current), []);
    let K = e2 ? { duration: 0 } : { duration: m.T.duration.fast, ease: m.T.ease.standard }, X = e2 ? { duration: 0 } : m.T.spring.smooth, J = U ? Math.min(88, Math.max(12, H.x(I2) / 600 * 100)) : 0;
    return (0, t.jsxs)("section", {
      ref: B,
      className: _().dashboard,
      "data-size": R,
      "aria-label": "Analytics dashboard",
      children: [
        (0, t.jsxs)("header", {
          className: _().header,
          children: [
            (0, t.jsxs)("div", {
              className: _().title,
              children: [
                (0, t.jsx)("h2", { children: "Analytics" }),
                (0, t.jsxs)("p", { children: ["example.com \xB7 ", V.long] })
              ]
            }),
            (0, t.jsxs)("div", {
              className: _().actions,
              children: [
                (0, t.jsx)("div", {
                  className: _().segmented,
                  role: "group",
                  "aria-label": "Time range",
                  children: b.map(
                    (r2) => (0, t.jsxs)(
                      "button",
                      {
                        type: "button",
                        "aria-pressed": s2 === r2.value,
                        "aria-label": r2.long,
                        onClick: () => {
                          n2(r2.value), L(null);
                        },
                        children: [
                          s2 === r2.value && (0, t.jsx)(o.PY1.span, {
                            layoutId: `${a2}-range`,
                            className: _().segmentThumb,
                            transition: e2 ? { duration: 0 } : m.T.spring.snappy
                          }),
                          (0, t.jsx)("span", {
                            className: _().segmentLabel,
                            children: r2.label
                          })
                        ]
                      },
                      r2.value
                    )
                  )
                }),
                (0, t.jsxs)("button", {
                  type: "button",
                  className: _().exportButton,
                  onClick: function() {
                    $(true), window.clearTimeout(S.current), S.current = window.setTimeout(() => $(false), 1800);
                  },
                  "aria-live": "polite",
                  children: [
                    (0, t.jsx)("span", {
                      className: _().exportIcon,
                      children: (0, t.jsx)(d.N, {
                        initial: false,
                        mode: "popLayout",
                        children: (0, t.jsx)(
                          o.PY1.span,
                          {
                            initial: !e2 && { opacity: 0, scale: 0.8 },
                            animate: { opacity: 1, scale: 1 },
                            exit: e2 ? { opacity: 0 } : { opacity: 0, scale: 0.8 },
                            transition: K,
                            children: P ? (0, t.jsx)(l.A, { size: 14 }) : (0, t.jsx)(c.A, { size: 14 })
                          },
                          P ? "done" : "idle"
                        )
                      })
                    }),
                    (0, t.jsxs)("span", {
                      className: _().exportLabel,
                      children: [
                        (0, t.jsx)("span", {
                          "aria-hidden": P,
                          "data-hidden": P,
                          children: "Export"
                        }),
                        (0, t.jsx)("span", {
                          "aria-hidden": !P,
                          "data-hidden": !P,
                          children: "Exported"
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, t.jsx)("div", {
          className: _().kpis,
          role: "tablist",
          "aria-label": "Metric",
          children: x.map((s3) => {
            let r2 = z.totals[s3.key], i2 = s3.lowerIsBetter ? r2.delta < 0 : r2.delta > 0, n3 = p2 === s3.key, d2 = "percent" === s3.unit ? Math.abs(r2.delta).toFixed(1) + " pts" : Math.abs(r2.delta).toFixed(1) + "%";
            return (0, t.jsxs)(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": n3,
                className: _().kpi,
                onClick: () => {
                  g2(s3.key), L(null);
                },
                children: [
                  n3 && (0, t.jsx)(o.PY1.span, {
                    layoutId: `${a2}-kpi`,
                    className: _().kpiIndicator,
                    transition: e2 ? { duration: 0 } : m.T.spring.smooth
                  }),
                  (0, t.jsx)("span", {
                    className: _().kpiLabel,
                    children: s3.label
                  }),
                  (0, t.jsx)("span", {
                    className: _().kpiValue,
                    children: (0, t.jsx)(T, {
                      value: r2.value,
                      format: (e3) => A(s3, e3)
                    })
                  }),
                  (0, t.jsxs)("span", {
                    className: `${_().delta} ${i2 ? _().good : _().bad}`,
                    children: [
                      r2.delta >= 0 ? (0, t.jsx)(h.A, { size: 13, "aria-hidden": true }) : (0, t.jsx)(u.A, { size: 13, "aria-hidden": true }),
                      (0, t.jsx)("span", { children: d2 }),
                      (0, t.jsxs)("span", {
                        className: _().srOnly,
                        children: [
                          r2.delta >= 0 ? "up" : "down",
                          " versus previous period"
                        ]
                      })
                    ]
                  })
                ]
              },
              s3.key
            );
          })
        }),
        (0, t.jsxs)("div", {
          className: _().chartSection,
          children: [
            (0, t.jsxs)("div", {
              className: _().chartBar,
              children: [
                (0, t.jsxs)("div", {
                  className: _().legend,
                  "aria-hidden": true,
                  children: [
                    (0, t.jsxs)("span", {
                      children: [
                        (0, t.jsx)("i", { className: _().swatch }),
                        E.label
                      ]
                    }),
                    w2 && (0, t.jsxs)("span", {
                      children: [
                        (0, t.jsx)("i", { className: _().swatchPrevious }),
                        "Previous period"
                      ]
                    })
                  ]
                }),
                (0, t.jsxs)("label", {
                  className: _().compare,
                  children: [
                    (0, t.jsx)("input", {
                      type: "checkbox",
                      checked: w2,
                      onChange: (e3) => F2(e3.target.checked)
                    }),
                    (0, t.jsx)("span", {
                      className: _().check,
                      "aria-hidden": true,
                      children: (0, t.jsx)(l.A, { size: 11, strokeWidth: 2.5 })
                    }),
                    "Compare"
                  ]
                })
              ]
            }),
            (0, t.jsxs)("div", {
              className: _().plot,
              children: [
                (0, t.jsx)("div", {
                  className: _().yAxis,
                  "aria-hidden": true,
                  children: [...H.scale.ticks].reverse().map(
                    (e3) => (0, t.jsx)(
                      "span",
                      {
                        children: "percent" === E.unit ? e3.toFixed(+(e3 < 10)) + "%" : N.format(e3)
                      },
                      e3
                    )
                  )
                }),
                (0, t.jsxs)("div", {
                  className: _().chartArea,
                  tabIndex: 0,
                  role: "img",
                  "aria-label": `${E.label}, ${V.long.toLowerCase()}. Use arrow keys to inspect values.`,
                  onPointerMove: q,
                  onPointerDown: q,
                  onPointerLeave: (e3) => {
                    "mouse" === e3.pointerType && L(null);
                  },
                  onKeyDown: function(e3) {
                    if ("ArrowLeft" !== e3.key && "ArrowRight" !== e3.key && "Home" !== e3.key && "End" !== e3.key)
                      return;
                    e3.preventDefault();
                    let a3 = Q.length - 1;
                    L(
                      (s3) => "Home" === e3.key ? 0 : "End" === e3.key ? a3 : Math.min(
                        a3,
                        Math.max(
                          0,
                          (s3 ?? a3) + ("ArrowRight" === e3.key ? 1 : -1)
                        )
                      )
                    );
                  },
                  onBlur: () => L(null),
                  children: [
                    (0, t.jsx)("div", {
                      className: _().grid,
                      "aria-hidden": true,
                      children: H.scale.ticks.map(
                        (e3) => (0, t.jsx)("span", {}, e3)
                      )
                    }),
                    (0, t.jsx)(d.N, {
                      initial: false,
                      children: (0, t.jsxs)(
                        o.PY1.svg,
                        {
                          className: _().svg,
                          viewBox: "0 0 600 180",
                          preserveAspectRatio: "none",
                          "aria-hidden": true,
                          initial: !e2 && { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: { opacity: 0 },
                          transition: {
                            duration: e2 ? 0 : m.T.duration.standard,
                            ease: m.T.ease.standard
                          },
                          children: [
                            (0, t.jsx)(o.PY1.path, {
                              className: _().area,
                              initial: false,
                              animate: { d: H.area },
                              transition: X
                            }),
                            (0, t.jsx)(o.PY1.path, {
                              className: _().previous,
                              initial: false,
                              animate: { d: H.previous, opacity: +!!w2 },
                              transition: X
                            }),
                            (0, t.jsx)(o.PY1.path, {
                              className: _().line,
                              initial: false,
                              animate: { d: H.current },
                              transition: X
                            })
                          ]
                        },
                        s2 + p2
                      )
                    }),
                    U && (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("span", {
                          className: _().crosshair,
                          style: { left: `${H.x(I2) / 600 * 100}%` },
                          "aria-hidden": true
                        }),
                        (0, t.jsx)("span", {
                          className: _().dot,
                          style: {
                            left: `${H.x(I2) / 600 * 100}%`,
                            top: `${H.y(U.value) / 180 * 100}%`
                          },
                          "aria-hidden": true
                        }),
                        (0, t.jsxs)("div", {
                          className: _().tooltip,
                          style: {
                            left: `${J}%`,
                            ...H.y(U.value) / 180 < 0.5 ? { top: "auto", bottom: 6 } : null
                          },
                          role: "status",
                          children: [
                            (0, t.jsxs)("span", {
                              className: _().tooltipDate,
                              children: [
                                z.step > 1 ? "Week of " : "",
                                M.format(U.date)
                              ]
                            }),
                            (0, t.jsx)("strong", { children: A(E, U.value) }),
                            w2 && (0, t.jsxs)("span", {
                              className: _().tooltipPrevious,
                              children: [A(E, U.previous), " previous"]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                (0, t.jsx)("div", {
                  className: _().xAxis,
                  "aria-hidden": true,
                  children: Q.map((e3, a3) => {
                    if (a3 % Y != 0) return null;
                    let s3 = H.x(a3) / 600 * 100;
                    return (0, t.jsx)(
                      "span",
                      {
                        style: {
                          left: `${s3}%`,
                          transform: `translateX(${0 === a3 ? 0 : s3 > 92 ? -100 : -50}%)`
                        },
                        children: M.format(e3.date)
                      },
                      a3
                    );
                  })
                })
              ]
            })
          ]
        }),
        (0, t.jsxs)("div", {
          className: _().breakdowns,
          children: [
            (0, t.jsx)(D, {
              title: "Top pages",
              column: "Visitors",
              rows: y,
              total: z.visitors,
              reduce: !!e2
            }),
            (0, t.jsx)(D, {
              title: "Sources",
              column: "Visitors",
              rows: f,
              total: z.visitors,
              reduce: !!e2
            })
          ]
        })
      ]
    });
  }
  function D({ title: e2, column: a2, rows: s2, total: r2, reduce: i2 }) {
    let n2 = Math.max(...s2.map((e3) => e3.share));
    return (0, t.jsxs)("section", {
      className: _().breakdown,
      "aria-label": e2,
      children: [
        (0, t.jsxs)("div", {
          className: _().breakdownHead,
          children: [
            (0, t.jsx)("h3", { children: e2 }),
            (0, t.jsx)("span", { children: a2 })
          ]
        }),
        (0, t.jsx)("ul", {
          children: s2.map(
            (e3) => (0, t.jsxs)(
              "li",
              {
                children: [
                  (0, t.jsx)("span", {
                    className: _().bar,
                    style: {
                      clipPath: `inset(0 ${(100 - e3.share / n2 * 100).toFixed(2)}% 0 0 round 6px)`,
                      transitionDuration: i2 ? "0ms" : void 0
                    },
                    "aria-hidden": true
                  }),
                  (0, t.jsx)("span", {
                    className: _().rowName,
                    title: e3.name,
                    children: e3.name
                  }),
                  (0, t.jsx)("span", {
                    className: _().rowValue,
                    children: (0, t.jsx)(T, {
                      value: r2 * e3.share,
                      format: (e4) => w.format(Math.round(e4))
                    })
                  })
                ]
              },
              e3.name
            )
          )
        })
      ]
    });
  }
  let I = F;
}

__m(__module,__exports,__require);
});
A.regCss(71068, ".dashboard{box-sizing:border-box;width:min(100%,1100px);min-width:0;overflow:hidden;border:1px solid var(--border);border-radius:16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.dashboard *,.dashboard :after,.dashboard :before{box-sizing:border-box}\n.dashboard button{font:inherit;letter-spacing:inherit;cursor:pointer}\n.dashboard:is([data-size=md],[data-size=sm]) .kpis{grid-template-columns:repeat(2,minmax(0,1fr))}\n.dashboard:is([data-size=md],[data-size=sm]) .kpi{padding:12px 16px;border-left:0}\n.dashboard:is([data-size=md],[data-size=sm]) .kpi:nth-child(2n){border-left:1px solid var(--border)}\n.dashboard:is([data-size=md],[data-size=sm]) .kpi:nth-child(n+3){border-top:1px solid var(--border)}\n.dashboard:is([data-size=md],[data-size=sm]) .breakdowns{grid-template-columns:1fr}\n.dashboard:is([data-size=md],[data-size=sm]) .breakdown+.breakdown{border-top:1px solid var(--border);border-left:0}\n.dashboard[data-size=sm] .chartSection,.dashboard[data-size=sm] .header{padding-inline:16px}\n.dashboard[data-size=sm] .breakdown{padding-inline:12px}\n.dashboard[data-size=sm] .actions,.dashboard[data-size=sm] .segmented{flex:1}\n.dashboard[data-size=sm] .actions{width:100%}\n.dashboard[data-size=sm] .segmented button{flex:1}\n.dashboard[data-size=sm] .kpiValue{font-size:var(--text-lg)}\n.dashboard[data-size=sm] .plot{grid-template-rows:168px 24px}\n@media (prefers-reduced-motion:reduce){.dashboard *,.dashboard :after,.dashboard :before{transition-duration:0s!important}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.header{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px 16px;padding:16px 20px}\n.title{min-width:0}\n.title h2{margin:0;font:500 var(--text-base)/var(--leading-body) var(--font-body);letter-spacing:var(--tracking-body)}\n.title p{margin:2px 0 0;color:var(--text-muted);font-size:var(--text-sm)}\n.actions{display:flex;align-items:center;gap:8px}\n.segmented{display:inline-flex;height:32px;padding:2px;border:1px solid var(--border);border-radius:10px;background:var(--surface-muted)}\n.segmented button{position:relative;min-width:40px;padding:0 10px;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);font-size:var(--text-xs);font-weight:500;font-variant-numeric:tabular-nums;transition:color var(--duration-fast) var(--ease-standard)}\n.segmented button[aria-pressed=true]{color:var(--foreground)}\n@media (hover:hover) and (pointer:fine){.segmented button:hover{color:var(--foreground)}\n.segmentThumb{position:absolute;inset:0;border-radius:inherit;background:var(--surface);box-shadow:0 1px 2px oklch(0 0 0/.08),0 0 0 1px var(--border-subtle)}\n.segmentLabel{position:relative}\n.exportButton{display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 12px 0 10px;border:1px solid var(--border);border-radius:10px;background:var(--surface);color:var(--foreground);font-size:var(--text-sm);font-weight:500;transition:background-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.exportButton:hover{background:var(--surface-muted)}\n.exportButton:active{transform:scale(.97)}\n.exportIcon{display:grid;width:14px;height:14px;color:var(--text-secondary)}\n.exportIcon>span{display:grid;grid-area:1/1}\n.exportLabel{display:grid}\n.exportLabel>span{grid-area:1/1;transition:opacity var(--duration-fast) var(--ease-standard)}\n.exportLabel>span[data-hidden=true]{opacity:0}\n.kpis{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-top:1px solid var(--border);border-bottom:1px solid var(--border)}\n.kpi{position:relative;display:grid;gap:2px;min-width:0;padding:14px 16px 14px 20px;border:0;background:transparent;color:inherit;text-align:left;transition:background-color var(--duration-fast) var(--ease-standard)}\n.kpi+.kpi{border-left:1px solid var(--border);padding-left:16px}\n@media (hover:hover) and (pointer:fine){.kpi:hover{background:var(--surface-muted)}\n.kpi[aria-selected=true]{background:transparent}\n.kpi[aria-selected=true] .kpiLabel{color:var(--foreground)}\n.kpiIndicator{position:absolute;right:0;bottom:-1px;left:0;z-index:1;height:2px;background:var(--accent)}\n.kpiLabel{overflow:hidden;color:var(--text-secondary);font-size:var(--text-sm);text-overflow:ellipsis;white-space:nowrap}\n.kpiValue{font:500 var(--text-xl)/1.3 var(--font-body);letter-spacing:var(--tracking-body);font-variant-numeric:tabular-nums;white-space:nowrap}\n.delta{display:inline-flex;align-items:center;gap:2px;font-size:var(--text-xs);font-variant-numeric:tabular-nums;white-space:nowrap}\n.good{color:var(--success)}\n.bad{color:var(--danger)}\n.chartSection{padding:16px 20px 12px}\n.chartBar{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:24px}\n.legend{display:flex;flex-wrap:wrap;gap:4px 14px;color:var(--text-secondary);font-size:var(--text-xs)}\n.legend span{display:inline-flex;align-items:center;gap:6px}\n.swatchPrevious,.swatch{width:10px;height:2px;border-radius:1px;background:var(--accent)}\n.swatchPrevious{background:repeating-linear-gradient(90deg,var(--text-muted) 0 3px,transparent 3px 5px)}\n.compare{position:relative;display:inline-flex;align-items:center;gap:6px;color:var(--text-secondary);font-size:var(--text-xs);cursor:pointer;user-select:none}\n.compare input{position:absolute;opacity:0;pointer-events:none}\n.compare input:checked+.check{border-color:var(--control-on);background:var(--control-on);color:var(--control-glyph)}\n.check{display:grid;place-items:center;width:14px;height:14px;border:1px solid var(--border-strong);border-radius:4px;background:var(--surface);color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.plot{display:grid;grid-template-columns:auto minmax(0,1fr);grid-template-rows:200px 24px;column-gap:10px;margin-top:12px}\n.yAxis{display:flex;flex-direction:column;justify-content:space-between;margin:-6px 0;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;text-align:right}\n.chartArea{position:relative;min-width:0;touch-action:pan-y;cursor:crosshair}\n.grid{position:absolute;inset:0;display:flex;flex-direction:column-reverse;justify-content:space-between;pointer-events:none}\n.grid span{height:1px;background:var(--border-subtle)}\n.grid span:first-child{background:var(--border)}\n.svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}\n.area{fill:var(--accent);fill-opacity:.07}\n.line,.previous{fill:none;stroke-linecap:round;stroke-linejoin:round;vector-effect:non-scaling-stroke}\n.line{stroke:var(--accent);stroke-width:1.75}\n.previous{stroke:var(--text-muted);stroke-width:1.25;stroke-dasharray:3 3}\n.crosshair{position:absolute;top:0;bottom:0;width:1px;background:var(--border-strong);pointer-events:none;transform:translateX(-.5px)}\n.dot{position:absolute;width:9px;height:9px;border:2px solid var(--accent);border-radius:50%;background:var(--surface);pointer-events:none;transform:translate(-50%,-50%)}\n.tooltip{position:absolute;top:6px;display:grid;gap:1px;min-width:96px;padding:7px 10px;border:1px solid var(--border);border-radius:10px;background:var(--surface-raised);box-shadow:var(--shadow-raised);pointer-events:none;transform:translateX(-50%);white-space:nowrap}\n.tooltip strong{font:500 var(--text-sm)/1.3 var(--font-body);font-variant-numeric:tabular-nums}\n.tooltipDate,.tooltipPrevious{color:var(--text-muted);font-size:var(--text-xs)}\n.xAxis{position:relative;grid-column:2;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.xAxis span{position:absolute;top:7px;transform:translateX(-50%);white-space:nowrap}\n.breakdowns{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));border-top:1px solid var(--border)}\n.breakdown{min-width:0;padding:14px 20px 16px}\n.breakdown+.breakdown{border-left:1px solid var(--border)}\n.breakdown ul{display:grid;gap:2px;margin:0;padding:0;list-style:none}\n.breakdown li{position:relative;display:flex;align-items:center;justify-content:space-between;gap:12px;height:30px;padding:0 8px;font-size:var(--text-sm)}\n.breakdownHead{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:6px;padding-inline:8px}\n.breakdownHead h3{margin:0;font:500 var(--text-sm)/var(--leading-body) var(--font-body);letter-spacing:var(--tracking-body)}\n.breakdownHead span{color:var(--text-muted);font-size:var(--text-xs)}\n.bar{position:absolute;inset:0;border-radius:6px;background:color-mix(in oklab,var(--accent) 8%,var(--surface));transition:clip-path var(--duration-considered) var(--ease-standard)}\n.rowName{position:relative;min-width:0;overflow:hidden;color:var(--foreground);text-overflow:ellipsis;white-space:nowrap}\n.rowValue{position:relative;flex:none;color:var(--text-secondary);font-variant-numeric:tabular-nums}", {"dashboard":"dashboard","kpis":"kpis","kpi":"kpi","breakdowns":"breakdowns","breakdown":"breakdown","chartSection":"chartSection","header":"header","actions":"actions","segmented":"segmented","kpiValue":"kpiValue","plot":"plot","srOnly":"srOnly","title":"title","segmentThumb":"segmentThumb","segmentLabel":"segmentLabel","exportButton":"exportButton","exportIcon":"exportIcon","exportLabel":"exportLabel","kpiLabel":"kpiLabel","kpiIndicator":"kpiIndicator","delta":"delta","good":"good","bad":"bad","chartBar":"chartBar","legend":"legend","swatchPrevious":"swatchPrevious","swatch":"swatch","compare":"compare","check":"check","yAxis":"yAxis","chartArea":"chartArea","grid":"grid","svg":"svg","area":"area","line":"line","previous":"previous","crosshair":"crosshair","dot":"dot","tooltip":"tooltip","tooltipDate":"tooltipDate","tooltipPrevious":"tooltipPrevious","xAxis":"xAxis","breakdownHead":"breakdownHead","bar":"bar","rowName":"rowName","rowValue":"rowValue"});
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
A.cssFor("metrics-dashboard", [71068]);
A.item("metrics-dashboard", {entry:13068, export:"MetricsDashboard", kind:"block", tier:"pro", unresolved:[]});
})();