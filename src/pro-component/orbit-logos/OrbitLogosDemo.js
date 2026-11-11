function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { OrbitLogosDemo: () => S, default: () => I });
  var o = a(95155), r = a(12115), s = a(18310), n = a(57700), i = a(25354), l = a(80642), c = a(92171), d = a(64577), h = a(9751), u = a(78780), g = a(76721), m = a(9005), p = a(7770), b = a(58774), _ = a.n(b);
  let y = () => () => {
  }, f = [64, 88], x = 2 * Math.PI, v = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), N = (e2) => Math.atan2(Math.sin(e2), Math.cos(e2));
  function j({ logo: e2, className: t2 }) {
    let { icon: a2, color: r2 } = e2;
    if ("string" == typeof a2)
      return /^(\/|\.|https?:|data:|blob:)/.test(a2) ? (0, o.jsx)("img", { className: t2, src: a2, alt: "", draggable: false }) : (0, o.jsx)("svg", {
        className: t2,
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        children: (0, o.jsx)("path", { d: a2, fill: r2 ?? "currentColor" })
      });
    return (0, o.jsx)("span", {
      className: t2,
      style: r2 ? { color: r2 } : void 0,
      "aria-hidden": "true",
      children: a2
    });
  }
  let k = () => (0, o.jsxs)("svg", {
    viewBox: "0 0 32 32",
    width: "46%",
    height: "46%",
    "aria-hidden": "true",
    children: [
      (0, o.jsx)("circle", {
        cx: "16",
        cy: "16",
        r: "5",
        fill: "currentColor"
      }),
      (0, o.jsx)("circle", {
        cx: "16",
        cy: "16",
        r: "11.5",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.75",
        strokeDasharray: "4 3.2"
      })
    ]
  });
  function M({
    logos: e2,
    center: t2,
    onSelect: a2,
    onConnect: c2,
    defaultSelected: d2 = null,
    selected: h2,
    speed: u2 = 1,
    paused: g2 = false,
    allLabel: m2 = "All",
    label: b2 = "Integrations",
    className: C2,
    style: T2
  }) {
    let A2, P2 = (A2 = (0, r.useSyncExternalStore)(
      y,
      () => true,
      () => false
    ), !!(0, s.I)() && A2), S2 = (0, r.useId)(), I2 = (0, r.useRef)(null), F = (0, r.useRef)([]), L = (0, r.useRef)(null), [D, H] = (0, r.useState)(0), [E, $] = (0, r.useState)(null), [R, B] = (0, r.useState)(d2), V = void 0 !== h2 ? h2 : R, z = null == V ? -1 : e2.findIndex((e3) => (e3.id ?? e3.name) === V), [O, W] = (0, r.useState)(0), [Y, q] = (0, r.useState)(false), [G, K] = (0, r.useState)(false), [U, X] = (0, r.useState)({}), [J, Q] = (0, r.useState)(0), Z = (0, r.useCallback)(
      (e3) => U[e3.id ?? e3.name] ?? (e3.connected ? "connected" : "idle"),
      [U]
    ), ee = (0, r.useMemo)(() => {
      let t3 = [];
      for (let a3 of e2)
        a3.category && !t3.includes(a3.category) && t3.push(a3.category);
      return t3;
    }, [e2]), et = (0, r.useCallback)((e3) => null === E || e3.category === E, [E]), ea = (0, r.useMemo)(
      () => e2.map((e3, t3) => et(e3) ? t3 : -1).filter((e3) => e3 >= 0),
      [e2, et]
    ), eo = D >= 760, er = eo ? 0 : Math.PI / 2, es = (0, r.useMemo)(() => {
      let t3 = Math.max(
        0,
        Math.floor(eo ? Math.min(520, D - 352 - 48) : Math.min(D, 460))
      ), a3 = Math.round(v(0.112 * t3, 40, 56)), o2 = Math.round(1.5 * a3), r2 = t3 / 2 - a3 / 2 - 2, s2 = Math.min(r2 - a3 - 8, Math.max(o2 / 2 + a3 / 2 + 20, 0.57 * r2)), n2 = (e3) => Math.max(1, Math.floor(x * e3 / (a3 + 14))), i2 = e2.length, l2 = i2 < 2 ? i2 : v(Math.round(i2 * s2 / (s2 + r2)), 1, n2(s2)), c3 = [l2 = Math.max(l2, i2 - n2(r2)), i2 - l2];
      return {
        size: t3,
        tile: a3,
        core: o2,
        radii: [s2, r2],
        slots: e2.map((e3, t4) => {
          let a4 = t4 < l2 ? 0 : 1, o3 = a4 ? t4 - l2 : t4, r3 = c3[a4];
          return {
            ring: a4,
            base: -Math.PI / 2 + (a4 ? Math.PI / r3 : 0) + o3 / Math.max(1, r3) * x
          };
        }),
        c: t3 / 2
      };
    }, [D, eo, e2]), en = (0, r.useRef)({
      theta: [0, 0],
      vel: [0, 0],
      goal: [NaN, NaN],
      rate: 0,
      rateV: 0,
      reach: 0,
      reachV: 0,
      linkTo: -1,
      frame: 0,
      running: false,
      visible: true
    }), ei = g2 || P2 || 0 === u2 || Y || G || z >= 0 || null !== E, el = (0, r.useRef)({
      geometry: es,
      hold: ei,
      speed: u2,
      reduced: P2,
      selectedIndex: z
    });
    (0, r.useLayoutEffect)(() => {
      el.current = {
        geometry: es,
        hold: ei,
        speed: u2,
        reduced: P2,
        selectedIndex: z
      };
    });
    let ec = (0, r.useCallback)(() => {
      let e3 = en.current, { geometry: t3 } = el.current;
      if (!t3.size) return;
      let a3 = 0, o2 = 0;
      t3.slots.forEach((r3, s2) => {
        let n2 = F.current[s2], i2 = r3.base + e3.theta[r3.ring], l2 = t3.radii[r3.ring], c3 = t3.c + l2 * Math.cos(i2), d3 = t3.c + l2 * Math.sin(i2);
        if (n2) {
          n2.style.transform = `translate3d(${(c3 - t3.tile / 2).toFixed(2)}px, ${(d3 - t3.tile / 2).toFixed(2)}px, 0)`;
          let e4 = 0 > Math.sin(i2) ? "above" : "below";
          n2.dataset.tag !== e4 && (n2.dataset.tag = e4);
        }
        s2 === e3.linkTo && (a3 = c3, o2 = d3);
      });
      let r2 = L.current;
      if (r2) {
        let s2 = a3 - t3.c, n2 = o2 - t3.c, i2 = Math.hypot(s2, n2) || 1, l2 = t3.core / 2 + 6, c3 = i2 - t3.tile / 2 - 6, d3 = v(e3.reach, 0, 1.08), h3 = e3.linkTo >= 0 && c3 > l2 && d3 > 2e-3;
        if (r2.style.opacity = h3 ? v(1.6 * e3.reach, 0, 1).toFixed(3) : "0", h3) {
          let e4 = s2 / i2, a4 = n2 / i2, o3 = l2 + (c3 - l2) * d3;
          r2.setAttribute("x1", (t3.c + e4 * l2).toFixed(2)), r2.setAttribute("y1", (t3.c + a4 * l2).toFixed(2)), r2.setAttribute("x2", (t3.c + e4 * o3).toFixed(2)), r2.setAttribute("y2", (t3.c + a4 * o3).toFixed(2));
        }
      }
    }, []), ed = (0, r.useCallback)(() => {
      let e3 = en.current;
      if (e3.running || !e3.visible) return;
      e3.running = true;
      let t3 = performance.now(), a3 = (o2) => {
        let r2 = v((o2 - t3) / 1e3, 0, 0.05);
        t3 = o2;
        let {
          hold: s2,
          speed: n2,
          reduced: i2,
          selectedIndex: l2
        } = el.current, c3 = s2 ? 0 : n2;
        e3.rateV += (60 * (c3 - e3.rate) - 2 * Math.sqrt(60) * e3.rateV) * r2, e3.rate += e3.rateV * r2;
        let d3 = Math.abs(c3 - e3.rate) > 5e-4 || Math.abs(e3.rateV) > 5e-4 || Math.abs(e3.rate) > 5e-4;
        for (let t4 = 0; t4 < 2; t4++) {
          let a4 = e3.goal[t4];
          Number.isNaN(a4) ? (e3.vel[t4] = 0, e3.theta[t4] += x / f[t4] * e3.rate * r2) : i2 ? (e3.theta[t4] = a4, e3.vel[t4] = 0) : (e3.vel[t4] += (120 * (a4 - e3.theta[t4]) - 17 * e3.vel[t4]) * r2, e3.theta[t4] += e3.vel[t4] * r2, Math.abs(a4 - e3.theta[t4]) > 4e-4 || Math.abs(e3.vel[t4]) > 4e-4 ? d3 = true : (e3.theta[t4] = a4, e3.vel[t4] = 0));
        }
        l2 >= 0 && (i2 || e3.linkTo < 0 || e3.reach < 0.04) && (e3.linkTo = l2);
        let h3 = +(l2 >= 0 && l2 === e3.linkTo);
        if (i2 ? (e3.reach = h3, e3.reachV = 0, e3.rate = 0, e3.rateV = 0) : (e3.reachV += (200 * (h3 - e3.reach) - 24 * e3.reachV) * r2, e3.reach += e3.reachV * r2), (Math.abs(h3 - e3.reach) > 2e-3 || Math.abs(e3.reachV) > 2e-3 || l2 >= 0 && l2 !== e3.linkTo) && (d3 = true), l2 < 0 && e3.reach < 2e-3 && (e3.linkTo = -1), i2 && (d3 = false), ec(), !d3 || !e3.visible) {
          e3.running = false;
          return;
        }
        e3.frame = requestAnimationFrame(a3);
      };
      e3.frame = requestAnimationFrame(a3);
    }, [ec]);
    (0, r.useLayoutEffect)(() => {
      let e3 = I2.current;
      if (!e3) return;
      let t3 = () => H(e3.clientWidth);
      t3();
      let a3 = new ResizeObserver(t3);
      return a3.observe(e3), () => a3.disconnect();
    }, []), (0, r.useLayoutEffect)(() => {
      let t3 = en.current, { slots: a3 } = es, o2 = (o3) => {
        if (z >= 0 && a3[z]) {
          let e3 = a3[z];
          if (e3.ring === o3)
            return t3.theta[o3] + N(er - (e3.base + t3.theta[o3]));
          if (0 === o3 && 1 === e3.ring) {
            let e4 = a3.filter((e5) => 0 === e5.ring), o4 = (es.tile + 10) / es.radii[0], r3 = NaN, s3 = 1 / 0;
            for (let a4 of e4) {
              let e5 = N(a4.base + t3.theta[0] - er);
              Math.abs(e5) < Math.abs(s3) && (s3 = e5, r3 = a4.base + t3.theta[0]);
            }
            if (!Number.isNaN(r3) && Math.abs(s3) < o4) {
              let a4 = e4.length > 1 ? Math.PI / e4.length : Math.PI;
              return t3.theta[0] + N(er + (s3 >= 0 ? a4 : -a4) - r3);
            }
          }
        }
        if (null === E) return NaN;
        let r2 = 0, s2 = 0;
        return (a3.forEach((a4, n2) => {
          a4.ring === o3 && e2[n2]?.category === E && (r2 += Math.cos(a4.base + t3.theta[o3]), s2 += Math.sin(a4.base + t3.theta[o3]));
        }), 1e-3 > Math.hypot(r2, s2)) ? NaN : t3.theta[o3] + N(er - Math.atan2(s2, r2));
      };
      t3.goal = [o2(0), o2(1)];
    }, [z, E, es, er, e2]), (0, r.useLayoutEffect)(() => {
      ec(), ed();
    }, [es, ei, u2, P2, z, E, er, ec, ed]), (0, r.useEffect)(() => {
      let e3 = I2.current, t3 = en.current;
      if (!e3) return;
      let a3 = new IntersectionObserver(([e4]) => {
        t3.visible = e4.isIntersecting && !document.hidden, t3.visible ? ed() : (cancelAnimationFrame(t3.frame), t3.running = false);
      }), o2 = () => {
        t3.visible = !document.hidden, t3.visible && ed();
      };
      return a3.observe(e3), document.addEventListener("visibilitychange", o2), () => {
        a3.disconnect(), document.removeEventListener("visibilitychange", o2), cancelAnimationFrame(t3.frame), t3.running = false;
      };
    }, [ed]);
    let eh = (0, r.useCallback)(
      (t3, o2 = 0) => {
        let r2 = t3 >= 0 ? e2[t3] : void 0, s2 = r2 ? r2.id ?? r2.name : null;
        Q(o2), void 0 === h2 && B(s2), t3 >= 0 && W(t3), a2?.(r2 ?? null, r2 ? t3 : -1);
      },
      [e2, a2, h2]
    ), eu = (0, r.useCallback)(
      (e3, t3) => ea.length ? t3 > 0 ? ea.find((t4) => t4 > e3) ?? ea[0] : [...ea].reverse().find((t4) => t4 < e3) ?? ea[ea.length - 1] : e3,
      [ea]
    ), eg = (0, r.useCallback)(
      (e3) => {
        let t3 = eu(z, e3);
        t3 !== z && eh(t3, e3);
      },
      [eu, z, eh]
    ), em = async (t3) => {
      let a3 = e2[t3];
      if (!a3) return;
      let o2 = a3.id ?? a3.name;
      X((e3) => ({ ...e3, [o2]: "connecting" }));
      try {
        let e3 = c2?.(a3, t3);
        await (e3 instanceof Promise ? e3 : new Promise((e4) => setTimeout(e4, 1400))), X((e4) => ({ ...e4, [o2]: "connected" }));
      } catch {
        X((e3) => ({ ...e3, [o2]: "failed" }));
      }
    }, ep = ea.includes(O) ? O : ea[0] ?? 0, eb = e2.filter((e3) => "connected" === Z(e3)).length, e_ = null === E ? e2 : e2.filter((e3) => e3.category === E), ey = e2[z], { size: ef, tile: ex, core: ev, radii: eN, c: ej } = es, ek = ey ? es.slots[z]?.ring : void 0, eM = ey ? `${ey.name} open${ey.description ? `, ${ey.description}` : ""}` : E ? `${e_.length} in ${E}` : "";
    return (0, o.jsxs)("div", {
      ref: I2,
      className: [_().root, C2].filter(Boolean).join(" "),
      "data-layout": eo ? "wide" : "stack",
      "data-ready": D > 0 || void 0,
      style: T2,
      onPointerEnter: (e3) => {
        "mouse" === e3.pointerType && q(true);
      },
      onPointerLeave: () => q(false),
      onFocus: () => K(true),
      onBlur: (e3) => {
        e3.currentTarget.contains(e3.relatedTarget) || K(false);
      },
      children: [
        ee.length > 0 && (0, o.jsx)(n.o, {
          id: `${S2}-categories`,
          children: (0, o.jsx)("div", {
            className: _().categories,
            role: "toolbar",
            "aria-label": "Filter by category",
            children: [null, ...ee].map((t3) => {
              let a3 = E === t3;
              return (0, o.jsxs)(
                "button",
                {
                  type: "button",
                  className: _().category,
                  "aria-pressed": a3,
                  "data-on": a3 || void 0,
                  onClick: () => {
                    let a4, o2;
                    return $(t3), (a4 = e2[z]) && null !== t3 && a4.category !== t3 && eh(-1), void ((o2 = e2.findIndex(
                      (e3) => null === t3 || e3.category === t3
                    )) >= 0 && W(o2));
                  },
                  children: [
                    a3 && (0, o.jsx)(i.PY1.span, {
                      layoutId: "pill",
                      className: _().pill,
                      transition: P2 ? { duration: 0 } : p.T.spring.morph
                    }),
                    (0, o.jsx)("span", {
                      className: _().categoryLabel,
                      children: t3 ?? m2
                    })
                  ]
                },
                t3 ?? "all"
              );
            })
          })
        }),
        (0, o.jsxs)("div", {
          className: _().body,
          children: [
            (0, o.jsxs)("div", {
              className: _().stage,
              style: {
                width: ef || void 0,
                height: ef || void 0,
                "--tile": `${ex}px`,
                "--core": `${ev}px`
              },
              children: [
                ef > 0 && (0, o.jsxs)("svg", {
                  className: _().rings,
                  width: ef,
                  height: ef,
                  "aria-hidden": "true",
                  children: [
                    eN.map(
                      (e3, t3) => (0, o.jsx)(
                        "circle",
                        {
                          cx: ej,
                          cy: ej,
                          r: e3,
                          "data-active": ek === t3 || void 0
                        },
                        t3
                      )
                    ),
                    (0, o.jsx)("line", {
                      ref: L,
                      className: _().connector,
                      x1: ej,
                      y1: ej,
                      x2: ej,
                      y2: ej
                    })
                  ]
                }),
                (0, o.jsx)("div", {
                  className: _().core,
                  "data-active": !!ey || void 0,
                  style: { left: ej - ev / 2, top: ej - ev / 2 },
                  children: t2 ?? (0, o.jsx)(k, {})
                }),
                (0, o.jsx)("ul", {
                  className: _().list,
                  "aria-label": b2,
                  children: e2.map((e3, t3) => {
                    let a3 = Z(e3);
                    return (0, o.jsx)(
                      "li",
                      {
                        className: _().slot,
                        children: (0, o.jsxs)("button", {
                          ref: (e4) => {
                            F.current[t3] = e4;
                          },
                          type: "button",
                          className: _().chip,
                          tabIndex: t3 === ep ? 0 : -1,
                          "aria-pressed": t3 === z,
                          "aria-label": `${e3.name}${e3.category ? `, ${e3.category}` : ""}${"connected" === a3 ? ", connected" : ""}`,
                          "data-selected": t3 === z || void 0,
                          "data-dim": !et(e3) && t3 !== z || void 0,
                          "data-match": null !== E && et(e3) || void 0,
                          "data-hidden": 0 === ef || void 0,
                          onClick: () => eh(t3 === z ? -1 : t3, 0),
                          onFocus: () => W(t3),
                          onKeyDown: (e4) => ((e5, t4) => {
                            let a4 = -1;
                            if ("ArrowRight" === e5.key || "ArrowDown" === e5.key)
                              a4 = eu(t4, 1);
                            else if ("ArrowLeft" === e5.key || "ArrowUp" === e5.key)
                              a4 = eu(t4, -1);
                            else if ("Home" === e5.key) a4 = ea[0] ?? -1;
                            else if ("End" === e5.key)
                              a4 = ea[ea.length - 1] ?? -1;
                            else if ("Escape" === e5.key && z >= 0) {
                              e5.preventDefault(), eh(-1);
                              return;
                            }
                            !(a4 < 0) && (e5.preventDefault(), W(a4), F.current[a4]?.focus(), z >= 0 && eh(
                              a4,
                              "ArrowLeft" === e5.key || "ArrowUp" === e5.key || "Home" === e5.key ? -1 : 1
                            ));
                          })(e4, t3),
                          children: [
                            (0, o.jsxs)("span", {
                              className: _().face,
                              children: [
                                (0, o.jsx)(j, { logo: e3, className: _().mark }),
                                "connected" === a3 && (0, o.jsx)("span", {
                                  className: _().dot,
                                  "aria-hidden": "true"
                                })
                              ]
                            }),
                            (0, o.jsx)("span", {
                              className: _().tag,
                              "aria-hidden": "true",
                              children: e3.name
                            })
                          ]
                        })
                      },
                      e3.id ?? e3.name
                    );
                  })
                })
              ]
            }),
            (0, o.jsx)("div", {
              className: _().panel,
              children: (0, o.jsx)(l.N, {
                initial: false,
                children: ey ? (0, o.jsx)(
                  w,
                  {
                    logo: ey,
                    index: z,
                    status: Z(ey),
                    step: J,
                    reduced: P2,
                    origin: F,
                    onPrev: () => eg(-1),
                    onNext: () => eg(1),
                    canStep: ea.length > 1 || !ea.includes(z),
                    onClose: () => {
                      eh(-1), z >= 0 && F.current[z]?.focus();
                    },
                    onConnect: () => em(z)
                  },
                  "card"
                ) : (0, o.jsxs)(
                  i.PY1.div,
                  {
                    className: _().idle,
                    initial: { opacity: 0 },
                    animate: {
                      opacity: 1,
                      transition: {
                        duration: p.T.duration.standard,
                        delay: 0.08 * !P2
                      }
                    },
                    exit: {
                      opacity: 0,
                      transition: { duration: P2 ? 0 : p.T.duration.fast }
                    },
                    children: [
                      (0, o.jsx)("p", {
                        className: _().idleTitle,
                        children: E ?? b2
                      }),
                      (0, o.jsxs)("p", {
                        className: _().idleMeta,
                        children: [
                          (0, o.jsx)("span", {
                            className: _().num,
                            children: e_.length
                          }),
                          " ",
                          1 === e_.length ? "integration" : "integrations",
                          ", ",
                          (0, o.jsx)("span", {
                            className: _().num,
                            children: e_.filter((e3) => "connected" === Z(e3)).length
                          }),
                          " connected"
                        ]
                      }),
                      (0, o.jsxs)("p", {
                        className: _().idleHint,
                        children: [
                          "Pick a logo to see what it does and connect it.",
                          (0, o.jsx)("span", {
                            className: _().keysHint,
                            children: " Arrow keys step through them."
                          })
                        ]
                      }),
                      (0, o.jsxs)("span", {
                        className: _().srOnly,
                        children: [
                          eb,
                          " of ",
                          e2.length,
                          " connected in total"
                        ]
                      })
                    ]
                  },
                  "idle"
                )
              })
            })
          ]
        }),
        (0, o.jsx)("p", {
          className: _().srOnly,
          "aria-live": "polite",
          children: eM
        })
      ]
    });
  }
  function w({
    logo: e2,
    index: t2,
    status: a2,
    step: s2,
    reduced: n2,
    origin: b2,
    canStep: y2,
    onPrev: f2,
    onNext: x2,
    onClose: v2,
    onConnect: N2
  }) {
    let k2 = (0, r.useRef)(null), M2 = (0, r.useRef)(null), C2 = (0, r.useRef)(t2);
    (0, r.useLayoutEffect)(() => {
      let e3 = k2.current, t3 = M2.current, a3 = b2.current?.[C2.current];
      if (!e3 || !t3 || !a3 || n2) return;
      let o2 = a3.getBoundingClientRect(), r2 = e3.getBoundingClientRect();
      if (!r2.width || !r2.height) return;
      let s3 = (0, c.i)(
        e3,
        {
          x: [o2.left - r2.left, 0],
          y: [o2.top - r2.top, 0],
          scaleX: [o2.width / r2.width, 1],
          scaleY: [o2.height / r2.height, 1],
          borderRadius: [
            `${r2.width / 2}px / ${r2.height / 2}px`,
            "22px / 22px"
          ],
          opacity: [0.4, 1]
        },
        { ...p.T.spring.morph, opacity: { duration: p.T.duration.fast } }
      ), i2 = (0, c.i)(
        t3,
        { opacity: [0, 1] },
        {
          duration: p.T.duration.standard,
          ease: [...p.T.ease.enter],
          delay: 0.14
        }
      );
      return () => {
        s3.stop(), i2.stop();
      };
    }, [b2, n2]);
    let T2 = e2.id ?? e2.name;
    return (0, o.jsxs)(i.PY1.div, {
      className: _().card,
      role: "region",
      "aria-label": `${e2.name} details`,
      exit: {
        opacity: 0,
        scale: 0.97,
        transition: n2 ? { duration: 0 } : { duration: p.T.duration.exit, ease: [...p.T.ease.standard] }
      },
      onKeyDown: (e3) => {
        "Escape" === e3.key && (e3.preventDefault(), v2());
      },
      children: [
        (0, o.jsx)("span", {
          ref: k2,
          className: _().cardShell,
          "aria-hidden": "true"
        }),
        (0, o.jsxs)("div", {
          ref: M2,
          className: _().cardBody,
          children: [
            (0, o.jsx)(l.N, {
              mode: "popLayout",
              initial: false,
              custom: s2,
              children: (0, o.jsxs)(
                i.PY1.div,
                {
                  className: _().cardContent,
                  custom: s2,
                  variants: {
                    enter: (e3) => ({ opacity: 0, x: n2 ? 0 : 16 * e3 }),
                    center: { opacity: 1, x: 0 },
                    leave: (e3) => ({ opacity: 0, x: n2 ? 0 : -16 * e3 })
                  },
                  initial: "enter",
                  animate: "center",
                  exit: "leave",
                  transition: n2 ? { duration: 0 } : {
                    ...p.T.spring.smooth,
                    opacity: {
                      duration: p.T.duration.standard,
                      delay: 0.1 * (0 === s2)
                    }
                  },
                  children: [
                    (0, o.jsxs)("div", {
                      className: _().cardHead,
                      children: [
                        (0, o.jsx)("span", {
                          className: _().cardMark,
                          children: (0, o.jsx)(j, {
                            logo: e2,
                            className: _().mark
                          })
                        }),
                        (0, o.jsxs)("div", {
                          className: _().cardTitle,
                          children: [
                            (0, o.jsx)("p", {
                              className: _().cardName,
                              children: e2.name
                            }),
                            e2.category && (0, o.jsx)("p", {
                              className: _().cardCategory,
                              children: e2.category
                            })
                          ]
                        })
                      ]
                    }),
                    (0, o.jsx)("p", {
                      className: _().cardText,
                      children: e2.description ?? "Connects to your workspace."
                    }),
                    (0, o.jsxs)("div", {
                      className: _().cardFoot,
                      children: [
                        (0, o.jsxs)("span", {
                          className: _().status,
                          "data-status": a2,
                          children: [
                            "connected" === a2 ? (0, o.jsx)(d.A, {
                              className: _().statusIcon,
                              size: 14,
                              strokeWidth: 2,
                              "aria-hidden": "true"
                            }) : (0, o.jsx)("span", {
                              className: _().statusDot,
                              "aria-hidden": "true"
                            }),
                            "connected" === a2 ? "Connected" : "connecting" === a2 ? "Connecting" : "failed" === a2 ? "Couldn't connect" : "Not connected"
                          ]
                        }),
                        (0, o.jsxs)("span", {
                          className: _().actions,
                          children: [
                            e2.href && (0, o.jsxs)("a", {
                              className: _().docs,
                              href: e2.href,
                              target: "_blank",
                              rel: "noreferrer noopener",
                              children: [
                                "Docs",
                                (0, o.jsx)(h.A, {
                                  size: 14,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                })
                              ]
                            }),
                            "connected" !== a2 && (0, o.jsx)("button", {
                              type: "button",
                              className: _().connect,
                              disabled: "connecting" === a2,
                              onClick: N2,
                              children: (0, o.jsx)(l.N, {
                                mode: "popLayout",
                                initial: false,
                                children: (0, o.jsx)(
                                  i.PY1.span,
                                  {
                                    className: _().connectLabel,
                                    initial: { opacity: 0, y: 6 * !n2 },
                                    animate: { opacity: 1, y: 0 },
                                    exit: { opacity: 0, y: n2 ? 0 : -6 },
                                    transition: n2 ? { duration: 0 } : p.T.spring.snappy,
                                    children: "connecting" === a2 ? (0, o.jsxs)(o.Fragment, {
                                      children: [
                                        (0, o.jsx)("span", {
                                          className: _().spinner,
                                          "aria-hidden": "true"
                                        }),
                                        (0, o.jsx)("span", {
                                          className: _().srOnly,
                                          children: "Connecting"
                                        })
                                      ]
                                    }) : "failed" === a2 ? "Try again" : "Connect"
                                  },
                                  "connecting" === a2 ? "busy" : "idle"
                                )
                              })
                            })
                          ]
                        })
                      ]
                    })
                  ]
                },
                T2
              )
            }),
            (0, o.jsxs)("div", {
              className: _().cardNav,
              children: [
                (0, o.jsx)("button", {
                  type: "button",
                  className: _().iconButton,
                  "aria-label": "Previous integration",
                  disabled: !y2,
                  onClick: f2,
                  children: (0, o.jsx)(u.A, { size: 16, strokeWidth: 1.75 })
                }),
                (0, o.jsx)("button", {
                  type: "button",
                  className: _().iconButton,
                  "aria-label": "Next integration",
                  disabled: !y2,
                  onClick: x2,
                  children: (0, o.jsx)(g.A, { size: 16, strokeWidth: 1.75 })
                }),
                (0, o.jsx)("button", {
                  type: "button",
                  className: _().iconButton,
                  "aria-label": "Close",
                  onClick: v2,
                  children: (0, o.jsx)(m.A, { size: 16, strokeWidth: 1.75 })
                })
              ]
            })
          ]
        })
      ]
    });
  }
  var C = a(31413), T = a.n(C);
  let A = (e2) => `block-logos/${e2}-color.svg`, P = [
    {
      name: "Stripe",
      icon: A("stripe"),
      category: "Payments",
      description: "Starts trials and bills usage from your plans",
      href: "https://docs.stripe.com"
    },
    {
      name: "GitHub",
      icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
      category: "Dev",
      description: "Opens pull requests from approved reviews",
      href: "https://docs.github.com",
      connected: true
    },
    {
      name: "Slack",
      icon: A("slack"),
      category: "Comms",
      description: "Posts deploy alerts to the right channels",
      href: "https://api.slack.com",
      connected: true
    },
    {
      name: "Figma",
      icon: A("figma"),
      category: "Design",
      description: "Links frames to the tickets they belong to",
      href: "https://www.figma.com/developers",
      connected: true
    },
    {
      name: "Google Drive",
      icon: A("googledrive"),
      category: "Storage",
      description: "Attaches shared files to records",
      href: "https://developers.google.com/drive"
    },
    {
      name: "Linear",
      icon: A("linear"),
      category: "Dev",
      description: "Syncs issues and status both ways",
      href: "https://linear.app/developers"
    },
    {
      name: "Shopify",
      icon: A("shopify"),
      category: "Payments",
      description: "Imports orders and refunds as they happen",
      href: "https://shopify.dev"
    },
    {
      name: "Discord",
      icon: A("discord"),
      category: "Comms",
      description: "Answers your community from one inbox",
      href: "https://discord.com/developers/docs"
    },
    {
      name: "Vercel",
      icon: "m12 1.608 12 20.784H0Z",
      category: "Dev",
      description: "Comments preview links on every build",
      href: "https://vercel.com/docs",
      connected: true
    },
    {
      name: "Dropbox",
      icon: A("dropbox"),
      category: "Storage",
      description: "Backs up exports to a shared folder",
      href: "https://www.dropbox.com/developers"
    },
    {
      name: "Framer",
      icon: A("framer"),
      category: "Design",
      description: "Publishes changelog pages to your site",
      href: "https://www.framer.com/developers"
    },
    {
      name: "Cloudflare",
      icon: A("cloudflare"),
      category: "Dev",
      description: "Purges the cache when you release",
      href: "https://developers.cloudflare.com"
    },
    {
      name: "Loom",
      icon: A("loom"),
      category: "Comms",
      description: "Embeds walkthroughs in bug reports",
      href: "https://dev.loom.com"
    },
    {
      name: "Supabase",
      icon: A("supabase"),
      category: "Storage",
      description: "Streams new rows as events",
      href: "https://supabase.com/docs"
    }
  ];
  function S() {
    return (0, o.jsx)("div", {
      className: T().demo,
      "data-canvas": "wide",
      children: (0, o.jsx)(M, { logos: P, label: "Integrations" })
    });
  }
  let I = S;
}

__m(__module,__exports,__require);
}