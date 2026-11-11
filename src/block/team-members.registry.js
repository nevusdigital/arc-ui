/* team-members (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(9937, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { x: () => o });
  var n = i(95155), a = i(12115), r = i(30123), l = i(24866), s = i(28819);
  function o({ children: e2, ...t2 }) {
    let i2 = (0, a.useContext)(l.Q);
    (t2 = { ...i2, ...t2 }).transition = (0, r.K)(t2.transition, i2.transition), t2.isStatic = (0, s.M)(() => t2.isStatic);
    let u = (0, a.useMemo)(
      () => t2,
      [
        JSON.stringify(t2.transition),
        t2.transformPagePoint,
        t2.reducedMotion,
        t2.skipAnimations,
        t2.isValidProp
      ]
    );
    return (0, n.jsx)(l.Q.Provider, { value: u, children: e2 });
  }
}

__m(__module,__exports,__require);
});
A.regCss(18416, ".block{container:members/inline-size;box-sizing:border-box;width:min(100%,880px);min-width:0;margin-inline:auto;overflow:hidden;border:1px solid var(--border);border-radius:16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:13px;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.block h2,.block h3,.block p,.block ul{margin:0}\n.block ul{padding:0;list-style:none}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.header{display:flex;align-items:center;justify-content:space-between;gap:var(--space-6);padding:16px 20px}\n@container members (max-width: 600px){.header{flex-direction:column;align-items:stretch;gap:var(--space-3);padding:14px 16px}\n.heading{min-width:0}\n.heading h2{font-family:var(--font-body);font-size:var(--text-base);font-weight:500;letter-spacing:-.01em;line-height:1.4}\n.heading p{margin-top:2px;color:var(--text-secondary);font-size:13px}\n.seats{display:grid;flex:none;width:180px;gap:6px}\n.seats[data-full] .seatFill{background:var(--warning)}\n.seats{width:auto}\n.seatText{color:var(--text-secondary);font-size:var(--text-xs);font-variant-numeric:tabular-nums;white-space:nowrap}\n.count,.number{display:inline-flex;font-variant-numeric:tabular-nums}\n.number{color:var(--foreground);font-weight:500}\n.count>span,.number>span{color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit}\n.count{color:var(--text-muted);font-weight:400}\n.seatTrack{position:relative;height:4px;overflow:hidden;border-radius:var(--radius-pill);background:var(--border)}\n.seatFill{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--accent);transition:background-color var(--duration-standard) var(--ease-standard)}\n@media (prefers-reduced-motion:reduce){.chipRemove,.field,.roleChevron,.roleItem,.roleTrigger,.row,.row+.row:before,.seatFill{transition:none}\n.invite{border-top:1px solid var(--border);padding:16px 20px}\n.invite{padding:14px 16px}\n.inviteLabel{display:block;margin-bottom:6px;font-size:13px;font-weight:500}\n.inviteRow{display:flex;align-items:flex-start;gap:var(--space-2)}\n.inviteRow{flex-direction:column;align-items:stretch}\n.inviteActions{display:flex;flex:none;gap:var(--space-2)}\n.inviteActions{justify-content:space-between}\n.field{position:relative;box-sizing:border-box;flex:1;min-width:0;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);cursor:text;transition:border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-standard) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.field:hover:not(:focus-within){border-color:var(--border-strong)}\n.field:focus-within{border-color:var(--border-strong)}\n.field[data-invalid]{border-color:var(--danger)}\n.field[data-invalid]:focus-within{border-color:var(--danger)}\n.field{flex:none}\n.fieldInner{position:relative;display:flex;box-sizing:border-box;min-height:34px;flex-wrap:wrap;align-items:center;gap:4px;padding:3px 4px}\n.chip{display:inline-flex;box-sizing:border-box;max-width:100%;height:26px;align-items:center;gap:2px;border:1px solid var(--border);border-radius:var(--radius-pill);padding:0 3px 0 9px;background:var(--surface-muted);font-size:13px;line-height:18px;cursor:default}\n.chipText{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.chipRemove{display:grid;width:20px;height:20px;flex:none;place-items:center;border:0;border-radius:var(--radius-pill);padding:0;background:transparent;color:var(--text-muted);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.chipRemove:hover:not(:disabled){background:var(--border);color:var(--foreground)}\n.chipRemove:active:not(:disabled){background:var(--border);color:var(--foreground)}\n.chipRemove:focus-visible{background:var(--border);color:var(--foreground)}\n.chipRemove:disabled{cursor:default;opacity:.5}\n.draft{flex:1 0 150px;box-sizing:border-box;min-width:0;height:26px;border:0;padding:0 6px;background:transparent;color:var(--foreground);font:inherit;font-size:13px;outline:0}\n.draft::placeholder{color:var(--text-muted)}\n.draft:read-only{cursor:progress}\n.messageSlot{overflow:hidden}\n.messageInner{position:relative;padding-top:var(--space-2)}\n.message{display:flex;align-items:flex-start;gap:6px;color:var(--text-muted);font-size:var(--text-xs);line-height:18px}\n.message svg{flex:none;margin-top:2px}\n.message[data-tone=warning]{color:var(--text-secondary)}\n.message[data-tone=warning] svg{color:var(--warning)}\n.message[data-tone=error]{color:var(--danger)}\n.roleTrigger{position:relative;display:inline-flex;box-sizing:border-box;height:32px;flex:none;align-items:center;justify-self:end;gap:4px;border:1px solid transparent;border-radius:8px;padding:0 6px 0 10px;background:transparent;color:var(--foreground);font:inherit;font-size:13px;white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.roleTrigger:hover:not([data-disabled]){background:var(--surface-muted)}\n.roleTrigger:active:not([data-disabled]),.roleTrigger[data-state=open]{background:var(--surface-muted)}\n.roleTrigger:focus-visible{background:var(--surface-muted)}\n.roleTrigger[data-disabled]{cursor:not-allowed;opacity:.5}\n.roleTrigger[data-state=open] .roleChevron{transform:rotate(180deg)}\n.owner,.view .roleTrigger{grid-area:role}\n.roleField{height:36px;gap:var(--space-2);border-color:var(--border);border-radius:var(--radius-control);padding:0 var(--space-3) 0 14px;background:var(--surface);font-size:13px}\n@media (hover:hover) and (pointer:fine){.roleField:hover:not([data-disabled]){border-color:var(--border-strong)}\n.roleField[data-state=open]{border-color:var(--border-strong)}\n.roleChevron{display:inline-flex;flex:none;color:var(--text-muted);transition:transform var(--duration-spring) var(--ease-spring)}\n.roleMenu{--menu-y:-6px;box-sizing:border-box;z-index:1000;min-width:264px;max-width:calc(100vw - 24px);overflow:hidden;border:1px solid var(--border);border-radius:calc(var(--radius-control) + 2px);padding:6px;background:var(--surface-raised);color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);line-height:var(--leading-body);box-shadow:var(--shadow-floating);transform-origin:var(--radix-select-content-transform-origin);animation:menuIn .18s var(--ease-enter) both}\n.roleMenu[data-side=top]{--menu-y:6px}\n.roleMenu[data-state=closed]{animation:menuOut .12s var(--ease-standard) both}\n.roleMenu{animation:fade var(--duration-instant) linear both}\n.roleMenu[data-state=closed]{animation:fadeOut var(--duration-instant) linear both}\n.roleItem{position:relative;display:flex;align-items:center;border-radius:10px;padding:6px 36px 6px 10px;cursor:default;outline:none;user-select:none;transition:background-color 80ms var(--ease-standard)}\n.roleItem[data-highlighted]{background:var(--surface-muted)}\n.roleItemText{display:grid;gap:1px}\n.roleItemText>span:first-child{font-size:13px;font-weight:500}\n.roleHint{color:var(--text-muted);font-size:var(--text-xs)}\n.roleCheck{position:absolute;right:12px;display:inline-flex;animation:checkIn var(--duration-standard) var(--ease-enter) 40ms both}\n.landing,.roleCheck{animation:none}\n.lists{border-top:1px solid var(--border);padding-bottom:var(--space-2)}\n.sectionHead{display:flex;min-height:32px;align-items:center;justify-content:space-between;gap:var(--space-3) var(--space-4);padding:12px 20px 4px}\n.sectionHead+.list+.sectionHead{padding-top:var(--space-4)}\n.sectionHead{flex-wrap:wrap;padding-inline:16px}\n.sectionTitle{display:inline-flex;align-items:baseline;gap:var(--space-2);font-size:13px;font-weight:500}\n.search{position:relative;flex:none;width:min(240px,100%)}\n.search>div>div{min-height:32px;border-color:var(--border);padding-inline:10px 4px}\n.search>div>div>svg{width:16px;height:16px}\n.search input{font-size:13px}\n.search label{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.search{width:100%}\n.emptyRow,.row{position:relative}\n.row{transition:background-color var(--duration-standard) var(--ease-standard)}\n.row+.row:before{content:\"\";position:absolute;top:0;right:20px;left:calc(20px + 36px + var(--space-3));height:1px;background:var(--border-subtle);transition:opacity var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.row:hover{background:color-mix(in oklab,var(--surface-muted) 55%,var(--surface))}\n.row[data-confirming]{background:color-mix(in oklab,var(--danger) 6%,var(--surface))}\n.row:hover+.row:before,.row:hover:before,.row[data-confirming]+.row:before,.row[data-confirming]:before{opacity:0}\n.row+.row:before{right:16px;left:calc(16px + 36px + var(--space-3))}\n.rowInner{display:grid;grid-template-columns:36px minmax(0,1fr);align-items:center;gap:var(--space-3);padding:8px 20px}\n.rowInner{gap:var(--space-3);padding-inline:16px}\n.rowInner{align-items:start}\n.rowInner>:first-child{margin-top:4px}\n.rowBody{position:relative;min-width:0}\n.view{grid-template-columns:minmax(0,1fr) 128px 112px 32px}\n.confirm,.view{display:grid;min-height:36px;align-items:center;gap:var(--space-3)}\n.view .iconButton{width:32px;min-height:32px;padding:0;color:var(--text-muted)}\n@media (hover:hover) and (pointer:fine){.view .iconButton:hover:not(:disabled){color:var(--foreground)}\n@container members (max-width: 640px){.view{grid-template-columns:minmax(0,1fr) 104px 32px}\n@container members (max-width: 480px){.view{gap:var(--space-2)}\n@container members (max-width: 420px){.view{grid-template-columns:minmax(0,1fr) 104px 32px;grid-template-areas:\"identity identity identity\" \"active role remove\";row-gap:0}\n.view .identity{grid-area:identity}\n.spacer,.view .iconButton{grid-area:remove}\n.confirm{grid-template-columns:minmax(0,1fr) auto}\n.confirm .detail{white-space:normal}\n.confirm{grid-template-columns:minmax(0,1fr);gap:var(--space-2);padding-block:var(--space-1)}\n.confirmActions{display:flex;gap:var(--space-2)}\n.identity{display:grid;min-width:0;gap:1px}\n.name{min-width:0;overflow:hidden;font-size:13px;font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.you{margin-left:var(--space-2);color:var(--text-muted);font-weight:400}\n.detail{display:block;min-width:0;overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap}\n.activeInline{display:none}\n.activeInline{display:block}\n.active{color:var(--text-secondary);font-size:var(--text-xs);white-space:nowrap}\n.active{display:none}\n.active{display:block;grid-area:active;color:var(--text-muted)}\n.owner{justify-self:end;padding-right:25px;color:var(--text-secondary);font-size:13px}\n.pendingAvatar{display:grid;box-sizing:border-box;width:36px;height:36px;place-items:center;border:1px dashed var(--border-strong);border-radius:var(--radius-pill);color:var(--text-muted);font-size:var(--text-xs);font-weight:500}\n.pendingBody{display:grid;min-width:0;min-height:36px;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:var(--space-3)}\n.pendingBody{grid-template-columns:minmax(0,1fr);gap:var(--space-1);padding-block:2px}\n.pendingActions{display:flex;gap:var(--space-1)}\n.pendingActions{margin-left:calc(var(--space-3) * -1)}\n.inviteEmail{display:block;box-sizing:border-box;width:fit-content;max-width:calc(100% + 20px);margin:-5px -10px;overflow:hidden;border-radius:var(--radius-pill);padding:5px 10px;font-size:13px;line-height:18px;text-overflow:ellipsis;white-space:nowrap}\n.landing{animation:landing .6s var(--ease-standard) both}\n.emptyLine,.empty p{color:var(--text-muted);font-size:13px}\n.emptyLine{padding:var(--space-2) 20px}\n.emptyLine,.empty,.footer{padding-inline:16px}\n.empty{min-height:40px;flex-wrap:wrap;gap:var(--space-3);padding:var(--space-2) 20px}\n.empty,.footer{display:flex;align-items:center;justify-content:space-between}\n.footer{min-height:44px;box-sizing:border-box;gap:var(--space-4);border-top:1px solid var(--border);padding:10px 20px;font-size:var(--text-xs)}\n@container members (max-width: 760px){.footer{flex-direction:column;align-items:flex-start;justify-content:center;gap:2px}\n.status{min-width:0;color:var(--text-secondary)}\n.note{flex:none;color:var(--text-muted)}\n.note{flex:initial}\n.swap{position:relative;display:inline-flex;max-width:100%;vertical-align:top}\n.swapText{display:inline-block;min-width:0;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}", {"block":"block","srOnly":"srOnly","header":"header","heading":"heading","seats":"seats","seatFill":"seatFill","seatText":"seatText","count":"count","number":"number","seatTrack":"seatTrack","chipRemove":"chipRemove","field":"field","roleChevron":"roleChevron","roleItem":"roleItem","roleTrigger":"roleTrigger","row":"row","invite":"invite","inviteLabel":"inviteLabel","inviteRow":"inviteRow","inviteActions":"inviteActions","fieldInner":"fieldInner","chip":"chip","chipText":"chipText","draft":"draft","messageSlot":"messageSlot","messageInner":"messageInner","message":"message","owner":"owner","view":"view","roleField":"roleField","roleMenu":"roleMenu","roleItemText":"roleItemText","roleHint":"roleHint","roleCheck":"roleCheck","landing":"landing","lists":"lists","sectionHead":"sectionHead","list":"list","sectionTitle":"sectionTitle","search":"search","emptyRow":"emptyRow","rowInner":"rowInner","rowBody":"rowBody","confirm":"confirm","iconButton":"iconButton","identity":"identity","spacer":"spacer","detail":"detail","confirmActions":"confirmActions","name":"name","you":"you","activeInline":"activeInline","active":"active","pendingAvatar":"pendingAvatar","pendingBody":"pendingBody","pendingActions":"pendingActions","inviteEmail":"inviteEmail","emptyLine":"emptyLine","empty":"empty","footer":"footer","status":"status","note":"note","swap":"swap","swapText":"swapText"});
A.reg(20508, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "user-minus",
    size: 24,
    node: [
      [
        "path",
        { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }
      ],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
      ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(24304, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { TeamMembers: () => q, default: () => H });
  var i = t(95155), n = t(12115), s = t(73051), r = t(18310), l = t(25354), o = t(80642), d = t(9937), m = t(57700), c = t(12363), u = t(64577), p = t(9005), h = t(35484), f = t(20508), g = t(65024), _ = t(92218), b = t(51288), v = t(43298), y = t(98344), x = t(67752), j = t(7770), w = t(18416), N = t.n(w);
  let k = "Fieldnote", T = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, $ = { owner: "Owner", admin: "Admin", member: "Member", viewer: "Viewer" }, A = [
    { value: "admin", hint: "Manages members, billing, and settings" },
    { value: "member", hint: "Creates and edits projects" },
    { value: "viewer", hint: "Views and comments, no editing" }
  ], S = [
    {
      id: "emma",
      name: "Emma Collins",
      email: "emma@fieldnote.example",
      photo: (0, x.my)("emma-collins"),
      role: "owner",
      active: "Active now",
      online: true,
      you: true
    },
    {
      id: "ava",
      name: "Ava Mitchell",
      email: "ava@fieldnote.example",
      photo: (0, x.my)("ava-mitchell"),
      role: "admin",
      active: "Active now",
      online: true
    },
    {
      id: "marcus",
      name: "Marcus Johnson",
      email: "marcus@fieldnote.example",
      photo: (0, x.my)("marcus-johnson"),
      role: "member",
      active: "Active 2 hours ago"
    },
    {
      id: "jasmine",
      name: "Jasmine Brooks",
      email: "jasmine@fieldnote.example",
      photo: (0, x.my)("jasmine-brooks"),
      role: "member",
      active: "Active yesterday"
    },
    {
      id: "sofia",
      name: "Sofia Ramirez",
      email: "sofia@fieldnote.example",
      photo: (0, x.my)("sofia-ramirez"),
      role: "viewer",
      active: "Active Sep 14"
    }
  ], R = [
    {
      id: "jordan",
      email: "jordan.blake@fieldnote.example",
      role: "member",
      sent: "Invited Sep 19"
    },
    {
      id: "priya",
      email: "priya.shah@harborline.studio",
      role: "viewer",
      sent: "Invited Sep 20"
    }
  ], { spring: C, duration: I, blur: M } = j.T, P = [...j.T.ease.enter], z = [...j.T.ease.standard], E = { duration: 0 }, O = (e2) => "admin" === e2 ? "an admin" : `a ${e2}`, L = {
    enter: { opacity: 0, scale: 0.9, filter: `blur(${M.soft}px)` },
    rest: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: (e2) => "sent" === e2 ? { opacity: 0, transition: E } : {
      opacity: 0,
      scale: 0.9,
      filter: `blur(${M.soft}px)`,
      transition: { duration: I.exit, ease: z }
    }
  }, D = {
    ...C.snappy,
    opacity: { duration: I.fast, ease: P },
    filter: { duration: I.fast, ease: P },
    layout: C.morph
  };
  function F() {
    let e2 = (0, n.useRef)(null), [a2, t2] = (0, n.useState)("auto");
    return (0, n.useEffect)(() => {
      let a3 = e2.current;
      if (!a3 || "u" < typeof ResizeObserver) return;
      let i2 = new ResizeObserver(() => t2(a3.offsetHeight));
      return i2.observe(a3), () => i2.disconnect();
    }, []), [e2, a2];
  }
  function B({
    children: e2,
    className: a2,
    fade: t2 = true,
    open: n2 = false,
    confirming: s2 = false
  }) {
    let o2 = (0, r.I)(), [d2, m2] = F();
    return (0, i.jsx)(l.PY1.li, {
      className: a2,
      "data-confirming": s2 || void 0,
      style: { overflow: n2 ? "visible" : "hidden" },
      initial: { height: 0, opacity: +!t2 },
      animate: { height: m2, opacity: 1 },
      exit: {
        height: 0,
        opacity: 0,
        transition: o2 ? E : { height: C.smooth, opacity: { duration: I.fast, ease: z } }
      },
      transition: o2 ? E : { height: C.smooth, opacity: { duration: I.standard, ease: P } },
      children: (0, i.jsx)("div", { ref: d2, children: e2 })
    });
  }
  function Y({ text: e2 }) {
    let a2 = (0, r.I)();
    return (0, i.jsx)("span", {
      className: N().swap,
      "aria-hidden": "true",
      children: (0, i.jsx)(o.N, {
        mode: "popLayout",
        initial: false,
        children: (0, i.jsx)(
          l.PY1.span,
          {
            className: N().swapText,
            initial: a2 ? { opacity: 0 } : { opacity: 0, y: "0.45em", filter: `blur(${M.soft}px)` },
            animate: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: a2 ? { opacity: 0, transition: E } : {
              opacity: 0,
              y: "-0.35em",
              filter: `blur(${M.subtle}px)`,
              transition: { duration: I.fast, ease: z }
            },
            transition: a2 ? { duration: I.instant } : { duration: I.standard, ease: P },
            children: e2
          },
          e2
        )
      })
    });
  }
  function W({ label: e2, value: a2, onChange: t2, field: n2 = false, disabled: r2 }) {
    return (0, i.jsxs)(s.bL, {
      value: a2,
      onValueChange: (e3) => t2(e3),
      disabled: r2,
      children: [
        (0, i.jsxs)(s.l9, {
          className: [N().roleTrigger, n2 ? N().roleField : ""].filter(Boolean).join(" "),
          "aria-label": e2,
          children: [
            (0, i.jsx)("span", {
              className: N().srOnly,
              children: (0, i.jsx)(s.WT, {})
            }),
            (0, i.jsx)("span", {
              "aria-hidden": "true",
              children: (0, i.jsx)(y.g, { children: $[a2] })
            }),
            (0, i.jsx)(s.In, {
              className: N().roleChevron,
              children: (0, i.jsx)(c.A, {
                size: 14,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            })
          ]
        }),
        (0, i.jsx)(s.ZL, {
          children: (0, i.jsx)(s.UC, {
            className: N().roleMenu,
            position: "popper",
            align: "end",
            sideOffset: 6,
            collisionPadding: 12,
            children: (0, i.jsx)(s.LM, {
              children: A.map(
                (e3) => (0, i.jsxs)(
                  s.q7,
                  {
                    value: e3.value,
                    className: N().roleItem,
                    children: [
                      (0, i.jsxs)("span", {
                        className: N().roleItemText,
                        children: [
                          (0, i.jsx)(s.p4, { children: $[e3.value] }),
                          (0, i.jsx)("span", {
                            className: N().roleHint,
                            children: e3.hint
                          })
                        ]
                      }),
                      (0, i.jsx)(s.VF, {
                        className: N().roleCheck,
                        children: (0, i.jsx)(u.A, {
                          size: 16,
                          strokeWidth: 2,
                          "aria-hidden": "true"
                        })
                      })
                    ]
                  },
                  e3.value
                )
              )
            })
          })
        })
      ]
    });
  }
  function q() {
    let e2 = (0, n.useId)(), a2 = (0, r.I)(), [t2, s2] = (0, n.useState)(S), [c2, y2] = (0, n.useState)(R), [x2, w2] = (0, n.useState)([]), [A2, q2] = (0, n.useState)(""), [H2, J] = (0, n.useState)(""), [U, Q] = (0, n.useState)("member"), [V, X] = (0, n.useState)(false), [K, Z] = (0, n.useState)("removed"), [G, ee] = (0, n.useState)([]), [ea, et] = (0, n.useState)({}), [ei, en] = (0, n.useState)(""), [es, er] = (0, n.useState)(null), [el, eo] = (0, n.useState)("Changes apply right away"), ed = (0, n.useRef)(null), em = (0, n.useRef)(null), ec = (0, n.useRef)(null), eu = (0, n.useRef)(/* @__PURE__ */ new Map()), ep = (0, n.useRef)(/* @__PURE__ */ new Map()), eh = (0, n.useRef)(0), ef = (0, n.useRef)([]), [eg, e_] = F(), [eb, ev] = F();
    (0, n.useEffect)(() => {
      let e3 = ef.current;
      return () => e3.forEach(window.clearTimeout);
    }, []), (0, n.useEffect)(() => {
      es && requestAnimationFrame(() => ec.current?.focus({ preventScroll: true }));
    }, [es]);
    let ey = t2.length + c2.length, ex = Math.max(0, 10 - ey), ej = x2.length - ex, ew = ei.trim().toLowerCase(), eN = t2.filter(
      (e3) => !ew || e3.name.toLowerCase().includes(ew) || e3.email.includes(ew)
    ), ek = c2.filter((e3) => !ew || e3.email.includes(ew)), eT = x2.length + +!!T.test(A2.trim().toLowerCase()), e$ = H2 ? { tone: "error", text: H2 } : ej > 0 ? {
      tone: "warning",
      text: 0 === ex ? "All 10 seats are taken. Remove someone or revoke an invite first" : `${ex} ${1 === ex ? "seat" : "seats"} left. Remove ${ej} ${1 === ej ? "address" : "addresses"} to send`
    } : 0 === ex ? { tone: "warning", text: "All 10 seats are taken" } : {
      tone: "hint",
      text: "Separate addresses with commas or press Enter. Invites expire in 7 days"
    };
    function eA(e3, a3) {
      ef.current.push(window.setTimeout(e3, a3));
    }
    function eS(e3) {
      requestAnimationFrame(() => {
        e3?.isConnected && e3.focus({ preventScroll: true });
      });
    }
    function eR(e3) {
      let a3 = [...x2], i2 = [], n2 = "";
      for (let s3 of e3.split(/[\s,;]+/)) {
        let e4 = s3.replace(/^<|>$/g, "").toLowerCase();
        if (!e4) continue;
        let r2 = t2.find((a4) => a4.email === e4);
        T.test(e4) ? r2 ? n2 || (n2 = `${r2.name} is already a member`) : c2.some((a4) => a4.email === e4) ? n2 || (n2 = `${e4} already has a pending invite`) : a3.includes(e4) || a3.push(e4) : (i2.push(s3), n2 || (n2 = `\u201C${s3}\u201D is not a complete email address`));
      }
      return w2(a3), q2(i2.join(", ")), J(n2), { next: a3, problem: n2 };
    }
    function eC(e3) {
      Z("removed"), w2((a3) => a3.filter((a4) => a4 !== e3)), J(""), eo(`Removed ${e3} from the invite`);
    }
    function eI() {
      if (V) return;
      let { next: e3, problem: a3 } = A2.trim() ? eR(A2) : { next: x2, problem: "" };
      if (!a3) {
        if (!e3.length) {
          J("Add at least one email address"), ed.current?.focus();
          return;
        }
        e3.length > ex || (X(true), J(""), en(""), er(null), eA(() => {
          let a4 = e3.map((e4) => ({
            id: `sent-${++eh.current}`,
            email: e4,
            role: U,
            sent: "Invited just now"
          }));
          Z("sent"), w2([]), y2((e4) => [...e4, ...a4]), ee(a4.map((e4) => e4.id)), X(false), eo(
            1 === a4.length ? `Invited ${a4[0].email} as ${O(U)}` : `Invited ${a4.length} people as ${"admin" === U ? "admins" : `${U}s`}`
          ), ed.current?.focus({ preventScroll: true }), eA(() => ee([]), 1400);
        }, 700));
      }
    }
    function eM(e3) {
      er(null), requestAnimationFrame(() => eS(eu.current.get(e3)));
    }
    let eP = a2 ? { opacity: 0 } : { opacity: 0, y: 6, filter: `blur(${M.soft}px)` }, ez = a2 ? { opacity: 0, transition: E } : {
      opacity: 0,
      y: -4,
      filter: `blur(${M.soft}px)`,
      transition: { duration: I.exit, ease: z }
    }, eE = a2 ? E : {
      ...C.smooth,
      opacity: { duration: I.standard, ease: P },
      filter: { duration: I.standard, ease: P }
    };
    return (0, i.jsx)(d.x, {
      reducedMotion: "user",
      children: (0, i.jsx)(m.o, {
        id: e2,
        children: (0, i.jsxs)("section", {
          className: N().block,
          "aria-labelledby": `${e2}-title`,
          children: [
            (0, i.jsxs)("header", {
              className: N().header,
              children: [
                (0, i.jsxs)("div", {
                  className: N().heading,
                  children: [
                    (0, i.jsx)("h2", { id: `${e2}-title`, children: "Members" }),
                    (0, i.jsxs)("p", {
                      children: [
                        "Manage who can work in the ",
                        k,
                        " workspace."
                      ]
                    })
                  ]
                }),
                (0, i.jsxs)("div", {
                  className: N().seats,
                  "data-full": 0 === ex || void 0,
                  children: [
                    (0, i.jsxs)("p", {
                      className: N().seatText,
                      children: [
                        (0, i.jsx)("span", {
                          className: N().number,
                          children: (0, i.jsx)(g.q, { value: ey })
                        }),
                        " of ",
                        10,
                        " seats"
                      ]
                    }),
                    (0, i.jsx)("div", {
                      className: N().seatTrack,
                      role: "meter",
                      "aria-label": "Seats used",
                      "aria-valuemin": 0,
                      "aria-valuemax": 10,
                      "aria-valuenow": ey,
                      "aria-valuetext": `${ey} of 10 seats used`,
                      children: (0, i.jsx)(l.PY1.span, {
                        className: N().seatFill,
                        initial: false,
                        animate: { width: `${100 * Math.min(ey / 10, 1)}%` },
                        transition: a2 ? E : C.morph
                      })
                    })
                  ]
                })
              ]
            }),
            (0, i.jsxs)("form", {
              className: N().invite,
              noValidate: true,
              onSubmit: (e3) => {
                e3.preventDefault(), eI();
              },
              children: [
                (0, i.jsx)("label", {
                  className: N().inviteLabel,
                  htmlFor: `${e2}-invite`,
                  children: "Invite people"
                }),
                (0, i.jsxs)("div", {
                  className: N().inviteRow,
                  children: [
                    (0, i.jsx)(l.PY1.div, {
                      className: N().field,
                      "data-invalid": H2 ? "" : void 0,
                      initial: false,
                      animate: { height: "auto" === e_ ? "auto" : e_ + 2 },
                      transition: a2 ? E : C.smooth,
                      onPointerDown: (e3) => {
                        e3.target.closest("button, input") || (e3.preventDefault(), ed.current?.focus());
                      },
                      children: (0, i.jsxs)("div", {
                        ref: eg,
                        className: N().fieldInner,
                        children: [
                          (0, i.jsx)(o.N, {
                            mode: "popLayout",
                            initial: false,
                            custom: K,
                            children: x2.map(
                              (e3) => (0, i.jsxs)(
                                l.PY1.span,
                                {
                                  layoutId: `invite-${e3}`,
                                  className: N().chip,
                                  custom: K,
                                  variants: L,
                                  initial: "enter",
                                  animate: "rest",
                                  exit: "exit",
                                  transition: a2 ? E : D,
                                  children: [
                                    (0, i.jsx)("span", {
                                      className: N().chipText,
                                      children: e3
                                    }),
                                    (0, i.jsx)("button", {
                                      type: "button",
                                      className: N().chipRemove,
                                      "aria-label": `Remove ${e3}`,
                                      disabled: V,
                                      onClick: () => {
                                        eC(e3), ed.current?.focus();
                                      },
                                      children: (0, i.jsx)(p.A, {
                                        size: 12,
                                        strokeWidth: 2,
                                        "aria-hidden": "true"
                                      })
                                    })
                                  ]
                                },
                                e3
                              )
                            )
                          }),
                          (0, i.jsx)(l.PY1.input, {
                            layout: "position",
                            transition: a2 ? E : { layout: C.morph },
                            ref: ed,
                            id: `${e2}-invite`,
                            className: N().draft,
                            type: "text",
                            inputMode: "email",
                            autoComplete: "off",
                            autoCapitalize: "off",
                            spellCheck: false,
                            placeholder: x2.length ? "" : "name@example.com",
                            value: A2,
                            readOnly: V,
                            "aria-invalid": !!H2 || void 0,
                            "aria-describedby": `${e2}-message`,
                            onChange: (e3) => {
                              q2(e3.target.value), H2 && J("");
                            },
                            onKeyDown: function(e3) {
                              if ("Enter" === e3.key) {
                                e3.preventDefault(), A2.trim() ? eR(A2) : x2.length && eI();
                                return;
                              }
                              if (("," === e3.key || ";" === e3.key || " " === e3.key) && A2.trim()) {
                                e3.preventDefault(), eR(A2);
                                return;
                              }
                              "Backspace" !== e3.key || A2 || !x2.length || V || (e3.preventDefault(), eC(x2[x2.length - 1]));
                            },
                            onPaste: function(e3) {
                              let a3 = e3.clipboardData.getData("text");
                              /[\s,;]/.test(a3.trim()) && (e3.preventDefault(), eR(`${A2} ${a3}`));
                            },
                            onBlur: () => {
                              !V && T.test(A2.trim().toLowerCase()) && eR(A2);
                            }
                          })
                        ]
                      })
                    }),
                    (0, i.jsxs)("div", {
                      className: N().inviteActions,
                      children: [
                        (0, i.jsx)(W, {
                          field: true,
                          label: "Invite as",
                          value: U,
                          onChange: Q,
                          disabled: V
                        }),
                        (0, i.jsx)(b.$, {
                          type: "submit",
                          size: "sm",
                          loading: V,
                          disabled: !V && (!x2.length && !A2.trim() || ej > 0),
                          children: eT > 1 ? `Send ${eT} invites` : "Send invite"
                        })
                      ]
                    })
                  ]
                }),
                (0, i.jsx)(l.PY1.div, {
                  className: N().messageSlot,
                  initial: false,
                  animate: { height: ev },
                  transition: a2 ? E : C.smooth,
                  children: (0, i.jsx)("div", {
                    ref: eb,
                    id: `${e2}-message`,
                    className: N().messageInner,
                    "aria-live": "polite",
                    children: (0, i.jsx)(o.N, {
                      mode: "popLayout",
                      initial: false,
                      children: (0, i.jsxs)(
                        l.PY1.p,
                        {
                          className: N().message,
                          "data-tone": e$.tone,
                          initial: eP,
                          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                          exit: ez,
                          transition: a2 ? E : { duration: I.standard, ease: P },
                          children: [
                            "hint" !== e$.tone && (0, i.jsx)(h.A, {
                              size: 14,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            }),
                            (0, i.jsx)("span", { children: e$.text })
                          ]
                        },
                        e$.text
                      )
                    })
                  })
                })
              ]
            }),
            (0, i.jsxs)("div", {
              className: N().lists,
              children: [
                (0, i.jsxs)("div", {
                  className: N().sectionHead,
                  children: [
                    (0, i.jsxs)("h3", {
                      id: `${e2}-members`,
                      className: N().sectionTitle,
                      children: [
                        "Members ",
                        (0, i.jsx)("span", {
                          className: N().count,
                          children: (0, i.jsx)(g.q, { value: eN.length })
                        })
                      ]
                    }),
                    (0, i.jsx)("div", {
                      className: N().search,
                      children: (0, i.jsx)(v.L, {
                        ref: em,
                        label: "Search people",
                        placeholder: "Search by name or email",
                        value: ei,
                        onValueChange: (e3) => {
                          en(e3), er(null);
                        }
                      })
                    })
                  ]
                }),
                (0, i.jsx)("ul", {
                  className: N().list,
                  "aria-labelledby": `${e2}-members`,
                  children: (0, i.jsxs)(o.N, {
                    initial: false,
                    children: [
                      eN.map((e3) => {
                        let a3 = es === e3.id;
                        return (0, i.jsx)(
                          B,
                          {
                            className: N().row,
                            confirming: a3,
                            children: (0, i.jsxs)("div", {
                              className: N().rowInner,
                              children: [
                                (0, i.jsx)(_.e, {
                                  name: e3.name,
                                  src: e3.photo,
                                  status: e3.online ? "online" : void 0
                                }),
                                (0, i.jsx)("div", {
                                  className: N().rowBody,
                                  onKeyDown: (t3) => {
                                    "Escape" === t3.key && a3 && (t3.stopPropagation(), eM(e3.id));
                                  },
                                  children: (0, i.jsx)(o.N, {
                                    mode: "popLayout",
                                    initial: false,
                                    children: a3 ? (0, i.jsxs)(
                                      l.PY1.div,
                                      {
                                        className: N().confirm,
                                        initial: eP,
                                        animate: {
                                          opacity: 1,
                                          y: 0,
                                          filter: "blur(0px)"
                                        },
                                        exit: ez,
                                        transition: eE,
                                        children: [
                                          (0, i.jsxs)("div", {
                                            className: N().identity,
                                            children: [
                                              (0, i.jsxs)("span", {
                                                className: N().name,
                                                children: [
                                                  "Remove ",
                                                  e3.name,
                                                  "?"
                                                ]
                                              }),
                                              (0, i.jsxs)("span", {
                                                className: N().detail,
                                                children: [
                                                  "They lose access to ",
                                                  k,
                                                  " right away"
                                                ]
                                              })
                                            ]
                                          }),
                                          (0, i.jsxs)("div", {
                                            className: N().confirmActions,
                                            children: [
                                              (0, i.jsx)(b.$, {
                                                ref: ec,
                                                type: "button",
                                                variant: "secondary",
                                                size: "sm",
                                                onClick: () => eM(e3.id),
                                                children: "Cancel"
                                              }),
                                              (0, i.jsx)(b.$, {
                                                type: "button",
                                                variant: "danger",
                                                size: "sm",
                                                onClick: () => {
                                                  let a4, t3, i2;
                                                  return t3 = (a4 = eN.filter(
                                                    (e4) => !e4.you
                                                  )).findIndex(
                                                    (a5) => a5.id === e3.id
                                                  ), i2 = a4[t3 + 1] ?? a4[t3 - 1], void (s2(
                                                    (a5) => a5.filter(
                                                      (a6) => a6.id !== e3.id
                                                    )
                                                  ), er(null), eo(
                                                    `${e3.name} was removed from ${k}`
                                                  ), eS(
                                                    i2 ? eu.current.get(
                                                      i2.id
                                                    ) : em.current
                                                  ));
                                                },
                                                children: "Remove"
                                              })
                                            ]
                                          })
                                        ]
                                      },
                                      "confirm"
                                    ) : (0, i.jsxs)(
                                      l.PY1.div,
                                      {
                                        className: N().view,
                                        initial: eP,
                                        animate: {
                                          opacity: 1,
                                          y: 0,
                                          filter: "blur(0px)"
                                        },
                                        exit: ez,
                                        transition: eE,
                                        children: [
                                          (0, i.jsxs)("div", {
                                            className: N().identity,
                                            children: [
                                              (0, i.jsxs)("span", {
                                                className: N().name,
                                                children: [
                                                  e3.name,
                                                  e3.you && (0, i.jsx)("span", {
                                                    className: N().you,
                                                    children: "You"
                                                  })
                                                ]
                                              }),
                                              (0, i.jsx)("span", {
                                                className: N().detail,
                                                children: e3.email
                                              }),
                                              (0, i.jsx)("span", {
                                                className: `${N().detail} ${N().activeInline}`,
                                                children: e3.active
                                              })
                                            ]
                                          }),
                                          (0, i.jsx)("span", {
                                            className: N().active,
                                            children: e3.active
                                          }),
                                          "owner" === e3.role ? (0, i.jsx)("span", {
                                            className: N().owner,
                                            children: "Owner"
                                          }) : (0, i.jsx)(W, {
                                            label: `Role for ${e3.name}`,
                                            value: e3.role,
                                            onChange: (a4) => {
                                              s2(
                                                (t3) => t3.map(
                                                  (t4) => t4.id === e3.id ? { ...t4, role: a4 } : t4
                                                )
                                              ), eo(
                                                `${e3.name} is now ${O(a4)}`
                                              );
                                            }
                                          }),
                                          e3.you ? (0, i.jsx)("span", {
                                            className: N().spacer,
                                            "aria-hidden": "true"
                                          }) : (0, i.jsx)(b.$, {
                                            ref: (a4) => {
                                              a4 && eu.current.set(e3.id, a4);
                                            },
                                            type: "button",
                                            variant: "ghost",
                                            size: "sm",
                                            className: N().iconButton,
                                            "aria-label": `Remove ${e3.name}`,
                                            onClick: () => er(e3.id),
                                            children: (0, i.jsx)(f.A, {
                                              size: 16,
                                              strokeWidth: 1.75,
                                              "aria-hidden": "true"
                                            })
                                          })
                                        ]
                                      },
                                      "view"
                                    )
                                  })
                                })
                              ]
                            })
                          },
                          e3.id
                        );
                      }),
                      0 === eN.length && (0, i.jsx)(
                        B,
                        {
                          className: N().emptyRow,
                          children: (0, i.jsxs)("div", {
                            className: N().empty,
                            children: [
                              (0, i.jsxs)("p", {
                                children: [
                                  "No members match \u201C",
                                  ei.trim(),
                                  "\u201D"
                                ]
                              }),
                              (0, i.jsx)(b.$, {
                                type: "button",
                                variant: "secondary",
                                size: "sm",
                                onClick: () => {
                                  en(""), em.current?.focus();
                                },
                                children: "Clear search"
                              })
                            ]
                          })
                        },
                        "members-empty"
                      )
                    ]
                  })
                }),
                (0, i.jsx)("div", {
                  className: N().sectionHead,
                  children: (0, i.jsxs)("h3", {
                    id: `${e2}-pending`,
                    className: N().sectionTitle,
                    children: [
                      "Pending invites ",
                      (0, i.jsx)("span", {
                        className: N().count,
                        children: (0, i.jsx)(g.q, { value: ek.length })
                      })
                    ]
                  })
                }),
                (0, i.jsx)("ul", {
                  className: N().list,
                  "aria-labelledby": `${e2}-pending`,
                  children: (0, i.jsxs)(o.N, {
                    initial: false,
                    children: [
                      ek.map((e3) => {
                        let t3 = G.indexOf(e3.id), n2 = t3 >= 0, s3 = ea[e3.id], r2 = a2 ? E : {
                          duration: I.standard,
                          ease: P,
                          delay: 0.24 + Math.max(t3, 0) * j.T.stagger.line
                        };
                        return (0, i.jsx)(
                          B,
                          {
                            className: N().row,
                            fade: !n2,
                            open: n2,
                            children: (0, i.jsxs)("div", {
                              className: N().rowInner,
                              children: [
                                (0, i.jsx)(l.PY1.span, {
                                  className: N().pendingAvatar,
                                  "aria-hidden": "true",
                                  initial: !!n2 && { opacity: 0, scale: 0.6 },
                                  animate: { opacity: 1, scale: 1 },
                                  transition: a2 ? E : {
                                    ...C.snappy,
                                    delay: 0.2 + Math.max(t3, 0) * j.T.stagger.line
                                  },
                                  children: e3.email.split("@")[0].split(/[._-]+/).filter(Boolean).slice(0, 2).map((e4) => e4[0].toUpperCase()).join("")
                                }),
                                (0, i.jsxs)("div", {
                                  className: N().pendingBody,
                                  children: [
                                    (0, i.jsxs)("div", {
                                      className: N().identity,
                                      children: [
                                        (0, i.jsx)(l.PY1.span, {
                                          layoutId: `invite-${e3.email}`,
                                          layout: "position",
                                          layoutCrossfade: false,
                                          className: [
                                            N().inviteEmail,
                                            n2 ? N().landing : ""
                                          ].filter(Boolean).join(" "),
                                          transition: a2 ? E : {
                                            layout: {
                                              ...C.morph,
                                              visualDuration: 0.5 + 0.06 * Math.max(t3, 0)
                                            }
                                          },
                                          children: e3.email
                                        }),
                                        (0, i.jsxs)(l.PY1.span, {
                                          className: N().detail,
                                          initial: !!n2 && { opacity: 0 },
                                          animate: { opacity: 1 },
                                          transition: r2,
                                          children: [
                                            (0, i.jsxs)("span", {
                                              className: N().srOnly,
                                              children: [
                                                $[e3.role],
                                                ", ",
                                                e3.sent
                                              ]
                                            }),
                                            (0, i.jsx)(Y, {
                                              text: `${$[e3.role]} \xB7 ${e3.sent}`
                                            })
                                          ]
                                        })
                                      ]
                                    }),
                                    (0, i.jsxs)(l.PY1.div, {
                                      className: N().pendingActions,
                                      initial: !!n2 && { opacity: 0, y: 4 },
                                      animate: { opacity: 1, y: 0 },
                                      transition: r2,
                                      children: [
                                        (0, i.jsx)(b.$, {
                                          type: "button",
                                          variant: "ghost",
                                          size: "sm",
                                          loading: "sending" === s3,
                                          "aria-label": "sent" === s3 ? `Sent, invite to ${e3.email} resent` : `Resend invite to ${e3.email}`,
                                          onClick: () => {
                                            ea[e3.id] || (et((a3) => ({
                                              ...a3,
                                              [e3.id]: "sending"
                                            })), eA(() => {
                                              et((a3) => ({
                                                ...a3,
                                                [e3.id]: "sent"
                                              })), y2(
                                                (a3) => a3.map(
                                                  (a4) => a4.id === e3.id ? {
                                                    ...a4,
                                                    sent: "Resent just now"
                                                  } : a4
                                                )
                                              ), eo(
                                                `Invite resent to ${e3.email}`
                                              ), eA(
                                                () => et((a3) => {
                                                  let t4 = { ...a3 };
                                                  return delete t4[e3.id], t4;
                                                }),
                                                1800
                                              );
                                            }, 600));
                                          },
                                          children: "sent" === s3 ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                              (0, i.jsx)(u.A, {
                                                size: 15,
                                                strokeWidth: 2,
                                                "aria-hidden": "true"
                                              }),
                                              " Sent"
                                            ]
                                          }) : "Resend"
                                        }),
                                        (0, i.jsx)(b.$, {
                                          ref: (a3) => {
                                            a3 && ep.current.set(e3.id, a3);
                                          },
                                          type: "button",
                                          variant: "ghost",
                                          size: "sm",
                                          "aria-label": `Revoke invite to ${e3.email}`,
                                          onClick: () => {
                                            let a3, t4;
                                            return a3 = ek.findIndex(
                                              (a4) => a4.id === e3.id
                                            ), t4 = ek[a3 + 1] ?? ek[a3 - 1], void (y2(
                                              (a4) => a4.filter((a5) => a5.id !== e3.id)
                                            ), eo(
                                              `Invite to ${e3.email} revoked`
                                            ), eS(
                                              t4 ? ep.current.get(t4.id) : ed.current
                                            ));
                                          },
                                          children: "Revoke"
                                        })
                                      ]
                                    })
                                  ]
                                })
                              ]
                            })
                          },
                          e3.id
                        );
                      }),
                      0 === ek.length && (0, i.jsx)(
                        B,
                        {
                          className: N().emptyRow,
                          children: (0, i.jsx)("p", {
                            className: N().emptyLine,
                            children: ew && c2.length ? "No invites match your search" : "No pending invites"
                          })
                        },
                        "invites-empty"
                      )
                    ]
                  })
                })
              ]
            }),
            (0, i.jsxs)("footer", {
              className: N().footer,
              children: [
                (0, i.jsx)("p", {
                  className: N().srOnly,
                  role: "status",
                  "aria-live": "polite",
                  children: el
                }),
                (0, i.jsx)("span", {
                  className: N().status,
                  children: (0, i.jsx)(Y, { text: el })
                })
              ]
            })
          ]
        })
      })
    });
  }
  let H = q;
}

