function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { H: () => F });
  var i = a(95155), r = a(12115), s = a(18310), n = a(27933), l = a(80642), u = a(25354), o = a(55809), d = a(28245), c = a(92171), m = a(61792), p = a(6900), h = a(11012), g = a(35484), f = a(7770), _ = a(48738), x = a.n(_);
  let { spring: y, duration: v, ease: b, blur: j } = f.T, $ = ({ visualDuration: e2, bounce: t2 }, a2 = 1e-3) => {
    let i2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: i2 * i2, damping: 2 * (1 - t2) * i2, restDelta: a2, restSpeed: 2 * a2 };
  }, w = $(y.smooth), N = $({ visualDuration: v.considered + 0.1, bounce: 0 }), k = $(y.smooth), M = $(y.morph, 0.01), P = () => () => {
  };
  function E(e2) {
    let t2 = null, a2 = () => {
      t2 = e2();
    };
    return n.Gt.update(a2), () => {
      (0, n.WG)(a2), t2?.stop();
    };
  }
  let I = { hidden: (e2) => ({ opacity: 0, y: `${0.3 * e2}em`, scale: 1, filter: `blur(${j.soft}px)` }), shown: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: v.standard, ease: [...b.enter] } }, gone: (e2) => ({ opacity: 0, y: `${-0.3 * e2}em`, scale: 1, filter: `blur(${j.subtle}px)`, transition: { duration: v.instant, ease: [...b.standard] } }) }, R = { hidden: { opacity: 0, y: 0, scale: 0.6, filter: `blur(${j.subtle + 1}px)` }, shown: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { ...y.snappy, opacity: { duration: v.fast, ease: [...b.enter] }, filter: { duration: v.fast, ease: [...b.enter] } } }, gone: { opacity: 0, y: 0, scale: 0.6, filter: `blur(${j.subtle + 1}px)`, transition: { duration: v.instant, ease: [...b.standard] } } }, S = { hidden: { opacity: 0, y: 0, scale: 1, filter: "blur(0px)" }, shown: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: v.fast } }, gone: { opacity: 0, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: v.instant } } };
  function Y({ text: e2, reduced: t2, direction: a2 = 1 }) {
    return (0, i.jsx)("span", { className: x().swap, children: (0, i.jsx)(l.N, { mode: "popLayout", initial: false, custom: a2, children: (0, i.jsx)(u.PY1.span, { className: x().swapText, custom: a2, variants: t2 ? S : I, initial: "hidden", animate: "shown", exit: "gone", children: e2 }, e2) }) });
  }
  let z = /* @__PURE__ */ new Map(), G = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  function L({ position: e2, digit: t2 }) {
    let a2 = (0, o.G)(e2, (e3) => ((t2 - e3) % 10 + 15) % 10 - 5), r2 = (0, o.G)(a2, (e3) => `${e3}em`), s2 = (0, o.G)(a2, (e3) => Math.max(0, 1 - Math.abs(e3))), n2 = (0, o.G)(a2, (e3) => 0.02 > Math.abs(e3) || Math.abs(e3) >= 1 ? "none" : `blur(${(Math.abs(e3) * j.subtle).toFixed(2)}px)`);
    return (0, i.jsx)(u.PY1.span, { className: x().glyph, style: { y: r2, opacity: s2, filter: n2 }, children: t2 });
  }
  let O = { initial: { width: 0, opacity: 0 }, animate: { width: "auto", opacity: 1 }, exit: { width: 0, opacity: 0 } };
  function T({ digit: e2, direction: t2, reduced: a2 }) {
    let s2 = (0, d.d)(e2), n2 = (0, r.useRef)({ digit: e2, target: e2 }), l2 = (0, r.useRef)(null);
    return (0, r.useEffect)(() => () => l2.current?.(), []), (0, r.useEffect)(() => {
      let i2 = n2.current;
      if (i2.digit === e2) return;
      if (i2.target += t2 < 0 ? -((i2.digit - e2 + 10) % 10) : (e2 - i2.digit + 10) % 10, i2.digit = e2, l2.current?.(), a2) {
        s2.jump(i2.target), l2.current = null;
        return;
      }
      let r2 = i2.target;
      l2.current = E(() => (0, c.i)(s2, r2, k));
    }, [e2, t2, s2, a2]), (0, i.jsxs)(u.PY1.span, { className: x().column, ...O, transition: a2 ? { duration: 0 } : M, children: [(0, i.jsx)("span", { className: x().sizer, children: "0" }), G.map((e3) => (0, i.jsx)(L, { position: s2, digit: e3 }, e3))] });
  }
  function A({ value: e2, decimals: t2, reduced: a2 }) {
    let s2, n2, o2, d2, [c2, m2] = (0, r.useState)({ value: e2, direction: 1 });
    return c2.value !== e2 && m2({ value: e2, direction: e2 > c2.value ? 1 : -1 }), (0, i.jsx)("span", { className: x().ticker, "aria-hidden": "true", children: (0, i.jsx)(l.N, { initial: false, children: (!(s2 = z.get(t2)) && (s2 = new Intl.NumberFormat("en-US", { minimumFractionDigits: t2, maximumFractionDigits: t2 }), z.set(t2, s2)), o2 = (n2 = s2.formatToParts(e2)).reduce((e3, t3) => e3 + ("integer" === t3.type ? t3.value.length : 0), 0), d2 = 0, n2.flatMap((e3, t3) => "integer" === e3.type ? [...e3.value].map((e4) => ({ key: `i${--o2}`, digit: Number(e4) })) : "fraction" === e3.type ? [...e3.value].map((e4) => ({ key: `f${d2++}`, digit: Number(e4) })) : [{ key: "group" === e3.type ? `g${o2}` : "decimal" === e3.type ? "d" : `${e3.type}${t3}`, text: e3.value }])).map((e3) => "digit" in e3 ? (0, i.jsx)(T, { digit: e3.digit, direction: c2.direction, reduced: a2 }, e3.key) : (0, i.jsx)(u.PY1.span, { className: x().symbol, ...O, transition: a2 ? { duration: 0 } : M, children: e3.text }, e3.key)) }) });
  }
  function U({ status: e2, text: t2, reduced: a2 }) {
    let s2 = (0, r.useRef)(null), n2 = (0, d.d)("auto");
    (0, r.useLayoutEffect)(() => {
      let e3 = s2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = false, i2 = new ResizeObserver(() => {
        let i3 = e3.offsetWidth;
        t3 && !a2 ? (0, c.i)(n2, i3, M) : n2.jump(i3), t3 = i3 > 0;
      });
      return i2.observe(e3), () => i2.disconnect();
    }, [a2, n2]);
    let o2 = "over" === e2 ? h.A : g.A;
    return (0, i.jsx)(u.PY1.span, { className: x().badge, "data-status": e2, style: { width: n2 }, children: (0, i.jsxs)("span", { ref: s2, className: x().badgeInner, children: [(0, i.jsx)(l.N, { mode: "popLayout", initial: false, children: "ok" !== e2 && (0, i.jsx)(u.PY1.span, { className: x().badgeIcon, variants: a2 ? S : R, initial: "hidden", animate: "shown", exit: "gone", children: (0, i.jsx)(o2, { size: 14, strokeWidth: 2, "aria-hidden": "true" }) }, e2) }), (0, i.jsx)(Y, { text: t2, reduced: a2 })] }) });
  }
  function D({ index: e2, amounts: t2, span: a2, width: r2, highlight: s2 }) {
    let n2 = (0, o.G)(() => {
      let i2 = 0;
      for (let a3 = 0; a3 < e2; a3++) i2 += t2[a3].get();
      return i2 / a2.get() * r2.get();
    }), l2 = (0, o.G)(() => {
      let i2 = r2.get();
      if (!i2) return 0;
      let s3 = t2[e2].get() / a2.get() * i2, l3 = i2 - n2.get() - s3;
      return Math.max(0, s3 - Math.min(2, s3, Math.max(0, l3))) / i2;
    });
    return (0, i.jsx)(u.PY1.span, { className: x().segment, "data-index": e2, "data-highlight": s2, style: { x: n2, scaleX: l2, originX: 0 } });
  }
  function F({ label: e2, segments: t2, limit: a2, unit: n2 = "", decimals: g2 = 1, freeLabel: f2 = "Free", overLabel: _2 = "Over limit", warnAt: y2 = 0.9 }) {
    let j2, { reduced: $2, hydrated: k2 } = (j2 = (0, r.useSyncExternalStore)(P, () => true, () => false), { reduced: !!(0, s.I)() && j2, hydrated: j2 }), M2 = (0, r.useRef)(null), I2 = (0, r.useRef)(null), z2 = (0, m.W)(M2, { once: true, amount: 0.4 }), G2 = (0, r.useId)(), L2 = `hatch${G2.replace(/[^a-zA-Z0-9_-]/g, "")}`, O2 = k2 && (z2 || $2), T2 = (e3) => Math.round(e3 * 10 ** g2) / 10 ** g2, W = T2(t2.reduce((e3, t3) => e3 + t3.value, 0)), H = T2(Math.max(0, a2 - W)), V = T2(Math.max(0, W - a2)), B = W > a2 ? "over" : W >= a2 * y2 ? "near" : "ok", C = (e3) => `${e3.toFixed(g2)}${n2 ? ` ${n2}` : ""}`, X = C(a2).replace(/\.0+(?= |$)/, ""), [Z] = (0, r.useState)(() => /* @__PURE__ */ new Map()), q = t2.map((e3) => {
      let t3 = Z.get(e3.id);
      return t3 || (t3 = (0, p.OQ)(0), Z.set(e3.id, t3)), t3;
    }), J = (0, d.d)(a2), K = (0, d.d)(0), Q = (0, o.G)(() => q.reduce((e3, t3) => e3 + t3.get(), 0)), ee = (0, o.G)(() => Math.max(J.get(), Q.get(), 1e-6)), et = (0, o.G)(() => Math.round(J.get() / ee.get() * K.get())), ea = (0, d.d)(0);
    (0, r.useEffect)(() => {
      let e3, t3 = Q.get() > J.get();
      ea.jump(+!!t3);
      let a3 = () => {
        let a4 = Q.get() > J.get();
        a4 !== t3 && (t3 = a4, e3?.stop(), $2 ? ea.jump(+!!a4) : e3 = (0, c.i)(ea, +!!a4, { duration: v.fast, ease: [...b.standard] }));
      }, i2 = [Q.on("change", a3), J.on("change", a3)];
      return () => {
        i2.forEach((e4) => e4()), e3?.stop();
      };
    }, [ea, $2, J, Q]);
    let ei = (0, o.G)(() => `inset(0 0 0 ${et.get() + 2}px)`);
    (0, r.useLayoutEffect)(() => {
      let e3 = I2.current;
      if (!e3 || (K.set(e3.clientWidth), "u" < typeof ResizeObserver)) return;
      let t3 = new ResizeObserver(() => K.set(e3.clientWidth));
      return t3.observe(e3), () => t3.disconnect();
    }, [K]);
    let er = t2.map((e3) => `${e3.id}:${e3.value}`).join("|"), es = (0, r.useRef)(false);
    (0, r.useEffect)(() => {
      if (!O2) return;
      let e3 = !es.current;
      es.current = true;
      let a3 = t2.map((t3, a4) => {
        let i2 = Z.get(t3.id);
        return i2 && i2.get() !== t3.value ? $2 ? (i2.jump(t3.value), null) : E(() => (0, c.i)(i2, t3.value, e3 ? { ...N, delay: 0.07 * a4 } : w)) : null;
      });
      return () => a3.forEach((e4) => e4?.());
    }, [er, O2, $2, Z]), (0, r.useEffect)(() => {
      if (J.get() !== a2) return $2 ? void J.jump(a2) : E(() => (0, c.i)(J, a2, w));
    }, [a2, $2, J]);
    let [en, el] = (0, r.useState)(null), [eu, eo] = (0, r.useState)(null), [ed, ec] = (0, r.useState)(null), [em, ep] = (0, r.useState)(0), eh = [...t2.map((e3) => ({ id: e3.id, label: e3.label, value: e3.value })), { id: "free", label: "over" === B ? _2 : f2, value: "over" === B ? V : H }], eg = en ?? eu ?? ed, ef = eh.find((e3) => e3.id === eg) ?? null, e_ = (0, r.useRef)(null), ex = (e3) => {
      let i2 = I2.current?.getBoundingClientRect();
      if (!i2?.width) return null;
      let r2 = (e3 - i2.left) / i2.width * Math.max(a2, W);
      if (r2 > a2) return "free";
      let s2 = 0;
      for (let e4 of t2) if (r2 <= (s2 += e4.value)) return e4.id;
      return "free";
    }, ey = O2 ? ef ? ef.value : W : 0, ev = ef ? Math.round(ef.value / a2 * 100) : 0, eb = ef ? "free" === ef.id ? `${n2} ${"over" === B ? "over the limit" : "free"}` : `${n2} in ${ef.label} \xB7 ${ev}% of plan` : `${n2} of ${X} used`, ej = "over" === B ? `${C(V)} over` : "near" === B ? "Almost full" : `${C(H)} free`, e$ = `${e2}: ${C(W)} of ${X} used. ${t2.map((e3) => `${e3.label} ${C(e3.value)}`).join(", ")}. ${"over" === B ? `Over the limit by ${C(V)}.` : `${C(H)} free${"near" === B ? ", almost full" : ""}.`}`, ew = "over" === B ? `over:${V}` : B, [eN, ek] = (0, r.useState)({ notice: ew, message: "" });
    return eN.notice !== ew && ek({ notice: ew, message: "over" === B ? `Over the plan limit by ${C(V)}.` : "near" === B ? `Almost full. ${C(H)} free.` : `Under the limit. ${C(H)} free.` }), (0, i.jsxs)("div", { ref: M2, className: x().meter, role: "group", "aria-labelledby": G2, "data-status": B, children: [(0, i.jsxs)("div", { className: x().top, children: [(0, i.jsx)("span", { id: G2, className: x().title, children: e2 }), (0, i.jsx)(U, { status: B, text: ej, reduced: $2 })] }), (0, i.jsxs)("p", { className: x().total, children: [(0, i.jsxs)("span", { className: x().srOnly, children: [C(W), " of ", X, " used"] }), (0, i.jsx)("span", { className: x().amount, "aria-hidden": "true", children: (0, i.jsx)(A, { value: ey, decimals: g2, reduced: $2 }) }), (0, i.jsx)("span", { className: x().caption, "aria-hidden": "true", children: (0, i.jsx)(Y, { text: eb, reduced: $2 }) })] }), (0, i.jsxs)("div", { className: x().bar, children: [(0, i.jsxs)("div", { ref: I2, className: x().track, role: "img", "aria-label": e$, "data-active": eg ?? void 0, onPointerMove: (e3) => {
      "mouse" === e3.pointerType && el(ex(e3.clientX));
    }, onPointerLeave: () => el(null), onPointerUp: (e3) => {
      if ("mouse" !== e3.pointerType) {
        let t3 = ex(e3.clientX);
        ec((e4) => e4 === t3 ? null : t3);
      }
    }, children: [t2.map((e3, t3) => (0, i.jsx)(D, { index: t3, amounts: q, span: ee, width: K, highlight: eg ? eg === e3.id ? "on" : "off" : void 0 }, e3.id)), (0, i.jsxs)(u.PY1.svg, { className: x().overflow, "data-highlight": eg ? "free" === eg ? "on" : "off" : void 0, style: { clipPath: ei, opacity: ea }, "aria-hidden": "true", focusable: "false", children: [(0, i.jsx)("defs", { children: (0, i.jsx)("pattern", { id: L2, width: 6, height: 6, patternUnits: "userSpaceOnUse", patternTransform: "rotate(45)", children: (0, i.jsx)("rect", { width: 2.5, height: 6, className: x().hatch }) }) }), (0, i.jsx)("rect", { className: x().overTint, width: "100%", height: "100%" }), (0, i.jsx)("rect", { width: "100%", height: "100%", fill: `url(#${L2})` })] })] }), (0, i.jsx)(u.PY1.span, { className: x().limit, style: { x: et, opacity: ea }, "aria-hidden": "true" })] }), (0, i.jsx)("div", { ref: e_, className: x().legend, role: "group", "aria-label": `${e2} by category`, onKeyDown: (e3) => {
      if ("Escape" === e3.key) {
        (ed || eu) && (e3.preventDefault(), ec(null));
        return;
      }
      let t3 = { ArrowRight: em + 1, ArrowDown: em + 1, ArrowLeft: em - 1, ArrowUp: em - 1, Home: 0, End: eh.length - 1 }[e3.key];
      if (void 0 === t3) return;
      e3.preventDefault();
      let a3 = (t3 + eh.length) % eh.length;
      ep(a3), e_.current?.querySelectorAll("button")[a3]?.focus();
    }, children: eh.map((e3, t3) => {
      let a3 = "free" === e3.id && "over" === B;
      return (0, i.jsxs)("button", { type: "button", className: x().item, "data-highlight": eg ? eg === e3.id ? "on" : "off" : void 0, "aria-pressed": ed === e3.id, "aria-label": `${e3.label}, ${C(e3.value)}`, tabIndex: t3 === em ? 0 : -1, onClick: () => {
        ep(t3), ec((t4) => t4 === e3.id ? null : e3.id);
      }, onFocus: () => {
        ep(t3), eo(e3.id);
      }, onBlur: () => eo(null), onPointerEnter: (t4) => {
        "mouse" === t4.pointerType && el(e3.id);
      }, onPointerLeave: (e4) => {
        "mouse" === e4.pointerType && el(null);
      }, children: [(0, i.jsxs)("span", { className: x().itemHead, children: [(0, i.jsx)("span", { className: x().key, "aria-hidden": "true", children: (0, i.jsx)(l.N, { mode: "popLayout", initial: false, children: a3 ? (0, i.jsx)(u.PY1.span, { className: x().keyIcon, variants: $2 ? S : R, initial: "hidden", animate: "shown", exit: "gone", children: (0, i.jsx)(h.A, { size: 12, strokeWidth: 2 }) }, "alert") : (0, i.jsx)(u.PY1.span, { className: x().swatch, "data-index": "free" === e3.id ? "free" : t3, variants: $2 ? S : R, initial: "hidden", animate: "shown", exit: "gone" }, "swatch") }) }), (0, i.jsx)("span", { className: x().itemLabel, children: (0, i.jsx)(Y, { text: e3.label, reduced: $2 }) })] }), (0, i.jsxs)("span", { className: x().itemValue, children: [(0, i.jsx)(A, { value: e3.value, decimals: g2, reduced: $2 }), n2 && (0, i.jsx)("span", { className: x().itemUnit, children: n2 })] })] }, e3.id);
    }) }), (0, i.jsx)("p", { className: x().srOnly, "aria-live": "polite", "aria-atomic": "true", children: eN.message })] });
  }
}

__m(__module,__exports,__require);
}