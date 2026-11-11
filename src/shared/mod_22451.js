function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { SlopeChartDemo: () => P, default: () => E });
  var l = a(95155), s = a(12115), r = a(18310), n = a(80642), i = a(25354), o = a(61792), c = a(28245), d = a(22535), h = a(7770), p = a(72674), u = a.n(p);
  let { spring: m } = h.T, y = { stiffness: 480, damping: 42, restDelta: 0.01 }, _ = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), x = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }), f = () => () => {
  };
  function v(e2, t2, a2, l2) {
    let s2 = e2.map((e3, t3) => ({ y: e3, index: t3 })).sort((e3, t3) => e3.y - t3.y).map((e3) => ({ members: [e3], top: e3.y }));
    for (let e3 = true; e3; ) {
      e3 = false;
      let r3 = [];
      for (let a3 of s2) {
        let l3 = r3[r3.length - 1];
        if (l3 && l3.top + l3.members.length * t2 > a3.top) {
          let s3 = [...l3.members, ...a3.members];
          r3[r3.length - 1] = { members: s3, top: s3.reduce((e4, a4, l4) => e4 + a4.y - l4 * t2, 0) / s3.length }, e3 = true;
        } else r3.push(a3);
      }
      s2 = r3.map((e4) => ({ ...e4, top: _(e4.top, a2, Math.max(a2, l2 - (e4.members.length - 1) * t2)) }));
    }
    let r2 = Array(e2.length);
    return s2.forEach((e3) => e3.members.forEach((a3, l3) => {
      r2[a3.index] = e3.top + l3 * t2;
    })), r2;
  }
  function j({ move: e2, reduced: t2 }) {
    let a2 = 0 === e2 ? "=" : `${Math.abs(e2)}`;
    return (0, l.jsxs)("span", { className: u().rank, "data-move": e2 > 0 ? "up" : e2 < 0 ? "down" : "level", "aria-hidden": "true", children: [0 !== e2 && (0, l.jsx)("svg", { width: "8", height: "8", viewBox: "0 0 8 8", children: (0, l.jsx)("path", { d: e2 > 0 ? "M4 7V1M1.5 3.5 4 1l2.5 2.5" : "M4 1v6M1.5 4.5 4 7l2.5-2.5", fill: "none", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round" }) }), (0, l.jsx)("span", { className: u().rankSwap, children: (0, l.jsx)(n.N, { mode: "popLayout", initial: false, children: (0, l.jsx)(i.PY1.span, { initial: t2 ? { opacity: 0 } : { opacity: 0, y: e2 >= 0 ? 6 : -6 }, animate: { opacity: 1, y: 0 }, exit: t2 ? { opacity: 0 } : { opacity: 0, y: e2 >= 0 ? -6 : 6 }, transition: t2 ? { duration: 0 } : m.snappy, children: a2 }, a2) }) })] });
  }
  function b({ data: e2, label: t2, startLabel: a2, endLabel: n2, formatValue: p2, formatChange: g2, height: k2, highlightKey: N2 = null, activeKey: $2, onActiveChange: w2, ranks: M2 = true, emptyLabel: L2 = "No data", ref: R2, className: P2 }) {
    let E2, T = (E2 = (0, s.useSyncExternalStore)(f, () => true, () => false), !!(0, r.I)() && E2), S = (0, s.useRef)(null), Y = (0, s.useRef)(null), C = (0, s.useRef)(null);
    (0, s.useImperativeHandle)(R2, () => S.current);
    let A = (0, o.W)(S, { once: true, amount: 0.3 }), O = 0 === e2.length, D = k2 ?? Math.max(200, 44 * e2.length), [F, W] = (0, s.useState)(0);
    (0, s.useLayoutEffect)(() => {
      let e3 = Y.current;
      if (!e3) return;
      let t3 = () => W(e3.clientWidth);
      if (t3(), "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(t3);
      return a3.observe(e3), () => a3.disconnect();
    }, []);
    let I = F < 440, V = M2 ? I ? 76 : 96 : I ? 52 : 64, z = I ? F < 300 ? 116 : 132 : 168, K = Math.max(z + 40, F - V), X = e2.flatMap((e3) => [e3.start, e3.end]), H = Math.min(...X), U = Math.max(...X);
    Number.isFinite(H) || (H = 0, U = 1), U - H < 1e-9 && (H -= 1, U += 1);
    let B = (e3) => 14 + (1 - (e3 - H) / (U - H)) * (D - 28), Q = (t3) => {
      let a3 = [...e2].sort((e3, a4) => a4[t3] - e3[t3]);
      return (e3) => a3.indexOf(e3) + 1;
    }, q = Q("start"), G = Q("end"), J = v(e2.map((e3) => B(e3.start)), 20, 8, D - 8), Z = v(e2.map((e3) => B(e3.end)), 20, 8, D - 8), ee = e2.map((e3, t3) => ({ item: e3, y0: B(e3.start), y1: B(e3.end), l0: J[t3], l1: Z[t3], rank0: q(e3), rank1: G(e3), order: 0 })), et = [...ee].sort((e3, t3) => e3.rank1 - t3.rank1);
    et.forEach((e3, t3) => {
      e3.order = t3;
    });
    let [ea, el] = (0, s.useState)(null), es = void 0 !== $2 ? $2 : ea, er = es && e2.some((e3) => e3.key === es) ? es : null, en = (e3) => {
      void 0 === $2 && el(e3), e3 !== er && w2?.(e3);
    }, ei = (0, c.d)(0), eo = (0, c.d)(0), ec = (0, d.z)(ei, y), ed = (0, d.z)(eo, y), eh = (0, s.useRef)(false), ep = ee.find((e3) => e3.item.key === er) ?? null, [eu, em] = (0, s.useState)(null);
    er && er !== eu && em(er);
    let ey = ep ?? ee.find((e3) => e3.item.key === eu) ?? null;
    (0, s.useLayoutEffect)(() => {
      let e3 = C.current;
      if (!ep || !e3 || !F) {
        eh.current = false;
        return;
      }
      let t3 = e3.offsetWidth, a3 = e3.offsetHeight, l2 = (ep.y0 + ep.y1) / 2, s2 = _((z + K) / 2 - t3 / 2, 0, Math.max(0, F - t3)), r2 = _(28 + (l2 - a3 - 16 >= 0 ? l2 - a3 - 16 : l2 + 16), 0, Math.max(0, D + 28 - a3));
      ei.set(s2), eo.set(r2), (!eh.current || T) && (ec.jump(s2), ed.jump(r2)), eh.current = true;
    });
    let e_ = (e3, t3) => {
      let a3 = Y.current?.getBoundingClientRect();
      if (!a3 || O) return null;
      let l2 = _(e3 - a3.left, z, K), s2 = t3 - a3.top - 28, r2 = (l2 - z) / Math.max(1, K - z), n3 = null, i2 = 1 / 0;
      for (let t4 of ee) {
        let l3 = Math.min(Math.abs(t4.y0 + (t4.y1 - t4.y0) * r2 - s2), e3 - a3.left < z ? Math.abs(t4.l0 - s2) : e3 - a3.left > K ? Math.abs(t4.l1 - s2) : 1 / 0);
        l3 < i2 && (i2 = l3, n3 = t4);
      }
      return i2 <= 22 ? n3?.item.key ?? null : null;
    }, ex = (e3) => p2 ? p2(e3) : x.format(e3), ef = (e3) => g2 ? g2(e3.end - e3.start, e3) : `${e3.end >= e3.start ? "+" : "\u2212"}${ex(Math.abs(e3.end - e3.start))}`, ev = (e3) => e3.rank0 === e3.rank1 ? "same rank" : e3.rank1 < e3.rank0 ? `up ${e3.rank0 - e3.rank1} to rank ${e3.rank1}` : `down ${e3.rank1 - e3.rank0} to rank ${e3.rank1}`, ej = ep ? `${ep.item.label}, ${a2} ${ex(ep.item.start)}, ${n2} ${ex(ep.item.end)}, ${ef(ep.item)}, ${ev(ep)}` : "", eb = O ? `${t2}. ${L2}.` : `${t2}, ${a2} to ${n2}. ${et.map((e3) => `${e3.item.label} ${ex(e3.item.start)} to ${ex(e3.item.end)}`).join(", ")}.`, eg = T ? { duration: 0 } : m.morph, ek = A || T;
    return (0, l.jsxs)("figure", { ref: S, className: [u().figure, P2].filter(Boolean).join(" "), "aria-label": t2, children: [(0, l.jsxs)("div", { ref: Y, className: u().stage, "data-narrow": I || void 0, "data-active": !!er || void 0, role: "group", tabIndex: O ? -1 : 0, "aria-roledescription": "slope chart", "aria-label": `${t2}. Use up and down arrows to move between items in ${n2} order.`, onPointerMove: (e3) => {
      ("mouse" === e3.pointerType || e3.buttons) && en(e_(e3.clientX, e3.clientY));
    }, onPointerDown: (e3) => {
      "mouse" !== e3.pointerType && (e3.currentTarget.setPointerCapture?.(e3.pointerId), en(e_(e3.clientX, e3.clientY)));
    }, onPointerUp: (e3) => {
      "mouse" !== e3.pointerType && en(null);
    }, onPointerCancel: () => en(null), onPointerLeave: (e3) => {
      "mouse" === e3.pointerType && en(null);
    }, onKeyDown: (e3) => {
      if (O) return;
      if ("Escape" === e3.key && er) {
        e3.preventDefault(), en(null);
        return;
      }
      let t3 = ep ? ep.order : -1, a3 = { ArrowDown: t3 + 1, ArrowRight: t3 + 1, ArrowUp: t3 < 0 ? 0 : t3 - 1, ArrowLeft: t3 < 0 ? 0 : t3 - 1, Home: 0, End: et.length - 1 };
      e3.key in a3 && (e3.preventDefault(), en(et[_(a3[e3.key], 0, et.length - 1)].item.key));
    }, onBlur: () => en(null), onFocus: (e3) => {
      !e3.currentTarget.matches(":focus-visible") || O || er || en(et[0].item.key);
    }, children: [F > 0 && (0, l.jsxs)(l.Fragment, { children: [(0, l.jsxs)("div", { className: u().columns, "aria-hidden": "true", children: [(0, l.jsx)("span", { className: u().column, style: { left: z, translate: "-50% 0" }, children: a2 }), (0, l.jsx)("span", { className: u().column, style: { left: K, translate: "-50% 0" }, children: n2 })] }), (0, l.jsxs)("div", { className: u().plot, style: { height: D }, children: [(0, l.jsxs)("svg", { className: u().svg, width: F, height: D, "aria-hidden": "true", focusable: "false", children: [(0, l.jsx)("line", { className: u().axis, x1: z, x2: z, y1: 0, y2: D }), (0, l.jsx)("line", { className: u().axis, x1: K, x2: K, y1: 0, y2: D }), ee.map((e3, t3) => {
      let a3 = e3.item.key, s2 = er === a3, r2 = T ? 0 : 0.05 * t3;
      return (0, l.jsxs)("g", { className: u().item, "data-on": s2 || void 0, "data-accent": N2 === a3 || void 0, "data-dim": null !== er && !s2 || void 0, children: [(0, l.jsx)(i.PY1.path, { className: u().leader, initial: false, animate: { d: `M${z - 6},${e3.l0}L${z - 1},${e3.y0}` }, transition: eg }), (0, l.jsx)(i.PY1.path, { className: u().leader, initial: false, animate: { d: `M${K + 6},${e3.l1}L${K + 1},${e3.y1}` }, transition: eg }), (0, l.jsx)(i.PY1.line, { className: u().line, x1: z, x2: K, initial: !T && { y1: e3.y0, y2: e3.y1, pathLength: 0 }, animate: { y1: e3.y0, y2: e3.y1, pathLength: +!!ek }, transition: { y1: eg, y2: eg, pathLength: T ? { duration: 0 } : { duration: 0.7, ease: h.T.ease.inOut, delay: 0.1 + r2 } } }), (0, l.jsx)(i.PY1.circle, { className: u().dot, cx: z, r: 4, initial: !T && { cy: e3.y0, scale: 0 }, animate: { cy: e3.y0, scale: +!!ek }, transition: { cy: eg, scale: T ? { duration: 0 } : { ...m.snappy, delay: r2 } } }), (0, l.jsx)(i.PY1.circle, { className: u().dot, cx: K, r: 4, initial: !T && { cy: e3.y1, scale: 0 }, animate: { cy: e3.y1, scale: +!!ek }, transition: { cy: eg, scale: T ? { duration: 0 } : { ...m.snappy, delay: 0.7 + r2 } } })] }, a3);
    })] }), ee.map((e3, t3) => {
      let a3 = e3.item.key, s2 = er === a3, r2 = T ? 0 : 0.05 * t3;
      return (0, l.jsxs)("div", { className: u().labels, "data-on": s2 || void 0, "data-accent": N2 === a3 || void 0, "data-dim": null !== er && !s2 || void 0, "aria-hidden": "true", children: [(0, l.jsxs)(i.PY1.span, { className: u().start, style: { right: F - z + 10, maxWidth: z - 10 }, initial: !T && { y: e3.l0, opacity: 0 }, animate: { y: e3.l0, opacity: +!!ek }, transition: { y: eg, opacity: { duration: 0.3, delay: r2 } }, children: [(0, l.jsx)("span", { className: u().name, children: e3.item.label }), (0, l.jsx)("span", { className: u().value, children: ex(e3.item.start) })] }), (0, l.jsxs)(i.PY1.span, { className: u().end, style: { left: K + 10 }, initial: !T && { y: e3.l1, opacity: 0 }, animate: { y: e3.l1, opacity: +!!ek }, transition: { y: eg, opacity: { duration: 0.3, delay: 0.7 + r2 } }, children: [(0, l.jsx)("span", { className: u().value, children: ex(e3.item.end) }), M2 && (0, l.jsx)(j, { move: e3.rank0 - e3.rank1, reduced: T })] })] }, a3);
    })] })] }), (0, l.jsxs)(i.PY1.div, { ref: C, className: u().tooltip, style: { x: T ? ei : ec, y: T ? eo : ed }, "aria-hidden": "true", children: [(0, l.jsx)("p", { className: u().tipTitle, children: ey?.item.label ?? "" }), (0, l.jsxs)("p", { className: u().tipRow, children: [(0, l.jsx)("span", { className: u().tipName, children: a2 }), (0, l.jsx)("span", { className: u().tipValue, children: ey ? ex(ey.item.start) : "" })] }), (0, l.jsxs)("p", { className: u().tipRow, children: [(0, l.jsx)("span", { className: u().tipName, children: n2 }), (0, l.jsx)("span", { className: u().tipValue, children: ey ? ex(ey.item.end) : "" })] }), (0, l.jsx)("p", { className: u().tipMeta, children: ey ? `${ef(ey.item)}, ${ev(ey)}` : "" })] }), O && (0, l.jsx)("p", { className: u().message, children: L2 })] }), (0, l.jsx)("p", { className: u().srOnly, "aria-live": "polite", "aria-atomic": "true", children: ej }), (0, l.jsx)("p", { className: u().srOnly, children: eb }), !O && (0, l.jsx)("div", { className: u().srOnly, children: (0, l.jsxs)("table", { children: [(0, l.jsx)("caption", { children: t2 }), (0, l.jsx)("thead", { children: (0, l.jsxs)("tr", { children: [(0, l.jsx)("th", { scope: "col", children: "Item" }), (0, l.jsx)("th", { scope: "col", children: a2 }), (0, l.jsx)("th", { scope: "col", children: n2 }), (0, l.jsx)("th", { scope: "col", children: "Change" }), (0, l.jsx)("th", { scope: "col", children: "Rank" })] }) }), (0, l.jsx)("tbody", { children: et.map((e3) => (0, l.jsxs)("tr", { children: [(0, l.jsx)("th", { scope: "row", children: e3.item.label }), (0, l.jsx)("td", { children: ex(e3.item.start) }), (0, l.jsx)("td", { children: ex(e3.item.end) }), (0, l.jsx)("td", { children: ef(e3.item) }), (0, l.jsxs)("td", { children: [e3.rank0, " to ", e3.rank1] })] }, e3.item.key)) })] }) })] });
  }
  var g = a(66558), k = a(43286), N = a.n(k);
  let $ = [{ key: "email", label: "Email" }, { key: "search", label: "Organic search" }, { key: "direct", label: "Direct" }, { key: "referral", label: "Referral" }, { key: "paid-search", label: "Paid search" }, { key: "social", label: "Paid social" }], w = { na: { email: [3.1, 4.6], search: [3.4, 3.6], direct: [3.9, 3.7], referral: [2.6, 3.2], "paid-search": [2.8, 2.5], social: [1.9, 1.3] }, eu: { email: [2.7, 4.1], search: [3, 3.3], direct: [3.5, 3.4], referral: [2.9, 2.8], "paid-search": [2.2, 2.4], social: [1.6, 1.1] }, apac: { email: [2.2, 3.4], search: [2.5, 2.4], direct: [3.1, 3.3], referral: [1.8, 2.6], "paid-search": [2.6, 2.1], social: [2.3, 1.7] } }, M = [{ value: "na", label: "Americas" }, { value: "eu", label: "Europe" }, { value: "apac", label: "Asia Pacific" }], L = (e2) => $.map((t2) => ({ ...t2, start: w[e2][t2.key][0], end: w[e2][t2.key][1] })), R = { na: L("na"), eu: L("eu"), apac: L("apac") };
  function P() {
    let e2 = (0, s.useId)(), [t2, a2] = (0, s.useState)("na");
    return (0, l.jsxs)("section", { className: N().card, "aria-labelledby": e2, children: [(0, l.jsxs)("div", { className: N().top, children: [(0, l.jsxs)("div", { className: N().heading, children: [(0, l.jsx)("h3", { id: e2, className: N().title, children: "Conversion by channel" }), (0, l.jsx)("p", { className: N().meta, children: "Q1 to Q2 2026" })] }), (0, l.jsx)(g.A, { label: "Region", options: M, value: t2, onValueChange: (e3) => a2(e3) })] }), (0, l.jsx)(b, { data: R[t2], label: `Conversion rate by channel, ${M.find((e3) => e3.value === t2)?.label}`, startLabel: "Q1", endLabel: "Q2", highlightKey: "email", formatValue: (e3) => `${e3.toFixed(1)}%`, formatChange: (e3) => `${e3 >= 0 ? "+" : "\u2212"}${Math.abs(e3).toFixed(1)} pts` })] });
  }
  let E = P;
}

__m(__module,__exports,__require);
}