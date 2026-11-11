function(__module,__exports,__require){
"use strict";
function __m(e, a, i) {
  "use strict";
  i.r(a), i.d(a, { InboxTriage: () => v, default: () => _ });
  var t = i(95155), n = i(12115), o = i(18310), r = i(25354), s = i(80642), l = i(32159), d = i(59103), c = i(92298), h = i(92218), u = i(51288), m = i(67752), p = i(7770), g = i(31328), b = i.n(g);
  let x = [
    {
      id: "emma",
      name: "Emma Collins",
      photo: (0, m.my)("emma-collins"),
      subject: "The latest prototype is ready",
      preview: "I tightened the handoff flow and left a few notes for review.",
      body: "I tightened the handoff flow and added notes around the empty states. The prototype is ready for a second look when you have a moment.",
      time: "9:42 AM",
      folder: "inbox",
      unread: true
    },
    {
      id: "marcus",
      name: "Marcus Johnson",
      photo: (0, m.my)("marcus-johnson"),
      subject: "Component review for Thursday",
      preview: "Could we look at the table and menu states together?",
      body: "Could we look at the table and menu states together on Thursday? I have two small interaction questions and a short list of things that are already in good shape.",
      time: "8:18 AM",
      folder: "inbox",
      unread: true
    },
    {
      id: "ava",
      name: "Ava Mitchell",
      photo: (0, m.my)("ava-mitchell"),
      subject: "Notes from the design review",
      preview: "The team aligned on the next pass for onboarding.",
      body: "The team aligned on the next pass for onboarding. I pulled the decisions into one note so the next iteration has a clear starting point.",
      time: "Yesterday",
      folder: "inbox",
      unread: false
    },
    {
      id: "jasmine",
      name: "Jasmine Brooks",
      photo: (0, m.my)("jasmine-brooks"),
      subject: "Preview environment is ready",
      preview: "The new preview is up with the interaction fixes.",
      body: "The new preview is up with the interaction fixes. You can check the keyboard path and responsive states whenever you are ready.",
      time: "Yesterday",
      folder: "inbox",
      unread: false
    },
    {
      id: "daniel",
      name: "Daniel Kim",
      photo: (0, m.my)("daniel-kim"),
      subject: "Webhook retries are live",
      preview: "Failed deliveries now retry five times over an hour.",
      body: "Failed deliveries now retry five times over an hour, with the attempt log on each event. Nothing to do on your side unless you want a longer window.",
      time: "Tue",
      folder: "inbox",
      unread: false
    },
    {
      id: "sofia",
      name: "Sofia Ramirez",
      photo: (0, m.my)("sofia-ramirez"),
      subject: "A time for our next check-in",
      preview: "Moving this to next week so we can review the final pass.",
      body: "Moving this to next week so we can review the final pass together. I will share a short agenda before we meet.",
      time: "Mon",
      folder: "snoozed",
      unread: false
    }
  ], f = [
    { value: "inbox", label: "Inbox" },
    { value: "snoozed", label: "Snoozed" },
    { value: "archive", label: "Archive" }
  ], w = { inbox: "Moved to Inbox", snoozed: "Snoozed", archive: "Archived" };
  function v() {
    let e2 = (0, n.useId)(), a2 = !!(0, o.I)(), [i2, m2] = (0, n.useState)(x), [g2, v2] = (0, n.useState)("inbox"), [_2, y] = (0, n.useState)(false), [j, k] = (0, n.useState)(null), [N, A] = (0, n.useState)(null), z = (0, n.useRef)(/* @__PURE__ */ new Map()), C = (0, n.useRef)(null), T = (0, n.useRef)(null), I = i2.filter((e3) => e3.folder === g2 && ("inbox" !== g2 || !_2 || e3.unread)), $ = i2.filter((e3) => "inbox" === e3.folder && e3.unread).length, M = a2 ? { duration: 0 } : p.T.spring.smooth;
    function S(e3, a3) {
      let i3 = I.findIndex((a4) => a4.id === e3.id), t2 = I[i3 + 1] ?? I[i3 - 1];
      m2(
        (i4) => i4.map(
          (i5) => i5.id === e3.id ? { ...i5, folder: a3, unread: "inbox" === a3 && i5.unread } : i5
        )
      ), A({
        id: e3.id,
        subject: e3.subject,
        from: e3.folder,
        to: a3,
        unread: e3.unread
      }), k(null), T.current = t2 ? t2.id : "title";
    }
    function P(e3) {
      v2(e3), k(null);
    }
    (0, n.useEffect)(() => {
      let e3 = T.current;
      e3 && (T.current = null, "title" === e3 ? C.current?.focus() : z.current.get(e3)?.focus());
    });
    let R = {
      key: "archive",
      label: "Archive",
      shortcut: "E",
      icon: l.A,
      to: "archive"
    }, E = "inbox" === g2 ? [
      {
        key: "snooze",
        label: "Snooze",
        shortcut: "S",
        icon: d.A,
        to: "snoozed"
      },
      R
    ] : [
      {
        key: "restore",
        label: "Move to Inbox",
        shortcut: "U",
        icon: c.A,
        to: "inbox"
      },
      ..."snoozed" === g2 ? [R] : []
    ], D = "inbox" === g2 && _2 ? {
      title: "Nothing unread",
      body: "You are caught up.",
      action: "Show all"
    } : "inbox" === g2 ? {
      title: "Inbox zero",
      body: "Archived messages stay searchable.",
      action: "View archive"
    } : "snoozed" === g2 ? {
      title: "Nothing snoozed",
      body: "Snoozed messages wait here until you bring them back.",
      action: "Back to inbox"
    } : {
      title: "Archive is empty",
      body: "Messages you archive land here.",
      action: "Back to inbox"
    };
    return (0, t.jsxs)("section", {
      className: b().triage,
      "aria-labelledby": `${e2}-title`,
      children: [
        (0, t.jsxs)("header", {
          className: b().header,
          children: [
            (0, t.jsxs)("div", {
              className: b().titleRow,
              children: [
                (0, t.jsx)("h2", {
                  id: `${e2}-title`,
                  ref: C,
                  tabIndex: -1,
                  children: "Messages"
                }),
                (0, t.jsxs)("span", {
                  className: b().unreadCount,
                  children: [$, " unread"]
                }),
                (0, t.jsxs)("button", {
                  type: "button",
                  className: b().filter,
                  "aria-pressed": _2,
                  disabled: "inbox" !== g2,
                  onClick: () => {
                    y((e3) => !e3), k(null);
                  },
                  children: [
                    (0, t.jsx)("span", {
                      className: b().filterDot,
                      "aria-hidden": "true"
                    }),
                    "Unread only"
                  ]
                })
              ]
            }),
            (0, t.jsx)("div", {
              className: b().tabs,
              role: "tablist",
              "aria-label": "Folders",
              onKeyDown: function(e3) {
                if ("ArrowRight" !== e3.key && "ArrowLeft" !== e3.key) return;
                e3.preventDefault();
                let a3 = f.findIndex((e4) => e4.value === g2), i3 = f[(a3 + ("ArrowRight" === e3.key ? 1 : f.length - 1)) % f.length];
                P(i3.value), e3.currentTarget.querySelector(`[data-folder="${i3.value}"]`)?.focus();
              },
              children: f.map((n2) => {
                let o2, s2 = n2.value === g2, l2 = (o2 = n2.value, i2.filter((e3) => e3.folder === o2).length);
                return (0, t.jsxs)(
                  "button",
                  {
                    type: "button",
                    role: "tab",
                    "data-folder": n2.value,
                    "aria-selected": s2,
                    "aria-controls": `${e2}-list`,
                    tabIndex: s2 ? 0 : -1,
                    className: b().tab,
                    onClick: () => P(n2.value),
                    children: [
                      n2.label,
                      (0, t.jsx)("span", {
                        className: b().tabCount,
                        children: l2
                      }),
                      s2 && (0, t.jsx)(r.PY1.span, {
                        layoutId: `${e2}-tab`,
                        className: b().tabIndicator,
                        transition: a2 ? { duration: 0 } : p.T.spring.snappy
                      })
                    ]
                  },
                  n2.value
                );
              })
            })
          ]
        }),
        (0, t.jsx)("div", {
          id: `${e2}-list`,
          className: b().list,
          role: "tabpanel",
          "aria-label": `${f.find((e3) => e3.value === g2)?.label} messages`,
          children: (0, t.jsxs)(
            r.PY1.div,
            {
              className: b().panel,
              initial: !a2 && { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: a2 ? 0 : p.T.duration.fast },
              children: [
                (0, t.jsx)(s.N, {
                  initial: false,
                  children: I.map((i3) => {
                    let n2 = j === i3.id;
                    return (0, t.jsxs)(
                      r.PY1.article,
                      {
                        className: `${b().message} ${i3.unread ? b().unread : ""} ${n2 ? b().open : ""}`,
                        initial: a2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                        animate: { height: "auto", opacity: 1 },
                        exit: a2 ? { opacity: 0, transition: { duration: 0 } } : { height: 0, opacity: 0 },
                        transition: M,
                        children: [
                          (0, t.jsxs)("div", {
                            className: b().row,
                            children: [
                              (0, t.jsxs)("button", {
                                ref: (e3) => {
                                  e3 ? z.current.set(i3.id, e3) : z.current.delete(i3.id);
                                },
                                className: b().trigger,
                                type: "button",
                                "aria-expanded": n2,
                                "aria-controls": n2 ? `${e2}-${i3.id}-detail` : void 0,
                                "aria-keyshortcuts": "inbox" === g2 ? "E S" : "snoozed" === g2 ? "U E" : "U",
                                onClick: () => {
                                  j === i3.id ? k(null) : (k(i3.id), i3.unread && m2(
                                    (e3) => e3.map(
                                      (e4) => e4.id === i3.id ? { ...e4, unread: false } : e4
                                    )
                                  ));
                                },
                                onKeyDown: (e3) => (function(e4, a3) {
                                  if (e4.metaKey || e4.ctrlKey || e4.altKey)
                                    return;
                                  let i4 = e4.key.toLowerCase();
                                  if ("arrowdown" === i4 || "arrowup" === i4) {
                                    e4.preventDefault();
                                    let t2 = I.findIndex((e5) => e5.id === a3.id), n3 = I[t2 + ("arrowdown" === i4 ? 1 : -1)];
                                    n3 && z.current.get(n3.id)?.focus();
                                  } else
                                    "e" === i4 && "archive" !== g2 ? (e4.preventDefault(), S(a3, "archive")) : "s" === i4 && "inbox" === g2 ? (e4.preventDefault(), S(a3, "snoozed")) : "u" === i4 && "inbox" !== g2 && (e4.preventDefault(), S(a3, "inbox"));
                                })(e3, i3),
                                children: [
                                  (0, t.jsx)("span", {
                                    className: b().dot,
                                    "aria-hidden": "true"
                                  }),
                                  (0, t.jsx)(h.e, {
                                    name: i3.name,
                                    src: i3.photo,
                                    size: "sm",
                                    className: b().avatar
                                  }),
                                  (0, t.jsxs)("span", {
                                    className: b().sender,
                                    children: [
                                      i3.name,
                                      i3.unread && (0, t.jsx)("span", {
                                        className: b().srOnly,
                                        children: ", unread"
                                      })
                                    ]
                                  }),
                                  (0, t.jsxs)("span", {
                                    className: b().summary,
                                    children: [
                                      (0, t.jsx)("span", {
                                        className: b().subject,
                                        children: i3.subject
                                      }),
                                      (0, t.jsx)("span", {
                                        className: b().preview,
                                        children: i3.preview
                                      })
                                    ]
                                  }),
                                  (0, t.jsx)("time", {
                                    className: b().time,
                                    children: i3.time
                                  })
                                ]
                              }),
                              (0, t.jsx)("span", {
                                className: b().quick,
                                children: E.map(
                                  (e3) => (0, t.jsx)(
                                    "button",
                                    {
                                      type: "button",
                                      className: b().quickButton,
                                      "aria-label": `${e3.label}: ${i3.subject}`,
                                      title: `${e3.label} (${e3.shortcut})`,
                                      tabIndex: -1,
                                      onClick: () => S(i3, e3.to),
                                      children: (0, t.jsx)(e3.icon, {
                                        size: 16,
                                        strokeWidth: 1.75,
                                        "aria-hidden": "true"
                                      })
                                    },
                                    e3.key
                                  )
                                )
                              })
                            ]
                          }),
                          (0, t.jsx)(s.N, {
                            initial: false,
                            children: n2 && (0, t.jsx)(r.PY1.div, {
                              id: `${e2}-${i3.id}-detail`,
                              className: b().detail,
                              initial: a2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                              animate: { height: "auto", opacity: 1 },
                              exit: a2 ? { opacity: 0, transition: { duration: 0 } } : { height: 0, opacity: 0 },
                              transition: M,
                              children: (0, t.jsxs)("div", {
                                className: b().detailInner,
                                children: [
                                  (0, t.jsx)("p", { children: i3.body }),
                                  (0, t.jsx)("div", {
                                    className: b().detailActions,
                                    children: E.map(
                                      (e3, a3) => (0, t.jsxs)(
                                        u.$,
                                        {
                                          type: "button",
                                          variant: 0 === a3 ? "secondary" : "ghost",
                                          size: "sm",
                                          onClick: () => S(i3, e3.to),
                                          children: [
                                            (0, t.jsx)(e3.icon, {
                                              size: 15,
                                              strokeWidth: 1.75,
                                              "aria-hidden": "true"
                                            }),
                                            e3.label,
                                            (0, t.jsx)("kbd", {
                                              className: b().kbd,
                                              children: e3.shortcut
                                            })
                                          ]
                                        },
                                        e3.key
                                      )
                                    )
                                  })
                                ]
                              })
                            })
                          })
                        ]
                      },
                      i3.id
                    );
                  })
                }),
                (0, t.jsx)(s.N, {
                  initial: false,
                  children: 0 === I.length && (0, t.jsxs)(
                    r.PY1.div,
                    {
                      className: b().empty,
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: {
                        opacity: 0,
                        transition: { duration: a2 ? 0 : p.T.duration.exit }
                      },
                      transition: {
                        duration: a2 ? 0 : p.T.duration.standard,
                        ease: p.T.ease.standard
                      },
                      children: [
                        (0, t.jsx)("p", { children: D.title }),
                        (0, t.jsx)("span", { children: D.body }),
                        (0, t.jsx)(u.$, {
                          type: "button",
                          variant: "secondary",
                          size: "sm",
                          onClick: function() {
                            "inbox" === g2 && _2 ? y(false) : P("inbox" === g2 ? "archive" : "inbox");
                          },
                          children: D.action
                        })
                      ]
                    },
                    "empty"
                  )
                })
              ]
            },
            g2
          )
        }),
        (0, t.jsxs)("footer", {
          className: b().footer,
          children: [
            (0, t.jsx)("p", {
              role: "status",
              "aria-live": "polite",
              className: b().status,
              children: (0, t.jsx)(s.N, {
                mode: "popLayout",
                initial: false,
                children: (0, t.jsx)(
                  r.PY1.span,
                  {
                    className: b().statusText,
                    initial: a2 ? { opacity: 0 } : { opacity: 0, y: 6 },
                    animate: { opacity: 1, y: 0 },
                    exit: a2 ? { opacity: 0, transition: { duration: 0 } } : {
                      opacity: 0,
                      y: -6,
                      transition: { duration: p.T.duration.fast }
                    },
                    transition: a2 ? { duration: 0 } : p.T.spring.snappy,
                    children: N ? (0, t.jsxs)(t.Fragment, {
                      children: [
                        w[N.to],
                        " ",
                        (0, t.jsx)("span", {
                          className: b().statusSubject,
                          children: N.subject
                        })
                      ]
                    }) : (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("span", {
                          className: b().hint,
                          children: E.map(
                            (e3) => (0, t.jsxs)(
                              "span",
                              {
                                children: [
                                  (0, t.jsx)("kbd", {
                                    className: b().kbd,
                                    children: e3.shortcut
                                  }),
                                  e3.label.toLowerCase()
                                ]
                              },
                              e3.key
                            )
                          )
                        }),
                        (0, t.jsxs)("span", {
                          className: b().hintNarrow,
                          children: [
                            "Open a message to ",
                            "inbox" === g2 ? "snooze or archive it" : "move it"
                          ]
                        })
                      ]
                    })
                  },
                  N ? `${N.id}-${N.to}` : "idle"
                )
              })
            }),
            (0, t.jsxs)(u.$, {
              type: "button",
              variant: "ghost",
              size: "sm",
              className: b().undo,
              onClick: function() {
                N && (m2(
                  (e3) => e3.map(
                    (e4) => e4.id === N.id ? { ...e4, folder: N.from, unread: N.unread } : e4
                  )
                ), N.from !== g2 && v2(N.from), A(null), T.current = N.id);
              },
              disabled: !N,
              "aria-hidden": !N,
              tabIndex: N ? 0 : -1,
              children: [
                (0, t.jsx)(c.A, {
                  size: 14,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                "Undo"
              ]
            })
          ]
        })
      ]
    });
  }
  let _ = v;
}

__m(__module,__exports,__require);
}