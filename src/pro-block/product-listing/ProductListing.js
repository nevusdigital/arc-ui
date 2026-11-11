function(__module,__exports,__require){
"use strict";
function __m(e, a, i) {
  "use strict";
  i.r(a), i.d(a, { ProductListing: () => M, default: () => T });
  var t = i(95155), s = i(12115), l = i(5772), r = i(18310), n = i(25354), o = i(80642), d = i(57700), c = i(12363), h = i(64577), p = i(80846), u = i(16720), m = i(9005), g = i(2125), _ = i(7770), b = i(67752);
  let w = [
    { id: "oat", name: "Oat", swatch: "#d8cbb3" },
    { id: "clay", name: "Clay", swatch: "#b56a4c" },
    { id: "sage", name: "Sage", swatch: "#98a58a" },
    { id: "charcoal", name: "Charcoal", swatch: "#3b3a38" },
    { id: "chalk", name: "Chalk", swatch: "#f1eee7" }
  ], x = ["S", "M", "L"], f = (e2) => (0, b.jW)(e2).src, j = [
    {
      id: "p-lounge",
      name: "Woven lounge chair",
      detail: "Oak and paper cord",
      price: 340,
      image: f("lounge-chair"),
      hoverImage: f("living-room"),
      alt: (0, b.jW)("lounge-chair").alt,
      colors: ["oat", "charcoal"],
      sizes: ["M"],
      inStock: true,
      added: 9,
      rank: 1
    },
    {
      id: "p-lamp",
      name: "Dome table lamp",
      detail: "Opal glass",
      price: 128,
      image: f("table-lamp"),
      hoverImage: f("home-office"),
      alt: (0, b.jW)("table-lamp").alt,
      colors: ["chalk", "oat"],
      sizes: ["S", "M"],
      inStock: true,
      added: 6,
      rank: 2
    },
    {
      id: "p-throw",
      name: "Fringed linen throw",
      detail: "Stonewashed linen",
      price: 89,
      compareAt: 110,
      image: f("linen-throw"),
      hoverImage: f("bedroom"),
      alt: (0, b.jW)("linen-throw").alt,
      colors: ["oat", "sage", "clay"],
      sizes: ["S", "M", "L"],
      inStock: true,
      added: 4,
      rank: 3
    },
    {
      id: "p-carafe",
      name: "Ribbed carafe set",
      detail: "Mouth blown glass",
      price: 64,
      image: f("glass-carafe"),
      hoverImage: f("sunroom"),
      alt: (0, b.jW)("glass-carafe").alt,
      colors: ["chalk"],
      sizes: ["M"],
      inStock: true,
      added: 8,
      rank: 4
    },
    {
      id: "p-cups",
      name: "Speckled cups, pair",
      detail: "Glazed stoneware",
      price: 42,
      image: f("stoneware-cups"),
      hoverImage: f("stacked-bowls"),
      alt: (0, b.jW)("stoneware-cups").alt,
      colors: ["chalk", "clay"],
      sizes: ["S", "M"],
      inStock: false,
      added: 7,
      rank: 5
    },
    {
      id: "p-bowls",
      name: "Stacking bowls",
      detail: "Glazed stoneware",
      price: 56,
      image: f("stacked-bowls"),
      hoverImage: f("stoneware-cups"),
      alt: (0, b.jW)("stacked-bowls").alt,
      colors: ["charcoal", "chalk"],
      sizes: ["S", "M", "L"],
      inStock: true,
      added: 3,
      rank: 6
    },
    {
      id: "p-ceramic",
      name: "Arch ceramic lamp",
      detail: "Linen shade",
      price: 210,
      image: f("ceramic-lamp"),
      hoverImage: f("living-room"),
      alt: (0, b.jW)("ceramic-lamp").alt,
      colors: ["clay", "oat"],
      sizes: ["M", "L"],
      inStock: true,
      added: 10,
      rank: 7
    },
    {
      id: "p-reader",
      name: "Reading armchair",
      detail: "Boucle and ash",
      price: 390,
      compareAt: 460,
      image: f("reading-chair"),
      hoverImage: f("home-office"),
      alt: (0, b.jW)("reading-chair").alt,
      colors: ["charcoal", "sage"],
      sizes: ["M", "L"],
      inStock: true,
      added: 2,
      rank: 8
    }
  ];
  var k = i(21960), v = i.n(k);
  let y = [
    { id: "featured", label: "Featured" },
    { id: "newest", label: "Newest" },
    { id: "price-asc", label: "Price, low to high" },
    { id: "price-desc", label: "Price, high to low" }
  ], N = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  function S({ text: e2 }) {
    let a2 = (0, r.I)(), i2 = Array.from(e2);
    return (0, t.jsxs)("span", {
      className: v().roll,
      children: [
        (0, t.jsx)("span", {
          "aria-hidden": "true",
          className: v().rollChars,
          children: i2.map((e3, s2) => {
            let l2 = i2.length - s2;
            return /\d/.test(e3) ? (0, t.jsx)(
              "span",
              {
                className: v().rollDigit,
                children: (0, t.jsx)(n.PY1.span, {
                  className: v().rollStrip,
                  initial: false,
                  animate: { y: `${-10 * Number(e3)}%` },
                  transition: a2 ? { duration: 0 } : _.T.spring.snappy,
                  children: N.map(
                    (e4) => (0, t.jsx)("span", { children: e4 }, e4)
                  )
                })
              },
              l2
            ) : (0, t.jsx)("span", { children: e3 }, `s${l2}`);
          })
        }),
        (0, t.jsx)("span", { className: v().srOnly, children: e2 })
      ]
    });
  }
  function C({ value: e2, onChange: a2 }) {
    let i2 = (0, s.useId)(), l2 = (0, r.I)(), [d2, p2] = (0, s.useState)(false), [u2, m2] = (0, s.useState)(0), g2 = (0, s.useRef)(null), b2 = (0, s.useRef)(null), w2 = (0, s.useRef)(null), x2 = y.find((a3) => a3.id === e2) ?? y[0];
    (0, s.useEffect)(() => {
      if (!d2) return;
      b2.current?.focus({ preventScroll: true });
      let e3 = (e4) => {
        w2.current?.contains(e4.target) || p2(false);
      };
      return document.addEventListener("pointerdown", e3), () => document.removeEventListener("pointerdown", e3);
    }, [d2]);
    let f2 = () => {
      m2(
        Math.max(
          0,
          y.findIndex((a3) => a3.id === e2)
        )
      ), p2(true);
    }, j2 = (e3) => {
      a2(e3), p2(false), g2.current?.focus({ preventScroll: true });
    };
    return (0, t.jsxs)("div", {
      ref: w2,
      className: v().sort,
      children: [
        (0, t.jsxs)("button", {
          ref: g2,
          type: "button",
          className: v().sortButton,
          "aria-haspopup": "listbox",
          "aria-expanded": d2,
          "aria-controls": `${i2}-list`,
          onClick: () => d2 ? p2(false) : f2(),
          onKeyDown: (e3) => {
            ("ArrowDown" === e3.key || "ArrowUp" === e3.key) && (e3.preventDefault(), f2());
          },
          children: [
            (0, t.jsx)("span", { className: v().sortLabel, children: "Sort" }),
            (0, t.jsx)("span", { children: x2.label }),
            (0, t.jsx)(c.A, {
              size: 15,
              strokeWidth: 1.75,
              "aria-hidden": "true",
              className: v().chevron,
              "data-open": d2 || void 0
            })
          ]
        }),
        (0, t.jsx)(o.N, {
          children: d2 ? (0, t.jsx)(n.PY1.ul, {
            ref: b2,
            id: `${i2}-list`,
            role: "listbox",
            "aria-label": "Sort products",
            tabIndex: -1,
            className: v().sortMenu,
            "aria-activedescendant": `${i2}-${y[u2].id}`,
            onKeyDown: (e3) => {
              "ArrowDown" === e3.key ? (e3.preventDefault(), m2((e4) => Math.min(y.length - 1, e4 + 1))) : "ArrowUp" === e3.key ? (e3.preventDefault(), m2((e4) => Math.max(0, e4 - 1))) : "Home" === e3.key ? (e3.preventDefault(), m2(0)) : "End" === e3.key ? (e3.preventDefault(), m2(y.length - 1)) : "Enter" === e3.key || " " === e3.key ? (e3.preventDefault(), j2(y[u2].id)) : "Escape" === e3.key ? (e3.preventDefault(), p2(false), g2.current?.focus({ preventScroll: true })) : "Tab" === e3.key && p2(false);
            },
            initial: { opacity: 0, scale: l2 ? 1 : 0.96, y: l2 ? 0 : -4 },
            animate: { opacity: 1, scale: 1, y: 0 },
            exit: {
              opacity: 0,
              scale: l2 ? 1 : 0.98,
              transition: { duration: _.T.duration.exit }
            },
            transition: {
              duration: _.T.duration.fast,
              ease: _.T.ease.enter
            },
            children: y.map(
              (a3, s2) => (0, t.jsxs)(
                "li",
                {
                  id: `${i2}-${a3.id}`,
                  role: "option",
                  "aria-selected": a3.id === e2,
                  "data-active": s2 === u2 || void 0,
                  className: v().sortOption,
                  onPointerMove: () => m2(s2),
                  onClick: () => j2(a3.id),
                  children: [
                    (0, t.jsx)("span", { children: a3.label }),
                    a3.id === e2 ? (0, t.jsx)(h.A, {
                      size: 15,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }) : null
                  ]
                },
                a3.id
              )
            )
          }) : null
        })
      ]
    });
  }
  function A({ min: e2, max: a2, value: i2, onChange: s2, format: l2 }) {
    let [r2, n2] = i2, o2 = Math.max(1, a2 - e2), d2 = (a3) => (a3 - e2) / o2 * 100;
    return (0, t.jsxs)("div", {
      className: v().price,
      children: [
        (0, t.jsxs)("div", {
          className: v().range,
          children: [
            (0, t.jsx)("div", {
              className: v().rangeTrack,
              children: (0, t.jsx)("span", {
                className: v().rangeFill,
                style: { left: `${d2(r2)}%`, right: `${100 - d2(n2)}%` }
              })
            }),
            (0, t.jsx)("input", {
              type: "range",
              min: e2,
              max: a2,
              step: 10,
              value: r2,
              "aria-label": "Minimum price",
              "aria-valuetext": l2(r2),
              onChange: (e3) => s2([Math.min(Number(e3.target.value), n2 - 10), n2])
            }),
            (0, t.jsx)("input", {
              type: "range",
              min: e2,
              max: a2,
              step: 10,
              value: n2,
              "aria-label": "Maximum price",
              "aria-valuetext": l2(n2),
              onChange: (e3) => s2([r2, Math.max(Number(e3.target.value), r2 + 10)])
            })
          ]
        }),
        (0, t.jsxs)("div", {
          className: v().priceValues,
          children: [
            (0, t.jsx)(S, { text: l2(r2) }),
            (0, t.jsx)(S, { text: l2(n2) })
          ]
        })
      ]
    });
  }
  function z({ title: e2, children: a2, action: i2 }) {
    return (0, t.jsxs)("fieldset", {
      className: v().group,
      children: [
        (0, t.jsxs)("legend", { className: v().groupTitle, children: [e2, i2] }),
        a2
      ]
    });
  }
  function M({
    products: e2 = j,
    colors: a2 = w,
    sizes: i2 = x,
    defaultSort: c2 = "featured",
    onAddToCart: b2,
    defaultCartCount: f2 = 0,
    currency: k2 = "USD",
    locale: y2 = "en-US",
    title: N2 = "Home goods",
    className: T2
  }) {
    let I = (0, s.useId)(), P = (0, r.I)() ?? false, D = (0, s.useMemo)(
      () => new Intl.NumberFormat(y2, {
        style: "currency",
        currency: k2,
        maximumFractionDigits: 0
      }),
      [y2, k2]
    ), q = (0, s.useMemo)(() => {
      let a3 = e2.map((e3) => e3.price);
      return a3.length ? [
        10 * Math.floor(Math.min(...a3) / 10),
        10 * Math.ceil(Math.max(...a3) / 10)
      ] : [0, 100];
    }, [e2]), [W, F] = (0, s.useState)(c2), [R, L] = (0, s.useState)(q), [B, O] = (0, s.useState)([]), [$, E] = (0, s.useState)([]), [H, K] = (0, s.useState)(false), [Y, V] = (0, s.useState)(f2), [G, J] = (0, s.useState)(null), [U, Z] = (0, s.useState)(null), [Q, X] = (0, s.useState)(""), [ee, ea] = (0, s.useState)(false), ei = (0, s.useRef)(null), et = (0, s.useRef)(null);
    (0, s.useEffect)(() => {
      if (!U) return;
      let e3 = window.setTimeout(() => Z(null), 1400);
      return () => window.clearTimeout(e3);
    }, [U]), (0, s.useEffect)(() => {
      ee && et.current?.focus({ preventScroll: true });
    }, [ee]);
    let es = (0, s.useMemo)(
      () => [
        ...e2.filter(
          (e3) => e3.price >= R[0] && e3.price <= R[1] && (!B.length || e3.colors.some((e4) => B.includes(e4))) && (!$.length || e3.sizes.some((e4) => $.includes(e4))) && (!H || e3.inStock)
        )
      ].sort(
        {
          featured: (e3, a3) => e3.rank - a3.rank,
          newest: (e3, a3) => a3.added - e3.added,
          "price-asc": (e3, a3) => e3.price - a3.price,
          "price-desc": (e3, a3) => a3.price - e3.price
        }[W]
      ),
      [e2, R, B, $, H, W]
    ), el = B.length + $.length + +!!H + +(R[0] !== q[0] || R[1] !== q[1]), er = () => {
      L(q), O([]), E([]), K(false);
    }, en = (e3, a3, i3) => a3(e3.includes(i3) ? e3.filter((e4) => e4 !== i3) : [...e3, i3]), eo = (0, s.useCallback)(() => {
      ea(false), ei.current?.focus({ preventScroll: true });
    }, []), ed = (e3, a3) => {
      V((e4) => e4 + 1), J(null), Z(e3.id), X(
        `${e3.name}${e3.sizes.length > 1 ? `, size ${a3},` : ""} added to bag`
      ), b2?.(e3, a3);
    }, ec = (0, t.jsxs)("div", {
      className: v().filterBody,
      children: [
        (0, t.jsx)(z, {
          title: "Price",
          children: (0, t.jsx)(A, {
            min: q[0],
            max: q[1],
            value: R,
            onChange: L,
            format: (e3) => D.format(e3)
          })
        }),
        (0, t.jsx)(z, {
          title: "Color",
          children: (0, t.jsx)("div", {
            className: v().swatches,
            children: a2.map((e3) => {
              let a3 = B.includes(e3.id);
              return (0, t.jsxs)(
                "button",
                {
                  type: "button",
                  className: v().swatch,
                  "aria-pressed": a3,
                  "aria-label": e3.name,
                  title: e3.name,
                  onClick: () => en(B, O, e3.id),
                  children: [
                    (0, t.jsx)("span", {
                      className: v().swatchFill,
                      style: { background: e3.swatch }
                    }),
                    (0, t.jsx)("span", {
                      className: v().swatchCheck,
                      "data-on": a3 || void 0,
                      "data-light": (function(e4) {
                        let a4 = e4.replace("#", ""), [i3, t2, s2] = [0, 2, 4].map(
                          (e5) => parseInt(a4.slice(e5, e5 + 2), 16)
                        );
                        return (299 * i3 + 587 * t2 + 114 * s2) / 1e3 > 150;
                      })(e3.swatch) || void 0,
                      children: (0, t.jsx)(h.A, {
                        size: 14,
                        strokeWidth: 2.25,
                        "aria-hidden": "true"
                      })
                    })
                  ]
                },
                e3.id
              );
            })
          })
        }),
        (0, t.jsx)(z, {
          title: "Size",
          children: (0, t.jsx)("div", {
            className: v().sizes,
            children: i2.map(
              (e3) => (0, t.jsx)(
                "button",
                {
                  type: "button",
                  className: v().sizeChip,
                  "aria-pressed": $.includes(e3),
                  onClick: () => en($, E, e3),
                  children: e3
                },
                e3
              )
            )
          })
        }),
        (0, t.jsxs)("label", {
          className: v().switchRow,
          children: [
            (0, t.jsx)("span", { children: "In stock only" }),
            (0, t.jsx)("button", {
              type: "button",
              role: "switch",
              "aria-checked": H,
              className: v().switch,
              onClick: () => K((e3) => !e3),
              children: (0, t.jsx)("span", { className: v().thumb })
            })
          ]
        }),
        (0, t.jsx)("button", {
          type: "button",
          className: v().clearAll,
          onClick: er,
          disabled: !el,
          children: "Clear filters"
        })
      ]
    });
    return (0, t.jsxs)("div", {
      className: ((...e3) => e3.filter(Boolean).join(" "))(v().root, T2),
      children: [
        (0, t.jsxs)("div", {
          className: v().frame,
          children: [
            (0, t.jsxs)("header", {
              className: v().top,
              children: [
                (0, t.jsxs)("div", {
                  className: v().heading,
                  children: [
                    (0, t.jsx)("h2", { children: N2 }),
                    (0, t.jsxs)("span", {
                      className: v().count,
                      children: [
                        (0, t.jsx)(S, { text: String(es.length) }),
                        " items"
                      ]
                    })
                  ]
                }),
                (0, t.jsxs)("div", {
                  className: v().tools,
                  children: [
                    (0, t.jsxs)("button", {
                      ref: ei,
                      type: "button",
                      className: v().filterButton,
                      onClick: () => ea(true),
                      "aria-expanded": ee,
                      children: [
                        (0, t.jsx)(p.A, {
                          size: 15,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        "Filters",
                        el ? (0, t.jsx)("span", {
                          className: v().badge,
                          children: el
                        }) : null
                      ]
                    }),
                    (0, t.jsx)(C, { value: W, onChange: F }),
                    (0, t.jsxs)("span", {
                      className: v().bag,
                      "aria-label": `${Y} items in bag`,
                      role: "img",
                      children: [
                        (0, t.jsx)(
                          n.PY1.span,
                          {
                            className: v().bagIcon,
                            initial: !P && Y !== f2 && { scale: 1.18, rotate: -8 },
                            animate: { scale: 1, rotate: 0 },
                            transition: _.T.spring.snappy,
                            children: (0, t.jsx)(u.A, {
                              size: 18,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            })
                          },
                          Y
                        ),
                        (0, t.jsx)("span", {
                          className: v().bagCount,
                          "aria-hidden": "true",
                          children: (0, t.jsx)(S, { text: String(Y) })
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, t.jsxs)("div", {
              className: v().body,
              children: [
                (0, t.jsx)("aside", {
                  className: v().sidebar,
                  "aria-label": "Filters",
                  children: ec
                }),
                (0, t.jsx)("div", {
                  className: v().results,
                  children: es.length ? (0, t.jsx)(d.o, {
                    id: `${I}-grid`,
                    children: (0, t.jsx)("ul", {
                      className: v().grid,
                      children: (0, t.jsx)(o.N, {
                        mode: "popLayout",
                        initial: false,
                        children: es.map((e3) => {
                          let i3 = G === e3.id, s2 = U === e3.id;
                          return (0, t.jsxs)(
                            n.PY1.li,
                            {
                              className: v().card,
                              layout: !P && "position",
                              "data-active": i3 || s2 || void 0,
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: {
                                opacity: 0,
                                transition: { duration: _.T.duration.exit }
                              },
                              transition: P ? { duration: 0.12 } : _.T.spring.smooth,
                              children: [
                                (0, t.jsxs)("div", {
                                  className: v().media,
                                  children: [
                                    (0, t.jsx)(l.default, {
                                      className: v().image,
                                      src: e3.image,
                                      alt: e3.alt,
                                      fill: true,
                                      sizes: "(max-width: 640px) 50vw, 260px"
                                    }),
                                    e3.hoverImage ? (0, t.jsx)(l.default, {
                                      className: v().hoverImage,
                                      src: e3.hoverImage,
                                      alt: "",
                                      fill: true,
                                      sizes: "(max-width: 640px) 50vw, 260px"
                                    }) : null,
                                    (0, t.jsx)("div", {
                                      className: v().quick,
                                      children: (0, t.jsx)(o.N, {
                                        mode: "popLayout",
                                        initial: false,
                                        children: s2 ? (0, t.jsxs)(
                                          n.PY1.span,
                                          {
                                            className: v().quickDone,
                                            initial: {
                                              opacity: 0,
                                              filter: "blur(2px)",
                                              y: 4 * !P
                                            },
                                            animate: {
                                              opacity: 1,
                                              filter: "blur(0px)",
                                              y: 0
                                            },
                                            exit: {
                                              opacity: 0,
                                              filter: "blur(2px)"
                                            },
                                            transition: {
                                              duration: _.T.duration.standard,
                                              ease: _.T.ease.enter
                                            },
                                            children: [
                                              (0, t.jsx)(h.A, {
                                                size: 15,
                                                strokeWidth: 1.75,
                                                "aria-hidden": "true"
                                              }),
                                              "Added"
                                            ]
                                          },
                                          "done"
                                        ) : i3 ? (0, t.jsxs)(
                                          n.PY1.div,
                                          {
                                            className: v().quickSizes,
                                            role: "group",
                                            "aria-label": `Choose a size for ${e3.name}`,
                                            initial: {
                                              opacity: 0,
                                              filter: "blur(2px)",
                                              y: 4 * !P
                                            },
                                            animate: {
                                              opacity: 1,
                                              filter: "blur(0px)",
                                              y: 0
                                            },
                                            exit: {
                                              opacity: 0,
                                              filter: "blur(2px)"
                                            },
                                            transition: {
                                              duration: _.T.duration.standard,
                                              ease: _.T.ease.enter
                                            },
                                            onKeyDown: (e4) => {
                                              "Escape" === e4.key && (e4.stopPropagation(), J(null));
                                            },
                                            children: [
                                              e3.sizes.map(
                                                (a3, i4) => (0, t.jsx)(
                                                  "button",
                                                  {
                                                    type: "button",
                                                    className: v().quickSize,
                                                    onClick: () => ed(e3, a3),
                                                    ref: 0 === i4 ? (e4) => e4?.focus({
                                                      preventScroll: true
                                                    }) : void 0,
                                                    children: a3
                                                  },
                                                  a3
                                                )
                                              ),
                                              (0, t.jsx)("button", {
                                                type: "button",
                                                className: v().quickClose,
                                                onClick: () => J(null),
                                                "aria-label": "Close sizes",
                                                children: (0, t.jsx)(
                                                  m.A,
                                                  {
                                                    size: 14,
                                                    strokeWidth: 1.75
                                                  }
                                                )
                                              })
                                            ]
                                          },
                                          "sizes"
                                        ) : (0, t.jsx)(
                                          n.PY1.button,
                                          {
                                            type: "button",
                                            className: v().quickAdd,
                                            disabled: !e3.inStock,
                                            onClick: () => {
                                              1 === e3.sizes.length ? ed(e3, e3.sizes[0]) : J(
                                                (a3) => a3 === e3.id ? null : e3.id
                                              );
                                            },
                                            "aria-label": e3.inStock ? `Quick add ${e3.name}` : `${e3.name} is sold out`,
                                            initial: {
                                              opacity: 0,
                                              filter: "blur(2px)"
                                            },
                                            animate: {
                                              opacity: 1,
                                              filter: "blur(0px)"
                                            },
                                            exit: {
                                              opacity: 0,
                                              filter: "blur(2px)"
                                            },
                                            transition: {
                                              duration: _.T.duration.fast
                                            },
                                            children: e3.inStock ? (0, t.jsxs)(
                                              t.Fragment,
                                              {
                                                children: [
                                                  (0, t.jsx)(
                                                    g.A,
                                                    {
                                                      size: 15,
                                                      strokeWidth: 1.75,
                                                      "aria-hidden": "true"
                                                    }
                                                  ),
                                                  "Quick add"
                                                ]
                                              }
                                            ) : "Sold out"
                                          },
                                          "add"
                                        )
                                      })
                                    })
                                  ]
                                }),
                                (0, t.jsxs)("div", {
                                  className: v().info,
                                  children: [
                                    (0, t.jsx)("h3", {
                                      className: v().name,
                                      title: e3.name,
                                      children: e3.name
                                    }),
                                    (0, t.jsx)("p", {
                                      className: v().detail,
                                      children: e3.detail
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: v().meta,
                                      children: [
                                        (0, t.jsxs)("span", {
                                          className: v().priceTag,
                                          children: [
                                            e3.compareAt ? (0, t.jsx)("s", {
                                              className: v().compare,
                                              children: D.format(
                                                e3.compareAt
                                              )
                                            }) : null,
                                            (0, t.jsx)("span", {
                                              "data-sale": !!e3.compareAt || void 0,
                                              children: D.format(e3.price)
                                            })
                                          ]
                                        }),
                                        (0, t.jsxs)("span", {
                                          className: v().aside,
                                          children: [
                                            !e3.inStock || e3.badge ? (0, t.jsx)("span", {
                                              className: v().status,
                                              children: e3.inStock ? e3.badge : "Sold out"
                                            }) : null,
                                            (0, t.jsx)("span", {
                                              className: v().dots,
                                              role: "img",
                                              "aria-label": `Colors: ${e3.colors.map((e4) => a2.find((a3) => a3.id === e4)?.name ?? e4).join(", ")}`,
                                              children: e3.colors.map(
                                                (e4) => (0, t.jsx)(
                                                  "span",
                                                  {
                                                    className: v().dot,
                                                    style: {
                                                      background: a2.find(
                                                        (a3) => a3.id === e4
                                                      )?.swatch
                                                    }
                                                  },
                                                  e4
                                                )
                                              )
                                            })
                                          ]
                                        })
                                      ]
                                    })
                                  ]
                                })
                              ]
                            },
                            e3.id
                          );
                        })
                      })
                    })
                  }) : (0, t.jsxs)("div", {
                    className: v().empty,
                    children: [
                      (0, t.jsx)("p", {
                        children: "No products match these filters"
                      }),
                      (0, t.jsx)("button", {
                        type: "button",
                        className: v().clearAll,
                        onClick: er,
                        children: "Clear filters"
                      })
                    ]
                  })
                })
              ]
            }),
            (0, t.jsx)(o.N, {
              children: ee ? (0, t.jsxs)(
                n.PY1.div,
                {
                  className: v().sheetLayer,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: {
                    opacity: 0,
                    transition: { duration: _.T.duration.exit }
                  },
                  transition: { duration: _.T.duration.fast },
                  children: [
                    (0, t.jsx)("button", {
                      type: "button",
                      className: v().scrim,
                      "aria-label": "Close filters",
                      tabIndex: -1,
                      onClick: eo
                    }),
                    (0, t.jsxs)(n.PY1.div, {
                      ref: et,
                      className: v().sheet,
                      role: "dialog",
                      "aria-modal": "true",
                      "aria-label": "Filters",
                      tabIndex: -1,
                      onKeyDown: (e3) => {
                        "Escape" === e3.key && eo();
                      },
                      initial: { x: P ? 0 : "-100%" },
                      animate: { x: 0 },
                      exit: {
                        x: P ? 0 : "-100%",
                        transition: {
                          duration: _.T.duration.exit,
                          ease: _.T.ease.exit
                        }
                      },
                      transition: P ? { duration: 0 } : _.T.spring.smooth,
                      children: [
                        (0, t.jsxs)("div", {
                          className: v().sheetHead,
                          children: [
                            (0, t.jsx)("h3", { children: "Filters" }),
                            (0, t.jsx)("button", {
                              type: "button",
                              className: v().sheetClose,
                              onClick: eo,
                              "aria-label": "Close filters",
                              children: (0, t.jsx)(m.A, {
                                size: 16,
                                strokeWidth: 1.75
                              })
                            })
                          ]
                        }),
                        ec,
                        (0, t.jsxs)("button", {
                          type: "button",
                          className: v().showResults,
                          onClick: eo,
                          children: [
                            "Show ",
                            es.length,
                            " ",
                            1 === es.length ? "item" : "items"
                          ]
                        })
                      ]
                    })
                  ]
                },
                "sheet"
              ) : null
            })
          ]
        }),
        (0, t.jsx)("p", {
          className: v().srOnly,
          role: "status",
          "aria-live": "polite",
          children: Q
        })
      ]
    });
  }
  let T = M;
}

__m(__module,__exports,__require);
}