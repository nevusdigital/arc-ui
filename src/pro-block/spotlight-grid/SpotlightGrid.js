function(__module,__exports,__require){
"use strict";
function __m(e, i, a) {
  "use strict";
  a.r(i), a.d(i, { SpotlightGrid: () => eo, default: () => ec });
  var t = a(95155), s = a(12115), n = a(5772), l = a(18310), r = a(80642), o = a(25354), d = a(28245), c = a(55809), h = a(20122), p = a(61792), m = a(22535), g = a(92171), u = a(57700), _ = a(44825), x = a(92571), y = a(64577), j = a(9005), v = a(65024), w = a(67752), f = a(7770), b = a(33976), N = a.n(b);
  let { spring: k, duration: T, blur: S } = f.T, M = [...f.T.ease.enter], P = [...f.T.ease.inOut], L = [...f.T.ease.standard], A = (e2, i2) => {
    let a2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: a2 * a2,
      damping: 2 * (1 - i2) * a2,
      mass: 1
    };
  }, R = A(0.5, 0), $ = A(0.4, 0), C = [
    {
      id: "latency",
      title: "Latency, as it happens",
      blurb: "Every route traced from the edge, with p95 updated each minute.",
      wide: true
    },
    {
      id: "deploys",
      title: "Deploys on autopilot",
      blurb: "Merges to main ship on their own once checks pass."
    },
    {
      id: "flags",
      title: "Flags without redeploys",
      blurb: "Release to a slice of traffic and widen it when it holds."
    },
    {
      id: "review",
      title: "Review in the preview",
      blurb: "Comments pin to the page your team is actually looking at.",
      wide: true
    }
  ];
  function Y(e2, i2, a2, t2) {
    return Array.from({ length: i2 }, (i3, s2) => {
      let n2 = s2 + 7.3 * e2;
      return Math.round(
        a2 + t2 * (0.45 * Math.sin(0.55 * n2) + 0.3 * Math.sin(1.37 * n2 + e2) + 0.25 * Math.sin(2.9 * n2 + 2 * e2))
      );
    });
  }
  let z = (e2, i2) => [...e2].sort((e3, i3) => e3 - i3)[Math.max(0, Math.ceil(i2 * e2.length) - 1)], E = (e2) => e2.toFixed(1), I = (e2, i2, a2, t2, s2 = 8) => s2 + (1 - (e2 - a2) / (t2 - a2)) * (i2 - 2 * s2);
  function H(e2, i2, a2, t2, s2) {
    let n2 = e2.map((n3, l3) => [l3 / (e2.length - 1) * i2, I(n3, a2, t2, s2)]), l2 = `M${E(n2[0][0])} ${E(n2[0][1])}`;
    for (let e3 = 0; e3 < n2.length - 1; e3++) {
      let i3 = n2[e3 - 1] ?? n2[e3], a3 = n2[e3], t3 = n2[e3 + 1], s3 = n2[e3 + 2] ?? t3;
      l2 += ` C${E(a3[0] + (t3[0] - i3[0]) / 6)} ${E(a3[1] + (t3[1] - i3[1]) / 6)} ${E(t3[0] - (s3[0] - a3[0]) / 6)} ${E(t3[1] - (s3[1] - a3[1]) / 6)} ${E(t3[0])} ${E(t3[1])}`;
    }
    return l2;
  }
  let B = Y(4, 72, 124, 56), D = {
    "24h": {
      values: Y(1, 32, 128, 64),
      axis: ["12 AM", "12 PM", "Now"],
      errors: "0.02%"
    },
    "7d": {
      values: Y(2, 32, 150, 84),
      axis: ["Sep 16", "Sep 20", "Now"],
      errors: "0.04%"
    },
    "30d": {
      values: Y(3, 32, 138, 52),
      axis: ["Aug 24", "Sep 8", "Now"],
      errors: "0.03%"
    }
  }, F = Object.keys(D).map((e2) => ({ value: e2, label: e2 })), O = [
    { message: "Cache product images at the edge", who: "marcus-johnson" },
    { message: "Fix double submit on checkout", who: "olivia-bennett" },
    { message: "Retry failed webhook deliveries", who: "daniel-kim" },
    { message: "Tighten hero spacing on pricing", who: "emma-collins" }
  ], W = [
    {
      id: 3,
      message: "Move session store to the new region",
      who: "olivia-bennett",
      when: "4 min ago"
    },
    {
      id: 2,
      message: "Add empty state to invoices",
      who: "emma-collins",
      when: "18 min ago"
    },
    {
      id: 1,
      message: "Bump image optimizer to 2.4",
      who: "daniel-kim",
      when: "1 hr ago"
    }
  ], J = [
    { value: "5", label: "5%" },
    { value: "25", label: "25%" },
    { value: "100", label: "100%" }
  ], K = ["jasmine-brooks", "marcus-johnson", "chloe-nguyen", "daniel-kim"], G = [
    {
      who: "jasmine-brooks",
      text: "Tighten the hero spacing on mobile, it crowds the fold.",
      when: "9 min ago"
    },
    {
      who: "marcus-johnson",
      text: "Checkout button matches the new radius now. Looks right.",
      when: "6 min ago"
    },
    {
      who: "chloe-nguyen",
      text: "Conversion event fires once per order. Verified here.",
      when: "2 min ago"
    }
  ], q = () => () => {
  };
  function V({ text: e2, reduced: i2, className: a2 }) {
    return (0, t.jsx)("span", {
      className: N().swap,
      children: (0, t.jsx)(r.N, {
        initial: false,
        mode: "popLayout",
        children: (0, t.jsx)(
          o.PY1.span,
          {
            className: a2,
            initial: i2 ? { opacity: 0 } : { opacity: 0, y: "0.35em", filter: `blur(${S.subtle}px)` },
            animate: {
              opacity: 1,
              y: "0em",
              filter: "blur(0px)",
              transitionEnd: { filter: "none" }
            },
            exit: i2 ? { opacity: 0, transition: { duration: 0 } } : {
              opacity: 0,
              y: "-0.35em",
              filter: `blur(${S.subtle}px)`,
              transition: { duration: T.fast }
            },
            transition: i2 ? { duration: T.instant } : { duration: T.standard, ease: M },
            children: e2
          },
          e2
        )
      })
    });
  }
  function Z({ value: e2 }) {
    return (0, t.jsx)("span", {
      className: N().num,
      children: (0, t.jsx)(v.q, { value: e2 })
    });
  }
  function U({ id: e2, size: i2 = 24, className: a2 }) {
    return (0, t.jsx)(n.default, {
      className: [N().avatar, a2].filter(Boolean).join(" "),
      src: (0, w.my)(e2),
      alt: "",
      width: i2,
      height: i2,
      sizes: `${i2}px`
    });
  }
  function X({
    label: e2,
    options: i2,
    value: a2,
    onChange: n2,
    disabled: l2,
    reduced: r2,
    pillId: d2
  }) {
    let c2 = (0, s.useRef)([]);
    return (0, t.jsx)("div", {
      className: N().segmented,
      role: "radiogroup",
      "aria-label": e2,
      "aria-disabled": l2 || void 0,
      children: i2.map((e3, s2) => {
        let h2 = e3.value === a2;
        return (0, t.jsxs)(
          "button",
          {
            ref: (e4) => {
              c2.current[s2] = e4;
            },
            type: "button",
            role: "radio",
            "aria-checked": h2,
            tabIndex: h2 ? 0 : -1,
            disabled: l2,
            className: N().segment,
            onClick: () => n2(e3.value),
            onKeyDown: (e4) => ((e5, a3) => {
              let t2 = "ArrowRight" === e5.key || "ArrowDown" === e5.key ? 1 : "ArrowLeft" === e5.key || "ArrowUp" === e5.key ? -1 : 0;
              if (!t2) return;
              e5.preventDefault();
              let s3 = (a3 + t2 + i2.length) % i2.length;
              n2(i2[s3].value), c2.current[s3]?.focus();
            })(e4, s2),
            children: [
              h2 && (0, t.jsx)(o.PY1.span, {
                layoutId: d2,
                className: N().segmentPill,
                transition: r2 ? { duration: 0 } : k.morph
              }),
              (0, t.jsx)("span", {
                className: N().segmentLabel,
                children: e3.label
              })
            ]
          },
          e3.value
        );
      })
    });
  }
  function Q({ active: e2, seen: i2, reduced: a2 }) {
    let [n2, l2] = (0, s.useState)(0);
    (0, s.useEffect)(() => {
      if (!e2 || a2) return;
      let i3 = window.setInterval(() => l2((e3) => e3 + 1), 1100);
      return () => window.clearInterval(i3);
    }, [e2, a2]);
    let r2 = Array.from({ length: 24 }, (e3, i3) => B[(n2 + i3) % B.length]), d2 = H(r2, 320, 84, 50, 210), c2 = I(r2[r2.length - 1], 84, 50, 210) / 84 * 100, h2 = a2 ? { duration: 0 } : { duration: 0.7, ease: P };
    return (0, t.jsxs)("div", {
      className: N().latencyMini,
      children: [
        (0, t.jsxs)("div", {
          className: N().miniHead,
          children: [
            (0, t.jsx)("span", { className: N().miniLabel, children: "p95" }),
            (0, t.jsxs)("span", {
              className: N().miniValue,
              children: [(0, t.jsx)(Z, { value: z(r2, 0.95) }), " ms"]
            }),
            (0, t.jsx)("span", {
              className: N().live,
              "data-on": e2 || void 0,
              children: "Live"
            })
          ]
        }),
        (0, t.jsxs)("div", {
          className: N().spark,
          children: [
            (0, t.jsx)("svg", {
              viewBox: "0 0 320 84",
              preserveAspectRatio: "none",
              className: N().sparkSvg,
              children: (0, t.jsx)(o.PY1.path, {
                d: d2,
                className: N().sparkLine,
                vectorEffect: "non-scaling-stroke",
                initial: !a2 && { d: d2, pathLength: 0 },
                animate: { d: d2, pathLength: a2 || i2 ? 1 : 0 },
                transition: {
                  d: h2,
                  pathLength: a2 ? { duration: 0 } : { duration: 1.3, ease: M, delay: 0.15 }
                }
              })
            }),
            (0, t.jsx)(o.PY1.span, {
              className: N().sparkDot,
              initial: false,
              animate: {
                top: `${c2}%`,
                opacity: a2 || i2 ? 1 : 0,
                scale: a2 || i2 ? 1 : 0.6
              },
              transition: {
                top: h2,
                opacity: { duration: 0.2, delay: 1.2 * !a2 },
                scale: a2 ? { duration: 0 } : { ...k.snappy, delay: 1.2 }
              }
            })
          ]
        })
      ]
    });
  }
  function ee({ count: e2, seen: i2, reduced: a2 }) {
    let s2 = Array.from({ length: 18 }, (i3, a3) => e2 - 17 + a3), n2 = 1284 === e2;
    return (0, t.jsxs)("div", {
      className: N().deploysMini,
      children: [
        (0, t.jsxs)("div", {
          className: N().bigStat,
          children: [
            (0, t.jsx)("span", {
              className: N().bigNum,
              children: (0, t.jsx)(Z, { value: e2 })
            }),
            (0, t.jsx)("span", {
              className: N().caption,
              children: "deploys this week"
            })
          ]
        }),
        (0, t.jsx)("div", {
          className: N().ticks,
          children: (0, t.jsx)(r.N, {
            initial: false,
            mode: "popLayout",
            children: s2.map(
              (s3, l2) => (0, t.jsx)(
                o.PY1.span,
                {
                  layout: !a2,
                  className: N().tick,
                  "data-new": s3 === e2 || void 0,
                  style: { height: 10 + 7 * s3 % 13 * 1.6 },
                  initial: { opacity: 0, scaleY: 0.2 },
                  animate: {
                    opacity: a2 || i2 ? 1 : 0,
                    scaleY: a2 || i2 ? 1 : 0.2
                  },
                  exit: {
                    opacity: 0,
                    scaleY: 0.2,
                    transition: { duration: T.fast }
                  },
                  transition: a2 ? { duration: 0 } : { ...k.snappy, delay: n2 ? 0.1 + 0.025 * l2 : 0 }
                },
                s3
              )
            )
          })
        })
      ]
    });
  }
  function ei({ active: e2, reduced: i2 }) {
    let a2 = e2 || i2;
    return (0, t.jsxs)("div", {
      className: N().flagsMini,
      children: [
        (0, t.jsxs)("div", {
          className: N().flagRow,
          children: [
            (0, t.jsx)("code", {
              className: N().flagKey,
              children: "new-checkout"
            }),
            (0, t.jsx)("span", {
              className: N().switchTrack,
              "data-on": a2 || void 0,
              "data-size": "sm",
              children: (0, t.jsx)(o.PY1.span, {
                className: N().switchThumb,
                initial: false,
                animate: { x: 14 * !!a2 },
                transition: i2 ? { duration: 0 } : k.snappy
              })
            })
          ]
        }),
        (0, t.jsx)("div", {
          className: N().meter,
          children: (0, t.jsx)(o.PY1.span, {
            className: N().meterFill,
            initial: false,
            animate: { scaleX: 0.25 * !!a2 },
            transition: i2 ? { duration: 0 } : { ...k.morph, delay: 0.08 * !!a2 }
          })
        }),
        (0, t.jsx)("span", {
          className: N().caption,
          children: (0, t.jsx)(V, {
            text: a2 ? "25% of traffic" : "Off for everyone",
            reduced: i2
          })
        })
      ]
    });
  }
  function ea({ active: e2, reduced: i2 }) {
    return (0, t.jsxs)("div", {
      className: N().reviewMini,
      children: [
        (0, t.jsxs)("div", {
          className: N().page,
          children: [
            (0, t.jsx)("span", { className: N().pageBar }),
            (0, t.jsx)("span", { className: N().pageHero }),
            (0, t.jsx)("span", { className: N().pageLine }),
            (0, t.jsx)("span", { className: N().pageLine, "data-short": "" }),
            (0, t.jsx)(r.N, {
              initial: false,
              children: (e2 || i2) && (0, t.jsxs)(o.PY1.span, {
                className: N().pin,
                initial: i2 ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.92 },
                animate: { opacity: 1, y: 0, scale: 1 },
                exit: i2 ? { opacity: 0 } : {
                  opacity: 0,
                  scale: 0.96,
                  transition: { duration: T.fast, ease: L }
                },
                transition: i2 ? { duration: 0 } : k.snappy,
                children: [
                  (0, t.jsx)(U, { id: "jasmine-brooks", size: 20 }),
                  (0, t.jsx)("span", {
                    children: "Tighten the hero spacing?"
                  })
                ]
              })
            })
          ]
        }),
        (0, t.jsx)("div", {
          className: N().stack,
          children: K.map((e3) => (0, t.jsx)(U, { id: e3, size: 26 }, e3))
        })
      ]
    });
  }
  function et({ reduced: e2, pillId: i2 }) {
    let [a2, n2] = (0, s.useState)("24h"), { values: l2, axis: r2, errors: d2 } = D[a2], c2 = H(l2, 640, 200, 40, 250), h2 = `${c2} L640 200 L0 200 Z`, p2 = z(l2, 0.95), m2 = z(l2, 0.5), g2 = I(p2, 200, 40, 250), u2 = e2 ? { duration: 0 } : { duration: 0.6, ease: P };
    return (0, t.jsxs)("div", {
      className: N().detailStack,
      children: [
        (0, t.jsxs)("div", {
          className: N().detailRow,
          children: [
            (0, t.jsxs)("dl", {
              className: N().stats,
              children: [
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("dt", { children: "p95" }),
                    (0, t.jsxs)("dd", {
                      children: [(0, t.jsx)(Z, { value: p2 }), " ms"]
                    })
                  ]
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("dt", { children: "p50" }),
                    (0, t.jsxs)("dd", {
                      children: [(0, t.jsx)(Z, { value: m2 }), " ms"]
                    })
                  ]
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("dt", { children: "Errors" }),
                    (0, t.jsx)("dd", {
                      children: (0, t.jsx)(V, { text: d2, reduced: e2 })
                    })
                  ]
                })
              ]
            }),
            (0, t.jsx)(X, {
              label: "Time range",
              options: F,
              value: a2,
              onChange: (e3) => n2(e3),
              reduced: e2,
              pillId: i2
            })
          ]
        }),
        (0, t.jsxs)("div", {
          className: N().chart,
          children: [
            (0, t.jsxs)("svg", {
              viewBox: "0 0 640 200",
              preserveAspectRatio: "none",
              className: N().chartSvg,
              role: "img",
              "aria-label": `Latency over ${a2}, p95 ${p2} milliseconds`,
              children: [
                [0.25, 0.5, 0.75].map(
                  (e3) => (0, t.jsx)(
                    "line",
                    {
                      x1: "0",
                      x2: 640,
                      y1: 200 * e3,
                      y2: 200 * e3,
                      className: N().gridLine,
                      vectorEffect: "non-scaling-stroke"
                    },
                    e3
                  )
                ),
                (0, t.jsx)(o.PY1.path, {
                  d: h2,
                  className: N().chartArea,
                  initial: false,
                  animate: { d: h2 },
                  transition: u2
                }),
                (0, t.jsx)(o.PY1.line, {
                  x1: "0",
                  x2: 640,
                  y1: g2,
                  y2: g2,
                  className: N().p95Line,
                  vectorEffect: "non-scaling-stroke",
                  initial: false,
                  animate: { y1: g2, y2: g2 },
                  transition: u2
                }),
                (0, t.jsx)(o.PY1.path, {
                  d: c2,
                  className: N().chartLine,
                  vectorEffect: "non-scaling-stroke",
                  initial: false,
                  animate: { d: c2 },
                  transition: u2
                })
              ]
            }),
            (0, t.jsx)("div", {
              className: N().axis,
              "aria-hidden": "true",
              children: r2.map(
                (i3, a3) => (0, t.jsx)(V, { text: i3, reduced: e2 }, a3)
              )
            })
          ]
        })
      ]
    });
  }
  function es({ count: e2, recent: i2, onShip: a2, reduced: n2 }) {
    let [l2, d2] = (0, s.useState)("idle"), c2 = (0, s.useRef)([]);
    return (0, s.useEffect)(
      () => () => c2.current.forEach((e3) => window.clearTimeout(e3)),
      []
    ), (0, t.jsxs)("div", {
      className: N().detailStack,
      children: [
        (0, t.jsxs)("div", {
          className: N().detailRow,
          children: [
            (0, t.jsxs)("div", {
              className: N().bigStat,
              children: [
                (0, t.jsx)("span", {
                  className: N().bigNum,
                  children: (0, t.jsx)(Z, { value: e2 })
                }),
                (0, t.jsx)("span", {
                  className: N().caption,
                  children: "deploys this week, all checks passing"
                })
              ]
            }),
            (0, t.jsx)("button", {
              type: "button",
              className: N().primary,
              onClick: () => {
                "idle" === l2 && (d2("shipping"), c2.current.push(
                  window.setTimeout(
                    () => {
                      a2(), d2("shipped"), c2.current.push(
                        window.setTimeout(() => d2("idle"), 1400)
                      );
                    },
                    n2 ? 400 : 1100
                  )
                ));
              },
              "aria-disabled": "idle" !== l2 || void 0,
              "data-state": l2,
              children: (0, t.jsxs)("span", {
                className: N().labels,
                children: [
                  (0, t.jsxs)("span", {
                    "data-on": "idle" === l2 || void 0,
                    "aria-hidden": "idle" !== l2 || void 0,
                    children: [
                      (0, t.jsx)(_.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Ship a deploy"
                    ]
                  }),
                  (0, t.jsxs)("span", {
                    "data-on": "shipping" === l2 || void 0,
                    "aria-hidden": "shipping" !== l2 || void 0,
                    children: [
                      (0, t.jsx)(x.A, {
                        className: N().spin,
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Deploying"
                    ]
                  }),
                  (0, t.jsxs)("span", {
                    "data-on": "shipped" === l2 || void 0,
                    "aria-hidden": "shipped" !== l2 || void 0,
                    children: [
                      (0, t.jsx)(y.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Shipped"
                    ]
                  })
                ]
              })
            })
          ]
        }),
        (0, t.jsx)("ol", {
          className: N().deployList,
          "aria-label": "Recent deploys",
          children: (0, t.jsx)(r.N, {
            initial: false,
            mode: "popLayout",
            children: i2.map(
              (e3) => (0, t.jsxs)(
                o.PY1.li,
                {
                  layout: !n2,
                  className: N().deployRow,
                  initial: n2 ? { opacity: 0 } : { opacity: 0, y: -10, filter: `blur(${S.subtle}px)` },
                  animate: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transitionEnd: { filter: "none" }
                  },
                  exit: { opacity: 0, transition: { duration: T.fast } },
                  transition: n2 ? { duration: 0 } : k.smooth,
                  children: [
                    (0, t.jsx)(U, { id: e3.who }),
                    (0, t.jsxs)("span", {
                      className: N().deployText,
                      children: [
                        (0, t.jsx)("span", {
                          className: N().deployMessage,
                          children: e3.message
                        }),
                        (0, t.jsxs)("span", {
                          className: N().deployMeta,
                          children: [
                            (0, w.MV)(e3.who).name,
                            " \xB7 ",
                            (0, t.jsx)("code", {
                              children: (2654435761 * e3.id >>> 0).toString(16).padStart(8, "0").slice(0, 7)
                            })
                          ]
                        })
                      ]
                    }),
                    (0, t.jsx)("span", {
                      className: N().deployWhen,
                      "data-new": "Just now" === e3.when || void 0,
                      children: e3.when
                    })
                  ]
                },
                e3.id
              )
            )
          })
        }),
        (0, t.jsx)("p", {
          className: N().srOnly,
          "aria-live": "polite",
          children: "shipped" === l2 ? "Deploy shipped" : ""
        })
      ]
    });
  }
  function en({
    on: e2,
    rollout: i2,
    setOn: a2,
    setRollout: s2,
    reduced: n2,
    pillId: l2
  }) {
    let r2 = e2 ? i2 : 0;
    return (0, t.jsxs)("div", {
      className: N().detailStack,
      children: [
        (0, t.jsxs)("div", {
          className: N().detailRow,
          children: [
            (0, t.jsxs)("div", {
              className: N().flagInfo,
              children: [
                (0, t.jsx)("span", {
                  className: N().flagTitle,
                  id: `${l2}-name`,
                  children: "New checkout"
                }),
                (0, t.jsxs)("span", {
                  className: N().caption,
                  children: [
                    (0, t.jsx)("code", {
                      className: N().flagKey,
                      children: "new-checkout"
                    }),
                    " in production"
                  ]
                })
              ]
            }),
            (0, t.jsx)("button", {
              type: "button",
              role: "switch",
              "aria-checked": e2,
              "aria-labelledby": `${l2}-name`,
              className: N().switchTrack,
              "data-on": e2 || void 0,
              onClick: () => a2(!e2),
              children: (0, t.jsx)(o.PY1.span, {
                className: N().switchThumb,
                initial: false,
                animate: { x: 20 * !!e2 },
                transition: n2 ? { duration: 0 } : k.snappy
              })
            })
          ]
        }),
        (0, t.jsxs)("div", {
          className: N().detailRow,
          children: [
            (0, t.jsx)("span", { className: N().caption, children: "Rollout" }),
            (0, t.jsx)(X, {
              label: "Rollout",
              options: J,
              value: String(i2),
              onChange: (e3) => s2(Number(e3)),
              disabled: !e2,
              reduced: n2,
              pillId: l2
            })
          ]
        }),
        (0, t.jsx)("div", {
          className: N().meter,
          "data-size": "lg",
          children: (0, t.jsx)(o.PY1.span, {
            className: N().meterFill,
            initial: false,
            animate: { scaleX: r2 / 100 },
            transition: n2 ? { duration: 0 } : k.morph
          })
        }),
        (0, t.jsxs)("p", {
          className: N().flagSummary,
          children: [
            (0, t.jsx)(Z, { value: Math.round(48200 * r2 / 100) }),
            " ",
            (0, t.jsx)("span", { children: "visitors a day see it" })
          ]
        }),
        (0, t.jsx)("p", {
          className: N().footnote,
          children: "Changes apply without a redeploy."
        })
      ]
    });
  }
  function el({ approved: e2, setApproved: i2, reduced: a2 }) {
    return (0, t.jsxs)("div", {
      className: N().detailStack,
      children: [
        (0, t.jsxs)("div", {
          className: N().detailRow,
          children: [
            (0, t.jsxs)("div", {
              className: N().reviewStatus,
              "data-approved": e2 || void 0,
              children: [
                (0, t.jsx)("span", {
                  className: N().statusDot,
                  "aria-hidden": "true"
                }),
                (0, t.jsx)(V, {
                  text: e2 ? "Ready to merge" : "Waiting on your review",
                  reduced: a2
                }),
                (0, t.jsxs)("span", {
                  className: N().caption,
                  children: [
                    (0, t.jsx)(Z, { value: e2 ? 3 : 2 }),
                    " of 3 approvals"
                  ]
                })
              ]
            }),
            (0, t.jsx)("button", {
              type: "button",
              className: N().approve,
              "aria-pressed": e2,
              "data-on": e2 || void 0,
              onClick: () => i2(!e2),
              children: (0, t.jsxs)("span", {
                className: N().labels,
                children: [
                  (0, t.jsx)("span", {
                    "data-on": !e2 || void 0,
                    "aria-hidden": e2 || void 0,
                    children: "Approve"
                  }),
                  (0, t.jsxs)("span", {
                    "data-on": e2 || void 0,
                    "aria-hidden": !e2 || void 0,
                    children: [
                      (0, t.jsx)(y.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Approved"
                    ]
                  })
                ]
              })
            })
          ]
        }),
        (0, t.jsx)("ul", {
          className: N().comments,
          children: G.map(
            (e3) => (0, t.jsxs)(
              "li",
              {
                className: N().comment,
                children: [
                  (0, t.jsx)(U, { id: e3.who, size: 28 }),
                  (0, t.jsxs)("span", {
                    className: N().commentBody,
                    children: [
                      (0, t.jsxs)("span", {
                        className: N().commentHead,
                        children: [
                          (0, t.jsx)("span", {
                            className: N().commentName,
                            children: (0, w.MV)(e3.who).name
                          }),
                          (0, t.jsx)("span", {
                            className: N().caption,
                            children: e3.when
                          })
                        ]
                      }),
                      (0, t.jsx)("span", {
                        className: N().commentText,
                        children: e3.text
                      })
                    ]
                  })
                ]
              },
              e3.who
            )
          )
        }),
        (0, t.jsx)("p", {
          className: N().srOnly,
          "aria-live": "polite",
          children: e2 ? "Approved. Ready to merge." : ""
        })
      ]
    });
  }
  function er({
    card: e2,
    gridRef: i2,
    sx: a2,
    sy: n2,
    lit: l2,
    isOpen: r2,
    anyOpen: p2,
    front: m2,
    reduced: g2,
    detailId: u2,
    onOpen: _2,
    mini: x2
  }) {
    let y2 = (0, s.useRef)(null), j2 = (0, s.useId)(), v2 = (0, d.d)(0), w2 = (0, d.d)(0), f2 = (0, c.G)(() => a2.get() - v2.get()), b2 = (0, c.G)(() => n2.get() - w2.get()), k2 = { "--x": (0, h.E)`${f2}px`, "--y": (0, h.E)`${b2}px`, "--lit": l2 }, [S2, M2] = (0, s.useState)(false), [P2, L2] = (0, s.useState)(false);
    (0, s.useLayoutEffect)(() => {
      let e3 = y2.current, a3 = i2.current;
      if (!e3 || !a3) return;
      let t2 = () => {
        v2.set(e3.offsetLeft), w2.set(e3.offsetTop);
      };
      if (t2(), "u" < typeof ResizeObserver) return;
      let s2 = new ResizeObserver(t2);
      return s2.observe(a3), s2.observe(e3), () => s2.disconnect();
    }, [i2, v2, w2]);
    let A2 = (S2 || P2) && !p2, R2 = S2 && !p2;
    return (0, t.jsxs)(o.PY1.article, {
      ref: y2,
      className: N().card,
      "data-card": e2.id,
      "data-wide": e2.wide || void 0,
      "data-front": m2 || void 0,
      "data-open": r2 || void 0,
      "data-hovered": R2 || void 0,
      style: k2,
      onPointerEnter: (e3) => {
        "mouse" === e3.pointerType && M2(true);
      },
      onPointerLeave: () => M2(false),
      children: [
        r2 ? (0, t.jsx)("div", { className: N().surface, "data-ghost": "" }) : (0, t.jsx)(o.PY1.div, {
          layoutId: g2 ? void 0 : `surface-${e2.id}`,
          className: N().surface,
          style: { borderRadius: 28 },
          transition: $
        }),
        (0, t.jsx)("span", { className: N().wash, "aria-hidden": "true" }),
        (0, t.jsx)("span", { className: N().light, "aria-hidden": "true" }),
        (0, t.jsx)(o.PY1.div, {
          className: N().stage,
          "aria-hidden": "true",
          initial: false,
          animate: { opacity: +!r2 },
          transition: {
            duration: r2 ? T.instant : T.standard,
            delay: r2 || g2 ? 0 : T.fast
          },
          children: x2(A2)
        }),
        (0, t.jsxs)("div", {
          className: N().copy,
          children: [
            (0, t.jsx)("h3", {
              className: N().cardTitle,
              children: (0, t.jsx)("button", {
                type: "button",
                className: N().cardButton,
                "aria-expanded": r2,
                "aria-controls": r2 ? u2 : void 0,
                "aria-describedby": j2,
                onClick: () => {
                  M2(false), _2();
                },
                onFocus: () => L2(true),
                onBlur: () => L2(false),
                children: r2 ? (0, t.jsx)("span", {
                  className: N().titleText,
                  "data-hidden": "",
                  children: e2.title
                }) : (0, t.jsx)(o.PY1.span, {
                  layoutId: g2 ? void 0 : `title-${e2.id}`,
                  layout: "position",
                  className: N().titleText,
                  transition: $,
                  children: e2.title
                })
              })
            }),
            (0, t.jsx)(o.PY1.p, {
              id: j2,
              className: N().blurb,
              initial: false,
              animate: { opacity: +!r2 },
              transition: {
                duration: r2 ? T.instant : T.standard,
                delay: r2 || g2 ? 0 : T.fast
              },
              children: e2.blurb
            })
          ]
        })
      ]
    });
  }
  function eo() {
    let e2, i2 = (e2 = (0, s.useSyncExternalStore)(
      q,
      () => true,
      () => false
    ), !!(0, l.I)() && e2), a2 = (0, s.useId)(), n2 = `${a2}-heading`, c2 = `${a2}-detail`, h2 = `${a2}-detail-title`, _2 = (0, s.useRef)(null), x2 = (0, s.useRef)(null), y2 = (0, s.useRef)(null), v2 = (0, p.W)(x2, { once: true, amount: 0.3 }), [w2, f2] = (0, s.useState)(null), [b2, S2] = (0, s.useState)(null), [P2, A2] = (0, s.useState)({ top: 0, minHeight: 0 }), [$2, Y2] = (0, s.useState)(0), [z2, E2] = (0, s.useState)(1284), [I2, H2] = (0, s.useState)(W), [B2, D2] = (0, s.useState)(false), [F2, J2] = (0, s.useState)(25), [K2, G2] = (0, s.useState)(false), V2 = (0, d.d)(-9999), Z2 = (0, d.d)(-9999), U2 = (0, m.z)(V2, { stiffness: 380, damping: 40 }), X2 = (0, m.z)(Z2, { stiffness: 380, damping: 40 }), eo2 = (0, d.d)(0), ec2 = (e3) => {
      if ("mouse" !== e3.pointerType || i2 || w2) return;
      let a3 = e3.currentTarget.getBoundingClientRect(), t2 = e3.clientX - a3.left, s2 = e3.clientY - a3.top;
      0.05 > eo2.get() ? (V2.jump(t2), Z2.jump(s2), U2.jump(t2), X2.jump(s2)) : (V2.set(t2), Z2.set(s2)), 1 > eo2.get() && (0, g.i)(eo2, 1, { duration: T.standard, ease: M });
    }, eh = () => (0, g.i)(eo2, 0, { duration: T.considered, ease: L }), ep = (0, s.useCallback)(() => E2((e3) => e3 + 1), []), em = (0, s.useCallback)(() => {
      E2((e3) => e3 + 1), H2((e3) => {
        let i3 = (e3[0]?.id ?? 0) + 1, a3 = O[i3 % O.length];
        return [
          { id: i3, message: a3.message, who: a3.who, when: "Just now" },
          ...e3.map(
            (e4) => "Just now" === e4.when ? { ...e4, when: "1 min ago" } : e4
          )
        ].slice(0, 4);
      });
    }, []), eg = (0, s.useRef)(null), eu = (0, s.useCallback)(() => {
      eg.current = w2, f2(null);
    }, [w2]);
    (0, s.useLayoutEffect)(() => {
      if (w2) return void y2.current?.focus({ preventScroll: true });
      let e3 = eg.current;
      eg.current = null, e3 && x2.current?.querySelector(`[data-card="${e3}"] button`)?.focus({ preventScroll: true });
    }, [w2]);
    let e_ = (0, s.useCallback)((e3) => {
      if (!e3 || "u" < typeof ResizeObserver) return;
      let i3 = new ResizeObserver(() => Y2(e3.offsetHeight));
      return i3.observe(e3), () => i3.disconnect();
    }, []);
    (0, s.useEffect)(() => {
      if (!w2) return;
      let e3 = (e4) => {
        "Escape" === e4.key && (e4.preventDefault(), eu());
      };
      return document.addEventListener("keydown", e3), () => document.removeEventListener("keydown", e3);
    }, [eu, w2]);
    let ex = {
      latency: (e3) => (0, t.jsx)(Q, { active: e3, seen: v2, reduced: i2 }),
      deploys: (e3) => (0, t.jsx)(ed, {
        active: e3,
        reduced: i2,
        onTick: ep,
        children: (0, t.jsx)(ee, { count: z2, seen: v2, reduced: i2 })
      }),
      flags: (e3) => (0, t.jsx)(ei, { active: e3, reduced: i2 }),
      review: (e3) => (0, t.jsx)(ea, { active: e3, reduced: i2 })
    }, ey = C.find((e3) => e3.id === w2), ej = {
      latency: (0, t.jsx)(et, { reduced: i2, pillId: `${a2}-range` }),
      deploys: (0, t.jsx)(es, {
        count: z2,
        recent: I2,
        onShip: em,
        reduced: i2
      }),
      flags: (0, t.jsx)(en, {
        on: B2,
        rollout: F2,
        setOn: D2,
        setRollout: J2,
        reduced: i2,
        pillId: `${a2}-rollout`
      }),
      review: (0, t.jsx)(el, { approved: K2, setApproved: G2, reduced: i2 })
    };
    return (0, t.jsxs)("section", {
      className: N().root,
      "aria-labelledby": n2,
      children: [
        (0, t.jsxs)("header", {
          className: N().header,
          children: [
            (0, t.jsx)("h2", {
              id: n2,
              className: N().heading,
              children: "From merge to production, in view"
            }),
            (0, t.jsx)("p", {
              className: N().lede,
              children: "Four tools that stay quiet until you need them. Hover to preview one, open it to try it."
            })
          ]
        }),
        (0, t.jsx)(u.o, {
          id: a2,
          children: (0, t.jsxs)(o.PY1.div, {
            ref: _2,
            className: N().arena,
            initial: false,
            animate: { minHeight: w2 ? P2.top + $2 : 0 },
            transition: i2 ? { duration: 0 } : k.smooth,
            children: [
              (0, t.jsx)("div", {
                ref: x2,
                className: N().grid,
                inert: !!w2 || void 0,
                onPointerEnter: ec2,
                onPointerMove: ec2,
                onPointerLeave: eh,
                children: C.map(
                  (e3) => (0, t.jsx)(
                    er,
                    {
                      card: e3,
                      gridRef: x2,
                      sx: U2,
                      sy: X2,
                      lit: eo2,
                      isOpen: w2 === e3.id,
                      anyOpen: !!w2,
                      front: b2 === e3.id,
                      reduced: i2,
                      detailId: c2,
                      onOpen: () => ((e4) => {
                        let i3 = _2.current, a3 = x2.current, t2 = a3?.querySelector(`[data-card="${e4}"]`);
                        if (!i3 || !a3 || !t2) return;
                        let s2 = i3.offsetWidth < 520 ? t2.offsetTop : 0;
                        A2({ top: s2, minHeight: a3.offsetHeight - s2 }), eh(), S2(e4), f2(e4);
                      })(e3.id),
                      mini: ex[e3.id]
                    },
                    e3.id
                  )
                )
              }),
              (0, t.jsx)(r.N, {
                onExitComplete: () => Y2(0),
                children: ey && (0, t.jsxs)(
                  o.PY1.div,
                  {
                    ref: e_,
                    id: c2,
                    className: N().detail,
                    role: "region",
                    "aria-labelledby": h2,
                    style: { top: P2.top, minHeight: P2.minHeight },
                    initial: !!i2 && { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: {
                      opacity: 0,
                      transition: {
                        duration: i2 ? T.instant : T.exit,
                        ease: L
                      }
                    },
                    transition: { duration: T.fast },
                    children: [
                      (0, t.jsx)(o.PY1.div, {
                        layoutId: i2 ? void 0 : `surface-${ey.id}`,
                        className: N().detailSurface,
                        style: { borderRadius: 32 },
                        transition: R
                      }),
                      (0, t.jsxs)("div", {
                        className: N().detailBody,
                        children: [
                          (0, t.jsxs)("div", {
                            className: N().detailHeader,
                            children: [
                              (0, t.jsx)("h3", {
                                id: h2,
                                className: N().detailTitle,
                                children: (0, t.jsx)(o.PY1.span, {
                                  layoutId: i2 ? void 0 : `title-${ey.id}`,
                                  layout: "position",
                                  className: N().titleText,
                                  transition: R,
                                  children: ey.title
                                })
                              }),
                              (0, t.jsx)(o.PY1.button, {
                                ref: y2,
                                type: "button",
                                className: N().close,
                                "aria-label": "Close",
                                onClick: eu,
                                initial: !i2 && { opacity: 0, scale: 0.9 },
                                animate: { opacity: 1, scale: 1 },
                                transition: i2 ? { duration: 0 } : { ...k.snappy, delay: 0.12 },
                                children: (0, t.jsx)(j.A, {
                                  size: 18,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                })
                              })
                            ]
                          }),
                          (0, t.jsx)(o.PY1.p, {
                            className: N().detailBlurb,
                            initial: !i2 && { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { duration: T.standard, delay: 0.08 },
                            children: ey.blurb
                          }),
                          (0, t.jsx)(o.PY1.div, {
                            className: N().detailContent,
                            initial: !i2 && { opacity: 0, y: 12 },
                            animate: { opacity: 1, y: 0 },
                            transition: {
                              opacity: {
                                duration: T.standard,
                                delay: 0.12,
                                ease: M
                              },
                              y: { ...k.smooth, delay: 0.08 }
                            },
                            children: ej[ey.id]
                          })
                        ]
                      })
                    ]
                  },
                  ey.id
                )
              })
            ]
          })
        })
      ]
    });
  }
  function ed({ active: e2, reduced: i2, onTick: a2, children: t2 }) {
    return (0, s.useEffect)(() => {
      if (!e2 || i2) return;
      let t3 = window.setInterval(a2, 900);
      return () => window.clearInterval(t3);
    }, [e2, a2, i2]), t2;
  }
  let ec = eo;
}

__m(__module,__exports,__require);
}