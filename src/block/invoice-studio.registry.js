/* invoice-studio (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(80970, function(__module,__exports,__require){
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
});
A.regCss(94526, ".invoice{width:min(100%,960px);min-width:0;margin-inline:auto;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n@media (max-width:620px){.invoice{border-radius:var(--radius-control)}\n.documentHeader{display:flex;align-items:flex-start;justify-content:space-between;gap:24px;border-bottom:1px solid var(--border);padding:20px 32px}\n@media (max-width:760px){.documentHeader,.footer,.heading{padding-inline:24px}\n.documentHeader{padding:22px 20px}\n.documentMeta,.identity{display:grid;gap:4px}\n.documentMeta>span:last-child,.identity>span:last-child{color:var(--text-muted);font-size:var(--text-xs)}\n.documentMeta{text-align:right;font-size:var(--text-sm)}\n.wordmark{font-size:var(--text-base);font-weight:500}\n.heading{display:flex;align-items:flex-start;justify-content:space-between;gap:36px;padding:32px 32px 40px}\n.heading h2{margin:0;font-family:var(--font-display);font-size:clamp(var(--text-3xl),5vw,var(--text-4xl));font-weight:400;letter-spacing:var(--tracking-display);line-height:var(--leading-display)}\n.heading{display:grid;gap:24px;padding-bottom:36px}\n.heading{padding:28px 20px 32px}\n.heading h2{font-size:var(--text-3xl)}\n.parties{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:38px}\n.parties>div{min-width:0}\n.parties span{display:block;margin-bottom:8px;color:var(--text-muted);font-size:var(--text-xs)}\n.parties strong{display:block;font-size:var(--text-sm);font-weight:500}\n.parties p{margin:4px 0 0;color:var(--text-secondary);font-size:var(--text-xs);line-height:var(--leading-body)}\n.parties{gap:20px}\n.parties{gap:18px}\n@media (max-width:380px){.parties{grid-template-columns:1fr;gap:16px}\n.parties span{margin-bottom:4px}\n.parties p{margin-top:3px}\n.line,.linesHeader{display:grid;grid-template-columns:minmax(190px,1fr) 76px 118px 116px 32px;align-items:center;gap:12px}\n.linesHeader{border-bottom:1px solid var(--border);padding:0 32px 10px;color:var(--text-muted);font-size:var(--text-xs)}\n.linesHeader span:nth-child(4){text-align:right}\n.line,.linesHeader{grid-template-columns:minmax(150px,1fr) 64px 94px 92px 32px;gap:5px;padding-inline:20px}\n.linesHeader{display:none}\n.line{min-width:0;border-bottom:1px solid var(--border-subtle);padding:6px 32px}\n.line label{position:relative;display:block;min-width:0}\n.line input{width:100%;min-width:0;min-height:36px;border:1px solid transparent;border-radius:10px;padding:0 10px;outline:none;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);transition:border-color var(--duration-fast) var(--ease-standard),background var(--duration-fast) var(--ease-standard)}\n.line input:hover{background:var(--surface-muted)}\n.line input:focus{border-color:var(--border-strong);background:var(--surface)}\n.line input::placeholder{color:var(--text-muted)}\n.line input::-webkit-inner-spin-button,.line input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}\n.line input[type=number]{-moz-appearance:textfield;appearance:textfield}\n.line{grid-template-columns:minmax(0,1fr) minmax(0,1fr) 32px;gap:8px;margin-inline:20px;padding:14px 0}\n.line input{min-height:40px;border-color:var(--border);background:var(--surface)}\n@media (prefers-reduced-motion:reduce){.addRow button,.line input,.removeButton{transition:none}\n.lineSlot{overflow:hidden}\n.numberCell input{text-align:right;font-variant-numeric:tabular-nums}\n.numberCell:has(.currencyPrefix) input{padding-left:25px}\n.numberCell{grid-row:2}\n.currencyPrefix{position:absolute;top:50%;left:10px;transform:translateY(-50%);color:var(--text-muted);font-size:var(--text-sm);pointer-events:none}\n.currencyPrefix{top:calc(50% + 8px)}\n.amountCell{display:grid;min-width:0;justify-items:end;text-align:right;font-size:var(--text-sm);font-variant-numeric:tabular-nums;white-space:nowrap}\n.amountCell span,.moneySlot span{grid-area:1/1}\n.amountCell{grid-column:1/-1;grid-row:3;justify-items:end;padding-right:42px;color:var(--text-secondary)}\n.moneySlot{display:grid;min-width:105px;justify-items:end}\n.removeButton{display:grid;width:32px;height:32px;place-items:center;border:0;border-radius:10px;background:transparent;color:var(--text-muted);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.removeButton:hover:not(:disabled){background:var(--surface-muted);color:var(--danger)}\n.removeButton:disabled{opacity:.3;cursor:not-allowed}\n.addRow button:active,.removeButton:active:not(:disabled){transform:scale(.96)}\n.removeButton{grid-column:3;grid-row:2;align-self:end;margin-bottom:2px}\n.addRow button:active,.removeButton:active:not(:disabled){transform:none}\n.mobileLabel{display:none}\n.mobileLabel{display:block;margin:0 0 4px 10px;color:var(--text-muted);font-size:var(--text-xs)}\n.addRow{padding:10px 24px 28px}\n.addRow button{display:inline-flex;min-height:32px;align-items:center;gap:6px;border:0;border-radius:10px;padding:0 10px 0 8px;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);font-weight:500;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.addRow button:hover{background:var(--surface-muted)}\n.addRow{padding-inline:20px}\n.addRow{padding:12px 20px 24px}\n.bottom{display:flex;justify-content:space-between;gap:40px;padding:0 32px 28px}\n.bottom{padding-inline:24px}\n.bottom{display:grid;justify-content:stretch;gap:28px;padding:0 20px 28px}\n.note{max-width:300px;margin:0;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.note{order:2}\n.totals{display:grid;width:min(100%,270px);flex:none;gap:12px;font-size:var(--text-sm)}\n.totals>div{display:flex;justify-content:space-between;gap:24px;font-variant-numeric:tabular-nums}\n.totals>div:not(.totalLine) span:first-child{color:var(--text-muted)}\n.totals{width:100%;max-width:none}\n.totalLine{align-items:baseline;border-top:1px solid var(--border);margin-top:4px;padding-top:16px}\n.totalLine strong{font-weight:500}\n.totalLine output{display:grid;justify-items:end;min-width:120px;font-family:var(--font-display);font-size:var(--text-2xl);letter-spacing:var(--tracking-display);line-height:var(--leading-display)}\n.totalLine output span{grid-area:1/1}\n.footer{display:flex;min-height:64px;align-items:center;justify-content:flex-end;gap:24px;border-top:1px solid var(--border);padding:12px 20px 12px 32px}\n.footer p{min-width:0;margin:0;color:var(--text-secondary);font-size:var(--text-xs)}\n.footer{padding:14px 20px}\n.footer{gap:8px}\n.saveButton{width:132px;flex:none}\n.saveButton{width:128px}\n.saveLabel{display:inline-flex;align-items:center;gap:6px}\n.descriptionCell{grid-column:1/-1}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"invoice":"invoice","documentHeader":"documentHeader","footer":"footer","heading":"heading","documentMeta":"documentMeta","identity":"identity","wordmark":"wordmark","parties":"parties","line":"line","linesHeader":"linesHeader","addRow":"addRow","removeButton":"removeButton","lineSlot":"lineSlot","numberCell":"numberCell","currencyPrefix":"currencyPrefix","amountCell":"amountCell","moneySlot":"moneySlot","mobileLabel":"mobileLabel","bottom":"bottom","note":"note","totals":"totals","totalLine":"totalLine","saveButton":"saveButton","saveLabel":"saveLabel","descriptionCell":"descriptionCell","srOnly":"srOnly"});
A.cssFor("invoice-studio", [94526]);
A.item("invoice-studio", {entry:80970, export:"InvoiceStudio", kind:"block", tier:"pro", unresolved:[]});
})();