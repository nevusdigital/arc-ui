function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { W: () => i });
  var r = n(12115), o = n(58392);
  let a = { some: 0, all: 1 };
  function i(e2, { root: t2, margin: n2, amount: s, once: l = false, initial: u = false } = {}) {
    let [c, d] = (0, r.useState)(u);
    return (0, r.useEffect)(() => {
      if (!e2.current || l && c) return;
      let r2 = { root: t2 && t2.current || void 0, margin: n2, amount: s };
      return (function(e3, t3, { root: n3, margin: r3, amount: i2 = "some" } = {}) {
        let s2 = (0, o.K)(e3), l2 = /* @__PURE__ */ new WeakMap(), u2 = new IntersectionObserver(
          (e4) => {
            e4.forEach((e5) => {
              let n4 = l2.get(e5.target);
              if (!!n4 !== e5.isIntersecting)
                if (e5.isIntersecting) {
                  let n5 = t3(e5.target, e5);
                  "function" == typeof n5 ? l2.set(e5.target, n5) : u2.unobserve(e5.target);
                } else "function" == typeof n4 && (n4(e5), l2.delete(e5.target));
            });
          },
          {
            root: n3,
            rootMargin: r3,
            threshold: "number" == typeof i2 ? i2 : a[i2]
          }
        );
        return s2.forEach((e4) => u2.observe(e4)), () => u2.disconnect();
      })(e2.current, () => (d(true), l ? void 0 : () => d(false)), r2);
    }, [t2, e2, n2, l, s]), c;
  }
}

__m(__module,__exports,__require);
}