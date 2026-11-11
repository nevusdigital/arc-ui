/* checkout-summary (pro block) */
(function(){var A=globalThis.__ARC__;
A.regCss(44056, ".root{box-sizing:border-box;display:grid;width:min(100%,440px);min-width:0;gap:20px;padding:clamp(20px,5vw,28px);border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root *,.root :after,.root :before{box-sizing:border-box}\n.root p{margin:0}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.inline{display:inline-flex;vertical-align:bottom}\n.inline>span{font:inherit!important;letter-spacing:inherit!important}\n.title{margin:0;font-size:var(--text-base);font-weight:500}\n.item{display:flex;min-width:0;align-items:center;gap:12px}\n.media{display:grid;width:44px;height:44px;flex:none;overflow:hidden;place-items:center;border:1px solid var(--border);border-radius:14px;background:var(--surface-muted)}\n.itemText{display:grid;min-width:0;flex:1;gap:2px}\n.itemName{overflow:hidden;font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.itemDescription{color:var(--text-muted);font-size:var(--text-xs)}\n.itemPrice{display:grid;justify-items:end;font-variant-numeric:tabular-nums;white-space:nowrap}\n.itemPeriod{color:var(--text-muted);font-size:var(--text-xs)}\n.coupon{position:relative;display:grid;min-width:0}\n.chip,.couponForm{display:flex;min-width:0;height:44px;align-items:center;border-radius:var(--radius-control)}\n.couponForm{gap:4px;padding:4px 4px 4px 14px;border:1px solid var(--border);background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard)}\n.couponForm[data-error]{border-color:color-mix(in oklab,var(--danger) 60%,var(--border))}\n.couponForm:focus-within{border-color:var(--border-strong,var(--text-muted))}\n.chip{gap:8px;padding:0 6px 0 14px;border:1px solid var(--border);background:var(--surface-muted);color:var(--foreground)}\n.couponInput{min-width:0;flex:1;height:100%;padding:0;border:0;background:transparent;color:var(--foreground);font:inherit;letter-spacing:.02em;outline:none}\n.couponInput::placeholder{color:var(--text-muted);letter-spacing:var(--tracking-body)}\n.couponApply{display:inline-grid;min-width:64px;height:34px;place-items:center;padding:0 12px;border:0;border-radius:14px;background:var(--surface-muted);color:var(--foreground);font:inherit;font-weight:500;cursor:pointer;transition:transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.couponApply:active{transform:scale(.97)}\n.couponApply:disabled{cursor:progress}\n.couponApply:hover{background:color-mix(in oklab,var(--surface-muted) 70%,var(--border))}\n.chipCode{font-weight:500;letter-spacing:.02em}\n.chipNote{flex:1;color:var(--text-secondary)}\n.chipRemove{display:grid;width:32px;height:32px;place-items:center;border:0;border-radius:12px;background:transparent;color:var(--text-secondary);cursor:pointer}\n@media (hover:hover) and (pointer:fine){.chipRemove:hover{background:var(--surface-muted);color:var(--foreground)}\n.couponError{overflow:hidden;color:var(--danger);font-size:var(--text-xs)}\n.lines{display:grid;margin:0;padding-top:16px;border-top:1px solid var(--border-subtle)}\n.line{display:flex;min-width:0;align-items:baseline;justify-content:space-between;gap:12px;padding-block:5px}\n.line dt{display:grid;min-width:0;color:var(--text-secondary)}\n.line dd{margin:0;font-variant-numeric:tabular-nums;white-space:nowrap}\n.line[data-discount] dd{color:var(--success)}\n.lineAnimated{overflow:hidden}\n.lineNote,.muted{color:var(--text-muted);font-size:var(--text-xs)}\n.total{align-items:center;margin-top:8px;padding-top:14px;border-top:1px solid var(--border-subtle)}\n.total dt{color:var(--foreground);font-weight:500}\n.totalValue{display:inline-flex;font-family:var(--font-display);font-size:var(--text-2xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display)}\n.pay{position:relative;display:grid;width:100%;height:52px;place-items:center;overflow:hidden;border:0;border-radius:var(--radius-control);background:var(--pay-background,var(--accent));color:var(--pay-foreground,var(--accent-foreground));font:inherit;font-size:var(--text-base);font-weight:500;cursor:pointer;transition:transform var(--duration-fast) var(--ease-standard),filter var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.pay:active:not(:disabled){transform:scale(.98)}\n.pay:disabled{cursor:default}\n.pay[data-state=processing]{cursor:progress}\n.pay[data-state=done]{background:var(--success);color:var(--background)}\n.pay:disabled[data-state=idle]{filter:saturate(.2);opacity:.6}\n@media (hover:hover) and (pointer:fine){.pay:not(:disabled):hover{filter:brightness(.97)}\n.payInner{display:inline-flex;align-items:center;gap:8px;white-space:nowrap}\n.spin{animation:spin .7s linear infinite}\n@media (prefers-reduced-motion:reduce){.spin{animation-duration:1.6s}\n.secure{display:flex;align-items:center;justify-content:center;gap:6px;margin-top:-8px!important;color:var(--text-muted);font-size:var(--text-xs);text-align:center}\n.payError{color:var(--danger);font-size:var(--text-xs);text-align:center}\n.footnote{color:var(--text-muted);font-size:var(--text-xs);text-align:center;text-wrap:pretty}", {"root":"root","srOnly":"srOnly","inline":"inline","title":"title","item":"item","media":"media","itemText":"itemText","itemName":"itemName","itemDescription":"itemDescription","itemPrice":"itemPrice","itemPeriod":"itemPeriod","coupon":"coupon","chip":"chip","couponForm":"couponForm","couponInput":"couponInput","couponApply":"couponApply","chipCode":"chipCode","chipNote":"chipNote","chipRemove":"chipRemove","couponError":"couponError","lines":"lines","line":"line","lineAnimated":"lineAnimated","lineNote":"lineNote","muted":"muted","total":"total","totalValue":"totalValue","pay":"pay","payInner":"payInner","spin":"spin","secure":"secure","payError":"payError","footnote":"footnote"});
A.reg(49445, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => n });
  var d = t(51811);
  let h = {
    name: "ticket-percent",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
          key: "1l48ns"
        }
      ],
      ["path", { d: "M9 9h.01", key: "1q5me6" }],
      ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
      ["path", { d: "M15 15h.01", key: "lqbp3k" }]
    ]
  };
  h.node;
  let n = (0, d.A)(h);
}

