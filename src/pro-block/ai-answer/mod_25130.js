function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { jc: () => y, sz: () => C });
  var s = n(95155), r = n(12115), i = n(40093), a = n(79196), o = n(28245), c = n(92171), l = n(25354), d = n(18310), u = n(80642), h = n(7770), p = n(80362), m = n.n(p);
  let j = [...h.T.ease.enter], x = [...h.T.ease.standard], f = { id: null, instant: false }, v = f, g = -1 / 0, _ = /* @__PURE__ */ new Set(), w = {
    subscribe: (e2) => (_.add(e2), () => {
      _.delete(e2);
    }),
    get: () => v,
    server: () => f,
    warm: () => null !== v.id || performance.now() - g < 300,
    open(e2) {
      v.id !== e2 && (v = { id: e2, instant: w.warm() }, _.forEach((e3) => e3()));
    },
    close(e2) {
      v.id === e2 && (v = f, g = performance.now(), _.forEach((e3) => e3()));
    }
  }, b = (0, r.forwardRef)(function({ instant: e2, reduced: t2, className: n2, style: i2, children: d2, ...u2 }, p2) {
    let [f2, v2] = (0, a.xQ)(), g2 = (0, r.useRef)(null), _2 = (0, o.d)(0), w2 = (0, o.d)(0), b2 = (0, o.d)(0), y2 = (0, o.d)(1), k2 = (0, o.d)(0), [C2] = (0, r.useState)(() => e2 || t2), T = (0, r.useCallback)(
      (e3) => {
        g2.current = e3, "function" == typeof p2 ? p2(e3) : p2 && (p2.current = e3);
      },
      [p2]
    );
    return (0, r.useEffect)(() => {
      let e3 = false, n3 = (e4) => {
        let t3 = g2.current?.dataset.side, n4 = C2 ? 0 : (1 - e4) * 4;
        w2.set("left" === t3 ? n4 : "right" === t3 ? -n4 : 0), b2.set("top" === t3 ? n4 : "bottom" === t3 ? -n4 : 0), y2.set(C2 ? 1 : 0.96 + 0.04 * e4);
      }, s2 = _2.on("change", n3);
      n3(_2.get());
      let r2 = f2 ? (0, c.i)(
        _2,
        1,
        C2 ? { duration: 0.14, ease: j } : h.T.spring.smooth
      ) : (0, c.i)(_2, 0, { duration: 0.12, ease: x }), i3 = f2 ? (0, c.i)(k2, 1, {
        duration: t2 ? 0.15 : C2 ? 0.09 : 0.16,
        ease: j
      }) : (0, c.i)(k2, 0, { duration: t2 ? 0.1 : 0.12, ease: x });
      return f2 || i3.then(() => {
        e3 || v2?.();
      }), () => {
        e3 = true, s2(), r2.stop(), i3.stop();
      };
    }, [f2, C2, t2, _2, w2, b2, y2, k2, v2]), (0, s.jsx)(l.PY1.div, {
      ...u2,
      ref: T,
      className: [m().card, n2].filter(Boolean).join(" "),
      style: { ...i2, x: w2, y: b2, scale: y2, opacity: k2 },
      children: d2
    });
  });
  function y({
    children: e2,
    content: t2,
    side: n2 = "bottom",
    align: a2 = "start",
    openDelay: o2 = 500,
    closeDelay: c2 = 140,
    className: l2
  }) {
    let h2 = (0, r.useId)(), p2 = `${h2}-card`, m2 = (0, r.useSyncExternalStore)(w.subscribe, w.get, w.server), j2 = m2.id === h2, x2 = (0, d.I)() ?? false, f2 = (0, r.useRef)(null), v2 = (0, r.useRef)({ open: 0, close: 0 }), g2 = (0, r.useRef)({ trigger: false, card: false, focus: false }), _2 = (0, r.useRef)(false), k2 = (0, r.useRef)("");
    (0, r.useEffect)(() => {
      let e3 = v2.current;
      return () => {
        window.clearTimeout(e3.open), window.clearTimeout(e3.close), w.close(h2);
      };
    }, [h2]);
    let C2 = () => {
      window.clearTimeout(v2.current.open), window.clearTimeout(v2.current.close);
    }, T = () => {
      C2(), _2.current = false, w.open(h2);
    }, N = () => {
      C2(), w.close(h2);
    }, E = () => {
      window.clearTimeout(v2.current.open);
      let { trigger: e3, card: t3, focus: n3 } = g2.current;
      e3 || t3 || n3 || (window.clearTimeout(v2.current.close), v2.current.close = window.setTimeout(() => w.close(h2), c2));
    };
    return (0, s.jsxs)(i.bL, {
      open: j2,
      onOpenChange: (e3) => {
        e3 || N();
      },
      children: [
        (0, s.jsx)(i.Mz, {
          asChild: true,
          ref: f2,
          "aria-describedby": j2 ? p2 : void 0,
          "data-hover-card": j2 ? "open" : "closed",
          onPointerEnter: (e3) => {
            "touch" !== e3.pointerType && (g2.current.trigger = true, window.clearTimeout(v2.current.close), _2.current || w.get().id === h2 || (window.clearTimeout(v2.current.open), v2.current.open = window.setTimeout(
              () => w.open(h2),
              w.warm() ? 80 : o2
            )));
          },
          onPointerLeave: (e3) => {
            "touch" !== e3.pointerType && (g2.current.trigger = false, _2.current = false, E());
          },
          onPointerDown: (e3) => {
            k2.current = e3.pointerType;
          },
          onClick: () => {
            let e3 = w.get().id === h2;
            "touch" === k2.current ? e3 ? N() : T() : e3 || T(), k2.current = "";
          },
          onFocus: (e3) => {
            e3.currentTarget.matches(":focus-visible") && (g2.current.focus = true, T());
          },
          onBlur: () => {
            g2.current.focus = false, _2.current = false, E();
          },
          children: e2
        }),
        (0, s.jsx)(u.N, {
          children: j2 && (0, s.jsx)(
            i.ZL,
            {
              forceMount: true,
              children: (0, s.jsx)(i.UC, {
                forceMount: true,
                asChild: true,
                id: p2,
                role: "tooltip",
                side: n2,
                align: a2,
                sideOffset: 8,
                collisionPadding: 12,
                onOpenAutoFocus: (e3) => e3.preventDefault(),
                onCloseAutoFocus: (e3) => e3.preventDefault(),
                onEscapeKeyDown: () => {
                  _2.current = true;
                },
                onInteractOutside: (e3) => {
                  f2.current?.contains(e3.target) && e3.preventDefault();
                },
                onPointerEnter: (e3) => {
                  "touch" !== e3.pointerType && (g2.current.card = true, window.clearTimeout(v2.current.close));
                },
                onPointerLeave: (e3) => {
                  "touch" !== e3.pointerType && (g2.current.card = false, E());
                },
                children: (0, s.jsx)(b, {
                  instant: m2.instant,
                  reduced: x2,
                  className: l2,
                  children: t2
                })
              })
            },
            "card"
          )
        })
      ]
    });
  }
  function k({ src: e2 }) {
    let t2 = (0, r.useRef)(null);
    return (0, r.useLayoutEffect)(() => {
      let e3 = t2.current;
      e3 && !e3.complete && (e3.dataset.loading = "");
    }, [e2]), (0, s.jsx)("img", {
      ref: t2,
      src: e2,
      alt: "",
      width: 48,
      height: 48,
      decoding: "async",
      onLoad: (e3) => {
        delete e3.currentTarget.dataset.loading;
      }
    });
  }
  function C({ name: e2, role: t2, avatar: n2, bio: r2, stats: i2 = [], meta: a2 }) {
    let o2 = (0, d.I)() ?? false, c2 = e2.trim().split(/\s+/).slice(0, 2).map((e3) => e3[0]?.toUpperCase()).join(""), u2 = (e3) => o2 ? {} : {
      initial: { opacity: 0, y: 4 },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration: h.T.duration.standard,
        ease: j,
        delay: 0.04 + e3 * h.T.stagger.item
      }
    };
    return (0, s.jsxs)("div", {
      className: m().profile,
      children: [
        (0, s.jsxs)(l.PY1.div, {
          className: m().head,
          ...u2(0),
          children: [
            (0, s.jsx)("span", {
              className: m().avatar,
              "aria-hidden": "true",
              children: "string" == typeof n2 ? (0, s.jsx)(k, { src: n2 }) : n2 ?? (0, s.jsx)("span", {
                className: m().initials,
                children: c2
              })
            }),
            (0, s.jsxs)("span", {
              className: m().identity,
              children: [
                (0, s.jsx)("span", { className: m().name, children: e2 }),
                t2 && (0, s.jsx)("span", { className: m().role, children: t2 })
              ]
            })
          ]
        }),
        r2 && (0, s.jsx)(l.PY1.p, { className: m().bio, ...u2(1), children: r2 }),
        i2.length > 0 && (0, s.jsx)(l.PY1.dl, {
          className: m().stats,
          ...u2(2),
          children: i2.map(
            (e3) => (0, s.jsxs)(
              "div",
              {
                className: m().stat,
                children: [
                  (0, s.jsx)("dt", { children: e3.label }),
                  (0, s.jsx)("dd", { children: e3.value })
                ]
              },
              e3.label
            )
          )
        }),
        a2 && (0, s.jsx)(l.PY1.div, { className: m().meta, ...u2(3), children: a2 })
      ]
    });
  }
}

__m(__module,__exports,__require);
}