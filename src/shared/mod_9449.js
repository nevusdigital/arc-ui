function(__module,__exports,__require){
"use strict";
function __m(e, i, t) {
  "use strict";
  t.r(i), t.d(i, { OnboardingChecklistDemo: () => _, default: () => x });
  var n = t(95155), a = t(12115), r = t(18310), s = t(92171), o = t(80642), d = t(25354), l = t(92298), c = t(24996), u = t(7770), p = t(46463), h = t.n(p);
  let g = (e2) => new Promise((i2) => setTimeout(i2, e2));
  function _() {
    let e2 = (0, r.I)(), [i2, t2] = (0, a.useState)(0), p2 = (0, a.useRef)(0), _2 = (0, a.useRef)(null), x2 = [{ id: "workspace", title: "Create your workspace", description: "Northwind Studio is ready." }, { id: "invite", title: "Invite your team", description: "Priya and Jonas are waiting.", actionLabel: "Send invites", onAction: () => g(850) }, { id: "github", title: "Connect GitHub", description: "Link the northwind/web repo.", actionLabel: "Connect GitHub", onAction: async () => {
      if (await g(900), p2.current += 1, 1 === p2.current) throw Error("GitHub didn\u2019t respond.");
    } }, { id: "security", title: "Turn on two-factor sign-in", description: "Protect admin access.", actionLabel: "Turn on", onAction: () => g(750) }];
    return (0, n.jsxs)("div", { className: h().demo, children: [(0, n.jsx)(o.N, { mode: "wait", initial: false, onExitComplete: () => {
      _2.current && (0, s.i)(_2.current, { opacity: 1 }, { duration: e2 ? 0 : u.T.duration.standard, ease: [...u.T.ease.enter] });
    }, children: (0, n.jsx)(d.PY1.div, { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: e2 ? u.T.duration.instant : u.T.duration.standard, ease: [...u.T.ease.enter] } }, exit: { opacity: 0, transition: { duration: e2 ? 0 : u.T.duration.instant, ease: [...u.T.ease.standard] } }, children: (0, n.jsx)(c.E, { title: "Set up Northwind", doneTitle: "Northwind is ready", steps: x2, defaultCompleted: ["workspace"] }) }, i2) }), (0, n.jsx)("div", { ref: _2, className: h().footer, children: (0, n.jsxs)("button", { type: "button", className: h().reset, onClick: function() {
      p2.current = 0, !e2 && _2.current && (0, s.i)(_2.current, { opacity: 0 }, { duration: u.T.duration.instant, ease: [...u.T.ease.standard] }), t2((e3) => e3 + 1);
    }, children: [(0, n.jsx)(l.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }), "Reset demo"] }) })] });
  }
  let x = _;
}

__m(__module,__exports,__require);
}