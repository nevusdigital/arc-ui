function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { BrushChartDemo: () => et, default: () => ea });
  var r = a(95155), l = a(12115), n = a(18310), s = a(61792), i = a(92171), o = a(28245), u = a(22535), c = a(25354), h = a(7770), d = a(5366), m = a.n(d);
  let { spring: p } = h.T, f = ({ visualDuration: e2, bounce: t2 }, a2 = 1e-3) => {
    let r2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: r2 * r2, damping: 2 * (1 - t2) * r2, restDelta: a2, restSpeed: 2 * a2 };
  }, v = f(p.smooth), x = f(p.snappy, 0.01), _ = { stiffness: x.stiffness, damping: x.damping, restDelta: 0.01 }, b = f({ visualDuration: 0.9, bounce: 0 }), g = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }), w = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }), y = (e2) => new Intl.DateTimeFormat("en-US", { timeZone: "UTC", ...e2 }), M = y({ weekday: "short", month: "short", day: "numeric", year: "numeric" }), j = y({ month: "short", day: "numeric" }), N = y({ month: "short" }), $ = y({ year: "numeric" }), D = y({ month: "short", day: "numeric", year: "numeric" }), L = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), k = (e2) => "number" == typeof e2 ? e2 : e2.getTime(), T = (e2) => Number(e2.toPrecision(12));
  function P(e2) {
    let t2 = Math.max(e2, 1), a2 = 10 ** Math.floor(Math.log10(t2 / 4));
    for (let e3 of [1, 2, 2.5, 5, 10]) {
      let r2 = e3 * a2, l2 = Math.ceil(t2 / r2) * r2;
      if (l2 / r2 <= 4 + 1e-9) return { top: T(l2), step: T(r2) };
    }
    return { top: t2, step: t2 / 4 };
  }
  function E(e2, t2) {
    let a2 = 0, r2 = e2.length;
    for (; a2 < r2; ) {
      let l2 = a2 + r2 >> 1;
      e2[l2].t < t2 ? a2 = l2 + 1 : r2 = l2;
    }
    return a2;
  }
  function U(e2, t2, a2, r2, l2, n2) {
    let s2 = e2.slice(Math.max(0, t2), Math.min(e2.length, a2));
    if (!s2.length) return "";
    let i2 = [];
    if (s2.length <= 2 * n2) for (let e3 of s2) i2.push(`${r2(e3.t).toFixed(1)},${l2(e3.value).toFixed(1)}`);
    else {
      let e3 = -1, t3 = null, a3 = null, n3 = () => {
        if (t3 && a3) for (let e4 of t3.t < a3.t ? [t3, a3] : [a3, t3]) i2.push(`${r2(e4.t).toFixed(1)},${l2(e4.value).toFixed(1)}`);
      };
      for (let l3 of s2) {
        let s3 = Math.floor(r2(l3.t));
        if (s3 !== e3) {
          n3(), e3 = s3, t3 = a3 = l3;
          continue;
        }
        l3.value < t3.value && (t3 = l3), l3.value > a3.value && (a3 = l3);
      }
      n3();
    }
    return `M${i2.join("L")}`;
  }
  let C = () => () => {
  };
  function A() {
    let e2 = (0, l.useRef)(null), [t2, a2] = (0, l.useState)(0);
    return (0, l.useLayoutEffect)(() => {
      let t3 = e2.current;
      if (!t3 || (a2(t3.clientWidth), "u" < typeof ResizeObserver)) return;
      let r2 = new ResizeObserver(() => a2(t3.clientWidth));
      return r2.observe(t3), () => r2.disconnect();
    }, []), [e2, t2];
  }
  function S({ data: e2, label: t2, unit: a2 = "", formatValue: h2 = (e3) => w.format(e3), formatTick: d2 = (e3) => g.format(e3), formatDate: p2 = (e3) => M.format(e3), annotations: f2 = [], range: x2, defaultRange: y2, onRangeChange: I2, minSpan: R2 = 6048e5, height: F2 = 240, overviewHeight: W2 = 52, emptyLabel: O2 = "No data yet", ref: X2, className: z2 }) {
    let Z2, H2 = (Z2 = (0, l.useSyncExternalStore)(C, () => true, () => false), !!(0, n.I)() && Z2), K2 = `brush${(0, l.useId)().replace(/[^a-zA-Z0-9_-]/g, "")}`, V2 = (0, l.useRef)(null), B2 = (0, l.useRef)(null);
    (0, l.useImperativeHandle)(X2, () => V2.current);
    let G2 = (0, s.W)(V2, { once: true, amount: 0.3 }), [Y2, q2] = A(), [J2, Q2] = A(), ee2 = (0, l.useMemo)(() => e2.map((e10) => ({ t: k(e10.date), value: e10.value })), [e2]), et2 = (0, l.useMemo)(() => {
      let e10 = (e11, t4) => {
        let a3 = [];
        for (let r2 = Math.max(0, e11 - 3); r2 <= Math.min(ee2.length - 1, e11 + 3); r2++) a3.push(t4(r2));
        return a3;
      }, t3 = ee2.map((t4, a3) => {
        let r2 = e10(a3, (e11) => [ee2[e11].value]).map(([e11]) => e11);
        return { value: r2.reduce((e11, t5) => e11 + t5, 0) / r2.length, low: Math.min(...r2), high: Math.max(...r2) };
      });
      return ee2.map((a3, r2) => {
        let l2 = e10(r2, (e11) => [t3[e11].low, t3[e11].high]);
        return { t: a3.t, value: t3[r2].value, low: l2.reduce((e11, [t4]) => e11 + t4, 0) / l2.length, high: l2.reduce((e11, [, t4]) => e11 + t4, 0) / l2.length };
      });
    }, [ee2]), ea2 = (0, l.useMemo)(() => f2.map((e10) => ({ ...e10, t: k(e10.date) })).sort((e10, t3) => e10.t - t3.t), [f2]), er = ee2.length < 2, el = ee2[0]?.t ?? 0, en = ee2[ee2.length - 1]?.t ?? 1, es = [el, en], ei = ([e10, t3]) => {
      let a3 = L(t3 - e10, Math.min(R2, en - el), en - el), r2 = L(e10, el, en - a3);
      return [r2, r2 + a3];
    }, [eo, eu] = (0, l.useState)(() => x2 ?? y2 ?? es), ec = (0, l.useRef)(eo), eh = (0, l.useRef)(null), ed = (e10) => {
      ec.current = e10, eu(e10);
    }, em = (e10) => {
      eh.current?.stop();
      let t3 = ec.current;
      H2 ? ed(e10) : eh.current = (0, i.i)(0, 1, { ...v, onUpdate: (a3) => ed([t3[0] + (e10[0] - t3[0]) * a3, t3[1] + (e10[1] - t3[1]) * a3]) });
    }, ep = (e10, t3) => {
      let a3 = ei(e10);
      t3 ? em(a3) : (eh.current?.stop(), ed(a3)), I2?.(a3);
    }, ef = x2 ? `${x2[0]}:${x2[1]}` : "";
    (0, l.useEffect)(() => {
      if (!x2 || er) return;
      let e10 = ei(x2), t3 = ec.current;
      Math.abs(e10[0] - t3[0]) + Math.abs(e10[1] - t3[1]) > 1e3 && em(e10);
    }, [ef, er]), (0, l.useEffect)(() => {
      if (!er) {
        let e10 = ei(ec.current);
        (e10[0] !== ec.current[0] || e10[1] !== ec.current[1]) && ed(e10);
      }
    }, [el, en]);
    let [ev, ex] = eo, e_ = Math.max(1, ex - ev), eb = Math.max(0, E(ee2, ev) - 1), eg = Math.min(ee2.length, E(ee2, ex) + 1), ew = 0;
    for (let e10 = eb; e10 < eg; e10++) ew = Math.max(ew, ee2[e10].value);
    let ey = P(1.04 * ew), [eM, ej] = (0, l.useState)(ey.top), eN = (0, l.useRef)(null), e$ = (0, l.useRef)(ey.top);
    (0, l.useEffect)(() => {
      e$.current === ey.top || (e$.current = ey.top, eN.current?.stop(), H2 || (eN.current = (0, i.i)(eM, ey.top, { ...v, onUpdate: ej })));
    }, [H2, ey.top]), (0, l.useEffect)(() => () => {
      eh.current?.stop(), eN.current?.stop();
    }, []);
    let eD = (e10) => (e10 - ev) / e_ * q2, eL = H2 ? ey.top : eM, ek = (e10) => 28 + (1 - e10 / (eL || 1)) * (F2 - 28), eT = q2 && !er ? U(ee2, eb, eg, eD, ek, q2) : "", eP = eT ? `${eT}L${eD(ee2[eg - 1].t).toFixed(1)},${F2}L${eD(ee2[eb].t).toFixed(1)},${F2}Z` : "", eE = q2 && !er ? U(et2, eb, eg, eD, ek, 4 * q2) : "", eU = eE ? `${U(et2.map((e10) => ({ t: e10.t, value: e10.high })), eb, eg, eD, ek, 4 * q2)}L${U(et2.map((e10) => ({ t: e10.t, value: e10.low })), eb, eg, eD, ek, 4 * q2).slice(1).split("L").reverse().join("L")}Z` : "", eC = L(((er ? q2 : q2 * (en - el) / (ee2.length - 1) / e_) - 2.75) / 1.5, 0, 1), eA = ey.top > 0 ? Array.from({ length: Math.round(ey.top / ey.step) + 1 }, (e10, t3) => T(t3 * ey.step)) : [], eS = q2 && !er ? (function(e10, t3, a3) {
      let r2 = Math.max(2, Math.floor(a3 / 76)), l2 = t3 - e10;
      for (let a4 of [1, 2, 7, 14]) {
        if (l2 / (864e5 * a4) > r2) continue;
        let n3 = [], s2 = 864e5 * Math.ceil(e10 / 864e5);
        if (a4 >= 7) for (; 1 !== new Date(s2).getUTCDay(); ) s2 += 864e5;
        for (; s2 <= t3; s2 += 864e5 * a4) n3.push({ t: s2, label: j.format(s2) });
        return n3;
      }
      for (let a4 of [1, 2, 3, 6, 12]) {
        if (l2 / (30.44 * a4 * 864e5) > r2) continue;
        let n3 = [], s2 = new Date(e10), i2 = s2.getUTCFullYear(), o2 = s2.getUTCMonth() + +!!(s2.getUTCDate() > 1 || s2.getUTCHours() > 0);
        for (; ; ) {
          let e11 = Date.UTC(i2 += Math.floor(o2 / 12), o2 %= 12, 1);
          if (e11 > t3) break;
          o2 % a4 == 0 && n3.push({ t: e11, label: 0 === o2 ? $.format(e11) : N.format(e11) }), o2 += 1;
        }
        return n3;
      }
      let n2 = [];
      for (let a4 = new Date(e10).getUTCFullYear() + 1; Date.UTC(a4, 0, 1) <= t3; a4++) n2.push({ t: Date.UTC(a4, 0, 1), label: String(a4) });
      return n2;
    })(ev, ex, q2) : [], eI = (e10) => (e10 - el) / (en - el || 1) * Q2, eR = (0, l.useMemo)(() => {
      if (!Q2 || er) return { line: "", area: "", marks: [] };
      let e10 = P(et2.reduce((e11, t4) => Math.max(e11, t4.value), 0)).top || 1, t3 = (t4) => 4 + (1 - t4 / e10) * (W2 - 4), a3 = U(et2, 0, et2.length, eI, t3, 4 * Q2);
      return { line: a3, area: `${a3}L${Q2},${W2}L0,${W2}Z`, marks: ea2.map((e11) => {
        let a4 = L(E(et2, e11.t), 0, et2.length - 1);
        return { t: e11.t, x: eI(e11.t), y: t3(et2[a4].value) };
      }) };
    }, [et2, ea2, Q2, W2, er]), eF = eI(ev), eW = eI(ex), eO = (0, o.d)(0), [eX, ez] = (0, l.useState)(0);
    (0, l.useEffect)(() => {
      if (er) return;
      if (H2) return void eO.jump(1);
      if (!G2 || eO.get() >= 1) return;
      let e10 = (0, i.i)(eO, 1, { ...b, onUpdate: ez });
      return () => e10.stop();
    }, [eO, er, G2, H2]);
    let [eZ, eH] = (0, l.useState)(null), [eK, eV] = (0, l.useState)(null), eB = null !== eZ && eZ >= eb && eZ < eg ? eZ : null, eG = (e10) => {
      let t3 = Y2.current?.getBoundingClientRect();
      if (!t3?.width || er) return null;
      let a3 = ev + (e10 - t3.left) / t3.width * e_, r2 = L(E(ee2, a3), 1, ee2.length - 1);
      return L(a3 - ee2[r2 - 1].t < ee2[r2].t - a3 ? r2 - 1 : r2, Math.max(0, eb), eg - 1);
    }, eY = null === eB ? 0 : eD(ee2[eB].t), eq = null === eB ? 0 : ek(et2[eB].value + (ee2[eB].value - et2[eB].value) * eC), eJ = null === eB ? null : ea2.find((e10) => 432e5 > Math.abs(e10.t - ee2[eB].t)) ?? null, eQ = null !== eK ? ea2[eK] : null, e0 = (0, o.d)(0), e1 = (0, o.d)(0), e22 = (0, u.z)(e0, _), e5 = (0, u.z)(e1, _), e4 = null !== eB || null !== eQ, e6 = (0, l.useRef)(false);
    (0, l.useLayoutEffect)(() => {
      let e10 = B2.current;
      if (!e4 || !e10 || !q2) {
        e6.current = false;
        return;
      }
      let t3 = eQ ? eD(eQ.t) : eY, a3 = eQ ? 28 : eq, r2 = e10.offsetWidth, l2 = e10.offsetHeight, n2 = t3 + 14;
      n2 + r2 > q2 && (n2 = t3 - 14 - r2);
      let s2 = a3 - l2 - 14;
      s2 < 0 && (s2 = a3 + 14), e0.set(L(n2, 0, Math.max(0, q2 - r2))), e1.set(L(s2, 0, Math.max(0, F2 - l2))), (!e6.current || H2) && (e22.jump(e0.get()), e5.jump(e1.get())), e6.current = true;
    });
    let e3 = (0, l.useRef)(null), e8 = (e10) => {
      let t3 = J2.current?.getBoundingClientRect();
      return t3?.width ? el + L((e10 - t3.left) / t3.width, 0, 1) * (en - el) : el;
    }, e7 = () => ep(es, true), e9 = Math.max(864e5, (en - el) / Math.max(1, ee2.length - 1)), te = (e10, t3) => {
      let [a3, r2] = ec.current, l2 = r2 - a3, n2 = e10.shiftKey || e10.key.startsWith("Page"), s2 = { ArrowLeft: -1, ArrowDown: -1, PageDown: -1, ArrowRight: 1, ArrowUp: 1, PageUp: 1 }[e10.key], i2 = null;
      if ("Escape" === e10.key || "0" === e10.key) i2 = es;
      else if ("window" === t3 && ("+" === e10.key || "=" === e10.key)) i2 = [a3 + l2 / 4, r2 - l2 / 4];
      else if ("window" === t3 && ("-" === e10.key || "_" === e10.key)) i2 = [a3 - l2 / 2, r2 + l2 / 2];
      else if ("Home" === e10.key) i2 = "end" === t3 ? [a3, a3 + Math.min(R2, en - el)] : [el, "window" === t3 ? el + l2 : r2];
      else if ("End" === e10.key) i2 = "start" === t3 ? [r2 - Math.min(R2, en - el), r2] : ["window" === t3 ? en - l2 : a3, en];
      else if (s2) {
        let e11 = s2 * ("window" === t3 ? l2 * (n2 ? 0.5 : 0.1) : e9 * (n2 ? 10 : 1));
        i2 = "window" === t3 ? [a3 + e11, r2 + e11] : "start" === t3 ? [Math.min(a3 + e11, r2 - R2), r2] : [a3, Math.max(r2 + e11, a3 + R2)];
      }
      i2 && (e10.preventDefault(), ep(i2, false));
    }, tt = (e10) => `${h2(e10)}${a2 ? ` ${a2}` : ""}`, ta = null === eB ? null : ee2[eB], tr = null !== eB && eB >= 7 ? ee2[eB - 7] : null, tl = ta && tr && tr.value ? (ta.value - tr.value) / tr.value : null, tn = `${D.format(ev)} to ${D.format(ex)}`, ts = ea2.filter((e10) => e10.t >= ev && e10.t <= ex), ti = /* @__PURE__ */ new Map(), to = -1 / 0;
    ts.forEach((e10, t3) => {
      let a3 = eD(e10.t), r2 = 6.2 * e10.label.length + 4, l2 = t3 + 1 < ts.length ? eD(ts[t3 + 1].t) - 10 : q2;
      if (a3 + 14 >= to && a3 + 14 + r2 <= l2) {
        ti.set(e10.t, false), to = a3 + 14 + r2 + 8;
        return;
      }
      if (a3 - 14 - r2 >= Math.max(0, to) && (0 === t3 || a3 - 14 - r2 >= eD(ts[t3 - 1].t) + 12)) {
        ti.set(e10.t, true), to = a3 + 12;
        return;
      }
      to = Math.max(to, a3 + 12);
    });
    let tu = ta ? `${p2(new Date(ta.t))}, ${tt(ta.value)}${eJ ? `. ${eJ.label}` : ""}` : "", tc = er ? `${t2}. ${O2}.` : `${t2}, ${D.format(el)} to ${D.format(en)}. Showing ${tn}.`;
    return (0, r.jsxs)("figure", { ref: V2, className: [m().figure, z2].filter(Boolean).join(" "), "aria-label": t2, children: [(0, r.jsxs)("div", { className: m().chart, "data-active": e4 || void 0, children: [(0, r.jsxs)("div", { ref: Y2, className: m().plot, style: { height: F2 }, role: "group", tabIndex: er ? -1 : 0, "aria-roledescription": "chart", "aria-label": `${t2}, ${tn}. Use left and right arrows to read values.`, onPointerMove: (e10) => {
      ("mouse" === e10.pointerType || e10.buttons) && eH(eG(e10.clientX));
    }, onPointerDown: (e10) => {
      "mouse" !== e10.pointerType && (e10.currentTarget.setPointerCapture?.(e10.pointerId), eH(eG(e10.clientX)));
    }, onPointerUp: (e10) => {
      "mouse" !== e10.pointerType && eH(null);
    }, onPointerCancel: () => eH(null), onPointerLeave: (e10) => {
      "mouse" === e10.pointerType && eH(null);
    }, onKeyDown: (e10) => {
      if (er) return;
      if ("Escape" === e10.key && null !== eB) {
        e10.preventDefault(), eH(null);
        return;
      }
      let t3 = eB ?? eg - 1, a3 = Math.max(1, Math.round((eg - eb) / 8)), r2 = { ArrowLeft: t3 - 1, ArrowRight: null === eB ? eg - 1 : t3 + 1, PageDown: t3 - a3, PageUp: t3 + a3, Home: eb, End: eg - 1 }[e10.key];
      void 0 !== r2 && (e10.preventDefault(), eH(L(r2, Math.max(0, eb), eg - 1)));
    }, onBlur: () => eH(null), onDoubleClick: e7, onFocus: (e10) => {
      e10.currentTarget.matches(":focus-visible") && !er && eH((e11) => e11 ?? eg - 1);
    }, children: [(0, r.jsxs)("svg", { className: m().svg, width: "100%", height: F2, "aria-hidden": "true", focusable: "false", children: [(0, r.jsx)("defs", { children: (0, r.jsx)("clipPath", { id: `${K2}-plot`, children: (0, r.jsx)("rect", { x: 0, y: -8, width: Math.max(0, q2 * (H2 ? 1 : eX)), height: F2 + 16 }) }) }), eA.slice(1).map((e10) => (0, r.jsx)("line", { className: m().grid, x1: 0, x2: "100%", y1: Math.round(ek(e10)) + 0.5, y2: Math.round(ek(e10)) + 0.5 }, e10)), (0, r.jsx)("line", { className: m().baseline, x1: 0, x2: "100%", y1: F2 - 0.5, y2: F2 - 0.5 }), ts.map((e10) => (0, r.jsx)("line", { className: m().eventRule, x1: Math.round(eD(e10.t)) + 0.5, x2: Math.round(eD(e10.t)) + 0.5, y1: 18, y2: F2, "data-active": eQ?.t === e10.t || eJ?.t === e10.t || void 0 }, e10.t)), (0, r.jsxs)("g", { clipPath: `url(#${K2}-plot)`, children: [(0, r.jsx)("path", { className: m().band, d: eU, style: { opacity: 1 - eC } }), (0, r.jsx)("path", { className: m().area, d: eP, style: { opacity: eC } }), (0, r.jsx)("path", { className: m().trend, d: eE, style: { opacity: 1 - eC } }), (0, r.jsx)("path", { className: m().line, d: eT, style: { opacity: eC } })] }), (0, r.jsx)("line", { className: m().crosshair, x1: Math.round(eY) + 0.5, x2: Math.round(eY) + 0.5, y1: 18, y2: F2 }), (0, r.jsx)("circle", { className: m().dot, cx: eY, cy: eq, r: 4 })] }), ts.map((e10) => {
      let t3 = eD(e10.t), a3 = ea2.indexOf(e10);
      return (0, r.jsxs)("span", { className: m().event, style: { left: t3 }, "data-labelled": ti.has(e10.t) || void 0, "data-flip": ti.get(e10.t) || void 0, "data-active": eQ?.t === e10.t || eJ?.t === e10.t || void 0, "aria-hidden": "true", onPointerEnter: () => eV(a3), onPointerLeave: () => eV(null), onPointerDown: (e11) => e11.stopPropagation(), children: [(0, r.jsx)("span", { className: m().eventDot }), (0, r.jsx)("span", { className: m().eventLabel, children: e10.label })] }, e10.t);
    }), (0, r.jsx)(c.PY1.div, { ref: B2, className: m().tooltip, style: { x: H2 ? e0 : e22, y: H2 ? e1 : e5 }, "aria-hidden": "true", children: eQ ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)("p", { className: m().tipTitle, children: p2(new Date(eQ.t)) }), (0, r.jsx)("p", { className: m().tipValue, children: eQ.label }), eQ.description && (0, r.jsx)("p", { className: m().tipNote, children: eQ.description })] }) : ta ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)("p", { className: m().tipTitle, children: p2(new Date(ta.t)) }), (0, r.jsx)("p", { className: m().tipValue, children: tt(ta.value) }), eC < 1 && null !== eB && (0, r.jsx)("p", { className: m().tipNote, children: `${h2(Math.round(et2[eB].value))} seven day average` }), null !== tl && (0, r.jsx)("p", { className: m().tipNote, children: `${tl >= 0 ? "+" : "\u2212"}${Math.abs(100 * tl).toFixed(1)}% vs a week earlier` }), eJ && (0, r.jsxs)("p", { className: m().tipEvent, children: [(0, r.jsx)("span", { className: m().tipEventDot }), eJ.label] })] }) : null }), er && (0, r.jsx)("p", { className: m().message, children: O2 })] }), (0, r.jsx)("div", { className: m().gutter, "aria-hidden": "true", children: eA.map((e10) => (0, r.jsx)("span", { className: m().tick, style: { top: ek(e10) }, children: d2(e10) }, e10)) }), (0, r.jsx)("div", { className: m().axis, "aria-hidden": "true", children: eS.map((e10) => {
      let t3 = eD(e10.t);
      return (0, r.jsx)("span", { className: m().axisLabel, style: { left: t3, translate: `${t3 < 24 ? 0 : t3 > q2 - 24 ? -100 : -50}% 0` }, children: e10.label }, e10.t);
    }) }), (0, r.jsxs)("div", { ref: J2, className: m().strip, style: { height: W2 }, onPointerDown: (e10) => {
      if (er || e10.button > 0) return;
      let t3 = J2.current.getBoundingClientRect(), a3 = e10.clientX - t3.left;
      e3.current = { mode: 14 >= Math.abs(a3 - eF) && a3 <= (eF + eW) / 2 ? "start" : 14 >= Math.abs(a3 - eW) ? "end" : a3 > eF && a3 < eW ? "pan" : "new", pointerX: e10.clientX, from: ec.current, anchor: e8(e10.clientX), moved: false }, e10.currentTarget.setPointerCapture?.(e10.pointerId), eh.current?.stop();
    }, onPointerMove: (e10) => {
      let t3 = e3.current;
      if (!t3 || !t3.moved && 3 > Math.abs(e10.clientX - t3.pointerX)) return;
      t3.moved = true;
      let a3 = e8(e10.clientX), r2 = a3 - t3.anchor, [l2, n2] = t3.from, s2 = Math.min(R2, en - el), i2 = "pan" === t3.mode ? [l2 + r2, n2 + r2] : "start" === t3.mode ? [L(a3, el, n2 - s2), n2] : "end" === t3.mode ? [l2, L(a3, l2 + s2, en)] : [Math.min(t3.anchor, a3), Math.max(t3.anchor, a3)];
      "new" === t3.mode && i2[1] - i2[0] < s2 && (a3 >= t3.anchor ? i2[1] = i2[0] + s2 : i2[0] = i2[1] - s2), ep(i2, false);
    }, onPointerUp: () => {
      let e10 = e3.current;
      if (e3.current = null, !e10 || e10.moved || "new" !== e10.mode) return;
      let t3 = (ec.current[1] - ec.current[0]) / 2;
      ep([e10.anchor - t3, e10.anchor + t3], true);
    }, onPointerCancel: () => {
      e3.current = null;
    }, onDoubleClick: e7, children: [(0, r.jsxs)("svg", { className: m().svg, width: "100%", height: W2, "aria-hidden": "true", focusable: "false", children: [(0, r.jsx)("defs", { children: (0, r.jsx)("clipPath", { id: `${K2}-window`, children: (0, r.jsx)("rect", { x: eF, y: -2, width: Math.max(0, eW - eF), height: W2 + 4 }) }) }), (0, r.jsx)("path", { className: m().overviewArea, d: eR.area }), (0, r.jsx)("path", { className: m().overviewLine, d: eR.line }), (0, r.jsxs)("g", { clipPath: `url(#${K2}-window)`, children: [(0, r.jsx)("path", { className: m().overviewAreaIn, d: eR.area }), (0, r.jsx)("path", { className: m().overviewLineIn, d: eR.line })] }), eR.marks.map((e10) => (0, r.jsx)("circle", { className: m().overviewEvent, cx: e10.x, cy: e10.y, r: 2.5 }, e10.t))] }), !er && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)("div", { className: m().shade, "data-edge": "start", style: { left: 0, width: Math.max(0, eF) } }), (0, r.jsx)("div", { className: m().shade, "data-edge": "end", style: { left: eW, right: 0 } }), (0, r.jsx)("div", { className: m().window, style: { left: eF, width: Math.max(0, eW - eF) }, role: "slider", tabIndex: 0, "aria-label": `${t2} window`, "aria-roledescription": "range window", "aria-valuemin": el, "aria-valuemax": en, "aria-valuenow": Math.round(ev), "aria-valuetext": tn, onKeyDown: (e10) => te(e10, "window") }), (0, r.jsx)("div", { className: m().handle, style: { left: eF }, role: "slider", tabIndex: 0, "aria-label": "Window start", "aria-valuemin": el, "aria-valuemax": Math.round(ex), "aria-valuenow": Math.round(ev), "aria-valuetext": D.format(ev), onKeyDown: (e10) => te(e10, "start"), children: (0, r.jsx)("span", { className: m().grip }) }), (0, r.jsx)("div", { className: m().handle, style: { left: eW }, role: "slider", tabIndex: 0, "aria-label": "Window end", "aria-valuemin": Math.round(ev), "aria-valuemax": en, "aria-valuenow": Math.round(ex), "aria-valuetext": D.format(ex), onKeyDown: (e10) => te(e10, "end"), children: (0, r.jsx)("span", { className: m().grip }) })] })] })] }), (0, r.jsx)("p", { className: m().srOnly, "aria-live": "polite", "aria-atomic": "true", children: tu }), (0, r.jsx)("p", { className: m().srOnly, children: tc }), !er && (0, r.jsx)("div", { className: m().srOnly, children: (0, r.jsxs)("table", { children: [(0, r.jsx)("caption", { children: `${t2}, ${tn}` }), (0, r.jsx)("thead", { children: (0, r.jsxs)("tr", { children: [(0, r.jsx)("th", { scope: "col", children: "Date" }), (0, r.jsx)("th", { scope: "col", children: t2 }), (0, r.jsx)("th", { scope: "col", children: "Event" })] }) }), (0, r.jsx)("tbody", { children: ee2.slice(E(ee2, ev), E(ee2, ex + 1)).map((e10) => {
      let t3 = ea2.find((t4) => 432e5 > Math.abs(t4.t - e10.t));
      return (0, r.jsxs)("tr", { children: [(0, r.jsx)("th", { scope: "row", children: D.format(e10.t) }), (0, r.jsx)("td", { children: tt(e10.value) }), (0, r.jsx)("td", { children: t3 ? `${t3.label}${t3.description ? `. ${t3.description}` : ""}` : "" })] }, e10.t);
    }) })] }) })] });
  }
  var I = a(66558), R = a(18333), F = a.n(R);
  let W = Date.UTC(2024, 8, 21), O = Date.UTC(2026, 8, 20), X = (e2, t2, a2) => Math.exp(-(((e2 - t2) / a2) ** 2)), z = (e2, t2, a2) => Math.round((Date.UTC(e2, t2, a2) - W) / 864e5), Z = z(2025, 1, 11), H = z(2025, 6, 8), K = z(2025, 10, 3), V = z(2026, 2, 24), B = z(2026, 5, 9), G = Array.from({ length: Math.round((O - W) / 864e5) + 1 }, (e2, t2) => {
    let a2, r2 = W + 864e5 * t2, l2 = new Date(r2).getUTCDay();
    return { date: r2, value: Math.round((4200 + 9.5 * t2 + (t2 > Z ? 3600 * (1 - Math.exp(-(t2 - Z) / 30)) : 0) + (t2 > V ? 5200 * (1 - Math.exp(-(t2 - V) / 60)) : 0)) * (1 - 0.08 * X(t2 % 365, 318, 14) - 0.06 * X(t2 % 365, 300, 30)) * (0 === l2 || 6 === l2 ? 0.74 : 1) * (1 + 1.1 * X(t2, Z, 2.2) - 0.58 * X(t2, H, 0.6) - 0.07 * X(t2, K, 5) + 0.5 * X(t2, V, 2) + 0.35 * X(t2, B, 1.4)) * (1 + ((a2 = 43758.5453 * Math.sin(91.7 * t2 + 17.3)) - Math.floor(a2) - 0.5) * 0.07)) };
  }), Y = [{ date: W + 864e5 * Z, label: "Launch", description: "Opened sign ups to everyone" }, { date: W + 864e5 * H, label: "Outage", description: "Sync was down for 3 hours" }, { date: W + 864e5 * K, label: "Pricing", description: "Free plan limited to 3 devices" }, { date: W + 864e5 * V, label: "v2", description: "Offline mode and shared spaces" }, { date: W + 864e5 * B, label: "Keynote", description: "Featured at a design conference" }], q = { "30d": [O - 25056e5, O], "90d": [O - 76896e5, O], "1y": [O - 314496e5, O], all: [W, O] }, J = [{ value: "30d", label: "30D" }, { value: "90d", label: "90D" }, { value: "1y", label: "1Y" }, { value: "all", label: "All" }], Q = new Intl.DateTimeFormat("en-US", { timeZone: "UTC", month: "short", day: "numeric", year: "numeric" }), ee = new Intl.NumberFormat("en-US");
  function et() {
    let e2 = (0, l.useId)(), [t2, a2] = (0, l.useState)(q["90d"]), n2 = Object.entries(q).find(([, e3]) => 432e5 > Math.abs(e3[0] - t2[0]) && 432e5 > Math.abs(e3[1] - t2[1]))?.[0] ?? "", s2 = G.filter((e3) => e3.date >= t2[0] - 432e5 && e3.date <= t2[1] + 432e5), i2 = s2.length ? s2.reduce((e3, t3) => e3 + t3.value, 0) / s2.length : 0;
    return (0, r.jsxs)("section", { className: F().card, "aria-labelledby": e2, children: [(0, r.jsxs)("div", { className: F().top, children: [(0, r.jsxs)("div", { className: F().heading, children: [(0, r.jsx)("h3", { id: e2, className: F().title, children: "Daily active users" }), (0, r.jsx)("p", { className: F().meta, children: `${ee.format(Math.round(i2))} a day, ${Q.format(t2[0])} to ${Q.format(t2[1])}` })] }), (0, r.jsx)(I.A, { label: "Range", options: J, value: n2, onValueChange: (e3) => a2(q[e3]) })] }), (0, r.jsx)(S, { data: G, label: "Daily active users", unit: "users", annotations: Y, range: t2, onRangeChange: a2 })] });
  }
  let ea = et;
}

__m(__module,__exports,__require);
}