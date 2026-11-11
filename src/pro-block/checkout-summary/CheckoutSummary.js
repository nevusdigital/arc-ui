function(__module,__exports,__require){
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
}