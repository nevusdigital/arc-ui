function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { K: () => j });
  var i = a(95155), n = a(12115), r = a(18310), s = a(80642), l = a(25354), o = a(12363), d = a(7770), c = a(33562), m = a.n(c);
  let u = [...d.T.ease.enter], h = [...d.T.ease.standard], p = () => () => {
  }, y = (0, n.createContext)(null);
  function g({ text: e2, reduced: t2, direction: a2 = 1 }) {
    return (0, i.jsx)("span", { className: m().rise, "aria-hidden": "true", children: (0, i.jsx)(s.N, { mode: "popLayout", initial: false, custom: a2, children: (0, i.jsx)(l.PY1.span, { className: m().riseLine, custom: a2, variants: { from: (e3) => t2 ? { opacity: 0 } : { opacity: 0, y: `${0.3 * e3}em`, filter: `blur(${d.T.blur.soft}px)` }, to: { opacity: 1, y: "0em", filter: "blur(0px)" }, gone: (e3) => t2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: `${-0.3 * e3}em`, filter: `blur(${d.T.blur.subtle}px)`, transition: { duration: d.T.duration.fast, ease: h } } }, initial: "from", animate: "to", exit: "gone", transition: { duration: t2 ? d.T.duration.instant : d.T.duration.standard, ease: u }, children: e2 }, e2) }) });
  }
  function f({ value: e2, reduced: t2 }) {
    let [a2, r2] = (0, n.useState)({ value: e2, direction: 1 });
    a2.value !== e2 && r2({ value: e2, direction: e2 > a2.value ? 1 : -1 });
    let s2 = [...String(e2)];
    return (0, i.jsx)("span", { className: m().rolling, "aria-hidden": "true", children: s2.map((e3, n2) => (0, i.jsx)("span", { className: m().place, children: (0, i.jsx)(g, { text: e3, reduced: t2, direction: a2.direction }) }, s2.length - n2)) });
  }
  function x(e2, t2) {
    let a2 = new Intl.DateTimeFormat("en-CA", { timeZone: t2, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date(e2)), i2 = (e3) => a2.find((t3) => t3.type === e3)?.value ?? "";
    return `${i2("year")}-${i2("month")}-${i2("day")}`;
  }
  function _({ id: e2, fresh: t2, reduced: a2, children: r2 }) {
    let [s2, o2] = (0, n.useState)(t2);
    return (0, i.jsx)(l.PY1.section, { className: m().group, "aria-labelledby": e2, "data-entering": s2 || void 0, initial: !!t2 && { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0, transition: { duration: a2 ? d.T.duration.instant : d.T.duration.exit, ease: h } }, transition: a2 ? { duration: 0.15 } : { height: d.T.spring.smooth, opacity: { duration: d.T.duration.standard, ease: u } }, onAnimationComplete: () => o2(false), children: r2 });
  }
  function v({ row: e2, last: t2, expanded: a2, onToggle: r2, timeLabel: c2, timeFull: p2 }) {
    let f2 = (0, n.useContext)(y), { reduced: x2 } = f2, _2 = (0, n.useId)(), [j2, w] = (0, n.useState)(null), N = f2.fresh.has(e2.id), [b, T] = (0, n.useState)(N), k = null !== j2, S = (j2 ?? 0) + 0.12 * !!N, D = x2 ? { duration: 0, opacity: { duration: 0.15 } } : { ...d.T.spring.morph, visualDuration: 0.36, bounce: 0, delay: S, opacity: { duration: d.T.duration.fast, ease: u, delay: S } }, A = x2 ? { duration: 0 } : { ...d.T.spring.smooth, visualDuration: 0.34, delay: S + 0.1 }, $ = e2.avatar ? void 0 : e2.tone ?? "neutral", M = e2.detail ? "button" : "div";
    return (0, i.jsxs)(l.PY1.li, { className: m().item, "data-entering": b || void 0, initial: !!N && { height: 0 }, animate: { height: "auto" }, exit: { height: 0, opacity: 0, transition: x2 ? { duration: 0.1 } : { height: { ...d.T.spring.smooth, visualDuration: 0.3 }, opacity: { duration: 0.12 } } }, transition: x2 ? { duration: 0 } : d.T.spring.smooth, onAnimationComplete: () => T(false), onViewportEnter: () => w((e3) => e3 ?? f2.schedule()), viewport: { once: true, amount: 0.2 }, children: [(0, i.jsx)(l.PY1.span, { className: m().marker, "data-tone": $, "aria-hidden": "true", initial: { scale: 0.4, opacity: 0 }, animate: k ? { scale: 1, opacity: 1 } : void 0, transition: D, children: e2.avatar ? (0, i.jsx)("img", { src: e2.avatar, alt: "", width: 28, height: 28, decoding: "async" }) : e2.icon }), !t2 && (0, i.jsx)(l.PY1.span, { className: m().segment, "aria-hidden": "true", initial: { scaleY: 0 }, animate: k ? { scaleY: 1 } : void 0, transition: A }), (0, i.jsxs)(l.PY1.div, { className: m().content, initial: !!N && (x2 ? { opacity: 0 } : { opacity: 0, y: -10, filter: `blur(${d.T.blur.soft}px)` }), animate: { opacity: 1, y: 0, filter: "blur(0px)" }, transition: x2 ? { duration: 0.15 } : { y: d.T.spring.smooth, opacity: { duration: d.T.duration.standard, ease: u, delay: 0.05 }, filter: { duration: d.T.duration.standard, ease: u, delay: 0.05 } }, children: [(0, i.jsxs)(M, { className: m().trigger, ...e2.detail ? { type: "button", "data-timeline-trigger": "", "aria-expanded": a2, "aria-controls": a2 ? _2 : void 0, onClick: r2 } : {}, children: [(0, i.jsxs)("span", { className: m().text, children: [(0, i.jsxs)("span", { className: m().title, children: [e2.actor && (0, i.jsx)("span", { className: m().actor, children: e2.actor }), e2.actor ? " " : "", e2.title] }), e2.meta && (0, i.jsx)("span", { className: m().meta, children: e2.meta })] }), (0, i.jsxs)("time", { className: m().time, dateTime: new Date(e2.time).toISOString(), title: p2, children: [(0, i.jsx)(g, { text: c2, reduced: x2 }), (0, i.jsx)("span", { className: m().srOnly, children: p2 })] }), e2.detail && (0, i.jsx)(l.PY1.span, { className: m().chevron, "aria-hidden": "true", initial: false, animate: { rotate: 180 * !!a2 }, transition: x2 ? { duration: 0 } : d.T.spring.snappy, children: (0, i.jsx)(o.A, { size: 16, strokeWidth: 1.75 }) })] }), (0, i.jsx)(s.N, { initial: false, children: a2 && e2.detail && (0, i.jsx)(l.PY1.div, { id: _2, className: m().detail, initial: { height: 0 }, animate: { height: "auto" }, exit: { height: 0, transition: x2 ? { duration: 0 } : { ...d.T.spring.smooth, visualDuration: 0.28 } }, transition: x2 ? { duration: 0 } : d.T.spring.smooth, children: (0, i.jsx)(l.PY1.div, { className: m().detailInner, initial: x2 ? { opacity: 0 } : { opacity: 0, y: -4, filter: `blur(${d.T.blur.soft}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: { opacity: 0, transition: { duration: d.T.duration.instant, ease: h } }, transition: x2 ? { duration: 0.15 } : { duration: d.T.duration.standard, ease: u, delay: 0.06 }, children: e2.detail }) }, "detail") })] })] });
  }
  function j({ events: e2, now: t2, label: a2, timeZone: l2 = "UTC", locale: o2 = "en-US", maxHeight: d2, scrollToNew: c2 = true, defaultExpanded: u2 = [], headingLevel: h2 = 3, className: g2 }) {
    let w, N, b = (w = (0, n.useSyncExternalStore)(p, () => true, () => false), N = (0, r.I)(), w && !!N), T = (0, n.useId)(), k = (0, n.useRef)(null), [S, D] = (0, n.useState)(() => new Set(u2)), A = e2.map((e3) => e3.id).join("|"), [$, M] = (0, n.useState)(() => ({ ids: A, set: new Set(e2.map((e3) => e3.id)), fresh: /* @__PURE__ */ new Set(), announcement: "" }));
    if ($.ids !== A) {
      let t3 = e2.filter((e3) => !$.set.has(e3.id));
      M({ ids: A, set: new Set(e2.map((e3) => e3.id)), fresh: /* @__PURE__ */ new Set([...$.fresh, ...t3.map((e3) => e3.id)]), announcement: t3.length ? `New update: ${t3.map((e3) => [e3.actor, e3.title].filter(Boolean).join(" ")).join(". ")}` : $.announcement });
    }
    let C = (0, n.useRef)(null), P = void 0 !== d2;
    (0, n.useEffect)(() => {
      let e3 = k.current, t3 = C.current;
      if (!P || !e3 || !t3 || "u" < typeof ResizeObserver) return;
      let a3 = () => {
        e3.scrollHeight - e3.clientHeight - e3.scrollTop > 2 ? e3.dataset.more = "" : delete e3.dataset.more;
      };
      a3(), e3.addEventListener("scroll", a3, { passive: true });
      let i2 = new ResizeObserver(a3);
      return i2.observe(e3), i2.observe(t3), () => {
        e3.removeEventListener("scroll", a3), i2.disconnect();
      };
    }, [P]);
    let I = e2.reduce((e3, t3) => !e3 || new Date(t3.at).getTime() > new Date(e3.at).getTime() ? t3 : e3, null)?.id;
    (0, n.useEffect)(() => {
      let e3 = k.current;
      c2 && e3 && !(e3.scrollTop < 1) && e3.scrollTo({ top: 0, behavior: b ? "auto" : "smooth" });
    }, [I, c2, b]);
    let [E] = (0, n.useState)(() => new Set(e2.map((e3) => x(new Date(e3.at).getTime(), l2)))), Y = (0, n.useMemo)(() => {
      let a3 = x(t2, l2), i2 = x(t2 - 864e5, l2), n2 = new Intl.DateTimeFormat(o2, { weekday: "long", month: "long", day: "numeric", timeZone: l2 }), r2 = /* @__PURE__ */ new Map();
      return [...e2].map((e3) => ({ ...e3, time: new Date(e3.at).getTime() })).sort((e3, t3) => t3.time - e3.time).forEach((e3) => {
        let t3 = x(e3.time, l2);
        r2.set(t3, [...r2.get(t3) ?? [], { ...e3, day: t3 }]);
      }), [...r2].map(([e3, t3]) => ({ day: e3, rows: t3, label: e3 === a3 ? "Today" : e3 === i2 ? "Yesterday" : n2.format(new Date(t3[0].time)) }));
    }, [e2, t2, l2, o2]), z = (0, n.useMemo)(() => ({ clock: new Intl.DateTimeFormat(o2, { hour: "numeric", minute: "2-digit", timeZone: l2 }), full: new Intl.DateTimeFormat(o2, { weekday: "long", month: "long", day: "numeric", hour: "numeric", minute: "2-digit", timeZone: l2 }) }), [o2, l2]), R = (0, n.useRef)(0), O = (0, n.useCallback)(() => {
      if (b) return 0;
      let e3 = performance.now() / 1e3, t3 = Math.min(Math.max(e3, R.current), e3 + 0.45);
      return R.current = t3 + 0.09, t3 - e3;
    }, [b]), q = (0, n.useMemo)(() => ({ schedule: O, reduced: b, fresh: $.fresh }), [O, b, $.fresh]);
    return (0, i.jsx)(y.Provider, { value: q, children: (0, i.jsxs)("div", { className: [m().root, g2].filter(Boolean).join(" "), role: "region", "aria-label": a2, children: [(0, i.jsx)("div", { ref: k, className: m().scroller, "data-scrolls": P || void 0, style: P ? { "--timeline-height": "number" == typeof d2 ? `${d2}px` : d2 } : void 0, onKeyDown: function(e3) {
      if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(e3.key)) return;
      let t3 = [...k.current?.querySelectorAll("[data-timeline-trigger]") ?? []], a3 = t3.indexOf(document.activeElement);
      if (a3 < 0) return;
      e3.preventDefault();
      let i2 = "Home" === e3.key ? 0 : "End" === e3.key ? t3.length - 1 : Math.min(Math.max(a3 + ("ArrowDown" === e3.key ? 1 : -1), 0), t3.length - 1);
      t3[i2]?.focus();
    }, children: (0, i.jsx)("div", { ref: C, children: (0, i.jsx)(s.N, { children: Y.map((e3) => (0, i.jsxs)(_, { id: `${T}-${e3.day}`, fresh: !E.has(e3.day), reduced: b, children: [(0, i.jsxs)("div", { className: m().day, role: "heading", "aria-level": h2, id: `${T}-${e3.day}`, children: [(0, i.jsx)("span", { children: e3.label }), (0, i.jsxs)("span", { className: m().count, "aria-hidden": "true", children: [(0, i.jsx)(f, { value: e3.rows.length, reduced: b }), " ", 1 === e3.rows.length ? "update" : "updates"] }), (0, i.jsx)("span", { className: m().srOnly, children: `, ${e3.rows.length} ${1 === e3.rows.length ? "update" : "updates"}` })] }), (0, i.jsx)("ol", { className: m().list, children: (0, i.jsx)(s.N, { children: e3.rows.map((a3, n2) => {
      let r2 = "Today" === e3.label && t2 - a3.time < 432e5, s2 = r2 ? (function(e4, t3) {
        let a4 = Math.max(0, Math.floor((t3 - e4) / 6e4));
        if (a4 < 1) return { short: "Now", long: "just now" };
        if (a4 < 60) return { short: `${a4}m`, long: `${a4} ${1 === a4 ? "minute" : "minutes"} ago` };
        let i2 = Math.floor(a4 / 60);
        return { short: `${i2}h`, long: `${i2} ${1 === i2 ? "hour" : "hours"} ago` };
      })(a3.time, t2) : { short: z.clock.format(new Date(a3.time)), long: "" };
      return (0, i.jsx)(v, { row: a3, last: n2 === e3.rows.length - 1, expanded: S.has(a3.id), onToggle: () => {
        var e4;
        return e4 = a3.id, void D((t3) => {
          let a4 = new Set(t3);
          return a4.has(e4) ? a4.delete(e4) : a4.add(e4), a4;
        });
      }, timeLabel: s2.short, timeFull: r2 ? `${s2.long}, ${z.full.format(new Date(a3.time))}` : z.full.format(new Date(a3.time)) }, a3.id);
    }) }) })] }, e3.day)) }) }) }), (0, i.jsx)("span", { className: m().srOnly, role: "status", children: $.announcement })] }) });
  }
}

__m(__module,__exports,__require);
}