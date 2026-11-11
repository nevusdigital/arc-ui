function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  Object.defineProperty(t, "__esModule", { value: true }), Object.defineProperty(t, "default", {
    enumerable: true,
    get: function() {
      return o;
    }
  });
  let i = r(12115), n = i.useLayoutEffect, a = i.useEffect;
  function o(e2) {
    let { headManager: t2, reduceComponentsToState: r2 } = e2;
    function o2() {
      if (t2 && t2.mountedInstances) {
        let e3 = i.Children.toArray(
          Array.from(t2.mountedInstances).filter(Boolean)
        );
        t2.updateHead(r2(e3));
      }
    }
    return n(
      () => (t2?.mountedInstances?.add(e2.children), () => {
        t2?.mountedInstances?.delete(e2.children);
      })
    ), n(
      () => (t2 && (t2._pendingUpdate = o2), () => {
        t2 && (t2._pendingUpdate = o2);
      })
    ), a(
      () => (t2 && t2._pendingUpdate && (t2._pendingUpdate(), t2._pendingUpdate = null), () => {
        t2 && t2._pendingUpdate && (t2._pendingUpdate(), t2._pendingUpdate = null);
      })
    ), null;
  }
}

__m(__module,__exports,__require);
}