/* usage-pricing (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(3732, function(__module,__exports,__require){
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
});
A.regCss(64444, ".frame,.frame.frame{position:relative;display:inline-block;box-sizing:content-box;padding:.5em .5em .5em .2em;margin:-.5em -.5em -.5em -.2em;text-align:start;white-space:nowrap;mask-image:linear-gradient(90deg,#000 calc(100% - .5em),transparent)}\n.track{position:relative;display:inline-block;white-space:nowrap}\n.glyph{display:inline-block;white-space:pre;transform-origin:50% 60%}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0;user-select:none}", {});
A.regCss(66754, ".root{--slider-thumb:22px;--slider-track:6px;display:grid;width:100%;min-width:0;color:var(--foreground);font-size:var(--text-sm);line-height:var(--leading-body);letter-spacing:var(--tracking-body);user-select:none;-webkit-user-select:none}\n.root[data-dragging],.root[data-dragging] .control,.root[data-dragging] .thumb{cursor:grabbing}\n.root[data-disabled]{opacity:.5}\n.root[data-disabled] .control,.root[data-disabled] .markLabel,.root[data-disabled] .thumb{cursor:not-allowed}\n.header{display:flex;min-width:0;align-items:baseline;justify-content:space-between;gap:var(--space-4)}\n.label{min-width:0;font-weight:500}\n.readout{display:inline-flex;flex:none;align-items:center;gap:.3em;color:var(--text-secondary);font-variant-numeric:tabular-nums;white-space:nowrap}\n.dash{color:var(--text-muted)}\n.body{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center}\n.start{display:flex;grid-area:1/1;margin-right:var(--space-3)}\n.end{display:flex;grid-area:1/3;margin-left:var(--space-3)}\n.control{position:relative;grid-area:1/2;height:var(--control-height-md);cursor:pointer;touch-action:pan-y;-webkit-tap-highlight-color:transparent}\n.track{position:absolute;top:50%;right:calc(var(--slider-thumb) / 2);left:calc(var(--slider-thumb) / 2);height:var(--slider-track);margin-top:calc(var(--slider-track) / -2);border-radius:var(--radius-pill);background:var(--control-track)}\n.fill{position:absolute;inset:0;border-radius:inherit;background:var(--control-fill)}\n.fill .tick{background:color-mix(in oklab,var(--control-glyph) 60%,transparent)}\n.tick{position:absolute;top:50%;width:4px;height:4px;margin:-2px 0 0 -2px;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--foreground) 30%,transparent)}\n.thumbs{position:absolute;inset:0 calc(var(--slider-thumb) / 2);container-type:inline-size;pointer-events:none}\n.thumbLayer{position:absolute;inset:0}\n.thumb{position:absolute;top:50%;right:0;box-sizing:border-box;width:var(--slider-thumb);height:var(--slider-thumb);translate:50% -50%;border:0;border-radius:var(--radius-pill);background:var(--control-thumb);box-shadow:var(--control-thumb-shadow);pointer-events:auto;cursor:grab;transition:box-shadow var(--duration-fast) var(--ease-standard)}\n.thumb:after{content:\"\";position:absolute;inset:-11px;border-radius:inherit}\n@media (prefers-reduced-motion:reduce){.markLabel,.thumb{transition:none}\n.bubbleAnchor{--edge:calc(var(--slider-thumb) / 2);--x:calc(var(--at, 0) * 1cqw);position:absolute;right:0;bottom:calc(50% + var(--slider-thumb) / 2 + 8px);display:flex;translate:clamp(calc(100% - var(--edge) - var(--x)),50%,calc(100cqw + var(--edge) - var(--x))) 0;pointer-events:none}\n@media (pointer:coarse){.bubbleAnchor{bottom:calc(50% + var(--slider-thumb) / 2 + 18px)}\n.bubble{display:inline-flex;min-height:1.75rem;align-items:center;padding:0 var(--space-3);border:1px solid color-mix(in oklab,var(--background) 14%,var(--foreground));border-radius:var(--radius-pill);background:var(--foreground);color:var(--background);box-shadow:var(--shadow-raised);font-size:var(--text-sm);font-weight:500;white-space:nowrap;transform-origin:50% 100%}\n.marks{position:relative;grid-area:2/2;height:1.25rem;margin:calc(var(--space-1) * -1) calc(var(--slider-thumb) / 2) 0;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.markLabel{position:absolute;top:0;translate:-50% 0;white-space:nowrap;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}\n.markLabel[data-edge=start]{translate:max(-50%,calc(var(--slider-thumb) / -2)) 0}\n.markLabel[data-edge=end]{translate:min(-50%,calc(-100% + var(--slider-thumb) / 2)) 0}\n.markLabel[data-on]{color:var(--text-secondary)}\n@media (hover:hover) and (pointer:fine){.markLabel:hover{color:var(--foreground)}\n.number{display:inline-flex;align-items:center;white-space:nowrap;font-variant-numeric:tabular-nums}\n.column{--feather:.2em;position:relative;display:inline-block;overflow-x:visible;overflow-y:clip;margin-block:calc(var(--feather) * -1);padding-block:var(--feather);mask-image:linear-gradient(to bottom,transparent,#000 calc(var(--feather) * 1.5),#000 calc(100% - var(--feather) * 1.5),transparent)}\n.sizer{visibility:hidden}\n.glyph{position:absolute;inset:var(--feather) 0;text-align:center}\n.symbol{display:inline-block;overflow-x:clip;white-space:pre}", {});
A.regCss(69148, ".root{box-sizing:border-box;width:min(100%,1060px);min-width:0;margin-inline:auto;container-type:inline-size;color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.layout{display:grid;grid-template-columns:minmax(0,1fr);grid-template-areas:\"head\" \"controls\" \"card\" \"breakdown\";padding:0}\n@container (min-width: 780px){.layout{grid-template-columns:minmax(0,1fr) minmax(320px,392px);grid-template-rows:auto auto 1fr;grid-template-areas:\"head card\" \"controls card\" \"breakdown card\";column-gap:40px;padding:0}\n.head{grid-area:head;padding:8px 0 0}\n.head h2{margin:0;font-family:var(--font-display);font-size:var(--text-2xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display);text-wrap:balance}\n.head p{max-width:44ch;margin:10px 0 0;color:var(--text-secondary);font-size:var(--text-sm);text-wrap:pretty}\n.head{padding:8px 0 0}\n.head h2{font-size:var(--text-3xl)}\n.controls{grid-area:controls;display:grid;gap:28px;padding:28px 0 0}\n.controls{padding:32px 0 0}\n.billing{display:flex;flex-wrap:wrap;align-items:center;gap:12px 16px}\n.saving{display:inline-flex;align-items:center;margin:0;color:var(--text-muted);font-size:var(--text-sm);font-variant-numeric:tabular-nums;white-space:nowrap;transition:color var(--duration-standard) var(--ease-standard)}\n.saving[data-applied]{color:var(--success)}\n@media (prefers-reduced-motion:reduce){.saving,.step{transition:none}\n.savingMark{display:inline-flex;overflow:hidden}\n.savingCheck{flex:none;width:16px;height:16px;margin-right:6px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\n.card{grid-area:card;align-self:start;min-width:0;margin-top:28px;padding:22px 20px 18px;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface)}\n.card{grid-row:1/4;margin:0;padding:26px 26px 22px}\n.meter{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:4px}\n.step{display:grid;gap:8px;color:var(--text-muted);font-size:var(--text-xs);transition:color var(--duration-standard) var(--ease-standard)}\n.step[data-current]{color:var(--foreground)}\n.bar{position:relative;height:4px;overflow:hidden;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--foreground) 10%,transparent)}\n.fill{position:absolute;inset:0;border-radius:inherit;background:var(--accent);transform-origin:left center}\n.planHead{margin-top:30px}\n.planName{margin:0;font-family:var(--font-display);font-size:var(--text-3xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display)}\n.reason{min-height:1.4em;margin:6px 0 0;color:var(--text-secondary);font-size:var(--text-sm)}\n.price{display:flex;align-items:baseline;gap:8px;margin-top:26px}\n.priceValue{font-family:var(--font-display);font-size:var(--text-4xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:1}\n.per{color:var(--text-muted);font-size:var(--text-sm)}\n.billed{min-height:1.4em;margin:10px 0 0;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.featuresFrame{margin-top:22px;overflow:hidden;border-top:1px solid var(--border)}\n.features{position:relative;margin:0;padding:10px 0 0;list-style:none}\n.feature{display:flex;align-items:center;gap:10px;min-height:36px;color:var(--text-secondary);font-size:var(--text-sm)}\n.feature[data-new]{color:var(--foreground)}\n.feature[data-new] .check{stroke:var(--foreground)}\n.check{flex:none;width:16px;height:16px;fill:none;stroke:var(--text-muted);stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}\n.featureLabel{flex:1;min-width:0}\n.featureValue{flex:none;color:var(--text-muted);font-variant-numeric:tabular-nums}\n.action{display:grid;gap:10px;margin-top:18px}\n.cta{width:100%}\n.note{min-height:1.4em;margin:0;color:var(--text-muted);font-size:var(--text-xs);text-align:center}\n.note .swap{justify-items:center}\n.undo{padding:0 2px;border:0;border-radius:4px;background:none;color:var(--foreground);font:inherit;text-decoration:underline;text-decoration-color:var(--border-strong);text-underline-offset:3px;cursor:pointer}\n.breakdown{grid-area:breakdown;padding:28px 0 4px}\n.breakdown h3{margin:0 0 10px;font-size:var(--text-sm);font-weight:500}\n.breakdown{padding:36px 0 4px}\n.rows{margin:0}\n.row{display:flex;align-items:center;justify-content:space-between;gap:16px;overflow:hidden;border-top:1px solid var(--border-subtle)}\n.row dd,.row dt{margin:0;padding-block:12px}\n.row dt{display:grid;gap:2px;min-width:0}\n.row dd{flex:none;font-size:var(--text-sm);font-variant-numeric:tabular-nums;text-align:right}\n.row small{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.rowLabel{font-size:var(--text-sm)}\n.total .rowLabel{font-weight:500}\n.included{color:var(--text-muted)}\n.discount{color:var(--success)}\n.total{border-top-color:var(--border)}\n.total dd{font-size:var(--text-lg);font-weight:500}\n.money{display:inline-flex;font-variant-numeric:tabular-nums}\n.money>span{color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit}\n.swap{display:inline-grid;max-width:100%;justify-items:start;vertical-align:top}\n.swapItem{grid-area:1/1;max-width:100%}\n.alignEnd{justify-items:end;text-align:right}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}", {"root":"root","layout":"layout","head":"head","controls":"controls","billing":"billing","saving":"saving","step":"step","savingMark":"savingMark","savingCheck":"savingCheck","card":"card","meter":"meter","bar":"bar","fill":"fill","planHead":"planHead","planName":"planName","reason":"reason","price":"price","priceValue":"priceValue","per":"per","billed":"billed","featuresFrame":"featuresFrame","features":"features","feature":"feature","check":"check","featureLabel":"featureLabel","featureValue":"featureValue","action":"action","cta":"cta","note":"note","swap":"swap","undo":"undo","breakdown":"breakdown","rows":"rows","row":"row","rowLabel":"rowLabel","total":"total","included":"included","discount":"discount","money":"money","swapItem":"swapItem","alignEnd":"alignEnd","srOnly":"srOnly"});
A.reg(94274, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => D });
  var i = a(95155), r = a(12115), n = a(55809), l = a(25354), s = a(18310), u = a(28245), o = a(92171), d = a(80642), c = a(7770), p = a(66754), m = a.n(p);
  let { spring: h, duration: f, blur: b } = c.T, x = [...c.T.ease.enter], g = [...c.T.ease.standard], y = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], _ = ({ visualDuration: e2, bounce: t2 }) => {
    let a2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: a2 * a2,
      damping: 2 * (1 - t2) * a2,
      restDelta: 2e-3,
      restSpeed: 0.02
    };
  }, v = _(h.snappy), j = _(h.morph), w = 9, N = (e2) => (String(e2).split(".")[1] ?? "").length, k = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), $ = (e2) => e2 >= "0" && e2 <= "9", M = {
    enter: (e2) => ({
      width: 0,
      scale: 0.6,
      opacity: 0,
      y: `${0.3 * e2}em`,
      filter: `blur(${b.soft}px)`
    }),
    center: {
      width: "auto",
      scale: 1,
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transitionEnd: { filter: "none" },
      transition: {
        width: h.morph,
        scale: h.morph,
        opacity: h.morph,
        y: h.snappy,
        filter: { duration: f.standard, ease: x }
      }
    },
    exit: (e2) => ({
      width: 0,
      scale: 0.6,
      opacity: 0,
      y: `${-0.3 * e2}em`,
      filter: `blur(${b.subtle}px)`,
      transition: {
        width: h.smooth,
        scale: h.smooth,
        y: { duration: f.fast, ease: g },
        opacity: { duration: f.instant },
        filter: { duration: f.instant }
      }
    })
  }, P = {
    enter: { width: "auto", scale: 1, opacity: 0, y: 0, filter: "none" },
    center: {
      width: "auto",
      scale: 1,
      opacity: 1,
      y: 0,
      filter: "none",
      transition: { duration: f.instant }
    },
    exit: { width: 0, opacity: 0, transition: { duration: 0 } }
  };
  function F({ position: e2, digit: t2 }) {
    let a2 = (e3) => ((t2 - e3) % 10 + 15) % 10 - 5, r2 = (0, n.G)(e2, (e3) => `${1.05 * a2(e3)}em`), s2 = (0, n.G)(e2, (e3) => Math.max(0, 1 - Math.abs(a2(e3)) ** 1.5 * 1.1)), u2 = (0, n.G)(e2, (e3) => Math.abs(a2(e3)) >= 1 ? "hidden" : "visible"), o2 = (0, n.G)(e2, (e3) => {
      let t3 = Math.abs(a2(e3));
      return t3 < 0.02 || t3 >= 1 ? "none" : `blur(${(t3 * b.soft * 0.75).toFixed(2)}px)`;
    });
    return (0, i.jsx)(l.PY1.span, {
      className: m().glyph,
      style: { y: r2, opacity: s2, filter: o2, visibility: u2 },
      children: t2
    });
  }
  function S({ digit: e2, direction: t2 }) {
    let a2 = (0, s.I)(), n2 = (0, u.d)(e2), l2 = (0, r.useRef)({ digit: e2, target: e2 });
    return (0, r.useLayoutEffect)(() => {
      let i2 = l2.current;
      i2.digit !== e2 && (i2.target += t2 > 0 ? (e2 - i2.digit + 10) % 10 : -((i2.digit - e2 + 10) % 10), i2.digit = e2, a2 ? n2.jump(i2.target) : (0, o.i)(n2, i2.target, v));
    }, [e2, t2, n2, a2]), (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("span", { className: m().sizer, children: "0" }),
        y.map((e3) => (0, i.jsx)(F, { position: n2, digit: e3 }, e3))
      ]
    });
  }
  function I({ value: e2, text: t2 }) {
    let a2, n2, u2, o2, c2 = (0, s.I)(), [p2, h2] = (0, r.useState)({ value: e2, direction: 1 });
    p2.value !== e2 && h2({ value: e2, direction: e2 > p2.value ? 1 : -1 });
    let f2 = p2.value === e2 ? p2.direction : e2 > p2.value ? 1 : -1;
    return (0, i.jsx)("span", {
      className: m().number,
      children: (0, i.jsx)(d.N, {
        initial: false,
        custom: f2,
        children: (n2 = (a2 = [...t2]).findIndex($), u2 = a2.length - 1 - [...a2].reverse().findIndex($), o2 = a2.filter($).length, a2.map(
          (e3, t3) => n2 < 0 || t3 < n2 ? { key: `p${t3}${e3}`, text: e3 } : t3 > u2 ? { key: `s${a2.length - t3}${e3}`, text: e3 } : $(e3) ? { key: `d${--o2}`, digit: Number(e3) } : { key: `g${o2}${e3}`, text: e3 }
        )).map(
          (e3) => (0, i.jsx)(
            l.PY1.span,
            {
              className: "digit" in e3 ? m().column : m().symbol,
              custom: f2,
              variants: c2 ? P : M,
              initial: "enter",
              animate: "center",
              exit: "exit",
              children: "digit" in e3 ? (0, i.jsx)(S, { digit: e3.digit, direction: f2 }) : e3.text
            },
            e3.key
          )
        )
      })
    });
  }
  let A = { opacity: 0, scale: 0.6, y: 6, filter: `blur(${b.subtle}px)` }, L = {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transitionEnd: { filter: "none" }
  }, G = {
    opacity: 0,
    scale: 0.8,
    y: 4,
    filter: `blur(${b.subtle}px)`,
    transition: { duration: f.instant, ease: g }
  }, R = {
    ...h.snappy,
    opacity: { duration: f.fast, ease: x },
    filter: { duration: f.fast, ease: x }
  };
  function C({
    quiet: e2,
    index: t2,
    shown: a2,
    value: r2,
    text: u2,
    low: o2,
    high: c2,
    ariaLabel: p2,
    labelledBy: b2,
    active: x2,
    lifted: g2,
    bubble: y2,
    disabled: _2,
    onKeyDown: v2,
    onFocus: j2,
    onBlur: w2
  }) {
    let N2 = (0, s.I)(), k2 = (0, n.G)(a2, (e3) => `${e3 - 100}%`);
    return (0, i.jsxs)(l.PY1.div, {
      className: m().thumbLayer,
      style: { x: k2, zIndex: x2 ? 2 : 1 },
      children: [
        (0, i.jsx)(l.PY1.div, {
          role: "slider",
          "data-thumb": "",
          "data-index": t2,
          "data-active": g2 || void 0,
          "data-quiet": e2 || void 0,
          className: m().thumb,
          tabIndex: _2 ? -1 : 0,
          "aria-label": p2,
          "aria-labelledby": p2 ? void 0 : b2,
          "aria-valuemin": o2,
          "aria-valuemax": c2,
          "aria-valuenow": r2,
          "aria-valuetext": u2,
          "aria-orientation": "horizontal",
          "aria-disabled": _2 || void 0,
          initial: false,
          animate: { scale: g2 ? 1.16 : 1 },
          transition: N2 ? { duration: 0 } : h.snappy,
          onKeyDown: v2,
          onFocus: j2,
          onBlur: w2
        }),
        (0, i.jsx)(l.PY1.span, {
          className: m().bubbleAnchor,
          style: { "--at": a2 },
          children: (0, i.jsx)(d.N, {
            children: y2 && (0, i.jsx)(
              l.PY1.span,
              {
                className: m().bubble,
                "aria-hidden": "true",
                initial: N2 ? { opacity: 0 } : A,
                animate: L,
                exit: N2 ? { opacity: 0, transition: { duration: f.instant } } : G,
                transition: N2 ? { duration: f.instant } : R,
                children: (0, i.jsx)(I, { value: r2, text: u2 })
              },
              "bubble"
            )
          })
        })
      ]
    });
  }
  function D({
    label: e2,
    value: t2,
    defaultValue: a2,
    onValueChange: d2,
    onValueCommit: c2,
    min: p2 = 0,
    max: h2 = 100,
    step: f2 = 1,
    largeStep: b2,
    marks: x2,
    minStepsBetweenThumbs: g2 = 0,
    format: y2,
    showValue: _2 = true,
    thumbLabels: $2,
    start: M2,
    end: P2,
    name: F2,
    disabled: S2,
    className: A2
  }) {
    let L2 = (0, s.I)(), G2 = (0, r.useId)(), R2 = f2 > 0 ? f2 : 1, E = h2 - p2 || 1, T = Array.isArray(t2 ?? a2), z = (e3) => void 0 === e3 ? [p2, h2].slice(0, T ? 2 : 1) : Array.isArray(e3) ? [e3[0], e3[1]] : [e3], [B, Y] = (0, r.useState)(() => z(a2)), Z = void 0 === t2 ? B : z(t2), q = Math.max(N(R2), N(p2)), U = y2 ?? ((e3) => e3.toLocaleString("en-US", {
      minimumFractionDigits: q,
      maximumFractionDigits: q
    })), V = T ? g2 * R2 : 0, K = (e3) => (e3 - p2) / E * 100, X = (e3) => p2 + e3 / 100 * E, H = (e3) => Number((p2 + Math.round((e3 - p2) / R2) * R2).toFixed(q)), Q = (e3, t3) => 1 === e3 ? t3[0] + V : p2, W = (e3, t3) => 0 === e3 && T ? t3[1] - V : h2, O = (e3, t3, a3) => k(H(k(t3, p2, h2)), Q(e3, a3), W(e3, a3)), J = (0, r.useRef)(null), ee = (0, r.useRef)(null), et = (0, r.useRef)(Z), ea = (0, r.useRef)(Z.map(K)), ei = (0, r.useRef)(null), er = (0, r.useRef)(false), en = (0, r.useRef)(void 0), [el, es] = (0, r.useState)(null), [eu, eo] = (0, r.useState)(null), [ed, ec] = (0, r.useState)(null), [ep, em] = (0, r.useState)(+!!T), [eh, ef] = (0, r.useState)(null), eb = (0, u.d)(K(Z[0])), ex = (0, u.d)(K(Z[1] ?? Z[0])), eg = (0, u.d)(0), ey = (0, u.d)(0), e_ = (0, n.G)(() => eb.get() + eg.get()), ev = (0, n.G)(() => ex.get() + ey.get()), ej = (0, n.G)(() => {
      let e3 = T ? k(e_.get(), 0, 100) : 0, t3 = k((T ? ev : e_).get(), 0, 100);
      return `inset(0 ${(100 - t3).toFixed(3)}% 0 ${e3.toFixed(3)}% round 999px)`;
    }), ew = [
      { pos: eb, lag: eg, shown: e_ },
      { pos: ex, lag: ey, shown: ev }
    ], eN = (e3) => T ? [e3[0], e3[1]] : e3[0];
    function ek(e3, a3) {
      let i2 = et.current;
      if (i2[e3] === a3) return;
      let r2 = i2.map((t3, i3) => i3 === e3 ? a3 : t3);
      et.current = r2, void 0 === t2 && Y(r2), d2?.(eN(r2));
    }
    function e$(e3) {
      let t3 = ee.current?.querySelector(`[data-index="${e3}"]`);
      t3 && document.activeElement !== t3 && (ef(e3), er.current = true, t3.focus({ preventScroll: true }), er.current = false);
    }
    (0, r.useLayoutEffect)(() => {
      et.current = Z, Z.forEach((e3, t3) => {
        let a3 = K(e3), i2 = ew[t3];
        if (ei.current?.index === t3 || ea.current[t3] === a3) return;
        ea.current[t3] = a3;
        let r2 = i2.pos.get() + i2.lag.get();
        i2.lag.jump(0), i2.pos.jump(r2), L2 ? i2.pos.jump(a3) : (0, o.i)(i2.pos, a3, v);
      });
    }), (0, r.useEffect)(() => () => window.clearTimeout(en.current), []);
    let eM = () => J.current?.getBoundingClientRect().width || 1;
    function eP(e3, t3) {
      if (!T) return 0;
      let a3 = Math.abs(e3 - K(t3[0])), i2 = Math.abs(e3 - K(t3[1]));
      return a3 === i2 ? e3 < K(t3[0]) ? 0 : 1 : a3 < i2 ? 0 : 1;
    }
    function eF(e3, t3, a3, i2) {
      let r2 = ew[t3], n2 = r2.pos.get() + r2.lag.get();
      e3.index = t3, e3.grab = i2 ? 0 : a3 - n2, r2.lag.jump(0), r2.pos.jump(n2), es(t3), em(t3), window.clearTimeout(en.current), ec(null), e$(t3), i2 && eS(e3, a3, 0, true);
    }
    function eS(e3, t3, a3, i2 = false) {
      let r2 = e3.index;
      if (null === r2) return;
      let n2 = ew[r2], l2 = et.current, s2 = eM(), u2 = t3 - e3.grab, d3 = k(u2, K(Q(r2, l2)), K(W(r2, l2))), c3 = L2 ? d3 : d3 + ((e4, t4 = w) => Math.sign(e4) * (1 - 1 / (0.55 * Math.abs(e4) / t4 + 1)) * t4)(
        (u2 - d3) / 100 * s2
      ) / s2 * 100;
      if (i2 && !L2) {
        let e4 = n2.pos.get();
        n2.pos.jump(c3), n2.lag.jump(e4 - c3), (0, o.i)(n2.lag, 0, v);
      } else n2.pos.set(c3);
      e3.raw = u2, e3.samples.push({ t: a3, p: c3 }), e3.samples.length > 6 && e3.samples.shift(), ek(r2, O(r2, X(u2), l2));
    }
    function eI(e3) {
      let t3 = ei.current;
      if (!t3 || t3.pointer !== e3.pointerId) return;
      ei.current = null;
      let a3 = t3.index;
      if (null === a3) return;
      let i2 = ew[a3], r2 = et.current, n2 = eM(), l2 = t3.samples, s2 = l2[0], u2 = l2[l2.length - 1], d3 = u2 && s2 ? (u2.t - s2.t) / 1e3 : 0, p3 = (u2 && s2 && d3 > 8e-3 && e3.timeStamp - u2.t < 60 ? (u2.p - s2.p) / d3 : 0) + i2.lag.getVelocity(), m2 = R2 / E * 100, h3 = "pointerup" === e3.type && m2 / 100 * n2 >= 12 ? k(0.099 * p3, -m2, m2) : 0, f3 = O(a3, X(t3.raw + h3), r2), b3 = i2.pos.get() + i2.lag.get(), x3 = K(f3);
      i2.lag.jump(0), i2.pos.jump(b3), ea.current[a3] = x3, L2 ? i2.pos.jump(x3) : (0, o.i)(i2.pos, x3, { ...v, velocity: p3 }), ek(a3, f3), es(null), window.clearTimeout(en.current), ec(a3), en.current = window.setTimeout(() => ec(null), 700), c2?.(eN(et.current));
    }
    let eA = (x2 ?? []).map((e3) => "number" == typeof e3 ? { value: e3 } : e3).filter((e3) => e3.value >= p2 && e3.value <= h2), eL = eA.filter((e3) => e3.value > p2 && e3.value < h2), eG = eA.filter((e3) => e3.label), eR = $2 ?? [`${e2}, minimum`, `${e2}, maximum`];
    return (0, i.jsxs)("div", {
      className: [m().root, A2].filter(Boolean).join(" "),
      "data-disabled": S2 || void 0,
      "data-dragging": null !== el || void 0,
      "data-marks": eG.length > 0 || void 0,
      children: [
        (0, i.jsxs)("div", {
          className: m().header,
          children: [
            (0, i.jsx)("span", { id: G2, className: m().label, children: e2 }),
            _2 && (0, i.jsxs)("span", {
              className: m().readout,
              "aria-hidden": "true",
              children: [
                (0, i.jsx)(I, { value: Z[0], text: U(Z[0]) }),
                T && (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("span", {
                      className: m().dash,
                      children: "\u2013"
                    }),
                    (0, i.jsx)(I, { value: Z[1], text: U(Z[1]) })
                  ]
                })
              ]
            })
          ]
        }),
        (0, i.jsxs)("div", {
          className: m().body,
          children: [
            M2 && (0, i.jsx)("div", { className: m().start, children: M2 }),
            (0, i.jsxs)("div", {
              className: m().control,
              onPointerDown: function(e3) {
                if (S2 || 0 !== e3.button || !e3.isPrimary) return;
                let t3 = J.current?.getBoundingClientRect();
                if (!t3) return;
                let a3 = (e3.clientX - t3.left) / (t3.width || 1) * 100, i2 = e3.target.closest("[data-thumb]"), r2 = et.current;
                e3.currentTarget.setPointerCapture(e3.pointerId);
                let n2 = {
                  pointer: e3.pointerId,
                  index: null,
                  grab: 0,
                  x: e3.clientX,
                  raw: a3,
                  samples: []
                };
                (ei.current = n2, i2 && T && r2[0] === r2[1]) ? e$(Number(i2.dataset.index)) : (eF(n2, i2 ? Number(i2.dataset.index) : eP(a3, r2), a3, !i2), n2.samples = [
                  { t: e3.timeStamp, p: ew[n2.index ?? 0].pos.get() }
                ]);
              },
              onPointerMove: function(e3) {
                let t3 = ei.current;
                if (!t3 || t3.pointer !== e3.pointerId) return;
                let a3 = J.current?.getBoundingClientRect();
                if (!a3) return;
                let i2 = (e3.clientX - a3.left) / (a3.width || 1) * 100;
                if (null === t3.index) {
                  let r2 = e3.clientX - t3.x;
                  if (2 > Math.abs(r2)) return;
                  eF(t3, r2 < 0 ? 0 : 1, i2 - r2 / (a3.width || 1) * 100, false);
                }
                eS(t3, i2, e3.timeStamp);
              },
              onPointerUp: eI,
              onPointerCancel: eI,
              onLostPointerCapture: eI,
              onMouseDown: (e3) => e3.preventDefault(),
              children: [
                (0, i.jsxs)("div", {
                  ref: J,
                  className: m().track,
                  children: [
                    eL.map(
                      (e3) => (0, i.jsx)(
                        "span",
                        {
                          className: m().tick,
                          style: { left: `${K(e3.value)}%` }
                        },
                        e3.value
                      )
                    ),
                    (0, i.jsx)(l.PY1.div, {
                      className: m().fill,
                      style: { clipPath: ej },
                      children: eL.map(
                        (e3) => (0, i.jsx)(
                          "span",
                          {
                            className: m().tick,
                            style: { left: `${K(e3.value)}%` }
                          },
                          e3.value
                        )
                      )
                    })
                  ]
                }),
                (0, i.jsx)("div", {
                  ref: ee,
                  className: m().thumbs,
                  children: Z.map(
                    (e3, t3) => (0, i.jsx)(
                      C,
                      {
                        quiet: eh === t3,
                        index: t3,
                        shown: ew[t3].shown,
                        value: e3,
                        text: U(e3),
                        low: Q(t3, Z),
                        high: W(t3, Z),
                        ariaLabel: T ? eR[t3] : void 0,
                        labelledBy: G2,
                        active: ep === t3,
                        lifted: el === t3,
                        bubble: el === t3 || eu === t3 || ed === t3,
                        disabled: S2,
                        onKeyDown: (e4) => (function(e5, t4) {
                          let a3;
                          if (S2) return;
                          let i2 = et.current, r2 = i2[e5], n2 = b2 ?? Math.max(R2, H(p2 + E / 10) - p2), l2 = {
                            ArrowRight: R2,
                            ArrowUp: R2,
                            ArrowLeft: -R2,
                            ArrowDown: -R2,
                            PageUp: n2,
                            PageDown: -n2
                          };
                          if ("Home" === t4.key) a3 = Q(e5, i2);
                          else if ("End" === t4.key) a3 = W(e5, i2);
                          else {
                            if (!(t4.key in l2)) return;
                            a3 = r2 + (t4.shiftKey && /^Arrow/.test(t4.key) ? Math.sign(l2[t4.key]) * n2 : l2[t4.key]);
                          }
                          t4.preventDefault(), eo(e5), ef(null), em(e5);
                          let s2 = O(e5, a3, i2);
                          if (s2 === r2) {
                            let t5 = Math.sign(a3 - r2);
                            t5 && !L2 && (0, o.i)(ew[e5].pos, ea.current[e5], {
                              ...j,
                              velocity: 150 * t5 / eM() * 100
                            });
                            return;
                          }
                          ek(e5, s2), c2?.(eN(et.current));
                        })(t3, e4),
                        onFocus: (e4) => {
                          !er.current && e4.currentTarget.matches(":focus-visible") && eo(t3);
                        },
                        onBlur: () => {
                          eo((e4) => e4 === t3 ? null : e4), ef((e4) => e4 === t3 ? null : e4);
                        }
                      },
                      t3
                    )
                  )
                })
              ]
            }),
            P2 && (0, i.jsx)("div", { className: m().end, children: P2 }),
            eG.length > 0 && (0, i.jsx)("div", {
              className: m().marks,
              "aria-hidden": "true",
              children: eG.map((e3) => {
                let t3;
                return (0, i.jsx)(
                  "span",
                  {
                    className: m().markLabel,
                    "data-on": (t3 = e3.value, (T ? t3 >= Z[0] && t3 <= Z[1] : t3 <= Z[0]) || void 0),
                    "data-edge": e3.value === p2 ? "start" : e3.value === h2 ? "end" : void 0,
                    style: { left: `${K(e3.value)}%` },
                    onClick: () => (function(e4) {
                      if (S2) return;
                      let t4 = et.current, a3 = eP(K(e4), t4), i2 = O(a3, e4, t4);
                      em(a3), e$(a3), i2 !== t4[a3] && (ek(a3, i2), c2?.(eN(et.current)));
                    })(e3.value),
                    children: e3.label
                  },
                  e3.value
                );
              })
            })
          ]
        }),
        F2 && Z.map(
          (e3, t3) => (0, i.jsx)(
            "input",
            { type: "hidden", name: F2, value: e3, disabled: S2 },
            t3
          )
        )
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(98344, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { g: () => w });
  var s = a(95155), r = a(12115), i = a(18310), n = a(92171), o = a(80642), l = a(25354), d = a(7770), c = a(64444), u = a.n(c);
  let p = [...d.T.ease.enter], h = [...d.T.ease.standard], m = `blur(${d.T.blur.soft}px)`;
  function y(e2) {
    let t2 = /* @__PURE__ */ new Map();
    return Array.from(e2).map((e3) => {
      let a2 = t2.get(e3) ?? 0;
      return t2.set(e3, a2 + 1), { char: e3, key: `${e3}-${a2}` };
    });
  }
  let g = (e2) => parseFloat(getComputedStyle(e2).width);
  function w({ children: e2, as: t2 = "span", className: a2, id: c2 }) {
    let x = (0, i.I)(), f = (0, r.useRef)(null), _ = (0, r.useRef)(null), k = (0, r.useRef)(0), v = (0, r.useRef)(null), j = (0, r.useMemo)(() => y(e2), [e2]), [b, S] = (0, r.useState)({ current: e2, previous: e2 });
    b.current !== e2 && S({ current: e2, previous: b.current });
    let N = (0, r.useMemo)(
      () => new Set(y(b.previous).map((e3) => e3.key)),
      [b.previous]
    ), A = 0;
    return (0, r.useLayoutEffect)(() => {
      let e3 = f.current, t3 = _.current;
      if (!e3 || !t3) return;
      let a3 = g(t3);
      Number.isFinite(a3) && (k.current && Math.abs(a3 - k.current) > 0.5 && !x ? v.current = (0, n.i)(e3, { width: a3 }, d.T.spring.morph) : (v.current?.stop(), e3.style.width = `${a3}px`), k.current = a3);
    }, [e2, x]), (0, r.useEffect)(() => {
      let e3 = f.current, t3 = _.current;
      if (!e3 || !t3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(() => {
        let a4 = g(t3);
        !Number.isFinite(a4) || 0.5 > Math.abs(a4 - k.current) || (v.current?.stop(), e3.style.width = `${a4}px`, k.current = a4);
      });
      return a3.observe(t3), () => a3.disconnect();
    }, []), (0, s.jsxs)(t2, {
      id: c2,
      className: a2,
      children: [
        (0, s.jsx)("span", { className: u().srOnly, children: e2 }),
        (0, s.jsx)("span", {
          ref: f,
          className: u().frame,
          "aria-hidden": "true",
          children: (0, s.jsx)("span", {
            ref: _,
            className: u().track,
            children: (0, s.jsx)(o.N, {
              mode: "popLayout",
              initial: false,
              children: j.map(({ char: e3, key: t3 }) => {
                let a3 = N.has(t3) ? 0 : A++;
                return (0, s.jsx)(
                  l.PY1.span,
                  {
                    layout: "position",
                    className: u().glyph,
                    initial: !x && {
                      opacity: 0,
                      scale: 0.8,
                      y: "0.14em",
                      filter: m
                    },
                    animate: {
                      opacity: 1,
                      scale: 1,
                      y: "0em",
                      filter: "blur(0px)"
                    },
                    exit: x ? { opacity: 0, transition: { duration: 0 } } : {
                      opacity: 0,
                      scale: 0.86,
                      y: "-0.1em",
                      filter: m,
                      transition: {
                        duration: d.T.duration.exit,
                        ease: h
                      }
                    },
                    transition: x ? { duration: 0 } : {
                      layout: d.T.spring.morph,
                      default: {
                        duration: d.T.duration.standard + 0.04,
                        ease: p,
                        delay: 0.05 + Math.min(a3, 8) * d.T.stagger.char * 2
                      }
                    },
                    children: " " === e3 ? "\xA0" : e3
                  },
                  t3
                );
              })
            })
          })
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.cssFor("usage-pricing", [64444,66754,69148]);
A.item("usage-pricing", {entry:3732, export:"UsagePricing", kind:"block", tier:"pro", unresolved:[]});
})();