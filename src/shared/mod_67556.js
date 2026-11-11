function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { PasswordStrengthDemo: () => h, default: () => m });
  var s = a(95155), r = a(12115), n = a(18310), i = a(61491), l = a(50598), o = a(57189), d = a(71080), u = a.n(d);
  let c = () => () => {
  }, p = ["Juniper-Harbor-48", "Copper-Lantern-73", "Meadow-Signal-26"];
  function h() {
    let e2 = (0, r.useSyncExternalStore)(c, () => true, () => false), t2 = (0, n.I)(), a2 = e2 && !!t2, [d2, h2] = (0, r.useState)(""), [m2, _] = (0, r.useState)(false), [g, x] = (0, r.useState)(), f = (0, r.useRef)(null), v = (0, r.useRef)(0), b = (0, l.co)(d2), y = () => {
      f.current && clearInterval(f.current), f.current = null;
    };
    return (0, r.useEffect)(() => y, []), (0, s.jsxs)("form", { className: u().card, onSubmit: (e3) => e3.preventDefault(), "aria-label": "Set a new password", children: [(0, s.jsx)(l.Xh, { label: "New password", value: d2, onValueChange: function(e3) {
      y(), h2(e3), x(void 0);
    }, revealed: m2, onRevealedChange: _, error: g, name: "new-password" }), (0, s.jsxs)("div", { className: u().actions, children: [(0, s.jsxs)("button", { type: "button", className: u().suggest, onClick: function() {
      y();
      let e3 = p[v.current++ % p.length];
      if (x(void 0), _(true), a2) return void h2(e3);
      let t3 = 0;
      h2(""), f.current = setInterval(() => {
        t3 += 1, h2(e3.slice(0, t3)), t3 >= e3.length && y();
      }, 42);
    }, children: [(0, s.jsx)(i.A, { className: u().suggestIcon, size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), (0, s.jsx)("span", { className: u().suggestLabel, children: "Suggest one" })] }), (0, s.jsx)("div", { className: u().save, onClickCapture: function(e3) {
      b.level >= 3 || (e3.preventDefault(), e3.stopPropagation(), x(d2 ? "Too short" === b.label ? "Too short to save. Use at least 8 characters." : "Too weak to save. Meet at least three requirements." : "Enter a password first."));
    }, children: (0, s.jsx)(o.r, { type: "submit", label: "Save", pendingLabel: "Saving", successLabel: "Saved", onAction: () => new Promise((e3) => setTimeout(e3, 900)) }) })] })] });
  }
  let m = h;
}

__m(__module,__exports,__require);
}