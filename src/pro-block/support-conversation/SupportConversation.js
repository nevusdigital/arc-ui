function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { SupportConversation: () => A, default: () => N });
  var s = a(95155), i = a(12115), r = a(5772), n = a(25354), o = a(18310), l = a(80642), d = a(92298), c = a(64577), h = a(36483), p = a(66763), u = a(15561), m = a(38158), g = a(67752), v = a(7770), w = a(79616), f = a.n(w);
  let y = [
    {
      id: 1,
      sender: "you",
      text: "The charts in my PDF export look small. Is there a way to make them larger?",
      time: "10:42",
      status: "read"
    },
    {
      id: 2,
      sender: "agent",
      text: "Yes, the Presentation page size gives charts more room. I can walk you through it.",
      time: "10:43"
    },
    {
      id: 3,
      sender: "you",
      text: "That would be great. I need to send this report to the board today.",
      time: "10:44",
      status: "read"
    }
  ], j = (0, g.my)("ava-mitchell"), x = ["Show me the steps", "Do links stay clickable?"];
  function _(e2 = /* @__PURE__ */ new Date()) {
    return e2.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }
  function b(e2) {
    return {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: {
          duration: e2 ? 0 : v.T.duration.standard,
          ease: v.T.ease.enter
        }
      },
      exit: {
        opacity: 0,
        transition: {
          duration: e2 ? 0 : v.T.duration.fast,
          ease: v.T.ease.standard
        }
      }
    };
  }
  function k({ children: e2, className: t2, reduce: a2 }) {
    let r2 = (0, i.useRef)(null), [o2, l2] = (0, i.useState)("auto");
    return (0, i.useEffect)(() => {
      let e3 = r2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(
        ([t4]) => l2(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight)
      );
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, s.jsx)(n.PY1.div, {
      className: f().autoHeight,
      initial: false,
      animate: { height: o2 },
      transition: a2 ? { duration: 0 } : v.T.spring.smooth,
      children: (0, s.jsx)("div", { ref: r2, className: t2, children: e2 })
    });
  }
  function A({ onSend: e2, onResolve: t2 }) {
    let a2 = (0, o.I)(), g2 = (0, i.useId)(), [w2, N2] = (0, i.useState)(y), [T, z] = (0, i.useState)(""), [P, S] = (0, i.useState)(false), [C, R] = (0, i.useState)(false), [D, O] = (0, i.useState)(false), [W, I] = (0, i.useState)(""), M = (0, i.useRef)(null), E = (0, i.useRef)(false), F = (0, i.useRef)(0), Y = (0, i.useRef)([]), H = (0, i.useRef)(4), L = (0, i.useRef)(null);
    function B(t3, s2) {
      let i2 = t3.trim();
      if ((i2 || s2) && !C) {
        var r2;
        let t4;
        N2((e3) => [
          ...e3,
          {
            id: H.current++,
            sender: "you",
            text: i2 || "I\u2019ve attached the report for context.",
            time: _(),
            status: "sent",
            attachment: s2
          }
        ]), z(""), I(
          s2 ? `${s2.name} attached. Ava is replying.` : "Message sent. Ava is replying."
        ), e2?.(i2 || s2?.name || "Attachment sent"), r2 = i2 || "I attached a file", F.current += 1, S(true), t4 = window.setTimeout(
          () => {
            N2((e3) => {
              let t5;
              return [
                ...e3,
                {
                  id: H.current++,
                  sender: "agent",
                  text: (t5 = r2.toLowerCase()).includes("link") ? "Yes. Links in text and chart annotations stay clickable. Turn on Include links before downloading." : t5.includes("thank") || t5.includes("worked") ? "Happy to help. I\u2019ll keep this thread open in case the board report needs another pass." : t5.includes("file") || t5.includes("attach") ? "Thanks for sending that over. I can see the report and the export settings look ready for a wider layout." : "Open Export, choose PDF, then set Page size to Presentation. Your charts will use the wider layout automatically.",
                  time: _()
                }
              ];
            }), F.current -= 1, S(F.current > 0), I("Ava replied."), Y.current = Y.current.filter((e3) => e3 !== t4);
          },
          a2 ? 240 : 1050
        ), Y.current.push(t4);
      }
    }
    return (0, i.useEffect)(() => {
      let e3 = M.current;
      if (e3) {
        if (!E.current) {
          E.current = true;
          return;
        }
        e3.scrollTo({
          top: e3.scrollHeight,
          behavior: a2 ? "instant" : "smooth"
        });
      }
    }, [w2, P, a2]), (0, i.useEffect)(() => () => Y.current.forEach(window.clearTimeout), []), (0, s.jsxs)("section", {
      className: f().surface,
      "aria-label": "Support conversation",
      children: [
        (0, s.jsxs)("header", {
          className: f().header,
          children: [
            (0, s.jsx)(r.default, {
              className: f().headerPortrait,
              src: j,
              width: 32,
              height: 32,
              alt: ""
            }),
            (0, s.jsxs)("div", {
              className: f().headerText,
              children: [
                (0, s.jsx)("h2", { children: "Exporting charts" }),
                (0, s.jsx)("span", {
                  children: "Ava from support \xB7 Usually replies in 5 min"
                })
              ]
            }),
            (0, s.jsxs)("button", {
              className: `${f().resolve} ${C ? f().resolved : ""}`,
              type: "button",
              onClick: function() {
                let e3 = !C;
                e3 && (Y.current.forEach(window.clearTimeout), Y.current = [], F.current = 0, S(false)), R(e3), I(
                  e3 ? "Conversation marked resolved." : "Conversation reopened."
                ), t2?.(e3);
              },
              children: [
                C ? (0, s.jsx)(d.A, {
                  size: 14,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }) : (0, s.jsx)(c.A, {
                  size: 14,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                C ? "Reopen" : "Resolve"
              ]
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: f().thread,
          ref: M,
          children: [
            (0, s.jsx)("div", {
              className: f().dateDivider,
              children: (0, s.jsx)("span", { children: "Today" })
            }),
            (0, s.jsx)(l.N, {
              initial: false,
              children: w2.map(
                (e3) => (0, s.jsxs)(
                  n.PY1.div,
                  {
                    className: `${f().messageRow} ${"you" === e3.sender ? f().yours : f().theirs}`,
                    initial: !a2 && { opacity: 0, y: 8 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0 },
                    transition: a2 ? { duration: 0 } : v.T.spring.gentle,
                    children: [
                      "agent" === e3.sender && (0, s.jsx)(r.default, {
                        className: f().portrait,
                        src: j,
                        width: 28,
                        height: 28,
                        alt: "Ava"
                      }),
                      (0, s.jsxs)("div", {
                        className: f().messageBody,
                        children: [
                          (0, s.jsxs)("div", {
                            className: f().messageMeta,
                            children: [
                              (0, s.jsx)("strong", {
                                children: "agent" === e3.sender ? "Ava" : "You"
                              }),
                              (0, s.jsx)("span", { children: e3.time })
                            ]
                          }),
                          (0, s.jsx)("p", { children: e3.text }),
                          e3.attachment && (0, s.jsxs)("div", {
                            className: f().attachment,
                            children: [
                              (0, s.jsx)(h.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              (0, s.jsxs)("span", {
                                children: [
                                  (0, s.jsx)("strong", {
                                    children: e3.attachment.name
                                  }),
                                  (0, s.jsxs)("small", {
                                    children: [
                                      e3.attachment.size,
                                      " \xB7 PDF"
                                    ]
                                  })
                                ]
                              })
                            ]
                          }),
                          "agent" === e3.sender && 2 === e3.id && (0, s.jsxs)("button", {
                            className: f().contextAction,
                            type: "button",
                            onClick: () => O((e4) => !e4),
                            children: [
                              (0, s.jsx)(p.A, {
                                size: 14,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              D ? "Hide export settings" : "View export settings"
                            ]
                          }),
                          "agent" === e3.sender && 2 === e3.id && (0, s.jsx)(l.N, {
                            initial: false,
                            children: D && (0, s.jsx)(
                              n.PY1.div,
                              {
                                className: f().settingsWrap,
                                initial: !a2 && { opacity: 0, height: 0 },
                                animate: { opacity: 1, height: "auto" },
                                exit: { opacity: 0, height: 0 },
                                transition: a2 ? { duration: 0 } : v.T.spring.smooth,
                                children: (0, s.jsxs)("div", {
                                  className: f().settings,
                                  children: [
                                    (0, s.jsxs)("div", {
                                      children: [
                                        (0, s.jsx)("strong", {
                                          children: "PDF export settings"
                                        }),
                                        (0, s.jsx)("span", {
                                          children: "Page size \xB7 Presentation"
                                        })
                                      ]
                                    }),
                                    (0, s.jsxs)("div", {
                                      children: [
                                        (0, s.jsx)("strong", {
                                          children: "Include links"
                                        }),
                                        (0, s.jsx)("span", {
                                          children: "On"
                                        })
                                      ]
                                    })
                                  ]
                                })
                              },
                              "settings"
                            )
                          }),
                          "you" === e3.sender && e3.status && (0, s.jsxs)("span", {
                            className: f().delivery,
                            children: [
                              "read" === e3.status ? "Read" : "Sent",
                              " \xB7 ",
                              e3.time
                            ]
                          })
                        ]
                      })
                    ]
                  },
                  e3.id
                )
              )
            }),
            P && !C && (0, s.jsxs)(n.PY1.div, {
              className: `${f().messageRow} ${f().theirs}`,
              initial: !a2 && { opacity: 0, y: 6 },
              animate: { opacity: 1, y: 0 },
              transition: a2 ? { duration: 0 } : v.T.spring.responsive,
              children: [
                (0, s.jsx)(r.default, {
                  className: f().portrait,
                  src: j,
                  width: 28,
                  height: 28,
                  alt: ""
                }),
                (0, s.jsxs)("div", {
                  className: f().typing,
                  "aria-label": "Ava is typing",
                  children: [
                    (0, s.jsx)("span", {}),
                    (0, s.jsx)("span", {}),
                    (0, s.jsx)("span", {}),
                    (0, s.jsx)("span", {
                      className: f().srOnly,
                      children: "Ava is typing"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, s.jsx)(k, {
          className: f().composeArea,
          reduce: !!a2,
          children: (0, s.jsx)(l.N, {
            mode: "popLayout",
            initial: false,
            children: C ? (0, s.jsxs)(
              n.PY1.div,
              {
                className: f().resolvedNotice,
                ...b(!!a2),
                children: [
                  (0, s.jsx)(c.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  }),
                  (0, s.jsx)("span", {
                    children: "Conversation resolved. Reopen it to ask another question."
                  })
                ]
              },
              "resolved"
            ) : (0, s.jsxs)(
              n.PY1.div,
              {
                ...b(!!a2),
                children: [
                  (0, s.jsx)("div", {
                    className: f().suggestions,
                    children: x.map(
                      (e3) => (0, s.jsx)(
                        "button",
                        {
                          type: "button",
                          onClick: () => B(e3),
                          children: e3
                        },
                        e3
                      )
                    )
                  }),
                  (0, s.jsxs)("form", {
                    className: f().composer,
                    onSubmit: (e3) => {
                      e3.preventDefault(), B(T);
                    },
                    children: [
                      (0, s.jsx)("label", {
                        className: f().srOnly,
                        htmlFor: g2,
                        children: "Write a message"
                      }),
                      (0, s.jsx)("input", {
                        id: g2,
                        type: "text",
                        value: T,
                        onChange: (e3) => z(e3.target.value),
                        placeholder: "Write a reply"
                      }),
                      (0, s.jsx)("input", {
                        ref: L,
                        className: f().srOnly,
                        type: "file",
                        accept: "application/pdf,.pdf",
                        onChange: function(e3) {
                          let t3 = e3.target.files?.[0];
                          t3 && (B("", {
                            name: t3.name,
                            size: `${Math.max(1, Math.round(t3.size / 1024))} KB`
                          }), e3.target.value = "");
                        },
                        "aria-label": "Attach a PDF"
                      }),
                      (0, s.jsx)("button", {
                        className: f().attach,
                        type: "button",
                        onClick: () => L.current?.click(),
                        "aria-label": "Attach a PDF",
                        children: (0, s.jsx)(u.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      }),
                      (0, s.jsx)("button", {
                        className: f().send,
                        type: "submit",
                        disabled: !T.trim(),
                        "aria-label": "Send message",
                        children: (0, s.jsx)(m.A, {
                          size: 16,
                          strokeWidth: 2,
                          "aria-hidden": "true"
                        })
                      })
                    ]
                  })
                ]
              },
              "compose"
            )
          })
        }),
        (0, s.jsx)("span", {
          className: f().srOnly,
          role: "status",
          "aria-live": "polite",
          children: W
        })
      ]
    });
  }
  let N = A;
}

__m(__module,__exports,__require);
}