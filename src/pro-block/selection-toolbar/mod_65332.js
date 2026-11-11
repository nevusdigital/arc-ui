function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { Vv: () => O, fi: () => D, nl: () => y.n });
  var r = a(95155), n = a(12115), i = a(78780), l = a(76721), o = a(28245), d = a(55809), s = a(92171), c = a(25354), u = a(18310), h = a(7890), m = a(80642), g = a(7770), y = a(54471), p = a(85696), _ = a.n(p);
  let f = (e2) => new Date(e2.getFullYear(), e2.getMonth(), e2.getDate()), v = (e2) => new Date(e2.getFullYear(), e2.getMonth(), 1), x = (e2, t2) => !!(e2 && t2 && e2.getFullYear() === t2.getFullYear() && e2.getMonth() === t2.getMonth() && e2.getDate() === t2.getDate()), w = (e2, t2) => !!(e2 && t2 && e2.getFullYear() === t2.getFullYear() && e2.getMonth() === t2.getMonth()), D = (e2, t2) => new Date(e2.getFullYear(), e2.getMonth(), e2.getDate() + t2), b = (e2, t2) => new Date(e2.getFullYear(), e2.getMonth() + t2, 1), M = (e2, t2) => new Date(
    e2.getFullYear(),
    e2.getMonth() + t2,
    Math.min(
      e2.getDate(),
      new Date(e2.getFullYear(), e2.getMonth() + t2 + 1, 0).getDate()
    )
  ), j = (e2, t2) => !!(t2 && f(e2).getTime() < f(t2).getTime()), N = (e2, t2) => !!(t2 && f(e2).getTime() > f(t2).getTime()), S = (e2) => `${e2.getFullYear()}-${String(e2.getMonth() + 1).padStart(2, "0")}-${String(e2.getDate()).padStart(2, "0")}`, T = (e2) => {
    let t2 = D(e2, -e2.getDay());
    return Array.from(
      { length: 6 },
      (e3, a2) => Array.from({ length: 7 }, (e4, r2) => D(t2, 7 * a2 + r2))
    );
  }, k = () => () => {
  }, F = () => true, E = () => false, { spring: A, duration: Y, ease: $ } = g.T, B = { type: "spring", visualDuration: 0.36, bounce: 0, restDelta: 2e-3 }, R = {
    enter: (e2) => ({ opacity: 0, x: 12 * e2 }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: Y.standard, ease: $.enter }
    },
    exit: (e2) => ({
      opacity: 0,
      x: -12 * e2,
      transition: { duration: 0.14, ease: $.standard }
    })
  }, C = {
    enter: { opacity: 1, x: 0 },
    center: { opacity: 1, x: 0, transition: { duration: 0 } },
    exit: { opacity: 0, transition: { duration: 0 } }
  };
  function L({ cell: e2, reduced: t2 }) {
    let a2 = e2 >= 0, i2 = (0, o.d)(a2 ? e2 % 7 : 0), l2 = (0, o.d)(a2 ? Math.floor(e2 / 7) : 0), u2 = (0, o.d)(+!!a2), h2 = (0, o.d)(a2 ? 1 : 0.6), m2 = (0, d.G)(
      () => `translate(calc(${i2.get()} * (100% + 4px)), calc(${l2.get()} * (100% + 4px))) scale(${h2.get()})`
    ), g2 = (0, n.useRef)(!a2);
    return (0, n.useLayoutEffect)(() => {
      if (!a2) {
        g2.current = true;
        let e3 = t2 ? { duration: 0 } : { duration: 0.14, ease: $.standard }, a3 = [(0, s.i)(u2, 0, e3), (0, s.i)(h2, 0.6, e3)];
        return () => a3.forEach((e4) => e4.stop());
      }
      let r2 = e2 % 7, n2 = Math.floor(e2 / 7), o2 = [];
      return g2.current || t2 ? (i2.jump(r2), l2.jump(n2)) : o2.push((0, s.i)(i2, r2, A.morph), (0, s.i)(l2, n2, A.morph)), g2.current = false, o2.push(
        (0, s.i)(
          u2,
          1,
          t2 ? { duration: 0 } : { duration: Y.fast, ease: $.enter }
        ),
        (0, s.i)(h2, 1, t2 ? { duration: 0 } : A.snappy)
      ), () => o2.forEach((e3) => e3.stop());
    }, [e2, a2, t2, i2, l2, u2, h2]), (0, r.jsx)(c.PY1.span, {
      className: _().highlight,
      style: { transform: m2, opacity: u2 },
      "aria-hidden": "true",
      children: (0, r.jsx)("span", { className: _().highlightFill })
    });
  }
  function P({ index: e2, position: t2, present: a2, children: n2 }) {
    let i2 = (0, d.G)(t2, (t3) => `calc(${(e2 - t3) * 100}% + ${(e2 - t3) * 16}px)`), l2 = (0, d.G)(t2, (t3) => 1 - 0.6 * Math.min(1, Math.abs(e2 - t3)));
    return (0, r.jsx)(c.PY1.div, {
      className: _().monthBody,
      style: { x: i2, opacity: l2 },
      "data-present": a2 || void 0,
      "aria-hidden": !a2 || void 0,
      inert: !a2,
      children: n2
    });
  }
  function O({
    value: e2,
    onChange: t2,
    month: a2,
    onMonthChange: d2,
    minDate: g2,
    maxDate: p2,
    disabledDates: A2,
    locale: Y2 = "en-US",
    className: $2,
    showToday: V = false
  }) {
    let I, K = (0, n.useId)(), U = (0, y.n)(), H = (0, n.useSyncExternalStore)(k, F, E), Q = ((0, u.I)() ?? false) && H, [W, q] = (0, n.useState)(() => e2 ? v(e2) : void 0), [z, G] = (0, n.useState)(e2), J = (0, n.useRef)(null), Z = (0, n.useRef)(null), X = e2 ?? U, ee = a2 ? v(a2) : W ?? (X && v(X));
    a2 || W || !ee || q(ee);
    let et = ee?.getTime(), ea = ee ? S(ee) : "pending", [er, en] = (0, n.useState)(et), [ei, el] = (0, n.useState)(0);
    er !== et && (en(et), el(void 0 === er || void 0 === et ? 0 : et > er ? 1 : -1));
    let eo = (0, n.useMemo)(() => void 0 === et ? [] : T(new Date(et)), [et]), ed = ee ? 12 * ee.getFullYear() + ee.getMonth() : 0, es = (0, o.d)(ed), [ec, eu] = (0, n.useState)([ed, ed]);
    (0, h.L)(es, "change", (e3) => {
      let t3 = [Math.floor(e3 + 1e-3), Math.ceil(e3 - 1e-3)];
      eu((e4) => e4[0] === t3[0] && e4[1] === t3[1] ? e4 : t3);
    });
    let eh = void 0 !== ee, em = (0, n.useRef)(eh);
    (0, n.useLayoutEffect)(() => {
      if (!eh) return;
      let e3 = es.get();
      if (e3 === ed) return;
      if (!em.current || Q) {
        em.current = true, es.jump(ed);
        return;
      }
      Math.abs(ed - e3) > 2 && es.jump(ed - Math.sign(ed - e3));
      let t3 = (0, s.i)(es, ed, B);
      return () => t3.stop();
    }, [eh, ed, Q, es]);
    let eg = Array.from(/* @__PURE__ */ new Set([ec[0], ec[1], ed])).sort((e3, t3) => e3 - t3), ey = (0, n.useMemo)(
      () => new Intl.DateTimeFormat(Y2, { month: "long", year: "numeric" }),
      [Y2]
    ), ep = (0, n.useMemo)(
      () => new Intl.DateTimeFormat(Y2, { weekday: "short" }),
      [Y2]
    ), e_ = (0, n.useMemo)(
      () => Array.from(
        { length: 7 },
        (e3, t3) => ep.format(new Date(2024, 0, 7 + t3))
      ),
      [ep]
    ), ef = ee ? ey.format(ee) : "", ev = e2 ? S(e2) : "", [ex, ew] = (0, n.useState)({ key: ev, date: e2 }), [eD, eb] = (0, n.useState)({ from: "", to: "", distance: 0 });
    if (ex.key !== ev) {
      let t3 = ex.date && e2 ? Math.round((f(e2).getTime() - f(ex.date).getTime()) / 864e5) : 0, a3 = ex.date && e2 ? e2.getDay() - ex.date.getDay() : 0;
      ew({ key: ev, date: e2 }), eb({ from: ex.key, to: ev, distance: Math.hypot(a3, (t3 - a3) / 7) });
    }
    let eM = (e3) => j(e3, g2) || N(e3, p2) || !!A2?.(e3), ej = ee && b(ee, -1), eN = ee && b(ee, 1), eS = !!(ej && g2 && ej.getTime() < v(g2).getTime()), eT = !!(eN && p2 && eN.getTime() > v(p2).getTime()), ek = !!(U && !eM(U) && t2), eF = !!(U && w(ee, U) && (!ek || x(e2, U))), eE = (I = (e3) => e3 && w(e3, ee) && !eM(e3) ? S(e3) : "")(z) || I(e2) || I(U) || S(eo.flat().find((e3) => w(e3, ee) && !eM(e3)) ?? /* @__PURE__ */ new Date(0)), eA = (e3) => {
      let t3 = v(e3);
      a2 || q(t3), d2?.(t3);
    };
    (0, n.useLayoutEffect)(() => {
      let e3 = Z.current;
      if (!e3) return;
      let t3 = J.current?.querySelector(`[data-present] [data-date="${e3}"]`);
      t3 && (Z.current = null, t3.focus({ preventScroll: true }));
    });
    let eY = (...e3) => e3.filter(Boolean).join(" ");
    return (0, r.jsxs)("section", {
      className: eY(_().calendar, $2),
      "aria-labelledby": K,
      children: [
        (0, r.jsxs)("div", {
          className: _().header,
          children: [
            (0, r.jsxs)("h2", {
              id: K,
              className: _().heading,
              children: [
                (0, r.jsx)("span", { className: _().srOnly, children: ef }),
                (0, r.jsx)("span", {
                  className: _().title,
                  "aria-hidden": "true",
                  children: (0, r.jsx)(m.N, {
                    initial: false,
                    custom: ei,
                    children: ee && (0, r.jsx)(
                      c.PY1.span,
                      {
                        className: _().titleRow,
                        custom: ei,
                        variants: Q || !ei ? C : R,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        children: ef
                      },
                      ea
                    )
                  })
                })
              ]
            }),
            (0, r.jsx)("span", {
              className: _().srOnly,
              "aria-live": "polite",
              children: ei ? ef : ""
            }),
            (0, r.jsxs)("div", {
              className: _().navigation,
              children: [
                V && (0, r.jsx)("button", {
                  type: "button",
                  className: _().todayButton,
                  "aria-disabled": eF || void 0,
                  "aria-label": U ? `Today, ${U.toLocaleDateString(Y2, { dateStyle: "full" })}` : "Today",
                  onClick: () => {
                    U && ee && !eF && (G(U), w(U, ee) || eA(U), ek && !x(e2, U) && t2?.(U));
                  },
                  children: "Today"
                }),
                (0, r.jsx)("button", {
                  type: "button",
                  className: _().navButton,
                  "aria-label": "Previous month",
                  "aria-disabled": eS || void 0,
                  onClick: () => {
                    !eS && ej && eA(ej);
                  },
                  children: (0, r.jsx)(i.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                }),
                (0, r.jsx)("button", {
                  type: "button",
                  className: _().navButton,
                  "aria-label": "Next month",
                  "aria-disabled": eT || void 0,
                  onClick: () => {
                    !eT && eN && eA(eN);
                  },
                  children: (0, r.jsx)(l.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                })
              ]
            })
          ]
        }),
        (0, r.jsx)("div", {
          className: _().weekdays,
          "aria-hidden": "true",
          children: e_.map(
            (e3, t3) => (0, r.jsx)("span", { children: e3.slice(0, 2) }, `${e3}-${t3}`)
          )
        }),
        (0, r.jsx)("div", {
          className: _().monthViewport,
          ref: J,
          children: ee ? eg.map((a3) => {
            let n2, i2;
            return (0, r.jsx)(
              P,
              {
                index: a3,
                position: es,
                present: a3 === ed,
                children: (n2 = new Date(
                  Math.floor(a3 / 12),
                  (a3 % 12 + 12) % 12,
                  1
                ), i2 = a3 === ed, (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(L, {
                      cell: ((t3) => {
                        if (!e2) return -1;
                        let a4 = D(t3, -t3.getDay()), r2 = Math.round(
                          (f(e2).getTime() - a4.getTime()) / 864e5
                        );
                        return r2 >= 0 && r2 < 42 ? r2 : -1;
                      })(n2),
                      reduced: Q
                    }),
                    (0, r.jsx)("div", {
                      className: _().grid,
                      role: "grid",
                      "aria-label": ey.format(n2),
                      children: T(n2).map(
                        (a4) => (0, r.jsx)(
                          "div",
                          {
                            className: _().week,
                            role: "row",
                            children: a4.map((a5) => {
                              let l2 = S(a5), o2 = x(a5, e2), d3 = x(a5, U);
                              return (0, r.jsx)(
                                "button",
                                {
                                  type: "button",
                                  role: "gridcell",
                                  "data-date": l2,
                                  "aria-label": a5.toLocaleDateString(Y2, {
                                    dateStyle: "full"
                                  }),
                                  "aria-selected": o2,
                                  "aria-current": d3 ? "date" : void 0,
                                  tabIndex: i2 && l2 === eE ? 0 : -1,
                                  disabled: eM(a5),
                                  style: i2 ? ((e3) => {
                                    if (!eD.distance || Q || e3 !== eD.to && e3 !== eD.from)
                                      return;
                                    let t3 = e3 === eD.to ? Math.min(
                                      260,
                                      95 + 85 * Math.log(eD.distance)
                                    ) : Math.max(
                                      20,
                                      130 / eD.distance
                                    );
                                    return {
                                      "--number-delay": `${Math.round(t3)}ms`
                                    };
                                  })(l2) : void 0,
                                  className: eY(
                                    _().day,
                                    !w(a5, n2) && _().outside,
                                    o2 && _().selected,
                                    d3 && _().today
                                  ),
                                  onFocus: () => G(a5),
                                  onKeyDown: (e3) => ((e4, a6) => {
                                    if ("Enter" === e4.key || " " === e4.key) {
                                      e4.preventDefault(), eM(a6) || t2?.(a6);
                                      return;
                                    }
                                    let r2 = {
                                      ArrowLeft: [D(a6, -1), -1],
                                      ArrowRight: [D(a6, 1), 1],
                                      ArrowUp: [D(a6, -7), -1],
                                      ArrowDown: [D(a6, 7), 1],
                                      Home: [D(a6, -a6.getDay()), 1],
                                      End: [D(a6, 6 - a6.getDay()), -1],
                                      PageUp: [
                                        M(a6, e4.shiftKey ? -12 : -1),
                                        -1
                                      ],
                                      PageDown: [
                                        M(a6, e4.shiftKey ? 12 : 1),
                                        1
                                      ]
                                    }[e4.key];
                                    r2 && (e4.preventDefault(), ((e5, t3, a7) => {
                                      let r3 = j(t3, g2) && g2 ? f(g2) : N(t3, p2) && p2 ? f(p2) : t3;
                                      for (let e6 = 0; e6 < 42 && eM(r3); e6 += 1)
                                        r3 = D(r3, a7);
                                      !(eM(r3) || x(r3, e5)) && (G(r3), Z.current = S(r3), w(r3, ee) || eA(r3));
                                    })(a6, r2[0], r2[1]));
                                  })(e3, a5),
                                  onClick: () => t2?.(a5),
                                  children: (0, r.jsx)("span", {
                                    className: _().dayNumber,
                                    children: a5.getDate()
                                  })
                                },
                                l2
                              );
                            })
                          },
                          S(a4[0])
                        )
                      )
                    })
                  ]
                }))
              },
              a3
            );
          }) : (0, r.jsx)("div", {
            className: _().monthBody,
            "aria-hidden": "true",
            children: (0, r.jsx)("div", {
              className: _().grid,
              children: Array.from(
                { length: 6 },
                (e3, t3) => (0, r.jsx)(
                  "div",
                  {
                    className: _().week,
                    children: Array.from(
                      { length: 7 },
                      (e4, t4) => (0, r.jsx)(
                        "span",
                        { className: _().placeholderDay },
                        t4
                      )
                    )
                  },
                  t3
                )
              )
            })
          })
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
}