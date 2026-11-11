function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { N: () => l });
  var n = i(27933), a = i(12115), r = i(24866);
  function l(e2) {
    let t2 = (0, a.useRef)(0), { isStatic: i2 } = (0, a.useContext)(r.Q);
    (0, a.useEffect)(() => {
      if (i2) return;
      let a2 = ({ timestamp: i3, delta: n2 }) => {
        t2.current || (t2.current = i3), e2(i3 - t2.current, n2);
      };
      return n.Gt.update(a2, true), () => (0, n.WG)(a2);
    }, [e2]);
  }
}

__m(__module,__exports,__require);
}