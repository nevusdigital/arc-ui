/* pricing-calculator (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(76256, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { PricingCalculator: () => C, default: () => E });
  var i = t(95155), r = t(12115), n = t(18310), s = t(80642), l = t(25354), o = t(28245), c = t(92171), d = t(57700), u = t(36565), p = t(2125), m = t(64577), _ = t(65024), h = t(51288), y = t(7770), g = t(97856), f = t.n(g);
  let x = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    12,
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
    200,
    250
  ], b = [
    {
      id: "starter",
      name: "Starter",
      pitch: "For small crews getting organized",
      monthly: 10,
      yearly: 8,
      maxSeats: 10,
      volume: false,
      features: (e2) => [
        { id: "projects", text: "Unlimited projects and docs" },
        { id: "storage", text: `${5 * e2} GB shared storage` },
        { id: "history", text: "30 days of version history" },
        { id: "support", text: "Email support" }
      ]
    },
    {
      id: "team",
      name: "Team",
      pitch: "For teams shipping together every week",
      monthly: 20,
      yearly: 16,
      volume: true,
      features: (e2, a2) => [
        { id: "everything", text: "Everything in Starter" },
        { id: "storage", text: `${20 * e2} GB shared storage` },
        { id: "sso", text: "Google and Microsoft sign-in" },
        ...e2 >= 25 ? [
          {
            id: "volume",
            text: e2 >= 100 ? "Volume pricing, $4 off each seat" : "Volume pricing, $2 off each seat"
          }
        ] : [],
        ..."yearly" === a2 ? [{ id: "onboarding", text: "Guided onboarding session" }] : []
      ]
    },
    {
      id: "business",
      name: "Business",
      pitch: "For companies with security reviews",
      monthly: 35,
      yearly: 28,
      volume: true,
      features: (e2, a2) => [
        { id: "everything", text: "Everything in Team" },
        { id: "saml", text: "SAML SSO and SCIM provisioning" },
        { id: "audit", text: "Audit log with 1 year retention" },
        ...e2 >= 25 ? [
          {
            id: "volume",
            text: e2 >= 100 ? "Volume pricing, $4 off each seat" : "Volume pricing, $2 off each seat"
          }
        ] : [],
        ...e2 >= 50 ? [{ id: "manager", text: "Named success manager" }] : [],
        ..."yearly" === a2 ? [{ id: "uptime", text: "99.95% uptime commitment" }] : []
      ]
    }
  ], j = (e2, a2) => !e2.maxSeats || a2 <= e2.maxSeats;
  function v(e2, a2, t2) {
    return ("yearly" === t2 ? e2.yearly : e2.monthly) - (e2.volume ? a2 >= 100 ? 4 : 2 * (a2 >= 25) : 0);
  }
  let N = (e2) => `${e2} ${1 === e2 ? "seat" : "seats"}`, { spring: T, duration: w, ease: k } = y.T, $ = [...k.enter], S = [...k.standard], A = (e2, a2) => {
    let t2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: t2 * t2,
      damping: 2 * (1 - a2) * t2,
      mass: 1
    };
  }, P = A(0.5, 0), O = A(0.32, 0), M = () => () => {
  };
  function z({ value: e2, prefix: a2 = "" }) {
    return (0, i.jsx)("span", {
      className: f().num,
      children: (0, i.jsx)(_.q, { value: e2, prefix: a2 })
    });
  }
  function B({ text: e2, reduced: a2, className: t2 }) {
    return (0, i.jsx)("span", {
      className: [f().swap, t2].filter(Boolean).join(" "),
      children: (0, i.jsx)(s.N, {
        mode: "popLayout",
        initial: false,
        children: (0, i.jsx)(
          l.PY1.span,
          {
            initial: a2 ? { opacity: 0 } : { opacity: 0, y: "0.35em" },
            animate: { opacity: 1, y: "0em" },
            exit: a2 ? { opacity: 0, transition: { duration: 0 } } : {
              opacity: 0,
              y: "-0.3em",
              transition: { duration: w.fast, ease: S }
            },
            transition: a2 ? { duration: w.instant } : { duration: w.standard, ease: $ },
            children: e2
          },
          e2
        )
      })
    });
  }
  function C() {
    let e2, a2 = (e2 = (0, r.useSyncExternalStore)(
      M,
      () => true,
      () => false
    ), !!(0, n.I)() && e2), t2 = (0, r.useId)().replace(/[^a-zA-Z0-9-]/g, ""), [y2, g2] = (0, r.useState)(x.indexOf(20)), [k2, S2] = (0, r.useState)("yearly"), [A2, C2] = (0, r.useState)(null), [E2, L] = (0, r.useState)("idle"), [I, Y] = (0, r.useState)(""), R = (0, r.useRef)([]), W = (0, r.useRef)(/* @__PURE__ */ new Map());
    (0, r.useEffect)(
      () => () => {
        R.current.forEach(window.clearTimeout);
      },
      []
    );
    let F = x[y2], U = F <= 5 ? "starter" : F < 50 ? "team" : "business", V = b.find((e3) => e3.id === A2), D = V && j(V, F) ? V : b.find((e3) => e3.id === U), G = v(D, F, k2), H = v(D, F, "monthly") * F, q = v(D, F, "yearly") * F * 12, Z = 12 * H - q, Q = "yearly" === k2 ? q : H, X = a2 ? { duration: 0 } : P, J = (0, r.useRef)(null), K = (0, o.d)(0), ee = (0, o.d)(0), ea = (0, o.d)(0), et = (0, o.d)(0), ei = (0, o.d)(1), er = (0, r.useRef)({ id: "", from: [0, 0, 0, 0], live: [0, 0, 0, 0] }), [en, es] = (0, r.useState)(false);
    (0, r.useLayoutEffect)(() => {
      let e3, t3 = J.current;
      if (!t3) return;
      let i2 = er.current, r2 = [K, ee, ea, et], n2 = () => {
        let e4 = ei.get();
        r2.forEach((a3, t4) => a3.set(i2.from[t4] + (i2.live[t4] - i2.from[t4]) * e4));
      }, s2 = () => {
        let e4 = t3.querySelector(`[data-plan="${D.id}"]`);
        e4 && (i2.live = [
          e4.offsetLeft - 1,
          e4.offsetTop - 1,
          e4.offsetWidth + 2,
          e4.offsetHeight + 2
        ], n2());
      }, l2 = "" !== i2.id && i2.id !== D.id;
      i2.id = D.id, l2 && !a2 ? (i2.from = r2.map((e4) => e4.get()), ei.jump(0), e3 = (0, c.i)(ei, 1, P)) : ei.jump(1), s2(), es(true);
      let o2 = ei.on("change", n2), d2 = new ResizeObserver(s2);
      return d2.observe(t3), t3.querySelectorAll("li[data-plan]").forEach((e4) => d2.observe(e4)), () => {
        o2(), d2.disconnect(), e3?.stop();
      };
    }, [D.id, a2, K, ee, ea, et, ei]);
    let el = (e3) => {
      g2(Math.max(0, Math.min(x.length - 1, e3))), "ready" === E2 && L("idle");
    }, eo = (e3) => {
      e3 !== k2 && (S2(e3), "ready" === E2 && L("idle"), Y(
        "yearly" === e3 ? "Yearly billing. Prices shown per seat per month, billed once a year." : "Monthly billing"
      ));
    }, ec = (e3) => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e3.key))
        return;
      e3.preventDefault();
      let a3 = "monthly" === k2 ? "yearly" : "monthly";
      eo(a3), W.current.get(a3)?.focus();
    }, ed = (e3) => {
      C2(e3.id), L("idle"), Y(`${e3.name} selected`);
    }, eu = y2 / (x.length - 1), ep = [
      { plan: "starter", at: 0 },
      { plan: "team", at: x.indexOf(6) / (x.length - 1) },
      { plan: "business", at: x.indexOf(50) / (x.length - 1) }
    ];
    return (0, i.jsxs)("section", {
      className: f().root,
      "aria-labelledby": `${t2}-title`,
      children: [
        (0, i.jsxs)("header", {
          className: f().header,
          children: [
            (0, i.jsx)("h2", {
              id: `${t2}-title`,
              className: f().title,
              children: "Pay for the seats you use"
            }),
            (0, i.jsx)("p", {
              className: f().lede,
              children: "Move the slider to your team size. Every plan includes a 14 day trial."
            })
          ]
        }),
        (0, i.jsxs)("div", {
          className: f().controls,
          children: [
            (0, i.jsxs)("div", {
              className: f().seatsBlock,
              children: [
                (0, i.jsxs)("div", {
                  className: f().seatsHead,
                  children: [
                    (0, i.jsx)("label", {
                      htmlFor: `${t2}-seats`,
                      className: f().seatsLabel,
                      children: "Team size"
                    }),
                    (0, i.jsxs)("div", {
                      className: f().seatCount,
                      children: [
                        (0, i.jsx)("button", {
                          type: "button",
                          className: f().stepButton,
                          "aria-label": "One fewer seat step",
                          onClick: () => el(y2 - 1),
                          disabled: 0 === y2,
                          children: (0, i.jsx)(u.A, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          })
                        }),
                        (0, i.jsxs)("span", {
                          className: f().seatValue,
                          "aria-hidden": "true",
                          children: [
                            (0, i.jsx)(z, { value: F }),
                            (0, i.jsx)(B, {
                              reduced: a2,
                              text: 1 === F ? "seat" : "seats",
                              className: f().seatUnit
                            })
                          ]
                        }),
                        (0, i.jsx)("button", {
                          type: "button",
                          className: f().stepButton,
                          "aria-label": "One more seat step",
                          onClick: () => el(y2 + 1),
                          disabled: y2 === x.length - 1,
                          children: (0, i.jsx)(p.A, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          })
                        })
                      ]
                    })
                  ]
                }),
                (0, i.jsxs)("div", {
                  className: f().sliderWrap,
                  style: { "--fill": eu },
                  children: [
                    (0, i.jsx)("input", {
                      id: `${t2}-seats`,
                      className: f().slider,
                      type: "range",
                      min: 0,
                      max: x.length - 1,
                      step: 1,
                      value: y2,
                      "aria-valuetext": N(F),
                      onChange: (e3) => el(Number(e3.target.value))
                    }),
                    (0, i.jsx)("div", {
                      className: f().marks,
                      "aria-hidden": "true",
                      children: ep.map(
                        (e3) => (0, i.jsx)(
                          "span",
                          {
                            className: f().mark,
                            "data-on": U === e3.plan || void 0,
                            style: { left: `${100 * e3.at}%` },
                            children: b.find((a3) => a3.id === e3.plan).name
                          },
                          e3.plan
                        )
                      )
                    })
                  ]
                })
              ]
            }),
            (0, i.jsx)("div", {
              className: f().billing,
              role: "radiogroup",
              "aria-label": "Billing period",
              children: ["monthly", "yearly"].map(
                (e3) => (0, i.jsxs)(
                  "button",
                  {
                    ref: (a3) => {
                      a3 ? W.current.set(e3, a3) : W.current.delete(e3);
                    },
                    type: "button",
                    role: "radio",
                    "aria-checked": k2 === e3,
                    tabIndex: k2 === e3 ? 0 : -1,
                    className: f().billingOption,
                    onClick: () => eo(e3),
                    onKeyDown: ec,
                    children: [
                      k2 === e3 && (0, i.jsx)(l.PY1.span, {
                        layoutId: `${t2}-billing`,
                        className: f().billingThumb,
                        transition: a2 ? { duration: 0 } : O,
                        "aria-hidden": "true"
                      }),
                      (0, i.jsx)("span", {
                        className: f().billingText,
                        children: "monthly" === e3 ? "Monthly" : "Yearly"
                      }),
                      "yearly" === e3 && (0, i.jsx)("span", {
                        className: f().saveTag,
                        children: "Save 20%"
                      })
                    ]
                  },
                  e3
                )
              )
            })
          ]
        }),
        (0, i.jsx)(d.o, {
          id: t2,
          children: (0, i.jsxs)("div", {
            ref: J,
            className: f().plansWrap,
            children: [
              (0, i.jsx)("ul", {
                className: f().plans,
                children: b.map((e3) => {
                  let r2 = j(e3, F), n2 = v(e3, F, k2), o2 = D.id === e3.id, c2 = U === e3.id, d2 = e3.features(F, k2), u2 = "yearly" === k2 ? n2 * F * 12 : n2 * F;
                  return (0, i.jsxs)(
                    "li",
                    {
                      className: f().plan,
                      "data-plan": e3.id,
                      "data-selected": o2 || void 0,
                      "data-available": r2 || void 0,
                      "aria-labelledby": `${t2}-${e3.id}`,
                      children: [
                        o2 && !en && (0, i.jsx)("span", {
                          className: f().frame,
                          "aria-hidden": "true"
                        }),
                        (0, i.jsxs)("div", {
                          className: f().planHead,
                          children: [
                            (0, i.jsx)("h3", {
                              id: `${t2}-${e3.id}`,
                              className: f().planName,
                              children: e3.name
                            }),
                            c2 && (0, i.jsx)(l.PY1.span, {
                              layoutId: "badge",
                              className: f().badge,
                              transition: X,
                              children: (0, i.jsx)(l.PY1.span, {
                                layout: "position",
                                transition: X,
                                children: "Recommended"
                              })
                            })
                          ]
                        }),
                        (0, i.jsx)("div", {
                          className: f().collapse,
                          children: (0, i.jsx)("div", {
                            children: (0, i.jsx)("p", {
                              className: f().pitch,
                              children: e3.pitch
                            })
                          })
                        }),
                        (0, i.jsx)("div", {
                          className: f().priceArea,
                          children: (0, i.jsx)(s.N, {
                            mode: "popLayout",
                            initial: false,
                            children: r2 ? (0, i.jsxs)(
                              l.PY1.div,
                              {
                                className: f().priceBlock,
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: { opacity: 0 },
                                transition: { duration: w.fast },
                                children: [
                                  (0, i.jsxs)("p", {
                                    className: f().price,
                                    children: [
                                      (0, i.jsx)("span", {
                                        className: f().priceValue,
                                        children: (0, i.jsx)(_.q, {
                                          value: n2,
                                          prefix: "$"
                                        })
                                      }),
                                      (0, i.jsxs)("span", {
                                        className: f().priceUnit,
                                        children: [
                                          "per seat",
                                          (0, i.jsx)("br", {}),
                                          "per month"
                                        ]
                                      })
                                    ]
                                  }),
                                  (0, i.jsxs)("p", {
                                    className: f().planTotal,
                                    children: [
                                      (0, i.jsx)(z, {
                                        value: u2,
                                        prefix: "$"
                                      }),
                                      (0, i.jsx)(B, {
                                        reduced: a2,
                                        text: "yearly" === k2 ? `billed yearly for ${N(F)}` : `a month for ${N(F)}`
                                      })
                                    ]
                                  })
                                ]
                              },
                              "price"
                            ) : (0, i.jsxs)(
                              l.PY1.div,
                              {
                                className: f().limit,
                                initial: a2 ? { opacity: 0 } : { opacity: 0, y: 6 },
                                animate: { opacity: 1, y: 0 },
                                exit: { opacity: 0 },
                                transition: {
                                  duration: w.standard,
                                  ease: $
                                },
                                children: [
                                  (0, i.jsxs)("p", {
                                    className: f().limitTitle,
                                    children: [
                                      "Starter fits up to ",
                                      e3.maxSeats,
                                      " seats"
                                    ]
                                  }),
                                  (0, i.jsxs)("p", {
                                    className: f().limitBody,
                                    children: ["You picked ", N(F), "."]
                                  })
                                ]
                              },
                              "limit"
                            )
                          })
                        }),
                        r2 ? (0, i.jsx)(h.A, {
                          variant: o2 ? "primary" : "secondary",
                          size: "md",
                          className: f().planButton,
                          onClick: () => ed(e3),
                          "aria-pressed": o2,
                          children: o2 ? (0, i.jsxs)(i.Fragment, {
                            children: [
                              (0, i.jsx)(m.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              "Selected"
                            ]
                          }) : `Choose ${e3.name}`
                        }) : (0, i.jsxs)(h.A, {
                          variant: "secondary",
                          size: "md",
                          className: f().planButton,
                          onClick: () => {
                            el(x.indexOf(e3.maxSeats ?? 10)), ed(e3);
                          },
                          children: ["Use ", e3.maxSeats, " seats"]
                        }),
                        (0, i.jsx)("div", {
                          className: f().collapse,
                          children: (0, i.jsx)("div", {
                            children: (0, i.jsx)("ul", {
                              className: f().features,
                              "aria-label": `${e3.name} features`,
                              children: (0, i.jsx)(s.N, {
                                initial: false,
                                children: d2.map(
                                  (e4) => (0, i.jsx)(
                                    l.PY1.li,
                                    {
                                      className: f().feature,
                                      initial: a2 ? { opacity: 0 } : { opacity: 0, height: 0 },
                                      animate: { opacity: 1, height: "auto" },
                                      exit: a2 ? {
                                        opacity: 0,
                                        transition: { duration: 0.1 }
                                      } : {
                                        opacity: 0,
                                        height: 0,
                                        transition: {
                                          height: T.smooth,
                                          opacity: { duration: w.fast }
                                        }
                                      },
                                      transition: a2 ? { duration: 0.12 } : {
                                        height: T.smooth,
                                        opacity: {
                                          duration: w.standard,
                                          ease: $,
                                          delay: 0.05
                                        }
                                      },
                                      children: (0, i.jsxs)("span", {
                                        className: f().featureInner,
                                        children: [
                                          (0, i.jsx)(m.A, {
                                            className: f().featureIcon,
                                            size: 16,
                                            strokeWidth: 1.75,
                                            "aria-hidden": "true"
                                          }),
                                          (0, i.jsx)(B, {
                                            reduced: a2,
                                            text: e4.text,
                                            className: f().featureText
                                          })
                                        ]
                                      })
                                    },
                                    e4.id
                                  )
                                )
                              })
                            })
                          })
                        })
                      ]
                    },
                    e3.id
                  );
                })
              }),
              en && (0, i.jsx)(l.PY1.span, {
                className: `${f().frame} ${f().frameFloat}`,
                style: { x: K, y: ee, width: ea, height: et },
                "aria-hidden": "true"
              })
            ]
          })
        }),
        (0, i.jsxs)("div", {
          className: f().totals,
          children: [
            (0, i.jsxs)("div", {
              className: f().totalsMain,
              children: [
                (0, i.jsx)("p", {
                  className: f().totalsPlan,
                  children: (0, i.jsx)(B, {
                    reduced: a2,
                    text: `${D.name}, ${N(F)}`
                  })
                }),
                (0, i.jsxs)("p", {
                  className: f().totalsDue,
                  children: [
                    (0, i.jsx)(z, { value: Q, prefix: "$" }),
                    (0, i.jsx)(B, {
                      reduced: a2,
                      text: "yearly" === k2 ? "per year" : "per month",
                      className: f().totalsUnit
                    })
                  ]
                }),
                (0, i.jsx)("p", {
                  className: f().totalsNote,
                  children: (0, i.jsx)(B, {
                    reduced: a2,
                    text: `$${G.toLocaleString("en-US")} per seat per month${"yearly" === k2 ? ", billed once a year" : ""}`
                  })
                })
              ]
            }),
            (0, i.jsx)("div", {
              className: f().savings,
              children: (0, i.jsx)(s.N, {
                mode: "popLayout",
                initial: false,
                children: "yearly" === k2 ? (0, i.jsxs)(
                  l.PY1.p,
                  {
                    className: f().saving,
                    initial: a2 ? { opacity: 0 } : { opacity: 0, y: 6 },
                    animate: { opacity: 1, y: 0 },
                    exit: {
                      opacity: 0,
                      y: a2 ? 0 : -6,
                      transition: { duration: w.fast }
                    },
                    transition: { duration: w.standard, ease: $ },
                    children: [
                      (0, i.jsx)(m.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      (0, i.jsxs)("span", {
                        children: [
                          "You save ",
                          (0, i.jsx)(z, { value: Z, prefix: "$" }),
                          " a year"
                        ]
                      })
                    ]
                  },
                  "saving"
                ) : (0, i.jsxs)(
                  l.PY1.button,
                  {
                    type: "button",
                    className: f().switch,
                    onClick: () => eo("yearly"),
                    initial: a2 ? { opacity: 0 } : { opacity: 0, y: 6 },
                    animate: { opacity: 1, y: 0 },
                    exit: {
                      opacity: 0,
                      y: a2 ? 0 : -6,
                      transition: { duration: w.fast }
                    },
                    transition: { duration: w.standard, ease: $ },
                    children: [
                      "Save ",
                      (0, i.jsx)(z, { value: Z, prefix: "$" }),
                      " with yearly billing"
                    ]
                  },
                  "switch"
                )
              })
            }),
            (0, i.jsx)(h.A, {
              variant: "primary",
              size: "lg",
              className: f().cta,
              onClick: () => {
                "idle" === E2 && (L("starting"), R.current.push(
                  window.setTimeout(() => {
                    L("ready"), Y(`Trial of ${D.name} started for ${N(F)}.`), R.current.push(
                      window.setTimeout(
                        () => L((e3) => "ready" === e3 ? "idle" : e3),
                        2800
                      )
                    );
                  }, 1100)
                ));
              },
              loading: "starting" === E2,
              children: "ready" === E2 ? (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(m.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  }),
                  "Trial started"
                ]
              }) : `Start ${D.name} trial`
            })
          ]
        }),
        (0, i.jsx)("p", {
          className: f().srOnly,
          "aria-live": "polite",
          children: I
        })
      ]
    });
  }
  let E = C;
}

