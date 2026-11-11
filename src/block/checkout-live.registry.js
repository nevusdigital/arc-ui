/* checkout-live (pro block) */
(function(){var A=globalThis.__ARC__;
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
A.reg(9937, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { x: () => o });
  var n = i(95155), a = i(12115), r = i(30123), l = i(24866), s = i(28819);
  function o({ children: e2, ...t2 }) {
    let i2 = (0, a.useContext)(l.Q);
    (t2 = { ...i2, ...t2 }).transition = (0, r.K)(t2.transition, i2.transition), t2.isStatic = (0, s.M)(() => t2.isStatic);
    let u = (0, a.useMemo)(
      () => t2,
      [
        JSON.stringify(t2.transition),
        t2.transformPagePoint,
        t2.reducedMotion,
        t2.skipAnimations,
        t2.isValidProp
      ]
    );
    return (0, n.jsx)(l.Q.Provider, { value: u, children: e2 });
  }
}

__m(__module,__exports,__require);
});
A.reg(25037, function(__module,__exports,__require){
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
});
A.regCss(61140, ".frame{container-type:inline-size;width:100%;color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);line-height:var(--leading-body);font-size:var(--text-sm)}\n.frame dd,.frame dl,.frame h2,.frame p,.frame ul{margin:0}\n.frame ul{padding:0;list-style:none}\n.frame button{font:inherit;letter-spacing:inherit;-webkit-tap-highlight-color:transparent}\n.frame :focus,.frame :focus-visible{outline:none}\n.shell{position:relative;display:grid;grid-template-columns:minmax(0,1fr) minmax(300px,380px);gap:var(--space-8);align-items:start;max-width:1040px;margin-inline:auto}\n.shell[data-paid]{grid-template-columns:minmax(0,380px);justify-content:center}\n@container (max-width: 759.98px){.shell{gap:var(--space-5)}\n.shell,.shell[data-paid]{grid-template-columns:minmax(0,1fr)}\n.collapse{overflow:hidden}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.muted{color:var(--text-muted)}\n.form{display:grid;gap:var(--space-8);min-width:0}\n.section{display:grid;gap:var(--space-4);min-width:0}\n.sectionHead{display:flex;align-items:center;justify-content:space-between;gap:var(--space-3);min-height:32px}\n.sectionHead h2{font-size:var(--text-base);font-weight:500}\n.express{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--space-2)}\n.express,.grid{grid-template-columns:minmax(0,1fr)}\n.expressButton{display:grid;place-items:center;height:var(--control-height-md);padding:0 var(--space-3);border:1px solid transparent;border-radius:var(--radius-control);font-weight:500;white-space:nowrap;cursor:pointer;transition:filter var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.expressButton:active:not(:disabled){transform:scale(.97)}\n.expressButton:disabled{cursor:default;opacity:.6}\n.expressButton svg{display:block}\n.expressButton[data-brand=apple]{background:#000;color:#fff}\n.expressButton[data-brand=google]{border-color:#747775;background:#000;color:#fff}\n.expressButton[data-brand=paypal]{background:#ffc439;color:#003087}\n:root[data-theme=dark] .expressButton[data-brand=apple]{background:#fff;color:#000}\n@media (prefers-color-scheme:dark){:root:not([data-theme=light]) .expressButton[data-brand=apple]{background:#fff;color:#000}\n@media (hover:hover) and (pointer:fine){.expressButton:hover:not(:disabled){filter:brightness(1.08)}\n.expressButton[data-brand=paypal]:hover:not(:disabled){filter:brightness(.97)}\n.walletMark{display:inline-flex;align-items:center;gap:5px;font-size:17px;font-weight:500;letter-spacing:-.01em}\n.paypalMark{font-size:17px;font-style:italic;font-weight:700;letter-spacing:-.02em}\n.paypalMark span:last-child{color:#0070e0}\n.or{display:flex;align-items:center;gap:var(--space-3);color:var(--text-muted);font-size:var(--text-xs)}\n.or:after,.or:before{content:\"\";flex:1;height:1px;background:var(--border)}\n.billing{position:relative;display:inline-flex;padding:3px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface-muted)}\n.billingOption{position:relative;height:28px;padding:0 var(--space-3);border:0;border-radius:var(--radius-pill);background:none;color:var(--text-secondary);font-size:var(--text-xs);font-weight:500;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}\n.billingOption[aria-checked=true]{color:var(--accent-strong)}\n.billingOption:hover,.ghost:hover,.textButton:hover:not(:disabled){color:var(--foreground)}\n.billingPill{position:absolute;inset:0;border-radius:var(--radius-pill);background:var(--surface-raised);box-shadow:var(--shadow-resting),0 0 0 1px var(--border)}\n.billingLabel{position:relative;display:inline-flex;gap:4px;align-items:center}\n.save{color:var(--success)}\n.plans{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--space-2)}\n@container (max-width: 520px){.plans{grid-template-columns:minmax(0,1fr)}\n.plan{position:relative;display:grid;gap:6px;align-content:start;min-width:0;padding:var(--space-4);border:1px solid var(--border);border-radius:22px;background:var(--surface);color:var(--foreground);text-align:left;cursor:pointer;transition:border-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.plan:active:not(:disabled){transform:scale(.985)}\n.plan>span:not(.planRing){position:relative}\n.plan:hover:not([aria-checked=true]){border-color:var(--border-strong)}\n.plan{grid-template-columns:minmax(0,1fr) auto}\n.planRing{position:absolute;inset:-1px;border:1.5px solid var(--accent);border-radius:22px;background:color-mix(in oklab,var(--accent) 6%,transparent);pointer-events:none}\n.planName{font-weight:500}\n.planPrice{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px;font-size:var(--text-lg);font-weight:500}\n.planPrice small{color:var(--text-muted);font-size:var(--text-xs);font-weight:400}\n.planPrice{grid-row:1/span 2;grid-column:2;align-self:center;justify-content:flex-end}\n.planBlurb{color:var(--text-secondary);font-size:var(--text-xs)}\n.planBlurb{grid-column:1}\n.seats{display:flex;align-items:center;justify-content:space-between;gap:var(--space-3);padding:var(--space-3) var(--space-4);border:1px solid var(--border);border-radius:22px}\n.seats label{font-weight:500}\n.seats{transition:border-color var(--duration-fast) var(--ease-standard)}\n.stepper{display:inline-flex;align-items:center;height:var(--control-height-sm);padding:2px;border:1px solid var(--border);border-radius:var(--radius-pill)}\n.stepper button{display:grid;width:30px;height:30px;place-items:center;padding:0;border:0;border-radius:var(--radius-pill);background:none;color:var(--text-secondary);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.stepper button:active:not(:disabled){transform:scale(.88)}\n.stepper button:disabled{opacity:.35;cursor:default}\n.stepper input{width:44px;border:0;background:none;color:var(--foreground);font:inherit;font-weight:500;font-variant-numeric:tabular-nums;text-align:center}\n.chipRemove:hover,.stepper button:hover:not(:disabled){background:var(--surface-muted);color:var(--foreground)}\n.addons{display:grid;border:1px solid var(--border);border-radius:22px;overflow:hidden}\n.addons li+li{border-top:1px solid var(--border-subtle)}\n.addon{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:var(--space-3);padding:var(--space-3) var(--space-4);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard)}\n.addon[data-on] .check{border-color:var(--control-on);background:var(--control-on);color:var(--control-glyph)}\n.addon[data-on] .addonPrice{color:var(--accent-strong)}\n.addon:hover{background:var(--surface-muted)}\n.check{display:grid;width:18px;height:18px;place-items:center;border:1px solid var(--border-strong);border-radius:6px;color:var(--accent-foreground);transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)}\n.addonPrice small,.addonText small{color:var(--text-muted);font-size:var(--text-xs)}\n.addonPrice{font-variant-numeric:tabular-nums;white-space:nowrap}\n.addonPrice small{margin-left:3px}\n.addonText{display:grid;min-width:0}\n.addonText span{font-weight:500}\n.grid3,.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--space-3)}\n.grid3{grid-template-columns:repeat(2,minmax(0,1fr))}\n.span2,.span3{grid-column:1/-1}\n.field{display:grid;gap:6px;min-width:0}\n.field[data-invalid] .input{border-color:color-mix(in oklab,var(--danger) 55%,var(--border));background:color-mix(in oklab,var(--danger) 4%,var(--surface))}\n.labelRow{display:flex;align-items:center;justify-content:space-between;gap:var(--space-2);min-height:20px}\n.brand,.labelRow label{color:var(--text-secondary);font-weight:500}\n.brand{font-size:var(--text-xs)}\n.inputWrap{position:relative}\n.input{box-sizing:border-box;width:100%;height:var(--control-height-md);padding:0 38px 0 var(--space-4);border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);font-variant-numeric:tabular-nums;appearance:none;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.input::placeholder{color:var(--text-muted)}\n.input:focus{border-color:var(--border-strong)}\n.input:disabled{opacity:.6}\n.country>div{gap:6px}\n.country label{min-height:20px;color:var(--text-secondary);font-weight:500;line-height:20px}\n.country .countrySelect{height:var(--control-height-md);padding:0 14px 0 var(--space-4)}\n.country .countrySelect[data-disabled]{opacity:.6}\n.valid{position:absolute;top:50%;right:14px;display:grid;width:18px;height:18px;margin-top:-9px;place-items:center;border-radius:var(--radius-pill);color:var(--success)}\n.error{padding-top:2px;color:var(--danger);font-size:var(--text-xs)}\n.textButton{display:inline-flex;align-items:center;gap:6px;padding:4px 2px;border:0;background:none;color:var(--text-secondary);font-weight:500;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}\n.textButton:disabled{opacity:.5;cursor:default}\n.couponSlot>.textButton{justify-self:start}\n.payArea{display:grid;gap:var(--space-3)}\n.payError{padding:var(--space-3) var(--space-4);border-radius:16px;background:color-mix(in oklab,var(--danger) 8%,var(--surface));color:var(--danger)}\n.pay{position:relative;display:grid;place-items:center;height:var(--control-height-lg);overflow:hidden;border:0;border-radius:var(--radius-control);background:var(--accent);color:var(--accent-foreground);font-size:var(--text-base);font-weight:500;cursor:pointer;transition:transform var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.pay:active:not(:disabled){transform:scale(.985)}\n.pay:disabled{cursor:progress}\n.buttonLabel{display:inline-flex;align-items:center;justify-content:center;gap:8px;white-space:nowrap}\n.secure{display:flex;align-items:center;justify-content:center;gap:6px;color:var(--text-muted);font-size:var(--text-xs)}\n.spin{animation:spin .8s linear infinite}\n@media (prefers-reduced-motion:reduce){.spin{animation-duration:1.6s}\n.ghost,.secondary{display:inline-flex;align-items:center;justify-content:center;gap:6px;height:var(--control-height-sm);padding:0 var(--space-4);border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);color:var(--foreground);font-weight:500;white-space:nowrap;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.ghost:active,.secondary:active:not(:disabled){transform:scale(.97)}\n.secondary:disabled{opacity:.5;cursor:default}\n.secondary:hover:not(:disabled){background:var(--surface-muted)}\n.ghost{border-color:transparent;background:none;color:var(--text-secondary)}\n.summary{position:sticky;top:var(--space-6);display:grid;min-width:0;padding:var(--space-6);border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface-muted);transition:background-color var(--duration-standard) var(--ease-standard),box-shadow var(--duration-standard) var(--ease-standard)}\n.summary[data-paid]{background:var(--surface);box-shadow:var(--shadow-raised)}\n.summary[data-paid] .summaryBodyClip{overflow:visible}\n.summary[data-paid]{padding:var(--space-5);border-radius:var(--radius-panel)}\n.summary{order:-1;position:static}\n.summary:not([data-paid]){padding:var(--space-4) var(--space-5);border-radius:var(--radius-panel)}\n.summary:not([data-paid]) .summaryBodyWrap:not([data-open]){grid-template-rows:0fr;opacity:0;visibility:hidden;transition:grid-template-rows var(--duration-considered) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard),visibility 0s linear var(--duration-considered)}\n@media (prefers-reduced-motion:reduce){.summaryBodyWrap,.summary:not([data-paid]) .summaryBodyWrap:not([data-open]){transition:none}\n.summaryBodyClip{min-height:0;overflow:hidden}\n.summaryHead{display:grid}\n.summaryTitle{font-family:var(--font-display);font-size:var(--text-xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display)}\n.summaryNote{margin-top:4px;color:var(--text-secondary)}\n.summaryToggle{display:flex;align-items:center;justify-content:space-between;gap:var(--space-3);width:100%;padding:0;border:0;background:none;color:var(--foreground);cursor:pointer}\n.summaryTitleSmall{display:inline-flex;align-items:center;gap:6px;font-weight:500}\n.chevron{display:grid;color:var(--text-muted)}\n.toggleTotal{font-size:var(--text-base);font-weight:500}\n.summaryBody{display:grid;padding-top:var(--space-5)}\n.summaryBodyWrap{display:grid;grid-template-rows:1fr;transition:grid-template-rows var(--duration-considered) var(--ease-standard),opacity var(--duration-standard) var(--ease-standard),visibility 0s}\n.paidHead{display:grid;justify-items:start;gap:6px}\n.paidMark{display:grid;width:40px;height:40px;margin-bottom:var(--space-2);place-items:center;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--success) 12%,transparent);color:var(--success)}\n.lines{display:grid}\n.lineOuter{overflow:hidden}\n.line{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--space-4);padding:var(--space-3) 0;border-bottom:1px solid var(--border)}\n.lineText{display:grid;min-width:0}\n.lineText span{font-weight:500}\n.lineText small{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.amount{flex:none;font-weight:500}\n.coupon{display:grid;padding:var(--space-3) 0;border-bottom:1px solid var(--border)}\n.couponSlot{position:relative;display:grid;align-items:center;min-height:var(--control-height-sm)}\n.couponForm{display:flex;gap:var(--space-2)}\n.couponInput{height:var(--control-height-sm);padding-right:var(--space-3);letter-spacing:.02em}\n.couponChip{display:inline-flex;align-items:center;gap:var(--space-2);justify-self:start;height:30px;padding:0 4px 0 12px;border:1px solid color-mix(in oklab,var(--accent) 30%,transparent);border-radius:var(--radius-pill);background:var(--accent-subtle);color:var(--accent-strong)}\n.couponCode{font-weight:500;letter-spacing:.02em}\n.couponOff{color:var(--success);font-size:var(--text-xs);font-weight:500}\n.chipRemove{display:grid;width:22px;height:22px;place-items:center;padding:0;border:0;border-radius:var(--radius-pill);background:none;color:var(--accent-strong);cursor:pointer}\n.totals{display:grid;padding-top:var(--space-3)}\n.totalRow{display:flex;align-items:baseline;justify-content:space-between;gap:var(--space-3);padding:5px 0;color:var(--text-secondary)}\n.totalRow dd{color:var(--foreground);font-variant-numeric:tabular-nums}\n.discount{display:inline-flex;color:var(--success)!important}\n.grand{margin-top:var(--space-2);padding-top:var(--space-3);border-top:1px solid var(--border);color:var(--foreground);font-weight:500}\n.grand dd{font-family:var(--font-display);font-size:var(--text-2xl);letter-spacing:var(--tracking-display)}\n.meta{display:grid;gap:6px;margin-top:var(--space-4);padding-top:var(--space-4);border-top:1px dashed var(--border-strong)}\n.meta div{display:flex;justify-content:space-between;gap:var(--space-3)}\n.meta dt{color:var(--text-secondary)}\n.meta dd{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:right}\n.stack{position:relative;display:inline-grid;place-items:center}\n.stack>*{grid-area:1/1}\n.sizer{display:inline-flex;align-items:center;gap:8px;visibility:hidden}\n.receiptActions{display:flex;flex-wrap:wrap;gap:var(--space-2);padding-top:var(--space-5)}\n.roll{position:relative;display:inline-flex;font-variant-numeric:tabular-nums;white-space:nowrap}\n.rollTrack{display:inline-flex;align-items:flex-start}\n.rollDigit,.rollGlyph,.rollStrip>span{display:block;height:1.25em;line-height:1.25em}\n.rollGlyph{white-space:pre}\n.rollDigit{overflow:clip}\n.rollStrip{display:flex;flex-direction:column}\n.rollStrip>span{text-align:center}\n.wideOnly{display:none}\n@container (min-width: 760px){.narrowOnly{display:none}", {"frame":"frame","shell":"shell","collapse":"collapse","srOnly":"srOnly","muted":"muted","form":"form","section":"section","sectionHead":"sectionHead","express":"express","grid":"grid","expressButton":"expressButton","walletMark":"walletMark","paypalMark":"paypalMark","or":"or","billing":"billing","billingOption":"billingOption","ghost":"ghost","textButton":"textButton","billingPill":"billingPill","billingLabel":"billingLabel","save":"save","plans":"plans","plan":"plan","planRing":"planRing","planName":"planName","planPrice":"planPrice","planBlurb":"planBlurb","seats":"seats","stepper":"stepper","chipRemove":"chipRemove","addons":"addons","addon":"addon","check":"check","addonPrice":"addonPrice","addonText":"addonText","grid3":"grid3","span2":"span2","span3":"span3","field":"field","input":"input","labelRow":"labelRow","brand":"brand","inputWrap":"inputWrap","country":"country","countrySelect":"countrySelect","valid":"valid","error":"error","couponSlot":"couponSlot","payArea":"payArea","payError":"payError","pay":"pay","buttonLabel":"buttonLabel","secure":"secure","spin":"spin","secondary":"secondary","summary":"summary","summaryBodyClip":"summaryBodyClip","summaryBodyWrap":"summaryBodyWrap","summaryHead":"summaryHead","summaryTitle":"summaryTitle","summaryNote":"summaryNote","summaryToggle":"summaryToggle","summaryTitleSmall":"summaryTitleSmall","chevron":"chevron","toggleTotal":"toggleTotal","summaryBody":"summaryBody","paidHead":"paidHead","paidMark":"paidMark","lines":"lines","lineOuter":"lineOuter","line":"line","lineText":"lineText","amount":"amount","coupon":"coupon","couponForm":"couponForm","couponInput":"couponInput","couponChip":"couponChip","couponCode":"couponCode","couponOff":"couponOff","totals":"totals","totalRow":"totalRow","discount":"discount","grand":"grand","meta":"meta","stack":"stack","sizer":"sizer","receiptActions":"receiptActions","roll":"roll","rollTrack":"rollTrack","rollDigit":"rollDigit","rollGlyph":"rollGlyph","rollStrip":"rollStrip","wideOnly":"wideOnly","narrowOnly":"narrowOnly"});
A.reg(73051, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, {
    UC: () => J,
    In: () => q,
    q7: () => ev,
    VF: () => ew,
    p4: () => eg,
    ZL: () => Y,
    bL: () => G,
    wn: () => eb,
    PP: () => eS,
    l9: () => W,
    WT: () => z,
    LM: () => eu
  });
  var r = n(12115), o = n(47650);
  function l(e2, [t2, n2]) {
    return Math.min(n2, Math.max(t2, e2));
  }
  (0, Object.defineProperty)(l, "name", { value: "clamp", configurable: true });
  var i = n(70379), a = n(76094), s = n(47527), u = n(68599), c = n(1933), d = n(19416), p = n(32007), f = n(69885), h = n(89971), v = n(80878), m = n(19040), g = n(83935), w = n(55897), x = n(42442), S = n(17347), y = n(59322), b = n(66294);
  function C(e2) {
    let t2 = r.useRef({ value: e2, previous: e2 });
    return r.useMemo(
      () => (t2.current.value !== e2 && (t2.current.previous = t2.current.value, t2.current.value = e2), t2.current.previous),
      [e2]
    );
  }
  (0, Object.defineProperty)(C, "name", {
    value: "usePrevious",
    configurable: true
  });
  var j = n(40562), P = n(22954), T = n(5174), k = n(95155), I = Object.defineProperty, E = (e2, t2) => I(e2, "name", { value: t2, configurable: true }), R = [" ", "Enter", "ArrowUp", "ArrowDown"], M = [" ", "Enter"], D = "Select", [L, K, B] = (0, a.N)(D), [_, H] = (0, u.A)(D, [B, v.Bk]), N = (0, v.Bk)(), [A, O] = _(D), [V, F] = _(D);
  function U(e2) {
    let {
      __scopeSelect: t2,
      children: n2,
      open: o2,
      defaultOpen: l2,
      onOpenChange: i2,
      value: a2,
      defaultValue: s2,
      onValueChange: u2,
      dir: d2,
      name: p2,
      autoComplete: f2,
      disabled: m2,
      required: g2,
      form: w2,
      internal_do_not_use_render: x2
    } = e2, S2 = N(t2), [b2, C2] = r.useState(null), [j2, P2] = r.useState(null), [T2, I2] = r.useState(false), R2 = (0, c.jH)(d2), [M2, K2] = (0, y.i)({
      prop: o2,
      defaultProp: l2 ?? false,
      onChange: i2,
      caller: D
    }), [B2, _2] = (0, y.i)({ prop: a2, defaultProp: s2, onChange: u2, caller: D }), H2 = r.useRef(null), O2 = r.useRef(B2);
    r.useEffect(() => {
      let e3 = w2 ? b2?.ownerDocument.getElementById(w2) : b2?.form;
      if (e3 instanceof HTMLFormElement) {
        let t3 = E(() => _2(O2.current), "reset");
        return e3.addEventListener("reset", t3), () => e3.removeEventListener("reset", t3);
      }
    }, [w2, b2, _2]);
    let F2 = !b2 || !!w2 || !!b2.closest("form"), [U2, G2] = r.useState(/* @__PURE__ */ new Set()), W2 = (0, h.B)(), z2 = Array.from(U2).map((e3) => e3.props.value).join(";"), q2 = r.useCallback((e3) => {
      G2((t3) => new Set(t3).add(e3));
    }, []), Z2 = r.useCallback((e3) => {
      G2((t3) => {
        let n3 = new Set(t3);
        return n3.delete(e3), n3;
      });
    }, []), X2 = {
      required: g2,
      trigger: b2,
      onTriggerChange: C2,
      valueNode: j2,
      onValueNodeChange: P2,
      valueNodeHasChildren: T2,
      onValueNodeHasChildrenChange: I2,
      contentId: W2,
      value: B2,
      onValueChange: _2,
      open: M2,
      onOpenChange: K2,
      dir: R2,
      triggerPointerDownPosRef: H2,
      disabled: m2,
      name: p2,
      autoComplete: f2,
      form: w2,
      nativeOptions: U2,
      nativeSelectKey: z2,
      isFormControl: F2
    };
    return (0, k.jsx)(v.bL, {
      ...S2,
      children: (0, k.jsx)(A, {
        scope: t2,
        ...X2,
        children: (0, k.jsx)(L.Provider, {
          scope: t2,
          children: (0, k.jsx)(V, {
            scope: t2,
            onNativeOptionAdd: q2,
            onNativeOptionRemove: Z2,
            children: eP(x2) ? x2(X2) : n2
          })
        })
      })
    });
  }
  E(U, "SelectProvider");
  var G = E((e2) => {
    let { __scopeSelect: t2, children: n2, ...r2 } = e2;
    return (0, k.jsx)(U, {
      __scopeSelect: t2,
      ...r2,
      internal_do_not_use_render: ({ isFormControl: e3 }) => (0, k.jsxs)(k.Fragment, {
        children: [n2, e3 ? (0, k.jsx)(ej, { __scopeSelect: t2 }) : null]
      })
    });
  }, "Select"), W = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, disabled: o2 = false, ...l2 } = e2, a2 = N(n2), u2 = O("SelectTrigger", n2), c2 = u2.disabled || o2, d2 = (0, s.s)(t2, u2.onTriggerChange), p2 = K(n2), f2 = r.useRef("touch"), [h2, m2, g2] = ek((e3) => {
        let t3 = p2().filter((e4) => !e4.disabled), n3 = t3.find((e4) => e4.value === u2.value), r2 = eI(t3, e3, n3);
        void 0 !== r2 && u2.onValueChange(r2.value);
      }), x2 = E((e3) => {
        c2 || (u2.onOpenChange(true), g2()), e3 && (u2.triggerPointerDownPosRef.current = {
          x: Math.round(e3.pageX),
          y: Math.round(e3.pageY)
        });
      }, "handleOpen");
      return (0, k.jsx)(v.Mz, {
        asChild: true,
        ...a2,
        children: (0, k.jsx)(w.sG.button, {
          type: "button",
          role: "combobox",
          "aria-controls": u2.open ? u2.contentId : void 0,
          "aria-expanded": u2.open,
          "aria-required": u2.required,
          "aria-autocomplete": "none",
          dir: u2.dir,
          "data-state": u2.open ? "open" : "closed",
          disabled: c2,
          "data-disabled": c2 ? "" : void 0,
          "data-placeholder": eT(u2.value) ? "" : void 0,
          ...l2,
          ref: d2,
          onClick: (0, i.mK)(l2.onClick, (e3) => {
            e3.currentTarget.focus(), "mouse" !== f2.current && x2(e3);
          }),
          onPointerDown: (0, i.mK)(l2.onPointerDown, (e3) => {
            f2.current = e3.pointerType;
            let t3 = e3.target;
            t3.hasPointerCapture(e3.pointerId) && t3.releasePointerCapture(e3.pointerId), 0 === e3.button && false === e3.ctrlKey && "mouse" === e3.pointerType && (x2(e3), e3.preventDefault());
          }),
          onKeyDown: (0, i.mK)(l2.onKeyDown, (e3) => {
            let t3 = "" !== h2.current;
            e3.ctrlKey || e3.altKey || e3.metaKey || 1 !== e3.key.length || m2(e3.key), (!t3 || " " !== e3.key) && R.includes(e3.key) && (x2(), e3.preventDefault());
          })
        })
      });
    }, "SelectTrigger")
  ), z = r.forwardRef(
    E(function(e2, t2) {
      let {
        __scopeSelect: n2,
        className: o2,
        style: l2,
        children: i2,
        placeholder: a2 = "",
        ...u2
      } = e2, c2 = O("SelectValue", n2), { onValueNodeHasChildrenChange: d2 } = c2, p2 = void 0 !== i2, f2 = (0, s.s)(t2, c2.onValueNodeChange);
      (0, b.N)(() => {
        d2(p2);
      }, [d2, p2]);
      let h2 = eT(c2.value);
      return (0, k.jsx)(w.sG.span, {
        ...u2,
        asChild: !h2 && u2.asChild,
        ref: f2,
        style: { pointerEvents: "none" },
        children: (0, k.jsx)(
          r.Fragment,
          { children: h2 ? a2 : i2 },
          h2 ? "placeholder" : "value"
        )
      });
    }, "SelectValue")
  ), q = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, children: r2, ...o2 } = e2;
      return (0, k.jsx)(w.sG.span, {
        "aria-hidden": true,
        ...o2,
        ref: t2,
        children: r2 || "\u25BC"
      });
    }, "SelectIcon")
  ), [Z, X] = _("SelectPortal", { forceMount: void 0 }), Y = E((e2) => {
    let { __scopeSelect: t2, forceMount: n2, ...r2 } = e2;
    return (0, k.jsx)(Z, {
      scope: e2.__scopeSelect,
      forceMount: n2,
      children: (0, k.jsx)(m.Z, { asChild: true, ...r2 })
    });
  }, "SelectPortal"), Q = "SelectContent", J = r.forwardRef(
    E(function(e2, t2) {
      let n2 = X(Q, e2.__scopeSelect), { forceMount: o2 = n2.forceMount, ...l2 } = e2, i2 = O(Q, e2.__scopeSelect), [a2, s2] = r.useState();
      return (0, b.N)(() => {
        s2(new DocumentFragment());
      }, []), (0, k.jsx)(g.C, {
        present: o2 || i2.open,
        children: ({ present: e3 }) => e3 ? (0, k.jsx)(er, { ...l2, ref: t2 }) : (0, k.jsx)($, { ...l2, fragment: a2 })
      });
    }, "SelectContent")
  ), $ = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, children: r2, fragment: l2 } = e2;
      return l2 ? o.createPortal(
        (0, k.jsx)(ee, {
          scope: n2,
          children: (0, k.jsx)(L.Slot, {
            scope: n2,
            children: (0, k.jsx)("div", { ref: t2, children: r2 })
          })
        }),
        l2
      ) : null;
    }, "SelectContentFragment")
  ), [ee, et] = _(Q), en = (0, x.TL)("SelectContent.RemoveScroll"), er = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2 } = e2, {
        position: o2 = "item-aligned",
        onCloseAutoFocus: l2,
        onEscapeKeyDown: a2,
        onPointerDownOutside: u2,
        side: c2,
        sideOffset: h2,
        align: v2,
        alignOffset: m2,
        arrowPadding: g2,
        collisionBoundary: w2,
        collisionPadding: x2,
        sticky: S2,
        hideWhenDetached: y2,
        avoidCollisions: b2,
        ...C2
      } = e2, j2 = O(Q, n2), [I2, R2] = r.useState(null), [M2, D2] = r.useState(null), L2 = (0, s.s)(t2, R2), [B2, _2] = r.useState(null), [H2, N2] = r.useState(null), A2 = K(n2), [V2, F2] = r.useState(false), U2 = r.useRef(false);
      r.useEffect(() => {
        if (I2) return (0, P.Eq)(I2);
      }, [I2]), (0, p.Oh)();
      let G2 = r.useCallback(
        (e3) => {
          let [t3, ...n3] = A2().map((e4) => e4.ref.current), [r2] = n3.slice(-1), o3 = document.activeElement;
          for (let n4 of e3)
            if (n4 === o3 || (n4?.scrollIntoView({ block: "nearest" }), n4 === t3 && M2 && (M2.scrollTop = 0), n4 === r2 && M2 && (M2.scrollTop = M2.scrollHeight), n4?.focus(), document.activeElement !== o3))
              return;
        },
        [A2, M2]
      ), W2 = r.useCallback(() => G2([B2, I2]), [G2, B2, I2]);
      r.useEffect(() => {
        V2 && W2();
      }, [V2, W2]);
      let { onOpenChange: z2, triggerPointerDownPosRef: q2 } = j2;
      r.useEffect(() => {
        if (I2) {
          let e3 = { x: 0, y: 0 }, t3 = E((t4) => {
            e3 = {
              x: Math.abs(Math.round(t4.pageX) - (q2.current?.x ?? 0)),
              y: Math.abs(Math.round(t4.pageY) - (q2.current?.y ?? 0))
            };
          }, "handlePointerMove"), n3 = E((n4) => {
            e3.x <= 10 && e3.y <= 10 ? n4.preventDefault() : n4.composedPath().includes(I2) || z2(false), document.removeEventListener("pointermove", t3), q2.current = null;
          }, "handlePointerUp");
          return null !== q2.current && (document.addEventListener("pointermove", t3), document.addEventListener("pointerup", n3, {
            capture: true,
            once: true
          })), () => {
            document.removeEventListener("pointermove", t3), document.removeEventListener("pointerup", n3, {
              capture: true
            });
          };
        }
      }, [I2, z2, q2]), r.useEffect(() => {
        let e3 = E(() => z2(false), "close");
        return window.addEventListener("blur", e3), window.addEventListener("resize", e3), () => {
          window.removeEventListener("blur", e3), window.removeEventListener("resize", e3);
        };
      }, [z2]);
      let [Z2, X2] = ek((e3) => {
        let t3 = A2().filter((e4) => !e4.disabled), n3 = t3.find((e4) => e4.ref.current === document.activeElement), r2 = eI(t3, e3, n3);
        r2 && setTimeout(() => r2.ref.current?.focus());
      }), Y2 = r.useCallback(
        (e3, t3, n3) => {
          let r2 = !U2.current && !n3;
          (void 0 !== j2.value && j2.value === t3 || r2) && (_2(e3), r2 && (U2.current = true));
        },
        [j2.value]
      ), J2 = r.useCallback(() => I2?.focus(), [I2]), $2 = r.useCallback(
        (e3, t3, n3) => {
          let r2 = !U2.current && !n3;
          (void 0 !== j2.value && j2.value === t3 || r2) && N2(e3);
        },
        [j2.value]
      ), et2 = "popper" === o2 ? el : eo;
      return (0, k.jsx)(ee, {
        scope: n2,
        content: I2,
        viewport: M2,
        onViewportChange: D2,
        itemRefCallback: Y2,
        selectedItem: B2,
        onItemLeave: J2,
        itemTextRefCallback: $2,
        focusSelectedItem: W2,
        selectedItemText: H2,
        position: o2,
        isPositioned: V2,
        searchRef: Z2,
        children: (0, k.jsx)(T.A, {
          as: en,
          allowPinchZoom: true,
          children: (0, k.jsx)(f.n, {
            asChild: true,
            trapped: j2.open,
            onMountAutoFocus: (e3) => {
              e3.preventDefault();
            },
            onUnmountAutoFocus: (0, i.mK)(l2, (e3) => {
              j2.trigger?.focus({ preventScroll: true }), e3.preventDefault();
            }),
            children: (0, k.jsx)(d.qW, {
              asChild: true,
              disableOutsidePointerEvents: true,
              onEscapeKeyDown: a2,
              onPointerDownOutside: u2,
              onFocusOutside: (e3) => e3.preventDefault(),
              onDismiss: () => j2.onOpenChange(false),
              children: (0, k.jsx)(et2, {
                role: "listbox",
                id: j2.contentId,
                "data-state": j2.open ? "open" : "closed",
                dir: j2.dir,
                onContextMenu: (e3) => e3.preventDefault(),
                ...C2,
                ...et2 === el ? {
                  side: c2,
                  sideOffset: h2,
                  align: v2,
                  alignOffset: m2,
                  arrowPadding: g2,
                  collisionBoundary: w2,
                  collisionPadding: x2,
                  sticky: S2,
                  hideWhenDetached: y2,
                  avoidCollisions: b2
                } : {},
                onPlaced: () => F2(true),
                ref: L2,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  outline: "none",
                  ...C2.style
                },
                onKeyDown: (0, i.mK)(C2.onKeyDown, (e3) => {
                  let t3 = e3.ctrlKey || e3.altKey || e3.metaKey;
                  if ("Tab" === e3.key && e3.preventDefault(), t3 || 1 !== e3.key.length || X2(e3.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e3.key)) {
                    let t4 = A2().filter((e4) => !e4.disabled).map((e4) => e4.ref.current);
                    if (["ArrowUp", "End"].includes(e3.key) && (t4 = t4.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e3.key)) {
                      let n3 = e3.target, r2 = t4.indexOf(n3);
                      t4 = t4.slice(r2 + 1);
                    }
                    setTimeout(() => G2(t4)), e3.preventDefault();
                  }
                })
              })
            })
          })
        })
      });
    }, "SelectContentImpl")
  ), eo = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, onPlaced: o2, ...i2 } = e2, a2 = O(Q, n2), u2 = et(Q, n2), [c2, d2] = r.useState(null), [p2, f2] = r.useState(null), h2 = (0, s.s)(t2, f2), v2 = K(n2), m2 = r.useRef(false), g2 = r.useRef(true), {
        viewport: x2,
        selectedItem: S2,
        selectedItemText: y2,
        focusSelectedItem: C2
      } = u2, j2 = r.useCallback(() => {
        if (a2.trigger && a2.valueNode && c2 && p2 && x2 && S2 && y2) {
          let e3 = a2.trigger.getBoundingClientRect(), t3 = p2.getBoundingClientRect(), n3 = a2.valueNode.getBoundingClientRect(), r2 = y2.getBoundingClientRect();
          if ("rtl" !== a2.dir) {
            let o3 = r2.left - t3.left, i4 = n3.left - o3, a3 = e3.left - i4, s3 = e3.width + a3, u4 = Math.max(s3, t3.width), d4 = l(i4, [10, Math.max(10, window.innerWidth - 10 - u4)]);
            c2.style.minWidth = s3 + "px", c2.style.left = d4 + "px";
          } else {
            let o3 = t3.right - r2.right, i4 = window.innerWidth - n3.right - o3, a3 = window.innerWidth - e3.right - i4, s3 = e3.width + a3, u4 = Math.max(s3, t3.width), d4 = l(i4, [10, Math.max(10, window.innerWidth - 10 - u4)]);
            c2.style.minWidth = s3 + "px", c2.style.right = d4 + "px";
          }
          let i3 = v2(), s2 = window.innerHeight - 20, u3 = x2.scrollHeight, d3 = window.getComputedStyle(p2), f3 = parseInt(d3.borderTopWidth, 10), h3 = parseInt(d3.paddingTop, 10), g3 = parseInt(d3.borderBottomWidth, 10), w2 = f3 + h3 + u3 + parseInt(d3.paddingBottom, 10) + g3, b2 = Math.min(5 * S2.offsetHeight, w2), C3 = window.getComputedStyle(x2), j3 = parseInt(C3.paddingTop, 10), P3 = parseInt(C3.paddingBottom, 10), T3 = e3.top + e3.height / 2 - 10, k2 = S2.offsetHeight / 2, I3 = f3 + h3 + (S2.offsetTop + k2);
          if (I3 <= T3) {
            let e4 = i3.length > 0 && S2 === i3[i3.length - 1].ref.current;
            c2.style.bottom = "0px";
            let t4 = Math.max(
              s2 - T3,
              k2 + (e4 ? P3 : 0) + (p2.clientHeight - x2.offsetTop - x2.offsetHeight) + g3
            );
            c2.style.height = I3 + t4 + "px";
          } else {
            let e4 = i3.length > 0 && S2 === i3[0].ref.current;
            c2.style.top = "0px";
            let t4 = Math.max(T3, f3 + x2.offsetTop + (e4 ? j3 : 0) + k2);
            c2.style.height = t4 + (w2 - I3) + "px", x2.scrollTop = I3 - T3 + x2.offsetTop;
          }
          c2.style.margin = "10px 0", c2.style.minHeight = b2 + "px", c2.style.maxHeight = s2 + "px", o2?.(), requestAnimationFrame(() => m2.current = true);
        }
      }, [v2, a2.trigger, a2.valueNode, c2, p2, x2, S2, y2, a2.dir, o2]);
      (0, b.N)(() => j2(), [j2]);
      let [P2, T2] = r.useState();
      (0, b.N)(() => {
        p2 && T2(window.getComputedStyle(p2).zIndex);
      }, [p2]);
      let I2 = r.useCallback(
        (e3) => {
          e3 && true === g2.current && (j2(), C2?.(), g2.current = false);
        },
        [j2, C2]
      );
      return (0, k.jsx)(ei, {
        scope: n2,
        contentWrapper: c2,
        shouldExpandOnScrollRef: m2,
        onScrollButtonChange: I2,
        children: (0, k.jsx)("div", {
          ref: d2,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: P2
          },
          children: (0, k.jsx)(w.sG.div, {
            ...i2,
            ref: h2,
            style: { boxSizing: "border-box", maxHeight: "100%", ...i2.style }
          })
        })
      });
    }, "SelectItemAlignedPosition")
  ), el = r.forwardRef(
    E(function(e2, t2) {
      let {
        __scopeSelect: n2,
        align: r2 = "start",
        collisionPadding: o2 = 10,
        ...l2
      } = e2, i2 = N(n2);
      return (0, k.jsx)(v.UC, {
        ...i2,
        ...l2,
        ref: t2,
        align: r2,
        collisionPadding: o2,
        style: {
          boxSizing: "border-box",
          ...l2.style,
          "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width": "var(--radix-popper-available-width)",
          "--radix-select-content-available-height": "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
      });
    }, "SelectPopperPosition")
  ), [ei, ea] = _(Q, {}), es = "SelectViewport", eu = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, nonce: o2, ...l2 } = e2, a2 = et(es, n2), u2 = ea(es, n2), c2 = (0, s.s)(t2, a2.onViewportChange), d2 = r.useRef(0);
      return (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o2
          }),
          (0, k.jsx)(L.Slot, {
            scope: n2,
            children: (0, k.jsx)(w.sG.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...l2,
              ref: c2,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...l2.style
              },
              onScroll: (0, i.mK)(l2.onScroll, (e3) => {
                let t3 = e3.currentTarget, { contentWrapper: n3, shouldExpandOnScrollRef: r2 } = u2;
                if (r2?.current && n3) {
                  let e4 = Math.abs(d2.current - t3.scrollTop);
                  if (e4 > 0) {
                    let r3 = window.innerHeight - 20, o3 = Math.max(
                      parseFloat(n3.style.minHeight),
                      parseFloat(n3.style.height)
                    );
                    if (o3 < r3) {
                      let l3 = o3 + e4, i2 = Math.min(r3, l3), a3 = l3 - i2;
                      n3.style.height = i2 + "px", "0px" === n3.style.bottom && (t3.scrollTop = a3 > 0 ? a3 : 0, n3.style.justifyContent = "flex-end");
                    }
                  }
                }
                d2.current = t3.scrollTop;
              })
            })
          })
        ]
      });
    }, "SelectViewport")
  ), [ec, ed] = _("SelectGroup"), ep = "SelectItem", [ef, eh] = _(ep), ev = r.forwardRef(
    E(function(e2, t2) {
      let {
        __scopeSelect: n2,
        value: o2,
        disabled: l2 = false,
        textValue: a2,
        ...u2
      } = e2, c2 = O(ep, n2), d2 = et(ep, n2), p2 = c2.value === o2, [f2, v2] = r.useState(a2 ?? ""), [m2, g2] = r.useState(false), x2 = (0, S.c)((e3) => d2.itemRefCallback?.(e3, o2, l2)), y2 = (0, s.s)(t2, x2), b2 = (0, h.B)(), C2 = r.useRef("touch"), j2 = E(() => {
        l2 || (c2.onValueChange(o2), c2.onOpenChange(false));
      }, "handleSelect");
      return (0, k.jsx)(ef, {
        scope: n2,
        value: o2,
        disabled: l2,
        textId: b2,
        isSelected: p2,
        onItemTextChange: r.useCallback((e3) => {
          v2((t3) => t3 || (e3?.textContent ?? "").trim());
        }, []),
        children: (0, k.jsx)(L.ItemSlot, {
          scope: n2,
          value: o2,
          disabled: l2,
          textValue: f2,
          children: (0, k.jsx)(w.sG.div, {
            role: "option",
            "aria-labelledby": b2,
            "data-highlighted": m2 ? "" : void 0,
            "aria-selected": p2 && m2,
            "data-state": p2 ? "checked" : "unchecked",
            "aria-disabled": l2 || void 0,
            "data-disabled": l2 ? "" : void 0,
            tabIndex: l2 ? void 0 : -1,
            ...u2,
            ref: y2,
            onFocus: (0, i.mK)(u2.onFocus, () => g2(true)),
            onBlur: (0, i.mK)(u2.onBlur, () => g2(false)),
            onClick: (0, i.mK)(u2.onClick, () => {
              "mouse" !== C2.current && j2();
            }),
            onPointerUp: (0, i.mK)(u2.onPointerUp, () => {
              "mouse" === C2.current && j2();
            }),
            onPointerDown: (0, i.mK)(u2.onPointerDown, (e3) => {
              C2.current = e3.pointerType;
            }),
            onPointerMove: (0, i.mK)(u2.onPointerMove, (e3) => {
              C2.current = e3.pointerType, l2 ? d2.onItemLeave?.() : "mouse" === C2.current && e3.currentTarget.focus({ preventScroll: true });
            }),
            onPointerLeave: (0, i.mK)(u2.onPointerLeave, (e3) => {
              e3.currentTarget === document.activeElement && d2.onItemLeave?.();
            }),
            onKeyDown: (0, i.mK)(u2.onKeyDown, (e3) => {
              l2 || e3.target !== e3.currentTarget || (d2.searchRef?.current === "" || " " !== e3.key) && (M.includes(e3.key) && j2(), " " === e3.key && e3.preventDefault());
            })
          })
        })
      });
    }, "SelectItem")
  ), em = "SelectItemText", eg = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, className: l2, style: i2, ...a2 } = e2, u2 = O(em, n2), c2 = et(em, n2), d2 = eh(em, n2), p2 = F(em, n2), [f2, h2] = r.useState(null), v2 = (0, S.c)((e3) => c2.itemTextRefCallback?.(e3, d2.value, d2.disabled)), m2 = (0, s.s)(t2, h2, d2.onItemTextChange, v2), g2 = f2?.textContent, x2 = r.useMemo(
        () => (0, k.jsx)(
          "option",
          { value: d2.value, disabled: d2.disabled, children: g2 },
          d2.value
        ),
        [d2.disabled, d2.value, g2]
      ), { onNativeOptionAdd: y2, onNativeOptionRemove: C2 } = p2;
      return (0, b.N)(() => (y2(x2), () => C2(x2)), [y2, C2, x2]), (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)(w.sG.span, { id: d2.textId, ...a2, ref: m2 }),
          d2.isSelected && u2.valueNode && !u2.valueNodeHasChildren && !eT(u2.value) ? o.createPortal(a2.children, u2.valueNode) : null
        ]
      });
    }, "SelectItemText")
  ), ew = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, ...r2 } = e2;
      return eh("SelectItemIndicator", n2).isSelected ? (0, k.jsx)(w.sG.span, { "aria-hidden": true, ...r2, ref: t2 }) : null;
    }, "SelectItemIndicator")
  ), ex = "SelectScrollUpButton", eS = r.forwardRef(
    E(function(e2, t2) {
      let n2 = et(ex, e2.__scopeSelect), o2 = ea(ex, e2.__scopeSelect), [l2, i2] = r.useState(false), a2 = (0, s.s)(t2, o2.onScrollButtonChange);
      return (0, b.N)(() => {
        if (n2.viewport && n2.isPositioned) {
          let e3 = function() {
            i2(t3.scrollTop > 0);
          };
          E(e3, "handleScroll");
          let t3 = n2.viewport;
          return e3(), t3.addEventListener("scroll", e3), () => t3.removeEventListener("scroll", e3);
        }
      }, [n2.viewport, n2.isPositioned]), l2 ? (0, k.jsx)(eC, {
        ...e2,
        ref: a2,
        onAutoScroll: () => {
          let { viewport: e3, selectedItem: t3 } = n2;
          e3 && t3 && (e3.scrollTop = e3.scrollTop - t3.offsetHeight);
        }
      }) : null;
    }, "SelectScrollUpButton")
  ), ey = "SelectScrollDownButton", eb = r.forwardRef(
    E(function(e2, t2) {
      let n2 = et(ey, e2.__scopeSelect), o2 = ea(ey, e2.__scopeSelect), [l2, i2] = r.useState(false), a2 = (0, s.s)(t2, o2.onScrollButtonChange);
      return (0, b.N)(() => {
        if (n2.viewport && n2.isPositioned) {
          let e3 = function() {
            let e4 = t3.scrollHeight - t3.clientHeight;
            i2(Math.ceil(t3.scrollTop) < e4);
          };
          E(e3, "handleScroll");
          let t3 = n2.viewport;
          return e3(), t3.addEventListener("scroll", e3), () => t3.removeEventListener("scroll", e3);
        }
      }, [n2.viewport, n2.isPositioned]), l2 ? (0, k.jsx)(eC, {
        ...e2,
        ref: a2,
        onAutoScroll: () => {
          let { viewport: e3, selectedItem: t3 } = n2;
          e3 && t3 && (e3.scrollTop = e3.scrollTop + t3.offsetHeight);
        }
      }) : null;
    }, "SelectScrollDownButton")
  ), eC = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, onAutoScroll: o2, ...l2 } = e2, a2 = et("SelectScrollButton", n2), s2 = r.useRef(null), u2 = K(n2), c2 = r.useCallback(() => {
        null !== s2.current && (window.clearInterval(s2.current), s2.current = null);
      }, []);
      return r.useEffect(() => () => c2(), [c2]), (0, b.N)(() => {
        let e3 = u2().find((e4) => e4.ref.current === document.activeElement);
        e3?.ref.current?.scrollIntoView({ block: "nearest" });
      }, [u2]), (0, k.jsx)(w.sG.div, {
        "aria-hidden": true,
        ...l2,
        ref: t2,
        style: { flexShrink: 0, ...l2.style },
        onPointerDown: (0, i.mK)(l2.onPointerDown, () => {
          null === s2.current && (s2.current = window.setInterval(o2, 50));
        }),
        onPointerMove: (0, i.mK)(l2.onPointerMove, () => {
          a2.onItemLeave?.(), null === s2.current && (s2.current = window.setInterval(o2, 50));
        }),
        onPointerLeave: (0, i.mK)(l2.onPointerLeave, () => {
          c2();
        })
      });
    }, "SelectScrollButtonImpl")
  ), ej = r.forwardRef(
    E(function({ __scopeSelect: e2, ...t2 }, n2) {
      let o2 = O("SelectBubbleInput", e2), {
        value: l2,
        onValueChange: i2,
        required: a2,
        disabled: u2,
        name: c2,
        autoComplete: d2,
        form: p2
      } = o2, { nativeOptions: f2, nativeSelectKey: h2 } = o2, v2 = r.useRef(null), m2 = (0, s.s)(n2, v2), g2 = l2 ?? "", x2 = C(g2), S2 = Array.from(f2).some((e3) => (e3.props.value ?? "") === "");
      return r.useEffect(() => {
        let e3 = v2.current;
        if (!e3) return;
        let t3 = Object.getOwnPropertyDescriptor(
          window.HTMLSelectElement.prototype,
          "value"
        ).set;
        if (x2 !== g2 && t3) {
          let n3 = new Event("change", { bubbles: true });
          t3.call(e3, g2), e3.dispatchEvent(n3);
        }
      }, [x2, g2]), (0, k.jsxs)(
        w.sG.select,
        {
          "aria-hidden": true,
          required: a2,
          tabIndex: -1,
          name: c2,
          autoComplete: d2,
          disabled: u2,
          form: p2,
          onChange: (e3) => i2(e3.target.value),
          ...t2,
          style: { ...j.Qg, ...t2.style },
          ref: m2,
          defaultValue: g2,
          children: [
            eT(l2) && !S2 ? (0, k.jsx)("option", { value: "" }) : null,
            Array.from(f2)
          ]
        },
        h2
      );
    }, "SelectBubbleInput")
  );
  function eP(e2) {
    return "function" == typeof e2;
  }
  function eT(e2) {
    return "" === e2 || void 0 === e2;
  }
  function ek(e2) {
    let t2 = (0, S.c)(e2), n2 = r.useRef(""), o2 = r.useRef(0), l2 = r.useCallback(
      (e3) => {
        t2(n2.current + e3);
      },
      [t2]
    ), i2 = r.useCallback(() => {
      n2.current = "", window.clearTimeout(o2.current);
    }, []);
    return r.useEffect(() => () => window.clearTimeout(o2.current), []), [n2, l2, i2];
  }
  function eI(e2, t2, n2) {
    let r2 = t2.length > 1 && Array.from(t2).every((e3) => e3 === t2[0]) ? t2[0] : t2, o2 = n2 ? e2.indexOf(n2) : -1, l2 = eE(e2, Math.max(o2, 0));
    1 === r2.length && (l2 = l2.filter((e3) => e3 !== n2));
    let i2 = l2.find(
      (e3) => e3.textValue.toLowerCase().startsWith(r2.toLowerCase())
    );
    return i2 !== n2 ? i2 : void 0;
  }
  function eE(e2, t2) {
    return e2.map((n2, r2) => e2[(t2 + r2) % e2.length]);
  }
  E(eP, "isFunction"), E(eT, "shouldShowPlaceholder"), E(ek, "useTypeaheadSearch"), E(eI, "findNextItem"), E(eE, "wrapArray");
}

