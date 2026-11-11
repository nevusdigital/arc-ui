function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { p: () => l });
  var n = i(83399), s = i(21620);
  let r = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
  function o(t2) {
    let [e2, i2] = t2.slice(0, -1).split("(");
    if ("drop-shadow" === e2) return t2;
    let [n2] = i2.match(s.S) || [];
    if (!n2) return t2;
    let o2 = i2.replace(n2, ""), a2 = +!!r.has(e2);
    return n2 !== i2 && (a2 *= 100), e2 + "(" + a2 + o2 + ")";
  }
  let a = /\b([a-z-]*)\(.*?\)/gu, l = {
    ...n.f,
    getAnimatableNone: (t2) => {
      let e2 = t2.match(a);
      return e2 ? e2.map(o).join(" ") : t2;
    }
  };
}

__m(__module,__exports,__require);
}