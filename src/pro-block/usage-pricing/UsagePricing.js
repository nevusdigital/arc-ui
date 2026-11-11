function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { UsagePricing: () => P, default: () => A });
  var i = t(95155), n = t(12115), r = t(18310), s = t(80642), l = t(25354), o = t(64577), d = t(65024), c = t(51288), u = t(66558), p = t(94274), m = t(98344), h = t(7770), _ = t(69148), g = t.n(_);
  let { spring: y, duration: f, ease: x } = h.T, b = [...x.enter], j = [...x.standard], v = [
    1,
    2,
    3,
    4,
    5,
    6,
    8,
    10,
    12,
    15,
    18,
    20,
    25,
    30,
    35,
    40,
    45,
    50,
    60,
    75,
    100,
    150,
    200
  ], N = [
    0.1,
    0.25,
    0.5,
    0.75,
    1,
    1.25,
    1.5,
    2,
    2.5,
    3,
    4,
    5,
    6,
    7.5,
    10,
    12.5,
    15,
    20,
    25,
    30,
    40,
    50,
    60,
    75,
    100,
    150,
    200
  ], w = [
    {
      name: "Starter",
      seat: { monthly: 12, yearly: 10 },
      seatLimit: 5,
      included: 1,
      requestLimit: 2,
      perMillion: 8
    },
    {
      name: "Growth",
      seat: { monthly: 24, yearly: 20 },
      seatLimit: 40,
      included: 10,
      requestLimit: 25,
      perMillion: 4
    },
    {
      name: "Scale",
      seat: { monthly: 38, yearly: 32 },
      seatLimit: 1 / 0,
      included: 50,
      requestLimit: 1 / 0,
      perMillion: 2
    }
  ], T = [
    {
      label: "Request logs",
      tier: 0,
      values: ["7 days", "30 days", "13 months"]
    },
    {
      label: "Rate limit",
      tier: 0,
      values: ["100 req/s", "1,000 req/s", "10,000 req/s"]
    },
    {
      label: "Support",
      tier: 0,
      values: ["Email", "Priority", "Named engineer"]
    },
    {
      label: "Custom domains",
      tier: 1,
      values: ["", "Up to 10", "Unlimited"]
    },
    { label: "Audit log", tier: 1, values: ["", "90 days", "2 years"] },
    { label: "SAML SSO and SCIM", tier: 2, values: ["", "", ""] },
    { label: "Uptime SLA", tier: 2, values: ["", "", "99.99%"] }
  ], $ = [
    { value: v.indexOf(6), label: "Growth" },
    { value: v.indexOf(45), label: "Scale" }
  ], k = [
    { value: N.indexOf(2.5), label: "Growth" },
    { value: N.indexOf(30), label: "Scale" }
  ], S = (e2, a2) => e2[Math.min(e2.length - 1, Math.max(0, Math.round(a2)))], M = (e2) => e2 < 1 ? `${Math.round(1e3 * e2)}k` : `${e2}M`, L = (e2, a2, t2) => e2 > t2 ? 2 : +(e2 > a2);
  function O({ value: e2, prefix: a2 = "$", className: t2 }) {
    return (0, i.jsx)("span", {
      className: [g().money, t2].filter(Boolean).join(" "),
      children: (0, i.jsx)(d.q, { value: e2, prefix: a2 })
    });
  }
  function E({ id: e2, children: a2, className: t2 }) {
    let n2 = (0, r.I)();
    return (0, i.jsx)("span", {
      className: [g().swap, t2].filter(Boolean).join(" "),
      children: (0, i.jsx)(s.N, {
        initial: false,
        children: (0, i.jsx)(
          l.PY1.span,
          {
            className: g().swapItem,
            initial: n2 ? { opacity: 0 } : { opacity: 0, y: 6 },
            animate: { opacity: 1, y: 0 },
            exit: n2 ? { opacity: 0, transition: { duration: f.instant } } : {
              opacity: 0,
              y: -4,
              transition: { duration: f.fast, ease: j }
            },
            transition: n2 ? { duration: f.instant } : { duration: f.standard, ease: b },
            children: a2
          },
          e2
        )
      })
    });
  }
  function R({ className: e2, delay: a2 = 0.16 }) {
    let t2 = (0, r.I)();
    return (0, i.jsx)("svg", {
      className: e2,
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      children: (0, i.jsx)(l.PY1.path, {
        d: "M20 6 9 17l-5-5",
        initial: { pathLength: 0 },
        animate: { pathLength: 1 },
        transition: t2 ? { duration: 0 } : { duration: 0.34, ease: b, delay: a2 }
      })
    });
  }
  function P() {
    let e2 = (0, n.useId)(), a2 = (0, r.I)(), [t2, d2] = (0, n.useState)(v.indexOf(18)), [h2, _2] = (0, n.useState)(N.indexOf(15)), [x2, P2] = (0, n.useState)("monthly"), [A2, C] = (0, n.useState)(false), [I, q] = (function() {
      let e3 = (0, n.useRef)(null), [a3, t3] = (0, n.useState)("auto");
      return (0, n.useEffect)(() => {
        let a4 = e3.current;
        if (!a4 || "u" < typeof ResizeObserver) return;
        let i2 = new ResizeObserver(
          ([e4]) => t3(e4.borderBoxSize?.[0]?.blockSize ?? a4.offsetHeight)
        );
        return i2.observe(a4), () => i2.disconnect();
      }, []), [e3, a3];
    })(), Y = S(v, t2), F = S(N, h2), z = L(Y, w[0].seatLimit, w[1].seatLimit), V = L(F, w[0].requestLimit, w[1].requestLimit), G = Math.max(z, V), B = w[G], D = "yearly" === x2, [U, W] = (0, n.useState)({ tier: G, direction: 1 });
    U.tier !== G && (W({ tier: G, direction: G > U.tier ? 1 : -1 }), C(false));
    let Q = Y * B.seat.monthly, H = D ? Y * (B.seat.monthly - B.seat.yearly) : 0, K = Math.max(0, F - B.included), X = Math.round(K * B.perMillion), J = Q - H + X, Z = Y * (B.seat.monthly - B.seat.yearly) * 12, ee = (function(e3, a3, t3) {
      if (0 === e3) return "Covers up to 5 seats and 2M requests a month";
      let i2 = w[e3 - 1], n2 = `${i2.seatLimit} seats`, r2 = `${i2.requestLimit}M requests`;
      return a3 === e3 && t3 === e3 ? `Recommended above ${n2} and ${r2}` : a3 === e3 ? `Recommended above ${n2}` : `Recommended above ${r2} a month`;
    })(G, z, V), ea = T.filter((e3) => e3.tier <= G).sort((e3, a3) => a3.tier - e3.tier), et = a2 ? { duration: f.instant } : {
      layout: y.smooth,
      default: { duration: f.standard, ease: b, delay: 0.08 }
    };
    return (0, i.jsx)("section", {
      className: g().root,
      "aria-labelledby": `${e2}-title`,
      children: (0, i.jsxs)("div", {
        className: g().layout,
        children: [
          (0, i.jsxs)("header", {
            className: g().head,
            children: [
              (0, i.jsx)("h2", {
                id: `${e2}-title`,
                children: "Estimate your bill"
              }),
              (0, i.jsx)("p", {
                children: "You pay per seat. Each plan includes API traffic up to its limit, then a flat rate per extra million."
              })
            ]
          }),
          (0, i.jsxs)("div", {
            className: g().controls,
            children: [
              (0, i.jsx)(p.A, {
                label: "Seats",
                value: t2,
                onValueChange: d2,
                min: 0,
                max: v.length - 1,
                step: 1,
                largeStep: 3,
                marks: $,
                format: (e3) => String(S(v, e3))
              }),
              (0, i.jsx)(p.A, {
                label: "API requests per month",
                value: h2,
                onValueChange: _2,
                min: 0,
                max: N.length - 1,
                step: 1,
                largeStep: 3,
                marks: k,
                format: (e3) => M(S(N, e3))
              }),
              (0, i.jsxs)("div", {
                className: g().billing,
                children: [
                  (0, i.jsx)(u.A, {
                    label: "Billing period",
                    value: x2,
                    onValueChange: (e3) => P2(e3),
                    options: [
                      { value: "monthly", label: "Monthly" },
                      { value: "yearly", label: "Yearly" }
                    ]
                  }),
                  (0, i.jsxs)("p", {
                    className: g().saving,
                    "data-applied": D || void 0,
                    children: [
                      (0, i.jsx)(s.N, {
                        initial: false,
                        children: D && (0, i.jsx)(
                          l.PY1.span,
                          {
                            className: g().savingMark,
                            initial: { width: 0, opacity: 0 },
                            animate: { width: "auto", opacity: 1 },
                            exit: {
                              width: 0,
                              opacity: 0,
                              transition: a2 ? { duration: 0 } : { duration: f.fast, ease: j }
                            },
                            transition: a2 ? { duration: 0 } : y.morph,
                            children: (0, i.jsx)(R, {
                              className: g().savingCheck,
                              delay: 0.06
                            })
                          },
                          "applied"
                        )
                      }),
                      (0, i.jsxs)("span", {
                        children: [
                          "Save ",
                          (0, i.jsx)(O, { value: Z }),
                          " a year"
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          (0, i.jsxs)("aside", {
            className: g().card,
            "aria-labelledby": `${e2}-plan`,
            children: [
              (0, i.jsx)("div", {
                className: g().meter,
                "aria-hidden": "true",
                children: w.map(
                  (e3, t3) => (0, i.jsxs)(
                    "span",
                    {
                      className: g().step,
                      "data-current": t3 === G || void 0,
                      children: [
                        (0, i.jsx)("span", {
                          className: g().bar,
                          children: (0, i.jsx)(l.PY1.span, {
                            className: g().fill,
                            initial: false,
                            animate: { scaleX: +(t3 <= G) },
                            transition: a2 ? { duration: 0 } : {
                              ...y.smooth,
                              delay: 0.07 * Math.max(
                                0,
                                U.direction > 0 ? t3 - 1 : 2 - t3
                              )
                            }
                          })
                        }),
                        (0, i.jsx)("span", {
                          className: g().stepName,
                          children: e3.name
                        })
                      ]
                    },
                    e3.name
                  )
                )
              }),
              (0, i.jsxs)("div", {
                className: g().planHead,
                children: [
                  (0, i.jsx)(m.g, {
                    as: "h3",
                    id: `${e2}-plan`,
                    className: g().planName,
                    children: B.name
                  }),
                  (0, i.jsx)("p", {
                    className: g().reason,
                    children: (0, i.jsx)(E, { id: ee, children: ee })
                  })
                ]
              }),
              (0, i.jsxs)("div", {
                className: g().price,
                children: [
                  (0, i.jsx)(O, { value: J, className: g().priceValue }),
                  (0, i.jsx)("span", {
                    className: g().per,
                    children: "per month"
                  })
                ]
              }),
              (0, i.jsx)("p", {
                className: g().billed,
                children: (0, i.jsx)(E, {
                  id: x2,
                  children: D ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(O, { value: Y * B.seat.yearly * 12 }),
                      " a year for seats, usage monthly"
                    ]
                  }) : "Billed monthly, usage included"
                })
              }),
              (0, i.jsx)(l.PY1.div, {
                className: g().featuresFrame,
                initial: false,
                animate: { height: q },
                transition: a2 ? { duration: 0 } : y.smooth,
                children: (0, i.jsx)("ul", {
                  ref: I,
                  className: g().features,
                  "aria-label": `Included in ${B.name}`,
                  children: (0, i.jsx)(s.N, {
                    mode: "popLayout",
                    initial: false,
                    children: ea.map(
                      (e3) => (0, i.jsxs)(
                        l.PY1.li,
                        {
                          layout: "position",
                          layoutDependency: G,
                          className: g().feature,
                          "data-new": e3.tier === G || void 0,
                          initial: a2 ? { opacity: 0 } : { opacity: 0, y: -8 },
                          animate: { opacity: 1, y: 0 },
                          exit: a2 ? {
                            opacity: 0,
                            transition: { duration: f.instant }
                          } : {
                            opacity: 0,
                            transition: { duration: f.fast, ease: j }
                          },
                          transition: et,
                          children: [
                            (0, i.jsx)(R, { className: g().check }),
                            (0, i.jsx)("span", {
                              className: g().featureLabel,
                              children: e3.label
                            }),
                            e3.values[G] && (0, i.jsx)(m.g, {
                              className: g().featureValue,
                              children: e3.values[G]
                            })
                          ]
                        },
                        e3.label
                      )
                    )
                  })
                })
              }),
              (0, i.jsxs)("div", {
                className: g().action,
                children: [
                  (0, i.jsx)(c.$, {
                    className: g().cta,
                    variant: A2 ? "secondary" : "primary",
                    onClick: () => C(true),
                    "aria-describedby": `${e2}-note`,
                    children: A2 ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(o.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        "Trial started"
                      ]
                    }) : `Start with ${B.name}`
                  }),
                  (0, i.jsx)("p", {
                    className: g().note,
                    id: `${e2}-note`,
                    children: (0, i.jsx)(E, {
                      id: A2 ? "started" : "idle",
                      children: A2 ? (0, i.jsxs)(i.Fragment, {
                        children: [
                          "Trial started. ",
                          (0, i.jsx)("button", {
                            type: "button",
                            className: g().undo,
                            onClick: () => C(false),
                            children: "Undo"
                          })
                        ]
                      }) : "14 days free, then billed as estimated"
                    })
                  })
                ]
              }),
              (0, i.jsx)("p", {
                className: g().srOnly,
                "aria-live": "polite",
                children: `${B.name}. ${ee}.`
              })
            ]
          }),
          (0, i.jsxs)("section", {
            className: g().breakdown,
            "aria-labelledby": `${e2}-breakdown`,
            children: [
              (0, i.jsx)("h3", { id: `${e2}-breakdown`, children: "Breakdown" }),
              (0, i.jsxs)("dl", {
                className: g().rows,
                children: [
                  (0, i.jsxs)("div", {
                    className: g().row,
                    children: [
                      (0, i.jsxs)("dt", {
                        children: [
                          (0, i.jsxs)("span", {
                            className: g().rowLabel,
                            children: [
                              (0, i.jsx)(m.g, { children: B.name }),
                              " seats"
                            ]
                          }),
                          (0, i.jsxs)("small", {
                            children: [Y, " \xD7 $", B.seat.monthly]
                          })
                        ]
                      }),
                      (0, i.jsx)("dd", {
                        children: (0, i.jsx)(O, { value: Q })
                      })
                    ]
                  }),
                  (0, i.jsxs)("div", {
                    className: g().row,
                    children: [
                      (0, i.jsxs)("dt", {
                        children: [
                          (0, i.jsx)("span", {
                            className: g().rowLabel,
                            children: "API requests"
                          }),
                          (0, i.jsx)("small", {
                            children: K > 0 ? `${M(F)} used, ${M(K)} over at $${B.perMillion} per million` : `${M(F)} of ${M(B.included)} included`
                          })
                        ]
                      }),
                      (0, i.jsx)("dd", {
                        children: (0, i.jsx)(E, {
                          id: K > 0 ? "over" : "included",
                          className: g().alignEnd,
                          children: K > 0 ? (0, i.jsx)(O, { value: X }) : (0, i.jsx)("span", {
                            className: g().included,
                            children: "Included"
                          })
                        })
                      })
                    ]
                  }),
                  (0, i.jsx)(s.N, {
                    initial: false,
                    children: D && (0, i.jsxs)(
                      l.PY1.div,
                      {
                        className: g().row,
                        initial: { height: 0, opacity: 0 },
                        animate: { height: "auto", opacity: 1 },
                        exit: {
                          height: 0,
                          opacity: 0,
                          transition: a2 ? { duration: 0 } : {
                            height: y.smooth,
                            opacity: { duration: f.instant }
                          }
                        },
                        transition: a2 ? { duration: 0 } : {
                          height: y.smooth,
                          opacity: {
                            duration: f.standard,
                            ease: b,
                            delay: 0.06
                          }
                        },
                        children: [
                          (0, i.jsxs)("dt", {
                            children: [
                              (0, i.jsx)("span", {
                                className: g().rowLabel,
                                children: "Yearly billing"
                              }),
                              (0, i.jsxs)("small", {
                                children: [
                                  Y,
                                  " \xD7 $",
                                  B.seat.monthly - B.seat.yearly,
                                  " off each seat"
                                ]
                              })
                            ]
                          }),
                          (0, i.jsx)("dd", {
                            className: g().discount,
                            children: (0, i.jsx)(O, {
                              value: H,
                              prefix: "\u2212$"
                            })
                          })
                        ]
                      },
                      "yearly"
                    )
                  }),
                  (0, i.jsxs)("div", {
                    className: `${g().row} ${g().total}`,
                    children: [
                      (0, i.jsxs)("dt", {
                        children: [
                          (0, i.jsx)("span", {
                            className: g().rowLabel,
                            children: "Estimated total"
                          }),
                          (0, i.jsx)("small", {
                            children: "Per month, before tax"
                          })
                        ]
                      }),
                      (0, i.jsx)("dd", {
                        children: (0, i.jsx)(O, { value: J })
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
  }
  let A = P;
}

__m(__module,__exports,__require);
}