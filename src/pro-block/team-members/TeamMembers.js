function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { TeamMembers: () => q, default: () => H });
  var i = t(95155), n = t(12115), s = t(73051), r = t(18310), l = t(25354), o = t(80642), d = t(9937), m = t(57700), c = t(12363), u = t(64577), p = t(9005), h = t(35484), f = t(20508), g = t(65024), _ = t(92218), b = t(51288), v = t(43298), y = t(98344), x = t(67752), j = t(7770), w = t(18416), N = t.n(w);
  let k = "Fieldnote", T = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, $ = { owner: "Owner", admin: "Admin", member: "Member", viewer: "Viewer" }, A = [
    { value: "admin", hint: "Manages members, billing, and settings" },
    { value: "member", hint: "Creates and edits projects" },
    { value: "viewer", hint: "Views and comments, no editing" }
  ], S = [
    {
      id: "emma",
      name: "Emma Collins",
      email: "emma@fieldnote.example",
      photo: (0, x.my)("emma-collins"),
      role: "owner",
      active: "Active now",
      online: true,
      you: true
    },
    {
      id: "ava",
      name: "Ava Mitchell",
      email: "ava@fieldnote.example",
      photo: (0, x.my)("ava-mitchell"),
      role: "admin",
      active: "Active now",
      online: true
    },
    {
      id: "marcus",
      name: "Marcus Johnson",
      email: "marcus@fieldnote.example",
      photo: (0, x.my)("marcus-johnson"),
      role: "member",
      active: "Active 2 hours ago"
    },
    {
      id: "jasmine",
      name: "Jasmine Brooks",
      email: "jasmine@fieldnote.example",
      photo: (0, x.my)("jasmine-brooks"),
      role: "member",
      active: "Active yesterday"
    },
    {
      id: "sofia",
      name: "Sofia Ramirez",
      email: "sofia@fieldnote.example",
      photo: (0, x.my)("sofia-ramirez"),
      role: "viewer",
      active: "Active Sep 14"
    }
  ], R = [
    {
      id: "jordan",
      email: "jordan.blake@fieldnote.example",
      role: "member",
      sent: "Invited Sep 19"
    },
    {
      id: "priya",
      email: "priya.shah@harborline.studio",
      role: "viewer",
      sent: "Invited Sep 20"
    }
  ], { spring: C, duration: I, blur: M } = j.T, P = [...j.T.ease.enter], z = [...j.T.ease.standard], E = { duration: 0 }, O = (e2) => "admin" === e2 ? "an admin" : `a ${e2}`, L = {
    enter: { opacity: 0, scale: 0.9, filter: `blur(${M.soft}px)` },
    rest: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: (e2) => "sent" === e2 ? { opacity: 0, transition: E } : {
      opacity: 0,
      scale: 0.9,
      filter: `blur(${M.soft}px)`,
      transition: { duration: I.exit, ease: z }
    }
  }, D = {
    ...C.snappy,
    opacity: { duration: I.fast, ease: P },
    filter: { duration: I.fast, ease: P },
    layout: C.morph
  };
  function F() {
    let e2 = (0, n.useRef)(null), [a2, t2] = (0, n.useState)("auto");
    return (0, n.useEffect)(() => {
      let a3 = e2.current;
      if (!a3 || "u" < typeof ResizeObserver) return;
      let i2 = new ResizeObserver(() => t2(a3.offsetHeight));
      return i2.observe(a3), () => i2.disconnect();
    }, []), [e2, a2];
  }
  function B({
    children: e2,
    className: a2,
    fade: t2 = true,
    open: n2 = false,
    confirming: s2 = false
  }) {
    let o2 = (0, r.I)(), [d2, m2] = F();
    return (0, i.jsx)(l.PY1.li, {
      className: a2,
      "data-confirming": s2 || void 0,
      style: { overflow: n2 ? "visible" : "hidden" },
      initial: { height: 0, opacity: +!t2 },
      animate: { height: m2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: o2 ? E : { height: C.smooth, opacity: { duration: I.fast, ease: z } }
      },
      transition: o2 ? E : { height: C.smooth, opacity: { duration: I.standard, ease: P } },
      children: (0, i.jsx)("div", { ref: d2, children: e2 })
    });
  }
  function Y({ text: e2 }) {
    let a2 = (0, r.I)();
    return (0, i.jsx)("span", {
      className: N().swap,
      "aria-hidden": "true",
      children: (0, i.jsx)(o.N, {
        mode: "popLayout",
        initial: false,
        children: (0, i.jsx)(
          l.PY1.span,
          {
            className: N().swapText,
            initial: a2 ? { opacity: 0 } : { opacity: 0, y: "0.45em", filter: `blur(${M.soft}px)` },
            animate: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: a2 ? { opacity: 0, transition: E } : {
              opacity: 0,
              y: "-0.35em",
              filter: `blur(${M.subtle}px)`,
              transition: { duration: I.fast, ease: z }
            },
            transition: a2 ? { duration: I.instant } : { duration: I.standard, ease: P },
            children: e2
          },
          e2
        )
      })
    });
  }
  function W({ label: e2, value: a2, onChange: t2, field: n2 = false, disabled: r2 }) {
    return (0, i.jsxs)(s.bL, {
      value: a2,
      onValueChange: (e3) => t2(e3),
      disabled: r2,
      children: [
        (0, i.jsxs)(s.l9, {
          className: [N().roleTrigger, n2 ? N().roleField : ""].filter(Boolean).join(" "),
          "aria-label": e2,
          children: [
            (0, i.jsx)("span", {
              className: N().srOnly,
              children: (0, i.jsx)(s.WT, {})
            }),
            (0, i.jsx)("span", {
              "aria-hidden": "true",
              children: (0, i.jsx)(y.g, { children: $[a2] })
            }),
            (0, i.jsx)(s.In, {
              className: N().roleChevron,
              children: (0, i.jsx)(c.A, {
                size: 14,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            })
          ]
        }),
        (0, i.jsx)(s.ZL, {
          children: (0, i.jsx)(s.UC, {
            className: N().roleMenu,
            position: "popper",
            align: "end",
            sideOffset: 6,
            collisionPadding: 12,
            children: (0, i.jsx)(s.LM, {
              children: A.map(
                (e3) => (0, i.jsxs)(
                  s.q7,
                  {
                    value: e3.value,
                    className: N().roleItem,
                    children: [
                      (0, i.jsxs)("span", {
                        className: N().roleItemText,
                        children: [
                          (0, i.jsx)(s.p4, { children: $[e3.value] }),
                          (0, i.jsx)("span", {
                            className: N().roleHint,
                            children: e3.hint
                          })
                        ]
                      }),
                      (0, i.jsx)(s.VF, {
                        className: N().roleCheck,
                        children: (0, i.jsx)(u.A, {
                          size: 16,
                          strokeWidth: 2,
                          "aria-hidden": "true"
                        })
                      })
                    ]
                  },
                  e3.value
                )
              )
            })
          })
        })
      ]
    });
  }
  function q() {
    let e2 = (0, n.useId)(), a2 = (0, r.I)(), [t2, s2] = (0, n.useState)(S), [c2, y2] = (0, n.useState)(R), [x2, w2] = (0, n.useState)([]), [A2, q2] = (0, n.useState)(""), [H2, J] = (0, n.useState)(""), [U, Q] = (0, n.useState)("member"), [V, X] = (0, n.useState)(false), [K, Z] = (0, n.useState)("removed"), [G, ee] = (0, n.useState)([]), [ea, et] = (0, n.useState)({}), [ei, en] = (0, n.useState)(""), [es, er] = (0, n.useState)(null), [el, eo] = (0, n.useState)("Changes apply right away"), ed = (0, n.useRef)(null), em = (0, n.useRef)(null), ec = (0, n.useRef)(null), eu = (0, n.useRef)(/* @__PURE__ */ new Map()), ep = (0, n.useRef)(/* @__PURE__ */ new Map()), eh = (0, n.useRef)(0), ef = (0, n.useRef)([]), [eg, e_] = F(), [eb, ev] = F();
    (0, n.useEffect)(() => {
      let e3 = ef.current;
      return () => e3.forEach(window.clearTimeout);
    }, []), (0, n.useEffect)(() => {
      es && requestAnimationFrame(() => ec.current?.focus({ preventScroll: true }));
    }, [es]);
    let ey = t2.length + c2.length, ex = Math.max(0, 10 - ey), ej = x2.length - ex, ew = ei.trim().toLowerCase(), eN = t2.filter(
      (e3) => !ew || e3.name.toLowerCase().includes(ew) || e3.email.includes(ew)
    ), ek = c2.filter((e3) => !ew || e3.email.includes(ew)), eT = x2.length + +!!T.test(A2.trim().toLowerCase()), e$ = H2 ? { tone: "error", text: H2 } : ej > 0 ? {
      tone: "warning",
      text: 0 === ex ? "All 10 seats are taken. Remove someone or revoke an invite first" : `${ex} ${1 === ex ? "seat" : "seats"} left. Remove ${ej} ${1 === ej ? "address" : "addresses"} to send`
    } : 0 === ex ? { tone: "warning", text: "All 10 seats are taken" } : {
      tone: "hint",
      text: "Separate addresses with commas or press Enter. Invites expire in 7 days"
    };
    function eA(e3, a3) {
      ef.current.push(window.setTimeout(e3, a3));
    }
    function eS(e3) {
      requestAnimationFrame(() => {
        e3?.isConnected && e3.focus({ preventScroll: true });
      });
    }
    function eR(e3) {
      let a3 = [...x2], i2 = [], n2 = "";
      for (let s3 of e3.split(/[\s,;]+/)) {
        let e4 = s3.replace(/^<|>$/g, "").toLowerCase();
        if (!e4) continue;
        let r2 = t2.find((a4) => a4.email === e4);
        T.test(e4) ? r2 ? n2 || (n2 = `${r2.name} is already a member`) : c2.some((a4) => a4.email === e4) ? n2 || (n2 = `${e4} already has a pending invite`) : a3.includes(e4) || a3.push(e4) : (i2.push(s3), n2 || (n2 = `\u201C${s3}\u201D is not a complete email address`));
      }
      return w2(a3), q2(i2.join(", ")), J(n2), { next: a3, problem: n2 };
    }
    function eC(e3) {
      Z("removed"), w2((a3) => a3.filter((a4) => a4 !== e3)), J(""), eo(`Removed ${e3} from the invite`);
    }
    function eI() {
      if (V) return;
      let { next: e3, problem: a3 } = A2.trim() ? eR(A2) : { next: x2, problem: "" };
      if (!a3) {
        if (!e3.length) {
          J("Add at least one email address"), ed.current?.focus();
          return;
        }
        e3.length > ex || (X(true), J(""), en(""), er(null), eA(() => {
          let a4 = e3.map((e4) => ({
            id: `sent-${++eh.current}`,
            email: e4,
            role: U,
            sent: "Invited just now"
          }));
          Z("sent"), w2([]), y2((e4) => [...e4, ...a4]), ee(a4.map((e4) => e4.id)), X(false), eo(
            1 === a4.length ? `Invited ${a4[0].email} as ${O(U)}` : `Invited ${a4.length} people as ${"admin" === U ? "admins" : `${U}s`}`
          ), ed.current?.focus({ preventScroll: true }), eA(() => ee([]), 1400);
        }, 700));
      }
    }
    function eM(e3) {
      er(null), requestAnimationFrame(() => eS(eu.current.get(e3)));
    }
    let eP = a2 ? { opacity: 0 } : { opacity: 0, y: 6, filter: `blur(${M.soft}px)` }, ez = a2 ? { opacity: 0, transition: E } : {
      opacity: 0,
      y: -4,
      filter: `blur(${M.soft}px)`,
      transition: { duration: I.exit, ease: z }
    }, eE = a2 ? E : {
      ...C.smooth,
      opacity: { duration: I.standard, ease: P },
      filter: { duration: I.standard, ease: P }
    };
    return (0, i.jsx)(d.x, {
      reducedMotion: "user",
      children: (0, i.jsx)(m.o, {
        id: e2,
        children: (0, i.jsxs)("section", {
          className: N().block,
          "aria-labelledby": `${e2}-title`,
          children: [
            (0, i.jsxs)("header", {
              className: N().header,
              children: [
                (0, i.jsxs)("div", {
                  className: N().heading,
                  children: [
                    (0, i.jsx)("h2", { id: `${e2}-title`, children: "Members" }),
                    (0, i.jsxs)("p", {
                      children: [
                        "Manage who can work in the ",
                        k,
                        " workspace."
                      ]
                    })
                  ]
                }),
                (0, i.jsxs)("div", {
                  className: N().seats,
                  "data-full": 0 === ex || void 0,
                  children: [
                    (0, i.jsxs)("p", {
                      className: N().seatText,
                      children: [
                        (0, i.jsx)("span", {
                          className: N().number,
                          children: (0, i.jsx)(g.q, { value: ey })
                        }),
                        " of ",
                        10,
                        " seats"
                      ]
                    }),
                    (0, i.jsx)("div", {
                      className: N().seatTrack,
                      role: "meter",
                      "aria-label": "Seats used",
                      "aria-valuemin": 0,
                      "aria-valuemax": 10,
                      "aria-valuenow": ey,
                      "aria-valuetext": `${ey} of 10 seats used`,
                      children: (0, i.jsx)(l.PY1.span, {
                        className: N().seatFill,
                        initial: false,
                        animate: { width: `${100 * Math.min(ey / 10, 1)}%` },
                        transition: a2 ? E : C.morph
                      })
                    })
                  ]
                })
              ]
            }),
            (0, i.jsxs)("form", {
              className: N().invite,
              noValidate: true,
              onSubmit: (e3) => {
                e3.preventDefault(), eI();
              },
              children: [
                (0, i.jsx)("label", {
                  className: N().inviteLabel,
                  htmlFor: `${e2}-invite`,
                  children: "Invite people"
                }),
                (0, i.jsxs)("div", {
                  className: N().inviteRow,
                  children: [
                    (0, i.jsx)(l.PY1.div, {
                      className: N().field,
                      "data-invalid": H2 ? "" : void 0,
                      initial: false,
                      animate: { height: "auto" === e_ ? "auto" : e_ + 2 },
                      transition: a2 ? E : C.smooth,
                      onPointerDown: (e3) => {
                        e3.target.closest("button, input") || (e3.preventDefault(), ed.current?.focus());
                      },
                      children: (0, i.jsxs)("div", {
                        ref: eg,
                        className: N().fieldInner,
                        children: [
                          (0, i.jsx)(o.N, {
                            mode: "popLayout",
                            initial: false,
                            custom: K,
                            children: x2.map(
                              (e3) => (0, i.jsxs)(
                                l.PY1.span,
                                {
                                  layoutId: `invite-${e3}`,
                                  className: N().chip,
                                  custom: K,
                                  variants: L,
                                  initial: "enter",
                                  animate: "rest",
                                  exit: "exit",
                                  transition: a2 ? E : D,
                                  children: [
                                    (0, i.jsx)("span", {
                                      className: N().chipText,
                                      children: e3
                                    }),
                                    (0, i.jsx)("button", {
                                      type: "button",
                                      className: N().chipRemove,
                                      "aria-label": `Remove ${e3}`,
                                      disabled: V,
                                      onClick: () => {
                                        eC(e3), ed.current?.focus();
                                      },
                                      children: (0, i.jsx)(p.A, {
                                        size: 12,
                                        strokeWidth: 2,
                                        "aria-hidden": "true"
                                      })
                                    })
                                  ]
                                },
                                e3
                              )
                            )
                          }),
                          (0, i.jsx)(l.PY1.input, {
                            layout: "position",
                            transition: a2 ? E : { layout: C.morph },
                            ref: ed,
                            id: `${e2}-invite`,
                            className: N().draft,
                            type: "text",
                            inputMode: "email",
                            autoComplete: "off",
                            autoCapitalize: "off",
                            spellCheck: false,
                            placeholder: x2.length ? "" : "name@example.com",
                            value: A2,
                            readOnly: V,
                            "aria-invalid": !!H2 || void 0,
                            "aria-describedby": `${e2}-message`,
                            onChange: (e3) => {
                              q2(e3.target.value), H2 && J("");
                            },
                            onKeyDown: function(e3) {
                              if ("Enter" === e3.key) {
                                e3.preventDefault(), A2.trim() ? eR(A2) : x2.length && eI();
                                return;
                              }
                              if (("," === e3.key || ";" === e3.key || " " === e3.key) && A2.trim()) {
                                e3.preventDefault(), eR(A2);
                                return;
                              }
                              "Backspace" !== e3.key || A2 || !x2.length || V || (e3.preventDefault(), eC(x2[x2.length - 1]));
                            },
                            onPaste: function(e3) {
                              let a3 = e3.clipboardData.getData("text");
                              /[\s,;]/.test(a3.trim()) && (e3.preventDefault(), eR(`${A2} ${a3}`));
                            },
                            onBlur: () => {
                              !V && T.test(A2.trim().toLowerCase()) && eR(A2);
                            }
                          })
                        ]
                      })
                    }),
                    (0, i.jsxs)("div", {
                      className: N().inviteActions,
                      children: [
                        (0, i.jsx)(W, {
                          field: true,
                          label: "Invite as",
                          value: U,
                          onChange: Q,
                          disabled: V
                        }),
                        (0, i.jsx)(b.$, {
                          type: "submit",
                          size: "sm",
                          loading: V,
                          disabled: !V && (!x2.length && !A2.trim() || ej > 0),
                          children: eT > 1 ? `Send ${eT} invites` : "Send invite"
                        })
                      ]
                    })
                  ]
                }),
                (0, i.jsx)(l.PY1.div, {
                  className: N().messageSlot,
                  initial: false,
                  animate: { height: ev },
                  transition: a2 ? E : C.smooth,
                  children: (0, i.jsx)("div", {
                    ref: eb,
                    id: `${e2}-message`,
                    className: N().messageInner,
                    "aria-live": "polite",
                    children: (0, i.jsx)(o.N, {
                      mode: "popLayout",
                      initial: false,
                      children: (0, i.jsxs)(
                        l.PY1.p,
                        {
                          className: N().message,
                          "data-tone": e$.tone,
                          initial: eP,
                          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                          exit: ez,
                          transition: a2 ? E : { duration: I.standard, ease: P },
                          children: [
                            "hint" !== e$.tone && (0, i.jsx)(h.A, {
                              size: 14,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            }),
                            (0, i.jsx)("span", { children: e$.text })
                          ]
                        },
                        e$.text
                      )
                    })
                  })
                })
              ]
            }),
            (0, i.jsxs)("div", {
              className: N().lists,
              children: [
                (0, i.jsxs)("div", {
                  className: N().sectionHead,
                  children: [
                    (0, i.jsxs)("h3", {
                      id: `${e2}-members`,
                      className: N().sectionTitle,
                      children: [
                        "Members ",
                        (0, i.jsx)("span", {
                          className: N().count,
                          children: (0, i.jsx)(g.q, { value: eN.length })
                        })
                      ]
                    }),
                    (0, i.jsx)("div", {
                      className: N().search,
                      children: (0, i.jsx)(v.L, {
                        ref: em,
                        label: "Search people",
                        placeholder: "Search by name or email",
                        value: ei,
                        onValueChange: (e3) => {
                          en(e3), er(null);
                        }
                      })
                    })
                  ]
                }),
                (0, i.jsx)("ul", {
                  className: N().list,
                  "aria-labelledby": `${e2}-members`,
                  children: (0, i.jsxs)(o.N, {
                    initial: false,
                    children: [
                      eN.map((e3) => {
                        let a3 = es === e3.id;
                        return (0, i.jsx)(
                          B,
                          {
                            className: N().row,
                            confirming: a3,
                            children: (0, i.jsxs)("div", {
                              className: N().rowInner,
                              children: [
                                (0, i.jsx)(_.e, {
                                  name: e3.name,
                                  src: e3.photo,
                                  status: e3.online ? "online" : void 0
                                }),
                                (0, i.jsx)("div", {
                                  className: N().rowBody,
                                  onKeyDown: (t3) => {
                                    "Escape" === t3.key && a3 && (t3.stopPropagation(), eM(e3.id));
                                  },
                                  children: (0, i.jsx)(o.N, {
                                    mode: "popLayout",
                                    initial: false,
                                    children: a3 ? (0, i.jsxs)(
                                      l.PY1.div,
                                      {
                                        className: N().confirm,
                                        initial: eP,
                                        animate: {
                                          opacity: 1,
                                          y: 0,
                                          filter: "blur(0px)"
                                        },
                                        exit: ez,
                                        transition: eE,
                                        children: [
                                          (0, i.jsxs)("div", {
                                            className: N().identity,
                                            children: [
                                              (0, i.jsxs)("span", {
                                                className: N().name,
                                                children: [
                                                  "Remove ",
                                                  e3.name,
                                                  "?"
                                                ]
                                              }),
                                              (0, i.jsxs)("span", {
                                                className: N().detail,
                                                children: [
                                                  "They lose access to ",
                                                  k,
                                                  " right away"
                                                ]
                                              })
                                            ]
                                          }),
                                          (0, i.jsxs)("div", {
                                            className: N().confirmActions,
                                            children: [
                                              (0, i.jsx)(b.$, {
                                                ref: ec,
                                                type: "button",
                                                variant: "secondary",
                                                size: "sm",
                                                onClick: () => eM(e3.id),
                                                children: "Cancel"
                                              }),
                                              (0, i.jsx)(b.$, {
                                                type: "button",
                                                variant: "danger",
                                                size: "sm",
                                                onClick: () => {
                                                  let a4, t3, i2;
                                                  return t3 = (a4 = eN.filter(
                                                    (e4) => !e4.you
                                                  )).findIndex(
                                                    (a5) => a5.id === e3.id
                                                  ), i2 = a4[t3 + 1] ?? a4[t3 - 1], void (s2(
                                                    (a5) => a5.filter(
                                                      (a6) => a6.id !== e3.id
                                                    )
                                                  ), er(null), eo(
                                                    `${e3.name} was removed from ${k}`
                                                  ), eS(
                                                    i2 ? eu.current.get(
                                                      i2.id
                                                    ) : em.current
                                                  ));
                                                },
                                                children: "Remove"
                                              })
                                            ]
                                          })
                                        ]
                                      },
                                      "confirm"
                                    ) : (0, i.jsxs)(
                                      l.PY1.div,
                                      {
                                        className: N().view,
                                        initial: eP,
                                        animate: {
                                          opacity: 1,
                                          y: 0,
                                          filter: "blur(0px)"
                                        },
                                        exit: ez,
                                        transition: eE,
                                        children: [
                                          (0, i.jsxs)("div", {
                                            className: N().identity,
                                            children: [
                                              (0, i.jsxs)("span", {
                                                className: N().name,
                                                children: [
                                                  e3.name,
                                                  e3.you && (0, i.jsx)("span", {
                                                    className: N().you,
                                                    children: "You"
                                                  })
                                                ]
                                              }),
                                              (0, i.jsx)("span", {
                                                className: N().detail,
                                                children: e3.email
                                              }),
                                              (0, i.jsx)("span", {
                                                className: `${N().detail} ${N().activeInline}`,
                                                children: e3.active
                                              })
                                            ]
                                          }),
                                          (0, i.jsx)("span", {
                                            className: N().active,
                                            children: e3.active
                                          }),
                                          "owner" === e3.role ? (0, i.jsx)("span", {
                                            className: N().owner,
                                            children: "Owner"
                                          }) : (0, i.jsx)(W, {
                                            label: `Role for ${e3.name}`,
                                            value: e3.role,
                                            onChange: (a4) => {
                                              s2(
                                                (t3) => t3.map(
                                                  (t4) => t4.id === e3.id ? { ...t4, role: a4 } : t4
                                                )
                                              ), eo(
                                                `${e3.name} is now ${O(a4)}`
                                              );
                                            }
                                          }),
                                          e3.you ? (0, i.jsx)("span", {
                                            className: N().spacer,
                                            "aria-hidden": "true"
                                          }) : (0, i.jsx)(b.$, {
                                            ref: (a4) => {
                                              a4 && eu.current.set(e3.id, a4);
                                            },
                                            type: "button",
                                            variant: "ghost",
                                            size: "sm",
                                            className: N().iconButton,
                                            "aria-label": `Remove ${e3.name}`,
                                            onClick: () => er(e3.id),
                                            children: (0, i.jsx)(f.A, {
                                              size: 16,
                                              strokeWidth: 1.75,
                                              "aria-hidden": "true"
                                            })
                                          })
                                        ]
                                      },
                                      "view"
                                    )
                                  })
                                })
                              ]
                            })
                          },
                          e3.id
                        );
                      }),
                      0 === eN.length && (0, i.jsx)(
                        B,
                        {
                          className: N().emptyRow,
                          children: (0, i.jsxs)("div", {
                            className: N().empty,
                            children: [
                              (0, i.jsxs)("p", {
                                children: [
                                  "No members match \u201C",
                                  ei.trim(),
                                  "\u201D"
                                ]
                              }),
                              (0, i.jsx)(b.$, {
                                type: "button",
                                variant: "secondary",
                                size: "sm",
                                onClick: () => {
                                  en(""), em.current?.focus();
                                },
                                children: "Clear search"
                              })
                            ]
                          })
                        },
                        "members-empty"
                      )
                    ]
                  })
                }),
                (0, i.jsx)("div", {
                  className: N().sectionHead,
                  children: (0, i.jsxs)("h3", {
                    id: `${e2}-pending`,
                    className: N().sectionTitle,
                    children: [
                      "Pending invites ",
                      (0, i.jsx)("span", {
                        className: N().count,
                        children: (0, i.jsx)(g.q, { value: ek.length })
                      })
                    ]
                  })
                }),
                (0, i.jsx)("ul", {
                  className: N().list,
                  "aria-labelledby": `${e2}-pending`,
                  children: (0, i.jsxs)(o.N, {
                    initial: false,
                    children: [
                      ek.map((e3) => {
                        let t3 = G.indexOf(e3.id), n2 = t3 >= 0, s3 = ea[e3.id], r2 = a2 ? E : {
                          duration: I.standard,
                          ease: P,
                          delay: 0.24 + Math.max(t3, 0) * j.T.stagger.line
                        };
                        return (0, i.jsx)(
                          B,
                          {
                            className: N().row,
                            fade: !n2,
                            open: n2,
                            children: (0, i.jsxs)("div", {
                              className: N().rowInner,
                              children: [
                                (0, i.jsx)(l.PY1.span, {
                                  className: N().pendingAvatar,
                                  "aria-hidden": "true",
                                  initial: !!n2 && { opacity: 0, scale: 0.6 },
                                  animate: { opacity: 1, scale: 1 },
                                  transition: a2 ? E : {
                                    ...C.snappy,
                                    delay: 0.2 + Math.max(t3, 0) * j.T.stagger.line
                                  },
                                  children: e3.email.split("@")[0].split(/[._-]+/).filter(Boolean).slice(0, 2).map((e4) => e4[0].toUpperCase()).join("")
                                }),
                                (0, i.jsxs)("div", {
                                  className: N().pendingBody,
                                  children: [
                                    (0, i.jsxs)("div", {
                                      className: N().identity,
                                      children: [
                                        (0, i.jsx)(l.PY1.span, {
                                          layoutId: `invite-${e3.email}`,
                                          layout: "position",
                                          layoutCrossfade: false,
                                          className: [
                                            N().inviteEmail,
                                            n2 ? N().landing : ""
                                          ].filter(Boolean).join(" "),
                                          transition: a2 ? E : {
                                            layout: {
                                              ...C.morph,
                                              visualDuration: 0.5 + 0.06 * Math.max(t3, 0)
                                            }
                                          },
                                          children: e3.email
                                        }),
                                        (0, i.jsxs)(l.PY1.span, {
                                          className: N().detail,
                                          initial: !!n2 && { opacity: 0 },
                                          animate: { opacity: 1 },
                                          transition: r2,
                                          children: [
                                            (0, i.jsxs)("span", {
                                              className: N().srOnly,
                                              children: [
                                                $[e3.role],
                                                ", ",
                                                e3.sent
                                              ]
                                            }),
                                            (0, i.jsx)(Y, {
                                              text: `${$[e3.role]} \xB7 ${e3.sent}`
                                            })
                                          ]
                                        })
                                      ]
                                    }),
                                    (0, i.jsxs)(l.PY1.div, {
                                      className: N().pendingActions,
                                      initial: !!n2 && { opacity: 0, y: 4 },
                                      animate: { opacity: 1, y: 0 },
                                      transition: r2,
                                      children: [
                                        (0, i.jsx)(b.$, {
                                          type: "button",
                                          variant: "ghost",
                                          size: "sm",
                                          loading: "sending" === s3,
                                          "aria-label": "sent" === s3 ? `Sent, invite to ${e3.email} resent` : `Resend invite to ${e3.email}`,
                                          onClick: () => {
                                            ea[e3.id] || (et((a3) => ({
                                              ...a3,
                                              [e3.id]: "sending"
                                            })), eA(() => {
                                              et((a3) => ({
                                                ...a3,
                                                [e3.id]: "sent"
                                              })), y2(
                                                (a3) => a3.map(
                                                  (a4) => a4.id === e3.id ? {
                                                    ...a4,
                                                    sent: "Resent just now"
                                                  } : a4
                                                )
                                              ), eo(
                                                `Invite resent to ${e3.email}`
                                              ), eA(
                                                () => et((a3) => {
                                                  let t4 = { ...a3 };
                                                  return delete t4[e3.id], t4;
                                                }),
                                                1800
                                              );
                                            }, 600));
                                          },
                                          children: "sent" === s3 ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                              (0, i.jsx)(u.A, {
                                                size: 15,
                                                strokeWidth: 2,
                                                "aria-hidden": "true"
                                              }),
                                              " Sent"
                                            ]
                                          }) : "Resend"
                                        }),
                                        (0, i.jsx)(b.$, {
                                          ref: (a3) => {
                                            a3 && ep.current.set(e3.id, a3);
                                          },
                                          type: "button",
                                          variant: "ghost",
                                          size: "sm",
                                          "aria-label": `Revoke invite to ${e3.email}`,
                                          onClick: () => {
                                            let a3, t4;
                                            return a3 = ek.findIndex(
                                              (a4) => a4.id === e3.id
                                            ), t4 = ek[a3 + 1] ?? ek[a3 - 1], void (y2(
                                              (a4) => a4.filter((a5) => a5.id !== e3.id)
                                            ), eo(
                                              `Invite to ${e3.email} revoked`
                                            ), eS(
                                              t4 ? ep.current.get(t4.id) : ed.current
                                            ));
                                          },
                                          children: "Revoke"
                                        })
                                      ]
                                    })
                                  ]
                                })
                              ]
                            })
                          },
                          e3.id
                        );
                      }),
                      0 === ek.length && (0, i.jsx)(
                        B,
                        {
                          className: N().emptyRow,
                          children: (0, i.jsx)("p", {
                            className: N().emptyLine,
                            children: ew && c2.length ? "No invites match your search" : "No pending invites"
                          })
                        },
                        "invites-empty"
                      )
                    ]
                  })
                })
              ]
            }),
            (0, i.jsxs)("footer", {
              className: N().footer,
              children: [
                (0, i.jsx)("p", {
                  className: N().srOnly,
                  role: "status",
                  "aria-live": "polite",
                  children: el
                }),
                (0, i.jsx)("span", {
                  className: N().status,
                  children: (0, i.jsx)(Y, { text: el })
                })
              ]
            })
          ]
        })
      })
    });
  }
  let H = q;
}

__m(__module,__exports,__require);
}