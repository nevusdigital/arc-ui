function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { Bg: () => F });
  var a = n(95155), r = n(12115), i = n(47650), s = n(80642), l = n(25354), o = n(18310), u = n(47603), c = n(78890), d = n(70299), m = n(30377), p = n(92571), h = n(7428), f = n(12363), _ = n(7770), y = n(80758), x = n.n(y);
  let g = [{ value: "available", label: "Available" }, { value: "busy", label: "Busy" }, { value: "away", label: "Away" }], v = [{ value: "light", label: "Light", icon: (0, a.jsx)(u.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }) }, { value: "dark", label: "Dark", icon: (0, a.jsx)(c.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }) }, { value: "system", label: "System", icon: (0, a.jsx)(d.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }) }], b = "(max-width: 639px)", j = (e2) => {
    let t2 = window.matchMedia(b);
    return t2.addEventListener("change", e2), () => t2.removeEventListener("change", e2);
  }, w = () => () => {
  }, N = [..._.T.ease.enter], k = [..._.T.ease.standard], S = [0.4, 0, 1, 1], E = { closed: { opacity: 0, scale: 0.94 }, open: { opacity: 1, scale: 1, transition: { type: "spring", visualDuration: 0.3, bounce: 0, opacity: { duration: _.T.duration.fast, ease: N }, delayChildren: 0.03, staggerChildren: 0.016 } }, exit: { opacity: 0, scale: 0.97, transition: { duration: _.T.duration.instant, ease: S } } }, L = { closed: { y: "100%" }, open: { y: 0, transition: { ..._.T.spring.smooth, visualDuration: 0.36, delayChildren: 0.06, staggerChildren: 0.02 } }, exit: { y: "100%", transition: { duration: 0.22, ease: S } } }, T = { closed: { opacity: 0 }, open: { opacity: 1, transition: { duration: _.T.duration.instant } }, exit: { opacity: 0, transition: { duration: _.T.duration.instant } } }, A = { closed: { opacity: 0, y: 3 }, open: { opacity: 1, y: 0, transition: { duration: 0.2, ease: N } } };
  function C({ status: e2, className: t2 }) {
    return (0, a.jsx)("span", { className: [x().dot, t2].filter(Boolean).join(" "), "data-status": e2, "aria-hidden": "true" });
  }
  function P({ user: e2 }) {
    let [t2, n2] = (0, r.useState)();
    if (!e2.avatarSrc || t2 === e2.avatarSrc) {
      let t3 = e2.name.trim().split(/\s+/).slice(0, 2).map((e3) => e3[0]?.toUpperCase()).join("");
      return (0, a.jsx)("span", { className: `${x().portrait} ${x().initials}`, children: t3 });
    }
    return (0, a.jsx)("img", { className: x().portrait, src: e2.avatarSrc, srcSet: e2.avatarSrcSet, alt: "", decoding: "async", draggable: false, onError: () => n2(e2.avatarSrc) });
  }
  function R({ user: e2, status: t2, size: n2 }) {
    return (0, a.jsxs)("span", { className: x().face, "data-size": n2, children: [(0, a.jsx)(P, { user: e2 }), t2 && (0, a.jsx)(C, { status: t2 })] });
  }
  function M({ text: e2, reduced: t2 }) {
    return (0, a.jsx)(s.N, { mode: "popLayout", initial: false, children: (0, a.jsx)(l.PY1.span, { className: x().rise, initial: t2 ? { opacity: 0 } : { opacity: 0, y: "0.35em", filter: `blur(${_.T.blur.subtle}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: t2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: "-0.35em", filter: `blur(${_.T.blur.subtle}px)`, transition: { duration: _.T.duration.fast, ease: k } }, transition: t2 ? { duration: 0 } : { duration: _.T.duration.standard, ease: N }, children: e2 }, e2) });
  }
  function $({ keys: e2 }) {
    return (0, a.jsx)("kbd", { className: x().keys, "aria-hidden": "true", children: e2.map((e3, t2) => (0, a.jsx)("kbd", { className: x().key, children: e3 }, `${e3}-${t2}`)) });
  }
  function D({ label: e2, icon: t2, value: n2, options: r2, onChange: i2, variants: s2 }) {
    let o2 = Math.max(0, r2.findIndex((e3) => e3.value === n2));
    return (0, a.jsxs)(l.PY1.div, { className: x().row, "data-stop": "group", "data-label": e2, variants: s2, children: [(0, a.jsx)("span", { className: x().icon, "aria-hidden": "true", children: t2 }), (0, a.jsx)("span", { className: x().rowLabel, "aria-hidden": "true", children: e2 }), (0, a.jsxs)("div", { className: x().segments, role: "group", "aria-label": e2, style: { "--index": o2, "--count": r2.length }, children: [(0, a.jsx)("span", { className: x().thumb, "aria-hidden": "true" }), r2.map((e3) => (0, a.jsx)("button", { type: "button", role: "menuitemradio", tabIndex: -1, "aria-checked": e3.value === n2, "aria-label": e3.label, title: e3.label, className: x().segment, onClick: () => i2(e3.value), children: e3.icon }, e3.value))] })] });
  }
  let z = (e2) => Array.from(e2?.querySelectorAll("[data-stop]") ?? []);
  function W(e2) {
    if (!e2) return;
    let t2 = "group" === e2.dataset.stop ? e2.querySelector('[aria-checked="true"]') ?? e2.querySelector("button") : e2;
    t2?.focus({ preventScroll: true });
  }
  function F({ user: e2, status: t2, defaultStatus: n2 = "available", onStatusChange: u2, theme: c2, defaultTheme: d2 = "system", onThemeChange: y2, showTheme: N2 = true, items: S2 = [], onSignOut: P2, signOutKeys: I, align: Y = "end", showName: q = false, open: H, defaultOpen: B = false, onOpenChange: K, portal: U = true, ref: V, className: G }) {
    let O = (0, r.useId)(), X = `${O}-menu`, Z = `${O}-trigger`, J = !!(0, o.I)(), Q = (0, r.useSyncExternalStore)(w, () => true, () => false), ee = (0, r.useSyncExternalStore)(j, () => window.matchMedia(b).matches, () => false), [et, en] = (0, r.useState)(B), [ea, er] = (0, r.useState)(n2), [ei, es] = (0, r.useState)(d2), [el, eo] = (0, r.useState)(false), [eu, ec] = (0, r.useState)(null), ed = H ?? et, em = void 0 !== t2 || void 0 !== u2, ep = t2 ?? ea, eh = (0, r.useRef)(null), ef = (0, r.useRef)(null), e_ = (0, r.useRef)(null), ey = (0, r.useRef)(null), ex = (0, r.useRef)(null), eg = (0, r.useRef)({ text: "", timer: 0 }), ev = (0, r.useRef)(true), eb = (0, r.useRef)(false), ej = Q && ee, ew = !U && !ej;
    function eN(e3, t3 = null) {
      ex.current = e3 ? t3 : null, e3 && eo(eb.current), ec(null), en(e3), K?.(e3);
    }
    function ek(e3) {
      eN(false), e3 && ef.current?.focus({ preventScroll: true });
    }
    function eS(e3) {
      "touch" !== e3.pointerType && document.activeElement !== e3.currentTarget && e3.currentTarget.focus({ preventScroll: true });
    }
    (0, r.useEffect)(() => {
      ev.current = true;
      let e3 = eg.current;
      return () => {
        ev.current = false, window.clearTimeout(e3.timer);
      };
    }, []), (0, r.useEffect)(() => {
      if (!ed) return;
      let e3 = ex.current;
      if (ex.current = null, !e3) return;
      let t3 = requestAnimationFrame(() => {
        let t4 = z(ey.current);
        "first" === e3 ? W(t4[0]) : "last" === e3 ? W(t4.at(-1)) : e_.current?.focus({ preventScroll: true });
      });
      return () => cancelAnimationFrame(t3);
    }, [ed, ej]), (0, r.useLayoutEffect)(() => {
      if (!ed || ej) return;
      let e3 = () => {
        let e4, t3, n3 = e_.current, a2 = ef.current;
        if (!n3 || !a2) return;
        let r2 = a2.getBoundingClientRect(), i2 = n3.offsetWidth, s2 = n3.offsetHeight;
        if (ew) {
          let a3 = eh.current?.getBoundingClientRect();
          e4 = (a3?.left ?? 0) + n3.offsetLeft, t3 = (a3?.top ?? 0) + n3.offsetTop;
        } else {
          e4 = Math.min(Math.max(12, "start" === Y ? r2.left : "center" === Y ? r2.left + r2.width / 2 - i2 / 2 : r2.right - i2), window.innerWidth - i2 - 12);
          let a3 = r2.bottom + 8;
          t3 = a3 + s2 > window.innerHeight - 12 && r2.top - 8 - s2 > 12 ? r2.top - 8 - s2 : a3, n3.style.left = `${e4}px`, n3.style.top = `${t3}px`;
        }
        let l2 = r2.left + Math.min(r2.width, 40) / 2, o2 = "end" === Y && r2.width > 40 ? r2.right - 20 - e4 : l2 - e4;
        n3.style.setProperty("--origin-x", `${Math.min(Math.max(0, o2), i2)}px`), n3.style.setProperty("--origin-y", t3 < r2.top ? `${s2}px` : "0px");
      };
      if (e3(), !ew) return window.addEventListener("resize", e3), window.addEventListener("scroll", e3, true), () => {
        window.removeEventListener("resize", e3), window.removeEventListener("scroll", e3, true);
      };
    }, [ed, ej, ew, Y]), (0, r.useEffect)(() => {
      if (!ed || ej) return;
      let e3 = (e4) => {
        let t3 = e4.target;
        e_.current?.contains(t3) || ef.current?.contains(t3) || (ex.current = null, ec(null), en(false), K?.(false));
      };
      return document.addEventListener("pointerdown", e3, true), () => document.removeEventListener("pointerdown", e3, true);
    }, [ed, ej, K]), (0, r.useEffect)(() => {
      if (!ed || !ej) return;
      let e3 = document.documentElement, t3 = e3.style.overflow;
      return e3.style.overflow = "hidden", () => {
        e3.style.overflow = t3;
      };
    }, [ed, ej]);
    let eE = eu?.glide && !J ? _.T.spring.snappy : { duration: 0 }, eL = J ? void 0 : A, eT = { id: X, role: "menu", "aria-labelledby": Z, tabIndex: -1, onKeyDown: function(e3) {
      let t3 = z(ey.current), n3 = document.activeElement instanceof HTMLElement ? document.activeElement : null, a2 = n3?.closest("[data-stop]") ?? null, r2 = a2 ? t3.indexOf(a2) : -1, i2 = (t4) => {
        e3.preventDefault(), W(t4);
      };
      switch (e3.key) {
        case "ArrowDown":
          return i2(t3[(r2 + 1) % t3.length]);
        case "ArrowUp":
          return i2(t3[r2 <= 0 ? t3.length - 1 : r2 - 1]);
        case "Home":
          return i2(t3[0]);
        case "End":
          return i2(t3.at(-1));
        case "Escape":
        case "Tab":
          return e3.preventDefault(), ek(true);
        case "ArrowLeft":
        case "ArrowRight": {
          if (a2?.dataset.stop !== "group") return;
          e3.preventDefault();
          let t4 = Array.from(a2.querySelectorAll('[role="menuitemradio"]')), n4 = Math.max(0, t4.findIndex((e4) => "true" === e4.getAttribute("aria-checked"))), r3 = t4[(n4 + ("ArrowRight" === e3.key ? 1 : -1) + t4.length) % t4.length];
          r3?.focus({ preventScroll: true }), r3?.click();
          return;
        }
      }
      if (1 !== e3.key.length || e3.ctrlKey || e3.metaKey || e3.altKey || " " === e3.key) return;
      let s2 = eg.current;
      window.clearTimeout(s2.timer), s2.text += e3.key.toLowerCase(), s2.timer = window.setTimeout(() => {
        s2.text = "";
      }, 500);
      let l2 = [...t3.slice(r2 + 1), ...t3.slice(0, r2 + 1)], o2 = (s2.text.length > 1 && a2?.dataset.label?.toLowerCase().startsWith(s2.text) ? [a2] : l2).find((e4) => e4.dataset.label?.toLowerCase().startsWith(s2.text));
      o2 && i2(o2);
    } }, eA = (0, a.jsxs)(a.Fragment, { children: [(0, a.jsxs)(l.PY1.div, { className: x().header, variants: eL, children: [(0, a.jsx)(R, { user: e2, status: em ? ep : void 0, size: "md" }), (0, a.jsxs)("div", { className: x().identity, children: [(0, a.jsxs)("div", { className: x().nameRow, children: [(0, a.jsx)("span", { className: x().name, children: e2.name }), e2.plan && (0, a.jsx)("span", { className: x().plan, children: e2.plan })] }), (0, a.jsx)("span", { className: x().email, title: e2.email, children: e2.email })] })] }), (0, a.jsxs)("div", { ref: ey, className: x().list, onFocus: function(e3) {
      let t3 = e3.target instanceof HTMLElement ? e3.target.closest("[data-stop]") : null;
      t3 ? ec((e4) => ({ top: t3.offsetTop, height: t3.offsetHeight, tone: t3.dataset.tone, glide: null !== e4 })) : ec(null);
    }, onPointerMove: function(e3) {
      if ("touch" === e3.pointerType || !eu) return;
      let t3 = e3.target instanceof HTMLElement ? e3.target.closest('[data-stop="group"]') : null;
      !t3 || t3.contains(document.activeElement) || (ec(null), e_.current?.focus({ preventScroll: true }));
    }, onPointerLeave: function(e3) {
      "touch" !== e3.pointerType && (ec(null), e_.current?.focus({ preventScroll: true }));
    }, children: [(0, a.jsx)(l.PY1.span, { className: x().highlight, "data-tone": eu?.tone, "aria-hidden": "true", initial: false, animate: eu ? { y: eu.top, height: eu.height, opacity: 1 } : { opacity: 0 }, transition: { default: eE, opacity: { duration: J ? 0 : _.T.duration.instant } } }), S2.length > 0 && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)("div", { className: x().separator, role: "separator" }), S2.map((e3) => (0, a.jsxs)(l.PY1.button, { type: "button", role: "menuitem", tabIndex: -1, className: x().item, "data-stop": "item", "data-label": e3.label, variants: eL, onPointerMove: eS, onClick: () => {
      ek(true), e3.onSelect?.();
    }, children: [(0, a.jsx)("span", { className: x().icon, "aria-hidden": "true", children: e3.icon }), (0, a.jsx)("span", { className: x().itemLabel, children: e3.label }), e3.keys && (0, a.jsx)($, { keys: e3.keys })] }, e3.label))] }), (N2 || em) && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)("div", { className: x().separator, role: "separator" }), em && (0, a.jsx)(D, { label: "Status", icon: (0, a.jsx)(C, { status: ep }), value: ep, onChange: function(e3) {
      er(e3), u2?.(e3);
    }, options: g.map((e3) => ({ ...e3, icon: (0, a.jsx)(C, { status: e3.value }) })), variants: eL }), N2 && (0, a.jsx)(D, { label: "Theme", icon: (0, a.jsx)(m.A, { size: 16, strokeWidth: 1.75 }), value: c2 ?? ei, onChange: function(e3) {
      es(e3), y2?.(e3);
    }, options: v, variants: eL })] }), (0, a.jsx)("div", { className: x().separator, role: "separator" }), (0, a.jsxs)(l.PY1.button, { type: "button", role: "menuitem", tabIndex: -1, className: x().item, "data-stop": "item", "data-tone": "danger", "data-label": "Sign out", variants: eL, "aria-busy": el || void 0, onPointerMove: eS, onClick: function() {
      if (eb.current) return;
      let e3 = P2?.();
      if (!e3 || "function" != typeof e3.then) return void ek(true);
      eb.current = true, eo(true);
      let t3 = () => {
        eb.current = false, ev.current && ek(false);
      };
      e3.then(t3, t3);
    }, children: [(0, a.jsx)("span", { className: x().icon, "aria-hidden": "true", children: el ? (0, a.jsx)(p.A, { className: x().spinner, size: 16, strokeWidth: 1.75 }) : (0, a.jsx)(h.A, { size: 16, strokeWidth: 1.75 }) }), (0, a.jsx)("span", { className: x().itemLabel, children: (0, a.jsx)(M, { text: el ? "Signing out" : "Sign out", reduced: J }) }), I && (0, a.jsx)($, { keys: I })] })] })] }), eC = (0, a.jsx)(s.N, { children: ed && !ej && (0, a.jsx)(l.PY1.div, { ref: e_, ...eT, className: x().panel, "data-inline": ew || void 0, "data-align": Y, variants: J ? T : E, initial: "closed", animate: "open", exit: "exit", children: eA }, "panel") }), eP = (0, a.jsxs)(s.N, { children: [ed && ej && (0, a.jsx)(l.PY1.div, { className: x().scrim, "aria-hidden": "true", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: J ? 0.1 : 0.2, ease: k }, onClick: () => ek(true) }, "scrim"), ed && ej && (0, a.jsxs)(l.PY1.div, { ref: e_, ...eT, className: `${x().panel} ${x().sheet}`, "aria-modal": "true", variants: J ? T : L, initial: "closed", animate: "open", exit: "exit", drag: !J && "y", dragConstraints: { top: 0, bottom: 0 }, dragElastic: { top: 0.04, bottom: 0.9 }, dragMomentum: false, onDragEnd: function(e3, t3) {
      (t3.offset.y > 80 || t3.velocity.y > 500) && ek(true);
    }, children: [(0, a.jsx)("span", { className: x().handle, "aria-hidden": "true" }), eA] }, "sheet")] });
    return (0, a.jsxs)("span", { ref: eh, className: x().root, children: [(0, a.jsxs)("button", { ref: function(e3) {
      ef.current = e3, "function" == typeof V ? V(e3) : V && (V.current = e3);
    }, id: Z, type: "button", className: [x().trigger, G].filter(Boolean).join(" "), "data-state": ed ? "open" : "closed", "data-name": q || void 0, "aria-haspopup": "menu", "aria-expanded": ed, "aria-controls": ed ? X : void 0, "aria-label": `Account menu, ${e2.name}${em ? `, ${g.find((e3) => e3.value === ep)?.label ?? ep}` : ""}`, onClick: function(e3) {
      ed ? ek(false) : eN(true, 0 === e3.detail ? "first" : "pointer");
    }, onKeyDown: function(e3) {
      ("ArrowDown" === e3.key || "ArrowUp" === e3.key) && (e3.preventDefault(), eN(true, "ArrowDown" === e3.key ? "first" : "last"));
    }, children: [(0, a.jsx)(R, { user: e2, status: em ? ep : void 0, size: "sm" }), q && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)("span", { className: x().triggerName, children: e2.name }), (0, a.jsx)(f.A, { className: x().chevron, size: 16, strokeWidth: 1.75, "aria-hidden": "true" })] })] }), ej ? (0, i.createPortal)(eP, document.body) : ew ? eC : Q ? (0, i.createPortal)(eC, document.body) : null] });
  }
}

__m(__module,__exports,__require);
}