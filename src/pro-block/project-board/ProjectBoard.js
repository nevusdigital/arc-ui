function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { ProjectBoard: () => x, default: () => A });
  var i = t(95155), s = t(12115), o = t(5772), r = t(18310), n = t(57700), l = t(25354), d = t(80642), c = t(2125), h = t(24551), m = t(31966), p = t(90467), g = t(7770), u = t(67752), j = t(30712), w = t.n(j);
  let b = ["Planned", "In progress", "Review", "Done"], v = "emma-collins", _ = ["emma-collins", "marcus-johnson", "ava-mitchell"], f = (e2) => u.c0.find((a2) => a2.id === e2) ?? u.c0[0], y = [
    {
      id: "flows",
      title: "Map the first-run journey",
      project: "Onboarding",
      stage: "Planned",
      owner: "emma-collins",
      comments: 3,
      due: "Today"
    },
    {
      id: "copy",
      title: "Write empty state copy",
      project: "Onboarding",
      stage: "Planned",
      owner: "ava-mitchell",
      comments: 1,
      due: "Tomorrow"
    },
    {
      id: "tokens",
      title: "Refine surface tokens",
      project: "Design system",
      stage: "In progress",
      owner: "emma-collins",
      comments: 5,
      due: "Thu"
    },
    {
      id: "motion",
      title: "Prototype menu motion",
      project: "Design system",
      stage: "In progress",
      owner: "marcus-johnson",
      comments: 2,
      due: "Fri"
    },
    {
      id: "audit",
      title: "Accessibility pass",
      project: "Onboarding",
      stage: "Review",
      owner: "marcus-johnson",
      comments: 7,
      due: "Today"
    },
    {
      id: "notes",
      title: "Publish research notes",
      project: "Research",
      stage: "Done",
      owner: "ava-mitchell",
      comments: 2,
      due: "Sep 14"
    }
  ], k = [
    "Outline next experiment",
    "Draft release notes",
    "Plan usability sessions",
    "Clean up icon set"
  ];
  function x({ onTaskMove: e2 }) {
    let a2 = (0, r.I)(), t2 = (0, s.useId)(), [u2, j2] = (0, s.useState)(y), [A2, N] = (0, s.useState)(null), [C, T] = (0, s.useState)("all"), [S, P] = (0, s.useState)(""), D = (0, s.useRef)(0), z = "mine" === C ? u2.filter((e3) => e3.owner === v) : u2, B = u2.filter((e3) => "Done" === e3.stage).length, M = a2 ? { duration: 0 } : g.T.spring.gentle;
    function O(a3, t3) {
      let i2 = b[b.indexOf(a3.stage) + t3];
      i2 && (N(a3.id), j2((e3) => [...e3.filter((e4) => e4.id !== a3.id), { ...a3, stage: i2 }]), P(`${a3.title} moved to ${i2}.`), e2?.({ id: a3.id, title: a3.title, stage: i2 }));
    }
    return (0, i.jsx)(n.o, {
      id: t2,
      children: (0, i.jsxs)("section", {
        className: w().board,
        "aria-label": "Project board",
        children: [
          (0, i.jsxs)("header", {
            className: w().header,
            children: [
              (0, i.jsxs)("div", {
                className: w().heading,
                children: [
                  (0, i.jsx)("h2", { children: "Product work" }),
                  (0, i.jsxs)("p", {
                    children: [
                      (0, i.jsx)("span", {
                        className: w().tabular,
                        children: B
                      }),
                      " of ",
                      (0, i.jsx)("span", {
                        className: w().tabular,
                        children: u2.length
                      }),
                      " done this sprint"
                    ]
                  })
                ]
              }),
              (0, i.jsxs)("div", {
                className: w().headerActions,
                children: [
                  (0, i.jsx)("div", {
                    className: w().people,
                    "aria-label": "Team",
                    children: _.map((e3) => {
                      let a3 = f(e3);
                      return (0, i.jsx)(
                        o.default,
                        { src: a3.src, width: 28, height: 28, alt: a3.name },
                        e3
                      );
                    })
                  }),
                  (0, i.jsx)("div", {
                    className: w().filters,
                    role: "group",
                    "aria-label": "Show",
                    children: [
                      ["all", "All work"],
                      ["mine", "My work"]
                    ].map(
                      ([e3, t3]) => (0, i.jsxs)(
                        "button",
                        {
                          type: "button",
                          "aria-pressed": C === e3,
                          onClick: () => T(e3),
                          children: [
                            C === e3 && (0, i.jsx)(l.PY1.span, {
                              layoutId: "filter",
                              className: w().filterHighlight,
                              transition: a2 ? { duration: 0 } : g.T.spring.snappy,
                              "aria-hidden": "true"
                            }),
                            (0, i.jsx)("span", { children: t3 })
                          ]
                        },
                        e3
                      )
                    )
                  }),
                  (0, i.jsxs)("button", {
                    className: w().addButton,
                    type: "button",
                    onClick: function() {
                      let e3 = k[D.current % k.length];
                      D.current += 1, j2((a3) => [
                        ...a3,
                        {
                          id: `task-${Date.now()}`,
                          title: e3,
                          project: "Research",
                          stage: "Planned",
                          owner: v,
                          comments: 0,
                          due: "No date"
                        }
                      ]), P(`${e3} added to Planned.`);
                    },
                    "aria-label": "Add task",
                    children: [
                      (0, i.jsx)(c.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      (0, i.jsx)("span", { children: "Add task" })
                    ]
                  })
                ]
              })
            ]
          }),
          (0, i.jsx)("div", {
            className: w().progress,
            "aria-hidden": "true",
            children: (0, i.jsx)(l.PY1.span, {
              initial: false,
              animate: { scaleX: u2.length ? B / u2.length : 0 },
              transition: M
            })
          }),
          (0, i.jsx)(l.PY1.div, {
            className: w().stageScroll,
            layoutScroll: true,
            children: (0, i.jsx)("div", {
              className: w().stages,
              children: b.map((e3, t3) => {
                let s2 = z.filter((a3) => a3.stage === e3);
                return (0, i.jsxs)(
                  "section",
                  {
                    className: w().stage,
                    "aria-label": `${e3}, ${s2.length} tasks`,
                    children: [
                      (0, i.jsxs)("div", {
                        className: w().stageHead,
                        children: [
                          (0, i.jsx)("h3", { children: e3 }),
                          (0, i.jsx)("span", {
                            className: w().stageCount,
                            children: s2.length
                          })
                        ]
                      }),
                      (0, i.jsxs)("div", {
                        className: w().cardStack,
                        children: [
                          (0, i.jsx)(d.N, {
                            mode: "popLayout",
                            initial: false,
                            custom: A2,
                            children: s2.map((s3) => {
                              let r2 = f(s3.owner);
                              return (0, i.jsxs)(
                                l.PY1.article,
                                {
                                  layoutId: a2 ? void 0 : `task-${s3.id}`,
                                  layoutCrossfade: false,
                                  custom: A2,
                                  variants: {
                                    exit: (e4) => e4 === s3.id ? {
                                      opacity: 0,
                                      transition: { duration: 0 }
                                    } : a2 ? { opacity: 0 } : { opacity: 0, scale: 0.98 }
                                  },
                                  initial: !a2 && s3.id !== A2 && { opacity: 0, scale: 0.98 },
                                  animate: { opacity: 1, scale: 1 },
                                  exit: "exit",
                                  transition: M,
                                  onLayoutAnimationComplete: s3.id === A2 ? () => N(null) : void 0,
                                  className: w().card,
                                  "data-moving": s3.id === A2 || void 0,
                                  "data-done": "Done" === e3 || void 0,
                                  children: [
                                    (0, i.jsxs)("div", {
                                      className: w().cardTop,
                                      children: [
                                        (0, i.jsx)("span", {
                                          children: s3.project
                                        }),
                                        (0, i.jsx)("span", {
                                          className: w().due,
                                          "data-soon": "Today" === s3.due && "Done" !== e3 ? "" : void 0,
                                          children: s3.due
                                        })
                                      ]
                                    }),
                                    (0, i.jsx)("h4", { children: s3.title }),
                                    (0, i.jsxs)("div", {
                                      className: w().cardBottom,
                                      children: [
                                        (0, i.jsx)(o.default, {
                                          className: w().avatar,
                                          src: r2.src,
                                          width: 22,
                                          height: 22,
                                          alt: r2.name
                                        }),
                                        s3.comments > 0 && (0, i.jsxs)("span", {
                                          className: w().comments,
                                          children: [
                                            (0, i.jsx)(h.A, {
                                              size: 14,
                                              strokeWidth: 1.75,
                                              "aria-hidden": "true"
                                            }),
                                            (0, i.jsx)("span", {
                                              className: w().tabular,
                                              children: s3.comments
                                            }),
                                            (0, i.jsx)("span", {
                                              className: w().srOnly,
                                              children: " comments"
                                            })
                                          ]
                                        }),
                                        (0, i.jsxs)("div", {
                                          className: w().moveButtons,
                                          children: [
                                            (0, i.jsx)("button", {
                                              type: "button",
                                              onClick: () => O(s3, -1),
                                              disabled: 0 === t3,
                                              "aria-label": `Move ${s3.title} to ${b[t3 - 1] ?? "previous stage"}`,
                                              children: (0, i.jsx)(m.A, {
                                                size: 14,
                                                strokeWidth: 1.75
                                              })
                                            }),
                                            (0, i.jsx)("button", {
                                              type: "button",
                                              onClick: () => O(s3, 1),
                                              disabled: t3 === b.length - 1,
                                              "aria-label": `Move ${s3.title} to ${b[t3 + 1] ?? "next stage"}`,
                                              children: (0, i.jsx)(p.A, {
                                                size: 14,
                                                strokeWidth: 1.75
                                              })
                                            })
                                          ]
                                        })
                                      ]
                                    })
                                  ]
                                },
                                s3.id
                              );
                            })
                          }),
                          0 === s2.length && (0, i.jsx)("p", {
                            className: w().empty,
                            children: "mine" === C ? "Nothing assigned to you" : "No tasks yet"
                          })
                        ]
                      })
                    ]
                  },
                  e3
                );
              })
            })
          }),
          (0, i.jsx)("span", {
            className: w().srOnly,
            role: "status",
            children: S
          })
        ]
      })
    });
  }
  let A = x;
}

__m(__module,__exports,__require);
}