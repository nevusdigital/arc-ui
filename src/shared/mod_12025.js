function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { ButtonGroupDemo: () => en, default: () => ei });
  var i = n(95155), a = n(12115), r = n(64577), l = n(9005), o = n(91161), s = n(9969), c = n(37218), u = n(32159), d = n(27076), p = n(62700), m = n(797), b = n(34779), f = n(25879), h = n(36565), g = n(2125), _ = n(81402), x = n(18986), y = n(25182), v = n(65024), j = n(57793), w = n(28245), S = n(92171), T = n(25354), N = n(80642), A = n(18310), O = n(12363), R = n(7770), E = n(92980), k = n.n(E);
  let C = "button-group-menu", z = { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }, $ = { opacity: 0, y: 4, filter: `blur(${R.T.blur.soft}px)` }, M = { opacity: 0, y: -3, filter: `blur(${R.T.blur.soft}px)`, transition: { duration: R.T.duration.fast, ease: [...R.T.ease.standard] } }, L = { ...z, opacity: 0 }, P = { opacity: 0, transition: { duration: R.T.duration.instant } };
  function D({ item: e2, reduced: t2 }) {
    let n2, r2, l2, o2 = (0, a.useRef)(null), s2 = `${(function(e3) {
      if (!(0, a.isValidElement)(e3)) return null == e3 || "boolean" == typeof e3 ? "" : String(e3);
      let t3 = e3.type;
      return "string" == typeof t3 ? t3 : t3?.displayName ?? t3?.name ?? "icon";
    })(e2.icon)}|${void 0 !== e2.content ? "\0content" : e2.iconOnly ? "" : e2.label}`, c2 = (n2 = (0, w.d)("auto"), r2 = (0, a.useRef)(s2), l2 = (0, a.useRef)(0), (0, a.useLayoutEffect)(() => {
      r2.current !== s2 && (r2.current = s2, l2.current = performance.now() + 700);
    }, [s2]), (0, a.useEffect)(() => {
      let e3 = o2.current, i2 = e3?.parentElement;
      if (!e3 || !i2 || "u" < typeof ResizeObserver) return;
      let a2 = false, r3 = new ResizeObserver(([e4]) => {
        if (!e4) return;
        let r4 = e4.contentRect.width;
        if (!r4 || !a2 || t2 || performance.now() > l2.current) {
          a2 = r4 > 0, n2.jump(r4 || "auto"), delete i2.dataset.morphing;
          return;
        }
        i2.dataset.morphing = "", (0, S.i)(n2, r4, { ...R.T.spring.morph, onComplete: () => {
          delete i2.dataset.morphing;
        } });
      });
      return r3.observe(e3), () => r3.disconnect();
    }, [o2, t2, n2]), n2), u2 = e2.iconOnly || void 0 !== e2.content ? [] : [.../* @__PURE__ */ new Set([e2.label, ...e2.reserve ?? []])];
    return (0, i.jsx)(T.PY1.span, { className: k().slot, style: { width: c2 }, "aria-hidden": "true", children: (0, i.jsxs)("span", { ref: o2, className: k().slotContent, children: [u2.map((t3) => (0, i.jsxs)("span", { className: `${k().phase} ${k().sizer}`, children: [e2.icon ? (0, i.jsx)("span", { className: k().iconBox }) : null, (0, i.jsx)("span", { className: k().label, "data-collapsible": e2.icon ? "" : void 0, children: t3 })] }, t3)), (0, i.jsx)(N.N, { initial: false, children: (0, i.jsxs)(T.PY1.span, { className: k().phase, initial: t2 ? L : $, animate: z, exit: t2 ? P : M, transition: t2 ? { duration: R.T.duration.instant } : { duration: R.T.duration.standard, ease: [...R.T.ease.enter] }, children: [e2.icon ? (0, i.jsx)("span", { className: k().icon, children: e2.icon }) : null, void 0 !== e2.content ? (0, i.jsx)("span", { className: k().value, children: e2.content }) : e2.iconOnly ? null : (0, i.jsx)("span", { className: k().label, "data-collapsible": e2.icon ? "" : void 0, children: e2.label })] }, s2) })] }) });
  }
  let q = (e2, t2, n2) => {
    let i2 = e2.getBoundingClientRect();
    return t2 >= i2.left && t2 < i2.right && n2 >= i2.top && n2 < i2.bottom;
  }, F = (e2) => Array.from(e2?.querySelectorAll(":scope > [data-key]") ?? []), B = (e2, t2) => null === t2 ? void 0 : F(e2).find((e3) => e3.dataset.key === t2);
  function I(e2, t2) {
    let n2 = e2.getBoundingClientRect(), i2 = t2.getBoundingClientRect(), a2 = e2.offsetWidth && Math.abs(n2.width - e2.offsetWidth) > 1 ? n2.width / e2.offsetWidth : 1;
    return [(i2.left - n2.left) / a2 - e2.clientLeft + e2.scrollLeft, (i2.top - n2.top) / a2 - e2.clientTop + e2.scrollTop, i2.width / a2, i2.height / a2];
  }
  let W = (e2) => e2.disabled || "true" === e2.getAttribute("aria-disabled");
  function Y({ items: e2, menu: t2, label: n2, variant: r2 = "outline", size: l2 = "md", orientation: o2 = "horizontal", collapseLabels: s2 = true, disabled: c2 = false, className: u2, style: d2 }) {
    let p2 = (0, A.I)() ?? false, m2 = (0, a.useRef)(null), b2 = "vertical" === o2, [f2, h2] = (0, a.useState)(null), [g2, _2] = (0, a.useState)(null), [x2, y2] = (0, a.useState)(null), [v2, N2] = (0, a.useState)(false), E2 = f2 ?? g2 ?? (v2 ? C : null) ?? x2, z2 = [...e2.map((e3) => e3.id), ...t2 ? [C] : []], $2 = E2 ? z2.indexOf(E2) : -1, M2 = `${c2}${e2.map((e3) => +!!e3.disabled).join("")}`, L2 = (0, w.d)(0), P2 = (0, w.d)(0), J2 = (0, w.d)(0), Z2 = (0, w.d)(0), G2 = (0, w.d)(0), U2 = (0, a.useRef)(null);
    (0, a.useLayoutEffect)(() => {
      let e3 = B(m2.current, E2);
      if (!e3 || W(e3) && E2 !== x2) {
        U2.current && (0, S.i)(G2, 0, { duration: p2 ? R.T.duration.instant : R.T.duration.fast, ease: [...R.T.ease.standard] }), U2.current = null;
        return;
      }
      let t3 = I(m2.current, e3), n3 = [L2, P2, J2, Z2];
      !U2.current || p2 ? (n3.forEach((e4, n4) => e4.jump(t3[n4])), (0, S.i)(G2, 1, { duration: p2 ? R.T.duration.instant : R.T.duration.fast, ease: [...R.T.ease.standard] })) : (n3.forEach((e4, n4) => (0, S.i)(e4, t3[n4], R.T.spring.snappy)), (0, S.i)(G2, 1, { duration: R.T.duration.fast })), U2.current = E2;
    }, [E2, M2, p2, L2, P2, J2, Z2, G2]);
    let V2 = z2.join("\0");
    (0, a.useEffect)(() => {
      let e3 = m2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => {
        let t4 = B(e3, U2.current);
        if (!t4) return;
        let n3 = I(e3, t4);
        [L2, P2, J2, Z2].forEach((e4, t5) => {
          0.01 > Math.abs(e4.get() - n3[t5]) || (e4.isAnimating() && !p2 ? (0, S.i)(e4, n3[t5], R.T.spring.snappy) : e4.jump(n3[t5]));
        });
      });
      return t3.observe(e3), F(e3).forEach((e4) => t3.observe(e4)), () => t3.disconnect();
    }, [V2, p2, L2, P2, J2, Z2]);
    let [H2, K2] = (0, a.useState)(false), Q2 = (0, a.useRef)(0), X2 = (0, a.useRef)(0), ee2 = s2 && !b2 && e2.some((e3) => e3.icon && !e3.iconOnly && void 0 === e3.content), et2 = ee2 && H2;
    (0, a.useEffect)(() => {
      let e3 = m2.current, t3 = e3?.parentElement;
      if (!e3 || !t3 || !ee2 || "u" < typeof ResizeObserver) return;
      let n3 = new ResizeObserver(() => {
        let n4 = getComputedStyle(t3), i2 = t3.clientWidth - parseFloat(n4.paddingLeft) - parseFloat(n4.paddingRight);
        void 0 === e3.dataset.compact ? e3.scrollWidth > e3.clientWidth + 1 && (Q2.current = e3.scrollWidth + 2, X2.current = i2, K2(true)) : i2 > X2.current && i2 >= Q2.current && K2(false);
      });
      return n3.observe(e3), n3.observe(t3), () => n3.disconnect();
    }, [ee2, V2]), (0, a.useEffect)(() => {
      if (!g2) return;
      let e3 = () => _2(null);
      return window.addEventListener("pointerup", e3), window.addEventListener("pointercancel", e3), () => {
        window.removeEventListener("pointerup", e3), window.removeEventListener("pointercancel", e3);
      };
    }, [g2]);
    let en2 = (e3) => {
      for (let t3 of F(m2.current)) if (q(t3, e3.clientX, e3.clientY)) return W(t3) ? null : t3.dataset.key ?? null;
      return null;
    }, [ei2, ea] = (0, a.useState)(""), er = (0, a.useRef)(null), el = (0, a.useRef)({ key: "", at: 0 }), eo = e2.map((e3) => `${e3.id}\0${e3.label}`).join("");
    (0, a.useEffect)(() => {
      let t3 = er.current;
      if (er.current = new Map(e2.map((e3) => [e3.id, e3.label])), !t3) return;
      let n3 = performance.now() - el.current.at < 1e3, i2 = e2.filter((e3) => n3 && e3.id === el.current.key && t3.has(e3.id) && t3.get(e3.id) !== e3.label && void 0 === e3.content);
      i2.length && ea(i2.map((e3) => e3.label).join(", "));
    }, [eo]);
    let es = (e3) => {
      el.current = { key: e3.id, at: performance.now() }, e3.onSelect?.();
    }, ec = (e3) => $2 >= 0 && (e3 === $2 || e3 === $2 + 1) ? "" : void 0, eu = e2.map((e3, t3) => {
      let n3 = e3.disabled && !c2, a2 = e3.iconOnly || void 0 !== e3.content || et2 && !!e3.icon, r3 = { className: [k().segment, e3.iconOnly ? k().iconOnly : ""].filter(Boolean).join(" "), "data-key": e3.id, "data-quiet": ec(t3), "data-collapsible": e3.icon && !e3.iconOnly && void 0 === e3.content ? "" : void 0, "aria-label": a2 ? e3.label : void 0, title: e3.iconOnly || et2 && e3.icon ? e3.label : void 0 }, l3 = (0, i.jsx)("span", { className: k().content, children: (0, i.jsx)(D, { item: e3, reduced: p2 }) });
      return !e3.href || n3 || c2 ? (0, i.jsxs)("button", { ...r3, type: "button", disabled: c2, "aria-disabled": n3 || void 0, onClick: n3 ? void 0 : () => es(e3), children: [l3, a2 ? null : (0, i.jsx)("span", { className: k().srOnly, children: e3.label })] }, e3.id) : (0, i.jsxs)("a", { ...r3, href: e3.href, onClick: () => es(e3), children: [l3, a2 ? null : (0, i.jsx)("span", { className: k().srOnly, children: e3.label })] }, e3.id);
    }), ed = [k().group, k()[r2], k()[l2], b2 ? k().vertical : "", et2 ? k().compact : "", u2].filter(Boolean).join(" "), ep = (0, i.jsxs)("div", { ref: m2, className: ed, style: d2, role: "group", "aria-label": n2, "aria-disabled": c2 || void 0, "data-orientation": o2, "data-compact": et2 ? "" : void 0, onPointerMove: (e3) => {
      "touch" !== e3.pointerType && h2(en2(e3));
    }, onPointerLeave: () => h2(null), onPointerDown: (e3) => {
      0 === e3.button && _2(en2(e3));
    }, onFocus: (e3) => {
      let t3 = e3.target, n3 = t3.dataset.key;
      if (void 0 === n3) return;
      let i2 = true;
      try {
        i2 = t3.matches(":focus-visible");
      } catch {
      }
      y2(i2 ? n3 : null);
    }, onBlur: (e3) => {
      m2.current?.contains(e3.relatedTarget) || y2(null);
    }, onKeyDown: (e3) => {
      if (e3.defaultPrevented) return;
      let t3 = F(m2.current).filter((e4) => !e4.disabled), n3 = t3.findIndex((e4) => e4 === document.activeElement);
      if (n3 < 0) return;
      let i2 = !b2 && "rtl" === getComputedStyle(m2.current).direction, a2 = t3.length - 1, r3 = e3.key === (b2 ? "ArrowDown" : i2 ? "ArrowLeft" : "ArrowRight") ? n3 === a2 ? 0 : n3 + 1 : e3.key === (b2 ? "ArrowUp" : i2 ? "ArrowRight" : "ArrowLeft") ? 0 === n3 ? a2 : n3 - 1 : "Home" === e3.key ? 0 : "End" === e3.key ? a2 : -1;
      r3 < 0 || (e3.preventDefault(), t3[r3].focus());
    }, children: [(0, i.jsx)(T.PY1.span, { className: k().highlight, style: { x: L2, y: P2, width: J2, height: Z2, opacity: G2 }, "data-pressed": g2 && g2 === E2 ? "" : void 0, "aria-hidden": "true" }), eu, t2 ? (0, i.jsx)(j.l9, { className: [k().segment, k().trigger].join(" "), "data-key": C, "data-quiet": ec(e2.length), "aria-label": t2.label, title: t2.label, disabled: c2, children: (0, i.jsx)("span", { className: k().content, children: (0, i.jsx)(O.A, { className: k().chevron, "aria-hidden": "true" }) }) }) : null, (0, i.jsx)("span", { className: k().srOnly, "aria-live": "polite", children: ei2 })] });
    return t2 ? (0, i.jsxs)(j.bL, { open: v2, onOpenChange: N2, modal: false, children: [ep, (0, i.jsx)(j.ZL, { children: (0, i.jsx)(j.UC, { className: k().menu, side: "bottom", align: b2 ? "start" : "end", alignOffset: -1, sideOffset: 6, collisionPadding: 12, loop: true, children: t2.items.map((e3, t3) => {
      let n3 = [k().item, e3.destructive ? k().destructive : ""].filter(Boolean).join(" "), a2 = (0, i.jsxs)(i.Fragment, { children: [e3.icon ? (0, i.jsx)("span", { className: k().itemIcon, "aria-hidden": "true", children: e3.icon }) : null, (0, i.jsx)("span", { className: k().itemLabel, children: e3.label })] });
      return e3.href ? (0, i.jsx)(j.q7, { className: n3, style: { "--i": t3 }, disabled: e3.disabled, onSelect: e3.onSelect, asChild: true, children: (0, i.jsx)("a", { href: e3.href, children: a2 }) }, e3.id) : (0, i.jsx)(j.q7, { className: n3, style: { "--i": t3 }, disabled: e3.disabled, onSelect: e3.onSelect, children: a2 }, e3.id);
    }) }) })] }) : ep;
  }
  var J = n(19013), Z = n.n(J), G = n(55665);
  let U = [25, 50, 75, 100, 125, 150, 200, 300, 400], V = ["Share", "Copied", "Failed"], H = ["Archive", "Restore"], K = ["Preview", "Edit"];
  function Q(e2, t2 = 1600) {
    let [n2, i2] = (0, a.useState)(e2), r2 = (0, a.useRef)(void 0);
    return (0, a.useEffect)(() => () => window.clearTimeout(r2.current), []), [n2, (n3) => {
      window.clearTimeout(r2.current), i2(n3), r2.current = window.setTimeout(() => i2(e2), t2);
    }];
  }
  function X() {
    let [e2, t2] = Q("idle", 1800), [n2, h2] = Q(false), [g2, _2] = (0, a.useState)(0), [x2, y2] = (0, a.useState)(false), [v2, j2] = (0, a.useState)(false), [w2, S2] = (0, a.useState)(false);
    async function T2() {
      try {
        await (0, G.a)("https://docs.example.com/planning/q4-roadmap-review"), t2("copied");
      } catch {
        t2("failed");
      }
    }
    return (0, i.jsx)(Y, { label: "Document actions", items: ["copied" === e2 ? { id: "share", label: "Copied", reserve: V, icon: (0, i.jsx)(r.A, {}), onSelect: T2 } : "failed" === e2 ? { id: "share", label: "Failed", reserve: V, icon: (0, i.jsx)(l.A, {}), onSelect: T2 } : { id: "share", label: "Share", reserve: V, icon: (0, i.jsx)(o.A, {}), onSelect: T2 }, { id: "duplicate", label: n2 ? "Duplicated" : "Duplicate", reserve: ["Duplicate", "Duplicated"], icon: n2 ? (0, i.jsx)(r.A, {}) : (0, i.jsx)(s.A, {}), onSelect: () => {
      _2((e3) => e3 + 1), h2(true);
    } }, x2 ? { id: "archive", label: "Restore", reserve: H, icon: (0, i.jsx)(c.A, {}), onSelect: () => y2(false) } : { id: "archive", label: "Archive", reserve: H, icon: (0, i.jsx)(u.A, {}), onSelect: () => y2(true) }], menu: { label: "More actions", items: [{ id: "pin", label: v2 ? "Unpin from sidebar" : "Pin to sidebar", icon: v2 ? (0, i.jsx)(d.A, {}) : (0, i.jsx)(p.A, {}), onSelect: () => j2((e3) => !e3) }, { id: "final", label: w2 ? "Mark as draft" : "Mark as final", icon: w2 ? (0, i.jsx)(m.A, {}) : (0, i.jsx)(b.A, {}), onSelect: () => S2((e3) => !e3) }, { id: "delete", label: g2 > 1 ? `Delete ${g2} copies` : "Delete copy", icon: (0, i.jsx)(f.A, {}), destructive: true, disabled: 0 === g2, onSelect: () => _2(0) }] } });
  }
  function ee() {
    let [e2, t2] = (0, a.useState)(U.indexOf(100)), n2 = U[e2];
    return (0, i.jsx)(Y, { label: "Zoom", size: "sm", items: [{ id: "out", label: "Zoom out", icon: (0, i.jsx)(h.A, {}), iconOnly: true, disabled: 0 === e2, onSelect: () => t2((e3) => Math.max(e3 - 1, 0)) }, { id: "reset", label: `Zoom ${n2}%, reset to 100%`, content: (0, i.jsxs)("span", { className: Z().zoomValue, children: [(0, i.jsx)("span", { className: Z().zoomSizer, "aria-hidden": "true", children: "400%" }), (0, i.jsx)(v.A, { value: n2, suffix: "%" })] }), onSelect: () => t2(U.indexOf(100)) }, { id: "in", label: "Zoom in", icon: (0, i.jsx)(g.A, {}), iconOnly: true, disabled: e2 === U.length - 1, onSelect: () => t2((e3) => Math.min(e3 + 1, U.length - 1)) }] });
  }
  function et() {
    let [e2, t2] = Q(false), [n2, l2] = (0, a.useState)(false);
    return (0, i.jsx)(Y, { label: "Editor actions", variant: "solid", items: [{ id: "save", label: e2 ? "Saved" : "Save", reserve: ["Save", "Saved"], icon: e2 ? (0, i.jsx)(r.A, {}) : (0, i.jsx)(_.A, {}), onSelect: () => t2(true) }, n2 ? { id: "preview", label: "Edit", reserve: K, icon: (0, i.jsx)(x.A, {}), onSelect: () => l2(false) } : { id: "preview", label: "Preview", reserve: K, icon: (0, i.jsx)(y.A, {}), onSelect: () => l2(true) }] });
  }
  function en() {
    return (0, i.jsxs)("div", { className: Z().demo, children: [(0, i.jsx)(X, {}), (0, i.jsx)(ee, {}), (0, i.jsx)(et, {})] });
  }
  let ei = en;
}

__m(__module,__exports,__require);
}