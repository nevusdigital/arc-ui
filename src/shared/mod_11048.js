function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, {
    KN: () => r,
    gQ: () => h,
    px: () => o,
    uj: () => s,
    vh: () => a,
    vw: () => l
  });
  let n = (t2) => ({
    test: (e2) => "string" == typeof e2 && e2.endsWith(t2) && 1 === e2.split(" ").length,
    parse: parseFloat,
    transform: (e2) => `${e2}${t2}`
  }), s = n("deg"), r = n("%"), o = n("px"), a = n("vh"), l = n("vw"), h = {
    ...r,
    parse: (t2) => r.parse(t2) / 100,
    transform: (t2) => r.transform(100 * t2)
  };
}

__m(__module,__exports,__require);
}