__m(__module,__exports,__require);
});
A.reg(43298, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { L: () => h });
  var s = a(95155), r = a(12115), i = a(18310), n = a(80642), o = a(25354), l = a(65377), d = a(9005), c = a(7770), u = a(79698), p = a.n(u);
  let h = (0, r.forwardRef)(function({ label: e2, value: t2, onValueChange: a2, id: u2, className: h2, ...m }, y) {
    let g = (0, r.useId)(), w = u2 ?? g, x = (0, i.I)(), f = (0, r.useRef)(null);
    return (0, s.jsxs)("div", {
      className: p().field,
      children: [
        (0, s.jsx)("label", { htmlFor: w, children: e2 }),
        (0, s.jsxs)("div", {
          className: p().shell,
          "data-filled": t2 ? "true" : void 0,
          children: [
            (0, s.jsx)(l.A, { width: 18, height: 18, "aria-hidden": "true" }),
            (0, s.jsx)("input", {
              ...m,
              ref: (e3) => {
                f.current = e3, "function" == typeof y ? y(e3) : y && (y.current = e3);
              },
              id: w,
              type: "search",
              value: t2,
              onChange: (e3) => a2(e3.target.value),
              className: [p().input, h2].filter(Boolean).join(" ")
            }),
            (0, s.jsx)("span", {
              className: p().clearSlot,
              children: (0, s.jsx)(n.N, {
                initial: false,
                children: t2 ? (0, s.jsx)(
                  o.PY1.button,
                  {
                    type: "button",
                    tabIndex: 0,
                    onClick: function() {
                      a2(""), f.current?.focus();
                    },
                    "aria-label": "Clear search",
                    initial: x ? { opacity: 0 } : {
                      opacity: 0,
                      scale: 0.8,
                      filter: `blur(${c.T.blur.subtle}px)`
                    },
                    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
                    exit: x ? { opacity: 0, transition: { duration: 0 } } : {
                      opacity: 0,
                      scale: 0.8,
                      filter: `blur(${c.T.blur.subtle}px)`,
                      transition: {
                        duration: c.T.duration.instant,
                        ease: [...c.T.ease.standard]
                      }
                    },
                    whileTap: x ? void 0 : {
                      scale: 0.96,
                      transition: {
                        duration: c.T.duration.instant,
                        ease: [...c.T.ease.standard]
                      }
                    },
                    transition: x ? { duration: c.T.duration.instant } : {
                      ...c.T.spring.snappy,
                      opacity: { duration: c.T.duration.fast },
                      filter: { duration: c.T.duration.fast }
                    },
                    children: (0, s.jsx)(d.A, {
                      width: 16,
                      height: 16,
                      "aria-hidden": "true"
                    })
                  },
                  "clear"
                ) : null
              })
            })
          ]
        })
      ]
    });
  });
}

