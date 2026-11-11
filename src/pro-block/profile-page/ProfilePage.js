function(__module,__exports,__require){
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
}