__m(__module,__exports,__require);
});
A.reg(82016, function(__module,__exports,__require){
"use strict";
var __m=(e=>{e.exports={field:"select_field__6HUm4",trigger:"select_trigger__Gw0L9",valueText:"select_valueText__zg_oX",srOnly:"select_srOnly__RlNRP",chevron:"select_chevron__dL2_9",hint:"select_hint__5UCeN",content:"select_content__WtPtB","select-in":"select_select-in__Ra6uS","select-out":"select_select-out__lvI9W",viewport:"select_viewport__b3IkZ",item:"select_item__vx_F9",indicator:"select_indicator__4VhG0","indicator-in":"select_indicator-in__IatY1",scrollButton:"select_scrollButton__pH7Sy","select-fade":"select_select-fade__CoMTe","select-fade-out":"select_select-fade-out__ZTnwf"}});if(typeof __m==="function"){__m(__module,__exports,__require);}else{__module.exports=__m;}
});
A.reg(94088, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => i });
  var s = t(51811);
  let r = {
    name: "chevron-up",
    size: 24,
    node: [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]
  };
  r.node;
  let i = (0, s.A)(r);
}

__m(__module,__exports,__require);
});
A.reg(96220, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { l: () => f });
  var s = t(95155), r = t(12115), i = t(73051), n = t(18310), l = t(80642), o = t(25354), d = t(12363), p = t(94088), c = t(64577), m = t(7770), u = t(82016), h = t.n(u);
  let _ = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.35 * e2}em`,
      filter: `blur(${m.T.blur.soft}px)`
    }),
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: m.T.duration.standard,
        ease: [...m.T.ease.enter]
      }
    },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.3 * e2}em`,
      filter: `blur(${m.T.blur.subtle}px)`,
      transition: {
        duration: m.T.duration.fast,
        ease: [...m.T.ease.standard]
      }
    })
  }, x = {
    enter: { opacity: 0 },
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: m.T.duration.instant }
    },
    exit: { opacity: 0, transition: { duration: m.T.duration.instant } }
  }, f = (0, r.forwardRef)(function({
    label: e2,
    description: a2,
    placeholder: t2 = "Select an option",
    options: m2,
    id: u2,
    className: f2,
    disabled: y,
    onValueChange: j,
    ...b
  }, g) {
    let v = (0, r.useId)(), N = u2 ?? v, w = a2 ? `${N}-description` : void 0, k = (0, n.I)(), [S, T] = (0, r.useState)(b.defaultValue ?? ""), R = b.value ?? S, A = m2.findIndex((e3) => e3.value === R), z = R ? m2[A]?.label ?? "" : t2, [P, I] = (0, r.useState)(A), [M, C] = (0, r.useState)(1);
    return P !== A && (I(A), C(A > P ? 1 : -1)), (0, s.jsxs)("div", {
      className: h().field,
      children: [
        (0, s.jsx)("label", { htmlFor: N, children: e2 }),
        (0, s.jsxs)(i.bL, {
          ...b,
          disabled: y,
          onValueChange: (e3) => {
            T(e3), j?.(e3);
          },
          children: [
            (0, s.jsxs)(i.l9, {
              ref: g,
              id: N,
              "aria-describedby": w,
              className: [h().trigger, f2].filter(Boolean).join(" "),
              children: [
                (0, s.jsx)("span", {
                  className: h().srOnly,
                  children: (0, s.jsx)(i.WT, { placeholder: t2 })
                }),
                (0, s.jsx)("span", {
                  className: h().valueText,
                  "aria-hidden": "true",
                  children: (0, s.jsx)(l.N, {
                    initial: false,
                    custom: M,
                    children: (0, s.jsx)(
                      o.PY1.span,
                      {
                        "data-placeholder": R ? void 0 : "",
                        custom: M,
                        variants: k ? x : _,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        children: z
                      },
                      R ? `value-${R}` : "placeholder"
                    )
                  })
                }),
                (0, s.jsx)(i.In, {
                  className: h().chevron,
                  children: (0, s.jsx)(d.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                })
              ]
            }),
            (0, s.jsx)(i.ZL, {
              children: (0, s.jsxs)(i.UC, {
                className: h().content,
                position: "popper",
                sideOffset: 4,
                collisionPadding: 12,
                children: [
                  (0, s.jsx)(i.PP, {
                    className: h().scrollButton,
                    children: (0, s.jsx)(p.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  }),
                  (0, s.jsx)(i.LM, {
                    className: h().viewport,
                    children: m2.map(
                      (e3) => (0, s.jsxs)(
                        i.q7,
                        {
                          value: e3.value,
                          disabled: e3.disabled,
                          className: h().item,
                          children: [
                            (0, s.jsx)(i.p4, { children: e3.label }),
                            (0, s.jsx)(i.VF, {
                              className: h().indicator,
                              children: (0, s.jsx)(c.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            })
                          ]
                        },
                        e3.value
                      )
                    )
                  }),
                  (0, s.jsx)(i.wn, {
                    className: h().scrollButton,
                    children: (0, s.jsx)(d.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  })
                ]
              })
            })
          ]
        }),
        a2 && (0, s.jsx)("span", { id: w, className: h().hint, children: a2 })
      ]
    });
  });
}

__m(__module,__exports,__require);
});
A.cssFor("checkout-live", [61140]);
A.item("checkout-live", {entry:25037, export:"CheckoutLive", kind:"block", tier:"pro", unresolved:[]});
})();