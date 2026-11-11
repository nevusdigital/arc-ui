function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { h: () => n });
  var r = a(12115);
  function n() {
    let [e2, t2] = (0, r.useState)(true);
    return (0, r.useEffect)(() => {
      let e3 = () => t2(!document.hidden);
      return document.hidden && e3(), document.addEventListener("visibilitychange", e3), () => {
        document.removeEventListener("visibilitychange", e3);
      };
    }, []), e2;
  }
}

__m(__module,__exports,__require);
}