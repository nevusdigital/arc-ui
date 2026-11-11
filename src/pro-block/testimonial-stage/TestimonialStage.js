function(__module,__exports,__require){
"use strict";
function __m(e, a, i) {
  "use strict";
  i.r(a), i.d(a, { TestimonialStage: () => v, default: () => j });
  var t = i(95155), o = i(5772), s = i(12115), n = i(18310), r = i(80642), l = i(25354), d = i(31966), h = i(90467), c = i(67752), m = i(7770), g = i(49596), p = i.n(g);
  let u = [
    {
      id: "emma-collins",
      company: "Northwind",
      quote: "Feature requests used to live in three inboxes. Now they land in one place, already grouped by theme, and our Monday triage takes ten minutes."
    },
    {
      id: "marcus-johnson",
      company: "Halcyon",
      quote: "I link a trend in the pull request and the conversation is over. Nobody argues with a line that has been climbing for six weeks."
    },
    {
      id: "sofia-ramirez",
      company: "Juniper Health",
      quote: "Support and product finally read the same numbers. When a customer asks for something twice, we see it the same day."
    }
  ], { spring: w, duration: b, ease: f, blur: _ } = m.T, y = [...f.enter];
  function v({ className: e2, onPerspectiveChange: a2 }) {
    let i2 = !!(0, n.I)(), m2 = (0, s.useId)(), [[g2, f2], j2] = (0, s.useState)([0, 1]), k = (0, s.useRef)([]), x = u[g2], A = (0, c.MV)(x.id);
    function N(e3, i3) {
      let t2 = (e3 + u.length) % u.length;
      t2 !== g2 && (j2([t2, i3 ?? (e3 > g2 ? 1 : -1)]), a2?.({ id: u[t2].id, name: (0, c.MV)(u[t2].id).name }));
    }
    return (0, t.jsx)("section", {
      className: [p().stage, e2].filter(Boolean).join(" "),
      "aria-labelledby": `${m2}-title`,
      children: (0, t.jsxs)("div", {
        className: p().layout,
        children: [
          (0, t.jsx)("div", {
            className: p().imageColumn,
            children: (0, t.jsx)(r.N, {
              initial: false,
              children: (0, t.jsx)(
                l.PY1.div,
                {
                  className: p().imageWrap,
                  initial: i2 ? { opacity: 0 } : { opacity: 0, scale: 1.03 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0 },
                  transition: i2 ? { duration: b.instant } : {
                    opacity: { duration: b.considered, ease: y },
                    scale: { duration: b.considered, ease: y }
                  },
                  children: (0, t.jsx)(o.default, {
                    src: (0, c.o4)(x.id),
                    alt: `Portrait of ${A.name}`,
                    fill: true,
                    sizes: "(max-width: 680px) 100vw, 480px",
                    priority: 0 === g2
                  })
                },
                x.id
              )
            })
          }),
          (0, t.jsxs)("div", {
            className: p().contentColumn,
            children: [
              (0, t.jsx)("h2", {
                id: `${m2}-title`,
                className: p().title,
                children: "What teams say about Beacon"
              }),
              (0, t.jsxs)("figure", {
                className: p().quoteArea,
                id: `${m2}-panel`,
                role: "tabpanel",
                "aria-labelledby": `${m2}-${x.id}`,
                children: [
                  (0, t.jsx)("div", {
                    className: p().quoteSlot,
                    children: (0, t.jsx)(r.N, {
                      initial: false,
                      children: (0, t.jsx)(
                        l.PY1.blockquote,
                        {
                          className: p().quote,
                          initial: i2 ? { opacity: 0 } : {
                            opacity: 0,
                            x: i2 ? 0 : 12 * f2,
                            filter: `blur(${_.subtle}px)`
                          },
                          animate: {
                            opacity: 1,
                            x: 0,
                            filter: "blur(0px)",
                            transitionEnd: { filter: "none" }
                          },
                          exit: {
                            opacity: 0,
                            transition: { duration: i2 ? 0 : b.fast }
                          },
                          transition: i2 ? { duration: b.instant } : {
                            opacity: { duration: b.standard, ease: y },
                            filter: { duration: b.standard },
                            x: w.smooth
                          },
                          children: (0, t.jsxs)("p", {
                            children: ["\u201C", x.quote, "\u201D"]
                          })
                        },
                        x.id
                      )
                    })
                  }),
                  (0, t.jsx)("figcaption", {
                    className: p().author,
                    children: (0, t.jsx)(r.N, {
                      initial: false,
                      children: (0, t.jsxs)(
                        l.PY1.span,
                        {
                          className: p().authorInner,
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: {
                            opacity: 0,
                            transition: { duration: b.instant }
                          },
                          transition: i2 ? { duration: b.instant } : { duration: b.standard, ease: y, delay: 0.06 },
                          children: [
                            (0, t.jsx)("span", {
                              className: p().authorName,
                              children: A.name
                            }),
                            (0, t.jsxs)("span", {
                              className: p().authorRole,
                              children: [A.role, ", ", x.company]
                            })
                          ]
                        },
                        x.id
                      )
                    })
                  })
                ]
              }),
              (0, t.jsxs)("div", {
                className: p().footer,
                children: [
                  (0, t.jsx)("div", {
                    className: p().tabs,
                    role: "tablist",
                    "aria-label": "Quotes",
                    onKeyDown: function(e3) {
                      let a3 = "ArrowRight" === e3.key ? 1 : "ArrowLeft" === e3.key ? -1 : 0;
                      if (!a3) return;
                      e3.preventDefault();
                      let i3 = (g2 + a3 + u.length) % u.length;
                      N(i3, a3), k.current[i3]?.focus();
                    },
                    children: u.map((e3, a3) => {
                      let o2 = a3 === g2;
                      return (0, t.jsx)(
                        "button",
                        {
                          ref: (e4) => {
                            k.current[a3] = e4;
                          },
                          id: `${m2}-${e3.id}`,
                          type: "button",
                          role: "tab",
                          "aria-selected": o2,
                          "aria-controls": `${m2}-panel`,
                          "aria-label": (0, c.MV)(e3.id).name,
                          tabIndex: o2 ? 0 : -1,
                          className: p().tab,
                          onClick: () => N(a3),
                          children: (0, t.jsx)("span", {
                            className: p().tabBar,
                            children: o2 && (0, t.jsx)(l.PY1.span, {
                              layoutId: `${m2}-bar`,
                              className: p().tabFill,
                              transition: i2 ? { duration: 0 } : w.morph
                            })
                          })
                        },
                        e3.id
                      );
                    })
                  }),
                  (0, t.jsxs)("div", {
                    className: p().arrows,
                    children: [
                      (0, t.jsx)("button", {
                        type: "button",
                        className: p().arrow,
                        onClick: () => N(g2 - 1, -1),
                        "aria-label": "Previous quote",
                        children: (0, t.jsx)(d.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      }),
                      (0, t.jsx)("button", {
                        type: "button",
                        className: p().arrow,
                        onClick: () => N(g2 + 1, 1),
                        "aria-label": "Next quote",
                        children: (0, t.jsx)(h.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    });
  }
  let j = v;
}

__m(__module,__exports,__require);
}