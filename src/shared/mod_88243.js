function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ReactionsDemo: () => A, default: () => P });
  var i = a(95155), n = a(5772), r = a(12115), s = a(80642), l = a(25354), o = a(18310), c = a(62818), u = a(54757), d = a(67054), f = a(34e3), m = a(40638), p = a(44825), h = a(45422), _ = a(7770), b = a(58697), y = a.n(b);
  let g = [..._.T.ease.enter], x = [..._.T.ease.standard], j = () => () => {
  }, v = [{ id: "like", label: "Like", icon: c.A }, { id: "love", label: "Love", icon: u.A }, { id: "celebrate", label: "Celebrate", icon: d.A }, { id: "insightful", label: "Insightful", icon: f.A }, { id: "curious", label: "Curious", icon: m.A }, { id: "ship", label: "Ship it", icon: p.A }], k = [{ id: "celebrate", count: 12, reacted: false }, { id: "like", count: 9, reacted: false }, { id: "insightful", count: 4, reacted: true }, { id: "curious", count: 1, reacted: false }];
  function N({ text: e2, reduced: t2 }) {
    return (0, i.jsx)("span", { className: y().rise, children: (0, i.jsx)(s.N, { mode: "popLayout", initial: false, children: (0, i.jsx)(l.PY1.span, { className: y().riseLine, initial: t2 ? { opacity: 0 } : { opacity: 0, y: "0.3em", filter: `blur(${_.T.blur.soft}px)` }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, exit: t2 ? { opacity: 0, transition: { duration: _.T.duration.instant } } : { opacity: 0, y: "-0.3em", filter: `blur(${_.T.blur.subtle}px)`, transition: { duration: _.T.duration.fast, ease: x } }, transition: { duration: t2 ? _.T.duration.fast : _.T.duration.standard, ease: g }, children: e2 }, e2) }) });
  }
  function A() {
    let e2 = (0, r.useSyncExternalStore)(j, () => true, () => false), t2 = ((0, o.I)() ?? false) && e2, [a2, s2] = (0, r.useState)(k), l2 = (0, r.useId)(), c2 = a2.reduce((e3, t3) => e3 + t3.count, 0), u2 = a2.filter((e3) => e3.reacted).map((e3) => v.find((t3) => t3.id === e3.id)?.label ?? e3.id), d2 = u2.length ? `${c2} reactions \xB7 You reacted with ${u2.length < 2 ? u2.join("") : `${u2.slice(0, -1).join(", ")} and ${u2[u2.length - 1]}`}` : `${c2} reactions \xB7 Tap one to add yours`;
    return (0, i.jsxs)("article", { className: y().note, "aria-labelledby": l2, children: [(0, i.jsxs)("header", { className: y().author, children: [(0, i.jsx)(n.default, { className: y().avatar, src: "media/people/sofia-ramirez.svg", alt: "", width: 36, height: 36 }), (0, i.jsxs)("div", { className: y().byline, children: [(0, i.jsx)("span", { className: y().name, children: "Sofia Ramirez" }), (0, i.jsx)("span", { className: y().meta, children: "Released Atlas 2.4 \xB7 Tue 16 Sep" })] })] }), (0, i.jsxs)("div", { className: y().copy, children: [(0, i.jsx)("h3", { id: l2, className: y().title, children: "Offline drafts are here" }), (0, i.jsx)("p", { className: y().body, children: "Edits made on a flight or a patchy train now sync the moment you reconnect. When two people change the same field, both versions open side by side instead of one quietly overwriting the other." })] }), (0, i.jsxs)("div", { className: y().footer, children: [(0, i.jsx)(h.L, { options: v, value: a2, onValueChange: (e3) => s2(e3), label: "Reactions to Offline drafts are here" }), (0, i.jsx)("p", { className: y().summary, children: (0, i.jsx)(N, { text: d2, reduced: t2 }) })] })] });
  }
  let P = A;
}

__m(__module,__exports,__require);
}