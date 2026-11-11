function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { Z: () => h });
  var r = a(95155), i = a(12115), s = a(18310), n = a(80642), l = a(25354), o = a(7770), c = a(92218), d = a(24202), p = a.n(d);
  let u = {
    hidden: (e2) => ({
      opacity: 0,
      y: `${0.4 * e2}em`,
      filter: `blur(${o.T.blur.subtle}px)`
    }),
    shown: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: o.T.duration.standard,
        ease: [...o.T.ease.enter]
      }
    },
    gone: (e2) => ({
      opacity: 0,
      y: `${-0.4 * e2}em`,
      filter: `blur(${o.T.blur.subtle}px)`,
      transition: {
        duration: o.T.duration.fast,
        ease: [...o.T.ease.standard]
      }
    })
  }, m = {
    hidden: { opacity: 0, y: 0, filter: "blur(0px)" },
    shown: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: o.T.duration.instant }
    },
    gone: {
      opacity: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: o.T.duration.instant }
    }
  }, _ = {
    initial: { width: 0, opacity: 0, scale: 0.9 },
    animate: { width: "auto", opacity: 1, scale: 1 },
    exit: { width: 0, opacity: 0, scale: 0.9 }
  };
  function h({
    members: e2,
    max: t2 = 4,
    size: a2 = "md",
    label: d2 = "Team members"
  }) {
    let f = !!(0, s.I)(), x = e2.slice(0, Math.max(0, t2)), v = Math.max(0, e2.length - x.length), g = f ? { duration: 0 } : o.T.spring.morph, [y, b] = (0, i.useState)({ overflow: v, direction: 1 });
    return y.overflow !== v && b({ overflow: v, direction: v < y.overflow ? -1 : 1 }), (0, r.jsx)("div", {
      className: [p().group, p()[a2]].join(" "),
      role: "group",
      "aria-label": d2,
      children: (0, r.jsxs)(n.N, {
        initial: false,
        children: [
          x.map(
            (e3) => (0, r.jsx)(
              l.PY1.span,
              {
                className: p().slot,
                ..._,
                transition: g,
                children: (0, r.jsxs)("span", {
                  className: p().lift,
                  children: [
                    (0, r.jsx)(c.e, {
                      className: p().avatar,
                      name: e3.name,
                      src: e3.src,
                      status: e3.status,
                      size: a2
                    }),
                    (0, r.jsx)("span", {
                      className: p().tip,
                      "aria-hidden": "true",
                      children: e3.name
                    })
                  ]
                })
              },
              e3.name
            )
          ),
          v > 0 ? (0, r.jsx)(
            l.PY1.span,
            {
              className: p().slot,
              ..._,
              transition: g,
              children: (0, r.jsx)("span", {
                className: [p().lift, p().overflow, p()[a2]].join(" "),
                role: "img",
                "aria-label": `${v} more ${d2.toLowerCase()}`,
                children: (0, r.jsx)(n.N, {
                  mode: "popLayout",
                  initial: false,
                  custom: y.direction,
                  children: (0, r.jsxs)(
                    l.PY1.span,
                    {
                      className: p().count,
                      custom: y.direction,
                      variants: f ? m : u,
                      initial: "hidden",
                      animate: "shown",
                      exit: "gone",
                      "aria-hidden": "true",
                      children: ["+", v]
                    },
                    v
                  )
                })
              })
            },
            "overflow"
          ) : null
        ]
      })
    });
  }
}

__m(__module,__exports,__require);
}