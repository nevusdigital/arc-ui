function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { CommentThreadDemo: () => b, default: () => v });
  var s = a(95155), r = a(12115), n = a(92298), o = a(52772), d = a(67752), i = a(5860), m = a.n(i);
  let l = (e2) => ({ id: e2, name: (0, d.MV)(e2).name, avatar: (0, d.my)(e2) }), c = l("emma-collins"), h = l("jasmine-brooks"), u = l("marcus-johnson"), p = l("daniel-kim"), y = l("chloe-nguyen"), _ = [c, h, u, p, y], k = [{ id: "c1", author: h, createdAt: "2h", body: "Can we try a shorter headline here? @Emma Collins had a version that fit on one line at 390 px.", reactions: [{ emoji: "\u{1F44D}", users: [c.id, u.id] }], replies: [{ id: "c2", author: c, createdAt: "1h", body: "Yes, \u201CPlan less. Ship more.\u201D Dropping it into the file now.", reactions: [{ emoji: "\u{1F389}", users: [h.id] }] }, { id: "c3", author: u, createdAt: "48m", body: "Works for me. It also saves the second line on mobile.", reactions: [] }] }, { id: "c4", author: p, createdAt: "30m", body: "Once this lands I'll update the social image copy to match. @Chloe Nguyen can you check the click through numbers after?", reactions: [{ emoji: "\u{1F440}", users: [y.id] }] }];
  function b() {
    let [e2, t2] = (0, r.useState)(k), [a2, d2] = (0, r.useState)(false), [i2, l2] = (0, r.useState)("Signed in as Emma Collins"), [h2, u2] = (0, r.useState)(0);
    return (0, s.jsxs)("div", { className: m().demo, children: [(0, s.jsx)(o._, { title: "Hero headline", currentUser: c, people: _, comments: e2, onCommentsChange: (e3, a3) => {
      t2(e3), l2(((e4) => {
        switch (e4.type) {
          case "reply":
            return e4.parentId ? "Reply posted" : "Comment posted";
          case "edit":
            return "Comment edited";
          case "delete":
            return "Comment deleted";
          case "react":
            return e4.added ? `Reacted with ${e4.emoji}` : `Removed ${e4.emoji}`;
        }
      })(a3));
    }, resolved: a2, onResolvedChange: (e3) => {
      d2(e3), l2(e3 ? "Thread resolved" : "Thread reopened");
    } }, h2), (0, s.jsxs)("div", { className: m().bar, children: [(0, s.jsx)("p", { className: m().srOnly, "aria-live": "polite", children: i2 }), (0, s.jsxs)("button", { type: "button", className: m().reset, onClick: () => {
      t2(k), d2(false), l2("Thread reset"), u2((e3) => e3 + 1);
    }, children: [(0, s.jsx)(n.A, { size: 13, strokeWidth: 1.75, "aria-hidden": "true" }), "Reset"] })] })] });
  }
  let v = b;
}

__m(__module,__exports,__require);
}