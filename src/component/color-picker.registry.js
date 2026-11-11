/* color-picker (free component, cross-ref module 63040, closure 159) */
(function(){var A=globalThis.__ARC__;
A.reg(0, function(){return void 0;});
A.reg(2, function(){return void 0;});
A.reg(4, function(){return void 0;});
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
A.reg(41369, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { T: () => r });
  let r = (0, n(12115).createContext)(null);
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
A.reg(64324, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => i });
  var n = r(51811);
  let l = {
    name: "pipette",
    size: 24,
    node: [
      [
        "path",
        {
          d: "m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12",
          key: "1y3wsu"
        }
      ],
      [
        "path",
        {
          d: "m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z",
          key: "110lr1"
        }
      ],
      ["path", { d: "m2 22 .414-.414", key: "jhxm08" }]
    ]
  };
  l.node;
  let i = (0, n.A)(l);
}

__m(__module,__exports,__require);
});
A.regCss(64444, ".frame,.frame.frame{position:relative;display:inline-block;box-sizing:content-box;padding:.5em .5em .5em .2em;margin:-.5em -.5em -.5em -.2em;text-align:start;white-space:nowrap;mask-image:linear-gradient(90deg,#000 calc(100% - .5em),transparent)}\n.track{position:relative;display:inline-block;white-space:nowrap}\n.glyph{display:inline-block;white-space:pre;transform-origin:50% 60%}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0;user-select:none}", {"frame":"frame","track":"track","glyph":"glyph","srOnly":"srOnly"});
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
A.cssFor("color-picker", [64444]);
A.item("color-picker", {entry:63040, export:"ColorPickerDemo", kind:"component", tier:"free", unresolved:[6], xref:true});
})();