function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { L: () => h });
  var s = a(95155), r = a(12115), i = a(18310), n = a(80642), o = a(25354), l = a(65377), d = a(9005), c = a(7770), u = a(79698), p = a.n(u);
  let h = (0, r.forwardRef)(function({ label: e2, value: t2, onValueChange: a2, id: u2, className: h2, ...m }, y) {
    let g = (0, r.useId)(), w = u2 ?? g, x = (0, i.I)(), f = (0, r.useRef)(null);
    return (0, s.jsxs)("div", {
      className: p().field,
      children: [
        (0, s.jsx)("label", { htmlFor: w, children: e2 }),
        (0, s.jsxs)("div", {
          className: p().shell,
          "data-filled": t2 ? "true" : void 0,
          children: [
            (0, s.jsx)(l.A, { width: 18, height: 18, "aria-hidden": "true" }),
            (0, s.jsx)("input", {
              ...m,
              ref: (e3) => {
                f.current = e3, "function" == typeof y ? y(e3) : y && (y.current = e3);
              },
              id: w,
              type: "search",
              value: t2,
              onChange: (e3) => a2(e3.target.value),
              className: [p().input, h2].filter(Boolean).join(" ")
            }),
            (0, s.jsx)("span", {
              className: p().clearSlot,
              children: (0, s.jsx)(n.N, {
                initial: false,
                children: t2 ? (0, s.jsx)(
                  o.PY1.button,
                  {
                    type: "button",
                    tabIndex: 0,
                    onClick: function() {
                      a2(""), f.current?.focus();
                    },
                    "aria-label": "Clear search",
                    initial: x ? { opacity: 0 } : {
                      opacity: 0,
                      scale: 0.8,
                      filter: `blur(${c.T.blur.subtle}px)`
                    },
                    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
                    exit: x ? { opacity: 0, transition: { duration: 0 } } : {
                      opacity: 0,
                      scale: 0.8,
                      filter: `blur(${c.T.blur.subtle}px)`,
                      transition: {
                        duration: c.T.duration.instant,
                        ease: [...c.T.ease.standard]
                      }
                    },
                    whileTap: x ? void 0 : {
                      scale: 0.96,
                      transition: {
                        duration: c.T.duration.instant,
                        ease: [...c.T.ease.standard]
                      }
                    },
                    transition: x ? { duration: c.T.duration.instant } : {
                      ...c.T.spring.snappy,
                      opacity: { duration: c.T.duration.fast },
                      filter: { duration: c.T.duration.fast }
                    },
                    children: (0, s.jsx)(d.A, {
                      width: 16,
                      height: 16,
                      "aria-hidden": "true"
                    })
                  },
                  "clear"
                ) : null
              })
            })
          ]
        })
      ]
    });
  });
}

__m(__module,__exports,__require);
}