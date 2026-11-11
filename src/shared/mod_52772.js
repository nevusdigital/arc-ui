function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  let i;
  a.d(t, { _: () => I });
  var n = a(95155), s = a(12115), o = a(18310), r = a(80642), l = a(25354), d = a(28245), c = a(92171), m = a(9005), h = a(83874), p = a(76721), u = a(64577), g = a(92298), y = a(36408), _ = a(7770), j = a(12528), v = a.n(j);
  let f = { thread: "Comment thread", commentCount: (e2) => `${e2} ${1 === e2 ? "comment" : "comments"}`, peopleCount: (e2) => `${e2} ${1 === e2 ? "person" : "people"}`, resolve: "Resolve", resolved: "Resolved", reopen: "Reopen", empty: "No comments yet. Start the conversation below.", reply: "Reply", edit: "Edit", delete: "Delete", cancel: "Cancel", send: "Send", save: "Save", editComment: "Edit comment", edited: "edited", deleteConfirm: "Delete this comment?", deletedText: "This comment was deleted", deletedComment: "Deleted comment", replyingTo: (e2) => `Replying to ${e2}`, cancelReply: "Cancel reply", showReplies: (e2) => `Show ${e2} ${1 === e2 ? "reply" : "replies"}`, hideReplies: "Hide replies", addReaction: "Add reaction", closeReactions: "Close reactions", reactions: "Reactions", reactWith: (e2) => `React with ${e2}`, reactionCount: (e2, t2, a2) => `${e2} ${t2}${a2 ? ", including you" : ""}`, mentions: "People" }, b = [..._.T.ease.enter], x = [..._.T.ease.standard], w = { type: "spring", stiffness: (i = 2 * Math.PI / 0.504) * i, damping: 2 * i, mass: 1 }, k = ["\u{1F44D}", "\u2764\uFE0F", "\u{1F389}", "\u{1F440}", "\u{1F680}", "\u2705"], N = () => () => {
  };
  function A() {
    let e2 = (0, s.useSyncExternalStore)(N, () => true, () => false);
    return !!(0, o.I)() && e2;
  }
  let C = (e2, t2, a2) => e2.flatMap((e3) => {
    if (e3.id === t2) {
      let t3 = a2(e3);
      return t3 ? [t3] : [];
    }
    return e3.replies?.length ? [{ ...e3, replies: C(e3.replies, t2, a2) }] : [e3];
  }), S = (e2) => e2.reduce((e3, t2) => e3 + +!t2.deleted + S(t2.replies ?? []), 0), T = (e2, t2 = /* @__PURE__ */ new Map()) => (e2.forEach((e3) => {
    e3.deleted || t2.set(e3.author.id, e3.author), T(e3.replies ?? [], t2);
  }), t2), R = (e2, t2, a2 = []) => {
    for (let i2 of e2) {
      if (i2.id === t2) return [...a2, t2];
      let e3 = R(i2.replies ?? [], t2, [...a2, i2.id]);
      if (e3) return e3;
    }
    return null;
  }, z = (e2, t2) => {
    for (let a2 of e2) {
      if (a2.id === t2) return a2;
      let e3 = z(a2.replies ?? [], t2);
      if (e3) return e3;
    }
    return null;
  }, $ = 0;
  function P({ author: e2, size: t2 = 28 }) {
    return e2.avatar ? (0, n.jsx)("img", { className: v().avatar, src: e2.avatar, alt: "", width: t2, height: t2, style: { width: t2, height: t2 } }) : (0, n.jsx)("span", { className: v().avatar, style: { width: t2, height: t2, fontSize: Math.round(0.38 * t2) }, "aria-hidden": "true", children: e2.name.split(/\s+/).map((e3) => e3[0]).slice(0, 2).join("").toUpperCase() });
  }
  function M({ text: e2, people: t2 }) {
    let a2 = (0, s.useMemo)(() => {
      let a3 = t2.map((e3) => e3.name).sort((e3, t3) => t3.length - e3.length).map((e3) => e3.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
      return a3.length ? e2.split(RegExp(`(@(?:${a3.join("|")}))`, "g")) : [e2];
    }, [t2, e2]);
    return (0, n.jsx)("p", { className: v().body, children: a2.map((e3, t3) => t3 % 2 ? (0, n.jsx)("span", { className: v().mention, children: e3 }, t3) : e3) });
  }
  let D = { hidden: (e2) => ({ y: `${70 * e2}%`, opacity: 0 }), shown: { y: 0, opacity: 1 }, gone: (e2) => ({ y: `${-70 * e2}%`, opacity: 0 }) }, L = { hidden: { opacity: 0 }, shown: { opacity: 1 }, gone: { opacity: 0 } };
  function W({ value: e2, reduced: t2 }) {
    let [a2, i2] = (0, s.useState)(e2), [o2, d2] = (0, s.useState)(1);
    return e2 !== a2 && (d2(e2 > a2 ? 1 : -1), i2(e2)), (0, n.jsx)("span", { className: v().count, children: (0, n.jsx)(r.N, { mode: "popLayout", initial: false, custom: o2, children: (0, n.jsx)(l.PY1.span, { custom: o2, variants: t2 ? L : D, initial: "hidden", animate: "shown", exit: "gone", transition: t2 ? { duration: 0 } : _.T.spring.snappy, children: e2 }, e2) }) });
  }
  function E({ children: e2, reduced: t2, morphKey: a2 }) {
    let i2 = (0, s.useRef)(null), o2 = (0, d.d)(0), [r2, m2] = (0, s.useState)(false), h2 = (0, s.useRef)(false), p2 = (0, s.useRef)(a2);
    return (0, s.useLayoutEffect)(() => {
      p2.current !== a2 && (p2.current = a2, h2.current = true);
    }, [a2]), (0, s.useLayoutEffect)(() => {
      let e3 = i2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(([a4]) => {
        let i3 = a4?.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight;
        if (h2.current && !t2) {
          h2.current = false, (0, c.i)(o2, i3, w);
          return;
        }
        o2.isAnimating() ? (0, c.i)(o2, i3, w) : (o2.jump(i3), m2(true));
      });
      return a3.observe(e3), () => a3.disconnect();
    }, [o2, t2]), (0, n.jsx)(l.PY1.div, { className: v().autoHeight, style: { height: r2 ? o2 : "auto" }, children: (0, n.jsx)("div", { ref: i2, className: v().autoInner, children: e2 }) });
  }
  function Y({ people: e2, initial: t2 = "", placeholder: a2, submitLabel: i2, autoFocus: o2, focusKey: d2, onSubmit: c2, onCancel: m2, leading: h2, compact: p2, cancelLabel: u2, mentionsLabel: g2 }) {
    let y2 = (0, s.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), j2 = A(), f2 = (0, s.useRef)(null), [k2, N2] = (0, s.useState)(t2), [C2, S2] = (0, s.useState)(null), [T2, R2] = (0, s.useState)(0), z2 = (0, s.useMemo)(() => {
      if (!C2) return [];
      let t3 = C2.term.toLowerCase();
      return e2.filter((e3) => e3.name.toLowerCase().split(" ").some((e4) => e4.startsWith(t3)) || e3.name.toLowerCase().startsWith(t3)).slice(0, 5);
    }, [e2, C2]), $2 = !!C2 && z2.length > 0;
    (0, s.useEffect)(() => {
      if (!o2 && !d2) return;
      let e3 = f2.current;
      e3 && (e3.focus({ preventScroll: true }), e3.setSelectionRange(e3.value.length, e3.value.length));
    }, [o2, d2]);
    let M2 = (e3, t3) => {
      let a3 = /(^|\s)@([\p{L}]*)$/u.exec(e3.slice(0, t3));
      S2(a3 ? { start: t3 - a3[2].length - 1, term: a3[2] } : null), R2(0);
    }, D2 = (e3) => {
      let t3 = f2.current;
      if (!t3 || !C2) return;
      let a3 = t3.selectionStart ?? k2.length, i3 = `${k2.slice(0, C2.start)}@${e3.name} ${k2.slice(a3)}`, n2 = C2.start + e3.name.length + 2;
      N2(i3), S2(null), requestAnimationFrame(() => {
        t3.focus(), t3.setSelectionRange(n2, n2);
      });
    }, L2 = () => {
      let e3 = k2.trim();
      e3 && (c2(e3), N2(""), S2(null));
    };
    return (0, n.jsxs)("div", { className: v().composer, "data-compact": p2 || void 0, children: [h2, (0, n.jsxs)("div", { className: v().fieldWrap, children: [(0, n.jsx)("textarea", { ref: f2, className: v().field, value: k2, placeholder: a2, rows: 1, "aria-label": a2, role: "combobox", "aria-autocomplete": "list", "aria-expanded": $2, "aria-controls": `${y2}-people`, "aria-activedescendant": $2 ? `${y2}-person-${T2}` : void 0, onChange: (e3) => {
      N2(e3.target.value), M2(e3.target.value, e3.target.selectionStart);
    }, onSelect: (e3) => M2(e3.currentTarget.value, e3.currentTarget.selectionStart), onBlur: () => S2(null), onKeyDown: (e3) => {
      if ($2) {
        if ("ArrowDown" === e3.key || "ArrowUp" === e3.key) {
          e3.preventDefault(), R2((t3) => (t3 + ("ArrowDown" === e3.key ? 1 : -1) + z2.length) % z2.length);
          return;
        }
        if ("Enter" === e3.key || "Tab" === e3.key) {
          e3.preventDefault(), D2(z2[T2]);
          return;
        }
        if ("Escape" === e3.key) {
          e3.preventDefault(), e3.stopPropagation(), S2(null);
          return;
        }
      }
      if ("Enter" === e3.key && (e3.metaKey || e3.ctrlKey)) {
        e3.preventDefault(), L2();
        return;
      }
      "Escape" === e3.key && m2 && (e3.preventDefault(), e3.stopPropagation(), m2());
    } }), (0, n.jsx)(r.N, { children: $2 && (0, n.jsx)(l.PY1.ul, { id: `${y2}-people`, role: "listbox", "aria-label": g2, className: v().suggestions, initial: j2 ? { opacity: 0 } : { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: j2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, height: 0, transition: { duration: _.T.duration.instant, ease: x } }, transition: j2 ? { duration: 0 } : { height: w, opacity: { duration: _.T.duration.fast, ease: b } }, children: z2.map((e3, t3) => (0, n.jsxs)("li", { id: `${y2}-person-${t3}`, role: "option", "aria-selected": t3 === T2, className: v().suggestion, onPointerDown: (e4) => e4.preventDefault(), onPointerMove: () => R2(t3), onClick: () => D2(e3), children: [(0, n.jsx)(P, { author: e3, size: 20 }), e3.name] }, e3.id)) }, "people") })] }), (0, n.jsxs)("div", { className: v().composerActions, children: [m2 && (0, n.jsx)("button", { type: "button", className: v().ghost, onClick: m2, children: u2 }), (0, n.jsx)("button", { type: "button", className: v().send, disabled: !k2.trim() || k2.trim() === t2.trim(), onClick: L2, children: i2 })] })] });
  }
  let I = (0, s.forwardRef)(function({ comments: e2, defaultComments: t2 = [], onCommentsChange: a2, currentUser: i2, people: o2, resolved: d2, defaultResolved: c2 = false, onResolvedChange: j2, title: N2, reactions: D2 = k, placeholder: L2 = "Reply, or @mention someone", maxDepth: I2 = 2, nowLabel: F = "Just now", labels: K, className: H }, q) {
    var O, B, U;
    let J, V = { ...f, ...Object.fromEntries(Object.entries(K ?? {}).filter(([, e3]) => void 0 !== e3)) }, Q = A(), Z = (0, s.useRef)(null);
    (0, s.useImperativeHandle)(q, () => Z.current);
    let [G, X] = (0, s.useState)(t2), ee = e2 ?? G, [et, ea] = (0, s.useState)(c2), ei = d2 ?? et, [en, es] = (0, s.useState)({ editing: null, confirming: null, picker: null, collapsed: {} }), [eo, er] = (0, s.useState)(null), [el, ed] = (0, s.useState)(0), ec = (0, s.useMemo)(() => o2 ?? [...T(ee, /* @__PURE__ */ new Map([[i2.id, i2]])).values()], [i2, ee, o2]), em = S(ee), eh = (0, s.useMemo)(() => [...T(ee).values()], [ee]), ep = (0, s.useCallback)((t3, i3) => {
      void 0 === e2 && X(t3), a2?.(t3, i3);
    }, [e2, a2]), eu = (e3) => {
      void 0 === d2 && ea(e3), j2?.(e3), es((e4) => ({ ...e4, editing: null, confirming: null, picker: null })), er(null), requestAnimationFrame(() => Z.current?.querySelector(e3 ? "[data-reopen]" : "[data-resolve]")?.focus({ preventScroll: true }));
    }, eg = (e3, t3) => {
      let a3 = z(ee, e3);
      if (!a3) return;
      let n2 = a3.reactions?.find((e4) => e4.emoji === t3), s2 = !n2?.users.includes(i2.id), o3 = n2 ? (a3.reactions ?? []).map((e4) => e4.emoji !== t3 ? e4 : { ...e4, users: s2 ? [...e4.users, i2.id] : e4.users.filter((e5) => e5 !== i2.id) }).filter((e4) => e4.users.length) : [...a3.reactions ?? [], { emoji: t3, users: [i2.id] }];
      ep(C(ee, e3, (e4) => ({ ...e4, reactions: o3 })), { type: "react", id: e3, emoji: t3, added: s2 }), es((e4) => ({ ...e4, picker: null }));
    }, ey = Q ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: _.T.duration.instant } } : { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { height: w, opacity: { duration: _.T.duration.standard, ease: b } } }, e_ = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0, transition: { duration: Q ? 0 : _.T.duration.instant, ease: x } }, transition: { duration: Q ? 0 : _.T.duration.fast, ease: b } }, ej = (e3, t3) => {
      let a3 = e3.author.id === i2.id, s2 = e3.replies ?? [], o3 = !!en.collapsed[e3.id], d3 = en.editing === e3.id, c3 = en.confirming === e3.id, u2 = en.picker === e3.id;
      return (0, n.jsxs)(l.PY1.li, { className: v().item, ...ey, children: [(0, n.jsxs)("article", { className: v().comment, "aria-label": e3.deleted ? V.deletedComment : `${e3.author.name}, ${e3.createdAt}`, children: [e3.deleted ? (0, n.jsx)("span", { className: v().deletedDot, "aria-hidden": "true" }) : (0, n.jsx)(P, { author: e3.author }), (0, n.jsxs)("div", { className: v().main, children: [e3.deleted ? (0, n.jsx)("p", { className: v().deleted, children: V.deletedText }) : (0, n.jsxs)(n.Fragment, { children: [(0, n.jsxs)("header", { className: v().meta, children: [(0, n.jsx)("span", { className: v().name, children: e3.author.name }), (0, n.jsxs)("span", { className: v().time, children: [e3.createdAt, e3.edited && ` \xB7 ${V.edited}`] })] }), (0, n.jsx)(E, { reduced: Q, morphKey: d3 ? "edit" : c3 ? "confirm" : u2 ? "picker" : "view", children: (0, n.jsx)(r.N, { mode: "popLayout", initial: false, children: d3 ? (0, n.jsx)(l.PY1.div, { ...e_, children: (0, n.jsx)(Y, { people: ec, initial: e3.body, placeholder: V.editComment, submitLabel: V.save, cancelLabel: V.cancel, mentionsLabel: V.mentions, autoFocus: true, compact: true, onSubmit: (t4) => {
        var a4;
        return a4 = e3.id, void (ep(C(ee, a4, (e4) => ({ ...e4, body: t4, edited: true })), { type: "edit", id: a4, body: t4 }), es((e4) => ({ ...e4, editing: null })));
      }, onCancel: () => es((e4) => ({ ...e4, editing: null })) }) }, "edit") : (0, n.jsxs)(l.PY1.div, { ...e_, children: [(0, n.jsx)(M, { text: e3.body, people: ec }), (0, n.jsxs)("div", { className: v().footer, children: [(e3.reactions ?? []).length > 0 && (0, n.jsx)("div", { className: v().reactions, children: (0, n.jsx)(r.N, { initial: false, mode: "popLayout", children: (e3.reactions ?? []).map((t4) => {
        let a4 = t4.users.includes(i2.id);
        return (0, n.jsxs)(l.PY1.button, { type: "button", layout: !Q, className: v().reaction, "aria-pressed": a4, "aria-label": V.reactionCount(t4.emoji, t4.users.length, a4), onClick: () => eg(e3.id, t4.emoji), initial: Q ? { opacity: 0 } : { opacity: 0, scale: 0.7 }, animate: { opacity: 1, scale: 1 }, exit: Q ? { opacity: 0 } : { opacity: 0, scale: 0.7 }, transition: Q ? { duration: 0 } : _.T.spring.snappy, children: [(0, n.jsx)("span", { "aria-hidden": "true", children: t4.emoji }), (0, n.jsx)(W, { value: t4.users.length, reduced: Q })] }, t4.emoji);
      }) }) }), (0, n.jsx)(r.N, { mode: "wait", initial: false, children: c3 ? (0, n.jsxs)(l.PY1.div, { className: v().actions, "data-open": "", initial: Q ? { opacity: 0 } : { opacity: 0, x: 6 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, transition: { duration: Q ? 0 : _.T.duration.instant, ease: x } }, transition: { duration: Q ? 0 : _.T.duration.fast, ease: b }, onKeyDown: (e4) => {
        "Escape" === e4.key && (e4.stopPropagation(), es((e5) => ({ ...e5, confirming: null })));
      }, children: [(0, n.jsx)("span", { className: v().prompt, children: V.deleteConfirm }), (0, n.jsx)("button", { type: "button", className: v().action, onClick: () => es((e4) => ({ ...e4, confirming: null })), children: V.cancel }), (0, n.jsx)("button", { type: "button", className: v().action, "data-tone": "danger", autoFocus: true, onClick: () => {
        var t4;
        ep(C(ee, t4 = e3.id, (e4) => e4.replies?.length ? { ...e4, deleted: true, body: "", reactions: [] } : null), { type: "delete", id: t4 }), es((e4) => ({ ...e4, confirming: null })), eo?.id === t4 && er(null);
      }, children: V.delete })] }, "confirm") : u2 ? (0, n.jsxs)(l.PY1.div, { role: "group", "aria-label": V.reactions, className: v().actions, "data-open": "", onKeyDown: (e4) => {
        "Escape" === e4.key && (e4.stopPropagation(), es((e5) => ({ ...e5, picker: null })));
      }, initial: Q ? { opacity: 0 } : { opacity: 0, x: -6 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, transition: { duration: Q ? 0 : _.T.duration.instant, ease: x } }, transition: { duration: Q ? 0 : _.T.duration.fast, ease: b }, children: [D2.map((t4, a4) => (0, n.jsx)(l.PY1.button, { type: "button", className: v().emoji, autoFocus: 0 === a4, "aria-label": V.reactWith(t4), "aria-pressed": !!e3.reactions?.find((e4) => e4.emoji === t4)?.users.includes(i2.id), onClick: () => eg(e3.id, t4), initial: !Q && { opacity: 0, scale: 0.6 }, animate: { opacity: 1, scale: 1 }, transition: Q ? { duration: 0 } : { ..._.T.spring.snappy, delay: a4 * _.T.stagger.item }, children: t4 }, t4)), (0, n.jsx)("button", { type: "button", className: v().iconAction, "aria-label": V.closeReactions, onClick: () => es((e4) => ({ ...e4, picker: null })), children: (0, n.jsx)(m.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }) })] }, "picker") : (0, n.jsxs)(l.PY1.div, { className: v().actions, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: Q ? 0 : _.T.duration.instant, ease: x }, children: [(0, n.jsx)("button", { type: "button", className: v().iconAction, "aria-label": V.addReaction, onClick: () => es((t4) => ({ ...t4, picker: e3.id, confirming: null })), children: (0, n.jsx)(h.A, { size: 15, strokeWidth: 1.75, "aria-hidden": "true" }) }), (0, n.jsx)("button", { type: "button", className: v().action, onClick: () => {
        er({ id: e3.id, name: e3.author.name }), ed((e4) => e4 + 1);
      }, children: V.reply }), a3 && (0, n.jsx)("button", { type: "button", className: v().action, onClick: () => es((t4) => ({ ...t4, editing: e3.id, confirming: null, picker: null })), children: V.edit }), a3 && (0, n.jsx)("button", { type: "button", className: v().action, onClick: () => es((t4) => ({ ...t4, confirming: e3.id, editing: null, picker: null })), children: V.delete })] }, "actions") })] })] }, "view") }) })] }), s2.length > 0 && (0, n.jsxs)("button", { type: "button", className: v().toggle, "aria-expanded": !o3, onClick: () => es((t4) => ({ ...t4, collapsed: { ...t4.collapsed, [e3.id]: !o3 } })), children: [(0, n.jsx)(l.PY1.span, { className: v().toggleIcon, initial: false, animate: { rotate: 90 * !o3 }, transition: Q ? { duration: 0 } : _.T.spring.snappy, "aria-hidden": "true", children: (0, n.jsx)(p.A, { size: 13, strokeWidth: 1.75 }) }), o3 ? V.showReplies(S(s2)) : V.hideReplies, o3 && (0, n.jsx)("span", { className: v().stack, "aria-hidden": "true", children: [...T(s2).values()].slice(0, 3).map((e4) => (0, n.jsx)(P, { author: e4, size: 18 }, e4.id)) })] })] })] }), (0, n.jsx)(r.N, { initial: false, children: s2.length > 0 && !o3 && (0, n.jsx)(l.PY1.div, { className: v().repliesWrap, ...ey, children: (0, n.jsx)("ul", { className: v().replies, "data-depth": t3 + 1, children: (0, n.jsx)(r.N, { initial: false, children: s2.map((e4) => ej(e4, t3 + 1)) }) }) }, "replies") })] }, e3.id);
    }, ev = { initial: Q ? { opacity: 0 } : { opacity: 0, filter: `blur(${_.T.blur.subtle}px)` }, animate: { opacity: 1, filter: "blur(0px)" }, exit: { opacity: 0, filter: Q ? "blur(0px)" : `blur(${_.T.blur.subtle}px)` }, transition: { duration: Q ? 0 : _.T.duration.standard, ease: b } };
    return (0, n.jsx)("section", { ref: Z, className: [v().root, H].filter(Boolean).join(" "), "data-resolved": ei || void 0, "aria-label": V.thread, children: (0, n.jsx)(E, { reduced: Q, morphKey: ei ? "resolved" : "thread", children: (0, n.jsx)(r.N, { mode: "popLayout", initial: false, children: ei ? (0, n.jsxs)(l.PY1.div, { className: v().resolved, ...ev, children: [(0, n.jsx)("span", { className: v().resolvedIcon, "aria-hidden": "true", children: (0, n.jsx)(u.A, { size: 14, strokeWidth: 2 }) }), (0, n.jsxs)("span", { className: v().resolvedText, children: [(0, n.jsxs)("span", { className: v().resolvedTitle, children: [V.resolved, N2 ? (0, n.jsxs)(n.Fragment, { children: [" \xB7 ", (0, n.jsx)("span", { className: v().resolvedSubject, children: N2 })] }) : null] }), (0, n.jsxs)("span", { className: v().resolvedMeta, children: [V.commentCount(em), " \xB7 ", V.peopleCount(eh.length)] })] }), (0, n.jsx)("span", { className: v().stack, "aria-hidden": "true", children: eh.slice(0, 3).map((e3) => (0, n.jsx)(P, { author: e3, size: 22 }, e3.id)) }), (0, n.jsxs)("button", { type: "button", className: v().reopen, "data-reopen": true, onClick: () => eu(false), children: [(0, n.jsx)(g.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }), V.reopen] })] }, "resolved") : (0, n.jsxs)(l.PY1.div, { className: v().thread, ...ev, children: [(0, n.jsxs)("header", { className: v().header, children: [(0, n.jsxs)("div", { className: v().heading, children: [N2 && (0, n.jsx)("h3", { className: v().title, children: N2 }), (0, n.jsx)("span", { className: v().subtitle, children: V.commentCount(em) })] }), (0, n.jsxs)("button", { type: "button", className: v().resolve, "data-resolve": true, disabled: !em, onClick: () => eu(true), children: [(0, n.jsx)(u.A, { size: 15, strokeWidth: 1.75, "aria-hidden": "true" }), V.resolve] })] }), ee.length > 0 ? (0, n.jsx)("ul", { className: v().list, children: (0, n.jsx)(r.N, { initial: false, children: ee.map((e3) => ej(e3, 0)) }) }) : (0, n.jsx)("p", { className: v().empty, children: V.empty }), (0, n.jsxs)("div", { className: v().composerArea, children: [(0, n.jsx)(r.N, { initial: false, children: eo && (0, n.jsx)(l.PY1.div, { className: v().replying, ...ey, children: (0, n.jsxs)("span", { className: v().replyingInner, children: [(0, n.jsx)(y.A, { size: 13, strokeWidth: 1.75, "aria-hidden": "true" }), (0, n.jsx)("span", { children: (O = V.replyingTo(eo.name), B = eo.name, U = v().replyingName, (J = B ? O.indexOf(B) : -1) < 0 ? O : (0, n.jsxs)(n.Fragment, { children: [O.slice(0, J), (0, n.jsx)("span", { className: U, children: B }), O.slice(J + B.length)] })) }), (0, n.jsx)("button", { type: "button", className: v().iconAction, "aria-label": V.cancelReply, onClick: () => er(null), children: (0, n.jsx)(m.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }) })] }) }, "replying") }), (0, n.jsx)(Y, { people: ec, placeholder: L2, submitLabel: V.send, cancelLabel: V.cancel, mentionsLabel: V.mentions, focusKey: el, onSubmit: (e3) => {
      let t3 = { id: `c-${Date.now().toString(36)}-${($++).toString(36)}`, author: i2, body: e3, createdAt: F, reactions: [] }, a3 = null;
      if (eo) {
        let e4 = R(ee, eo.id) ?? [];
        a3 = e4[Math.min(e4.length, I2) - 1] ?? null;
      }
      let n2 = a3 ? C(ee, a3, (e4) => ({ ...e4, replies: [...e4.replies ?? [], t3] })) : [...ee, t3];
      a3 && es((e4) => ({ ...e4, collapsed: { ...e4.collapsed, [a3]: false } })), ep(n2, { type: "reply", comment: t3, parentId: a3 }), er(null);
    }, onCancel: eo ? () => er(null) : void 0, leading: (0, n.jsx)(P, { author: i2 }) })] })] }, "thread") }) }) });
  });
}

__m(__module,__exports,__require);
}