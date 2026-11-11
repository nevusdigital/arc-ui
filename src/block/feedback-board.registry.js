/* feedback-board (pro block) */
(function(){var A=globalThis.__ARC__;
A.regCss(17658, ".root{container-type:inline-size;container-name:feedback;position:relative;display:grid;grid-template-rows:minmax(0,1fr);width:100%;height:760px;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body);isolation:isolate}\n.root :where(h2,h3,p,ul,ol){margin:0}\n.root :where(ul,ol){padding:0;list-style:none}\n.root :where(h3){font-size:inherit;font-weight:inherit}\n.root :where(button,input,textarea){font:inherit;letter-spacing:inherit;color:inherit;-webkit-tap-highlight-color:transparent}\n.root :focus,.root :focus-visible{outline:none}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.muted{color:var(--text-muted);font-weight:400}\n.author>.muted{display:none}\n.roll{justify-content:center;font-variant-numeric:tabular-nums;font-feature-settings:\"tnum\" 1;line-height:1.4em}\n.rollChars,.roll{display:inline-flex;align-items:center}\n.statusCount .roll{min-width:2ch;justify-content:flex-start}\n.metaItem .roll{min-width:1ch;justify-content:flex-start}\n.vote .roll{min-width:2ch}\n.rollDigit{position:relative;display:inline-block;height:1.4em;overflow:hidden;line-height:1.4em}\n.rollStrip{display:flex;flex-direction:column}\n.rollStrip span{display:block;height:1.4em}\n.scroller{min-height:0;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}\n.head{position:sticky;top:0;z-index:2;display:grid;gap:var(--space-4);padding:var(--space-6) max(var(--space-6),calc((100% - 772px) / 2)) var(--space-3);background:color-mix(in oklab,var(--surface) 92%,transparent);-webkit-backdrop-filter:blur(20px) saturate(160%);backdrop-filter:blur(20px) saturate(160%)}\n@container feedback (max-width: 640px){.head{padding:var(--space-5) var(--space-4) var(--space-3)}\n@media (prefers-reduced-transparency:reduce){.head{background:var(--surface);-webkit-backdrop-filter:none;backdrop-filter:none}\n.titleRow{display:flex;align-items:center;justify-content:space-between;gap:var(--space-3)}\n.titleRow h2{font-family:var(--font-display);font-size:var(--text-2xl);font-weight:500;letter-spacing:var(--tracking-display);line-height:var(--leading-display)}\n.newButton{display:inline-flex;align-items:center;gap:6px;height:var(--control-height-sm);padding:0 var(--space-4) 0 var(--space-3);border:0;border-radius:var(--radius-pill);background:var(--foreground);color:var(--background)!important;font-weight:500;cursor:pointer;transition:transform var(--duration-fast) var(--ease-standard)}\n.newButton:active{transform:scale(.97)}\n.newIcon{display:grid}\n.newLabel{display:inline-grid}\n.newLabel>span{grid-area:1/1;text-align:center;opacity:0;filter:blur(2px);transition:opacity var(--duration-fast) var(--ease-standard),filter var(--duration-fast) var(--ease-standard)}\n.newLabel>span[data-show]{opacity:1;filter:none}\n@media (prefers-reduced-motion:reduce){.newLabel>span{filter:none}\n.formWrap{overflow:hidden}\n.form{display:grid;gap:var(--space-3);padding:var(--space-4);border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface)}\n.field{display:grid;gap:6px;font-weight:500}\n.field input,.field textarea{width:100%;padding:0 var(--space-3);border:1px solid var(--border);border-radius:calc(var(--radius-control) - 4px);background:var(--surface);font-weight:400;transition:border-color var(--duration-fast) var(--ease-standard)}\n.field input{height:var(--control-height-md)}\n.field textarea{min-height:76px;padding:var(--space-3);resize:vertical}\n.field input:focus,.field textarea:focus{border-color:var(--border-strong)}\n.field input[aria-invalid=true]{border-color:var(--danger)}\n.field input::placeholder,.field textarea::placeholder{color:var(--text-muted)}\n.error{overflow:hidden;color:var(--danger);font-size:var(--text-xs)}\n.similar{overflow:hidden}\n.similarInner{display:grid;gap:var(--space-2);padding:var(--space-3);border-radius:calc(var(--radius-control) - 4px);background:var(--surface-muted)}\n.similarInner ul{display:grid;gap:var(--space-2)}\n.similarInner li{display:flex;align-items:center;gap:var(--space-3);min-width:0}\n.similarTitle{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.formFoot{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--space-3)}\n.formFoot{display:grid}\n.categories{display:flex;flex-wrap:wrap;gap:6px}\n.category{height:30px;padding:0 var(--space-3);border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);font-size:var(--text-xs);font-weight:500;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.category:active{transform:scale(.96)}\n.category[aria-checked=true]{border-color:var(--control-on);background:var(--control-on);color:var(--control-glyph)}\n.submit{height:var(--control-height-sm);padding:0 var(--space-5);border:0;border-radius:var(--radius-pill);background:var(--foreground);color:var(--background)!important;font-weight:500;cursor:pointer;transition:transform var(--duration-fast) var(--ease-standard)}\n.submit:active{transform:scale(.97)}\n.submit{width:100%}\n.toolbar{display:flex;align-items:center;justify-content:space-between;gap:var(--space-3);min-width:0}\n.toolbar{display:grid;grid-template-columns:minmax(0,1fr);gap:var(--space-3)}\n.statuses{display:flex;gap:2px;min-width:0;margin-left:calc(var(--space-3) * -1);overflow-x:auto;scrollbar-width:none}\n.statuses::-webkit-scrollbar{display:none}\n.statuses{margin:0 calc(var(--space-4) * -1);padding:0 var(--space-4)}\n.statusFilter{flex:none;height:32px;padding:0 var(--space-3);border:0;border-radius:var(--radius-pill);background:none;color:var(--text-secondary);font-weight:500;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}\n.statusFilter,.statusFilter>span:not(.statusPill){position:relative;display:inline-flex;align-items:center;gap:6px}\n.statusFilter[aria-checked=true]{color:var(--foreground)}\n@media (hover:hover) and (pointer:fine){.statusFilter:hover{color:var(--foreground)}\n.statusPill{position:absolute;inset:0;border-radius:var(--radius-pill);background:var(--surface-muted);box-shadow:inset 0 0 0 1px var(--border)}\n.statusCount{color:var(--text-muted);font-weight:400}\n.statusDot{flex:none;width:7px;height:7px;border-radius:var(--radius-pill);background:var(--text-muted)}\n.statusDot[data-status=review]{background:transparent;box-shadow:inset 0 0 0 1.5px var(--text-muted)}\n.statusDot[data-status=planned]{background:var(--warning)}\n.statusDot[data-status=progress]{background:var(--accent)}\n.statusDot[data-status=done]{background:var(--success)}\n.sort{display:inline-flex;flex:none;padding:3px;border-radius:var(--radius-pill);background:var(--surface-muted)}\n.sort{justify-self:start}\n.sortOption{position:relative;height:28px;padding:0 var(--space-3);border:0;border-radius:var(--radius-pill);background:none;color:var(--text-secondary);font-size:var(--text-xs);font-weight:500;cursor:pointer}\n.sortOption>span:not(.sortPill){position:relative}\n.sortOption[aria-checked=true]{color:var(--foreground)}\n.sortPill{position:absolute;inset:0;border-radius:var(--radius-pill);background:var(--surface-raised);box-shadow:var(--shadow-resting),0 0 0 1px var(--border)}\n.list{display:grid;max-width:820px;margin:0 auto;padding:var(--space-2) var(--space-6) var(--space-8)}\n.list{padding:var(--space-1) var(--space-3) var(--space-6)}\n.item{position:relative;display:grid;grid-template-columns:auto minmax(0,1fr);gap:var(--space-4);padding:var(--space-4) var(--space-3);border-radius:var(--radius-control);background:transparent;transition:background-color 1.2s var(--ease-standard)}\n.item+.item:before{position:absolute;top:0;right:var(--space-3);left:var(--space-3);height:1px;background:var(--border-subtle);content:\"\"}\n.item[data-fresh]{background:var(--accent-subtle);transition-duration:var(--duration-fast)}\n.item{gap:var(--space-3);padding:var(--space-4) var(--space-2)}\n.itemBody>h3{padding-right:36px}\n.itemBody{display:grid;min-width:0}\n.itemTitle{padding:0;border:0;background:none;font-size:var(--text-base);font-weight:500;line-height:var(--leading-body);text-align:left;cursor:pointer}\n@media (hover:hover) and (pointer:fine){.itemTitle:hover{color:var(--text-secondary)}\n.excerptWrap{overflow:hidden}\n.excerpt{display:-webkit-box;overflow:hidden;padding-top:6px;color:var(--text-secondary);-webkit-box-orient:vertical;-webkit-line-clamp:2}\n.meta{display:flex;flex-wrap:wrap;align-items:center;gap:var(--space-2) var(--space-4);margin-top:8px;color:var(--text-muted);font-size:var(--text-xs)}\n.statusTag{display:inline-flex;align-items:center;gap:6px;color:var(--text-secondary);font-weight:500}\n.metaItem{display:inline-flex;align-items:center;gap:5px}\n.author{display:inline-flex;align-items:center;gap:6px;color:var(--text-secondary)}\n.face{position:relative;display:inline-grid;flex:none;place-items:center;overflow:hidden;border-radius:var(--radius-pill);background:var(--surface-muted);color:var(--text-secondary);font-size:10px;font-weight:500}\n.face img{object-fit:cover}\n.collapse{position:absolute;top:var(--space-3);right:var(--space-3);display:grid;place-items:center;width:30px;height:30px;border:0;border-radius:var(--radius-pill);background:var(--surface-muted);color:var(--text-secondary);cursor:pointer}\n.collapse{right:var(--space-2)}\n.vote{display:inline-grid;justify-items:center;align-content:center;gap:0;width:52px;height:58px;padding:0;border:1px solid var(--border);border-radius:calc(var(--radius-control) - 4px);background:var(--surface);font-weight:500;cursor:pointer;transition:transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.vote:active{transform:scale(.94)}\n.vote[aria-pressed=true]{border-color:color-mix(in oklab,var(--accent) 45%,transparent);background:var(--accent-subtle);color:var(--accent-strong)}\n@media (hover:hover) and (pointer:fine){.vote:not([aria-pressed=true]):hover{border-color:var(--border-strong)}\n.vote{width:46px;height:52px}\n.voteIcon{display:grid;place-items:center;width:16px;height:16px}\n.voteCompact{display:inline-flex;flex:none;align-items:center;justify-content:center;gap:3px;width:auto;min-width:48px;height:28px;padding:0 9px 0 6px;border-radius:var(--radius-pill);font-size:var(--text-xs)}\n.detail{overflow:hidden}\n.detailInner{display:grid;gap:var(--space-4);padding:8px 0 var(--space-2)}\n.fullText{color:var(--text-secondary)}\n.comments{display:grid}\n.comment{overflow:hidden}\n.commentInner{display:grid;grid-template-columns:auto minmax(0,1fr);gap:var(--space-3);padding:var(--space-2) 0}\n.commentMeta{display:flex;flex-wrap:wrap;align-items:center;gap:var(--space-2);font-size:var(--text-xs)}\n.commentName{font-weight:500}\n.teamTag{padding:0 6px;border-radius:var(--radius-pill);background:var(--accent-subtle);color:var(--accent-strong);font-weight:500}\n.commentText{color:var(--text-secondary);overflow-wrap:anywhere}\n.commentForm{display:flex;align-items:center;gap:var(--space-2);padding:4px 4px 4px var(--space-3);border:1px solid var(--border);border-radius:var(--radius-pill);transition:border-color var(--duration-fast) var(--ease-standard)}\n.commentForm:focus-within{border-color:var(--border-strong)}\n.commentForm input{flex:1;min-width:0;height:30px;padding:0;border:0;background:none}\n.commentForm input::placeholder{color:var(--text-muted)}\n.commentSend{height:30px;padding:0 var(--space-3);border:0;border-radius:var(--radius-pill);background:var(--foreground);color:var(--background)!important;font-size:var(--text-xs);font-weight:500;cursor:pointer;transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.commentSend:active{transform:scale(.96)}\n.commentSend:disabled{opacity:.35;cursor:default;transform:none}\n.empty{display:grid;justify-items:center;gap:var(--space-3);padding:var(--space-16) var(--space-4);color:var(--text-muted);text-align:center}", {"root":"root","srOnly":"srOnly","muted":"muted","author":"author","roll":"roll","rollChars":"rollChars","statusCount":"statusCount","metaItem":"metaItem","vote":"vote","rollDigit":"rollDigit","rollStrip":"rollStrip","scroller":"scroller","head":"head","titleRow":"titleRow","newButton":"newButton","newIcon":"newIcon","newLabel":"newLabel","formWrap":"formWrap","form":"form","field":"field","error":"error","similar":"similar","similarInner":"similarInner","similarTitle":"similarTitle","formFoot":"formFoot","categories":"categories","category":"category","submit":"submit","toolbar":"toolbar","statuses":"statuses","statusFilter":"statusFilter","statusPill":"statusPill","statusDot":"statusDot","sort":"sort","sortOption":"sortOption","sortPill":"sortPill","list":"list","item":"item","itemBody":"itemBody","itemTitle":"itemTitle","excerptWrap":"excerptWrap","excerpt":"excerpt","meta":"meta","statusTag":"statusTag","face":"face","collapse":"collapse","voteIcon":"voteIcon","voteCompact":"voteCompact","detail":"detail","detailInner":"detailInner","fullText":"fullText","comments":"comments","comment":"comment","commentInner":"commentInner","commentMeta":"commentMeta","commentName":"commentName","teamTag":"teamTag","commentText":"commentText","commentForm":"commentForm","commentSend":"commentSend","empty":"empty"});
A.reg(25494, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "message-square",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
          key: "18887p"
        }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(78916, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { FeedbackBoard: () => Y, default: () => D });
  var i = t(95155), s = t(12115), o = t(5772), r = t(18310), n = t(25354), l = t(80642), d = t(57700), c = t(94088), m = t(2125), h = t(25494), u = t(9005), p = t(7770), g = t(67752);
  let b = [
    { id: "review", name: "Under review" },
    { id: "planned", name: "Planned" },
    { id: "progress", name: "In progress" },
    { id: "done", name: "Complete" }
  ], f = ["Feature", "Integration", "Improvement"], _ = { name: "Emma Collins", avatar: (0, g.my)("emma-collins") }, w = { name: "Marcus Johnson", avatar: (0, g.my)("marcus-johnson") }, v = { name: "Chloe Nguyen", avatar: (0, g.my)("chloe-nguyen") }, j = { name: "Mateo Alvarez", avatar: (0, g.my)("mateo-alvarez") }, x = { name: "Ava Mitchell", avatar: (0, g.my)("ava-mitchell") }, y = { name: "Jordan Reyes", avatar: (0, g.my)("jordan-reyes") }, k = { name: "Olivia Bennett", avatar: (0, g.my)("olivia-bennett") }, N = [
    {
      id: "f1",
      title: "Export reports to Google Sheets",
      details: "We rebuild the weekly report by hand every Monday. A scheduled export to a sheet would save our ops team an hour a week.",
      status: "planned",
      category: "Integration",
      votes: 248,
      author: w,
      at: "3w ago",
      created: 3,
      comments: [
        {
          id: "c1",
          author: v,
          text: "Same for us. A daily schedule would be even better.",
          at: "2w ago"
        },
        {
          id: "c2",
          author: k,
          text: "Planned for next quarter. We will start with a daily and weekly schedule.",
          at: "1w ago",
          team: true
        }
      ]
    },
    {
      id: "f2",
      title: "Keyboard shortcut to switch workspaces",
      details: "Cmd plus a number to jump between workspaces, like browser tabs.",
      status: "progress",
      category: "Improvement",
      votes: 191,
      author: j,
      at: "1mo ago",
      created: 1,
      comments: [
        {
          id: "c3",
          author: k,
          text: "In beta now. Turn it on under Settings, Labs.",
          at: "4d ago",
          team: true
        }
      ]
    },
    {
      id: "f3",
      title: "Two factor authentication with passkeys",
      details: "Let us use passkeys as a second factor instead of codes from an app.",
      status: "review",
      category: "Feature",
      votes: 164,
      author: x,
      at: "5d ago",
      created: 8,
      comments: [
        {
          id: "c4",
          author: y,
          text: "Our security team asked for this during the last audit.",
          at: "3d ago"
        }
      ]
    },
    {
      id: "f4",
      title: "Bulk edit tags from the table view",
      details: "Select several rows and add or remove a tag in one go.",
      status: "review",
      category: "Improvement",
      votes: 97,
      author: _,
      at: "2d ago",
      created: 9,
      comments: []
    },
    {
      id: "f5",
      title: "Zapier trigger for new comments",
      details: "A trigger that fires when someone comments, so we can route it to Slack channels by project.",
      status: "done",
      category: "Integration",
      votes: 142,
      author: y,
      at: "2mo ago",
      created: 0,
      comments: [
        {
          id: "c5",
          author: k,
          text: "Shipped. Find it under the Arc app in Zapier.",
          at: "3w ago",
          team: true
        }
      ]
    },
    {
      id: "f6",
      title: "Dark mode for the mobile app",
      details: "Follow the system setting on iOS and Android.",
      status: "planned",
      category: "Feature",
      votes: 310,
      author: v,
      at: "6w ago",
      created: 2,
      comments: [
        {
          id: "c6",
          author: w,
          text: "Please also dim images a little at night.",
          at: "5w ago"
        },
        {
          id: "c7",
          author: k,
          text: "Designs are done. Building after the widgets release.",
          at: "2w ago",
          team: true
        }
      ]
    },
    {
      id: "f7",
      title: "Custom fields on requests",
      details: "Add a dropdown or number field to each request, such as plan or seat count.",
      status: "review",
      category: "Feature",
      votes: 58,
      author: j,
      at: "1d ago",
      created: 10,
      comments: []
    }
  ];
  var S = t(17658), A = t.n(S);
  let C = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], I = (...e2) => e2.filter(Boolean).join(" "), T = (e2) => e2.toLowerCase().split(/[^a-z0-9]+/).filter((e3) => e3.length > 3), P = (e2) => Object.fromEntries(e2.map((e3) => [e3.id, e3.votes])), M = 0, E = (e2) => `${e2}-${Date.now().toString(36)}-${M += 1}`;
  function $({ text: e2 }) {
    let a2 = (0, r.I)(), t2 = Array.from(e2);
    return (0, i.jsxs)("span", {
      className: A().roll,
      children: [
        (0, i.jsx)("span", {
          "aria-hidden": "true",
          className: A().rollChars,
          children: t2.map((e3, s2) => {
            let o2 = t2.length - s2;
            return /\d/.test(e3) ? (0, i.jsx)(
              "span",
              {
                className: A().rollDigit,
                children: (0, i.jsx)(n.PY1.span, {
                  className: A().rollStrip,
                  initial: false,
                  animate: { y: `${-10 * Number(e3)}%` },
                  transition: a2 ? { duration: 0 } : p.T.spring.snappy,
                  children: C.map(
                    (e4) => (0, i.jsx)("span", { children: e4 }, e4)
                  )
                })
              },
              o2
            ) : (0, i.jsx)("span", { children: e3 }, `s${o2}`);
          })
        }),
        (0, i.jsx)("span", { className: A().srOnly, children: e2 })
      ]
    });
  }
  function z({ author: e2, size: a2 = 20 }) {
    let t2 = e2.name.split(" ").map((e3) => e3[0]).join("").slice(0, 2);
    return (0, i.jsx)("span", {
      className: A().face,
      style: { width: a2, height: a2 },
      children: e2.avatar ? (0, i.jsx)(o.default, {
        src: e2.avatar,
        alt: "",
        fill: true,
        sizes: `${a2}px`
      }) : (0, i.jsx)("span", { "aria-hidden": "true", children: t2 })
    });
  }
  function F({ request: e2, onVote: a2, compact: t2 }) {
    let o2 = (0, r.I)(), [l2, d2] = (0, s.useState)(0);
    return (0, i.jsxs)("button", {
      type: "button",
      className: I(A().vote, t2 && A().voteCompact),
      "aria-pressed": !!e2.voted,
      "aria-label": `${e2.voted ? "Remove vote" : "Upvote"}: ${e2.title}, ${e2.votes} votes`,
      onClick: (t3) => {
        t3.stopPropagation(), e2.voted || d2((e3) => e3 + 1), a2(e2.id);
      },
      children: [
        (0, i.jsx)(
          n.PY1.span,
          {
            className: A().voteIcon,
            initial: false,
            animate: o2 || !l2 ? void 0 : { y: [0, -5, 0] },
            transition: {
              duration: 0.36,
              ease: p.T.ease.standard,
              times: [0, 0.4, 1]
            },
            children: (0, i.jsx)(c.A, {
              size: t2 ? 14 : 16,
              strokeWidth: 2,
              "aria-hidden": "true"
            })
          },
          l2
        ),
        (0, i.jsx)($, { text: String(e2.votes) })
      ]
    });
  }
  function Y({
    requests: e2,
    defaultRequests: a2 = N,
    onRequestsChange: t2,
    onVote: o2,
    onSubmit: c2,
    onComment: g2,
    statuses: _2 = b,
    categories: w2 = f,
    currentUser: v2 = { name: "You" },
    defaultSort: j2 = "top",
    title: x2 = "Feedback",
    className: y2
  }) {
    let k2 = (0, s.useId)(), S2 = (0, r.I)() ?? false, [C2, M2] = (0, s.useState)(a2), D2 = e2 ?? C2, O = (0, s.useRef)(D2);
    (0, s.useLayoutEffect)(() => {
      O.current = D2;
    });
    let B = (0, s.useCallback)(
      (a3) => {
        O.current = a3, e2 || M2(a3), t2?.(a3);
      },
      [e2, t2]
    ), [W, L] = (0, s.useState)(j2), [q, R] = (0, s.useState)("all"), [V, H] = (0, s.useState)(() => P(D2)), J = (e3) => {
      L(e3), H(P(O.current));
    }, U = (e3) => {
      R(e3), H(P(O.current));
    }, [G, K] = (0, s.useState)(false), [Q, Z] = (0, s.useState)(""), [X, ee] = (0, s.useState)(""), [ea, et] = (0, s.useState)(w2[0] ?? "Feature"), [ei, es] = (0, s.useState)(""), [eo, er] = (0, s.useState)(null), [en, el] = (0, s.useState)(""), [ed, ec] = (0, s.useState)(null), [em, eh] = (0, s.useState)(""), eu = (0, s.useRef)(null), ep = (0, s.useRef)(null);
    (0, s.useEffect)(() => {
      G && eu.current?.focus({ preventScroll: true });
    }, [G]), (0, s.useEffect)(() => {
      if (!ed) return;
      let e3 = window.setTimeout(() => ec(null), 2200);
      return () => window.clearTimeout(e3);
    }, [ed]);
    let eg = (e3) => _2.find((a3) => a3.id === e3)?.name ?? e3, eb = (0, s.useMemo)(() => {
      let e3 = { all: D2.length };
      for (let a3 of D2) e3[a3.status] = (e3[a3.status] ?? 0) + 1;
      return e3;
    }, [D2]), ef = (0, s.useMemo)(() => {
      let e3 = D2.filter((e4) => "all" === q || e4.status === q), a3 = (e4) => V[e4.id] ?? Number.MAX_SAFE_INTEGER;
      return [...e3].sort(
        "top" === W ? (e4, t3) => a3(t3) - a3(e4) : (e4, a4) => a4.created - e4.created
      );
    }, [D2, q, W, V]), e_ = (0, s.useMemo)(() => {
      let e3 = new Set(T(Q));
      return e3.size ? D2.map((a3) => ({
        request: a3,
        score: T(a3.title).filter((a4) => e3.has(a4)).length
      })).filter((e4) => e4.score > 0).sort(
        (e4, a3) => a3.score - e4.score || a3.request.votes - e4.request.votes
      ).slice(0, 2).map((e4) => e4.request) : [];
    }, [Q, D2]), ew = (e3) => {
      let a3 = O.current.find((a4) => a4.id === e3);
      if (!a3) return;
      let t3 = !a3.voted;
      B(
        O.current.map(
          (a4) => a4.id === e3 ? { ...a4, voted: t3, votes: a4.votes + (t3 ? 1 : -1) } : a4
        )
      ), o2?.(e3, t3), eh(`${t3 ? "Voted for" : "Removed vote from"} ${a3.title}`);
    }, ev = () => {
      K(false), es(""), ep.current?.focus({ preventScroll: true });
    }, ej = (e3) => {
      er((a3) => a3 === e3 ? null : e3), el("");
    }, ex = [{ id: "all", name: "All" }, ..._2], ey = S2 ? { duration: 0 } : {
      height: p.T.spring.smooth,
      opacity: { duration: p.T.duration.fast }
    };
    return (0, i.jsxs)("div", {
      className: I(A().root, y2),
      children: [
        (0, i.jsxs)("div", {
          className: A().scroller,
          children: [
            (0, i.jsxs)("header", {
              className: A().head,
              children: [
                (0, i.jsxs)("div", {
                  className: A().titleRow,
                  children: [
                    (0, i.jsx)("h2", { children: x2 }),
                    (0, i.jsxs)("button", {
                      ref: ep,
                      type: "button",
                      className: A().newButton,
                      "aria-expanded": G,
                      "aria-controls": `${k2}-form`,
                      onClick: () => G ? ev() : K(true),
                      children: [
                        (0, i.jsx)(n.PY1.span, {
                          className: A().newIcon,
                          animate: { rotate: 45 * !!G },
                          transition: S2 ? { duration: 0 } : p.T.spring.snappy,
                          children: (0, i.jsx)(m.A, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          })
                        }),
                        (0, i.jsxs)("span", {
                          className: A().newLabel,
                          children: [
                            (0, i.jsx)("span", {
                              "data-show": !G || void 0,
                              children: "New request"
                            }),
                            (0, i.jsx)("span", {
                              "data-show": G || void 0,
                              children: "Cancel"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                (0, i.jsx)(l.N, {
                  initial: false,
                  children: G ? (0, i.jsx)(
                    n.PY1.div,
                    {
                      className: A().formWrap,
                      initial: { height: 0, opacity: 0 },
                      animate: { height: "auto", opacity: 1 },
                      exit: { height: 0, opacity: 0 },
                      transition: ey,
                      children: (0, i.jsxs)("form", {
                        id: `${k2}-form`,
                        className: A().form,
                        onSubmit: (e3) => {
                          e3.preventDefault();
                          let a3 = Q.trim();
                          if (a3.length < 8) {
                            es("Add a few more words to the title"), eu.current?.focus();
                            return;
                          }
                          let t3 = Math.max(
                            0,
                            ...O.current.map((e4) => e4.created)
                          ) + 1, i2 = {
                            id: E("f"),
                            title: a3,
                            details: X.trim(),
                            status: "review",
                            category: ea,
                            votes: 1,
                            voted: true,
                            author: v2,
                            at: "Just now",
                            created: t3,
                            comments: []
                          };
                          B([i2, ...O.current]), c2?.({
                            title: a3,
                            details: i2.details,
                            category: ea
                          }), Z(""), ee(""), es(""), K(false), J("new"), U("all"), ec(i2.id), eh("Request posted. Your vote was added."), ep.current?.focus({ preventScroll: true });
                        },
                        onKeyDown: (e3) => {
                          "Escape" === e3.key && ev();
                        },
                        noValidate: true,
                        children: [
                          (0, i.jsxs)("label", {
                            className: A().field,
                            children: [
                              (0, i.jsx)("span", { children: "Title" }),
                              (0, i.jsx)("input", {
                                ref: eu,
                                value: Q,
                                onChange: (e3) => {
                                  Z(e3.target.value), ei && es("");
                                },
                                placeholder: "Short, specific, one idea",
                                "aria-invalid": !!ei,
                                "aria-describedby": ei ? `${k2}-title-error` : void 0,
                                maxLength: 90
                              })
                            ]
                          }),
                          (0, i.jsx)(l.N, {
                            initial: false,
                            children: ei ? (0, i.jsx)(
                              n.PY1.p,
                              {
                                id: `${k2}-title-error`,
                                className: A().error,
                                initial: { opacity: 0, height: 0 },
                                animate: { opacity: 1, height: "auto" },
                                exit: { opacity: 0, height: 0 },
                                transition: ey,
                                children: ei
                              },
                              "error"
                            ) : null
                          }),
                          (0, i.jsx)(l.N, {
                            initial: false,
                            children: e_.length ? (0, i.jsx)(
                              n.PY1.div,
                              {
                                className: A().similar,
                                initial: { opacity: 0, height: 0 },
                                animate: { opacity: 1, height: "auto" },
                                exit: { opacity: 0, height: 0 },
                                transition: ey,
                                children: (0, i.jsxs)("div", {
                                  className: A().similarInner,
                                  children: [
                                    (0, i.jsx)("p", {
                                      className: A().muted,
                                      children: "Similar requests"
                                    }),
                                    (0, i.jsx)("ul", {
                                      children: e_.map(
                                        (e3) => (0, i.jsxs)(
                                          "li",
                                          {
                                            children: [
                                              (0, i.jsx)(F, {
                                                request: e3,
                                                onVote: ew,
                                                compact: true
                                              }),
                                              (0, i.jsx)("span", {
                                                className: A().similarTitle,
                                                children: e3.title
                                              })
                                            ]
                                          },
                                          e3.id
                                        )
                                      )
                                    })
                                  ]
                                })
                              },
                              "similar"
                            ) : null
                          }),
                          (0, i.jsxs)("label", {
                            className: A().field,
                            children: [
                              (0, i.jsxs)("span", {
                                children: [
                                  "Details ",
                                  (0, i.jsx)("span", {
                                    className: A().muted,
                                    children: "optional"
                                  })
                                ]
                              }),
                              (0, i.jsx)("textarea", {
                                value: X,
                                onChange: (e3) => ee(e3.target.value),
                                rows: 3,
                                placeholder: "What are you trying to do?"
                              })
                            ]
                          }),
                          (0, i.jsxs)("div", {
                            className: A().formFoot,
                            children: [
                              (0, i.jsx)("div", {
                                className: A().categories,
                                role: "radiogroup",
                                "aria-label": "Category",
                                children: w2.map(
                                  (e3) => (0, i.jsx)(
                                    "button",
                                    {
                                      type: "button",
                                      role: "radio",
                                      "aria-checked": ea === e3,
                                      className: A().category,
                                      onClick: () => et(e3),
                                      children: e3
                                    },
                                    e3
                                  )
                                )
                              }),
                              (0, i.jsx)("button", {
                                type: "submit",
                                className: A().submit,
                                children: "Post request"
                              })
                            ]
                          })
                        ]
                      })
                    },
                    "form"
                  ) : null
                }),
                (0, i.jsxs)("div", {
                  className: A().toolbar,
                  children: [
                    (0, i.jsx)(d.o, {
                      id: `${k2}-status`,
                      children: (0, i.jsx)("div", {
                        className: A().statuses,
                        role: "radiogroup",
                        "aria-label": "Filter by status",
                        children: ex.map(
                          (e3) => (0, i.jsxs)(
                            "button",
                            {
                              type: "button",
                              role: "radio",
                              "aria-checked": q === e3.id,
                              className: A().statusFilter,
                              onClick: () => U(e3.id),
                              children: [
                                q === e3.id ? (0, i.jsx)(n.PY1.span, {
                                  layoutId: "status",
                                  className: A().statusPill,
                                  transition: S2 ? { duration: 0 } : p.T.spring.morph
                                }) : null,
                                (0, i.jsxs)("span", {
                                  children: [
                                    "all" !== e3.id ? (0, i.jsx)("span", {
                                      className: A().statusDot,
                                      "data-status": e3.id,
                                      "aria-hidden": "true"
                                    }) : null,
                                    e3.name
                                  ]
                                }),
                                (0, i.jsx)("span", {
                                  className: A().statusCount,
                                  children: (0, i.jsx)($, {
                                    text: String(eb[e3.id] ?? 0)
                                  })
                                })
                              ]
                            },
                            e3.id
                          )
                        )
                      })
                    }),
                    (0, i.jsx)(d.o, {
                      id: `${k2}-sort`,
                      children: (0, i.jsx)("div", {
                        className: A().sort,
                        role: "radiogroup",
                        "aria-label": "Sort",
                        onKeyDown: (e3) => {
                          if ("ArrowLeft" !== e3.key && "ArrowRight" !== e3.key)
                            return;
                          e3.preventDefault();
                          let a3 = "top" === W ? "new" : "top";
                          J(a3), document.getElementById(`${k2}-sort-${a3}`)?.focus();
                        },
                        children: ["top", "new"].map(
                          (e3) => (0, i.jsxs)(
                            "button",
                            {
                              id: `${k2}-sort-${e3}`,
                              type: "button",
                              role: "radio",
                              "aria-checked": W === e3,
                              tabIndex: W === e3 ? 0 : -1,
                              className: A().sortOption,
                              onClick: () => J(e3),
                              children: [
                                W === e3 ? (0, i.jsx)(n.PY1.span, {
                                  layoutId: "sort",
                                  className: A().sortPill,
                                  transition: S2 ? { duration: 0 } : p.T.spring.snappy
                                }) : null,
                                (0, i.jsx)("span", {
                                  children: "top" === e3 ? "Top" : "New"
                                })
                              ]
                            },
                            e3
                          )
                        )
                      })
                    })
                  ]
                })
              ]
            }),
            ef.length ? (0, i.jsx)("ul", {
              className: A().list,
              children: (0, i.jsx)(l.N, {
                mode: "popLayout",
                initial: false,
                children: ef.map((e3) => {
                  let a3 = eo === e3.id;
                  return (0, i.jsxs)(
                    n.PY1.li,
                    {
                      className: A().item,
                      "data-open": a3 || void 0,
                      "data-fresh": ed === e3.id || void 0,
                      layout: !S2 && "position",
                      initial: { opacity: 0, y: S2 ? 0 : -8 },
                      animate: { opacity: 1, y: 0 },
                      exit: {
                        opacity: 0,
                        transition: { duration: p.T.duration.exit }
                      },
                      transition: S2 ? { duration: 0.12 } : p.T.spring.smooth,
                      children: [
                        (0, i.jsx)(F, { request: e3, onVote: ew }),
                        (0, i.jsxs)("div", {
                          className: A().itemBody,
                          children: [
                            (0, i.jsx)("h3", {
                              children: (0, i.jsx)("button", {
                                type: "button",
                                className: A().itemTitle,
                                "aria-expanded": a3,
                                "aria-controls": `${k2}-d-${e3.id}`,
                                onClick: () => ej(e3.id),
                                children: e3.title
                              })
                            }),
                            (0, i.jsx)(l.N, {
                              initial: false,
                              children: !a3 && e3.details ? (0, i.jsx)(
                                n.PY1.div,
                                {
                                  className: A().excerptWrap,
                                  initial: { height: 0, opacity: 0 },
                                  animate: {
                                    height: "auto",
                                    opacity: 1
                                  },
                                  exit: { height: 0, opacity: 0 },
                                  transition: ey,
                                  children: (0, i.jsx)("p", {
                                    className: A().excerpt,
                                    children: e3.details
                                  })
                                },
                                "excerpt"
                              ) : null
                            }),
                            (0, i.jsx)(l.N, {
                              initial: false,
                              children: a3 ? (0, i.jsx)(
                                n.PY1.div,
                                {
                                  id: `${k2}-d-${e3.id}`,
                                  className: A().detail,
                                  initial: { height: 0, opacity: 0 },
                                  animate: {
                                    height: "auto",
                                    opacity: 1
                                  },
                                  exit: { height: 0, opacity: 0 },
                                  transition: ey,
                                  children: (0, i.jsxs)("div", {
                                    className: A().detailInner,
                                    children: [
                                      e3.details ? (0, i.jsx)("p", {
                                        className: A().fullText,
                                        children: e3.details
                                      }) : null,
                                      e3.comments.length ? (0, i.jsx)("ol", {
                                        className: A().comments,
                                        children: (0, i.jsx)(l.N, {
                                          initial: false,
                                          children: e3.comments.map(
                                            (e4) => (0, i.jsx)(
                                              n.PY1.li,
                                              {
                                                className: A().comment,
                                                initial: {
                                                  opacity: 0,
                                                  height: 0
                                                },
                                                animate: {
                                                  opacity: 1,
                                                  height: "auto"
                                                },
                                                transition: ey,
                                                children: (0, i.jsxs)("div", {
                                                  className: A().commentInner,
                                                  children: [
                                                    (0, i.jsx)(
                                                      z,
                                                      {
                                                        author: e4.author,
                                                        size: 24
                                                      }
                                                    ),
                                                    (0, i.jsxs)(
                                                      "div",
                                                      {
                                                        children: [
                                                          (0, i.jsxs)(
                                                            "p",
                                                            {
                                                              className: A().commentMeta,
                                                              children: [
                                                                (0, i.jsx)(
                                                                  "span",
                                                                  {
                                                                    className: A().commentName,
                                                                    children: e4.author.name
                                                                  }
                                                                ),
                                                                e4.team ? (0, i.jsx)(
                                                                  "span",
                                                                  {
                                                                    className: A().teamTag,
                                                                    children: "Team"
                                                                  }
                                                                ) : null,
                                                                (0, i.jsx)(
                                                                  "span",
                                                                  {
                                                                    className: A().muted,
                                                                    children: e4.at
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          (0, i.jsx)(
                                                            "p",
                                                            {
                                                              className: A().commentText,
                                                              children: e4.text
                                                            }
                                                          )
                                                        ]
                                                      }
                                                    )
                                                  ]
                                                })
                                              },
                                              e4.id
                                            )
                                          )
                                        })
                                      }) : null,
                                      (0, i.jsxs)("form", {
                                        className: A().commentForm,
                                        onSubmit: (a4) => {
                                          var t3;
                                          let i2;
                                          a4.preventDefault(), t3 = e3.id, (i2 = en.trim()) && (B(
                                            O.current.map(
                                              (e4) => e4.id === t3 ? {
                                                ...e4,
                                                comments: [
                                                  ...e4.comments,
                                                  {
                                                    id: E("c"),
                                                    author: v2,
                                                    text: i2,
                                                    at: "Just now"
                                                  }
                                                ]
                                              } : e4
                                            )
                                          ), g2?.(t3, i2), el(""), eh("Comment posted"));
                                        },
                                        children: [
                                          (0, i.jsx)("input", {
                                            value: en,
                                            onChange: (e4) => el(e4.target.value),
                                            placeholder: "Add a comment",
                                            "aria-label": `Comment on ${e3.title}`
                                          }),
                                          (0, i.jsx)("button", {
                                            type: "submit",
                                            className: A().commentSend,
                                            disabled: !en.trim(),
                                            children: "Post"
                                          })
                                        ]
                                      })
                                    ]
                                  })
                                },
                                "detail"
                              ) : null
                            }),
                            (0, i.jsxs)("div", {
                              className: A().meta,
                              children: [
                                (0, i.jsxs)("span", {
                                  className: A().statusTag,
                                  "data-status": e3.status,
                                  children: [
                                    (0, i.jsx)("span", {
                                      className: A().statusDot,
                                      "data-status": e3.status,
                                      "aria-hidden": "true"
                                    }),
                                    eg(e3.status)
                                  ]
                                }),
                                (0, i.jsx)("span", {
                                  className: A().metaItem,
                                  children: e3.category
                                }),
                                (0, i.jsxs)("span", {
                                  className: A().metaItem,
                                  "aria-label": `${e3.comments.length} comments`,
                                  children: [
                                    (0, i.jsx)(h.A, {
                                      size: 13,
                                      strokeWidth: 1.75,
                                      "aria-hidden": "true"
                                    }),
                                    (0, i.jsx)($, {
                                      text: String(e3.comments.length)
                                    })
                                  ]
                                }),
                                (0, i.jsxs)("span", {
                                  className: A().author,
                                  children: [
                                    (0, i.jsx)(z, { author: e3.author }),
                                    e3.author.name,
                                    (0, i.jsx)("span", {
                                      className: A().muted,
                                      children: e3.at
                                    })
                                  ]
                                })
                              ]
                            })
                          ]
                        }),
                        (0, i.jsx)(l.N, {
                          initial: false,
                          children: a3 ? (0, i.jsx)(
                            n.PY1.button,
                            {
                              type: "button",
                              className: A().collapse,
                              onClick: () => ej(e3.id),
                              "aria-label": "Collapse",
                              initial: {
                                opacity: 0,
                                scale: S2 ? 1 : 0.8
                              },
                              animate: { opacity: 1, scale: 1 },
                              exit: {
                                opacity: 0,
                                scale: S2 ? 1 : 0.8,
                                transition: {
                                  duration: p.T.duration.instant
                                }
                              },
                              transition: S2 ? { duration: 0 } : p.T.spring.snappy,
                              children: (0, i.jsx)(u.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            },
                            "collapse"
                          ) : null
                        })
                      ]
                    },
                    e3.id
                  );
                })
              })
            }) : (0, i.jsxs)("div", {
              className: A().empty,
              children: [
                (0, i.jsxs)("p", {
                  children: [
                    "No requests ",
                    "all" === q ? "yet" : `marked ${eg(q).toLowerCase()}`
                  ]
                }),
                (0, i.jsx)("button", {
                  type: "button",
                  className: A().category,
                  onClick: () => U("all"),
                  children: "Show all"
                })
              ]
            })
          ]
        }),
        (0, i.jsx)("p", {
          className: A().srOnly,
          role: "status",
          "aria-live": "polite",
          children: em
        })
      ]
    });
  }
  let D = Y;
}

__m(__module,__exports,__require);
});
A.reg(94088, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => i });
  var s = t(51811);
  let r = {
    name: "chevron-up",
    size: 24,
    node: [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]
  };
  r.node;
  let i = (0, s.A)(r);
}

__m(__module,__exports,__require);
});
A.cssFor("feedback-board", [17658]);
A.item("feedback-board", {entry:78916, export:"FeedbackBoard", kind:"block", tier:"pro", unresolved:[]});
})();