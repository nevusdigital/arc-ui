function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { V: () => f });
  var i = a(95155), r = a(12115), n = a(18310), l = a(28245), s = a(92171), o = a(55809), d = a(25354), c = a(32570), u = a.n(c);
  let h = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), g = (e2, t2 = 40) => e2 * t2 * 0.5 / (t2 + 0.5 * Math.abs(e2)), p = { type: "spring", visualDuration: 0.26, bounce: 0 }, m = { type: "spring", visualDuration: 0.5, bounce: 0 };
  function f({
    options: e2,
    value: t2,
    defaultValue: a2,
    onValueChange: c2,
    label: w,
    size: v = "md",
    fullWidth: b = false,
    className: y,
    style: _
  }) {
    let j = !!(0, n.I)(), k = (0, r.useRef)(null), x = (0, r.useRef)(/* @__PURE__ */ new Map()), A = (0, r.useRef)(/* @__PURE__ */ new Map()), [M, N] = (0, r.useState)(a2 ?? e2.find((e3) => !e3.disabled)?.value ?? ""), P = t2 ?? M, [C, D] = (0, r.useState)(null), [R, E] = (0, r.useState)("sm" === v ? 36 : 44), S = (0, l.d)(0), T = (0, l.d)(0), z = (0, l.d)(0), I = (0, r.useRef)([]), L = (0, r.useRef)(false), O = (0, r.useRef)(null), G = (0, r.useRef)({ value: P, reduced: j, options: e2 });
    (0, r.useEffect)(() => {
      G.current = { value: P, reduced: j, options: e2 };
    });
    let W = e2.map(
      (e3) => `${e3.value}\0${e3.label}\0${e3.badge ?? ""}\0${+!!e3.disabled}`
    ).join(""), B = (0, r.useCallback)(
      (e3) => {
        void 0 === t2 && N(e3), e3 !== G.current.value && c2?.(e3);
      },
      [t2, c2]
    ), F = () => {
      I.current.forEach((e3) => e3.stop()), I.current = [];
    }, H = (0, r.useCallback)(
      (e3, t3 = false) => {
        F();
        let a3 = e3.left, i2 = e3.left + e3.width;
        if (z.set(e3.width), t3 || G.current.reduced) {
          S.set(a3), T.set(i2);
          return;
        }
        let r2 = a3 > S.get();
        I.current = [(0, s.i)(S, a3, r2 ? m : p), (0, s.i)(T, i2, r2 ? p : m)];
      },
      [S, T, z]
    ), U = (0, r.useCallback)(() => {
      let e3 = k.current;
      if (e3)
        for (let t3 of (E(e3.clientHeight), A.current.clear(), G.current.options)) {
          let e4 = x.current.get(t3.value);
          e4 && A.current.set(t3.value, {
            left: e4.offsetLeft,
            width: e4.offsetWidth
          });
        }
    }, []);
    (0, r.useLayoutEffect)(() => {
      let t3 = k.current;
      if (!t3) return;
      let a3 = () => {
        U();
        let e3 = A.current.get(G.current.value);
        e3 && !O.current && H(e3, true), L.current = true;
      };
      G.current.options = e2, a3();
      let i2 = new ResizeObserver(a3);
      return i2.observe(t3), () => {
        i2.disconnect(), F();
      };
    }, [U, H, W]), (0, r.useEffect)(() => {
      if (!L.current || O.current?.active) return;
      let e3 = A.current.get(P);
      e3 && H(e3);
    }, [P, H]);
    let V = (t3) => {
      let a3 = null, i2 = 1 / 0;
      for (let r2 of e2) {
        if (r2.disabled) continue;
        let e3 = A.current.get(r2.value);
        if (!e3) continue;
        let n2 = Math.abs(e3.left + e3.width / 2 - t3);
        n2 < i2 && (i2 = n2, a3 = r2.value);
      }
      return a3;
    }, $ = (e3) => {
      let t3 = O.current;
      if (!t3 || t3.id !== e3.pointerId || (O.current = null, D(null), !t3.active))
        return;
      let a3 = performance.now(), i2 = t3.history.find((e4) => a3 - e4.t < 100) ?? t3.history[0], r2 = t3.history.at(-1), n2 = (r2.x - i2.x) / Math.max(0.016, (r2.t - i2.t) / 1e3), l2 = V((S.get() + T.get()) / 2 + h(0.12 * n2, -160, 160)) ?? P, s2 = A.current.get(l2);
      s2 && H(s2), B(l2);
      let o2 = (e4) => {
        e4.stopPropagation(), e4.preventDefault();
      };
      window.addEventListener("click", o2, { capture: true, once: true }), window.setTimeout(
        () => window.removeEventListener("click", o2, { capture: true }),
        0
      );
    }, K = R - 8, Q = (0, o.G)(
      () => h((T.get() - S.get() - z.get()) * 0.03, -1.5, 0.16 * K)
    ), q = (0, o.G)(() => S.get()), J = (0, o.G)(() => Math.max(0.6 * K, T.get() - S.get())), X = (0, o.G)(() => 4 + Q.get()), Y = (0, o.G)(() => K - 2 * Q.get()), Z = (0, o.G)(() => (K - 2 * Q.get()) / 2), ee = C ?? P;
    return (0, i.jsxs)("div", {
      ref: k,
      role: "radiogroup",
      "aria-label": w,
      className: [u().root, y].filter(Boolean).join(" "),
      style: _,
      "data-size": v,
      "data-full": b ? "" : void 0,
      "data-dragging": C ? "" : void 0,
      onKeyDown: (t3) => {
        let a3 = e2.filter((e3) => !e3.disabled), i2 = a3.findIndex((e3) => e3.value === P), r2 = "ArrowRight" === t3.key || "ArrowDown" === t3.key ? (i2 + 1) % a3.length : "ArrowLeft" === t3.key || "ArrowUp" === t3.key ? (i2 - 1 + a3.length) % a3.length : "Home" === t3.key ? 0 : "End" === t3.key ? a3.length - 1 : null;
        if (null === r2 || !a3.length) return;
        t3.preventDefault();
        let n2 = a3[r2];
        B(n2.value), x.current.get(n2.value)?.focus();
      },
      onPointerDown: (e3) => {
        if (0 !== e3.button || O.current) return;
        let t3 = e3.target.closest("button");
        if (!t3 || t3.dataset.value !== P) return;
        let a3 = k.current.getBoundingClientRect(), i2 = e3.clientX - a3.left, r2 = A.current.get(P);
        r2 && (O.current = {
          id: e3.pointerId,
          x0: i2,
          grab: i2 - (S.get() + T.get()) / 2,
          active: false,
          width: r2.width,
          history: [{ x: i2, t: performance.now() }]
        });
      },
      onPointerMove: (e3) => {
        let t3 = O.current;
        if (!t3 || t3.id !== e3.pointerId) return;
        let a3 = k.current, i2 = e3.clientX - a3.getBoundingClientRect().left;
        if (!t3.active) {
          if (4 > Math.abs(i2 - t3.x0)) return;
          t3.active = true, a3.setPointerCapture(e3.pointerId);
        }
        t3.history.push({ x: i2, t: performance.now() }), t3.history.length > 6 && t3.history.shift();
        let r2 = 4 + t3.width / 2, n2 = a3.clientWidth - 4 - t3.width / 2, l2 = i2 - t3.grab, o2 = l2 < r2 ? r2 + g(l2 - r2) : l2 > n2 ? n2 + g(l2 - n2) : l2, d2 = V(o2);
        d2 !== C && D(d2);
        let c3 = d2 ? A.current.get(d2) : null, u2 = c3 ? c3.width : t3.width;
        t3.width += (u2 - t3.width) * 0.35;
        let h2 = o2 - t3.width / 2, f2 = o2 + t3.width / 2;
        if (z.set(t3.width), G.current.reduced) {
          S.set(h2), T.set(f2);
          return;
        }
        let w2 = h2 > S.get();
        F(), I.current = [
          (0, s.i)(
            S,
            h2,
            w2 ? { ...m, visualDuration: 0.22 } : { ...p, visualDuration: 0.12 }
          ),
          (0, s.i)(
            T,
            f2,
            w2 ? { ...p, visualDuration: 0.12 } : { ...m, visualDuration: 0.22 }
          )
        ];
      },
      onPointerUp: $,
      onPointerCancel: $,
      children: [
        (0, i.jsxs)("svg", {
          className: u().drop,
          "aria-hidden": true,
          children: [
            (0, i.jsx)(d.PY1.rect, {
              className: u().dropFill,
              x: q,
              y: X,
              width: J,
              height: Y,
              rx: Z
            }),
            (0, i.jsx)(d.PY1.rect, {
              className: u().dropEdge,
              x: q,
              y: X,
              width: J,
              height: Y,
              rx: Z
            })
          ]
        }),
        e2.map((e3) => {
          let t3 = e3.value === P;
          return (0, i.jsxs)(
            "button",
            {
              ref: (t4) => {
                t4 ? x.current.set(e3.value, t4) : x.current.delete(e3.value);
              },
              type: "button",
              role: "radio",
              "aria-checked": t3,
              tabIndex: t3 ? 0 : -1,
              disabled: e3.disabled,
              "data-value": e3.value,
              "data-on": ee === e3.value ? "" : void 0,
              className: u().segment,
              onClick: () => B(e3.value),
              children: [
                e3.icon && (0, i.jsx)("span", {
                  className: u().icon,
                  "aria-hidden": true,
                  children: e3.icon
                }),
                (0, i.jsx)("span", { className: u().label, children: e3.label }),
                void 0 !== e3.badge && (0, i.jsx)("span", {
                  className: u().badge,
                  children: e3.badge
                })
              ]
            },
            e3.value
          );
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
}