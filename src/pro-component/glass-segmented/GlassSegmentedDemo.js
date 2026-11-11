function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { GlassSegmentedDemo: () => w, default: () => v });
  var i = a(95155), r = a(12115), n = a(5772), l = a(18310), s = a(80642), o = a(25354), d = a(67098), c = a(67752), u = a(7770), h = a(36393), g = a.n(h);
  let p = [
    {
      value: "rooftops",
      label: "Alfama",
      photo: "lisbon-rooftops",
      title: "Alfama at sunset",
      detail: "Miradouro de Santa Luzia"
    },
    {
      value: "tram",
      label: "Tram",
      photo: "lisbon-tram",
      title: "Tram 28",
      detail: "Rua da Concei\xE7\xE3o"
    },
    {
      value: "bridge",
      label: "Bridge",
      photo: "lisbon-bridge",
      title: "25 de Abril Bridge",
      detail: "Across the Tagus"
    },
    {
      value: "coast",
      label: "Coast",
      photo: "coastline",
      title: "Praia da Ursa",
      detail: "Sintra coast, 40 min west"
    }
  ], m = p.map(({ value: e2, label: t2 }) => ({ value: e2, label: t2 })), f = {
    opacity: { duration: u.T.duration.standard, ease: u.T.ease.standard },
    scale: { duration: u.T.duration.considered, ease: u.T.ease.enter }
  };
  function w() {
    let e2 = (0, l.I)(), [t2, a2] = (0, r.useState)("rooftops"), u2 = p.find((e3) => e3.value === t2) ?? p[0], h2 = (0, c.jW)(u2.photo);
    return (0, i.jsx)("div", {
      className: g().demo,
      children: (0, i.jsxs)("div", {
        className: g().frame,
        children: [
          (0, i.jsx)(s.N, {
            initial: false,
            children: (0, i.jsx)(
              o.PY1.div,
              {
                className: g().layer,
                initial: e2 ? { opacity: 0 } : { opacity: 0, scale: 1.06 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0 },
                transition: e2 ? { duration: 0 } : f,
                children: (0, i.jsx)(n.default, {
                  src: h2.src,
                  alt: h2.alt,
                  fill: true,
                  sizes: "(max-width: 640px) 100vw, 760px",
                  className: g().image,
                  priority: true,
                  draggable: false
                })
              },
              u2.value
            )
          }),
          (0, i.jsx)("div", { className: g().shade, "aria-hidden": true }),
          (0, i.jsxs)("div", {
            className: g().caption,
            "aria-live": "polite",
            children: [
              (0, i.jsx)("span", { className: g().title, children: u2.title }),
              (0, i.jsx)("span", { className: g().detail, children: u2.detail })
            ]
          }),
          (0, i.jsx)("div", {
            className: g().control,
            children: (0, i.jsx)(d.V, {
              label: "Lisbon photos",
              fullWidth: true,
              value: t2,
              onValueChange: a2,
              options: m
            })
          })
        ]
      })
    });
  }
  let v = w;
}

__m(__module,__exports,__require);
}