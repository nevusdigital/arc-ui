function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { ColorPickerDemo: () => et, default: () => er });
  var a = r(95155), n = r(12115), i = r(28245), l = r(92171), s = r(55809), o = r(25354), c = r(18310), u = r(80642), d = r(29298), p = r(56255), h = r(64324), m = r(64577), f = r(2125), _ = r(98344), x = r(7770), g = r(82208), v = r.n(g);
  let { spring: y, duration: b, ease: k, blur: j } = x.T, w = (e2, t2 = 0, r2 = 1) => Math.min(r2, Math.max(t2, e2)), $ = (e2, t2 = 0) => {
    let r2 = 10 ** t2;
    return Math.round(e2 * r2) / r2;
  }, N = (e2, t2) => {
    let r2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: r2 * r2, damping: 2 * (1 - t2) * r2, mass: 1, restDelta: 5e-4, restSpeed: 5e-3 };
  }, M = N(0.26, 0), S = N(0.1, 0), A = N(y.morph.visualDuration, 0.1), E = N(0.3, 0), F = { duration: 0 };
  function C({ h: e2, s: t2, v: r2, a: a2 }) {
    let n2 = (a3) => {
      let n3 = (a3 + e2 / 60) % 6;
      return r2 - r2 * t2 * Math.max(0, Math.min(n3, 4 - n3, 1));
    };
    return { r: n2(5), g: n2(3), b: n2(1), a: a2 };
  }
  function D({ r: e2, g: t2, b: r2, a: a2 }, n2 = 0) {
    let i2 = Math.max(e2, t2, r2), l2 = i2 - Math.min(e2, t2, r2), s2 = n2;
    return l2 > 1e-6 && (s2 = i2 === e2 ? (t2 - r2) / l2 % 6 * 60 : i2 === t2 ? 60 * ((r2 - e2) / l2 + 2) : 60 * ((e2 - t2) / l2 + 4)) < 0 && (s2 += 360), { h: s2, s: 0 === i2 ? 0 : l2 / i2, v: i2, a: a2 };
  }
  let R = (e2) => e2 <= 0.04045 ? e2 / 12.92 : ((e2 + 0.055) / 1.055) ** 2.4, T = (e2) => e2 <= 31308e-7 ? 12.92 * e2 : 1.055 * e2 ** (1 / 2.4) - 0.055, P = (e2) => Math.round(255 * w(e2)), I = (e2) => P(e2).toString(16).padStart(2, "0").toUpperCase();
  function B(e2) {
    let { r: t2, g: r2, b: a2, a: n2 } = C(e2);
    return `#${I(t2)}${I(r2)}${I(a2)}${n2 < 0.999 ? I(n2) : ""}`;
  }
  function H(e2, t2) {
    let r2 = C(e2), a2 = e2.a < 0.999 ? ` / ${Math.round(100 * e2.a)}%` : "";
    if ("hex" === t2) return B(e2);
    if ("rgb" === t2) return `rgb(${P(r2.r)} ${P(r2.g)} ${P(r2.b)}${a2})`;
    if ("hsl" === t2) {
      let { h: t3, s: n3, l: i3 } = (function({ r: e3, g: t4, b: r3 }, a3) {
        let n4 = Math.max(e3, t4, r3), i4 = Math.min(e3, t4, r3), l3 = (n4 + i4) / 2, s2 = n4 - i4, o2 = s2 < 1e-6 ? 0 : s2 / (1 - Math.abs(2 * l3 - 1));
        return { h: s2 < 1e-6 ? a3 : D({ r: e3, g: t4, b: r3, a: 1 }).h, s: o2, l: l3 };
      })(r2, e2.h);
      return `hsl(${Math.round(t3) % 360} ${Math.round(100 * n3)}% ${Math.round(100 * i3)}%${a2})`;
    }
    let { l: n2, c: i2, h: l2 } = (function({ r: e3, g: t3, b: r3 }, a3) {
      let n3 = R(e3), i3 = R(t3), l3 = R(r3), s2 = Math.cbrt(0.4122214708 * n3 + 0.5363325363 * i3 + 0.0514459929 * l3), o2 = Math.cbrt(0.2119034982 * n3 + 0.6806995451 * i3 + 0.1073969566 * l3), c2 = Math.cbrt(0.0883024619 * n3 + 0.2817188376 * i3 + 0.6299787005 * l3), u2 = 1.9779984951 * s2 - 2.428592205 * o2 + 0.4505937099 * c2, d2 = 0.0259040371 * s2 + 0.7827717662 * o2 - 0.808675766 * c2, p2 = Math.hypot(u2, d2), h2 = 180 * Math.atan2(d2, u2) / Math.PI;
      return h2 < 0 && (h2 += 360), { l: 0.2104542553 * s2 + 0.793617785 * o2 - 0.0040720468 * c2, c: p2, h: p2 < 5e-4 ? a3 : h2 };
    })(r2, e2.h);
    return `oklch(${$(100 * n2, 1)}% ${$(i2, 3)} ${$(l2, 1) % 360}${a2})`;
  }
  let L = (e2) => void 0 === e2 ? 1 : e2.endsWith("%") ? w(parseFloat(e2) / 100) : w(parseFloat(e2));
  function W(e2, t2 = 0) {
    var r2, a2, n2, i2, l2, s2, o2;
    let c2 = e2.trim().toLowerCase(), u2 = /^#?([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.exec(c2);
    if (u2) {
      let e3 = u2[1];
      e3.length <= 4 && (e3 = e3.split("").map((e4) => e4 + e4).join(""));
      let r3 = (t3) => parseInt(e3.slice(t3, t3 + 2), 16) / 255;
      return D({ r: r3(0), g: r3(2), b: r3(4), a: 8 === e3.length ? r3(6) : 1 }, t2);
    }
    if (u2 = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)(?:\s*[/,]\s*([\d.]+%?))?\s*\)$/.exec(c2)) return D({ r: w(u2[1] / 255), g: w(u2[2] / 255), b: w(u2[3] / 255), a: L(u2[4]) }, t2);
    if (u2 = /^hsla?\(\s*([\d.]+)(?:deg)?[\s,]+([\d.]+)%?[\s,]+([\d.]+)%?(?:\s*[/,]\s*([\d.]+%?))?\s*\)$/.exec(c2)) {
      let e3, t3, i3, l3 = u2[1] % 360;
      return { ...D((r2 = w(u2[2] / 100), a2 = w(u2[3] / 100), n2 = L(u2[4]), e3 = (e4) => (e4 + l3 / 30) % 12, t3 = r2 * Math.min(a2, 1 - a2), { r: (i3 = (r3) => a2 - t3 * Math.max(-1, Math.min(e3(r3) - 3, 9 - e3(r3), 1)))(0), g: i3(8), b: i3(4), a: n2 }), l3), h: l3 };
    }
    if (u2 = /^oklch\(\s*([\d.]+)(%?)\s+([\d.]+)\s+([\d.]+)(?:deg)?(?:\s*\/\s*([\d.]+%?))?\s*\)$/.exec(c2)) {
      let e3, r3, a3, n3, c3;
      return D((i2 = w(u2[2] ? u2[1] / 100 : +u2[1]), l2 = +u2[3], s2 = +u2[4], o2 = L(u2[5]), a3 = (i2 + 0.3963377774 * (e3 = l2 * Math.cos(s2 * Math.PI / 180)) + 0.2158037573 * (r3 = l2 * Math.sin(s2 * Math.PI / 180))) ** 3, { r: w(T(4.0767416621 * a3 - 3.3077115913 * (n3 = (i2 - 0.1055613458 * e3 - 0.0638541728 * r3) ** 3) + 0.2309699292 * (c3 = (i2 - 0.0894841775 * e3 - 1.291485548 * r3) ** 3))), g: w(T(-1.2684380046 * a3 + 2.6097574011 * n3 - 0.3413193965 * c3)), b: w(T(-0.0041960863 * a3 - 0.7034186147 * n3 + 1.707614701 * c3)), a: o2 }), t2);
    }
    return null;
  }
  let U = ["hex", "rgb", "hsl", "oklch"], G = { hex: "Hex", rgb: "RGB", hsl: "HSL", oklch: "OKLCH" }, O = () => () => {
  };
  function z(e2, t2, r2 = false) {
    let a2 = (0, i.d)(e2);
    return (0, n.useEffect)(() => {
      if (t2) return void a2.jump(e2);
      let n2 = (0, l.i)(a2, e2, r2 ? S : M);
      return () => n2.stop();
    }, [r2, t2, e2, a2]), a2;
  }
  function K(e2, t2) {
    let r2 = (0, n.useRef)(null), a2 = (t3) => {
      let r3 = t3.currentTarget.getBoundingClientRect();
      e2(w((t3.clientX - r3.left) / r3.width), w((t3.clientY - r3.top) / r3.height));
    };
    return { onPointerDown(e3) {
      0 === e3.button && null === r2.current && (r2.current = e3.pointerId, e3.currentTarget.setPointerCapture(e3.pointerId), t2(true), a2(e3));
    }, onPointerMove(e3) {
      e3.pointerId === r2.current && a2(e3);
    }, onPointerUp(e3) {
      e3.pointerId === r2.current && (r2.current = null, t2(false));
    }, onPointerCancel(e3) {
      e3.pointerId === r2.current && (r2.current = null, t2(false));
    } };
  }
  function Y(e2, t2) {
    let r2 = e2.shiftKey || e2.key.startsWith("Page") ? 10 : 1;
    return { ArrowRight: [r2, 0], ArrowLeft: [-r2, 0], ArrowUp: "both" === t2 ? [0, r2] : [r2, 0], ArrowDown: "both" === t2 ? [0, -r2] : [-r2, 0], PageUp: [10, 0], PageDown: [-10, 0] }[e2.key] ?? null;
  }
  function q({ label: e2, value: t2, valueText: r2, max: n2, unit: i2, onChange: l2, className: c2, style: u2, reduced: d2, fill: p2, onActive: h2, active: m2 }) {
    let f2 = z(t2 / n2, d2, m2), _2 = (0, s.G)(f2, (e3) => `${100 * e3}%`), x2 = K((e3) => l2(e3 * n2), h2);
    return (0, a.jsx)("div", { className: `${v().slider} ${c2}`, style: u2, ...x2, children: (0, a.jsx)(o.PY1.div, { className: v().sliderThumb, role: "slider", tabIndex: 0, "aria-label": e2, "aria-valuemin": 0, "aria-valuemax": n2, "aria-valuenow": Math.round(t2), "aria-valuetext": r2, style: { left: _2, "--thumb-fill": p2 }, "data-active": m2 || void 0, onKeyDown: (e3) => {
      if ("Home" === e3.key || "End" === e3.key) {
        e3.preventDefault(), l2("Home" === e3.key ? 0 : n2);
        return;
      }
      let r3 = Y(e3, "x");
      r3 && (e3.preventDefault(), l2(w(t2 + r3[0] * i2, 0, n2)));
    } }) });
  }
  function J({ color: e2, className: t2 }) {
    return (0, a.jsx)("span", { className: `${v().chip} ${t2 ?? ""}`, children: (0, a.jsx)("span", { style: { background: e2 } }) });
  }
  let X = 0;
  function V({ value: e2, defaultValue: t2 = "#2F6BFF", onValueChange: r2, background: x2 = "#FFFFFF", label: g2 = "Color", swatches: N2, defaultSwatches: M2, onSwatchesChange: S2, maxSwatches: D2 = 7, defaultFormat: T2 = "hex", className: I2 }) {
    var L2;
    let Z2, Q2, ee2, et2, er2, ea = (0, n.useId)().replace(/[^a-zA-Z0-9-]/g, ""), en = (0, n.useSyncExternalStore)(O, () => true, () => false), ei = !!(0, c.I)() && en, el = (0, n.useSyncExternalStore)(O, () => "EyeDropper" in window, () => false), [es, eo] = (0, n.useState)(() => W(e2 ?? t2) ?? { h: 220, s: 0.8, v: 1, a: 1 }), [ec, eu] = (0, n.useState)(e2);
    if (void 0 !== e2 && e2 !== ec && (eu(e2), e2.toUpperCase() !== B(es))) {
      let t3 = W(e2, es.h);
      t3 && eo(t3);
    }
    let [ed, ep] = (0, n.useState)(M2 ?? []), eh = N2 ?? ed, [em, ef] = (0, n.useState)(false), [e_, ex] = (0, n.useState)(false), [eg, ev] = (0, n.useState)(T2), [ey, eb] = (0, n.useState)(null), [ek, ej] = (0, n.useState)(false), [ew, e$] = (0, n.useState)(null), [eN, eM] = (0, n.useState)(null), [eS, eA] = (0, n.useState)(null), eE = (0, n.useRef)(null), eF = (0, n.useRef)(null), eC = (0, n.useRef)(null), eD = (0, n.useRef)(null), eR = (0, n.useRef)(null), eT = (0, n.useRef)(/* @__PURE__ */ new Map()), eP = (0, n.useRef)(false), eI = (0, i.d)(0), eB = (0, n.useRef)(false), eH = B(es), eL = C(es), eW = `rgb(${P(eL.r)} ${P(eL.g)} ${P(eL.b)} / ${$(es.a, 3)})`, eU = `rgb(${P(eL.r)} ${P(eL.g)} ${P(eL.b)})`, eG = `hsl(${es.h} 100% 50%)`, eO = W(x2), ez = (L2 = eO ? C(eO) : { r: 1, g: 1, b: 1, a: 1 }, Z2 = C(es), Q2 = (e10, t3) => e10 * Z2.a + t3 * (1 - Z2.a), et2 = (ee2 = (e10, t3, r3) => 0.2126 * R(e10) + 0.7152 * R(t3) + 0.0722 * R(r3))(Q2(Z2.r, L2.r), Q2(Z2.g, L2.g), Q2(Z2.b, L2.b)), (Math.max(et2, er2 = ee2(L2.r, L2.g, L2.b)) + 0.05) / (Math.min(et2, er2) + 0.05)), eK = H(es, eg);
    function eY(e10) {
      eo(e10);
      let t3 = B(e10);
      t3 !== eH && r2?.(t3);
    }
    function eq(e10) {
      N2 || ep(e10), S2?.(e10);
    }
    let eJ = (0, i.d)(0), eX = (0, i.d)(0), eV = { W: (0, i.d)(300), H: (0, i.d)(420), w: (0, i.d)(160), h: (0, i.d)(44) }, eZ = (0, s.G)(() => {
      let e10 = w(eJ.get());
      return `inset(0px ${$((eV.W.get() - eV.w.get()) * (1 - e10), 2)}px ${$((eV.H.get() - eV.h.get()) * (1 - e10), 2)}px 0px round ${$(22 + 4 * e10, 2)}px)`;
    }), eQ = (0, s.G)(eJ, [0.35, 0.9], [0, 1]), e0 = (0, s.G)(eJ, [0, 1], [-10, 0]);
    function e1(e10 = true) {
      eB.current = false, ef(false), eb(null), ej(false), e10 && eF.current?.focus({ preventScroll: true });
    }
    (0, n.useLayoutEffect)(() => {
      if (!e_) return;
      let e10 = eC.current, t3 = eF.current;
      if (!e10 || !t3) return;
      let r3 = () => {
        eV.W.set(e10.offsetWidth), eV.H.set(e10.offsetHeight), eV.w.set(t3.offsetWidth), eV.h.set(t3.offsetHeight);
      };
      r3();
      let a2 = new ResizeObserver(r3);
      return a2.observe(e10), () => a2.disconnect();
    }, [e_, eV.W, eV.H, eV.w, eV.h]), (0, n.useEffect)(() => {
      if (!e_) return;
      if (ei) {
        eJ.jump(em ? 1 : eJ.get());
        let e11 = (0, l.i)(eX, +!!em, { duration: b.fast, ease: [...k.standard] });
        return e11.then(() => {
          eB.current || (eJ.jump(0), ex(false));
        }), () => e11.stop();
      }
      eX.jump(1);
      let e10 = (0, l.i)(eJ, +!!em, em ? A : E);
      return em || e10.then(() => {
        eB.current || ex(false);
      }), () => e10.stop();
    }, [eX, em, eJ, ei, e_]), (0, n.useEffect)(() => {
      em && requestAnimationFrame(() => eD.current?.focus({ preventScroll: true }));
    }, [em]);
    let e22 = (0, n.useEffectEvent)((e10) => {
      if (e10 instanceof KeyboardEvent) {
        if ("Escape" !== e10.key) return;
        e1(!!eE.current?.contains(document.activeElement));
        return;
      }
      eE.current?.contains(e10.target) || e1(false);
    });
    (0, n.useEffect)(() => {
      if (!em) return;
      let e10 = (e11) => e22(e11);
      return document.addEventListener("pointerdown", e10, true), document.addEventListener("keydown", e10), () => {
        document.removeEventListener("pointerdown", e10, true), document.removeEventListener("keydown", e10);
      };
    }, [em]);
    let e5 = z(es.s, ei, "area" === eN), e4 = z(1 - es.v, ei, "area" === eN), e6 = (0, s.G)(e5, (e10) => `${100 * e10}%`), e3 = (0, s.G)(e4, (e10) => `${100 * e10}%`), e8 = K((e10, t3) => eY({ ...es, s: e10, v: 1 - t3 }), (e10) => eM(e10 ? "area" : null));
    function e9() {
      if (null === ey) return true;
      let e10 = W(ey, es.h);
      return e10 ? (eY(e10), eb(null), ej(false), true) : (ej(true), ei || (0, l.i)(eI, [0, -5, 4, -2, 0], { duration: 0.32, ease: [...k.standard] }), false);
    }
    (0, n.useEffect)(() => {
      if (!ew || 1 === ew.phase) return;
      let e10 = requestAnimationFrame(() => e$((e11) => e11 && e11.id === ew.id ? { ...e11, phase: 1 } : e11));
      return () => cancelAnimationFrame(e10);
    }, [ew]), (0, n.useEffect)(() => {
      if (!ew || 0 === ew.phase) return;
      let e10 = window.setTimeout(() => e$((e11) => e11?.id === ew.id ? null : e11), 620);
      return () => window.clearTimeout(e10);
    }, [ew]);
    let e7 = z(ez, ei), te = (0, s.G)(e7, (e10) => e10.toFixed(2)), tt = ez >= 7 ? "AAA" : ez >= 4.5 ? "AA" : ez >= 3 ? "AA large" : "Fails", tr = ei ? { opacity: 0 } : { opacity: 0, y: "0.3em", filter: `blur(${j.subtle}px)` }, ta = eh.some((e10) => e10.id === eS) ? eS : eh[0]?.id;
    return (0, a.jsxs)("div", { ref: eE, className: [v().root, I2].filter(Boolean).join(" "), style: { "--picker-color": eW, "--picker-opaque": eU, "--picker-hue": eG, "--picker-bg": x2 }, children: [(0, a.jsxs)("button", { ref: eF, type: "button", className: v().trigger, "aria-haspopup": "dialog", "aria-expanded": em, "aria-controls": em ? `${ea}-panel` : void 0, onClick: () => em ? e1() : void (eB.current = true, ex(true), ef(true)), children: [(0, a.jsx)(J, { color: eW }), (0, a.jsxs)("span", { className: v().triggerText, children: [(0, a.jsx)("span", { className: v().name, children: g2 }), (0, a.jsx)("span", { className: v().hex, children: eH })] })] }), e_ && (0, a.jsx)("div", { className: v().float, "data-open": em || void 0, children: (0, a.jsxs)(o.PY1.div, { ref: eC, id: `${ea}-panel`, role: "dialog", "aria-label": `${g2} color`, className: v().panel, inert: !em, style: { clipPath: eZ, opacity: eX }, children: [(0, a.jsxs)("div", { className: v().head, children: [(0, a.jsx)(J, { color: eW }), (0, a.jsxs)("span", { className: v().triggerText, children: [(0, a.jsx)("span", { className: v().name, children: g2 }), (0, a.jsx)("span", { className: v().hex, children: eH })] }), (0, a.jsxs)(o.PY1.span, { className: v().headActions, style: { opacity: eQ }, children: [el && (0, a.jsx)("button", { type: "button", className: v().iconButton, "aria-label": "Pick a color from the screen", onClick: function() {
      el && new window.EyeDropper().open().then((e10) => {
        let t3 = W(e10.sRGBHex, es.h);
        t3 && eY({ ...t3, a: es.a });
      }).catch(() => {
      });
    }, children: (0, a.jsx)(h.A, { size: 18, strokeWidth: 1.75, "aria-hidden": "true" }) }), (0, a.jsx)("button", { type: "button", className: v().iconButton, "aria-label": "Done", onClick: () => e1(), children: (0, a.jsx)(m.A, { size: 18, strokeWidth: 1.75, "aria-hidden": "true" }) })] })] }), (0, a.jsxs)(o.PY1.div, { className: v().body, style: { opacity: eQ, y: e0 }, children: [(0, a.jsx)("div", { className: v().area, "data-active": "area" === eN || void 0, ...e8, children: (0, a.jsx)(o.PY1.div, { ref: eD, className: v().areaThumb, role: "slider", tabIndex: 0, "aria-roledescription": "2D slider", "aria-label": "Saturation and brightness", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": Math.round(100 * es.s), "aria-valuetext": `Saturation ${Math.round(100 * es.s)}%, brightness ${Math.round(100 * es.v)}%`, style: { left: e6, top: e3 }, onKeyDown: (e10) => {
      let t3 = Y(e10, "both");
      t3 && (e10.preventDefault(), eY({ ...es, s: w(es.s + t3[0] / 100), v: w(es.v + t3[1] / 100) }));
    } }) }), (0, a.jsx)(q, { label: "Hue", value: es.h, valueText: `${Math.round(es.h)} degrees`, max: 360, unit: 1, className: v().hue, reduced: ei, fill: eG, onChange: (e10) => eY({ ...es, h: w(e10, 0, 359.9) }), active: "hue" === eN, onActive: (e10) => eM(e10 ? "hue" : null) }), (0, a.jsx)(q, { label: "Opacity", value: 100 * es.a, valueText: `${Math.round(100 * es.a)}%`, max: 100, unit: 1, className: v().alpha, reduced: ei, fill: eW, onChange: (e10) => eY({ ...es, a: w(e10 / 100) }), active: "alpha" === eN, onActive: (e10) => eM(e10 ? "alpha" : null) }), (0, a.jsxs)(o.PY1.div, { className: v().field, "data-invalid": ek || void 0, style: { x: eI }, children: [(0, a.jsx)("button", { type: "button", className: v().format, onClick: function() {
      let e10 = U[(U.indexOf(eg) + 1) % U.length];
      ev(e10), eb(null), ej(false), ei || e$({ id: Date.now(), from: eK, to: H(es, e10), phase: 0 });
    }, "aria-label": `Format: ${G[eg]}. Switch format`, children: (0, a.jsx)(_.g, { children: G[eg] }) }), (0, a.jsxs)("span", { className: v().inputWrap, children: [(0, a.jsx)("input", { ref: eR, className: v().input, value: ey ?? eK, spellCheck: false, autoComplete: "off", "aria-label": `${g2} in ${G[eg]}`, "aria-invalid": ek || void 0, "aria-describedby": ek ? `${ea}-error` : void 0, "data-morphing": ew ? "" : void 0, onChange: (e10) => {
      eb(e10.target.value), ej(false);
    }, onKeyDown: (e10) => {
      "Enter" === e10.key && (e10.preventDefault(), e9() && e10.currentTarget.select()), "Escape" === e10.key && null !== ey && (e10.stopPropagation(), e10.nativeEvent.stopImmediatePropagation(), eb(null), ej(false));
    }, onBlur: () => {
      e9() || (eb(null), ej(false));
    } }), ew && (0, a.jsx)("span", { className: v().morph, "aria-hidden": "true", children: (0, a.jsx)(_.g, { children: 0 === ew.phase ? ew.from : ew.to }) })] })] }), (0, a.jsx)("p", { id: `${ea}-error`, className: v().error, "aria-live": "polite", children: ek ? "Enter a hex, RGB, HSL, or OKLCH color" : "" }), (0, a.jsxs)("div", { className: v().contrast, children: [(0, a.jsx)("span", { className: v().sample, "aria-hidden": "true", children: "Aa" }), (0, a.jsxs)("span", { className: v().ratio, children: [(0, a.jsx)(o.PY1.span, { children: te }), ":1"] }), (0, a.jsx)("span", { className: v().against, children: "against background" }), (0, a.jsx)("span", { className: v().grade, "data-grade": "Fails" === tt ? "fail" : "AA large" === tt ? "large" : "pass", children: (0, a.jsx)(u.N, { mode: "popLayout", initial: false, children: (0, a.jsx)(o.PY1.span, { initial: tr, animate: { opacity: 1, y: "0em", filter: "blur(0px)" }, exit: { ...tr, transition: { duration: b.instant } }, transition: ei ? { duration: b.instant } : { duration: b.standard, ease: [...k.enter] }, children: tt }, tt) }) }), (0, a.jsx)("span", { className: v().srOnly, children: `Contrast ${ez.toFixed(2)} to 1, ${"Fails" === tt ? "fails" : `passes ${tt}`}` })] }), (0, a.jsxs)("div", { className: v().swatches, children: [(0, a.jsx)("button", { type: "button", className: v().add, onClick: function() {
      let e10 = { id: `swatch-${Date.now().toString(36)}-${X++}`, color: eH };
      eq([e10, ...eh].slice(0, D2)), eA(e10.id);
    }, "aria-label": `Save ${eH}`, children: (0, a.jsx)(f.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }) }), (0, a.jsx)(d.x, { as: "div", axis: "x", values: eh, onReorder: eq, className: v().swatchList, role: "listbox", "aria-label": "Saved colors", "aria-orientation": "horizontal", children: (0, a.jsx)(u.N, { initial: false, children: eh.map((e10, t3) => (0, a.jsx)(p.N, { value: e10, as: "div", className: v().swatchSlot, dragElastic: 0.12, initial: ei ? { opacity: 0 } : { opacity: 0, scale: 0.4 }, animate: { opacity: 1, scale: 1 }, exit: ei ? { opacity: 0 } : { opacity: 0, scale: 0.4, transition: { duration: b.fast } }, transition: ei ? F : { ...y.snappy, layout: y.smooth }, whileDrag: ei ? void 0 : { scale: 1.15, zIndex: 2 }, onDragStart: () => {
      eP.current = true;
    }, onDragEnd: () => requestAnimationFrame(() => {
      eP.current = false;
    }), children: (0, a.jsx)("button", { ref: (t4) => {
      t4 ? eT.current.set(e10.id, t4) : eT.current.delete(e10.id);
    }, type: "button", role: "option", "aria-selected": e10.color.toUpperCase() === eH, className: v().swatch, "data-current": e10.color.toUpperCase() === eH || void 0, "aria-label": `${e10.color}. Alt and arrow keys to move, Delete to remove`, tabIndex: e10.id === ta ? 0 : -1, onFocus: () => eA(e10.id), onKeyDown: (e11) => (function(e12, t4) {
      let r3 = eh[t4], a2 = "ArrowRight" === e12.key ? 1 : "ArrowLeft" === e12.key ? -1 : 0;
      if ("Delete" === e12.key || "Backspace" === e12.key) {
        e12.preventDefault();
        let a3 = eh.filter((e13) => e13.id !== r3.id);
        eq(a3);
        let n3 = a3[Math.min(t4, a3.length - 1)];
        eA(n3?.id ?? null), requestAnimationFrame(() => n3 ? eT.current.get(n3.id)?.focus({ preventScroll: true }) : eR.current?.focus({ preventScroll: true }));
        return;
      }
      if (!a2 && "Home" !== e12.key && "End" !== e12.key) return;
      if (e12.preventDefault(), a2 && e12.altKey) {
        let e13 = t4 + a2;
        if (e13 < 0 || e13 >= eh.length) return;
        let n3 = [...eh];
        n3.splice(t4, 1), n3.splice(e13, 0, r3), eq(n3), requestAnimationFrame(() => eT.current.get(r3.id)?.focus({ preventScroll: true }));
        return;
      }
      let n2 = "Home" === e12.key ? 0 : "End" === e12.key ? eh.length - 1 : (t4 + a2 + eh.length) % eh.length;
      eA(eh[n2].id), eT.current.get(eh[n2].id)?.focus({ preventScroll: true });
    })(e11, t3), onClick: () => {
      if (eP.current) return;
      let t4 = W(e10.color, es.h);
      t4 && eY(t4);
    }, children: (0, a.jsx)(J, { color: e10.color, className: v().swatchChip }) }) }, e10.id)) }) })] })] })] }) })] });
  }
  var Z = r(44568), Q = r.n(Z);
  let ee = [{ id: "cobalt", color: "#2F6BFF" }, { id: "tomato", color: "#E5484D" }, { id: "moss", color: "#2E7D4F" }, { id: "saffron", color: "#F5B83D" }, { id: "plum", color: "#7B4BD1" }];
  function et() {
    return (0, a.jsx)("div", { className: Q().demo, children: (0, a.jsx)("div", { className: Q().anchor, children: (0, a.jsx)(V, { label: "Accent", defaultValue: "#2F6BFF", defaultSwatches: ee }) }) });
  }
  let er = et;
}

__m(__module,__exports,__require);
}