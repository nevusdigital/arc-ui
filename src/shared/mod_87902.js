function(__module,__exports,__require){
"use strict";
function __m(e, t, A) {
  "use strict";
  A.r(t), A.d(t, { CarouselDemo: () => S });
  var r = A(95155), a = A(5772), n = A(12115), i = A(18310), l = A(28245), s = A(6900), o = A(92171), u = A(25354), c = A(80642), d = A(55809), g = A(79267), f = A(36619), p = A(78780), h = A(76721), m = A(7770), b = A(73784), x = A.n(b);
  let E = (e2, t2, A2) => Math.min(A2, Math.max(t2, e2)), C = (e2, t2) => e2 * t2 * 0.55 / (t2 + 0.55 * e2), y = (e2, t2) => e2 * t2 / (0.55 * Math.max(1, t2 - e2)), v = (e2, t2) => `${e2 + 1} of ${t2}`, w = () => () => {
  }, Q = { opacity: 0, scale: 0.6, filter: `blur(${m.T.blur.subtle}px)` }, I = { opacity: 1, scale: 1, filter: "blur(0px)" }, _ = { ...Q, transition: { duration: m.T.duration.fast, ease: [...m.T.ease.standard] } }, D = { ...m.T.spring.snappy, opacity: { duration: m.T.duration.fast, ease: [...m.T.ease.enter] }, filter: { duration: m.T.duration.fast, ease: [...m.T.ease.enter] } };
  function B({ label: e2, children: t2, index: A2, defaultIndex: a2 = 0, onIndexChange: d2, slideSize: b2 = "min(80cqw, 340px)", slideLabel: P2 = v, interval: k2, autoplay: F2 = false, className: R2 }) {
    let U2 = n.Children.toArray(t2), G2 = U2.length, T2 = Math.max(0, G2 - 1), X2 = (0, n.useId)(), S2 = (0, i.I)() ?? false, N = (0, n.useSyncExternalStore)(w, () => true, () => false), [Y, K] = (0, n.useState)(() => E(a2, 0, T2)), z = E(A2 ?? Y, 0, T2), [L] = (0, n.useState)(z), [H, O] = (0, n.useState)(F2), [Z, W] = (0, n.useState)(false), [$, V] = (0, n.useState)(false), [q, J] = (0, n.useState)(false), [ee, et] = (0, n.useState)(true), [eA, er] = (0, n.useState)(true), [ea, en] = (0, n.useState)(""), ei = (0, l.d)(0), el = (0, l.d)(z), es = (0, n.useMemo)(() => Array.from({ length: G2 }, () => (0, s.OQ)(0)), [G2]), eo = (0, n.useRef)(null), eu = (0, n.useRef)(null), ec = (0, n.useRef)(null), ed = (0, n.useRef)(null), eg = (0, n.useRef)([]), ef = (0, n.useRef)({ step: 0, width: 0 }), ep = (0, n.useRef)(z), eh = (0, n.useRef)(null), em = (0, n.useRef)(null), eb = (0, n.useRef)({ active: false, raw: 0, timer: 0 }), ex = (0, n.useRef)(false), eE = !!k2 && G2 > 1 && !(N && S2), eC = eE && H && !Z && !$ && !q && ee && eA, ey = () => ({ min: -T2 * ef.current.step, max: 0 }), ev = (e3) => {
      let { min: t3, max: A3 } = ey(), r2 = ef.current.width || 1;
      return e3 > A3 ? A3 + C(e3 - A3, r2) : e3 < t3 ? t3 - C(t3 - e3, r2) : e3;
    }, ew = (e3) => {
      let { min: t3, max: A3 } = ey(), r2 = ef.current.width || 1;
      return e3 > A3 ? A3 + y(e3 - A3, r2) : e3 < t3 ? t3 - y(t3 - e3, r2) : e3;
    };
    function eQ(e3, t3 = 0) {
      let { step: A3 } = ef.current;
      if (eh.current?.stop(), eh.current = null, A3) {
        if (S2) return void ei.jump(-e3 * A3);
        eh.current = (0, o.i)(ei, -e3 * A3, { ...m.T.spring.smooth, velocity: t3 });
      }
    }
    function eI(e3, { velocity: t3 = 0, announce: r2 = true } = {}) {
      let a3 = E(e3, 0, T2);
      ep.current = a3, eQ(a3, t3), a3 !== z && (void 0 === A2 && K(a3), d2?.(a3), r2 && en(P2(a3, G2)));
    }
    let e_ = (0, n.useEffectEvent)(() => {
      let e3 = ec.current, t3 = eu.current, [A3, r2] = Array.from(e3?.children ?? []);
      if (!e3 || !t3 || !A3) return;
      let a3 = (e4) => {
        let t4 = e4.getBoundingClientRect();
        return t4.left + t4.width / 2;
      }, n2 = r2 ? a3(r2) - a3(A3) : A3.offsetWidth, i2 = n2 !== ef.current.step;
      ef.current = { step: n2, width: t3.clientWidth }, e3.dataset.measured = "", i2 && !em.current && (eh.current?.stop(), eh.current = null, ei.jump(-ep.current * n2), el.set(ep.current));
    });
    (0, n.useLayoutEffect)(() => {
      e_();
      let e3 = eu.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => e_());
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, n.useEffect)(() => ei.on("change", (e3) => {
      let { step: t3 } = ef.current;
      if (!t3) return;
      let A3 = -e3 / t3;
      el.set(A3), es.forEach((e4, t4) => {
        t4 !== ep.current && Math.abs(A3 - t4) >= 1 && 0 !== e4.get() && e4.jump(0);
      });
    }), [ei, el, es]);
    let eD = (0, n.useEffectEvent)((e3) => {
      ep.current !== e3 && (ep.current = e3, eQ(e3));
    });
    (0, n.useEffect)(() => {
      eD(z);
    }, [z]);
    let eB = (0, n.useEffectEvent)(() => eI(z >= T2 ? 0 : z + 1, { announce: false }));
    (0, n.useEffect)(() => {
      if (!eC || !k2) return;
      let e3 = es[z];
      if (!e3) return;
      let t3 = (0, o.i)(e3, 1, { duration: (1 - e3.get()) * k2 / 1e3, ease: "linear", onComplete: () => eB() });
      return () => t3.stop();
    }, [eC, z, k2, es]), (0, n.useEffect)(() => {
      let e3 = eo.current;
      if (!k2 || !e3) return;
      let t3 = "u" < typeof IntersectionObserver ? null : new IntersectionObserver(([e4]) => {
        e4 && et(e4.isIntersecting);
      });
      t3?.observe(e3);
      let A3 = () => er("hidden" !== document.visibilityState);
      return document.addEventListener("visibilitychange", A3), () => {
        t3?.disconnect(), document.removeEventListener("visibilitychange", A3);
      };
    }, [k2]);
    let eM = (0, n.useEffectEvent)((e3) => {
      let t3 = eb.current;
      G2 < 2 || em.current || !ef.current.step || !t3.active && Math.abs(e3.deltaX) <= Math.abs(e3.deltaY) || (e3.preventDefault(), t3.active || (t3.active = true, eh.current?.stop(), eh.current = null, t3.raw = ew(ei.get())), t3.raw -= e3.deltaX * (1 === e3.deltaMode ? 16 : 1), ei.set(ev(t3.raw)), window.clearTimeout(t3.timer), t3.timer = window.setTimeout(() => {
        t3.active = false, eI(Math.round(-ei.get() / ef.current.step), { velocity: ei.getVelocity() });
      }, 120));
    });
    function ej(e3, t3) {
      let A3 = em.current;
      if (!A3 || A3.pointer !== e3.pointerId) return;
      em.current = null;
      let { step: r2 } = ef.current;
      if ("x" === A3.locked) {
        ex.current = true, J(false);
        let a4 = t3 ? 0 : (function(e4, t4) {
          let A4 = e4.filter(([e5]) => t4 - e5 <= 90);
          if (A4.length < 2 || t4 - A4[A4.length - 1][0] > 50) return 0;
          let [r3, a5] = A4[0], [n3, i3] = A4[A4.length - 1];
          return n3 > r3 ? (i3 - a5) / ((n3 - r3) / 1e3) : 0;
        })(A3.samples, e3.timeStamp), n2 = Math.round(-(ei.get() + ((e4, t4 = 0.995) => e4 / 1e3 * t4 / (1 - t4))(a4)) / r2);
        if (Math.abs(a4) > 360) {
          let e4 = a4 < 0 ? 1 : -1;
          (n2 - A3.from) * e4 < 1 && (n2 = A3.from + e4);
        }
        let { min: i2, max: l2 } = ey(), s2 = ei.get();
        eI(n2, { velocity: s2 >= i2 && s2 <= l2 ? a4 : ei.getVelocity() });
      } else if (A3.caught) ex.current = true, eI(Math.round(-ei.get() / r2));
      else if (t3 || null !== A3.locked) t3 && eI(ep.current);
      else {
        var a3;
        let t4, A4 = (a3 = e3.clientX, (t4 = Array.from(ec.current?.children ?? []).findIndex((e4) => {
          let t5 = e4.getBoundingClientRect();
          return a3 >= t5.left && a3 <= t5.right;
        })) < 0 ? null : t4);
        null !== A4 && A4 !== ep.current && (ex.current = true, eI(A4));
      }
    }
    return (0, n.useEffect)(() => {
      let e3 = eu.current, t3 = eb.current;
      if (!e3) return;
      let A3 = (e4) => eM(e4);
      return e3.addEventListener("wheel", A3, { passive: false }), () => {
        e3.removeEventListener("wheel", A3), window.clearTimeout(t3.timer);
      };
    }, []), (0, r.jsxs)("section", { ref: eo, className: [x().root, R2].filter(Boolean).join(" "), style: { "--carousel-slide": b2, "--carousel-start": L }, "aria-roledescription": "carousel", "aria-label": e2, onKeyDown: function(e3) {
      if (e3.altKey || e3.ctrlKey || e3.metaKey || G2 < 2) return;
      let t3 = e3.target;
      if (t3.closest("input, textarea, select, [contenteditable]")) return;
      let A3 = ep.current, r2 = "ArrowLeft" === e3.key ? A3 - 1 : "ArrowRight" === e3.key ? A3 + 1 : "Home" === e3.key ? 0 : "End" === e3.key ? T2 : null;
      if (null === r2) return;
      e3.preventDefault();
      let a3 = E(r2, 0, T2);
      eI(a3), "tab" === t3.getAttribute("role") ? eg.current[a3]?.focus({ preventScroll: true }) : ec.current?.contains(t3) && eu.current?.focus({ preventScroll: true });
    }, onFocus: (e3) => V(e3.target !== ed.current && e3.target.matches(":focus-visible")), onBlur: (e3) => {
      e3.currentTarget.contains(e3.relatedTarget) || V(false);
    }, children: [(0, r.jsx)("div", { ref: eu, className: x().viewport, role: "group", "aria-label": "Slides", tabIndex: 0, "data-dragging": q || void 0, onPointerDown: function(e3) {
      if (G2 < 2 || em.current || !ef.current.step || "mouse" === e3.pointerType && 0 !== e3.button) return;
      ex.current = false;
      let t3 = null !== eh.current && ei.isAnimating() && Math.abs(ei.get() + ep.current * ef.current.step) > 12;
      t3 && (eh.current?.stop(), eh.current = null), em.current = { pointer: e3.pointerId, startX: e3.clientX, startY: e3.clientY, origin: 0, from: ep.current, locked: null, caught: t3, samples: [] };
    }, onPointerMove: function(e3) {
      let t3 = em.current;
      if (t3 && t3.pointer === e3.pointerId) {
        if (!t3.locked) {
          let A3 = e3.clientX - t3.startX, r2 = e3.clientY - t3.startY;
          if (6 > Math.abs(A3) && 6 > Math.abs(r2)) return;
          if (Math.abs(r2) > Math.abs(A3)) {
            t3.locked = "y";
            return;
          }
          t3.locked = "x", eh.current?.stop(), eh.current = null, t3.startX = e3.clientX, t3.origin = ew(ei.get()), e3.currentTarget.setPointerCapture(e3.pointerId), J(true);
        }
        "x" === t3.locked && (ei.set(ev(t3.origin + e3.clientX - t3.startX)), t3.samples.push([e3.timeStamp, e3.clientX]), t3.samples.length > 16 && t3.samples.shift());
      }
    }, onPointerUp: (e3) => ej(e3, false), onPointerCancel: (e3) => ej(e3, true), onPointerEnter: (e3) => {
      "mouse" === e3.pointerType && W(true);
    }, onPointerLeave: () => W(false), onClickCapture: (e3) => {
      ex.current && (e3.preventDefault(), e3.stopPropagation(), ex.current = false);
    }, onDragStart: (e3) => e3.preventDefault(), children: (0, r.jsx)(u.PY1.div, { ref: ec, className: x().track, style: { x: ei }, children: U2.map((e3, t3) => (0, r.jsx)(M, { id: `${X2}-slide-${t3}`, index: t3, progress: el, active: t3 === z, label: P2(t3, G2), children: e3 }, (0, n.isValidElement)(e3) && null != e3.key ? e3.key : t3)) }) }), G2 > 1 && (0, r.jsxs)("div", { className: x().controls, children: [eE && (0, r.jsx)("button", { ref: ed, type: "button", className: x().control, "aria-label": H ? "Pause slide rotation" : "Start slide rotation", onClick: function() {
      let e3 = es[z];
      H ? (O(false), e3 && (S2 ? e3.jump(0) : (0, o.i)(e3, 0, { duration: m.T.duration.standard, ease: [...m.T.ease.standard] }))) : O(true);
    }, children: (0, r.jsx)("span", { className: x().iconSlot, children: (0, r.jsx)(c.N, { initial: false, children: (0, r.jsx)(u.PY1.span, { className: x().icon, initial: S2 ? { opacity: 0 } : Q, animate: I, exit: S2 ? { opacity: 0, transition: { duration: m.T.duration.instant } } : _, transition: S2 ? { duration: m.T.duration.instant } : D, children: H ? (0, r.jsx)(g.A, { size: 15, strokeWidth: 1.75, fill: "currentColor", "aria-hidden": "true" }) : (0, r.jsx)(f.A, { size: 15, strokeWidth: 1.75, fill: "currentColor", "aria-hidden": "true" }) }, H ? "pause" : "play") }) }) }), (0, r.jsx)("div", { className: x().tabs, role: "tablist", "aria-label": "Choose a slide", children: U2.map((e3, t3) => (0, r.jsx)(j, { index: t3, last: T2, progress: el, drain: es[t3], selected: t3 === z, label: P2(t3, G2), controls: `${X2}-slide-${t3}`, tabRef: (e4) => {
      eg.current[t3] = e4;
    }, onSelect: () => eI(t3) }, t3)) }), (0, r.jsxs)("div", { className: x().arrows, children: [(0, r.jsx)("button", { type: "button", className: x().control, "aria-label": "Previous slide", "aria-disabled": 0 === z, onClick: () => {
      ep.current > 0 && eI(ep.current - 1);
    }, children: (0, r.jsx)(p.A, { size: 18, strokeWidth: 1.75, "aria-hidden": "true" }) }), (0, r.jsx)("button", { type: "button", className: x().control, "aria-label": "Next slide", "aria-disabled": z === T2, onClick: () => {
      ep.current < T2 && eI(ep.current + 1);
    }, children: (0, r.jsx)(h.A, { size: 18, strokeWidth: 1.75, "aria-hidden": "true" }) })] })] }), (0, r.jsx)("span", { className: x().visuallyHidden, "aria-live": "polite", "aria-atomic": "true", children: ea })] });
  }
  function M({ id: e2, index: t2, progress: A2, active: a2, label: n2, children: i2 }) {
    let l2 = (0, d.G)(A2, [t2 - 1, t2, t2 + 1], [0.9, 1, 0.9]), s2 = (0, d.G)(A2, [t2 - 1, t2, t2 + 1], [0.5, 1, 0.5]);
    return (0, r.jsx)(u.PY1.div, { id: e2, className: x().slide, role: "tabpanel", "aria-roledescription": "slide", "aria-label": n2, inert: !a2, style: { scale: l2, opacity: s2 }, children: i2 });
  }
  function j({ index: e2, last: t2, progress: A2, drain: a2, selected: n2, label: i2, controls: l2, tabRef: s2, onSelect: o2 }) {
    let c2 = (0, d.G)(A2, (A3) => Math.max(0, 1 - Math.abs(E(A3, 0, t2) - e2))), g2 = (0, d.G)(c2, (e3) => 6 + 16 * e3);
    return (0, r.jsx)("button", { ref: s2, type: "button", role: "tab", className: x().tab, "aria-selected": n2, "aria-controls": l2, "aria-label": i2, tabIndex: n2 ? 0 : -1, onClick: o2, children: (0, r.jsxs)(u.PY1.span, { className: x().dot, style: { width: g2 }, "aria-hidden": "true", children: [(0, r.jsx)(u.PY1.span, { className: x().dotFill, style: { opacity: c2 } }), (0, r.jsx)(u.PY1.span, { className: x().dotDrain, style: { scaleX: a2 } })] }) });
  }
  var P = A(30804), k = A(16725), F = A(97577), R = A(24267), U = A(23847), G = A(65705), T = A.n(G);
  let X = [{ id: "chair", name: "Oak lounge chair", detail: "Woven seat on a solid oak frame", price: "$1,450", image: P.A, alt: "A woven oak lounge chair with a sheepskin and linen cushion on a concrete floor", position: "50% 62%" }, { id: "lamp", name: "Opal table lamp", detail: "Hand-blown glass shade, dimmable", price: "$640", image: k.A, alt: "A white mushroom table lamp glowing beside books and a small vase", position: "50% 50%" }, { id: "throw", name: "Stonewashed linen throw", detail: "Oat, 130 \xD7 180 cm", price: "$180", image: F.A, alt: "Folded natural linen throws with fringed edges in soft window light", position: "50% 55%" }, { id: "carafe", name: "Ribbed glass carafe", detail: "Mouth-blown, holds 1 liter", price: "$95", image: R.A, alt: "A hand pouring water from a ribbed glass carafe into tumblers", position: "50% 55%" }, { id: "print", name: "Sea at dusk", detail: "Gicl\xE9e print on cotton rag, 50 \xD7 50 cm", price: "$220", image: U.A, alt: "A calm sea at dusk with a low island on the horizon", position: "50% 50%" }];
  function S() {
    return (0, r.jsx)("div", { className: T().demo, children: (0, r.jsx)(B, { label: "Furniture and objects", defaultIndex: 1, slideSize: "min(74cqw, 256px)", interval: 5e3, slideLabel: (e2, t2) => `${X[e2].name}, ${e2 + 1} of ${t2}`, children: X.map((e2, t2) => (0, r.jsxs)("article", { className: T().card, children: [(0, r.jsx)("div", { className: T().photo, children: (0, r.jsx)(a.default, { src: e2.image, alt: e2.alt, fill: true, sizes: "(max-width: 480px) 74vw, 256px", priority: t2 < 2, placeholder: "blur", style: { objectPosition: e2.position }, draggable: false }) }), (0, r.jsxs)("div", { className: T().caption, children: [(0, r.jsxs)("div", { className: T().text, children: [(0, r.jsx)("h4", { className: T().name, children: e2.name }), (0, r.jsx)("p", { className: T().detail, children: e2.detail })] }), (0, r.jsx)("span", { className: T().price, children: e2.price })] })] }, e2.id)) }) });
  }
}

__m(__module,__exports,__require);
}