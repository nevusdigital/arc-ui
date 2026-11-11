function(__module,__exports,__require){
"use strict";
function __m(e, t, l) {
  "use strict";
  l.r(t), l.d(t, { RidgelineDemo: () => z, default: () => W });
  var i = l(95155), r = l(12115), n = l(18310), s = l(61792), a = l(92171), o = l(28245), d = l(22535), u = l(25354), c = l(7770), h = l(55886), p = l.n(h);
  let { spring: m } = c.T, f = ({ visualDuration: e2, bounce: t2 }, l2 = 5e-4) => {
    let i2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: i2 * i2, damping: 2 * (1 - t2) * i2, restDelta: l2, restSpeed: 2 * l2 };
  }, g = f({ visualDuration: 0.7, bounce: 0.08 }), x = f({ visualDuration: 1, bounce: 0 }), _ = f(m.snappy, 0.01), v = { stiffness: _.stiffness, damping: _.damping, restDelta: 0.01 }, y = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }), b = new Intl.NumberFormat("en-US", { style: "percent", maximumFractionDigits: 0 }), j = (e2, t2, l2) => Math.min(l2, Math.max(t2, e2)), M = (e2, t2, l2) => e2 + (t2 - e2) * l2;
  function w(e2, t2) {
    if (!e2.length) return 0;
    let l2 = (e2.length - 1) * t2, i2 = Math.floor(l2), r2 = Math.ceil(l2);
    return e2[i2] + (e2[r2] - e2[i2]) * (l2 - i2);
  }
  function N(e2, t2) {
    let l2 = e2 / Math.max(1, t2) || 1, i2 = Math.pow(10, Math.floor(Math.log10(l2))), r2 = l2 / i2;
    return (r2 >= 5 ? 5 : r2 >= 2 ? 2 : 1) * i2;
  }
  let L = (e2, t2) => {
    let { xs: l2, ys: i2 } = e2;
    if (t2 <= l2[0] || t2 >= l2[l2.length - 1]) return 0;
    let r2 = 1;
    for (; r2 < l2.length - 1 && l2[r2] < t2; ) r2++;
    let n2 = (t2 - l2[r2 - 1]) / (l2[r2] - l2[r2 - 1] || 1);
    return M(i2[r2 - 1], i2[r2], n2);
  }, k = () => () => {
  };
  function q({ series: e2, label: t2, unit: l2 = "", formatValue: c2, domain: h2, overlap: m2 = 2.4, rowHeight: f2 = 30, bandwidth: _2, tint: A2 = true, active: F2, defaultActive: $2 = null, onActiveChange: R2, emptyLabel: D2 = "No data yet", ref: S2, className: E2 }) {
    let I2, O2, z2 = (I2 = (0, r.useSyncExternalStore)(k, () => true, () => false), !!(0, n.I)() && I2), W2 = (0, r.useRef)(null), P = (0, r.useRef)(null), T = (0, r.useRef)(null), C = (0, r.useRef)(/* @__PURE__ */ new Map()), H = (0, r.useRef)(/* @__PURE__ */ new Map()), Y = (0, r.useRef)(/* @__PURE__ */ new Map()), B = (0, r.useRef)({ fill: null, band: null, line: null, median: null, group: null }), K = (0, r.useRef)(/* @__PURE__ */ new Map()), U = (0, r.useRef)(null);
    (0, r.useImperativeHandle)(S2, () => W2.current);
    let V = (0, s.W)(W2, { once: true, amount: 0.3 }), X = (e3) => c2 ? c2(e3) : `${y.format(e3).replace("-", "\u2212")}${l2}`, [J, Z] = (0, r.useState)(0);
    (0, r.useLayoutEffect)(() => {
      let e3 = P.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => Z(e3.clientWidth));
      return t3.observe(e3), Z(e3.clientWidth), () => t3.disconnect();
    }, []);
    let G = JSON.stringify([e2, h2, _2]), Q = (0, r.useMemo)(() => {
      let t3 = e2.map((e3) => {
        let t4;
        return { sorted: t4 = e3.values.filter(Number.isFinite).sort((e4, t5) => e4 - t5), n: t4.length, min: t4[0] ?? 0, max: t4[t4.length - 1] ?? 0, q1: w(t4, 0.25), median: w(t4, 0.5), q3: w(t4, 0.75) };
      }), l3 = t3.map((e3) => _2 ?? (function(e4) {
        if (e4.n < 2) return 1;
        let t4 = e4.sorted.reduce((e5, t5) => e5 + t5, 0) / e4.n, l4 = Math.sqrt(e4.sorted.reduce((e5, l5) => e5 + (l5 - t4) ** 2, 0) / (e4.n - 1));
        return Math.max(1e-6, 0.9 * (Math.min(l4, (e4.q3 - e4.q1) / 1.34 || l4) || 1) * Math.pow(e4.n, -0.2));
      })(e3)), i2 = t3.map((e3, t4) => ({ entry: e3, room: 2.5 * l3[t4] })).filter(({ entry: e3 }) => e3.n), r2 = h2?.[0] ?? Math.min(...i2.map(({ entry: e3, room: t4 }) => e3.min - t4)), n2 = h2?.[1] ?? Math.max(...i2.map(({ entry: e3, room: t4 }) => e3.max + t4));
      if (Number.isFinite(r2) && Number.isFinite(n2) && r2 !== n2 || (r2 = 0, n2 = 1), !h2) {
        let e3 = N(n2 - r2, 5);
        r2 = Math.floor(r2 / e3) * e3, n2 = Math.ceil(n2 / e3) * e3;
      }
      let s2 = t3.map((e3, t4) => e3.n ? (function(e4, t5, l4, i3) {
        let r3 = [], n3 = [], s3 = 1 / (Math.max(1, e4.n) * i3 * Math.sqrt(2 * Math.PI));
        for (let a3 = 0; a3 < 96; a3++) {
          let o3 = t5 + (l4 - t5) * a3 / 95, d2 = 0;
          for (let t6 of e4.sorted) {
            let e5 = (o3 - t6) / i3;
            e5 > -5 && e5 < 5 && (d2 += Math.exp(-0.5 * e5 * e5));
          }
          r3.push(o3), n3.push(d2 * s3);
        }
        return { xs: r3, ys: n3 };
      })(e3, r2, n2, l3[t4]) : { xs: Array.from({ length: 96 }, (e4, t5) => r2 + (n2 - r2) * t5 / 95), ys: Array(96).fill(0) }), a2 = Math.max(1e-9, ...s2.flatMap((e3) => e3.ys)), o2 = new Map(e2.map((e3, l4) => {
        let i3 = s2[l4], r3 = t3[l4];
        return [e3.id, { xs: i3.xs, ys: i3.ys.map((e4) => e4 / a2), row: l4, q1: r3.q1, median: r3.median, q3: r3.q3 }];
      }));
      return { stats: new Map(e2.map((e3, l4) => [e3.id, t3[l4]])), shapes: o2, lo: r2, hi: n2 };
    }, [G]), [ee, et] = (0, r.useState)($2), el = void 0 !== F2 ? F2 : ee, ei = (e3) => {
      void 0 === F2 && et(e3), e3 !== el && R2?.(e3);
    }, [er, en] = (0, r.useState)(null), es = J > 0 && J < 420 ? 36 : 52, ea = Math.ceil((m2 - 1) * f2) + 6 + 8, eo = ea + e2.length * f2 + 28, ed = Math.max(40, J - es - 4), eu = (e3) => ea + (e3 + 1) * f2, ec = (0, r.useRef)({ shapes: /* @__PURE__ */ new Map(), lo: 0, hi: 1 }), eh = (0, r.useRef)({ gutter: es, plotWidth: ed, rowHeight: f2, overlap: m2, top: ea, current: el });
    (0, r.useLayoutEffect)(() => {
      eh.current = { gutter: es, plotWidth: ed, rowHeight: f2, overlap: m2, top: ea, current: el };
    });
    let ep = (e3) => {
      let t3 = ec.current, l3 = eh.current;
      return l3.gutter + (e3 - t3.lo) / (t3.hi - t3.lo || 1) * l3.plotWidth;
    }, em = () => {
      let e3 = ec.current, t3 = eh.current, l3 = (l4) => t3.gutter + (l4 - e3.lo) / (e3.hi - e3.lo || 1) * t3.plotWidth, i2 = t3.rowHeight * t3.overlap, r2 = (e4, r3, n3 = -1 / 0, s3 = 1 / 0) => {
        let a2 = t3.top + (e4.row + 1) * t3.rowHeight, o2 = [], d2 = (e5, t4) => o2.push(`${l3(e5).toFixed(2)},${(a2 - t4 * i2).toFixed(2)}`);
        if (n3 > -1 / 0 && d2(n3, L(e4, n3)), e4.xs.forEach((t4, l4) => {
          t4 > n3 && t4 < s3 && d2(t4, e4.ys[l4]);
        }), s3 < 1 / 0 && d2(s3, L(e4, s3)), !o2.length) return "";
        let u2 = n3 > -1 / 0 ? n3 : e4.xs[0], c3 = s3 < 1 / 0 ? s3 : e4.xs[e4.xs.length - 1];
        return r3 ? `M${l3(u2).toFixed(2)},${a2}L${o2.join("L")}L${l3(c3).toFixed(2)},${a2}Z` : `M${o2.join("L")}`;
      };
      for (let [n3, s3] of e3.shapes) {
        let e4 = C.current.get(n3), a2 = H.current.get(n3), o2 = Y.current.get(n3);
        if (e4?.setAttribute("d", r2(s3, true)), a2?.setAttribute("d", r2(s3, false)), o2) {
          let e5 = l3(s3.median), r3 = t3.top + (s3.row + 1) * t3.rowHeight;
          o2.setAttribute("x1", e5.toFixed(2)), o2.setAttribute("x2", e5.toFixed(2)), o2.setAttribute("y1", String(r3)), o2.setAttribute("y2", (r3 - L(s3, s3.median) * i2).toFixed(2));
        }
      }
      let n2 = t3.current ? e3.shapes.get(t3.current) : void 0, s2 = B.current;
      if (n2 && s2.fill && s2.line && s2.band && s2.median) {
        s2.fill.setAttribute("d", r2(n2, true)), s2.line.setAttribute("d", r2(n2, false)), s2.band.setAttribute("d", r2(n2, true, n2.q1, n2.q3));
        let e4 = l3(n2.median), a2 = t3.top + (n2.row + 1) * t3.rowHeight;
        s2.median.setAttribute("x1", e4.toFixed(2)), s2.median.setAttribute("x2", e4.toFixed(2)), s2.median.setAttribute("y1", String(a2)), s2.median.setAttribute("y2", (a2 - L(n2, n2.median) * i2).toFixed(2));
      }
      for (let [e4, t4] of K.current) t4.style.transform = `translate3d(${l3(e4).toFixed(2)}px, 0, 0)`;
    }, ef = (0, r.useRef)(em);
    (0, r.useLayoutEffect)(() => {
      ef.current = em;
    });
    let eg = V || z2;
    (0, r.useEffect)(() => {
      if (!eg) return;
      let e3 = ec.current, t3 = 0 === e3.shapes.size, l3 = /* @__PURE__ */ new Map();
      for (let [t4, i3] of Q.shapes) {
        let r3 = e3.shapes.get(t4);
        l3.set(t4, r3 ? { ...r3, xs: [...r3.xs], ys: [...r3.ys] } : { ...i3, ys: i3.ys.map(() => 0), q1: i3.median, q3: i3.median });
      }
      let i2 = t3 ? Q.lo : e3.lo, r2 = t3 ? Q.hi : e3.hi, n2 = () => {
        e3.shapes = new Map([...Q.shapes].map(([e4, t4]) => [e4, { ...t4 }])), e3.lo = Q.lo, e3.hi = Q.hi, ef.current();
      };
      if (z2) return void n2();
      e3.shapes = new Map([...l3].map(([e4, t4]) => [e4, { ...t4, xs: [...t4.xs], ys: [...t4.ys] }]));
      let s2 = (0, a.i)(0, 1, { ...t3 ? x : g, onUpdate: (n3) => {
        for (let [s3, a2] of (e3.lo = M(i2, Q.lo, n3), e3.hi = M(r2, Q.hi, n3), Q.shapes)) {
          let i3 = l3.get(s3), r3 = e3.shapes.get(s3), o2 = t3 ? j((n3 - 0.025 * a2.row) / (1 - Math.min(0.5, 0.025 * Q.shapes.size)), 0, 1) : n3;
          for (let e4 = 0; e4 < 96; e4++) r3.xs[e4] = M(i3.xs[e4], a2.xs[e4], o2), r3.ys[e4] = M(i3.ys[e4], a2.ys[e4], o2);
          r3.row = M(i3.row, a2.row, o2), r3.q1 = M(i3.q1, a2.q1, o2), r3.median = M(i3.median, a2.median, o2), r3.q3 = M(i3.q3, a2.q3, o2);
        }
        ef.current();
      }, onComplete: n2 });
      return () => s2.stop();
    }, [eg, Q, z2]), (0, r.useLayoutEffect)(() => {
      ef.current();
    });
    let ex = Math.max(2, Math.floor(ed / 72)), e_ = N(Q.hi - Q.lo, ex), ev = [];
    for (let e3 = Math.ceil(Q.lo / e_) * e_; e3 <= Q.hi + 1e-9; e3 += e_) ev.push(Math.round(1e6 * e3) / 1e6 || 0);
    let ey = el ? Q.stats.get(el) : void 0, eb = el ? e2.find((e3) => e3.id === el) : void 0, ej = er && ey ? { value: er.value, below: ey.n ? ey.sorted.filter((e3) => e3 <= er.value).length / ey.n : 0 } : null, [eM, ew] = (0, r.useState)(null);
    el && (eM?.id !== el || eM.value !== (ej?.value ?? null)) && ew({ id: el, value: ej?.value ?? null });
    let eN = eM ? e2.find((e3) => e3.id === eM.id) : void 0, eL = eM ? Q.stats.get(eM.id) : void 0, ek = eM && null !== eM.value && eL?.n ? eL.sorted.filter((e3) => e3 <= eM.value).length / eL.n : 0, eq = (0, o.d)(0), eA = (0, o.d)(0), eF = (0, d.z)(eq, v), e$ = (0, d.z)(eA, v), eR = (0, r.useRef)(false);
    (0, r.useLayoutEffect)(() => {
      let e3 = T.current, t3 = el ? Q.shapes.get(el) : void 0;
      if (U.current && (U.current.style.transform = `translate3d(${ej ? ep(ej.value).toFixed(2) : 0}px, 0, 0)`), !e3 || !t3 || !J) {
        eR.current = false;
        return;
      }
      let l3 = e3.offsetWidth, i2 = e3.offsetHeight, r2 = ej ? ep(ej.value) : ep(t3.median), n2 = er?.pointerY ?? eu(t3.row) - L(t3, t3.median) * f2 * m2 - 6, s2 = r2 + 14;
      s2 + l3 > J && (s2 = r2 - 14 - l3);
      let a2 = n2 - i2 - 14;
      a2 < 0 && (a2 = n2 + 14), eq.set(j(s2, 0, Math.max(0, J - l3))), eA.set(j(a2, 0, Math.max(0, eo - i2))), (!eR.current || z2) && (eF.jump(eq.get()), e$.jump(eA.get())), eR.current = true;
    });
    let eD = (t3) => {
      let l3 = t3.currentTarget.getBoundingClientRect(), i2 = t3.clientX - l3.left, r2 = t3.clientY - l3.top;
      if (i2 < es - 8 || r2 > eo - 28 + 4) {
        "mouse" === t3.pointerType && (ei(null), en(null));
        return;
      }
      let n2 = ((t4, l4) => {
        let i3, r3 = (i3 = ec.current).lo + j((t4 - es) / ed, 0, 1) * (i3.hi - i3.lo), n3 = f2 * m2, s2 = null, a2 = null;
        for (let [e3, t5] of ec.current.shapes) {
          let i4 = eu(t5.row), o2 = L(t5, r3) * n3;
          l4 <= i4 + 2 && l4 >= i4 - o2 - 4 && (!s2 || t5.row > s2.row) && (s2 = t5, a2 = e3);
        }
        if (!a2) {
          let t5 = j(Math.floor((l4 - ea) / f2), 0, e2.length - 1);
          a2 = e2[t5]?.id ?? null;
        }
        return { id: a2, value: r3 };
      })(i2, r2);
      ei(n2.id), en({ value: n2.value, pointerY: r2 });
    }, eS = !e2.length || e2.every((e3) => !e3.values.length), eE = (e3) => `color-mix(in oklab, var(--series-1) ${Math.round(38 + 62 * j(e3, 0, 1))}%, var(--surface))`, eI = (e3) => A2 ? eE((e3 - Q.lo) / (Q.hi - Q.lo || 1)) : "var(--series-1)";
    return (0, i.jsxs)("figure", { ref: W2, className: [p().figure, E2].filter(Boolean).join(" "), "aria-label": t2, children: [(0, i.jsxs)("div", { ref: P, className: p().plot, style: { height: eo }, "data-active": !!el || void 0, "data-cursor": !!ej || void 0, role: "group", tabIndex: eS ? -1 : 0, "aria-roledescription": "ridgeline chart", "aria-label": `${t2}. Up and down arrows choose a ridge, left and right arrows move along the values.`, onPointerMove: eD, onPointerDown: eD, onPointerLeave: (e3) => {
      "mouse" === e3.pointerType && (ei(null), en(null));
    }, onKeyDown: (t3) => {
      let l3 = el ? e2.findIndex((e3) => e3.id === el) : -1, i2 = (e3) => e3 ? Q.stats.get(e3) : void 0, r2 = (l4) => {
        t3.preventDefault();
        let r3 = e2[j(l4, 0, e2.length - 1)];
        r3 && (ei(r3.id), en({ value: er?.value ?? i2(r3.id)?.median ?? Q.lo, pointerY: null }));
      }, n2 = (e3) => {
        (t3.preventDefault(), el) ? en({ value: j((Math.round((er?.value ?? i2(el)?.median ?? Q.lo) / e_) + e3) * e_, Q.lo, Q.hi), pointerY: null }) : r2(0);
      };
      "ArrowDown" === t3.key ? r2(l3 + 1) : "ArrowUp" === t3.key ? r2(l3 < 0 ? 0 : l3 - 1) : "Home" === t3.key ? r2(0) : "End" === t3.key ? r2(e2.length - 1) : "ArrowRight" === t3.key ? n2(1) : "ArrowLeft" === t3.key ? n2(-1) : "Escape" === t3.key && el && (t3.preventDefault(), ei(null), en(null));
    }, onBlur: () => {
      ei(null), en(null);
    }, children: [(0, i.jsx)("div", { className: p().ticks, "aria-hidden": "true", style: { height: eo - 28 + 22 }, children: ev.map((e3) => (0, i.jsx)("div", { ref: (t3) => {
      t3 ? K.current.set(e3, t3) : K.current.delete(e3);
    }, className: p().tick, style: { top: ea - 0.5 * f2 }, children: (0, i.jsx)("span", { className: p().tickLabel, children: X(e3) }) }, e3)) }), (0, i.jsx)("div", { ref: U, className: p().crosshair, style: { top: ea - 0.5 * f2, height: eo - 28 - ea + 0.5 * f2 }, "aria-hidden": "true" }), (0, i.jsxs)("svg", { className: p().svg, width: J || void 0, height: eo, viewBox: `0 0 ${Math.max(1, J)} ${eo}`, "aria-hidden": "true", focusable: "false", children: [e2.map((e3) => (0, i.jsxs)("g", { className: p().ridge, "data-dim": null !== el && el !== e3.id || void 0, "data-lifted": el === e3.id || void 0, style: { "--ridge": eI(Q.stats.get(e3.id)?.median ?? Q.lo) }, children: [(0, i.jsx)("path", { ref: (t3) => {
      t3 ? C.current.set(e3.id, t3) : C.current.delete(e3.id);
    }, className: p().fill }), (0, i.jsx)("line", { ref: (t3) => {
      t3 ? Y.current.set(e3.id, t3) : Y.current.delete(e3.id);
    }, className: p().median }), (0, i.jsx)("path", { ref: (t3) => {
      t3 ? H.current.set(e3.id, t3) : H.current.delete(e3.id);
    }, className: p().line })] }, e3.id)), (0, i.jsxs)("g", { ref: (e3) => {
      B.current.group = e3;
    }, className: p().lens, "data-on": !!el || void 0, style: eL ? { "--ridge": eI(eL.median) } : void 0, children: [(0, i.jsx)("path", { ref: (e3) => {
      B.current.fill = e3;
    }, className: p().lensFill }), (0, i.jsx)("path", { ref: (e3) => {
      B.current.band = e3;
    }, className: p().lensBand }), (0, i.jsx)("line", { ref: (e3) => {
      B.current.median = e3;
    }, className: p().lensMedian }), (0, i.jsx)("path", { ref: (e3) => {
      B.current.line = e3;
    }, className: p().lensLine })] })] }), (0, i.jsx)("div", { className: p().labels, "aria-hidden": "true", children: e2.map((e3, t3) => (0, i.jsx)("span", { className: p().rowLabel, "data-active": el === e3.id || void 0, style: { top: eu(t3) - 18, width: es - 10 }, children: e3.label }, e3.id)) }), eS && (0, i.jsx)("p", { className: p().message, children: D2 }), (0, i.jsx)(u.PY1.div, { ref: T, className: p().tooltip, style: { x: z2 ? eq : eF, y: z2 ? eA : e$ }, "aria-hidden": "true", children: eN && eL && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("p", { className: p().tipTitle, children: eN.label }), (0, i.jsxs)("p", { className: p().tipValue, children: [(0, i.jsx)("span", { className: p().tipKey, children: "Median" }), (0, i.jsx)("span", { children: X(eL.median) })] }), (0, i.jsxs)("p", { className: p().tipRow, children: [(0, i.jsx)("span", { className: p().tipKey, children: "Middle half" }), (0, i.jsxs)("span", { children: [X(eL.q1), " to ", X(eL.q3)] })] }), (0, i.jsxs)("p", { className: p().tipRow, children: [(0, i.jsx)("span", { className: p().tipKey, children: "Range" }), (0, i.jsxs)("span", { children: [X(eL.min), " to ", X(eL.max)] })] }), eM?.value != null && (0, i.jsxs)("p", { className: p().tipNote, children: [b.format(ek), " at or below ", X(eM.value)] })] }) })] }), A2 && !eS && (0, i.jsxs)("div", { className: p().scale, "aria-hidden": "true", children: [(0, i.jsx)("span", { className: p().scaleLabel, children: "Median" }), (0, i.jsx)("span", { children: X(Q.lo) }), (0, i.jsx)("span", { className: p().steps, children: [0, 0.25, 0.5, 0.75, 1].map((e3) => (0, i.jsx)("span", { className: p().step, style: { "--ridge": eE(e3) } }, e3)) }), (0, i.jsx)("span", { children: X(Q.hi) })] }), (0, i.jsx)("p", { className: p().srOnly, "aria-live": "polite", "aria-atomic": "true", children: eb ? `${O2 = Q.stats.get(eb.id), `${eb.label}: median ${X(O2.median)}, middle half ${X(O2.q1)} to ${X(O2.q3)}, range ${X(O2.min)} to ${X(O2.max)}, ${O2.n} values`}${ej ? `. ${b.format(ej.below)} at or below ${X(ej.value)}` : ""}` : "" }), !eS && (0, i.jsx)("div", { className: p().srOnly, children: (0, i.jsxs)("table", { children: [(0, i.jsx)("caption", { children: t2 }), (0, i.jsx)("thead", { children: (0, i.jsxs)("tr", { children: [(0, i.jsx)("th", { scope: "col", children: "Series" }), (0, i.jsx)("th", { scope: "col", children: "Median" }), (0, i.jsx)("th", { scope: "col", children: "First quartile" }), (0, i.jsx)("th", { scope: "col", children: "Third quartile" }), (0, i.jsx)("th", { scope: "col", children: "Lowest" }), (0, i.jsx)("th", { scope: "col", children: "Highest" }), (0, i.jsx)("th", { scope: "col", children: "Count" })] }) }), (0, i.jsx)("tbody", { children: e2.map((e3) => {
      let t3 = Q.stats.get(e3.id);
      return (0, i.jsxs)("tr", { children: [(0, i.jsx)("th", { scope: "row", children: e3.label }), (0, i.jsx)("td", { children: X(t3.median) }), (0, i.jsx)("td", { children: X(t3.q1) }), (0, i.jsx)("td", { children: X(t3.q3) }), (0, i.jsx)("td", { children: X(t3.min) }), (0, i.jsx)("td", { children: X(t3.max) }), (0, i.jsx)("td", { children: t3.n })] }, e3.id);
    }) })] }) })] });
  }
  var A = l(66558), F = l(97821), $ = l.n(F);
  let R = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], D = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], S = { zurich: { name: "Zurich", mean: [3.4, 5.6, 10.5, 14.6, 18.8, 22.4, 24.4, 23.9, 19.6, 14.3, 8.2, 4.2], sd: [3.5, 4, 4.2, 4.2, 4, 3.8, 3.5, 3.5, 3.5, 3.5, 3.5, 3.2], snaps: [] }, lisbon: { name: "Lisbon", mean: [14.8, 16.2, 18.4, 19.9, 22.4, 26.1, 28.3, 28.7, 26.9, 22.9, 18.3, 15.4], sd: [1.8, 2, 2.4, 2.7, 3, 3.3, 3.2, 3, 2.8, 2.4, 2, 1.8], snaps: [] }, denver: { name: "Denver", mean: [7.4, 7.9, 12.3, 15.8, 21.3, 27.9, 31.4, 29.9, 25.5, 18.4, 11.4, 6.6], sd: [4.5, 5, 6, 5.5, 4.5, 4, 2.8, 3, 4.5, 5.5, 5, 4.5], snaps: [0, 1, 10, 11] } };
  function E(e2, t2) {
    var l2;
    let i2 = (l2 = t2, () => {
      l2 |= 0;
      let e3 = Math.imul((l2 = l2 + 1831565813 | 0) ^ l2 >>> 15, 1 | l2);
      return (((e3 = e3 + Math.imul(e3 ^ e3 >>> 7, 61 | e3) ^ e3) ^ e3 >>> 14) >>> 0) / 4294967296;
    }), { mean: r2, sd: n2, snaps: s2 } = S[e2], a2 = () => Math.sqrt(-2 * Math.log(1 - i2())) * Math.cos(2 * Math.PI * i2());
    return R.map((e3, t3) => ({ id: e3.toLowerCase(), label: e3, values: Array.from({ length: D[t3] }, () => Math.round((s2.includes(t3) && 0.3 > i2() ? r2[t3] - 7 + 3 * a2() : r2[t3] + 2.5 * !!s2.includes(t3) + a2() * n2[t3]) * 10) / 10) }));
  }
  let I = { zurich: E("zurich", 11), lisbon: E("lisbon", 23), denver: E("denver", 37) }, O = Object.keys(S).map((e2) => ({ value: e2, label: S[e2].name }));
  function z() {
    let e2 = (0, r.useId)(), [t2, l2] = (0, r.useState)("zurich");
    return (0, i.jsxs)("section", { className: $().card, "aria-labelledby": e2, children: [(0, i.jsxs)("div", { className: $().top, children: [(0, i.jsxs)("div", { className: $().heading, children: [(0, i.jsx)("h3", { id: e2, className: $().title, children: "Daily highs" }), (0, i.jsxs)("p", { className: $().meta, children: [S[t2].name, ", 2025"] })] }), (0, i.jsx)(A.A, { label: "City", options: O, value: t2, onValueChange: (e3) => l2(e3) })] }), (0, i.jsx)(q, { series: I[t2], label: `Daily high temperatures in ${S[t2].name}, 2025`, unit: "\xB0", domain: [-10, 40] })] });
  }
  let W = z;
}

__m(__module,__exports,__require);
}