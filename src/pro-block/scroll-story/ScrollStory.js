function(__module,__exports,__require){
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
}