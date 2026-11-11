/* spotlight-grid (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(8152, function(__module,__exports,__require){
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
});
A.reg(20122, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { E: () => d });
  var n = a(51469), r = a(71013);
  function d(e2, ...t2) {
    let a2 = e2.length;
    return (0, r.j)(t2.filter(n.S), function() {
      let r2 = "";
      for (let d2 = 0; d2 < a2; d2++) {
        r2 += e2[d2];
        let a3 = t2[d2];
        a3 && (r2 += (0, n.S)(a3) ? a3.get() : a3);
      }
      return r2;
    });
  }
}

__m(__module,__exports,__require);
});
A.regCss(33976, ".root{container:spotlight/inline-size;box-sizing:border-box;width:min(100%,1040px);min-width:0;margin-inline:auto;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root *,.root :after,.root :before{box-sizing:border-box}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.header{display:grid;max-width:34rem;gap:var(--space-3);margin-bottom:var(--space-8)}\n.heading{margin:0;font-family:var(--font-display);font-size:var(--text-3xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display);text-wrap:balance}\n@container spotlight (max-width: 519px){.heading{font-size:var(--text-2xl)}\n.lede{margin:0;color:var(--text-secondary);font-size:var(--text-base);line-height:var(--leading-body);text-wrap:pretty}\n.arena{position:relative}\n.grid{position:relative;display:grid;gap:12px;grid-template-columns:minmax(0,1fr)}\n@container spotlight (min-width: 520px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))}\n@container spotlight (min-width: 820px){.grid{grid-template-columns:repeat(3,minmax(0,1fr))}\n.card[data-wide]{grid-column:span 2}\n.card{position:relative;display:flex;min-width:0;min-height:252px;flex-direction:column;gap:18px;padding:20px;border-radius:28px}\n.card[data-front]{z-index:2}\n.card[data-hovered] .surface{box-shadow:var(--shadow-resting),0 4px 12px oklch(0 0 0/.035)}\n.card[data-open] .light,.card[data-open] .wash{display:none}\n.card:has(.cardButton:active) .surface{background:var(--surface-muted)}\n.card{min-height:232px;padding:18px}\n.surface{position:absolute;inset:0;border:1px solid var(--border);background:var(--surface);box-shadow:0 0 0 transparent;transition:box-shadow var(--duration-fast) var(--ease-standard)}\n.surface[data-ghost]{visibility:hidden}\n@media (prefers-reduced-motion:reduce){.labels>span,.live,.live:before,.statusDot,.surface,.switchTrack{transition-duration:0s}\n.light,.wash{position:absolute;inset:0;z-index:1;border-radius:inherit;opacity:var(--lit,0);pointer-events:none}\n.light{padding:1px;background:radial-gradient(240px circle at var(--x,-999px) var(--y,-999px),color-mix(in oklab,var(--foreground) 28%,transparent),transparent 70%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0)}\n.wash{background:radial-gradient(380px circle at var(--x,-999px) var(--y,-999px),color-mix(in oklab,var(--foreground) 3.5%,transparent),transparent 70%)}\n.stage{position:relative;z-index:1;display:flex;min-height:118px;flex:1;flex-direction:column;justify-content:flex-end;pointer-events:none}\n.copy{position:relative;z-index:1;display:grid;gap:4px}\n.cardTitle,.detailTitle{margin:0;font-size:var(--text-base);font-weight:500;line-height:1.3}\n.detailTitle{padding-top:5px;font-size:var(--text-base)}\n.titleText{display:inline-block;color:var(--foreground)}\n.titleText[data-hidden]{visibility:hidden}\n.cardButton{padding:0;border:0;background:transparent;color:inherit;cursor:pointer;font:inherit;text-align:left;-webkit-tap-highlight-color:transparent}\n.cardButton:after{content:\"\";position:absolute;inset:-1px;z-index:3;border-radius:28px}\n.blurb{margin:0;color:var(--text-secondary);text-wrap:pretty}\n.num{display:inline-flex;font-variant-numeric:tabular-nums}\n.num>span{color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit}\n.flagSummary .num{color:var(--foreground);font-size:var(--text-xl);font-weight:500}\n.swap{position:relative;display:inline-grid}\n.swap>span{grid-area:1/1;white-space:nowrap}\n.caption{color:var(--text-secondary);font-size:var(--text-xs)}\n.reviewStatus .caption{grid-column:2}\n.reviewStatus .caption{display:inline-flex;gap:3px;font-weight:400;font-variant-numeric:tabular-nums}\n.avatar{display:block;flex:none;border-radius:50%;object-fit:cover}\n.stack .avatar{box-shadow:0 0 0 2px var(--surface)}\n.stack .avatar+.avatar{margin-left:-8px}\n.flagKey{font-family:ui-monospace,SF Mono,Menlo,monospace;font-size:var(--text-xs)}\n.flagRow .flagKey{color:var(--text-secondary)}\n.latencyMini{display:grid;gap:10px}\n.miniHead{display:flex;align-items:baseline;gap:8px}\n.miniLabel{color:var(--text-muted);font-size:var(--text-xs)}\n.miniValue{display:inline-flex;align-items:baseline;gap:3px;font-size:var(--text-xl);font-weight:500;font-variant-numeric:tabular-nums}\n.live{display:inline-flex;align-items:center;gap:6px;margin-left:auto;color:var(--text-muted);font-size:var(--text-xs);transition:color var(--duration-fast) var(--ease-standard)}\n.live:before{content:\"\";width:6px;height:6px;border-radius:50%;background:var(--border-strong);transition:background-color var(--duration-fast) var(--ease-standard)}\n.live[data-on]{color:var(--text-secondary)}\n.live[data-on]:before{background:var(--success)}\n.spark{position:relative;height:84px}\n.sparkSvg{display:block;width:100%;height:100%;overflow:visible}\n.sparkLine{fill:none;stroke:var(--accent);stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}\n.sparkDot{position:absolute;right:-4px;width:8px;height:8px;margin-top:-4px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 3px var(--surface)}\n.deploysMini{display:grid;gap:14px}\n.bigStat{display:grid;gap:2px}\n.bigNum{font-family:var(--font-display);font-size:var(--text-3xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:1}\n.ticks{display:flex;height:34px;align-items:flex-end;gap:4px;overflow:hidden}\n.tick{width:5px;flex:none;border-radius:3px;background:color-mix(in oklab,var(--foreground) 16%,transparent);transform-origin:bottom}\n.tick[data-new]{background:var(--accent)}\n.flagsMini{display:grid;gap:12px}\n.flagRow{display:flex;align-items:center;justify-content:space-between;gap:12px}\n.switchTrack{position:relative;display:inline-flex;width:44px;height:24px;flex:none;align-items:center;padding:2px;border:0;border-radius:var(--radius-pill);background:var(--control-track);cursor:pointer;transition:background-color var(--duration-standard) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n.switchTrack[data-size=sm]{width:34px;height:20px}\n.switchTrack[data-on]{background:var(--control-on)}\n.switchTrack[data-on] .switchThumb{background:var(--control-thumb-on)}\n.switchTrack[data-size=sm] .switchThumb{width:16px;height:16px}\n.switchThumb{display:block;width:20px;height:20px;border-radius:50%;background:var(--control-thumb);box-shadow:var(--control-thumb-shadow);transition:background-color var(--duration-standard) var(--ease-standard)}\n.meter{position:relative;height:6px;overflow:hidden;border-radius:var(--radius-pill);background:var(--surface-muted)}\n.meter[data-size=lg]{height:10px}\n.meterFill{position:absolute;inset:0;border-radius:inherit;background:var(--accent);transform-origin:left}\n.reviewMini{position:relative;display:flex;min-height:118px;align-items:flex-end;gap:16px}\n.page{position:relative;display:grid;flex:1;gap:7px;align-self:stretch;align-content:start;padding:12px;border:1px solid var(--border-subtle);border-radius:16px;background:var(--background)}\n.pageBar{width:36%;height:6px;border-radius:3px;background:var(--surface-muted)}\n.pageHero{height:34px;border-radius:8px;background:var(--surface-muted)}\n.pageLine{width:78%;height:5px;border-radius:3px;background:var(--surface-muted)}\n.pageLine[data-short]{width:52%}\n.pin{position:absolute;top:30px;left:22%;display:inline-flex;max-width:calc(100% - 24px);align-items:center;gap:8px;padding:4px 12px 4px 4px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface-raised);box-shadow:var(--shadow-raised);font-size:var(--text-xs);white-space:nowrap;transform-origin:0 0}\n.pin>span{overflow:hidden;text-overflow:ellipsis}\n.stack{display:flex;flex:none;padding-bottom:2px}\n.detail{position:absolute;right:0;left:0;z-index:4;display:flex}\n.detailSurface{position:absolute;inset:0;border:1px solid var(--border);background:var(--surface);box-shadow:var(--shadow-raised)}\n.detailBody{position:relative;display:flex;width:100%;min-width:0;flex-direction:column;gap:6px;padding:24px}\n.detailBody{padding:20px 18px}\n.detailHeader{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}\n.detailBlurb{max-width:34rem;margin:0;color:var(--text-secondary)}\n.detailContent{margin-top:18px}\n.close{display:grid;width:var(--control-height-sm);height:var(--control-height-sm);flex:none;place-items:center;margin:-4px -8px 0 0;padding:0;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n.close:active{background:var(--surface-muted)}\n.close:focus-visible{background:var(--surface-muted);color:var(--foreground)}\n@media (hover:hover) and (pointer:fine){.close:hover{background:var(--surface-muted);color:var(--foreground)}\n.detailStack{display:grid;gap:16px}\n.detailRow{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px 16px}\n.footnote{margin:0;color:var(--text-muted);font-size:var(--text-xs)}\n.segmented{display:inline-flex;padding:3px;border-radius:var(--radius-pill);background:var(--surface-muted)}\n.segmented[aria-disabled]{opacity:.5}\n.segment{position:relative;min-width:48px;height:30px;padding:0 12px;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);cursor:pointer;font:inherit;font-weight:500;font-variant-numeric:tabular-nums;transition:color var(--duration-fast) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n.segment[aria-checked=true]{color:var(--foreground)}\n.segment:disabled{cursor:default}\n.segment:not(:disabled):hover{color:var(--foreground)}\n.segmentPill{position:absolute;inset:0;border-radius:inherit;background:var(--surface-raised);box-shadow:var(--shadow-resting),0 0 0 1px var(--border)}\n.segmentLabel{position:relative}\n.stats{display:flex;flex-wrap:wrap;gap:8px 28px;margin:0}\n.stats>div{display:grid;gap:2px}\n.stats dt{color:var(--text-muted);font-size:var(--text-xs)}\n.stats dd{display:inline-flex;align-items:baseline;gap:3px;margin:0;font-size:var(--text-xl);font-weight:500;font-variant-numeric:tabular-nums}\n.chart{display:grid;gap:8px}\n.chartSvg{display:block;width:100%;height:190px;overflow:visible}\n.chartSvg{height:150px}\n.gridLine{stroke:var(--border-subtle);stroke-width:1}\n.chartArea{fill:color-mix(in oklab,var(--foreground) 4%,transparent)}\n.chartLine{fill:none;stroke:var(--foreground);stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}\n.p95Line{stroke:var(--accent);stroke-width:1;stroke-dasharray:4 4}\n.axis{display:flex;justify-content:space-between;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.approve,.primary{display:inline-flex;min-height:var(--control-height-sm);flex:none;align-items:center;justify-content:center;padding:0 16px;border:0;border-radius:var(--radius-control);cursor:pointer;font:inherit;font-weight:500;white-space:nowrap;transition:transform var(--duration-fast) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard),color var(--duration-standard) var(--ease-standard),box-shadow var(--duration-standard) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n.primary{background:var(--accent);color:var(--accent-foreground)}\n.primary[aria-disabled=true]{cursor:default}\n.approve:active,.primary:not([aria-disabled=true]):active{transform:scale(.97)}\n.approve:not([data-on]):hover,.primary:not([aria-disabled=true]):hover{background:var(--accent-strong)}\n.approve{background:var(--accent);color:var(--accent-foreground)}\n.approve[data-on]{background:color-mix(in oklab,var(--success) 14%,transparent);color:var(--success);box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--success) 30%,transparent)}\n.labels{display:inline-grid}\n.labels>span{display:inline-flex;grid-area:1/1;align-items:center;justify-content:center;gap:6px;transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-standard) var(--ease-enter),filter var(--duration-fast) var(--ease-standard)}\n.labels>span:not([data-on]){opacity:0;transform:translateY(.3em);filter:blur(2px);visibility:hidden;transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard),filter var(--duration-fast) var(--ease-standard),visibility 0s var(--duration-fast)}\n.spin{animation:spin .8s linear infinite}\n.spin{animation-duration:2.4s}\n.deployList{display:grid;margin:0;padding:0;list-style:none}\n.deployRow{display:flex;align-items:center;gap:12px;padding:10px 0;border-top:1px solid var(--border-subtle);background:var(--surface)}\n.deployText{display:grid;min-width:0;flex:1}\n.deployMessage{overflow:hidden;font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.deployMeta{overflow:hidden;color:var(--text-secondary);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap}\n.deployMeta code{font-family:ui-monospace,SF Mono,Menlo,monospace}\n.deployWhen{flex:none;color:var(--text-muted);font-size:var(--text-xs)}\n.deployWhen[data-new]{color:var(--success)}\n.flagInfo{display:grid;gap:2px}\n.flagTitle{font-weight:500}\n.flagSummary{display:flex;align-items:baseline;gap:5px;margin:0;color:var(--text-secondary)}\n.reviewStatus{display:grid;grid-template-columns:auto minmax(0,1fr);align-items:center;gap:2px 10px;font-weight:500}\n.reviewStatus[data-approved] .statusDot{background:var(--success)}\n.statusDot{width:8px;height:8px;border-radius:50%;background:var(--warning);transition:background-color var(--duration-standard) var(--ease-standard)}\n.comments{display:grid;margin:0;padding:0;list-style:none}\n.comment{display:flex;align-items:flex-start;gap:12px;padding:12px 0;border-top:1px solid var(--border-subtle)}\n.commentBody{display:grid;min-width:0;gap:2px}\n.commentHead{display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 8px}\n.commentName{font-weight:500}\n.commentText{color:var(--text-secondary);text-wrap:pretty}", {"root":"root","srOnly":"srOnly","header":"header","heading":"heading","lede":"lede","arena":"arena","grid":"grid","card":"card","surface":"surface","light":"light","wash":"wash","cardButton":"cardButton","labels":"labels","live":"live","statusDot":"statusDot","switchTrack":"switchTrack","stage":"stage","copy":"copy","cardTitle":"cardTitle","detailTitle":"detailTitle","titleText":"titleText","blurb":"blurb","num":"num","flagSummary":"flagSummary","swap":"swap","caption":"caption","reviewStatus":"reviewStatus","avatar":"avatar","stack":"stack","flagKey":"flagKey","flagRow":"flagRow","latencyMini":"latencyMini","miniHead":"miniHead","miniLabel":"miniLabel","miniValue":"miniValue","spark":"spark","sparkSvg":"sparkSvg","sparkLine":"sparkLine","sparkDot":"sparkDot","deploysMini":"deploysMini","bigStat":"bigStat","bigNum":"bigNum","ticks":"ticks","tick":"tick","flagsMini":"flagsMini","switchThumb":"switchThumb","meter":"meter","meterFill":"meterFill","reviewMini":"reviewMini","page":"page","pageBar":"pageBar","pageHero":"pageHero","pageLine":"pageLine","pin":"pin","detail":"detail","detailSurface":"detailSurface","detailBody":"detailBody","detailHeader":"detailHeader","detailBlurb":"detailBlurb","detailContent":"detailContent","close":"close","detailStack":"detailStack","detailRow":"detailRow","footnote":"footnote","segmented":"segmented","segment":"segment","segmentPill":"segmentPill","segmentLabel":"segmentLabel","stats":"stats","chart":"chart","chartSvg":"chartSvg","gridLine":"gridLine","chartArea":"chartArea","chartLine":"chartLine","p95Line":"p95Line","axis":"axis","approve":"approve","primary":"primary","spin":"spin","deployList":"deployList","deployRow":"deployRow","deployText":"deployText","deployMessage":"deployMessage","deployMeta":"deployMeta","deployWhen":"deployWhen","flagInfo":"flagInfo","flagTitle":"flagTitle","comments":"comments","comment":"comment","commentBody":"commentBody","commentHead":"commentHead","commentName":"commentName","commentText":"commentText"});
A.reg(44825, function(__module,__exports,__require){
"use strict";
function __m(e, t, o) {
  o.d(t, { A: () => a });
  var r = o(51811);
  let n = {
    name: "rocket",
    size: 24,
    node: [
      ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
      [
        "path",
        {
          d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
          key: "u4xsad"
        }
      ],
      [
        "path",
        {
          d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
          key: "676m9"
        }
      ],
      [
        "path",
        { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05", key: "92ym6u" }
      ]
    ]
  };
  n.node;
  let a = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.cssFor("spotlight-grid", [33976]);
A.item("spotlight-grid", {entry:8152, export:"SpotlightGrid", kind:"block", tier:"pro", unresolved:[]});
})();