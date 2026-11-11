function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { S: () => w });
  var i = n(95155), a = n(12115), r = n(18310), s = n(25354), l = n(28245), o = n(92171), u = n(80642), d = n(35484), c = n(64577), f = n(9005), p = n(18986), h = n(7770), y = n(15958), _ = n.n(y);
  let m = [...h.T.ease.enter], x = [...h.T.ease.standard], v = (e2) => `blur(${e2}px)`, b = () => () => {
  }, g = { ...h.T.spring.snappy, visualDuration: h.T.duration.fast, bounce: 0 }, j = { enter: (e2) => ({ opacity: 0, y: `${0.3 * e2}em`, filter: v(h.T.blur.soft) }), rest: { opacity: 1, y: "0em", filter: v(0), transition: { duration: h.T.duration.standard, ease: m } }, exit: (e2) => ({ opacity: 0, y: `${-0.3 * e2}em`, filter: v(h.T.blur.subtle), transition: { duration: h.T.duration.fast, ease: x } }) }, k = { enter: { opacity: 0 }, rest: { opacity: 1, transition: { duration: h.T.duration.fast } }, exit: { opacity: 0, transition: { duration: h.T.duration.instant } } }, N = { opacity: 1, scale: 1, filter: v(0) }, T = { opacity: 0, scale: 0.6, filter: v(h.T.blur.subtle) }, S = { ...T, transition: { duration: h.T.duration.fast, ease: x } }, E = { opacity: 0 }, C = { opacity: 0, transition: { duration: h.T.duration.instant } }, R = { ...h.T.spring.snappy, opacity: { duration: h.T.duration.fast, ease: m }, filter: { duration: h.T.duration.fast, ease: m } };
  function $({ reduced: e2 }) {
    return (0, i.jsx)("svg", { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2.25, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: (0, i.jsx)(s.PY1.path, { d: "M4 12.5l5 5L20 6.5", initial: !e2 && { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 }, transition: { pathLength: { duration: 0.32, ease: m, delay: 0.06 }, opacity: { duration: 0.05, delay: 0.06 } } }) });
  }
  function I({ id: e2, message: t2, reduced: n2 }) {
    let r2 = (0, a.useRef)(null), d2 = (0, l.d)(0);
    return (0, a.useEffect)(() => {
      let e3 = r2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = false, i2 = new ResizeObserver(([i3]) => {
        if (!i3) return;
        let a2 = i3.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight;
        if (!t3 || n2) {
          t3 = true, d2.jump(a2);
          return;
        }
        (0, o.i)(d2, a2, h.T.spring.smooth);
      });
      return i2.observe(e3, { box: "border-box" }), () => {
        i2.disconnect(), d2.stop();
      };
    }, [d2, n2]), (0, i.jsx)(s.PY1.span, { className: _().reveal, style: { height: d2 }, children: (0, i.jsx)("span", { ref: r2, id: e2, className: _().revealInner, "aria-live": "polite", children: (0, i.jsx)(u.N, { mode: "popLayout", initial: false, custom: 1, children: t2 && (0, i.jsx)(s.PY1.span, { className: _().message, "data-tone": t2.tone, custom: 1, variants: n2 ? k : j, initial: "enter", animate: "rest", exit: "exit", children: t2.node }, t2.key) }) }) });
  }
  function w({ value: e2, onSave: t2, label: n2, validate: y2, placeholder: m2 = "", multiline: x2 = false, variant: v2 = "title", as: L = "span", className: P }) {
    let z, O, A = (z = (0, a.useSyncExternalStore)(b, () => true, () => false), O = (0, r.I)() ?? false, z && O), D = (0, a.useId)(), B = `${D}-display`, W = `${D}-edit`, Y = `${D}-message`, [F, K] = (0, a.useState)(e2), [M, H] = (0, a.useState)(e2), [X, q] = (0, a.useState)(e2), [G, J] = (0, a.useState)({ key: 0, direction: 1 }), [V, Z] = (0, a.useState)(false), [Q, U] = (0, a.useState)(e2), [ee, et] = (0, a.useState)("idle"), [en, ei] = (0, a.useState)(null), [ea, er] = (0, a.useState)(null), [es, el] = (0, a.useState)(null), [eo, eu] = (0, a.useState)(""), ed = (0, a.useRef)(null), ec = (0, a.useRef)(null), ef = (0, a.useRef)(null), ep = (0, a.useRef)(null), eh = (0, a.useRef)(false), ey = (0, a.useRef)(0), e_ = (0, a.useRef)([]), em = (0, a.useRef)(null), ex = (0, a.useRef)(null), ev = (0, l.d)("100%"), eb = (0, l.d)("auto"), eg = (0, a.useRef)(0), ej = (0, a.useRef)(false);
    e2 !== X && (q(e2), e2 !== F && (K(e2), V || "saving" === ee || e2 === M || (H(e2), J((e3) => ({ key: e3.key + 1, direction: 1 })))));
    let ek = V ? Q : M, eN = "saving" === ee, eT = (e3, t3) => {
      e_.current.push(setTimeout(e3, t3));
    };
    (0, a.useEffect)(() => () => e_.current.forEach(clearTimeout), []);
    let eS = () => {
      let e3 = ec.current;
      return e3 ? parseFloat(getComputedStyle(e3)[x2 ? "height" : "width"]) : 0;
    }, eE = (e3) => {
      let t3 = ef.current;
      x2 && t3 && (t3.style.height = `${e3}px`, t3.scrollTop = 0);
      let n3 = x2 ? ex.current : em.current;
      n3 && (n3.style[x2 ? "height" : "width"] = `${e3}px`), (x2 ? eb : ev).jump(e3);
    }, eC = (0, a.useEffectEvent)(() => {
      let e3 = eS(), t3 = eg.current, n3 = V && ej.current;
      if (eg.current = e3, ej.current = V, !e3) return;
      let i2 = ef.current;
      x2 && i2 && (i2.style.height = `${e3}px`, i2.scrollTop = 0);
      let a2 = x2 ? eb : ev;
      !t3 || A || "number" != typeof a2.get() ? eE(e3) : 0.1 > Math.abs(e3 - t3) || (0, o.i)(a2, e3, x2 ? h.T.spring.smooth : n3 ? g : h.T.spring.morph);
    });
    (0, a.useLayoutEffect)(() => {
      eC();
    }, [ek, V, x2, A]);
    let eR = (0, a.useEffectEvent)(() => {
      let e3 = eS();
      !e3 || 0.1 > Math.abs(e3 - eg.current) || (eg.current = e3, eE(e3));
    });
    function e$(e3, t3 = M) {
      V || eN || (U(t3), Z(true), ei(null), er(null), el(null), "idle" !== ee && et("idle"), ep.current = e3);
    }
    (0, a.useEffect)(() => {
      let e3 = ec.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => eR());
      return t3.observe(e3, { box: "border-box" }), () => t3.disconnect();
    }, []), (0, a.useLayoutEffect)(() => {
      let e3 = ef.current;
      if (V && e3 && null !== ep.current) {
        let t3 = ep.current;
        ep.current = null, e3.focus({ preventScroll: true }), "all" === t3 ? e3.select() : e3.setSelectionRange(t3, t3);
      }
      !V && eh.current && (eh.current = false, ec.current?.focus({ preventScroll: true }));
    });
    let eI = (e3) => x2 ? e3.trim() : e3.replace(/\s+/g, " ").trim();
    function ew(e3) {
      let i2 = eI(Q), a2 = y2?.(i2) || null;
      if (a2) {
        ei(a2), "blur" !== e3 && ef.current?.focus();
        return;
      }
      if (Z(false), ei(null), "blur" !== e3 && (eh.current = true), i2 !== Q && J((e4) => ({ key: e4.key + 1, direction: 1 })), i2 === M) return;
      let r2 = ++ey.current;
      H(i2), et("saving"), eu(`Saving ${n2.toLowerCase()}`), Promise.resolve().then(() => t2(i2)).then(() => {
        r2 === ey.current && (K(i2), et("saved"), eu(`${n2} saved`), eT(() => et((e4) => "saved" === e4 ? "idle" : e4), 1800));
      }, () => {
        r2 === ey.current && (H(F), J((e4) => ({ key: e4.key + 1, direction: -1 })), et("failed"), er(i2), el("on"), eu(""), eT(() => el((e4) => "on" === e4 ? "off" : e4), 1400), eT(() => el((e4) => "off" === e4 ? null : e4), 2e3));
      });
    }
    function eL() {
      Z(false), ei(null), eh.current = true, Q !== M && J((e3) => ({ key: e3.key + 1, direction: -1 }));
    }
    let eP = n2.toLowerCase(), ez = en ? { key: `error:${en}`, tone: "error", node: (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(d.A, { className: _().messageIcon, size: 14, strokeWidth: 2, "aria-hidden": "true" }), (0, i.jsx)("span", { children: en })] }) } : ea && !V ? { key: `failed:${ea}`, tone: "failed", node: (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(d.A, { className: _().messageIcon, size: 14, strokeWidth: 2, "aria-hidden": "true" }), (0, i.jsxs)("span", { children: [`Couldn\u2019t save \u201C${ea}\u201D, so the last saved ${eP} is back.`, " ", (0, i.jsx)("button", { type: "button", className: _().retry, onClick: function() {
      ea && e$(ea.length, ea);
    }, children: "Try again" })] })] }) } : null, eO = V ? "edit" : ee, eA = (e3) => [e3, ez ? Y : null].filter(Boolean).join(" "), eD = { className: _().control, value: Q, onChange: function(e3) {
      let t3 = e3.target.value;
      U(t3), en && ei(y2?.(eI(t3)) || null);
    }, onKeyDown: function(e3) {
      if ("Escape" === e3.key) {
        e3.preventDefault(), e3.stopPropagation(), eL();
        return;
      }
      "Enter" !== e3.key || e3.nativeEvent.isComposing || x2 && e3.shiftKey || (e3.preventDefault(), ew("key"));
    }, placeholder: m2, "aria-label": n2, "aria-invalid": !!en || void 0, "aria-describedby": eA(W), autoComplete: "off", spellCheck: "body" === v2 };
    return (0, i.jsxs)("div", { ref: ed, className: [_().root, P].filter(Boolean).join(" "), "data-variant": v2, "data-multiline": x2 || void 0, "data-editing": V || void 0, "data-phase": ee, "data-invalid": en ? "" : void 0, "data-flash": es ?? void 0, onBlur: function(e3) {
      if (!V) return;
      let t3 = e3.relatedTarget;
      t3 && ed.current?.contains(t3) || (t3 || document.hasFocus()) && ew("blur");
    }, children: [(0, i.jsx)(L, { className: _().line, children: (0, i.jsxs)(s.PY1.span, { ref: ex, className: _().box, style: x2 ? { height: eb } : void 0, children: [(0, i.jsx)("button", { ref: ec, type: "button", className: _().display, onClick: function(e3) {
      eN || e$(0 === e3.detail ? "all" : (function(e4, t3) {
        let n3 = ec.current?.querySelector(`[data-layer="${G.key}"]`)?.firstChild;
        if (!n3 || !M) return M.length;
        let i2 = document, a2 = i2.caretPositionFromPoint?.(e4, t3);
        if (a2) return a2.offsetNode === n3 ? Math.min(a2.offset, M.length) : M.length;
        let r2 = i2.caretRangeFromPoint?.(e4, t3);
        return r2 && r2.startContainer === n3 ? Math.min(r2.startOffset, M.length) : M.length;
      })(e3.clientX, e3.clientY));
    }, tabIndex: V ? -1 : void 0, "aria-label": `${n2}: ${M || m2}`, "aria-describedby": eA(B), "aria-disabled": eN || void 0, children: (0, i.jsx)("span", { className: _().layer, "data-empty": ek ? void 0 : "", children: (0, i.jsx)(u.N, { mode: "popLayout", initial: false, custom: G.direction, children: (0, i.jsx)(s.PY1.span, { "data-layer": G.key, className: _().text, custom: G.direction, variants: A ? k : j, initial: "enter", animate: "rest", exit: "exit", children: (ek || m2 || "\u200B") + (x2 && V ? "\u200B" : "") }, G.key) }) }) }), V && (x2 ? (0, i.jsx)("textarea", { ref: (e3) => {
      ef.current = e3;
    }, ...eD, rows: 1, enterKeyHint: "done" }) : (0, i.jsx)("input", { ref: (e3) => {
      ef.current = e3;
    }, ...eD, type: "text", enterKeyHint: "done" })), (0, i.jsx)(s.PY1.span, { ref: em, className: _().frame, style: x2 ? void 0 : { width: ev }, children: (0, i.jsx)("span", { className: _().slot, children: (0, i.jsx)(u.N, { initial: false, children: (0, i.jsx)(s.PY1.span, { className: _().slotItem, initial: A ? E : T, animate: N, exit: A ? C : S, transition: A ? { duration: h.T.duration.fast } : R, children: "edit" === eO ? (0, i.jsxs)("span", { className: _().actions, children: [(0, i.jsx)("button", { type: "button", className: _().save, "aria-label": `Save ${eP}`, onPointerDown: (e3) => e3.preventDefault(), onClick: () => ew("button"), children: (0, i.jsx)(c.A, { size: 15, strokeWidth: 2, "aria-hidden": "true" }) }), (0, i.jsx)("button", { type: "button", className: _().cancel, "aria-label": "Cancel editing", onPointerDown: (e3) => e3.preventDefault(), onClick: eL, children: (0, i.jsx)(f.A, { size: 15, strokeWidth: 2, "aria-hidden": "true" }) })] }) : "saving" === eO ? (0, i.jsx)("span", { className: _().spinner, "aria-hidden": "true" }) : "saved" === eO ? (0, i.jsx)("span", { className: _().saved, "aria-hidden": "true", children: (0, i.jsx)($, { reduced: A }) }) : "failed" === eO ? (0, i.jsx)(d.A, { className: _().failedIcon, size: 16, strokeWidth: 1.75, "aria-hidden": "true" }) : (0, i.jsx)(p.A, { className: _().pencil, size: 14, strokeWidth: 1.75, "aria-hidden": "true", onClick: () => e$(M.length) }) }, eO) }) }) })] }) }), (0, i.jsx)(I, { id: Y, message: ez, reduced: A }), (0, i.jsx)("span", { id: B, className: _().srOnly, children: "Activate to edit." }), (0, i.jsx)("span", { id: W, className: _().srOnly, children: x2 ? "Enter saves, Shift+Enter adds a line break, Escape cancels." : "Enter saves, Escape cancels." }), (0, i.jsx)("span", { className: _().srOnly, role: "status", children: eo })] });
  }
}

__m(__module,__exports,__require);
}