function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { K: () => n });
  function n(t2, e2, i2) {
    if (null == t2) return [];
    if (t2 instanceof EventTarget) return [t2];
    if ("string" == typeof t2) {
      let n2 = document;
      e2 && (n2 = e2.current);
      let s = i2?.[t2] ?? n2.querySelectorAll(t2);
      return s ? Array.from(s) : [];
    }
    return Array.from(t2).filter((t3) => null != t3);
  }
}

__m(__module,__exports,__require);
}