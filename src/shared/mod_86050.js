function(__module,__exports,__require){
"use strict";
function __m(e, a, s) {
  "use strict";
  s.d(a, { Cs: () => y, Zd: () => O });
  var i = s(95155), n = s(12115), t = s(79196), l = s(25354), r = s(18310), c = s(28245), o = s(92171), d = s(80642), u = s(9005), p = s(94295), h = s(51288), _ = s(50680), m = s(7770), f = s(50930), b = s.n(f);
  let y = [{ id: "necessary", label: "Strictly necessary", description: "Sign-in, security, and your cart. The site can't work without these.", required: true }, { id: "preferences", label: "Preferences", description: "Remember your language, region, and display settings." }, { id: "analytics", label: "Analytics", description: "Count visits and see which pages help, only in aggregate." }, { id: "marketing", label: "Marketing", description: "Measure campaigns and show relevant ads on other sites." }], w = { message: "We use essential cookies to run this site. With your OK, we'd also use optional ones to remember settings and learn what helps.", customize: "Customize", acceptAll: "Accept all", rejectAll: "Reject all", save: "Save choices", preferencesTitle: "Cookie preferences", preferencesDescription: "Choose which optional cookies we can use. You can change this any time.", reopen: "Cookie preferences", alwaysOn: "Always on", close: "Close preferences" }, x = [...m.T.ease.enter], j = [...m.T.ease.standard], k = (e2, a2) => {
    let s2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: s2 * s2, damping: 2 * (1 - a2) * s2, mass: 1 };
  }, v = k(0.46, 0), g = k(0.38, 0), N = () => () => {
  }, C = { hidden: { opacity: 0, y: 10, filter: `blur(${m.T.blur.soft}px)` }, shown: { opacity: 1, y: 0, filter: "blur(0px)", transition: { y: k(0.42, 0), opacity: { duration: 0.22, ease: x, delay: 0.04 }, filter: { duration: 0.26, ease: x, delay: 0.04 } } }, gone: { opacity: 0, y: 4, filter: `blur(${m.T.blur.soft}px)`, transition: { duration: 0.12, ease: j } } }, A = { hidden: { opacity: 0 }, shown: { opacity: 1, transition: { duration: 0.16 } }, gone: { opacity: 0, transition: { duration: 0.1 } } };
  function S({ id: e2, width: a2, side: s2, reduced: r2, focusOnMount: c2, onSize: o2, className: d2, children: u2, ...p2 }) {
    let h2 = (0, n.useRef)(null), _2 = (0, t.tF)();
    return (0, n.useLayoutEffect)(() => {
      let a3 = h2.current;
      if (!a3 || !_2) return;
      let s3 = () => o2(e2, a3.offsetHeight);
      if (s3(), "u" < typeof ResizeObserver) return;
      let i2 = new ResizeObserver(s3);
      return i2.observe(a3), () => i2.disconnect();
    }, [e2, o2, _2]), (0, n.useEffect)(() => {
      c2 && h2.current?.querySelector("[data-autofocus]")?.focus({ preventScroll: true });
    }, [c2]), (0, i.jsx)(l.PY1.div, { ...p2, ref: h2, className: [b().face, d2].filter(Boolean).join(" "), style: { width: a2 }, "data-face": e2, "data-side": s2, variants: r2 ? A : C, initial: "hidden", animate: "shown", exit: "gone", inert: !_2 || void 0, children: u2 });
  }
  let O = (0, n.forwardRef)(function({ categories: e2 = y, value: a2, defaultValue: s2 = null, onChange: t2, storageKey: m2, version: f2 = "1", preferencesOpen: C2, defaultPreferencesOpen: A2 = false, onPreferencesOpenChange: O2, policy: z, position: $ = "bottom", strategy: I = "fixed", showReopenButton: T = true, reopenSide: R, labels: E, className: P }, M) {
    let q = { ...w, ...E }, F = !!(0, r.I)(), H = (0, n.useSyncExternalStore)(N, () => true, () => false), D = (0, n.useId)(), W = `${D}-title`, B = `${D}-description`, G = `${D}-message`, [J, L] = (0, n.useState)(s2), [Y, K] = (0, n.useState)(!m2 || void 0 !== a2);
    (0, n.useEffect)(() => {
      if (Y || !m2) return;
      let e3 = (function(e4, a3 = "1") {
        try {
          let s3 = window.localStorage.getItem(e4);
          if (!s3) return null;
          let i2 = JSON.parse(s3);
          if (!i2 || "object" != typeof i2.value || null === i2.value || i2.version !== a3) return null;
          return { value: i2.value, version: i2.version, updatedAt: String(i2.updatedAt ?? "") };
        } catch {
          return null;
        }
      })(m2, f2);
      e3 && L(e3.value), K(true);
    }, [Y, m2, f2]);
    let X = void 0 !== a2 ? a2 : J, Q = null != X, [U, V] = (0, n.useState)(A2), Z = C2 ?? U, ee = (0, n.useCallback)((e3) => {
      void 0 === C2 && V(e3), O2?.(e3);
    }, [O2, C2]), ea = (0, n.useCallback)((a3) => Object.fromEntries(e2.map((e3) => [e3.id, !!e3.required || (a3?.[e3.id] ?? e3.defaultEnabled ?? false)])), [e2]), [es, ei] = (0, n.useState)(() => ea(X)), [en, et] = (0, n.useState)(null), el = H && Y ? Z ? "panel" : Q ? T ? "chip" : null : "bar" : null, er = (0, n.useCallback)((e3 = true) => {
      ei(ea(X)), et(e3 ? "panel" : null), ee(true);
    }, [ea, X, ee]), ec = (0, n.useCallback)((e3 = true) => {
      et(e3 ? Q ? "chip" : "bar" : null), ee(false);
    }, [Q, ee]), eo = (0, n.useCallback)((e3, s3) => {
      let i2 = /* @__PURE__ */ new Date();
      void 0 === a2 && L(e3), m2 && (function(e4, a3) {
        try {
          a3 ? window.localStorage.setItem(e4, JSON.stringify(a3)) : window.localStorage.removeItem(e4);
        } catch {
        }
      })(m2, e3 ? { value: e3, version: f2, updatedAt: i2.toISOString() } : null), t2?.(e3, { action: s3, updatedAt: i2 });
    }, [t2, m2, a2, f2]), ed = (a3) => {
      let s3 = "save" === a3 ? { ...es } : Object.fromEntries(e2.map((e3) => [e3.id, !!e3.required || "accept-all" === a3]));
      et(T ? "chip" : null), eo(s3, a3), Z && ee(false);
    };
    (0, n.useImperativeHandle)(M, () => ({ openPreferences: () => er(true), closePreferences: () => ec(false), reset: () => {
      ee(false), et(null), eo(null, "reset");
    } }), [ec, eo, er, ee]);
    let eu = (0, n.useRef)(null), [ep, eh] = (0, n.useState)(0);
    (0, n.useLayoutEffect)(() => {
      let e3 = eu.current;
      if (!e3) return;
      let a3 = () => eh(e3.clientWidth);
      if (a3(), "u" < typeof ResizeObserver) return;
      let s3 = new ResizeObserver(a3);
      return s3.observe(e3), () => s3.disconnect();
    }, []);
    let e_ = "bottom-left" === $ ? "left" : "bottom-right" === $ ? "right" : "center", em = R ?? ("right" === e_ ? "right" : "left"), ef = { bar: Math.min(ep, 660), panel: Math.min(ep, 420), chip: 44 }, eb = Q && T ? em : e_, ey = (0, c.d)(0), ew = (0, c.d)(0), ex = (0, c.d)(0), ej = (0, c.d)(22), ek = (0, n.useRef)({ bar: 0, panel: 0, chip: 44 }), ev = (0, n.useRef)({ w: 0, h: 0, ready: false }), [eg, eN] = (0, n.useState)(0), eC = (0, n.useCallback)((e3, a3) => {
      ek.current[e3] !== a3 && (ek.current[e3] = a3, eN((e4) => e4 + 1));
    }, []);
    (0, n.useLayoutEffect)(() => {
      let e3;
      if (!el || !ep) {
        ev.current.ready = false;
        return;
      }
      let a3 = ef[el], s3 = "chip" === el ? 44 : ek.current[el];
      if (!s3) return;
      let i2 = { x: "left" === (e3 = "chip" === el ? em : "panel" === el ? eb : e_) ? 0 : "right" === e3 ? ep - a3 : (ep - a3) / 2, w: a3, h: s3, r: "chip" === el ? 22 : "panel" === el ? 26 : 22 };
      if (!ev.current.ready || F) {
        ey.jump(i2.x), ew.jump(i2.w), ex.jump(i2.h), ej.jump(i2.r), ev.current = { w: i2.w, h: i2.h, ready: true };
        return;
      }
      let n2 = i2.w * i2.h >= ev.current.w * ev.current.h ? v : g;
      ev.current = { w: i2.w, h: i2.h, ready: true }, (0, o.i)(ey, i2.x, n2), (0, o.i)(ew, i2.w, n2), (0, o.i)(ex, i2.h, n2), (0, o.i)(ej, i2.r, n2);
    }, [el, ep, eg, F, e_, em, eb]);
    let eA = z ? z.href ? (0, i.jsx)("a", { className: b().policy, href: z.href, onClick: z.onClick, children: z.label }) : (0, i.jsx)("button", { type: "button", className: b().policy, onClick: z.onClick, children: z.label }) : null, eS = e2.filter((e3) => !e3.required), eO = eS.filter((e3) => es[e3.id]).length;
    return (0, i.jsx)("div", { ref: eu, className: [b().layer, "absolute" === I ? b().absolute : "", P].filter(Boolean).join(" "), "data-position": $, children: (0, i.jsx)(d.N, { children: el ? (0, i.jsx)(l.PY1.div, { className: b().surface, style: { x: ey, width: ew, height: ex, borderRadius: ej }, initial: F ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }, animate: { opacity: 1, y: 0, scale: 1, transition: F ? { duration: 0.16 } : { y: k(0.5, 0), scale: k(0.5, 0), opacity: { duration: 0.24, ease: x } } }, exit: F ? { opacity: 0, transition: { duration: 0.12 } } : { opacity: 0, y: 12, scale: 0.96, transition: { duration: 0.18, ease: j } }, children: (0, i.jsxs)(d.N, { initial: false, children: ["bar" === el ? (0, i.jsx)(S, { id: "bar", width: ef.bar, side: e_, reduced: F, onSize: eC, focusOnMount: "bar" === en, className: b().bar, role: "dialog", "aria-modal": false, "aria-label": q.preferencesTitle, "aria-describedby": G, children: (0, i.jsxs)("div", { className: b().barInner, "data-stack": ef.bar < 560 || void 0, children: [(0, i.jsxs)("p", { id: G, className: b().message, children: [q.message, eA ? (0, i.jsxs)(i.Fragment, { children: [" ", eA] }) : null] }), (0, i.jsxs)("div", { className: b().barActions, children: [(0, i.jsx)(h.A, { size: "sm", variant: "ghost", "data-autofocus": true, onClick: () => er(true), children: q.customize }), (0, i.jsx)(h.A, { size: "sm", variant: "secondary", onClick: () => ed("reject-all"), children: q.rejectAll }), (0, i.jsx)(h.A, { size: "sm", variant: "secondary", onClick: () => ed("accept-all"), children: q.acceptAll })] })] }) }, "bar") : null, "panel" === el ? (0, i.jsxs)(S, { id: "panel", width: ef.panel, side: eb, reduced: F, onSize: eC, focusOnMount: "panel" === en, className: b().panel, role: "dialog", "aria-modal": false, "aria-labelledby": W, "aria-describedby": B, onKeyDown: (e3) => {
      "Escape" === e3.key && (e3.stopPropagation(), ec(true));
    }, children: [(0, i.jsxs)("div", { className: b().panelHead, children: [(0, i.jsx)("h2", { id: W, className: b().title, tabIndex: -1, "data-autofocus": true, children: q.preferencesTitle }), (0, i.jsx)("button", { type: "button", className: b().iconButton, "aria-label": q.close, onClick: () => ec(true), children: (0, i.jsx)(u.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }) })] }), (0, i.jsxs)("p", { id: B, className: b().description, children: [q.preferencesDescription, eA ? (0, i.jsxs)(i.Fragment, { children: [" ", eA] }) : null] }), (0, i.jsx)("ul", { className: b().list, children: e2.map((e3) => {
      let a3 = `${D}-${e3.id}`, s3 = `${a3}-hint`;
      return (0, i.jsxs)("li", { className: b().row, children: [(0, i.jsxs)("div", { className: b().rowText, children: [(0, i.jsx)("label", { htmlFor: e3.required ? void 0 : a3, className: b().rowLabel, children: e3.label }), e3.description ? (0, i.jsx)("p", { id: s3, className: b().rowHint, children: e3.description }) : null] }), e3.required ? (0, i.jsx)("span", { className: b().always, children: q.alwaysOn }) : (0, i.jsx)(_.d, { id: a3, "aria-describedby": e3.description ? s3 : void 0, checked: !!es[e3.id], onCheckedChange: (a4) => ei((s4) => ({ ...s4, [e3.id]: a4 })) })] }, e3.id);
    }) }), (0, i.jsxs)("div", { className: b().panelActions, children: [(0, i.jsx)(h.A, { size: "sm", variant: "secondary", onClick: () => ed("reject-all"), children: q.rejectAll }), (0, i.jsx)(h.A, { size: "sm", variant: "secondary", onClick: () => ed("accept-all"), children: q.acceptAll }), (0, i.jsx)(h.A, { size: "sm", variant: "primary", className: b().save, onClick: () => ed("save"), "aria-describedby": `${D}-count`, children: q.save }), (0, i.jsx)("span", { id: `${D}-count`, className: b().srOnly, children: `${eO} of ${eS.length} optional categories allowed` })] })] }, "panel") : null, "chip" === el ? (0, i.jsx)(S, { id: "chip", width: 44, side: em, reduced: F, onSize: eC, focusOnMount: "chip" === en, className: b().chipFace, children: (0, i.jsx)("button", { type: "button", className: b().chip, "aria-label": q.reopen, "aria-haspopup": "dialog", "data-autofocus": true, onClick: () => er(true), children: (0, i.jsx)(p.A, { size: 20, strokeWidth: 1.75, "aria-hidden": "true" }) }) }, "chip") : null] }) }, "surface") : null }) });
  });
}

__m(__module,__exports,__require);
}