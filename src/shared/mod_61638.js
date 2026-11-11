function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { g: () => r });
  var n = i(28153), s = i(51469);
  function r(t2, e2) {
    let i2 = t2.getValue("willChange");
    if ((0, s.S)(i2) && i2.add) return i2.add(e2);
    if (!i2 && n.W.WillChange) {
      let i3 = new n.W.WillChange("auto");
      t2.addValue("willChange", i3), i3.add(e2);
    }
  }
}

__m(__module,__exports,__require);
}