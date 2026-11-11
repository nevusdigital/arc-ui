function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  let a, n, i;
  r.r(t), r.d(t, { RangeHistogramSliderDemo: () => G });
  var s = r(95155), l = r(12115), o = r(18310), u = r(80642), d = r(25354), c = r(28245), m = r(55809), h = r(92171), p = r(7770), g = r(5492), f = r.n(g);
  let { spring: x } = p.T, _ = ({ visualDuration: e2, bounce: t2 }) => {
    let r2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: r2 * r2, damping: 2 * (1 - t2) * r2, restDelta: 2e-3, restSpeed: 0.02 };
  }, y = _(x.snappy), b = _(x.morph), j = 10, M = (e2, t2, r2) => Math.min(r2, Math.max(t2, e2)), v = (e2) => (String(e2).split(".")[1] ?? "").length;
  function w({ label: e2, data: t2, value: r2, defaultValue: a2, onValueChange: n2, onValueCommit: i2, min: u2, max: p2, step: g2 = 1, bins: x2 = 32, snapToBins: _2 = true, minStepsBetweenThumbs: S2 = 1, format: k2, thumbLabels: P2, name: A2, disabled: $2, className: D2 }) {
    let R2 = (0, o.I)() ?? false, I2 = (0, l.useId)(), L2 = g2 > 0 ? g2 : 1, C2 = u2 ?? Math.floor(Math.min(...t2, 0)), G2 = p2 ?? Math.ceil(Math.max(...t2, C2 + L2)), T = G2 - C2 || 1, Y = Math.max(v(L2), v(C2)), z = S2 * L2, [B, E] = (0, l.useState)(() => a2 ?? [C2, G2]), F = r2 ?? B, O = k2 ?? ((e3) => e3.toLocaleString("en-US", { minimumFractionDigits: Y, maximumFractionDigits: Y })), K = (0, l.useMemo)(() => (function(e3, t3, r3, a3) {
      let n3 = Array(a3).fill(0), i3 = (r3 - t3) / a3 || 1;
      for (let s2 of e3) s2 >= t3 && s2 <= r3 && n3[Math.min(a3 - 1, Math.floor((s2 - t3) / i3))]++;
      return n3;
    })(t2, C2, G2, x2), [t2, C2, G2, x2]), U = Math.max(1, ...K), V = T / x2, J = (e3) => (e3 - C2) / T * 100, X = (e3) => C2 + e3 / 100 * T, q = (e3, t3) => 1 === e3 ? t3[0] + z : C2, H = (e3, t3) => 0 === e3 ? t3[1] - z : G2, Q = (e3, t3, r3) => {
      let a3;
      return M((a3 = M(t3, C2, G2), Number((C2 + Math.round((a3 - C2) / L2) * L2).toFixed(Y))), q(e3, r3), H(e3, r3));
    }, W = (0, l.useRef)(null), Z = (0, l.useRef)(null), ee = (0, l.useRef)(F), et = (0, l.useRef)(F.map(J)), er = (0, l.useRef)(null), [ea, en] = (0, l.useState)(null), [ei, es] = (0, l.useState)(1), el = (0, c.d)(J(F[0])), eo = (0, c.d)(J(F[1])), eu = (0, c.d)(0), ed = (0, c.d)(0), ec = (0, m.G)(() => el.get() + eu.get()), em = (0, m.G)(() => eo.get() + ed.get()), eh = (0, m.G)(() => `inset(0 ${(100 - M(em.get(), 0, 100)).toFixed(3)}% 0 ${M(ec.get(), 0, 100).toFixed(3)}%)`), ep = [{ pos: el, lag: eu, shown: ec }, { pos: eo, lag: ed, shown: em }];
    function eg(e3, t3) {
      let a3 = ee.current;
      if (a3[e3] === t3) return;
      let i3 = 0 === e3 ? [t3, a3[1]] : [a3[0], t3];
      ee.current = i3, void 0 === r2 && E(i3), n2?.(i3);
    }
    (0, l.useLayoutEffect)(() => {
      ee.current = F, F.forEach((e3, t3) => {
        let r3 = J(e3), a3 = ep[t3];
        if (er.current?.index === t3 || et.current[t3] === r3) return;
        et.current[t3] = r3;
        let n3 = a3.pos.get() + a3.lag.get();
        a3.lag.jump(0), a3.pos.jump(n3), R2 ? a3.pos.jump(r3) : (0, h.i)(a3.pos, r3, y);
      });
    });
    let ef = () => W.current?.getBoundingClientRect().width || 1, ex = (e3) => Z.current?.querySelector(`[data-index="${e3}"]`)?.focus({ preventScroll: true });
    function e_(e3, t3, r3, a3) {
      let n3 = ep[t3], i3 = n3.pos.get() + n3.lag.get();
      e3.index = t3, e3.grab = a3 ? 0 : r3 - i3, n3.lag.jump(0), n3.pos.jump(i3), en(t3), es(t3), ex(t3), a3 && ey(e3, r3, 0, true), e3.samples = [{ t: 0, p: n3.pos.get() }];
    }
    function ey(e3, t3, r3, a3 = false) {
      let n3 = e3.index;
      if (null === n3) return;
      let i3 = ep[n3], s2 = ee.current, l2 = ef(), o2 = t3 - e3.grab, u3 = M(o2, J(q(n3, s2)), J(H(n3, s2))), d2 = R2 ? u3 : u3 + ((e4, t4 = j) => Math.sign(e4) * (1 - 1 / (0.55 * Math.abs(e4) / t4 + 1)) * t4)((o2 - u3) / 100 * l2) / l2 * 100;
      if (a3 && !R2) {
        let e4 = i3.pos.get();
        i3.pos.jump(d2), i3.lag.jump(e4 - d2), (0, h.i)(i3.lag, 0, y);
      } else i3.pos.set(d2);
      e3.raw = o2, e3.samples.push({ t: r3, p: d2 }), e3.samples.length > 6 && e3.samples.shift(), eg(n3, Q(n3, X(o2), s2));
    }
    function eb(e3) {
      let t3 = er.current;
      if (!t3 || t3.pointer !== e3.pointerId) return;
      er.current = null;
      let r3 = t3.index;
      if (null === r3) return;
      let a3 = ep[r3], n3 = ee.current, s2 = ef(), l2 = t3.samples, o2 = l2[0], u3 = l2[l2.length - 1], d2 = u3 && o2 ? (u3.t - o2.t) / 1e3 : 0, c2 = (d2 > 8e-3 && e3.timeStamp - u3.t < 60 ? (u3.p - o2.p) / d2 : 0) + a3.lag.getVelocity(), m2 = 100 / x2, p3 = M(t3.raw + ("pointerup" === e3.type ? M(0.099 * c2, -m2, m2) : 0), 0, 100), g3 = X(p3);
      if (_2) {
        let e4 = C2 + Math.round((g3 - C2) / V) * V;
        Math.abs(J(e4) - p3) / 100 * s2 <= 9 && (g3 = e4);
      }
      let f2 = Q(r3, g3, n3), b2 = a3.pos.get() + a3.lag.get(), j2 = J(f2);
      a3.lag.jump(0), a3.pos.jump(b2), et.current[r3] = j2, R2 ? a3.pos.jump(j2) : (0, h.i)(a3.pos, j2, { ...y, velocity: c2 }), eg(r3, f2), en(null), i2?.(ee.current);
    }
    let ej = P2 ?? [`${e2}, minimum`, `${e2}, maximum`], eM = K.map((e3, t3) => (0, s.jsx)("span", { className: f().bar, style: { height: `${e3 ? Math.max(4, e3 / U * 100) : 0}%` } }, t3));
    return (0, s.jsxs)("div", { className: [f().root, D2].filter(Boolean).join(" "), "data-disabled": $2 || void 0, "data-dragging": null !== ea || void 0, children: [(0, s.jsxs)("div", { className: f().header, children: [(0, s.jsx)("span", { id: I2, className: f().label, children: e2 }), (0, s.jsxs)("span", { className: f().readout, "aria-hidden": "true", children: [O(F[0]), (0, s.jsx)("span", { className: f().dash, children: "\u2013" }), O(F[1])] })] }), (0, s.jsxs)("div", { className: f().control, onPointerDown: function(e3) {
      let t3, r3;
      if ($2 || 0 !== e3.button || !e3.isPrimary) return;
      let a3 = W.current?.getBoundingClientRect();
      if (!a3) return;
      let n3 = (e3.clientX - a3.left) / (a3.width || 1) * 100, i3 = e3.target.closest("[data-thumb]"), s2 = ee.current;
      e3.currentTarget.setPointerCapture(e3.pointerId);
      let l2 = { pointer: e3.pointerId, index: null, grab: 0, x: e3.clientX, raw: n3, samples: [] };
      (er.current = l2, i3 && s2[1] - s2[0] <= z) ? ex(Number(i3.dataset.index)) : (e_(l2, i3 ? Number(i3.dataset.index) : (t3 = Math.abs(n3 - J(s2[0])), t3 === (r3 = Math.abs(n3 - J(s2[1]))) ? n3 < J(s2[0]) ? 0 : 1 : t3 < r3 ? 0 : 1), n3, !i3), l2.samples = [{ t: e3.timeStamp, p: ep[l2.index ?? 0].pos.get() }]);
    }, onPointerMove: function(e3) {
      let t3 = er.current;
      if (!t3 || t3.pointer !== e3.pointerId) return;
      let r3 = W.current?.getBoundingClientRect();
      if (!r3) return;
      let a3 = (e3.clientX - r3.left) / (r3.width || 1) * 100;
      if (null === t3.index) {
        let n3 = e3.clientX - t3.x;
        if (2 > Math.abs(n3)) return;
        e_(t3, n3 < 0 ? 0 : 1, a3 - n3 / (r3.width || 1) * 100, false), t3.samples = [{ t: e3.timeStamp, p: ep[t3.index ?? 0].pos.get() }];
      }
      ey(t3, a3, e3.timeStamp);
    }, onPointerUp: eb, onPointerCancel: eb, onLostPointerCapture: eb, onMouseDown: (e3) => e3.preventDefault(), children: [(0, s.jsxs)("div", { className: f().chart, "aria-hidden": "true", children: [(0, s.jsx)("div", { className: f().bars, children: eM }), (0, s.jsx)(d.PY1.div, { className: `${f().bars} ${f().lit}`, style: { clipPath: eh }, children: eM })] }), (0, s.jsxs)("div", { className: f().row, children: [(0, s.jsx)("div", { ref: W, className: f().track, children: (0, s.jsx)(d.PY1.div, { className: f().fill, style: { clipPath: eh } }) }), (0, s.jsx)("div", { ref: Z, className: f().thumbs, children: F.map((e3, t3) => (0, s.jsx)(N, { index: t3, shown: ep[t3].shown, value: e3, text: O(e3), low: q(t3, F), high: H(t3, F), label: ej[t3], active: ei === t3, lifted: ea === t3, disabled: $2, reduced: R2, onKeyDown: (e4) => (function(e5, t4) {
      let r3;
      if ($2) return;
      let a3 = ee.current, n3 = a3[e5], s2 = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1, PageUp: 2, PageDown: -2 };
      if ("Home" === t4.key) r3 = q(e5, a3);
      else if ("End" === t4.key) r3 = H(e5, a3);
      else {
        if (!(t4.key in s2)) return;
        let e6, a4 = Math.sign(s2[t4.key]);
        r3 = 2 === Math.abs(s2[t4.key]) || t4.shiftKey ? (e6 = (n3 - C2) / V, C2 + (a4 > 0 ? Math.floor(e6 + 1e-6) + 1 : Math.ceil(e6 - 1e-6) - 1) * V) : n3 + a4 * L2;
      }
      t4.preventDefault(), es(e5);
      let l2 = Q(e5, r3, a3);
      if (l2 === n3) {
        let t5 = Math.sign(r3 - n3);
        t5 && !R2 && (0, h.i)(ep[e5].pos, et.current[e5], { ...b, velocity: 150 * t5 / ef() * 100 });
        return;
      }
      eg(e5, l2), i2?.(ee.current);
    })(t3, e4) }, t3)) })] })] }), A2 && F.map((e3, t3) => (0, s.jsx)("input", { type: "hidden", name: A2, value: e3, disabled: $2 }, t3))] });
  }
  function N({ index: e2, shown: t2, value: r2, text: a2, low: n2, high: i2, label: l2, active: o2, lifted: u2, disabled: c2, reduced: h2, onKeyDown: p2 }) {
    let g2 = (0, m.G)(t2, (e3) => `${e3 - 100}%`);
    return (0, s.jsxs)(d.PY1.div, { className: f().layer, style: { x: g2, zIndex: o2 ? 2 : 1 }, children: [(0, s.jsx)("span", { className: f().guide, "data-on": u2 || void 0, "aria-hidden": "true" }), (0, s.jsx)(d.PY1.div, { role: "slider", "data-thumb": "", "data-index": e2, className: f().thumb, tabIndex: c2 ? -1 : 0, "aria-label": l2, "aria-valuemin": n2, "aria-valuemax": i2, "aria-valuenow": r2, "aria-valuetext": a2, "aria-orientation": "horizontal", "aria-disabled": c2 || void 0, initial: false, animate: { scale: u2 ? 1.18 : 1 }, transition: h2 ? { duration: 0 } : x.snappy, onKeyDown: p2 })] });
  }
  var S = r(61592), k = r.n(S);
  let P = (a = 20260923, n = () => (a = (1664525 * a + 1013904223) % 4294967296) / 4294967296, i = () => Math.sqrt(-2 * Math.log(n() || 1e-9)) * Math.cos(2 * Math.PI * n()), Array.from({ length: 480 }, (e2, t2) => Math.round(Math.min(600, Math.max(35, t2 % 7 == 0 ? Math.exp(5.9 + 0.28 * i()) : Math.exp(4.85 + 0.38 * i())))))), A = (e2) => `$${e2.toLocaleString("en-US")}${600 === e2 ? "+" : ""}`, { blur: $, duration: D } = p.T, R = [...p.T.ease.enter], I = [...p.T.ease.standard], L = { hidden: (e2) => ({ opacity: 0, y: `${0.35 * e2}em`, filter: `blur(${$.soft}px)` }), shown: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: D.standard, ease: R } }, gone: (e2) => ({ opacity: 0, y: `${-0.35 * e2}em`, filter: `blur(${$.subtle}px)`, transition: { duration: D.fast, ease: I } }) }, C = { hidden: { opacity: 0, y: 0, filter: "blur(0px)" }, shown: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: D.fast } }, gone: { opacity: 0, transition: { duration: D.instant } } };
  function G() {
    let e2 = (0, o.I)(), [t2, r2] = (0, l.useState)([80, 260]), a2 = P.filter((e3) => e3 >= t2[0] && e3 <= t2[1]).length, [n2, i2] = (0, l.useState)({ count: a2, direction: 1 });
    return n2.count !== a2 && i2({ count: a2, direction: a2 > n2.count ? 1 : -1 }), (0, s.jsxs)("div", { className: k().demo, children: [(0, s.jsx)(w, { label: "Price per night", data: P, min: 30, max: 600, step: 5, bins: 38, value: t2, onValueChange: r2, format: A, thumbLabels: ["Minimum price", "Maximum price"] }), (0, s.jsxs)("p", { className: k().result, children: [(0, s.jsx)("span", { children: "Stays in Lisbon in this range" }), (0, s.jsxs)("span", { className: k().tally, "aria-hidden": "true", children: [(0, s.jsx)("span", { className: k().count, children: (0, s.jsx)(u.N, { mode: "popLayout", initial: false, custom: n2.direction, children: (0, s.jsx)(d.PY1.span, { className: k().countValue, custom: n2.direction, variants: e2 ? C : L, initial: "hidden", animate: "shown", exit: "gone", children: a2 }, a2) }) }), " of ", P.length] }), (0, s.jsxs)("span", { className: k().srOnly, "aria-live": "polite", "aria-atomic": "true", children: [a2, " of ", P.length, " stays"] })] })] });
  }
}

__m(__module,__exports,__require);
}