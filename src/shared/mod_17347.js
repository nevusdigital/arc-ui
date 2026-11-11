function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { c: () => u });
  var r = n(12115);
  function u(e2) {
    let t2 = r.useRef(e2);
    return r.useEffect(() => {
      t2.current = e2;
    }), r.useMemo(
      () => (...e3) => t2.current?.(...e3),
      []
    );
  }
  (0, Object.defineProperty)(u, "name", {
    value: "useCallbackRef",
    configurable: true
  });
}

__m(__module,__exports,__require);
}