__m(__module,__exports,__require);
});
A.reg(53364, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => n });
  var d = t(51811);
  let h = {
    name: "lock-keyhole",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
      [
        "rect",
        { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }
      ],
      ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }]
    ]
  };
  h.node;
  let n = (0, d.A)(h);
}

__m(__module,__exports,__require);
});
A.reg(62056, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { CheckoutSummary: () => A, default: () => S });
  var i = t(95155), r = t(12115), n = t(18310), l = t(68598), s = t(80642), o = t(25354), c = t(92571), u = t(64577), d = t(90467), p = t(53364), m = t(49445), _ = t(9005), h = t(65024), y = t(7770), g = t(44056), f = t.n(g);
  let { spring: x, duration: v, ease: j } = y.T, b = [...j.enter], k = {
    name: "Field notes, yearly",
    description: "Unlimited notebooks and sync for one person",
    price: 96,
    period: "per year"
  }, N = [
    {
      id: "annual",
      label: "Yearly billing",
      amount: -24,
      note: "Two months free"
    }
  ], w = (e2) => new Promise((a2) => setTimeout(a2, e2)), P = {
    placeholder: "Try WELCOME10",
    onApply: async (e2) => (await w(700), "WELCOME10" === e2 ? { ok: true, code: e2, label: "Welcome, 10% off", amount: 7.2 } : { ok: false, message: "That code is not valid. Try WELCOME10." })
  }, $ = () => w(1400);
  function T(e2, a2, t2) {
    return `${e2 < 0 ? "\u2212" : ""}${a2}${Math.abs(e2).toLocaleString("en-US", { minimumFractionDigits: t2, maximumFractionDigits: t2 })}`;
  }
  function A(e2) {
    return e2.item ? (0, i.jsx)(C, { ...e2, item: e2.item }) : (0, i.jsx)(C, {
      adjustments: N,
      coupon: P,
      tax: { label: "Sales tax (8.5%)", rate: 0.085 },
      onPay: $,
      ...e2,
      item: k
    });
  }
  function C({
    item: e2,
    adjustments: a2 = [],
    coupon: t2,
    tax: y2,
    currency: g2 = "$",
    title: k2 = "Order summary",
    payLabel: N2 = (e3) => `Pay ${e3}`,
    onPay: w2,
    form: P2,
    secureNote: $2 = "Encrypted payment",
    successLabel: A2 = "Paid",
    disabled: S2 = false,
    footnote: L,
    className: E
  }) {
    let I = !!(0, n.I)(), M = (0, r.useId)(), D = (0, r.useId)(), Y = (0, l.E)(), O = (0, r.useRef)(null), [R, F] = (0, r.useState)(""), [q, B] = (0, r.useState)({ status: "idle" }), [z, W] = (0, r.useState)("idle");
    (0, r.useEffect)(() => {
      let e3 = (e4) => {
        e4.persisted && W("idle");
      };
      return window.addEventListener("pageshow", e3), () => window.removeEventListener("pageshow", e3);
    }, []);
    let U = "applied" === q.status ? q : null, H = [
      ...a2,
      ...U ? [{ id: "coupon", label: U.label, amount: -U.amount }] : []
    ], G = Math.max(0, e2.price + H.reduce((e3, a3) => e3 + a3.amount, 0)), V = y2?.rate ? Math.round(G * y2.rate * 100) / 100 : 0, K = G + V, Z = 2 * !![e2.price, ...H.map((e3) => e3.amount), K].some(
      (e3) => !Number.isInteger(e3)
    ), Q = T(K, g2, Z), X = (e3) => {
      B({ status: "error", message: e3 }), I || Y.start({
        x: [0, -6, 6, -4, 3, 0],
        transition: { duration: 0.36, ease: [...j.standard] }
      });
    }, J = async (e3) => {
      if (e3.preventDefault(), !t2 || "applying" === q.status) return;
      let a3 = R.trim();
      if (!a3) return void O.current?.focus();
      B({ status: "applying" });
      try {
        let e4 = await t2.onApply(a3);
        e4.ok ? B({
          status: "applied",
          code: e4.code,
          label: e4.label ?? `Code ${e4.code}`,
          amount: e4.amount
        }) : X(e4.message);
      } catch {
        X("Could not check the code. Try again.");
      }
    }, ee = async () => {
      if (w2 && "processing" !== z && "done" !== z) {
        W("processing");
        try {
          await w2(), W("done");
        } catch {
          W("error");
        }
      }
    }, ea = "processing" === z ? "Processing" : "done" === z ? A2 : "error" === z ? "Try again" : N2(Q), et = "processing" === z ? (0, i.jsx)(c.A, {
      className: f().spin,
      size: 18,
      strokeWidth: 1.75,
      "aria-hidden": "true"
    }) : "done" === z ? (0, i.jsx)(u.A, {
      size: 18,
      strokeWidth: 2,
      "aria-hidden": "true"
    }) : P2 ? (0, i.jsx)(d.A, {
      size: 18,
      strokeWidth: 1.75,
      "aria-hidden": "true"
    }) : (0, i.jsx)(p.A, {
      size: 16,
      strokeWidth: 1.75,
      "aria-hidden": "true"
    }), ei = (0, i.jsx)(s.N, {
      mode: "popLayout",
      initial: false,
      children: (0, i.jsxs)(
        o.PY1.span,
        {
          className: f().payInner,
          initial: I ? { opacity: 0 } : { opacity: 0, y: 8 },
          animate: { opacity: 1, y: 0 },
          exit: I ? { opacity: 0 } : { opacity: 0, y: -8, transition: { duration: v.fast } },
          transition: { duration: v.standard, ease: b },
          children: [et, (0, i.jsx)("span", { children: ea })]
        },
        "idle" === z ? `idle-${Q}` : z
      )
    }), er = {
      className: f().pay,
      "data-state": z,
      disabled: S2 || "processing" === z || "done" === z,
      "aria-live": "polite"
    };
    return (0, i.jsxs)("section", {
      className: [f().root, E].filter(Boolean).join(" "),
      "aria-label": k2,
      children: [
        (0, i.jsx)("h3", { className: f().title, children: k2 }),
        (0, i.jsxs)("div", {
          className: f().item,
          children: [
            e2.media ? (0, i.jsx)("div", { className: f().media, children: e2.media }) : null,
            (0, i.jsxs)("div", {
              className: f().itemText,
              children: [
                (0, i.jsx)("span", {
                  className: f().itemName,
                  children: e2.name
                }),
                e2.description ? (0, i.jsx)("span", {
                  className: f().itemDescription,
                  children: e2.description
                }) : null
              ]
            }),
            (0, i.jsxs)("span", {
              className: f().itemPrice,
              children: [
                T(e2.price, g2, Z),
                e2.period ? (0, i.jsx)("span", {
                  className: f().itemPeriod,
                  children: e2.period
                }) : null
              ]
            })
          ]
        }),
        t2 ? (0, i.jsxs)(o.PY1.div, {
          className: f().coupon,
          animate: Y,
          children: [
            (0, i.jsx)(s.N, {
              mode: "popLayout",
              initial: false,
              children: U ? (0, i.jsxs)(
                o.PY1.div,
                {
                  className: f().chip,
                  initial: I ? { opacity: 0 } : { opacity: 0, scale: 0.97 },
                  animate: { opacity: 1, scale: 1 },
                  exit: {
                    opacity: 0,
                    transition: { duration: v.fast }
                  },
                  transition: I ? { duration: 0 } : x.smooth,
                  children: [
                    (0, i.jsx)(m.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    (0, i.jsx)("span", {
                      className: f().chipCode,
                      children: U.code
                    }),
                    (0, i.jsx)("span", {
                      className: f().chipNote,
                      children: "applied"
                    }),
                    (0, i.jsx)("button", {
                      type: "button",
                      className: f().chipRemove,
                      onClick: () => {
                        B({ status: "idle" }), F(""), requestAnimationFrame(
                          () => O.current?.focus()
                        );
                      },
                      "aria-label": `Remove code ${U.code}`,
                      children: (0, i.jsx)(_.A, {
                        size: 14,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      })
                    })
                  ]
                },
                "chip"
              ) : (0, i.jsxs)(
                o.PY1.form,
                {
                  className: f().couponForm,
                  onSubmit: J,
                  initial: I ? { opacity: 0 } : { opacity: 0, scale: 0.98 },
                  animate: { opacity: 1, scale: 1 },
                  exit: {
                    opacity: 0,
                    transition: { duration: v.fast }
                  },
                  transition: { duration: v.standard, ease: b },
                  "data-error": "error" === q.status || void 0,
                  children: [
                    (0, i.jsx)("label", {
                      htmlFor: M,
                      className: f().srOnly,
                      children: "Promo code"
                    }),
                    (0, i.jsx)("input", {
                      ref: O,
                      id: M,
                      className: f().couponInput,
                      value: R,
                      onChange: (e3) => {
                        F(e3.target.value.toUpperCase()), "error" === q.status && B({ status: "idle" });
                      },
                      placeholder: t2.placeholder ?? "Promo code",
                      autoComplete: "off",
                      spellCheck: false,
                      "aria-invalid": "error" === q.status || void 0,
                      "aria-describedby": "error" === q.status ? D : void 0
                    }),
                    (0, i.jsx)("button", {
                      type: "submit",
                      className: f().couponApply,
                      disabled: "applying" === q.status,
                      children: "applying" === q.status ? (0, i.jsx)(c.A, {
                        className: f().spin,
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-label": "Checking code"
                      }) : "Apply"
                    })
                  ]
                },
                "form"
              )
            }),
            (0, i.jsx)(s.N, {
              initial: false,
              children: "error" === q.status ? (0, i.jsx)(
                o.PY1.p,
                {
                  id: D,
                  className: f().couponError,
                  role: "alert",
                  initial: { opacity: 0, height: 0, paddingTop: 0 },
                  animate: {
                    opacity: 1,
                    height: "auto",
                    paddingTop: 8
                  },
                  exit: { opacity: 0, height: 0, paddingTop: 0 },
                  transition: I ? { duration: 0 } : x.smooth,
                  children: q.message
                },
                "error"
              ) : null
            })
          ]
        }) : null,
        (0, i.jsxs)("dl", {
          className: f().lines,
          children: [
            (0, i.jsxs)("div", {
              className: f().line,
              children: [
                (0, i.jsx)("dt", { children: "Subtotal" }),
                (0, i.jsx)("dd", { children: T(e2.price, g2, Z) })
              ]
            }),
            (0, i.jsx)(s.N, {
              initial: false,
              children: H.map(
                (e3) => (0, i.jsxs)(
                  o.PY1.div,
                  {
                    className: `${f().line} ${f().lineAnimated}`,
                    "data-discount": e3.amount < 0 || void 0,
                    initial: {
                      height: 0,
                      opacity: 0,
                      paddingTop: 0,
                      paddingBottom: 0
                    },
                    animate: {
                      height: "auto",
                      opacity: 1,
                      paddingTop: 5,
                      paddingBottom: 5
                    },
                    exit: {
                      height: 0,
                      opacity: 0,
                      paddingTop: 0,
                      paddingBottom: 0
                    },
                    transition: I ? { duration: 0 } : {
                      default: x.smooth,
                      opacity: { duration: v.standard }
                    },
                    children: [
                      (0, i.jsxs)("dt", {
                        children: [
                          e3.label,
                          e3.note ? (0, i.jsx)("span", {
                            className: f().lineNote,
                            children: e3.note
                          }) : null
                        ]
                      }),
                      (0, i.jsx)("dd", { children: T(e3.amount, g2, Z) })
                    ]
                  },
                  e3.id
                )
              )
            }),
            y2 ? (0, i.jsxs)("div", {
              className: f().line,
              children: [
                (0, i.jsx)("dt", { children: y2.label }),
                (0, i.jsx)("dd", {
                  className: y2.rate ? void 0 : f().muted,
                  children: y2.rate ? T(V, g2, Z) : y2.note ?? "Calculated at checkout"
                })
              ]
            }) : null,
            (0, i.jsxs)("div", {
              className: `${f().line} ${f().total}`,
              children: [
                (0, i.jsx)("dt", { children: "Total" }),
                (0, i.jsxs)("dd", {
                  children: [
                    (0, i.jsx)("span", { className: f().srOnly, children: Q }),
                    (0, i.jsxs)("span", {
                      className: f().totalValue,
                      "aria-hidden": "true",
                      children: [
                        g2,
                        (0, i.jsx)("span", {
                          className: f().inline,
                          children: (0, i.jsx)(h.q, { value: K, decimals: Z })
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        P2 ? (0, i.jsxs)("form", {
          action: P2.action,
          method: "post",
          onSubmit: () => W("processing"),
          children: [
            Object.entries(P2.fields ?? {}).map(
              ([e3, a3]) => (0, i.jsx)("input", { type: "hidden", name: e3, value: a3 }, e3)
            ),
            (0, i.jsx)("button", { type: "submit", ...er, children: ei })
          ]
        }) : (0, i.jsx)("button", {
          type: "button",
          onClick: ee,
          ...er,
          children: ei
        }),
        $2 ? (0, i.jsxs)("p", {
          className: f().secure,
          children: [
            (0, i.jsx)(p.A, {
              size: 14,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            $2
          ]
        }) : null,
        "error" === z ? (0, i.jsx)("p", {
          className: f().payError,
          role: "alert",
          children: "The payment did not go through. Try again, or use another method."
        }) : null,
        L ? (0, i.jsx)("p", { className: f().footnote, children: L }) : null
      ]
    });
  }
  let S = A;
}

__m(__module,__exports,__require);
});
A.reg(68598, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { E: () => i });
  var d = t(28819), h = t(65239), n = t(67119), r = t(38294), l = t(5556);
  function y(e2, a2) {
    [...a2].reverse().forEach((t2) => {
      let d2 = e2.getVariant(t2);
      d2 && (0, n.U)(e2, d2), e2.variantChildren && e2.variantChildren.forEach((e3) => {
        y(e3, a2);
      });
    });
  }
  function o() {
    let e2 = false, a2 = /* @__PURE__ */ new Set(), t2 = {
      subscribe: (e3) => (a2.add(e3), () => void a2.delete(e3)),
      start(t3, d2) {
        (0, l.V)(
          e2,
          "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook."
        );
        let h2 = [];
        return a2.forEach((e3) => {
          h2.push((0, r._)(e3, t3, { transitionOverride: d2 }));
        }), Promise.all(h2);
      },
      set: (t3) => ((0, l.V)(
        e2,
        "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
      ), a2.forEach((e3) => {
        var a3, d2;
        a3 = e3, Array.isArray(d2 = t3) ? y(a3, d2) : "string" == typeof d2 ? y(a3, [d2]) : (0, n.U)(a3, d2);
      })),
      stop() {
        a2.forEach((e3) => {
          e3.values.forEach((e4) => e4.stop());
        });
      },
      mount: () => (e2 = true, () => {
        e2 = false, t2.stop();
      })
    };
    return t2;
  }
  function i() {
    let e2 = (0, d.M)(o);
    return (0, h.E)(e2.mount, []), e2;
  }
}

__m(__module,__exports,__require);
});
A.cssFor("checkout-summary", [44056]);
A.item("checkout-summary", {entry:62056, export:"CheckoutSummary", kind:"block", tier:"pro", unresolved:[]});
})();