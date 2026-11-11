/* product-gallery (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(8962, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => k });
  var h = a(51811);
  let d = {
    name: "maximize-2",
    size: 24,
    node: [
      ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
      ["path", { d: "m21 3-7 7", key: "1l2asr" }],
      ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
      ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
    ]
  };
  d.node;
  let k = (0, h.A)(d);
}

__m(__module,__exports,__require);
});
A.reg(16720, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let o = {
    name: "shopping-bag",
    size: 24,
    node: [
      ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
      ["path", { d: "M3.103 6.034h17.794", key: "awc11p" }],
      [
        "path",
        {
          d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
          key: "o988cm"
        }
      ]
    ]
  };
  o.node;
  let i = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(36607, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ProductGalleryDemo: () => er, default: () => es });
  var i = a(95155), l = a(12115), r = a(18310), s = a(80642), o = a(25354), n = a(16720), d = a(64577), c = a(92298), u = a(47650), h = a(79196), p = a(28245), m = a(92171), g = a(22535), y = a(55809), f = a(8962), w = a(9005), v = a(78780), b = a(76721), x = a(7770), _ = a(85762), j = a.n(_);
  let k = [...x.T.ease.enter], N = [...x.T.ease.standard], A = (e2, t2) => {
    let a2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: a2 * a2,
      damping: 2 * (1 - t2) * a2,
      mass: 1
    };
  }, z = A(0.42, 0), P = A(0.34, 0), S = A(0.46, 0), C = A(0.4, 0), R = A(0.42, 0), { duration: T } = x.T, L = { opacity: 0, y: 8, filter: `blur(${x.T.blur.soft}px)` }, M = { opacity: 1, y: 0, filter: "blur(0px)" }, Y = { opacity: 0, y: -8, filter: `blur(${x.T.blur.soft}px)` }, $ = { duration: T.standard, ease: k }, D = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), E = (e2, t2, a2 = 0.55) => e2 * t2 * a2 / (t2 + a2 * Math.abs(e2)), I = () => () => {
  };
  function W(e2, t2, a2) {
    let [i2, r2] = (0, l.useState)(t2), s2 = void 0 !== e2, o2 = (0, l.useCallback)(
      (e3) => {
        s2 || r2(e3), a2?.(e3);
      },
      [s2, a2]
    );
    return [s2 ? e2 : i2, o2];
  }
  let O = (e2, t2) => true === e2.soldOut || Array.isArray(e2.soldOut) && e2.soldOut.includes(t2);
  function F({ image: e2, className: t2, eager: a2 }) {
    return (0, i.jsx)("img", {
      className: t2,
      src: e2.src,
      srcSet: e2.srcSet,
      alt: e2.alt,
      draggable: false,
      decoding: "async",
      loading: a2 ? "eager" : "lazy"
    });
  }
  function K({ x: e2, ...t2 }) {
    let a2 = (0, h.tF)(), r2 = (0, p.d)(e2.get());
    return (0, l.useLayoutEffect)(() => {
      if (a2) return r2.jump(e2.get()), e2.on("change", (e3) => r2.jump(e3));
    }, [r2, a2, e2]), (0, i.jsx)(o.PY1.span, { ...t2, style: { x: r2 } });
  }
  function X(e2, t2, a2, i2) {
    let r2 = (0, p.d)(0), s2 = (0, p.d)(0), o2 = (0, p.d)(0), n2 = (0, p.d)(0), d2 = (0, p.d)(0);
    return (0, l.useLayoutEffect)(() => {
      let a3 = e2.current;
      if (!a3) return;
      let l2 = (e3) => {
        let l3 = a3.querySelector(t2);
        if (!l3)
          return void (0, m.i)(d2, 0, {
            duration: i2 ? 0 : T.instant,
            ease: N
          });
        let c3 = [l3.offsetLeft, l3.offsetTop, l3.offsetWidth, l3.offsetHeight], u2 = [r2, s2, o2, n2];
        !e3 || i2 || 0.05 > d2.get() ? u2.forEach((e4, t3) => e4.jump(c3[t3])) : u2.forEach((e4, t3) => (0, m.i)(e4, c3[t3], P)), (0, m.i)(d2, 1, { duration: i2 ? 0 : T.fast, ease: N });
      };
      if (l2(true), "u" < typeof ResizeObserver) return;
      let c2 = new ResizeObserver(() => l2(false));
      return c2.observe(a3), () => c2.disconnect();
    }, [e2, n2, a2, d2, i2, t2, o2, r2, s2]), { x: r2, y: s2, width: o2, height: n2, opacity: d2 };
  }
  function B(e2, t2, a2, i2, l2) {
    let r2 = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e2.key], s2 = "Home" === e2.key ? 0 : "End" === e2.key ? t2 - 1 : r2 ? a2 + r2 : null;
    if (null === s2) return;
    e2.preventDefault();
    let o2 = r2 ?? ("Home" === e2.key ? 1 : -1);
    for (let e3 = 0; e3 < t2 && (s2 = (s2 + t2) % t2, l2?.(s2)); e3++) s2 += o2;
    i2(s2);
    let n2 = e2.currentTarget.querySelectorAll("[data-option]");
    n2[s2]?.focus();
  }
  let q = (0, l.forwardRef)(function({
    colors: e2,
    sizes: t2,
    color: a2,
    defaultColor: n2,
    onColorChange: d2,
    size: c2,
    defaultSize: h2 = null,
    onSizeChange: w2,
    index: v2,
    defaultIndex: b2 = 0,
    onIndexChange: _2,
    zoom: A2 = 2.4,
    magnifier: S2 = true,
    aspectRatio: C2 = 0.8,
    label: R2 = "Product photos",
    header: q2,
    footer: U2,
    className: H2
  }, V2) {
    let G2 = (0, l.useSyncExternalStore)(
      I,
      () => true,
      () => false
    ), Z2 = !!(0, r.I)() && G2, Q2 = (0, l.useId)(), [ee2, et2] = W(a2, n2 ?? e2[0]?.value ?? "", d2), [ea2, ei2] = W(c2, h2, w2), [el2, er2] = W(v2, b2, _2), es2 = Math.max(
      0,
      e2.findIndex((e3) => e3.value === ee2)
    ), eo = e2[es2], en = eo?.images ?? [], ed = D(el2, 0, Math.max(0, en.length - 1)), ec = t2?.find((e3) => e3.value === ea2 && !O(e3, eo?.value ?? "")), eu = (0, l.useCallback)(
      (e3) => {
        e3 !== ed && e3 >= 0 && e3 < en.length && er2(e3);
      },
      [en.length, ed, er2]
    ), eh = (a3) => {
      let i2 = e2[a3];
      if (!i2 || i2.value === eo?.value) return;
      et2(i2.value);
      let l2 = t2?.find((e3) => e3.value === ea2);
      l2 && O(l2, i2.value) && ei2(null), ed > i2.images.length - 1 && er2(Math.max(0, i2.images.length - 1));
    }, [ep, em] = (function() {
      let e3 = (0, l.useRef)(null), [t3, a3] = (0, l.useState)({ w: 0, h: 0 });
      return (0, l.useLayoutEffect)(() => {
        let t4 = e3.current;
        if (!t4) return;
        let i2 = () => a3(
          (e4) => e4.w === t4.clientWidth && e4.h === t4.clientHeight ? e4 : { w: t4.clientWidth, h: t4.clientHeight }
        );
        if (i2(), "u" < typeof ResizeObserver) return;
        let l2 = new ResizeObserver(i2);
        return l2.observe(t4), () => l2.disconnect();
      }, []), [e3, t3];
    })(), eg = (0, p.d)(0), ey = (0, l.useRef)(0), ef = (0, l.useRef)(eo?.value);
    (0, l.useLayoutEffect)(() => {
      if (!em.w) return;
      let e3 = -ed * em.w;
      Z2 || ey.current !== em.w || ef.current !== eo?.value ? eg.jump(e3) : (0, m.i)(eg, e3, z), ey.current = em.w, ef.current = eo?.value;
    }, [eo?.value, ed, Z2, em.w, eg]);
    let ew = (0, l.useRef)(null), ev = (0, l.useRef)(false), eb = (e3) => {
      let t3 = ew.current;
      if (!t3 || t3.id !== e3.pointerId || (ew.current = null, "x" !== t3.axis))
        return;
      ev.current = true;
      let a3 = t3.samples[0], i2 = t3.samples[t3.samples.length - 1], l2 = i2.t > a3.t ? (i2.x - a3.x) / (i2.t - a3.t) * 1e3 : 0, r2 = D(
        Math.round(
          -(eg.get() + ((e4, t4 = 0.995) => e4 / 1e3 * t4 / (1 - t4))(l2)) / Math.max(1, em.w)
        ),
        ed - 1,
        ed + 1
      ), s2 = D(r2, 0, en.length - 1);
      s2 !== ed ? er2(s2) : (0, m.i)(eg, -ed * em.w, { ...z, velocity: l2 });
    }, [ex, e_] = (0, l.useState)(false), ej = (0, p.d)(0), ek = (0, p.d)(0), eN = (0, g.z)(ej, { stiffness: 620, damping: 44, mass: 0.6 }), eA = (0, g.z)(ek, { stiffness: 620, damping: 44, mass: 0.6 }), ez = Z2 ? ej : eN, eP = Z2 ? ek : eA, eS = (0, y.G)(ez, (e3) => e3 - 88), eC = (0, y.G)(eP, (e3) => e3 - 88), eR = (0, y.G)(ez, (e3) => 88 - e3 * A2), eT = (0, y.G)(eP, (e3) => 88 - e3 * A2), eL = S2 && ex && en.length > 0, [eM, eY] = (0, l.useState)(null), [e$, eD] = (0, l.useState)(false), eE = () => {
      let e3 = ep.current;
      if (!e3) return null;
      let t3 = e3.getBoundingClientRect();
      return {
        rect: { left: t3.left, top: t3.top, width: t3.width, height: t3.height },
        radius: parseFloat(getComputedStyle(e3).borderTopLeftRadius) || 22,
        ratio: t3.width / Math.max(1, t3.height)
      };
    }, eI = (0, l.useRef)(null), eW = (0, l.useRef)(null), eO = (0, l.useRef)(null), eF = X(eI, "[data-active]", `${ed}-${en.length}`, Z2), eK = X(eW, "[data-active]", es2, Z2), eX = X(eO, "[data-active]", `${ec?.value}-${eo?.value}`, Z2);
    if (!eo) return null;
    let eB = `${Q2}-stage`;
    return (0, i.jsxs)("div", {
      ref: V2,
      className: ((...e3) => e3.filter(Boolean).join(" "))(j().root, H2),
      style: { "--ratio": C2 },
      children: [
        (0, i.jsxs)("div", {
          className: j().layout,
          children: [
            (0, i.jsxs)("div", {
              className: j().media,
              role: "group",
              "aria-label": R2,
              "aria-roledescription": "gallery",
              children: [
                (0, i.jsxs)("button", {
                  ref: ep,
                  type: "button",
                  id: eB,
                  className: j().stage,
                  "data-lens": eL || void 0,
                  "aria-label": `${en[ed]?.alt ?? R2}. Photo ${ed + 1} of ${en.length}. Open fullscreen`,
                  onPointerDown: (e3) => {
                    "mouse" === e3.pointerType || ew.current || (eg.stop(), ew.current = {
                      id: e3.pointerId,
                      x0: e3.clientX,
                      y0: e3.clientY,
                      from: eg.get(),
                      axis: null,
                      samples: [{ x: e3.clientX, t: e3.timeStamp }]
                    });
                  },
                  onPointerMove: (e3) => {
                    if ("mouse" === e3.pointerType)
                      return void (function(e4) {
                        if (!S2) return;
                        let t4 = e4.currentTarget.getBoundingClientRect();
                        ej.set(e4.clientX - t4.left), ek.set(e4.clientY - t4.top), ex || (eN.jump(ej.get()), eA.jump(ek.get()), e_(true));
                      })(e3);
                    let t3 = ew.current;
                    if (!t3 || t3.id !== e3.pointerId) return;
                    let a3 = e3.clientX - t3.x0, i2 = e3.clientY - t3.y0;
                    if (!t3.axis) {
                      if (8 > Math.hypot(a3, i2)) return;
                      t3.axis = Math.abs(a3) > Math.abs(i2) ? "x" : "y", "x" === t3.axis && e3.currentTarget.setPointerCapture(e3.pointerId);
                    }
                    if ("x" !== t3.axis) return;
                    let l2 = -(en.length - 1) * em.w, r2 = t3.from + a3;
                    eg.set(
                      r2 > 0 ? E(r2, em.w) : r2 < l2 ? l2 + E(r2 - l2, em.w) : r2
                    ), t3.samples = [
                      ...t3.samples.slice(-4),
                      { x: e3.clientX, t: e3.timeStamp }
                    ];
                  },
                  onPointerUp: eb,
                  onPointerCancel: eb,
                  onPointerLeave: (e3) => {
                    "mouse" === e3.pointerType && e_(false);
                  },
                  onClick: () => {
                    let e3;
                    if (ev.current) {
                      ev.current = false;
                      return;
                    }
                    (e3 = eE()) && en.length && (e_(false), eY(e3), eD(true));
                  },
                  onKeyDown: (e3) => {
                    "ArrowRight" === e3.key ? (e3.preventDefault(), eu(ed + 1)) : "ArrowLeft" === e3.key && (e3.preventDefault(), eu(ed - 1));
                  },
                  children: [
                    (0, i.jsx)(s.N, {
                      initial: false,
                      children: (0, i.jsx)(
                        K,
                        {
                          x: eg,
                          className: j().track,
                          initial: Z2 ? { opacity: 0 } : {
                            opacity: 0,
                            filter: `blur(${x.T.blur.text}px)`
                          },
                          animate: { opacity: 1, filter: "blur(0px)" },
                          exit: {
                            opacity: 0,
                            transition: {
                              duration: T.exit,
                              delay: Z2 ? 0 : T.fast,
                              ease: N
                            }
                          },
                          transition: { duration: Z2 ? T.fast : 0.36, ease: k },
                          children: eo.images.map(
                            (e3, t3) => (0, i.jsx)(
                              "span",
                              {
                                className: j().slide,
                                "aria-hidden": t3 !== ed || void 0,
                                children: (0, i.jsx)(F, {
                                  image: e3,
                                  className: j().photo,
                                  eager: t3 === ed
                                })
                              },
                              e3.src
                            )
                          )
                        },
                        eo.value
                      )
                    }),
                    (0, i.jsx)(s.N, {
                      children: eL && em.w > 0 && (0, i.jsx)(
                        o.PY1.span,
                        {
                          className: j().lens,
                          "aria-hidden": "true",
                          style: { x: eS, y: eC },
                          initial: Z2 ? { opacity: 0 } : { opacity: 0, scale: 0.6 },
                          animate: { opacity: 1, scale: 1 },
                          exit: Z2 ? { opacity: 0 } : { opacity: 0, scale: 0.6 },
                          transition: Z2 ? { duration: T.instant } : {
                            opacity: { duration: T.fast, ease: N },
                            scale: P
                          },
                          children: (0, i.jsx)(o.PY1.img, {
                            className: j().lensPhoto,
                            src: en[ed].src,
                            alt: "",
                            draggable: false,
                            style: {
                              x: eR,
                              y: eT,
                              width: em.w * A2,
                              height: em.h * A2
                            }
                          })
                        },
                        "lens"
                      )
                    }),
                    (0, i.jsx)("span", {
                      className: j().expand,
                      "aria-hidden": "true",
                      children: (0, i.jsx)(f.A, {
                        size: 16,
                        strokeWidth: 1.75
                      })
                    }),
                    en.length > 1 && (0, i.jsx)("span", {
                      className: j().dots,
                      "aria-hidden": "true",
                      children: en.map(
                        (e3, t3) => (0, i.jsx)(
                          "span",
                          {
                            className: j().dot,
                            "data-active": t3 === ed || void 0
                          },
                          t3
                        )
                      )
                    })
                  ]
                }),
                en.length > 1 && (0, i.jsxs)("div", {
                  ref: eI,
                  className: j().rail,
                  role: "tablist",
                  "aria-label": "Photos",
                  onKeyDown: (e3) => B(e3, en.length, ed, eu),
                  children: [
                    (0, i.jsx)(o.PY1.span, {
                      className: j().railIndicator,
                      style: eF,
                      "aria-hidden": "true"
                    }),
                    en.map(
                      (e3, t3) => (0, i.jsx)(
                        "button",
                        {
                          type: "button",
                          role: "tab",
                          "data-option": "",
                          "data-active": t3 === ed || void 0,
                          className: j().thumb,
                          "aria-selected": t3 === ed,
                          "aria-controls": eB,
                          tabIndex: t3 === ed ? 0 : -1,
                          "aria-label": `Photo ${t3 + 1}: ${e3.alt}`,
                          onClick: () => eu(t3),
                          children: (0, i.jsx)(s.N, {
                            initial: false,
                            children: (0, i.jsx)(
                              o.PY1.img,
                              {
                                className: j().thumbPhoto,
                                src: e3.src,
                                alt: "",
                                draggable: false,
                                loading: "lazy",
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: {
                                  opacity: 0,
                                  transition: {
                                    duration: T.exit,
                                    delay: Z2 ? 0 : T.instant,
                                    ease: N
                                  }
                                },
                                transition: {
                                  duration: Z2 ? T.instant : 0.3,
                                  ease: k
                                }
                              },
                              e3.src
                            )
                          })
                        },
                        t3
                      )
                    )
                  ]
                })
              ]
            }),
            (0, i.jsxs)("div", {
              className: j().details,
              children: [
                q2,
                (0, i.jsxs)("div", {
                  className: j().picker,
                  children: [
                    (0, i.jsxs)("p", {
                      className: j().pickerLabel,
                      id: `${Q2}-color`,
                      children: [
                        (0, i.jsx)("span", { children: "Color" }),
                        (0, i.jsx)("span", {
                          className: j().pickerValue,
                          children: (0, i.jsx)(s.N, {
                            mode: "popLayout",
                            initial: false,
                            children: (0, i.jsxs)(
                              o.PY1.span,
                              {
                                initial: Z2 ? { opacity: 0 } : L,
                                animate: M,
                                exit: Z2 ? { opacity: 0 } : Y,
                                transition: $,
                                children: [
                                  eo.label,
                                  eo.soldOut ? " \xB7 sold out" : ""
                                ]
                              },
                              eo.value
                            )
                          })
                        })
                      ]
                    }),
                    (0, i.jsxs)("div", {
                      ref: eW,
                      className: j().swatches,
                      role: "radiogroup",
                      "aria-labelledby": `${Q2}-color`,
                      onKeyDown: (t3) => B(t3, e2.length, es2, eh),
                      children: [
                        (0, i.jsx)(o.PY1.span, {
                          className: j().swatchRing,
                          style: eK,
                          "aria-hidden": "true"
                        }),
                        e2.map(
                          (e3, t3) => (0, i.jsx)(
                            "button",
                            {
                              type: "button",
                              role: "radio",
                              "data-option": "",
                              "data-active": t3 === es2 || void 0,
                              "aria-checked": t3 === es2,
                              tabIndex: t3 === es2 ? 0 : -1,
                              className: j().swatch,
                              "data-sold-out": e3.soldOut || void 0,
                              "aria-label": `${e3.label}${e3.soldOut ? ", sold out" : ""}`,
                              onClick: () => eh(t3),
                              children: (0, i.jsx)("span", {
                                className: j().swatchFill,
                                style: { background: e3.swatch }
                              })
                            },
                            e3.value
                          )
                        )
                      ]
                    })
                  ]
                }),
                !!t2?.length && (0, i.jsxs)("div", {
                  className: j().picker,
                  children: [
                    (0, i.jsxs)("p", {
                      className: j().pickerLabel,
                      id: `${Q2}-size`,
                      children: [
                        (0, i.jsx)("span", { children: "Size" }),
                        (0, i.jsx)("span", {
                          className: j().pickerValue,
                          children: (0, i.jsx)(s.N, {
                            mode: "popLayout",
                            initial: false,
                            children: (0, i.jsx)(
                              o.PY1.span,
                              {
                                initial: Z2 ? { opacity: 0 } : L,
                                animate: M,
                                exit: Z2 ? { opacity: 0 } : Y,
                                transition: $,
                                children: ec ? ec.label : "Select a size"
                              },
                              ec?.value ?? "none"
                            )
                          })
                        })
                      ]
                    }),
                    (0, i.jsxs)("div", {
                      ref: eO,
                      className: j().sizes,
                      role: "radiogroup",
                      "aria-labelledby": `${Q2}-size`,
                      onKeyDown: (e3) => {
                        let a3 = Math.max(
                          0,
                          t2.findIndex((e4) => e4.value === ec?.value)
                        );
                        B(
                          e3,
                          t2.length,
                          a3,
                          (e4) => ei2(t2[e4].value),
                          (e4) => O(t2[e4], eo.value)
                        );
                      },
                      children: [
                        (0, i.jsx)(o.PY1.span, {
                          className: j().sizeFill,
                          style: eX,
                          "aria-hidden": "true"
                        }),
                        t2.map((e3, a3) => {
                          let l2 = O(e3, eo.value), r2 = e3.value === ec?.value, s2 = !ec && t2.findIndex((e4) => !O(e4, eo.value)) === a3;
                          return (0, i.jsx)(
                            "button",
                            {
                              type: "button",
                              role: "radio",
                              "data-option": "",
                              "data-active": r2 || void 0,
                              "aria-checked": r2,
                              "aria-disabled": l2 || void 0,
                              tabIndex: r2 || s2 ? 0 : -1,
                              className: j().size,
                              "data-sold-out": l2 || void 0,
                              "aria-label": l2 ? `${e3.label}, sold out` : void 0,
                              onClick: () => {
                                l2 || ei2(r2 ? null : e3.value);
                              },
                              children: e3.label
                            },
                            e3.value
                          );
                        })
                      ]
                    })
                  ]
                }),
                U2
              ]
            })
          ]
        }),
        G2 && (0, u.createPortal)(
          (0, i.jsx)(s.N, {
            custom: eM,
            children: e$ && eM && (0, i.jsx)(
              J,
              {
                images: en,
                index: ed,
                origin: eM,
                zoom: A2,
                reduced: Z2,
                label: R2,
                onIndex: eu,
                onClose: () => {
                  let e3 = eE();
                  e3 && eY(e3), eD(false), ep.current?.focus({ preventScroll: true });
                }
              },
              "viewer"
            )
          }),
          document.body
        )
      ]
    });
  });
  function U(e2) {
    let t2 = window.innerWidth, a2 = window.innerHeight, i2 = t2 < 640 ? 56 : 64, l2 = a2 - i2 - 72 - 8, r2 = Math.min(t2 - 2 * (t2 < 640 ? 12 : 48), l2 * e2), s2 = r2 / e2;
    return { left: (t2 - r2) / 2, top: i2 + (l2 - s2) / 2, width: r2, height: s2 };
  }
  function H(e2) {
    let t2 = U(e2.ratio), a2 = e2.rect.width / t2.width;
    return {
      x: e2.rect.left + e2.rect.width / 2 - (t2.left + t2.width / 2),
      y: e2.rect.top + e2.rect.height / 2 - (t2.top + t2.height / 2),
      scale: a2,
      borderRadius: e2.radius / a2
    };
  }
  let V = {
    from: (e2) => H(e2),
    rest: { x: 0, y: 0, scale: 1, borderRadius: 18, transition: S },
    back: (e2) => ({ ...H(e2), transition: C })
  }, G = {
    from: { opacity: 0 },
    rest: { opacity: 1, transition: { duration: T.fast, ease: N } },
    back: { opacity: 0, transition: { duration: T.fast, ease: N } }
  };
  function J({
    images: e2,
    index: t2,
    origin: a2,
    zoom: r2,
    reduced: n2,
    label: d2,
    onIndex: c2,
    onClose: u2
  }) {
    let [h2, y2] = (0, l.useState)(() => U(a2.ratio)), [f2, x2] = (0, l.useState)(0), [_2, A2] = (0, l.useState)(false), P2 = (0, l.useRef)(null), S2 = (0, l.useRef)(null);
    (0, l.useEffect)(() => {
      let e3 = () => y2(U(a2.ratio));
      window.addEventListener("resize", e3);
      let { overflow: t3 } = document.body.style;
      return document.body.style.overflow = "hidden", S2.current?.focus({ preventScroll: true }), () => {
        window.removeEventListener("resize", e3), document.body.style.overflow = t3;
      };
    }, [a2.ratio]);
    let C2 = (0, p.d)(1), L2 = (0, p.d)(0), M2 = (0, p.d)(0), Y2 = (0, g.z)(L2, { stiffness: 260, damping: 34 }), $2 = (0, g.z)(M2, { stiffness: 260, damping: 34 }), E2 = (e3, t3) => D(e3, -(r2 - 1) * t3 / 2, (r2 - 1) * t3 / 2), I2 = (e3, t3) => {
      let a3 = e3 - (h2.left + h2.width / 2), i2 = t3 - (h2.top + h2.height / 2);
      L2.set(E2(-a3 * (r2 - 1), h2.width)), M2.set(E2(-i2 * (r2 - 1), h2.height));
    }, W2 = (e3, t3, a3) => {
      A2(e3), e3 && void 0 !== t3 && void 0 !== a3 && I2(t3, a3), e3 || (L2.set(0), M2.set(0)), n2 ? (C2.jump(e3 ? r2 : 1), Y2.jump(L2.get()), $2.jump(M2.get())) : (0, m.i)(C2, e3 ? r2 : 1, R);
    }, O2 = (a3) => {
      let i2 = t2 + a3;
      i2 < 0 || i2 >= e2.length || (_2 && W2(false), x2(a3), c2(i2));
    }, K2 = (0, l.useRef)(null), X2 = () => {
      _2 && W2(false), u2();
    }, B2 = e2[t2], q2 = 48 * !n2;
    return (0, i.jsxs)(o.PY1.div, {
      ref: P2,
      className: j().viewer,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": `${d2}, photo ${t2 + 1} of ${e2.length}`,
      onKeyDown: (e3) => {
        if ("Escape" === e3.key) e3.preventDefault(), _2 ? W2(false) : u2();
        else if ("ArrowRight" === e3.key) e3.preventDefault(), O2(1);
        else if ("ArrowLeft" === e3.key) e3.preventDefault(), O2(-1);
        else if ("Tab" === e3.key) {
          let t3 = Array.from(
            P2.current?.querySelectorAll("button:not([disabled])") ?? []
          );
          if (!t3.length) return;
          let a3 = t3.indexOf(document.activeElement), i2 = e3.shiftKey ? a3 <= 0 ? t3.length - 1 : a3 - 1 : (a3 + 1) % t3.length;
          e3.preventDefault(), t3[i2].focus();
        }
      },
      initial: "from",
      animate: "rest",
      exit: "back",
      children: [
        (0, i.jsx)(o.PY1.div, {
          className: j().backdrop,
          variants: G,
          onClick: X2,
          "aria-hidden": "true"
        }),
        (0, i.jsx)(o.PY1.div, {
          className: j().frame,
          "data-zoomed": _2 || void 0,
          style: { left: h2.left, top: h2.top, width: h2.width, height: h2.height },
          variants: n2 ? G : V,
          custom: a2,
          onPointerDown: (e3) => {
            K2.current || (e3.currentTarget.setPointerCapture(e3.pointerId), K2.current = {
              id: e3.pointerId,
              x: e3.clientX,
              y: e3.clientY,
              t: e3.timeStamp,
              pan: { x: L2.get(), y: M2.get() }
            });
          },
          onPointerMove: (e3) => {
            let t3 = K2.current;
            if ("mouse" === e3.pointerType && !t3) {
              _2 && I2(e3.clientX, e3.clientY);
              return;
            }
            t3 && t3.id === e3.pointerId && _2 && "mouse" !== e3.pointerType && (L2.set(E2(t3.pan.x + e3.clientX - t3.x, h2.width)), M2.set(E2(t3.pan.y + e3.clientY - t3.y, h2.height)), Y2.jump(L2.get()), $2.jump(M2.get()));
          },
          onPointerUp: (e3) => {
            let t3 = K2.current;
            if (!t3 || t3.id !== e3.pointerId) return;
            K2.current = null;
            let a3 = e3.clientX - t3.x, i2 = e3.clientY - t3.y, l2 = Math.max(1, e3.timeStamp - t3.t);
            6 > Math.hypot(a3, i2) ? W2(!_2, e3.clientX, e3.clientY) : !_2 && "mouse" !== e3.pointerType && Math.abs(a3) > Math.abs(i2) && (Math.abs(a3) > 60 || Math.abs(a3) / l2 > 0.4) && O2(a3 < 0 ? 1 : -1);
          },
          onPointerCancel: () => {
            K2.current = null;
          },
          children: (0, i.jsx)(o.PY1.div, {
            className: j().zoomLayer,
            style: { scale: C2, x: Y2, y: $2 },
            children: (0, i.jsx)(s.N, {
              initial: false,
              custom: f2,
              children: (0, i.jsx)(
                o.PY1.div,
                {
                  className: j().frameSlide,
                  custom: f2,
                  variants: {
                    enter: (e3) => ({ opacity: 0, x: e3 * q2 }),
                    center: { opacity: 1, x: 0 },
                    leave: (e3) => ({ opacity: 0, x: -(e3 * q2) })
                  },
                  initial: "enter",
                  animate: "center",
                  exit: "leave",
                  transition: {
                    x: z,
                    opacity: { duration: T.standard, ease: N }
                  },
                  children: (0, i.jsx)(F, {
                    image: B2,
                    className: j().photo,
                    eager: true
                  })
                },
                B2.src
              )
            })
          })
        }),
        (0, i.jsxs)(o.PY1.div, {
          className: j().viewerTop,
          variants: {
            from: { opacity: 0 },
            rest: {
              opacity: 1,
              transition: { duration: T.standard, delay: 0.12, ease: N }
            },
            back: { opacity: 0, transition: { duration: T.instant, ease: N } }
          },
          children: [
            (0, i.jsxs)("span", {
              className: j().counter,
              "aria-live": "polite",
              children: [t2 + 1, " / ", e2.length]
            }),
            (0, i.jsx)("span", {
              className: j().hint,
              children: _2 ? "Move to pan, click to zoom out" : "Click the photo to zoom"
            }),
            (0, i.jsx)("button", {
              ref: S2,
              type: "button",
              className: j().viewerButton,
              "aria-label": "Close",
              onClick: X2,
              children: (0, i.jsx)(w.A, { size: 18, strokeWidth: 1.75 })
            })
          ]
        }),
        e2.length > 1 && (0, i.jsxs)(o.PY1.div, {
          className: j().viewerNav,
          variants: {
            from: { opacity: 0, y: 8 },
            rest: {
              opacity: 1,
              y: 0,
              transition: { duration: T.standard, delay: 0.14, ease: k }
            },
            back: {
              opacity: 0,
              transition: { duration: T.instant, ease: N }
            }
          },
          children: [
            (0, i.jsx)("button", {
              type: "button",
              className: j().viewerButton,
              "aria-label": "Previous photo",
              disabled: 0 === t2,
              onClick: () => O2(-1),
              children: (0, i.jsx)(v.A, { size: 18, strokeWidth: 1.75 })
            }),
            (0, i.jsx)("span", {
              className: j().viewerDots,
              "aria-hidden": "true",
              children: e2.map(
                (e3, a3) => (0, i.jsx)(
                  "span",
                  { className: j().dot, "data-active": a3 === t2 || void 0 },
                  e3.src
                )
              )
            }),
            (0, i.jsx)("button", {
              type: "button",
              className: j().viewerButton,
              "aria-label": "Next photo",
              disabled: t2 === e2.length - 1,
              onClick: () => O2(1),
              children: (0, i.jsx)(b.A, { size: 18, strokeWidth: 1.75 })
            })
          ]
        })
      ]
    });
  }
  var Z = a(67752), Q = a(56132), ee = a.n(Q);
  let et = (...e2) => e2.map((e3) => ({ src: (0, Z.jW)(e3).src, alt: (0, Z.jW)(e3).alt })), ea = [
    {
      value: "oat",
      label: "Oat",
      swatch: "oklch(86% .03 80)",
      images: et("bedroom", "linen-throw", "living-room", "lounge-chair")
    },
    {
      value: "forest",
      label: "Forest",
      swatch: "oklch(42% .05 155)",
      images: et("reading-chair", "home-office", "sunroom")
    },
    {
      value: "walnut",
      label: "Walnut",
      swatch: "oklch(43% .06 50)",
      images: et(
        "ceramic-lamp",
        "stoneware-cups",
        "stacked-bowls",
        "wine-bar"
      )
    }
  ], ei = [
    { value: "twin", label: "Twin", soldOut: ["walnut"] },
    { value: "full", label: "Full" },
    { value: "queen", label: "Queen" },
    { value: "king", label: "King", soldOut: ["forest"] },
    { value: "cal-king", label: "Cal king", soldOut: true }
  ], el = { twin: 188, full: 218, queen: 248, king: 278, "cal-king": 278 };
  function er() {
    let e2 = (0, r.I)(), [t2, a2] = (0, l.useState)("oat"), [u2, h2] = (0, l.useState)(null), [p2, m2] = (0, l.useState)(0), [g2, y2] = (0, l.useState)("idle"), f2 = (0, l.useRef)(void 0), w2 = el[u2 ?? "queen"], [v2, b2] = (0, l.useState)(true), _2 = (e3) => {
      y2(e3), window.clearTimeout(f2.current), f2.current = window.setTimeout(() => y2("idle"), 1800);
    }, j2 = ei.filter((e3) => O(e3, t2)).map((e3) => e3.label), k2 = "added" === g2 ? "Added to bag" : "missing" === g2 ? "Choose a size first" : u2 ? `Add to bag \xB7 $${w2}` : "Add to bag";
    return (0, i.jsx)("div", {
      className: ee().demo,
      children: (0, i.jsx)(q, {
        colors: ea,
        sizes: ei,
        color: t2,
        onColorChange: a2,
        size: u2,
        onSizeChange: (e3) => {
          b2(el[e3 ?? "queen"] >= w2), h2(e3);
        },
        label: "Washed linen duvet set",
        header: (0, i.jsxs)("div", {
          className: ee().header,
          children: [
            (0, i.jsxs)("div", {
              className: ee().titleRow,
              children: [
                (0, i.jsx)("h3", {
                  className: ee().title,
                  children: "Washed linen duvet set"
                }),
                (0, i.jsxs)("span", {
                  className: ee().bag,
                  "aria-live": "polite",
                  "aria-label": `${p2} ${1 === p2 ? "item" : "items"} in bag`,
                  children: [
                    (0, i.jsx)(n.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    (0, i.jsx)("span", {
                      className: ee().bagCount,
                      children: (0, i.jsx)(s.N, {
                        mode: "popLayout",
                        initial: false,
                        children: (0, i.jsx)(
                          o.PY1.span,
                          {
                            initial: e2 ? { opacity: 0 } : { opacity: 0, y: 10 },
                            animate: { opacity: 1, y: 0 },
                            exit: e2 ? { opacity: 0 } : { opacity: 0, y: -10 },
                            transition: x.T.spring.snappy,
                            children: p2
                          },
                          p2
                        )
                      })
                    })
                  ]
                })
              ]
            }),
            (0, i.jsxs)("p", {
              className: ee().price,
              children: [
                (0, i.jsx)("span", {
                  className: ee().priceValue,
                  children: (0, i.jsx)(s.N, {
                    mode: "popLayout",
                    initial: false,
                    children: (0, i.jsxs)(
                      o.PY1.span,
                      {
                        initial: e2 ? { opacity: 0 } : {
                          opacity: 0,
                          y: v2 ? 12 : -12,
                          filter: "blur(3px)"
                        },
                        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                        exit: e2 ? { opacity: 0 } : {
                          opacity: 0,
                          y: v2 ? -12 : 12,
                          filter: "blur(3px)"
                        },
                        transition: x.T.spring.smooth,
                        children: ["$", w2]
                      },
                      w2
                    )
                  })
                }),
                (0, i.jsx)("span", {
                  className: ee().priceNote,
                  children: u2 ? "Duvet cover and two shams" : "From $188 \xB7 queen shown"
                })
              ]
            }),
            (0, i.jsx)("p", {
              className: ee().copy,
              children: "Stonewashed European flax that softens with every wash. Hover the photo to look closer, or open it fullscreen."
            })
          ]
        }),
        footer: (0, i.jsxs)("div", {
          className: ee().footer,
          children: [
            (0, i.jsx)("button", {
              type: "button",
              className: ee().add,
              "data-status": g2,
              onClick: () => {
                u2 ? (m2((e3) => e3 + 1), _2("added")) : _2("missing");
              },
              children: (0, i.jsx)(s.N, {
                mode: "popLayout",
                initial: false,
                children: (0, i.jsxs)(
                  o.PY1.span,
                  {
                    className: ee().addLabel,
                    initial: e2 ? { opacity: 0 } : { opacity: 0, y: 8, filter: "blur(4px)" },
                    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                    exit: e2 ? { opacity: 0 } : { opacity: 0, y: -8, filter: "blur(4px)" },
                    transition: {
                      duration: x.T.duration.standard,
                      ease: [...x.T.ease.enter]
                    },
                    children: [
                      "added" === g2 && (0, i.jsx)(d.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      k2
                    ]
                  },
                  k2
                )
              })
            }),
            (0, i.jsxs)("div", {
              className: ee().meta,
              children: [
                (0, i.jsx)("span", {
                  children: j2.length ? `Sold out in ${ea.find((e3) => e3.value === t2)?.label.toLowerCase()}: ${j2.join(", ")}` : "Every size in stock"
                }),
                p2 > 0 && (0, i.jsxs)("button", {
                  type: "button",
                  className: ee().reset,
                  onClick: () => {
                    m2(0), y2("idle");
                  },
                  children: [
                    (0, i.jsx)(c.A, {
                      size: 14,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    "Empty bag"
                  ]
                })
              ]
            })
          ]
        })
      })
    });
  }
  let es = er;
}

__m(__module,__exports,__require);
});
A.regCss(56132, ".demo{width:min(100%,940px);margin-inline:auto;padding:clamp(16px,4%,32px);box-sizing:border-box;border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface);font-family:var(--font-body);letter-spacing:var(--tracking-body)}\n.header{display:grid;gap:var(--space-3)}\n.titleRow{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}\n.title{margin:0;color:var(--foreground);font-family:var(--font-display);font-size:var(--text-2xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display);text-wrap:balance}\n.bag{display:inline-flex;height:32px;flex:none;align-items:center;gap:6px;padding:0 10px;border-radius:var(--radius-pill);background:var(--surface-muted);color:var(--text-secondary);font-size:var(--text-sm)}\n.bagCount{position:relative;display:inline-grid;min-width:1ch;overflow:hidden;color:var(--foreground);font-variant-numeric:tabular-nums;font-weight:500}\n.price{display:flex;margin:0;flex-wrap:wrap;align-items:baseline;gap:4px 10px}\n.priceValue{position:relative;display:inline-grid;overflow:hidden;color:var(--foreground);font-size:var(--text-xl);font-variant-numeric:tabular-nums;font-weight:500}\n.priceNote{color:var(--text-muted);font-size:var(--text-sm)}\n.copy{margin:0;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body);text-wrap:pretty}\n.footer{display:grid;gap:12px}\n.add{position:relative;display:grid;height:var(--control-height-lg);overflow:hidden;place-items:center;padding:0 20px;border:0;border-radius:var(--radius-pill);background:var(--foreground);color:var(--background);cursor:pointer;font:inherit;font-size:var(--text-base);font-weight:500;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-standard) var(--ease-standard),color var(--duration-standard) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.add:active{transform:scale(.98)}\n.add[data-status=added]{background:var(--success);color:var(--background)}\n.add[data-status=missing]{background:var(--surface-muted);color:var(--foreground)}\n@media (hover:hover) and (pointer:fine){.add:not([data-status]):hover,.add[data-status=idle]:hover{background:color-mix(in oklab,var(--foreground) 86%,var(--background))}\n@media (prefers-reduced-motion:reduce){.add,.reset{transition-duration:0s}\n.addLabel{display:inline-flex;align-items:center;gap:8px;font-variant-numeric:tabular-nums;white-space:nowrap}\n.meta{display:flex;min-height:24px;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:6px 12px;color:var(--text-muted);font-size:var(--text-xs)}\n.reset{display:inline-flex;align-items:center;gap:5px;padding:0;border:0;background:transparent;color:var(--text-secondary);cursor:pointer;font:inherit;transition:color var(--duration-fast) var(--ease-standard)}\n.reset:hover{color:var(--foreground)}", {"demo":"demo","header":"header","titleRow":"titleRow","title":"title","bag":"bag","bagCount":"bagCount","price":"price","priceValue":"priceValue","priceNote":"priceNote","copy":"copy","footer":"footer","add":"add","reset":"reset","addLabel":"addLabel","meta":"meta"});
A.regCss(85762, ".root{container-type:inline-size;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.layout{display:grid;align-items:start;gap:var(--space-8);grid-template-columns:minmax(0,1.25fr) minmax(0,1fr)}\n@container (max-width: 680px){.layout{gap:var(--space-6);grid-template-columns:minmax(0,1fr)}\n.media{display:grid;min-width:0;gap:12px;grid-template-areas:\"rail stage\";grid-template-columns:64px minmax(0,1fr)}\n@container (max-width: 520px){.media{grid-template-areas:\"stage\" \"rail\";grid-template-columns:minmax(0,1fr)}\n.stage{position:relative;display:block;width:100%;overflow:clip;padding:0;border:0;border-radius:22px;aspect-ratio:var(--ratio);background:var(--surface-muted);color:inherit;cursor:zoom-in;grid-area:stage;touch-action:pan-y;-webkit-tap-highlight-color:transparent;user-select:none}\n.stage:after{content:\"\";position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--foreground) 6%,transparent);pointer-events:none}\n.stage[data-lens] .expand{opacity:0}\n.stage:focus-visible .expand{opacity:1}\n@media (hover:hover) and (pointer:fine){.stage:hover .expand{opacity:1}\n.stage[data-lens]:hover .expand{opacity:0}\n.stage{border-radius:18px}\n.track{position:absolute;inset:0;display:flex;will-change:transform}\n.slide{display:block;height:100%;flex:0 0 100%}\n.photo{display:block;width:100%;height:100%;object-fit:cover;-webkit-user-drag:none;user-select:none}\n.lens{position:absolute;z-index:2;top:0;left:0;width:176px;height:176px;overflow:hidden;border-radius:50%;background:var(--surface-muted);box-shadow:var(--shadow-floating);pointer-events:none}\n.lens:after{content:\"\";position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 0 0 1.5px oklch(100% 0 0/.72),inset 0 0 0 2.5px oklch(0 0 0/.08)}\n.lensPhoto{position:absolute;top:0;left:0;max-width:none;object-fit:cover}\n.expand{position:absolute;z-index:3;top:12px;right:12px;display:grid;width:34px;height:34px;place-items:center;border-radius:50%;background:color-mix(in oklab,var(--surface-raised) 82%,transparent);color:var(--foreground);opacity:0;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);transition:opacity var(--duration-fast) var(--ease-standard)}\n.expand{opacity:1}\n@media (prefers-reduced-motion:reduce){.dot,.expand,.size,.swatch,.thumb,.viewerButton{transition-duration:0s}\n.expand{background:var(--surface-raised);-webkit-backdrop-filter:none;backdrop-filter:none}\n.dots{position:absolute;z-index:3;bottom:12px;left:50%;display:none;gap:5px;translate:-50% 0}\n@media (hover:none){.dots{display:flex}\n.dot{display:block;width:6px;height:6px;border-radius:var(--radius-pill);background:oklch(100% 0 0/.55);transition:width var(--duration-spring) var(--ease-spring),background-color var(--duration-fast) var(--ease-standard)}\n.dot[data-active]{width:16px;background:oklch(100% 0 0)}\n.viewerDots .dot{background:color-mix(in oklab,var(--foreground) 22%,transparent)}\n.viewerDots .dot[data-active]{background:var(--foreground)}\n.rail{position:relative;display:flex;min-height:0;contain:size;flex-direction:column;gap:8px;overflow:auto;margin:-4px;padding:4px;grid-area:rail;scrollbar-width:none}\n.rail::-webkit-scrollbar{display:none}\n.rail{flex-direction:row;contain:none}\n.railIndicator{position:absolute;z-index:1;top:0;left:0;border-radius:12px;box-shadow:0 0 0 2px var(--background),0 0 0 3.5px var(--foreground);pointer-events:none}\n.thumb{position:relative;display:block;width:100%;flex:none;overflow:hidden;padding:0;border:0;border-radius:12px;aspect-ratio:var(--ratio);background:var(--surface-muted);cursor:pointer;opacity:.64;-webkit-tap-highlight-color:transparent;transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.thumb[data-active]{opacity:1}\n.thumb:active{transform:scale(.96)}\n.thumb:hover{opacity:1}\n.thumb:focus-visible{opacity:1}\n.thumb{width:56px}\n.thumbPhoto{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;-webkit-user-drag:none}\n.details{display:grid;min-width:0;align-content:start;gap:var(--space-6)}\n.picker{display:grid;gap:10px}\n.pickerLabel{display:flex;margin:0;align-items:baseline;gap:8px;color:var(--text-secondary)}\n.pickerValue{position:relative;display:inline-flex;min-width:0;color:var(--foreground);font-weight:500}\n.swatches{position:relative;display:flex;flex-wrap:wrap;gap:12px;padding:4px;margin:-4px}\n.swatchRing{position:absolute;top:0;left:0;border-radius:50%;box-shadow:0 0 0 2.5px var(--background),0 0 0 4px var(--foreground);pointer-events:none}\n.swatch{position:relative;display:block;width:32px;height:32px;padding:0;border:0;border-radius:50%;background:transparent;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:transform var(--duration-instant) var(--ease-standard)}\n.swatch:active{transform:scale(.92)}\n.swatch[data-sold-out]:after{content:\"\";position:absolute;inset:0;border-radius:inherit;background:linear-gradient(135deg,transparent calc(50% - 1px),var(--background) calc(50% - 1px),var(--background) calc(50% + 1px),transparent calc(50% + 1px))}\n.swatchFill{display:block;width:100%;height:100%;border-radius:inherit;box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--foreground) 14%,transparent)}\n.sizes{position:relative;display:grid;gap:8px;grid-template-columns:repeat(auto-fill,minmax(76px,1fr))}\n.sizeFill{position:absolute;top:0;left:0;border-radius:14px;background:var(--accent);pointer-events:none}\n.size{position:relative;height:var(--control-height-md);padding:0 10px;border:0;border-radius:14px;background:transparent;box-shadow:inset 0 0 0 1px var(--border);color:var(--foreground);cursor:pointer;font:inherit;font-weight:500;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.size[data-active]{box-shadow:inset 0 0 0 1px transparent;color:var(--accent-foreground)}\n.size:active:not([data-sold-out]){transform:scale(.97)}\n.size[data-sold-out]{background:var(--surface-muted);box-shadow:none;color:var(--text-muted);cursor:not-allowed;text-decoration:line-through;text-decoration-color:color-mix(in oklab,var(--text-muted) 70%,transparent)}\n.size:not([data-sold-out],[data-active]):hover{box-shadow:inset 0 0 0 1px var(--border-strong)}\n.size:focus-visible:not([data-active]){box-shadow:inset 0 0 0 1px var(--border-strong)}\n.viewerButton:not(:disabled):hover{background:var(--surface-muted)}\n.viewerButton{display:grid;width:40px;height:40px;flex:none;place-items:center;padding:0;border:0;border-radius:50%;background:var(--surface-raised);box-shadow:inset 0 0 0 1px var(--border);color:var(--foreground);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.viewerButton:active:not(:disabled){transform:scale(.94)}\n.viewerButton:disabled{cursor:default;opacity:.35}\n.viewer{position:fixed;z-index:1000;inset:0;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body)}\n.backdrop{position:absolute;inset:0;background:color-mix(in oklab,var(--background) 92%,transparent);-webkit-backdrop-filter:blur(20px) saturate(1.2);backdrop-filter:blur(20px) saturate(1.2)}\n@media (prefers-reduced-transparency:reduce){.backdrop{background:var(--background);-webkit-backdrop-filter:none;backdrop-filter:none}\n.frame{position:absolute;overflow:hidden;background:var(--surface-muted);cursor:zoom-in;touch-action:none;user-select:none;will-change:transform}\n.frame[data-zoomed]{cursor:zoom-out}\n.frameSlide,.zoomLayer{position:absolute;inset:0}\n.viewerTop{position:absolute;top:0;right:0;left:0;display:flex;height:64px;box-sizing:border-box;align-items:center;justify-content:space-between;gap:12px;padding:0 16px 0 24px}\n@media (max-width:640px){.viewerTop{height:56px;padding:0 12px 0 16px}\n.counter{font-variant-numeric:tabular-nums;font-weight:500}\n.hint{overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap}\n.viewerNav{position:absolute;bottom:16px;left:50%;display:flex;align-items:center;gap:14px;translate:-50% 0}\n.viewerDots{display:flex;gap:5px}", {"root":"root","layout":"layout","media":"media","stage":"stage","expand":"expand","track":"track","slide":"slide","photo":"photo","lens":"lens","lensPhoto":"lensPhoto","dot":"dot","size":"size","swatch":"swatch","thumb":"thumb","viewerButton":"viewerButton","dots":"dots","viewerDots":"viewerDots","rail":"rail","railIndicator":"railIndicator","thumbPhoto":"thumbPhoto","details":"details","picker":"picker","pickerLabel":"pickerLabel","pickerValue":"pickerValue","swatches":"swatches","swatchRing":"swatchRing","swatchFill":"swatchFill","sizes":"sizes","sizeFill":"sizeFill","viewer":"viewer","backdrop":"backdrop","frame":"frame","frameSlide":"frameSlide","zoomLayer":"zoomLayer","viewerTop":"viewerTop","counter":"counter","hint":"hint","viewerNav":"viewerNav"});
A.cssFor("product-gallery", [56132,85762]);
A.item("product-gallery", {entry:36607, export:"ProductGalleryDemo", kind:"component", tier:"pro", unresolved:[]});
})();