function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.r(t), i.d(t, { DockDemo: () => en, default: () => er });
  var a = i(95155), n = i(12115), r = i(5772), o = i(18310), s = i(28245), l = i(55809), c = i(7890), d = i(92171), u = i(25354), p = i(80642), m = i(40852), h = i(67401), f = i(76401), g = i(95697), x = i(61285), y = i(91906), b = i(14929), k = i(82879), _ = i(24551), j = i(92298), v = i(57700), w = i(29298), $ = i(56255), N = i(7770), L = i(6074), A = i.n(L);
  let { spring: S, duration: T, ease: C, blur: R } = N.T, P = (e2, t2, i2) => Math.min(i2, Math.max(t2, e2)), M = (e2) => Math.round(100 * e2) / 100, E = (e2, t2) => {
    let i2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: i2 * i2,
      damping: 2 * (1 - t2) * i2,
      mass: 1,
      restDelta: 1e-3,
      restSpeed: 0.05
    };
  }, D = E(0.3, 0), Y = E(0.42, 0), B = E(0.3, 0), I = E(S.morph.visualDuration, 0.08), z = { duration: 0 }, K = () => () => {
  };
  function O({ digit: e2, reduced: t2 }) {
    return (0, a.jsx)("span", {
      className: A().digit,
      children: (0, a.jsx)(u.PY1.span, {
        className: A().column,
        initial: false,
        animate: { y: `${-(10 * e2)}%` },
        transition: t2 ? z : S.snappy,
        children: "0123456789".split("").map((e3) => (0, a.jsx)("span", { children: e3 }, e3))
      })
    });
  }
  function W({ count: e2, reduced: t2 }) {
    let i2 = e2 > 99 ? "99" : String(e2);
    return (0, a.jsx)(p.N, {
      initial: false,
      children: e2 > 0 && (0, a.jsx)(
        u.PY1.span,
        {
          className: A().badge,
          "aria-hidden": "true",
          initial: t2 ? { opacity: 0 } : { opacity: 0, scale: 0.5 },
          animate: { opacity: 1, scale: 1, width: 10 + 7 * i2.length },
          exit: t2 ? { opacity: 0 } : { opacity: 0, scale: 0.5, transition: { duration: T.fast } },
          transition: t2 ? { duration: 0.12 } : { ...S.snappy, opacity: { duration: T.fast } },
          children: i2.split("").map(
            (e3, n2) => (0, a.jsx)(O, { digit: Number(e3), reduced: t2 }, i2.length - n2)
          )
        },
        "badge"
      )
    });
  }
  function G({
    items: e2,
    value: t2 = null,
    onValueChange: i2,
    onItemsChange: r2,
    label: c2 = "Tools",
    className: m2
  }) {
    let h2, f2 = (0, n.useId)().replace(/[^a-zA-Z0-9-]/g, ""), g2 = (h2 = (0, n.useSyncExternalStore)(
      K,
      () => true,
      () => false
    ), !!(0, o.I)() && h2), x2 = (0, n.useRef)(null), y2 = (0, n.useRef)(null), b2 = (0, n.useRef)(null), k2 = (0, n.useRef)(/* @__PURE__ */ new Map()), _2 = (0, n.useRef)(/* @__PURE__ */ new Map()), j2 = (0, n.useRef)(false), L2 = (0, n.useRef)(null), O2 = (0, n.useRef)({ show: 0, hide: 0, cool: 0, warm: false }), [V2, X2] = (0, n.useState)(44 * e2.length + 12), [F2, Q2] = (0, n.useState)(e2[0]?.id ?? ""), [Z2, q2] = (0, n.useState)(null), [H2, U2] = (0, n.useState)(null), [J2, ee2] = (0, n.useState)(null), [et2, ei2] = (0, n.useState)(null);
    J2 && J2 !== et2 && ei2(J2);
    let [ea2, en2] = (0, n.useState)({}), er2 = (e3) => e3.items?.find((e4) => e4.id === t2) ?? e3.items?.find((t3) => t3.id === ea2[e3.id]) ?? e3.items?.[0], eo = e2.find((e3) => e3.id === t2 || e3.items?.some((e4) => e4.id === t2))?.id ?? null, [es, el] = (0, n.useState)(null);
    Z2 && Z2 !== es && el(Z2);
    let ec = e2.find((e3) => e3.id === es && e3.items?.length), ed = ec?.items ?? [], eu = 36 * ed.length + 4 * Math.max(0, ed.length - 1) + 12, ep = (0, s.d)(0), em = (0, s.d)(0), eh = (0, s.d)(40), ef = (0, s.d)(V2), eg = (0, l.G)(
      () => (function(e3, t3, i3, a2) {
        let n2 = M(e3), r3 = `M20 0 L${n2 - 20} 0 A20 20 0 0 1 ${n2} 20 L${n2} ${32} A20 20 0 0 1 ${n2 - 20} 52 L20 52 A20 20 0 0 1 0 ${32} L0 20 A20 20 0 0 1 20 0 Z`;
        if (t3 < 0.5) return r3;
        let o2 = Math.min(10, t3 / 2), s2 = Math.min(a2, n2 - 40 - 2 * o2), l2 = P(i3, 20 + o2 + s2 / 2, n2 - 20 - o2 - s2 / 2), c3 = M(l2 - s2 / 2), d2 = M(l2 + s2 / 2), u2 = M(t3), p2 = M(o2), m3 = M(Math.max(0, Math.min(18, u2 - o2, s2 / 2)));
        return `M20 0 L${M(c3 - p2)} 0 Q${c3} 0 ${c3} ${-p2} L${c3} ${M(-u2 + m3)} Q${c3} ${-u2} ${M(c3 + m3)} ${-u2} L${M(d2 - m3)} ${-u2} Q${d2} ${-u2} ${d2} ${M(-u2 + m3)} L${d2} ${-p2} Q${d2} 0 ${M(d2 + p2)} 0 L${n2 - 20} 0 A20 20 0 0 1 ${n2} 20 L${n2} ${32} A20 20 0 0 1 ${n2 - 20} 52 L20 52 A20 20 0 0 1 0 ${32} L0 20 A20 20 0 0 1 20 0 Z`;
      })(ef.get(), ep.get(), em.get(), eh.get())
    ), ex = (0, l.G)(ep, (e3) => P((e3 / 48 - 0.45) / 0.4, 0, 1)), ey = (0, l.G)(
      () => P(em.get(), 30 + eh.get() / 2, ef.get() - 20 - 10 - eh.get() / 2) - eu / 2
    ), eb = (0, s.d)(0), ek = (0, s.d)(0), e_ = (0, s.d)(0), ej = (0, s.d)(0), ev = (0, l.G)(
      () => `translate3d(${M(eb.get() - e_.get() / 2)}px, ${M(ek.get() + (1 - ej.get()) * (4 * !g2))}px, 0) scale(${M(g2 ? 1 : 0.96 + 0.04 * ej.get())})`
    );
    function ew(e3, t3, i3) {
      let a2 = (i3 ? _2 : k2).current.get(e3), n2 = x2.current;
      if (!a2 || !n2) return;
      let r3 = a2.getBoundingClientRect(), o2 = n2.getBoundingClientRect(), s2 = r3.left - o2.left + r3.width / 2, l2 = (i3 || L2.current ? -48 : 0) - 10;
      !(ej.get() > 0.05) || g2 ? (eb.jump(s2), ek.jump(l2)) : ((0, d.i)(eb, s2, D), (0, d.i)(ek, l2, D)), ee2(t3);
    }
    function e$(e3, t3, i3 = false) {
      if (H2) return;
      let a2 = O2.current;
      window.clearTimeout(a2.hide), window.clearTimeout(a2.show);
      let n2 = { id: e3.id, label: e3.label, shortcut: e3.shortcut };
      i3 || ej.get() > 0.05 || a2.warm ? ew(e3.id, n2, t3) : a2.show = window.setTimeout(() => ew(e3.id, n2, t3), 380);
    }
    function eN(e3 = 90) {
      let t3 = O2.current;
      window.clearTimeout(t3.show), window.clearTimeout(t3.hide), t3.hide = window.setTimeout(() => {
        t3.warm = true, window.clearTimeout(t3.cool), t3.cool = window.setTimeout(() => {
          t3.warm = false;
        }, 700), ee2(null);
      }, e3);
    }
    function eL(e3, t3) {
      eN(0), t3 && (en2((i3) => ({ ...i3, [t3.id]: e3.id })), q2(null), k2.current.get(t3.id)?.focus({ preventScroll: true })), i2?.(e3.id);
    }
    (0, n.useLayoutEffect)(() => {
      let e3 = y2.current;
      if (!e3) return;
      let t3 = () => {
        X2(e3.offsetWidth), ef.set(e3.offsetWidth);
      };
      t3();
      let i3 = new ResizeObserver(t3);
      return i3.observe(e3), () => i3.disconnect();
    }, [ef]), (0, n.useEffect)(() => {
      if (!Z2) {
        if (g2) return void ep.jump(0);
        let e4 = (0, d.i)(ep, 0, B);
        return () => e4.stop();
      }
      let e3 = k2.current.get(Z2), t3 = y2.current;
      if (!e3 || !t3) return;
      let i3 = e3.getBoundingClientRect(), a2 = t3.getBoundingClientRect(), n2 = i3.left - a2.left + i3.width / 2;
      if (g2) {
        em.jump(n2), eh.jump(eu), ep.jump(48);
        return;
      }
      1 > ep.get() && (em.jump(n2), eh.jump(40));
      let r3 = (0, d.i)(ep, 48, Y), o2 = (0, d.i)(em, n2, Y), s2 = (0, d.i)(eh, eu, I);
      return () => {
        r3.stop(), o2.stop(), s2.stop();
      };
    }, [em, Z2, g2, ep, eh, eu]), (0, n.useEffect)(() => {
      L2.current = Z2;
    }, [Z2]), (0, n.useLayoutEffect)(() => {
      let e3 = b2.current;
      if (!e3 || !et2) return;
      let t3 = e3.offsetWidth;
      if (g2 || 0.05 > ej.get()) return void e_.jump(t3);
      let i3 = (0, d.i)(e_, t3, I);
      return () => i3.stop();
    }, [g2, et2, ej, e_]), (0, n.useEffect)(() => {
      let e3 = (0, d.i)(
        ej,
        +!!J2,
        g2 ? { duration: 0.12 } : J2 ? E(0.22, 0) : { duration: T.exit, ease: [...C.standard] }
      );
      return () => e3.stop();
    }, [g2, J2, ej]), (0, n.useEffect)(() => {
      let e3 = O2.current;
      return () => {
        window.clearTimeout(e3.show), window.clearTimeout(e3.hide), window.clearTimeout(e3.cool);
      };
    }, []);
    let eA = (0, n.useEffectEvent)((e3) => {
      if (e3 instanceof KeyboardEvent) {
        if ("Escape" !== e3.key) return;
        q2(null), Z2 && x2.current?.contains(document.activeElement) && k2.current.get(Z2)?.focus({ preventScroll: true });
        return;
      }
      x2.current?.contains(e3.target) || q2(null);
    });
    (0, n.useEffect)(() => {
      if (!Z2) return;
      let e3 = (e4) => eA(e4);
      return document.addEventListener("pointerdown", e3, true), document.addEventListener("keydown", e3), () => {
        document.removeEventListener("pointerdown", e3, true), document.removeEventListener("keydown", e3);
      };
    }, [Z2]);
    let eS = (e3, t3, i3) => {
      e3.matches(":focus-visible") && e$(t3, i3, true);
    }, eT = g2 ? z : S.smooth, eC = g2 ? z : E(S.snappy.visualDuration + 0.08, 0.1), eR = g2 ? { opacity: 0 } : { opacity: 0, y: "0.35em", filter: `blur(${R.subtle}px)` };
    return (0, a.jsxs)("div", {
      ref: x2,
      className: [A().root, m2].filter(Boolean).join(" "),
      style: {
        "--dock-item": "40px",
        "--dock-pad": "6px",
        "--dock-gap": "4px",
        "--dock-tray-item": "36px",
        "--dock-tray-pad": "6px"
      },
      "data-dragging": H2 ? "" : void 0,
      onPointerLeave: () => eN(140),
      children: [
        (0, a.jsx)("svg", {
          className: A().surface,
          width: V2,
          height: 52,
          "aria-hidden": "true",
          children: (0, a.jsx)(u.PY1.path, { d: eg })
        }),
        ec && (0, a.jsx)(u.PY1.div, {
          id: `${f2}-tray`,
          role: "group",
          "aria-label": ec.label,
          className: A().tray,
          "data-open": Z2 === ec.id || void 0,
          inert: Z2 !== ec.id,
          style: { x: ey, opacity: ex, width: eu },
          children: ed.map(
            (e3, i3) => (0, a.jsx)(
              u.PY1.button,
              {
                ref: (t3) => {
                  t3 ? _2.current.set(e3.id, t3) : _2.current.delete(e3.id);
                },
                type: "button",
                className: A().trayItem,
                "aria-pressed": e3.id === t2,
                "aria-label": e3.shortcut ? `${e3.label}, ${e3.shortcut}` : e3.label,
                tabIndex: e3.id === er2(ec)?.id ? 0 : -1,
                initial: !g2 && { opacity: 0, y: 8, scale: 0.9 },
                animate: Z2 === ec.id || g2 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 6, scale: 0.92 },
                transition: g2 ? z : Z2 === ec.id ? { ...S.snappy, delay: 0.08 + i3 * N.T.stagger.item } : { duration: T.fast, ease: [...C.standard] },
                onClick: () => eL(e3, ec),
                onKeyDown: (e4) => (function(e5, t3) {
                  let i4 = "ArrowRight" === e5.key ? 1 : "ArrowLeft" === e5.key ? -1 : 0;
                  if ("ArrowDown" === e5.key || "Tab" === e5.key) {
                    "ArrowDown" === e5.key && e5.preventDefault(), q2(null), Z2 && "ArrowDown" === e5.key && k2.current.get(Z2)?.focus({ preventScroll: true });
                    return;
                  }
                  if (!i4) return;
                  e5.preventDefault();
                  let a2 = ed[(t3 + i4 + ed.length) % ed.length];
                  _2.current.get(a2.id)?.focus({ preventScroll: true }), e$(a2, true, true);
                })(e4, i3),
                onPointerEnter: (t3) => {
                  "mouse" === t3.pointerType && e$(e3, true);
                },
                onPointerLeave: () => eN(),
                onFocus: (t3) => eS(t3.currentTarget, e3, true),
                onBlur: () => eN(),
                children: (0, a.jsx)("span", {
                  className: A().icon,
                  children: e3.icon
                })
              },
              e3.id
            )
          )
        }),
        (0, a.jsx)(v.o, {
          id: f2,
          children: (0, a.jsx)(w.x, {
            as: "div",
            ref: y2,
            axis: "x",
            values: e2,
            role: "toolbar",
            "aria-label": c2,
            "aria-orientation": "horizontal",
            className: A().bar,
            onReorder: (e3) => {
              if (!r2 || !H2) return;
              let t3 = e3.findIndex((e4) => e4.id === H2);
              r2(e3, { type: "move", id: H2, index: t3 });
            },
            children: e2.map((n2, o2) => {
              let s2 = !!n2.items?.length, l2 = s2 ? er2(n2) ?? n2 : n2, c3 = eo === n2.id, d2 = s2 ? {
                ...n2,
                label: l2.label === n2.label ? n2.label : `${n2.label}: ${l2.label}`,
                shortcut: l2.shortcut ?? n2.shortcut
              } : n2;
              return (0, a.jsxs)(
                $.N,
                {
                  as: "div",
                  value: n2,
                  className: A().slot,
                  drag: !!r2 && "x",
                  dragConstraints: y2,
                  dragElastic: 0.14,
                  layout: "position",
                  transition: eT,
                  whileDrag: g2 ? void 0 : { scale: 1.12, zIndex: 3 },
                  onDragStart: () => {
                    j2.current = true, U2(n2.id), q2(null), ee2(null), window.clearTimeout(O2.current.show);
                  },
                  onDragEnd: () => {
                    U2(null), requestAnimationFrame(() => {
                      j2.current = false;
                    });
                  },
                  children: [
                    c3 && (0, a.jsx)(u.PY1.span, {
                      layoutId: "selection",
                      className: A().selection,
                      style: { borderRadius: 14 },
                      transition: eC,
                      "aria-hidden": "true"
                    }),
                    (0, a.jsxs)("button", {
                      ref: (e3) => {
                        e3 ? k2.current.set(n2.id, e3) : k2.current.delete(n2.id);
                      },
                      type: "button",
                      className: A().item,
                      "data-selected": c3 || void 0,
                      "data-open": Z2 === n2.id || void 0,
                      "aria-pressed": s2 ? void 0 : c3,
                      "aria-haspopup": s2 ? "true" : void 0,
                      "aria-expanded": s2 ? Z2 === n2.id : void 0,
                      "aria-controls": s2 && Z2 === n2.id ? `${f2}-tray` : void 0,
                      "aria-label": `${d2.label}${d2.shortcut ? `, ${d2.shortcut}` : ""}${n2.badge ? `, ${n2.badge}` : ""}${s2 && c3 ? ", selected" : ""}`,
                      tabIndex: F2 !== n2.id && (e2.some((e3) => e3.id === F2) || 0 !== o2) ? -1 : 0,
                      onClick: () => (function(e3) {
                        if (j2.current) {
                          j2.current = false;
                          return;
                        }
                        if (e3.items?.length) {
                          eN(0);
                          let a2 = er2(e3);
                          a2 && a2.id !== t2 && i2?.(a2.id), q2((t3) => t3 === e3.id ? null : e3.id);
                          return;
                        }
                        q2(null), eL(e3);
                      })(n2),
                      onKeyDown: (t3) => (function(t4, i3) {
                        let a2 = e2[i3], n3 = "ArrowRight" === t4.key ? 1 : "ArrowLeft" === t4.key ? -1 : 0;
                        if (n3 && t4.altKey && r2) {
                          let o4 = i3 + n3;
                          if (o4 < 0 || o4 >= e2.length) return;
                          t4.preventDefault();
                          let s4 = [...e2];
                          s4.splice(i3, 1), s4.splice(o4, 0, a2), r2(s4, { type: "move", id: a2.id, index: o4 }), requestAnimationFrame(() => {
                            k2.current.get(a2.id)?.focus({ preventScroll: true }), e$(a2, false, true);
                          });
                          return;
                        }
                        let o3 = -1;
                        if (n3) o3 = (i3 + n3 + e2.length) % e2.length;
                        else if ("Home" === t4.key) o3 = 0;
                        else if ("End" === t4.key) o3 = e2.length - 1;
                        else if ("ArrowUp" === t4.key && a2.items?.length) {
                          t4.preventDefault(), q2(a2.id);
                          let e3 = er2(a2) ?? a2.items[0];
                          requestAnimationFrame(() => {
                            _2.current.get(e3.id)?.focus({ preventScroll: true }), e$(e3, true, true);
                          });
                          return;
                        }
                        if (!(o3 < 0)) {
                          var s3;
                          t4.preventDefault(), Q2(s3 = e2[o3].id), k2.current.get(s3)?.focus({ preventScroll: true }), e$(e2[o3], false, true);
                        }
                      })(t3, o2),
                      onFocus: (e3) => {
                        Q2(n2.id), eS(e3.currentTarget, d2, false);
                      },
                      onBlur: () => eN(),
                      onPointerEnter: (e3) => {
                        "mouse" === e3.pointerType && e$(d2, false);
                      },
                      onPointerLeave: () => eN(),
                      children: [
                        (0, a.jsx)("span", {
                          className: A().icon,
                          children: (0, a.jsx)(p.N, {
                            mode: "popLayout",
                            initial: false,
                            children: (0, a.jsx)(
                              u.PY1.span,
                              {
                                className: A().glyph,
                                initial: g2 ? { opacity: 0 } : {
                                  opacity: 0,
                                  scale: 0.8,
                                  filter: `blur(${R.subtle}px)`
                                },
                                animate: {
                                  opacity: 1,
                                  scale: 1,
                                  filter: "blur(0px)"
                                },
                                exit: g2 ? { opacity: 0 } : {
                                  opacity: 0,
                                  scale: 0.8,
                                  filter: `blur(${R.subtle}px)`,
                                  transition: { duration: T.instant }
                                },
                                transition: g2 ? { duration: 0.12 } : {
                                  ...S.snappy,
                                  opacity: { duration: T.fast }
                                },
                                children: l2.icon
                              },
                              l2.id
                            )
                          })
                        }),
                        s2 && (0, a.jsx)("span", {
                          className: A().caret,
                          "aria-hidden": "true"
                        }),
                        void 0 !== n2.badge && (0, a.jsx)("span", {
                          className: A().badgeAnchor,
                          children: (0, a.jsx)(W, {
                            count: n2.badge,
                            reduced: g2
                          })
                        })
                      ]
                    })
                  ]
                },
                n2.id
              );
            })
          })
        }),
        (0, a.jsxs)(u.PY1.div, {
          className: A().tip,
          style: { transform: ev, width: e_, opacity: ej },
          "aria-hidden": "true",
          children: [
            (0, a.jsxs)("span", {
              ref: b2,
              className: `${A().tipRow} ${A().measure}`,
              children: [
                et2?.label,
                et2?.shortcut && (0, a.jsx)("kbd", {
                  className: A().kbd,
                  children: et2.shortcut
                })
              ]
            }),
            (0, a.jsx)(p.N, {
              mode: "popLayout",
              initial: false,
              children: et2 && (0, a.jsxs)(
                u.PY1.span,
                {
                  className: A().tipRow,
                  initial: eR,
                  animate: { opacity: 1, y: "0em", filter: "blur(0px)" },
                  exit: g2 ? { opacity: 0, transition: { duration: 0.08 } } : {
                    opacity: 0,
                    y: "-0.35em",
                    filter: `blur(${R.subtle}px)`,
                    transition: { duration: 0.12 }
                  },
                  transition: g2 ? { duration: 0.12 } : { duration: 0.18, ease: [...C.enter] },
                  children: [
                    et2.label,
                    et2.shortcut && (0, a.jsx)("kbd", {
                      className: A().kbd,
                      children: et2.shortcut
                    })
                  ]
                },
                et2.id + et2.label
              )
            })
          ]
        })
      ]
    });
  }
  var V = i(69099), X = i.n(V);
  let F = { size: 20, strokeWidth: 1.75, "aria-hidden": true }, Q = "media/specials/dock-", Z = [
    {
      id: "rectangle",
      label: "Rectangle",
      shortcut: "R",
      icon: (0, a.jsx)(m.A, { ...F })
    },
    {
      id: "ellipse",
      label: "Ellipse",
      shortcut: "O",
      icon: (0, a.jsx)(h.A, { ...F })
    },
    { id: "triangle", label: "Triangle", icon: (0, a.jsx)(f.A, { ...F }) },
    { id: "star", label: "Star", icon: (0, a.jsx)(g.A, { ...F }) }
  ], q = [
    {
      id: "move",
      label: "Move",
      shortcut: "V",
      icon: (0, a.jsx)(x.A, { ...F })
    },
    {
      id: "hand",
      label: "Hand",
      shortcut: "H",
      icon: (0, a.jsx)(y.A, { ...F })
    },
    {
      id: "shapes",
      label: "Shapes",
      icon: (0, a.jsx)(m.A, { ...F }),
      items: Z
    },
    {
      id: "text",
      label: "Text",
      shortcut: "T",
      icon: (0, a.jsx)(b.A, { ...F })
    },
    {
      id: "note",
      label: "Sticky note",
      shortcut: "N",
      icon: (0, a.jsx)(k.A, { ...F })
    },
    {
      id: "comment",
      label: "Comment",
      shortcut: "C",
      icon: (0, a.jsx)(_.A, { ...F })
    }
  ], H = {
    v: "move",
    h: "hand",
    r: "rectangle",
    o: "ellipse",
    t: "text",
    n: "note",
    c: "comment"
  }, U = Object.fromEntries([...q, ...Z].map((e2) => [e2.id, e2.label])), J = /* @__PURE__ */ new Set(["rectangle", "ellipse", "triangle", "star", "text", "note"]), ee = [
    {
      id: "sarah",
      name: "Sarah Mitchell",
      photo: `${Q}sarah-mitchell.svg`,
      text: "Lead the deck with this one?",
      x: 33,
      y: 13
    },
    {
      id: "marcus",
      name: "Marcus Reed",
      photo: `${Q}marcus-reed.svg`,
      text: "Warmer grade, please",
      x: 86,
      y: 15
    }
  ], et = (e2) => {
    let t2 = Math.abs(e2) - 120;
    return t2 <= 0 ? e2 : Math.sign(e2) * (120 + 80 * t2 * 0.55 / (80 + 0.55 * t2));
  }, ei = (e2) => ({
    move: "Move is active. Pick a tool from the dock, or press its key.",
    hand: "Drag the board to pan around it.",
    text: "Click the board to add a text label.",
    note: "Click the board to drop a sticky note.",
    comment: "Click the board to leave a comment, or click a pin to resolve it."
  })[e2] ?? `Click the board to place a ${U[e2]?.toLowerCase()}.`;
  function ea({ kind: e2 }) {
    switch (e2) {
      case "rectangle":
        return (0, a.jsx)("svg", {
          viewBox: "0 0 96 64",
          "aria-hidden": "true",
          children: (0, a.jsx)("rect", {
            x: "1",
            y: "1",
            width: "94",
            height: "62",
            rx: "9"
          })
        });
      case "ellipse":
        return (0, a.jsx)("svg", {
          viewBox: "0 0 76 76",
          "aria-hidden": "true",
          children: (0, a.jsx)("circle", { cx: "38", cy: "38", r: "37" })
        });
      case "triangle":
        return (0, a.jsx)("svg", {
          viewBox: "0 0 84 74",
          "aria-hidden": "true",
          children: (0, a.jsx)("path", {
            d: "M37.2 5.1a5.5 5.5 0 0 1 9.6 0l34.5 60.2a5.5 5.5 0 0 1-4.8 8.2H7.5a5.5 5.5 0 0 1-4.8-8.2Z"
          })
        });
      case "star":
        return (0, a.jsx)("svg", {
          viewBox: "0 0 80 77",
          "aria-hidden": "true",
          children: (0, a.jsx)("path", {
            d: "M37.3 3.3a3 3 0 0 1 5.4 0l9.4 19.1a3 3 0 0 0 2.3 1.6l21 3.1a3 3 0 0 1 1.7 5.1L61.9 47a3 3 0 0 0-.9 2.7l3.6 20.9a3 3 0 0 1-4.4 3.2l-18.8-9.9a3 3 0 0 0-2.8 0l-18.8 9.9a3 3 0 0 1-4.4-3.2L19 49.7a3 3 0 0 0-.9-2.7L2.9 32.2a3 3 0 0 1 1.7-5.1l21-3.1a3 3 0 0 0 2.3-1.6Z"
          })
        });
      case "text":
        return "Fall trip, week one";
      case "note":
        return "Book the Lake Agnes tea house";
    }
  }
  function en() {
    let e2 = !!(0, o.I)(), [t2, i2] = (0, n.useState)(q), [m2, h2] = (0, n.useState)("move"), [f2, g2] = (0, n.useState)([]), [x2, y2] = (0, n.useState)(null), [b2, k2] = (0, n.useState)(ee), _2 = (0, s.d)(0), v2 = (0, s.d)(0), w2 = (0, l.G)(() => `translate3d(${_2.get()}px, ${v2.get()}px, 0)`), [$2, L2] = (0, n.useState)(false);
    (0, c.L)(_2, "change", (e3) => {
      !$2 && Math.abs(e3) > 0.5 && L2(true);
    }), (0, c.L)(v2, "change", (e3) => {
      !$2 && Math.abs(e3) > 0.5 && L2(true);
    });
    let A2 = (0, s.d)(0), S2 = (0, s.d)(0), T2 = (0, l.G)(() => `translate3d(${A2.get()}px, ${S2.get()}px, 0)`), [C2, R2] = (0, n.useState)(false), [P2, M2] = (0, n.useState)(ei("move")), E2 = (0, n.useRef)(0), D2 = (0, n.useRef)(null), Y2 = 0 === f2.length && b2.length === ee.length && !$2 && t2 === q && "move" === m2, B2 = t2.map((e3) => "comment" === e3.id ? { ...e3, badge: b2.length } : e3), I2 = J.has(m2) && C2;
    function z2(e3) {
      h2(e3), M2(ei(e3));
    }
    function K2(t3) {
      let i3 = D2.current;
      if (!i3 || i3.id !== t3.pointerId) return;
      D2.current = null;
      let a2 = i3.samples.filter((e3) => t3.timeStamp - e3.t < 100), n2 = a2[0], r2 = a2[a2.length - 1], o2 = n2 && r2 && r2.t > n2.t && t3.timeStamp - r2.t < 60 ? (r2.t - n2.t) / 1e3 : 0, s2 = o2 ? (r2.x - n2.x) / o2 : 0, l2 = o2 ? (r2.y - n2.y) / o2 : 0, c2 = (t4, i4) => {
        let a3 = Math.max(
          -120,
          Math.min(
            120,
            t4.get() + ((e3, t5 = 0.997) => e3 / 1e3 * t5 / (1 - t5))(i4)
          )
        );
        e2 ? t4.jump(a3) : (0, d.i)(t4, a3, {
          type: "spring",
          velocity: i4,
          stiffness: 170,
          damping: 26,
          restDelta: 0.1
        });
      };
      c2(_2, s2), c2(v2, l2);
    }
    let O2 = e2 ? { duration: 0.12 } : N.T.spring.snappy, W2 = {
      duration: e2 ? 0.1 : N.T.duration.fast,
      ease: [...N.T.ease.standard]
    }, V2 = e2 ? { opacity: 0 } : { opacity: 0.5, scale: 0.94 }, F2 = e2 ? { opacity: 0 } : { opacity: 0, scale: 0.85 };
    return (0, a.jsx)("div", {
      className: X().demo,
      onKeyDown: function(e3) {
        if (e3.metaKey || e3.ctrlKey || e3.altKey) return;
        if ("Escape" === e3.key && null !== x2) return void y2(null);
        let t3 = H[e3.key.toLowerCase()];
        t3 && (e3.preventDefault(), z2(t3));
      },
      children: (0, a.jsxs)("div", {
        className: X().board,
        "data-tool": m2,
        onPointerDown: function(e3) {
          if (0 !== e3.button || e3.target.closest("button, [data-dock]")) return;
          let t3 = e3.currentTarget.getBoundingClientRect(), i3 = (e3.clientX - t3.left - _2.get()) / t3.width * 100, a2 = (e3.clientY - t3.top - v2.get()) / t3.height * 100;
          if ("hand" === m2) {
            if (D2.current) return;
            e3.currentTarget.setPointerCapture(e3.pointerId), _2.stop(), v2.stop(), D2.current = {
              id: e3.pointerId,
              x: e3.clientX,
              y: e3.clientY,
              from: { x: _2.get(), y: v2.get() },
              samples: [{ t: e3.timeStamp, x: e3.clientX, y: e3.clientY }]
            };
            return;
          }
          if ("move" === m2) {
            let t4 = e3.target.closest("[data-object]");
            y2(t4 ? Number(t4.dataset.object) : null);
            return;
          }
          E2.current += 1, "comment" === m2 ? (k2((e4) => [
            ...e4,
            {
              id: `you-${E2.current}`,
              name: "Jake Miller",
              photo: `${Q}jake-miller.svg`,
              text: "New comment",
              x: i3,
              y: a2
            }
          ]), M2("Comment added. Click a pin to resolve it.")) : (g2((e4) => [...e4, { id: E2.current, kind: m2, x: i3, y: a2 }]), y2(E2.current), M2(`Placed a ${U[m2].toLowerCase()}. Back to Move.`)), h2("move");
        },
        onPointerMove: function(e3) {
          let t3 = e3.currentTarget.getBoundingClientRect(), i3 = !!e3.target.closest("[data-dock], button");
          "mouse" === e3.pointerType && (A2.set(e3.clientX - t3.left), S2.set(e3.clientY - t3.top), C2 === i3 && R2(!i3));
          let a2 = D2.current;
          a2 && a2.id === e3.pointerId && (_2.set(et(a2.from.x + e3.clientX - a2.x)), v2.set(et(a2.from.y + e3.clientY - a2.y)), a2.samples.push({ t: e3.timeStamp, x: e3.clientX, y: e3.clientY }), a2.samples.length > 8 && a2.samples.shift());
        },
        onPointerUp: K2,
        onPointerCancel: K2,
        onPointerLeave: () => R2(false),
        children: [
          (0, a.jsxs)(u.PY1.div, {
            className: X().content,
            style: { transform: w2 },
            children: [
              (0, a.jsxs)("figure", {
                className: X().frame,
                style: { left: "8%", top: "12%" },
                children: [
                  (0, a.jsx)("span", {
                    className: X().photo,
                    children: (0, a.jsx)(r.default, {
                      src: "media/specials/cover-flow-lake-louise.jpg",
                      alt: "Lake Louise under a clear sky",
                      fill: true,
                      sizes: "200px",
                      draggable: false
                    })
                  }),
                  (0, a.jsx)("figcaption", {
                    children: "Lake Louise, sunrise"
                  })
                ]
              }),
              (0, a.jsxs)("figure", {
                className: X().frame,
                style: { left: "56%", top: "16%" },
                "data-wide": "",
                children: [
                  (0, a.jsx)("span", {
                    className: X().photo,
                    children: (0, a.jsx)(r.default, {
                      src: "media/specials/cover-flow-ocean-beach.jpg",
                      alt: "Cliffs above the Pacific at dusk",
                      fill: true,
                      sizes: "240px",
                      draggable: false
                    })
                  }),
                  (0, a.jsx)("figcaption", { children: "Ocean Beach, dusk" })
                ]
              }),
              (0, a.jsxs)(p.N, {
                initial: false,
                children: [
                  f2.map(
                    (t3) => (0, a.jsxs)(
                      u.PY1.div,
                      {
                        className: X().placed,
                        "data-kind": t3.kind,
                        "data-object": t3.id,
                        style: { left: `${t3.x}%`, top: `${t3.y}%` },
                        initial: V2,
                        animate: { opacity: 1, scale: 1 },
                        exit: { opacity: 0, transition: W2 },
                        transition: e2 ? { duration: 0.12 } : {
                          ...N.T.spring.snappy,
                          opacity: { duration: 0.14 }
                        },
                        children: [
                          (0, a.jsx)(ea, { kind: t3.kind }),
                          (0, a.jsx)(p.N, {
                            children: x2 === t3.id && (0, a.jsxs)(
                              u.PY1.span,
                              {
                                className: X().selection,
                                "aria-hidden": "true",
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: {
                                  opacity: 0,
                                  transition: { duration: 0.1 }
                                },
                                transition: {
                                  duration: 0.16,
                                  delay: 0.08 * !e2
                                },
                                children: [
                                  (0, a.jsx)("i", { "data-corner": "tl" }),
                                  (0, a.jsx)("i", { "data-corner": "tr" }),
                                  (0, a.jsx)("i", { "data-corner": "bl" }),
                                  (0, a.jsx)("i", { "data-corner": "br" })
                                ]
                              },
                              "selection"
                            )
                          })
                        ]
                      },
                      t3.id
                    )
                  ),
                  b2.map(
                    (t3) => (0, a.jsxs)(
                      u.PY1.button,
                      {
                        type: "button",
                        className: X().pin,
                        "data-flip": t3.x > 55 ? "" : void 0,
                        style: { left: `${t3.x}%`, top: `${t3.y}%` },
                        "aria-label": `${t3.name}: ${t3.text}. Resolve`,
                        initial: F2,
                        animate: { opacity: 1, scale: 1 },
                        exit: e2 ? { opacity: 0 } : {
                          opacity: 0,
                          scale: 0.6,
                          transition: { duration: N.T.duration.exit }
                        },
                        transition: O2,
                        onClick: () => {
                          k2((e3) => e3.filter((e4) => e4.id !== t3.id)), M2(
                            `Resolved ${t3.id.startsWith("you") ? "your comment" : `${t3.name.split(" ")[0]}'s comment`}.`
                          );
                        },
                        children: [
                          (0, a.jsx)(r.default, {
                            src: t3.photo,
                            alt: "",
                            width: 24,
                            height: 24,
                            draggable: false
                          }),
                          (0, a.jsx)("span", {
                            className: X().bubble,
                            children: t3.text
                          })
                        ]
                      },
                      t3.id
                    )
                  )
                ]
              })
            ]
          }),
          (0, a.jsx)(p.N, {
            children: I2 && (0, a.jsx)(
              u.PY1.div,
              {
                className: X().ghost,
                style: { transform: T2 },
                "aria-hidden": "true",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0, transition: { duration: 0 } },
                transition: W2,
                children: (0, a.jsx)("div", {
                  className: X().placed,
                  "data-kind": m2,
                  children: (0, a.jsx)(ea, { kind: m2 })
                })
              },
              m2
            )
          }),
          (0, a.jsx)(p.N, {
            children: !Y2 && (0, a.jsx)(
              u.PY1.button,
              {
                type: "button",
                className: X().reset,
                onClick: function() {
                  i2(q), h2("move"), g2([]), y2(null), k2(ee), e2 ? (_2.jump(0), v2.jump(0)) : ((0, d.i)(_2, 0, N.T.spring.smooth), (0, d.i)(v2, 0, N.T.spring.smooth)), L2(false), M2("Board reset");
                },
                "aria-label": "Reset board",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: W2,
                children: (0, a.jsx)(j.A, {
                  size: 15,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              },
              "reset"
            )
          }),
          (0, a.jsx)("div", {
            className: X().dock,
            "data-dock": "",
            children: (0, a.jsx)(G, {
              items: B2,
              value: m2,
              label: "Board tools",
              onValueChange: z2,
              onItemsChange: (e3) => i2(e3.map((e4) => q.find((t3) => t3.id === e4.id) ?? e4))
            })
          }),
          (0, a.jsx)("p", {
            className: X().srOnly,
            role: "status",
            "aria-live": "polite",
            children: P2
          })
        ]
      })
    });
  }
  let er = en;
}

__m(__module,__exports,__require);
}