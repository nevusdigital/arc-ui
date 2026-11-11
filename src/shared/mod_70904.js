function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.r(t), i.d(t, { MoneyInputDemo: () => K, default: () => H });
  var n = i(95155), a = i(12115), r = i(5772), o = i(18310), s = i(80642), l = i(25354), d = i(51288), u = i(28245), c = i(92171), m = i(12363), p = i(64577), h = i(7770), f = i(99758), g = i.n(f);
  let y = [...h.T.ease.enter], v = [...h.T.ease.standard], { spring: b, blur: _, duration: w } = h.T, x = (e2, t2) => {
    let i2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: i2 * i2, damping: 2 * (1 - t2) * i2, mass: 1 };
  }, j = x(0.28, 0), k = x(0.42, 0), N = () => () => {
  }, S = /* @__PURE__ */ new Map();
  function A(e2, t2) {
    let i2 = `${t2}:${e2}`, n2 = S.get(i2);
    if (n2) return n2;
    let a2 = new Intl.NumberFormat(t2, { style: "currency", currency: e2, currencyDisplay: "narrowSymbol", numberingSystem: "latn" }), r2 = a2.formatToParts(1), o2 = r2.findIndex((e3) => "currency" === e3.type), s2 = r2.findIndex((e3) => "integer" === e3.type), l2 = a2.resolvedOptions().maximumFractionDigits ?? 2, d2 = e2;
    try {
      d2 = new Intl.DisplayNames([t2], { type: "currency" }).of(e2) ?? e2;
    } catch {
    }
    let u2 = { code: e2, symbol: r2[o2]?.value ?? e2, position: o2 < s2 ? "prefix" : "suffix", digits: l2, name: d2.charAt(0).toUpperCase() + d2.slice(1), full: a2, whole: new Intl.NumberFormat(t2, { style: "currency", currency: e2, currencyDisplay: "narrowSymbol", maximumFractionDigits: 0, numberingSystem: "latn" }) };
    return S.set(i2, u2), u2;
  }
  function P(e2, t2) {
    if (!e2) return null;
    let [i2, n2 = ""] = e2.split(".");
    return Number(i2 || "0") * 10 ** t2 + Number(n2.padEnd(t2, "0").slice(0, t2) || "0");
  }
  function $(e2, t2) {
    if (null == e2 || !Number.isFinite(e2)) return "";
    let i2 = String(Math.round(Math.abs(e2))).padStart(t2 + 1, "0");
    return t2 ? `${i2.slice(0, i2.length - t2)}.${i2.slice(i2.length - t2)}` : i2;
  }
  function D(e2, t2) {
    return e2 ? $(P(e2, t2), t2) : "";
  }
  function E(e2, t2) {
    if (!e2) return "";
    let [i2 = "", n2] = e2.split(".");
    return t2 ? void 0 === n2 ? i2 : `${i2}.${n2.slice(0, t2)}` : i2 || "0";
  }
  let M = { enter: { width: 0, opacity: 0 }, center: { width: "auto", opacity: 1, transition: { width: b.morph, opacity: { duration: w.fast } } }, exit: { width: 0, opacity: 0, transition: { width: b.smooth, opacity: { duration: w.instant } } } }, C = { enter: { width: "auto", opacity: 1 }, center: { width: "auto", opacity: 1, transition: { duration: 0 } }, exit: { width: 0, opacity: 0, transition: { duration: 0 } } }, R = { enter: (e2) => ({ y: `${0.55 * e2}em`, opacity: 0, filter: `blur(${_.soft}px)` }), center: { y: 0, opacity: 1, filter: "blur(0px)", transitionEnd: { filter: "none" }, transition: { y: b.snappy, opacity: { duration: w.fast, ease: y }, filter: { duration: w.exit, ease: y } } }, exit: (e2) => ({ y: `${-0.55 * e2}em`, opacity: 0, filter: `blur(${_.subtle}px)`, transition: { duration: w.instant, ease: v } }) }, I = { enter: { y: 0, opacity: 1, filter: "none" }, center: { y: 0, opacity: 1, filter: "none", transition: { duration: 0 } }, exit: { opacity: 0, transition: { duration: 0 } } }, T = { enter: { y: 0, opacity: 0, filter: "none" }, center: { y: 0, opacity: 1, filter: "none", transition: { duration: w.instant } }, exit: { opacity: 0, transition: { duration: 0 } } };
  function z({ parts: e2, direction: t2, instant: i2, reduced: a2 }) {
    let r2 = i2 || a2 ? C : M, o2 = i2 ? I : a2 ? T : R;
    return (0, n.jsx)(s.N, { initial: false, custom: t2, children: e2.map((e3) => (0, n.jsxs)(l.PY1.span, { className: g().column, "data-ghost": e3.ghost || void 0, custom: t2, variants: r2, initial: "enter", animate: "center", exit: "exit", children: [(0, n.jsx)("span", { className: g().sizer, children: e3.char }), (0, n.jsx)(s.N, { initial: false, custom: t2, children: (0, n.jsx)(l.PY1.span, { className: g().glyph, custom: t2, variants: o2, initial: "enter", animate: "center", exit: "exit", children: e3.char }, e3.char) })] }, e3.key)) });
  }
  function U({ symbol: e2, reduced: t2 }) {
    let i2 = (0, a.useRef)(null), r2 = (0, u.d)("auto"), o2 = (0, a.useRef)(false);
    return (0, a.useLayoutEffect)(() => {
      let e3 = i2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let n2 = new ResizeObserver(() => {
        !o2.current || t2 ? r2.jump(e3.offsetWidth) : (0, c.i)(r2, e3.offsetWidth, b.morph), o2.current = true;
      });
      return n2.observe(e3), () => n2.disconnect();
    }, [t2, r2]), (0, n.jsxs)(l.PY1.span, { className: g().symbol, style: { width: r2 }, "aria-hidden": "true", children: [(0, n.jsx)("span", { ref: i2, className: g().symbolSizer, children: e2 }), (0, n.jsx)(s.N, { initial: false, mode: "popLayout", children: (0, n.jsx)(l.PY1.span, { className: g().symbolGlyph, initial: t2 ? { opacity: 0 } : { opacity: 0, y: ".4em", filter: `blur(${_.soft}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: { opacity: 0, y: t2 ? 0 : "-.3em", transition: { duration: w.instant } }, transition: t2 ? { duration: w.instant } : { y: b.snappy, opacity: { duration: w.fast }, filter: { duration: w.exit } }, children: e2 }, e2) })] });
  }
  let W = (e2, t2) => /\d/.test(e2) || e2 === t2, F = (0, a.forwardRef)(function({ label: e2, hideLabel: t2 = false, value: i2, defaultValue: r2 = null, onValueChange: d2, currency: h2, defaultCurrency: f2 = "USD", onCurrencyChange: x2, currencies: S2 = ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "INR"], min: M2, max: C2, quickAdd: R2 = [10, 50, 100], step: I2, locale: T2 = "en-US", description: F2, error: L2, disabled: O2 = false, name: B2, id: Y2, className: G2, onBlur: J2 }, V2) {
    let K2, H2, q, Q, X, Z = (K2 = (0, a.useSyncExternalStore)(N, () => true, () => false), !!(0, o.I)() && K2), ee = (0, a.useId)(), et = Y2 ?? `${ee}-amount`, ei = `${et}-hint`, en = `${et}-error`, ea = `${et}-range`, [er, eo] = (0, a.useState)(f2), es = h2 ?? er, el = (0, a.useMemo)(() => A(es, T2), [es, T2]), ed = (0, a.useMemo)(() => {
      let e10;
      return e10 = new Intl.NumberFormat(T2, { numberingSystem: "latn" }).formatToParts(12345.6), { group: e10.find((e11) => "group" === e11.type)?.value ?? ",", decimal: e10.find((e11) => "decimal" === e11.type)?.value ?? "." };
    }, [T2]), eu = I2 && I2 > 0 ? I2 : (H2 = el.digits, 10 ** H2), [ec, em] = (0, a.useState)(() => $(void 0 !== i2 ? i2 : r2, el.digits)), ep = P(ec, el.digits), [eh, ef] = (0, a.useState)(i2), [eg, ey] = (0, a.useState)("external"), [ev, eb] = (0, a.useState)(1);
    i2 !== eh && (ef(i2), void 0 !== i2 && i2 !== ep && (em($(i2, el.digits)), ey("external"), eb((i2 ?? 0) >= (ep ?? 0) ? 1 : -1)));
    let [e_, ew] = (0, a.useState)(false), [ex, ej] = (0, a.useState)(false), [ek, eN] = (0, a.useState)(0), [eS, eA] = (0, a.useState)(""), [, eP] = (0, a.useReducer)((e10) => e10 + 1, 0), e$ = (0, a.useRef)(null);
    (0, a.useImperativeHandle)(V2, () => e$.current);
    let eD = (0, a.useRef)(null), eE = (0, a.useRef)({ minor: ep, draft: ec });
    (0, a.useLayoutEffect)(() => {
      eE.current = { minor: ep, draft: ec };
    });
    let eM = (0, a.useCallback)((e10) => {
      let t3;
      return null === e10 ? "" : el.full.format(e10 / (t3 = el.digits, 10 ** t3));
    }, [el]), eC = (function(e10, t3) {
      var i3;
      if (!e10) return "";
      let [n2 = "", a2] = e10.split(".");
      return i3 = t3.group, n2.replace(/\B(?=(\d{3})+(?!\d))/g, i3) + (void 0 !== a2 ? t3.decimal + a2 : "");
    })(ec, ed), eR = (0, a.useMemo)(() => (function(e10, t3, i3) {
      let [n2 = "", a2] = e10 ? e10.split(".") : [], r3 = [], o2 = n2 || "0", s2 = !n2;
      if ([...o2].forEach((e11, t4) => {
        let n3 = o2.length - 1 - t4;
        r3.push({ key: `i${n3}`, char: e11, ghost: s2 }), n3 > 0 && n3 % 3 == 0 && r3.push({ key: `g${n3}`, char: i3.group, ghost: s2 });
      }), t3) {
        r3.push({ key: "d", char: i3.decimal, ghost: void 0 === a2 });
        for (let e11 = 0; e11 < t3; e11++) r3.push({ key: `f${e11}`, char: a2?.[e11] ?? "0", ghost: void 0 === a2 || e11 >= a2.length });
      }
      return r3;
    })(ec, el.digits, ed), [ec, el.digits, ed]), eI = (0, u.d)(0), eT = (0, a.useRef)(void 0);
    function ez(e10, t3) {
      Z || (0, c.i)(eI, 0, { ...k, velocity: 160 * e10 }), eN((e11) => e11 + 1), window.clearTimeout(eT.current), eT.current = window.setTimeout(() => eN(0), 1400), eA(`${e10 > 0 ? "Maximum" : "Minimum"} is ${eM(t3)}`);
    }
    function eU(e10, t3 = el) {
      let i3, n2;
      d2?.(e10, { currency: t3.code, major: null === e10 ? null : e10 / (i3 = t3.digits, 10 ** i3), formatted: null === e10 ? "" : t3.full.format(e10 / (n2 = t3.digits, 10 ** n2)) });
    }
    function eW(e10, t3) {
      let i3 = P(e10, el.digits);
      eb((i3 ?? 0) >= (eE.current.minor ?? 0) ? 1 : -1), ey(t3), em(e10), eE.current = { minor: i3, draft: e10 }, i3 !== ep && eU(i3), "type" !== t3 && eA(eM(i3));
    }
    function eF(e10, t3) {
      let i3 = (function(e11, t4) {
        let i4 = "", n3 = 0, a2 = false;
        for (let r4 = 0; r4 < e11.length; r4++) {
          let o3 = e11[r4], s3 = "";
          /\d/.test(o3) ? s3 = o3 : (o3 === ed.decimal || "." === o3 && "." !== ed.group) && el.digits > 0 && !a2 && (s3 = ".", a2 = true), s3 && (i4 += s3, r4 < t4 && n3++);
        }
        let r3 = i4.split("."), o2 = r3[0], s2 = r3[1], l2 = o2.length - o2.replace(/^0+/, "").length;
        o2 = o2.replace(/^0+/, "");
        let d3 = -Math.min(l2, n3);
        return (void 0 === s2 || o2 || (o2 = "0", d3 += 1), void 0 === s2 && !o2 && l2 && (o2 = "0", d3 += 1), void 0 !== s2 && s2.length > el.digits || o2.length > 12) ? null : { draft: void 0 !== s2 ? `${o2}.${s2}` : o2, before: Math.max(0, n3 + d3) };
      })(e10, t3);
      if (!i3) {
        eD.current = Math.max(0, [...e10.slice(0, t3)].filter((e11) => W(e11, ed.decimal) || "." === e11).length - 1), eP();
        return;
      }
      let n2 = P(i3.draft, el.digits);
      if (void 0 !== C2 && null !== n2 && n2 > C2) {
        eD.current = Math.max(0, i3.before - 1), ez(1, C2), eP();
        return;
      }
      eD.current = i3.before, eW(i3.draft, "type");
    }
    function eL(e10, t3) {
      let i3 = eE.current.minor ?? 0, n2 = M2 ?? 0, a2 = C2 ?? Number.MAX_SAFE_INTEGER, r3 = i3 + e10;
      if (r3 > a2) {
        if (i3 >= a2) return void ez(1, a2);
        r3 = a2, ez(1, a2);
      }
      if (r3 < n2) {
        if (i3 <= n2 && null !== eE.current.minor) return void ez(-1, n2);
        r3 = n2;
      }
      eD.current = Number.MAX_SAFE_INTEGER, eW($(r3, el.digits), t3);
    }
    (0, a.useEffect)(() => () => window.clearTimeout(eT.current), []), (0, a.useLayoutEffect)(() => {
      let e10 = e$.current, t3 = eD.current;
      if (eD.current = null, !e10 || null === t3 || document.activeElement !== e10) return;
      let i3 = (function(e11, t4, i4) {
        if (t4 <= 0) return 0;
        let n2 = 0;
        for (let a2 = 0; a2 < e11.length; a2++) if (W(e11[a2], i4) && ++n2 === t4) return a2 + 1;
        return e11.length;
      })(e10.value, t3, ed.decimal);
      e10.setSelectionRange(i3, i3);
    });
    let eO = (0, a.useRef)(null), eB = (0, a.useRef)(null), eY = (0, u.d)(1);
    (0, a.useLayoutEffect)(() => {
      let e10 = eO.current, t3 = eB.current;
      if (!e10 || !t3 || "u" < typeof ResizeObserver) return;
      let i3 = true, n2 = new ResizeObserver(() => {
        let n3 = t3.offsetWidth, a2 = e10.clientWidth, r3 = n3 > 0 && a2 > 0 ? Math.min(1, a2 / n3) : 1;
        i3 || Z ? eY.jump(r3) : (0, c.i)(eY, r3, b.smooth), i3 = false;
      });
      return n2.observe(e10), n2.observe(t3), () => n2.disconnect();
    }, [Z, eY]);
    let [eG, eJ] = (0, a.useState)(false), [eV, eK] = (0, a.useState)(es), eH = (0, a.useRef)(null), eq = (0, a.useRef)(null), eQ = (0, a.useRef)(null), eX = (0, a.useRef)(/* @__PURE__ */ new Map()), eZ = (0, a.useMemo)(() => S2.map((e10) => A(e10, T2)), [S2, T2]), e0 = eZ.length > 1, e1 = () => {
      O2 || (eK(es), eJ(true));
    }, e6 = (0, a.useCallback)((e10) => {
      eJ(false), e10 && eQ.current?.focus({ preventScroll: true });
    }, []);
    (0, a.useLayoutEffect)(() => {
      eG && eq.current?.focus({ preventScroll: true });
    }, [eG]), (0, a.useEffect)(() => {
      if (!eG) return;
      let e10 = (e11) => {
        eH.current?.contains(e11.target) || e6(false);
      };
      return document.addEventListener("pointerdown", e10), () => document.removeEventListener("pointerdown", e10);
    }, [e6, eG]);
    let e22 = (0, u.d)(0), e5 = (0, u.d)(0), e7 = (0, u.d)(0);
    function e8(e10) {
      let t3;
      if (e6(true), e10.code === es) return;
      let i3 = e_ ? E(ec, e10.digits) : D(E(ec, e10.digits), e10.digits), n2 = P(i3, e10.digits);
      void 0 === h2 && eo(e10.code), x2?.(e10.code), ey("external"), em(i3), eE.current = { minor: n2, draft: i3 }, eU(n2, e10), eA(`${e10.name}${null === n2 ? "" : `, ${e10.full.format(n2 / (t3 = e10.digits, 10 ** t3))}`}`);
    }
    (0, a.useLayoutEffect)(() => {
      let e10 = eG ? eX.current.get(eV) : void 0;
      e10 ? (0.05 > e7.get() || Z ? (e22.jump(e10.offsetTop), e5.jump(e10.offsetHeight)) : ((0, c.i)(e22, e10.offsetTop, j), (0, c.i)(e5, e10.offsetHeight, j)), e7.jump(1), e10.scrollIntoView?.({ block: "nearest" })) : e7.jump(0);
    }, [eV, e5, e7, e22, eG, Z]);
    let e3 = (0, a.useRef)({ buffer: "", at: 0 }), e4 = void 0 !== M2 && void 0 !== C2 ? `${eM(M2)} to ${eM(C2)}` : void 0 !== C2 ? `Up to ${eM(C2)}` : void 0 !== M2 ? `At least ${eM(M2)}` : "", e9 = null !== ep && (void 0 !== M2 && ep < M2 || void 0 !== C2 && ep > C2), te = null !== ep && void 0 !== M2 && ep < M2, tt = ex && !e_ && e9 ? te ? `The minimum is ${eM(M2 ?? 0)}` : `The maximum is ${eM(C2 ?? 0)}` : void 0, ti = L2 ?? tt, tn = !!ti, ta = [e4 ? ea : null, F2 ? ei : null, ti ? en : null].filter(Boolean).join(" ") || void 0, tr = R2.filter((e10) => e10 > 0);
    return (0, n.jsxs)("div", { className: [g().field, G2].filter(Boolean).join(" "), "data-disabled": O2 || void 0, children: [(0, n.jsx)("label", { htmlFor: et, className: t2 ? g().srOnly : g().label, children: e2 }), (0, n.jsxs)("div", { className: g().control, "data-invalid": tn || void 0, "data-focused": e_ || void 0, children: [(0, n.jsx)("div", { ref: eO, className: g().amountWrap, onMouseDown: (e10) => {
      e10.target !== e$.current && e10.preventDefault();
    }, onClick: (e10) => {
      if (!O2 && e10.target !== e$.current) {
        let e11 = e$.current;
        e11?.focus(), e11?.setSelectionRange(e11.value.length, e11.value.length);
      }
    }, children: (0, n.jsxs)(l.PY1.div, { ref: eB, className: g().group, style: { scale: eY, x: eI }, children: ["prefix" === el.position && (0, n.jsx)(U, { symbol: el.symbol, reduced: Z }), (0, n.jsxs)("span", { className: g().number, children: [(0, n.jsx)("span", { className: g().mirror, "aria-hidden": "true", "data-empty": !ec || void 0, children: (0, n.jsx)(z, { parts: eR, direction: ev, instant: "type" === eg, reduced: Z }) }), (0, n.jsx)("input", { ref: e$, id: et, className: g().input, type: "text", role: "spinbutton", inputMode: el.digits ? "decimal" : "numeric", autoComplete: "off", spellCheck: false, value: eC, disabled: O2, "aria-invalid": tn || void 0, "aria-describedby": ta, "aria-label": t2 ? e2 : void 0, "aria-valuenow": null === ep ? void 0 : ep / (q = el.digits, 10 ** q), "aria-valuetext": null === ep ? "Empty" : eM(ep), "aria-valuemin": void 0 === M2 ? void 0 : M2 / (Q = el.digits, 10 ** Q), "aria-valuemax": void 0 === C2 ? void 0 : C2 / (X = el.digits, 10 ** X), onChange: (e10) => eF(e10.currentTarget.value, e10.currentTarget.selectionStart ?? e10.currentTarget.value.length), onKeyDown: function(e10) {
      let t3 = e10.currentTarget, i3 = { ArrowUp: 1, ArrowDown: -1, PageUp: 10, PageDown: -10 };
      if (e10.key in i3) {
        e10.preventDefault(), eL(i3[e10.key] * eu * (e10.shiftKey && 1 === Math.abs(i3[e10.key]) ? 10 : 1), "key");
        return;
      }
      if ("Enter" === e10.key) {
        em(D(ec, el.digits)), eD.current = Number.MAX_SAFE_INTEGER;
        return;
      }
      let n2 = t3.selectionStart ?? 0;
      n2 !== (t3.selectionEnd ?? 0) || e10.metaKey || e10.ctrlKey || e10.altKey || ("Backspace" === e10.key && n2 > 1 && t3.value[n2 - 1] === ed.group && (e10.preventDefault(), eF(t3.value.slice(0, n2 - 2) + t3.value.slice(n2 - 1), n2 - 2)), "Delete" === e10.key && t3.value[n2] === ed.group && (e10.preventDefault(), eF(t3.value.slice(0, n2 + 1) + t3.value.slice(n2 + 2), n2)));
    }, onPaste: function(e10) {
      let t3 = e10.clipboardData.getData("text").trim();
      if (!t3) return;
      e10.preventDefault();
      let i3 = /[.,](\d{1,2})\s*\D*$/.exec(t3), n2 = (i3 ? t3.slice(0, i3.index) : t3).replace(/\D/g, ""), a2 = i3 && el.digits ? `${n2}.${i3[1]}` : n2;
      if (!/\d/.test(a2)) return;
      let r3 = e10.currentTarget, o2 = r3.selectionStart ?? 0, s2 = r3.selectionEnd ?? 0, l2 = a2.replace(".", ed.decimal), d3 = 0 === o2 && s2 === r3.value.length || !r3.value, u2 = d3 ? l2 : r3.value.slice(0, o2) + l2 + r3.value.slice(s2);
      eF(u2, d3 ? u2.length : o2 + l2.length);
    }, onFocus: () => ew(true), onBlur: (e10) => {
      ew(false), ej(true), ec && em(D(ec, el.digits)), J2?.(e10);
    } })] }), "suffix" === el.position && (0, n.jsx)(U, { symbol: el.symbol, reduced: Z })] }) }), e0 ? (0, n.jsxs)("div", { ref: eH, className: g().menuAnchor, children: [(0, n.jsxs)("button", { ref: eQ, type: "button", className: g().currencyButton, disabled: O2, "aria-haspopup": "listbox", "aria-expanded": eG, "aria-controls": `${ee}-currencies`, "aria-label": `Currency, ${el.name}`, "data-open": eG || void 0, onClick: () => eG ? e6(true) : e1(), onKeyDown: (e10) => {
      ("ArrowDown" === e10.key || "ArrowUp" === e10.key) && (e10.preventDefault(), e1());
    }, children: [(0, n.jsx)("span", { className: g().code, children: es }), (0, n.jsx)(l.PY1.span, { className: g().chevron, "aria-hidden": "true", initial: false, animate: { rotate: 180 * !!eG }, transition: Z ? { duration: 0 } : j, children: (0, n.jsx)(m.A, { size: 16, strokeWidth: 1.75 }) })] }), (0, n.jsx)(s.N, { children: eG && (0, n.jsx)(l.PY1.div, { className: g().menu, initial: Z ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: -4, filter: `blur(${_.subtle}px)` }, animate: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }, exit: Z ? { opacity: 0, transition: { duration: w.instant } } : { opacity: 0, scale: 0.97, y: -2, filter: `blur(${_.subtle}px)`, transition: { duration: w.instant, ease: v } }, transition: Z ? { duration: w.instant } : { ...b.snappy, opacity: { duration: w.fast, ease: y }, filter: { duration: w.fast, ease: y } }, children: (0, n.jsxs)("div", { ref: eq, id: `${ee}-currencies`, className: g().list, role: "listbox", tabIndex: -1, "aria-label": "Currency", "aria-activedescendant": `${ee}-cur-${eV}`, onKeyDown: function(e10) {
      let t3 = eZ.findIndex((e11) => e11.code === eV), i3 = (t4) => {
        e10.preventDefault(), eK(eZ[Math.max(0, Math.min(eZ.length - 1, t4))].code);
      };
      switch (e10.key) {
        case "ArrowDown":
          i3(t3 + 1);
          return;
        case "ArrowUp":
          i3(t3 - 1);
          return;
        case "Home":
          i3(0);
          return;
        case "End":
          i3(eZ.length - 1);
          return;
        case "Enter":
        case " ":
          e10.preventDefault(), eZ[t3] && e8(eZ[t3]);
          return;
        case "Escape":
          e10.preventDefault(), e10.stopPropagation(), e6(true);
          return;
        case "Tab":
          e6(false);
          return;
      }
      if (1 === e10.key.length && /\w/.test(e10.key)) {
        let t4 = performance.now(), i4 = e3.current;
        i4.buffer = t4 - i4.at > 600 ? e10.key.toLowerCase() : i4.buffer + e10.key.toLowerCase(), i4.at = t4;
        let n2 = eZ.find((e11) => e11.code.toLowerCase().startsWith(i4.buffer) || e11.name.toLowerCase().startsWith(i4.buffer));
        n2 && (e10.preventDefault(), eK(n2.code));
      }
    }, children: [(0, n.jsx)(l.PY1.span, { className: g().highlight, style: { y: e22, height: e5, opacity: e7 }, "aria-hidden": "true" }), eZ.map((e10) => (0, n.jsxs)("div", { id: `${ee}-cur-${e10.code}`, role: "option", "aria-selected": e10.code === es, className: g().option, "data-active": e10.code === eV || void 0, ref: (t3) => {
      t3 ? eX.current.set(e10.code, t3) : eX.current.delete(e10.code);
    }, onPointerMove: (t3) => {
      "mouse" === t3.pointerType && e10.code !== eV && eK(e10.code);
    }, onPointerDown: (e11) => e11.preventDefault(), onClick: () => e8(e10), children: [(0, n.jsx)("span", { className: g().optionSymbol, "aria-hidden": "true", children: e10.symbol }), (0, n.jsx)("span", { className: g().optionCode, children: e10.code }), (0, n.jsx)("span", { className: g().optionName, children: e10.name }), (0, n.jsx)("span", { className: g().check, "data-on": e10.code === es || void 0, "aria-hidden": "true", children: (0, n.jsx)(p.A, { size: 16, strokeWidth: 1.75 }) })] }, e10.code))] }) }, "menu") })] }) : (0, n.jsx)("span", { className: g().codeStatic, children: es })] }), (tr.length > 0 || e4) && (0, n.jsxs)("div", { className: g().toolbar, children: [tr.length > 0 && (0, n.jsx)("div", { className: g().chips, role: "group", "aria-label": "Quick add", children: tr.map((e10) => {
      let t3, i3 = e10 * (t3 = el.digits, 10 ** t3), a2 = void 0 !== C2 && (ep ?? 0) >= C2;
      return (0, n.jsxs)("button", { type: "button", className: g().chip, disabled: O2, "aria-disabled": a2 || void 0, "aria-controls": et, "aria-label": `Add ${el.whole.format(e10)}`, onClick: () => eL(i3, "chip"), children: ["+", el.whole.format(e10)] }, e10);
    }) }), e4 && (0, n.jsx)("span", { id: ea, className: g().range, "data-flash": ek > 0 || void 0, children: e4 })] }), (0, n.jsx)(s.N, { initial: false, children: (ti || F2) && (0, n.jsx)(l.PY1.span, { className: g().messageSlot, initial: !Z && { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0, transition: Z ? { duration: 0 } : { height: b.smooth, opacity: { duration: w.instant } } }, transition: Z ? { duration: 0 } : { height: b.smooth, opacity: { duration: w.fast } }, children: (0, n.jsx)(s.N, { initial: false, mode: "popLayout", children: (0, n.jsx)(l.PY1.span, { id: ti ? en : ei, className: ti ? g().error : g().hint, role: ti ? "alert" : void 0, initial: Z ? { opacity: 0 } : { opacity: 0, y: "0.35em", filter: `blur(${_.soft}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: { opacity: 0, transition: { duration: w.instant } }, transition: { duration: Z ? w.instant : w.standard, ease: y }, children: ti ?? F2 }, ti ?? F2) }) }, "message") }), B2 && (0, n.jsx)("input", { type: "hidden", name: B2, value: ep ?? "" }), (0, n.jsx)("span", { className: g().srOnly, role: "status", "aria-live": "polite", children: eS })] });
  });
  F.displayName = "MoneyInput";
  var L = i(67752), O = i(66285), B = i.n(O);
  let Y = (0, L.MV)("jasmine-brooks"), G = { USD: 248e3, EUR: 112050, GBP: 64e3, JPY: 88e3 }, J = { USD: 2, EUR: 2, GBP: 2, JPY: 0 }, V = (e2, t2) => new Intl.NumberFormat("en-US", { style: "currency", currency: t2, currencyDisplay: "narrowSymbol" }).format(e2 / 10 ** J[t2]);
  function K() {
    let e2 = (0, o.I)(), [t2, i2] = (0, a.useState)(G), [u2, c2] = (0, a.useState)("USD"), [m2, p2] = (0, a.useState)(6e3), [f2, g2] = (0, a.useState)("idle"), [y2, v2] = (0, a.useState)(""), b2 = null !== m2 && m2 >= 100 && m2 <= t2[u2] && "sending" !== f2;
    return (0, n.jsx)("div", { className: B().demo, children: (0, n.jsxs)("form", { className: B().card, onSubmit: (e3) => {
      e3.preventDefault(), b2 && null !== m2 && (g2("sending"), window.setTimeout(() => {
        i2((e4) => ({ ...e4, [u2]: e4[u2] - m2 })), v2(`Sent ${V(m2, u2)} to ${Y.name.split(" ")[0]}`), p2(null), g2("sent");
      }, 900));
    }, noValidate: true, children: [(0, n.jsxs)("header", { className: B().header, children: [(0, n.jsx)(r.default, { className: B().avatar, src: Y.src, alt: "", width: 80, height: 80 }), (0, n.jsxs)("div", { className: B().who, children: [(0, n.jsxs)("h3", { className: B().title, children: ["Pay ", Y.name] }), (0, n.jsx)("p", { className: B().meta, children: "Studio lunch, Thursday" })] })] }), (0, n.jsx)(F, { label: "Amount", value: m2, currency: u2, currencies: ["USD", "EUR", "GBP", "JPY"], onValueChange: (e3) => {
      p2(e3), "sent" === f2 && g2("idle");
    }, onCurrencyChange: c2, min: 100, max: t2[u2], quickAdd: "JPY" === u2 ? [1e3, 5e3] : [10, 50, 100], description: "Arrow keys step by 1, Shift by 10", name: "amount" }), (0, n.jsxs)("div", { className: B().footer, children: [(0, n.jsxs)("p", { className: B().balance, children: ["Balance ", (0, n.jsx)("span", { className: B().figure, children: V(t2[u2], u2) })] }), (0, n.jsx)(d.$, { type: "submit", disabled: !b2, loading: "sending" === f2, children: null !== m2 && m2 > 0 ? `Pay ${V(m2, u2)}` : "Pay" })] }), (0, n.jsx)(s.N, { initial: false, children: "sent" === f2 && (0, n.jsx)(l.PY1.p, { className: B().sent, role: "status", initial: e2 ? { opacity: 0 } : { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, transition: e2 ? { duration: 0.12 } : h.T.spring.smooth, children: (0, n.jsxs)("span", { className: B().sentInner, children: [y2, "."] }) }, "sent") })] }) });
  }
  let H = K;
}

__m(__module,__exports,__require);
}