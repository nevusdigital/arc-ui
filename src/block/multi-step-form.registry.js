/* multi-step-form (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(44818, function(__module,__exports,__require){
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
});
A.regCss(55818, ".form{border:1px solid var(--border);border-radius:var(--radius-surface);padding:var(--space-5);background:var(--surface);box-shadow:var(--shadow-resting)}\n@media (max-width:420px){.form{padding:var(--space-4)}\n.progress{display:flex;align-items:center;justify-content:space-between;gap:var(--space-4);margin:calc(var(--space-5) * -1) calc(var(--space-5) * -1) var(--space-6);padding:var(--space-4) var(--space-5);border-bottom:1px solid var(--border-subtle)}\n.progress{align-items:flex-start;flex-direction:column;gap:var(--space-2);margin:calc(var(--space-4) * -1) calc(var(--space-4) * -1) var(--space-5);padding:var(--space-3) var(--space-4)}\n.progressList{display:flex;min-width:0;gap:var(--space-4);margin:0;padding:0;overflow-x:auto;list-style:none;scrollbar-width:none}\n.progressList::-webkit-scrollbar{display:none}\n.progressList{width:100%;gap:var(--space-3)}\n.progressItem{display:inline-flex;flex:0 0 auto;align-items:center;gap:var(--space-2);color:var(--text-muted);font-size:var(--text-xs);font-weight:400;line-height:var(--leading-body);white-space:nowrap;transition:color var(--duration-standard) var(--ease-standard)}\n.progressItem.current{color:var(--accent);font-weight:500}\n.progressItem.current .progressMarker{border-color:var(--accent);background:var(--accent);color:var(--accent-foreground)}\n.progressItem.complete{color:var(--text-secondary)}\n.progressItem.complete .progressMarker{border-color:var(--success);color:var(--success)}\n@media (prefers-reduced-motion:reduce){.back,.next,.progressItem,.progressMarker{transition:none}\n.progressLabel{display:inline-flex;flex-direction:column}\n.progressLabel:after{height:0;overflow:hidden;content:attr(data-label);font-weight:500;visibility:hidden;user-select:none;pointer-events:none}\n.progressMarker{display:grid;width:1.25rem;height:1.25rem;place-items:center;border:1px solid var(--border-strong);border-radius:var(--radius-pill);color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;transition:border-color var(--duration-standard) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard),color var(--duration-standard) var(--ease-standard)}\n.markerGlyph{display:grid;grid-area:1/1;place-items:center}\n.progressCount{flex:0 0 auto;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;white-space:nowrap}\n.progressCount{order:-1}\n.viewport{display:grid;min-height:14rem}\n.viewport[data-resizing=true]{overflow:visible clip}\n.viewport{min-height:15rem}\n.swap{display:inline-grid}\n.swap>span{grid-area:1/1}\n.countValue{min-width:1ch;text-align:center}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\n.step,.success{grid-area:1/1;min-width:0;border:0;padding:0;margin:0}\n.step legend+.content{margin-top:var(--space-5)}\n.step legend{max-width:100%;padding:0;color:var(--foreground);font-size:var(--text-lg);font-weight:500;line-height:var(--leading-body)}\n.step .description{margin:var(--space-2) 0 var(--space-5);color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.success{display:flex;min-height:14rem;flex-direction:column;align-items:center;justify-content:center;text-align:center}\n.success h2{margin:var(--space-3) 0 0;color:var(--foreground);font-size:var(--text-lg);font-weight:500;line-height:var(--leading-body)}\n.success .successNote{margin:var(--space-2) 0 0;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.actionsShell{display:flow-root}\n.actions{display:flex;justify-content:flex-end;gap:var(--space-3);margin-top:var(--space-6)}\n.actions{margin-top:var(--space-5)}\n.back,.next{display:inline-flex;align-items:center;justify-content:center;gap:var(--space-2);min-height:var(--control-height-sm);border:1px solid var(--border-strong);border-radius:var(--radius-control);padding:0 var(--space-3);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);font-weight:500;line-height:1;cursor:pointer;transition:border-color var(--duration-fast),background-color var(--duration-fast),color var(--duration-fast),box-shadow var(--duration-fast),transform var(--duration-spring) var(--ease-spring)}\n.back:active:not(:disabled),.next:active{transform:scale(.97);transition-duration:var(--duration-fast),var(--duration-fast),var(--duration-fast),var(--duration-fast),.1s;transition-timing-function:ease,ease,ease,ease,ease-out}\n@media (hover:hover) and (pointer:fine){.back:hover:not(:disabled){border-color:var(--foreground);background:var(--surface-muted)}\n.back:disabled{cursor:not-allowed;opacity:.45}\n.back:active:not(:disabled),.next:active{transform:none}\n.next{border-color:var(--accent);background:var(--accent);color:var(--accent-foreground)}\n.next:hover{border-color:var(--accent-strong);background:var(--accent-strong)}\n.morph{position:relative;display:inline-flex}\n.morphBox{display:inline-flex;overflow-x:clip;white-space:nowrap}\n.sizer{position:absolute;top:0;left:0;white-space:nowrap;visibility:hidden;pointer-events:none}\n.successIcon{display:grid;width:2rem;height:2rem;place-items:center;color:var(--success)}", {"form":"form","progress":"progress","progressList":"progressList","progressItem":"progressItem","current":"current","progressMarker":"progressMarker","complete":"complete","back":"back","next":"next","progressLabel":"progressLabel","markerGlyph":"markerGlyph","progressCount":"progressCount","viewport":"viewport","swap":"swap","countValue":"countValue","srOnly":"srOnly","step":"step","success":"success","content":"content","description":"description","successNote":"successNote","actionsShell":"actionsShell","actions":"actions","morph":"morph","morphBox":"morphBox","sizer":"sizer","successIcon":"successIcon"});
A.cssFor("multi-step-form", [55818]);
A.item("multi-step-form", {entry:44818, export:null, kind:"block", tier:"pro", unresolved:[]});
})();