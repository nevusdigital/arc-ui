/* workspace-sidebar (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(6035, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => l });
  var r = t(51811);
  let n = {
    name: "map",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
          key: "169xi5"
        }
      ],
      ["path", { d: "M15 5.764v15", key: "1pn4in" }],
      ["path", { d: "M9 3.236v15", key: "1uimfh" }]
    ]
  };
  n.node;
  let l = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(10294, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => o });
  var n = r(51811);
  let l = {
    name: "frame",
    size: 24,
    node: [
      ["line", { x1: "22", x2: "2", y1: "6", y2: "6", key: "15w7dq" }],
      ["line", { x1: "22", x2: "2", y1: "18", y2: "18", key: "1ip48p" }],
      ["line", { x1: "6", x2: "6", y1: "2", y2: "22", key: "a2lnyx" }],
      ["line", { x1: "18", x2: "18", y1: "2", y2: "22", key: "8vb6jd" }]
    ]
  };
  l.node;
  let o = (0, n.A)(l);
}

__m(__module,__exports,__require);
});
A.reg(29298, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { x: () => y });
  var r = n(95155), o = n(5556), l = n(12115), a = n(41369), i = n(24857), d = n(28819), u = n(56260), c = n(78170);
  function s(e2, t2) {
    return e2 < t2.min ? t2.min - e2 : e2 > t2.max ? e2 - t2.max : 0;
  }
  function f(e2, t2) {
    let n2 = Math.max(t2.x.min - e2.x, 0, e2.x - t2.x.max), r2 = Math.max(t2.y.min - e2.y, 0, e2.y - t2.y.max);
    return n2 * n2 + r2 * r2;
  }
  let p = (e2, t2) => e2.max <= t2.min || t2.max <= e2.min, y = (0, l.forwardRef)(function({ children: e2, as: t2 = "ul", axis: n2, onReorder: y2, values: h, ...m }, g) {
    let x = (0, d.M)(() => i.P[t2]), v = (0, l.useRef)(/* @__PURE__ */ new Map()), [k, M] = (0, l.useState)("y"), A = (0, l.useRef)(false), w = (0, l.useRef)(null), b = n2 || k;
    (0, o.V)(
      !!h,
      "Reorder.Group must be provided a values prop",
      "reorder-values"
    );
    let j = new Set(h);
    v.current.forEach((e3, t3) => {
      j.has(t3) || v.current.delete(t3);
    }), (0, l.useEffect)(() => {
      A.current = false;
    });
    let C = { overflowAnchor: "none", ...m.style };
    return (0, r.jsx)(x, {
      ...m,
      style: C,
      ref: (e3) => {
        w.current = e3, "function" == typeof g ? g(e3) : g && (g.current = e3);
      },
      ignoreStrict: true,
      children: (0, r.jsx)(a.T.Provider, {
        value: {
          axis: b,
          groupRef: w,
          registerItem: (e3, t3) => {
            if (v.current.set(e3, t3), !n2) {
              let e4 = (function(e5) {
                let t4 = false, n3 = false;
                for (let r2 = 0; r2 < e5.length; r2++)
                  for (let o2 = r2 + 1; o2 < e5.length; o2++)
                    if (t4 || (t4 = p(e5[r2].x, e5[o2].x)), n3 || (n3 = p(e5[r2].y, e5[o2].y)), t4 && n3)
                      return "xy";
                return t4 ? "x" : "y";
              })(
                h.flatMap((e5) => {
                  let t4 = v.current.get(e5);
                  return t4 ? [t4] : [];
                })
              );
              e4 !== k && M(e4);
            }
          },
          updateOrder: (e3, t3, n3) => {
            if (A.current) return;
            let r2 = h.flatMap((e4) => {
              let t4 = v.current.get(e4);
              return t4 ? [{ value: e4, layout: t4 }] : [];
            }), o2 = (function(e4, t4, n4, r3, o3, l2 = "ltr") {
              let a2 = e4.findIndex((e5) => e5.value === t4);
              if (-1 === a2) return e4;
              if ("xy" === o3) {
                let t5, { layout: r4 } = e4[a2], o4 = {
                  x: (0, u.k)(r4.x.min, r4.x.max, 0.5) + n4.x,
                  y: (0, u.k)(r4.y.min, r4.y.max, 0.5) + n4.y
                }, m3 = (t5 = [], e4.forEach((e5) => {
                  let { min: n5, max: r5 } = e5.layout.y, o5 = t5[t5.length - 1];
                  !o5 || n5 >= o5.max || r5 <= o5.min ? t5.push({ items: [e5], min: n5, max: r5 }) : (o5.items.push(e5), o5.min = Math.min(o5.min, n5), o5.max = Math.max(o5.max, r5));
                }), t5), g3 = m3.find((t6) => t6.items.includes(e4[a2])), x3 = m3.reduce((e5, t6) => s(o4.y, t6) < s(o4.y, e5) ? t6 : e5);
                if (x3 !== g3) {
                  var i2, d2, p2, y3, h2;
                  let t6, n5, r5, c2;
                  return i2 = e4, d2 = a2, p2 = o4.x, y3 = x3, h2 = l2, t6 = i2.filter((e5, t7) => t7 !== d2), r5 = (n5 = y3.items.find((e5) => {
                    let t7 = (0, u.k)(e5.layout.x.min, e5.layout.x.max, 0.5);
                    return "ltr" === h2 ? p2 < t7 : p2 > t7;
                  })) ? t6.indexOf(n5) : t6.indexOf(y3.items[y3.items.length - 1]) + 1, (c2 = [...t6]).splice(r5, 0, i2[d2]), c2.every((e5, t7) => e5 === i2[t7]) ? i2 : c2;
                }
                let v3 = f(o4, r4), k3 = -1, M2 = v3;
                return e4.forEach((e5, t6) => {
                  if (t6 === a2) return;
                  let n5 = f(o4, e5.layout);
                  n5 < M2 && (k3 = t6, M2 = n5);
                }), -1 === k3 ? e4 : (0, c.Pe)(e4, a2, a2 + Math.sign(k3 - a2));
              }
              if (!r3[o3]) return e4;
              let m2 = r3[o3] > 0 ? 1 : -1, g2 = e4[a2 + m2];
              if (!g2) return e4;
              let x2 = e4[a2].layout[o3], v2 = g2.layout[o3], k2 = (0, u.k)(v2.min, v2.max, 0.5);
              return 1 === m2 && x2.max + n4[o3] > k2 || -1 === m2 && x2.min + n4[o3] < k2 ? (0, c.Pe)(e4, a2, a2 + m2) : e4;
            })(
              r2,
              e3,
              t3,
              n3,
              b,
              w.current?.ownerDocument.defaultView?.getComputedStyle(
                w.current
              ).direction === "rtl" ? "rtl" : "ltr"
            );
            if (r2 !== o2) {
              A.current = true;
              let e4 = [...h], t4 = r2.map(({ value: e5 }) => h.indexOf(e5));
              o2.forEach(({ value: n4 }, r3) => {
                e4[t4[r3]] = n4;
              }), y2(e4);
            }
          }
        },
        children: e2
      })
    });
  });
}

__m(__module,__exports,__require);
});
A.regCss(33627, ".demo{display:flex;height:704px;min-width:0}\n.demo .sidebar{height:auto;flex:none}\nmain[data-layout=app] .demo{padding:8px}\n@media (max-width:380px){.demo{height:660px}\n@media (max-width:640px){.demo{height:auto;flex-direction:column;align-self:start}", {"demo":"demo","sidebar":"sidebar"});
A.reg(41369, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { T: () => r });
  let r = (0, n(12115).createContext)(null);
}

__m(__module,__exports,__require);
});
A.reg(43298, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { L: () => h });
  var s = a(95155), r = a(12115), i = a(18310), n = a(80642), o = a(25354), l = a(65377), d = a(9005), c = a(7770), u = a(79698), p = a.n(u);
  let h = (0, r.forwardRef)(function({ label: e2, value: t2, onValueChange: a2, id: u2, className: h2, ...m }, y) {
    let g = (0, r.useId)(), w = u2 ?? g, x = (0, i.I)(), f = (0, r.useRef)(null);
    return (0, s.jsxs)("div", {
      className: p().field,
      children: [
        (0, s.jsx)("label", { htmlFor: w, children: e2 }),
        (0, s.jsxs)("div", {
          className: p().shell,
          "data-filled": t2 ? "true" : void 0,
          children: [
            (0, s.jsx)(l.A, { width: 18, height: 18, "aria-hidden": "true" }),
            (0, s.jsx)("input", {
              ...m,
              ref: (e3) => {
                f.current = e3, "function" == typeof y ? y(e3) : y && (y.current = e3);
              },
              id: w,
              type: "search",
              value: t2,
              onChange: (e3) => a2(e3.target.value),
              className: [p().input, h2].filter(Boolean).join(" ")
            }),
            (0, s.jsx)("span", {
              className: p().clearSlot,
              children: (0, s.jsx)(n.N, {
                initial: false,
                children: t2 ? (0, s.jsx)(
                  o.PY1.button,
                  {
                    type: "button",
                    tabIndex: 0,
                    onClick: function() {
                      a2(""), f.current?.focus();
                    },
                    "aria-label": "Clear search",
                    initial: x ? { opacity: 0 } : {
                      opacity: 0,
                      scale: 0.8,
                      filter: `blur(${c.T.blur.subtle}px)`
                    },
                    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
                    exit: x ? { opacity: 0, transition: { duration: 0 } } : {
                      opacity: 0,
                      scale: 0.8,
                      filter: `blur(${c.T.blur.subtle}px)`,
                      transition: {
                        duration: c.T.duration.instant,
                        ease: [...c.T.ease.standard]
                      }
                    },
                    whileTap: x ? void 0 : {
                      scale: 0.96,
                      transition: {
                        duration: c.T.duration.instant,
                        ease: [...c.T.ease.standard]
                      }
                    },
                    transition: x ? { duration: c.T.duration.instant } : {
                      ...c.T.spring.snappy,
                      opacity: { duration: c.T.duration.fast },
                      filter: { duration: c.T.duration.fast }
                    },
                    children: (0, s.jsx)(d.A, {
                      width: 16,
                      height: 16,
                      "aria-hidden": "true"
                    })
                  },
                  "clear"
                ) : null
              })
            })
          ]
        })
      ]
    });
  });
}

__m(__module,__exports,__require);
});
A.reg(44952, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { m: () => a });
  var r = n(28819);
  class o {
    constructor() {
      this.componentControls = /* @__PURE__ */ new Set();
    }
    subscribe(e2) {
      return this.componentControls.add(e2), () => this.componentControls.delete(e2);
    }
    start(e2, t2) {
      this.componentControls.forEach((n2) => {
        n2.start(e2.nativeEvent || e2, t2);
      });
    }
    cancel() {
      this.componentControls.forEach((e2) => {
        e2.cancel();
      });
    }
    stop() {
      this.componentControls.forEach((e2) => {
        e2.stop();
      });
    }
  }
  let l = () => new o();
  function a() {
    return (0, r.M)(l);
  }
}

