function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { SignaturePadDemo: () => et, default: () => ea });
  var n = a(95155), i = a(12115), r = a(18310), s = a(25354), l = a(80642), o = a(64577), d = a(92298), u = a(51288), c = a(92171), p = a(9005), h = a(15330), g = a(60976), m = a(40852), f = a(36619), x = a(51811);
  let _ = { name: "eraser", size: 24, node: [["path", { d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21", key: "g5wo59" }], ["path", { d: "m5.082 11.09 8.828 8.828", key: "1wx5vj" }]] };
  _.node;
  let y = (0, x.A)(_);
  var v = a(50825), b = a(7770), k = a(76574), j = a.n(k);
  let w = { black: { label: "Black ink", export: "#17171a" }, blue: { label: "Blue ink", export: "#1d3fae" }, violet: { label: "Violet ink", export: "#5b35c8" } }, M = { fine: { label: "Fine", size: 3.4 }, medium: { label: "Medium", size: 5.6 }, bold: { label: "Bold", size: 8.4 } }, A = Object.keys(w), N = Object.keys(M), $ = (e2, t2) => [e2[0] + t2[0], e2[1] + t2[1]], C = (e2, t2) => [e2[0] - t2[0], e2[1] - t2[1]], S = (e2, t2) => [e2[0] * t2, e2[1] * t2], z = (e2, t2, a2) => [e2[0] + (t2[0] - e2[0]) * a2, e2[1] + (t2[1] - e2[1]) * a2], E = (e2, t2) => Math.hypot(e2[0] - t2[0], e2[1] - t2[1]), P = (e2) => {
    let t2 = Math.hypot(e2[0], e2[1]);
    return t2 ? [e2[0] / t2, e2[1] / t2] : [0, 0];
  }, R = (e2) => [e2[1], -e2[0]], T = (e2, t2) => e2[0] * t2[0] + e2[1] * t2[1], I = (e2, t2, a2) => {
    let n2 = Math.sin(a2), i2 = Math.cos(a2), r2 = e2[0] - t2[0], s2 = e2[1] - t2[1];
    return [r2 * i2 - s2 * n2 + t2[0], r2 * n2 + s2 * i2 + t2[1]];
  }, D = (e2) => e2 * (2 - e2);
  function O(e2, t2) {
    let { size: a2, thinning: n2 = 0.62, streamline: i2 = 0.42, simulatePressure: r2 = true, taperStart: s2 = 0, taperEnd: l2 = 0, last: o2 = true } = t2, [d2] = e2;
    if (!d2) return [];
    let u2 = !r2 && e2.some((e3) => e3.p > 0), c2 = [], p2 = [d2.x, d2.y], h2 = 0, g2 = { at: p2, pressure: u2 ? d2.p : 0.5, length: 0, vector: [1, 0] };
    c2.push(g2);
    for (let t3 = 1; t3 < e2.length; t3++) {
      let a3 = e2[t3], n3 = [a3.x, a3.y], r3 = t3 === e2.length - 1 && o2 ? n3 : z(p2, n3, 1 - i2), s3 = E(r3, p2);
      s3 < 0.4 || (h2 += s3, c2.push({ at: r3, pressure: u2 ? a3.p : 0.5, length: h2, vector: P(C(p2, r3)) }), p2 = r3);
    }
    let m2 = c2[1];
    m2 && (g2.vector = m2.vector);
    let f2 = h2;
    if (1 === c2.length) {
      let e3 = Math.max(0.6, a2 * (0.5 - n2 * (0.5 - g2.pressure)) * 0.9);
      return Array.from({ length: 18 }, (t3, a3) => $(g2.at, S([Math.cos(a3 / 18 * Math.PI * 2), Math.sin(a3 / 18 * Math.PI * 2)], e3)));
    }
    let x2 = [], _2 = [], y2 = g2.pressure, v2 = g2.vector, b2 = [];
    for (let e3 = 0; e3 < c2.length; e3++) {
      let t3 = c2[e3];
      if (u2) y2 = t3.pressure;
      else {
        let n3 = Math.min(1, (0 === e3 ? 0 : E(t3.at, c2[e3 - 1].at)) / a2);
        y2 = Math.min(1, y2 + (Math.min(1, 1 - n3) - y2) * n3 * 0.3);
      }
      let i3 = Math.max(0.25, a2 * (0.5 - n2 * (0.5 - y2)));
      i3 = Math.max(0.12 * a2, i3 * Math.min(s2 ? D(Math.min(1, t3.length / s2)) : 1, l2 && o2 ? D(Math.min(1, (f2 - t3.length) / l2)) : 1)), b2.push(i3);
      let r3 = c2[e3 + 1]?.vector ?? t3.vector, d3 = S(R(z(r3, t3.vector, 0.5)), i3);
      if (e3 > 0 && e3 < c2.length - 1 && -0.2 > T(t3.vector, r3)) {
        let e4 = S(R(v2), i3);
        for (let a3 = 0; a3 <= 1; a3 += 1 / 12) x2.push(I(C(t3.at, e4), t3.at, Math.PI * a3)), _2.push(I($(t3.at, e4), t3.at, -Math.PI * a3));
      } else x2.push(C(t3.at, d3)), _2.push($(t3.at, d3));
      v2 = t3.vector;
    }
    let k2 = (e3, t3, a3, n3) => {
      let i3 = [], r3 = E(e3, t3), s3 = Math.atan2(t3[1] - e3[1], t3[0] - e3[0]), l3 = s3 + Math.PI / 2, o3 = T([Math.cos(l3), Math.sin(l3)], n3) >= 0 ? 1 : -1;
      for (let t4 = 1; t4 < 12; t4++) {
        let a4 = s3 + o3 * Math.PI * t4 / 12;
        i3.push([e3[0] + Math.cos(a4) * r3, e3[1] + Math.sin(a4) * r3]);
      }
      return i3.push(a3), i3;
    }, j2 = c2[c2.length - 1], w2 = k2(j2.at, x2[x2.length - 1], _2[_2.length - 1], S(j2.vector, -1)), M2 = k2(g2.at, _2[0], x2[0], g2.vector);
    return [...x2, ...w2, ..._2.reverse(), ...M2];
  }
  let U = (e2) => Math.round(100 * e2) / 100;
  function B(e2) {
    if (e2.length < 3) return "";
    let t2 = `M${U(e2[0][0])} ${U(e2[0][1])} Q`;
    for (let a2 = 0; a2 < e2.length; a2++) {
      let [n2, i2] = e2[a2], [r2, s2] = e2[(a2 + 1) % e2.length];
      t2 += `${U(n2)} ${U(i2)} ${U((n2 + r2) / 2)} ${U((i2 + s2) / 2)} `;
    }
    return `${t2}Z`;
  }
  function F(e2, t2) {
    let a2 = M[e2.width].size, n2 = e2.points.some((e3) => e3.p > 0);
    return { size: a2, simulatePressure: !n2, taperStart: 1.5 * a2, taperEnd: n2 ? 0 : 5 * a2, last: t2 };
  }
  function L(e2, t2 = 1 / 0) {
    let a2 = e2.points, n2 = t2 >= a2[a2.length - 1].t;
    return B(O(n2 ? a2 : a2.filter((e3) => e3.t <= t2), F(e2, n2)));
  }
  function Y(e2) {
    let t2 = 1 / 0, a2 = 1 / 0, n2 = -1 / 0, i2 = -1 / 0;
    for (let r2 of e2) for (let e3 of r2.points) t2 = Math.min(t2, e3.x), a2 = Math.min(a2, e3.y), n2 = Math.max(n2, e3.x), i2 = Math.max(i2, e3.y);
    return { x: Math.floor(t2 - 16), y: Math.floor(a2 - 16), width: Math.ceil(n2 - t2 + 32), height: Math.ceil(i2 - a2 + 32) };
  }
  function W(e2) {
    if (!e2.length) return "";
    let t2 = Y(e2), a2 = e2.map((e3) => `<path d="${L(e3)}" fill="${w[e3.color].export}"/>`).join("");
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${t2.x} ${t2.y} ${t2.width} ${t2.height}" width="${t2.width}" height="${t2.height}">${a2}</svg>`;
  }
  let { spring: K, duration: H, ease: Q, blur: q } = b.T, V = () => () => {
  };
  function Z({ signer: e2, hint: t2 = "Sign here", defaultColor: a2 = "black", defaultWidth: d2 = "medium", onChange: u2, fileName: x2 = "signature", label: _2 = "Signature pad", className: b2 }) {
    let k2, $2 = (0, i.useId)().replace(/[^a-zA-Z0-9-]/g, ""), C2 = (k2 = (0, i.useSyncExternalStore)(V, () => true, () => false), !!(0, r.I)() && k2), [S2, z2] = (0, i.useState)({ past: [], present: [], future: [], fresh: null }), [E2, P2] = (0, i.useState)(a2), [R2, T2] = (0, i.useState)(d2), [I2, D2] = (0, i.useState)(false), [U2, J2] = (0, i.useState)(false), [ee2, et2] = (0, i.useState)(null), [ea2, en] = (0, i.useState)(null), [ei, er] = (0, i.useState)(""), es = (0, i.useRef)(null), el = (0, i.useRef)(null), eo = (0, i.useRef)(null), ed = (0, i.useRef)(null), eu = (0, i.useRef)(0), ec = (0, i.useRef)(0), ep = (0, i.useRef)(null), eh = (0, i.useRef)(0), eg = (0, i.useRef)(u2);
    (0, i.useEffect)(() => {
      eg.current = u2;
    });
    let em = S2.present, ef = 0 === em.length, ex = null !== ee2;
    (0, i.useEffect)(() => {
      eg.current?.(em);
    }, [em]), (0, i.useEffect)(() => () => {
      cancelAnimationFrame(eu.current), window.clearTimeout(ec.current);
    }, []);
    let e_ = (0, i.useCallback)((e3, t3 = null) => {
      z2((a3) => ({ past: [...a3.past, a3.present].slice(-60), present: e3, future: [], fresh: t3 }));
    }, []), ey = (0, i.useCallback)(() => {
      cancelAnimationFrame(eu.current), et2(null);
    }, []), ev = (0, i.useCallback)(() => {
      ep.current?.complete();
    }, []);
    function eb(e3) {
      let t3 = es.current.getBoundingClientRect();
      return { x: (e3.clientX - t3.left) / t3.width * 600, y: (e3.clientY - t3.top) / t3.height * 260 };
    }
    function ek(e3) {
      let t3 = ed.current;
      t3 && t3.id === e3.pointerId && (ed.current = null, e_([...em, t3.stroke], t3.stroke.id), eo.current?.setAttribute("d", ""), D2(false), er(`Stroke added. ${em.length + 1} in the signature.`));
    }
    function ej() {
      let e3 = ed.current;
      e3 && eo.current && eo.current.setAttribute("d", B(O(e3.stroke.points, F(e3.stroke, false))));
    }
    function ew() {
      S2.past.length && !ed.current && (ev(), ey(), z2((e3) => e3.past.length ? { past: e3.past.slice(0, -1), present: e3.past[e3.past.length - 1], future: [e3.present, ...e3.future], fresh: null } : e3), er("Undone"));
    }
    function eM() {
      S2.future.length && !ed.current && (ev(), ey(), z2((e3) => e3.future.length ? { past: [...e3.past, e3.present], present: e3.future[0], future: e3.future.slice(1), fresh: null } : e3), er("Redone"));
    }
    function eA() {
      if (ef || U2 || ed.current) return;
      ey();
      let e3 = el.current, t3 = () => {
        ep.current = null, e_([]), J2(false), er("Signature cleared. Undo brings it back."), e3 && requestAnimationFrame(() => requestAnimationFrame(() => {
          e3.style.clipPath = "";
        }));
      };
      if (!e3 || C2) return void t3();
      J2(true);
      let a3 = (0, c.i)(e3, { clipPath: ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 100%)"] }, { duration: 0.56, ease: [...Q.inOut] });
      ep.current = { stop: () => a3.stop(), complete: () => {
        a3.complete();
      } }, a3.then(t3);
    }
    async function eN(e3) {
      if (!ef) {
        window.clearTimeout(ec.current);
        try {
          var t3, a3;
          let n2, i2;
          t3 = "svg" === e3 ? new Blob([W(em)], { type: "image/svg+xml" }) : await (function(e4, t4 = 3) {
            return new Promise((a4, n3) => {
              if (!e4.length) return n3(Error("Nothing to export"));
              let i3 = Y(e4), r2 = document.createElement("canvas");
              r2.width = i3.width * t4, r2.height = i3.height * t4;
              let s2 = r2.getContext("2d");
              if (!s2) return n3(Error("Canvas is unavailable"));
              for (let a5 of (s2.scale(t4, t4), s2.translate(-i3.x, -i3.y), e4)) s2.fillStyle = w[a5.color].export, s2.fill(new Path2D(L(a5)));
              r2.toBlob((e5) => e5 ? a4(e5) : n3(Error("Export failed")), "image/png");
            });
          })(em), a3 = `${x2}.${e3}`, n2 = URL.createObjectURL(t3), (i2 = document.createElement("a")).href = n2, i2.download = a3, document.body.appendChild(i2), i2.click(), i2.remove(), window.setTimeout(() => URL.revokeObjectURL(n2), 1e3), en(e3), er(`Saved ${x2}.${e3}`);
        } catch {
          en("failed"), er("Export failed. Try again.");
        }
        ec.current = window.setTimeout(() => en(null), 1800);
      }
    }
    let e$ = null, eC = E2, eS = [];
    for (let e3 = 0; e3 < em.length; e3++) {
      let t3 = em[e3];
      if (null === ee2) {
        eS.push({ stroke: t3, d: null });
        continue;
      }
      let a3 = ee2.at - (ee2.offsets[e3] ?? 0), n2 = t3.points[t3.points.length - 1].t;
      if (a3 < 0) {
        eS.push({ stroke: t3, d: "" });
        continue;
      }
      if (a3 >= n2) {
        eS.push({ stroke: t3, d: null });
        continue;
      }
      e$ = t3.points.findLast((e4) => e4.t <= a3) ?? t3.points[0], eC = t3.color, eS.push({ stroke: t3, d: L(t3, a3) });
    }
    let ez = ef && !I2 && !U2, eE = C2 ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.97, filter: `blur(${q.soft}px)` }, eP = C2 ? { duration: H.instant } : K.snappy;
    return (0, n.jsxs)("div", { className: [j().root, b2].filter(Boolean).join(" "), "data-ink": E2, children: [(0, n.jsxs)("div", { ref: es, className: j().pad, tabIndex: 0, role: "img", "aria-roledescription": "signature pad", "aria-label": `${_2}. ${ef ? "Empty." : `${em.length} ${1 === em.length ? "stroke" : "strokes"}.`} Draw with a pointer, pen, or finger.`, "aria-describedby": `${$2}-keys`, "data-drawing": I2 ? "" : void 0, onPointerDown: function(e3) {
      if (ed.current || "mouse" === e3.pointerType && 0 !== e3.button) return;
      e3.preventDefault(), ev(), ex && ey(), es.current?.focus({ preventScroll: true }), e3.currentTarget.setPointerCapture(e3.pointerId);
      let { x: t3, y: a3 } = eb(e3), n2 = e3.nativeEvent.timeStamp;
      eh.current += 1;
      let i2 = "pen" === e3.pointerType && e3.pressure > 0;
      ed.current = { id: e3.pointerId, stamp: e3.nativeEvent.timeStamp, stroke: { id: `${$2}-${eh.current}`, color: E2, width: R2, at: n2, points: [{ x: t3, y: a3, p: i2 ? e3.pressure : -1, t: 0 }] } }, D2(true), ej();
    }, onPointerMove: function(e3) {
      let t3 = ed.current;
      if (!t3 || t3.id !== e3.pointerId) return;
      let a3 = "function" == typeof e3.nativeEvent.getCoalescedEvents ? e3.nativeEvent.getCoalescedEvents() : [];
      for (let n2 of a3.length ? a3 : [e3.nativeEvent]) {
        let { x: e4, y: a4 } = eb(n2), i2 = "pen" === n2.pointerType && n2.pressure > 0;
        t3.stroke.points.push({ x: e4, y: a4, p: i2 ? n2.pressure : -1, t: Math.max(t3.stroke.points[t3.stroke.points.length - 1].t, n2.timeStamp - t3.stamp) });
      }
      ej();
    }, onPointerUp: ek, onPointerCancel: ek, onKeyDown: function(e3) {
      let t3 = e3.metaKey || e3.ctrlKey, a3 = e3.key.toLowerCase();
      t3 && "z" === a3 ? (e3.preventDefault(), e3.shiftKey ? eM() : ew()) : t3 && "y" === a3 ? (e3.preventDefault(), eM()) : t3 || "Delete" !== e3.key && "Backspace" !== e3.key || e3.currentTarget !== e3.target ? "Escape" === e3.key && ex && ey() : (e3.preventDefault(), eA());
    }, children: [(0, n.jsxs)("div", { className: j().guide, "aria-hidden": "true", children: [(0, n.jsx)(p.A, { className: j().mark, size: 14, strokeWidth: 1.75 }), (0, n.jsx)("span", { className: j().baseline }), e2 && (0, n.jsx)("span", { className: j().signer, children: e2 }), (0, n.jsx)(l.N, { initial: false, children: ez && (0, n.jsx)(s.PY1.span, { className: j().hint, initial: eE, animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }, exit: { ...eE, transition: { duration: H.fast, ease: [...Q.standard] } }, transition: C2 ? { duration: H.instant } : { duration: H.standard, ease: [...Q.enter] }, children: t2 }, "hint") })] }), (0, n.jsx)("div", { ref: el, className: j().ink, children: (0, n.jsxs)("svg", { viewBox: "0 0 600 260", preserveAspectRatio: "none", "aria-hidden": "true", children: [(0, n.jsx)(l.N, { initial: false, children: eS.map(({ stroke: e3, d: t3 }) => (0, n.jsx)(s.PY1.path, { className: j().stroke, "data-color": e3.color, d: t3 ?? L(e3), initial: S2.fresh !== e3.id && { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0, transition: { duration: U2 ? 0 : H.standard, ease: [...Q.standard] } }, transition: { duration: H.standard, ease: [...Q.standard] } }, e3.id)) }), (0, n.jsx)("path", { ref: eo, className: j().stroke, "data-color": E2 }), e$ && (0, n.jsx)("circle", { className: j().nib, "data-color": eC, cx: e$.x, cy: e$.y, r: 0.9 * M[R2].size })] }) }), U2 && (0, n.jsx)(s.PY1.span, { className: j().sweep, "aria-hidden": "true", initial: { x: "0%", opacity: 0 }, animate: { x: "100%", opacity: [0, 1, 1, 0] }, transition: { duration: 0.56, ease: [...Q.inOut], opacity: { duration: 0.56, times: [0, 0.12, 0.85, 1] } } })] }), (0, n.jsxs)("div", { className: j().toolbar, children: [(0, n.jsxs)("div", { className: j().group, children: [(0, n.jsx)(X, { label: "Ink color", options: A, value: E2, onChange: (e3) => {
      P2(e3), er(`${w[e3].label} selected`);
    }, layoutId: `${$2}-color`, reduced: C2, render: (e3) => (0, n.jsx)("span", { className: j().swatch, "data-color": e3 }), name: (e3) => w[e3].label }), (0, n.jsx)("span", { className: j().divider, "aria-hidden": "true" }), (0, n.jsx)(X, { label: "Stroke width", options: N, value: R2, onChange: (e3) => {
      T2(e3), er(`${M[e3].label} nib selected`);
    }, layoutId: `${$2}-width`, reduced: C2, render: (e3) => (0, n.jsx)("span", { className: j().weight, style: { width: M[e3].size + 2, height: M[e3].size + 2 } }), name: (e3) => M[e3].label })] }), (0, n.jsxs)("div", { className: j().group, children: [(0, n.jsx)(G, { label: "Undo", onClick: ew, disabled: !S2.past.length || U2, children: (0, n.jsx)(h.A, { size: 18, strokeWidth: 1.75, "aria-hidden": "true" }) }), (0, n.jsx)(G, { label: "Redo", onClick: eM, disabled: !S2.future.length || U2, children: (0, n.jsx)(g.A, { size: 18, strokeWidth: 1.75, "aria-hidden": "true" }) }), (0, n.jsx)(G, { label: ex ? "Stop replay" : "Replay signature", onClick: function() {
      if (ex) {
        ey(), er("Replay stopped");
        return;
      }
      if (ef || ed.current) return;
      ev();
      let e3 = [], t3 = 0;
      em.forEach((a4, n3) => {
        if (n3 > 0) {
          let e4 = em[n3 - 1], i3 = a4.at - (e4.at + e4.points[e4.points.length - 1].t);
          t3 += Math.min(260, Math.max(90, i3));
        }
        e3.push(t3), t3 += a4.points[a4.points.length - 1].t;
      });
      let a3 = Math.max(1, t3 / 3200), n2 = t3 + 120, i2 = performance.now(), r2 = (t4) => {
        let s2 = (t4 - i2) * a3;
        if (s2 >= n2) {
          et2(null), er("Replay finished");
          return;
        }
        et2({ at: s2, offsets: e3 }), eu.current = requestAnimationFrame(r2);
      };
      et2({ at: 0, offsets: e3 }), er("Replaying signature"), eu.current = requestAnimationFrame(r2);
    }, disabled: ef || U2, pressed: ex, children: (0, n.jsx)(l.N, { mode: "popLayout", initial: false, children: (0, n.jsx)(s.PY1.span, { className: j().swap, initial: { opacity: 0, scale: 0.6 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.6 }, transition: eP, children: ex ? (0, n.jsx)(m.A, { size: 15, strokeWidth: 1.75, "aria-hidden": "true" }) : (0, n.jsx)(f.A, { size: 17, strokeWidth: 1.75, "aria-hidden": "true" }) }, ex ? "stop" : "play") }) }), (0, n.jsx)(G, { label: "Clear signature", onClick: eA, disabled: ef || U2, children: (0, n.jsx)(y, { size: 18, strokeWidth: 1.75, "aria-hidden": "true" }) })] })] }), (0, n.jsxs)("div", { className: j().exports, children: [(0, n.jsx)("span", { className: j().exportLabel, children: "Save as" }), ["png", "svg"].map((e3) => (0, n.jsx)("button", { type: "button", className: j().export, onClick: () => eN(e3), disabled: ef, "aria-label": `Download ${e3.toUpperCase()}`, children: (0, n.jsx)(l.N, { mode: "popLayout", initial: false, children: (0, n.jsx)(s.PY1.span, { className: j().exportContent, initial: { opacity: 0, y: 4 * !C2, filter: C2 ? "blur(0px)" : `blur(${q.subtle}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: { opacity: 0, y: C2 ? 0 : -4, transition: { duration: H.instant } }, transition: C2 ? { duration: H.instant } : { duration: H.fast, ease: [...Q.enter] }, children: ea2 === e3 ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(o.A, { size: 15, strokeWidth: 1.75, "aria-hidden": "true" }), "Saved"] }) : (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(v.A, { size: 15, strokeWidth: 1.75, "aria-hidden": "true" }), e3.toUpperCase()] }) }, ea2 === e3 ? "done" : "failed" === ea2 ? "failed" : "idle") }) }, e3))] }), (0, n.jsx)("p", { id: `${$2}-keys`, className: j().srOnly, children: "Press Control or Command Z to undo, add Shift to redo, and Delete to clear." }), (0, n.jsx)("p", { className: j().srOnly, role: "status", "aria-live": "polite", children: ei })] });
  }
  function G({ label: e2, onClick: t2, disabled: a2, pressed: i2, children: r2 }) {
    return (0, n.jsx)("button", { type: "button", className: j().iconButton, "aria-label": e2, title: e2, onClick: t2, disabled: a2, "aria-pressed": i2, children: r2 });
  }
  function X({ label: e2, options: t2, value: a2, onChange: r2, render: l2, name: o2, layoutId: d2, reduced: u2 }) {
    let c2 = (0, i.useRef)([]);
    return (0, n.jsx)("div", { className: j().choice, role: "radiogroup", "aria-label": e2, onKeyDown: function(e3) {
      let n2 = "ArrowRight" === e3.key || "ArrowDown" === e3.key ? 1 : "ArrowLeft" === e3.key || "ArrowUp" === e3.key ? -1 : 0;
      if (!n2) return;
      e3.preventDefault();
      let i2 = (t2.indexOf(a2) + n2 + t2.length) % t2.length;
      r2(t2[i2]), c2.current[i2]?.focus();
    }, children: t2.map((e3, t3) => (0, n.jsxs)("button", { ref: (e4) => {
      c2.current[t3] = e4;
    }, type: "button", role: "radio", "aria-checked": e3 === a2, "aria-label": o2(e3), title: o2(e3), tabIndex: e3 === a2 ? 0 : -1, className: j().option, onClick: () => r2(e3), children: [e3 === a2 && (0, n.jsx)(s.PY1.span, { layoutId: d2, className: j().selected, transition: u2 ? { duration: 0 } : K.morph }), l2(e3)] }, e3)) });
  }
  var J = a(45158), ee = a.n(J);
  function et() {
    let e2 = !!(0, r.I)(), [t2, a2] = (0, i.useState)([]), [c2, p2] = (0, i.useState)("signing"), [h2, g2] = (0, i.useState)(0), [m2, f2] = (0, i.useState)(""), x2 = (0, i.useRef)(0), _2 = (0, i.useRef)(null), [y2, v2] = (0, i.useState)("auto");
    (0, i.useEffect)(() => () => window.clearTimeout(x2.current), []), (0, i.useEffect)(() => {
      let e3 = _2.current;
      if (!e3) return;
      let t3 = new ResizeObserver(() => v2(e3.offsetHeight));
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    let k2 = e2 ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } } : { initial: { opacity: 0, y: 10, filter: `blur(${b.T.blur.soft}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: { opacity: 0, y: -6, filter: `blur(${b.T.blur.soft}px)` } };
    return (0, n.jsx)("div", { className: ee().demo, children: (0, n.jsx)(s.PY1.div, { className: ee().stage, initial: false, animate: { height: y2 }, transition: e2 ? { duration: 0 } : b.T.spring.smooth, children: (0, n.jsx)("div", { ref: _2, children: (0, n.jsx)(l.N, { mode: "wait", initial: false, children: "signed" !== c2 ? (0, n.jsxs)(s.PY1.div, { className: ee().body, ...k2, transition: e2 ? { duration: b.T.duration.fast } : { duration: b.T.duration.standard, ease: [...b.T.ease.enter] }, children: [(0, n.jsx)(Z, { signer: "Emma Collins", fileName: "emma-collins-signature", onChange: a2 }), (0, n.jsxs)("div", { className: ee().footer, children: [(0, n.jsx)("span", {}), (0, n.jsx)(u.A, { onClick: function() {
      t2.length && (p2("saving"), x2.current = window.setTimeout(() => {
        f2(`data:image/svg+xml;utf8,${encodeURIComponent(W(t2))}`), p2("signed");
      }, 700));
    }, disabled: !t2.length, loading: "saving" === c2, children: "saving" === c2 ? "Signing" : "Adopt and sign" })] })] }, `pad-${h2}`) : (0, n.jsxs)(s.PY1.div, { className: ee().signed, ...k2, transition: e2 ? { duration: b.T.duration.fast } : { duration: b.T.duration.standard, ease: [...b.T.ease.enter] }, children: [(0, n.jsxs)("div", { className: ee().sheet, children: [(0, n.jsx)("img", { className: ee().preview, src: m2, alt: "Your signature" }), (0, n.jsx)("span", { className: ee().rule, "aria-hidden": "true" }), (0, n.jsx)("span", { className: ee().caption, children: "Emma Collins" })] }), (0, n.jsxs)("div", { className: ee().footer, children: [(0, n.jsxs)("p", { className: ee().done, role: "status", children: [(0, n.jsx)(o.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Signed"] }), (0, n.jsxs)(u.A, { variant: "secondary", size: "sm", onClick: function() {
      a2([]), f2(""), p2("signing"), g2((e3) => e3 + 1);
    }, children: [(0, n.jsx)(d.A, { size: 15, strokeWidth: 1.75, "aria-hidden": "true" }), "Sign again"] })] })] }, "signed") }) }) }) });
  }
  let ea = et;
}

__m(__module,__exports,__require);
}