function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { tF: () => o, xQ: () => r });
  var n = i(12115), s = i(15131);
  function r(t2 = true) {
    let e2 = (0, n.useContext)(s.t);
    if (null === e2) return [true, null];
    let { isPresent: i2, onExitComplete: o2, register: a } = e2, l = (0, n.useId)();
    (0, n.useEffect)(() => {
      if (t2) return a(l);
    }, [t2]);
    let h = (0, n.useCallback)(() => t2 && o2 && o2(l), [l, o2, t2]);
    return !i2 && o2 ? [false, h] : [true];
  }
  function o() {
    var t2;
    return null === (t2 = (0, n.useContext)(s.t)) || t2.isPresent;
  }
}

__m(__module,__exports,__require);
}