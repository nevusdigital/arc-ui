function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { ImageCompareDemo: () => z });
  var n = r(95155), a = r(12115), i = r(5772), l = r(92298), o = r(18310), s = r(28245), u = r(55809), c = r(92171), d = r(25354), f = r(78780), h = r(76721), A = r(7770), g = r(84642), p = r.n(g);
  let { spring: m } = A.T, v = ({ visualDuration: e2, bounce: t2 }) => {
    let r2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: r2 * r2, damping: 2 * (1 - t2) * r2, restDelta: 2e-3, restSpeed: 0.02 };
  }, y = v(m.snappy), x = v(m.morph), b = v(m.morph), w = 9, _ = (e2, t2, r2) => Math.min(r2, Math.max(t2, e2)), j = (e2, t2, r2) => e2 + (t2 - e2) * r2, P = (e2) => 12 * (1 - 1 / (e2 / 12 + 1)), M = (e2, t2) => e2 < 42 ? 42 - P(42 - e2) : e2 > t2 - 42 ? t2 - 42 + P(e2 - t2 + 42) : e2, I = (e2) => _(e2 / 28, 0, 1);
  function C({ before: e2, after: t2, position: r2, defaultPosition: i2 = 50, onPositionChange: l2, orientation: A2 = "horizontal", labels: g2 = ["Before", "After"], label: v2 = "Before and after", aspectRatio: P2 = "3 / 2", className: E2 }) {
    let k2 = (0, o.I)(), D2 = "vertical" === A2, [R2, N2] = (0, a.useState)(i2), L2 = _(r2 ?? R2, 0, 100), S2 = Math.round(100 - L2), G2 = (0, a.useRef)(null), z2 = (0, a.useRef)(null), Y = (0, a.useRef)(null), F = (0, a.useRef)(null), Q = (0, a.useRef)(L2), U = (0, a.useRef)(L2), W = (0, a.useRef)(null), B = (0, a.useRef)(false), [$, O] = (0, a.useState)(false), [T, X] = (0, a.useState)(false), H = (0, s.d)(L2), q = (0, s.d)(0), V = (0, s.d)(90 * !!D2), K = (0, s.d)({ w: 0, h: 0, bw: 0, bh: 0, aw: 0, ah: 0 }), Z = (0, u.G)(() => H.get() + q.get()), J = (0, u.G)(() => _(V.get() / 90, 0, 1)), ee = (e3, t3) => [j(e3 / 100 * t3.w, t3.w / 2, J.get()), j(t3.h / 2, e3 / 100 * t3.h, J.get())], et = (0, u.G)(() => {
      var e3, t3, r3, n2;
      let a2, i3, l3, o2, s2, u2 = V.get(), c2 = _(Z.get(), 0, 100), d2 = K.get();
      return 0 !== u2 && d2.w ? 90 === u2 ? `inset(0 0 ${(100 - c2).toFixed(3)}% 0)` : (e3 = d2.w, t3 = d2.h, r3 = ee(c2, d2), a2 = -Math.cos(n2 = u2 * Math.PI / 180), i3 = -Math.sin(n2), l3 = ([e4, t4]) => (e4 - r3[0]) * a2 + (t4 - r3[1]) * i3, s2 = [], (o2 = [[0, 0], [e3, 0], [e3, t3], [0, t3]]).forEach((e4, t4) => {
        let r4 = o2[(t4 + 1) % 4], n3 = l3(e4), a3 = l3(r4);
        if (n3 >= 0 && s2.push(e4), n3 >= 0 != a3 >= 0) {
          let t5 = n3 / (n3 - a3);
          s2.push([e4[0] + (r4[0] - e4[0]) * t5, e4[1] + (r4[1] - e4[1]) * t5]);
        }
      }), s2.length ? `polygon(${s2.map(([e4, t4]) => `${e4.toFixed(2)}px ${t4.toFixed(2)}px`).join(", ")})` : "inset(50%)") : u2 >= 45 ? `inset(0 0 ${(100 - c2).toFixed(3)}% 0)` : `inset(0 ${(100 - c2).toFixed(3)}% 0 0)`;
    }), er = (e3, t3) => 0 === e3 || 90 === e3 || !t3.w, en = (0, u.G)(() => {
      let e3 = V.get(), t3 = K.get();
      return er(e3, t3) ? e3 >= 45 ? "50%" : `${Z.get()}%` : `${ee(Z.get(), t3)[0]}px`;
    }), ea = (0, u.G)(() => {
      let e3 = V.get(), t3 = K.get();
      return er(e3, t3) ? e3 >= 45 ? `${Z.get()}%` : "50%" : `${ee(Z.get(), t3)[1]}px`;
    }), ei = () => {
      let e3 = K.get();
      if (!e3.w) return 0;
      let t3 = Z.get(), r3 = t3 / 100 * e3.w, n2 = t3 / 100 * e3.h;
      return j(M(r3, e3.w) - r3, M(n2, e3.h) - n2, J.get());
    }, el = (0, u.G)(() => ei() * Math.cos(V.get() * Math.PI / 180)), eo = (0, u.G)(() => ei() * Math.sin(V.get() * Math.PI / 180)), es = (0, u.G)(() => {
      let e3 = K.get(), t3 = J.get(), r3 = _(Z.get(), 0, 100), n2 = _(1 - 3 * t3, 0, 1), a2 = _(3 * t3 - 2, 0, 1);
      return e3.w ? n2 * I(r3 / 100 * e3.w - (12 + e3.bw + 8)) + a2 * I(r3 / 100 * e3.h - (12 + e3.bh + 8)) : n2 + a2;
    }), eu = (0, u.G)(() => {
      let e3 = K.get(), t3 = _(1 - 3 * J.get(), 0, 1);
      return e3.w ? t3 * I(e3.w - 12 - e3.aw - 8 - _(Z.get(), 0, 100) / 100 * e3.w) : t3;
    }), ec = (0, u.G)(() => {
      let e3 = K.get(), t3 = _(3 * J.get() - 2, 0, 1);
      return e3.w ? t3 * I(e3.h - 12 - e3.ah - 8 - _(Z.get(), 0, 100) / 100 * e3.h) : t3;
    });
    function ed(e3, t3 = false) {
      if (t3 && Math.round(e3) === Math.round(Q.current)) return;
      let n2 = Number(e3.toFixed(2));
      n2 !== Q.current && (Q.current = n2, void 0 === r2 && N2(n2), l2?.(n2));
    }
    (0, a.useLayoutEffect)(() => {
      let e3 = G2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = () => K.set({ w: e3.clientWidth, h: e3.clientHeight, bw: Y.current?.offsetWidth ?? 0, bh: Y.current?.offsetHeight ?? 0, aw: F.current?.offsetWidth ?? 0, ah: F.current?.offsetHeight ?? 0 }), r3 = new ResizeObserver(t3);
      return [e3, Y.current, F.current].forEach((e4) => e4 && r3.observe(e4)), t3(), () => r3.disconnect();
    }, [K]), (0, a.useEffect)(() => {
      let e3 = 90 * !!D2;
      V.get() !== e3 && (k2 ? V.jump(e3) : (0, c.i)(V, e3, x));
    }, [k2, V, D2]), (0, a.useLayoutEffect)(() => {
      if (Q.current = L2, W.current?.started || U.current === L2) return;
      U.current = L2;
      let e3 = H.get() + q.get();
      q.jump(0), H.jump(e3), k2 ? H.jump(L2) : (0, c.i)(H, L2, y);
    });
    let ef = (e3) => {
      let t3 = G2.current.getBoundingClientRect();
      return D2 ? (e3.clientY - t3.top) / (t3.height || 1) * 100 : (e3.clientX - t3.left) / (t3.width || 1) * 100;
    }, eh = () => {
      let e3 = G2.current?.getBoundingClientRect();
      return (D2 ? e3?.height : e3?.width) || 1;
    };
    function eA() {
      let e3 = z2.current;
      e3 && document.activeElement !== e3 && (X(true), e3.focus({ preventScroll: true }));
    }
    function eg(e3, t3) {
      let r3 = H.get() + q.get();
      e3.started = true, e3.grab = e3.press ? 0 : t3 - r3, q.jump(0), H.jump(r3), O(true), eA(), ep(e3, t3, true);
    }
    function ep(e3, t3, r3 = false) {
      let n2 = t3 - e3.grab, a2 = eh(), i3 = _(n2, 0, 100), l3 = k2 ? i3 : i3 + ((e4, t4 = w) => Math.sign(e4) * (1 - 1 / (0.55 * Math.abs(e4) / t4 + 1)) * t4)((n2 - i3) / 100 * a2) / a2 * 100;
      if (e3.raw = n2, r3 && e3.press && !k2) {
        let e4 = H.get();
        H.jump(l3), q.jump(e4 - l3), (0, c.i)(q, 0, y);
      } else H.set(l3);
      ed(i3, true);
    }
    function em(e3) {
      let t3 = W.current;
      if (!t3 || t3.pointer !== e3.pointerId) return;
      if (W.current = null, !t3.started) {
        "pointerup" === e3.type && (eA(), ed(_(ef(e3), 0, 100)));
        return;
      }
      let r3 = H.get() + q.get(), n2 = q.getVelocity() + (r3 > 100 || r3 < 0 ? H.getVelocity() : 0), a2 = _(0 !== q.get() ? t3.raw : r3, 0, 100);
      q.jump(0), H.jump(r3), U.current = Number(a2.toFixed(2)), r3 !== a2 && (k2 ? H.jump(a2) : (0, c.i)(H, a2, { ...y, velocity: n2 })), ed(a2), O(false);
    }
    return (0, n.jsxs)("div", { ref: G2, className: [p().root, E2].filter(Boolean).join(" "), "data-orientation": A2, "data-dragging": $ || void 0, "data-frame-keep": "", style: { aspectRatio: P2 }, onPointerDown: function(e3) {
      if (0 !== e3.button || !e3.isPrimary || !G2.current) return;
      let t3 = !!e3.target.closest("[data-handle]");
      B.current = t3, e3.currentTarget.setPointerCapture(e3.pointerId);
      let r3 = { pointer: e3.pointerId, grab: 0, press: !t3, started: false, x: e3.clientX, y: e3.clientY, raw: 0 };
      W.current = r3, ("touch" !== e3.pointerType || t3) && eg(r3, ef(e3));
    }, onPointerMove: function(e3) {
      let t3 = W.current;
      if (t3 && t3.pointer === e3.pointerId) {
        if (!t3.started) {
          let r3 = Math.abs(D2 ? e3.clientY - t3.y : e3.clientX - t3.x), n2 = Math.abs(D2 ? e3.clientX - t3.x : e3.clientY - t3.y);
          if (r3 < 6 && n2 < 6) return;
          if (n2 > r3) {
            W.current = null;
            return;
          }
          eg(t3, ef(e3));
          return;
        }
        ep(t3, ef(e3));
      }
    }, onPointerUp: em, onPointerCancel: em, onLostPointerCapture: em, onMouseDown: (e3) => e3.preventDefault(), onDragStart: (e3) => e3.preventDefault(), onDoubleClick: () => {
      B.current && 50 !== Q.current && ed(50);
    }, children: [(0, n.jsx)("div", { className: p().layer, children: t2 }), (0, n.jsx)(d.PY1.div, { className: p().layer, style: { clipPath: et }, children: e2 }), g2 && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(d.PY1.span, { ref: Y, className: p().chip, style: { opacity: es }, "aria-hidden": "true", children: g2[0] }), (0, n.jsx)(d.PY1.span, { ref: F, className: p().chip, "data-place": "end", style: { opacity: eu }, "aria-hidden": "true", children: g2[1] }), (0, n.jsx)(d.PY1.span, { className: p().chip, "data-place": "bottom", style: { opacity: ec }, "aria-hidden": "true", children: g2[1] })] }), (0, n.jsxs)(d.PY1.div, { className: p().pivot, style: { x: en, y: ea }, children: [(0, n.jsx)(d.PY1.span, { className: p().rotor, style: { rotate: V }, children: (0, n.jsx)("span", { className: p().line }) }), (0, n.jsx)(d.PY1.span, { className: p().handleSlot, style: { x: el, y: eo }, children: (0, n.jsx)(d.PY1.div, { ref: z2, "data-handle": "", "data-quiet": T || void 0, className: p().handle, role: "slider", tabIndex: 0, "aria-label": v2, "aria-orientation": A2, "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": S2, "aria-valuetext": `${S2}% after`, initial: false, animate: $ ? D2 ? { width: 36, height: 56 } : { width: 56, height: 36 } : { width: 40, height: 40 }, transition: k2 ? { duration: 0 } : m.morph, onKeyDown: function(e3) {
      let t3, r3 = e3.shiftKey ? 10 : 1, n2 = D2 ? { ArrowUp: -r3, ArrowDown: r3, ArrowRight: -r3, ArrowLeft: r3, PageUp: -10, PageDown: 10 } : { ArrowLeft: -r3, ArrowRight: r3, ArrowUp: -r3, ArrowDown: r3, PageUp: -10, PageDown: 10 };
      if ("Home" === e3.key) t3 = 100;
      else if ("End" === e3.key) t3 = 0;
      else {
        if (!(e3.key in n2)) return;
        t3 = Math.round(Q.current) + n2[e3.key];
      }
      e3.preventDefault(), X(false);
      let a2 = _(t3, 0, 100);
      if (a2 === Q.current) {
        k2 || t3 === a2 || (0, c.i)(H, U.current, { ...b, velocity: 150 * Math.sign(t3 - a2) / eh() * 100 });
        return;
      }
      ed(a2);
    }, onBlur: () => X(false), children: (0, n.jsxs)(d.PY1.span, { className: p().chevrons, style: { rotate: V }, "aria-hidden": "true", children: [(0, n.jsx)(d.PY1.span, { className: p().chevron, initial: false, animate: { x: $ ? -4 : 0 }, transition: k2 ? { duration: 0 } : m.morph, children: (0, n.jsx)(f.A, { size: 16, strokeWidth: 1.75 }) }), (0, n.jsx)(d.PY1.span, { className: p().chevron, initial: false, animate: { x: 4 * !!$ }, transition: k2 ? { duration: 0 } : m.morph, children: (0, n.jsx)(h.A, { size: 16, strokeWidth: 1.75 }) })] }) }) })] })] });
  }
  var E = r(66558);
  let k = { src: "_next/static/media/living-room.87b656c0.jpg", height: 1600, width: 1200, blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oADAMBAAIQAxAAAAC4AO//xAAcEAACAgIDAAAAAAAAAAAAAAADEQEhAjEAEhT/2gAIAQEAAT8A9YcI7hOIdrWTU3S1z//EABcRAQADAAAAAAAAAAAAAAAAAAEAE1H/2gAIAQIBAT8AscJ//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECE1H/2gAIAQMBAT8AqjrP/9k=", blurWidth: 6, blurHeight: 8 };
  var D = r(97726), R = r.n(D);
  let N = { objectPosition: "50% 60%", filter: "saturate(.45) contrast(.78) brightness(1.1) sepia(.12)" }, L = { objectPosition: "50% 60%" }, S = "(max-width: 620px) 100vw, 560px", G = [{ value: "horizontal", label: "Side by side" }, { value: "vertical", label: "Stacked" }];
  function z() {
    let [e2, t2] = (0, a.useState)(38), [r2, o2] = (0, a.useState)("horizontal"), s2 = 0.05 > Math.abs(e2 - 50);
    return (0, n.jsxs)("figure", { className: R().demo, children: [(0, n.jsx)(C, { position: e2, onPositionChange: t2, orientation: r2, label: "Living room, raw and graded", before: (0, n.jsx)(i.default, { src: k, alt: "Raw capture of a bright living room with timber beams and arched windows, flat and muted", fill: true, sizes: S, loading: "eager", style: N }), after: (0, n.jsx)(i.default, { src: k, alt: "Final grade of the same room, with warmer light and richer wood tones", fill: true, sizes: S, loading: "eager", style: L }) }), (0, n.jsxs)("figcaption", { className: R().bar, children: [(0, n.jsxs)("span", { className: R().caption, children: [(0, n.jsx)("span", { className: R().title, children: "Living room" }), (0, n.jsx)("span", { className: R().meta, children: "Raw capture and final grade" })] }), (0, n.jsxs)("span", { className: R().controls, children: [(0, n.jsx)(E.A, { label: "Orientation", options: G, value: r2, onValueChange: (e3) => o2("vertical" === e3 ? "vertical" : "horizontal") }), (0, n.jsxs)("button", { type: "button", className: R().reset, disabled: s2, onClick: () => t2(50), children: [(0, n.jsx)(l.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Center"] })] })] })] });
  }
}

__m(__module,__exports,__require);
}