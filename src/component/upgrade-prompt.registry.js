/* upgrade-prompt (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(6923, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "clock",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(53693, ".demo{display:flex;justify-content:center;width:100%;padding:8px 0}", {"demo":"demo"});
A.reg(82002, function(__module,__exports,__require){
"use strict";
function __m(e, a, r) {
  "use strict";
  r.r(a), r.d(a, { UpgradePromptDemo: () => U, default: () => P });
  var t = r(95155), l = r(12115), i = r(25354), s = r(18310), n = r(61792), o = r(35484), d = r(64962), c = r(64577), u = r(6923), p = r(51288), m = r(66558);
  function h({ title: e2 = "Claude", ...a2 }) {
    return (0, t.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...a2,
      children: (0, t.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  function g({ title: e2 = "OpenAI", ...a2 }) {
    return (0, t.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...a2,
      children: (0, t.jsx)("path", {
        d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
      })
    });
  }
  var _ = r(82170), x = r.n(_);
  let v = {
    name: "Pro",
    price: { monthly: 20, yearly: 16 },
    currency: "USD",
    limit: 2e3,
    features: [
      {
        id: "credits",
        label: (0, t.jsx)(t.Fragment, {
          children: "2,000 AI credits a month"
        })
      },
      {
        id: "models",
        label: (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)("span", {
              className: x().nowrap,
              children: [
                (0, t.jsx)(h, {
                  className: x().claude,
                  "aria-hidden": "true",
                  width: 14,
                  height: 14
                }),
                " Claude Opus 5.5"
              ]
            }),
            " and ",
            (0, t.jsxs)("span", {
              className: x().nowrap,
              children: [
                (0, t.jsx)(g, {
                  className: x().openai,
                  "aria-hidden": "true",
                  width: 14,
                  height: 14
                }),
                " GPT-6.1 Sol"
              ]
            })
          ]
        })
      },
      {
        id: "queue",
        label: (0, t.jsx)(t.Fragment, {
          children: "Priority queue with no daily caps"
        })
      }
    ],
    limits: [
      { label: "AI credits", value: "2,000 a month" },
      {
        label: "Models",
        value: (0, t.jsxs)("span", {
          className: x().models,
          children: [
            (0, t.jsx)(h, {
              className: x().claude,
              "aria-hidden": "true",
              width: 14,
              height: 14
            }),
            "Opus 5.5",
            (0, t.jsx)(g, {
              className: x().openai,
              "aria-hidden": "true",
              width: 14,
              height: 14
            }),
            "GPT-6.1 Sol"
          ]
        })
      },
      { label: "Queue", value: "Priority" }
    ]
  }, y = { duration: 0.16, ease: [0.16, 1, 0.3, 1], delay: 0.06 }, f = { duration: 0.1, ease: [0.7, 0, 0.84, 0] }, j = { type: "spring", visualDuration: 0.5, bounce: 0 }, b = { type: "spring", visualDuration: 0.28, bounce: 0 };
  function N(e2, a2) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: a2,
      minimumFractionDigits: 2 * !Number.isInteger(e2),
      maximumFractionDigits: 2
    }).format(e2);
  }
  function w({ active: e2, items: a2, reduced: r2, className: l2 }) {
    return (0, t.jsx)("span", {
      className: `${x().swap} ${l2 ?? ""}`,
      children: Object.entries(a2).map(([a3, l3]) => {
        let s2 = a3 === e2;
        return (0, t.jsx)(
          i.PY1.span,
          {
            className: x().swapItem,
            "aria-hidden": !s2 || void 0,
            initial: false,
            animate: s2 ? { opacity: 1, y: 0, visibility: "visible" } : {
              opacity: 0,
              y: 2 * !r2,
              transitionEnd: { visibility: "hidden" }
            },
            transition: s2 ? r2 ? { duration: 0.12 } : y : f,
            children: l3
          },
          a3
        );
      })
    });
  }
  function S({ value: e2, reduced: a2 }) {
    let r2 = e2.split("");
    return (0, t.jsx)("span", {
      className: x().rolling,
      "aria-hidden": "true",
      children: r2.map((e3, l2) => {
        let s2 = r2.length - l2;
        return /\d/.test(e3) ? (0, t.jsx)(
          "span",
          {
            className: x().digit,
            children: (0, t.jsx)(i.PY1.span, {
              className: x().strip,
              initial: false,
              animate: { y: `${-(10 * Number(e3))}%` },
              transition: a2 ? { duration: 0 } : b,
              children: Array.from(
                { length: 10 },
                (e4, a3) => (0, t.jsx)("span", { children: a3 }, a3)
              )
            })
          },
          `d${s2}`
        ) : (0, t.jsx)("span", { className: x().char, children: e3 }, `c${s2}`);
      })
    });
  }
  function k({
    used: e2 = 50,
    limit: a2 = 50,
    unit: r2 = "AI credits",
    resetsOn: h2 = "Nov 1",
    plan: g2 = v,
    interval: _2,
    defaultInterval: y2 = "yearly",
    onIntervalChange: f2,
    onUpgrade: b2,
    onUpgraded: $2,
    onDismiss: A2,
    onContinue: U2,
    title: P2,
    description: R,
    className: z
  }) {
    let E = (0, s.I)() ?? false, [C, I] = (0, l.useState)("offer"), [M, D] = (0, l.useState)(""), [W, Y] = (0, l.useState)(""), [O, T] = (0, l.useState)(y2), F = _2 ?? O, q = (0, l.useRef)(null), B = (0, l.useRef)(null), V = (0, n.W)(B, { once: true, amount: 0.6 });
    (0, l.useEffect)(() => () => q.current?.abort(), []);
    let Z = g2.currency ?? "USD", G = g2.price[F], H = "yearly" === F ? 12 * g2.price.yearly : g2.price.monthly, J = Math.round((1 - g2.price.yearly / g2.price.monthly) * 100), Q = (0, l.useMemo)(
      () => ({ plan: g2.name, interval: F, amount: H, currency: Z }),
      [g2.name, F, H, Z]
    ), X = "upgraded" === C, K = "processing" === C, ee = X ? g2.limit : a2, ea = Math.min(1, Math.max(0, e2 / Math.max(1, ee))), er = e2 >= a2, et = X ? "upgraded" : "later" === C ? "later" : "offer", el = async () => {
      if (K) return;
      q.current?.abort();
      let e3 = new AbortController();
      q.current = e3, I("processing"), D(""), Y(
        `Upgrading to ${g2.name}${b2 ? "" : ". Simulated, nothing is charged"}.`
      );
      try {
        if (b2 ? await b2(Q, e3.signal) : await new Promise((a3, r3) => {
          let t2 = window.setTimeout(a3, 1100);
          e3.signal.addEventListener(
            "abort",
            () => {
              window.clearTimeout(t2), r3(new DOMException("Aborted", "AbortError"));
            },
            { once: true }
          );
        }), e3.signal.aborted)
          return;
        I("upgraded"), Y(
          `You're on ${g2.name}. ${g2.limit.toLocaleString("en-US")} ${r2} a month.${b2 ? "" : " Simulated, nothing was charged."}`
        ), $2?.(Q);
      } catch (r3) {
        if (e3.signal.aborted) return;
        let a3 = r3 instanceof Error && r3.message ? r3.message : "The upgrade did not go through. Try again.";
        D(a3), I("error"), Y(a3);
      }
    }, ei = V || E ? ea : 0, es = Math.max(0, ee - e2);
    return (0, t.jsxs)("section", {
      className: `${x().root} ${z ?? ""}`,
      "aria-label": `Upgrade to ${g2.name}`,
      "data-phase": C,
      children: [
        (0, t.jsxs)("header", {
          className: x().header,
          children: [
            (0, t.jsx)("h3", {
              className: x().title,
              children: (0, t.jsx)(w, {
                reduced: E,
                active: X ? "done" : "limit",
                items: {
                  limit: P2 ?? (er ? `You've used all ${a2.toLocaleString("en-US")} ${r2}` : `You've used ${e2.toLocaleString("en-US")} of ${a2.toLocaleString("en-US")} ${r2}`),
                  done: `You're on ${g2.name}`
                }
              })
            }),
            (0, t.jsx)("p", {
              className: x().description,
              children: (0, t.jsx)(w, {
                reduced: E,
                active: X ? "done" : "limit",
                items: {
                  limit: R ?? `Your free ${r2} reset ${h2}. Upgrade to keep going without the wait.`,
                  done: "Your new limits are live. Pick up right where you left off."
                }
              })
            })
          ]
        }),
        (0, t.jsxs)("div", {
          ref: B,
          className: x().meter,
          children: [
            (0, t.jsxs)("div", {
              className: x().meterRow,
              children: [
                (0, t.jsx)(w, {
                  reduced: E,
                  className: x().state,
                  active: X ? "done" : er ? "limit" : "near",
                  items: {
                    limit: (0, t.jsxs)("span", {
                      className: x().stateLabel,
                      "data-tone": "warning",
                      children: [
                        (0, t.jsx)(o.A, { size: 14, "aria-hidden": "true" }),
                        "Limit reached"
                      ]
                    }),
                    near: (0, t.jsxs)("span", {
                      className: x().stateLabel,
                      "data-tone": "warning",
                      children: [
                        (0, t.jsx)(o.A, { size: 14, "aria-hidden": "true" }),
                        Math.max(0, a2 - e2).toLocaleString("en-US"),
                        " left"
                      ]
                    }),
                    done: (0, t.jsxs)("span", {
                      className: x().stateLabel,
                      "data-tone": "success",
                      children: [
                        (0, t.jsx)(d.A, { size: 14, "aria-hidden": "true" }),
                        es.toLocaleString("en-US"),
                        " ",
                        r2,
                        " left"
                      ]
                    })
                  }
                }),
                (0, t.jsx)(w, {
                  reduced: E,
                  className: x().count,
                  active: X ? "done" : "limit",
                  items: {
                    limit: (0, t.jsxs)(t.Fragment, {
                      children: [
                        e2.toLocaleString("en-US"),
                        " of ",
                        a2.toLocaleString("en-US")
                      ]
                    }),
                    done: (0, t.jsxs)(t.Fragment, {
                      children: [
                        e2.toLocaleString("en-US"),
                        " of ",
                        g2.limit.toLocaleString("en-US")
                      ]
                    })
                  }
                })
              ]
            }),
            (0, t.jsx)("div", {
              className: x().track,
              role: "meter",
              "aria-label": r2,
              "aria-valuemin": 0,
              "aria-valuemax": ee,
              "aria-valuenow": e2,
              "aria-valuetext": `${e2.toLocaleString("en-US")} of ${ee.toLocaleString("en-US")} ${r2} used`,
              children: (0, t.jsx)(i.PY1.span, {
                className: x().fill,
                "data-tone": X ? "accent" : "warning",
                initial: false,
                animate: { x: `${(ei - 1) * 100}%` },
                transition: E ? { duration: 0 } : j
              })
            })
          ]
        }),
        (0, t.jsxs)("div", {
          className: x().stage,
          children: [
            (0, t.jsxs)(L, {
              on: "offer" === et,
              reduced: E,
              children: [
                (0, t.jsxs)("div", {
                  className: x().priceRow,
                  children: [
                    (0, t.jsxs)("div", {
                      className: x().priceBlock,
                      children: [
                        (0, t.jsxs)("div", {
                          className: x().price,
                          children: [
                            (0, t.jsxs)("span", {
                              className: x().amount,
                              children: [
                                (0, t.jsx)(S, { value: N(G, Z), reduced: E }),
                                (0, t.jsx)("span", {
                                  className: x().srOnly,
                                  children: N(G, Z)
                                })
                              ]
                            }),
                            (0, t.jsx)("span", {
                              className: x().per,
                              children: "/ month"
                            })
                          ]
                        }),
                        (0, t.jsx)("p", {
                          className: x().meta,
                          children: (0, t.jsx)(w, {
                            reduced: E,
                            active: "error" === C ? "error" : F,
                            items: {
                              monthly: "Billed monthly. Cancel anytime.",
                              yearly: `${N(H, Z)} billed yearly. Cancel anytime.`,
                              error: (0, t.jsxs)("span", {
                                className: x().error,
                                children: [
                                  (0, t.jsx)(o.A, {
                                    size: 14,
                                    "aria-hidden": "true"
                                  }),
                                  (0, t.jsx)("span", {
                                    className: x().ellipsis,
                                    children: M
                                  })
                                ]
                              })
                            }
                          })
                        })
                      ]
                    }),
                    (0, t.jsx)("div", {
                      className: x().toggle,
                      inert: K || void 0,
                      children: (0, t.jsx)(m.A, {
                        label: "Billing interval",
                        value: F,
                        onValueChange: (e3) => {
                          void 0 === _2 && T(e3), f2?.(e3);
                        },
                        options: [
                          { value: "monthly", label: "Monthly" },
                          {
                            value: "yearly",
                            label: "Yearly",
                            accessory: J > 0 ? (0, t.jsx)("span", {
                              className: x().save,
                              children: `\u2212${J}%`
                            }) : void 0
                          }
                        ]
                      })
                    })
                  ]
                }),
                (0, t.jsx)("ul", {
                  className: x().features,
                  "aria-label": `${g2.name} includes`,
                  children: g2.features.map(
                    (e3) => (0, t.jsxs)(
                      "li",
                      {
                        className: x().feature,
                        children: [
                          (0, t.jsx)(c.A, {
                            className: x().check,
                            size: 14,
                            strokeWidth: 2.25,
                            "aria-hidden": "true"
                          }),
                          (0, t.jsx)("span", {
                            className: x().featureLabel,
                            children: e3.label
                          })
                        ]
                      },
                      e3.id
                    )
                  )
                }),
                (0, t.jsxs)("div", {
                  className: x().actions,
                  children: [
                    (0, t.jsx)(p.$, {
                      variant: "secondary",
                      onClick: () => {
                        I("later"), Y(`Dismissed. Your ${r2} reset ${h2}.`), A2?.();
                      },
                      disabled: K,
                      children: "Maybe later"
                    }),
                    (0, t.jsx)(p.$, {
                      className: x().primary,
                      onClick: el,
                      loading: K,
                      children: K ? "Upgrading" : "error" === C ? "Try again" : `Upgrade to ${g2.name}`
                    })
                  ]
                })
              ]
            }),
            (0, t.jsxs)(L, {
              on: "upgraded" === et,
              reduced: E,
              children: [
                (0, t.jsx)("dl", {
                  className: x().limits,
                  children: g2.limits.map(
                    (e3) => (0, t.jsxs)(
                      "div",
                      {
                        className: x().limitRow,
                        children: [
                          (0, t.jsx)("dt", { children: e3.label }),
                          (0, t.jsx)("dd", { children: e3.value })
                        ]
                      },
                      e3.label
                    )
                  )
                }),
                (0, t.jsx)("p", {
                  className: x().meta,
                  children: `${N(H, Z)} billed today${b2 ? "." : ". Simulated, nothing was charged."}`
                }),
                (0, t.jsx)("div", {
                  className: x().actions,
                  "data-single": true,
                  children: (0, t.jsx)(p.$, {
                    className: x().primary,
                    onClick: () => {
                      U2 ? U2() : (I("offer"), Y("Demo reset."));
                    },
                    children: "Continue"
                  })
                })
              ]
            }),
            (0, t.jsxs)(L, {
              on: "later" === et,
              reduced: E,
              children: [
                (0, t.jsxs)("div", {
                  className: x().later,
                  children: [
                    (0, t.jsx)(u.A, {
                      className: x().laterIcon,
                      size: 16,
                      "aria-hidden": "true"
                    }),
                    (0, t.jsxs)("div", {
                      className: x().laterText,
                      children: [
                        (0, t.jsx)("p", {
                          className: x().laterTitle,
                          children: `We'll remind you ${h2}`
                        }),
                        (0, t.jsx)("p", {
                          className: x().laterBody,
                          children: `Your ${r2} come back then, and everything you made stays put. ${g2.name} is here whenever you need more.`
                        })
                      ]
                    })
                  ]
                }),
                (0, t.jsx)("div", {
                  className: x().actions,
                  "data-single": true,
                  children: (0, t.jsx)(p.$, {
                    variant: "secondary",
                    onClick: () => {
                      I("offer"), Y("");
                    },
                    children: `See ${g2.name} again`
                  })
                })
              ]
            })
          ]
        }),
        (0, t.jsx)("p", {
          className: x().srOnly,
          role: "status",
          "aria-live": "polite",
          children: W
        })
      ]
    });
  }
  function L({ on: e2, reduced: a2, children: r2 }) {
    return (0, t.jsx)(i.PY1.div, {
      className: x().panel,
      inert: !e2 || void 0,
      "aria-hidden": !e2 || void 0,
      initial: false,
      animate: e2 ? { opacity: 1, y: 0, visibility: "visible" } : { opacity: 0, y: 4 * !a2, transitionEnd: { visibility: "hidden" } },
      transition: e2 ? a2 ? { duration: 0.12 } : { duration: 0.2, ease: [0.16, 1, 0.3, 1], delay: 0.08 } : { duration: 0.12, ease: [0.7, 0, 0.84, 0] },
      children: r2
    });
  }
  var $ = r(53693), A = r.n($);
  function U() {
    return (0, t.jsx)("div", {
      className: A().demo,
      children: (0, t.jsx)(k, {})
    });
  }
  let P = U;
}

__m(__module,__exports,__require);
});
A.regCss(82170, ".root{display:flex;flex-direction:column;gap:20px;width:100%;max-width:440px;min-width:0;box-sizing:border-box;padding:24px;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:20px}\n@media (max-width:420px){.root{padding:20px;border-radius:calc(var(--radius-panel) - 4px)}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}\n.swap{display:grid;min-width:0}\n.swapItem{grid-area:1/1;min-width:0}\n.meta .swapItem{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.header{display:flex;flex-direction:column;gap:4px}\n.title{margin:0;font-size:var(--text-lg);font-weight:500;line-height:24px;letter-spacing:-.015em;text-wrap:balance}\n.description{margin:0;color:var(--text-secondary);text-wrap:pretty}\n.meter{display:flex;flex-direction:column;gap:8px}\n.meterRow{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:20px}\n.state{flex:1 1 auto}\n.stateLabel{display:inline-flex;align-items:center;gap:6px;min-width:0;white-space:nowrap}\n.stateLabel svg{flex:none}\n.stateLabel[data-tone=warning] svg{color:var(--warning)}\n.stateLabel[data-tone=success] svg{color:var(--success)}\n.count{flex:none;justify-items:end;color:var(--text-muted);font-variant-numeric:tabular-nums;white-space:nowrap}\n.track{position:relative;height:6px;overflow:hidden;border-radius:999px;background:color-mix(in oklab,var(--foreground) 8%,transparent)}\n.fill{position:absolute;inset:0;border-radius:inherit;background:var(--warning);transition:background-color var(--duration-standard) var(--ease-standard);will-change:transform}\n.fill[data-tone=accent]{background:var(--accent)}\n@media (prefers-reduced-motion:reduce){.fill{transition:none}\n.stage{display:grid;padding-top:20px;border-top:1px solid var(--border-subtle)}\n.panel{grid-area:1/1;display:flex;flex-direction:column;min-width:0}\n.priceRow{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px}\n.priceBlock{display:flex;flex:1 1 160px;flex-direction:column;gap:2px;min-width:0}\n.price{display:inline-flex;align-items:baseline;gap:6px;white-space:nowrap}\n.amount{font-size:var(--text-lg);font-weight:500;line-height:24px;letter-spacing:-.015em;font-variant-numeric:tabular-nums}\n.per{color:var(--text-muted)}\n.rolling{display:inline-flex}\n.char{display:inline-block}\n.digit{display:inline-block;height:24px;overflow:hidden}\n.strip{display:flex;flex-direction:column}\n.strip>span{display:block;height:24px;line-height:24px;text-align:center}\n.toggle{display:flex;min-width:0}\n.save{color:var(--accent);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.meta{margin:0;min-height:18px;color:var(--text-muted);font-size:var(--text-xs);line-height:18px}\n.limits+.meta{margin-top:12px}\n.error{display:flex;align-items:center;gap:6px;min-width:0;color:var(--danger)}\n.error svg{flex:none}\n.ellipsis{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.features{display:flex;flex-direction:column;gap:8px;margin:16px 0 0;padding:0;list-style:none}\n.feature{display:flex;align-items:flex-start;gap:8px;min-width:0}\n.check{flex:none;margin-top:3px;color:var(--accent)}\n.featureLabel{min-width:0;text-wrap:pretty}\n.featureLabel svg{display:inline-block;margin-inline:1px 2px;vertical-align:-2px}\n.nowrap{white-space:nowrap}\n.claude{color:#d97757}\n.openai{color:var(--foreground)}\n.actions{display:grid;grid-template-columns:auto minmax(0,1fr);gap:8px;margin-top:auto;padding-top:24px}\n.actions[data-single]{grid-template-columns:minmax(0,1fr)}\n.primary.primary{width:100%}\n.limits{margin:0}\n.limitRow{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:36px;border-bottom:1px solid var(--border-subtle)}\n.limitRow:first-child{margin-top:-8px}\n.limitRow dt{color:var(--text-secondary);white-space:nowrap}\n.limitRow dd{display:flex;min-width:0;margin:0;overflow:hidden;text-align:right;white-space:nowrap}\n.models{display:inline-flex;align-items:center;gap:6px}\n.models svg{flex:none}\n.models>svg:not(:first-child){margin-left:6px}\n.later{display:flex;align-items:flex-start;gap:12px;margin-block:auto;padding-top:0}\n.laterIcon{flex:none;margin-top:2px;color:var(--text-secondary)}\n.laterText{display:flex;flex-direction:column;gap:4px;min-width:0}\n.laterTitle{margin:0;font-weight:500}\n.laterBody{margin:0;color:var(--text-secondary);text-wrap:pretty}", {"root":"root","srOnly":"srOnly","swap":"swap","swapItem":"swapItem","meta":"meta","header":"header","title":"title","description":"description","meter":"meter","meterRow":"meterRow","state":"state","stateLabel":"stateLabel","count":"count","track":"track","fill":"fill","stage":"stage","panel":"panel","priceRow":"priceRow","priceBlock":"priceBlock","price":"price","amount":"amount","per":"per","rolling":"rolling","char":"char","digit":"digit","strip":"strip","toggle":"toggle","save":"save","limits":"limits","error":"error","ellipsis":"ellipsis","features":"features","feature":"feature","check":"check","featureLabel":"featureLabel","nowrap":"nowrap","claude":"claude","openai":"openai","actions":"actions","primary":"primary","limitRow":"limitRow","models":"models","later":"later","laterIcon":"laterIcon","laterText":"laterText","laterTitle":"laterTitle","laterBody":"laterBody"});
A.cssFor("upgrade-prompt", [53693,82170]);
A.item("upgrade-prompt", {entry:82002, export:"UpgradePromptDemo", kind:"component", tier:"pro", unresolved:[]});
})();