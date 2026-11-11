function(__module,__exports,__require){
"use strict";
function __m(e, n, t) {
  "use strict";
  t.d(n, { ZT: () => P });
  var a = t(95155), i = t(12115), r = t(80642), s = t(25354), o = t(79196), l = t(18310), c = t(28245), u = t(55809), d = t(92171), m = t(90467), h = t(94088), p = t(36619), _ = t(79267), f = t(12363), b = t(9005), x = t(7770), g = t(30126), y = t.n(g);
  let j = (e2) => `arc-announcement:${e2}`, v = [...x.T.ease.enter], N = [...x.T.ease.standard], w = (e2, n2) => {
    let t2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: t2 * t2, damping: 2 * (1 - n2) * t2, mass: 1 };
  }, k = w(0.46, 0), T = w(0.42, 0), S = w(0.44, 0), $ = { hidden: (e2) => ({ opacity: 0, y: `${70 * e2}%`, filter: `blur(${x.T.blur.soft}px)` }), shown: { opacity: 1, y: "0%", filter: "blur(0px)", transition: { y: k, opacity: { duration: x.T.duration.standard, ease: v }, filter: { duration: x.T.duration.standard, ease: v } } }, gone: (e2) => ({ opacity: 0, y: `${-60 * e2}%`, filter: `blur(${x.T.blur.soft}px)`, transition: { y: k, opacity: { duration: x.T.duration.fast, ease: N }, filter: { duration: x.T.duration.fast, ease: N } } }) }, z = { hidden: { opacity: 0 }, shown: { opacity: 1, transition: { duration: x.T.duration.standard, ease: N } }, gone: { opacity: 0, transition: { duration: x.T.duration.instant, ease: N } } }, C = (e2) => String(e2).padStart(2, "0");
  function E({ char: e2, reduced: n2 }) {
    return (0, a.jsxs)("span", { className: y().digit, children: [(0, a.jsx)("span", { className: y().digitSizer, "aria-hidden": "true", children: "0" }), (0, a.jsx)(r.N, { initial: false, children: (0, a.jsx)(s.PY1.span, { className: y().digitFace, initial: n2 ? { opacity: 0 } : { y: "-70%", opacity: 0 }, animate: { y: "0%", opacity: 1 }, exit: n2 ? { opacity: 0 } : { y: "70%", opacity: 0 }, transition: n2 ? { duration: x.T.duration.instant } : { y: w(0.32, 0), opacity: { duration: x.T.duration.fast, ease: N } }, children: e2 }, e2) })] });
  }
  function M({ to: e2, label: n2, reduced: t2, onEnd: r2 }) {
    let s2, o2 = new Date(e2).getTime(), [l2, c2] = (0, i.useState)(null), u2 = (0, i.useRef)(false), d2 = (0, i.useRef)(r2);
    (0, i.useEffect)(() => {
      d2.current = r2;
    }, [r2]), (0, i.useEffect)(() => {
      let e3 = 0, n3 = () => {
        let t3 = Date.now();
        if (c2(t3), t3 >= o2) {
          u2.current || (u2.current = true, d2.current?.());
          return;
        }
        e3 = window.setTimeout(n3, 1e3 - t3 % 1e3 + 8);
      };
      return e3 = window.setTimeout(n3, 0), () => window.clearTimeout(e3);
    }, [o2]);
    let { d: m2, h: h2, m: p2, s: _2 } = { d: Math.floor((s2 = Math.max(0, Math.floor((null === l2 ? 0 : o2 - l2) / 1e3))) / 86400), h: Math.floor(s2 % 86400 / 3600), m: Math.floor(s2 % 3600 / 60), s: s2 % 60 }, f2 = null === l2, b2 = f2 ? "" : `${m2 ? `${m2} days ` : ""}${h2} hours ${p2} minutes`, x2 = (e3, n3) => e3.split("").map((i2, r3) => (0, a.jsx)(E, { char: f2 ? "0" : i2, reduced: t2 }, `${n3}${e3.length - r3}`));
    return (0, a.jsxs)("span", { className: y().countdown, children: [n2 ? (0, a.jsx)("span", { className: y().countdownLabel, children: n2 }) : null, (0, a.jsxs)("span", { role: "timer", "aria-live": "off", "aria-label": b2, className: y().time, "data-pending": f2 || void 0, children: [m2 ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)("span", { className: y().unit, children: [x2(String(m2), "d"), (0, a.jsx)("span", { className: y().unitMark, "aria-hidden": "true", children: "d" })] }), (0, a.jsx)("span", { className: y().gap, "aria-hidden": "true" })] }) : null, x2(C(h2), "h"), (0, a.jsx)("span", { className: y().sep, "aria-hidden": "true", children: ":" }), x2(C(p2), "m"), (0, a.jsx)("span", { className: y().sep, "aria-hidden": "true", children: ":" }), x2(C(_2), "s")] })] });
  }
  function F({ announcement: e2, direction: n2, reduced: t2, position: r2, total: l2, onSize: c2, onAction: u2, onCountdownEnd: d2 }) {
    let h2 = (0, i.useRef)(null), p2 = (0, o.tF)();
    (0, i.useLayoutEffect)(() => {
      let e3 = h2.current;
      if (!e3 || !p2) return;
      let n3 = () => c2(e3.offsetHeight);
      if (n3(), "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(n3);
      return t3.observe(e3), () => t3.disconnect();
    }, [c2, p2]);
    let { action: _2, countdown: f2 } = e2, b2 = _2 ? _2.href ? (0, a.jsxs)("a", { className: y().cta, href: _2.href, onClick: () => {
      _2.onClick?.(), u2?.(e2);
    }, children: [_2.label, (0, a.jsx)(m.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" })] }) : (0, a.jsxs)("button", { type: "button", className: y().cta, onClick: () => {
      _2.onClick?.(), u2?.(e2);
    }, children: [_2.label, (0, a.jsx)(m.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" })] }) : null;
    return (0, a.jsx)(s.PY1.div, { ref: h2, className: y().face, custom: n2, variants: t2 ? z : $, initial: "hidden", animate: "shown", exit: "gone", role: l2 > 1 ? "group" : void 0, "aria-roledescription": l2 > 1 ? "slide" : void 0, "aria-label": l2 > 1 ? `${r2} of ${l2}` : void 0, inert: !p2 || void 0, children: (0, a.jsxs)("p", { className: y().message, children: [(0, a.jsx)("span", { className: y().text, children: e2.message }), f2 ? (0, a.jsx)(M, { to: f2.to, label: f2.label, reduced: t2, onEnd: () => d2?.(e2) }) : null, b2] }) });
  }
  let I = 2 * Math.PI * 8, P = (0, i.forwardRef)(function({ messages: e2, id: n2, open: t2, defaultOpen: o2 = true, onOpenChange: m2, index: g2, defaultIndex: w2 = 0, onIndexChange: k2, interval: $2 = 6e3, autoPlay: z2 = true, controls: C2 = false, dismissible: E2 = true, tone: M2 = "neutral", onAction: P2, onCountdownEnd: R, label: A = "Announcements", className: L }, D) {
    let W = !!(0, l.I)(), Y = (0, i.useId)(), V = e2.length, [G, H] = (0, i.useState)(o2), [B, O] = (0, i.useState)(false);
    (0, i.useLayoutEffect)(() => {
      if (!n2 || void 0 !== t2) return;
      let e3 = false;
      try {
        e3 = "dismissed" === window.localStorage.getItem(j(n2));
      } catch {
      }
      e3 && O(true);
    }, [n2, t2]);
    let Z = t2 ?? (G && !B), [q, U] = (0, i.useState)(w2), J = V ? ((g2 ?? q) % V + V) % V : 0, [K, Q] = (0, i.useState)(1), X = (0, i.useCallback)((e3) => {
      if (V < 2) return;
      let n3 = ((J + e3) % V + V) % V;
      Q(e3 > 0 ? 1 : -1), void 0 === g2 && U(n3), k2?.(n3);
    }, [J, g2, k2, V]), [ee, en] = (0, i.useState)(false), [et, ea] = (0, i.useState)(false), [ei, er] = (0, i.useState)(false), [es, eo] = (0, i.useState)(false);
    (0, i.useEffect)(() => {
      let e3 = () => eo("hidden" === document.visibilityState);
      return document.addEventListener("visibilitychange", e3), () => document.removeEventListener("visibilitychange", e3);
    }, []);
    let el = z2 && !W && V > 1, ec = el && Z && !ee && !et && !ei && !es, eu = (0, c.d)(0), ed = (0, u.G)(eu, (e3) => I * (1 - e3)), em = (0, i.useRef)(X);
    (0, i.useEffect)(() => {
      em.current = X;
    }, [X]), (0, i.useEffect)(() => {
      eu.jump(0);
    }, [J, eu]), (0, i.useEffect)(() => {
      if (!ec) return;
      let e3 = (0, d.i)(eu, 1, { duration: $2 / 1e3 * (1 - eu.get()), ease: "linear", onComplete: () => {
        e3 = null, em.current(1);
      } });
      return () => e3?.stop();
    }, [ec, J, $2, eu]);
    let eh = (0, c.d)("auto"), ep = (0, i.useRef)(0), e_ = (0, i.useCallback)((e3) => {
      if (0.5 > Math.abs(e3 - ep.current)) return;
      let n3 = 0 === ep.current;
      ep.current = e3, n3 || W ? eh.jump(e3) : (0, d.i)(eh, e3, T);
    }, [eh, W]), ef = e2[J];
    if (!ef) return null;
    let eb = C2 && V > 1, ex = (eb ? 2 + +!!el : 0) + +!!E2;
    return (0, a.jsx)(r.N, { initial: false, children: Z ? (0, a.jsx)(s.PY1.section, { ref: D, className: [y().collapse, L].filter(Boolean).join(" "), "aria-label": A, "aria-roledescription": V > 1 ? "carousel" : void 0, initial: W ? { opacity: 0 } : { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: W ? { opacity: 0, transition: { duration: x.T.duration.fast } } : { height: 0, opacity: 0, transition: { height: S, opacity: { duration: x.T.duration.exit, ease: N } } }, transition: W ? { duration: x.T.duration.fast } : { height: S, opacity: { duration: x.T.duration.standard, ease: v } }, onPointerEnter: (e3) => {
      "mouse" === e3.pointerType && ea(true);
    }, onPointerLeave: () => ea(false), onFocus: () => er(true), onBlur: (e3) => {
      e3.currentTarget.contains(e3.relatedTarget) || er(false);
    }, children: (0, a.jsxs)("div", { className: y().bar, "data-tone": M2, style: { "--controls": ex }, children: [(0, a.jsx)("div", { className: y().side, "aria-hidden": "true" }), (0, a.jsx)(s.PY1.div, { className: y().viewport, style: { height: eh }, id: `${Y}-slides`, "aria-live": ec ? "off" : "polite", "aria-atomic": "false", children: (0, a.jsx)(r.N, { initial: false, custom: K, children: (0, a.jsx)(F, { announcement: ef, direction: K, reduced: W, position: J + 1, total: V, onSize: e_, onAction: P2, onCountdownEnd: R }, ef.id) }) }), (0, a.jsxs)("div", { className: y().controls, children: [eb ? (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)("button", { type: "button", className: y().icon, "aria-label": "Previous announcement", "aria-controls": `${Y}-slides`, onClick: () => X(-1), children: (0, a.jsx)(h.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }) }), el ? (0, a.jsxs)("button", { type: "button", className: y().ring, "aria-label": ee ? "Resume announcements" : "Pause announcements", "aria-pressed": ee, onClick: () => en((e3) => !e3), children: [(0, a.jsxs)("svg", { viewBox: "0 0 20 20", "aria-hidden": "true", children: [(0, a.jsx)("circle", { cx: "10", cy: "10", r: "8", className: y().ringTrack }), (0, a.jsx)(s.PY1.circle, { cx: "10", cy: "10", r: "8", className: y().ringFill, strokeDasharray: I, style: { strokeDashoffset: ed } })] }), (0, a.jsx)("span", { className: y().ringIcon, children: ee ? (0, a.jsx)(p.A, { size: 9, strokeWidth: 2.4, "aria-hidden": "true" }) : (0, a.jsx)(_.A, { size: 9, strokeWidth: 2.4, "aria-hidden": "true" }) })] }) : null, (0, a.jsx)("button", { type: "button", className: y().icon, "aria-label": "Next announcement", "aria-controls": `${Y}-slides`, onClick: () => X(1), children: (0, a.jsx)(f.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }) })] }) : null, E2 ? (0, a.jsx)("button", { type: "button", className: y().icon, "aria-label": "Dismiss", onClick: () => {
      if (n2) try {
        window.localStorage.setItem(j(n2), "dismissed");
      } catch {
      }
      void 0 === t2 && H(false), m2?.(false);
    }, children: (0, a.jsx)(b.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }) }) : null] })] }) }, "bar") : null });
  });
}

__m(__module,__exports,__require);
}