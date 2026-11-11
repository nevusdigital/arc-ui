function(__module,__exports,__require){
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
}