function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { H: () => v });
  var a = n(95155), i = n(12115), r = n(47650), s = n(28245), o = n(92171), l = n(25354), c = n(80642), u = n(18310), p = n(7890), d = n(65377), h = n(9005), m = n(7770), f = n(99174), g = n.n(f);
  let x = [...m.T.ease.enter], y = [...m.T.ease.standard];
  function _({ text: e2, query: t2 }) {
    let n2 = t2 ? e2.toLocaleLowerCase().indexOf(t2.toLocaleLowerCase()) : -1;
    return n2 < 0 ? e2 : (0, a.jsxs)(a.Fragment, { children: [e2.slice(0, n2), (0, a.jsx)("mark", { className: g().mark, children: e2.slice(n2, n2 + t2.length) }), e2.slice(n2 + t2.length)] });
  }
  function b({ width: e2, reduced: t2, children: n2 }) {
    let r2 = (0, i.useRef)(null), c2 = (0, i.useRef)(null), u2 = (0, s.d)(0);
    return (0, i.useLayoutEffect)(() => {
      let e3 = r2.current, n3 = c2.current;
      if (!e3 || !n3 || "u" < typeof ResizeObserver) return;
      let a2 = new ResizeObserver(() => {
        let a3 = n3.offsetHeight + e3.offsetHeight - e3.clientHeight;
        t2 ? u2.jump(a3) : (0, o.i)(u2, a3, m.T.spring.smooth);
      });
      return a2.observe(n3), () => a2.disconnect();
    }, [u2, t2]), (0, a.jsx)(l.PY1.div, { ref: r2, className: g().panel, style: { width: e2, height: t2 ? "auto" : u2 }, initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: t2 ? 0.15 : m.T.duration.fast, ease: x } }, exit: { opacity: 0, transition: { duration: t2 ? 0.1 : m.T.duration.instant, ease: y } }, children: (0, a.jsx)("div", { ref: c2, className: g().body, children: n2 }) });
  }
  function j({ id: e2, label: t2, groups: n2, query: r2, activeIndex: u2, optionId: p2, reduced: d2, keyboard: h2, onHover: f2, onChoose: y2 }) {
    let b2 = (0, i.useRef)(null), v2 = n2.flatMap((e3) => e3.items), w = v2.map((e3) => e3.id).join("|"), T = v2[u2], N = T ? p2(T) : "", k = (0, s.d)(0), L = (0, s.d)(1), M = (0, i.useRef)(null);
    return (0, i.useLayoutEffect)(() => {
      let e3 = b2.current, t3 = N ? document.getElementById(N) : null;
      if (!e3 || !t3) {
        M.current = null;
        return;
      }
      let n3 = (function(e4, t4) {
        let n4 = 0, a3 = e4;
        for (; a3 && a3 !== t4; ) n4 += a3.offsetTop, a3 = a3.offsetParent;
        return n4;
      })(t3, e3), a2 = M.current;
      if (M.current = { id: N, set: w, top: n3 }, a2?.id !== N) {
        if (a2 && a2.set === w && !d2) {
          let e4 = k.getVelocity();
          k.jump(a2.top + k.get() - n3), (0, o.i)(k, 0, { ...m.T.spring.snappy, velocity: e4 });
        } else k.jump(0), d2 ? L.jump(1) : (L.jump(0), (0, o.i)(L, 1, { duration: m.T.duration.instant, ease: x }));
        h2.current && t3.scrollIntoView({ block: "nearest" });
      }
    }, [N, w, d2, k, L, h2]), (0, a.jsx)("div", { ref: b2, id: e2, role: "listbox", "aria-label": t2, className: g().listbox, children: (0, a.jsx)(c.N, { mode: "popLayout", initial: false, children: n2.map((t3) => {
      let n3 = `${e2}-${t3.name || "results"}`.replace(/\s+/g, "-");
      return (0, a.jsxs)(l.PY1.div, { role: "group", "aria-labelledby": t3.name ? n3 : void 0, className: g().group, layout: !d2 && "position", layoutDependency: w, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0, transition: { duration: 0.08 } }, transition: { opacity: { duration: m.T.duration.fast, ease: x }, layout: m.T.spring.smooth }, children: [t3.name && (0, a.jsx)("div", { id: n3, className: g().groupLabel, role: "presentation", children: t3.name }), (0, a.jsx)(c.N, { mode: "popLayout", initial: false, children: t3.items.map((e3) => {
        let t4 = v2.indexOf(e3), n4 = t4 === u2;
        return (0, a.jsxs)(l.PY1.div, { id: p2(e3), role: "option", "aria-selected": n4, "data-active": n4 || void 0, className: g().option, layout: !d2 && "position", layoutDependency: w, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0, transition: { duration: 0.08 } }, transition: { opacity: { duration: m.T.duration.fast, ease: x }, layout: m.T.spring.smooth }, onPointerMove: () => {
          n4 || (h2.current = false, f2(t4));
        }, onMouseDown: (e4) => e4.preventDefault(), onClick: () => y2(e3), children: [n4 && (0, a.jsx)(l.PY1.span, { className: g().highlight, style: { y: k, opacity: L }, "aria-hidden": "true" }), e3.icon && (0, a.jsx)("span", { className: g().optionIcon, "aria-hidden": "true", children: e3.icon }), (0, a.jsxs)("span", { className: g().optionText, children: [(0, a.jsx)("span", { className: g().optionTitle, children: (0, a.jsx)(_, { text: e3.title, query: r2 }) }), e3.meta && (0, a.jsx)("span", { className: g().optionMeta, children: e3.meta })] })] }, e3.id);
      }) })] }, t3.name);
    }) }) });
  }
  function v({ label: e2, items: t2, suggestions: n2 = [], suggestionsLabel: f2 = "Recent", placeholder: _2, onSelect: w, onExpandedChange: T, expandedWidth: N = 360, maxResults: k = 6, anchor: L = "end", emptyHint: M = "Try a shorter word or check the spelling.", className: C }) {
    let R = (0, i.useId)(), $ = (0, u.I)() ?? false, P = (0, i.useRef)(null), D = (0, i.useRef)(null), H = (0, i.useRef)(null), O = (0, i.useRef)(null), [S, E] = (0, i.useState)(false), [I, Y] = (0, i.useState)(false), [A, F] = (0, i.useState)(""), [z, W] = (0, i.useState)(-1), q = (0, i.useRef)(false), B = (0, i.useRef)({ collapsed: 44, expanded: N }), K = (0, s.d)(44), V = (0, i.useRef)(false), X = (0, i.useCallback)((e3) => {
      let { collapsed: t3, expanded: n3 } = B.current;
      D.current?.style.setProperty("--es-open", String(Math.min(1, Math.max(0, (e3 - t3) / Math.max(1, n3 - t3)))));
    }, []);
    (0, p.L)(K, "change", X), (0, i.useLayoutEffect)(() => {
      let e3 = P.current, t3 = D.current;
      if (!e3 || !t3) return;
      let n3 = () => {
        let n4 = t3.offsetHeight || 44, a3 = Math.max(n4, Math.min(N, e3.clientWidth));
        B.current = { collapsed: n4, expanded: a3 }, e3.style.setProperty("--es-width", `${a3}px`);
        let i2 = q.current ? a3 : n4;
        K.isAnimating() ? (0, o.i)(K, i2, m.T.spring.morph) : K.jump(i2), X(K.get());
      };
      if (n3(), "u" < typeof ResizeObserver) return;
      let a2 = new ResizeObserver(n3);
      return a2.observe(e3), () => a2.disconnect();
    }, [N, K, X]);
    let G = (e3) => {
      $ ? K.jump(e3) : (0, o.i)(K, e3, e3 >= K.get() ? m.T.spring.morph : m.T.spring.smooth);
    };
    function Q(e3) {
      q.current && (q.current = false, (0, r.flushSync)(() => {
        E(false), Y(false), F(""), W(-1);
      }), e3 && O.current?.focus({ preventScroll: true }), G(B.current.collapsed), T?.(false));
    }
    let J = A.trim(), U = (0, i.useMemo)(() => {
      let e3, n3;
      return J ? (e3 = J.toLocaleLowerCase(), n3 = [], t2.forEach((t3, a2) => {
        let i2 = t3.title.toLocaleLowerCase(), r2 = i2.indexOf(e3), s2 = [t3.meta ?? "", ...t3.keywords ?? []].some((t4) => t4.toLocaleLowerCase().includes(e3)), o2 = 0 === r2 ? 0 : r2 > 0 && /[\s\-/]/.test(i2[r2 - 1]) ? 1 : r2 > 0 ? 2 : s2 ? 3 : -1;
        o2 >= 0 && n3.push({ item: t3, score: o2, order: a2 });
      }), n3.sort((e4, t3) => e4.score - t3.score || e4.order - t3.order).slice(0, k).map((e4) => e4.item)) : [];
    }, [t2, J, k]), Z = J ? U.length ? "results" : "empty" : n2.length ? "suggestions" : null, ee = (0, i.useMemo)(() => {
      let e3, a2;
      return "suggestions" === Z ? [{ name: f2, items: n2 }] : "results" === Z ? (e3 = /* @__PURE__ */ new Map(), t2.forEach((t3, n3) => {
        let a3 = t3.group ?? "";
        e3.has(a3) || e3.set(a3, n3);
      }), a2 = /* @__PURE__ */ new Map(), U.forEach((e4) => {
        let t3 = e4.group ?? "";
        a2.set(t3, [...a2.get(t3) ?? [], e4]);
      }), [...a2].sort((t3, n3) => (e3.get(t3[0]) ?? 0) - (e3.get(n3[0]) ?? 0)).map(([e4, t3]) => ({ name: e4, items: t3 }))) : [];
    }, [Z, n2, f2, U, t2]), et = ee.flatMap((e3) => e3.items), en = Math.min(z, et.length - 1), ea = et[en], ei = (e3) => `${R}-${Z}-${e3.id}`, er = `${R}-${Z}-listbox`, es = S && I && null !== Z, eo = es ? "empty" === Z ? `No results for ${J}` : "results" === Z ? `${et.length} ${1 === et.length ? "result" : "results"}` : `${et.length} ${f2.toLocaleLowerCase()} ${1 === et.length ? "item" : "items"}` : "";
    function el(e3) {
      Q(true), w?.(e3);
    }
    let ec = $ ? { opacity: 0 } : { opacity: 0, scale: 0.6, filter: `blur(${m.T.blur.subtle}px)` };
    return (0, a.jsxs)("div", { ref: P, className: [g().root, C].filter(Boolean).join(" "), "data-anchor": L, children: [(0, a.jsxs)(l.PY1.div, { ref: D, className: g().shell, "data-expanded": S || void 0, style: { width: K }, children: [(0, a.jsx)("button", { ref: O, type: "button", className: g().trigger, "aria-label": e2, hidden: S, onClick: function() {
      q.current || (q.current = true, (0, r.flushSync)(() => {
        E(true), Y(true);
      }), H.current?.focus({ preventScroll: true }), G(B.current.expanded), T?.(true));
    } }), (0, a.jsx)(d.A, { className: g().icon, width: 18, height: 18, strokeWidth: 1.75, "aria-hidden": "true" }), (0, a.jsx)(l.PY1.input, { ref: H, className: g().input, type: "text", role: "combobox", inert: !S, value: A, placeholder: _2 ?? e2, "aria-label": e2, "aria-expanded": es, "aria-controls": es && "empty" !== Z ? er : void 0, "aria-autocomplete": "list", "aria-activedescendant": es && ea ? ei(ea) : void 0, autoComplete: "off", autoCorrect: "off", spellCheck: false, enterKeyHint: "search", initial: false, animate: { opacity: +!!S }, transition: S ? { duration: $ ? 0.15 : 0.2, ease: x, delay: 0.08 * !$ } : { duration: $ ? 0.1 : 0.08, ease: y }, onChange: (e3) => {
      let t3 = e3.target.value;
      F(t3), W(t3.trim() ? 0 : -1), V.current = false;
    }, onFocus: () => Y(true), onBlur: () => {
      ("u" < typeof document || document.hasFocus()) && (Y(false), q.current && !H.current?.value.trim() && Q(false));
    }, onKeyDown: function(e3) {
      if ("Escape" === e3.key) {
        e3.preventDefault(), Q(true);
        return;
      }
      if (es && et.length) if ("ArrowDown" === e3.key || "ArrowUp" === e3.key) {
        e3.preventDefault();
        let t3 = "ArrowDown" === e3.key ? 1 : -1;
        V.current = true, W(en < 0 ? t3 > 0 ? 0 : et.length - 1 : (en + t3 + et.length) % et.length);
      } else "Enter" === e3.key && ea && (e3.preventDefault(), el(ea));
    } }), (0, a.jsx)(c.N, { initial: false, children: S && A && (0, a.jsx)(l.PY1.button, { type: "button", tabIndex: -1, className: g().clear, "aria-label": "Clear search", onMouseDown: (e3) => e3.preventDefault(), onClick: () => {
      F(""), W(-1), H.current?.focus({ preventScroll: true });
    }, initial: ec, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, exit: { ...ec, transition: { duration: $ ? 0.1 : m.T.duration.instant, ease: y } }, transition: $ ? { duration: 0.15 } : { ...m.T.spring.snappy, opacity: { duration: m.T.duration.fast }, filter: { duration: m.T.duration.fast } }, children: (0, a.jsx)(h.A, { width: 16, height: 16, strokeWidth: 1.75, "aria-hidden": "true" }) }, "clear") })] }), (0, a.jsx)(c.N, { children: es && (0, a.jsx)(b, { width: K, reduced: $, children: (0, a.jsx)(c.N, { mode: "popLayout", initial: false, children: (0, a.jsx)(l.PY1.div, { className: g().view, initial: $ ? { opacity: 0 } : { opacity: 0, filter: `blur(${m.T.blur.subtle}px)` }, animate: { opacity: 1, filter: "blur(0px)" }, exit: { opacity: 0, transition: { duration: 0.1, ease: y } }, transition: { duration: $ ? 0.15 : m.T.duration.fast, ease: x }, children: "empty" === Z ? (0, a.jsxs)("div", { className: g().empty, children: [(0, a.jsxs)("p", { className: g().emptyTitle, children: ["No results for \u201C", J, "\u201D"] }), (0, a.jsx)("p", { className: g().emptyHint, children: M })] }) : (0, a.jsx)(j, { id: er, label: "suggestions" === Z ? f2 : `Results for ${J}`, groups: ee, query: "results" === Z ? J : "", activeIndex: en, optionId: ei, reduced: $, keyboard: V, onHover: W, onChoose: el }) }, Z) }) }, "panel") }), (0, a.jsx)("span", { className: g().srOnly, role: "status", "aria-live": "polite", children: eo })] });
  }
}

__m(__module,__exports,__require);
}