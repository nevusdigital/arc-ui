/* glass-menu (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(11414, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => s });
  var i = t(51811);
  let n = {
    name: "folder-input",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",
          key: "fm4g5t"
        }
      ],
      ["path", { d: "M2 13h10", key: "pgb2dq" }],
      ["path", { d: "m9 16 3-3-3-3", key: "6m91ic" }]
    ]
  };
  n.node;
  let s = (0, i.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(21508, ".root{--glass-fill:color-mix(in oklab,var(--surface) 62%,transparent);--glass-edge:color-mix(in oklab,var(--foreground) 10%,transparent);--glass-shine:rgb(255 255 255/.5);--glass-shadow:0 1px 2px rgb(0 0 0/.06),0 10px 28px -8px rgb(0 0 0/.2),0 28px 60px -20px rgb(0 0 0/.24);--glass-pill:color-mix(in oklab,var(--accent) 16%,rgb(255 255 255/.55));--glass-pill-shine:rgb(255 255 255/.7);position:relative;display:inline-block;font-family:var(--font-body);letter-spacing:var(--tracking-body)}\n:root[data-theme=dark] .root{--glass-fill:color-mix(in oklab,var(--surface) 56%,transparent);--glass-edge:rgb(255 255 255/.1);--glass-shine:rgb(255 255 255/.12);--glass-shadow:0 1px 2px rgb(0 0 0/.3),0 12px 32px -8px rgb(0 0 0/.5),0 28px 64px -20px rgb(0 0 0/.55);--glass-pill:color-mix(in oklab,var(--accent) 26%,rgb(255 255 255/.08));--glass-pill-shine:rgb(255 255 255/.14)}\n.root[data-open] .triggerContent{opacity:0}\n.shell{position:absolute;inset:0;z-index:0;pointer-events:none;border:1px solid var(--glass-edge);background:var(--glass-fill);box-shadow:inset 0 1px 0 var(--glass-shine),var(--glass-shadow);-webkit-backdrop-filter:blur(24px) saturate(1.7);backdrop-filter:blur(24px) saturate(1.7)}\n.trigger{position:relative;display:inline-flex;height:40px;align-items:center;padding:0;border:0;background:none;color:var(--foreground);font:inherit;font-size:var(--text-sm);font-weight:500;cursor:pointer;-webkit-tap-highlight-color:transparent}\n.triggerContent{position:relative;z-index:1;display:inline-flex;height:100%;align-items:center;gap:8px;padding:0 14px 0 12px;white-space:nowrap;transition:opacity var(--duration-fast) var(--ease-standard)}\n.triggerContent svg{flex:none}\n@media (prefers-reduced-motion:reduce){.check,.icon,.triggerContent{transition:none}\n.panel{position:absolute;top:0;left:0;z-index:30}\n.panel[data-align=end]{right:0;left:auto}\n.menu{position:relative;z-index:1;padding:6px}\n.viewport{position:relative;overflow:hidden;margin:-2px;padding:2px}\n.view{width:100%}\n.list,.rowWrap{display:grid}\n.heading{padding:8px 10px 4px;color:var(--text-muted);font-size:var(--text-xs)}\n.separator{height:1px;margin:5px 10px;background:color-mix(in oklab,var(--foreground) 9%,transparent)}\n.item{position:relative;display:flex;height:36px;align-items:center;gap:10px;padding:0 10px;border:0;border-radius:16px;background:none;color:var(--foreground);font:inherit;font-size:var(--text-sm);text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;user-select:none}\n.item[aria-disabled]{cursor:default;opacity:.4}\n.item[data-danger]{color:var(--danger)}\n.item[data-back]{color:var(--text-secondary)}\n.item[data-danger] .highlight{background:color-mix(in oklab,var(--danger) 14%,rgb(255 255 255/.5))}\n:root[data-theme=dark] .item[data-danger] .highlight{background:color-mix(in oklab,var(--danger) 24%,rgb(255 255 255/.06))}\n.item[data-active] .icon{color:color-mix(in oklab,var(--accent) 88%,var(--foreground))}\n.item[data-danger] .icon{color:var(--danger)}\n.highlight{position:absolute;inset:0;z-index:0;border-radius:16px;pointer-events:none;background:var(--glass-pill);box-shadow:inset 0 1px 0 var(--glass-pill-shine),0 1px 2px rgb(0 0 0/.06)}\n.check,.chevron,.icon,.label,.shortcut{position:relative;z-index:1}\n.icon{display:grid;width:16px;flex:none;place-items:center;color:var(--text-secondary);transition:color var(--duration-fast) var(--ease-standard)}\n.icon svg{width:16px;height:16px}\n.label{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.shortcut{color:var(--text-muted);font-family:var(--font-body);font-size:var(--text-xs);font-variant-numeric:tabular-nums;letter-spacing:.02em}\n.check{color:var(--accent);opacity:0;transform:scale(.6);transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-spring,.3s) var(--ease-spring,ease)}\n.check[data-on]{opacity:1;transform:none}\n.chevron{margin-right:-2px;color:var(--text-muted)}\n.trail{width:16px;flex:none}", {"root":"root","triggerContent":"triggerContent","shell":"shell","trigger":"trigger","check":"check","icon":"icon","panel":"panel","menu":"menu","viewport":"viewport","view":"view","list":"list","rowWrap":"rowWrap","heading":"heading","separator":"separator","item":"item","highlight":"highlight","chevron":"chevron","label":"label","shortcut":"shortcut","trail":"trail"});
A.reg(30600, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => s });
  var i = t(51811);
  let n = {
    name: "folder-plus",
    size: 24,
    node: [
      ["path", { d: "M12 10v6", key: "1bos4e" }],
      ["path", { d: "M9 13h6", key: "1uhe8q" }],
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
          key: "1kt360"
        }
      ]
    ]
  };
  n.node;
  let s = (0, i.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(46355, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { GlassMenuDemo: () => L, default: () => I });
  var i = t(95155), n = t(12115), s = t(5772), r = t(18310), l = t(80642), o = t(25354), d = t(54757), c = t(51128), u = t(99314), h = t(11414), p = t(30600), m = t(50825), g = t(25879), f = t(12363), v = t(78780), b = t(64577), w = t(76721), y = t(7770), k = t(21508), x = t.n(k);
  let _ = "__glass-menu-back", j = (e2) => "back" in e2 ? _ : e2.item.id, A = (e2) => "back" in e2 ? e2.back : e2.item;
  function M({
    groups: e2,
    children: a2,
    label: t2 = "Actions",
    triggerLabel: s2,
    open: d2,
    defaultOpen: c2 = false,
    onOpenChange: u2,
    onSelect: h2,
    align: p2 = "start",
    width: m2 = 256,
    className: g2,
    style: f2
  }) {
    let k2 = !!(0, r.I)(), N2 = (0, n.useId)().replace(/:/g, ""), z2 = (0, n.useRef)(null), D2 = (0, n.useRef)(null), P2 = (0, n.useRef)(null), S2 = (0, n.useRef)(/* @__PURE__ */ new Map()), C2 = (0, n.useRef)({ text: "", at: 0 }), [L2, I2] = (0, n.useState)(c2), W = d2 ?? L2, [R, T] = (0, n.useState)(null), [$, E] = (0, n.useState)(1), [O, H] = (0, n.useState)(null), [F, Y] = (0, n.useState)("auto"), [q, K] = (0, n.useState)({ w: 0, h: 40 }), V = (0, n.useCallback)(
      (e3) => {
        void 0 === d2 && I2(e3), u2?.(e3);
      },
      [d2, u2]
    ), B = (0, n.useMemo)(() => {
      if (!R) return null;
      for (let a3 of e2)
        for (let e3 of a3.items) if (e3.id === R && e3.items) return e3;
      return null;
    }, [e2, R]), U = (0, n.useMemo)(
      () => B ? [
        {
          back: {
            id: _,
            label: B.label,
            icon: (0, i.jsx)(v.A, {
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": true
            })
          }
        },
        ...(B.items ?? []).map((e3) => ({ item: e3, groupIndex: 1 }))
      ] : e2.flatMap(
        (e3, a3) => e3.items.map((t3) => ({
          item: t3,
          groupIndex: a3,
          groupLabel: e3.label
        }))
      ),
      [e2, B]
    ), J = (0, n.useMemo)(() => U.filter((e3) => !A(e3).disabled).map(j), [U]), X = R ?? "root", Q = U.some((e3) => !!A(e3).icon), Z = U.some((e3) => void 0 !== A(e3).checked || !!A(e3).items?.length);
    (0, n.useLayoutEffect)(() => {
      let e3 = D2.current;
      if (!e3) return;
      let a3 = () => K(
        (a4) => a4.w === e3.offsetWidth && a4.h === e3.offsetHeight ? a4 : { w: e3.offsetWidth, h: e3.offsetHeight }
      );
      a3();
      let t3 = new ResizeObserver(a3);
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    let G = (0, n.useCallback)(
      (e3) => {
        V(false), e3 && requestAnimationFrame(
          () => D2.current?.focus({ preventScroll: true })
        );
      },
      [V]
    ), ee = (a3, t3 = false) => {
      T(null), E(1), Y("auto");
      let i2 = e2.flatMap((e3) => e3.items).filter((e3) => !e3.disabled).map((e3) => e3.id);
      H(a3 ? (t3 ? i2.at(-1) : i2[0]) ?? null : null), V(true);
    }, [ea, et] = (0, n.useState)(W);
    ea !== W && (et(W), W || (T(null), H(null))), (0, n.useEffect)(() => {
      if (!W) return;
      let e3 = requestAnimationFrame(() => {
        let e4 = O ? S2.current.get(`${X}:${O}`) : P2.current;
        e4 && document.activeElement !== e4 && e4.focus({ preventScroll: true });
      });
      return () => cancelAnimationFrame(e3);
    }, [W, O, X]), (0, n.useEffect)(() => {
      if (!W) return;
      let e3 = (e4) => {
        z2.current && !z2.current.contains(e4.target) && G(false);
      };
      return document.addEventListener("pointerdown", e3, true), () => document.removeEventListener("pointerdown", e3, true);
    }, [W, G]);
    let ei = (0, n.useCallback)((e3) => {
      if (!e3) return;
      let a3 = () => Y(e3.offsetHeight);
      a3();
      let t3 = new ResizeObserver(a3);
      return t3.observe(e3), () => t3.disconnect();
    }, []), en = (e3) => {
      E(1), T(e3.id), H(e3.items?.find((e4) => !e4.disabled)?.id ?? _);
    }, es = () => {
      E(-1), T(null), H(R);
    }, er = (e3) => {
      let a3 = A(e3);
      if (!a3.disabled) {
        if ("back" in e3) return void es();
        if (a3.items?.length) return void en(a3);
        h2?.(a3.id, a3), a3.keepOpen || G(true);
      }
    }, el = (e3) => {
      if (!J.length) return;
      let a3 = O ? J.indexOf(O) : -1, t3 = "first" === e3 ? 0 : "last" === e3 ? J.length - 1 : "next" === e3 ? a3 < 0 ? 0 : (a3 + 1) % J.length : a3 < 0 ? J.length - 1 : (a3 - 1 + J.length) % J.length;
      H(J[t3]);
    }, eo = k2 ? { duration: 0 } : y.T.spring.morph, ed = k2 ? { duration: 0 } : y.T.spring.morph, ec = k2 ? { duration: 0 } : y.T.spring.smooth, eu = `${N2}-shell`, eh = `${N2}-menu`, ep = `min(${m2}px, calc(100vw - 24px))`, em = Math.min(q.h / 2, 22), eg = "end" === p2 ? `inset(0px 0px calc(100% - ${q.h}px) calc(100% - ${q.w}px) round ${em}px)` : `inset(0px calc(100% - ${q.w}px) calc(100% - ${q.h}px) 0px round ${em}px)`;
    return (0, i.jsxs)("div", {
      ref: z2,
      className: [x().root, g2].filter(Boolean).join(" "),
      style: f2,
      "data-open": W ? "" : void 0,
      children: [
        (0, i.jsxs)("button", {
          ref: D2,
          type: "button",
          className: x().trigger,
          "aria-haspopup": "menu",
          "aria-expanded": W,
          "aria-controls": W ? eh : void 0,
          "aria-label": s2,
          onClick: () => W ? G(true) : ee(false),
          onKeyDown: (e3) => {
            "ArrowDown" === e3.key || "Enter" === e3.key || " " === e3.key ? (e3.preventDefault(), ee(true)) : "ArrowUp" === e3.key && (e3.preventDefault(), ee(true, true));
          },
          children: [
            !W && (0, i.jsx)(o.PY1.span, {
              layoutId: eu,
              className: x().shell,
              style: { borderRadius: em },
              transition: eo,
              "aria-hidden": true
            }),
            (0, i.jsx)("span", { className: x().triggerContent, children: a2 })
          ]
        }),
        (0, i.jsx)(l.N, {
          children: W && (0, i.jsxs)(
            "div",
            {
              className: x().panel,
              "data-align": p2,
              style: { width: ep, minHeight: q.h },
              children: [
                (0, i.jsx)(o.PY1.div, {
                  layoutId: eu,
                  className: x().shell,
                  style: { borderRadius: 22 },
                  transition: eo,
                  "aria-hidden": true
                }),
                (0, i.jsx)(o.PY1.div, {
                  ref: P2,
                  id: eh,
                  role: "menu",
                  "aria-label": B ? B.label : t2,
                  tabIndex: -1,
                  className: x().menu,
                  onKeyDown: (e3) => {
                    let a3 = U.find((e4) => j(e4) === O);
                    switch (e3.key) {
                      case "ArrowDown":
                        e3.preventDefault(), el("next");
                        return;
                      case "ArrowUp":
                        e3.preventDefault(), el("prev");
                        return;
                      case "Home":
                      case "PageUp":
                        e3.preventDefault(), el("first");
                        return;
                      case "End":
                      case "PageDown":
                        e3.preventDefault(), el("last");
                        return;
                      case "Enter":
                      case " ":
                        e3.preventDefault(), a3 && er(a3);
                        return;
                      case "ArrowRight":
                        a3 && !("back" in a3) && a3.item.items?.length && !a3.item.disabled && (e3.preventDefault(), en(a3.item));
                        return;
                      case "ArrowLeft":
                        R && (e3.preventDefault(), es());
                        return;
                      case "Escape":
                        e3.preventDefault(), R ? es() : G(true);
                        return;
                      case "Tab":
                        e3.preventDefault(), G(true);
                        return;
                    }
                    if (1 === e3.key.length && !e3.metaKey && !e3.ctrlKey && !e3.altKey) {
                      let a4 = performance.now(), t3 = (a4 - C2.current.at < 700 ? C2.current.text : "") + e3.key.toLowerCase();
                      C2.current = { text: t3, at: a4 };
                      let i2 = O ? J.indexOf(O) + +(1 === t3.length) : 0, n2 = [...J.slice(i2), ...J.slice(0, i2)].find(
                        (e4) => A(U.find((a5) => j(a5) === e4)).label.toLowerCase().startsWith(t3)
                      );
                      n2 && H(n2);
                    }
                  },
                  onPointerLeave: () => H(null),
                  initial: k2 ? { opacity: 0 } : {
                    opacity: 0,
                    clipPath: eg,
                    filter: `blur(${y.T.blur.soft}px)`
                  },
                  animate: {
                    opacity: 1,
                    clipPath: k2 ? "none" : "end" === p2 ? "inset(0px 0px calc(0% - 0px) calc(0% - 0px) round 22px)" : "inset(0px calc(0% - 0px) calc(0% - 0px) 0px round 22px)",
                    filter: "blur(0px)",
                    transition: k2 ? { duration: 0 } : {
                      opacity: {
                        duration: y.T.duration.fast,
                        delay: 0.06
                      },
                      filter: {
                        duration: y.T.duration.standard,
                        delay: 0.06
                      },
                      clipPath: eo
                    }
                  },
                  exit: k2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    clipPath: eg,
                    filter: `blur(${y.T.blur.soft}px)`,
                    transition: {
                      opacity: { duration: y.T.duration.instant },
                      filter: { duration: y.T.duration.instant },
                      clipPath: eo
                    }
                  },
                  children: (0, i.jsx)(o.PY1.div, {
                    className: x().viewport,
                    initial: false,
                    animate: { height: F },
                    transition: ec,
                    children: (0, i.jsx)(l.N, {
                      initial: false,
                      mode: "popLayout",
                      custom: $,
                      children: (0, i.jsx)(
                        o.PY1.div,
                        {
                          className: x().view,
                          custom: $,
                          variants: {
                            enter: (e3) => k2 ? { opacity: 1 } : { x: 36 * e3, opacity: 0 },
                            center: { x: 0, opacity: 1 },
                            exit: (e3) => k2 ? { opacity: 0 } : { x: -36 * e3, opacity: 0 }
                          },
                          initial: "enter",
                          animate: "center",
                          exit: "exit",
                          transition: ec,
                          children: (0, i.jsx)("div", {
                            ref: ei,
                            className: x().list,
                            children: U.map((e3, a3) => {
                              let t3 = A(e3), n2 = j(e3), s3 = O === n2, r2 = a3 > 0 ? U[a3 - 1] : null, l2 = !("back" in e3) && r2 && !("back" in r2) && r2.groupIndex !== e3.groupIndex, d3 = !("back" in e3) && e3.groupLabel && (!r2 || "back" in r2 || r2.groupIndex !== e3.groupIndex) ? e3.groupLabel : null, c3 = void 0 !== t3.checked;
                              return (0, i.jsxs)(
                                "div",
                                {
                                  role: "none",
                                  className: x().rowWrap,
                                  children: [
                                    (l2 || "back" in (r2 ?? e3) && 1 === a3) && (0, i.jsx)("div", {
                                      role: "separator",
                                      className: x().separator
                                    }),
                                    d3 && (0, i.jsx)("div", {
                                      role: "presentation",
                                      className: x().heading,
                                      children: d3
                                    }),
                                    (0, i.jsxs)("button", {
                                      ref: (e4) => {
                                        let a4 = `${X}:${n2}`;
                                        e4 ? S2.current.set(a4, e4) : S2.current.delete(a4);
                                      },
                                      type: "button",
                                      role: c3 ? "menuitemcheckbox" : "menuitem",
                                      "aria-checked": c3 ? !!t3.checked : void 0,
                                      "aria-haspopup": t3.items?.length ? "menu" : void 0,
                                      "aria-disabled": t3.disabled || void 0,
                                      tabIndex: -1,
                                      className: x().item,
                                      "data-active": s3 ? "" : void 0,
                                      "data-danger": t3.danger ? "" : void 0,
                                      "data-back": "back" in e3 ? "" : void 0,
                                      onPointerMove: () => {
                                        t3.disabled || O === n2 || H(n2);
                                      },
                                      onClick: () => er(e3),
                                      children: [
                                        s3 && (0, i.jsx)(o.PY1.span, {
                                          layoutId: `${N2}-glide-${X}`,
                                          className: x().highlight,
                                          transition: ed,
                                          initial: !k2 && { opacity: 0 },
                                          animate: { opacity: 1 },
                                          "aria-hidden": true
                                        }),
                                        (t3.icon || Q) && (0, i.jsx)("span", {
                                          className: x().icon,
                                          "aria-hidden": true,
                                          children: t3.icon
                                        }),
                                        (0, i.jsx)("span", {
                                          className: x().label,
                                          children: t3.label
                                        }),
                                        t3.shortcut && (0, i.jsx)("kbd", {
                                          className: x().shortcut,
                                          children: t3.shortcut
                                        }),
                                        c3 && (0, i.jsx)(b.A, {
                                          className: x().check,
                                          "data-on": t3.checked ? "" : void 0,
                                          size: 16,
                                          strokeWidth: 2,
                                          "aria-hidden": true
                                        }),
                                        t3.items?.length ? (0, i.jsx)(w.A, {
                                          className: x().chevron,
                                          size: 16,
                                          strokeWidth: 1.75,
                                          "aria-hidden": true
                                        }) : !c3 && Z ? (0, i.jsx)("span", {
                                          className: x().trail,
                                          "aria-hidden": true
                                        }) : null
                                      ]
                                    })
                                  ]
                                },
                                n2
                              );
                            })
                          })
                        },
                        X
                      )
                    })
                  })
                })
              ]
            },
            "panel"
          )
        })
      ]
    });
  }
  var N = t(67752), z = t(90488), D = t.n(z);
  let P = (0, N.jW)("pool-house"), S = { size: 16, strokeWidth: 1.75, "aria-hidden": true }, C = ["Lisbon trip", "Architecture", "Summer 2026"];
  function L() {
    let e2 = (0, r.I)(), [a2, t2] = (0, n.useState)(false), [v2, b2] = (0, n.useState)(false), [w2, y2] = (0, n.useState)(null), k2 = (0, n.useRef)(0), x2 = (e3, a3 = false) => {
      k2.current += 1, y2({ id: k2.current, text: e3, undo: a3 });
    }, _2 = [
      {
        id: "quick",
        items: [
          {
            id: "favorite",
            label: "Favorite",
            icon: (0, i.jsx)(d.A, { ...S }),
            shortcut: "F",
            checked: a2,
            keepOpen: true
          },
          {
            id: "link",
            label: "Copy link",
            icon: (0, i.jsx)(c.A, { ...S }),
            shortcut: "\u2318L"
          },
          {
            id: "duplicate",
            label: "Duplicate",
            icon: (0, i.jsx)(u.A, { ...S }),
            shortcut: "\u2318D"
          }
        ]
      },
      {
        id: "organize",
        items: [
          {
            id: "move",
            label: "Move to",
            icon: (0, i.jsx)(h.A, { ...S }),
            items: [
              ...C.map((e3) => ({ id: `album:${e3}`, label: e3 })),
              {
                id: "album:new",
                label: "New album",
                icon: (0, i.jsx)(p.A, { ...S })
              }
            ]
          },
          {
            id: "download",
            label: "Download",
            icon: (0, i.jsx)(m.A, { ...S }),
            shortcut: "\u21E7\u2318S"
          }
        ]
      },
      {
        id: "danger",
        items: [
          {
            id: "delete",
            label: "Delete",
            icon: (0, i.jsx)(g.A, { ...S }),
            shortcut: "\u232B",
            danger: true,
            disabled: v2
          }
        ]
      }
    ];
    return (0, i.jsx)("div", {
      className: D().demo,
      children: (0, i.jsxs)("div", {
        className: D().frame,
        children: [
          (0, i.jsx)(s.default, {
            src: P.src,
            alt: P.alt,
            fill: true,
            sizes: "(max-width: 640px) 100vw, 760px",
            className: D().image,
            "data-deleted": v2 ? "" : void 0,
            priority: true,
            draggable: false
          }),
          (0, i.jsxs)("div", {
            className: D().top,
            children: [
              (0, i.jsxs)(M, {
                groups: _2,
                label: "Photo actions",
                onSelect: (e3) => {
                  if ("favorite" === e3) {
                    t2((e4) => !e4), x2(a2 ? "Removed from favorites" : "Added to favorites");
                    return;
                  }
                  return "link" === e3 ? x2("Link copied") : "duplicate" === e3 ? x2("Duplicated to Recents") : "download" === e3 ? x2("Saved to Downloads") : "delete" === e3 ? (b2(true), x2("Moved to trash", true)) : "album:new" === e3 ? x2("Added to a new album") : e3.startsWith("album:") ? x2(`Moved to ${e3.slice(6)}`) : void 0;
                },
                children: [
                  (0, i.jsx)("span", { children: "Pool house" }),
                  (0, i.jsx)(f.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": true
                  })
                ]
              }),
              (0, i.jsx)(l.N, {
                children: a2 && (0, i.jsx)(
                  o.PY1.span,
                  {
                    className: D().badge,
                    role: "img",
                    "aria-label": "Favorite",
                    initial: !e2 && { scale: 0.4, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    exit: { scale: e2 ? 1 : 0.4, opacity: 0 },
                    transition: e2 ? { duration: 0 } : { type: "spring", visualDuration: 0.34, bounce: 0 },
                    children: (0, i.jsx)(d.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      fill: "currentColor",
                      "aria-hidden": true
                    })
                  },
                  "fav"
                )
              })
            ]
          }),
          (0, i.jsx)("div", {
            className: D().bottom,
            "aria-live": "polite",
            children: (0, i.jsx)(l.N, {
              mode: "popLayout",
              initial: false,
              children: w2 && (0, i.jsxs)(
                o.PY1.div,
                {
                  className: D().note,
                  initial: e2 ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.96 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  exit: e2 ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.96 },
                  transition: e2 ? { duration: 0 } : { type: "spring", visualDuration: 0.36, bounce: 0 },
                  children: [
                    (0, i.jsx)("span", { children: w2.text }),
                    w2.undo && (0, i.jsx)("button", {
                      type: "button",
                      className: D().undo,
                      onClick: () => {
                        b2(false), x2("Restored");
                      },
                      children: "Undo"
                    })
                  ]
                },
                w2.id
              )
            })
          })
        ]
      })
    });
  }
  let I = L;
}

