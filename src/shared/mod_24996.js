function(__module,__exports,__require){
"use strict";
function __m(e, i, t) {
  "use strict";
  t.d(i, { E: () => O });
  var n = t(95155), a = t(12115), r = t(80642), s = t(25354), o = t(79196), d = t(18310), l = t(90467), c = t(94088), u = t(7770), p = t(98920), h = t.n(p);
  let g = [...u.T.ease.enter], _ = [...u.T.ease.standard], x = () => () => {
  }, m = (e2, i2) => i2.map((e3) => e3.id).filter((i3) => e2.includes(i3)), y = (e2, i2) => e2.filter((e3) => e3 !== i2), b = (e2, i2) => Object.fromEntries(Object.entries(e2).filter(([e3]) => e3 !== i2)), k = (e2, i2) => e2.find((e3) => e3.id === i2)?.title ?? "Step";
  function f({ steps: e2, completed: i2, hidden: t2 }) {
    let n2 = m(i2, e2);
    return { done: n2, settled: n2, expanded: e2.find((e3) => !n2.includes(e3.id))?.id ?? null, pending: [], errors: {}, groupOpen: false, hidden: t2, message: "" };
  }
  function j(e2, i2) {
    switch (i2.type) {
      case "check": {
        if (e2.done.includes(i2.id)) return e2;
        let t2 = m([...e2.done, i2.id], i2.steps), n2 = i2.steps.length;
        return { ...e2, done: t2, pending: y(e2.pending, i2.id), errors: b(e2.errors, i2.id), message: t2.length === n2 ? `All ${n2} steps done.` : `${k(i2.steps, i2.id)} done. ${t2.length} of ${n2} complete.` };
      }
      case "uncheck": {
        if (!e2.done.includes(i2.id)) return e2;
        let t2 = y(e2.done, i2.id);
        return { ...e2, done: t2, settled: y(e2.settled, i2.id), expanded: e2.expanded ?? i2.id, message: `${k(i2.steps, i2.id)} marked as not done. ${t2.length} of ${i2.steps.length} complete.` };
      }
      case "settle": {
        if (!e2.done.includes(i2.id) || e2.settled.includes(i2.id)) return e2;
        let t2 = e2.expanded;
        if (t2 === i2.id) {
          let n2 = i2.steps.map((e3) => e3.id), a2 = n2.indexOf(i2.id);
          t2 = n2.map((e3, i3) => n2[(a2 + i3 + 1) % n2.length]).find((i3) => !e2.done.includes(i3)) ?? null;
        }
        return { ...e2, settled: m([...e2.settled, i2.id], i2.steps), expanded: t2 };
      }
      case "expand":
        return { ...e2, expanded: e2.expanded === i2.id ? null : i2.id };
      case "start":
        return { ...e2, pending: [...y(e2.pending, i2.id), i2.id], errors: b(e2.errors, i2.id) };
      case "fail":
        return { ...e2, pending: y(e2.pending, i2.id), errors: { ...e2.errors, [i2.id]: i2.message }, message: i2.message };
      case "group":
        return { ...e2, groupOpen: !e2.groupOpen };
      case "hide":
        return { ...e2, hidden: !e2.hidden };
    }
  }
  let T = (e2) => ({ initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1, transition: e2 ? { height: { duration: 0 }, opacity: { duration: 0.15 } } : { height: u.T.spring.smooth, opacity: { duration: u.T.duration.standard, ease: g, delay: 0.04 } } }, exit: { height: 0, opacity: 0, transition: e2 ? { duration: 0 } : { height: { ...u.T.spring.smooth, visualDuration: 0.32 }, opacity: { duration: u.T.duration.fast, ease: _ } } } }), N = { enter: (e2) => ({ opacity: 0, y: `${0.3 * e2}em`, filter: `blur(${u.T.blur.soft}px)` }), center: { opacity: 1, y: "0em", filter: "blur(0px)", transition: { duration: 0.22, ease: g } }, exit: (e2) => ({ opacity: 0, y: `${-0.3 * e2}em`, filter: `blur(${u.T.blur.subtle}px)`, transition: { duration: 0.15, ease: _ } }) }, v = { enter: { opacity: 0 }, center: { opacity: 1, transition: { duration: 0.15 } }, exit: { opacity: 0, transition: { duration: 0.1 } } }, w = { enter: (e2) => ({ opacity: 0, y: `${0.45 * e2}em`, filter: `blur(${u.T.blur.subtle}px)` }), center: { opacity: 1, y: "0em", filter: "blur(0px)", transition: { y: u.T.spring.snappy, opacity: { duration: u.T.duration.fast }, filter: { duration: u.T.duration.fast } } }, exit: (e2) => ({ opacity: 0, y: `${-0.45 * e2}em`, filter: `blur(${u.T.blur.subtle}px)`, transition: { duration: 0.14, ease: _ } }) }, L = (e2) => e2 ? { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.15 } }, exit: { opacity: 0, transition: { duration: 0.1 } } } : { initial: { opacity: 0, scale: 0.6, filter: `blur(${u.T.blur.subtle}px)` }, animate: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { scale: u.T.spring.snappy, opacity: { duration: u.T.duration.fast, ease: g }, filter: { duration: u.T.duration.fast, ease: g } } }, exit: { opacity: 0, scale: 0.6, filter: `blur(${u.T.blur.subtle}px)`, transition: { duration: 0.12, ease: _ } } };
  function S({ text: e2, options: i2, reduced: t2 }) {
    return (0, n.jsxs)("span", { className: h().swap, "aria-hidden": "true", children: [i2.map((e3) => (0, n.jsx)("span", { className: h().swapSizer, children: e3 }, e3)), (0, n.jsx)(r.N, { mode: "popLayout", initial: false, custom: 1, children: (0, n.jsx)(s.PY1.span, { className: h().swapText, custom: 1, variants: t2 ? v : N, initial: "enter", animate: "center", exit: "exit", children: e2 }, e2) })] });
  }
  function P({ value: e2, reduced: i2 }) {
    let [t2, o2] = (0, a.useState)({ value: e2, direction: 1 });
    t2.value !== e2 && o2({ value: e2, direction: e2 > t2.value ? 1 : -1 });
    let d2 = String(e2).split("");
    return (0, n.jsx)("span", { className: h().number, "aria-hidden": "true", children: (0, n.jsx)(r.N, { initial: false, custom: t2.direction, children: d2.map((e3, a2) => (0, n.jsx)(s.PY1.span, { className: h().place, initial: { width: 0, opacity: 0 }, animate: { width: "auto", opacity: 1 }, exit: { width: 0, opacity: 0 }, transition: i2 ? { duration: 0 } : { width: u.T.spring.morph, opacity: { duration: u.T.duration.fast } }, children: (0, n.jsx)(r.N, { mode: "popLayout", initial: false, custom: t2.direction, children: (0, n.jsx)(s.PY1.span, { className: h().digit, custom: t2.direction, variants: i2 ? v : w, initial: "enter", animate: "center", exit: "exit", children: e3 }, e3) }) }, d2.length - 1 - a2)) }) });
  }
  function $({ done: e2, total: i2, reduced: t2 }) {
    let a2 = i2 ? e2 / i2 : 0, o2 = i2 > 0 && e2 === i2;
    return (0, n.jsxs)("span", { className: h().ring, role: "progressbar", "aria-label": "Setup progress", "aria-valuemin": 0, "aria-valuemax": i2, "aria-valuenow": e2, "aria-valuetext": `${e2} of ${i2} steps done`, children: [(0, n.jsxs)("svg", { className: h().ringArc, viewBox: "0 0 40 40", fill: "none", "aria-hidden": "true", children: [(0, n.jsx)("circle", { className: h().ringTrack, cx: "20", cy: "20", r: "17", strokeWidth: 3 }), (0, n.jsx)("g", { transform: "rotate(-90 20 20)", children: (0, n.jsx)(s.PY1.circle, { className: h().ringFill, cx: "20", cy: "20", r: "17", strokeWidth: 3, strokeLinecap: "round", initial: false, animate: { pathLength: a2, opacity: +(a2 > 0) }, transition: t2 ? { duration: 0 } : { pathLength: u.T.spring.morph, opacity: { duration: u.T.duration.instant } } }) })] }), (0, n.jsx)(r.N, { initial: false, children: o2 ? (0, n.jsx)(s.PY1.svg, { className: h().ringTick, viewBox: "0 0 40 40", fill: "none", "aria-hidden": "true", ...L(t2), children: (0, n.jsx)(s.PY1.path, { d: "M13.5 20.5 18 25l8.5-9.5", stroke: "currentColor", strokeWidth: 2.25, strokeLinecap: "round", strokeLinejoin: "round", initial: !t2 && { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: u.T.duration.standard, ease: g, delay: 0.12 } }) }, "tick") : null })] });
  }
  function A({ checked: e2, labelledBy: i2, onToggle: t2, reduced: a2 }) {
    let r2 = { duration: u.T.duration.fast, ease: _ };
    return (0, n.jsx)("button", { type: "button", role: "checkbox", "aria-checked": e2, "aria-labelledby": i2, className: h().check, "data-check": "", onClick: t2, children: (0, n.jsxs)("span", { className: h().checkVisual, "aria-hidden": "true", children: [(0, n.jsx)(s.PY1.span, { className: h().checkFill, initial: false, animate: { scale: e2 ? 1 : 0.6, opacity: +!!e2 }, transition: a2 ? { duration: 0 } : { scale: u.T.spring.snappy, opacity: { duration: e2 ? u.T.duration.instant : u.T.duration.fast } } }), (0, n.jsx)("svg", { className: h().checkMark, viewBox: "0 0 22 22", fill: "none", children: (0, n.jsx)(s.PY1.path, { d: "M6.75 11.25 9.75 14.25 15.25 8.25", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round", strokeLinejoin: "round", initial: false, animate: { pathLength: +!!e2, opacity: +!!e2 }, transition: a2 ? { duration: 0 } : e2 ? { pathLength: { duration: u.T.duration.standard, ease: g, delay: 0.05 }, opacity: { duration: 0.05, delay: 0.05 } } : { pathLength: r2, opacity: r2 } }) })] }) });
  }
  function E({ state: e2, reduced: i2 }) {
    let t2 = "pending" === e2 ? (0, n.jsx)("span", { className: h().spinner }) : "done" === e2 ? (0, n.jsx)("svg", { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: (0, n.jsx)(s.PY1.path, { d: "M5 12.5l4.5 4.5L19 7.5", initial: !i2 && { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: u.T.duration.standard, ease: g, delay: 0.05 } }) }) : (0, n.jsx)(l.A, { size: 16, strokeWidth: 1.75 });
    return (0, n.jsx)("span", { className: h().actionIcon, "aria-hidden": "true", children: (0, n.jsx)(r.N, { initial: false, children: (0, n.jsx)(s.PY1.span, { className: h().actionGlyph, ...L(i2), children: t2 }, e2) }) });
  }
  function I({ step: e2, baseId: i2, done: t2, expanded: a2, pending: d2, error: l2, reduced: c2, onToggle: u2, onExpand: p2, onRun: g2 }) {
    let _2 = (0, o.tF)(), x2 = `${i2}-${e2.id}-title`, m2 = `${i2}-${e2.id}-panel`, y2 = t2 ? "done" : d2 ? "pending" : "idle";
    return (0, n.jsx)(s.PY1.li, { className: h().step, "data-step": e2.id, "data-done": t2 || void 0, "data-current": a2 || void 0, "data-leaving": _2 ? void 0 : "", inert: !_2, ...T(c2), children: (0, n.jsxs)("div", { className: h().stepInner, children: [(0, n.jsx)(A, { checked: t2, labelledBy: x2, onToggle: u2, reduced: c2 }), (0, n.jsxs)("div", { className: h().stepMain, children: [(0, n.jsx)("button", { type: "button", className: h().stepTitle, "data-title": "", "aria-expanded": a2, "aria-controls": m2, onClick: p2, children: (0, n.jsx)("span", { id: x2, className: h().titleText, children: e2.title }) }), (0, n.jsx)(r.N, { initial: false, children: a2 ? (0, n.jsx)(s.PY1.div, { id: m2, role: "region", "aria-labelledby": x2, className: h().panel, ...T(c2), children: (0, n.jsxs)("div", { className: h().panelInner, children: [e2.description ? (0, n.jsx)("p", { className: h().description, children: e2.description }) : null, (0, n.jsx)(r.N, { initial: false, children: l2 ? (0, n.jsx)(s.PY1.div, { className: h().errorSlot, ...T(c2), children: (0, n.jsx)("p", { className: h().error, role: "alert", children: l2 }) }, "error") : null }), e2.actionLabel ? (0, n.jsxs)("button", { type: "button", className: h().action, "data-primary": "", "data-state": y2, "aria-disabled": "idle" !== y2 || void 0, "aria-busy": d2 || void 0, onClick: g2, children: [e2.actionLabel, (0, n.jsx)(E, { state: y2, reduced: c2 })] }) : null] }) }, "panel") : null })] })] }) });
  }
  function Y({ step: e2, baseId: i2, reduced: t2, onToggle: a2 }) {
    let r2 = (0, o.tF)(), d2 = `${i2}-${e2.id}-done`;
    return (0, n.jsx)(s.PY1.li, { className: h().step, "data-completed-step": e2.id, "data-done": "", inert: !r2, ...T(t2), children: (0, n.jsxs)("div", { className: h().stepInner, children: [(0, n.jsx)(A, { checked: true, labelledBy: d2, onToggle: a2, reduced: t2 }), (0, n.jsx)("span", { className: h().completedTitle, children: (0, n.jsx)("span", { id: d2, className: h().titleText, children: e2.title }) })] }) });
  }
  function O({ title: e2, doneTitle: i2 = "You\u2019re all set", steps: t2, defaultCompleted: o2 = [], onCompletedChange: l2, defaultHidden: p2 = false, onHiddenChange: m2, className: y2 }) {
    let b2 = (0, a.useId)(), k2 = (0, a.useSyncExternalStore)(x, () => true, () => false), N2 = (0, d.I)(), v2 = k2 && !!N2, [w2, L2] = (0, a.useReducer)(j, { steps: t2, completed: o2, hidden: p2 }, f), A2 = (0, a.useRef)(null), E2 = (0, a.useRef)(/* @__PURE__ */ new Map()), C = (0, a.useRef)(null), z = (0, a.useRef)(l2), W = (0, a.useRef)(w2.done);
    function R(e3) {
      L2({ type: "check", id: e3, steps: t2 }), E2.current.has(e3) || E2.current.set(e3, setTimeout(() => {
        E2.current.delete(e3), A2.current?.querySelector(`[data-step="${e3}"]`)?.contains(document.activeElement) && (C.current = "next"), L2({ type: "settle", id: e3, steps: t2 });
      }, 720));
    }
    function G(e3, i3) {
      clearTimeout(E2.current.get(e3)), E2.current.delete(e3), i3 && (C.current = { id: e3 }), L2({ type: "uncheck", id: e3, steps: t2 });
    }
    async function M(e3) {
      if (!(!e3.onAction || w2.pending.includes(e3.id) || w2.done.includes(e3.id))) {
        L2({ type: "start", id: e3.id, steps: t2 });
        try {
          await e3.onAction(), R(e3.id);
        } catch (i3) {
          L2({ type: "fail", id: e3.id, message: i3 instanceof Error && i3.message ? i3.message : "That didn\u2019t work. Try again." });
        }
      }
    }
    (0, a.useEffect)(() => {
      z.current = l2;
    }), (0, a.useEffect)(() => {
      W.current !== w2.done && (W.current = w2.done, z.current?.(w2.done));
    }, [w2.done]), (0, a.useEffect)(() => {
      let e3 = E2.current;
      return () => e3.forEach(clearTimeout);
    }, []), (0, a.useEffect)(() => {
      let e3 = C.current, i3 = A2.current;
      if (!e3 || !i3) return;
      C.current = null;
      let t3 = null;
      if ("next" === e3) {
        let e4 = w2.expanded ? i3.querySelector(`[data-step="${w2.expanded}"]:not([data-leaving])`) : null;
        t3 = e4?.querySelector("[data-primary]") ?? e4?.querySelector("[data-title]") ?? i3.querySelector("[data-group-toggle]");
      } else t3 = i3.querySelector(`[data-step="${e3.id}"]:not([data-leaving]) [data-check]`);
      t3?.focus({ preventScroll: true });
    });
    let V = t2.length, D = w2.done.length, q = V > 0 && D === V, F = t2.filter((e3) => !w2.settled.includes(e3.id)), H = t2.filter((e3) => w2.settled.includes(e3.id)), B = `${b2}-title`, K = `${b2}-body`, U = `${b2}-completed`, J = v2 ? { duration: 0 } : w2.hidden ? { height: { ...u.T.spring.smooth, visualDuration: 0.34 }, opacity: { duration: u.T.duration.fast, ease: _ } } : { height: u.T.spring.smooth, opacity: { duration: u.T.duration.standard, ease: g, delay: 0.05 } };
    return (0, n.jsxs)("section", { ref: A2, className: [h().card, y2].filter(Boolean).join(" "), "aria-labelledby": B, "data-complete": q || void 0, "data-hidden": w2.hidden || void 0, children: [(0, n.jsxs)("div", { className: h().header, children: [(0, n.jsx)($, { done: D, total: V, reduced: v2 }), (0, n.jsxs)("div", { className: h().heading, children: [(0, n.jsxs)("h3", { id: B, className: h().title, children: [(0, n.jsx)("span", { className: h().srOnly, children: q ? i2 : e2 }), (0, n.jsx)(S, { text: q ? i2 : e2, options: [e2, i2], reduced: v2 })] }), (0, n.jsxs)("p", { className: h().count, children: [(0, n.jsxs)("span", { className: h().srOnly, children: [D, " of ", V, " done"] }), (0, n.jsxs)("span", { className: h().countVisual, "aria-hidden": "true", children: [(0, n.jsx)(P, { value: D, reduced: v2 }), "\xA0of ", V, " done"] })] })] }), (0, n.jsxs)("button", { type: "button", className: h().hide, "aria-expanded": !w2.hidden, "aria-controls": K, onClick: function() {
      L2({ type: "hide" }), m2?.(!w2.hidden);
    }, children: [(0, n.jsx)("span", { className: h().hideLabel, children: (0, n.jsx)(S, { text: w2.hidden ? "Show" : "Hide", options: ["Hide", "Show"], reduced: v2 }) }), (0, n.jsxs)("span", { className: h().srOnly, children: [w2.hidden ? "Show" : "Hide", " checklist"] }), (0, n.jsx)(s.PY1.span, { className: h().chevron, "aria-hidden": "true", initial: false, animate: { rotate: 180 * !!w2.hidden }, transition: v2 ? { duration: 0 } : u.T.spring.snappy, children: (0, n.jsx)(c.A, { size: 16, strokeWidth: 1.75 }) })] })] }), (0, n.jsx)(s.PY1.div, { id: K, className: h().body, initial: false, animate: w2.hidden ? { height: 0, opacity: 0 } : { height: "auto", opacity: 1 }, transition: J, inert: w2.hidden, children: (0, n.jsxs)("div", { className: h().bodyInner, children: [(0, n.jsx)("ul", { className: h().list, "aria-label": "Steps to do", "aria-hidden": !F.length || void 0, onKeyDown: function(e3) {
      let i3 = e3.target;
      if (!i3.matches("[data-title]") || !["ArrowDown", "ArrowUp", "Home", "End"].includes(e3.key)) return;
      let t3 = Array.from(e3.currentTarget.querySelectorAll("li:not([data-leaving]) [data-title]")), n2 = t3.indexOf(i3), a2 = "Home" === e3.key ? 0 : "End" === e3.key ? t3.length - 1 : (n2 + ("ArrowDown" === e3.key ? 1 : -1) + t3.length) % t3.length;
      e3.preventDefault(), t3[a2]?.focus();
    }, children: (0, n.jsx)(r.N, { initial: false, children: F.map((e3) => (0, n.jsx)(I, { step: e3, baseId: b2, done: w2.done.includes(e3.id), expanded: w2.expanded === e3.id, pending: w2.pending.includes(e3.id), error: w2.errors[e3.id], reduced: v2, onToggle: () => w2.done.includes(e3.id) ? G(e3.id, false) : R(e3.id), onExpand: () => L2({ type: "expand", id: e3.id, steps: t2 }), onRun: () => M(e3) }, e3.id)) }) }), (0, n.jsx)(r.N, { initial: false, children: H.length ? (0, n.jsxs)(s.PY1.div, { className: h().group, ...T(v2), children: [(0, n.jsxs)("button", { type: "button", className: h().groupToggle, "data-group-toggle": "", "aria-expanded": w2.groupOpen, "aria-controls": U, onClick: () => L2({ type: "group" }), children: [(0, n.jsxs)("span", { className: h().srOnly, children: [H.length, " completed"] }), (0, n.jsxs)("span", { className: h().groupLabel, "aria-hidden": "true", children: [(0, n.jsx)(P, { value: H.length, reduced: v2 }), "\xA0completed"] }), (0, n.jsx)(s.PY1.span, { className: h().chevron, "aria-hidden": "true", initial: false, animate: { rotate: 180 * !w2.groupOpen }, transition: v2 ? { duration: 0 } : u.T.spring.snappy, children: (0, n.jsx)(c.A, { size: 16, strokeWidth: 1.75 }) })] }), (0, n.jsx)(r.N, { initial: false, children: w2.groupOpen ? (0, n.jsx)(s.PY1.div, { id: U, className: h().groupPanel, ...T(v2), children: (0, n.jsx)("ul", { className: h().list, "aria-label": "Completed steps", children: (0, n.jsx)(r.N, { initial: false, children: H.map((e3) => (0, n.jsx)(Y, { step: e3, baseId: b2, reduced: v2, onToggle: () => G(e3.id, true) }, e3.id)) }) }) }, "list") : null })] }, "completed") : null })] }) }), (0, n.jsx)("span", { className: h().srOnly, role: "status", children: w2.message })] });
  }
}

__m(__module,__exports,__require);
}