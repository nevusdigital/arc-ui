function(__module,__exports,__require){
"use strict";
function __m(e, r, t) {
  "use strict";
  t.r(r), t.d(r, { RulerSliderDemo: () => A });
  var n = t(95155), i = t(12115), a = t(80642), l = t(25354), s = t(18310), u = t(28245), o = t(55809), c = t(92171), d = t(7770), m = t(73820), p = t.n(m);
  let { spring: f } = d.T, h = ({ visualDuration: e2, bounce: r2 }) => {
    let t2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: t2 * t2, damping: 2 * (1 - r2) * t2 };
  }, _ = h(f.snappy), g = 44, v = (e2, r2, t2) => Math.min(t2, Math.max(r2, e2)), x = (e2) => (String(e2).split(".")[1] ?? "").length, y = (e2) => e2 >= "0" && e2 <= "9", j = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  function b({ text: e2, reduced: r2 }) {
    let t2 = [...e2], i2 = t2.filter(y).length, s2 = 0, u2 = r2 ? { duration: 0 } : f.morph;
    return (0, n.jsx)("span", { className: p().rolling, children: (0, n.jsx)(a.N, { initial: false, children: t2.map((e3) => {
      let r3 = y(e3), t3 = r3 ? `d${--i2}` : `s${i2}-${s2++}`;
      return r3 && (s2 = 0), (0, n.jsx)(l.PY1.span, { className: r3 ? p().column : p().symbol, initial: { width: 0, opacity: 0 }, animate: { width: "auto", opacity: 1 }, exit: { width: 0, opacity: 0 }, transition: u2, children: r3 ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)("span", { className: p().sizer, children: "0" }), (0, n.jsx)("span", { className: p().strip, style: { "--digit": Number(e3) }, children: j.map((e4) => (0, n.jsx)("span", { children: e4 }, e4)) })] }) : e3 }, t3);
    }) }) });
  }
  function w({ label: e2, value: r2, defaultValue: t2, onValueChange: a2, onValueCommit: d2, min: m2 = 0, max: f2 = 100, step: y2 = 1, largeStep: j2, majorEvery: N2 = 10, spacing: k2 = 10, format: A2, unit: M, name: S, disabled: C, className: D }) {
    let P = (0, s.I)() ?? false, E = (0, i.useId)(), L = y2 > 0 ? y2 : 1, R = Math.max(x(L), x(m2)), T = k2 / L, F = (e3) => v(Number((m2 + Math.round((e3 - m2) / L) * L).toFixed(R)), m2, f2), [I, $] = (0, i.useState)(() => F(t2 ?? m2)), X = void 0 === r2 ? I : F(r2), U = A2 ?? ((e3) => e3.toLocaleString("en-US", { minimumFractionDigits: R, maximumFractionDigits: R })), Y = j2 ?? L * N2, z = (0, i.useRef)(null), G = (0, i.useRef)(X), V = (0, i.useRef)(null), B = (0, i.useRef)(null), K = (0, i.useRef)(false), Q = (0, i.useRef)(void 0), [H, W] = (0, i.useState)(false), O = (0, u.d)(X), q = (0, o.G)(O, (e3) => -(e3 - m2) * T), J = (e3) => {
      G.current !== e3 && (G.current = e3, void 0 === r2 && $(e3), a2?.(e3));
    }, Z = () => {
      B.current?.stop(), B.current = null, K.current = false;
    };
    function ee(e3, r3 = true) {
      Z(), J(e3), P ? O.jump(e3) : B.current = (0, c.i)(O, e3, { ..._, velocity: O.getVelocity(), restDelta: L / 200, restSpeed: L / 20 }), r3 && d2?.(e3);
    }
    function er(e3) {
      let r3 = V.current;
      if (!r3 || r3.pointer !== e3.pointerId) return;
      if (V.current = null, W(false), !r3.moved) {
        if ("pointerup" !== e3.type) return;
        let r4 = z.current?.getBoundingClientRect();
        r4 && ee(F(O.get() + (e3.clientX - (r4.left + r4.width / 2)) / T));
        return;
      }
      let t3 = r3.samples, n2 = t3[0], i2 = t3[t3.length - 1], a3 = (i2.t - n2.t) / 1e3, l2 = "pointerup" === e3.type && a3 > 8e-3 && e3.timeStamp - i2.t < 60 ? (i2.v - n2.v) / a3 : 0;
      if (P) {
        let e4 = F(O.get());
        O.jump(e4), J(e4), d2?.(e4);
        return;
      }
      let s2 = O.get(), u2 = () => {
        B.current = null, K.current = false;
        let e4 = F(O.get());
        J(e4), d2?.(e4);
      };
      if (K.current = true, s2 < m2 || s2 > f2) {
        B.current = (0, c.i)(O, v(s2, m2, f2), { ...h({ visualDuration: 0.5, bounce: 0.1 }), velocity: l2, onComplete: u2 });
        return;
      }
      B.current = (0, c.i)(O, F(s2 + 0.42 * l2), { type: "inertia", velocity: l2, power: 0.42, timeConstant: 260, modifyTarget: (e4) => F(e4), min: m2, max: f2, bounceStiffness: 420, bounceDamping: 36, restDelta: L / 200, onComplete: u2 });
    }
    (0, i.useLayoutEffect)(() => {
      X !== G.current && (G.current = X, Z(), P ? O.jump(X) : B.current = (0, c.i)(O, X, _));
    }), (0, i.useEffect)(() => O.on("change", (e3) => {
      K.current && !V.current && J(F(e3));
    })), (0, i.useEffect)(() => () => {
      Z(), window.clearTimeout(Q.current);
    }, []), (0, i.useEffect)(() => {
      let e3 = z.current;
      if (!e3 || C) return;
      let r3 = (e4) => {
        if (Math.abs(e4.deltaX) <= Math.abs(e4.deltaY)) return;
        e4.preventDefault(), Z();
        let r4 = v(O.get() + e4.deltaX / T, m2, f2);
        O.set(r4), J(F(r4)), window.clearTimeout(Q.current), Q.current = window.setTimeout(() => ee(F(O.get())), 120);
      };
      return e3.addEventListener("wheel", r3, { passive: false }), () => e3.removeEventListener("wheel", r3);
    });
    let et = U(X), en = L * N2, ei = A2 ?? ((e3) => e3.toLocaleString("en-US", { maximumFractionDigits: x(Number(en.toFixed(R))) })), ea = Array.from({ length: Math.floor((f2 - m2) / en + 1e-9) + 1 }, (e3, r3) => Number((m2 + r3 * en).toFixed(R))), el = { "--spacing": `${k2}px`, "--major": `${k2 * N2}px`, "--half": N2 % 2 == 0 ? `${k2 * N2 / 2}px` : "0px", width: (f2 - m2) * T + 1 };
    return (0, n.jsxs)("div", { className: [p().root, D].filter(Boolean).join(" "), "data-disabled": C || void 0, "data-dragging": H || void 0, children: [(0, n.jsx)("span", { id: E, className: p().label, children: e2 }), (0, n.jsxs)("div", { className: p().readout, "aria-hidden": "true", children: [(0, n.jsx)(b, { text: et, reduced: P }), M && (0, n.jsx)("span", { className: p().unit, children: M })] }), (0, n.jsxs)("div", { ref: z, className: p().viewport, role: "slider", tabIndex: C ? -1 : 0, "aria-labelledby": E, "aria-valuemin": m2, "aria-valuemax": f2, "aria-valuenow": X, "aria-valuetext": M ? `${et} ${M}` : et, "aria-orientation": "horizontal", "aria-disabled": C || void 0, onPointerDown: function(e3) {
      !C && 0 === e3.button && e3.isPrimary && (e3.currentTarget.setPointerCapture(e3.pointerId), e3.currentTarget.focus({ preventScroll: true }), Z(), V.current = { pointer: e3.pointerId, x: e3.clientX, from: O.get(), moved: false, samples: [{ t: e3.timeStamp, v: O.get() }] });
    }, onPointerMove: function(e3) {
      let r3 = V.current;
      if (!r3 || r3.pointer !== e3.pointerId) return;
      let t3 = e3.clientX - r3.x;
      if (!r3.moved) {
        if (4 > Math.abs(t3)) return;
        r3.moved = true, W(true);
      }
      let n2 = r3.from - t3 / T, i2 = v(n2, m2, f2), a3 = P ? i2 : i2 + ((e4, r4 = g) => Math.sign(e4) * (1 - 1 / (0.55 * Math.abs(e4) / r4 + 1)) * r4)((n2 - i2) * T) / T;
      O.set(a3), r3.samples.push({ t: e3.timeStamp, v: a3 }), r3.samples.length > 6 && r3.samples.shift(), J(F(i2));
    }, onPointerUp: er, onPointerCancel: er, onLostPointerCapture: er, onKeyDown: function(e3) {
      let r3;
      if (C) return;
      let t3 = G.current, n2 = { ArrowRight: L, ArrowUp: L, ArrowLeft: -L, ArrowDown: -L, PageUp: Y, PageDown: -Y };
      if ("Home" === e3.key) r3 = m2;
      else if ("End" === e3.key) r3 = f2;
      else {
        if (!(e3.key in n2)) return;
        r3 = t3 + (e3.shiftKey && e3.key.startsWith("Arrow") ? Math.sign(n2[e3.key]) * Y : n2[e3.key]);
      }
      e3.preventDefault();
      let i2 = F(r3);
      i2 !== t3 && ee(i2);
    }, children: [(0, n.jsx)("div", { className: p().fade, children: (0, n.jsxs)(l.PY1.div, { className: p().tape, style: { ...el, x: q }, children: [(0, n.jsx)("span", { className: p().ticks }), ea.map((e3, r3) => (0, n.jsx)("span", { className: p().tickLabel, style: { left: r3 * k2 * N2 }, children: ei(e3) }, e3))] }) }), (0, n.jsx)("span", { className: p().needle, "aria-hidden": "true" })] }), S && (0, n.jsx)("input", { type: "hidden", name: S, value: X, disabled: C })] });
  }
  var N = t(15998), k = t.n(N);
  function A() {
    let e2, [r2, t2] = (0, i.useState)(172), [a2, l2] = (0, i.useState)(68.5);
    return (0, n.jsxs)("div", { className: k().demo, children: [(0, n.jsxs)("div", { className: k().section, children: [(0, n.jsx)(w, { label: "Height", value: r2, onValueChange: t2, min: 120, max: 220, unit: "cm" }), (0, n.jsxs)("p", { className: k().result, children: ["That is ", (0, n.jsx)("span", { className: k().value, children: (e2 = Math.round(r2 / 2.54), `${Math.floor(e2 / 12)} ft ${e2 % 12} in`) })] })] }), (0, n.jsx)(w, { label: "Weight", value: a2, onValueChange: l2, min: 30, max: 150, step: 0.5, majorEvery: 10, spacing: 12, unit: "kg" })] });
  }
}

__m(__module,__exports,__require);
}