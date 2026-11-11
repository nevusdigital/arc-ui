function(__module,__exports,__require){
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
}