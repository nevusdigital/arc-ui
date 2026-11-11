function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { i: () => j });
  var a = i(95155), n = i(12115), s = i(31966), r = i(90467), o = i(80642), l = i(25354), d = i(28245), c = i(92171), u = i(18310), p = i(7770), h = i(55818), m = i.n(h);
  let x = { duration: p.T.duration.instant, ease: [...p.T.ease.standard] }, f = {
    enter: (e2) => ({ opacity: 0, x: 20 * e2 }),
    center: { opacity: 1, x: 0 },
    exit: (e2) => ({
      opacity: 0,
      x: -20 * e2,
      transition: { x: p.T.spring.smooth, opacity: x }
    })
  }, _ = {
    enter: (e2 = 1) => ({
      opacity: 0,
      y: `${0.3 * e2}em`,
      filter: `blur(${p.T.blur.soft}px)`
    }),
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: (e2 = 1) => ({
      opacity: 0,
      y: `${-0.3 * e2}em`,
      filter: `blur(${p.T.blur.subtle}px)`,
      transition: x
    })
  }, b = { duration: p.T.duration.standard, ease: [...p.T.ease.enter] };
  function y({ value: e2, direction: t2 = 1, reduced: i2, className: n2 }) {
    return (0, a.jsx)("span", {
      className: `${m().swap} ${n2 ?? ""}`,
      "aria-hidden": "true",
      children: (0, a.jsx)(o.N, {
        initial: false,
        custom: t2,
        children: (0, a.jsx)(
          l.PY1.span,
          {
            custom: t2,
            variants: _,
            initial: !i2 && "enter",
            animate: "center",
            exit: i2 ? void 0 : "exit",
            transition: i2 ? { duration: 0 } : b,
            children: e2
          },
          String(e2)
        )
      })
    });
  }
  function g({ label: e2, reduced: t2 }) {
    let i2 = (0, n.useRef)(null), s2 = (0, n.useRef)(0), r2 = (0, d.d)("auto");
    return (0, n.useEffect)(() => {
      let e3 = i2.current;
      if (!e3) return;
      let t3 = new ResizeObserver(() => {
        s2.current = e3.offsetWidth;
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, n.useLayoutEffect)(() => {
      let e3 = r2.get(), a2 = i2.current?.offsetWidth ?? 0, n2 = "number" == typeof e3 ? e3 : s2.current;
      if (s2.current = a2, t2 || !n2 || !a2 || 1 > Math.abs(n2 - a2))
        return void r2.jump("auto");
      r2.jump(n2);
      let o2 = (0, c.i)(r2, a2, {
        ...p.T.spring.morph,
        onComplete: () => r2.jump("auto")
      });
      return () => o2.stop();
    }, [e2, t2, r2]), (0, a.jsxs)("span", {
      className: m().morph,
      children: [
        (0, a.jsx)("span", {
          ref: i2,
          className: m().sizer,
          "aria-hidden": "true",
          children: e2
        }),
        (0, a.jsx)(l.PY1.span, {
          className: m().morphBox,
          style: { width: r2 },
          children: (0, a.jsx)(y, { value: e2, reduced: t2 })
        }),
        (0, a.jsx)("span", { className: m().srOnly, children: e2 })
      ]
    });
  }
  function j({
    steps: e2,
    onComplete: t2,
    nextLabel: i2 = "Continue",
    completeLabel: d2 = "Finish",
    initialStep: c2 = 0
  }) {
    let [h2, _2] = (0, n.useState)(
      Math.min(Math.max(c2, 0), Math.max(e2.length - 1, 0))
    ), [v, w] = (0, n.useState)(1), [T, N] = (0, n.useState)(false), [k, S] = (0, n.useState)("auto"), $ = (0, n.useRef)(null), P = (0, n.useRef)(null), C = (0, n.useRef)(null), A = (0, n.useRef)(false), z = (0, n.useId)(), D = (0, u.I)() ?? false;
    (0, n.useEffect)(() => {
      A.current && (A.current = false, (T ? P.current : $.current)?.focus());
    }, [T, h2]);
    let R = (0, n.useCallback)((e3) => {
      if (!e3) return;
      let t3 = new ResizeObserver(
        ([t4]) => S(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight)
      );
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    if (!e2.length) return null;
    let L = e2[h2], E = h2 === e2.length - 1, I = D ? { duration: 0 } : { x: p.T.spring.smooth, opacity: b }, M = (e3) => {
      C.current && (C.current.dataset.resizing = String(e3));
    };
    return (0, a.jsxs)("form", {
      className: m().form,
      onSubmit: function(e3) {
        e3.preventDefault(), A.current = true, E ? (N(true), t2?.()) : (w(1), _2((e4) => e4 + 1));
      },
      "aria-label": "Multi-step form",
      children: [
        (0, a.jsxs)("nav", {
          className: m().progress,
          "aria-label": `Progress: step ${h2 + 1} of ${e2.length}`,
          children: [
            (0, a.jsx)("ol", {
              className: m().progressList,
              children: e2.map(
                (e3, t3) => (0, a.jsxs)(
                  "li",
                  {
                    className: `${m().progressItem} ${t3 < h2 || T && t3 === h2 ? m().complete : ""} ${t3 === h2 && !T ? m().current : ""}`,
                    "aria-current": t3 === h2 ? "step" : void 0,
                    children: [
                      (0, a.jsx)("span", {
                        className: m().progressMarker,
                        "aria-hidden": "true",
                        children: (0, a.jsx)(o.N, {
                          initial: false,
                          children: t3 < h2 || T && t3 === h2 ? (0, a.jsx)(
                            l.PY1.svg,
                            {
                              className: m().markerGlyph,
                              viewBox: "0 0 24 24",
                              width: 11,
                              height: 11,
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: 2.6,
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              initial: !D && { opacity: 0, scale: 0.6 },
                              animate: { opacity: 1, scale: 1 },
                              exit: D ? void 0 : {
                                opacity: 0,
                                scale: 0.6,
                                transition: x
                              },
                              transition: D ? { duration: 0 } : p.T.spring.snappy,
                              children: (0, a.jsx)(l.PY1.path, {
                                d: "M4 12.5 9 17.5 20 6.5",
                                initial: !D && { pathLength: 0 },
                                animate: { pathLength: 1 },
                                transition: D ? { duration: 0 } : {
                                  duration: 0.32,
                                  ease: [...p.T.ease.enter],
                                  delay: 0.04
                                }
                              })
                            },
                            "done"
                          ) : (0, a.jsx)(
                            l.PY1.span,
                            {
                              className: m().markerGlyph,
                              initial: !D && {
                                opacity: 0,
                                scale: 0.6,
                                filter: `blur(${p.T.blur.subtle}px)`
                              },
                              animate: {
                                opacity: 1,
                                scale: 1,
                                filter: "blur(0px)"
                              },
                              exit: D ? void 0 : {
                                opacity: 0,
                                scale: 0.6,
                                transition: x
                              },
                              transition: D ? { duration: 0 } : p.T.spring.snappy,
                              children: t3 + 1
                            },
                            "number"
                          )
                        })
                      }),
                      (0, a.jsx)("span", {
                        className: m().progressLabel,
                        "data-label": e3.title,
                        children: e3.title
                      })
                    ]
                  },
                  e3.id
                )
              )
            }),
            (0, a.jsxs)("span", {
              className: m().progressCount,
              "aria-hidden": "true",
              children: [
                "Step ",
                (0, a.jsx)(y, {
                  value: h2 + 1,
                  direction: v,
                  reduced: D,
                  className: m().countValue
                }),
                " of ",
                e2.length
              ]
            }),
            (0, a.jsxs)("span", {
              className: m().srOnly,
              "aria-live": "polite",
              children: ["Step ", h2 + 1, " of ", e2.length]
            })
          ]
        }),
        (0, a.jsx)(l.PY1.div, {
          ref: C,
          className: m().viewport,
          initial: false,
          animate: { height: k },
          transition: D ? { duration: 0 } : p.T.spring.smooth,
          onAnimationStart: () => M(true),
          onAnimationComplete: () => M(false),
          children: (0, a.jsx)(o.N, {
            initial: false,
            custom: v,
            children: T ? (0, a.jsxs)(
              l.PY1.section,
              {
                ref: R,
                className: m().success,
                initial: !D && { opacity: 0, y: 8 },
                animate: { opacity: 1, y: 0 },
                transition: D ? { duration: 0 } : {
                  duration: p.T.duration.standard,
                  ease: [...p.T.ease.enter]
                },
                "aria-labelledby": z,
                role: "status",
                children: [
                  (0, a.jsx)("span", {
                    className: m().successIcon,
                    "aria-hidden": "true",
                    children: (0, a.jsx)("svg", {
                      viewBox: "0 0 24 24",
                      width: 18,
                      height: 18,
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: 2,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: (0, a.jsx)(l.PY1.path, {
                        d: "M4 12.5 9 17.5 20 6.5",
                        initial: !D && { pathLength: 0 },
                        animate: { pathLength: 1 },
                        transition: D ? { duration: 0 } : {
                          duration: 0.4,
                          ease: [...p.T.ease.enter],
                          delay: 0.08
                        }
                      })
                    })
                  }),
                  (0, a.jsx)(l.PY1.h2, {
                    id: z,
                    ref: P,
                    tabIndex: -1,
                    initial: !D && {
                      opacity: 0,
                      y: "0.3em",
                      filter: `blur(${p.T.blur.soft}px)`
                    },
                    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                    transition: D ? { duration: 0 } : { ...b, delay: 0.1 },
                    children: "All set"
                  }),
                  (0, a.jsx)(l.PY1.p, {
                    className: m().successNote,
                    initial: !D && { opacity: 0, y: "0.3em" },
                    animate: { opacity: 1, y: 0 },
                    transition: D ? { duration: 0 } : { ...b, delay: 0.1 + p.T.stagger.word },
                    children: "Your response has been saved."
                  })
                ]
              },
              "complete"
            ) : (0, a.jsxs)(
              l.PY1.fieldset,
              {
                ref: R,
                className: m().step,
                custom: v,
                variants: f,
                initial: !D && "enter",
                animate: "center",
                exit: D ? void 0 : "exit",
                transition: I,
                children: [
                  (0, a.jsx)("legend", {
                    ref: (e3) => {
                      e3 && ($.current = e3);
                    },
                    tabIndex: -1,
                    children: L.title
                  }),
                  L.description && (0, a.jsx)("p", {
                    className: m().description,
                    children: L.description
                  }),
                  (0, a.jsx)("div", {
                    className: m().content,
                    children: L.content
                  })
                ]
              },
              L.id
            )
          })
        }),
        (0, a.jsx)(o.N, {
          initial: false,
          children: !T && (0, a.jsx)(
            l.PY1.div,
            {
              className: m().actionsShell,
              exit: D ? void 0 : {
                opacity: 0,
                height: 0,
                overflow: "hidden",
                transition: { height: p.T.spring.smooth, opacity: x }
              },
              children: (0, a.jsxs)("div", {
                className: m().actions,
                children: [
                  (0, a.jsxs)("button", {
                    className: m().back,
                    type: "button",
                    onClick: () => {
                      A.current = true, w(-1), _2((e3) => Math.max(0, e3 - 1));
                    },
                    disabled: 0 === h2,
                    children: [
                      (0, a.jsx)(s.A, {
                        "aria-hidden": "true",
                        width: 16,
                        height: 16
                      }),
                      " Back"
                    ]
                  }),
                  (0, a.jsxs)("button", {
                    className: m().next,
                    type: "submit",
                    children: [
                      (0, a.jsx)(g, { label: E ? d2 : i2, reduced: D }),
                      (0, a.jsx)(r.A, {
                        "aria-hidden": "true",
                        width: 16,
                        height: 16
                      })
                    ]
                  })
                ]
              })
            },
            "actions"
          )
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
}