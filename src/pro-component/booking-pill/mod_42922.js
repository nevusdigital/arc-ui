function(__module,__exports,__require){
"use strict";
function __m(t, e, r) {
  r.d(e, { V: () => a });
  var i = r(27933), n = r(7890), s = r(28245);
  function a(t2) {
    let e2 = (0, s.d)(t2.getVelocity()), r2 = () => {
      let n2 = t2.getVelocity();
      e2.set(n2), n2 && i.Gt.update(r2);
    };
    return (0, n.L)(t2, "change", () => {
      i.Gt.update(r2, false, true);
    }), e2;
  }
}

__m(__module,__exports,__require);
}