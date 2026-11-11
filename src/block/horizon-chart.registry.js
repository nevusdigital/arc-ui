/* horizon-chart (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(58253, function(__module,__exports,__require){
"use strict";
function __m(e, a, r) {
  "use strict";
  r.r(a), r.d(a, { HorizonChart: () => D, default: () => G });
  var s = r(95155), t = r(12115), n = r(18310), l = r(28245), o = r(92171), i = r(55809), c = r(25354), h = r(66558), d = r(7770);
  let u = ["Jun", "Jul", "Aug", "Sep"], m = ["June", "July", "August", "September"], _ = [30, 31, 31, 30], p = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ], f = (function() {
    let e2 = [], a2 = 0, r2 = 1;
    for (let s2 = 0; s2 < 119; s2++)
      e2.push({ short: `${u[a2]} ${r2}`, long: `${p[s2 % 7]}, ${m[a2]} ${r2}` }), ++r2 > _[a2] && (a2++, r2 = 1);
    return e2;
  })();
  function x(e2, a2) {
    let r2 = 0;
    for (let a3 = 6; a3 < e2; a3++) r2 += _[a3 - 6];
    return r2 + a2 - 1;
  }
  let b = u.map((e2, a2) => ({ index: x(6 + a2, 1), label: e2 }));
  function y(e2, a2, r2, s2 = 4, t2 = 4) {
    return e2 < a2 - s2 || e2 > r2 + t2 ? 0 : e2 < a2 ? (e2 - (a2 - s2)) / s2 : e2 > r2 ? 1 - (e2 - r2) / t2 : 1;
  }
  function v(e2, a2, r2, s2 = 2) {
    return e2 < a2 - s2 ? 0 : e2 < a2 ? (e2 - (a2 - s2)) / s2 : Math.pow(0.5, (e2 - a2) / r2);
  }
  let w = [
    {
      id: "amsterdam",
      name: "Amsterdam",
      noise: 2.6,
      weekend: -3,
      shape: (e2) => 1 + 0.02 * e2 + 32 * v(e2, x(9, 8), 5)
    },
    {
      id: "berlin",
      name: "Berlin",
      noise: 2.4,
      weekend: -2,
      shape: (e2) => -1 + 0.09 * e2 - 6 * y(e2, x(8, 3), x(8, 14))
    },
    {
      id: "copenhagen",
      name: "Copenhagen",
      noise: 2.8,
      weekend: -2,
      shape: (e2) => 1 - 19 * y(e2, x(6, 29), x(7, 24), 6, 6)
    },
    {
      id: "dublin",
      name: "Dublin",
      noise: 3.2,
      weekend: -1,
      shape: (e2) => 0.5 + 2 * Math.sin(e2 / 9)
    },
    {
      id: "lisbon",
      name: "Lisbon",
      noise: 3,
      weekend: 1,
      shape: (e2) => 1 - 24 * y(e2, x(8, 1), x(8, 23), 6, 7)
    },
    {
      id: "london",
      name: "London",
      noise: 2.4,
      weekend: -3,
      shape: (e2) => 1 + 30 * v(e2, x(7, 6), 9, 4) + 9 * y(e2, x(9, 7), x(9, 30), 5, 0)
    },
    {
      id: "madrid",
      name: "Madrid",
      noise: 2.8,
      weekend: 0,
      shape: (e2) => 0.5 - 29 * y(e2, x(8, 1), x(8, 24), 6, 6)
    },
    {
      id: "milan",
      name: "Milan",
      noise: 2.6,
      weekend: -1,
      shape: (e2) => 0 - 35 * y(e2, x(8, 6), x(8, 23), 5, 5) - 8 * y(e2, x(7, 25), x(8, 30), 6, 6)
    },
    {
      id: "paris",
      name: "Paris",
      noise: 2.5,
      weekend: -2,
      shape: (e2) => 0.5 - 31 * y(e2, x(7, 31), x(8, 21), 6, 7) + 6 * y(e2, x(9, 1), x(9, 30), 4, 0)
    },
    {
      id: "prague",
      name: "Prague",
      noise: 2.4,
      weekend: -2,
      shape: (e2) => -2 + 0.15 * e2 - 7 * y(e2, x(7, 13), x(8, 9))
    },
    {
      id: "stockholm",
      name: "Stockholm",
      noise: 2.5,
      weekend: -1,
      shape: (e2) => 0.5 - 30 * y(e2, x(6, 19), x(6, 20), 1, 2) - 13 * y(e2, x(7, 1), x(7, 31), 6, 8)
    },
    {
      id: "vienna",
      name: "Vienna",
      noise: 2.4,
      weekend: -2,
      shape: (e2) => 0.5 - 15 * y(e2, x(8, 3), x(8, 21), 6, 6)
    },
    {
      id: "warsaw",
      name: "Warsaw",
      noise: 2.6,
      weekend: -2,
      shape: (e2) => -1 + 0.12 * e2 - 44 * y(e2, x(8, 18), x(8, 18), 1, 2)
    },
    {
      id: "zurich",
      name: "Zurich",
      noise: 2.2,
      weekend: -1,
      shape: (e2) => 2 - 0.07 * e2 - 4 * y(e2, x(7, 13), x(8, 7))
    }
  ].map((e2, a2) => {
    let r2, s2 = (r2 = 9127 + 131 * a2 >>> 0, () => {
      let e3 = r2 = r2 + 1831565813 >>> 0;
      return e3 = Math.imul(e3 ^ e3 >>> 15, 1 | e3), (((e3 ^= e3 + Math.imul(e3 ^ e3 >>> 7, 61 | e3)) ^ e3 >>> 14) >>> 0) / 4294967296;
    }), t2 = 0, n2 = [];
    for (let a3 = 0; a3 < 119; a3++) {
      t2 = 0.7 * t2 + (s2() - 0.5) * e2.noise;
      let r3 = a3 % 7 >= 5 ? e2.weekend : 0, l2 = e2.shape(a3) + r3 + t2 + (s2() - 0.5) * e2.noise;
      n2.push(Math.round(10 * Math.max(-36, Math.min(36, l2))) / 10);
    }
    return { id: e2.id, name: e2.name, values: n2 };
  });
  var j = r(86280), g = r.n(j);
  let { spring: N } = d.T, z = { ...N.smooth, visualDuration: 0.55 }, k = { ...N.smooth, visualDuration: 0.6 }, M = { type: "spring", visualDuration: 0.16, bounce: 0 }, $ = { duration: 0 }, S = [0, 1, 2, 3], A = (e2) => 1 - Math.pow(0.07999999999999996, 1 / Math.max(1, e2)), E = [
    { value: "name", label: "Name" },
    { value: "peak", label: "Peak" },
    { value: "latest", label: "Latest" }
  ], L = {
    name: "by name",
    peak: "by largest swing",
    latest: "by latest value"
  }, R = [1, 2, 3, 4].map((e2) => ({ value: String(e2), label: String(e2) })), T = (e2, a2) => e2 < a2 ? { "--grow": 1, opacity: 1 - Math.pow(1 - A(a2), e2 + 1) } : { "--grow": 0, opacity: 0 };
  function C(e2) {
    let a2 = Math.round(e2);
    return 0 === a2 ? "0%" : `${a2 > 0 ? "+" : "\u2212"}${Math.abs(a2)}%`;
  }
  function B(e2) {
    return `${Math.round(10 * e2) / 10}%`;
  }
  function P(e2, a2, r2) {
    if (0 === e2.length) return "";
    let s2 = "M0,0";
    return e2.forEach((e3, t2) => {
      let n2 = Math.min(Math.max(a2(e3), 0), r2) / r2;
      s2 += `L${t2},${0 === n2 ? 0 : -Math.round(1e4 * n2) / 1e4}`;
    }), `${s2}L${e2.length - 1},0Z`;
  }
  function D({
    series: e2 = w,
    days: a2 = f,
    ticks: r2 = b,
    title: d2 = "Sessions against baseline",
    description: u2 = "Daily sessions by market compared with each market's spring average, June to September 2026",
    baselineLabel: m2 = "spring average",
    defaultSort: _2 = "peak",
    defaultBands: p2 = 3,
    extent: x2,
    formatValue: y2 = C,
    onSortChange: v2,
    onBandsChange: j2,
    onDayChange: N2,
    className: G2
  }) {
    let W = (0, t.useId)(), O = (0, n.I)(), [K, V] = (0, t.useState)(_2), [I, J] = (0, t.useState)(p2), [Z] = (0, t.useState)(p2), [F, Q] = (0, t.useState)(""), q = Math.max(0, a2.length - 1), H = (0, t.useMemo)(() => {
      if (x2 && x2 > 0) return x2;
      let a3 = 0;
      for (let r3 of e2) for (let e3 of r3.values) a3 = Math.max(a3, Math.abs(e3));
      return Math.max(12, 12 * Math.ceil(a3 / 12));
    }, [x2, e2]), X = (0, t.useMemo)(
      () => e2.map((e3) => {
        let a3 = 0, r3 = 0, s2 = -1 / 0, t2 = 0, n2 = 1 / 0, l2 = 0;
        return e3.values.forEach((e4, o2) => {
          Math.abs(e4) > Math.abs(a3) && (a3 = e4, r3 = o2), e4 > s2 && (s2 = e4, t2 = o2), e4 < n2 && (n2 = e4, l2 = o2);
        }), {
          ...e3,
          latest: e3.values[q] ?? 0,
          peak: a3,
          peakIndex: r3,
          high: s2,
          highIndex: t2,
          low: n2,
          lowIndex: l2,
          above: P(e3.values, (e4) => e4, H),
          below: P(e3.values, (e4) => -e4, H)
        };
      }),
      [e2, H, q]
    ), Y = (0, t.useMemo)(() => {
      let e3 = [...X];
      return "name" === K ? e3.sort((e4, a3) => e4.name.localeCompare(a3.name, "en")) : "peak" === K ? e3.sort(
        (e4, a3) => Math.abs(a3.peak) - Math.abs(e4.peak) || e4.name.localeCompare(a3.name, "en")
      ) : e3.sort(
        (e4, a3) => a3.latest - e4.latest || e4.name.localeCompare(a3.name, "en")
      ), e3;
    }, [X, K]), U = (0, t.useRef)(null), ee = (0, l.d)(Z);
    (0, t.useEffect)(
      () => ee.on("change", (e3) => {
        let a3 = U.current;
        a3 && (a3.style.setProperty("--bands", String(e3)), a3.style.setProperty("--alpha", A(e3).toFixed(4)));
      }),
      [ee]
    ), (0, t.useEffect)(() => {
      if (O) return void ee.set(I);
      let e3 = (0, o.i)(ee, I, k);
      return () => e3.stop();
    }, [I, O, ee]);
    let ea = (0, t.useRef)(null), er = (0, t.useRef)(/* @__PURE__ */ new Map()), es = (0, t.useRef)(null), et = (0, t.useRef)(null), en = (0, t.useRef)(null), el = (0, t.useRef)(null), eo = (0, l.d)(100), ei = (0, i.G)(eo, (e3) => `${e3}%`), ec = (0, t.useRef)(null), eh = (0, t.useRef)(X), ed = (0, t.useRef)(a2), eu = (0, t.useRef)(y2), em = (0, t.useRef)(N2);
    (0, t.useEffect)(() => {
      eh.current = X, ed.current = a2, eu.current = y2, em.current = N2;
    });
    let e_ = (e3) => {
      let a3 = e3 ?? q;
      for (let e4 of eh.current) {
        let r4 = er.current.get(e4.id)?.firstChild;
        r4 && (r4.nodeValue = eu.current(e4.values[a3] ?? 0));
      }
      let r3 = es.current?.firstChild;
      r3 && (r3.nodeValue = ed.current[a3]?.long ?? "");
      let s2 = et.current?.firstChild;
      s2 && (s2.nodeValue = null === e3 ? "Latest day" : "Selected day");
    }, ep = (e3) => {
      let a3 = ea.current;
      if (e3 !== a3) {
        if (ea.current = e3, e_(e3), en.current?.toggleAttribute("data-on", null !== e3), null !== e3) {
          let r3 = 0 === q ? 0 : e3 / q * 100;
          ec.current?.stop(), O || null === a3 ? eo.set(r3) : ec.current = (0, o.i)(eo, r3, M);
        }
        em.current?.(e3);
      }
    };
    (0, t.useEffect)(() => {
      null !== ea.current && e_(ea.current);
    });
    let ef = (e3) => {
      let a3 = el.current?.getBoundingClientRect();
      return a3 && 0 !== a3.width ? Math.round(
        Math.min(1, Math.max(0, (e3.clientX - a3.left) / a3.width)) * q
      ) : null;
    }, ex = (0, t.useRef)(null);
    (0, t.useEffect)(
      () => () => {
        ex.current && clearTimeout(ex.current);
      },
      []
    );
    let eb = (e3) => {
      ex.current && clearTimeout(ex.current), ex.current = setTimeout(() => {
        let a3 = eh.current;
        if (0 === a3.length) return;
        let r3 = a3[0], s2 = a3[0];
        for (let t3 of a3)
          (t3.values[e3] ?? 0) > (r3.values[e3] ?? 0) && (r3 = t3), (t3.values[e3] ?? 0) < (s2.values[e3] ?? 0) && (s2 = t3);
        let t2 = eu.current;
        Q(
          `${ed.current[e3]?.long ?? ""}. Highest ${r3.name} ${t2(r3.values[e3] ?? 0)}, lowest ${s2.name} ${t2(s2.values[e3] ?? 0)}.`
        );
      }, 220);
    }, ey = B(H / I), ev = 1 === I ? `With one band, each row is a plain area chart up to ${B(H)} from the ${m2}.` : `Each row folds into ${I} bands of ${ey}. Stronger color means further from the ${m2}.`, ew = { "--bands": Z, "--alpha": A(Z).toFixed(4) }, ej = a2[q];
    return (0, s.jsxs)("section", {
      ref: U,
      className: `${g().root} ${G2 ?? ""}`,
      style: ew,
      "aria-labelledby": `${W}-title`,
      children: [
        (0, s.jsxs)("header", {
          className: g().header,
          children: [
            (0, s.jsxs)("div", {
              className: g().heading,
              children: [
                (0, s.jsx)("h2", {
                  id: `${W}-title`,
                  className: g().title,
                  children: d2
                }),
                u2 ? (0, s.jsx)("p", { className: g().description, children: u2 }) : null
              ]
            }),
            (0, s.jsxs)("div", {
              className: g().controls,
              children: [
                (0, s.jsxs)("div", {
                  className: g().control,
                  children: [
                    (0, s.jsx)("span", {
                      className: g().controlLabel,
                      "aria-hidden": "true",
                      children: "Sort"
                    }),
                    (0, s.jsx)(h.A, {
                      className: g().segment,
                      label: "Sort rows",
                      options: E,
                      value: K,
                      onValueChange: (e3) => {
                        V(e3), Q(`Rows sorted ${L[e3]}.`), v2?.(e3);
                      }
                    })
                  ]
                }),
                (0, s.jsxs)("div", {
                  className: g().control,
                  children: [
                    (0, s.jsx)("span", {
                      className: g().controlLabel,
                      "aria-hidden": "true",
                      children: "Bands"
                    }),
                    (0, s.jsx)(h.A, {
                      className: g().segment,
                      label: "Band count",
                      options: R,
                      value: String(I),
                      onValueChange: (e3) => {
                        let a3 = Number(e3);
                        J(a3), Q(
                          `${1 === a3 ? "One band" : `${a3} bands`} of ${B(H / a3)}.`
                        ), j2?.(a3);
                      }
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: g().readout,
          children: [
            (0, s.jsxs)("p", {
              className: g().when,
              children: [
                (0, s.jsx)("span", {
                  ref: es,
                  className: g().date,
                  children: ej?.long ?? ""
                }),
                (0, s.jsx)("span", {
                  ref: et,
                  className: g().state,
                  children: "Latest day"
                })
              ]
            }),
            (0, s.jsxs)("div", {
              className: g().legend,
              children: [
                (0, s.jsxs)("div", {
                  className: g().scale,
                  role: "img",
                  "aria-label": `Color scale from ${B(H)} below to ${B(H)} above the ${m2}, in ${1 === I ? "one band" : `${I} bands`} per side.`,
                  children: [
                    (0, s.jsxs)("div", {
                      className: g().ramp,
                      children: [
                        [...S].reverse().map(
                          (e3) => (0, s.jsx)(
                            "span",
                            { className: g().swatchBelow, style: T(e3, I) },
                            `b${e3}`
                          )
                        ),
                        (0, s.jsx)("span", { className: g().zero }),
                        S.map(
                          (e3) => (0, s.jsx)(
                            "span",
                            { className: g().swatchAbove, style: T(e3, I) },
                            `a${e3}`
                          )
                        )
                      ]
                    }),
                    (0, s.jsxs)("div", {
                      className: g().scaleLabels,
                      "aria-hidden": "true",
                      children: [
                        (0, s.jsxs)("span", {
                          className: g().scaleEnd,
                          children: ["\u2212", B(H)]
                        }),
                        (0, s.jsx)("span", {
                          className: g().scaleSide,
                          children: "Below"
                        }),
                        (0, s.jsx)("span", {
                          className: g().scaleZero,
                          children: "0"
                        }),
                        (0, s.jsx)("span", {
                          className: g().scaleSide,
                          children: "Above"
                        }),
                        (0, s.jsxs)("span", {
                          className: g().scaleEnd,
                          children: ["+", B(H)]
                        })
                      ]
                    })
                  ]
                }),
                (0, s.jsx)("p", { className: g().caption, children: ev })
              ]
            })
          ]
        }),
        0 === X.length ? (0, s.jsx)("p", {
          className: g().empty,
          children: "No series to show yet. Add a series with daily values to draw its row."
        }) : (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className: g().chart,
              "data-chart": "",
              tabIndex: 0,
              role: "group",
              "aria-label": `${d2}. ${X.length} rows`,
              "aria-describedby": `${W}-hint`,
              onKeyDown: (e3) => {
                let a3, r3 = ea.current ?? q, s2 = e3.shiftKey ? 7 : 1;
                "ArrowLeft" === e3.key ? a3 = Math.max(0, r3 - s2) : "ArrowRight" === e3.key ? a3 = Math.min(q, r3 + s2) : "Home" === e3.key ? a3 = 0 : "End" === e3.key ? a3 = q : "Escape" === e3.key && (a3 = null), void 0 !== a3 && (e3.preventDefault(), ep(a3), null !== a3 && eb(a3));
              },
              onFocus: () => {
                null === ea.current && (ep(q), eb(q));
              },
              onBlur: () => ep(null),
              children: [
                (0, s.jsxs)("div", {
                  className: g().body,
                  children: [
                    (0, s.jsx)("ol", {
                      className: g().rows,
                      children: Y.map(
                        (e3) => (0, s.jsxs)(
                          c.PY1.li,
                          {
                            layout: "position",
                            transition: O ? $ : z,
                            className: g().row,
                            children: [
                              (0, s.jsx)("span", {
                                className: g().name,
                                title: e3.name,
                                children: e3.name
                              }),
                              (0, s.jsx)("span", {
                                className: g().plot,
                                children: (0, s.jsxs)("svg", {
                                  className: g().svg,
                                  viewBox: `0 0 ${Math.max(1, q)} 1`,
                                  preserveAspectRatio: "none",
                                  "aria-hidden": "true",
                                  focusable: "false",
                                  children: [
                                    S.map(
                                      (a3) => (0, s.jsx)(
                                        "path",
                                        {
                                          className: g().below,
                                          d: e3.below,
                                          style: { "--layer": a3 + 1 }
                                        },
                                        `b${a3}`
                                      )
                                    ),
                                    S.map(
                                      (a3) => (0, s.jsx)(
                                        "path",
                                        {
                                          className: g().above,
                                          d: e3.above,
                                          style: { "--layer": a3 + 1 }
                                        },
                                        `a${a3}`
                                      )
                                    )
                                  ]
                                })
                              }),
                              (0, s.jsx)("span", {
                                className: g().value,
                                ref: (a3) => {
                                  a3 ? er.current.set(e3.id, a3) : er.current.delete(e3.id);
                                },
                                children: y2(e3.latest)
                              })
                            ]
                          },
                          e3.id
                        )
                      )
                    }),
                    (0, s.jsxs)("div", {
                      className: g().overlay,
                      "aria-hidden": "true",
                      children: [
                        (0, s.jsx)("div", {
                          ref: en,
                          className: g().crossLayer,
                          children: (0, s.jsx)(c.PY1.span, {
                            className: g().crossTrack,
                            style: { x: ei },
                            children: (0, s.jsx)("span", {
                              className: g().crossLine
                            })
                          })
                        }),
                        (0, s.jsx)("div", {
                          ref: el,
                          className: g().hit,
                          onPointerDown: (e3) => {
                            ep(ef(e3));
                          },
                          onPointerMove: (e3) => {
                            ("mouse" === e3.pointerType || e3.buttons > 0) && ep(ef(e3));
                          },
                          onPointerLeave: (e3) => {
                            "mouse" === e3.pointerType && document.activeElement !== e3.currentTarget.closest("[data-chart]") && ep(null);
                          }
                        })
                      ]
                    })
                  ]
                }),
                (0, s.jsx)("div", {
                  className: g().axis,
                  "aria-hidden": "true",
                  children: (0, s.jsx)("span", {
                    className: g().axisTrack,
                    children: r2.filter((e3) => e3.index >= 0 && e3.index <= q).map(
                      (e3) => (0, s.jsx)(
                        "span",
                        {
                          className: g().tick,
                          style: {
                            left: `${0 === q ? 0 : e3.index / q * 100}%`
                          },
                          children: e3.label
                        },
                        `${e3.index}-${e3.label}`
                      )
                    )
                  })
                })
              ]
            }),
            (0, s.jsx)("p", {
              id: `${W}-hint`,
              className: g().srOnly,
              children: "Use the left and right arrow keys to move the crosshair by one day, Shift with an arrow for one week, Home and End for the first and last day, and Escape to clear it."
            }),
            (0, s.jsx)("div", {
              className: g().srOnly,
              children: (0, s.jsxs)("table", {
                children: [
                  (0, s.jsxs)("caption", {
                    children: [d2, ", values against the ", m2]
                  }),
                  (0, s.jsx)("thead", {
                    children: (0, s.jsxs)("tr", {
                      children: [
                        (0, s.jsx)("th", { scope: "col", children: "Row" }),
                        (0, s.jsx)("th", {
                          scope: "col",
                          children: "Latest"
                        }),
                        (0, s.jsx)("th", {
                          scope: "col",
                          children: "Highest"
                        }),
                        (0, s.jsx)("th", {
                          scope: "col",
                          children: "Lowest"
                        })
                      ]
                    })
                  }),
                  (0, s.jsx)("tbody", {
                    children: Y.map(
                      (e3) => (0, s.jsxs)(
                        "tr",
                        {
                          children: [
                            (0, s.jsx)("th", {
                              scope: "row",
                              children: e3.name
                            }),
                            (0, s.jsx)("td", { children: y2(e3.latest) }),
                            (0, s.jsxs)("td", {
                              children: [
                                y2(e3.high),
                                " on ",
                                a2[e3.highIndex]?.short
                              ]
                            }),
                            (0, s.jsxs)("td", {
                              children: [
                                y2(e3.low),
                                " on ",
                                a2[e3.lowIndex]?.short
                              ]
                            })
                          ]
                        },
                        e3.id
                      )
                    )
                  })
                ]
              })
            })
          ]
        }),
        (0, s.jsx)("p", {
          className: g().srOnly,
          role: "status",
          "aria-live": "polite",
          children: F
        })
      ]
    });
  }
  let G = D;
}

__m(__module,__exports,__require);
});
A.regCss(86280, ".root{--above:var(--series-1);--below:var(--series-3);--pad:24px;--name-width:116px;--value-width:52px;--column-gap:16px;--row-height:36px;--plot-height:28px;position:relative;box-sizing:border-box;width:min(100%,1180px);min-width:0;margin-inline:auto;overflow:hidden;container-type:inline-size;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root *,.root :after,.root :before{box-sizing:border-box}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}\n.empty{margin:0;padding:24px var(--pad);color:var(--text-secondary)}\n@container (min-width: 900px){.chart,.empty,.header,.readout{--name-width:132px;--value-width:60px;--column-gap:20px}\n@container (max-width: 560px){.chart,.empty,.header,.readout{--pad:16px;--name-width:84px;--value-width:44px;--column-gap:10px;--row-height:34px;--plot-height:26px}\n.header{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:16px 24px;padding:20px var(--pad) 0}\n.header{padding-top:16px}\n.heading{flex:1 1 260px;min-width:0}\n.title{margin:0;font-size:var(--text-base);font-weight:500;line-height:var(--leading-body)}\n.description{margin:2px 0 0;color:var(--text-muted);font-size:var(--text-xs)}\n.controls{display:flex;flex-wrap:wrap;align-items:center;gap:8px 16px;min-width:0}\n.controls{width:100%;justify-content:space-between}\n@media (pointer:coarse){.controls button{min-height:var(--control-height-md)}\n.control{display:flex;align-items:center;gap:8px;min-width:0}\n.controlLabel{color:var(--text-muted);font-size:var(--text-xs);white-space:nowrap}\n.segment{min-width:0}\n.readout{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:12px 32px;padding:20px var(--pad) 16px;border-bottom:1px solid var(--border-subtle)}\n.readout{padding-top:16px;padding-bottom:14px}\n.when{display:flex;flex-direction:column;gap:0;min-width:0;margin:0}\n.date{min-width:12em;font-size:var(--text-lg);font-weight:500;font-variant-numeric:tabular-nums;white-space:nowrap}\n.date{min-width:0;font-size:var(--text-base)}\n.state{color:var(--text-muted);font-size:var(--text-xs)}\n.legend{display:grid;gap:8px;width:300px;max-width:100%}\n.legend{width:100%}\n.scale{display:grid;gap:4px}\n.ramp{display:flex;align-items:stretch;height:10px}\n.swatchAbove,.swatchBelow{position:relative;flex:var(--grow,1) 1 0;min-width:0;transition:flex-grow var(--duration-considered) var(--ease-in-out),opacity var(--duration-considered) var(--ease-in-out)}\n.swatchAbove:before,.swatchBelow:before{content:\"\";position:absolute;inset:0 1px;border-radius:2px}\n.swatchAbove:before{background:var(--above)}\n@media (prefers-reduced-motion:reduce){.crossLayer,.swatchAbove,.swatchBelow{transition:none}\n.swatchBelow:before{background:var(--below)}\n.zero{flex:0 0 1px;margin:-2px 3px;background:var(--foreground);opacity:.5}\n.scaleLabels{display:grid;grid-template-columns:auto 1fr auto 1fr auto;align-items:baseline;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.scaleSide{text-align:center}\n.scaleZero{color:var(--text-secondary)}\n.scaleEnd:last-child{text-align:right}\n.caption{min-height:calc(2em * 1.4);margin:0;color:var(--text-secondary);font-size:var(--text-xs);line-height:1.4;text-wrap:pretty}\n.chart{position:relative;min-width:0;padding:8px 0 16px;-webkit-tap-highlight-color:transparent}\n.body{position:relative}\n.rows{margin:0;padding:0;list-style:none}\n.row{display:grid;grid-template-columns:var(--name-width) minmax(0,1fr) var(--value-width);column-gap:var(--column-gap);align-items:center;height:var(--row-height);padding:0 var(--pad);background:var(--surface);box-shadow:inset 0 -1px 0 var(--border-subtle)}\n.row:last-child{box-shadow:none}\n.name{min-width:0;overflow:hidden;color:var(--text-secondary);text-overflow:ellipsis;white-space:nowrap}\n.name,.value{font-size:var(--text-xs)}\n.value{color:var(--foreground);font-variant-numeric:tabular-nums;text-align:right;white-space:nowrap}\n.plot{position:relative;display:block;height:var(--plot-height);overflow:hidden;border-radius:4px;background:var(--surface-muted)}\n.svg{position:absolute;inset:0;display:block;width:100%;height:100%}\n.above,.below{transform-box:view-box;transform-origin:0 0;transform:translateY(calc(var(--layer) * 1px)) scaleY(var(--bands));fill-opacity:var(--alpha)}\n.above{fill:var(--above)}\n.below{fill:var(--below)}\n.overlay{position:absolute;top:0;bottom:0;left:calc(var(--pad) + var(--name-width) + var(--column-gap));right:calc(var(--pad) + var(--value-width) + var(--column-gap))}\n.crossLayer{position:absolute;inset:-6px 0;pointer-events:none;opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}\n.crossLayer[data-on]{opacity:1}\n.crossTrack{position:absolute;inset:0;display:block;will-change:transform}\n.crossLine{position:absolute;top:0;bottom:0;left:-.5px;width:1px;background:var(--foreground);opacity:.55}\n.hit{position:absolute;inset:0;cursor:crosshair;touch-action:pan-y}\n.hit{cursor:default}\n.axis{display:grid;grid-template-columns:var(--name-width) minmax(0,1fr) var(--value-width);column-gap:var(--column-gap);padding:10px var(--pad) 0}\n.axisTrack{position:relative;grid-column:2;height:16px}\n.tick{position:absolute;top:0;padding-left:4px;border-left:1px solid var(--border);color:var(--text-muted);font-size:var(--text-xs);line-height:16px;white-space:nowrap}", {"root":"root","srOnly":"srOnly","empty":"empty","chart":"chart","header":"header","readout":"readout","heading":"heading","title":"title","description":"description","controls":"controls","control":"control","controlLabel":"controlLabel","segment":"segment","when":"when","date":"date","state":"state","legend":"legend","scale":"scale","ramp":"ramp","swatchAbove":"swatchAbove","swatchBelow":"swatchBelow","crossLayer":"crossLayer","zero":"zero","scaleLabels":"scaleLabels","scaleSide":"scaleSide","scaleZero":"scaleZero","scaleEnd":"scaleEnd","caption":"caption","body":"body","rows":"rows","row":"row","name":"name","value":"value","plot":"plot","svg":"svg","above":"above","below":"below","overlay":"overlay","crossTrack":"crossTrack","crossLine":"crossLine","hit":"hit","axis":"axis","axisTrack":"axisTrack","tick":"tick"});
A.cssFor("horizon-chart", [86280]);
A.item("horizon-chart", {entry:58253, export:"HorizonChart", kind:"block", tier:"pro", unresolved:[]});
})();