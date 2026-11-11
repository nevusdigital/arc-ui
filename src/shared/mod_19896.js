function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { CardStackDemo: () => G, default: () => E });
  var i = r(95155), a = r(12115), s = r(9803), n = r(47603), o = r(16294), c = r(92298), l = r(28245), d = r(55809), h = r(22535), u = r(92171), p = r(25354), y = r(18310), m = r(80642), f = r(64577), g = r(9005), x = r(7770), v = r(50402), k = r.n(v);
  let _ = () => () => {
  }, j = { type: "spring", visualDuration: 0.5, bounce: 0 }, b = { duration: 0.22, delay: 0.12, ease: [...x.T.ease.standard] }, T = { duration: 0.15, ease: "linear" };
  function w({ id: e2, depth: t2, decision: r2, returnFrom: s2, interactive: n2, zIndex: o2, label: c2, labels: y2, lift: m2, reduced: v2, fling: _2, onRelease: M2, onThrown: N2, onGone: A2, children: S2 }) {
    let C2 = (0, a.useRef)(null), z2 = s2 && !v2 ? s2 : void 0, P2 = (0, l.d)(z2?.x ?? 0), G2 = (0, l.d)(z2?.y ?? 0), E2 = (0, l.d)(z2?.tilt ?? 1), O = (0, l.d)(+!s2), I = (0, d.G)([P2, E2], ([e3 = 0, t3 = 0]) => 0.065 * e3 * t3), R = (0, d.G)(m2, (e3) => t2 - (t2 > 0 ? 0.4 * e3 : 0)), W = (0, h.z)(R, x.T.spring.smooth), Y = v2 ? R : W, B = (0, d.G)(Y, (e3) => 1 - 0.05 * e3), L = (0, d.G)(Y, (e3) => 12 * e3), D = (0, d.G)(Y, [2, 3], [1, 0]), F = (0, d.G)(Y, [0, 2], [0, 1]), $ = (0, d.G)(P2, [16, 96], [0, 1]), K = (0, d.G)(P2, [-96, -16], [1, 0]), V = (0, a.useRef)(null), X = (0, a.useRef)(!s2), q = (0, a.useRef)(false), U = (0, a.useRef)(false);
    function H(t3) {
      let r3 = V.current;
      if (V.current = null, t3.currentTarget.removeAttribute("data-dragging"), t3.currentTarget.hasPointerCapture(t3.pointerId) && t3.currentTarget.releasePointerCapture(t3.pointerId), !r3 || !n2) return;
      let i2 = "pointercancel" === t3.type ? { x: 0, y: 0 } : (function(e3, t4) {
        let r4 = e3.filter((e4) => t4 - e4.t <= 80), i3 = r4[0], a2 = r4[r4.length - 1];
        if (!i3 || !a2 || i3 === a2 || t4 - a2.t > 60) return { x: 0, y: 0 };
        let s3 = (a2.t - i3.t) / 1e3;
        return { x: (a2.x - i3.x) / s3, y: (a2.y - i3.y) / s3 };
      })(r3.samples, t3.timeStamp);
      if (!M2(e2, { x: P2.get(), y: G2.get() }, i2, t3.currentTarget.offsetWidth)) {
        if (v2) {
          P2.jump(0), G2.jump(0);
          return;
        }
        (0, u.i)(P2, 0, { ...x.T.spring.morph, velocity: i2.x }), (0, u.i)(G2, 0, { ...x.T.spring.morph, velocity: i2.y });
      }
    }
    (0, a.useEffect)(() => {
      if (!n2) return;
      let e3 = () => {
        U.current || m2.set(Math.min(1, Math.max(0, Math.hypot(P2.get(), 0.5 * G2.get()) / 160)));
      }, t3 = P2.on("change", e3), r3 = G2.on("change", e3);
      return () => {
        t3(), r3();
      };
    }, [n2, m2, P2, G2]), (0, a.useLayoutEffect)(() => {
      if (r2) {
        V.current = null, U.current = false, C2.current?.removeAttribute("data-dragging"), q.current = true;
        let t4 = "right" === r2 ? 1 : -1, i2 = C2.current?.offsetWidth ?? 320, a2 = P2.get(), s3 = G2.get(), n3 = _2(e2) ?? { x: 900 * t4, y: -120 }, o3 = Math.hypot(n3.x, n3.y), c3 = n3.x, l2 = n3.y;
        (o3 < 200 || Math.sign(c3) !== t4) && (c3 = Math.abs(a2) > 8 ? a2 : t4, l2 = Math.abs(a2) > 8 ? 0.5 * s3 : -0.12);
        let d2 = Math.hypot(c3, l2) || 1;
        c3 /= d2, l2 /= d2, 0.45 > Math.abs(c3) && (c3 = 0.45 * t4, l2 = Math.sign(l2 || -1) * Math.sqrt(0.7975));
        let h2 = 1.6 * i2, p2 = { x: a2 + c3 * h2, y: s3 + l2 * h2, tilt: E2.get() };
        return (N2(e2, p2), v2) ? void (0, u.i)(O, 0, { ...T, onComplete: () => A2(e2) }) : ((0, u.i)(P2, p2.x, { ...j, velocity: n3.x }), (0, u.i)(G2, p2.y, { ...j, velocity: n3.y }), void (0, u.i)(O, 0, { ...b, onComplete: () => A2(e2) }));
      }
      if (!q.current && X.current) return;
      q.current = false, X.current = true;
      let t3 = s2?.delay ?? 0;
      if (v2) {
        P2.jump(0), G2.jump(0), (0, u.i)(O, 1, { ...T, delay: t3 });
        return;
      }
      U.current = true, (0, u.i)(P2, 0, { ...x.T.spring.smooth, delay: t3, onComplete: () => {
        U.current = false;
      } }), (0, u.i)(G2, 0, { ...x.T.spring.smooth, delay: t3 }), (0, u.i)(O, 1, { duration: x.T.duration.fast, delay: t3, ease: [...x.T.ease.enter] });
    }, [r2]);
    let J = null !== r2;
    return (0, i.jsx)(p.PY1.div, { className: k().slot, style: { zIndex: o2, scale: B, y: L, opacity: D }, "aria-hidden": !n2 || void 0, inert: !n2, children: (0, i.jsxs)(p.PY1.div, { ref: C2, className: k().card, style: { x: P2, y: G2, rotate: I, opacity: O }, "data-top": n2 ? "" : void 0, "data-flying": J ? "" : void 0, role: n2 ? "group" : void 0, "aria-label": n2 ? c2 : void 0, onPointerDown: function(e3) {
      if (n2 && 0 === e3.button && e3.isPrimary && !(e3.target instanceof Element && e3.target.closest("button, a, input, select, textarea, [role='button']"))) {
        var t3;
        let r3;
        if (P2.stop(), G2.stop(), U.current = false, 2 > Math.abs(P2.get())) {
          let t4 = e3.currentTarget.getBoundingClientRect();
          E2.set(e3.clientY < t4.top + t4.height / 2 ? 1 : -1);
        }
        V.current = { ox: e3.clientX - P2.get(), oy: e3.clientY - ((r3 = Math.abs(t3 = G2.get())) <= 48 ? t3 : Math.sign(t3) * (48 + (1 / (1 - Math.min(r3 - 48, 139) / 140) - 1) * 140 / 0.55)), samples: [{ t: e3.timeStamp, x: e3.clientX, y: e3.clientY }] }, e3.currentTarget.setPointerCapture(e3.pointerId), e3.currentTarget.setAttribute("data-dragging", "");
      }
    }, onPointerMove: function(e3) {
      let t3 = V.current;
      if (t3 && n2) {
        var r3;
        let i2;
        P2.set(e3.clientX - t3.ox), G2.set((i2 = Math.abs(r3 = e3.clientY - t3.oy)) <= 48 ? r3 : Math.sign(r3) * (48 + (1 - 1 / ((i2 - 48) * 0.55 / 140 + 1)) * 140)), t3.samples.push({ t: e3.timeStamp, x: e3.clientX, y: e3.clientY }), t3.samples.length > 12 && t3.samples.shift();
      }
    }, onPointerUp: H, onPointerCancel: H, children: [(0, i.jsxs)("div", { className: k().face, children: [S2, (0, i.jsx)(p.PY1.span, { className: k().shade, style: { opacity: F }, "aria-hidden": "true" })] }), (0, i.jsxs)(p.PY1.span, { className: k().stamp, "data-side": "right", style: { opacity: $ }, "aria-hidden": "true", children: [(0, i.jsx)(f.A, { size: 16, strokeWidth: 2 }), y2.right] }), (0, i.jsxs)(p.PY1.span, { className: k().stamp, "data-side": "left", style: { opacity: K }, "aria-hidden": "true", children: [(0, i.jsx)(g.A, { size: 16, strokeWidth: 2 }), y2.left] })] }) });
  }
  function M({ children: e2, onClick: t2, disabled: r2, reduced: a2, tone: s2 }) {
    return (0, i.jsx)(p.PY1.button, { type: "button", className: k().control, "data-tone": s2, "aria-disabled": r2 || void 0, onClick: () => {
      r2 || t2();
    }, whileTap: { scale: a2 || r2 ? 1 : 0.97 }, transition: x.T.spring.snappy, children: e2 });
  }
  function N({ render: e2, onReset: t2 }) {
    return (0, i.jsx)(i.Fragment, { children: e2(t2) });
  }
  function A({ items: e2, getKey: t2, getLabel: r2, renderCard: s2, onDecide: n2, onUndo: o2, onReset: d2, labels: h2 = { left: "Pass", right: "Keep" }, outcomes: u2, label: v2 = "Cards", renderEmpty: j2, className: b2 }) {
    let S2 = (0, a.useSyncExternalStore)(_, () => true, () => false), C2 = !!(0, y.I)() && S2, z2 = (0, a.useId)(), [P2, G2] = (0, a.useState)(0), [E2, O] = (0, a.useState)([]), [I, R] = (0, a.useState)([]), [W, Y] = (0, a.useState)({}), [B, L] = (0, a.useState)(""), D = (0, l.d)(0), F = (0, a.useRef)({}), $ = (0, a.useRef)(/* @__PURE__ */ new Map()), K = e2[P2], V = Math.max(0, e2.length - P2);
    function X(e3) {
      if (!K) return;
      let i2 = t2(K);
      D.set(0), G2(P2 + 1), O([...E2, { key: i2, decision: e3 }]), R((e4) => [...e4, i2]), Y({});
      let a2 = V - 1;
      L(`${r2(K)}${u2 ? ` ${u2[e3]}` : `: ${h2[e3]}`}. ${a2 ? `${a2} left.` : "All cards reviewed."}`), n2?.(K, e3);
    }
    function q() {
      let i2 = E2[E2.length - 1], a2 = i2 && e2.find((e3) => t2(e3) === i2.key);
      if (!i2 || !a2) return;
      let s3 = F.current[i2.key];
      G2(P2 - 1), O(E2.slice(0, -1)), R((e3) => e3.filter((e4) => e4 !== i2.key)), Y(s3 ? { [i2.key]: { ...s3, delay: 0 } } : {}), L(`${r2(a2)} restored.`), o2?.(a2, i2.decision);
    }
    function U() {
      if (!E2.length) return;
      let r3 = Math.min(4, e2.length), i2 = {};
      e2.slice(0, r3).forEach((e3, a2) => {
        let s3 = t2(e3), n3 = F.current[s3];
        n3 && a2 < P2 && (i2[s3] = { ...n3, delay: (r3 - 1 - a2) * 0.06 });
      }), G2(0), O([]), R([]), Y(i2), L("All cards are back in the stack."), d2?.();
    }
    function H(e3, r3, i2, a2) {
      let s3 = Math.sign(r3.x);
      if (!s3 || !K || t2(K) !== e3) return false;
      let n3 = Math.abs(i2.x) > 500 && Math.sign(i2.x) === s3 && Math.abs(r3.x) > 12, o3 = Math.abs(r3.x) > Math.min(0.35 * a2, 140) && !(Math.sign(i2.x) === -s3 && Math.abs(i2.x) > 300);
      return (!!n3 || !!o3) && ($.current.set(e3, i2), X(s3 > 0 ? "right" : "left"), true);
    }
    let J = new Map(E2.map((e3) => [e3.key, e3.decision])), Q = new Set(e2.slice(P2, P2 + 4).map(t2)), Z = e2.filter((e3) => Q.has(t2(e3)) || I.includes(t2(e3))), ee = P2 >= e2.length && 0 === I.length;
    return (0, i.jsxs)("div", { className: [k().root, b2].filter(Boolean).join(" "), children: [(0, i.jsxs)("div", { className: k().stage, role: "group", "aria-roledescription": "card stack", "aria-label": v2, "aria-describedby": z2, tabIndex: 0, onKeyDown: function(e3) {
      e3.target === e3.currentTarget && ("ArrowLeft" === e3.key || "ArrowRight" === e3.key ? (e3.preventDefault(), X("ArrowRight" === e3.key ? "right" : "left")) : ("Backspace" === e3.key || (e3.metaKey || e3.ctrlKey) && "z" === e3.key.toLowerCase()) && (e3.preventDefault(), q()));
    }, children: [Z.map((a2) => {
      let n3 = t2(a2), o3 = e2.indexOf(a2), c2 = J.get(n3) ?? null, l2 = c2 ? 0 : o3 - P2;
      return (0, i.jsx)(w, { id: n3, depth: l2, decision: c2, returnFrom: W[n3], interactive: !c2 && 0 === l2, zIndex: c2 ? 20 + I.indexOf(n3) : 4 - l2, label: `${r2(a2)}, ${o3 + 1} of ${e2.length}`, labels: h2, lift: D, reduced: C2, fling: (e3) => {
        let t3 = $.current.get(e3);
        return $.current.delete(e3), t3;
      }, onRelease: H, onThrown: (e3, t3) => {
        F.current[e3] = t3;
      }, onGone: (e3) => R((t3) => t3.filter((t4) => t4 !== e3)), children: s2(a2) }, n3);
    }), (0, i.jsx)(m.N, { initial: false, children: ee && (0, i.jsx)(p.PY1.div, { className: k().empty, initial: C2 ? { opacity: 0 } : { opacity: 0, y: 8, filter: `blur(${x.T.blur.soft}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: { opacity: 0, transition: { duration: x.T.duration.instant } }, transition: C2 ? T : { duration: x.T.duration.standard, ease: [...x.T.ease.enter] }, children: j2 ? (0, i.jsx)(N, { render: j2, onReset: U }) : (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("p", { className: k().emptyTitle, children: "All cards reviewed" }), (0, i.jsxs)("button", { type: "button", className: k().control, onClick: U, children: [(0, i.jsx)(c.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Start over"] })] }) }, "empty") })] }), (0, i.jsxs)("div", { className: k().controls, children: [(0, i.jsxs)(M, { onClick: () => X("left"), disabled: !K, reduced: C2, children: [(0, i.jsx)(g.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), h2.left] }), (0, i.jsxs)(M, { onClick: q, disabled: !E2.length, reduced: C2, tone: "quiet", children: [(0, i.jsx)(c.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), (0, i.jsx)("span", { className: k().controlLabel, children: "Undo" })] }), (0, i.jsxs)(M, { onClick: () => X("right"), disabled: !K, reduced: C2, tone: "primary", children: [(0, i.jsx)(f.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), h2.right] })] }), (0, i.jsxs)("p", { id: z2, className: k().srOnly, children: ["Drag the top card, or use the left and right arrow keys to ", h2.left.toLowerCase(), " or ", h2.right.toLowerCase(), " it. Backspace undoes the last decision."] }), (0, i.jsx)("p", { className: k().srOnly, role: "status", "aria-live": "polite", children: B })] });
  }
  var S = r(74912), C = r.n(S);
  let z = [{ code: "LIS", city: "Lisbon", country: "Portugal", dates: "14\u201317 Oct", pitch: "Tiled hills, long lunches, and a riverside workshop space for 18.", flight: "3h 35m direct from Berlin", weather: "22\xB0 and mostly sunny", price: "From \u20AC780 per person" }, { code: "CPH", city: "Copenhagen", country: "Denmark", dates: "21\u201324 Oct", pitch: "Harbour saunas, bikes for everyone, and a studio loft in N\xF8rrebro.", flight: "1h 10m direct from Berlin", weather: "11\xB0 with light rain", price: "From \u20AC1,140 per person" }, { code: "OPO", city: "Porto", country: "Portugal", dates: "14\u201317 Oct", pitch: "A river-view warehouse by day and dinners in Ribeira by night.", flight: "3h 20m direct from Berlin", weather: "19\xB0 and clear", price: "From \u20AC690 per person" }, { code: "KIX", city: "Kyoto", country: "Japan", dates: "3\u20139 Nov", pitch: "Temple mornings, ryokan evenings, and a long flight to earn them.", flight: "15h 40m with one stop", weather: "17\xB0 and dry", price: "From \u20AC2,380 per person" }, { code: "EDI", city: "Edinburgh", country: "Scotland", dates: "28\u201331 Oct", pitch: "Old Town walks and a converted church for the team sessions.", flight: "2h 05m direct from Berlin", weather: "10\xB0 and breezy", price: "From \u20AC920 per person" }, { code: "SVQ", city: "Seville", country: "Spain", dates: "21\u201324 Oct", pitch: "Courtyard sessions under orange trees and very late tapas.", flight: "3h 30m direct from Berlin", weather: "26\xB0 and sunny", price: "From \u20AC740 per person" }];
  function P({ place: e2 }) {
    return (0, i.jsxs)("div", { className: C().destination, children: [(0, i.jsxs)("div", { className: C().destTop, children: [(0, i.jsx)("span", { children: e2.code }), (0, i.jsx)("span", { children: e2.dates })] }), (0, i.jsxs)("div", { className: C().destName, children: [(0, i.jsx)("h3", { children: e2.city }), (0, i.jsx)("p", { children: e2.country })] }), (0, i.jsx)("p", { className: C().pitch, children: e2.pitch }), (0, i.jsxs)("ul", { className: C().facts, children: [(0, i.jsxs)("li", { children: [(0, i.jsx)(s.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), e2.flight] }), (0, i.jsxs)("li", { children: [(0, i.jsx)(n.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), e2.weather] }), (0, i.jsxs)("li", { children: [(0, i.jsx)(o.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), e2.price] })] })] });
  }
  function G() {
    let [e2, t2] = (0, a.useState)([]), r2 = e2.filter((e3) => "right" === e3.decision).map((e3) => e3.city);
    return (0, i.jsx)("div", { className: C().demo, children: (0, i.jsx)(A, { items: z, getKey: (e3) => e3.code, getLabel: (e3) => e3.city, renderCard: (e3) => (0, i.jsx)(P, { place: e3 }), labels: { left: "Skip", right: "Shortlist" }, outcomes: { left: "skipped", right: "shortlisted" }, label: "Offsite destinations", onDecide: (e3, r3) => t2((t3) => [...t3, { city: e3.city, decision: r3 }]), onUndo: () => t2((e3) => e3.slice(0, -1)), onReset: () => t2([]), renderEmpty: (e3) => (0, i.jsxs)("div", { className: C().summary, children: [(0, i.jsx)("p", { className: C().summaryTitle, children: r2.length ? "Shortlist ready" : "Nothing shortlisted" }), (0, i.jsx)("p", { className: C().summaryText, children: r2.length ? r2.join(", ") : "Every destination was skipped." }), (0, i.jsxs)("button", { type: "button", className: C().again, onClick: e3, children: [(0, i.jsx)(c.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Start over"] })] }) }) });
  }
  let E = G;
}

__m(__module,__exports,__require);
}