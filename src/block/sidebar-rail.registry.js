/* sidebar-rail (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(14225, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "folder",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
          key: "1kt360"
        }
      ]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.regCss(22346, ".badge{--badge-tone:var(--text-secondary);--badge-tint:10%;--badge-ink:84%;--badge-background:color-mix(in oklab,var(--badge-tone) var(--badge-tint),var(--surface));--badge-foreground:color-mix(in oklab,var(--badge-tone) var(--badge-ink),var(--foreground));--badge-color:color-mix(in oklab,var(--badge-tone) 88%,var(--foreground));--badge-border:transparent;--badge-radius:6px;--badge-height:24px;--badge-pad:10px;--badge-gap:5px;--badge-icon:14px;--badge-dot:6px;box-sizing:border-box;display:inline-flex;min-height:var(--badge-height);flex:none;align-items:center;justify-content:center;vertical-align:middle;border:1px solid var(--badge-border);border-radius:var(--badge-radius);padding:0 var(--badge-pad);color:var(--badge-foreground);background:var(--badge-background);font-family:var(--font-body);font-size:var(--text-xs);font-weight:500;font-variant-numeric:tabular-nums;letter-spacing:-.005em;line-height:1;white-space:nowrap;overflow:clip;transition:border-color var(--duration-standard) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard),color var(--duration-standard) var(--ease-standard)}\n:root[data-theme=dark] .badge{--badge-tint:12%;--badge-ink:94%}\n@media (prefers-reduced-motion:reduce){.badge{transition-duration:var(--duration-instant)}\n.outline{--badge-border:color-mix(in oklab,var(--badge-tone) 14%,var(--border))}\n:root[data-theme=dark] .outline{--badge-border:color-mix(in oklab,var(--badge-tone) 22%,var(--border))}\n.sm{--badge-height:20px;--badge-radius:5px;--badge-pad:8px;--badge-gap:4px;--badge-icon:12px;--badge-dot:5px;font-size:11px}\n.md{--badge-height:24px;--badge-radius:6px;--badge-pad:10px;--badge-gap:5px;--badge-icon:14px;--badge-dot:6px}\n.lg{--badge-height:28px;--badge-radius:7px;--badge-pad:12px;--badge-gap:6px;--badge-icon:16px;--badge-dot:7px;font-size:var(--text-sm)}\n.pill{--badge-radius:var(--radius-pill)}\n.withIcon{padding-inline-start:calc(var(--badge-pad) - 2px)}\n.withDot{padding-inline-start:calc(var(--badge-pad) - 1px)}\n.body,.content{display:flex;align-items:center}\n.content{position:relative;width:max-content;gap:var(--badge-gap)}\n.glyph,.label{position:relative;display:inline-flex;align-items:center}\n.glyph>svg{display:block;width:var(--badge-icon);height:var(--badge-icon)}\n.text{display:block;text-box:trim-both cap alphabetic}\n.icon{position:relative;display:inline-flex;flex:none;align-items:center;justify-content:center;color:var(--badge-color);line-height:0}\n.dot{display:block;width:var(--badge-dot);height:var(--badge-dot);flex:none;border-radius:50%;background:var(--badge-color)}\n.neutral{--badge-tone:var(--text-secondary)}\n.info{--badge-tone:var(--info,var(--tone-sky))}\n.success{--badge-tone:var(--success)}\n.warning{--badge-tone:var(--warning)}\n.amber,.warning{--badge-ink:76%}\n.danger{--badge-tone:var(--danger)}\n.teal{--badge-tone:var(--tone-teal)}\n.sky{--badge-tone:var(--tone-sky)}\n.orchid{--badge-tone:var(--tone-orchid)}\n.violet{--badge-tone:var(--tone-violet)}\n.rose{--badge-tone:var(--tone-rose)}\n.amber{--badge-tone:var(--tone-amber)}", {});
A.regCss(24202, ".group{--avatar-size:36px;display:inline-flex;height:var(--avatar-size);align-items:center;padding-left:6px}\n.group.sm{--avatar-size:28px}\n.group.lg{--avatar-size:48px}\n.overflow.sm{width:28px;height:28px;font-size:10px}\n.overflow.lg{width:48px;height:48px;font-size:var(--text-sm)}\n.slot{position:relative;display:inline-flex;flex:0 0 auto;height:var(--avatar-size);align-items:center}\n@media (hover:hover) and (pointer:fine){.slot:hover{z-index:1}\n.slot:hover .avatar,.slot:hover .overflow{box-shadow:0 0 0 1px var(--border-strong)}\n.slot:hover .tip{opacity:1;transform:translate(-50%);transition-delay:60ms}\n.lift{position:relative;display:inline-flex;margin-left:-6px;border-radius:var(--radius-pill)}\n.avatar,.overflow{border:2px solid var(--surface);box-shadow:0 0 0 1px var(--border);transition:box-shadow var(--duration-fast) var(--ease-standard)}\n.overflow{position:relative;display:inline-grid;place-items:center;overflow:hidden;border-radius:var(--radius-pill);background:var(--surface-muted);color:var(--text-secondary);font-size:var(--text-xs);font-weight:500;font-variant-numeric:tabular-nums}\n.overflow.md{width:36px;height:36px}\n.count{display:inline-block}\n.tip{position:absolute;z-index:2;bottom:calc(100% + 8px);left:50%;padding:4px 8px;border-radius:var(--radius-pill);background:var(--foreground);color:var(--background);font-size:var(--text-xs);font-weight:500;line-height:var(--leading-body);white-space:nowrap;pointer-events:none;opacity:0;transform:translate(-50%,3px);transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n@media (prefers-reduced-motion:reduce){.tip{transform:translate(-50%);transition:none}", {});
A.reg(43146, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, {
    UC: () => G,
    VY: () => W,
    ZL: () => P,
    bL: () => D,
    bm: () => K,
    hE: () => F,
    hJ: () => _,
    l9: () => z
  });
  var r = n(12115), o = n(70379), l = n(47527), a = n(68599), i = n(89971), d = n(59322), u = n(19416), c = n(69885), s = n(19040), f = n(83935), p = n(55897), y = n(32007), h = n(66294), m = n(5174), g = n(22954), x = n(42442), v = n(95155), k = Object.defineProperty, M = (e2, t2) => k(e2, "name", { value: t2, configurable: true }), A = "Dialog", [w, b] = (0, a.A)(A), [j, C] = w(A), D = M((e2) => {
    let {
      __scopeDialog: t2,
      children: n2,
      open: o2,
      defaultOpen: l2,
      onOpenChange: a2,
      modal: u2 = true
    } = e2, c2 = r.useRef(null), s2 = r.useRef(null), [f2, p2] = (0, d.i)({
      prop: o2,
      defaultProp: l2 ?? false,
      onChange: a2,
      caller: A
    }), [y2, h2] = r.useState(0), [m2, g2] = r.useState(0);
    return (0, v.jsx)(j, {
      scope: t2,
      triggerRef: c2,
      contentRef: s2,
      contentId: (0, i.B)(),
      titleId: (0, i.B)(),
      descriptionId: (0, i.B)(),
      titlePresent: y2 > 0,
      descriptionPresent: m2 > 0,
      setTitleCount: h2,
      setDescriptionCount: g2,
      open: f2,
      onOpenChange: p2,
      onOpenToggle: r.useCallback(() => p2((e3) => !e3), [p2]),
      modal: u2,
      children: n2
    });
  }, "Dialog"), z = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, a2 = C("DialogTrigger", n2), i2 = (0, l.s)(t2, a2.triggerRef);
      return (0, v.jsx)(p.sG.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a2.open,
        "aria-controls": a2.open ? a2.contentId : void 0,
        "data-state": B(a2.open),
        ...r2,
        ref: i2,
        onClick: (0, o.mK)(e2.onClick, a2.onOpenToggle)
      });
    }, "DialogTrigger")
  ), R = "DialogPortal", [E, O] = w(R, { forceMount: void 0 }), P = M((e2) => {
    let { __scopeDialog: t2, forceMount: n2, children: o2, container: l2 } = e2, a2 = C(R, t2);
    return (0, v.jsx)(E, {
      scope: t2,
      forceMount: n2,
      children: r.Children.map(
        o2,
        (e3) => (0, v.jsx)(f.C, {
          present: n2 || a2.open,
          children: (0, v.jsx)(s.Z, {
            asChild: true,
            container: l2,
            children: e3
          })
        })
      )
    });
  }, "DialogPortal"), I = "DialogOverlay", _ = r.forwardRef(
    M(function(e2, t2) {
      let n2 = O(I, e2.__scopeDialog), { forceMount: r2 = n2.forceMount, ...o2 } = e2, l2 = C(I, e2.__scopeDialog);
      return l2.modal ? (0, v.jsx)(f.C, {
        present: r2 || l2.open,
        children: (0, v.jsx)(T, { ...o2, ref: t2 })
      }) : null;
    }, "DialogOverlay")
  ), S = (0, x.TL)("DialogOverlay.RemoveScroll"), T = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, o2 = C(I, n2), a2 = (0, u.e0)(), i2 = (0, l.s)(t2, a2);
      return (0, v.jsx)(m.A, {
        as: S,
        allowPinchZoom: true,
        shards: [o2.contentRef],
        children: (0, v.jsx)(p.sG.div, {
          "data-state": B(o2.open),
          ...r2,
          ref: i2,
          style: { pointerEvents: "auto", ...r2.style }
        })
      });
    }, "DialogOverlayImpl")
  ), q = "DialogContent", G = r.forwardRef(
    M(function(e2, t2) {
      let n2 = O(q, e2.__scopeDialog), { forceMount: r2 = n2.forceMount, ...o2 } = e2, l2 = C(q, e2.__scopeDialog);
      return (0, v.jsx)(f.C, {
        present: r2 || l2.open,
        children: l2.modal ? (0, v.jsx)(L, { ...o2, ref: t2 }) : (0, v.jsx)(H, { ...o2, ref: t2 })
      });
    }, "DialogContent")
  ), L = r.forwardRef(
    M(function(e2, t2) {
      let n2 = C(q, e2.__scopeDialog), a2 = r.useRef(null), i2 = (0, l.s)(t2, n2.contentRef, a2);
      return r.useEffect(() => {
        let e3 = a2.current;
        if (e3) return (0, g.Eq)(e3);
      }, []), (0, v.jsx)(V, {
        ...e2,
        ref: i2,
        trapFocus: n2.open,
        disableOutsidePointerEvents: n2.open,
        onCloseAutoFocus: (0, o.mK)(e2.onCloseAutoFocus, (e3) => {
          e3.preventDefault(), n2.triggerRef.current?.focus();
        }),
        onPointerDownOutside: (0, o.mK)(e2.onPointerDownOutside, (e3) => {
          let t3 = e3.detail.originalEvent, n3 = 0 === t3.button && true === t3.ctrlKey;
          (2 === t3.button || n3) && e3.preventDefault();
        }),
        onFocusOutside: (0, o.mK)(
          e2.onFocusOutside,
          (e3) => e3.preventDefault()
        )
      });
    }, "DialogContentModal")
  ), H = r.forwardRef(
    M(function(e2, t2) {
      let n2 = C(q, e2.__scopeDialog), o2 = r.useRef(false), l2 = r.useRef(false);
      return (0, v.jsx)(V, {
        ...e2,
        ref: t2,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (t3) => {
          e2.onCloseAutoFocus?.(t3), t3.defaultPrevented || (o2.current || n2.triggerRef.current?.focus(), t3.preventDefault()), o2.current = false, l2.current = false;
        },
        onInteractOutside: (t3) => {
          e2.onInteractOutside?.(t3), t3.defaultPrevented || (o2.current = true, "pointerdown" === t3.detail.originalEvent.type && (l2.current = true));
          let r2 = t3.target;
          n2.triggerRef.current?.contains(r2) && t3.preventDefault(), "focusin" === t3.detail.originalEvent.type && l2.current && t3.preventDefault();
        }
      });
    }, "DialogContentNonModal")
  ), V = r.forwardRef(
    M(function(e2, t2) {
      let {
        __scopeDialog: n2,
        trapFocus: r2,
        onOpenAutoFocus: o2,
        onCloseAutoFocus: l2,
        ...a2
      } = e2, i2 = C(q, n2);
      return (0, y.Oh)(), (0, v.jsx)(v.Fragment, {
        children: (0, v.jsx)(c.n, {
          asChild: true,
          loop: true,
          trapped: r2,
          onMountAutoFocus: o2,
          onUnmountAutoFocus: l2,
          children: (0, v.jsx)(u.qW, {
            role: "dialog",
            id: i2.contentId,
            "aria-describedby": i2.descriptionPresent ? i2.descriptionId : void 0,
            "aria-labelledby": i2.titlePresent ? i2.titleId : void 0,
            "data-state": B(i2.open),
            ...a2,
            ref: t2,
            deferPointerDownOutside: true,
            onDismiss: () => i2.onOpenChange(false)
          })
        })
      });
    }, "DialogContentImpl")
  ), F = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, o2 = C("DialogTitle", n2), { setTitleCount: l2 } = o2;
      return (0, h.N)(() => (l2((e3) => e3 + 1), () => l2((e3) => e3 - 1)), [l2]), (0, v.jsx)(p.sG.h2, { id: o2.titleId, ...r2, ref: t2 });
    }, "DialogTitle")
  ), W = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, o2 = C("DialogDescription", n2), { setDescriptionCount: l2 } = o2;
      return (0, h.N)(() => (l2((e3) => e3 + 1), () => l2((e3) => e3 - 1)), [l2]), (0, v.jsx)(p.sG.p, { id: o2.descriptionId, ...r2, ref: t2 });
    }, "DialogDescription")
  ), K = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, l2 = C("DialogClose", n2);
      return (0, v.jsx)(p.sG.button, {
        type: "button",
        ...r2,
        ref: t2,
        onClick: (0, o.mK)(e2.onClick, () => l2.onOpenChange(false))
      });
    }, "DialogClose")
  );
  function B(e2) {
    return e2 ? "open" : "closed";
  }
  M(B, "getState");
}

__m(__module,__exports,__require);
});
A.reg(45425, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => a });
  var i = r(51811);
  let n = {
    name: "house",
    size: 24,
    node: [
      [
        "path",
        { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }
      ],
      [
        "path",
        {
          d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
          key: "r6nss1"
        }
      ]
    ],
    aliases: ["home"]
  };
  n.node;
  let a = (0, i.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(52212, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { SidebarRail: () => U, default: () => Z });
  var i = a(95155), s = a(12115), n = a(43146), r = a(40623), l = a(25354), o = a(18310), d = a(28245), c = a(55809), u = a(57700), m = a(80642), p = a(45425), h = a(61665), _ = a(14225), b = a(94910), f = a(84824), x = a(36483), g = a(85964), y = a(88074), v = a(76721), j = a(9005), w = a(65024), N = a(92218), k = a(71914), T = a(90034), S = a(36690), A = a(7770), P = a(86124), M = a.n(P);
  let C = {
    emma: { name: "Emma Collins", src: "media/people/emma-collins.svg" },
    marcus: {
      name: "Marcus Johnson",
      src: "media/people/marcus-johnson.svg"
    },
    ava: { name: "Ava Mitchell", src: "media/people/ava-mitchell.svg" },
    jasmine: {
      name: "Jasmine Brooks",
      src: "media/people/jasmine-brooks.svg"
    },
    sofia: { name: "Sofia Ramirez", src: "media/people/sofia-ramirez.svg" }
  }, z = [
    {
      id: "main",
      items: [
        { id: "home", label: "Home", icon: p.A },
        { id: "inbox", label: "Inbox", icon: h.A, count: 4 }
      ]
    },
    {
      id: "workspace",
      heading: "Workspace",
      items: [
        {
          id: "projects",
          label: "Projects",
          icon: _.A,
          children: [
            { id: "checkout", label: "Checkout redesign" },
            { id: "onboarding", label: "Mobile onboarding" },
            { id: "system", label: "Design system 2.0" }
          ]
        },
        { id: "roadmap", label: "Roadmap", icon: b.A },
        { id: "research", label: "Research", icon: f.A }
      ]
    },
    {
      id: "pinned",
      heading: "Pinned",
      items: [
        { id: "launch", label: "Q4 launch plan", icon: x.A },
        { id: "critique", label: "Critique notes", icon: g.A }
      ]
    }
  ], E = { id: "settings", label: "Settings", icon: y.A }, R = {
    home: {
      title: "Home",
      summary: "Three reviews need you before Thursday's critique.",
      team: ["marcus", "sofia", "ava"],
      stats: [
        { label: "Assigned to you", value: 12 },
        { label: "In review", value: 3 },
        { label: "Shipped this week", value: 5 }
      ],
      list: "Needs you",
      rows: [
        {
          title: "Address step spacing",
          detail: "Checkout redesign",
          person: "marcus",
          status: "In review",
          tone: "info",
          when: "Today"
        },
        {
          title: "Onboarding empty states",
          detail: "Mobile onboarding",
          person: "sofia",
          status: "In progress",
          tone: "neutral",
          when: "Wed"
        },
        {
          title: "Dark mode token audit",
          detail: "Design system 2.0",
          person: "ava",
          status: "Blocked",
          tone: "warning",
          when: "Fri"
        }
      ]
    },
    inbox: {
      title: "Inbox",
      summary: "Four unread, most of them about the checkout flow.",
      team: ["marcus", "jasmine", "ava"],
      stats: [
        { label: "Unread", value: 4 },
        { label: "Mentions", value: 2 },
        { label: "Review requests", value: 1 }
      ],
      list: "Unread",
      rows: [
        {
          title: "Marcus commented on Address step",
          detail: "Can the postcode field move above the city?",
          person: "marcus",
          status: "Comment",
          tone: "neutral",
          when: "9:42 AM"
        },
        {
          title: "Jasmine asked for your review",
          detail: "Payment sheet, second pass",
          person: "jasmine",
          status: "Review",
          tone: "info",
          when: "8:15 AM"
        },
        {
          title: "Ava mentioned you",
          detail: "Surface levels in the token audit",
          person: "ava",
          status: "Mention",
          tone: "neutral",
          when: "Yesterday"
        }
      ]
    },
    checkout: {
      title: "Checkout redesign",
      parent: "Projects",
      summary: "Fewer steps from bag to confirmation. Beta opens October 14.",
      team: ["marcus", "jasmine", "emma", "ava"],
      stats: [
        { label: "Screens", value: 38 },
        { label: "Open issues", value: 7 },
        { label: "Days to beta", value: 22 }
      ],
      list: "Screens in flight",
      rows: [
        {
          title: "Address step",
          detail: "Autocomplete and postcode order",
          person: "marcus",
          status: "In review",
          tone: "info",
          when: "Today"
        },
        {
          title: "Payment sheet",
          detail: "Apple Pay and saved cards",
          person: "jasmine",
          status: "In progress",
          tone: "neutral",
          when: "Thu"
        },
        {
          title: "Confirmation",
          detail: "Receipt, tracking, and next steps",
          person: "emma",
          status: "Done",
          tone: "success",
          when: "Mon"
        }
      ]
    },
    onboarding: {
      title: "Mobile onboarding",
      parent: "Projects",
      summary: "A shorter first run that ends in a real first project.",
      team: ["sofia", "emma"],
      stats: [
        { label: "Screens", value: 24 },
        { label: "Open issues", value: 4 },
        { label: "Test sessions", value: 9 }
      ],
      list: "Screens in flight",
      rows: [
        {
          title: "Welcome and sign in",
          detail: "Passkeys first, email as fallback",
          person: "sofia",
          status: "Done",
          tone: "success",
          when: "Sep 12"
        },
        {
          title: "Workspace setup",
          detail: "Invite step moved after first project",
          person: "sofia",
          status: "In progress",
          tone: "neutral",
          when: "Wed"
        },
        {
          title: "Empty states",
          detail: "Starter templates for each role",
          person: "emma",
          status: "Not started",
          tone: "neutral",
          when: "Oct 2"
        }
      ]
    },
    system: {
      title: "Design system 2.0",
      parent: "Projects",
      summary: "New tokens, fewer components, and a dark mode that holds up.",
      team: ["ava", "jasmine", "emma"],
      stats: [
        { label: "Components", value: 64 },
        { label: "Tokens", value: 212 },
        { label: "Adoption", value: 71, suffix: "%" }
      ],
      list: "Workstreams",
      rows: [
        {
          title: "Surface levels",
          detail: "Waiting on the contrast review",
          person: "ava",
          status: "Blocked",
          tone: "warning",
          when: "Fri"
        },
        {
          title: "Button variants",
          detail: "Four sizes down to three",
          person: "jasmine",
          status: "In review",
          tone: "info",
          when: "Thu"
        },
        {
          title: "Motion tokens",
          detail: "Springs for panels and highlights",
          person: "emma",
          status: "Done",
          tone: "success",
          when: "Sep 18"
        }
      ]
    },
    roadmap: {
      title: "Roadmap",
      summary: "Four bets this quarter. One needs a decision this week.",
      team: ["marcus", "sofia", "jasmine"],
      stats: [
        { label: "Bets", value: 4 },
        { label: "On track", value: 2 },
        { label: "At risk", value: 1 }
      ],
      list: "Q4 bets",
      rows: [
        {
          title: "Checkout redesign",
          detail: "Beta with 5% of traffic",
          person: "marcus",
          status: "On track",
          tone: "success",
          when: "Oct 14"
        },
        {
          title: "Mobile onboarding",
          detail: "Second usability round",
          person: "sofia",
          status: "On track",
          tone: "success",
          when: "Nov 3"
        },
        {
          title: "Team workspaces",
          detail: "Needs a pricing decision",
          person: "jasmine",
          status: "At risk",
          tone: "warning",
          when: "Dec 1"
        }
      ]
    },
    research: {
      title: "Research",
      summary: "Twelve interviews so far. Checkout friction came up in nine.",
      team: ["ava", "sofia", "emma"],
      stats: [
        { label: "Interviews", value: 12 },
        { label: "Insights", value: 31 },
        { label: "Open questions", value: 6 }
      ],
      list: "Studies",
      rows: [
        {
          title: "Returning shoppers",
          detail: "Six sessions, synthesis ready",
          person: "ava",
          status: "Ready",
          tone: "success",
          when: "Sep 19"
        },
        {
          title: "First run on mobile",
          detail: "Four sessions booked",
          person: "sofia",
          status: "Scheduled",
          tone: "info",
          when: "Sep 29"
        },
        {
          title: "Checkout drop off",
          detail: "Survey with 412 responses",
          person: "emma",
          status: "Analyzing",
          tone: "neutral",
          when: "Oct 1"
        }
      ]
    },
    launch: {
      title: "Q4 launch plan",
      parent: "Pinned",
      summary: "Dates, owners, and what has to be true before each launch.",
      team: ["jasmine", "emma", "sofia", "marcus", "ava"],
      stats: [
        { label: "Milestones", value: 9 },
        { label: "Complete", value: 4 },
        { label: "Weeks left", value: 11 }
      ],
      list: "Next milestones",
      rows: [
        {
          title: "Beta invite list",
          detail: "1,200 customers from the waitlist",
          person: "jasmine",
          status: "Done",
          tone: "success",
          when: "Sep 20"
        },
        {
          title: "Launch review",
          detail: "Go or no go with support and sales",
          person: "emma",
          status: "Scheduled",
          tone: "info",
          when: "Oct 8"
        },
        {
          title: "Support playbook",
          detail: "Macros for payment questions",
          person: "sofia",
          status: "In progress",
          tone: "neutral",
          when: "Oct 10"
        }
      ]
    },
    critique: {
      title: "Critique notes",
      parent: "Pinned",
      summary: "Decisions from Thursday critiques, newest first.",
      team: ["jasmine", "sofia", "ava"],
      stats: [
        { label: "Sessions", value: 14 },
        { label: "Decisions", value: 38 },
        { label: "Follow ups", value: 5 }
      ],
      list: "Recent decisions",
      rows: [
        {
          title: "Payment sheet",
          detail: "Keep saved cards above the fold",
          person: "jasmine",
          status: "Decided",
          tone: "success",
          when: "Sep 18"
        },
        {
          title: "Onboarding tour",
          detail: "Cut the tour to three steps",
          person: "sofia",
          status: "Decided",
          tone: "success",
          when: "Sep 11"
        },
        {
          title: "Surface contrast",
          detail: "Revisit after the token audit",
          person: "ava",
          status: "Follow up",
          tone: "warning",
          when: "Sep 4"
        }
      ]
    },
    settings: {
      title: "Settings",
      summary: "Northline workspace, 14 members on the team plan.",
      team: ["emma", "marcus"],
      stats: [
        { label: "Members", value: 14 },
        { label: "Guests", value: 3 },
        { label: "Integrations", value: 5 }
      ],
      list: "Connected tools",
      rows: [
        {
          title: "Figma sync",
          detail: "Libraries and comments",
          person: "emma",
          status: "Connected",
          tone: "success",
          when: "4 min ago"
        },
        {
          title: "Slack digest",
          detail: "Posts to #design at 9:00 AM",
          person: "marcus",
          status: "Daily",
          tone: "neutral",
          when: "Today"
        },
        {
          title: "Guest access",
          detail: "Three guests, comment only",
          person: "emma",
          status: "Limited",
          tone: "neutral",
          when: "Sep 2"
        }
      ]
    }
  }, $ = [
    ...new Set(Object.values(R).flatMap((e2) => e2.parent ? [e2.parent] : []))
  ], D = (e2) => [...e2], O = { duration: 0 };
  function Y(e2, t2) {
    return t2 ? O : e2 ? { duration: 0.14, ease: D(A.T.ease.standard) } : { duration: 0.24, delay: 0.1, ease: D(A.T.ease.enter) };
  }
  function I(e2, t2) {
    return t2 ? O : e2 ? { duration: 0.2, delay: 0.16, ease: D(A.T.ease.enter) } : { duration: 0.1, ease: D(A.T.ease.standard) };
  }
  let L = {
    hidden: { opacity: 0, y: 8, filter: `blur(${A.T.blur.soft}px)` },
    shown: { opacity: 1, y: 0, filter: "blur(0px)" },
    gone: { opacity: 0, y: -6, filter: `blur(${A.T.blur.subtle}px)` }
  };
  function B({ enabled: e2, label: t2, note: a2, children: n2 }) {
    let [l2, o2] = (0, s.useState)(false);
    return !e2 && l2 && o2(false), (0, i.jsxs)(r.bL, {
      open: e2 && l2,
      onOpenChange: (t3) => o2(t3 && e2),
      children: [
        (0, i.jsx)(r.l9, { asChild: true, children: n2 }),
        (0, i.jsx)(r.ZL, {
          children: (0, i.jsxs)(r.UC, {
            className: M().tip,
            side: "right",
            sideOffset: 14,
            collisionPadding: 8,
            children: [
              t2,
              a2 && (0, i.jsx)("span", { className: M().tipNote, children: a2 })
            ]
          })
        })
      ]
    });
  }
  function F({
    entry: e2,
    nested: t2,
    current: a2,
    lit: s2,
    expanded: n2,
    turned: r2,
    controls: o2,
    collapsed: d2,
    tips: c2,
    layoutId: u2,
    reduce: m2,
    onClick: p2
  }) {
    let h2 = e2.icon, _2 = Y(d2, m2), b2 = I(d2, m2);
    return (0, i.jsx)(B, {
      enabled: c2,
      label: e2.label,
      note: e2.count ? `${e2.count} unread` : void 0,
      children: (0, i.jsxs)("button", {
        type: "button",
        className: [M().item, t2 ? M().nested : "", s2 ? M().lit : ""].join(" "),
        "aria-current": a2 ? "page" : void 0,
        "aria-expanded": n2,
        "aria-controls": o2,
        onClick: p2,
        children: [
          s2 && (0, i.jsx)(l.PY1.span, {
            layoutId: u2,
            className: M().highlight,
            style: { borderRadius: 8 },
            transition: m2 ? O : A.T.spring.morph
          }),
          h2 && (0, i.jsx)(h2, {
            className: M().icon,
            size: 16,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          }),
          (0, i.jsxs)(l.PY1.span, {
            className: M().label,
            initial: false,
            animate: { opacity: +!d2, x: d2 ? -6 : 0 },
            transition: _2,
            children: [
              e2.label,
              e2.count ? (0, i.jsxs)("span", {
                className: M().srOnly,
                children: [", ", e2.count, " unread"]
              }) : null
            ]
          }),
          e2.count ? (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(l.PY1.span, {
                className: M().count,
                "aria-hidden": "true",
                initial: false,
                animate: { opacity: +!d2 },
                transition: _2,
                children: e2.count
              }),
              (0, i.jsx)(l.PY1.span, {
                className: M().dot,
                "aria-hidden": "true",
                initial: false,
                animate: { opacity: +!!d2, scale: d2 ? 1 : 0.3 },
                transition: d2 && !m2 ? { ...A.T.spring.snappy, delay: 0.16 } : b2
              })
            ]
          }) : null,
          void 0 !== r2 && (0, i.jsx)(l.PY1.span, {
            className: M().chevron,
            "aria-hidden": "true",
            initial: false,
            animate: { opacity: +!d2, rotate: 90 * !!r2 },
            transition: { opacity: _2, rotate: m2 ? O : A.T.spring.snappy },
            children: (0, i.jsx)(v.A, { size: 14, strokeWidth: 1.75 })
          })
        ]
      })
    });
  }
  function W({
    variant: e2,
    baseId: t2,
    collapsed: a2,
    active: s2,
    open: n2,
    reduce: r2,
    onSelect: o2,
    onGroup: d2
  }) {
    let c2 = "side" === e2 && a2, u2 = `${e2}-active`, m2 = Y(a2, r2), p2 = I(a2, r2), h2 = r2 ? O : A.T.spring.smooth, _2 = { collapsed: a2, tips: c2, layoutId: u2, reduce: r2 };
    return (0, i.jsxs)(l.PY1.nav, {
      className: M().nav,
      "aria-label": "Northline",
      layoutScroll: true,
      children: [
        z.map((c3) => {
          let u3 = `${t2}-${e2}-${c3.id}`;
          return (0, i.jsxs)(
            "div",
            {
              className: M().section,
              role: c3.heading ? "group" : void 0,
              "aria-labelledby": c3.heading ? u3 : void 0,
              children: [
                c3.heading && (0, i.jsxs)(l.PY1.div, {
                  className: M().heading,
                  initial: false,
                  animate: { height: a2 ? 17 : 32 },
                  transition: h2,
                  children: [
                    (0, i.jsx)(l.PY1.span, {
                      id: u3,
                      className: M().headingText,
                      initial: false,
                      animate: { opacity: +!a2, x: a2 ? -6 : 0 },
                      transition: m2,
                      children: c3.heading
                    }),
                    (0, i.jsx)(l.PY1.span, {
                      className: M().divider,
                      "aria-hidden": "true",
                      initial: false,
                      animate: { opacity: +!!a2, scaleX: a2 ? 1 : 0.3 },
                      transition: p2
                    })
                  ]
                }),
                (0, i.jsx)("ul", {
                  className: M().list,
                  role: "list",
                  children: c3.items.map((c4) => {
                    if (!c4.children)
                      return (0, i.jsx)(
                        "li",
                        {
                          children: (0, i.jsx)(F, {
                            entry: c4,
                            current: s2 === c4.id,
                            lit: s2 === c4.id,
                            onClick: () => o2(c4.id),
                            ..._2
                          })
                        },
                        c4.id
                      );
                    let u4 = `${t2}-${e2}-${c4.id}-list`, m3 = !!n2[c4.id] && !a2, p3 = c4.children.some((e3) => e3.id === s2);
                    return (0, i.jsxs)(
                      "li",
                      {
                        children: [
                          (0, i.jsx)(F, {
                            entry: c4,
                            current: false,
                            lit: p3 && !m3,
                            expanded: m3,
                            turned: !!n2[c4.id],
                            controls: u4,
                            onClick: () => d2(c4.id),
                            ..._2
                          }),
                          (0, i.jsx)(l.PY1.ul, {
                            id: u4,
                            className: M().children,
                            role: "list",
                            inert: !m3,
                            initial: false,
                            animate: m3 ? {
                              height: "auto",
                              opacity: 1,
                              transitionEnd: { overflow: "visible" }
                            } : { height: 0, opacity: 0, overflow: "hidden" },
                            transition: {
                              height: h2,
                              opacity: r2 ? O : {
                                duration: m3 ? 0.24 : 0.14,
                                delay: 0.06 * !!m3,
                                ease: D(A.T.ease.standard)
                              }
                            },
                            children: c4.children.map(
                              (e3) => (0, i.jsx)(
                                "li",
                                {
                                  children: (0, i.jsx)(F, {
                                    entry: e3,
                                    nested: true,
                                    current: s2 === e3.id,
                                    lit: m3 && s2 === e3.id,
                                    onClick: () => o2(e3.id),
                                    ..._2
                                  })
                                },
                                e3.id
                              )
                            )
                          })
                        ]
                      },
                      c4.id
                    );
                  })
                })
              ]
            },
            c3.id
          );
        }),
        (0, i.jsx)("ul", {
          className: `${M().list} ${M().footerList}`,
          role: "list",
          children: (0, i.jsx)("li", {
            children: (0, i.jsx)(F, {
              entry: E,
              current: "settings" === s2,
              lit: "settings" === s2,
              onClick: () => o2("settings"),
              ..._2
            })
          })
        })
      ]
    });
  }
  function q({ collapsed: e2, reduce: t2 }) {
    return (0, i.jsxs)("div", {
      className: M().brand,
      children: [
        (0, i.jsx)("span", {
          className: M().mark,
          "data-logo": "",
          "aria-hidden": "true",
          children: (0, i.jsxs)("svg", {
            viewBox: "0 0 24 24",
            children: [
              (0, i.jsx)("path", {
                d: "M12 3.5 5.5 19.5 12 15.6z",
                fill: "currentColor"
              }),
              (0, i.jsx)("path", {
                d: "M12 3.5l6.5 16-6.5-3.9z",
                fill: "currentColor",
                opacity: ".55"
              })
            ]
          })
        }),
        (0, i.jsxs)(l.PY1.span, {
          className: M().stack,
          initial: false,
          animate: { opacity: +!e2, x: e2 ? -6 : 0 },
          transition: Y(e2, t2),
          children: [
            (0, i.jsx)("strong", { children: "Northline" }),
            (0, i.jsx)("span", { children: "Product design" })
          ]
        })
      ]
    });
  }
  function H({ collapsed: e2, reduce: t2 }) {
    return (0, i.jsxs)("div", {
      className: M().profile,
      children: [
        (0, i.jsx)(N.e, {
          name: C.emma.name,
          src: C.emma.src,
          size: "sm",
          status: "online"
        }),
        (0, i.jsxs)(l.PY1.span, {
          className: M().stack,
          initial: false,
          animate: { opacity: +!e2, x: e2 ? -6 : 0 },
          transition: Y(e2, t2),
          children: [
            (0, i.jsx)("strong", { children: "Emma Collins" }),
            (0, i.jsx)("span", { children: "Product designer" })
          ]
        })
      ]
    });
  }
  function G({ collapsed: e2, reduce: t2 }) {
    return (0, i.jsxs)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      "aria-hidden": "true",
      children: [
        (0, i.jsx)("rect", {
          x: "2.75",
          y: "3.75",
          width: "14.5",
          height: "12.5",
          rx: "3.5"
        }),
        (0, i.jsx)(l.PY1.path, {
          d: "M8.25 4.25v11.5",
          initial: false,
          animate: { x: e2 ? -2.5 : 0 },
          transition: t2 ? O : A.T.spring.smooth
        })
      ]
    });
  }
  function U() {
    let e2 = (0, s.useId)(), t2 = !!(0, o.I)(), [a2, p2] = (0, s.useState)(true), h2 = t2 || a2, [_2, b2] = (0, s.useState)(false), [f2, x2] = (0, s.useState)(false), [g2, y2] = (0, s.useState)("checkout"), [v2, P2] = (0, s.useState)({ projects: true }), [z2, E2] = (0, s.useState)(false), [Y2, I2] = (0, s.useState)(null), [B2, F2] = (0, s.useState)(""), U2 = (0, s.useRef)(null), Z2 = (0, s.useRef)(null), J = (0, s.useRef)(false), V = (0, s.useRef)(0), K = R[g2], Q = `${e2}-sidebar`;
    (0, s.useEffect)(() => {
      if (Y2)
        return window.addEventListener("keydown", e3), () => window.removeEventListener("keydown", e3);
      function e3(e4) {
        if ("[" !== e4.key || e4.metaKey || e4.ctrlKey || e4.altKey || e4.defaultPrevented || !Y2)
          return;
        let t3 = e4.target;
        if (t3 && (t3.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t3.tagName)))
          return;
        let a3 = Y2.getBoundingClientRect();
        if (a3.width && !(a3.bottom < 0) && !(a3.top > window.innerHeight)) {
          if (e4.preventDefault(), Y2.clientWidth < 480) return void E2(!z2);
          b2(!_2), F2(_2 ? "Sidebar expanded" : "Sidebar collapsed");
        }
      }
    }, [Y2, _2, z2]);
    let X = (0, s.useRef)(null);
    (0, s.useLayoutEffect)(() => {
      if (!Y2) return;
      let e3 = () => {
        let e4 = Y2.clientWidth;
        e4 >= 480 && E2(false);
        let t4 = e4 >= 480 && e4 < 640;
        x2(t4);
        let a4 = e4 >= 760;
        X.current !== a4 ? (X.current = a4, b2(!a4)) : t4 && b2(true);
      };
      e3();
      let t3 = requestAnimationFrame(() => p2(false)), a3 = new ResizeObserver(e3);
      return a3.observe(Y2), () => {
        a3.disconnect(), cancelAnimationFrame(t3);
      };
    }, [Y2]), (0, s.useEffect)(() => () => window.clearTimeout(V.current), []);
    let ee = (0, s.useRef)(null), [et, ea] = (0, s.useState)({});
    (0, s.useLayoutEffect)(() => {
      let e3 = ee.current;
      if (!e3) return;
      let t3 = () => ea(
        Object.fromEntries(
          Array.from(e3.children, (e4) => [
            e4.dataset.label ?? "",
            e4.offsetWidth
          ])
        )
      );
      t3();
      let a3 = new ResizeObserver(t3);
      return a3.observe(e3), () => a3.disconnect();
    }, []);
    let ei = f2 && !_2;
    function es() {
      b2(true), F2("Sidebar collapsed");
    }
    function en(e3, t3 = false) {
      t3 && J.current || (y2(e3), F2(`${R[e3].title} opened`), (t3 || ei) && (window.clearTimeout(V.current), V.current = window.setTimeout(
        () => t3 ? E2(false) : b2(true),
        200 * !h2
      )));
    }
    function er(e3, t3 = false) {
      if (!t3 || !J.current) {
        if (_2 && !t3) {
          b2(false), P2((t4) => ({ ...t4, [e3]: true })), F2("Sidebar expanded");
          return;
        }
        P2((t4) => ({ ...t4, [e3]: !t4[e3] }));
      }
    }
    let el = (0, d.d)("-100%"), eo = (0, c.G)(el, (e3) => {
      let t3 = U2.current?.offsetWidth || 288, a3 = "number" == typeof e3 ? e3 / t3 : e3.endsWith("%") ? parseFloat(e3) / 100 : parseFloat(e3) / t3;
      return Math.min(1, Math.max(0, 1 + (Number.isFinite(a3) ? a3 : -1)));
    }), ed = h2 ? O : { duration: A.T.duration.standard, ease: D(A.T.ease.enter) }, ec = {
      shown: { transition: { staggerChildren: h2 ? 0 : A.T.stagger.item } }
    };
    return (0, i.jsx)(u.o, {
      id: e2,
      children: (0, i.jsx)(r.Kq, {
        delayDuration: 250,
        skipDelayDuration: 300,
        children: (0, i.jsxs)("section", {
          ref: I2,
          className: M().shell,
          "aria-label": "Northline workspace",
          onKeyDown: (e3) => {
            "Escape" === e3.key && ei && !e3.defaultPrevented && (e3.preventDefault(), es());
          },
          children: [
            (0, i.jsx)(l.PY1.div, {
              className: M().slot,
              initial: false,
              animate: { width: f2 || _2 ? 64 : 240 },
              transition: h2 ? O : A.T.spring.smooth,
              children: (0, i.jsxs)(l.PY1.div, {
                id: Q,
                className: M().sidebar,
                initial: false,
                animate: { width: _2 ? 64 : 240 },
                transition: h2 ? O : A.T.spring.smooth,
                "data-collapsed": _2 || void 0,
                "data-floating": ei || void 0,
                children: [
                  (0, i.jsx)(q, { collapsed: _2, reduce: h2 }),
                  (0, i.jsx)(W, {
                    variant: "side",
                    baseId: e2,
                    collapsed: _2,
                    active: g2,
                    open: v2,
                    reduce: h2,
                    onSelect: (e3) => en(e3),
                    onGroup: (e3) => er(e3)
                  }),
                  (0, i.jsx)(H, { collapsed: _2, reduce: h2 })
                ]
              })
            }),
            (0, i.jsx)(m.N, {
              children: ei && (0, i.jsx)(
                l.PY1.div,
                {
                  className: `${M().scrim} ${M().floatScrim}`,
                  "aria-hidden": "true",
                  onClick: es,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: h2 ? O : {
                    duration: A.T.duration.standard,
                    ease: D(A.T.ease.standard)
                  }
                },
                "float-scrim"
              )
            }),
            (0, i.jsxs)("div", {
              className: M().main,
              children: [
                (0, i.jsxs)("header", {
                  className: M().topbar,
                  children: [
                    (0, i.jsx)(S.m, {
                      side: "bottom",
                      content: (0, i.jsxs)("span", {
                        className: M().shortcut,
                        children: [
                          _2 ? "Expand sidebar" : "Collapse sidebar",
                          (0, i.jsx)("kbd", { children: "[" })
                        ]
                      }),
                      children: (0, i.jsx)("button", {
                        type: "button",
                        className: `${M().iconButton} ${M().railToggle}`,
                        "aria-label": _2 ? "Expand sidebar" : "Collapse sidebar",
                        "aria-expanded": !_2,
                        "aria-controls": Q,
                        "aria-keyshortcuts": "[",
                        onClick: function() {
                          b2(!_2), F2(_2 ? "Sidebar expanded" : "Sidebar collapsed");
                        },
                        children: (0, i.jsx)(G, { collapsed: _2, reduce: h2 })
                      })
                    }),
                    (0, i.jsx)("button", {
                      ref: Z2,
                      type: "button",
                      className: `${M().iconButton} ${M().menuButton}`,
                      "aria-label": "Open navigation",
                      "aria-haspopup": "dialog",
                      "aria-expanded": z2,
                      "aria-keyshortcuts": "[",
                      onClick: () => E2(true),
                      children: (0, i.jsx)(G, { collapsed: false, reduce: h2 })
                    }),
                    (0, i.jsxs)("nav", {
                      className: M().crumbs,
                      "aria-label": "Breadcrumb",
                      children: [
                        (0, i.jsxs)("ol", {
                          children: [
                            (0, i.jsx)("li", {
                              className: M().crumbRoot,
                              children: "Northline"
                            }),
                            (0, i.jsx)(m.N, {
                              initial: false,
                              children: K.parent && (0, i.jsx)(
                                l.PY1.li,
                                {
                                  className: M().crumbParent,
                                  initial: { width: 0, opacity: 0 },
                                  animate: { width: "auto", opacity: 1 },
                                  exit: { width: 0, opacity: 0 },
                                  transition: h2 ? O : A.T.spring.morph,
                                  children: (0, i.jsx)(l.PY1.span, {
                                    className: M().crumbSwap,
                                    initial: false,
                                    animate: {
                                      width: et[K.parent] ?? "auto"
                                    },
                                    transition: h2 ? O : A.T.spring.morph,
                                    children: (0, i.jsx)(m.N, {
                                      mode: "popLayout",
                                      initial: false,
                                      children: (0, i.jsx)(
                                        l.PY1.span,
                                        {
                                          variants: L,
                                          initial: "hidden",
                                          animate: "shown",
                                          exit: "gone",
                                          transition: ed,
                                          children: K.parent
                                        },
                                        K.parent
                                      )
                                    })
                                  })
                                },
                                "parent"
                              )
                            }),
                            (0, i.jsx)("li", {
                              className: M().crumbCurrent,
                              "aria-current": "page",
                              children: (0, i.jsx)(m.N, {
                                mode: "popLayout",
                                initial: false,
                                children: (0, i.jsx)(
                                  l.PY1.span,
                                  {
                                    variants: L,
                                    initial: "hidden",
                                    animate: "shown",
                                    exit: "gone",
                                    transition: ed,
                                    children: K.title
                                  },
                                  g2
                                )
                              })
                            })
                          ]
                        }),
                        (0, i.jsx)("span", {
                          ref: ee,
                          className: M().crumbSizers,
                          "aria-hidden": "true",
                          children: $.map(
                            (e3) => (0, i.jsx)(
                              "span",
                              { "data-label": e3, children: e3 },
                              e3
                            )
                          )
                        })
                      ]
                    }),
                    (0, i.jsx)("div", {
                      className: M().team,
                      children: (0, i.jsx)(k.Z, {
                        members: K.team.map((e3) => C[e3]),
                        max: 3,
                        size: "sm",
                        label: "People on this page"
                      })
                    })
                  ]
                }),
                (0, i.jsxs)("div", {
                  className: M().content,
                  children: [
                    (0, i.jsx)("div", {
                      className: M().swap,
                      children: (0, i.jsx)(m.N, {
                        mode: "popLayout",
                        initial: false,
                        children: (0, i.jsxs)(
                          l.PY1.div,
                          {
                            className: M().intro,
                            variants: L,
                            initial: "hidden",
                            animate: "shown",
                            exit: "gone",
                            transition: ed,
                            children: [
                              (0, i.jsx)("h2", {
                                className: M().title,
                                children: K.title
                              }),
                              (0, i.jsx)("p", {
                                className: M().summary,
                                children: K.summary
                              })
                            ]
                          },
                          g2
                        )
                      })
                    }),
                    (0, i.jsx)("div", {
                      className: M().stats,
                      children: K.stats.map(
                        (e3, t3) => (0, i.jsx)(
                          "div",
                          {
                            className: M().stat,
                            children: (0, i.jsx)(w.q, {
                              value: e3.value,
                              label: e3.label,
                              suffix: e3.suffix
                            })
                          },
                          t3
                        )
                      )
                    }),
                    (0, i.jsx)("div", {
                      className: M().swap,
                      children: (0, i.jsx)(m.N, {
                        mode: "popLayout",
                        initial: false,
                        children: (0, i.jsxs)(
                          l.PY1.div,
                          {
                            className: M().listBlock,
                            initial: "hidden",
                            animate: "shown",
                            exit: "gone",
                            variants: ec,
                            children: [
                              (0, i.jsx)(l.PY1.h3, {
                                className: M().listTitle,
                                variants: L,
                                transition: ed,
                                children: K.list
                              }),
                              (0, i.jsx)("ul", {
                                className: M().rows,
                                role: "list",
                                children: K.rows.map(
                                  (e3) => (0, i.jsxs)(
                                    l.PY1.li,
                                    {
                                      className: M().row,
                                      variants: L,
                                      transition: ed,
                                      children: [
                                        (0, i.jsx)(N.e, {
                                          name: C[e3.person].name,
                                          src: C[e3.person].src,
                                          size: "sm"
                                        }),
                                        (0, i.jsxs)("span", {
                                          className: M().rowText,
                                          children: [
                                            (0, i.jsx)("strong", {
                                              children: e3.title
                                            }),
                                            (0, i.jsx)("span", {
                                              children: e3.detail
                                            })
                                          ]
                                        }),
                                        (0, i.jsx)(T.E, {
                                          tone: e3.tone,
                                          size: "sm",
                                          children: e3.status
                                        }),
                                        (0, i.jsx)("span", {
                                          className: M().when,
                                          children: e3.when
                                        })
                                      ]
                                    },
                                    e3.title
                                  )
                                )
                              })
                            ]
                          },
                          g2
                        )
                      })
                    })
                  ]
                }),
                (0, i.jsx)("p", {
                  className: M().srOnly,
                  role: "status",
                  "aria-live": "polite",
                  children: B2
                })
              ]
            }),
            (0, i.jsx)(n.bL, {
              open: z2,
              onOpenChange: E2,
              children: (0, i.jsx)(m.N, {
                children: z2 && Y2 && (0, i.jsxs)(n.ZL, {
                  forceMount: true,
                  container: Y2,
                  children: [
                    (0, i.jsx)(n.hJ, {
                      asChild: true,
                      forceMount: true,
                      children: (0, i.jsx)(l.PY1.div, {
                        className: M().scrim,
                        style: { opacity: eo }
                      })
                    }),
                    (0, i.jsx)(n.UC, {
                      asChild: true,
                      forceMount: true,
                      "aria-describedby": void 0,
                      onCloseAutoFocus: (e3) => {
                        e3.preventDefault(), Z2.current?.focus({ preventScroll: true });
                      },
                      onOpenAutoFocus: (e3) => {
                        let t3 = U2.current?.querySelector(
                          "[aria-current='page']"
                        );
                        t3 && !t3.closest("[inert]") && (e3.preventDefault(), t3.focus());
                      },
                      children: (0, i.jsxs)(l.PY1.div, {
                        ref: U2,
                        className: M().sheet,
                        style: { x: el },
                        initial: { x: "-100%" },
                        animate: { x: 0 },
                        exit: { x: "-100%" },
                        transition: h2 ? O : A.T.spring.smooth,
                        drag: !t2 && "x",
                        dragConstraints: { left: 0, right: 0 },
                        dragElastic: { left: 0.9, right: 0.04 },
                        dragMomentum: false,
                        onDragStart: () => {
                          J.current = true, U2.current?.setAttribute("data-dragging", "");
                        },
                        onDragEnd: (e3, t3) => {
                          U2.current?.removeAttribute("data-dragging"), window.setTimeout(() => {
                            J.current = false;
                          }, 0), (t3.offset.x < -72 || t3.velocity.x < -480) && E2(false);
                        },
                        children: [
                          (0, i.jsx)(n.hE, {
                            className: M().srOnly,
                            children: "Navigation"
                          }),
                          (0, i.jsxs)("div", {
                            className: M().sheetHead,
                            children: [
                              (0, i.jsx)(q, { collapsed: false, reduce: h2 }),
                              (0, i.jsx)(n.bm, {
                                asChild: true,
                                children: (0, i.jsx)("button", {
                                  type: "button",
                                  className: M().iconButton,
                                  "aria-label": "Close navigation",
                                  children: (0, i.jsx)(j.A, {
                                    size: 18,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  })
                                })
                              })
                            ]
                          }),
                          (0, i.jsx)(W, {
                            variant: "sheet",
                            baseId: e2,
                            collapsed: false,
                            active: g2,
                            open: v2,
                            reduce: h2,
                            onSelect: (e3) => en(e3, true),
                            onGroup: (e3) => er(e3, true)
                          }),
                          (0, i.jsx)(H, { collapsed: false, reduce: h2 })
                        ]
                      })
                    })
                  ]
                })
              })
            })
          ]
        })
      })
    });
  }
  let Z = U;
}

__m(__module,__exports,__require);
});
A.reg(61665, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => n });
  var s = t(51811);
  let i = {
    name: "inbox",
    size: 24,
    node: [
      [
        "polyline",
        { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }
      ],
      [
        "path",
        {
          d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
          key: "oot6mr"
        }
      ]
    ]
  };
  i.node;
  let n = (0, s.A)(i);
}

__m(__module,__exports,__require);
});
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
A.reg(84824, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "flask-conical",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
          key: "18mbvz"
        }
      ],
      ["path", { d: "M6.453 15h11.094", key: "3shlmq" }],
      ["path", { d: "M8.5 2h7", key: "csnxdl" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(85964, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var i = a(51811);
  let s = {
    name: "message-square-text",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
          key: "18887p"
        }
      ],
      ["path", { d: "M7 11h10", key: "1twpyw" }],
      ["path", { d: "M7 15h6", key: "d9of3u" }],
      ["path", { d: "M7 7h8", key: "af5zfr" }]
    ]
  };
  s.node;
  let n = (0, i.A)(s);
}

__m(__module,__exports,__require);
});
A.regCss(86124, ".sidebar-rail_shell__e3PoH{--rail:color-mix(in oklab,var(--surface-muted) 55%,var(--surface));--row-hover:color-mix(in oklab,var(--foreground) 4.5%,transparent);--row-active:color-mix(in oklab,var(--foreground) 7%,transparent);position:relative;display:flex;width:min(100%,1080px);height:640px;min-width:0;overflow:hidden;isolation:isolate;border:1px solid var(--border);border-radius:16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);text-align:left;container:shell/inline-size}:root[data-theme=dark] .sidebar-rail_shell__e3PoH{--rail:color-mix(in oklab,var(--background) 60%,var(--surface));--row-hover:color-mix(in oklab,var(--foreground) 5%,transparent);--row-active:color-mix(in oklab,var(--foreground) 8%,transparent)}.sidebar-rail_slot__IepnD{position:relative;z-index:3;flex:none;height:100%}.sidebar-rail_sidebar__QhNwe{position:absolute;top:0;bottom:0;left:0;display:flex;min-width:0;flex-direction:column;overflow:hidden;background:var(--rail);transition:box-shadow var(--duration-standard) var(--ease-standard)}.sidebar-rail_sidebar__QhNwe[data-floating]{box-shadow:var(--shadow-floating)}.sidebar-rail_sidebar__QhNwe:after{content:\"\";position:absolute;top:0;right:0;bottom:0;width:1px;background:var(--border);pointer-events:none}.sidebar-rail_brand__mh_4l,.sidebar-rail_profile__5SSuP{display:flex;flex:none;align-items:center;gap:12px;min-width:0;padding:0 12px 0 18px;white-space:nowrap}.sidebar-rail_brand__mh_4l{height:52px}.sidebar-rail_profile__5SSuP{height:52px;border-top:1px solid var(--border-subtle)}.sidebar-rail_mark__8tQTt{display:grid;width:28px;height:28px;flex:none;place-items:center;border-radius:9px;background:var(--accent);color:var(--accent-foreground);font-family:var(--font-display);font-size:15px;font-weight:500;letter-spacing:0;line-height:1}.sidebar-rail_mark__8tQTt[data-logo]{background:#17181b;color:#fff;box-shadow:inset 0 0 0 1px rgb(255 255 255/.12)}.sidebar-rail_mark__8tQTt[data-logo] svg{width:60%;height:60%}[data-theme=dark] .sidebar-rail_mark__8tQTt[data-logo]{background:#f4f4f5;color:#17181b;box-shadow:none}.sidebar-rail_stack__kqA1i{display:grid;min-width:0;gap:2px;line-height:1.25}.sidebar-rail_stack__kqA1i strong{overflow:hidden;font-size:13px;font-weight:500;text-overflow:clip}.sidebar-rail_stack__kqA1i span{overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);text-overflow:clip}.sidebar-rail_nav__5smcu{display:flex;flex:1;min-height:0;flex-direction:column;overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain;padding:4px 12px 8px;scrollbar-width:none}.sidebar-rail_nav__5smcu::-webkit-scrollbar{display:none}.sidebar-rail_section__lGkBo+.sidebar-rail_section__lGkBo{margin-top:4px}.sidebar-rail_heading__L4cZk{position:relative;overflow:hidden}.sidebar-rail_headingText__FNY1_{position:absolute;bottom:7px;left:12px;color:var(--text-muted);font-size:var(--text-xs);font-weight:500;line-height:1;white-space:nowrap}.sidebar-rail_divider__5k3yw{position:absolute;top:8px;right:8px;left:8px;height:1px;background:var(--border)}.sidebar-rail_list__2AzF4{display:grid;grid-template-columns:minmax(0,1fr);gap:1px;margin:0;padding:0;list-style:none}.sidebar-rail_footerList__9nXff{margin-top:auto;padding-top:8px}.sidebar-rail_item__5eeoP{position:relative;isolation:isolate;display:flex;width:100%;height:32px;align-items:center;gap:10px;border:0;border-radius:8px;padding:0 10px 0 12px;background:transparent;color:var(--text-secondary);font:inherit;font-size:13px;letter-spacing:var(--tracking-body);line-height:1;text-align:left;white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}.sidebar-rail_highlight__Z2akP{position:absolute;inset:0;z-index:-1;background:var(--row-active)}.sidebar-rail_icon__8EZnR{flex:none;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}.sidebar-rail_label__UuXqU{display:block;flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:clip}.sidebar-rail_count__IhACc{flex:none;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}.sidebar-rail_dot__klprM{position:absolute;top:calc(50% - 10px);left:25px;width:6px;height:6px;border-radius:var(--radius-pill);background:var(--accent);pointer-events:none}.sidebar-rail_chevron__IcZxB{display:grid;flex:none;place-items:center;color:var(--text-muted)}.sidebar-rail_lit__H_2Ht{color:var(--foreground)}.sidebar-rail_lit__H_2Ht .sidebar-rail_icon__8EZnR{color:var(--accent)}.sidebar-rail_nested__Mn_34{width:calc(100% - 28px);height:30px;margin-left:28px;padding-left:10px}.sidebar-rail_children__k0ADF{position:relative;display:grid;grid-template-columns:minmax(0,1fr);gap:1px;margin:0;padding:0;list-style:none}.sidebar-rail_children__k0ADF:before{content:\"\";position:absolute;top:4px;bottom:8px;left:20px;width:1px;background:var(--border)}.sidebar-rail_children__k0ADF>li:first-child{margin-top:2px}.sidebar-rail_children__k0ADF>li:last-child{margin-bottom:4px}.sidebar-rail_tip__uhZgb{z-index:60;display:flex;align-items:center;gap:8px;border-radius:var(--radius-control);padding:7px 12px;background:var(--foreground);color:var(--background);box-shadow:var(--shadow-raised);font-family:var(--font-body);font-size:13px;font-weight:500;letter-spacing:var(--tracking-body);line-height:1.3;white-space:nowrap;transition:opacity var(--duration-fast) var(--ease-enter),transform var(--duration-fast) var(--ease-enter)}.sidebar-rail_tipNote__of_Rd{color:color-mix(in oklab,var(--background) 62%,var(--foreground));font-weight:400}.sidebar-rail_tip__uhZgb[data-state=closed]{opacity:0;transform:translateX(-2px);transition-duration:.11s;animation:sidebar-rail_tip-exit__k7AWF .11s linear both}@keyframes sidebar-rail_tip-exit__k7AWF{to{--tip-exit:1}}.sidebar-rail_shortcut__2JTK0{display:inline-flex;align-items:center;gap:10px;white-space:nowrap}.sidebar-rail_shortcut__2JTK0 kbd{display:inline-grid;min-width:20px;height:20px;place-items:center;border:1px solid color-mix(in oklab,var(--background) 30%,var(--foreground));border-radius:6px;padding:0 5px;font-family:var(--font-body);font-size:var(--text-xs);line-height:1}.sidebar-rail_main__TtDSq{position:relative;display:flex;flex:1;min-width:0;flex-direction:column;background:var(--surface);container:main/inline-size}.sidebar-rail_topbar__pRL_9{display:flex;height:52px;flex:none;align-items:center;gap:8px;border-bottom:1px solid var(--border-subtle);padding:0 16px 0 12px}.sidebar-rail_iconButton__EUQIO{display:inline-grid;width:32px;height:32px;flex:none;place-items:center;border:0;border-radius:8px;padding:0;background:transparent;color:var(--text-secondary);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}.sidebar-rail_menuButton__gOx38{display:none}.sidebar-rail_crumbs__8Uwgn{flex:1;min-width:0;overflow:hidden;font-size:13px}.sidebar-rail_crumbs__8Uwgn ol{display:flex;min-width:0;align-items:center;margin:0;padding:0;color:var(--text-muted);list-style:none;white-space:nowrap}.sidebar-rail_crumbs__8Uwgn li{position:relative;display:flex;flex:none;align-items:center}.sidebar-rail_crumbs__8Uwgn li+li:before{content:\"/\";margin:0 8px;color:var(--border-strong)}.sidebar-rail_crumbParent__FK_Vp{overflow:hidden}.sidebar-rail_crumbSwap__uoNoN{position:relative;display:inline-flex;overflow:hidden}.sidebar-rail_crumbSizers___1xjU{position:absolute;display:flex;visibility:hidden;pointer-events:none;white-space:nowrap}.sidebar-rail_crumbSizers___1xjU>span{flex:none}.sidebar-rail_crumbs__8Uwgn .sidebar-rail_crumbCurrent__TtfzS{min-width:0;flex:0 1 auto;color:var(--foreground)}.sidebar-rail_crumbCurrent__TtfzS>span{min-width:0;overflow:hidden;text-overflow:ellipsis}.sidebar-rail_team__PxLw4{display:flex;flex:none}.sidebar-rail_content__47CB5{flex:1;min-height:0;overflow-x:hidden;overflow-y:auto;padding:24px 28px 28px;container:content/inline-size}.sidebar-rail_swap__FrVRT{position:relative}.sidebar-rail_title__Qfd1N{margin:0;font-family:var(--font-body);font-size:var(--text-xl);font-weight:500;letter-spacing:var(--tracking-body);line-height:1.25;text-wrap:balance}.sidebar-rail_summary__E5Cbr{max-width:60ch;margin:4px 0 0;color:var(--text-secondary);font-size:13px;line-height:1.5;text-wrap:pretty}.sidebar-rail_stats__zETHR{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:20px;border:1px solid var(--border);border-radius:12px}.sidebar-rail_stat__me_yy{display:flex;min-width:0;padding:14px 16px}.sidebar-rail_stat__me_yy+.sidebar-rail_stat__me_yy{border-left:1px solid var(--border)}.sidebar-rail_stat__me_yy>span{flex:1;justify-content:space-between;font-size:var(--text-xl)}.sidebar-rail_listBlock__o3eqO{margin-top:24px}.sidebar-rail_listTitle__VsPMr{margin:0 0 8px;font-size:var(--text-sm);font-weight:500;letter-spacing:var(--tracking-body);line-height:1.4}.sidebar-rail_rows__GeSrs{margin:0;padding:0;list-style:none}.sidebar-rail_row__n6g0A{display:grid;min-height:52px;grid-template-columns:28px minmax(0,1fr) auto 76px;align-items:center;gap:12px;border-top:1px solid var(--border-subtle)}.sidebar-rail_row__n6g0A:last-child{border-bottom:1px solid var(--border-subtle)}.sidebar-rail_rowText__bmDjl{display:grid;min-width:0;gap:2px}.sidebar-rail_rowText__bmDjl strong{font-size:13px;font-weight:500}.sidebar-rail_rowText__bmDjl span,.sidebar-rail_rowText__bmDjl strong{overflow:hidden;line-height:1.35;text-overflow:ellipsis;white-space:nowrap}.sidebar-rail_rowText__bmDjl span,.sidebar-rail_when__ujAO0{color:var(--text-muted);font-size:var(--text-xs)}.sidebar-rail_when__ujAO0{font-variant-numeric:tabular-nums;text-align:right;white-space:nowrap}.sidebar-rail_scrim__occct{position:absolute;inset:0;z-index:20;background:oklch(0 0 0/.3);-webkit-tap-highlight-color:transparent}.sidebar-rail_floatScrim___x7Jp{z-index:2;cursor:pointer}:root[data-theme=dark] .sidebar-rail_scrim__occct{background:oklch(0 0 0/.5)}.sidebar-rail_sheet__D_tBC{position:absolute;top:0;bottom:0;left:0;z-index:21;display:flex;width:min(288px,calc(100% - 40px));flex-direction:column;padding:env(safe-area-inset-top,0) 0 env(safe-area-inset-bottom,0) env(safe-area-inset-left,0);overscroll-behavior:contain;touch-action:pan-y;border-right:1px solid var(--border);border-radius:0 16px 16px 0;background:var(--rail);box-shadow:var(--shadow-floating);outline:none}.sidebar-rail_sheetHead__uYNtZ{display:flex;flex:none;align-items:center;padding-right:12px}.sidebar-rail_sheetHead__uYNtZ .sidebar-rail_brand__mh_4l{flex:1}.sidebar-rail_srOnly__Vl0z6{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@media (hover:hover) and (pointer:fine){.sidebar-rail_item__5eeoP:hover{background:var(--row-hover);color:var(--foreground)}}@media (hover:hover) and (pointer:fine){.sidebar-rail_item__5eeoP:hover .sidebar-rail_icon__8EZnR{color:var(--text-secondary)}}@media (hover:hover) and (pointer:fine){.sidebar-rail_lit__H_2Ht:hover{background:transparent}}@media (hover:hover) and (pointer:fine){.sidebar-rail_lit__H_2Ht:hover .sidebar-rail_icon__8EZnR{color:var(--accent)}}@media (hover:hover) and (pointer:fine){.sidebar-rail_iconButton__EUQIO:hover{background:var(--surface-muted);color:var(--foreground)}}.sidebar-rail_item__5eeoP:active{background:var(--row-active)}.sidebar-rail_sheet__D_tBC[data-dragging] .sidebar-rail_item__5eeoP:active{background:transparent}.sidebar-rail_iconButton__EUQIO:active{background:color-mix(in oklab,var(--foreground) 9%,transparent);color:var(--foreground)}@media (max-width:640px){.sidebar-rail_shell__e3PoH{border-radius:14px}}@media (pointer:coarse){.sidebar-rail_item__5eeoP,.sidebar-rail_nested__Mn_34{height:40px}}@media (pointer:coarse){.sidebar-rail_iconButton__EUQIO{width:40px;height:40px}}@media (pointer:coarse){.sidebar-rail_topbar__pRL_9{padding-left:8px}}@media (prefers-reduced-motion:reduce){.sidebar-rail_iconButton__EUQIO,.sidebar-rail_icon__8EZnR,.sidebar-rail_item__5eeoP,.sidebar-rail_sidebar__QhNwe{transition:none}}@media (prefers-reduced-motion:reduce){.sidebar-rail_tip__uhZgb,.sidebar-rail_tip__uhZgb[data-state=closed]{transform:none;transition:opacity 90ms linear}}", {"shell":"sidebar-rail_shell__e3PoH","slot":"sidebar-rail_slot__IepnD","sidebar":"sidebar-rail_sidebar__QhNwe","brand":"sidebar-rail_brand__mh_4l","profile":"sidebar-rail_profile__5SSuP","mark":"sidebar-rail_mark__8tQTt","stack":"sidebar-rail_stack__kqA1i","nav":"sidebar-rail_nav__5smcu","section":"sidebar-rail_section__lGkBo","heading":"sidebar-rail_heading__L4cZk","headingText":"sidebar-rail_headingText__FNY1_","divider":"sidebar-rail_divider__5k3yw","list":"sidebar-rail_list__2AzF4","footerList":"sidebar-rail_footerList__9nXff","item":"sidebar-rail_item__5eeoP","highlight":"sidebar-rail_highlight__Z2akP","icon":"sidebar-rail_icon__8EZnR","label":"sidebar-rail_label__UuXqU","count":"sidebar-rail_count__IhACc","dot":"sidebar-rail_dot__klprM","chevron":"sidebar-rail_chevron__IcZxB","lit":"sidebar-rail_lit__H_2Ht","nested":"sidebar-rail_nested__Mn_34","children":"sidebar-rail_children__k0ADF","tip":"sidebar-rail_tip__uhZgb","tipNote":"sidebar-rail_tipNote__of_Rd","tip-exit":"sidebar-rail_tip-exit__k7AWF","shortcut":"sidebar-rail_shortcut__2JTK0","main":"sidebar-rail_main__TtDSq","topbar":"sidebar-rail_topbar__pRL_9","iconButton":"sidebar-rail_iconButton__EUQIO","menuButton":"sidebar-rail_menuButton__gOx38","crumbs":"sidebar-rail_crumbs__8Uwgn","crumbParent":"sidebar-rail_crumbParent__FK_Vp","crumbSwap":"sidebar-rail_crumbSwap__uoNoN","crumbSizers":"sidebar-rail_crumbSizers___1xjU","crumbCurrent":"sidebar-rail_crumbCurrent__TtfzS","team":"sidebar-rail_team__PxLw4","content":"sidebar-rail_content__47CB5","swap":"sidebar-rail_swap__FrVRT","title":"sidebar-rail_title__Qfd1N","summary":"sidebar-rail_summary__E5Cbr","stats":"sidebar-rail_stats__zETHR","stat":"sidebar-rail_stat__me_yy","listBlock":"sidebar-rail_listBlock__o3eqO","listTitle":"sidebar-rail_listTitle__VsPMr","rows":"sidebar-rail_rows__GeSrs","row":"sidebar-rail_row__n6g0A","rowText":"sidebar-rail_rowText__bmDjl","when":"sidebar-rail_when__ujAO0","scrim":"sidebar-rail_scrim__occct","floatScrim":"sidebar-rail_floatScrim___x7Jp","sheet":"sidebar-rail_sheet__D_tBC","sheetHead":"sidebar-rail_sheetHead__uYNtZ","srOnly":"sidebar-rail_srOnly__Vl0z6","railToggle":"sidebar-rail_railToggle__8FHeo","crumbRoot":"sidebar-rail_crumbRoot__mwmRg"});
A.reg(88074, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let a = {
    name: "settings",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
          key: "1i5ecw"
        }
      ],
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
    ]
  };
  a.node;
  let i = (0, r.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(90034, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { E: () => v });
  var n = a(95155), r = a(12115), i = a(79196), s = a(25354), l = a(18310), o = a(28245), d = a(92171), u = a(80642), c = a(7770), p = a(22346), _ = a.n(p);
  let m = { duration: c.T.duration.fast, ease: [...c.T.ease.standard] }, f = { opacity: 0, y: "0.3em", filter: `blur(${c.T.blur.soft}px)` }, y = {
    opacity: 0,
    y: "-0.3em",
    filter: `blur(${c.T.blur.subtle}px)`,
    transition: m
  }, b = { opacity: 0, scale: 0.6, filter: `blur(${c.T.blur.subtle}px)` }, h = { opacity: 1, y: "0em", scale: 1, filter: "blur(0px)" }, g = { opacity: 0, transition: { duration: c.T.duration.instant } };
  function x(e2) {
    let t2 = (0, i.tF)();
    return (0, n.jsx)(s.PY1.span, {
      ...e2,
      "aria-hidden": !t2 || e2["aria-hidden"]
    });
  }
  function v({
    tone: e2 = "neutral",
    size: t2 = "md",
    icon: a2,
    dot: i2 = false,
    color: p2,
    outline: j = false,
    pill: k = false,
    className: T,
    children: N,
    ...w
  }) {
    let M = (0, l.I)(), A = "string" == typeof N || "number" == typeof N ? String(N) : null, E = a2 ? (function(e3) {
      if (!(0, r.isValidElement)(e3)) return "icon";
      let t3 = e3.type;
      return "string" == typeof t3 ? t3 : t3.displayName ?? t3.name ?? "icon";
    })(a2) : "", z = (0, r.useRef)(null), S = (0, r.useRef)(null), $ = (0, o.d)("auto"), R = (0, r.useRef)(0);
    (0, r.useLayoutEffect)(() => {
      R.current = performance.now();
    }, [A, E]), (0, r.useEffect)(() => {
      let e3, t3, a3 = S.current;
      if (!a3 || "u" < typeof ResizeObserver) return;
      let n2 = () => {
        $.jump("auto"), z.current && (z.current.style.width = "auto");
      }, r2 = new ResizeObserver(([r3]) => {
        if (!r3) return;
        let i3 = r3.borderBoxSize?.[0]?.inlineSize ?? a3.offsetWidth, s2 = $.get(), l2 = "number" == typeof s2 ? s2 : e3;
        if (e3 = i3, t3?.stop(), M || void 0 === l2 || l2 === i3 || performance.now() - R.current > 120)
          return n2();
        z.current && (z.current.style.width = `${l2}px`), t3 = (0, d.i)($, [l2, i3], {
          ...c.T.spring.morph,
          onComplete: n2
        });
      });
      return r2.observe(a3), () => {
        r2.disconnect(), t3?.stop();
      };
    }, [$, M]);
    let I = M ? { duration: c.T.duration.instant } : { duration: c.T.duration.standard, ease: [...c.T.ease.enter] }, P = a2 ? _().withIcon : i2 ? _().withDot : void 0, C = [
      _().badge,
      _()[e2],
      p2 ? _()[p2] : void 0,
      _()[t2],
      P,
      j ? _().outline : void 0,
      k ? _().pill : void 0,
      T
    ].filter(Boolean).join(" ");
    return (0, n.jsx)("span", {
      ...w,
      className: C,
      children: (0, n.jsx)(s.PY1.span, {
        ref: z,
        className: _().body,
        style: { width: $ },
        children: (0, n.jsxs)("span", {
          ref: S,
          className: _().content,
          children: [
            !a2 && i2 ? (0, n.jsx)("span", {
              className: _().icon,
              "aria-hidden": "true",
              children: (0, n.jsx)("span", { className: _().dot })
            }) : null,
            a2 ? (0, n.jsx)("span", {
              className: _().icon,
              "aria-hidden": "true",
              children: (0, n.jsx)(u.N, {
                mode: "popLayout",
                initial: false,
                children: (0, n.jsx)(
                  x,
                  {
                    className: _().glyph,
                    initial: M ? { opacity: 0 } : b,
                    animate: h,
                    exit: M ? g : { ...b, transition: m },
                    transition: M ? I : c.T.spring.snappy,
                    children: a2
                  },
                  E
                )
              })
            }) : null,
            null === A ? N : (0, n.jsx)("span", {
              className: _().label,
              children: (0, n.jsx)(u.N, {
                mode: "popLayout",
                initial: false,
                children: (0, n.jsx)(
                  x,
                  {
                    className: _().text,
                    initial: M ? { opacity: 0 } : f,
                    animate: h,
                    exit: M ? g : y,
                    transition: I,
                    children: A
                  },
                  A
                )
              })
            })
          ]
        })
      })
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(94910, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => n });
  var i = t(51811);
  let r = {
    name: "route",
    size: 24,
    node: [
      ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
      [
        "path",
        {
          d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",
          key: "1d8sl"
        }
      ],
      ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]
    ]
  };
  r.node;
  let n = (0, i.A)(r);
}

__m(__module,__exports,__require);
});
A.cssFor("sidebar-rail", [22346,24202,86124]);
A.item("sidebar-rail", {entry:52212, export:"SidebarRail", kind:"block", tier:"pro", unresolved:[]});
})();