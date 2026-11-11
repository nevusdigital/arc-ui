function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { U: () => o });
  var n = i(6900), s = i(33140), r = i(91909);
  function o(t2, e2) {
    let {
      transitionEnd: i2 = {},
      transition: o2 = {},
      ...a
    } = (0, s.K)(t2, e2) || {};
    for (let e3 in a = { ...a, ...i2 }) {
      var l;
      let i3 = (l = a[e3], (0, r.p)(l) ? l[l.length - 1] || 0 : l);
      t2.hasValue(e3) ? t2.getValue(e3).set(i3) : t2.addValue(e3, (0, n.OQ)(i3));
    }
  }
}

__m(__module,__exports,__require);
}