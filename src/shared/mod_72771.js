function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ElasticSliderDemo: () => T });
  var s = a(95155), l = a(12115), i = a(37067), r = a(84614), n = a(69450), u = a(39341), d = a(18310), c = a(28245), o = a(55809), m = a(22535), p = a(42922), h = a(92171), v = a(25354), _ = a(80642), f = a(7770), b = a(72806), x = a.n(b);
  let { spring: y, duration: g, blur: j } = f.T, k = [...f.T.ease.enter], N = [...f.T.ease.standard], w = ({ visualDuration: e2, bounce: t2 }, a2 = 2e-3) => {
    let s2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: s2 * s2, damping: 2 * (1 - t2) * s2, restDelta: a2, restSpeed: 10 * a2 };
  }, P = w(y.snappy), M = w({ visualDuration: 0.5, bounce: 0.42 }, 0.05), S = 26, R = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), I = (e2) => (String(e2).split(".")[1] ?? "").length, A = { opacity: 0, scale: 0.7, y: 6, filter: `blur(${j.subtle}px)` }, D = { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }, E = { opacity: 0, scale: 0.85, y: 4, filter: `blur(${j.subtle}px)`, transition: { duration: g.instant, ease: N } }, C = { ...y.snappy, opacity: { duration: g.fast, ease: k }, filter: { duration: g.fast, ease: k } };
  function G({ label: e2, value: t2, defaultValue: a2, onValueChange: i2, onValueCommit: r2, min: n2 = 0, max: u2 = 100, step: f2 = 1, largeStep: b2, marks: j2, format: N2, showValue: w2 = true, startIcon: $2, endIcon: Y2, name: z2, disabled: L2, className: T2 }) {
    let V = (0, d.I)() ?? false, X = (0, l.useId)(), B = f2 > 0 ? f2 : 1, F = u2 - n2 || 1, Q = Math.max(I(B), I(n2)), [W, O] = (0, l.useState)(() => R(a2 ?? n2, n2, u2)), U = void 0 === t2 ? W : R(t2, n2, u2), H = N2 ?? ((e3) => e3.toLocaleString("en-US", { minimumFractionDigits: Q, maximumFractionDigits: Q })), J = (e3) => (e3 - n2) / F * 100, K = (e3) => n2 + e3 / 100 * F, q = (e3) => R(Number((n2 + Math.round((e3 - n2) / B) * B).toFixed(Q)), n2, u2), Z = (j2 ?? []).map((e3) => "number" == typeof e3 ? { value: e3 } : e3).filter((e3) => e3.value >= n2 && e3.value <= u2), ee = (0, l.useRef)(null), et = (0, l.useRef)(null), ea = (0, l.useRef)(/* @__PURE__ */ new Map()), es = (0, l.useRef)(U), el = (0, l.useRef)(J(U)), ei = (0, l.useRef)(null), er = (0, l.useRef)(1), en = (0, l.useRef)(void 0), [eu, ed] = (0, l.useState)(false), [ec, eo] = (0, l.useState)(false), [em, ep] = (0, l.useState)(false), eh = (0, c.d)(J(U)), ev = (0, c.d)(0), e_ = (0, c.d)(0), ef = (0, c.d)(0), eb = (0, o.G)(() => eh.get() + ev.get()), ex = (0, o.G)(eb, (e3) => `${e3 - 100}%`), ey = (0, o.G)(eb, (e3) => `inset(0 ${(100 - R(e3, 0, 100)).toFixed(3)}% 0 0 round 999px)`), eg = (0, o.G)(e_, (e3) => 1 + Math.abs(e3) / er.current), ej = (0, o.G)(e_, (e3) => +(e3 < 0)), ek = (0, o.G)(() => (1 + 0.45 * ef.get()) * (1 - Math.abs(e_.get()) / S * 0.32)), eN = (0, o.G)(e_, (e3) => Math.min(0, e3)), ew = (0, o.G)(e_, (e3) => Math.max(0, e3)), eP = (0, m.z)(eb, { stiffness: 420, damping: 30, mass: 0.7 }), eM = V ? eb : eP, eS = (0, o.G)(eM, (e3) => `${e3 - 100}%`), eR = (0, p.V)(eP), eI = (0, o.G)(eR, (e3) => V ? 0 : R(-e3 / 100 * er.current * 9e-3, -11, 11)), eA = (e3) => {
      es.current !== e3 && (es.current = e3, void 0 === t2 && O(e3), i2?.(e3));
    };
    function eD(e3, t3) {
      let a3 = ea.current.get(e3);
      a3 && !V && (0, h.i)(a3, { scale: [1, 2.1, 1] }, { duration: 0.34, ease: k }), t3 && "u" > typeof navigator && "vibrate" in navigator && navigator.vibrate?.(6);
    }
    function eE(e3, t3, a3, s2 = false) {
      let l2 = t3 - e3.grab, i3 = R(l2, 0, 100);
      e_.set(V ? 0 : ((e4, t4 = S) => Math.sign(e4) * (1 - 1 / (0.55 * Math.abs(e4) / t4 + 1)) * t4)((l2 - i3) / 100 * er.current));
      let r3 = ((e4) => {
        let t4 = null, a4 = 8;
        for (let s3 of Z) {
          let l3 = Math.abs((e4 - J(s3.value)) / 100 * er.current);
          l3 <= 7 && l3 < a4 && (t4 = s3.value, a4 = l3);
        }
        return t4;
      })(i3), n3 = null === r3 ? i3 : J(r3);
      if (s2 || r3 !== e3.detent) {
        let t4;
        null === r3 || s2 || eD(r3, "touch" === e3.type), t4 = eh.get() + ev.get(), (eh.set(n3), V) ? ev.jump(0) : (ev.jump(t4 - n3), (0, h.i)(ev, 0, P));
      } else eh.set(n3);
      e3.detent = r3, e3.edge = i3, e3.samples.push({ t: a3, p: n3 }), e3.samples.length > 6 && e3.samples.shift(), eA(r3 ?? q(K(i3)));
    }
    function eC(e3) {
      let t3 = ei.current;
      if (!t3 || t3.pointer !== e3.pointerId) return;
      ei.current = null;
      let a3 = t3.samples, s2 = a3[0], l2 = a3[a3.length - 1], i3 = l2 && s2 ? (l2.t - s2.t) / 1e3 : 0, n3 = (i3 > 8e-3 && e3.timeStamp - l2.t < 60 ? (l2.p - s2.p) / i3 : 0) + ev.getVelocity(), u3 = t3.detent ?? q(K(t3.edge)), d2 = eh.get() + ev.get(), c2 = J(u3);
      ev.jump(0), eh.jump(d2), el.current = c2, V ? (eh.jump(c2), e_.jump(0), ef.jump(0)) : ((0, h.i)(eh, c2, { ...P, velocity: n3 }), (0, h.i)(e_, 0, { ...M, velocity: e_.getVelocity() }), (0, h.i)(ef, 0, y.snappy)), eA(u3), ed(false), ep(true), en.current = window.setTimeout(() => ep(false), 700), r2?.(u3);
    }
    (0, l.useLayoutEffect)(() => {
      es.current = U;
      let e3 = J(U);
      if (ei.current || el.current === e3) return;
      el.current = e3;
      let t3 = eh.get() + ev.get();
      ev.jump(0), eh.jump(t3), V ? eh.jump(e3) : (0, h.i)(eh, e3, P);
    }), (0, l.useEffect)(() => {
      let e3 = ee.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([e4]) => {
        e4 && (er.current = e4.contentRect.width || 1);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, l.useEffect)(() => () => window.clearTimeout(en.current), []);
    let eG = H(U), e$ = Z.filter((e3) => e3.label), eY = eu || ec || em;
    return (0, s.jsxs)("div", { className: [x().root, T2].filter(Boolean).join(" "), "data-disabled": L2 || void 0, "data-dragging": eu || void 0, "data-tag": eY || void 0, "data-marks": e$.length > 0 || void 0, children: [(0, s.jsxs)("div", { className: x().header, children: [(0, s.jsx)("span", { id: X, className: x().label, children: e2 }), w2 && (0, s.jsx)("span", { className: x().readout, "aria-hidden": "true", children: eG })] }), (0, s.jsxs)("div", { className: x().body, children: [$2 && (0, s.jsx)(v.PY1.span, { className: x().start, style: { x: eN }, "aria-hidden": "true", children: $2 }), (0, s.jsxs)("div", { className: x().control, onPointerDown: function(e3) {
      if (L2 || 0 !== e3.button || !e3.isPrimary) return;
      let t3 = ee.current?.getBoundingClientRect();
      if (!t3) return;
      er.current = t3.width || 1;
      let a3 = (e3.clientX - t3.left) / er.current * 100, s2 = !!e3.target.closest("[data-thumb]");
      e3.currentTarget.setPointerCapture(e3.pointerId);
      let l2 = eh.get() + ev.get();
      ev.jump(0), eh.jump(l2);
      let i3 = { pointer: e3.pointerId, grab: s2 ? a3 - l2 : 0, samples: [], detent: null, edge: l2, type: e3.pointerType };
      ei.current = i3, ed(true), window.clearTimeout(en.current), ep(false), et.current?.focus({ preventScroll: true }), V ? ef.jump(1) : (0, h.i)(ef, 1, y.snappy), eE(i3, s2 ? l2 + i3.grab : a3, e3.timeStamp, true);
    }, onPointerMove: function(e3) {
      let t3 = ei.current;
      if (!t3 || t3.pointer !== e3.pointerId) return;
      let a3 = ee.current?.getBoundingClientRect();
      a3 && eE(t3, (e3.clientX - a3.left) / (a3.width || 1) * 100, e3.timeStamp);
    }, onPointerUp: eC, onPointerCancel: eC, onLostPointerCapture: eC, onMouseDown: (e3) => e3.preventDefault(), children: [(0, s.jsxs)("div", { ref: ee, className: x().rail, children: [(0, s.jsx)(v.PY1.div, { className: x().track, style: { scaleX: eg, scaleY: ek, originX: ej }, children: (0, s.jsx)(v.PY1.div, { className: x().fill, style: { clipPath: ey } }) }), Z.filter((e3) => e3.value > n2 && e3.value < u2).map((e3) => (0, s.jsx)("span", { ref: (t3) => {
      t3 ? ea.current.set(e3.value, t3) : ea.current.delete(e3.value);
    }, className: x().tick, "data-on": e3.value <= U || void 0, style: { left: `${J(e3.value)}%` } }, e3.value))] }), (0, s.jsxs)("div", { className: x().thumbs, children: [(0, s.jsx)(v.PY1.div, { className: x().layer, style: { x: eS }, children: (0, s.jsx)(v.PY1.span, { className: x().bubbleAnchor, style: { x: e_, "--at": eM }, children: (0, s.jsx)(_.N, { children: eY && (0, s.jsx)(v.PY1.span, { className: x().bubble, "aria-hidden": "true", style: { rotate: eI }, initial: V ? { opacity: 0 } : A, animate: D, exit: V ? { opacity: 0, transition: { duration: g.instant } } : E, transition: V ? { duration: 0.15 } : C, children: eG }, "bubble") }) }) }), (0, s.jsx)(v.PY1.div, { className: x().layer, style: { x: ex }, children: (0, s.jsx)(v.PY1.div, { className: x().shift, style: { x: e_ }, children: (0, s.jsx)(v.PY1.div, { ref: et, role: "slider", "data-thumb": "", className: x().thumb, tabIndex: L2 ? -1 : 0, "aria-labelledby": X, "aria-valuemin": n2, "aria-valuemax": u2, "aria-valuenow": U, "aria-valuetext": eG, "aria-orientation": "horizontal", "aria-disabled": L2 || void 0, initial: false, animate: { scale: eu ? 1.28 : 1 }, transition: V ? { duration: 0 } : y.snappy, onKeyDown: function(e3) {
      let t3;
      if (L2) return;
      let a3 = es.current, s2 = b2 ?? Math.max(B, q(n2 + F / 10) - n2), l2 = { ArrowRight: B, ArrowUp: B, ArrowLeft: -B, ArrowDown: -B, PageUp: s2, PageDown: -s2 };
      if ("Home" === e3.key) t3 = n2;
      else if ("End" === e3.key) t3 = u2;
      else {
        if (!(e3.key in l2)) return;
        t3 = a3 + (e3.shiftKey && e3.key.startsWith("Arrow") ? Math.sign(l2[e3.key]) * s2 : l2[e3.key]);
      }
      e3.preventDefault(), eo(true);
      let i3 = q(t3);
      if (i3 === a3) {
        let e4 = Math.sign(t3 - a3);
        e4 && !V && (0, h.i)(e_, 0, { ...M, velocity: 260 * e4 });
        return;
      }
      eA(i3), Z.some((e4) => e4.value === i3) && eD(i3, false), r2?.(i3);
    }, onBlur: () => eo(false) }) }) })] })] }), Y2 && (0, s.jsx)(v.PY1.span, { className: x().end, style: { x: ew }, "aria-hidden": "true", children: Y2 }), e$.length > 0 && (0, s.jsx)("div", { className: x().marks, "aria-hidden": "true", children: e$.map((e3) => (0, s.jsx)("span", { className: x().markLabel, "data-on": e3.value === U || void 0, "data-edge": e3.value === n2 ? "start" : e3.value === u2 ? "end" : void 0, style: { left: `${J(e3.value)}%` }, onClick: () => {
      L2 || e3.value === es.current || (eA(e3.value), eD(e3.value, false), r2?.(e3.value));
    }, children: e3.label }, e3.value)) })] }), z2 && (0, s.jsx)("input", { type: "hidden", name: z2, value: U, disabled: L2 })] });
  }
  var $ = a(39979), Y = a.n($);
  let z = [0.5, 1, 1.5, 2].map((e2) => ({ value: e2, label: `${e2}\xD7` })), L = (e2) => `${e2.toFixed(2).replace(/\.?0+$/, "")}\xD7`;
  function T() {
    let [e2, t2] = (0, l.useState)(64), [a2, d2] = (0, l.useState)(1), c2 = Math.round(42 / a2);
    return (0, s.jsxs)("div", { className: Y().demo, children: [(0, s.jsx)(G, { label: "Volume", value: e2, onValueChange: t2, format: (e3) => `${e3}%`, startIcon: (0, s.jsx)(i.A, { size: 20, strokeWidth: 1.75 }), endIcon: (0, s.jsx)(r.A, { size: 20, strokeWidth: 1.75 }) }), (0, s.jsxs)("div", { className: Y().section, children: [(0, s.jsx)(G, { label: "Playback speed", value: a2, onValueChange: d2, min: 0.25, max: 2.5, step: 0.05, largeStep: 0.25, marks: z, format: L, startIcon: (0, s.jsx)(n.A, { size: 20, strokeWidth: 1.75 }), endIcon: (0, s.jsx)(u.A, { size: 20, strokeWidth: 1.75 }) }), (0, s.jsxs)("p", { className: Y().result, children: ["Episode 118 plays in ", (0, s.jsxs)("span", { className: Y().value, children: [c2, " min"] }), " at this speed"] })] })] });
  }
}

__m(__module,__exports,__require);
}