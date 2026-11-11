function(__module,__exports,__require){
"use strict";
function __m(e, i, a) {
  "use strict";
  a.r(i), a.d(i, { BillingOverview: () => G, default: () => X });
  var n = a(95155), l = a(12115), t = a(79196), r = a(25354), s = a(18310), o = a(80642), c = a(61792), d = a(57700), u = a(64577), m = a(59103), p = a(35484), v = a(11012), h = a(50825), _ = a(65024), g = a(92218), x = a(90034), y = a(51288), b = a(35978), w = a(66558), j = a(98344), f = a(7770), N = a(9264), $ = a.n(N);
  let { spring: k, duration: S, ease: A } = f.T, C = [...A.enter], D = [...A.standard], T = {
    starter: {
      name: "Starter",
      rank: 0,
      monthly: 49,
      yearly: 39,
      seats: 5,
      calls: 25e4,
      storage: 25
    },
    growth: {
      name: "Growth",
      rank: 1,
      monthly: 199,
      yearly: 159,
      seats: 15,
      calls: 1e6,
      storage: 100
    },
    scale: {
      name: "Scale",
      rank: 2,
      monthly: 499,
      yearly: 399,
      seats: 50,
      calls: 5e6,
      storage: 500
    }
  }, P = ["starter", "growth", "scale"], M = {
    plan: "growth",
    billing: "monthly",
    renews: "Oct 14, 2026",
    periodEnd: "Oct 13",
    daysLeft: 22,
    periodDays: 30
  }, R = {
    monthly: { renews: "Oct 22, 2026", periodEnd: "Oct 21", days: 30 },
    yearly: { renews: "Sep 22, 2027", periodEnd: "Sep 21, 2027", days: 365 }
  }, z = [
    {
      id: "sep-renewal",
      date: "Sep 14, 2026",
      title: "Growth plan",
      detail: "Sep 14 \u2013 Oct 13",
      amount: 199,
      status: "paid"
    },
    {
      id: "sep-retention",
      date: "Sep 3, 2026",
      title: "Log retention add-on",
      detail: "Card declined by the bank",
      amount: 36,
      status: "failed"
    },
    {
      id: "aug-workshop",
      date: "Aug 28, 2026",
      title: "Onboarding workshop",
      detail: "Bank transfer, due Sep 27",
      amount: 600,
      status: "due"
    },
    {
      id: "aug-renewal",
      date: "Aug 14, 2026",
      title: "Growth plan",
      detail: "Aug 14 \u2013 Sep 13",
      amount: 199,
      status: "paid"
    }
  ], B = {
    paid: {
      label: "Paid",
      tone: "success",
      icon: (0, n.jsx)(u.A, {
        size: 12,
        strokeWidth: 2,
        "aria-hidden": "true"
      })
    },
    due: {
      label: "Due",
      tone: "warning",
      icon: (0, n.jsx)(m.A, {
        size: 12,
        strokeWidth: 2,
        "aria-hidden": "true"
      })
    },
    failed: {
      label: "Failed",
      tone: "danger",
      icon: (0, n.jsx)(p.A, {
        size: 12,
        strokeWidth: 2,
        "aria-hidden": "true"
      })
    }
  }, E = { number: "", expiry: "", cvc: "" }, Y = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }), H = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }), L = new Intl.NumberFormat("en-US"), F = (e2, i2) => "monthly" === i2 ? T[e2].monthly : 12 * T[e2].yearly, I = (e2) => {
    let i2;
    return `${T[e2].seats} seats \xB7 ${(i2 = T[e2].calls) >= 1e6 ? `${i2 / 1e6}M` : `${i2 / 1e3}k`} API calls \xB7 ${T[e2].storage} GB`;
  }, q = (e2) => Math.round(100 * e2) / 100;
  function O({ children: e2, className: i2, reduce: a2, ref: l2 }) {
    let s2 = (0, t.tF)();
    return (0, n.jsx)(r.PY1.span, {
      ref: l2,
      className: i2,
      "aria-hidden": !s2 || void 0,
      initial: a2 ? { opacity: 0 } : { opacity: 0, y: "0.35em" },
      animate: { opacity: 1, y: "0em" },
      exit: a2 ? { opacity: 0, transition: { duration: 0 } } : {
        opacity: 0,
        y: "-0.3em",
        transition: { duration: S.fast, ease: D }
      },
      transition: a2 ? { duration: 0 } : { duration: S.standard, ease: C },
      children: e2
    });
  }
  function U({ children: e2, className: i2, anchor: a2 = "left" }) {
    let l2 = !!(0, s.I)();
    return (0, n.jsx)("span", {
      className: [$().swap, i2].filter(Boolean).join(" "),
      children: (0, n.jsx)(o.N, {
        mode: "popLayout",
        initial: false,
        anchorX: a2,
        children: (0, n.jsx)(
          O,
          { className: $().swapText, reduce: l2, children: e2 },
          e2
        )
      })
    });
  }
  function K({ value: e2 }) {
    let i2 = !!(0, s.I)();
    return (0, n.jsx)("span", {
      className: $().digits,
      children: e2.split("").map(
        (e3, a2) => (0, n.jsx)(
          "span",
          {
            className: $().digit,
            children: (0, n.jsx)(o.N, {
              mode: "popLayout",
              initial: false,
              children: (0, n.jsx)(
                r.PY1.span,
                {
                  initial: i2 ? { opacity: 0 } : { opacity: 0, y: "0.7em" },
                  animate: { opacity: 1, y: "0em" },
                  exit: i2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: "-0.7em",
                    transition: {
                      duration: S.fast,
                      ease: D,
                      delay: 0.04 * a2
                    }
                  },
                  transition: i2 ? { duration: 0 } : {
                    default: {
                      duration: S.standard,
                      ease: C,
                      delay: 0.04 * a2
                    },
                    y: { ...k.snappy, delay: 0.04 * a2 }
                  },
                  children: e3
                },
                e3
              )
            })
          },
          a2
        )
      )
    });
  }
  function V({ children: e2 }) {
    let i2 = (0, s.I)(), a2 = (0, l.useRef)(null), [t2, o2] = (0, l.useState)("auto");
    return (0, l.useLayoutEffect)(() => {
      let e3 = a2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let i3 = new ResizeObserver(() => o2(e3.offsetHeight));
      return i3.observe(e3), () => i3.disconnect();
    }, []), (0, n.jsx)(r.PY1.div, {
      className: $().region,
      initial: false,
      animate: { height: t2 },
      transition: i2 ? { duration: 0 } : k.smooth,
      children: (0, n.jsx)("div", {
        ref: a2,
        className: $().regionInner,
        children: e2
      })
    });
  }
  function W({
    label: e2,
    used: i2,
    limit: a2,
    decimals: t2 = 0,
    unit: c2,
    limitValue: d2,
    limitSuffix: u2,
    left: m2,
    valueText: p2,
    index: h2,
    revealed: g2
  }) {
    let y2 = (0, l.useId)(), b2 = (0, s.I)(), w2 = i2 / a2, j2 = w2 >= 0.85;
    return (0, n.jsxs)("div", {
      className: $().meter,
      "data-near": j2 || void 0,
      children: [
        (0, n.jsxs)("div", {
          className: $().meterHead,
          children: [
            (0, n.jsx)("span", { id: `${y2}-label`, children: e2 }),
            (0, n.jsx)(o.N, {
              initial: false,
              children: j2 && (0, n.jsx)(
                r.PY1.span,
                {
                  className: $().nearBadge,
                  initial: b2 ? { opacity: 0 } : { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  exit: b2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    scale: 0.9,
                    transition: { duration: S.exit, ease: D }
                  },
                  transition: b2 ? { duration: 0 } : { duration: S.standard, ease: C },
                  children: (0, n.jsx)(x.E, {
                    tone: "warning",
                    size: "sm",
                    icon: (0, n.jsx)(v.A, {
                      size: 12,
                      strokeWidth: 2,
                      "aria-hidden": "true"
                    }),
                    children: "Near limit"
                  })
                },
                "near"
              )
            })
          ]
        }),
        (0, n.jsxs)("p", {
          className: $().meterValue,
          children: [
            (0, n.jsx)("span", {
              className: $().num,
              children: (0, n.jsx)(_.q, {
                value: i2,
                decimals: t2,
                animateOnView: true
              })
            }),
            c2 && (0, n.jsx)("span", { className: $().meterUnit, children: c2 }),
            (0, n.jsxs)("span", {
              className: $().meterOf,
              children: [
                "of ",
                (0, n.jsx)("span", {
                  className: $().num,
                  children: (0, n.jsx)(_.q, { value: d2, suffix: u2 })
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("div", {
          className: $().track,
          role: "meter",
          "aria-labelledby": `${y2}-label`,
          "aria-valuemin": 0,
          "aria-valuemax": a2,
          "aria-valuenow": i2,
          "aria-valuetext": p2,
          children: (0, n.jsx)(r.PY1.span, {
            className: $().fill,
            initial: { width: "0%" },
            animate: { width: g2 ? `${Math.min(100, 100 * w2)}%` : "0%" },
            transition: b2 ? { duration: 0 } : { ...k.smooth, delay: 0.06 * h2 }
          })
        }),
        (0, n.jsx)(U, {
          className: $().meterCaption,
          children: `${Math.round(100 * w2)}% used \xB7 ${m2} left`
        })
      ]
    });
  }
  function G({ embedded: e2 = false } = {}) {
    var i2, a2;
    let t2, m2, p2, v2 = (0, l.useId)(), f2 = (0, l.useId)(), N2 = !!(0, s.I)(), [A2, O2] = (0, l.useState)(M), [X2, Q] = (0, l.useState)("summary"), [J, Z] = (0, l.useState)({ plan: "scale", billing: "monthly" }), [ee, ei] = (0, l.useState)(false), [ea, en] = (0, l.useState)(""), [el, et] = (0, l.useState)({ last4: "7719", expiry: "04/28" }), [er, es] = (0, l.useState)("summary"), [eo, ec] = (0, l.useState)(E), [ed, eu] = (0, l.useState)({}), [em, ep] = (0, l.useState)(false), [ev, eh] = (0, l.useState)(""), [e_, eg] = (0, l.useState)(z), [ex, ey] = (0, l.useState)({}), [eb, ew] = (0, l.useState)(null), [ej, ef] = (0, l.useState)(""), eN = (0, l.useRef)(null), e$ = (0, c.W)(eN, { once: true, amount: 0.3 }), ek = (0, l.useRef)(null), eS = (0, l.useRef)(null), eA = (0, l.useRef)(null), eC = (0, l.useRef)(null), eD = (0, l.useRef)(null), eT = (0, l.useRef)(/* @__PURE__ */ new Map()), eP = (0, l.useRef)(/* @__PURE__ */ new Map()), eM = (0, l.useRef)(null), eR = (0, l.useRef)(/* @__PURE__ */ new Set()), ez = (0, l.useRef)(0);
    (0, l.useEffect)(() => {
      let e3 = eM.current;
      e3 && (eM.current = null, e3()?.focus());
    }), (0, l.useEffect)(() => {
      let e3 = eR.current;
      return () => e3.forEach((e4) => window.clearTimeout(e4));
    }, []);
    let eB = (e3, i3) => {
      let a3 = window.setTimeout(() => {
        eR.current.delete(a3), e3();
      }, i3);
      eR.current.add(a3);
    }, eE = T[A2.plan], eY = T[J.plan], eH = eE.rank === P.length - 1, eL = (i2 = J.plan, a2 = J.billing, t2 = F(A2.plan, A2.billing) * A2.daysLeft / A2.periodDays, {
      amount: q(
        ((m2 = a2 === A2.billing) ? F(i2, a2) * A2.daysLeft / A2.periodDays : F(i2, a2)) - t2
      ),
      credit: q(t2),
      sameTerm: m2,
      renews: m2 ? A2.renews : R[a2].renews,
      unchanged: i2 === A2.plan && m2
    }), eF = J.plan === A2.plan ? "billing" : eY.rank > eE.rank ? "up" : "down", eI = eL.unchanged ? "Current plan" : "up" === eF ? `Upgrade to ${eY.name}` : "down" === eF ? `Move to ${eY.name}` : `Switch to ${J.billing}`, eq = eL.unchanged ? "This is your current plan" : eL.sameTerm ? `Prorated for ${A2.daysLeft} days` : `Renews ${eL.renews} \xB7 ${p2 = eL.credit, Y.format(p2)} credited`;
    function eO() {
      ee || (Q("summary"), eM.current = () => ek.current);
    }
    function eU(e3) {
      !ee && T[e3].seats >= 12 && Z((i3) => ({ ...i3, plan: e3 }));
    }
    function eK() {
      em || (es("summary"), eM.current = () => eS.current);
    }
    function eV(e3, i3) {
      let a3, n2 = "number" === e3 ? i3.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ") : "expiry" === e3 ? (a3 = i3.replace(/\D/g, "").slice(0, 4)).length > 2 ? `${a3.slice(0, 2)}/${a3.slice(2)}` : a3 : i3.replace(/\D/g, "").slice(0, 4);
      ec((i4) => ({ ...i4, [e3]: n2 })), ed[e3] && eu((i4) => ({ ...i4, [e3]: void 0 }));
    }
    let eW = {
      initial: N2 ? { opacity: 0 } : { opacity: 0, y: 8 },
      animate: { opacity: 1, y: 0 },
      exit: N2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -4, transition: { duration: S.instant, ease: D } },
      transition: N2 ? { duration: 0 } : { duration: S.standard, ease: C, delay: 0.05 }
    }, eG = [
      {
        key: "seats",
        label: "Seats",
        used: 12,
        limit: eE.seats,
        limitValue: eE.seats,
        limitSuffix: "",
        left: `${eE.seats - 12} seats`,
        valueText: `12 of ${eE.seats} seats used`
      },
      {
        key: "calls",
        label: "API calls",
        used: 912480,
        limit: eE.calls,
        limitValue: eE.calls >= 1e6 ? eE.calls / 1e6 : eE.calls / 1e3,
        limitSuffix: eE.calls >= 1e6 ? "M" : "k",
        left: `${L.format(eE.calls - 912480)} calls`,
        valueText: `${L.format(912480)} of ${L.format(eE.calls)} API calls used`
      },
      {
        key: "storage",
        label: "Storage",
        used: 38.4,
        limit: eE.storage,
        decimals: 1,
        unit: "GB",
        limitValue: eE.storage,
        limitSuffix: " GB",
        left: `${(eE.storage - 38.4).toFixed(1)} GB`,
        valueText: `38.4 of ${eE.storage} GB used`
      }
    ];
    return (0, n.jsxs)("section", {
      className: $().billing,
      "aria-labelledby": `${v2}-title`,
      children: [
        e2 ? (0, n.jsx)("h2", {
          id: `${v2}-title`,
          className: $().srOnly,
          children: "Billing"
        }) : (0, n.jsxs)("header", {
          className: $().header,
          children: [
            (0, n.jsx)("h2", { id: `${v2}-title`, children: "Billing" }),
            (0, n.jsx)("p", { children: "Fieldnote Labs workspace" })
          ]
        }),
        (0, n.jsxs)("div", {
          className: $().top,
          children: [
            (0, n.jsxs)("section", {
              className: $().panel,
              "aria-labelledby": `${v2}-plan`,
              children: [
                (0, n.jsxs)("div", {
                  className: $().panelHead,
                  children: [
                    (0, n.jsx)("h3", {
                      id: `${v2}-plan`,
                      children: "Current plan"
                    }),
                    (0, n.jsx)(U, {
                      className: $().panelNote,
                      anchor: "right",
                      children: "monthly" === A2.billing ? "Billed monthly" : `${H.format(12 * eE.yearly)} billed yearly`
                    })
                  ]
                }),
                (0, n.jsxs)("div", {
                  className: $().planLine,
                  children: [
                    (0, n.jsx)(j.g, {
                      className: $().planName,
                      children: eE.name
                    }),
                    (0, n.jsxs)("span", {
                      className: $().planPrice,
                      children: [
                        (0, n.jsx)("span", {
                          className: $().num,
                          children: (0, n.jsx)(_.q, {
                            value: "monthly" === A2.billing ? eE.monthly : eE.yearly,
                            prefix: "$"
                          })
                        }),
                        (0, n.jsx)("span", {
                          className: $().per,
                          children: "/ month"
                        })
                      ]
                    })
                  ]
                }),
                (0, n.jsx)(V, {
                  children: (0, n.jsx)(o.N, {
                    mode: "popLayout",
                    initial: false,
                    children: "summary" === X2 ? (0, n.jsxs)(
                      r.PY1.div,
                      {
                        className: $().planSummary,
                        ...eW,
                        children: [
                          (0, n.jsxs)("div", {
                            className: $().planFacts,
                            children: [
                              (0, n.jsxs)("p", {
                                children: ["Renews ", A2.renews]
                              }),
                              (0, n.jsx)("span", { children: I(A2.plan) })
                            ]
                          }),
                          (0, n.jsx)(y.$, {
                            ref: ek,
                            type: "button",
                            variant: eH ? "secondary" : "primary",
                            size: "sm",
                            onClick: function() {
                              let e3 = P.find((e4) => T[e4].rank > eE.rank) ?? A2.plan;
                              Z({ plan: e3, billing: A2.billing }), en(""), Q("picker"), eM.current = () => eT.current.get(e3);
                            },
                            children: eH ? "Change plan" : "Upgrade"
                          }),
                          ea && (0, n.jsxs)("p", {
                            className: $().notice,
                            children: [
                              (0, n.jsx)(u.A, {
                                size: 14,
                                strokeWidth: 2,
                                "aria-hidden": "true"
                              }),
                              ea
                            ]
                          })
                        ]
                      },
                      "summary"
                    ) : (0, n.jsxs)(
                      r.PY1.div,
                      {
                        className: $().picker,
                        ...eW,
                        onKeyDown: (e3) => {
                          "Escape" === e3.key && (e3.stopPropagation(), eO());
                        },
                        children: [
                          (0, n.jsxs)("div", {
                            className: $().pickerHead,
                            children: [
                              (0, n.jsxs)("div", {
                                children: [
                                  (0, n.jsx)("h4", {
                                    id: `${v2}-picker`,
                                    children: "Change plan"
                                  }),
                                  (0, n.jsx)("p", {
                                    children: "Yearly billing saves 20%"
                                  })
                                ]
                              }),
                              (0, n.jsx)(w.A, {
                                label: "Billing period",
                                value: J.billing,
                                onValueChange: (e3) => {
                                  ee || Z((i3) => ({ ...i3, billing: e3 }));
                                },
                                options: [
                                  { value: "monthly", label: "Monthly" },
                                  { value: "yearly", label: "Yearly" }
                                ]
                              })
                            ]
                          }),
                          (0, n.jsx)(d.o, {
                            id: f2,
                            children: (0, n.jsx)("div", {
                              className: $().options,
                              role: "radiogroup",
                              "aria-labelledby": `${v2}-picker`,
                              onKeyDown: function(e3) {
                                let i3 = P.filter((e4) => T[e4].seats >= 12), a3 = {
                                  ArrowDown: 1,
                                  ArrowRight: 1,
                                  ArrowUp: -1,
                                  ArrowLeft: -1
                                }[e3.key], n2 = "Home" === e3.key ? i3[0] : "End" === e3.key ? i3[i3.length - 1] : a3 ? i3[(i3.indexOf(J.plan) + a3 + i3.length) % i3.length] : void 0;
                                n2 && (e3.preventDefault(), eU(n2), eT.current.get(n2)?.focus());
                              },
                              children: P.map((e3) => {
                                let i3 = T[e3], a3 = J.plan === e3, l2 = i3.seats < 12;
                                return (0, n.jsxs)(
                                  "button",
                                  {
                                    ref: (i4) => {
                                      i4 ? eT.current.set(e3, i4) : eT.current.delete(e3);
                                    },
                                    type: "button",
                                    role: "radio",
                                    "aria-checked": a3,
                                    disabled: l2,
                                    tabIndex: a3 ? 0 : -1,
                                    className: $().option,
                                    onClick: () => eU(e3),
                                    children: [
                                      a3 && (0, n.jsx)(r.PY1.span, {
                                        layoutId: "plan-highlight",
                                        className: $().optionHighlight,
                                        transition: N2 ? { duration: 0 } : k.morph,
                                        "aria-hidden": "true"
                                      }),
                                      (0, n.jsx)("span", {
                                        className: $().radio,
                                        "aria-hidden": "true"
                                      }),
                                      (0, n.jsxs)("span", {
                                        className: $().optionName,
                                        children: [
                                          i3.name,
                                          e3 === A2.plan && (0, n.jsx)("span", {
                                            className: $().optionCurrent,
                                            children: "Current"
                                          })
                                        ]
                                      }),
                                      (0, n.jsx)("span", {
                                        className: $().optionMeta,
                                        children: l2 ? `12 seats in use, ${i3.name} allows ${i3.seats}` : I(e3)
                                      }),
                                      (0, n.jsxs)("span", {
                                        className: $().optionAmount,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: $().num,
                                            children: (0, n.jsx)(_.q, {
                                              value: "monthly" === J.billing ? i3.monthly : i3.yearly,
                                              prefix: "$"
                                            })
                                          }),
                                          (0, n.jsx)("span", {
                                            className: $().per,
                                            children: "/mo"
                                          })
                                        ]
                                      }),
                                      (0, n.jsx)(U, {
                                        className: $().optionBilled,
                                        anchor: "right",
                                        children: "yearly" === J.billing ? `${H.format(12 * i3.yearly)} a year` : "Billed monthly"
                                      })
                                    ]
                                  },
                                  e3
                                );
                              })
                            })
                          }),
                          (0, n.jsxs)("div", {
                            className: $().quote,
                            children: [
                              (0, n.jsxs)("div", {
                                className: $().quoteText,
                                "aria-live": "polite",
                                children: [
                                  (0, n.jsx)(U, {
                                    className: $().quoteLabel,
                                    children: eL.amount < 0 ? "Credit to next invoice" : "Due today"
                                  }),
                                  (0, n.jsx)("span", {
                                    className: $().quoteAmount,
                                    children: (0, n.jsx)("span", {
                                      className: $().num,
                                      children: (0, n.jsx)(_.q, {
                                        value: Math.abs(eL.amount),
                                        prefix: "$",
                                        decimals: 2
                                      })
                                    })
                                  }),
                                  (0, n.jsx)(U, {
                                    className: $().quoteDetail,
                                    children: eq
                                  })
                                ]
                              }),
                              (0, n.jsxs)("div", {
                                className: $().quoteActions,
                                children: [
                                  (0, n.jsx)(y.$, {
                                    type: "button",
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: eO,
                                    disabled: ee,
                                    children: "Cancel"
                                  }),
                                  (0, n.jsx)(y.$, {
                                    type: "button",
                                    size: "sm",
                                    onClick: function() {
                                      let e3, i3;
                                      if (eL.unchanged || ee) return;
                                      let a3 = T[J.plan], n2 = R[J.billing], l2 = eL.sameTerm ? { ...A2, plan: J.plan } : {
                                        plan: J.plan,
                                        billing: J.billing,
                                        renews: n2.renews,
                                        periodEnd: n2.periodEnd,
                                        daysLeft: n2.days,
                                        periodDays: n2.days
                                      }, t3 = "billing" === eF ? `Switched to ${J.billing} billing` : "up" === eF ? `Upgraded to ${a3.name}` : `Moved to ${a3.name}`, r2 = eL.amount > 0 ? `${t3}. ${e3 = eL.amount, Y.format(e3)} charged to card ending ${el.last4}.` : eL.amount < 0 ? `${t3}. ${i3 = -eL.amount, Y.format(i3)} credited to your next invoice.` : `${t3}.`, s2 = eL.amount > 0 ? {
                                        id: `change-${++ez.current}`,
                                        date: "Sep 22, 2026",
                                        title: `${a3.name} plan`,
                                        detail: eL.sameTerm ? `Prorated, Sep 22 \u2013 ${A2.periodEnd}` : `${"yearly" === J.billing ? "Yearly" : "Monthly"}, Sep 22 \u2013 ${n2.periodEnd}`,
                                        amount: eL.amount,
                                        status: "paid"
                                      } : null;
                                      ei(true), eB(() => {
                                        ei(false), O2(l2), Q("summary"), en(r2), ef(r2), s2 && eg((e4) => [s2, ...e4]), eM.current = () => ek.current;
                                      }, 900);
                                    },
                                    disabled: eL.unchanged,
                                    loading: ee,
                                    children: eI
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      },
                      "picker"
                    )
                  })
                })
              ]
            }),
            (0, n.jsxs)("section", {
              className: $().panel,
              "aria-labelledby": `${v2}-payment`,
              children: [
                (0, n.jsx)("div", {
                  className: $().panelHead,
                  children: (0, n.jsx)("h3", {
                    id: `${v2}-payment`,
                    children: "Payment method"
                  })
                }),
                (0, n.jsxs)("div", {
                  className: $().cardRow,
                  children: [
                    (0, n.jsxs)("div", {
                      className: $().cardFace,
                      "aria-hidden": "true",
                      children: [
                        (0, n.jsxs)("span", {
                          className: $().cardTop,
                          children: [
                            (0, n.jsx)("span", { className: $().chip }),
                            (0, n.jsx)("span", { children: "Business" })
                          ]
                        }),
                        (0, n.jsxs)("span", {
                          className: $().cardBottom,
                          children: [
                            (0, n.jsx)("span", {
                              className: $().cardHolder,
                              children: "Fieldnote Labs"
                            }),
                            (0, n.jsxs)("span", {
                              className: $().cardNumber,
                              children: [
                                (0, n.jsx)("span", { children: "\u2022\u2022\u2022\u2022" }),
                                (0, n.jsx)(K, { value: el.last4 })
                              ]
                            }),
                            (0, n.jsx)("span", {
                              className: $().cardExpiry,
                              children: (0, n.jsx)(K, { value: el.expiry })
                            })
                          ]
                        })
                      ]
                    }),
                    (0, n.jsxs)("div", {
                      className: $().cardDetails,
                      children: [
                        (0, n.jsx)(U, {
                          className: $().cardTitle,
                          children: `Card ending ${el.last4}`
                        }),
                        (0, n.jsx)(U, {
                          className: $().cardMeta,
                          children: `Expires ${el.expiry}`
                        }),
                        (0, n.jsx)(y.$, {
                          ref: eS,
                          type: "button",
                          variant: "secondary",
                          size: "sm",
                          onClick: function() {
                            ec(E), eu({}), eh(""), es("edit"), eM.current = () => eA.current;
                          },
                          disabled: "edit" === er,
                          children: "Update"
                        })
                      ]
                    })
                  ]
                }),
                (0, n.jsx)(V, {
                  children: (0, n.jsx)(o.N, {
                    mode: "popLayout",
                    initial: false,
                    children: "edit" === er ? (0, n.jsxs)(
                      r.PY1.form,
                      {
                        className: $().cardForm,
                        noValidate: true,
                        onSubmit: function(e3) {
                          if (e3.preventDefault(), em) return;
                          let i3 = (function(e4) {
                            let i4 = {};
                            16 !== e4.number.replace(/\D/g, "").length && (i4.number = "Enter all 16 digits");
                            let [a4, n3] = e4.expiry.split("/").map(Number);
                            return !/^\d{2}\/\d{2}$/.test(e4.expiry) || a4 < 1 || a4 > 12 ? i4.expiry = "Use MM/YY, like 08/29" : (n3 < 26 || 26 === n3 && a4 < 9) && (i4.expiry = "This card has expired"), /^\d{3,4}$/.test(e4.cvc) || (i4.cvc = "Enter 3 or 4 digits"), i4;
                          })(eo);
                          eu(i3);
                          let a3 = i3.number ? eA : i3.expiry ? eC : i3.cvc ? eD : null;
                          if (a3) return void a3.current?.focus();
                          let n2 = {
                            last4: eo.number.replace(/\D/g, "").slice(-4),
                            expiry: eo.expiry
                          };
                          ep(true), eB(() => {
                            let e4 = `Card ending ${n2.last4} saved. Renewals and retries now use it.`;
                            ep(false), et(n2), es("summary"), eh(e4), ef(e4), eM.current = () => eS.current;
                          }, 900);
                        },
                        onKeyDown: (e3) => {
                          "Escape" === e3.key && (e3.stopPropagation(), eK());
                        },
                        "aria-label": "New card",
                        ...eW,
                        children: [
                          (0, n.jsx)(b.p, {
                            ref: eA,
                            label: "Card number",
                            inputMode: "numeric",
                            autoComplete: "cc-number",
                            placeholder: "1234 1234 1234 1234",
                            value: eo.number,
                            error: ed.number,
                            onChange: (e3) => eV("number", e3.target.value)
                          }),
                          (0, n.jsxs)("div", {
                            className: $().formRow,
                            children: [
                              (0, n.jsx)(b.p, {
                                ref: eC,
                                label: "Expiry",
                                inputMode: "numeric",
                                autoComplete: "cc-exp",
                                placeholder: "MM/YY",
                                value: eo.expiry,
                                error: ed.expiry,
                                onChange: (e3) => eV("expiry", e3.target.value)
                              }),
                              (0, n.jsx)(b.p, {
                                ref: eD,
                                label: "Security code",
                                inputMode: "numeric",
                                autoComplete: "cc-csc",
                                placeholder: "123",
                                value: eo.cvc,
                                error: ed.cvc,
                                onChange: (e3) => eV("cvc", e3.target.value)
                              })
                            ]
                          }),
                          (0, n.jsxs)("div", {
                            className: $().formFoot,
                            children: [
                              (0, n.jsx)("span", {}),
                              (0, n.jsxs)("div", {
                                className: $().formActions,
                                children: [
                                  (0, n.jsx)(y.$, {
                                    type: "button",
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: eK,
                                    disabled: em,
                                    children: "Cancel"
                                  }),
                                  (0, n.jsx)(y.$, {
                                    type: "submit",
                                    size: "sm",
                                    loading: em,
                                    children: "Save card"
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      },
                      "edit"
                    ) : ev ? (0, n.jsxs)(
                      r.PY1.p,
                      {
                        className: `${$().notice} ${$().cardNotice}`,
                        ...eW,
                        children: [
                          (0, n.jsx)(u.A, {
                            size: 14,
                            strokeWidth: 2,
                            "aria-hidden": "true"
                          }),
                          ev
                        ]
                      },
                      ev
                    ) : null
                  })
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)("section", {
          ref: eN,
          className: $().panel,
          "aria-labelledby": `${v2}-usage`,
          children: [
            (0, n.jsxs)("div", {
              className: $().panelHead,
              children: [
                (0, n.jsx)("h3", {
                  id: `${v2}-usage`,
                  children: "Usage this period"
                }),
                (0, n.jsx)("span", {
                  className: $().panelNote,
                  children: "Sep 14 \u2013 Oct 13"
                })
              ]
            }),
            (0, n.jsx)("div", {
              className: $().meters,
              children: eG.map(
                ({ key: e3, ...i3 }, a3) => (0, n.jsx)(W, { ...i3, index: a3, revealed: e$ }, e3)
              )
            })
          ]
        }),
        (0, n.jsxs)("section", {
          className: $().panel,
          "aria-labelledby": `${v2}-invoices`,
          children: [
            (0, n.jsxs)("div", {
              className: $().panelHead,
              children: [
                (0, n.jsx)("h3", { id: `${v2}-invoices`, children: "Invoices" }),
                (0, n.jsxs)("span", {
                  className: $().recipient,
                  children: [
                    (0, n.jsx)(g.e, {
                      name: "Emma Collins",
                      src: "media/people/emma-collins.svg",
                      size: "sm"
                    }),
                    "Sent to Emma Collins"
                  ]
                })
              ]
            }),
            (0, n.jsx)("ul", {
              className: $().invoices,
              children: (0, n.jsx)(o.N, {
                initial: false,
                children: e_.map((e3) => {
                  let i3, a3, l2 = B[e3.status], t3 = ex[e3.id];
                  return (0, n.jsx)(
                    r.PY1.li,
                    {
                      className: $().invoice,
                      initial: { height: 0, opacity: 0 },
                      animate: { height: "auto", opacity: 1 },
                      exit: { height: 0, opacity: 0 },
                      transition: N2 ? { duration: 0 } : {
                        height: k.smooth,
                        opacity: { duration: S.standard, ease: C }
                      },
                      children: (0, n.jsxs)("div", {
                        className: $().invoiceRow,
                        children: [
                          (0, n.jsxs)("span", {
                            className: $().invoiceText,
                            children: [
                              (0, n.jsx)("span", {
                                className: $().invoiceTitle,
                                children: e3.title
                              }),
                              (0, n.jsx)(U, {
                                className: $().invoiceDetail,
                                children: e3.detail
                              })
                            ]
                          }),
                          (0, n.jsx)("span", {
                            className: $().invoiceAmount,
                            children: (i3 = e3.amount, Y.format(i3))
                          }),
                          (0, n.jsxs)("span", {
                            className: $().invoiceMeta,
                            children: [
                              (0, n.jsx)("span", {
                                className: $().invoiceDate,
                                children: e3.date
                              }),
                              (0, n.jsx)("span", {
                                className: $().invoiceStatus,
                                children: (0, n.jsx)(x.E, {
                                  tone: l2.tone,
                                  size: "sm",
                                  icon: l2.icon,
                                  children: l2.label
                                })
                              })
                            ]
                          }),
                          (0, n.jsxs)("span", {
                            className: $().invoiceActions,
                            children: [
                              (0, n.jsx)(o.N, {
                                mode: "popLayout",
                                initial: false,
                                children: "failed" === e3.status && (0, n.jsx)(
                                  r.PY1.span,
                                  {
                                    className: $().payNow,
                                    exit: N2 ? {
                                      opacity: 0,
                                      transition: { duration: 0 }
                                    } : {
                                      opacity: 0,
                                      scale: 0.9,
                                      transition: {
                                        duration: S.exit,
                                        ease: D
                                      }
                                    },
                                    children: (0, n.jsx)(y.$, {
                                      type: "button",
                                      variant: "secondary",
                                      size: "sm",
                                      loading: eb === e3.id,
                                      "aria-label": `Pay ${a3 = e3.amount, Y.format(a3)} for ${e3.title}`,
                                      onClick: () => (function(e4) {
                                        if (eb) return;
                                        let i4 = el.last4;
                                        ew(e4.id), eB(() => {
                                          let a4;
                                          ew(null), eg(
                                            (a5) => a5.map(
                                              (a6) => a6.id === e4.id ? {
                                                ...a6,
                                                status: "paid",
                                                detail: `Paid Sep 22 with card ending ${i4}`
                                              } : a6
                                            )
                                          ), ef(
                                            `${a4 = e4.amount, Y.format(a4)} invoice from ${e4.date} paid with card ending ${i4}.`
                                          ), eM.current = () => eP.current.get(e4.id);
                                        }, 1e3);
                                      })(e3),
                                      children: "Pay now"
                                    })
                                  },
                                  "pay"
                                )
                              }),
                              (0, n.jsx)(y.$, {
                                ref: (i4) => {
                                  i4 ? eP.current.set(e3.id, i4) : eP.current.delete(e3.id);
                                },
                                type: "button",
                                variant: "ghost",
                                size: "sm",
                                className: $().iconButton,
                                loading: "preparing" === t3,
                                "aria-label": "done" === t3 ? `Invoice from ${e3.date} downloaded` : `Download invoice from ${e3.date}`,
                                onClick: () => {
                                  ex[e3.id] || (ey((i4) => ({ ...i4, [e3.id]: "preparing" })), eB(() => {
                                    ey((i4) => ({ ...i4, [e3.id]: "done" })), ef(
                                      `Invoice from ${e3.date} downloaded.`
                                    ), eB(
                                      () => ey((i4) => {
                                        let a4 = { ...i4 };
                                        return delete a4[e3.id], a4;
                                      }),
                                      2200
                                    );
                                  }, 700));
                                },
                                children: "done" === t3 ? (0, n.jsx)(u.A, {
                                  className: $().done,
                                  size: 16,
                                  strokeWidth: 2,
                                  "aria-hidden": "true"
                                }) : (0, n.jsx)(h.A, {
                                  size: 16,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                })
                              })
                            ]
                          })
                        ]
                      })
                    },
                    e3.id
                  );
                })
              })
            })
          ]
        }),
        (0, n.jsx)("p", {
          className: $().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ej
        })
      ]
    });
  }
  let X = G;
}

__m(__module,__exports,__require);
}