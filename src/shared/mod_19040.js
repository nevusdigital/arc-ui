function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { Z: () => c });
  var r = n(12115), u = n(47650), i = n(55897), s = n(66294), o = n(95155), a = Object.defineProperty, c = r.forwardRef(
    a(
      function(e2, t2) {
        let { container: n2, ...a2 } = e2, [c2, l] = r.useState(false);
        (0, s.N)(() => l(true), []);
        let d = n2 || c2 && globalThis?.document?.body;
        return d ? u.createPortal((0, o.jsx)(i.sG.div, { ...a2, ref: t2 }), d) : null;
      },
      "name",
      { value: "Portal", configurable: true }
    )
  );
}

__m(__module,__exports,__require);
}