/* scroll-story (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(584, function(__module,__exports,__require){
"use strict";
function __m(e, t, s) {
  "use strict";
  s.r(t), s.d(t, { ScrollStory: () => W, default: () => Z });
  var a = s(95155), r = s(12115), l = s(5772), o = s(28245), n = s(92171), i = s(18310), c = s(80642), d = s(25354), u = s(55809), h = s(9751), m = s(99314), p = s(11012), y = s(9383), _ = s(64577), x = s(7770), f = s(55665), b = s(16608), g = s.n(b);
  let { spring: j, duration: v, ease: N, blur: w } = x.T, k = [...N.enter], L = [...N.standard], C = ({ visualDuration: e2, bounce: t2 }) => {
    let s2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: s2 * s2,
      damping: 2 * (1 - t2) * s2,
      mass: 1
    };
  }, A = C({ visualDuration: 0.5, bounce: 0 }), M = C(j.smooth), B = C({ visualDuration: 0.46, bounce: 0 }), S = (e2, t2, s2) => Math.min(s2, Math.max(t2, e2)), E = [
    {
      id: "collect",
      tab: "Collect",
      title: "Every request in one place",
      body: "Beacon pulls feedback from email, chat, surveys, and call notes into a single inbox, with the customer and their plan attached to every message.",
      status: "6 new"
    },
    {
      id: "sort",
      tab: "Sort",
      title: "Sorted before you read it",
      body: "Each message is tagged by theme the moment it arrives, so related requests line up next to each other without anyone triaging the queue.",
      status: "3 themes"
    },
    {
      id: "measure",
      tab: "Measure",
      title: "See what is growing",
      body: "Themes turn into trends. Watch a request climb week over week and know when it has quietly become the next thing to build.",
      status: "Last 8 weeks"
    },
    {
      id: "share",
      tab: "Share",
      title: "Close the loop",
      body: "Send a live trend to your team or a channel. Everyone sees the same numbers, and they update as new feedback comes in.",
      status: "Shared view"
    }
  ], T = [
    {
      id: "m1",
      name: "Jasmine Brooks",
      photo: "media/people/jasmine-brooks.svg",
      source: "Email",
      text: "Can we export reports to CSV?",
      theme: "Export"
    },
    {
      id: "m2",
      name: "Tyler Hayes",
      photo: "media/people/tyler-hayes.svg",
      source: "Chat",
      text: "The iPhone app keeps logging me out",
      theme: "Mobile"
    },
    {
      id: "m3",
      name: "Hannah Walsh",
      photo: "media/people/hannah-walsh.svg",
      source: "Survey",
      text: "We need a PDF of each monthly invoice",
      theme: "Billing"
    },
    {
      id: "m4",
      name: "Andre Williams",
      photo: "media/people/andre-williams.svg",
      source: "Call notes",
      text: "Scheduled exports to our warehouse?",
      theme: "Export"
    },
    {
      id: "m5",
      name: "Ava Mitchell",
      photo: "media/people/ava-mitchell.svg",
      source: "Chat",
      text: "Offline mode for the Android app, please",
      theme: "Mobile"
    },
    {
      id: "m6",
      name: "Nathan Cole",
      photo: "media/people/nathan-cole.svg",
      source: "Email",
      text: "Bulk export of every comment thread",
      theme: "Export"
    }
  ], P = [
    { theme: "Export", count: 42 },
    { theme: "Mobile", count: 27 },
    { theme: "Billing", count: 12 }
  ], R = [8, 11, 10, 15, 19, 18, 26, 31], O = [
    {
      name: "Olivia Bennett",
      photo: "media/people/olivia-bennett.svg",
      access: "Owner"
    },
    {
      name: "Marcus Johnson",
      photo: "media/people/marcus-johnson.svg",
      access: "Can edit"
    },
    {
      name: "Chloe Nguyen",
      photo: "media/people/chloe-nguyen.svg",
      access: "Can view"
    }
  ], I = "beacon.example/t/export-requests", z = R.map((e2, t2) => ({
    x: 6 + 288 * t2 / (R.length - 1),
    y: 90 - e2 / 34 * 84
  })), D = z.reduce((e2, t2, s2, a2) => {
    if (0 === s2) return `M${t2.x},${t2.y}`;
    let r2 = a2[s2 - 2] ?? a2[s2 - 1], l2 = a2[s2 - 1], o2 = a2[s2 + 1] ?? t2, n2 = { x: l2.x + (t2.x - r2.x) / 6, y: l2.y + (t2.y - r2.y) / 6 }, i2 = { x: t2.x - (o2.x - l2.x) / 6, y: t2.y - (o2.y - l2.y) / 6 };
    return `${e2} C${n2.x},${n2.y} ${i2.x},${i2.y} ${t2.x},${t2.y}`;
  }, ""), q = z[z.length - 1];
  function W() {
    let e2 = !!(0, i.I)(), t2 = (0, r.useId)(), s2 = (0, r.useRef)(null), l2 = (0, r.useRef)(null), n2 = (0, r.useRef)([]), c2 = (0, r.useRef)(0), d2 = (0, r.useRef)(3), [u2, h2] = (0, r.useState)(0), [m2, p2] = (0, r.useState)(3), [y2, _2] = (0, r.useState)(false), x2 = (0, o.d)(0), f2 = (0, r.useCallback)(() => {
      let e3 = s2.current, t3 = l2.current;
      if (!e3 || !t3) return;
      let a2 = e3.getBoundingClientRect(), r2 = t3.getBoundingClientRect(), o2 = r2.width > 0.75 * a2.width ? (r2.bottom + a2.bottom) / 2 : a2.top + a2.height / 2, i2 = 0;
      n2.current.forEach((e4, t4) => {
        if (!e4) return;
        let s3 = e4.getBoundingClientRect();
        o2 >= s3.top && (i2 = t4 + S((o2 - s3.top) / s3.height, 0, 1));
      }), x2.set(i2);
      let u3 = Math.min(E.length - 1, Math.floor(i2));
      u3 !== c2.current && (c2.current = u3, h2(u3));
      let m3 = u3 >= 1 ? T.length : S(3 + Math.floor(5 * i2), 3, T.length);
      m3 !== d2.current && (d2.current = m3, p2(m3));
    }, [x2]);
    return (0, r.useEffect)(() => {
      let e3 = s2.current;
      if (!e3) return;
      let t3 = 0, a2 = () => {
        cancelAnimationFrame(t3), t3 = requestAnimationFrame(f2);
      };
      e3.addEventListener("scroll", a2, { passive: true });
      let r2 = "u" < typeof ResizeObserver ? null : new ResizeObserver((e4) => {
        _2(e4[0].contentRect.width < 700), a2();
      });
      return r2?.observe(e3), a2(), () => {
        cancelAnimationFrame(t3), e3.removeEventListener("scroll", a2), r2?.disconnect();
      };
    }, [f2]), (0, a.jsx)("section", {
      className: g().root,
      "aria-labelledby": t2,
      children: (0, a.jsx)("div", {
        ref: s2,
        className: g().viewport,
        tabIndex: 0,
        role: "region",
        "aria-label": "Beacon product story, scroll to advance",
        children: (0, a.jsxs)("div", {
          className: g().track,
          children: [
            (0, a.jsx)("div", {
              ref: l2,
              className: g().visualCol,
              children: (0, a.jsx)(Y, {
                active: u2,
                arrived: m2,
                progress: x2,
                compact: y2,
                reduced: e2,
                onStep: (t3) => {
                  let a2 = s2.current, r2 = l2.current, o2 = n2.current[t3];
                  if (!a2 || !r2 || !o2) return;
                  let i2 = a2.getBoundingClientRect(), c3 = r2.getBoundingClientRect(), d3 = o2.getBoundingClientRect(), u3 = c3.width > 0.75 * i2.width ? (c3.bottom + i2.bottom) / 2 : i2.top + i2.height / 2;
                  a2.scrollBy({
                    top: d3.top + Math.min(0.35 * d3.height, 120) - u3,
                    behavior: e2 ? "auto" : "smooth"
                  });
                }
              })
            }),
            (0, a.jsxs)("div", {
              className: g().copy,
              children: [
                (0, a.jsxs)("header", {
                  className: g().intro,
                  children: [
                    (0, a.jsx)("h2", {
                      id: t2,
                      className: g().heading,
                      children: "From scattered feedback to a clear next step"
                    }),
                    (0, a.jsx)("p", {
                      className: g().lede,
                      children: "Beacon collects what customers ask for and shows you what matters most."
                    })
                  ]
                }),
                (0, a.jsx)("ol", {
                  className: g().steps,
                  children: E.map(
                    (e3, t3) => (0, a.jsxs)(
                      "li",
                      {
                        ref: (e4) => {
                          n2.current[t3] = e4;
                        },
                        className: g().step,
                        "data-active": t3 === u2 || void 0,
                        "aria-current": t3 === u2 ? "step" : void 0,
                        children: [
                          (0, a.jsx)("h3", {
                            className: g().stepTitle,
                            children: e3.title
                          }),
                          (0, a.jsx)("p", {
                            className: g().stepBody,
                            children: e3.body
                          })
                        ]
                      },
                      e3.id
                    )
                  )
                })
              ]
            })
          ]
        })
      })
    });
  }
  function Y({
    active: e2,
    arrived: t2,
    progress: s2,
    compact: r2,
    reduced: l2,
    onStep: o2
  }) {
    let n2 = E[e2];
    return (0, a.jsxs)("div", {
      className: g().card,
      children: [
        (0, a.jsxs)("div", {
          className: g().cardHead,
          children: [
            (0, a.jsxs)("span", {
              className: g().brand,
              children: [
                (0, a.jsx)("span", {
                  className: g().mark,
                  "aria-hidden": "true"
                }),
                "Beacon"
              ]
            }),
            (0, a.jsx)("span", {
              className: g().status,
              "aria-live": "polite",
              children: (0, a.jsx)(c.N, {
                initial: false,
                children: (0, a.jsx)(
                  d.PY1.span,
                  {
                    className: g().statusItem,
                    initial: l2 ? { opacity: 0 } : { opacity: 0, y: 6, filter: `blur(${w.subtle}px)` },
                    animate: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transitionEnd: { filter: "none" }
                    },
                    exit: { opacity: 0, transition: { duration: v.instant } },
                    transition: { duration: v.standard, ease: k },
                    children: n2.status
                  },
                  n2.status
                )
              })
            })
          ]
        }),
        (0, a.jsx)("div", {
          className: g().tabs,
          role: "tablist",
          "aria-label": "Story steps",
          onKeyDown: (t3) => {
            let s3 = "ArrowRight" === t3.key ? Math.min(E.length - 1, e2 + 1) : "ArrowLeft" === t3.key ? Math.max(0, e2 - 1) : "Home" === t3.key ? 0 : "End" === t3.key ? E.length - 1 : null;
            null !== s3 && (t3.preventDefault(), o2(s3), t3.currentTarget.children[s3]?.focus());
          },
          children: E.map(
            (t3, r3) => (0, a.jsx)(
              G,
              {
                index: r3,
                label: t3.tab,
                selected: r3 === e2,
                progress: s2,
                reduced: l2,
                onSelect: () => o2(r3)
              },
              t3.id
            )
          )
        }),
        (0, a.jsxs)("div", {
          className: g().canvas,
          "data-compact": r2 || void 0,
          children: [
            (0, a.jsx)(F, { active: e2, arrived: t2, compact: r2, reduced: l2 }),
            (0, a.jsx)(H, { active: e2, progress: s2, reduced: l2 }),
            (0, a.jsx)(K, { open: 3 === e2, reduced: l2 })
          ]
        })
      ]
    });
  }
  function G({
    index: e2,
    label: t2,
    selected: s2,
    progress: r2,
    reduced: l2,
    onSelect: o2
  }) {
    let n2 = (0, u.G)(r2, [e2, e2 + 1], [0, 1]), i2 = (0, u.G)(r2, (t3) => +(t3 >= e2));
    return (0, a.jsxs)("button", {
      type: "button",
      role: "tab",
      "aria-selected": s2,
      tabIndex: s2 ? 0 : -1,
      className: g().tab,
      onClick: o2,
      children: [
        (0, a.jsx)("span", { className: g().tabLabel, children: t2 }),
        (0, a.jsx)("span", {
          className: g().tabTrack,
          "aria-hidden": "true",
          children: (0, a.jsx)(d.PY1.span, {
            className: g().tabFill,
            style: { scaleX: l2 ? i2 : n2 }
          })
        })
      ]
    });
  }
  let F = (0, r.memo)(function({
    active: e2,
    arrived: t2,
    compact: s2,
    reduced: o2
  }) {
    let n2 = e2 >= 1, i2 = e2 >= 2, {
      row: u2,
      positions: h2,
      headers: m2
    } = (0, r.useMemo)(
      () => (function(e3, t3) {
        let s3 = t3 ? 36 : 40, a2 = /* @__PURE__ */ new Map(), r2 = [];
        if (e3) {
          let e4 = 0;
          for (let { theme: l2 } of P) {
            let o3 = T.filter((e5) => e5.theme === l2);
            for (let n3 of (t3 || (r2.push({ theme: l2, y: e4, count: o3.length }), e4 += 24), o3))
              a2.set(n3.id, { y: e4, order: a2.size }), e4 += s3 + 4;
          }
        } else
          T.forEach((e4, t4) => a2.set(e4.id, { y: t4 * (s3 + 4), order: t4 }));
        return { row: s3, positions: a2, headers: r2 };
      })(n2, s2),
      [n2, s2]
    );
    return (0, a.jsxs)("div", {
      className: g().inbox,
      "aria-hidden": i2 || void 0,
      children: [
        (0, a.jsx)("p", {
          className: g().srOnly,
          children: n2 ? "Inbox sorted by theme: Export has 3 messages, Mobile 2, Billing 1." : `Inbox with ${t2} new messages.`
        }),
        (0, a.jsx)(c.N, {
          initial: false,
          children: m2.map(
            (e3) => (0, a.jsxs)(
              d.PY1.p,
              {
                className: g().group,
                "aria-hidden": "true",
                initial: o2 ? { opacity: 0, y: e3.y } : { opacity: 0, x: -6, y: e3.y },
                animate: { opacity: +!i2, x: 0, y: e3.y },
                exit: {
                  opacity: 0,
                  transition: { duration: o2 ? 0 : v.fast, ease: L }
                },
                transition: o2 ? { duration: v.fast } : {
                  opacity: { duration: v.standard, delay: 0.18 * !i2 },
                  x: M,
                  y: A
                },
                children: [
                  e3.theme,
                  (0, a.jsx)("span", {
                    className: g().groupCount,
                    children: e3.count
                  })
                ]
              },
              e3.theme
            )
          )
        }),
        T.map((e3, s3) => {
          let r2 = !i2 && (n2 || s3 < t2), { y: c2, order: m3 } = h2.get(e3.id) ?? { y: 0, order: s3 };
          return (0, a.jsxs)(
            d.PY1.div,
            {
              className: g().row,
              style: { height: u2 },
              "aria-hidden": "true",
              initial: false,
              animate: {
                y: c2 + (r2 || o2 ? 0 : i2 ? -10 : 10),
                opacity: +!!r2,
                scale: r2 || o2 ? 1 : 0.98
              },
              transition: o2 ? { duration: v.fast } : {
                y: { ...A, delay: i2 ? 0.025 * s3 : n2 ? 0.035 * m3 : 0 },
                scale: M,
                opacity: {
                  duration: v.standard,
                  ease: r2 ? k : L,
                  delay: i2 ? 0.025 * s3 : 0
                }
              },
              children: [
                (0, a.jsx)(l.default, {
                  src: e3.photo,
                  alt: "",
                  width: 28,
                  height: 28,
                  className: g().avatar
                }),
                (0, a.jsxs)("span", {
                  className: g().rowText,
                  children: [
                    (0, a.jsxs)("span", {
                      className: g().rowTop,
                      children: [
                        (0, a.jsx)("span", {
                          className: g().rowName,
                          children: e3.name
                        }),
                        (0, a.jsx)("span", {
                          className: g().rowSource,
                          children: e3.source
                        })
                      ]
                    }),
                    (0, a.jsx)("span", {
                      className: g().rowMessage,
                      children: e3.text
                    })
                  ]
                }),
                (0, a.jsx)(d.PY1.span, {
                  className: g().tag,
                  initial: false,
                  animate: { opacity: +!!n2, scale: n2 || o2 ? 1 : 0.9 },
                  transition: o2 ? { duration: v.fast } : {
                    ...M,
                    opacity: {
                      duration: v.fast,
                      delay: n2 ? 0.1 + 0.035 * m3 : 0
                    }
                  },
                  children: e3.theme
                })
              ]
            },
            e3.id
          );
        })
      ]
    });
  }), H = (0, r.memo)(function({ active: e2, progress: t2, reduced: s2 }) {
    let l2 = e2 >= 2, i2 = 3 === e2, c2 = (0, u.G)(t2, [2.02, 2.7], [0, 1]), m2 = (0, u.G)(c2, [0.94, 1], [0, 1]), p2 = (0, o.d)(0), y2 = (0, u.G)(p2, (e3) => Math.round(e3).toString());
    return (0, r.useLayoutEffect)(() => {
      let e3 = l2 ? R[R.length - 1] : 0;
      if (s2) return void p2.jump(e3);
      let t3 = (0, n.i)(p2, e3, { duration: l2 ? 0.9 : 0.2, ease: k });
      return () => t3.stop();
    }, [l2, s2, p2]), (0, a.jsxs)(d.PY1.div, {
      className: g().trend,
      "aria-hidden": !l2 || void 0,
      initial: false,
      animate: {
        opacity: l2 ? i2 ? 0.45 : 1 : 0,
        y: l2 || s2 ? 0 : 12,
        scale: i2 && !s2 ? 0.96 : 1
      },
      transition: s2 ? { duration: v.fast } : {
        opacity: { duration: v.standard, delay: l2 && !i2 ? 0.18 : 0 },
        y: M,
        scale: M
      },
      children: [
        (0, a.jsxs)("div", {
          className: g().trendHead,
          children: [
            (0, a.jsxs)("div", {
              children: [
                (0, a.jsx)("p", {
                  className: g().trendLabel,
                  children: "Export requests per week"
                }),
                (0, a.jsxs)("p", {
                  className: g().trendValue,
                  children: [
                    (0, a.jsx)(d.PY1.span, {
                      className: g().num,
                      children: y2
                    }),
                    (0, a.jsxs)("span", {
                      className: g().srOnly,
                      children: [R[R.length - 1], " this week"]
                    }),
                    (0, a.jsx)("span", {
                      className: g().trendUnit,
                      "aria-hidden": "true",
                      children: "this week"
                    })
                  ]
                })
              ]
            }),
            (0, a.jsxs)("p", {
              className: g().delta,
              children: [
                (0, a.jsx)(h.A, {
                  size: 14,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                "288%",
                (0, a.jsx)("span", {
                  className: g().deltaNote,
                  children: "since July"
                })
              ]
            })
          ]
        }),
        (0, a.jsxs)("div", {
          className: g().chartBox,
          children: [
            (0, a.jsxs)("svg", {
              className: g().chart,
              viewBox: "0 0 300 96",
              preserveAspectRatio: "none",
              "aria-hidden": "true",
              children: [
                [0.25, 0.5, 0.75].map(
                  (e3) => (0, a.jsx)(
                    "line",
                    {
                      x1: 0,
                      x2: 300,
                      y1: 96 * e3,
                      y2: 96 * e3,
                      className: g().gridLine
                    },
                    e3
                  )
                ),
                (0, a.jsx)(d.PY1.path, {
                  d: D,
                  className: g().line,
                  style: { pathLength: s2 ? 1 : c2 }
                })
              ]
            }),
            (0, a.jsx)("div", {
              className: g().chartDotLayer,
              "aria-hidden": "true",
              children: (0, a.jsx)(d.PY1.span, {
                className: g().chartDot,
                style: {
                  left: `${q.x / 300 * 100}%`,
                  top: `${q.y / 96 * 100}%`,
                  opacity: s2 ? +!!l2 : m2
                }
              })
            })
          ]
        }),
        (0, a.jsx)("ul", {
          className: g().bars,
          children: P.map(
            (e3, t3) => (0, a.jsxs)(
              "li",
              {
                className: g().bar,
                children: [
                  (0, a.jsx)("span", {
                    className: g().barLabel,
                    children: e3.theme
                  }),
                  (0, a.jsx)("span", {
                    className: g().barTrack,
                    "aria-hidden": "true",
                    children: (0, a.jsx)(d.PY1.span, {
                      className: g().barFill,
                      initial: false,
                      animate: { scaleX: l2 ? e3.count / P[0].count : 0 },
                      transition: s2 ? { duration: 0 } : { ...M, delay: l2 ? 0.3 + 0.06 * t3 : 0 }
                    })
                  }),
                  (0, a.jsx)("span", {
                    className: g().barValue,
                    children: e3.count
                  })
                ]
              },
              e3.theme
            )
          )
        })
      ]
    });
  });
  function V({ shown: e2, reduced: t2, children: s2 }) {
    var l2;
    let i2, c2, u2 = (0, r.useRef)(null), [h2, m2] = (0, r.useState)([]);
    (0, r.useLayoutEffect)(() => {
      let e3 = Array.from(u2.current?.children ?? []), t3 = () => m2(e3.map((e4) => e4.offsetWidth));
      if (t3(), "u" < typeof ResizeObserver) return;
      let s3 = new ResizeObserver(t3);
      return e3.forEach((e4) => s3.observe(e4)), () => s3.disconnect();
    }, []);
    let p2 = (l2 = h2[e2], i2 = (0, o.d)("auto"), c2 = (0, r.useRef)(false), (0, r.useLayoutEffect)(() => {
      if (!l2) return;
      if (!c2.current || t2) {
        c2.current = true, i2.jump(l2);
        return;
      }
      let e3 = (0, n.i)(i2, l2, {
        type: "spring",
        visualDuration: 0.22,
        bounce: 0
      });
      return () => e3.stop();
    }, [l2, t2, i2]), i2);
    return (0, a.jsx)(d.PY1.span, {
      ref: u2,
      className: g().copyLayers,
      style: { width: p2 },
      children: s2
    });
  }
  function $({ on: e2, reduced: t2 }) {
    return (0, a.jsx)("svg", {
      width: 14,
      height: 14,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.75,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: (0, a.jsx)(d.PY1.path, {
        d: "M4 12l5 5L20 6",
        initial: false,
        animate: { pathLength: e2 || t2 ? 1 : 0 },
        transition: e2 ? { duration: 0.22, ease: L, delay: 0.04 } : { duration: 0, delay: 0.12 }
      })
    });
  }
  let K = (0, r.memo)(function({ open: e2, reduced: t2 }) {
    let { state: s2, copy: o2 } = (0, f.q)(), [n2, i2] = (0, r.useState)("idle"), c2 = (0, r.useRef)(null);
    return (0, r.useEffect)(
      () => () => {
        c2.current && clearTimeout(c2.current);
      },
      []
    ), (0, a.jsxs)(d.PY1.div, {
      className: g().sheet,
      role: "group",
      "aria-label": "Share the export trend",
      "aria-hidden": !e2 || void 0,
      inert: !e2,
      initial: false,
      animate: { y: e2 || t2 ? 0 : "108%", opacity: e2 ? 1 : +!t2 },
      transition: t2 ? { duration: v.fast } : { y: e2 ? B : M, opacity: { duration: v.fast } },
      children: [
        (0, a.jsx)("p", {
          className: g().sheetTitle,
          children: "Share \u201CExport requests\u201D"
        }),
        (0, a.jsx)("ul", {
          className: g().team,
          children: O.map(
            (e3) => (0, a.jsxs)(
              "li",
              {
                className: g().member,
                children: [
                  (0, a.jsx)(l.default, {
                    src: e3.photo,
                    alt: "",
                    width: 28,
                    height: 28,
                    className: g().avatar
                  }),
                  (0, a.jsx)("span", {
                    className: g().memberName,
                    children: e3.name
                  }),
                  (0, a.jsx)("span", {
                    className: g().memberAccess,
                    children: e3.access
                  })
                ]
              },
              e3.name
            )
          )
        }),
        (0, a.jsxs)("div", {
          className: g().linkRow,
          children: [
            (0, a.jsx)("span", { className: g().link, children: I }),
            (0, a.jsxs)("button", {
              type: "button",
              className: g().ghostButton,
              onClick: () => o2(`https://${I}`, "link"),
              "data-state": s2,
              children: [
                (0, a.jsxs)(V, {
                  shown: "copied" === s2 ? 1 : 2 * ("error" === s2),
                  reduced: t2,
                  children: [
                    (0, a.jsxs)("span", {
                      className: g().copyLayer,
                      "data-on": "idle" === s2 || void 0,
                      children: [
                        (0, a.jsx)(m.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        "Copy link"
                      ]
                    }),
                    (0, a.jsxs)("span", {
                      className: g().copyLayer,
                      "data-on": "copied" === s2 || void 0,
                      children: [
                        (0, a.jsx)($, { on: "copied" === s2, reduced: t2 }),
                        "Copied"
                      ]
                    }),
                    (0, a.jsxs)("span", {
                      className: g().copyLayer,
                      "data-on": "error" === s2 || void 0,
                      children: [
                        (0, a.jsx)(p.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        "Not copied"
                      ]
                    })
                  ]
                }),
                (0, a.jsx)("span", {
                  className: g().srOnly,
                  "aria-live": "polite",
                  children: "copied" === s2 ? "Link copied" : "error" === s2 ? "Could not copy the link" : ""
                })
              ]
            })
          ]
        }),
        (0, a.jsxs)("button", {
          type: "button",
          className: g().sendButton,
          onClick: () => {
            (c2.current && clearTimeout(c2.current), "idle" !== n2) ? i2("idle") : (i2("sending"), c2.current = setTimeout(() => i2("sent"), 700));
          },
          "data-state": n2,
          children: [
            (0, a.jsxs)("span", {
              className: g().layers,
              children: [
                (0, a.jsxs)("span", {
                  className: g().layer,
                  "data-on": "idle" === n2 || void 0,
                  children: [
                    (0, a.jsx)(y.A, {
                      size: 14,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    "Send to #product-feedback"
                  ]
                }),
                (0, a.jsxs)("span", {
                  className: g().layer,
                  "data-on": "sending" === n2 || void 0,
                  children: [
                    (0, a.jsx)("span", {
                      className: g().spinner,
                      "aria-hidden": "true"
                    }),
                    "Sending"
                  ]
                }),
                (0, a.jsxs)("span", {
                  className: g().layer,
                  "data-on": "sent" === n2 || void 0,
                  children: [
                    (0, a.jsx)(_.A, {
                      size: 14,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    "Sent"
                  ]
                })
              ]
            }),
            (0, a.jsx)("span", {
              className: g().srOnly,
              "aria-live": "polite",
              children: "sent" === n2 ? "Sent to product feedback" : ""
            })
          ]
        })
      ]
    });
  }), Z = W;
}

__m(__module,__exports,__require);
});
A.reg(9383, function(__module,__exports,__require){
"use strict";
function __m(e, t, s) {
  "use strict";
  s.d(t, { A: () => l });
  var a = s(51811);
  let r = {
    name: "send",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
          key: "1ffxy3"
        }
      ],
      ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
    ]
  };
  r.node;
  let l = (0, a.A)(r);
}

__m(__module,__exports,__require);
});
A.regCss(16608, ".root{--story-h:clamp(480px,74vh,600px);box-sizing:border-box;width:min(100%,1040px);min-width:0;margin-inline:auto;container-type:inline-size;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root *,.root :after,.root :before{box-sizing:border-box}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.num{font-variant-numeric:tabular-nums}\n.viewport{position:relative;height:var(--story-h);overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain;border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface);scrollbar-width:thin}\n@container (max-width: 699px){.viewport{--story-h:clamp(560px,82vh,660px)}\n@media (max-width:560px){.viewport{-webkit-mask-image:linear-gradient(180deg,#000 calc(100% - 48px),transparent);mask-image:linear-gradient(180deg,#000 calc(100% - 48px),transparent)}\n.track{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);gap:48px;padding-inline:48px 32px}\n.track{grid-template-columns:minmax(0,1fr);gap:0;padding-inline:16px}\n.copy{grid-column:1;grid-row:1;min-width:0;padding-bottom:calc(var(--story-h) / 2 - 110px)}\n.copy{grid-column:1;grid-row:2;padding-bottom:calc(var(--story-h) * .3)}\n.intro{display:grid;gap:12px;padding-top:56px}\n.intro{padding-top:20px}\n.heading{margin:0;font-family:var(--font-display);font-size:var(--text-3xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display);text-wrap:balance}\n.heading{font-size:var(--text-2xl)}\n.lede{margin:0;max-width:32ch;color:var(--text-secondary);font-size:var(--text-base)}\n.lede{font-size:var(--text-sm)}\n.steps{margin:0;padding:0;list-style:none}\n.step{display:grid;align-content:center;gap:8px;min-height:calc(var(--story-h) * .58);opacity:.32;transition:opacity var(--duration-considered) var(--ease-standard)}\n.step[data-active]{opacity:1}\n.step{min-height:calc(var(--story-h) * .42)}\n@media (prefers-reduced-motion:reduce){.copyLayer,.copyLayer[data-on],.layer,.layer[data-on],.step,.tab{transition-duration:0s}\n.stepTitle{margin:0;font-size:var(--text-xl);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.stepTitle{font-size:var(--text-lg)}\n.stepBody{margin:0;max-width:38ch;color:var(--text-secondary);font-size:var(--text-base)}\n.stepBody{font-size:var(--text-sm)}\n.visualCol{position:sticky;top:0;z-index:2;grid-column:2;grid-row:1;display:flex;align-items:center;justify-content:center;height:var(--story-h);min-width:0}\n.visualCol{grid-column:1;grid-row:1;height:auto;padding:16px 0 12px;background:var(--surface)}\n.visualCol:after{content:\"\";position:absolute;right:0;bottom:-24px;left:0;height:24px;background:linear-gradient(var(--surface),transparent);pointer-events:none}\n.card{width:min(100%,440px);overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface-raised);box-shadow:var(--shadow-raised)}\n.cardHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 16px 10px 18px}\n.cardHead{padding:10px 12px 8px 14px}\n.brand{display:inline-flex;align-items:center;gap:8px;font-weight:500}\n.mark{width:14px;height:14px;border-radius:4px 50% 50% 50%;background:var(--accent)}\n.status{display:inline-grid;justify-items:end;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.statusItem{grid-area:1/1;white-space:nowrap}\n.tabs{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;padding:0 12px 12px;border-bottom:1px solid var(--border-subtle)}\n.tabs{padding:0 8px 8px;gap:4px}\n.tab{display:grid;gap:6px;min-width:0;padding:6px 6px 4px;border:0;border-radius:10px;background:transparent;color:var(--text-muted);font:inherit;font-size:var(--text-xs);font-weight:500;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.tab[aria-selected=true]{color:var(--foreground)}\n@media (hover:hover) and (pointer:fine){.tab:hover{background:var(--surface-muted)}\n.tabLabel{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n.tabTrack{position:relative;height:3px;overflow:hidden;border-radius:2px;background:var(--border)}\n.tabFill{position:absolute;inset:0;border-radius:inherit;background:var(--accent);transform-origin:0 50%}\n.canvas{position:relative;height:356px;overflow:hidden}\n.canvas[data-compact]{height:260px}\n.canvas[data-compact] .rowSource{display:none}\n.canvas[data-compact] .bars{display:none}\n.canvas[data-compact] .team{display:none}\n.inbox{position:absolute;inset:12px 12px 0}\n.group{position:absolute;top:0;left:6px;right:6px;display:flex;align-items:center;gap:6px;height:24px;margin:0;color:var(--text-secondary);font-size:var(--text-xs);font-weight:500}\n.groupCount{color:var(--text-muted);font-weight:400;font-variant-numeric:tabular-nums}\n.row{position:absolute;top:0;left:0;right:0;display:flex;align-items:center;gap:10px;padding:0 8px;border-radius:12px;background:color-mix(in oklab,var(--surface-muted) 60%,var(--surface-raised));transform-origin:50% 50%}\n.avatar{flex:none;width:28px;height:28px;border-radius:50%;object-fit:cover}\n.rowText{display:grid;flex:1;min-width:0;line-height:1.25}\n.rowTop{display:flex;align-items:baseline;gap:6px;min-width:0}\n.rowName{overflow:hidden;font-size:var(--text-xs);font-weight:500;white-space:nowrap;text-overflow:ellipsis}\n.rowSource{flex:none;color:var(--text-muted);font-size:var(--text-xs)}\n.rowMessage{overflow:hidden;color:var(--text-secondary);font-size:var(--text-xs);white-space:nowrap;text-overflow:ellipsis}\n.tag{flex:none;padding:2px 8px;border-radius:var(--radius-pill);background:var(--accent-subtle);color:var(--foreground);font-size:var(--text-xs);font-weight:500;line-height:1.4}\n.trend{position:absolute;inset:0;display:grid;align-content:start;gap:10px;padding:16px 18px;transform-origin:50% 0}\n.trendHead{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}\n.trendLabel{margin:0;color:var(--text-secondary);font-size:var(--text-xs)}\n.trendValue{display:flex;align-items:baseline;gap:6px;margin:2px 0 0;font-family:var(--font-display);font-size:var(--text-2xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:1.1}\n.trendUnit{color:var(--text-muted);font-family:var(--font-body);font-size:var(--text-xs);font-weight:400;letter-spacing:var(--tracking-body)}\n.delta{display:inline-flex;align-items:center;gap:2px;margin:4px 0 0;color:var(--success);font-size:var(--text-xs);font-weight:500;font-variant-numeric:tabular-nums;white-space:nowrap}\n.deltaNote{margin-left:4px;color:var(--text-muted);font-weight:400}\n.chartBox{position:relative;height:96px}\n.chart{position:absolute;inset:0;display:block;width:100%;height:100%;overflow:visible}\n.gridLine{stroke:var(--border-subtle);stroke-width:1;vector-effect:non-scaling-stroke}\n.line{fill:none;stroke:var(--accent);stroke-width:2;stroke-linecap:round;stroke-linejoin:round;vector-effect:non-scaling-stroke}\n.chartDotLayer{position:absolute;inset:0;pointer-events:none}\n.chartDot{position:absolute;width:12px;height:12px;margin:-6px 0 0 -6px;border:2px solid var(--surface-raised);border-radius:50%;background:var(--accent)}\n.bars{display:grid;gap:8px;margin:6px 0 0;padding:0;list-style:none}\n.bar{display:grid;grid-template-columns:56px minmax(0,1fr) 28px;align-items:center;gap:10px;font-size:var(--text-xs)}\n.bar+.bar .barFill{background:var(--text-muted)}\n.barLabel{color:var(--text-secondary)}\n.barTrack{position:relative;height:6px;overflow:hidden;border-radius:3px;background:var(--surface-muted)}\n.barFill{position:absolute;inset:0;border-radius:inherit;background:var(--accent);transform-origin:0 50%}\n.barValue{color:var(--text-secondary);text-align:right;font-variant-numeric:tabular-nums}\n.sheet{position:absolute;right:8px;bottom:8px;left:8px;z-index:2;display:grid;gap:12px;padding:16px;border:1px solid var(--border);border-radius:calc(var(--radius-panel) - 8px);background:var(--surface-raised);box-shadow:var(--shadow-floating)}\n.sheetTitle{margin:0;font-weight:500}\n.team{display:grid;gap:8px;margin:0;padding:0;list-style:none}\n.member{display:flex;align-items:center;gap:10px;min-width:0;font-size:var(--text-xs)}\n.memberName{flex:1;min-width:0;overflow:hidden;font-weight:500;white-space:nowrap;text-overflow:ellipsis}\n.memberAccess{color:var(--text-muted)}\n.linkRow{display:flex;align-items:center;gap:8px;min-width:0;padding:4px 4px 4px 12px;border:1px solid var(--border);border-radius:14px}\n.link{flex:1;min-width:0;overflow:hidden;color:var(--text-secondary);font-size:var(--text-xs);white-space:nowrap;text-overflow:ellipsis}\n.ghostButton,.sendButton{display:inline-flex;align-items:center;justify-content:center;height:32px;padding:0 12px;border:0;border-radius:10px;font:inherit;font-size:var(--text-xs);font-weight:500;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.ghostButton{flex:none;background:var(--surface-muted);color:var(--foreground)}\n.ghostButton:active,.sendButton:active{transform:scale(.97)}\n.ghostButton:hover{background:color-mix(in oklab,var(--surface-muted),var(--border) 55%)}\n.ghostButton[data-state=error]{color:var(--danger)}\n.ghostButton:active,.sendButton:active{transform:none}\n.sendButton{height:36px;background:var(--accent);color:var(--accent-foreground)}\n@media (hover:hover) and (pointer:fine){.sendButton:hover{background:var(--accent-strong)}\n.copyLayers{display:inline-grid;grid-template-columns:minmax(0,1fr);justify-items:center}\n.copyLayer{grid-area:1/1;display:inline-flex;align-items:center;justify-content:center;gap:6px;white-space:nowrap;opacity:0;transform:translateY(2px);visibility:hidden;transition:opacity .1s var(--ease-standard),transform .1s var(--ease-standard),visibility 0s .1s}\n.copyLayer[data-on]{opacity:1;transform:none;visibility:visible;transition:opacity .16s var(--ease-standard),transform .16s var(--ease-standard),visibility 0s}\n.copyLayer:nth-child(2) svg{color:var(--success)}\n.layers{display:inline-grid}\n.layer{grid-area:1/1;display:inline-flex;align-items:center;justify-content:center;gap:6px;white-space:nowrap;opacity:0;filter:blur(2px);transform:translateY(4px);visibility:hidden;transition:opacity var(--duration-fast) var(--ease-standard),filter var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard),visibility 0s var(--duration-fast)}\n.layer[data-on]{opacity:1;filter:none;transform:none;visibility:visible;transition:opacity var(--duration-standard) var(--ease-enter),filter var(--duration-standard) var(--ease-enter),transform var(--duration-spring) var(--ease-spring),visibility 0s}\n.spinner{width:12px;height:12px;border:1.5px solid;border-right:1.5px solid transparent;border-radius:50%;animation:spin .7s linear infinite}\n.spinner{animation-duration:1.6s}", {"root":"root","srOnly":"srOnly","num":"num","viewport":"viewport","track":"track","copy":"copy","intro":"intro","heading":"heading","lede":"lede","steps":"steps","step":"step","copyLayer":"copyLayer","layer":"layer","tab":"tab","stepTitle":"stepTitle","stepBody":"stepBody","visualCol":"visualCol","card":"card","cardHead":"cardHead","brand":"brand","mark":"mark","status":"status","statusItem":"statusItem","tabs":"tabs","tabLabel":"tabLabel","tabTrack":"tabTrack","tabFill":"tabFill","canvas":"canvas","rowSource":"rowSource","bars":"bars","team":"team","inbox":"inbox","group":"group","groupCount":"groupCount","row":"row","avatar":"avatar","rowText":"rowText","rowTop":"rowTop","rowName":"rowName","rowMessage":"rowMessage","tag":"tag","trend":"trend","trendHead":"trendHead","trendLabel":"trendLabel","trendValue":"trendValue","trendUnit":"trendUnit","delta":"delta","deltaNote":"deltaNote","chartBox":"chartBox","chart":"chart","gridLine":"gridLine","line":"line","chartDotLayer":"chartDotLayer","chartDot":"chartDot","bar":"bar","barFill":"barFill","barLabel":"barLabel","barTrack":"barTrack","barValue":"barValue","sheet":"sheet","sheetTitle":"sheetTitle","member":"member","memberName":"memberName","memberAccess":"memberAccess","linkRow":"linkRow","link":"link","ghostButton":"ghostButton","sendButton":"sendButton","copyLayers":"copyLayers","layers":"layers","spinner":"spinner"});
A.cssFor("scroll-story", [16608]);
A.item("scroll-story", {entry:584, export:"ScrollStory", kind:"block", tier:"pro", unresolved:[]});
})();