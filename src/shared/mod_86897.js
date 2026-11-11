function(__module,__exports,__require){
"use strict";
function __m(e, t) {
  "use strict";
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element");
  function n(e2, t2, n2) {
    var a = null;
    if (void 0 !== n2 && (a = "" + n2), void 0 !== t2.key && (a = "" + t2.key), "key" in t2)
      for (var u in n2 = {}, t2) "key" !== u && (n2[u] = t2[u]);
    else n2 = t2;
    return {
      $$typeof: r,
      type: e2,
      key: a,
      ref: void 0 !== (t2 = n2.ref) ? t2 : null,
      props: n2
    };
  }
  t.Fragment = /* @__PURE__ */ Symbol.for("react.fragment"), t.jsx = n, t.jsxs = n;
}

__m(__module,__exports,__require);
}