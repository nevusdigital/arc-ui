function(__module,__exports,__require){
"use strict";
function __m(e, n, t) {
  "use strict";
  t.r(n), t.d(n, { AnnouncementBarDemo: () => m, default: () => p });
  var a = t(95155), r = t(12115), s = t(18310), i = t(80642), o = t(25354), d = t(92298), l = t(81150), c = t(7770), u = t(65371), h = t.n(u);
  function m() {
    let e2 = (0, s.I)(), [n2, t2] = (0, r.useState)(true), [u2, m2] = (0, r.useState)(""), [p2] = (0, r.useState)(() => Date.now() + 19152e4), y = (0, r.useMemo)(() => [{ id: "launch", message: "Fieldwork 4.0 is here: docs, plans, and cycles in one place", action: { label: "See what's new", onClick: () => m2("Opened the 4.0 release notes") } }, { id: "pricing", message: "Annual plans are 20% off.", countdown: { to: p2, label: "Ends in" }, action: { label: "Upgrade", onClick: () => m2("Opened checkout with the annual discount") } }, { id: "maintenance", message: "Scheduled maintenance Sunday, 2:00 to 2:30 AM ET", action: { label: "View status", onClick: () => m2("Opened the status page") } }], [p2]);
    return (0, a.jsxs)("div", { className: h().demo, children: [(0, a.jsxs)("div", { className: h().stage, children: [(0, a.jsx)(l.ZT, { messages: y, tone: "inverted", open: n2, onOpenChange: (e3) => {
      t2(e3), e3 || m2("Announcement dismissed");
    } }), (0, a.jsxs)("div", { className: h().page, "aria-hidden": n2 || void 0, children: [(0, a.jsx)("span", { className: h().line }), (0, a.jsx)("span", { className: `${h().line} ${h().short}` }), (0, a.jsx)(i.N, { initial: false, children: !n2 && (0, a.jsxs)(o.PY1.button, { type: "button", className: h().again, initial: e2 ? { opacity: 0 } : { opacity: 0, y: 4 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, transition: { duration: c.T.duration.instant } }, transition: { duration: c.T.duration.standard, ease: [...c.T.ease.enter] }, onClick: () => {
      t2(true), m2("Showing the bar again");
    }, children: [(0, a.jsx)(d.A, { size: 14, strokeWidth: 1.75, "aria-hidden": "true" }), "Show again"] }, "again") })] })] }), (0, a.jsx)("span", { className: h().srOnly, "aria-live": "polite", children: u2 })] });
  }
  let p = m;
}

__m(__module,__exports,__require);
}