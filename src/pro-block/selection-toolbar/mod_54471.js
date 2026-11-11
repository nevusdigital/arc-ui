function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { n: () => o });
  var r = a(12115);
  let n = (e2) => {
    let t2 = 0, a2 = () => {
      let r3 = /* @__PURE__ */ new Date(), n2 = new Date(r3.getFullYear(), r3.getMonth(), r3.getDate() + 1);
      t2 = window.setTimeout(
        () => {
          e2(), a2();
        },
        n2.getTime() - r3.getTime() + 1e3
      );
    }, r2 = () => {
      "visible" === document.visibilityState && e2();
    };
    return a2(), document.addEventListener("visibilitychange", r2), window.addEventListener("focus", e2), () => {
      window.clearTimeout(t2), document.removeEventListener("visibilitychange", r2), window.removeEventListener("focus", e2);
    };
  }, i = () => {
    let e2;
    return e2 = /* @__PURE__ */ new Date(), `${e2.getFullYear()}-${String(e2.getMonth() + 1).padStart(2, "0")}-${String(e2.getDate()).padStart(2, "0")}`;
  }, l = () => "";
  function o() {
    let e2 = (0, r.useSyncExternalStore)(n, i, l);
    return (0, r.useMemo)(
      () => e2 ? ((e3) => {
        let [t2 = 1970, a2 = 1, r2 = 1] = e3.split("-").map(Number);
        return new Date(t2, a2 - 1, r2);
      })(e2) : void 0,
      [e2]
    );
  }
}

__m(__module,__exports,__require);
}