function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { j4: () => s, pG: () => o, rm: () => l });
  let n = (t2) => (e2) => "string" == typeof e2 && e2.startsWith(t2), s = n("--"), r = n("var(--"), o = (t2) => !!r(t2) && a.test(t2.split("/*")[0].trim()), a = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
  function l(t2) {
    return "string" == typeof t2 && t2.split("/*")[0].includes("var(--");
  }
}

__m(__module,__exports,__require);
}