__m(__module,__exports,__require);
});
A.regCss(97856, ".root{box-sizing:border-box;width:min(100%,1040px);min-width:0;margin-inline:auto;padding:8px 0;container-type:inline-size;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root *,.root :after,.root :before{box-sizing:border-box}\n.root p{margin:0}\n@container (max-width: 560px){.root{padding:4px 0}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.num{display:inline-flex;font-variant-numeric:tabular-nums}\n.num>span{color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit}\n.planTotal>.num{color:var(--foreground);font-weight:500}\n.swap{position:relative;display:inline-block}\n.swap>span{display:inline-block}\n.header{display:grid;max-width:34rem;gap:8px;margin:0 auto 28px;text-align:center}\n.title{margin:0;font-family:var(--font-display);font-size:var(--text-3xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display);text-wrap:balance}\n.title{font-size:var(--text-2xl)}\n.lede{color:var(--text-secondary);font-size:var(--text-sm);text-wrap:pretty}\n.controls{display:flex;flex-wrap:wrap;align-items:flex-end;gap:20px 32px;margin-bottom:20px;padding:20px 24px;border-radius:var(--radius-panel);background:var(--surface-muted)}\n.controls{padding:16px 16px 18px}\n.seatsBlock{display:grid;min-width:min(100%,18rem);flex:1;gap:14px}\n.seatsHead{display:flex;align-items:center;justify-content:space-between;gap:12px}\n.seatsLabel{color:var(--text-secondary);font-weight:500}\n.seatCount{display:inline-flex;align-items:center;gap:4px}\n.seatValue{display:inline-flex;min-width:7.5ch;align-items:baseline;justify-content:center;gap:.3em;font-size:var(--text-lg);font-weight:500;font-variant-numeric:tabular-nums}\n.seatUnit{color:var(--text-secondary);font-size:var(--text-sm);font-weight:400}\n.stepButton{display:grid;width:30px;height:30px;place-items:center;padding:0;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);color:var(--text-secondary);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.stepButton:active:not(:disabled){transform:scale(.92)}\n.stepButton:disabled{opacity:.4;cursor:default}\n@media (hover:hover) and (pointer:fine){.stepButton:hover:not(:disabled){background:var(--surface-raised);color:var(--foreground)}\n.sliderWrap{--thumb:22px;position:relative;padding-bottom:22px}\n.slider{display:block;width:100%;height:var(--thumb);margin:0;background:transparent;cursor:pointer;-webkit-appearance:none;appearance:none;touch-action:pan-y}\n.slider::-webkit-slider-runnable-track{height:6px;border-radius:var(--radius-pill);background:linear-gradient(to right,var(--control-fill) calc(var(--fill) * (100% - var(--thumb)) + var(--thumb) / 2),color-mix(in oklab,var(--foreground) 10%,transparent) 0)}\n.slider::-moz-range-track{height:6px;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--foreground) 10%,transparent)}\n.slider::-moz-range-progress{height:6px;border-radius:var(--radius-pill);background:var(--control-fill)}\n.slider::-webkit-slider-thumb{width:var(--thumb);height:var(--thumb);margin-top:calc((6px - var(--thumb)) / 2);border:1px solid var(--border);border-radius:50%;background:var(--surface-raised);box-shadow:var(--shadow-raised);-webkit-appearance:none;appearance:none;transition:transform var(--duration-fast) var(--ease-standard)}\n.slider::-moz-range-thumb{width:var(--thumb);height:var(--thumb);border:1px solid var(--border);border-radius:50%;background:var(--surface-raised);box-shadow:var(--shadow-raised);transition:transform var(--duration-fast) var(--ease-standard)}\n.slider:active::-webkit-slider-thumb{transform:scale(1.12)}\n.slider:active::-moz-range-thumb{transform:scale(1.12)}\n@media (prefers-reduced-motion:reduce){.slider::-moz-range-thumb,.slider::-webkit-slider-thumb{transition-duration:0s}\n.marks{position:absolute;right:calc(var(--thumb) / 2);bottom:0;left:calc(var(--thumb) / 2);height:18px;pointer-events:none}\n.mark{position:absolute;top:0;padding-left:7px;color:var(--text-muted);font-size:var(--text-xs);white-space:nowrap;transition:color var(--duration-standard) var(--ease-standard)}\n.mark:before{content:\"\";position:absolute;top:3px;left:0;width:1px;height:11px;background:var(--border-strong)}\n.mark[data-on]{color:var(--foreground)}\n.mark:first-child{margin-left:calc(var(--thumb) / -2)}\n.mark:first-child:before{display:none}\n.mark:first-child{padding-left:0}\n.billingOption,.collapse,.features,.mark,.pitch,.plan:not([data-selected]) .collapse{transition-duration:0s;transition-delay:0s}\n.billing{position:relative;display:inline-flex;flex:none;padding:3px;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--foreground) 6%,transparent)}\n.billing{width:100%}\n.billingOption{position:relative;display:inline-flex;height:32px;align-items:center;gap:8px;padding:0 14px;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);cursor:pointer;font:inherit;font-weight:500;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard)}\n.billingOption[aria-checked=true]{color:var(--foreground)}\n.billingOption:hover{color:var(--foreground)}\n.billingOption{flex:1;justify-content:center}\n.billingThumb{position:absolute;inset:0;border-radius:inherit;background:var(--surface-raised);box-shadow:var(--shadow-resting),inset 0 0 0 1px var(--border)}\n:root[data-theme=dark] .billingThumb{background:color-mix(in oklab,var(--surface-raised),var(--foreground) 8%)}\n.billingText,.saveTag{position:relative}\n.saveTag{color:var(--success);font-size:var(--text-xs)}\n.plans{display:grid;margin:0 0 16px;padding:0;gap:12px;grid-template-columns:repeat(3,minmax(0,1fr));list-style:none}\n@container (max-width: 860px){.plans{grid-template-columns:minmax(0,1fr);gap:8px}\n.plan{position:relative;display:flex;min-width:0;flex-direction:column;padding:20px;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface)}\n.plan:not([data-available]) .features,.plan:not([data-available]) .pitch{opacity:.5}\n.plan[data-selected] .featureInner{color:var(--foreground)}\n.plan[data-selected] .featureIcon{color:var(--success)}\n.plan:not([data-selected]) .collapse{grid-template-rows:0fr;opacity:0;visibility:hidden;transition:grid-template-rows var(--duration-spring) var(--ease-spring),opacity var(--duration-fast) var(--ease-standard),visibility 0s var(--duration-spring)}\n.plan{padding:18px 18px 16px}\n.pitch{margin-top:4px;color:var(--text-secondary);transition:opacity var(--duration-standard) var(--ease-standard)}\n.features{display:grid;margin:16px 0 0;padding:12px 0 0;border-top:1px solid var(--border-subtle);list-style:none;transition:opacity var(--duration-standard) var(--ease-standard)}\n.frame{position:absolute;inset:-1px;border:1.5px solid var(--accent);border-radius:var(--radius-panel);pointer-events:none}\n.plansWrap{position:relative}\n.frameFloat{inset:auto;top:0;left:0}\n.planHead{position:relative;display:flex;min-height:26px;align-items:center;justify-content:space-between;gap:8px}\n.planName{margin:0;font-size:var(--text-lg);font-weight:500;letter-spacing:var(--tracking-body)}\n.badge{display:inline-flex;height:22px;align-items:center;padding:0 8px;overflow:hidden;border-radius:var(--radius-pill);background:var(--accent-subtle);color:var(--accent-strong);font-size:var(--text-xs);font-weight:500;white-space:nowrap}\n.collapse{display:grid;grid-template-rows:1fr;transition:grid-template-rows var(--duration-spring) var(--ease-spring),opacity var(--duration-standard) var(--ease-standard),visibility 0s}\n.collapse>div{min-height:0;overflow:hidden}\n.priceArea{position:relative;display:grid;min-height:76px;margin:16px 0 14px}\n.priceArea{min-height:0}\n.limit,.priceBlock{grid-area:1/1}\n.limit{display:grid;align-content:center;gap:2px}\n.price{display:flex;align-items:flex-end;gap:10px}\n.priceValue{display:inline-flex;font-family:var(--font-display);font-size:var(--text-3xl);font-weight:400;letter-spacing:var(--tracking-display);line-height:1}\n.priceUnit{padding-bottom:3px;color:var(--text-muted);font-size:var(--text-xs);line-height:1.3}\n.planTotal{display:flex;flex-wrap:wrap;align-items:baseline;gap:0 .35em;margin-top:10px;color:var(--text-secondary)}\n.limitTitle{font-weight:500}\n.limitBody{color:var(--text-secondary)}\n.planButton{width:100%}\n.feature{overflow:hidden}\n.featureInner{display:flex;align-items:flex-start;gap:8px;padding:4px 0;color:var(--text-secondary)}\n.featureIcon{flex:none;margin-top:2px;color:var(--text-muted)}\n.featureText{min-width:0}\n.featureText>span{white-space:normal}\n.totals{display:grid;align-items:center;gap:16px 24px;padding:18px 20px 18px 24px;border-radius:var(--radius-panel);background:var(--surface-muted);grid-template-columns:minmax(0,1fr) auto auto}\n.totals{grid-template-columns:minmax(0,1fr) auto}\n.totals{grid-template-columns:minmax(0,1fr);padding:16px}\n.totalsMain{display:grid;min-width:0;gap:2px}\n.totalsPlan{color:var(--text-secondary)}\n.totalsDue{display:flex;align-items:baseline;gap:.4em;font-size:var(--text-2xl);font-weight:500;letter-spacing:var(--tracking-body);line-height:1.2;font-variant-numeric:tabular-nums}\n.totalsUnit{color:var(--text-secondary);font-size:var(--text-sm);font-weight:400;letter-spacing:var(--tracking-body)}\n.totalsNote{color:var(--text-muted);font-size:var(--text-xs)}\n.savings{display:grid;justify-items:end}\n.savings{justify-items:start}\n.saving{display:inline-flex;align-items:center;gap:6px;color:var(--success);font-weight:500;white-space:nowrap}\n.saving>span{display:inline-flex;gap:.3em}\n@container (max-width: 360px){.saving,.switch{white-space:normal}\n.switch{display:inline-flex;gap:.3em;height:32px;align-items:center;padding:0 12px;border:1px solid var(--border-strong);border-radius:var(--radius-pill);background:transparent;color:var(--foreground);cursor:pointer;font:inherit;font-weight:500;white-space:nowrap;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.switch:active{transform:scale(.97)}\n.switch:hover{border-color:var(--foreground)}\n.switch{height:auto;min-height:34px;padding-block:6px}\n.cta{min-width:13rem}\n.cta{grid-column:1/-1;width:100%}", {"root":"root","srOnly":"srOnly","num":"num","planTotal":"planTotal","swap":"swap","header":"header","title":"title","lede":"lede","controls":"controls","seatsBlock":"seatsBlock","seatsHead":"seatsHead","seatsLabel":"seatsLabel","seatCount":"seatCount","seatValue":"seatValue","seatUnit":"seatUnit","stepButton":"stepButton","sliderWrap":"sliderWrap","slider":"slider","marks":"marks","mark":"mark","billingOption":"billingOption","collapse":"collapse","features":"features","pitch":"pitch","plan":"plan","billing":"billing","billingThumb":"billingThumb","billingText":"billingText","saveTag":"saveTag","plans":"plans","featureInner":"featureInner","featureIcon":"featureIcon","frame":"frame","plansWrap":"plansWrap","frameFloat":"frameFloat","planHead":"planHead","planName":"planName","badge":"badge","priceArea":"priceArea","limit":"limit","priceBlock":"priceBlock","price":"price","priceValue":"priceValue","priceUnit":"priceUnit","limitTitle":"limitTitle","limitBody":"limitBody","planButton":"planButton","feature":"feature","featureText":"featureText","totals":"totals","totalsMain":"totalsMain","totalsPlan":"totalsPlan","totalsDue":"totalsDue","totalsUnit":"totalsUnit","totalsNote":"totalsNote","savings":"savings","saving":"saving","switch":"switch","cta":"cta"});
A.cssFor("pricing-calculator", [97856]);
A.item("pricing-calculator", {entry:76256, export:"PricingCalculator", kind:"block", tier:"pro", unresolved:[]});
})();