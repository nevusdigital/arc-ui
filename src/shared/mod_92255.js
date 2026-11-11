function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { d: () => s });
  var n = i(83399);
  let s = {
    ...n.f,
    getAnimatableNone: (t2) => {
      let e2 = n.f.parse(t2);
      return n.f.createTransformer(t2)(
        e2.map(
          (t3) => "number" == typeof t3 ? 0 : "object" == typeof t3 ? { ...t3, alpha: 1 } : t3
        )
      );
    }
  };
}

__m(__module,__exports,__require);
}