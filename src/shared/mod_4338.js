function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { O: () => M });
  var i = n(95155), a = n(12115), r = n(18310), l = n(28245), s = n(92171), o = n(25354), u = n(80642), c = n(61792), p = n(55809), d = n(7890), h = n(7770), m = n(45386), f = n.n(m);
  let x = { hidden: (e2) => ({ opacity: 0, y: `${0.3 * e2}em`, filter: `blur(${h.T.blur.soft}px)` }), shown: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: h.T.duration.standard, ease: [...h.T.ease.enter] } }, gone: (e2) => ({ opacity: 0, y: `${-0.3 * e2}em`, filter: `blur(${h.T.blur.subtle}px)`, transition: { duration: h.T.duration.fast, ease: [...h.T.ease.standard] } }) }, _ = { hidden: { opacity: 0, y: 0, filter: "blur(0px)" }, shown: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: h.T.duration.instant } }, gone: { opacity: 0, y: 0, filter: "blur(0px)", transition: { duration: h.T.duration.instant } } }, y = (e2) => Number(e2.replace(/,/g, "").replace(/−/g, "-").match(/-?\d+(?:\.\d+)?/)?.[0] ?? NaN), g = new Intl.NumberFormat("en-US"), $ = { duration: 1.75 * h.T.duration.considered, ease: [...h.T.ease.inOut] }, j = { duration: h.T.duration.fast, ease: [...h.T.ease.standard] };
  function k({ text: e2, direction: t2, whole: n2 = false, morph: c2 = false, tone: p2 }) {
    let d2 = !!(0, r.I)(), m2 = (0, a.useRef)(null), g2 = (0, l.d)("auto"), [$2, j2] = (0, a.useState)({ text: e2, direction: 1 });
    $2.text !== e2 && j2({ text: e2, direction: t2 ?? (y(e2) < y($2.text) ? -1 : 1) }), (0, a.useEffect)(() => {
      let e3 = m2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = null, n3 = new ResizeObserver(([n4]) => {
        if (!n4) return;
        let i2 = n4.borderBoxSize?.[0]?.inlineSize ?? e3.offsetWidth;
        null === t3 || t3 === e3.textContent || d2 ? g2.jump(i2) : (0, s.i)(g2, i2, h.T.spring.morph), t3 = e3.textContent;
      });
      return n3.observe(e3), () => n3.disconnect();
    }, [c2, d2, g2]);
    let b2 = !n2 && !/\p{L}/u.test(e2), w2 = d2 ? _ : x, v2 = b2 ? "right" : "left";
    return (0, i.jsxs)(o.PY1.span, { className: f().roll, "data-end": b2 || void 0, "data-whole": n2 || void 0, style: c2 ? { width: g2 } : void 0, children: [c2 && (0, i.jsx)("span", { ref: m2, className: f().sizer, "aria-hidden": "true", children: e2 }), (0, i.jsx)("span", { className: f().track, children: (0, i.jsx)(u.N, { mode: "popLayout", initial: false, custom: $2.direction, anchorX: v2, children: (function(e3, t3) {
      if (!e3) return [];
      if (t3) return [{ slot: "all", key: e3, text: e3 }];
      if (!/\p{L}/u.test(e3)) return [...e3].map((e4, t4, n4) => ({ slot: `n${n4.length - t4}`, key: e4, text: e4 }));
      let n3 = e3.split(/(?<=\s)/);
      return n3.map((e4, t4) => ({ slot: `w${t4}`, key: n3.slice(0, t4 + 1).join(""), text: e4 }));
    })(e2, n2).map((e3) => (0, i.jsx)(o.PY1.span, { className: f().slot, custom: $2.direction, variants: w2, initial: "hidden", animate: "shown", exit: "gone", children: (0, i.jsx)(u.N, { mode: "popLayout", initial: false, custom: $2.direction, anchorX: v2, children: (0, i.jsx)(o.PY1.span, { className: p2 ? `${f().glyph} ${p2}` : f().glyph, custom: $2.direction, variants: w2, initial: "hidden", animate: "shown", exit: "gone", children: e3.text }, `${p2 ?? ""}${e3.key}`) }) }, e3.slot)) }) })] });
  }
  let b = Array.from({ length: 161 }, (e2, t2) => t2 / 160);
  function w(e2, t2) {
    let n2 = 0, i2 = e2.length - 1;
    if (t2 <= e2[n2][0]) return e2[n2][1];
    if (t2 >= e2[i2][0]) return e2[i2][1];
    for (; i2 - n2 > 1; ) {
      let a3 = n2 + i2 >> 1;
      e2[a3][0] < t2 ? n2 = a3 : i2 = a3;
    }
    let [a2, r2] = e2[n2], [l2, s2] = e2[i2];
    return l2 === a2 ? s2 : r2 + (s2 - r2) * (t2 - a2) / (l2 - a2);
  }
  function v(e2, t2, n2, i2) {
    let a2 = (e3) => 5 + (1 - e3) * (n2 - 10), r2 = e2.map(([e3, n3]) => [e3 * t2, a2(n3)]), l2 = r2.map(([e3, t3]) => `${e3.toFixed(2)},${t3.toFixed(2)}`), s2 = i2 * t2, o2 = a2(w(e2, i2));
    return { points: r2, line: l2.join(" "), trail: `M${l2.join("L")}`, fill: `M${l2.join("L")}L${t2},${n2}L0,${n2}Z`, dot: `${s2},${o2} ${s2},${o2}`, cx: s2 };
  }
  function M({ data: e2, label: t2, value: n2, change: u2, tone: m2 = "accent", width: x2 = 160, height: _2 = 52, labels: y2, formatValue: N, area: P = true, interactive: T = true }) {
    let L, S = e2.length > 1 ? e2 : [e2[0] ?? 0, e2[0] ?? 0], R = S.length - 1, z = S.join(","), Y = (0, a.useMemo)(() => (function(e3) {
      let t3 = Math.min(...e3), n3 = Math.max(...e3) - t3, i2 = e3.map((e4) => n3 ? (e4 - t3) / n3 : 0.5), a2 = i2.length - 1, r2 = 1 / a2, l2 = i2.slice(1).map((e4, t4) => (e4 - i2[t4]) / r2), s2 = i2.map((e4, t4) => 0 === t4 || t4 === a2 ? l2[0] : (Math.sign(l2[t4 - 1]) + Math.sign(l2[t4])) * Math.min(Math.abs(l2[t4 - 1]), Math.abs(l2[t4]), Math.abs(l2[t4 - 1] + l2[t4]) / 4) || 0);
      a2 > 1 && (s2[0] = (3 * l2[0] - s2[1]) / 2, s2[a2] = (3 * l2[a2 - 1] - s2[a2 - 1]) / 2);
      let o2 = Math.max(1, Math.min(16, Math.round(128 / a2))), u3 = [];
      for (let e4 = 0; e4 < a2; e4++) for (let t4 = 0; t4 < o2; t4++) {
        let n4 = t4 / o2, a3 = n4 * n4, l3 = a3 * n4, c2 = (2 * l3 - 3 * a3 + 1) * i2[e4] + (l3 - 2 * a3 + n4) * r2 * s2[e4] + (3 * a3 - 2 * l3) * i2[e4 + 1] + (l3 - a3) * r2 * s2[e4 + 1];
        u3.push([(e4 + n4) * r2, Math.min(1, Math.max(0, c2))]);
      }
      return u3.push([1, i2[a2]]), u3;
    })(z.split(",").map(Number)), [z]), E = `${t2}: ${n2 ?? S[R]}. ${u2 ?? ""}`.trim(), O = `sparkline${(0, a.useId)().replace(/[^a-zA-Z0-9_-]/g, "")}`, U = (0, a.useRef)(null), A = (0, a.useRef)(null), C = (0, c.W)(U, { once: true, amount: 0.5 }), D = !!(0, r.I)(), [F, W] = (0, a.useState)({ w: x2, h: _2 }), [B, I] = (0, a.useState)(null), [Q, G] = (0, a.useState)(false), H = null === B ? null : Math.min(B, R), [K, X] = (0, a.useState)({ index: H, direction: 1 });
    K.index !== H && X({ index: H, direction: null === H || null === K.index ? 1 : Math.sign(H - K.index) || 1 });
    let [Z] = (0, a.useState)(() => v(Y, x2, _2, 1)), q = (0, a.useRef)(Y), J = (0, a.useRef)(F), V = (0, l.d)(0), ee = (0, l.d)(1), et = (0, l.d)(Z.line), en = (0, l.d)(Z.trail), ei = (0, l.d)(Z.fill), ea = (0, l.d)(Z.dot), er = (0, l.d)(Z.cx), el = (0, l.d)(Z.cx + 1.25 + 16), es = (0, l.d)(Z.cx + 1.25), eo = (0, l.d)(0), eu = (0, p.G)(V, (e3) => +(e3 > 1e-3)), ec = (0, a.useCallback)(() => {
      let { w: e3, h: t3 } = J.current, n3 = V.get(), i2 = v(q.current, e3, t3, ee.get());
      et.set(i2.line), en.set(i2.trail), ei.set(i2.fill), ea.set(i2.dot), er.set(i2.cx), el.set(i2.cx + 1.25 + 16), es.set(i2.cx + 1.25), eo.set(n3 >= 1 ? e3 + 32 : (function(e4, t4) {
        let n4 = e4.slice(1).map(([t5, n5], i4) => Math.hypot(t5 - e4[i4][0], n5 - e4[i4][1])), i3 = t4 * n4.reduce((e5, t5) => e5 + t5, 0);
        for (let t5 = 0; t5 < n4.length; t5++) {
          let a2 = n4[t5], r2 = e4[t5][0];
          if (i3 <= a2) return r2 + (e4[t5 + 1][0] - r2) * (a2 ? i3 / a2 : 1);
          i3 -= a2;
        }
        return e4[e4.length - 1][0];
      })(i2.points, n3) + 16);
    }, [ee, er, es, ea, V, ei, et, el, eo, en]);
    (0, d.L)(ee, "change", ec), (0, d.L)(V, "change", ec), (0, a.useLayoutEffect)(() => {
      let e3 = A.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => {
        let t4 = e3.clientWidth;
        t4 && W((e4) => 0.5 > Math.abs(e4.w - t4) ? e4 : { w: t4, h: t4 * _2 / x2 });
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [_2, x2]), (0, a.useLayoutEffect)(() => {
      J.current = F, ec();
    }, [F, ec]), (0, a.useEffect)(() => {
      if (D) {
        V.jump(1);
        let e4 = requestAnimationFrame(() => G(true));
        return () => cancelAnimationFrame(e4);
      }
      if (!C) return;
      let e3 = (0, s.i)(V, 1, { ...$, onComplete: () => G(true) });
      return () => e3.stop();
    }, [V, C, D]), (0, a.useEffect)(() => {
      let e3 = q.current;
      if (e3 === Y) return;
      if (D) {
        q.current = Y, ec();
        return;
      }
      let t3 = [.../* @__PURE__ */ new Set([...b, ...Y.map(([e4]) => e4)])].sort((e4, t4) => e4 - t4), n3 = t3.map((t4) => w(e3, t4)), i2 = t3.map((e4) => w(Y, e4)), a2 = (0, s.i)(0, 1, { ...h.T.spring.smooth, onUpdate: (e4) => {
        q.current = t3.map((t4, a3) => [t4, n3[a3] + (i2[a3] - n3[a3]) * e4]), ec();
      }, onComplete: () => {
        q.current = Y, ec();
      } });
      return () => a2.stop();
    }, [ec, D, Y]), (0, a.useEffect)(() => {
      let e3 = null === H ? 1 : H / R;
      if (D) return void ee.jump(e3);
      let t3 = (0, s.i)(ee, e3, h.T.spring.snappy);
      return () => t3.stop();
    }, [ee, H, R, D]);
    let ep = null !== H, ed = (L = H ?? R, N ? N(S[L], L) : g.format(S[L])), eh = y2?.[H ?? R], em = void 0 === n2 ? void 0 : ep ? ed : n2, ef = null === H ? u2 ?? "" : void 0 === n2 ? [ed, eh].filter(Boolean).join(" \xB7 ") : eh ?? `${H + 1} of ${R + 1}`, ex = (e3) => {
      let t3 = A.current?.getBoundingClientRect();
      return t3?.width ? Math.max(0, Math.min(R, Math.round((e3 - t3.left) / t3.width * R))) : R;
    }, e_ = T ? { role: "slider", tabIndex: 0, "aria-label": `${t2}, explore values`, "aria-valuemin": 1, "aria-valuemax": R + 1, "aria-valuenow": (H ?? R) + 1, "aria-valuetext": `${eh ?? (null === H ? "Latest" : `Point ${H + 1} of ${R + 1}`)}: ${ed}`, onPointerDown: (e3) => I(ex(e3.clientX)), onPointerMove: (e3) => {
      ("mouse" === e3.pointerType || e3.buttons) && I(ex(e3.clientX));
    }, onPointerUp: (e3) => {
      "mouse" !== e3.pointerType && I(null);
    }, onPointerLeave: () => I(null), onPointerCancel: () => I(null), onBlur: () => I(null), onKeyDown: (e3) => {
      if ("Escape" === e3.key && ep) {
        e3.preventDefault(), I(null);
        return;
      }
      let t3 = H ?? R, n3 = Math.max(1, Math.round((R + 1) / 6)), i2 = { ArrowLeft: t3 - 1, ArrowDown: t3 - 1, ArrowRight: t3 + 1, ArrowUp: t3 + 1, PageDown: t3 - n3, PageUp: t3 + n3, Home: 0, End: R }[e3.key];
      void 0 !== i2 && (e3.preventDefault(), I(Math.max(0, Math.min(R, i2))));
    } } : {};
    return (0, i.jsxs)("figure", { ref: U, className: f().figure, "aria-label": E, children: [(0, i.jsxs)("figcaption", { className: f().caption, children: [(0, i.jsx)("span", { className: f().label, children: (0, i.jsx)(k, { text: t2, whole: true }) }), void 0 !== em && (0, i.jsx)("strong", { children: (0, i.jsx)(k, { text: em, morph: true }) }), (0, i.jsx)("small", { className: f()[m2], children: (0, i.jsx)(k, { text: ef, direction: ep ? K.direction : void 0, tone: ep ? f().point : void 0, morph: true }) })] }), (0, i.jsx)("div", { ref: A, className: f().plot, "data-interactive": T || void 0, ...e_, children: (0, i.jsxs)("svg", { className: f().chart, viewBox: `0 0 ${F.w} ${F.h}`, "aria-hidden": "true", focusable: "false", children: [(0, i.jsxs)("defs", { children: [(0, i.jsx)("clipPath", { id: `${O}-lit`, clipPathUnits: "userSpaceOnUse", children: (0, i.jsx)(o.PY1.rect, { x: -16, y: -16, width: el, height: F.h + 32 }) }), (0, i.jsx)("clipPath", { id: `${O}-dim`, clipPathUnits: "userSpaceOnUse", children: (0, i.jsx)(o.PY1.rect, { x: es, y: -16, width: F.w + 32, height: F.h + 32 }) }), (0, i.jsx)("clipPath", { id: `${O}-fill`, clipPathUnits: "userSpaceOnUse", children: (0, i.jsx)(o.PY1.rect, { x: -16, y: -16, width: eo, height: F.h + 32 }) })] }), P && (0, i.jsx)(o.PY1.path, { className: `${f().area} ${f()[m2]}`, d: ei, clipPath: `url(#${O}-fill)` }), (0, i.jsx)("line", { className: f().baseline, x1: "0", y1: F.h - 0.5, x2: F.w, y2: F.h - 0.5 }), (0, i.jsx)(o.PY1.path, { className: f().trail, d: en, clipPath: `url(#${O}-dim)`, initial: false, animate: { opacity: ep && Q ? 1 : 0 }, transition: D ? { duration: 0 } : j }), (0, i.jsx)(o.PY1.polyline, { className: [f().line, f()[m2]].join(" "), points: et, clipPath: `url(#${O}-lit)`, style: { pathLength: V, opacity: eu } }), (0, i.jsx)(o.PY1.line, { className: f().cursor, x1: er, x2: er, y1: 0, y2: F.h, initial: false, animate: { opacity: +!!ep }, transition: D ? { duration: 0 } : j }), (0, i.jsx)(o.PY1.polyline, { className: [f().end, f()[m2]].join(" "), points: ea, initial: false, animate: { opacity: +!!Q, strokeWidth: Q ? ep ? 10 : 7 : 0 }, transition: D ? { duration: 0 } : { opacity: j, strokeWidth: h.T.spring.snappy }, fill: "none", strokeLinecap: "round" })] }) })] });
  }
}

__m(__module,__exports,__require);
}