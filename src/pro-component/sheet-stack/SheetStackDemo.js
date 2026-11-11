function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { SheetStackDemo: () => et, default: () => ea });
  var s = a(95155), i = a(12115), r = a(18310), n = a(80642), l = a(25354), o = a(57700), c = a(76721), d = a(64577), u = a(92298), h = a(51288), p = a(35978), m = a(66558), f = a(50680), g = a(47650), b = a(28245), x = a(55809), w = a(92171), _ = a(79196), v = a(78780), y = a(9005), j = a(7770), k = a(64074), N = a.n(k);
  let T = (e2, t2) => {
    let a2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: a2 * a2,
      damping: 2 * (1 - t2) * a2,
      mass: 1,
      restDelta: 0.01,
      restSpeed: 0.5
    };
  }, S = T(0.44, 0.06), C = T(0.34, 0), A = T(0.42, 0), R = T(0.4, 0), E = T(0.36, 0.08), M = { duration: j.T.duration.fast, ease: [...j.T.ease.standard] }, P = { sheet: 10, dialog: 14 }, L = { sheet: 20, dialog: 40 }, z = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), W = () => () => {
  };
  function D() {
    return (0, i.useSyncExternalStore)(
      W,
      () => true,
      () => false
    );
  }
  let I = (0, i.createContext)(null);
  function O() {
    let e2 = (0, i.useContext)(I);
    if (!e2) throw Error("useSheetStack must be used inside SheetStack");
    let { stack: t2, push: a2, pop: s2, popTo: r2, close: n2 } = e2;
    return { stack: t2, push: a2, pop: s2, popTo: r2, close: n2 };
  }
  function $({
    children: e2,
    stack: t2,
    defaultStack: a2 = [],
    onStackChange: n2,
    mode: o2 = "auto",
    breakpoint: c2 = 640,
    contained: d2 = false
  }) {
    let u2, h2 = D(), p2 = (u2 = D(), !!(0, r.I)() && u2), [m2, f2] = (0, i.useState)(a2), _2 = t2 ?? m2, v2 = (0, i.useRef)(_2);
    (0, i.useLayoutEffect)(() => {
      v2.current = _2;
    }, [_2]);
    let [y2, k2] = (0, i.useState)(null), [T2, S2] = (0, i.useState)({ w: 0, h: 0 });
    (0, i.useLayoutEffect)(() => {
      if (!y2) return;
      let e3 = () => S2(
        (e4) => e4.w === y2.clientWidth && e4.h === y2.clientHeight ? e4 : { w: y2.clientWidth, h: y2.clientHeight }
      );
      if (e3(), "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(e3);
      return t3.observe(y2), () => t3.disconnect();
    }, [y2]);
    let C2 = "auto" === o2 ? T2.w >= c2 ? "dialog" : "sheet" : o2, [R2, E2] = (0, i.useState)({}), M2 = (0, i.useCallback)(
      (e3, t3) => E2((a3) => 0.5 > Math.abs((a3[e3] ?? -1) - t3) ? a3 : { ...a3, [e3]: t3 }),
      []
    ), [P2, L2] = (0, i.useState)({}), z2 = (0, i.useCallback)(
      (e3, t3) => L2((a3) => a3[e3] === t3 ? a3 : { ...a3, [e3]: t3 }),
      []
    ), W2 = (0, i.useRef)(/* @__PURE__ */ new Map()), O2 = (0, i.useRef)(null), Y2 = (0, i.useCallback)(
      (e3) => {
        let a3 = v2.current;
        e3.forEach((e4) => {
          !a3.includes(e4) && document.activeElement instanceof HTMLElement && W2.current.set(e4, document.activeElement);
        });
        let s2 = a3.filter((t3) => !e3.includes(t3));
        s2.length && (O2.current = W2.current.get(s2[0]) ?? null), s2.forEach((e4) => W2.current.delete(e4)), v2.current = e3, void 0 === t2 && f2(e3), n2?.(e3);
      },
      [n2, t2]
    ), F2 = (0, i.useCallback)(
      (e3) => {
        let t3 = v2.current, a3 = t3.indexOf(e3);
        Y2(a3 >= 0 ? t3.slice(0, a3 + 1) : [...t3, e3]);
      },
      [Y2]
    ), B2 = (0, i.useCallback)(() => {
      v2.current.length && Y2(v2.current.slice(0, -1));
    }, [Y2]), H2 = (0, i.useCallback)(
      (e3) => {
        let t3 = v2.current.indexOf(e3);
        t3 >= 0 && Y2(v2.current.slice(0, t3 + 1));
      },
      [Y2]
    ), K2 = (0, i.useCallback)(() => {
      v2.current.length && Y2([]);
    }, [Y2]), U2 = (0, b.d)(0), G2 = (0, b.d)(0), q2 = (0, b.d)(0), X2 = (0, x.G)(
      () => q2.get() * (1 - (1 === v2.current.length ? G2.get() : 0))
    ), V2 = _2[_2.length - 1], Q2 = V2 ? R2[V2] : void 0, J2 = void 0 === Q2 ? null : "sheet" === C2 ? T2.h - Q2 : (T2.h - Q2) / 2, Z2 = (0, i.useRef)(false);
    (0, i.useLayoutEffect)(() => {
      if (null === J2) return;
      if (!Z2.current || p2) {
        U2.jump(J2), Z2.current = true;
        return;
      }
      let e3 = (0, w.i)(U2, J2, A);
      return () => e3.stop();
    }, [J2, U2, p2]);
    let ee2 = _2.length, et2 = (0, i.useRef)(ee2);
    (0, i.useLayoutEffect)(() => {
      let e3 = et2.current;
      et2.current = ee2, 0 === ee2 && e3 > 0 && q2.jump(q2.get() * (1 - G2.get())), G2.jump(0), 0 === ee2 && (Z2.current = false);
      let t3 = (0, w.i)(
        q2,
        +!!ee2,
        p2 ? { duration: 0.16 } : ee2 ? { duration: 0.3, ease: [...j.T.ease.enter] } : { duration: 0.24, ease: [...j.T.ease.standard] }
      ), a3 = O2.current;
      return O2.current = null, a3?.isConnected && !a3.closest("[inert]") && a3.focus({ preventScroll: true }), () => t3.stop();
    }, [ee2, G2, p2, q2]), (0, i.useEffect)(() => {
      if (!ee2) return;
      let e3 = (e4) => {
        "Escape" !== e4.key || e4.defaultPrevented || (e4.preventDefault(), B2());
      };
      return document.addEventListener("keydown", e3), () => document.removeEventListener("keydown", e3);
    }, [ee2, B2]), (0, i.useEffect)(() => {
      if (d2 || !ee2) return;
      let e3 = document.documentElement, t3 = e3.style.overflow;
      return e3.style.overflow = "hidden", () => {
        e3.style.overflow = t3;
      };
    }, [d2, ee2]);
    let ea2 = (0, i.useMemo)(
      () => ({
        stack: _2,
        push: F2,
        pop: B2,
        popTo: H2,
        close: K2,
        mode: C2,
        layer: y2,
        size: T2,
        heights: R2,
        titles: P2,
        reportHeight: M2,
        reportTitle: z2,
        frontTop: U2,
        release: G2,
        reduced: p2
      }),
      [K2, U2, R2, y2, B2, H2, F2, p2, G2, M2, z2, C2, T2, _2, P2]
    ), es = (0, s.jsx)("div", {
      ref: k2,
      className: N().layer,
      "data-contained": d2 || void 0,
      "data-open": ee2 ? "" : void 0,
      "data-mode": C2,
      children: (0, s.jsx)(l.PY1.div, {
        className: N().scrim,
        style: { opacity: X2 },
        "aria-hidden": "true",
        onClick: B2
      })
    });
    return (0, s.jsxs)(I.Provider, {
      value: ea2,
      children: [e2, d2 ? es : h2 ? (0, g.createPortal)(es, document.body) : null]
    });
  }
  function Y(e2) {
    let t2 = (0, i.useContext)(I);
    if (!t2) throw Error("Sheet must be used inside SheetStack");
    let { id: a2, title: r2, backLabel: l2 } = e2, { reportTitle: o2 } = t2;
    (0, i.useLayoutEffect)(() => {
      o2(a2, l2 ?? r2);
    }, [l2, a2, o2, r2]);
    let c2 = t2.stack.indexOf(a2);
    return t2.layer ? (0, g.createPortal)(
      (0, s.jsx)(n.N, {
        children: c2 >= 0 && (0, s.jsx)(
          F,
          { ...e2, index: c2, depth: t2.stack.length - 1 - c2, context: t2 },
          a2
        )
      }),
      t2.layer
    ) : null;
  }
  function F({
    id: e2,
    title: t2,
    description: a2,
    children: r2,
    footer: n2,
    dismissible: o2 = true,
    className: c2,
    ref: d2,
    index: u2,
    depth: h2,
    context: p2
  }) {
    let {
      mode: m2,
      size: f2,
      heights: g2,
      titles: k2,
      reportHeight: T2,
      frontTop: W2,
      release: D2,
      reduced: I2,
      stack: O2,
      pop: $2
    } = p2, Y2 = (0, i.useId)(), [B2, H2] = (0, _.xQ)(), K2 = (0, i.useRef)(null), U2 = (0, i.useRef)(null), G2 = (0, i.useRef)(null), q2 = 0 === h2 && B2, X2 = g2[e2], V2 = P[m2], Q2 = void 0 === X2 ? 0 : "sheet" === m2 ? f2.h - X2 : (f2.h - X2) / 2, J2 = Math.max(160, f2.h - L[m2] - V2 * u2 - ("dialog" === m2 ? L.dialog : 0)), Z2 = u2 > 0 ? O2[u2 - 1] : void 0, ee2 = (0, b.d)(h2), et2 = (0, b.d)(0), ea2 = (0, b.d)("auto"), es = (0, b.d)(+!I2), ei = (0, b.d)(Q2);
    (0, i.useLayoutEffect)(() => {
      ei.set(Q2);
    }, [ei, Q2]);
    let er = (0, x.G)(() => {
      let e3 = Math.max(0, ee2.get() - D2.get()), t3 = (I2 || e3 <= 0 ? 0 : e3 >= 1 ? W2.get() - V2 * e3 - ei.get() : e3 * (W2.get() - V2 - ei.get())) + et2.get(), a3 = I2 ? 1 : (1 - 0.05 * e3) * ("dialog" === m2 ? 1 - 0.03 * (1 - es.get()) : 1);
      return `translate3d(0, ${t3.toFixed(2)}px, 0) scale(${a3.toFixed(4)})`;
    }), en = (0, x.G)(() => z(ee2.get() - D2.get(), 0, 2) / 2), el = (0, x.G)(() => "dialog" === m2 || I2 ? es.get() : 1), eo = (0, i.useRef)(false);
    (0, i.useLayoutEffect)(() => {
      let t3 = U2.current;
      if (!t3) return;
      let a3 = () => {
        let a4 = t3.offsetHeight, s3 = G2.current;
        if (s3 && s3.toggleAttribute(
          "data-scrolls",
          s3.scrollHeight > s3.clientHeight + 1
        ), T2(e2, a4), !eo.current || I2) {
          ea2.jump(a4), eo.current = true;
          return;
        }
        (0, w.i)(ea2, a4, R);
      };
      if (a3(), "u" < typeof ResizeObserver) return;
      let s2 = new ResizeObserver(a3);
      return s2.observe(t3), () => s2.disconnect();
    }, [ea2, e2, I2, T2]), (0, i.useLayoutEffect)(() => {
      let e3 = U2.current;
      if (e3) {
        if (K2.current?.focus({ preventScroll: true }), I2) {
          es.jump(0), (0, w.i)(es, 1, { duration: 0.16 });
          return;
        }
        "sheet" === m2 ? (et2.jump(e3.offsetHeight + 24), (0, w.i)(et2, 0, S)) : (et2.jump(18), es.jump(0), (0, w.i)(et2, 0, S), (0, w.i)(es, 1, { duration: 0.2, ease: [...j.T.ease.enter] }));
      }
    }, []);
    let ec = (0, i.useRef)(h2);
    (0, i.useLayoutEffect)(() => {
      if (!B2 || ec.current === h2) return;
      if (ec.current = h2, ee2.jump(Math.max(0, ee2.get() - D2.get())), I2)
        return void ee2.jump(h2);
      let e3 = (0, w.i)(ee2, h2, A);
      return () => e3.stop();
    }, [h2, ee2, B2, I2, D2]);
    let ed = (0, i.useRef)(0);
    (0, i.useEffect)(() => {
      if (B2) return;
      let e3 = ed.current, t3 = U2.current, a3 = t3?.offsetHeight ?? 400, s2 = I2 ? [(0, w.i)(es, 0, { duration: 0.14 })] : "sheet" === m2 ? [
        (0, w.i)(
          et2,
          (0 === h2 ? a3 : f2.h) + 24,
          e3 ? { ...E, velocity: e3 } : C
        )
      ] : [
        (0, w.i)(
          et2,
          e3 ? et2.get() + Math.max(120, 0.2 * e3) : 18,
          e3 ? { ...E, velocity: e3 } : C
        ),
        (0, w.i)(es, 0, M)
      ];
      return Promise.all(s2).then(() => H2?.()), () => s2.forEach((e4) => e4.stop());
    }, [B2]);
    let eu = (0, i.useRef)(null), eh = (0, i.useRef)(false), ep = () => U2.current?.offsetHeight ?? 1, em = (e3) => {
      eh.current && D2.set(z(e3 / ep(), 0, 1));
    }, ef = (e3) => {
      let t3 = eu.current;
      if (!t3 || t3.id !== e3.pointerId || (eu.current = null, "y" !== t3.axis))
        return;
      let a3 = t3.samples[0], s2 = t3.samples[t3.samples.length - 1], i2 = (s2.y - a3.y) / Math.max(1e-3, (s2.t - a3.t) / 1e3), r3 = et2.get(), n3 = ep();
      if (r3 > 0 && (r3 > 0.35 * n3 || i2 > 450 && r3 > 16)) {
        ed.current = Math.max(i2, 0), eh.current = false, $2();
        return;
      }
      let l2 = et2.on("change", em);
      (0, w.i)(et2, 0, { ...S, velocity: i2 }).then(() => {
        l2(), eh.current = false;
      });
    };
    return (0, s.jsxs)(l.PY1.div, {
      ref: (e3) => {
        K2.current = e3, "function" == typeof d2 ? d2(e3) : d2 && (d2.current = e3);
      },
      className: [N().panel, c2].filter(Boolean).join(" "),
      "data-mode": m2,
      "data-top": q2 || void 0,
      role: "dialog",
      "aria-modal": q2 || void 0,
      "aria-labelledby": `${Y2}-title`,
      "aria-describedby": a2 ? `${Y2}-description` : void 0,
      tabIndex: -1,
      inert: !q2 || void 0,
      onKeyDown: (e3) => {
        if ("Tab" !== e3.key || !q2) return;
        let t3 = Array.from(
          K2.current?.querySelectorAll(
            "a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex='-1'])"
          ) ?? []
        ).filter((e4) => !e4.closest("[inert]"));
        if (!t3.length) return void e3.preventDefault();
        let a3 = t3.indexOf(document.activeElement);
        e3.shiftKey && a3 <= 0 ? (e3.preventDefault(), t3[t3.length - 1].focus()) : e3.shiftKey || a3 !== t3.length - 1 || (e3.preventDefault(), t3[0].focus());
      },
      style: { transform: er, opacity: el, height: ea2, zIndex: u2 + 2 },
      onPointerDown: (e3) => {
        if (!o2 || !q2 || 0 !== e3.button || eu.current) return;
        let t3 = e3.target;
        if (t3.closest(
          "input, textarea, select, button, a, label, [role='slider'], [data-sheet-no-drag]"
        ))
          return;
        let a3 = G2.current;
        a3 && a3.contains(t3) && a3.scrollTop > 0 || (eu.current = {
          id: e3.pointerId,
          x: e3.clientX,
          y: e3.clientY,
          axis: null,
          samples: [{ t: e3.timeStamp, y: e3.clientY }]
        });
      },
      onPointerMove: (e3) => {
        let t3 = eu.current;
        if (!t3 || t3.id !== e3.pointerId || "none" === t3.axis) return;
        let a3 = e3.clientX - t3.x, s2 = e3.clientY - t3.y;
        if (!t3.axis) {
          if (6 > Math.hypot(a3, s2)) return;
          if (Math.abs(a3) > Math.abs(s2) || s2 < 0 && G2.current && G2.current.scrollHeight > G2.current.clientHeight) {
            t3.axis = "none";
            return;
          }
          t3.axis = "y", t3.y = e3.clientY - et2.get(), e3.currentTarget.setPointerCapture(e3.pointerId), et2.stop(), eh.current = true;
        }
        t3.samples.push({ t: e3.timeStamp, y: e3.clientY }), t3.samples.length > 6 && t3.samples.shift();
        let i2 = e3.clientY - t3.y, r3 = i2 >= 0 ? i2 : ((e4, t4, a4 = 0.55) => e4 * t4 * a4 / (t4 + a4 * Math.abs(e4)))(
          i2,
          ep(),
          0.3
        );
        et2.set(r3), em(r3);
      },
      onPointerUp: ef,
      onPointerCancel: ef,
      children: [
        (0, s.jsxs)("div", {
          ref: U2,
          className: N().sizer,
          style: { maxHeight: J2 },
          children: [
            "sheet" === m2 && (0, s.jsx)("span", {
              className: N().grabber,
              "aria-hidden": "true"
            }),
            (0, s.jsxs)("header", {
              className: N().header,
              children: [
                (0, s.jsx)("span", {
                  className: N().lead,
                  children: Z2 && (0, s.jsxs)("button", {
                    type: "button",
                    className: N().back,
                    onClick: $2,
                    children: [
                      (0, s.jsx)(v.A, {
                        size: 18,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      (0, s.jsx)("span", {
                        className: N().backLabel,
                        children: k2[Z2] ?? "Back"
                      })
                    ]
                  })
                }),
                (0, s.jsx)("h2", {
                  id: `${Y2}-title`,
                  className: N().title,
                  children: t2
                }),
                (0, s.jsx)("span", {
                  className: N().trail,
                  children: (0, s.jsx)("button", {
                    type: "button",
                    className: N().close,
                    "aria-label": O2.length > 1 ? "Close all" : "Close",
                    onClick: p2.close,
                    children: (0, s.jsx)(y.A, {
                      size: 18,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  })
                })
              ]
            }),
            a2 && (0, s.jsx)("p", {
              id: `${Y2}-description`,
              className: N().description,
              children: a2
            }),
            (0, s.jsx)("div", { ref: G2, className: N().body, children: r2 }),
            n2 && (0, s.jsx)("div", { className: N().footer, children: n2 })
          ]
        }),
        (0, s.jsx)(l.PY1.div, {
          className: N().dim,
          style: { opacity: en },
          "aria-hidden": "true"
        })
      ]
    });
  }
  var B = a(67752), H = a(24806), K = a.n(H);
  let U = {
    name: "Emma Collins",
    role: "Product designer",
    photo: (0, B.my)("emma-collins")
  }, G = [
    { src: (0, B.my)("emma-collins"), label: "Headshot" },
    { src: (0, B.o4)("emma-collins"), label: "Portrait" },
    { src: (0, B.jW)("alpine-lake").src, label: "Alpine lake" },
    { src: (0, B.jW)("terracotta-waves").src, label: "Terracotta walls" },
    { src: (0, B.jW)("sea-at-dusk").src, label: "Sea at dusk" },
    { src: (0, B.jW)("lounge-chair").src, label: "Lounge chair" }
  ];
  function q({ src: e2, name: t2, size: a2 }) {
    let i2 = (0, r.I)();
    return (0, s.jsx)("span", {
      className: K().avatar,
      style: { width: a2, height: a2, fontSize: 0.36 * a2 },
      children: (0, s.jsx)(n.N, {
        initial: false,
        children: (0, s.jsx)(
          l.PY1.span,
          {
            className: K().avatarFace,
            initial: i2 ? { opacity: 0 } : { opacity: 0, scale: 1.08, filter: `blur(${j.T.blur.soft}px)` },
            animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
            exit: { opacity: 0, transition: { duration: 0.2 } },
            transition: i2 ? { duration: 0.15 } : j.T.spring.smooth,
            children: e2 ? (0, s.jsx)("img", { src: e2, alt: "" }) : (0, s.jsx)("span", {
              "aria-hidden": "true",
              children: t2.split(/\s+/).filter(Boolean).slice(0, 2).map((e3) => e3[0]?.toUpperCase()).join("") || "?"
            })
          },
          e2 ?? "initials"
        )
      })
    });
  }
  function X() {
    let { push: e2 } = O();
    return (0, s.jsx)(h.A, {
      onClick: () => e2("settings"),
      children: "Open settings"
    });
  }
  function V({
    profile: e2,
    onProfile: t2,
    notify: a2,
    setNotify: i2,
    digest: r2,
    setDigest: n2
  }) {
    let { push: l2 } = O();
    return (0, s.jsxs)("div", {
      className: K().settings,
      children: [
        (0, s.jsxs)("button", {
          type: "button",
          className: K().profileRow,
          onClick: () => {
            t2(), l2("profile");
          },
          children: [
            (0, s.jsx)(q, { src: e2.photo, name: e2.name, size: 44 }),
            (0, s.jsxs)("span", {
              className: K().rowText,
              children: [
                (0, s.jsx)("span", {
                  className: K().rowTitle,
                  children: e2.name
                }),
                (0, s.jsx)("span", {
                  className: K().rowMeta,
                  children: e2.role
                })
              ]
            }),
            (0, s.jsx)(c.A, {
              className: K().chevron,
              size: 18,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: K().group,
          children: [
            (0, s.jsxs)("div", {
              className: K().switchRow,
              children: [
                (0, s.jsxs)("span", {
                  className: K().rowText,
                  children: [
                    (0, s.jsx)("span", {
                      className: K().rowTitle,
                      children: "Mentions"
                    }),
                    (0, s.jsx)("span", {
                      className: K().rowMeta,
                      children: "Notify me when someone tags me"
                    })
                  ]
                }),
                (0, s.jsx)(f.d, {
                  checked: a2,
                  onCheckedChange: i2,
                  "aria-label": "Mentions"
                })
              ]
            }),
            (0, s.jsxs)("div", {
              className: K().switchRow,
              children: [
                (0, s.jsxs)("span", {
                  className: K().rowText,
                  children: [
                    (0, s.jsx)("span", {
                      className: K().rowTitle,
                      children: "Weekly summary"
                    }),
                    (0, s.jsx)("span", {
                      className: K().rowMeta,
                      children: "An email every Monday at 9 a.m."
                    })
                  ]
                }),
                (0, s.jsx)(f.d, {
                  checked: r2,
                  onCheckedChange: n2,
                  "aria-label": "Weekly summary"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Q({ draft: e2, setDraft: t2, onPhoto: a2 }) {
    let { push: i2 } = O();
    return (0, s.jsxs)("div", {
      className: K().profile,
      children: [
        (0, s.jsxs)("div", {
          className: K().photoBlock,
          children: [
            (0, s.jsx)(q, { src: e2.photo, name: e2.name, size: 76 }),
            (0, s.jsx)("button", {
              type: "button",
              className: K().textButton,
              onClick: () => {
                a2(), i2("photo");
              },
              children: "Change photo"
            })
          ]
        }),
        (0, s.jsx)(p.p, {
          label: "Name",
          value: e2.name,
          autoComplete: "name",
          onChange: (a3) => t2({ ...e2, name: a3.target.value })
        }),
        (0, s.jsx)(p.p, {
          label: "Role",
          value: e2.role,
          onChange: (a3) => t2({ ...e2, role: a3.target.value })
        })
      ]
    });
  }
  function J({ dirty: e2, valid: t2, onSave: a2 }) {
    let { popTo: r2 } = O(), [n2, l2] = (0, i.useState)("idle"), o2 = (0, i.useRef)([]);
    return (0, i.useEffect)(() => () => o2.current.forEach(window.clearTimeout), []), (0, s.jsx)(h.A, {
      disabled: "idle" === n2 && (!e2 || !t2),
      loading: "saving" === n2,
      onClick: () => {
        "idle" === n2 && (l2("saving"), o2.current.push(
          window.setTimeout(() => {
            a2(), l2("saved");
          }, 520)
        ), o2.current.push(
          window.setTimeout(() => {
            r2("settings");
          }, 1180)
        ));
      },
      children: "saved" === n2 ? (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)(d.A, {
            size: 16,
            strokeWidth: 2,
            "aria-hidden": "true"
          }),
          "Saved"
        ]
      }) : "Save changes"
    });
  }
  function Z({ pick: e2, setPick: t2 }) {
    let a2 = (0, r.I)(), n2 = (0, i.useRef)([]), c2 = Math.max(
      0,
      G.findIndex((t3) => t3.src === e2)
    );
    return (0, s.jsx)(o.o, {
      id: "sheet-stack-photos",
      children: (0, s.jsx)("div", {
        className: K().choices,
        role: "radiogroup",
        "aria-label": "Profile photo",
        children: G.map((i2, r2) => {
          let o2 = i2.src === e2;
          return (0, s.jsxs)(
            "button",
            {
              ref: (e3) => {
                n2.current[r2] = e3;
              },
              type: "button",
              role: "radio",
              "aria-checked": o2,
              "aria-label": i2.label,
              tabIndex: r2 === c2 ? 0 : -1,
              className: K().choice,
              "data-selected": o2 || void 0,
              onClick: () => t2(i2.src),
              onKeyDown: (e3) => {
                let a3 = {
                  ArrowRight: 1,
                  ArrowDown: 3,
                  ArrowLeft: -1,
                  ArrowUp: -3
                }[e3.key];
                if (a3) {
                  let s2;
                  e3.preventDefault(), s2 = (r2 + a3 + G.length) % G.length, t2(G[s2].src), n2.current[s2]?.focus();
                }
              },
              children: [
                o2 && (0, s.jsx)(l.PY1.span, {
                  layoutId: "ring",
                  className: K().choiceRing,
                  transition: a2 ? { duration: 0 } : j.T.spring.morph,
                  "aria-hidden": "true"
                }),
                (0, s.jsx)("img", { src: i2.src, alt: "" })
              ]
            },
            i2.src
          );
        })
      })
    });
  }
  function ee({ pick: e2, onUse: t2, onRemove: a2 }) {
    let { pop: i2 } = O();
    return (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)(h.A, {
          variant: "ghost",
          onClick: () => {
            a2(), i2();
          },
          children: "Remove photo"
        }),
        (0, s.jsx)(h.A, {
          disabled: !e2,
          onClick: () => {
            t2(), i2();
          },
          children: "Use photo"
        })
      ]
    });
  }
  function et() {
    let e2 = (0, r.I)(), [t2, a2] = (0, i.useState)("auto"), [o2, c2] = (0, i.useState)([]), [d2, p2] = (0, i.useState)(U), [f2, g2] = (0, i.useState)(U), [b2, x2] = (0, i.useState)(U.photo), [w2, _2] = (0, i.useState)(true), [v2, y2] = (0, i.useState)(false), [k2, N2] = (0, i.useState)(
      "Open settings, then drill into your profile and photo. Drag a sheet down or press Escape to go back a level."
    ), T2 = f2.name !== d2.name || f2.role !== d2.role || f2.photo !== d2.photo, S2 = d2 === U && w2 && !v2 && "auto" === t2 && !o2.length;
    return (0, s.jsxs)("div", {
      className: K().demo,
      children: [
        (0, s.jsx)("div", {
          className: K().stage,
          children: (0, s.jsxs)($, {
            contained: true,
            mode: t2,
            stack: o2,
            onStackChange: (e3) => {
              !e3.length && o2.length && N2(
                T2 && o2.includes("profile") ? "Closed without saving. Your profile is unchanged." : "Settings closed."
              ), c2(e3);
            },
            children: [
              (0, s.jsxs)("div", {
                className: K().account,
                children: [
                  (0, s.jsx)(q, { src: d2.photo, name: d2.name, size: 72 }),
                  (0, s.jsxs)("div", {
                    className: K().accountText,
                    children: [
                      (0, s.jsx)("p", {
                        className: K().accountName,
                        children: d2.name
                      }),
                      (0, s.jsxs)("p", {
                        className: K().accountMeta,
                        children: [d2.role, " \xB7 Studio team"]
                      })
                    ]
                  }),
                  (0, s.jsx)(X, {})
                ]
              }),
              (0, s.jsx)(Y, {
                id: "settings",
                title: "Settings",
                children: (0, s.jsx)(V, {
                  profile: d2,
                  onProfile: () => g2(d2),
                  notify: w2,
                  setNotify: (e3) => {
                    _2(e3), N2(
                      e3 ? "Mention notifications are on." : "Mention notifications are off."
                    );
                  },
                  digest: v2,
                  setDigest: (e3) => {
                    y2(e3), N2(
                      e3 ? "Weekly summary turned on for Mondays at 9 a.m." : "Weekly summary turned off."
                    );
                  }
                })
              }),
              (0, s.jsx)(Y, {
                id: "profile",
                title: "Edit profile",
                backLabel: "Profile",
                footer: (0, s.jsx)(J, {
                  dirty: T2,
                  valid: !!f2.name.trim(),
                  onSave: () => {
                    p2({ ...f2, name: f2.name.trim(), role: f2.role.trim() }), N2(
                      "Profile saved. The settings row picked up the change."
                    );
                  }
                }),
                children: (0, s.jsx)(Q, {
                  draft: f2,
                  setDraft: g2,
                  onPhoto: () => x2(f2.photo)
                })
              }),
              (0, s.jsx)(Y, {
                id: "photo",
                title: "Change photo",
                footer: (0, s.jsx)(ee, {
                  pick: b2,
                  onUse: () => {
                    g2({ ...f2, photo: b2 }), N2("New photo ready. Save changes to keep it.");
                  },
                  onRemove: () => {
                    g2({ ...f2, photo: null }), x2(null), N2(
                      "Photo removed. Initials show until you pick another."
                    );
                  }
                }),
                children: (0, s.jsx)(Z, { pick: b2, setPick: x2 })
              })
            ]
          })
        }),
        (0, s.jsxs)("div", {
          className: K().footer,
          children: [
            (0, s.jsx)("p", {
              className: K().srOnly,
              "aria-live": "polite",
              children: (0, s.jsx)(n.N, {
                mode: "popLayout",
                initial: false,
                children: (0, s.jsx)(
                  l.PY1.span,
                  {
                    className: K().statusText,
                    initial: e2 ? { opacity: 0 } : {
                      opacity: 0,
                      y: 6,
                      filter: `blur(${j.T.blur.subtle}px)`
                    },
                    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                    exit: e2 ? { opacity: 0 } : {
                      opacity: 0,
                      y: -6,
                      filter: `blur(${j.T.blur.subtle}px)`,
                      transition: { duration: 0.14 }
                    },
                    transition: { duration: 0.22, ease: [...j.T.ease.enter] },
                    children: k2
                  },
                  k2
                )
              })
            }),
            (0, s.jsxs)("div", {
              className: K().controls,
              children: [
                (0, s.jsx)(m.A, {
                  label: "Layout",
                  value: t2,
                  onValueChange: (e3) => a2(e3),
                  options: [
                    { value: "auto", label: "Auto" },
                    { value: "sheet", label: "Sheets" },
                    { value: "dialog", label: "Dialogs" }
                  ]
                }),
                (0, s.jsxs)(h.A, {
                  variant: "secondary",
                  disabled: S2,
                  onClick: () => {
                    c2([]), p2(U), g2(U), x2(U.photo), _2(true), y2(false), a2("auto"), N2("Reset to Emma\u2019s original profile and settings.");
                  },
                  children: [
                    (0, s.jsx)(u.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    "Reset"
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  let ea = et;
}

__m(__module,__exports,__require);
}