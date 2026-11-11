function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { WalletCard: () => O, default: () => Z });
  var n = a(95155), i = a(12115), l = a(18310), s = a(28245), r = a(7890), o = a(92171), d = a(25354), c = a(80642), u = a(62365), h = a(24918), p = a(14929), m = a(51811);
  let x = {
    name: "cloud",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
          key: "p7xjir"
        }
      ]
    ]
  };
  x.node;
  let y = (0, m.A)(x);
  var _ = a(5669), v = a(77031), w = a(2125), j = a(9383), b = a(16294), f = a(64577), g = a(9005), k = a(65377), A = a(15298), M = a(89034), N = a(25182), S = a(9751), z = a(86659), T = a(71019), C = a(76721), W = a(51288), $ = a(60466), B = a(83978), H = a(66558), P = a(7770), R = a(38172), L = a.n(R);
  let D = [
    {
      id: "client",
      wallet: "main",
      title: "Client payment",
      detail: "18 Sep \xB7 Studio North",
      cents: 85e3,
      kind: "payment"
    },
    {
      id: "tools",
      wallet: "main",
      title: "Workspace tools",
      detail: "16 Sep \xB7 Subscription",
      cents: -4800,
      kind: "tools"
    },
    {
      id: "type",
      wallet: "main",
      title: "Type license",
      detail: "14 Sep \xB7 Purchase",
      cents: -1200,
      kind: "license"
    },
    {
      id: "hosting",
      wallet: "main",
      title: "Website hosting",
      detail: "10 Sep \xB7 Cloud plan",
      cents: -2400,
      kind: "hosting"
    },
    {
      id: "invoice",
      wallet: "main",
      title: "Design retainer",
      detail: "8 Sep \xB7 Forma Studio",
      cents: 125e3,
      kind: "payment"
    },
    {
      id: "reserve",
      wallet: "reserve",
      title: "Monthly allocation",
      detail: "12 Sep \xB7 From main wallet",
      cents: 5e4,
      kind: "transfer"
    }
  ], E = {
    payment: u.A,
    tools: h.A,
    license: p.A,
    hosting: y,
    investment: _.A,
    transfer: v.A,
    deposit: w.A,
    send: j.A
  }, I = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }), F = (e2) => I.format(e2 / 100), Y = { deposit: "Deposit", send: "Send", swap: "Swap", buy: "Buy" };
  function V({ cents: e2 }) {
    let t2 = (0, l.I)(), a2 = (0, s.d)(e2), [d2, c2] = (0, i.useState)(e2);
    return (0, r.L)(a2, "change", (e3) => c2(Math.round(e3))), (0, i.useEffect)(() => {
      if (t2) return void a2.set(e2);
      let n2 = (0, o.i)(a2, e2, { duration: 0.75, ease: P.T.ease.standard });
      return () => n2.stop();
    }, [e2, t2, a2]), (0, n.jsx)(n.Fragment, { children: F(t2 ? e2 : d2) });
  }
  function O({ initialBalanceCents: e2 = 1248032 }) {
    let t2 = (0, l.I)(), [a2, s2] = (0, i.useState)("main"), [r2, o2] = (0, i.useState)({ main: e2, reserve: 285e3 }), [u2, h2] = (0, i.useState)(D), [p2, m2] = (0, i.useState)("month"), [x2, y2] = (0, i.useState)(null), [_2, j2] = (0, i.useState)(false), [R2, I2] = (0, i.useState)(false), [Z2, U] = (0, i.useState)(false), [K, q] = (0, i.useState)(""), [G, J] = (0, i.useState)(false), [X, Q] = (0, i.useState)(null), [ee, et] = (0, i.useState)(""), [ea, en] = (0, i.useState)(""), [ei, el] = (0, i.useState)(""), [es, er] = (0, i.useState)(""), eo = (0, i.useRef)(null), [ed, ec] = (0, i.useState)(null);
    (0, i.useEffect)(() => {
      let e3 = eo.current;
      if (!e3) return;
      let t3 = new ResizeObserver(() => ec(e3.offsetHeight));
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    let eu = t2 ? { duration: 0 } : { duration: P.T.duration.exit, ease: P.T.ease.standard }, eh = (0, i.useRef)({}), ep = (0, i.useId)(), em = (0, i.useId)(), ex = "main" === a2 ? "Main wallet" : "Reserve wallet", ey = "main" === a2 ? "Reserve wallet" : "Main wallet", e_ = "main" === a2 ? "reserve" : "main", ev = u2.filter(
      (e3) => e3.wallet === a2 && `${e3.title} ${e3.detail}`.toLowerCase().includes(K.trim().toLowerCase())
    ).slice(0, _2 ? void 0 : 3), ew = ("week" === p2 ? [0.87, 0.89, 0.88, 0.94, 0.92, 0.96, 1] : "year" === p2 ? [0.58, 0.64, 0.61, 0.7, 0.68, 0.76, 0.74, 0.83, 0.8, 0.9, 0.93, 1] : [
      0.84,
      0.85,
      0.83,
      0.88,
      0.87,
      0.9,
      0.88,
      0.94,
      0.92,
      0.96,
      0.95,
      1
    ]).map((e3) => Math.round(r2[a2] * e3)), ej = (e3) => 104 - (e3 - Math.min(...ew)) / Math.max(1, Math.max(...ew) - Math.min(...ew)) * 88, eb = ew.map((e3, t3) => `${t3 / (ew.length - 1) * 560},${ej(e3)}`).join(" "), ef = u2.filter((e3) => e3.wallet === a2).reduce((e3, t3) => e3 + t3.cents, 0);
    function eg(e3, t3) {
      h2((t4) => [e3, ...t4]), o2((e4) => ({
        main: e4.main + (t3.main ?? 0),
        reserve: e4.reserve + (t3.reserve ?? 0)
      })), X && eh.current[X]?.focus(), Q(null), et(""), en(""), el("");
    }
    return (0, n.jsxs)("section", {
      className: L().wallet,
      "aria-label": "Wallet preview",
      children: [
        (0, n.jsxs)("div", {
          className: L().topRow,
          children: [
            (0, n.jsx)($.r, {
              label: ex,
              icon: (0, n.jsx)(b.A, { size: 16, strokeWidth: 1.75 }),
              items: ["main", "reserve"].map((e3) => ({
                label: `${"main" === e3 ? "Main wallet" : "Reserve wallet"} \xB7 ${G ? "\u2022\u2022\u2022\u2022" : F(r2[e3])}`,
                icon: a2 === e3 ? (0, n.jsx)(f.A, { size: 16, strokeWidth: 1.75 }) : (0, n.jsx)(b.A, { size: 16, strokeWidth: 1.75 }),
                onSelect: () => {
                  s2(e3), Q(null), er(""), y2(null);
                }
              }))
            }),
            (0, n.jsxs)("div", {
              className: L().topActions,
              children: [
                (0, n.jsx)("button", {
                  type: "button",
                  className: L().iconButton,
                  "aria-label": Z2 ? "Close activity search" : "Search activity",
                  "aria-expanded": Z2,
                  onClick: () => {
                    U((e3) => !e3), Q(null), q(""), I2(false);
                  },
                  children: Z2 ? (0, n.jsx)(g.A, { size: 20, strokeWidth: 1.75 }) : (0, n.jsx)(k.A, { size: 20, strokeWidth: 1.75 })
                }),
                (0, n.jsxs)(B.AM, {
                  open: R2,
                  onOpenChange: I2,
                  children: [
                    (0, n.jsx)(B.Wv, {
                      asChild: true,
                      children: (0, n.jsxs)("button", {
                        type: "button",
                        className: L().iconButton,
                        "aria-label": "Notifications",
                        children: [
                          (0, n.jsx)(A.A, { size: 20, strokeWidth: 1.75 }),
                          (0, n.jsx)("span", { className: L().noticeDot })
                        ]
                      })
                    }),
                    (0, n.jsxs)(B.hl, {
                      align: "end",
                      className: L().notice,
                      children: [
                        (0, n.jsx)("strong", { children: "Wallet updates" }),
                        (0, n.jsx)("span", {
                          children: es || "Your $850.00 payment from Studio North arrived on 18 September."
                        }),
                        (0, n.jsx)("small", {
                          children: "Demo notification \xB7 No live account connected"
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: L().balanceArea,
          children: [
            (0, n.jsxs)("div", {
              className: L().balanceLabel,
              children: [
                null === x2 ? "Available balance" : `${"week" === p2 ? "Day" : "year" === p2 ? "Month" : "September"} ${x2 + 1}`,
                " ",
                (0, n.jsx)("button", {
                  type: "button",
                  "aria-label": G ? "Show balance" : "Hide balance",
                  onClick: () => J((e3) => !e3),
                  children: G ? (0, n.jsx)(M.A, { size: 16, strokeWidth: 1.75 }) : (0, n.jsx)(N.A, { size: 16, strokeWidth: 1.75 })
                })
              ]
            }),
            (0, n.jsx)("div", {
              className: L().balance,
              "aria-live": "polite",
              children: G ? (0, n.jsx)("span", {
                className: L().hiddenBalance,
                "aria-label": "Balance hidden",
                children: (0, n.jsx)("span", {
                  "aria-hidden": "true",
                  children: "$ \u2022\u2022\u2022\u2022\u2022\u2022"
                })
              }) : (0, n.jsx)(V, { cents: null === x2 ? r2[a2] : ew[x2] })
            }),
            (0, n.jsxs)("div", {
              className: L().balanceMeta,
              children: [
                (0, n.jsxs)("span", {
                  className: L().changePill,
                  "data-negative": ef < 0,
                  children: [
                    ef >= 0 ? (0, n.jsx)(S.A, { size: 16, strokeWidth: 1.75 }) : (0, n.jsx)(z.A, { size: 16, strokeWidth: 1.75 }),
                    G ? "\u2022\u2022\u2022\u2022" : (0, n.jsxs)(n.Fragment, {
                      children: [
                        ef >= 0 ? "+" : "\u2212",
                        (0, n.jsx)(V, { cents: Math.abs(ef) })
                      ]
                    }),
                    (0, n.jsx)("span", { children: " this month" })
                  ]
                }),
                (0, n.jsx)("span", {
                  className: L().currency,
                  children: "USD"
                })
              ]
            }),
            (0, n.jsxs)("div", {
              className: L().chart,
              onPointerLeave: () => y2(null),
              children: [
                (0, n.jsxs)("svg", {
                  viewBox: "0 0 560 120",
                  preserveAspectRatio: "none",
                  "aria-hidden": "true",
                  children: [
                    (0, n.jsx)("path", {
                      className: L().chartGuide,
                      d: "M0 30H560 M0 70H560 M0 110H560"
                    }),
                    (0, n.jsx)(d.PY1.polyline, {
                      points: eb,
                      fill: "none",
                      stroke: "var(--accent)",
                      strokeWidth: "2",
                      vectorEffect: "non-scaling-stroke",
                      strokeLinejoin: "round",
                      strokeLinecap: "round",
                      initial: false,
                      animate: { points: eb },
                      transition: t2 ? { duration: 0 } : P.T.spring.gentle
                    }),
                    null !== x2 && (0, n.jsx)(n.Fragment, {
                      children: (0, n.jsx)("line", {
                        x1: x2 / (ew.length - 1) * 560,
                        x2: x2 / (ew.length - 1) * 560,
                        y1: "0",
                        y2: "120",
                        stroke: "var(--border-strong)",
                        strokeDasharray: "3 4",
                        vectorEffect: "non-scaling-stroke"
                      })
                    })
                  ]
                }),
                null !== x2 && (0, n.jsx)("span", {
                  className: L().chartDot,
                  style: {
                    left: `${x2 / (ew.length - 1) * 100}%`,
                    top: `${ej(ew[x2]) / 120 * 100}%`
                  },
                  "aria-hidden": "true"
                }),
                (0, n.jsx)("input", {
                  className: L().chartScrubber,
                  type: "range",
                  min: "0",
                  max: ew.length - 1,
                  value: x2 ?? ew.length - 1,
                  "aria-label": "Explore sample balance history",
                  "aria-valuetext": G ? "Balance hidden" : F(ew[x2 ?? ew.length - 1]),
                  onChange: (e3) => y2(Number(e3.target.value)),
                  onBlur: () => y2(null),
                  onPointerMove: (e3) => {
                    if ("mouse" === e3.pointerType) {
                      let t3 = e3.currentTarget.getBoundingClientRect();
                      y2(
                        Math.max(
                          0,
                          Math.min(
                            ew.length - 1,
                            Math.round(
                              (e3.clientX - t3.left) / t3.width * (ew.length - 1)
                            )
                          )
                        )
                      );
                    }
                  }
                })
              ]
            }),
            (0, n.jsxs)("div", {
              className: L().chartFoot,
              children: [
                (0, n.jsx)("span", {
                  children: "week" === p2 ? "Last 7 days" : "year" === p2 ? "Last 12 months" : "Last 30 days"
                }),
                (0, n.jsx)(H.A, {
                  label: "Balance history period",
                  value: p2,
                  onValueChange: (e3) => {
                    m2(e3), y2(null);
                  },
                  options: [
                    { value: "week", label: "1W" },
                    { value: "month", label: "1M" },
                    { value: "year", label: "1Y" }
                  ]
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("div", {
          className: L().actions,
          children: ["send", "deposit", "swap", "buy"].map((e3) => {
            let t3 = "send" === e3 ? S.A : "deposit" === e3 ? w.A : "swap" === e3 ? v.A : T.A;
            return (0, n.jsxs)(
              "button",
              {
                type: "button",
                ref: (t4) => {
                  eh.current[e3] = t4;
                },
                "aria-pressed": X === e3,
                "aria-controls": ep,
                className: L().actionButton,
                onClick: () => X === e3 ? Q(null) : void (Q(e3), et(""), en(""), el(""), er(""), I2(false)),
                children: [
                  (0, n.jsx)(t3, { size: 20, strokeWidth: 1.75 }),
                  (0, n.jsx)("span", { children: Y[e3] }),
                  (0, n.jsx)(C.A, {
                    className: L().actionArrow,
                    size: 16,
                    strokeWidth: 1.75
                  })
                ]
              },
              e3
            );
          })
        }),
        (0, n.jsx)(d.PY1.div, {
          className: L().detail,
          id: ep,
          initial: false,
          animate: { height: ed ?? "auto" },
          transition: t2 ? { duration: 0 } : P.T.spring.smooth,
          children: (0, n.jsx)("div", {
            ref: eo,
            className: L().detailContent,
            children: (0, n.jsx)(c.N, {
              mode: "wait",
              initial: false,
              children: X ? (0, n.jsxs)(
                d.PY1.div,
                {
                  className: L().actionPanel,
                  initial: !t2 && { opacity: 0, y: 6 },
                  animate: { opacity: 1, y: 0 },
                  exit: t2 ? { opacity: 0 } : { opacity: 0, y: -4 },
                  transition: eu,
                  children: [
                    (0, n.jsxs)("div", {
                      className: L().detailHeading,
                      children: [
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)("h2", { children: Y[X] }),
                            (0, n.jsx)("p", {
                              children: "swap" === X ? `Move funds to ${ey}.` : "buy" === X ? "Buy shares in an index fund." : "send" === X ? "Send a payment." : "Add funds to this wallet."
                            })
                          ]
                        }),
                        (0, n.jsx)("button", {
                          type: "button",
                          className: L().iconButton,
                          "aria-label": "Close action",
                          onClick: () => {
                            eh.current[X]?.focus(), Q(null), el("");
                          },
                          children: (0, n.jsx)(g.A, {
                            size: 20,
                            strokeWidth: 1.75
                          })
                        })
                      ]
                    }),
                    (0, n.jsxs)("form", {
                      className: L().form,
                      onSubmit: function(e3) {
                        if (e3.preventDefault(), !X) return;
                        let t3 = (function(e4) {
                          if (!/^\d+(?:\.\d{1,2})?$/.test(e4.trim()))
                            return null;
                          let t4 = Math.round(100 * Number(e4));
                          return Number.isSafeInteger(t4) && t4 > 0 && t4 <= 1e8 ? t4 : null;
                        })(ee);
                        if (null === t3)
                          return void el(
                            "Enter an amount between $0.01 and $1,000,000.00."
                          );
                        if ("deposit" !== X && t3 > r2[a2])
                          return void el(
                            "The amount is above the available balance."
                          );
                        if ("send" === X && !ea.trim())
                          return void el("Enter a recipient name.");
                        let n2 = `demo-${Date.now()}`;
                        if ("swap" === X) {
                          eg(
                            {
                              id: n2,
                              wallet: a2,
                              title: `Moved to ${ey}`,
                              detail: "Just now \xB7 Transfer",
                              cents: -t3,
                              kind: "transfer"
                            },
                            { [a2]: -t3, [e_]: t3 }
                          ), h2((e4) => [
                            {
                              id: `${n2}-in`,
                              wallet: e_,
                              title: `From ${ex}`,
                              detail: "Just now \xB7 Transfer",
                              cents: t3,
                              kind: "transfer"
                            },
                            ...e4
                          ]), er(`${F(t3)} moved to ${ey}.`);
                          return;
                        }
                        let i2 = "deposit" === X ? t3 : -t3;
                        eg(
                          {
                            id: n2,
                            wallet: a2,
                            title: "deposit" === X ? "Deposit" : "send" === X ? `To ${ea.trim()}` : "Index fund purchase",
                            detail: "Just now \xB7 Activity",
                            cents: i2,
                            kind: "deposit" === X ? "deposit" : "send" === X ? "send" : "investment"
                          },
                          { [a2]: i2 }
                        ), er(
                          `${F(t3)} ${"deposit" === X ? "added" : "send" === X ? "sent" : "used to buy shares"}.`
                        );
                      },
                      noValidate: true,
                      children: [
                        "send" === X && (0, n.jsxs)("label", {
                          children: [
                            "Recipient",
                            (0, n.jsx)("input", {
                              value: ea,
                              onChange: (e3) => {
                                en(e3.target.value), el("");
                              },
                              placeholder: "e.g. Studio North",
                              maxLength: 48
                            })
                          ]
                        }),
                        (0, n.jsxs)("label", {
                          children: [
                            "Amount in USD",
                            (0, n.jsx)("input", {
                              autoFocus: true,
                              value: ee,
                              onChange: (e3) => {
                                et(e3.target.value), el("");
                              },
                              inputMode: "decimal",
                              placeholder: "0.00",
                              "aria-invalid": !!ei,
                              "aria-describedby": ei ? em : void 0
                            })
                          ]
                        }),
                        ei && (0, n.jsx)("p", {
                          id: em,
                          className: L().error,
                          role: "alert",
                          children: ei
                        }),
                        (0, n.jsxs)(W.$, {
                          type: "submit",
                          children: [
                            "swap" === X ? "Move funds" : "send" === X ? "Record payment" : "buy" === X ? "Buy shares" : "Add funds",
                            " ",
                            (0, n.jsx)(S.A, {
                              size: 16,
                              strokeWidth: 1.75
                            })
                          ]
                        })
                      ]
                    })
                  ]
                },
                X
              ) : (0, n.jsxs)(
                d.PY1.div,
                {
                  className: L().activityPanel,
                  initial: !t2 && { opacity: 0, y: 8 },
                  animate: { opacity: 1, y: 0 },
                  exit: t2 ? { opacity: 0 } : { opacity: 0, y: -5 },
                  transition: eu,
                  children: [
                    (0, n.jsxs)("div", {
                      className: L().detailHeading,
                      children: [
                        (0, n.jsx)("h2", {
                          children: _2 ? "All activity" : "Recent activity"
                        }),
                        (0, n.jsxs)("button", {
                          type: "button",
                          className: L().textButton,
                          onClick: () => j2((e3) => !e3),
                          children: [
                            _2 ? "Show less" : "View all",
                            (0, n.jsx)(C.A, {
                              size: 16,
                              strokeWidth: 1.75
                            })
                          ]
                        })
                      ]
                    }),
                    (0, n.jsx)(c.N, {
                      initial: false,
                      children: Z2 && (0, n.jsx)(
                        d.PY1.div,
                        {
                          className: L().searchReveal,
                          initial: t2 ? { opacity: 0 } : { opacity: 0, height: 0 },
                          animate: { opacity: 1, height: "auto" },
                          exit: t2 ? { opacity: 0 } : { opacity: 0, height: 0 },
                          transition: t2 ? { duration: 0 } : P.T.spring.smooth,
                          children: (0, n.jsxs)("label", {
                            className: L().searchField,
                            children: [
                              (0, n.jsx)(k.A, {
                                size: 16,
                                strokeWidth: 1.75
                              }),
                              (0, n.jsx)("input", {
                                value: K,
                                onChange: (e3) => q(e3.target.value),
                                autoFocus: true,
                                placeholder: "Search activity",
                                "aria-label": "Search activity"
                              })
                            ]
                          })
                        },
                        "search"
                      )
                    }),
                    (0, n.jsx)("ul", {
                      className: L().entries,
                      children: (0, n.jsx)(c.N, {
                        initial: false,
                        children: ev.map((e3) => {
                          let a3 = E[e3.kind];
                          return (0, n.jsxs)(
                            d.PY1.li,
                            {
                              layout: !t2 && "position",
                              initial: !t2 && { opacity: 0, height: 0 },
                              animate: { opacity: 1, height: 60 },
                              exit: t2 ? { opacity: 0 } : { opacity: 0, height: 0 },
                              transition: t2 ? { duration: 0 } : P.T.spring.gentle,
                              children: [
                                (0, n.jsx)("span", {
                                  className: L().entryIcon,
                                  "data-flow": "transfer" === e3.kind ? "transfer" : e3.cents >= 0 ? "incoming" : "outgoing",
                                  "aria-hidden": "true",
                                  children: (0, n.jsx)(a3, {
                                    size: 20,
                                    strokeWidth: 1.75
                                  })
                                }),
                                (0, n.jsxs)("span", {
                                  className: L().entryText,
                                  children: [
                                    (0, n.jsx)("strong", {
                                      children: e3.title
                                    }),
                                    (0, n.jsx)("small", {
                                      children: e3.detail
                                    })
                                  ]
                                }),
                                (0, n.jsxs)("span", {
                                  className: L().entryAmount,
                                  children: [
                                    e3.cents >= 0 ? "+" : "\u2212",
                                    F(Math.abs(e3.cents))
                                  ]
                                })
                              ]
                            },
                            e3.id
                          );
                        })
                      })
                    }),
                    0 === ev.length && (0, n.jsx)("p", {
                      className: L().empty,
                      children: "No activity matches your search."
                    })
                  ]
                },
                "activity"
              )
            })
          })
        }),
        (0, n.jsxs)("div", {
          className: L().foot,
          children: [
            (0, n.jsx)("span", {
              role: "status",
              "aria-live": "polite",
              children: es ? (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(f.A, { size: 16, strokeWidth: 1.75 }),
                  " ",
                  es
                ]
              }) : ""
            }),
            (0, n.jsxs)("button", {
              type: "button",
              onClick: function() {
                eg(
                  {
                    id: `sample-${Date.now()}`,
                    wallet: a2,
                    title: "Added funds",
                    detail: "Just now \xB7 Activity",
                    cents: 12450,
                    kind: "deposit"
                  },
                  { [a2]: 12450 }
                ), er(`${F(12450)} added to ${ex}.`);
              },
              children: [
                (0, n.jsx)(w.A, { size: 16, strokeWidth: 1.75 }),
                " Add $124.50"
              ]
            })
          ]
        })
      ]
    });
  }
  let Z = O;
}

__m(__module,__exports,__require);
}