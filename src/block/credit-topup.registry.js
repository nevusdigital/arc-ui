/* credit-topup (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(355, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { CreditTopup: () => G, default: () => H, quoteCredits: () => T });
  var r = a(95155), i = a(12115), n = a(18310), s = a(80642), l = a(25354), o = a(57700), c = a(64962), d = a(35484), u = a(82749), p = a(71019), h = a(5736), m = a(11012), _ = a(64577), f = a(51288), b = a(94274), x = a(50680);
  let y = { visa: "Visa", mastercard: "Mastercard" };
  function g({ brand: e2, className: t2 }) {
    let a2 = (0, i.useId)().replace(/[^a-zA-Z0-9_-]/g, "");
    return (0, r.jsxs)("svg", {
      className: t2,
      width: 34,
      height: 22,
      viewBox: "0 0 34 22",
      role: "img",
      "aria-label": y[e2],
      children: [
        (0, r.jsx)("rect", {
          x: ".5",
          y: ".5",
          width: "33",
          height: "21",
          rx: "4.5",
          fill: "#fff",
          stroke: "#d9d3ca"
        }),
        "visa" === e2 ? (0, r.jsx)("svg", {
          x: "5",
          y: "3",
          width: "24",
          height: "16",
          viewBox: "0 6 24 12",
          children: (0, r.jsx)("path", {
            d: "M9.112 8.262L5.97 15.758H3.92L2.374 9.775c-.094-.368-.175-.503-.461-.658C1.447 8.864.677 8.627 0 8.479l.046-.217h3.3a.904.904 0 01.894.764l.817 4.338 2.018-5.102zm8.033 5.049c.008-1.979-2.736-2.088-2.717-2.972.006-.269.262-.555.822-.628a3.66 3.66 0 011.913.336l.34-1.59a5.207 5.207 0 00-1.814-.333c-1.917 0-3.266 1.02-3.278 2.479-.012 1.079.963 1.68 1.698 2.04.756.367 1.01.603 1.006.931-.005.504-.602.725-1.16.734-.975.015-1.54-.263-1.992-.473l-.351 1.642c.453.208 1.289.39 2.156.398 2.037 0 3.37-1.006 3.377-2.564m5.061 2.447H24l-1.565-7.496h-1.656a.883.883 0 00-.826.55l-2.909 6.946h2.036l.405-1.12h2.488zm-2.163-2.656l1.02-2.815.588 2.815zm-8.16-4.84l-1.603 7.496H8.34l1.605-7.496z",
            fill: "#1a1f71"
          })
        }) : (0, r.jsxs)("g", {
          children: [
            (0, r.jsx)("defs", {
              children: (0, r.jsx)("clipPath", {
                id: `${a2}-l`,
                children: (0, r.jsx)("circle", {
                  cx: 13.4,
                  cy: 11,
                  r: 5.8
                })
              })
            }),
            (0, r.jsx)("circle", {
              cx: 13.4,
              cy: 11,
              r: 5.8,
              fill: "#eb001b"
            }),
            (0, r.jsx)("circle", {
              cx: 20.6,
              cy: 11,
              r: 5.8,
              fill: "#f79e1b"
            }),
            (0, r.jsx)("circle", {
              cx: 20.6,
              cy: 11,
              r: 5.8,
              fill: "#ff5f00",
              clipPath: `url(#${a2}-l)`
            })
          ]
        })
      ]
    });
  }
  let j = {
    unitPrice: 0.01,
    currency: "USD",
    bonusTiers: [
      { min: 5e3, percent: 10 },
      { min: 2e4, percent: 15 }
    ]
  }, v = [1e3, 5e3, 2e4], N = { min: 500, max: 3e4, step: 500 }, w = [500, 1e3, 2500], k = [
    356,
    402,
    388,
    441,
    297,
    214,
    198,
    423,
    468,
    437,
    489,
    452,
    471,
    318
  ].map((e2, t2) => ({
    date: `2026-10-${String(14 + t2).padStart(2, "0")}`,
    credits: e2
  })), S = [
    {
      id: "card_visa_4242",
      brand: "visa",
      last4: "4242",
      expires: "08/2028"
    },
    {
      id: "card_mc_5454",
      brand: "mastercard",
      last4: "5454",
      expires: "03/2029"
    }
  ];
  function T(e2, t2) {
    let a2 = [...t2.bonusTiers].sort((e3, t3) => t3.min - e3.min).find((t3) => e2 >= t3.min), r2 = a2 ? Math.round(e2 * a2.percent / 100) : 0;
    return {
      credits: e2,
      bonus: r2,
      total: e2 + r2,
      price: Math.round(e2 * t2.unitPrice * 100) / 100,
      currency: t2.currency
    };
  }
  var A = a(28245), C = a(55809), P = a(92171), R = a(97470), $ = a.n(R);
  let E = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0], M = [0.22, 1, 0.36, 1];
  function I({
    value: e2,
    place: t2,
    change: a2,
    duration: n2,
    spin: s2,
    reduced: o2
  }) {
    let c2 = (0, A.d)(e2), d2 = (0, C.G)(c2, (e3) => `${-((e3 % 10 + 10) % 10 * 1.2)}em`), { up: u2, diff: p2, version: h2 } = a2, m2 = (0, i.useRef)(h2);
    return (0, i.useEffect)(() => {
      let a3 = m2.current !== h2;
      m2.current = h2;
      let r2 = c2.get(), i2 = (Math.round(r2) % 10 + 10) % 10;
      if (o2) return void c2.jump(e2);
      let l2 = a3 && s2 && t2 <= 2 && p2 >= 10 ** t2 ? 1 : 0;
      if (i2 === e2 && !l2) return;
      let d3 = u2 ? (e2 - i2 + 10) % 10 + 10 * l2 : -((i2 - e2 + 10) % 10 + 10 * l2), _2 = (0, P.i)(c2, Math.round(r2) + d3, { duration: n2, ease: M });
      return () => _2.stop();
    }, [e2, h2, u2, p2, n2, s2, t2, o2, c2]), (0, r.jsxs)("span", {
      className: $().digit,
      children: [
        (0, r.jsx)("span", { className: $().digitGhost, children: "0" }),
        (0, r.jsx)(l.PY1.span, {
          className: $().digitStrip,
          style: { y: d2 },
          "aria-hidden": "true",
          children: E.map(
            (e3, t3) => (0, r.jsx)("span", { className: $().digitCell, children: e3 }, t3)
          )
        })
      ]
    });
  }
  function L({
    value: e2,
    format: t2,
    duration: a2 = 0.24,
    spin: o2 = false,
    className: c2
  }) {
    let d2 = (0, n.I)() ?? false, [u2, p2] = (0, i.useState)({
      value: e2,
      change: { up: true, diff: 0, version: 0 }
    }), h2 = u2.change;
    u2.value !== e2 && (h2 = {
      up: e2 > u2.value,
      diff: Math.abs(e2 - u2.value),
      version: u2.change.version + 1
    }, p2({ value: e2, change: h2 }));
    let m2 = t2(e2), _2 = m2.split(""), f2 = 0, b2 = _2.map((e3, t3) => ({
      char: e3,
      fromRight: _2.length - t3,
      digit: /\d/.test(e3)
    })).reverse().map((e3) => ({ ...e3, place: e3.digit ? f2++ : -1 })).reverse();
    return (0, r.jsxs)("span", {
      className: [$().rolling, c2].filter(Boolean).join(" "),
      children: [
        (0, r.jsx)("span", { className: $().srOnly, children: m2 }),
        (0, r.jsx)("span", {
          "aria-hidden": "true",
          children: (0, r.jsx)(s.N, {
            initial: false,
            children: b2.map(
              (e3) => (0, r.jsx)(
                l.PY1.span,
                {
                  className: $().slot,
                  initial: d2 ? { opacity: 0 } : { width: 0, opacity: 0 },
                  animate: { width: "auto", opacity: 1 },
                  exit: d2 ? { opacity: 0, transition: { duration: 0 } } : { width: 0, opacity: 0 },
                  transition: d2 ? { duration: 0 } : {
                    width: {
                      type: "spring",
                      visualDuration: 0.24,
                      bounce: 0
                    },
                    opacity: { duration: 0.16, ease: M }
                  },
                  children: e3.digit ? (0, r.jsx)(I, {
                    value: Number(e3.char),
                    place: e3.place,
                    change: h2,
                    duration: a2,
                    spin: o2,
                    reduced: d2
                  }) : e3.char
                },
                `${e3.fromRight}-${e3.digit ? "d" : e3.char}`
              )
            )
          })
        })
      ]
    });
  }
  let D = (e2) => e2.toLocaleString("en-US"), B = {
    initial: { opacity: 0, y: 2 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.16, ease: [0.16, 1, 0.3, 1] }
    },
    exit: { opacity: 0, transition: { duration: 0.1 } }
  }, F = { type: "spring", visualDuration: 0.24, bounce: 0 };
  function O(e2, t2, a2) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: t2,
      minimumFractionDigits: 2 * !!a2,
      maximumFractionDigits: 2 * !!a2
    }).format(e2);
  }
  function Y(e2, t2, a2, r2) {
    let i2 = "ArrowRight" === e2.key || "ArrowDown" === e2.key ? (t2 + 1) % a2 : "ArrowLeft" === e2.key || "ArrowUp" === e2.key ? (t2 - 1 + a2) % a2 : "Home" === e2.key ? 0 : "End" === e2.key ? a2 - 1 : -1;
    if (i2 < 0) return;
    e2.preventDefault(), r2(i2);
    let n2 = e2.currentTarget.parentElement?.querySelectorAll("[role=radio]");
    n2?.[i2]?.focus();
  }
  function G({
    balance: e2,
    defaultBalance: t2 = 840,
    usage: a2 = k,
    packs: A2 = v,
    pricing: C2 = j,
    range: P2 = N,
    defaultCredits: R2,
    paymentMethods: E2 = S,
    thresholds: M2 = w,
    defaultAutoTopup: I2 = { enabled: false, threshold: 1e3 },
    onAutoTopupChange: H2,
    onPaymentMethodChange: z,
    onPurchase: U,
    onPurchased: q,
    className: X
  }) {
    var Q;
    let K = (0, i.useId)(), V = (0, n.I)() ?? false, [Z, J] = (0, i.useState)(t2), W = e2 ?? Z, [ee, et] = (0, i.useState)(R2 ?? A2[1] ?? A2[0] ?? P2.min), [ea, er] = (0, i.useState)(0), [ei, en] = (0, i.useState)(I2), [es, el] = (0, i.useState)("idle"), [eo, ec] = (0, i.useState)(null), [ed, eu] = (0, i.useState)(null), ep = (0, i.useRef)(null), eh = (0, i.useRef)(void 0), em = "processing" === es;
    (0, i.useEffect)(
      () => () => {
        ep.current?.abort(), clearTimeout(eh.current);
      },
      []
    );
    let e_ = T(ee, C2), ef = E2[ea] ?? E2[0], eb = (0, i.useMemo)(() => {
      var e3;
      return e3 = C2.currency, new Intl.NumberFormat("en-US", { style: "currency", currency: e3 }).formatToParts(0).find((e4) => "currency" === e4.type)?.value ?? "";
    }, [C2.currency]), ex = !U, ey = a2.length > 1 ? a2.slice(0, -1) : a2, eg = Math.max(
      1,
      Math.round(
        ey.reduce((e3, t3) => e3 + t3.credits, 0) / Math.max(1, ey.length)
      )
    ), ej = Math.floor(W / eg), ev = Math.max(1, ...a2.map((e3) => e3.credits)), eN = W < ei.threshold, ew = O(1e3 * C2.unitPrice, C2.currency, 1e3 * C2.unitPrice % 1 != 0);
    function ek(e3, t3, a3 = 2600) {
      clearTimeout(eh.current), ec({ key: Date.now(), text: e3, tone: t3 }), "error" !== t3 && (eh.current = setTimeout(() => {
        ec(null), el((e4) => "done" === e4 ? "idle" : e4);
      }, a3));
    }
    function eS(e3) {
      em || (et(e3), "error" === es && (el("idle"), ec(null)));
    }
    function eT(e3) {
      em || (en(e3), H2?.({ ...e3, credits: e_.total }), ek(
        e3.enabled ? `Auto top-up on below ${D(e3.threshold)} credits` : "Auto top-up off",
        "auto"
      ));
    }
    async function eA() {
      if (em || !ef) return;
      clearTimeout(eh.current), ep.current?.abort();
      let t3 = new AbortController();
      ep.current = t3;
      let a3 = { ...e_, paymentMethodId: ef.id };
      ec(null), el("processing");
      try {
        if (U) await U(a3, t3.signal);
        else {
          var r2;
          await (r2 = t3.signal, new Promise((e3, t4) => {
            let a4 = setTimeout(e3, 1200);
            r2.addEventListener(
              "abort",
              () => {
                clearTimeout(a4), t4(new DOMException("Aborted", "AbortError"));
              },
              { once: true }
            );
          }));
        }
        if (t3.signal.aborted) return;
        let i2 = W + a3.total;
        void 0 === e2 && J(i2), el("done"), ek(
          `Added ${D(a3.total)} credits.${ex ? " Nothing was charged." : ""}`,
          "done",
          2400
        ), q?.(a3, i2);
      } catch (e3) {
        if (t3.signal.aborted) return;
        el("error"), ek(
          e3 instanceof Error && e3.message ? e3.message : "Payment failed. Try again or change card.",
          "error"
        );
      }
    }
    let eC = eo ? {
      key: `m${eo.key}`,
      text: eo.text,
      icon: "done" === eo.tone ? (0, r.jsx)(c.A, { className: $().good }) : "error" === eo.tone ? (0, r.jsx)(d.A, { className: $().bad }) : (0, r.jsx)(u.A, {})
    } : em && ef ? {
      key: "busy",
      text: `Charging ${y[ef.brand]} ending ${ef.last4}`,
      icon: (0, r.jsx)(p.A, {})
    } : {
      key: "idle",
      text: ex ? "Simulated checkout. Credits never expire." : "Credits never expire.",
      icon: (0, r.jsx)(h.A, {})
    }, eP = A2.indexOf(ee), eR = M2.indexOf(ei.threshold), e$ = null === ed ? null : a2[ed];
    return (0, r.jsxs)("section", {
      className: [$().card, X].filter(Boolean).join(" "),
      "aria-label": "Buy AI credits",
      "aria-busy": em || void 0,
      children: [
        (0, r.jsxs)("div", {
          className: $().head,
          children: [
            (0, r.jsxs)("div", {
              className: $().balance,
              children: [
                (0, r.jsxs)("div", {
                  className: $().labelRow,
                  children: [
                    (0, r.jsx)("span", {
                      className: $().muted,
                      children: "Credit balance"
                    }),
                    (0, r.jsx)("span", {
                      className: $().health,
                      children: (0, r.jsx)(s.N, {
                        mode: "popLayout",
                        initial: false,
                        children: (0, r.jsxs)(
                          l.PY1.span,
                          {
                            className: $().healthInner,
                            ...B,
                            children: [
                              eN ? (0, r.jsx)(m.A, {
                                className: $().warn,
                                "aria-hidden": "true"
                              }) : (0, r.jsx)(c.A, {
                                className: $().good,
                                "aria-hidden": "true"
                              }),
                              eN ? "Running low" : "Healthy"
                            ]
                          },
                          eN ? "low" : "ok"
                        )
                      })
                    })
                  ]
                }),
                (0, r.jsxs)("div", {
                  className: $().amount,
                  children: [
                    (0, r.jsx)(L, {
                      value: W,
                      format: D,
                      duration: 0.9,
                      spin: true,
                      className: $().big
                    }),
                    (0, r.jsx)("span", {
                      className: $().unit,
                      children: "credits"
                    })
                  ]
                }),
                (0, r.jsx)("div", {
                  className: $().metaSlot,
                  children: (0, r.jsx)(s.N, {
                    mode: "popLayout",
                    initial: false,
                    children: (0, r.jsx)(
                      l.PY1.span,
                      {
                        className: $().meta,
                        ...B,
                        children: ej < 1 ? "Less than a day left" : `About ${ej} ${1 === ej ? "day" : "days"} left at ${D(eg)} a day`
                      },
                      ej
                    )
                  })
                })
              ]
            }),
            (0, r.jsxs)("div", {
              className: $().chart,
              children: [
                (0, r.jsx)("div", {
                  className: $().bars,
                  role: "img",
                  "aria-label": `Daily usage, last ${a2.length} days. Average ${D(eg)} credits a day.`,
                  onPointerLeave: () => eu(null),
                  children: a2.map(
                    (e3, t3) => (0, r.jsx)(
                      "span",
                      {
                        className: $().barHit,
                        onPointerEnter: () => eu(t3),
                        "data-today": t3 === a2.length - 1 || void 0,
                        "data-active": ed === t3 || void 0,
                        "data-dim": null !== ed && ed !== t3 || void 0,
                        children: (0, r.jsx)("span", {
                          className: $().bar,
                          style: {
                            height: `${Math.max(6, e3.credits / ev * 100)}%`
                          }
                        })
                      },
                      e3.date
                    )
                  )
                }),
                (0, r.jsx)("div", {
                  className: $().caption,
                  "aria-hidden": "true",
                  children: (0, r.jsx)(s.N, {
                    mode: "popLayout",
                    initial: false,
                    children: (0, r.jsx)(
                      l.PY1.span,
                      {
                        ...B,
                        children: e$ ? (0, r.jsxs)(r.Fragment, {
                          children: [
                            ed === a2.length - 1 ? "Today" : (Q = e$.date, (/* @__PURE__ */ new Date(
                              `${Q}T12:00:00Z`
                            )).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              timeZone: "UTC"
                            })),
                            ": ",
                            (0, r.jsx)("span", {
                              className: $().num,
                              children: D(e$.credits)
                            })
                          ]
                        }) : `Last ${a2.length} days`
                      },
                      e$ ? e$.date : "all"
                    )
                  })
                })
              ]
            })
          ]
        }),
        (0, r.jsxs)("div", {
          className: [$().section, $().buySection].join(" "),
          children: [
            (0, r.jsxs)("div", {
              className: $().titleRow,
              children: [
                (0, r.jsx)("span", {
                  className: $().title,
                  id: `${K}-packs`,
                  children: "Add credits"
                }),
                (0, r.jsxs)("span", {
                  className: $().muted,
                  children: [ew, " per 1,000"]
                })
              ]
            }),
            (0, r.jsx)(o.o, {
              id: `${K}-pack`,
              children: (0, r.jsx)("div", {
                className: $().packs,
                role: "radiogroup",
                "aria-labelledby": `${K}-packs`,
                children: A2.map((e3, t3) => {
                  let a3 = T(e3, C2), i2 = a3.bonus ? Math.round(a3.bonus / e3 * 100) : 0, n2 = t3 === eP;
                  return (0, r.jsxs)(
                    "button",
                    {
                      type: "button",
                      role: "radio",
                      "aria-checked": n2,
                      "aria-label": `${D(e3)} credits, ${O(a3.price, C2.currency, false)}${i2 ? `, ${i2}% bonus` : ""}`,
                      tabIndex: n2 || eP < 0 && 0 === t3 ? 0 : -1,
                      className: $().pack,
                      "data-selected": n2 || void 0,
                      onClick: () => eS(e3),
                      onKeyDown: (e4) => Y(e4, t3, A2.length, (e5) => eS(A2[e5])),
                      children: [
                        (0, r.jsx)(s.N, {
                          initial: false,
                          children: n2 ? (0, r.jsx)(
                            l.PY1.span,
                            {
                              layoutId: "ring",
                              className: $().ring,
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              transition: V ? { duration: 0 } : { ...F, opacity: { duration: 0.16 } }
                            },
                            "ring"
                          ) : null
                        }),
                        (0, r.jsx)("span", {
                          className: $().packAmount,
                          children: D(e3)
                        }),
                        (0, r.jsxs)("span", {
                          className: $().packFoot,
                          children: [
                            (0, r.jsx)("span", {
                              className: $().muted,
                              children: O(
                                a3.price,
                                C2.currency,
                                a3.price % 1 != 0
                              )
                            }),
                            i2 ? (0, r.jsxs)("span", {
                              className: $().bonus,
                              children: ["+", i2, "%"]
                            }) : null
                          ]
                        })
                      ]
                    },
                    e3
                  );
                })
              })
            }),
            (0, r.jsx)(b.A, {
              label: "Custom amount",
              value: ee,
              onValueChange: (e3) => eS(e3),
              min: P2.min,
              max: P2.max,
              step: P2.step,
              format: (e3) => `${D(e3)} credits`,
              showValue: true,
              className: $().slider
            })
          ]
        }),
        (0, r.jsxs)("div", {
          className: $().section,
          children: [
            (0, r.jsxs)("div", {
              className: $().row,
              children: [
                (0, r.jsxs)("div", {
                  className: $().rowText,
                  children: [
                    (0, r.jsx)("span", {
                      className: $().title,
                      id: `${K}-auto`,
                      children: "Auto top-up"
                    }),
                    (0, r.jsx)("span", {
                      className: $().meta,
                      children: "Refills with your selected amount"
                    })
                  ]
                }),
                (0, r.jsx)(x.d, {
                  checked: ei.enabled,
                  onCheckedChange: (e3) => eT({ ...ei, enabled: e3 }),
                  "aria-labelledby": `${K}-auto`
                })
              ]
            }),
            (0, r.jsxs)("div", {
              className: $().row,
              "data-off": !ei.enabled || void 0,
              children: [
                (0, r.jsx)("span", {
                  className: $().muted,
                  id: `${K}-threshold`,
                  children: "Refill when below"
                }),
                (0, r.jsx)(o.o, {
                  id: `${K}-threshold`,
                  children: (0, r.jsx)("div", {
                    className: $().thresholds,
                    role: "radiogroup",
                    "aria-labelledby": `${K}-threshold`,
                    "aria-disabled": !ei.enabled || void 0,
                    children: M2.map((e3, t3) => {
                      let a3 = t3 === eR;
                      return (0, r.jsxs)(
                        "button",
                        {
                          type: "button",
                          role: "radio",
                          "aria-checked": a3,
                          disabled: !ei.enabled,
                          tabIndex: a3 || eR < 0 && 0 === t3 ? 0 : -1,
                          className: $().chip,
                          "data-selected": a3 || void 0,
                          onClick: () => eT({ ...ei, threshold: e3 }),
                          onKeyDown: (e4) => Y(
                            e4,
                            t3,
                            M2.length,
                            (e5) => eT({ ...ei, threshold: M2[e5] })
                          ),
                          children: [
                            a3 ? (0, r.jsx)(l.PY1.span, {
                              layoutId: "pill",
                              className: $().pill,
                              transition: V ? { duration: 0 } : F
                            }) : null,
                            (0, r.jsx)("span", {
                              className: $().chipLabel,
                              children: D(e3)
                            })
                          ]
                        },
                        e3
                      );
                    })
                  })
                })
              ]
            })
          ]
        }),
        ef ? (0, r.jsx)("div", {
          className: $().section,
          children: (0, r.jsxs)("div", {
            className: $().row,
            children: [
              (0, r.jsx)("div", {
                className: $().methodSlot,
                children: (0, r.jsx)(s.N, {
                  mode: "popLayout",
                  initial: false,
                  children: (0, r.jsxs)(
                    l.PY1.div,
                    {
                      className: $().method,
                      ...B,
                      children: [
                        (0, r.jsx)(g, {
                          brand: ef.brand,
                          className: $().chipMark
                        }),
                        (0, r.jsxs)("div", {
                          className: $().rowText,
                          children: [
                            (0, r.jsxs)("span", {
                              className: $().body,
                              children: [y[ef.brand], " ending ", ef.last4]
                            }),
                            (0, r.jsxs)("span", {
                              className: $().meta,
                              children: ["Expires ", ef.expires]
                            })
                          ]
                        })
                      ]
                    },
                    ef.id
                  )
                })
              }),
              E2.length > 1 ? (0, r.jsx)(f.$, {
                variant: "ghost",
                size: "sm",
                className: $().change,
                onClick: function() {
                  if (em || E2.length < 2) return;
                  let e3 = (ea + 1) % E2.length;
                  er(e3), z?.(E2[e3].id), "error" === es && (el("idle"), ec(null));
                },
                "aria-disabled": em || void 0,
                "aria-label": `Change card, ${E2.length} saved`,
                children: "Change"
              }) : null
            ]
          })
        }) : null,
        (0, r.jsxs)("div", {
          className: $().foot,
          children: [
            (0, r.jsxs)("div", {
              className: $().total,
              children: [
                (0, r.jsxs)("div", {
                  className: $().rowText,
                  children: [
                    (0, r.jsxs)("span", {
                      className: $().title,
                      children: [
                        (0, r.jsx)(L, { value: e_.total, format: D }),
                        " credits"
                      ]
                    }),
                    (0, r.jsx)("span", {
                      className: $().metaSlot,
                      children: (0, r.jsx)(s.N, {
                        mode: "popLayout",
                        initial: false,
                        children: (0, r.jsx)(
                          l.PY1.span,
                          {
                            className: $().meta,
                            ...B,
                            children: e_.bonus ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                "Includes ",
                                (0, r.jsx)(L, {
                                  value: e_.bonus,
                                  format: D
                                }),
                                " bonus"
                              ]
                            }) : C2.bonusTiers.length ? `Bonus starts at ${D(Math.min(...C2.bonusTiers.map((e3) => e3.min)))}` : "No bonus"
                          },
                          e_.bonus ? "bonus" : `none-${C2.bonusTiers[0]?.min ?? 0}`
                        )
                      })
                    })
                  ]
                }),
                (0, r.jsxs)("span", {
                  className: $().price,
                  children: [
                    eb,
                    (0, r.jsx)(L, {
                      value: e_.price,
                      format: (e3) => e3.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })
                    })
                  ]
                })
              ]
            }),
            (0, r.jsx)(f.$, {
              className: $().buy,
              loading: em,
              onClick: eA,
              disabled: !ef,
              children: em ? "Processing" : "done" === es ? (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(_.A, { "aria-hidden": "true" }),
                  " Credits added"
                ]
              }) : "error" === es ? "Try again" : "Buy credits"
            }),
            (0, r.jsx)("div", {
              className: $().status,
              role: "status",
              "aria-live": "polite",
              children: (0, r.jsx)(s.N, {
                mode: "popLayout",
                initial: false,
                children: (0, r.jsxs)(
                  l.PY1.span,
                  {
                    className: $().statusInner,
                    "data-tone": eo?.tone,
                    ...B,
                    children: [
                      (0, r.jsx)("span", {
                        className: $().statusIcon,
                        "aria-hidden": "true",
                        children: eC.icon
                      }),
                      (0, r.jsx)("span", {
                        className: $().statusText,
                        children: eC.text
                      })
                    ]
                  },
                  eC.key
                )
              })
            })
          ]
        })
      ]
    });
  }
  let H = G;
}

