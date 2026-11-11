function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { CookieConsentDemo: () => m, default: () => b });
  var r = n(95155), a = n(12115), s = n(18310), i = n(80642), o = n(25354), c = n(92298), l = n(86050), u = n(7770), d = n(18611), h = n(46397), f = n.n(h);
  let p = { "accept-all": "Accepted all", "reject-all": "Rejected optional", save: "Saved choices" };
  function m() {
    let e2 = (0, s.I)(), t2 = (0, a.useRef)(null), [n2, h2] = (0, a.useState)(null), [m2, b2] = (0, a.useState)(null), k = l.Cs.filter((e3) => !e3.required), _ = n2 ? `${m2?.action}-${m2?.at.getTime()}` : "pending", y = m2?.at.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
    return (0, r.jsxs)("div", { className: f().demo, children: [(0, r.jsxs)("div", { className: f().stage, children: [(0, r.jsx)(d.p, { fill: "parent", compact: true }), (0, r.jsx)(l.Zd, { ref: t2, strategy: "absolute", className: f().consent, onChange: (e3, t3) => {
      h2(e3), b2({ action: t3.action, at: t3.updatedAt });
    } })] }), (0, r.jsxs)("div", { className: f().srOnly, "aria-live": "polite", children: [(0, r.jsx)(i.N, { mode: "popLayout", initial: false, children: (0, r.jsx)(o.PY1.div, { className: f().statusText, initial: e2 ? { opacity: 0 } : { opacity: 0, y: 6, filter: `blur(${u.T.blur.subtle}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: e2 ? { opacity: 0 } : { opacity: 0, y: -6, filter: `blur(${u.T.blur.subtle}px)` }, transition: { duration: u.T.duration.standard, ease: [...u.T.ease.enter] }, children: n2 && m2 && "reset" !== m2.action ? (0, r.jsxs)(r.Fragment, { children: [(0, r.jsxs)("span", { className: f().statusLead, children: [p[m2.action], " at ", y] }), (0, r.jsx)("span", { className: f().flags, children: k.map((e3) => (0, r.jsxs)("span", { className: f().flag, "data-on": n2[e3.id] || void 0, children: [(0, r.jsx)("span", { className: f().dot, "aria-hidden": "true" }), e3.label, " ", n2[e3.id] ? "on" : "off"] }, e3.id)) })] }) : (0, r.jsx)("span", { className: f().statusLead, children: "Waiting for a choice. Optional cookies stay off until then." }) }, _) }), (0, r.jsxs)("button", { type: "button", className: f().reset, onClick: () => t2.current?.reset(), disabled: !n2, children: [(0, r.jsx)(c.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }), "Ask again"] })] })] });
  }
  let b = m;
}

__m(__module,__exports,__require);
}