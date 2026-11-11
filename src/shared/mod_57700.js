function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { o: () => c });
  var n = r(95155), i = r(12115), a = r(39551);
  let s = (0, i.createContext)(null);
  var o = r(27933), l = r(65239);
  let d = (e2) => !e2.isLayoutDirty && e2.willUpdate(false), c = ({ children: e2, id: t2, inherit: r2 = true }) => {
    let c2 = (0, i.useContext)(a.L), u = (0, i.useContext)(s), [h, m] = (function() {
      let e3, t3 = (e3 = (0, i.useRef)(false), (0, l.E)(
        () => (e3.current = true, () => {
          e3.current = false;
        }),
        []
      ), e3), [r3, n2] = (0, i.useState)(0), a2 = (0, i.useCallback)(() => {
        t3.current && n2(r3 + 1);
      }, [r3]);
      return [(0, i.useCallback)(() => o.Gt.postRender(a2), [a2]), r3];
    })(), y = (0, i.useRef)(null), p = c2.id || u;
    if (null === y.current) {
      let e3, n2, i2, a2;
      (true == (true === (a2 = r2)) || "id" === a2) && p && (t2 = t2 ? p + "-" + t2 : p), y.current = {
        id: t2,
        group: true === r2 && c2.group || (e3 = /* @__PURE__ */ new Set(), n2 = /* @__PURE__ */ new WeakMap(), {
          add: (t3) => {
            e3.add(t3), n2.set(t3, t3.addEventListener("willUpdate", i2));
          },
          remove: (t3) => {
            e3.delete(t3);
            let r3 = n2.get(t3);
            r3 && (r3(), n2.delete(t3)), i2();
          },
          dirty: i2 = () => e3.forEach(d)
        })
      };
    }
    let f = (0, i.useMemo)(() => ({ ...y.current, forceRender: h }), [m]);
    return (0, n.jsx)(a.L.Provider, { value: f, children: e2 });
  };
}

__m(__module,__exports,__require);
}