function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ChatThreadDemo: () => ed });
  var i = a(95155), r = a(12115), n = a(5772), s = a(51811);
  let l = { name: "wifi-off", size: 24, node: [["path", { d: "M12 20h.01", key: "zekei9" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }], ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }], ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }], ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }], ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]] };
  l.node;
  let o = (0, s.A)(l);
  var d = a(80642), c = a(25354), h = a(28245), u = a(92171), p = a(18310), m = a(36483), g = a(9005), f = a(15561), y = a(38158), _ = a(41189), j = a(19805), x = a(83874), v = a(7770), b = a(94354), w = a.n(b);
  let k = { send: "Send", attach: "Attach files", attachments: "Attachments", removeFile: (e2) => `Remove ${e2}` }, N = (e2) => e2.split(" ")[0], A = { ...k, sending: "Sending", sent: "Sent", delivered: "Delivered", read: "Read", failed: "Not delivered", retry: "Retry", readBy: (e2) => `Read by ${e2.join(", ")}`, typing: (e2) => 1 === e2.length ? `${N(e2[0])} is typing` : 2 === e2.length ? `${N(e2[0])} and ${N(e2[1])} are typing` : "Several people are typing", newMessages: (e2) => `${e2} new ${1 === e2 ? "message" : "messages"}`, jumpToLatest: "Jump to latest", unknownAuthor: "Unknown", addReaction: "Add reaction", reactions: "Reactions", reactWith: (e2) => `React with ${e2}`, reactionCount: (e2, t2, a2) => `${e2} ${t2}${a2 ? ", including you" : ""}` }, R = (e2, t2) => ({ ...e2, ...Object.fromEntries(Object.entries(t2 ?? {}).filter(([, e3]) => void 0 !== e3)) });
  function z(e2, t2) {
    let a2 = new Intl.RelativeTimeFormat(e2, { numeric: "auto" }).format(t2, "day");
    return a2.charAt(0).toLocaleUpperCase(e2) + a2.slice(1);
  }
  let { spring: S, duration: M, ease: I, blur: C } = v.T, D = [...I.enter], L = [...I.standard], P = (e2, t2) => {
    let a2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: a2 * a2, damping: 2 * (1 - t2) * a2, mass: 1 };
  }, T = P(0.44, 0), $ = P(S.smooth.visualDuration, 0), O = P(0.3, 0), E = P(0.46, 0), F = ["\u{1F44D}", "\u2764\uFE0F", "\u{1F602}", "\u{1F389}", "\u{1F440}", "\u{1F64F}"], W = () => () => {
  }, H = (e2) => e2 instanceof Date ? e2 : new Date(e2), Y = (e2) => `${e2.getFullYear()}-${e2.getMonth()}-${e2.getDate()}`;
  function B(e2 = 0) {
    return e2 < 1024 ? `${e2} B` : e2 < 1048576 ? `${Math.round(e2 / 1024)} KB` : `${(e2 / 1048576).toFixed(1)} MB`;
  }
  function U({ person: e2, size: t2 }) {
    return (0, i.jsx)("span", { className: w().avatar, style: { width: t2, height: t2, fontSize: 0.38 * t2 }, "aria-hidden": "true", children: e2.avatar ? (0, i.jsx)("img", { src: e2.avatar, alt: "", width: t2, height: t2, loading: "lazy" }) : e2.name.split(/\s+/).filter(Boolean).slice(0, 2).map((e3) => e3[0]?.toUpperCase()).join("") });
  }
  function J({ value: e2, reduced: t2 }) {
    let [a2, n2] = (0, r.useState)({ value: e2, direction: 1 });
    a2.value !== e2 && n2({ value: e2, direction: e2 > a2.value ? 1 : -1 });
    let s2 = a2.value !== e2 ? e2 > a2.value ? 1 : -1 : a2.direction;
    return (0, i.jsx)("span", { className: w().countRoll, children: (0, i.jsx)(d.N, { initial: false, mode: "popLayout", custom: s2, children: (0, i.jsx)(c.PY1.span, { custom: s2, variants: { in: (e3) => ({ opacity: 0, y: t2 ? 0 : 8 * e3 }), rest: { opacity: 1, y: 0 }, out: (e3) => ({ opacity: 0, y: t2 ? 0 : -8 * e3 }) }, initial: "in", animate: "rest", exit: "out", transition: t2 ? { duration: M.fast } : S.snappy, children: e2 }, e2) }) });
  }
  function q() {
    return (0, i.jsxs)("span", { className: w().dots, "aria-hidden": "true", children: [(0, i.jsx)("i", {}), (0, i.jsx)("i", {}), (0, i.jsx)("i", {})] });
  }
  let V = (0, r.forwardRef)(function({ onSend: e2, placeholder: t2 = "Message", allowAttachments: a2 = true, accept: n2, disabled: s2, labels: l2, className: o2 }, _2) {
    let j2, x2, v2 = R(k, l2), b2 = !!(0, p.I)(), [N2, A2] = (0, r.useState)(""), [z2, I2] = (0, r.useState)([]), [D2, P2] = (0, r.useState)(false), [T2, E2] = (0, r.useState)(0), F2 = (0, r.useRef)(null), W2 = (0, r.useRef)(null), H2 = (0, r.useRef)(null), Y2 = (j2 = (0, h.d)("auto"), x2 = (0, r.useRef)(false), (0, r.useLayoutEffect)(() => {
      let e3 = H2.current;
      if (!e3) return;
      let t3 = () => {
        let t4 = Math.min(150, e3.offsetHeight);
        if (!x2.current || b2) {
          j2.jump(t4), x2.current = true;
          return;
        }
        (0, u.i)(j2, t4, $);
      };
      if (t3(), "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(t3);
      return a3.observe(e3), () => a3.disconnect();
    }, [j2, 150, H2, b2]), j2), U2 = !s2 && (N2.trim().length > 0 || z2.length > 0), J2 = (0, r.useRef)(0);
    (0, r.useImperativeHandle)(_2, () => ({ focus: () => F2.current?.focus() }), []);
    let q2 = (0, r.useRef)(z2);
    (0, r.useEffect)(() => {
      q2.current = z2;
    }, [z2]), (0, r.useEffect)(() => () => q2.current.forEach((e3) => e3.url && URL.revokeObjectURL(e3.url)), []);
    let V2 = (e3) => {
      if (!a2 || !e3) return;
      let t3 = Array.from(e3).slice(0, 10).map((e4) => ({ id: `file-${++J2.current}`, file: e4, url: e4.type.startsWith("image/") ? URL.createObjectURL(e4) : void 0 }));
      t3.length && I2((e4) => [...e4, ...t3]);
    }, Q2 = () => {
      U2 && (e2({ text: N2.trim(), files: z2.map((e3) => e3.file) }), z2.forEach((e3) => e3.url && URL.revokeObjectURL(e3.url)), I2([]), A2(""), E2((e3) => e3 + 1), F2.current?.focus());
    }, K2 = b2 ? { opacity: 0 } : { opacity: 0, scale: 0.9, filter: `blur(${C.subtle}px)` };
    return (0, i.jsxs)("div", { className: [w().composer, o2].filter(Boolean).join(" "), "data-dragging": D2 || void 0, onDragOver: (e3) => {
      a2 && e3.dataTransfer.types.includes("Files") && (e3.preventDefault(), P2(true));
    }, onDragLeave: (e3) => {
      e3.currentTarget.contains(e3.relatedTarget) || P2(false);
    }, onDrop: (e3) => {
      a2 && (e3.preventDefault(), P2(false), V2(e3.dataTransfer.files));
    }, children: [(0, i.jsx)(d.N, { initial: false, children: z2.length > 0 && (0, i.jsx)(c.PY1.div, { className: w().trayClip, initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: b2 ? { duration: 0 } : { height: $, opacity: { duration: M.fast } }, children: (0, i.jsx)("ul", { className: w().tray, "aria-label": v2.attachments, children: (0, i.jsx)(d.N, { initial: false, mode: "popLayout", children: z2.map((e3) => (0, i.jsxs)(c.PY1.li, { className: w().pending, layout: !b2, initial: K2, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, exit: { ...K2, transition: { duration: M.exit, ease: L } }, transition: O, children: [e3.url ? (0, i.jsx)("img", { className: w().pendingImage, src: e3.url, alt: "" }) : (0, i.jsxs)("span", { className: w().pendingFile, children: [(0, i.jsx)(m.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), (0, i.jsx)("span", { className: w().pendingName, children: e3.file.name }), (0, i.jsx)("span", { className: w().pendingSize, children: B(e3.file.size) })] }), (0, i.jsx)("button", { type: "button", className: w().remove, "aria-label": v2.removeFile(e3.file.name), onClick: () => {
      let t3;
      return t3 = e3.id, I2((e4) => e4.filter((e5) => (e5.id === t3 && e5.url && URL.revokeObjectURL(e5.url), e5.id !== t3)));
    }, children: (0, i.jsx)(g.A, { size: 12, strokeWidth: 2.25 }) })] }, e3.id)) }) }) }, "tray") }), (0, i.jsxs)("div", { className: w().inputRow, children: [a2 && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("button", { type: "button", className: w().attach, "aria-label": v2.attach, disabled: s2, onClick: () => W2.current?.click(), children: (0, i.jsx)(f.A, { size: 18, strokeWidth: 1.75 }) }), (0, i.jsx)("input", { ref: W2, type: "file", multiple: true, accept: n2, hidden: true, onChange: (e3) => {
      V2(e3.target.files), e3.target.value = "";
    } })] }), (0, i.jsxs)("div", { className: w().box, children: [(0, i.jsxs)(c.PY1.div, { className: w().field, style: { height: Y2 }, children: [(0, i.jsxs)("div", { ref: H2, className: w().mirror, "aria-hidden": "true", children: [N2, "\u200B"] }), (0, i.jsx)("textarea", { ref: F2, className: w().textarea, value: N2, rows: 1, placeholder: t2, disabled: s2, "aria-label": t2, onChange: (e3) => A2(e3.target.value), onKeyDown: (e3) => {
      "Enter" !== e3.key || e3.shiftKey || e3.nativeEvent.isComposing || (e3.preventDefault(), Q2());
    }, onPaste: (e3) => {
      a2 && e3.clipboardData.files.length && (e3.preventDefault(), V2(e3.clipboardData.files));
    } })] }), (0, i.jsx)("button", { type: "button", className: w().send, "data-ready": U2 || void 0, "aria-label": v2.send, "aria-disabled": !U2, onClick: Q2, children: (0, i.jsx)(d.N, { initial: false, mode: "popLayout", children: (0, i.jsx)(c.PY1.span, { className: w().sendIcon, initial: b2 ? { opacity: 0 } : { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, exit: b2 ? { opacity: 0 } : { opacity: 0, y: -18, transition: { duration: M.fast, ease: L } }, transition: b2 ? { duration: M.fast } : S.snappy, children: (0, i.jsx)(y.A, { size: 16, strokeWidth: 2.25 }) }, T2) }) })] })] })] });
  }), Q = (0, r.forwardRef)(function({ participants: e2, currentUserId: t2, messages: a2, defaultMessages: n2, typing: s2 = [], readBy: l2, onSend: o2, onReact: g2, onRetry: f2, reactions: y2 = F, placeholder: x2 = "Message", composer: v2 = true, allowAttachments: b2 = true, accept: k2, groupWindow: N2 = 3e5, locale: I2 = "en-US", label: P2 = "Conversation", labels: Q2, className: G2 }, X2) {
    var Z2, ee2;
    let et2, ea2, ei2 = (0, r.useMemo)(() => R({ ...A, today: z(I2, 0), yesterday: z(I2, -1) }, Q2), [Q2, I2]), er2 = !!(0, p.I)(), en2 = (0, r.useSyncExternalStore)(W, () => true, () => false), es2 = (0, r.useId)(), [el2, eo2] = (0, r.useState)(n2 ?? []), ed2 = a2 ?? el2, ec = void 0 !== a2, eh = (0, r.useMemo)(() => new Map(e2.map((e3) => [e3.id, e3])), [e2]), eu = (0, r.useRef)(null), ep = (0, r.useMemo)(() => {
      let e3 = [], a3 = "";
      return ed2.forEach((i2, r2) => {
        let n3 = H(i2.createdAt), s3 = Y(n3);
        if (s3 !== a3) {
          let t3, i3, r3;
          e3.push({ type: "day", key: `day-${s3}`, label: en2 ? (t3 = /* @__PURE__ */ new Date(), 0 === (r3 = Math.round(((i3 = (e4) => new Date(e4.getFullYear(), e4.getMonth(), e4.getDate()).getTime())(t3) - i3(n3)) / 864e5)) ? ei2.today : 1 === r3 ? ei2.yesterday : r3 > 1 && r3 < 7 ? n3.toLocaleDateString(I2, { weekday: "long" }) : n3.toLocaleDateString(I2, { weekday: "short", month: "short", day: "numeric", year: n3.getFullYear() === t3.getFullYear() ? void 0 : "numeric" })) : "" }), a3 = s3;
        }
        let l3 = (e4) => !!e4 && e4.authorId === i2.authorId && Y(H(e4.createdAt)) === s3 && Math.abs(H(e4.createdAt).getTime() - n3.getTime()) <= N2;
        e3.push({ type: "message", key: i2.id, message: i2, index: r2, author: eh.get(i2.authorId) ?? { id: i2.authorId, name: ei2.unknownAuthor }, mine: i2.authorId === t2, first: !l3(ed2[r2 - 1]), last: !l3(ed2[r2 + 1]) });
      }), e3;
    }, [t2, N2, en2, I2, ed2, eh, ei2]), em = (0, r.useMemo)(() => {
      let e3 = /* @__PURE__ */ new Map();
      for (let [a3, i2] of Object.entries(l2 ?? {})) {
        let r2 = eh.get(a3), n3 = ed2.find((e4) => e4.id === i2);
        r2 && a3 !== t2 && n3 && n3.authorId !== a3 && e3.set(i2, [...e3.get(i2) ?? [], r2]);
      }
      return e3;
    }, [t2, ed2, eh, l2]), eg = (0, r.useMemo)(() => {
      let e3 = -1;
      return em.forEach((t3, a3) => {
        e3 = Math.max(e3, ed2.findIndex((e4) => e4.id === a3));
      }), e3;
    }, [ed2, em]), ef = (0, r.useMemo)(() => {
      for (let e3 = ed2.length - 1; e3 >= 0; e3--) if (ed2[e3].authorId === t2) return e3;
      return -1;
    }, [t2, ed2]), ey = (0, r.useMemo)(() => new Intl.DateTimeFormat(I2, { hour: "numeric", minute: "2-digit" }), [I2]), e_ = (0, r.useRef)(null), ej = (0, r.useRef)(null), ex = (0, h.d)(0), ev = (0, r.useRef)(true), eb = (0, r.useRef)(0), ew = (0, r.useRef)(er2);
    (0, r.useEffect)(() => {
      ew.current = er2;
    }, [er2]);
    let [ek, eN] = (0, r.useState)(true), [eA, eR] = (0, r.useState)(false), [ez, eS] = (0, r.useState)(() => ed2.length);
    (0, r.useLayoutEffect)(() => {
      let e3 = e_.current, t3 = ej.current;
      if (!e3 || !t3 || (eb.current = t3.offsetHeight, e3.scrollTop = e3.scrollHeight, "u" < typeof ResizeObserver)) return;
      let a3 = new ResizeObserver(() => {
        let a4 = t3.offsetHeight, i2 = a4 - eb.current;
        eb.current = a4, ev.current && (e3.scrollTop = e3.scrollHeight, i2 > 0 && i2 < e3.clientHeight && !ew.current && (ex.jump(ex.get() + i2), (0, u.i)(ex, 0, T)));
      });
      return a3.observe(t3), () => a3.disconnect();
    }, [ex]);
    let eM = (0, r.useRef)(new Set(ed2.map((e3) => e3.id)));
    (0, r.useLayoutEffect)(() => {
      let e3 = ed2.filter((e4) => !eM.current.has(e4.id));
      e3.forEach((e4) => eM.current.add(e4.id)), e3.some((e4) => e4.authorId === t2) && (ev.current = true);
    }, [t2, ed2]);
    let eI = (0, r.useCallback)((e3 = true) => {
      let t3 = e_.current;
      t3 && (ev.current = true, t3.scrollTo({ top: t3.scrollHeight, behavior: e3 && !ew.current ? "smooth" : "auto" }));
    }, []);
    (0, r.useImperativeHandle)(X2, () => ({ scrollToBottom: eI, focusComposer: () => eu.current?.focus() }), [eI]);
    let eC = ek ? 0 : ed2.slice(ez).filter((e3) => e3.authorId !== t2).length, eD = !ek && (eC > 0 || eA), [eL, eP] = (0, r.useState)(null), eT = (e3, t3) => {
      eP(null), g2?.(e3, t3), ec || eo2((a3) => a3.map((a4) => {
        if (a4.id !== e3) return a4;
        let i2 = [...a4.reactions ?? []], r2 = i2.findIndex((e4) => e4.emoji === t3), n3 = i2[r2];
        return n3 ? n3.mine ? i2[r2] = { ...n3, count: n3.count - 1, mine: false } : i2[r2] = { ...n3, count: n3.count + 1, mine: true } : i2.push({ emoji: t3, count: 1, mine: true }), { ...a4, reactions: i2.filter((e4) => e4.count > 0) };
      }));
    }, e$ = (0, r.useRef)(0), eO = s2.map((e3) => eh.get(e3)).filter((e3) => !!e3 && e3.id !== t2), eE = eO.length ? ei2.typing(eO.map((e3) => e3.name)) : "";
    return (0, i.jsxs)("div", { className: [w().root, G2].filter(Boolean).join(" "), children: [(0, i.jsxs)("div", { className: w().viewport, children: [(0, i.jsx)("div", { ref: e_, className: w().scroller, onScroll: () => {
      let e3 = e_.current;
      if (!e3) return;
      let t3 = e3.scrollHeight - e3.scrollTop - e3.clientHeight;
      ev.current = t3 < 48, eN(ev.current), eR(t3 > 180), ev.current && eS(ed2.length);
    }, "data-chat-scroller": "", children: (0, i.jsx)("div", { className: w().track, children: (0, i.jsx)(c.PY1.div, { ref: ej, className: w().content, style: { y: ex }, children: (0, i.jsx)("ol", { className: w().list, role: "log", "aria-label": P2, "aria-live": "polite", "aria-relevant": "additions", children: (0, i.jsxs)(d.N, { initial: false, children: [ep.map((e3) => {
      if ("day" === e3.type) return (0, i.jsx)("li", { className: w().day, children: (0, i.jsx)("span", { suppressHydrationWarning: true, children: e3.label }) }, e3.key);
      let { message: t3, author: a3, mine: r2, first: n3, last: s3, index: l3 } = e3, o3 = H(t3.createdAt), h2 = em.get(t3.id) ?? [], u2 = l3 === ef && r2, p2 = "failed" === t3.status ? "failed" : "sending" === t3.status ? "sending" : eg >= l3 ? "read" : t3.status ?? "sent", g3 = t3.attachments?.filter((e4) => "image" === e4.kind && e4.url) ?? [], j2 = t3.attachments?.filter((e4) => "image" !== e4.kind || !e4.url) ?? [];
      return (0, i.jsxs)(c.PY1.li, { className: w().row, "data-mine": r2 || void 0, "data-first": n3 || void 0, "data-last": s3 || void 0, "data-failed": "failed" === t3.status || void 0, initial: er2 ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 14, x: r2 ? 8 : -8, filter: `blur(${C.subtle}px)` }, animate: { opacity: 1, scale: 1, y: 0, x: 0, filter: "blur(0px)" }, exit: { opacity: 0, transition: { duration: M.exit } }, transition: er2 ? { duration: M.fast } : { ...E, opacity: { duration: M.standard, ease: D }, filter: { duration: M.standard, ease: D } }, style: { transformOrigin: r2 ? "100% 100%" : "0 100%" }, children: [!r2 && (0, i.jsx)("div", { className: w().gutter }), (0, i.jsxs)("div", { className: w().stack, children: [n3 && (0, i.jsxs)("p", { className: w().meta, children: [!r2 && (0, i.jsx)("span", { className: w().author, children: a3.name }), (0, i.jsx)("time", { dateTime: o3.toISOString(), suppressHydrationWarning: true, children: en2 ? ey.format(o3) : "" })] }), (0, i.jsxs)("div", { className: w().line, children: [!r2 && s3 && (0, i.jsx)("span", { className: w().face, children: (0, i.jsx)(U, { person: a3, size: 28 }) }), (0, i.jsxs)("div", { className: w().parts, children: [g3.length > 0 && (0, i.jsx)("div", { className: w().gallery, "data-count": Math.min(g3.length, 4), children: g3.slice(0, 4).map((e4, t4) => (0, i.jsxs)("a", { className: w().image, href: e4.url, target: "_blank", rel: "noreferrer", style: 1 === g3.length && e4.width && e4.height ? { aspectRatio: `${e4.width} / ${e4.height}` } : void 0, children: [(0, i.jsx)("img", { src: e4.url, alt: e4.alt ?? e4.name, loading: "lazy" }), 3 === t4 && g3.length > 4 && (0, i.jsxs)("span", { className: w().more, children: ["+", g3.length - 4] })] }, e4.id)) }), j2.map((e4) => (0, i.jsxs)("a", { className: w().file, href: e4.url, download: e4.name, target: "_blank", rel: "noreferrer", children: [(0, i.jsx)(m.A, { size: 18, strokeWidth: 1.75, "aria-hidden": "true" }), (0, i.jsxs)("span", { className: w().fileText, children: [(0, i.jsx)("span", { className: w().fileName, children: e4.name }), void 0 !== e4.size && (0, i.jsx)("span", { className: w().fileSize, children: B(e4.size) })] })] }, e4.id)), t3.text && (0, i.jsx)("div", { className: w().bubble, title: en2 ? o3.toLocaleString(I2, { dateStyle: "medium", timeStyle: "short" }) : void 0, children: t3.text })] }), (0, i.jsx)(K, { open: eL === t3.id, mine: r2, reactions: y2, reduced: er2, labels: ei2, id: `${es2}-picker-${t3.id}`, onToggle: () => eP((e4) => e4 === t3.id ? null : t3.id), onClose: () => eP(null), onPick: (e4) => eT(t3.id, e4) })] }), (0, i.jsx)(d.N, { initial: false, children: !!t3.reactions?.length && (0, i.jsx)(c.PY1.div, { className: w().reactionClip, initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: er2 ? { duration: 0 } : { height: $, opacity: { duration: M.fast } }, children: (0, i.jsx)("ul", { className: w().reactions, "aria-label": ei2.reactions, children: (0, i.jsx)(d.N, { initial: false, mode: "popLayout", children: t3.reactions.map((e4) => (0, i.jsx)(c.PY1.li, { layout: !er2, initial: er2 ? { opacity: 0 } : { opacity: 0, scale: 0.6 }, animate: { opacity: 1, scale: 1 }, exit: er2 ? { opacity: 0 } : { opacity: 0, scale: 0.6 }, transition: O, children: (0, i.jsxs)("button", { type: "button", className: w().reaction, "aria-pressed": !!e4.mine, "aria-label": ei2.reactionCount(e4.emoji, e4.count, !!e4.mine), onClick: () => eT(t3.id, e4.emoji), children: [(0, i.jsx)("span", { "aria-hidden": "true", children: e4.emoji }), (0, i.jsx)(J, { value: e4.count, reduced: er2 })] }) }, e4.emoji)) }) }) }, "reactions") }), (u2 || h2.length > 0) && (0, i.jsxs)("div", { className: w().receipts, children: [u2 && (0, i.jsx)("span", { className: w().status, "data-status": p2, children: "failed" === p2 ? (0, i.jsxs)(i.Fragment, { children: [ei2.failed, f2 && (0, i.jsxs)("button", { type: "button", className: w().retry, onClick: () => f2(t3.id), children: [(0, i.jsx)(_.A, { size: 12, strokeWidth: 2, "aria-hidden": "true" }), ei2.retry] })] }) : ei2[p2] }), h2.length > 0 && (0, i.jsx)("span", { className: w().readers, "aria-label": ei2.readBy(h2.map((e4) => e4.name)), children: h2.map((e4) => (0, i.jsx)(c.PY1.span, { layoutId: er2 ? void 0 : `${es2}-receipt-${e4.id}`, className: w().reader, transition: T, children: (0, i.jsx)(U, { person: e4, size: 16 }) }, e4.id)) })] })] })] }, e3.key);
    }), eO.length > 0 && (0, i.jsxs)(c.PY1.li, { className: w().row, "data-first": true, "data-last": true, "aria-hidden": "true", initial: er2 ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 8 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: er2 ? { opacity: 0 } : { opacity: 0, scale: 0.9, transition: { duration: M.exit, ease: L } }, transition: er2 ? { duration: M.fast } : S.snappy, style: { transformOrigin: "0 100%" }, children: [(0, i.jsx)("div", { className: w().gutter }), (0, i.jsx)("div", { className: w().stack, children: (0, i.jsxs)("div", { className: w().line, children: [(0, i.jsx)("span", { className: w().face, children: (0, i.jsx)(U, { person: eO[0], size: 28 }) }), (0, i.jsx)("div", { className: `${w().bubble} ${w().typing}`, children: (0, i.jsx)(q, {}) })] }) })] }, "typing")] }) }) }) }) }), (0, i.jsx)("span", { className: w().srOnly, role: "status", children: eE }), (0, i.jsx)(d.N, { children: eD && (0, i.jsxs)(c.PY1.button, { type: "button", className: w().pill, onClick: () => eI(), layout: !er2, style: { borderRadius: 16 }, initial: er2 ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.94 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: er2 ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.94, transition: { duration: M.exit, ease: L } }, transition: er2 ? { duration: M.fast } : { ...S.morph, opacity: { duration: M.fast } }, children: [(0, i.jsx)(c.PY1.span, { className: w().pillIcon, layout: !er2 && "position", transition: S.morph, children: (0, i.jsx)(j.A, { size: 14, strokeWidth: 2, "aria-hidden": "true" }) }), (0, i.jsx)(d.N, { initial: false, mode: "popLayout", children: (0, i.jsx)(c.PY1.span, { layout: !er2 && "position", initial: { opacity: 0, filter: `blur(${C.subtle}px)` }, animate: { opacity: 1, filter: "blur(0px)" }, exit: { opacity: 0, filter: `blur(${C.subtle}px)` }, transition: { duration: M.fast }, children: eC > 0 ? (Z2 = ei2.newMessages(eC), ee2 = (0, i.jsx)(J, { value: eC, reduced: er2 }), et2 = String(eC), (ea2 = Z2.indexOf(et2)) < 0 ? Z2 : (0, i.jsxs)(i.Fragment, { children: [Z2.slice(0, ea2), ee2, Z2.slice(ea2 + et2.length)] })) : ei2.jumpToLatest }, eC > 0 ? "new" : "latest") })] }, "pill") })] }), v2 && (0, i.jsx)(V, { ref: eu, onSend: (e3) => {
      ev.current = true;
      let a3 = o2?.(e3);
      if (ec) return a3;
      let i2 = e3.files.map((e4, t3) => ({ id: `local-file-${++e$.current}-${t3}`, name: e4.name, size: e4.size, kind: e4.type.startsWith("image/") ? "image" : "file", url: URL.createObjectURL(e4) }));
      eo2((a4) => [...a4, { id: `local-${Date.now()}-${++e$.current}`, authorId: t2, text: e3.text || void 0, attachments: i2, createdAt: /* @__PURE__ */ new Date(), status: "sent" }]);
    }, placeholder: x2, allowAttachments: b2, accept: k2, labels: ei2 })] });
  });
  function K({ open: e2, mine: t2, reactions: a2, reduced: n2, labels: s2, id: l2, onToggle: o2, onClose: h2, onPick: u2 }) {
    let p2 = (0, r.useRef)(null), m2 = (0, r.useRef)(null), [g2, f2] = (0, r.useState)(0), [y2, _2] = (0, r.useState)(false), j2 = (0, r.useRef)(h2);
    return (0, r.useEffect)(() => {
      j2.current = h2;
    }, [h2]), (0, r.useEffect)(() => {
      if (!e2) return;
      let t3 = (e3) => {
        p2.current?.contains(e3.target) || j2.current();
      };
      document.addEventListener("pointerdown", t3);
      let a3 = requestAnimationFrame(() => p2.current?.querySelector("[data-emoji-index='0']")?.focus({ preventScroll: true }));
      return () => {
        document.removeEventListener("pointerdown", t3), cancelAnimationFrame(a3);
      };
    }, [e2]), (0, i.jsxs)("div", { ref: p2, className: w().pickerWrap, "data-open": e2 || void 0, "data-below": y2 || void 0, children: [(0, i.jsx)("button", { ref: m2, type: "button", className: w().reactButton, "aria-label": s2.addReaction, "aria-expanded": e2, "aria-controls": e2 ? l2 : void 0, onClick: () => {
      let t3 = p2.current, a3 = t3?.closest("[data-chat-scroller]");
      !e2 && t3 && a3 && _2(t3.getBoundingClientRect().top - a3.getBoundingClientRect().top < 56), o2();
    }, children: (0, i.jsx)(x.A, { size: 16, strokeWidth: 1.75 }) }), (0, i.jsx)(d.N, { children: e2 && (0, i.jsx)(c.PY1.div, { id: l2, role: "group", "aria-label": s2.reactions, className: w().picker, "data-mine": t2 || void 0, onKeyDown: (e3) => {
      if ("Escape" === e3.key) {
        e3.preventDefault(), e3.stopPropagation(), h2(), m2.current?.focus();
        return;
      }
      let t3 = "ArrowRight" === e3.key ? 1 : "ArrowLeft" === e3.key ? -1 : 0;
      if (!t3) return;
      e3.preventDefault();
      let i2 = (g2 + t3 + a2.length) % a2.length;
      f2(i2), p2.current?.querySelector(`[data-emoji-index='${i2}']`)?.focus();
    }, initial: n2 ? { opacity: 0 } : { opacity: 0, scale: 0.85, y: y2 ? -6 : 6 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: n2 ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: y2 ? -4 : 4, transition: { duration: M.exit, ease: L } }, transition: n2 ? { duration: M.fast } : O, children: a2.map((e3, t3) => (0, i.jsx)(c.PY1.button, { type: "button", className: w().emoji, "aria-label": s2.reactWith(e3), "data-emoji-index": t3, tabIndex: t3 === g2 ? 0 : -1, initial: !n2 && { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 }, transition: { ...O, delay: n2 ? 0 : 0.025 * t3 }, onFocus: () => f2(t3), onClick: () => u2(e3), children: e3 }, e3)) }) })] });
  }
  var G = a(67752), X = a(4497), Z = a.n(X);
  let ee = (0, G.MV)("jordan-reyes"), et = (0, G.MV)("chloe-nguyen"), ea = (0, G.MV)("daniel-kim"), ei = [ee, et, ea].map((e2) => ({ id: e2.id, name: e2.name, avatar: e2.src })), er = (0, G.jW)("sea-at-dusk"), en = ["Perfect, thank you. Should I expect the same for scheduled exports?", "Got it. I'll let the finance team know they can run the full quarter again.", "That makes sense. Appreciate the quick turnaround, really.", "Will do. Have a great rest of your week!"];
  function es(e2, t2, a2) {
    let i2 = /* @__PURE__ */ new Date();
    return i2.setDate(i2.getDate() - e2), i2.setHours(t2, a2, 0, 0), i2;
  }
  function el() {
    return [{ id: "m1", authorId: et.id, createdAt: es(1, 16, 12), text: "Hi! Our CSV export from the revenue dashboard stops at 10,000 rows. Is that a limit on our plan?" }, { id: "m2", authorId: ee.id, createdAt: es(1, 16, 20), text: "Hi Chloe, thanks for flagging it. That isn't a plan limit. Looping in Daniel from our backend team.", status: "read" }, { id: "m3", authorId: ea.id, createdAt: es(1, 16, 41), text: "Found it. The export job still used the old page size. A fix goes out tomorrow morning." }, { id: "m4", authorId: ea.id, createdAt: es(0, 9, 18), text: "Fix is live. Exports now stream up to one million rows.", reactions: [{ emoji: "\u{1F389}", count: 2 }] }, { id: "m5", authorId: ea.id, createdAt: es(0, 9, 19), attachments: [{ id: "a1", kind: "file", name: "export-check-q3.csv", size: 2516582 }] }, { id: "m6", authorId: et.id, createdAt: es(0, 9, 31), text: "All 48,210 rows came through. Thank you both!" }, { id: "m7", authorId: et.id, createdAt: es(0, 9, 32), text: "The view from our offsite, since it's finally a calm day", attachments: [{ id: "a2", kind: "image", name: "offsite.jpg", url: er.src, width: er.width, height: er.height, alt: er.alt }], reactions: [{ emoji: "\u2764\uFE0F", count: 1, mine: true }] }, { id: "m8", authorId: ee.id, createdAt: es(0, 9, 34), text: "So glad it worked. I'll close this out, reply here anytime.", status: "delivered" }];
  }
  let eo = () => () => {
  };
  function ed() {
    let e2 = (0, r.useSyncExternalStore)(eo, () => true, () => false), [t2, a2] = (0, r.useState)(el), [s2, l2] = (0, r.useState)({ [ea.id]: "m8", [et.id]: "m7" }), [d2, c2] = (0, r.useState)([]), [h2, u2] = (0, r.useState)(false), p2 = (0, r.useRef)([]), m2 = (0, r.useRef)(0), g2 = (0, r.useRef)(0), f2 = (0, r.useRef)(h2);
    (0, r.useEffect)(() => {
      f2.current = h2;
    }, [h2]), (0, r.useEffect)(() => () => p2.current.forEach(window.clearTimeout), []);
    let y2 = (e3, t3) => {
      p2.current.push(window.setTimeout(t3, e3));
    }, _2 = (e3, t3) => a2((a3) => a3.map((a4) => a4.id === e3 ? { ...a4, ...t3 } : a4)), j2 = (e3) => {
      _2(e3, { status: "sending" }), y2(600, () => {
        f2.current ? _2(e3, { status: "failed" }) : (_2(e3, { status: "delivered" }), y2(1100, () => {
          l2((t3) => ({ ...t3, [et.id]: e3, [ea.id]: e3 })), y2(500, () => c2([et.id])), y2(2300, () => {
            c2([]);
            let e4 = en[m2.current++ % en.length];
            a2((t3) => [...t3, { id: `reply-${++g2.current}`, authorId: et.id, createdAt: /* @__PURE__ */ new Date(), text: e4 }]);
          });
        }));
      });
    };
    return (0, i.jsx)("div", { className: Z().demo, children: (0, i.jsxs)("div", { className: Z().card, children: [(0, i.jsxs)("header", { className: Z().header, children: [(0, i.jsxs)("span", { className: Z().faces, "aria-hidden": "true", children: [(0, i.jsx)(n.default, { src: et.src, alt: "", width: 28, height: 28 }), (0, i.jsx)(n.default, { src: ea.src, alt: "", width: 28, height: 28 })] }), (0, i.jsxs)("div", { className: Z().heading, children: [(0, i.jsx)("h3", { className: Z().title, children: "CSV export limit" }), (0, i.jsx)("p", { className: Z().subtitle, children: "Chloe Nguyen, Daniel Kim" })] }), (0, i.jsxs)("button", { type: "button", className: Z().toggle, "aria-label": "Simulate offline", "aria-pressed": h2, onClick: () => u2((e3) => !e3), children: [(0, i.jsx)(o, { size: 15, strokeWidth: 1.75, "aria-hidden": "true" }), (0, i.jsxs)("span", { className: Z().toggleLabels, children: [(0, i.jsx)("span", { "data-active": h2 ? void 0 : "", "aria-hidden": h2 || void 0, children: "Go offline" }), (0, i.jsx)("span", { "data-active": h2 ? "" : void 0, "aria-hidden": !h2 || void 0, children: "Offline" })] })] })] }), (0, i.jsx)("div", { className: Z().thread, children: e2 ? (0, i.jsx)(Q, { participants: ei, currentUserId: ee.id, messages: t2, readBy: s2, typing: d2, onSend: ({ text: e3, files: t3 }) => {
      let i2 = `sent-${++g2.current}`, r2 = t3.map((e4, t4) => ({ id: `${i2}-${t4}`, name: e4.name, size: e4.size, kind: e4.type.startsWith("image/") ? "image" : "file", url: URL.createObjectURL(e4) }));
      a2((t4) => [...t4, { id: i2, authorId: ee.id, createdAt: /* @__PURE__ */ new Date(), text: e3 || void 0, attachments: r2, status: "sending" }]), j2(i2);
    }, onReact: (e3, t3) => a2((a3) => a3.map((a4) => {
      if (a4.id !== e3) return a4;
      let i2 = [...a4.reactions ?? []], r2 = i2.findIndex((e4) => e4.emoji === t3);
      return r2 < 0 ? i2.push({ emoji: t3, count: 1, mine: true }) : i2[r2] = { ...i2[r2], count: i2[r2].count + (i2[r2].mine ? -1 : 1), mine: !i2[r2].mine }, { ...a4, reactions: i2.filter((e4) => e4.count > 0) };
    })), onRetry: j2, placeholder: "Reply to Chloe", label: "Support conversation" }) : null })] }) });
  }
}

__m(__module,__exports,__require);
}