__m(__module,__exports,__require);
});
A.reg(56255, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { N: () => x });
  var r = n(95155), o = n(51469), l = n(5556), a = n(12115), i = n(41369), d = n(24857), u = n(28819), c = n(28245), s = n(55809);
  let f = /* @__PURE__ */ new Set(["auto", "scroll"]), p = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap(), h = null;
  function m(e2, t2) {
    let n2 = e2?.parentElement;
    for (; n2; ) {
      if ((function(e3, t3) {
        let n3 = getComputedStyle(e3), r2 = "x" === t3 ? n3.overflowX : n3.overflowY, o2 = e3 === document.body || e3 === document.documentElement;
        return f.has(r2) || o2;
      })(n2, t2))
        return n2;
      n2 = n2.parentElement;
    }
    return null;
  }
  function g(e2, t2 = 0) {
    return (0, o.S)(e2) ? e2 : (0, c.d)(t2);
  }
  let x = (0, a.forwardRef)(function({
    children: e2,
    style: t2 = {},
    value: n2,
    as: o2 = "li",
    onDrag: c2,
    onDragEnd: f2,
    layout: x2 = true,
    ...v
  }, k) {
    let M = (0, u.M)(() => d.P[o2]), A = (0, a.useContext)(i.T), w = { x: g(t2.x), y: g(t2.y) }, b = (0, s.G)([w.x, w.y], ([e3, t3]) => e3 || t3 ? 1 : "unset");
    (0, l.V)(
      !!A,
      "Reorder.Item must be a child of Reorder.Group",
      "reorder-item-child"
    );
    let { axis: j, registerItem: C, updateOrder: D, groupRef: z } = A, R = "xy" === j || j;
    return (0, r.jsx)(M, {
      drag: R,
      ...v,
      dragSnapToOrigin: true,
      style: { ...t2, x: w.x, y: w.y, zIndex: b },
      layout: x2,
      onDrag: (e3, t3) => {
        let { velocity: r2, point: o3 } = t3;
        D(n2, { x: w.x.get(), y: w.y.get() }, r2);
        let l2 = "xy" === j ? Math.abs(r2.x) > Math.abs(r2.y) ? "x" : "y" : j;
        !(function(e4, t4, n3, r3) {
          if (!e4) return;
          h = e4;
          let o4 = m(e4, n3);
          if (!o4) return;
          let { amount: l3, edge: a2 } = (function(e5, t5, n4) {
            let r4 = t5.getBoundingClientRect(), o5 = "x" === n4 ? Math.max(0, r4.left) : Math.max(0, r4.top), l4 = "x" === n4 ? Math.min(window.innerWidth, r4.right) : Math.min(window.innerHeight, r4.bottom), a3 = e5 - o5, i3 = l4 - e5;
            if (a3 < 50) {
              let e6 = 1 - a3 / 50;
              return { amount: -25 * e6 * e6, edge: "start" };
            }
            if (i3 < 50) {
              let e6 = 1 - i3 / 50;
              return { amount: 25 * e6 * e6, edge: "end" };
            }
            return { amount: 0, edge: null };
          })(t4 - ("x" === n3 ? window.scrollX : window.scrollY), o4, n3);
          if (null === a2) {
            y.delete(o4), p.delete(o4);
            return;
          }
          let i2 = y.get(o4), d2 = o4 === document.body || o4 === document.documentElement;
          if (i2 !== a2) {
            if (!("start" === a2 && r3 < 0 || "end" === a2 && r3 > 0)) return;
            y.set(o4, a2);
            let e5 = "x" === n3 ? o4.scrollWidth - (d2 ? window.innerWidth : o4.clientWidth) : o4.scrollHeight - (d2 ? window.innerHeight : o4.clientHeight);
            p.set(o4, e5);
          }
          if (l3 > 0) {
            let e5 = p.get(o4);
            if (("x" === n3 ? d2 ? window.scrollX : o4.scrollLeft : d2 ? window.scrollY : o4.scrollTop) >= e5)
              return;
          }
          "x" === n3 ? d2 ? window.scrollBy({ left: l3 }) : o4.scrollLeft += l3 : d2 ? window.scrollBy({ top: l3 }) : o4.scrollTop += l3;
        })(z.current, o3[l2], l2, r2[l2]), c2 && c2(e3, t3);
      },
      onDragEnd: (e3, t3) => {
        if (h) {
          let e4 = m(h, "y");
          e4 && (y.delete(e4), p.delete(e4));
          let t4 = m(h, "x");
          t4 && t4 !== e4 && (y.delete(t4), p.delete(t4)), h = null;
        }
        f2 && f2(e3, t3);
      },
      onLayoutMeasure: (e3) => {
        C(n2, e3);
      },
      ref: k,
      ignoreStrict: true,
      children: e2
    });
  });
}

