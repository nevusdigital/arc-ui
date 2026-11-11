function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.r(t), i.d(t, { InvoiceStudio: () => b, default: () => f });
  var a = i(95155), n = i(12115), r = i(80642), s = i(25354), o = i(18310), l = i(25879), d = i(2125), c = i(64577), u = i(51288), p = i(7770), m = i(94526), h = i.n(m);
  let _ = [
    {
      id: "discovery",
      description: "Discovery and direction",
      quantity: "1",
      rate: "900.00"
    },
    {
      id: "interface",
      description: "Interface design",
      quantity: "2",
      rate: "650.00"
    },
    {
      id: "handoff",
      description: "Design handoff",
      quantity: "1",
      rate: "250.00"
    }
  ], x = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }), v = (e2) => {
    let t2 = Number(e2.quantity), i2 = Number(e2.rate);
    return Number.isFinite(t2) && Number.isFinite(i2) ? Math.max(0, t2) * Math.max(0, i2) : 0;
  };
  function y({ amount: e2, reduce: t2 }) {
    return (0, a.jsx)(r.N, {
      initial: false,
      children: (0, a.jsx)(
        s.PY1.span,
        {
          initial: !t2 && { opacity: 0, y: 5, filter: "blur(3px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          exit: t2 ? { opacity: 0 } : { opacity: 0, y: -5, filter: "blur(3px)" },
          transition: {
            duration: t2 ? 0 : p.T.duration.fast,
            ease: [...p.T.ease.enter]
          },
          children: x.format(e2)
        },
        e2.toFixed(2)
      )
    });
  }
  function b({ onSave: e2 }) {
    let t2 = (0, o.I)(), i2 = (0, n.useId)(), [m2, f2] = (0, n.useState)(_), [j, N] = (0, n.useState)("idle"), g = (0, n.useRef)(0), k = (0, n.useRef)(/* @__PURE__ */ new Map()), T = (0, n.useRef)(null), C = m2.reduce((e3, t3) => e3 + v(t3), 0), S = Math.round(0.08 * C * 100) / 100, M = C + S;
    function w(e3, t3, i3) {
      f2((a2) => a2.map((a3) => a3.id === e3 ? { ...a3, [t3]: i3 } : a3)), N("idle");
    }
    function L(e3, t3) {
      f2(
        (i3) => i3.map((i4) => {
          if (i4.id !== e3) return i4;
          let a2 = Number(i4[t3]);
          return "quantity" === t3 ? {
            ...i4,
            quantity: String(
              Math.min(999, Math.max(1, Math.floor(a2) || 1))
            )
          } : {
            ...i4,
            rate: (Number.isFinite(a2) ? Math.min(1e6, Math.max(0, a2)) : 0).toFixed(2)
          };
        })
      );
    }
    async function A() {
      let i3 = m2.find((e3) => !e3.description.trim());
      if (i3) {
        N("invalid"), k.current.get(i3.id)?.focus();
        return;
      }
      if (N("saving"), !e2) {
        await new Promise((e3) => window.setTimeout(e3, t2 ? 150 : 700)), N("saved");
        return;
      }
      try {
        await e2?.(
          m2.map((e3) => ({
            description: e3.description.trim(),
            quantity: Math.min(
              999,
              Math.max(1, Math.floor(Number(e3.quantity)) || 1)
            ),
            rate: Math.min(1e6, Math.max(0, Number(e3.rate) || 0))
          }))
        ), N("saved");
      } catch {
        N("error");
      }
    }
    return (0, a.jsxs)("section", {
      className: h().invoice,
      "aria-labelledby": `${i2}-title`,
      children: [
        (0, a.jsxs)("header", {
          className: h().documentHeader,
          children: [
            (0, a.jsxs)("div", {
              className: h().identity,
              children: [
                (0, a.jsx)("span", {
                  className: h().wordmark,
                  children: "Northstar Studio"
                }),
                (0, a.jsx)("span", { children: "Invoice 2026-041" })
              ]
            }),
            (0, a.jsxs)("div", {
              className: h().documentMeta,
              children: [
                (0, a.jsx)("span", { children: "Issued 19 Sep 2026" }),
                (0, a.jsx)("span", { children: "Due 19 Oct 2026" })
              ]
            })
          ]
        }),
        (0, a.jsxs)("div", {
          className: h().heading,
          children: [
            (0, a.jsx)("h2", { id: `${i2}-title`, children: "Invoice" }),
            (0, a.jsxs)("div", {
              className: h().parties,
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("span", { children: "From" }),
                    (0, a.jsx)("strong", { children: "Northstar Studio" }),
                    (0, a.jsxs)("p", {
                      children: [
                        "44 Hudson Street",
                        (0, a.jsx)("br", {}),
                        "New York, NY 10013"
                      ]
                    })
                  ]
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("span", { children: "Bill to" }),
                    (0, a.jsx)("strong", { children: "Acme Product" }),
                    (0, a.jsxs)("p", {
                      children: [
                        "125 Spring Street",
                        (0, a.jsx)("br", {}),
                        "New York, NY 10012"
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, a.jsxs)("div", {
          className: h().linesHeader,
          "aria-hidden": "true",
          children: [
            (0, a.jsx)("span", { children: "Work" }),
            (0, a.jsx)("span", { children: "Qty" }),
            (0, a.jsx)("span", { children: "Rate" }),
            (0, a.jsx)("span", { children: "Amount" }),
            (0, a.jsx)("span", {})
          ]
        }),
        (0, a.jsx)("div", {
          className: h().lines,
          "aria-label": "Invoice line items",
          children: (0, a.jsx)(r.N, {
            initial: false,
            children: m2.map(
              (e3, i3) => (0, a.jsx)(
                s.PY1.div,
                {
                  className: h().lineSlot,
                  initial: !t2 && { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: p.T.spring.smooth,
                      opacity: { duration: p.T.duration.fast }
                    }
                  },
                  transition: t2 ? { duration: 0 } : {
                    height: p.T.spring.smooth,
                    opacity: {
                      duration: p.T.duration.standard,
                      ease: [...p.T.ease.enter]
                    }
                  },
                  children: (0, a.jsxs)("div", {
                    className: h().line,
                    children: [
                      (0, a.jsxs)("label", {
                        className: h().descriptionCell,
                        children: [
                          (0, a.jsx)("span", {
                            className: h().mobileLabel,
                            children: "Work"
                          }),
                          (0, a.jsx)("input", {
                            ref: (t3) => {
                              t3 ? k.current.set(e3.id, t3) : k.current.delete(e3.id);
                            },
                            value: e3.description,
                            onChange: (t3) => w(e3.id, "description", t3.target.value),
                            "aria-label": `Line ${i3 + 1} description`,
                            placeholder: "Describe the work"
                          })
                        ]
                      }),
                      (0, a.jsxs)("label", {
                        className: h().numberCell,
                        children: [
                          (0, a.jsx)("span", {
                            className: h().mobileLabel,
                            children: "Qty"
                          }),
                          (0, a.jsx)("input", {
                            type: "number",
                            inputMode: "numeric",
                            min: "1",
                            max: "999",
                            step: "1",
                            value: e3.quantity,
                            onChange: (t3) => w(e3.id, "quantity", t3.target.value),
                            onBlur: () => L(e3.id, "quantity"),
                            "aria-label": `Line ${i3 + 1} quantity`
                          })
                        ]
                      }),
                      (0, a.jsxs)("label", {
                        className: h().numberCell,
                        children: [
                          (0, a.jsx)("span", {
                            className: h().mobileLabel,
                            children: "Rate"
                          }),
                          (0, a.jsx)("span", {
                            className: h().currencyPrefix,
                            children: "$"
                          }),
                          (0, a.jsx)("input", {
                            type: "number",
                            inputMode: "decimal",
                            min: "0",
                            max: "1000000",
                            step: "0.01",
                            value: e3.rate,
                            onChange: (t3) => w(e3.id, "rate", t3.target.value),
                            onBlur: () => L(e3.id, "rate"),
                            "aria-label": `Line ${i3 + 1} rate in dollars`
                          })
                        ]
                      }),
                      (0, a.jsx)("output", {
                        className: h().amountCell,
                        "aria-label": `Line ${i3 + 1} amount`,
                        children: (0, a.jsx)(y, { amount: v(e3), reduce: t2 })
                      }),
                      (0, a.jsx)("button", {
                        className: h().removeButton,
                        type: "button",
                        "aria-label": `Remove line ${i3 + 1}`,
                        disabled: 1 === m2.length,
                        onClick: () => {
                          var t3;
                          return t3 = e3.id, void (!(m2.length <= 1) && (f2((e4) => e4.filter((e5) => e5.id !== t3)), N("idle"), T.current?.focus()));
                        },
                        children: (0, a.jsx)(l.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      })
                    ]
                  })
                },
                e3.id
              )
            )
          })
        }),
        (0, a.jsx)("div", {
          className: h().addRow,
          children: (0, a.jsxs)("button", {
            type: "button",
            ref: T,
            onClick: function() {
              let e3 = `new-${++g.current}`;
              f2((t3) => [
                ...t3,
                { id: e3, description: "", quantity: "1", rate: "0.00" }
              ]), N("idle"), requestAnimationFrame(() => k.current.get(e3)?.focus());
            },
            children: [
              (0, a.jsx)(d.A, {
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              }),
              " Add line item"
            ]
          })
        }),
        (0, a.jsxs)("div", {
          className: h().bottom,
          children: [
            (0, a.jsx)("p", {
              className: h().note,
              children: "Thank you for the work together. Payment is due within 30 days."
            }),
            (0, a.jsxs)("div", {
              className: h().totals,
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("span", { children: "Subtotal" }),
                    (0, a.jsx)("span", {
                      className: h().moneySlot,
                      children: (0, a.jsx)(y, { amount: C, reduce: t2 })
                    })
                  ]
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("span", { children: "Tax \xB7 8%" }),
                    (0, a.jsx)("span", {
                      className: h().moneySlot,
                      children: (0, a.jsx)(y, { amount: S, reduce: t2 })
                    })
                  ]
                }),
                (0, a.jsxs)("div", {
                  className: h().totalLine,
                  children: [
                    (0, a.jsx)("strong", { children: "Total due" }),
                    (0, a.jsx)("output", {
                      "aria-live": "polite",
                      "aria-atomic": "true",
                      children: (0, a.jsx)(r.N, {
                        initial: false,
                        children: (0, a.jsx)(
                          s.PY1.span,
                          {
                            initial: !t2 && {
                              opacity: 0,
                              y: 7,
                              filter: "blur(5px)"
                            },
                            animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                            exit: t2 ? { opacity: 0 } : { opacity: 0, y: -7, filter: "blur(4px)" },
                            transition: {
                              duration: t2 ? 0 : p.T.duration.standard,
                              ease: [...p.T.ease.enter]
                            },
                            children: x.format(M)
                          },
                          M.toFixed(2)
                        )
                      })
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, a.jsxs)("footer", {
          className: h().footer,
          children: [
            (0, a.jsx)("p", {
              className: h().srOnly,
              role: "status",
              "aria-live": "polite",
              children: "saving" === j ? "Saving draft\u2026" : "saved" === j ? "Draft saved." : "error" === j ? "Could not save the draft. Try again." : "invalid" === j ? "Describe each line before saving." : "\xA0"
            }),
            (0, a.jsx)(u.$, {
              type: "button",
              variant: "saved" === j ? "secondary" : void 0,
              className: h().saveButton,
              loading: "saving" === j,
              onClick: () => void A(),
              children: (0, a.jsx)(r.N, {
                mode: "popLayout",
                initial: false,
                children: (0, a.jsx)(
                  s.PY1.span,
                  {
                    className: h().saveLabel,
                    initial: !t2 && { opacity: 0, y: 6, filter: "blur(2px)" },
                    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                    exit: t2 ? { opacity: 0 } : { opacity: 0, y: -6, filter: "blur(2px)" },
                    transition: {
                      duration: t2 ? 0 : p.T.duration.fast,
                      ease: [...p.T.ease.enter]
                    },
                    children: "saved" === j ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(c.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        "Saved"
                      ]
                    }) : "Save draft"
                  },
                  "saved" === j ? "saved" : "save"
                )
              })
            })
          ]
        })
      ]
    });
  }
  let f = b;
}

__m(__module,__exports,__require);
}