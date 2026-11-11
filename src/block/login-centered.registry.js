/* login-centered (free block, cross-ref module 88138, closure 157) */
(function(){var A=globalThis.__ARC__;
A.regCss(14290, ".field{display:grid;min-width:0}\n.label{margin-bottom:var(--space-2);font-size:var(--text-sm);font-weight:500}\n.input,.label{color:var(--foreground);line-height:var(--leading-body)}\n.input{width:100%;min-height:var(--control-height-md);padding:0 var(--space-3);border:1px solid var(--border-strong);border-radius:var(--radius-control);background:var(--surface);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:none;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.input::placeholder{color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.input:hover:not(:disabled,[aria-invalid=true]){border-color:var(--foreground)}\n.input:focus-visible{border-color:var(--foreground)}\n.input[aria-invalid=true]{border-color:var(--danger)}\n.input:disabled{cursor:not-allowed;opacity:.5;background:var(--surface-muted)}\n@media (prefers-reduced-motion:reduce){.input{transition-duration:.01ms}\n.messageSlot{display:block;overflow:hidden}\n.description,.error{display:block;padding-top:var(--space-2);font-size:var(--text-xs);line-height:var(--leading-body)}\n.description{color:var(--text-muted)}\n.error{color:var(--danger)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.column{position:relative;display:inline-flex;justify-content:center;font-variant-numeric:tabular-nums}\n.column>span{display:inline-block}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"field":"field","label":"label","input":"input","messageSlot":"messageSlot","description":"description","error":"error","words":"words","word":"word","column":"column","srOnly":"srOnly"});
A.reg(30464, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { l: () => l });
  var r = n(12115), o = n(28819), i = n(24866), s = n(18310), a = n(92171);
  function l() {
    var e2;
    let t2 = (0, o.M)(() => ({ current: null, animations: [] })), n2 = (function() {
      let e3 = (0, s.I)(), { reducedMotion: t3 } = (0, r.useContext)(i.Q);
      return "never" !== t3 && ("always" === t3 || e3);
    })() ?? void 0, { skipAnimations: l2 } = (0, r.useContext)(i.Q), u = (0, r.useMemo)(
      () => (0, a.W)({ scope: t2, reduceMotion: n2, skipAnimations: l2 }),
      [t2, n2, l2]
    );
    return e2 = () => {
      t2.animations.forEach((e3) => e3.stop()), t2.animations.length = 0;
    }, (0, r.useEffect)(() => () => e2(), []), [t2, u];
  }
}

__m(__module,__exports,__require);
});
A.reg(35978, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { p: () => x });
  var a = i(95155), r = i(12115), n = i(18310), s = i(80642), o = i(25354), l = i(7770), d = i(14290), u = i.n(d);
  let c = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.6 * e2}em`,
      filter: `blur(${l.T.blur.subtle}px)`
    }),
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.6 * e2}em`,
      filter: `blur(${l.T.blur.subtle}px)`
    })
  };
  function p({ word: e2 }) {
    let t2 = (0, n.I)(), [i2, d2] = (0, r.useState)({ word: e2, direction: 1 });
    i2.word !== e2 && d2({
      word: e2,
      direction: parseFloat(e2.replace(/,/g, "")) < parseFloat(i2.word.replace(/,/g, "")) ? -1 : 1
    });
    let m2 = e2.split(""), h2 = t2 ? { duration: 0 } : {
      y: l.T.spring.snappy,
      width: l.T.spring.morph,
      opacity: { duration: l.T.duration.fast },
      filter: { duration: l.T.duration.fast }
    };
    return (0, a.jsx)(s.N, {
      initial: false,
      children: m2.map(
        (e3, t3) => (0, a.jsx)(
          o.PY1.span,
          {
            className: u().column,
            initial: { width: 0, opacity: 0 },
            animate: { width: "auto", opacity: 1 },
            exit: { width: 0, opacity: 0 },
            transition: h2,
            children: (0, a.jsx)(s.N, {
              initial: false,
              mode: "popLayout",
              custom: i2.direction,
              children: (0, a.jsx)(
                o.PY1.span,
                {
                  custom: i2.direction,
                  variants: c,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  transition: h2,
                  children: e3
                },
                e3
              )
            })
          },
          m2.length - t3
        )
      )
    });
  }
  function m({ text: e2 }) {
    let t2 = (0, n.I)(), i2 = e2.split(" ");
    return (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)("span", { className: u().srOnly, children: e2 }),
        (0, a.jsx)("span", {
          className: u().words,
          "aria-hidden": "true",
          children: (0, a.jsx)(s.N, {
            initial: false,
            mode: "popLayout",
            children: i2.map(
              (e3, r2) => (0, a.jsxs)(
                o.PY1.span,
                {
                  className: u().word,
                  initial: t2 ? { opacity: 0 } : {
                    opacity: 0,
                    y: "0.35em",
                    filter: `blur(${l.T.blur.soft}px)`
                  },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: "-0.35em",
                    filter: `blur(${l.T.blur.subtle}px)`,
                    transition: {
                      duration: l.T.duration.exit,
                      ease: [...l.T.ease.standard]
                    }
                  },
                  transition: t2 ? { duration: l.T.duration.instant } : {
                    duration: l.T.duration.standard,
                    ease: [...l.T.ease.enter]
                  },
                  children: [
                    /^\d[\d.,/:]*%?$/.test(e3) ? (0, a.jsx)(p, { word: e3 }) : e3,
                    r2 < i2.length - 1 ? " " : null
                  ]
                },
                `${r2}:${/^\d[\d.,/:]*%?$/.test(e3) ? "#" : e3}`
              )
            )
          })
        })
      ]
    });
  }
  function h({ id: e2, text: t2, className: i2, alert: r2 }) {
    return (0, a.jsx)(s.N, {
      initial: false,
      children: t2 ? (0, a.jsx)(f, { id: e2, text: t2, className: i2, alert: r2 }, "message") : null
    });
  }
  function f({ id: e2, text: t2, className: i2, alert: s2 }) {
    let d2 = (0, n.I)(), c2 = (0, r.useRef)(null), [p2, h2] = (0, r.useState)("auto");
    return (0, r.useEffect)(() => {
      let e3 = c2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && h2(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, a.jsx)(o.PY1.span, {
      className: u().messageSlot,
      initial: !d2 && { height: 0, opacity: 0 },
      animate: { height: p2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: d2 ? { duration: 0 } : {
          height: l.T.spring.smooth,
          opacity: { duration: l.T.duration.instant }
        }
      },
      transition: d2 ? { duration: 0 } : {
        height: l.T.spring.smooth,
        opacity: { duration: l.T.duration.fast }
      },
      children: (0, a.jsx)(o.PY1.span, {
        ref: c2,
        id: e2,
        className: i2,
        role: s2 ? "alert" : void 0,
        initial: !d2 && { y: "0.35em", filter: `blur(${l.T.blur.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: {
          duration: d2 ? 0 : l.T.duration.standard,
          ease: [...l.T.ease.enter]
        },
        children: (0, a.jsx)(m, { text: t2 })
      })
    });
  }
  let x = (0, r.forwardRef)(function({ label: e2, description: t2, error: i2, id: n2, className: s2, ...o2 }, l2) {
    let d2 = (0, r.useId)(), c2 = n2 ?? d2, p2 = t2 ? `${c2}-description` : void 0, m2 = i2 ? `${c2}-error` : void 0, f2 = [o2["aria-describedby"], p2, m2].filter(Boolean).join(" ") || void 0;
    return (0, a.jsxs)("div", {
      className: u().field,
      children: [
        (0, a.jsx)("label", { className: u().label, htmlFor: c2, children: e2 }),
        (0, a.jsx)("input", {
          ...o2,
          id: c2,
          ref: l2,
          className: [u().input, s2].filter(Boolean).join(" "),
          "aria-invalid": !!i2 || o2["aria-invalid"],
          "aria-describedby": f2
        }),
        (0, a.jsx)(h, { id: p2, text: t2, className: u().description }),
        (0, a.jsx)(h, { id: m2, text: i2, className: u().error, alert: true })
      ]
    });
  });
  x.displayName = "Input";
}

__m(__module,__exports,__require);
});
A.reg(75796, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "mail",
    size: 24,
    node: [
      ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
      [
        "rect",
        { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(78766, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { I: () => m });
  var n = i(95155), a = i(12115), r = i(18310), s = i(80642), o = i(25354), l = i(30464), u = i(7770), d = i(79374), c = i.n(d);
  function p({ text: e2 }) {
    let t2 = (0, r.I)(), i2 = e2.split(" ");
    return (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)("span", { className: c().srOnly, children: e2 }),
        (0, n.jsx)("span", {
          className: c().words,
          "aria-hidden": "true",
          children: (0, n.jsx)(s.N, {
            initial: false,
            mode: "popLayout",
            children: i2.map(
              (e3, a2) => (0, n.jsx)(
                o.PY1.span,
                {
                  className: c().word,
                  initial: t2 ? { opacity: 0 } : {
                    opacity: 0,
                    y: "0.35em",
                    filter: `blur(${u.T.blur.soft}px)`
                  },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: "-0.35em",
                    filter: `blur(${u.T.blur.subtle}px)`,
                    transition: {
                      duration: u.T.duration.instant,
                      ease: [...u.T.ease.standard]
                    }
                  },
                  transition: t2 ? { duration: u.T.duration.instant } : {
                    duration: u.T.duration.standard,
                    ease: [...u.T.ease.enter]
                  },
                  children: a2 < i2.length - 1 ? `${e3} ` : e3
                },
                `${a2}:${e3}`
              )
            )
          })
        })
      ]
    });
  }
  function f({ id: e2, text: t2, className: i2, alert: a2 }) {
    return (0, n.jsx)(s.N, {
      initial: false,
      children: t2 ? (0, n.jsx)(h, { id: e2, text: t2, className: i2, alert: a2 }, "message") : null
    });
  }
  function h({ id: e2, text: t2, className: i2, alert: s2 }) {
    let l2 = (0, r.I)(), d2 = (0, a.useRef)(null), [f2, m2] = (0, a.useState)("auto");
    return (0, a.useEffect)(() => {
      let e3 = d2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(
        ([t4]) => m2(t4?.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight)
      );
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, n.jsx)(o.PY1.span, {
      className: c().messageSlot,
      initial: { height: 0, opacity: 0 },
      animate: { height: f2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: l2 ? { duration: 0 } : {
          height: u.T.spring.smooth,
          opacity: { duration: u.T.duration.instant }
        }
      },
      transition: l2 ? { duration: 0 } : {
        height: u.T.spring.smooth,
        opacity: { duration: u.T.duration.fast }
      },
      children: (0, n.jsx)(o.PY1.span, {
        ref: d2,
        id: e2,
        className: i2,
        role: s2 ? "alert" : void 0,
        initial: !l2 && { y: "0.35em", filter: `blur(${u.T.blur.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: {
          duration: l2 ? 0 : u.T.duration.standard,
          ease: [...u.T.ease.enter]
        },
        children: (0, n.jsx)(p, { text: t2 })
      })
    });
  }
  function m({
    length: e2 = 6,
    value: t2 = "",
    onChange: i2,
    label: d2,
    description: p2,
    error: h2,
    autoFocus: _ = false,
    disabled: y = false,
    inputMode: g = "numeric",
    className: x
  }) {
    let b = (0, a.useId)(), w = (0, r.I)(), [T, v] = (0, l.l)(), j = (0, a.useRef)([]), N = Array.from({ length: e2 }, (e3, i3) => t2[i3] ?? ""), k = p2 ? `${b}-description` : void 0, $ = h2 ? `${b}-error` : void 0, E = [k, $].filter(Boolean).join(" ") || void 0, P = (t3) => j.current[Math.max(0, Math.min(t3, e2 - 1))]?.focus(), S = (e3) => "numeric" === g ? e3.replace(/\D/g, "") : e3, [R, L] = (0, a.useState)({ x: 0, width: 0, shown: false, glide: false }), [Y, z] = (0, a.useState)({ value: t2, wave: false });
    Y.value !== t2 && z({
      value: t2,
      wave: Array.from(
        { length: e2 },
        (e3, i3) => (Y.value[i3] ?? "") !== (t2[i3] ?? "")
      ).filter(Boolean).length > 1
    });
    let B = (0, a.useRef)(h2);
    (0, a.useEffect)(() => {
      _ && j.current[0]?.focus();
    }, [_]), (0, a.useEffect)(() => {
      let e3 = T.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => {
        let t4 = e3.contains(document.activeElement) ? document.activeElement?.parentElement : null;
        t4 && L(
          (e4) => e4.x === t4.offsetLeft && e4.width === t4.offsetWidth ? e4 : { ...e4, x: t4.offsetLeft, width: t4.offsetWidth, glide: false }
        );
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [T]), (0, a.useEffect)(() => {
      h2 && h2 !== B.current && !w && T.current && v(
        T.current,
        { x: [0, -6, 5, -3, 2, 0] },
        { duration: 0.36, ease: [...u.T.ease.standard] }
      ), B.current = h2;
    }, [h2, w, v, T]);
    let D = (e3) => {
      let t3 = e3.currentTarget.parentElement;
      L((e4) => ({
        x: t3.offsetLeft,
        width: t3.offsetWidth,
        shown: true,
        glide: e4.shown
      }));
    }, M = (e3) => {
      T.current?.contains(e3.relatedTarget) || L((e4) => ({ ...e4, shown: false, glide: false }));
    };
    return (0, n.jsxs)("div", {
      className: [c().field, x].filter(Boolean).join(" "),
      children: [
        (0, n.jsx)("span", { className: c().label, children: d2 }),
        (0, n.jsxs)("div", {
          ref: T,
          className: c().inputs,
          role: "group",
          "aria-label": d2,
          "data-invalid": h2 ? "true" : void 0,
          children: [
            N.map(
              (t3, a2) => (0, n.jsxs)(
                "div",
                {
                  className: c().slot,
                  children: [
                    (0, n.jsx)("input", {
                      ref: (e3) => {
                        j.current[a2] = e3;
                      },
                      className: c().input,
                      "aria-label": `${d2}, digit ${a2 + 1} of ${e2}`,
                      "aria-describedby": E,
                      "aria-invalid": !!h2 || void 0,
                      value: t3,
                      "data-filled": t3 ? "true" : void 0,
                      maxLength: 1,
                      inputMode: g,
                      autoComplete: 0 === a2 ? "one-time-code" : "off",
                      disabled: y,
                      onChange: (t4) => ((t5, n2) => {
                        let a3 = S(n2.target.value);
                        if (a3.length <= 1) {
                          let n3, r3;
                          return void (n3 = N.slice(), r3 = S(a3).slice(-1), n3[t5] = r3, i2?.(n3.join("")), r3 && t5 < e2 - 1 && P(t5 + 1));
                        }
                        let r2 = N.slice();
                        a3.slice(0, e2 - t5).split("").forEach((e3, i3) => {
                          r2[t5 + i3] = e3;
                        }), i2?.(r2.join("")), P(Math.min(t5 + a3.length, e2 - 1));
                      })(a2, t4),
                      onPaste: (t4) => ((t5, n2) => {
                        n2.preventDefault();
                        let a3 = S(n2.clipboardData.getData("text")).slice(
                          0,
                          e2 - t5
                        );
                        if (!a3) return;
                        let r2 = N.slice();
                        a3.split("").forEach((e3, i3) => {
                          r2[t5 + i3] = e3;
                        }), i2?.(r2.join("")), P(Math.min(t5 + a3.length, e2 - 1));
                      })(a2, t4),
                      onKeyDown: (e3) => ((e4, t4) => {
                        if ("ArrowLeft" === t4.key && (t4.preventDefault(), P(e4 - 1)), "ArrowRight" === t4.key && (t4.preventDefault(), P(e4 + 1)), "Backspace" === t4.key && !N[e4] && e4 > 0) {
                          t4.preventDefault();
                          let n2 = N.slice();
                          n2[e4 - 1] = "", i2?.(n2.join("")), P(e4 - 1);
                        }
                        if ("Delete" === t4.key && N[e4]) {
                          let t5 = N.slice();
                          t5[e4] = "", i2?.(t5.join(""));
                        }
                      })(a2, e3),
                      onFocus: D,
                      onBlur: M
                    }),
                    (0, n.jsx)(s.N, {
                      initial: false,
                      children: t3 ? (0, n.jsx)(
                        o.PY1.span,
                        {
                          className: c().glyph,
                          "aria-hidden": "true",
                          initial: w ? { opacity: 0 } : {
                            opacity: 0,
                            y: "0.35em",
                            filter: `blur(${u.T.blur.soft}px)`
                          },
                          animate: {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)"
                          },
                          exit: w ? { opacity: 0, transition: { duration: 0 } } : {
                            opacity: 0,
                            scale: 0.9,
                            filter: `blur(${u.T.blur.subtle}px)`,
                            transition: {
                              duration: u.T.duration.instant,
                              ease: [...u.T.ease.standard]
                            }
                          },
                          transition: w ? { duration: u.T.duration.instant } : {
                            duration: u.T.duration.standard,
                            ease: [...u.T.ease.enter],
                            delay: Y.wave ? a2 * u.T.stagger.item : 0
                          },
                          children: t3
                        },
                        t3
                      ) : null
                    })
                  ]
                },
                `${b}-${a2}`
              )
            ),
            (0, n.jsx)(o.PY1.span, {
              className: c().ring,
              "aria-hidden": "true",
              initial: false,
              animate: {
                x: R.x,
                width: R.width,
                opacity: +!!R.shown,
                scale: R.shown ? 1 : 0.94
              },
              transition: w ? { duration: 0 } : {
                x: R.glide ? u.T.spring.snappy : { duration: 0 },
                width: { duration: 0 },
                scale: u.T.spring.snappy,
                opacity: { duration: u.T.duration.fast }
              }
            })
          ]
        }),
        (0, n.jsx)(f, { id: k, text: p2, className: c().description }),
        (0, n.jsx)(f, { id: $, text: h2, className: c().error, alert: true })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.regCss(79374, ".field{display:grid;min-width:0}\n.label{margin-bottom:8px;color:var(--foreground);font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body)}\n.inputs{position:relative;display:flex;width:fit-content;max-width:100%;gap:8px}\n.inputs[data-invalid=true] .ring{border-color:var(--danger)}\n@media (max-width:360px){.inputs{gap:6px}\n.slot{position:relative;display:grid;width:42px;height:48px;min-width:0;flex:0 1 42px}\n.slot{height:44px}\n.input{width:100%;height:100%;min-width:0;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);color:transparent;caret-color:var(--accent);font:inherit;font-size:var(--text-lg);font-variant-numeric:tabular-nums;text-align:center;outline:none;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.input:hover:not(:disabled,[data-filled=true],[aria-invalid=true]){border-color:var(--border-strong);background:var(--surface-muted)}\n.input[data-filled=true]{border-color:var(--accent);background:var(--accent-subtle)}\n.input:focus-visible{outline:none}\n.input[aria-invalid=true]{border-color:var(--danger);background:color-mix(in srgb,var(--danger) 7%,var(--surface))}\n.input:disabled{cursor:not-allowed;opacity:.48;background:var(--surface-muted)}\n.input:disabled~.glyph{opacity:.48}\n.input:focus-visible{outline:2px solid CanvasText;outline-offset:2px}\n.input{color:CanvasText}\n@media (prefers-reduced-motion:reduce){.input,.ring{transition:none}\n.glyph{position:absolute;inset:0;display:grid;place-items:center;color:var(--foreground);font-size:var(--text-lg);font-variant-numeric:tabular-nums;pointer-events:none}\n.glyph{display:none}\n.ring{position:absolute;top:0;left:0;height:100%;z-index:2;border:1px solid var(--accent-strong);border-radius:var(--radius-control);pointer-events:none;transition:border-color var(--duration-fast) var(--ease-standard)}\n@media (forced-colors:active){.ring{display:none}\n.messageSlot{display:block;overflow:hidden}\n.description,.error{display:block;padding-top:8px;font-size:var(--text-xs);line-height:var(--leading-body)}\n.description{color:var(--text-muted)}\n.error{color:var(--danger)}\n.words{position:relative;display:block}\n.word{display:inline-block;white-space:pre}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"field":"field","label":"label","inputs":"inputs","ring":"ring","slot":"slot","input":"input","glyph":"glyph","messageSlot":"messageSlot","description":"description","error":"error","words":"words","word":"word","srOnly":"srOnly"});
A.cssFor("login-centered", [14290,79374]);
A.item("login-centered", {entry:88138, export:"LoginCentered", kind:"block", tier:"free", unresolved:[], xref:true});
})();