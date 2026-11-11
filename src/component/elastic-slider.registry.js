/* elastic-slider (free component, cross-ref module 72771, closure 154) */
(function(){var A=globalThis.__ARC__;
A.reg(42922, function(__module,__exports,__require){
"use strict";
function __m(t, e, r) {
  r.d(e, { V: () => a });
  var i = r(27933), n = r(7890), s = r(28245);
  function a(t2) {
    let e2 = (0, s.d)(t2.getVelocity()), r2 = () => {
      let n2 = t2.getVelocity();
      e2.set(n2), n2 && i.Gt.update(r2);
    };
    return (0, n.L)(t2, "change", () => {
      i.Gt.update(r2, false, true);
    }), e2;
  }
}

__m(__module,__exports,__require);
});
A.reg(84614, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var i = a(51811);
  let s = {
    name: "volume-2",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
          key: "uqj9uw"
        }
      ],
      ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
      ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
    ]
  };
  s.node;
  let n = (0, i.A)(s);
}

__m(__module,__exports,__require);
});
A.cssFor("elastic-slider", []);
A.item("elastic-slider", {entry:72771, export:"ElasticSliderDemo", kind:"component", tier:"free", unresolved:[], xref:true});
})();