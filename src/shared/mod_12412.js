function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { ScrubInputDemo: () => H, default: () => q });
  var i = r(95155), a = r(12115), n = r(5772), o = r(18310), s = r(28245), l = r(55809), u = r(92171), d = r(25354), c = r(80642), p = r(41189), h = r(51811);
  let m = { name: "square-round-corner", size: 24, node: [["path", { d: "M21 11a8 8 0 0 0-8-8", key: "1lxwo5" }], ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1dv2y5" }]] };
  m.node;
  let f = (0, h.A)(m), g = { name: "blend", size: 24, node: [["circle", { cx: "15", cy: "9", r: "7", key: "1i12rt" }], ["circle", { cx: "9", cy: "15", r: "7", key: "19bs8k" }]] };
  g.node;
  let y = (0, h.A)(g);
  var b = r(92298), w = r(51288), v = r(47650), x = r(7770), j = r(9678), k = r.n(j);
  let { spring: _, duration: M, ease: A } = x.T, N = 12, P = (e2, t2) => {
    let r2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: r2 * r2, damping: 2 * (1 - t2) * r2, mass: 1, restDelta: 0.01, restSpeed: 0.5 };
  }, C = P(0.34, 0), E = P(0.3, 0), z = (e2) => {
    let t2 = String(e2);
    return t2.includes("e-") ? Number(t2.split("e-")[1]) : (t2.split(".")[1] ?? "").length;
  }, L = (e2, t2) => {
    let r2 = 10 ** t2;
    return Math.round(e2 * r2) / r2;
  }, S = (e2, t2) => String(L(e2, t2)).replace(/^-0$/, "0"), $ = () => () => {
  }, T = (0, a.forwardRef)(function({ label: e2, value: t2, defaultValue: r2 = 0, onValueChange: n2, onValueCommit: p2, min: h2 = -1 / 0, max: m2 = 1 / 0, step: f2 = 1, fineStep: g2, coarseStep: y2, precision: b2, pixelsPerStep: w2 = 2, wrap: x2 = false, unit: j2, defaultUnit: P2, units: T2, onUnitChange: R2, resetValue: I2, track: D2, size: O2 = "md", pointerLock: X2 = true, className: F2, disabled: Y2, id: W2, onFocus: K2, onBlur: G2, onKeyDown: V2, "aria-label": H2, ...q2 }, B) {
    let J = (0, a.useId)(), U = W2 ?? `scrub-${J.replace(/[^a-zA-Z0-9-]/g, "")}`, Z = (0, a.useSyncExternalStore)($, () => true, () => false), Q = !!(0, o.I)() && Z, ee = (0, a.useRef)(null), et = (0, a.useRef)(null), er = (0, a.useRef)(null);
    (0, a.useImperativeHandle)(B, () => ee.current, []);
    let ei = g2 ?? f2 / 10, ea = y2 ?? 10 * f2, en = b2 ?? Math.max(z(f2), z(ei)), eo = x2 && Number.isFinite(h2) && Number.isFinite(m2) && m2 > h2, es = (D2 ?? true) && Number.isFinite(h2) && Number.isFinite(m2) && m2 > h2, [el, eu] = (0, a.useState)(r2), ed = t2 ?? el, [ec, ep] = (0, a.useState)(P2 ?? j2 ?? T2?.[0] ?? ""), eh = j2 ?? ec, em = T2 ?? (eh ? [eh] : []), [ef, eg] = (0, a.useState)(null), [ey, eb] = (0, a.useState)(null), [ew, ev] = (0, a.useState)(null), [ex, ej] = (0, a.useState)(false), ek = (0, a.useRef)({ current: ed, unit: eh });
    (0, a.useEffect)(() => {
      ek.current = { current: ed, unit: eh };
    }, [ed, eh]);
    let e_ = (0, a.useRef)(null), eM = (0, a.useRef)(false), eA = (0, a.useRef)(0);
    (0, a.useEffect)(() => () => window.clearTimeout(eA.current), []);
    let eN = (0, s.d)(0), eP = (0, s.d)(160), eC = (0, l.G)(() => 1 + Math.abs(eN.get()) / Math.max(1, eP.get())), eE = (0, l.G)(eN, (e3) => e3 >= 0 ? 0 : 1), ez = (0, l.G)(eN, (e3) => 0.5 * e3), eL = es ? Math.min(1, Math.max(0, (ed - h2) / (m2 - h2))) : 0, eS = (0, s.d)(eL), e$ = (0, s.d)(0), eT = (0, s.d)(0);
    (0, a.useEffect)(() => {
      let e3 = et.current;
      if (!e3) return;
      let t3 = new ResizeObserver(() => eP.set(e3.offsetWidth));
      return t3.observe(e3), () => t3.disconnect();
    }, [eP]), (0, a.useEffect)(() => {
      if (Q || e_.current?.moved) return void eS.jump(eL);
      let e3 = (0, u.i)(eS, eL, _.smooth);
      return () => e3.stop();
    }, [eS, eL, Q]);
    let eR = (0, a.useCallback)((e3, r3, i2, a2 = ek.current.unit) => {
      e3 !== ek.current.current && (ek.current = { current: e3, unit: a2 }, void 0 === t2 && eu(e3), n2?.(e3, { source: r3, unit: a2 })), i2 && p2?.(e3, { source: r3, unit: a2 });
    }, [n2, p2, t2]), eI = (e3) => {
      let t3 = L(e3, en);
      if (eo) {
        let e4 = m2 - h2;
        return L(((t3 - h2) % e4 + e4) % e4 + h2, en);
      }
      return Math.min(m2, Math.max(h2, t3));
    };
    function eD(e3, t3 = C) {
      Q || (0, u.i)(eN, 0, { ...t3, velocity: 260 * e3 });
    }
    function eO(e3 = ef) {
      if (eg(null), null === e3 || e3.trim() === S(ed, en)) return true;
      let t3 = (function(e4, t4) {
        let r4 = e4.trim().replace(/,/g, ".").replace(/[×x](?=\s*[\d(.])/gi, "*").replace(/÷/g, "/").replace(/−/g, "-");
        if (!r4) return null;
        let i3 = r4.match(/\d*\.?\d+(?:e[+-]?\d+)?|[a-z%°]+|[-+*/()]|\S/gi);
        if (!i3) return null;
        let a2 = 0, n3, o2 = false, s2 = t4.map((e5) => e5.toLowerCase()), l2 = () => i3[a2];
        function u2() {
          let e5 = i3[a2++];
          if ("(" === e5) {
            let e6 = c2();
            return ")" !== i3[a2++] && (o2 = true), e6;
          }
          if ("-" === e5) return -u2();
          if ("+" === e5) return u2();
          if (void 0 === e5 || !/^\d*\.?\d+/.test(e5)) return o2 = true, 0;
          let r5 = Number(e5), d3 = l2();
          if (d3 && /^[a-z%°]+$/i.test(d3)) {
            a2++;
            let e6 = d3.toLowerCase(), r6 = "\xB0" === e6 ? "deg" : "deg" === e6 ? "\xB0" : e6, i4 = s2.includes(e6) ? s2.indexOf(e6) : s2.indexOf(r6);
            i4 < 0 ? o2 = true : n3 = t4[i4];
          }
          return r5;
        }
        function d2() {
          let e5 = u2();
          for (; "*" === l2() || "/" === l2(); ) {
            let t5 = i3[a2++], r5 = u2();
            e5 = "*" === t5 ? e5 * r5 : e5 / r5;
          }
          return e5;
        }
        function c2() {
          let e5 = d2();
          for (; "+" === l2() || "-" === l2(); ) {
            let t5 = i3[a2++], r5 = d2();
            e5 = "+" === t5 ? e5 + r5 : e5 - r5;
          }
          return e5;
        }
        let p3 = c2();
        return o2 || a2 !== i3.length || !Number.isFinite(p3) ? null : { value: p3, unit: n3 };
      })(e3, em);
      if (!t3) return ej(true), window.clearTimeout(eA.current), eA.current = window.setTimeout(() => ej(false), 900), eD(-1, E), false;
      let r3 = ek.current.unit;
      t3.unit && t3.unit !== r3 && (r3 = t3.unit, void 0 === j2 && ep(r3), R2?.(r3));
      let i2 = eI(t3.value);
      return !eo && (t3.value > m2 || t3.value < h2) && eD(t3.value > m2 ? 1 : -1), eR(i2, "type", true, r3), true;
    }
    let eX = (0, a.useCallback)((e3) => {
      let t3 = e_.current;
      e_.current = null, !t3 || (document.documentElement.style.removeProperty("cursor"), document.pointerLockElement === er.current && document.exitPointerLock?.(), eb(null), ev(null), t3.moved && (eM.current = true, e3 ? eR(t3.start, "scrub", true) : p2?.(ek.current.current, { source: "scrub", unit: ek.current.unit }), Q ? eN.jump(0) : (0, u.i)(eN, 0, C)));
    }, [eR, p2, Q, eN]);
    function eF(e3) {
      let t3 = e_.current;
      t3 && e3.pointerId === t3.id && eX(false);
    }
    (0, a.useEffect)(() => {
      if (!ey) return;
      let e3 = (e4) => {
        if ("Escape" === e4.key) {
          e4.preventDefault(), eX(true);
          return;
        }
        ("Shift" === e4.key || "Alt" === e4.key) && ev(e4.shiftKey ? "coarse" : e4.altKey ? "fine" : null);
      }, t3 = () => {
        e_.current?.locked && document.pointerLockElement !== er.current && eX(false);
      };
      return window.addEventListener("keydown", e3), window.addEventListener("keyup", e3), document.addEventListener("pointerlockchange", t3), () => {
        window.removeEventListener("keydown", e3), window.removeEventListener("keyup", e3), document.removeEventListener("pointerlockchange", t3);
      };
    }, [eX, ey]), (0, a.useEffect)(() => () => {
      document.documentElement.style.removeProperty("cursor");
    }, []);
    let eY = ef ?? S(ed, en), eW = `${S(ed, en)}${eh ? ` ${"%" === eh ? "percent" : "deg" === eh || "\xB0" === eh ? "degrees" : eh}` : ""}`, eK = "coarse" === ew ? `\xD7${S(ea / f2, 2)}` : "fine" === ew ? `\xD7${S(ei / f2, 3)}` : null, eG = "string" == typeof e2 || "number" == typeof e2;
    return (0, i.jsxs)("div", { className: [k().root, F2].filter(Boolean).join(" "), "data-size": O2, "data-disabled": Y2 ? "" : void 0, "data-scrubbing": ey ? "" : void 0, "data-invalid": ex ? "" : void 0, children: [(0, i.jsx)(d.PY1.div, { ref: et, className: k().shell, "aria-hidden": "true", style: { scaleX: eC, originX: eE }, children: es && (0, i.jsx)(d.PY1.span, { className: k().fill, style: { scaleX: eS } }) }), (0, i.jsx)("label", { ref: er, htmlFor: U, className: k().handle, "data-text": eG ? "" : void 0, onPointerDown: function(e3) {
      Y2 || e_.current || "mouse" === e3.pointerType && 0 !== e3.button || (e3.preventDefault(), null !== ef && eO(), e3.currentTarget.setPointerCapture(e3.pointerId), e_.current = { id: e3.pointerId, lastX: e3.clientX, travel: 0, raw: ek.current.current, start: ek.current.current, moved: false, locked: false, mouse: "mouse" === e3.pointerType }, e$.jump(e3.clientX), eT.jump(e3.clientY));
    }, onPointerMove: function(e3) {
      let t3 = e_.current;
      if (!t3 || e3.pointerId !== t3.id) return;
      let r3 = document.pointerLockElement === er.current, i2 = r3 ? e3.movementX : e3.clientX - t3.lastX;
      if (t3.lastX = e3.clientX, t3.travel += i2, !t3.moved) {
        if (3 > Math.abs(t3.travel)) return;
        if (t3.moved = true, ee.current?.blur(), document.documentElement.style.cursor = "ew-resize", X2 && t3.mouse && er.current?.requestPointerLock) try {
          let e4 = er.current.requestPointerLock();
          e4 instanceof Promise && e4.catch(() => {
          });
        } catch {
        }
        eb({ locked: false, mouse: t3.mouse });
      }
      if (r3 && !t3.locked && (t3.locked = true, eb({ locked: true, mouse: true })), r3) {
        let e4 = window.innerWidth;
        e$.jump(((e$.get() + i2) % e4 + e4) % e4);
      } else e$.jump(e3.clientX), eT.jump(e3.clientY);
      let a2 = e3.shiftKey ? ea : e3.altKey ? ei : f2, n3 = e3.shiftKey ? "coarse" : e3.altKey ? "fine" : null;
      if (n3 !== ew && ev(n3), t3.raw += i2 / w2 * a2, !eo) {
        let e4 = a2 / w2, r4 = t3.raw > m2 ? (t3.raw - m2) / e4 : t3.raw < h2 ? (t3.raw - h2) / e4 : 0;
        Math.abs(r4) > 90 && (t3.raw = (r4 > 0 ? m2 : h2) + 90 * Math.sign(r4) * e4), eN.jump(Q ? 0 : ((e5, t4 = N) => Math.sign(e5) * (1 - 1 / (0.55 * Math.abs(e5) / t4 + 1)) * t4)(Math.max(-90, Math.min(90, r4))));
      }
      let o2 = eI(Math.round(t3.raw / a2) * a2);
      o2 !== ek.current.current && eR(o2, "scrub", false);
    }, onPointerUp: eF, onPointerCancel: eF, onClick: function(e3) {
      if (eM.current) {
        eM.current = false, e3.preventDefault();
        return;
      }
      Y2 || (e3.preventDefault(), ee.current?.focus(), ee.current?.select());
    }, onDoubleClick: function() {
      Y2 || void 0 === I2 || eR(eI(I2), "reset", true);
    }, children: e2 }), (0, i.jsxs)(d.PY1.div, { className: k().body, style: { x: ez }, children: [(0, i.jsx)("input", { ...q2, ref: ee, id: U, className: k().input, type: "text", inputMode: "decimal", autoComplete: "off", spellCheck: false, role: "spinbutton", "aria-label": H2, "aria-valuenow": ed, "aria-valuemin": Number.isFinite(h2) ? h2 : void 0, "aria-valuemax": Number.isFinite(m2) ? m2 : void 0, "aria-valuetext": eW, "aria-invalid": ex || void 0, disabled: Y2, value: eY, onChange: (e3) => eg(e3.target.value), onFocus: function(e3) {
      K2?.(e3), e3.currentTarget.select();
    }, onBlur: function(e3) {
      G2?.(e3), eO();
    }, onKeyDown: function(e3) {
      if (V2?.(e3), !e3.defaultPrevented) {
        if ("ArrowUp" === e3.key || "ArrowDown" === e3.key) {
          var t3;
          let r3, i2;
          if (e3.preventDefault(), null !== ef && !eO()) return;
          t3 = "ArrowUp" === e3.key ? 1 : -1, r3 = e3.shiftKey ? ea : e3.altKey ? ei : f2, i2 = ek.current.current, !eo && (t3 > 0 && i2 >= m2 || t3 < 0 && i2 <= h2) ? eD(t3) : eR(eI(e3.shiftKey ? (t3 > 0 ? Math.floor(i2 / r3 + 1e-9) + 1 : Math.ceil(i2 / r3 - 1e-9) - 1) * r3 : i2 + t3 * r3), "key", true), requestAnimationFrame(() => ee.current?.select());
          return;
        }
        if ("Enter" === e3.key) {
          e3.preventDefault(), eO(), requestAnimationFrame(() => ee.current?.select());
          return;
        }
        "Escape" === e3.key && null !== ef && (e3.preventDefault(), e3.stopPropagation(), eg(null), requestAnimationFrame(() => ee.current?.select()));
      }
    } }), eh && (em.length > 1 ? (0, i.jsx)("button", { type: "button", className: k().unit, "data-cycle": "", disabled: Y2, onClick: function() {
      if (em.length < 2) return;
      let e3 = em[(em.indexOf(eh) + 1) % em.length];
      void 0 === j2 && ep(e3), R2?.(e3), ek.current = { ...ek.current, unit: e3 };
    }, "aria-label": `Unit: ${eh}. Change unit`, children: (0, i.jsx)(c.N, { mode: "popLayout", initial: false, children: (0, i.jsx)(d.PY1.span, { className: k().unitText, initial: Q ? { opacity: 0 } : { opacity: 0, y: 6, filter: "blur(2px)" }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: Q ? { opacity: 0 } : { opacity: 0, y: -6, filter: "blur(2px)", transition: { duration: M.instant } }, transition: Q ? { duration: M.instant } : _.snappy, children: eh }, eh) }) }) : (0, i.jsx)("span", { className: k().unit, "aria-hidden": "true", children: eh }))] }), (0, i.jsx)(c.N, { children: eK && !ey?.locked && (0, i.jsx)(d.PY1.span, { className: k().tag, "aria-hidden": "true", initial: Q ? { opacity: 0 } : { opacity: 0, y: 4, scale: 0.96 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, transition: { duration: M.instant } }, transition: Q ? { duration: M.instant } : _.snappy, children: eK }, "tag") }), Z && ey?.locked && (0, v.createPortal)((0, i.jsxs)(d.PY1.div, { className: k().cursor, style: { x: e$, y: eT }, "aria-hidden": "true", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: M.instant, ease: [...A.standard] }, children: [(0, i.jsx)("svg", { width: "26", height: "16", viewBox: "0 0 26 16", className: k().cursorGlyph, children: (0, i.jsx)("path", { d: "M1.5 8 L7.5 2.5 V6 H18.5 V2.5 L24.5 8 L18.5 13.5 V10 H7.5 V13.5 Z" }) }), (0, i.jsx)(c.N, { children: eK && (0, i.jsx)(d.PY1.span, { className: k().multiplier, initial: Q ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: -2 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, transition: { duration: M.instant } }, transition: Q ? { duration: M.instant } : _.snappy, children: eK }, "multiplier") })] }), document.body)] });
  });
  var R = r(67752), I = r(66138), D = r.n(I);
  let O = { x: 0, y: 0, w: 176, h: 132, rotate: 0, radius: 18, opacity: 100 }, X = { x: "X", y: "Y", w: "Width", h: "Height", rotate: "Rotation", radius: "Corner radius", opacity: "Opacity" }, F = (0, R.jW)("terracotta-waves"), Y = { size: 14, strokeWidth: 1.75, "aria-hidden": true }, { spring: W, duration: K, ease: G, blur: V } = x.T;
  function H() {
    let e2 = !!(0, o.I)(), [t2, r2] = (0, a.useState)(O), [h2, m2] = (0, a.useState)("px"), [g2, v2] = (0, a.useState)("Drag a label to scrub, or type math like 120/2. Shift moves in tens, Alt in tenths."), x2 = (0, a.useRef)(null), j2 = (0, a.useRef)(null), k2 = { x: (0, s.d)(O.x), y: (0, s.d)(O.y), w: (0, s.d)(O.w), h: (0, s.d)(O.h), rotate: (0, s.d)(O.rotate), radius: (0, s.d)(O.radius), opacity: (0, s.d)(1) }, _2 = (0, l.G)(() => `${k2.radius.get()}px`), M2 = (0, l.G)(() => `translate3d(${k2.x.get()}px, ${k2.y.get()}px, 0) rotate(${k2.rotate.get()}deg)`), A2 = (e3, r3, i2 = t2) => "%" === r3 ? e3 / 100 * Math.min(i2.w, i2.h) : e3, N2 = Object.keys(O).every((e3) => t2[e3] === O[e3]) && "px" === h2;
    function P2(t3, r3, i2) {
      let a2 = "radiusPx" === t3 ? k2.radius : "opacity" === t3 ? k2.opacity : k2[t3], n2 = "opacity" === t3 ? r3 / 100 : r3;
      if ("rotate" === t3 && !i2 && !e2) {
        let e3 = a2.get(), t4 = ((n2 - e3) % 360 + 540) % 360 - 180;
        (0, u.i)(a2, e3 + t4, W.morph).then(() => a2.jump(n2));
        return;
      }
      i2 || e2 ? a2.jump(n2) : (0, u.i)(a2, n2, W.morph);
    }
    function C2(e3) {
      let r3 = j2.current;
      r3 && r3.id === e3.pointerId && (j2.current = null, (t2.x !== r3.from.x || t2.y !== r3.from.y) && v2(`Moved the frame to ${t2.x}, ${t2.y}`));
    }
    let E2 = (e3) => ({ value: t2[e3], onValueChange: (i2, a2) => {
      let n2, o2;
      return r2(n2 = { ...t2, [e3]: i2 }), o2 = "scrub" === a2.source, void ("radius" === e3 ? P2("radiusPx", A2(i2, a2.unit, n2), o2) : P2(e3, i2, o2), ("w" === e3 || "h" === e3) && P2("radiusPx", A2(n2.radius, h2, n2), o2));
    }, onValueCommit: (t3, r3) => {
      let i2, a2;
      return i2 = "rotate" === e3 ? "\xB0" : "opacity" === e3 ? "%" : "radius" === e3 ? ` ${r3.unit}` : " px", a2 = "scrub" === r3.source ? "Scrubbed" : "type" === r3.source ? "Typed" : "reset" === r3.source ? "Reset" : "Stepped", void v2(`${a2} ${X[e3].toLowerCase()} to ${t3}${i2}`);
    }, resetValue: O[e3] }), z2 = e2 ? { opacity: 0 } : { opacity: 0, y: "0.3em", filter: `blur(${V.soft}px)` };
    return (0, i.jsx)("div", { className: D().demo, children: (0, i.jsxs)("div", { className: D().layout, children: [(0, i.jsxs)("div", { className: D().stage, ref: x2, children: [(0, i.jsx)("div", { className: D().origin, children: (0, i.jsx)(d.PY1.div, { className: D().frame, style: { width: k2.w, height: k2.h, transform: M2, borderRadius: _2, opacity: k2.opacity }, onPointerDown: function(e3) {
      (0 === e3.button || "mouse" !== e3.pointerType) && (e3.currentTarget.setPointerCapture(e3.pointerId), j2.current = { id: e3.pointerId, x: e3.clientX, y: e3.clientY, from: { x: t2.x, y: t2.y } });
    }, onPointerMove: function(e3) {
      let t3 = j2.current, i2 = x2.current;
      if (!t3 || t3.id !== e3.pointerId || !i2) return;
      let a2 = Math.min(240, Math.round(i2.offsetWidth / 2)), n2 = Math.min(160, Math.round(i2.offsetHeight / 2)), o2 = Math.max(-a2, Math.min(a2, Math.round(t3.from.x + e3.clientX - t3.x))), s2 = Math.max(-n2, Math.min(n2, Math.round(t3.from.y + e3.clientY - t3.y)));
      r2((e4) => ({ ...e4, x: o2, y: s2 })), k2.x.jump(o2), k2.y.jump(s2);
    }, onPointerUp: C2, onPointerCancel: C2, role: "img", "aria-label": `${F.alt}. ${t2.w} by ${t2.h} px, rotated ${t2.rotate} degrees`, children: (0, i.jsx)(n.default, { src: F.src, alt: "", fill: true, sizes: "260px", draggable: false, className: D().art }) }) }), (0, i.jsxs)("span", { className: D().readout, "aria-hidden": "true", children: [t2.w, " \xD7 ", t2.h] })] }), (0, i.jsxs)("div", { className: D().panel, role: "group", "aria-label": "Frame properties", children: [(0, i.jsxs)("div", { className: D().row, children: [(0, i.jsx)(T, { label: "X", "aria-label": "X position", unit: "px", min: -240, max: 240, ...E2("x") }), (0, i.jsx)(T, { label: "Y", "aria-label": "Y position", unit: "px", min: -160, max: 160, ...E2("y") })] }), (0, i.jsxs)("div", { className: D().row, children: [(0, i.jsx)(T, { label: "W", "aria-label": "Width", unit: "px", min: 24, max: 260, ...E2("w") }), (0, i.jsx)(T, { label: "H", "aria-label": "Height", unit: "px", min: 24, max: 220, ...E2("h") })] }), (0, i.jsxs)("div", { className: D().row, children: [(0, i.jsx)(T, { label: (0, i.jsx)(p.A, { ...Y }), "aria-label": "Rotation", unit: "\xB0", min: 0, max: 360, wrap: true, ...E2("rotate"), track: false }), (0, i.jsx)(T, { label: (0, i.jsx)(f, { ...Y }), "aria-label": "Corner radius", min: 0, max: "%" === h2 ? 50 : 120, unit: h2, units: ["px", "%"], onUnitChange: function(e3) {
      let i2 = A2(t2.radius, h2), a2 = Math.min(t2.w, t2.h), n2 = "%" === e3 ? Math.round(i2 / a2 * 1e3) / 10 : Math.round(10 * i2) / 10;
      m2(e3), r2((t3) => ({ ...t3, radius: Math.min("%" === e3 ? 50 : 120, n2) })), v2(`Corner radius now in ${"%" === e3 ? "percent" : "pixels"}`);
    }, ...E2("radius") })] }), (0, i.jsx)(T, { label: (0, i.jsx)(y, { ...Y }), "aria-label": "Opacity", unit: "%", min: 0, max: 100, ...E2("opacity") })] }), (0, i.jsxs)("div", { className: D().footer, children: [(0, i.jsx)("p", { className: D().srOnly, role: "status", "aria-live": "polite", children: (0, i.jsx)(c.N, { mode: "popLayout", initial: false, children: (0, i.jsx)(d.PY1.span, { className: D().statusText, initial: z2, animate: { opacity: 1, y: "0em", filter: "blur(0px)" }, exit: { ...z2, transition: { duration: K.instant } }, transition: e2 ? { duration: K.instant } : { duration: K.standard, ease: [...G.enter] }, children: g2 }, g2) }) }), (0, i.jsxs)(w.A, { variant: "secondary", size: "sm", onClick: function() {
      r2(O), m2("px"), Object.keys(O).forEach((e3) => "radius" === e3 ? P2("radiusPx", O.radius, false) : P2(e3, O[e3], false)), v2("Frame reset");
    }, disabled: N2, children: [(0, i.jsx)(b.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Reset frame"] })] })] }) });
  }
  let q = H;
}

__m(__module,__exports,__require);
}