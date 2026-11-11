function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { DeliveryTracker: () => G, default: () => W });
  var r = a(95155), i = a(5772), n = a(12115), s = a(18310), l = a(80642), o = a(25354), d = a(28245), c = a(42922), u = a(55809), p = a(7890), A = a(92171), y = a(24551), h = a(9005), _ = a(4705), m = a(16369), v = a(67033), x = a(92298), f = a(92218), g = a(51288), j = a(98344), b = a(7770), k = a(30804), N = a(24267), w = a(53794), T = a(74744), P = a.n(T);
  let E = [
    {
      id: "confirmed",
      stage: 0,
      progress: 0,
      now: "08:12",
      eta: "14:45",
      status: "Order confirmed",
      detail: "Halden Studio is preparing your order",
      title: "Order confirmed",
      note: "Halden Studio accepted your order"
    },
    {
      id: "packed",
      stage: 1,
      progress: 0.25,
      now: "11:40",
      eta: "14:45",
      status: "Packed",
      detail: "Waiting for pickup in Altstetten",
      title: "Packed",
      note: "Two items wrapped and labeled"
    },
    {
      id: "out",
      stage: 2,
      progress: 0.5,
      now: "13:58",
      eta: "14:44",
      status: "Out for delivery",
      detail: "Marcus is 6 stops away",
      title: "Out for delivery",
      note: "Marcus Keller loaded your order"
    },
    {
      id: "four",
      stage: 2,
      progress: 0.57,
      now: "14:09",
      eta: "14:41",
      status: "Out for delivery",
      detail: "Marcus is 4 stops away",
      title: "4 stops away",
      note: "Running 3 minutes ahead"
    },
    {
      id: "traffic",
      stage: 2,
      progress: 0.65,
      now: "14:20",
      eta: "14:43",
      status: "Out for delivery",
      detail: "Marcus is 2 stops away",
      title: "2 stops away",
      note: "Slow traffic on Bellerivestrasse"
    },
    {
      id: "arriving",
      stage: 3,
      progress: 0.75,
      now: "14:29",
      eta: "14:36",
      status: "Arriving",
      detail: "Marcus is on your street",
      title: "Arriving",
      note: "You are the next stop"
    },
    {
      id: "outside",
      stage: 3,
      progress: 0.88,
      now: "14:34",
      eta: "14:36",
      status: "Arriving",
      detail: "Marcus is outside your building",
      title: "Courier is outside",
      note: "Parked at Seefeldstrasse 118"
    },
    {
      id: "delivered",
      stage: 4,
      progress: 1,
      now: "14:38",
      eta: "14:38",
      status: "Delivered",
      detail: "Placed in your living room",
      title: "Delivered",
      note: "Placed in the living room and signed for",
      photo: true
    }
  ], C = ["Ordered", "Packed", "Out for delivery", "Arriving", "Delivered"], I = [0, 0.25, 0.5, 0.75, 1], M = [
    "Please use the side entrance",
    "I'm on my way down",
    "Call me from the door"
  ], S = [
    "Noted, side entrance it is",
    "Great, see you in a minute",
    "Will do, calling when I'm there"
  ], B = Array.from("0123456789"), Q = [...b.T.ease.enter], R = [...b.T.ease.standard], Y = `blur(${b.T.blur.soft}px)`, D = { ...b.T.spring.morph, visualDuration: 0.72 }, O = (e2) => {
    let [t2, a2] = e2.split(":").map(Number);
    return 60 * t2 + a2;
  }, z = (e2) => `${Math.floor(e2 / 60)}:${String(e2 % 60).padStart(2, "0")}`, $ = (e2) => I.filter((t2) => e2 >= t2 - 5e-3).length;
  function L({ id: e2, children: t2, className: a2 }) {
    let i2 = (0, s.I)();
    return (0, r.jsx)(l.N, {
      mode: "popLayout",
      initial: false,
      children: (0, r.jsx)(
        o.PY1.span,
        {
          className: a2 ?? P().swap,
          initial: i2 ? { opacity: 0 } : { opacity: 0, y: 8, filter: Y },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          exit: i2 ? { opacity: 0, transition: { duration: 0 } } : {
            opacity: 0,
            y: -6,
            filter: Y,
            transition: { duration: b.T.duration.exit, ease: R }
          },
          transition: i2 ? { duration: b.T.duration.instant } : { duration: 0.34, ease: Q, delay: 0.06 },
          children: t2
        },
        e2
      )
    });
  }
  function F({ value: e2, className: t2 }) {
    let a2 = (0, s.I)(), i2 = Array.from(e2);
    return (0, r.jsx)("span", {
      className: [P().rolling, t2].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: (0, r.jsx)(l.N, {
        mode: "popLayout",
        initial: false,
        children: i2.map((e3, t3) => {
          let n2 = i2.length - t3;
          return /\d/.test(e3) ? (0, r.jsx)(
            o.PY1.span,
            {
              className: P().digit,
              initial: a2 ? { opacity: 0 } : { opacity: 0, filter: Y },
              animate: { opacity: 1, filter: "blur(0px)" },
              exit: { opacity: 0, transition: { duration: 0.12 } },
              transition: { duration: 0.2 },
              children: (0, r.jsx)(o.PY1.span, {
                className: P().strip,
                initial: false,
                animate: { y: `${-10 * Number(e3)}%` },
                transition: a2 ? { duration: 0 } : { ...b.T.spring.smooth, delay: (n2 - 1) * 0.045 },
                children: B.map(
                  (e4) => (0, r.jsx)("span", { children: e4 }, e4)
                )
              })
            },
            `d${n2}`
          ) : (0, r.jsx)(
            o.PY1.span,
            {
              className: P().glyph,
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0, transition: { duration: 0.1 } },
              children: e3
            },
            `s${n2}${e3}`
          );
        })
      })
    });
  }
  function G({ className: e2 }) {
    let t2 = (0, n.useId)(), a2 = (0, s.I)(), [T2, B2] = (0, n.useState)(1), [W2, H] = (0, n.useState)(0), [K, X] = (0, n.useState)(false), [Z, V] = (0, n.useState)(null), [q, J] = (0, n.useState)(false), [ee, et] = (0, n.useState)(false), [ea, er] = (0, n.useState)(0), ei = (0, n.useRef)(void 0), en = (0, n.useRef)(null), es = (0, n.useRef)(null), el = (0, n.useRef)(null), eo = (0, n.useRef)(null), ed = (0, n.useRef)(null), [ec, eu] = (function() {
      let [e3, t3] = (0, n.useState)(null), [a3, r2] = (0, n.useState)("auto"), i2 = (0, n.useCallback)((e4) => {
        t3(e4), e4 || r2("auto");
      }, []);
      return (0, n.useEffect)(() => {
        if (!e3 || "u" < typeof ResizeObserver) return;
        let t4 = new ResizeObserver(
          ([e4]) => r2(e4.borderBoxSize?.[0]?.blockSize ?? e4.contentRect.height)
        );
        return t4.observe(e3), () => t4.disconnect();
      }, [e3]), [i2, a3];
    })(), ep = E[T2], eA = 4 === ep.stage, ey = T2 === E.length - 1, eh = O(ep.eta) - O(ep.now), e_ = E.slice(0, T2 + 1).reverse(), em = eA ? "done" : ep.stage < 2 ? "window" : "live", ev = (0, d.d)(E[1].progress), ex = (0, c.V)(ev), ef = (0, u.G)(ev, (e3) => Math.min(1, Math.max(0, e3))), eg = (0, u.G)(ef, (e3) => `${100 * e3}%`), ej = (0, u.G)(ex, (e3) => Math.min(26 * Math.abs(e3), 22)), eb = (0, u.G)(ej, (e3) => 16 + e3), ek = (0, u.G)(() => 0 > ex.get() ? -8 : -8 - ej.get()), [eN, ew] = (0, n.useState)(() => $(E[1].progress));
    function eT() {
      window.clearTimeout(ei.current), X(false), V(null), J(false), et(false), er(0);
    }
    (0, p.L)(ev, "change", (e3) => {
      let t3 = $(e3);
      ew((e4) => e4 === t3 ? e4 : t3);
    }), (0, n.useEffect)(() => {
      if (a2) return void ev.jump(ep.progress);
      let e3 = (0, A.i)(ev, ep.progress, D);
      return () => e3.stop();
    }, [ev, ep.progress, a2]), (0, n.useEffect)(() => {
      if (!ee) return;
      let e3 = window.setInterval(() => er((e4) => e4 + 1), 1e3);
      return () => window.clearInterval(e3);
    }, [ee]), (0, n.useEffect)(() => () => window.clearTimeout(ei.current), []), (0, n.useEffect)(() => {
      let e3 = en.current;
      en.current = null, e3?.();
    });
    let eP = eA ? `Delivered at ${ep.now}. ${ep.detail}.` : `${ep.status}. ${ep.detail}. Estimated arrival ${ep.eta}.`, eE = eA ? `Delivered at ${ep.now}` : "window" === em ? `Estimated arrival ${ep.eta}, delivery window 14:00 to 15:00` : `Estimated arrival ${ep.eta}, in ${eh} minutes`;
    return (0, r.jsxs)("section", {
      className: [P().tracker, e2].filter(Boolean).join(" "),
      "aria-label": "Delivery tracker",
      "data-done": eA || void 0,
      children: [
        (0, r.jsxs)("div", {
          className: P().hero,
          children: [
            (0, r.jsxs)("div", {
              className: P().headline,
              children: [
                (0, r.jsx)("h2", {
                  className: P().status,
                  children: (0, r.jsx)(L, {
                    id: ep.status,
                    children: ep.status
                  })
                }),
                (0, r.jsx)("p", {
                  className: P().detail,
                  children: (0, r.jsx)(L, {
                    id: ep.detail,
                    children: ep.detail
                  })
                })
              ]
            }),
            (0, r.jsxs)("div", {
              className: P().eta,
              children: [
                (0, r.jsx)("span", { className: P().srOnly, children: eE }),
                (0, r.jsx)(F, {
                  value: eA ? ep.now : ep.eta,
                  className: P().clock
                }),
                (0, r.jsx)("p", {
                  className: P().etaNote,
                  "aria-hidden": "true",
                  children: (0, r.jsx)(L, {
                    id: em,
                    className: P().etaSwap,
                    children: "done" === em ? (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(U, {}), "Delivered"]
                    }) : "window" === em ? "Delivery window 14:00\u201315:00" : (0, r.jsxs)(r.Fragment, {
                      children: [
                        "Estimated arrival, in ",
                        (0, r.jsx)(F, { value: String(eh) }),
                        (0, r.jsx)(o.PY1.span, {
                          layout: "position",
                          transition: b.T.spring.morph,
                          children: "min"
                        })
                      ]
                    })
                  })
                })
              ]
            })
          ]
        }),
        (0, r.jsxs)("div", {
          className: P().track,
          children: [
            (0, r.jsx)("div", {
              className: P().rail,
              "aria-hidden": "true",
              children: (0, r.jsx)(o.PY1.span, {
                className: P().fill,
                style: { scaleX: ef }
              })
            }),
            (0, r.jsx)("ol", {
              className: P().stops,
              "aria-label": "Delivery progress",
              children: C.map(
                (e3, t3) => (0, r.jsxs)(
                  "li",
                  {
                    className: P().stop,
                    style: { left: `${100 * I[t3]}%` },
                    "data-reached": t3 < eN || void 0,
                    "data-current": t3 === ep.stage || void 0,
                    "aria-current": t3 === ep.stage ? "step" : void 0,
                    children: [
                      (0, r.jsx)(o.PY1.span, {
                        className: P().dot,
                        "aria-hidden": "true",
                        initial: false,
                        animate: { scale: t3 < eN ? [1, 1.7, 1] : 1 },
                        transition: a2 ? { duration: 0 } : { duration: 0.42, ease: R }
                      }),
                      (0, r.jsxs)("span", {
                        className: P().stopLabel,
                        children: [
                          e3,
                          (0, r.jsx)("span", {
                            className: P().srOnly,
                            children: t3 < ep.stage ? ", complete" : t3 === ep.stage ? ", current" : ""
                          })
                        ]
                      })
                    ]
                  },
                  e3
                )
              )
            }),
            (0, r.jsxs)(o.PY1.div, {
              className: P().markerLayer,
              style: { x: eg },
              "aria-hidden": "true",
              children: [
                !(W2 > 0) || eA || a2 ? null : (0, r.jsx)(
                  o.PY1.span,
                  {
                    className: P().ping,
                    initial: { scale: 1, opacity: 0.5 },
                    animate: { scale: 2.8, opacity: 0 },
                    transition: { duration: 0.9, ease: Q, delay: 0.38 }
                  },
                  W2
                ),
                (0, r.jsx)(l.N, {
                  initial: false,
                  children: eA ? (0, r.jsx)(
                    o.PY1.span,
                    {
                      className: P().doneBadge,
                      initial: { scale: 16 / 26, opacity: 0 },
                      animate: { scale: 1, opacity: 1 },
                      exit: {
                        opacity: 0,
                        scale: 0.6,
                        transition: { duration: b.T.duration.fast }
                      },
                      transition: a2 ? { duration: 0 } : {
                        ...b.T.spring.morph,
                        delay: 0.42,
                        opacity: { duration: 0.12, delay: 0.42 }
                      },
                      children: (0, r.jsx)("svg", {
                        viewBox: "0 0 16 16",
                        "aria-hidden": "true",
                        children: (0, r.jsx)(o.PY1.path, {
                          d: "M4 8.4 6.7 11 12 5.4",
                          initial: { pathLength: +!!a2 },
                          animate: { pathLength: 1 },
                          transition: {
                            duration: 0.3,
                            ease: Q,
                            delay: 0.6
                          }
                        })
                      })
                    },
                    "done"
                  ) : (0, r.jsx)(
                    o.PY1.span,
                    {
                      className: P().marker,
                      style: { width: eb, x: ek },
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: {
                        opacity: 0,
                        transition: { duration: 0.1, delay: 0.42 * !a2 }
                      }
                    },
                    "marker"
                  )
                })
              ]
            })
          ]
        }),
        (0, r.jsxs)("div", {
          className: P().lower,
          children: [
            (0, r.jsxs)("section", {
              className: P().updates,
              "aria-labelledby": `${t2}-updates`,
              children: [
                (0, r.jsx)("h3", {
                  id: `${t2}-updates`,
                  className: P().sectionTitle,
                  children: "Updates"
                }),
                (0, r.jsx)("ul", {
                  className: P().events,
                  children: (0, r.jsx)(l.N, {
                    initial: false,
                    children: e_.map(
                      (e3, t3) => (0, r.jsx)(
                        o.PY1.li,
                        {
                          className: P().event,
                          "data-latest": 0 === t3 || void 0,
                          "data-done": 4 === e3.stage || void 0,
                          initial: a2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                          animate: { height: "auto", opacity: 1 },
                          exit: a2 ? { opacity: 0, transition: { duration: 0 } } : {
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: {
                                duration: b.T.duration.exit,
                                ease: R
                              },
                              opacity: { duration: b.T.duration.instant }
                            }
                          },
                          transition: a2 ? { duration: b.T.duration.instant } : {
                            height: b.T.spring.smooth,
                            opacity: { duration: 0.2, delay: 0.05 }
                          },
                          children: (0, r.jsxs)(o.PY1.div, {
                            className: P().eventInner,
                            initial: !a2 && { y: -6, filter: Y },
                            animate: { y: 0, filter: "blur(0px)" },
                            transition: { duration: 0.4, ease: Q, delay: 0.08 },
                            children: [
                              (0, r.jsx)("time", {
                                className: P().time,
                                children: e3.now
                              }),
                              (0, r.jsx)("span", {
                                className: P().node,
                                "aria-hidden": "true"
                              }),
                              (0, r.jsxs)("div", {
                                className: P().eventText,
                                children: [
                                  (0, r.jsx)("strong", { children: e3.title }),
                                  (0, r.jsx)("span", { children: e3.note }),
                                  e3.photo ? (0, r.jsx)(o.PY1.figure, {
                                    className: P().proof,
                                    initial: !a2 && {
                                      opacity: 0,
                                      scale: 0.96,
                                      filter: Y
                                    },
                                    animate: {
                                      opacity: 1,
                                      scale: 1,
                                      filter: "blur(0px)"
                                    },
                                    transition: {
                                      duration: 0.5,
                                      ease: Q,
                                      delay: 0.3
                                    },
                                    children: (0, r.jsx)(i.default, {
                                      src: k.A,
                                      alt: "Delivery photo: the oak lounge chair placed in the living room",
                                      fill: true,
                                      sizes: "260px",
                                      placeholder: "blur"
                                    })
                                  }) : null
                                ]
                              })
                            ]
                          })
                        },
                        e3.id
                      )
                    )
                  })
                })
              ]
            }),
            (0, r.jsx)(l.N, {
              initial: false,
              children: ep.stage >= 2 ? (0, r.jsx)(
                o.PY1.section,
                {
                  className: P().courierArea,
                  "aria-label": "Courier",
                  initial: a2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: a2 ? { opacity: 0, transition: { duration: 0 } } : {
                    height: 0,
                    opacity: 0,
                    transition: {
                      duration: b.T.duration.exit,
                      ease: R
                    }
                  },
                  transition: a2 ? { duration: b.T.duration.instant } : {
                    height: b.T.spring.smooth,
                    opacity: { duration: 0.24, delay: 0.1 }
                  },
                  children: (0, r.jsx)(o.PY1.div, {
                    className: P().courierClip,
                    initial: false,
                    animate: { height: eu },
                    transition: a2 ? { duration: 0 } : b.T.spring.smooth,
                    children: (0, r.jsx)("div", {
                      ref: ec,
                      className: P().courierMeasure,
                      children: (0, r.jsxs)("div", {
                        className: P().courierInner,
                        children: [
                          (0, r.jsxs)("div", {
                            className: P().courierRow,
                            children: [
                              (0, r.jsx)(f.e, {
                                name: "Marcus Keller",
                                src: w.A.src,
                                size: "lg"
                              }),
                              (0, r.jsxs)("div", {
                                className: P().courierText,
                                children: [
                                  (0, r.jsx)("strong", {
                                    children: "Marcus Keller"
                                  }),
                                  (0, r.jsx)("span", {
                                    className: P().courierMeta,
                                    children: (0, r.jsx)(L, {
                                      id: eA ? "done" : "van",
                                      children: eA ? `Delivered your order at ${ep.now}` : "Electric van, ZH 482 113"
                                    })
                                  })
                                ]
                              }),
                              K || eA ? null : (0, r.jsx)(o.PY1.button, {
                                ref: el,
                                type: "button",
                                layoutId: `${t2}-contact`,
                                className: P().contactButton,
                                style: { borderRadius: 18 },
                                onClick: function() {
                                  X(true), en.current = () => ed.current?.focus({
                                    preventScroll: true
                                  });
                                },
                                "aria-expanded": false,
                                transition: a2 ? { duration: 0 } : b.T.spring.morph,
                                children: (0, r.jsxs)(o.PY1.span, {
                                  layout: "position",
                                  className: P().contactLabel,
                                  initial: { opacity: 0 },
                                  animate: { opacity: 1 },
                                  transition: {
                                    opacity: {
                                      duration: 0.2,
                                      delay: 0.16 * !a2
                                    },
                                    layout: a2 ? { duration: 0 } : b.T.spring.morph
                                  },
                                  children: [
                                    (0, r.jsx)(y.A, {
                                      size: 16,
                                      strokeWidth: 1.75,
                                      "aria-hidden": "true"
                                    }),
                                    "Contact"
                                  ]
                                })
                              })
                            ]
                          }),
                          K ? (0, r.jsx)(o.PY1.div, {
                            layoutId: `${t2}-contact`,
                            className: P().contactPanel,
                            style: { borderRadius: 20 },
                            transition: a2 ? { duration: 0 } : b.T.spring.morph,
                            role: "group",
                            "aria-label": "Contact Marcus",
                            children: (0, r.jsxs)(o.PY1.div, {
                              layout: true,
                              className: P().panelBody,
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              transition: {
                                opacity: {
                                  duration: 0.22,
                                  delay: 0.14 * !a2
                                },
                                layout: b.T.spring.morph
                              },
                              children: [
                                (0, r.jsxs)("div", {
                                  className: P().panelHead,
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: P().panelTitle,
                                      children: "Message Marcus"
                                    }),
                                    (0, r.jsx)("button", {
                                      ref: eo,
                                      type: "button",
                                      className: P().iconButton,
                                      "aria-label": "Close contact options",
                                      onClick: function() {
                                        eT(), en.current = () => el.current?.focus({
                                          preventScroll: true
                                        });
                                      },
                                      children: (0, r.jsx)(h.A, {
                                        size: 16,
                                        strokeWidth: 1.75,
                                        "aria-hidden": "true"
                                      })
                                    })
                                  ]
                                }),
                                null === Z ? (0, r.jsx)("div", {
                                  className: P().replies,
                                  role: "group",
                                  "aria-label": "Quick replies",
                                  children: M.map(
                                    (e3, i2) => (0, r.jsx)(
                                      o.PY1.button,
                                      {
                                        ref: 0 === i2 ? ed : void 0,
                                        type: "button",
                                        layoutId: `${t2}-reply-${i2}`,
                                        className: P().reply,
                                        style: {
                                          borderRadius: 16
                                        },
                                        onClick: () => {
                                          V(i2), J(false), window.clearTimeout(
                                            ei.current
                                          ), ei.current = window.setTimeout(
                                            () => J(true),
                                            a2 ? 500 : 1500
                                          ), en.current = () => eo.current?.focus({
                                            preventScroll: true
                                          });
                                        },
                                        transition: a2 ? { duration: 0 } : b.T.spring.morph,
                                        children: e3
                                      },
                                      e3
                                    )
                                  )
                                }) : (0, r.jsxs)("div", {
                                  className: P().thread,
                                  children: [
                                    (0, r.jsx)(o.PY1.p, {
                                      layoutId: `${t2}-reply-${Z}`,
                                      className: P().bubbleOut,
                                      style: { borderRadius: 16 },
                                      transition: a2 ? { duration: 0 } : b.T.spring.morph,
                                      children: M[Z]
                                    }),
                                    (0, r.jsx)("span", {
                                      className: P().sentNote,
                                      children: "Sent"
                                    }),
                                    (0, r.jsx)("div", {
                                      className: P().replySlot,
                                      "aria-live": "polite",
                                      children: (0, r.jsx)(l.N, {
                                        mode: "popLayout",
                                        initial: false,
                                        children: q ? (0, r.jsxs)(
                                          o.PY1.div,
                                          {
                                            className: P().replyRow,
                                            initial: a2 ? { opacity: 0 } : {
                                              opacity: 0,
                                              y: 6,
                                              filter: Y
                                            },
                                            animate: {
                                              opacity: 1,
                                              y: 0,
                                              filter: "blur(0px)"
                                            },
                                            transition: {
                                              duration: 0.32,
                                              ease: Q
                                            },
                                            children: [
                                              (0, r.jsxs)(
                                                "p",
                                                {
                                                  className: P().bubbleIn,
                                                  children: [
                                                    (0, r.jsx)(
                                                      "span",
                                                      {
                                                        className: P().srOnly,
                                                        children: "Marcus replied: "
                                                      }
                                                    ),
                                                    S[Z]
                                                  ]
                                                }
                                              ),
                                              (0, r.jsx)(
                                                "button",
                                                {
                                                  type: "button",
                                                  className: P().textButton,
                                                  onClick: function() {
                                                    window.clearTimeout(
                                                      ei.current
                                                    ), V(
                                                      null
                                                    ), J(false), en.current = () => ed.current?.focus(
                                                      {
                                                        preventScroll: true
                                                      }
                                                    );
                                                  },
                                                  children: "New message"
                                                }
                                              )
                                            ]
                                          },
                                          "reply"
                                        ) : (0, r.jsx)(
                                          o.PY1.span,
                                          {
                                            className: P().typing,
                                            role: "status",
                                            "aria-label": "Marcus is typing",
                                            initial: {
                                              opacity: 0
                                            },
                                            animate: {
                                              opacity: 1
                                            },
                                            exit: {
                                              opacity: 0,
                                              transition: {
                                                duration: 0.1
                                              }
                                            },
                                            transition: {
                                              duration: 0.2,
                                              delay: 0.3
                                            },
                                            children: [
                                              0,
                                              1,
                                              2
                                            ].map(
                                              (e3) => (0, r.jsx)(
                                                o.PY1.i,
                                                {
                                                  animate: a2 ? void 0 : {
                                                    opacity: [
                                                      0.35,
                                                      1,
                                                      0.35
                                                    ]
                                                  },
                                                  transition: {
                                                    duration: 0.9,
                                                    repeat: 1 / 0,
                                                    delay: 0.15 * e3,
                                                    ease: "easeInOut"
                                                  }
                                                },
                                                e3
                                              )
                                            )
                                          },
                                          "typing"
                                        )
                                      })
                                    })
                                  ]
                                }),
                                (0, r.jsxs)("div", {
                                  className: P().callRow,
                                  children: [
                                    (0, r.jsxs)("button", {
                                      type: "button",
                                      className: P().callButton,
                                      "data-active": ee || void 0,
                                      onClick: function() {
                                        ee ? et(false) : (er(0), et(true));
                                      },
                                      children: [
                                        ee ? (0, r.jsx)(_.A, {
                                          size: 16,
                                          strokeWidth: 1.75,
                                          "aria-hidden": "true"
                                        }) : (0, r.jsx)(m.A, {
                                          size: 16,
                                          strokeWidth: 1.75,
                                          "aria-hidden": "true"
                                        }),
                                        (0, r.jsx)(j.g, {
                                          children: ee ? "End call" : "Call Marcus"
                                        })
                                      ]
                                    }),
                                    (0, r.jsx)("span", {
                                      className: P().callStatus,
                                      "aria-live": "polite",
                                      children: ee ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsx)("span", {
                                            className: P().srOnly,
                                            children: "Call in progress"
                                          }),
                                          (0, r.jsxs)("span", {
                                            "aria-hidden": "true",
                                            children: [
                                              "On call ",
                                              (0, r.jsx)(F, {
                                                value: z(ea)
                                              })
                                            ]
                                          })
                                        ]
                                      }) : ea > 0 ? `Call ended, ${z(ea)}` : "Private number"
                                    })
                                  ]
                                })
                              ]
                            })
                          }) : null
                        ]
                      })
                    })
                  })
                },
                "courier"
              ) : null
            }),
            (0, r.jsxs)("section", {
              className: P().order,
              "aria-labelledby": `${t2}-order`,
              children: [
                (0, r.jsxs)("div", {
                  className: P().orderHead,
                  children: [
                    (0, r.jsx)("h3", {
                      id: `${t2}-order`,
                      className: P().sectionTitle,
                      children: "Halden Studio"
                    }),
                    (0, r.jsx)("span", { children: "2 items" })
                  ]
                }),
                (0, r.jsxs)("ul", {
                  className: P().items,
                  children: [
                    (0, r.jsxs)("li", {
                      children: [
                        (0, r.jsx)(i.default, {
                          className: P().thumb,
                          src: k.A,
                          alt: "",
                          width: 44,
                          height: 44,
                          sizes: "44px"
                        }),
                        (0, r.jsxs)("div", {
                          className: P().itemText,
                          children: [
                            (0, r.jsx)("strong", {
                              children: "Oak lounge chair"
                            }),
                            (0, r.jsx)("span", {
                              children: "Natural oak, white glove delivery"
                            })
                          ]
                        })
                      ]
                    }),
                    (0, r.jsxs)("li", {
                      children: [
                        (0, r.jsx)(i.default, {
                          className: P().thumb,
                          src: N.A,
                          alt: "",
                          width: 44,
                          height: 44,
                          sizes: "44px"
                        }),
                        (0, r.jsxs)("div", {
                          className: P().itemText,
                          children: [
                            (0, r.jsx)("strong", {
                              children: "Glass carafe set"
                            }),
                            (0, r.jsx)("span", {
                              children: "Carafe and two tumblers"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                (0, r.jsxs)("p", {
                  className: P().address,
                  children: [
                    (0, r.jsx)(v.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    "Seefeldstrasse 118, 8008 Z\xFCrich"
                  ]
                })
              ]
            })
          ]
        }),
        (0, r.jsxs)("footer", {
          className: P().foot,
          children: [
            (0, r.jsx)("p", {
              className: P().footNote,
              children: (0, r.jsxs)("span", {
                className: P().updated,
                children: [
                  "Updated ",
                  (0, r.jsx)(L, {
                    id: ep.now,
                    className: P().inlineSwap,
                    children: ep.now
                  })
                ]
              })
            }),
            (0, r.jsxs)("div", {
              className: P().footActions,
              children: [
                (0, r.jsx)(l.N, {
                  mode: "popLayout",
                  initial: false,
                  children: T2 > 1 && !ey ? (0, r.jsx)(
                    o.PY1.div,
                    {
                      initial: a2 ? { opacity: 0 } : { opacity: 0, filter: Y, x: 6 },
                      animate: { opacity: 1, filter: "blur(0px)", x: 0 },
                      exit: {
                        opacity: 0,
                        transition: { duration: b.T.duration.instant }
                      },
                      transition: { duration: 0.26, ease: Q },
                      children: (0, r.jsx)(g.$, {
                        variant: "ghost",
                        size: "sm",
                        onClick: () => {
                          eT(), B2(1), en.current = () => es.current?.focus();
                        },
                        children: "Start over"
                      })
                    },
                    "reset"
                  ) : null
                }),
                (0, r.jsx)(g.$, {
                  ref: es,
                  size: "sm",
                  onClick: function() {
                    if (ey) return void (eT(), B2(1));
                    let e3 = E[T2 + 1];
                    B2(T2 + 1), H((e4) => e4 + 1), 4 === e3.stage && eT();
                  },
                  children: ey ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(x.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Start over"
                    ]
                  }) : "Simulate next update"
                })
              ]
            })
          ]
        }),
        (0, r.jsx)("p", {
          className: P().srOnly,
          "aria-live": "polite",
          children: eP
        })
      ]
    });
  }
  function U() {
    return (0, r.jsx)("svg", {
      className: P().check,
      viewBox: "0 0 16 16",
      "aria-hidden": "true",
      children: (0, r.jsx)("path", { d: "M4 8.4 6.7 11 12 5.4" })
    });
  }
  let W = G;
}

__m(__module,__exports,__require);
}