function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { E: () => U });
  var r = a(95155), n = a(12115), i = a(27933), l = a(28245), s = a(92171), o = a(79196), u = a(55809), c = a(25354), d = a(80642), h = a(18310), f = a(61792), p = a(7770), m = a(67294), x = a.n(m);
  let { spring: y, duration: b, ease: v, blur: g, stagger: _ } = p.T, j = ({ visualDuration: e2, bounce: t2 }, a2 = 0.01) => {
    let r2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: r2 * r2, damping: 2 * (1 - t2) * r2, restDelta: a2, restSpeed: 2 * a2 };
  }, w = j(y.smooth), k = j(y.morph), N = j(y.snappy), $ = j(y.smooth, 1e-5), M = j({ visualDuration: b.standard, bounce: 0 }), L = { duration: b.instant, ease: [...v.standard] };
  function A(e2) {
    let t2 = null, a2 = () => {
      t2 = e2();
    };
    return i.Gt.update(a2), () => {
      (0, i.WG)(a2), t2?.stop();
    };
  }
  let E = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }), T = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2));
  function S(e2, t2) {
    let a2 = (0, l.d)(e2);
    return (0, n.useEffect)(() => {
      if (a2.get() !== e2) return t2 ? void a2.jump(e2) : A(() => (0, s.i)(a2, e2, w));
    }, [e2, t2, a2]), a2;
  }
  let P = ({ width: e2, unit: t2 }, a2) => e2.get() - (a2 + 0.5) * e2.get() * t2.get();
  function R({ id: e2, place: t2, value: a2, delay: i2, shown: d2, active: h2, frame: f2, scale: p2, height: m2, reduced: y2 }) {
    let [b2, v2] = (0, o.xQ)(), g2 = (0, l.d)(0), _2 = S(t2, y2), [j2] = (0, n.useState)(i2), N2 = (0, n.useRef)(false), $2 = (0, n.useRef)(v2);
    (0, n.useEffect)(() => {
      $2.current = v2;
    }, [v2]), (0, n.useEffect)(() => {
      if (!b2) return;
      if (y2) {
        g2.jump(a2), N2.current = true;
        return;
      }
      if (!d2) return;
      let e3 = !N2.current;
      return N2.current = true, A(() => (0, s.i)(g2, a2, e3 ? { ...k, delay: j2 } : w));
    }, [g2, j2, b2, y2, d2, a2]), (0, n.useEffect)(() => {
      if (!b2) return y2 ? void $2.current?.() : A(() => (0, s.i)(g2, 0, { ...M, onComplete: () => $2.current?.() }));
    }, [g2, b2, y2]);
    let L2 = (0, u.G)(() => {
      let e3 = Math.min(f2.width.get() * f2.unit.get() * 0.58, 28);
      return (function(e4, t3, a3, r2) {
        if (t3 <= 0 || a3 <= 0.01) return `M${e4.toFixed(2)} ${r2}H${(e4 + Math.max(t3, 0)).toFixed(2)}Z`;
        let n2 = Math.min(4, t3 / 2, a3), i3 = r2 - a3;
        return `M${e4.toFixed(2)} ${r2}V${(i3 + n2).toFixed(2)}A${n2.toFixed(2)} ${n2.toFixed(2)} 0 0 1 ${(e4 + n2).toFixed(2)} ${i3.toFixed(2)}H${(e4 + t3 - n2).toFixed(2)}A${n2.toFixed(2)} ${n2.toFixed(2)} 0 0 1 ${(e4 + t3).toFixed(2)} ${(i3 + n2).toFixed(2)}V${r2}Z`;
      })(P(f2, _2.get()) - e3 / 2, e3, g2.get() / p2.get() * (m2 - 12), m2);
    });
    return (0, r.jsx)(c.PY1.path, { className: x().bar, "data-key": e2, "data-active": h2 || void 0, d: L2 });
  }
  function D(e2, t2, a2) {
    return (0, u.G)(() => Math.round(a2 - e2 / t2.get() * (a2 - 12)) + 0.5);
  }
  function W({ value: e2, scale: t2, height: a2 }) {
    let n2 = D(e2, t2, a2);
    return 0 === e2 ? null : (0, r.jsx)(c.PY1.line, { className: x().grid, x1: 0, x2: "100%", y1: n2, y2: n2, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0, transition: L }, transition: { duration: b.standard, ease: [...v.standard] } });
  }
  function C({ value: e2, scale: t2, height: a2, avoid: n2, format: i2 }) {
    let l2 = D(e2, t2, a2), s2 = (0, u.G)(() => n2 ? T((Math.abs(l2.get() - n2.get()) - 10) / 6, 0, 1) : 1);
    return (0, r.jsx)(c.PY1.span, { className: x().tick, style: { y: l2 }, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0, transition: L }, transition: { duration: b.standard, ease: [...v.standard] }, children: (0, r.jsx)(c.PY1.span, { className: x().tickText, style: { opacity: s2 }, children: i2(e2) }) });
  }
  function F({ text: e2, size: t2, shift: a2, place: n2, frame: i2, reduced: l2 }) {
    let s2 = S(n2, l2), o2 = (0, u.G)(() => P(i2, s2.get()) - t2 / 2 + a2);
    return (0, r.jsx)(c.PY1.span, { className: x().axisLabel, style: { x: o2 }, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0, transition: L }, transition: { duration: b.standard, ease: [...v.standard] }, children: e2 });
  }
  let I = { hidden: (e2) => ({ opacity: 0, y: `${0.3 * e2}em`, filter: `blur(${g.soft}px)` }), shown: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: b.standard, ease: [...v.enter] } }, gone: (e2) => ({ opacity: 0, y: `${-0.3 * e2}em`, filter: `blur(${g.subtle}px)`, transition: { duration: b.instant, ease: [...v.standard] } }) }, z = { hidden: { opacity: 0, y: 0, filter: "blur(0px)" }, shown: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: b.fast } }, gone: { opacity: 0, y: 0, filter: "blur(0px)", transition: { duration: b.instant } } };
  function Y({ text: e2, direction: t2, reduced: a2 }) {
    return (0, r.jsx)("span", { className: x().swap, children: (0, r.jsx)(d.N, { mode: "popLayout", initial: false, custom: t2, children: (0, r.jsx)(c.PY1.span, { className: x().swapText, custom: t2, variants: a2 ? z : I, initial: "hidden", animate: "shown", exit: "gone", children: e2 }, e2) }) });
  }
  function G({ text: e2, direction: t2, reduced: a2 }) {
    let i2 = (0, n.useRef)(null), o2 = (0, l.d)("auto");
    (0, n.useLayoutEffect)(() => {
      let e3 = i2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = null, r2 = new ResizeObserver(() => {
        let r3 = e3.offsetWidth;
        null === t3 || t3 === e3.textContent || a2 ? o2.jump(r3) : (0, s.i)(o2, r3, k), t3 = e3.textContent;
      });
      return r2.observe(e3), () => r2.disconnect();
    }, [a2, o2]);
    let u2 = [...e2], h2 = a2 ? z : I;
    return (0, r.jsxs)(c.PY1.span, { className: x().roll, style: { width: o2 }, children: [(0, r.jsx)("span", { ref: i2, className: x().sizer, "aria-hidden": "true", children: e2 }), (0, r.jsx)("span", { className: x().digits, children: (0, r.jsx)(d.N, { mode: "popLayout", initial: false, custom: t2, anchorX: "right", children: u2.map((e3, a3) => (0, r.jsx)(c.PY1.span, { className: x().digit, custom: t2, variants: h2, initial: "hidden", animate: "shown", exit: "gone", children: (0, r.jsx)(d.N, { mode: "popLayout", initial: false, custom: t2, anchorX: "right", children: (0, r.jsx)(c.PY1.span, { className: x().digit, custom: t2, variants: h2, initial: "hidden", animate: "shown", exit: "gone", children: e3 }, e3) }) }, `p${u2.length - a3}`)) }) })] });
  }
  let O = () => () => {
  };
  function U({ data: e2, label: t2, period: a2, unit: i2 = "", averageLabel: o2 = "Daily average", valueLabel: p2 = "Total", categoryLabel: m2 = "Day", showAverage: y2 = true, height: v2 = 176, formatValue: g2 = (e3) => E.format(e3) }) {
    let j2, k2 = (j2 = (0, n.useSyncExternalStore)(O, () => true, () => false), !!(0, h.I)() && j2), M2 = (0, n.useRef)(null), S2 = (0, n.useRef)(null), D2 = (0, f.W)(M2, { once: true, amount: 0.35 }), I2 = (0, n.useId)(), z2 = Math.max(e2.length, 1), B = e2.length - 1, H = e2.length ? e2.reduce((e3, t3) => e3 + t3.value, 0) / e2.length : 0, X = e2.reduce((e3, t3) => Math.max(e3, t3.value), 0), { top: Z, ticks: K } = (0, n.useMemo)(() => (function(e3) {
      let t3 = Math.max(e3, 1), a3 = 10 ** Math.floor(Math.log10(t3 / 4));
      for (let e4 of [1, 2, 3, 5, 10]) {
        let r2 = e4 * a3, n2 = Math.ceil(t3 / r2);
        if (n2 <= 4) return { top: n2 * r2, ticks: Array.from({ length: n2 + 1 }, (e5, t4) => t4 * r2) };
      }
      return { top: t3, ticks: [0, t3] };
    })(X), [X]), V = e2.map((e3) => e3.key).join("|"), q = i2 ? ` ${i2}` : "", [Q, J] = (0, n.useState)(() => ({ signature: V, keys: new Set(e2.map((e3) => e3.key)), fresh: /* @__PURE__ */ new Map(), changes: 0 })), [ee, et] = (0, n.useState)(null);
    if (Q.signature !== V) {
      let t3 = e2.map((e3, t4) => ({ key: e3.key, place: B - t4 })).filter((e3) => !Q.keys.has(e3.key)).sort((e3, t4) => e3.place - t4.place), a3 = Math.min(_.item, 0.32 / Math.max(1, t3.length));
      J({ signature: V, keys: new Set(e2.map((e3) => e3.key)), fresh: new Map(t3.map((e3, t4) => [e3.key, t4 * a3])), changes: Q.changes + 1 }), et(null);
    }
    let ea = Math.min(_.item, 0.36 / z2), er = null === ee ? null : Math.min(ee, B), en = null !== er && B >= 0, ei = en ? e2[er].value : H, [el, es] = (0, n.useState)({ value: ei, index: er, valueWay: 1, indexWay: 1 });
    (el.value !== ei || el.index !== er) && es({ value: ei, index: er, valueWay: ei === el.value ? el.valueWay : ei > el.value ? 1 : -1, indexWay: null === er || null === el.index ? 1 : Math.sign(er - el.index) || 1 });
    let eo = (0, l.d)(0), eu = (0, l.d)(1 / z2), ec = (0, l.d)(Z), ed = (0, l.d)(0), eh = (0, l.d)(0), ef = (0, n.useMemo)(() => ({ width: eo, unit: eu }), [eo, eu]), [ep, em] = (0, n.useState)(0), [ex, ey] = (0, n.useState)({}), eb = (0, n.useRef)(null), ev = [...new Set(e2.map((e3) => e3.axisLabel).filter((e3) => !!e3))].join("\n");
    (0, n.useLayoutEffect)(() => {
      let e3 = S2.current, t3 = eb.current;
      if (!e3 || !t3) return;
      let a3 = () => {
        eo.set(e3.clientWidth), em(e3.clientWidth);
        let a4 = {};
        t3.querySelectorAll("[data-text]").forEach((e4) => {
          a4[e4.dataset.text ?? ""] = e4.offsetWidth;
        }), ey((e4) => Object.keys(a4).every((t4) => e4[t4] === a4[t4]) ? e4 : a4);
      };
      if (a3(), "u" < typeof ResizeObserver) return;
      let r2 = new ResizeObserver(a3);
      return r2.observe(e3), r2.observe(t3), () => r2.disconnect();
    }, [ev, eo]);
    let eg = (0, n.useMemo)(() => (function(e3, t3, a3) {
      let r2 = /* @__PURE__ */ new Map();
      if (!t3) return r2;
      let n2 = Math.max(1, e3.length), i3 = e3.flatMap((r3, i4) => {
        let l2 = r3.axisLabel ? a3[r3.axisLabel] : void 0;
        if (void 0 === l2) return [];
        let s2 = t3 - (e3.length - 1 - i4 + 0.5) * (t3 / n2) - l2 / 2;
        return [{ key: r3.key, size: l2, natural: s2, left: T(s2, 0, Math.max(0, t3 - l2)) }];
      }).reverse();
      for (let e4 = 1; e4 <= i3.length; e4++) {
        let t4 = i3.filter((t5, a4) => a4 % e4 == 0);
        if (e4 === i3.length || t4.every((e5, a4) => 0 === a4 || e5.left + e5.size + 10 <= t4[a4 - 1].left)) {
          t4.forEach((e5) => r2.set(e5.key, e5.left - e5.natural));
          break;
        }
      }
      return r2;
    })(e2, ep, ex), [e2, ep, ex]);
    (0, n.useEffect)(() => {
      if (k2) {
        eu.jump(1 / z2), ec.jump(Z);
        return;
      }
      return A(() => {
        let e3 = [(0, s.i)(eu, 1 / z2, $), (0, s.i)(ec, Z, w)];
        return { stop: () => e3.forEach((e4) => e4.stop()) };
      });
    }, [z2, k2, ec, Z, eu]);
    let e_ = (0, n.useRef)(false);
    (0, n.useEffect)(() => {
      if (k2) return void ed.jump(H);
      if (!D2) return;
      let e3 = !e_.current;
      return e_.current = true, A(() => (0, s.i)(ed, H, e3 ? { ...w, delay: 0.12 } : w));
    }, [H, D2, ed, k2]);
    let ej = (0, n.useRef)(false);
    (0, n.useEffect)(() => {
      if (null === er) {
        ej.current = false;
        return;
      }
      let e3 = B - er;
      if ((k2 || !ej.current) && eh.jump(e3), ej.current = true, k2) return;
      let t3 = (0, s.i)(eh, e3, N);
      return () => t3.stop();
    }, [eh, er, B, k2]);
    let ew = (0, u.G)(() => Math.round(P(ef, eh.get())) + 0.5), ek = (0, u.G)(() => Math.round(v2 - ed.get() / ec.get() * (v2 - 12)) + 0.5), eN = (0, u.G)(() => `Avg ${g2(Math.round(ed.get()))}`), e$ = (e3) => {
      let t3 = S2.current?.getBoundingClientRect();
      return t3?.width ? T(B - Math.floor((t3.right - e3) / t3.width * z2), 0, B) : B;
    }, eM = en ? e2[er] : null, eL = eM ?? e2[B], eA = eL ? `${eL.label}: ${g2(eL.value)}${q}` : "No data", eE = e2.reduce((e3, t3) => !e3 || t3.value > e3.value ? t3 : e3, null), eT = e2.reduce((e3, t3) => !e3 || t3.value < e3.value ? t3 : e3, null), eS = `${t2}, ${a2}. ${o2} ${g2(Math.round(H))}${q}.${eE ? ` Highest ${eE.label}, ${g2(eE.value)}${q}.` : ""}${eT && eT !== eE ? ` Lowest ${eT.label}, ${g2(eT.value)}${q}.` : ""}`, eP = D2 || k2, eR = y2 ? ek : null;
    return (0, r.jsxs)("figure", { ref: M2, className: x().figure, "aria-labelledby": I2, children: [(0, r.jsxs)("figcaption", { id: I2, className: x().srOnly, children: [t2, ", ", a2] }), (0, r.jsxs)("div", { className: x().header, "aria-hidden": "true", children: [(0, r.jsx)("span", { className: x().kind, children: (0, r.jsx)(Y, { text: en ? p2 : o2, direction: 1, reduced: k2 }) }), (0, r.jsxs)("span", { className: x().value, children: [(0, r.jsx)(G, { text: g2(en ? e2[er].value : Math.round(H)), direction: el.valueWay, reduced: k2 }), i2 && (0, r.jsx)("span", { className: x().unit, children: i2 })] }), (0, r.jsx)("span", { className: x().when, children: (0, r.jsx)(Y, { text: eM ? eM.label : a2, direction: en ? el.indexWay : 1, reduced: k2 }) })] }), (0, r.jsxs)("div", { className: x().chart, "data-scrubbing": en || void 0, children: [(0, r.jsx)("div", { ref: S2, className: x().plot, style: { height: v2 }, children: (0, r.jsxs)("svg", { className: x().svg, width: "100%", height: v2, role: "img", "aria-label": eS, children: [(0, r.jsx)(d.N, { initial: false, children: K.map((e3) => (0, r.jsx)(W, { value: e3, scale: ec, height: v2 }, e3)) }), (0, r.jsx)(c.PY1.line, { className: x().cursor, x1: ew, x2: ew, y1: 12, y2: v2, initial: false, animate: { opacity: +!!en }, transition: k2 ? { duration: 0 } : L }), (0, r.jsx)(d.N, { initial: false, children: e2.map((e3, t3) => (0, r.jsx)(R, { id: e3.key, place: B - t3, value: e3.value, delay: Q.fresh.get(e3.key) ?? t3 * ea, shown: eP, active: er === t3, frame: ef, scale: ec, height: v2, reduced: k2 }, e3.key)) }), (0, r.jsx)("line", { className: x().baseline, x1: 0, x2: "100%", y1: v2 - 0.5, y2: v2 - 0.5 }), y2 && (0, r.jsx)(c.PY1.line, { className: x().mean, x1: 0, x2: "100%", y1: ek, y2: ek, initial: false, animate: { opacity: +!!eP }, transition: k2 ? { duration: 0 } : { duration: b.standard, delay: 0.12 } })] }) }), (0, r.jsxs)("div", { className: x().gutter, "aria-hidden": "true", children: [(0, r.jsx)(d.N, { initial: false, children: K.map((e3) => (0, r.jsx)(C, { value: e3, scale: ec, height: v2, avoid: eR, format: g2 }, e3)) }), y2 && (0, r.jsx)(c.PY1.span, { className: x().meanLabel, style: { y: ek }, initial: false, animate: { opacity: +!!eP }, transition: k2 ? { duration: 0 } : { duration: b.standard, delay: 0.12 }, children: (0, r.jsx)(c.PY1.span, { className: x().tickText, children: eN }) })] }), (0, r.jsxs)("div", { className: x().axis, "aria-hidden": "true", children: [(0, r.jsx)(d.N, { initial: false, children: e2.map((e3, t3) => e3.axisLabel && eg.has(e3.key) ? (0, r.jsx)(F, { text: e3.axisLabel, size: ex[e3.axisLabel] ?? 0, shift: eg.get(e3.key) ?? 0, place: B - t3, frame: ef, reduced: k2 }, `${e3.key}:${e3.axisLabel}`) : null) }), (0, r.jsx)("span", { ref: eb, className: x().measure, children: ev.split("\n").filter(Boolean).map((e3) => (0, r.jsx)("span", { "data-text": e3, children: e3 }, e3)) })] }), (0, r.jsx)("div", { className: x().scrubber, role: "slider", tabIndex: 0, "aria-label": `${t2}, explore by ${m2.toLowerCase()}`, "aria-orientation": "horizontal", "aria-valuemin": 1, "aria-valuemax": Math.max(1, e2.length), "aria-valuenow": (er ?? B) + 1, "aria-valuetext": eA, onPointerDown: (e3) => {
      "mouse" !== e3.pointerType && e3.currentTarget.setPointerCapture?.(e3.pointerId), et(e$(e3.clientX));
    }, onPointerMove: (e3) => {
      ("mouse" === e3.pointerType || e3.buttons) && et(e$(e3.clientX));
    }, onPointerUp: (e3) => {
      "mouse" !== e3.pointerType && et(null);
    }, onPointerCancel: () => et(null), onPointerLeave: (e3) => {
      "mouse" === e3.pointerType && et(null);
    }, onKeyDown: (e3) => {
      if ("Escape" === e3.key && en) {
        e3.preventDefault(), et(null);
        return;
      }
      let t3 = er ?? B + 1, a3 = Math.min(7, z2), r2 = { ArrowLeft: t3 - 1, ArrowDown: t3 - 1, ArrowRight: null === er ? B : t3 + 1, ArrowUp: null === er ? B : t3 + 1, PageDown: t3 - a3, PageUp: t3 + a3, Home: 0, End: B }[e3.key];
      void 0 === r2 || B < 0 || (e3.preventDefault(), et(T(r2, 0, B)));
    }, onBlur: () => et(null), onFocus: (e3) => {
      e3.currentTarget.matches(":focus-visible") && B >= 0 && et((e4) => e4 ?? B);
    } })] }), (0, r.jsx)("div", { className: x().srOnly, children: (0, r.jsxs)("table", { children: [(0, r.jsxs)("caption", { children: [t2, ", ", a2] }), (0, r.jsx)("thead", { children: (0, r.jsxs)("tr", { children: [(0, r.jsx)("th", { scope: "col", children: m2 }), (0, r.jsx)("th", { scope: "col", children: t2 })] }) }), (0, r.jsx)("tbody", { children: e2.map((e3) => (0, r.jsxs)("tr", { children: [(0, r.jsx)("th", { scope: "row", children: e3.label }), (0, r.jsxs)("td", { children: [g2(e3.value), q] })] }, e3.key)) })] }) }), (0, r.jsx)("p", { className: x().srOnly, "aria-live": "polite", "aria-atomic": "true", children: Q.changes ? `${a2}. ${o2} ${g2(Math.round(H))}${q}.` : "" })] });
  }
}

__m(__module,__exports,__require);
}