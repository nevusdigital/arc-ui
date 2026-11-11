function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { U: () => o, m: () => a });
  var n = i(27933), s = i(37035);
  function r(t2, e2) {
    return {
      kind: t2,
      animation: e2,
      timestamp: s.k.now(),
      frameTimestamp: n.uv.timestamp,
      frameIsProcessing: n.uv.isProcessing
    };
  }
  function o(t2, e2, i2) {
    let n2 = globalThis.__MOTION_INSPECT__;
    if (n2)
      try {
        n2({ ...r("animation-start", t2), options: i2 ? { ...e2, ...i2 } : e2 });
      } catch {
      }
  }
  function a(t2, e2) {
    let i2 = globalThis.__MOTION_INSPECT__;
    if (i2)
      try {
        i2({ ...r("layout-animation-start", t2), node: e2 });
      } catch {
      }
  }
}

__m(__module,__exports,__require);
}