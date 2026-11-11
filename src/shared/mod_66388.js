function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  function n(e2) {
    if ("function" != typeof WeakMap) return null;
    var t2 = /* @__PURE__ */ new WeakMap(), r2 = /* @__PURE__ */ new WeakMap();
    return (n = function(e3) {
      return e3 ? r2 : t2;
    })(e2);
  }
  function a(e2, t2) {
    if (!t2 && e2 && e2.__esModule) return e2;
    if (null === e2 || "object" != typeof e2 && "function" != typeof e2)
      return { default: e2 };
    var r2 = n(t2);
    if (r2 && r2.has(e2)) return r2.get(e2);
    var a2 = { __proto__: null }, u = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var l in e2)
      if ("default" !== l && Object.prototype.hasOwnProperty.call(e2, l)) {
        var o = u ? Object.getOwnPropertyDescriptor(e2, l) : null;
        o && (o.get || o.set) ? Object.defineProperty(a2, l, o) : a2[l] = e2[l];
      }
    return a2.default = e2, r2 && r2.set(e2, a2), a2;
  }
  r.r(t), r.d(t, { _: () => a });
}

__m(__module,__exports,__require);
}