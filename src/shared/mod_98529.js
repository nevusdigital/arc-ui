function(__module,__exports,__require){
"use strict";
function __m(e, t, l) {
  "use strict";
  l.r(t), l.d(t, { TreemapDemo: () => T, default: () => O });
  var a = l(95155), r = l(12115), i = l(18310), n = l(61792), s = l(92171), o = l(28245), u = l(22535), c = l(80642), d = l(25354), h = l(7770), p = l(17378), m = l.n(p);
  let { spring: f, ease: x, blur: _, duration: v } = h.T, b = ({ visualDuration: e2, bounce: t2 }, l2 = 5e-4) => {
    let a2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: a2 * a2, damping: 2 * (1 - t2) * a2, restDelta: l2, restSpeed: 2 * l2 };
  }, g = b({ visualDuration: 0.62, bounce: 0.06 }), y = b({ visualDuration: 0.9, bounce: 0 }), w = b(f.snappy, 0.01), j = { stiffness: w.stiffness, damping: w.damping, restDelta: 0.01 }, N = (e2) => e2 < 0 ? "var(--series-1)" : e2 < 4 ? `var(--series-${e2 + 1})` : "var(--foreground)", M = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }), $ = new Intl.NumberFormat("en-US", { style: "percent", maximumFractionDigits: 1 }), L = (e2, t2, l2) => Math.min(l2, Math.max(t2, e2)), k = (e2, t2, l2) => e2 + (t2 - e2) * l2, S = (e2, t2, l2) => {
    let a2 = l2.w / (t2.w || 1), r2 = l2.h / (t2.h || 1);
    return { x: l2.x + (e2.x - t2.x) * a2, y: l2.y + (e2.y - t2.y) * r2, w: e2.w * a2, h: e2.h * r2 };
  }, E = () => () => {
  };
  function A({ data: e2, label: t2, formatValue: l2 = (e3) => M.format(e3), colorLabel: h2, formatColor: p2 = (e3) => M.format(e3), colorDomain: b2, focus: w2, defaultFocus: R2, onFocusChange: P2, height: C2 = 420, emptyLabel: D2 = "No data yet", ref: F2, className: V2 }) {
    let I2, B2 = (I2 = (0, r.useSyncExternalStore)(E, () => true, () => false), !!(0, i.I)() && I2), z2 = (0, r.useRef)(null), W2 = (0, r.useRef)(null), T2 = (0, r.useRef)(null), O2 = (0, r.useRef)(/* @__PURE__ */ new Map());
    (0, r.useImperativeHandle)(F2, () => z2.current);
    let K = (0, n.W)(z2, { once: true, amount: 0.25 }), U = JSON.stringify(e2), Y = (0, r.useMemo)(() => {
      let t3, l3;
      return t3 = /* @__PURE__ */ new Map(), (l3 = (e3, a2, r2, i2) => {
        let n2 = e3.children ?? [], s2 = 0, o2 = 0, u2 = 0;
        if (n2.length) for (let t4 of n2) {
          let r3 = l3(t4, a2 + 1, e3.id, 0 === a2 ? [] : [...i2, e3.label]);
          s2 += r3.value, o2 += r3.weighted, u2 += r3.colored;
        }
        else s2 = Math.max(0, e3.value ?? 0), void 0 !== e3.color && Number.isFinite(e3.color) && (o2 = e3.color * s2, u2 = s2);
        return t3.set(e3.id, { id: e3.id, label: e3.label, value: s2, color: u2 ? o2 / u2 : null, depth: a2, parent: r2, children: n2.map((e4) => e4.id), path: 0 === a2 ? [e3.label] : [...i2, e3.label] }), { value: s2, weighted: o2, colored: u2 };
      })(e2, 0, null, []), t3;
    }, [U]), G = Y.get(e2.id), H = (0, r.useMemo)(() => [...Y.values()].filter((e3) => e3.depth > 0), [Y]), [Z, q] = (0, r.useState)(R2 ?? e2.id), J = Y.get(w2 ?? Z), X = J && J.children.length ? J : G, Q = (e3) => {
      void 0 === w2 && q(e3), P2?.(e3);
    }, [ee, et] = (0, r.useState)(null), [el, ea] = (0, r.useState)(null), [er, ei] = (0, r.useState)(0);
    (0, r.useLayoutEffect)(() => {
      let e3 = W2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => ei(e3.clientWidth));
      return t3.observe(e3), ei(e3.clientWidth), () => t3.disconnect();
    }, []);
    let en = (0, r.useMemo)(() => ({ x: 0, y: 0, w: er, h: C2 }), [er, C2]), es = (0, r.useMemo)(() => {
      var e3;
      let t3, l3;
      return e3 = X.id, t3 = /* @__PURE__ */ new Map(), (l3 = (e4, a2, r2) => {
        let i2, n2 = Y.get(e4);
        if (!n2.children.length) return;
        let s2 = r2 ? a2 : (i2 = a2.h > 48 && a2.w > 64 ? 22 : 3, { x: a2.x + 3, y: a2.y + i2, w: Math.max(0, a2.w - 6), h: Math.max(0, a2.h - i2 - 3) }), o2 = /* @__PURE__ */ new Map();
        for (let [e5, a3] of (!(function(e6, t4, l4) {
          let a4 = e6.filter((e7) => e7.value > 0).sort((e7, t5) => t5.value - e7.value), r3 = a4.reduce((e7, t5) => e7 + t5.value, 0);
          if (!r3 || t4.w <= 0 || t4.h <= 0) {
            for (let a5 of e6) l4.set(a5.id, { x: t4.x, y: t4.y, w: 0, h: 0 });
            return;
          }
          let i3 = t4.w * t4.h / r3, { x: n3, y: s3, w: o3, h: u2 } = t4, c2 = 0, d2 = (e7, t5) => {
            let l5 = e7.reduce((e8, t6) => e8 + t6, 0);
            return Math.max(t5 * t5 * Math.max(...e7) / (l5 * l5), l5 * l5 / (t5 * t5 * Math.min(...e7)));
          };
          for (; c2 < a4.length; ) {
            let e7 = Math.min(o3, u2), t5 = [a4[c2].value * i3], r4 = c2 + 1;
            for (; r4 < a4.length && !(d2([...t5, a4[r4].value * i3], e7) > d2(t5, e7)); ) t5.push(a4[r4].value * i3), r4++;
            let h3 = t5.reduce((e8, t6) => e8 + t6, 0);
            if (o3 >= u2) {
              let e8 = h3 / u2, t6 = s3;
              for (let s4 = c2; s4 < r4; s4++) {
                let r5 = a4[s4].value * i3 / e8;
                l4.set(a4[s4].id, { x: n3, y: t6, w: e8, h: r5 }), t6 += r5;
              }
              n3 += e8, o3 -= e8;
            } else {
              let e8 = h3 / o3, t6 = n3;
              for (let n4 = c2; n4 < r4; n4++) {
                let r5 = a4[n4].value * i3 / e8;
                l4.set(a4[n4].id, { x: t6, y: s3, w: r5, h: e8 }), t6 += r5;
              }
              s3 += e8, u2 -= e8;
            }
            c2 = r4;
          }
          for (let a5 of e6) l4.has(a5.id) || l4.set(a5.id, { x: t4.x, y: t4.y, w: 0, h: 0 });
        })(n2.children.map((e6) => ({ id: e6, value: Y.get(e6).value })), s2, o2), o2)) {
          let r3 = { x: a3.x + 1, y: a3.y + 1, w: Math.max(0, a3.w - 2), h: Math.max(0, a3.h - 2) };
          t3.set(e5, r3), l3(e5, r3, false);
        }
      })(e3, en, true), t3;
    }, [Y, X.id, en]), eo = (e3) => e3.depth - X.depth, eu = H.filter((e3) => !e3.children.length && null !== e3.color), [ec, ed] = b2 ?? (eu.length ? [Math.min(...eu.map((e3) => e3.color)), Math.max(...eu.map((e3) => e3.color))] : [0, 1]), eh = void 0 !== h2 && eu.length > 0, ep = (0, r.useMemo)(() => {
      let e3 = /* @__PURE__ */ new Map();
      return G.children.forEach((t3, l3) => {
        let a2 = (t4) => {
          e3.set(t4, l3), Y.get(t4)?.children.forEach(a2);
        };
        a2(t3);
      }), e3;
    }, [Y, G]), em = (0, r.useRef)(/* @__PURE__ */ new Map()), ef = (0, r.useRef)(/* @__PURE__ */ new Map()), ex = (0, r.useRef)(null), e_ = () => {
      for (let e3 of H) {
        let t3 = O2.current.get(e3.id), l3 = em.current.get(e3.id);
        if (!t3) continue;
        if (!l3 || l3.o < 0.01 || l3.w < 0.5 || l3.h < 0.5) {
          t3.style.visibility = "hidden", t3.style.pointerEvents = "none";
          continue;
        }
        t3.style.visibility = "visible", t3.style.transform = `translate3d(${l3.x.toFixed(2)}px, ${l3.y.toFixed(2)}px, 0)`, t3.style.width = `${l3.w.toFixed(2)}px`, t3.style.height = `${l3.h.toFixed(2)}px`, t3.style.opacity = l3.o.toFixed(3), t3.style.pointerEvents = l3.o > 0.6 ? "auto" : "none";
        let a2 = ef.current.get(e3.id) ?? 0;
        t3.dataset.level = String(a2), t3.dataset.room = l3.w > 64 && l3.h > 38 ? l3.h > 54 ? "full" : "name" : "none";
      }
    }, ev = (0, r.useRef)(e_);
    (0, r.useLayoutEffect)(() => {
      ev.current = e_;
    });
    let eb = (K || B2) && er > 0;
    (0, r.useEffect)(() => {
      if (!eb) return;
      let e3 = ex.current, t3 = (e4, t4) => {
        for (let l4 = Y.get(e4); l4; l4 = l4.parent ? Y.get(l4.parent) : void 0) if (l4.id === t4) return true;
        return false;
      }, l3 = new Set(H.filter((e4) => {
        let l4 = e4.depth - X.depth;
        return l4 >= 1 && l4 <= 2 && t3(e4.id, X.id);
      }).map((e4) => e4.id)), a2 = new Map(em.current), r2 = new Set([...a2].filter(([, e4]) => e4.o > 0.5).map(([e4]) => e4)), i2 = null, n2 = null;
      if (e3 && e3.id !== X.id && a2.size) {
        if (t3(X.id, e3.id)) {
          let t4 = e3.layout.get(X.id);
          t4 && (i2 = (e4) => S(e4, en, t4), n2 = (e4) => S(e4, t4, en));
        } else if (t3(e3.id, X.id)) {
          let t4 = es.get(e3.id);
          t4 && (i2 = (e4) => S(e4, t4, en), n2 = (e4) => S(e4, en, t4));
        }
      }
      let o2 = /* @__PURE__ */ new Map(), u2 = /* @__PURE__ */ new Map(), c2 = !a2.size;
      for (let e4 of H) {
        let t4 = es.get(e4.id), s2 = a2.get(e4.id), d3 = l3.has(e4.id), h4 = r2.has(e4.id);
        d3 && t4 ? (u2.set(e4.id, { ...t4, o: 1 }), h4 && s2 ? o2.set(e4.id, s2) : c2 ? o2.set(e4.id, { x: t4.x + t4.w / 2, y: t4.y + t4.h / 2, w: 0, h: 0, o: 0 }) : o2.set(e4.id, { ...i2 ? i2(t4) : t4, o: 0 }), ef.current.set(e4.id, eo(e4))) : h4 && s2 && (o2.set(e4.id, s2), u2.set(e4.id, { ...n2 ? n2(s2) : s2, o: 0 }));
      }
      for (let e4 of H) o2.has(e4.id) || em.current.set(e4.id, { x: 0, y: 0, w: 0, h: 0, o: 0 });
      ex.current = { id: X.id, layout: es };
      let d2 = () => {
        for (let [e4, t4] of u2) em.current.set(e4, t4);
        ev.current();
      };
      if (B2) return void d2();
      let h3 = (0, s.i)(0, 1, { ...c2 ? y : g, onUpdate: (e4) => {
        for (let [t4, l4] of o2) {
          let a3 = u2.get(t4), r3 = c2 ? L((e4 - Math.min(0.3, (1 - a3.w * a3.h / (en.w * en.h || 1)) * 0.3)) / 0.7, 0, 1) : e4;
          em.current.set(t4, { x: k(l4.x, a3.x, r3), y: k(l4.y, a3.y, r3), w: k(l4.w, a3.w, r3), h: k(l4.h, a3.h, r3), o: k(l4.o, a3.o, r3) });
        }
        ev.current();
      }, onComplete: d2 });
      return () => h3.stop();
    }, [eb, es, B2]), (0, r.useLayoutEffect)(() => {
      ev.current();
    });
    let eg = ee ? Y.get(ee) ?? null : null, ey = (e3) => e3.parent ? Y.get(e3.parent) : e3, ew = (e3, t3) => t3.value ? e3.value / t3.value : 0, ej = (0, o.d)(0), eN = (0, o.d)(0), eM = (0, u.z)(ej, j), e$ = (0, u.z)(eN, j), eL = (0, r.useRef)(false);
    (0, r.useLayoutEffect)(() => {
      let e3 = T2.current;
      if (!e3 || !eg || !er) {
        eL.current = false;
        return;
      }
      let t3 = es.get(eg.id), l3 = el?.x ?? (t3 ? t3.x + t3.w / 2 : 0), a2 = el?.y ?? (t3 ? t3.y + Math.min(t3.h / 2, 28) : 0), r2 = e3.offsetWidth, i2 = e3.offsetHeight, n2 = l3 + 14;
      n2 + r2 > er && (n2 = l3 - 14 - r2);
      let s2 = a2 + 14;
      s2 + i2 > C2 && (s2 = a2 - 14 - i2), ej.set(L(n2, 0, Math.max(0, er - r2))), eN.set(L(s2, 0, Math.max(0, C2 - i2))), (!eL.current || B2) && (eM.jump(ej.get()), e$.jump(eN.get())), eL.current = true;
    });
    let ek = X.children.map((e3) => Y.get(e3)).filter((e3) => e3.value > 0), eS = (e3) => {
      let t3 = e3;
      for (; t3 && t3.parent && t3.parent !== X.id; ) t3 = Y.get(t3.parent) ?? null;
      return t3 && t3.parent === X.id ? t3 : null;
    }, eE = [];
    for (let e3 = X; e3; e3 = e3.parent ? Y.get(e3.parent) : void 0) eE.unshift(e3);
    let eA = !G.value, eR = eS(eg);
    return (0, a.jsxs)("figure", { ref: z2, className: [m().figure, V2].filter(Boolean).join(" "), "aria-label": t2, children: [(0, a.jsxs)("div", { className: m().bar, children: [(0, a.jsx)("nav", { className: m().crumbs, "aria-label": `${t2} path`, children: (0, a.jsx)("ol", { className: m().crumbList, children: (0, a.jsx)(c.N, { initial: false, mode: "popLayout", children: eE.map((e3, t3) => (0, a.jsxs)(d.PY1.li, { className: m().crumb, layout: !B2 && "position", initial: { opacity: 0, x: B2 ? 0 : -6, filter: B2 ? "none" : `blur(${_.subtle}px)` }, animate: { opacity: 1, x: 0, filter: "blur(0px)" }, exit: { opacity: 0, x: B2 ? 0 : -6, transition: { duration: v.instant, ease: [...x.exit] } }, transition: { ...f.smooth }, children: [t3 > 0 && (0, a.jsx)("span", { className: m().crumbSep, "aria-hidden": "true", children: "/" }), t3 < eE.length - 1 ? (0, a.jsx)("button", { type: "button", className: m().crumbButton, onClick: () => {
      Q(e3.id), et(null);
    }, children: e3.label }) : (0, a.jsx)("span", { className: m().crumbCurrent, "aria-current": "location", children: e3.label })] }, e3.id)) }) }) }), (0, a.jsx)("p", { className: m().total, children: (0, a.jsx)(c.N, { mode: "popLayout", initial: false, children: (0, a.jsx)(d.PY1.span, { className: m().totalValue, initial: { opacity: 0, y: 6 * !B2 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: B2 ? 0 : -6 }, transition: { duration: v.standard, ease: [...x.enter] }, children: l2(X.value) }, l2(X.value)) }) })] }), (0, a.jsxs)("div", { ref: W2, className: m().stage, style: { height: C2 }, "data-active": !!eg || void 0, role: "group", tabIndex: eA ? -1 : 0, "aria-roledescription": "treemap", "aria-label": `${t2}, ${X.label}. Arrow keys move between tiles, Enter zooms in, Escape zooms out.`, onKeyDown: (e3) => {
      let t3 = eS(eg), l3 = { ArrowRight: [1, 0], ArrowLeft: [-1, 0], ArrowDown: [0, 1], ArrowUp: [0, -1] };
      if (e3.key in l3) {
        if (e3.preventDefault(), ea(null), !t3) return void et(ek[0]?.id ?? null);
        let [a2, r2] = l3[e3.key], i2 = es.get(t3.id), n2 = i2.x + i2.w / 2, s2 = i2.y + i2.h / 2, o2 = null, u2 = 1 / 0;
        for (let e4 of ek) {
          if (e4.id === t3.id) continue;
          let l4 = es.get(e4.id);
          if (!l4) continue;
          let i3 = l4.x + l4.w / 2 - n2, c2 = l4.y + l4.h / 2 - s2, d2 = i3 * a2 + c2 * r2, h3 = Math.abs(i3 * r2 - c2 * a2);
          if (d2 <= 1) continue;
          let p3 = d2 + 1.5 * h3;
          p3 < u2 && (u2 = p3, o2 = e4);
        }
        o2 && et(o2.id);
      } else "Home" === e3.key || "End" === e3.key ? (e3.preventDefault(), ea(null), et(("Home" === e3.key ? ek[0] : ek[ek.length - 1])?.id ?? null)) : "Enter" === e3.key || " " === e3.key ? t3?.children.length && (e3.preventDefault(), Q(t3.id), et(t3.children[0])) : ("Escape" === e3.key || "Backspace" === e3.key) && (X.parent ? (e3.preventDefault(), Q(X.parent), et(X.id)) : ee && (e3.preventDefault(), et(null)));
    }, onBlur: () => et(null), onPointerLeave: () => {
      et(null), ea(null);
    }, children: [H.map((e3) => {
      var t3;
      let r2 = eS(e3);
      return (0, a.jsxs)("div", { ref: (t4) => {
        t4 ? O2.current.set(e3.id, t4) : O2.current.delete(e3.id);
      }, className: m().tile, "data-branch": e3.children.length > 0 || void 0, "data-active": ee === e3.id || void 0, "data-lineage": eR?.id === e3.id && ee !== e3.id || void 0, "data-dim": null !== eR && null !== r2 && eR.id !== r2.id || void 0, style: { "--hue": N(ep.get(e3.id) ?? -1), "--fill": `color-mix(in oklab, ${N(ep.get(e3.id) ?? -1)} ${t3 = e3.color, !eh || null === t3 ? 34 : Math.round(14 + Math.round(4 * L((t3 - ec) / (ed - ec || 1), 0, 1)) / 4 * 44)}%, var(--surface))`, zIndex: e3.depth }, onPointerMove: (t4) => {
        t4.stopPropagation(), ((e4, t5) => {
          if ("mouse" !== e4.pointerType) return;
          let l3 = W2.current?.getBoundingClientRect();
          l3 && ea({ x: e4.clientX - l3.left, y: e4.clientY - l3.top }), et(t5);
        })(t4, e3.id);
      }, onClick: (t4) => {
        let l3;
        t4.stopPropagation(), l3 = eS(e3), l3?.children.length ? Q(l3.id) : eg && eg.id === e3.id || et(e3.id);
      }, children: [(0, a.jsx)("span", { className: m().tileLabel, children: e3.label }), (0, a.jsx)("span", { className: m().tileValue, children: l2(e3.value) })] }, e3.id);
    }), eA && (0, a.jsx)("p", { className: m().message, children: D2 }), (0, a.jsx)(d.PY1.div, { ref: T2, className: m().tooltip, style: { x: B2 ? ej : eM, y: B2 ? eN : e$ }, "aria-hidden": "true", children: eg && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)("p", { className: m().tipTitle, children: eg.path.slice(0, -1).join(" / ") || G.label }), (0, a.jsxs)("p", { className: m().tipValue, children: [(0, a.jsx)("span", { className: m().tipName, children: eg.label }), (0, a.jsx)("span", { className: m().tipAmount, children: l2(eg.value) })] }), (0, a.jsxs)("p", { className: m().tipNote, children: [$.format(ew(eg, ey(eg))), " of ", ey(eg).label] }), eh && null !== eg.color && (0, a.jsxs)("p", { className: m().tipNote, children: [h2, " ", p2(eg.color)] })] }) })] }), eh && (0, a.jsxs)("div", { className: m().scale, "aria-hidden": "true", children: [(0, a.jsx)("span", { className: m().scaleLabel, children: h2 }), (0, a.jsx)("span", { className: m().scaleEnd, children: p2(ec) }), (0, a.jsx)("span", { className: m().steps, children: Array.from({ length: 5 }, (e3, t3) => (0, a.jsx)("span", { className: m().step, style: { "--fill": `color-mix(in oklab, ${0 === X.depth ? "var(--foreground)" : N(ep.get(X.id) ?? -1)} ${Math.round(14 + t3 / 4 * 44)}%, var(--surface))` } }, t3)) }), (0, a.jsx)("span", { className: m().scaleEnd, children: p2(ed) })] }), (0, a.jsx)("p", { className: m().srOnly, "aria-live": "polite", "aria-atomic": "true", children: eg ? `${eg.path.join(", ")}, ${l2(eg.value)}, ${$.format(ew(eg, ey(eg)))} of ${ey(eg).label}${eh && null !== eg.color ? `, ${h2} ${p2(eg.color)}` : ""}` : `${X.label}, ${l2(X.value)}` }), !eA && (0, a.jsx)("div", { className: m().srOnly, children: (0, a.jsxs)("table", { children: [(0, a.jsx)("caption", { children: t2 }), (0, a.jsx)("thead", { children: (0, a.jsxs)("tr", { children: [(0, a.jsx)("th", { scope: "col", children: "Path" }), (0, a.jsx)("th", { scope: "col", children: "Value" }), (0, a.jsx)("th", { scope: "col", children: "Share of parent" }), eh && (0, a.jsx)("th", { scope: "col", children: h2 })] }) }), (0, a.jsx)("tbody", { children: H.map((e3) => (0, a.jsxs)("tr", { children: [(0, a.jsx)("th", { scope: "row", children: e3.path.join(" / ") }), (0, a.jsx)("td", { children: l2(e3.value) }), (0, a.jsx)("td", { children: $.format(ew(e3, ey(e3))) }), eh && (0, a.jsx)("td", { children: null === e3.color ? "" : p2(e3.color) })] }, e3.id)) })] }) })] });
  }
  var R = l(66558), P = l(63938), C = l.n(P);
  let D = { "North America": [["United States", 18400, 4210, 24, 112], ["Canada", 2350, 690, 19, 108], ["Mexico", 610, 240, 41, 101]], Europe: [["Germany", 4120, 1180, 28, 114], ["United Kingdom", 3860, 1090, 17, 109], ["France", 2240, 720, 22, 106], ["Netherlands", 1310, 410, 31, 115], ["Nordics", 1580, 430, 26, 117], ["Spain", 890, 330, 36, 103]], "Asia Pacific": [["Japan", 2760, 520, 33, 111], ["Australia", 1690, 510, 21, 107], ["India", 980, 610, 58, 99], ["Singapore", 720, 190, 29, 110], ["South Korea", 840, 230, 45, 104]], "Latin America": [["Brazil", 1240, 560, 49, 102], ["Chile", 330, 140, 27, 100], ["Colombia", 290, 150, 52, 98], ["Argentina", 260, 130, 12, 95]] }, F = [{ id: "team", label: "Team", arr: 0.22, customers: 0.62, growth: -4, retention: -9 }, { id: "business", label: "Business", arr: 0.38, customers: 0.3, growth: 1, retention: 0 }, { id: "enterprise", label: "Enterprise", arr: 0.4, customers: 0.08, growth: 6, retention: 8 }], V = (e2) => e2.toLowerCase().replace(/[^a-z0-9]+/g, "-"), I = [{ value: "arr", label: "ARR" }, { value: "customers", label: "Customers" }], B = [{ value: "growth", label: "Growth" }, { value: "retention", label: "Retention" }], z = (e2) => e2 >= 1e3 ? `$${(e2 / 1e3).toFixed(1)}M` : `$${Math.round(e2)}K`, W = (e2) => e2 >= 1e3 ? `${(e2 / 1e3).toFixed(1)}K` : `${Math.round(e2)}`;
  function T() {
    let e2 = (0, r.useId)(), [t2, l2] = (0, r.useState)("arr"), [i2, n2] = (0, r.useState)("growth"), s2 = (0, r.useMemo)(() => ({ id: "all", label: "All regions", children: Object.entries(D).map(([e3, l3]) => ({ id: V(e3), label: e3, children: l3.map(([l4, a2, r2, n3, s3]) => ({ id: `${V(e3)}/${V(l4)}`, label: l4, children: F.map((o2) => ({ id: `${V(e3)}/${V(l4)}/${o2.id}`, label: o2.label, value: Math.round(("arr" === t2 ? a2 * o2.arr : r2 * o2.customers) * 10) / 10, color: "growth" === i2 ? n3 + o2.growth : s3 + o2.retention })) })) })) }), [t2, i2]);
    return (0, a.jsxs)("section", { className: C().card, "aria-labelledby": e2, children: [(0, a.jsxs)("div", { className: C().top, children: [(0, a.jsxs)("div", { className: C().heading, children: [(0, a.jsx)("h3", { id: e2, className: C().title, children: "Book of business" }), (0, a.jsx)("p", { className: C().meta, children: "By region, country, and plan" })] }), (0, a.jsxs)("div", { className: C().controls, children: [(0, a.jsx)(R.A, { label: "Size by", options: I, value: t2, onValueChange: (e3) => l2(e3) }), (0, a.jsx)(R.A, { label: "Shade by", options: B, value: i2, onValueChange: (e3) => n2(e3) })] })] }), (0, a.jsx)(A, { data: s2, label: "arr" === t2 ? "Annual recurring revenue" : "Customers", formatValue: "arr" === t2 ? z : W, colorLabel: "growth" === i2 ? "Growth" : "Net retention", formatColor: (e3) => "growth" === i2 ? `${e3 > 0 ? "+" : ""}${Math.round(e3)}%` : `${Math.round(e3)}%` })] });
  }
  let O = T;
}

__m(__module,__exports,__require);
}