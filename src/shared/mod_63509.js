function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { X: () => i });
  var n = r(12115), a = r(66294);
  function i(e2) {
    let [t2, r2] = n.useState(void 0);
    return (0, a.N)(() => {
      if (e2) {
        r2({ width: e2.offsetWidth, height: e2.offsetHeight });
        let t3 = new ResizeObserver((t4) => {
          let n2, a2;
          if (!Array.isArray(t4) || !t4.length) return;
          let i2 = t4[0];
          if ("borderBoxSize" in i2) {
            let e3 = i2.borderBoxSize, t5 = Array.isArray(e3) ? e3[0] : e3;
            n2 = t5.inlineSize, a2 = t5.blockSize;
          } else n2 = e2.offsetWidth, a2 = e2.offsetHeight;
          r2({ width: n2, height: a2 });
        });
        return t3.observe(e2, { box: "border-box" }), () => t3.unobserve(e2);
      }
      r2(void 0);
    }, [e2]), t2;
  }
  (0, Object.defineProperty)(i, "name", { value: "useSize", configurable: true });
}

__m(__module,__exports,__require);
}