/* card-to-article (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(10835, ".demo{width:100%;max-width:680px;margin-inline:auto;padding-block:8px}\n.article{display:grid;gap:18px}\n.article p{margin:0;color:var(--text-secondary)}\n.byline{display:flex;align-items:center;gap:8px;font-size:var(--text-sm)}\n.avatar{width:28px;height:28px;border-radius:50%;object-fit:cover}\n.author{color:var(--foreground);font-weight:500}\n.date{color:var(--text-muted)}\n.quote{margin:6px 0;padding-left:16px;border-left:2px solid var(--accent);color:var(--foreground);font-size:var(--text-xl);line-height:var(--leading-body)}", {"demo":"demo","article":"article","byline":"byline","avatar":"avatar","author":"author","date":"date","quote":"quote"});
A.reg(76077, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { CardToArticleDemo: () => T });
  var i = a(95155), r = a(12115), n = a(47650), o = a(18310), s = a(28245), l = a(55809), d = a(92171), c = a(25354), h = a(9005), u = a(7770), p = a(81010), m = a.n(p);
  let g = { type: "spring", visualDuration: 0.52, bounce: 0 }, f = { type: "spring", visualDuration: 0.44, bounce: 0 }, w = { duration: 0 }, { ease: v } = u.T, y = () => () => {
  };
  function b({ item: e2, titleId: t2, onPointerDown: a2 }) {
    return (0, i.jsxs)("div", {
      className: m().hero,
      onPointerDown: a2,
      children: [
        (0, i.jsx)("img", {
          className: m().image,
          src: e2.image,
          alt: t2 ? e2.imageAlt : "",
          draggable: false
        }),
        (0, i.jsx)("span", { className: m().scrim, "aria-hidden": "true" }),
        e2.tag && (0, i.jsx)("span", { className: m().tag, children: e2.tag }),
        (0, i.jsxs)("span", {
          className: m().caption,
          children: [
            (0, i.jsx)(t2 ? "h2" : "span", {
              id: t2,
              className: m().title,
              children: e2.title
            }),
            e2.meta && (0, i.jsx)("span", { className: m().meta, children: e2.meta })
          ]
        })
      ]
    });
  }
  function j({
    items: e2,
    value: t2,
    defaultValue: a2 = null,
    onValueChange: p2,
    aspectRatio: _2 = 4 / 3,
    closeLabel: x2 = "Close article",
    className: k2
  }) {
    let A2 = (0, r.useId)().replace(/[^a-zA-Z0-9-]/g, ""), E2 = (0, r.useSyncExternalStore)(
      y,
      () => true,
      () => false
    ), N2 = !!(0, o.I)() && E2, T2 = void 0 !== t2, [L, M] = (0, r.useState)(a2), S = T2 ? t2 : L, [C, D] = (0, r.useState)(null), P = (0, r.useRef)(/* @__PURE__ */ new Map()), W = (0, r.useRef)(/* @__PURE__ */ new Map()), R = (0, r.useRef)(null), q = (0, r.useRef)(null), Y = (0, r.useRef)(null), z = (0, s.d)(0), G = (0, l.G)(z, (e3) => 1 - Math.min(e3, 480) / 1500), B = (0, l.G)(z, (e3) => 0.3 * Math.min(e3, 480)), I = (0, s.d)(0);
    function F(e3, t3 = false) {
      let a3 = t3 ? W.current.get(e3) : P.current.get(e3);
      if (!a3) return null;
      let i2 = a3.getBoundingClientRect();
      return { top: i2.top, left: i2.left, width: i2.width, height: i2.height };
    }
    function H(e3) {
      T2 || M(e3), p2?.(e3);
    }
    let [J, K] = (0, r.useState)(null);
    S !== J && (K(S), S ? D({ id: S, box: { top: 0, left: 0, width: 0, height: 0 }, open: false }) : C && D({ ...C, open: false })), (0, r.useLayoutEffect)(() => {
      if (!C || C.open || !S || C.id !== S) return;
      if (0 === C.box.width) {
        let e4 = F(C.id, true);
        e4 && D({ ...C, box: e4 });
        return;
      }
      let e3 = requestAnimationFrame(
        () => D((e4) => e4 && e4.id === S ? { ...e4, open: true } : e4)
      );
      return () => cancelAnimationFrame(e3);
    }, [S, C]), (0, r.useLayoutEffect)(() => {
      if (!C || C.open || S) return;
      let e3 = F(C.id);
      e3 && (e3.top !== C.box.top || e3.left !== C.box.left || e3.width !== C.box.width) && D({ ...C, box: e3 });
    }, [S, C]);
    let O = !!C;
    (0, r.useEffect)(() => {
      if (!O) return;
      let e3 = document.documentElement, t3 = window.innerWidth - e3.clientWidth, a3 = { overflow: e3.style.overflow, padding: e3.style.paddingRight };
      return e3.style.overflow = "hidden", t3 > 0 && (e3.style.paddingRight = `${t3}px`), () => {
        e3.style.overflow = a3.overflow, e3.style.paddingRight = a3.padding;
      };
    }, [O]);
    let Q = C?.open ? C.id : null;
    function V() {
      if (!S) return;
      let e3 = R.current;
      e3 && (e3.scrollTop = 0), (0, d.i)(z, 0, N2 ? w : f), H(null);
    }
    function $(e3) {
      let t3 = W.current.get(e3);
      I.set(0), D((t4) => t4 && !t4.open && t4.id === e3 ? null : t4), requestAnimationFrame(() => t3?.focus({ preventScroll: true }));
    }
    (0, r.useEffect)(() => {
      Q && q.current?.focus({ preventScroll: true });
    }, [Q]);
    let Z = !C || C.open || S ? null : C.id;
    (0, r.useEffect)(() => {
      if (!Z) return;
      let e3 = window.setTimeout(() => $(Z), 1100 * !N2);
      return () => window.clearTimeout(e3);
    }, [Z, N2]);
    let X = (0, r.useRef)(null);
    function U(e3) {
      let t3 = z.get();
      t3 > 120 || t3 > 24 && e3 > 0.6 ? V() : (0, d.i)(z, 0, {
        type: "spring",
        visualDuration: 0.38,
        bounce: 0,
        velocity: -(1e3 * e3)
      });
    }
    (0, r.useEffect)(() => {
      let e3 = R.current;
      if (!e3 || !Q) return;
      let t3 = 0, a3 = (e4) => {
        if (1 !== e4.touches.length) return;
        let t4 = e4.touches[0].clientY;
        X.current = {
          y: t4,
          at: e4.timeStamp,
          lastY: t4,
          lastAt: e4.timeStamp,
          pulling: false
        };
      }, i2 = (t4) => {
        let a4 = X.current;
        if (!a4 || 1 !== t4.touches.length) return;
        let i3 = t4.touches[0].clientY, r3 = i3 - a4.y;
        !a4.pulling && e3.scrollTop <= 0 && r3 > 4 && (a4.pulling = true, a4.y = i3), a4.pulling && (t4.preventDefault(), a4.lastAt = t4.timeStamp, a4.lastY = i3, z.set(Math.max(0, i3 - a4.y)));
      }, r2 = (e4) => {
        let t4 = X.current;
        if (X.current = null, !t4?.pulling) return;
        let a4 = (t4.lastY - t4.y) / Math.max(1, t4.lastAt - t4.at);
        U(Math.max(0, z.get() > 0 ? a4 : 0) * ("touchcancel" !== e4.type));
      }, n2 = (a4) => {
        if (!(e3.scrollTop > 0) && (!(a4.deltaY >= 0) || 0 !== z.get())) {
          if (a4.preventDefault(), z.set(Math.max(0, z.get() - 0.6 * a4.deltaY)), window.clearTimeout(t3), z.get() > 120)
            return void V();
          t3 = window.setTimeout(() => U(0), 140);
        }
      };
      return e3.addEventListener("touchstart", a3, { passive: true }), e3.addEventListener("touchmove", i2, { passive: false }), e3.addEventListener("touchend", r2), e3.addEventListener("touchcancel", r2), e3.addEventListener("wheel", n2, { passive: false }), () => {
        window.clearTimeout(t3), e3.removeEventListener("touchstart", a3), e3.removeEventListener("touchmove", i2), e3.removeEventListener("touchend", r2), e3.removeEventListener("touchcancel", r2), e3.removeEventListener("wheel", n2);
      };
    }, [Q]);
    let ee = C ? e2.find((e3) => e3.id === C.id) : null, et = !!C?.open, ea = C && !et ? {
      top: C.box.top,
      left: C.box.left,
      width: C.box.width,
      height: C.box.height
    } : {}, ei = N2 ? w : et ? g : f;
    return (0, i.jsxs)("div", {
      className: [m().root, k2].filter(Boolean).join(" "),
      style: { "--ratio": _2 },
      children: [
        (0, i.jsx)("ul", {
          className: m().grid,
          children: e2.map(
            (e3) => (0, i.jsx)(
              "li",
              {
                ref: (t3) => {
                  t3 ? P.current.set(e3.id, t3) : P.current.delete(e3.id);
                },
                className: m().slot,
                children: (0, i.jsx)("button", {
                  type: "button",
                  ref: (t3) => {
                    t3 ? W.current.set(e3.id, t3) : W.current.delete(e3.id);
                  },
                  className: m().card,
                  "data-away": C?.id === e3.id || void 0,
                  "aria-haspopup": "dialog",
                  "aria-expanded": S === e3.id,
                  onClick: () => H(e3.id),
                  children: (0, i.jsx)(b, { item: e3 })
                })
              },
              e3.id
            )
          )
        }),
        E2 && C && ee && C.box.width > 0 && (0, n.createPortal)(
          (0, i.jsxs)("div", {
            className: m().layer,
            style: { "--ratio": _2 },
            children: [
              (0, i.jsx)(c.PY1.div, {
                className: m().backdrop,
                "aria-hidden": "true",
                initial: { opacity: 0 },
                animate: { opacity: +!!et },
                transition: N2 ? { duration: u.T.duration.instant } : { duration: et ? 0.32 : 0.26, ease: [...v.standard] },
                onClick: V
              }),
              (0, i.jsx)(c.PY1.div, {
                className: m().lift,
                style: { scale: G, y: B },
                children: (0, i.jsxs)(c.PY1.div, {
                  ref: Y,
                  layout: true,
                  transition: { layout: ei },
                  onLayoutAnimationComplete: function() {
                    !C || C.open || S || $(C.id);
                  },
                  className: m().sheet,
                  "data-open": et || void 0,
                  style: { ...ea, borderRadius: et ? 32 : 26 },
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-labelledby": `${A2}-title`,
                  onKeyDown: function(e3) {
                    if ("Escape" === e3.key) {
                      e3.stopPropagation(), V();
                      return;
                    }
                    if ("Tab" !== e3.key) return;
                    let t3 = Y.current?.querySelectorAll(
                      "a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex='-1'])"
                    );
                    if (!t3?.length) return;
                    let a3 = t3[0], i2 = t3[t3.length - 1];
                    e3.shiftKey && document.activeElement === a3 ? (e3.preventDefault(), i2.focus()) : e3.shiftKey || document.activeElement !== i2 || (e3.preventDefault(), a3.focus());
                  },
                  children: [
                    (0, i.jsx)(c.PY1.span, {
                      className: m().progress,
                      style: { scaleX: I },
                      "aria-hidden": "true"
                    }),
                    (0, i.jsxs)("div", {
                      ref: R,
                      className: m().scroller,
                      onScroll: function() {
                        let e3 = R.current;
                        if (!e3) return;
                        let t3 = e3.scrollHeight - e3.clientHeight;
                        I.set(t3 > 0 ? e3.scrollTop / t3 : 0);
                      },
                      children: [
                        (0, i.jsx)(c.PY1.div, {
                          layout: true,
                          transition: { layout: ei },
                          className: m().heroWrap,
                          children: (0, i.jsx)(b, {
                            item: ee,
                            titleId: `${A2}-title`,
                            onPointerDown: function(e3) {
                              if ("mouse" !== e3.pointerType || 0 !== e3.button)
                                return;
                              let t3 = e3.clientY, a3 = e3.currentTarget, i2 = { y: t3, at: e3.timeStamp }, r2 = i2;
                              a3.setPointerCapture(e3.pointerId);
                              let n2 = (e4) => {
                                r2 = i2, i2 = { y: e4.clientY, at: e4.timeStamp }, z.set(Math.max(0, e4.clientY - t3));
                              }, o2 = () => {
                                a3.removeEventListener("pointermove", n2), a3.removeEventListener("pointerup", o2), a3.removeEventListener("pointercancel", o2), U(
                                  Math.max(
                                    0,
                                    (i2.y - r2.y) / Math.max(1, i2.at - r2.at)
                                  )
                                );
                              };
                              a3.addEventListener("pointermove", n2), a3.addEventListener("pointerup", o2), a3.addEventListener("pointercancel", o2);
                            }
                          })
                        }),
                        (0, i.jsx)(c.PY1.div, {
                          className: m().body,
                          layout: "position",
                          initial: false,
                          animate: et ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 * !N2 },
                          transition: et ? {
                            layout: ei,
                            delay: 0.14 * !N2,
                            duration: 0.36,
                            ease: [...v.standard]
                          } : { layout: ei, duration: u.T.duration.instant },
                          children: ee.body
                        })
                      ]
                    }),
                    (0, i.jsx)(c.PY1.button, {
                      ref: q,
                      type: "button",
                      className: m().close,
                      "aria-label": x2,
                      onClick: V,
                      layout: "position",
                      initial: false,
                      animate: et ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 },
                      transition: et ? {
                        layout: ei,
                        delay: 0.18 * !N2,
                        type: "spring",
                        visualDuration: 0.3,
                        bounce: 0
                      } : { layout: ei, duration: 0.1 },
                      children: (0, i.jsx)(h.A, {
                        size: 18,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      })
                    })
                  ]
                })
              })
            ]
          }),
          document.body
        )
      ]
    });
  }
  var _ = a(67752), x = a(10835), k = a.n(x);
  function A({ by: e2, date: t2, children: a2 }) {
    let r2 = (0, _.MV)(e2);
    return (0, i.jsxs)("article", {
      className: k().article,
      children: [
        (0, i.jsxs)("div", {
          className: k().byline,
          children: [
            (0, i.jsx)("img", {
              src: (0, _.my)(e2),
              alt: "",
              className: k().avatar
            }),
            (0, i.jsx)("span", { className: k().author, children: r2.name }),
            (0, i.jsx)("span", { className: k().date, children: t2 })
          ]
        }),
        a2
      ]
    });
  }
  let E = (e2, t2, a2) => ({
    id: e2,
    image: (0, _.jW)(t2).src,
    imageAlt: (0, _.jW)(t2).alt,
    ...a2
  }), N = [
    E("pool-house", "pool-house", {
      tag: "Case study",
      title: "A glass house that stays cool in August",
      meta: "5 min read",
      body: (0, i.jsxs)(A, {
        by: "jasmine-brooks",
        date: "Sep 18, 2026",
        children: [
          (0, i.jsx)("p", {
            children: "The brief was simple and a little unreasonable: all glass on the south side, no air conditioning, and a pool that feels like part of the living room."
          }),
          (0, i.jsx)("p", {
            children: "We started with the roof. A deep overhang shades the glass from the high summer sun but lets the low winter light reach the back wall, which is poured concrete and holds the warmth into the evening."
          }),
          (0, i.jsx)("blockquote", {
            className: k().quote,
            children: "The pool does half the work. Air crossing the water drops a few degrees before it reaches the house."
          }),
          (0, i.jsx)("p", {
            children: "Every pane opens. On a still day the house breathes through the long side; when the wind turns, the clerestory at the back pulls warm air up and out."
          }),
          (0, i.jsx)("p", {
            children: "After two summers the owners have not once wished for a thermostat. The electricity bill is lower than the apartment they left."
          })
        ]
      })
    }),
    E("lisbon-tram", "lisbon-tram", {
      tag: "Travel",
      title: "Three slow days in Lisbon",
      meta: "4 min read",
      body: (0, i.jsxs)(A, {
        by: "sofia-ramirez",
        date: "Sep 11, 2026",
        children: [
          (0, i.jsx)("p", {
            children: "Skip the famous tram line at noon. Take the 28 at seven in the morning, when it is full of people going to work and the light is still low on the tiles."
          }),
          (0, i.jsx)("p", {
            children: "Spend the second day on foot in Alfama. Get lost on purpose, stop for a bica whenever you see a counter with a queue of locals, and end at the viewpoint above the river."
          }),
          (0, i.jsx)("blockquote", {
            className: k().quote,
            children: "Lisbon rewards the people who walk uphill twice."
          }),
          (0, i.jsx)("p", {
            children: "On the last day, cross the river by ferry and eat grilled fish in Cacilhas with the whole city spread out on the other bank."
          })
        ]
      })
    }),
    E("chef-plating", "chef-plating", {
      tag: "Changelog",
      title: "Menus now update in real time",
      meta: "2 min read",
      body: (0, i.jsxs)(A, {
        by: "daniel-kim",
        date: "Sep 4, 2026",
        children: [
          (0, i.jsx)("p", {
            children: "When the kitchen runs out of a dish, it now disappears from every table tablet and the online menu within a second."
          }),
          (0, i.jsx)("p", {
            children: "Prices, allergens, and photos sync the same way. Changes made on the pass show up for guests before the next order goes in."
          }),
          (0, i.jsx)("blockquote", {
            className: k().quote,
            children: "Fewer awkward conversations about the last portion of salmon."
          }),
          (0, i.jsx)("p", {
            children: "The update is live for every venue on the Kitchen plan. Nothing to install."
          })
        ]
      })
    }),
    E("mountain-ridges", "mountain-ridges", {
      tag: "Essay",
      title: "Why we plan in seasons, not sprints",
      meta: "6 min read",
      body: (0, i.jsxs)(A, {
        by: "nathan-cole",
        date: "Aug 28, 2026",
        children: [
          (0, i.jsx)("p", {
            children: "Two week sprints taught us to ship small things quickly. They also taught us to avoid anything that needed a quarter of quiet thinking."
          }),
          (0, i.jsx)("p", {
            children: "So we moved to seasons: twelve weeks with one ambitious goal, a cooldown, and nothing on the roadmap that we cannot explain in one sentence."
          }),
          (0, i.jsx)("blockquote", {
            className: k().quote,
            children: "A season is long enough to be wrong and still recover."
          }),
          (0, i.jsx)("p", {
            children: "The surprising part was morale. People could see the shape of the work, and the end of it, from the first week."
          })
        ]
      })
    })
  ];
  function T() {
    return (0, i.jsx)("div", {
      className: k().demo,
      children: (0, i.jsx)(j, { items: N })
    });
  }
}

