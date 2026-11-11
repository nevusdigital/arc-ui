function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  let n;
  i.d(e, { k: () => a });
  var s = i(28153), r = i(27933);
  function o() {
    n = void 0;
  }
  let a = {
    now: () => (void 0 === n && a.set(
      r.uv.isProcessing || s.W.useManualTiming ? r.uv.timestamp : performance.now()
    ), n),
    set: (t2) => {
      n = t2, queueMicrotask(o);
    }
  };
}

__m(__module,__exports,__require);
}