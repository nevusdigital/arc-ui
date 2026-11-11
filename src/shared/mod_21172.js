function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  Object.defineProperty(t, "__esModule", { value: true }), Object.defineProperty(t, "useMergedRef", {
    enumerable: true,
    get: function() {
      return o;
    }
  });
  let r = n(12115);
  function o(e2, t2) {
    let n2 = (0, r.useRef)(null), o2 = (0, r.useRef)(null);
    return (0, r.useCallback)(
      (r2) => {
        if (null === r2) {
          let e3 = n2.current;
          e3 && (n2.current = null, e3());
          let t3 = o2.current;
          t3 && (o2.current = null, t3());
        } else e2 && (n2.current = l(e2, r2)), t2 && (o2.current = l(t2, r2));
      },
      [e2, t2]
    );
  }
  function l(e2, t2) {
    if ("function" != typeof e2)
      return e2.current = t2, () => {
        e2.current = null;
      };
    {
      let n2 = e2(t2);
      return "function" == typeof n2 ? n2 : () => e2(null);
    }
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", { value: true }), Object.assign(t.default, t), e.exports = t.default);
}

__m(__module,__exports,__require);
}