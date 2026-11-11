function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { SunburstDemo: () => Y, default: () => U });
  var a = r(95155), n = r(12115), l = r(80642), s = r(25354), i = r(28245), u = r(92171), o = r(18310), c = r(61792), d = r(22535), p = r(7770), h = r(44504), m = r.n(h);
  let { spring: b, ease: f, blur: x } = p.T, _ = ({ visualDuration: e2, bounce: t2 }, r2 = 5e-4) => {
    let a2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: a2 * a2,
      damping: 2 * (1 - t2) * a2,
      restDelta: r2,
      restSpeed: 2 * r2
    };
  }, g = _({ visualDuration: 0.62, bounce: 0.06 }), v = _({ visualDuration: 0.9, bounce: 0 }), y = _(b.snappy, 0.01), j = { stiffness: y.stiffness, damping: y.damping, restDelta: 0.01 }, $ = (e2) => e2.branch < 4 ? `var(--series-${e2.branch + 1})` : "color-mix(in oklab, var(--foreground) 34%, var(--surface))", N = (e2) => `color-mix(in oklab, ${$(e2)} ${Math.round(100 * Math.pow(0.7, Math.max(0, e2.depth - 1)))}%, var(--surface))`, w = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }), M = new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 1
  }), L = (e2, t2, r2) => Math.min(r2, Math.max(t2, e2)), k = 2 * Math.PI, S = {
    hidden: (e2) => ({
      opacity: 0,
      y: `${0.35 * e2}em`,
      filter: `blur(${x.soft}px)`
    }),
    shown: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.24, ease: [...f.enter] }
    },
    gone: (e2) => ({
      opacity: 0,
      y: `${-0.35 * e2}em`,
      filter: `blur(${x.subtle}px)`,
      transition: { duration: 0.14, ease: [...f.standard] }
    })
  }, P = {
    hidden: { opacity: 0 },
    shown: { opacity: 1, transition: { duration: 0.15 } },
    gone: { opacity: 0, transition: { duration: 0.1 } }
  };
  function A({ text: e2, reduced: t2 }) {
    return (0, a.jsx)("span", {
      className: m().swap,
      children: (0, a.jsx)(l.N, {
        mode: "popLayout",
        initial: false,
        custom: 1,
        children: (0, a.jsx)(
          s.PY1.span,
          {
            className: m().swapText,
            custom: 1,
            variants: t2 ? P : S,
            initial: "hidden",
            animate: "shown",
            exit: "gone",
            children: e2
          },
          e2
        )
      })
    });
  }
  let R = (e2) => Number(e2.replace(/[^\d.-]/g, "")) || 0;
  function C({ text: e2, reduced: t2 }) {
    let r2 = (0, n.useRef)(null), o2 = (0, i.d)("auto"), [c2, d2] = (0, n.useState)({ text: e2, direction: 1 });
    c2.text !== e2 && d2({ text: e2, direction: R(e2) < R(c2.text) ? -1 : 1 }), (0, n.useLayoutEffect)(() => {
      let e3 = r2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let a2 = null, n2 = new ResizeObserver(() => {
        let r3 = e3.offsetWidth;
        null === a2 || a2 === e3.textContent || t2 ? o2.jump(r3) : (0, u.i)(o2, r3, b.morph), a2 = e3.textContent;
      });
      return n2.observe(e3), () => n2.disconnect();
    }, [t2, o2]);
    let p2 = [...e2], h2 = t2 ? P : S;
    return (0, a.jsxs)(s.PY1.span, {
      className: m().roll,
      style: { width: o2 },
      children: [
        (0, a.jsx)("span", {
          ref: r2,
          className: m().sizer,
          "aria-hidden": "true",
          children: e2
        }),
        (0, a.jsx)("span", {
          className: m().digits,
          children: (0, a.jsx)(l.N, {
            mode: "popLayout",
            initial: false,
            custom: c2.direction,
            anchorX: "right",
            children: p2.map(
              (e3, t3) => (0, a.jsx)(
                s.PY1.span,
                {
                  className: m().digit,
                  custom: c2.direction,
                  variants: h2,
                  initial: "hidden",
                  animate: "shown",
                  exit: "gone",
                  children: (0, a.jsx)(l.N, {
                    mode: "popLayout",
                    initial: false,
                    custom: c2.direction,
                    anchorX: "right",
                    children: (0, a.jsx)(
                      s.PY1.span,
                      {
                        className: m().digit,
                        custom: c2.direction,
                        variants: h2,
                        initial: "hidden",
                        animate: "shown",
                        exit: "gone",
                        children: e3
                      },
                      e3
                    )
                  })
                },
                `p${p2.length - t3}`
              )
            )
          })
        })
      ]
    });
  }
  let I = () => () => {
  };
  function F({
    data: e2,
    label: t2,
    formatValue: r2 = (e3) => w.format(e3),
    depth: p2 = 3,
    size: h2 = 340,
    focus: x2,
    defaultFocus: _2,
    onFocusChange: y2,
    legend: S2 = true,
    emptyLabel: P2 = "No data yet",
    ref: R2,
    className: z2
  }) {
    let E2, W2 = (E2 = (0, n.useSyncExternalStore)(
      I,
      () => true,
      () => false
    ), !!(0, o.I)() && E2), D2 = (0, n.useRef)(null), O2 = (0, n.useRef)(null), B2 = (0, n.useRef)(null), T2 = (0, n.useRef)(/* @__PURE__ */ new Map()), V2 = (0, n.useRef)(/* @__PURE__ */ new Map());
    (0, n.useImperativeHandle)(R2, () => D2.current);
    let Y2 = (0, c.W)(D2, { once: true, amount: 0.3 }), [U2, q] = (0, n.useState)(0);
    (0, n.useLayoutEffect)(() => {
      let e3 = O2.current;
      if (!e3 || (q(e3.clientWidth), "u" < typeof ResizeObserver)) return;
      let t3 = new ResizeObserver(() => q(e3.clientWidth));
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    let H = JSON.stringify(e2), X = (0, n.useMemo)(() => {
      let t3, r3, a2;
      return t3 = /* @__PURE__ */ new Map(), r3 = (e3) => e3.children?.length ? e3.children.reduce((e4, t4) => e4 + r3(t4), 0) : Math.max(0, e3.value ?? 0), (a2 = (e3, n2, l2, s2, i2, u2, o2) => {
        let c2 = r3(e3), d2 = {
          id: e3.id,
          label: e3.label,
          value: c2,
          depth: n2,
          x0: l2,
          x1: l2 + s2,
          parent: i2,
          children: (e3.children ?? []).map((e4) => e4.id),
          branch: u2,
          path: [...o2, e3.label]
        };
        t3.set(e3.id, d2);
        let p3 = l2;
        (e3.children ?? []).forEach((t4, l3) => {
          let i3 = c2 ? r3(t4) / c2 * s2 : 0;
          a2(t4, n2 + 1, p3, i3, e3.id, 0 === n2 ? l3 : u2, 0 === n2 ? [] : d2.path), p3 += i3;
        });
      })(e2, 0, 0, 1, null, 0, []), t3;
    }, [H]), Z = X.get(e2.id), [J, K] = (0, n.useState)(_2 ?? e2.id), Q = x2 ?? J, G = X.get(Q) && X.get(Q).children.length ? X.get(Q) : Z, ee = (e3) => {
      void 0 === x2 && K(e3), y2?.(e3);
    }, [et, er] = (0, n.useState)(null), [ea, en] = (0, n.useState)(null), el = et ? X.get(et) ?? null : null, es = el && el.depth > G.depth && el.depth <= G.depth + p2 && el.x0 >= G.x0 - 1e-9 && el.x1 <= G.x1 + 1e-9 ? el : null, ei = (0, n.useMemo)(
      () => [...X.values()].filter((e3) => e3.depth > 0),
      [X]
    ), eu = (0, n.useRef)(/* @__PURE__ */ new Map()), eo = h2 / 2, ec = eo - 2, ed = 0.36 * ec, ep = (e3) => e3.children.length ? 1 + Math.max(...e3.children.map((e4) => ep(X.get(e4)))) : 0, eh = Math.max(1, Math.min(p2, ep(G))), em = (0, n.useRef)(eh), eb = (0, n.useCallback)(
      (e3, t3 = em.current) => ed + (ec - ed) / t3 * (e3 - 1),
      [ed, ec]
    ), ef = (0, n.useCallback)((e3, t3) => {
      let r3 = t3.x1 - t3.x0 || 1;
      return {
        a0: L((e3.x0 - t3.x0) / r3, 0, 1),
        a1: L((e3.x1 - t3.x0) / r3, 0, 1),
        d: e3.depth - t3.depth
      };
    }, []), ex = (0, n.useMemo)(() => {
      let e3 = /* @__PURE__ */ new Set(), t3 = es ?? void 0;
      for (; t3 && t3.depth > G.depth; )
        e3.add(t3.id), t3 = t3.parent ? X.get(t3.parent) : void 0;
      return e3;
    }, [es, G, X]), e_ = (0, n.useCallback)(() => {
      for (let e3 of ei) {
        let t3 = T2.current.get(e3.id), r3 = eu.current.get(e3.id);
        if (!t3 || !r3) continue;
        let a2 = L(r3.d, 0, 1) * L(em.current + 1 - r3.d, 0, 1), n2 = Math.max(ed, eb(r3.d)), l2 = Math.max(n2, Math.min(ec, eb(r3.d + 1)));
        t3.setAttribute(
          "d",
          a2 > 0.01 ? (function(e4, t4, r4, a3, n3) {
            if (r4 - t4 < 0.5) return "";
            let l3 = 1 / Math.max(t4, 1) / k, s3 = 1 / r4 / k, i3 = n3 - a3 >= 0.9999, u3 = i3 ? a3 : a3 + s3, o3 = i3 ? n3 : n3 - s3, c3 = i3 ? a3 : a3 + l3, d3 = i3 ? n3 : n3 - l3;
            if (o3 - u3 <= 1e-4 || !i3 && d3 - c3 <= 0) return "";
            let p4 = (t5, r5) => {
              let a4 = r5 * k - Math.PI / 2;
              return `${(e4 + t5 * Math.cos(a4)).toFixed(2)} ${(e4 + t5 * Math.sin(a4)).toFixed(2)}`;
            };
            return i3 ? `M${p4(r4, 0)}A${r4} ${r4} 0 1 1 ${p4(r4, 0.49999)}A${r4} ${r4} 0 1 1 ${p4(r4, 0.99999)}ZM${p4(t4, 0)}A${t4} ${t4} 0 1 0 ${p4(t4, 0.50001)}A${t4} ${t4} 0 1 0 ${p4(t4, 1e-5)}Z` : `M${p4(r4, u3)}A${r4.toFixed(2)} ${r4.toFixed(2)} 0 ${+(o3 - u3 > 0.5)} 1 ${p4(r4, o3)}L${p4(t4, d3)}A${t4.toFixed(2)} ${t4.toFixed(2)} 0 ${+(d3 - c3 > 0.5)} 0 ${p4(t4, c3)}Z`;
          })(eo, n2 + 1, l2 - 1, r3.a0, r3.a1) : ""
        ), t3.style.opacity = String(a2), t3.style.pointerEvents = a2 > 0.6 && r3.a1 - r3.a0 > 2e-3 ? "auto" : "none";
        let s2 = V2.current.get(e3.id);
        if (!s2) continue;
        let i2 = (r3.a0 + r3.a1) / 2, u2 = i2 * k - Math.PI / 2, o2 = (n2 + l2) / 2, c2 = eo + o2 * Math.cos(u2), d2 = eo + o2 * Math.sin(u2), p3 = 360 * i2;
        s2.setAttribute("x", c2.toFixed(1)), s2.setAttribute("y", d2.toFixed(1)), s2.setAttribute(
          "transform",
          `rotate(${(p3 > 90 && p3 < 270 ? p3 - 180 : p3).toFixed(1)} ${c2.toFixed(1)} ${d2.toFixed(1)})`
        );
        let h3 = (r3.a1 - r3.a0) * k * o2, m2 = (s2.getComputedTextLength?.() ?? 40) + 14;
        s2.style.opacity = a2 > 0.9 && h3 >= m2 && l2 - n2 >= 18 ? "1" : "0";
      }
    }, [eo, ei, ed, ec, eb]), eg = (0, n.useRef)(null), ev = Y2 || W2;
    (0, n.useEffect)(() => {
      if (!ev) return;
      let e3 = new Map(ei.map((e4) => [e4.id, ef(e4, G)])), t3 = 0 === eu.current.size, r3 = new Map(
        ei.map((r4) => {
          let a3 = eu.current.get(r4.id), n3 = e3.get(r4.id);
          return [
            r4.id,
            a3 ?? (t3 ? { a0: 0, a1: 0, d: n3.d } : { a0: n3.a0, a1: n3.a0, d: n3.d })
          ];
        })
      );
      for (let e4 of [...eu.current.keys()]) X.has(e4) || eu.current.delete(e4);
      eg.current?.stop();
      let a2 = em.current, n2 = () => {
        for (let [t4, r4] of (em.current = eh, e3)) eu.current.set(t4, r4);
        e_();
      };
      return W2 ? void n2() : (eg.current = (0, u.i)(0, 1, {
        ...t3 ? v : g,
        onUpdate: (t4) => {
          for (let [n3, l2] of (em.current = a2 + (eh - a2) * t4, e3)) {
            let e4 = r3.get(n3);
            eu.current.set(n3, {
              a0: e4.a0 + (l2.a0 - e4.a0) * t4,
              a1: e4.a1 + (l2.a1 - e4.a1) * t4,
              d: e4.d + (l2.d - e4.d) * t4
            });
          }
          e_();
        },
        onComplete: n2
      }), () => eg.current?.stop());
    }, [ev, G.id, X, W2, eh]), (0, n.useLayoutEffect)(e_);
    let ey = (0, i.d)(0), ej = (0, i.d)(0), e$ = (0, d.z)(ey, j), eN = (0, d.z)(ej, j), ew = (0, n.useRef)(false);
    (0, n.useLayoutEffect)(() => {
      let e3 = B2.current, t3 = O2.current;
      if (!e3 || !t3 || !es) {
        ew.current = false;
        return;
      }
      let r3 = t3.clientWidth, a2 = t3.clientHeight, n2 = r3 / h2, l2 = ea?.x, s2 = ea?.y;
      if (void 0 === l2 || void 0 === s2) {
        let e4 = ef(es, G), t4 = (e4.a0 + e4.a1) / 2 * k - Math.PI / 2, r4 = (eb(e4.d, eh) + eb(e4.d + 1, eh)) / 2;
        l2 = (eo + r4 * Math.cos(t4)) * n2, s2 = (eo + r4 * Math.sin(t4)) * n2;
      }
      let i2 = e3.offsetWidth, u2 = e3.offsetHeight, o2 = l2 + 14;
      o2 + i2 > r3 && (o2 = l2 - 14 - i2);
      let c2 = s2 - u2 - 14;
      c2 < 0 && (c2 = s2 + 14), ey.set(L(o2, 0, Math.max(0, r3 - i2))), ej.set(L(c2, 0, Math.max(0, a2 - u2))), (!ew.current || W2) && (e$.jump(ey.get()), eN.jump(ej.get())), ew.current = true;
    });
    let eM = G.children.map((e3) => X.get(e3)).filter(Boolean), eL = !Z.value, ek = (0, n.useRef)(null), eS = (0, n.useRef)(null), eP = (0, i.d)("auto");
    (0, n.useLayoutEffect)(() => {
      let e3 = eS.current, t3 = ek.current;
      if (!e3 || !t3 || "u" < typeof ResizeObserver) return;
      let r3 = false, a2 = new ResizeObserver(() => {
        let a3 = e3.offsetHeight;
        O2.current && t3.offsetLeft < O2.current.offsetLeft + O2.current.offsetWidth ? r3 && !W2 && "auto" !== eP.get() ? (0, u.i)(eP, a3, b.smooth) : eP.jump(a3) : eP.jump("auto"), r3 = true;
      });
      return a2.observe(e3), () => a2.disconnect();
    }, [W2, eP, S2, eL]);
    let eA = [];
    for (let e3 = G; e3; e3 = e3.parent ? X.get(e3.parent) : void 0) eA.unshift(e3);
    let eR = es ?? G, eC = (e3) => e3.parent ? X.get(e3.parent) : e3, eI = (e3, t3) => t3.value ? e3.value / t3.value : 0, eF = (e3) => `${e3.path.join(", ")}, ${r2(e3.value)}, ${M.format(eI(e3, eC(e3)))} of ${eC(e3).label}`;
    return (0, a.jsxs)("figure", {
      ref: D2,
      className: [m().figure, z2].filter(Boolean).join(" "),
      "aria-label": t2,
      "data-legend": S2 || void 0,
      children: [
        (0, a.jsx)("nav", {
          className: m().crumbs,
          "aria-label": `${t2} path`,
          children: (0, a.jsx)("ol", {
            className: m().crumbList,
            children: (0, a.jsx)(l.N, {
              initial: false,
              mode: "popLayout",
              children: eA.map(
                (e3, t3) => (0, a.jsxs)(
                  s.PY1.li,
                  {
                    className: m().crumb,
                    layout: !W2 && "position",
                    initial: { opacity: 0, x: W2 ? 0 : -6 },
                    animate: { opacity: 1, x: 0 },
                    exit: {
                      opacity: 0,
                      x: W2 ? 0 : -6,
                      transition: { duration: 0.12 }
                    },
                    transition: { ...b.smooth },
                    children: [
                      t3 > 0 && (0, a.jsx)("span", {
                        className: m().crumbSep,
                        "aria-hidden": "true",
                        children: "/"
                      }),
                      t3 < eA.length - 1 ? (0, a.jsx)("button", {
                        type: "button",
                        className: m().crumbButton,
                        onClick: () => ee(e3.id),
                        children: e3.label
                      }) : (0, a.jsx)("span", {
                        className: m().crumbCurrent,
                        "aria-current": "location",
                        children: e3.label
                      })
                    ]
                  },
                  e3.id
                )
              )
            })
          })
        }),
        (0, a.jsxs)("div", {
          className: m().body,
          children: [
            (0, a.jsxs)("div", {
              ref: O2,
              className: m().ring,
              style: { width: h2 },
              "data-active": !!es || void 0,
              role: "group",
              tabIndex: eL ? -1 : 0,
              "aria-roledescription": "sunburst",
              "aria-label": `${t2}, ${G.label}. Arrow keys move between segments, Enter zooms in, Escape zooms out.`,
              onKeyDown: (e3) => {
                let t3 = es?.parent ? X.get(es.parent).children.map((e4) => X.get(e4)) : eM, r3 = es ? t3.findIndex((e4) => e4.id === es.id) : -1, a2 = (t4) => {
                  t4 && (e3.preventDefault(), en(null), er(t4));
                };
                "ArrowRight" === e3.key ? a2(t3[(r3 + 1) % t3.length]?.id ?? eM[0]?.id) : "ArrowLeft" === e3.key ? a2(
                  t3[(r3 - 1 + t3.length) % t3.length]?.id ?? eM[eM.length - 1]?.id
                ) : "ArrowDown" === e3.key ? a2(
                  es && es.children.length && es.depth < G.depth + p2 ? es.children[0] : es ? void 0 : eM[0]?.id
                ) : "ArrowUp" === e3.key ? a2(
                  es?.parent && es.parent !== G.id ? es.parent : void 0
                ) : "Enter" === e3.key || " " === e3.key ? es?.children.length && (e3.preventDefault(), ee(es.id), er(es.children[0])) : ("Escape" === e3.key || "Backspace" === e3.key) && (G.parent ? (e3.preventDefault(), ee(G.parent), er(G.id)) : et && (e3.preventDefault(), er(null)));
              },
              onBlur: () => er(null),
              onPointerLeave: () => {
                er(null), en(null);
              },
              onFocus: (e3) => {
                e3.currentTarget.matches(":focus-visible") && !et && er(eM[0]?.id ?? null);
              },
              children: [
                (0, a.jsxs)("svg", {
                  className: m().svg,
                  viewBox: `0 0 ${h2} ${h2}`,
                  "aria-hidden": "true",
                  focusable: "false",
                  children: [
                    (0, a.jsx)("circle", {
                      className: m().track,
                      cx: eo,
                      cy: eo,
                      r: (ed + ec) / 2,
                      strokeWidth: ec - ed
                    }),
                    ei.map(
                      (e3) => (0, a.jsx)(
                        "path",
                        {
                          ref: (t3) => {
                            t3 ? T2.current.set(e3.id, t3) : T2.current.delete(e3.id);
                          },
                          className: m().arc,
                          "data-active": es?.id === e3.id || void 0,
                          "data-lineage": ex.has(e3.id) && es?.id !== e3.id || void 0,
                          "data-dim": null !== es && !ex.has(e3.id) || void 0,
                          style: { "--fill": N(e3), "--hue": $(e3) },
                          onPointerMove: (t3) => ((e4, t4) => {
                            if ("mouse" !== e4.pointerType) return;
                            let r3 = O2.current?.getBoundingClientRect();
                            r3 && en({
                              x: e4.clientX - r3.left,
                              y: e4.clientY - r3.top
                            }), er(t4);
                          })(t3, e3.id),
                          onClick: () => {
                            e3.children.length ? ee(e3.id) : e3.parent && e3.parent !== G.id && ee(e3.parent);
                          }
                        },
                        e3.id
                      )
                    ),
                    ei.map(
                      (e3) => (0, a.jsx)(
                        "text",
                        {
                          ref: (t3) => {
                            t3 ? V2.current.set(e3.id, t3) : V2.current.delete(e3.id);
                          },
                          className: m().arcLabel,
                          "data-dim": null !== es && !ex.has(e3.id) || void 0,
                          fontSize: U2 ? 11 * h2 / U2 : 11,
                          textAnchor: "middle",
                          dominantBaseline: "central",
                          children: e3.label
                        },
                        e3.id
                      )
                    )
                  ]
                }),
                (0, a.jsxs)("button", {
                  type: "button",
                  className: m().center,
                  style: { width: `${(2 * ed - 8) / h2 * 100}%` },
                  disabled: !G.parent,
                  onClick: () => G.parent && ee(G.parent),
                  "aria-label": G.parent ? `Back to ${X.get(G.parent).label}` : G.label,
                  tabIndex: -1,
                  children: [
                    (0, a.jsx)("span", {
                      className: m().centerLabel,
                      children: (0, a.jsx)(A, {
                        text: eL ? P2 : eR.label,
                        reduced: W2
                      })
                    }),
                    !eL && (0, a.jsx)("span", {
                      className: m().centerValue,
                      children: (0, a.jsx)(C, {
                        text: r2(eR.value),
                        reduced: W2
                      })
                    }),
                    !eL && (0, a.jsx)("span", {
                      className: m().centerMeta,
                      children: (0, a.jsx)(A, {
                        text: es ? `${M.format(eI(es, G))} of ${G.parent ? G.label : "total"}` : G.parent ? `${M.format(eI(G, Z))} of total` : `${eM.length} ${1 === eM.length ? "group" : "groups"}`,
                        reduced: W2
                      })
                    })
                  ]
                }),
                (0, a.jsx)(s.PY1.div, {
                  ref: B2,
                  className: m().tooltip,
                  style: { x: W2 ? ey : e$, y: W2 ? ej : eN },
                  "aria-hidden": "true",
                  children: es && (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("p", {
                        className: m().tipTitle,
                        children: es.path.slice(0, -1).join(" / ") || Z.label
                      }),
                      (0, a.jsxs)("p", {
                        className: m().tipValue,
                        children: [
                          (0, a.jsx)("span", {
                            className: m().tipName,
                            children: es.label
                          }),
                          (0, a.jsx)("span", {
                            className: m().tipAmount,
                            children: r2(es.value)
                          })
                        ]
                      }),
                      (0, a.jsx)("p", {
                        className: m().tipNote,
                        children: eC(es).id === Z.id ? `${M.format(eI(es, Z))} of total` : `${M.format(eI(es, eC(es)))} of ${eC(es).label}, ${M.format(eI(es, Z))} of total`
                      })
                    ]
                  })
                })
              ]
            }),
            S2 && !eL && (0, a.jsx)(s.PY1.div, {
              ref: ek,
              className: m().legendBox,
              style: { height: eP },
              children: (0, a.jsx)("ul", {
                ref: eS,
                className: m().legend,
                "aria-label": `${G.label}, parts`,
                children: (0, a.jsx)(l.N, {
                  initial: false,
                  mode: "popLayout",
                  children: eM.map(
                    (e3, t3) => (0, a.jsx)(
                      s.PY1.li,
                      {
                        layout: !W2 && "position",
                        initial: { opacity: 0, y: 6 * !W2 },
                        animate: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: W2 ? 0 : 0.03 * t3,
                            duration: 0.24,
                            ease: [...f.enter]
                          }
                        },
                        exit: { opacity: 0, transition: { duration: 0.1 } },
                        children: (0, a.jsxs)("button", {
                          type: "button",
                          className: m().row,
                          "data-active": ex.has(e3.id) || void 0,
                          "data-dim": null !== es && !ex.has(e3.id) || void 0,
                          "aria-label": `${eF(e3)}${e3.children.length ? ". Zoom in" : ""}`,
                          onClick: () => {
                            e3.children.length && ee(e3.id);
                          },
                          onPointerEnter: (t4) => {
                            "mouse" === t4.pointerType && (en(null), er(e3.id));
                          },
                          onPointerLeave: () => er(null),
                          onFocus: (t4) => {
                            t4.currentTarget.matches(":focus-visible") && (en(null), er(e3.id));
                          },
                          onBlur: () => er(null),
                          style: { "--fill": N(e3), "--hue": $(e3) },
                          children: [
                            (0, a.jsx)("span", {
                              className: m().dot,
                              "aria-hidden": "true"
                            }),
                            (0, a.jsx)("span", {
                              className: m().rowLabel,
                              children: e3.label
                            }),
                            (0, a.jsx)("span", {
                              className: m().rowValue,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(C, {
                                text: r2(e3.value),
                                reduced: W2
                              })
                            }),
                            (0, a.jsx)("span", {
                              className: m().rowShare,
                              "aria-hidden": "true",
                              children: M.format(eI(e3, G))
                            })
                          ]
                        })
                      },
                      e3.id
                    )
                  )
                })
              })
            })
          ]
        }),
        (0, a.jsx)("p", {
          className: m().srOnly,
          "aria-live": "polite",
          "aria-atomic": "true",
          children: es ? eF(es) : `${G.label}, ${r2(G.value)}`
        }),
        !eL && (0, a.jsx)("div", {
          className: m().srOnly,
          children: (0, a.jsxs)("table", {
            children: [
              (0, a.jsx)("caption", { children: t2 }),
              (0, a.jsx)("thead", {
                children: (0, a.jsxs)("tr", {
                  children: [
                    (0, a.jsx)("th", { scope: "col", children: "Path" }),
                    (0, a.jsx)("th", { scope: "col", children: "Value" }),
                    (0, a.jsx)("th", {
                      scope: "col",
                      children: "Share of parent"
                    })
                  ]
                })
              }),
              (0, a.jsx)("tbody", {
                children: ei.map(
                  (e3) => (0, a.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, a.jsx)("th", {
                          scope: "row",
                          children: e3.path.join(" / ")
                        }),
                        (0, a.jsx)("td", { children: r2(e3.value) }),
                        (0, a.jsx)("td", {
                          children: M.format(eI(e3, eC(e3)))
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
    });
  }
  var z = r(66558), E = r(97208), W = r.n(E);
  let D = {
    Platform: {
      Compute: {
        "api-cluster": [18240, 18910],
        "batch-workers": [9420, 8160],
        "edge-cache": [4080, 4310]
      },
      Storage: { "object-store": [6210, 6480], backups: [2130, 2190] },
      Network: { "load-balancers": [3320, 3340], egress: [5760, 6420] }
    },
    Data: {
      Warehouse: { "analytics-wh": [22480, 23900], "etl-jobs": [7830, 7120] },
      Streaming: { "event-bus": [6420, 6880], connectors: [2910, 3050] },
      Lake: { "raw-zone": [5120, 5380], "curated-zone": [3690, 3760] }
    },
    ML: {
      Training: { "gpu-train": [24600, 38900], experiments: [5230, 6870] },
      Inference: {
        "model-serving": [11340, 12050],
        embeddings: [3420, 3980]
      }
    },
    Product: {
      Web: { "web-app": [6140, 6260], previews: [2430, 1180] },
      Mobile: { "push-service": [1210, 1260], "api-gateway": [3920, 4010] },
      Search: { "search-index": [4630, 4890] }
    },
    Security: {
      Logging: { "siem-logs": [5440, 5610], audit: [1120, 1140] },
      Scanning: { "code-scan": [1640, 1720], secrets: [420, 430] }
    }
  }, O = (e2) => e2.toLowerCase().replace(/[^a-z0-9]+/g, "-"), B = (e2) => ({
    id: "all",
    label: "All teams",
    children: Object.entries(D).map(([t2, r2]) => ({
      id: O(t2),
      label: t2,
      children: Object.entries(r2).map(([r3, a2]) => ({
        id: `${O(t2)}/${O(r3)}`,
        label: r3,
        children: Object.entries(a2).map(([a3, n2]) => ({
          id: `${O(t2)}/${O(r3)}/${a3}`,
          label: a3,
          value: n2[e2]
        }))
      }))
    }))
  }), T = {
    aug: { tree: B(0), period: "August 2026" },
    sep: { tree: B(1), period: "September 2026" }
  }, V = [
    { value: "aug", label: "Aug" },
    { value: "sep", label: "Sep" }
  ];
  function Y() {
    let e2 = (0, n.useId)(), [t2, r2] = (0, n.useState)("sep"), { tree: l2, period: s2 } = T[t2];
    return (0, a.jsxs)("section", {
      className: W().card,
      "aria-labelledby": e2,
      children: [
        (0, a.jsxs)("div", {
          className: W().top,
          children: [
            (0, a.jsxs)("div", {
              className: W().heading,
              children: [
                (0, a.jsx)("h3", {
                  id: e2,
                  className: W().title,
                  children: "Cloud spend"
                }),
                (0, a.jsx)("p", { className: W().meta, children: s2 })
              ]
            }),
            (0, a.jsx)(z.A, {
              label: "Month",
              options: V,
              value: t2,
              onValueChange: (e3) => r2(e3)
            })
          ]
        }),
        (0, a.jsx)(F, {
          data: l2,
          label: `Cloud spend, ${s2}`,
          formatValue: (e3) => {
            let t3;
            return (t3 = e3) >= 1e6 ? `$${(t3 / 1e6).toFixed(2)}M` : t3 >= 1e3 ? `$${(t3 / 1e3).toFixed(1)}K` : `$${Math.round(t3)}`;
          }
        })
      ]
    });
  }
  let U = Y;
}

__m(__module,__exports,__require);
}