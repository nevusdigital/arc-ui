/* roles-permissions (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(5736, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let o = {
    name: "lock",
    size: 24,
    node: [
      [
        "rect",
        {
          width: "18",
          height: "11",
          x: "3",
          y: "11",
          rx: "2",
          ry: "2",
          key: "1w4ew1"
        }
      ],
      ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
    ]
  };
  o.node;
  let i = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.regCss(24202, ".group{--avatar-size:36px;display:inline-flex;height:var(--avatar-size);align-items:center;padding-left:6px}\n.group.sm{--avatar-size:28px}\n.group.lg{--avatar-size:48px}\n.overflow.sm{width:28px;height:28px;font-size:10px}\n.overflow.lg{width:48px;height:48px;font-size:var(--text-sm)}\n.slot{position:relative;display:inline-flex;flex:0 0 auto;height:var(--avatar-size);align-items:center}\n@media (hover:hover) and (pointer:fine){.slot:hover{z-index:1}\n.slot:hover .avatar,.slot:hover .overflow{box-shadow:0 0 0 1px var(--border-strong)}\n.slot:hover .tip{opacity:1;transform:translate(-50%);transition-delay:60ms}\n.lift{position:relative;display:inline-flex;margin-left:-6px;border-radius:var(--radius-pill)}\n.avatar,.overflow{border:2px solid var(--surface);box-shadow:0 0 0 1px var(--border);transition:box-shadow var(--duration-fast) var(--ease-standard)}\n.overflow{position:relative;display:inline-grid;place-items:center;overflow:hidden;border-radius:var(--radius-pill);background:var(--surface-muted);color:var(--text-secondary);font-size:var(--text-xs);font-weight:500;font-variant-numeric:tabular-nums}\n.overflow.md{width:36px;height:36px}\n.count{display:inline-block}\n.tip{position:absolute;z-index:2;bottom:calc(100% + 8px);left:50%;padding:4px 8px;border-radius:var(--radius-pill);background:var(--foreground);color:var(--background);font-size:var(--text-xs);font-weight:500;line-height:var(--leading-body);white-space:nowrap;pointer-events:none;opacity:0;transform:translate(-50%,3px);transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n@media (prefers-reduced-motion:reduce){.tip{transform:translate(-50%);transition:none}", {"group":"group","sm":"sm","lg":"lg","overflow":"overflow","slot":"slot","avatar":"avatar","tip":"tip","lift":"lift","md":"md","count":"count"});
A.reg(30464, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { l: () => l });
  var r = n(12115), o = n(28819), i = n(24866), s = n(18310), a = n(92171);
  function l() {
    var e2;
    let t2 = (0, o.M)(() => ({ current: null, animations: [] })), n2 = (function() {
      let e3 = (0, s.I)(), { reducedMotion: t3 } = (0, r.useContext)(i.Q);
      return "never" !== t3 && ("always" === t3 || e3);
    })() ?? void 0, { skipAnimations: l2 } = (0, r.useContext)(i.Q), u = (0, r.useMemo)(
      () => (0, a.W)({ scope: t2, reduceMotion: n2, skipAnimations: l2 }),
      [t2, n2, l2]
    );
    return e2 = () => {
      t2.animations.forEach((e3) => e3.stop()), t2.animations.length = 0;
    }, (0, r.useEffect)(() => () => e2(), []), [t2, u];
  }
}

__m(__module,__exports,__require);
});
A.regCss(43032, ".roles-permissions_card__B8hth{container-type:inline-size;box-sizing:border-box;width:min(100%,960px);min-width:0;margin-inline:auto;overflow:clip;border:1px solid var(--border);border-radius:16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:13px;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}.roles-permissions_card__B8hth *,.roles-permissions_card__B8hth :after,.roles-permissions_card__B8hth :before{box-sizing:border-box}.roles-permissions_frame__ooZdc{--gutter:20px;--label:248px;--col:100px;--indent:24px;--row-hover:color-mix(in oklab,var(--surface-muted) 70%,var(--surface))}.roles-permissions_header__hD7Om{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:12px 24px;padding:16px var(--gutter)}.roles-permissions_heading__7bpsM{min-width:0}.roles-permissions_heading__7bpsM h2{margin:0;font-family:var(--font-body);font-size:var(--text-base);font-weight:500;letter-spacing:-.01em;line-height:1.4}.roles-permissions_summary__rIB4C{margin:2px 0 0;color:var(--text-secondary)}.roles-permissions_count__6KRLC{display:inline-flex;align-items:baseline;color:var(--foreground);font-weight:500;font-variant-numeric:tabular-nums;white-space:nowrap}.roles-permissions_count__6KRLC>span{color:inherit;font:inherit;letter-spacing:inherit;line-height:inherit}.roles-permissions_scroller__dqnUm{overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-padding-inline-start:var(--label);scrollbar-width:thin;border-top:1px solid var(--border)}.roles-permissions_grid__46WHj{position:relative;display:flex;width:max-content;min-width:100%;flex-direction:column}.roles-permissions_band__au8ya{position:absolute;top:4px;bottom:4px;left:0;z-index:0;border-radius:10px;background:color-mix(in oklab,var(--foreground) 3.5%,transparent);pointer-events:none}.roles-permissions_row__nPgoy{--row-bg:var(--surface);display:flex;min-height:40px;border-top:1px solid var(--border-subtle);background:var(--row-bg);transition:background-color var(--duration-instant) var(--ease-standard)}.roles-permissions_headRow__OY1Rc{min-height:56px;border-top:0}.roles-permissions_groupRow__kB9uL{border-top-color:var(--border)}@media (hover:hover) and (pointer:fine){.roles-permissions_permRow__pM8DG:hover{--row-bg:var(--row-hover)}}.roles-permissions_groupRow__kB9uL:has(:focus-visible),.roles-permissions_permRow__pM8DG:has(:focus-visible){--row-bg:var(--row-hover)}.roles-permissions_label__tahyR{position:sticky;left:0;z-index:2;display:flex;width:var(--label);min-width:var(--label);flex:1 0 auto;align-items:center;padding:8px 12px 8px var(--gutter);background:var(--row-bg);line-height:1.3;transition:background-color var(--duration-instant) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)}.roles-permissions_scroller__dqnUm[data-scrolled] .roles-permissions_label__tahyR{box-shadow:inset -1px 0 0 var(--border)}.roles-permissions_corner__Xouvg{align-items:flex-end;padding-bottom:12px;color:var(--text-muted);font-size:var(--text-xs)}.roles-permissions_permLabel__fvlYb{padding-left:calc(var(--gutter) + var(--indent))}.roles-permissions_groupBody__KSEhq{overflow:clip}.roles-permissions_slot__kaQLV{display:flex;flex:none;justify-content:flex-end;overflow:clip}.roles-permissions_cell__a0RxO{position:relative;z-index:1;display:grid;width:var(--col);flex:none;place-items:center}.roles-permissions_disclosure__0b83f{display:inline-flex;min-width:0;max-width:calc(100% + 6px);min-height:28px;align-items:center;gap:8px;margin-left:-6px;padding:0 8px 0 6px;border:0;border-radius:8px;background:transparent;color:var(--foreground);font:inherit;font-weight:500;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-instant) var(--ease-standard)}.roles-permissions_disclosureIcon__rTbsT{display:inline-flex;flex:none;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}.roles-permissions_groupName__tJBx8{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.roles-permissions_groupCount__0e_Ai{color:var(--text-muted);font-weight:400;font-variant-numeric:tabular-nums}@media (hover:hover) and (pointer:fine){.roles-permissions_disclosure__0b83f:hover{background:var(--surface-muted)}}@media (hover:hover) and (pointer:fine){.roles-permissions_disclosure__0b83f:hover .roles-permissions_disclosureIcon__rTbsT{color:var(--foreground)}}.roles-permissions_toggle__FxTpt{--box-border:color-mix(in oklab,var(--border-strong) 78%,var(--foreground));--box-bg:var(--surface);--box-glyph:var(--control-glyph);--box-sheen:transparent;position:relative;display:grid;width:40px;height:32px;place-items:center;padding:0;border:0;border-radius:8px;background:transparent;color:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation}.roles-permissions_box__RtoZL{position:relative;display:block;width:16px;height:16px;flex:none;border:1px solid var(--box-border);border-radius:5px;background:var(--box-bg);box-shadow:inset 0 1px 0 var(--box-sheen);color:var(--box-glyph);transition:background-color var(--duration-fast) var(--ease-standard) var(--delay,0s),border-color var(--duration-fast) var(--ease-standard) var(--delay,0s),box-shadow var(--duration-fast) var(--ease-standard) var(--delay,0s),color var(--duration-fast) var(--ease-standard) var(--delay,0s),scale var(--duration-spring) var(--ease-spring)}.roles-permissions_mark__bmFGS{position:absolute;inset:-1px;width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}.roles-permissions_toggle__FxTpt[data-state=on]{--box-border:var(--control-on);--box-bg:var(--control-on);--box-sheen:color-mix(in oklab,var(--control-glyph) 14%,transparent)}.roles-permissions_toggle__FxTpt[data-state=mixed]{--box-border:var(--control-on);--box-bg:color-mix(in oklab,var(--control-on) 12%,var(--surface));--box-glyph:var(--control-on)}.roles-permissions_toggle__FxTpt[data-locked]{--box-bg:color-mix(in oklab,var(--control-on) 40%,var(--surface));--box-border:var(--box-bg);--box-glyph:var(--control-glyph);--box-sheen:transparent;cursor:default}.roles-permissions_toggle__FxTpt:not([data-locked]):active .roles-permissions_box__RtoZL{scale:.88;transition-duration:var(--duration-fast),var(--duration-fast),var(--duration-fast),var(--duration-fast),var(--duration-instant);transition-delay:0s}@media (hover:hover) and (pointer:fine){.roles-permissions_toggle__FxTpt:not([data-locked])[data-state=off]:hover{--box-border:var(--text-muted);--box-bg:color-mix(in oklab,var(--foreground) 3%,var(--surface))}}@media (hover:hover) and (pointer:fine){.roles-permissions_toggle__FxTpt:not([data-locked])[data-state=on]:hover{--box-bg:color-mix(in oklab,var(--control-on) 88%,var(--foreground));--box-border:var(--box-bg)}}@media (hover:hover) and (pointer:fine){.roles-permissions_toggle__FxTpt:not([data-locked])[data-state=mixed]:hover{--box-bg:color-mix(in oklab,var(--control-on) 20%,var(--surface))}}.roles-permissions_dirty__U9a39{position:absolute;top:calc(50% - 2.5px);left:calc(50% + 13px);width:5px;height:5px;border-radius:var(--radius-pill);background:var(--warning);pointer-events:none}.roles-permissions_roleTrigger__ctNt4{position:relative;display:flex;width:calc(100% - 6px);height:44px;flex-direction:column;align-items:center;justify-content:center;gap:1px;padding:0 4px;border:0;border-radius:10px;background:transparent;color:var(--foreground);font:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-instant) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.roles-permissions_roleTrigger__ctNt4:hover{background:var(--surface-muted)}}.roles-permissions_roleTrigger__ctNt4[data-state=open]{background:var(--surface-muted)}.roles-permissions_roleTrigger__ctNt4:active{background:color-mix(in oklab,var(--surface-muted),var(--border) 55%)}.roles-permissions_roleName__iHiW4{position:relative;display:inline-flex;min-width:0;max-width:calc(100% - 36px);align-items:center;font-weight:500}.roles-permissions_roleName__iHiW4 svg{position:absolute;top:calc(50% - 6px);color:var(--text-muted)}.roles-permissions_roleName__iHiW4 .roles-permissions_lock__SLvCJ{right:calc(100% + 4px)}.roles-permissions_roleName__iHiW4 .roles-permissions_chev__ZPQ4x{left:calc(100% + 4px)}.roles-permissions_roleText__P4K0H{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.roles-permissions_chev__ZPQ4x{transition:rotate var(--duration-spring) var(--ease-spring)}.roles-permissions_roleTrigger__ctNt4[data-state=open] .roles-permissions_chev__ZPQ4x{rotate:180deg}.roles-permissions_rolePeople__U8zdk{position:relative;color:var(--text-muted);font-size:var(--text-xs);white-space:nowrap}.roles-permissions_roleDot__mP6U1{position:absolute;top:calc(50% - 2.5px);left:-10px;width:5px;height:5px;border-radius:var(--radius-pill);background:var(--warning)}.roles-permissions_menu__1jb4e{--menu-y:-5px;position:relative;z-index:60;min-width:13rem;padding:5px;border:1px solid var(--border);border-radius:14px;background:var(--surface-raised);box-shadow:var(--shadow-floating);color:var(--foreground);font-family:var(--font-body);font-size:13px;letter-spacing:var(--tracking-body);line-height:var(--leading-body);transform-origin:var(--radix-dropdown-menu-content-transform-origin);transition:opacity var(--duration-fast) var(--ease-enter),transform var(--duration-spring) var(--ease-spring)}.roles-permissions_menu__1jb4e[data-side=top]{--menu-y:5px}.roles-permissions_menu__1jb4e[data-state=closed]{opacity:0;transform:translateY(calc(var(--menu-y) * .5)) scale(.985);transition:opacity .13s var(--ease-standard),transform .13s var(--ease-standard);animation:roles-permissions_menu-exit__OqYp_ .13s linear both;pointer-events:none}@keyframes roles-permissions_menu-exit__OqYp_{to{--menu-exit:1}}.roles-permissions_menuLabel__j5b9d{display:grid;gap:1px;padding:7px 11px 8px}.roles-permissions_menuLabel__j5b9d span{font-weight:500}.roles-permissions_menuLabel__j5b9d small{color:var(--text-muted);font-size:var(--text-xs)}.roles-permissions_menuItem__snMQL{position:relative;display:flex;min-height:32px;align-items:center;gap:10px;padding:0 10px;border-radius:9px;cursor:pointer;outline:none;user-select:none}.roles-permissions_menuItem__snMQL[data-disabled]{opacity:.45;cursor:default}.roles-permissions_menuItem__snMQL[data-tone=danger]{color:var(--danger)}.roles-permissions_menuHighlight__j2T1C{position:absolute;inset:0;border-radius:inherit;background:var(--surface-muted)}.roles-permissions_menuItem__snMQL[data-tone=danger] .roles-permissions_menuHighlight__j2T1C{background:color-mix(in oklab,var(--danger) 8%,var(--surface))}.roles-permissions_menuIcon__WLYUW,.roles-permissions_menuText__RCiJK{position:relative}.roles-permissions_menuIcon__WLYUW{display:inline-flex;width:16px;color:var(--text-secondary)}.roles-permissions_menuItem__snMQL[data-tone=danger] .roles-permissions_menuIcon__WLYUW{color:var(--danger)}.roles-permissions_menuSeparator__z73R7{height:1px;margin:4px -5px;background:var(--border-subtle)}.roles-permissions_foot__ZKYwm{display:flex;flex-wrap:wrap;align-items:center;gap:6px 20px;padding:12px var(--gutter);border-top:1px solid var(--border);color:var(--text-muted);font-size:var(--text-xs)}.roles-permissions_note__UG4q8{display:inline-flex;align-items:center;gap:6px}.roles-permissions_legendDot__6y2Qy{width:5px;height:5px;flex:none;border-radius:var(--radius-pill);background:var(--warning)}.roles-permissions_barSpace__xB7ZB{height:0;transition:height var(--duration-standard) var(--ease-standard)}.roles-permissions_barSpace__xB7ZB[data-open]{height:76px}.roles-permissions_barAnchor__s7pKm{position:sticky;z-index:5;bottom:0;height:0}.roles-permissions_bar__mTqfL{position:absolute;right:0;bottom:16px;left:0;display:flex;width:min(600px,calc(100% - 32px));min-height:52px;align-items:center;justify-content:space-between;gap:12px;margin-inline:auto;padding:8px 8px 8px 16px;border:1px solid var(--border);border-radius:14px;background:var(--surface-raised);box-shadow:var(--shadow-floating)}.roles-permissions_barText__GBWP5{display:grid;min-width:0;gap:1px}.roles-permissions_swap__s2SnF{position:relative;display:block;min-width:0}.roles-permissions_swapText__d6mS5{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.roles-permissions_barLine__iZgDp{display:inline-flex;align-items:baseline;gap:.3em;font-weight:500;white-space:nowrap}.roles-permissions_savedIcon__pmiX0{align-self:center;color:var(--success)}.roles-permissions_barSub__nmjFi{color:var(--text-muted);font-size:var(--text-xs)}.roles-permissions_barActions__b763g{display:flex;flex:none;align-items:center;gap:4px}.roles-permissions_srOnly__XP6fl{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@media (prefers-reduced-motion:reduce){.roles-permissions_barSpace__xB7ZB,.roles-permissions_box__RtoZL,.roles-permissions_chev__ZPQ4x,.roles-permissions_disclosureIcon__rTbsT,.roles-permissions_disclosure__0b83f,.roles-permissions_label__tahyR,.roles-permissions_roleTrigger__ctNt4,.roles-permissions_row__nPgoy{transition:none}}@media (prefers-reduced-motion:reduce){.roles-permissions_menu__1jb4e,.roles-permissions_menu__1jb4e[data-state=closed]{transform:none;transition:opacity var(--duration-instant) linear}}[data-layout=app] .roles-permissions_card__B8hth{padding:clamp(16px,3vw,32px)}", {"card":"roles-permissions_card__B8hth","frame":"roles-permissions_frame__ooZdc","header":"roles-permissions_header__hD7Om","heading":"roles-permissions_heading__7bpsM","summary":"roles-permissions_summary__rIB4C","count":"roles-permissions_count__6KRLC","scroller":"roles-permissions_scroller__dqnUm","grid":"roles-permissions_grid__46WHj","band":"roles-permissions_band__au8ya","row":"roles-permissions_row__nPgoy","headRow":"roles-permissions_headRow__OY1Rc","groupRow":"roles-permissions_groupRow__kB9uL","permRow":"roles-permissions_permRow__pM8DG","label":"roles-permissions_label__tahyR","corner":"roles-permissions_corner__Xouvg","permLabel":"roles-permissions_permLabel__fvlYb","groupBody":"roles-permissions_groupBody__KSEhq","slot":"roles-permissions_slot__kaQLV","cell":"roles-permissions_cell__a0RxO","disclosure":"roles-permissions_disclosure__0b83f","disclosureIcon":"roles-permissions_disclosureIcon__rTbsT","groupName":"roles-permissions_groupName__tJBx8","groupCount":"roles-permissions_groupCount__0e_Ai","toggle":"roles-permissions_toggle__FxTpt","box":"roles-permissions_box__RtoZL","mark":"roles-permissions_mark__bmFGS","dirty":"roles-permissions_dirty__U9a39","roleTrigger":"roles-permissions_roleTrigger__ctNt4","roleName":"roles-permissions_roleName__iHiW4","lock":"roles-permissions_lock__SLvCJ","chev":"roles-permissions_chev__ZPQ4x","roleText":"roles-permissions_roleText__P4K0H","rolePeople":"roles-permissions_rolePeople__U8zdk","roleDot":"roles-permissions_roleDot__mP6U1","menu":"roles-permissions_menu__1jb4e","menu-exit":"roles-permissions_menu-exit__OqYp_","menuLabel":"roles-permissions_menuLabel__j5b9d","menuItem":"roles-permissions_menuItem__snMQL","menuHighlight":"roles-permissions_menuHighlight__j2T1C","menuIcon":"roles-permissions_menuIcon__WLYUW","menuText":"roles-permissions_menuText__RCiJK","menuSeparator":"roles-permissions_menuSeparator__z73R7","foot":"roles-permissions_foot__ZKYwm","note":"roles-permissions_note__UG4q8","legendDot":"roles-permissions_legendDot__6y2Qy","barSpace":"roles-permissions_barSpace__xB7ZB","barAnchor":"roles-permissions_barAnchor__s7pKm","bar":"roles-permissions_bar__mTqfL","barText":"roles-permissions_barText__GBWP5","swap":"roles-permissions_swap__s2SnF","swapText":"roles-permissions_swapText__d6mS5","barLine":"roles-permissions_barLine__iZgDp","savedIcon":"roles-permissions_savedIcon__pmiX0","barSub":"roles-permissions_barSub__nmjFi","barActions":"roles-permissions_barActions__b763g","srOnly":"roles-permissions_srOnly__XP6fl","unsavedWord":"roles-permissions_unsavedWord__LRQI0"});
A.reg(51712, function(__module,__exports,__require){
"use strict";
function __m(e, s, a) {
  "use strict";
  a.r(s), a.d(s, { RolesPermissions: () => ee, default: () => es });
  var i = a(95155), r = a(12115), n = a(57793), t = a(79196), o = a(25354), l = a(18310), d = a(80642), c = a(30464), m = a(57700), u = a(28245), p = a(92171), h = a(99314), _ = a(92298), g = a(25879), f = a(5736), x = a(12363), v = a(64577), y = a(65024), b = a(71914), j = a(51288), w = a(98344), N = a(7770), $ = a(43032), k = a.n($);
  let { spring: S, duration: T, ease: L, blur: A, stagger: R } = N.T, I = [...L.enter], M = [...L.standard], P = 0.75 * R.line, C = [
    {
      id: "projects",
      name: "Projects",
      permissions: [
        { id: "view-projects", label: "View projects" },
        { id: "create-projects", label: "Create projects" },
        { id: "edit-settings", label: "Edit project settings" },
        { id: "delete-projects", label: "Delete projects" }
      ]
    },
    {
      id: "members",
      name: "Members",
      permissions: [
        { id: "invite", label: "Invite members" },
        { id: "change-roles", label: "Change member roles" },
        { id: "remove-members", label: "Remove members" }
      ]
    },
    {
      id: "billing",
      name: "Billing",
      permissions: [
        { id: "invoices", label: "View invoices" },
        { id: "payment", label: "Manage payment methods" },
        { id: "plan", label: "Change plan" }
      ]
    },
    {
      id: "security",
      name: "Security",
      permissions: [
        { id: "sso", label: "Configure single sign-on" },
        { id: "audit-log", label: "View audit log" },
        { id: "api-keys", label: "Manage API keys" }
      ]
    }
  ], E = C.flatMap((e2) => e2.permissions), W = [
    {
      id: "owner",
      name: "Owner",
      people: 1,
      who: "Emma Collins",
      locked: true
    },
    {
      id: "admin",
      name: "Admin",
      people: 3,
      who: "Jasmine Brooks, Ava Mitchell and 1 other"
    },
    {
      id: "editor",
      name: "Editor",
      people: 8,
      who: "Marcus Johnson and 7 others"
    },
    {
      id: "viewer",
      name: "Viewer",
      people: 14,
      who: "14 people, including 9 guests"
    },
    {
      id: "billing",
      name: "Billing",
      people: 2,
      who: "Sofia Ramirez and 1 other"
    }
  ], D = {
    owner: E.map((e2) => e2.id),
    admin: [
      "view-projects",
      "create-projects",
      "edit-settings",
      "delete-projects",
      "invite",
      "change-roles",
      "remove-members",
      "invoices",
      "audit-log",
      "api-keys"
    ],
    editor: ["view-projects", "create-projects", "edit-settings", "invite"],
    viewer: ["view-projects"],
    billing: ["invoices", "payment", "plan"]
  }, z = {
    roles: W,
    grants: Object.fromEntries(
      W.map((e2) => [
        e2.id,
        Object.fromEntries(E.map((s2) => [s2.id, D[e2.id].includes(s2.id)]))
      ])
    )
  }, O = Object.fromEntries(C.map((e2) => [e2.id, true])), Y = [
    { name: "Emma Collins", src: "media/people/emma-collins.svg" },
    { name: "Jasmine Brooks", src: "media/people/jasmine-brooks.svg" },
    { name: "Ava Mitchell", src: "media/people/ava-mitchell.svg" },
    { name: "Marcus Johnson", src: "media/people/marcus-johnson.svg" },
    { name: "Sofia Ramirez", src: "media/people/sofia-ramirez.svg" },
    ...Array.from({ length: 23 }, (e2, s2) => ({
      name: `Workspace member ${s2 + 6}`
    }))
  ], B = (e2, s2) => `${e2} ${s2}${1 === e2 ? "" : "s"}`, q = (e2, s2) => Object.fromEntries(Object.entries(e2).filter(([e3]) => e3 !== s2)), F = (e2, s2) => `${e2}:${s2}`, U = (e2, s2) => Array.from(e2?.querySelectorAll(s2) ?? []).find(
    (e3) => !e3.closest("[inert]")
  ), H = (e2) => e2 instanceof Element ? e2.closest("[data-col]")?.dataset.col ?? null : null;
  function K(e2, s2) {
    let a2 = {};
    return E.forEach(
      (i2, r2) => s2.forEach((s3) => {
        let n2 = F(s3, i2.id);
        e2.has(n2) && (a2[n2] = Math.min(0.03 * r2, 0.36));
      })
    ), a2;
  }
  function Z({ children: e2, className: s2, reduce: a2, ref: r2 }) {
    let n2 = (0, t.tF)();
    return (0, i.jsx)(o.PY1.span, {
      ref: r2,
      className: s2,
      "aria-hidden": !n2 || void 0,
      initial: a2 ? { opacity: 0 } : { opacity: 0, y: "0.35em", filter: `blur(${A.soft}px)` },
      animate: { opacity: 1, y: "0em", filter: "blur(0px)" },
      exit: a2 ? { opacity: 0, transition: { duration: 0 } } : {
        opacity: 0,
        y: "-0.3em",
        filter: `blur(${A.subtle}px)`,
        transition: { duration: T.fast, ease: M }
      },
      transition: a2 ? { duration: 0 } : { duration: T.standard, ease: I },
      children: e2
    });
  }
  function J({ id: e2, children: s2, className: a2 }) {
    let r2 = !!(0, l.I)();
    return (0, i.jsx)("span", {
      className: [k().swap, a2].filter(Boolean).join(" "),
      children: (0, i.jsx)(d.N, {
        mode: "popLayout",
        initial: false,
        children: (0, i.jsx)(
          Z,
          { className: k().swapText, reduce: r2, children: s2 },
          e2
        )
      })
    });
  }
  function Q({ kind: e2, col: s2, head: a2, onEntered: r2, children: n2 }) {
    let d2 = !!(0, l.I)(), c2 = (0, t.tF)();
    return (0, i.jsx)(o.PY1.div, {
      role: e2,
      className: k().slot,
      "data-col": s2,
      "data-colhead": a2 ? s2 : void 0,
      inert: !c2,
      initial: { width: 0, opacity: 0 },
      animate: { width: "auto", opacity: 1 },
      exit: { width: 0, opacity: 0 },
      transition: d2 ? { duration: 0 } : { width: S.smooth, opacity: { duration: T.standard, ease: I } },
      onAnimationComplete: r2,
      children: (0, i.jsx)("div", { className: k().cell, children: n2 })
    });
  }
  function V({ id: e2, children: s2 }) {
    let a2 = !!(0, l.I)(), r2 = (0, t.tF)();
    return (0, i.jsx)(o.PY1.div, {
      id: e2,
      className: k().groupBody,
      inert: !r2,
      initial: { height: 0, opacity: 0 },
      animate: { height: "auto", opacity: 1 },
      exit: { height: 0, opacity: 0 },
      transition: a2 ? { duration: 0 } : { height: S.smooth, opacity: { duration: T.standard, ease: M } },
      children: s2
    });
  }
  function G({
    kind: e2,
    state: s2,
    label: a2,
    locked: r2,
    dirty: n2,
    delay: t2,
    onToggle: m2,
    nav: u2
  }) {
    let p2 = !!(0, l.I)(), [h2, _2] = (0, c.l)(), g2 = p2 ? 0 : t2, f2 = (e3) => ({ pathLength: +!!e3, opacity: +!!e3 }), x2 = p2 ? { duration: 0 } : {
      pathLength: { duration: T.fast, ease: I, delay: g2 },
      opacity: { duration: T.instant, delay: g2 }
    };
    return (0, i.jsxs)("button", {
      type: "button",
      role: e2,
      "aria-checked": "mixed" === s2 ? "mixed" : "on" === s2,
      "aria-label": a2,
      "aria-disabled": r2 || void 0,
      className: k().toggle,
      "data-state": s2,
      "data-locked": r2 || void 0,
      style: { "--delay": `${g2}s` },
      onClick: function() {
        r2 && !p2 && h2.current && _2(
          h2.current,
          { x: [0, 3, -2, 1, 0] },
          { duration: 0.34, ease: "easeOut" }
        ), m2();
      },
      ...u2,
      children: [
        (0, i.jsx)("span", {
          ref: h2,
          className: k().box,
          children: (0, i.jsxs)("svg", {
            className: k().mark,
            viewBox: "0 0 16 16",
            "aria-hidden": "true",
            children: [
              (0, i.jsx)(o.PY1.path, {
                d: "M4.25 8.4 6.9 10.9 11.75 5.4",
                initial: false,
                animate: f2("on" === s2),
                transition: x2
              }),
              (0, i.jsx)(o.PY1.path, {
                d: "M5 8h6",
                initial: false,
                animate: f2("mixed" === s2),
                transition: x2
              })
            ]
          })
        }),
        (0, i.jsx)(d.N, {
          initial: false,
          children: n2 && (0, i.jsx)(
            o.PY1.span,
            {
              className: k().dirty,
              "aria-hidden": "true",
              initial: { opacity: 0, scale: 0.3 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.3 },
              transition: p2 ? { duration: 0 } : { ...S.snappy, delay: g2 }
            },
            "dirty"
          )
        })
      ]
    });
  }
  function X({
    role: e2,
    isNew: s2,
    dirty: a2,
    canRevert: t2,
    nav: c2,
    onDuplicate: u2,
    onRevert: p2,
    onDelete: v2,
    onCloseFocus: y2
  }) {
    let b2 = !!(0, l.I)(), j2 = (0, r.useId)(), [w2, N2] = (0, r.useState)(null), $2 = [
      {
        key: "duplicate",
        label: "Duplicate role",
        icon: (0, i.jsx)(h.A, { size: 16, strokeWidth: 1.75 }),
        onSelect: u2,
        disabled: false,
        danger: false
      },
      ...e2.locked ? [] : [
        {
          key: "revert",
          label: "Revert changes",
          icon: (0, i.jsx)(_.A, { size: 16, strokeWidth: 1.75 }),
          onSelect: p2,
          disabled: !t2,
          danger: false
        }
      ],
      ...e2.custom ? [
        {
          key: "delete",
          label: "Delete role",
          icon: (0, i.jsx)(g.A, { size: 16, strokeWidth: 1.75 }),
          onSelect: v2,
          disabled: false,
          danger: true
        }
      ] : []
    ], T2 = s2 ? "New role" : 0 === e2.people ? "No members" : `${e2.people} ${1 === e2.people ? "person" : "people"}`;
    return (0, i.jsxs)(n.bL, {
      onOpenChange: (e3) => {
        e3 && N2(null);
      },
      children: [
        (0, i.jsxs)(n.l9, {
          className: k().roleTrigger,
          ...c2,
          children: [
            (0, i.jsxs)("span", {
              className: k().roleName,
              children: [
                e2.locked && (0, i.jsx)(f.A, {
                  className: k().lock,
                  size: 12,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                (0, i.jsx)("span", {
                  className: k().roleText,
                  children: e2.name
                }),
                (0, i.jsx)(x.A, {
                  className: k().chev,
                  size: 12,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              ]
            }),
            (0, i.jsxs)("span", {
              className: k().rolePeople,
              children: [
                (0, i.jsx)(d.N, {
                  initial: false,
                  children: a2 && (0, i.jsx)(
                    o.PY1.i,
                    {
                      className: k().roleDot,
                      "aria-hidden": "true",
                      initial: { opacity: 0, scale: 0.3 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0, scale: 0.3 },
                      transition: b2 ? { duration: 0 } : S.snappy
                    },
                    "dot"
                  )
                }),
                T2
              ]
            }),
            e2.locked && (0, i.jsx)("span", {
              className: k().srOnly,
              children: ", permissions are fixed"
            }),
            a2 && (0, i.jsx)("span", {
              className: k().srOnly,
              children: ", unsaved changes"
            })
          ]
        }),
        (0, i.jsx)(n.ZL, {
          children: (0, i.jsxs)(n.UC, {
            className: k().menu,
            align: "center",
            sideOffset: 4,
            collisionPadding: 12,
            loop: true,
            onCloseAutoFocus: y2,
            onFocus: (e3) => {
              let s3 = e3.target instanceof HTMLElement ? e3.target.closest("[data-item]") : null;
              N2(s3?.dataset.item ?? null);
            },
            children: [
              (0, i.jsxs)(n.JU, {
                className: k().menuLabel,
                children: [
                  (0, i.jsx)("span", { children: e2.name }),
                  (0, i.jsx)("small", {
                    children: e2.who ?? (s2 ? "Not saved yet" : "No members yet")
                  })
                ]
              }),
              (0, i.jsx)(m.o, {
                id: j2,
                children: $2.map(
                  (e3) => (0, i.jsxs)(
                    r.Fragment,
                    {
                      children: [
                        e3.danger && (0, i.jsx)(n.wv, { className: k().menuSeparator }),
                        (0, i.jsxs)(n.q7, {
                          className: k().menuItem,
                          "data-item": e3.key,
                          "data-tone": e3.danger ? "danger" : void 0,
                          disabled: e3.disabled,
                          onSelect: e3.onSelect,
                          children: [
                            w2 === e3.key && (0, i.jsx)(o.PY1.span, {
                              layoutId: "highlight",
                              className: k().menuHighlight,
                              "aria-hidden": "true",
                              transition: b2 ? { duration: 0 } : S.snappy
                            }),
                            (0, i.jsx)("span", {
                              className: k().menuIcon,
                              "aria-hidden": "true",
                              children: e3.icon
                            }),
                            (0, i.jsx)("span", {
                              className: k().menuText,
                              children: e3.label
                            })
                          ]
                        })
                      ]
                    },
                    e3.key
                  )
                )
              })
            ]
          })
        })
      ]
    });
  }
  function ee({ workspace: e2 = "Kestrel Analytics" } = {}) {
    let s2, a2 = (0, r.useId)(), n2 = !!(0, l.I)(), [t2, c2] = (0, r.useState)(z), [m2, h2] = (0, r.useState)(z.roles), [_2, g2] = (0, r.useState)(z.grants), [N2, $2] = (0, r.useState)({}), [L2, A2] = (0, r.useState)({}), [R2, W2] = (0, r.useState)(O), [D2, Z2] = (0, r.useState)("idle"), [es2, ea] = (0, r.useState)(""), [ei, er] = (0, r.useState)(`head:${z.roles[0].id}`), en = (0, r.useRef)(null), et = (0, r.useRef)(null), eo = (0, r.useRef)(null), el = (0, r.useRef)(0), ed = (0, r.useRef)(null), ec = (0, r.useRef)(null), em = (0, r.useRef)(null), eu = (0, r.useRef)({ phase: 0, flash: 0 }), ep = (0, u.d)(0), eh = (0, u.d)(0), e_ = (0, u.d)(0), eg = (function(e3, s3, a3, i2) {
      let r2 = new Set(e3.roles.map((e4) => e4.id)), n3 = new Set(s3.map((e4) => e4.id)), t3 = /* @__PURE__ */ new Set(), o2 = [];
      for (let n4 of s3) {
        let s4 = e3.grants[n4.id] ?? i2[n4.id] ?? {}, l3 = !r2.has(n4.id);
        for (let e4 of E)
          !!a3[n4.id]?.[e4.id] != !!s4[e4.id] && (t3.add(F(n4.id, e4.id)), l3 = true);
        l3 && o2.push(n4);
      }
      let l2 = s3.filter((e4) => !r2.has(e4.id)).length, d2 = e3.roles.filter((e4) => !n3.has(e4.id));
      return {
        cells: t3,
        touched: o2,
        removed: d2,
        savedIds: r2,
        count: t3.size + l2 + d2.length
      };
    })(t2, m2, _2, N2), ef = eg.count > 0 || "idle" !== D2, ex = "saved" === D2 && 0 === eg.count;
    function ev(e3, s3) {
      window.clearTimeout(eu.current.phase), eu.current.phase = window.setTimeout(e3, s3);
    }
    function ey(e3) {
      if (em.current === e3) return;
      let s3 = null !== em.current && !n2, a3 = e3 ? U(en.current, `[data-colhead="${e3}"]`) : void 0;
      if (!a3) {
        em.current = null, (0, p.i)(e_, 0, { duration: n2 ? 0 : T.fast });
        return;
      }
      em.current = e3, s3 ? ((0, p.i)(ep, a3.offsetLeft, S.morph), (0, p.i)(eh, a3.offsetWidth, S.morph)) : (ep.jump(a3.offsetLeft), eh.jump(a3.offsetWidth)), (0, p.i)(e_, 1, { duration: n2 ? 0 : T.fast });
    }
    function eb(e3) {
      let s3;
      if (![
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "Home",
        "End"
      ].includes(e3.key) || e3.altKey || e3.metaKey)
        return;
      let a3 = Array.from(en.current?.querySelectorAll("[data-nav]") ?? []).filter((e4) => !e4.closest("[inert]")).map((e4) => ({
        element: e4,
        r: Number(e4.dataset.r),
        c: Number(e4.dataset.c)
      })), i2 = Number(e3.currentTarget.dataset.r), r2 = Number(e3.currentTarget.dataset.c), n3 = (e4) => a3.filter((s4) => s4.r === e4).sort((e5, s4) => e5.c - s4.c);
      if ("ArrowLeft" === e3.key)
        s3 = n3(i2).filter((e4) => e4.c < r2).at(-1);
      else if ("ArrowRight" === e3.key) s3 = n3(i2).find((e4) => e4.c > r2);
      else if ("Home" === e3.key) s3 = e3.ctrlKey ? a3[0] : n3(i2)[0];
      else if ("End" === e3.key) s3 = e3.ctrlKey ? a3.at(-1) : n3(i2).at(-1);
      else {
        let t3 = [...new Set(a3.map((e4) => e4.r))].sort((e4, s4) => e4 - s4), o2 = "ArrowUp" === e3.key ? t3.filter((e4) => e4 < i2).at(-1) : t3.find((e4) => e4 > i2);
        void 0 !== o2 && (s3 = n3(o2).sort((e4, s4) => Math.abs(e4.c - r2) - Math.abs(s4.c - r2))[0]);
      }
      s3 && (e3.preventDefault(), s3.element.focus());
    }
    function ej(e3) {
      let s3 = ed.current;
      s3 && (ed.current = null, e3.preventDefault(), U(en.current, `[data-key="${s3}"]`)?.focus({ preventScroll: true }));
    }
    (0, r.useEffect)(() => {
      let e3 = eu.current;
      return () => {
        window.clearTimeout(e3.phase), window.clearTimeout(e3.flash);
      };
    }, []), (0, r.useEffect)(() => {
      !ef && eo.current?.contains(document.activeElement) && en.current?.querySelector('[data-nav][tabindex="0"]')?.focus({ preventScroll: true });
    }, [ef]);
    let ew = /* @__PURE__ */ new Set(), eN = {}, e$ = 0;
    m2.forEach((e3) => ew.add(`head:${e3.id}`)), C.forEach((e3) => {
      eN[e3.id] = ++e$, ew.add(`g:${e3.id}`), m2.forEach((s3) => ew.add(`g:${e3.id}:${s3.id}`)), R2[e3.id] && e3.permissions.forEach((e4) => {
        eN[e4.id] = ++e$, m2.forEach((s3) => ew.add(`p:${e4.id}:${s3.id}`));
      });
    });
    let ek = ew.has(ei) ? ei : `head:${m2[0].id}`, eS = (e3, s3, a3) => ({
      "data-nav": "",
      "data-key": e3,
      "data-r": s3,
      "data-c": a3,
      tabIndex: e3 === ek ? 0 : -1,
      onKeyDown: eb
    }), eT = [...eg.touched, ...eg.removed].reduce((e3, s3) => e3 + s3.people, 0), eL = `${(s2 = [...eg.touched.map((e3) => e3.name), ...eg.removed.map((e3) => e3.name)]).length <= 2 ? s2.join(" and ") : 3 === s2.length ? `${s2[0]}, ${s2[1]} and ${s2[2]}` : `${s2[0]}, ${s2[1]} and ${s2.length - 2} more`} \xB7 ${eT ? `affects ${eT} ${1 === eT ? "person" : "people"}` : "no members yet"}`, eA = ex ? "Saved" : "saving" === D2 ? "Saving" : eL;
    return (0, i.jsx)("section", {
      className: k().card,
      "aria-labelledby": `${a2}-title`,
      children: (0, i.jsxs)("div", {
        className: k().frame,
        children: [
          (0, i.jsxs)("header", {
            className: k().header,
            children: [
              (0, i.jsxs)("div", {
                className: k().heading,
                children: [
                  (0, i.jsx)("h2", {
                    id: `${a2}-title`,
                    children: "Roles and permissions"
                  }),
                  (0, i.jsxs)("p", {
                    className: k().summary,
                    children: [
                      e2,
                      " \xB7 ",
                      (0, i.jsx)("span", {
                        className: k().count,
                        children: "28"
                      }),
                      " members across ",
                      (0, i.jsx)("span", {
                        className: k().count,
                        children: (0, i.jsx)(y.q, { value: m2.length })
                      }),
                      " roles"
                    ]
                  })
                ]
              }),
              (0, i.jsx)(b.Z, {
                members: Y,
                max: 4,
                size: "sm",
                label: "Workspace members"
              })
            ]
          }),
          (0, i.jsx)("div", {
            ref: et,
            className: k().scroller,
            onScroll: (e3) => e3.currentTarget.toggleAttribute(
              "data-scrolled",
              e3.currentTarget.scrollLeft > 1
            ),
            children: (0, i.jsxs)("div", {
              ref: en,
              role: "grid",
              "aria-labelledby": `${a2}-title`,
              className: k().grid,
              onPointerMove: (e3) => {
                "mouse" === e3.pointerType && e3.currentTarget.contains(e3.target) && ey(H(e3.target));
              },
              onPointerLeave: () => ey(null),
              onFocus: (e3) => {
                e3.target instanceof HTMLElement && e3.currentTarget.contains(e3.target) && (e3.target.dataset.key && er(e3.target.dataset.key), e3.target.matches(":focus-visible") && ey(H(e3.target)));
              },
              onBlur: (e3) => {
                e3.currentTarget.contains(e3.relatedTarget) || e3.currentTarget.matches(":hover") || ey(null);
              },
              children: [
                (0, i.jsx)(o.PY1.span, {
                  className: k().band,
                  style: { x: ep, width: eh, opacity: e_ },
                  "aria-hidden": "true"
                }),
                (0, i.jsxs)("div", {
                  role: "row",
                  className: `${k().row} ${k().headRow}`,
                  children: [
                    (0, i.jsx)("div", {
                      role: "columnheader",
                      className: `${k().label} ${k().corner}`,
                      "data-corner": "",
                      children: "Permission"
                    }),
                    (0, i.jsx)(d.N, {
                      initial: false,
                      children: m2.map(
                        (e3, s3) => (0, i.jsx)(
                          Q,
                          {
                            kind: "columnheader",
                            col: e3.id,
                            head: true,
                            onEntered: () => (function(e4) {
                              if (ec.current !== e4) return;
                              ec.current = null;
                              let s4 = et.current, a3 = U(en.current, `[data-colhead="${e4}"]`), i2 = en.current?.querySelector("[data-corner]");
                              if (s4 && a3 && i2) {
                                let e5 = a3.offsetLeft, r2 = e5 + a3.offsetWidth, t3 = s4.scrollLeft, o2 = r2 > t3 + s4.clientWidth ? r2 - s4.clientWidth : e5 - i2.offsetWidth < t3 ? e5 - i2.offsetWidth : t3;
                                o2 !== t3 && s4.scrollTo({
                                  left: o2,
                                  behavior: n2 ? "auto" : "smooth"
                                });
                              }
                              ey(e4), window.clearTimeout(eu.current.flash), eu.current.flash = window.setTimeout(() => {
                                em.current !== e4 || en.current?.matches(":hover") || ey(null);
                              }, 1400);
                            })(e3.id),
                            children: (0, i.jsx)(X, {
                              role: e3,
                              isNew: !eg.savedIds.has(e3.id),
                              dirty: eg.touched.includes(e3),
                              canRevert: E.some(
                                (s4) => eg.cells.has(F(e3.id, s4.id))
                              ),
                              nav: eS(`head:${e3.id}`, 0, s3 + 1),
                              onDuplicate: () => (function(e4) {
                                let s4 = `role-${++el.current}`, a3 = new Set(
                                  [...m2, ...t2.roles].map((e5) => e5.name)
                                ), i2 = `${e4.name} copy`;
                                for (let s5 = 2; a3.has(i2); s5++)
                                  i2 = `${e4.name} copy ${s5}`;
                                let r2 = { ..._2[e4.id] }, n3 = m2.findIndex((s5) => s5.id === e4.id);
                                h2([
                                  ...m2.slice(0, n3 + 1),
                                  { id: s4, name: i2, people: 0, custom: true },
                                  ...m2.slice(n3 + 1)
                                ]), g2({ ..._2, [s4]: r2 }), $2({ ...N2, [s4]: r2 }), A2({}), ed.current = `head:${s4}`, ec.current = s4, ey(null), ea(
                                  `Duplicated ${e4.name} as ${i2}, not saved yet`
                                );
                              })(e3),
                              onRevert: () => {
                                let s4;
                                (s4 = t2.grants[e3.id] ?? N2[e3.id]) && (g2({ ..._2, [e3.id]: { ...s4 } }), A2(K(eg.cells, [e3.id])), ea(`Reverted changes to ${e3.name}`));
                              },
                              onDelete: () => {
                                let s4, a3;
                                return s4 = m2.findIndex((s5) => s5.id === e3.id), a3 = m2[s4 - 1] ?? m2[s4 + 1], void (h2(m2.filter((s5) => s5.id !== e3.id)), g2(q(_2, e3.id)), $2(q(N2, e3.id)), A2({}), ed.current = a3 ? `head:${a3.id}` : null, ey(null), ea(
                                  eg.savedIds.has(e3.id) ? `Deleted ${e3.name}. Save to apply.` : `Removed ${e3.name}`
                                ));
                              },
                              onCloseFocus: ej
                            })
                          },
                          e3.id
                        )
                      )
                    })
                  ]
                }),
                C.map((e3) => {
                  let s3 = R2[e3.id];
                  return (0, i.jsxs)(
                    r.Fragment,
                    {
                      children: [
                        (0, i.jsxs)("div", {
                          role: "row",
                          className: `${k().row} ${k().groupRow}`,
                          children: [
                            (0, i.jsx)("div", {
                              role: "rowheader",
                              className: k().label,
                              children: (0, i.jsxs)("button", {
                                type: "button",
                                className: k().disclosure,
                                "aria-expanded": s3,
                                "aria-controls": s3 ? `${a2}-${e3.id}` : void 0,
                                onClick: () => W2({ ...R2, [e3.id]: !s3 }),
                                ...eS(`g:${e3.id}`, eN[e3.id], 0),
                                children: [
                                  (0, i.jsx)(o.PY1.span, {
                                    className: k().disclosureIcon,
                                    initial: false,
                                    animate: { rotate: s3 ? 0 : -90 },
                                    transition: n2 ? { duration: 0 } : S.snappy,
                                    children: (0, i.jsx)(x.A, {
                                      size: 16,
                                      strokeWidth: 1.75,
                                      "aria-hidden": "true"
                                    })
                                  }),
                                  (0, i.jsx)("span", {
                                    className: k().groupName,
                                    children: e3.name
                                  }),
                                  (0, i.jsxs)("span", {
                                    className: k().groupCount,
                                    children: [
                                      e3.permissions.length,
                                      (0, i.jsx)("span", {
                                        className: k().srOnly,
                                        children: " permissions"
                                      })
                                    ]
                                  })
                                ]
                              })
                            }),
                            (0, i.jsx)(d.N, {
                              initial: false,
                              children: m2.map((a3, r2) => {
                                let n3 = e3.permissions.filter(
                                  (e4) => _2[a3.id]?.[e4.id]
                                ).length, t3 = 0 === n3 ? "off" : n3 === e3.permissions.length ? "on" : "mixed";
                                return (0, i.jsx)(
                                  Q,
                                  {
                                    kind: "gridcell",
                                    col: a3.id,
                                    children: (0, i.jsx)(G, {
                                      kind: "checkbox",
                                      state: t3,
                                      label: `${a3.name}: all ${e3.name.toLowerCase()} permissions${a3.locked ? ", always on" : ""}`,
                                      locked: a3.locked,
                                      delay: 0,
                                      dirty: !s3 && e3.permissions.some(
                                        (e4) => eg.cells.has(F(a3.id, e4.id))
                                      ),
                                      onToggle: () => (function(e4, s4) {
                                        if (e4.locked)
                                          return void ea(
                                            `${e4.name} always has every permission`
                                          );
                                        let a4 = !s4.permissions.every(
                                          (s5) => _2[e4.id][s5.id]
                                        ), i2 = {};
                                        s4.permissions.forEach((s5, r3) => {
                                          _2[e4.id][s5.id] !== a4 && (i2[F(e4.id, s5.id)] = (r3 + 1) * P);
                                        }), g2({
                                          ..._2,
                                          [e4.id]: {
                                            ..._2[e4.id],
                                            ...Object.fromEntries(
                                              s4.permissions.map((e5) => [
                                                e5.id,
                                                a4
                                              ])
                                            )
                                          }
                                        }), A2(i2), ea(
                                          `${a4 ? "Turned on" : "Turned off"} all ${s4.name.toLowerCase()} permissions for ${e4.name}`
                                        );
                                      })(a3, e3),
                                      nav: eS(
                                        `g:${e3.id}:${a3.id}`,
                                        eN[e3.id],
                                        r2 + 1
                                      )
                                    })
                                  },
                                  a3.id
                                );
                              })
                            })
                          ]
                        }),
                        (0, i.jsx)(d.N, {
                          initial: false,
                          children: s3 && (0, i.jsx)(
                            V,
                            {
                              id: `${a2}-${e3.id}`,
                              children: e3.permissions.map(
                                (e4) => (0, i.jsxs)(
                                  "div",
                                  {
                                    role: "row",
                                    className: `${k().row} ${k().permRow}`,
                                    children: [
                                      (0, i.jsx)("div", {
                                        role: "rowheader",
                                        className: `${k().label} ${k().permLabel}`,
                                        children: e4.label
                                      }),
                                      (0, i.jsx)(d.N, {
                                        initial: false,
                                        children: m2.map((s4, a3) => {
                                          let r2 = F(s4.id, e4.id), n3 = eg.cells.has(r2);
                                          return (0, i.jsx)(
                                            Q,
                                            {
                                              kind: "gridcell",
                                              col: s4.id,
                                              children: (0, i.jsx)(G, {
                                                kind: "switch",
                                                state: _2[s4.id]?.[e4.id] ? "on" : "off",
                                                label: `${s4.name}: ${e4.label}${s4.locked ? ", always on" : n3 ? ", unsaved" : ""}`,
                                                locked: s4.locked,
                                                dirty: n3,
                                                delay: L2[r2] ?? 0,
                                                onToggle: () => (function(e5, s5) {
                                                  let a4;
                                                  if (e5.locked)
                                                    return void ea(
                                                      `${e5.name} always has every permission`
                                                    );
                                                  let i2 = !_2[e5.id][s5.id];
                                                  g2({
                                                    ..._2,
                                                    [e5.id]: {
                                                      ..._2[e5.id],
                                                      [s5.id]: i2
                                                    }
                                                  }), A2({}), ea(
                                                    `${e5.name} ${i2 ? "can now" : "can no longer"} ${(a4 = s5.label).charAt(0).toLowerCase() + a4.slice(1)}`
                                                  );
                                                })(s4, e4),
                                                nav: eS(
                                                  `p:${e4.id}:${s4.id}`,
                                                  eN[e4.id],
                                                  a3 + 1
                                                )
                                              })
                                            },
                                            s4.id
                                          );
                                        })
                                      })
                                    ]
                                  },
                                  e4.id
                                )
                              )
                            },
                            "body"
                          )
                        })
                      ]
                    },
                    e3.id
                  );
                })
              ]
            })
          }),
          (0, i.jsxs)("footer", {
            className: k().foot,
            children: [
              (0, i.jsxs)("span", {
                className: k().note,
                children: [
                  (0, i.jsx)(f.A, {
                    size: 14,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  }),
                  "Owners always have every permission"
                ]
              }),
              (0, i.jsxs)("span", {
                className: k().note,
                children: [
                  (0, i.jsx)("i", {
                    className: k().legendDot,
                    "aria-hidden": "true"
                  }),
                  "Unsaved change"
                ]
              })
            ]
          }),
          (0, i.jsx)("p", {
            className: k().srOnly,
            role: "status",
            "aria-live": "polite",
            children: es2
          }),
          (0, i.jsx)("div", {
            className: k().barSpace,
            "data-open": ef || void 0,
            "aria-hidden": "true"
          }),
          (0, i.jsx)("div", {
            className: k().barAnchor,
            children: (0, i.jsx)(d.N, {
              children: ef && (0, i.jsxs)(
                o.PY1.div,
                {
                  ref: eo,
                  className: k().bar,
                  role: "region",
                  "aria-label": "Unsaved permission changes",
                  initial: n2 ? { opacity: 0 } : { opacity: 0, y: 24 },
                  animate: { opacity: 1, y: 0 },
                  exit: n2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: 16,
                    transition: {
                      y: S.smooth,
                      opacity: { duration: T.standard, ease: M }
                    }
                  },
                  transition: n2 ? { duration: 0 } : { y: S.smooth, opacity: { duration: T.fast, ease: I } },
                  children: [
                    (0, i.jsxs)("div", {
                      className: k().barText,
                      children: [
                        (0, i.jsx)(J, {
                          id: ex ? "saved" : "pending",
                          children: ex ? (0, i.jsxs)("span", {
                            className: k().barLine,
                            children: [
                              (0, i.jsx)(v.A, {
                                className: k().savedIcon,
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              "Permissions saved"
                            ]
                          }) : (0, i.jsxs)("span", {
                            className: k().barLine,
                            children: [
                              (0, i.jsx)("span", {
                                className: k().count,
                                children: (0, i.jsx)(y.q, {
                                  value: Math.max(eg.count, 1)
                                })
                              }),
                              (0, i.jsx)("span", {
                                className: k().unsavedWord,
                                children: "unsaved"
                              }),
                              (0, i.jsx)(w.g, {
                                children: 1 === eg.count ? "change" : "changes"
                              })
                            ]
                          })
                        }),
                        (0, i.jsx)(J, {
                          id: eA,
                          className: k().barSub,
                          children: eA
                        })
                      ]
                    }),
                    (0, i.jsxs)("div", {
                      className: k().barActions,
                      children: [
                        (0, i.jsx)(j.$, {
                          type: "button",
                          variant: "ghost",
                          size: "sm",
                          disabled: "saving" === D2 || 0 === eg.count,
                          onClick: function() {
                            "saving" !== D2 && 0 !== eg.count && (A2(
                              K(
                                eg.cells,
                                t2.roles.map((e3) => e3.id)
                              )
                            ), h2(t2.roles), g2(t2.grants), $2({}), ey(null), ea(
                              `Discarded ${B(eg.count, "unsaved change")}`
                            ));
                          },
                          children: "Discard"
                        }),
                        (0, i.jsx)(j.$, {
                          type: "button",
                          size: "sm",
                          loading: "saving" === D2,
                          onClick: function() {
                            if ("saving" === D2 || 0 === eg.count) return;
                            let e3 = { roles: m2, grants: _2 }, s3 = eg.count;
                            Z2("saving"), ea(`Saving ${B(s3, "change")}`), ev(() => {
                              c2(e3), Z2("saved"), ea(`Saved ${B(s3, "change")}.`), ev(() => Z2("idle"), 1600);
                            }, 900);
                          },
                          children: ex ? (0, i.jsxs)(i.Fragment, {
                            children: [
                              (0, i.jsx)(v.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              "Saved"
                            ]
                          }) : "Save changes"
                        })
                      ]
                    })
                  ]
                },
                "bar"
              )
            })
          })
        ]
      })
    });
  }
  let es = ee;
}

