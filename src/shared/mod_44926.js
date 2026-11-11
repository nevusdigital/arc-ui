function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { ResizablePanelsDemo: () => N, default: () => C });
  var r = n(95155), a = n(12115), i = n(18310), l = n(6900), s = n(92171), o = n(55809), u = n(25354), c = n(80642), d = n(76721), p = n(78780), f = n(7770), m = n(68822), h = n.n(m);
  let b = (e2, t2, n2) => Math.min(n2, Math.max(t2, e2)), y = (e2) => 44 * e2 * 0.55 / (44 + 0.55 * e2), x = (e2) => e2 - Math.max(0.5 * e2, 40), z = (e2) => {
    let t2 = e2.reduce((e3, t3) => e3 + t3, 0) || 1;
    return e2.map((e3) => e3 / t2 * 100);
  }, g = { opacity: 0, scale: 0.6, filter: `blur(${f.T.blur.subtle}px)` }, v = { opacity: 1, scale: 1, filter: "blur(0px)" }, _ = { ...g, transition: { duration: f.T.duration.fast, ease: [...f.T.ease.standard] } }, w = { ...f.T.spring.snappy, opacity: { duration: f.T.duration.fast, ease: [...f.T.ease.enter] }, filter: { duration: f.T.duration.fast, ease: [...f.T.ease.enter] } };
  function j({ children: e2 }) {
    return (0, r.jsx)(r.Fragment, { children: e2 });
  }
  function S({ label: e2, children: t2, onLayoutChange: n2, className: o2 }) {
    let u2 = a.Children.toArray(t2).filter((e3) => (0, a.isValidElement)(e3)).map((e3) => e3.props), c2 = u2.length, d2 = (0, i.I)() ?? false, p2 = (e3) => !!(e3.collapsible && e3.defaultCollapsed), [m2] = (0, a.useState)(() => u2.map((e3) => (0, l.OQ)(p2(e3) ? 0 : e3.defaultSize))), [g2] = (0, a.useState)(() => u2.map((e3) => (0, l.OQ)(+!p2(e3)))), [v2, _2] = (0, a.useState)(() => u2.map(p2)), [w2, j2] = (0, a.useState)(() => u2.map(() => false)), [k2, T2] = (0, a.useState)(null), [R2, E2] = (0, a.useState)(() => z(u2.map((e3) => p2(e3) ? 0 : e3.defaultSize))), [N2, C2] = (0, a.useState)(0), P = (0, a.useRef)(null), D = (0, a.useRef)([]), $ = (0, a.useRef)(u2.map(() => null)), X = (0, a.useRef)([]), I = (0, a.useRef)(0), L = (0, a.useRef)(null), G = (0, a.useRef)(true), O = (0, a.useRef)(null), B = u2.reduce((e3, t3) => e3 + (t3.minSize ?? 80), 0), W = (e3) => {
      let t3 = u2[e3]?.minSize ?? 80;
      return N2 > 0 && N2 < B ? t3 * N2 / B : t3;
    }, H = (e3) => u2[e3]?.maxSize ?? 1 / 0, K = u2.map((e3, t3) => W(t3)).join();
    function U(e3) {
      if (I.current += 1, X.current.forEach((e4) => e4.stop()), X.current = [], G.current) {
        G.current = false;
        let e4 = D.current.slice(0, c2).map((e5) => e5?.getBoundingClientRect().width ?? 0);
        e4.some((e5, t3) => Math.abs(e5 - m2[t3].get()) > 0.5) && e4.forEach((e5, t3) => m2[t3].jump(e5));
      }
      return e3.some((e4) => !w2[e4]) && j2((t3) => t3.map((t4, n3) => t4 || e3.includes(n3))), m2.map((e4) => e4.get());
    }
    function Y() {
      let e3 = m2.map((e4) => e4.get());
      j2(u2.map(() => false)), E2(z(e3)), n2?.(z(e3));
    }
    function F(e3, t3 = f.T.spring.smooth) {
      let n3 = I.current, r2 = e3.map((e4, t4) => e4 ?? m2[t4].get());
      L.current = r2, E2(z(r2));
      let a2 = e3.flatMap((e4, t4) => null === e4 || 0.01 > Math.abs(e4 - m2[t4].get()) ? [] : [[t4, e4]]), i2 = a2.length, l2 = () => {
        I.current === n3 && Y();
      };
      if (d2 || !i2) {
        a2.forEach(([e4, t4]) => m2[e4].jump(t4)), l2();
        return;
      }
      X.current = a2.map(([e4, n4]) => (0, s.i)(m2[e4], n4, { ...t3, onComplete: () => {
        (i2 -= 1) || l2();
      } }));
    }
    function q(e3, t3, n3) {
      let r2 = t3 + n3, a2 = Math.max(W(e3), r2 - H(e3 + 1)), i2 = Math.min(H(e3), r2 - W(e3 + 1));
      return t3 > 0 && n3 > 0 && (a2 = Math.min(a2, t3), i2 = Math.max(i2, t3)), a2 > i2 && (a2 = i2 = b((a2 + i2) / 2, 0, r2)), { pair: r2, lo: b(a2, 0, r2), hi: b(i2, 0, r2) };
    }
    function J(e3, t3, n3, r2, a2) {
      return u2[e3].collapsible && t3 < x(W(e3)) ? { mode: "before", size: 0 } : u2[e3 + 1].collapsible && n3 - t3 < x(W(e3 + 1)) ? { mode: "after", size: n3 } : { mode: "open", size: t3 < r2 ? r2 - y(r2 - t3) : t3 > a2 ? a2 + y(t3 - a2) : t3 };
    }
    function Q(e3, t3) {
      _2((n3) => n3.map((n4, r2) => r2 === e3 ? "before" === t3 : r2 === e3 + 1 ? "after" === t3 : n4));
    }
    function V(e3, t3, n3, r2) {
      "before" === r2 && t3 > 0 && ($.current[e3] = t3), "after" === r2 && n3 > 0 && ($.current[e3 + 1] = n3);
    }
    function Z(e3) {
      return v2[e3] ? "before" : v2[e3 + 1] ? "after" : "open";
    }
    function ee(e3) {
      let t3 = O.current;
      if (!t3 || t3.pointer !== e3.pointerId) return;
      let n3 = e3.clientX - t3.startX;
      if (!t3.moved) {
        if (2 > Math.abs(n3)) return;
        t3.moved = true, T2(t3.handle);
      }
      let r2 = J(t3.handle, t3.a0 + n3, t3.pair, t3.lo, t3.hi);
      r2.mode !== t3.mode && (t3.mode = r2.mode, t3.catching = true), (function(e4, t4) {
        let [n4, r3] = [m2[e4.handle], m2[e4.handle + 1]];
        if (e4.catching && !d2) if (0.75 > Math.abs(n4.get() - t4)) e4.catching = false, X.current.forEach((e5) => e5.stop()), X.current = [];
        else {
          X.current = [(0, s.i)(n4, t4, f.T.spring.smooth), (0, s.i)(r3, e4.pair - t4, f.T.spring.smooth)];
          return;
        }
        n4.set(t4), r3.set(e4.pair - t4);
      })(t3, r2.size), t3.samples.push([e3.timeStamp, e3.clientX]), t3.samples.length > 16 && t3.samples.shift();
    }
    function et(e3, t3) {
      let n3 = O.current;
      if (!n3 || n3.pointer !== e3.pointerId) return;
      O.current = null, T2(null);
      let { handle: r2, pair: a2, lo: i2, hi: l2 } = n3;
      if (!n3.moved) return void ("open" === n3.startMode || t3 ? Y() : en(r2, n3.startMode));
      let s2 = n3.a0 + e3.clientX - n3.startX, o3 = J(r2, s2 + ((e4, t4 = 0.99) => e4 / 1e3 * t4 / (1 - t4))(t3 ? 0 : (function(e4, t4) {
        let n4 = e4.filter(([e5]) => t4 - e5 <= 90), r3 = n4[0], a3 = n4[n4.length - 1];
        if (!r3 || !a3 || n4.length < 2 || t4 - a3[0] > 50) return 0;
        let [i3, l3] = r3, [s3, o4] = a3;
        return s3 > i3 ? (o4 - l3) / ((s3 - i3) / 1e3) : 0;
      })(n3.samples, e3.timeStamp)), a2, i2, l2), u3 = t3 ? n3.startMode : "open" !== o3.mode ? o3.mode : "open", c3 = "before" === u3 ? 0 : "after" === u3 ? a2 : t3 ? n3.a0 : b(s2, i2, l2);
      V(r2, n3.a0, n3.b0, u3), Q(r2, u3), F(m2.map((e4, t4) => t4 === r2 ? c3 : t4 === r2 + 1 ? a2 - c3 : null));
    }
    function en(e3, t3) {
      let n3 = U([e3, e3 + 1]), { pair: r2, lo: a2, hi: i2 } = q(e3, n3[e3], n3[e3 + 1]), l2 = "before" === t3 ? b($.current[e3] ?? W(e3), a2, i2) : b(r2 - ($.current[e3 + 1] ?? W(e3 + 1)), a2, i2);
      Q(e3, "open"), F(m2.map((t4, n4) => n4 === e3 ? l2 : n4 === e3 + 1 ? r2 - l2 : null));
    }
    function er(e3, t3) {
      let n3 = U([e3, e3 + 1]), r2 = n3[e3] + n3[e3 + 1];
      V(e3, n3[e3], n3[e3 + 1], t3), Q(e3, t3), F(m2.map((n4, a2) => a2 === e3 ? "before" === t3 ? 0 : r2 : a2 === e3 + 1 ? "before" === t3 ? r2 : 0 : null));
    }
    function ea() {
      let e3 = U(u2.map((e4, t4) => t4)).reduce((e4, t4) => e4 + t4, 0), t3 = u2.map((e4) => p2(e4) ? 0 : e4.defaultSize), n3 = [...t3], r2 = t3.map((e4) => 0 === e4);
      for (let a2 = 0; a2 < c2; a2++) {
        let a3 = n3.reduce((e4, t4, n4) => r2[n4] ? e4 + t4 : e4, 0), i2 = t3.reduce((e4, t4, n4) => r2[n4] ? e4 : e4 + t4, 0), l2 = false;
        if (n3.forEach((s2, o3) => {
          if (r2[o3]) return;
          let u3 = i2 ? t3[o3] / i2 * (e3 - a3) : 0, c3 = b(u3, W(o3), H(o3));
          n3[o3] = u3, c3 !== u3 && (n3[o3] = c3, r2[o3] = true, l2 = true);
        }), !l2) break;
      }
      _2(u2.map(p2)), F(n3);
    }
    function ei(e3, t3, n3) {
      Q(e3, "open"), F(m2.map((r2, a2) => a2 === e3 ? t3 : a2 === e3 + 1 ? n3 - t3 : null));
    }
    return (0, a.useEffect)(() => {
      let e3 = K.split(",").map(Number), t3 = m2.map((t4, n3) => t4.on("change", (t5) => g2[n3]?.set(b(t5 / Math.max(1, e3[n3] ?? 80), 0, 1))));
      return () => t3.forEach((e4) => e4());
    }, [m2, g2, K]), (0, a.useEffect)(() => {
      let e3 = P.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => {
        G.current = true, C2(D.current.reduce((e4, t4) => e4 + (t4?.getBoundingClientRect().width ?? 0), 0));
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, r.jsx)("div", { ref: P, className: [h().group, o2].filter(Boolean).join(" "), role: "group", "aria-label": e2, "data-resizing": null !== k2 || void 0, children: u2.map((e3, t3) => (0, r.jsxs)(a.Fragment, { children: [t3 > 0 && (0, r.jsx)(A, { before: u2[t3 - 1], after: e3, share: R2[t3 - 1], available: N2, limits: N2 ? q(t3 - 1, R2[t3 - 1] / 100 * N2, R2[t3] / 100 * N2) : null, mode: v2[t3 - 1] ? "before" : v2[t3] ? "after" : "open", active: k2 === t3 - 1, reduced: d2, onPointerDown: (e4) => (function(e5, t4) {
      if (O.current || "mouse" === t4.pointerType && 0 !== t4.button) return;
      let n3 = U([e5, e5 + 1]), { pair: r2, lo: a2, hi: i2 } = q(e5, n3[e5], n3[e5 + 1]);
      t4.currentTarget.setPointerCapture(t4.pointerId);
      let l2 = Z(e5);
      O.current = { handle: e5, pointer: t4.pointerId, startX: t4.clientX, a0: n3[e5], b0: n3[e5 + 1], pair: r2, lo: a2, hi: i2, mode: l2, startMode: l2, moved: false, catching: false, samples: [[t4.timeStamp, t4.clientX]] };
    })(t3 - 1, e4), onPointerMove: ee, onPointerUp: (e4) => et(e4, false), onPointerCancel: (e4) => et(e4, true), onKeyDown: (e4) => (function(e5, t4) {
      let n3 = O.current;
      if ("Escape" === t4.key && n3) {
        t4.preventDefault(), O.current = null, T2(null), Q(e5, n3.startMode), F(m2.map((t5, r3) => r3 === e5 ? n3.a0 : r3 === e5 + 1 ? n3.b0 : null));
        return;
      }
      if (n3 || !["ArrowLeft", "ArrowRight", "Home", "End", "Enter"].includes(t4.key)) return;
      t4.preventDefault();
      let r2 = Z(e5), a2 = !!u2[e5].collapsible, i2 = !!u2[e5 + 1].collapsible;
      if ("Enter" === t4.key) return void ("open" !== r2 ? en(e5, r2) : a2 ? er(e5, "before") : i2 && er(e5, "after"));
      let l2 = L.current && (m2[e5].isAnimating() || m2[e5 + 1].isAnimating()) ? L.current : null, s2 = U([e5, e5 + 1]), o3 = s2[e5] + s2[e5 + 1], c3 = l2 ? b(l2[e5], 0, o3) : s2[e5], d3 = t4.shiftKey ? 64 : 16, { lo: p3, hi: h2 } = q(e5, c3, o3 - c3);
      if ("ArrowLeft" === t4.key && "after" === r2) return ei(e5, h2, o3);
      if ("ArrowRight" === t4.key && "before" === r2) return ei(e5, p3, o3);
      if ("ArrowLeft" === t4.key && c3 <= p3 + 0.5 && a2 && "open" === r2) return er(e5, "before");
      if ("ArrowRight" === t4.key && c3 >= h2 - 0.5 && i2 && "open" === r2) return er(e5, "after");
      if ("open" !== r2) return;
      let y2 = "Home" === t4.key ? p3 : "End" === t4.key ? h2 : b(c3 + ("ArrowLeft" === t4.key ? -d3 : d3), p3, h2);
      F(m2.map((t5, n4) => n4 === e5 ? y2 : n4 === e5 + 1 ? o3 - y2 : null), t4.key.startsWith("Arrow") ? f.T.spring.snappy : f.T.spring.smooth);
    })(t3 - 1, e4), onDoubleClick: ea }), (0, r.jsx)(M, { config: e3, size: m2[t3], fade: g2[t3], collapsed: v2[t3], free: w2[t3], anchor: 0 === t3 && c2 > 1 ? "end" : "start", minTotal: B, gaps: c2 - 1, paneRef: (e4) => {
      D.current[t3] = e4;
    } })] }, e3.id)) });
  }
  function M({ config: e2, size: t2, fade: n2, collapsed: a2, free: i2, anchor: l2, minTotal: s2, gaps: c2, paneRef: d2 }) {
    let p2 = (0, o.G)(t2, (e3) => Math.max(0, e3)), f2 = e2.minSize ?? 80, m2 = { flexGrow: p2, "--panel-min": `min(${f2}px, (100cqw - ${c2}px) * ${+(f2 / Math.max(1, s2)).toFixed(5)})`, "--panel-max": e2.maxSize ? `${e2.maxSize}px` : "none" };
    return (0, r.jsx)(u.PY1.div, { ref: d2, id: e2.id, className: [h().panel, e2.className].filter(Boolean).join(" "), style: m2, "data-collapsed": a2 || void 0, "data-free": i2 || void 0, "data-anchor": l2, children: (0, r.jsx)(u.PY1.div, { className: h().content, style: { opacity: n2 }, inert: a2, children: e2.children }) });
  }
  function A({ before: e2, after: t2, share: n2, available: a2, limits: i2, mode: l2, active: s2, reduced: o2, onPointerDown: m2, onPointerMove: b2, onPointerUp: y2, onPointerCancel: x2, onKeyDown: z2, onDoubleClick: j2 }) {
    let S2 = Math.round(n2), M2 = i2 && a2 ? Math.round(i2.lo / a2 * 100) : 0, k2 = i2 && a2 ? Math.round(i2.hi / a2 * 100) : 100, T2 = "before" === l2 ? e2.label : "after" === l2 ? t2.label : null;
    return (0, r.jsxs)("div", { role: "separator", tabIndex: 0, "aria-orientation": "vertical", "aria-controls": e2.id, "aria-label": e2.label, "aria-valuenow": S2, "aria-valuemin": Math.min(M2, S2), "aria-valuemax": Math.max(k2, S2), "aria-valuetext": T2 ? `${T2} hidden, press Enter to show` : `${S2}%`, className: h().handle, "data-collapsed": "open" === l2 ? void 0 : l2, "data-active": s2 || void 0, onPointerDown: m2, onPointerMove: b2, onPointerUp: y2, onPointerCancel: x2, onKeyDown: z2, onDoubleClick: j2, children: [(0, r.jsx)("span", { className: h().grip, "aria-hidden": "true" }), (0, r.jsx)(c.N, { initial: false, children: "open" !== l2 && (0, r.jsx)(u.PY1.span, { className: h().restore, "data-side": l2, "aria-hidden": "true", initial: o2 ? { opacity: 0 } : g, animate: v, exit: o2 ? { opacity: 0, transition: { duration: f.T.duration.instant } } : _, transition: o2 ? { duration: f.T.duration.instant } : w, children: "before" === l2 ? (0, r.jsx)(d.A, { size: 14, strokeWidth: 1.75 }) : (0, r.jsx)(p.A, { size: 14, strokeWidth: 1.75 }) }, l2) })] });
  }
  var k = n(50352), T = n.n(k);
  let R = [{ key: "sidebar", label: "Sidebar", defaultSize: 24, minSize: 96, collapsible: true, lines: [70, 52, 64] }, { key: "content", label: "Content", defaultSize: 46, minSize: 140, collapsible: false, lines: [88, 76, 82, 54] }, { key: "details", label: "Details", defaultSize: 30, minSize: 120, collapsible: true, lines: [62, 80, 46] }];
  function E({ label: e2, lines: t2 }) {
    let n2 = (0, a.useRef)(null), [i2, l2] = (0, a.useState)(null);
    return (0, a.useLayoutEffect)(() => {
      let e3 = n2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => l2(Math.round(t4.borderBoxSize?.[0]?.inlineSize ?? e3.offsetWidth)));
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, r.jsxs)("div", { ref: n2, className: T().pane, children: [(0, r.jsxs)("div", { className: T().paneTop, children: [(0, r.jsx)("span", { className: T().label, children: e2 }), (0, r.jsx)("span", { className: T().width, "aria-hidden": "true", children: null === i2 ? "" : `${i2} px` })] }), (0, r.jsx)("div", { className: T().lines, "aria-hidden": "true", children: t2.map((e3, t3) => (0, r.jsx)("span", { className: T().line, style: { width: `${e3}%` } }, t3)) })] });
  }
  function N() {
    let e2 = (0, a.useId)();
    return (0, r.jsx)("figure", { className: T().demo, children: (0, r.jsx)("div", { className: T().window, children: (0, r.jsx)(S, { label: "Three panes", children: R.map((t2) => (0, r.jsx)(j, { id: `${e2}-${t2.key}`, label: t2.label, defaultSize: t2.defaultSize, minSize: t2.minSize, collapsible: t2.collapsible, className: "content" === t2.key ? void 0 : T().side, children: (0, r.jsx)(E, { label: t2.label, lines: t2.lines }) }, t2.key)) }) }) });
  }
  let C = N;
}

__m(__module,__exports,__require);
}