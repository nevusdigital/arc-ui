function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { n: () => k });
  var r = a(95155), n = a(12115), s = a(18310), i = a(61792), o = a(60340), l = a(28245), d = a(55809), c = a(92171), u = a(80642), h = a(25354), p = a(7770), m = a(88594), _ = a.n(m);
  let b = () => () => {
  }, y = () => true, f = () => false, w = [
    [-1, 0],
    [-0.5, 0.5],
    [-0.2, 0.9],
    [0, 1],
    [0.2, 0.9],
    [0.5, 0.5],
    [1, 0]
  ], x = (e2) => `${(100 * e2).toFixed(1)}%`;
  function k({
    children: e2,
    active: t2 = true,
    duration: a2 = 1.8,
    as: m2 = "span",
    className: g,
    id: v
  }) {
    let j = (0, n.useRef)(null), N = (0, s.I)(), T = !!((0, n.useSyncExternalStore)(b, y, f) && N), S = (0, i.W)(j, { margin: "64px" }), E = (0, o.h)(), C = (0, l.d)(0), L = (0, l.d)(+!t2), $ = (0, d.G)(() => {
      var e3, t3;
      let a3, r2;
      return e3 = C.get(), t3 = L.get(), a3 = `color-mix(in oklab, var(--ts-highlight) ${x(t3)}, var(--ts-base))`, r2 = w.map(
        ([t4, r3]) => `color-mix(in oklab, var(--ts-highlight) ${x(r3)}, ${a3}) calc(${(100 * e3).toFixed(2)}% + ${((2 * e3 - 1 + t4) * 2.2).toFixed(3)}em)`
      ), `linear-gradient(90deg, ${a3}, ${r2.join(", ")}, ${a3})`;
    }), A = t2 && !T && S && E, O = (0, n.useRef)(0);
    return (0, n.useEffect)(() => {
      let e3;
      if (T && C.jump(0), !A) return;
      let t3 = (r2) => {
        C.get() >= 1 && C.jump(0), e3 = (0, c.i)(C, 1, {
          duration: a2 * (1 - C.get()),
          delay: r2,
          ease: "linear",
          onComplete: () => t3(0.32 * a2)
        });
      };
      return t3(C.get() > 0 ? 0 : 0.12), () => e3?.stop();
    }, [A, T, a2, C]), (0, n.useEffect)(() => {
      if (t2) {
        let e4 = (0, c.i)(L, 0, {
          duration: T ? 0 : p.T.duration.standard,
          ease: [...p.T.ease.standard]
        });
        return () => e4.stop();
      }
      let e3 = C.get(), r2 = !T && e3 > 0 && e3 < 1 ? (0, c.i)(C, 1, {
        duration: Math.min(0.42, a2 * (1 - e3) * 0.5),
        ease: [...p.T.ease.enter]
      }) : void 0, n2 = (0, c.i)(L, 1, {
        duration: T ? p.T.duration.instant : 0.36,
        ease: [...p.T.ease.standard]
      });
      return () => {
        r2?.stop(), n2.stop();
      };
    }, [t2, T, a2, C, L]), (0, n.useLayoutEffect)(() => {
      let e3 = j.current;
      if (!e3) return;
      let t3 = !!e3.style.width, a3 = e3.getBoundingClientRect().width;
      e3.style.width = "";
      let r2 = e3.getBoundingClientRect().width, n2 = t3 ? a3 : O.current;
      if (O.current = r2, T || !n2 || 0.5 > Math.abs(n2 - r2))
        return void delete e3.dataset.sizing;
      e3.dataset.sizing = "";
      let s2 = (0, c.i)(
        e3,
        { width: [n2, r2] },
        {
          ...p.T.spring.morph,
          onComplete: () => {
            e3.style.width = "", delete e3.dataset.sizing;
          }
        }
      );
      return () => s2.stop();
    }, [e2, T]), (0, n.useEffect)(() => {
      let e3 = j.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => {
        e3.style.width || (O.current = e3.getBoundingClientRect().width);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, r.jsx)(m2, {
      id: v,
      className: [_().shimmer, g].filter(Boolean).join(" "),
      "data-state": t2 ? "active" : "idle",
      "aria-busy": t2 || void 0,
      children: (0, r.jsx)("span", {
        ref: j,
        className: _().stage,
        children: (0, r.jsx)(u.N, {
          mode: "popLayout",
          initial: false,
          children: (0, r.jsx)(
            h.PY1.span,
            {
              className: _().label,
              style: { backgroundImage: $ },
              initial: T ? { opacity: 0 } : {
                opacity: 0,
                y: "0.3em",
                filter: `blur(${p.T.blur.soft}px)`
              },
              animate: T ? { opacity: 1 } : { opacity: 1, y: "0em", filter: "blur(0px)" },
              exit: T ? {
                opacity: 0,
                transition: { duration: p.T.duration.instant }
              } : {
                opacity: 0,
                y: "-0.24em",
                filter: `blur(${p.T.blur.subtle}px)`,
                transition: {
                  duration: p.T.duration.fast,
                  ease: [...p.T.ease.standard]
                }
              },
              transition: {
                duration: T ? p.T.duration.instant : p.T.duration.standard,
                ease: [...p.T.ease.enter]
              },
              children: e2
            },
            e2
          )
        })
      })
    });
  }
}

__m(__module,__exports,__require);
}