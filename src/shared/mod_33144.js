function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { CountdownDemo: () => P, default: () => R });
  var r = n(95155), s = n(12115), i = n(55809), a = n(25354), o = n(28245), l = n(92171), u = n(18310), c = n(61792), d = n(80642), m = n(7770), f = n(63074), h = n.n(f);
  let { spring: p, stagger: _ } = m.T, y = ["days", "hours", "minutes", "seconds"], g = { days: 86400, hours: 3600, minutes: 60, seconds: 1 }, v = { days: 1 / 0, hours: 24, minutes: 60, seconds: 60 }, w = { days: ["Days", "d", "day"], hours: ["Hours", "h", "hour"], minutes: ["Minutes", "m", "minute"], seconds: ["Seconds", "s", "second"] }, x = () => Date.now();
  function b(e2, t2) {
    let n2 = new Intl.DateTimeFormat("en-US", { timeZone: t2, hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }).formatToParts(new Date(e2)), r2 = (e3) => Number(n2.find((t3) => t3.type === e3)?.value ?? 0);
    return Date.UTC(r2("year"), r2("month") - 1, r2("day"), r2("hour"), r2("minute"), r2("second")) - 1e3 * Math.floor(e2 / 1e3);
  }
  function j(e2, t2) {
    if ("number" == typeof e2) return e2;
    if (e2 instanceof Date) return e2.getTime();
    let n2 = /^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2})(?:\.\d+)?)?)?$/.exec(e2.trim());
    if (!n2) return Date.parse(e2);
    let r2 = Date.UTC(+n2[1], n2[2] - 1, +n2[3], +(n2[4] ?? 0), +(n2[5] ?? 0), +(n2[6] ?? 0));
    if (!t2) return r2;
    let s2 = r2 - b(r2, t2);
    return r2 - b(s2, t2);
  }
  let T = () => () => {
  }, N = (e2) => (document.addEventListener("visibilitychange", e2), () => document.removeEventListener("visibilitychange", e2));
  function E({ position: e2, digit: t2, base: n2 }) {
    let s2 = (0, i.G)(e2, (e3) => ((t2 - e3) % n2 + 1.5 * n2) % n2 - n2 / 2), o2 = (0, i.G)(s2, (e3) => `${e3}em`), l2 = (0, i.G)(s2, (e3) => Math.max(0, 1 - Math.abs(e3))), u2 = (0, i.G)(s2, (e3) => Math.abs(e3) >= 1 ? "hidden" : "visible"), c2 = (0, i.G)(s2, (e3) => 0.02 > Math.abs(e3) || Math.abs(e3) >= 1 ? "none" : `blur(${(Math.abs(e3) * m.T.blur.subtle).toFixed(2)}px)`);
    return (0, r.jsx)(a.PY1.span, { className: h().glyph, style: { y: o2, opacity: l2, filter: c2, visibility: u2 }, children: t2 });
  }
  function M({ digit: e2, base: t2, delay: n2, reduced: i2 }) {
    let u2 = (0, o.d)(0), c2 = (0, s.useRef)({ digit: 0, target: 0, revealed: false });
    return (0, s.useEffect)(() => {
      let r2 = c2.current;
      if (r2.digit === e2) {
        r2.revealed = true;
        return;
      }
      let s2 = (e2 - r2.digit + t2) % t2, a2 = t2 - s2;
      r2.target += a2 <= s2 ? -a2 : s2, r2.digit = e2;
      let o2 = !r2.revealed;
      r2.revealed = true, i2 ? u2.jump(r2.target) : (0, l.i)(u2, r2.target, o2 ? { ...p.smooth, delay: n2 } : p.snappy);
    }, [t2, n2, e2, u2, i2]), (0, r.jsxs)(a.PY1.span, { className: h().wheel, initial: { width: 0, opacity: 0 }, animate: { width: "auto", opacity: 1 }, exit: { width: 0, opacity: 0 }, transition: i2 ? { duration: 0 } : p.morph, children: [(0, r.jsx)("span", { className: h().sizer, children: "0" }), Array.from({ length: t2 }, (e3, n3) => (0, r.jsx)(E, { position: u2, digit: n3, base: t2 }, n3))] });
  }
  function S({ target: e2, timeZone: t2, units: n2 = y, variant: i2 = "large", completeLabel: f2 = "Live now", onComplete: b2, label: E2 = "Time remaining", clock: k2 = x, ref: D2, className: $2 }) {
    let A2 = (0, s.useRef)(null);
    (0, s.useImperativeHandle)(D2, () => A2.current);
    let L2 = (0, s.useSyncExternalStore)(T, () => true, () => false), C2 = !!(0, u.I)() && L2, O2 = j(e2, t2), F2 = Number.isFinite(O2), G2 = n2.length ? [...n2].sort((e3, t3) => g[t3] - g[e3]) : y, I2 = (0, s.useSyncExternalStore)(N, () => "visible" === document.visibilityState, () => true), P2 = (0, c.W)(A2, { amount: 0 }), R2 = I2 && P2 && F2, [z, H] = (0, s.useState)(null), W = (0, s.useRef)(k2);
    (0, s.useLayoutEffect)(() => {
      W.current = k2;
    }), (0, s.useEffect)(() => {
      let e3;
      if (!R2) return;
      let t3 = () => {
        let n3 = W.current();
        H(n3);
        let r2 = O2 - n3;
        r2 > 0 && (e3 = setTimeout(t3, (r2 % 1e3 || 1e3) + 8));
      };
      return e3 = setTimeout(t3, 0), () => clearTimeout(e3);
    }, [O2, R2]), (0, s.useEffect)(() => {
      if (!F2) return;
      let e3 = O2 - W.current();
      if (e3 <= 0) return;
      let t3 = setTimeout(() => H(W.current()), Math.min(2147483647, e3 + 8));
      return () => clearTimeout(t3);
    }, [O2, F2]);
    let Y = null !== z && F2 ? Math.max(0, O2 - z) : null, U = 0 === Y, B = (0, s.useRef)(b2);
    (0, s.useLayoutEffect)(() => {
      B.current = b2;
    });
    let K = (0, s.useRef)(null);
    (0, s.useEffect)(() => {
      if (null !== Y) {
        if (Y > 0) {
          K.current = O2;
          return;
        }
        K.current === O2 && (K.current = null, B.current?.());
      }
    }, [O2, Y]);
    let q = null === Y ? 0 : Math.ceil(Y / 1e3), X = G2.map((e3, t3) => ({ unit: e3, value: 0 === t3 ? Math.floor(q / g[e3]) : Math.floor(q / g[e3]) % v[e3] })), Z = null === Y, J = "compact" === i2, Q = (0, s.useRef)(null), V = (0, o.d)("auto"), ee = (0, o.d)("auto");
    (0, s.useLayoutEffect)(() => {
      let e3 = Q.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = true, n3 = new ResizeObserver(() => {
        let n4 = e3.offsetWidth, r2 = e3.offsetHeight;
        if (t3 || C2) {
          V.jump(n4), ee.jump(r2), t3 = false;
          return;
        }
        (0, l.i)(V, n4, p.morph), (0, l.i)(ee, r2, p.smooth);
      });
      return n3.observe(e3), () => n3.disconnect();
    }, [ee, C2, V]);
    let et = U ? "string" == typeof f2 ? f2 : "Complete" : Z ? "" : X.filter((e3, t3) => e3.value > 0 || t3 === X.length - 1).filter((e3) => q < 60 || "seconds" !== e3.unit).map((e3) => `${e3.value} ${1 === e3.value ? w[e3.unit][2] : `${w[e3.unit][2]}s`}`).join(", "), en = C2 ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: m.T.duration.fast } } : { initial: { opacity: 0, scale: 0.92, filter: `blur(${m.T.blur.soft}px)` }, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, exit: { opacity: 0, scale: 0.92, filter: `blur(${m.T.blur.soft}px)`, transition: { duration: m.T.duration.fast } }, transition: p.morph };
    return (0, r.jsxs)("div", { ref: A2, className: [h().countdown, $2].filter(Boolean).join(" "), "data-variant": i2, "data-complete": U || void 0, "data-pending": Z || void 0, role: "timer", "aria-label": E2, children: [(0, r.jsx)(a.PY1.div, { className: h().shell, style: { width: V, height: ee }, children: (0, r.jsx)("div", { ref: Q, className: h().content, "aria-hidden": "true", children: (0, r.jsx)(d.N, { mode: "popLayout", initial: false, children: U ? (0, r.jsxs)(a.PY1.span, { className: h().done, ...en, children: [(0, r.jsx)("span", { className: h().pulse }), f2] }, "done") : (0, r.jsx)(a.PY1.span, { className: h().units, ...en, children: X.map((e3, t3) => {
      var n3, s2, i3;
      let a2 = String(e3.value).padStart(2, "0"), o2 = (n3 = e3.unit, s2 = 0 === t3, Array.from({ length: i3 = a2.length }, (e4, t4) => t4 !== i3 - 2 || 2 !== i3 || s2 ? 10 : "hours" === n3 ? 3 : 6));
      return (0, r.jsxs)("span", { className: h().unit, children: [!J && t3 > 0 && (0, r.jsx)("span", { className: h().colon, children: ":" }), (0, r.jsxs)("span", { className: h().group, children: [(0, r.jsx)("span", { className: h().number, children: (0, r.jsx)(d.N, { initial: false, children: [...a2].map((n4, s3) => (0, r.jsx)(M, { digit: Number(n4), base: o2[s3], delay: Math.min((2 * t3 + s3) * _.item, 0.3), reduced: C2 }, `${e3.unit}${a2.length - s3}`)) }) }), (0, r.jsx)("span", { className: h().name, children: w[e3.unit][+!!J] })] })] }, e3.unit);
    }) }, "running") }) }) }), (0, r.jsx)("span", { className: h().srOnly, children: et })] });
  }
  var k = n(51288), D = n(12015), $ = n.n(D);
  let A = "America/Los_Angeles", L = new Intl.DateTimeFormat("en-US", { timeZone: A, year: "numeric", month: "2-digit", day: "2-digit", weekday: "short" }), C = new Intl.DateTimeFormat("en-US", { timeZone: A, weekday: "short", month: "short", day: "numeric" }), O = null;
  function F() {
    if (null !== O) return O;
    let e2 = Date.now();
    for (let t2 = 2; t2 < 10; t2++) {
      let n2 = Object.fromEntries(L.formatToParts(new Date(e2 + 864e5 * t2)).map((e3) => [e3.type, e3.value]));
      if ("Tue" === n2.weekday) {
        O = j(`${n2.year}-${n2.month}-${n2.day}T10:00:00`, A);
        break;
      }
    }
    return O ?? e2 + 432e6;
  }
  let G = () => () => {
  }, I = [{ title: "Keynote", offset: 0 }, { title: "Design systems deep dive", offset: 54e5 }, { title: "Live Q&A with the team", offset: 117e5 }];
  function P() {
    let e2 = (0, s.useId)(), t2 = (0, s.useSyncExternalStore)(G, F, () => null), [n2, i2] = (0, s.useState)(null), [a2, o2] = (0, s.useState)(false), l2 = n2 ?? t2;
    return (0, r.jsxs)("section", { className: $().card, "aria-labelledby": e2, children: [(0, r.jsxs)("div", { className: $().head, children: [(0, r.jsx)("h3", { id: e2, className: $().title, children: "Fieldwork 2.0 keynote" }), (0, r.jsx)("p", { className: $().meta, children: null === t2 ? "\xA0" : `${C.format(new Date(t2))} \xB7 10:00 AM PT \xB7 Streamed online` })] }), (0, r.jsx)("div", { className: $().hero, children: null !== l2 && (0, r.jsx)(S, { target: l2, label: "Keynote starts in", completeLabel: "Live now", onComplete: () => o2(true) }) }), (0, r.jsx)("ul", { className: $().sessions, children: I.map((e3) => (0, r.jsxs)("li", { className: $().session, children: [(0, r.jsx)("span", { className: $().sessionTitle, children: e3.title }), null !== l2 && (0, r.jsx)(S, { variant: "compact", target: l2 + e3.offset, label: `${e3.title} starts in`, completeLabel: "Live" })] }, e3.title)) }), (0, r.jsxs)("div", { className: $().actions, children: [(0, r.jsx)("p", { className: $().srOnly, "aria-live": "polite", children: a2 ? "The keynote is live." : n2 ? "Schedule moved ten seconds ahead" : "" }), null === n2 ? (0, r.jsx)(k.$, { variant: "secondary", size: "sm", onClick: () => {
      i2(Date.now() + 10500), o2(false);
    }, children: "Skip to final 10 seconds" }) : (0, r.jsx)(k.$, { variant: "ghost", size: "sm", onClick: () => {
      i2(null), o2(false);
    }, children: "Reset" })] })] });
  }
  let R = P;
}

__m(__module,__exports,__require);
}