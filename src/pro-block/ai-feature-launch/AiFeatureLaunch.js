function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, {
    AiFeatureLaunch: () => el,
    default: () => eo,
    defaultLaunchSteps: () => ea
  });
  var n = t(95155), i = t(12115), s = t(79196), r = t(7890), l = t(18310), o = t(28245), c = t(55809), d = t(92171), u = t(80642), h = t(25354), m = t(64577), p = t(35484), f = t(53364), g = t(14577), _ = t(51288), w = t(50680), b = t(52898), x = t(7770);
  function j({ title: e2 = "Claude", ...a2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...a2,
      children: (0, n.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  var y = t(36483), v = t(61491), N = t(51752), k = t(88359), T = t(17356), A = t(47421), S = t(86272), R = t(51128), C = t(15330), L = t(63769), M = t(20292), z = t(58183), I = t(48246), E = t(50981), P = t(67752), $ = t(1536), D = t.n($);
  function B({ id: e2, children: a2, className: t2 }) {
    return (0, n.jsx)("span", {
      className: [D().swap, t2].filter(Boolean).join(" "),
      children: (0, n.jsx)(u.N, {
        initial: false,
        children: (0, n.jsx)(
          h.PY1.span,
          {
            className: D().swapItem,
            initial: { opacity: 0, y: 2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                duration: x.T.duration.fast,
                ease: [...x.T.ease.enter]
              }
            },
            exit: {
              opacity: 0,
              y: 0,
              transition: { duration: 0.1, ease: [...x.T.ease.standard] }
            },
            children: a2
          },
          e2
        )
      })
    });
  }
  function F(e2, a2 = 3) {
    let t2 = e2.split(" "), n2 = [];
    for (let e3 = 0; e3 < t2.length; e3 += a2) n2.push(t2.slice(e3, e3 + a2).join(" "));
    return n2;
  }
  function O(e2, a2, t2) {
    return a2 < e2 ? 0 : Math.min(t2, Math.floor((a2 - e2) / 40) + 1);
  }
  function Y({ chunks: e2, shown: a2, offset: t2 = 0 }) {
    return (0, n.jsx)(n.Fragment, {
      children: e2.slice(0, Math.max(0, a2 - t2)).map(
        (e3, a3) => (0, n.jsxs)(
          "span",
          { className: D().chunk, children: [a3 ? " " : "", e3] },
          a3
        )
      )
    });
  }
  let H = (0, n.jsx)(j, {
    className: D().claudeMark,
    width: 14,
    height: 14,
    "aria-hidden": "true"
  }), W = F(
    "The pricing page is nearly done. Could someone double-check the numbers before Friday's launch?"
  );
  function G({ time: e2 }) {
    let a2 = e2 >= 2120 && e2 < 6e3, t2 = e2 >= 800 && e2 < 4400 ? e2 < 1320 ? "prompt" : e2 < 2120 ? "working" : "review" : null;
    return (0, n.jsxs)("div", {
      className: D().panel,
      children: [
        (0, n.jsxs)("div", {
          className: D().miniHead,
          children: [
            (0, n.jsx)(y.A, { size: 14, "aria-hidden": "true" }),
            (0, n.jsx)("span", {
              className: D().miniTitle,
              children: "Q4 launch notes"
            }),
            (0, n.jsx)("span", {
              className: D().miniMeta,
              children: "Edited just now"
            })
          ]
        }),
        (0, n.jsx)(B, {
          id: a2 ? "rewrite" : "draft",
          className: D().docText,
          children: (0, n.jsx)("span", {
            className: D().selection,
            "data-selected": e2 >= 480 && e2 < 4400 || void 0,
            children: a2 ? (0, n.jsx)(Y, { chunks: W, shown: O(2120, e2, W.length) }) : "hey all, pricing page is basically done i think but we still need someone to double check the numbers before friday"
          })
        }),
        (0, n.jsx)(u.N, {
          initial: false,
          children: t2 ? (0, n.jsx)(
            h.PY1.div,
            {
              className: D().toolbar,
              initial: { opacity: 0, y: 4 },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: x.T.duration.fast,
                  ease: [...x.T.ease.enter]
                }
              },
              exit: { opacity: 0, transition: { duration: 0.12 } },
              children: (0, n.jsx)(B, {
                id: t2,
                className: D().toolbarSwap,
                children: "prompt" === t2 ? (0, n.jsxs)("span", {
                  className: D().toolbarRow,
                  children: [
                    (0, n.jsx)(v.A, {
                      size: 14,
                      "aria-hidden": "true"
                    }),
                    "Improve writing"
                  ]
                }) : "working" === t2 ? (0, n.jsxs)("span", {
                  className: D().toolbarRow,
                  children: [
                    H,
                    (0, n.jsx)(b.n, { children: "Rewriting" })
                  ]
                }) : (0, n.jsxs)("span", {
                  className: D().toolbarRow,
                  children: [
                    (0, n.jsxs)("span", {
                      className: D().toolbarAction,
                      "data-tone": "accent",
                      "data-pressed": e2 >= 3960 || void 0,
                      children: [
                        (0, n.jsx)(m.A, {
                          size: 14,
                          "aria-hidden": "true"
                        }),
                        "Accept"
                      ]
                    }),
                    (0, n.jsx)("span", {
                      className: D().toolbarAction,
                      children: "Discard"
                    })
                  ]
                })
              })
            },
            "bar"
          ) : null
        })
      ]
    });
  }
  let K = [
    {
      id: "sofia-ramirez",
      name: "Sofia",
      text: "Can we move launch to Tuesday? Pricing still needs a pass."
    },
    {
      id: "daniel-kim",
      name: "Daniel",
      text: "Tuesday works. I'll update the changelog tonight."
    },
    {
      id: "chloe-nguyen",
      name: "Chloe",
      text: "Are we doing 15% or 20% off annual plans?"
    }
  ], V = [
    { icon: N.A, chunks: F("Launch moves to Tuesday, Nov 3") },
    { icon: k.A, chunks: F("Sofia owns the final pricing check") },
    { icon: T.A, chunks: F("Open: 15% or 20% off annual plans") }
  ], Q = V.reduce(
    (e2, a2, t2) => [...e2, t2 ? e2[t2 - 1] + V[t2 - 1].chunks.length : 0],
    []
  ), U = V.reduce((e2, a2) => e2 + a2.chunks.length, 0);
  function q({ time: e2 }) {
    let a2 = e2 >= 1520 && e2 < 6e3, t2 = e2 < 700 || e2 >= 6e3 ? "idle" : e2 < 1520 ? "working" : "done", i2 = O(1520, e2, U);
    return (0, n.jsxs)("div", {
      className: D().panel,
      children: [
        (0, n.jsxs)("div", {
          className: D().miniHead,
          children: [
            (0, n.jsx)(A.A, { size: 14, "aria-hidden": "true" }),
            (0, n.jsx)("span", {
              className: D().miniTitle,
              children: "launch-q4"
            }),
            (0, n.jsx)("span", {
              className: D().miniMetaInline,
              children: "42 replies"
            }),
            (0, n.jsx)("span", {
              className: D().miniPill,
              "data-state": t2,
              children: (0, n.jsx)(B, {
                id: t2,
                className: D().miniPillSwap,
                children: "idle" === t2 ? (0, n.jsxs)("span", {
                  className: D().toolbarRow,
                  children: [
                    (0, n.jsx)(S.A, { size: 14, "aria-hidden": "true" }),
                    "Summarize"
                  ]
                }) : "working" === t2 ? (0, n.jsxs)("span", {
                  className: D().toolbarRow,
                  children: [
                    H,
                    (0, n.jsx)(b.n, { children: "Summarizing" })
                  ]
                }) : (0, n.jsxs)("span", {
                  className: D().toolbarRow,
                  children: [
                    (0, n.jsx)(m.A, {
                      size: 14,
                      "aria-hidden": "true"
                    }),
                    "Summarized"
                  ]
                })
              })
            })
          ]
        }),
        (0, n.jsx)(B, {
          id: a2 ? "summary" : "thread",
          className: D().rows,
          children: a2 ? (0, n.jsx)("span", {
            className: D().rowList,
            children: V.map((e3, a3) => {
              let t3 = e3.icon, s2 = i2 > Q[a3];
              return (0, n.jsxs)(
                "span",
                {
                  className: D().sumRow,
                  children: [
                    s2 ? (0, n.jsx)(t3, {
                      size: 14,
                      className: `${D().sumIcon} ${D().chunk}`,
                      "aria-hidden": "true"
                    }) : (0, n.jsx)("span", { className: D().sumIconSpace }),
                    (0, n.jsx)("span", {
                      className: D().truncate,
                      children: (0, n.jsx)(Y, {
                        chunks: e3.chunks,
                        shown: i2,
                        offset: Q[a3]
                      })
                    })
                  ]
                },
                a3
              );
            })
          }) : (0, n.jsx)("span", {
            className: D().rowList,
            children: K.map(
              (e3) => (0, n.jsxs)(
                "span",
                {
                  className: D().threadRow,
                  children: [
                    (0, n.jsx)("img", {
                      className: D().avatar,
                      src: (0, P.my)(e3.id),
                      alt: "",
                      width: 20,
                      height: 20
                    }),
                    (0, n.jsx)("span", {
                      className: D().threadName,
                      children: e3.name
                    }),
                    (0, n.jsx)("span", {
                      className: D().threadText,
                      children: e3.text
                    })
                  ]
                },
                e3.id
              )
            )
          })
        })
      ]
    });
  }
  let J = F(
    "Annual plans get 20% off, agreed in Monday's pricing review. It ships with the new pricing page on Tuesday, Nov 3."
  ), X = 1520 + 40 * J.length + 200, Z = [
    {
      mark: (0, n.jsx)(
        function({ title: e2 = "Notion", ...a2 }) {
          return (0, n.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            role: "img",
            "aria-label": e2,
            ...a2,
            children: (0, n.jsx)("path", {
              d: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
            })
          });
        },
        { width: 14, height: 14, "aria-hidden": "true" }
      ),
      label: "Pricing review"
    },
    {
      mark: (0, n.jsx)(
        function({ title: e2 = "Linear", ...a2 }) {
          return (0, n.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            role: "img",
            "aria-label": e2,
            ...a2,
            children: (0, n.jsx)("path", {
              d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
            })
          });
        },
        { width: 14, height: 14, "aria-hidden": "true" }
      ),
      label: "GRO-412"
    },
    {
      mark: (0, n.jsx)(
        function({ title: e2 = "Slack", ...a2 }) {
          return (0, n.jsxs)("svg", {
            viewBox: "0 0 24 24",
            role: "img",
            "aria-label": e2,
            ...a2,
            children: [
              (0, n.jsx)("path", {
                fill: "#E01E5A",
                d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
              }),
              (0, n.jsx)("path", {
                fill: "#36C5F0",
                d: "M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
              }),
              (0, n.jsx)("path", {
                fill: "#2EB67D",
                d: "M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
              }),
              (0, n.jsx)("path", {
                fill: "#ECB22E",
                d: "M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
              })
            ]
          });
        },
        { width: 14, height: 14, "aria-hidden": "true" }
      ),
      label: "#launch-q4"
    }
  ];
  function ee({ time: e2 }) {
    let a2 = e2 >= 160 && e2 < 6e3, t2 = e2 < 640 ? "idle" : e2 < 1520 ? "working" : "answer";
    return (0, n.jsx)("div", {
      className: D().panel,
      children: (0, n.jsx)(u.N, {
        initial: false,
        children: a2 ? (0, n.jsxs)(
          h.PY1.div,
          {
            className: D().conversation,
            initial: { opacity: 0, y: 2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                duration: x.T.duration.fast,
                ease: [...x.T.ease.enter]
              }
            },
            exit: { opacity: 0, transition: { duration: 0.16 } },
            children: [
              (0, n.jsx)("span", {
                className: D().bubble,
                children: "What did we decide on annual pricing?"
              }),
              (0, n.jsxs)("span", {
                className: D().answerRow,
                "data-visible": "idle" !== t2 || void 0,
                children: [
                  H,
                  (0, n.jsx)(B, {
                    id: "answer" === t2 ? "answer" : "working",
                    className: D().answerSwap,
                    children: "answer" === t2 ? (0, n.jsx)("span", {
                      children: (0, n.jsx)(Y, {
                        chunks: J,
                        shown: O(1520, e2, J.length)
                      })
                    }) : (0, n.jsx)(b.n, {
                      children: "Searching 3 sources"
                    })
                  })
                ]
              }),
              e2 >= X ? (0, n.jsx)("span", {
                className: D().sources,
                children: Z.map(
                  (e3, a3) => (0, n.jsxs)(
                    "span",
                    {
                      className: `${D().source} ${D().chunk}`,
                      style: { animationDelay: `${40 * a3}ms` },
                      children: [
                        e3.mark,
                        (0, n.jsx)("span", {
                          className: D().truncate,
                          children: e3.label
                        })
                      ]
                    },
                    e3.label
                  )
                )
              }) : null
            ]
          },
          "conversation"
        ) : null
      })
    });
  }
  let ea = [
    {
      id: "rewrite",
      title: "Rewrite anything in place",
      description: "Select any text and AI rewrites it in your team's voice, right where you write.",
      benefits: [
        { icon: v.A, label: "Fixes tone, clarity and grammar" },
        { icon: R.A, label: "Keeps your links and formatting" },
        { icon: C.A, label: "Undo any change in one keystroke" }
      ],
      demo: (e2) => (0, n.jsx)(G, { time: e2 }),
      posterTime: 3400
    },
    {
      id: "summarize",
      title: "Catch up on any thread",
      description: "Turn a long discussion into its decisions, owners and open questions.",
      benefits: [
        { icon: L.A, label: "Turns 42 replies into three lines" },
        { icon: M.A, label: "Finds decisions, owners and dates" },
        { icon: z.A, label: "Every point links to its message" }
      ],
      demo: (e2) => (0, n.jsx)(q, { time: e2 }),
      posterTime: 3600
    },
    {
      id: "ask",
      title: "Ask your whole workspace",
      description: "Get answers from your docs, issues and chats, with every source linked.",
      benefits: [
        { icon: I.A, label: "Answers cite the pages they used" },
        { icon: f.A, label: "Respects every page permission" },
        { icon: E.A, label: "Never used to train models" }
      ],
      demo: (e2) => (0, n.jsx)(ee, { time: e2 }),
      posterTime: 3600
    }
  ], et = (e2, a2) => new Promise((t2, n2) => {
    let i2 = window.setTimeout(t2, e2);
    a2.addEventListener(
      "abort",
      () => {
        window.clearTimeout(i2), n2(new DOMException("Aborted", "AbortError"));
      },
      { once: true }
    );
  }), en = {
    opacity: 1,
    y: 0,
    transition: {
      duration: x.T.duration.fast,
      delay: 0.06,
      ease: [...x.T.ease.enter]
    }
  }, ei = {
    opacity: 0,
    y: 2,
    transition: {
      opacity: { duration: 0.1, ease: [...x.T.ease.standard] },
      y: { duration: 0, delay: 0.1 }
    }
  }, es = { duration: 0 };
  function er({ demo: e2, clock: a2, poster: t2, still: l2 }) {
    let o2 = (0, s.tF)(), c2 = (0, i.useRef)(o2), [d2, u2] = (0, i.useState)(0);
    return ((0, i.useLayoutEffect)(() => {
      c2.current = o2;
    }, [o2]), (0, r.L)(a2, "change", (e3) => {
      c2.current && !l2 && u2(40 * Math.floor(e3 / 40));
    }), "function" != typeof e2) ? (0, n.jsx)(n.Fragment, { children: e2 }) : (0, n.jsx)(n.Fragment, { children: e2(l2 ? t2 : d2) });
  }
  function el({
    steps: e2 = ea,
    step: a2,
    defaultStep: t2 = 0,
    onStepChange: s2,
    autoPlay: r2 = true,
    stepDuration: y2 = 6400,
    workspaceName: v2 = "Halcyon",
    memberCount: N2 = 48,
    canManage: k2 = true,
    enabled: T2,
    defaultEnabled: A2 = false,
    onEnabledChange: S2,
    onTry: R2,
    onLearnMore: C2,
    modelName: L2 = "Claude Sonnet 5.5",
    modelMark: M2,
    enableLabel: z2 = "Enable for my workspace",
    tryLabel: I2 = "Try it now",
    learnMoreLabel: E2 = "Learn more",
    className: P2
  }) {
    let $2 = (0, l.I)() ?? false, F2 = (0, i.useId)(), O2 = `${F2}-switch`, Y2 = `${F2}-note`, H2 = (0, i.useRef)(null), W2 = (0, i.useRef)([]), G2 = Math.max(1, e2.length), [K2, V2] = (0, i.useState)(t2), Q2 = Math.min(G2 - 1, Math.max(0, a2 ?? K2)), U2 = e2[Q2], [q2, J2] = (0, i.useState)(r2), X2 = q2 && r2 && !$2 && G2 > 1, [Z2, ee2] = (0, i.useState)(0), eo2 = (0, o.d)(0), ec = (0, c.G)(eo2, (e3) => Math.min(1, e3 / y2)), ed = (0, i.useRef)(null), eu = (0, i.useRef)(true), eh = (0, i.useRef)(false), em = (0, i.useCallback)(
      (e3, t3) => {
        let n2 = (e3 + G2) % G2;
        t3 && J2(false), n2 !== Q2 && (void 0 === a2 && V2(n2), s2?.(n2));
      },
      [G2, s2, Q2, a2]
    ), ep = (0, i.useRef)(() => {
    });
    (0, i.useEffect)(() => {
      ep.current = () => {
        X2 && !eh.current ? em(Q2 + 1, false) : ee2((e3) => e3 + 1);
      };
    }, [em, X2, Q2]), (0, i.useLayoutEffect)(() => {
      eo2.jump(0);
    }, [eo2, Q2, Z2]), (0, i.useEffect)(() => {
      if ($2) return;
      let e3 = (0, d.i)(eo2, y2, {
        duration: y2 / 1e3,
        ease: "linear",
        onComplete: () => ep.current()
      });
      return ed.current = e3, eu.current || e3.pause(), () => e3.stop();
    }, [eo2, Z2, $2, Q2, y2]), (0, i.useEffect)(() => {
      let e3 = H2.current;
      if (!e3 || "u" < typeof IntersectionObserver) return;
      let a3 = new IntersectionObserver(([e4]) => {
        eu.current = e4.isIntersecting, e4.isIntersecting ? ed.current?.play() : ed.current?.pause();
      });
      return a3.observe(e3), () => a3.disconnect();
    }, []);
    let [ef, eg] = (0, i.useState)(""), [e_, ew] = (0, i.useState)(null), eb = (0, i.useRef)(void 0), ex = (0, i.useCallback)((e3) => {
      window.clearTimeout(eb.current), ew({ id: Date.now(), text: e3 }), eg(e3), eb.current = window.setTimeout(() => ew(null), 2800);
    }, []), [ej, ey] = (0, i.useState)(A2), ev = T2 ?? ej, [eN, ek] = (0, i.useState)("idle"), [eT, eA] = (0, i.useState)(null), eS = (0, i.useRef)(null), eR = `${N2} member${1 === N2 ? "" : "s"}`, [eC, eL] = (0, i.useState)(false), eM = (0, i.useRef)(null);
    (0, i.useEffect)(
      () => () => {
        eS.current?.abort(), window.clearTimeout(eb.current), eM.current?.abort();
      },
      []
    );
    let ez = k2 ? "pending" === eN ? eT ? "turningOn" : "turningOff" : "error" === eN ? "error" : ev ? "on" : "off" : "locked", eI = {
      off: (0, n.jsxs)("span", {
        className: D().noteText,
        children: ["Admins only. Turns on AI for all ", eR, "."]
      }),
      turningOn: (0, n.jsx)(b.n, {
        active: "turningOn" === ez,
        children: `Turning on for ${eR}`
      }),
      turningOff: (0, n.jsx)(b.n, {
        active: "turningOff" === ez,
        children: `Turning off for ${eR}`
      }),
      on: (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(m.A, {
            size: 14,
            className: D().noteIconSuccess,
            "aria-hidden": "true"
          }),
          (0, n.jsxs)("span", {
            className: D().noteText,
            children: [
              "On for all ",
              eR,
              ".",
              S2 ? "" : " Simulated, nothing was saved."
            ]
          })
        ]
      }),
      error: (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(p.A, {
            size: 14,
            className: D().noteIconDanger,
            "aria-hidden": "true"
          }),
          (0, n.jsx)("span", {
            className: D().noteText,
            children: "Could not save. Nothing changed, try again."
          })
        ]
      }),
      locked: (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(f.A, {
            size: 14,
            className: D().noteIcon,
            "aria-hidden": "true"
          }),
          (0, n.jsx)("span", {
            className: D().noteText,
            children: "Only admins can change this. You can still try it yourself."
          })
        ]
      })
    }, eE = M2 ?? (0, n.jsx)(j, {
      className: D().claudeMark,
      width: 14,
      height: 14,
      "aria-hidden": "true"
    });
    return (0, n.jsxs)("section", {
      ref: H2,
      className: [D().root, P2].filter(Boolean).join(" "),
      "aria-roledescription": "feature announcement",
      "aria-label": U2?.title ?? "New AI features",
      onPointerEnter: () => {
        eh.current = true;
      },
      onPointerLeave: () => {
        eh.current = false;
      },
      children: [
        (0, n.jsxs)("div", {
          className: D().stage,
          "data-frame-keep": "",
          children: [
            (0, n.jsx)(u.N, {
              initial: false,
              children: (0, n.jsx)(
                h.PY1.div,
                {
                  className: D().demoLayer,
                  "aria-hidden": "true",
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: $2 ? es : {
                      duration: x.T.duration.fast,
                      delay: 0.06,
                      ease: [...x.T.ease.enter]
                    }
                  },
                  exit: {
                    opacity: 0,
                    transition: $2 ? es : { duration: 0.1, ease: [...x.T.ease.standard] }
                  },
                  children: U2 ? (0, n.jsx)(er, {
                    demo: U2.demo,
                    clock: eo2,
                    poster: U2.posterTime ?? 0.6 * y2,
                    still: $2
                  }) : null
                },
                U2?.id ?? "empty"
              )
            }),
            G2 > 1 ? (0, n.jsx)("div", {
              className: D().dots,
              role: "group",
              "aria-label": "Tour steps",
              onKeyDown: (e3) => {
                let a3 = "ArrowRight" === e3.key ? 1 : "ArrowLeft" === e3.key ? -1 : 0, t3 = "Home" === e3.key ? 0 : "End" === e3.key ? G2 - 1 : a3 ? (Q2 + a3 + G2) % G2 : -1;
                t3 < 0 || (e3.preventDefault(), em(t3, true), W2.current[t3]?.focus());
              },
              children: e2.map((e3, a3) => {
                let t3 = a3 === Q2;
                return (0, n.jsx)(
                  "button",
                  {
                    ref: (e4) => {
                      W2.current[a3] = e4;
                    },
                    type: "button",
                    className: D().dot,
                    "aria-label": `Step ${a3 + 1} of ${G2}: ${e3.title}`,
                    "aria-current": t3 ? "step" : void 0,
                    tabIndex: t3 ? 0 : -1,
                    onClick: () => em(a3, true),
                    children: (0, n.jsx)(h.PY1.span, {
                      className: D().dotMark,
                      "data-active": t3 || void 0,
                      initial: false,
                      animate: { width: t3 ? 20 : 6 },
                      transition: $2 ? es : {
                        type: "spring",
                        visualDuration: 0.24,
                        bounce: 0
                      },
                      children: t3 ? (0, n.jsx)(h.PY1.span, {
                        className: D().dotFill,
                        style: { scaleX: X2 ? ec : 1 }
                      }) : null
                    })
                  },
                  e3.id
                );
              })
            }) : null
          ]
        }),
        (0, n.jsxs)("div", {
          className: D().body,
          children: [
            (0, n.jsx)("div", {
              className: D().copyStack,
              children: e2.map((e3, a3) => {
                let t3 = a3 === Q2;
                return (0, n.jsxs)(
                  h.PY1.div,
                  {
                    className: D().copyLayer,
                    "data-active": t3 || void 0,
                    "aria-hidden": !t3 || void 0,
                    inert: !t3,
                    initial: false,
                    animate: t3 ? en : ei,
                    children: [
                      (0, n.jsx)("h2", {
                        className: D().title,
                        children: e3.title
                      }),
                      (0, n.jsx)("p", {
                        className: D().description,
                        children: e3.description
                      }),
                      e3.benefits.length ? (0, n.jsx)("ul", {
                        className: D().benefits,
                        children: e3.benefits.slice(0, 3).map((e4) => {
                          let a4 = e4.icon;
                          return (0, n.jsxs)(
                            "li",
                            {
                              className: D().benefit,
                              children: [
                                (0, n.jsx)(a4, {
                                  size: 16,
                                  className: D().benefitIcon,
                                  "aria-hidden": "true"
                                }),
                                (0, n.jsx)("span", { children: e4.label })
                              ]
                            },
                            e4.label
                          );
                        })
                      }) : null
                    ]
                  },
                  e3.id
                );
              })
            }),
            (0, n.jsxs)("div", {
              className: D().setting,
              children: [
                (0, n.jsx)("label", {
                  htmlFor: O2,
                  className: D().settingLabel,
                  "data-disabled": !k2 || void 0,
                  children: z2
                }),
                (0, n.jsx)(w.d, {
                  id: O2,
                  checked: eT ?? ev,
                  onCheckedChange: (e3) => {
                    if (J2(false), eS.current) {
                      eS.current.abort(), eS.current = null, eA(null), ek("idle"), eg("Cancelled. Nothing changed.");
                      return;
                    }
                    let a3 = new AbortController();
                    eS.current = a3, eA(e3), ek("pending"), eg(e3 ? `Turning on for ${eR}` : `Turning off for ${eR}`), (S2 ? Promise.resolve().then(() => S2(e3, a3.signal)) : et(900, a3.signal)).then(
                      () => {
                        a3.signal.aborted || (void 0 === T2 && ey(e3), ek("idle"), eg(
                          `${e3 ? "On" : "Off"} for ${v2}.${S2 ? "" : " Simulated, nothing was saved."}`
                        ));
                      },
                      () => {
                        a3.signal.aborted || (ek("error"), eg(
                          "Could not save the setting. Nothing changed."
                        ));
                      }
                    ).finally(() => {
                      eS.current === a3 && (eS.current = null), a3.signal.aborted || eA(null);
                    });
                  },
                  disabled: !k2,
                  "aria-describedby": Y2,
                  className: D().switch
                }),
                (0, n.jsx)("div", {
                  id: Y2,
                  className: D().noteStack,
                  children: Object.keys(eI).map(
                    (e3) => (0, n.jsx)(
                      "span",
                      {
                        className: D().note,
                        "data-active": e3 === ez || void 0,
                        "aria-hidden": e3 !== ez || void 0,
                        children: eI[e3]
                      },
                      e3
                    )
                  )
                })
              ]
            }),
            (0, n.jsxs)("div", {
              className: D().footer,
              children: [
                (0, n.jsx)("div", {
                  className: D().meta,
                  children: (0, n.jsx)(B, {
                    id: e_ ? `flash-${e_.id}` : "model",
                    className: D().metaSwap,
                    children: e_ ? (0, n.jsxs)("span", {
                      className: D().metaItem,
                      children: [
                        (0, n.jsx)(g.A, {
                          size: 14,
                          "aria-hidden": "true"
                        }),
                        (0, n.jsx)("span", {
                          className: D().truncate,
                          children: e_.text
                        })
                      ]
                    }) : (0, n.jsxs)("span", {
                      className: D().metaItem,
                      children: [
                        eE,
                        (0, n.jsxs)("span", {
                          className: D().truncate,
                          children: ["Runs on ", L2]
                        })
                      ]
                    })
                  })
                }),
                (0, n.jsxs)("div", {
                  className: D().actions,
                  children: [
                    (0, n.jsx)(_.$, {
                      variant: "secondary",
                      onClick: () => {
                        J2(false), C2 ? C2() : ex("Simulated, docs were not opened");
                      },
                      children: E2
                    }),
                    (0, n.jsx)(_.$, {
                      variant: "primary",
                      loading: eC,
                      onClick: () => {
                        if (J2(false), eC) return;
                        let e3 = new AbortController();
                        eM.current = e3, eL(true), (R2 ? Promise.resolve().then(() => R2(e3.signal)) : et(600, e3.signal)).then(
                          () => {
                            R2 || e3.signal.aborted || ex("Simulated, nothing was opened");
                          },
                          () => {
                            e3.signal.aborted || ex("Could not open it. Try again.");
                          }
                        ).finally(() => {
                          e3.signal.aborted || eL(false);
                        });
                      },
                      children: I2
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("span", {
          className: D().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ef
        })
      ]
    });
  }
  let eo = el;
}

__m(__module,__exports,__require);
}