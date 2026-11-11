function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { d: () => m });
  var a = r(95155), n = r(12115), i = r(8678), s = r(18310), o = r(28245), l = r(92171), d = r(25354), u = r(7770), c = r(38564), p = r.n(c);
  let h = { type: "spring", visualDuration: 0.3, bounce: 0 }, m = (0, n.forwardRef)(function({
    label: e2,
    className: t2,
    checked: r2,
    defaultChecked: c2,
    onCheckedChange: m2,
    onPointerDown: f,
    onPointerUp: y,
    onPointerLeave: g,
    onPointerCancel: _,
    onKeyDown: x,
    onKeyUp: v,
    onBlur: b,
    ...j
  }, w) {
    let N = (0, s.I)(), [k, T] = (0, n.useState)(c2 ?? false), [C, S] = (0, n.useState)(false), E = r2 ?? k, P = (0, o.d)(1), R = (0, n.useRef)(E), A = (0, n.useRef)(-1 / 0);
    (0, n.useEffect)(() => {
      if (R.current === E) return;
      R.current = E;
      let e3 = performance.now() - A.current < 250;
      if (N || e3) return;
      let t3 = (0, l.i)(P, [1, 1.16, 1], {
        duration: 0.34,
        times: [0, 0.4, 1],
        ease: ["easeOut", "easeInOut"]
      });
      return () => t3.stop();
    }, [E, N, P]);
    let L = !C || N || j.disabled ? 0 : 5, $ = [p().switch, t2].filter(Boolean).join(" ");
    return (0, a.jsxs)(i.bL, {
      ...j,
      ref: w,
      checked: E,
      onCheckedChange: (e3) => {
        void 0 === r2 && T(e3), m2?.(e3);
      },
      onPointerDown: (e3) => {
        f?.(e3), 0 === e3.button && S(true);
      },
      onPointerUp: (e3) => {
        y?.(e3), C && !j.disabled && (A.current = performance.now()), S(false);
      },
      onPointerLeave: (e3) => {
        g?.(e3), S(false);
      },
      onPointerCancel: (e3) => {
        _?.(e3), S(false);
      },
      onKeyDown: (e3) => {
        x?.(e3), " " === e3.key && S(true);
      },
      onKeyUp: (e3) => {
        v?.(e3), C && !j.disabled && (A.current = performance.now()), S(false);
      },
      onBlur: (e3) => {
        b?.(e3), S(false);
      },
      className: $,
      "aria-label": j["aria-label"] ?? e2,
      children: [
        (0, a.jsx)("span", {
          className: p().track,
          children: (0, a.jsx)(d.PY1.span, {
            className: p().thumb,
            style: { scaleX: P },
            initial: false,
            animate: { x: E ? 18 - L : 0, width: 18 + L },
            transition: N ? { duration: 0 } : { x: h, width: u.T.spring.snappy }
          })
        }),
        e2 ? (0, a.jsx)("span", { className: p().label, children: e2 }) : null
      ]
    });
  });
  m.displayName = "Switch";
}

__m(__module,__exports,__require);
}