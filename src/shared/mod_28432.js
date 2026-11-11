function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { k: () => j });
  var r = a(95155), n = a(12115), i = a(18310), l = a(28245), s = a(92171), o = a(25354), c = a(80642), u = a(61792), d = a(7770), m = a(300), h = a.n(m);
  let p = [0, 1, 2, 3, 4], y = [...d.T.ease.enter], f = [...d.T.ease.standard], _ = (e2) => Date.parse(`${e2}T00:00:00Z`), v = (e2) => new Date(e2).toISOString().slice(0, 10), x = { one: "contribution", other: "contributions" }, g = (e2, t2) => 1 === e2 ? t2.one : t2.other, b = () => () => {
  };
  function w({ value: e2, locale: t2, reduced: a2 }) {
    let [i2, u2] = (0, n.useState)({ value: e2, direction: 1 });
    i2.value !== e2 && u2({ value: e2, direction: e2 > i2.value ? 1 : -1 });
    let m2 = (0, n.useRef)(null), p2 = (0, l.d)("auto"), _2 = (0, n.useRef)(0), v2 = (0, n.useRef)(e2);
    (0, n.useLayoutEffect)(() => {
      v2.current !== e2 && (v2.current = e2, _2.current = performance.now() + 600);
    }, [e2]), (0, n.useEffect)(() => {
      let e3 = m2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => {
        let t4 = e3.getBoundingClientRect().width;
        a2 || "auto" === p2.get() || performance.now() > _2.current ? p2.jump(t4) : (0, s.i)(p2, t4, d.T.spring.morph);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [a2, p2]);
    let x2 = [...new Intl.NumberFormat(t2).format(e2)], g2 = { from: (e3) => a2 ? { opacity: 0 } : { opacity: 0, y: `${0.3 * e3}em`, filter: `blur(${d.T.blur.soft}px)` }, to: { opacity: 1, y: "0em", filter: "blur(0px)" }, gone: (e3) => a2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: `${-0.3 * e3}em`, filter: `blur(${d.T.blur.subtle}px)`, transition: { duration: d.T.duration.instant, ease: f } } };
    return (0, r.jsx)(o.PY1.span, { className: h().rollingFrame, style: { width: p2 }, "aria-hidden": "true", children: (0, r.jsx)("span", { ref: m2, className: h().rolling, children: x2.map((e3, t3) => {
      let n2 = x2.length - t3;
      return (0, r.jsx)("span", { className: h().place, children: (0, r.jsx)(c.N, { mode: "popLayout", initial: false, custom: i2.direction, children: (0, r.jsx)(o.PY1.span, { className: h().placeChar, custom: i2.direction, variants: g2, initial: "from", animate: "to", exit: "gone", transition: a2 ? { duration: d.T.duration.fast } : { duration: d.T.duration.standard, ease: y, delay: Math.min(0.018 * n2, 0.09) }, children: e3 }, e3) }) }, n2);
    }) }) });
  }
  function T({ text: e2, reduced: t2, children: a2 }) {
    return (0, r.jsx)("span", { className: h().rise, "aria-hidden": "true", children: (0, r.jsx)(c.N, { mode: "popLayout", initial: false, children: (0, r.jsx)(o.PY1.span, { className: h().riseLine, initial: t2 ? { opacity: 0 } : { opacity: 0, y: "0.3em", filter: `blur(${d.T.blur.soft}px)` }, animate: { opacity: 1, y: "0em", filter: "blur(0px)" }, exit: t2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: "-0.3em", filter: `blur(${d.T.blur.subtle}px)`, transition: { duration: d.T.duration.instant, ease: f } }, transition: { duration: t2 ? d.T.duration.fast : d.T.duration.standard, ease: y }, children: a2 ?? e2 }, e2) }) });
  }
  function j({ days: e2, label: t2, period: a2, unit: m2 = x, thresholds: $, weekStartsOn: N = 0, selectedDate: k = null, onSelectDate: M, actions: L, locale: D = "en-US", className: S }) {
    let C, E, R = (C = (0, n.useSyncExternalStore)(b, () => true, () => false), E = (0, i.I)(), C && !!E), I = (0, n.useId)(), U = (0, n.useMemo)(() => ({ one: m2.one, other: m2.other }), [m2.one, m2.other]), A = (0, n.useRef)(null), O = (0, n.useRef)(null), P = (0, n.useRef)(null), F = (0, n.useRef)(null), B = (0, n.useRef)(null), Y = (0, n.useRef)(null), W = (0, u.W)(O, { once: true, amount: 0.35 }), q = (0, n.useMemo)(() => (function(e3, t3, a3, r2) {
      let n2 = e3.map((e4) => _(e4.date)).filter(Number.isFinite), i2 = n2.length ? Math.min(...n2) : _("2025-01-01"), l2 = n2.length ? Math.round((Math.max(...n2) - i2) / 864e5) + 1 : 0, s2 = Array(l2).fill(0);
      e3.forEach((e4) => {
        let t4 = Math.round((_(e4.date) - i2) / 864e5);
        t4 >= 0 && t4 < l2 && (s2[t4] += Math.max(0, e4.count));
      });
      let o2 = s2.reduce((e4, t4) => Math.max(e4, t4), 0), c2 = a3 ?? [Math.max(1, Math.ceil(0.25 * o2)), Math.max(2, Math.ceil(0.5 * o2)), Math.max(3, Math.ceil(0.75 * o2))], u2 = s2.map((e4) => e4 <= 0 ? 0 : e4 <= c2[0] ? 1 : e4 <= c2[1] ? 2 : e4 <= c2[2] ? 3 : 4), d2 = (new Date(i2).getUTCDay() - t3 + 7) % 7, m3 = Math.ceil((d2 + l2) / 7), h2 = new Intl.DateTimeFormat(r2, { month: "short", timeZone: "UTC" }), p2 = [];
      for (let e4 = 0; e4 < l2; e4++) {
        let t4 = new Date(i2 + 864e5 * e4);
        (0 === e4 || 1 === t4.getUTCDate()) && p2.push({ month: 12 * t4.getUTCFullYear() + t4.getUTCMonth(), col: Math.floor((d2 + e4) / 7), label: h2.format(t4) });
      }
      p2.length > 1 && p2[1].col - p2[0].col < 3 && p2.shift();
      let y2 = [0, 0, 0, 0, 0];
      return u2.forEach((e4) => y2[e4]++), { start: i2, length: l2, lead: d2, weeks: m3, total: s2.reduce((e4, t4) => e4 + t4, 0), counts: s2, levels: u2, thresholds: c2, months: p2, perLevel: y2 };
    })(e2, N, $, D), [e2, N, $, D]), H = (0, n.useMemo)(() => ({ long: new Intl.DateTimeFormat(D, { weekday: "long", month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }), short: new Intl.DateTimeFormat(D, { weekday: "short", month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }), weekday: new Intl.DateTimeFormat(D, { weekday: "short", timeZone: "UTC" }), number: new Intl.NumberFormat(D) }), [D]), [Z, z] = (0, n.useState)({ start: q.start, direction: 1 });
    Z.start !== q.start && z({ start: q.start, direction: q.start > Z.start ? 1 : -1 });
    let [K, Q] = (0, n.useState)("hidden");
    (0, n.useEffect)(() => {
      if ("hidden" !== K || !(W || R)) return;
      let e3 = requestAnimationFrame(() => Q(R ? "done" : "revealing"));
      return () => cancelAnimationFrame(e3);
    }, [W, R, K]), (0, n.useEffect)(() => {
      if ("revealing" !== K) return;
      let e3 = window.setTimeout(() => Q("done"), 1120);
      return () => window.clearTimeout(e3);
    }, [K]);
    let V = k ? Math.round((_(k) - q.start) / 864e5) : -1, X = V >= 0 && V < q.length, [G, J] = (0, n.useState)(null), ee = null !== G && G < q.length ? G : X ? V : q.length - 1, [et, ea] = (0, n.useState)(null), [er, en] = (0, n.useState)(null), [ei, el] = (0, n.useState)(0), es = (0, n.useRef)(0), eo = et ?? er, ec = (e3) => {
      window.clearTimeout(es.current), null !== e3 ? ea(e3) : es.current = window.setTimeout(() => ea(null), 90);
    };
    (0, n.useEffect)(() => () => window.clearTimeout(es.current), []);
    let [eu, ed] = (0, n.useState)(null), [em, eh] = (0, n.useState)(false), [ep, ey] = (0, n.useState)("instant"), ef = (0, n.useRef)(false), e_ = (0, n.useRef)(0), ev = (0, l.d)(0), ex = (0, l.d)(0), eg = (0, l.d)("auto");
    function eb(e3, t3) {
      let a3 = q.counts[e3], r2 = new Date(q.start + 864e5 * e3);
      return { key: `day-${v(r2.getTime())}`, primary: a3 ? `${H.number.format(a3)} ${g(a3, U)}` : `No ${U.other}`, secondary: H.short.format(r2), value: a3, anchor: t3 };
    }
    let [ew, eT, ej] = q.thresholds, e$ = [`no ${U.other}`, 1 === ew ? `1 ${U.one}` : `1 to ${ew} ${U.other}`, `${ew + 1} to ${eT} ${U.other}`, `${eT + 1} to ${ej} ${U.other}`, `${ej + 1} or more ${U.other}`], eN = [`no ${U.other}`, 1 === ew ? `1 ${U.one}` : `1\u2013${ew} ${U.other}`, `${ew + 1}\u2013${eT} ${U.other}`, `${eT + 1}\u2013${ej} ${U.other}`, `${ej + 1}+ ${U.other}`], ek = null === eo ? "" : `${H.number.format(q.perLevel[eo])} ${1 === q.perLevel[eo] ? "day" : "days"}`, eM = null === eo ? "" : `${ek} with ${eN[eo]}`;
    function eL(e3) {
      window.clearTimeout(e_.current), ey(eu && ef.current ? Math.sign(e3.value - eu.value) : "instant"), ed(e3), eh(true);
    }
    function eD(e3 = 110) {
      window.clearTimeout(e_.current), e_.current = window.setTimeout(() => eh(false), e3);
    }
    (0, n.useEffect)(() => () => window.clearTimeout(e_.current), []), (0, n.useLayoutEffect)(() => {
      let e3 = A.current, t3 = Y.current;
      if (!eu || !e3 || !t3) return;
      let a3 = (a4) => {
        let r3 = e3.getBoundingClientRect(), n3 = eu.anchor.getBoundingClientRect(), i2 = Math.ceil(t3.getBoundingClientRect().width), l2 = i2 / 2 + 13, o2 = Math.min(Math.max(n3.left - r3.left + n3.width / 2, l2 + 2), r3.width - l2 - 2), c2 = n3.top - r3.top;
        a4 ? ((0, s.i)(ev, o2, d.T.spring.snappy), (0, s.i)(ex, c2, d.T.spring.snappy), (0, s.i)(eg, i2, d.T.spring.morph)) : (ev.jump(o2), ex.jump(c2), eg.jump(i2));
      };
      if (a3(em && ef.current && !R), ef.current = em, !em) return;
      let r2 = F.current, n2 = () => a3(false);
      return r2?.addEventListener("scroll", n2, { passive: true }), () => r2?.removeEventListener("scroll", n2);
    }, [eu, em, R, ev, ex, eg]);
    let eS = (e3) => {
      let t3 = e3?.closest("[data-index]");
      return t3 && P.current?.contains(t3) ? { cell: t3, index: Number(t3.dataset.index) } : null;
    }, eC = X && "hidden" !== K, eE = (0, n.useRef)(eC);
    (0, n.useLayoutEffect)(() => {
      let e3 = B.current;
      e3 && eC && !eE.current && (e3.style.transitionProperty = "opacity", e3.offsetWidth, e3.style.transitionProperty = ""), eE.current = eC;
    }, [eC]);
    let eR = Math.max(1, q.weeks - 1 + 6), eI = Math.min(12, 420 / eR), eU = (0, n.useMemo)(() => Array.from({ length: 7 }, (e3, t3) => (0, r.jsx)("div", { role: "row", className: h().row, children: Array.from({ length: q.weeks }, (e4, a3) => {
      let n2 = 7 * a3 + t3 - q.lead, i2 = n2 >= 0 && n2 < q.length, l2 = { "--wave": `${Math.round((a3 + t3) * eI)}ms`, "--wave-back": `${Math.round((eR - a3 - t3) * eI)}ms` };
      if (!i2) return (0, r.jsx)("span", { className: h().cell, "data-empty": "", style: l2, "aria-hidden": "true" }, a3);
      let s2 = q.counts[n2], o2 = new Date(q.start + 864e5 * n2);
      return (0, r.jsx)("span", { role: "gridcell", className: h().cell, style: l2, "data-index": n2, "data-level": q.levels[n2], tabIndex: n2 === ee ? 0 : -1, "aria-selected": M ? n2 === V : void 0, "aria-label": `${s2 ? H.number.format(s2) : "No"} ${g(s2, U)}, ${H.long.format(o2)}`, onClick: () => M?.(v(o2.getTime())) }, a3);
    }) }, t3)), [q, eI, eR, ee, V, H, U, M]), eA = (0, n.useMemo)(() => Array.from({ length: 7 }, (e3, t3) => {
      let a3 = (t3 + N) % 7;
      return a3 % 2 == 1 ? H.weekday.format(new Date((3 + a3) * 864e5)) : "";
    }), [H, N]), eO = X ? Math.floor((V + q.lead) / 7) : 0, eP = X ? (V + q.lead) % 7 : 0, eF = `${H.number.format(q.total)} ${g(q.total, U)} in ${a2}`;
    return (0, r.jsxs)("div", { ref: A, className: [h().root, S].filter(Boolean).join(" "), children: [(0, r.jsxs)("div", { className: h().header, children: [(0, r.jsxs)("p", { className: h().summary, children: [(0, r.jsxs)("span", { className: h().total, children: [(0, r.jsx)(w, { value: q.total, locale: D, reduced: R }), " ", g(q.total, U)] }), " ", (0, r.jsxs)("span", { className: h().period, children: ["in ", (0, r.jsx)(T, { text: a2, reduced: R })] }), (0, r.jsx)("span", { className: h().srOnly, role: "status", children: eF })] }), L && (0, r.jsx)("div", { className: h().actions, children: L })] }), (0, r.jsx)("div", { ref: F, className: h().scroller, children: (0, r.jsxs)("div", { className: h().canvas, style: { "--weeks": q.weeks }, children: [(0, r.jsx)("div", { className: h().months, "aria-hidden": "true", children: q.months.map((e3, t3) => (0, r.jsx)("span", { className: h().month, style: { "--col": e3.col }, children: e3.label }, `${e3.month % 12}-${+(q.months.findIndex((t4) => t4.month % 12 == e3.month % 12) !== t3)}`)) }), (0, r.jsx)("div", { className: h().weekdays, "aria-hidden": "true", children: eA.map((e3, t3) => (0, r.jsx)("span", { className: h().weekday, children: e3 }, t3)) }), (0, r.jsxs)("div", { ref: O, className: h().plot, children: [(0, r.jsx)("div", { ref: P, role: "grid", "aria-label": t2, "aria-readonly": "true", "aria-describedby": `${I}-legend`, className: h().grid, "data-reveal": K, "data-direction": Z.direction < 0 ? "back" : void 0, "data-highlight": eo ?? void 0, onPointerOver: function(e3) {
      let t3 = eS(e3.target);
      t3 && eL(eb(t3.index, t3.cell));
    }, onPointerLeave: function(e3) {
      let t3 = eS(document.activeElement);
      t3?.cell.matches(":focus-visible") ? eL(eb(t3.index, t3.cell)) : eD("touch" === e3.pointerType ? 2400 : 110);
    }, onFocus: function(e3) {
      let t3 = eS(e3.target);
      t3 && (J(t3.index), eL(eb(t3.index, t3.cell)));
    }, onBlur: function(e3) {
      P.current?.contains(e3.relatedTarget) || eD(0);
    }, onKeyDown: function(e3) {
      let t3 = eS(e3.target);
      if (!t3) return;
      let a3 = { ArrowUp: t3.index - 1, ArrowDown: t3.index + 1, ArrowLeft: t3.index - 7, ArrowRight: t3.index + 7, Home: 0, End: q.length - 1 };
      if (e3.key in a3) {
        let t4;
        e3.preventDefault(), t4 = Math.min(Math.max(a3[e3.key], 0), q.length - 1), P.current?.querySelector(`[data-index="${t4}"]`)?.focus();
      } else "Enter" === e3.key || " " === e3.key ? (e3.preventDefault(), M?.(v(q.start + 864e5 * t3.index))) : "Escape" === e3.key && em && (e3.preventDefault(), eh(false));
    }, children: eU }), (0, r.jsx)("span", { ref: B, className: h().ring, "data-shown": eC || void 0, style: { "--col": eO, "--row": eP }, "aria-hidden": "true" })] })] }) }), (0, r.jsxs)("div", { className: h().legend, children: [(0, r.jsxs)("span", { id: `${I}-legend`, className: h().srOnly, children: ["Darker squares mean more ", U.other, ". Levels: ", e$.join(", "), "."] }), (0, r.jsxs)("span", { className: h().caption, "aria-live": "polite", children: [(0, r.jsx)(T, { text: eM, reduced: R, children: eM && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)("span", { className: h().captionLong, children: eM }), (0, r.jsx)("span", { className: h().captionShort, children: ek })] }) }), (0, r.jsx)("span", { className: h().srOnly, children: eM })] }), (0, r.jsxs)("span", { className: h().scale, children: [(0, r.jsx)("span", { className: h().legendText, "aria-hidden": "true", children: "Less" }), (0, r.jsx)("div", { className: h().swatches, role: "group", "aria-label": "Highlight days by level", onKeyDown: function(e3) {
      let t3 = { ArrowLeft: ei - 1, ArrowRight: ei + 1, Home: 0, End: 4 };
      if ("Escape" === e3.key) return void ec(null);
      if (!(e3.key in t3)) return;
      e3.preventDefault();
      let a3 = Math.min(Math.max(t3[e3.key], 0), 4);
      A.current?.querySelector(`[data-level-key="${a3}"]`)?.focus();
    }, children: p.map((e3) => (0, r.jsx)("button", { type: "button", className: h().swatch, "data-level-key": e3, "data-level": e3, tabIndex: e3 === ei ? 0 : -1, "aria-pressed": er === e3, "aria-label": `Highlight days with ${e$[e3]}`, onClick: () => en((t3) => t3 === e3 ? null : e3), onPointerEnter: () => ec(e3), onPointerLeave: () => ec(null), onFocus: () => {
      el(e3), ec(e3);
    }, onBlur: () => ec(null) }, e3)) }), (0, r.jsx)("span", { className: h().legendText, "aria-hidden": "true", children: "More" })] })] }), (0, r.jsx)(o.PY1.div, { className: h().tip, style: { x: ev, y: ex }, "aria-hidden": "true", children: (0, r.jsx)(o.PY1.div, { className: h().bubble, style: { x: "-50%" }, initial: false, animate: em && eu ? { opacity: 1, scale: 1 } : { opacity: 0, scale: R ? 1 : 0.96 }, transition: R ? { duration: em ? d.T.duration.fast : d.T.duration.instant } : em ? { ...d.T.spring.snappy, opacity: { duration: d.T.duration.fast, ease: y } } : { duration: d.T.duration.instant, ease: f }, children: (0, r.jsxs)(o.PY1.span, { className: h().tipBody, style: { width: eg }, children: [(0, r.jsxs)("span", { ref: Y, className: h().tipMeasure, children: [(0, r.jsx)("span", { className: h().tipPrimary, children: eu?.primary }), (0, r.jsx)("span", { className: h().tipSecondary, children: eu?.secondary })] }), (0, r.jsx)(c.N, { mode: "popLayout", initial: false, custom: ep, children: eu && (0, r.jsxs)(o.PY1.span, { className: h().tipLines, custom: ep, variants: { from: (e3) => "instant" === e3 ? { opacity: 1, y: "0em", filter: "blur(0px)" } : R ? { opacity: 0 } : { opacity: 0, y: `${0.3 * (e3 || 1)}em`, filter: `blur(${e3 ? d.T.blur.soft : d.T.blur.subtle}px)` }, to: { opacity: 1, y: "0em", filter: "blur(0px)" }, gone: (e3) => "instant" === e3 || R ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: `${-0.3 * (e3 || 1)}em`, filter: `blur(${d.T.blur.subtle}px)`, transition: { duration: d.T.duration.instant, ease: f } } }, initial: "from", animate: "to", exit: "gone", transition: { duration: R ? d.T.duration.fast : d.T.duration.standard, ease: y }, children: [(0, r.jsx)("span", { className: h().tipPrimary, children: eu.primary }), (0, r.jsx)("span", { className: h().tipSecondary, children: eu.secondary })] }, eu.key) })] }) }) })] });
  }
}

__m(__module,__exports,__require);
}