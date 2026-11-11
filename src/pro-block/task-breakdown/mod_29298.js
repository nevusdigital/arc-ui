function(__module,__exports,__require){
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
}