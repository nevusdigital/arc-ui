function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { AM: () => l, Wv: () => u, hl: () => c, iN: () => d });
  var a = r(95155), n = r(40093), i = r(12115), s = r(25898), o = r.n(s);
  let l = n.bL, d = n.bm, u = (0, i.forwardRef)(function({ className: e2, ...t2 }, r2) {
    return (0, a.jsx)(n.l9, {
      ...t2,
      ref: r2,
      className: [o().anchor, e2].filter(Boolean).join(" ")
    });
  });
  u.displayName = "PopoverTrigger";
  let c = (0, i.forwardRef)(function({
    className: e2,
    align: t2 = "start",
    sideOffset: r2 = 6,
    collisionPadding: i2 = 10,
    ...s2
  }, l2) {
    return (0, a.jsx)(n.ZL, {
      children: (0, a.jsx)(n.UC, {
        ...s2,
        ref: l2,
        align: t2,
        sideOffset: r2,
        collisionPadding: i2,
        className: [o().content, e2].filter(Boolean).join(" ")
      })
    });
  });
  c.displayName = "PopoverContent";
}

__m(__module,__exports,__require);
}