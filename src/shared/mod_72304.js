function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { ShortcutRecorderDemo: () => F, default: () => O });
  var a = r(95155), l = r(12115), s = r(18310), o = r(80642), i = r(25354), n = r(66558), c = r(92298), d = r(9005), u = r(65377), h = r(7770), p = r(82442), m = r.n(p);
  let b = ["mod", "ctrl", "alt", "shift", "meta"], f = (e2) => b.includes(e2), y = { Comma: ",", Period: ".", Slash: "/", Semicolon: ";", Quote: "'", BracketLeft: "[", BracketRight: "]", Backslash: "\\", Minus: "-", Equal: "=", Backquote: "`", Space: "space", Enter: "enter", NumpadEnter: "enter", Escape: "escape", Backspace: "backspace", Delete: "delete", Tab: "tab", ArrowUp: "up", ArrowDown: "down", ArrowLeft: "left", ArrowRight: "right", Home: "home", End: "end", PageUp: "pageup", PageDown: "pagedown" }, g = { Meta: "meta", OS: "meta", Control: "ctrl", Alt: "alt", AltGraph: "alt", Shift: "shift" };
  function _(e2) {
    let { code: t2, key: r2 } = e2;
    return g[r2] ? g[r2] : /^Key[A-Z]$/.test(t2) ? t2.slice(3).toLowerCase() : /^Digit\d$/.test(t2) ? t2.slice(5) : /^Numpad\d$/.test(t2) ? t2.slice(6) : y[t2] ? y[t2] : /^F\d{1,2}$/.test(r2) ? r2.toLowerCase() : "CapsLock" === r2 || "Fn" === r2 || "Dead" === r2 || "Unidentified" === r2 || "Process" === r2 ? null : 1 === r2.length ? r2.toLowerCase() : null;
  }
  function v(e2) {
    let t2 = e2.toLowerCase().split("+").map((e3) => e3.trim()).filter(Boolean), r2 = t2.filter((e3) => !f(e3)).pop() ?? "";
    return { mods: new Set(t2.filter(f)), key: r2 };
  }
  function x(e2, t2) {
    let { mods: r2, key: a2 } = v(e2);
    return "mac" === t2 && r2.delete("meta") && r2.add("mod"), "other" === t2 && r2.delete("ctrl") && r2.add("mod"), [...b.filter((e3) => r2.has(e3)), a2].filter(Boolean).join("+");
  }
  function k(e2, t2) {
    let r2 = _(e2);
    if (!r2 || ["meta", "ctrl", "alt", "shift"].includes(r2)) return null;
    let a2 = [];
    return ("mac" === t2 ? e2.metaKey : e2.ctrlKey) && a2.push("mod"), "mac" === t2 && e2.ctrlKey && a2.push("ctrl"), e2.altKey && a2.push("alt"), e2.shiftKey && a2.push("shift"), "other" === t2 && e2.metaKey && a2.push("meta"), x([...a2, r2].join("+"), t2);
  }
  let j = { enter: ["\u21A9", "Return"], backspace: ["\u232B", "Delete"], delete: ["\u2326", "Forward delete"], tab: ["\u21E5", "Tab"], escape: ["esc", "Escape"] }, w = { space: ["Space", "Space"], enter: ["Enter", "Enter"], escape: ["Esc", "Escape"], backspace: ["Backspace", "Backspace"], delete: ["Del", "Delete"], tab: ["Tab", "Tab"], up: ["\u2191", "Up arrow"], down: ["\u2193", "Down arrow"], left: ["\u2190", "Left arrow"], right: ["\u2192", "Right arrow"], home: ["Home", "Home"], end: ["End", "End"], pageup: ["PgUp", "Page up"], pagedown: ["PgDn", "Page down"], ",": [",", "Comma"], ".": [".", "Period"], "/": ["/", "Slash"], ";": [";", "Semicolon"], "'": ["'", "Quote"], "[": ["[", "Left bracket"], "]": ["]", "Right bracket"], "\\": ["\\", "Backslash"], "-": ["-", "Minus"], "=": ["=", "Equals"], "`": ["`", "Backtick"] };
  function N(e2, t2) {
    let { mods: r2, key: a2 } = v(x(e2, t2)), l2 = [];
    if ("mac" === t2 ? (r2.has("ctrl") && l2.push({ label: "\u2303", id: "ctrl", spoken: "Control" }), r2.has("alt") && l2.push({ label: "\u2325", id: "alt", spoken: "Option" }), r2.has("shift") && l2.push({ label: "\u21E7", id: "shift", spoken: "Shift" }), (r2.has("mod") || r2.has("meta")) && l2.push({ label: "\u2318", id: "meta", spoken: "Command" })) : ((r2.has("mod") || r2.has("ctrl")) && l2.push({ label: "Ctrl", id: "ctrl", spoken: "Control" }), r2.has("alt") && l2.push({ label: "Alt", id: "alt", spoken: "Alt" }), r2.has("shift") && l2.push({ label: "Shift", id: "shift", spoken: "Shift" }), r2.has("meta") && l2.push({ label: "Win", id: "meta", spoken: "Windows" })), a2) {
      let e3 = ("mac" === t2 ? j[a2] : void 0) ?? w[a2];
      l2.push(e3 ? { label: e3[0], id: a2, spoken: e3[1] } : { label: a2.toUpperCase(), id: a2, spoken: a2.toUpperCase() });
    }
    return l2;
  }
  function S(e2, t2) {
    let r2 = N(e2, t2);
    return { text: r2.map((e3) => e3.label).join("mac" === t2 ? "" : "+"), spoken: r2.map((e3) => e3.spoken).join(" ") };
  }
  let E = () => () => {
  };
  function C() {
    let e2 = (0, l.useSyncExternalStore)(E, () => true, () => false);
    return !!(0, s.I)() && e2;
  }
  let L = () => {
    if ("u" < typeof navigator) return "mac";
    let e2 = navigator.userAgentData?.platform ?? navigator.platform ?? navigator.userAgent;
    return /mac|iphone|ipad|ipod/i.test(e2) ? "mac" : "other";
  };
  function R(e2) {
    let t2 = (0, l.useSyncExternalStore)(E, L, () => "mac");
    return e2 ?? t2;
  }
  let T = /* @__PURE__ */ new Set(), $ = (0, l.forwardRef)(function({ children: e2, pressed: t2 = false, size: r2 = "md", className: l2, ...s2 }, o2) {
    return (0, a.jsx)("kbd", { ref: o2, ...s2, className: [m().kbd, l2].filter(Boolean).join(" "), "data-size": r2, "data-pressed": t2 || void 0, children: e2 });
  });
  function A({ shortcut: e2, platform: t2, pressed: r2, size: l2 = "md", className: s2 }) {
    let o2 = N(e2, R(t2));
    return (0, a.jsx)("span", { className: [m().keys, s2].filter(Boolean).join(" "), role: "img", "aria-label": o2.map((e3) => e3.spoken).join(" "), children: o2.map((e3, t3) => (0, a.jsx)($, { size: l2, pressed: r2?.has(e3.id), "aria-hidden": "true", children: e3.label }, `${t3}-${e3.id}`)) });
  }
  $.displayName = "ShortcutKbd";
  let K = [{ shortcut: "mod+w", label: "Close tab" }, { shortcut: "mod+t", label: "New tab" }, { shortcut: "mod+n", label: "New window" }, { shortcut: "mod+q", label: "Quit" }, { shortcut: "mod+l", label: "Address bar" }, { shortcut: "mod+r", label: "Reload" }, { shortcut: "mod+shift+t", label: "Reopen tab" }, { shortcut: "mod+c", label: "Copy" }, { shortcut: "mod+v", label: "Paste" }, { shortcut: "mod+x", label: "Cut" }, { shortcut: "mod+z", label: "Undo" }, { shortcut: "mod+a", label: "Select all" }], P = { enter: { opacity: 0, scale: 0.72, y: 4, filter: `blur(${h.T.blur.subtle}px)` }, rest: (e2) => ({ opacity: 1, scale: 1, y: 0, filter: "blur(0px)", transition: { ...h.T.spring.snappy, delay: e2 * h.T.stagger.item, opacity: { duration: 0.14, delay: e2 * h.T.stagger.item }, filter: { duration: 0.16, delay: e2 * h.T.stagger.item } } }), exit: { opacity: 0, scale: 0.8, filter: `blur(${h.T.blur.subtle}px)`, transition: { duration: 0.1 } } }, D = { enter: { opacity: 0 }, rest: { opacity: 1, scale: 1, y: 0, filter: "none", transition: { duration: 0.1 } }, exit: { opacity: 0, transition: { duration: 0.06 } } };
  function z({ label: e2, hideLabel: t2 = false, value: r2, defaultValue: s2 = null, onValueChange: n2, resetValue: u2, bindings: p2 = [], warnReserved: b2 = true, requireModifier: f2 = true, platform: y2, placeholder: g2 = "Record shortcut", description: _2, disabled: j2 = false, id: w2, className: E2 }) {
    let L2 = C(), T2 = R(y2), A2 = (0, l.useId)(), B2 = w2 ?? `${A2}-button`, W2 = `${A2}-label`, I2 = `${A2}-message`, [M2, Y2] = (0, l.useState)(s2), F2 = void 0 !== r2 ? r2 : M2, O2 = void 0 !== u2 ? u2 : s2, [U, q] = (0, l.useState)(false), [G, V] = (0, l.useState)([]), [Z, H] = (0, l.useState)(null), [Q, X] = (0, l.useState)(null), [J, ee] = (0, l.useState)(0), [et, er] = (0, l.useState)(""), ea = (0, l.useRef)(null), [el, es] = (0, l.useState)(null), eo = (0, l.useCallback)((e3) => {
      if (!e3) return;
      let t3 = new ResizeObserver(() => es(e3.getBoundingClientRect().height));
      return t3.observe(e3), () => {
        t3.disconnect(), es(null);
      };
    }, []), ei = (0, l.useCallback)((e3, t3) => {
      H(null), X(null), void 0 === r2 && Y2(e3), n2?.(e3, { replaced: t3 }), ee((e4) => e4 + 1), er(e3 ? `Shortcut set to ${S(e3, T2).spoken}` : "Shortcut cleared");
    }, [n2, T2, r2]), en = () => {
      q(false), V([]);
    }, ec = (e3) => {
      let t3 = [];
      return e3.ctrlKey && "mac" === T2 && t3.push("ctrl"), e3.altKey && t3.push("alt"), e3.shiftKey && t3.push("shift"), ("mac" === T2 ? e3.metaKey : e3.ctrlKey) && t3.push("mod"), "other" === T2 && e3.metaKey && t3.push("meta"), t3;
    }, ed = Z?.shortcut ?? F2, eu = U ? N(G.join("+"), T2) : ed ? N(ed, T2) : [], eh = U ? "recording" : Z ? "conflict" : "idle", ep = !U && (null !== Z || (F2 ?? null) !== (O2 ?? null)), em = !U && !!F2 && !Z, eb = Z ? { tone: "warning", key: `c-${Z.shortcut}`, body: (0, a.jsxs)(a.Fragment, { children: [Z.reserved ? "Reserved for" : "Already used by", " ", (0, a.jsx)("strong", { className: m().strong, children: Z.conflict.label })] }) } : Q ? { tone: "hint", key: `n-${Q}`, body: (0, a.jsx)(a.Fragment, { children: Q }) } : U ? { tone: "hint", key: "rec", body: (0, a.jsx)(a.Fragment, { children: "Esc to cancel, Backspace to clear" }) } : _2 ? { tone: "hint", key: "d", body: (0, a.jsx)(a.Fragment, { children: _2 }) } : null;
    return (0, l.useEffect)(() => {
      if (!J) return;
      let e3 = window.setTimeout(() => ee(0), 700);
      return () => window.clearTimeout(e3);
    }, [J]), (0, a.jsxs)("div", { className: [m().field, E2].filter(Boolean).join(" "), "data-disabled": j2 || void 0, children: [(0, a.jsx)("span", { id: W2, className: t2 ? m().srOnly : m().label, children: e2 }), (0, a.jsxs)("div", { className: m().control, "data-state": eh, children: [(0, a.jsxs)("button", { ref: ea, id: B2, type: "button", className: m().recorder, disabled: j2, "aria-labelledby": `${W2} ${B2}`, "aria-describedby": eb ? I2 : void 0, "aria-pressed": U, onClick: (e3) => {
      if (U) {
        0 !== e3.detail && (en(), er("Recording canceled"));
        return;
      }
      j2 || (H(null), X(null), V([]), q(true), er("Recording. Press the new shortcut, or Escape to cancel."));
    }, onKeyDown: function(e3) {
      if (!U) {
        ("Backspace" === e3.key || "Delete" === e3.key) && F2 && (e3.preventDefault(), ei(null));
        return;
      }
      if ("Tab" === e3.key && !e3.shiftKey && !e3.metaKey && !e3.ctrlKey && !e3.altKey) return void en();
      e3.preventDefault(), e3.stopPropagation();
      let t3 = !e3.metaKey && !e3.ctrlKey && !e3.altKey && !e3.shiftKey;
      if (t3 && "Escape" === e3.key) {
        en(), er("Recording canceled");
        return;
      }
      if (t3 && ("Backspace" === e3.key || "Delete" === e3.key)) {
        en(), ei(null);
        return;
      }
      let r3 = k(e3.nativeEvent, T2);
      if (!r3) return void V(ec(e3));
      let { mods: a2, key: l2 } = v(r3), s3 = a2.has("mod") || a2.has("ctrl") || a2.has("alt") || a2.has("meta");
      if (f2 && !s3 && !/^f\d+$/.test(l2)) {
        let t4 = "mac" === T2 ? "Include \u2318, \u2303, or \u2325" : "Include Ctrl or Alt";
        X(t4), er(t4), V(ec(e3));
        return;
      }
      en();
      let o2 = ((e4) => {
        let t4 = x(e4, T2);
        if (F2 && x(F2, T2) === t4) return null;
        let r4 = p2.find((e5) => x(e5.shortcut, T2) === t4);
        if (r4) return { shortcut: e4, conflict: r4, reserved: false };
        let a3 = b2 ? K.find((e5) => x(e5.shortcut, T2) === t4) : void 0;
        return a3 ? { shortcut: e4, conflict: a3, reserved: true } : null;
      })(r3);
      if (o2) {
        H(o2), er(`${S(r3, T2).spoken} is ${o2.reserved ? "reserved for" : "used by"} ${o2.conflict.label}. Use anyway, or record another.`);
        return;
      }
      ei(r3);
    }, onKeyUp: function(e3) {
      U && V(ec(e3));
    }, onBlur: () => {
      U && (en(), X(null));
    }, children: [(0, a.jsx)("span", { className: m().srOnly, children: U ? "Recording" : ed ? ed ? S(ed, T2).spoken : "none" : g2 }), (0, a.jsxs)("span", { className: m().row, "aria-hidden": "true", children: [U && (0, a.jsx)("span", { className: m().dot, "data-reduced": L2 || void 0 }), (0, a.jsxs)(o.N, { initial: false, mode: "popLayout", children: [eu.map((e3, t3) => (0, a.jsx)(i.PY1.span, { layout: !L2 && "position", custom: U ? 0 : t3, variants: L2 ? D : P, initial: "enter", animate: "rest", exit: "exit", transition: L2 ? { duration: 0 } : { layout: h.T.spring.snappy }, className: m().chipSlot, children: (0, a.jsx)($, { pressed: U || J > 0 && !Z, "data-tone": Z ? "warning" : void 0, children: e3.label }) }, `${e3.id}`)), 0 === eu.length && (0, a.jsx)(i.PY1.span, { className: m().placeholder, "data-recording": U || void 0, initial: L2 ? { opacity: 0 } : { opacity: 0, y: 4, filter: `blur(${h.T.blur.subtle}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: { opacity: 0, transition: { duration: 0.08 } }, transition: L2 ? { duration: 0.1 } : { duration: h.T.duration.fast, ease: [...h.T.ease.enter] }, children: U ? "Press keys" : g2 }, U ? "prompt" : "placeholder")] })] })] }), (0, a.jsx)("span", { className: m().actions, children: (0, a.jsxs)(o.N, { initial: false, children: [ep && (0, a.jsx)(i.PY1.button, { type: "button", className: m().action, "aria-label": `Reset to ${O2 ? S(O2, T2).spoken : "none"}`, onClick: () => {
      ei(O2 ?? null), ea.current?.focus();
    }, initial: { opacity: 0, scale: 0.6 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.6, transition: { duration: 0.1 } }, transition: L2 ? { duration: 0 } : h.T.spring.snappy, children: (0, a.jsx)(c.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }) }, "reset"), em && (0, a.jsx)(i.PY1.button, { type: "button", className: m().action, "aria-label": "Clear shortcut", onClick: () => {
      ei(null), ea.current?.focus();
    }, initial: { opacity: 0, scale: 0.6 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.6, transition: { duration: 0.1 } }, transition: L2 ? { duration: 0 } : h.T.spring.snappy, children: (0, a.jsx)(d.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }) }, "clear")] }) })] }), (0, a.jsx)(o.N, { initial: false, children: eb && (0, a.jsx)(i.PY1.div, { className: m().messageSlot, initial: !L2 && { height: 0, opacity: 0 }, animate: { height: el ?? "auto", opacity: 1 }, exit: { height: 0, opacity: 0, transition: L2 ? { duration: 0 } : { height: h.T.spring.smooth, opacity: { duration: 0.1 } } }, transition: L2 ? { duration: 0 } : { height: h.T.spring.smooth, opacity: { duration: h.T.duration.fast } }, children: (0, a.jsx)("div", { ref: eo, children: (0, a.jsx)(o.N, { initial: false, mode: "popLayout", children: (0, a.jsxs)(i.PY1.div, { id: I2, className: m().message, "data-tone": eb.tone, initial: L2 ? { opacity: 0 } : { opacity: 0, y: "0.35em", filter: `blur(${h.T.blur.soft}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: { opacity: 0, transition: { duration: 0.08 } }, transition: { duration: L2 ? 0.1 : h.T.duration.standard, ease: [...h.T.ease.enter] }, children: [(0, a.jsx)("span", { className: m().messageText, children: eb.body }), Z && (0, a.jsxs)("span", { className: m().messageActions, children: [(0, a.jsx)("button", { type: "button", className: m().link, onClick: () => {
      ei(Z.shortcut, Z.reserved ? void 0 : Z.conflict), ea.current?.focus();
    }, children: "Use anyway" }), (0, a.jsx)("button", { type: "button", className: m().link, "data-quiet": "", onClick: () => {
      H(null), er("Kept the previous shortcut"), ea.current?.focus();
    }, children: "Cancel" })] })] }, eb.key) }) }) }, "slot") }), (0, a.jsx)("span", { className: m().srOnly, role: "status", "aria-live": "polite", children: et })] });
  }
  function B({ groups: e2, label: t2 = "Keyboard shortcuts", searchable: r2 = true, searchPlaceholder: s2 = "Search shortcuts", highlightPressed: n2 = true, platform: c2, className: p2 }) {
    let b2 = C(), f2 = R(c2), y2 = (function(e3 = true) {
      let [t3, r3] = (0, l.useState)(() => /* @__PURE__ */ new Set());
      return (0, l.useEffect)(() => {
        if (!e3) return;
        let t4 = (e4) => r3((t5) => {
          let r4 = new Set(t5);
          return e4(r4), r4.size === t5.size && [...r4].every((e5) => t5.has(e5)) ? t5 : r4;
        }), a2 = (e4) => {
          let r4 = _(e4);
          r4 && t4((e5) => e5.add(r4));
        }, l2 = (e4) => {
          let r4 = _(e4);
          t4((t5) => {
            r4 && t5.delete(r4), "meta" === r4 && [...t5].forEach((e5) => {
              ["ctrl", "alt", "shift"].includes(e5) || t5.delete(e5);
            }), e4.metaKey || t5.delete("meta"), e4.ctrlKey || t5.delete("ctrl"), e4.altKey || t5.delete("alt"), e4.shiftKey || t5.delete("shift");
          });
        }, s3 = () => r3((e4) => e4.size ? /* @__PURE__ */ new Set() : e4);
        return window.addEventListener("keydown", a2, true), window.addEventListener("keyup", l2, true), window.addEventListener("blur", s3), document.addEventListener("visibilitychange", s3), () => {
          window.removeEventListener("keydown", a2, true), window.removeEventListener("keyup", l2, true), window.removeEventListener("blur", s3), document.removeEventListener("visibilitychange", s3);
        };
      }, [e3]), e3 ? t3 : T;
    })(n2), [g2, v2] = (0, l.useState)(""), x2 = (0, l.useRef)(null), k2 = (0, l.useMemo)(() => [...y2].filter((e3) => ["meta", "ctrl", "alt", "shift"].includes(e3)), [y2]), j2 = g2.trim().toLowerCase().replace(/[⌘]/g, " cmd ").replace(/[⇧]/g, " shift ").replace(/[⌥]/g, " alt ").replace(/[⌃]/g, " ctrl ").split(/[\s+]+/).filter(Boolean), w2 = { cmd: "command", command: "command", ctrl: "control", control: "control", opt: "option", option: "mac" === f2 ? "option" : "alt", alt: "mac" === f2 ? "option" : "alt", win: "windows", esc: "escape", return: "mac" === f2 ? "return" : "enter" }, S2 = e2.map((e3) => ({ ...e3, items: e3.items.filter((t3) => {
      if (!j2.length) return true;
      let r3 = N(t3.shortcut, f2), a2 = `${t3.label} ${e3.label} ${t3.keywords ?? ""} ${r3.map((e4) => `${e4.spoken} ${e4.label}`).join(" ")}`.toLowerCase();
      return j2.every((e4) => a2.includes(w2[e4] ?? e4) || a2.includes(e4));
    }) })).filter((e3) => e3.items.length), E2 = S2.reduce((e3, t3) => e3 + t3.items.length, 0), L2 = b2 ? { duration: 0 } : h.T.spring.smooth;
    return (0, a.jsxs)("section", { className: [m().list, p2].filter(Boolean).join(" "), "aria-label": t2, children: [r2 && (0, a.jsxs)("div", { className: m().searchRow, children: [(0, a.jsx)(u.A, { className: m().searchIcon, size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), (0, a.jsx)("input", { ref: x2, className: m().search, type: "search", placeholder: s2, value: g2, "aria-label": s2, onChange: (e3) => v2(e3.target.value), onKeyDown: (e3) => {
      "Escape" === e3.key && g2 && (e3.preventDefault(), v2(""));
    }, autoComplete: "off", spellCheck: false }), (0, a.jsx)("span", { className: m().count, "aria-live": "polite", children: g2 ? `${E2} ${1 === E2 ? "match" : "matches"}` : "" }), (0, a.jsx)(o.N, { initial: false, children: g2 && (0, a.jsx)(i.PY1.button, { type: "button", className: m().clear, "aria-label": "Clear search", onClick: () => {
      v2(""), x2.current?.focus();
    }, initial: { opacity: 0, scale: 0.6 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.6, transition: { duration: 0.1 } }, transition: b2 ? { duration: 0 } : h.T.spring.snappy, children: (0, a.jsx)(d.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }) }, "clear") })] }), (0, a.jsxs)("div", { className: m().groups, children: [(0, a.jsx)(o.N, { initial: false, children: S2.map((e3) => (0, a.jsxs)(i.PY1.section, { className: m().group, "aria-label": e3.label, initial: b2 ? { opacity: 0 } : { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: b2 ? { opacity: 0 } : { opacity: 0, height: 0 }, transition: L2, children: [(0, a.jsx)("h4", { className: m().groupLabel, children: e3.label }), (0, a.jsx)("ul", { className: m().rows, children: (0, a.jsx)(o.N, { initial: false, children: e3.items.map((e4) => {
      let t3 = N(e4.shortcut, f2).map((e5) => e5.id), r3 = y2.size > 0 && t3.every((e5) => y2.has(e5)), l2 = k2.length > 0 && !r3 && !k2.every((e5) => t3.includes(e5));
      return (0, a.jsx)(i.PY1.li, { className: m().item, "data-match": r3 || void 0, "data-dim": l2 || void 0, initial: b2 ? { opacity: 0 } : { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: b2 ? { opacity: 0 } : { opacity: 0, height: 0 }, transition: L2, children: (0, a.jsxs)("span", { className: m().itemInner, children: [(0, a.jsx)("span", { className: m().itemLabel, children: e4.label }), (0, a.jsx)(A, { shortcut: e4.shortcut, platform: f2, pressed: y2, size: "sm" })] }) }, e4.label);
    }) }) })] }, e3.label)) }), 0 === E2 && (0, a.jsxs)("p", { className: m().empty, children: ["No shortcuts match \u201C", g2.trim(), "\u201D"] })] })] });
  }
  var W = r(56364), I = r.n(W);
  let M = [{ id: "command", label: "Open command menu", group: "Workspace", shortcut: "mod+k", initial: "mod+k", editable: true }, { id: "issue", label: "Create issue", group: "Workspace", shortcut: "alt+n", initial: "alt+n", editable: true }, { id: "sidebar", label: "Toggle sidebar", group: "Workspace", shortcut: "mod+.", initial: "mod+.", editable: true }, { id: "inbox", label: "Go to inbox", group: "Navigation", shortcut: "alt+1", initial: "alt+1", editable: false }, { id: "projects", label: "Go to projects", group: "Navigation", shortcut: "alt+2", initial: "alt+2", editable: false }, { id: "search", label: "Search everything", group: "Navigation", shortcut: "mod+shift+f", initial: "mod+shift+f", editable: false }, { id: "bold", label: "Bold", group: "Editing", shortcut: "mod+b", initial: "mod+b", editable: false }, { id: "link", label: "Insert link", group: "Editing", shortcut: "mod+shift+l", initial: "mod+shift+l", editable: false }, { id: "save", label: "Save draft", group: "Editing", shortcut: "mod+s", initial: "mod+s", editable: false }], Y = [{ value: "mac", label: "Mac" }, { value: "other", label: "Windows" }];
  function F() {
    let e2 = (0, s.I)(), t2 = R(), [r2, c2] = (0, l.useState)(null), d2 = r2 ?? t2, [u2, p2] = (0, l.useState)(M), [m2, b2] = (0, l.useState)(null), f2 = u2.find((e3) => "command" === e3.id), y2 = ["Workspace", "Navigation", "Editing"].map((e3) => ({ label: e3, items: u2.filter((t3) => t3.group === e3 && t3.shortcut).map((e4) => ({ label: e4.label, shortcut: e4.shortcut })) }));
    return (0, a.jsx)("div", { className: I().demo, tabIndex: -1, onKeyDown: (e3) => {
      if (e3.defaultPrevented) return;
      let t3 = u2.find((t4) => {
        var r3, a2;
        let l2;
        return t4.shortcut && (r3 = e3.nativeEvent, a2 = t4.shortcut, !!(l2 = k(r3, d2)) && l2 === x(a2, d2));
      });
      t3 && (e3.preventDefault(), b2((e4) => ({ id: (e4?.id ?? 0) + 1, text: `${t3.label} (${S(t3.shortcut, d2).text})` })));
    }, children: (0, a.jsxs)("div", { className: I().panel, children: [(0, a.jsxs)("section", { className: I().settings, "aria-label": "Workspace shortcuts", children: [(0, a.jsxs)("header", { className: I().header, children: [(0, a.jsx)("h3", { className: I().title, children: "Shortcuts" }), (0, a.jsx)(n.A, { label: "Key style", options: Y, value: d2, onValueChange: (e3) => c2("other" === e3 ? "other" : "mac") })] }), u2.filter((e3) => e3.editable).map((e3) => (0, a.jsx)(z, { label: e3.label, value: e3.shortcut, resetValue: e3.initial, platform: d2, bindings: u2.filter((t3) => t3.id !== e3.id && t3.shortcut).map((e4) => ({ shortcut: e4.shortcut, label: e4.label })), onValueChange: (t3, { replaced: r3 }) => {
      let a2;
      return a2 = e3.id, p2((e4) => e4.map((e5) => e5.id === a2 ? { ...e5, shortcut: t3 } : r3 && e5.label === r3.label ? { ...e5, shortcut: null } : e5));
    } }, e3.id)), (0, a.jsx)("p", { className: I().ran, "aria-live": "polite", children: (0, a.jsx)(o.N, { initial: false, mode: "popLayout", children: (0, a.jsx)(i.PY1.span, { className: I().ranText, "data-idle": !m2 || void 0, initial: e2 ? { opacity: 0 } : { opacity: 0, y: 6, filter: `blur(${h.T.blur.subtle}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: { opacity: 0, transition: { duration: 0.08 } }, transition: e2 ? { duration: 0.12 } : h.T.spring.snappy, children: m2 ? (0, a.jsxs)(a.Fragment, { children: ["Ran ", m2.text] }) : f2?.shortcut ? (0, a.jsxs)(a.Fragment, { children: ["Press ", (0, a.jsx)(A, { shortcut: f2.shortcut, platform: d2, size: "sm" }), " here to open the command menu"] }) : (0, a.jsx)(a.Fragment, { children: "Record a shortcut, then press it here" }) }, m2?.id ?? 0) }) })] }), (0, a.jsx)("div", { className: I().sheet, children: (0, a.jsx)(B, { groups: y2, platform: d2 }) })] }) });
  }
  let O = F;
}

__m(__module,__exports,__require);
}