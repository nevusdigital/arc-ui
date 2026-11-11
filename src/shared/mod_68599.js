function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => u });
  var r = n(12115), o = n(95155), i = Object.defineProperty, l = (e2, t2) => i(e2, "name", { value: t2, configurable: true });
  function u(e2, t2 = []) {
    let n2 = [];
    function i2(t3, i3) {
      let u2 = r.createContext(i3);
      u2.displayName = t3 + "Context";
      let c2 = n2.length;
      n2 = [...n2, i3];
      let a2 = l((t4) => {
        let { scope: n3, children: i4, ...l2 } = t4, a3 = n3?.[e2]?.[c2] || u2, s2 = r.useMemo(() => l2, Object.values(l2));
        return (0, o.jsx)(a3.Provider, { value: s2, children: i4 });
      }, "Provider");
      function s(n3, o2, l2 = {}) {
        let { optional: a3 = false } = l2, f = o2?.[e2]?.[c2] || u2, d = r.useContext(f);
        if (d) return d;
        if (void 0 !== i3) return i3;
        if (!a3) throw Error(`\`${n3}\` must be used within \`${t3}\``);
      }
      return a2.displayName = t3 + "Provider", l(s, "useContext"), [a2, s];
    }
    l(i2, "createContext");
    let a = l(() => {
      let t3 = n2.map((e3) => r.createContext(e3));
      return l(function(n3) {
        let o2 = n3?.[e2] || t3;
        return r.useMemo(() => ({ [`__scope${e2}`]: { ...n3, [e2]: o2 } }), [n3, o2]);
      }, "useScope");
    }, "createScope");
    return a.scopeName = e2, [i2, c(a, ...t2)];
  }
  function c(...e2) {
    let t2 = e2[0];
    if (1 === e2.length) return t2;
    let n2 = l(() => {
      let n3 = e2.map((e3) => ({ useScope: e3(), scopeName: e3.scopeName }));
      return l(function(e3) {
        let o2 = n3.reduce((t3, { useScope: n4, scopeName: r2 }) => {
          let o3 = n4(e3)[`__scope${r2}`];
          return { ...t3, ...o3 };
        }, {});
        return r.useMemo(() => ({ [`__scope${t2.scopeName}`]: o2 }), [o2]);
      }, "useComposedScopes");
    }, "createScope");
    return n2.scopeName = t2.scopeName, n2;
  }
  l(function(e2, t2) {
    let n2 = r.createContext(t2);
    n2.displayName = e2 + "Context";
    let i2 = l((e3) => {
      let { children: t3, ...i3 } = e3, l2 = r.useMemo(() => i3, Object.values(i3));
      return (0, o.jsx)(n2.Provider, { value: l2, children: t3 });
    }, "Provider");
    function u2(o2, i3 = {}) {
      let { optional: l2 = false } = i3, c2 = r.useContext(n2);
      if (c2) return c2;
      if (void 0 !== t2) return t2;
      if (!l2) throw Error(`\`${o2}\` must be used within \`${e2}\``);
    }
    return i2.displayName = e2 + "Provider", l(u2, "useContext"), [i2, u2];
  }, "createContext"), l(u, "createContextScope"), l(c, "composeContextScopes");
}

__m(__module,__exports,__require);
}