function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { HoverCardDemo: () => h });
  var s = n(95155), r = n(5772), i = n(6923), a = n(25130), o = n(4144), c = n.n(o);
  let l = { name: "Jasmine Brooks", src: "media/people/jasmine-brooks.svg", role: "Engineering manager, Billing", bio: "Leads the billing team of seven. Runs the Tuesday launch review.", stats: [{ label: "Reports", value: "7" }, { label: "Launches this year", value: "18" }], city: "Toronto", timeZone: "America/Toronto" }, d = ({ person: e2, className: t2 }) => (0, s.jsx)(r.default, { src: e2.src, alt: "", width: 48, height: 48, className: t2 });
  function u({ person: e2 }) {
    return (0, s.jsx)(a.sz, { name: e2.name, role: e2.role, bio: e2.bio, stats: e2.stats, avatar: (0, s.jsx)(d, { person: e2, className: c().cardFace }), meta: (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(i.A, { width: 13, height: 13, strokeWidth: 1.75, "aria-hidden": "true" }), (0, s.jsx)("span", { children: `${new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: e2.timeZone }).format(/* @__PURE__ */ new Date()).replace("AM", "am").replace("PM", "pm")} in ${e2.city}` })] }) });
  }
  function h() {
    return (0, s.jsx)("div", { className: c().demo, children: (0, s.jsx)(a.jc, { content: (0, s.jsx)(u, { person: l }), children: (0, s.jsxs)("button", { type: "button", className: c().mention, "data-scene-target": "", children: [(0, s.jsx)(d, { person: l, className: c().mentionFace }), (0, s.jsx)("span", { children: l.name })] }) }) });
  }
}

__m(__module,__exports,__require);
}