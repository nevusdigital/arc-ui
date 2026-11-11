/* share-access (pro component) */
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
A.reg(5937, function(__module,__exports,__require){
"use strict";
function __m(e, a, i) {
  "use strict";
  i.d(a, { A: () => n });
  var s = i(51811);
  let t = {
    name: "share-2",
    size: 24,
    node: [
      ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
      ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
      ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
      [
        "line",
        { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }
      ],
      [
        "line",
        { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }
      ]
    ]
  };
  t.node;
  let n = (0, s.A)(t);
}

__m(__module,__exports,__require);
});
A.regCss(41132, ".root{display:grid;gap:20px;width:100%;max-width:440px;padding:20px;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface-raised);box-shadow:var(--shadow-floating);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n@media (max-width:420px){.root{gap:18px;padding:16px;border-radius:22px}\n.title{margin:0;overflow:hidden;font-size:var(--text-base);font-weight:500;line-height:var(--leading-body);text-overflow:ellipsis;white-space:nowrap}\n.inviteArea{display:grid}\n.fieldWrap{position:relative;z-index:2}\n.field{display:flex;flex-wrap:wrap;align-items:center;gap:6px;min-height:var(--control-height-md);padding:6px 6px 6px 8px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);cursor:text;transition:border-color var(--duration-fast) var(--ease-standard)}\n.fieldFocused,.field:hover{border-color:var(--border-strong)}\n.fieldInvalid{border-color:color-mix(in oklab,var(--danger) 55%,var(--border))}\n.input{flex:1 1 64px;min-width:64px;height:30px;padding:0 6px;border:0;background:transparent;color:var(--foreground);font:inherit}\n.input::placeholder{color:var(--text-muted)}\n.chip{display:inline-flex;align-items:center;gap:6px;max-width:100%;height:30px;padding:0 4px 0 5px;border-radius:var(--radius-pill);background:var(--surface-muted);color:var(--foreground);transition:background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)}\n.chipInvalid{padding-left:7px;background:color-mix(in oklab,var(--danger) 10%,transparent);color:var(--danger)}\n.chipArmed{box-shadow:inset 0 0 0 1px var(--border-strong);background:var(--surface)}\n.chipAlert{flex:none}\n.chipText{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.chipRemove{display:grid;flex:none;place-items:center;width:22px;height:22px;padding:0;border:0;border-radius:50%;background:transparent;color:currentColor;opacity:.6;cursor:pointer;transition:opacity var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.chipRemove:focus-visible,.chipRemove:hover{opacity:1;background:color-mix(in oklab,currentColor 10%,transparent)}\n.suggestions{position:absolute;top:calc(100% + 6px);right:0;left:0;margin:0;padding:6px;border:1px solid var(--border);border-radius:20px;background:var(--surface-raised);box-shadow:var(--shadow-floating);list-style:none;transform-origin:50% 0}\n.option{position:relative;display:flex;align-items:center;gap:10px;padding:7px 8px;border-radius:14px;cursor:pointer}\n.option>:not(.optionHighlight){position:relative}\n.optionHighlight{position:absolute;inset:0;border-radius:inherit;background:var(--surface-muted)}\n.message{margin:0;overflow:hidden;color:var(--text-secondary);font-size:var(--text-xs)}\n.messageError{color:var(--danger)}\n.messageInner{display:block;padding:8px 4px 0}\n.inviteRowWrap{overflow:hidden}\n.inviteRow{display:flex;align-items:center;justify-content:space-between;gap:12px;padding-top:12px}\n.inviteRole{margin-left:-4px}\n.inviteAs{color:var(--text-muted)}\n.section{display:grid;gap:6px}\n.sectionTitle{display:flex;align-items:baseline;gap:6px;margin:0;color:var(--text-secondary);font-size:var(--text-sm);font-weight:500}\n.count{position:relative;display:inline-flex;overflow:hidden;color:var(--text-muted);font-weight:400;font-variant-numeric:tabular-nums}\n.people{display:grid;margin:0 -10px;padding:0;list-style:none}\n.personWrap{overflow:hidden}\n.person{display:flex;align-items:center;gap:12px;min-height:52px;padding:8px 6px 8px 10px;border-radius:16px;transition:background-color 1.2s var(--ease-standard)}\n@media (prefers-reduced-motion:reduce){.chevron,.person{transition:none}\n.fresh{background:var(--accent-subtle);transition-duration:0s}\n.personText{display:grid;flex:1;min-width:0}\n.personMeta,.personName{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.personName{font-weight:500}\n.personMeta{color:var(--text-muted);font-size:var(--text-xs)}\n.you{color:var(--text-muted);font-weight:400}\n.owner{padding-right:10px;color:var(--text-muted)}\n.face{position:relative;display:inline-grid;flex:none;place-items:center;overflow:hidden;border-radius:50%;background:var(--surface-muted);color:var(--text-secondary);font-weight:500;line-height:1}\n.photo{object-fit:cover}\n.undoWrap{overflow:hidden}\n.undo{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:4px;padding:8px 6px 8px 12px;border-radius:14px;background:var(--surface-muted);color:var(--text-secondary)}\n.undoText{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.link{flex:none;height:28px;padding:0 10px;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--foreground);font:inherit;font-weight:500;cursor:pointer}\n.link:focus-visible,.link:hover{background:var(--surface)}\n.general{position:relative;display:flex;flex-wrap:wrap;align-items:center;gap:12px;min-height:52px}\n.general{row-gap:0}\n.generalIcon{display:grid;flex:none;place-items:center;width:32px;height:32px;color:var(--text-secondary)}\n.iconSwap{display:grid;grid-area:1/1}\n.generalText{display:grid;justify-items:start;flex:1;min-width:0;padding-right:116px}\n.generalText{padding-right:0}\n.menuTrigger.accessTrigger{margin:-4px 0 0 -10px;color:var(--foreground);font-weight:500}\n.menuTrigger{position:relative;display:inline-flex;flex:none;align-items:center;gap:4px;height:32px;padding:0 8px 0 10px;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);font:inherit;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.menuTrigger:focus-visible,.menuTrigger:hover,.menuTrigger[data-state=open]{background:var(--surface-muted);color:var(--foreground)}\n.menuTrigger[data-state=open] .chevron{rotate:180deg}\n.generalHint{position:relative;display:grid;width:100%;color:var(--text-muted);font-size:var(--text-xs)}\n.generalHintText{grid-area:1/1}\n.linkRole{position:absolute;top:10px;right:-6px;display:block;overflow:hidden}\n.linkRole{position:static;flex-basis:100%;margin-left:34px}\n.linkRoleInner{display:block}\n.linkRoleInner{padding-top:4px}\n.chevron{flex:none;color:var(--text-muted);transition:rotate var(--duration-standard) var(--ease-standard)}\n.morph{position:relative;display:inline-block;height:20px;overflow:hidden;white-space:nowrap}\n.morphMeasure{position:absolute;top:0;left:0;visibility:hidden;white-space:nowrap}\n.morphText{display:block;line-height:20px;white-space:nowrap}\n.menu{z-index:70;min-width:212px;padding:6px;border:1px solid var(--border);border-radius:20px;background:var(--surface-raised);box-shadow:var(--shadow-floating);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);transform-origin:var(--radix-dropdown-menu-content-transform-origin)}\n.menuItem{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:40px;padding:6px 10px;border-radius:14px;cursor:pointer;user-select:none;transition:background-color var(--duration-instant) var(--ease-standard)}\n.menuItem[data-highlighted]{background:var(--surface-muted)}\n.menuText{display:grid;line-height:1.3}\n.menuHint{color:var(--text-muted);font-size:var(--text-xs)}\n.menuCheck{display:grid;color:var(--foreground)}\n.menuSeparator{height:1px;margin:6px 4px;background:var(--border)}\n.menuDanger{color:var(--danger)}\n.footer{display:flex;align-items:center;justify-content:space-between;gap:12px}\n.primary,.secondary{display:inline-grid;place-items:center;height:var(--control-height-sm);padding:0 16px;border-radius:var(--radius-pill);font:inherit;font-weight:500;white-space:nowrap;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.primary{border:0;background:var(--foreground);color:var(--background)}\n.primary:hover:not(:disabled){background:color-mix(in oklab,var(--foreground) 86%,var(--background))}\n.primary:disabled{opacity:.35;cursor:default}\n.primary:active:not(:disabled),.secondary:active{transform:scale(.97)}\n.secondary{border:1px solid var(--border);background:var(--surface);color:var(--foreground)}\n.secondary:hover{background:var(--surface-muted)}\n.secondaryFailed{color:var(--danger)}\n.stack{display:grid;place-items:center}\n.stack>*{grid-area:1/1}\n.hidden{visibility:hidden}\n.copyLabel{display:inline-flex;align-items:center;gap:6px}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"root":"root","title":"title","inviteArea":"inviteArea","fieldWrap":"fieldWrap","field":"field","fieldFocused":"fieldFocused","fieldInvalid":"fieldInvalid","input":"input","chip":"chip","chipInvalid":"chipInvalid","chipArmed":"chipArmed","chipAlert":"chipAlert","chipText":"chipText","chipRemove":"chipRemove","suggestions":"suggestions","option":"option","optionHighlight":"optionHighlight","message":"message","messageError":"messageError","messageInner":"messageInner","inviteRowWrap":"inviteRowWrap","inviteRow":"inviteRow","inviteRole":"inviteRole","inviteAs":"inviteAs","section":"section","sectionTitle":"sectionTitle","count":"count","people":"people","personWrap":"personWrap","person":"person","chevron":"chevron","fresh":"fresh","personText":"personText","personMeta":"personMeta","personName":"personName","you":"you","owner":"owner","face":"face","photo":"photo","undoWrap":"undoWrap","undo":"undo","undoText":"undoText","link":"link","general":"general","generalIcon":"generalIcon","iconSwap":"iconSwap","generalText":"generalText","menuTrigger":"menuTrigger","accessTrigger":"accessTrigger","generalHint":"generalHint","generalHintText":"generalHintText","linkRole":"linkRole","linkRoleInner":"linkRoleInner","morph":"morph","morphMeasure":"morphMeasure","morphText":"morphText","menu":"menu","menuItem":"menuItem","menuText":"menuText","menuHint":"menuHint","menuCheck":"menuCheck","menuSeparator":"menuSeparator","menuDanger":"menuDanger","footer":"footer","primary":"primary","secondary":"secondary","secondaryFailed":"secondaryFailed","stack":"stack","hidden":"hidden","copyLabel":"copyLabel","srOnly":"srOnly"});
A.reg(50626, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var r = n(51811);
  let o = {
    name: "globe",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      [
        "path",
        { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }
      ],
      ["path", { d: "M2 12h20", key: "9i4pu4" }]
    ]
  };
  o.node;
  let a = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(51128, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let o = {
    name: "link-2",
    size: 24,
    node: [
      ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
      ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
      ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
    ]
  };
  o.node;
  let i = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(70237, function(__module,__exports,__require){
"use strict";
function __m(e, a, i) {
  "use strict";
  i.r(a), i.d(a, { ShareAccessDemo: () => F, default: () => q });
  var s = i(95155), t = i(12115), n = i(18310), r = i(80642), l = i(25354), o = i(36483), c = i(5937), d = i(67752), h = i(7770), p = i(2520), m = i(57793), u = i(28245), g = i(92171), y = i(12363), _ = i(64577), x = i(50626), v = i(5736), f = i(35484), w = i(9005), j = i(51128), k = i(41132), b = i.n(k), N = i(55665);
  let A = [
    { value: "viewer", label: "Can view", hint: "Read only" },
    { value: "commenter", label: "Can comment", hint: "Suggest and discuss" },
    { value: "editor", label: "Can edit", hint: "Make any change" }
  ], C = (e2) => A.find((a2) => a2.value === e2).label, T = [
    {
      value: "restricted",
      label: "Restricted",
      hint: "Only people with access can open"
    },
    {
      value: "link",
      label: "Anyone with the link",
      hint: "No sign in needed"
    }
  ], S = /^[^\s@<>(),;:"]+@[^\s@<>(),;:"]+\.[a-z]{2,}$/i, R = [...h.T.ease.standard];
  function M({ contact: e2, size: a2 }) {
    let [i2, n2] = (0, t.useState)();
    return (0, s.jsxs)("span", {
      className: b().face,
      style: { width: a2, height: a2, fontSize: 0.36 * a2 },
      "aria-hidden": "true",
      children: [
        (0, s.jsx)("span", {
          children: (e2.name ?? e2.email).replace(/@.*/, "").split(/[\s._-]+/).filter(Boolean).slice(0, 2).map((e3) => e3[0].toUpperCase()).join("") || "?"
        }),
        e2.src && i2 !== e2.src ? (0, s.jsx)(p.W, {
          src: e2.src,
          alt: "",
          fill: true,
          sizes: `${a2}px`,
          className: b().photo,
          onError: () => n2(e2.src),
          draggable: false
        }) : null
      ]
    });
  }
  function z({ text: e2, reduceMotion: a2 }) {
    let i2 = (0, t.useRef)(null), n2 = (0, u.d)(0), o2 = (0, t.useRef)(false);
    return (0, t.useLayoutEffect)(() => {
      let e3 = i2.current;
      if (!e3) return;
      let s2 = () => {
        let i3 = e3.offsetWidth + 1;
        !o2.current || a2 ? (n2.jump(i3), o2.current = true) : (0, g.i)(n2, i3, h.T.spring.morph);
      };
      s2();
      let t2 = new ResizeObserver(s2);
      t2.observe(e3);
      let r2 = true;
      return document.fonts?.ready.then(() => {
        r2 && s2();
      }), () => {
        r2 = false, t2.disconnect();
      };
    }, [e2, a2, n2]), (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsx)("span", {
          ref: i2,
          className: b().morphMeasure,
          "aria-hidden": "true",
          children: e2
        }),
        (0, s.jsx)(l.PY1.span, {
          className: b().morph,
          style: { width: n2 },
          children: (0, s.jsx)(r.N, {
            mode: "popLayout",
            initial: false,
            children: (0, s.jsx)(
              l.PY1.span,
              {
                className: b().morphText,
                initial: { opacity: 0, y: 6 * !a2 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: a2 ? 0 : -6 },
                transition: a2 ? { duration: 0 } : h.T.spring.snappy,
                children: e2
              },
              e2
            )
          })
        })
      ]
    });
  }
  function I({ value: e2, reduceMotion: a2 }) {
    let [i2, n2] = (0, t.useState)({ value: e2, direction: 1 });
    return i2.value !== e2 && n2({ value: e2, direction: e2 < i2.value ? -1 : 1 }), (0, s.jsx)("span", {
      className: b().count,
      children: (0, s.jsx)(r.N, {
        mode: "popLayout",
        initial: false,
        children: (0, s.jsx)(
          l.PY1.span,
          {
            initial: { opacity: 0, y: a2 ? 0 : `${0.6 * i2.direction}em` },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: a2 ? 0 : `${-0.6 * i2.direction}em` },
            transition: a2 ? { duration: 0 } : h.T.spring.snappy,
            children: e2
          },
          e2
        )
      })
    });
  }
  function W({
    value: e2,
    options: a2,
    onChange: i2,
    label: n2,
    reduceMotion: o2,
    onRemove: c2,
    align: d2 = "end",
    className: p2,
    children: u2
  }) {
    let [g2, x2] = (0, t.useState)(false), v2 = a2.find((a3) => a3.value === e2);
    return (0, s.jsxs)(m.bL, {
      open: g2,
      onOpenChange: x2,
      modal: false,
      children: [
        (0, s.jsxs)(m.l9, {
          className: [b().menuTrigger, p2].filter(Boolean).join(" "),
          "aria-label": `${n2}: ${v2.label}`,
          children: [
            u2,
            (0, s.jsx)(z, { text: v2.label, reduceMotion: o2 }),
            (0, s.jsx)(y.A, {
              className: b().chevron,
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            })
          ]
        }),
        (0, s.jsx)(r.N, {
          children: g2 ? (0, s.jsx)(m.ZL, {
            forceMount: true,
            children: (0, s.jsx)(m.UC, {
              forceMount: true,
              asChild: true,
              align: d2,
              sideOffset: 6,
              collisionPadding: 12,
              loop: true,
              children: (0, s.jsxs)(l.PY1.div, {
                className: b().menu,
                initial: o2 ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: -4 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: o2 ? { opacity: 0, transition: { duration: 0 } } : {
                  opacity: 0,
                  scale: 0.98,
                  y: -2,
                  transition: { duration: h.T.duration.fast, ease: R }
                },
                transition: o2 ? { duration: 0 } : h.T.spring.snappy,
                children: [
                  (0, s.jsx)(m.z6, {
                    value: e2,
                    onValueChange: (e3) => i2(e3),
                    children: a2.map(
                      (e3) => (0, s.jsxs)(
                        m.hN,
                        {
                          value: e3.value,
                          className: b().menuItem,
                          children: [
                            (0, s.jsxs)("span", {
                              className: b().menuText,
                              children: [
                                (0, s.jsx)("span", { children: e3.label }),
                                e3.hint ? (0, s.jsx)("span", {
                                  className: b().menuHint,
                                  children: e3.hint
                                }) : null
                              ]
                            }),
                            (0, s.jsx)(m.VF, {
                              className: b().menuCheck,
                              children: (0, s.jsx)(_.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            })
                          ]
                        },
                        e3.value
                      )
                    )
                  }),
                  c2 ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(m.wv, {
                        className: b().menuSeparator
                      }),
                      (0, s.jsx)(m.q7, {
                        className: [b().menuItem, b().menuDanger].join(
                          " "
                        ),
                        onSelect: c2,
                        children: "Remove access"
                      })
                    ]
                  }) : null
                ]
              })
            })
          }) : null
        })
      ]
    });
  }
  function L({
    title: e2 = "Q3 launch plan",
    members: a2,
    defaultMembers: i2 = [],
    onMembersChange: o2,
    access: c2,
    defaultAccess: d2 = "restricted",
    onAccessChange: p2,
    linkRole: m2,
    defaultLinkRole: u2 = "viewer",
    onLinkRoleChange: g2,
    directory: y2 = [],
    link: k2 = "https://fieldwork.example/d/q3-launch-plan",
    selfId: z2,
    defaultInviteRole: $2 = "editor",
    onInvite: P2,
    onCopyLink: D2,
    onDone: E2,
    className: H2,
    style: Y2
  }) {
    let F2 = !!(0, n.I)(), q2 = (0, t.useId)(), B = (e3) => F2 ? { duration: 0 } : h.T.spring[e3], [O, V] = (0, t.useState)(() => [...i2]), K = a2 ?? O, U = (e3) => {
      void 0 === a2 && V(e3), o2?.(e3);
    }, [J, Z] = (0, t.useState)(d2), G = c2 ?? J, [Q, X] = (0, t.useState)(u2), ee = m2 ?? Q, [ea, ei] = (0, t.useState)(""), es = (0, t.useRef)(null), [et, en] = (0, t.useState)(""), [er, el] = (0, t.useState)([]), [eo, ec] = (0, t.useState)(false), [ed, eh] = (0, t.useState)(false), [ep, em] = (0, t.useState)(0), [eu, eg] = (0, t.useState)($2), [ey, e_] = (0, t.useState)(null), [ex, ev] = (0, t.useState)(false), [ef, ew] = (0, t.useState)([]), ej = (e3) => K.some((a3) => a3.email.toLowerCase() === e3.toLowerCase()) || er.some((a3) => a3.email.toLowerCase() === e3.toLowerCase()), ek = et.trim().toLowerCase(), eb = ek ? y2.filter(
      (e3) => !ej(e3.email) && ((e3.name ?? "").toLowerCase().split(/\s+/).some((e4) => e4.startsWith(ek)) || (e3.name ?? "").toLowerCase().startsWith(ek) || e3.email.toLowerCase().startsWith(ek))
    ).slice(0, 5) : [], eN = ed && eb.length > 0, eA = Math.min(ep, Math.max(0, eb.length - 1)), eC = (e3) => {
      let a3 = [], i3 = null;
      for (let s2 of e3) {
        let e4 = s2.email.trim();
        if (!e4) continue;
        let t2 = e4.toLowerCase(), n2 = y2.find(
          (e5) => e5.email.toLowerCase() === t2 || e5.name?.toLowerCase() === t2
        ), r2 = n2 ?? { email: e4 };
        if (ej(r2.email) || a3.some((e5) => e5.email.toLowerCase() === r2.email.toLowerCase())) {
          let e5 = K.find(
            (e6) => e6.email.toLowerCase() === r2.email.toLowerCase()
          );
          i3 = e5 ? `${e5.name ?? e5.email} already has access` : `${r2.name ?? r2.email} is already added`;
          continue;
        }
        a3.push({
          ...r2,
          key: `${r2.email}-${Date.now()}-${a3.length}`,
          valid: !!n2 || S.test(r2.email)
        });
      }
      a3.length && (el((e4) => [...e4, ...a3]), ei(
        a3.map(
          (e4) => `${e4.name ?? e4.email} added${e4.valid ? "" : ", not a valid email"}`
        ).join(". ")
      )), e_(i3), i3 && ei(i3);
    }, eT = () => !!et.trim() && (eC(et.split(/[,;\s]+/).map((e3) => ({ email: e3 }))), en(""), em(0), true), eS = (e3) => {
      eC([e3]), en(""), em(0), es.current?.focus();
    }, eR = er.find((e3) => !e3.valid), eM = eR ? `\u201C${eR.email}\u201D isn\u2019t a valid email address` : ey;
    async function ez() {
      let e3 = er.filter((e4) => e4.valid).map(({ email: e4, name: a4, src: i3 }) => ({
        email: e4,
        name: a4,
        src: i3
      }));
      if (!e3.length || eR || ex) return;
      try {
        let a4 = P2?.(e3, eu);
        a4 && "function" == typeof a4.then && (ev(true), await a4);
      } catch {
        ev(false), e_("Couldn\u2019t send the invites. Try again.");
        return;
      }
      ev(false);
      let a3 = e3.map((e4) => ({
        ...e4,
        id: `invite-${e4.email}`,
        role: eu,
        pending: true
      }));
      U([...K, ...a3]), ew(a3.map((e4) => e4.id)), el([]), e_(null), ei(
        `Invited ${1 === e3.length ? e3[0].name ?? e3[0].email : `${e3.length} people`} as ${C(eu).toLowerCase()}`
      );
    }
    (0, t.useEffect)(() => {
      if (!ef.length) return;
      let e3 = window.setTimeout(() => ew([]), 1600);
      return () => window.clearTimeout(e3);
    }, [ef]);
    let [eI, eW] = (0, t.useState)(null);
    (0, t.useEffect)(() => {
      if (!eI) return;
      let e3 = window.setTimeout(() => eW(null), 6e3);
      return () => window.clearTimeout(e3);
    }, [eI]);
    let [eL, e$] = (0, t.useState)("idle");
    (0, t.useEffect)(() => {
      if ("idle" === eL) return;
      let e3 = window.setTimeout(() => e$("idle"), 1800);
      return () => window.clearTimeout(e3);
    }, [eL]);
    let eP = async () => {
      try {
        let e3;
        await (0, N.a)(k2), e$("copied"), e3 = "Link copied", ei(e3), D2?.(k2);
      } catch {
        e$("failed"), ei("Couldn\u2019t copy the link");
      }
    }, eD = `${q2}-suggestions`, eE = `${q2}-error`, eH = `Share \u201C${e2}\u201D`, eY = "link" === G ? x.A : v.A;
    return (0, s.jsxs)("section", {
      className: [b().root, H2].filter(Boolean).join(" "),
      style: Y2,
      "aria-label": eH,
      children: [
        (0, s.jsx)("h2", { className: b().title, children: eH }),
        (0, s.jsxs)("div", {
          className: b().inviteArea,
          children: [
            (0, s.jsxs)("div", {
              className: b().fieldWrap,
              children: [
                (0, s.jsx)("div", {
                  className: [
                    b().field,
                    ed ? b().fieldFocused : "",
                    eR ? b().fieldInvalid : ""
                  ].join(" "),
                  onPointerDown: (e3) => {
                    e3.target === e3.currentTarget && (e3.preventDefault(), es.current?.focus());
                  },
                  children: (0, s.jsxs)(r.N, {
                    initial: false,
                    mode: "popLayout",
                    children: [
                      er.map(
                        (e3, a3) => (0, s.jsxs)(
                          l.PY1.span,
                          {
                            layout: !F2,
                            className: [
                              b().chip,
                              e3.valid ? "" : b().chipInvalid,
                              eo && a3 === er.length - 1 ? b().chipArmed : ""
                            ].join(" "),
                            initial: { opacity: 0, scale: F2 ? 1 : 0.8 },
                            animate: { opacity: 1, scale: 1 },
                            exit: {
                              opacity: 0,
                              scale: F2 ? 1 : 0.8,
                              transition: {
                                duration: F2 ? 0 : h.T.duration.fast,
                                ease: R
                              }
                            },
                            transition: B("snappy"),
                            children: [
                              e3.valid ? (0, s.jsx)(M, { contact: e3, size: 20 }) : (0, s.jsx)(f.A, {
                                className: b().chipAlert,
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              (0, s.jsx)("span", {
                                className: b().chipText,
                                children: e3.name ?? e3.email
                              }),
                              (0, s.jsx)("button", {
                                type: "button",
                                className: b().chipRemove,
                                onClick: () => {
                                  var a4;
                                  return a4 = e3.key, void (el(
                                    (e4) => e4.filter((e5) => e5.key !== a4)
                                  ), ec(false), es.current?.focus());
                                },
                                "aria-label": `Remove ${e3.name ?? e3.email}`,
                                children: (0, s.jsx)(w.A, {
                                  size: 14,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                })
                              })
                            ]
                          },
                          e3.key
                        )
                      ),
                      (0, s.jsx)(
                        l.PY1.input,
                        {
                          layout: !F2,
                          transition: B("snappy"),
                          ref: es,
                          className: b().input,
                          value: et,
                          placeholder: er.length ? "" : "Add people by name or email",
                          "aria-label": "Add people by name or email",
                          role: "combobox",
                          "aria-expanded": eN,
                          "aria-controls": eD,
                          "aria-autocomplete": "list",
                          "aria-activedescendant": eN ? `${eD}-${eA}` : void 0,
                          "aria-invalid": !!eR,
                          "aria-describedby": eM ? eE : void 0,
                          autoComplete: "off",
                          spellCheck: false,
                          onChange: (e3) => {
                            en(e3.target.value), em(0), ec(false), ey && !eR && e_(null);
                          },
                          onKeyDown: (e3) => {
                            if ("ArrowDown" === e3.key && eN) {
                              e3.preventDefault(), em((eA + 1) % eb.length);
                              return;
                            }
                            if ("ArrowUp" === e3.key && eN) {
                              e3.preventDefault(), em((eA - 1 + eb.length) % eb.length);
                              return;
                            }
                            if ("Enter" === e3.key) {
                              e3.preventDefault(), eN ? eS(eb[eA]) : eT() || !er.length || er.some((e4) => !e4.valid) || ez();
                              return;
                            }
                            if ("," === e3.key || ";" === e3.key || " " === e3.key && et.includes("@") || "Tab" === e3.key && et.trim() && !e3.shiftKey) {
                              et.trim() && (e3.preventDefault(), eT());
                              return;
                            }
                            if ("Escape" === e3.key && (et || eN)) {
                              e3.preventDefault(), e3.stopPropagation(), en("");
                              return;
                            }
                            if ("Backspace" === e3.key && !et && er.length) {
                              if (e3.preventDefault(), eo) {
                                let e4 = er[er.length - 1];
                                el(er.slice(0, -1)), ec(false), ei(`${e4.name ?? e4.email} removed`);
                              } else ec(true);
                              return;
                            }
                            ec(false);
                          },
                          onPaste: (e3) => {
                            let a3 = e3.clipboardData.getData("text");
                            /[,;\n\s]/.test(a3.trim()) && (e3.preventDefault(), eC(
                              a3.split(/[,;\n\s]+/).map((e4) => ({ email: e4 }))
                            ));
                          },
                          onFocus: () => eh(true),
                          onBlur: () => {
                            eh(false), ec(false), et.includes("@") && eT();
                          }
                        },
                        "input"
                      )
                    ]
                  })
                }),
                (0, s.jsx)(r.N, {
                  children: eN ? (0, s.jsx)(
                    l.PY1.ul,
                    {
                      id: eD,
                      role: "listbox",
                      "aria-label": "Suggestions",
                      className: b().suggestions,
                      initial: F2 ? { opacity: 0 } : { opacity: 0, y: -4, scale: 0.98 },
                      animate: { opacity: 1, y: 0, scale: 1 },
                      exit: F2 ? { opacity: 0, transition: { duration: 0 } } : {
                        opacity: 0,
                        y: -2,
                        scale: 0.99,
                        transition: {
                          duration: h.T.duration.fast,
                          ease: R
                        }
                      },
                      transition: B("snappy"),
                      children: eb.map(
                        (e3, a3) => (0, s.jsxs)(
                          "li",
                          {
                            id: `${eD}-${a3}`,
                            role: "option",
                            "aria-selected": a3 === eA,
                            className: b().option,
                            onPointerDown: (e4) => e4.preventDefault(),
                            onPointerMove: () => em(a3),
                            onClick: () => eS(e3),
                            children: [
                              a3 === eA ? (0, s.jsx)(l.PY1.span, {
                                layoutId: `${q2}-highlight`,
                                className: b().optionHighlight,
                                transition: B("morph")
                              }) : null,
                              (0, s.jsx)(M, { contact: e3, size: 28 }),
                              (0, s.jsxs)("span", {
                                className: b().personText,
                                children: [
                                  (0, s.jsx)("span", {
                                    className: b().personName,
                                    children: e3.name ?? e3.email
                                  }),
                                  (0, s.jsx)("span", {
                                    className: b().personMeta,
                                    children: e3.email
                                  })
                                ]
                              })
                            ]
                          },
                          e3.email
                        )
                      )
                    },
                    "list"
                  ) : null
                })
              ]
            }),
            (0, s.jsx)(r.N, {
              initial: false,
              children: eM ? (0, s.jsx)(
                l.PY1.p,
                {
                  id: eE,
                  className: [b().message, eR ? b().messageError : ""].join(
                    " "
                  ),
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: B("smooth"),
                  children: (0, s.jsx)("span", {
                    className: b().messageInner,
                    children: eM
                  })
                },
                "message"
              ) : null
            }),
            (0, s.jsx)(r.N, {
              initial: false,
              children: er.length ? (0, s.jsx)(
                l.PY1.div,
                {
                  className: b().inviteRowWrap,
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: B("smooth"),
                  children: (0, s.jsxs)("div", {
                    className: b().inviteRow,
                    children: [
                      (0, s.jsx)(W, {
                        label: "Invite as",
                        value: eu,
                        options: A,
                        onChange: eg,
                        reduceMotion: F2,
                        align: "start",
                        className: b().inviteRole,
                        children: (0, s.jsx)("span", {
                          className: b().inviteAs,
                          children: "Invite as"
                        })
                      }),
                      (0, s.jsx)("button", {
                        type: "button",
                        className: b().primary,
                        onClick: ez,
                        disabled: !!eR || ex,
                        "aria-busy": ex,
                        children: (0, s.jsxs)("span", {
                          className: b().stack,
                          children: [
                            (0, s.jsxs)("span", {
                              className: ex ? b().hidden : "",
                              children: [
                                "Invite ",
                                er.length > 1 ? er.length : ""
                              ]
                            }),
                            (0, s.jsx)("span", {
                              className: ex ? "" : b().hidden,
                              "aria-hidden": !ex,
                              children: "Sending"
                            })
                          ]
                        })
                      })
                    ]
                  })
                },
                "invite"
              ) : null
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: b().section,
          children: [
            (0, s.jsxs)("h3", {
              className: b().sectionTitle,
              children: [
                "People with access ",
                (0, s.jsx)(I, { value: K.length, reduceMotion: F2 })
              ]
            }),
            (0, s.jsx)("ul", {
              className: b().people,
              children: (0, s.jsx)(r.N, {
                initial: false,
                children: K.map((e3) => {
                  let a3 = e3.id === z2, i3 = e3.name ?? e3.email;
                  return (0, s.jsx)(
                    l.PY1.li,
                    {
                      className: b().personWrap,
                      initial: { height: 0, opacity: 0 },
                      animate: { height: "auto", opacity: 1 },
                      exit: { height: 0, opacity: 0 },
                      transition: B("smooth"),
                      children: (0, s.jsxs)("div", {
                        className: [
                          b().person,
                          ef.includes(e3.id) ? b().fresh : ""
                        ].join(" "),
                        children: [
                          (0, s.jsx)(M, { contact: e3, size: 32 }),
                          (0, s.jsxs)("span", {
                            className: b().personText,
                            children: [
                              (0, s.jsxs)("span", {
                                className: b().personName,
                                children: [
                                  i3,
                                  a3 ? (0, s.jsx)("span", {
                                    className: b().you,
                                    children: " (you)"
                                  }) : null
                                ]
                              }),
                              (0, s.jsx)("span", {
                                className: b().personMeta,
                                children: e3.pending ? `Invited \xB7 ${e3.email}` : e3.name ? e3.email : "Guest"
                              })
                            ]
                          }),
                          "owner" === e3.role ? (0, s.jsx)("span", {
                            className: b().owner,
                            children: "Owner"
                          }) : (0, s.jsx)(W, {
                            label: `Role for ${i3}`,
                            value: e3.role,
                            options: A,
                            onChange: (a4) => {
                              e3.role !== a4 && (U(
                                K.map(
                                  (i4) => i4.id === e3.id ? { ...i4, role: a4 } : i4
                                )
                              ), ei(
                                `${e3.name ?? e3.email} ${C(a4).toLowerCase()}`
                              ));
                            },
                            onRemove: () => {
                              let a4;
                              return a4 = K.findIndex((a5) => a5.id === e3.id), void (U(K.filter((a5) => a5.id !== e3.id)), eW({ member: e3, index: a4 }), ei(`Removed ${e3.name ?? e3.email}`));
                            },
                            reduceMotion: F2
                          })
                        ]
                      })
                    },
                    e3.id
                  );
                })
              })
            }),
            (0, s.jsx)(r.N, {
              initial: false,
              children: eI ? (0, s.jsx)(
                l.PY1.div,
                {
                  className: b().undoWrap,
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: B("smooth"),
                  children: (0, s.jsxs)("div", {
                    className: b().undo,
                    children: [
                      (0, s.jsxs)("span", {
                        className: b().undoText,
                        children: [
                          "Removed ",
                          eI.member.name ?? eI.member.email
                        ]
                      }),
                      (0, s.jsx)("button", {
                        type: "button",
                        className: b().link,
                        onClick: () => {
                          if (!eI) return;
                          let e3 = [...K];
                          e3.splice(
                            Math.min(eI.index, e3.length),
                            0,
                            eI.member
                          ), U(e3), ew([eI.member.id]), ei(
                            `${eI.member.name ?? eI.member.email} has access again`
                          ), eW(null);
                        },
                        children: "Undo"
                      })
                    ]
                  })
                },
                eI.member.id
              ) : null
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: b().section,
          children: [
            (0, s.jsx)("h3", {
              className: b().sectionTitle,
              children: "General access"
            }),
            (0, s.jsxs)("div", {
              className: b().general,
              children: [
                (0, s.jsx)("span", {
                  className: b().generalIcon,
                  "aria-hidden": "true",
                  children: (0, s.jsx)(r.N, {
                    mode: "popLayout",
                    initial: false,
                    children: (0, s.jsx)(
                      l.PY1.span,
                      {
                        initial: {
                          opacity: 0,
                          scale: 0.6,
                          rotate: F2 ? 0 : -30
                        },
                        animate: { opacity: 1, scale: 1, rotate: 0 },
                        exit: { opacity: 0, scale: 0.6, rotate: 30 * !F2 },
                        transition: B("snappy"),
                        className: b().iconSwap,
                        children: (0, s.jsx)(eY, {
                          size: 20,
                          strokeWidth: 1.75
                        })
                      },
                      G
                    )
                  })
                }),
                (0, s.jsxs)("span", {
                  className: b().generalText,
                  children: [
                    (0, s.jsx)(W, {
                      label: "General access",
                      value: G,
                      options: T,
                      onChange: (e3) => {
                        void 0 === c2 && Z(e3), p2?.(e3), ei(
                          "link" === e3 ? "Anyone with the link can open" : "Restricted to people with access"
                        );
                      },
                      reduceMotion: F2,
                      align: "start",
                      className: b().accessTrigger
                    }),
                    (0, s.jsx)("span", {
                      className: b().generalHint,
                      children: (0, s.jsx)(r.N, {
                        mode: "popLayout",
                        initial: false,
                        children: (0, s.jsx)(
                          l.PY1.span,
                          {
                            className: b().generalHintText,
                            initial: { opacity: 0, y: 4 * !F2 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: F2 ? 0 : -4 },
                            transition: B("snappy"),
                            children: "link" === G ? `Anyone who has the link ${C(ee).toLowerCase()}` : "Only people with access can open"
                          },
                          `${G}-${ee}`
                        )
                      })
                    })
                  ]
                }),
                (0, s.jsx)(r.N, {
                  initial: false,
                  children: "link" === G ? (0, s.jsx)(
                    l.PY1.span,
                    {
                      className: b().linkRole,
                      initial: { opacity: 0, height: 0 },
                      animate: { opacity: 1, height: "auto" },
                      exit: { opacity: 0, height: 0 },
                      transition: B("smooth"),
                      children: (0, s.jsx)(l.PY1.span, {
                        className: b().linkRoleInner,
                        initial: { x: 10 * !F2 },
                        animate: { x: 0 },
                        exit: { x: 10 * !F2 },
                        transition: B("snappy"),
                        children: (0, s.jsx)(W, {
                          label: "Link permission",
                          value: ee,
                          options: A,
                          onChange: (e3) => {
                            void 0 === m2 && X(e3), g2?.(e3), ei(
                              `Anyone with the link ${C(e3).toLowerCase()}`
                            );
                          },
                          reduceMotion: F2
                        })
                      })
                    },
                    "link-role"
                  ) : null
                })
              ]
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: b().footer,
          children: [
            (0, s.jsx)("button", {
              type: "button",
              className: [
                b().secondary,
                "failed" === eL ? b().secondaryFailed : ""
              ].join(" "),
              onClick: eP,
              children: (0, s.jsx)("span", {
                className: b().stack,
                children: ["idle", "copied", "failed"].map(
                  (e3) => (0, s.jsxs)(
                    l.PY1.span,
                    {
                      className: b().copyLabel,
                      "aria-hidden": eL !== e3,
                      initial: false,
                      animate: {
                        opacity: +(eL === e3),
                        y: eL === e3 ? 0 : "idle" === e3 ? -6 : 6,
                        scale: eL === e3 ? 1 : 0.96
                      },
                      transition: B("snappy"),
                      children: [
                        "idle" === e3 ? (0, s.jsx)(j.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }) : "copied" === e3 ? (0, s.jsx)(_.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }) : (0, s.jsx)(f.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        "idle" === e3 ? "Copy link" : "copied" === e3 ? "Link copied" : "Couldn\u2019t copy"
                      ]
                    },
                    e3
                  )
                )
              })
            }),
            E2 ? (0, s.jsx)("button", {
              type: "button",
              className: b().primary,
              onClick: E2,
              children: "Done"
            }) : null
          ]
        }),
        (0, s.jsx)("span", {
          className: b().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ea
        })
      ]
    });
  }
  var $ = i(95336), P = i.n($);
  let D = (e2) => `${e2.replace("-", ".")}@fieldwork.example`, E = d.c0.map((e2) => ({ email: D(e2.id), name: e2.name, src: e2.src })), H = (e2, a2) => {
    let i2 = d.c0.find((a3) => a3.id === e2);
    return { id: e2, email: D(e2), name: i2.name, src: i2.src, role: a2 };
  }, Y = [
    H("jasmine-brooks", "owner"),
    H("nathan-cole", "editor"),
    H("chloe-nguyen", "commenter"),
    H("daniel-kim", "viewer")
  ];
  function F() {
    let e2 = !!(0, n.I)(), [a2, i2] = (0, t.useState)(true), d2 = (0, t.useRef)(null), p2 = (0, t.useRef)(null);
    return (0, t.useEffect)(() => {
      if (!a2) return;
      let e3 = (e4) => {
        let a3 = e4.target;
        d2.current?.contains(a3) || p2.current?.contains(a3) || a3.closest?.("[data-radix-popper-content-wrapper]") || i2(false);
      };
      return document.addEventListener("pointerdown", e3), () => document.removeEventListener("pointerdown", e3);
    }, [a2]), (0, s.jsxs)("div", {
      className: P().demo,
      "data-canvas": "wide",
      children: [
        (0, s.jsxs)("div", {
          className: P().bar,
          children: [
            (0, s.jsxs)("span", {
              className: P().doc,
              children: [
                (0, s.jsx)(o.A, {
                  size: 18,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                "Q3 launch plan"
              ]
            }),
            (0, s.jsxs)("button", {
              ref: p2,
              type: "button",
              className: P().share,
              "aria-expanded": a2,
              "aria-haspopup": "dialog",
              onClick: () => i2(!a2),
              children: [
                (0, s.jsx)(c.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                "Share"
              ]
            })
          ]
        }),
        (0, s.jsx)("div", {
          className: P().stage,
          children: (0, s.jsx)(r.N, {
            initial: false,
            children: a2 ? (0, s.jsx)(
              l.PY1.div,
              {
                ref: d2,
                role: "dialog",
                "aria-label": "Share Q3 launch plan",
                className: P().popover,
                initial: e2 ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: -8 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: e2 ? { opacity: 0, transition: { duration: 0 } } : {
                  opacity: 0,
                  scale: 0.98,
                  y: -4,
                  transition: { duration: h.T.duration.fast }
                },
                transition: e2 ? { duration: 0 } : h.T.spring.snappy,
                onKeyDown: (e3) => {
                  "Escape" !== e3.key || e3.defaultPrevented || (i2(false), p2.current?.focus());
                },
                children: (0, s.jsx)(L, {
                  title: "Q3 launch plan",
                  directory: E,
                  defaultMembers: Y,
                  selfId: "jasmine-brooks",
                  onInvite: () => new Promise((e3) => window.setTimeout(e3, 700)),
                  onDone: () => {
                    i2(false), p2.current?.focus();
                  }
                })
              },
              "panel"
            ) : null
          })
        })
      ]
    });
  }
  let q = F;
}

__m(__module,__exports,__require);
});
A.regCss(95336, ".demo{display:grid;gap:10px;width:100%;max-width:560px;margin-inline:auto;font-family:var(--font-body);letter-spacing:var(--tracking-body)}\n.bar{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 8px 8px 18px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface)}\n.doc{display:inline-flex;align-items:center;gap:8px;min-width:0;color:var(--foreground);font-size:var(--text-sm);font-weight:500;white-space:nowrap}\n.doc svg{flex:none;color:var(--text-secondary)}\n.share{display:inline-flex;align-items:center;gap:6px;height:var(--control-height-sm);padding:0 16px 0 14px;border:0;border-radius:var(--radius-pill);background:var(--foreground);color:var(--background);font:inherit;font-size:var(--text-sm);font-weight:500;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard)}\n.share:hover{background:color-mix(in oklab,var(--foreground) 86%,var(--background))}\n.share[aria-expanded=true]{background:color-mix(in oklab,var(--foreground) 80%,var(--background))}\n.stage{display:flex;justify-content:flex-end;min-height:680px}\n@media (max-width:480px){.stage{justify-content:center}\n.popover{width:100%;max-width:440px;transform-origin:calc(100% - 48px) 0}", {"demo":"demo","bar":"bar","doc":"doc","share":"share","stage":"stage","popover":"popover"});
A.cssFor("share-access", [41132,95336]);
A.item("share-access", {entry:70237, export:"ShareAccessDemo", kind:"component", tier:"pro", unresolved:[]});
})();