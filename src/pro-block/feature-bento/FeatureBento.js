function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, {
    FeatureBento: () => C,
    FeatureBentoBlock: () => E,
    default: () => W
  });
  var s = t(95155), i = t(12115), n = t(61792), r = t(25354), l = t(18310), o = t(36483), d = t(17143), c = t(95097), h = t(55737), m = t(33142), p = t(61665), u = t(65377), g = t(21759), _ = t(49804), f = t(22350), b = t(47421), y = t(64577), w = t(7770), v = t(67752);
  let j = [
    {
      id: "sync",
      title: "Edit together in real time",
      description: "See who is in the doc, what they selected, and what they are typing.",
      visual: "sync",
      size: "wide"
    },
    {
      id: "command",
      title: "Everything is a keystroke away",
      description: "Jump to any page, person, or setting from one menu.",
      visual: "command",
      size: "tall"
    },
    {
      id: "insights",
      title: "Numbers that explain themselves",
      description: "Weekly trends land right next to the work that moved them.",
      visual: "chart"
    },
    {
      id: "automations",
      title: "Automations that run on their own",
      description: "Route new signups, enrich them, and tell the right channel.",
      visual: "flow"
    },
    {
      id: "permissions",
      title: "Access that fits your team",
      description: "Roles for every workspace, reviewed and changed in one place.",
      visual: "permissions",
      size: "half"
    },
    {
      id: "history",
      title: "Every version, one scrub away",
      description: "Rewind a page to any moment and bring back what you need.",
      visual: "history",
      size: "half"
    }
  ], x = {
    doc: {
      title: "Q3 launch plan",
      lines: [
        "Ship onboarding by",
        "Pricing review with finance",
        "Draft the launch post"
      ],
      selected: "Sept 30",
      typed: " for Tuesday"
    },
    commands: [
      "Invite people",
      "Invoices",
      "Integrations",
      "Insights",
      "Inbox"
    ],
    chart: {
      label: "Weekly active",
      value: "12,480",
      delta: "+24%",
      bars: [38, 46, 42, 55, 51, 63, 60, 78]
    },
    flow: ["New signup", "Enrich company", "Post to #sales"],
    roles: [
      { name: "Admins", access: "Full access", on: true },
      { name: "Editors", access: "Can edit", on: true },
      { name: "Guests", access: "Can comment", on: false }
    ],
    history: {
      current: "Launch on September 30",
      past: "Launch in early October",
      times: ["9:02", "Now"],
      viewing: "Viewing 10:14"
    }
  };
  var k = t(52240), N = t.n(k);
  let A = [...w.T.ease.enter], T = { size: 14, strokeWidth: 1.75, "aria-hidden": true }, z = "(hover: hover) and (pointer: fine)";
  function M(e2) {
    let a2 = window.matchMedia(z);
    return a2.addEventListener("change", e2), () => a2.removeEventListener("change", e2);
  }
  let S = [d.A, c.A, h.A, m.A, p.A], F = [_.A, f.A, b.A], L = {
    sync: function() {
      let { doc: e2 } = x, a2 = (0, v.MV)("emma-collins"), t2 = (0, v.MV)("marcus-johnson");
      return (0, s.jsxs)("div", {
        className: N().doc,
        children: [
          (0, s.jsxs)("div", {
            className: N().docHead,
            children: [
              (0, s.jsx)(o.A, { ...T }),
              (0, s.jsx)("span", {
                className: N().docTitle,
                children: e2.title
              }),
              (0, s.jsx)("span", {
                className: N().faces,
                children: [
                  "emma-collins",
                  "marcus-johnson",
                  "sofia-ramirez"
                ].map(
                  (e3) => (0, s.jsx)(
                    "img",
                    { src: (0, v.my)(e3), alt: "", width: 20, height: 20 },
                    e3
                  )
                )
              })
            ]
          }),
          (0, s.jsxs)("p", {
            className: N().line,
            children: [
              e2.lines[0],
              " ",
              (0, s.jsxs)("span", {
                className: N().selection,
                children: [
                  (0, s.jsx)("span", { className: N().selectionFill }),
                  (0, s.jsx)("span", {
                    className: N().selectionText,
                    children: e2.selected
                  }),
                  (0, s.jsx)("span", {
                    className: N().cursorTrack,
                    children: (0, s.jsxs)("span", {
                      className: N().cursor,
                      style: { "--who": "var(--series-1)" },
                      children: [
                        (0, s.jsx)("svg", {
                          viewBox: "0 0 12 14",
                          "aria-hidden": "true",
                          children: (0, s.jsx)("path", {
                            d: "M1 1l10 5.2-4.4 1.3L4.4 12z"
                          })
                        }),
                        (0, s.jsx)("span", {
                          className: N().tag,
                          children: a2.name.split(" ")[0]
                        })
                      ]
                    })
                  })
                ]
              })
            ]
          }),
          (0, s.jsx)("p", { className: N().line, children: e2.lines[1] }),
          (0, s.jsxs)("p", {
            className: N().line,
            children: [
              e2.lines[2],
              (0, s.jsx)("span", {
                className: N().typed,
                style: { "--chars": e2.typed.length },
                children: e2.typed
              }),
              (0, s.jsx)("span", {
                className: N().caret,
                style: { "--who": "var(--series-3)" },
                children: (0, s.jsx)("span", {
                  className: N().tag,
                  children: t2.name.split(" ")[0]
                })
              })
            ]
          })
        ]
      });
    },
    command: function() {
      return (0, s.jsxs)("div", {
        className: N().palette,
        children: [
          (0, s.jsxs)("div", {
            className: N().paletteSearch,
            children: [
              (0, s.jsx)(u.A, { ...T }),
              (0, s.jsxs)("span", {
                className: N().query,
                children: [
                  "in",
                  (0, s.jsx)("span", {
                    className: N().queryTyped,
                    children: "t"
                  })
                ]
              }),
              (0, s.jsx)("span", { className: N().paletteCaret })
            ]
          }),
          (0, s.jsxs)("ul", {
            className: N().commands,
            children: [
              (0, s.jsx)("li", {
                className: N().commandHighlight,
                "aria-hidden": "true"
              }),
              x.commands.map((e2, a2) => {
                let t2 = S[a2 % S.length];
                return (0, s.jsxs)(
                  "li",
                  {
                    className: N().command,
                    "data-target": 2 === a2 ? "" : void 0,
                    "data-first": 0 === a2 ? "" : void 0,
                    children: [(0, s.jsx)(t2, { ...T }), e2]
                  },
                  e2
                );
              })
            ]
          }),
          (0, s.jsxs)("div", {
            className: N().paletteFoot,
            children: [
              (0, s.jsxs)("span", {
                children: [
                  (0, s.jsx)("kbd", { children: "\u2191" }),
                  (0, s.jsx)("kbd", { children: "\u2193" }),
                  " Move"
                ]
              }),
              (0, s.jsxs)("span", {
                children: [
                  (0, s.jsx)("kbd", {
                    className: N().enterKey,
                    children: (0, s.jsx)(g.A, {
                      size: 11,
                      strokeWidth: 2,
                      "aria-hidden": "true"
                    })
                  }),
                  " Open"
                ]
              })
            ]
          })
        ]
      });
    },
    chart: function() {
      let { chart: e2 } = x, a2 = e2.bars.length - 1;
      return (0, s.jsxs)("div", {
        className: N().chart,
        children: [
          (0, s.jsxs)("div", {
            className: N().chartHead,
            children: [
              (0, s.jsx)("span", { children: e2.label }),
              (0, s.jsx)("strong", { children: e2.value })
            ]
          }),
          (0, s.jsxs)("div", {
            className: N().bars,
            children: [
              e2.bars.map(
                (e3, t2) => (0, s.jsx)(
                  "span",
                  {
                    className: N().bar,
                    "data-last": t2 === a2 ? "" : void 0,
                    style: { "--h": `${e3}%`, "--i": t2 }
                  },
                  t2
                )
              ),
              (0, s.jsx)("span", {
                className: N().barTip,
                style: { "--h": `${e2.bars[a2]}%` },
                children: e2.delta
              })
            ]
          })
        ]
      });
    },
    flow: function() {
      return (0, s.jsxs)("ol", {
        className: N().flow,
        children: [
          (0, s.jsx)("li", {
            className: N().flowLine,
            "aria-hidden": "true",
            children: (0, s.jsx)("span", { className: N().flowFill })
          }),
          x.flow.map((e2, a2) => {
            let t2 = F[a2 % F.length];
            return (0, s.jsxs)(
              "li",
              {
                className: N().flowStep,
                style: { "--i": a2 },
                children: [
                  (0, s.jsx)("span", {
                    className: N().flowIcon,
                    children: (0, s.jsx)(t2, { ...T })
                  }),
                  (0, s.jsx)("span", {
                    className: N().flowLabel,
                    children: e2
                  }),
                  (0, s.jsx)("span", {
                    className: N().flowCheck,
                    children: (0, s.jsx)(y.A, {
                      size: 12,
                      strokeWidth: 2.5,
                      "aria-hidden": "true"
                    })
                  })
                ]
              },
              e2
            );
          })
        ]
      });
    },
    permissions: function() {
      return (0, s.jsxs)("div", {
        className: N().rolesWrap,
        children: [
          (0, s.jsx)("div", {
            className: N().roles,
            children: x.roles.map(
              (e2) => (0, s.jsxs)(
                "div",
                {
                  className: N().role,
                  "data-flips": e2.on ? void 0 : "",
                  children: [
                    (0, s.jsxs)("span", {
                      className: N().roleText,
                      children: [
                        (0, s.jsx)("span", { children: e2.name }),
                        (0, s.jsx)("span", { children: e2.access })
                      ]
                    }),
                    (0, s.jsx)("span", {
                      className: N().switch,
                      "data-on": e2.on ? "" : void 0,
                      children: (0, s.jsx)("span", { className: N().thumb })
                    })
                  ]
                },
                e2.name
              )
            )
          }),
          (0, s.jsxs)("span", {
            className: N().saved,
            children: [
              (0, s.jsx)(y.A, {
                size: 12,
                strokeWidth: 2.5,
                "aria-hidden": "true"
              }),
              "Saved"
            ]
          })
        ]
      });
    },
    history: function() {
      let { history: e2 } = x;
      return (0, s.jsxs)("div", {
        className: N().history,
        children: [
          (0, s.jsx)("div", {
            className: N().historyHead,
            children: (0, s.jsxs)("span", {
              className: N().swap,
              children: [
                (0, s.jsx)("span", {
                  "data-now": "",
                  children: "Current version"
                }),
                (0, s.jsx)("span", { "data-past": "", children: e2.viewing })
              ]
            })
          }),
          (0, s.jsx)("p", {
            className: N().historyText,
            children: (0, s.jsxs)("span", {
              className: N().swap,
              children: [
                (0, s.jsx)("span", { "data-now": "", children: e2.current }),
                (0, s.jsx)("span", { "data-past": "", children: e2.past })
              ]
            })
          }),
          (0, s.jsxs)("div", {
            className: N().track,
            children: [
              [0, 1, 2, 3, 4, 5].map(
                (e3) => (0, s.jsx)(
                  "span",
                  { className: N().tick, style: { "--x": `${20 * e3}%` } },
                  e3
                )
              ),
              (0, s.jsx)("span", { className: N().trackFill }),
              (0, s.jsx)("span", {
                className: N().thumbTrack,
                children: (0, s.jsx)("span", { className: N().scrub })
              })
            ]
          }),
          (0, s.jsxs)("div", {
            className: N().times,
            children: [
              (0, s.jsx)("span", { children: e2.times[0] }),
              (0, s.jsx)("span", { children: e2.times[1] })
            ]
          })
        ]
      });
    }
  };
  function H({ feature: e2, index: a2, custom: t2, fine: l2, reduced: o2 }) {
    let d2 = (0, i.useRef)(null), c2 = (0, n.W)(d2, { once: true, amount: 0.4 }), [h2, m2] = (0, i.useState)(false), [p2, u2] = (0, i.useState)(false), g2 = L[e2.visual];
    return (0, s.jsxs)(r.PY1.li, {
      ref: d2,
      className: N().cell,
      "data-size": e2.size ?? "regular",
      "data-visual": e2.visual,
      "data-seen": c2 ? "" : void 0,
      "data-on": h2 || p2 || !l2 && c2 ? "" : void 0,
      onPointerEnter: (e3) => {
        "mouse" === e3.pointerType && m2(true);
      },
      onPointerLeave: () => m2(false),
      onFocus: () => u2(true),
      onBlur: () => u2(false),
      initial: !o2 && { opacity: 0, y: 14 },
      animate: c2 || o2 ? { opacity: 1, y: 0 } : void 0,
      transition: {
        duration: w.T.duration.considered,
        ease: A,
        delay: a2 % 3 * w.T.stagger.line
      },
      children: [
        (0, s.jsx)("div", {
          className: N().visual,
          "aria-hidden": "true",
          children: t2 ?? (g2 ? (0, s.jsx)(g2, {}) : null)
        }),
        (0, s.jsxs)("div", {
          className: N().copy,
          children: [
            (0, s.jsx)("h3", {
              className: N().cellTitle,
              children: e2.href ? (0, s.jsx)("a", {
                href: e2.href,
                className: N().cellLink,
                children: e2.title
              }) : e2.title
            }),
            (0, s.jsx)("p", {
              className: N().cellText,
              children: e2.description
            })
          ]
        })
      ]
    });
  }
  let C = (0, i.forwardRef)(function({
    title: e2 = "Built for the way teams actually work",
    description: a2 = "Fast, shared, and quietly automatic. Everything your team needs to plan, ship, and look back.",
    features: t2 = j,
    visuals: n2,
    className: r2
  }, o2) {
    let d2 = (0, i.useId)(), c2 = !!(0, l.I)(), h2 = (0, i.useSyncExternalStore)(
      M,
      () => window.matchMedia(z).matches,
      () => true
    );
    return (0, s.jsx)("section", {
      ref: o2,
      className: [N().bento, r2].filter(Boolean).join(" "),
      "aria-labelledby": `${d2}-title`,
      children: (0, s.jsxs)("div", {
        className: N().inner,
        children: [
          (0, s.jsxs)("header", {
            className: N().header,
            children: [
              (0, s.jsx)("h2", {
                id: `${d2}-title`,
                className: N().title,
                children: e2
              }),
              a2 && (0, s.jsx)("p", { className: N().description, children: a2 })
            ]
          }),
          (0, s.jsx)("ul", {
            className: N().grid,
            children: t2.map(
              (e3, a3) => (0, s.jsx)(
                H,
                {
                  feature: e3,
                  index: a3,
                  custom: n2?.[e3.id],
                  fine: h2,
                  reduced: c2
                },
                e3.id
              )
            )
          })
        ]
      })
    });
  });
  function E() {
    return (0, s.jsx)("div", {
      className: N().frame,
      children: (0, s.jsx)(C, {})
    });
  }
  C.displayName = "FeatureBento";
  let W = E;
}

__m(__module,__exports,__require);
}