function(__module,__exports,__require){
"use strict";
function __m(e, a, i) {
  "use strict";
  i.r(a), i.d(a, { TeamDirectory: () => b, default: () => v });
  var t = i(95155), o = i(12115), r = i(18310), n = i(25354), s = i(80642), l = i(79196), d = i(65377), c = i(9005), h = i(99314), m = i(92218), p = i(67752), u = i(7770), g = i(29508), y = i.n(g), f = i(55665);
  let _ = [
    {
      id: "emma",
      name: "Emma Collins",
      role: "Product designer",
      team: "Design",
      location: "Z\xFCrich",
      timezone: "CET",
      email: "emma@arc.example",
      photo: (0, p.my)("emma-collins"),
      available: true,
      about: "Shapes clear, considered experiences across the product. Ask Emma about interaction design, prototypes, or a second pair of eyes on a flow.",
      focus: "Design system and onboarding"
    },
    {
      id: "marcus",
      name: "Marcus Johnson",
      role: "Frontend engineer",
      team: "Engineering",
      location: "London",
      timezone: "GMT",
      email: "marcus@arc.example",
      photo: (0, p.my)("marcus-johnson"),
      available: true,
      about: "Builds the interfaces and systems behind the details. Marcus works closely with design so components feel as good in code as they do on screen.",
      focus: "Component architecture"
    },
    {
      id: "ava",
      name: "Ava Mitchell",
      role: "Design lead",
      team: "Design",
      location: "Amsterdam",
      timezone: "CET",
      email: "ava@arc.example",
      photo: (0, p.my)("ava-mitchell"),
      available: false,
      about: "Connects product direction to the everyday work of the team. Ava can help with design reviews, priorities, and bringing an idea into focus.",
      focus: "Product direction"
    },
    {
      id: "daniel",
      name: "Daniel Kim",
      role: "Platform engineer",
      team: "Engineering",
      location: "Berlin",
      timezone: "CET",
      email: "daniel@arc.example",
      photo: (0, p.my)("daniel-kim"),
      available: true,
      about: "Keeps the platform dependable as the product grows. Reach out to Daniel for integrations, performance, and technical planning.",
      focus: "Platform and performance"
    },
    {
      id: "sofia",
      name: "Sofia Ramirez",
      role: "Operations lead",
      team: "Operations",
      location: "New York",
      timezone: "ET",
      email: "sofia@arc.example",
      photo: (0, p.my)("sofia-ramirez"),
      available: false,
      about: "Makes collaboration easier across teams and time zones. Sofia helps people find context, coordinate work, and keep projects moving.",
      focus: "Team operations"
    },
    {
      id: "hannah",
      name: "Hannah Walsh",
      role: "Customer success",
      team: "Operations",
      location: "Dublin",
      timezone: "GMT",
      email: "hannah@arc.example",
      photo: (0, p.my)("hannah-walsh"),
      available: true,
      about: "Turns customer conversations into clear next steps for the team. Hannah knows which accounts are blocked and why.",
      focus: "Enterprise onboarding"
    }
  ], w = ["All", "Design", "Engineering", "Operations"];
  function b({ onPersonSelect: e2 }) {
    let a2 = (0, o.useId)(), i2 = (0, r.I)(), l2 = (0, o.useRef)(null), [p2, g2] = (0, o.useState)(""), [v2, x] = (0, o.useState)("All"), [k, N] = (0, o.useState)(_[0].id), [A, T] = (0, o.useState)("idle"), C = p2.trim().toLowerCase(), P = _.filter((e3) => {
      let a3 = "All" === v2 || e3.team === v2, i3 = `${e3.name} ${e3.role} ${e3.team} ${e3.location}`.toLowerCase();
      return a3 && i3.includes(C);
    }), L = P.find((e3) => e3.id === k) ?? P[0];
    async function z() {
      if (L)
        try {
          await (0, f.a)(L.email), T("copied");
        } catch {
          T("error");
        }
    }
    (0, o.useEffect)(() => {
      if ("idle" === A) return;
      let e3 = window.setTimeout(() => T("idle"), 1800);
      return () => window.clearTimeout(e3);
    }, [A]);
    let E = i2 ? { duration: 0 } : u.T.spring.smooth;
    return (0, t.jsxs)("section", {
      className: y().directory,
      "aria-labelledby": `${a2}-title`,
      children: [
        (0, t.jsxs)("header", {
          className: y().header,
          children: [
            (0, t.jsxs)("h2", {
              id: `${a2}-title`,
              children: [
                "People ",
                (0, t.jsx)("span", {
                  className: y().count,
                  children: _.length
                })
              ]
            }),
            (0, t.jsxs)("label", {
              className: y().search,
              children: [
                (0, t.jsx)(d.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                (0, t.jsx)("span", {
                  className: y().srOnly,
                  children: "Search people"
                }),
                (0, t.jsx)("input", {
                  ref: l2,
                  type: "search",
                  value: p2,
                  onChange: (e3) => {
                    g2(e3.target.value), T("idle");
                  },
                  onKeyDown: (e3) => {
                    "Escape" === e3.key && p2 && (e3.preventDefault(), g2(""));
                  },
                  placeholder: "Search name, role, city"
                }),
                (0, t.jsx)("span", {
                  className: y().clearSlot,
                  children: p2 && (0, t.jsx)("button", {
                    type: "button",
                    onClick: () => {
                      g2(""), l2.current?.focus();
                    },
                    "aria-label": "Clear search",
                    children: (0, t.jsx)(c.A, {
                      size: 14,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  })
                })
              ]
            })
          ]
        }),
        (0, t.jsx)("div", {
          className: y().filters,
          role: "group",
          "aria-label": "Filter by team",
          children: w.map((e3) => {
            let o2 = "All" === e3 ? _.length : _.filter((a3) => a3.team === e3).length;
            return (0, t.jsxs)(
              "button",
              {
                type: "button",
                "aria-pressed": v2 === e3,
                onClick: () => {
                  x(e3), T("idle");
                },
                children: [
                  v2 === e3 && (0, t.jsx)(n.PY1.span, {
                    layoutId: `${a2}-filter`,
                    className: y().filterHighlight,
                    transition: i2 ? { duration: 0 } : u.T.spring.morph,
                    "aria-hidden": "true"
                  }),
                  (0, t.jsxs)("span", {
                    className: y().filterLabel,
                    children: [
                      e3,
                      (0, t.jsx)("span", {
                        className: y().filterCount,
                        children: o2
                      })
                    ]
                  })
                ]
              },
              e3
            );
          })
        }),
        (0, t.jsxs)("div", {
          className: y().body,
          children: [
            (0, t.jsxs)("div", {
              className: y().listPane,
              children: [
                (0, t.jsx)("ul", {
                  className: y().peopleList,
                  "aria-label": "Team members",
                  children: (0, t.jsx)(s.N, {
                    mode: "popLayout",
                    initial: false,
                    children: P.map((o2) => {
                      let r2 = L?.id === o2.id;
                      return (0, t.jsx)(
                        n.PY1.li,
                        {
                          layout: !i2 && "position",
                          initial: !i2 && { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: {
                            opacity: 0,
                            transition: { duration: i2 ? 0 : u.T.duration.exit }
                          },
                          transition: {
                            layout: E,
                            opacity: { duration: i2 ? 0 : u.T.duration.fast }
                          },
                          children: (0, t.jsxs)("button", {
                            type: "button",
                            className: y().personRow,
                            "aria-pressed": r2,
                            onClick: () => {
                              N(o2.id), T("idle"), e2?.({ id: o2.id, name: o2.name, team: o2.team });
                            },
                            children: [
                              r2 && (0, t.jsx)(j, {
                                layoutId: `${a2}-row-${v2}-${C}`,
                                reduce: !!i2
                              }),
                              (0, t.jsx)(m.e, {
                                name: o2.name,
                                src: o2.photo,
                                status: o2.available ? "online" : "offline"
                              }),
                              (0, t.jsxs)("span", {
                                className: y().personText,
                                children: [
                                  (0, t.jsx)("span", {
                                    className: y().personName,
                                    children: o2.name
                                  }),
                                  (0, t.jsx)("span", {
                                    className: y().personRole,
                                    children: o2.role
                                  })
                                ]
                              })
                            ]
                          })
                        },
                        o2.id
                      );
                    })
                  })
                }),
                0 === P.length && (0, t.jsxs)("div", {
                  className: y().empty,
                  children: [
                    (0, t.jsxs)("p", {
                      children: ["No one matches", C ? ` \u201C${p2.trim()}\u201D` : ""]
                    }),
                    (0, t.jsx)("button", {
                      type: "button",
                      onClick: function() {
                        g2(""), x("All"), T("idle"), l2.current?.focus();
                      },
                      children: "Clear filters"
                    })
                  ]
                })
              ]
            }),
            (0, t.jsx)(n.PY1.div, {
              className: y().detailPane,
              layout: !i2 && "position",
              transition: { layout: E },
              "aria-live": "polite",
              children: (0, t.jsx)(s.N, {
                mode: "popLayout",
                initial: false,
                children: L ? (0, t.jsxs)(
                  n.PY1.article,
                  {
                    className: y().profile,
                    initial: !i2 && { opacity: 0, y: 4 },
                    animate: { opacity: 1, y: 0 },
                    exit: {
                      opacity: 0,
                      transition: {
                        duration: i2 ? 0 : u.T.duration.exit,
                        ease: [...u.T.ease.standard]
                      }
                    },
                    transition: {
                      duration: i2 ? 0 : u.T.duration.standard,
                      ease: [...u.T.ease.enter]
                    },
                    "aria-label": `${L.name}, ${L.role}`,
                    children: [
                      (0, t.jsxs)("div", {
                        className: y().profileTop,
                        children: [
                          (0, t.jsx)(m.e, {
                            name: L.name,
                            src: L.photo,
                            size: "lg"
                          }),
                          (0, t.jsxs)("div", {
                            className: y().profileIdentity,
                            children: [
                              (0, t.jsx)("h3", { children: L.name }),
                              (0, t.jsx)("p", { children: L.role })
                            ]
                          })
                        ]
                      }),
                      (0, t.jsx)("p", {
                        className: y().about,
                        children: L.about
                      }),
                      (0, t.jsxs)("dl", {
                        className: y().facts,
                        children: [
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("dt", { children: "Status" }),
                              (0, t.jsxs)("dd", {
                                children: [
                                  (0, t.jsx)("span", {
                                    className: y().dot,
                                    "data-available": L.available || void 0,
                                    "aria-hidden": "true"
                                  }),
                                  L.available ? "Available" : "Away"
                                ]
                              })
                            ]
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("dt", { children: "Team" }),
                              (0, t.jsx)("dd", { children: L.team })
                            ]
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("dt", { children: "Working on" }),
                              (0, t.jsx)("dd", { children: L.focus })
                            ]
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("dt", { children: "Location" }),
                              (0, t.jsxs)("dd", {
                                children: [
                                  L.location,
                                  " ",
                                  (0, t.jsx)("span", {
                                    className: y().muted,
                                    children: L.timezone
                                  })
                                ]
                              })
                            ]
                          }),
                          (0, t.jsxs)("div", {
                            className: y().contactRow,
                            children: [
                              (0, t.jsx)("dt", { children: "Email" }),
                              (0, t.jsxs)("dd", {
                                children: [
                                  (0, t.jsx)("a", {
                                    href: `mailto:${L.email}`,
                                    children: L.email
                                  }),
                                  (0, t.jsxs)("button", {
                                    type: "button",
                                    className: y().copy,
                                    "data-state": A,
                                    onClick: () => void z(),
                                    "aria-label": "copied" === A ? "Email copied" : "Copy email address",
                                    children: [
                                      (0, t.jsxs)("span", {
                                        className: y().copyIcon,
                                        "aria-hidden": "true",
                                        children: [
                                          (0, t.jsx)(h.A, {
                                            size: 14,
                                            strokeWidth: 1.75,
                                            "data-on": "copied" !== A || void 0
                                          }),
                                          (0, t.jsx)("svg", {
                                            width: 14,
                                            height: 14,
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            "data-on": "copied" === A || void 0,
                                            children: (0, t.jsx)(
                                              n.PY1.path,
                                              {
                                                d: "M4 12l5 5L20 6",
                                                initial: false,
                                                animate: {
                                                  pathLength: "copied" === A || i2 ? 1 : 0
                                                },
                                                transition: "copied" === A ? {
                                                  duration: 0.22,
                                                  ease: [
                                                    ...u.T.ease.standard
                                                  ],
                                                  delay: 0.04
                                                } : {
                                                  duration: 0,
                                                  delay: 0.12
                                                }
                                              }
                                            )
                                          })
                                        ]
                                      }),
                                      (0, t.jsx)("span", {
                                        className: y().copyLabel,
                                        "aria-hidden": "true",
                                        children: [
                                          "idle",
                                          "copied",
                                          "error"
                                        ].map(
                                          (e3) => (0, t.jsx)(
                                            "span",
                                            {
                                              "data-on": A === e3 || void 0,
                                              children: "copied" === e3 ? "Copied" : "error" === e3 ? "Retry" : "Copy"
                                            },
                                            e3
                                          )
                                        )
                                      })
                                    ]
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      (0, t.jsx)("span", {
                        className: y().srOnly,
                        role: "status",
                        children: "copied" === A ? "Email address copied" : "error" === A ? "Copy failed. Try again." : ""
                      })
                    ]
                  },
                  L.id
                ) : (0, t.jsxs)(
                  n.PY1.div,
                  {
                    className: y().noProfile,
                    initial: !i2 && { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: {
                      opacity: 0,
                      transition: { duration: i2 ? 0 : u.T.duration.exit }
                    },
                    transition: {
                      duration: i2 ? 0 : u.T.duration.standard,
                      ease: [...u.T.ease.standard]
                    },
                    children: [
                      (0, t.jsx)("p", { children: "Nobody selected" }),
                      (0, t.jsx)("span", {
                        children: "Clear your search to see the team."
                      })
                    ]
                  },
                  "none"
                )
              })
            })
          ]
        })
      ]
    });
  }
  function j({ layoutId: e2, reduce: a2 }) {
    return (0, l.tF)() ? (0, t.jsx)(n.PY1.span, {
      layoutId: e2,
      className: y().rowHighlight,
      transition: a2 ? { duration: 0 } : u.T.spring.morph,
      "aria-hidden": "true"
    }) : null;
  }
  let v = b;
}

__m(__module,__exports,__require);
}