function(__module,__exports,__require){
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
}