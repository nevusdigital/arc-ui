function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { L: () => q });
  var a = i(95155), n = i(12115), r = i(40093), s = i(18310), o = i(28245), c = i(92171), l = i(25354), d = i(80642), u = i(57700), p = i(64577), f = i(9005), h = i(83874), y = i(7770), m = i(84582), _ = i.n(m);
  let x = [...y.T.ease.enter], b = [...y.T.ease.standard], g = (e2) => `blur(${e2}px)`, T = () => () => {
  };
  function j(e2, t2, i2, a2, r2) {
    let s2 = (0, o.d)("auto"), l2 = (0, n.useRef)(i2), d2 = (0, n.useRef)(0);
    return (0, n.useLayoutEffect)(() => {
      l2.current !== i2 && (l2.current = i2, d2.current = performance.now() + 700);
    }, [i2]), (0, n.useEffect)(() => {
      let i3, n2 = e2.current;
      if (!n2 || "u" < typeof ResizeObserver) return;
      let o2 = false, l3 = new ResizeObserver(([e3]) => {
        if (!e3) return;
        let l4 = e3.borderBoxSize?.[0], u2 = l4 ? "width" === t2 ? l4.inlineSize : l4.blockSize : "width" === t2 ? n2.offsetWidth : n2.offsetHeight;
        if (i3?.stop(), !o2 || a2 || performance.now() > d2.current) {
          o2 = true, s2.jump(u2);
          return;
        }
        i3 = (0, c.i)(s2, u2, r2);
      });
      return l3.observe(n2, { box: "border-box" }), () => {
        l3.disconnect(), i3?.stop();
      };
    }, [t2, e2, a2, s2, r2]), s2;
  }
  let N = { enter: (e2) => ({ opacity: 0, y: `${0.55 * e2}em`, filter: g(y.T.blur.subtle) }), center: { opacity: 1, y: "0em", filter: g(0) }, exit: (e2) => ({ opacity: 0, y: `${-0.55 * e2}em`, filter: g(y.T.blur.subtle), transition: { duration: y.T.duration.fast, ease: b } }) }, w = { enter: { opacity: 1 }, center: { opacity: 1 }, exit: { opacity: 0, transition: { duration: 0 } } }, v = { y: y.T.spring.snappy, opacity: { duration: y.T.duration.fast, ease: x }, filter: { duration: y.T.duration.fast, ease: x } };
  function k({ value: e2, reduced: t2 }) {
    let [i2, r2] = (0, n.useState)({ value: e2, direction: 1 });
    i2.value !== e2 && r2({ value: e2, direction: e2 > i2.value ? 1 : -1 });
    let s2 = (0, n.useRef)(null), o2 = String(e2), c2 = j(s2, "width", o2, t2, y.T.spring.morph);
    return (0, a.jsx)(l.PY1.span, { className: _().count, style: { width: c2 }, "aria-hidden": "true", children: (0, a.jsx)("span", { ref: s2, className: _().digits, children: (0, a.jsx)(d.N, { mode: "popLayout", initial: false, custom: i2.direction, children: [...o2].map((e3, n2) => (0, a.jsx)(l.PY1.span, { className: _().digit, custom: i2.direction, variants: t2 ? w : N, initial: "enter", animate: "center", exit: "exit", transition: t2 ? { duration: 0 } : v, children: e3 }, `${o2.length - n2}:${e3}`)) }) }) });
  }
  let $ = { type: "spring", stiffness: 420, damping: 39 };
  function S({ icon: e2, pop: t2, reduced: i2 }) {
    let r2 = (0, o.d)(1), s2 = (0, o.d)(0), d2 = (0, n.useRef)(0);
    return (0, n.useEffect)(() => {
      t2 <= d2.current || (d2.current = t2, i2 || ((0, c.i)(r2, 1, { ...$, velocity: r2.getVelocity() + 11 }), (0, c.i)(s2, 0, { ...$, velocity: s2.getVelocity() - 420 })));
    }, [t2, i2, s2, r2]), (0, n.useEffect)(() => () => {
      r2.stop(), s2.stop();
    }, [s2, r2]), (0, a.jsx)(l.PY1.span, { className: _().icon, style: { scale: r2, rotate: s2 }, "aria-hidden": "true", children: (0, a.jsx)(e2, { size: 16, strokeWidth: 1.75 }) });
  }
  let P = { opacity: 1, scale: 1, y: 0, filter: g(0) }, R = { opacity: 0 }, E = { opacity: 0, transition: { duration: y.T.duration.instant } }, L = { opacity: 0, scale: 0.5, filter: g(y.T.blur.soft) }, A = { opacity: 0, scale: 0.6, filter: g(y.T.blur.subtle), transition: { duration: y.T.duration.fast, ease: b } }, Y = { layout: y.T.spring.morph, scale: y.T.spring.snappy, opacity: { duration: y.T.duration.fast, ease: x }, filter: { duration: y.T.duration.fast, ease: x } }, C = { opacity: 0, scale: 0.6, filter: g(y.T.blur.subtle) }, I = { ...C, transition: { duration: y.T.duration.fast, ease: b } }, z = { ...y.T.spring.snappy, opacity: { duration: y.T.duration.fast, ease: x }, filter: { duration: y.T.duration.fast, ease: x } }, M = { opacity: 0, y: "0.3em", filter: g(y.T.blur.soft) }, O = { opacity: 0, y: "-0.3em", filter: g(y.T.blur.subtle), transition: { duration: y.T.duration.fast, ease: b } };
  function W({ options: e2, reacted: t2, reduced: i2, onPick: r2 }) {
    let [s2, u2] = (0, n.useState)(0), [f2, h2] = (0, n.useState)(null), m2 = Math.min(f2 ?? s2, e2.length - 1), b2 = (0, n.useRef)([]), g2 = (0, o.d)(0), T2 = (0, n.useRef)(false);
    (0, n.useLayoutEffect)(() => {
      let e3 = b2.current[m2]?.offsetLeft ?? 0;
      if (!T2.current || i2) {
        T2.current = true, g2.jump(e3);
        return;
      }
      (0, c.i)(g2, e3, y.T.spring.morph);
    }, [m2, i2, g2]), (0, n.useEffect)(() => () => g2.stop(), [g2]);
    let j2 = e2[m2], N2 = !!j2 && t2.has(j2.id);
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)("div", { className: _().options, role: "toolbar", "aria-label": "Reactions", "aria-orientation": "horizontal", onKeyDown: function(t3) {
      let i3 = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }, a2 = e2.length, n2 = t3.key in i3 ? (s2 + i3[t3.key] + a2) % a2 : "Home" === t3.key ? 0 : "End" === t3.key ? a2 - 1 : -1;
      n2 < 0 || (t3.preventDefault(), h2(null), u2(n2), b2.current[n2]?.focus());
    }, onPointerLeave: () => h2(null), children: [(0, a.jsx)(l.PY1.span, { className: _().highlight, style: { x: g2 }, "aria-hidden": "true" }), e2.map((e3, n2) => {
      let o2 = e3.icon, c2 = n2 === m2;
      return (0, a.jsx)(l.PY1.button, { ref: (e4) => {
        b2.current[n2] = e4;
      }, type: "button", className: _().option, "aria-label": e3.label, "aria-pressed": t2.has(e3.id), tabIndex: n2 === s2 ? 0 : -1, onFocus: () => u2(n2), onPointerMove: (e4) => {
        "mouse" === e4.pointerType && f2 !== n2 && h2(n2);
      }, onClick: () => r2(e3.id), initial: i2 ? R : C, animate: P, transition: i2 ? { duration: y.T.duration.fast } : { ...z, delay: 0.04 + n2 * y.T.stagger.item, opacity: { ...z.opacity, delay: 0.04 + n2 * y.T.stagger.item }, filter: { ...z.filter, delay: 0.04 + n2 * y.T.stagger.item } }, children: (0, a.jsx)(l.PY1.span, { className: _().optionIcon, animate: { scale: c2 && !i2 ? 1.14 : 1, y: c2 && !i2 ? -1 : 0 }, transition: y.T.spring.snappy, children: (0, a.jsx)(o2, { size: 20, strokeWidth: 1.75, "aria-hidden": "true" }) }) }, e3.id);
    })] }), (0, a.jsx)("div", { className: _().caption, "aria-hidden": "true", children: (0, a.jsx)(d.N, { mode: "popLayout", initial: false, children: j2 && (0, a.jsxs)(l.PY1.span, { className: _().captionText, initial: i2 ? R : M, animate: P, exit: i2 ? E : O, transition: { duration: i2 ? y.T.duration.fast : y.T.duration.standard, ease: x }, children: [N2 && (0, a.jsx)(p.A, { size: 12, strokeWidth: 2 }), j2.label] }, `${j2.id}:${N2}`) }) })] });
  }
  function q({ options: e2, value: t2, defaultValue: i2 = [], onValueChange: o2, label: c2 = "Reactions", className: p2 }) {
    let m2, N2, w2 = (m2 = (0, n.useSyncExternalStore)(T, () => true, () => false), N2 = (0, s.I)() ?? false, m2 && N2), v2 = (0, n.useId)(), [$2, M2] = (0, n.useState)(i2), O2 = t2 ?? $2, [D, F] = (0, n.useState)({}), [G, K] = (0, n.useState)(""), [U, V] = (0, n.useState)(false), X = (0, n.useRef)(null), B = (0, n.useRef)(null), H = (0, n.useRef)(null), Q = new Map(e2.map((e3) => [e3.id, e3])), J = O2.filter((e3) => e3.count > 0 && Q.has(e3.id)), Z = new Set(J.filter((e3) => e3.reacted).map((e3) => e3.id)), ee = j(X, "height", J.map((e3) => `${e3.id}${e3.count}`).join(), w2, y.T.spring.smooth);
    function et(e3) {
      let i3 = Q.get(e3);
      if (!i3) return;
      let a2 = J.find((t3) => t3.id === e3), n2 = !a2?.reacted, r2 = Math.max(0, (a2?.count ?? 0) + (n2 ? 1 : -1)), s2 = a2 ? O2.map((t3) => t3.id === e3 ? { ...t3, count: r2, reacted: n2 } : t3).filter((e4) => e4.count > 0) : [...O2.filter((t3) => t3.id !== e3), { id: e3, count: 1, reacted: true }];
      if (0 === r2) {
        let t3 = X.current?.querySelector(`[data-reaction="${CSS.escape(e3)}"]`);
        if (t3 && t3 === document.activeElement) {
          let t4 = J.findIndex((t5) => t5.id === e3);
          H.current = J[t4 + 1]?.id ?? J[t4 - 1]?.id ?? "add";
        }
      }
      n2 && F((t3) => ({ ...t3, [e3]: (t3[e3] ?? 0) + 1 })), void 0 === t2 && M2(s2), K(n2 ? `Added ${i3.label}. ${r2} ${1 === r2 ? "reaction" : "reactions"}.` : r2 ? `Removed ${i3.label}. ${r2} ${1 === r2 ? "reaction" : "reactions"}.` : `Removed ${i3.label}.`), o2?.(s2, { id: e3, reacted: n2 });
    }
    return (0, n.useLayoutEffect)(() => {
      let e3 = H.current;
      if (!e3) return;
      H.current = null;
      let t3 = "add" === e3 ? B.current : X.current?.querySelector(`[data-reaction="${CSS.escape(e3)}"]`);
      t3?.focus();
    }), (0, a.jsxs)(l.PY1.div, { className: [_().root, p2].filter(Boolean).join(" "), style: { height: ee }, children: [(0, a.jsx)("div", { ref: X, className: _().bar, role: "group", "aria-label": c2, children: (0, a.jsxs)(u.o, { id: v2, children: [(0, a.jsx)(d.N, { mode: "popLayout", initial: false, children: J.map((e3) => {
      let t3 = Q.get(e3.id), i3 = 1 === e3.count ? "reaction" : "reactions";
      return (0, a.jsxs)(l.PY1.button, { layout: "position", type: "button", className: _().pill, "data-reaction": e3.id, "aria-pressed": e3.reacted, "aria-label": `${t3.label}, ${e3.count} ${i3}${e3.reacted ? ", including yours" : ""}`, onClick: () => et(e3.id), initial: w2 ? R : L, animate: P, exit: w2 ? E : A, whileTap: { scale: w2 ? 1 : 0.97 }, transition: w2 ? { duration: y.T.duration.fast, layout: { duration: 0 } } : Y, children: [(0, a.jsx)(S, { icon: t3.icon, pop: D[e3.id] ?? 0, reduced: w2 }), (0, a.jsx)(k, { value: e3.count, reduced: w2 }), (0, a.jsx)("span", { className: _().tip, "aria-hidden": "true", children: t3.label })] }, e3.id);
    }) }), (0, a.jsxs)(r.bL, { open: U, onOpenChange: V, children: [(0, a.jsx)(r.l9, { asChild: true, children: (0, a.jsxs)(l.PY1.button, { ref: B, layout: "position", transition: w2 ? { layout: { duration: 0 } } : { layout: y.T.spring.morph }, type: "button", className: _().add, "aria-label": "Add reaction", children: [(0, a.jsx)("span", { className: _().addIcon, "aria-hidden": "true", children: (0, a.jsx)(d.N, { initial: false, children: (0, a.jsx)(l.PY1.span, { className: _().addGlyph, initial: w2 ? R : C, animate: P, exit: w2 ? E : I, transition: w2 ? { duration: y.T.duration.fast } : z, children: U ? (0, a.jsx)(f.A, { size: 16, strokeWidth: 1.75 }) : (0, a.jsx)(h.A, { size: 16, strokeWidth: 1.75 }) }, U ? "close" : "add") }) }), !U && (0, a.jsx)("span", { className: _().tip, "aria-hidden": "true", children: "Add reaction" })] }) }), (0, a.jsx)(d.N, { children: U && (0, a.jsx)(r.ZL, { forceMount: true, children: (0, a.jsx)(r.UC, { forceMount: true, asChild: true, side: "top", align: "center", sideOffset: 8, collisionPadding: 12, "aria-label": "Add a reaction", onEscapeKeyDown: () => B.current?.focus(), onCloseAutoFocus: (e3) => e3.preventDefault(), children: (0, a.jsxs)(l.PY1.div, { className: _().picker, initial: w2 ? R : { opacity: 0, scale: 0.5, filter: g(y.T.blur.soft) }, animate: P, exit: w2 ? E : { opacity: 0, scale: 0.9, filter: g(y.T.blur.subtle), transition: { duration: y.T.duration.fast, ease: b } }, transition: w2 ? { duration: y.T.duration.fast } : { scale: y.T.spring.snappy, opacity: { duration: y.T.duration.fast, ease: b }, filter: { duration: y.T.duration.fast, ease: x } }, children: [(0, a.jsx)(r.i3, { width: 0, height: 0, className: _().arrow }), (0, a.jsx)(W, { options: e2, reacted: Z, reduced: w2, onPick: function(e3) {
      V(false), B.current?.focus(), et(e3);
    } })] }) }) }) })] })] }) }), (0, a.jsx)("span", { className: _().srOnly, role: "status", children: G })] });
  }
}

__m(__module,__exports,__require);
}