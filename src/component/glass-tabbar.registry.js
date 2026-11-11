/* glass-tabbar (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(18302, ".root{--glass-tint:oklab(99% 0 0/.56);--glass-filter:blur(18px) saturate(1.8) brightness(1.04);--glass-rim:oklab(100% 0 0/.95);--glass-rim-soft:oklab(100% 0 0/.5);--glass-glow:oklab(100% 0 0/.32);--glass-edge:oklab(0% 0 0/.07);--glass-shadow:0 10px 30px -10px oklab(0% 0 0/.3),0 2px 8px -2px oklab(0% 0 0/.1);--glass-ink:oklab(20% 0 0/.88);--glass-active:var(--accent);--lens-fill:oklab(0% 0 0/.07);--lens-edge:oklab(100% 0 0/.45);--lens-glass:oklab(100% 0 0/.42);--lens-shadow:0 6px 18px -6px oklab(0% 0 0/.28);display:flex;justify-content:center;font-family:var(--font-body);letter-spacing:var(--tracking-body);pointer-events:none}\n:root:not([data-accent]) .root,:root[data-accent=neutral] .root{--glass-active:var(--foreground)}\n:root[data-theme=dark] .root{--glass-tint:oklab(21% 0 0/.58);--glass-filter:blur(18px) saturate(1.6) brightness(.86);--glass-rim:oklab(100% 0 0/.36);--glass-rim-soft:oklab(100% 0 0/.14);--glass-glow:oklab(100% 0 0/.05);--glass-edge:oklab(100% 0 0/.07);--glass-shadow:0 12px 32px -10px oklab(0% 0 0/.65),0 2px 8px -2px oklab(0% 0 0/.4);--glass-ink:oklab(97% 0 0/.86);--lens-fill:oklab(100% 0 0/.13);--lens-edge:oklab(100% 0 0/.1);--lens-glass:oklab(100% 0 0/.14);--lens-shadow:0 6px 18px -6px oklab(0% 0 0/.6)}\n@media (prefers-reduced-transparency:reduce){.root .material{background:var(--surface-raised,var(--surface));-webkit-backdrop-filter:none;backdrop-filter:none;box-shadow:inset 0 0 0 1px var(--border),var(--glass-shadow)}\n.root{--lens-fill:var(--surface-muted);--lens-edge:var(--border)}\n@media (prefers-contrast:more){.root{--glass-ink:var(--foreground);--lens-edge:var(--border-strong)}\n.root .material{background:color-mix(in oklab,var(--surface) 94%,transparent);box-shadow:inset 0 0 0 1px var(--border-strong),var(--glass-shadow)}\n.group{display:flex;align-items:center;gap:10px;pointer-events:auto}\n.bar{position:relative;display:flex;padding:0 4px;border-radius:var(--radius-pill);touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}\n.material{position:absolute;inset:0;border-radius:inherit;background:var(--glass-tint);-webkit-backdrop-filter:var(--glass-filter);backdrop-filter:var(--glass-filter);box-shadow:0 0 0 .5px var(--glass-edge),inset 0 1px .5px -.5px var(--glass-rim),inset 0 -1px .5px -.5px var(--glass-rim-soft),inset 0 0 16px var(--glass-glow),var(--glass-shadow);pointer-events:none}\n.lens:after,.material:after{content:\"\";position:absolute;inset:0;padding:1px;border-radius:inherit;background:linear-gradient(160deg,var(--glass-rim),oklab(100% 0 0/.08) 30%,oklab(100% 0 0/0) 55%,oklab(100% 0 0/.06) 78%,var(--glass-rim-soft));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box exclude,linear-gradient(#000 0 0);pointer-events:none}\n.lens:after,.lens:before,.material:after{display:none}\n.lens{position:absolute;top:4px;left:0;border-radius:var(--radius-pill);background:var(--lens-fill);box-shadow:inset 0 0 0 .5px var(--lens-edge);pointer-events:none;will-change:transform}\n.lens:before{content:\"\";position:absolute;inset:0;border-radius:inherit;background:var(--lens-glass);box-shadow:inset 0 1px .5px -.5px var(--glass-rim),inset 0 0 10px var(--glass-glow),var(--lens-shadow);opacity:var(--lift,0)}\n.lens:after{opacity:var(--lift,0)}\n.item{position:relative;z-index:1;display:grid;flex:none;place-items:center;padding:0;border:0;border-radius:var(--radius-pill);background:none;font:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent}\n.item:active .icon{scale:.9}\n.bubbleButton:active .bubbleIcon,.item:active .icon{scale:1}\n.icon{position:relative;display:grid;place-items:center;transform-origin:50% 60%;transition:scale var(--duration-fast) var(--ease-standard)}\n.icon svg{width:22px;height:22px}\n@media (prefers-reduced-motion:reduce){.bubbleButton,.bubbleIcon,.icon{transition:none}\n.label{bottom:7px;left:2px;right:2px;overflow:hidden;font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap;transform-origin:50% 0;pointer-events:none}\n.badge,.label{position:absolute;font-weight:500;line-height:16px;letter-spacing:0;text-align:center}\n.badge{top:-5px;left:calc(100% - 8px);min-width:16px;height:16px;padding-inline:4px;border-radius:var(--radius-pill);background:var(--accent);color:var(--accent-foreground);font-size:11px;font-variant-numeric:tabular-nums;box-shadow:0 0 0 1.5px var(--glass-tint)}\n.hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.bubble{position:relative;flex:none;border-radius:var(--radius-pill)}\n.bubble[data-active] .bubbleLens{opacity:1;scale:1}\n.bubble[data-active] .bubbleButton{color:var(--glass-active)}\n.bubbleLens{position:absolute;inset:4px;border-radius:inherit;background:var(--lens-fill);box-shadow:inset 0 0 0 .5px var(--lens-edge);opacity:0;scale:.6;transition:opacity var(--duration-fast) var(--ease-standard),scale var(--duration-spring) var(--ease-spring);pointer-events:none}\n.bubbleLens{scale:1;transition:opacity var(--duration-fast) linear}\n.bubbleButton{position:relative;display:grid;width:100%;height:100%;place-items:center;padding:0;border:0;border-radius:inherit;background:none;color:var(--glass-ink);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-standard) var(--ease-standard)}\n.bubbleButton:active .bubbleIcon{scale:.9}\n.bubbleIcon{display:grid;place-items:center;transition:scale var(--duration-fast) var(--ease-standard)}\n.bubbleIcon svg{width:22px;height:22px}", {"root":"root","material":"material","group":"group","bar":"bar","lens":"lens","item":"item","icon":"icon","bubbleButton":"bubbleButton","bubbleIcon":"bubbleIcon","label":"label","badge":"badge","hidden":"hidden","bubble":"bubble","bubbleLens":"bubbleLens"});
A.reg(24413, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var r = a(51811);
  let n = {
    name: "compass",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      [
        "path",
        {
          d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
          key: "9ktpf1"
        }
      ]
    ]
  };
  n.node;
  let d = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(42922, function(__module,__exports,__require){
"use strict";
function __m(t, e, r) {
  r.d(e, { V: () => a });
  var i = r(27933), n = r(7890), s = r(28245);
  function a(t2) {
    let e2 = (0, s.d)(t2.getVelocity()), r2 = () => {
      let n2 = t2.getVelocity();
      e2.set(n2), n2 && i.Gt.update(r2);
    };
    return (0, n.L)(t2, "change", () => {
      i.Gt.update(r2, false, true);
    }), e2;
  }
}

__m(__module,__exports,__require);
});
A.reg(43638, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { GlassTabBarDemo: () => I, default: () => C });
  var r = a(95155), s = a(12115), n = a(45425), i = a(24413), l = a(97625), o = a(88359), c = a(65377), u = a(55809), d = a(25354), h = a(18310), b = a(28245), g = a(92171), f = a(42922), p = a(22535), m = a(7770), v = a(18302), y = a.n(v);
  let x = m.T.spring.morph, _ = m.T.spring.smooth, k = { type: "spring", stiffness: 900, damping: 64 }, j = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2));
  function w({
    item: e2,
    index: t2,
    selected: a2,
    focusable: s2,
    slot: n2,
    height: i2,
    pos: l2,
    lift: o2,
    presence: c2,
    compact: h2,
    buttonRef: b2,
    onSelect: g2
  }) {
    let f2 = (0, u.G)(() => c2.get() * Math.max(0, 1 - Math.abs(l2.get() - t2))), p2 = (0, u.G)(
      f2,
      (e3) => `color-mix(in oklab, var(--glass-active) ${Math.round(100 * e3)}%, var(--glass-ink))`
    ), m2 = (0, u.G)(() => 1 + f2.get() * o2.get() * 0.1), v2 = (0, u.G)(h2, (e3) => -8 * (1 - e3)), x2 = (0, u.G)(h2, (e3) => Math.max(0, 1 - 2.5 * e3)), _2 = (0, u.G)(h2, (e3) => 5 * e3), k2 = (0, u.G)(h2, (e3) => 1 - 0.12 * e3), j2 = void 0 !== e2.badge && "" !== e2.badge && 0 !== e2.badge;
    return (0, r.jsxs)(d.PY1.button, {
      ref: b2,
      type: "button",
      role: "tab",
      "aria-selected": a2,
      tabIndex: s2 ? 0 : -1,
      className: y().item,
      style: { width: n2, height: i2, color: p2 },
      "data-active": a2 || void 0,
      onClick: g2,
      children: [
        (0, r.jsxs)(d.PY1.span, {
          className: y().icon,
          style: { y: v2, scale: m2 },
          children: [
            e2.icon,
            j2 ? (0, r.jsx)("span", {
              className: y().badge,
              "aria-hidden": true,
              children: e2.badge
            }) : null
          ]
        }),
        (0, r.jsx)(d.PY1.span, {
          className: y().label,
          style: { opacity: x2, y: _2, scale: k2 },
          children: e2.label
        }),
        j2 ? (0, r.jsxs)("span", {
          className: y().hidden,
          children: [", ", e2.badge, " new"]
        }) : null
      ]
    });
  }
  function T({
    items: e2,
    value: t2,
    defaultValue: a2,
    onValueChange: n2,
    action: i2,
    compact: l2,
    defaultCompact: o2 = false,
    onCompactChange: c2,
    scrollRef: v2,
    collapseOnScroll: A2 = true,
    label: G2 = "Tabs",
    className: M2,
    style: N2
  }) {
    let E2 = !!(0, h.I)(), [z2, I2] = (0, s.useState)(a2 ?? e2[0]?.value ?? ""), [C2, R] = (0, s.useState)(o2), P = t2 ?? z2, S = l2 ?? C2, V = e2.length, B = e2.findIndex((e3) => e3.value === P), L = !!i2 && i2.value === P, Y = (0, s.useRef)([]), X = (0, s.useRef)(null), D = (0, s.useRef)(null), H = (0, s.useCallback)(
      (e3) => {
        void 0 === t2 && I2(e3), n2?.(e3);
      },
      [t2, n2]
    ), O = (0, s.useCallback)(
      (e3) => {
        void 0 === l2 && R(e3), c2?.(e3);
      },
      [l2, c2]
    ), U = (0, b.d)(78);
    (0, s.useEffect)(() => {
      let e3 = X.current;
      if (!e3) return;
      let t3 = new ResizeObserver(([e4]) => {
        let t4 = e4.contentRect.width - 72 * !!i2 - 8;
        U.set(Math.floor(j(t4 / Math.max(1, V), 56, 78)));
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [i2, V, U]);
    let W = (0, b.d)(+!!S), F = (0, u.G)(() => U.get() + (48 - U.get()) * W.get()), q = (0, u.G)(W, (e3) => 62 + -14 * e3), K = (0, u.G)(q, (e3) => e3 - 8);
    (0, s.useEffect)(() => {
      let e3 = E2 ? (W.set(+!!S), null) : (0, g.i)(W, +!!S, _);
      return () => e3?.stop();
    }, [S, E2, W]);
    let J = (0, b.d)(Math.max(0, B)), Q = (0, b.d)(+(B >= 0)), Z = (0, b.d)(0), $ = (0, f.V)(J), ee = (0, b.d)(+!E2);
    (0, s.useEffect)(() => {
      ee.set(+!E2);
    }, [E2, ee]);
    let et = (0, u.G)(
      () => ee.get() * Math.max(Z.get(), Math.min(1, Math.abs($.get()) / 4))
    ), ea = (0, p.z)(et, { stiffness: 420, damping: 38 }), er = (0, u.G)(() => ee.get() * Math.min(0.16, 0.022 * Math.abs($.get()))), es = (0, u.G)(() => 4 + J.get() * F.get()), en = (0, u.G)(
      () => (1 + 0.1 * ea.get() + er.get()) * (0.7 + 0.3 * Q.get())
    ), ei = (0, u.G)(
      () => (1 + 0.1 * ea.get() - 0.4 * er.get()) * (0.7 + 0.3 * Q.get())
    ), el = (0, s.useRef)(null), eo = (0, s.useRef)(null), ec = (0, s.useRef)(null), eu = (0, s.useRef)(false), ed = (0, s.useCallback)(
      (e3, t3) => {
        if (el.current?.stop(), E2) {
          J.set(e3), el.current = null;
          return;
        }
        el.current = (0, g.i)(J, e3, t3);
      },
      [J, E2]
    ), eh = (0, s.useCallback)(
      (e3) => {
        (eo.current?.stop(), E2) ? Q.set(+!!e3) : eo.current = (0, g.i)(
          Q,
          +!!e3,
          e3 ? m.T.spring.snappy : { duration: m.T.duration.fast, ease: "easeOut" }
        );
      },
      [Q, E2]
    );
    (0, s.useEffect)(() => {
      B < 0 ? eh(false) : ec.current?.active || (0.05 > Q.get() ? (el.current?.stop(), J.set(B)) : ed(B, x), eh(true));
    }, [B, J, Q, ed, eh]);
    let eb = (0, s.useRef)({ compact: S, setCompact: O });
    (0, s.useEffect)(() => {
      eb.current = { compact: S, setCompact: O };
    }), (0, s.useEffect)(() => {
      if (!A2) return;
      let e3 = v2?.current ?? window, t3 = () => e3 instanceof Window ? e3.scrollY : e3.scrollTop, a3 = t3(), r2 = 0, s2 = () => {
        let e4 = t3(), s3 = e4 - a3;
        if (a3 = e4, 0 === s3) return;
        r2 = Math.sign(s3) === Math.sign(r2) ? r2 + s3 : s3;
        let { compact: n3, setCompact: i3 } = eb.current;
        if (e4 < 40) {
          n3 && i3(false);
          return;
        }
        r2 > 24 && !n3 ? i3(true) : r2 < -24 && n3 && i3(false);
      };
      return e3.addEventListener("scroll", s2, { passive: true }), () => e3.removeEventListener("scroll", s2);
    }, [A2, v2]);
    let eg = (e3) => {
      S && O(false), e3 !== P && H(e3);
    }, ef = (e3, t3) => j((e3 - t3 - 4) / F.get() - 0.5, 0, V - 1), ep = (t3) => {
      let a3 = ec.current;
      if (!a3 || a3.id !== t3.pointerId || (ec.current = null, E2 || (0, g.i)(Z, 0, _), !a3.active))
        return;
      eu.current = true;
      let r2 = j(Math.round(a3.target), 0, V - 1);
      "pointercancel" === t3.type ? B >= 0 ? ed(B, x) : eh(false) : (ed(r2, x), eg(e2[r2].value));
    }, em = i2 ? [...e2, i2] : e2, ev = L ? V : B, ey = ev >= 0 ? ev : 0;
    return (0, r.jsx)("nav", {
      ref: X,
      "aria-label": G2,
      className: [y().root, M2].filter(Boolean).join(" "),
      style: N2,
      "data-compact": S || void 0,
      children: (0, r.jsxs)("div", {
        role: "tablist",
        "aria-label": G2,
        "aria-orientation": "horizontal",
        className: y().group,
        onKeyDown: (e3) => {
          let t3 = Math.max(
            0,
            Y.current.findIndex((e4) => e4 === document.activeElement)
          ), a3 = "ArrowRight" === e3.key ? t3 + 1 : "ArrowLeft" === e3.key ? t3 - 1 : "Home" === e3.key ? 0 : "End" === e3.key ? em.length - 1 : null;
          if (null === a3) return;
          e3.preventDefault();
          let r2 = (a3 + em.length) % em.length;
          eg(em[r2].value), Y.current[r2]?.focus();
        },
        children: [
          (0, r.jsxs)(d.PY1.div, {
            ref: D,
            className: y().bar,
            style: { height: q },
            onPointerDown: (e3) => {
              if (eu.current = false, 0 !== e3.button || V < 2 || S || !D.current)
                return;
              let t3 = D.current.getBoundingClientRect().left;
              ec.current = {
                id: e3.pointerId,
                x0: e3.clientX,
                left: t3,
                active: false,
                target: J.get()
              }, !E2 && B >= 0 && 0.5 > Math.abs(ef(e3.clientX, t3) - J.get()) && (0, g.i)(Z, 0.6, m.T.spring.snappy);
            },
            onPointerMove: (e3) => {
              let t3 = ec.current;
              if (t3 && t3.id === e3.pointerId) {
                if (!t3.active) {
                  if (8 > Math.abs(e3.clientX - t3.x0)) return;
                  t3.active = true, e3.currentTarget.setPointerCapture(e3.pointerId), E2 || (0, g.i)(Z, 1, m.T.spring.snappy), B < 0 && (el.current?.stop(), J.set(ef(e3.clientX, t3.left)), eh(true));
                }
                t3.target = ef(e3.clientX, t3.left), ed(t3.target, k);
              }
            },
            onPointerUp: ep,
            onPointerCancel: ep,
            children: [
              (0, r.jsx)("span", {
                className: y().material,
                "aria-hidden": true
              }),
              (0, r.jsx)(d.PY1.span, {
                className: y().lens,
                "aria-hidden": true,
                style: {
                  x: es,
                  width: F,
                  height: K,
                  scaleX: en,
                  scaleY: ei,
                  opacity: Q,
                  "--lift": ea
                }
              }),
              e2.map(
                (e3, t3) => (0, r.jsx)(
                  w,
                  {
                    item: e3,
                    index: t3,
                    selected: t3 === B,
                    focusable: t3 === ey,
                    slot: F,
                    height: q,
                    pos: J,
                    lift: ea,
                    presence: Q,
                    compact: W,
                    buttonRef: (e4) => {
                      Y.current[t3] = e4;
                    },
                    onSelect: () => {
                      if (eu.current) {
                        eu.current = false;
                        return;
                      }
                      eg(e3.value);
                    }
                  },
                  e3.value
                )
              )
            ]
          }),
          i2 ? (0, r.jsxs)(d.PY1.div, {
            className: y().bubble,
            style: { width: q, height: q },
            "data-active": L || void 0,
            children: [
              (0, r.jsx)("span", {
                className: y().material,
                "aria-hidden": true
              }),
              (0, r.jsx)("span", {
                className: y().bubbleLens,
                "aria-hidden": true
              }),
              (0, r.jsx)("button", {
                ref: (e3) => {
                  Y.current[V] = e3;
                },
                type: "button",
                role: "tab",
                "aria-selected": L,
                "aria-label": i2.label,
                tabIndex: ey === V ? 0 : -1,
                className: y().bubbleButton,
                onClick: () => eg(i2.value),
                children: (0, r.jsx)("span", {
                  className: y().bubbleIcon,
                  children: i2.icon
                })
              })
            ]
          }) : null
        ]
      })
    });
  }
  var A = a(74839), G = a.n(A);
  let M = { strokeWidth: 1.75, "aria-hidden": true }, N = [
    { value: "home", label: "Home", icon: (0, r.jsx)(n.A, { ...M }) },
    { value: "explore", label: "Explore", icon: (0, r.jsx)(i.A, { ...M }) },
    {
      value: "saved",
      label: "Saved",
      icon: (0, r.jsx)(l.A, { ...M }),
      badge: 3
    },
    { value: "profile", label: "Profile", icon: (0, r.jsx)(o.A, { ...M }) }
  ], E = { value: "search", label: "Search", icon: (0, r.jsx)(c.A, { ...M }) }, z = Array.from({ length: 14 }, (e2, t2) => ({
    wide: t2 % 3 != 1,
    tall: t2 % 4 == 0
  }));
  function I() {
    let [e2, t2] = (0, s.useState)("home"), a2 = (0, s.useRef)(null);
    return (0, r.jsxs)("div", {
      className: G().demo,
      children: [
        (0, r.jsx)("div", {
          ref: a2,
          className: G().scroller,
          children: (0, r.jsx)("div", {
            className: G().canvas,
            "aria-hidden": "true",
            children: z.map(
              (e3, t3) => (0, r.jsx)(
                "span",
                {
                  className: G().row,
                  "data-tall": e3.tall || void 0,
                  "data-wide": e3.wide || void 0
                },
                t3
              )
            )
          })
        }),
        (0, r.jsx)(T, {
          className: G().tabbar,
          items: N,
          action: E,
          value: e2,
          onValueChange: t2,
          scrollRef: a2,
          label: "Main"
        })
      ]
    });
  }
  let C = I;
}

__m(__module,__exports,__require);
});
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
A.regCss(74839, ".demo{position:relative;width:100%;max-width:420px;height:560px;margin-inline:auto;overflow:hidden;background:transparent;font-family:var(--font-body);letter-spacing:var(--tracking-body);isolation:isolate}\n@media (max-width:480px){.demo{height:520px}\n.scroller{height:100%;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none;-webkit-mask-image:linear-gradient(180deg,transparent,#000 36px,#000 calc(100% - 18px),transparent);mask-image:linear-gradient(180deg,transparent,#000 36px,#000 calc(100% - 18px),transparent)}\n.scroller::-webkit-scrollbar{display:none}\n.canvas{display:grid;gap:14px;padding:28px 28px 140px}\n.row{display:block;height:64px;border-radius:16px;background:var(--surface-muted)}\n.row[data-wide]{width:100%}\n.row:not([data-wide]){width:62%}\n.row[data-tall]{height:132px}\n.tabbar{position:absolute;left:12px;right:12px;bottom:22px;z-index:1}", {"demo":"demo","scroller":"scroller","canvas":"canvas","row":"row","tabbar":"tabbar"});
A.reg(88359, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "user-round",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
      ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
    ],
    aliases: ["user-2"]
  };
  o.node;
  let l = (0, r.A)(o);
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
A.cssFor("glass-tabbar", [18302,74839]);
A.item("glass-tabbar", {entry:43638, export:"GlassTabBarDemo", kind:"component", tier:"pro", unresolved:[]});
})();