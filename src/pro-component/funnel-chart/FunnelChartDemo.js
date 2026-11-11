function(__module,__exports,__require){
"use strict";
function __m(e, t, l) {
  "use strict";
  l.r(t), l.d(t, { FunnelChartDemo: () => A, default: () => D });
  var r = l(95155), a = l(12115), n = l(18310), s = l(28245), i = l(55809), o = l(92171), c = l(25354), u = l(61792), d = l(22535), h = l(7770), f = l(99234), p = l.n(f);
  let { spring: m } = h.T, _ = ({ visualDuration: e2, bounce: t2 }, l2 = 5e-4) => {
    let r2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: r2 * r2,
      damping: 2 * (1 - t2) * r2,
      restDelta: l2,
      restSpeed: 2 * l2
    };
  }, g = _({ visualDuration: 0.55, bounce: 0.08 }), y = { stiffness: 480, damping: 42, restDelta: 0.01 }, x = (e2, t2, l2) => Math.min(l2, Math.max(t2, e2)), v = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1
  }), b = new Intl.NumberFormat("en-US"), j = (e2) => `${e2 >= 10 || 0 === e2 ? Math.round(e2) : e2.toFixed(1)}%`, k = () => () => {
  };
  function w(e2, t2, l2) {
    let r2, a2 = e2.length;
    if (!a2) return 0;
    let n2 = t2 / (l2 / a2) - 0.5;
    if (n2 <= 0) return e2[0];
    if (n2 >= a2 - 1) return e2[a2 - 1];
    let s2 = Math.floor(n2), i2 = n2 - s2, o2 = i2 <= 0.26 ? 0 : i2 >= 0.74 ? 1 : (r2 = (i2 - 0.26) / 0.48) * r2 * r2 * (r2 * (6 * r2 - 15) + 10);
    return e2[s2] + (e2[s2 + 1] - e2[s2]) * o2;
  }
  function N({ value: e2, format: t2, reduced: l2 }) {
    let n2 = (0, s.d)(e2), u2 = (0, i.G)(n2, (e3) => t2(e3));
    return (0, a.useEffect)(() => {
      if (l2) return void n2.jump(e2);
      let t3 = (0, o.i)(n2, e2, m.smooth);
      return () => t3.stop();
    }, [l2, n2, e2]), (0, r.jsx)(c.PY1.span, { children: u2 });
  }
  function M({
    stages: e2,
    segments: t2,
    label: l2,
    unit: i2 = "",
    view: h2 = "total",
    flow: f2 = true,
    orientation: m2 = "auto",
    height: R2 = 200,
    formatValue: S2,
    activeIndex: $2,
    onActiveChange: L2,
    emptyLabel: E2 = "No data",
    ref: P2,
    className: C2
  }) {
    let I2, A2 = (I2 = (0, a.useSyncExternalStore)(
      k,
      () => true,
      () => false
    ), !!(0, n.I)() && I2), D2 = `${(0, a.useId)().replace(/:/g, "")}-focus`, T = (0, a.useRef)(null), F = (0, a.useRef)(null), O = (0, a.useRef)(null), H = (0, a.useRef)(null), V = (0, a.useRef)(/* @__PURE__ */ new Map()), W = (0, a.useRef)(/* @__PURE__ */ new Map());
    (0, a.useImperativeHandle)(P2, () => T.current);
    let U = (0, u.W)(T, { once: true, amount: 0.3 }), B = (0, u.W)(T, { amount: 0 }), Y = (0, a.useMemo)(
      () => t2?.length ? t2 : [{ key: "value", label: l2 }],
      [t2, l2]
    ), K = e2.length, X = K - 1, q = (0, a.useCallback)(
      (e3, l3) => Math.max(0, (t2?.length ? e3.values?.[l3] : e3.value) ?? 0),
      [t2]
    ), z = Y.some((e3) => e3.key === h2) ? h2 : null, Z = "split" === h2 && Y.length > 1, G = z ? Y.filter((e3) => e3.key === z) : Y, Q = e2.map((e3) => G.reduce((t3, l3) => t3 + q(e3, l3.key), 0)), J = 0 === K || Q[0] <= 0, ee = `${h2}|${Y.map((e3) => e3.key).join(",")}|${e2.map((e3) => Y.map((t3) => q(e3, t3.key)).join(",")).join(";")}`, et = (0, a.useMemo)(() => {
      let t3 = Math.max(
        1e-9,
        ...e2.map((e3) => G.reduce((t4, l3) => t4 + q(e3, l3.key), 0))
      );
      return new Map(
        Y.map((l3) => [
          l3.key,
          e2.map((e3) => G.includes(l3) ? q(e3, l3.key) / t3 : 0)
        ])
      );
    }, [ee]), [el, er] = (0, a.useState)({ width: 0 }), ea = "vertical" === m2 || "auto" === m2 && el.width > 0 && el.width < 420, en = (0, a.useRef)({ length: 0, cross: 0, vertical: false }), es = (0, a.useRef)(/* @__PURE__ */ new Map()), ei = (0, a.useRef)(+!!Z), eo = (0, s.d)(0), ec = (0, a.useCallback)(() => {
      let { length: e3, cross: t3, vertical: l3 } = en.current;
      if (!e3) return;
      let r2 = t3 - 16, a2 = t3 / 2, n2 = eo.get(), s2 = Y.map((e4) => es.current.get(e4.key) ?? Array(K).fill(0)), i3 = s2.map((e4) => Math.min(1, 40 * e4.reduce((e5, t4) => e5 + t4, 0))), o2 = Math.ceil(e3 / 3) + 1, c2 = Y.map(() => ({ top: Array(o2), bottom: Array(o2) }));
      for (let t4 = 0; t4 < o2; t4++) {
        let l4 = Math.min(e3, 3 * t4), o3 = s2.map((t5) => w(t5, l4, e3) * r2 * n2), u3 = o3.slice(1).map((e4, t5) => 2 * ei.current * Math.min(i3[t5], i3[t5 + 1])), d2 = a2 - (o3.reduce((e4, t5) => e4 + t5, 0) + u3.reduce((e4, t5) => e4 + t5, 0)) / 2;
        o3.forEach((e4, l5) => {
          c2[l5].top[t4] = d2, d2 += e4, c2[l5].bottom[t4] = d2, d2 += u3[l5] ?? 0;
        });
      }
      let u2 = (e4, t4) => l3 ? `${t4.toFixed(1)},${e4.toFixed(1)}` : `${e4.toFixed(1)},${t4.toFixed(1)}`;
      Y.forEach((t4, l4) => {
        let r3 = "";
        for (let t5 = 0; t5 < o2; t5++)
          r3 += `${t5 ? "L" : "M"}${u2(Math.min(e3, 3 * t5), c2[l4].top[t5])}`;
        for (let t5 = o2 - 1; t5 >= 0; t5--)
          r3 += `L${u2(Math.min(e3, 3 * t5), c2[l4].bottom[t5])}`;
        r3 += "Z", V.current.get(t4.key)?.setAttribute("d", r3), W.current.get(t4.key)?.setAttribute("d", r3);
      });
    }, [eo, K, Y]);
    (0, a.useLayoutEffect)(() => {
      let e3 = F.current;
      if (!e3) return;
      let t3 = () => er({ width: e3.clientWidth });
      if (t3(), "u" < typeof ResizeObserver) return;
      let l3 = new ResizeObserver(t3);
      return l3.observe(e3), () => l3.disconnect();
    }, []);
    let eu = ea ? 84 * K : el.width, ed = ea ? Math.min(220, Math.max(120, 0.44 * el.width)) : R2;
    (0, a.useLayoutEffect)(() => {
      en.current = { length: eu, cross: ed, vertical: ea }, ec();
    }, [ec, ed, eu, ea]), (0, a.useEffect)(() => {
      let e3 = [];
      for (let [t4, l4] of et) {
        let r3 = es.current.get(t4);
        if (!r3 || r3.length !== l4.length || A2) {
          es.current.set(t4, l4);
          continue;
        }
        e3.push({ key: t4, from: r3, to: l4 });
      }
      let t3 = ei.current, l3 = +!!Z;
      if (A2 && (ei.current = l3), !e3.length && (A2 || t3 === l3))
        return void ec();
      let r2 = (0, o.i)(0, 1, {
        ...g,
        onUpdate: (r3) => {
          for (let t4 of e3)
            es.current.set(
              t4.key,
              t4.from.map((e4, l4) => e4 + (t4.to[l4] - e4) * r3)
            );
          ei.current = t3 + (l3 - t3) * x(r3, 0, 1), ec();
        }
      });
      return () => r2.stop();
    }, [ec, A2, Z, et]), (0, a.useEffect)(() => {
      if (J) return;
      if (A2) {
        eo.jump(1), ec();
        return;
      }
      if (!U || eo.get() >= 1) return;
      let e3 = (0, o.i)(eo, 1, {
        ..._({ visualDuration: 0.8, bounce: 0 }),
        onUpdate: ec
      });
      return () => e3.stop();
    }, [J, eo, U, ec, A2]);
    let [eh, ef] = (0, a.useState)(null), ep = void 0 !== $2 ? $2 : eh, em = null !== ep && ep >= 0 && ep < K ? ep : null, e_ = (e3) => {
      void 0 === $2 && ef(e3), e3 !== em && L2?.(e3);
    }, eg = (0, s.d)(0), ey = (0, d.z)(eg, y), ex = K ? eu / K : 0, ev = (0, a.useRef)(null);
    (0, a.useLayoutEffect)(() => {
      if (null === em) {
        ev.current = null;
        return;
      }
      eg.set(em * ex), (null === ev.current || A2) && ey.jump(em * ex), ev.current = em;
    });
    let eb = (0, a.useRef)(null), ej = (0, s.d)(0), ek = (0, s.d)(0), ew = (0, d.z)(ej, y), eN = (0, d.z)(ek, y), eM = (0, a.useRef)(false);
    (0, a.useLayoutEffect)(() => {
      let e3, t3, l3 = H.current, r2 = F.current;
      if (null === em || !l3 || !r2 || !ex) {
        eM.current = false;
        return;
      }
      let a2 = r2.clientWidth, n2 = r2.clientHeight, s2 = l3.offsetWidth, i3 = l3.offsetHeight, o2 = (em + 0.5) * ex, c2 = w(
        Q.map((e4) => e4 / Math.max(1e-9, ...Q)),
        o2,
        eu
      ) * (ed - 16);
      ea ? ((e3 = ed / 2 + c2 / 2 + 12) + s2 > a2 && (e3 = a2 - s2), t3 = em < X ? (em + 1) * ex - 6 : em * ex - i3 + 6) : ((e3 = o2 + ex / 2 - 6) + s2 > a2 && (e3 = o2 - ex / 2 - s2 + 6), t3 = (ea ? 0 : eb.current?.offsetHeight ?? 0) + ed / 2 - i3 / 2), ej.set(x(e3, 0, Math.max(0, a2 - s2))), ek.set(x(t3, 0, Math.max(0, n2 - i3))), (!eM.current || A2) && (ew.jump(ej.get()), eN.jump(ek.get())), eM.current = true;
    });
    let eR = f2 && !A2 && !J && B && U, eS = (0, a.useRef)({ totals: Q, parts: Y, shapes: es });
    (0, a.useLayoutEffect)(() => {
      eS.current = { totals: Q, parts: Y, shapes: es };
    }), (0, a.useEffect)(() => {
      let e3 = O.current;
      if (!eR || !e3) {
        let t4 = e3?.getContext("2d");
        t4 && e3 && t4.clearRect(0, 0, e3.width, e3.height);
        return;
      }
      let t3 = e3.getContext("2d");
      if (!t3) return;
      let l3 = [], r2 = 0, a2 = performance.now(), n2 = 0, s2 = "", i3 = 0, o2 = (c2) => {
        r2 = requestAnimationFrame(o2);
        let u2 = Math.min(0.05, (c2 - a2) / 1e3);
        a2 = c2;
        let { length: d2, cross: h3, vertical: f3 } = en.current;
        if (!d2 || document.hidden) return;
        let p2 = window.devicePixelRatio || 1, m3 = Math.round((f3 ? h3 : d2) * p2), _2 = Math.round((f3 ? d2 : h3) * p2);
        (e3.width !== m3 || e3.height !== _2) && (e3.width = m3, e3.height = _2), i3++ % 30 == 0 && (s2 = getComputedStyle(e3).color);
        let g2 = h3 - 16, y2 = h3 / 2, { totals: v2, parts: b2, shapes: j2 } = eS.current, k2 = (e4) => b2.reduce((t4, l4) => t4 + w(j2.current.get(l4.key) ?? [], e4, d2), 0) * g2 * eo.get();
        for (n2 += 26 * u2 * x(k2(0) / Math.max(1, g2), 0.15, 1); n2 >= 1; ) {
          n2 -= 1;
          let e4 = 0;
          for (; e4 < v2.length - 1 && Math.random() < v2[e4 + 1] / Math.max(1e-9, v2[e4]); )
            e4++;
          l3.push({
            s: -4,
            u: 0.1 + 0.8 * Math.random(),
            drop: e4,
            speed: d2 / (5.2 + 1.6 * Math.random()),
            fall: 0,
            fallSpeed: 0,
            age: 0
          });
        }
        t3.setTransform(p2, 0, 0, p2, 0, 0), t3.clearRect(0, 0, m3, _2), t3.fillStyle = s2;
        let N2 = d2 / v2.length;
        for (let e4 = l3.length - 1; e4 >= 0; e4--) {
          let r3 = l3[e4];
          r3.age += u2;
          let a3 = r3.drop < v2.length - 1 ? (r3.drop + 1) * N2 : 1 / 0;
          r3.s >= a3 && (r3.fallSpeed += 260 * u2, r3.fall += r3.fallSpeed * u2, r3.speed *= 1 - 1.8 * u2), r3.s += r3.speed * u2;
          let n3 = k2(x(r3.s, 0, d2)), s3 = y2 + (r3.u - 0.5) * n3 + r3.fall, i4 = r3.fall > 0 ? 1 - x(r3.fall / 46, 0, 1) : r3.s > d2 - 16 ? x((d2 - r3.s) / 16, 0, 1) : x(4 * r3.age, 0, 1);
          if (i4 <= 0 || r3.s > d2 + 4) {
            l3.splice(e4, 1);
            continue;
          }
          t3.globalAlpha = i4 * (r3.fall > 0 ? 0.45 : 0.7);
          let o3 = f3 ? s3 : r3.s, c3 = f3 ? r3.s : s3;
          t3.beginPath(), t3.arc(o3, c3, 1.6, 0, 2 * Math.PI), t3.fill();
        }
        t3.globalAlpha = 1;
      };
      return r2 = requestAnimationFrame(o2), () => cancelAnimationFrame(r2);
    }, [eR, eo]);
    let e$ = (e3, t3) => {
      let l3 = F.current?.getBoundingClientRect();
      return l3 && !J && ex ? x(Math.floor((ea ? t3 - l3.top : e3 - l3.left) / ex), 0, X) : null;
    }, eL = (e3) => S2 ? S2(e3) : v.format(Math.round(e3)), eE = (e3) => `${S2 ? S2(e3) : b.format(Math.round(e3))}${i2 ? ` ${i2}` : ""}`, eP = (e3) => 0 === e3 ? 100 : Q[e3 - 1] > 0 ? Q[e3] / Q[e3 - 1] * 100 : 0, eC = (e3) => Q[0] > 0 ? Q[e3] / Q[0] * 100 : 0, eI = null !== em ? e2[em] : null, eA = eI && null !== em ? `${eI.label}, ${eE(Q[em])}, ${j(eP(em))} of the previous step, ${j(eC(em))} of the first` : "", eD = z ? Y.find((e3) => e3.key === z)?.label : Z ? "by segment" : "all", eT = J ? `${l2}. ${E2}.` : `${l2}, ${eD}. ${e2.map((e3, t3) => `${e3.label} ${eE(Q[t3])}`).join(", ")}. ${j(eC(X))} reach the last step.`, eF = (e3) => Y.findIndex((t3) => t3.key === e3), eO = ea ? { y: A2 ? eg : ey } : { x: A2 ? eg : ey }, eH = ea ? ed : eu, eV = ea ? eu : ed, eW = ea ? { x: 0, y: 0, width: ed, height: ex } : { x: 0, y: 0, width: ex, height: ed };
    return (0, r.jsxs)("figure", {
      ref: T,
      className: [p().figure, C2].filter(Boolean).join(" "),
      "aria-label": l2,
      "data-vertical": ea || void 0,
      children: [
        (0, r.jsxs)("div", {
          ref: F,
          className: p().area,
          "data-active": null !== em || void 0,
          "data-view": z ? "one" : Z ? "split" : "total",
          role: "group",
          tabIndex: J ? -1 : 0,
          "aria-roledescription": "funnel chart",
          "aria-label": `${l2}. Use arrow keys to move between steps.`,
          onPointerMove: (e3) => {
            ("mouse" === e3.pointerType || e3.buttons) && e_(e$(e3.clientX, e3.clientY));
          },
          onPointerDown: (e3) => {
            "mouse" !== e3.pointerType && e3.currentTarget.setPointerCapture?.(e3.pointerId), e_(e$(e3.clientX, e3.clientY));
          },
          onPointerUp: (e3) => {
            "mouse" !== e3.pointerType && e_(null);
          },
          onPointerCancel: () => e_(null),
          onPointerLeave: (e3) => {
            "mouse" === e3.pointerType && e_(null);
          },
          onKeyDown: (e3) => {
            if (J) return;
            if ("Escape" === e3.key && null !== em) {
              e3.preventDefault(), e_(null);
              return;
            }
            let t3 = em ?? -1, l3 = {
              ArrowRight: t3 + 1,
              ArrowDown: t3 + 1,
              ArrowLeft: t3 < 0 ? 0 : t3 - 1,
              ArrowUp: t3 < 0 ? 0 : t3 - 1,
              Home: 0,
              End: X
            };
            e3.key in l3 && (e3.preventDefault(), e_(x(l3[e3.key], 0, X)));
          },
          onBlur: () => e_(null),
          onFocus: (e3) => {
            e3.currentTarget.matches(":focus-visible") && !J && null === em && e_(0);
          },
          style: ea ? { height: eu } : void 0,
          children: [
            (0, r.jsx)(c.PY1.div, {
              className: p().column,
              style: { ...eO, ...ea ? { height: ex } : { width: ex } },
              "aria-hidden": "true"
            }),
            !ea && (0, r.jsx)("div", {
              ref: eb,
              className: p().header,
              style: {
                gridTemplateColumns: `repeat(${Math.max(1, K)}, minmax(0, 1fr))`
              },
              "aria-hidden": "true",
              children: e2.map(
                (e3, t3) => (0, r.jsxs)(
                  "div",
                  {
                    className: p().stage,
                    "data-on": em === t3 || void 0,
                    children: [
                      (0, r.jsx)("span", {
                        className: p().stageLabel,
                        children: e3.label
                      }),
                      (0, r.jsx)("span", {
                        className: p().stageValue,
                        children: (0, r.jsx)(N, {
                          value: Q[t3] ?? 0,
                          format: eL,
                          reduced: A2
                        })
                      }),
                      (0, r.jsx)("span", {
                        className: p().stageRate,
                        children: 0 === t3 ? "Start" : (0, r.jsx)(N, {
                          value: eC(t3),
                          format: (e4) => `${j(e4)} of start`,
                          reduced: A2
                        })
                      })
                    ]
                  },
                  e3.key
                )
              )
            }),
            (0, r.jsxs)("div", {
              className: p().plotRow,
              children: [
                (0, r.jsxs)("div", {
                  className: p().plot,
                  style: { width: eH, height: eV },
                  children: [
                    (0, r.jsxs)("svg", {
                      className: p().svg,
                      width: eH,
                      height: eV,
                      "aria-hidden": "true",
                      focusable: "false",
                      children: [
                        (0, r.jsx)("defs", {
                          children: (0, r.jsx)("clipPath", {
                            id: D2,
                            children: (0, r.jsx)(c.PY1.rect, {
                              ...eW,
                              style: eO
                            })
                          })
                        }),
                        Y.map(
                          (e3) => (0, r.jsx)(
                            "path",
                            {
                              ref: (t3) => {
                                t3 ? V.current.set(e3.key, t3) : V.current.delete(e3.key);
                              },
                              className: p().layer,
                              "data-index": eF(e3.key),
                              "data-shown": !z || z === e3.key || void 0
                            },
                            e3.key
                          )
                        ),
                        (0, r.jsx)("g", {
                          className: p().glow,
                          clipPath: `url(#${D2})`,
                          children: Y.map(
                            (e3) => (0, r.jsx)(
                              "path",
                              {
                                ref: (t3) => {
                                  t3 ? W.current.set(e3.key, t3) : W.current.delete(e3.key);
                                },
                                className: p().glowLayer,
                                "data-index": eF(e3.key)
                              },
                              e3.key
                            )
                          )
                        })
                      ]
                    }),
                    (0, r.jsx)("canvas", {
                      ref: O,
                      className: p().canvas,
                      style: { width: eH, height: eV },
                      "aria-hidden": "true"
                    })
                  ]
                }),
                ea && (0, r.jsx)("div", {
                  className: p().side,
                  "aria-hidden": "true",
                  children: e2.map(
                    (e3, t3) => (0, r.jsxs)(
                      "div",
                      {
                        className: p().row,
                        "data-on": em === t3 || void 0,
                        style: { top: 84 * t3, height: 84 },
                        children: [
                          (0, r.jsx)("span", {
                            className: p().stageLabel,
                            children: e3.label
                          }),
                          (0, r.jsx)("span", {
                            className: p().stageValue,
                            children: (0, r.jsx)(N, {
                              value: Q[t3] ?? 0,
                              format: eL,
                              reduced: A2
                            })
                          })
                        ]
                      },
                      e3.key
                    )
                  )
                })
              ]
            }),
            (0, r.jsx)("div", {
              className: p().drops,
              "aria-hidden": "true",
              style: ea ? { left: ed + 20 } : void 0,
              children: e2.slice(1).map((e3, t3) => {
                let l3 = (t3 + 1) / K * 100;
                return (0, r.jsxs)(
                  "span",
                  {
                    className: p().drop,
                    style: ea ? { top: `${l3}%` } : { left: `${l3}%` },
                    children: [
                      (0, r.jsx)("svg", {
                        width: "8",
                        height: "8",
                        viewBox: "0 0 8 8",
                        "aria-hidden": "true",
                        children: (0, r.jsx)("path", {
                          d: "M4 1v6M1.5 4.5 4 7l2.5-2.5",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "1.3",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        })
                      }),
                      (0, r.jsx)(N, {
                        value: 100 - eP(t3 + 1),
                        format: j,
                        reduced: A2
                      })
                    ]
                  },
                  e3.key
                );
              })
            }),
            (0, r.jsxs)(c.PY1.div, {
              ref: H,
              className: p().tooltip,
              style: { x: A2 ? ej : ew, y: A2 ? ek : eN },
              "aria-hidden": "true",
              children: [
                (0, r.jsx)("p", {
                  className: p().tipTitle,
                  children: eI?.label ?? ""
                }),
                (Z ? Y : [
                  {
                    key: "__total",
                    label: z ? Y.find((e3) => e3.key === z).label : "Total"
                  }
                ]).map(
                  (e3) => (0, r.jsxs)(
                    "p",
                    {
                      className: p().tipRow,
                      "data-index": Z ? eF(e3.key) : void 0,
                      children: [
                        Z && (0, r.jsx)("span", { className: p().tipKey }),
                        (0, r.jsx)("span", {
                          className: p().tipName,
                          children: e3.label
                        }),
                        (0, r.jsx)("span", {
                          className: p().tipValue,
                          children: eI && null !== em ? b.format(
                            "__total" === e3.key ? Q[em] : q(eI, e3.key)
                          ) : ""
                        })
                      ]
                    },
                    e3.key
                  )
                ),
                (0, r.jsx)("p", {
                  className: p().tipMeta,
                  children: null !== em && em > 0 ? `${j(eP(em))} kept from ${e2[em - 1].label.toLowerCase()}` : 0 === em ? `Entry step${i2 ? `, ${i2}` : ""}` : ""
                })
              ]
            }),
            J && (0, r.jsx)("p", { className: p().message, children: E2 })
          ]
        }),
        (0, r.jsx)("p", {
          className: p().srOnly,
          "aria-live": "polite",
          "aria-atomic": "true",
          children: eA
        }),
        (0, r.jsx)("p", { className: p().srOnly, children: eT }),
        !J && (0, r.jsx)("div", {
          className: p().srOnly,
          children: (0, r.jsxs)("table", {
            children: [
              (0, r.jsx)("caption", { children: l2 }),
              (0, r.jsx)("thead", {
                children: (0, r.jsxs)("tr", {
                  children: [
                    (0, r.jsx)("th", { scope: "col", children: "Step" }),
                    t2?.length ? Y.map(
                      (e3) => (0, r.jsx)(
                        "th",
                        { scope: "col", children: e3.label },
                        e3.key
                      )
                    ) : null,
                    (0, r.jsx)("th", {
                      scope: "col",
                      children: "Shown total"
                    }),
                    (0, r.jsx)("th", {
                      scope: "col",
                      children: "Kept from previous"
                    }),
                    (0, r.jsx)("th", {
                      scope: "col",
                      children: "Of first step"
                    })
                  ]
                })
              }),
              (0, r.jsx)("tbody", {
                children: e2.map(
                  (e3, l3) => (0, r.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, r.jsx)("th", { scope: "row", children: e3.label }),
                        t2?.length ? Y.map(
                          (t3) => (0, r.jsx)(
                            "td",
                            { children: eE(q(e3, t3.key)) },
                            t3.key
                          )
                        ) : null,
                        (0, r.jsx)("td", { children: eE(Q[l3]) }),
                        (0, r.jsx)("td", { children: j(eP(l3)) }),
                        (0, r.jsx)("td", { children: j(eC(l3)) })
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
  var R = l(66558), S = l(50680), $ = l(54377), L = l.n($);
  let E = [
    { key: "mobile", label: "Mobile" },
    { key: "desktop", label: "Desktop" }
  ], P = [
    {
      key: "visit",
      label: "Visited store",
      values: { mobile: 68420, desktop: 31580 }
    },
    {
      key: "product",
      label: "Viewed product",
      values: { mobile: 39710, desktop: 21460 }
    },
    {
      key: "cart",
      label: "Added to cart",
      values: { mobile: 9140, desktop: 7280 }
    },
    {
      key: "checkout",
      label: "Started checkout",
      values: { mobile: 4310, desktop: 4090 }
    },
    {
      key: "purchase",
      label: "Purchased",
      values: { mobile: 1540, desktop: 2050 }
    }
  ], C = [
    { value: "total", label: "All" },
    { value: "mobile", label: "Mobile" },
    { value: "desktop", label: "Desktop" }
  ], I = (e2) => (t2) => Object.entries(t2.values ?? {}).reduce(
    (t3, [l2, r2]) => t3 + (e2 && l2 !== e2 ? 0 : r2 ?? 0),
    0
  );
  function A() {
    let e2 = (0, a.useId)(), [t2, l2] = (0, a.useState)("total"), [n2, s2] = (0, a.useState)(false), [i2, o2] = (0, a.useState)(true), c2 = "total" === t2 && n2 ? "split" : t2, u2 = "mobile" === c2 || "desktop" === c2 ? c2 : void 0, d2 = I(u2)(P[P.length - 1]) / I(u2)(P[0]) * 100;
    return (0, r.jsxs)("section", {
      className: L().card,
      "aria-labelledby": e2,
      children: [
        (0, r.jsxs)("div", {
          className: L().top,
          children: [
            (0, r.jsxs)("div", {
              className: L().heading,
              children: [
                (0, r.jsx)("h3", {
                  id: e2,
                  className: L().title,
                  children: "Checkout funnel"
                }),
                (0, r.jsxs)("p", {
                  className: L().meta,
                  children: ["Last 30 days, ", d2.toFixed(1), "% convert"]
                })
              ]
            }),
            (0, r.jsxs)("div", {
              className: L().controls,
              children: [
                (0, r.jsx)(R.A, {
                  label: "Device",
                  options: C,
                  value: t2,
                  onValueChange: (e3) => {
                    l2(e3), "total" !== e3 && s2(false);
                  }
                }),
                (0, r.jsxs)("div", {
                  className: L().switches,
                  children: [
                    (0, r.jsx)(S.d, {
                      label: "Split",
                      checked: "split" === c2,
                      onCheckedChange: (e3) => {
                        s2(e3), e3 && l2("total");
                      }
                    }),
                    (0, r.jsx)(S.d, {
                      label: "Flow",
                      checked: i2,
                      onCheckedChange: o2
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, r.jsx)(M, {
          stages: P,
          segments: E,
          view: c2,
          flow: i2,
          label: "Checkout funnel, last 30 days",
          unit: "sessions"
        })
      ]
    });
  }
  let D = A;
}

__m(__module,__exports,__require);
}