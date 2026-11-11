function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { MetricTickerDemo: () => R, default: () => I });
  var i = r(95155), a = r(12115), n = r(61792), s = r(79267), l = r(36619), o = r(51288), c = r(55809), d = r(25354), u = r(28245), m = r(92171), p = r(80642), f = r(18310), h = r(38158), g = r(19805), y = r(36565), v = r(7770), x = r(13454), _ = r.n(x);
  let k = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  function b({ position: e2, digit: t2 }) {
    let r2 = (0, c.G)(e2, (e3) => ((t2 - e3) % 10 + 15) % 10 - 5), a2 = (0, c.G)(r2, (e3) => `${e3}em`), n2 = (0, c.G)(r2, (e3) => Math.max(0, 1 - 1.2 * Math.abs(e3)));
    return (0, i.jsx)(d.PY1.span, {
      className: _().glyph,
      style: { y: a2, opacity: n2 },
      children: t2
    });
  }
  function j({ digit: e2, direction: t2, delay: r2, reduceMotion: n2 }) {
    let s2 = (0, u.d)(e2), l2 = (0, a.useRef)({ digit: e2, target: e2 });
    return (0, a.useEffect)(() => {
      let i2 = l2.current;
      if (i2.digit === e2) return;
      if (i2.target += t2 < 0 ? -((i2.digit - e2 + 10) % 10) : (e2 - i2.digit + 10) % 10, i2.digit = e2, n2)
        return void s2.jump(i2.target);
      let a2 = (0, m.i)(s2, i2.target, { ...v.T.spring.smooth, delay: r2 });
      return () => a2.stop();
    }, [r2, e2, t2, s2, n2]), (0, i.jsxs)("span", {
      className: _().wheel,
      children: [
        (0, i.jsx)("span", { className: _().sizer, children: "0" }),
        k.map((e3) => (0, i.jsx)(b, { position: s2, digit: e3 }, e3))
      ]
    });
  }
  let w = {
    initial: { width: 0, opacity: 0 },
    animate: { width: "auto", opacity: 1 },
    exit: { width: 0, opacity: 0 }
  };
  function M({ value: e2, formatter: t2, reduceMotion: r2 }) {
    let n2, s2, l2, [o2, c2] = (0, a.useState)({ value: e2, direction: 1 });
    o2.value !== e2 && c2({ value: e2, direction: e2 >= o2.value ? 1 : -1 });
    let u2 = (s2 = (n2 = t2.formatToParts(e2)).reduce(
      (e3, t3) => e3 + ("integer" === t3.type ? t3.value.length : 0),
      0
    ), l2 = 0, n2.flatMap(
      (e3, t3) => "integer" === e3.type ? [...e3.value].map((e4) => ({ key: `i${--s2}`, digit: Number(e4) })) : "fraction" === e3.type ? [...e3.value].map((e4) => ({ key: `f${l2++}`, digit: Number(e4) })) : [
        {
          key: "group" === e3.type ? `g${s2}` : "literal" === e3.type ? `l${t3}` : e3.type,
          text: e3.value
        }
      ]
    )), m2 = u2.filter((e3) => "digit" in e3).length, f2 = 0;
    return (0, i.jsx)("span", {
      className: _().number,
      "aria-hidden": "true",
      children: (0, i.jsx)(p.N, {
        initial: false,
        children: u2.map((e3) => {
          let t3 = r2 ? { duration: 0 } : v.T.spring.morph;
          if (!("digit" in e3))
            return (0, i.jsx)(
              d.PY1.span,
              { className: _().symbol, ...w, transition: t3, children: e3.text },
              e3.key
            );
          let a2 = (m2 - 1 - f2++) * 0.025;
          return (0, i.jsx)(
            d.PY1.span,
            {
              className: _().column,
              ...w,
              transition: t3,
              children: (0, i.jsx)(j, {
                digit: e3.digit,
                direction: o2.direction,
                delay: a2,
                reduceMotion: r2
              })
            },
            e3.key
          );
        })
      })
    });
  }
  function N({ values: e2, tone: t2, reduceMotion: r2 }) {
    if (e2.length < 2)
      return (0, i.jsx)("svg", {
        className: _().spark,
        viewBox: "0 0 216 56",
        "aria-hidden": "true"
      });
    let a2 = Math.min(...e2), n2 = Math.max(...e2) - a2 || 1, s2 = e2.map((t3, r3) => [
      r3 / (e2.length - 1) * 216,
      4 + (1 - (t3 - a2) / n2) * 48
    ]), l2 = s2.map(([e3, t3], r3) => `${r3 ? "L" : "M"}${e3.toFixed(1)} ${t3.toFixed(1)}`).join(" "), o2 = `${l2} L216 56 L0 56 Z`, c2 = s2[s2.length - 1] ?? [0, 0];
    return (0, i.jsxs)("svg", {
      className: _().spark,
      "data-tone": t2,
      viewBox: "0 0 216 56",
      preserveAspectRatio: "none",
      "aria-hidden": "true",
      children: [
        (0, i.jsx)(d.PY1.path, {
          className: _().sparkArea,
          d: o2,
          initial: !r2 && { opacity: 0 },
          animate: { opacity: 1 },
          transition: {
            duration: v.T.duration.considered,
            ease: v.T.ease.standard,
            delay: 0.12 * !r2
          }
        }),
        (0, i.jsx)(d.PY1.path, {
          className: _().sparkLine,
          d: l2,
          initial: !r2 && { pathLength: 0 },
          animate: { pathLength: 1 },
          transition: {
            duration: v.T.duration.considered,
            ease: v.T.ease.enter
          }
        }),
        (0, i.jsx)(d.PY1.circle, {
          className: _().sparkDot,
          cx: c2[0],
          cy: c2[1],
          r: 3,
          initial: !r2 && { scale: 0 },
          animate: { scale: 1 },
          transition: r2 ? { duration: 0 } : { ...v.T.spring.snappy, delay: 0.42 }
        })
      ]
    });
  }
  function T({
    metrics: e2,
    overflow: t2 = "marquee",
    speed: r2 = 32,
    flashDuration: n2 = 1600,
    historyLength: s2 = 24,
    locale: l2 = "en-US",
    label: o2 = "Live metrics",
    className: m2,
    style: x2
  }) {
    var _a;
    let k2, b2 = !!(0, f.I)(), j2 = (0, a.useId)(), w2 = (k2 = e2.map(
      (e3) => `${e3.id}:${e3.delta ?? ""}:${JSON.stringify(e3.format ?? {})}`
    ).join("|"), (0, a.useMemo)(() => {
      let t3 = /* @__PURE__ */ new Map();
      for (let r3 of e2) {
        let e3 = {
          maximumFractionDigits: 0,
          ...r3.format,
          numberingSystem: "latn"
        }, i2 = new Intl.NumberFormat(l2, e3);
        if ("absolute" !== r3.delta)
          t3.set(r3.id, {
            value: i2,
            delta: new Intl.NumberFormat(l2, {
              style: "percent",
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
              numberingSystem: "latn"
            }),
            scale: 1,
            suffix: ""
          });
        else if ("percent" === e3.style) {
          let e4 = i2.resolvedOptions().maximumFractionDigits ?? 1;
          t3.set(r3.id, {
            value: i2,
            delta: new Intl.NumberFormat(l2, {
              minimumFractionDigits: e4,
              maximumFractionDigits: e4,
              numberingSystem: "latn"
            }),
            scale: 100,
            suffix: " pts"
          });
        } else
          t3.set(r3.id, {
            value: i2,
            delta: new Intl.NumberFormat(l2, { ...e3, signDisplay: "never" }),
            scale: 1,
            suffix: ""
          });
      }
      return t3;
    }, [l2, k2])), [A2, E2] = (0, a.useState)(() => ({
      metrics: e2,
      history: Object.fromEntries(e2.map((e3) => [e3.id, [e3.value]])),
      changes: {},
      tick: 0
    }));
    if (A2.metrics !== e2) {
      let t3 = A2.tick + 1, r3 = { ...A2.history }, i2 = { ...A2.changes }, a2 = new Map(A2.metrics.map((e3) => [e3.id, e3.value]));
      for (let n3 of e2) {
        let e3 = a2.get(n3.id);
        if (void 0 === e3 || e3 === n3.value) {
          r3[_a = n3.id] ?? (r3[_a] = [n3.value]);
          continue;
        }
        r3[n3.id] = [...r3[n3.id] ?? [e3], n3.value].slice(-s2), i2[n3.id] = {
          delta: n3.value - e3,
          ratio: e3 ? (n3.value - e3) / Math.abs(e3) : 0,
          tick: t3
        };
      }
      E2({ metrics: e2, history: r3, changes: i2, tick: t3 });
    }
    let [L2, F2] = (0, a.useState)(0), z2 = (0, a.useRef)(/* @__PURE__ */ new Set());
    (0, a.useEffect)(() => {
      if (0 === A2.tick) return;
      let e3 = A2.tick, t3 = z2.current, r3 = setTimeout(() => {
        t3.delete(r3), F2((t4) => Math.max(t4, e3));
      }, n2);
      t3.add(r3);
    }, [n2, A2.tick]), (0, a.useEffect)(() => {
      let e3 = z2.current;
      return () => {
        e3.forEach(clearTimeout), e3.clear();
      };
    }, []);
    let [P2, R2] = (0, a.useState)(null), [I2, D] = (0, a.useState)(null), [$, S] = (0, a.useState)(null), C = $ ?? I2 ?? P2, [O, W] = (0, a.useState)(false), Y = (0, a.useRef)(void 0), G = (0, a.useRef)(null), B = (e3, t3) => {
      clearTimeout(Y.current), t3 && (G.current = t3), R2(e3);
    }, q = () => {
      clearTimeout(Y.current), Y.current = setTimeout(() => R2(null), 160);
    };
    (0, a.useEffect)(() => () => clearTimeout(Y.current), []), (0, a.useEffect)(() => {
      if (!$) return;
      let e3 = (e4) => {
        H.current?.contains(e4.target) || S(null);
      }, t3 = (e4) => {
        "Escape" === e4.key && S(null);
      };
      return document.addEventListener("pointerdown", e3), document.addEventListener("keydown", t3), () => {
        document.removeEventListener("pointerdown", e3), document.removeEventListener("keydown", t3);
      };
    }, [$]);
    let H = (0, a.useRef)(null), K = (0, a.useRef)(null), X = (0, a.useRef)(null), [Q, U] = (0, a.useState)(false);
    (0, a.useLayoutEffect)(() => {
      let e3 = K.current, t3 = X.current;
      if (!e3 || !t3 || "u" < typeof ResizeObserver) return;
      let r3 = () => U(t3.scrollWidth > e3.clientWidth + 1);
      r3();
      let i2 = new ResizeObserver(r3);
      return i2.observe(e3), i2.observe(t3), () => i2.disconnect();
    }, []);
    let V = Q && "marquee" === t2 && !b2, J = (0, u.d)(0), Z = (0, a.useRef)({
      speed: 0,
      target: 0,
      drag: null,
      visible: true,
      width: 0,
      seek: null
    }), ee = (0, c.G)(J, (e3) => {
      let t3 = Z.current.width;
      return t3 ? -((e3 % t3 + t3) % t3) : 0;
    }), et = null !== I2 && O;
    (0, a.useEffect)(() => {
      Z.current.target = et ? 0 : r2;
    }, [et, r2]), (0, a.useEffect)(() => {
      if (!V) return void J.set(0);
      let e3 = Z.current, t3 = X.current, r3 = () => {
        e3.width = t3?.offsetWidth ?? 0;
      };
      r3();
      let i2 = "u" > typeof ResizeObserver ? new ResizeObserver(r3) : null;
      t3 && i2?.observe(t3);
      let a2 = "u" > typeof IntersectionObserver ? new IntersectionObserver(([t4]) => {
        e3.visible = !!t4?.isIntersecting;
      }) : null;
      K.current && a2?.observe(K.current);
      let n3 = 0, s3 = performance.now(), l3 = (t4) => {
        let r4 = Math.min(0.05, (t4 - s3) / 1e3);
        if (s3 = t4, e3.width && (J.get() >= e3.width || 0 > J.get()) && J.set((J.get() % e3.width + e3.width) % e3.width), e3.visible && !document.hidden && !e3.drag)
          if (null !== e3.seek) {
            let t5 = e3.seek - J.get();
            J.set(J.get() + t5 * (1 - Math.exp(-(12 * r4)))), 0.5 > Math.abs(t5) && (e3.seek = null), e3.speed = 0;
          } else
            e3.speed += (e3.target - e3.speed) * (1 - Math.exp(-r4 * (e3.target ? 2.2 : 6))), Math.abs(e3.speed) > 0.01 && J.set(J.get() + e3.speed * r4);
        n3 = requestAnimationFrame(l3);
      };
      return n3 = requestAnimationFrame(l3), () => {
        cancelAnimationFrame(n3), i2?.disconnect(), a2?.disconnect();
      };
    }, [V, J]);
    let er = (e3) => {
      let t3 = Z.current, r3 = t3.drag;
      r3 && r3.id === e3.pointerId && (t3.drag = null, r3.moved && (t3.speed = Math.max(-1600, Math.min(1600, r3.velocity)), ei.current = true, setTimeout(() => {
        ei.current = false;
      }, 0)));
    }, ei = (0, a.useRef)(false), ea = (0, a.useRef)(/* @__PURE__ */ new Map()), [en, es] = (0, a.useState)(null), el = en ?? e2[0]?.id ?? null, eo = (0, a.useCallback)(
      (e3) => {
        let t3 = ea.current.get(e3), r3 = K.current;
        if (!t3 || !r3) return;
        let i2 = t3.parentElement;
        if (V) {
          let e4 = Z.current.width || 1, t4 = (J.get() % e4 + e4) % e4, r4 = i2.offsetLeft - 24;
          r4 - t4 > e4 / 2 && (r4 -= e4), t4 - r4 > e4 / 2 && (r4 += e4), Z.current.seek = J.get() + (r4 - t4);
        } else
          (i2.offsetLeft < r3.scrollLeft || i2.offsetLeft + i2.offsetWidth > r3.scrollLeft + r3.clientWidth) && r3.scrollTo({
            left: i2.offsetLeft - 16,
            behavior: b2 ? "auto" : "smooth"
          });
      },
      [V, J, b2]
    ), ec = (0, u.d)(0), ed = (0, u.d)("50% 0px"), eu = (0, a.useRef)(C);
    (0, a.useLayoutEffect)(() => {
      eu.current = C;
    }, [C]);
    let em = null !== C;
    (0, a.useLayoutEffect)(() => {
      if (!em) return;
      let e3 = 0, t3 = true, r3 = -1, i2 = (a2) => {
        let n3 = eu.current, s3 = G.current, l3 = s3?.isConnected && s3.dataset.metric === n3 ? s3 : n3 ? ea.current.get(n3) : void 0, o3 = H.current;
        if (l3 && o3) {
          let e4 = l3.getBoundingClientRect(), i3 = o3.getBoundingClientRect(), n4 = Math.min(248, i3.width), s4 = e4.left + e4.width / 2 - i3.left, c2 = Math.max(0, Math.min(i3.width - n4, e4.left - i3.left)), d2 = r3 < 0 ? 0 : Math.min(0.05, (a2 - r3) / 1e3);
          t3 || b2 ? (ec.jump(c2), ed.set(
            `${Math.max(12, Math.min(n4 - 12, s4 - c2)).toFixed(1)}px 0px`
          )) : ec.set(ec.get() + (c2 - ec.get()) * (1 - Math.exp(-(16 * d2)))), t3 = false;
        }
        r3 = a2, e3 = requestAnimationFrame(i2);
      };
      return i2(-1), r3 = -1, () => cancelAnimationFrame(e3);
    }, [em, ed, ec, b2]);
    let ep = C ? e2.find((e3) => e3.id === C) : void 0, ef = (t3) => e2.map((r3, a2) => {
      let n3 = w2.get(r3.id);
      if (!n3) return null;
      let s3 = A2.changes[r3.id], l3 = s3 ? Math.sign(s3.delta) : 0, o3 = 0 === l3 ? "flat" : l3 > 0 == ((r3.positive ?? "up") === "up") ? "good" : "bad", c2 = !!s3 && s3.tick > L2, u2 = s3 ? Math.abs("absolute" === r3.delta ? s3.delta : s3.ratio) * n3.scale : 0, m3 = s3 ? `${n3.delta.format(u2)}${n3.suffix}` : "", f2 = `${r3.label}, ${n3.value.format(r3.value)}${s3 && l3 ? `, ${l3 > 0 ? "up" : "down"} ${m3}` : ""}`;
      return (0, i.jsx)(
        "li",
        {
          className: _().item,
          "data-open": C === r3.id || void 0,
          children: (0, i.jsxs)("button", {
            ref: t3 ? void 0 : (e3) => {
              e3 ? ea.current.set(r3.id, e3) : ea.current.delete(r3.id);
            },
            type: "button",
            "data-metric": r3.id,
            className: _().button,
            tabIndex: t3 ? -1 : el === r3.id ? 0 : -1,
            "aria-label": t3 ? void 0 : f2,
            "aria-expanded": t3 ? void 0 : C === r3.id,
            "aria-controls": t3 || C !== r3.id ? void 0 : j2,
            onPointerEnter: (e3) => {
              "mouse" === e3.pointerType && B(r3.id, e3.currentTarget);
            },
            onPointerLeave: (e3) => {
              "mouse" === e3.pointerType && q();
            },
            onFocus: (e3) => {
              t3 || (W(e3.currentTarget.matches(":focus-visible")), G.current = e3.currentTarget, es(r3.id), D(r3.id), eo(r3.id));
            },
            onBlur: () => D((e3) => e3 === r3.id ? null : e3),
            onClick: (e3) => {
              ei.current || (G.current = e3.currentTarget, S((e4) => e4 === r3.id ? null : r3.id));
            },
            onKeyDown: (t4) => ((t5, r4) => {
              let i2 = {
                ArrowRight: r4 + 1,
                ArrowLeft: r4 - 1,
                Home: 0,
                End: e2.length - 1
              };
              if ("Escape" === t5.key) {
                S(null), D(null);
                return;
              }
              if (!(t5.key in i2)) return;
              t5.preventDefault();
              let a3 = e2[(i2[t5.key] + e2.length) % e2.length];
              a3 && ea.current.get(a3.id)?.focus();
            })(t4, a2),
            children: [
              (0, i.jsx)("span", {
                className: _().label,
                children: r3.label
              }),
              (0, i.jsxs)("span", {
                className: _().reading,
                children: [
                  (0, i.jsx)("span", {
                    className: _().value,
                    children: (0, i.jsx)(M, {
                      value: r3.value,
                      formatter: n3.value,
                      reduceMotion: b2
                    })
                  }),
                  (0, i.jsxs)("span", {
                    className: _().delta,
                    "data-tone": o3,
                    "data-flash": c2 || void 0,
                    "data-empty": !s3 || void 0,
                    children: [
                      (0, i.jsx)("span", {
                        className: _().deltaIcon,
                        children: (0, i.jsx)(p.N, {
                          mode: "popLayout",
                          initial: false,
                          children: (0, i.jsx)(
                            d.PY1.span,
                            {
                              className: _().deltaGlyph,
                              initial: b2 ? { opacity: 0 } : { opacity: 0, y: l3 > 0 ? 5 : -5 },
                              animate: { opacity: 1, y: 0 },
                              exit: b2 ? { opacity: 0 } : { opacity: 0, y: l3 > 0 ? -5 : 5 },
                              transition: b2 ? { duration: 0 } : v.T.spring.snappy,
                              children: l3 > 0 ? (0, i.jsx)(h.A, {
                                size: 12,
                                strokeWidth: 2.25
                              }) : l3 < 0 ? (0, i.jsx)(g.A, {
                                size: 12,
                                strokeWidth: 2.25
                              }) : (0, i.jsx)(y.A, {
                                size: 12,
                                strokeWidth: 2.25
                              })
                            },
                            l3
                          )
                        })
                      }),
                      (0, i.jsxs)("span", {
                        className: _().deltaText,
                        children: [
                          (0, i.jsx)(M, {
                            value: u2,
                            formatter: n3.delta,
                            reduceMotion: b2
                          }),
                          n3.suffix && (0, i.jsx)("span", {
                            className: _().symbol,
                            children: n3.suffix
                          })
                        ]
                      }),
                      s3 && !b2 && (0, i.jsx)(
                        d.PY1.span,
                        {
                          className: _().pulse,
                          initial: { opacity: 0.9, scale: 0.8 },
                          animate: { opacity: 0, scale: 1.25 },
                          transition: {
                            duration: 0.7,
                            ease: v.T.ease.enter
                          }
                        },
                        s3.tick
                      )
                    ]
                  })
                ]
              })
            ]
          })
        },
        r3.id
      );
    }), eh = ep ? ep.history ? [...ep.history] : A2.history[ep.id] ?? [] : [], eg = ep ? w2.get(ep.id) : void 0, ey = ep ? A2.changes[ep.id] : void 0, ev = eh.length > 1 ? Math.sign((eh[eh.length - 1] ?? 0) - (eh[0] ?? 0)) : 0, ex = 0 === ev ? "flat" : ev > 0 == ((ep?.positive ?? "up") === "up") ? "up" : "down";
    return (0, i.jsxs)("div", {
      ref: H,
      className: [_().ticker, m2].filter(Boolean).join(" "),
      style: x2,
      role: "region",
      "aria-label": o2,
      onPointerLeave: (e3) => {
        "mouse" === e3.pointerType && q();
      },
      children: [
        (0, i.jsx)("div", {
          ref: K,
          className: _().viewport,
          "data-mode": V ? "marquee" : Q ? "scroll" : "fit",
          onPointerDown: (e3) => {
            V && 0 === e3.button && (Z.current.drag = {
              x: e3.clientX,
              last: e3.clientX,
              time: performance.now(),
              velocity: 0,
              moved: false,
              id: e3.pointerId
            });
          },
          onPointerMove: (e3) => {
            let t3 = Z.current.drag;
            if (!t3 || t3.id !== e3.pointerId || !t3.moved && 5 > Math.abs(e3.clientX - t3.x))
              return;
            t3.moved || (t3.moved = true, e3.currentTarget.setPointerCapture(e3.pointerId));
            let r3 = performance.now(), i2 = e3.clientX - t3.last;
            t3.velocity = 0.6 * t3.velocity + -i2 / Math.max(1, r3 - t3.time) * 400, t3.last = e3.clientX, t3.time = r3, J.set(J.get() - i2);
          },
          onPointerUp: er,
          onPointerCancel: er,
          children: (0, i.jsx)("div", {
            className: _().fader,
            children: (0, i.jsxs)(d.PY1.div, {
              className: _().track,
              style: { x: ee },
              children: [
                (0, i.jsx)("ul", {
                  ref: X,
                  className: _().group,
                  children: ef(false)
                }),
                V && (0, i.jsx)("ul", {
                  className: _().group,
                  "aria-hidden": "true",
                  children: ef(true)
                })
              ]
            })
          })
        }),
        (0, i.jsx)(p.N, {
          children: ep && eg && (0, i.jsx)(
            d.PY1.div,
            {
              id: j2,
              className: _().panel,
              style: { x: ec, transformOrigin: ed },
              initial: b2 ? { opacity: 0 } : { opacity: 0, y: -6, scale: 0.96 },
              animate: { opacity: 1, y: 0, scale: 1 },
              exit: b2 ? { opacity: 0 } : {
                opacity: 0,
                y: -4,
                scale: 0.98,
                transition: {
                  duration: v.T.duration.exit,
                  ease: v.T.ease.standard
                }
              },
              transition: b2 ? { duration: 0 } : {
                ...v.T.spring.morph,
                opacity: { duration: v.T.duration.fast }
              },
              onPointerEnter: (e3) => {
                "mouse" === e3.pointerType && B(ep.id);
              },
              onPointerLeave: (e3) => {
                "mouse" === e3.pointerType && q();
              },
              children: (0, i.jsx)(p.N, {
                mode: "popLayout",
                initial: false,
                children: (0, i.jsxs)(
                  d.PY1.div,
                  {
                    className: _().panelBody,
                    initial: b2 ? { opacity: 0 } : { opacity: 0, filter: `blur(${v.T.blur.subtle}px)` },
                    animate: { opacity: 1, filter: "blur(0px)" },
                    exit: b2 ? { opacity: 0 } : { opacity: 0, filter: `blur(${v.T.blur.subtle}px)` },
                    transition: { duration: b2 ? 0 : v.T.duration.fast },
                    children: [
                      (0, i.jsxs)("div", {
                        className: _().panelHead,
                        children: [
                          (0, i.jsx)("span", {
                            className: _().panelLabel,
                            children: ep.caption ?? `Last ${eh.length} updates`
                          }),
                          ey && (0, i.jsx)("span", {
                            className: _().panelChange,
                            "data-tone": ex,
                            children: ev > 0 ? "Trending up" : ev < 0 ? "Trending down" : "Flat"
                          })
                        ]
                      }),
                      (0, i.jsx)(N, {
                        values: eh,
                        tone: ex,
                        reduceMotion: b2
                      }),
                      (0, i.jsxs)("dl", {
                        className: _().range,
                        children: [
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)("dt", { children: "Low" }),
                              (0, i.jsx)("dd", {
                                children: eg.value.format(Math.min(...eh))
                              })
                            ]
                          }),
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)("dt", { children: "High" }),
                              (0, i.jsx)("dd", {
                                children: eg.value.format(Math.max(...eh))
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  },
                  ep.id
                )
              })
            },
            "panel"
          )
        })
      ]
    });
  }
  var A = r(24825), E = r.n(A);
  let L = [
    {
      metric: {
        id: "mrr",
        label: "Monthly recurring revenue",
        format: {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0
        },
        caption: "Last 24 updates, today"
      },
      start: 84210,
      step: 420,
      drift: 0.35,
      min: 8e4,
      max: 96e3,
      round: 10
    },
    {
      metric: {
        id: "active",
        label: "Active now",
        caption: "Signed in users, last 24 updates"
      },
      start: 1284,
      step: 38,
      drift: 0.1,
      min: 1050,
      max: 1600,
      round: 1
    },
    {
      metric: {
        id: "conversion",
        label: "Trial conversion",
        format: {
          style: "percent",
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        },
        delta: "absolute",
        caption: "Rolling 7 days"
      },
      start: 0.184,
      step: 4e-3,
      drift: 0.05,
      min: 0.15,
      max: 0.22,
      round: 1e-3
    },
    {
      metric: {
        id: "latency",
        label: "API p95",
        format: { style: "unit", unit: "millisecond", unitDisplay: "short" },
        positive: "down",
        delta: "absolute",
        caption: "p95 across regions"
      },
      start: 212,
      step: 9,
      drift: 0,
      min: 168,
      max: 260,
      round: 1
    },
    {
      metric: {
        id: "orders",
        label: "Orders per minute",
        caption: "Checkout, all stores"
      },
      start: 342,
      step: 16,
      drift: 0.15,
      min: 280,
      max: 420,
      round: 1
    },
    {
      metric: {
        id: "errors",
        label: "Error rate",
        format: {
          style: "percent",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        },
        positive: "down",
        delta: "absolute",
        caption: "5xx responses"
      },
      start: 31e-4,
      step: 4e-4,
      drift: -0.05,
      min: 12e-4,
      max: 68e-4,
      round: 1e-4
    },
    {
      metric: {
        id: "churn",
        label: "Logo churn",
        format: {
          style: "percent",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        },
        positive: "down",
        delta: "absolute",
        caption: "Trailing 30 days"
      },
      start: 0.0184,
      step: 6e-4,
      drift: -0.02,
      min: 0.012,
      max: 0.026,
      round: 1e-4
    }
  ];
  function F(e2) {
    let t2 = e2;
    return () => (t2 = (1664525 * t2 + 1013904223) % 4294967296) / 4294967296;
  }
  function z(e2, t2, r2) {
    let i2 = t2 + (r2() - 0.5 + 0.5 * e2.drift) * 2 * e2.step;
    return Math.round(Math.min(e2.max, Math.max(e2.min, i2)) / e2.round) * e2.round;
  }
  function P() {
    let e2 = F(11);
    return L.map((t2) => {
      let r2 = [t2.start];
      for (let i2 = 0; i2 < 23; i2++)
        r2.unshift(z({ ...t2, drift: -t2.drift }, r2[0] ?? t2.start, e2));
      return r2;
    });
  }
  function R() {
    let e2 = (0, a.useRef)(null), t2 = (0, n.W)(e2, { amount: 0.2 }), [r2, c2] = (0, a.useState)(P), [d2, u2] = (0, a.useState)(true), m2 = (0, a.useRef)(F(29));
    (0, a.useEffect)(() => {
      let e3;
      if (!d2 || !t2) return;
      let r3 = () => {
        if (!document.hidden) {
          let e4 = m2.current, t3 = new Set(
            Array.from(
              { length: 1 + Math.floor(3 * e4()) },
              () => Math.floor(e4() * L.length)
            )
          );
          c2(
            (r4) => r4.map((r5, i2) => {
              let a2 = L[i2];
              if (!t3.has(i2) || !a2) return r5;
              let n2 = r5[r5.length - 1] ?? a2.start, s2 = z(a2, n2, e4);
              return s2 === n2 ? r5 : [...r5.slice(-23), s2];
            })
          );
        }
        e3 = setTimeout(r3, 900 + 700 * m2.current());
      };
      return e3 = setTimeout(r3, 700), () => clearTimeout(e3);
    }, [t2, d2]);
    let p2 = L.map((e3, t3) => {
      let i2 = r2[t3] ?? [e3.start];
      return { ...e3.metric, value: i2[i2.length - 1] ?? e3.start, history: i2 };
    });
    return (0, i.jsxs)("div", {
      ref: e2,
      className: E().demo,
      children: [
        (0, i.jsxs)("div", {
          className: E().bar,
          children: [
            (0, i.jsx)("p", {
              className: E().heading,
              children: "Product health"
            }),
            (0, i.jsxs)(o.$, {
              size: "sm",
              variant: "secondary",
              onClick: () => u2((e3) => !e3),
              children: [
                d2 ? (0, i.jsx)(s.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }) : (0, i.jsx)(l.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                d2 ? "Pause stream" : "Resume stream"
              ]
            })
          ]
        }),
        (0, i.jsx)(T, { metrics: p2, label: "Product health metrics" })
      ]
    });
  }
  let I = R;
}

__m(__module,__exports,__require);
}