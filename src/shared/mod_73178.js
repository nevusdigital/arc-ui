function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { b: () => z });
  var r = a(95155), n = a(12115), i = a(18310), l = a(55809), s = a(25354), c = a(61792), o = a(28245), u = a(22535), h = a(7890), d = a(92171), p = a(80642), m = a(7770), f = a(1466), x = a.n(f);
  let { spring: g, duration: y, ease: _ } = m.T, j = ({ visualDuration: e2, bounce: t2 }, a2 = 1e-3) => {
    let r2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: r2 * r2, damping: 2 * (1 - t2) * r2, restDelta: a2, restSpeed: 2 * a2 };
  }, b = j(g.smooth), k = j(g.snappy, 1e-4), v = { stiffness: k.stiffness, damping: k.damping, restDelta: 0.01 }, N = { duration: 1.75 * y.considered, ease: [..._.inOut] }, M = { duration: y.instant, ease: [..._.standard] }, w = ["var(--accent)", "color-mix(in oklab, var(--foreground) 46%, var(--surface))", "color-mix(in oklab, var(--foreground) 26%, var(--surface))"], $ = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }), R = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }), L = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), S = (e2, t2) => e2.color ?? w[Math.min(t2, w.length - 1)], P = (e2) => Number(e2.toPrecision(12));
  function E(e2, t2) {
    let a2 = Math.min(0, e2), r2 = Math.max(t2, a2 + 1), n2 = 10 ** Math.floor(Math.log10((r2 - a2) / 4));
    for (let e3 of [1, 2, 2.5, 5, 10]) {
      let t3 = e3 * n2, i2 = Math.floor(a2 / t3) * t3, l2 = Math.ceil(r2 / t3) * t3;
      if ((l2 - i2) / t3 <= 4 + 1e-9) {
        let e4 = [];
        for (let a3 = i2; a3 <= l2 + t3 / 2; a3 += t3) e4.push(P(a3));
        return { min: P(i2), max: P(l2), ticks: e4 };
      }
    }
    return { min: a2, max: r2, ticks: [a2, r2] };
  }
  function T(e2, t2) {
    if (!e2.length) return 0;
    let a2 = 0, r2 = e2.length - 1;
    if (t2 <= e2[a2][0]) return e2[a2][1];
    if (t2 >= e2[r2][0]) return e2[r2][1];
    for (; r2 - a2 > 1; ) {
      let n3 = a2 + r2 >> 1;
      e2[n3][0] < t2 ? a2 = n3 : r2 = n3;
    }
    let [n2, i2] = e2[a2], [l2, s2] = e2[r2];
    return l2 === n2 ? s2 : i2 + (s2 - i2) * (t2 - n2) / (l2 - n2);
  }
  let A = (e2, t2) => Object.assign(e2, t2), C = Array.from({ length: 241 }, (e2, t2) => t2 / 240), O = () => () => {
  };
  function U(e2, t2, a2) {
    return (0, l.G)(() => {
      let r2 = t2.max.get() - t2.min.get() || 1;
      return Math.round(12 + (1 - (e2 - t2.min.get()) / r2) * (a2 - 12)) + 0.5;
    });
  }
  function F({ value: e2, scale: t2, height: a2 }) {
    let n2 = U(e2, t2, a2);
    return (0, r.jsx)(s.PY1.line, { className: x().grid, x1: 0, x2: "100%", y1: n2, y2: n2, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0, transition: M }, transition: { duration: y.standard, ease: [..._.standard] } });
  }
  function D({ value: e2, scale: t2, height: a2, format: n2 }) {
    let i2 = U(e2, t2, a2);
    return (0, r.jsx)(s.PY1.span, { className: x().tick, style: { y: i2 }, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0, transition: M }, transition: { duration: y.standard, ease: [..._.standard] }, children: (0, r.jsx)("span", { className: x().tickText, children: n2(e2) }) });
  }
  function z({ data: e2, series: t2, label: a2, unit: l2 = "", height: m2 = 220, formatValue: f2, formatTick: g2 = (e3) => R.format(e3), hiddenSeries: j2, defaultHiddenSeries: w2, onHiddenSeriesChange: P2, onActiveChange: U2, loading: I = false, emptyLabel: Y = "No data for this range", legend: H, categoryLabel: W = "Date", curve: X = "smooth", ref: V, className: B }) {
    let G, K = (G = (0, n.useSyncExternalStore)(O, () => true, () => false), !!(0, i.I)() && G), Z = (0, n.useRef)(null), q = (0, n.useRef)(null), Q = (0, n.useRef)(null), J = (0, n.useRef)(null), ee = (0, n.useRef)(null), et = (0, n.useRef)(/* @__PURE__ */ new Map()), ea = (0, n.useRef)(/* @__PURE__ */ new Map()), er = (0, n.useRef)(/* @__PURE__ */ new Map()), en = (0, n.useRef)(/* @__PURE__ */ new Map());
    (0, n.useImperativeHandle)(V, () => Z.current);
    let ei = (0, c.W)(Z, { once: true, amount: 0.3 }), el = `line${(0, n.useId)().replace(/[^a-zA-Z0-9_-]/g, "")}`, es = e2.length - 1, ec = 0 === e2.length, [eo, eu] = (0, n.useState)(w2 ?? []), eh = j2 ?? eo, ed = t2.filter((e3) => !eh.includes(e3.key)), ep = H ?? t2.length > 1, em = `${X}|${t2.map((e3) => e3.key).join(",")}|${e2.map((e3) => `${e3.key}:${t2.map((t3) => e3.values[t3.key] ?? 0).join(",")}`).join(";")}`, ef = (0, n.useMemo)(() => new Map(t2.map((t3) => [t3.key, (function(e3, t4) {
      if (0 === e3.length) return [];
      if (1 === e3.length) return [[0, e3[0]], [1, e3[0]]];
      let a3 = e3.length - 1, r2 = 1 / a3;
      if (!t4) return e3.map((e4, t5) => [t5 * r2, e4]);
      let n2 = e3.slice(1).map((t5, a4) => (t5 - e3[a4]) / r2), i2 = e3.map((e4, t5) => 0 === t5 || t5 === a3 ? 0 : (Math.sign(n2[t5 - 1]) + Math.sign(n2[t5])) * Math.min(Math.abs(n2[t5 - 1]), Math.abs(n2[t5]), Math.abs(n2[t5 - 1] + n2[t5]) / 4) || 0);
      a3 > 1 ? (i2[0] = (3 * n2[0] - i2[1]) / 2, i2[a3] = (3 * n2[a3 - 1] - i2[a3 - 1]) / 2) : (i2[0] = n2[0], i2[1] = n2[0]);
      let l3 = Math.max(1, Math.min(16, Math.round(192 / a3))), s2 = [];
      for (let t5 = 0; t5 < a3; t5++) {
        let a4 = Math.min(e3[t5], e3[t5 + 1]), n3 = Math.max(e3[t5], e3[t5 + 1]);
        for (let c2 = 0; c2 < l3; c2++) {
          let o2 = c2 / l3, u2 = o2 * o2, h2 = u2 * o2, d2 = (2 * h2 - 3 * u2 + 1) * e3[t5] + (h2 - 2 * u2 + o2) * r2 * i2[t5] + (3 * u2 - 2 * h2) * e3[t5 + 1] + (h2 - u2) * r2 * i2[t5 + 1];
          s2.push([(t5 + o2) * r2, L(d2, a4, n3)]);
        }
      }
      return s2.push([1, e3[a3]]), s2;
    })(e2.map((e3) => e3.values[t3.key] ?? 0), "smooth" === X)])), [em]), ex = 1 / 0, eg = -1 / 0;
    for (let t3 of ed) for (let a3 of e2) {
      let e3 = a3.values[t3.key] ?? 0;
      ex = Math.min(ex, e3), eg = Math.max(eg, e3);
    }
    let ey = Number.isFinite(ex) ? E(ex, eg) : null, [e_, ej] = (0, n.useState)(() => ey ?? E(0, 100));
    ey && (ey.min !== e_.min || ey.max !== e_.max) && ej(ey);
    let eb = { min: (0, o.d)(e_.min), max: (0, o.d)(e_.max) }, [ek, ev] = (0, n.useState)(null), [eN, eM] = (0, n.useState)(em);
    eN !== em && (eM(em), ev(null));
    let ew = null === ek || ec ? null : Math.min(ek, es), e$ = null !== ew, eR = (0, n.useRef)(0), [eL, eS] = (0, n.useState)(0), eP = (0, n.useRef)({ w: 0, h: 0 }), eE = (0, n.useRef)(/* @__PURE__ */ new Map()), eT = (0, o.d)(0), eA = (0, o.d)(1), eC = (0, o.d)(0), eO = (0, o.d)(0), eU = (0, u.z)(eC, v), eF = (0, u.z)(eO, v), eD = (0, n.useRef)({ series: t2, hidden: eh });
    (0, n.useLayoutEffect)(() => {
      eD.current = { series: t2, hidden: eh };
    });
    let ez = (0, n.useCallback)(() => {
      let e3 = eR.current;
      if (!e3) return;
      let t3 = eb.min.get(), a3 = eb.max.get() - t3 || 1, r2 = (e4) => 12 + (1 - (e4 - t3) / a3) * (m2 - 12), n2 = eA.get(), i2 = [];
      for (let a4 of eD.current.series) {
        let l4 = eE.current.get(a4.key);
        if (!l4) continue;
        let s3 = l4.presence, c3 = (e4) => r2(t3 + (e4 - t3) * s3), o3 = l4.shape.length ? `M${l4.shape.map(([t4, a5]) => `${(t4 * e3).toFixed(1)},${c3(a5).toFixed(1)}`).join("L")}` : "";
        et.current.get(a4.key)?.setAttribute("d", o3), ea.current.get(a4.key)?.setAttribute("d", o3 ? `${o3}L${e3},${m2}L0,${m2}Z` : "");
        let u3 = en.current.get(a4.key);
        u3 && (u3.style.opacity = String(s3));
        let h2 = er.current.get(a4.key);
        if (h2 && l4.shape.length) {
          let t4 = c3(T(l4.shape, n2));
          h2.setAttribute("cx", (n2 * e3).toFixed(1)), h2.setAttribute("cy", t4.toFixed(1)), s3 > 0.5 && i2.push(t4);
        }
      }
      J.current?.setAttribute("width", String(eT.get() * (e3 + 16)));
      let l3 = Math.round(n2 * e3) + 0.5;
      ee.current?.setAttribute("x1", String(l3)), ee.current?.setAttribute("x2", String(l3));
      let { w: s2, h: c2 } = eP.current, o2 = l3 + 14;
      o2 + s2 > e3 && (o2 = l3 - 14 - s2), eC.set(L(o2, 0, Math.max(0, e3 - s2)));
      let u2 = i2.length ? i2.reduce((e4, t4) => e4 + t4, 0) / i2.length : m2 / 2;
      eO.set(L(u2 - c2 / 2, 0, Math.max(0, m2 - c2)));
    }, [eA, eT, m2, eb.max, eb.min, eC, eO]);
    (0, h.L)(eA, "change", ez), (0, h.L)(eT, "change", ez), (0, h.L)(eb.min, "change", ez), (0, h.L)(eb.max, "change", ez), (0, n.useLayoutEffect)(ez), (0, n.useLayoutEffect)(() => {
      let e3 = q.current, t3 = Q.current;
      if (!e3) return;
      let a3 = () => {
        eR.current = e3.clientWidth, eS(e3.clientWidth), t3 && (eP.current = { w: t3.offsetWidth, h: t3.offsetHeight }), ez();
      };
      if (a3(), "u" < typeof ResizeObserver) return;
      let r2 = new ResizeObserver(a3);
      return r2.observe(e3), t3 && r2.observe(t3), () => r2.disconnect();
    }, [ez]);
    let eI = (0, n.useRef)(null);
    (0, n.useEffect)(() => {
      let e3 = [];
      for (let [t3, a3] of ef) {
        let r2 = eE.current.get(t3);
        if (!r2) {
          eE.current.set(t3, { shape: a3, presence: +!eD.current.hidden.includes(t3), fade: null });
          continue;
        }
        if (!r2.shape.length || !a3.length || K) {
          A(r2, { shape: a3 });
          continue;
        }
        let n2 = [.../* @__PURE__ */ new Set([...C, ...a3.map(([e4]) => e4)])].sort((e4, t4) => e4 - t4);
        e3.push({ track: r2, xs: n2, from: n2.map((e4) => T(r2.shape, e4)), to: n2.map((e4) => T(a3, e4)), target: a3 });
      }
      return (eI.current?.stop(), e3.length) ? (eI.current = (0, d.i)(0, 1, { ...b, restDelta: 5e-4, onUpdate: (t3) => {
        for (let a3 of e3) A(a3.track, { shape: a3.xs.map((e4, r2) => [e4, a3.from[r2] + (a3.to[r2] - a3.from[r2]) * t3]) });
        ez();
      }, onComplete: () => {
        for (let t3 of e3) A(t3.track, { shape: t3.target });
        ez();
      } }), () => eI.current?.stop()) : void ez();
    }, [ez, K, ef]);
    let eY = eh.join("|");
    (0, n.useEffect)(() => {
      for (let [e3, t3] of eE.current) {
        let a3 = +!eh.includes(e3);
        if (t3.presence !== a3) {
          if (t3.fade?.stop(), K) {
            A(t3, { presence: a3 });
            continue;
          }
          A(t3, { fade: (0, d.i)(t3.presence, a3, { ...b, onUpdate: (e4) => {
            A(t3, { presence: e4 }), ez();
          } }) });
        }
      }
      ez();
    }, [eY, ez, K]), (0, n.useEffect)(() => {
      if (K) {
        eb.min.jump(e_.min), eb.max.jump(e_.max);
        return;
      }
      let e3 = [(0, d.i)(eb.min, e_.min, b), (0, d.i)(eb.max, e_.max, b)];
      return () => e3.forEach((e4) => e4.stop());
    }, [K, eb.max, eb.min, e_]), (0, n.useEffect)(() => {
      if (ec) return;
      if (K) return void eT.jump(1);
      if (!ei || eT.get() >= 1) return;
      let e3 = (0, d.i)(eT, 1, N);
      return () => e3.stop();
    }, [eT, ec, ei, K]);
    let eH = (0, n.useRef)(false);
    (0, n.useEffect)(() => {
      if (null === ew) {
        eH.current = false;
        return;
      }
      let e3 = es > 0 ? ew / es : 0.5;
      if ((K || !eH.current) && (eA.jump(e3), eU.jump(eC.get()), eF.jump(eO.get())), eH.current = true, K) return;
      let t3 = (0, d.i)(eA, e3, k);
      return () => t3.stop();
    }, [eA, ew, es, K, eU, eF, eC, eO]);
    let eW = (0, n.useRef)(U2);
    (0, n.useLayoutEffect)(() => {
      eW.current = U2;
    }), (0, n.useEffect)(() => {
      eW.current?.(ew, null === ew ? null : e2[ew] ?? null);
    }, [ew]);
    let eX = (e3) => {
      let t3 = q.current?.getBoundingClientRect();
      return !t3?.width || es < 1 ? Math.max(0, es) : L(Math.round((e3 - t3.left) / t3.width * es), 0, es);
    }, eV = (e3, t3) => `${f2 ? f2(e3, t3) : $.format(e3)}${l2 ? ` ${l2}` : ""}`, eB = null === ew ? null : e2[ew], eG = eB ? `${eB.label}: ${ed.map((e3) => `${e3.label} ${eV(eB.values[e3.key] ?? 0, e3)}`).join(", ")}` : ec ? Y : `${ed.length} of ${t2.length} series shown`, eK = ec ? `${a2}. ${Y}.` : `${a2}, ${e2[0].label} to ${e2[es].label}. ${ed.map((t3) => `${t3.label}, latest ${eV(e2[es].values[t3.key] ?? 0, t3)}`).join(". ")}.`, eZ = (function(e3, t3) {
      let a3 = e3.flatMap((e4, t4) => e4.axisLabel ? [t4] : []);
      if (!t3 || !a3.length) return [];
      let r2 = Math.max(2, Math.floor(t3 / 76)), n2 = Math.ceil(a3.length / r2);
      return a3.reverse().filter((e4, t4) => t4 % n2 == 0).reverse();
    })(e2, eL), eq = !ec && 0 === ed.length, eQ = K ? eC : eU, eJ = K ? eO : eF;
    return (0, r.jsxs)("figure", { ref: Z, className: [x().figure, B].filter(Boolean).join(" "), "aria-label": a2, "aria-busy": I || void 0, children: [ep && (0, r.jsx)("div", { className: x().legend, role: "group", "aria-label": `${a2} series`, children: t2.map((e3, t3) => (0, r.jsxs)("button", { type: "button", className: x().toggle, "aria-pressed": !eh.includes(e3.key), onClick: () => {
      var t4;
      let a3;
      return t4 = e3.key, a3 = eh.includes(t4) ? eh.filter((e4) => e4 !== t4) : [...eh, t4], void (void 0 === j2 && eu(a3), P2?.(a3));
    }, style: { "--series": S(e3, t3) }, children: [(0, r.jsx)("span", { className: x().swatch, "data-dashed": e3.dashed || void 0, "aria-hidden": "true" }), (0, r.jsx)("span", { className: x().toggleLabel, children: e3.label })] }, e3.key)) }), (0, r.jsxs)("div", { className: x().chart, "data-scrubbing": e$ || void 0, "data-loading": I || void 0, children: [(0, r.jsxs)("div", { ref: q, className: x().plot, style: { height: m2 }, role: "slider", tabIndex: ec ? -1 : 0, "aria-label": `${a2}, explore by ${W.toLowerCase()}`, "aria-orientation": "horizontal", "aria-valuemin": 1, "aria-valuemax": Math.max(1, e2.length), "aria-valuenow": (ew ?? es) + 1, "aria-valuetext": eG, onPointerDown: (e3) => {
      ec || ("mouse" !== e3.pointerType && e3.currentTarget.setPointerCapture?.(e3.pointerId), ev(eX(e3.clientX)));
    }, onPointerMove: (e3) => {
      !ec && ("mouse" === e3.pointerType || e3.buttons) && ev(eX(e3.clientX));
    }, onPointerUp: (e3) => {
      "mouse" !== e3.pointerType && ev(null);
    }, onPointerCancel: () => ev(null), onPointerLeave: (e3) => {
      "mouse" === e3.pointerType && ev(null);
    }, onKeyDown: (t3) => {
      if ("Escape" === t3.key && e$) {
        t3.preventDefault(), ev(null);
        return;
      }
      let a3 = ew ?? es + 1, r2 = Math.max(1, Math.round(e2.length / 6)), n2 = { ArrowLeft: a3 - 1, ArrowDown: a3 - 1, ArrowRight: null === ew ? es : a3 + 1, ArrowUp: null === ew ? es : a3 + 1, PageDown: a3 - r2, PageUp: a3 + r2, Home: 0, End: es }[t3.key];
      void 0 === n2 || ec || (t3.preventDefault(), ev(L(n2, 0, es)));
    }, onBlur: () => ev(null), onFocus: (e3) => {
      e3.currentTarget.matches(":focus-visible") && !ec && ev((e4) => e4 ?? es);
    }, children: [(0, r.jsxs)("svg", { className: x().svg, width: "100%", height: m2, "aria-hidden": "true", focusable: "false", children: [(0, r.jsx)("defs", { children: (0, r.jsx)("clipPath", { id: `${el}-draw`, clipPathUnits: "userSpaceOnUse", children: (0, r.jsx)("rect", { ref: J, x: -8, y: -16, width: 0, height: m2 + 32 }) }) }), (0, r.jsx)(p.N, { initial: false, children: e_.ticks.slice(1).map((e3) => (0, r.jsx)(F, { value: e3, scale: eb, height: m2 }, e3)) }), (0, r.jsx)("line", { className: x().baseline, x1: 0, x2: "100%", y1: m2 - 0.5, y2: m2 - 0.5 }), (0, r.jsx)("line", { ref: ee, className: x().crosshair, y1: 8, y2: m2 }), (0, r.jsx)("g", { className: x().series, clipPath: `url(#${el}-draw)`, children: t2.map((e3, t3) => (0, r.jsxs)("g", { ref: (t4) => {
      t4 ? en.current.set(e3.key, t4) : en.current.delete(e3.key);
    }, style: { "--series": S(e3, t3) }, children: [(e3.area ?? 0 === t3) && (0, r.jsx)("path", { ref: (t4) => {
      t4 ? ea.current.set(e3.key, t4) : ea.current.delete(e3.key);
    }, className: x().area }), (0, r.jsx)("path", { ref: (t4) => {
      t4 ? et.current.set(e3.key, t4) : et.current.delete(e3.key);
    }, className: x().line, "data-dashed": e3.dashed || void 0 })] }, e3.key)) }), t2.map((e3, t3) => (0, r.jsx)("circle", { ref: (t4) => {
      t4 ? er.current.set(e3.key, t4) : er.current.delete(e3.key);
    }, className: x().dot, r: 4, "data-hidden": eh.includes(e3.key) || void 0, style: { "--series": S(e3, t3) } }, e3.key))] }), (0, r.jsxs)(s.PY1.div, { ref: Q, className: x().tooltip, style: { x: eQ, y: eJ }, "aria-hidden": "true", children: [(0, r.jsx)("p", { className: x().tipTitle, children: (eB ?? e2[es])?.label ?? "" }), ed.map((a3) => (0, r.jsxs)("p", { className: x().tipRow, style: { "--series": S(a3, t2.indexOf(a3)) }, children: [(0, r.jsx)("span", { className: x().tipSwatch, "data-dashed": a3.dashed || void 0 }), (0, r.jsx)("span", { className: x().tipName, children: a3.label }), (0, r.jsx)("span", { className: x().tipValue, children: eV((eB ?? e2[es])?.values[a3.key] ?? 0, a3) })] }, a3.key))] }), (0, r.jsxs)(p.N, { initial: false, children: [(ec || eq) && !I && (0, r.jsx)(s.PY1.p, { className: x().message, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0, transition: M }, children: ec ? Y : "Choose a series to show" }, ec ? "empty" : "hidden"), I && ec && (0, r.jsx)(s.PY1.span, { className: x().skeleton, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0, transition: M }, "aria-hidden": "true" }, "skeleton")] })] }), (0, r.jsx)("div", { className: x().gutter, "aria-hidden": "true", children: (0, r.jsx)(p.N, { initial: false, children: e_.ticks.map((e3) => (0, r.jsx)(D, { value: e3, scale: eb, height: m2, format: g2 }, e3)) }) }), (0, r.jsx)("div", { className: x().axis, "aria-hidden": "true", children: (0, r.jsx)(p.N, { initial: false, children: eZ.map((t3) => {
      let a3 = es > 0 ? t3 / es : 0.5;
      return (0, r.jsx)(s.PY1.span, { className: x().axisLabel, style: { left: `${100 * a3}%`, translateX: `${-(100 * a3)}%` }, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0, transition: M }, transition: { duration: y.standard, ease: [..._.standard] }, children: e2[t3].axisLabel }, `${e2[t3].key}:${e2[t3].axisLabel}`);
    }) }) })] }), (0, r.jsx)("p", { className: x().srOnly, children: eK }), !ec && (0, r.jsx)("div", { className: x().srOnly, children: (0, r.jsxs)("table", { children: [(0, r.jsx)("caption", { children: a2 }), (0, r.jsx)("thead", { children: (0, r.jsxs)("tr", { children: [(0, r.jsx)("th", { scope: "col", children: W }), t2.map((e3) => (0, r.jsx)("th", { scope: "col", children: e3.label }, e3.key))] }) }), (0, r.jsx)("tbody", { children: e2.map((e3) => (0, r.jsxs)("tr", { children: [(0, r.jsx)("th", { scope: "row", children: e3.label }), t2.map((t3) => (0, r.jsx)("td", { children: eV(e3.values[t3.key] ?? 0, t3) }, t3.key))] }, e3.key)) })] }) }), (0, r.jsx)("p", { className: x().srOnly, "aria-live": "polite", "aria-atomic": "true", children: I ? "Loading" : "" })] });
  }
}

__m(__module,__exports,__require);
}