function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { s: () => c });
  var r = n(12115), o = Object.defineProperty, i = (e2, t2) => o(e2, "name", { value: t2, configurable: true });
  function l(e2, t2) {
    if ("function" == typeof e2) return e2(t2);
    null != e2 && (e2.current = t2);
  }
  function u(...e2) {
    return (t2) => {
      let n2 = false, r2 = e2.map((e3) => {
        let r3 = l(e3, t2);
        return n2 || "function" != typeof r3 || (n2 = true), r3;
      });
      if (n2)
        return () => {
          for (let t3 = 0; t3 < r2.length; t3++) {
            let n3 = r2[t3];
            "function" == typeof n3 ? n3() : l(e2[t3], null);
          }
        };
    };
  }
  function c(...e2) {
    return r.useCallback(u(...e2), e2);
  }
  i(l, "setRef"), i(u, "composeRefs"), i(c, "useComposedRefs");
}

__m(__module,__exports,__require);
}