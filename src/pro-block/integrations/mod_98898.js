function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { Uz: () => j, _s: () => x, cp: () => y, iX: () => _, zj: () => N });
  var i = t(95155), s = t(43146), r = t(12115), n = t(18310), o = t(80642), l = t(25354), c = t(28245), d = t(92171), h = t(9005), m = t(7770), u = t(17970), p = t.n(u);
  function _(e2) {
    let [a2, t2] = (0, r.useState)(e2);
    return null != e2 && e2 !== a2 && t2(e2), e2 ?? a2;
  }
  let g = (0, r.createContext)(null);
  function x({ open: e2, defaultOpen: a2 = false, onOpenChange: t2, ...n2 }) {
    let [o2, l2] = (0, r.useState)(a2), [c2, d2] = (0, r.useState)(false), h2 = (0, r.useRef)(0), m2 = e2 ?? o2, u2 = (0, r.useCallback)(
      (a3) => {
        d2(false), a3 && (h2.current = performance.now()), void 0 === e2 && l2(a3), t2?.(a3);
      },
      [e2, t2]
    ), p2 = (0, r.useCallback)(() => {
      u2(false), d2(true);
    }, [u2]), _2 = (0, r.useMemo)(
      () => ({ open: m2, flung: c2, setOpen: u2, fling: p2, openedAt: h2 }),
      [m2, c2, u2, p2]
    );
    return (0, i.jsx)(g.Provider, {
      value: _2,
      children: (0, i.jsx)(s.bL, { ...n2, open: m2, onOpenChange: u2 })
    });
  }
  let j = s.l9, y = s.bm, f = { duration: m.T.duration.instant }, b = {
    duration: m.T.duration.standard,
    times: [0, 0.65, 1],
    ease: "linear"
  }, v = {
    default: {
      duration: m.T.duration.standard,
      ease: [...m.T.ease.standard]
    },
    opacity: b
  }, w = {
    default: { ...m.T.spring.smooth, visualDuration: m.T.duration.standard },
    opacity: b
  };
  function k({ text: e2 }) {
    let a2 = (0, n.I)();
    return (0, i.jsx)(o.N, {
      mode: "popLayout",
      initial: false,
      children: (0, i.jsx)(
        l.PY1.span,
        {
          className: p().swap,
          initial: !a2 && {
            opacity: 0,
            y: "0.3em",
            filter: `blur(${m.T.blur.soft}px)`
          },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          exit: a2 ? { opacity: 0, transition: { duration: 0 } } : {
            opacity: 0,
            y: "-0.3em",
            filter: `blur(${m.T.blur.subtle}px)`,
            transition: {
              duration: m.T.duration.fast,
              ease: [...m.T.ease.standard]
            }
          },
          transition: {
            duration: m.T.duration.standard,
            ease: [...m.T.ease.enter]
          },
          children: e2
        },
        e2
      )
    });
  }
  function N({
    title: e2,
    description: a2,
    children: t2,
    side: u2 = "right",
    container: _2,
    className: x2,
    onInteractOutside: j2,
    ...y2
  }) {
    let b2 = (0, r.useContext)(g), T = (0, n.I)(), C = (0, r.useRef)(null), S = (0, c.d)(0), L = (0, r.useRef)(null), P = "left" === u2 || "right" === u2 ? "x" : "y", I = "right" === u2 || "bottom" === u2 ? 1 : -1, z = { [P]: `${100 * I}%` }, A = [p().content, x2].filter(Boolean).join(" "), B = null !== b2 && !T, M = () => ("x" === P ? C.current?.offsetWidth : C.current?.offsetHeight) ?? 480, $ = (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsxs)(l.PY1.div, {
          className: [p().header, B ? p().handle : ""].filter(Boolean).join(" "),
          onPanStart: function(e3) {
            let a3 = e3.target instanceof Element ? e3.target : null;
            if (!B || a3?.closest(
              "button, a, input, select, textarea, [role='button']"
            ))
              return;
            let t3 = S.get();
            L.current = "number" == typeof t3 ? t3 : parseFloat(t3) / 100 * M(), S.stop();
          },
          onPan: function(e3, a3) {
            if (null === L.current) return;
            let t3 = (L.current + a3.offset[P]) * I;
            S.set(I * (t3 >= 0 ? t3 : -Math.sqrt(-t3)));
          },
          onPanEnd: function(e3, a3) {
            if (null === L.current) return;
            L.current = null;
            let t3 = Number(S.get()) * I;
            t3 > M() / 3 || t3 > 0 && a3.velocity[P] * I > 500 ? b2?.fling() : (0, d.i)(S, 0, m.T.spring.snappy);
          },
          children: [
            (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)(s.hE, {
                  className: p().title,
                  children: (0, i.jsx)(k, { text: e2 })
                }),
                a2 ? (0, i.jsx)(s.VY, {
                  className: p().description,
                  children: (0, i.jsx)(k, { text: a2 })
                }) : null
              ]
            }),
            (0, i.jsx)(s.bm, {
              className: p().close,
              "aria-label": "Close drawer",
              children: (0, i.jsx)(h.A, {
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            })
          ]
        }),
        (0, i.jsx)("div", { className: p().body, children: t2 })
      ]
    });
    return null === b2 ? (0, i.jsxs)(s.ZL, {
      container: _2,
      children: [
        (0, i.jsx)(s.hJ, {
          className: `${p().overlay} ${p().keyframes}`,
          "data-contained": _2 ? "" : void 0
        }),
        (0, i.jsx)(s.UC, {
          ...y2,
          onInteractOutside: j2,
          "data-side": u2,
          "data-contained": _2 ? "" : void 0,
          className: `${A} ${p().keyframes}`,
          children: $
        })
      ]
    }) : (0, i.jsx)(o.N, {
      custom: b2.flung,
      children: b2.open && (0, i.jsxs)(
        s.ZL,
        {
          forceMount: true,
          container: _2,
          children: [
            (0, i.jsx)(s.hJ, {
              asChild: true,
              forceMount: true,
              children: (0, i.jsx)(l.PY1.div, {
                className: p().overlay,
                "data-contained": _2 ? "" : void 0,
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: {
                  opacity: 0,
                  transition: T ? f : {
                    duration: m.T.duration.fast,
                    ease: [...m.T.ease.standard]
                  }
                },
                transition: T ? f : {
                  duration: m.T.duration.standard,
                  ease: [...m.T.ease.enter]
                }
              })
            }),
            (0, i.jsx)(s.UC, {
              ...y2,
              asChild: true,
              forceMount: true,
              onInteractOutside: (e3) => {
                j2?.(e3), e3.detail.originalEvent.timeStamp < b2.openedAt.current && e3.preventDefault();
              },
              children: (0, i.jsx)(l.PY1.div, {
                ref: C,
                className: A,
                "data-side": u2,
                "data-contained": _2 ? "" : void 0,
                style: { [P]: S },
                variants: {
                  exit: (e3) => T ? { opacity: 0, transition: f } : {
                    ...z,
                    opacity: [1, 1, 0],
                    transition: e3 ? w : v
                  }
                },
                initial: T ? { opacity: 0 } : { ...z, opacity: 1 },
                animate: T ? { opacity: 1 } : { [P]: 0, opacity: 1 },
                exit: "exit",
                transition: T ? f : m.T.spring.smooth,
                children: $
              })
            })
          ]
        },
        "drawer"
      )
    });
  }
}

__m(__module,__exports,__require);
}