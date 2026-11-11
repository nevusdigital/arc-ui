function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.r(t), r.d(t, { PhotoGridDemo: () => ee, default: () => et });
  var n = r(95155), i = r(12115), a = r(5772), o = r(18310), l = r(80642), s = r(25354), c = r(47650), u = r(28245), d = r(92171), h = r(55809), p = r(7890), g = r(57700), f = r(54757), m = r(31966), x = r(78780), y = r(76721), v = r(7770), _ = r(89358), b = r.n(_);
  let w = [5, 3, 2], j = "(max-width: 760px) 50vw, 360px", M = 24, k = { dx: 0, dy: 0, k: 1, t: 0, r: 0, b: 0, l: 0 }, { spring: P, duration: A, ease: N, blur: S } = v.T, R = { ...P.smooth, visualDuration: 0.34 }, T = { duration: A.fast }, C = (e2, t2, r2) => Math.min(r2, Math.max(t2, e2)), E = (e2, t2, r2) => e2 + (t2 - e2) * r2, z = (e2, t2) => (1 - 1 / (0.55 * e2 / t2 + 1)) * t2, $ = (e2, t2, r2) => e2 < 0 ? -z(-e2 * r2, r2) / r2 : e2 > t2 ? t2 + z((e2 - t2) * r2, r2) / r2 : e2, L = (e2, t2) => 1 - 0.42 * C(e2 / Math.max(t2, 1), 0, 1), O = (...e2) => e2.filter(Boolean).join(" ");
  function Y(e2, t2, r2) {
    let n2 = Math.max(t2 - 24, 1), i2 = Math.max(r2 - 24, 1), a2 = e2.width / e2.height, o2 = n2, l2 = n2 / a2;
    return l2 > i2 && (l2 = i2, o2 = i2 * a2), { x: (t2 - o2) / 2, y: (r2 - l2) / 2, w: o2, h: l2 };
  }
  function D(e2, t2) {
    let r2 = e2[e2.length - 1], n2 = r2 && e2.find((e3) => r2.t - e3.t <= 100);
    if (!r2 || !n2 || r2.t === n2.t || t2 - r2.t > 80) return { x: 0, y: 0 };
    let i2 = (r2.t - n2.t) / 1e3;
    return { x: (r2.x - n2.x) / i2, y: (r2.y - n2.y) / i2 };
  }
  let I = (e2) => e2 ? { opacity: 0 } : { opacity: 0, y: "0.3em", filter: `blur(${S.soft}px)` }, B = { opacity: 1, y: "0em", filter: "blur(0px)" };
  function X({ text: e2, reduced: t2 }) {
    return (0, n.jsx)("span", {
      className: b().swap,
      children: (0, n.jsx)(l.N, {
        mode: "popLayout",
        initial: false,
        children: (0, n.jsx)(
          s.PY1.span,
          {
            className: b().swapText,
            initial: I(t2),
            animate: B,
            exit: { ...I(t2), transition: t2 ? T : { duration: A.instant } },
            transition: t2 ? T : { duration: A.standard, ease: [...N.enter] },
            children: e2
          },
          e2
        )
      })
    });
  }
  function G({ children: e2, reduced: t2 }) {
    let r2 = (0, i.useRef)(null), a2 = (0, u.d)("auto");
    return (0, i.useEffect)(() => {
      let e3 = r2.current, n2 = e3?.parentElement;
      if (!e3 || !n2 || "u" < typeof ResizeObserver) return;
      let i2 = false, o2 = new ResizeObserver(() => {
        let r3 = e3.offsetWidth;
        if (!i2 || t2 || !r3) {
          i2 = r3 > 0, a2.jump(r3 || "auto");
          return;
        }
        n2.dataset.morphing = "", (0, d.i)(a2, r3, {
          ...P.morph,
          onComplete: () => {
            delete n2.dataset.morphing;
          }
        });
      });
      return o2.observe(e3), () => o2.disconnect();
    }, [t2, a2]), (0, n.jsx)(s.PY1.span, {
      className: b().morph,
      style: { width: a2 },
      children: (0, n.jsx)("span", {
        ref: r2,
        className: b().morphInner,
        children: e2
      })
    });
  }
  function F({ value: e2, reduced: t2 }) {
    let r2, [a2, o2] = (0, i.useState)({ value: e2, direction: 1 });
    a2.value !== e2 && o2({ value: e2, direction: e2 > a2.value ? 1 : -1 });
    let c2 = String(e2).split(""), u2 = {
      enter: (e3) => r2 ? { opacity: 0 } : { opacity: 0, y: `${0.62 * e3}em`, filter: `blur(${S.subtle}px)` },
      center: {
        opacity: 1,
        y: "0em",
        filter: "blur(0px)",
        transition: (r2 = t2) ? T : {
          ...P.snappy,
          opacity: { duration: A.fast },
          filter: { duration: A.fast }
        }
      },
      exit: (e3) => r2 ? { opacity: 0, transition: T } : {
        opacity: 0,
        y: `${-0.62 * e3}em`,
        filter: `blur(${S.subtle}px)`,
        transition: { duration: A.fast, ease: [...N.standard] }
      }
    };
    return (0, n.jsx)("span", {
      className: b().roll,
      children: (0, n.jsx)(l.N, {
        initial: false,
        custom: a2.direction,
        children: c2.map(
          (e3, t3) => (0, n.jsx)(
            s.PY1.span,
            {
              className: b().place,
              custom: a2.direction,
              variants: u2,
              initial: "enter",
              animate: "center",
              exit: "exit",
              children: (0, n.jsx)(l.N, {
                mode: "popLayout",
                initial: false,
                custom: a2.direction,
                children: (0, n.jsx)(
                  s.PY1.span,
                  {
                    className: b().digit,
                    custom: a2.direction,
                    variants: u2,
                    initial: "enter",
                    animate: "center",
                    exit: "exit",
                    children: e3
                  },
                  e3
                )
              })
            },
            c2.length - t3
          )
        )
      })
    });
  }
  function H({ columns: e2 }) {
    let t2 = e2 > 2 ? 1 : 2, r2 = (14 - t2 * (e2 - 1)) / e2, i2 = Array.from({ length: e2 * e2 }, (n2, i3) => ({
      x: 1 + i3 % e2 * (r2 + t2),
      y: 1 + Math.floor(i3 / e2) * (r2 + t2)
    }));
    return (0, n.jsx)("svg", {
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      fill: "currentColor",
      "aria-hidden": "true",
      children: i2.map(
        ({ x: t3, y: i3 }) => (0, n.jsx)(
          "rect",
          { x: t3, y: i3, width: r2, height: r2, rx: e2 > 3 ? 0.5 : 1.25 },
          `${t3}-${i3}`
        )
      )
    });
  }
  function W({ photo: e2 }) {
    let [t2, r2] = (0, i.useState)(false);
    return (0, n.jsx)("img", {
      className: b().sharp,
      "data-loaded": t2 || void 0,
      src: e2.src,
      srcSet: e2.srcSet,
      sizes: "(max-width: 760px) 100vw, 720px",
      alt: "",
      draggable: false,
      decoding: "async",
      onLoad: () => r2(true)
    });
  }
  function V({ photo: e2, index: t2, wide: r2, geometry: i2 }) {
    let a2 = (0, h.G)(i2, (e3) => e3.x[t2] ?? 0), o2 = (0, h.G)(i2, (e3) => `inset(0px ${e3.c[t2] ?? 0}px round 4px)`), l2 = (0, h.G)(i2, (e3) => e3.o[t2] ?? 0.5);
    return (0, n.jsx)(s.PY1.span, {
      className: b().thumb,
      style: { width: r2, x: a2, clipPath: o2, opacity: l2 },
      children: (0, n.jsx)("img", {
        src: e2.src,
        srcSet: e2.srcSet,
        sizes: j,
        alt: "",
        draggable: false,
        decoding: "async"
      })
    });
  }
  function q({
    photos: e2,
    title: t2,
    zoomLevels: r2 = w,
    defaultColumns: a2 = 3,
    onColumnsChange: v2,
    defaultFavorites: _2,
    onFavoriteChange: I2,
    onViewerChange: B2,
    className: J2
  }) {
    let K2 = (0, i.useId)(), U2 = (0, o.I)() ?? false, Z2 = e2.length, Q2 = Z2 - 1, ee2 = (0, i.useMemo)(
      () => [...new Set(r2)].filter((e10) => e10 > 0).sort((e10, t3) => t3 - e10),
      [r2]
    ), [et2, er] = (0, i.useState)(
      () => ee2.includes(a2) ? a2 : ee2[Math.floor(ee2.length / 2)] ?? 3
    ), [en, ei] = (0, i.useState)(() => new Set(_2)), [ea, eo] = (0, i.useState)("closed"), [el, es] = (0, i.useState)(0), [ec, eu] = (0, i.useState)(0), [ed, eh] = (0, i.useState)([0, 0]), [ep, eg] = (0, i.useState)({ w: 0, h: 0 }), [ef, em] = (0, i.useState)(false), [ex, ey] = (0, i.useState)(""), ev = (0, i.useRef)(null), e_ = (0, i.useRef)(null), eb = (0, i.useRef)(null), ew = (0, i.useRef)(null), ej = (0, i.useRef)(null), eM = (0, i.useRef)(null), ek = (0, i.useRef)(null), eP = (0, i.useRef)([]), eA = (0, i.useRef)("closed"), eN = (0, i.useRef)(et2), eS = (0, i.useRef)(null), eR = (0, i.useRef)(false), eT = (0, i.useRef)({
      active: false,
      log: 0,
      x: 0,
      y: 0,
      timer: 0,
      gesture: false,
      wheelX: 0,
      wheelAt: 0,
      wheelLock: false
    }), eC = (0, i.useRef)(null), eE = (0, i.useRef)(null), ez = (0, u.d)(0), e$ = (0, u.d)(1), eL = (0, u.d)(0), eO = (0, u.d)(0), eY = (0, u.d)(0), eD = (0, u.d)(0), eI = (0, u.d)(0), eB = (0, u.d)(0), eX = (0, u.d)(1), eG = (0, u.d)(1), eF = (0, u.d)(0), eH = (0, u.d)(k), eW = (0, u.d)({ x: 0, y: 0 }), eV = (0, u.d)(1), eq = (0, h.G)(() => {
      let e10 = ez.get(), t3 = eH.get(), r3 = eW.get(), n2 = eI.get(), i2 = eB.get(), a3 = (eD.get() - eO.get()) * eX.get();
      return (1 - e10) * (t3.dx - a3) + n2 + (1 - L(i2, eG.get())) * r3.x;
    }), eJ = (0, h.G)(() => {
      let e10 = ez.get(), t3 = eH.get(), r3 = eW.get(), n2 = eB.get();
      return (1 - e10) * t3.dy + n2 + (1 - L(n2, eG.get())) * r3.y;
    }), eK = (0, h.G)(() => E(eH.get().k, 1, ez.get()) * L(eB.get(), eG.get())), eU = (0, h.G)(() => {
      let e10 = eH.get(), t3 = ez.get(), r3 = Math.max(0, 1 - t3), n2 = (e11) => `${Math.max(0, e11 * r3).toFixed(2)}px`, i2 = Math.max(0, E(6 / Math.max(e10.k, 0.01), 14, C(t3, 0, 1)));
      return `inset(${n2(e10.t)} ${n2(e10.r)} ${n2(e10.b)} ${n2(e10.l)} round ${i2.toFixed(2)}px)`;
    }), eZ = (0, h.G)(
      () => C(ez.get(), 0, 1) * (1 - C(eB.get() / Math.max(0.5 * eG.get(), 1), 0, 1))
    ), eQ = (0, h.G)(() => Math.min(1, 2 * eZ.get())), e0 = (0, h.G)(() => eL.get() * (1 - C(Math.abs(eB.get()) / 64, 0, 1))), e1 = (0, h.G)(() => -((1 - eL.get()) * 8)), e22 = (0, h.G)(() => (1 - eL.get()) * 10), e5 = (0, h.G)(() => -eO.get() * eX.get()), e6 = (0, i.useMemo)(
      () => e2.map((e10) => C(40 * e10.width / e10.height, 22, 72)),
      [e2]
    ), e7 = (0, h.G)(
      () => (function(e10, t3, r3) {
        let n2 = r3.length - 1;
        if (n2 < 0) return { x: [], c: [], o: [] };
        let i2 = C(e10, 0, n2), a3 = [], o2 = [], l2 = 0;
        r3.forEach((e11, t4) => {
          let r4 = Math.max(0, 1 - Math.abs(t4 - i2)), n3 = 22 + (e11 - 22) * r4, s3 = 4 * r4;
          a3.push(l2 + s3), o2.push(n3), l2 += n3 + 2 * s3 + 2;
        });
        let s2 = Math.floor(i2), c2 = Math.min(n2, s2 + 1), u2 = t3 / 2 - (E(a3[s2] + o2[s2] / 2, a3[c2] + o2[c2] / 2, i2 - s2) + (e10 - i2) * M);
        return {
          x: a3.map((e11, t4) => u2 + e11 - (r3[t4] - o2[t4]) / 2),
          c: o2.map((e11, t4) => (r3[t4] - e11) / 2),
          o: r3.map((t4, r4) => 1 - 0.5 * Math.min(1, Math.abs(r4 - e10)))
        };
      })(eY.get(), eF.get(), e6)
    ), e9 = (e10) => {
      eA.current = e10, eo(e10);
    }, e3 = (e10) => ((e_.current?.clientWidth ?? 0) - (e10 - 1) * 3) / e10, e4 = () => ew.current?.offsetHeight ?? 0;
    function e8(e10) {
      let t3 = eD.get(), r3 = Math.max(0, Math.min(Math.floor(e10), t3) - 1), n2 = Math.min(Q2, Math.max(Math.ceil(e10), t3) + 1);
      eh((e11) => e11[0] === r3 && e11[1] === n2 ? e11 : [r3, n2]);
    }
    function te(e10, t3, r3 = false) {
      e10 !== eN.current && ee2.includes(e10) && (!(function(e11) {
        let t4 = e_.current;
        if (!t4) return;
        let r4 = t4.getBoundingClientRect(), n2 = e4(), i2 = t4.scrollTop < 1, a3 = t4.scrollTop >= t4.scrollHeight - t4.clientHeight - 1, o2 = e11?.x ?? r4.left + r4.width / 2, l2 = e11?.y ?? (i2 ? r4.top + n2 + 1 : a3 ? r4.bottom - 1 : r4.top + n2 + (r4.height - n2) / 2), s2 = -1, c2 = 1 / 0, u2 = null;
        eP.current.forEach((e12, t5) => {
          if (!e12) return;
          let r5 = e12.getBoundingClientRect(), n3 = Math.max(r5.left - o2, 0, o2 - r5.right), i3 = Math.max(r5.top - l2, 0, l2 - r5.bottom), a4 = n3 * n3 + i3 * i3;
          a4 < c2 && (s2 = t5, c2 = a4, u2 = r5);
        });
        let d2 = u2;
        eS.current = d2 ? {
          index: s2,
          fraction: C((l2 - d2.top) / Math.max(d2.height, 1), 0, 1),
          viewY: l2 - r4.top
        } : null;
      })(t3), eN.current = e10, r3 ? (0, c.flushSync)(() => er(e10)) : er(e10), v2?.(e10), ey(`${e10} photos per row`));
    }
    function tt(e10, t3) {
      let r3 = ee2[ee2.indexOf(eN.current) + e10];
      r3 && te(r3, t3);
    }
    function tr() {
      let e10 = eN.current, t3 = ee2.indexOf(e10), r3 = ee2[t3 + 1], n2 = ee2[t3 - 1], i2 = e3(e10) || 1;
      return {
        inward: r3,
        outward: n2,
        lnIn: r3 ? Math.log(e3(r3) / i2) : 0,
        lnOut: n2 ? Math.log(e3(n2) / i2) : 0
      };
    }
    function tn(e10, t3) {
      let r3 = eT.current, n2 = eb.current;
      if (r3.x = e10, r3.y = t3, r3.active || !n2) return;
      let i2 = eV.get();
      if (eV.stop(), 1 === i2) {
        let r4 = n2.getBoundingClientRect();
        n2.style.transformOrigin = `${e10 - r4.left}px ${t3 - r4.top}px`;
      }
      r3.active = true, r3.log = Math.log(i2);
    }
    function ti(e10) {
      let t3 = eT.current;
      if (!t3.active) return;
      t3.log += e10;
      let { inward: r3, outward: n2, lnIn: i2, lnOut: a3 } = tr(), o2 = r3 && t3.log >= i2 ? r3 : n2 && t3.log <= a3 ? n2 : 0;
      if (o2) {
        t3.log = 0, te(o2, { x: t3.x, y: t3.y }, true);
        let e11 = eb.current, r4 = e11?.getBoundingClientRect();
        e11 && r4 && (e11.style.transformOrigin = `${t3.x - r4.left}px ${t3.y - r4.top}px`);
        return;
      }
      let l2 = t3.log;
      l2 > i2 && (l2 = i2 + z(l2 - i2, 0.2)), l2 < a3 && (l2 = a3 - z(a3 - l2, 0.2)), eV.set(Math.exp(l2));
    }
    function ta() {
      let e10 = eT.current;
      if (!e10.active) return;
      e10.active = false;
      let { inward: t3, outward: r3, lnIn: n2, lnOut: i2 } = tr(), a3 = t3 && e10.log > 0.35 * n2 ? t3 : r3 && e10.log < 0.35 * i2 ? r3 : 0;
      e10.log = 0, a3 ? te(a3, { x: e10.x, y: e10.y }, true) : U2 ? eV.jump(1) : (0, d.i)(eV, 1, P.snappy);
    }
    function to(t3) {
      let r3 = eP.current[t3], n2 = ej.current, i2 = e_.current, a3 = e2[t3];
      if (!r3 || !n2 || !i2 || !a3) return null;
      let o2 = n2.getBoundingClientRect(), l2 = r3.getBoundingClientRect(), s2 = i2.getBoundingClientRect(), c2 = Y(a3, o2.width, o2.height), u2 = Math.max(l2.width / c2.w, l2.height / c2.h) || 1, d2 = (c2.w - l2.width / u2) / 2, h2 = (c2.h - l2.height / u2) / 2;
      return {
        dx: l2.left + l2.width / 2 - (o2.left + c2.x + c2.w / 2),
        dy: l2.top + l2.height / 2 - (o2.top + c2.y + c2.h / 2),
        k: u2,
        t: h2 + Math.max(0, s2.top - l2.top) / u2,
        b: h2 + Math.max(0, l2.bottom - s2.bottom) / u2,
        l: d2 + Math.max(0, s2.left - l2.left) / u2,
        r: d2 + Math.max(0, l2.right - s2.right) / u2
      };
    }
    function tl(e10) {
      let t3 = eP.current[e10], r3 = e_.current, n2 = eb.current;
      if (!t3 || !r3 || !n2) return;
      let i2 = n2.offsetTop + t3.offsetTop, a3 = i2 + t3.offsetHeight, o2 = e4();
      i2 < r3.scrollTop + o2 ? r3.scrollTop = i2 - o2 : a3 > r3.scrollTop + r3.clientHeight && (r3.scrollTop = a3 - r3.clientHeight);
    }
    function ts() {
      "closing" === eA.current && (e9("closed"), eu(eD.get()));
    }
    function tc(e10 = { x: 0, y: 0 }) {
      if ("open" !== eA.current) return;
      let t3 = Math.round(eD.get());
      eZ.get() > 0.95 && tl(t3);
      let r3 = to(t3);
      (r3 && eH.set(r3), eR.current = !!ev.current?.contains(document.activeElement), e9("closing"), B2?.(null), U2) ? (0, d.i)(e$, 0, { ...T, onComplete: ts }) : ((0, d.i)(eL, 0, { duration: A.instant, ease: [...N.standard] }), (0, d.i)(eI, 0, { ...R, velocity: e10.x }), (0, d.i)(eB, 0, { ...R, velocity: e10.y }), (0, d.i)(eY, t3, R), (0, d.i)(eO, t3, R), (0, d.i)(ez, 0, { ...R, onComplete: ts }));
    }
    function tu(t3, r3) {
      let n2 = C(t3, 0, Q2);
      if (n2 !== eD.get() && (eD.set(n2), es(n2), ey(`${e2[n2].title}, ${n2 + 1} of ${Z2}`)), U2) {
        eY.jump(n2), eO.jump(n2);
        return;
      }
      (0, d.i)(eY, n2, { ...P.smooth, velocity: r3 ?? eY.getVelocity() }), (0, d.i)(eO, n2, { ...P.smooth, velocity: r3 ?? eO.getVelocity() });
    }
    (0, i.useLayoutEffect)(() => {
      eN.current = et2;
    }), (0, p.L)(eV, "change", (e10) => {
      let t3 = eb.current;
      t3 && (t3.style.transform = 1 === e10 ? "" : `scale(${e10})`);
    }), (0, p.L)(eO, "change", e8), (0, i.useEffect)(() => {
      let e10 = ej.current, t3 = eM.current;
      if (!e10 || !t3 || "u" < typeof ResizeObserver) return;
      let r3 = new ResizeObserver(() => {
        let r4 = e10.clientWidth, n2 = e10.clientHeight;
        eg((e11) => e11.w === r4 && e11.h === n2 ? e11 : { w: r4, h: n2 }), eX.set(r4 + 24), eG.set(n2), eF.set(t3.clientWidth);
      });
      return r3.observe(e10), r3.observe(t3), () => r3.disconnect();
    }, [eX, eG, eF]), (0, i.useLayoutEffect)(() => {
      1 !== eV.get() && eV.jump(1);
      let e10 = eS.current, t3 = e_.current, r3 = eb.current;
      eS.current = null;
      let n2 = e10 && eP.current[e10.index];
      e10 && n2 && t3 && r3 && (t3.scrollTop = C(
        r3.offsetTop + n2.offsetTop + e10.fraction * n2.offsetHeight - e10.viewY,
        0,
        t3.scrollHeight - t3.clientHeight
      ));
    }, [et2, eV]), (0, i.useEffect)(() => {
      "open" === ea && ek.current?.focus({ preventScroll: true }), "closed" === ea && eR.current && (eR.current = false, eP.current[eD.get()]?.focus({ preventScroll: true }));
    }, [ea, eD]), (0, i.useEffect)(() => {
      "open" === ea && eZ.get() > 0.95 && tl(el);
    });
    let td = (0, i.useRef)({
      pinchBegin: tn,
      pinchBy: ti,
      pinchEnd: ta,
      zoomStep: tt,
      goTo: tu
    });
    function th(e10) {
      let t3 = eC.current;
      if (!t3 || t3.id !== e10.pointerId) return;
      eC.current = null;
      let r3 = "pointercancel" === e10.type ? { x: 0, y: 0 } : D(t3.samples, e10.timeStamp);
      if ("x" === t3.axis) {
        let e11 = Math.round(t3.pos0), n3 = -r3.x / eX.get(), i2 = eO.get();
        tu(
          C(
            Math.abs(r3.x) > 240 && Math.sign(n3) === Math.sign(i2 - e11) ? e11 + Math.sign(n3) : Math.round(i2),
            e11 - 1,
            e11 + 1
          ),
          n3
        );
        return;
      }
      if (!t3.axis) {
        Math.abs(eO.get() - eD.get()) > 1e-3 && tu(eD.get()), (eI.get() || eB.get()) && ((0, d.i)(eI, 0, U2 ? { duration: 0 } : P.snappy), (0, d.i)(eB, 0, U2 ? { duration: 0 } : P.snappy));
        return;
      }
      if (eB.get() + 0.18 * r3.y > Math.min(140, 0.22 * eG.get()) && r3.y > -240)
        return void tc(r3);
      let n2 = U2 ? { duration: 0 } : P.snappy;
      (0, d.i)(eI, 0, { ...n2, velocity: r3.x }), (0, d.i)(eB, 0, { ...n2, velocity: r3.y });
    }
    function tp(t3) {
      let r3 = eE.current;
      if (!r3 || r3.id !== t3.pointerId) return;
      if (eE.current = null, !r3.moved) {
        let e10 = t3.currentTarget.getBoundingClientRect(), r4 = e7.get(), n3 = t3.clientX - e10.left, i3 = e6.findIndex(
          (e11, t4) => n3 >= r4.x[t4] + r4.c[t4] - 1 && n3 <= r4.x[t4] + e11 - r4.c[t4] + 1
        );
        tu(i3 >= 0 ? i3 : Math.round(eY.get()));
        return;
      }
      let n2 = "pointercancel" === t3.type ? 0 : -D(r3.samples, t3.timeStamp).x / M, i2 = C(Math.round(eY.get() + 0.12 * n2), 0, Q2);
      i2 !== eD.get() && (eD.set(i2), es(i2)), U2 ? (eY.jump(i2), eO.jump(i2)) : ((0, d.i)(eY, i2, { ...P.smooth, velocity: n2 }), (0, d.i)(eO, i2, P.smooth)), ey(`${e2[i2].title}, ${i2 + 1} of ${Z2}`);
    }
    (0, i.useLayoutEffect)(() => {
      td.current = {
        pinchBegin: tn,
        pinchBy: ti,
        pinchEnd: ta,
        zoomStep: tt,
        goTo: tu
      };
    }), (0, i.useEffect)(() => {
      let e10 = ev.current, t3 = e_.current;
      if (!e10 || !t3) return;
      let r3 = eT.current, n2 = (e11) => {
        if ("closed" !== eA.current) {
          if (e11.ctrlKey) return void e11.preventDefault();
          if ("open" !== eA.current || Math.abs(e11.deltaX) <= Math.abs(e11.deltaY))
            return;
          e11.preventDefault();
          let t5 = performance.now();
          return t5 - r3.wheelAt > 180 && (r3.wheelX = 0, r3.wheelLock = false), r3.wheelAt = t5, r3.wheelX += e11.deltaX, void (!r3.wheelLock && Math.abs(r3.wheelX) > 36 && (r3.wheelLock = true, td.current.goTo(
            Math.round(eD.get()) + (r3.wheelX > 0 ? 1 : -1)
          )));
        }
        if (!e11.ctrlKey || r3.gesture) return;
        e11.preventDefault();
        let t4 = 1 === e11.deltaMode ? 18 : 2 === e11.deltaMode ? 400 : 1, n3 = -e11.deltaY * t4;
        !r3.active && Math.abs(n3) >= 40 ? td.current.zoomStep(n3 > 0 ? 1 : -1, {
          x: e11.clientX,
          y: e11.clientY
        }) : (td.current.pinchBegin(e11.clientX, e11.clientY), td.current.pinchBy(C(0.012 * n3, -0.4, 0.4)), clearTimeout(r3.timer), r3.timer = setTimeout(() => td.current.pinchEnd(), 160));
      }, i2 = 0, a3 = (e11) => Math.hypot(
        e11[0].clientX - e11[1].clientX,
        e11[0].clientY - e11[1].clientY
      ), o2 = (e11) => {
        2 === e11.touches.length && "closed" === eA.current && (i2 = a3(e11.touches), td.current.pinchBegin(
          (e11.touches[0].clientX + e11.touches[1].clientX) / 2,
          (e11.touches[0].clientY + e11.touches[1].clientY) / 2
        ));
      }, l2 = (e11) => {
        if (!i2 || 2 !== e11.touches.length) return;
        e11.preventDefault();
        let t4 = a3(e11.touches);
        td.current.pinchBy(Math.log(t4 / i2)), i2 = t4;
      }, s2 = (e11) => {
        i2 && e11.touches.length < 2 && (i2 = 0, td.current.pinchEnd());
      }, c2 = 1, u2 = (e11) => {
        e11.preventDefault(), "closed" !== eA.current || (r3.gesture = true, c2 = 1, td.current.pinchBegin(e11.clientX, e11.clientY));
      }, d2 = (e11) => {
        e11.preventDefault(), r3.gesture && (td.current.pinchBy(Math.log(e11.scale / c2)), c2 = e11.scale);
      }, h2 = (e11) => {
        e11.preventDefault(), r3.gesture && (r3.gesture = false, td.current.pinchEnd());
      };
      return e10.addEventListener("wheel", n2, { passive: false }), t3.addEventListener("touchstart", o2, { passive: true }), t3.addEventListener("touchmove", l2, { passive: false }), t3.addEventListener("touchend", s2), t3.addEventListener("touchcancel", s2), e10.addEventListener("gesturestart", u2), e10.addEventListener("gesturechange", d2), e10.addEventListener("gestureend", h2), () => {
        clearTimeout(r3.timer), e10.removeEventListener("wheel", n2), t3.removeEventListener("touchstart", o2), t3.removeEventListener("touchmove", l2), t3.removeEventListener("touchend", s2), t3.removeEventListener("touchcancel", s2), e10.removeEventListener("gesturestart", u2), e10.removeEventListener("gesturechange", d2), e10.removeEventListener("gestureend", h2);
      };
    }, [eD]);
    let tg = e2[el] ?? e2[0], tf = !!tg && en.has(tg.id), tm = "open" === ea, tx = U2 ? { duration: 0 } : P.smooth, ty = U2 ? { opacity: 0 } : { opacity: 0, scale: 0.6, filter: `blur(${S.subtle}px)` };
    return (0, n.jsxs)("div", {
      ref: ev,
      className: O(b().root, J2),
      "data-phase": ea,
      children: [
        (0, n.jsxs)("header", {
          ref: ew,
          className: b().header,
          "data-scrolled": ef || void 0,
          inert: tm,
          children: [
            (0, n.jsxs)("div", {
              className: b().heading,
              children: [
                (0, n.jsx)("p", { className: b().title, children: t2 }),
                (0, n.jsxs)("p", {
                  className: b().subtitle,
                  children: [
                    (0, n.jsxs)("span", { children: [Z2, " photos"] }),
                    (0, n.jsxs)("span", {
                      className: b().favoriteCount,
                      "aria-label": `${en.size} favorites`,
                      children: [
                        (0, n.jsx)(f.A, {
                          size: 12,
                          strokeWidth: 2,
                          fill: "currentColor",
                          "aria-hidden": "true"
                        }),
                        (0, n.jsx)(G, {
                          reduced: U2,
                          children: (0, n.jsx)(F, {
                            value: en.size,
                            reduced: U2
                          })
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, n.jsx)(g.o, {
              id: K2,
              children: (0, n.jsx)("div", {
                className: b().zoom,
                role: "group",
                "aria-label": "Zoom",
                children: ee2.map(
                  (e10) => (0, n.jsxs)(
                    "button",
                    {
                      type: "button",
                      className: b().zoomButton,
                      "aria-pressed": e10 === et2,
                      "aria-label": `${e10} photos per row`,
                      title: `${e10} per row`,
                      onClick: () => te(e10),
                      children: [
                        e10 === et2 && (0, n.jsx)(s.PY1.span, {
                          className: b().zoomSelection,
                          layoutId: "zoom-selection",
                          layoutDependency: et2,
                          transition: U2 ? { duration: 0 } : P.morph,
                          "aria-hidden": "true"
                        }),
                        (0, n.jsx)(H, { columns: e10 })
                      ]
                    },
                    e10
                  )
                )
              })
            })
          ]
        }),
        (0, n.jsx)("div", {
          ref: e_,
          className: b().scroller,
          inert: tm,
          onScroll: (e10) => {
            let t3 = e10.currentTarget.scrollTop > 2;
            t3 !== ef && em(t3);
          },
          children: (0, n.jsx)("ul", {
            ref: eb,
            className: b().grid,
            style: { "--columns": et2 },
            "aria-label": `${t2}, ${Z2} photos`,
            onKeyDown: function(e10) {
              let t3 = eP.current[ec], r3 = t3?.getBoundingClientRect(), n2 = r3 ? { x: r3.left + r3.width / 2, y: r3.top + r3.height / 2 } : void 0;
              if ("+" === e10.key || "=" === e10.key) {
                e10.preventDefault(), tt(1, n2);
                return;
              }
              if ("-" === e10.key || "_" === e10.key) {
                e10.preventDefault(), tt(-1, n2);
                return;
              }
              let i2 = {
                ArrowRight: 1,
                ArrowLeft: -1,
                ArrowDown: et2,
                ArrowUp: -et2,
                Home: -1 / 0,
                End: 1 / 0,
                PageDown: 3 * et2,
                PageUp: -(3 * et2)
              };
              if (!(e10.key in i2)) return;
              e10.preventDefault();
              let a3 = C(ec + i2[e10.key], 0, Q2);
              eu(a3), eP.current[a3]?.focus();
            },
            children: e2.map(
              (t3, r3) => (0, n.jsx)(
                "li",
                {
                  className: b().cell,
                  children: (0, n.jsxs)(s.PY1.button, {
                    ref: (e10) => {
                      eP.current[r3] = e10;
                    },
                    type: "button",
                    className: b().tile,
                    layout: true,
                    layoutDependency: et2,
                    transition: { layout: tx },
                    style: { borderRadius: 6 },
                    "data-hidden": "closed" !== ea && r3 === el ? "" : void 0,
                    tabIndex: r3 === ec ? 0 : -1,
                    "aria-label": en.has(t3.id) ? `${t3.alt}, favorite` : t3.alt,
                    onFocus: () => eu(r3),
                    onClick: () => (function(t4) {
                      let r4 = eA.current;
                      if ("open" === r4 || !e2[t4]) return;
                      if ("closing" === r4 && t4 === eD.get())
                        return (e9("open"), B2?.(e2[t4].id), U2) ? void (0, d.i)(e$, 1, T) : ((0, d.i)(ez, 1, P.morph), (0, d.i)(eI, 0, P.morph), (0, d.i)(eB, 0, P.morph), void (0, d.i)(eL, 1, {
                          duration: A.standard,
                          ease: [...N.enter]
                        }));
                      let n2 = to(t4);
                      if (n2) {
                        if (eH.set(n2), eW.set({ x: 0, y: 0 }), eI.jump(0), eB.jump(0), eD.jump(t4), eY.jump(t4), eO.jump(t4), ez.jump(+!!U2), eL.jump(+!!U2), e$.jump(+!U2), e8(t4), es(t4), e9("open"), B2?.(e2[t4].id), ey(`${e2[t4].title}, ${t4 + 1} of ${Z2}`), U2)
                          return void (0, d.i)(e$, 1, T);
                        (0, d.i)(ez, 1, P.morph), (0, d.i)(eL, 1, {
                          duration: A.standard,
                          delay: 0.1,
                          ease: [...N.enter]
                        });
                      }
                    })(r3),
                    children: [
                      (0, n.jsx)("img", {
                        src: t3.src,
                        srcSet: t3.srcSet,
                        sizes: j,
                        alt: "",
                        width: t3.width,
                        height: t3.height,
                        draggable: false,
                        decoding: "async"
                      }),
                      (0, n.jsx)(l.N, {
                        initial: false,
                        children: en.has(t3.id) && (0, n.jsx)(
                          s.PY1.span,
                          {
                            className: b().badge,
                            initial: ty,
                            animate: {
                              opacity: 1,
                              scale: 1,
                              filter: "blur(0px)"
                            },
                            exit: ty,
                            transition: U2 ? T : P.snappy,
                            children: (0, n.jsx)(f.A, {
                              size: 14,
                              strokeWidth: 2,
                              fill: "currentColor",
                              "aria-hidden": "true"
                            })
                          },
                          "favorite"
                        )
                      })
                    ]
                  })
                },
                t3.id
              )
            )
          })
        }),
        (0, n.jsxs)(s.PY1.div, {
          className: b().viewer,
          "data-state": ea,
          role: "dialog",
          "aria-label": "Photo viewer",
          "aria-hidden": "closed" === ea || void 0,
          tabIndex: -1,
          style: { opacity: e$ },
          onKeyDown: function(e10) {
            if ("open" !== eA.current) return;
            let t3 = Math.round(eD.get()), r3 = { ArrowRight: t3 + 1, ArrowLeft: t3 - 1, Home: 0, End: Q2 };
            if ("Escape" === e10.key) {
              e10.preventDefault(), e10.stopPropagation(), tc();
              return;
            }
            e10.key in r3 && (e10.preventDefault(), tu(r3[e10.key]));
          },
          children: [
            (0, n.jsx)(s.PY1.div, {
              className: b().frost,
              style: { opacity: eQ }
            }),
            (0, n.jsx)(s.PY1.div, {
              className: b().backdrop,
              style: { opacity: eZ }
            }),
            (0, n.jsx)("div", {
              ref: ej,
              className: b().stage,
              onPointerDown: function(e10) {
                "open" === eA.current && ("mouse" !== e10.pointerType || 0 === e10.button) && (e10.currentTarget.setPointerCapture(e10.pointerId), eY.stop(), eO.stop(), eI.stop(), eB.stop(), eC.current = {
                  id: e10.pointerId,
                  x0: e10.clientX,
                  y0: e10.clientY,
                  pos0: eO.get(),
                  dx0: eI.get(),
                  dy0: eB.get(),
                  axis: null,
                  samples: [{ t: e10.timeStamp, x: e10.clientX, y: e10.clientY }]
                });
              },
              onPointerMove: function(t3) {
                let r3 = eC.current;
                if (!r3 || r3.id !== t3.pointerId) return;
                r3.samples.push({ t: t3.timeStamp, x: t3.clientX, y: t3.clientY }), r3.samples.length > 24 && r3.samples.shift();
                let n2 = t3.clientX - r3.x0, i2 = t3.clientY - r3.y0;
                if (!r3.axis) {
                  if (6 > Math.hypot(n2, i2)) return;
                  if (r3.axis = Math.abs(n2) > Math.abs(i2) && 1 > Math.abs(r3.dy0) ? "x" : "y", "y" === r3.axis && 1 > Math.abs(eB.get())) {
                    let t4 = ej.current, n3 = e2[Math.round(eD.get())];
                    if (t4 && n3) {
                      let e10 = t4.getBoundingClientRect(), i3 = Y(n3, e10.width, e10.height);
                      eW.set({
                        x: r3.x0 - (e10.left + i3.x + i3.w / 2),
                        y: r3.y0 - (e10.top + i3.y + i3.h / 2)
                      });
                    }
                  }
                }
                if ("x" === r3.axis) {
                  let e10 = $(r3.pos0 - n2 / eX.get(), Q2, eX.get());
                  eO.set(e10), eY.set(e10);
                } else {
                  let e10 = r3.dy0 + i2;
                  eI.set(r3.dx0 + n2), eB.set(e10 < 0 ? -z(-e10, eG.get()) : e10);
                }
              },
              onPointerUp: th,
              onPointerCancel: th,
              children: (0, n.jsx)(s.PY1.div, {
                className: b().track,
                style: { x: e5 },
                children: "closed" !== ea && e2.slice(ed[0], ed[1] + 1).map((e10, t3) => {
                  let r3 = ed[0] + t3, i2 = Y(e10, ep.w, ep.h), a3 = r3 === el;
                  return (0, n.jsx)(
                    "div",
                    {
                      className: b().slide,
                      style: { left: `calc(${r3} * (100% + 24px))` },
                      "aria-hidden": !a3 || void 0,
                      children: (0, n.jsxs)(s.PY1.div, {
                        className: b().photo,
                        style: {
                          left: i2.x,
                          top: i2.y,
                          width: i2.w,
                          height: i2.h,
                          ...a3 ? { x: eq, y: eJ, scale: eK, clipPath: eU } : {
                            x: 0,
                            y: 0,
                            scale: 1,
                            clipPath: "inset(0px round 14px)"
                          }
                        },
                        children: [
                          (0, n.jsx)("img", {
                            className: b().base,
                            src: e10.src,
                            srcSet: e10.srcSet,
                            sizes: j,
                            alt: a3 ? e10.alt : "",
                            draggable: false,
                            decoding: "sync"
                          }),
                          (0, n.jsx)(W, { photo: e10 })
                        ]
                      })
                    },
                    e10.id
                  );
                })
              })
            }),
            (0, n.jsxs)(s.PY1.div, {
              className: b().bar,
              style: { opacity: e0, y: e1 },
              children: [
                (0, n.jsx)("button", {
                  ref: ek,
                  type: "button",
                  className: b().glass,
                  "aria-label": "Back to all photos",
                  onClick: () => tc(),
                  children: (0, n.jsx)(m.A, {
                    size: 20,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                }),
                tg && (0, n.jsxs)("div", {
                  className: b().caption,
                  children: [
                    (0, n.jsx)("span", {
                      className: b().captionTitle,
                      children: (0, n.jsx)(X, { text: tg.title, reduced: U2 })
                    }),
                    (0, n.jsxs)("span", {
                      className: b().captionMeta,
                      children: [
                        tg.detail && (0, n.jsx)(G, {
                          reduced: U2,
                          children: (0, n.jsx)(X, {
                            text: tg.detail,
                            reduced: U2
                          })
                        }),
                        (0, n.jsxs)("span", {
                          className: b().counterPart,
                          children: [
                            tg.detail && (0, n.jsx)("span", {
                              "aria-hidden": "true",
                              children: "\xB7"
                            }),
                            (0, n.jsxs)("span", {
                              className: b().counter,
                              children: [
                                (0, n.jsx)(G, {
                                  reduced: U2,
                                  children: (0, n.jsx)(F, {
                                    value: el + 1,
                                    reduced: U2
                                  })
                                }),
                                " of ",
                                Z2
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                (0, n.jsx)("button", {
                  type: "button",
                  className: O(b().glass, b().favorite),
                  "aria-pressed": tf,
                  "aria-label": "Favorite",
                  onClick: function() {
                    let t3 = e2[el];
                    if (!t3) return;
                    let r3 = !en.has(t3.id);
                    ei((e10) => {
                      let n2 = new Set(e10);
                      return r3 ? n2.add(t3.id) : n2.delete(t3.id), n2;
                    }), I2?.(t3.id, r3), ey(
                      r3 ? `Added ${t3.title} to favorites` : `Removed ${t3.title} from favorites`
                    );
                  },
                  children: (0, n.jsx)(l.N, {
                    initial: false,
                    children: (0, n.jsx)(
                      s.PY1.span,
                      {
                        className: b().icon,
                        initial: ty,
                        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
                        exit: {
                          ...ty,
                          transition: U2 ? T : { duration: A.fast }
                        },
                        transition: U2 ? T : {
                          ...P.snappy,
                          opacity: { duration: A.fast },
                          filter: { duration: A.fast }
                        },
                        children: (0, n.jsx)(f.A, {
                          size: 20,
                          strokeWidth: 1.75,
                          fill: tf ? "currentColor" : "none",
                          "aria-hidden": "true"
                        })
                      },
                      tf ? "on" : "off"
                    )
                  })
                })
              ]
            }),
            (0, n.jsxs)(s.PY1.div, {
              className: b().navs,
              style: { opacity: e0 },
              children: [
                (0, n.jsx)("button", {
                  type: "button",
                  className: O(b().glass, b().nav),
                  "aria-label": "Previous photo",
                  disabled: 0 === el,
                  onClick: () => tu(el - 1),
                  children: (0, n.jsx)(x.A, {
                    size: 20,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                }),
                (0, n.jsx)("button", {
                  type: "button",
                  className: O(b().glass, b().nav),
                  "aria-label": "Next photo",
                  disabled: el === Q2,
                  onClick: () => tu(el + 1),
                  children: (0, n.jsx)(y.A, {
                    size: 20,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                })
              ]
            }),
            (0, n.jsx)(s.PY1.div, {
              ref: eM,
              className: b().strip,
              style: { opacity: e0, y: e22 },
              role: "slider",
              tabIndex: tm ? 0 : -1,
              "aria-label": "Photos",
              "aria-orientation": "horizontal",
              "aria-valuemin": 1,
              "aria-valuemax": Z2,
              "aria-valuenow": el + 1,
              "aria-valuetext": tg ? `${tg.title}, ${el + 1} of ${Z2}` : void 0,
              onPointerDown: function(e10) {
                "open" === eA.current && ("mouse" !== e10.pointerType || 0 === e10.button) && (e10.currentTarget.setPointerCapture(e10.pointerId), eY.stop(), eE.current = {
                  id: e10.pointerId,
                  x0: e10.clientX,
                  pos0: eY.get(),
                  moved: false,
                  samples: [{ t: e10.timeStamp, x: e10.clientX, y: 0 }]
                });
              },
              onPointerMove: function(e10) {
                let t3 = eE.current;
                if (!t3 || t3.id !== e10.pointerId) return;
                t3.samples.push({ t: e10.timeStamp, x: e10.clientX, y: 0 }), t3.samples.length > 24 && t3.samples.shift();
                let r3 = e10.clientX - t3.x0;
                if (!t3.moved && 4 > Math.abs(r3)) return;
                t3.moved = true;
                let n2 = t3.pos0 - r3 / M;
                eY.set($(n2, Q2, M));
                let i2 = C(Math.round(n2), 0, Q2);
                i2 !== eD.get() && (eD.set(i2), es(i2), U2 ? eO.jump(i2) : (0, d.i)(eO, i2, P.snappy));
              },
              onPointerUp: tp,
              onPointerCancel: tp,
              children: "closed" !== ea && e2.map(
                (e10, t3) => (0, n.jsx)(
                  V,
                  { photo: e10, index: t3, wide: e6[t3], geometry: e7 },
                  e10.id
                )
              )
            })
          ]
        }),
        (0, n.jsx)("p", {
          className: b().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ex
        })
      ]
    });
  }
  var J = r(63963), K = r.n(J);
  let U = (e2, t2, r2) => ({
    src: `media/specials/photo-grid-${e2}.jpg`,
    width: t2,
    height: r2
  });
  function Z(e2, t2, r2, n2, i2) {
    let { props: o2 } = (0, a.getImageProps)({
      src: t2.src,
      alt: i2,
      width: t2.width,
      height: t2.height,
      sizes: "(max-width: 760px) 100vw, 720px",
      loading: "eager"
    });
    return {
      id: e2,
      src: o2.src,
      srcSet: o2.srcSet,
      alt: i2,
      width: t2.width,
      height: t2.height,
      title: r2,
      detail: n2
    };
  }
  let Q = [
    Z(
      "drive",
      U("palm-canyon-drive", 1067, 1600),
      "Palm Canyon Drive",
      "Fri, Oct 9 \xB7 8:14 AM",
      "An empty street lined with palms leading toward dry mountains under a clear sky"
    ),
    Z(
      "street",
      U("mountain-street", 1600, 1067),
      "Morning on Via Lola",
      "Fri, Oct 9 \xB7 8:32 AM",
      "A quiet residential street with low white houses and tall palms beneath the San Jacinto mountains"
    ),
    Z(
      "boulders",
      U("boulder-house", 1280, 1600),
      "The boulder house",
      "Fri, Oct 9 \xB7 9:05 AM",
      "A glass and steel modernist house above a garden of granite boulders and agave"
    ),
    Z(
      "breeze",
      U("breeze-block", 1062, 1600),
      "Breeze block wall",
      "Fri, Oct 9 \xB7 10:20 AM",
      "A white house with a patterned breeze block wall and two palms against a deep blue sky"
    ),
    Z(
      "motel",
      U("motel", 1600, 1061),
      "Courtyard motel",
      "Fri, Oct 9 \xB7 12:48 PM",
      "A white mid-century motel with palms and bare mountains behind it"
    ),
    Z(
      "canopy",
      U("canopy", 1600, 1299),
      "Butterfly canopy",
      "Fri, Oct 9 \xB7 2:10 PM",
      "A flat-roofed mid-century canopy under three tall palms"
    ),
    Z(
      "white-house",
      U("white-house", 1600, 1067),
      "Low and white",
      "Fri, Oct 9 \xB7 3:36 PM",
      "A low white house behind a lawn with a cluster of tall palms"
    ),
    Z(
      "palms",
      U("tall-palms", 1067, 1600),
      "Tall palms",
      "Fri, Oct 9 \xB7 4:02 PM",
      "Skinny fan palms rising high above parked cars and distant mountains"
    ),
    Z(
      "dusk",
      U("dusk", 1067, 1600),
      "Dusk on Belardo Road",
      "Fri, Oct 9 \xB7 6:41 PM",
      "A palm silhouetted against a pink evening sky above a lit house"
    ),
    Z(
      "rocks",
      U("rock-house", 1600, 1067),
      "House in the rocks",
      "Sat, Oct 10 \xB7 7:12 AM",
      "A low desert house among palms and rounded rocks"
    ),
    Z(
      "backlit",
      U("backlit-joshua", 1067, 1600),
      "First light",
      "Sat, Oct 10 \xB7 7:48 AM",
      "A Joshua tree backlit by a low sun, its long shadows falling across the sand"
    ),
    Z(
      "lone",
      U("lone-joshua", 900, 1600),
      "Hidden Valley",
      "Sat, Oct 10 \xB7 9:30 AM",
      "A single Joshua tree against a pale blue sky"
    ),
    Z(
      "ridge",
      U("ridge", 1067, 1600),
      "Ryan Mountain trail",
      "Sat, Oct 10 \xB7 11:05 AM",
      "A Joshua tree on a rocky slope under a turquoise sky"
    ),
    Z(
      "twins",
      U("twin-trees", 1067, 1600),
      "Two trees",
      "Sat, Oct 10 \xB7 1:22 PM",
      "Two Joshua trees under streaked clouds and a bright blue sky"
    ),
    Z(
      "sunset",
      U("sunset", 1600, 1067),
      "Keys View at sunset",
      "Sat, Oct 10 \xB7 6:28 PM",
      "Joshua trees silhouetted against an orange and violet sunset"
    ),
    Z(
      "blue-hour",
      U("blue-hour", 1600, 1600),
      "Blue hour",
      "Sat, Oct 10 \xB7 7:04 PM",
      "The dark silhouette of a Joshua tree against a deep blue evening sky"
    )
  ];
  function ee() {
    let e2 = (0, o.I)(), [t2, r2] = (0, i.useState)(false), a2 = t2 ? "Swipe or scrub the filmstrip between photos. Drag down to put it back." : "Pinch, or hold Control and scroll, to zoom. Tap a photo to open it.", c2 = e2 ? { opacity: 0 } : { opacity: 0, y: "0.3em", filter: `blur(${v.T.blur.soft}px)` };
    return (0, n.jsxs)("div", {
      className: K().demo,
      children: [
        (0, n.jsx)("div", {
          className: K().frame,
          children: (0, n.jsx)(q, {
            photos: Q,
            title: "Desert weekend",
            defaultColumns: 3,
            defaultFavorites: ["boulders", "sunset"],
            onViewerChange: (e3) => r2(!!e3)
          })
        }),
        (0, n.jsx)("p", {
          className: K().hint,
          children: (0, n.jsx)(l.N, {
            mode: "popLayout",
            initial: false,
            children: (0, n.jsx)(
              s.PY1.span,
              {
                className: K().hintText,
                initial: c2,
                animate: { opacity: 1, y: "0em", filter: "blur(0px)" },
                exit: {
                  ...c2,
                  transition: {
                    duration: e2 ? v.T.duration.fast : v.T.duration.instant
                  }
                },
                transition: e2 ? { duration: v.T.duration.fast } : {
                  duration: v.T.duration.standard,
                  ease: [...v.T.ease.enter]
                },
                children: a2
              },
              a2
            )
          })
        })
      ]
    });
  }
  let et = ee;
}

__m(__module,__exports,__require);
}