function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { SwipeActionsDemo: () => C, default: () => $ });
  var i = n(95155), r = n(5772), a = n(12115), s = n(80642), l = n(25354), o = n(18310), c = n(32159), u = n(59103), d = n(25879), p = n(92298), m = n(15330), f = n(57793), h = n(79196), y = n(28245), _ = n(92171), g = n(55809), x = n(59680), b = n(7770), v = n(34102), j = n.n(v);
  let w = (e2) => Math.min(1, Math.max(0, e2)), k = (e2) => e2 > 0 ? "leading" : e2 < 0 ? "trailing" : null, M = (0, a.createContext)({ openId: null, setOpenId: () => {
  }, rows: /* @__PURE__ */ new Map() });
  function N({ label: e2, children: t2, className: n2 }) {
    let [r2, l2] = (0, a.useState)(null), [o2] = (0, a.useState)(() => /* @__PURE__ */ new Map());
    (0, a.useEffect)(() => {
      if (!r2) return;
      let e3 = (e4) => {
        let t4 = o2.get(r2);
        t4 && e4.target instanceof Node && t4.contains(e4.target) || l2(null);
      }, t3 = (e4) => {
        "Escape" === e4.key && l2(null);
      };
      return document.addEventListener("pointerdown", e3, true), document.addEventListener("keydown", t3), () => {
        document.removeEventListener("pointerdown", e3, true), document.removeEventListener("keydown", t3);
      };
    }, [r2, o2]);
    let c2 = (0, a.useMemo)(() => ({ openId: r2, setOpenId: l2, rows: o2 }), [r2, o2]);
    return (0, i.jsx)(M.Provider, { value: c2, children: (0, i.jsx)("div", { className: [j().surface, n2].filter(Boolean).join(" "), children: (0, i.jsx)("ul", { role: "list", "aria-label": e2, tabIndex: -1, className: j().list, children: (0, i.jsx)(s.N, { initial: false, children: t2 }) }) }) });
  }
  function T({ label: e2, leading: t2 = [], trailing: n2 = [], fullSwipe: r2 = true, children: s2, className: c2 }) {
    let { openId: u2, setOpenId: d2, rows: p2 } = (0, a.useContext)(M), m2 = (0, a.useId)(), g2 = (0, o.I)() ?? false, v2 = (0, h.tF)(), w2 = (0, a.useRef)(null), N2 = (0, y.d)(0), P2 = (0, y.d)(0), [I2, S2] = (0, a.useState)(null), [E2, R2] = (0, a.useState)(false), z2 = (0, a.useRef)(0), O2 = (0, a.useRef)(null), C2 = (0, a.useRef)(null), $2 = (0, a.useRef)(null), Y = (0, a.useRef)(false), L = (0, a.useRef)(false), D = (0, a.useRef)(false), G = (0, a.useRef)(false), X = (0, a.useRef)(0), W = (e3) => "leading" === e3 ? t2 : n2, V = (e3) => 76 * W(e3).length, q = (e3) => "leading" === e3 ? 0 : n2.length - 1, H = (e3) => r2 && W(e3).length > 0, Q = (e3) => Math.max(V(e3) + 48, 0.56 * z2.current);
    function F(e3) {
      ($2.current?.stop(), g2) ? P2.jump(e3) : $2.current = (0, _.i)(P2, e3, b.T.spring.morph);
    }
    function U(e3, t3 = 0) {
      (Y.current || 0 !== e3 && 0 !== P2.get()) && F(0), Y.current = false;
      let n3 = N2.get(), i2 = () => {
        0 === e3 && ($2.current?.stop(), P2.jump(0));
      };
      if (g2) N2.jump(e3), i2();
      else {
        let r3 = 0 === e3 && Math.sign(t3) === -Math.sign(n3) ? Math.sign(t3) * Math.min(Math.abs(t3), 12 * Math.abs(n3)) : t3;
        C2.current = (0, _.i)(N2, e3, { ...0 === e3 ? b.T.spring.smooth : b.T.spring.snappy, velocity: r3, onComplete: i2 });
      }
      0 === e3 ? d2((e4) => e4 === m2 ? null : e4) : d2(m2);
    }
    function B(e3, t3, n3 = 0) {
      let i2 = W(e3)[t3];
      if (!i2 || L.current) return;
      let r3 = "leading" === e3 ? 1 : -1;
      if (Y.current = false, S2({ side: e3, index: t3 }), F(1), i2.keepRow) {
        i2.onSelect(), U(0, n3);
        return;
      }
      L.current = true;
      let a2 = w2.current;
      a2 && (a2.dataset.removing = ""), C2.current?.stop();
      let s3 = r3 * (z2.current + 2);
      g2 ? N2.jump(s3) : C2.current = (0, _.i)(N2, s3, { ...b.T.spring.smooth, velocity: Math.sign(n3) === r3 ? n3 : 0 }), d2((e4) => e4 === m2 ? null : e4), i2.onSelect(), window.clearTimeout(X.current), X.current = window.setTimeout(() => {
        L.current && (L.current = false, a2 && delete a2.dataset.removing, U(0));
      }, 1400);
    }
    function K(e3) {
      let t3 = O2.current;
      if (t3 && t3.pointer === e3.pointerId) {
        if (O2.current = null, "x" === t3.locked) {
          D.current = true, w2.current && delete w2.current.dataset.dragging, t3.samples.push([e3.timeStamp, e3.clientX]), (function(e4) {
            let t4 = N2.get(), n3 = k(t4);
            if (!n3 || 0 === W(n3).length) return U(0, e4);
            let i2 = "leading" === n3 ? 1 : -1, r3 = Math.abs(t4), a2 = e4 * i2, s3 = V(n3), l2 = r3 + 0.1 * a2, o2 = r3 > s3 && a2 > 900 && l2 > Q(n3);
            H(n3) && (Y.current && a2 > -900 || o2) ? B(n3, q(n3), e4) : U(l2 > s3 / 2 ? i2 * s3 : 0, e4);
          })("pointercancel" === e3.type ? 0 : (function(e4) {
            let t4 = e4[e4.length - 1];
            if (!t4) return 0;
            let n3 = e4.find((e5) => t4[0] - e5[0] <= 80) ?? t4, i2 = (t4[0] - n3[0]) / 1e3;
            return i2 > 0 ? (t4[1] - n3[1]) / i2 : 0;
          })(t3.samples));
          return;
        }
        null === t3.locked && Math.abs(N2.get()) > 0.5 && (D.current = true, U(0));
      }
    }
    (0, a.useEffect)(() => {
      let e3 = w2.current;
      if (!e3) return;
      p2.set(m2, e3), z2.current = e3.offsetWidth;
      let t3 = new ResizeObserver(([e4]) => {
        e4 && (z2.current = e4.contentRect.width);
      });
      return t3.observe(e3), () => {
        t3.disconnect(), p2.delete(m2), window.clearTimeout(X.current), d2((e4) => e4 === m2 ? null : e4);
      };
    }, [m2, p2, d2]);
    let Z = (0, a.useEffectEvent)(() => {
      u2 === m2 || L.current || O2.current?.locked === "x" || 0 === N2.get() || U(0);
    });
    (0, a.useEffect)(() => {
      Z();
    }, [u2]);
    let J = (0, a.useEffectEvent)(() => {
      L.current && (L.current = false, window.clearTimeout(X.current), w2.current && delete w2.current.dataset.removing, U(0));
    });
    (0, a.useEffect)(() => {
      v2 && J();
    }, [v2]);
    let ee = [...t2.map((e3, t3) => ({ action: e3, side: "leading", index: t3 })), ...n2.map((e3, t3) => ({ action: e3, side: "trailing", index: t3 }))], et = g2 ? { opacity: 0, transition: { duration: 0.15 } } : { height: 0, opacity: 0, transition: { height: { ...b.T.spring.smooth, delay: 0.12 }, opacity: { duration: b.T.duration.instant, delay: 0.34 } } };
    return (0, i.jsxs)(l.PY1.li, { ref: w2, className: [j().row, c2].filter(Boolean).join(" "), style: { "--swipe-action-width": "76px" }, initial: g2 ? { opacity: 0 } : { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: et, transition: g2 ? { duration: 0.15 } : { height: b.T.spring.smooth, opacity: { duration: b.T.duration.standard, ease: [...b.T.ease.enter] } }, children: [["leading", "trailing"].map((e3) => W(e3).map((t3, n3) => {
      let r3 = W(e3).length, a2 = "leading" === e3 ? r3 - 1 - n3 : n3, s3 = I2?.side === e3 ? "leading" === e3 ? r3 - 1 - I2.index : I2.index : null;
      return (0, i.jsx)(A, { action: t3, side: e3, rank: a2, count: r3, coverRank: s3, x: N2, cover: P2, onPress: () => B(e3, n3) }, `${e3}-${n3}`);
    })), (0, i.jsxs)(l.PY1.div, { className: j().content, style: { x: N2 }, onPointerDown: function(e3) {
      D.current = false, !L.current && e3.isPrimary && ("mouse" !== e3.pointerType || 0 === e3.button) && (C2.current?.stop(), O2.current = { pointer: e3.pointerId, type: e3.pointerType, startX: e3.clientX, startY: e3.clientY, origin: N2.get(), locked: null, samples: [[e3.timeStamp, e3.clientX]] });
    }, onPointerMove: function(e3) {
      let t3 = O2.current;
      if (!t3 || t3.pointer !== e3.pointerId || "y" === t3.locked) return;
      if (!t3.locked) {
        let n4 = e3.clientX - t3.startX, i2 = e3.clientY - t3.startY;
        if (8 > Math.hypot(n4, i2)) return;
        if (Math.abs(i2) > Math.abs(n4)) {
          t3.locked = "y";
          return;
        }
        t3.locked = "x", t3.startX = e3.clientX, e3.currentTarget.setPointerCapture(e3.pointerId), w2.current && (w2.current.dataset.dragging = ""), d2(m2);
      }
      let n3 = (function(e4) {
        let t4 = k(e4);
        if (!t4) return 0;
        let n4 = z2.current || 320, i2 = 0 === W(t4).length ? 0 : H(t4) ? n4 : V(t4), r3 = Math.abs(e4);
        return Math.sign(e4) * (r3 <= i2 ? r3 : i2 + (1 - 1 / (0.55 * (r3 - i2) / n4 + 1)) * n4);
      })(t3.origin + e3.clientX - t3.startX);
      N2.set(n3), t3.samples.push([e3.timeStamp, e3.clientX]), t3.samples.length > 12 && t3.samples.shift(), (function(e4, t4) {
        let n4 = k(e4), i2 = n4 ? Q(n4) : 1 / 0, r3 = !!n4 && H(n4) && Math.abs(e4) > (Y.current ? i2 - 20 : i2);
        if (r3 === Y.current || !n4) {
          !n4 && Y.current && (Y.current = false, F(0));
          return;
        }
        Y.current = r3, r3 && (S2({ side: n4, index: q(n4) }), "touch" === t4 && navigator.vibrate?.(8)), F(+!!r3);
      })(n3, t3.type);
    }, onPointerUp: K, onPointerCancel: K, onClickCapture: function(e3) {
      D.current && (D.current = false, e3.preventDefault(), e3.stopPropagation());
    }, children: [(0, i.jsx)("div", { className: j().body, children: s2 }), ee.length > 0 && (0, i.jsxs)(f.bL, { open: E2, onOpenChange: R2, children: [(0, i.jsx)(f.l9, { className: j().more, "data-swipe-more": "", "aria-label": `More actions for ${e2}`, onPointerDown: (e3) => e3.preventDefault(), onClick: (e3) => {
      e3.detail > 0 && R2((e4) => !e4);
    }, children: (0, i.jsx)(x.A, { size: 18, strokeWidth: 1.75, "aria-hidden": "true" }) }), (0, i.jsx)(f.ZL, { children: (0, i.jsx)(f.UC, { className: j().menu, align: "end", sideOffset: 6, collisionPadding: 12, loop: true, onCloseAutoFocus: (e3) => {
      G.current && (G.current = false, e3.preventDefault(), (function() {
        let e4 = w2.current;
        if (!e4) return;
        let t3 = (t4) => {
          let n4 = e4[t4];
          for (; n4 instanceof HTMLElement && "removing" in n4.dataset; ) n4 = n4[t4];
          return n4;
        }, n3 = t3("nextElementSibling") ?? t3("previousElementSibling");
        (n3?.querySelector("[data-swipe-more]") ?? e4.parentElement)?.focus({ preventScroll: true });
      })());
    }, children: ee.map(({ action: e3, side: t3, index: n3 }, r3) => (0, i.jsxs)(f.q7, { className: j().item, "data-tone": e3.tone, style: { "--i": r3 }, onSelect: () => {
      G.current = !e3.keepRow, B(t3, n3);
    }, children: [(0, i.jsx)("span", { className: j().itemIcon, "aria-hidden": "true", children: e3.icon }), e3.label] }, `${t3}-${n3}`)) }) })] })] })] });
  }
  function A({ action: e2, side: t2, rank: n2, count: r2, coverRank: a2, x: s2, cover: o2, onPress: c2 }) {
    let u2 = "leading" === t2 ? 1 : -1, d2 = (0, g.G)(s2, (e3) => Math.max(0, e3 * u2) / r2), p2 = (0, g.G)([s2, o2], ([e3 = 0, t3 = 0]) => {
      let i2 = Math.max(0, e3 * u2), s3 = (r2 - n2) * i2 / r2;
      return a2 === n2 ? s3 + t3 * (i2 - s3) : null !== a2 && n2 > a2 ? s3 * (1 - t3) : s3;
    }), m2 = (0, g.G)(p2, (e3) => u2 * e3), f2 = (0, g.G)([d2, o2], ([e3 = 0, t3 = 0]) => -u2 * (a2 === n2 ? e3 / 2 + t3 * (38 - e3 / 2) : e3 / 2)), h2 = (0, g.G)([d2, o2], ([e3 = 0, t3 = 0]) => {
      let i2 = w((e3 - 19) / 41.800000000000004);
      return a2 === n2 ? Math.max(i2, t3) : null === a2 ? i2 : i2 * (1 - t3);
    }), y2 = (0, g.G)([d2, o2], ([e3 = 0, t3 = 0]) => {
      let i2 = w((e3 - 54.72) / 18.24);
      return a2 === n2 ? Math.max(i2, t3) : null === a2 ? i2 : i2 * (1 - t3);
    }), _2 = (0, g.G)(h2, (e3) => 0.6 + 0.4 * e3);
    return (0, i.jsx)(l.PY1.button, { type: "button", tabIndex: -1, "aria-hidden": "true", className: j().layer, "data-side": t2, "data-tone": e2.tone ?? "neutral", style: { x: m2, zIndex: n2 + 1 }, onClick: c2, children: (0, i.jsx)(l.PY1.span, { className: j().anchor, style: { x: f2 }, children: (0, i.jsxs)("span", { className: j().glyph, children: [(0, i.jsx)(l.PY1.span, { className: j().icon, style: { opacity: h2, scale: _2 }, children: e2.icon }), (0, i.jsx)(l.PY1.span, { className: j().label, style: { opacity: y2 }, children: e2.label })] }) }) });
  }
  var P = n(19193), I = n.n(P);
  let S = [{ id: "atlas", sender: "Emma Collins", avatar: "media/people/emma-collins.svg", subject: "Atlas launch checklist", preview: "QA signed off. Two billing blockers left before Thursday.", time: "9:41" }, { id: "invoice", sender: "Marcus Johnson", avatar: "media/people/marcus-johnson.svg", subject: "Invoice INV-2048 from Northwind", preview: "$4,280.00 is due on October 3. The PDF is attached.", time: "8:15" }, { id: "readout", sender: "Ava Mitchell", avatar: "media/people/ava-mitchell.svg", subject: "Research readout moved to Friday", preview: "Room 4B, 2:00 to 3:30. Interview clips are in the deck.", time: "Yesterday" }, { id: "crit", sender: "Sofia Ramirez", avatar: "media/people/sofia-ramirez.svg", subject: "Design crit notes", preview: "Navigation feedback, with an owner for each follow-up.", time: "Mon" }], E = [...b.T.ease.enter], R = [...b.T.ease.standard];
  function z({ id: e2, text: t2, reduced: n2 }) {
    return (0, i.jsx)("span", { className: I().rise, "aria-hidden": "true", children: (0, i.jsx)(s.N, { mode: "popLayout", initial: false, children: (0, i.jsx)(l.PY1.span, { className: I().riseLine, initial: n2 ? { opacity: 0 } : { opacity: 0, y: "0.3em", filter: `blur(${b.T.blur.soft}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: n2 ? { opacity: 0, transition: { duration: 0.1 } } : { opacity: 0, y: "-0.3em", filter: `blur(${b.T.blur.subtle}px)`, transition: { duration: 0.15, ease: R } }, transition: { duration: n2 ? 0.15 : 0.22, ease: E }, children: t2 }, e2) }) });
  }
  function O({ value: e2, reduced: t2 }) {
    let [n2, r2] = (0, a.useState)({ value: e2, direction: 1 });
    n2.value !== e2 && r2({ value: e2, direction: e2 > n2.value ? 1 : -1 });
    let { direction: o2 } = n2;
    return (0, i.jsx)("span", { className: I().rolling, "aria-hidden": "true", children: (0, i.jsx)(s.N, { mode: "popLayout", initial: false, custom: o2, children: (0, i.jsx)(l.PY1.span, { className: I().rollingDigit, custom: o2, initial: t2 ? { opacity: 0 } : { opacity: 0, y: `${0.55 * o2}em`, filter: `blur(${b.T.blur.subtle}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: t2 ? { opacity: 0, transition: { duration: 0.1 } } : { opacity: 0, y: `${-0.55 * o2}em`, filter: `blur(${b.T.blur.subtle}px)`, transition: { duration: 0.15, ease: R } }, transition: { duration: t2 ? 0.15 : 0.24, ease: E }, children: e2 }, e2) }) });
  }
  function C() {
    let e2 = (0, o.I)() ?? false, [t2, n2] = (0, a.useState)(S), [f2, h2] = (0, a.useState)({ id: 0, text: "Swipe a message, or use its menu." }), [y2, _2] = (0, a.useState)(null), g2 = (0, a.useRef)(null);
    function x2(e3, i2) {
      let r2 = t2.findIndex((t3) => t3.id === e3.id);
      n2((t3) => t3.filter((t4) => t4.id !== e3.id)), h2((t3) => ({ id: t3.id + 1, text: i2, undo: { message: e3, index: r2 } })), _2(null);
    }
    return (0, a.useEffect)(() => {
      y2 && g2.current?.querySelector(`[data-swipe-more][aria-label="More actions for ${y2}"]`)?.focus();
    }, [y2, t2]), (0, i.jsxs)("div", { ref: g2, className: I().demo, children: [(0, i.jsxs)("div", { className: I().header, children: [(0, i.jsx)("h3", { className: I().title, children: "Inbox" }), (0, i.jsxs)("p", { className: I().count, children: [(0, i.jsx)(O, { value: t2.length, reduced: e2 }), (0, i.jsx)("span", { "aria-hidden": "true", children: "left to triage" }), (0, i.jsxs)("span", { className: I().srOnly, children: [t2.length, " left to triage"] })] })] }), (0, i.jsxs)("div", { className: I().stage, children: [(0, i.jsx)(N, { label: "Inbox", className: I().list, children: t2.map((e3) => (0, i.jsx)(T, { label: e3.subject, leading: [{ label: "Archive", icon: (0, i.jsx)(c.A, { strokeWidth: 1.75 }), tone: "accent", onSelect: () => x2(e3, `Archived \u201C${e3.subject}\u201D`) }], trailing: [{ label: "Snooze", icon: (0, i.jsx)(u.A, { strokeWidth: 1.75 }), onSelect: () => x2(e3, `Snoozed \u201C${e3.subject}\u201D until tomorrow, 9:00`) }, { label: "Delete", icon: (0, i.jsx)(d.A, { strokeWidth: 1.75 }), tone: "danger", onSelect: () => x2(e3, `Deleted \u201C${e3.subject}\u201D`) }], children: (0, i.jsxs)("div", { className: I().message, children: [(0, i.jsx)(r.default, { className: I().avatar, src: e3.avatar, alt: "", width: 40, height: 40, draggable: false }), (0, i.jsxs)("div", { className: I().copy, children: [(0, i.jsxs)("span", { className: I().topline, children: [(0, i.jsx)("span", { className: I().sender, children: e3.sender }), (0, i.jsx)("span", { className: I().time, children: e3.time })] }), (0, i.jsx)("span", { className: I().subject, children: e3.subject }), (0, i.jsx)("span", { className: I().preview, children: e3.preview })] })] }) }, e3.id)) }), (0, i.jsx)(s.N, { children: 0 === t2.length && (0, i.jsxs)(l.PY1.div, { className: I().empty, initial: e2 ? { opacity: 0 } : { opacity: 0, y: 8, filter: `blur(${b.T.blur.soft}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: { opacity: 0, transition: { duration: b.T.duration.instant } }, transition: e2 ? { duration: 0.15 } : { duration: b.T.duration.considered, ease: E, delay: 0.5 }, children: [(0, i.jsx)("p", { className: I().emptyTitle, children: "Inbox zero" }), (0, i.jsx)("p", { className: I().emptyText, children: "Every message is archived, snoozed, or deleted." }), (0, i.jsxs)("button", { type: "button", className: I().button, onClick: function() {
      n2(S), h2((e3) => ({ id: e3.id + 1, text: `Restored ${S.length} messages` })), _2(S[0].subject);
    }, children: [(0, i.jsx)(p.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Restore messages"] })] }, "empty") })] }), (0, i.jsxs)("div", { className: I().footer, children: [(0, i.jsx)(z, { id: f2.id, text: f2.text, reduced: e2 }), (0, i.jsx)(s.N, { mode: "popLayout", initial: false, children: f2.undo && (0, i.jsxs)(l.PY1.button, { type: "button", className: I().button, onClick: function() {
      let e3 = f2.undo;
      e3 && (n2((t3) => t3.some((t4) => t4.id === e3.message.id) ? t3 : [...t3.slice(0, e3.index), e3.message, ...t3.slice(e3.index)]), h2((t3) => ({ id: t3.id + 1, text: `Restored \u201C${e3.message.subject}\u201D` })), _2(e3.message.subject));
    }, initial: e2 ? { opacity: 0 } : { opacity: 0, scale: 0.9, filter: `blur(${b.T.blur.subtle}px)` }, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, exit: { opacity: 0, scale: e2 ? 1 : 0.94, transition: { duration: b.T.duration.instant, ease: R } }, transition: e2 ? { duration: 0.15 } : { ...b.T.spring.snappy, opacity: { duration: b.T.duration.fast, ease: E }, filter: { duration: b.T.duration.fast, ease: E } }, children: [(0, i.jsx)(m.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Undo"] }, `undo-${f2.id}`) }), (0, i.jsx)("span", { className: I().srOnly, role: "status", children: 0 === f2.id ? "" : f2.text })] })] });
  }
  let $ = C;
}

__m(__module,__exports,__require);
}