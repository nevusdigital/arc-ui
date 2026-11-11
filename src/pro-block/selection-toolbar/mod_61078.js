function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { z: () => p });
  var a = i(95155), n = i(12115), s = i(92171), r = i(18310), o = i(25354), l = i(7770), d = i(39126), c = i.n(d);
  function u(e2, t2, i2, a2) {
    let n2 = t2 ? `${t2.offsetTop} ${t2.offsetHeight}` : "";
    if (!e2 || n2 === i2.current) return;
    let r2 = "" !== i2.current;
    if (i2.current = n2, !t2)
      return void (0, s.i)(e2, { opacity: 0 }, { duration: 0 });
    let o2 = { y: t2.offsetTop, height: t2.offsetHeight, opacity: 1 };
    a2 && r2 ? (0, s.i)(e2, o2, { ...l.T.spring.morph, opacity: { duration: 0 } }) : (Object.assign(e2.style, {
      transform: `translateY(${o2.y}px)`,
      height: `${o2.height}px`,
      opacity: "1"
    }), (0, s.i)(e2, o2, { duration: 0 }));
  }
  function p({ label: e2, options: t2, value: i2, onValueChange: s2, name: d2 }) {
    let h = (0, n.useId)(), m = (0, r.I)(), x = (0, n.useRef)(null), f = (0, n.useRef)(null), _ = (0, n.useRef)([]), b = (0, n.useRef)(null), y = (0, n.useRef)(""), g = t2.findIndex((e3) => e3.value === i2);
    return (0, n.useLayoutEffect)(() => {
      u(
        f.current,
        _.current[g],
        y,
        null !== b.current && b.current !== g && !m
      ), b.current = g, x.current?.setAttribute("data-ready", "");
    }, [g, m]), (0, n.useEffect)(() => {
      let e3 = x.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(
        () => u(f.current, _.current[b.current ?? -1], y, false)
      );
      return t3.observe(e3), _.current.forEach((e4) => e4 && t3.observe(e4)), () => t3.disconnect();
    }, [t2.length]), (0, a.jsxs)("fieldset", {
      className: c().group,
      children: [
        (0, a.jsx)("legend", { children: e2 }),
        (0, a.jsxs)("div", {
          ref: x,
          className: c().options,
          children: [
            (0, a.jsx)("span", {
              ref: f,
              className: c().highlight,
              "aria-hidden": "true"
            }),
            t2.map((e3, t3) => {
              let n2 = i2 === e3.value;
              return (0, a.jsxs)(
                "label",
                {
                  className: c().option,
                  ref: (e4) => {
                    _.current[t3] = e4;
                  },
                  children: [
                    (0, a.jsx)("input", {
                      type: "radio",
                      name: d2 ?? h,
                      value: e3.value,
                      checked: n2,
                      onChange: () => s2(e3.value)
                    }),
                    (0, a.jsx)("span", {
                      className: c().mark,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(o.PY1.span, {
                        className: c().dot,
                        initial: false,
                        animate: n2 ? { scale: 1, opacity: 1 } : { scale: 0.4, opacity: 0 },
                        transition: m ? { duration: 0 } : {
                          ...l.T.spring.snappy,
                          opacity: {
                            duration: n2 ? l.T.duration.fast : l.T.duration.instant
                          }
                        }
                      })
                    }),
                    (0, a.jsxs)("span", {
                      children: [
                        (0, a.jsx)("strong", { children: e3.label }),
                        e3.description && (0, a.jsx)("small", { children: e3.description })
                      ]
                    })
                  ]
                },
                e3.value
              );
            })
          ]
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
}