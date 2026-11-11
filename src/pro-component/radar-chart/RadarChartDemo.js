function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { RadarChartDemo: () => $, default: () => M });
  var r = a(95155), l = a(12115), n = a(18310), s = a(61792), i = a(28245), o = a(92171), c = a(22535), u = a(25354), d = a(7770), h = a(49106), p = a.n(h);
  let m = ({ visualDuration: e2, bounce: t2 }, a2 = 5e-4) => {
    let r2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: r2 * r2,
      damping: 2 * (1 - t2) * r2,
      restDelta: a2,
      restSpeed: 2 * a2
    };
  }, f = m({ visualDuration: 0.6, bounce: d.T.spring.morph.bounce }), _ = { stiffness: 460, damping: 40, restDelta: 0.01 }, y = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), x = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }), b = () => () => {
  };
  function v({
    axes: e2,
    series: t2,
    label: a2,
    max: h2 = 100,
    rings: g2 = 4,
    size: j2 = 320,
    formatValue: k2,
    activeAxis: N2,
    onActiveAxisChange: w2,
    legend: L2 = true,
    emptyLabel: $2 = "No data",
    ref: M2,
    className: T
  }) {
    let A, R = (A = (0, l.useSyncExternalStore)(
      b,
      () => true,
      () => false
    ), !!(0, n.I)() && A), P = (0, l.useRef)(null), z = (0, l.useRef)(null), E = (0, l.useRef)(null), I = (0, l.useRef)([]);
    (0, l.useImperativeHandle)(M2, () => P.current);
    let S = (0, s.W)(P, { once: true, amount: 0.35 }), W = e2.length, D = t2.slice(0, 3), O = W < 3 || 0 === D.length, [C, F] = (0, l.useState)(0);
    (0, l.useLayoutEffect)(() => {
      let e3 = z.current;
      if (!e3) return;
      let t3 = () => F(e3.clientWidth);
      if (t3(), "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(t3);
      return a3.observe(e3), () => a3.disconnect();
    }, []);
    let U = C < 360 ? 46 : 64, Y = Math.max(40, Math.min(j2, C - 2 * U) / 2), B = 2 * Y + 2 * U, V = B / 2, K = B / 2, H = (e3) => e3 / Math.max(1, W) * Math.PI * 2, X = (0, l.useCallback)(
      (e3, t3) => ({
        x: V + Math.sin(H(e3)) * Y * t3,
        y: K - Math.cos(H(e3)) * Y * t3
      }),
      [V, K, Y, W]
    ), q = Array.from(
      { length: 3 },
      (t3, a3) => D[a3] ? e2.map((e3) => y((D[a3].values[e3.key] ?? 0) / (e3.max ?? h2), 0, 1)) : e2.map(() => 0)
    ), G = `${e2.map((e3) => `${e3.key}:${e3.max ?? h2}`).join(",")}|${q.map((e3) => e3.join(",")).join(";")}`, Q = (0, l.useRef)(Array.from({ length: 3 }, () => e2.map(() => 0))), Z = (0, i.d)(0), J = (0, l.useCallback)(() => {
      let e3 = Z.get();
      Q.current.forEach((t3, a3) => {
        let r2 = I.current[a3];
        if (!r2) return;
        if (!W || t3.every((e4) => 0 === e4))
          return void r2.setAttribute("d", "");
        let l2 = t3.map((t4, a4) => {
          let r3 = X(a4, t4 * e3);
          return `${a4 ? "L" : "M"}${r3.x.toFixed(2)},${r3.y.toFixed(2)}`;
        }).join("") + "Z";
        r2.setAttribute("d", l2);
      });
    }, [Z, W, X]), ee = (0, l.useRef)(J);
    (0, l.useLayoutEffect)(() => {
      ee.current = J, J();
    }, [J, C]), (0, l.useEffect)(() => {
      let e3 = Q.current.map(
        (e4, t4) => e4.length === W ? e4.slice() : q[t4].map(() => 0)
      );
      if (R) {
        Q.current = q, ee.current();
        return;
      }
      let t3 = (0, o.i)(0, 1, {
        ...f,
        onUpdate: (t4) => {
          Q.current = e3.map(
            (e4, a3) => e4.map((e5, r2) => e5 + (q[a3][r2] - e5) * t4)
          ), ee.current();
        }
      });
      return () => t3.stop();
    }, [G, R]), (0, l.useEffect)(() => {
      if (O) return;
      if (R) {
        Z.jump(1), ee.current();
        return;
      }
      if (!S || Z.get() >= 1) return;
      let e3 = (0, o.i)(Z, 1, {
        ...m({ visualDuration: 0.9, bounce: 0 }),
        onUpdate: () => ee.current()
      });
      return () => e3.stop();
    }, [O, Z, S, R]);
    let [et, ea] = (0, l.useState)(null), er = void 0 !== N2 ? N2 : et, el = er ? e2.findIndex((e3) => e3.key === er) : -1, en = el >= 0 ? el : null, [es, ei] = (0, l.useState)(en);
    null !== en && en !== es && ei(en);
    let eo = (t3) => {
      let a3 = null === t3 ? null : e2[t3]?.key ?? null;
      void 0 === N2 && ea(a3), a3 !== er && w2?.(a3);
    }, [ec, eu] = (0, l.useState)(null), ed = [(0, i.d)(0), (0, i.d)(0), (0, i.d)(0)], eh = [(0, i.d)(0), (0, i.d)(0), (0, i.d)(0)], ep = [(0, c.z)(ed[0], _), (0, c.z)(ed[1], _), (0, c.z)(ed[2], _)], em = [(0, c.z)(eh[0], _), (0, c.z)(eh[1], _), (0, c.z)(eh[2], _)], ef = (0, i.d)(0), e_ = (0, i.d)(0), ey = (0, c.z)(ef, _), ex = (0, c.z)(e_, _), eb = (0, l.useRef)(false);
    (0, l.useLayoutEffect)(() => {
      if (null === en) {
        eb.current = false;
        return;
      }
      let e3 = !eb.current || R;
      q.forEach((t4, a4) => {
        let r2 = X(en, t4[en] ?? 0);
        ed[a4].set(r2.x), eh[a4].set(r2.y), e3 && (ep[a4].jump(r2.x), em[a4].jump(r2.y));
      });
      let t3 = E.current, a3 = z.current;
      if (t3 && a3) {
        let r2, l2, n2 = t3.offsetWidth, s2 = t3.offsetHeight, i2 = a3.clientWidth, o2 = a3.clientHeight, c2 = (i2 - B) / 2, u2 = X(en, 1), d2 = Math.sin(H(en)), h3 = -Math.cos(H(en));
        0.35 > Math.abs(d2) ? (r2 = c2 + u2.x + 60, l2 = u2.y + 12 * h3 - s2 / 2) : (r2 = d2 > 0 ? c2 + u2.x + 2 : c2 + u2.x - n2 - 2, l2 = h3 < 0 ? u2.y - s2 - 20 : u2.y + 22), r2 = y(r2, 0, Math.max(0, i2 - n2)), l2 = y(l2, 0, Math.max(0, o2 - s2)), ef.set(r2), e_.set(l2), e3 && (ey.jump(r2), ex.jump(l2));
      }
      eb.current = true;
    });
    let ev = (e3, t3) => {
      let a3 = z.current?.getBoundingClientRect();
      if (!a3 || O) return null;
      let r2 = e3 - a3.left - (a3.width - B) / 2 - V, l2 = t3 - a3.top - K;
      return Math.hypot(r2, l2) < 0.12 * Y ? en : Math.round(
        (Math.atan2(r2, -l2) + 2 * Math.PI) % (2 * Math.PI) / (2 * Math.PI / W)
      ) % W;
    }, eg = (e3, t3) => k2 ? k2(e3, t3) : x.format(e3), ej = null !== en ? e2[en] : null, ek = ej ?? (null !== es ? e2[es] ?? null : null), eN = ek ? D.map((e3, t3) => ({
      item: e3,
      slot: t3,
      value: e3.values[ek.key] ?? 0
    })).sort((e3, t3) => t3.value - e3.value) : [], ew = eN[0]?.value ?? 0, eL = ej ? `${ej.label}. ${eN.map((e3) => `${e3.item.label} ${eg(e3.value, ej)}`).join(", ")}` : "", e$ = O ? `${a2}. ${$2}.` : `${a2}. ${D.map((t3) => `${t3.label}: ${e2.map((e3) => `${e3.label} ${eg(t3.values[e3.key] ?? 0, e3)}`).join(", ")}`).join(". ")}.`, eM = C ? (C - B) / 2 : 0;
    return (0, r.jsxs)("figure", {
      ref: P,
      className: [p().figure, T].filter(Boolean).join(" "),
      "aria-label": a2,
      children: [
        (0, r.jsxs)("div", {
          ref: z,
          className: p().stage,
          style: { height: C ? B : void 0 },
          "data-active": null !== en || void 0,
          "data-focus": null !== ec || void 0,
          role: "group",
          tabIndex: O ? -1 : 0,
          "aria-roledescription": "radar chart",
          "aria-label": `${a2}. Use arrow keys to move between measures.`,
          onPointerMove: (e3) => {
            ("mouse" === e3.pointerType || e3.buttons) && eo(ev(e3.clientX, e3.clientY));
          },
          onPointerDown: (e3) => {
            "mouse" !== e3.pointerType && e3.currentTarget.setPointerCapture?.(e3.pointerId), eo(ev(e3.clientX, e3.clientY));
          },
          onPointerUp: (e3) => {
            "mouse" !== e3.pointerType && eo(null);
          },
          onPointerCancel: () => eo(null),
          onPointerLeave: (e3) => {
            "mouse" === e3.pointerType && eo(null);
          },
          onKeyDown: (e3) => {
            if (O) return;
            if ("Escape" === e3.key && null !== en) {
              e3.preventDefault(), eo(null);
              return;
            }
            let t3 = en ?? -1, a3 = {
              ArrowRight: t3 + 1,
              ArrowDown: t3 + 1,
              ArrowLeft: t3 < 0 ? W - 1 : t3 - 1,
              ArrowUp: t3 < 0 ? W - 1 : t3 - 1,
              Home: 0,
              End: W - 1
            };
            e3.key in a3 && (e3.preventDefault(), eo((a3[e3.key] + W) % W));
          },
          onBlur: () => eo(null),
          onFocus: (e3) => {
            e3.currentTarget.matches(":focus-visible") && !O && null === en && eo(0);
          },
          children: [
            C > 0 && (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)("svg", {
                  className: p().svg,
                  width: B,
                  height: B,
                  style: { left: eM },
                  "aria-hidden": "true",
                  focusable: "false",
                  children: [
                    (0, r.jsxs)("g", {
                      className: p().web,
                      "data-shown": S || R || void 0,
                      children: [
                        Array.from({ length: g2 }, (t3, a3) => {
                          let l2 = (a3 + 1) / g2;
                          return (0, r.jsx)(
                            "path",
                            {
                              className: p().ring,
                              d: e2.map((e3, t4) => {
                                let a4 = X(t4, l2);
                                return `${t4 ? "L" : "M"}${a4.x.toFixed(2)},${a4.y.toFixed(2)}`;
                              }).join("") + "Z"
                            },
                            a3
                          );
                        }),
                        e2.map((e3, t3) => {
                          let a3 = X(t3, 1);
                          return (0, r.jsx)(
                            "line",
                            {
                              className: p().spoke,
                              "data-on": en === t3 || void 0,
                              x1: V,
                              y1: K,
                              x2: a3.x,
                              y2: a3.y
                            },
                            e3.key
                          );
                        })
                      ]
                    }),
                    Array.from(
                      { length: 3 },
                      (e3, t3) => (0, r.jsx)(
                        "path",
                        {
                          ref: (e4) => {
                            I.current[t3] = e4;
                          },
                          className: p().shape,
                          "data-slot": t3,
                          "data-dim": null !== ec && ec !== t3 || void 0,
                          "data-on": ec === t3 || void 0
                        },
                        t3
                      )
                    ),
                    Array.from(
                      { length: 3 },
                      (e3, t3) => D[t3] ? (0, r.jsx)(
                        u.PY1.circle,
                        {
                          className: p().marker,
                          "data-slot": t3,
                          r: 4.5,
                          cx: 0,
                          cy: 0,
                          style: {
                            x: R ? ed[t3] : ep[t3],
                            y: R ? eh[t3] : em[t3]
                          }
                        },
                        t3
                      ) : null
                    )
                  ]
                }),
                e2.map((e3, t3) => {
                  let a3 = X(t3, 1), l2 = Math.sin(H(t3)), n2 = -Math.cos(H(t3)), s2 = 0.2 > Math.abs(l2) ? "center" : l2 > 0 ? "start" : "end", i2 = {
                    left: eM + a3.x + 10 * l2,
                    top: a3.y + 12 * n2,
                    translate: `${"center" === s2 ? "-50%" : "end" === s2 ? "-100%" : "0"} ${Math.abs(n2) > 0.8 ? n2 < 0 ? "-100%" : "0" : "-50%"}`
                  };
                  return (0, r.jsx)(
                    "span",
                    {
                      className: p().axisLabel,
                      "data-anchor": s2,
                      "data-on": en === t3 || void 0,
                      style: { ...i2, maxWidth: "center" === s2 ? 120 : U + 8 },
                      "aria-hidden": "true",
                      children: e3.label
                    },
                    e3.key
                  );
                })
              ]
            }),
            (0, r.jsxs)(u.PY1.div, {
              ref: E,
              className: p().tooltip,
              style: { x: R ? ef : ey, y: R ? e_ : ex },
              "aria-hidden": "true",
              children: [
                (0, r.jsx)("p", {
                  className: p().tipTitle,
                  children: ek?.label ?? ""
                }),
                eN.map(
                  (e3) => (0, r.jsxs)(
                    "p",
                    {
                      className: p().tipRow,
                      "data-slot": e3.slot,
                      children: [
                        (0, r.jsx)("span", { className: p().tipKey }),
                        (0, r.jsx)("span", {
                          className: p().tipName,
                          children: e3.item.label
                        }),
                        (0, r.jsx)("span", {
                          className: p().tipValue,
                          children: ek ? eg(e3.value, ek) : ""
                        }),
                        (0, r.jsx)("span", {
                          className: p().tipGap,
                          children: ek && e3.value < ew ? `\u2212${eg(ew - e3.value, ek)}` : ""
                        })
                      ]
                    },
                    e3.item.key
                  )
                )
              ]
            }),
            O && (0, r.jsx)("p", { className: p().message, children: $2 })
          ]
        }),
        L2 && !O && (0, r.jsx)("div", {
          className: p().legend,
          role: "group",
          "aria-label": `${a2} profiles`,
          onPointerLeave: () => eu(null),
          children: D.map(
            (e3, t3) => (0, r.jsxs)(
              u.PY1.button,
              {
                type: "button",
                layout: !R,
                transition: d.T.spring.morph,
                className: p().key,
                "data-slot": t3,
                "data-dim": null !== ec && ec !== t3 || void 0,
                "aria-pressed": ec === t3,
                onClick: () => eu(ec === t3 ? null : t3),
                onPointerEnter: (e4) => {
                  "mouse" === e4.pointerType && eu(t3);
                },
                children: [
                  (0, r.jsx)(u.PY1.span, {
                    layout: !R && "position",
                    transition: d.T.spring.morph,
                    className: p().keyLine,
                    "aria-hidden": "true"
                  }),
                  (0, r.jsx)(u.PY1.span, {
                    layout: !R && "position",
                    transition: d.T.spring.morph,
                    className: p().keyLabel,
                    children: e3.label
                  })
                ]
              },
              t3
            )
          )
        }),
        (0, r.jsx)("p", {
          className: p().srOnly,
          "aria-live": "polite",
          "aria-atomic": "true",
          children: eL
        }),
        (0, r.jsx)("p", { className: p().srOnly, children: e$ }),
        !O && (0, r.jsx)("div", {
          className: p().srOnly,
          children: (0, r.jsxs)("table", {
            children: [
              (0, r.jsx)("caption", { children: a2 }),
              (0, r.jsx)("thead", {
                children: (0, r.jsxs)("tr", {
                  children: [
                    (0, r.jsx)("th", { scope: "col", children: "Measure" }),
                    D.map(
                      (e3) => (0, r.jsx)(
                        "th",
                        { scope: "col", children: e3.label },
                        e3.key
                      )
                    )
                  ]
                })
              }),
              (0, r.jsx)("tbody", {
                children: e2.map(
                  (e3) => (0, r.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, r.jsx)("th", { scope: "row", children: e3.label }),
                        D.map(
                          (t3) => (0, r.jsx)(
                            "td",
                            { children: eg(t3.values[e3.key] ?? 0, e3) },
                            t3.key
                          )
                        )
                      ]
                    },
                    e3.key
                  )
                )
              })
            ]
          })
        })
      ]
    });
  }
  var g = a(66558), j = a(77337), k = a.n(j);
  let N = [
    { key: "talent", label: "Talent pool" },
    { key: "afford", label: "Affordability" },
    { key: "transit", label: "Transit" },
    { key: "timezone", label: "Time zone fit" },
    { key: "life", label: "Quality of life" },
    { key: "tax", label: "Tax climate" }
  ], w = {
    lisbon: {
      key: "lisbon",
      label: "Lisbon",
      values: {
        talent: 64,
        afford: 78,
        transit: 71,
        timezone: 88,
        life: 86,
        tax: 66
      }
    },
    berlin: {
      key: "berlin",
      label: "Berlin",
      values: {
        talent: 86,
        afford: 58,
        transit: 92,
        timezone: 80,
        life: 78,
        tax: 46
      }
    },
    toronto: {
      key: "toronto",
      label: "Toronto",
      values: {
        talent: 81,
        afford: 42,
        transit: 64,
        timezone: 72,
        life: 82,
        tax: 55
      }
    },
    austin: {
      key: "austin",
      label: "Austin",
      values: {
        talent: 74,
        afford: 54,
        transit: 26,
        timezone: 60,
        life: 71,
        tax: 84
      }
    }
  }, L = [
    { value: "berlin", label: "Berlin" },
    { value: "toronto", label: "Toronto" },
    { value: "austin", label: "Austin" }
  ];
  function $() {
    let e2 = (0, l.useId)(), [t2, a2] = (0, l.useState)("berlin");
    return (0, r.jsxs)("section", {
      className: k().card,
      "aria-labelledby": e2,
      children: [
        (0, r.jsxs)("div", {
          className: k().top,
          children: [
            (0, r.jsxs)("div", {
              className: k().heading,
              children: [
                (0, r.jsx)("h3", {
                  id: e2,
                  className: k().title,
                  children: "Lisbon compared with"
                }),
                (0, r.jsx)("p", {
                  className: k().meta,
                  children: "Second office shortlist, scored out of 100"
                })
              ]
            }),
            (0, r.jsx)(g.A, {
              label: "Compare with",
              options: L,
              value: t2,
              onValueChange: a2
            })
          ]
        }),
        (0, r.jsx)(v, {
          axes: N,
          series: [w.lisbon, w[t2]],
          label: `Office locations, Lisbon and ${w[t2].label}`
        })
      ]
    });
  }
  let M = $;
}

__m(__module,__exports,__require);
}