__m(__module,__exports,__require);
});
A.reg(5736, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let o = {
    name: "lock",
    size: 24,
    node: [
      [
        "rect",
        {
          width: "18",
          height: "11",
          x: "3",
          y: "11",
          rx: "2",
          ry: "2",
          key: "1w4ew1"
        }
      ],
      ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
    ]
  };
  o.node;
  let i = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.regCss(66754, ".root{--slider-thumb:22px;--slider-track:6px;display:grid;width:100%;min-width:0;color:var(--foreground);font-size:var(--text-sm);line-height:var(--leading-body);letter-spacing:var(--tracking-body);user-select:none;-webkit-user-select:none}\n.root[data-dragging],.root[data-dragging] .control,.root[data-dragging] .thumb{cursor:grabbing}\n.root[data-disabled]{opacity:.5}\n.root[data-disabled] .control,.root[data-disabled] .markLabel,.root[data-disabled] .thumb{cursor:not-allowed}\n.header{display:flex;min-width:0;align-items:baseline;justify-content:space-between;gap:var(--space-4)}\n.label{min-width:0;font-weight:500}\n.readout{display:inline-flex;flex:none;align-items:center;gap:.3em;color:var(--text-secondary);font-variant-numeric:tabular-nums;white-space:nowrap}\n.dash{color:var(--text-muted)}\n.body{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center}\n.start{display:flex;grid-area:1/1;margin-right:var(--space-3)}\n.end{display:flex;grid-area:1/3;margin-left:var(--space-3)}\n.control{position:relative;grid-area:1/2;height:var(--control-height-md);cursor:pointer;touch-action:pan-y;-webkit-tap-highlight-color:transparent}\n.track{position:absolute;top:50%;right:calc(var(--slider-thumb) / 2);left:calc(var(--slider-thumb) / 2);height:var(--slider-track);margin-top:calc(var(--slider-track) / -2);border-radius:var(--radius-pill);background:var(--control-track)}\n.fill{position:absolute;inset:0;border-radius:inherit;background:var(--control-fill)}\n.fill .tick{background:color-mix(in oklab,var(--control-glyph) 60%,transparent)}\n.tick{position:absolute;top:50%;width:4px;height:4px;margin:-2px 0 0 -2px;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--foreground) 30%,transparent)}\n.thumbs{position:absolute;inset:0 calc(var(--slider-thumb) / 2);container-type:inline-size;pointer-events:none}\n.thumbLayer{position:absolute;inset:0}\n.thumb{position:absolute;top:50%;right:0;box-sizing:border-box;width:var(--slider-thumb);height:var(--slider-thumb);translate:50% -50%;border:0;border-radius:var(--radius-pill);background:var(--control-thumb);box-shadow:var(--control-thumb-shadow);pointer-events:auto;cursor:grab;transition:box-shadow var(--duration-fast) var(--ease-standard)}\n.thumb:after{content:\"\";position:absolute;inset:-11px;border-radius:inherit}\n@media (prefers-reduced-motion:reduce){.markLabel,.thumb{transition:none}\n.bubbleAnchor{--edge:calc(var(--slider-thumb) / 2);--x:calc(var(--at, 0) * 1cqw);position:absolute;right:0;bottom:calc(50% + var(--slider-thumb) / 2 + 8px);display:flex;translate:clamp(calc(100% - var(--edge) - var(--x)),50%,calc(100cqw + var(--edge) - var(--x))) 0;pointer-events:none}\n@media (pointer:coarse){.bubbleAnchor{bottom:calc(50% + var(--slider-thumb) / 2 + 18px)}\n.bubble{display:inline-flex;min-height:1.75rem;align-items:center;padding:0 var(--space-3);border:1px solid color-mix(in oklab,var(--background) 14%,var(--foreground));border-radius:var(--radius-pill);background:var(--foreground);color:var(--background);box-shadow:var(--shadow-raised);font-size:var(--text-sm);font-weight:500;white-space:nowrap;transform-origin:50% 100%}\n.marks{position:relative;grid-area:2/2;height:1.25rem;margin:calc(var(--space-1) * -1) calc(var(--slider-thumb) / 2) 0;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.markLabel{position:absolute;top:0;translate:-50% 0;white-space:nowrap;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}\n.markLabel[data-edge=start]{translate:max(-50%,calc(var(--slider-thumb) / -2)) 0}\n.markLabel[data-edge=end]{translate:min(-50%,calc(-100% + var(--slider-thumb) / 2)) 0}\n.markLabel[data-on]{color:var(--text-secondary)}\n@media (hover:hover) and (pointer:fine){.markLabel:hover{color:var(--foreground)}\n.number{display:inline-flex;align-items:center;white-space:nowrap;font-variant-numeric:tabular-nums}\n.column{--feather:.2em;position:relative;display:inline-block;overflow-x:visible;overflow-y:clip;margin-block:calc(var(--feather) * -1);padding-block:var(--feather);mask-image:linear-gradient(to bottom,transparent,#000 calc(var(--feather) * 1.5),#000 calc(100% - var(--feather) * 1.5),transparent)}\n.sizer{visibility:hidden}\n.glyph{position:absolute;inset:var(--feather) 0;text-align:center}\n.symbol{display:inline-block;overflow-x:clip;white-space:pre}", {"root":"root","control":"control","thumb":"thumb","markLabel":"markLabel","header":"header","label":"label","readout":"readout","dash":"dash","body":"body","start":"start","end":"end","track":"track","fill":"fill","tick":"tick","thumbs":"thumbs","thumbLayer":"thumbLayer","bubbleAnchor":"bubbleAnchor","bubble":"bubble","marks":"marks","number":"number","column":"column","sizer":"sizer","glyph":"glyph","symbol":"symbol"});
A.reg(71019, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let a = {
    name: "credit-card",
    size: 24,
    node: [
      [
        "rect",
        { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }
      ],
      ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
      ["path", { d: "M6 14h2", key: "mk7k0u" }]
    ]
  };
  a.node;
  let i = (0, r.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(82749, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "refresh-cw",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
          key: "v9h5vc"
        }
      ],
      ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
      [
        "path",
        {
          d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
          key: "3uifl3"
        }
      ],
      ["path", { d: "M8 16H3v5", key: "1cv678" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
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
A.regCss(97470, ".card{container-type:inline-size;box-sizing:border-box;width:100%;max-width:30rem;margin-inline:auto;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:.875rem;line-height:1.4;font-weight:400}\n.foot,.head,.section{padding:16px 24px}\n.head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;padding-top:24px}\n@container (max-width: 26rem){.foot,.head,.section{padding-inline:16px}\n.head{padding-top:16px}\n@container (max-width: 28rem){.head{flex-direction:column;align-items:stretch;gap:12px}\n.foot,.section{display:grid;gap:12px;border-top:1px solid var(--border)}\n.foot{padding-bottom:12px}\n.meta,.muted{color:var(--text-muted);font-size:.8125rem;white-space:nowrap}\n.packFoot .muted{font-variant-numeric:tabular-nums}\n.row[data-off]>.muted{opacity:.6}\n.meta{display:block;overflow:hidden;text-overflow:ellipsis}\n.title{font-weight:500;white-space:nowrap}\n.body{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n.balance{display:grid;min-width:0;gap:4px}\n.labelRow{display:flex;align-items:center;gap:8px}\n.health{display:inline-grid;min-width:6.5rem}\n.healthInner{display:inline-flex;align-items:center;gap:4px;color:var(--text-secondary);font-size:.8125rem;white-space:nowrap}\n.healthInner svg{width:14px;height:14px;flex:none}\n.amount{display:flex;align-items:baseline;gap:8px;min-width:0}\n.big{font-size:2rem;font-weight:500;letter-spacing:-.02em}\n.unit{color:var(--text-muted)}\n.metaSlot{display:grid;min-width:0}\n.metaSlot>*{grid-area:1/1}\n.warn{color:var(--warning)}\n.good{color:var(--success)}\n.bad{color:var(--danger)}\n.chart{display:grid;flex:none;justify-items:end;gap:8px}\n.chart{grid-template-columns:1fr auto;align-items:end;justify-items:stretch;gap:16px}\n.bars{display:flex;align-items:flex-end;height:44px}\n.bars{justify-content:space-between;height:32px}\n.barHit{display:flex;align-items:flex-end;width:10px;height:100%;justify-content:center;cursor:default}\n.barHit[data-today] .bar{background:var(--accent)}\n.barHit[data-active] .bar{background:var(--foreground)}\n.barHit[data-dim] .bar{opacity:.55}\n.bar{width:6px;border-radius:2px;background:color-mix(in oklab,var(--text-muted) 38%,transparent);transition:background-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n@media (prefers-reduced-motion:reduce){.bar,.chip,.pack{transition:none}\n.caption{display:grid;justify-items:end;color:var(--text-muted);font-size:.8125rem;white-space:nowrap}\n.caption>*{grid-area:1/1}\n.caption{justify-items:end}\n.num{font-variant-numeric:tabular-nums}\n.titleRow{display:flex;align-items:baseline;justify-content:space-between;gap:12px}\n.packs{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}\n.pack{position:relative;display:grid;gap:4px;min-width:0;padding:12px;border:1px solid var(--border);border-radius:calc(var(--radius-control) - 4px);background:var(--surface);color:inherit;font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.pack:not([data-selected]):hover{border-color:color-mix(in oklab,var(--text-muted) 45%,var(--border));background:var(--surface-muted)}\n.pack:active{transform:scale(.98)}\n.pack[data-selected]{border-color:transparent}\n.pack{padding:12px 8px}\n.ring{position:absolute;inset:-1px;border-radius:inherit;background:color-mix(in oklab,var(--accent) 6%,transparent);box-shadow:inset 0 0 0 1.5px var(--accent);pointer-events:none}\n.packAmount{position:relative;font-weight:500;font-variant-numeric:tabular-nums}\n.packFoot{position:relative;display:flex;align-items:center;justify-content:space-between;gap:4px;min-height:20px}\n.packFoot{gap:2px}\n.bonus{display:inline-flex;align-items:center;height:20px;padding:0 6px;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--success) 13%,transparent);color:color-mix(in oklab,var(--success) 72%,var(--foreground));font-size:.8125rem;font-variant-numeric:tabular-nums;white-space:nowrap}\n.bonus{padding:0 4px}\n.slider{width:100%}\n.buySection{padding-bottom:8px}\n.row{display:flex;align-items:center;justify-content:space-between;gap:12px;min-width:0;min-height:36px}\n.rowText{display:grid;min-width:0}\n.thresholds{display:flex;flex:none;padding:2px;border-radius:var(--radius-pill);background:var(--surface-muted)}\n.chip{position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:3.5rem;height:28px;padding:0 10px;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);font:inherit;font-size:.8125rem;font-variant-numeric:tabular-nums;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.chip[data-selected]{color:var(--foreground)}\n.chip:disabled{cursor:not-allowed;opacity:.5}\n@media (hover:hover) and (pointer:fine){.chip:not(:disabled):not([data-selected]):hover{color:var(--foreground)}\n.pill{position:absolute;inset:0;border-radius:inherit;background:var(--surface-raised);box-shadow:0 0 0 1px var(--border)}\n.chipLabel{position:relative}\n.methodSlot{display:grid;flex:1;min-width:0}\n.methodSlot>*{grid-area:1/1}\n.method{display:flex;align-items:center;gap:12px;min-width:0}\n.chipMark{flex:none;display:block}\n.change{flex:none;margin-inline-end:calc(var(--space-3) * -1)}\n.total{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}\n.price{font-weight:500;white-space:nowrap}\n.buy{width:100%}\n.status{display:grid;justify-items:center;min-height:20px}\n.status>*{grid-area:1/1}\n.statusInner{display:inline-flex;align-items:center;gap:6px;max-width:100%;min-width:0;color:var(--text-muted);font-size:.8125rem}\n.statusInner[data-tone=error]{color:var(--text-secondary)}\n.statusIcon{display:inline-flex;flex:none}\n.statusIcon svg{width:14px;height:14px}\n.statusText{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n.rolling{display:inline-block;font-variant-numeric:tabular-nums;white-space:nowrap;line-height:1.2}\n.slot{display:inline-block;white-space:pre;clip-path:inset(0 -1px);vertical-align:baseline}\n.digit{position:relative;display:inline-block;clip-path:inset(0);vertical-align:baseline}\n.digitGhost{visibility:hidden}\n.digitStrip{position:absolute;top:0;left:0;right:0;display:flex;flex-direction:column;will-change:transform}\n.digitCell{display:block;height:1.2em;line-height:1.2;text-align:center}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}", {"card":"card","foot":"foot","head":"head","section":"section","meta":"meta","muted":"muted","packFoot":"packFoot","row":"row","title":"title","body":"body","balance":"balance","labelRow":"labelRow","health":"health","healthInner":"healthInner","amount":"amount","big":"big","unit":"unit","metaSlot":"metaSlot","warn":"warn","good":"good","bad":"bad","chart":"chart","bars":"bars","barHit":"barHit","bar":"bar","chip":"chip","pack":"pack","caption":"caption","num":"num","titleRow":"titleRow","packs":"packs","ring":"ring","packAmount":"packAmount","bonus":"bonus","slider":"slider","buySection":"buySection","rowText":"rowText","thresholds":"thresholds","pill":"pill","chipLabel":"chipLabel","methodSlot":"methodSlot","method":"method","chipMark":"chipMark","change":"change","total":"total","price":"price","buy":"buy","status":"status","statusInner":"statusInner","statusIcon":"statusIcon","statusText":"statusText","rolling":"rolling","slot":"slot","digit":"digit","digitGhost":"digitGhost","digitStrip":"digitStrip","digitCell":"digitCell","srOnly":"srOnly"});
A.cssFor("credit-topup", [66754,97470]);
A.item("credit-topup", {entry:355, export:"CreditTopup", kind:"block", tier:"pro", unresolved:[]});
})();