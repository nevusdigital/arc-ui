function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { tz: () => x });
  var r = n(95155), a = n(47650), i = n(12115), o = n(18310), s = n(80642), l = n(25354), u = n(64577), d = n(59680), c = n(99314), m = n(25879), p = n(7770), f = n(83402), h = n.n(f);
  function _(e2, t2, n2, r2) {
    let a2 = Math.max(8, Math.min(e2, window.innerWidth - n2 - 8)), i2 = Math.max(8, Math.min(t2, window.innerHeight - r2 - 8));
    return {
      x: a2,
      y: i2,
      originX: Math.max(0, Math.min(n2, e2 - a2)),
      originY: Math.max(0, Math.min(r2, t2 - i2))
    };
  }
  function x({ children: e2, items: t2, label: n2 = "Context menu" }) {
    let c2 = (0, o.I)(), [m2, f2] = (0, i.useState)(false), [g, y] = (0, i.useState)(false), [w, v] = (0, i.useState)({ x: 0, y: 0, originX: 0, originY: 0, key: 0 }), [b, T] = (0, i.useState)(null), j = (0, i.useRef)(null), N = (0, i.useRef)(null), k = (0, i.useRef)(false), C = (0, i.useRef)(0), M = (0, i.useRef)(false), P = (0, i.useRef)(false), E = (0, i.useRef)({ x: 0, y: 0 });
    function S(e3, n3) {
      E.current = { x: e3, y: n3 };
      let r2 = _(e3, n3, 208, Math.min(300, 34 * t2.length + 12));
      v((e4) => ({ ...r2, key: e4.key + 1 })), window.clearTimeout(C.current), k.current = false, T(null), y(true), f2(true);
    }
    function L(e3, t3) {
      window.clearTimeout(C.current);
      let n3 = {
        index: Number(e3.dataset.index),
        top: e3.offsetTop,
        height: e3.offsetHeight,
        danger: "danger" === e3.dataset.tone
      };
      T((e4) => ({ ...n3, glide: t3 && null !== e4 }));
    }
    return (0, i.useEffect)(() => {
      P.current = m2;
    }, [m2]), (0, i.useLayoutEffect)(() => {
      let e3 = j.current;
      if (!m2 || !e3) return;
      let t3 = _(E.current.x, E.current.y, e3.offsetWidth, e3.offsetHeight);
      v(
        (e4) => e4.x === t3.x && e4.y === t3.y && e4.originX === t3.originX && e4.originY === t3.originY ? e4 : { ...t3, key: e4.key }
      );
    }, [m2, w.key]), (0, i.useEffect)(() => () => window.clearTimeout(C.current), []), (0, i.useEffect)(() => {
      if (!m2) return;
      j.current?.querySelector('[role="menuitem"]:not(:disabled)')?.focus({ preventScroll: true });
      let e3 = (e4) => {
        j.current?.contains(e4.target) || f2(false);
      }, t3 = (e4) => {
        e4.target instanceof Node && j.current?.contains(e4.target) || f2(false);
      };
      return document.addEventListener("pointerdown", e3), window.addEventListener("scroll", t3, true), window.addEventListener("resize", t3), () => {
        document.removeEventListener("pointerdown", e3), window.removeEventListener("scroll", t3, true), window.removeEventListener("resize", t3);
      };
    }, [m2, w.key]), (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)("div", {
          ref: N,
          className: h().target,
          tabIndex: 0,
          onPointerDown: (e3) => {
            M.current = m2 && 0 === e3.button;
          },
          onClick: function() {
            if (M.current) {
              M.current = false;
              return;
            }
            let e3 = N.current?.getBoundingClientRect();
            e3 && S(e3.left + 12, e3.bottom + 8);
          },
          onContextMenu: (e3) => {
            e3.preventDefault(), S(e3.clientX, e3.clientY);
          },
          onKeyDown: function(e3) {
            if ("ContextMenu" === e3.key || e3.shiftKey && "F10" === e3.key) {
              e3.preventDefault();
              let t3 = N.current?.getBoundingClientRect();
              t3 && S(t3.left + 12, t3.bottom + 8);
            }
          },
          "aria-label": n2,
          "aria-haspopup": "menu",
          "aria-expanded": m2,
          children: e2
        }),
        g ? (0, a.createPortal)(
          (0, r.jsx)(s.N, {
            children: m2 && (0, r.jsxs)(
              l.PY1.div,
              {
                ref: (e3) => {
                  e3 && (j.current = e3);
                },
                className: h().menu,
                role: "menu",
                "aria-label": n2,
                tabIndex: -1,
                style: {
                  left: w.x,
                  top: w.y,
                  transformOrigin: `${w.originX}px ${w.originY}px`
                },
                onKeyDown: function(e3) {
                  let n3, r2 = t2.map((e4, t3) => ({ item: e4, index: t3 })).filter(({ item: e4 }) => !e4.disabled), a2 = document.activeElement?.getAttribute(
                    "data-index"
                  ), i2 = r2.findIndex(({ index: e4 }) => String(e4) === a2);
                  "ArrowDown" === e3.key && (n3 = (i2 + 1) % r2.length), "ArrowUp" === e3.key && (n3 = i2 < 0 ? r2.length - 1 : (i2 - 1 + r2.length) % r2.length), "Home" === e3.key && (n3 = 0), "End" === e3.key && (n3 = r2.length - 1), void 0 !== n3 && r2.length && (e3.preventDefault(), e3.currentTarget.querySelector(`[data-index="${r2[n3].index}"]`)?.focus()), "Escape" === e3.key && (e3.preventDefault(), f2(false), N.current?.focus());
                },
                onFocus: function(e3) {
                  let t3 = e3.target instanceof HTMLElement ? e3.target.closest('[role="menuitem"]') : null;
                  if (t3) {
                    !k.current && t3.matches(":focus-visible") && L(t3, false);
                    return;
                  }
                  window.clearTimeout(C.current), C.current = window.setTimeout(
                    () => T(null),
                    70 * !!k.current
                  );
                },
                onPointerMoveCapture: () => {
                  k.current = true;
                },
                onKeyDownCapture: () => {
                  k.current = false;
                },
                onPointerLeave: (e3) => {
                  P.current && e3.currentTarget.focus({ preventScroll: true });
                },
                initial: c2 ? { opacity: 0 } : { opacity: 0, scale: 0.96 },
                animate: { opacity: 1, scale: 1 },
                exit: c2 ? {
                  opacity: 0,
                  transition: { duration: p.T.duration.instant }
                } : {
                  opacity: 0,
                  scale: 0.98,
                  transition: {
                    duration: p.T.duration.instant,
                    ease: [...p.T.ease.standard]
                  }
                },
                transition: c2 ? { duration: p.T.duration.instant } : {
                  default: p.T.spring.snappy,
                  opacity: {
                    duration: p.T.duration.fast,
                    ease: [...p.T.ease.enter]
                  }
                },
                children: [
                  (0, r.jsx)(l.PY1.span, {
                    className: h().highlight,
                    "data-tone": b?.danger ? "danger" : void 0,
                    "aria-hidden": "true",
                    initial: false,
                    animate: b ? { y: b.top, height: b.height, opacity: 1 } : { opacity: 0 },
                    transition: {
                      default: b?.glide && !c2 ? p.T.spring.snappy : { duration: 0 },
                      opacity: {
                        duration: c2 ? 0 : p.T.duration.instant
                      }
                    }
                  }),
                  t2.map(
                    (e3, t3) => (0, r.jsxs)(
                      "button",
                      {
                        type: "button",
                        role: "menuitem",
                        tabIndex: -1,
                        "data-index": t3,
                        "data-tone": e3.destructive ? "danger" : void 0,
                        style: { "--i": t3 },
                        disabled: e3.disabled,
                        className: [
                          h().item,
                          e3.destructive ? h().destructive : ""
                        ].filter(Boolean).join(" "),
                        onPointerMove: (e4) => {
                          P.current && (window.clearTimeout(C.current), document.activeElement !== e4.currentTarget && e4.currentTarget.focus({
                            preventScroll: true
                          }), b?.index !== t3 && L(e4.currentTarget, true));
                        },
                        onPointerLeave: () => {
                          P.current && j.current?.focus({ preventScroll: true });
                        },
                        onClick: () => {
                          P.current && (P.current = false, e3.onSelect?.(), f2(false), N.current?.focus());
                        },
                        children: [
                          (0, r.jsx)("span", {
                            className: h().icon,
                            "aria-hidden": "true",
                            children: e3.icon ?? (e3.checked ? (0, r.jsx)(u.A, { size: 15 }) : (0, r.jsx)(d.A, { size: 15 }))
                          }),
                          (0, r.jsx)("span", { children: e3.label })
                        ]
                      },
                      e3.id
                    )
                  )
                ]
              },
              w.key
            )
          }),
          document.body
        ) : null
      ]
    });
  }
  c.A, m.A;
}

__m(__module,__exports,__require);
}