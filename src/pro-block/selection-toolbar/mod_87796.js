function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { T: () => g });
  var i = a(95155), n = a(12115), s = a(18310), r = a(80642), o = a(25354), l = a(7770), c = a(68272), d = a.n(c);
  let u = {
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
  function h({ word: e2 }) {
    let t2 = (0, s.I)(), [a2, c2] = (0, n.useState)({ word: e2, direction: 1 });
    a2.word !== e2 && c2({
      word: e2,
      direction: parseFloat(e2.replace(/,/g, "")) < parseFloat(a2.word.replace(/,/g, "")) ? -1 : 1
    });
    let m2 = e2.split(""), p2 = t2 ? { duration: 0 } : {
      y: l.T.spring.snappy,
      width: l.T.spring.morph,
      opacity: { duration: l.T.duration.fast },
      filter: { duration: l.T.duration.fast }
    };
    return (0, i.jsx)(r.N, {
      initial: false,
      children: m2.map(
        (e3, t3) => (0, i.jsx)(
          o.PY1.span,
          {
            className: d().column,
            initial: { width: 0, opacity: 0 },
            animate: { width: "auto", opacity: 1 },
            exit: { width: 0, opacity: 0 },
            transition: p2,
            children: (0, i.jsx)(r.N, {
              initial: false,
              mode: "popLayout",
              custom: a2.direction,
              children: (0, i.jsx)(
                o.PY1.span,
                {
                  custom: a2.direction,
                  variants: u,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  transition: p2,
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
    let t2 = (0, s.I)(), a2 = e2.split(" ");
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("span", { className: d().srOnly, children: e2 }),
        (0, i.jsx)("span", {
          className: d().words,
          "aria-hidden": "true",
          children: (0, i.jsx)(r.N, {
            initial: false,
            mode: "popLayout",
            children: a2.map(
              (e3, n2) => (0, i.jsxs)(
                o.PY1.span,
                {
                  className: d().word,
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
                      duration: l.T.duration.fast,
                      ease: [...l.T.ease.standard]
                    }
                  },
                  transition: t2 ? { duration: l.T.duration.instant } : {
                    duration: l.T.duration.standard,
                    ease: [...l.T.ease.enter]
                  },
                  children: [
                    /^\d[\d.,/:]*%?$/.test(e3) ? (0, i.jsx)(h, { word: e3 }) : e3,
                    n2 < a2.length - 1 ? " " : null
                  ]
                },
                `${n2}:${/^\d[\d.,/:]*%?$/.test(e3) ? "#" : e3}`
              )
            )
          })
        })
      ]
    });
  }
  function p({ id: e2, text: t2, className: a2, alert: n2 }) {
    return (0, i.jsx)(r.N, {
      initial: false,
      children: t2 ? (0, i.jsx)(f, { id: e2, text: t2, className: a2, alert: n2 }, "message") : null
    });
  }
  function f({ id: e2, text: t2, className: a2, alert: r2 }) {
    let c2 = (0, s.I)(), u2 = (0, n.useRef)(null), [h2, p2] = (0, n.useState)("auto");
    return (0, n.useEffect)(() => {
      let e3 = u2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && p2(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, i.jsx)(o.PY1.span, {
      className: d().messageSlot,
      initial: !c2 && { height: 0, opacity: 0 },
      animate: { height: h2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: c2 ? { duration: 0 } : {
          height: l.T.spring.smooth,
          opacity: { duration: l.T.duration.instant }
        }
      },
      transition: c2 ? { duration: 0 } : {
        height: l.T.spring.smooth,
        opacity: { duration: l.T.duration.fast }
      },
      children: (0, i.jsx)(o.PY1.span, {
        ref: u2,
        id: e2,
        className: a2,
        role: r2 ? "alert" : void 0,
        initial: !c2 && { y: "0.35em", filter: `blur(${l.T.blur.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: {
          duration: c2 ? 0 : l.T.duration.standard,
          ease: [...l.T.ease.enter]
        },
        children: (0, i.jsx)(m, { text: t2 })
      })
    });
  }
  let g = (0, n.forwardRef)(function({ label: e2, description: t2, error: a2, id: s2, className: r2, ...o2 }, l2) {
    let c2 = (0, n.useId)(), u2 = s2 ?? c2, h2 = t2 ? `${u2}-description` : void 0, m2 = a2 ? `${u2}-error` : void 0;
    return (0, i.jsxs)("div", {
      className: d().field,
      children: [
        (0, i.jsx)("label", { htmlFor: u2, children: e2 }),
        (0, i.jsx)("textarea", {
          ...o2,
          id: u2,
          ref: l2,
          className: [d().control, r2].filter(Boolean).join(" "),
          "aria-invalid": !!a2 || o2["aria-invalid"],
          "aria-describedby": [o2["aria-describedby"], h2, m2].filter(Boolean).join(" ") || void 0
        }),
        (0, i.jsx)(p, { id: h2, text: t2, className: d().hint }),
        (0, i.jsx)(p, { id: m2, text: a2, className: d().error, alert: true })
      ]
    });
  });
}

__m(__module,__exports,__require);
}