__m(__module,__exports,__require);
});
A.regCss(64444, ".frame,.frame.frame{position:relative;display:inline-block;box-sizing:content-box;padding:.5em .5em .5em .2em;margin:-.5em -.5em -.5em -.2em;text-align:start;white-space:nowrap;mask-image:linear-gradient(90deg,#000 calc(100% - .5em),transparent)}\n.track{position:relative;display:inline-block;white-space:nowrap}\n.glyph{display:inline-block;white-space:pre;transform-origin:50% 60%}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0;user-select:none}", {});
A.reg(73051, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, {
    UC: () => J,
    In: () => q,
    q7: () => ev,
    VF: () => ew,
    p4: () => eg,
    ZL: () => Y,
    bL: () => G,
    wn: () => eb,
    PP: () => eS,
    l9: () => W,
    WT: () => z,
    LM: () => eu
  });
  var r = n(12115), o = n(47650);
  function l(e2, [t2, n2]) {
    return Math.min(n2, Math.max(t2, e2));
  }
  (0, Object.defineProperty)(l, "name", { value: "clamp", configurable: true });
  var i = n(70379), a = n(76094), s = n(47527), u = n(68599), c = n(1933), d = n(19416), p = n(32007), f = n(69885), h = n(89971), v = n(80878), m = n(19040), g = n(83935), w = n(55897), x = n(42442), S = n(17347), y = n(59322), b = n(66294);
  function C(e2) {
    let t2 = r.useRef({ value: e2, previous: e2 });
    return r.useMemo(
      () => (t2.current.value !== e2 && (t2.current.previous = t2.current.value, t2.current.value = e2), t2.current.previous),
      [e2]
    );
  }
  (0, Object.defineProperty)(C, "name", {
    value: "usePrevious",
    configurable: true
  });
  var j = n(40562), P = n(22954), T = n(5174), k = n(95155), I = Object.defineProperty, E = (e2, t2) => I(e2, "name", { value: t2, configurable: true }), R = [" ", "Enter", "ArrowUp", "ArrowDown"], M = [" ", "Enter"], D = "Select", [L, K, B] = (0, a.N)(D), [_, H] = (0, u.A)(D, [B, v.Bk]), N = (0, v.Bk)(), [A, O] = _(D), [V, F] = _(D);
  function U(e2) {
    let {
      __scopeSelect: t2,
      children: n2,
      open: o2,
      defaultOpen: l2,
      onOpenChange: i2,
      value: a2,
      defaultValue: s2,
      onValueChange: u2,
      dir: d2,
      name: p2,
      autoComplete: f2,
      disabled: m2,
      required: g2,
      form: w2,
      internal_do_not_use_render: x2
    } = e2, S2 = N(t2), [b2, C2] = r.useState(null), [j2, P2] = r.useState(null), [T2, I2] = r.useState(false), R2 = (0, c.jH)(d2), [M2, K2] = (0, y.i)({
      prop: o2,
      defaultProp: l2 ?? false,
      onChange: i2,
      caller: D
    }), [B2, _2] = (0, y.i)({ prop: a2, defaultProp: s2, onChange: u2, caller: D }), H2 = r.useRef(null), O2 = r.useRef(B2);
    r.useEffect(() => {
      let e3 = w2 ? b2?.ownerDocument.getElementById(w2) : b2?.form;
      if (e3 instanceof HTMLFormElement) {
        let t3 = E(() => _2(O2.current), "reset");
        return e3.addEventListener("reset", t3), () => e3.removeEventListener("reset", t3);
      }
    }, [w2, b2, _2]);
    let F2 = !b2 || !!w2 || !!b2.closest("form"), [U2, G2] = r.useState(/* @__PURE__ */ new Set()), W2 = (0, h.B)(), z2 = Array.from(U2).map((e3) => e3.props.value).join(";"), q2 = r.useCallback((e3) => {
      G2((t3) => new Set(t3).add(e3));
    }, []), Z2 = r.useCallback((e3) => {
      G2((t3) => {
        let n3 = new Set(t3);
        return n3.delete(e3), n3;
      });
    }, []), X2 = {
      required: g2,
      trigger: b2,
      onTriggerChange: C2,
      valueNode: j2,
      onValueNodeChange: P2,
      valueNodeHasChildren: T2,
      onValueNodeHasChildrenChange: I2,
      contentId: W2,
      value: B2,
      onValueChange: _2,
      open: M2,
      onOpenChange: K2,
      dir: R2,
      triggerPointerDownPosRef: H2,
      disabled: m2,
      name: p2,
      autoComplete: f2,
      form: w2,
      nativeOptions: U2,
      nativeSelectKey: z2,
      isFormControl: F2
    };
    return (0, k.jsx)(v.bL, {
      ...S2,
      children: (0, k.jsx)(A, {
        scope: t2,
        ...X2,
        children: (0, k.jsx)(L.Provider, {
          scope: t2,
          children: (0, k.jsx)(V, {
            scope: t2,
            onNativeOptionAdd: q2,
            onNativeOptionRemove: Z2,
            children: eP(x2) ? x2(X2) : n2
          })
        })
      })
    });
  }
  E(U, "SelectProvider");
  var G = E((e2) => {
    let { __scopeSelect: t2, children: n2, ...r2 } = e2;
    return (0, k.jsx)(U, {
      __scopeSelect: t2,
      ...r2,
      internal_do_not_use_render: ({ isFormControl: e3 }) => (0, k.jsxs)(k.Fragment, {
        children: [n2, e3 ? (0, k.jsx)(ej, { __scopeSelect: t2 }) : null]
      })
    });
  }, "Select"), W = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, disabled: o2 = false, ...l2 } = e2, a2 = N(n2), u2 = O("SelectTrigger", n2), c2 = u2.disabled || o2, d2 = (0, s.s)(t2, u2.onTriggerChange), p2 = K(n2), f2 = r.useRef("touch"), [h2, m2, g2] = ek((e3) => {
        let t3 = p2().filter((e4) => !e4.disabled), n3 = t3.find((e4) => e4.value === u2.value), r2 = eI(t3, e3, n3);
        void 0 !== r2 && u2.onValueChange(r2.value);
      }), x2 = E((e3) => {
        c2 || (u2.onOpenChange(true), g2()), e3 && (u2.triggerPointerDownPosRef.current = {
          x: Math.round(e3.pageX),
          y: Math.round(e3.pageY)
        });
      }, "handleOpen");
      return (0, k.jsx)(v.Mz, {
        asChild: true,
        ...a2,
        children: (0, k.jsx)(w.sG.button, {
          type: "button",
          role: "combobox",
          "aria-controls": u2.open ? u2.contentId : void 0,
          "aria-expanded": u2.open,
          "aria-required": u2.required,
          "aria-autocomplete": "none",
          dir: u2.dir,
          "data-state": u2.open ? "open" : "closed",
          disabled: c2,
          "data-disabled": c2 ? "" : void 0,
          "data-placeholder": eT(u2.value) ? "" : void 0,
          ...l2,
          ref: d2,
          onClick: (0, i.mK)(l2.onClick, (e3) => {
            e3.currentTarget.focus(), "mouse" !== f2.current && x2(e3);
          }),
          onPointerDown: (0, i.mK)(l2.onPointerDown, (e3) => {
            f2.current = e3.pointerType;
            let t3 = e3.target;
            t3.hasPointerCapture(e3.pointerId) && t3.releasePointerCapture(e3.pointerId), 0 === e3.button && false === e3.ctrlKey && "mouse" === e3.pointerType && (x2(e3), e3.preventDefault());
          }),
          onKeyDown: (0, i.mK)(l2.onKeyDown, (e3) => {
            let t3 = "" !== h2.current;
            e3.ctrlKey || e3.altKey || e3.metaKey || 1 !== e3.key.length || m2(e3.key), (!t3 || " " !== e3.key) && R.includes(e3.key) && (x2(), e3.preventDefault());
          })
        })
      });
    }, "SelectTrigger")
  ), z = r.forwardRef(
    E(function(e2, t2) {
      let {
        __scopeSelect: n2,
        className: o2,
        style: l2,
        children: i2,
        placeholder: a2 = "",
        ...u2
      } = e2, c2 = O("SelectValue", n2), { onValueNodeHasChildrenChange: d2 } = c2, p2 = void 0 !== i2, f2 = (0, s.s)(t2, c2.onValueNodeChange);
      (0, b.N)(() => {
        d2(p2);
      }, [d2, p2]);
      let h2 = eT(c2.value);
      return (0, k.jsx)(w.sG.span, {
        ...u2,
        asChild: !h2 && u2.asChild,
        ref: f2,
        style: { pointerEvents: "none" },
        children: (0, k.jsx)(
          r.Fragment,
          { children: h2 ? a2 : i2 },
          h2 ? "placeholder" : "value"
        )
      });
    }, "SelectValue")
  ), q = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, children: r2, ...o2 } = e2;
      return (0, k.jsx)(w.sG.span, {
        "aria-hidden": true,
        ...o2,
        ref: t2,
        children: r2 || "\u25BC"
      });
    }, "SelectIcon")
  ), [Z, X] = _("SelectPortal", { forceMount: void 0 }), Y = E((e2) => {
    let { __scopeSelect: t2, forceMount: n2, ...r2 } = e2;
    return (0, k.jsx)(Z, {
      scope: e2.__scopeSelect,
      forceMount: n2,
      children: (0, k.jsx)(m.Z, { asChild: true, ...r2 })
    });
  }, "SelectPortal"), Q = "SelectContent", J = r.forwardRef(
    E(function(e2, t2) {
      let n2 = X(Q, e2.__scopeSelect), { forceMount: o2 = n2.forceMount, ...l2 } = e2, i2 = O(Q, e2.__scopeSelect), [a2, s2] = r.useState();
      return (0, b.N)(() => {
        s2(new DocumentFragment());
      }, []), (0, k.jsx)(g.C, {
        present: o2 || i2.open,
        children: ({ present: e3 }) => e3 ? (0, k.jsx)(er, { ...l2, ref: t2 }) : (0, k.jsx)($, { ...l2, fragment: a2 })
      });
    }, "SelectContent")
  ), $ = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, children: r2, fragment: l2 } = e2;
      return l2 ? o.createPortal(
        (0, k.jsx)(ee, {
          scope: n2,
          children: (0, k.jsx)(L.Slot, {
            scope: n2,
            children: (0, k.jsx)("div", { ref: t2, children: r2 })
          })
        }),
        l2
      ) : null;
    }, "SelectContentFragment")
  ), [ee, et] = _(Q), en = (0, x.TL)("SelectContent.RemoveScroll"), er = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2 } = e2, {
        position: o2 = "item-aligned",
        onCloseAutoFocus: l2,
        onEscapeKeyDown: a2,
        onPointerDownOutside: u2,
        side: c2,
        sideOffset: h2,
        align: v2,
        alignOffset: m2,
        arrowPadding: g2,
        collisionBoundary: w2,
        collisionPadding: x2,
        sticky: S2,
        hideWhenDetached: y2,
        avoidCollisions: b2,
        ...C2
      } = e2, j2 = O(Q, n2), [I2, R2] = r.useState(null), [M2, D2] = r.useState(null), L2 = (0, s.s)(t2, R2), [B2, _2] = r.useState(null), [H2, N2] = r.useState(null), A2 = K(n2), [V2, F2] = r.useState(false), U2 = r.useRef(false);
      r.useEffect(() => {
        if (I2) return (0, P.Eq)(I2);
      }, [I2]), (0, p.Oh)();
      let G2 = r.useCallback(
        (e3) => {
          let [t3, ...n3] = A2().map((e4) => e4.ref.current), [r2] = n3.slice(-1), o3 = document.activeElement;
          for (let n4 of e3)
            if (n4 === o3 || (n4?.scrollIntoView({ block: "nearest" }), n4 === t3 && M2 && (M2.scrollTop = 0), n4 === r2 && M2 && (M2.scrollTop = M2.scrollHeight), n4?.focus(), document.activeElement !== o3))
              return;
        },
        [A2, M2]
      ), W2 = r.useCallback(() => G2([B2, I2]), [G2, B2, I2]);
      r.useEffect(() => {
        V2 && W2();
      }, [V2, W2]);
      let { onOpenChange: z2, triggerPointerDownPosRef: q2 } = j2;
      r.useEffect(() => {
        if (I2) {
          let e3 = { x: 0, y: 0 }, t3 = E((t4) => {
            e3 = {
              x: Math.abs(Math.round(t4.pageX) - (q2.current?.x ?? 0)),
              y: Math.abs(Math.round(t4.pageY) - (q2.current?.y ?? 0))
            };
          }, "handlePointerMove"), n3 = E((n4) => {
            e3.x <= 10 && e3.y <= 10 ? n4.preventDefault() : n4.composedPath().includes(I2) || z2(false), document.removeEventListener("pointermove", t3), q2.current = null;
          }, "handlePointerUp");
          return null !== q2.current && (document.addEventListener("pointermove", t3), document.addEventListener("pointerup", n3, {
            capture: true,
            once: true
          })), () => {
            document.removeEventListener("pointermove", t3), document.removeEventListener("pointerup", n3, {
              capture: true
            });
          };
        }
      }, [I2, z2, q2]), r.useEffect(() => {
        let e3 = E(() => z2(false), "close");
        return window.addEventListener("blur", e3), window.addEventListener("resize", e3), () => {
          window.removeEventListener("blur", e3), window.removeEventListener("resize", e3);
        };
      }, [z2]);
      let [Z2, X2] = ek((e3) => {
        let t3 = A2().filter((e4) => !e4.disabled), n3 = t3.find((e4) => e4.ref.current === document.activeElement), r2 = eI(t3, e3, n3);
        r2 && setTimeout(() => r2.ref.current?.focus());
      }), Y2 = r.useCallback(
        (e3, t3, n3) => {
          let r2 = !U2.current && !n3;
          (void 0 !== j2.value && j2.value === t3 || r2) && (_2(e3), r2 && (U2.current = true));
        },
        [j2.value]
      ), J2 = r.useCallback(() => I2?.focus(), [I2]), $2 = r.useCallback(
        (e3, t3, n3) => {
          let r2 = !U2.current && !n3;
          (void 0 !== j2.value && j2.value === t3 || r2) && N2(e3);
        },
        [j2.value]
      ), et2 = "popper" === o2 ? el : eo;
      return (0, k.jsx)(ee, {
        scope: n2,
        content: I2,
        viewport: M2,
        onViewportChange: D2,
        itemRefCallback: Y2,
        selectedItem: B2,
        onItemLeave: J2,
        itemTextRefCallback: $2,
        focusSelectedItem: W2,
        selectedItemText: H2,
        position: o2,
        isPositioned: V2,
        searchRef: Z2,
        children: (0, k.jsx)(T.A, {
          as: en,
          allowPinchZoom: true,
          children: (0, k.jsx)(f.n, {
            asChild: true,
            trapped: j2.open,
            onMountAutoFocus: (e3) => {
              e3.preventDefault();
            },
            onUnmountAutoFocus: (0, i.mK)(l2, (e3) => {
              j2.trigger?.focus({ preventScroll: true }), e3.preventDefault();
            }),
            children: (0, k.jsx)(d.qW, {
              asChild: true,
              disableOutsidePointerEvents: true,
              onEscapeKeyDown: a2,
              onPointerDownOutside: u2,
              onFocusOutside: (e3) => e3.preventDefault(),
              onDismiss: () => j2.onOpenChange(false),
              children: (0, k.jsx)(et2, {
                role: "listbox",
                id: j2.contentId,
                "data-state": j2.open ? "open" : "closed",
                dir: j2.dir,
                onContextMenu: (e3) => e3.preventDefault(),
                ...C2,
                ...et2 === el ? {
                  side: c2,
                  sideOffset: h2,
                  align: v2,
                  alignOffset: m2,
                  arrowPadding: g2,
                  collisionBoundary: w2,
                  collisionPadding: x2,
                  sticky: S2,
                  hideWhenDetached: y2,
                  avoidCollisions: b2
                } : {},
                onPlaced: () => F2(true),
                ref: L2,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  outline: "none",
                  ...C2.style
                },
                onKeyDown: (0, i.mK)(C2.onKeyDown, (e3) => {
                  let t3 = e3.ctrlKey || e3.altKey || e3.metaKey;
                  if ("Tab" === e3.key && e3.preventDefault(), t3 || 1 !== e3.key.length || X2(e3.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e3.key)) {
                    let t4 = A2().filter((e4) => !e4.disabled).map((e4) => e4.ref.current);
                    if (["ArrowUp", "End"].includes(e3.key) && (t4 = t4.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e3.key)) {
                      let n3 = e3.target, r2 = t4.indexOf(n3);
                      t4 = t4.slice(r2 + 1);
                    }
                    setTimeout(() => G2(t4)), e3.preventDefault();
                  }
                })
              })
            })
          })
        })
      });
    }, "SelectContentImpl")
  ), eo = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, onPlaced: o2, ...i2 } = e2, a2 = O(Q, n2), u2 = et(Q, n2), [c2, d2] = r.useState(null), [p2, f2] = r.useState(null), h2 = (0, s.s)(t2, f2), v2 = K(n2), m2 = r.useRef(false), g2 = r.useRef(true), {
        viewport: x2,
        selectedItem: S2,
        selectedItemText: y2,
        focusSelectedItem: C2
      } = u2, j2 = r.useCallback(() => {
        if (a2.trigger && a2.valueNode && c2 && p2 && x2 && S2 && y2) {
          let e3 = a2.trigger.getBoundingClientRect(), t3 = p2.getBoundingClientRect(), n3 = a2.valueNode.getBoundingClientRect(), r2 = y2.getBoundingClientRect();
          if ("rtl" !== a2.dir) {
            let o3 = r2.left - t3.left, i4 = n3.left - o3, a3 = e3.left - i4, s3 = e3.width + a3, u4 = Math.max(s3, t3.width), d4 = l(i4, [10, Math.max(10, window.innerWidth - 10 - u4)]);
            c2.style.minWidth = s3 + "px", c2.style.left = d4 + "px";
          } else {
            let o3 = t3.right - r2.right, i4 = window.innerWidth - n3.right - o3, a3 = window.innerWidth - e3.right - i4, s3 = e3.width + a3, u4 = Math.max(s3, t3.width), d4 = l(i4, [10, Math.max(10, window.innerWidth - 10 - u4)]);
            c2.style.minWidth = s3 + "px", c2.style.right = d4 + "px";
          }
          let i3 = v2(), s2 = window.innerHeight - 20, u3 = x2.scrollHeight, d3 = window.getComputedStyle(p2), f3 = parseInt(d3.borderTopWidth, 10), h3 = parseInt(d3.paddingTop, 10), g3 = parseInt(d3.borderBottomWidth, 10), w2 = f3 + h3 + u3 + parseInt(d3.paddingBottom, 10) + g3, b2 = Math.min(5 * S2.offsetHeight, w2), C3 = window.getComputedStyle(x2), j3 = parseInt(C3.paddingTop, 10), P3 = parseInt(C3.paddingBottom, 10), T3 = e3.top + e3.height / 2 - 10, k2 = S2.offsetHeight / 2, I3 = f3 + h3 + (S2.offsetTop + k2);
          if (I3 <= T3) {
            let e4 = i3.length > 0 && S2 === i3[i3.length - 1].ref.current;
            c2.style.bottom = "0px";
            let t4 = Math.max(
              s2 - T3,
              k2 + (e4 ? P3 : 0) + (p2.clientHeight - x2.offsetTop - x2.offsetHeight) + g3
            );
            c2.style.height = I3 + t4 + "px";
          } else {
            let e4 = i3.length > 0 && S2 === i3[0].ref.current;
            c2.style.top = "0px";
            let t4 = Math.max(T3, f3 + x2.offsetTop + (e4 ? j3 : 0) + k2);
            c2.style.height = t4 + (w2 - I3) + "px", x2.scrollTop = I3 - T3 + x2.offsetTop;
          }
          c2.style.margin = "10px 0", c2.style.minHeight = b2 + "px", c2.style.maxHeight = s2 + "px", o2?.(), requestAnimationFrame(() => m2.current = true);
        }
      }, [v2, a2.trigger, a2.valueNode, c2, p2, x2, S2, y2, a2.dir, o2]);
      (0, b.N)(() => j2(), [j2]);
      let [P2, T2] = r.useState();
      (0, b.N)(() => {
        p2 && T2(window.getComputedStyle(p2).zIndex);
      }, [p2]);
      let I2 = r.useCallback(
        (e3) => {
          e3 && true === g2.current && (j2(), C2?.(), g2.current = false);
        },
        [j2, C2]
      );
      return (0, k.jsx)(ei, {
        scope: n2,
        contentWrapper: c2,
        shouldExpandOnScrollRef: m2,
        onScrollButtonChange: I2,
        children: (0, k.jsx)("div", {
          ref: d2,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: P2
          },
          children: (0, k.jsx)(w.sG.div, {
            ...i2,
            ref: h2,
            style: { boxSizing: "border-box", maxHeight: "100%", ...i2.style }
          })
        })
      });
    }, "SelectItemAlignedPosition")
  ), el = r.forwardRef(
    E(function(e2, t2) {
      let {
        __scopeSelect: n2,
        align: r2 = "start",
        collisionPadding: o2 = 10,
        ...l2
      } = e2, i2 = N(n2);
      return (0, k.jsx)(v.UC, {
        ...i2,
        ...l2,
        ref: t2,
        align: r2,
        collisionPadding: o2,
        style: {
          boxSizing: "border-box",
          ...l2.style,
          "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width": "var(--radix-popper-available-width)",
          "--radix-select-content-available-height": "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
      });
    }, "SelectPopperPosition")
  ), [ei, ea] = _(Q, {}), es = "SelectViewport", eu = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, nonce: o2, ...l2 } = e2, a2 = et(es, n2), u2 = ea(es, n2), c2 = (0, s.s)(t2, a2.onViewportChange), d2 = r.useRef(0);
      return (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o2
          }),
          (0, k.jsx)(L.Slot, {
            scope: n2,
            children: (0, k.jsx)(w.sG.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...l2,
              ref: c2,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...l2.style
              },
              onScroll: (0, i.mK)(l2.onScroll, (e3) => {
                let t3 = e3.currentTarget, { contentWrapper: n3, shouldExpandOnScrollRef: r2 } = u2;
                if (r2?.current && n3) {
                  let e4 = Math.abs(d2.current - t3.scrollTop);
                  if (e4 > 0) {
                    let r3 = window.innerHeight - 20, o3 = Math.max(
                      parseFloat(n3.style.minHeight),
                      parseFloat(n3.style.height)
                    );
                    if (o3 < r3) {
                      let l3 = o3 + e4, i2 = Math.min(r3, l3), a3 = l3 - i2;
                      n3.style.height = i2 + "px", "0px" === n3.style.bottom && (t3.scrollTop = a3 > 0 ? a3 : 0, n3.style.justifyContent = "flex-end");
                    }
                  }
                }
                d2.current = t3.scrollTop;
              })
            })
          })
        ]
      });
    }, "SelectViewport")
  ), [ec, ed] = _("SelectGroup"), ep = "SelectItem", [ef, eh] = _(ep), ev = r.forwardRef(
    E(function(e2, t2) {
      let {
        __scopeSelect: n2,
        value: o2,
        disabled: l2 = false,
        textValue: a2,
        ...u2
      } = e2, c2 = O(ep, n2), d2 = et(ep, n2), p2 = c2.value === o2, [f2, v2] = r.useState(a2 ?? ""), [m2, g2] = r.useState(false), x2 = (0, S.c)((e3) => d2.itemRefCallback?.(e3, o2, l2)), y2 = (0, s.s)(t2, x2), b2 = (0, h.B)(), C2 = r.useRef("touch"), j2 = E(() => {
        l2 || (c2.onValueChange(o2), c2.onOpenChange(false));
      }, "handleSelect");
      return (0, k.jsx)(ef, {
        scope: n2,
        value: o2,
        disabled: l2,
        textId: b2,
        isSelected: p2,
        onItemTextChange: r.useCallback((e3) => {
          v2((t3) => t3 || (e3?.textContent ?? "").trim());
        }, []),
        children: (0, k.jsx)(L.ItemSlot, {
          scope: n2,
          value: o2,
          disabled: l2,
          textValue: f2,
          children: (0, k.jsx)(w.sG.div, {
            role: "option",
            "aria-labelledby": b2,
            "data-highlighted": m2 ? "" : void 0,
            "aria-selected": p2 && m2,
            "data-state": p2 ? "checked" : "unchecked",
            "aria-disabled": l2 || void 0,
            "data-disabled": l2 ? "" : void 0,
            tabIndex: l2 ? void 0 : -1,
            ...u2,
            ref: y2,
            onFocus: (0, i.mK)(u2.onFocus, () => g2(true)),
            onBlur: (0, i.mK)(u2.onBlur, () => g2(false)),
            onClick: (0, i.mK)(u2.onClick, () => {
              "mouse" !== C2.current && j2();
            }),
            onPointerUp: (0, i.mK)(u2.onPointerUp, () => {
              "mouse" === C2.current && j2();
            }),
            onPointerDown: (0, i.mK)(u2.onPointerDown, (e3) => {
              C2.current = e3.pointerType;
            }),
            onPointerMove: (0, i.mK)(u2.onPointerMove, (e3) => {
              C2.current = e3.pointerType, l2 ? d2.onItemLeave?.() : "mouse" === C2.current && e3.currentTarget.focus({ preventScroll: true });
            }),
            onPointerLeave: (0, i.mK)(u2.onPointerLeave, (e3) => {
              e3.currentTarget === document.activeElement && d2.onItemLeave?.();
            }),
            onKeyDown: (0, i.mK)(u2.onKeyDown, (e3) => {
              l2 || e3.target !== e3.currentTarget || (d2.searchRef?.current === "" || " " !== e3.key) && (M.includes(e3.key) && j2(), " " === e3.key && e3.preventDefault());
            })
          })
        })
      });
    }, "SelectItem")
  ), em = "SelectItemText", eg = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, className: l2, style: i2, ...a2 } = e2, u2 = O(em, n2), c2 = et(em, n2), d2 = eh(em, n2), p2 = F(em, n2), [f2, h2] = r.useState(null), v2 = (0, S.c)((e3) => c2.itemTextRefCallback?.(e3, d2.value, d2.disabled)), m2 = (0, s.s)(t2, h2, d2.onItemTextChange, v2), g2 = f2?.textContent, x2 = r.useMemo(
        () => (0, k.jsx)(
          "option",
          { value: d2.value, disabled: d2.disabled, children: g2 },
          d2.value
        ),
        [d2.disabled, d2.value, g2]
      ), { onNativeOptionAdd: y2, onNativeOptionRemove: C2 } = p2;
      return (0, b.N)(() => (y2(x2), () => C2(x2)), [y2, C2, x2]), (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)(w.sG.span, { id: d2.textId, ...a2, ref: m2 }),
          d2.isSelected && u2.valueNode && !u2.valueNodeHasChildren && !eT(u2.value) ? o.createPortal(a2.children, u2.valueNode) : null
        ]
      });
    }, "SelectItemText")
  ), ew = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, ...r2 } = e2;
      return eh("SelectItemIndicator", n2).isSelected ? (0, k.jsx)(w.sG.span, { "aria-hidden": true, ...r2, ref: t2 }) : null;
    }, "SelectItemIndicator")
  ), ex = "SelectScrollUpButton", eS = r.forwardRef(
    E(function(e2, t2) {
      let n2 = et(ex, e2.__scopeSelect), o2 = ea(ex, e2.__scopeSelect), [l2, i2] = r.useState(false), a2 = (0, s.s)(t2, o2.onScrollButtonChange);
      return (0, b.N)(() => {
        if (n2.viewport && n2.isPositioned) {
          let e3 = function() {
            i2(t3.scrollTop > 0);
          };
          E(e3, "handleScroll");
          let t3 = n2.viewport;
          return e3(), t3.addEventListener("scroll", e3), () => t3.removeEventListener("scroll", e3);
        }
      }, [n2.viewport, n2.isPositioned]), l2 ? (0, k.jsx)(eC, {
        ...e2,
        ref: a2,
        onAutoScroll: () => {
          let { viewport: e3, selectedItem: t3 } = n2;
          e3 && t3 && (e3.scrollTop = e3.scrollTop - t3.offsetHeight);
        }
      }) : null;
    }, "SelectScrollUpButton")
  ), ey = "SelectScrollDownButton", eb = r.forwardRef(
    E(function(e2, t2) {
      let n2 = et(ey, e2.__scopeSelect), o2 = ea(ey, e2.__scopeSelect), [l2, i2] = r.useState(false), a2 = (0, s.s)(t2, o2.onScrollButtonChange);
      return (0, b.N)(() => {
        if (n2.viewport && n2.isPositioned) {
          let e3 = function() {
            let e4 = t3.scrollHeight - t3.clientHeight;
            i2(Math.ceil(t3.scrollTop) < e4);
          };
          E(e3, "handleScroll");
          let t3 = n2.viewport;
          return e3(), t3.addEventListener("scroll", e3), () => t3.removeEventListener("scroll", e3);
        }
      }, [n2.viewport, n2.isPositioned]), l2 ? (0, k.jsx)(eC, {
        ...e2,
        ref: a2,
        onAutoScroll: () => {
          let { viewport: e3, selectedItem: t3 } = n2;
          e3 && t3 && (e3.scrollTop = e3.scrollTop + t3.offsetHeight);
        }
      }) : null;
    }, "SelectScrollDownButton")
  ), eC = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, onAutoScroll: o2, ...l2 } = e2, a2 = et("SelectScrollButton", n2), s2 = r.useRef(null), u2 = K(n2), c2 = r.useCallback(() => {
        null !== s2.current && (window.clearInterval(s2.current), s2.current = null);
      }, []);
      return r.useEffect(() => () => c2(), [c2]), (0, b.N)(() => {
        let e3 = u2().find((e4) => e4.ref.current === document.activeElement);
        e3?.ref.current?.scrollIntoView({ block: "nearest" });
      }, [u2]), (0, k.jsx)(w.sG.div, {
        "aria-hidden": true,
        ...l2,
        ref: t2,
        style: { flexShrink: 0, ...l2.style },
        onPointerDown: (0, i.mK)(l2.onPointerDown, () => {
          null === s2.current && (s2.current = window.setInterval(o2, 50));
        }),
        onPointerMove: (0, i.mK)(l2.onPointerMove, () => {
          a2.onItemLeave?.(), null === s2.current && (s2.current = window.setInterval(o2, 50));
        }),
        onPointerLeave: (0, i.mK)(l2.onPointerLeave, () => {
          c2();
        })
      });
    }, "SelectScrollButtonImpl")
  ), ej = r.forwardRef(
    E(function({ __scopeSelect: e2, ...t2 }, n2) {
      let o2 = O("SelectBubbleInput", e2), {
        value: l2,
        onValueChange: i2,
        required: a2,
        disabled: u2,
        name: c2,
        autoComplete: d2,
        form: p2
      } = o2, { nativeOptions: f2, nativeSelectKey: h2 } = o2, v2 = r.useRef(null), m2 = (0, s.s)(n2, v2), g2 = l2 ?? "", x2 = C(g2), S2 = Array.from(f2).some((e3) => (e3.props.value ?? "") === "");
      return r.useEffect(() => {
        let e3 = v2.current;
        if (!e3) return;
        let t3 = Object.getOwnPropertyDescriptor(
          window.HTMLSelectElement.prototype,
          "value"
        ).set;
        if (x2 !== g2 && t3) {
          let n3 = new Event("change", { bubbles: true });
          t3.call(e3, g2), e3.dispatchEvent(n3);
        }
      }, [x2, g2]), (0, k.jsxs)(
        w.sG.select,
        {
          "aria-hidden": true,
          required: a2,
          tabIndex: -1,
          name: c2,
          autoComplete: d2,
          disabled: u2,
          form: p2,
          onChange: (e3) => i2(e3.target.value),
          ...t2,
          style: { ...j.Qg, ...t2.style },
          ref: m2,
          defaultValue: g2,
          children: [
            eT(l2) && !S2 ? (0, k.jsx)("option", { value: "" }) : null,
            Array.from(f2)
          ]
        },
        h2
      );
    }, "SelectBubbleInput")
  );
  function eP(e2) {
    return "function" == typeof e2;
  }
  function eT(e2) {
    return "" === e2 || void 0 === e2;
  }
  function ek(e2) {
    let t2 = (0, S.c)(e2), n2 = r.useRef(""), o2 = r.useRef(0), l2 = r.useCallback(
      (e3) => {
        t2(n2.current + e3);
      },
      [t2]
    ), i2 = r.useCallback(() => {
      n2.current = "", window.clearTimeout(o2.current);
    }, []);
    return r.useEffect(() => () => window.clearTimeout(o2.current), []), [n2, l2, i2];
  }
  function eI(e2, t2, n2) {
    let r2 = t2.length > 1 && Array.from(t2).every((e3) => e3 === t2[0]) ? t2[0] : t2, o2 = n2 ? e2.indexOf(n2) : -1, l2 = eE(e2, Math.max(o2, 0));
    1 === r2.length && (l2 = l2.filter((e3) => e3 !== n2));
    let i2 = l2.find(
      (e3) => e3.textValue.toLowerCase().startsWith(r2.toLowerCase())
    );
    return i2 !== n2 ? i2 : void 0;
  }
  function eE(e2, t2) {
    return e2.map((n2, r2) => e2[(t2 + r2) % e2.length]);
  }
  E(eP, "isFunction"), E(eT, "shouldShowPlaceholder"), E(ek, "useTypeaheadSearch"), E(eI, "findNextItem"), E(eE, "wrapArray");
}

