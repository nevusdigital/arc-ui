function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { RevenueExplorer: () => en, default: () => ei });
  var a = r(95155), n = r(12115), i = r(92171), s = r(55809), l = r(18310), o = r(80642), h = r(25354), d = r(28245), c = r(22535), u = r(57700), x = r(9751), p = r(65024), m = r(7770);
  let v = [
    { key: "newMrr", label: "New" },
    { key: "expansion", label: "Expansion" },
    { key: "churn", label: "Churn" }
  ], _ = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ], y = [1.08, 1, 1.12, 1.02, 1, 1.05, 0.9, 0.88, 1.06, 1.1, 1, 0.82], g = (() => {
    var e2;
    let t2 = (e2 = 20260822, () => {
      let t3 = Math.imul((e2 = e2 + 1831565813 | 0) ^ e2 >>> 15, 1 | e2);
      return (((t3 = t3 + Math.imul(t3 ^ t3 >>> 7, 61 | t3) ^ t3) ^ t3 >>> 14) >>> 0) / 4294967296;
    }), r2 = (e3) => 100 * Math.round(e3 / 100), a2 = [], n2 = 486e3;
    for (let e3 = 0; e3 < 48; e3++) {
      let i2 = (e4) => 1 + (t2() - 0.5) * e4, s2 = r2((27e3 + 900 * e3) * y[(8 + e3) % 12] * i2(0.16)), l2 = r2((5400 + 420 * e3) * (e3 >= 37 ? 1.34 : 1) * i2(0.22)), o2 = r2(
        n2 * (0.0205 - 12e-5 * e3 + (29 === e3 ? 0.0105 : 45e-4 * (30 === e3)) + (t2() - 0.5) * 3e-3)
      );
      a2.push({
        newMrr: s2,
        expansion: l2,
        churn: o2,
        start: n2,
        mrr: n2 + s2 + l2 - o2
      }), n2 = a2[e3].mrr;
    }
    return a2;
  })(), f = (e2) => g[Math.min(47, Math.max(0, e2 + 24))];
  function j(e2, t2) {
    let r2 = Math.floor(e2), a2 = e2 - r2;
    return a2 ? f(r2)[t2] * (1 - a2) + f(r2 + 1)[t2] * a2 : f(r2)[t2];
  }
  let w = (e2) => e2.newMrr + e2.expansion - e2.churn, b = (e2) => ({
    m: (e2 + 24 + 8) % 12,
    y: 2022 + Math.floor((e2 + 24 + 8) / 12)
  }), M = (e2) => 0 === b(e2).m, N = (e2) => {
    let { m: t2, y: r2 } = b(e2);
    return `${_[t2]} ${r2}`;
  }, $ = (e2) => {
    let { m: t2, y: r2 } = b(e2);
    return 0 === t2 ? String(r2) : _[t2];
  }, k = (e2, t2, r2) => {
    let a2 = 0;
    for (let n2 = e2; n2 <= t2; n2++) a2 += r2(f(n2));
    return a2;
  };
  function T(e2, t2, r2, a2, n2) {
    let i2 = 0, s2 = 0;
    for (let l3 = Math.max(0, Math.floor(e2)); l3 <= Math.min(23, Math.ceil(t2)); l3++)
      for (let e3 of a2 ? [f(l3), f(l3 - n2)] : [f(l3)])
        i2 = Math.max(i2, (r2[0] ? e3.newMrr : 0) + (r2[1] ? e3.expansion : 0)), s2 = Math.max(s2, r2[2] ? e3.churn : 0);
    if (!i2 && !s2) return [0, 8e4];
    let l2 = (e3) => 500 * Math.round(e3 / 500);
    return [s2 ? -l2(1.2 * s2) : 0, l2(i2 ? 1.1 * i2 : 0.2 * s2)];
  }
  let C = (e2) => {
    let t2 = e2 < 0 ? "\u2212" : "", r2 = Math.abs(e2);
    return r2 >= 1e6 ? `${t2}$${(r2 / 1e6).toFixed(2)}M` : r2 >= 1e3 ? `${t2}$${(r2 / 1e3).toFixed(r2 >= 1e5 || r2 % 1e3 == 0 ? 0 : 1)}k` : `${t2}$${Math.round(r2)}`;
  }, P = (e2) => Math.round(10 * e2) / 10;
  function L(e2, t2 = "M") {
    if (!e2.length) return "";
    let r2 = (function(e3) {
      let t3 = e3.length, r3 = Array(t3).fill(0);
      if (t3 < 2) return r3;
      if (2 === t3)
        return r3.fill((e3[1][1] - e3[0][1]) / (e3[1][0] - e3[0][0] || 1));
      for (let a3 = 1; a3 < t3 - 1; a3++) {
        let t4 = e3[a3][0] - e3[a3 - 1][0], n2 = e3[a3 + 1][0] - e3[a3][0], i2 = (e3[a3][1] - e3[a3 - 1][1]) / t4, s2 = (e3[a3 + 1][1] - e3[a3][1]) / n2;
        r3[a3] = (Math.sign(i2) + Math.sign(s2)) * Math.min(
          Math.abs(i2),
          Math.abs(s2),
          0.5 * Math.abs((i2 * n2 + s2 * t4) / (t4 + n2))
        ) || 0;
      }
      return r3[0] = (3 * (e3[1][1] - e3[0][1]) / (e3[1][0] - e3[0][0]) - r3[1]) / 2, r3[t3 - 1] = (3 * (e3[t3 - 1][1] - e3[t3 - 2][1]) / (e3[t3 - 1][0] - e3[t3 - 2][0]) - r3[t3 - 2]) / 2, r3;
    })(e2), a2 = `${t2}${P(e2[0][0])},${P(e2[0][1])}`;
    for (let t3 = 1; t3 < e2.length; t3++) {
      let n2 = (e2[t3][0] - e2[t3 - 1][0]) / 3;
      a2 += `C${P(e2[t3 - 1][0] + n2)},${P(e2[t3 - 1][1] + n2 * r2[t3 - 1])},${P(e2[t3][0] - n2)},${P(e2[t3][1] - n2 * r2[t3])},${P(e2[t3][0])},${P(e2[t3][1])}`;
    }
    return a2;
  }
  let E = (e2) => L([...e2].reverse(), "L"), Y = (e2) => e2 < 520 ? 172 : 204, S = (e2) => e2 < 560 ? 216 : 256, A = (e2, t2, r2) => Math.min(r2, Math.max(t2, e2));
  var R = r(37374), G = r.n(R);
  let { spring: I, duration: D, ease: O } = m.T, z = [...O.enter], F = { ...I.smooth, visualDuration: 0.26 }, V = { ...I.smooth, visualDuration: D.considered }, X = [
    { label: "3M", months: 3 },
    { label: "6M", months: 6 },
    { label: "12M", months: 12 },
    { label: "All", months: 24 }
  ], H = { lo: 12, hi: 23 }, Z = (e2, t2, r2) => Math.min(r2, Math.max(t2, e2)), K = (e2, t2 = 1.2) => Math.sign(e2) * (1 - 1 / (0.55 * Math.abs(e2) / t2 + 1)) * t2, W = (e2, t2, r2) => `${e2 < 0 ? "\u2212" : "+"}${Math.abs(e2).toFixed(t2)}${r2}`, q = (e2, t2, r2, a2) => 48 + (e2 - t2) / Math.max(1e-6, r2 - t2) * (a2 - 48);
  function B(e2, t2, r2, a2) {
    a2 ? e2.jump(t2) : (e2.get() !== t2 || e2.isAnimating()) && (0, i.i)(e2, t2, r2);
  }
  function J(e2, t2) {
    return (0, s.G)(e2, (e3) => e3[t2]);
  }
  function U({ text: e2, className: t2 }) {
    let r2 = (0, l.I)();
    return (0, a.jsx)("span", {
      className: [G().rise, t2].filter(Boolean).join(" "),
      children: (0, a.jsx)(o.N, {
        mode: "popLayout",
        initial: false,
        children: (0, a.jsx)(
          h.PY1.span,
          {
            initial: r2 ? { opacity: 0 } : { opacity: 0, y: "0.45em" },
            animate: { opacity: 1, y: 0 },
            exit: r2 ? { opacity: 0 } : { opacity: 0, y: "-0.45em" },
            transition: { duration: r2 ? D.instant : D.standard, ease: z },
            children: e2
          },
          e2
        )
      })
    });
  }
  function Q({ value: e2, decimals: t2 = 1, prefix: r2 = "$", suffix: n2 = "" }) {
    return (0, a.jsx)("span", {
      className: G().num,
      children: (0, a.jsx)(p.q, {
        value: e2,
        decimals: t2,
        prefix: r2,
        suffix: n2
      })
    });
  }
  function ee({ text: e2, change: t2, good: r2, context: n2 }) {
    let i2 = (0, l.I)();
    return (0, a.jsxs)("span", {
      className: G().delta,
      "data-tone": r2 ? "good" : "bad",
      children: [
        (0, a.jsx)(h.PY1.span, {
          className: G().deltaIcon,
          initial: false,
          animate: { rotate: t2 >= 0 ? 0 : 90 },
          transition: i2 ? { duration: 0 } : I.snappy,
          children: (0, a.jsx)(x.A, {
            size: 14,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          })
        }),
        (0, a.jsx)(U, { text: e2, className: G().deltaValue }),
        (0, a.jsx)(U, { text: n2, className: G().deltaContext })
      ]
    });
  }
  let et = (e2) => ({
    duration: e2 ? D.instant : D.standard,
    ease: z,
    delay: 0.05 * !e2
  });
  function er({ value: e2, yLo: t2, yHi: r2, height: n2, width: i2, reduce: l2 }) {
    let o2 = (0, s.G)(
      [t2, r2, n2],
      ([t3, r3, a2]) => Math.round(14 + (r3 - e2) / Math.max(1, r3 - t3) * (a2 - 28 - 14))
    ), d2 = (0, s.G)(
      [o2, n2],
      ([e3, t3]) => Z(1 - Math.max(6 - e3, e3 - (t3 - 28) - 2, 0) / 10, 0, 1)
    );
    return (0, a.jsx)(h.PY1.g, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: D.fast } },
      transition: et(l2),
      children: (0, a.jsxs)(h.PY1.g, {
        style: { y: o2, opacity: d2 },
        children: [
          (0, a.jsx)("line", {
            className: 0 === e2 ? G().zero : G().gridLine,
            x1: 48,
            x2: i2,
            y1: 0.5,
            y2: 0.5
          }),
          (0, a.jsx)("text", {
            className: G().axisLabel,
            x: 38,
            y: 0.5,
            dy: ".32em",
            textAnchor: "end",
            children: C(e2)
          })
        ]
      })
    });
  }
  function ea({ index: e2, x0: t2, x1: r2, width: n2, y: i2, reduce: l2 }) {
    let o2 = (0, s.G)([t2, r2, n2], ([t3, r3, a2]) => q(e2, t3, r3, a2)), d2 = (0, s.G)([o2, n2], ([e3, t3]) => Z(e3, 62, t3 - 16)), c2 = (0, s.G)(
      [o2, n2],
      ([e3, t3]) => Z(1 - Math.max(48 - e3, e3 - t3, 0) / 18, 0, 1)
    );
    return (0, a.jsx)(h.PY1.g, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: D.fast } },
      transition: et(l2),
      children: (0, a.jsx)(h.PY1.text, {
        className: G().axisLabel,
        style: { x: d2, opacity: c2 },
        y: i2,
        textAnchor: "middle",
        children: $(e2)
      })
    });
  }
  function en() {
    var e2, t2;
    let r2, i2, x2, p2 = !!(0, l.I)(), m2 = (0, n.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), y2 = `${m2}-clip`, g2 = `${m2}-table`, R2 = `${m2}-title`, [O2, et2] = (0, n.useState)(720), [en2, ei2] = (0, n.useState)({ a: H.lo, b: H.hi }), [es, el] = (0, n.useState)(() => T(H.lo, H.hi, [true, true, true], false, 12)), [eo, eh] = (0, n.useState)([true, true, true]), [ed, ec] = (0, n.useState)(false), [eu, ex] = (0, n.useState)(null), [ep, em] = (0, n.useState)(null), [ev, e_] = (0, n.useState)(12), ey = (0, d.d)(H.lo), eg = (0, d.d)(H.hi), ef = (0, d.d)(H.lo), ej = (0, d.d)(H.hi), ew = (0, d.d)(es[0]), eb = (0, d.d)(es[1]), eM = (0, d.d)(1), eN = (0, d.d)(1), e$ = (0, d.d)(1), ek = (0, d.d)(0), eT = (0, d.d)(12), eC = (0, d.d)(720), eP = (0, d.d)(S(720)), eL = (0, d.d)(-1), eE = (0, s.G)(
      [ey, eg, ew, eb, eM, eN, e$, ek, eT, eC, eP, eL],
      ([e10, t3, r3, a2, n2, i3, s2, l2, o2, h2, d2, c2]) => (function(e11) {
        let t4 = e11.width, r4 = e11.height - 28, a3 = (r5) => 48 + (r5 - e11.x0) / Math.max(1e-6, e11.x1 - e11.x0) * (t4 - 48), n3 = (t5) => 14 + (e11.yHi - t5) / Math.max(1, e11.yHi - e11.yLo) * (r4 - 14), [i4, s3, l3] = e11.w, o3 = e11.compare, h3 = Math.max(0, Math.floor(e11.x0) - 1), d3 = Math.min(23, Math.ceil(e11.x1) + 1), c3 = [], u2 = [], x3 = [], p3 = [], m3 = [];
        for (let t5 = h3; t5 <= d3; t5++) {
          let r5 = f(t5), h4 = a3(t5), d4 = r5.newMrr * i4, v3 = d4 + r5.expansion * s3, _3 = r5.churn * l3, y4 = j(t5 - e11.offset, "newMrr") * i4 + j(t5 - e11.offset, "expansion") * s3, g4 = j(t5 - e11.offset, "churn") * l3;
          c3.push([h4, n3(d4)]), u2.push([h4, n3(v3)]), x3.push([h4, n3(-_3)]), p3.push([h4, n3(v3 + (y4 - v3) * o3)]), m3.push([h4, n3(-_3 - (g4 - _3) * o3)]);
        }
        let v2 = P(n3(0)), _2 = P(c3[0][0]), y3 = P(c3[c3.length - 1][0]), g3 = e11.hover, w2 = g3 >= h3 && g3 <= d3, b2 = w2 ? Math.round(a3(g3)) + 0.5 : -100, M2 = f(Math.max(0, g3)), N2 = Y(e11.width);
        return {
          areaNew: `${L(c3)}L${y3},${v2}L${_2},${v2}Z`,
          areaExp: `${L(u2)}${E(c3)}Z`,
          areaChurn: `M${_2},${v2}L${y3},${v2}${E(x3)}Z`,
          lineNew: L(c3),
          lineExp: L(u2),
          lineChurn: L(x3),
          prevTop: L(p3),
          prevLow: L(m3),
          prevTopOpacity: A(1.6 * o3, 0, 1) * A(i4 + s3, 0, 1),
          prevLowOpacity: A(1.6 * o3, 0, 1) * l3,
          cross: b2,
          crossOpacity: w2 && b2 >= 47 && b2 <= t4 + 1 ? 1 : 0,
          dotNew: n3(M2.newMrr * i4),
          dotExp: n3(M2.newMrr * i4 + M2.expansion * s3),
          dotChurn: n3(-M2.churn * l3),
          panelX: b2 + 14 + N2 <= t4 ? b2 + 14 : Math.max(0, b2 - 14 - N2)
        };
      })({
        x0: e10,
        x1: t3,
        yLo: r3,
        yHi: a2,
        w: [n2, i3, s2],
        compare: l2,
        offset: o2,
        width: h2,
        height: d2,
        hover: c2
      })
    ), eY = J(eE, "areaNew"), eS = J(eE, "areaExp"), eA = J(eE, "areaChurn"), eR = J(eE, "lineNew"), eG = J(eE, "lineExp"), eI = J(eE, "lineChurn"), eD = J(eE, "prevTop"), eO = J(eE, "prevLow"), ez = J(eE, "prevTopOpacity"), eF = J(eE, "prevLowOpacity"), eV = J(eE, "cross"), eX = J(eE, "crossOpacity"), eH = J(eE, "dotNew"), eZ = J(eE, "dotExp"), eK = J(eE, "dotChurn"), eW = J(eE, "panelX"), eq = (0, c.z)(eW, { visualDuration: 0.22, bounce: 0 }), eB = p2 ? eW : eq, eJ = (0, s.G)([ef, eC], ([e10, t3]) => q(e10, 0, 23, t3)), eU = (0, s.G)([ej, eC], ([e10, t3]) => q(e10, 0, 23, t3)), eQ = (0, s.G)([eJ, eU], ([e10, t3]) => Math.max(0, t3 - e10)), e0 = (0, s.G)(eJ, (e10) => Math.max(0, e10 - 48)), e1 = (0, s.G)([eU, eC], ([e10, t3]) => Math.max(0, t3 - e10)), e22 = (0, s.G)(eJ, (e10) => e10 - 12), e5 = (0, s.G)(eU, (e10) => e10 - 4), e4 = (0, n.useRef)({
      ...H,
      active: [true, true, true],
      compare: false,
      y: es,
      offset: 12
    }), e3 = (0, n.useRef)(null), e8 = (0, n.useRef)(null);
    function e6(e10) {
      let t3 = eL.get();
      if (eL.set(e10 ?? -1), ex(e10), null !== e10 && t3 < 0) {
        let t4 = Math.round(q(e10, ey.get(), eg.get(), eC.get())) + 0.5, r3 = Y(eC.get());
        eq.jump(t4 + 14 + r3 <= eC.get() ? t4 + 14 : Math.max(0, t4 - 14 - r3));
      }
    }
    function e7(e10, t3 = false) {
      let r3 = Object.assign(e4.current, e10);
      B(ey, r3.lo, t3 ? F : I.smooth, p2), B(eg, r3.hi, t3 ? F : I.smooth, p2);
      let a2 = Math.round(r3.lo), n2 = Math.round(r3.hi), i3 = n2 - a2 + 1, s2 = T(r3.lo, r3.hi, r3.active, r3.compare, i3);
      (s2[0] !== r3.y[0] || s2[1] !== r3.y[1]) && (r3.y = s2, B(ew, s2[0], I.smooth, p2), B(eb, s2[1], I.smooth, p2), el(s2)), i3 !== r3.offset && (r3.offset = i3, B(eT, i3, I.smooth, p2)), ei2((e11) => e11.a === a2 && e11.b === n2 ? e11 : { a: a2, b: n2 });
      let l2 = eL.get();
      l2 >= 0 && (l2 < a2 || l2 > n2) && e6(Z(l2, a2, n2));
    }
    function e9(e10, t3, r3) {
      let a2 = Math.round(e10), n2 = Math.max(a2 + 2, Math.round(t3));
      B(ef, a2, r3, p2), B(ej, n2, r3, p2), e7({ lo: a2, hi: n2 });
    }
    (0, n.useEffect)(() => {
      let e10 = e8.current;
      if (!e10) return;
      let t3 = new ResizeObserver(([e11]) => {
        let t4 = Math.round(e11.contentRect.width);
        t4 && (et2(t4), eC.set(t4), eP.set(S(t4)));
      });
      return t3.observe(e10), () => t3.disconnect();
    }, [eC, eP]);
    let te = (e10) => {
      var t3;
      let r3, a2, n2, i3 = (t3 = e10.clientX, r3 = e10.currentTarget.getBoundingClientRect(), a2 = ey.get(), n2 = eg.get(), Z(
        Math.round(a2 + (t3 - r3.left) / Math.max(1, r3.width) * (n2 - a2)),
        Math.max(0, Math.ceil(a2 - 1e-3)),
        Math.min(23, Math.floor(n2 + 1e-3))
      ));
      i3 !== eL.get() && e6(i3);
    }, tt = () => {
      let e10 = e3.current;
      e10 && (e3.current = null, em(null), e9(e4.current.lo, e4.current.hi, e10.moved ? I.snappy : I.smooth));
    }, tr = (e10, t3) => {
      let { key: r3 } = t3, a2 = t3.shiftKey ? 3 : 1, n2 = "ArrowLeft" === r3 || "ArrowDown" === r3 ? -a2 : "ArrowRight" === r3 || "ArrowUp" === r3 ? a2 : 0;
      if (!n2 && "Home" !== r3 && "End" !== r3) return;
      t3.preventDefault();
      let { lo: i3, hi: s2 } = e4.current, l2 = s2 - i3, o2 = i3, h2 = s2;
      "move" === e10 ? h2 = (o2 = "Home" === r3 ? 0 : "End" === r3 ? 23 - l2 : Z(i3 + n2, 0, 23 - l2)) + l2 : "lo" === e10 ? o2 = "Home" === r3 ? 0 : "End" === r3 ? s2 - 2 : Z(i3 + n2, 0, s2 - 2) : h2 = "Home" === r3 ? i3 + 2 : "End" === r3 ? 23 : Z(s2 + n2, i3 + 2, 23), e9(o2, h2, I.snappy);
    }, ta = X.find((e10) => en2.a === 23 - e10.months + 1 && 23 === en2.b)?.months ?? null;
    null !== ta && ta !== ev && e_(ta);
    let tn = S(O2), ti = (function([e10, t3], r3) {
      var a2;
      let n2, i3, s2 = (a2 = (t3 - e10) / r3, n2 = 10 ** Math.floor(Math.log10(a2)), ((i3 = a2 / n2) < 1.5 ? 1 : i3 < 2.25 ? 2 : i3 < 3 ? 2.5 : i3 < 7 ? 5 : 10) * n2), l2 = [];
      for (let r4 = Math.ceil(e10 / s2) * s2; r4 <= t3 + 1e-6; r4 += s2)
        l2.push(Math.round(r4) || 0);
      return l2;
    })(es, Math.max(3, (tn - 14 - 28) / 40)), ts = (r2 = (O2 - 48) / Math.max(2, en2.b - en2.a), [1, 2, 3, 6, 12].find((e10) => r2 * e10 >= 46) ?? 12), tl = (0, n.useMemo)(
      () => Array.from({ length: 24 }, (e10, t3) => t3).filter(
        (e10) => b(e10).m % ts == 0
      ),
      [ts]
    ), to = (0, n.useMemo)(() => {
      var e10, t3;
      let r3, a2, n2, i3, s2, l2, o2, h2;
      return e10 = en2.a, r3 = (t3 = en2.b) - e10 + 1, a2 = (e11, t4) => k(e11, t4, w) / r3, n2 = (e11, t4) => k(e11, t4, (e12) => e12.churn) / k(e11, t4, (e12) => e12.start) * 100, i3 = f(t3).mrr, s2 = f(e10 - 1).mrr, l2 = a2(e10, t3), o2 = a2(e10 - r3, t3 - r3), h2 = n2(e10, t3), {
        months: r3,
        mrr: i3,
        since: N(e10 - 1),
        mrrChange: (i3 - s2) / s2 * 100,
        net: l2,
        netChange: (l2 - o2) / o2 * 100,
        churn: h2,
        churnChange: h2 - n2(e10 - r3, t3 - r3)
      };
    }, [en2.a, en2.b]), th = (0, n.useMemo)(
      () => (function(e10) {
        let t3 = (t4) => 48 + t4 / 23 * (e10 - 48), r3 = 0, a2 = 0;
        for (let e11 = 0; e11 <= 23; e11++) {
          let t4 = f(e11);
          r3 = Math.max(r3, t4.newMrr + t4.expansion), a2 = Math.max(a2, t4.churn);
        }
        let n2 = (e11) => 4 + (r3 - e11) / (r3 + a2) * 36, i3 = [], s2 = [];
        for (let e11 = 0; e11 <= 23; e11++) {
          let r4 = f(e11);
          i3.push([t3(e11), n2(r4.newMrr + r4.expansion)]), s2.push([t3(e11), n2(-r4.churn)]);
        }
        let l2 = P(n2(0));
        return {
          base: l2,
          top: L(i3),
          low: L(s2),
          areaTop: `${L(i3)}L${P(e10)},${l2}L48,${l2}Z`,
          areaLow: `M48,${l2}L${P(e10)},${l2}${E(s2)}Z`,
          years: Array.from({ length: 24 }, (e11, t4) => t4).filter(M).map((e11) => ({ i: e11, x: Math.round(t3(e11)) + 0.5, label: $(e11) }))
        };
      })(O2),
      [O2]
    ), td = Array.from({ length: en2.b - en2.a + 1 }, (e10, t3) => en2.a + t3), tc = (e2 = en2.a, t2 = en2.b, i2 = b(e2), x2 = b(t2), i2.y === x2.y ? `${_[i2.m]} \u2013 ${_[x2.m]} ${x2.y}` : `${_[i2.m]} ${i2.y} \u2013 ${_[x2.m]} ${x2.y}`), tu = `vs previous ${to.months} months`, tx = null === eu ? null : f(eu), tp = null !== eu && tx ? `${N(eu)}: new ${C(tx.newMrr)}, expansion ${C(tx.expansion)}, churn ${C(-tx.churn)}, net new ${C(w(tx))}` : void 0;
    return (0, a.jsx)("section", {
      className: G().root,
      "aria-labelledby": R2,
      children: (0, a.jsxs)("div", {
        className: G().inner,
        children: [
          (0, a.jsxs)("header", {
            className: G().header,
            children: [
              (0, a.jsxs)("div", {
                className: G().heading,
                children: [
                  (0, a.jsx)("h2", { id: R2, children: "Recurring revenue" }),
                  (0, a.jsx)("p", { children: (0, a.jsx)(U, { text: tc }) })
                ]
              }),
              (0, a.jsx)(u.o, {
                id: `${m2}-presets`,
                children: (0, a.jsx)("div", {
                  className: G().presets,
                  role: "group",
                  "aria-label": "Range",
                  children: X.map(
                    (e10) => (0, a.jsxs)(
                      "button",
                      {
                        type: "button",
                        className: G().preset,
                        "aria-pressed": ta === e10.months,
                        "aria-label": 24 === e10.months ? "All 24 months" : `Last ${e10.months} months`,
                        onClick: () => e9(23 - e10.months + 1, 23, I.smooth),
                        children: [
                          ev === e10.months && (0, a.jsx)(h.PY1.span, {
                            layoutId: "preset",
                            className: G().presetPill,
                            initial: false,
                            animate: { opacity: +(null !== ta) },
                            transition: p2 ? { duration: 0 } : I.snappy
                          }),
                          (0, a.jsx)("span", {
                            className: G().presetLabel,
                            children: e10.label
                          })
                        ]
                      },
                      e10.label
                    )
                  )
                })
              })
            ]
          }),
          (0, a.jsxs)("dl", {
            className: G().kpis,
            children: [
              (0, a.jsxs)("div", {
                className: G().kpi,
                children: [
                  (0, a.jsx)("dt", { children: "MRR" }),
                  (0, a.jsx)("dd", {
                    className: G().value,
                    children: (0, a.jsx)(Q, {
                      value: to.mrr / 1e6,
                      decimals: 2,
                      suffix: "M"
                    })
                  }),
                  (0, a.jsx)("dd", {
                    children: (0, a.jsx)(ee, {
                      text: W(to.mrrChange, 1, "%"),
                      change: to.mrrChange,
                      good: to.mrrChange >= 0,
                      context: `since ${to.since}`
                    })
                  })
                ]
              }),
              (0, a.jsxs)("div", {
                className: G().kpi,
                children: [
                  (0, a.jsx)("dt", { children: "Net new per month" }),
                  (0, a.jsx)("dd", {
                    className: G().value,
                    children: (0, a.jsx)(Q, {
                      value: to.net / 1e3,
                      suffix: "k"
                    })
                  }),
                  (0, a.jsx)("dd", {
                    children: (0, a.jsx)(ee, {
                      text: W(to.netChange, 1, "%"),
                      change: to.netChange,
                      good: to.netChange >= 0,
                      context: tu
                    })
                  })
                ]
              }),
              (0, a.jsxs)("div", {
                className: G().kpi,
                children: [
                  (0, a.jsx)("dt", { children: "Churn rate" }),
                  (0, a.jsx)("dd", {
                    className: G().value,
                    children: (0, a.jsx)(Q, {
                      value: to.churn,
                      decimals: 2,
                      prefix: "",
                      suffix: "%"
                    })
                  }),
                  (0, a.jsx)("dd", {
                    children: (0, a.jsx)(ee, {
                      text: W(to.churnChange, 2, " pts"),
                      change: to.churnChange,
                      good: to.churnChange <= 0,
                      context: tu
                    })
                  })
                ]
              })
            ]
          }),
          (0, a.jsxs)("div", {
            className: G().toolbar,
            children: [
              (0, a.jsx)("div", {
                className: G().legend,
                role: "group",
                "aria-label": "Series",
                children: v.map(
                  (e10, t3) => (0, a.jsxs)(
                    "button",
                    {
                      type: "button",
                      className: G().toggle,
                      "data-series": e10.key,
                      "aria-pressed": eo[t3],
                      onClick: () => {
                        let e11;
                        eh(e11 = eo.map((e12, r3) => r3 === t3 ? !e12 : e12)), B([eM, eN, e$][t3], +!!e11[t3], I.smooth, p2), e7({ active: e11 });
                      },
                      children: [
                        (0, a.jsx)("span", {
                          className: G().swatch,
                          "aria-hidden": "true"
                        }),
                        e10.label
                      ]
                    },
                    e10.key
                  )
                )
              }),
              (0, a.jsxs)("button", {
                type: "button",
                role: "switch",
                "aria-checked": ed,
                className: G().switch,
                onClick: () => {
                  let e10 = !ed;
                  ec(e10), B(ek, +!!e10, V, p2), e7({ compare: e10 });
                },
                children: [
                  (0, a.jsx)("span", {
                    className: G().track,
                    "aria-hidden": "true",
                    children: (0, a.jsx)(h.PY1.span, {
                      className: G().thumb,
                      initial: false,
                      animate: { x: 12 * !!ed },
                      transition: p2 ? { duration: 0 } : I.snappy
                    })
                  }),
                  "Compare to previous period"
                ]
              })
            ]
          }),
          (0, a.jsxs)("div", {
            ref: e8,
            className: G().chart,
            children: [
              (0, a.jsxs)("svg", {
                className: G().svg,
                viewBox: `0 0 ${O2} ${tn}`,
                height: tn,
                role: "img",
                "aria-label": `Stacked area chart of new, expansion and churned MRR, ${tc}. MRR reached ${C(to.mrr)} and net new MRR averaged ${C(to.net)} a month.`,
                "aria-describedby": g2,
                children: [
                  (0, a.jsx)("defs", {
                    children: (0, a.jsx)("clipPath", {
                      id: y2,
                      children: (0, a.jsx)("rect", {
                        x: 48,
                        y: 0,
                        width: Math.max(0, O2 - 48),
                        height: tn - 28 + 1
                      })
                    })
                  }),
                  (0, a.jsxs)("g", {
                    "aria-hidden": "true",
                    children: [
                      (0, a.jsx)(o.N, {
                        initial: false,
                        children: ti.map(
                          (e10) => (0, a.jsx)(
                            er,
                            {
                              value: e10,
                              yLo: ew,
                              yHi: eb,
                              height: eP,
                              width: O2,
                              reduce: p2
                            },
                            e10
                          )
                        )
                      }),
                      (0, a.jsxs)("g", {
                        clipPath: `url(#${y2})`,
                        children: [
                          (0, a.jsx)(h.PY1.path, {
                            className: G().areaExp,
                            d: eS
                          }),
                          (0, a.jsx)(h.PY1.path, {
                            className: G().areaNew,
                            d: eY
                          }),
                          (0, a.jsx)(h.PY1.path, {
                            className: G().areaChurn,
                            d: eA
                          }),
                          (0, a.jsx)(h.PY1.path, {
                            className: G().prev,
                            d: eD,
                            style: { opacity: ez }
                          }),
                          (0, a.jsx)(h.PY1.path, {
                            className: G().prev,
                            d: eO,
                            style: { opacity: eF }
                          }),
                          (0, a.jsx)(h.PY1.path, {
                            className: G().lineExp,
                            d: eG,
                            style: { opacity: eN }
                          }),
                          (0, a.jsx)(h.PY1.path, {
                            className: G().lineChurn,
                            d: eI,
                            style: { opacity: e$ }
                          }),
                          (0, a.jsx)(h.PY1.path, {
                            className: G().lineNew,
                            d: eR,
                            style: { opacity: eM }
                          })
                        ]
                      }),
                      (0, a.jsx)(o.N, {
                        initial: false,
                        children: tl.map(
                          (e10) => (0, a.jsx)(
                            ea,
                            {
                              index: e10,
                              x0: ey,
                              x1: eg,
                              width: eC,
                              y: tn - 8,
                              reduce: p2
                            },
                            e10
                          )
                        )
                      }),
                      (0, a.jsxs)(h.PY1.g, {
                        className: G().cross,
                        style: { x: eV, opacity: eX },
                        children: [
                          (0, a.jsx)("line", {
                            x1: 0,
                            x2: 0,
                            y1: 8,
                            y2: tn - 28
                          }),
                          (0, a.jsx)(h.PY1.circle, {
                            className: G().dotExp,
                            r: 4,
                            cx: 0,
                            cy: eZ,
                            style: { opacity: eN }
                          }),
                          (0, a.jsx)(h.PY1.circle, {
                            className: G().dotNew,
                            r: 4,
                            cx: 0,
                            cy: eH,
                            style: { opacity: eM }
                          }),
                          (0, a.jsx)(h.PY1.circle, {
                            className: G().dotChurn,
                            r: 4,
                            cx: 0,
                            cy: eK,
                            style: { opacity: e$ }
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              (0, a.jsx)("div", {
                className: G().hit,
                style: { left: 48, bottom: 28 },
                tabIndex: 0,
                role: "slider",
                "aria-label": "Inspect a month",
                "aria-orientation": "horizontal",
                "aria-valuemin": en2.a,
                "aria-valuemax": en2.b,
                "aria-valuenow": eu ?? en2.b,
                "aria-valuetext": tp ?? N(en2.b),
                onPointerDown: te,
                onPointerMove: te,
                onPointerLeave: () => e6(null),
                onFocus: () => {
                  null === eu && e6(en2.b);
                },
                onBlur: () => e6(null),
                onKeyDown: (e10) => {
                  let t3 = eu ?? en2.b, r3 = "ArrowLeft" === e10.key || "ArrowDown" === e10.key ? t3 - 1 : "ArrowRight" === e10.key || "ArrowUp" === e10.key ? t3 + 1 : "Home" === e10.key ? en2.a : "End" === e10.key ? en2.b : "Escape" === e10.key ? -1 : null;
                  null !== r3 && (e10.preventDefault(), e6(r3 < 0 ? null : Z(r3, en2.a, en2.b)));
                }
              }),
              (0, a.jsx)(o.N, {
                children: null !== eu && tx && (0, a.jsxs)(
                  h.PY1.div,
                  {
                    className: G().panel,
                    "aria-hidden": "true",
                    style: { x: eB, top: 14, width: Y(O2) },
                    initial: { opacity: 0, scale: 0.97 },
                    animate: { opacity: 1, scale: 1 },
                    exit: {
                      opacity: 0,
                      scale: 0.97,
                      transition: { duration: D.fast }
                    },
                    transition: { duration: p2 ? D.instant : D.fast, ease: z },
                    children: [
                      (0, a.jsx)("p", {
                        className: G().panelMonth,
                        children: (0, a.jsx)(U, { text: N(eu) })
                      }),
                      (0, a.jsxs)("dl", {
                        className: G().rows,
                        children: [
                          v.map(
                            (e10, t3) => (0, a.jsxs)(
                              "div",
                              {
                                className: G().row,
                                "data-series": e10.key,
                                "data-off": eo[t3] ? void 0 : "",
                                children: [
                                  (0, a.jsxs)("dt", {
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: G().swatch
                                      }),
                                      e10.label
                                    ]
                                  }),
                                  (0, a.jsx)("dd", {
                                    children: (0, a.jsx)(Q, {
                                      value: tx[e10.key] / 1e3,
                                      prefix: 2 === t3 ? "\u2212$" : "$",
                                      suffix: "k"
                                    })
                                  })
                                ]
                              },
                              e10.key
                            )
                          ),
                          (0, a.jsxs)("div", {
                            className: `${G().row} ${G().total}`,
                            children: [
                              (0, a.jsx)("dt", { children: "Net new" }),
                              (0, a.jsx)("dd", {
                                children: (0, a.jsx)(Q, {
                                  value: w(tx) / 1e3,
                                  suffix: "k"
                                })
                              })
                            ]
                          }),
                          (0, a.jsx)(o.N, {
                            initial: false,
                            children: ed && (0, a.jsxs)(
                              h.PY1.div,
                              {
                                className: `${G().row} ${G().previous}`,
                                initial: { height: 0, opacity: 0 },
                                animate: { height: "auto", opacity: 1 },
                                exit: { height: 0, opacity: 0 },
                                transition: p2 ? { duration: 0 } : I.smooth,
                                children: [
                                  (0, a.jsxs)("dt", {
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: G().dash
                                      }),
                                      (0, a.jsx)(U, {
                                        text: N(eu - to.months)
                                      })
                                    ]
                                  }),
                                  (0, a.jsx)("dd", {
                                    children: (0, a.jsx)(Q, {
                                      value: w(f(eu - to.months)) / 1e3,
                                      suffix: "k"
                                    })
                                  })
                                ]
                              },
                              "previous"
                            )
                          })
                        ]
                      })
                    ]
                  },
                  "panel"
                )
              }),
              (0, a.jsx)(o.N, {
                children: !eo.some(Boolean) && (0, a.jsx)(h.PY1.p, {
                  className: G().empty,
                  style: { left: 48, bottom: 28 },
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: {
                    duration: p2 ? D.instant : D.standard,
                    ease: z,
                    delay: 0.12 * !p2
                  },
                  children: "Turn on a series to see revenue"
                })
              })
            ]
          }),
          (0, a.jsxs)("div", {
            className: G().overview,
            "data-dragging": ep ?? void 0,
            onPointerDown: (e10) => {
              if (0 !== e10.button) return;
              let t3 = e10.target.closest("[data-part]")?.dataset.part, r3 = e10.currentTarget.getBoundingClientRect(), a2 = (r3.width - 48) / 23, n2 = Z(ef.get(), 0, 21), i3 = Z(ej.get(), n2 + 2, 23);
              if (!t3) {
                let t4 = e4.current.hi - e4.current.lo;
                i3 = (n2 = Z(
                  Math.round((e10.clientX - r3.left - 48) / a2 - t4 / 2),
                  0,
                  23 - t4
                )) + t4, B(ef, n2, I.smooth, p2), B(ej, i3, I.smooth, p2), e7({ lo: n2, hi: i3 });
              }
              e10.preventDefault(), e10.currentTarget.setPointerCapture(e10.pointerId), e3.current = {
                part: t3 ?? "move",
                x: e10.clientX,
                lo: n2,
                hi: i3,
                perMonth: a2,
                moved: false
              }, em(t3 ?? "move");
            },
            onPointerMove: (e10) => {
              let t3 = e3.current;
              if (!t3) return;
              if (!t3.moved) {
                if (2 > Math.abs(e10.clientX - t3.x)) return;
                t3.moved = true, ef.stop(), ej.stop();
              }
              let r3 = (e10.clientX - t3.x) / t3.perMonth, a2 = t3.lo, n2 = t3.hi, i3 = a2, s2 = n2;
              if ("move" === t3.part) {
                let e11 = t3.hi - t3.lo, l2 = t3.lo + r3;
                n2 = (a2 = Z(l2, 0, 23 - e11)) + e11;
                let o2 = K(l2 - a2);
                i3 = a2 + o2, s2 = n2 + o2;
              } else if ("lo" === t3.part) {
                let e11 = t3.lo + r3;
                i3 = (a2 = Z(e11, 0, t3.hi - 2)) + K(e11 - a2);
              } else {
                let e11 = t3.hi + r3;
                s2 = (n2 = Z(e11, t3.lo + 2, 23)) + K(e11 - n2);
              }
              ef.set(i3), ej.set(s2), e7({ lo: a2, hi: n2 }, true);
            },
            onPointerUp: tt,
            onPointerCancel: tt,
            children: [
              (0, a.jsxs)("svg", {
                className: G().overviewSvg,
                viewBox: `0 0 ${O2} 62`,
                height: 62,
                "aria-hidden": "true",
                children: [
                  th.years.map(
                    (e10) => (0, a.jsxs)(
                      "g",
                      {
                        children: [
                          (0, a.jsx)("line", {
                            className: G().yearTick,
                            x1: e10.x,
                            x2: e10.x,
                            y1: 0,
                            y2: 48
                          }),
                          (0, a.jsx)("text", {
                            className: G().axisLabel,
                            x: e10.x + 5,
                            y: 58,
                            children: e10.label
                          })
                        ]
                      },
                      e10.i
                    )
                  ),
                  (0, a.jsx)("path", {
                    className: G().overviewArea,
                    d: th.areaTop
                  }),
                  (0, a.jsx)("path", {
                    className: G().overviewAreaLow,
                    d: th.areaLow
                  }),
                  (0, a.jsx)("path", {
                    className: G().overviewLine,
                    d: th.top
                  }),
                  (0, a.jsx)("path", {
                    className: G().overviewLine,
                    d: th.low
                  })
                ]
              }),
              (0, a.jsx)(h.PY1.div, {
                className: G().dim,
                style: { x: 48, width: e0 }
              }),
              (0, a.jsx)(h.PY1.div, {
                className: G().dim,
                style: { x: eU, width: e1 }
              }),
              (0, a.jsx)(h.PY1.div, {
                className: G().window,
                "data-part": "move",
                style: { x: eJ, width: eQ },
                tabIndex: 0,
                role: "slider",
                "aria-label": "Selected range",
                "aria-valuemin": 0,
                "aria-valuemax": 23 - (en2.b - en2.a),
                "aria-valuenow": en2.a,
                "aria-valuetext": tc,
                onKeyDown: (e10) => tr("move", e10)
              }),
              (0, a.jsx)(h.PY1.div, {
                className: G().handle,
                "data-part": "lo",
                style: { x: e22 },
                tabIndex: 0,
                role: "slider",
                "aria-label": "Range start",
                "aria-valuemin": 0,
                "aria-valuemax": en2.b - 2,
                "aria-valuenow": en2.a,
                "aria-valuetext": N(en2.a),
                onKeyDown: (e10) => tr("lo", e10),
                children: (0, a.jsx)("span", {})
              }),
              (0, a.jsx)(h.PY1.div, {
                className: G().handle,
                "data-part": "hi",
                style: { x: e5 },
                tabIndex: 0,
                role: "slider",
                "aria-label": "Range end",
                "aria-valuemin": en2.a + 2,
                "aria-valuemax": 23,
                "aria-valuenow": en2.b,
                "aria-valuetext": N(en2.b),
                onKeyDown: (e10) => tr("hi", e10),
                children: (0, a.jsx)("span", {})
              })
            ]
          }),
          (0, a.jsx)("div", {
            className: G().srOnly,
            children: (0, a.jsxs)("table", {
              id: g2,
              children: [
                (0, a.jsxs)("caption", {
                  children: ["Monthly MRR movements, ", tc]
                }),
                (0, a.jsx)("thead", {
                  children: (0, a.jsxs)("tr", {
                    children: [
                      (0, a.jsx)("th", { scope: "col", children: "Month" }),
                      (0, a.jsx)("th", { scope: "col", children: "New" }),
                      (0, a.jsx)("th", { scope: "col", children: "Expansion" }),
                      (0, a.jsx)("th", { scope: "col", children: "Churn" }),
                      (0, a.jsx)("th", { scope: "col", children: "Net new" }),
                      (0, a.jsx)("th", { scope: "col", children: "MRR" })
                    ]
                  })
                }),
                (0, a.jsx)("tbody", {
                  children: td.map((e10) => {
                    let t3 = f(e10);
                    return (0, a.jsxs)(
                      "tr",
                      {
                        children: [
                          (0, a.jsx)("th", { scope: "row", children: N(e10) }),
                          (0, a.jsx)("td", { children: C(t3.newMrr) }),
                          (0, a.jsx)("td", { children: C(t3.expansion) }),
                          (0, a.jsx)("td", { children: C(-t3.churn) }),
                          (0, a.jsx)("td", { children: C(w(t3)) }),
                          (0, a.jsx)("td", { children: C(t3.mrr) })
                        ]
                      },
                      e10
                    );
                  })
                })
              ]
            })
          })
        ]
      })
    });
  }
  let ei = en;
}

__m(__module,__exports,__require);
}