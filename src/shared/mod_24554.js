function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { Ur: () => ee, nl: () => y.n });
  var a = r(95155), n = r(12115), i = r(18310), l = r(80642), s = r(25354), o = r(28245), d = r(55809), u = r(92171), c = r(79196), m = r(52427), g = r(12363), p = r(78780), h = r(76721), f = r(7770), y = r(54471), w = r(67546), _ = r.n(w);
  let x = (e2) => new Date(e2.getFullYear(), e2.getMonth(), e2.getDate()), v = (e2) => new Date(e2.getFullYear(), e2.getMonth(), 1), b = (e2, t2) => new Date(e2.getFullYear(), e2.getMonth(), e2.getDate() + t2), k = (e2, t2) => new Date(e2.getFullYear(), e2.getMonth() + t2, 1), j = (e2, t2) => new Date(e2.getFullYear(), e2.getMonth() + t2, Math.min(e2.getDate(), new Date(e2.getFullYear(), e2.getMonth() + t2 + 1, 0).getDate())), N = (e2, t2) => Math.round((x(e2).getTime() - x(t2).getTime()) / 864e5), M = (e2, t2) => (e2.getFullYear() - t2.getFullYear()) * 12 + e2.getMonth() - t2.getMonth(), D = (e2, t2) => !!(e2 && t2 && 0 === N(e2, t2)), S = (e2) => `${e2.getFullYear()}-${String(e2.getMonth() + 1).padStart(2, "0")}-${String(e2.getDate()).padStart(2, "0")}`, $ = (e2) => {
    let [t2, r2, a2] = e2.split("-").map(Number);
    return new Date(t2, r2 - 1, a2);
  }, L = (e2, t2) => 0 >= N(e2, t2) ? { start: e2, end: t2 } : { start: t2, end: e2 }, Y = [{ label: "Today", range: (e2) => ({ start: e2, end: e2 }) }, { label: "Yesterday", range: (e2) => ({ start: b(e2, -1), end: b(e2, -1) }) }, { label: "Last 7 days", range: (e2) => ({ start: b(e2, -6), end: e2 }) }, { label: "Last 30 days", range: (e2) => ({ start: b(e2, -29), end: e2 }) }, { label: "This month", range: (e2) => ({ start: v(e2), end: e2 }) }, { label: "Last month", range: (e2) => {
    let t2;
    return { start: k(e2, -1), end: new Date((t2 = k(e2, -1)).getFullYear(), t2.getMonth() + 1, 0) };
  } }, { label: "This quarter", range: (e2) => ({ start: new Date(e2.getFullYear(), 3 * Math.floor(e2.getMonth() / 3), 1), end: e2 }) }, { label: "Year to date", range: (e2) => ({ start: new Date(e2.getFullYear(), 0, 1), end: e2 }) }], T = () => () => {
  }, { blur: E } = f.T, P = [...f.T.ease.enter], F = [...f.T.ease.standard], R = (e2, t2) => {
    let r2 = 2 * Math.PI / (1.2 * e2);
    return { type: "spring", stiffness: r2 * r2, damping: 2 * (1 - t2) * r2, mass: 1 };
  }, C = R(0.48, 0), A = R(0.38, 0), I = R(0.3, 0), B = R(0.3, 0), z = R(0.4, 0), H = { enter: (e2) => ({ opacity: 0, y: `${0.45 * e2}em`, filter: `blur(${E.subtle}px)` }), center: { opacity: 1, y: "0em", filter: "blur(0px)", transition: { duration: 0.26, ease: P } }, exit: (e2) => ({ opacity: 0, y: `${-0.45 * e2}em`, filter: `blur(${E.subtle}px)`, transition: { duration: 0.14, ease: F } }) }, W = { enter: { opacity: 0 }, center: { opacity: 1, y: "0em", filter: "blur(0px)", transition: { duration: 0.12 } }, exit: { opacity: 0, transition: { duration: 0.08 } } }, q = { hidden: { opacity: 0, y: -4, filter: `blur(${E.soft}px)` }, shown: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.26, ease: P, delay: 0.07 } }, gone: { opacity: 0, y: -2, filter: `blur(${E.soft}px)`, transition: { duration: 0.12, ease: F } } }, O = { hidden: { opacity: 0 }, shown: { opacity: 1, transition: { duration: 0.12 } }, gone: { opacity: 0, transition: { duration: 0.08 } } }, K = { enter: (e2) => ({ opacity: 0, x: 48 * e2 }), center: { opacity: 1, x: 0, transition: { x: z, opacity: { duration: 0.22, ease: P } } }, exit: (e2) => ({ opacity: 0, x: -36 * e2, transition: { x: z, opacity: { duration: 0.14, ease: F } } }) };
  function U({ text: e2, direction: t2, reduced: r2 }) {
    let n2 = e2.split(/\s+/).filter(Boolean);
    return (0, a.jsx)("span", { className: _().rolling, "aria-hidden": "true", children: n2.map((e3, n3) => (0, a.jsx)("span", { className: _().word, children: (0, a.jsx)(l.N, { initial: false, mode: "popLayout", custom: t2, children: (0, a.jsx)(s.PY1.span, { className: _().wordInner, custom: t2, variants: r2 ? W : H, initial: "enter", animate: "center", exit: "exit", children: e3 }, e3) }) }, n3)) });
  }
  function V(e2) {
    let t2 = e2 ? 2 * e2.start.getTime() + e2.end.getTime() : null, [r2, a2] = (0, n.useState)(t2), [i2, l2] = (0, n.useState)(1);
    return t2 !== r2 && (a2(t2), l2(null === t2 || null === r2 || t2 >= r2 ? 1 : -1)), i2;
  }
  let G = (e2, t2) => {
    let r2 = N(e2, t2);
    return { row: Math.floor(r2 / 7), col: r2 % 7 };
  };
  function J({ row: e2, segment: t2, reduced: r2 }) {
    let i2 = (0, o.d)(t2?.left ?? 0), l2 = (0, o.d)(t2?.width ?? 0), c2 = (0, o.d)(+!!t2), m2 = (0, d.G)(i2, (e3) => `${e3}%`), g2 = (0, d.G)(l2, (e3) => `${e3}%`), p2 = (0, n.useRef)(!t2);
    return (0, n.useLayoutEffect)(() => {
      if (!t2) {
        p2.current = true, (0, u.i)(c2, 0, { duration: 0.14 * !r2 });
        return;
      }
      p2.current || r2 ? (i2.jump(t2.left), l2.jump(t2.width)) : ((0, u.i)(i2, t2.left, I), (0, u.i)(l2, t2.width, I)), p2.current = false, (0, u.i)(c2, 1, { duration: 0.16 * !r2 });
    }, [i2, c2, r2, t2, l2]), (0, a.jsx)(s.PY1.span, { className: _().bar, style: { left: m2, width: g2, opacity: c2, top: `calc(${e2} * var(--cell) + 3px)` } });
  }
  function X({ cell: e2, reduced: t2 }) {
    let r2 = (0, o.d)(e2?.col ?? 0), i2 = (0, o.d)(e2?.row ?? 0), l2 = (0, o.d)(+!!e2), c2 = (0, o.d)(e2 ? 1 : 0.8), m2 = (0, d.G)(() => `translate(${100 * r2.get()}%, ${100 * i2.get()}%) scale(${c2.get()})`), g2 = (0, n.useRef)(!e2);
    return (0, n.useLayoutEffect)(() => {
      if (!e2) {
        g2.current = true, (0, u.i)(l2, 0, { duration: 0.12 * !t2 }), (0, u.i)(c2, 0.8, { duration: 0.12 * !t2 });
        return;
      }
      g2.current || t2 ? (r2.jump(e2.col), i2.jump(e2.row)) : ((0, u.i)(r2, e2.col, B), (0, u.i)(i2, e2.row, B)), g2.current = false, (0, u.i)(l2, 1, { duration: 0.16 * !t2 }), (0, u.i)(c2, 1, t2 ? { duration: 0 } : B);
    }, [e2, l2, t2, c2, r2, i2]), (0, a.jsx)(s.PY1.span, { className: _().thumb, style: { transform: m2, opacity: l2 } });
  }
  function Z({ month: e2, range: t2, tabbable: r2, today: i2, minDate: l2, maxDate: s2, weekStartsOn: o2, reduced: d2, formatters: u2, onPick: c2, onHover: m2, onKey: g2, onFocusDay: p2, idBase: h2 }) {
    let f2 = (0, n.useMemo)(() => b(e2, -((e2.getDay() - o2 + 7) % 7)), [e2, o2]), y2 = (0, n.useMemo)(() => Array.from({ length: 6 }, (e3, t3) => Array.from({ length: 7 }, (e4, r3) => b(f2, 7 * t3 + r3))), [f2]), w2 = `${h2}-${S(e2)}`, x2 = t2?.start, v2 = t2?.end, k2 = x2 ? S(x2) : "", j2 = v2 ? S(v2) : "", L2 = (0, n.useMemo)(() => {
      if (!k2 || !j2) return y2.map(() => null);
      let t3 = $(k2), r3 = $(j2), a2 = 100 / 7;
      return y2.map((n2) => {
        let i3 = n2.filter((t4) => 0 === M(t4, e2));
        if (!i3.length) return null;
        let l3 = i3[0], s3 = i3[i3.length - 1], o3 = N(t3, l3) > 0 ? t3 : l3, d3 = 0 > N(r3, s3) ? r3 : s3;
        if (0 >= N(o3, d3)) {
          let e3 = N(o3, f2) % 7;
          return { left: e3 * a2, width: (N(d3, f2) % 7 - e3 + 1) * a2 };
        }
        return 0 > N(s3, t3) ? { left: (N(s3, f2) % 7 + 1) * a2, width: 0 } : { left: N(l3, f2) % 7 * a2, width: 0 };
      });
    }, [f2, j2, k2, e2, y2]), Y2 = (0, n.useMemo)(() => k2 && 0 === M($(k2), e2) ? G($(k2), f2) : null, [k2, e2, f2]), T2 = (0, n.useMemo)(() => j2 && j2 !== k2 && 0 === M($(j2), e2) ? G($(j2), f2) : null, [j2, k2, e2, f2]);
    return (0, a.jsxs)("div", { className: _().month, children: [(0, a.jsx)("p", { id: w2, className: _().monthTitle, children: u2.title.format(e2) }), (0, a.jsxs)("div", { role: "grid", "aria-labelledby": w2, className: _().grid, children: [(0, a.jsx)("div", { role: "row", className: _().weekdays, children: y2[0].map((e3) => (0, a.jsx)("span", { role: "columnheader", "aria-label": u2.weekdayLong.format(e3), children: u2.weekday.format(e3).slice(0, 2) }, e3.getDay())) }), (0, a.jsxs)("div", { className: _().weeks, children: [(0, a.jsxs)("span", { className: _().layer, "aria-hidden": "true", children: [L2.map((e3, t3) => (0, a.jsx)(J, { row: t3, segment: e3, reduced: d2 }, t3)), (0, a.jsx)(X, { cell: Y2, reduced: d2 }), (0, a.jsx)(X, { cell: T2, reduced: d2 })] }), y2.map((t3, n2) => (0, a.jsx)("div", { role: "row", className: _().week, children: t3.map((t4) => {
      if (0 !== M(t4, e2)) return (0, a.jsx)("span", { role: "gridcell", className: _().blank }, S(t4));
      let n3 = S(t4), o3 = !!(l2 && 0 > N(t4, l2) || s2 && N(t4, s2) > 0), d3 = !!(x2 && v2 && N(t4, x2) >= 0 && 0 >= N(t4, v2)), h3 = D(t4, x2) || D(t4, v2), f3 = D(t4, i2);
      return (0, a.jsx)("span", { role: "gridcell", "aria-selected": d3, className: _().cell, children: (0, a.jsx)("button", { type: "button", className: _().day, "data-date": n3, "data-edge": h3 || void 0, "data-range": d3 || void 0, "data-today": f3 || void 0, tabIndex: n3 === r2 ? 0 : -1, disabled: o3, "aria-current": f3 ? "date" : void 0, "aria-label": u2.day.format(t4), onClick: () => c2(t4), onPointerEnter: () => {
        o3 || m2(t4);
      }, onFocus: () => p2(t4), onKeyDown: (e3) => g2(e3, t4), children: (0, a.jsx)("span", { children: t4.getDate() }) }) }, n3);
    }) }, n2))] })] })] });
  }
  function Q({ children: e2, direction: t2, reduced: r2 }) {
    let n2 = (0, c.tF)();
    return (0, a.jsx)(s.PY1.div, { className: _().months, "data-current": n2 || void 0, inert: !n2 || void 0, custom: t2, variants: r2 ? W : K, initial: "enter", animate: "center", exit: "exit", children: e2 });
  }
  function ee({ value: e2, defaultValue: t2 = null, onChange: r2, label: d2 = "Date range", placeholder: c2 = "Select dates", presets: w2 = Y, minDate: R2, maxDate: I2, weekStartsOn: z2 = 0, locale: H2 = "en-US", months: W2 = "auto", boundary: K2, className: G2 }) {
    let J2, X2 = (J2 = (0, n.useSyncExternalStore)(T, () => true, () => false), !!(0, i.I)() && J2), et = (0, y.n)(), er = (0, n.useId)(), [ea, en] = (0, n.useState)(t2), ei = void 0 !== e2 ? e2 : ea, [el, es] = (0, n.useState)(false), [eo, ed] = (0, n.useState)(false), [eu, ec] = (0, n.useState)(0), [em, eg] = (0, n.useState)(() => v(ei?.end ?? new Date(2e3, 0, 1))), [ep, eh] = (0, n.useState)(1), [ef, ey] = (0, n.useState)(ei), [ew, e_] = (0, n.useState)(null), [ex, ev] = (0, n.useState)(null), [eb, ek] = (0, n.useState)(""), ej = (0, n.useMemo)(() => ({ label: new Intl.DateTimeFormat(H2, { month: "short", day: "numeric", year: "numeric" }), title: new Intl.DateTimeFormat(H2, { month: "long", year: "numeric" }), day: new Intl.DateTimeFormat(H2, { weekday: "long", month: "long", day: "numeric", year: "numeric" }), weekday: new Intl.DateTimeFormat(H2, { weekday: "short" }), weekdayLong: new Intl.DateTimeFormat(H2, { weekday: "long" }) }), [H2]), eN = (0, n.useCallback)((e10) => e10 ? D(e10.start, e10.end) ? ej.label.format(e10.start) : ej.label.formatRange(e10.start, e10.end) : c2, [ej, c2]), eM = eo ? 1 : 2, eD = (0, n.useMemo)(() => Array.from({ length: eM }, (e10, t3) => k(em, t3)), [eM, em]), eS = ew ? L(ew, ex ?? ew) : ef, e$ = et && !ew ? w2.findIndex((e10) => {
      let t3;
      return t3 = e10.range(et), !!(t3 && ef && D(t3.start, ef.start) && D(t3.end, ef.end));
    }) : -1, eL = eS ? N(eS.end, eS.start) + 1 : 0, eY = V(ei), eT = V(eS), eE = (0, n.useRef)(null), eP = (0, n.useRef)(null), eF = (0, n.useRef)(null), eR = (0, n.useRef)(null), eC = (0, n.useRef)(null), eA = (0, o.d)("100%"), eI = (0, o.d)("100%"), eB = (0, o.d)(18), ez = (0, o.d)(0), eH = (0, o.d)("auto"), eW = (0, n.useRef)({ trigger: { w: 0, h: 0 }, panel: null }), eq = (0, n.useRef)({ open: false, reduced: false, ready: false }), eO = (0, n.useRef)(false), eK = (0, n.useRef)(K2);
    (0, n.useLayoutEffect)(() => {
      eK.current = K2;
    }, [K2]);
    let eU = (0, n.useCallback)(() => {
      let e10 = eK.current?.(), t3 = { left: 0, right: document.documentElement.clientWidth };
      if (!e10) return t3;
      let r3 = e10.getBoundingClientRect();
      return { left: Math.max(t3.left, r3.left), right: Math.min(t3.right, r3.right) };
    }, []), eV = (0, n.useCallback)(() => {
      eO.current = false;
      let { trigger: e10, panel: t3 } = eW.current, r3 = eq.current;
      if (!e10.w) return;
      let a2 = r3.open && t3 ? t3 : null, n2 = a2 ?? e10, i2 = 0;
      if (a2 && eE.current) {
        let e11 = eE.current.getBoundingClientRect(), t4 = eU();
        i2 = Math.max(i2 = Math.min(0, t4.right - 8 - (e11.left + a2.w)), t4.left + 8 - e11.left);
      }
      let l2 = a2 ? 26 : 18;
      if (!r3.ready || r3.reduced) {
        eA.jump(n2.w), eI.jump(n2.h), eB.jump(l2), ez.jump(i2), eH.jump(e10.w), r3.ready = true;
        return;
      }
      let s2 = a2 || r3.open ? C : A;
      (0, u.i)(eA, n2.w, s2), (0, u.i)(eI, n2.h, s2), (0, u.i)(eB, l2, s2), (0, u.i)(ez, i2, s2), (0, u.i)(eH, e10.w, f.T.spring.morph);
    }, [eU, eI, eB, eH, eA, ez]), eG = (0, n.useCallback)(() => {
      eO.current || (eO.current = true, queueMicrotask(eV));
    }, [eV]);
    (0, n.useLayoutEffect)(() => {
      eq.current.open = el, eq.current.reduced = X2, el || (eW.current.panel = null), eG();
    }, [el, X2, eG]), (0, n.useLayoutEffect)(() => {
      let e10 = eP.current;
      if (!e10) return;
      let t3 = () => {
        eW.current.trigger = { w: e10.offsetWidth, h: e10.offsetHeight }, eG();
      };
      if (t3(), "u" < typeof ResizeObserver) return;
      let r3 = new ResizeObserver(t3);
      return r3.observe(e10), () => r3.disconnect();
    }, [eG]), (0, n.useLayoutEffect)(() => {
      let e10 = eF.current;
      if (!el || !e10) return;
      let t3 = () => {
        eW.current.panel = { w: e10.offsetWidth, h: e10.offsetHeight }, eG();
      };
      if (t3(), "u" < typeof ResizeObserver) return;
      let r3 = new ResizeObserver(t3);
      return r3.observe(e10), () => r3.disconnect();
    }, [el, eG]), (0, n.useEffect)(() => {
      if (!el) return;
      let e10 = requestAnimationFrame(() => {
        let e11 = eF.current;
        if (!e11) return;
        let t3 = e11.getBoundingClientRect(), r3 = t3.bottom - (window.innerHeight - 8);
        r3 <= 0 || window.scrollBy({ top: Math.min(r3, Math.max(0, t3.top - 8)), behavior: X2 ? "instant" : "smooth" });
      });
      return () => cancelAnimationFrame(e10);
    }, [el, X2]), (0, n.useEffect)(() => {
      if (el) return;
      let e10 = eP.current;
      if (!e10) return;
      let t3 = e10.getBoundingClientRect();
      (t3.bottom < 0 || t3.top > window.innerHeight) && e10.scrollIntoView({ block: "center", behavior: X2 ? "instant" : "smooth" });
    }, [el, X2]);
    let eJ = (0, n.useCallback)(() => {
      let e10 = eU(), t3 = Math.max(0, e10.right - e10.left - 16);
      return { single: 1 === W2 || "auto" === W2 && t3 < 712, width: Math.min(352, t3) };
    }, [eU, W2]);
    (0, n.useEffect)(() => {
      if (!el) return;
      let e10 = () => {
        let e11 = eJ();
        ed(e11.single), ec(e11.width), eG();
      };
      return window.addEventListener("resize", e10), () => window.removeEventListener("resize", e10);
    }, [eJ, el, eG]);
    let eX = (e10, t3, r3) => {
      let a2 = v(e10?.end ?? r3);
      return t3 ? a2 : k(a2, -1);
    }, eZ = (0, n.useCallback)((e10) => {
      e10 && (eC.current = "trigger"), eh(0), es(false), e_(null), ev(null);
    }, []);
    (0, n.useLayoutEffect)(() => {
      let e10 = eC.current;
      if (e10) {
        if ("trigger" === e10 && !el) {
          eC.current = null, eP.current?.focus({ preventScroll: true });
          return;
        }
        if ("day" === e10 && el) {
          let e11 = eF.current?.querySelector(`[data-current] [data-date="${eb}"]`);
          e11 && (eC.current = null, e11.focus({ preventScroll: true }));
        }
      }
    }, [eb, el, em, eo]), (0, n.useEffect)(() => {
      if (!el) return;
      let e10 = (e11) => {
        eE.current?.contains(e11.target) || eZ(false);
      };
      return document.addEventListener("pointerdown", e10), () => document.removeEventListener("pointerdown", e10);
    }, [eZ, el]);
    let eQ = (e10) => {
      let t3 = M(e10, em);
      t3 && (eh(Math.sign(t3)), eg(e10));
    }, e0 = (e10) => {
      if (ek(S(e10)), !ew) {
        e_(e10), ev(e10);
        return;
      }
      ey(L(ew, e10)), e_(null), ev(null);
    }, e1 = (e10, t3) => {
      let r3, a2 = (t3.getDay() - z2 + 7) % 7, n2 = { ArrowLeft: () => b(t3, -1), ArrowRight: () => b(t3, 1), ArrowUp: () => b(t3, -7), ArrowDown: () => b(t3, 7), Home: () => b(t3, -a2), End: () => b(t3, 6 - a2), PageUp: () => j(t3, e10.shiftKey ? -12 : -1), PageDown: () => j(t3, e10.shiftKey ? 12 : 1) }[e10.key];
      if (!n2) return;
      e10.preventDefault();
      let i2 = (r3 = n2(), R2 && 0 > N(r3, R2) ? x(R2) : I2 && N(r3, I2) > 0 ? x(I2) : r3);
      ek(S(i2)), ew && ev(i2), eC.current = "day";
      let l2 = k(em, eM - 1);
      0 > M(i2, em) ? eQ(v(i2)) : M(i2, l2) > 0 && eQ(k(v(i2), -(eM - 1)));
    }, e22 = (0, n.useMemo)(() => {
      let e10 = (e11) => eD.some((t3) => 0 === M(e11, t3));
      return eb && e10($(eb)) ? eb : eS && e10(eS.start) ? S(eS.start) : S(eD[0]);
    }, [eb, eS, eD]), e7 = (0, o.d)(0), e5 = (0, o.d)(0), e4 = (0, o.d)(0), e6 = (0, o.d)(0), e3 = (0, o.d)(0);
    (0, n.useLayoutEffect)(() => {
      let e10 = eR.current, t3 = e$ < 0 ? null : e10?.querySelector(`[data-preset="${e$}"]`);
      if (!e10 || !t3) return void (0, u.i)(e3, 0, { duration: 0.14 * !X2 });
      let r3 = [t3.offsetLeft, t3.offsetTop, t3.offsetWidth, t3.offsetHeight];
      0.05 > e3.get() || X2 ? (e7.jump(r3[0]), e5.jump(r3[1]), e4.jump(r3[2]), e6.jump(r3[3])) : ((0, u.i)(e7, r3[0], B), (0, u.i)(e5, r3[1], B), (0, u.i)(e4, r3[2], B), (0, u.i)(e6, r3[3], B)), (0, u.i)(e3, 1, { duration: 0.16 * !X2 }), eo && (t3.offsetLeft < e10.scrollLeft || t3.offsetLeft + t3.offsetWidth > e10.scrollLeft + e10.clientWidth) && e10.scrollTo({ left: t3.offsetLeft - 12, behavior: X2 ? "auto" : "smooth" });
    }, [e$, eo, e3, e6, e4, e7, e5, el, X2]);
    let e8 = eN(ei), e9 = eS ? eN(eS) : "No dates", te = eS ? `${eL} ${1 === eL ? "day" : "days"}` : "", tt = el ? ew ? `Start ${ej.label.format(ew)}. Choose an end date.` : eS ? `${e9}, ${te}` : "" : "", tr = X2 ? void 0 : `${er}-value`, ta = eo && eu ? Math.max(32, Math.min(42, Math.floor((eu - 24) / 7))) : 36, tn = el ? X2 ? { opacity: 0 } : { opacity: 0, filter: `blur(${E.subtle}px)` } : { opacity: 1, filter: "blur(0px)" }, ti = el ? { duration: 0.12, ease: F } : { duration: 0.22, ease: P, delay: 0.1 * !X2 };
    return (0, a.jsxs)(s.PY1.div, { ref: eE, className: [_().root, G2].filter(Boolean).join(" "), style: { width: eH }, "data-open": el || void 0, onKeyDown: (e10) => {
      "Escape" === e10.key && el && (e10.preventDefault(), e10.stopPropagation(), eZ(true));
    }, onBlur: (e10) => {
      let t3 = e10.relatedTarget;
      el && t3 && !e10.currentTarget.contains(t3) && eZ(false);
    }, children: [(0, a.jsxs)("button", { ref: eP, type: "button", className: _().trigger, "aria-haspopup": "dialog", "aria-expanded": el, "aria-controls": el ? `${er}-panel` : void 0, "aria-label": `${d2}: ${e8}`, disabled: !et, inert: el || void 0, onClick: () => {
      if (!et) return;
      let e10 = eJ();
      ed(e10.single), ec(e10.width), ey(ei), e_(null), ev(null), eg(eX(ei, e10.single, et)), eh(0), ek(S(ei?.start ?? et)), eC.current = "day", es(true);
    }, children: [(0, a.jsx)(s.PY1.span, { className: _().triggerIcon, initial: false, animate: tn, transition: ti, children: (0, a.jsx)(m.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }) }), el || !tr ? (0, a.jsx)(s.PY1.span, { className: _().value, "data-empty": !ei || void 0, initial: false, animate: el ? { opacity: 0 } : { opacity: 1 }, transition: ti, children: (0, a.jsx)(U, { text: e8, direction: eY, reduced: X2 }) }, "resting") : (0, a.jsx)(s.PY1.span, { layoutId: tr, layout: "position", className: _().value, "data-empty": !ei || void 0, transition: A, children: (0, a.jsx)(U, { text: e8, direction: eY, reduced: X2 }) }, "shared"), (0, a.jsx)(s.PY1.span, { className: _().chevron, initial: false, animate: tn, transition: ti, children: (0, a.jsx)(g.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }) })] }), (0, a.jsx)(s.PY1.div, { className: _().surface, style: { width: eA, height: eI, borderRadius: eB, x: ez }, children: (0, a.jsx)(l.N, { children: el && et && (0, a.jsxs)(s.PY1.div, { ref: eF, id: `${er}-panel`, className: _().panel, role: "dialog", "aria-label": d2, "data-compact": eo || void 0, style: { "--cell": `${ta}px`, width: eo && eu ? eu : void 0 }, exit: { opacity: 1, transition: { duration: 0.14 } }, children: [(0, a.jsxs)(s.PY1.div, { className: _().body, variants: X2 ? O : q, initial: "hidden", animate: "shown", exit: "gone", children: [(0, a.jsxs)("div", { ref: eR, className: _().rail, role: "group", "aria-label": "Presets", onKeyDown: (e10) => {
      let t3 = eo ? ["ArrowLeft", "ArrowRight"] : ["ArrowUp", "ArrowDown"];
      if (!t3.includes(e10.key)) return;
      let r3 = Array.from(e10.currentTarget.querySelectorAll("[data-preset]")), a2 = r3.indexOf(document.activeElement);
      a2 < 0 || (e10.preventDefault(), r3[(a2 + (e10.key === t3[1] ? 1 : -1) + r3.length) % r3.length]?.focus());
    }, children: [(0, a.jsx)(s.PY1.span, { className: _().railHighlight, style: { x: e7, y: e5, width: e4, height: e6, opacity: e3 }, "aria-hidden": "true" }), w2.map((e10, t3) => (0, a.jsx)("button", { type: "button", className: _().preset, "data-preset": t3, "aria-pressed": t3 === e$, onClick: () => ((e11) => {
      let t4;
      if (!et) return;
      let r3 = e11.range(et);
      ey(r3), e_(null), ev(null), ek(S(r3.start)), t4 = k(em, eM - 1), M(r3.start, em) >= 0 && 0 >= M(r3.end, t4) || eQ(eX(r3, eo, r3.end));
    })(e10), children: e10.label }, e10.label))] }), (0, a.jsxs)("div", { className: _().calendars, onPointerLeave: () => {
      ew && ev(null);
    }, children: [(0, a.jsx)("button", { type: "button", className: _().navButton, "data-side": "prev", "aria-label": "Previous month", onClick: () => eQ(k(em, -1)), disabled: !!(R2 && 0 >= M(em, R2)), children: (0, a.jsx)(p.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }) }), (0, a.jsx)("button", { type: "button", className: _().navButton, "data-side": "next", "aria-label": "Next month", onClick: () => eQ(k(em, 1)), disabled: !!(I2 && M(k(em, eM - 1), I2) >= 0), children: (0, a.jsx)(h.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }) }), (0, a.jsx)("div", { className: _().viewport, children: (0, a.jsx)(l.N, { initial: false, custom: ep, children: (0, a.jsx)(Q, { direction: ep, reduced: X2, children: eD.map((e10) => (0, a.jsx)(Z, { month: e10, range: eS, tabbable: e22, today: et, minDate: R2, maxDate: I2, weekStartsOn: z2, reduced: X2, formatters: ej, idBase: er, onPick: e0, onHover: (e11) => {
      ew && ev(e11);
    }, onKey: e1, onFocusDay: (e11) => ek(S(e11)) }, S(e10))) }, `${S(em)}-${eM}`) }) })] })] }), (0, a.jsxs)("div", { className: _().footer, children: [(0, a.jsxs)("div", { className: _().summary, children: [(0, a.jsx)(s.PY1.span, { layoutId: tr, layout: tr ? "position" : void 0, className: _().summaryValue, transition: C, variants: tr ? void 0 : O, initial: tr ? void 0 : "hidden", animate: tr ? void 0 : "shown", exit: tr ? void 0 : "gone", children: (0, a.jsx)(U, { text: e9, direction: eT, reduced: X2 }) }), (0, a.jsx)(s.PY1.span, { className: _().summaryCount, variants: X2 ? O : q, initial: "hidden", animate: "shown", exit: "gone", children: te && (0, a.jsx)(U, { text: ew && D(ew, ex) ? "Pick an end date" : te, direction: eT, reduced: X2 }) })] }), (0, a.jsxs)(s.PY1.div, { className: _().actions, variants: X2 ? O : q, initial: "hidden", animate: "shown", exit: "gone", children: [(0, a.jsx)("button", { type: "button", className: _().ghost, onClick: () => eZ(true), children: "Cancel" }), (0, a.jsx)("button", { type: "button", className: _().primary, onClick: () => {
      let t3 = ew ? { start: ew, end: ew } : ef;
      t3 && (void 0 === e2 && en(t3), r2?.(t3), eZ(true));
    }, disabled: !eS, children: "Apply" })] })] }), (0, a.jsx)("p", { className: _().srOnly, "aria-live": "polite", children: tt })] }, "panel") }) })] });
  }
}

__m(__module,__exports,__require);
}