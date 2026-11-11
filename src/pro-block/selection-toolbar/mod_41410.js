function(__module,__exports,__require){
"use strict";
function __m(t, e, a) {
  "use strict";
  a.d(e, { F: () => y });
  var n = a(95155), i = a(12115), r = a(18310), s = a(80642), l = a(25354), o = a(30464), u = a(9005), c = a(7770), d = a(31058), p = a.n(d);
  function f({ text: t2 }) {
    let e2 = (0, r.I)(), a2 = t2.split(" ");
    return (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)("span", { className: p().srOnly, children: t2 }),
        (0, n.jsx)("span", {
          className: p().words,
          "aria-hidden": "true",
          children: (0, n.jsx)(s.N, {
            initial: false,
            mode: "popLayout",
            children: a2.map(
              (t3, i2) => (0, n.jsx)(
                l.PY1.span,
                {
                  className: p().word,
                  initial: e2 ? { opacity: 0 } : {
                    opacity: 0,
                    y: "0.35em",
                    filter: `blur(${c.T.blur.soft}px)`
                  },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: e2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: "-0.35em",
                    filter: `blur(${c.T.blur.subtle}px)`,
                    transition: {
                      duration: c.T.duration.instant,
                      ease: [...c.T.ease.standard]
                    }
                  },
                  transition: e2 ? { duration: c.T.duration.instant } : {
                    duration: c.T.duration.standard,
                    ease: [...c.T.ease.enter]
                  },
                  children: i2 < a2.length - 1 ? `${t3} ` : t3
                },
                `${i2}:${t3}`
              )
            )
          })
        })
      ]
    });
  }
  function h({ id: t2, text: e2, className: a2 }) {
    return (0, n.jsx)(s.N, {
      initial: false,
      children: e2 ? (0, n.jsx)(g, { id: t2, text: e2, className: a2 }, "message") : null
    });
  }
  function g({ id: t2, text: e2, className: a2 }) {
    let s2 = (0, r.I)(), o2 = (0, i.useRef)(null), [u2, d2] = (0, i.useState)("auto");
    return (0, i.useEffect)(() => {
      let t3 = o2.current;
      if (!t3 || "u" < typeof ResizeObserver) return;
      let e3 = new ResizeObserver(
        ([e4]) => d2(e4?.borderBoxSize?.[0]?.blockSize ?? t3.offsetHeight)
      );
      return e3.observe(t3), () => e3.disconnect();
    }, []), (0, n.jsx)(l.PY1.span, {
      className: p().messageSlot,
      initial: !s2 && { height: 0, opacity: 0 },
      animate: { height: u2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: s2 ? { duration: 0 } : {
          height: c.T.spring.smooth,
          opacity: { duration: c.T.duration.instant }
        }
      },
      transition: s2 ? { duration: 0 } : {
        height: c.T.spring.smooth,
        opacity: { duration: c.T.duration.fast }
      },
      children: (0, n.jsx)(l.PY1.span, {
        ref: o2,
        id: t2,
        className: a2,
        initial: !s2 && { y: "0.35em", filter: `blur(${c.T.blur.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: {
          duration: s2 ? 0 : c.T.duration.standard,
          ease: [...c.T.ease.enter]
        },
        children: (0, n.jsx)(f, { text: e2 })
      })
    });
  }
  function y({
    label: t2,
    value: e2,
    defaultValue: a2 = [],
    onValueChange: d2,
    placeholder: f2 = "Add a tag",
    description: g2,
    id: m
  }) {
    let x = (0, i.useId)(), T = m ?? x, _ = g2 ? `${T}-description` : void 0, [b, j] = (0, i.useState)(a2), [v, N] = (0, i.useState)(""), [w, S] = (0, i.useState)(null), [$, k] = (0, i.useState)(""), C = (0, r.I)(), [R, E] = (0, o.l)(), L = (0, i.useRef)(null), O = (0, i.useRef)(null), P = (0, i.useRef)(null), z = (0, i.useRef)(""), [B, I] = (0, i.useState)("auto"), Y = e2 ?? b, D = null !== w && Y.includes(w) ? w : null;
    function A(t3) {
      k((e3) => e3 === t3 ? `${t3}\xA0` : t3);
    }
    function q(t3) {
      void 0 === e2 && j(t3), d2?.(t3);
    }
    function F(t3) {
      S(t3), null !== t3 && A(`${t3} selected. Press Backspace to remove it.`);
    }
    function H() {
      let t3 = v.trim();
      if (!t3) return;
      let e3 = Y.find((e4) => e4.toLowerCase() === t3.toLowerCase());
      if (e3) {
        let t4 = R.current?.querySelector(`[data-tag="${CSS.escape(e3)}"]`);
        t4 && !C && E(
          t4,
          { scale: [1, 1.06, 1] },
          {
            duration: c.T.duration.standard + c.T.duration.instant,
            ease: [...c.T.ease.inOut]
          }
        ), A(`${e3} is already added`);
        return;
      }
      q([...Y, t3]), N(""), S(null), A(`Added ${t3}`);
    }
    function J(t3) {
      q(Y.filter((e3) => e3 !== t3)), S(null), A(`Removed ${t3}`), O.current?.focus();
    }
    function U(t3, e3) {
      if (!t3.target.closest("button")) {
        if (!e3) return void t3.preventDefault();
        F(D === e3 ? null : e3), O.current?.focus();
      }
    }
    (0, i.useEffect)(() => {
      let t3 = L.current;
      if (!t3 || "u" < typeof ResizeObserver) return;
      let e3 = new ResizeObserver(() => I(t3.offsetHeight));
      return e3.observe(t3), () => e3.disconnect();
    }, []), (0, i.useLayoutEffect)(() => {
      let t3 = P.current, e3 = null === D ? null : L.current?.querySelector(`[data-tag="${CSS.escape(D)}"]`);
      if (!t3) return;
      if (!e3) {
        z.current && E(t3, C ? { opacity: 0 } : { opacity: 0, scale: 0.9 }, {
          duration: C ? 0 : c.T.duration.instant,
          ease: [...c.T.ease.standard]
        }), z.current = "";
        return;
      }
      let a3 = {
        x: e3.offsetLeft,
        y: e3.offsetTop,
        width: e3.offsetWidth,
        height: e3.offsetHeight
      }, n2 = Object.values(a3).join(" ");
      n2 !== z.current && (!C && (z.current || Number(getComputedStyle(t3).opacity) > 0.02) ? E(
        t3,
        { ...a3, opacity: 1, scale: 1 },
        {
          ...c.T.spring.morph,
          opacity: { duration: c.T.duration.fast }
        }
      ) : E(
        t3,
        { ...a3, opacity: [0, 1], scale: [C ? 1 : 0.9, 1] },
        C ? { duration: 0, opacity: { duration: c.T.duration.instant } } : {
          duration: 0,
          opacity: { duration: c.T.duration.fast },
          scale: c.T.spring.snappy
        }
      ), z.current = n2);
    });
    let K = C ? { duration: 0 } : c.T.spring.morph, M = C ? { duration: 0 } : c.T.spring.smooth;
    return (0, n.jsxs)("div", {
      className: p().field,
      children: [
        (0, n.jsx)("label", { htmlFor: T, children: t2 }),
        (0, n.jsx)(l.PY1.div, {
          ref: R,
          className: p().control,
          initial: false,
          animate: { height: B },
          transition: M,
          children: (0, n.jsxs)("div", {
            ref: L,
            className: p().content,
            onClick: (t3) => {
              t3.target === t3.currentTarget && O.current?.focus();
            },
            children: [
              (0, n.jsx)("span", {
                ref: P,
                className: p().ring,
                "aria-hidden": "true"
              }),
              (0, n.jsx)(s.N, {
                initial: false,
                children: !v && !Y.length && (0, n.jsx)(
                  l.PY1.span,
                  {
                    className: p().placeholder,
                    "aria-hidden": "true",
                    initial: C ? { opacity: 0 } : {
                      opacity: 0,
                      y: "0.3em",
                      filter: `blur(${c.T.blur.soft}px)`
                    },
                    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                    exit: { opacity: 0, transition: { duration: 0 } },
                    transition: C ? { duration: c.T.duration.instant } : {
                      duration: c.T.duration.standard,
                      ease: [...c.T.ease.enter]
                    },
                    children: f2
                  },
                  "placeholder"
                )
              }),
              (0, n.jsx)(s.N, {
                initial: false,
                mode: "popLayout",
                children: Y.map(
                  (t3) => (0, n.jsxs)(
                    l.PY1.span,
                    {
                      layout: !C && "position",
                      className: p().tag,
                      "data-tag": t3,
                      "data-picked": t3 === D || void 0,
                      onMouseDown: (t4) => U(t4),
                      onClick: (e3) => U(e3, t3),
                      initial: C ? { opacity: 0 } : {
                        opacity: 0,
                        scale: 0.9,
                        filter: `blur(${c.T.blur.soft}px)`
                      },
                      animate: {
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                        transitionEnd: { filter: "none" }
                      },
                      exit: C ? { opacity: 0, transition: { duration: 0 } } : {
                        opacity: 0,
                        scale: 0.9,
                        filter: `blur(${c.T.blur.subtle}px)`,
                        transition: {
                          duration: c.T.duration.instant,
                          ease: [...c.T.ease.standard]
                        }
                      },
                      transition: C ? { duration: c.T.duration.instant } : {
                        ...c.T.spring.morph,
                        layout: K,
                        opacity: {
                          duration: c.T.duration.fast,
                          ease: [...c.T.ease.enter]
                        },
                        filter: {
                          duration: c.T.duration.standard,
                          ease: [...c.T.ease.enter]
                        }
                      },
                      children: [
                        (0, n.jsx)("span", {
                          className: p().tagLabel,
                          children: t3
                        }),
                        (0, n.jsx)("button", {
                          type: "button",
                          onClick: () => J(t3),
                          "aria-label": `Remove ${t3}`,
                          children: (0, n.jsx)(u.A, {
                            width: 14,
                            height: 14,
                            "aria-hidden": "true"
                          })
                        })
                      ]
                    },
                    t3
                  )
                )
              }),
              (0, n.jsx)(l.PY1.input, {
                layout: !C && "position",
                transition: { layout: K },
                ref: O,
                id: T,
                value: v,
                onChange: (t3) => {
                  N(t3.currentTarget.value), S(null);
                },
                onKeyDown: function(t3) {
                  let { key: e3, currentTarget: a3 } = t3, n2 = 0 === a3.selectionStart && 0 === a3.selectionEnd, i2 = null === D ? Y.length : Y.indexOf(D), r2 = true;
                  "Enter" === e3 || "," === e3 ? H() : ("Backspace" === e3 || "Delete" === e3) && null !== D ? J(D) : "Backspace" === e3 && n2 && Y.length ? F(Y[Y.length - 1]) : "ArrowLeft" === e3 && (n2 || null !== D) && i2 > 0 ? F(Y[i2 - 1]) : "ArrowRight" === e3 && null !== D ? F(Y[i2 + 1] ?? null) : "Escape" === e3 && null !== D ? F(null) : r2 = false, r2 && t3.preventDefault();
                },
                onBlur: () => {
                  H(), S(null);
                },
                placeholder: Y.length ? "" : f2,
                "aria-describedby": _
              })
            ]
          })
        }),
        (0, n.jsx)("span", {
          className: p().srOnly,
          "aria-live": "polite",
          children: $
        }),
        (0, n.jsx)(h, { id: _, text: g2, className: p().hint })
      ]
    });
  }
}

__m(__module,__exports,__require);
}