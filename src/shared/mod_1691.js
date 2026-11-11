function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { MentionInputDemo: () => B });
  var a = n(95155), i = n(12115), r = n(18310), s = n(80642), o = n(25354), l = n(83254), d = n(47421), c = n(38158), p = n(28245), h = n(92171), u = n(7770), m = n(34082), g = n.n(m);
  let f = { text: "", mentions: [] }, y = { person: "@", channel: "#" }, { spring: x, duration: b, ease: v } = u.T, w = [...v.enter], k = [...v.standard], _ = (e2, t2) => {
    let n2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: n2 * n2, damping: 2 * (1 - t2) * n2, mass: 1 };
  }, j = _(0.3, 0), S = _(x.smooth.visualDuration, 0), A = { duration: 0 }, N = (e2, t2) => `${y[e2]}${t2}`;
  function M(e2, t2, n2) {
    let a2 = e2.text, i2 = 0, r2 = Math.min(a2.length, t2.length, Math.max(0, n2));
    for (; i2 < r2 && a2[i2] === t2[i2]; ) i2++;
    let s2 = 0;
    for (; s2 < a2.length - i2 && s2 < t2.length - i2 && a2[a2.length - 1 - s2] === t2[t2.length - 1 - s2]; ) s2++;
    let o2 = a2.length - s2, l2 = t2.length - a2.length;
    return e2.mentions.flatMap((e3) => e3.end <= i2 ? [e3] : e3.start >= o2 ? [{ ...e3, start: e3.start + l2, end: e3.end + l2 }] : []).filter((e3) => t2.slice(e3.start, e3.end) === N(e3.kind, e3.label));
  }
  function C(e2, t2, n2) {
    let a2 = e2.toLowerCase();
    return n2 ? a2.startsWith(n2) ? 4 : a2.split(/[\s\-_.]+/).some((e3) => e3.startsWith(n2)) ? 3 : a2.includes(n2) ? 2 : +!!t2.toLowerCase().includes(n2) : 1;
  }
  function T({ text: e2, query: t2 }) {
    let n2 = t2 ? e2.toLowerCase().indexOf(t2.toLowerCase()) : -1;
    return n2 < 0 ? (0, a.jsx)(a.Fragment, { children: e2 }) : (0, a.jsxs)(a.Fragment, { children: [e2.slice(0, n2), (0, a.jsx)("mark", { className: g().match, children: e2.slice(n2, n2 + t2.length) }), e2.slice(n2 + t2.length)] });
  }
  let D = (0, i.forwardRef)(function({ value: e2, defaultValue: t2, onChange: n2, people: l2, channels: c2, onMentionAdd: u2, onSubmit: m2, submitOnEnter: v2 = false, placeholder: _2, minRows: D2 = 1, maxRows: $2 = 8, placement: R2 = "auto", maxSuggestions: E2 = 6, disabled: z2, name: L2, id: W2, "aria-label": B2, "aria-describedby": F, className: q }, O) {
    let P = !!(0, r.I)(), H = (0, i.useId)(), I = `${H}-list`, [Y, J] = (0, i.useState)(t2 ?? f), K = e2 ?? Y, U = (0, i.useRef)(K);
    (0, i.useLayoutEffect)(() => {
      U.current = K;
    });
    let V = (0, i.useRef)(null), Z = (0, i.useRef)(null), Q = (0, i.useRef)(null), X = (0, i.useRef)(null), G = (0, i.useRef)(0), ee = (0, i.useRef)(null), [et, en] = (0, i.useState)(null), [ea, ei] = (0, i.useState)(false), [er, es] = (0, i.useState)(null), [eo, el] = (0, i.useState)(0), ed = (0, i.useCallback)((t3) => {
      void 0 === e2 && J(t3), n2?.(t3);
    }, [n2, e2]), ec = (0, i.useMemo)(() => ({ person: !!l2?.length, channel: !!c2?.length }), [c2, l2]), ep = (0, i.useMemo)(() => null === et ? null : (function(e3, t3, n3, a2) {
      for (let i2 = t3 - 1; i2 >= 0 && i2 >= t3 - 48; i2--) {
        let r2 = e3[i2];
        if ("\n" === r2) break;
        if ("@" !== r2 && "#" !== r2) continue;
        let s2 = "@" === r2 ? "person" : "channel";
        if (!a2[s2] || i2 > 0 && !/[\s([{"']/.test(e3[i2 - 1]) || n3.some((e4) => i2 >= e4.start && i2 < e4.end)) break;
        let o2 = e3.slice(i2 + 1, t3);
        return ("person" === s2 ? /^[^\s@#]*( [^\s@#]*)?$/ : /^[^\s@#]*$/).test(o2) ? { kind: s2, start: i2, query: o2 } : null;
      }
      return null;
    })(K.text, et, K.mentions, ec), [et, ec, K.mentions, K.text]), eh = (0, i.useMemo)(() => {
      if (!ep) return [];
      let e3 = ep.query.toLowerCase().trim();
      return ("person" === ep.kind ? (l2 ?? []).map((t3) => ({ entry: { kind: "person", item: t3 }, score: C(t3.name, t3.role ?? "", e3) })) : (c2 ?? []).map((t3) => ({ entry: { kind: "channel", item: t3 }, score: C(t3.name, t3.description ?? "", e3) }))).filter((e4) => e4.score > 0).sort((e4, t3) => t3.score - e4.score).slice(0, E2).map((e4) => e4.entry);
    }, [c2, E2, l2, ep]), eu = ea && !z2 && !!ep && ep.start !== er && (eh.length > 0 || !ep.query.includes(" ")), em = Math.min(eo, Math.max(0, eh.length - 1)), eg = ep ? `${ep.start}:${ep.query}` : "", [ef, ey] = (0, i.useState)(eg);
    ef !== eg && (ey(eg), el(0)), null !== er && ep?.start !== er && es(null);
    let ex = (0, i.useCallback)((e3, t3, n3) => {
      let a2 = Q.current;
      if (!a2 || (a2.focus({ preventScroll: true }), void 0 !== t3 && a2.setSelectionRange(t3, n3 ?? t3), G.current = a2.selectionStart, "function" == typeof document.execCommand && document.execCommand("insertText", false, e3))) return;
      let i2 = a2.selectionStart, r2 = a2.selectionEnd, s2 = U.current, o2 = s2.text.slice(0, i2) + e3 + s2.text.slice(r2), l3 = M(s2, o2, i2), d2 = ee.current;
      ee.current = null, d2 && l3.push(d2), l3.sort((e4, t4) => e4.start - t4.start);
      let c3 = { text: o2, mentions: l3 };
      U.current = c3, ed(c3), d2 && u2?.(d2), requestAnimationFrame(() => {
        a2.setSelectionRange(i2 + e3.length, i2 + e3.length), en(i2 + e3.length);
      });
    }, [ed, u2]), eb = (e3) => {
      if (!e3 || !ep || null === et) return;
      let t3 = e3.item.name, n3 = N(e3.kind, t3);
      ee.current = { kind: e3.kind, id: e3.item.id, label: t3, start: ep.start, end: ep.start + n3.length };
      let a2 = K.text[et];
      ex(void 0 !== a2 && /\s/.test(a2) ? n3 : `${n3} `, ep.start, et);
    };
    (0, i.useImperativeHandle)(O, () => ({ focus: () => Q.current?.focus(), insert: (e3) => ex(e3), openSuggestions: (e3) => {
      let t3 = Q.current;
      if (!t3) return;
      let n3 = document.activeElement === t3 ? t3.selectionStart : U.current.text.length, a2 = U.current.text[n3 - 1];
      es(null), ex(`${a2 && !/\s/.test(a2) ? " " : ""}${y[e3]}`, n3, document.activeElement === t3 ? t3.selectionEnd : n3);
    }, clear: () => {
      ed(f), U.current = f, en(0);
    }, get textarea() {
      return Q.current;
    } }), [ed, ex]);
    let ev = (0, p.d)("auto"), [ew, ek] = (0, i.useState)({ min: 0, max: 1 / 0 }), e_ = (0, i.useRef)(false);
    (0, i.useLayoutEffect)(() => {
      let e3 = X.current;
      if (!e3) return;
      let t3 = getComputedStyle(e3), n3 = parseFloat(t3.lineHeight) || 24, a2 = parseFloat(t3.paddingTop) + parseFloat(t3.paddingBottom), i2 = { min: n3 * D2 + a2, max: n3 * Math.max(D2, $2) + a2 };
      ek((e4) => e4.min === i2.min && e4.max === i2.max ? e4 : i2);
    }, [$2, D2]), (0, i.useLayoutEffect)(() => {
      let e3 = X.current;
      if (!e3 || !ew.min) return;
      let t3 = () => {
        let t4 = Math.min(ew.max, Math.max(ew.min, e3.offsetHeight)), n4 = ev.get();
        if (!e_.current || P || "number" != typeof n4) {
          (0, h.i)(ev, t4, A), e_.current = true;
          return;
        }
        Math.abs(n4 - t4) > 0.5 && (0, h.i)(ev, t4, S);
      };
      if (t3(), "u" < typeof ResizeObserver) return;
      let n3 = new ResizeObserver(t3);
      return n3.observe(e3), () => n3.disconnect();
    }, [ev, ew, P]);
    let [ej, eS] = (0, i.useState)(null), eA = (0, i.useCallback)(() => {
      let e3 = X.current?.querySelector("[data-anchor]"), t3 = V.current, n3 = Z.current, a2 = Q.current;
      if (!e3 || !t3 || !n3 || !a2) return void eS(null);
      let i2 = parseFloat(getComputedStyle(e3.parentElement ?? e3).lineHeight) || 24, r2 = Math.max(0, Math.min(n3.offsetLeft + e3.offsetLeft - 10, t3.offsetWidth - 272)), s2 = n3.offsetTop + e3.offsetTop - a2.scrollTop, o2 = t3.getBoundingClientRect(), l3 = window.innerHeight - (o2.top + s2 + i2), d2 = "top" === R2 || "auto" === R2 && l3 < 300 && o2.top + s2 > l3, c3 = d2 ? s2 - 6 : s2 + i2 + 6;
      eS((e4) => e4 && e4.x === r2 && e4.y === c3 && e4.above === d2 && e4.line === i2 ? e4 : { x: r2, y: c3, line: i2, above: d2 });
    }, [R2]);
    (0, i.useLayoutEffect)(() => {
      eu && eA();
    }, [eA, eu, ep?.start, K.text]);
    let eN = eu && !!ej, eM = (0, i.useRef)(null), eC = (0, p.d)(0), eT = (0, p.d)(0), eD = (0, i.useRef)(false), e$ = (0, p.d)("auto");
    (0, i.useLayoutEffect)(() => {
      let e3 = eM.current?.querySelector(`[data-index="${em}"]`);
      if (e3) {
        if (P || !eD.current) {
          (0, h.i)(eC, e3.offsetTop, A), (0, h.i)(eT, e3.offsetHeight, A), eD.current = true;
          return;
        }
        (0, h.i)(eC, e3.offsetTop, j), (0, h.i)(eT, e3.offsetHeight, j);
      }
    }, [em, eT, eC, P, eN, eh]);
    let eR = (0, i.useRef)(null), eE = (0, i.useRef)(false);
    (0, i.useLayoutEffect)(() => {
      if (!eN) {
        eE.current = false, eD.current = false;
        return;
      }
      let e3 = eR.current;
      if (!e3) return;
      let t3 = () => {
        let t4 = e3.offsetHeight;
        if (!eE.current || P) {
          (0, h.i)(e$, t4, A), eE.current = true;
          return;
        }
        (0, h.i)(e$, t4, S);
      };
      if (t3(), "u" < typeof ResizeObserver) return;
      let n3 = new ResizeObserver(t3);
      return n3.observe(e3), () => n3.disconnect();
    }, [e$, P, eN, ep?.start]);
    let ez = (0, i.useMemo)(() => {
      let e3 = [], t3 = eu && ep ? ep.start : -1, n3 = 0, i2 = (n4, i3) => {
        t3 >= n4 && t3 < i3 ? e3.push(K.text.slice(n4, t3), (0, a.jsx)("span", { "data-anchor": "" }, "anchor"), K.text.slice(t3, i3)) : e3.push(K.text.slice(n4, i3));
      };
      for (let t4 of K.mentions) i2(n3, t4.start), e3.push((0, a.jsx)("span", { className: g().token, "data-kind": t4.kind, children: K.text.slice(t4.start, t4.end) }, `${t4.start}-${t4.id}`)), n3 = t4.end;
      return i2(n3, K.text.length), e3;
    }, [eu, ep, K.mentions, K.text]), eL = (e3) => `${H}-option-${e3}`, eW = P ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: ej?.above ? 4 : -4 }, eB = eu ? eh.length ? `${eh.length} ${ep?.kind === "person" ? 1 === eh.length ? "person" : "people" : 1 === eh.length ? "channel" : "channels"}` : "No matches" : "";
    return (0, a.jsxs)("div", { ref: V, className: [g().root, q].filter(Boolean).join(" "), "data-disabled": z2 || void 0, children: [(0, a.jsxs)(o.PY1.div, { ref: Z, className: g().field, style: { height: ev }, "data-focused": ea || void 0, children: [(0, a.jsxs)("div", { ref: X, className: g().backdrop, "aria-hidden": "true", children: [ez, "\u200B"] }), (0, a.jsx)("textarea", { ref: Q, id: W2, name: L2, className: g().textarea, value: K.text, placeholder: _2, disabled: z2, rows: D2, spellCheck: true, role: "combobox", "aria-label": B2, "aria-describedby": F, "aria-autocomplete": "list", "aria-haspopup": "listbox", "aria-expanded": eu, "aria-controls": eu ? I : void 0, "aria-activedescendant": eu && eh.length ? eL(em) : void 0, onChange: (e3) => {
      let t3 = e3.target.value, n3 = M(U.current, t3, G.current), a2 = ee.current;
      ee.current = null, a2 && t3.slice(a2.start, a2.end) === N(a2.kind, a2.label) && (n3.push(a2), n3.sort((e4, t4) => e4.start - t4.start));
      let i2 = { text: t3, mentions: n3 };
      U.current = i2, ed(i2), a2 && u2?.(a2), G.current = e3.target.selectionStart, en(e3.target.selectionStart === e3.target.selectionEnd ? e3.target.selectionStart : null);
    }, onSelect: () => {
      let e3 = Q.current;
      if (!e3) return;
      let t3 = e3.selectionStart, n3 = e3.selectionEnd, a2 = t3 === n3;
      for (let e4 of U.current.mentions) if (a2 && t3 > e4.start && t3 < e4.end) {
        let a3 = 1 === Math.abs(t3 - G.current), i2 = t3 > G.current;
        t3 = n3 = a3 ? i2 ? e4.end : e4.start : t3 - e4.start < e4.end - t3 ? e4.start : e4.end;
      } else !a2 && (t3 > e4.start && t3 < e4.end && (t3 = e4.start), n3 > e4.start && n3 < e4.end && (n3 = e4.end));
      (t3 !== e3.selectionStart || n3 !== e3.selectionEnd) && e3.setSelectionRange(t3, n3, e3.selectionDirection), G.current = e3.selectionStart, en(a2 ? t3 : null);
    }, onKeyDown: (e3) => {
      let t3 = e3.currentTarget;
      if (G.current = t3.selectionStart, eu) {
        if ("ArrowDown" === e3.key || "ArrowUp" === e3.key) {
          e3.preventDefault(), eh.length && el((em + ("ArrowDown" === e3.key ? 1 : -1) + eh.length) % eh.length);
          return;
        }
        if (("Enter" === e3.key || "Tab" === e3.key) && eh.length && !e3.shiftKey) {
          e3.preventDefault(), eb(eh[em]);
          return;
        }
        if ("Escape" === e3.key) {
          e3.preventDefault(), e3.stopPropagation(), es(ep?.start ?? null);
          return;
        }
      }
      let n3 = t3.selectionStart;
      if (n3 === t3.selectionEnd && !e3.metaKey && ("Backspace" === e3.key || "Delete" === e3.key)) {
        let a2 = U.current.mentions.find((t4) => "Backspace" === e3.key ? n3 > t4.start && n3 <= t4.end : n3 >= t4.start && n3 < t4.end);
        a2 && t3.setSelectionRange(a2.start, a2.end);
        return;
      }
      "Enter" === e3.key && v2 && !e3.shiftKey && !e3.nativeEvent.isComposing && (e3.preventDefault(), U.current.text.trim() && m2?.(U.current));
    }, onScroll: (e3) => {
      let t3 = X.current;
      t3 && (t3.style.transform = `translateY(${-e3.currentTarget.scrollTop}px)`), eA();
    }, onFocus: () => ei(true), onBlur: () => {
      ei(false), en(null);
    } })] }), (0, a.jsx)("span", { className: g().srOnly, "aria-live": "polite", children: eB }), (0, a.jsx)(s.N, { children: eu && ej && (0, a.jsx)(o.PY1.div, { className: g().popover, "data-above": ej.above || void 0, style: { left: ej.x, top: ej.y, height: e$, transformOrigin: ej.above ? "14px 100%" : "14px 0" }, initial: eW, animate: { opacity: 1, scale: 1, y: 0, transition: P ? { duration: b.fast } : { ...x.snappy, opacity: { duration: b.fast, ease: w } } }, exit: { ...eW, transition: { duration: 0.7 * b.exit, ease: k } }, onMouseDown: (e3) => e3.preventDefault(), children: (0, a.jsx)("div", { ref: eR, className: g().popoverBody, children: eh.length ? (0, a.jsxs)("ul", { ref: eM, id: I, role: "listbox", "aria-label": ep?.kind === "person" ? "People" : "Channels", className: g().list, children: [(0, a.jsx)(o.PY1.li, { "aria-hidden": "true", className: g().highlight, style: { y: eC, height: eT } }), eh.map((e3, t3) => (0, a.jsxs)("li", { id: eL(t3), role: "option", "aria-selected": t3 === em, "data-index": t3, className: g().option, onPointerMove: () => {
      t3 !== em && el(t3);
    }, onClick: () => eb(e3), children: ["person" === e3.kind ? (0, a.jsx)("span", { className: g().avatar, "aria-hidden": "true", children: e3.item.avatar ? (0, a.jsx)("img", { src: e3.item.avatar, alt: "", width: 28, height: 28, loading: "lazy" }) : e3.item.name.split(/\s+/).filter(Boolean).slice(0, 2).map((e4) => e4[0]?.toUpperCase()).join("") }) : (0, a.jsx)("span", { className: g().glyph, "aria-hidden": "true", children: (0, a.jsx)(d.A, { size: 16, strokeWidth: 1.75 }) }), (0, a.jsxs)("span", { className: g().optionText, children: [(0, a.jsx)("span", { className: g().optionLabel, children: (0, a.jsx)(T, { text: e3.item.name, query: ep?.query.trim() ?? "" }) }), "person" === e3.kind ? e3.item.role && (0, a.jsx)("span", { className: g().optionMeta, children: e3.item.role }) : e3.item.description && (0, a.jsx)("span", { className: g().optionMeta, children: e3.item.description })] }), "channel" === e3.kind && void 0 !== e3.item.members && (0, a.jsx)("span", { className: g().count, children: e3.item.members })] }, `${e3.kind}-${e3.item.id}`))] }) : (0, a.jsxs)("p", { className: g().empty, children: ["No ", ep?.kind === "person" ? "people" : "channels", " match \u201C", ep?.query, "\u201D"] }) }) }, ep?.start) })] });
  });
  var $ = n(67752), R = n(98759), E = n.n(R);
  let z = $.c0.filter((e2) => "nathan-cole" !== e2.id).map((e2) => ({ id: e2.id, name: e2.name, role: e2.role, avatar: e2.src })), L = [{ id: "launch", name: "launch", description: "Dates, owners, and the checklist", members: 32 }, { id: "design-crit", name: "design-crit", description: "Thursday critique", members: 14 }, { id: "frontend", name: "frontend", description: "Web app and design system", members: 21 }, { id: "support-escalations", name: "support-escalations", description: "Tickets that need an engineer", members: 9 }, { id: "general", name: "general", description: "Company wide", members: 118 }];
  function W(e2) {
    return e2.length <= 2 ? e2.join(" and ") : `${e2.slice(0, -1).join(", ")}, and ${e2.at(-1)}`;
  }
  function B() {
    let e2 = (0, r.I)(), t2 = (0, i.useRef)(null), [n2, p2] = (0, i.useState)({ text: "", mentions: [] }), [h2, m2] = (0, i.useState)(null), g2 = new Set(n2.mentions.filter((e3) => "person" === e3.kind).map((e3) => e3.id)).size, f2 = n2.text.trim().length > 0, y2 = (e3) => {
      if (e3.text.trim()) {
        let n3, a2;
        m2({ id: Date.now(), text: (n3 = [...new Set(e3.mentions.filter((e4) => "person" === e4.kind).map((e4) => e4.label.split(" ")[0]))], a2 = [...new Set(e3.mentions.filter((e4) => "channel" === e4.kind).map((e4) => `#${e4.label}`))], ["Posted", n3.length && `notified ${W(n3)}`, a2.length && `shared to ${W(a2)}`].filter(Boolean).join(" \xB7 ")) }), t2.current?.clear(), t2.current?.focus();
      }
    }, x2 = e2 ? { opacity: 0 } : { opacity: 0, y: 6 };
    return (0, a.jsxs)("div", { className: E().demo, children: [(0, a.jsxs)("div", { className: E().composer, children: [(0, a.jsx)(D, { ref: t2, value: n2, onChange: (e3) => {
      p2(e3), e3.text && m2(null);
    }, people: z, channels: L, onSubmit: y2, submitOnEnter: true, maxRows: 5, placement: "bottom", "aria-label": "Write an update", placeholder: "Share an update, @ to mention" }), (0, a.jsxs)("div", { className: E().bar, children: [(0, a.jsx)("button", { type: "button", className: E().tool, onMouseDown: (e3) => e3.preventDefault(), "aria-label": "Mention someone", onClick: () => t2.current?.openSuggestions("person"), children: (0, a.jsx)(l.A, { size: 18, strokeWidth: 1.75 }) }), (0, a.jsx)("button", { type: "button", className: E().tool, onMouseDown: (e3) => e3.preventDefault(), "aria-label": "Add a channel", onClick: () => t2.current?.openSuggestions("channel"), children: (0, a.jsx)(d.A, { size: 18, strokeWidth: 1.75 }) }), (0, a.jsx)("p", { className: E().notify, "aria-live": "polite", children: (0, a.jsx)(s.N, { initial: false, mode: "popLayout", children: (0, a.jsx)(o.PY1.span, { className: E().notifyText, initial: x2, animate: { opacity: 1, y: 0 }, exit: e2 ? { opacity: 0 } : { opacity: 0, y: -6 }, transition: u.T.spring.snappy, children: g2 ? `Notifies ${g2} ${1 === g2 ? "person" : "people"}` : "Enter to post" }, g2) }) }), (0, a.jsxs)("button", { type: "button", className: E().send, "data-ready": f2 || void 0, disabled: !f2, onClick: () => y2(n2), children: [(0, a.jsx)("span", { children: "Post" }), (0, a.jsx)(c.A, { size: 16, strokeWidth: 2, "aria-hidden": "true" })] })] })] }), (0, a.jsx)("p", { className: E().status, role: "status", children: (0, a.jsx)(s.N, { initial: false, mode: "popLayout", children: h2 && (0, a.jsx)(o.PY1.span, { className: E().statusText, initial: x2, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, transition: { duration: u.T.duration.exit } }, transition: u.T.spring.smooth, children: h2.text }, h2.id) }) })] });
  }
}

__m(__module,__exports,__require);
}