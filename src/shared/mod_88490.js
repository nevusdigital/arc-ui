function(__module,__exports,__require){
"use strict";
function __m(t, e, n) {
  "use strict";
  n.d(e, { Xv: () => q, xu: () => Q, y4: () => $ });
  var i = n(95155), r = n(12115), a = n(79196), s = n(25354), o = n(28245), c = n(55809), l = n(92171), u = n(80642), d = n(18310), p = n(64962), f = n(14577), m = n(11012), h = n(94890), g = n(9005), y = n(7770), _ = n(83930), x = n.n(_);
  let b = [], v = { success: "Success", info: "Info", warning: "Warning", error: "Error", loading: "In progress" }, T = { success: p.A, info: f.A, warning: m.A, error: h.A }, k = [...y.T.ease.standard], j = [...y.T.ease.enter], S = { duration: y.T.duration.fast, ease: k }, w = { duration: y.T.duration.standard, ease: j }, E = { duration: y.T.duration.fast, ease: k }, N = { duration: y.T.duration.fast, ease: k }, C = { opacity: 0, y: "0.3em", filter: `blur(${y.T.blur.soft}px)` }, R = { opacity: 0, y: "-0.3em", filter: `blur(${y.T.blur.subtle}px)`, transition: N }, P = { opacity: 0, scale: 0.6, filter: `blur(${y.T.blur.subtle}px)` }, L = { opacity: 1, y: "0em", scale: 1, filter: "blur(0px)" }, A = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0, transition: E }, transition: E }, M = { initial: C, animate: L, exit: R, transition: { duration: y.T.duration.standard, ease: j } }, I = { initial: P, animate: L, exit: { ...P, transition: N }, transition: { ...y.T.spring.snappy, opacity: S, filter: S } }, X = (t2, e2) => "loading" === t2 ? 1 / 0 : "warning" === t2 || "error" === t2 ? 1.6 * e2 : e2, O = (t2) => (document.addEventListener("visibilitychange", t2), () => document.removeEventListener("visibilitychange", t2)), Y = () => b, z = (t2) => {
    try {
      return t2.matches(":focus-visible");
    } catch {
      return true;
    }
  }, D = (0, r.createContext)(null);
  function H() {
    let t2 = (0, r.useContext)(D);
    if (!t2) throw Error("Render toast stack consumers inside <ToastStackProvider>.");
    return t2;
  }
  function Q({ children: t2, duration: e2 = 5e3, limit: n2 = 12 }) {
    let [a2] = (0, r.useState)(() => {
      let t3, i2, r2, a3, s2, o2;
      return t3 = [], i2 = 0, r2 = /* @__PURE__ */ new Set(), a3 = (e3) => {
        t3 = e3, r2.forEach((t4) => t4());
      }, s2 = (n3, i3) => {
        let r3 = t3.find((t4) => t4.id === n3);
        if (!r3) return;
        let s3 = i3.type ?? r3.type, o3 = { ...r3, ...i3, type: s3, duration: i3.duration ?? X(s3, e2), version: r3.version + 1 };
        a3(t3.map((t4) => t4.id === n3 ? o3 : t4));
      }, { toast: ({ id: r3, ...o3 }) => {
        if (r3 && t3.some((t4) => t4.id === r3)) return s2(r3, o3), r3;
        let c2 = o3.type ?? "info";
        i2 += 1;
        let l2 = { ...o3, id: r3 ?? `toast-${i2}`, type: c2, duration: o3.duration ?? X(c2, e2), seq: i2, version: 0 };
        return a3([l2, ...t3].slice(0, n2)), l2.id;
      }, update: s2, dismiss: o2 = (e3) => {
        if (void 0 === e3) {
          t3.length && a3([]);
          return;
        }
        t3.some((t4) => t4.id === e3) && a3(t3.filter((t4) => t4.id !== e3));
      }, runAction: (e3) => {
        let n3 = t3.find((t4) => t4.id === e3);
        n3?.action && (n3.action.onClick(e3), t3.find((t4) => t4.id === e3)?.version === n3.version && o2(e3));
      }, subscribe: (t4) => (r2.add(t4), () => {
        r2.delete(t4);
      }), getSnapshot: () => t3 };
    });
    return (0, i.jsx)(D.Provider, { value: a2, children: t2 });
  }
  function q() {
    let t2 = H(), e2 = (0, r.useSyncExternalStore)(t2.subscribe, () => t2.getSnapshot().length, () => 0);
    return { toast: t2.toast, update: t2.update, dismiss: t2.dismiss, count: e2 };
  }
  function K(t2) {
    let e2 = (0, a.tF)();
    return (0, i.jsx)(s.PY1.span, { ...t2, "aria-hidden": !e2 || t2["aria-hidden"] });
  }
  function W({ toast: t2, target: e2, expanded: n2, front: d2, hidden: p2, paused: f2, reduce: m2, store: h2, onMeasure: _2, onDragChange: b2, onTap: j2, onHandOff: N2 }) {
    let { id: C2 } = t2, [R2, P2] = (0, a.xQ)(), L2 = (0, r.useRef)(null), X2 = (0, r.useRef)(null), O2 = (0, r.useRef)(null), Y2 = (0, r.useRef)(null), D2 = (0, r.useRef)(null), H2 = (0, o.d)(0), Q2 = (0, o.d)(1), q2 = (0, o.d)(0), $2 = (0, o.d)(0), B = (0, o.d)(1), V = (0, o.d)(0), F = (0, c.G)(V, (t3) => t3 > 0 ? 1 - 0.75 * Math.min(t3 / 280, 1) : 1), G = (0, r.useRef)(null), Z = (0, r.useRef)(false), U = (0, r.useRef)(t2.duration), J = (0, r.useRef)(null), tt = (0, r.useRef)(false), te = (0, r.useRef)("mouse");
    function tn(t3, e3) {
      let n3 = J.current;
      if (!n3 || n3.pointerId !== t3.pointerId || (J.current = null, !n3.active)) return;
      delete t3.currentTarget.dataset.dragging, b2(false);
      let i2 = n3.samples[0], r2 = n3.samples[n3.samples.length - 1], a2 = e3 || !i2 || !r2 || r2.t === i2.t || t3.timeStamp - r2.t > 60 ? 0 : (r2.x - i2.x) / (r2.t - i2.t) * 1e3, s2 = t3.currentTarget.offsetWidth, o2 = V.get();
      if (!e3 && o2 > 0 && a2 > -200 && o2 + a2 / 1e3 * 0.99 / (1 - 0.99) > 0.4 * s2) {
        Z.current = true, m2 || (0, l.i)(V, s2 + 40, { type: "spring", visualDuration: 0.32, bounce: 0, velocity: Math.max(a2, 0) }), h2.dismiss(C2);
        return;
      }
      m2 ? V.jump(0) : (0, l.i)(V, 0, { ...y.T.spring.snappy, velocity: o2 < 0 ? 0.3 * a2 : a2 });
    }
    (0, r.useLayoutEffect)(() => {
      let t3 = O2.current;
      if (!t3 || (_2(C2, t3.offsetHeight + 2), "u" < typeof ResizeObserver)) return;
      let e3 = new ResizeObserver(() => _2(C2, t3.offsetHeight + 2));
      return e3.observe(t3), () => e3.disconnect();
    }, [C2, _2]), (0, r.useLayoutEffect)(() => {
      if (!R2 || e2.height <= 0) return;
      let t3 = null === G.current, i2 = !t3 && G.current !== n2;
      if (G.current = n2, m2) {
        H2.jump(e2.y), Q2.jump(e2.scale), q2.jump(e2.height), (0, l.i)($2, e2.opacity, E), (0, l.i)(B, e2.content, E);
        return;
      }
      t3 && (H2.jump(e2.y + e2.height), Q2.jump(e2.scale), q2.jump(e2.height), B.jump(e2.content), $2.jump(0));
      let r2 = i2 ? y.T.spring.morph : y.T.spring.smooth;
      (0, l.i)(H2, e2.y, r2), (0, l.i)(Q2, e2.scale, r2), t3 || (0, l.i)(q2, e2.height, r2), (0, l.i)($2, e2.opacity, t3 ? w : S), (0, l.i)(B, e2.content, S);
    }, [B, n2, q2, R2, $2, m2, Q2, e2.content, e2.height, e2.opacity, e2.scale, e2.y, H2]), (0, r.useEffect)(() => {
      U.current = t2.duration;
    }, [t2.version, t2.duration]), (0, r.useEffect)(() => {
      if (!R2 || f2 || !Number.isFinite(U.current) || t2.duration <= 0) return;
      let e3 = performance.now(), n3 = window.setTimeout(() => h2.dismiss(C2), Math.max(U.current, 0));
      return () => {
        window.clearTimeout(n3), U.current -= performance.now() - e3;
      };
    }, [C2, R2, f2, h2, t2.version, t2.duration]), (0, r.useEffect)(() => {
      if (R2) return;
      let t3 = L2.current;
      if (t3) {
        let e4 = document.activeElement;
        e4 instanceof HTMLElement && t3.contains(e4) && N2(t3, z(e4)), t3.setAttribute("inert", "");
      }
      let e3 = () => P2?.();
      m2 ? (0, l.i)($2, 0, E).then(e3) : (Z.current || ((0, l.i)(H2, H2.get() + 10, y.T.spring.smooth), (0, l.i)(Q2, 0.96 * Q2.get(), y.T.spring.smooth)), (0, l.i)($2, 0, { duration: Z.current ? 0.22 : y.T.duration.exit, ease: k }).then(e3));
    }, [R2, N2, $2, m2, P2, Q2, H2]);
    let ti = (t3) => {
      Y2.current && (Y2.current.dataset.moving = t3 ? "true" : "false");
    }, tr = "loading" === t2.type ? null : T[t2.type], ta = m2 ? A : M;
    return (0, i.jsx)(s.PY1.li, { ref: L2, className: x().item, style: { y: H2, scale: Q2, height: q2, opacity: $2, zIndex: t2.seq }, "data-front": d2, "data-expanded": n2, inert: p2, onKeyDown: function(t3) {
      "Escape" === t3.key && (t3.stopPropagation(), h2.dismiss(C2));
    }, children: (0, i.jsx)(s.PY1.div, { ref: X2, className: x().card, style: { x: V, opacity: F }, onPointerDown: function(t3) {
      te.current = t3.pointerType, tt.current = false, 0 !== t3.button || !R2 || t3.target.closest("button, a") || (V.stop(), J.current = { pointerId: t3.pointerId, startX: t3.clientX, startY: t3.clientY, origin: V.get(), active: false, samples: [] });
    }, onPointerMove: function(t3) {
      let e3, n3 = J.current;
      if (!n3 || n3.pointerId !== t3.pointerId) return;
      if (!n3.active) {
        let e4 = t3.clientX - n3.startX, i3 = t3.clientY - n3.startY;
        if (6 > Math.hypot(e4, i3)) return;
        if (Math.abs(i3) > Math.abs(e4)) {
          J.current = null;
          return;
        }
        n3.active = true, n3.startX = t3.clientX, tt.current = true, t3.currentTarget.setPointerCapture(t3.pointerId), t3.currentTarget.dataset.dragging = "", window.getSelection()?.removeAllRanges(), b2(true);
      }
      let i2 = n3.origin + t3.clientX - n3.startX;
      for (V.set(i2 >= 0 ? i2 : -((1 - 1 / (-(0.55 * i2) / (e3 = t3.currentTarget.offsetWidth) + 1)) * e3)), n3.samples.push({ t: t3.timeStamp, x: i2 }); n3.samples.length > 2 && t3.timeStamp - n3.samples[0].t > 100; ) n3.samples.shift();
    }, onPointerUp: (t3) => tn(t3, false), onPointerCancel: (t3) => tn(t3, true), onClick: function(t3) {
      if (tt.current) {
        tt.current = false;
        return;
      }
      "mouse" === te.current || t3.target.closest("button, a") || j2();
    }, children: (0, i.jsxs)(s.PY1.div, { ref: O2, className: x().content, style: { opacity: B }, children: [(0, i.jsx)("span", { className: x().icon, "data-type": t2.type, "aria-hidden": "true", children: (0, i.jsx)(u.N, { mode: "popLayout", initial: false, children: (0, i.jsx)(K, { className: x().glyph, ...m2 ? A : I, children: tr ? (0, i.jsx)(tr, { width: 18, height: 18, strokeWidth: 1.75 }) : (0, i.jsx)("span", { className: x().spinner }) }, t2.type) }) }), (0, i.jsxs)("div", { className: x().copy, children: [(0, i.jsxs)("span", { className: x().srOnly, children: [v[t2.type], ": "] }), (0, i.jsx)("span", { className: x().title, children: (0, i.jsx)(u.N, { mode: "popLayout", initial: false, children: (0, i.jsx)(K, { className: x().line, ...ta, children: t2.title }, t2.title) }) }), (0, i.jsx)(u.N, { mode: "popLayout", initial: false, children: t2.description ? (0, i.jsx)(K, { className: x().description, ...ta, children: t2.description }, t2.description) : null })] }), (0, i.jsx)(u.N, { initial: false, children: t2.action ? (0, i.jsx)(s.PY1.div, { ref: Y2, className: x().actionSlot, initial: m2 ? { opacity: 0 } : { width: 0, opacity: 0 }, animate: { width: "auto", opacity: 1 }, exit: m2 ? { opacity: 0 } : { width: 0, opacity: 0 }, transition: m2 ? E : { width: y.T.spring.smooth, opacity: S }, onAnimationStart: () => ti(true), onAnimationComplete: () => ti(false), children: (0, i.jsx)("button", { type: "button", className: x().action, onClick: function(t3) {
      let e3 = z(t3.currentTarget);
      h2.runAction(C2), e3 && !h2.getSnapshot().find((t4) => t4.id === C2)?.action && D2.current?.focus();
    }, children: t2.action.label }) }, "action") : null }), (0, i.jsx)("button", { ref: D2, type: "button", className: x().close, "aria-label": "Dismiss notification", onClick: () => h2.dismiss(C2), children: (0, i.jsx)(g.A, { width: 16, height: 16, strokeWidth: 1.75, "aria-hidden": "true" }) })] }) }) });
  }
  function $({ label: t2 = "Notifications", position: e2 = "bottom-right", contained: n2 = false, visibleToasts: a2 = 3, hotkey: s2 = true, className: o2 }) {
    let c2, l2, p2 = H(), f2 = (0, r.useSyncExternalStore)(p2.subscribe, p2.getSnapshot, Y), m2 = !!(0, d.I)(), h2 = (0, r.useSyncExternalStore)(O, () => "hidden" === document.visibilityState, () => false), [g2, y2] = (0, r.useState)(false), [_2, b2] = (0, r.useState)(false), [v2, T2] = (0, r.useState)(false), [k2, j2] = (0, r.useState)(false), [S2, w2] = (0, r.useState)({}), E2 = (0, r.useRef)(null), N2 = (0, r.useRef)(null), C2 = (0, r.useRef)(null);
    v2 && 0 === f2.length && T2(false);
    let R2 = f2.length > 0 && (g2 || _2 || v2), P2 = R2 || k2 || h2, L2 = (0, r.useCallback)((t3, e3) => w2((n3) => n3[t3] === e3 ? n3 : { ...n3, [t3]: e3 }), []), A2 = (0, r.useCallback)(() => w2((t3) => Object.fromEntries(p2.getSnapshot().filter((e3) => e3.id in t3).map((e3) => [e3.id, t3[e3.id]]))), [p2]), M2 = (0, r.useCallback)(() => T2((t3) => !t3), []), I2 = (0, r.useCallback)((t3, e3) => {
      let n3 = Array.from(N2.current?.children ?? []), i2 = n3.indexOf(t3), r2 = n3.filter((e4) => e4 !== t3 && !e4.hasAttribute("inert")), a3 = r2.find((t4) => n3.indexOf(t4) > i2) ?? r2[r2.length - 1], s3 = a3?.querySelector("button");
      e3 && s3 ? s3.focus() : e3 && C2.current?.isConnected ? C2.current.focus() : document.activeElement?.blur();
    }, []);
    (0, r.useEffect)(() => {
      if (!s2) return;
      let t3 = (t4) => {
        if (!t4.altKey || t4.metaKey || t4.ctrlKey || "KeyT" !== t4.code) return;
        let e3 = N2.current?.querySelector(":scope > li:not([inert]) button");
        e3 && (t4.preventDefault(), e3.focus({ focusVisible: true }), b2(true));
      };
      return document.addEventListener("keydown", t3), () => document.removeEventListener("keydown", t3);
    }, [s2]), (0, r.useEffect)(() => {
      if (!v2) return;
      let t3 = (t4) => {
        E2.current?.contains(t4.target) || T2(false);
      };
      return document.addEventListener("pointerdown", t3), () => document.removeEventListener("pointerdown", t3);
    }, [v2]);
    let { targets: X2, listHeight: D2 } = (c2 = f2.length ? S2[f2[0].id] ?? 0 : 0, l2 = f2.reduce((t3, e3, n3) => [...t3, t3[n3] + (n3 < a2 ? (S2[e3.id] ?? 0) + 12 : 0)], [0]), { targets: f2.map((t3, e3) => {
      let n3 = e3 < a2, i2 = Math.min(e3, a2);
      return R2 ? { y: -l2[e3], scale: 1, height: S2[t3.id] ?? 0, opacity: +!!n3, content: 1 } : { y: -14 * i2, scale: 1 - 0.05 * i2, height: 0 === e3 ? S2[t3.id] ?? 0 : c2, opacity: +!!n3, content: +(0 === e3) };
    }), listHeight: f2.length ? R2 ? l2[f2.length] - 12 : c2 + 14 * (Math.min(f2.length, a2) - 1) : 0 });
    return (0, i.jsx)("section", { ref: E2, className: [x().viewport, x()[e2], n2 && x().contained, o2].filter(Boolean).join(" "), "aria-label": s2 ? `${t2} (Alt+T)` : t2, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", onFocus: function(t3) {
      let e3 = t3.relatedTarget;
      e3 instanceof Node && t3.currentTarget.contains(e3) || (C2.current = e3 instanceof HTMLElement ? e3 : null), z(t3.target) && b2(true);
    }, onBlur: function(t3) {
      t3.relatedTarget instanceof Node && t3.currentTarget.contains(t3.relatedTarget) || b2(false);
    }, children: (0, i.jsx)("ol", { ref: N2, className: x().list, style: { height: D2 }, "data-expanded": R2, onPointerEnter: (t3) => {
      "mouse" === t3.pointerType && y2(true);
    }, onPointerMove: (t3) => {
      "mouse" !== t3.pointerType || g2 || y2(true);
    }, onPointerLeave: (t3) => {
      "mouse" === t3.pointerType && y2(false);
    }, children: (0, i.jsx)(u.N, { onExitComplete: A2, children: f2.map((t3, e3) => (0, i.jsx)(W, { toast: t3, target: X2[e3], expanded: R2, front: 0 === e3, hidden: e3 >= a2, paused: P2, reduce: m2, store: p2, onMeasure: L2, onDragChange: j2, onTap: M2, onHandOff: I2 }, t3.id)) }) }) });
  }
}

__m(__module,__exports,__require);
}