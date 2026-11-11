function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ExplodedView: () => G, default: () => X });
  var s = a(95155), i = a(12115), n = a(5772), r = a(18310), l = a(14210), o = a(22535), d = a(7890), c = a(80642), h = a(25354), p = a(45425), m = a(94774), u = a(71019), x = a(71363), _ = a(51811);
  let v = {
    name: "wifi",
    size: 24,
    node: [
      ["path", { d: "M12 20h.01", key: "zekei9" }],
      ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
      ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
      ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]
    ]
  };
  v.node;
  let y = (0, _.A)(v);
  var f = a(71556), g = a(64577), w = a(7770);
  let b = [
    {
      id: "surface",
      name: "Surface",
      note: "Semantic tokens",
      body: "One neutral base. Every color resolves to a semantic role, so dark mode is a token swap instead of a redesign."
    },
    {
      id: "grid",
      name: "Layout grid",
      note: "4px rhythm, 16px gutters",
      body: "Four columns and a 4px rhythm put every edge on the same lines, from the header to the tab bar."
    },
    {
      id: "content",
      name: "Content",
      note: "Tabular figures",
      body: "The balance, the weekly chart and the ledger. Figures are tabular, so a new amount never nudges its neighbours."
    },
    {
      id: "controls",
      name: "Controls",
      note: "44px targets",
      body: "A segmented control and the tab bar. Each target is at least 44px tall, sized for a thumb rather than a cursor."
    },
    {
      id: "floating",
      name: "Floating layer",
      note: "The only shadow",
      body: "Notifications sit above everything else, so this is the one layer that earns a shadow."
    }
  ], j = {
    start: {
      title: "One screen",
      body: "Scroll to pull it apart, one layer at a time."
    },
    end: {
      title: "Back to one screen",
      body: "Five layers with one job each. That is why nothing on it competes."
    }
  }, N = ["Week", "Month", "Year"], k = [
    { day: "M", value: 84 },
    { day: "T", value: 42 },
    { day: "W", value: 118 },
    { day: "T", value: 66 },
    { day: "F", value: 164 },
    { day: "S", value: 212 },
    { day: "S", value: 58 }
  ], M = [
    {
      id: "t1",
      name: "Sofia Ramirez",
      detail: "Dinner split",
      amount: "+$38.00",
      incoming: true,
      photo: "media/people/sofia-ramirez.svg"
    },
    {
      id: "t2",
      name: "Tavola wine bar",
      detail: "Food and drink",
      amount: "-$64.20",
      incoming: false,
      photo: "media/photos/wine-bar.jpg"
    },
    {
      id: "t3",
      name: "Daniel Kim",
      detail: "Concert tickets",
      amount: "-$120.00",
      incoming: false,
      photo: "media/people/daniel-kim.svg"
    }
  ], T = "Rent paid", z = "$2,150.00 to Parkside Lofts", A = "now";
  var S = a(15651), C = a.n(S);
  let { duration: I, ease: R } = w.T, B = [...R.enter], F = { tiltX: 60, tiltZ: -40, gap: 136 }, E = { tiltX: 62, tiltZ: -20, gap: 150 }, $ = 140, L = 266, H = (e2, t2 = 0, a2 = 1) => Math.min(a2, Math.max(t2, e2)), O = (e2, t2, a2) => {
    let s2 = H((a2 - e2) / (t2 - e2));
    return s2 * s2 * (3 - 2 * s2);
  }, P = (e2, t2, a2) => (e2 - 2) * a2 * t2 + 0.5 * e2;
  function W(e2, t2, a2, s2, i2) {
    let n2 = s2 * Math.PI / 180, r2 = i2 * Math.PI / 180, l2 = e2 * Math.cos(r2) - t2 * Math.sin(r2), o2 = e2 * Math.sin(r2) + t2 * Math.cos(r2), d2 = o2 * Math.cos(n2) - a2 * Math.sin(n2), c2 = 2400 / (2400 - (o2 * Math.sin(n2) + a2 * Math.cos(n2)));
    return { x: l2 * c2, y: d2 * c2 };
  }
  let Z = () => () => {
  };
  function G({
    title: e2 = "Built in layers",
    description: t2 = "Take the Tally home screen apart. Each layer has one job, and together they read as one calm surface.",
    layers: a2 = b,
    ends: n2 = j,
    scroll: p2 = "container",
    length: m2 = 4,
    onStopChange: u2,
    className: x2
  }) {
    let _2, v2 = (_2 = (0, i.useSyncExternalStore)(
      Z,
      () => true,
      () => false
    ), !!(0, r.I)() && _2), y2 = (0, i.useId)(), f2 = (0, i.useRef)(null), g2 = (0, i.useRef)(null), w2 = (0, i.useRef)(null), N2 = (0, i.useRef)(null), k2 = (0, i.useRef)(null), M2 = (0, i.useRef)([]), T2 = (0, i.useRef)([]), z2 = (0, i.useRef)(null), A2 = (0, i.useRef)(0), [S2, V2] = (0, i.useState)(0), J2 = (0, i.useRef)(u2);
    (0, i.useEffect)(() => {
      J2.current = u2;
    }, [u2]);
    let { scrollYProgress: X2 } = (0, l.L)({
      container: "container" === p2 ? f2 : void 0,
      target: g2,
      offset: ["start start", "end end"]
    }), Y = (0, o.z)(X2, {
      stiffness: 200,
      damping: 36,
      mass: 0.6,
      restDelta: 5e-4
    }), q = (0, i.useCallback)(
      (e3) => {
        let t3, a3 = z2.current, s2 = k2.current, i2 = N2.current;
        if (!a3 || !s2 || !i2) return;
        let n3 = e3 < 0.28 ? 0 : e3 >= 0.8 ? 6 : 1 + Math.min(4, Math.floor((e3 - 0.28) / 0.10400000000000001)), r2 = n3 > 0 && n3 < 6, l2 = v2 ? +!!r2 : O(0.04, 0.22, e3) * (1 - O(0.84, 0.98, e3)), o2 = v2 ? +!!r2 : O(0.08, 0.28, e3) * (1 - O(0.8, 0.95, e3)), d2 = a3.geo.tiltX * l2, c2 = a3.geo.tiltZ * l2, h2 = (t3 = a3.s0, t3 + (a3.s1 - t3) * l2), p3 = a3.ox1 * l2, m3 = a3.oy1 * l2;
        i2.style.transform = `translate3d(${p3.toFixed(2)}px, ${m3.toFixed(2)}px, 0) scale(${h2.toFixed(4)})`, s2.style.transform = `rotateX(${d2.toFixed(3)}deg) rotateZ(${c2.toFixed(3)}deg)`, s2.style.setProperty("--spread", o2.toFixed(3));
        for (let e4 = 0; e4 < 5; e4++) {
          let t4 = P(e4, o2, a3.geo.gap), s3 = M2.current[e4];
          s3 && (s3.style.transform = `translate3d(0, 0, ${t4.toFixed(2)}px)`);
          let i3 = T2.current[e4];
          if (!i3) continue;
          let n4 = W($, L, t4, d2, c2), r3 = a3.sw / 2 + p3 + n4.x * h2, l3 = a3.sh / 2 + m3 + n4.y * h2, u3 = v2 ? o2 : H((o2 - 0.45 - 0.07 * e4) / 0.22);
          i3.style.transform = `translate3d(${r3.toFixed(2)}px, ${l3.toFixed(2)}px, 0)`, i3.style.opacity = u3.toFixed(3), i3.style.setProperty("--draw", u3.toFixed(3)), i3.style.visibility = u3 > 1e-3 ? "visible" : "hidden";
        }
        n3 !== A2.current && (A2.current = n3, V2(n3), J2.current?.(n3));
      },
      [v2]
    ), K = (0, i.useCallback)(() => {
      let e3 = w2.current;
      if (!e3) return;
      let t3 = e3.clientWidth, a3 = e3.clientHeight;
      if (!t3 || !a3) return;
      let s2 = Math.max(
        0,
        ...T2.current.map(
          (e4) => e4?.firstElementChild instanceof HTMLElement ? e4.firstElementChild.offsetWidth : 0
        )
      ) + 36, i2 = t3 < 560 && a3 > t3 ? E : F, n3 = 1 / 0, r2 = -1 / 0, l2 = 1 / 0, o2 = -1 / 0, d2 = -1 / 0;
      for (let e4 = 0; e4 < 5; e4++) {
        let t4 = P(e4, 1, i2.gap);
        for (let [e5, a4] of [
          [-140, -310],
          [140, -310],
          [140, 310],
          [-140, 310]
        ]) {
          let s3 = W(e5, a4, t4, i2.tiltX, i2.tiltZ);
          n3 = Math.min(n3, s3.x), r2 = Math.max(r2, s3.x), l2 = Math.min(l2, s3.y), o2 = Math.max(o2, s3.y);
        }
        d2 = Math.max(d2, W($, L, t4, i2.tiltX, i2.tiltZ).x);
      }
      let c2 = 0.94 * t3, h2 = Math.min(
        (c2 - s2) / (d2 - n3),
        c2 / (r2 - n3),
        0.88 * a3 / (o2 - l2),
        1.15
      ), p3 = Math.min(0.9 * t3 / 280, 0.9 * a3 / 620, 1.1), m3 = n3 * h2, u3 = Math.max(r2 * h2, d2 * h2 + s2);
      z2.current = {
        sw: t3,
        sh: a3,
        s0: p3,
        s1: Math.max(0.2, h2),
        ox1: -(m3 + u3) / 2,
        oy1: -(l2 + o2) / 2 * h2,
        geo: i2
      }, q((v2 ? X2 : Y).get());
    }, [q, v2, X2, Y]);
    (0, d.L)(Y, "change", (e3) => {
      v2 || q(e3);
    }), (0, d.L)(X2, "change", (e3) => {
      v2 && (Y.jump(e3), q(e3));
    }), (0, i.useLayoutEffect)(() => {
      let e3 = w2.current;
      if (!e3) return;
      K();
      let t3 = "u" < typeof ResizeObserver ? null : new ResizeObserver(() => K());
      return t3?.observe(e3), () => t3?.disconnect();
    }, [K]);
    let Q = S2 > 0 && S2 < 6 ? S2 - 1 : -1, U = 0 === S2 ? n2.start : 6 === S2 ? n2.end : { title: a2[Q]?.name ?? "", body: a2[Q]?.body ?? "" }, ee = ["Assembled", ...a2.map((e3) => e3.name), "Reassembled"];
    return (0, s.jsxs)("section", {
      className: `${C().root} ${x2 ?? ""}`,
      "data-scroll": p2,
      "aria-labelledby": y2,
      children: [
        (0, s.jsx)("div", {
          ref: f2,
          className: C().viewport,
          tabIndex: "container" === p2 ? 0 : void 0,
          role: "container" === p2 ? "region" : void 0,
          "aria-label": "container" === p2 ? `${e2}, scroll to separate the layers` : void 0,
          children: (0, s.jsx)("div", {
            ref: g2,
            className: C().track,
            style: { height: "page" === p2 ? `${100 * m2}svh` : `${100 * m2}%` },
            children: (0, s.jsxs)("div", {
              className: C().sticky,
              children: [
                (0, s.jsxs)("header", {
                  className: C().intro,
                  children: [
                    (0, s.jsx)("h2", {
                      id: y2,
                      className: C().title,
                      children: e2
                    }),
                    (0, s.jsx)("p", {
                      className: C().description,
                      children: t2
                    })
                  ]
                }),
                (0, s.jsxs)("div", {
                  ref: w2,
                  className: C().stage,
                  "data-focus": Q >= 0 || void 0,
                  "aria-hidden": "true",
                  children: [
                    (0, s.jsx)("div", {
                      ref: N2,
                      className: C().scaler,
                      style: { transform: "translate3d(0px, 0px, 0) scale(1)" },
                      children: (0, s.jsx)("div", {
                        className: C().perspective,
                        children: (0, s.jsx)("div", {
                          ref: k2,
                          className: C().group,
                          style: { transform: "rotateX(0deg) rotateZ(0deg)" },
                          children: a2.slice(0, 5).map(
                            (e3, t3) => (0, s.jsx)(
                              "div",
                              {
                                ref: (e4) => {
                                  M2.current[t3] = e4;
                                },
                                className: C().layer,
                                "data-layer": t3,
                                "data-active": Q === t3 || void 0,
                                style: {
                                  transform: "translate3d(0px, 0px, 0px)"
                                },
                                children: (0, s.jsx)(D, { index: t3 })
                              },
                              e3.id
                            )
                          )
                        })
                      })
                    }),
                    a2.slice(0, 5).map(
                      (e3, t3) => (0, s.jsx)(
                        "div",
                        {
                          ref: (e4) => {
                            T2.current[t3] = e4;
                          },
                          className: C().label,
                          "data-active": Q === t3 || void 0,
                          style: { opacity: 0, visibility: "hidden" },
                          children: (0, s.jsxs)("span", {
                            className: C().labelBody,
                            children: [
                              (0, s.jsx)("span", {
                                className: C().labelName,
                                children: e3.name
                              }),
                              (0, s.jsx)("span", {
                                className: C().labelNote,
                                children: e3.note
                              })
                            ]
                          })
                        },
                        e3.id
                      )
                    )
                  ]
                }),
                (0, s.jsxs)("div", {
                  className: C().footer,
                  children: [
                    (0, s.jsxs)("div", {
                      className: C().caption,
                      "aria-live": "polite",
                      children: [
                        [
                          n2.start,
                          ...a2.slice(0, 5).map((e3) => ({ title: e3.name, body: e3.body })),
                          n2.end
                        ].map(
                          (e3, t3) => (0, s.jsxs)(
                            "div",
                            {
                              className: `${C().captionItem} ${C().captionGhost}`,
                              "aria-hidden": "true",
                              children: [
                                (0, s.jsx)("h3", {
                                  className: C().captionTitle,
                                  children: e3.title
                                }),
                                (0, s.jsx)("p", {
                                  className: C().captionBody,
                                  children: e3.body
                                })
                              ]
                            },
                            `ghost-${t3}`
                          )
                        ),
                        (0, s.jsx)(c.N, {
                          mode: "popLayout",
                          initial: false,
                          children: (0, s.jsxs)(
                            h.PY1.div,
                            {
                              className: C().captionItem,
                              initial: v2 ? { opacity: 0 } : { opacity: 0, y: 10 },
                              animate: { opacity: 1, y: 0 },
                              exit: v2 ? { opacity: 0, transition: { duration: 0 } } : {
                                opacity: 0,
                                y: -8,
                                transition: {
                                  duration: I.exit,
                                  ease: [...R.exit]
                                }
                              },
                              transition: v2 ? { duration: 0 } : { duration: I.considered, ease: B },
                              children: [
                                (0, s.jsx)("h3", {
                                  className: C().captionTitle,
                                  children: U.title
                                }),
                                (0, s.jsx)("p", {
                                  className: C().captionBody,
                                  children: U.body
                                })
                              ]
                            },
                            S2
                          )
                        })
                      ]
                    }),
                    (0, s.jsx)("div", {
                      className: C().stops,
                      role: "group",
                      "aria-label": "Jump to a layer",
                      children: ee.map(
                        (e3, t3) => (0, s.jsx)(
                          "button",
                          {
                            type: "button",
                            className: C().stopButton,
                            "aria-label": e3,
                            "aria-current": S2 === t3 ? "step" : void 0,
                            onClick: () => ((e4) => {
                              let t4 = e4 <= 0 ? 0 : e4 >= 6 ? 1 : 0.28 + (e4 - 0.5) * 0.10400000000000001, a3 = v2 ? "auto" : "smooth";
                              if ("container" === p2) {
                                let e5 = f2.current;
                                if (!e5) return;
                                e5.scrollTo({
                                  top: (e5.scrollHeight - e5.clientHeight) * t4,
                                  behavior: a3
                                });
                                return;
                              }
                              let s2 = g2.current;
                              if (!s2) return;
                              let i2 = s2.getBoundingClientRect().top + window.scrollY;
                              window.scrollTo({
                                top: i2 + (s2.offsetHeight - window.innerHeight) * t4,
                                behavior: a3
                              });
                            })(t3),
                            children: (0, s.jsx)("span", {
                              className: C().tick,
                              "data-kind": 0 === t3 || 6 === t3 ? "end" : "layer"
                            })
                          },
                          e3 + t3
                        )
                      )
                    })
                  ]
                })
              ]
            })
          })
        }),
        (0, s.jsx)("ol", {
          className: C().srOnly,
          "aria-label": "Layers of the screen, bottom to top",
          children: a2.map(
            (e3) => (0, s.jsxs)("li", { children: [e3.name, ": ", e3.body] }, e3.id)
          )
        })
      ]
    });
  }
  let V = Math.max(...k.map((e2) => e2.value)), J = [p.A, m.A, u.A, x.A];
  function D({ index: e2 }) {
    return 0 === e2 ? (0, s.jsx)("div", {
      className: C().plate,
      children: (0, s.jsxs)("div", {
        className: C().statusBar,
        children: [
          (0, s.jsx)("span", { className: C().time, children: "9:41" }),
          (0, s.jsx)("span", { className: C().island }),
          (0, s.jsxs)("span", {
            className: C().statusIcons,
            children: [
              (0, s.jsx)(y, { size: 13, strokeWidth: 2 }),
              (0, s.jsx)("span", {
                className: C().battery,
                children: (0, s.jsx)("span", {})
              })
            ]
          })
        ]
      })
    }) : 1 === e2 ? (0, s.jsx)("div", {
      className: C().sheet,
      children: (0, s.jsxs)("div", {
        className: C().grid,
        children: [
          [0, 1, 2, 3].map(
            (e3) => (0, s.jsx)("span", { className: C().column }, e3)
          ),
          [52, 148, 208, 352, 548].map(
            (e3) => (0, s.jsx)(
              "span",
              { className: C().keyline, style: { top: e3 } },
              e3
            )
          )
        ]
      })
    }) : 2 === e2 ? (0, s.jsxs)("div", {
      className: C().sheet,
      children: [
        (0, s.jsxs)("div", {
          className: C().head,
          children: [
            (0, s.jsx)("span", { children: "Spending" }),
            (0, s.jsx)("span", {
              className: C().muted,
              children: "September"
            })
          ]
        }),
        (0, s.jsx)("div", {
          className: C().total,
          children: "$2,846.20"
        }),
        (0, s.jsxs)("div", {
          className: C().delta,
          children: [
            (0, s.jsx)(f.A, { size: 13, strokeWidth: 1.75 }),
            "12% less than August"
          ]
        }),
        (0, s.jsx)("div", {
          className: C().chart,
          children: k.map(
            (e3, t2) => (0, s.jsxs)(
              "span",
              {
                className: C().barCol,
                children: [
                  (0, s.jsx)("span", {
                    className: C().bar,
                    "data-peak": 5 === t2 || void 0,
                    style: {
                      height: `${Math.round(e3.value / V * 92)}px`
                    }
                  }),
                  (0, s.jsx)("span", {
                    className: C().barDay,
                    children: e3.day
                  })
                ]
              },
              t2
            )
          )
        }),
        (0, s.jsxs)("div", {
          className: C().recentHead,
          children: [
            (0, s.jsx)("span", { children: "Recent" }),
            (0, s.jsx)("span", {
              className: C().muted,
              children: "See all"
            })
          ]
        }),
        (0, s.jsx)("ul", {
          className: C().rows,
          children: M.map(
            (e3) => (0, s.jsxs)(
              "li",
              {
                className: C().row,
                children: [
                  (0, s.jsx)(n.default, {
                    src: e3.photo,
                    alt: "",
                    width: 32,
                    height: 32,
                    className: C().thumb
                  }),
                  (0, s.jsxs)("span", {
                    className: C().rowText,
                    children: [
                      (0, s.jsx)("span", { children: e3.name }),
                      (0, s.jsx)("span", {
                        className: C().muted,
                        children: e3.detail
                      })
                    ]
                  }),
                  (0, s.jsx)("span", {
                    className: C().amount,
                    "data-in": e3.incoming || void 0,
                    children: e3.amount
                  })
                ]
              },
              e3.id
            )
          )
        })
      ]
    }) : 3 === e2 ? (0, s.jsxs)("div", {
      className: C().sheet,
      children: [
        (0, s.jsx)("div", {
          className: C().segment,
          children: N.map(
            (e3, t2) => (0, s.jsx)(
              "span",
              { "data-on": 1 === t2 || void 0, children: e3 },
              e3
            )
          )
        }),
        (0, s.jsx)("div", {
          className: C().tabBar,
          children: J.map(
            (e3, t2) => (0, s.jsx)(
              "span",
              {
                className: C().tab,
                "data-on": 1 === t2 || void 0,
                children: (0, s.jsx)(e3, {
                  size: 20,
                  strokeWidth: 1.75
                })
              },
              t2
            )
          )
        })
      ]
    }) : (0, s.jsx)("div", {
      className: C().sheet,
      children: (0, s.jsxs)("div", {
        className: C().toast,
        children: [
          (0, s.jsx)("span", {
            className: C().toastMark,
            children: (0, s.jsx)(g.A, { size: 14, strokeWidth: 2 })
          }),
          (0, s.jsxs)("span", {
            className: C().toastText,
            children: [
              (0, s.jsxs)("span", {
                className: C().toastTitle,
                children: [
                  T,
                  (0, s.jsx)("span", {
                    className: C().muted,
                    children: A
                  })
                ]
              }),
              (0, s.jsx)("span", {
                className: C().toastBody,
                children: z
              })
            ]
          })
        ]
      })
    });
  }
  let X = G;
}

__m(__module,__exports,__require);
}