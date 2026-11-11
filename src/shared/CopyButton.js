function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { CopyButton: () => g });
  var r = n(95155), o = n(12115), a = n(25354), i = n(18310), s = n(80642), l = n(35484), u = n(99314), c = n(7770), d = n(55665), p = n(13858), f = n.n(p);
  let h = [...c.T.ease.standard], b = { duration: 0.16, ease: h }, y = { duration: 0.1, ease: h }, v = { duration: 0 }, m = { type: "spring", visualDuration: 0.22, bounce: 0 };
  function _({ reduced: e2 }) {
    return (0, r.jsx)("svg", {
      width: 16,
      height: 16,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.75,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: (0, r.jsx)(a.PY1.path, {
        d: "M4 12l5 5L20 6",
        initial: !e2 && { pathLength: 0 },
        animate: { pathLength: 1 },
        transition: { duration: 0.22, ease: h, delay: 0.04 }
      })
    });
  }
  function g({
    value: e2,
    label: t2 = "Copy",
    className: n2,
    iconOnly: c2 = false,
    variant: p2 = "outline",
    disabled: h2,
    onCopied: x
  }) {
    let { state: j, copy: C } = (0, d.q)(), P = (0, i.I)() ?? false, A = "copied" === j ? "Copied" : "error" === j ? "Failed" : t2, O = (0, o.useRef)({}), [w, k] = (0, o.useState)({});
    (0, o.useLayoutEffect)(() => {
      if (c2) return;
      let e3 = () => k(
        Object.fromEntries(
          Object.entries(O.current).map(([e4, t4]) => [e4, t4?.offsetWidth ?? 0])
        )
      );
      if (e3(), "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(e3);
      return Object.values(O.current).forEach((e4) => {
        e4 && t3.observe(e4);
      }), () => t3.disconnect();
    }, [t2, c2]);
    let R = w["copied" === j ? "copied" : "error" === j ? "error" : "idle"], [N, E] = (0, o.useState)(void 0);
    async function T() {
      await C(e2) && x?.();
    }
    return void 0 !== R && R !== N && E(R), (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsxs)("button", {
          type: "button",
          className: [
            f().button,
            c2 && f().iconOnly,
            "plain" === p2 && f().plain,
            n2
          ].filter(Boolean).join(" "),
          onClick: () => void T(),
          "aria-label": t2,
          "data-copy-state": j,
          disabled: h2,
          children: [
            (0, r.jsx)("span", {
              className: f().icon,
              "aria-hidden": "true",
              children: (0, r.jsx)(s.N, {
                initial: false,
                children: (0, r.jsx)(
                  a.PY1.span,
                  {
                    className: f().iconInner,
                    "data-state": j,
                    initial: P ? { opacity: 0 } : { opacity: 0, scale: 0.85 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, transition: P ? v : y },
                    transition: P ? v : b,
                    children: "copied" === j ? (0, r.jsx)(_, { reduced: P }) : "error" === j ? (0, r.jsx)(l.A, { size: 16, strokeWidth: 1.75 }) : (0, r.jsx)(u.A, { size: 16, strokeWidth: 1.75 })
                  },
                  j
                )
              })
            }),
            !c2 && (0, r.jsxs)(a.PY1.span, {
              className: f().label,
              "aria-hidden": "true",
              initial: false,
              animate: R ? { width: R } : void 0,
              transition: P || void 0 === N ? v : m,
              children: [
                (0, r.jsx)("span", {
                  ref: (e3) => {
                    O.current.idle = e3;
                  },
                  className: f().measure,
                  children: t2
                }),
                (0, r.jsx)("span", {
                  ref: (e3) => {
                    O.current.copied = e3;
                  },
                  className: f().measure,
                  children: "Copied"
                }),
                (0, r.jsx)("span", {
                  ref: (e3) => {
                    O.current.error = e3;
                  },
                  className: f().measure,
                  children: "Failed"
                }),
                (0, r.jsx)(s.N, {
                  initial: false,
                  children: (0, r.jsx)(
                    a.PY1.span,
                    {
                      className: f().text,
                      initial: P ? { opacity: 0 } : { opacity: 0, y: 2 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, transition: P ? v : y },
                      transition: P ? v : b,
                      children: A
                    },
                    A
                  )
                })
              ]
            })
          ]
        }),
        (0, r.jsx)("span", {
          className: f().srOnly,
          role: "status",
          "aria-live": "polite",
          children: "idle" === j ? "" : "error" === j ? `${t2}: Could not copy` : `${t2}: Copied`
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
}