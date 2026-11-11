function(__module,__exports,__require){
"use strict";
function __m(t, e, i) {
  i.d(e, { u: () => s });
  var n = i(27994);
  let s = {
    test: (0, i(82163).$)("#"),
    parse: function(t2) {
      let e2 = "", i2 = "", n2 = "", s2 = "";
      return t2.length > 5 ? (e2 = t2.substring(1, 3), i2 = t2.substring(3, 5), n2 = t2.substring(5, 7), s2 = t2.substring(7, 9)) : (e2 = t2.substring(1, 2), i2 = t2.substring(2, 3), n2 = t2.substring(3, 4), s2 = t2.substring(4, 5), e2 += e2, i2 += i2, n2 += n2, s2 += s2), {
        red: parseInt(e2, 16),
        green: parseInt(i2, 16),
        blue: parseInt(n2, 16),
        alpha: s2 ? parseInt(s2, 16) / 255 : 1
      };
    },
    transform: n.B.transform
  };
}

__m(__module,__exports,__require);
}