function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { ExpandingButtonGroupDemo: () => X, default: () => K });
  var a = n(95155), i = n(45165), r = n(90946), l = n(32159), d = n(59103), o = n(25879), s = n(50825), u = n(51128), c = n(87979), p = n(50626), h = n(99314), b = n(62700), y = n(12115), m = n(25354), x = n(28245), g = n(92171), f = n(80642), k = n(18310), v = n(7770), j = n(79666), w = n.n(j);
  let A = { sm: { height: 28, icon: 14, start: 7, gap: 5, end: 11 }, md: { height: 36, icon: 16, start: 10, gap: 7, end: 14 } }, _ = [...v.T.ease.enter], L = [...v.T.ease.standard], M = { shown: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: v.T.duration.standard, ease: _, delay: 0.04 } }, hidden: { opacity: 0, x: -6, filter: `blur(${v.T.blur.subtle}px)`, transition: { duration: v.T.duration.instant, ease: L } } }, T = { shown: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: v.T.duration.instant } }, hidden: { opacity: 0, x: 0, filter: "blur(0px)", transition: { duration: v.T.duration.instant } } }, z = { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }, R = { opacity: 0, y: "0.5em", filter: `blur(${v.T.blur.soft}px)` }, P = { opacity: 0, y: "-0.4em", filter: `blur(${v.T.blur.subtle}px)`, transition: { duration: v.T.duration.fast, ease: L } }, N = { opacity: 0, scale: 0.55, filter: `blur(${v.T.blur.subtle}px)` }, E = { ...N, transition: { duration: v.T.duration.fast, ease: L } }, S = { ...z, opacity: 0 }, D = { opacity: 0, transition: { duration: v.T.duration.instant } }, C = { duration: v.T.duration.standard, ease: _ }, $ = { ...v.T.spring.snappy, opacity: { duration: v.T.duration.fast, ease: _ }, filter: { duration: v.T.duration.fast, ease: _ } }, V = { duration: v.T.duration.instant };
  function B({ reduced: e2 }) {
    return (0, a.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: (0, a.jsx)(m.PY1.path, { d: "M4 12.5l5 5L20 6.5", initial: !e2 && { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 }, transition: { pathLength: { duration: v.T.duration.standard, ease: _, delay: 0.06 }, opacity: { duration: 0.05, delay: 0.06 } } }) });
  }
  function F({ item: e2, size: t2, expanded: n2, done: i2, busy: r2, tabStop: l2, reduced: d2, onPointerDown: o2, onClick: s2, onFocus: u2 }) {
    let c2 = A[t2], p2 = (0, y.useRef)(null), h2 = (0, y.useRef)(null), [b2, k2] = (0, y.useState)(0);
    (0, y.useLayoutEffect)(() => {
      let e3 = () => {
        let e4 = Math.max(p2.current?.getBoundingClientRect().width ?? 0, h2.current?.getBoundingClientRect().width ?? 0);
        k2((t4) => 0.5 > Math.abs(t4 - e4) ? t4 : e4);
      };
      if (e3(), "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(e3);
      return p2.current && t3.observe(p2.current), h2.current && t3.observe(h2.current), () => t3.disconnect();
    }, [e2.label, e2.doneLabel, t2]);
    let j2 = i2 && !!e2.doneLabel, _2 = b2 > 0, L2 = n2 && _2 ? c2.start + c2.icon + c2.gap + b2 + c2.end : c2.height, Y2 = (0, x.d)(L2), H2 = (0, y.useRef)(false);
    (0, y.useLayoutEffect)(() => {
      if (!H2.current || d2) {
        Y2.jump(L2), _2 && (H2.current = true);
        return;
      }
      (0, g.i)(Y2, L2, v.T.spring.morph);
    }, [L2, _2, d2, Y2]);
    let O2 = j2 ? e2.doneLabel : e2.label;
    return (0, a.jsxs)(m.PY1.button, { type: "button", className: w().item, style: { width: Y2 }, "data-ebg-item": "", "data-id": e2.id, "data-tone": e2.tone ?? "neutral", "data-state": j2 ? "done" : "idle", "data-expanded": n2 || void 0, "data-unmeasured": _2 ? void 0 : "", "aria-label": e2.label, "aria-disabled": e2.disabled || void 0, "aria-busy": r2 || void 0, tabIndex: l2 ? 0 : -1, onPointerDown: (t3) => o2(e2, t3), onClick: () => s2(e2), onFocus: (t3) => u2(e2, t3), children: [(0, a.jsx)("span", { className: w().icon, "aria-hidden": "true", children: (0, a.jsx)(f.N, { initial: false, children: (0, a.jsx)(m.PY1.span, { className: w().glyph, initial: d2 ? S : N, animate: z, exit: d2 ? D : E, transition: d2 ? V : $, children: j2 ? (0, a.jsx)(B, { reduced: d2 }) : e2.icon }, j2 ? "done" : "icon") }) }), (0, a.jsxs)(m.PY1.span, { className: w().label, "aria-hidden": "true", variants: d2 ? T : M, initial: false, animate: n2 ? "shown" : "hidden", children: [(0, a.jsx)(f.N, { initial: false, children: (0, a.jsx)(m.PY1.span, { className: w().word, initial: d2 ? S : R, animate: z, exit: d2 ? D : P, transition: d2 ? V : C, children: O2 }, O2) }), (0, a.jsx)("span", { ref: p2, className: w().sizer, children: e2.label }), e2.doneLabel ? (0, a.jsx)("span", { ref: h2, className: w().sizer, children: e2.doneLabel }) : null] })] });
  }
  function Y({ items: e2, label: t2, size: n2 = "md", defaultExpanded: i2 = null, onAction: r2, confirmDuration: l2 = 1400, className: d2, style: o2 }) {
    let s2 = (0, k.I)() ?? false, u2 = (0, y.useRef)(null), [c2, p2] = (0, y.useState)(null), [h2, b2] = (0, y.useState)(null), [m2, x2] = (0, y.useState)(null), [g2, f2] = (0, y.useState)(""), [v2, j2] = (0, y.useState)(null), _2 = (0, y.useRef)(null), L2 = (0, y.useRef)(null), M2 = (0, y.useRef)(null), T2 = (0, y.useRef)(null), z2 = (0, y.useRef)(null), R2 = (0, y.useRef)(null), P2 = (0, y.useRef)(null), N2 = (0, y.useRef)(true), E2 = (0, y.useRef)(0);
    (0, y.useEffect)(() => (N2.current = true, () => {
      N2.current = false, P2.current && clearTimeout(P2.current);
    }), []);
    let S2 = (t3) => !!t3 && e2.some((e3) => e3.id === t3), D2 = e2.find((e3) => !e3.disabled)?.id ?? e2[0]?.id ?? null, C2 = S2(i2) ? i2 : D2, $2 = S2(c2) ? c2 : C2, V2 = S2(v2) ? v2 : C2;
    (0, y.useEffect)(() => {
      if (!c2 || T2.current !== c2) return;
      let e3 = (e4) => {
        u2.current?.contains(e4.target) || (T2.current = null, p2(R2.current ?? M2.current));
      };
      return document.addEventListener("pointerdown", e3, true), () => document.removeEventListener("pointerdown", e3, true);
    }, [c2]);
    let B2 = (0, y.useCallback)((e3) => {
      P2.current && clearTimeout(P2.current), E2.current += 1, R2.current = e3.id, b2({ id: e3.id, seq: E2.current }), f2(`${e3.doneLabel}${E2.current % 2 ? "" : "\u200B"}`), P2.current = setTimeout(() => {
        R2.current = null, b2(null), _2.current !== e3.id && M2.current !== e3.id && (T2.current === e3.id && (T2.current = null), p2((t3) => t3 === e3.id ? _2.current ?? M2.current : t3));
      }, l2);
    }, [l2]), H2 = (0, y.useCallback)(async (e3) => {
      let t3;
      if (!e3.disabled && m2 !== e3.id && R2.current !== e3.id) {
        p2(e3.id), r2?.(e3.id);
        try {
          let n3 = e3.onSelect?.();
          n3 instanceof Promise ? (x2(e3.id), t3 = await n3) : t3 = n3;
        } catch {
          t3 = false;
        } finally {
          N2.current && x2((t4) => t4 === e3.id ? null : t4);
        }
        N2.current && false !== t3 && e3.doneLabel && B2(e3);
      }
    }, [m2, B2, r2]), O2 = (e3, t3) => {
      z2.current = { id: e3.id, kind: t3.pointerType, wasExpanded: $2 === e3.id };
    }, q2 = (e3) => {
      let t3 = z2.current;
      if (z2.current = null, t3 && t3.id === e3.id && "touch" === t3.kind && !t3.wasExpanded) {
        T2.current = e3.id, p2(e3.id);
        return;
      }
      t3?.kind === "touch" && (T2.current = e3.id), H2(e3);
    }, G2 = (e3, t3) => {
      j2(e3.id);
      let n3 = true;
      try {
        n3 = t3.currentTarget.matches(":focus-visible");
      } catch {
      }
      n3 && (M2.current = e3.id, p2(e3.id));
    }, I2 = A[n2], X2 = { "--ebg-h": `${I2.height}px`, "--ebg-icon": `${I2.icon}px`, "--ebg-start": `${I2.start}px`, "--ebg-gap": `${I2.gap}px`, "--ebg-end": `${I2.end}px`, ...o2 };
    return (0, a.jsxs)("div", { ref: u2, role: "toolbar", "aria-label": t2, "aria-orientation": "horizontal", className: [w().group, w()[n2], d2].filter(Boolean).join(" "), style: X2, onKeyDown: (e3) => {
      let t3 = Array.from(u2.current?.querySelectorAll("[data-ebg-item]") ?? []), n3 = t3.findIndex((e4) => e4 === document.activeElement);
      if (n3 < 0) return;
      let a2 = t3.length - 1, i3 = "ArrowRight" === e3.key ? n3 === a2 ? 0 : n3 + 1 : "ArrowLeft" === e3.key ? 0 === n3 ? a2 : n3 - 1 : "Home" === e3.key ? 0 : "End" === e3.key ? a2 : -1;
      i3 < 0 || (e3.preventDefault(), t3[i3].focus());
    }, onBlur: (e3) => {
      u2.current?.contains(e3.relatedTarget) || (M2.current = null, T2.current = null, p2(_2.current ?? R2.current));
    }, onPointerMove: (e3) => {
      if ("mouse" !== e3.pointerType) return;
      let t3 = L2.current;
      if (t3 && 1 > Math.abs(t3.x - e3.clientX) && 1 > Math.abs(t3.y - e3.clientY)) return;
      L2.current = { x: e3.clientX, y: e3.clientY };
      let n3 = e3.target.closest("[data-ebg-item]"), a2 = n3?.dataset.id;
      if (n3 && a2 && a2 !== _2.current) {
        if (_2.current) {
          let t4 = n3.getBoundingClientRect();
          if (e3.clientX < t4.left + 4 || e3.clientX > t4.right - 4) return;
        }
        _2.current = a2, p2(a2);
      }
    }, onPointerLeave: (e3) => {
      "mouse" === e3.pointerType && (L2.current = null, _2.current = null, p2(R2.current ?? M2.current));
    }, children: [e2.map((e3) => (0, a.jsx)(F, { item: e3, size: n2, expanded: $2 === e3.id, done: h2?.id === e3.id, busy: m2 === e3.id, tabStop: V2 === e3.id, reduced: s2, onPointerDown: O2, onClick: q2, onFocus: G2 }, e3.id)), (0, a.jsx)("span", { className: w().srOnly, role: "status", "aria-live": "polite", children: g2 })] });
  }
  var H = n(39570), O = n.n(H);
  let q = [{ id: "reply", label: "Reply", doneLabel: "Replied", icon: (0, a.jsx)(i.A, {}) }, { id: "forward", label: "Forward", doneLabel: "Forwarded", icon: (0, a.jsx)(r.A, {}) }, { id: "archive", label: "Archive", doneLabel: "Archived", icon: (0, a.jsx)(l.A, {}) }, { id: "snooze", label: "Snooze", doneLabel: "Snoozed", icon: (0, a.jsx)(d.A, {}) }, { id: "delete", label: "Delete", doneLabel: "Deleted", tone: "danger", icon: (0, a.jsx)(o.A, {}) }], G = [{ id: "download", label: "Download", doneLabel: "Downloaded", icon: (0, a.jsx)(s.A, {}), onSelect: () => new Promise((e2) => setTimeout(e2, 700)) }, { id: "link", label: "Copy link", doneLabel: "Copied", icon: (0, a.jsx)(u.A, {}) }, { id: "rename", label: "Rename", doneLabel: "Renamed", icon: (0, a.jsx)(c.A, {}) }], I = [{ id: "publish", label: "Publish", doneLabel: "Published", icon: (0, a.jsx)(p.A, {}) }, { id: "duplicate", label: "Duplicate", doneLabel: "Duplicated", icon: (0, a.jsx)(h.A, {}) }, { id: "pin", label: "Pin", doneLabel: "Pinned", icon: (0, a.jsx)(b.A, {}) }, { id: "delete", label: "Delete", doneLabel: "Deleted", tone: "danger", icon: (0, a.jsx)(o.A, {}) }];
  function X() {
    return (0, a.jsxs)("div", { className: O().demo, children: [(0, a.jsx)("div", { className: O().row, children: (0, a.jsx)(Y, { label: "Message actions", items: q }) }), (0, a.jsx)("div", { className: `${O().row} ${O().rowSm}`, children: (0, a.jsx)(Y, { label: "File actions", size: "sm", items: G }) }), (0, a.jsx)("div", { className: O().row, children: (0, a.jsx)(Y, { label: "Page actions", items: I, defaultExpanded: "publish" }) })] });
  }
  let K = X;
}

__m(__module,__exports,__require);
}