__m(__module,__exports,__require);
});
A.regCss(79698, ".field{display:grid;gap:var(--space-2);min-width:0}\n.field label{font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body)}\n.shell{display:flex;min-height:var(--control-height-md);align-items:center;gap:var(--space-2);border:1px solid var(--border-strong);border-radius:var(--radius-control);padding:0 var(--space-3);background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.shell:hover:not(:focus-within){border-color:var(--foreground)}\n.shell:focus-within{border-color:var(--foreground)}\n.shell>svg{flex:0 0 auto;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}\n.shell:focus-within>svg,.shell[data-filled=true]>svg{color:var(--foreground)}\n.clearSlot,.shell button{display:grid;width:24px;height:24px;flex:0 0 auto;place-items:center}\n.shell button{border:0;border-radius:var(--radius-control);background:transparent;color:var(--text-muted);transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.shell button:hover{background:var(--surface-muted);color:var(--foreground)}\n@media (prefers-reduced-motion:reduce){.shell,.shell button,.shell>svg{transition:none}\n.input{width:100%;min-width:0;border:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:0}\n.input:focus-visible{outline:0}\n.input::placeholder{color:var(--text-muted)}\n.input::-webkit-search-cancel-button{display:none}", {});
A.reg(98344, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { g: () => w });
  var s = a(95155), r = a(12115), i = a(18310), n = a(92171), o = a(80642), l = a(25354), d = a(7770), c = a(64444), u = a.n(c);
  let p = [...d.T.ease.enter], h = [...d.T.ease.standard], m = `blur(${d.T.blur.soft}px)`;
  function y(e2) {
    let t2 = /* @__PURE__ */ new Map();
    return Array.from(e2).map((e3) => {
      let a2 = t2.get(e3) ?? 0;
      return t2.set(e3, a2 + 1), { char: e3, key: `${e3}-${a2}` };
    });
  }
  let g = (e2) => parseFloat(getComputedStyle(e2).width);
  function w({ children: e2, as: t2 = "span", className: a2, id: c2 }) {
    let x = (0, i.I)(), f = (0, r.useRef)(null), _ = (0, r.useRef)(null), k = (0, r.useRef)(0), v = (0, r.useRef)(null), j = (0, r.useMemo)(() => y(e2), [e2]), [b, S] = (0, r.useState)({ current: e2, previous: e2 });
    b.current !== e2 && S({ current: e2, previous: b.current });
    let N = (0, r.useMemo)(
      () => new Set(y(b.previous).map((e3) => e3.key)),
      [b.previous]
    ), A = 0;
    return (0, r.useLayoutEffect)(() => {
      let e3 = f.current, t3 = _.current;
      if (!e3 || !t3) return;
      let a3 = g(t3);
      Number.isFinite(a3) && (k.current && Math.abs(a3 - k.current) > 0.5 && !x ? v.current = (0, n.i)(e3, { width: a3 }, d.T.spring.morph) : (v.current?.stop(), e3.style.width = `${a3}px`), k.current = a3);
    }, [e2, x]), (0, r.useEffect)(() => {
      let e3 = f.current, t3 = _.current;
      if (!e3 || !t3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(() => {
        let a4 = g(t3);
        !Number.isFinite(a4) || 0.5 > Math.abs(a4 - k.current) || (v.current?.stop(), e3.style.width = `${a4}px`, k.current = a4);
      });
      return a3.observe(t3), () => a3.disconnect();
    }, []), (0, s.jsxs)(t2, {
      id: c2,
      className: a2,
      children: [
        (0, s.jsx)("span", { className: u().srOnly, children: e2 }),
        (0, s.jsx)("span", {
          ref: f,
          className: u().frame,
          "aria-hidden": "true",
          children: (0, s.jsx)("span", {
            ref: _,
            className: u().track,
            children: (0, s.jsx)(o.N, {
              mode: "popLayout",
              initial: false,
              children: j.map(({ char: e3, key: t3 }) => {
                let a3 = N.has(t3) ? 0 : A++;
                return (0, s.jsx)(
                  l.PY1.span,
                  {
                    layout: "position",
                    className: u().glyph,
                    initial: !x && {
                      opacity: 0,
                      scale: 0.8,
                      y: "0.14em",
                      filter: m
                    },
                    animate: {
                      opacity: 1,
                      scale: 1,
                      y: "0em",
                      filter: "blur(0px)"
                    },
                    exit: x ? { opacity: 0, transition: { duration: 0 } } : {
                      opacity: 0,
                      scale: 0.86,
                      y: "-0.1em",
                      filter: m,
                      transition: {
                        duration: d.T.duration.exit,
                        ease: h
                      }
                    },
                    transition: x ? { duration: 0 } : {
                      layout: d.T.spring.morph,
                      default: {
                        duration: d.T.duration.standard + 0.04,
                        ease: p,
                        delay: 0.05 + Math.min(a3, 8) * d.T.stagger.char * 2
                      }
                    },
                    children: " " === e3 ? "\xA0" : e3
                  },
                  t3
                );
              })
            })
          })
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.cssFor("team-members", [18416,64444,79698]);
A.item("team-members", {entry:24304, export:"TeamMembers", kind:"block", tier:"pro", unresolved:[]});
})();