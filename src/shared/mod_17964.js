function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { Y: () => n, t: () => s });
  let n = 2e4;
  function s(t2, e2 = 50, i2 = n, r) {
    let o = 0, a = t2.next(o);
    for (r?.push(a.value); !a.done && o < i2; )
      o += e2, a = t2.next(o), r?.push(a.value);
    return o >= i2 ? 1 / 0 : o;
  }
}

__m(__module,__exports,__require);
}