__m(__module,__exports,__require);
});
A.regCss(64444, ".frame,.frame.frame{position:relative;display:inline-block;box-sizing:content-box;padding:.5em .5em .5em .2em;margin:-.5em -.5em -.5em -.2em;text-align:start;white-space:nowrap;mask-image:linear-gradient(90deg,#000 calc(100% - .5em),transparent)}\n.track{position:relative;display:inline-block;white-space:nowrap}\n.glyph{display:inline-block;white-space:pre;transform-origin:50% 60%}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0;user-select:none}", {});
A.reg(71914, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { Z: () => h });
  var r = a(95155), i = a(12115), s = a(18310), n = a(80642), l = a(25354), o = a(7770), c = a(92218), d = a(24202), p = a.n(d);
  let u = {
    hidden: (e2) => ({
      opacity: 0,
      y: `${0.4 * e2}em`,
      filter: `blur(${o.T.blur.subtle}px)`
    }),
    shown: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: o.T.duration.standard,
        ease: [...o.T.ease.enter]
      }
    },
    gone: (e2) => ({
      opacity: 0,
      y: `${-0.4 * e2}em`,
      filter: `blur(${o.T.blur.subtle}px)`,
      transition: {
        duration: o.T.duration.fast,
        ease: [...o.T.ease.standard]
      }
    })
  }, m = {
    hidden: { opacity: 0, y: 0, filter: "blur(0px)" },
    shown: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: o.T.duration.instant }
    },
    gone: {
      opacity: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: o.T.duration.instant }
    }
  }, _ = {
    initial: { width: 0, opacity: 0, scale: 0.9 },
    animate: { width: "auto", opacity: 1, scale: 1 },
    exit: { width: 0, opacity: 0, scale: 0.9 }
  };
  function h({
    members: e2,
    max: t2 = 4,
    size: a2 = "md",
    label: d2 = "Team members"
  }) {
    let f = !!(0, s.I)(), x = e2.slice(0, Math.max(0, t2)), v = Math.max(0, e2.length - x.length), g = f ? { duration: 0 } : o.T.spring.morph, [y, b] = (0, i.useState)({ overflow: v, direction: 1 });
    return y.overflow !== v && b({ overflow: v, direction: v < y.overflow ? -1 : 1 }), (0, r.jsx)("div", {
      className: [p().group, p()[a2]].join(" "),
      role: "group",
      "aria-label": d2,
      children: (0, r.jsxs)(n.N, {
        initial: false,
        children: [
          x.map(
            (e3) => (0, r.jsx)(
              l.PY1.span,
              {
                className: p().slot,
                ..._,
                transition: g,
                children: (0, r.jsxs)("span", {
                  className: p().lift,
                  children: [
                    (0, r.jsx)(c.e, {
                      className: p().avatar,
                      name: e3.name,
                      src: e3.src,
                      status: e3.status,
                      size: a2
                    }),
                    (0, r.jsx)("span", {
                      className: p().tip,
                      "aria-hidden": "true",
                      children: e3.name
                    })
                  ]
                })
              },
              e3.name
            )
          ),
          v > 0 ? (0, r.jsx)(
            l.PY1.span,
            {
              className: p().slot,
              ..._,
              transition: g,
              children: (0, r.jsx)("span", {
                className: [p().lift, p().overflow, p()[a2]].join(" "),
                role: "img",
                "aria-label": `${v} more ${d2.toLowerCase()}`,
                children: (0, r.jsx)(n.N, {
                  mode: "popLayout",
                  initial: false,
                  custom: y.direction,
                  children: (0, r.jsxs)(
                    l.PY1.span,
                    {
                      className: p().count,
                      custom: y.direction,
                      variants: f ? m : u,
                      initial: "hidden",
                      animate: "shown",
                      exit: "gone",
                      "aria-hidden": "true",
                      children: ["+", v]
                    },
                    v
                  )
                })
              })
            },
            "overflow"
          ) : null
        ]
      })
    });
  }
}

__m(__module,__exports,__require);
});
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
A.cssFor("roles-permissions", [24202,43032,64444]);
A.item("roles-permissions", {entry:51712, export:"RolesPermissions", kind:"block", tier:"pro", unresolved:[]});
})();