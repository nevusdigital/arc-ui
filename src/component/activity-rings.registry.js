/* activity-rings (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(3575, ".demo{display:grid;width:min(100%,38rem);justify-items:center;gap:var(--space-4)}\n.actions{display:flex;flex-wrap:wrap;justify-content:center;gap:var(--space-2)}\n@media (max-width:400px){.actions{gap:var(--space-1)}\n.actions>button{padding-inline:var(--space-2)}\n.actions>button:last-child{width:var(--space-8);padding-inline:0}\n.actions>:not(:last-child) svg{display:none}", {"demo":"demo","actions":"actions"});
A.reg(9937, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { x: () => o });
  var n = i(95155), a = i(12115), r = i(30123), l = i(24866), s = i(28819);
  function o({ children: e2, ...t2 }) {
    let i2 = (0, a.useContext)(l.Q);
    (t2 = { ...i2, ...t2 }).transition = (0, r.K)(t2.transition, i2.transition), t2.isStatic = (0, s.M)(() => t2.isStatic);
    let u = (0, a.useMemo)(
      () => t2,
      [
        JSON.stringify(t2.transition),
        t2.transformPagePoint,
        t2.reducedMotion,
        t2.skipAnimations,
        t2.isValidProp
      ]
    );
    return (0, n.jsx)(l.Q.Provider, { value: u, children: e2 });
  }
}

__m(__module,__exports,__require);
});
A.reg(28342, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => n });
  var i = t(51811);
  let r = {
    name: "timer",
    size: 24,
    node: [
      ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
      ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
      ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
    ]
  };
  r.node;
  let n = (0, i.A)(r);
}

__m(__module,__exports,__require);
});
A.reg(40557, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "book-open",
    size: 24,
    node: [
      ["path", { d: "M12 5v16", key: "1f6ucr" }],
      [
        "path",
        {
          d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",
          key: "1fyvmf"
        }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(57394, function(__module,__exports,__require){
"use strict";
function __m(e, i, a) {
  "use strict";
  a.r(i), a.d(i, { ActivityRingsDemo: () => C });
  var t = a(95155), r = a(12115), s = a(28342), n = a(58081), l = a(40557), d = a(92298), c = a(51288), o = a(55809), u = a(25354), m = a(80642), h = a(18310), g = a(28245), y = a(92171), _ = a(9937), x = a(57700), v = a(64577), p = a(7770), j = a(84166), k = a.n(j);
  let f = ["oklch(60% .17 275)", "oklch(75% .15 68)", "oklch(66% .09 160)"], b = (e2, i2, a2) => Math.min(a2, Math.max(i2, e2)), w = new Intl.NumberFormat("en-US");
  function N(e2) {
    let i2 = 106 - 20 * e2;
    return { outer: i2, inner: i2 - 13, mid: i2 - 6.5 };
  }
  function A({ metric: e2, color: i2, index: a2, values: r2, dimmed: s2, uid: n2 }) {
    let { outer: l2, inner: d2, mid: c2 } = N(a2), m2 = 4 * Math.round(2 * Math.PI * c2 / 11 / 4), h2 = (0, o.G)(r2, (i3) => Math.max(0, (i3[a2] ?? 0) / e2.goal)), g2 = (0, o.G)(h2, (e3) => b(e3, 0, 1)), y2 = (0, o.G)(h2, (e3) => b(e3 - 1, 0, 1)), _2 = (0, o.G)(h2, (e3) => +(e3 > 1.005)), x2 = `${n2}-mask-${a2}`, v2 = Array.from({ length: m2 }, (e3, i3) => {
      let a3 = i3 / m2 * Math.PI * 2, r3 = (e4, i4) => Math.round((110 + i4(a3) * e4) * 1e3) / 1e3;
      return (0, t.jsx)(
        "line",
        {
          x1: r3(d2 + 1, Math.cos),
          y1: r3(d2 + 1, Math.sin),
          x2: r3(l2 - 1, Math.cos),
          y2: r3(l2 - 1, Math.sin)
        },
        i3
      );
    });
    return (0, t.jsxs)("g", {
      className: k().ring,
      "data-dimmed": s2 || void 0,
      style: { "--ring": i2 },
      children: [
        (0, t.jsx)("mask", {
          id: x2,
          children: (0, t.jsx)("g", {
            transform: "rotate(-90 110 110)",
            children: (0, t.jsx)(u.PY1.circle, {
              cx: 110,
              cy: 110,
              r: c2,
              fill: "none",
              stroke: "white",
              strokeWidth: 17,
              style: { pathLength: g2 }
            })
          })
        }),
        (0, t.jsx)("g", { className: k().ticksBase, children: v2 }),
        (0, t.jsx)("g", {
          className: k().ticksFill,
          mask: `url(#${x2})`,
          children: v2
        }),
        (0, t.jsx)("g", {
          transform: "rotate(-90 110 110)",
          children: (0, t.jsx)(u.PY1.circle, {
            className: k().lap,
            cx: 110,
            cy: 110,
            r: d2 - 4,
            style: { pathLength: y2, opacity: _2 }
          })
        })
      ]
    });
  }
  function M({ metric: e2, index: i2, values: a2, dimmed: r2 }) {
    let { outer: s2 } = N(i2), n2 = (0, o.G)(a2, (a3) => 360 * Math.max(0, (a3[i2] ?? 0) / e2.goal)), l2 = (0, o.G)(a2, (a3) => +((a3[i2] ?? 0) > 5e-3 * e2.goal)), d2 = (e3) => `${e3 / 220 * 100}%`;
    return (0, t.jsx)(u.PY1.div, {
      className: k().markerArm,
      "data-dimmed": r2 || void 0,
      style: { rotate: n2, opacity: l2 },
      "aria-hidden": "true",
      children: (0, t.jsx)("span", {
        className: k().marker,
        style: { top: d2(110 - s2 - 2), height: d2(17) }
      })
    });
  }
  function S({ value: e2, format: i2 }) {
    let a2 = (0, o.G)(e2, i2);
    return (0, t.jsx)(u.PY1.span, { children: a2 });
  }
  function P({
    metric: e2,
    color: i2,
    index: a2,
    values: r2,
    target: s2,
    pressed: n2,
    dimmed: l2,
    onToggle: d2,
    onHover: c2
  }) {
    let h2 = (0, o.G)(r2, (e3) => e3[a2] ?? 0), g2 = s2 >= e2.goal;
    return (0, t.jsxs)("button", {
      type: "button",
      className: k().legendRow,
      "aria-pressed": n2,
      "data-dimmed": l2 || void 0,
      style: { "--ring": i2 },
      "aria-label": `${e2.label}, ${w.format(s2)} of ${w.format(e2.goal)} ${e2.unit}, ${Math.round(s2 / e2.goal * 100)} percent${g2 ? ", goal met" : ""}`,
      onClick: d2,
      onPointerEnter: (e3) => "mouse" === e3.pointerType && c2(true),
      onPointerLeave: () => c2(false),
      onFocus: () => c2(true),
      onBlur: () => c2(false),
      children: [
        (0, t.jsx)("span", { className: k().swatch, "aria-hidden": "true" }),
        (0, t.jsxs)("span", {
          className: k().legendText,
          "aria-hidden": "true",
          children: [
            (0, t.jsx)("span", {
              className: k().legendLabel,
              children: e2.label
            }),
            (0, t.jsxs)("span", {
              className: k().legendValue,
              children: [
                (0, t.jsx)(S, {
                  value: h2,
                  format: (e3) => w.format(Math.round(e3))
                }),
                " / ",
                w.format(e2.goal),
                " ",
                e2.unit
              ]
            })
          ]
        }),
        (0, t.jsxs)("span", {
          className: k().legendPercent,
          "aria-hidden": "true",
          children: [
            (0, t.jsx)(m.N, {
              initial: false,
              children: g2 && (0, t.jsx)(
                u.PY1.span,
                {
                  className: k().met,
                  initial: { opacity: 0, scale: 0.6 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.6 },
                  transition: p.T.spring.snappy,
                  children: (0, t.jsx)(v.A, { size: 12, strokeWidth: 2.25 })
                },
                "met"
              )
            }),
            (0, t.jsx)(S, {
              value: h2,
              format: (i3) => `${Math.round(i3 / e2.goal * 100)}%`
            })
          ]
        })
      ]
    });
  }
  function L({ metrics: e2, day: i2 }) {
    return (0, t.jsx)("svg", {
      className: k().mini,
      viewBox: "0 0 32 32",
      "aria-hidden": "true",
      children: e2.map((e3, a2) => {
        let r2 = 14 - 4.5 * a2, s2 = b((i2.values[e3.id] ?? 0) / e3.goal, 0, 1);
        return (0, t.jsxs)(
          "g",
          {
            style: { "--ring": e3.color ?? f[a2 % f.length] },
            children: [
              (0, t.jsx)("circle", {
                className: k().miniTrack,
                cx: "16",
                cy: "16",
                r: r2
              }),
              (0, t.jsx)("circle", {
                className: k().miniArc,
                cx: "16",
                cy: "16",
                r: r2,
                pathLength: 1,
                strokeDasharray: `${s2} 1`
              })
            ]
          },
          e3.id
        );
      })
    });
  }
  function $({
    metrics: e2,
    days: i2,
    day: a2,
    defaultDay: s2,
    onDayChange: n2,
    focused: l2,
    defaultFocused: d2 = null,
    onFocusedChange: c2,
    onRingClose: v2,
    label: j2 = "Activity",
    className: N2
  }) {
    let z2 = (0, h.I)() ?? false, T2 = (0, r.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), [I2, G2] = (0, r.useState)(s2 ?? i2[i2.length - 1]?.id), [Y2, C2] = (0, r.useState)(d2), [D, F] = (0, r.useState)(null), V = a2 ?? I2, B = i2.find((e3) => e3.id === V) ?? i2[i2.length - 1], H = void 0 === l2 ? Y2 : l2, R = D ?? H, W = e2.map((e3) => B?.values[e3.id] ?? 0), E = W.join(","), q = (0, g.d)(e2.map(() => 0)), Z = (0, r.useRef)(null), U = (0, r.useRef)([]);
    (0, r.useEffect)(() => {
      let e3 = E.split(",").map(Number);
      if (z2) return void q.set(e3);
      let i3 = q.get(), a3 = (0, y.i)(0, 1, {
        type: "spring",
        visualDuration: 0.9,
        bounce: 0,
        onUpdate: (a4) => q.set(i3.map((i4, t2) => i4 + ((e3[t2] ?? 0) - i4) * a4))
      });
      return () => a3.stop();
    }, [E, q, z2]), (0, r.useEffect)(() => {
      let i3 = Z.current, a3 = E.split(",").map(Number);
      i3 && i3.day === V && e2.forEach((e3, t2) => {
        (i3.targets[t2] ?? 0) < e3.goal && (a3[t2] ?? 0) >= e3.goal && v2?.(e3.id, V);
      }), Z.current = { day: V, targets: a3 };
    }, [E, V, e2, v2]);
    let J = (e3, i3) => e3.color ?? f[i3 % f.length], O = e2.findIndex((e3) => e3.id === R), K = O >= 0 ? e2[O] : null, Q = (0, o.G)(
      q,
      (i3) => e2.reduce((e3, a3, t2) => e3 + b((i3[t2] ?? 0) / a3.goal, 0, 1), 0) / Math.max(1, e2.length) * 100
    ), X = (0, o.G)(q, (e3) => O >= 0 ? e3[O] ?? 0 : 0), ee = {
      initial: { opacity: 0, y: 6, filter: `blur(${p.T.blur.subtle}px)` },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: {
        opacity: 0,
        y: -6,
        filter: `blur(${p.T.blur.subtle}px)`,
        transition: { duration: p.T.duration.instant }
      },
      transition: { duration: p.T.duration.standard, ease: p.T.ease.enter }
    };
    return (0, t.jsx)(_.x, {
      reducedMotion: "user",
      children: (0, t.jsxs)("section", {
        className: [k().root, N2].filter(Boolean).join(" "),
        "aria-label": j2,
        children: [
          (0, t.jsxs)("div", {
            className: k().main,
            children: [
              (0, t.jsxs)("div", {
                className: k().dial,
                children: [
                  (0, t.jsx)("svg", {
                    className: k().rings,
                    viewBox: "0 0 220 220",
                    role: "img",
                    "aria-label": `${B?.label}: ${e2.map((e3, i3) => `${e3.label} ${Math.round(W[i3] / e3.goal * 100)}%`).join(", ")}`,
                    children: e2.map(
                      (e3, i3) => (0, t.jsx)(
                        A,
                        {
                          metric: e3,
                          color: J(e3, i3),
                          index: i3,
                          values: q,
                          dimmed: !!R && R !== e3.id,
                          uid: T2
                        },
                        e3.id
                      )
                    )
                  }),
                  e2.map(
                    (e3, i3) => (0, t.jsx)(
                      M,
                      {
                        metric: e3,
                        index: i3,
                        values: q,
                        dimmed: !!R && R !== e3.id
                      },
                      e3.id
                    )
                  ),
                  (0, t.jsx)("div", {
                    className: k().center,
                    "aria-hidden": "true",
                    children: (0, t.jsx)(m.N, {
                      initial: false,
                      mode: "popLayout",
                      children: (0, t.jsxs)(
                        u.PY1.div,
                        {
                          className: k().centerInner,
                          ...ee,
                          children: [
                            (0, t.jsx)("span", {
                              className: k().centerValue,
                              children: K ? (0, t.jsx)(S, {
                                value: X,
                                format: (e3) => w.format(Math.round(e3))
                              }) : (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)(S, {
                                    value: Q,
                                    format: (e3) => String(Math.round(e3))
                                  }),
                                  (0, t.jsx)("span", {
                                    className: k().centerUnit,
                                    children: "%"
                                  })
                                ]
                              })
                            }),
                            (0, t.jsx)("span", {
                              className: k().centerLabel,
                              children: K ? `${K.unit} ${K.label.toLowerCase()}` : "of goals"
                            })
                          ]
                        },
                        K?.id ?? "overall"
                      )
                    })
                  })
                ]
              }),
              (0, t.jsx)("div", {
                className: k().legend,
                children: e2.map(
                  (e3, i3) => (0, t.jsx)(
                    P,
                    {
                      metric: e3,
                      color: J(e3, i3),
                      index: i3,
                      values: q,
                      target: W[i3],
                      pressed: H === e3.id,
                      dimmed: !!R && R !== e3.id,
                      onToggle: () => {
                        var i4;
                        let a3;
                        C2(a3 = H === (i4 = e3.id) ? null : i4), c2?.(a3);
                      },
                      onHover: (i4) => F(i4 ? e3.id : null)
                    },
                    e3.id
                  )
                )
              })
            ]
          }),
          (0, t.jsx)(x.o, {
            id: T2,
            children: (0, t.jsx)("div", {
              className: k().week,
              role: "radiogroup",
              "aria-label": "Day",
              onKeyDown: function(e3) {
                var a3;
                let t2 = i2.findIndex((e4) => e4.id === B?.id), r2 = {
                  ArrowRight: 1,
                  ArrowDown: 1,
                  ArrowLeft: -1,
                  ArrowUp: -1,
                  Home: -1 / 0,
                  End: 1 / 0
                };
                if (!(e3.key in r2)) return;
                e3.preventDefault();
                let s3 = r2[e3.key] === 1 / 0 ? i2.length - 1 : r2[e3.key] === -1 / 0 ? 0 : b(t2 + r2[e3.key], 0, i2.length - 1);
                G2(a3 = i2[s3].id), n2?.(a3), U.current[s3]?.focus();
              },
              children: i2.map((i3, a3) => {
                let r2 = i3.id === B?.id;
                return (0, t.jsxs)(
                  "button",
                  {
                    ref: (e3) => {
                      U.current[a3] = e3;
                    },
                    type: "button",
                    role: "radio",
                    "aria-checked": r2,
                    "aria-label": i3.label,
                    tabIndex: r2 ? 0 : -1,
                    className: k().day,
                    onClick: () => {
                      var e3;
                      G2(e3 = i3.id), n2?.(e3);
                    },
                    children: [
                      r2 && (0, t.jsx)(u.PY1.span, {
                        layoutId: "day-highlight",
                        className: k().dayHighlight,
                        transition: p.T.spring.morph
                      }),
                      (0, t.jsx)(L, { metrics: e2, day: i3 }),
                      (0, t.jsx)("span", {
                        className: k().dayLabel,
                        children: i3.short
                      })
                    ]
                  },
                  i3.id
                );
              })
            })
          })
        ]
      })
    });
  }
  var z = a(3575), T = a.n(z);
  let I = [
    { id: "focus", label: "Deep work", unit: "min", goal: 180 },
    { id: "words", label: "Writing", unit: "words", goal: 1200 },
    { id: "reading", label: "Reading", unit: "pages", goal: 40 }
  ], G = [
    {
      id: "mon",
      label: "Monday, September 14",
      short: "Mon",
      values: { focus: 205, words: 1480, reading: 32 }
    },
    {
      id: "tue",
      label: "Tuesday, September 15",
      short: "Tue",
      values: { focus: 120, words: 860, reading: 44 }
    },
    {
      id: "wed",
      label: "Wednesday, September 16",
      short: "Wed",
      values: { focus: 240, words: 2110, reading: 18 }
    },
    {
      id: "thu",
      label: "Thursday, September 17",
      short: "Thu",
      values: { focus: 165, words: 1190, reading: 41 }
    },
    {
      id: "fri",
      label: "Friday, September 18",
      short: "Fri",
      values: { focus: 95, words: 540, reading: 26 }
    },
    {
      id: "sat",
      label: "Saturday, September 19",
      short: "Sat",
      values: { focus: 60, words: 300, reading: 72 }
    },
    {
      id: "sun",
      label: "Sunday, September 20",
      short: "Sun",
      values: { focus: 130, words: 940, reading: 22 }
    }
  ], Y = G[G.length - 1].id;
  function C() {
    let [e2, i2] = (0, r.useState)(G), [a2, o2] = (0, r.useState)(Y);
    function u2(e3, a3) {
      o2(Y), i2(
        (i3) => i3.map(
          (i4) => i4.id === Y ? { ...i4, values: { ...i4.values, [e3]: i4.values[e3] + a3 } } : i4
        )
      );
    }
    return (0, t.jsxs)("div", {
      className: T().demo,
      children: [
        (0, t.jsx)($, {
          metrics: I,
          days: e2,
          day: a2,
          onDayChange: o2,
          label: "Goals this week"
        }),
        (0, t.jsxs)("div", {
          className: T().actions,
          children: [
            (0, t.jsxs)(c.A, {
              variant: "secondary",
              size: "sm",
              onClick: () => u2("focus", 25),
              children: [
                (0, t.jsx)(s.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                "25 min"
              ]
            }),
            (0, t.jsxs)(c.A, {
              variant: "secondary",
              size: "sm",
              onClick: () => u2("words", 250),
              children: [
                (0, t.jsx)(n.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                "250 words"
              ]
            }),
            (0, t.jsxs)(c.A, {
              variant: "secondary",
              size: "sm",
              onClick: () => u2("reading", 10),
              children: [
                (0, t.jsx)(l.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                "10 pages"
              ]
            }),
            (0, t.jsx)(c.A, {
              variant: "ghost",
              size: "sm",
              "aria-label": "Reset week",
              disabled: e2 === G && a2 === Y,
              onClick: () => {
                i2(G), o2(Y);
              },
              children: (0, t.jsx)(d.A, {
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            })
          ]
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(58081, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var r = a(51811);
  let n = {
    name: "pen-line",
    size: 24,
    node: [
      ["path", { d: "M13 21h8", key: "1jsn5i" }],
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
          key: "1a8usu"
        }
      ]
    ],
    aliases: ["edit-3"]
  };
  n.node;
  let d = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(84166, ".root{display:grid;width:min(100%,38rem);gap:20px;color:var(--foreground);container-type:inline-size;font-family:var(--font-body);letter-spacing:var(--tracking-body);-webkit-tap-highlight-color:transparent}\n.main{display:grid;align-items:center;gap:16px;justify-items:center}\n@container (min-width: 30rem){.main{gap:28px;grid-template-columns:auto minmax(0,1fr);justify-items:stretch}\n.dial{position:relative;width:11.5rem;aspect-ratio:1}\n.dial{width:13.5rem}\n.rings{display:block;width:100%;height:100%;overflow:visible}\n.ring{transition:opacity var(--duration-standard) var(--ease-standard)}\n.ring[data-dimmed]{opacity:.22}\n@media (prefers-reduced-motion:reduce){.legendRow,.marker,.miniArc,.ring{transition-duration:1ms}\n.ticksBase line{stroke:color-mix(in oklab,var(--foreground) 11%,transparent);stroke-linecap:round;stroke-width:2.2}\n.ticksFill line{stroke:var(--ring);stroke-linecap:round;stroke-width:2.6}\n.lap{fill:none;stroke:var(--ring);stroke-linecap:round;stroke-width:1.5}\n.markerArm{position:absolute;inset:0;pointer-events:none;transition:filter var(--duration-standard) var(--ease-standard)}\n.markerArm[data-dimmed]>.marker{background:color-mix(in oklab,var(--foreground) 22%,transparent)}\n.marker{position:absolute;left:50%;width:3px;border-radius:2px;background:var(--foreground);box-shadow:0 0 0 2px var(--background);translate:-50% 0;transition:background-color var(--duration-standard) var(--ease-standard)}\n.center{position:absolute;inset:26%;display:grid;place-items:center;pointer-events:none}\n.centerInner{display:grid;grid-area:1/1;justify-items:center;gap:2px;text-align:center}\n.centerValue{display:flex;align-items:baseline;font-family:var(--font-display);font-size:var(--text-2xl);font-variant-numeric:tabular-nums;letter-spacing:var(--tracking-display);line-height:1}\n.centerValue{font-size:var(--text-3xl)}\n.centerUnit{margin-left:1px;color:var(--text-secondary);font-size:var(--text-base)}\n.centerLabel{max-width:7rem;color:var(--text-secondary);font-size:var(--text-xs);line-height:1.25}\n.legend{display:grid;width:100%;gap:2px;grid-template-columns:minmax(0,1fr)}\n.legendRow{position:relative;display:grid;min-width:0;align-items:center;gap:12px;padding:8px 12px;border:0;border-radius:var(--radius-control);background:transparent;color:inherit;cursor:pointer;font:inherit;letter-spacing:inherit;text-align:left;grid-template-columns:auto minmax(0,1fr) auto;transition:background-color var(--duration-fast) var(--ease-standard),opacity var(--duration-standard) var(--ease-standard)}\n.legendRow[aria-pressed=true]{background:var(--surface-muted)}\n.legendRow[data-dimmed]{opacity:.5}\n.legendRow:active{background:var(--surface-muted)}\n@media (hover:hover) and (pointer:fine){.legendRow:hover{background:var(--surface-muted)}\n.legendRow{padding:10px 12px}\n.swatch{width:3px;height:30px;border-radius:2px;background:var(--ring)}\n.swatch{height:32px}\n.legendText{display:grid;min-width:0}\n.legendLabel{overflow:hidden;font-size:var(--text-sm);font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.legendValue{overflow:hidden;color:var(--text-secondary);font-size:var(--text-xs);font-variant-numeric:tabular-nums;text-overflow:ellipsis;white-space:nowrap}\n.legendPercent{display:flex;align-items:center;gap:6px;color:var(--text-secondary);font-size:var(--text-sm);font-variant-numeric:tabular-nums}\n.met{display:grid;width:16px;height:16px;place-items:center;border-radius:50%;background:color-mix(in oklab,var(--success) 14%,transparent);color:var(--success)}\n.week{display:grid;gap:2px;grid-template-columns:repeat(7,minmax(0,1fr))}\n.day{position:relative;display:grid;min-width:0;justify-items:center;gap:4px;padding:8px 0 6px;border:0;border-radius:var(--radius-control);background:transparent;color:var(--text-secondary);cursor:pointer;font:inherit;font-size:var(--text-xs);letter-spacing:inherit;transition:color var(--duration-fast) var(--ease-standard)}\n.day[aria-checked=true]{color:var(--foreground)}\n@media (hover:hover) and (pointer:fine){.day:hover{color:var(--foreground)}\n.dayHighlight{position:absolute;inset:0;border-radius:inherit;background:var(--surface-muted)}\n.dayLabel{position:relative}\n.mini{position:relative;width:30px;height:30px}\n.miniTrack{fill:none;stroke:color-mix(in oklab,var(--foreground) 9%,transparent);stroke-width:3}\n.miniArc{fill:none;stroke:var(--ring);stroke-linecap:round;stroke-width:3;transform:rotate(-90deg);transform-box:fill-box;transform-origin:center;transition:stroke-dasharray var(--duration-considered) var(--ease-standard)}", {"root":"root","main":"main","dial":"dial","rings":"rings","ring":"ring","legendRow":"legendRow","marker":"marker","miniArc":"miniArc","ticksBase":"ticksBase","ticksFill":"ticksFill","lap":"lap","markerArm":"markerArm","center":"center","centerInner":"centerInner","centerValue":"centerValue","centerUnit":"centerUnit","centerLabel":"centerLabel","legend":"legend","swatch":"swatch","legendText":"legendText","legendLabel":"legendLabel","legendValue":"legendValue","legendPercent":"legendPercent","met":"met","week":"week","day":"day","dayHighlight":"dayHighlight","dayLabel":"dayLabel","mini":"mini","miniTrack":"miniTrack"});
A.cssFor("activity-rings", [3575,84166]);
A.item("activity-rings", {entry:57394, export:"ActivityRingsDemo", kind:"component", tier:"pro", unresolved:[]});
})();