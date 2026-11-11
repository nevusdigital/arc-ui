function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { CartDrawer: () => V, default: () => J });
  var i = t(95155), r = t(12115), n = t(5772), s = t(18310), o = t(80642), d = t(25354), l = t(28245), c = t(55809), u = t(92171), p = t(25879), h = t(36565), m = t(2125), g = t(9005), y = t(16720), _ = t(64577), f = t(13488), x = t(36145), w = t(65024), j = t(51288), b = t(67752), v = t(7770), N = t(91820), k = t.n(N);
  let A = [
    {
      id: "chair",
      name: "Oak lounge chair",
      detail: "Woven oak, sheepskin",
      price: 1240,
      photo: "lounge-chair"
    },
    {
      id: "lamp",
      name: "Dome table lamp",
      detail: "Opal glass, 2700K",
      price: 186,
      photo: "table-lamp"
    },
    {
      id: "carafe",
      name: "Ribbed carafe",
      detail: "Mouth-blown glass, 1 L",
      price: 64,
      photo: "glass-carafe"
    },
    {
      id: "cups",
      name: "Stoneware cups",
      detail: "Set of two, speckled",
      price: 48,
      photo: "stoneware-cups"
    },
    {
      id: "bowls",
      name: "Nesting bowls",
      detail: "Glazed stoneware, pair",
      price: 56,
      photo: "stacked-bowls"
    },
    {
      id: "throw",
      name: "Linen throw",
      detail: "Stonewashed, fringed",
      price: 118,
      photo: "linen-throw"
    }
  ], P = new Map(A.map((e2) => [e2.id, e2])), T = "STUDIO10", M = [{ id: "carafe", qty: 1 }], { spring: S, duration: $, ease: z } = v.T, C = [...z.enter], R = [...z.standard], E = (e2, a2) => {
    let t2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: t2 * t2,
      damping: 2 * (1 - a2) * t2,
      mass: 1
    };
  }, I = E(0.42, 0), L = E(0.34, 0), F = E(0.5, 0), O = (e2) => `$${e2.toLocaleString("en-US")}`, W = () => () => {
  };
  function Y({ value: e2, prefix: a2 = "" }) {
    return (0, i.jsx)("span", {
      className: k().num,
      children: (0, i.jsx)(w.q, { value: e2, prefix: a2 })
    });
  }
  function q({ text: e2, reduced: a2, className: t2, anchor: r2 = "left" }) {
    return (0, i.jsx)("span", {
      className: [k().swap, t2].filter(Boolean).join(" "),
      children: (0, i.jsx)(o.N, {
        mode: "popLayout",
        initial: false,
        anchorX: r2,
        children: (0, i.jsx)(
          d.PY1.span,
          {
            initial: a2 ? { opacity: 0 } : { opacity: 0, y: "0.4em" },
            animate: { opacity: 1, y: "0em" },
            exit: a2 ? { opacity: 0, transition: { duration: 0 } } : {
              opacity: 0,
              y: "-0.4em",
              transition: { duration: $.fast, ease: R }
            },
            transition: a2 ? { duration: $.instant } : { duration: $.standard, ease: C },
            children: e2
          },
          e2
        )
      })
    });
  }
  function B({ children: e2, reduced: a2, className: t2 }) {
    let n2 = (0, r.useRef)(null), [s2, o2] = (0, r.useState)("auto");
    return (0, r.useLayoutEffect)(() => {
      let e3 = n2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(() => o2(e3.offsetHeight));
      return a3.observe(e3), () => a3.disconnect();
    }, []), (0, i.jsx)(d.PY1.div, {
      className: [k().fit, t2].filter(Boolean).join(" "),
      initial: false,
      animate: { height: s2 },
      transition: a2 ? { duration: 0 } : S.smooth,
      children: (0, i.jsx)("div", {
        ref: n2,
        className: k().fitInner,
        children: e2
      })
    });
  }
  function D({ flight: e2, onLand: a2 }) {
    let t2 = (0, l.d)(0), s2 = (0, r.useEffectEvent)(() => a2(e2.key)), { from: o2, to: p2 } = e2, h2 = { x: o2.x + o2.w / 2, y: o2.y + o2.h / 2 }, m2 = {
      x: h2.x + (p2.x - h2.x) * 0.55,
      y: Math.max(
        8,
        Math.min(h2.y, p2.y) - Math.min(160, 0.35 * Math.abs(p2.x - h2.x))
      )
    }, g2 = (e3, a3, t3, i2) => (1 - e3) * (1 - e3) * a3 + 2 * (1 - e3) * e3 * t3 + e3 * e3 * i2, y2 = (0, c.G)(t2, (e3) => o2.w + (26 - o2.w) * Math.min(1, 1.25 * e3)), _2 = (0, c.G)(t2, (e3) => o2.h + (26 - o2.h) * Math.min(1, 1.25 * e3)), f2 = (0, c.G)(
      t2,
      (e3) => `translate3d(${g2(e3, h2.x, m2.x, p2.x).toFixed(2)}px, ${g2(e3, h2.y, m2.y, p2.y).toFixed(2)}px, 0) translate(-50%, -50%) rotate(${(-10 * Math.sin(e3 * Math.PI)).toFixed(2)}deg)`
    ), x2 = (0, c.G)(t2, (e3) => 16 - 3 * e3), w2 = (0, c.G)(t2, [0, 0.86, 1], [1, 1, 0]), j2 = (0, c.G)(
      t2,
      (e3) => `0 ${(4 + 14 * Math.sin(e3 * Math.PI)).toFixed(1)}px ${(10 + 26 * Math.sin(e3 * Math.PI)).toFixed(1)}px oklch(0% 0 0 / ${(0.08 + 0.12 * Math.sin(e3 * Math.PI)).toFixed(3)})`
    );
    return (0, r.useEffect)(() => {
      let e3 = (0, u.i)(t2, 1, { duration: 0.78, ease: [0.32, 0, 0.18, 1] });
      return e3.then(() => s2()), () => e3.stop();
    }, [t2]), (0, i.jsx)(d.PY1.div, {
      className: k().flyer,
      style: {
        width: y2,
        height: _2,
        transform: f2,
        borderRadius: x2,
        opacity: w2,
        boxShadow: j2
      },
      "aria-hidden": "true",
      children: (0, i.jsx)(n.default, {
        src: (0, b.jW)(e2.product.photo).src,
        alt: "",
        fill: true,
        sizes: "240px"
      })
    });
  }
  function H({ line: e2, product: a2, reduced: t2, onQty: s2, onRemove: y2 }) {
    let _2 = (0, l.d)(0), f2 = (0, r.useRef)(null), x2 = (0, c.G)(_2, [-140, -28, 0], [1, 0.35, 0]), w2 = (0, c.G)(_2, [-120, -40], [1, 0.7]), [j2, v2] = (0, r.useState)(false);
    return (0, i.jsx)(d.PY1.li, {
      className: k().row,
      initial: t2 ? { opacity: 0 } : { opacity: 0, height: 0 },
      animate: { opacity: 1, height: "auto" },
      exit: t2 ? { opacity: 0, transition: { duration: 0.12 } } : {
        opacity: 0,
        height: 0,
        transition: {
          height: { ...S.smooth, delay: 0.06 },
          opacity: { duration: $.fast }
        }
      },
      transition: t2 ? { duration: 0.12 } : { height: S.smooth, opacity: { duration: $.standard, ease: C } },
      children: (0, i.jsxs)("div", {
        className: k().rowInner,
        children: [
          (0, i.jsx)(d.PY1.div, {
            className: k().removeLayer,
            "data-armed": j2 || void 0,
            style: { opacity: x2 },
            "aria-hidden": "true",
            children: (0, i.jsxs)(d.PY1.span, {
              style: { scale: w2 },
              className: k().removeHint,
              children: [
                (0, i.jsx)(p.A, { size: 16, strokeWidth: 1.75 }),
                "Remove"
              ]
            })
          }),
          (0, i.jsxs)(d.PY1.div, {
            ref: f2,
            className: k().rowFace,
            style: { x: _2 },
            drag: !t2 && "x",
            dragDirectionLock: true,
            dragMomentum: false,
            dragConstraints: { left: -400, right: 0 },
            dragElastic: { left: 0.02, right: 0.08 },
            onDrag: (e3, a3) => v2(a3.offset.x < -110),
            onDragEnd: (a3, t3) => {
              let i2 = f2.current?.offsetWidth ?? 320;
              if (t3.offset.x < -110 || t3.velocity.x < -520 && t3.offset.x < -24) {
                (0, u.i)(_2, -i2, { ...E(0.28, 0), velocity: t3.velocity.x }), y2(e2.id);
                return;
              }
              v2(false), (0, u.i)(_2, 0, { ...L, velocity: t3.velocity.x });
            },
            children: [
              (0, i.jsx)("span", {
                className: k().thumb,
                children: (0, i.jsx)(n.default, {
                  src: (0, b.jW)(a2.photo).src,
                  alt: "",
                  fill: true,
                  sizes: "64px",
                  draggable: false
                })
              }),
              (0, i.jsxs)("div", {
                className: k().rowText,
                children: [
                  (0, i.jsx)("p", { className: k().rowName, children: a2.name }),
                  (0, i.jsx)("p", {
                    className: k().rowDetail,
                    children: a2.detail
                  }),
                  (0, i.jsxs)("div", {
                    className: k().stepper,
                    role: "group",
                    "aria-label": `${a2.name} quantity`,
                    children: [
                      (0, i.jsx)("button", {
                        type: "button",
                        className: k().stepButton,
                        "aria-label": 1 === e2.qty ? `Remove ${a2.name}` : `Decrease ${a2.name} quantity`,
                        onClick: () => 1 === e2.qty ? y2(e2.id) : s2(e2.id, e2.qty - 1),
                        children: (0, i.jsx)(o.N, {
                          mode: "popLayout",
                          initial: false,
                          children: (0, i.jsx)(
                            d.PY1.span,
                            {
                              className: k().stepIcon,
                              initial: t2 ? { opacity: 0 } : { opacity: 0, scale: 0.5, rotate: -30 },
                              animate: { opacity: 1, scale: 1, rotate: 0 },
                              exit: t2 ? { opacity: 0 } : { opacity: 0, scale: 0.5, rotate: 30 },
                              transition: t2 ? { duration: 0.1 } : S.snappy,
                              children: 1 === e2.qty ? (0, i.jsx)(p.A, {
                                size: 14,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }) : (0, i.jsx)(h.A, {
                                size: 14,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            },
                            1 === e2.qty ? "trash" : "minus"
                          )
                        })
                      }),
                      (0, i.jsx)("span", {
                        className: k().qty,
                        children: (0, i.jsx)(Y, { value: e2.qty })
                      }),
                      (0, i.jsx)("button", {
                        type: "button",
                        className: k().stepButton,
                        "aria-label": `Increase ${a2.name} quantity`,
                        disabled: e2.qty >= 9,
                        onClick: () => s2(e2.id, e2.qty + 1),
                        children: (0, i.jsx)(m.A, {
                          size: 14,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      })
                    ]
                  })
                ]
              }),
              (0, i.jsxs)("div", {
                className: k().rowEnd,
                children: [
                  (0, i.jsx)("span", {
                    className: k().linePrice,
                    children: (0, i.jsx)(Y, {
                      value: a2.price * e2.qty,
                      prefix: "$"
                    })
                  }),
                  (0, i.jsx)("button", {
                    type: "button",
                    className: k().iconButton,
                    "aria-label": `Remove ${a2.name}`,
                    onClick: () => y2(e2.id),
                    children: (0, i.jsx)(g.A, {
                      size: 15,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  })
                ]
              })
            ]
          })
        ]
      })
    });
  }
  let G = {
    shown: { opacity: 1, transition: { duration: $.standard, ease: C } },
    gone: { opacity: 0, transition: { duration: $.fast, ease: R } }
  };
  function V() {
    let e2, a2 = (e2 = (0, r.useSyncExternalStore)(
      W,
      () => true,
      () => false
    ), !!(0, s.I)() && e2), t2 = (0, r.useId)().replace(/[^a-zA-Z0-9-]/g, ""), l2 = (0, r.useRef)(null), c2 = (0, r.useRef)(null), p2 = (0, r.useRef)(null), h2 = (0, r.useRef)(null), w2 = (0, r.useRef)(/* @__PURE__ */ new Map()), v2 = (0, r.useRef)(0), N2 = (0, r.useRef)([]), [z2, L2] = (0, r.useState)(M), [V2, J2] = (0, r.useState)([]), [U, K] = (0, r.useState)(false), [Q, X] = (0, r.useState)({}), [Z, ee] = (0, r.useState)(0), [ea, et] = (0, r.useState)(""), [ei, er] = (0, r.useState)(null), [en, es] = (0, r.useState)(null), [eo, ed] = (0, r.useState)("cart"), [el, ec] = (0, r.useState)(null), [eu, ep] = (0, r.useState)(""), [eh, em] = (0, r.useState)(0), eg = z2.reduce((e3, a3) => e3 + a3.qty, 0), ey = Math.max(0, eg - V2.length), e_ = z2.reduce((e3, a3) => e3 + (P.get(a3.id)?.price ?? 0) * a3.qty, 0), ef = ei ? Math.round(0.1 * e_) : 0, ex = e_ >= 250, ew = !z2.length || ex ? 0 : 12, ej = e_ - ef + ew, eb = Math.min(1, e_ / 250);
    (0, r.useEffect)(
      () => () => {
        N2.current.forEach(window.clearTimeout);
      },
      []
    );
    let ev = (e3, a3) => {
      N2.current.push(window.setTimeout(e3, a3));
    }, eN = (0, r.useRef)(false);
    (0, r.useEffect)(() => {
      U ? p2.current?.focus({ preventScroll: true }) : eN.current && c2.current?.focus({ preventScroll: true }), eN.current = U;
    }, [U]);
    let ek = (0, r.useEffectEvent)((e3) => {
      "Escape" === e3.key && "placing" !== eo && K(false);
    });
    function eA() {
      ee((e4) => e4 + 1);
      let e3 = c2.current;
      e3 && !a2 && (0, u.i)(
        e3,
        { scale: [1, 1.09, 0.98, 1] },
        { duration: 0.42, ease: "easeOut", times: [0, 0.35, 0.7, 1] }
      );
    }
    function eP(e3) {
      J2((a3) => a3.filter((a4) => a4.key !== e3)), eA();
    }
    function eT(e3, a3) {
      L2((t3) => t3.map((t4) => t4.id === e3 ? { ...t4, qty: a3 } : t4));
    }
    function eM(e3) {
      L2((a3) => a3.filter((a4) => a4.id !== e3)), ep(`Removed ${P.get(e3)?.name ?? "item"}`);
    }
    (0, r.useEffect)(() => {
      if (!U) return;
      let e3 = (e4) => ek(e4);
      return document.addEventListener("keydown", e3), () => document.removeEventListener("keydown", e3);
    }, [U]);
    let eS = a2 ? { duration: 0 } : F, e$ = a2 ? {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.16 }
    } : {
      initial: { x: "104%" },
      animate: { x: "0%" },
      exit: { x: "104%", transition: E(0.34, 0) },
      transition: I
    };
    return (0, i.jsxs)("section", {
      ref: l2,
      className: k().root,
      "aria-labelledby": `${t2}-title`,
      children: [
        (0, i.jsxs)("div", {
          className: k().shop,
          inert: U || void 0,
          children: [
            (0, i.jsxs)("header", {
              className: k().header,
              children: [
                (0, i.jsx)("h2", {
                  id: `${t2}-title`,
                  className: k().title,
                  children: "New in the studio"
                }),
                (0, i.jsxs)("div", {
                  className: k().cartWrap,
                  children: [
                    (0, i.jsx)(o.N, {
                      children: Z > 0 && !a2 && (0, i.jsx)(
                        d.PY1.span,
                        {
                          className: k().ring,
                          "aria-hidden": "true",
                          initial: { opacity: 0.45, scale: 1 },
                          animate: { opacity: 0, scale: 1.45 },
                          transition: { duration: 0.6, ease: C }
                        },
                        Z
                      )
                    }),
                    (0, i.jsxs)("button", {
                      ref: c2,
                      type: "button",
                      className: k().cart,
                      "aria-haspopup": "dialog",
                      "aria-expanded": U,
                      "aria-controls": `${t2}-drawer`,
                      "aria-label": `Cart, ${ey} ${1 === ey ? "item" : "items"}`,
                      onClick: () => {
                        em((e3) => e3 + 1), K(true);
                      },
                      children: [
                        (0, i.jsx)(y.A, {
                          size: 18,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        (0, i.jsx)("span", {
                          className: k().cartLabel,
                          children: "Cart"
                        }),
                        (0, i.jsx)(o.N, {
                          initial: false,
                          children: ey > 0 && (0, i.jsx)(
                            d.PY1.span,
                            {
                              className: k().badge,
                              "aria-hidden": "true",
                              initial: a2 ? { opacity: 0 } : { opacity: 0, scale: 0.4 },
                              animate: { opacity: 1, scale: 1 },
                              exit: a2 ? { opacity: 0 } : { opacity: 0, scale: 0.4 },
                              transition: a2 ? { duration: 0.12 } : S.snappy,
                              children: (0, i.jsx)(Y, { value: ey })
                            },
                            "badge"
                          )
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, i.jsx)("ul", {
              className: k().grid,
              children: A.map((e3) => {
                let t3 = (0, b.jW)(e3.photo), r2 = (Q[e3.id] ?? 0) > 0;
                return (0, i.jsxs)(
                  "li",
                  {
                    className: k().card,
                    children: [
                      (0, i.jsx)("span", {
                        className: k().imageFrame,
                        ref: (a3) => {
                          a3 ? w2.current.set(e3.id, a3) : w2.current.delete(e3.id);
                        },
                        children: (0, i.jsx)(n.default, {
                          src: t3.src,
                          alt: t3.alt,
                          fill: true,
                          sizes: "(max-width: 640px) 50vw, 260px"
                        })
                      }),
                      (0, i.jsxs)("div", {
                        className: k().cardText,
                        children: [
                          (0, i.jsx)("p", {
                            className: k().name,
                            children: e3.name
                          }),
                          (0, i.jsx)("p", {
                            className: k().price,
                            children: O(e3.price)
                          })
                        ]
                      }),
                      (0, i.jsx)("p", {
                        className: k().detail,
                        children: e3.detail
                      }),
                      (0, i.jsx)(j.A, {
                        variant: "secondary",
                        size: "sm",
                        className: k().addButton,
                        onClick: () => (function(e4) {
                          L2(
                            (a3) => a3.some((a4) => a4.id === e4.id) ? a3.map(
                              (a4) => a4.id === e4.id ? { ...a4, qty: Math.min(9, a4.qty + 1) } : a4
                            ) : [...a3, { id: e4.id, qty: 1 }]
                          ), X((a3) => ({ ...a3, [e4.id]: (a3[e4.id] ?? 0) + 1 })), ev(
                            () => X((a3) => ({
                              ...a3,
                              [e4.id]: Math.max(0, (a3[e4.id] ?? 1) - 1)
                            })),
                            1400
                          ), ep(`Added ${e4.name} to your cart`), "done" === eo && (ed("cart"), ec(null));
                          let t4 = w2.current.get(e4.id), i2 = c2.current, r3 = l2.current;
                          if (a2 || !t4 || !i2 || !r3) return void eA();
                          let n2 = r3.getBoundingClientRect(), s2 = t4.getBoundingClientRect(), o2 = i2.getBoundingClientRect();
                          v2.current += 1, J2((a3) => [
                            ...a3,
                            {
                              key: v2.current,
                              product: e4,
                              from: {
                                x: s2.left - n2.left,
                                y: s2.top - n2.top,
                                w: s2.width,
                                h: s2.height
                              },
                              to: {
                                x: o2.left - n2.left + 22,
                                y: o2.top - n2.top + o2.height / 2
                              }
                            }
                          ]);
                        })(e3),
                        "aria-label": `Add ${e3.name} to cart`,
                        children: r2 ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(_.A, {
                              size: 15,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            }),
                            "Added"
                          ]
                        }) : (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(m.A, {
                              size: 15,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            }),
                            "Add to cart"
                          ]
                        })
                      })
                    ]
                  },
                  e3.id
                );
              })
            })
          ]
        }),
        (0, i.jsx)("div", {
          className: k().flights,
          "aria-hidden": "true",
          children: V2.map(
            (e3) => (0, i.jsx)(D, { flight: e3, onLand: eP }, e3.key)
          )
        }),
        (0, i.jsxs)(o.N, {
          children: [
            U && (0, i.jsx)(
              d.PY1.div,
              {
                className: k().scrim,
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: a2 ? 0.12 : 0.28, ease: R },
                onClick: () => {
                  "placing" !== eo && K(false);
                },
                "aria-hidden": "true"
              },
              "scrim"
            ),
            U && (0, i.jsxs)(
              d.PY1.aside,
              {
                id: `${t2}-drawer`,
                className: k().drawer,
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": `${t2}-drawer-title`,
                ...e$,
                children: [
                  (0, i.jsxs)("header", {
                    className: k().drawerHead,
                    children: [
                      (0, i.jsx)("h3", {
                        id: `${t2}-drawer-title`,
                        className: k().drawerTitle,
                        children: "done" === eo ? "Order placed" : "Your cart"
                      }),
                      "done" !== eo && (0, i.jsxs)("span", {
                        className: k().drawerCount,
                        children: [
                          (0, i.jsx)(Y, { value: eg }),
                          " ",
                          1 === eg ? "item" : "items"
                        ]
                      }),
                      (0, i.jsx)("button", {
                        ref: p2,
                        type: "button",
                        className: k().iconButton,
                        "aria-label": "Close cart",
                        onClick: () => K(false),
                        disabled: "placing" === eo,
                        children: (0, i.jsx)(g.A, {
                          size: 17,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      })
                    ]
                  }),
                  (0, i.jsx)(o.N, {
                    initial: false,
                    mode: "popLayout",
                    children: "done" !== eo ? (0, i.jsxs)(
                      d.PY1.div,
                      {
                        className: k().drawerBody,
                        variants: G,
                        initial: "gone",
                        animate: "shown",
                        exit: "gone",
                        inert: "placing" === eo || void 0,
                        children: [
                          z2.length > 0 && (0, i.jsxs)("div", {
                            className: k().shipping,
                            "data-free": ex || void 0,
                            children: [
                              (0, i.jsxs)("p", {
                                className: k().shippingText,
                                children: [
                                  (0, i.jsx)(f.A, {
                                    size: 16,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  }),
                                  (0, i.jsx)(q, {
                                    reduced: a2,
                                    text: ex ? "Free shipping unlocked" : `${O(250 - e_)} away from free shipping`
                                  })
                                ]
                              }),
                              (0, i.jsx)("div", {
                                className: k().track,
                                role: "progressbar",
                                "aria-label": "Progress to free shipping",
                                "aria-valuemin": 0,
                                "aria-valuemax": 250,
                                "aria-valuenow": Math.min(e_, 250),
                                children: (0, i.jsx)(d.PY1.span, {
                                  className: k().fill,
                                  initial: false,
                                  animate: { scaleX: eb },
                                  transition: a2 ? { duration: 0 } : S.smooth
                                })
                              })
                            ]
                          }),
                          (0, i.jsx)("ul", {
                            className: k().lines,
                            children: (0, i.jsx)(o.N, {
                              initial: false,
                              children: z2.map((e3) => {
                                let t3 = P.get(e3.id);
                                return t3 ? (0, i.jsx)(
                                  H,
                                  {
                                    line: e3,
                                    product: t3,
                                    reduced: a2,
                                    onQty: eT,
                                    onRemove: eM
                                  },
                                  e3.id
                                ) : null;
                              })
                            })
                          }),
                          (0, i.jsx)(o.N, {
                            initial: false,
                            children: !z2.length && (0, i.jsxs)(
                              d.PY1.div,
                              {
                                className: k().empty,
                                initial: { opacity: 0 },
                                animate: {
                                  opacity: 1,
                                  transition: {
                                    delay: 0.12,
                                    duration: $.standard
                                  }
                                },
                                exit: {
                                  opacity: 0,
                                  transition: { duration: 0.08 }
                                },
                                children: [
                                  (0, i.jsx)(y.A, {
                                    size: 22,
                                    strokeWidth: 1.5,
                                    "aria-hidden": "true"
                                  }),
                                  (0, i.jsx)("p", {
                                    children: "Your cart is empty"
                                  }),
                                  (0, i.jsx)(j.A, {
                                    variant: "secondary",
                                    size: "sm",
                                    onClick: () => K(false),
                                    children: "Keep browsing"
                                  })
                                ]
                              },
                              "empty"
                            )
                          })
                        ]
                      },
                      "cart"
                    ) : (0, i.jsxs)(
                      d.PY1.div,
                      {
                        className: k().done,
                        initial: { opacity: 0 },
                        animate: {
                          opacity: 1,
                          transition: {
                            delay: 0.12 * !a2,
                            duration: $.standard
                          }
                        },
                        exit: { opacity: 0 },
                        children: [
                          (0, i.jsx)(d.PY1.div, {
                            layoutId: `${t2}-checkout-${eh}`,
                            className: k().doneDisc,
                            style: { borderRadius: 999 },
                            transition: eS,
                            children: (0, i.jsx)("svg", {
                              viewBox: "0 0 24 24",
                              "aria-hidden": "true",
                              children: (0, i.jsx)(d.PY1.path, {
                                d: "M6.5 12.5l3.6 3.6 7.4-8",
                                initial: !a2 && { pathLength: 0 },
                                animate: { pathLength: 1 },
                                transition: {
                                  duration: 0.3,
                                  ease: C,
                                  delay: 0.38 * !a2
                                }
                              })
                            })
                          }),
                          (0, i.jsx)("p", {
                            className: k().doneTitle,
                            children: "Thanks, Olivia"
                          }),
                          (0, i.jsx)("p", {
                            className: k().doneBody,
                            children: "Order A-20417 is confirmed and a receipt is on its way to olivia@bennett.studio."
                          }),
                          el && (0, i.jsxs)("dl", {
                            className: k().doneFacts,
                            children: [
                              (0, i.jsxs)("div", {
                                children: [
                                  (0, i.jsx)("dt", {
                                    children: "Items"
                                  }),
                                  (0, i.jsx)("dd", {
                                    children: el.items
                                  })
                                ]
                              }),
                              (0, i.jsxs)("div", {
                                children: [
                                  (0, i.jsx)("dt", {
                                    children: "Paid"
                                  }),
                                  (0, i.jsx)("dd", {
                                    children: O(el.total)
                                  })
                                ]
                              }),
                              (0, i.jsxs)("div", {
                                children: [
                                  (0, i.jsx)("dt", {
                                    children: "Arrives"
                                  }),
                                  (0, i.jsx)("dd", {
                                    children: "Oct 2 to Oct 4"
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      },
                      "done"
                    )
                  }),
                  (0, i.jsxs)("footer", {
                    className: k().drawerFoot,
                    children: [
                      (0, i.jsx)(o.N, {
                        initial: false,
                        children: "done" !== eo && z2.length > 0 && (0, i.jsx)(
                          d.PY1.div,
                          {
                            className: k().summaryWrap,
                            initial: { opacity: 0, height: 0 },
                            animate: { opacity: 1, height: "auto" },
                            exit: { opacity: 0, height: 0 },
                            transition: a2 ? { duration: 0.12 } : {
                              height: S.smooth,
                              opacity: { duration: $.fast }
                            },
                            inert: "placing" === eo || void 0,
                            children: (0, i.jsxs)("div", {
                              className: k().summary,
                              children: [
                                (0, i.jsx)(B, {
                                  reduced: a2,
                                  children: (0, i.jsx)(o.N, {
                                    initial: false,
                                    mode: "popLayout",
                                    children: ei ? (0, i.jsxs)(
                                      d.PY1.div,
                                      {
                                        className: k().promoApplied,
                                        initial: a2 ? { opacity: 0 } : { opacity: 0, scale: 0.96 },
                                        animate: {
                                          opacity: 1,
                                          scale: 1
                                        },
                                        exit: {
                                          opacity: 0,
                                          scale: 0.96
                                        },
                                        transition: a2 ? { duration: 0.12 } : S.snappy,
                                        children: [
                                          (0, i.jsx)(x.A, {
                                            size: 15,
                                            strokeWidth: 1.75,
                                            "aria-hidden": "true"
                                          }),
                                          (0, i.jsxs)("span", {
                                            children: [
                                              (0, i.jsx)("strong", {
                                                children: ei
                                              }),
                                              " 10% off"
                                            ]
                                          }),
                                          (0, i.jsx)("button", {
                                            type: "button",
                                            className: k().textButton,
                                            onClick: () => {
                                              er(null), ep(
                                                "Promo code removed"
                                              );
                                            },
                                            children: "Remove"
                                          })
                                        ]
                                      },
                                      "applied"
                                    ) : (0, i.jsxs)(
                                      d.PY1.form,
                                      {
                                        className: k().promo,
                                        onSubmit: function(e3) {
                                          e3.preventDefault();
                                          let t3 = ea.trim().toUpperCase();
                                          if (!t3)
                                            return void h2.current?.focus();
                                          if (t3 === T) {
                                            er(T), es(null), et(""), ep(
                                              "Promo code applied, 10% off"
                                            );
                                            return;
                                          }
                                          es(`${t3} isn't a valid code`);
                                          let i2 = h2.current?.parentElement;
                                          i2 && !a2 && (0, u.i)(
                                            i2,
                                            {
                                              x: [0, -6, 5, -3, 2, 0]
                                            },
                                            {
                                              duration: 0.36,
                                              ease: "easeOut"
                                            }
                                          );
                                        },
                                        initial: { opacity: 0 },
                                        animate: { opacity: 1 },
                                        exit: { opacity: 0 },
                                        transition: {
                                          duration: $.fast
                                        },
                                        children: [
                                          (0, i.jsxs)("div", {
                                            className: k().promoField,
                                            "data-error": en ? "" : void 0,
                                            children: [
                                              (0, i.jsx)("input", {
                                                ref: h2,
                                                className: k().promoInput,
                                                value: ea,
                                                onChange: (e3) => {
                                                  et(e3.target.value), es(null);
                                                },
                                                placeholder: "Promo code",
                                                "aria-label": "Promo code",
                                                "aria-invalid": !!en,
                                                "aria-describedby": `${t2}-promo-note`,
                                                autoComplete: "off",
                                                spellCheck: false
                                              }),
                                              (0, i.jsx)("button", {
                                                type: "submit",
                                                className: k().applyButton,
                                                children: "Apply"
                                              })
                                            ]
                                          }),
                                          (0, i.jsx)("p", {
                                            id: `${t2}-promo-note`,
                                            className: k().promoNote,
                                            "data-error": en ? "" : void 0,
                                            children: (0, i.jsx)(q, {
                                              reduced: a2,
                                              text: en ?? `Try ${T} for 10% off`
                                            })
                                          })
                                        ]
                                      },
                                      "form"
                                    )
                                  })
                                }),
                                (0, i.jsxs)("dl", {
                                  className: k().totals,
                                  children: [
                                    (0, i.jsxs)("div", {
                                      className: k().totalRow,
                                      children: [
                                        (0, i.jsx)("dt", {
                                          children: "Subtotal"
                                        }),
                                        (0, i.jsx)("dd", {
                                          children: (0, i.jsx)(Y, {
                                            value: e_,
                                            prefix: "$"
                                          })
                                        })
                                      ]
                                    }),
                                    (0, i.jsx)(o.N, {
                                      initial: false,
                                      children: ef > 0 && (0, i.jsxs)(
                                        d.PY1.div,
                                        {
                                          className: k().totalRow,
                                          "data-tone": "discount",
                                          initial: {
                                            opacity: 0,
                                            height: 0
                                          },
                                          animate: {
                                            opacity: 1,
                                            height: "auto"
                                          },
                                          exit: { opacity: 0, height: 0 },
                                          transition: a2 ? { duration: 0.12 } : {
                                            height: S.smooth,
                                            opacity: {
                                              duration: $.fast
                                            }
                                          },
                                          children: [
                                            (0, i.jsx)("dt", {
                                              children: "Discount"
                                            }),
                                            (0, i.jsxs)("dd", {
                                              children: [
                                                "\u2212",
                                                (0, i.jsx)(Y, {
                                                  value: ef,
                                                  prefix: "$"
                                                })
                                              ]
                                            })
                                          ]
                                        },
                                        "discount"
                                      )
                                    }),
                                    (0, i.jsxs)("div", {
                                      className: k().totalRow,
                                      children: [
                                        (0, i.jsx)("dt", {
                                          children: "Shipping"
                                        }),
                                        (0, i.jsx)("dd", {
                                          children: (0, i.jsx)(q, {
                                            reduced: a2,
                                            anchor: "right",
                                            text: ew ? O(ew) : "Free"
                                          })
                                        })
                                      ]
                                    }),
                                    (0, i.jsxs)("div", {
                                      className: k().totalRow,
                                      "data-tone": "total",
                                      children: [
                                        (0, i.jsx)("dt", {
                                          children: "Total"
                                        }),
                                        (0, i.jsx)("dd", {
                                          children: (0, i.jsx)(Y, {
                                            value: ej,
                                            prefix: "$"
                                          })
                                        })
                                      ]
                                    })
                                  ]
                                })
                              ]
                            })
                          },
                          "summary"
                        )
                      }),
                      "done" === eo ? (0, i.jsx)(d.PY1.div, {
                        className: k().continueWrap,
                        initial: { opacity: 0 },
                        animate: {
                          opacity: 1,
                          transition: {
                            delay: 0.3 * !a2,
                            duration: $.standard
                          }
                        },
                        children: (0, i.jsx)(j.A, {
                          variant: "secondary",
                          size: "lg",
                          className: k().continue,
                          onClick: function() {
                            L2([]), er(null), et(""), es(null), K(false), ev(() => {
                              ed("cart"), ec(null);
                            }, 420);
                          },
                          children: "Continue shopping"
                        })
                      }) : (0, i.jsx)(d.PY1.button, {
                        layoutId: `${t2}-checkout-${eh}`,
                        type: "button",
                        className: k().checkout,
                        style: { borderRadius: 18 },
                        transition: eS,
                        onClick: function() {
                          z2.length && "cart" === eo && (ed("placing"), ep("Placing your order"), ev(() => {
                            ec({ items: eg, total: ej }), ed("done"), ep(
                              `Order placed. ${eg} ${1 === eg ? "item" : "items"}, ${O(ej)}.`
                            );
                          }, 1300));
                        },
                        disabled: !z2.length,
                        "aria-disabled": "placing" === eo || void 0,
                        "aria-busy": "placing" === eo || void 0,
                        children: (0, i.jsx)(o.N, {
                          mode: "popLayout",
                          initial: false,
                          children: "placing" === eo ? (0, i.jsxs)(
                            d.PY1.span,
                            {
                              className: k().checkoutLabel,
                              "data-center": "",
                              initial: { opacity: 0, y: 8 * !a2 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0 },
                              transition: {
                                duration: $.standard,
                                ease: C
                              },
                              children: [
                                (0, i.jsx)("span", {
                                  className: k().spinner,
                                  "aria-hidden": "true"
                                }),
                                "Placing order"
                              ]
                            },
                            "placing"
                          ) : (0, i.jsxs)(
                            d.PY1.span,
                            {
                              className: k().checkoutLabel,
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: {
                                opacity: 0,
                                y: a2 ? 0 : -8,
                                transition: { duration: $.fast }
                              },
                              transition: {
                                duration: $.standard,
                                ease: C
                              },
                              children: [
                                (0, i.jsx)("span", {
                                  children: "Check out"
                                }),
                                (0, i.jsx)(Y, {
                                  value: ej,
                                  prefix: "$"
                                })
                              ]
                            },
                            "idle"
                          )
                        })
                      })
                    ]
                  })
                ]
              },
              "drawer"
            )
          ]
        }),
        (0, i.jsx)("p", {
          className: k().srOnly,
          "aria-live": "polite",
          children: eu
        })
      ]
    });
  }
  let J = V;
}

__m(__module,__exports,__require);
}