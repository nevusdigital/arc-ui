/* project-board (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(24551, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var i = a(51811);
  let n = {
    name: "message-circle",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
          key: "1sd12s"
        }
      ]
    ]
  };
  n.node;
  let s = (0, i.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(30712, ".board{width:min(100%,1020px);min-width:0;overflow:hidden;border:1px solid var(--border);border-radius:24px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.board{contain:paint}\n@media (prefers-reduced-motion:reduce){.board *{transition-duration:0s!important}\n.tabular{font-variant-numeric:tabular-nums}\n.header{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px 16px;padding:18px 20px 16px}\n@media (max-width:700px){.header{padding:14px 16px 12px}\n.heading{min-width:0}\n.heading h2{margin:0;font:500 var(--text-base)/var(--leading-body) var(--font-body);letter-spacing:var(--tracking-body)}\n.heading p{margin:2px 0 0;color:var(--text-muted);font-size:var(--text-sm)}\n.headerActions{display:flex;align-items:center;gap:10px}\n@media (max-width:400px){.headerActions{width:100%;justify-content:space-between}\n.people{display:flex;padding-left:6px}\n.people img{width:28px;height:28px;margin-left:-6px;border:2px solid var(--surface);border-radius:50%;object-fit:cover}\n.people{display:none}\n.filters{display:flex;padding:2px;border-radius:11px;background:var(--surface-muted)}\n.filters button{position:relative;height:28px;padding:0 10px;border:0;border-radius:9px;background:transparent;color:var(--text-secondary);font:500 var(--text-sm)/1 var(--font-body);letter-spacing:var(--tracking-body);white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard)}\n.filters button>span:last-child{position:relative}\n.filters button[aria-pressed=true]{color:var(--foreground)}\n.filters button:hover{color:var(--foreground)}\n.filters button{height:36px;padding:0 12px}\n.filterHighlight{position:absolute;inset:0;border-radius:inherit;background:var(--surface-raised);box-shadow:var(--shadow-resting),0 0 0 1px var(--border-subtle)}\n.addButton{display:inline-flex;height:32px;align-items:center;gap:6px;padding:0 12px 0 10px;border:0;border-radius:10px;background:var(--foreground);color:var(--background);font:500 var(--text-sm)/1 var(--font-body);letter-spacing:var(--tracking-body);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:transform var(--duration-instant) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.addButton:active{transform:scale(.97)}\n.addButton:hover{opacity:.88}\n.addButton{height:40px}\n.addButton{width:40px;justify-content:center;padding:0}\n.addButton span{display:none}\n.addButton:active,.moveButtons button:active:not(:disabled){transform:none}\n.progress{height:2px;margin:0 20px 16px;overflow:hidden;border-radius:2px;background:var(--border-subtle)}\n.progress>span{display:block;height:100%;background:var(--success);transform-origin:left center}\n.progress{margin:0 16px 12px}\n.stageScroll{overflow-x:auto;padding:0 20px 20px;scroll-padding-inline:20px;scroll-snap-type:x proximity;overscroll-behavior-x:contain;scrollbar-width:none}\n.stageScroll::-webkit-scrollbar{display:none}\n.stageScroll{padding:0 16px 16px;scroll-padding-inline:16px}\n.stages{display:grid;grid-template-columns:repeat(4,minmax(200px,1fr));gap:10px;min-width:820px}\n.stages{grid-template-columns:repeat(4,max(232px,calc(100% - 44px)));min-width:0}\n.stage{min-width:0;scroll-snap-align:start}\n.stage h3{margin:0;font:500 var(--text-sm)/var(--leading-body) var(--font-body);letter-spacing:var(--tracking-body)}\n.stageHead{display:flex;height:28px;align-items:center;gap:8px;padding:0 6px 4px}\n.stageCount{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.cardStack{position:relative;display:flex;min-height:320px;box-sizing:border-box;flex-direction:column;gap:6px;padding:6px;border-radius:16px;background:var(--surface-muted)}\n.card{position:relative;flex:none;padding:12px;border:1px solid var(--border-subtle);border-radius:11px;background:var(--surface);transition:box-shadow var(--duration-fast) var(--ease-standard)}\n.card[data-moving]{z-index:1}\n.card h4{margin:6px 0 12px;font:500 var(--text-sm)/var(--leading-body) var(--font-body);letter-spacing:var(--tracking-body)}\n.card[data-done] h4{color:var(--text-secondary)}\n@media (hover:hover) and (pointer:fine){.card:hover{box-shadow:0 1px 3px oklch(0 0 0/.05)}\n.cardTop{display:flex;align-items:center;gap:8px;color:var(--text-secondary);font-size:var(--text-xs)}\n.due{margin-left:auto;color:var(--text-muted);font-variant-numeric:tabular-nums}\n.due[data-soon]{color:var(--warning)}\n.cardBottom{display:flex;align-items:center;gap:8px}\n.avatar{width:22px;height:22px;border-radius:50%;object-fit:cover}\n.comments{display:inline-flex;align-items:center;gap:4px;color:var(--text-muted);font-size:var(--text-xs)}\n.moveButtons{display:flex;gap:2px;margin-left:auto}\n.moveButtons button{display:grid;width:26px;height:26px;place-items:center;padding:0;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.moveButtons button:active:not(:disabled){transform:scale(.92)}\n.moveButtons button:disabled{opacity:.3;cursor:default}\n.moveButtons button:hover:not(:disabled){background:var(--surface-muted);color:var(--foreground)}\n.moveButtons{margin:-8px -8px -8px auto}\n.moveButtons button{width:40px;height:40px;border-radius:12px}\n.empty{display:grid;flex:1;place-items:center;margin:0;padding:20px;color:var(--text-muted);font-size:var(--text-xs);text-align:center}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}", {"board":"board","tabular":"tabular","header":"header","heading":"heading","headerActions":"headerActions","people":"people","filters":"filters","filterHighlight":"filterHighlight","addButton":"addButton","moveButtons":"moveButtons","progress":"progress","stageScroll":"stageScroll","stages":"stages","stage":"stage","stageHead":"stageHead","stageCount":"stageCount","cardStack":"cardStack","card":"card","cardTop":"cardTop","due":"due","cardBottom":"cardBottom","avatar":"avatar","comments":"comments","empty":"empty","srOnly":"srOnly"});
A.reg(61600, function(__module,__exports,__require){
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
});
A.cssFor("project-board", [30712]);
A.item("project-board", {entry:61600, export:"ProjectBoard", kind:"block", tier:"pro", unresolved:[]});
})();