__m(__module,__exports,__require);
});
A.regCss(64444, ".frame,.frame.frame{position:relative;display:inline-block;box-sizing:content-box;padding:.5em .5em .5em .2em;margin:-.5em -.5em -.5em -.2em;text-align:start;white-space:nowrap;mask-image:linear-gradient(90deg,#000 calc(100% - .5em),transparent)}\n.track{position:relative;display:inline-block;white-space:nowrap}\n.glyph{display:inline-block;white-space:pre;transform-origin:50% 60%}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0;user-select:none}", {});
A.reg(65342, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "chevrons-up-down",
    size: 24,
    node: [
      ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
      ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(79698, ".field{display:grid;gap:var(--space-2);min-width:0}\n.field label{font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body)}\n.shell{display:flex;min-height:var(--control-height-md);align-items:center;gap:var(--space-2);border:1px solid var(--border-strong);border-radius:var(--radius-control);padding:0 var(--space-3);background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.shell:hover:not(:focus-within){border-color:var(--foreground)}\n.shell:focus-within{border-color:var(--foreground)}\n.shell>svg{flex:0 0 auto;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}\n.shell:focus-within>svg,.shell[data-filled=true]>svg{color:var(--foreground)}\n.clearSlot,.shell button{display:grid;width:24px;height:24px;flex:0 0 auto;place-items:center}\n.shell button{border:0;border-radius:var(--radius-control);background:transparent;color:var(--text-muted);transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.shell button:hover{background:var(--surface-muted);color:var(--foreground)}\n@media (prefers-reduced-motion:reduce){.shell,.shell button,.shell>svg{transition:none}\n.input{width:100%;min-width:0;border:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:0}\n.input:focus-visible{outline:0}\n.input::placeholder{color:var(--text-muted)}\n.input::-webkit-search-cancel-button{display:none}", {});
A.regCss(80112, ".workspace-sidebar_sidebar__rMteM{--full:272px;--row:32px;--row-radius:8px;--tone-blue:oklch(60% .13 252);--tone-green:oklch(63% .13 155);--tone-violet:oklch(57% .15 295);--tone-amber:oklch(73% .14 75);--tone-coral:oklch(64% .15 32);--tone-slate:oklch(62% .025 250);--row-hover:color-mix(in oklab,var(--foreground) 4.5%,transparent);--row-active:color-mix(in oklab,var(--foreground) 7%,transparent);position:relative;display:flex;width:min(100%,var(--full));max-width:100%;height:704px;min-height:0;flex-direction:column;overflow:hidden;border:1px solid var(--border);border-radius:16px;background:color-mix(in oklab,var(--surface-muted) 55%,var(--surface));color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}:root[data-theme=dark] .workspace-sidebar_sidebar__rMteM{--tone-blue:oklch(72% .12 252);--tone-green:oklch(74% .13 155);--tone-violet:oklch(71% .13 295);--tone-amber:oklch(81% .13 80);--tone-coral:oklch(74% .13 32);--tone-slate:oklch(70% .02 250);--row-hover:color-mix(in oklab,var(--foreground) 5%,transparent);--row-active:color-mix(in oklab,var(--foreground) 8%,transparent);background:color-mix(in oklab,var(--background) 60%,var(--surface))}.workspace-sidebar_srOnly__xJdbk{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}.workspace-sidebar_header__U5FXV{display:grid;grid-template-columns:minmax(0,1fr);gap:8px;padding:8px 12px 4px}.workspace-sidebar_switcher__724fK{display:grid;width:100%;min-height:44px;grid-template-columns:32px minmax(0,1fr) 16px;align-items:center;gap:10px;border:0;border-radius:10px;padding:6px 10px 6px 4px;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard)}.workspace-sidebar_switcher__724fK:active,.workspace-sidebar_switcher__724fK[aria-expanded=true]{background:var(--row-active)}.workspace-sidebar_switcherText__PyH6i{display:grid;min-width:0}.workspace-sidebar_workspaceName__BRaI6{overflow:hidden;font-size:var(--text-sm);font-weight:500;line-height:1.35}.workspace-sidebar_workspaceMeta__mXKnU{color:var(--text-muted);font-size:var(--text-xs);line-height:1.4}.workspace-sidebar_chevron__E_kqg{color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}.workspace-sidebar_switcher__724fK[aria-expanded=true] .workspace-sidebar_chevron__E_kqg{color:var(--foreground)}.workspace-sidebar_mark___Z0qS{position:relative;display:grid;width:32px;height:32px;flex:none}.workspace-sidebar_markSmall__pes9z{width:28px;height:28px}.workspace-sidebar_markFace__feqwV{position:relative;display:grid;grid-area:1/1;place-items:center;overflow:hidden;border-radius:9px;background:var(--accent);color:var(--accent-foreground);font-size:var(--text-sm);font-weight:500;letter-spacing:0}.workspace-sidebar_markSmall__pes9z .workspace-sidebar_markFace__feqwV{border-radius:8px;font-size:var(--text-xs)}.workspace-sidebar_markFace__feqwV[data-photo]{background:var(--surface-muted);box-shadow:inset 0 0 0 1px var(--border)}.workspace-sidebar_markFace__feqwV img{object-fit:cover}.workspace-sidebar_markFace__feqwV[data-logo]{color:#fff;box-shadow:inset 0 0 0 1px rgb(255 255 255/.14),inset 0 -8px 12px -8px rgb(0 0 0/.25)}.workspace-sidebar_markFace__feqwV[data-logo] svg{width:62%;height:62%}.workspace-sidebar_swap__kgqst{position:relative;display:block;min-width:0}.workspace-sidebar_swapText__HBdHL{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.workspace-sidebar_searchRow__YdjCp{position:relative;min-width:0}.workspace-sidebar_searchClip__l_krw{min-width:0;margin-right:44px;overflow:hidden}.workspace-sidebar_search__AqWzJ{width:100%}.workspace-sidebar_searchClip__l_krw[data-frozen] .workspace-sidebar_search__AqWzJ{width:var(--search-width,100%)}.workspace-sidebar_toggle___Y1Ta{position:absolute;top:50%;right:3px;display:grid;width:32px;height:32px;margin-top:-16px;place-items:center;border:0;border-radius:8px;padding:0;background:transparent;color:var(--text-secondary);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}.workspace-sidebar_toggle___Y1Ta:active{background:var(--row-active);color:var(--foreground)}.workspace-sidebar_search__AqWzJ label{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}.workspace-sidebar_search__AqWzJ div:has(>input){min-height:32px;border-color:var(--border);border-radius:8px;padding:0 8px 0 10px;background:var(--surface)}.workspace-sidebar_search__AqWzJ div:has(>input)>svg{width:16px;height:16px}.workspace-sidebar_scroll__CBYIH{position:relative;min-height:0;flex:1;overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain;padding:0 12px 12px;scrollbar-width:thin}.workspace-sidebar_stack__pB6PO{display:grid;grid-template-columns:minmax(0,1fr)}.workspace-sidebar_panel__TX4wA{position:relative;display:grid;grid-template-columns:minmax(0,1fr);min-width:0;grid-area:1/1;align-content:start}.workspace-sidebar_section___re_e{display:grid;grid-template-columns:minmax(0,1fr);min-width:0}.workspace-sidebar_sectionTitle__H7RVe{position:relative;height:32px;margin:0;overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);font-weight:500;line-height:1.4}.workspace-sidebar_sectionText__Sp0Qm{position:absolute;bottom:7px;left:12px;line-height:1;white-space:nowrap}.workspace-sidebar_divider__pZukW{position:absolute;top:8px;right:8px;left:8px;height:1px;background:var(--border)}.workspace-sidebar_list__TuVZs{position:relative;display:grid;grid-template-columns:minmax(0,1fr);margin:0;padding:0;list-style:none}.workspace-sidebar_item__vZkiJ{position:relative;min-width:0;border-radius:var(--row-radius);-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.workspace-sidebar_item__vZkiJ[data-lifted]{z-index:2;background:var(--surface-raised);box-shadow:var(--shadow-floating)}.workspace-sidebar_row__flk8G{position:relative;display:grid;width:100%;height:var(--row);grid-template-columns:16px minmax(0,1fr) auto;align-items:center;gap:10px;border:0;border-radius:var(--row-radius);padding:0 10px 0 12px;background:transparent;color:var(--text-secondary);font:inherit;text-align:left;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard);-webkit-tap-highlight-color:transparent}.workspace-sidebar_row__flk8G>:not(.workspace-sidebar_highlight__jq7F5){position:relative;z-index:1}.workspace-sidebar_row__flk8G[aria-current=page]{color:var(--foreground)}.workspace-sidebar_item__vZkiJ[data-lifted] .workspace-sidebar_row__flk8G{cursor:grabbing}.workspace-sidebar_highlight__jq7F5{position:absolute;inset:0;z-index:0;border-radius:var(--row-radius);background:var(--row-active)}.workspace-sidebar_lead__Z8Spk{display:grid;width:16px;height:16px;place-items:center;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}.workspace-sidebar_row__flk8G[aria-current=page] .workspace-sidebar_lead__Z8Spk{color:var(--accent)}.workspace-sidebar_name__TPiEW{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;transition:color var(--duration-fast) var(--ease-standard)}.workspace-sidebar_name__TPiEW[data-unread]{color:var(--foreground)}.workspace-sidebar_name__TPiEW[data-searching]{color:var(--text-muted)}.workspace-sidebar_name__TPiEW mark{background:none;color:var(--foreground);font-weight:500}.workspace-sidebar_dot__D5ooS{display:block;width:8px;height:8px;border-radius:var(--radius-pill);background:var(--tone,var(--tone-slate));box-shadow:inset 0 0 0 1.5px var(--tone,var(--tone-slate));transition:background-color var(--duration-standard) var(--ease-standard)}.workspace-sidebar_dot__D5ooS[data-tone=blue]{--tone:var(--tone-blue)}.workspace-sidebar_dot__D5ooS[data-tone=green]{--tone:var(--tone-green)}.workspace-sidebar_dot__D5ooS[data-tone=violet]{--tone:var(--tone-violet)}.workspace-sidebar_dot__D5ooS[data-tone=amber]{--tone:var(--tone-amber)}.workspace-sidebar_dot__D5ooS[data-tone=coral]{--tone:var(--tone-coral)}.workspace-sidebar_dot__D5ooS[data-tone=slate]{--tone:var(--tone-slate)}.workspace-sidebar_dot__D5ooS[data-hollow]{background:transparent}.workspace-sidebar_trail__9B0_r{display:grid;min-width:0}.workspace-sidebar_unread__5V_0f{display:block;width:6px;height:6px;margin-right:2px;border-radius:var(--radius-pill);background:var(--accent)}.workspace-sidebar_row__flk8G>.workspace-sidebar_railDot__1FVU_{position:absolute;top:calc(var(--row) / 2 - 10px);left:25px;z-index:2;display:grid;width:6px;height:6px;pointer-events:none}.workspace-sidebar_railDotFace__UubVe{display:block;border-radius:var(--radius-pill);background:var(--accent)}.workspace-sidebar_composerWrap__vvxjr{padding-top:2px}.workspace-sidebar_composer__YjPcJ{position:relative;display:grid;height:var(--row);grid-template-columns:16px minmax(0,1fr) auto;align-items:center;gap:10px;border:1px solid transparent;border-radius:var(--row-radius);padding:0 9px 0 11px;color:var(--text-muted);transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-standard) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}.workspace-sidebar_composer__YjPcJ[data-state=open]{border-color:var(--border-strong);background:var(--surface);color:var(--foreground)}.workspace-sidebar_composer__YjPcJ[data-state=open]:focus-within{border-color:var(--text-muted)}.workspace-sidebar_composer__YjPcJ[data-invalid]{border-color:var(--danger)}.workspace-sidebar_composer__YjPcJ[data-invalid]:focus-within{border-color:var(--danger)}.workspace-sidebar_composer__YjPcJ[data-state=commit]{color:var(--foreground);transition-duration:var(--duration-standard)}.workspace-sidebar_composer__YjPcJ .workspace-sidebar_lead__Z8Spk{position:relative}.workspace-sidebar_plus__R455r{display:grid;place-items:center}.workspace-sidebar_composerField__HgOYU{position:relative;display:grid;min-width:0;height:100%;align-items:center}.workspace-sidebar_composerLabel__LtNTv{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.workspace-sidebar_composerInput__JBXck{width:100%;min-width:0;height:100%;border:0;padding:0;background:transparent;color:var(--foreground);font:inherit;outline:0}.workspace-sidebar_composerInput__JBXck:focus-visible{outline:0}.workspace-sidebar_composerInput__JBXck::placeholder{color:var(--text-muted)}.workspace-sidebar_composerInput__JBXck:read-only{cursor:default}.workspace-sidebar_composerTrigger__BOZKi{position:absolute;inset:-1px;z-index:1;border:0;border-radius:var(--row-radius);padding:0;background:transparent;color:transparent;font:inherit;cursor:pointer}.workspace-sidebar_composerNote__2o3zp{position:relative;display:grid;color:var(--danger);font-size:var(--text-xs);white-space:nowrap}.workspace-sidebar_composerNote__2o3zp>span{grid-area:1/1}.workspace-sidebar_empty__eheKy{position:absolute;top:0;right:0;left:0;padding:20px 12px 8px}.workspace-sidebar_emptyBody__lFnnB{display:grid;justify-items:start;gap:4px}.workspace-sidebar_empty__eheKy p{margin:0;overflow-wrap:anywhere;font-size:var(--text-sm);font-weight:500}.workspace-sidebar_empty__eheKy span{color:var(--text-muted);font-size:var(--text-xs)}.workspace-sidebar_empty__eheKy button{margin-top:10px}.workspace-sidebar_footer__bUHXh{display:grid;gap:4px;border-top:1px solid var(--border);padding:12px 12px 8px}.workspace-sidebar_storageFold__idlPb{overflow:hidden}.workspace-sidebar_storage__39Pny{display:grid;gap:8px;padding:0 12px 8px}.workspace-sidebar_storageHead__jykF6{display:flex;align-items:baseline;justify-content:space-between;gap:12px}.workspace-sidebar_storageLabel__hVkja{color:var(--text-secondary);font-size:var(--text-xs);font-weight:500}.workspace-sidebar_storage__39Pny[data-full] .workspace-sidebar_storageLabel__hVkja{color:var(--foreground)}.workspace-sidebar_percent__iJLw_{flex:none}.workspace-sidebar_percent__iJLw_>span{color:var(--foreground);font-family:var(--font-body);font-size:var(--text-xs);font-weight:500;letter-spacing:0;line-height:1.4}.workspace-sidebar_track__Cpn0E{position:relative;height:4px;overflow:hidden;border-radius:var(--radius-pill);background:var(--border)}.workspace-sidebar_fill__aQ5Nc{position:absolute;inset:0;border-radius:inherit;background:var(--accent);transform-origin:left center;transition:background-color var(--duration-standard) var(--ease-standard)}.workspace-sidebar_storage__39Pny[data-full] .workspace-sidebar_fill__aQ5Nc{background:var(--warning)}.workspace-sidebar_storageDetail__J_kya{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}.workspace-sidebar_user__Mi2JK{display:grid;width:100%;min-height:44px;grid-template-columns:36px minmax(0,1fr) auto;align-items:center;gap:10px;border:0;border-radius:10px;padding:4px 8px 4px 2px;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard);-webkit-tap-highlight-color:transparent}.workspace-sidebar_user__Mi2JK:active{background:var(--row-active)}.workspace-sidebar_userText__3ULm1{display:grid;min-width:0}.workspace-sidebar_userName__dtU7J{overflow:hidden;font-size:var(--text-sm);font-weight:500;line-height:1.35;text-overflow:ellipsis;white-space:nowrap}.workspace-sidebar_userStatus__oJ0ye{color:var(--text-muted);font-size:var(--text-xs);line-height:1.4}.workspace-sidebar_userHint__StLlk{color:var(--text-muted);font-size:var(--text-xs);opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}.workspace-sidebar_user__Mi2JK:focus-visible .workspace-sidebar_userHint__StLlk{opacity:1}.workspace-sidebar_menu__2gNJn{position:relative;z-index:60;width:max(var(--radix-dropdown-menu-trigger-width),248px);max-width:calc(100vw - 24px);border:1px solid var(--border);border-radius:14px;padding:4px;background:var(--surface-raised);box-shadow:var(--shadow-floating);color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);transform-origin:var(--radix-dropdown-menu-content-transform-origin);transition:opacity var(--duration-fast) var(--ease-enter),transform var(--duration-spring) var(--ease-spring)}.workspace-sidebar_menu__2gNJn[data-state=closed]{opacity:0;transform:translateY(-3px) scale(.97);transition:opacity .13s var(--ease-standard),transform .13s var(--ease-standard);animation:workspace-sidebar_menu-exit__sr_rZ .13s linear both;pointer-events:none}.workspace-sidebar_menu__2gNJn[data-side=top]{transform-origin:var(--radix-dropdown-menu-content-transform-origin)}.workspace-sidebar_menuHighlight__D88L_{position:absolute;top:0;right:4px;left:4px;border-radius:10px;background:var(--surface-muted);opacity:0;pointer-events:none}.workspace-sidebar_menuLabel__s9d2C{position:relative;padding:6px 10px;color:var(--text-muted);font-size:var(--text-xs);font-weight:500}.workspace-sidebar_menuItem___wqH_{position:relative;display:grid;min-height:44px;grid-template-columns:28px minmax(0,1fr) 16px;align-items:center;gap:10px;border-radius:10px;padding:4px 10px 4px 8px;font-size:var(--text-sm);cursor:pointer;outline:none;transition:opacity var(--duration-standard) var(--ease-enter) calc(var(--i, 0) * 35ms),transform var(--duration-standard) var(--ease-enter) calc(var(--i, 0) * 35ms)}.workspace-sidebar_menuText__At5AV{display:grid;min-width:0}.workspace-sidebar_menuText__At5AV>span{overflow:hidden;font-weight:500;line-height:1.35;text-overflow:ellipsis;white-space:nowrap}.workspace-sidebar_menuText__At5AV small{overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);line-height:1.4;text-overflow:ellipsis;white-space:nowrap}.workspace-sidebar_menuCheck__tf_vH{display:grid;place-items:center;color:var(--foreground)}@keyframes workspace-sidebar_menu-exit__sr_rZ{to{--menu-exit:1}}.workspace-sidebar_composerField__HgOYU,.workspace-sidebar_composerNote__2o3zp,.workspace-sidebar_emptyBody__lFnnB,.workspace-sidebar_searchClip__l_krw,.workspace-sidebar_sectionText__Sp0Qm,.workspace-sidebar_storage__39Pny,.workspace-sidebar_switcherText__PyH6i,.workspace-sidebar_trail__9B0_r,.workspace-sidebar_userText__3ULm1{transition:opacity var(--duration-standard) var(--ease-enter) .1s,translate var(--duration-standard) var(--ease-enter) .1s}.workspace-sidebar_chevron__E_kqg,.workspace-sidebar_name__TPiEW{transition:color var(--duration-fast) var(--ease-standard),opacity var(--duration-standard) var(--ease-enter) .1s,translate var(--duration-standard) var(--ease-enter) .1s}.workspace-sidebar_sidebar__rMteM[data-rail] :is(.workspace-sidebar_switcherText__PyH6i,.workspace-sidebar_chevron__E_kqg,.workspace-sidebar_sectionText__Sp0Qm,.workspace-sidebar_name__TPiEW,.workspace-sidebar_trail__9B0_r,.workspace-sidebar_composerField__HgOYU,.workspace-sidebar_composerNote__2o3zp,.workspace-sidebar_storage__39Pny,.workspace-sidebar_userText__3ULm1,.workspace-sidebar_searchClip__l_krw,.workspace-sidebar_emptyBody__lFnnB){opacity:0;translate:-6px 0;pointer-events:none;transition:color var(--duration-fast) var(--ease-standard),opacity .14s var(--ease-standard),translate .14s var(--ease-standard)}.workspace-sidebar_sidebar__rMteM[data-rail] .workspace-sidebar_user__Mi2JK .workspace-sidebar_userHint__StLlk{opacity:0}.workspace-sidebar_divider__pZukW,.workspace-sidebar_row__flk8G>.workspace-sidebar_railDot__1FVU_{opacity:0;transition:opacity .1s var(--ease-standard),scale .1s var(--ease-standard)}.workspace-sidebar_divider__pZukW{scale:.3 1}.workspace-sidebar_row__flk8G>.workspace-sidebar_railDot__1FVU_{scale:.3}.workspace-sidebar_sidebar__rMteM[data-rail] :is(.workspace-sidebar_divider__pZukW,.workspace-sidebar_row__flk8G>.workspace-sidebar_railDot__1FVU_){opacity:1;scale:1;transition:opacity .2s var(--ease-enter) .16s,scale .36s var(--ease-spring) .16s}.workspace-sidebar_tip__XIi2w{z-index:60;display:flex;align-items:center;gap:8px;border-radius:var(--radius-control);padding:6px 12px;background:var(--foreground);color:var(--background);box-shadow:var(--shadow-raised);font-family:var(--font-body);font-size:var(--text-sm);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body);white-space:nowrap;transition:opacity var(--duration-fast) var(--ease-enter),transform var(--duration-fast) var(--ease-enter)}.workspace-sidebar_tipNote__oopvA{color:color-mix(in oklab,var(--background) 62%,var(--foreground));font-weight:400}.workspace-sidebar_tip__XIi2w kbd{display:inline-grid;min-width:20px;height:20px;place-items:center;border:1px solid color-mix(in oklab,var(--background) 30%,var(--foreground));border-radius:6px;padding:0 5px;font-family:var(--font-body);font-size:var(--text-xs);font-weight:400;line-height:1}.workspace-sidebar_tip__XIi2w[data-state=closed]{opacity:0;transform:translateX(-2px);transition-duration:.11s;animation:workspace-sidebar_tip-exit__FYHNg .11s linear both}.workspace-sidebar_tip__XIi2w[data-side=bottom][data-state=closed]{transform:translateY(-2px)}@keyframes workspace-sidebar_tip-exit__FYHNg{to{--tip-exit:1}}@media (hover:hover) and (pointer:fine){.workspace-sidebar_opener__j4ams:hover{background:var(--row-hover,color-mix(in oklab,var(--foreground) 4.5%,transparent));color:var(--foreground)}}@media (hover:hover) and (pointer:fine){.workspace-sidebar_switcher__724fK:hover{background:var(--row-hover)}}@media (hover:hover) and (pointer:fine){.workspace-sidebar_switcher__724fK:hover .workspace-sidebar_chevron__E_kqg{color:var(--foreground)}}@media (hover:hover) and (pointer:fine){.workspace-sidebar_row__flk8G:hover{background:var(--row-hover);color:var(--foreground)}}@media (hover:hover) and (pointer:fine){.workspace-sidebar_row__flk8G:hover .workspace-sidebar_lead__Z8Spk{color:var(--text-secondary)}}@media (hover:hover) and (pointer:fine){.workspace-sidebar_row__flk8G[aria-current=page]:hover{background:transparent}}@media (hover:hover) and (pointer:fine){.workspace-sidebar_row__flk8G[aria-current=page]:hover .workspace-sidebar_lead__Z8Spk{color:var(--accent)}}@media (hover:hover) and (pointer:fine){.workspace-sidebar_composer__YjPcJ[data-state=idle]:hover{background:var(--row-hover);color:var(--text-secondary)}}@media (hover:hover) and (pointer:fine){.workspace-sidebar_search__AqWzJ div:has(>input):hover:not(:focus-within){border-color:var(--border-strong)}}@media (hover:hover) and (pointer:fine){.workspace-sidebar_user__Mi2JK:hover{background:var(--row-hover)}}@media (hover:hover) and (pointer:fine){.workspace-sidebar_user__Mi2JK:hover .workspace-sidebar_userHint__StLlk{opacity:1}}@media (hover:hover) and (pointer:fine){.workspace-sidebar_toggle___Y1Ta:hover{background:var(--row-hover);color:var(--foreground)}}@media (max-width:380px){.workspace-sidebar_sidebar__rMteM{height:660px;border-radius:14px}}@media (pointer:coarse){.workspace-sidebar_sidebar__rMteM{--row:40px}}@media (pointer:coarse){.workspace-sidebar_searchClip__l_krw{margin-right:48px}}@media (pointer:coarse){.workspace-sidebar_search__AqWzJ div:has(>input){min-height:40px}}@media (pointer:coarse){.workspace-sidebar_toggle___Y1Ta{right:-1px;width:40px;height:40px;margin-top:-20px}}@media (max-width:640px){.workspace-sidebar_sidebar__rMteM[data-placement=inline]{display:none}}.workspace-sidebar_topbar__MwldF{position:sticky;top:0;z-index:10;display:grid;min-width:0;min-height:56px;grid-template-columns:40px 28px minmax(0,1fr);align-items:center;gap:10px;border:1px solid var(--border);border-radius:14px;padding:7px 16px 7px 7px;background:color-mix(in oklab,var(--surface-muted) 55%,var(--surface));color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}:root[data-theme=dark] .workspace-sidebar_topbar__MwldF{background:color-mix(in oklab,var(--background) 60%,var(--surface))}.workspace-sidebar_opener__j4ams{display:grid;width:40px;height:40px;place-items:center;border:0;border-radius:10px;padding:0;background:transparent;color:var(--text-secondary);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}.workspace-sidebar_opener__j4ams:active,.workspace-sidebar_opener__j4ams[aria-expanded=true]{background:color-mix(in oklab,var(--foreground) 7%,transparent);color:var(--foreground)}.workspace-sidebar_topbarText__SjFFo{display:grid;min-width:0}.workspace-sidebar_topbarPage__9r_RY{font-weight:500;line-height:1.35}.workspace-sidebar_topbarWorkspace__U1G77{color:var(--text-muted);font-size:var(--text-xs);line-height:1.4}.workspace-sidebar_backdrop__a0TZt{position:fixed;inset:0;z-index:50;background:color-mix(in oklab,#000 28%,transparent);opacity:0;pointer-events:none;-webkit-tap-highlight-color:transparent}:root[data-theme=dark] .workspace-sidebar_backdrop__a0TZt{background:color-mix(in oklab,#000 52%,transparent)}.workspace-sidebar_backdrop__a0TZt[data-open]{pointer-events:auto}.workspace-sidebar_sheet__Kaz74{position:fixed;top:max(8px,env(safe-area-inset-top));bottom:max(8px,env(safe-area-inset-bottom));left:max(8px,env(safe-area-inset-left));z-index:51;display:flex;width:min(304px,calc(100vw - 56px));outline:0;visibility:hidden;touch-action:pan-y;will-change:transform}.workspace-sidebar_sheet__Kaz74[data-shown]{visibility:visible}.workspace-sidebar_sidebar__rMteM[data-placement=drawer]{width:100%;height:100%;box-shadow:var(--shadow-floating)}@media (prefers-reduced-motion:reduce){.workspace-sidebar_chevron__E_kqg,.workspace-sidebar_composer__YjPcJ,.workspace-sidebar_dot__D5ooS,.workspace-sidebar_fill__aQ5Nc,.workspace-sidebar_lead__Z8Spk,.workspace-sidebar_menuItem___wqH_,.workspace-sidebar_name__TPiEW,.workspace-sidebar_opener__j4ams,.workspace-sidebar_row__flk8G,.workspace-sidebar_switcher__724fK,.workspace-sidebar_toggle___Y1Ta,.workspace-sidebar_userHint__StLlk,.workspace-sidebar_user__Mi2JK{transition:none}}@media (prefers-reduced-motion:reduce){.workspace-sidebar_menu__2gNJn,.workspace-sidebar_menu__2gNJn[data-state=closed]{transform:none;transition:opacity var(--duration-instant) linear}}@media (prefers-reduced-motion:reduce){.workspace-sidebar_chevron__E_kqg,.workspace-sidebar_composerField__HgOYU,.workspace-sidebar_composerNote__2o3zp,.workspace-sidebar_divider__pZukW,.workspace-sidebar_emptyBody__lFnnB,.workspace-sidebar_name__TPiEW,.workspace-sidebar_row__flk8G>.workspace-sidebar_railDot__1FVU_,.workspace-sidebar_searchClip__l_krw,.workspace-sidebar_sectionText__Sp0Qm,.workspace-sidebar_sidebar__rMteM[data-rail] :is(.workspace-sidebar_switcherText__PyH6i,.workspace-sidebar_chevron__E_kqg,.workspace-sidebar_sectionText__Sp0Qm,.workspace-sidebar_name__TPiEW,.workspace-sidebar_trail__9B0_r,.workspace-sidebar_composerField__HgOYU,.workspace-sidebar_composerNote__2o3zp,.workspace-sidebar_storage__39Pny,.workspace-sidebar_userText__3ULm1,.workspace-sidebar_searchClip__l_krw,.workspace-sidebar_emptyBody__lFnnB,.workspace-sidebar_divider__pZukW,.workspace-sidebar_row__flk8G>.workspace-sidebar_railDot__1FVU_),.workspace-sidebar_storage__39Pny,.workspace-sidebar_switcherText__PyH6i,.workspace-sidebar_trail__9B0_r,.workspace-sidebar_userText__3ULm1{translate:none;scale:none;transition:opacity .12s linear}}@media (prefers-reduced-motion:reduce){.workspace-sidebar_tip__XIi2w,.workspace-sidebar_tip__XIi2w[data-side=bottom][data-state=closed],.workspace-sidebar_tip__XIi2w[data-state=closed]{transform:none;transition:opacity 90ms linear}}", {"sidebar":"workspace-sidebar_sidebar__rMteM","srOnly":"workspace-sidebar_srOnly__xJdbk","header":"workspace-sidebar_header__U5FXV","switcher":"workspace-sidebar_switcher__724fK","switcherText":"workspace-sidebar_switcherText__PyH6i","workspaceName":"workspace-sidebar_workspaceName__BRaI6","workspaceMeta":"workspace-sidebar_workspaceMeta__mXKnU","chevron":"workspace-sidebar_chevron__E_kqg","mark":"workspace-sidebar_mark___Z0qS","markSmall":"workspace-sidebar_markSmall__pes9z","markFace":"workspace-sidebar_markFace__feqwV","swap":"workspace-sidebar_swap__kgqst","swapText":"workspace-sidebar_swapText__HBdHL","searchRow":"workspace-sidebar_searchRow__YdjCp","searchClip":"workspace-sidebar_searchClip__l_krw","search":"workspace-sidebar_search__AqWzJ","toggle":"workspace-sidebar_toggle___Y1Ta","scroll":"workspace-sidebar_scroll__CBYIH","stack":"workspace-sidebar_stack__pB6PO","panel":"workspace-sidebar_panel__TX4wA","section":"workspace-sidebar_section___re_e","sectionTitle":"workspace-sidebar_sectionTitle__H7RVe","sectionText":"workspace-sidebar_sectionText__Sp0Qm","divider":"workspace-sidebar_divider__pZukW","list":"workspace-sidebar_list__TuVZs","item":"workspace-sidebar_item__vZkiJ","row":"workspace-sidebar_row__flk8G","highlight":"workspace-sidebar_highlight__jq7F5","lead":"workspace-sidebar_lead__Z8Spk","name":"workspace-sidebar_name__TPiEW","dot":"workspace-sidebar_dot__D5ooS","trail":"workspace-sidebar_trail__9B0_r","unread":"workspace-sidebar_unread__5V_0f","railDot":"workspace-sidebar_railDot__1FVU_","railDotFace":"workspace-sidebar_railDotFace__UubVe","composerWrap":"workspace-sidebar_composerWrap__vvxjr","composer":"workspace-sidebar_composer__YjPcJ","plus":"workspace-sidebar_plus__R455r","composerField":"workspace-sidebar_composerField__HgOYU","composerLabel":"workspace-sidebar_composerLabel__LtNTv","composerInput":"workspace-sidebar_composerInput__JBXck","composerTrigger":"workspace-sidebar_composerTrigger__BOZKi","composerNote":"workspace-sidebar_composerNote__2o3zp","empty":"workspace-sidebar_empty__eheKy","emptyBody":"workspace-sidebar_emptyBody__lFnnB","footer":"workspace-sidebar_footer__bUHXh","storageFold":"workspace-sidebar_storageFold__idlPb","storage":"workspace-sidebar_storage__39Pny","storageHead":"workspace-sidebar_storageHead__jykF6","storageLabel":"workspace-sidebar_storageLabel__hVkja","percent":"workspace-sidebar_percent__iJLw_","track":"workspace-sidebar_track__Cpn0E","fill":"workspace-sidebar_fill__aQ5Nc","storageDetail":"workspace-sidebar_storageDetail__J_kya","user":"workspace-sidebar_user__Mi2JK","userText":"workspace-sidebar_userText__3ULm1","userName":"workspace-sidebar_userName__dtU7J","userStatus":"workspace-sidebar_userStatus__oJ0ye","userHint":"workspace-sidebar_userHint__StLlk","menu":"workspace-sidebar_menu__2gNJn","menuItem":"workspace-sidebar_menuItem___wqH_","menu-exit":"workspace-sidebar_menu-exit__sr_rZ","menuHighlight":"workspace-sidebar_menuHighlight__D88L_","menuLabel":"workspace-sidebar_menuLabel__s9d2C","menuText":"workspace-sidebar_menuText__At5AV","menuCheck":"workspace-sidebar_menuCheck__tf_vH","tip":"workspace-sidebar_tip__XIi2w","tipNote":"workspace-sidebar_tipNote__oopvA","tip-exit":"workspace-sidebar_tip-exit__FYHNg","opener":"workspace-sidebar_opener__j4ams","topbar":"workspace-sidebar_topbar__MwldF","topbarText":"workspace-sidebar_topbarText__SjFFo","topbarPage":"workspace-sidebar_topbarPage__9r_RY","topbarWorkspace":"workspace-sidebar_topbarWorkspace__U1G77","backdrop":"workspace-sidebar_backdrop__a0TZt","sheet":"workspace-sidebar_sheet__Kaz74"});
A.reg(85618, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => n });
  var a = r(51811);
  let i = {
    name: "layout-grid",
    size: 24,
    node: [
      [
        "rect",
        { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }
      ],
      [
        "rect",
        { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }
      ],
      [
        "rect",
        { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }
      ],
      [
        "rect",
        { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }
      ]
    ]
  };
  i.node;
  let n = (0, a.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(87853, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { WorkspaceSidebarDemo: () => ef });
  var r = a(95155), i = a(5772), n = a(12115), s = a(47650), o = a(57793), l = a(40623), c = a(18310), d = a(28245), u = a(55809), p = a(92171), m = a(25354), h = a(80642), f = a(79196), _ = a(57700), x = a(29298), b = a(44952), y = a(56255), g = a(10294), j = a(36483), v = a(6035), w = a(85618), k = a(2125), N = a(65342), T = a(64577), C = a(9005), S = a(65024), P = a(92218), E = a(51288), $ = a(43298), R = a(98344), L = a(7770), M = a(80112), D = a.n(M);
  let Y = [
    {
      id: "northwind",
      name: "Northwind",
      initial: "N",
      logo: {
        color: "#2f5bea",
        glyph: (0, r.jsxs)("svg", {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          children: [
            (0, r.jsx)("path", { d: "M4 9h9.5a2.75 2.75 0 1 0-2.6-3.6" }),
            (0, r.jsx)("path", { d: "M4 12.5h13a2.75 2.75 0 1 1-2.6 3.6" }),
            (0, r.jsx)("path", { d: "M4 16h5" })
          ]
        })
      },
      plan: "Business",
      members: "24 members",
      used: 38.4,
      limit: 100
    },
    {
      id: "fieldwork",
      name: "Fieldwork Labs",
      initial: "F",
      logo: {
        color: "#1d7f55",
        glyph: (0, r.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          children: (0, r.jsx)("path", {
            d: "M19.5 4.5C10.5 4.5 5 9 5 15.2c0 1.3.25 2.5.7 3.6 1.3-5 4.8-8.3 9.3-10.3-3.8 2.4-6.6 5.8-7.9 11 1.1.3 2.2.5 3.4.5 5.4 0 9-4.6 9-15.5z"
          })
        })
      },
      plan: "Team",
      members: "8 members",
      used: 58.1,
      limit: 80
    },
    {
      id: "personal",
      name: "Personal",
      initial: "M",
      photo: "media/people/emma-collins.svg",
      plan: "Free",
      members: "Just you",
      used: 4.6,
      limit: 5
    }
  ], F = {
    northwind: {
      active: "checkout",
      favorites: [
        { id: "flows", name: "Checkout flows", kind: "prototype" },
        { id: "critique", name: "Critique notes", kind: "doc" },
        { id: "roadmap", name: "Q4 roadmap", kind: "map" },
        { id: "audit", name: "Component audit", kind: "board" }
      ],
      projects: [
        {
          id: "checkout",
          name: "Checkout redesign",
          tone: "blue",
          unread: false
        },
        { id: "mobile", name: "Mobile app 4.0", tone: "green", unread: true },
        { id: "system", name: "Design system", tone: "violet", unread: false },
        { id: "onboarding", name: "Onboarding", tone: "amber", unread: true },
        { id: "help", name: "Help center", tone: "coral", unread: false },
        { id: "admin", name: "Admin console", tone: "slate", unread: false }
      ]
    },
    fieldwork: {
      active: "scheduling",
      favorites: [
        { id: "synthesis", name: "Interview synthesis", kind: "doc" },
        { id: "journey", name: "Patient journey", kind: "map" },
        { id: "booking", name: "Booking prototype", kind: "prototype" }
      ],
      projects: [
        {
          id: "scheduling",
          name: "Clinic scheduling",
          tone: "green",
          unread: false
        },
        { id: "intake", name: "Patient intake", tone: "blue", unread: true },
        { id: "research", name: "Research ops", tone: "amber", unread: false },
        {
          id: "a11y",
          name: "Accessibility audit",
          tone: "violet",
          unread: true
        }
      ]
    },
    personal: {
      active: "portfolio",
      favorites: [
        { id: "case", name: "Case study draft", kind: "doc" },
        { id: "type", name: "Type explorations", kind: "board" }
      ],
      projects: [
        {
          id: "portfolio",
          name: "Portfolio 2026",
          tone: "coral",
          unread: false
        },
        { id: "tide", name: "Tide weather app", tone: "blue", unread: true },
        { id: "icons", name: "Icon set", tone: "slate", unread: false }
      ]
    }
  }, A = ["blue", "green", "violet", "amber", "coral", "slate"], I = { prototype: g.A, doc: j.A, map: v.A, board: w.A }, { spring: B, duration: O, ease: z, blur: H } = L.T, q = [...z.enter], W = [...z.standard], U = { duration: 0 }, K = { height: 0, opacity: 0, overflow: "hidden" }, V = { height: "auto", opacity: 1, transitionEnd: { overflow: "visible" } }, X = { height: 0, opacity: 0, overflow: "hidden" }, J = { ...B.smooth, opacity: { duration: O.fast, ease: W } }, G = () => () => {
  }, Z = "(max-width: 640px)", Q = (e2) => {
    let t2 = window.matchMedia(Z);
    return t2.addEventListener("change", e2), () => t2.removeEventListener("change", e2);
  };
  function ee({
    enabled: e2 = true,
    label: t2,
    note: a2,
    shortcut: i2,
    side: s2 = "right",
    children: o2
  }) {
    let [c2, d2] = (0, n.useState)(false);
    return !e2 && c2 && d2(false), (0, r.jsxs)(l.bL, {
      open: e2 && c2,
      onOpenChange: (t3) => d2(t3 && e2),
      children: [
        (0, r.jsx)(l.l9, { asChild: true, children: o2 }),
        (0, r.jsx)(l.ZL, {
          children: (0, r.jsxs)(l.UC, {
            className: D().tip,
            side: s2,
            sideOffset: "right" === s2 ? 14 : 8,
            collisionPadding: 8,
            children: [
              t2,
              a2 && (0, r.jsx)("span", { className: D().tipNote, children: a2 }),
              i2 && (0, r.jsx)("kbd", { children: i2 })
            ]
          })
        })
      ]
    });
  }
  function et({ collapsed: e2, reduce: t2 }) {
    return (0, r.jsxs)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      "aria-hidden": "true",
      children: [
        (0, r.jsx)("rect", {
          x: "2.75",
          y: "3.75",
          width: "14.5",
          height: "12.5",
          rx: "3.5"
        }),
        (0, r.jsx)(m.PY1.path, {
          d: "M8.25 4.25v11.5",
          initial: false,
          animate: { x: e2 ? -2.5 : 0 },
          transition: t2 ? U : B.smooth
        })
      ]
    });
  }
  let ea = (e2) => A[e2 % A.length], er = (e2, t2) => !t2 || e2.toLowerCase().includes(t2.toLowerCase());
  function ei({ text: e2, className: t2, reduce: a2 }) {
    return (0, r.jsx)("span", {
      className: [D().swap, t2].filter(Boolean).join(" "),
      children: (0, r.jsx)(h.N, {
        mode: "popLayout",
        initial: false,
        children: (0, r.jsx)(
          m.PY1.span,
          {
            className: D().swapText,
            initial: a2 ? { opacity: 0 } : { opacity: 0, y: "0.35em", filter: `blur(${H.soft}px)` },
            animate: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: a2 ? { opacity: 0, transition: U } : {
              opacity: 0,
              y: "-0.35em",
              filter: `blur(${H.subtle}px)`,
              transition: { duration: O.fast, ease: W }
            },
            transition: a2 ? U : { duration: O.standard, ease: q },
            children: e2
          },
          e2
        )
      })
    });
  }
  function en({ workspace: e2, small: t2 = false, reduce: a2 }) {
    return (0, r.jsx)("span", {
      className: [D().mark, t2 ? D().markSmall : ""].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: (0, r.jsx)(h.N, {
        initial: false,
        children: (0, r.jsx)(
          m.PY1.span,
          {
            className: D().markFace,
            "data-photo": e2.photo ? "" : void 0,
            "data-logo": e2.logo ? "" : void 0,
            style: e2.logo ? { background: e2.logo.color } : void 0,
            initial: a2 ? { opacity: 0 } : { opacity: 0, scale: 0.72, filter: `blur(${H.subtle}px)` },
            animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
            exit: a2 ? { opacity: 0, transition: U } : {
              opacity: 0,
              scale: 0.72,
              filter: `blur(${H.subtle}px)`,
              transition: { duration: O.fast, ease: W }
            },
            transition: a2 ? U : {
              ...B.snappy,
              opacity: { duration: O.fast },
              filter: { duration: O.fast }
            },
            children: e2.photo ? (0, r.jsx)(i.default, {
              src: e2.photo,
              alt: "",
              fill: true,
              sizes: t2 ? "28px" : "32px"
            }) : e2.logo ? e2.logo.glyph : e2.initial
          },
          e2.id
        )
      })
    });
  }
  function es({ name: e2, query: t2, unread: a2 = false }) {
    let i2 = t2 ? e2.toLowerCase().indexOf(t2.toLowerCase()) : -1;
    return (0, r.jsx)("span", {
      className: D().name,
      "data-searching": t2 ? "" : void 0,
      "data-unread": a2 ? "" : void 0,
      children: i2 < 0 ? e2 : (0, r.jsxs)(r.Fragment, {
        children: [
          e2.slice(0, i2),
          (0, r.jsx)("mark", { children: e2.slice(i2, i2 + t2.length) }),
          e2.slice(i2 + t2.length)
        ]
      })
    });
  }
  function eo({ reduce: e2 }) {
    return (0, r.jsx)(m.PY1.span, {
      layoutId: "active",
      className: D().highlight,
      "aria-hidden": "true",
      transition: e2 ? U : B.morph
    });
  }
  function el({ id: e2, text: t2, rail: a2, reduce: i2 }) {
    return (0, r.jsxs)(m.PY1.h2, {
      id: e2,
      className: D().sectionTitle,
      initial: false,
      animate: { height: a2 ? 17 : 32 },
      transition: i2 ? U : B.smooth,
      children: [
        (0, r.jsx)("span", { className: D().sectionText, children: t2 }),
        (0, r.jsx)("span", { className: D().divider, "aria-hidden": "true" })
      ]
    });
  }
  function ec({
    workspace: e2,
    lists: t2,
    query: a2,
    reduce: i2,
    rail: s2,
    onExpand: o2,
    onSelect: l2,
    onReorder: c2,
    onMoved: d2,
    onCreate: u2,
    onClear: p2
  }) {
    let b2 = (0, n.useId)(), y2 = (0, f.tF)(), g2 = (0, n.useRef)(/* @__PURE__ */ new Map()), j2 = (0, n.useRef)(null), [v2, w2] = (0, n.useState)(0), [k2, N2] = (0, n.useState)(null), T2 = t2.favorites.filter((e3) => er(e3.name, a2)), C2 = t2.projects.filter((e3) => er(e3.name, a2)), S2 = !!a2 && 0 === T2.length && 0 === C2.length, P2 = (e3) => (t3) => {
      t3 ? (g2.current.set(e3, t3), j2.current === e3 && (j2.current = null, t3.focus({ preventScroll: true }))) : g2.current.delete(e3);
    };
    return (0, r.jsx)(m.PY1.div, {
      className: D().panel,
      inert: !y2,
      "aria-hidden": !y2 || void 0,
      initial: i2 ? { opacity: 0 } : { opacity: 0, y: 8, filter: `blur(${H.soft}px)` },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: i2 ? { opacity: 0, transition: U } : {
        opacity: 0,
        y: -4,
        filter: `blur(${H.subtle}px)`,
        transition: { duration: O.fast, ease: W }
      },
      transition: i2 ? U : { duration: O.standard + 0.04, ease: q },
      children: (0, r.jsx)(_.o, {
        id: b2,
        children: (0, r.jsxs)(h.N, {
          initial: false,
          children: [
            T2.length > 0 && (0, r.jsxs)(
              m.PY1.section,
              {
                className: D().section,
                "aria-labelledby": `${b2}-favorites`,
                initial: K,
                animate: V,
                exit: X,
                transition: i2 ? U : J,
                children: [
                  (0, r.jsx)(el, {
                    id: `${b2}-favorites`,
                    text: "Favorites",
                    rail: s2,
                    reduce: i2
                  }),
                  (0, r.jsx)("p", {
                    id: `${b2}-hint`,
                    className: D().srOnly,
                    children: "Drag, or press Alt with the up and down arrows, to reorder."
                  }),
                  (0, r.jsx)(x.x, {
                    as: "ul",
                    axis: "y",
                    values: t2.favorites,
                    onReorder: (t3) => c2(e2.id, t3),
                    className: D().list,
                    children: (0, r.jsx)(h.N, {
                      initial: false,
                      children: T2.map(
                        (n2) => (0, r.jsx)(
                          ed,
                          {
                            item: n2,
                            query: a2,
                            active: t2.active === n2.id,
                            draggable: !a2,
                            reduce: i2,
                            rail: s2,
                            hint: `${b2}-hint`,
                            buttonRef: P2(n2.id),
                            onSelect: () => l2(e2.id, n2.id, n2.name),
                            onMove: (a3) => (function(a4, r2) {
                              let i3 = t2.favorites.findIndex(
                                (e3) => e3.id === a4
                              ), n3 = i3 + r2;
                              if (i3 < 0 || n3 < 0 || n3 >= t2.favorites.length)
                                return;
                              let s3 = [...t2.favorites];
                              [s3[i3], s3[n3]] = [s3[n3], s3[i3]], c2(e2.id, s3), d2(e2.id, a4, s3), requestAnimationFrame(
                                () => g2.current.get(a4)?.focus()
                              );
                            })(n2.id, a3),
                            onDropped: () => d2(e2.id, n2.id)
                          },
                          n2.id
                        )
                      )
                    })
                  })
                ]
              },
              "favorites"
            ),
            (C2.length > 0 || !a2) && (0, r.jsxs)(
              m.PY1.section,
              {
                className: D().section,
                "aria-labelledby": `${b2}-projects`,
                initial: K,
                animate: V,
                exit: X,
                transition: i2 ? U : J,
                children: [
                  (0, r.jsx)(el, {
                    id: `${b2}-projects`,
                    text: "Projects",
                    rail: s2,
                    reduce: i2
                  }),
                  (0, r.jsx)("ul", {
                    className: D().list,
                    children: (0, r.jsx)(h.N, {
                      initial: false,
                      children: C2.map(
                        (n2) => (0, r.jsx)(
                          m.PY1.li,
                          {
                            className: D().item,
                            initial: k2 !== n2.id && K,
                            animate: V,
                            exit: X,
                            transition: i2 ? U : J,
                            children: (0, r.jsx)(ee, {
                              enabled: s2,
                              label: n2.name,
                              note: n2.unread ? "New activity" : void 0,
                              children: (0, r.jsxs)("button", {
                                ref: P2(n2.id),
                                type: "button",
                                className: D().row,
                                "aria-current": t2.active === n2.id ? "page" : void 0,
                                onClick: () => l2(e2.id, n2.id, n2.name),
                                children: [
                                  t2.active === n2.id && (0, r.jsx)(eo, { reduce: i2 }),
                                  (0, r.jsx)("span", {
                                    className: D().lead,
                                    children: (0, r.jsx)("span", {
                                      className: D().dot,
                                      "data-tone": n2.tone
                                    })
                                  }),
                                  (0, r.jsx)(es, {
                                    name: n2.name,
                                    query: a2,
                                    unread: n2.unread
                                  }),
                                  (0, r.jsx)("span", {
                                    className: D().trail,
                                    children: (0, r.jsx)(h.N, {
                                      initial: false,
                                      children: n2.unread && (0, r.jsx)(
                                        m.PY1.span,
                                        {
                                          className: D().unread,
                                          initial: {
                                            opacity: 0,
                                            scale: 0.4
                                          },
                                          animate: { opacity: 1, scale: 1 },
                                          exit: { opacity: 0, scale: 0.4 },
                                          transition: i2 ? U : B.snappy,
                                          children: (0, r.jsx)("span", {
                                            className: D().srOnly,
                                            children: ", new activity"
                                          })
                                        },
                                        "unread"
                                      )
                                    })
                                  }),
                                  (0, r.jsx)("span", {
                                    className: D().railDot,
                                    "aria-hidden": "true",
                                    children: (0, r.jsx)(h.N, {
                                      initial: false,
                                      children: n2.unread && (0, r.jsx)(
                                        m.PY1.span,
                                        {
                                          className: D().railDotFace,
                                          initial: { scale: 0 },
                                          animate: { scale: 1 },
                                          exit: { scale: 0 },
                                          transition: i2 ? U : B.snappy
                                        },
                                        "dot"
                                      )
                                    })
                                  })
                                ]
                              })
                            })
                          },
                          n2.id
                        )
                      )
                    })
                  }),
                  (0, r.jsx)(h.N, {
                    initial: false,
                    children: !a2 && (0, r.jsx)(
                      m.PY1.div,
                      {
                        initial: K,
                        animate: V,
                        exit: X,
                        transition: i2 ? U : J,
                        children: (0, r.jsx)(
                          eu,
                          {
                            first: 0 === v2,
                            tone: ea(t2.projects.length),
                            reduce: i2,
                            rail: s2,
                            onExpand: o2,
                            taken: (e3) => t2.projects.find(
                              (t3) => t3.name.toLowerCase() === e3.toLowerCase()
                            )?.name,
                            onCreate: function(t3, a3) {
                              let r2 = u2(e2.id, t3);
                              N2(r2), w2((e3) => e3 + 1), a3 && (j2.current = r2);
                            }
                          },
                          v2
                        )
                      },
                      "composer"
                    )
                  })
                ]
              },
              "projects"
            ),
            S2 && (0, r.jsx)(
              m.PY1.div,
              {
                className: D().empty,
                "data-rail-hidden": "",
                inert: s2,
                initial: i2 ? { opacity: 0 } : { opacity: 0, y: 6, filter: `blur(${H.soft}px)` },
                animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                exit: {
                  opacity: 0,
                  transition: { duration: i2 ? 0 : O.instant }
                },
                transition: i2 ? U : { duration: O.standard, ease: q, delay: O.fast },
                children: (0, r.jsxs)("div", {
                  className: D().emptyBody,
                  children: [
                    (0, r.jsxs)("p", {
                      children: ["Nothing matches \u201C", a2, "\u201D"]
                    }),
                    (0, r.jsxs)("span", {
                      children: [
                        "Search looks at favorites and projects in ",
                        e2.name,
                        "."
                      ]
                    }),
                    (0, r.jsx)(E.$, {
                      type: "button",
                      size: "sm",
                      variant: "secondary",
                      onClick: p2,
                      children: "Show all projects"
                    })
                  ]
                })
              },
              "empty"
            )
          ]
        })
      })
    });
  }
  function ed({
    item: e2,
    query: t2,
    active: a2,
    draggable: i2,
    reduce: s2,
    rail: o2,
    hint: l2,
    buttonRef: c2,
    onSelect: d2,
    onMove: u2,
    onDropped: p2
  }) {
    let m2 = (0, n.useRef)(false), h2 = (0, n.useRef)(null), f2 = (0, n.useRef)(null), _2 = (0, n.useRef)(false), x2 = (0, b.m)(), [g2, j2] = (0, n.useState)(false), v2 = I[e2.kind];
    function w2() {
      f2.current && (window.clearTimeout(f2.current.timer), f2.current = null);
    }
    function k2() {
      w2(), _2.current && requestAnimationFrame(() => {
        _2.current && (_2.current = false, j2(false));
      });
    }
    return (0, n.useEffect)(() => {
      let e3 = h2.current;
      if (!e3) return;
      let t3 = (e4) => {
        _2.current && e4.cancelable && e4.preventDefault();
      };
      return e3.addEventListener("touchmove", t3, { passive: false }), () => {
        e3.removeEventListener("touchmove", t3), f2.current && window.clearTimeout(f2.current.timer);
      };
    }, []), (0, r.jsx)(y.N, {
      ref: h2,
      value: e2,
      as: "li",
      className: D().item,
      "data-lifted": g2 ? "" : void 0,
      drag: !!i2 && "y",
      dragListener: false,
      dragControls: x2,
      dragMomentum: false,
      dragTransition: { bounceStiffness: 520, bounceDamping: 40 },
      initial: K,
      animate: V,
      exit: X,
      transition: s2 ? U : { ...J, layout: B.smooth },
      onPointerDown: function(e3) {
        if (m2.current = false, !i2 || 0 !== e3.button) return;
        if ("touch" !== e3.pointerType) return void x2.start(e3);
        let t3 = e3.nativeEvent;
        w2(), f2.current = {
          x: e3.clientX,
          y: e3.clientY,
          timer: window.setTimeout(() => {
            f2.current = null, _2.current = true, m2.current = true, j2(true), x2.start(t3);
          }, 320)
        };
      },
      onPointerMove: function(e3) {
        f2.current && Math.hypot(e3.clientX - f2.current.x, e3.clientY - f2.current.y) > 8 && w2();
      },
      onPointerUp: k2,
      onPointerCancel: k2,
      onContextMenu: (e3) => {
        (_2.current || f2.current) && e3.preventDefault();
      },
      onDragStart: () => {
        m2.current = true, j2(true);
      },
      onDragEnd: () => {
        _2.current = false, j2(false), p2();
      },
      children: (0, r.jsx)(ee, {
        enabled: o2 && !g2,
        label: e2.name,
        children: (0, r.jsxs)("button", {
          ref: c2,
          type: "button",
          className: D().row,
          "aria-current": a2 ? "page" : void 0,
          "aria-describedby": i2 ? l2 : void 0,
          onKeyDown: function(e3) {
            e3.altKey && i2 && ("ArrowUp" === e3.key || "ArrowDown" === e3.key) && (e3.preventDefault(), u2("ArrowUp" === e3.key ? -1 : 1));
          },
          onClick: () => {
            if (m2.current) {
              m2.current = false;
              return;
            }
            d2();
          },
          children: [
            a2 && (0, r.jsx)(eo, { reduce: s2 }),
            (0, r.jsx)("span", {
              className: D().lead,
              children: (0, r.jsx)(v2, {
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            }),
            (0, r.jsx)(es, { name: e2.name, query: t2 })
          ]
        })
      })
    });
  }
  function eu({
    first: e2,
    tone: t2,
    reduce: a2,
    rail: i2,
    onExpand: s2,
    taken: o2,
    onCreate: l2
  }) {
    let c2 = (0, n.useId)(), [d2, u2] = (0, n.useState)("idle"), [p2, f2] = (0, n.useState)(""), [_2, x2] = (0, n.useState)(""), b2 = (0, n.useRef)(null), y2 = (0, n.useRef)(null), g2 = (0, n.useRef)(0);
    function j2(e3) {
      u2("idle"), f2(""), x2(""), e3 && requestAnimationFrame(() => y2.current?.focus());
    }
    function v2(e3) {
      if (e3?.preventDefault(), "open" !== d2) return;
      let t3 = p2.trim().replace(/\s+/g, " ");
      if (!t3) return void j2(true);
      let r2 = o2(t3);
      if (r2) return void x2(`There is already a project named ${r2}`);
      f2(t3), u2("commit");
      let i3 = !!e3;
      g2.current = window.setTimeout(() => l2(t3, i3), 280 * !a2);
    }
    (0, n.useEffect)(() => () => window.clearTimeout(g2.current), []);
    let w2 = "idle" === d2, N2 = a2 ? { opacity: 0 } : { opacity: 0, y: "0.3em", filter: `blur(${H.soft}px)` }, T2 = a2 ? { opacity: 0, transition: U } : {
      opacity: 0,
      y: "-0.3em",
      filter: `blur(${H.subtle}px)`,
      transition: { duration: O.instant, ease: W }
    };
    return (0, r.jsx)(m.PY1.div, {
      className: D().composerWrap,
      initial: !e2 && !a2 && { opacity: 0, y: -6, filter: `blur(${H.subtle}px)` },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      transition: { duration: O.standard, ease: q, delay: 0.04 },
      children: (0, r.jsxs)("form", {
        className: D().composer,
        "data-state": d2,
        "data-invalid": _2 ? "" : void 0,
        onSubmit: v2,
        children: [
          (0, r.jsx)("span", {
            className: D().lead,
            "aria-hidden": "true",
            children: (0, r.jsx)(h.N, {
              initial: false,
              mode: "popLayout",
              children: w2 ? (0, r.jsx)(
                m.PY1.span,
                {
                  className: D().plus,
                  initial: { opacity: 0, scale: 0.6 },
                  animate: { opacity: 1, scale: 1 },
                  exit: {
                    opacity: 0,
                    scale: 0.6,
                    transition: { duration: a2 ? 0 : O.instant }
                  },
                  transition: a2 ? U : B.snappy,
                  children: (0, r.jsx)(k.A, {
                    size: 15,
                    strokeWidth: 1.75
                  })
                },
                "plus"
              ) : (0, r.jsx)(
                m.PY1.span,
                {
                  className: D().dot,
                  "data-tone": t2,
                  "data-hollow": "open" === d2 ? "" : void 0,
                  initial: { opacity: 0, scale: 0.4 },
                  animate: {
                    opacity: 1,
                    scale: "commit" !== d2 || a2 ? 1 : [1, 1.45, 1]
                  },
                  exit: { opacity: 0, transition: U },
                  transition: a2 ? U : "commit" === d2 ? { duration: 0.32, ease: W } : B.snappy
                },
                "dot"
              )
            })
          }),
          (0, r.jsx)("span", {
            className: D().composerField,
            children: (0, r.jsx)(h.N, {
              initial: false,
              mode: "popLayout",
              children: w2 ? (0, r.jsx)(
                m.PY1.span,
                {
                  className: D().composerLabel,
                  "aria-hidden": "true",
                  initial: N2,
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: T2,
                  transition: a2 ? U : { duration: O.standard, ease: q },
                  children: "New project"
                },
                "label"
              ) : (0, r.jsx)(
                m.PY1.input,
                {
                  ref: b2,
                  id: `${c2}-name`,
                  className: D().composerInput,
                  value: p2,
                  maxLength: 32,
                  readOnly: "commit" === d2,
                  placeholder: "Project name",
                  "aria-label": "Project name",
                  "aria-invalid": !!_2 || void 0,
                  "aria-describedby": _2 ? `${c2}-error` : `${c2}-help`,
                  autoComplete: "off",
                  enterKeyHint: "done",
                  onChange: (e3) => {
                    f2(e3.target.value), _2 && x2("");
                  },
                  onKeyDown: function(e3) {
                    "Escape" === e3.key && (e3.preventDefault(), e3.stopPropagation(), j2(true));
                  },
                  onBlur: () => {
                    "open" === d2 && (p2.trim() && !_2 ? v2() : j2(false));
                  },
                  initial: N2,
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: T2,
                  transition: a2 ? U : { duration: O.standard, ease: q }
                },
                "input"
              )
            })
          }),
          (0, r.jsx)("span", {
            className: D().composerNote,
            "aria-hidden": "true",
            children: (0, r.jsx)(h.N, {
              initial: false,
              children: _2 && (0, r.jsx)(
                m.PY1.span,
                {
                  initial: N2,
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: T2,
                  transition: a2 ? U : { duration: O.standard, ease: q },
                  children: "Name taken"
                },
                "taken"
              )
            })
          }),
          w2 && (0, r.jsx)(ee, {
            enabled: i2,
            label: "New project",
            children: (0, r.jsx)("button", {
              ref: y2,
              type: "button",
              className: D().composerTrigger,
              onClick: () => {
                i2 && s2(), u2("open"), requestAnimationFrame(() => b2.current?.focus());
              },
              children: "New project"
            })
          }),
          (0, r.jsx)("span", {
            id: `${c2}-help`,
            className: D().srOnly,
            children: "Press Enter to create the project or Escape to cancel."
          }),
          (0, r.jsx)("span", {
            id: `${c2}-error`,
            className: D().srOnly,
            role: "alert",
            children: _2
          })
        ]
      })
    });
  }
  function ep({
    className: e2,
    onNavigate: t2,
    defaultCollapsed: a2 = false,
    onCollapsedChange: i2
  }) {
    var f2, _2;
    let x2, b2, y2, g2, j2, v2 = (x2 = (0, n.useSyncExternalStore)(
      G,
      () => true,
      () => false
    ), !!(0, c.I)() && x2), w2 = (0, n.useSyncExternalStore)(
      Q,
      () => window.matchMedia(Z).matches,
      () => false
    ), [k2, E2] = (0, n.useState)(a2), [L2, M2] = (0, n.useState)(false), [A2, I2] = (0, n.useState)(false), z2 = (0, n.useRef)(false), H2 = (0, n.useRef)(false), q2 = (0, n.useRef)(false), K2 = k2 && !w2;
    !w2 && (L2 || A2) && (M2(false), I2(false));
    let V2 = (0, n.useId)(), X2 = (0, n.useRef)(null), J2 = (0, n.useRef)(null), es2 = (0, n.useRef)(null), eo2 = (0, n.useRef)(0), el2 = (0, d.d)(-4096), ed2 = (0, d.d)(1), eu2 = (0, n.useRef)(320), em2 = (0, n.useRef)(0), eh2 = (0, n.useRef)(null), ef2 = (0, u.G)(
      [el2, ed2],
      ([e3, t3]) => Math.min(1, Math.max(0, 1 + e3 / eu2.current)) * t3
    ), e_ = (0, n.useRef)(null), ex = (0, n.useRef)(null), eb = (f2 = () => {
      e_.current && delete e_.current.dataset.frozen;
    }, b2 = (0, d.d)(+!K2), y2 = (0, u.G)(b2, (e3) => `calc(64px + (var(--full) - 64px) * ${e3})`), g2 = (0, n.useEffectEvent)(f2), (0, n.useEffect)(() => {
      let e3 = +!K2;
      if (v2) {
        b2.jump(e3), K2 || g2();
        return;
      }
      let t3 = (0, p.i)(b2, e3, {
        ...B.smooth,
        onComplete: () => {
          K2 || g2();
        }
      });
      return () => t3.stop();
    }, [K2, v2, b2]), y2), [ey, eg] = (0, n.useState)("northwind"), [ej, ev] = (0, n.useState)(F), [ew, ek] = (0, n.useState)(""), [eN, eT] = (0, n.useState)(false), [eC, eS] = (0, n.useState)(""), [eP, eE] = (0, n.useState)(null), e$ = (0, n.useRef)(false), eR = (0, n.useRef)(null), eL = Y.find((e3) => e3.id === ey) ?? Y[0], eM = ej[eL.id], eD = eM.projects.find((e3) => e3.id === eM.active) ?? eM.favorites.find((e3) => e3.id === eM.active), eY = Math.round(eL.used / eL.limit * 100), eF = eY >= 90, eA = ew.trim();
    function eI(e3, t3) {
      ev((a3) => ({ ...a3, [e3]: t3(a3[e3]) }));
    }
    function eB() {
      window.clearTimeout(eo2.current);
      let e3 = J2.current;
      e3 && (eu2.current = e3.offsetLeft + e3.offsetWidth + 12), A2 || (el2.jump(-eu2.current), ed2.jump(+!v2)), I2(true), M2(true);
    }
    function eO(e3 = 0) {
      window.clearTimeout(eo2.current);
      let t3 = () => {
        let e4 = document.activeElement;
        z2.current = !e4 || e4 === document.body || !!J2.current?.contains(e4), M2(false);
      };
      e3 && !v2 ? eo2.current = window.setTimeout(t3, e3) : t3();
    }
    function ez(e3) {
      ek(e3);
      let t3 = e3.trim();
      if (!t3) return void eS("Showing all favorites and projects");
      let a3 = ej[ey], r2 = a3.favorites.filter((e4) => er(e4.name, t3)).length + a3.projects.filter((e4) => er(e4.name, t3)).length;
      eS(
        0 === r2 ? `No results for ${t3}` : `${r2} ${1 === r2 ? "result" : "results"}`
      );
    }
    function eH(e3) {
      if (e3 === k2) return;
      let t3 = e_.current;
      !e3 || !t3 || "frozen" in t3.dataset || (t3.style.setProperty("--search-width", `${t3.clientWidth}px`), t3.dataset.frozen = "");
      let a3 = document.activeElement;
      e3 && a3 instanceof HTMLElement && a3.closest("[data-rail-hidden]") && X2.current?.contains(a3) && ex.current?.focus(), E2(e3), eS(e3 ? "Sidebar collapsed" : "Sidebar expanded"), i2?.(e3);
    }
    function eq(e3) {
      let t3 = eh2.current;
      if (!t3 || t3.id !== e3.pointerId || (eh2.current = null, "x" !== t3.axis))
        return;
      let a3 = el2.get();
      "pointercancel" !== e3.type && (a3 < -eu2.current / 3 || t3.velocity < -500) ? (em2.current = t3.velocity, eO()) : (0, p.i)(el2, 0, v2 ? U : { ...B.smooth, velocity: t3.velocity });
    }
    _2 = w2 && L2, (0, n.useEffect)(() => {
      if (!_2) return;
      let e3 = document.documentElement, t3 = { overflow: e3.style.overflow, gutter: e3.style.scrollbarGutter };
      return e3.scrollHeight > e3.clientHeight && (e3.style.scrollbarGutter = "stable"), e3.style.overflow = "hidden", () => {
        e3.style.overflow = t3.overflow, e3.style.scrollbarGutter = t3.gutter;
      };
    }, [_2]), (0, n.useEffect)(() => () => window.clearTimeout(eo2.current), []), (0, n.useEffect)(() => {
      L2 ? J2.current?.focus({ preventScroll: true }) : z2.current && (z2.current = false, es2.current?.focus({ preventScroll: true, focusVisible: false }));
    }, [L2]), (0, n.useEffect)(() => {
      if (!A2) return;
      let e3 = () => {
        L2 || I2(false);
      };
      if (v2) {
        L2 && el2.jump(0);
        let t4 = (0, p.i)(ed2, +!!L2, {
          duration: O.fast,
          ease: W,
          onComplete: () => {
            L2 || el2.jump(-eu2.current), e3();
          }
        });
        return () => t4.stop();
      }
      ed2.jump(1);
      let t3 = em2.current;
      em2.current = 0;
      let a3 = (0, p.i)(el2, L2 ? 0 : -eu2.current, {
        ...B.smooth,
        velocity: t3,
        onComplete: e3
      });
      return () => a3.stop();
    }, [L2, A2, v2, el2, ed2]), j2 = (0, n.useEffectEvent)((e3) => {
      if ("[" !== e3.key || e3.repeat || e3.metaKey || e3.ctrlKey || e3.altKey || e3.defaultPrevented)
        return;
      let t3 = X2.current, a3 = e3.target instanceof HTMLElement ? e3.target : null;
      if (!t3 || a3 && (a3.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(a3.tagName) || a3.closest('[role="menu"], [role="dialog"]')))
        return;
      let r2 = t3.getBoundingClientRect();
      !r2.width || r2.bottom < 0 || r2.top > window.innerHeight || (e3.preventDefault(), (() => {
        w2 ? L2 ? eO() : eB() : eH(!k2);
      })());
    }), (0, n.useEffect)(() => {
      let e3 = (e4) => j2(e4);
      return window.addEventListener("keydown", e3), () => window.removeEventListener("keydown", e3);
    }, []);
    let eW = (0, r.jsxs)(m.PY1.nav, {
      ref: X2,
      id: V2,
      className: [D().sidebar, e2].filter(Boolean).join(" "),
      "aria-label": "Workspace",
      style: w2 ? void 0 : { width: eb },
      "data-rail": K2 || void 0,
      "data-placement": w2 ? "drawer" : "inline",
      children: [
        (0, r.jsxs)("div", {
          className: D().header,
          children: [
            (0, r.jsxs)(o.bL, {
              onOpenChange: (e3) => {
                q2.current = e3, e3 && eE(null);
              },
              children: [
                (0, r.jsx)(ee, {
                  enabled: K2,
                  label: eL.name,
                  note: `${eL.plan} plan`,
                  children: (0, r.jsxs)(o.l9, {
                    ref: eR,
                    className: D().switcher,
                    "aria-label": `${eL.name}, ${eL.plan} plan. Switch workspace`,
                    children: [
                      (0, r.jsx)(en, { workspace: eL, reduce: v2 }),
                      (0, r.jsxs)("span", {
                        className: D().switcherText,
                        children: [
                          (0, r.jsx)(R.g, {
                            className: D().workspaceName,
                            children: eL.name
                          }),
                          (0, r.jsx)(ei, {
                            className: D().workspaceMeta,
                            text: `${eL.plan} \xB7 ${eL.members}`,
                            reduce: v2
                          })
                        ]
                      }),
                      (0, r.jsx)(N.A, {
                        className: D().chevron,
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      })
                    ]
                  })
                }),
                (0, r.jsx)(o.ZL, {
                  children: (0, r.jsxs)(o.UC, {
                    className: D().menu,
                    align: "start",
                    sideOffset: 6,
                    collisionPadding: 12,
                    loop: true,
                    onFocus: function(e3) {
                      let t3 = e3.target instanceof HTMLElement ? e3.target.closest('[role="menuitemradio"]') : null;
                      if (!t3) return void eE(null);
                      let a3 = e$.current;
                      eE((e4) => ({
                        top: t3.offsetTop,
                        height: t3.offsetHeight,
                        glide: a3 && null !== e4
                      }));
                    },
                    onCloseAutoFocus: (e3) => {
                      e$.current && (e3.preventDefault(), eR.current?.focus({
                        preventScroll: true,
                        focusVisible: false
                      }));
                    },
                    onPointerMoveCapture: () => {
                      e$.current = true;
                    },
                    onKeyDownCapture: () => {
                      e$.current = false;
                    },
                    children: [
                      (0, r.jsx)(m.PY1.span, {
                        className: D().menuHighlight,
                        "aria-hidden": "true",
                        initial: false,
                        animate: eP ? { y: eP.top, height: eP.height, opacity: 1 } : { opacity: 0 },
                        transition: {
                          default: eP?.glide && !v2 ? B.snappy : U,
                          opacity: { duration: 0.08 * !v2 }
                        }
                      }),
                      (0, r.jsx)(o.JU, {
                        className: D().menuLabel,
                        children: "Switch workspace"
                      }),
                      (0, r.jsx)(o.z6, {
                        value: ey,
                        onValueChange: function(e3) {
                          let t3 = Y.find((t4) => t4.id === e3);
                          t3 && e3 !== ey && (eg(e3), eS(`Switched to ${t3.name}`));
                        },
                        children: Y.map(
                          (e3, t3) => (0, r.jsxs)(
                            o.hN,
                            {
                              value: e3.id,
                              className: D().menuItem,
                              style: { "--i": t3 },
                              children: [
                                (0, r.jsx)(en, {
                                  workspace: e3,
                                  small: true,
                                  reduce: v2
                                }),
                                (0, r.jsxs)("span", {
                                  className: D().menuText,
                                  children: [
                                    (0, r.jsx)("span", { children: e3.name }),
                                    (0, r.jsxs)("small", {
                                      children: [
                                        e3.plan,
                                        " plan \xB7 ",
                                        e3.members
                                      ]
                                    })
                                  ]
                                }),
                                (0, r.jsx)(o.VF, {
                                  className: D().menuCheck,
                                  children: (0, r.jsx)(T.A, {
                                    size: 16,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  })
                                })
                              ]
                            },
                            e3.id
                          )
                        )
                      })
                    ]
                  })
                })
              ]
            }),
            (0, r.jsxs)("div", {
              className: D().searchRow,
              children: [
                (0, r.jsx)("div", {
                  ref: e_,
                  className: D().searchClip,
                  "data-rail-hidden": "",
                  inert: K2,
                  children: (0, r.jsx)("div", {
                    className: D().search,
                    children: (0, r.jsx)($.L, {
                      label: "Search favorites and projects",
                      placeholder: "Search",
                      value: ew,
                      onValueChange: ez,
                      onKeyDown: (e3) => {
                        "Escape" === e3.key && ew && (e3.preventDefault(), ez(""));
                      }
                    })
                  })
                }),
                w2 ? (0, r.jsx)("button", {
                  ref: ex,
                  type: "button",
                  className: D().toggle,
                  "aria-label": "Close sidebar",
                  onClick: () => eO(),
                  children: (0, r.jsx)(C.A, {
                    size: 18,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                }) : (0, r.jsx)(ee, {
                  label: k2 ? "Expand sidebar" : "Collapse sidebar",
                  shortcut: "[",
                  side: k2 ? "right" : "bottom",
                  children: (0, r.jsx)("button", {
                    ref: ex,
                    type: "button",
                    className: D().toggle,
                    "aria-label": k2 ? "Expand sidebar" : "Collapse sidebar",
                    "aria-expanded": !k2,
                    "aria-keyshortcuts": "[",
                    onClick: () => eH(!k2),
                    children: (0, r.jsx)(et, { collapsed: k2, reduce: v2 })
                  })
                })
              ]
            })
          ]
        }),
        (0, r.jsx)(m.PY1.div, {
          className: D().scroll,
          layoutScroll: true,
          children: (0, r.jsx)("div", {
            className: D().stack,
            children: (0, r.jsx)(h.N, {
              initial: false,
              children: (0, r.jsx)(
                ec,
                {
                  workspace: eL,
                  lists: eM,
                  query: eA,
                  reduce: v2,
                  rail: K2,
                  onExpand: () => eH(false),
                  onSelect: function(e3, a3, r2) {
                    eI(e3, (e4) => ({
                      ...e4,
                      active: a3,
                      projects: e4.projects.map(
                        (e5) => e5.id === a3 ? { ...e5, unread: false } : e5
                      )
                    })), t2?.({ workspace: e3, id: a3, name: r2 }), w2 && eO(140);
                  },
                  onReorder: (e3, t3) => eI(e3, (e4) => ({ ...e4, favorites: t3 })),
                  onMoved: function(e3, t3, a3 = ej[e3].favorites) {
                    let r2 = a3.findIndex((e4) => e4.id === t3);
                    r2 >= 0 && eS(
                      `${a3[r2].name} moved to position ${r2 + 1} of ${a3.length}`
                    );
                  },
                  onCreate: function(e3, a3) {
                    let r2 = ej[e3].projects.length, i3 = {
                      id: `${a3.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${r2}`,
                      name: a3,
                      tone: ea(r2),
                      unread: false
                    };
                    return eI(e3, (e4) => ({
                      ...e4,
                      active: i3.id,
                      projects: [...e4.projects, i3]
                    })), eS(`Created ${a3}`), t2?.({ workspace: e3, id: i3.id, name: a3 }), w2 && eO(420), i3.id;
                  },
                  onClear: () => ez("")
                },
                eL.id
              )
            })
          })
        }),
        (0, r.jsxs)("div", {
          className: D().footer,
          children: [
            (0, r.jsx)(m.PY1.div, {
              className: D().storageFold,
              "data-rail-hidden": "",
              inert: K2,
              initial: false,
              animate: { height: K2 ? 0 : "auto" },
              transition: v2 ? U : B.smooth,
              children: (0, r.jsxs)("div", {
                className: D().storage,
                "data-full": eF ? "" : void 0,
                children: [
                  (0, r.jsxs)("div", {
                    className: D().storageHead,
                    children: [
                      (0, r.jsx)(ei, {
                        className: D().storageLabel,
                        text: eF ? "Storage almost full" : "Storage",
                        reduce: v2
                      }),
                      (0, r.jsx)("span", {
                        className: D().percent,
                        children: (0, r.jsx)(S.q, { value: eY, suffix: "%" })
                      })
                    ]
                  }),
                  (0, r.jsx)("div", {
                    className: D().track,
                    role: "meter",
                    "aria-label": "Storage used",
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    "aria-valuenow": eY,
                    "aria-valuetext": `${eY}%, ${eL.used} of ${eL.limit} GB`,
                    children: (0, r.jsx)(m.PY1.span, {
                      className: D().fill,
                      initial: false,
                      animate: { scaleX: eY / 100 },
                      transition: v2 ? U : B.smooth
                    })
                  }),
                  (0, r.jsx)(ei, {
                    className: D().storageDetail,
                    text: `${eL.used} GB of ${eL.limit} GB`,
                    reduce: v2
                  })
                ]
              })
            }),
            (0, r.jsx)(ee, {
              enabled: K2,
              label: "Emma Collins",
              note: eN ? "Away" : "Active",
              children: (0, r.jsxs)("button", {
                type: "button",
                className: D().user,
                onClick: function() {
                  eT((e3) => !e3), eS(eN ? "Status set to active" : "Status set to away");
                },
                "aria-label": `Emma Collins, ${eN ? "away" : "active"}. Set status to ${eN ? "active" : "away"}`,
                children: [
                  (0, r.jsx)(P.e, {
                    name: "Emma Collins",
                    src: "media/people/emma-collins.svg",
                    size: "md",
                    status: eN ? "offline" : "online"
                  }),
                  (0, r.jsxs)("span", {
                    className: D().userText,
                    children: [
                      (0, r.jsx)("span", {
                        className: D().userName,
                        children: "Emma Collins"
                      }),
                      (0, r.jsx)(R.g, {
                        className: D().userStatus,
                        children: eN ? "Away" : "Active"
                      })
                    ]
                  }),
                  (0, r.jsx)(ei, {
                    className: D().userHint,
                    text: eN ? "Set active" : "Set away",
                    reduce: v2
                  })
                ]
              })
            })
          ]
        }),
        (0, r.jsx)("p", {
          className: D().srOnly,
          role: "status",
          "aria-live": "polite",
          children: eC
        })
      ]
    });
    return w2 ? (0, r.jsxs)(l.Kq, {
      delayDuration: 250,
      skipDelayDuration: 300,
      children: [
        (0, r.jsxs)("div", {
          className: D().topbar,
          inert: L2,
          children: [
            (0, r.jsx)("button", {
              ref: es2,
              type: "button",
              className: D().opener,
              "aria-label": "Open sidebar",
              "aria-expanded": L2,
              "aria-controls": V2,
              "aria-keyshortcuts": "[",
              onClick: eB,
              children: (0, r.jsx)(et, { collapsed: true, reduce: v2 })
            }),
            (0, r.jsx)(en, { workspace: eL, small: true, reduce: v2 }),
            (0, r.jsxs)("span", {
              className: D().topbarText,
              children: [
                (0, r.jsx)(ei, {
                  className: D().topbarPage,
                  text: eD?.name ?? eL.name,
                  reduce: v2
                }),
                (0, r.jsx)(ei, {
                  className: D().topbarWorkspace,
                  text: eL.name,
                  reduce: v2
                })
              ]
            })
          ]
        }),
        (0, s.createPortal)(
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(m.PY1.div, {
                className: D().backdrop,
                "data-open": L2 ? "" : void 0,
                "data-shown": A2 ? "" : void 0,
                "aria-hidden": "true",
                style: { opacity: ef2 },
                onPointerDown: () => {
                  H2.current = !q2.current;
                },
                onClick: () => {
                  H2.current && eO(), H2.current = false;
                }
              }),
              (0, r.jsx)(m.PY1.div, {
                ref: J2,
                className: D().sheet,
                "data-shown": A2 ? "" : void 0,
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Workspace sidebar",
                tabIndex: -1,
                inert: !L2,
                onKeyDown: function(e3) {
                  let t3 = e3.target instanceof Element ? e3.target : null;
                  if (e3.defaultPrevented || !J2.current || !t3 || !J2.current.contains(t3))
                    return;
                  if ("Escape" === e3.key) {
                    e3.preventDefault(), eO();
                    return;
                  }
                  if ("Tab" !== e3.key) return;
                  let a3 = [
                    ...J2.current.querySelectorAll(
                      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
                    )
                  ].filter(
                    (e4) => !e4.closest("[inert]") && e4.getClientRects().length > 0
                  );
                  if (!a3.length) return;
                  let r2 = a3[0], i3 = a3[a3.length - 1];
                  e3.shiftKey && (document.activeElement === r2 || document.activeElement === J2.current) ? (e3.preventDefault(), i3.focus()) : e3.shiftKey || document.activeElement !== i3 || (e3.preventDefault(), r2.focus());
                },
                style: { x: el2, opacity: ed2 },
                onPointerDown: function(e3) {
                  if ("mouse" === e3.pointerType || !L2 || eh2.current) return;
                  let t3 = e3.target instanceof Element ? e3.target : null;
                  t3?.closest("input, textarea, [data-lifted]") || (eh2.current = {
                    id: e3.pointerId,
                    x: e3.clientX,
                    y: e3.clientY,
                    time: e3.timeStamp,
                    axis: null,
                    velocity: 0
                  });
                },
                onPointerMove: function(e3) {
                  let t3 = eh2.current;
                  if (!t3 || t3.id !== e3.pointerId) return;
                  let a3 = e3.clientX - t3.x, r2 = e3.clientY - t3.y;
                  if (!t3.axis) {
                    if (8 > Math.hypot(a3, r2)) return;
                    t3.axis = Math.abs(a3) > 1.2 * Math.abs(r2) && !J2.current?.querySelector("[data-lifted]") ? "x" : "y", "x" === t3.axis && (t3.x = e3.clientX, e3.currentTarget.setPointerCapture(e3.pointerId));
                    return;
                  }
                  if ("x" !== t3.axis) return;
                  let i3 = e3.clientX - t3.x, n2 = i3 > 0 ? 10 * (1 - Math.exp(-i3 / 60)) : i3, s2 = Math.max(1, e3.timeStamp - t3.time);
                  t3.velocity = (n2 - el2.get()) / s2 * 1e3, t3.time = e3.timeStamp, el2.jump(n2);
                },
                onPointerUp: eq,
                onPointerCancel: eq,
                children: eW
              })
            ]
          }),
          document.body
        )
      ]
    }) : (0, r.jsx)(l.Kq, {
      delayDuration: 250,
      skipDelayDuration: 300,
      children: eW
    });
  }
  var em = a(33627), eh = a.n(em);
  function ef() {
    return (0, r.jsx)("div", {
      className: eh().demo,
      children: (0, r.jsx)(ep, { className: eh().sidebar })
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(98344, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { g: () => w });
  var s = a(95155), r = a(12115), i = a(18310), n = a(92171), o = a(80642), l = a(25354), d = a(7770), c = a(64444), u = a.n(c);
  let p = [...d.T.ease.enter], h = [...d.T.ease.standard], m = `blur(${d.T.blur.soft}px)`;
  function y(e2) {
    let t2 = /* @__PURE__ */ new Map();
    return Array.from(e2).map((e3) => {
      let a2 = t2.get(e3) ?? 0;
      return t2.set(e3, a2 + 1), { char: e3, key: `${e3}-${a2}` };
    });
  }
  let g = (e2) => parseFloat(getComputedStyle(e2).width);
  function w({ children: e2, as: t2 = "span", className: a2, id: c2 }) {
    let x = (0, i.I)(), f = (0, r.useRef)(null), _ = (0, r.useRef)(null), k = (0, r.useRef)(0), v = (0, r.useRef)(null), j = (0, r.useMemo)(() => y(e2), [e2]), [b, S] = (0, r.useState)({ current: e2, previous: e2 });
    b.current !== e2 && S({ current: e2, previous: b.current });
    let N = (0, r.useMemo)(
      () => new Set(y(b.previous).map((e3) => e3.key)),
      [b.previous]
    ), A = 0;
    return (0, r.useLayoutEffect)(() => {
      let e3 = f.current, t3 = _.current;
      if (!e3 || !t3) return;
      let a3 = g(t3);
      Number.isFinite(a3) && (k.current && Math.abs(a3 - k.current) > 0.5 && !x ? v.current = (0, n.i)(e3, { width: a3 }, d.T.spring.morph) : (v.current?.stop(), e3.style.width = `${a3}px`), k.current = a3);
    }, [e2, x]), (0, r.useEffect)(() => {
      let e3 = f.current, t3 = _.current;
      if (!e3 || !t3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(() => {
        let a4 = g(t3);
        !Number.isFinite(a4) || 0.5 > Math.abs(a4 - k.current) || (v.current?.stop(), e3.style.width = `${a4}px`, k.current = a4);
      });
      return a3.observe(t3), () => a3.disconnect();
    }, []), (0, s.jsxs)(t2, {
      id: c2,
      className: a2,
      children: [
        (0, s.jsx)("span", { className: u().srOnly, children: e2 }),
        (0, s.jsx)("span", {
          ref: f,
          className: u().frame,
          "aria-hidden": "true",
          children: (0, s.jsx)("span", {
            ref: _,
            className: u().track,
            children: (0, s.jsx)(o.N, {
              mode: "popLayout",
              initial: false,
              children: j.map(({ char: e3, key: t3 }) => {
                let a3 = N.has(t3) ? 0 : A++;
                return (0, s.jsx)(
                  l.PY1.span,
                  {
                    layout: "position",
                    className: u().glyph,
                    initial: !x && {
                      opacity: 0,
                      scale: 0.8,
                      y: "0.14em",
                      filter: m
                    },
                    animate: {
                      opacity: 1,
                      scale: 1,
                      y: "0em",
                      filter: "blur(0px)"
                    },
                    exit: x ? { opacity: 0, transition: { duration: 0 } } : {
                      opacity: 0,
                      scale: 0.86,
                      y: "-0.1em",
                      filter: m,
                      transition: {
                        duration: d.T.duration.exit,
                        ease: h
                      }
                    },
                    transition: x ? { duration: 0 } : {
                      layout: d.T.spring.morph,
                      default: {
                        duration: d.T.duration.standard + 0.04,
                        ease: p,
                        delay: 0.05 + Math.min(a3, 8) * d.T.stagger.char * 2
                      }
                    },
                    children: " " === e3 ? "\xA0" : e3
                  },
                  t3
                );
              })
            })
          })
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.cssFor("workspace-sidebar", [33627,64444,79698,80112]);
A.item("workspace-sidebar", {entry:87853, export:"WorkspaceSidebarDemo", kind:"block", tier:"pro", unresolved:[]});
})();