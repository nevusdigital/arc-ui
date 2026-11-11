function(__module,__exports,__require){
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
}