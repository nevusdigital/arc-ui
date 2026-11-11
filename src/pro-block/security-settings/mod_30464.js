function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { l: () => l });
  var r = n(12115), o = n(28819), i = n(24866), s = n(18310), a = n(92171);
  function l() {
    var e2;
    let t2 = (0, o.M)(() => ({ current: null, animations: [] })), n2 = (function() {
      let e3 = (0, s.I)(), { reducedMotion: t3 } = (0, r.useContext)(i.Q);
      return "never" !== t3 && ("always" === t3 || e3);
    })() ?? void 0, { skipAnimations: l2 } = (0, r.useContext)(i.Q), u = (0, r.useMemo)(
      () => (0, a.W)({ scope: t2, reduceMotion: n2, skipAnimations: l2 }),
      [t2, n2, l2]
    );
    return e2 = () => {
      t2.animations.forEach((e3) => e3.stop()), t2.animations.length = 0;
    }, (0, r.useEffect)(() => () => e2(), []), [t2, u];
  }
}

__m(__module,__exports,__require);
}