__m(__module,__exports,__require);
});
A.reg(51128, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let o = {
    name: "link-2",
    size: 24,
    node: [
      ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
      ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
      ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
    ]
  };
  o.node;
  let i = (0, r.A)(o);
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
A.regCss(90488, ".demo{width:100%;max-width:760px;margin-inline:auto;padding:16px 0;font-family:var(--font-body);letter-spacing:var(--tracking-body)}\n.frame{position:relative;isolation:isolate;height:clamp(480px,64vw,540px);overflow:hidden;border-radius:var(--radius-surface);background:var(--surface-muted)}\n.image{object-fit:cover;user-select:none;transition:filter var(--duration-considered) var(--ease-standard),opacity var(--duration-considered) var(--ease-standard),transform var(--duration-considered) var(--ease-standard)}\n.image[data-deleted]{filter:grayscale(1) blur(6px);opacity:.55;transform:scale(1.04)}\n@media (prefers-reduced-motion:reduce){.image{transition:none}\n.top{position:absolute;inset:14px 14px auto;z-index:2;display:flex;align-items:flex-start;justify-content:space-between;gap:12px}\n.badge{display:grid;width:40px;height:40px;flex:none;place-items:center;border:1px solid rgb(255 255 255/.35);border-radius:50%;background:color-mix(in oklab,var(--surface) 60%,transparent);color:var(--accent);box-shadow:inset 0 1px 0 rgb(255 255 255/.5),0 8px 24px -8px rgb(0 0 0/.25);-webkit-backdrop-filter:blur(20px) saturate(1.7);backdrop-filter:blur(20px) saturate(1.7)}\n:root[data-theme=dark] .badge,:root[data-theme=dark] .note{border-color:rgb(255 255 255/.1);box-shadow:inset 0 1px 0 rgb(255 255 255/.12),0 10px 28px -8px rgb(0 0 0/.5)}\n.bottom{position:absolute;right:14px;bottom:14px;left:14px;z-index:1;display:flex;justify-content:center;pointer-events:none}\n.note{display:inline-flex;height:40px;align-items:center;gap:12px;padding:0 6px 0 16px;border:1px solid color-mix(in oklab,var(--foreground) 10%,transparent);border-radius:var(--radius-pill);background:color-mix(in oklab,var(--surface) 62%,transparent);color:var(--foreground);font-size:var(--text-sm);white-space:nowrap;pointer-events:auto;box-shadow:inset 0 1px 0 rgb(255 255 255/.5),0 10px 28px -8px rgb(0 0 0/.25);-webkit-backdrop-filter:blur(24px) saturate(1.7);backdrop-filter:blur(24px) saturate(1.7)}\n.note:not(:has(.undo)){padding-right:16px}\n.undo{height:28px;padding:0 12px;border:0;border-radius:var(--radius-pill);background:var(--accent);color:var(--accent-foreground);font:inherit;font-size:var(--text-xs);font-weight:500;cursor:pointer}", {"demo":"demo","frame":"frame","image":"image","top":"top","badge":"badge","note":"note","bottom":"bottom","undo":"undo"});
A.cssFor("glass-menu", [21508,90488]);
A.item("glass-menu", {entry:46355, export:"GlassMenuDemo", kind:"component", tier:"pro", unresolved:[]});
})();