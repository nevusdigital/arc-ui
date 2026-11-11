/* product-detail (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(15298, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => s });
  var n = r(51811);
  let a = {
    name: "bell",
    size: 24,
    node: [
      ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
      [
        "path",
        {
          d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
          key: "11g9vi"
        }
      ]
    ]
  };
  a.node;
  let s = (0, n.A)(a);
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
A.reg(43968, function(__module,__exports,__require){
"use strict";
function __m(e, a, i) {
  "use strict";
  i.r(a), i.d(a, { ProductDetail: () => $, default: () => B });
  var t = i(95155), s = i(12115), r = i(5772), n = i(18310), l = i(25354), d = i(28245), o = i(92171), c = i(80642), h = i(61792), u = i(93089), p = i(92298), m = i(50981), g = i(95697), b = i(78780), _ = i(76721), w = i(16720), x = i(54757), y = i(36565), j = i(2125), v = i(64577), f = i(15298), k = i(12363), N = i(7770), A = i(67752);
  let z = (e2) => ({ src: (0, A.jW)(e2).src, alt: (0, A.jW)(e2).alt }), S = {
    id: "arch-lamp",
    name: "Arch ceramic lamp",
    collection: "Lighting",
    summary: "A hand thrown stoneware base under a washed linen shade. Warm, even light for a side table or a sideboard.",
    finishes: [
      {
        id: "clay",
        name: "Clay",
        swatch: "#b56a4c",
        images: [
          z("ceramic-lamp"),
          z("living-room"),
          z("home-office"),
          z("stacked-bowls")
        ]
      },
      {
        id: "oat",
        name: "Oat",
        swatch: "#d8cbb3",
        images: [
          z("table-lamp"),
          z("sunroom"),
          z("bedroom"),
          z("linen-throw")
        ]
      },
      {
        id: "charcoal",
        name: "Charcoal",
        swatch: "#3b3a38",
        images: [
          z("home-office"),
          z("ceramic-lamp"),
          z("reading-chair"),
          z("stoneware-cups")
        ]
      }
    ],
    sizes: [
      { id: "small", name: "Small", price: 180, note: "38 cm tall" },
      {
        id: "large",
        name: "Large",
        price: 240,
        note: "52 cm tall",
        soldOutIn: ["charcoal"]
      }
    ],
    rating: 4.7,
    reviewCount: 128,
    distribution: [98, 20, 6, 3, 1],
    shipping: [
      { title: "Free delivery", text: "Arrives Sep 30 to Oct 2" },
      { title: "30 day returns", text: "Free pickup from your door" },
      { title: "Two year warranty", text: "Covers the wiring and the base" }
    ],
    sections: [
      {
        id: "details",
        title: "Details",
        body: [
          "Each base is thrown and glazed by hand in Porto, so the glaze pools a little differently on every lamp.",
          "Dimmable E27 socket, 2 m braided cable with an inline switch."
        ]
      },
      {
        id: "dimensions",
        title: "Materials and dimensions",
        body: [
          "Base: glazed stoneware. Shade: stonewashed linen on a steel frame.",
          "Small: 38 cm tall, 26 cm shade. Large: 52 cm tall, 34 cm shade."
        ]
      },
      {
        id: "care",
        title: "Care",
        body: [
          "Dust the base with a dry cloth. Spot clean the shade with a damp cloth and let it air dry.",
          "Use a bulb up to 40 W, or a warm 2700 K LED."
        ]
      }
    ]
  };
  var C = i(66600), I = i.n(C);
  let M = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], W = [u.A, p.A, m.A], T = (...e2) => e2.filter(Boolean).join(" ");
  function P({ text: e2 }) {
    let a2 = (0, n.I)(), i2 = Array.from(e2);
    return (0, t.jsxs)("span", {
      className: I().roll,
      children: [
        (0, t.jsx)("span", {
          "aria-hidden": "true",
          className: I().rollChars,
          children: i2.map((e3, s2) => {
            let r2 = i2.length - s2;
            return /\d/.test(e3) ? (0, t.jsx)(
              "span",
              {
                className: I().rollDigit,
                children: (0, t.jsx)(l.PY1.span, {
                  className: I().rollStrip,
                  initial: false,
                  animate: { y: `${-10 * Number(e3)}%` },
                  transition: a2 ? { duration: 0 } : N.T.spring.snappy,
                  children: M.map(
                    (e4) => (0, t.jsx)("span", { children: e4 }, e4)
                  )
                })
              },
              r2
            ) : (0, t.jsx)("span", { children: e3 }, `s${r2}`);
          })
        }),
        (0, t.jsx)("span", { className: I().srOnly, children: e2 })
      ]
    });
  }
  function R({ value: e2, size: a2 = 14 }) {
    return (0, t.jsxs)("span", {
      className: I().stars,
      "aria-hidden": "true",
      children: [
        (0, t.jsx)("span", {
          className: I().starsBase,
          children: [0, 1, 2, 3, 4].map(
            (e3) => (0, t.jsx)(g.A, { size: a2, strokeWidth: 1.5 }, e3)
          )
        }),
        (0, t.jsx)("span", {
          className: I().starsFill,
          style: { width: `${e2 / 5 * 100}%` },
          children: [0, 1, 2, 3, 4].map(
            (e3) => (0, t.jsx)(g.A, { size: a2, strokeWidth: 1.5 }, e3)
          )
        })
      ]
    });
  }
  function D(e2, a2, i2, t2, s2 = () => true) {
    let r2 = "ArrowRight" === e2.key || "ArrowDown" === e2.key ? 1 : "ArrowLeft" === e2.key || "ArrowUp" === e2.key ? -1 : 0;
    if (!r2) return;
    e2.preventDefault();
    let n2 = a2.indexOf(i2);
    for (let e3 = 0; e3 < a2.length && (n2 = (n2 + r2 + a2.length) % a2.length, !s2(a2[n2])); e3 += 1) ;
    t2(a2[n2]);
    let l2 = e2.currentTarget.querySelector(`[data-radio="${a2[n2]}"]`);
    l2?.focus();
  }
  function L({ images: e2, name: a2 }) {
    let i2 = (0, n.I)() ?? false, h2 = (0, s.useId)(), [u2, p2] = (0, s.useState)(0), m2 = (0, s.useRef)(null), g2 = (0, s.useRef)(0), w2 = (0, s.useRef)(0), x2 = (0, d.d)(0), y2 = e2.length;
    (0, s.useLayoutEffect)(() => {
      let e3 = m2.current;
      if (!e3) return;
      let a3 = () => {
        g2.current = e3.clientWidth, x2.set(-w2.current * g2.current);
      };
      a3();
      let i3 = new ResizeObserver(a3);
      return i3.observe(e3), () => i3.disconnect();
    }, [x2]);
    let j2 = (0, s.useCallback)(
      (e3, a3 = 0) => {
        let t2 = Math.max(0, Math.min(y2 - 1, e3));
        w2.current = t2, p2(t2), (0, o.i)(
          x2,
          -t2 * g2.current,
          i2 ? { duration: 0 } : {
            type: "spring",
            visualDuration: 0.42,
            bounce: a3 ? 0.14 : 0.06,
            velocity: a3
          }
        );
      },
      [y2, i2, x2]
    );
    return (0, t.jsxs)("div", {
      className: I().gallery,
      children: [
        (0, t.jsxs)("div", {
          ref: m2,
          className: I().viewport,
          role: "region",
          "aria-roledescription": "carousel",
          "aria-label": `${a2} photos`,
          tabIndex: 0,
          onKeyDown: (e3) => {
            "ArrowRight" === e3.key ? (e3.preventDefault(), j2(w2.current + 1)) : "ArrowLeft" === e3.key && (e3.preventDefault(), j2(w2.current - 1));
          },
          children: [
            (0, t.jsx)(l.PY1.div, {
              className: I().track,
              style: { x: x2 },
              drag: y2 > 1 && "x",
              dragConstraints: m2,
              dragElastic: 0.16,
              dragMomentum: false,
              onDragEnd: (e3, a3) => {
                let i3 = g2.current || 1, t2 = Math.round(
                  -(x2.get() + ((e4, a4 = 0.998) => e4 / 1e3 * a4 / (1 - a4))(
                    a3.velocity.x
                  )) / i3
                );
                j2(
                  Math.max(w2.current - 1, Math.min(w2.current + 1, t2)),
                  a3.velocity.x
                );
              },
              children: e2.map(
                (e3, a3) => (0, t.jsx)(
                  "div",
                  {
                    className: I().slide,
                    role: "group",
                    "aria-roledescription": "slide",
                    "aria-label": `${a3 + 1} of ${y2}`,
                    "aria-hidden": a3 !== u2,
                    children: (0, t.jsx)(c.N, {
                      initial: false,
                      children: (0, t.jsx)(
                        l.PY1.div,
                        {
                          className: I().slideImage,
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: { opacity: 0 },
                          transition: {
                            duration: N.T.duration.standard,
                            ease: N.T.ease.standard
                          },
                          children: (0, t.jsx)(r.default, {
                            src: e3.src,
                            alt: e3.alt,
                            fill: true,
                            sizes: "(max-width: 760px) 100vw, 560px",
                            draggable: false,
                            priority: 0 === a3
                          })
                        },
                        e3.src
                      )
                    })
                  },
                  a3
                )
              )
            }),
            y2 > 1 ? (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("button", {
                  type: "button",
                  className: T(I().arrow, I().arrowPrev),
                  onClick: () => j2(u2 - 1),
                  disabled: 0 === u2,
                  "aria-label": "Previous photo",
                  tabIndex: -1,
                  children: (0, t.jsx)(b.A, {
                    size: 18,
                    strokeWidth: 1.75
                  })
                }),
                (0, t.jsx)("button", {
                  type: "button",
                  className: T(I().arrow, I().arrowNext),
                  onClick: () => j2(u2 + 1),
                  disabled: u2 === y2 - 1,
                  "aria-label": "Next photo",
                  tabIndex: -1,
                  children: (0, t.jsx)(_.A, {
                    size: 18,
                    strokeWidth: 1.75
                  })
                }),
                (0, t.jsxs)("span", {
                  className: I().counter,
                  "aria-live": "polite",
                  children: [
                    (0, t.jsx)(P, { text: String(u2 + 1) }),
                    (0, t.jsx)("span", {
                      "aria-hidden": "true",
                      children: "/"
                    }),
                    y2
                  ]
                })
              ]
            }) : null
          ]
        }),
        y2 > 1 ? (0, t.jsx)("div", {
          className: I().thumbs,
          role: "group",
          "aria-label": "Choose a photo",
          children: e2.map(
            (e3, a3) => (0, t.jsxs)(
              "button",
              {
                type: "button",
                className: I().thumb,
                "aria-label": `Show photo ${a3 + 1} of ${y2}`,
                "aria-current": a3 === u2 || void 0,
                onClick: () => j2(a3),
                children: [
                  (0, t.jsx)(c.N, {
                    initial: false,
                    children: (0, t.jsx)(
                      l.PY1.span,
                      {
                        className: I().thumbImage,
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: N.T.duration.standard },
                        children: (0, t.jsx)(r.default, {
                          src: e3.src,
                          alt: "",
                          fill: true,
                          sizes: "80px",
                          draggable: false
                        })
                      },
                      e3.src
                    )
                  }),
                  a3 === u2 ? (0, t.jsx)(l.PY1.span, {
                    layoutId: h2,
                    className: I().thumbRing,
                    transition: i2 ? { duration: 0 } : N.T.spring.snappy
                  }) : null
                ]
              },
              a3
            )
          )
        }) : null
      ]
    });
  }
  function $({
    product: e2 = S,
    defaultFinish: a2,
    defaultSize: i2,
    onAddToCart: r2,
    onNotify: d2,
    onWishlistChange: o2,
    defaultCartCount: u2 = 0,
    maxQuantity: p2 = 9,
    currency: m2 = "USD",
    locale: g2 = "en-US",
    className: b2
  }) {
    let A2 = (0, s.useId)(), z2 = (0, n.I)() ?? false, C2 = (0, s.useMemo)(
      () => new Intl.NumberFormat(g2, {
        style: "currency",
        currency: m2,
        maximumFractionDigits: 0
      }),
      [g2, m2]
    ), [M2, B2] = (0, s.useState)(a2 ?? e2.finishes[0]?.id ?? ""), [F, E] = (0, s.useState)(i2 ?? e2.sizes[0]?.id ?? ""), [O, V] = (0, s.useState)(1), [Y, q] = (0, s.useState)(false), [U, H] = (0, s.useState)(u2), [K, X] = (0, s.useState)("idle"), [Z, Q] = (0, s.useState)([]), [J, G] = (0, s.useState)([e2.sections[0]?.id ?? ""]), [ee, ea] = (0, s.useState)(""), ei = (0, s.useRef)(true), et = (0, s.useRef)(null), es = (0, h.W)(et, { once: true, margin: "-40px" });
    (0, s.useEffect)(
      () => (ei.current = true, () => {
        ei.current = false;
      }),
      []
    );
    let er = e2.finishes.find((e3) => e3.id === M2) ?? e2.finishes[0], en = e2.sizes.find((e3) => e3.id === F) ?? e2.sizes[0], el = (e3 = en) => !!e3?.soldOutIn?.includes(er.id), ed = el(), eo = `${er.id}:${en.id}`, ec = e2.distribution.reduce((e3, a3) => e3 + a3, 0) || 1;
    (0, s.useEffect)(() => {
      if ("added" !== K && "error" !== K) return;
      let e3 = window.setTimeout(() => X("idle"), 1800);
      return () => window.clearTimeout(e3);
    }, [K]);
    let eh = (e3) => {
      B2(e3), X("idle");
    }, eu = (e3) => {
      E(e3), X("idle");
    }, ep = async () => {
      if ("adding" === K || ed) return;
      let a3 = {
        productId: e2.id,
        finish: er.id,
        size: en.id,
        quantity: O,
        unitPrice: en.price
      };
      X("adding");
      try {
        if (r2 ? await r2(a3) : await new Promise((e3) => window.setTimeout(e3, 650)), !ei.current)
          return;
        H((e3) => e3 + O), X("added"), ea(`${O} ${e2.name} added to bag`);
      } catch {
        if (!ei.current) return;
        X("error"), ea("Could not add to bag. Try again.");
      }
    }, em = "adding" === K ? "Adding" : "added" === K ? "Added to bag" : "error" === K ? "Try again" : `Add to bag \xB7 ${C2.format(en.price * O)}`;
    return (0, t.jsxs)("div", {
      className: T(I().root, b2),
      children: [
        (0, t.jsxs)("div", {
          className: I().scroller,
          children: [
            (0, t.jsxs)("header", {
              className: I().top,
              children: [
                (0, t.jsxs)("nav", {
                  "aria-label": "Breadcrumb",
                  className: I().crumbs,
                  children: [
                    (0, t.jsx)("span", { children: "Shop" }),
                    (0, t.jsx)(_.A, {
                      size: 14,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    (0, t.jsx)("span", { children: e2.collection }),
                    (0, t.jsx)(_.A, {
                      size: 14,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    (0, t.jsx)("span", {
                      "aria-current": "page",
                      children: e2.name
                    })
                  ]
                }),
                (0, t.jsxs)("span", {
                  className: I().bag,
                  role: "img",
                  "aria-label": `${U} items in bag`,
                  children: [
                    (0, t.jsx)(
                      l.PY1.span,
                      {
                        className: I().bagIcon,
                        initial: !z2 && U !== u2 && { scale: 1.2, rotate: -8 },
                        animate: { scale: 1, rotate: 0 },
                        transition: N.T.spring.snappy,
                        children: (0, t.jsx)(w.A, {
                          size: 18,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      },
                      U
                    ),
                    (0, t.jsx)("span", {
                      "aria-hidden": "true",
                      children: (0, t.jsx)(P, { text: String(U) })
                    })
                  ]
                })
              ]
            }),
            (0, t.jsxs)("div", {
              className: I().layout,
              children: [
                (0, t.jsx)("div", {
                  className: I().media,
                  children: (0, t.jsx)(L, { images: er.images, name: e2.name })
                }),
                (0, t.jsxs)("div", {
                  className: I().info,
                  children: [
                    (0, t.jsxs)("div", {
                      className: I().titleBlock,
                      children: [
                        (0, t.jsxs)("div", {
                          className: I().titleRow,
                          children: [
                            (0, t.jsx)("h2", { children: e2.name }),
                            (0, t.jsx)("button", {
                              type: "button",
                              className: I().save,
                              "aria-pressed": Y,
                              "aria-label": Y ? "Remove from saved" : "Save for later",
                              onClick: () => {
                                let e3 = !Y;
                                q(e3), o2?.(e3);
                              },
                              children: (0, t.jsx)(
                                l.PY1.span,
                                {
                                  className: I().saveIcon,
                                  initial: !z2 && !!Y && { scale: 0.5 },
                                  animate: { scale: 1 },
                                  transition: {
                                    type: "spring",
                                    visualDuration: 0.3,
                                    bounce: 0
                                  },
                                  children: (0, t.jsx)(x.A, {
                                    size: 18,
                                    strokeWidth: 1.75
                                  })
                                },
                                String(Y)
                              )
                            })
                          ]
                        }),
                        (0, t.jsxs)("div", {
                          className: I().priceRow,
                          children: [
                            (0, t.jsx)("span", {
                              className: I().price,
                              children: (0, t.jsx)(P, {
                                text: C2.format(en.price)
                              })
                            }),
                            (0, t.jsxs)("a", {
                              className: I().ratingLink,
                              href: `#${A2}-reviews`,
                              children: [
                                (0, t.jsx)(R, { value: e2.rating }),
                                (0, t.jsx)("span", {
                                  children: e2.rating.toFixed(1)
                                }),
                                (0, t.jsxs)("span", {
                                  className: I().muted,
                                  children: ["(", e2.reviewCount, ")"]
                                })
                              ]
                            })
                          ]
                        }),
                        (0, t.jsx)("p", {
                          className: I().summary,
                          children: e2.summary
                        })
                      ]
                    }),
                    (0, t.jsxs)("div", {
                      className: I().option,
                      children: [
                        (0, t.jsxs)("p", {
                          className: I().optionLabel,
                          id: `${A2}-finish`,
                          children: [
                            "Finish ",
                            (0, t.jsx)("span", {
                              className: I().muted,
                              children: er.name
                            })
                          ]
                        }),
                        (0, t.jsx)("div", {
                          className: I().swatches,
                          role: "radiogroup",
                          "aria-labelledby": `${A2}-finish`,
                          onKeyDown: (a3) => D(
                            a3,
                            e2.finishes.map((e3) => e3.id),
                            er.id,
                            eh
                          ),
                          children: e2.finishes.map(
                            (e3) => (0, t.jsx)(
                              "button",
                              {
                                type: "button",
                                role: "radio",
                                "data-radio": e3.id,
                                "aria-checked": e3.id === er.id,
                                tabIndex: e3.id === er.id ? 0 : -1,
                                "aria-label": e3.name,
                                title: e3.name,
                                className: I().swatch,
                                onClick: () => eh(e3.id),
                                children: (0, t.jsx)("span", {
                                  className: I().swatchFill,
                                  style: { background: e3.swatch }
                                })
                              },
                              e3.id
                            )
                          )
                        })
                      ]
                    }),
                    (0, t.jsxs)("div", {
                      className: I().option,
                      children: [
                        (0, t.jsxs)("p", {
                          className: I().optionLabel,
                          id: `${A2}-size`,
                          children: [
                            "Size ",
                            (0, t.jsx)("span", {
                              className: I().muted,
                              children: en.note
                            })
                          ]
                        }),
                        (0, t.jsx)("div", {
                          className: I().sizes,
                          role: "radiogroup",
                          "aria-labelledby": `${A2}-size`,
                          onKeyDown: (a3) => D(
                            a3,
                            e2.sizes.map((e3) => e3.id),
                            en.id,
                            eu
                          ),
                          children: e2.sizes.map((e3) => {
                            let a3 = el(e3);
                            return (0, t.jsxs)(
                              "button",
                              {
                                type: "button",
                                role: "radio",
                                "data-radio": e3.id,
                                "aria-checked": e3.id === en.id,
                                tabIndex: e3.id === en.id ? 0 : -1,
                                className: I().sizeCard,
                                "data-out": a3 || void 0,
                                onClick: () => eu(e3.id),
                                children: [
                                  (0, t.jsx)("span", {
                                    className: I().sizeName,
                                    children: e3.name
                                  }),
                                  (0, t.jsx)("span", {
                                    className: I().sizeMeta,
                                    children: a3 ? "Sold out" : C2.format(e3.price)
                                  })
                                ]
                              },
                              e3.id
                            );
                          })
                        })
                      ]
                    }),
                    (0, t.jsxs)("div", {
                      className: I().buyRow,
                      children: [
                        (0, t.jsxs)("div", {
                          className: I().stepper,
                          role: "group",
                          "aria-label": "Quantity",
                          children: [
                            (0, t.jsx)("button", {
                              type: "button",
                              onClick: () => V((e3) => Math.max(1, e3 - 1)),
                              disabled: O <= 1 || ed,
                              "aria-label": "Decrease quantity",
                              children: (0, t.jsx)(y.A, {
                                size: 15,
                                strokeWidth: 1.75
                              })
                            }),
                            (0, t.jsx)("span", {
                              className: I().qty,
                              "aria-live": "polite",
                              children: (0, t.jsx)(P, { text: String(O) })
                            }),
                            (0, t.jsx)("button", {
                              type: "button",
                              onClick: () => V((e3) => Math.min(p2, e3 + 1)),
                              disabled: O >= p2 || ed,
                              "aria-label": "Increase quantity",
                              children: (0, t.jsx)(j.A, {
                                size: 15,
                                strokeWidth: 1.75
                              })
                            })
                          ]
                        }),
                        ed ? (0, t.jsx)("button", {
                          type: "button",
                          className: I().notify,
                          "data-done": Z.includes(eo) || void 0,
                          onClick: () => {
                            Z.includes(eo) || (Q((e3) => [...e3, eo]), d2?.({
                              productId: e2.id,
                              finish: er.id,
                              size: en.id,
                              unitPrice: en.price
                            }), ea(
                              `We will email you when ${er.name}, ${en.name} is back`
                            ));
                          },
                          children: (0, t.jsx)(c.N, {
                            mode: "popLayout",
                            initial: false,
                            children: (0, t.jsx)(
                              l.PY1.span,
                              {
                                className: I().buttonInner,
                                initial: {
                                  opacity: 0,
                                  y: 6 * !z2,
                                  filter: "blur(2px)"
                                },
                                animate: {
                                  opacity: 1,
                                  y: 0,
                                  filter: "blur(0px)"
                                },
                                exit: {
                                  opacity: 0,
                                  y: z2 ? 0 : -6,
                                  filter: "blur(2px)"
                                },
                                transition: {
                                  duration: N.T.duration.standard,
                                  ease: N.T.ease.enter
                                },
                                children: Z.includes(eo) ? (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    (0, t.jsx)(v.A, {
                                      size: 16,
                                      strokeWidth: 1.75,
                                      "aria-hidden": "true"
                                    }),
                                    "We will email you"
                                  ]
                                }) : (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    (0, t.jsx)(f.A, {
                                      size: 16,
                                      strokeWidth: 1.75,
                                      "aria-hidden": "true"
                                    }),
                                    "Notify me when it is back"
                                  ]
                                })
                              },
                              String(Z.includes(eo))
                            )
                          })
                        }) : (0, t.jsx)("button", {
                          type: "button",
                          className: I().addButton,
                          "data-state": K,
                          "aria-busy": "adding" === K,
                          onClick: ep,
                          children: (0, t.jsx)(c.N, {
                            mode: "popLayout",
                            initial: false,
                            children: (0, t.jsxs)(
                              l.PY1.span,
                              {
                                className: I().buttonInner,
                                initial: {
                                  opacity: 0,
                                  y: 6 * !z2,
                                  filter: "blur(2px)"
                                },
                                animate: {
                                  opacity: 1,
                                  y: 0,
                                  filter: "blur(0px)"
                                },
                                exit: {
                                  opacity: 0,
                                  y: z2 ? 0 : -6,
                                  filter: "blur(2px)"
                                },
                                transition: {
                                  duration: "idle" === K ? N.T.duration.fast : N.T.duration.standard,
                                  ease: N.T.ease.enter
                                },
                                children: [
                                  "adding" === K ? (0, t.jsx)("span", {
                                    className: I().spinner,
                                    "aria-hidden": "true"
                                  }) : "added" === K ? (0, t.jsx)(v.A, {
                                    size: 16,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  }) : null,
                                  em
                                ]
                              },
                              "idle" === K ? `idle-${em}` : K
                            )
                          })
                        })
                      ]
                    }),
                    (0, t.jsx)("ul", {
                      className: I().shipping,
                      children: e2.shipping.map((e3, a3) => {
                        let i3 = W[a3 % W.length];
                        return (0, t.jsxs)(
                          "li",
                          {
                            children: [
                              (0, t.jsx)(i3, {
                                size: 18,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              (0, t.jsxs)("span", {
                                children: [
                                  (0, t.jsx)("strong", { children: e3.title }),
                                  (0, t.jsx)("span", {
                                    className: I().muted,
                                    children: e3.text
                                  })
                                ]
                              })
                            ]
                          },
                          e3.title
                        );
                      })
                    }),
                    (0, t.jsxs)("section", {
                      className: I().reviews,
                      id: `${A2}-reviews`,
                      "aria-label": "Reviews summary",
                      children: [
                        (0, t.jsxs)("div", {
                          className: I().score,
                          children: [
                            (0, t.jsx)("span", {
                              className: I().scoreValue,
                              children: e2.rating.toFixed(1)
                            }),
                            (0, t.jsx)(R, { value: e2.rating, size: 16 }),
                            (0, t.jsxs)("span", {
                              className: I().muted,
                              children: [e2.reviewCount, " reviews"]
                            })
                          ]
                        }),
                        (0, t.jsx)("ul", {
                          ref: et,
                          className: I().bars,
                          children: e2.distribution.map(
                            (e3, a3) => (0, t.jsxs)(
                              "li",
                              {
                                "aria-label": `${5 - a3} stars: ${e3} reviews`,
                                children: [
                                  (0, t.jsx)("span", {
                                    className: I().barLabel,
                                    "aria-hidden": "true",
                                    children: 5 - a3
                                  }),
                                  (0, t.jsx)("span", {
                                    className: I().bar,
                                    "aria-hidden": "true",
                                    children: (0, t.jsx)(l.PY1.span, {
                                      className: I().barFill,
                                      initial: false,
                                      animate: { scaleX: es || z2 ? e3 / ec : 0 },
                                      transition: z2 ? { duration: 0 } : {
                                        ...N.T.spring.smooth,
                                        delay: 0.05 * a3
                                      }
                                    })
                                  }),
                                  (0, t.jsx)("span", {
                                    className: I().barCount,
                                    "aria-hidden": "true",
                                    children: e3
                                  })
                                ]
                              },
                              a3
                            )
                          )
                        })
                      ]
                    }),
                    (0, t.jsx)("div", {
                      className: I().accordion,
                      children: e2.sections.map((e3) => {
                        let a3 = J.includes(e3.id);
                        return (0, t.jsxs)(
                          "div",
                          {
                            className: I().section,
                            children: [
                              (0, t.jsx)("h3", {
                                children: (0, t.jsxs)("button", {
                                  type: "button",
                                  className: I().sectionButton,
                                  "aria-expanded": a3,
                                  "aria-controls": `${A2}-${e3.id}`,
                                  onClick: () => {
                                    let a4;
                                    return a4 = e3.id, G(
                                      (e4) => e4.includes(a4) ? e4.filter((e5) => e5 !== a4) : [...e4, a4]
                                    );
                                  },
                                  children: [
                                    e3.title,
                                    (0, t.jsx)(k.A, {
                                      size: 16,
                                      strokeWidth: 1.75,
                                      "aria-hidden": "true",
                                      className: I().sectionChevron,
                                      "data-open": a3 || void 0
                                    })
                                  ]
                                })
                              }),
                              (0, t.jsx)(c.N, {
                                initial: false,
                                children: a3 ? (0, t.jsx)(
                                  l.PY1.div,
                                  {
                                    id: `${A2}-${e3.id}`,
                                    className: I().sectionBody,
                                    initial: { height: 0, opacity: 0 },
                                    animate: { height: "auto", opacity: 1 },
                                    exit: { height: 0, opacity: 0 },
                                    transition: z2 ? { duration: 0 } : {
                                      height: N.T.spring.smooth,
                                      opacity: {
                                        duration: N.T.duration.fast
                                      }
                                    },
                                    children: (0, t.jsx)("div", {
                                      className: I().sectionText,
                                      children: e3.body.map(
                                        (e4) => (0, t.jsx)("p", { children: e4 }, e4)
                                      )
                                    })
                                  },
                                  "body"
                                ) : null
                              })
                            ]
                          },
                          e3.id
                        );
                      })
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, t.jsx)("p", {
          className: I().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ee
        })
      ]
    });
  }
  let B = $;
}

__m(__module,__exports,__require);
});
A.reg(50981, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "shield-check",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
          key: "oel41y"
        }
      ],
      ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(54757, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => s });
  var i = t(51811);
  let n = {
    name: "heart",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
          key: "mvr1a0"
        }
      ]
    ]
  };
  n.node;
  let s = (0, i.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(66600, ".root{container-type:inline-size;container-name:pdp;position:relative;display:grid;grid-template-rows:minmax(0,1fr);width:100%;height:820px;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body);isolation:isolate}\n.root :where(h2,h3,p,ul){margin:0}\n.root :where(ul){padding:0;list-style:none}\n.root :where(button){font:inherit;letter-spacing:inherit;color:inherit;-webkit-tap-highlight-color:transparent}\n.root :focus{outline:none}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.muted{color:var(--text-muted);font-weight:400}\n.roll{display:inline-flex;font-variant-numeric:tabular-nums}\n.rollChars{display:inline-flex}\n.rollDigit{position:relative;display:inline-block;height:1.4em;overflow:hidden;line-height:1.4em}\n.rollStrip{display:flex;flex-direction:column}\n.rollStrip span{display:block;height:1.4em}\n.scroller{min-height:0;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}\n.top{display:flex;align-items:center;justify-content:space-between;gap:var(--space-3);padding:var(--space-4) var(--space-8)}\n@container pdp (min-width: 680px) and (max-width: 979px){.top{padding:var(--space-4) var(--space-6)}\n@container pdp (max-width: 679px){.top{padding:var(--space-4) var(--space-4) var(--space-2)}\n.crumbs{display:flex;align-items:center;gap:6px;min-width:0;color:var(--text-muted);white-space:nowrap}\n.crumbs span:last-child{overflow:hidden;color:var(--foreground);text-overflow:ellipsis}\n.crumbs span:not(:last-child),.crumbs svg{display:none}\n.crumbs span:last-child{color:var(--text-muted)}\n.bag{display:inline-flex;flex:none;align-items:center;gap:6px;height:var(--control-height-sm);padding:0 var(--space-3);border-radius:var(--radius-pill);background:var(--surface-muted);font-weight:500}\n.bagIcon{display:grid}\n.layout{display:grid;grid-template-columns:minmax(0,1.12fr) minmax(320px,1fr);gap:var(--space-12);align-items:start;padding:var(--space-2) var(--space-8) var(--space-12)}\n.layout{grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:var(--space-8);padding:var(--space-2) var(--space-6) var(--space-10)}\n.layout{grid-template-columns:minmax(0,1fr);gap:var(--space-6);padding:0 var(--space-4) var(--space-10)}\n.media{position:sticky;top:var(--space-4);min-width:0}\n.media{position:static}\n.gallery{display:grid;gap:var(--space-3)}\n.viewport{position:relative;aspect-ratio:4/5;overflow:hidden;border-radius:var(--radius-panel);background:var(--surface-muted);touch-action:pan-y;cursor:grab}\n.viewport:active{cursor:grabbing}\n@media (hover:hover) and (pointer:fine){.viewport:hover .arrow{opacity:1}\n.viewport{aspect-ratio:1;border-radius:var(--radius-panel)}\n.track{display:flex;height:100%;will-change:transform}\n.slide{position:relative;flex:0 0 100%;height:100%}\n.slideImage{position:absolute;inset:0}\n.slideImage img{object-fit:cover;user-select:none;-webkit-user-drag:none}\n.arrow{position:absolute;top:50%;display:grid;place-items:center;width:40px;height:40px;margin-top:-20px;border:0;border-radius:var(--radius-pill);background:oklch(100% 0 0/.78);color:#1c1b19!important;box-shadow:0 4px 14px oklch(0 0 0/.12);-webkit-backdrop-filter:blur(14px) saturate(160%);backdrop-filter:blur(14px) saturate(160%);cursor:pointer;opacity:0;transition:opacity var(--duration-fast) ease,transform var(--duration-fast) var(--ease-standard)}\n.arrow:active{transform:scale(.94)}\n.arrow:disabled{opacity:0!important;pointer-events:none}\n@media (prefers-reduced-motion:reduce){.arrow,.sectionChevron,.swatch:after{transition-property:opacity}\n.arrowPrev{left:14px}\n.arrowNext{right:14px}\n.counter{position:absolute;right:14px;bottom:14px;display:inline-flex;gap:3px;padding:2px 10px;border-radius:var(--radius-pill);background:oklch(0 0 0/.42);color:#fff;font-size:var(--text-xs);font-weight:500;font-variant-numeric:tabular-nums;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}\n.thumbs{display:grid;grid-template-columns:repeat(auto-fill,minmax(64px,1fr));gap:var(--space-2)}\n.thumbs{grid-template-columns:repeat(4,minmax(0,1fr))}\n.thumb{position:relative;aspect-ratio:1;padding:0;overflow:visible;border:0;border-radius:14px;background:var(--surface-muted);cursor:pointer;transition:transform var(--duration-fast) var(--ease-standard)}\n.thumb:active{transform:scale(.96)}\n.thumb:not([aria-current]) .thumbImage{filter:saturate(.8);opacity:.72;transition:opacity var(--duration-fast) ease}\n@media (hover:hover) and (pointer:fine){.thumb:hover .thumbImage{opacity:1}\n.thumbImage{position:absolute;inset:0;overflow:hidden;border-radius:inherit;opacity:1}\n.thumbImage img{object-fit:cover}\n.thumbRing{position:absolute;inset:-3px;border-radius:17px;box-shadow:0 0 0 1.5px var(--foreground);pointer-events:none}\n.info{display:grid;gap:var(--space-6);min-width:0}\n.titleBlock{display:grid;gap:var(--space-3)}\n.titleRow{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--space-3)}\n.titleRow h2{font-family:var(--font-display);font-size:var(--text-3xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display)}\n.titleRow h2{font-size:var(--text-2xl)}\n.save{display:grid;flex:none;place-items:center;width:40px;height:40px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);color:var(--text-secondary);cursor:pointer;transition:color var(--duration-fast) ease,border-color var(--duration-fast) ease}\n.save[aria-pressed=true]{color:var(--danger)}\n.save[aria-pressed=true] svg{fill:currentColor}\n@media (hover:hover) and (pointer:fine){.save:hover{border-color:var(--border-strong)}\n.saveIcon{display:grid}\n.priceRow{display:flex;flex-wrap:wrap;align-items:center;gap:var(--space-4)}\n.price{font-size:var(--text-xl);font-weight:500;letter-spacing:var(--tracking-body)}\n.ratingLink{display:inline-flex;align-items:center;gap:6px;color:inherit;text-decoration:none}\n@media (hover:hover) and (pointer:fine){.ratingLink:hover span:last-child{color:var(--foreground)}\n.summary{max-width:46ch;color:var(--text-secondary)}\n.stars{position:relative;display:inline-flex;color:var(--border-strong)}\n.starsBase,.starsFill{display:inline-flex;gap:1px}\n.starsFill{position:absolute;top:0;left:0;overflow:hidden;color:var(--foreground);white-space:nowrap}\n.starsFill svg{flex:none;fill:currentColor}\n.option{display:grid;gap:var(--space-3)}\n.optionLabel{display:flex;gap:var(--space-2);font-weight:500}\n.swatches{display:flex;gap:var(--space-2)}\n.swatch{position:relative;width:36px;height:36px;padding:0;border:0;border-radius:var(--radius-pill);background:none;cursor:pointer;transition:transform var(--duration-fast) var(--ease-standard)}\n.swatch:active{transform:scale(.92)}\n.swatch:after{position:absolute;inset:0;border-radius:inherit;box-shadow:0 0 0 1.5px var(--foreground);opacity:0;transform:scale(.88);content:\"\";transition:opacity var(--duration-fast) ease,transform var(--duration-spring) var(--ease-spring)}\n.swatch[aria-checked=true]:after{opacity:1;transform:none}\n.swatchFill{position:absolute;inset:4px;border-radius:inherit;box-shadow:inset 0 0 0 1px oklch(0 0 0/.12)}\n.sizes{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:var(--space-2)}\n.sizeCard{display:grid;gap:2px;padding:var(--space-3) var(--space-4);border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);text-align:left;cursor:pointer;transition:border-color var(--duration-fast) ease,background-color var(--duration-fast) ease,transform var(--duration-fast) var(--ease-standard)}\n.sizeCard:active{transform:scale(.98)}\n.sizeCard[aria-checked=true]{border-color:var(--foreground);box-shadow:inset 0 0 0 .5px var(--foreground)}\n.sizeCard[data-out] .sizeName{color:var(--text-muted);text-decoration:line-through}\n@media (hover:hover) and (pointer:fine){.sizeCard:not([aria-checked=true]):hover{border-color:var(--border-strong)}\n.sizeName{font-weight:500}\n.sizeMeta{color:var(--text-muted);font-variant-numeric:tabular-nums}\n.buyRow{display:grid;grid-template-columns:auto minmax(0,1fr);gap:var(--space-2)}\n.stepper{display:flex;align-items:center;height:var(--control-height-lg);padding:0 4px;border:1px solid var(--border);border-radius:var(--radius-pill)}\n.stepper button{display:grid;place-items:center;width:38px;height:38px;padding:0;border:0;border-radius:var(--radius-pill);background:none;cursor:pointer;transition:background-color var(--duration-fast) ease,transform var(--duration-fast) var(--ease-standard)}\n.stepper button:active:not(:disabled){transform:scale(.92);background:var(--surface-muted)}\n.stepper button:disabled{color:var(--text-muted);cursor:default}\n@media (hover:hover) and (pointer:fine){.stepper button:hover:not(:disabled){background:var(--surface-muted)}\n.qty{display:inline-flex;justify-content:center;min-width:24px;font-weight:500}\n.addButton,.notify{position:relative;display:grid;height:var(--control-height-lg);overflow:hidden;border:0;border-radius:var(--radius-pill);background:var(--accent);color:var(--accent-foreground)!important;font-weight:500;cursor:pointer;transition:transform var(--duration-fast) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard),border-color var(--duration-standard) var(--ease-standard),color var(--duration-standard) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.addButton[data-state=idle]:hover{background:var(--accent-strong)}\n.addButton:active,.notify:active{transform:scale(.98)}\n.addButton[data-state=added]{background:var(--success);color:var(--background)!important}\n.addButton[data-state=error]{border:1px solid var(--danger);background:var(--surface);color:var(--danger)!important}\n.addButton[data-state=adding]{cursor:progress}\n.notify{border:1px solid var(--border-strong);background:var(--surface);color:var(--foreground)!important}\n.notify[data-done]{border-color:var(--border);color:var(--success)!important;cursor:default}\n.buttonInner{display:inline-flex;grid-area:1/1;align-items:center;justify-content:center;gap:var(--space-2);white-space:nowrap}\n.spinner{width:15px;height:15px;border:2px solid;border-right:2px solid transparent;border-radius:var(--radius-pill);animation:spin .64s linear infinite}\n.spinner{animation-duration:1.6s}\n.shipping{display:grid;gap:var(--space-3);padding:var(--space-4) 0;border-top:1px solid var(--border-subtle);border-bottom:1px solid var(--border-subtle)}\n.shipping li{display:flex;align-items:flex-start;gap:var(--space-3)}\n.shipping li>svg{flex:none;margin-top:1px;color:var(--text-secondary)}\n.shipping li>span{display:flex;flex-wrap:wrap;column-gap:var(--space-2)}\n.shipping strong{font-weight:500}\n.reviews{display:grid;grid-template-columns:auto minmax(0,1fr);gap:var(--space-8);align-items:center;scroll-margin-top:var(--space-6)}\n.reviews{grid-template-columns:minmax(0,1fr);gap:var(--space-4)}\n@container pdp (max-width: 420px){.reviews{grid-template-columns:minmax(0,1fr);gap:var(--space-4)}\n.score{display:grid;justify-items:start;gap:4px}\n.score{grid-template-columns:auto auto;align-items:center;column-gap:var(--space-3)}\n.score>:last-child{grid-column:1/-1}\n.scoreValue{font-family:var(--font-display);font-size:var(--text-4xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display)}\n.bars{display:grid;gap:6px}\n.bars li{display:grid;grid-template-columns:12px minmax(0,1fr) 28px;align-items:center;gap:var(--space-3);color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.bar{position:relative;height:6px;overflow:hidden;border-radius:var(--radius-pill);background:var(--surface-muted)}\n.barFill{position:absolute;inset:0;border-radius:inherit;background:var(--foreground);transform-origin:left center}\n.barCount{text-align:right}\n.accordion{display:grid;border-top:1px solid var(--border-subtle)}\n.section{border-bottom:1px solid var(--border-subtle)}\n.section h3{font-size:inherit;font-weight:inherit}\n.sectionButton{display:flex;align-items:center;justify-content:space-between;width:100%;height:52px;padding:0;border:0;background:none;font-weight:500;text-align:left;cursor:pointer}\n.sectionChevron{color:var(--text-muted);transition:transform var(--duration-standard) var(--ease-standard)}\n.sectionChevron[data-open]{transform:rotate(180deg)}\n.sectionBody{overflow:hidden}\n.sectionText{display:grid;gap:var(--space-2);max-width:52ch;padding-bottom:var(--space-4);color:var(--text-secondary)}", {"root":"root","srOnly":"srOnly","muted":"muted","roll":"roll","rollChars":"rollChars","rollDigit":"rollDigit","rollStrip":"rollStrip","scroller":"scroller","top":"top","crumbs":"crumbs","bag":"bag","bagIcon":"bagIcon","layout":"layout","media":"media","gallery":"gallery","viewport":"viewport","arrow":"arrow","track":"track","slide":"slide","slideImage":"slideImage","sectionChevron":"sectionChevron","swatch":"swatch","arrowPrev":"arrowPrev","arrowNext":"arrowNext","counter":"counter","thumbs":"thumbs","thumb":"thumb","thumbImage":"thumbImage","thumbRing":"thumbRing","info":"info","titleBlock":"titleBlock","titleRow":"titleRow","save":"save","saveIcon":"saveIcon","priceRow":"priceRow","price":"price","ratingLink":"ratingLink","summary":"summary","stars":"stars","starsBase":"starsBase","starsFill":"starsFill","option":"option","optionLabel":"optionLabel","swatches":"swatches","swatchFill":"swatchFill","sizes":"sizes","sizeCard":"sizeCard","sizeName":"sizeName","sizeMeta":"sizeMeta","buyRow":"buyRow","stepper":"stepper","qty":"qty","addButton":"addButton","notify":"notify","buttonInner":"buttonInner","spinner":"spinner","shipping":"shipping","reviews":"reviews","score":"score","scoreValue":"scoreValue","bars":"bars","bar":"bar","barFill":"barFill","barCount":"barCount","accordion":"accordion","section":"section","sectionButton":"sectionButton","sectionBody":"sectionBody","sectionText":"sectionText"});
A.reg(93089, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let o = {
    name: "package",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
          key: "1a0edw"
        }
      ],
      ["path", { d: "M12 22V12", key: "d0xqtd" }],
      ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
      ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
    ]
  };
  o.node;
  let i = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(95697, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => i });
  var n = a(51811);
  let r = {
    name: "star",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
          key: "r04s7s"
        }
      ]
    ]
  };
  r.node;
  let i = (0, n.A)(r);
}

__m(__module,__exports,__require);
});
A.cssFor("product-detail", [66600]);
A.item("product-detail", {entry:43968, export:"ProductDetail", kind:"block", tier:"pro", unresolved:[]});
})();