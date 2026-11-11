function(__module,__exports,__require){
"use strict";
function __m(e, a, i) {
  "use strict";
  i.r(a), i.d(a, { CheckoutLive: () => R, default: () => Y });
  var t = i(95155), s = i(12115), l = i(18310), n = i(25354), r = i(80642), c = i(9937), o = i(57700), d = i(64577), u = i(9005), h = i(2125), p = i(92571), m = i(50825), x = i(92298), _ = i(36565), y = i(5736), v = i(12363), j = i(7770), b = i(96220);
  let k = [
    {
      id: "starter",
      name: "Starter",
      seat: 1200,
      blurb: "Core docs and boards"
    },
    { id: "team", name: "Team", seat: 2400, blurb: "Automations and guests" },
    {
      id: "business",
      name: "Business",
      seat: 4200,
      blurb: "Audit, SLAs, and admin"
    }
  ], g = [
    {
      id: "support",
      name: "Priority support",
      detail: "Four hour response",
      monthly: 4900
    },
    {
      id: "sso",
      name: "SSO and SCIM",
      detail: "Okta, Entra ID, Google",
      monthly: 9900
    },
    {
      id: "audit",
      name: "Extended audit log",
      detail: "Two year retention",
      monthly: 2900
    }
  ], N = [
    {
      code: "DE",
      name: "Germany",
      rate: 0.19,
      taxLabel: "VAT 19%",
      postal: /^\d{5}$/,
      postalHint: "Use five digits"
    },
    {
      code: "US",
      name: "United States",
      rate: 0,
      taxLabel: "Sales tax",
      postal: /^\d{5}(-\d{4})?$/,
      postalHint: "Use a five digit ZIP code"
    },
    {
      code: "GB",
      name: "United Kingdom",
      rate: 0.2,
      taxLabel: "VAT 20%",
      postal: /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i,
      postalHint: "Use a UK postcode like SW1A 1AA"
    },
    {
      code: "CH",
      name: "Switzerland",
      rate: 0.081,
      taxLabel: "VAT 8.1%",
      postal: /^\d{4}$/,
      postalHint: "Use four digits"
    },
    {
      code: "CA",
      name: "Canada",
      rate: 0.13,
      taxLabel: "HST 13%",
      postal: /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/i,
      postalHint: "Use a postal code like M5V 2T6"
    },
    {
      code: "AU",
      name: "Australia",
      rate: 0.1,
      taxLabel: "GST 10%",
      postal: /^\d{4}$/,
      postalHint: "Use four digits"
    }
  ];
  function f(e2) {
    let a2 = e2.trim().toUpperCase();
    return "LAUNCH20" === a2 ? { ok: true, code: a2, percent: 20 } : "TEAM10" === a2 ? { ok: true, code: a2, percent: 10 } : "SUMMER25" === a2 ? { ok: false, message: "SUMMER25 ended on August 31" } : { ok: false, message: `We could not find ${a2 || "that code"}` };
  }
  let A = {
    email: "emma@northwind.studio",
    name: "Emma Collins",
    address: "Torstra\xDFe 109",
    city: "Berlin",
    postal: "10119",
    country: "DE"
  };
  var T = i(61140), C = i.n(T);
  let S = [
    "email",
    "name",
    "address",
    "city",
    "postal",
    "card",
    "expiry",
    "cvc"
  ], w = ["Apple Pay", "Google Pay", "PayPal"], P = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], M = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 }
  }, $ = (e2) => new Promise((a2) => setTimeout(a2, e2));
  function B(...e2) {
    return e2.filter(Boolean).join(" ");
  }
  function L({ value: e2, className: a2 }) {
    let i2 = (0, l.I)(), s2 = Array.from(e2), r2 = i2 ? { duration: 0 } : j.T.spring.snappy;
    return (0, t.jsxs)("span", {
      className: B(C().roll, a2),
      children: [
        (0, t.jsx)("span", { className: C().srOnly, children: e2 }),
        (0, t.jsx)("span", {
          className: C().rollTrack,
          "aria-hidden": "true",
          children: s2.map((e3, a3) => {
            let i3 = s2.length - a3;
            return /\d/.test(e3) ? (0, t.jsx)(
              "span",
              {
                className: C().rollDigit,
                children: (0, t.jsx)(n.PY1.span, {
                  className: C().rollStrip,
                  initial: false,
                  animate: { y: `${-10 * Number(e3)}%` },
                  transition: r2,
                  children: P.map(
                    (e4) => (0, t.jsx)("span", { children: e4 }, e4)
                  )
                })
              },
              `d${i3}`
            ) : (0, t.jsx)(
              "span",
              { className: C().rollGlyph, children: e3 },
              `s${i3}`
            );
          })
        })
      ]
    });
  }
  function z({ name: e2 }) {
    return "Apple Pay" === e2 ? (0, t.jsxs)("span", {
      className: C().walletMark,
      "aria-hidden": "true",
      children: [
        (0, t.jsx)("svg", {
          viewBox: "0 0 24 24",
          width: "16",
          height: "16",
          fill: "currentColor",
          children: (0, t.jsx)("path", {
            d: "M16.37 1.43c0 1.14-.5 2.27-1.18 3.08-.74.9-1.99 1.57-2.99 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.57-2.27 1.21-2.98.8-.94 2.14-1.64 3.25-1.68.03.13.05.28.05.43zm4.56 15.71c-.03.07-.46 1.58-1.52 3.12-.94 1.34-1.94 2.71-3.43 2.71-1.52 0-1.9-.88-3.63-.88-1.7 0-2.3.91-3.67.91-1.38 0-2.33-1.26-3.43-2.8-1.29-1.82-2.32-4.63-2.32-7.28 0-4.28 2.8-6.55 5.55-6.55 1.45 0 2.68.95 3.6.95.87 0 2.22-1.01 3.9-1.01.61 0 2.89.06 4.37 2.19-.13.09-2.38 1.37-2.38 4.19 0 3.26 2.85 4.42 2.96 4.45z"
          })
        }),
        "Pay"
      ]
    }) : "Google Pay" === e2 ? (0, t.jsxs)("span", {
      className: C().walletMark,
      "aria-hidden": "true",
      children: [
        (0, t.jsxs)("svg", {
          viewBox: "0 0 48 48",
          width: "16",
          height: "16",
          children: [
            (0, t.jsx)("path", {
              fill: "#EA4335",
              d: "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
            }),
            (0, t.jsx)("path", {
              fill: "#4285F4",
              d: "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
            }),
            (0, t.jsx)("path", {
              fill: "#FBBC05",
              d: "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
            }),
            (0, t.jsx)("path", {
              fill: "#34A853",
              d: "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
            })
          ]
        }),
        "Pay"
      ]
    }) : (0, t.jsxs)("span", {
      className: C().paypalMark,
      "aria-hidden": "true",
      children: [
        (0, t.jsx)("span", { children: "Pay" }),
        (0, t.jsx)("span", { children: "Pal" })
      ]
    });
  }
  function O({ children: e2, className: a2, instant: i2 }) {
    return (0, t.jsx)(n.PY1.div, {
      className: B(C().collapse, a2),
      ...M,
      exit: i2 ? { opacity: 0, transition: { duration: 0 } } : M.exit,
      transition: j.T.spring.smooth,
      children: e2
    });
  }
  function R({
    plans: e2 = k,
    addons: a2 = g,
    countries: i2 = N,
    defaultPlan: T2 = "team",
    defaultSeats: P2 = 8,
    defaultBilling: Y2 = "yearly",
    defaultAddons: E = ["support"],
    yearlyDiscount: H = 0.2,
    currency: U = "USD",
    validateCoupon: D = f,
    onPay: F,
    className: W
  }) {
    let I = (0, s.useId)(), V = (0, s.useRef)({}), Z = (0, s.useRef)(null), G = (0, s.useRef)(null), q = (0, l.I)(), [K, J] = (0, s.useState)(T2), [Q, X] = (0, s.useState)(P2), [ee, ea] = (0, s.useState)(Y2), [ei, et] = (0, s.useState)(E), [es, el] = (0, s.useState)(null), [en, er] = (0, s.useState)(false), [ec, eo] = (0, s.useState)(""), [ed, eu] = (0, s.useState)(""), [eh, ep] = (0, s.useState)(false), [em, ex] = (0, s.useState)({ ...A, card: "", expiry: "", cvc: "" }), [e_, ey] = (0, s.useState)({}), [ev, ej] = (0, s.useState)("edit"), [eb, ek] = (0, s.useState)("card"), [eg, eN] = (0, s.useState)(""), [ef, eA] = (0, s.useState)(null), [eT, eC] = (0, s.useState)(false), [eS, ew] = (0, s.useState)(false), eP = i2.find((e3) => e3.code === em.country) ?? i2[0], eM = e2.find((e3) => e3.id === K) ?? e2[0], e$ = "yearly" === ee ? 12 : 1, eB = "yearly" === ee ? e$ * (1 - H) : 1, eL = Math.round(eM.seat * Q * eB), ez = a2.filter((e3) => ei.includes(e3.id)).map((e3) => ({ ...e3, amount: Math.round(e3.monthly * eB) })), eO = eL + ez.reduce((e3, a3) => e3 + a3.amount, 0), eR = es ? Math.round(eO * es.percent / 100) : 0, eY = Math.round((eO - eR) * eP.rate), eE = eO - eR + eY, eH = (e3) => new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: U
    }).format(e3 / 100), eU = (function(e3, a3) {
      let i3 = {};
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e3.email.trim()) || (i3.email = e3.email.trim() ? "Enter a valid email like name@company.com" : "Enter your email"), e3.name.trim().length < 2 && (i3.name = "Enter the name on the card"), e3.address.trim().length < 3 && (i3.address = "Enter a street address"), e3.city.trim() || (i3.city = "Enter a city"), e3.postal.trim() ? a3 && !a3.postal.test(e3.postal.trim()) && (i3.postal = a3.postalHint) : i3.postal = "Enter a postal code";
      let t2 = e3.card.replace(/\D/g, ""), s2 = /^3[47]/.test(t2);
      t2 ? t2.length < (s2 ? 15 : 16) ? i3.card = "This card number is too short" : !(function(e4) {
        let a4 = 0;
        for (let i4 = 0; i4 < e4.length; i4++) {
          let t3 = Number(e4[e4.length - 1 - i4]);
          i4 % 2 == 1 && (t3 *= 2) > 9 && (t3 -= 9), a4 += t3;
        }
        return a4 % 10 == 0;
      })(t2) && (i3.card = "Check the card number for a typo") : i3.card = "Enter a card number";
      let l2 = /^(\d{2})\/(\d{2})$/.exec(e3.expiry);
      if (l2) {
        let e4 = Number(l2[1]), a4 = 2e3 + Number(l2[2]), t3 = /* @__PURE__ */ new Date();
        e4 < 1 || e4 > 12 ? i3.expiry = "Month runs 01 to 12" : (a4 < t3.getFullYear() || a4 === t3.getFullYear() && e4 < t3.getMonth() + 1) && (i3.expiry = "This card has expired");
      } else i3.expiry = "Use MM/YY";
      return RegExp(`^\\d{${s2 ? 4 : 3}}$`).test(e3.cvc) || (i3.cvc = s2 ? "Four digits on the front" : "Three digits on the back"), i3;
    })(em, eP), eD = em.card.replace(/\D/g, ""), eF = /^4/.test(eD) ? "Visa" : /^(5[1-5]|2[2-7])/.test(eD) ? "Mastercard" : /^3[47]/.test(eD) ? "Amex" : "", eW = "paid" === ev, eI = "processing" === ev, eV = q ? { duration: 0 } : j.T.spring.smooth, eZ = (e3, a3) => {
      ex((i3) => ({ ...i3, [e3]: a3 })), eN("");
    }, eG = async (e3) => {
      if (e3?.preventDefault(), !ec.trim() || eh) return;
      ep(true), eu("");
      let [a3] = await Promise.all([D(ec), $(480)]);
      ep(false), a3.ok ? (el({ code: a3.code, percent: a3.percent }), er(false), eo("")) : (eu(a3.message), Z.current?.focus());
    }, eq = async (e3) => {
      ek(e3), ej("processing"), eN("");
      try {
        if (F)
          await F({
            plan: K,
            seats: Q,
            billing: ee,
            addons: ei,
            coupon: es?.code,
            country: eP.code,
            email: em.email.trim(),
            method: e3,
            subtotal: eO,
            discount: eR,
            tax: eY,
            total: eE
          });
        else if (await $("card" === e3 ? 1500 : 1100), "card" === e3 && "4000000000000002" === eD)
          throw Error("Your card was declined. Try another card.");
        let a3 = new Intl.DateTimeFormat("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric"
        }).format(/* @__PURE__ */ new Date());
        eA({
          number: `ARC-${Math.floor(1e5 + 899999 * Math.random())}`,
          date: a3,
          last4: eD.slice(-4),
          brand: eF || "Card"
        }), ej("paid"), requestAnimationFrame(
          () => G.current?.focus({ preventScroll: true })
        );
      } catch (e4) {
        ej("edit"), eN(e4 instanceof Error ? e4.message : "Payment failed. Try again.");
      }
    }, eK = (e3, a3, i3 = {}, s2) => {
      let l2 = e_[e3] ? eU[e3] : void 0, c2 = e_[e3] && !eU[e3];
      return (0, t.jsxs)("div", {
        className: C().field,
        "data-invalid": l2 ? "" : void 0,
        children: [
          (0, t.jsxs)("div", {
            className: C().labelRow,
            children: [
              (0, t.jsx)("label", { htmlFor: `${I}-${e3}`, children: a3 }),
              s2
            ]
          }),
          (0, t.jsxs)("div", {
            className: C().inputWrap,
            children: [
              (0, t.jsx)("input", {
                ref: (a4) => {
                  V.current[e3] = a4;
                },
                id: `${I}-${e3}`,
                className: C().input,
                value: em[e3],
                "aria-invalid": !!l2 || void 0,
                "aria-describedby": l2 ? `${I}-${e3}-error` : void 0,
                disabled: eI,
                onChange: (a4) => eZ(e3, a4.target.value),
                onBlur: () => em[e3] && ey((a4) => ({ ...a4, [e3]: true })),
                ...i3
              }),
              (0, t.jsx)(r.N, {
                initial: false,
                children: c2 ? (0, t.jsx)(
                  n.PY1.span,
                  {
                    className: C().valid,
                    initial: { opacity: 0, scale: 0.6 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 0.6 },
                    transition: j.T.spring.snappy,
                    "aria-hidden": "true",
                    children: (0, t.jsx)(d.A, {
                      size: 14,
                      strokeWidth: 2
                    })
                  },
                  "ok"
                ) : null
              })
            ]
          }),
          (0, t.jsx)(r.N, {
            initial: false,
            children: l2 ? (0, t.jsx)(
              O,
              {
                children: (0, t.jsx)("p", {
                  id: `${I}-${e3}-error`,
                  className: C().error,
                  children: l2
                })
              },
              l2
            ) : null
          })
        ]
      });
    }, eJ = (0, t.jsxs)(t.Fragment, {
      children: [
        (0, t.jsxs)("ul", {
          className: C().lines,
          "aria-label": "Order lines",
          children: [
            (0, t.jsxs)("li", {
              className: C().line,
              children: [
                (0, t.jsxs)("div", {
                  className: C().lineText,
                  children: [
                    (0, t.jsxs)("span", { children: [eM.name, " plan"] }),
                    (0, t.jsxs)("small", {
                      children: [
                        Q,
                        " ",
                        1 === Q ? "seat" : "seats",
                        " \xD7 ",
                        eH(eM.seat * (1 - ("yearly" === ee ? H : 0))),
                        " \xD7 ",
                        e$,
                        " ",
                        1 === e$ ? "month" : "months"
                      ]
                    })
                  ]
                }),
                (0, t.jsx)(L, { value: eH(eL), className: C().amount })
              ]
            }),
            (0, t.jsx)(r.N, {
              initial: false,
              children: ez.map(
                (e3) => (0, t.jsx)(
                  n.PY1.li,
                  {
                    className: C().lineOuter,
                    ...M,
                    transition: eV,
                    children: (0, t.jsxs)("div", {
                      className: C().line,
                      children: [
                        (0, t.jsxs)("div", {
                          className: C().lineText,
                          children: [
                            (0, t.jsx)("span", { children: e3.name }),
                            (0, t.jsx)("small", {
                              children: "yearly" === ee ? "Billed yearly" : "Billed monthly"
                            })
                          ]
                        }),
                        (0, t.jsx)(L, {
                          value: eH(e3.amount),
                          className: C().amount
                        })
                      ]
                    })
                  },
                  e3.id
                )
              )
            })
          ]
        }),
        (0, t.jsx)(r.N, {
          initial: false,
          children: eW ? null : (0, t.jsx)(
            O,
            {
              instant: true,
              children: (0, t.jsxs)("div", {
                className: C().coupon,
                children: [
                  (0, t.jsx)("div", {
                    className: C().couponSlot,
                    children: (0, t.jsx)(r.N, {
                      initial: false,
                      mode: "popLayout",
                      children: es ? (0, t.jsxs)(
                        n.PY1.div,
                        {
                          className: C().couponChip,
                          initial: {
                            opacity: 0,
                            scale: 0.92,
                            filter: "blur(4px)"
                          },
                          animate: {
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)"
                          },
                          exit: {
                            opacity: 0,
                            scale: 0.92,
                            filter: "blur(4px)"
                          },
                          transition: j.T.spring.morph,
                          children: [
                            (0, t.jsx)("span", {
                              className: C().couponCode,
                              children: es.code
                            }),
                            (0, t.jsxs)("span", {
                              className: C().couponOff,
                              children: [es.percent, "% off"]
                            }),
                            (0, t.jsx)("button", {
                              type: "button",
                              className: C().chipRemove,
                              "aria-label": `Remove ${es.code}`,
                              onClick: () => el(null),
                              children: (0, t.jsx)(u.A, { size: 13 })
                            })
                          ]
                        },
                        "chip"
                      ) : en ? (0, t.jsxs)(
                        n.PY1.form,
                        {
                          className: C().couponForm,
                          onSubmit: eG,
                          initial: { opacity: 0, y: -4 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0 },
                          transition: j.T.spring.snappy,
                          children: [
                            (0, t.jsx)("input", {
                              ref: Z,
                              className: B(
                                C().input,
                                C().couponInput
                              ),
                              value: ec,
                              placeholder: "Code",
                              "aria-label": "Coupon code",
                              "aria-invalid": !!ed || void 0,
                              "aria-describedby": ed ? `${I}-coupon-error` : void 0,
                              onChange: (e3) => {
                                eo(e3.target.value.toUpperCase()), eu("");
                              },
                              onKeyDown: (e3) => {
                                "Escape" === e3.key && (er(false), eu(""));
                              }
                            }),
                            (0, t.jsx)("button", {
                              type: "submit",
                              className: C().secondary,
                              disabled: !ec.trim() || eh,
                              children: eh ? (0, t.jsx)(p.A, {
                                size: 15,
                                className: C().spin,
                                "aria-label": "Checking"
                              }) : "Apply"
                            })
                          ]
                        },
                        "form"
                      ) : (0, t.jsxs)(
                        n.PY1.button,
                        {
                          type: "button",
                          className: C().textButton,
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: { opacity: 0 },
                          transition: {
                            duration: j.T.duration.fast,
                            ease: j.T.ease.standard
                          },
                          onClick: () => {
                            er(true), requestAnimationFrame(
                              () => Z.current?.focus()
                            );
                          },
                          children: [
                            (0, t.jsx)(h.A, { size: 14 }),
                            " Add coupon"
                          ]
                        },
                        "add"
                      )
                    })
                  }),
                  (0, t.jsx)(r.N, {
                    initial: false,
                    children: ed ? (0, t.jsx)(
                      O,
                      {
                        children: (0, t.jsx)("p", {
                          id: `${I}-coupon-error`,
                          className: C().error,
                          children: ed
                        })
                      },
                      ed
                    ) : null
                  })
                ]
              })
            },
            "coupon"
          )
        }),
        (0, t.jsxs)("dl", {
          className: C().totals,
          children: [
            (0, t.jsxs)("div", {
              className: C().totalRow,
              children: [
                (0, t.jsx)("dt", { children: "Subtotal" }),
                (0, t.jsx)("dd", {
                  children: (0, t.jsx)(L, { value: eH(eO) })
                })
              ]
            }),
            (0, t.jsx)(r.N, {
              initial: false,
              children: es ? (0, t.jsx)(
                n.PY1.div,
                {
                  className: C().lineOuter,
                  ...M,
                  transition: eV,
                  children: (0, t.jsxs)("div", {
                    className: C().totalRow,
                    children: [
                      (0, t.jsxs)("dt", {
                        children: [
                          "Discount ",
                          (0, t.jsx)("span", {
                            className: C().muted,
                            children: es.code
                          })
                        ]
                      }),
                      (0, t.jsxs)("dd", {
                        className: C().discount,
                        children: ["\u2212", (0, t.jsx)(L, { value: eH(eR) })]
                      })
                    ]
                  })
                },
                "discount"
              ) : null
            }),
            (0, t.jsxs)("div", {
              className: C().totalRow,
              children: [
                (0, t.jsx)("dt", { children: eP.rate ? eP.taxLabel : "Tax" }),
                (0, t.jsx)("dd", {
                  children: eP.rate ? (0, t.jsx)(L, { value: eH(eY) }) : (0, t.jsx)("span", {
                    className: C().muted,
                    children: "Not charged"
                  })
                })
              ]
            }),
            (0, t.jsxs)("div", {
              className: B(C().totalRow, C().grand),
              children: [
                (0, t.jsx)("dt", {
                  children: eW ? "Paid today" : "Due today"
                }),
                (0, t.jsx)("dd", {
                  children: (0, t.jsx)(L, { value: eH(eE) })
                })
              ]
            })
          ]
        }),
        (0, t.jsx)(r.N, {
          initial: false,
          children: eW && ef ? (0, t.jsxs)(
            n.PY1.div,
            {
              initial: q ? { opacity: 0 } : { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, transition: { duration: 0 } },
              transition: q ? { duration: 0 } : {
                ...j.T.spring.smooth,
                opacity: {
                  duration: j.T.duration.standard,
                  ease: j.T.ease.standard
                },
                delay: 0.16
              },
              children: [
                (0, t.jsxs)("dl", {
                  className: C().meta,
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("dt", { children: "Order" }),
                        (0, t.jsx)("dd", { children: ef.number })
                      ]
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("dt", { children: "Paid with" }),
                        (0, t.jsx)("dd", {
                          children: "card" === eb ? `${ef.brand} ending ${ef.last4}` : eb
                        })
                      ]
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("dt", { children: "Date" }),
                        (0, t.jsx)("dd", { children: ef.date })
                      ]
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("dt", {
                          children: "Receipt sent to"
                        }),
                        (0, t.jsx)("dd", { children: em.email })
                      ]
                    })
                  ]
                }),
                (0, t.jsxs)("div", {
                  className: C().receiptActions,
                  children: [
                    (0, t.jsxs)("button", {
                      type: "button",
                      className: B(C().secondary, C().stack),
                      onClick: () => eC(true),
                      "aria-live": "polite",
                      children: [
                        (0, t.jsxs)("span", {
                          className: C().sizer,
                          "aria-hidden": "true",
                          children: [
                            (0, t.jsx)(m.A, { size: 15 }),
                            " Receipt PDF"
                          ]
                        }),
                        (0, t.jsx)(r.N, {
                          initial: false,
                          mode: "popLayout",
                          children: (0, t.jsx)(
                            n.PY1.span,
                            {
                              className: C().buttonLabel,
                              initial: {
                                opacity: 0,
                                y: 6,
                                filter: "blur(3px)"
                              },
                              animate: {
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)"
                              },
                              exit: {
                                opacity: 0,
                                y: -6,
                                filter: "blur(3px)"
                              },
                              transition: j.T.spring.snappy,
                              children: eT ? (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)(d.A, { size: 15 }),
                                  " Saved"
                                ]
                              }) : (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)(m.A, { size: 15 }),
                                  " Receipt PDF"
                                ]
                              })
                            },
                            eT ? "done" : "idle"
                          )
                        })
                      ]
                    }),
                    (0, t.jsxs)("button", {
                      type: "button",
                      className: C().ghost,
                      onClick: () => {
                        ej("edit"), eA(null), eC(false), ey({}), el(null), eN(""), ex((e3) => ({
                          ...e3,
                          card: "",
                          expiry: "",
                          cvc: ""
                        }));
                      },
                      children: [
                        (0, t.jsx)(x.A, { size: 15 }),
                        " Start over"
                      ]
                    })
                  ]
                })
              ]
            },
            "receipt"
          ) : null
        })
      ]
    });
    return (0, t.jsx)(c.x, {
      reducedMotion: "user",
      children: (0, t.jsx)("div", {
        className: B(C().frame, W),
        children: (0, t.jsx)(o.o, {
          id: I,
          children: (0, t.jsxs)("div", {
            className: C().shell,
            "data-paid": eW || void 0,
            children: [
              (0, t.jsx)(r.N, {
                initial: false,
                mode: "popLayout",
                children: eW ? null : (0, t.jsxs)(
                  n.PY1.form,
                  {
                    className: C().form,
                    onSubmit: (e3) => {
                      if (e3.preventDefault(), eI) return;
                      ey(Object.fromEntries(S.map((e4) => [e4, true])));
                      let a3 = S.find((e4) => eU[e4]);
                      a3 ? V.current[a3]?.focus() : eq("card");
                    },
                    noValidate: true,
                    exit: q ? { opacity: 0, transition: { duration: 0 } } : {
                      opacity: 0,
                      x: -24,
                      transition: {
                        duration: j.T.duration.standard,
                        ease: j.T.ease.exit
                      }
                    },
                    "aria-label": "Checkout",
                    children: [
                      (0, t.jsxs)("section", {
                        className: C().section,
                        "aria-labelledby": `${I}-express`,
                        children: [
                          (0, t.jsx)("h2", {
                            id: `${I}-express`,
                            className: C().srOnly,
                            children: "Express checkout"
                          }),
                          (0, t.jsx)("div", {
                            className: C().express,
                            children: w.map(
                              (e3) => (0, t.jsx)(
                                "button",
                                {
                                  type: "button",
                                  className: C().expressButton,
                                  "data-brand": "Apple Pay" === e3 ? "apple" : "Google Pay" === e3 ? "google" : "paypal",
                                  "aria-label": `Pay with ${e3}`,
                                  disabled: eI,
                                  onClick: () => void eq(e3),
                                  children: eI && eb === e3 ? (0, t.jsx)(p.A, {
                                    size: 16,
                                    className: C().spin,
                                    "aria-label": `Paying with ${e3}`
                                  }) : (0, t.jsx)(z, { name: e3 })
                                },
                                e3
                              )
                            )
                          }),
                          (0, t.jsx)("p", {
                            className: C().or,
                            children: (0, t.jsx)("span", {
                              children: "Or pay with card"
                            })
                          })
                        ]
                      }),
                      (0, t.jsxs)("section", {
                        className: C().section,
                        "aria-labelledby": `${I}-plan-title`,
                        children: [
                          (0, t.jsxs)("div", {
                            className: C().sectionHead,
                            children: [
                              (0, t.jsx)("h2", {
                                id: `${I}-plan-title`,
                                children: "Plan"
                              }),
                              (0, t.jsx)("div", {
                                className: C().billing,
                                role: "radiogroup",
                                "aria-label": "Billing period",
                                children: ["monthly", "yearly"].map(
                                  (e3) => (0, t.jsxs)(
                                    "button",
                                    {
                                      type: "button",
                                      role: "radio",
                                      "aria-checked": ee === e3,
                                      className: C().billingOption,
                                      disabled: eI,
                                      onClick: () => ea(e3),
                                      children: [
                                        ee === e3 ? (0, t.jsx)(n.PY1.span, {
                                          layoutId: `${I}-billing`,
                                          className: C().billingPill,
                                          transition: j.T.spring.morph
                                        }) : null,
                                        (0, t.jsx)("span", {
                                          className: C().billingLabel,
                                          children: "monthly" === e3 ? "Monthly" : (0, t.jsxs)(t.Fragment, {
                                            children: [
                                              "Yearly ",
                                              (0, t.jsxs)("span", {
                                                className: C().save,
                                                children: [
                                                  "\u2212",
                                                  Math.round(100 * H),
                                                  "%"
                                                ]
                                              })
                                            ]
                                          })
                                        })
                                      ]
                                    },
                                    e3
                                  )
                                )
                              })
                            ]
                          }),
                          (0, t.jsx)("div", {
                            className: C().plans,
                            role: "radiogroup",
                            "aria-label": "Plan",
                            children: e2.map((a3, i3) => {
                              let s2 = a3.id === K;
                              return (0, t.jsxs)(
                                "button",
                                {
                                  id: `${I}-plan-${a3.id}`,
                                  type: "button",
                                  role: "radio",
                                  "aria-checked": s2,
                                  tabIndex: s2 ? 0 : -1,
                                  className: C().plan,
                                  disabled: eI,
                                  onClick: () => J(a3.id),
                                  onKeyDown: (a4) => ((a5, i4) => {
                                    let t2 = "ArrowRight" === a5.key || "ArrowDown" === a5.key ? 1 : "ArrowLeft" === a5.key || "ArrowUp" === a5.key ? -1 : 0;
                                    if (!t2) return;
                                    a5.preventDefault();
                                    let s3 = e2[(i4 + t2 + e2.length) % e2.length];
                                    J(s3.id), document.getElementById(
                                      `${I}-plan-${s3.id}`
                                    )?.focus();
                                  })(a4, i3),
                                  children: [
                                    s2 ? (0, t.jsx)(n.PY1.span, {
                                      layoutId: `${I}-plan`,
                                      className: C().planRing,
                                      transition: j.T.spring.morph
                                    }) : null,
                                    (0, t.jsx)("span", {
                                      className: C().planName,
                                      children: a3.name
                                    }),
                                    (0, t.jsxs)("span", {
                                      className: C().planPrice,
                                      children: [
                                        (0, t.jsx)(L, {
                                          value: eH(
                                            a3.seat * ("yearly" === ee ? 1 - H : 1)
                                          )
                                        }),
                                        (0, t.jsx)("small", {
                                          children: "per seat / mo"
                                        })
                                      ]
                                    }),
                                    (0, t.jsx)("span", {
                                      className: C().planBlurb,
                                      children: a3.blurb
                                    })
                                  ]
                                },
                                a3.id
                              );
                            })
                          }),
                          (0, t.jsxs)("div", {
                            className: C().seats,
                            children: [
                              (0, t.jsx)("label", {
                                htmlFor: `${I}-seats`,
                                children: "Seats"
                              }),
                              (0, t.jsxs)("div", {
                                className: C().stepper,
                                children: [
                                  (0, t.jsx)("button", {
                                    type: "button",
                                    "aria-label": "Remove a seat",
                                    disabled: eI || Q <= 1,
                                    onClick: () => X((e3) => Math.max(1, e3 - 1)),
                                    children: (0, t.jsx)(_.A, { size: 15 })
                                  }),
                                  (0, t.jsx)("input", {
                                    id: `${I}-seats`,
                                    inputMode: "numeric",
                                    value: Q,
                                    disabled: eI,
                                    onChange: (e3) => {
                                      X(
                                        Math.min(
                                          500,
                                          Math.max(
                                            1,
                                            Number(
                                              e3.target.value.replace(
                                                /\D/g,
                                                ""
                                              )
                                            ) || 1
                                          )
                                        )
                                      );
                                    }
                                  }),
                                  (0, t.jsx)("button", {
                                    type: "button",
                                    "aria-label": "Add a seat",
                                    disabled: eI || Q >= 500,
                                    onClick: () => X((e3) => Math.min(500, e3 + 1)),
                                    children: (0, t.jsx)(h.A, { size: 15 })
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      (0, t.jsxs)("section", {
                        className: C().section,
                        "aria-labelledby": `${I}-addons`,
                        children: [
                          (0, t.jsx)("div", {
                            className: C().sectionHead,
                            children: (0, t.jsx)("h2", {
                              id: `${I}-addons`,
                              children: "Add-ons"
                            })
                          }),
                          (0, t.jsx)("ul", {
                            className: C().addons,
                            children: a2.map((e3) => {
                              let a3 = ei.includes(e3.id);
                              return (0, t.jsx)(
                                "li",
                                {
                                  children: (0, t.jsxs)("label", {
                                    className: C().addon,
                                    "data-on": a3 || void 0,
                                    children: [
                                      (0, t.jsx)("input", {
                                        type: "checkbox",
                                        className: C().srOnly,
                                        checked: a3,
                                        disabled: eI,
                                        onChange: () => et(
                                          (i3) => a3 ? i3.filter((a4) => a4 !== e3.id) : [...i3, e3.id]
                                        )
                                      }),
                                      (0, t.jsx)("span", {
                                        className: C().check,
                                        "aria-hidden": "true",
                                        children: (0, t.jsx)(n.PY1.svg, {
                                          viewBox: "0 0 16 16",
                                          width: "12",
                                          height: "12",
                                          children: (0, t.jsx)(n.PY1.path, {
                                            d: "M3.5 8.5l3 3 6-7",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            initial: false,
                                            animate: {
                                              pathLength: +!!a3,
                                              opacity: +!!a3
                                            },
                                            transition: j.T.spring.snappy
                                          })
                                        })
                                      }),
                                      (0, t.jsxs)("span", {
                                        className: C().addonText,
                                        children: [
                                          (0, t.jsx)("span", {
                                            children: e3.name
                                          }),
                                          (0, t.jsx)("small", {
                                            children: e3.detail
                                          })
                                        ]
                                      }),
                                      (0, t.jsxs)("span", {
                                        className: C().addonPrice,
                                        children: [
                                          eH(e3.monthly),
                                          (0, t.jsx)("small", {
                                            children: "/ mo"
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
                        ]
                      }),
                      (0, t.jsxs)("section", {
                        className: C().section,
                        "aria-labelledby": `${I}-billing-details`,
                        children: [
                          (0, t.jsx)("div", {
                            className: C().sectionHead,
                            children: (0, t.jsx)("h2", {
                              id: `${I}-billing-details`,
                              children: "Billing details"
                            })
                          }),
                          (0, t.jsxs)("div", {
                            className: C().grid,
                            children: [
                              (0, t.jsx)("div", {
                                className: C().span2,
                                children: eK("email", "Email", {
                                  type: "email",
                                  autoComplete: "email"
                                })
                              }),
                              (0, t.jsx)("div", {
                                className: C().span2,
                                children: eK("name", "Name on card", {
                                  autoComplete: "cc-name"
                                })
                              }),
                              (0, t.jsx)("div", {
                                className: B(C().country, C().span2),
                                children: (0, t.jsx)(b.l, {
                                  id: `${I}-country`,
                                  label: "Country",
                                  className: C().countrySelect,
                                  value: em.country,
                                  disabled: eI,
                                  options: i2.map((e3) => ({
                                    value: e3.code,
                                    label: e3.name
                                  })),
                                  onValueChange: (e3) => eZ("country", e3)
                                })
                              }),
                              (0, t.jsx)("div", {
                                className: C().span2,
                                children: eK("address", "Address", {
                                  autoComplete: "street-address"
                                })
                              }),
                              (0, t.jsx)("div", {
                                children: eK("city", "City", {
                                  autoComplete: "address-level2"
                                })
                              }),
                              (0, t.jsx)("div", {
                                children: eK("postal", "Postal code", {
                                  autoComplete: "postal-code"
                                })
                              })
                            ]
                          })
                        ]
                      }),
                      (0, t.jsxs)("section", {
                        className: C().section,
                        "aria-labelledby": `${I}-card-title`,
                        children: [
                          (0, t.jsxs)("div", {
                            className: C().sectionHead,
                            children: [
                              (0, t.jsx)("h2", {
                                id: `${I}-card-title`,
                                children: "Card"
                              }),
                              (0, t.jsx)("button", {
                                type: "button",
                                className: C().textButton,
                                disabled: eI,
                                onClick: () => {
                                  ex((e3) => ({
                                    ...e3,
                                    card: "4242 4242 4242 4242",
                                    expiry: "08/29",
                                    cvc: "314"
                                  })), ey((e3) => ({
                                    ...e3,
                                    card: true,
                                    expiry: true,
                                    cvc: true
                                  })), eN("");
                                },
                                children: "Use test card"
                              })
                            ]
                          }),
                          (0, t.jsxs)("div", {
                            className: C().grid3,
                            children: [
                              (0, t.jsx)("div", {
                                className: C().span3,
                                children: eK(
                                  "card",
                                  "Card number",
                                  {
                                    inputMode: "numeric",
                                    autoComplete: "cc-number",
                                    placeholder: "1234 1234 1234 1234",
                                    onChange: (e3) => {
                                      let a3;
                                      return eZ(
                                        "card",
                                        (a3 = e3.target.value.replace(/\D/g, "").slice(0, 16), /^3[47]/.test(a3) ? [
                                          a3.slice(0, 4),
                                          a3.slice(4, 10),
                                          a3.slice(10, 15)
                                        ].filter(Boolean).join(" ") : a3.replace(
                                          /(\d{4})(?=\d)/g,
                                          "$1 "
                                        ))
                                      );
                                    }
                                  },
                                  (0, t.jsx)(r.N, {
                                    initial: false,
                                    mode: "popLayout",
                                    children: eF ? (0, t.jsx)(
                                      n.PY1.span,
                                      {
                                        className: C().brand,
                                        initial: { opacity: 0, y: 4 },
                                        animate: { opacity: 1, y: 0 },
                                        exit: { opacity: 0, y: -4 },
                                        transition: j.T.spring.snappy,
                                        children: eF
                                      },
                                      eF
                                    ) : null
                                  })
                                )
                              }),
                              (0, t.jsx)("div", {
                                children: eK("expiry", "Expiry", {
                                  inputMode: "numeric",
                                  autoComplete: "cc-exp",
                                  placeholder: "MM/YY",
                                  onChange: (e3) => {
                                    var a3, i3;
                                    let t2;
                                    return eZ(
                                      "expiry",
                                      (a3 = e3.target.value, i3 = em.expiry, t2 = a3.replace(/\D/g, "").slice(0, 4), a3.length < i3.length && i3.endsWith("/") ? t2.slice(0, 1) : 1 === t2.length && Number(t2) > 1 ? `0${t2}/` : t2.length >= 2 ? `${t2.slice(0, 2)}/${t2.slice(2)}` : t2)
                                    );
                                  }
                                })
                              }),
                              (0, t.jsx)("div", {
                                children: eK("cvc", "CVC", {
                                  inputMode: "numeric",
                                  autoComplete: "cc-csc",
                                  placeholder: "Amex" === eF ? "1234" : "123",
                                  onChange: (e3) => eZ(
                                    "cvc",
                                    e3.target.value.replace(/\D/g, "").slice(0, 4)
                                  )
                                })
                              })
                            ]
                          })
                        ]
                      }),
                      (0, t.jsxs)("div", {
                        className: C().payArea,
                        children: [
                          (0, t.jsx)(r.N, {
                            initial: false,
                            children: eg ? (0, t.jsx)(
                              O,
                              {
                                children: (0, t.jsx)("p", {
                                  className: C().payError,
                                  role: "alert",
                                  children: eg
                                })
                              },
                              eg
                            ) : null
                          }),
                          (0, t.jsx)("button", {
                            type: "submit",
                            className: C().pay,
                            disabled: eI,
                            "aria-live": "polite",
                            children: (0, t.jsx)(r.N, {
                              initial: false,
                              mode: "popLayout",
                              children: (0, t.jsx)(
                                n.PY1.span,
                                {
                                  className: C().buttonLabel,
                                  initial: {
                                    opacity: 0,
                                    y: 8,
                                    filter: "blur(4px)"
                                  },
                                  animate: {
                                    opacity: 1,
                                    y: 0,
                                    filter: "blur(0px)"
                                  },
                                  exit: {
                                    opacity: 0,
                                    y: -8,
                                    filter: "blur(4px)"
                                  },
                                  transition: j.T.spring.snappy,
                                  children: eI && "card" === eb ? (0, t.jsxs)(t.Fragment, {
                                    children: [
                                      (0, t.jsx)(p.A, {
                                        size: 16,
                                        className: C().spin
                                      }),
                                      " Processing"
                                    ]
                                  }) : (0, t.jsxs)(t.Fragment, {
                                    children: [
                                      "Pay ",
                                      (0, t.jsx)(L, {
                                        value: eH(eE)
                                      })
                                    ]
                                  })
                                },
                                eI && "card" === eb ? "busy" : "idle"
                              )
                            })
                          }),
                          (0, t.jsxs)("p", {
                            className: C().secure,
                            children: [
                              (0, t.jsx)(y.A, {
                                size: 13,
                                "aria-hidden": "true"
                              }),
                              " Simulated payment. No card is charged."
                            ]
                          })
                        ]
                      })
                    ]
                  },
                  "form"
                )
              }),
              (0, t.jsxs)(n.PY1.aside, {
                layout: "position",
                className: C().summary,
                "data-paid": eW || void 0,
                "data-frame-keep": "",
                transition: eV,
                "aria-labelledby": `${I}-summary-title`,
                children: [
                  (0, t.jsx)("div", {
                    className: C().summaryHead,
                    children: (0, t.jsx)(r.N, {
                      initial: false,
                      mode: "popLayout",
                      children: eW ? (0, t.jsxs)(
                        n.PY1.div,
                        {
                          className: C().paidHead,
                          initial: q ? { opacity: 0 } : { opacity: 0, y: 8 },
                          animate: { opacity: 1, y: 0 },
                          transition: q ? { duration: 0 } : {
                            ...j.T.spring.smooth,
                            opacity: {
                              duration: j.T.duration.standard,
                              ease: j.T.ease.standard
                            },
                            delay: 0.06
                          },
                          children: [
                            (0, t.jsx)("span", {
                              className: C().paidMark,
                              "aria-hidden": "true",
                              children: (0, t.jsx)("svg", {
                                viewBox: "0 0 24 24",
                                width: "22",
                                height: "22",
                                children: (0, t.jsx)(n.PY1.path, {
                                  d: "M5 12.5l4.5 4.5L19 7.5",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  initial: { pathLength: 0 },
                                  animate: { pathLength: 1 },
                                  transition: q ? { duration: 0 } : {
                                    duration: j.T.duration.considered,
                                    delay: 0.3,
                                    ease: j.T.ease.enter
                                  }
                                })
                              })
                            }),
                            (0, t.jsx)("h2", {
                              id: `${I}-summary-title`,
                              ref: G,
                              tabIndex: -1,
                              className: C().summaryTitle,
                              children: "Payment successful"
                            }),
                            (0, t.jsxs)("p", {
                              className: C().summaryNote,
                              children: [
                                eM.name,
                                " is active for ",
                                Q,
                                " ",
                                1 === Q ? "seat" : "seats",
                                "."
                              ]
                            })
                          ]
                        },
                        "paid"
                      ) : (0, t.jsxs)(
                        n.PY1.div,
                        {
                          className: C().summaryHead,
                          exit: {
                            opacity: 0,
                            transition: {
                              duration: q ? 0 : j.T.duration.fast
                            }
                          },
                          children: [
                            (0, t.jsx)("h2", {
                              id: `${I}-summary-title`,
                              className: B(C().summaryTitle, C().wideOnly),
                              children: "Order summary"
                            }),
                            (0, t.jsxs)("button", {
                              type: "button",
                              className: B(
                                C().summaryToggle,
                                C().narrowOnly
                              ),
                              "aria-expanded": eS,
                              "aria-controls": `${I}-summary-body`,
                              onClick: () => ew((e3) => !e3),
                              children: [
                                (0, t.jsxs)("span", {
                                  className: C().summaryTitleSmall,
                                  children: [
                                    eS ? "Hide order summary" : "Show order summary",
                                    (0, t.jsx)(n.PY1.span, {
                                      initial: false,
                                      animate: { rotate: 180 * !!eS },
                                      transition: j.T.spring.snappy,
                                      className: C().chevron,
                                      children: (0, t.jsx)(v.A, {
                                        size: 15
                                      })
                                    })
                                  ]
                                }),
                                (0, t.jsx)(L, {
                                  value: eH(eE),
                                  className: C().toggleTotal
                                })
                              ]
                            })
                          ]
                        },
                        "edit"
                      )
                    })
                  }),
                  (0, t.jsx)("div", {
                    id: `${I}-summary-body`,
                    className: C().summaryBodyWrap,
                    "data-open": eS || void 0,
                    children: (0, t.jsx)("div", {
                      className: C().summaryBodyClip,
                      children: (0, t.jsx)("div", {
                        className: C().summaryBody,
                        children: eJ
                      })
                    })
                  })
                ]
              })
            ]
          })
        })
      })
    });
  }
  let Y = R;
}

__m(__module,__exports,__require);
}