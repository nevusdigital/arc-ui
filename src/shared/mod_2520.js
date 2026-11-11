function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { W: () => d, pv: () => o, sA: () => l });
  var n = a(95155), r = a(12115);
  let i = { position: "absolute", inset: 0, width: "100%", height: "100%" }, s = (0, r.createContext)({
    link: function(e2) {
      return (0, n.jsx)("a", { ...e2 });
    },
    image: function({
      alt: e2,
      fill: t2,
      priority: a2,
      loading: r2,
      style: s2,
      ...l2
    }) {
      return (0, n.jsx)("img", {
        alt: e2,
        decoding: "async",
        ...l2,
        loading: r2 ?? (a2 ? "eager" : "lazy"),
        fetchPriority: a2 ? "high" : l2.fetchPriority,
        style: t2 ? { ...i, ...s2 } : s2
      });
    }
  });
  function l({ link: e2, image: t2, children: a2 }) {
    let i2 = (0, r.useContext)(s), o2 = (0, r.useMemo)(
      () => ({ link: e2 ?? i2.link, image: t2 ?? i2.image }),
      [e2, t2, i2]
    );
    return (0, n.jsx)(s.Provider, { value: o2, children: a2 });
  }
  function o(e2) {
    return (0, r.createElement)((0, r.useContext)(s).link, e2);
  }
  function d(e2) {
    return (0, r.createElement)((0, r.useContext)(s).image, e2);
  }
}

__m(__module,__exports,__require);
}