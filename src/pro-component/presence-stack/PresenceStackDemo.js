function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { PresenceStackDemo: () => $, default: () => I });
  var n = a(95155), i = a(12115), s = a(9005), r = a(17143), o = a(20508), l = a(79267), c = a(36619), d = a(67752), p = a(2520), h = a(40093), u = a(80642), m = a(25354), g = a(18310), f = a(28245), y = a(92171), w = a(7770), v = a(17476), x = a.n(v);
  let _ = { sm: 28, md: 36, lg: 44 }, j = { active: "Active now", idle: "Idle", typing: "Typing" };
  function k({ person: e2, size: t2 }) {
    let [a2, s2] = (0, i.useState)(), r2 = e2.src && a2 !== e2.src;
    return (0, n.jsxs)("span", {
      className: x().face,
      children: [
        (0, n.jsx)("span", {
          className: x().initials,
          "aria-hidden": "true",
          children: e2.name.trim().split(/\s+/).slice(0, 2).map((e3) => e3[0]?.toUpperCase() ?? "").join("")
        }),
        r2 ? (0, n.jsx)(p.W, {
          src: e2.src,
          alt: "",
          fill: true,
          sizes: `${t2}px`,
          className: x().photo,
          onError: () => s2(e2.src),
          draggable: false
        }) : null
      ]
    });
  }
  function b({ className: e2 }) {
    return (0, n.jsxs)("span", {
      className: [x().dots, e2].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: [(0, n.jsx)("i", {}), (0, n.jsx)("i", {}), (0, n.jsx)("i", {})]
    });
  }
  function N({ status: e2, reduceMotion: t2 }) {
    let a2 = t2 ? { duration: 0 } : w.T.spring.snappy;
    return (0, n.jsx)("span", {
      className: x().mark,
      "aria-hidden": "true",
      children: (0, n.jsx)(u.N, {
        initial: false,
        mode: "popLayout",
        children: "typing" === e2 ? (0, n.jsx)(
          m.PY1.span,
          {
            className: x().typingMark,
            initial: { opacity: 0, scale: 0.4 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.4 },
            transition: a2,
            children: (0, n.jsx)(b, {})
          },
          "typing"
        ) : (0, n.jsx)(
          m.PY1.span,
          {
            className: [x().dot, "idle" === e2 ? x().dotIdle : ""].join(
              " "
            ),
            initial: { opacity: 0, scale: 0.4 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.4 },
            transition: a2
          },
          "dot"
        )
      })
    });
  }
  function A({
    people: e2,
    max: t2 = 4,
    size: a2 = "md",
    align: s2 = "start",
    selfId: r2,
    label: o2 = "People here now",
    heading: l2 = "Here now",
    open: c2,
    defaultOpen: d2 = false,
    onOpenChange: p2,
    onPersonSelect: v2,
    announce: P2 = true,
    className: T2,
    style: M2
  }) {
    let S2 = !!(0, g.I)(), R2 = _[a2], z2 = Math.round(0.68 * R2), D2 = Math.max(1, Math.floor(t2)), E2 = e2.length > D2 ? e2.slice(0, D2) : e2, O2 = e2.length - E2.length, $2 = E2.length + +(O2 > 0), I2 = (D2 + 1 - 1) * z2 + R2, [L, W] = (0, i.useState)(d2), F = c2 ?? L, B = (e3) => {
      void 0 === c2 && W(e3), p2?.(e3);
    }, [Y, K] = (0, i.useState)(false), [H, J] = (0, i.useState)(false), [G, U] = (0, i.useState)(null), q = (0, i.useRef)(void 0), V = (Y || H) && !F, Z = $2 > 0 ? ($2 - 1) * z2 + R2 : 0, Q = "end" === s2 ? I2 - Z : 0, X = (e3) => {
      window.clearTimeout(q.current), K(true), U(e3);
    }, ee = () => {
      window.clearTimeout(q.current), q.current = window.setTimeout(() => {
        K(false), U(null);
      }, 90);
    };
    (0, i.useEffect)(() => () => window.clearTimeout(q.current), []);
    let et = null !== G && G < $2 ? G : null, ea = null === et ? null : et < E2.length ? E2[et] : null, en = ea ? `${ea.name}${ea.id === r2 ? " (you)" : ""}` : null !== et ? `${O2} more` : "", ei = ea ? j[ea.status ?? "active"] : null !== et ? "Show everyone" : "", es = (0, i.useRef)(null), er = (0, f.d)(0), eo = V && null !== et, el = (0, i.useRef)(false);
    (0, i.useLayoutEffect)(() => {
      if (!es.current) return;
      let e3 = es.current.offsetWidth + 1;
      eo && el.current && !S2 ? (0, y.i)(er, e3, w.T.spring.morph) : er.set(e3), el.current = eo;
    }, [en, ei, eo, S2, er]);
    let [ec, ed] = (0, i.useState)({ value: O2, direction: 1 });
    ec.value !== O2 && ed({ value: O2, direction: O2 < ec.value ? -1 : 1 });
    let [ep, eh] = (0, i.useState)(""), eu = (0, i.useRef)(e2);
    (0, i.useEffect)(() => {
      if (!P2) return;
      let t3 = new Map(eu.current.map((e3) => [e3.id, e3])), a3 = new Set(e2.map((e3) => e3.id)), n2 = e2.filter((e3) => !t3.has(e3.id)).map((e3) => `${e3.name} joined`), i2 = eu.current.filter((e3) => !a3.has(e3.id)).map((e3) => `${e3.name} left`);
      eu.current = e2;
      let s3 = [...n2, ...i2].join(". ");
      s3 && eh(s3);
    }, [e2, P2]);
    let em = S2 ? { duration: 0 } : w.T.spring.smooth, eg = S2 ? { duration: 0 } : w.T.spring.morph, ef = {
      duration: S2 ? 0 : w.T.duration.fast,
      ease: [...w.T.ease.standard]
    }, ey = `${o2}, ${e2.length} ${1 === e2.length ? "person" : "people"}`;
    return (0, n.jsxs)("div", {
      className: [x().root, x()[a2], T2].filter(Boolean).join(" "),
      style: { ...M2, "--size": `${R2}px` },
      "data-align": s2,
      children: [
        (0, n.jsxs)(h.bL, {
          open: F,
          onOpenChange: B,
          children: [
            (0, n.jsx)(h.l9, {
              asChild: true,
              children: (0, n.jsxs)("button", {
                type: "button",
                className: x().trigger,
                style: { width: I2, height: R2 },
                "aria-label": ey,
                onFocus: (e3) => {
                  e3.currentTarget.matches(":focus-visible") && J(true);
                },
                onBlur: () => {
                  J(false), U(null);
                },
                onKeyDown: (e3) => {
                  if ("ArrowLeft" !== e3.key && "ArrowRight" !== e3.key) return;
                  e3.preventDefault();
                  let t3 = "ArrowRight" === e3.key ? 1 : -1;
                  U(
                    (e4) => null === e4 ? t3 > 0 ? 0 : $2 - 1 : Math.min($2 - 1, Math.max(0, e4 + t3))
                  );
                },
                children: [
                  (0, n.jsxs)(u.N, {
                    initial: false,
                    children: [
                      E2.map((e3, t3) => {
                        let a3 = e3.status ?? "active";
                        return (0, n.jsxs)(
                          m.PY1.span,
                          {
                            className: [
                              x().avatar,
                              "idle" === a3 ? x().idle : ""
                            ].join(" "),
                            style: { zIndex: $2 - t3 },
                            initial: { x: Q + t3 * z2, opacity: 0, scale: 0.4 },
                            animate: {
                              x: Q + t3 * z2,
                              y: V && et === t3 ? -2 : 0,
                              opacity: 1,
                              scale: 1
                            },
                            exit: { opacity: 0, scale: 0.4, transition: ef },
                            transition: {
                              x: em,
                              y: em,
                              scale: eg,
                              opacity: { duration: S2 ? 0 : w.T.duration.fast }
                            },
                            onPointerEnter: () => X(t3),
                            onPointerLeave: ee,
                            children: [
                              (0, n.jsx)(k, { person: e3, size: R2 }),
                              (0, n.jsx)(N, { status: a3, reduceMotion: S2 })
                            ]
                          },
                          e3.id
                        );
                      }),
                      O2 > 0 ? (0, n.jsx)(
                        m.PY1.span,
                        {
                          className: x().overflow,
                          style: { zIndex: 0 },
                          initial: {
                            x: Q + E2.length * z2,
                            opacity: 0,
                            scale: 0.4
                          },
                          animate: {
                            x: Q + E2.length * z2,
                            y: V && et === E2.length ? -2 : 0,
                            opacity: 1,
                            scale: 1
                          },
                          exit: { opacity: 0, scale: 0.4, transition: ef },
                          transition: { x: em, y: em, scale: eg },
                          onPointerEnter: () => X(E2.length),
                          onPointerLeave: ee,
                          children: (0, n.jsx)(m.PY1.span, {
                            className: x().countShift,
                            initial: false,
                            animate: { x: (R2 - z2) / 2 },
                            transition: em,
                            children: (0, n.jsx)(u.N, {
                              mode: "popLayout",
                              initial: false,
                              custom: ec.direction,
                              children: (0, n.jsxs)(
                                m.PY1.span,
                                {
                                  className: x().count,
                                  custom: ec.direction,
                                  initial: S2 ? { opacity: 0 } : {
                                    opacity: 0,
                                    y: `${0.55 * ec.direction}em`
                                  },
                                  animate: { opacity: 1, y: 0 },
                                  exit: S2 ? { opacity: 0 } : {
                                    opacity: 0,
                                    y: `${-0.55 * ec.direction}em`
                                  },
                                  transition: S2 ? { duration: 0 } : w.T.spring.snappy,
                                  children: ["+", O2]
                                },
                                O2
                              )
                            })
                          })
                        },
                        "overflow"
                      ) : null
                    ]
                  }),
                  (0, n.jsxs)("span", {
                    ref: es,
                    className: [x().label, x().measure].join(" "),
                    "aria-hidden": "true",
                    children: [
                      (0, n.jsx)("span", {
                        className: x().labelName,
                        children: en
                      }),
                      (0, n.jsx)("span", {
                        className: x().labelSub,
                        children: ei
                      })
                    ]
                  }),
                  (0, n.jsx)(u.N, {
                    children: V && null !== et ? (0, n.jsx)(
                      m.PY1.span,
                      {
                        className: x().labelTrack,
                        "aria-hidden": "true",
                        initial: {
                          x: Q + et * z2 + R2 / 2,
                          opacity: 0,
                          y: -4,
                          scale: 0.96
                        },
                        animate: {
                          x: Q + et * z2 + R2 / 2,
                          opacity: 1,
                          y: 0,
                          scale: 1
                        },
                        exit: {
                          opacity: 0,
                          y: -4,
                          scale: 0.96,
                          transition: ef
                        },
                        transition: {
                          x: S2 ? { duration: 0 } : w.T.spring.morph,
                          default: S2 ? { duration: 0 } : w.T.spring.snappy
                        },
                        children: (0, n.jsx)(m.PY1.span, {
                          className: x().label,
                          style: { width: er },
                          children: (0, n.jsx)(u.N, {
                            mode: "popLayout",
                            initial: false,
                            children: (0, n.jsxs)(
                              m.PY1.span,
                              {
                                className: x().labelInner,
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: { opacity: 0 },
                                transition: {
                                  duration: S2 ? 0 : w.T.duration.fast
                                },
                                children: [
                                  (0, n.jsx)("span", {
                                    className: x().labelName,
                                    children: en
                                  }),
                                  (0, n.jsxs)("span", {
                                    className: x().labelSub,
                                    children: [
                                      ea?.status === "typing" ? (0, n.jsx)(b, {
                                        className: x().labelDots
                                      }) : null,
                                      ei
                                    ]
                                  })
                                ]
                              },
                              en
                            )
                          })
                        })
                      },
                      "label"
                    ) : null
                  })
                ]
              })
            }),
            (0, n.jsx)(u.N, {
              children: F ? (0, n.jsx)(h.ZL, {
                forceMount: true,
                children: (0, n.jsx)(h.UC, {
                  forceMount: true,
                  asChild: true,
                  align: s2,
                  sideOffset: 10,
                  collisionPadding: 12,
                  "aria-label": l2,
                  children: (0, n.jsxs)(m.PY1.div, {
                    className: x().panel,
                    initial: S2 ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.97 },
                    animate: { opacity: 1, y: 0, scale: 1 },
                    exit: S2 ? { opacity: 0, transition: { duration: 0 } } : {
                      opacity: 0,
                      y: -4,
                      scale: 0.98,
                      transition: {
                        duration: w.T.duration.fast,
                        ease: [...w.T.ease.standard]
                      }
                    },
                    transition: S2 ? { duration: 0 } : w.T.spring.snappy,
                    children: [
                      (0, n.jsxs)("div", {
                        className: x().panelHead,
                        children: [
                          (0, n.jsx)("span", {
                            className: x().panelTitle,
                            children: l2
                          }),
                          (0, n.jsx)(C, {
                            value: e2.length,
                            reduceMotion: S2
                          })
                        ]
                      }),
                      (0, n.jsx)("ul", {
                        className: x().list,
                        children: (0, n.jsx)(u.N, {
                          initial: false,
                          children: e2.map((e3) => {
                            let t3 = e3.status ?? "active", a3 = e3.id === r2, i2 = (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsxs)("span", {
                                  className: [
                                    x().rowAvatar,
                                    "idle" === t3 ? x().idle : ""
                                  ].join(" "),
                                  children: [
                                    (0, n.jsx)(k, {
                                      person: e3,
                                      size: 28
                                    }),
                                    (0, n.jsx)(N, {
                                      status: t3,
                                      reduceMotion: S2
                                    })
                                  ]
                                }),
                                (0, n.jsxs)("span", {
                                  className: x().rowText,
                                  children: [
                                    (0, n.jsxs)("span", {
                                      className: x().rowName,
                                      children: [
                                        e3.name,
                                        a3 ? (0, n.jsx)("span", {
                                          className: x().you,
                                          children: " (you)"
                                        }) : null
                                      ]
                                    }),
                                    (0, n.jsx)("span", {
                                      className: x().rowDetail,
                                      children: (0, n.jsx)(u.N, {
                                        mode: "popLayout",
                                        initial: false,
                                        children: (0, n.jsxs)(
                                          m.PY1.span,
                                          {
                                            className: x().rowDetailText,
                                            initial: {
                                              opacity: 0,
                                              y: 4 * !S2
                                            },
                                            animate: { opacity: 1, y: 0 },
                                            exit: {
                                              opacity: 0,
                                              y: S2 ? 0 : -4
                                            },
                                            transition: S2 ? { duration: 0 } : w.T.spring.snappy,
                                            children: [
                                              "typing" === t3 ? (0, n.jsx)(b, {
                                                className: x().rowDots
                                              }) : null,
                                              e3.detail ?? j[t3]
                                            ]
                                          },
                                          `${t3}-${e3.detail ?? ""}`
                                        )
                                      })
                                    })
                                  ]
                                })
                              ]
                            });
                            return (0, n.jsx)(
                              m.PY1.li,
                              {
                                className: x().rowWrap,
                                initial: { height: 0, opacity: 0 },
                                animate: { height: "auto", opacity: 1 },
                                exit: { height: 0, opacity: 0 },
                                transition: S2 ? { duration: 0 } : w.T.spring.smooth,
                                children: v2 ? (0, n.jsx)("button", {
                                  type: "button",
                                  className: [
                                    x().row,
                                    x().rowButton
                                  ].join(" "),
                                  onClick: () => {
                                    v2(e3), B(false);
                                  },
                                  "aria-label": `${e3.name}${a3 ? " (you)" : ""}, ${e3.detail ?? j[t3]}`,
                                  children: i2
                                }) : (0, n.jsx)("div", {
                                  className: x().row,
                                  children: i2
                                })
                              },
                              e3.id
                            );
                          })
                        })
                      }),
                      0 === e2.length ? (0, n.jsx)("p", {
                        className: x().empty,
                        children: "No one else is here right now"
                      }) : null
                    ]
                  })
                })
              }) : null
            })
          ]
        }),
        (0, n.jsx)("span", {
          className: x().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ep
        })
      ]
    });
  }
  function C({ value: e2, reduceMotion: t2 }) {
    let [a2, s2] = (0, i.useState)({ value: e2, direction: 1 });
    a2.value !== e2 && s2({ value: e2, direction: e2 < a2.value ? -1 : 1 });
    let r2 = (0, i.useId)();
    return (0, n.jsx)("span", {
      className: x().panelCount,
      "aria-label": `${e2} ${1 === e2 ? "person" : "people"}`,
      id: r2,
      children: (0, n.jsx)(u.N, {
        mode: "popLayout",
        initial: false,
        children: (0, n.jsx)(
          m.PY1.span,
          {
            "aria-hidden": "true",
            initial: { opacity: 0, y: t2 ? 0 : `${0.6 * a2.direction}em` },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: t2 ? 0 : `${-0.6 * a2.direction}em` },
            transition: t2 ? { duration: 0 } : w.T.spring.snappy,
            children: e2
          },
          e2
        )
      })
    });
  }
  var P = a(64724), T = a.n(P);
  let M = "jasmine-brooks", S = [
    "Pricing",
    "Launch checklist",
    "Timeline",
    "Press kit",
    "Budget",
    "Risks"
  ], R = {
    active: (e2) => `Editing ${e2}`,
    idle: () => "Away for a few minutes",
    typing: (e2) => `Commenting on ${e2}`
  };
  function z(e2, t2, a2) {
    let n2 = d.c0.find((t3) => t3.id === e2);
    return {
      id: n2.id,
      name: n2.name,
      src: n2.src,
      status: t2,
      detail: e2 === M ? "Viewing Overview" : R[t2](a2)
    };
  }
  let D = [
    z(M, "active", "Overview"),
    z("emma-collins", "typing", "Pricing"),
    z("marcus-johnson", "active", "Launch checklist"),
    z("sofia-ramirez", "idle", "Budget"),
    z("daniel-kim", "active", "Timeline"),
    z("chloe-nguyen", "active", "Risks")
  ], E = "(prefers-reduced-motion: reduce)", O = (e2) => e2[Math.floor(Math.random() * e2.length)];
  function $() {
    let e2 = (0, i.useSyncExternalStore)(
      (e3) => {
        let t3 = window.matchMedia(E);
        return t3.addEventListener("change", e3), () => t3.removeEventListener("change", e3);
      },
      () => window.matchMedia(E).matches,
      () => false
    ), [t2, a2] = (0, i.useState)(D), [p2, h2] = (0, i.useState)(null), [u2, m2] = (0, i.useState)(null), g2 = t2.find((e3) => e3.id === u2) ?? null, f2 = p2 ?? !e2, y2 = (0, i.useRef)(t2);
    (0, i.useEffect)(() => {
      y2.current = t2;
    }, [t2]);
    let w2 = () => a2((e3) => {
      let t3 = d.c0.filter((t4) => !e3.some((e4) => e4.id === t4.id));
      if (!t3.length) return e3;
      let a3 = O(t3), [n2, ...i2] = e3;
      return [n2, z(a3.id, O(["active", "active", "typing"]), O(S)), ...i2];
    }), v2 = () => a2((e3) => {
      let t3 = e3.filter((e4) => e4.id !== M);
      if (!t3.length) return e3;
      let a3 = O(t3);
      return e3.filter((e4) => e4.id !== a3.id);
    }), x2 = () => a2((e3) => {
      let t3 = e3.filter((e4) => e4.id !== M);
      if (!t3.length) return e3;
      let a3 = O(t3), n2 = O(
        ["active", "idle", "typing"].filter(
          (e4) => e4 !== (a3.status ?? "active")
        )
      );
      return e3.map((e4) => e4.id === a3.id ? z(e4.id, n2, O(S)) : e4);
    });
    (0, i.useEffect)(() => {
      if (!f2) return;
      let e3 = window.setInterval(() => {
        let e4 = y2.current.length, t3 = Math.random();
        e4 < 4 || t3 < 0.34 && e4 < 10 ? w2() : t3 < 0.6 && e4 > 3 ? v2() : x2();
      }, 2200);
      return () => window.clearInterval(e3);
    }, [f2]);
    let _2 = t2.length - 1;
    return (0, n.jsxs)("div", {
      className: T().demo,
      "data-canvas": "wide",
      children: [
        (0, n.jsxs)("div", {
          className: T().header,
          children: [
            (0, n.jsxs)("div", {
              className: T().doc,
              children: [
                (0, n.jsx)("span", {
                  className: T().title,
                  children: "Q3 launch plan"
                }),
                (0, n.jsx)("span", {
                  className: T().meta,
                  children: g2 ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      "Following ",
                      g2.name,
                      (0, n.jsx)("button", {
                        type: "button",
                        className: T().stop,
                        onClick: () => m2(null),
                        "aria-label": `Stop following ${g2.name}`,
                        children: (0, n.jsx)(s.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      })
                    ]
                  }) : 0 === _2 ? "Only you" : `You and ${_2} ${1 === _2 ? "other" : "others"}`
                })
              ]
            }),
            (0, n.jsx)(A, {
              people: t2,
              selfId: M,
              max: 4,
              align: "end",
              onPersonSelect: (e3) => {
                e3.id !== M && m2(e3.id);
              }
            })
          ]
        }),
        (0, n.jsxs)("div", {
          className: T().controls,
          role: "group",
          "aria-label": "Simulate people",
          children: [
            (0, n.jsxs)("button", {
              type: "button",
              className: T().control,
              onClick: w2,
              disabled: t2.length >= d.c0.length,
              children: [
                (0, n.jsx)(r.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                "Someone joins"
              ]
            }),
            (0, n.jsxs)("button", {
              type: "button",
              className: T().control,
              onClick: v2,
              disabled: t2.length <= 1,
              children: [
                (0, n.jsx)(o.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                "Someone leaves"
              ]
            }),
            (0, n.jsx)("button", {
              type: "button",
              className: T().control,
              onClick: x2,
              disabled: t2.length <= 1,
              children: "Change a status"
            }),
            (0, n.jsxs)("button", {
              type: "button",
              className: T().control,
              onClick: () => h2(!f2),
              "aria-pressed": f2,
              children: [
                f2 ? (0, n.jsx)(l.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }) : (0, n.jsx)(c.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                f2 ? "Pause" : "Simulate"
              ]
            })
          ]
        })
      ]
    });
  }
  let I = $;
}

__m(__module,__exports,__require);
}