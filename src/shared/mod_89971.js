function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { B: () => c });
  var r, u = n(12115), i = n(66294), s = Object.defineProperty, o = (r || (r = n.t(u, 2)))[" useId ".trim().toString()] || (() => void 0), a = 0;
  function c(e2) {
    let [t2, n2] = u.useState(o());
    return (0, i.N)(() => {
      e2 || n2((e3) => e3 ?? String(a++));
    }, [e2]), e2 || (t2 ? `radix-${t2}` : "");
  }
  s(c, "name", { value: "useId", configurable: true });
}

__m(__module,__exports,__require);
}