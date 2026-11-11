function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { O: () => a, e: () => o });
  var n = i(26087), s = i(63290), r = i(51129);
  function o(t2) {
    if ((0, n.N)(t2.animate)) return true;
    for (let e2 = 0; e2 < r._.length; e2++) if ((0, s.w)(t2[r._[e2]])) return true;
    return false;
  }
  function a(t2) {
    return !!(o(t2) || t2.variants);
  }
}

__m(__module,__exports,__require);
}