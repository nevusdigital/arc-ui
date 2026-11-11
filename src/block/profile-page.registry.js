/* profile-page (pro block) */
(function(){var A=globalThis.__ARC__;
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
A.reg(32959, function(__module,__exports,__require){
"use strict";
const __m = (e, a, i) => {
  "use strict";
  i.r(a), i.d(a, { ProfilePage: () => O, default: () => G });
  var t = i(95155), s = i(5772), r = i(12115), n = i(28245), o = i(92171), l = i(25354), d = i(18310), c = i(57700), p = i(80642), h = i(44825), m = i(25494), u = i(2125), g = i(62818), f = i(95697), v = i(5937), b = i(9005), j = i(67033), _ = i(51128), y = i(51811);
  let w = {
    name: "calendar",
    size: 24,
    node: [
      ["path", { d: "M8 2v3", key: "1ioesn" }],
      ["path", { d: "M16 2v3", key: "otl347" }],
      [
        "rect",
        { x: "3", y: "3", width: "18", height: "18", rx: "2", key: "h1oib" }
      ],
      ["path", { d: "M3 9h18", key: "1pudct" }]
    ]
  };
  w.node;
  let x = (0, y.A)(w);
  var k = i(92571), N = i(7770), A = i(67752);
  let S = {
    name: "Jasmine Brooks",
    handle: "jasmine",
    headline: "Design lead at Northwind",
    location: "Lisbon, Portugal",
    website: "jasminebrooks.design",
    bio: "I lead the design system team and care about calm interfaces, clear writing, and tools that stay out of the way. Previously at Linear and Figma.",
    avatar: (0, A.my)("jasmine-brooks"),
    cover: "media/photos/lisbon-rooftops.jpg",
    joined: "March 2021"
  }, C = [
    { id: "followers", label: "Followers", value: 2418 },
    { id: "following", label: "Following", value: 186 },
    { id: "shipped", label: "Shipped", value: 37 }
  ], z = {
    emma: { name: "Emma Collins", avatar: (0, A.my)("emma-collins") },
    marcus: { name: "Marcus Johnson", avatar: (0, A.my)("marcus-johnson") },
    chloe: { name: "Chloe Nguyen", avatar: (0, A.my)("chloe-nguyen") },
    daniel: { name: "Daniel Kim", avatar: (0, A.my)("daniel-kim") },
    olivia: { name: "Olivia Bennett", avatar: (0, A.my)("olivia-bennett") }
  }, T = [
    {
      id: "a1",
      kind: "shipped",
      action: "shipped",
      target: "Tokens v4",
      detail: "Semantic color roles, dark mode surfaces, and new spacing steps.",
      time: "2h",
      group: "This week"
    },
    {
      id: "a2",
      kind: "commented",
      action: "commented on",
      target: "Checkout empty states",
      detail: "Let us keep the illustration out and lead with the action.",
      time: "Yesterday",
      group: "This week"
    },
    {
      id: "a3",
      kind: "reviewed",
      action: "approved",
      target: "Table density toggle",
      time: "Tue",
      group: "This week"
    },
    {
      id: "a4",
      kind: "created",
      action: "created",
      target: "Onboarding audit",
      detail: "A shared board for the first run review with research notes.",
      time: "Mon",
      group: "This week"
    },
    {
      id: "a5",
      kind: "starred",
      action: "starred",
      target: "Motion guidelines",
      time: "Sep 12",
      group: "Earlier"
    },
    {
      id: "a6",
      kind: "shipped",
      action: "shipped",
      target: "Icon set 2.0",
      detail: "412 icons redrawn on a 1.75px stroke.",
      time: "Sep 8",
      group: "Earlier"
    },
    {
      id: "a7",
      kind: "commented",
      action: "commented on",
      target: "Billing settings",
      time: "Sep 3",
      group: "Earlier"
    }
  ], E = [
    {
      id: "p1",
      name: "Northwind design system",
      description: "Tokens, components, and guidance used by every product team.",
      cover: "media/photos/curved-facade.jpg",
      updated: "Updated 2h ago",
      stars: 342,
      starred: true,
      visibility: "Public",
      collaborators: [z.emma, z.marcus, z.chloe]
    },
    {
      id: "p2",
      name: "Onboarding audit",
      description: "Research notes and flows for the new first run experience.",
      cover: "media/photos/sunroom.jpg",
      updated: "Updated Monday",
      stars: 28,
      visibility: "Private",
      collaborators: [z.daniel, z.olivia]
    },
    {
      id: "p3",
      name: "Motion guidelines",
      description: "When things move, how fast, and why. Springs, easing, and reduced motion.",
      cover: "media/photos/terracotta-waves.jpg",
      updated: "Updated Sep 12",
      stars: 191,
      visibility: "Public",
      collaborators: [z.chloe]
    },
    {
      id: "p4",
      name: "Icon set 2.0",
      description: "A redrawn icon family on a consistent stroke and grid.",
      cover: "media/photos/concert-hall.jpg",
      updated: "Updated Sep 8",
      stars: 87,
      visibility: "Public",
      collaborators: [z.marcus, z.emma]
    }
  ];
  var M = i(76676), P = i.n(M), B = i(55665);
  let I = ["name", "headline", "location", "website", "bio"], $ = new Intl.NumberFormat("en-US"), F = [...N.T.ease.enter], L = [...N.T.ease.standard], W = { duration: 0 }, D = {
    shipped: (0, t.jsx)(h.A, { size: 15, strokeWidth: 1.75 }),
    commented: (0, t.jsx)(m.A, { size: 15, strokeWidth: 1.75 }),
    created: (0, t.jsx)(u.A, { size: 15, strokeWidth: 1.75 }),
    reviewed: (0, t.jsx)(g.A, { size: 15, strokeWidth: 1.75 }),
    starred: (0, t.jsx)(f.A, { size: 15, strokeWidth: 1.75 })
  };
  function R({ shown: e2, reduced: a2, children: i2 }) {
    var s2;
    let d2, c2, p2 = (0, r.useRef)(null), [h2, m2] = (0, r.useState)([]);
    (0, r.useLayoutEffect)(() => {
      let e3 = Array.from(p2.current?.children ?? []), a3 = () => m2(e3.map((e4) => e4.offsetWidth));
      if (a3(), "u" < typeof ResizeObserver) return;
      let i3 = new ResizeObserver(a3);
      return e3.forEach((e4) => i3.observe(e4)), () => i3.disconnect();
    }, []);
    let u2 = (s2 = h2[e2], d2 = (0, n.d)("auto"), c2 = (0, r.useRef)(false), (0, r.useLayoutEffect)(() => {
      if (!s2) return;
      if (!c2.current || a2) {
        c2.current = true, d2.jump(s2);
        return;
      }
      let e3 = (0, o.i)(d2, s2, {
        type: "spring",
        visualDuration: 0.22,
        bounce: 0
      });
      return () => e3.stop();
    }, [s2, a2, d2]), d2);
    return (0, t.jsx)(l.PY1.span, {
      ref: p2,
      className: P().copyStack,
      style: { width: u2 },
      children: i2
    });
  }
  function H({ on: e2, reduced: a2 }) {
    return (0, t.jsx)("svg", {
      width: 15,
      height: 15,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.75,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: (0, t.jsx)(l.PY1.path, {
        d: "M4 12l5 5L20 6",
        initial: false,
        animate: { pathLength: e2 || a2 ? 1 : 0 },
        transition: e2 ? { duration: 0.22, ease: [...N.T.ease.standard], delay: 0.04 } : { duration: 0, delay: 0.12 }
      })
    });
  }
  function O({
    profile: e2 = S,
    stats: a2 = C,
    activity: i2 = T,
    projects: n2 = E,
    tab: o2,
    defaultTab: h2 = "activity",
    onTabChange: m2,
    onSave: u2,
    onStarChange: g2,
    profileUrl: y2,
    editable: w2 = true,
    className: k2
  }) {
    let A2 = !!(0, d.I)(), z2 = (0, r.useId)(), [M2, L2] = (0, r.useState)(e2), [Y2, G2] = (0, r.useState)(h2), K = o2 ?? Y2, [U, J] = (0, r.useState)(false), [Q, V] = (0, r.useState)([]), [Z, X] = (0, r.useState)(
      () => Object.fromEntries(
        n2.map((e3) => [e3.id, { on: !!e3.starred, count: e3.stars }])
      )
    ), [ee, ea] = (0, r.useState)("idle"), ei = (0, r.useRef)(null), et = (0, r.useRef)([]), es = (0, r.useRef)({ activity: null, projects: null }), er = (0, r.useRef)(null), [en, eo] = (0, r.useState)("auto");
    (0, r.useEffect)(() => () => et.current.forEach(clearTimeout), []), (0, r.useEffect)(() => {
      let e3 = er.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(
        ([a4]) => eo(a4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight)
      );
      return a3.observe(e3), () => a3.disconnect();
    }, []);
    let el = (e3, a3) => {
      et.current.push(window.setTimeout(e3, a3));
    }, ed = (e3) => {
      void 0 === o2 && G2(e3), m2?.(e3);
    }, ec = y2 ?? `https://northwind.app/@${M2.handle}`, ep = async () => {
      try {
        await (0, B.a)(ec), ea("copied");
      } catch {
        ea("failed");
      }
      el(() => ea("idle"), 1800);
    }, eh = () => {
      J(false), requestAnimationFrame(() => ei.current?.focus());
    }, em = async (e3) => {
      u2 ? await u2(e3) : await new Promise((e4) => setTimeout(e4, 700));
      let a3 = I.filter((a4) => e3[a4] !== M2[a4]);
      L2(e3), V(a3), el(() => V([]), 1600), eh();
    }, eu = (e3) => Q.includes(e3) ? P().flash : void 0, eg = [...new Set(i2.map((e3) => e3.group))], ef = [
      { id: "activity", label: "Activity", count: i2.length },
      { id: "projects", label: "Projects", count: n2.length }
    ];
    return (0, t.jsxs)("div", {
      className: [P().root, k2].filter(Boolean).join(" "),
      children: [
        (0, t.jsxs)("div", {
          className: P().page,
          "data-editing": U || void 0,
          children: [
            (0, t.jsx)("div", {
              className: P().cover,
              children: M2.cover && (0, t.jsx)(s.default, {
                src: M2.cover,
                alt: "",
                fill: true,
                sizes: "(max-width: 980px) 100vw, 980px",
                priority: true
              })
            }),
            (0, t.jsxs)("header", {
              className: P().identity,
              children: [
                (0, t.jsx)("div", {
                  className: P().avatar,
                  children: M2.avatar ? (0, t.jsx)(s.default, {
                    src: M2.avatar,
                    alt: M2.name,
                    fill: true,
                    sizes: "96px"
                  }) : (0, t.jsx)("span", {
                    "aria-hidden": "true",
                    children: M2.name.slice(0, 1)
                  })
                }),
                (0, t.jsxs)("div", {
                  className: P().actions,
                  children: [
                    (0, t.jsx)("button", {
                      type: "button",
                      className: P().secondary,
                      onClick: ep,
                      "aria-live": "polite",
                      children: (0, t.jsxs)(R, {
                        shown: "copied" === ee ? 1 : 2 * ("failed" === ee),
                        reduced: A2,
                        children: [
                          (0, t.jsxs)("span", {
                            "data-shown": "idle" === ee,
                            children: [
                              (0, t.jsx)(v.A, {
                                size: 15,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              "Share"
                            ]
                          }),
                          (0, t.jsxs)("span", {
                            "data-shown": "copied" === ee,
                            children: [
                              (0, t.jsx)(H, {
                                on: "copied" === ee,
                                reduced: A2
                              }),
                              "Copied"
                            ]
                          }),
                          (0, t.jsxs)("span", {
                            "data-shown": "failed" === ee,
                            children: [
                              (0, t.jsx)(b.A, {
                                size: 15,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              "Failed"
                            ]
                          })
                        ]
                      })
                    }),
                    w2 && (0, t.jsx)("button", {
                      ref: ei,
                      type: "button",
                      className: P().primary,
                      onClick: () => J(true),
                      "aria-haspopup": "dialog",
                      "aria-expanded": U,
                      children: "Edit profile"
                    })
                  ]
                }),
                (0, t.jsxs)("div", {
                  className: P().names,
                  children: [
                    (0, t.jsx)("h2", {
                      className: eu("name"),
                      children: M2.name
                    }),
                    (0, t.jsxs)("p", {
                      children: [
                        (0, t.jsxs)("span", { children: ["@", M2.handle] }),
                        (0, t.jsx)("span", {
                          "aria-hidden": "true",
                          children: "\xB7"
                        }),
                        (0, t.jsx)("span", {
                          className: eu("headline"),
                          children: M2.headline
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, t.jsxs)("div", {
              className: P().body,
              children: [
                (0, t.jsxs)("aside", {
                  className: P().about,
                  "aria-label": "About",
                  children: [
                    M2.bio && (0, t.jsx)("p", {
                      className: [P().bio, eu("bio")].filter(Boolean).join(" "),
                      children: M2.bio
                    }),
                    (0, t.jsxs)("ul", {
                      className: P().meta,
                      children: [
                        M2.location && (0, t.jsxs)("li", {
                          className: eu("location"),
                          children: [
                            (0, t.jsx)(j.A, {
                              size: 15,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            }),
                            M2.location
                          ]
                        }),
                        M2.website && (0, t.jsxs)("li", {
                          className: eu("website"),
                          children: [
                            (0, t.jsx)(_.A, {
                              size: 15,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            }),
                            (0, t.jsx)("a", {
                              href: `https://${M2.website.replace(/^https?:\/\//, "")}`,
                              target: "_blank",
                              rel: "noreferrer",
                              children: M2.website.replace(/^https?:\/\//, "")
                            })
                          ]
                        }),
                        (0, t.jsxs)("li", {
                          children: [
                            (0, t.jsx)(x, {
                              size: 15,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            }),
                            "Joined ",
                            M2.joined
                          ]
                        })
                      ]
                    }),
                    (0, t.jsx)("dl", {
                      className: P().stats,
                      children: a2.map(
                        (e3) => (0, t.jsxs)(
                          "div",
                          {
                            children: [
                              (0, t.jsx)("dt", { children: e3.label }),
                              (0, t.jsx)("dd", { children: $.format(e3.value) })
                            ]
                          },
                          e3.id
                        )
                      )
                    })
                  ]
                }),
                (0, t.jsxs)("section", {
                  className: P().main,
                  "aria-label": "Profile content",
                  children: [
                    (0, t.jsx)(c.o, {
                      id: z2,
                      children: (0, t.jsx)("div", {
                        className: P().tabs,
                        role: "tablist",
                        "aria-label": "Profile sections",
                        onKeyDown: (e3) => {
                          if ("ArrowLeft" !== e3.key && "ArrowRight" !== e3.key)
                            return;
                          e3.preventDefault();
                          let a3 = "activity" === K ? "projects" : "activity";
                          ed(a3), es.current[a3]?.focus();
                        },
                        children: ef.map(
                          (e3) => (0, t.jsxs)(
                            "button",
                            {
                              ref: (a3) => {
                                es.current[e3.id] = a3;
                              },
                              type: "button",
                              role: "tab",
                              id: `${z2}-${e3.id}-tab`,
                              "aria-selected": K === e3.id,
                              "aria-controls": `${z2}-panel`,
                              tabIndex: K === e3.id ? 0 : -1,
                              className: P().tab,
                              onClick: () => ed(e3.id),
                              children: [
                                e3.label,
                                (0, t.jsx)("span", {
                                  className: P().tabCount,
                                  children: e3.count
                                }),
                                K === e3.id && (0, t.jsx)(l.PY1.span, {
                                  layoutId: "underline",
                                  className: P().underline,
                                  transition: A2 ? W : N.T.spring.morph
                                })
                              ]
                            },
                            e3.id
                          )
                        )
                      })
                    }),
                    (0, t.jsx)(l.PY1.div, {
                      id: `${z2}-panel`,
                      role: "tabpanel",
                      "aria-labelledby": `${z2}-${K}-tab`,
                      className: P().panel,
                      initial: false,
                      animate: { height: en },
                      transition: A2 ? W : N.T.spring.smooth,
                      children: (0, t.jsx)("div", {
                        ref: er,
                        className: P().panelContent,
                        children: (0, t.jsx)(p.N, {
                          mode: "wait",
                          initial: false,
                          children: (0, t.jsx)(
                            l.PY1.div,
                            {
                              initial: A2 ? { opacity: 0 } : { opacity: 0, y: 6 },
                              animate: { opacity: 1, y: 0 },
                              exit: {
                                opacity: 0,
                                transition: {
                                  duration: A2 ? 0 : N.T.duration.instant
                                }
                              },
                              transition: A2 ? W : { duration: N.T.duration.standard, ease: F },
                              children: "activity" === K ? (0, t.jsx)("div", {
                                className: P().activity,
                                children: eg.map(
                                  (e3) => (0, t.jsxs)(
                                    "div",
                                    {
                                      className: P().group,
                                      children: [
                                        (0, t.jsx)("h3", { children: e3 }),
                                        (0, t.jsx)("ol", {
                                          children: i2.filter((a3) => a3.group === e3).map(
                                            (e4) => (0, t.jsxs)(
                                              "li",
                                              {
                                                className: P().event,
                                                children: [
                                                  (0, t.jsx)("span", {
                                                    className: P().eventIcon,
                                                    "data-kind": e4.kind,
                                                    "aria-hidden": "true",
                                                    children: D[e4.kind]
                                                  }),
                                                  (0, t.jsxs)("div", {
                                                    className: P().eventText,
                                                    children: [
                                                      (0, t.jsxs)("p", {
                                                        children: [
                                                          (0, t.jsxs)(
                                                            "span",
                                                            {
                                                              className: P().muted,
                                                              children: [
                                                                M2.name.split(
                                                                  " "
                                                                )[0],
                                                                " ",
                                                                e4.action
                                                              ]
                                                            }
                                                          ),
                                                          " ",
                                                          e4.target
                                                        ]
                                                      }),
                                                      e4.detail && (0, t.jsx)(
                                                        "p",
                                                        {
                                                          className: P().eventDetail,
                                                          children: e4.detail
                                                        }
                                                      )
                                                    ]
                                                  }),
                                                  (0, t.jsx)("time", {
                                                    className: P().time,
                                                    children: e4.time
                                                  })
                                                ]
                                              },
                                              e4.id
                                            )
                                          )
                                        })
                                      ]
                                    },
                                    e3
                                  )
                                )
                              }) : (0, t.jsx)("ul", {
                                className: P().projects,
                                children: n2.map((e3) => {
                                  let a3 = Z[e3.id];
                                  return (0, t.jsxs)(
                                    "li",
                                    {
                                      className: P().project,
                                      children: [
                                        (0, t.jsx)("div", {
                                          className: P().projectCover,
                                          children: (0, t.jsx)(
                                            s.default,
                                            {
                                              src: e3.cover,
                                              alt: "",
                                              fill: true,
                                              sizes: "(max-width: 640px) 100vw, 320px"
                                            }
                                          )
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: P().projectBody,
                                          children: [
                                            (0, t.jsxs)("div", {
                                              className: P().projectHead,
                                              children: [
                                                (0, t.jsx)("h4", {
                                                  children: e3.name
                                                }),
                                                (0, t.jsx)("span", {
                                                  className: P().visibility,
                                                  children: e3.visibility
                                                })
                                              ]
                                            }),
                                            (0, t.jsx)("p", {
                                              children: e3.description
                                            }),
                                            (0, t.jsxs)("div", {
                                              className: P().projectFoot,
                                              children: [
                                                (0, t.jsx)("span", {
                                                  className: P().faces,
                                                  children: e3.collaborators.map(
                                                    (e4) => (0, t.jsx)(
                                                      "span",
                                                      {
                                                        className: P().face,
                                                        title: e4.name,
                                                        children: e4.avatar ? (0, t.jsx)(
                                                          s.default,
                                                          {
                                                            src: e4.avatar,
                                                            alt: e4.name,
                                                            fill: true,
                                                            sizes: "22px"
                                                          }
                                                        ) : e4.name[0]
                                                      },
                                                      e4.name
                                                    )
                                                  )
                                                }),
                                                (0, t.jsx)("span", {
                                                  className: P().updated,
                                                  children: e3.updated
                                                }),
                                                (0, t.jsxs)("button", {
                                                  type: "button",
                                                  className: P().star,
                                                  "data-on": a3.on,
                                                  "aria-pressed": a3.on,
                                                  "aria-label": `${a3.on ? "Unstar" : "Star"} ${e3.name}, ${a3.count} stars`,
                                                  onClick: () => {
                                                    var a4;
                                                    let i3, t2;
                                                    return t2 = !(i3 = Z[a4 = e3.id]).on, void (X({
                                                      ...Z,
                                                      [a4]: {
                                                        on: t2,
                                                        count: i3.count + (t2 ? 1 : -1)
                                                      }
                                                    }), g2?.(a4, t2));
                                                  },
                                                  children: [
                                                    (0, t.jsx)(
                                                      l.PY1.span,
                                                      {
                                                        className: P().starIcon,
                                                        initial: !A2 && !!a3.on && {
                                                          scale: 0.6
                                                        },
                                                        animate: {
                                                          scale: 1
                                                        },
                                                        transition: A2 ? W : N.T.spring.snappy,
                                                        children: (0, t.jsx)(f.A, {
                                                          size: 14,
                                                          strokeWidth: 1.75,
                                                          "aria-hidden": "true"
                                                        })
                                                      },
                                                      String(a3.on)
                                                    ),
                                                    (0, t.jsx)("span", {
                                                      className: P().starCount,
                                                      children: $.format(
                                                        a3.count
                                                      )
                                                    })
                                                  ]
                                                })
                                              ]
                                            })
                                          ]
                                        })
                                      ]
                                    },
                                    e3.id
                                  );
                                })
                              })
                            },
                            K
                          )
                        })
                      })
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, t.jsx)(p.N, {
          children: U && (0, t.jsx)(
            q,
            { initial: M2, reduced: A2, onClose: eh, onSave: em },
            "sheet"
          )
        })
      ]
    });
  }
  function q({ initial: e2, reduced: a2, onClose: i2, onSave: s2 }) {
    let [n2, o2] = (0, r.useState)(e2), [d2, c2] = (0, r.useState)("idle"), [h2, m2] = (0, r.useState)(), [u2, g2] = (0, r.useState)(false), f2 = (0, r.useRef)(null), v2 = (0, r.useRef)(null), j2 = (0, r.useId)(), _2 = (0, r.useId)();
    (0, r.useEffect)(() => {
      let e3 = requestAnimationFrame(
        () => v2.current?.focus({ preventScroll: true })
      );
      return () => cancelAnimationFrame(e3);
    }, []);
    let y2 = I.some((a3) => n2[a3] !== e2[a3]), w2 = n2.name.trim() ? void 0 : "Add your name", x2 = n2.website && !/^(https?:\/\/)?[\w-]+(\.[\w-]+)+(\/\S*)?$/.test(n2.website.trim()) ? "Use a domain like example.com" : void 0, A2 = !!(w2 || x2), S2 = (e3) => (a3) => {
      o2({
        ...n2,
        [e3]: "bio" === e3 ? a3.target.value.slice(0, 200) : a3.target.value
      }), m2(void 0);
    }, C2 = async (e3) => {
      if (e3.preventDefault(), g2(true), !A2 && y2 && "saving" !== d2) {
        c2("saving");
        try {
          await s2({ ...n2, name: n2.name.trim(), website: n2.website.trim() });
        } catch (e4) {
          c2("idle"), m2(e4 instanceof Error ? e4.message : "Could not save. Try again.");
        }
      }
    };
    return (0, t.jsxs)(t.Fragment, {
      children: [
        (0, t.jsx)(l.PY1.div, {
          className: P().scrim,
          onClick: i2,
          "aria-hidden": "true",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: N.T.duration.standard, ease: L }
        }),
        (0, t.jsxs)(l.PY1.form, {
          ref: f2,
          className: P().sheet,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": j2,
          onSubmit: C2,
          onKeyDown: (e3) => {
            if ("Escape" === e3.key) {
              e3.stopPropagation(), i2();
              return;
            }
            if ("Tab" !== e3.key || !f2.current) return;
            let a3 = [
              ...f2.current.querySelectorAll(
                "input, textarea, button:not(:disabled)"
              )
            ], t2 = a3[0], s3 = a3[a3.length - 1];
            e3.shiftKey && document.activeElement === t2 ? (e3.preventDefault(), s3.focus()) : e3.shiftKey || document.activeElement !== s3 || (e3.preventDefault(), t2.focus());
          },
          noValidate: true,
          initial: a2 ? { opacity: 0 } : { x: "100%" },
          animate: { x: 0, opacity: 1 },
          exit: a2 ? { opacity: 0, transition: { duration: N.T.duration.fast } } : {
            x: "100%",
            transition: { duration: N.T.duration.exit + 0.06, ease: L }
          },
          transition: a2 ? { duration: N.T.duration.fast } : N.T.spring.smooth,
          children: [
            (0, t.jsxs)("div", {
              className: P().sheetHead,
              children: [
                (0, t.jsx)("h3", { id: j2, children: "Edit profile" }),
                (0, t.jsx)("button", {
                  type: "button",
                  className: P().iconButton,
                  onClick: i2,
                  "aria-label": "Close",
                  children: (0, t.jsx)(b.A, { size: 16, strokeWidth: 1.75 })
                })
              ]
            }),
            (0, t.jsxs)("div", {
              className: P().sheetBody,
              children: [
                (0, t.jsx)(Y, {
                  id: `${_2}-name`,
                  label: "Name",
                  error: u2 ? w2 : void 0,
                  children: (0, t.jsx)("input", {
                    ref: v2,
                    id: `${_2}-name`,
                    value: n2.name,
                    onChange: S2("name"),
                    autoComplete: "name",
                    "aria-invalid": u2 && !!w2,
                    "aria-describedby": u2 && w2 ? `${_2}-name-error` : void 0
                  })
                }),
                (0, t.jsx)(Y, {
                  id: `${_2}-headline`,
                  label: "Headline",
                  children: (0, t.jsx)("input", {
                    id: `${_2}-headline`,
                    value: n2.headline,
                    onChange: S2("headline")
                  })
                }),
                (0, t.jsxs)("div", {
                  className: P().pair,
                  children: [
                    (0, t.jsx)(Y, {
                      id: `${_2}-location`,
                      label: "Location",
                      children: (0, t.jsx)("input", {
                        id: `${_2}-location`,
                        value: n2.location,
                        onChange: S2("location")
                      })
                    }),
                    (0, t.jsx)(Y, {
                      id: `${_2}-website`,
                      label: "Website",
                      error: u2 ? x2 : void 0,
                      children: (0, t.jsx)("input", {
                        id: `${_2}-website`,
                        value: n2.website,
                        onChange: S2("website"),
                        inputMode: "url",
                        "aria-invalid": u2 && !!x2,
                        "aria-describedby": u2 && x2 ? `${_2}-website-error` : void 0
                      })
                    })
                  ]
                }),
                (0, t.jsx)(Y, {
                  id: `${_2}-bio`,
                  label: "Bio",
                  hint: `${200 - n2.bio.length} left`,
                  children: (0, t.jsx)("textarea", {
                    id: `${_2}-bio`,
                    value: n2.bio,
                    onChange: S2("bio"),
                    rows: 5
                  })
                })
              ]
            }),
            (0, t.jsxs)("div", {
              className: P().sheetFoot,
              children: [
                (0, t.jsx)(p.N, {
                  initial: false,
                  children: h2 && (0, t.jsx)(l.PY1.p, {
                    role: "alert",
                    className: P().formError,
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    children: h2
                  })
                }),
                (0, t.jsx)("button", {
                  type: "button",
                  className: P().secondary,
                  onClick: i2,
                  children: "Cancel"
                }),
                (0, t.jsx)("button", {
                  type: "submit",
                  className: P().primary,
                  disabled: !y2 || "saving" === d2,
                  "aria-disabled": A2 || void 0,
                  children: (0, t.jsxs)("span", {
                    className: P().stack,
                    children: [
                      (0, t.jsx)("span", {
                        "data-shown": "idle" === d2,
                        children: "Save changes"
                      }),
                      (0, t.jsxs)("span", {
                        "data-shown": "saving" === d2,
                        children: [
                          (0, t.jsx)(k.A, {
                            size: 15,
                            strokeWidth: 1.75,
                            className: P().spin,
                            "aria-hidden": "true"
                          }),
                          "Saving"
                        ]
                      })
                    ]
                  })
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Y({ id: e2, label: a2, hint: i2, error: s2, children: r2 }) {
    return (0, t.jsxs)("div", {
      className: P().field,
      "data-invalid": !!s2 || void 0,
      children: [
        (0, t.jsxs)("div", {
          className: P().fieldHead,
          children: [
            (0, t.jsx)("label", { htmlFor: e2, children: a2 }),
            i2 && (0, t.jsx)("span", { children: i2 })
          ]
        }),
        r2,
        s2 && (0, t.jsx)("p", {
          id: `${e2}-error`,
          className: P().fieldError,
          children: s2
        })
      ]
    });
  }
  let G = O;
};

__m(__module,__exports,__require);
});
A.reg(44825, function(__module,__exports,__require){
"use strict";
function __m(e, t, o) {
  o.d(t, { A: () => a });
  var r = o(51811);
  let n = {
    name: "rocket",
    size: 24,
    node: [
      ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
      [
        "path",
        {
          d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
          key: "u4xsad"
        }
      ],
      [
        "path",
        {
          d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
          key: "676m9"
        }
      ],
      [
        "path",
        { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05", key: "92ym6u" }
      ]
    ]
  };
  n.node;
  let a = (0, r.A)(n);
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
A.reg(62818, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let o = {
    name: "thumbs-up",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
          key: "emmmcr"
        }
      ],
      ["path", { d: "M7 10v12", key: "1qc93n" }]
    ]
  };
  o.node;
  let i = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(67033, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "map-pin",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
          key: "1r0f0z"
        }
      ],
      ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(76676, ".root{position:relative;container:profile/inline-size;width:100%;min-width:0;height:min(760px,100dvh);margin-inline:auto;overflow:hidden;isolation:isolate;border:1px solid var(--border);border-radius:16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root :where(h2,h3,h4,p,ol,ul,dl,dd){margin:0}\n.root :where(ol,ul){padding:0;list-style:none}\n.root :where(button,input,textarea){font:inherit;letter-spacing:inherit;color:inherit;-webkit-tap-highlight-color:transparent}\n.root :focus,.root :focus-visible{outline:none}\n.page{height:100%;overflow-y:auto;overscroll-behavior:contain}\n.cover{position:relative;height:128px;overflow:hidden;background:var(--surface-muted)}\n.cover img{object-fit:cover}\n@container profile (min-width: 640px){.cover{height:200px}\n@container profile (min-width: 1000px){.cover{height:240px}\n.identity{box-sizing:border-box;width:100%;max-width:1120px;margin-inline:auto;display:grid;grid-template-columns:auto minmax(0,1fr);align-items:end;gap:12px 16px;padding:0 20px}\n@container profile (max-width: 359px){.identity{column-gap:12px}\n@container profile (min-width: 640px){.identity{padding:0 28px}\n.avatar{position:relative;display:grid;width:84px;height:84px;margin-top:-42px;place-items:center;overflow:hidden;border:4px solid var(--surface);border-radius:var(--radius-pill);background:var(--surface-muted);font-size:var(--text-xl)}\n.avatar img{object-fit:cover}\n.avatar{width:104px;height:104px;margin-top:-52px}\n.actions{display:flex;justify-content:flex-end;gap:8px;padding-bottom:4px}\n.actions{gap:6px}\n.actions .primary,.actions .secondary{padding:0 12px}\n.actions .stack svg{display:none}\n.names{grid-column:1/-1;display:grid;gap:2px;min-width:0}\n.names h2{font-family:var(--font-display);font-size:var(--text-xl);font-weight:500;letter-spacing:-.02em;line-height:1.2}\n.names p{display:flex;flex-wrap:wrap;gap:0 6px;color:var(--text-secondary)}\n.names h2{font-size:var(--text-2xl)}\n.primary,.secondary{display:inline-flex;height:34px;align-items:center;justify-content:center;gap:6px;border:1px solid transparent;border-radius:var(--radius-pill);padding:0 14px;font-weight:500;white-space:nowrap;cursor:pointer;transition:transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.primary{background:var(--foreground);color:var(--background)}\n@media (hover:hover) and (pointer:fine){.primary:hover:not(:disabled){background:color-mix(in oklab,var(--foreground) 86%,var(--surface))}\n.primary:active:not(:disabled),.secondary:active{transform:scale(.97)}\n.primary:focus-visible{background:color-mix(in oklab,var(--foreground) 82%,var(--surface))}\n.primary:disabled{opacity:.4;cursor:default}\n.secondary{border-color:var(--border);background:var(--surface)}\n.secondary:hover{background:var(--surface-muted)}\n.secondary:focus-visible{background:var(--surface-muted)}\n.stack{display:inline-grid}\n.stack>span{grid-area:1/1;display:inline-flex;align-items:center;justify-content:center;gap:6px;transition:opacity var(--duration-fast) var(--ease-standard),filter var(--duration-fast) var(--ease-standard),transform var(--duration-standard) var(--ease-enter)}\n.stack>span[data-shown=false]{opacity:0;filter:blur(2px);transform:translateY(3px);visibility:hidden}\n@media (prefers-reduced-motion:reduce){.stack>span{transition:opacity var(--duration-fast) linear;transform:none;filter:none}\n.copyStack{display:inline-grid;grid-template-columns:minmax(0,1fr);justify-items:center}\n.copyStack>span{grid-area:1/1;display:inline-flex;align-items:center;justify-content:center;gap:6px;white-space:nowrap;transition:opacity .16s var(--ease-standard),transform .16s var(--ease-standard)}\n.copyStack>span[data-shown=false]{opacity:0;transform:translateY(2px);visibility:hidden;transition:opacity .1s var(--ease-standard),transform .1s var(--ease-standard),visibility 0s .1s}\n.copyStack>span:nth-child(2) svg{color:var(--success)}\n.copyStack>span{transition:none;transform:none}\n.spin{animation:spin .8s linear infinite}\n.spin{animation-duration:2s}\n.body{box-sizing:border-box;width:100%;max-width:1120px;margin-inline:auto;display:grid;gap:24px;padding:20px 20px 24px}\n@container profile (min-width: 640px){.body{padding:24px 28px 32px}\n@container profile (min-width: 760px){.body{grid-template-columns:248px minmax(0,1fr);gap:40px}\n.about{display:grid;align-content:start;gap:16px}\n.bio{color:var(--foreground);font-size:var(--text-sm);text-wrap:pretty}\n.meta{display:grid;gap:8px;color:var(--text-secondary)}\n.meta li{display:flex;min-width:0;align-items:center;gap:8px}\n.meta svg{flex:none;color:var(--text-muted)}\n.meta a{overflow:hidden;color:inherit;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;transition:color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.meta a:hover{color:var(--foreground)}\n.meta a:focus-visible{color:var(--foreground);text-decoration:underline}\n.stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));align-items:end;gap:12px;border-top:1px solid var(--border);padding-top:16px}\n.stats div{display:flex;min-width:0;flex-direction:column-reverse;gap:2px}\n.stats dt{color:var(--text-muted);font-size:var(--text-xs)}\n.stats dd{font-size:var(--text-lg);font-weight:500;font-variant-numeric:tabular-nums;letter-spacing:var(--tracking-body)}\n.flash{border-radius:6px;animation:flash 1.6s var(--ease-standard)}\n.flash{animation-duration:1.2s}\n.main{min-width:0}\n.tabs{display:flex;gap:20px;border-bottom:1px solid var(--border)}\n.tab{position:relative;display:inline-flex;box-sizing:border-box;height:38px;align-items:baseline;gap:6px;border:0;padding:9px 0 0;background:none;color:var(--text-secondary);font-weight:500;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}\n.tab:focus-visible,.tab[aria-selected=true]{color:var(--foreground)}\n@media (hover:hover) and (pointer:fine){.tab:hover{color:var(--foreground)}\n.tabCount{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.underline{position:absolute;right:0;bottom:-1px;left:0;height:2px;border-radius:2px;background:var(--foreground)}\n.panel{overflow:hidden}\n.panelContent{padding-top:16px}\n.activity{display:grid;gap:20px}\n.group h3{margin-bottom:4px;color:var(--text-muted);font-size:var(--text-xs);font-weight:500}\n.event{position:relative;display:grid;grid-template-columns:20px minmax(0,1fr) auto;gap:12px;padding:10px 0}\n.event+.event{border-top:1px solid var(--border-subtle)}\n.eventIcon{display:grid;height:20px;place-items:center;color:var(--text-muted)}\n.eventIcon[data-kind=shipped]{color:var(--success)}\n.eventIcon[data-kind=starred]{color:var(--warning)}\n.eventText{display:grid;gap:2px;min-width:0}\n.eventText p{overflow-wrap:anywhere}\n.eventDetail,.muted{color:var(--text-secondary)}\n.time{color:var(--text-muted);font-size:var(--text-xs);white-space:nowrap}\n.projects{display:grid;gap:12px}\n@container profile (min-width: 560px){.projects{grid-template-columns:repeat(2,minmax(0,1fr))}\n.project{display:flex;min-width:0;flex-direction:column;overflow:hidden;border:1px solid var(--border);border-radius:12px;background:var(--surface)}\n.projectCover{position:relative;height:96px;background:var(--surface-muted)}\n.projectCover img{object-fit:cover}\n.projectBody{display:flex;flex:1;flex-direction:column;gap:6px;padding:12px 14px}\n.projectBody>p{flex:1;color:var(--text-secondary)}\n.projectHead{display:flex;align-items:baseline;justify-content:space-between;gap:8px}\n.projectHead h4{min-width:0;overflow:hidden;font-size:var(--text-sm);font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.visibility{flex:none;color:var(--text-muted);font-size:var(--text-xs)}\n.projectFoot{display:flex;align-items:center;gap:10px;margin-top:4px}\n.faces{display:flex}\n.face{position:relative;display:grid;width:22px;height:22px;place-items:center;overflow:hidden;border:2px solid var(--surface);border-radius:var(--radius-pill);background:var(--surface-muted);font-size:10px}\n.face+.face{margin-left:-7px}\n.face img{object-fit:cover}\n.updated{min-width:0;flex:1;overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap}\n.star{display:inline-flex;height:28px;align-items:center;gap:5px;border:1px solid var(--border);border-radius:var(--radius-pill);padding:0 10px 0 8px;background:var(--surface);color:var(--text-secondary);font-size:var(--text-xs);cursor:pointer;transition:transform var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.star:active{transform:scale(.95)}\n@media (hover:hover) and (pointer:fine){.star:hover{background:var(--surface-muted)}\n.star:focus-visible{background:var(--surface-muted)}\n.star[data-on=true]{color:var(--foreground)}\n.star[data-on=true] svg{color:var(--warning);fill:currentColor}\n.starIcon{display:grid;place-items:center}\n.starCount{font-variant-numeric:tabular-nums}\n.scrim{position:absolute;z-index:2;inset:0;background:color-mix(in oklab,var(--neutral-11,black) 28%,transparent)}\n.sheet{position:absolute;z-index:3;top:0;right:0;bottom:0;display:grid;width:min(100%,420px);grid-template-rows:auto minmax(0,1fr) auto;border-left:1px solid var(--border);background:var(--surface-raised);box-shadow:var(--shadow-floating);will-change:transform}\n.sheetHead{display:flex;align-items:center;justify-content:space-between;padding:14px 12px 10px 20px}\n.sheetHead h3{font-size:var(--text-base);font-weight:500}\n.iconButton{display:grid;width:32px;height:32px;place-items:center;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.iconButton:active{transform:scale(.94)}\n@media (hover:hover) and (pointer:fine){.iconButton:hover{background:var(--surface-muted);color:var(--foreground)}\n.iconButton:focus-visible{background:var(--surface-muted)}\n.sheetBody{display:grid;align-content:start;gap:16px;overflow:auto;padding:6px 20px 20px;overscroll-behavior:contain}\n.pair{display:grid;gap:16px}\n@container profile (min-width: 420px){.pair{grid-template-columns:repeat(2,minmax(0,1fr))}\n.field{display:grid;gap:6px;min-width:0}\n.field input,.field textarea{width:100%;min-width:0;border:1px solid var(--border);border-radius:10px;padding:8px 12px;background:var(--surface);font-size:var(--text-sm);line-height:var(--leading-body);transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.field input{height:36px}\n.field textarea{resize:vertical;min-height:96px}\n.field input:focus,.field textarea:focus{border-color:var(--border-strong)}\n.field[data-invalid] input{border-color:var(--danger)}\n.fieldHead{display:flex;justify-content:space-between;gap:8px}\n.fieldHead label{font-weight:500}\n.fieldHead span{color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.fieldError{color:var(--danger);font-size:var(--text-xs)}\n.sheetFoot{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:8px;border-top:1px solid var(--border);padding:12px 20px}\n.formError{flex:1 1 100%;color:var(--danger);font-size:var(--text-xs)}", {"root":"root","page":"page","cover":"cover","identity":"identity","avatar":"avatar","actions":"actions","primary":"primary","secondary":"secondary","stack":"stack","names":"names","copyStack":"copyStack","spin":"spin","body":"body","about":"about","bio":"bio","meta":"meta","stats":"stats","flash":"flash","main":"main","tabs":"tabs","tab":"tab","tabCount":"tabCount","underline":"underline","panel":"panel","panelContent":"panelContent","activity":"activity","group":"group","event":"event","eventIcon":"eventIcon","eventText":"eventText","eventDetail":"eventDetail","muted":"muted","time":"time","projects":"projects","project":"project","projectCover":"projectCover","projectBody":"projectBody","projectHead":"projectHead","visibility":"visibility","projectFoot":"projectFoot","faces":"faces","face":"face","updated":"updated","star":"star","starIcon":"starIcon","starCount":"starCount","scrim":"scrim","sheet":"sheet","sheetHead":"sheetHead","iconButton":"iconButton","sheetBody":"sheetBody","pair":"pair","field":"field","fieldHead":"fieldHead","fieldError":"fieldError","sheetFoot":"sheetFoot","formError":"formError"});
A.reg(95697, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => i });
  var n = a(51811);
  let r = {
    name: "star",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
          key: "r04s7s"
        }
      ]
    ]
  };
  r.node;
  let i = (0, n.A)(r);
}

__m(__module,__exports,__require);
});
A.cssFor("profile-page", [76676]);
A.item("profile-page", {entry:32959, export:"ProfilePage", kind:"block", tier:"pro", unresolved:[]});
})();