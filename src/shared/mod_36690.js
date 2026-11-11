function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { m: () => _ });
  var s = a(95155), i = a(12115), n = a(40623), r = a(18310), l = a(25354), o = a(80642), d = a(7770), c = a(98874), u = a.n(c);
  let p = false, h = 0, m = 0, b = /* @__PURE__ */ new Set(), g = {
    subscribe: (e2) => (b.add(e2), () => {
      b.delete(e2);
    }),
    get: () => p,
    set(e2) {
      p !== e2 && (p = e2, b.forEach((e3) => e3()));
    },
    opened() {
      h += 1, window.clearTimeout(m), g.set(true);
    },
    closed() {
      (h = Math.max(0, h - 1)) || (window.clearTimeout(m), m = window.setTimeout(() => g.set(false), 300));
    }
  };
  function x({ text: e2 }) {
    let t2 = (0, r.I)(), a2 = (0, i.useRef)(null), n2 = (0, i.useRef)(null), [c2, p2] = (0, i.useState)(null);
    return (0, i.useLayoutEffect)(() => {
      let e3 = a2.current;
      if (!e3) return;
      let t3 = new ResizeObserver(([t4]) => {
        if (!t4) return;
        let a3 = t4.borderBoxSize?.[0], s2 = e3.textContent, i2 = null !== n2.current && n2.current !== s2;
        n2.current = s2, p2({
          width: Math.ceil(a3?.inlineSize ?? e3.offsetWidth),
          height: Math.ceil(a3?.blockSize ?? e3.offsetHeight),
          animate: i2
        });
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, s.jsxs)(l.PY1.span, {
      className: u().text,
      initial: false,
      animate: c2 ? { width: c2.width, height: c2.height } : void 0,
      transition: c2?.animate && !t2 ? d.T.spring.morph : { duration: 0 },
      children: [
        (0, s.jsx)("span", {
          ref: a2,
          className: u().measure,
          "aria-hidden": "true",
          children: e2
        }),
        (0, s.jsx)(o.N, {
          mode: "popLayout",
          initial: false,
          children: (0, s.jsx)(
            l.PY1.span,
            {
              className: u().line,
              initial: !t2 && {
                opacity: 0,
                y: "0.3em",
                filter: `blur(${d.T.blur.soft}px)`
              },
              animate: { opacity: 1, y: 0, filter: "blur(0px)" },
              exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                opacity: 0,
                y: "-0.3em",
                filter: `blur(${d.T.blur.subtle}px)`,
                transition: {
                  duration: d.T.duration.instant,
                  ease: [...d.T.ease.standard]
                }
              },
              transition: {
                duration: d.T.duration.standard,
                ease: [...d.T.ease.enter]
              },
              children: e2
            },
            e2
          )
        })
      ]
    });
  }
  function _({ content: e2, children: t2, side: a2 = "top" }) {
    let r2 = (0, i.useSyncExternalStore)(g.subscribe, g.get, () => false), [l2, o2] = (0, i.useState)(false), [d2, c2] = (0, i.useState)(false);
    return (0, i.useEffect)(() => {
      if (l2) return g.opened(), g.closed;
    }, [l2]), (0, s.jsx)(n.Kq, {
      delayDuration: 250,
      skipDelayDuration: 0,
      children: (0, s.jsxs)(n.bL, {
        open: l2,
        delayDuration: 250 * !r2,
        onOpenChange: (e3) => {
          e3 && c2(g.get()), o2(e3);
        },
        children: [
          (0, s.jsx)(n.l9, { asChild: true, children: t2 }),
          (0, s.jsx)(n.ZL, {
            children: (0, s.jsx)(n.UC, {
              className: u().tooltip,
              "data-instant": d2 || void 0,
              side: a2,
              sideOffset: 8,
              collisionPadding: 12,
              children: "string" == typeof e2 || "number" == typeof e2 ? (0, s.jsx)(x, { text: String(e2) }) : e2
            })
          })
        ]
      })
    });
  }
}

__m(__module,__exports,__require);
}