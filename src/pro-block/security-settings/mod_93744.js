function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { s: () => x });
  var a = i(95155), r = i(12115), n = i(18310), s = i(25354), o = i(80642), l = i(7770), d = i(1668), u = i.n(d);
  let c = { showPassword: "Show password", hidePassword: "Hide password" };
  function p({ slashed: e2 }) {
    let t2 = (0, n.I)(), i2 = `eye-${(0, r.useId)().replace(/[^a-zA-Z0-9_-]/g, "")}`, o2 = { pathLength: +!!e2, opacity: +!!e2 }, d2 = t2 ? { duration: 0 } : {
      pathLength: {
        duration: l.T.duration.standard,
        ease: [...l.T.ease.standard]
      },
      opacity: { duration: l.T.duration.instant }
    };
    return (0, a.jsxs)("svg", {
      width: 18,
      height: 18,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.75,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        (0, a.jsxs)("mask", {
          id: i2,
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          children: [
            (0, a.jsx)("rect", {
              width: "24",
              height: "24",
              fill: "white",
              stroke: "none"
            }),
            (0, a.jsx)(s.PY1.path, {
              d: "M2 2l20 20",
              stroke: "black",
              strokeWidth: 5,
              initial: false,
              animate: o2,
              transition: d2
            })
          ]
        }),
        (0, a.jsxs)("g", {
          mask: `url(#${i2})`,
          children: [
            (0, a.jsx)("path", {
              d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
            }),
            (0, a.jsx)("circle", { cx: "12", cy: "12", r: "3" })
          ]
        }),
        (0, a.jsx)(s.PY1.path, {
          d: "M2 2l20 20",
          initial: false,
          animate: o2,
          transition: d2
        })
      ]
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
          children: (0, a.jsx)(o.N, {
            initial: false,
            mode: "popLayout",
            children: i2.map(
              (e3, r2) => (0, a.jsx)(
                s.PY1.span,
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
                      ease: [...l.T.ease.exit]
                    }
                  },
                  transition: t2 ? { duration: l.T.duration.instant } : {
                    duration: l.T.duration.standard,
                    ease: [...l.T.ease.enter]
                  },
                  children: r2 < i2.length - 1 ? `${e3} ` : e3
                },
                `${r2}:${e3}`
              )
            )
          })
        })
      ]
    });
  }
  function h({ id: e2, text: t2, className: i2, alert: r2 }) {
    return (0, a.jsx)(o.N, {
      initial: false,
      children: t2 ? (0, a.jsx)(f, { id: e2, text: t2, className: i2, alert: r2 }, "message") : null
    });
  }
  function f({ id: e2, text: t2, className: i2, alert: o2 }) {
    let d2 = (0, n.I)(), c2 = (0, r.useRef)(null), [p2, h2] = (0, r.useState)("auto");
    return (0, r.useEffect)(() => {
      let e3 = c2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && h2(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, a.jsx)(s.PY1.span, {
      className: u().messageSlot,
      initial: { height: 0, opacity: 0 },
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
      children: (0, a.jsx)(s.PY1.span, {
        ref: c2,
        id: e2,
        className: i2,
        role: o2 ? "alert" : void 0,
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
  let x = (0, r.forwardRef)(function({ label: e2, description: t2, messages: i2, id: n2, className: s2, ...o2 }, l2) {
    let d2 = { ...c, ...i2 }, m2 = (0, r.useId)(), f2 = n2 ?? m2, [x2, _] = (0, r.useState)(false), [y, b] = (0, r.useState)(false), g = t2 ? `${f2}-description` : void 0;
    return (0, a.jsxs)("div", {
      className: u().field,
      children: [
        (0, a.jsx)("label", { htmlFor: f2, children: e2 }),
        (0, a.jsxs)("div", {
          className: u().shell,
          children: [
            (0, a.jsx)("input", {
              ...o2,
              ref: l2,
              id: f2,
              type: x2 ? "text" : "password",
              "data-reveal": y ? x2 ? "shown" : "hidden" : void 0,
              "aria-describedby": [o2["aria-describedby"], g].filter(Boolean).join(" ") || void 0,
              className: [u().input, s2].filter(Boolean).join(" ")
            }),
            (0, a.jsx)("button", {
              type: "button",
              onClick: () => {
                _((e3) => !e3), b(true);
              },
              "aria-label": x2 ? d2.hidePassword : d2.showPassword,
              "aria-pressed": x2,
              children: (0, a.jsx)(p, { slashed: x2 })
            })
          ]
        }),
        (0, a.jsx)(h, { id: g, text: t2, className: u().hint })
      ]
    });
  });
}

__m(__module,__exports,__require);
}