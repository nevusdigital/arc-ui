function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { HoldToConfirmDemo: () => m, default: () => y });
  var r = n(95155), i = n(12115), o = n(18310), a = n(80642), s = n(25354), l = n(92298), u = n(70614), c = n(7770), d = n(23941), f = n.n(d);
  let p = [...c.T.ease.enter], h = [...c.T.ease.standard];
  function m() {
    let e2 = (0, o.I)() ?? false, [t2, n2] = (0, i.useState)(false), [d2, m2] = (0, i.useState)(false), y2 = (0, i.useRef)(null), b = t2 ? "restore" : d2 ? "Keep holding to delete" : "Hold for 1.2 seconds, or hold Space", x = e2 ? { opacity: 0 } : { opacity: 0, y: "0.3em", filter: `blur(${c.T.blur.soft}px)` }, _ = e2 ? { opacity: 0, transition: { duration: c.T.duration.instant } } : { opacity: 0, y: "-0.3em", filter: `blur(${c.T.blur.subtle}px)`, transition: { duration: c.T.duration.fast, ease: h } }, j = { duration: e2 ? c.T.duration.fast : c.T.duration.standard, ease: p };
    return (0, r.jsxs)("div", { className: f().stage, children: [(0, r.jsx)("div", { ref: y2, className: f().hold, children: (0, r.jsx)(u.j, { label: "Hold to delete", confirmedLabel: "Deleted", confirmed: t2, onConfirm: () => n2(true), onHoldChange: m2 }) }), (0, r.jsx)("div", { className: f().below, "aria-live": "polite", children: (0, r.jsx)(a.N, { mode: "popLayout", initial: false, children: "restore" === b ? (0, r.jsxs)(s.PY1.button, { type: "button", className: f().restore, onClick: function() {
      n2(false), y2.current?.querySelector("button")?.focus();
    }, initial: x, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: _, transition: { ...j, delay: 0.2 * !e2 }, children: [(0, r.jsx)(l.A, { size: 16, strokeWidth: 1.75, "aria-hidden": "true" }), "Restore"] }, "restore") : (0, r.jsx)(s.PY1.p, { className: f().hint, initial: x, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: _, transition: j, children: b }, b) }) })] });
  }
  let y = m;
}

__m(__module,__exports,__require);
}