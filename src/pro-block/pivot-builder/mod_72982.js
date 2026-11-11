function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { p: () => k });
  var s = a(95155), i = a(12115), n = a(79196), r = a(25354), l = a(28245), o = a(92171), d = a(18310), c = a(80642), u = a(14225), p = a(7770), h = a(86014), m = a.n(h);
  let b = { duration: p.T.duration.fast, ease: [...p.T.ease.standard] }, g = { opacity: 0, y: "0.3em", filter: `blur(${p.T.blur.soft}px)` }, x = {
    opacity: 0,
    y: "-0.3em",
    filter: `blur(${p.T.blur.subtle}px)`,
    transition: b
  }, _ = { opacity: 0, scale: 0.6, filter: `blur(${p.T.blur.subtle}px)` }, j = { opacity: 1, y: "0em", scale: 1, filter: "blur(0px)" }, y = { opacity: 0, transition: { duration: p.T.duration.instant } };
  function f(e2) {
    let t2 = (0, n.tF)();
    return (0, s.jsx)(r.PY1.span, {
      ...e2,
      "aria-hidden": !t2 || e2["aria-hidden"]
    });
  }
  function v({ reduce: e2, morphKey: t2, children: a2 }) {
    let n2 = (0, i.useRef)(null), d2 = (0, i.useRef)(null), c2 = (0, l.d)("auto"), u2 = (0, i.useRef)(0);
    return (0, i.useLayoutEffect)(() => {
      u2.current = performance.now();
    }, [t2]), (0, i.useEffect)(() => {
      let t3, a3, s2 = d2.current;
      if (!s2 || "u" < typeof ResizeObserver) return;
      let i2 = () => {
        c2.jump("auto"), n2.current && Object.assign(n2.current.style, {
          overflow: "",
          height: "auto"
        });
      }, r2 = new ResizeObserver(([r3]) => {
        if (!r3) return;
        let l2 = r3.borderBoxSize?.[0]?.blockSize ?? s2.offsetHeight, d3 = c2.get(), h2 = "number" == typeof d3 ? d3 : t3;
        if (t3 = l2, a3?.stop(), e2 || void 0 === h2 || h2 === l2 || performance.now() - u2.current > 120)
          return i2();
        n2.current && Object.assign(n2.current.style, {
          overflow: "hidden",
          height: `${h2}px`
        }), a3 = (0, o.i)(c2, [h2, l2], {
          ...p.T.spring.smooth,
          onComplete: i2
        });
      });
      return r2.observe(s2), () => {
        r2.disconnect(), a3?.stop();
      };
    }, [c2, e2]), (0, s.jsx)(r.PY1.div, {
      ref: n2,
      className: m().frame,
      style: { height: c2 },
      children: (0, s.jsx)("div", {
        ref: d2,
        className: m().copy,
        children: a2
      })
    });
  }
  function k({
    title: e2,
    description: t2,
    action: a2,
    icon: n2,
    className: r2,
    label: l2
  }) {
    let o2 = (0, d.I)(), h2 = n2 ?? (0, s.jsx)(u.A, { width: 24, height: 24, strokeWidth: 1.5 }), w = o2 ? { duration: p.T.duration.instant } : { duration: p.T.duration.standard, ease: [...p.T.ease.enter] }, N = {
      initial: o2 ? { opacity: 0 } : g,
      animate: j,
      exit: o2 ? y : x,
      transition: w
    };
    return (0, s.jsxs)("section", {
      className: [m().root, r2].filter(Boolean).join(" "),
      "aria-label": l2,
      children: [
        (0, s.jsx)("div", {
          className: m().icon,
          "aria-hidden": "true",
          children: (0, s.jsx)(c.N, {
            mode: "popLayout",
            initial: false,
            children: (0, s.jsx)(
              f,
              {
                className: m().glyph,
                initial: o2 ? { opacity: 0 } : _,
                animate: j,
                exit: o2 ? y : { ..._, transition: b },
                transition: o2 ? w : p.T.spring.snappy,
                children: h2
              },
              (function(e3) {
                if (!(0, i.isValidElement)(e3)) return "icon";
                let t3 = e3.type;
                return "string" == typeof t3 ? t3 : t3.displayName ?? t3.name ?? "icon";
              })(h2)
            )
          })
        }),
        (0, s.jsxs)(v, {
          reduce: o2,
          morphKey: `${e2}
${t2}`,
          children: [
            (0, s.jsx)("h3", {
              children: (0, s.jsx)(c.N, {
                mode: "popLayout",
                initial: false,
                children: (0, s.jsx)(
                  f,
                  { className: m().line, ...N, children: e2 },
                  e2
                )
              })
            }),
            (0, s.jsx)("p", {
              children: (0, s.jsx)(c.N, {
                mode: "popLayout",
                initial: false,
                children: (0, s.jsx)(
                  f,
                  { className: m().line, ...N, children: t2 },
                  t2
                )
              })
            })
          ]
        }),
        a2 && (0, s.jsx)("div", { className: m().action, children: a2 })
      ]
    });
  }
}

__m(__module,__exports,__require);
}