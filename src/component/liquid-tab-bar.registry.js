/* liquid-tab-bar (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(4920, ".bar{--liquid-track:var(--surface-muted);--liquid-lens:var(--foreground);--liquid-on-lens:var(--background);position:relative;display:block;max-width:100%;height:calc(var(--liquid-height) + var(--liquid-pad) * 2);flex:none;border-radius:var(--radius-pill);background:var(--liquid-track);box-shadow:inset 0 0 0 1px var(--border-subtle);color:var(--text-secondary);font-family:var(--font-body);font-size:var(--text-sm);font-weight:500;letter-spacing:var(--tracking-body);line-height:1;isolation:isolate;touch-action:pan-y;user-select:none;-webkit-user-select:none}\n.bar[data-held]{cursor:grabbing}\n.bar[data-held] .tab{cursor:grabbing}\n@media (prefers-contrast:more){.bar{box-shadow:inset 0 0 0 1px var(--border-strong)}\n.row{position:absolute;inset:0;display:flex;align-items:center;gap:var(--liquid-gap);padding:var(--liquid-pad)}\n@media (hover:hover) and (pointer:fine){.row>.tab:not([data-selected]):hover{color:var(--foreground)}\n.tab{position:relative;display:flex;height:var(--liquid-height);min-width:var(--liquid-slot);flex:none;align-items:center;overflow:hidden;padding:0;border:0;border-radius:var(--radius-pill);background:transparent;color:inherit;font:inherit;white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard)}\n.tab[data-selected]{cursor:grab}\n.tab[data-badged] .label{left:46px}\n.lens .tab{cursor:inherit}\n.icon{position:absolute;top:50%;left:12px;display:grid;width:20px;height:20px;margin-top:-10px;place-items:center}\n.icon svg{width:20px;height:20px}\n.filled{display:contents}\n.filled svg{fill:currentColor}\n.label{position:absolute;top:50%;left:40px;margin-top:-.5em;line-height:1;white-space:nowrap}\n.measure .label{position:static;margin:0}\n.measure .label[data-badged]{padding-left:6px}\n.lens{position:absolute;inset:0;background:var(--liquid-lens);color:var(--liquid-on-lens);pointer-events:none;will-change:clip-path}\n.badgeAnchor{position:absolute;top:5px;left:25px;display:flex;pointer-events:none}\n.badge{display:inline-flex;height:16px;min-width:16px;justify-content:center;overflow:hidden;padding:0 5px;border-radius:var(--radius-pill);background:var(--foreground);box-shadow:0 0 0 2px var(--liquid-track);color:var(--background);font-size:11px;font-variant-numeric:tabular-nums;font-weight:500;line-height:16px}\n.badge[data-inverted]{background:var(--background);box-shadow:0 0 0 2px var(--liquid-lens);color:var(--foreground)}\n.digit{display:inline-block;width:7px;height:16px;overflow:hidden;text-align:center}\n.column{display:flex;flex-direction:column}\n.column span{display:block;height:16px}\n.measure{position:absolute;top:0;left:0;display:flex;visibility:hidden;pointer-events:none}", {"bar":"bar","tab":"tab","row":"row","label":"label","lens":"lens","icon":"icon","filled":"filled","measure":"measure","badgeAnchor":"badgeAnchor","badge":"badge","digit":"digit","column":"column"});
A.reg(24551, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var i = a(51811);
  let n = {
    name: "message-circle",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
          key: "1sd12s"
        }
      ]
    ]
  };
  n.node;
  let s = (0, i.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(44386, ".demo{display:grid;width:min(100%,560px);margin-inline:auto;justify-items:center;gap:var(--space-4);font-family:var(--font-body);letter-spacing:var(--tracking-body);container-type:inline-size}\n.stage{display:grid;width:100%;min-height:200px;align-content:center;justify-items:center;gap:var(--space-4)}\n.noteRow{display:grid;min-height:1.4em;place-items:center}\n.note{margin:0;color:var(--text-muted);font-size:var(--text-sm);line-height:var(--leading-body)}\n.modes{display:flex;justify-content:center}", {"demo":"demo","stage":"stage","noteRow":"noteRow","note":"note","modes":"modes"});
A.reg(45425, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => a });
  var i = r(51811);
  let n = {
    name: "house",
    size: 24,
    node: [
      [
        "path",
        { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }
      ],
      [
        "path",
        {
          d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
          key: "r6nss1"
        }
      ]
    ],
    aliases: ["home"]
  };
  n.node;
  let a = (0, i.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(64708, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { MR: () => g, d4: () => E, pQ: () => b });
  var i = a(95155), n = a(12115), r = a(18310), l = a(25354), s = a(80642), d = a(6900), u = a(28245), o = a(55809), c = a(92171), p = a(7770), h = a(4920), f = a.n(h);
  let b = (e2, t2) => `${e2}-tab-${t2}`, g = (e2, t2) => `${e2}-panel-${t2}`, { spring: m } = p.T, v = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), y = (e2) => Math.round(100 * e2) / 100, x = (e2, t2) => {
    let a2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: a2 * a2,
      damping: 2 * (1 - t2) * a2,
      mass: 1,
      restDelta: 5e-4,
      restSpeed: 0.02
    };
  }, _ = x(m.morph.visualDuration, m.morph.bounce), j = { duration: 0.8 * p.T.duration.instant, ease: "easeOut" }, w = x(0.07, 0), M = x(0.2, 0), k = x(m.snappy.visualDuration, 0), N = x(0.2, 0), P = { duration: 0 }, q = (e2, t2 = 0.45, a2 = 0.55) => e2 * t2 * a2 / (t2 + a2 * Math.abs(e2));
  function S(e2) {
    let t2 = [], a2 = 4;
    for (let i2 of e2) t2.push(a2), a2 += i2 + 2;
    return { lefts: t2, widths: e2, total: a2 - 2 + 4 };
  }
  function A({ lefts: e2, widths: t2 }, a2) {
    let i2 = e2.length - 1;
    if (i2 < 0) return { left: 4, width: 44 };
    if (a2 <= 0) return { left: e2[0] + a2 * (t2[0] + 2), width: t2[0] };
    if (a2 >= i2) return { left: e2[i2] + (a2 - i2) * (t2[i2] + 2), width: t2[i2] };
    let n2 = Math.floor(a2), r2 = a2 - n2;
    return {
      left: e2[n2] + r2 * (e2[n2 + 1] - e2[n2]),
      width: t2[n2] + r2 * (t2[n2 + 1] - t2[n2])
    };
  }
  function I(e2, t2) {
    let a2 = e2.lefts.map((t3, a3) => t3 + e2.widths[a3] / 2), i2 = a2.length - 1;
    if (i2 <= 0) return 0;
    if (t2 <= a2[0]) return (t2 - a2[0]) / (a2[1] - a2[0]);
    if (t2 >= a2[i2]) return i2 + (t2 - a2[i2]) / (a2[i2] - a2[i2 - 1]);
    for (let e3 = 0; e3 < i2; e3++)
      if (t2 <= a2[e3 + 1]) return e3 + (t2 - a2[e3]) / (a2[e3 + 1] - a2[e3]);
    return i2;
  }
  let $ = () => () => {
  };
  function R({ digit: e2, reduced: t2 }) {
    return (0, i.jsx)("span", {
      className: f().digit,
      children: (0, i.jsx)(l.PY1.span, {
        className: f().column,
        initial: false,
        animate: { y: `${-(10 * e2)}%` },
        transition: t2 ? P : m.snappy,
        children: "0123456789".split("").map((e3) => (0, i.jsx)("span", { children: e3 }, e3))
      })
    });
  }
  function C({ count: e2, reduced: t2, inverted: a2 }) {
    let n2 = e2 > 99 ? "99" : String(e2);
    return (0, i.jsx)(s.N, {
      initial: false,
      children: e2 > 0 && (0, i.jsx)(
        l.PY1.span,
        {
          className: f().badge,
          "data-inverted": a2 || void 0,
          "aria-hidden": "true",
          initial: t2 ? { opacity: 0 } : { opacity: 0, scale: 0.6 },
          animate: { opacity: 1, scale: 1, width: 10 + 7 * n2.length },
          exit: t2 ? { opacity: 0 } : {
            opacity: 0,
            scale: 0.6,
            transition: { duration: p.T.duration.fast }
          },
          transition: t2 ? { duration: p.T.duration.instant } : { ...m.snappy, opacity: { duration: p.T.duration.fast } },
          children: n2.split("").map(
            (e3, a3) => (0, i.jsx)(R, { digit: Number(e3), reduced: t2 }, n2.length - a3)
          )
        },
        "badge"
      )
    });
  }
  function E({
    tabs: e2,
    value: t2,
    onValueChange: a2,
    labels: s2 = "active",
    label: p2 = "Sections",
    id: h2,
    className: b2
  }) {
    let g2, m2 = (0, n.useId)(), P2 = h2 ?? m2, R2 = (g2 = (0, n.useSyncExternalStore)(
      $,
      () => true,
      () => false
    ), !!(0, r.I)() && g2), C2 = e2.length, z = Math.max(
      0,
      e2.findIndex((e3) => e3.value === t2)
    ), D = (0, n.useRef)(null), L = (0, n.useRef)([]), T = (0, n.useRef)([]), G = (0, n.useRef)(null), H = (0, n.useRef)(z), W = (0, n.useRef)(false), [X, O] = (0, n.useState)([]), [Q, V] = (0, n.useState)(false), [B] = (0, n.useState)(() => /* @__PURE__ */ new Map()), J = e2.map((e3, t3) => {
      let a3 = B.get(e3.value);
      return a3 || (a3 = (0, d.OQ)(+("always" === s2 || "active" === s2 && t3 === z)), B.set(e3.value, a3)), a3;
    }), [K] = (0, n.useState)(() => /* @__PURE__ */ new Map()), F = e2.map((e3, t3) => {
      let a3 = K.get(e3.value);
      return a3 || (a3 = (0, d.OQ)(+("always" === s2 || "active" === s2 && t3 === z)), K.set(e3.value, a3)), a3;
    }), U = (0, u.d)(z), Z = (0, u.d)(z), ee = (0, u.d)(0), et = (0, u.d)(0), ea = (e3, t3) => "none" === s2 ? 44 : 44 + (10 + (X[e3] ?? 0)) * v(t3, 0, 1), ei = () => S(J.map((e3, t3) => ea(t3, e3.get()))), en = (0, o.G)(() => {
      let e3 = S(J.map((e4, t4) => ea(t4, e4.get()))), t3 = U.get(), a3 = Z.get(), i2 = ee.get(), n2 = et.get(), r2 = A(e3, Math.min(t3, a3) + Math.min(i2, 0)), l2 = A(e3, Math.max(t3, a3) + Math.max(i2, 0)), s3 = r2.left, d2 = l2.left + l2.width, u2 = 2 * n2, o2 = 2 * n2;
      return `inset(${y(4 + u2)}px ${y(e3.total - d2 + o2)}px ${y(4 + u2)}px ${y(s3 + o2)}px round ${y(20 - u2)}px)`;
    }), er = (0, o.G)(() => S(J.map((e3, t3) => ea(t3, e3.get()))).total);
    function el(i2, n2 = false) {
      let r2 = e2[i2];
      r2 && (n2 && L.current[i2]?.focus({ preventScroll: true }), r2.value !== t2 && a2(r2.value));
    }
    function es(e3) {
      if (R2 || G.current?.dragging) return;
      let t3 = null === e3 ? 0 : 0.14 * v(e3 - z, -1, 1);
      (0, c.i)(ee, t3, k);
    }
    function ed(e3) {
      return e3 - (D.current?.getBoundingClientRect().left ?? 0);
    }
    function eu(e3) {
      let t3 = G.current;
      if (!t3 || t3.pointer !== e3.pointerId || (G.current = null, (0, c.i)(et, 0, x(0.4, 0)), !t3.dragging))
        return;
      V(false), W.current = true;
      let a3 = t3.history.filter((t4) => e3.timeStamp - t4.t < 90), i2 = a3[0], n2 = a3[a3.length - 1], r2 = i2 && n2 && n2.t > i2.t && e3.timeStamp - n2.t < 60 ? (n2.p - i2.p) / (n2.t - i2.t) * 1e3 : 0, l2 = v(Math.round(t3.last + r2 / 1e3 * 0.993 / (1 - 0.993)), 0, C2 - 1);
      l2 === z && Math.abs(r2) > 4 && (l2 = v(z + Math.sign(r2), 0, C2 - 1)), H.current = l2, (0, c.i)(U, l2, { ..._, velocity: U.getVelocity() }), (0, c.i)(Z, l2, { ..._, velocity: Z.getVelocity() }), el(l2);
    }
    (0, n.useLayoutEffect)(() => {
      let e3 = T.current.slice(0, C2).map((e4) => Math.ceil(e4?.offsetWidth ?? 0));
      O(
        (t3) => t3.length === e3.length && t3.every((t4, a3) => t4 === e3[a3]) ? t3 : e3
      );
    }, [C2, e2]), (0, n.useEffect)(() => {
      if (e2.forEach((e3, t3) => {
        let a3 = B.get(e3.value);
        if (!a3) return;
        let i2 = +("always" === s2 || "active" === s2 && t3 === z);
        R2 ? a3.jump(i2) : (0, c.i)(a3, i2, _);
        let n2 = K.get(e3.value);
        n2 && (R2 || 1 === i2 ? n2.jump(i2) : (0, c.i)(n2, 0, j));
      }), H.current = z, R2 ? ee.jump(0) : (0, c.i)(ee, 0, k), !G.current?.dragging) {
        if (R2) {
          U.jump(z), Z.jump(z);
          return;
        }
        (0, c.i)(U, z, _), (0, c.i)(Z, z, _);
      }
    }, [z, s2, ee, U, B, R2, Z, K, e2]);
    let eo = (t3) => e2.map(
      (e3, a3) => (0, i.jsx)(
        Y,
        {
          tab: e3,
          index: a3,
          open: J[a3],
          show: F[a3],
          labelWidth: X[a3] ?? 0,
          labels: s2,
          inverted: t3,
          reduced: R2,
          selected: a3 === z,
          baseId: P2,
          setRef: (e4) => {
            t3 || (L.current[a3] = e4);
          },
          onClick: () => {
            if (W.current) {
              W.current = false;
              return;
            }
            el(a3);
          },
          onPointerDown: (e4) => (function(e5, t4) {
            if (0 !== e5.button || !e5.isPrimary) return;
            if (W.current = false, t4 !== z) return void es(t4);
            if (R2) return;
            let a4 = I(ei(), ed(e5.clientX));
            G.current = {
              pointer: e5.pointerId,
              x: e5.clientX,
              grab: a4 - (U.get() + Z.get()) / 2,
              last: a4,
              dragging: false,
              direction: 0,
              history: [{ t: e5.timeStamp, p: a4 }]
            }, (0, c.i)(et, 1, N), (0, c.i)(ee, 0, k);
          })(e4, a3),
          onHover: () => es(a3)
        },
        e3.value
      )
    );
    return (0, i.jsxs)(l.PY1.div, {
      ref: D,
      role: "tablist",
      "aria-label": p2,
      "aria-orientation": "horizontal",
      className: [f().bar, b2].filter(Boolean).join(" "),
      style: {
        "--liquid-pad": "4px",
        "--liquid-gap": "2px",
        "--liquid-height": "40px",
        "--liquid-slot": "44px",
        width: er
      },
      "data-held": Q || void 0,
      "data-reduced": R2 || void 0,
      onKeyDown: function(e3) {
        let t3, a3 = { ArrowRight: 1, ArrowLeft: -1 };
        if (e3.key in a3) t3 = (z + a3[e3.key] + C2) % C2;
        else if ("Home" === e3.key) t3 = 0;
        else {
          if ("End" !== e3.key) return;
          t3 = C2 - 1;
        }
        e3.preventDefault(), el(t3, true);
      },
      onPointerMove: function(e3) {
        let t3 = G.current;
        if (!t3 || t3.pointer !== e3.pointerId) return;
        if (!t3.dragging) {
          if (5 > Math.abs(e3.clientX - t3.x)) return;
          t3.dragging = true, V(true), e3.currentTarget.setPointerCapture(e3.pointerId);
        }
        let a3 = I(ei(), ed(e3.clientX)) - t3.grab, i2 = a3 < 0 ? q(a3) : a3 > C2 - 1 ? C2 - 1 + q(a3 - C2 + 1) : a3, n2 = i2 - t3.last;
        Math.abs(n2) > 2e-3 && (t3.direction = Math.sign(n2)), t3.last = i2, t3.history.push({ t: e3.timeStamp, p: i2 }), t3.history.length > 8 && t3.history.shift(), (0, c.i)(U, i2, t3.direction < 0 ? w : M), (0, c.i)(Z, i2, t3.direction > 0 ? w : M);
      },
      onPointerUp: eu,
      onPointerCancel: eu,
      onPointerLeave: () => es(null),
      children: [
        (0, i.jsx)("div", { className: f().row, children: eo(false) }),
        (0, i.jsx)(l.PY1.div, {
          className: f().lens,
          style: { clipPath: en },
          "aria-hidden": "true",
          children: (0, i.jsx)("div", { className: f().row, children: eo(true) })
        }),
        (0, i.jsx)("div", {
          className: f().measure,
          "aria-hidden": "true",
          children: e2.map(
            (e3, t3) => (0, i.jsx)(
              "span",
              {
                ref: (e4) => {
                  T.current[t3] = e4;
                },
                className: f().label,
                "data-badged": void 0 !== e3.badge || void 0,
                children: e3.label
              },
              e3.value
            )
          )
        })
      ]
    });
  }
  function Y({
    tab: e2,
    open: t2,
    show: a2,
    labelWidth: n2,
    labels: r2,
    inverted: s2,
    reduced: d2,
    selected: u2,
    baseId: c2,
    setRef: p2,
    onClick: h2,
    onPointerDown: m2,
    onHover: y2
  }) {
    let x2 = (0, o.G)(t2, (e3) => "none" === r2 ? 44 : 44 + (10 + n2) * e3), _2 = (0, o.G)(() => v((t2.get() - 0.9) / 0.1, 0, 1) * a2.get()), j2 = (0, o.G)(t2, (e3) => d2 ? 0 : -((1 - v(e3, 0, 1)) * 4)), w2 = (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("span", {
          className: f().icon,
          children: s2 ? e2.activeIcon ?? (0, i.jsx)("span", { className: f().filled, children: e2.icon }) : e2.icon
        }),
        void 0 !== e2.badge && (0, i.jsx)("span", {
          className: f().badgeAnchor,
          children: (0, i.jsx)(C, {
            count: e2.badge,
            reduced: d2,
            inverted: s2
          })
        }),
        ("always" === r2 || "active" === r2 && s2) && (0, i.jsx)(l.PY1.span, {
          className: f().label,
          style: { opacity: _2, x: j2 },
          children: e2.label
        })
      ]
    }), M2 = void 0 !== e2.badge || void 0;
    if (s2)
      return (0, i.jsx)(l.PY1.span, {
        className: f().tab,
        "data-badged": M2,
        style: { width: x2 },
        children: w2
      });
    let k2 = e2.badge ? `, ${e2.badgeLabel ?? e2.badge}` : "";
    return (0, i.jsx)(l.PY1.button, {
      ref: p2,
      type: "button",
      role: "tab",
      id: b(c2, e2.value),
      "aria-controls": g(c2, e2.value),
      "aria-selected": u2,
      "aria-label": `${e2.label}${k2}`,
      tabIndex: u2 ? 0 : -1,
      className: f().tab,
      "data-selected": u2 || void 0,
      "data-badged": M2,
      style: { width: x2 },
      onClick: h2,
      onPointerDown: m2,
      onPointerEnter: (e3) => {
        "mouse" === e3.pointerType && y2();
      },
      children: w2
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(71363, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var s = a(51811);
  let i = {
    name: "user",
    size: 24,
    node: [
      [
        "path",
        { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }
      ],
      ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
    ]
  };
  i.node;
  let n = (0, s.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(74078, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { LiquidTabBarDemo: () => A, default: () => w });
  var r = a(95155), l = a(12115), n = a(18310), o = a(80642), s = a(25354), i = a(45425), u = a(97625), c = a(24551), d = a(71363), f = a(64708), v = a(66558), b = a(7770), y = a(44386), m = a.n(y);
  let p = { strokeWidth: 1.75, "aria-hidden": true }, h = [
    {
      value: "home",
      label: "Home",
      icon: (0, r.jsx)(i.A, { ...p }),
      note: "Your feed"
    },
    {
      value: "saved",
      label: "Saved",
      icon: (0, r.jsx)(u.A, { ...p }),
      note: "3 saved places"
    },
    {
      value: "inbox",
      label: "Inbox",
      icon: (0, r.jsx)(c.A, { ...p }),
      badge: 2,
      badgeLabel: "2 unread",
      note: "2 unread messages"
    },
    {
      value: "profile",
      label: "Profile",
      icon: (0, r.jsx)(d.A, { ...p }),
      note: "Your profile"
    }
  ], _ = [
    { value: "active", label: "Active label" },
    { value: "always", label: "All labels" },
    { value: "none", label: "Icons only" }
  ], x = "(max-width: 480px)", g = (e2) => {
    let t2 = window.matchMedia(x);
    return t2.addEventListener("change", e2), () => t2.removeEventListener("change", e2);
  };
  function A() {
    let e2 = (0, l.useId)(), t2 = !!(0, n.I)(), [a2, i2] = (0, l.useState)("home"), [u2, c2] = (0, l.useState)("active"), d2 = (0, l.useSyncExternalStore)(
      g,
      () => window.matchMedia(x).matches,
      () => false
    ), y2 = d2 ? _.filter((e3) => "always" !== e3.value) : _, p2 = d2 && "always" === u2 ? "active" : u2, A2 = h.find((e3) => e3.value === a2)?.note;
    return (0, r.jsxs)("div", {
      className: m().demo,
      children: [
        (0, r.jsxs)("div", {
          className: m().stage,
          children: [
            (0, r.jsx)(f.d4, {
              id: e2,
              label: "Sections",
              tabs: h,
              value: a2,
              onValueChange: i2,
              labels: p2
            }),
            (0, r.jsx)("div", {
              className: m().noteRow,
              children: (0, r.jsx)(o.N, {
                mode: "popLayout",
                initial: false,
                children: (0, r.jsx)(
                  s.PY1.p,
                  {
                    id: (0, f.MR)(e2, a2),
                    role: "tabpanel",
                    "aria-labelledby": (0, f.pQ)(e2, a2),
                    className: m().note,
                    initial: t2 ? { opacity: 0 } : { opacity: 0, y: 4 },
                    animate: { opacity: 1, y: 0 },
                    exit: t2 ? { opacity: 0 } : {
                      opacity: 0,
                      y: -4,
                      transition: { duration: b.T.duration.exit }
                    },
                    transition: t2 ? { duration: b.T.duration.fast } : b.T.spring.smooth,
                    children: A2
                  },
                  a2
                )
              })
            })
          ]
        }),
        (0, r.jsx)("div", {
          className: m().modes,
          children: (0, r.jsx)(v.A, {
            label: "Tab labels",
            options: y2,
            value: p2,
            onValueChange: (e3) => c2(e3)
          })
        })
      ]
    });
  }
  let w = A;
}

__m(__module,__exports,__require);
});
A.reg(97625, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => r });
  var i = a(51811);
  let s = {
    name: "bookmark",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
          key: "oz39mx"
        }
      ]
    ]
  };
  s.node;
  let r = (0, i.A)(s);
}

__m(__module,__exports,__require);
});
A.cssFor("liquid-tab-bar", [4920,44386]);
A.item("liquid-tab-bar", {entry:74078, export:"LiquidTabBarDemo", kind:"component", tier:"pro", unresolved:[]});
})();