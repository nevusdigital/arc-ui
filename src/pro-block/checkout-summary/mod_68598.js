function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { E: () => i });
  var d = t(28819), h = t(65239), n = t(67119), r = t(38294), l = t(5556);
  function y(e2, a2) {
    [...a2].reverse().forEach((t2) => {
      let d2 = e2.getVariant(t2);
      d2 && (0, n.U)(e2, d2), e2.variantChildren && e2.variantChildren.forEach((e3) => {
        y(e3, a2);
      });
    });
  }
  function o() {
    let e2 = false, a2 = /* @__PURE__ */ new Set(), t2 = {
      subscribe: (e3) => (a2.add(e3), () => void a2.delete(e3)),
      start(t3, d2) {
        (0, l.V)(
          e2,
          "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook."
        );
        let h2 = [];
        return a2.forEach((e3) => {
          h2.push((0, r._)(e3, t3, { transitionOverride: d2 }));
        }), Promise.all(h2);
      },
      set: (t3) => ((0, l.V)(
        e2,
        "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
      ), a2.forEach((e3) => {
        var a3, d2;
        a3 = e3, Array.isArray(d2 = t3) ? y(a3, d2) : "string" == typeof d2 ? y(a3, [d2]) : (0, n.U)(a3, d2);
      })),
      stop() {
        a2.forEach((e3) => {
          e3.values.forEach((e4) => e4.stop());
        });
      },
      mount: () => (e2 = true, () => {
        e2 = false, t2.stop();
      })
    };
    return t2;
  }
  function i() {
    let e2 = (0, d.M)(o);
    return (0, h.E)(e2.mount, []), e2;
  }
}

__m(__module,__exports,__require);
}