/* action-morph (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(16420, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => o });
  var n = r(51811);
  let l = {
    name: "list-todo",
    size: 24,
    node: [
      ["path", { d: "M13 5h8", key: "a7qcls" }],
      ["path", { d: "M13 12h8", key: "h98zly" }],
      ["path", { d: "M13 19h8", key: "c3s6r1" }],
      ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
      [
        "rect",
        { x: "3", y: "4", width: "6", height: "6", rx: "1", key: "cif1o7" }
      ]
    ]
  };
  l.node;
  let o = (0, n.A)(l);
}

__m(__module,__exports,__require);
});
A.reg(21759, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => n });
  var s = t(51811);
  let i = {
    name: "corner-down-left",
    size: 24,
    node: [
      ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4", key: "6o5b7l" }],
      ["path", { d: "m9 10-5 5 5 5", key: "1kshq7" }]
    ]
  };
  i.node;
  let n = (0, s.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(46395, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var n = a(51811);
  let r = {
    name: "bell-ring",
    size: 24,
    node: [
      ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
      ["path", { d: "M22 8c0-2.3-.8-4.3-2-6", key: "5bb3ad" }],
      [
        "path",
        {
          d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
          key: "11g9vi"
        }
      ],
      ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8", key: "tap9e0" }]
    ]
  };
  r.node;
  let d = (0, n.A)(r);
}

__m(__module,__exports,__require);
});
A.regCss(51729, ".demo{display:grid;justify-items:center;gap:var(--space-4);width:min(100%,560px);margin-inline:auto;font-family:var(--font-body);letter-spacing:var(--tracking-body)}\n.stage{position:relative;display:flex;flex-direction:column;width:100%;min-width:0;height:460px;box-sizing:border-box;container-type:inline-size;border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface)}\n.header{display:flex;align-items:baseline;justify-content:space-between;gap:var(--space-3);padding:var(--space-6) var(--space-6) var(--space-3)}\n@media (max-width:420px){.header{padding:var(--space-5) var(--space-4) var(--space-3)}\n.title{margin:0;color:var(--foreground);font-family:var(--font-display);font-size:var(--text-2xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display)}\n.count{margin:0;color:var(--text-muted);font-size:var(--text-sm)}\n.number{font-variant-numeric:tabular-nums}\n.list{display:grid;min-height:0;grid-template-columns:minmax(0,1fr);flex:1;align-content:start;margin:0;padding:0 var(--space-3) 96px;overflow-y:auto;overscroll-behavior:contain;border-radius:0 0 calc(var(--radius-surface) - 1px) calc(var(--radius-surface) - 1px);list-style:none;scrollbar-width:thin}\n.list{padding-inline:var(--space-1)}\n.item{display:flex;min-height:48px;align-items:center;gap:var(--space-3);padding:0 var(--space-3);border-bottom:1px solid var(--border-subtle);background:var(--surface)}\n.check{display:grid;width:20px;height:20px;flex:none;place-items:center;padding:0;border:1.5px solid var(--border-strong);border-radius:50%;background:transparent;color:transparent;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.check:active{transform:scale(.9)}\n.check[data-on]{border-color:var(--foreground);background:var(--foreground);color:var(--background)}\n@media (hover:hover) and (pointer:fine){.check:not([data-on]):hover{border-color:var(--text-secondary)}\n.kind{display:grid;width:20px;height:20px;flex:none;place-items:center;color:var(--text-muted)}\n.text{min-width:0;flex:1;overflow:hidden;color:var(--foreground);font-size:var(--text-sm);text-overflow:ellipsis;white-space:nowrap;transition:color var(--duration-fast) var(--ease-standard)}\n.text[data-done]{color:var(--text-muted);text-decoration:line-through;text-decoration-color:var(--border-strong)}\n.meta{flex:none;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.corner{--action-morph-max-width:calc(100cqi - 2 * var(--space-4));position:absolute;right:var(--space-4);bottom:var(--space-4)}\n.controls{display:flex;justify-content:center}", {"demo":"demo","stage":"stage","header":"header","title":"title","count":"count","number":"number","list":"list","item":"item","check":"check","kind":"kind","text":"text","meta":"meta","corner":"corner","controls":"controls"});
A.reg(53627, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ActionMorphDemo: () => G, default: () => Z });
  var i = a(95155), r = a(12115), n = a(18310), o = a(80642), s = a(25354), l = a(16420), c = a(82879), d = a(46395), u = a(64577), h = a(79196), m = a(28245), p = a(92171), f = a(2125), _ = a(9005), y = a(31966), b = a(35484), x = a(21759), v = a(92571), k = a(7770), j = a(75434), g = a.n(j);
  let { blur: w } = k.T, N = [...k.T.ease.enter], A = [...k.T.ease.standard], S = (e2, t2) => {
    let a2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: a2 * a2,
      damping: 2 * (1 - t2) * a2,
      mass: 1
    };
  }, L = S(0.46, 0), C = S(0.38, 0), P = S(0.28, 0), T = S(0.4, 0), M = S(0.2, 0), E = "menu", R = (e2) => "fab" === e2 ? 0 : e2 === E ? 1 : 2, z = () => () => {
  }, D = {
    hidden: (e2) => e2 ? { opacity: 0, x: 28 * e2, scale: 1, filter: `blur(${w.soft}px)` } : { opacity: 0, x: 0, scale: 0.9, filter: `blur(${w.soft}px)` },
    shown: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        x: T,
        scale: L,
        opacity: { duration: 0.22, ease: N, delay: 0.05 },
        filter: { duration: 0.24, ease: N, delay: 0.05 },
        delayChildren: 0.06,
        staggerChildren: k.T.stagger.item
      }
    },
    gone: (e2) => e2 ? {
      opacity: 0,
      x: -(28 * e2 * 0.7),
      filter: `blur(${w.soft}px)`,
      transition: {
        x: T,
        opacity: { duration: 0.12, ease: A },
        filter: { duration: 0.12, ease: A }
      }
    } : {
      opacity: 0,
      scale: 0.92,
      filter: `blur(${w.soft}px)`,
      transition: { duration: 0.12, ease: A }
    }
  }, Y = {
    hidden: { opacity: 0 },
    shown: { opacity: 1, transition: { duration: 0.16 } },
    gone: { opacity: 0, transition: { duration: 0.1 } }
  }, $ = {
    hidden: { opacity: 0, y: 8 },
    shown: {
      opacity: 1,
      y: 0,
      transition: { y: S(0.36, 0), opacity: { duration: 0.2, ease: N } }
    }
  }, W = { hidden: { opacity: 1 }, shown: { opacity: 1 } };
  function I({
    id: e2,
    direction: t2,
    reduced: a2,
    onSize: n2,
    className: o2,
    children: l2,
    label: c2,
    role: d2
  }) {
    let u2 = (0, r.useRef)(null), m2 = (0, h.tF)();
    return (0, r.useLayoutEffect)(() => {
      let t3 = u2.current;
      if (!t3 || !m2) return;
      let a3 = () => n2(e2, { w: t3.offsetWidth, h: t3.offsetHeight });
      if (a3(), "u" < typeof ResizeObserver) return;
      let i2 = new ResizeObserver(a3);
      return i2.observe(t3), () => i2.disconnect();
    }, [e2, n2, m2]), (0, i.jsx)(s.PY1.div, {
      ref: u2,
      className: [g().face, o2].filter(Boolean).join(" "),
      "data-face": e2,
      custom: t2,
      role: d2,
      "aria-label": c2,
      variants: a2 ? Y : D,
      initial: "hidden",
      animate: "shown",
      exit: "gone",
      inert: !m2 || void 0,
      children: l2
    });
  }
  function F({ done: e2, reduced: t2 }) {
    let [a2] = (0, r.useState)(e2);
    return (0, i.jsx)("span", {
      className: g().glyph,
      "aria-hidden": "true",
      children: (0, i.jsx)(o.N, {
        initial: a2,
        mode: "popLayout",
        children: e2 ? (0, i.jsx)(
          s.PY1.svg,
          {
            viewBox: "0 0 24 24",
            width: 22,
            height: 22,
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            initial: { opacity: 0, scale: t2 ? 1 : 0.6 },
            animate: { opacity: 1, scale: 1 },
            exit: {
              opacity: 0,
              scale: t2 ? 1 : 0.6,
              transition: { duration: 0.12 }
            },
            transition: t2 ? { duration: 0.12 } : M,
            children: (0, i.jsx)(s.PY1.path, {
              d: "M5.5 12.5l4.2 4.2 8.8-9.2",
              initial: { pathLength: +!!t2 },
              animate: { pathLength: 1 },
              transition: {
                duration: 0.32 * !t2,
                ease: N,
                delay: 0.12 * !t2
              }
            })
          },
          "check"
        ) : (0, i.jsx)(
          s.PY1.span,
          {
            className: g().plus,
            initial: {
              opacity: 0,
              rotate: t2 ? 0 : -90,
              scale: t2 ? 1 : 0.6
            },
            animate: { opacity: 1, rotate: 0, scale: 1 },
            exit: {
              opacity: 0,
              rotate: 45 * !t2,
              scale: t2 ? 1 : 0.6,
              transition: { duration: 0.12 }
            },
            transition: t2 ? { duration: 0.12 } : S(0.36, 0),
            children: (0, i.jsx)(f.A, { size: 22, strokeWidth: 1.75 })
          },
          "plus"
        )
      })
    });
  }
  function q({
    actions: e2,
    label: t2 = "Create",
    onSubmit: a2,
    corner: l2 = "end",
    resetAfter: c2 = 1600,
    className: d2
  }) {
    let u2, h2 = (u2 = (0, r.useSyncExternalStore)(
      z,
      () => true,
      () => false
    ), !!(0, n.I)() && u2), f2 = (0, r.useId)(), k2 = (0, r.useRef)(null), j2 = (0, r.useRef)(null), w2 = (0, r.useRef)(null), S2 = (0, r.useRef)(null), [T2, D2] = (0, r.useState)("fab"), [Y2, B2] = (0, r.useState)(0), [K2, H2] = (0, r.useState)(false), [O2, V2] = (0, r.useState)(false), [Q2, U2] = (0, r.useState)(null), [G2, Z2] = (0, r.useState)({}), [X, J] = (0, r.useState)({}), [ee, et] = (0, r.useState)(null), [ea, ei] = (0, r.useState)({ id: 0, text: "" }), er = e2.find((e3) => e3.id === T2), en = er?.composer, eo = er ? G2[er.id] ?? "" : "", es = er && en?.choices ? X[er.id] ?? en.choices.defaultIndex ?? 0 : 0, el = (0, m.d)("100%"), ec = (0, m.d)("100%"), ed = (0, m.d)("50%"), eu = (0, m.d)(1), eh = (0, r.useRef)(/* @__PURE__ */ new Map()), em = (0, r.useRef)({ view: "fab", reduced: false, measured: false }), ep = (0, r.useRef)({ w: 0, h: 0 }), ef = (0, r.useCallback)(() => {
      let e3 = em.current, t3 = eh.current.get(e3.view);
      if (!t3 || !t3.w) return;
      let a3 = "fab" === e3.view ? t3.h / 2 : 24, i2 = ep.current;
      if (0.5 > Math.abs(i2.w - t3.w) && 0.5 > Math.abs(i2.h - t3.h) && e3.measured)
        return;
      if (ep.current = t3, !e3.measured || e3.reduced) {
        el.jump(t3.w), ec.jump(t3.h), ed.jump(a3), e3.measured = true;
        return;
      }
      let r2 = t3.w * t3.h >= i2.w * i2.h ? L : C;
      (0, p.i)(el, t3.w, r2), (0, p.i)(ec, t3.h, r2), (0, p.i)(ed, a3, r2);
    }, [ec, ed, el]), e_ = (0, r.useCallback)(
      (e3, t3) => {
        eh.current.set(e3, t3), e3 === em.current.view && ef();
      },
      [ef]
    );
    (0, r.useLayoutEffect)(() => {
      em.current.view = T2, em.current.reduced = h2, ef();
    }, [ef, h2, T2]);
    let ey = (e3) => {
      if (e3 === T2) return;
      let t3 = R(T2), a3 = R(e3);
      B2(t3 >= 1 && a3 >= 1 ? Math.sign(a3 - t3) || 1 : 0), U2(null), et(null), D2(e3);
    }, eb = (0, r.useRef)(null);
    (0, r.useLayoutEffect)(() => {
      let e3 = eb.current;
      e3 && (eb.current = null, "fab" === e3 ? j2.current?.focus({ preventScroll: true }) : "field" === e3 ? w2.current?.focus({ preventScroll: true }) : S2.current?.querySelector(`[data-action="${e3}"]`)?.focus({ preventScroll: true }));
    }, [T2]);
    let ex = (e3) => {
      eb.current = "field", ey(e3);
    }, ev = () => {
      eb.current = T2, ey(E);
    }, ek = (0, r.useCallback)((e3 = true) => {
      e3 && k2.current?.contains(document.activeElement) && (eb.current = "fab"), B2(0), U2(null), et(null), D2("fab");
    }, []);
    (0, r.useEffect)(() => {
      if (!K2) return;
      let e3 = window.setTimeout(() => H2(false), c2);
      return () => window.clearTimeout(e3);
    }, [K2, c2]);
    let ej = "fab" !== T2;
    (0, r.useEffect)(() => {
      if (!ej) return;
      let e3 = (e4) => {
        k2.current?.contains(e4.target) || ek(false);
      };
      return document.addEventListener("pointerdown", e3), () => document.removeEventListener("pointerdown", e3);
    }, [ek, ej]);
    let eg = (0, m.d)(0), ew = () => {
      h2 || (0, p.i)(eg, 0, {
        type: "spring",
        stiffness: 900,
        damping: 57,
        velocity: -260
      });
    }, eN = (0, r.useRef)(0), eA = async (e3) => {
      if (e3?.preventDefault(), !er || !en || O2) return;
      let t3 = eo.trim();
      if (!t3) {
        U2(en.emptyHint ?? "Write something first"), ew(), w2.current?.focus();
        return;
      }
      let i2 = ++eN.current;
      V2(true), U2(null);
      try {
        await a2?.({
          action: er.id,
          text: t3,
          choice: en.choices?.options[es]
        });
      } catch {
        if (i2 !== eN.current) return;
        V2(false), U2("Couldn\u2019t save. Try again."), ew();
        return;
      }
      i2 === eN.current && (V2(false), Z2((e4) => ({ ...e4, [er.id]: "" })), k2.current?.contains(document.activeElement) && (eb.current = "fab"), H2(true), B2(0), D2("fab"), ei((e4) => ({ id: e4.id + 1, text: en.successLabel })));
    }, eS = (0, m.d)(0), eL = (0, m.d)(0), eC = (0, m.d)(0);
    (0, r.useLayoutEffect)(() => {
      let e3 = null === ee ? null : S2.current?.querySelector(`[data-index="${ee}"]`);
      e3 ? (0.05 > eC.get() || h2 ? (eS.jump(e3.offsetTop), eL.jump(e3.offsetHeight)) : ((0, p.i)(eS, e3.offsetTop, P), (0, p.i)(eL, e3.offsetHeight, P)), (0, p.i)(eC, 1, { duration: 0.12 * !h2, ease: N })) : (0, p.i)(eC, 0, { duration: 0.14 * !h2, ease: A });
    }, [eC, eL, ee, eS, h2, T2]);
    let eP = () => (0, p.i)(eu, 1, M), eT = h2 ? W : $, eM = `${f2}-menu-title`, eE = `${f2}-${T2}-title`;
    return (0, i.jsxs)("div", {
      ref: k2,
      className: [g().root, d2].filter(Boolean).join(" "),
      "data-corner": l2,
      "data-view": "fab" === T2 ? "fab" : T2 === E ? "menu" : "composer",
      "data-done": K2 || void 0,
      onKeyDown: (e3) => {
        "Escape" !== e3.key || e3.defaultPrevented || "fab" !== T2 && (e3.preventDefault(), T2 === E ? ek() : O2 || ev());
      },
      children: [
        (0, i.jsx)(s.PY1.div, {
          className: g().shape,
          style: { width: el, height: ec, borderRadius: ed, scale: eu },
          children: (0, i.jsxs)(o.N, {
            initial: false,
            custom: Y2,
            children: [
              "fab" === T2 && (0, i.jsx)(
                I,
                {
                  id: "fab",
                  direction: Y2,
                  reduced: h2,
                  onSize: e_,
                  className: g().fabFace,
                  children: (0, i.jsx)("button", {
                    ref: j2,
                    type: "button",
                    className: g().fab,
                    "aria-label": K2 ? `${t2}. ${ea.text}` : t2,
                    "aria-haspopup": "menu",
                    "aria-expanded": false,
                    onClick: () => {
                      eb.current = e2[0]?.id ?? null, H2(false), ey(E);
                    },
                    onPointerDown: (e3) => {
                      0 === e3.button && (h2 || (0, p.i)(eu, 0.94, M));
                    },
                    onPointerUp: eP,
                    onPointerLeave: eP,
                    onPointerCancel: eP,
                    children: (0, i.jsx)(F, { done: K2, reduced: h2 })
                  })
                },
                "fab"
              ),
              T2 === E && (0, i.jsxs)(
                I,
                {
                  id: E,
                  direction: Y2,
                  reduced: h2,
                  onSize: e_,
                  className: g().menuFace,
                  children: [
                    (0, i.jsxs)(s.PY1.div, {
                      className: g().header,
                      variants: eT,
                      children: [
                        (0, i.jsx)("p", {
                          id: eM,
                          className: g().title,
                          children: t2
                        }),
                        (0, i.jsx)("button", {
                          type: "button",
                          className: g().iconButton,
                          "aria-label": "Close",
                          onClick: () => ek(),
                          children: (0, i.jsx)(_.A, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          })
                        })
                      ]
                    }),
                    (0, i.jsxs)("div", {
                      ref: S2,
                      className: g().menu,
                      role: "menu",
                      "aria-labelledby": eM,
                      onKeyDown: (t3) => {
                        let a3 = Array.from(
                          t3.currentTarget.querySelectorAll(
                            "[role='menuitem']"
                          )
                        ), i2 = a3.indexOf(document.activeElement), r2 = { ArrowDown: 1, ArrowUp: -1 }, n2 = null;
                        if (t3.key in r2)
                          n2 = i2 < 0 ? 0 : (i2 + r2[t3.key] + a3.length) % a3.length;
                        else if ("Home" === t3.key) n2 = 0;
                        else if ("End" === t3.key) n2 = a3.length - 1;
                        else if (1 === t3.key.length && !t3.metaKey && !t3.ctrlKey && !t3.altKey) {
                          let a4 = e2.find(
                            (e3) => e3.shortcut?.toLowerCase() === t3.key.toLowerCase()
                          );
                          a4 && (t3.preventDefault(), ex(a4.id));
                          return;
                        }
                        null !== n2 && (t3.preventDefault(), a3[n2]?.focus());
                      },
                      onPointerLeave: () => et(null),
                      children: [
                        (0, i.jsx)(s.PY1.span, {
                          className: g().highlight,
                          style: { y: eS, height: eL, opacity: eC },
                          "aria-hidden": "true"
                        }),
                        e2.map(
                          (e3, t3) => (0, i.jsxs)(
                            s.PY1.button,
                            {
                              type: "button",
                              role: "menuitem",
                              className: g().item,
                              "data-index": t3,
                              "data-action": e3.id,
                              variants: eT,
                              "aria-keyshortcuts": e3.shortcut,
                              onClick: () => ex(e3.id),
                              onPointerMove: (e4) => {
                                "mouse" === e4.pointerType && ee !== t3 && et(t3);
                              },
                              onFocus: () => et(t3),
                              children: [
                                (0, i.jsx)("span", {
                                  className: g().itemIcon,
                                  "aria-hidden": "true",
                                  children: e3.icon
                                }),
                                (0, i.jsxs)("span", {
                                  className: g().itemText,
                                  children: [
                                    (0, i.jsx)("span", {
                                      className: g().itemLabel,
                                      children: e3.label
                                    }),
                                    e3.description && (0, i.jsx)("span", {
                                      className: g().itemDescription,
                                      children: e3.description
                                    })
                                  ]
                                }),
                                e3.shortcut && (0, i.jsx)("kbd", {
                                  className: g().kbd,
                                  "aria-hidden": "true",
                                  children: e3.shortcut.toUpperCase()
                                })
                              ]
                            },
                            e3.id
                          )
                        )
                      ]
                    })
                  ]
                },
                E
              ),
              er && en && (0, i.jsx)(
                I,
                {
                  id: er.id,
                  direction: Y2,
                  reduced: h2,
                  onSize: e_,
                  className: g().composerFace,
                  children: (0, i.jsxs)("form", {
                    className: g().form,
                    "aria-labelledby": eE,
                    onSubmit: eA,
                    "aria-busy": O2 || void 0,
                    children: [
                      (0, i.jsxs)(s.PY1.div, {
                        className: g().header,
                        variants: eT,
                        children: [
                          (0, i.jsx)("button", {
                            type: "button",
                            className: g().iconButton,
                            "aria-label": "Back to actions",
                            onClick: ev,
                            disabled: O2,
                            children: (0, i.jsx)(y.A, {
                              size: 16,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            })
                          }),
                          (0, i.jsx)("p", {
                            id: eE,
                            className: g().title,
                            children: en.title
                          }),
                          (0, i.jsx)("button", {
                            type: "button",
                            className: g().iconButton,
                            "aria-label": "Close",
                            onClick: () => ek(),
                            children: (0, i.jsx)(_.A, {
                              size: 16,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            })
                          })
                        ]
                      }),
                      (0, i.jsx)(s.PY1.div, {
                        variants: eT,
                        style: { x: eg },
                        children: en.multiline ? (0, i.jsx)("textarea", {
                          ref: w2,
                          className: `${g().field} ${g().textarea}`,
                          rows: 3,
                          placeholder: en.placeholder,
                          "aria-label": en.title,
                          value: eo,
                          readOnly: O2,
                          "aria-invalid": !!Q2 || void 0,
                          "aria-describedby": Q2 ? `${f2}-error` : void 0,
                          "aria-keyshortcuts": "Meta+Enter Control+Enter",
                          onChange: (e3) => {
                            Z2((t3) => ({
                              ...t3,
                              [er.id]: e3.target.value
                            })), U2(null);
                          },
                          onKeyDown: (e3) => {
                            en?.multiline && "Enter" === e3.key && (e3.metaKey || e3.ctrlKey) && (e3.preventDefault(), eA());
                          }
                        }) : (0, i.jsx)("input", {
                          ref: w2,
                          className: g().field,
                          type: "text",
                          placeholder: en.placeholder,
                          "aria-label": en.title,
                          value: eo,
                          readOnly: O2,
                          autoComplete: "off",
                          "aria-invalid": !!Q2 || void 0,
                          "aria-describedby": Q2 ? `${f2}-error` : void 0,
                          onChange: (e3) => {
                            Z2((t3) => ({
                              ...t3,
                              [er.id]: e3.target.value
                            })), U2(null);
                          }
                        })
                      }),
                      en.choices && (0, i.jsxs)(s.PY1.div, {
                        variants: eT,
                        className: g().choiceBlock,
                        children: [
                          (0, i.jsx)("span", {
                            id: `${f2}-choices`,
                            className: g().choiceLabel,
                            children: en.choices.label
                          }),
                          (0, i.jsx)("div", {
                            className: g().choices,
                            role: "radiogroup",
                            "aria-labelledby": `${f2}-choices`,
                            onKeyDown: (e3) => {
                              if (!er || !en?.choices) return;
                              let t3 = en.choices.options.length, a3 = {
                                ArrowRight: 1,
                                ArrowDown: 1,
                                ArrowLeft: -1,
                                ArrowUp: -1
                              };
                              if (!(e3.key in a3)) return;
                              e3.preventDefault();
                              let i2 = (es + a3[e3.key] + t3) % t3;
                              J((e4) => ({ ...e4, [er.id]: i2 })), e3.currentTarget.querySelectorAll("[role='radio']")[i2]?.focus();
                            },
                            style: { "--count": en.choices.options.length },
                            children: en.choices.options.map(
                              (e3, t3) => (0, i.jsxs)(
                                "button",
                                {
                                  type: "button",
                                  role: "radio",
                                  "aria-checked": t3 === es,
                                  tabIndex: t3 === es ? 0 : -1,
                                  className: g().choice,
                                  disabled: O2,
                                  onClick: () => J((e4) => ({ ...e4, [er.id]: t3 })),
                                  children: [
                                    t3 === es && (0, i.jsx)(s.PY1.span, {
                                      layoutId: `${f2}-choice-${er.id}`,
                                      className: g().choicePill,
                                      transition: h2 ? { duration: 0 } : P,
                                      "aria-hidden": "true"
                                    }),
                                    (0, i.jsx)("span", {
                                      className: g().choiceText,
                                      children: e3
                                    })
                                  ]
                                },
                                e3
                              )
                            )
                          })
                        ]
                      }),
                      (0, i.jsxs)(s.PY1.div, {
                        variants: eT,
                        className: g().footer,
                        children: [
                          (0, i.jsx)("span", {
                            id: `${f2}-error`,
                            className: g().status,
                            "aria-live": "polite",
                            children: (0, i.jsx)(o.N, {
                              initial: false,
                              mode: "popLayout",
                              children: Q2 && (0, i.jsxs)(
                                s.PY1.span,
                                {
                                  className: g().error,
                                  initial: { opacity: 0, y: 4 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: {
                                    opacity: 0,
                                    transition: { duration: 0.1 }
                                  },
                                  transition: h2 ? { duration: 0.1 } : P,
                                  children: [
                                    (0, i.jsx)(b.A, {
                                      size: 14,
                                      strokeWidth: 1.75,
                                      "aria-hidden": "true"
                                    }),
                                    Q2
                                  ]
                                },
                                Q2
                              )
                            })
                          }),
                          (0, i.jsxs)("button", {
                            type: "submit",
                            className: g().submit,
                            "aria-disabled": O2 || void 0,
                            children: [
                              (0, i.jsxs)("span", {
                                className: g().submitFace,
                                "data-on": !O2 || void 0,
                                children: [
                                  en.submitLabel,
                                  (0, i.jsx)(x.A, {
                                    size: 14,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  })
                                ]
                              }),
                              (0, i.jsxs)("span", {
                                className: g().submitFace,
                                "data-on": O2 || void 0,
                                "aria-hidden": !O2,
                                children: [
                                  (0, i.jsx)(v.A, {
                                    className: g().spinner,
                                    size: 16,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  }),
                                  "Saving"
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                },
                er.id
              )
            ]
          })
        }),
        (0, i.jsx)("span", {
          className: g().srOnly,
          role: "status",
          "aria-live": "polite",
          children: (0, i.jsx)("span", { children: ea.text }, ea.id)
        })
      ]
    });
  }
  var B = a(66558), K = a(51729), H = a.n(K);
  let O = { strokeWidth: 1.75 }, V = [
    {
      id: "task",
      label: "Task",
      description: "Add to your list",
      icon: (0, i.jsx)(l.A, { ...O }),
      shortcut: "t",
      composer: {
        title: "New task",
        placeholder: "What needs doing?",
        choices: {
          label: "Due",
          options: ["Today", "Tomorrow", "Next week"]
        },
        submitLabel: "Add task",
        successLabel: "Task added",
        emptyHint: "Give the task a title"
      }
    },
    {
      id: "note",
      label: "Note",
      description: "Private to you",
      icon: (0, i.jsx)(c.A, { ...O }),
      shortcut: "n",
      composer: {
        title: "New note",
        placeholder: "Write it down",
        multiline: true,
        submitLabel: "Save note",
        successLabel: "Note saved",
        emptyHint: "The note is empty"
      }
    },
    {
      id: "reminder",
      label: "Reminder",
      description: "Nudge me at a set time",
      icon: (0, i.jsx)(d.A, { ...O }),
      shortcut: "r",
      composer: {
        title: "New reminder",
        placeholder: "Remind me to\u2026",
        choices: {
          label: "When",
          options: ["In 1 hour", "5:00 PM", "Tomorrow"],
          defaultIndex: 1
        },
        submitLabel: "Set reminder",
        successLabel: "Reminder set",
        emptyHint: "Say what to remind you about"
      }
    }
  ], Q = [
    {
      id: 4,
      kind: "task",
      text: "Review Emma\u2019s onboarding flow",
      meta: "Today"
    },
    {
      id: 3,
      kind: "reminder",
      text: "Call Andre about the Q3 budget",
      meta: "4:30 PM"
    },
    {
      id: 2,
      kind: "task",
      text: "Send launch notes to Diane",
      meta: "Tomorrow",
      done: true
    },
    { id: 1, kind: "note", text: "Pricing page: lead with the free tier" }
  ], U = [
    { value: "succeed", label: "Saving works" },
    { value: "fail", label: "Saving fails" }
  ];
  function G() {
    let e2 = (0, n.I)(), [t2, a2] = (0, r.useState)(Q), [l2, h2] = (0, r.useState)("succeed"), m2 = t2.filter((e3) => "task" === e3.kind && !e3.done).length;
    return (0, i.jsxs)("div", {
      className: H().demo,
      children: [
        (0, i.jsxs)("div", {
          className: H().stage,
          children: [
            (0, i.jsxs)("header", {
              className: H().header,
              children: [
                (0, i.jsx)("h3", { className: H().title, children: "Today" }),
                (0, i.jsxs)("p", {
                  className: H().count,
                  "aria-live": "polite",
                  children: [
                    (0, i.jsx)("span", { className: H().number, children: m2 }),
                    " open ",
                    1 === m2 ? "task" : "tasks"
                  ]
                })
              ]
            }),
            (0, i.jsx)("ul", {
              className: H().list,
              children: (0, i.jsx)(o.N, {
                initial: false,
                children: t2.map(
                  (t3) => (0, i.jsxs)(
                    s.PY1.li,
                    {
                      layout: !e2 && "position",
                      className: H().item,
                      initial: e2 ? { opacity: 0 } : { opacity: 0, y: -10, filter: "blur(4px)" },
                      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                      exit: { opacity: 0 },
                      transition: e2 ? { duration: 0.15 } : k.T.spring.smooth,
                      children: [
                        "task" === t3.kind ? (0, i.jsx)("button", {
                          type: "button",
                          role: "checkbox",
                          "aria-checked": !!t3.done,
                          "aria-label": `Mark \u201C${t3.text}\u201D done`,
                          className: H().check,
                          "data-on": t3.done || void 0,
                          onClick: () => {
                            let e3;
                            return e3 = t3.id, a2(
                              (t4) => t4.map(
                                (t5) => t5.id === e3 ? { ...t5, done: !t5.done } : t5
                              )
                            );
                          },
                          children: (0, i.jsx)(u.A, {
                            size: 12,
                            strokeWidth: 2.5,
                            "aria-hidden": "true"
                          })
                        }) : (0, i.jsx)("span", {
                          className: H().kind,
                          "aria-hidden": "true",
                          children: "note" === t3.kind ? (0, i.jsx)(c.A, { size: 16, ...O }) : (0, i.jsx)(d.A, { size: 16, ...O })
                        }),
                        (0, i.jsx)("span", {
                          className: H().text,
                          "data-done": t3.done || void 0,
                          children: t3.text
                        }),
                        t3.meta && (0, i.jsx)("span", {
                          className: H().meta,
                          children: t3.meta
                        })
                      ]
                    },
                    t3.id
                  )
                )
              })
            }),
            (0, i.jsx)("div", {
              className: H().corner,
              children: (0, i.jsx)(q, {
                actions: V,
                label: "Create",
                onSubmit: ({ action: e3, text: t3, choice: i2 }) => new Promise((r2, n2) => {
                  window.setTimeout(() => {
                    "fail" === l2 ? n2(Error("Simulated failure")) : (a2((a3) => [
                      {
                        id: Math.max(0, ...a3.map((e4) => e4.id)) + 1,
                        kind: e3,
                        text: t3,
                        meta: i2
                      },
                      ...a3
                    ]), r2());
                  }, 650);
                })
              })
            })
          ]
        }),
        (0, i.jsx)("div", {
          className: H().controls,
          children: (0, i.jsx)(B.A, {
            label: "Save result",
            options: U,
            value: l2,
            onValueChange: h2
          })
        })
      ]
    });
  }
  let Z = G;
}

__m(__module,__exports,__require);
});
A.regCss(75434, ".root{--am-size:56px;--am-origin-x:100%;position:relative;z-index:20;width:var(--am-size);height:var(--am-size);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root[data-corner=start]{--am-origin-x:0%}\n.root[data-corner=start] .shape{right:auto;left:0}\n.root:not([data-view=fab]) .shape{background:var(--surface-raised);color:var(--foreground);box-shadow:var(--shadow-floating)}\n.root:not([data-view=fab]) .shape:after{border-color:var(--border)}\n.root[data-view=fab][data-done] .shape{background:var(--success);color:var(--background)}\n@media (hover:hover) and (pointer:fine){.root[data-view=fab]:not([data-done]) .shape:hover{background:var(--accent-strong)}\n.root[data-corner=start] .face{right:auto;left:0}\n@media (prefers-contrast:more){.root:not([data-view=fab]) .shape:after{border-color:var(--border-strong)}\n.shape{position:absolute;right:0;bottom:0;overflow:clip;background:var(--accent);color:var(--accent-foreground);box-shadow:var(--shadow-raised);transform-origin:var(--am-origin-x) 100%;transition:background-color var(--duration-standard) var(--ease-standard),color var(--duration-standard) var(--ease-standard),box-shadow var(--duration-considered) var(--ease-standard)}\n.shape:after{content:\"\";position:absolute;inset:0;border:1px solid transparent;border-radius:inherit;pointer-events:none;transition:border-color var(--duration-standard) var(--ease-standard)}\n@media (prefers-reduced-motion:reduce){.choice,.shape,.submitFace{transition-duration:0s}\n.face{position:absolute;right:0;bottom:0;box-sizing:border-box;transform-origin:var(--am-origin-x) 100%}\n.face[inert]{pointer-events:none}\n.fabFace{width:var(--am-size);height:var(--am-size)}\n.fab{display:grid;width:100%;height:100%;place-items:center;padding:0;border:0;border-radius:50%;background:transparent;color:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation}\n.glyph{display:grid;width:22px;height:22px;place-items:center}\n.glyph>*{grid-area:1/1}\n.plus{display:grid;place-items:center}\n.menuFace{display:grid;width:min(16rem,var(--action-morph-max-width,calc(100vw - 2rem)));gap:2px;padding:6px}\n.composerFace{width:min(20rem,var(--action-morph-max-width,calc(100vw - 2rem)));padding:6px}\n.header{display:flex;min-height:36px;align-items:center;gap:var(--space-1);padding-left:10px}\n.form .header{padding-left:0}\n.form .title{padding-left:2px}\n.form{display:grid;gap:var(--space-3)}\n.title{min-width:0;flex:1;margin:0;overflow:hidden;color:var(--foreground);font-size:var(--text-sm);font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.iconButton{display:grid;width:32px;height:32px;flex:none;place-items:center;padding:0;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.iconButton:focus-visible{background:color-mix(in oklab,var(--foreground) 7%,transparent);color:var(--foreground)}\n.iconButton:disabled{cursor:default;opacity:.5}\n@media (hover:hover) and (pointer:fine){.iconButton:hover{background:color-mix(in oklab,var(--foreground) 7%,transparent);color:var(--foreground)}\n.menu{position:relative;display:grid;gap:2px}\n.highlight{position:absolute;top:0;right:0;left:0;border-radius:var(--radius-control);background:color-mix(in oklab,var(--foreground) 6.5%,transparent);pointer-events:none}\n.item{position:relative;display:flex;align-items:center;gap:var(--space-3);padding:9px 10px;border:0;border-radius:var(--radius-control);background:transparent;color:inherit;cursor:pointer;font:inherit;text-align:left;-webkit-tap-highlight-color:transparent}\n.item:focus-visible .itemIcon{color:var(--foreground)}\n.choice:hover,.item:hover .itemIcon{color:var(--foreground)}\n.itemIcon{display:grid;width:20px;height:20px;flex:none;place-items:center;color:var(--text-secondary);transition:color var(--duration-fast) var(--ease-standard)}\n.itemIcon>svg{width:18px;height:18px}\n.itemText{display:grid;min-width:0;flex:1;gap:1px}\n.itemLabel{font-weight:500}\n.itemDescription{color:var(--text-secondary);font-size:var(--text-xs)}\n.kbd{display:grid;min-width:22px;height:22px;box-sizing:border-box;place-items:center;padding:0 6px;border:1px solid var(--border);border-radius:7px;color:var(--text-muted);font-family:var(--font-body);font-size:var(--text-xs)}\n.field{display:block;width:100%;box-sizing:border-box;margin:0;padding:10px 12px;border:0;border-radius:var(--radius-control);background:color-mix(in oklab,var(--surface-muted) 80%,transparent);box-shadow:inset 0 0 0 1px var(--border-subtle);color:var(--foreground);font:inherit;font-size:var(--text-base);letter-spacing:var(--tracking-body);outline:none;transition:box-shadow var(--duration-fast) var(--ease-standard)}\n.field:focus{box-shadow:inset 0 0 0 1px var(--border-strong)}\n.field[aria-invalid=true]{box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--danger) 60%,transparent)}\n.field::placeholder{color:var(--text-muted)}\n.textarea{min-height:5.5rem;resize:none;line-height:var(--leading-body);scrollbar-width:thin}\n.choiceBlock{display:grid;gap:6px;padding-inline:2px}\n.choiceLabel{color:var(--text-muted);font-size:var(--text-xs)}\n.choices{display:grid;padding:3px;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--foreground) 5%,transparent);grid-template-columns:repeat(var(--count,3),minmax(0,1fr))}\n.choice{position:relative;display:grid;height:30px;place-items:center;padding:0 6px;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);cursor:pointer;font:inherit;font-size:var(--text-xs);font-weight:500;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard)}\n.choice[aria-checked=true]{color:var(--foreground)}\n.choicePill{position:absolute;inset:0;border-radius:inherit;background:var(--surface-raised);box-shadow:var(--shadow-resting),inset 0 0 0 1px var(--border)}\n.choiceText{position:relative;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.footer{display:flex;min-height:36px;align-items:center;justify-content:space-between;gap:var(--space-3);padding-left:4px}\n.status{position:relative;display:flex;min-width:0;flex:1}\n.error{display:inline-flex;align-items:center;gap:6px;color:var(--danger);font-size:var(--text-xs)}\n.error>svg{flex:none}\n.submit{display:grid;height:36px;flex:none;align-items:center;padding:0 14px;border:0;border-radius:var(--radius-pill);background:var(--accent);color:var(--accent-foreground);cursor:pointer;font:inherit;font-weight:500;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.submit:active{transform:scale(.97)}\n.submit[aria-disabled=true]{cursor:progress}\n.submit:hover{background:var(--accent-strong)}\n.submitFace{display:inline-flex;grid-area:1/1;align-items:center;justify-content:center;gap:6px;opacity:0;filter:blur(2px);transform:translateY(4px);transition:opacity var(--duration-fast) var(--ease-standard),filter var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.submitFace[data-on]{opacity:1;filter:none;transform:none}\n.submitFace{transform:none;filter:none}\n.spinner{animation:spin .8s linear infinite}\n.spinner{animation-duration:2.4s}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}", {"root":"root","shape":"shape","face":"face","choice":"choice","submitFace":"submitFace","fabFace":"fabFace","fab":"fab","glyph":"glyph","plus":"plus","menuFace":"menuFace","composerFace":"composerFace","header":"header","form":"form","title":"title","iconButton":"iconButton","menu":"menu","highlight":"highlight","item":"item","itemIcon":"itemIcon","itemText":"itemText","itemLabel":"itemLabel","itemDescription":"itemDescription","kbd":"kbd","field":"field","textarea":"textarea","choiceBlock":"choiceBlock","choiceLabel":"choiceLabel","choices":"choices","choicePill":"choicePill","choiceText":"choiceText","footer":"footer","status":"status","error":"error","submit":"submit","spinner":"spinner","srOnly":"srOnly"});
A.reg(82879, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => a });
  var r = n(51811);
  let l = {
    name: "sticky-note",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",
          key: "1dfntj"
        }
      ],
      ["path", { d: "M15 3v5a1 1 0 0 0 1 1h5", key: "6s6qgf" }]
    ]
  };
  l.node;
  let a = (0, r.A)(l);
}

__m(__module,__exports,__require);
});
A.cssFor("action-morph", [51729,75434]);
A.item("action-morph", {entry:53627, export:"ActionMorphDemo", kind:"component", tier:"pro", unresolved:[]});
})();