__m(__module,__exports,__require);
});
A.regCss(81010, ".root{width:100%;min-width:0;container-type:inline-size;font-family:var(--font-body);letter-spacing:var(--tracking-body)}\n.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin:0;padding:0;list-style:none}\n@container (max-width: 520px){.grid{grid-template-columns:minmax(0,1fr);gap:12px}\n.slot{position:relative;aspect-ratio:var(--ratio);border-radius:26px}\n.card{display:block;width:100%;height:100%;padding:0;overflow:hidden;border:0;border-radius:26px;background:var(--surface-muted);text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:transform var(--duration-standard) var(--ease-standard),box-shadow var(--duration-standard) var(--ease-standard)}\n.card:active{transform:scale(.975);transition-duration:var(--duration-instant)}\n@media (hover:hover) and (pointer:fine){.card:hover{transform:scale(1.012);box-shadow:var(--shadow-raised)}\n.card:hover:active{transform:scale(.985)}\n.card[data-away]{visibility:hidden;transition:none}\n@media (prefers-reduced-motion:reduce){.card,.card:active,.card:hover,.card:hover:active{transform:none}\n.hero{position:relative;width:100%;aspect-ratio:var(--ratio);overflow:hidden;container-type:inline-size;color:oklch(99% 0 0);user-select:none}\n.heroWrap .hero{cursor:grab}\n.heroWrap .hero:active{cursor:grabbing}\n.image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}\n.scrim{position:absolute;inset:40% 0 0;background:linear-gradient(0deg,oklch(0 0 0/.62),oklch(0 0 0/0));pointer-events:none}\n.tag{position:absolute;top:5cqi;left:5cqi;padding:.45em .9em;border-radius:999px;background:oklch(100% 0 0/.82);color:oklch(20% 0 0);font-size:clamp(10px,3.2cqi,22px);font-weight:500;line-height:1.2;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}\n.caption{position:absolute;left:5.5cqi;right:5.5cqi;bottom:5cqi;display:grid;gap:1.4cqi}\n.title{margin:0;font-family:var(--font-display);font-size:7.4cqi;font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display);text-wrap:balance}\n.meta{color:oklch(100% 0 0/.8);font-size:clamp(10px,3.4cqi,20px)}\n.layer{position:fixed;inset:0;z-index:1000;font-family:var(--font-body);letter-spacing:var(--tracking-body)}\n.backdrop{position:absolute;inset:0;background:color-mix(in oklab,var(--background) 55%,transparent);-webkit-backdrop-filter:blur(10px) saturate(1.1);backdrop-filter:blur(10px) saturate(1.1)}\n.lift{position:absolute;inset:0;pointer-events:none;transform-origin:50% 30%}\n.sheet{position:absolute;overflow:hidden;background:var(--surface-raised);box-shadow:var(--shadow-floating);pointer-events:auto}\n.sheet[data-open]{top:24px;left:50%;width:min(680px,calc(100vw - 32px));height:calc(100dvh - 48px);margin-left:calc(min(680px, calc(100vw - 32px)) / -2)}\n.sheet[data-open] .scroller{overflow-y:auto}\n.sheet:not([data-open]) .body{width:min(680px,calc(100vw - 32px))}\n@media (max-width:520px){.sheet[data-open]{top:12px;width:calc(100vw - 16px);margin-left:calc((100vw - 16px) / -2);height:calc(100dvh - 24px)}\n.sheet:not([data-open]) .body{width:calc(100vw - 16px)}\n.scroller{position:absolute;inset:0;overflow:hidden;overscroll-behavior:contain}\n.heroWrap{width:100%}\n.progress{position:absolute;top:0;left:0;right:0;z-index:2;height:3px;background:var(--accent);transform-origin:left;pointer-events:none}\n.body{padding:28px clamp(20px,6cqi,48px) 56px;color:var(--foreground);font-size:var(--text-base);line-height:1.6}\n.body>:first-child{margin-top:0}\n.close{position:absolute;top:14px;right:14px;z-index:3;display:grid;place-items:center;width:36px;height:36px;padding:0;border:0;border-radius:50%;background:oklch(100% 0 0/.8);color:oklch(20% 0 0);cursor:pointer;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);-webkit-tap-highlight-color:transparent}\n.close:active{scale:.92}", {"root":"root","grid":"grid","slot":"slot","card":"card","hero":"hero","heroWrap":"heroWrap","image":"image","scrim":"scrim","tag":"tag","caption":"caption","title":"title","meta":"meta","layer":"layer","backdrop":"backdrop","lift":"lift","sheet":"sheet","scroller":"scroller","body":"body","progress":"progress","close":"close"});
A.cssFor("card-to-article", [10835,81010]);
A.item("card-to-article", {entry:76077, export:"CardToArticleDemo", kind:"component", tier:"pro", unresolved:[]});
})();