function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  let i;
  n.d(t, { o: () => L });
  var r = n(95155), a = n(55809), u = n(25354), s = n(18310), l = n(28245), o = n(92171), c = n(80642), d = n(2125), m = n(36565), f = n(12115), p = n(7770), h = n(78684), x = n.n(h);
  let { spring: b, duration: y, blur: _ } = p.T, g = [...p.T.ease.enter], v = [...p.T.ease.standard], w = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], N = {
    type: "spring",
    stiffness: (i = 2 * Math.PI / (1.2 * b.morph.visualDuration)) * i,
    damping: 2 * (1 - b.morph.bounce) * i
  }, j = (e2) => (String(e2).split(".")[1] ?? "").length, R = (e2, t2) => "function" == typeof e2 ? e2(t2) : e2 ?? "", $ = {
    enter: (e2) => ({
      width: 0,
      scale: 0.6,
      opacity: 0,
      y: `${0.3 * e2}em`,
      filter: `blur(${_.soft}px)`
    }),
    center: {
      width: "auto",
      scale: 1,
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transitionEnd: { filter: "none" },
      transition: {
        width: b.morph,
        scale: b.morph,
        opacity: b.morph,
        y: b.snappy,
        filter: { duration: 0.3, ease: v }
      }
    },
    exit: (e2) => ({
      width: 0,
      scale: 0.6,
      opacity: 0,
      y: `${-0.3 * e2}em`,
      filter: `blur(${_.subtle}px)`,
      transition: {
        width: b.smooth,
        scale: b.smooth,
        y: { duration: y.fast, ease: v },
        opacity: { duration: y.instant },
        filter: { duration: y.instant }
      }
    })
  }, M = (e2) => ({ width: "auto", scale: 1, opacity: e2, y: 0, filter: "none" }), P = {
    enter: M(0),
    center: { ...M(1), transition: { duration: y.instant } },
    exit: { width: 0, opacity: 0, transition: { duration: 0 } }
  }, S = {
    enter: M(1),
    center: { ...M(1), transition: { duration: 0 } },
    exit: { width: 0, opacity: 0, transition: { duration: 0 } }
  };
  function E({ position: e2, digit: t2 }) {
    let n2 = (e3) => ((t2 - e3) % 10 + 15) % 10 - 5, i2 = (0, a.G)(e2, (e3) => `${1.05 * n2(e3)}em`), s2 = (0, a.G)(e2, (e3) => Math.max(0, 1 - Math.abs(n2(e3)) ** 1.5 * 1.1)), l2 = (0, a.G)(e2, (e3) => Math.abs(n2(e3)) >= 1 ? "hidden" : "visible"), o2 = (0, a.G)(e2, (e3) => {
      let t3 = Math.abs(n2(e3));
      return t3 < 0.02 || t3 >= 1 ? "none" : `blur(${(t3 * _.soft * 0.75).toFixed(2)}px)`;
    });
    return (0, r.jsx)(u.PY1.span, {
      className: x().glyph,
      style: { y: i2, opacity: s2, filter: o2, visibility: l2 },
      children: t2
    });
  }
  function T({ digit: e2, direction: t2, instant: n2 }) {
    let i2 = (0, s.I)(), a2 = (0, l.d)(e2), u2 = (0, f.useRef)({ digit: e2, target: e2 });
    return (0, f.useLayoutEffect)(() => {
      let r2 = u2.current;
      if (r2.digit === e2) return;
      let s2 = t2 > 0 ? (e2 - r2.digit + 10) % 10 : -((r2.digit - e2 + 10) % 10);
      Math.abs(s2) > 5 && (s2 -= 10 * Math.sign(s2)), r2.target += s2, r2.digit = e2, n2 || i2 ? a2.jump(r2.target) : (0, o.i)(a2, r2.target, b.snappy);
    }, [e2, t2, n2, a2, i2]), (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)("span", { className: x().sizer, children: "0" }),
        w.map((e3) => (0, r.jsx)(E, { position: a2, digit: e3 }, e3))
      ]
    });
  }
  function k({ value: e2, format: t2, direction: n2, instant: i2 }) {
    let a2, l2, o2, d2 = (0, s.I)(), m2 = i2 ? S : d2 ? P : $;
    return (0, r.jsx)(c.N, {
      initial: false,
      custom: n2,
      children: (l2 = (a2 = t2.formatToParts(e2)).reduce(
        (e3, t3) => e3 + ("integer" === t3.type ? t3.value.length : 0),
        0
      ), o2 = 0, a2.flatMap(
        (e3, t3) => "integer" === e3.type ? [...e3.value].map((e4) => ({ key: `i${--l2}`, digit: Number(e4) })) : "fraction" === e3.type ? [...e3.value].map((e4) => ({ key: `f${o2++}`, digit: Number(e4) })) : [
          {
            key: "group" === e3.type ? `g${l2}` : "decimal" === e3.type ? "d" : "minusSign" === e3.type ? "m" : `${e3.type}${t3}`,
            text: e3.value
          }
        ]
      )).map(
        (e3) => (0, r.jsx)(
          u.PY1.span,
          {
            className: "digit" in e3 ? x().column : x().symbol,
            custom: n2,
            variants: m2,
            initial: "enter",
            animate: "center",
            exit: "exit",
            children: "digit" in e3 ? (0, r.jsx)(T, { digit: e3.digit, direction: n2, instant: i2 }) : e3.text
          },
          e3.key
        )
      )
    });
  }
  function D({ text: e2, direction: t2, className: n2 }) {
    let i2 = (0, s.I)();
    return (0, r.jsx)("span", {
      className: n2,
      children: (0, r.jsx)(c.N, {
        initial: false,
        custom: t2,
        children: [...e2].map(
          (e3, n3) => (0, r.jsx)(
            u.PY1.span,
            {
              className: x().char,
              custom: t2,
              variants: i2 ? P : $,
              initial: "enter",
              animate: "center",
              exit: "exit",
              children: e3
            },
            `${n3}:${e3}`
          )
        )
      })
    });
  }
  let I = (e2) => {
    let t2 = e2?.replace(/[^\d.-]/g, "");
    return t2 && /\d/.test(t2) && Number.isFinite(Number(t2)) ? Number(t2) : null;
  }, F = (e2, t2) => {
    let n2 = e2.split(" ");
    return t2.split(" ").map((e3, t3) => {
      let i2 = I(n2[t3]), r2 = I(e3);
      return null !== i2 && null !== r2 && r2 < i2 ? -1 : 1;
    });
  }, C = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.3 * e2}em`,
      filter: `blur(${_.soft}px)`
    }),
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transitionEnd: { filter: "none" },
      transition: { duration: 0.22, ease: g, opacity: b.morph }
    },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.3 * e2}em`,
      filter: `blur(${_.subtle}px)`,
      transition: { duration: 0.14, ease: v }
    })
  }, z = {
    enter: { opacity: 0, y: 0, filter: "none" },
    center: {
      opacity: 1,
      y: 0,
      filter: "none",
      transition: { duration: y.instant }
    },
    exit: { opacity: 0, transition: { duration: 0 } }
  };
  function A({ word: e2, direction: t2 }) {
    let n2 = (0, s.I)(), i2 = (0, f.useRef)(null), a2 = (0, l.d)("auto"), d2 = (0, f.useRef)(false);
    return (0, f.useLayoutEffect)(() => {
      let e3 = i2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => {
        !d2.current || n2 ? a2.jump(e3.offsetWidth) : (0, o.i)(a2, e3.offsetWidth, b.morph), d2.current = true;
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [n2, a2]), (0, r.jsxs)(u.PY1.span, {
      className: x().wordSlot,
      style: { width: a2 },
      children: [
        (0, r.jsx)("span", { ref: i2, className: x().wordSizer, children: e2 }),
        (0, r.jsx)(c.N, {
          initial: false,
          mode: "popLayout",
          custom: t2,
          children: (0, r.jsx)(
            u.PY1.span,
            {
              className: x().word,
              custom: t2,
              variants: n2 ? z : C,
              initial: "enter",
              animate: "center",
              exit: "exit",
              children: e2
            },
            e2
          )
        })
      ]
    });
  }
  function G({ text: e2 }) {
    let [t2, n2] = (0, f.useState)({ text: e2, directions: [] });
    t2.text !== e2 && n2({ text: e2, directions: F(t2.text, e2) });
    let i2 = t2.text === e2 ? t2.directions : F(t2.text, e2), a2 = e2.split(" ");
    return (0, r.jsxs)(r.Fragment, {
      children: [
        (0, r.jsx)("span", { className: x().srOnly, children: e2 }),
        (0, r.jsx)("span", {
          className: x().words,
          "aria-hidden": "true",
          children: a2.map(
            (e3, t3) => (0, r.jsxs)(
              f.Fragment,
              {
                children: [
                  t3 > 0 && " ",
                  (0, r.jsx)(A, { word: e3, direction: i2[t3] ?? 1 })
                ]
              },
              t3
            )
          )
        })
      ]
    });
  }
  function U({ id: e2, text: t2, className: n2 }) {
    return (0, r.jsx)(c.N, {
      initial: false,
      children: t2 ? (0, r.jsx)(X, { id: e2, text: t2, className: n2 }, "message") : null
    });
  }
  function X({ id: e2, text: t2, className: n2 }) {
    let i2 = (0, s.I)(), a2 = (0, f.useRef)(null), [l2, o2] = (0, f.useState)("auto");
    return (0, f.useLayoutEffect)(() => {
      let e3 = a2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(
        ([t4]) => o2(t4?.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight)
      );
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, r.jsx)(u.PY1.span, {
      className: x().messageSlot,
      initial: { height: 0, opacity: 0 },
      animate: { height: l2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: i2 ? { duration: 0 } : { height: b.smooth, opacity: { duration: y.instant } }
      },
      transition: i2 ? { duration: 0 } : { height: b.smooth, opacity: { duration: y.fast } },
      children: (0, r.jsx)(u.PY1.span, {
        ref: a2,
        id: e2,
        className: n2,
        initial: !i2 && { y: "0.35em", filter: `blur(${_.soft}px)` },
        animate: { y: 0, filter: "blur(0px)" },
        transition: { duration: i2 ? 0 : y.standard, ease: g },
        children: (0, r.jsx)(G, { text: t2 })
      })
    });
  }
  function O({ id: e2, edge: t2, text: n2 }) {
    let i2 = (0, s.I)();
    return (0, r.jsx)(c.N, {
      initial: false,
      children: 0 !== t2 && (0, r.jsx)(
        u.PY1.span,
        {
          id: e2,
          className: x().limit,
          initial: i2 ? { opacity: 0 } : {
            opacity: 0,
            y: `${0.45 * t2}em`,
            filter: `blur(${_.subtle}px)`
          },
          animate: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transitionEnd: { filter: "none" }
          },
          exit: {
            opacity: 0,
            transition: { duration: i2 ? y.instant : y.standard, ease: v }
          },
          transition: i2 ? { duration: y.instant } : {
            y: b.snappy,
            opacity: { duration: y.fast },
            filter: { duration: y.fast }
          },
          children: n2
        },
        "limit"
      )
    });
  }
  function Y({
    toward: e2,
    label: t2,
    disabled: n2,
    controls: i2,
    limit: a2,
    pressed: u2,
    iconRef: s2,
    onPress: l2,
    onRelease: o2,
    onActivate: c2
  }) {
    let f2 = e2 > 0 ? d.A : m.A;
    return (0, r.jsx)("button", {
      type: "button",
      className: x().step,
      disabled: n2,
      "aria-controls": i2,
      "aria-label": `${e2 > 0 ? "Increase" : "Decrease"} ${t2}`,
      "aria-disabled": a2 || void 0,
      "data-pressed": u2 || void 0,
      onPointerDown: (e3) => {
        0 === e3.button && l2();
      },
      onPointerUp: o2,
      onPointerLeave: o2,
      onPointerCancel: o2,
      onMouseDown: (e3) => e3.preventDefault(),
      onClick: (e3) => {
        0 === e3.detail && c2();
      },
      onContextMenu: (e3) => e3.preventDefault(),
      children: (0, r.jsx)("span", {
        ref: s2,
        className: x().icon,
        children: (0, r.jsx)(f2, {
          size: 16,
          strokeWidth: 1.75,
          "aria-hidden": "true"
        })
      })
    });
  }
  function L({
    label: e2,
    value: t2,
    defaultValue: n2 = 0,
    onValueChange: i2,
    min: c2 = 0,
    max: d2 = Number.MAX_SAFE_INTEGER,
    step: m2 = 1,
    largeStep: p2,
    description: h2,
    disabled: y2,
    id: _2,
    prefix: g2,
    suffix: v2,
    scrub: w2 = false,
    locale: $2 = "en-US",
    formatOptions: M2,
    size: P2 = "md",
    limitHint: S2 = true
  }) {
    let E2 = (0, s.I)(), T2 = (0, f.useId)(), I2 = _2 ?? T2, F2 = h2 ? `${I2}-description` : void 0, C2 = `${I2}-limit`, z2 = m2 > 0 ? m2 : 1, [A2, G2] = (0, f.useState)(n2), X2 = t2 ?? A2, [H, B] = (0, f.useState)(""), [K, W] = (0, f.useState)(false), [q, Z] = (0, f.useState)(0), [J, Q] = (0, f.useState)(false), [V, ee] = (0, f.useState)(""), [et, en] = (0, f.useState)(0), [ei, er] = (0, f.useState)(false), ea = (0, f.useRef)(null), eu = (0, f.useRef)(null), es = (0, f.useRef)(null), el = (0, f.useRef)(void 0), eo = (0, f.useRef)(void 0), ec = (0, f.useRef)(void 0), ed = (0, f.useRef)({ edge: 0, count: 0, at: 0 }), em = (0, f.useRef)(null), ef = (0, f.useRef)(null), ep = (0, f.useRef)(X2), eh = (0, f.useRef)(X2), ex = (0, f.useRef)(void 0), eb = (0, f.useRef)(null), ey = (0, f.useRef)(false), e_ = (0, f.useRef)(null), eg = (0, f.useRef)(false), ev = (0, f.useRef)(() => false), ew = (0, l.d)(0), eN = (0, l.d)(0), ej = (0, l.d)(0), eR = (0, a.G)(() => eN.get() + ej.get()), e$ = Number.isFinite(c2) ? c2 : 0, eM = Math.max(j(z2), j(e$)), eP = M2?.minimumFractionDigits ?? eM, eS = Math.max(eP, M2?.maximumFractionDigits ?? eM), eE = M2?.useGrouping ?? true, eT = (0, f.useMemo)(
      () => new Intl.NumberFormat($2, {
        minimumFractionDigits: eP,
        maximumFractionDigits: eS,
        useGrouping: eE,
        numberingSystem: "latn"
      }),
      [$2, eP, eS, eE]
    ), ek = (0, f.useMemo)(() => {
      let e3 = new Intl.NumberFormat($2).formatToParts(-1234.5);
      return {
        group: e3.find((e4) => "group" === e4.type)?.value ?? ",",
        decimal: e3.find((e4) => "decimal" === e4.type)?.value ?? "."
      };
    }, [$2]), eD = (e3) => Number(e3.toFixed(eM)) || 0, eI = (e3) => eD(e$ + Math.round((e3 - e$) / z2) * z2), eF = (e3, t3) => {
      let n3 = (e3 - e$) / z2;
      return eD(
        e$ + ((t3 > 0 ? Math.floor(n3 + 1e-7) : Math.ceil(n3 - 1e-7)) + t3) * z2
      );
    }, eC = (e3) => `${R(g2, e3)}${eT.format(e3)}${R(v2, e3)}`.trim();
    function ez(e3) {
      let t3 = e3.split(ek.group).join("").replace(ek.decimal, ".").replace(/[^\d.-]/g, "");
      if (!/\d/.test(t3)) return null;
      let n3 = Number(t3);
      return Number.isFinite(n3) ? n3 : null;
    }
    let eA = K ? ez(H) : null, eG = eA ?? X2, [eU, eX] = (0, f.useState)({ value: eG, direction: 1 });
    eU.value !== eG && eX({ value: eG, direction: eG > eU.value ? 1 : -1 });
    let eO = eU.value === eG ? eU.direction : eG > eU.value ? 1 : -1;
    function eY(e3, n3) {
      if (!Number.isFinite(e3)) return false;
      let r2 = Math.min(d2, Math.max(c2, e3)), a2 = Math.sign(e3 - r2);
      return a2 && "scrub" !== n3 ? (!(function(e4, t3) {
        let n4 = performance.now(), i3 = ed.current;
        i3.count = i3.edge === e4 && n4 - i3.at < 700 ? i3.count + 1 : 1, i3.edge = e4, i3.at = n4;
        let r3 = ea.current;
        if (r3 && (r3.dataset.strain = e4 > 0 ? "max" : "min", window.clearTimeout(ec.current), ec.current = window.setTimeout(() => {
          delete r3.dataset.strain;
        }, 420)), !E2) {
          (0, o.i)(ew, 0, {
            ...N,
            velocity: -(130 * e4) * (1 + 0.22 * Math.min(i3.count - 1, 4))
          });
          let n5 = (e4 > 0 ? es : eu).current;
          n5 && ("button" === t3 || "key" === t3) && (0, o.i)(
            n5,
            { x: [0, -2.5, 2.5, -1.5, 1, 0] },
            { duration: 0.32, ease: "easeOut" }
          );
        }
        S2 && (en(e4), window.clearTimeout(el.current), el.current = window.setTimeout(() => en(0), 1500));
      })(a2 > 0 ? 1 : -1, n3), ee(`${eC(r2)}, ${a2 > 0 ? "maximum" : "minimum"}`)) : "button" === n3 && r2 !== ep.current && ee(eC(r2)), r2 !== ep.current && (ep.current = r2, void 0 === t2 && G2(r2), i2?.(r2), true);
    }
    (0, f.useEffect)(
      () => () => {
        window.clearTimeout(ex.current), window.clearTimeout(el.current), window.clearTimeout(eo.current), window.clearTimeout(ec.current);
      },
      []
    );
    let eL = (e3, t3, n3) => eY(eF(ep.current, e3 * t3), n3);
    function eH() {
      let e3 = ef.current;
      e3 && null === e_.current && (e_.current = e3.getBoundingClientRect().left - eN.get() - ej.get());
    }
    function eB() {
      window.clearTimeout(eo.current), er(false);
    }
    function eK() {
      if (!K) return;
      eH(), W(false), eB();
      let e3 = ez(H);
      null !== e3 && eY(eI(e3), "type");
    }
    function eW() {
      window.clearTimeout(ex.current), ex.current = void 0, Z(0);
    }
    function eq(e3, t3, n3) {
      eW(), eK();
      let i3 = Math.max(1, Math.round(t3 / z2));
      "button" === n3 && Z(e3);
      let r2 = 0, a2 = () => {
        let t4 = ev.current(e3, i3, n3);
        ex.current = window.setTimeout(
          a2,
          t4 ? Math.max(40, 150 * 0.86 ** ++r2) : 240
        );
      };
      ex.current = window.setTimeout(a2, eL(e3, i3, n3) ? 400 : 360);
    }
    function eZ(e3) {
      let t3 = eb.current;
      !t3 || t3.pointer !== e3.pointerId || (eb.current = null, t3.active && (ey.current = true, Q(false), (0, o.i)(eN, 0, E2 ? { duration: 0 } : b.snappy), ee(eC(ep.current))));
    }
    (0, f.useLayoutEffect)(() => {
      ep.current = X2, ev.current = eL;
    }), (0, f.useLayoutEffect)(() => {
      let e3 = e_.current, t3 = ef.current;
      if (e_.current = null, eg.current) {
        eg.current = false;
        let e4 = em.current;
        if (e4 && document.activeElement === e4) {
          let t4 = e4.value.length;
          e4.setSelectionRange(t4, t4);
        }
      }
      if (null === e3 || !t3) return;
      let n3 = e3 - (t3.getBoundingClientRect().left - eN.get() - ej.get());
      0.5 > Math.abs(n3) || (ej.set(ej.get() + n3), E2 ? ej.jump(0) : (0, o.i)(ej, 0, b.morph));
    });
    let eJ = (t3) => ({
      toward: t3,
      label: e2,
      disabled: y2,
      controls: I2,
      limit: t3 > 0 ? eG >= d2 : eG <= c2,
      pressed: q === t3
    }), eQ = null === eA ? 0 : eA > d2 ? 1 : eA < c2 && ei ? -1 : 0, eV = S2 ? eQ || et : 0, e0 = eV > 0 ? d2 : c2, e1 = eV ? "function" == typeof S2 ? S2(eV > 0 ? "max" : "min", e0) : `${eV > 0 ? "Max" : "Min"} ${eC(e0)}` : "", e5 = [F2, eQ && S2 ? C2 : void 0].filter(Boolean).join(" ") || void 0;
    return (0, r.jsxs)("div", {
      className: x().field,
      "data-size": P2,
      children: [
        (0, r.jsxs)("div", {
          className: x().head,
          children: [
            (0, r.jsx)("label", {
              htmlFor: I2,
              className: x().label,
              "data-scrub": w2 && !y2 || void 0,
              onPointerDown: function(e3) {
                ey.current = false, w2 && !y2 && 0 === e3.button && (eK(), eb.current = {
                  pointer: e3.pointerId,
                  x: e3.clientX,
                  from: ep.current,
                  active: false
                }, e3.currentTarget.setPointerCapture(e3.pointerId));
              },
              onPointerMove: function(e3) {
                let t3 = eb.current;
                if (!t3 || t3.pointer !== e3.pointerId) return;
                let n3 = e3.clientX - t3.x;
                if (!t3.active) {
                  if (3 > Math.abs(n3)) return;
                  t3.active = true, Q(true);
                }
                let i3 = n3 / 6, r2 = Math.trunc(i3);
                eY(r2 ? eF(t3.from, r2) : t3.from, "scrub");
                let a2 = t3.from + i3 * z2, u2 = a2 > d2 ? (a2 - d2) / z2 * 6 : a2 < c2 ? (a2 - c2) / z2 * 6 : 0;
                eN.set(
                  E2 ? 0 : ((e4, t4 = 10) => Math.sign(e4) * (1 - 1 / (0.55 * Math.abs(e4) / t4 + 1)) * t4)(u2)
                );
              },
              onPointerUp: eZ,
              onPointerCancel: eZ,
              onClick: (e3) => {
                ey.current && (e3.preventDefault(), ey.current = false);
              },
              children: e2
            }),
            (0, r.jsx)(O, { id: C2, edge: eV, text: e1 })
          ]
        }),
        (0, r.jsxs)("div", {
          ref: ea,
          className: x().control,
          "data-scrubbing": J || void 0,
          "data-disabled": y2 || void 0,
          "data-warn": eQ ? eQ > 0 ? "max" : "min" : void 0,
          children: [
            (0, r.jsx)(Y, {
              ...eJ(-1),
              iconRef: eu,
              onPress: () => eq(-1, z2, "button"),
              onRelease: eW,
              onActivate: () => {
                eK(), eL(-1, 1, "button");
              }
            }),
            (0, r.jsx)("div", {
              className: x().valueWrap,
              onMouseDown: (e3) => {
                e3.target !== em.current && e3.preventDefault();
              },
              onClick: (e3) => {
                y2 || e3.target === em.current || (em.current?.focus(), em.current?.select());
              },
              children: (0, r.jsxs)(u.PY1.span, {
                ref: ef,
                className: x().value,
                style: { x: eR, y: ew },
                children: [
                  (0, r.jsx)(D, {
                    text: R(g2, eG),
                    direction: eO,
                    className: x().affix
                  }),
                  (0, r.jsxs)("span", {
                    className: x().number,
                    children: [
                      (0, r.jsx)("span", {
                        className: x().display,
                        "data-hidden": K || void 0,
                        "aria-hidden": "true",
                        children: (0, r.jsx)(k, {
                          value: eG,
                          format: eT,
                          direction: eO,
                          instant: K
                        })
                      }),
                      K && (0, r.jsx)("span", {
                        className: x().mirror,
                        "aria-hidden": "true",
                        children: H
                      }),
                      (0, r.jsx)("input", {
                        ref: em,
                        id: I2,
                        className: x().input,
                        type: "text",
                        role: "spinbutton",
                        inputMode: c2 < 0 ? "text" : eM || eS ? "decimal" : "numeric",
                        autoComplete: "off",
                        spellCheck: false,
                        value: K ? H : eT.format(X2),
                        disabled: y2,
                        "aria-describedby": e5,
                        "aria-invalid": !!eQ || void 0,
                        "aria-valuenow": X2,
                        "aria-valuetext": eC(X2),
                        "aria-valuemin": Number.isFinite(c2) ? c2 : void 0,
                        "aria-valuemax": d2 < Number.MAX_SAFE_INTEGER ? d2 : void 0,
                        onChange: (e3) => {
                          var t3;
                          let n3, i3, r2;
                          return t3 = e3.currentTarget.value, n3 = RegExp(
                            `[^0-9${ek.group.replace(/[.*+?^${}()|[\]\\-]/g, "\\$&")}${eM || eS ? ek.decimal.replace(/[.*+?^${}()|[\]\\-]/g, "\\$&") : ""}${c2 < 0 ? "\\-" : ""}]`,
                            "g"
                          ), i3 = t3.replace(n3, ""), K || (eh.current = X2), eH(), B(i3), W(true), void (null !== (r2 = ez(i3)) && r2 >= c2 && r2 <= d2 && eI(r2) === r2 && eY(r2, "type"), eB(), null !== r2 && r2 < c2 && (eo.current = window.setTimeout(
                            () => er(true),
                            700
                          )));
                        },
                        onKeyDown: function(e3) {
                          let t3 = p2 ?? 10 * z2, n3 = {
                            ArrowUp: [1, e3.shiftKey ? t3 : z2],
                            ArrowDown: [-1, e3.shiftKey ? t3 : z2],
                            PageUp: [1, t3],
                            PageDown: [-1, t3]
                          }[e3.key];
                          if (n3) {
                            e3.preventDefault(), e3.repeat || eq(n3[0], n3[1], "key");
                            return;
                          }
                          if (!K && ("Home" === e3.key && Number.isFinite(c2) || "End" === e3.key && d2 < Number.MAX_SAFE_INTEGER)) {
                            e3.preventDefault(), eY("Home" === e3.key ? c2 : d2, "key");
                            return;
                          }
                          "Enter" === e3.key && (e3.preventDefault(), K ? (eg.current = true, eK()) : e3.currentTarget.select()), "Escape" === e3.key && K && (e3.preventDefault(), eH(), W(false), eB(), eg.current = true, eY(eh.current, "type"));
                        },
                        onKeyUp: (e3) => {
                          /^(Arrow(Up|Down)|Page(Up|Down))$/.test(e3.key) && eW();
                        },
                        onBlur: () => {
                          eW(), eK();
                        }
                      })
                    ]
                  }),
                  (0, r.jsx)(D, {
                    text: R(v2, eG),
                    direction: eO,
                    className: x().affix
                  })
                ]
              })
            }),
            (0, r.jsx)(Y, {
              ...eJ(1),
              iconRef: es,
              onPress: () => eq(1, z2, "button"),
              onRelease: eW,
              onActivate: () => {
                eK(), eL(1, 1, "button");
              }
            })
          ]
        }),
        (0, r.jsx)(U, { id: F2, text: h2, className: x().hint }),
        (0, r.jsx)("span", {
          className: x().srOnly,
          "aria-live": "polite",
          "aria-atomic": "true",
          children: V
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
}