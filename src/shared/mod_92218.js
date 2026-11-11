function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { e: () => p });
  var n = a(95155), r = a(12115), i = a(18310), s = a(80642), l = a(25354), o = a(2520), d = a(7770), u = a(59514), c = a.n(u);
  function p({
    name: e2,
    src: t2,
    size: a2 = "md",
    status: u2,
    className: _,
    ...m
  }) {
    let f = e2.trim().split(/\s+/).slice(0, 2).map((e3) => e3[0]?.toUpperCase()).join(""), y = !!(0, i.I)(), b = (0, r.useRef)(null), [h, g] = (0, r.useState)();
    (0, r.useLayoutEffect)(() => {
      let e3 = b.current;
      e3 && !e3.complete && (e3.dataset.loading = "");
    }, [t2]);
    let x = t2 && h !== t2;
    return (0, n.jsxs)("span", {
      ...m,
      className: [c().avatar, c()[a2], _].filter(Boolean).join(" "),
      role: "img",
      "aria-label": `${e2}${u2 ? `, ${u2}` : ""}`,
      children: [
        x ? (0, n.jsx)(
          o.W,
          {
            ref: b,
            src: t2,
            alt: "",
            fill: true,
            sizes: "xl" === a2 ? "88px" : "lg" === a2 ? "48px" : "md" === a2 ? "36px" : "28px",
            onLoad: (e3) => {
              delete e3.currentTarget.dataset.loading;
            },
            onError: () => g(t2)
          },
          t2
        ) : (0, n.jsx)("span", {
          className: t2 ? c().fallback : void 0,
          "aria-hidden": "true",
          children: f
        }),
        (0, n.jsx)(s.N, {
          initial: false,
          children: u2 && (0, n.jsx)(
            l.PY1.i,
            {
              className: [c().status, c()[u2]].join(" "),
              "aria-hidden": "true",
              initial: { opacity: 0, scale: 0.6 },
              animate: { opacity: 1, scale: 1 },
              exit: {
                opacity: 0,
                scale: 0.6,
                transition: { duration: y ? 0 : d.T.duration.fast }
              },
              transition: y ? { duration: 0 } : d.T.spring.snappy
            },
            u2
          )
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
}