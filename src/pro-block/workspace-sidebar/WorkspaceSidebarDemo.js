function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { WorkspaceSidebarDemo: () => ef });
  var r = a(95155), i = a(5772), n = a(12115), s = a(47650), o = a(57793), l = a(40623), c = a(18310), d = a(28245), u = a(55809), p = a(92171), m = a(25354), h = a(80642), f = a(79196), _ = a(57700), x = a(29298), b = a(44952), y = a(56255), g = a(10294), j = a(36483), v = a(6035), w = a(85618), k = a(2125), N = a(65342), T = a(64577), C = a(9005), S = a(65024), P = a(92218), E = a(51288), $ = a(43298), R = a(98344), L = a(7770), M = a(80112), D = a.n(M);
  let Y = [
    {
      id: "northwind",
      name: "Northwind",
      initial: "N",
      logo: {
        color: "#2f5bea",
        glyph: (0, r.jsxs)("svg", {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          children: [
            (0, r.jsx)("path", { d: "M4 9h9.5a2.75 2.75 0 1 0-2.6-3.6" }),
            (0, r.jsx)("path", { d: "M4 12.5h13a2.75 2.75 0 1 1-2.6 3.6" }),
            (0, r.jsx)("path", { d: "M4 16h5" })
          ]
        })
      },
      plan: "Business",
      members: "24 members",
      used: 38.4,
      limit: 100
    },
    {
      id: "fieldwork",
      name: "Fieldwork Labs",
      initial: "F",
      logo: {
        color: "#1d7f55",
        glyph: (0, r.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          children: (0, r.jsx)("path", {
            d: "M19.5 4.5C10.5 4.5 5 9 5 15.2c0 1.3.25 2.5.7 3.6 1.3-5 4.8-8.3 9.3-10.3-3.8 2.4-6.6 5.8-7.9 11 1.1.3 2.2.5 3.4.5 5.4 0 9-4.6 9-15.5z"
          })
        })
      },
      plan: "Team",
      members: "8 members",
      used: 58.1,
      limit: 80
    },
    {
      id: "personal",
      name: "Personal",
      initial: "M",
      photo: "media/people/emma-collins.svg",
      plan: "Free",
      members: "Just you",
      used: 4.6,
      limit: 5
    }
  ], F = {
    northwind: {
      active: "checkout",
      favorites: [
        { id: "flows", name: "Checkout flows", kind: "prototype" },
        { id: "critique", name: "Critique notes", kind: "doc" },
        { id: "roadmap", name: "Q4 roadmap", kind: "map" },
        { id: "audit", name: "Component audit", kind: "board" }
      ],
      projects: [
        {
          id: "checkout",
          name: "Checkout redesign",
          tone: "blue",
          unread: false
        },
        { id: "mobile", name: "Mobile app 4.0", tone: "green", unread: true },
        { id: "system", name: "Design system", tone: "violet", unread: false },
        { id: "onboarding", name: "Onboarding", tone: "amber", unread: true },
        { id: "help", name: "Help center", tone: "coral", unread: false },
        { id: "admin", name: "Admin console", tone: "slate", unread: false }
      ]
    },
    fieldwork: {
      active: "scheduling",
      favorites: [
        { id: "synthesis", name: "Interview synthesis", kind: "doc" },
        { id: "journey", name: "Patient journey", kind: "map" },
        { id: "booking", name: "Booking prototype", kind: "prototype" }
      ],
      projects: [
        {
          id: "scheduling",
          name: "Clinic scheduling",
          tone: "green",
          unread: false
        },
        { id: "intake", name: "Patient intake", tone: "blue", unread: true },
        { id: "research", name: "Research ops", tone: "amber", unread: false },
        {
          id: "a11y",
          name: "Accessibility audit",
          tone: "violet",
          unread: true
        }
      ]
    },
    personal: {
      active: "portfolio",
      favorites: [
        { id: "case", name: "Case study draft", kind: "doc" },
        { id: "type", name: "Type explorations", kind: "board" }
      ],
      projects: [
        {
          id: "portfolio",
          name: "Portfolio 2026",
          tone: "coral",
          unread: false
        },
        { id: "tide", name: "Tide weather app", tone: "blue", unread: true },
        { id: "icons", name: "Icon set", tone: "slate", unread: false }
      ]
    }
  }, A = ["blue", "green", "violet", "amber", "coral", "slate"], I = { prototype: g.A, doc: j.A, map: v.A, board: w.A }, { spring: B, duration: O, ease: z, blur: H } = L.T, q = [...z.enter], W = [...z.standard], U = { duration: 0 }, K = { height: 0, opacity: 0, overflow: "hidden" }, V = { height: "auto", opacity: 1, transitionEnd: { overflow: "visible" } }, X = { height: 0, opacity: 0, overflow: "hidden" }, J = { ...B.smooth, opacity: { duration: O.fast, ease: W } }, G = () => () => {
  }, Z = "(max-width: 640px)", Q = (e2) => {
    let t2 = window.matchMedia(Z);
    return t2.addEventListener("change", e2), () => t2.removeEventListener("change", e2);
  };
  function ee({
    enabled: e2 = true,
    label: t2,
    note: a2,
    shortcut: i2,
    side: s2 = "right",
    children: o2
  }) {
    let [c2, d2] = (0, n.useState)(false);
    return !e2 && c2 && d2(false), (0, r.jsxs)(l.bL, {
      open: e2 && c2,
      onOpenChange: (t3) => d2(t3 && e2),
      children: [
        (0, r.jsx)(l.l9, { asChild: true, children: o2 }),
        (0, r.jsx)(l.ZL, {
          children: (0, r.jsxs)(l.UC, {
            className: D().tip,
            side: s2,
            sideOffset: "right" === s2 ? 14 : 8,
            collisionPadding: 8,
            children: [
              t2,
              a2 && (0, r.jsx)("span", { className: D().tipNote, children: a2 }),
              i2 && (0, r.jsx)("kbd", { children: i2 })
            ]
          })
        })
      ]
    });
  }
  function et({ collapsed: e2, reduce: t2 }) {
    return (0, r.jsxs)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      "aria-hidden": "true",
      children: [
        (0, r.jsx)("rect", {
          x: "2.75",
          y: "3.75",
          width: "14.5",
          height: "12.5",
          rx: "3.5"
        }),
        (0, r.jsx)(m.PY1.path, {
          d: "M8.25 4.25v11.5",
          initial: false,
          animate: { x: e2 ? -2.5 : 0 },
          transition: t2 ? U : B.smooth
        })
      ]
    });
  }
  let ea = (e2) => A[e2 % A.length], er = (e2, t2) => !t2 || e2.toLowerCase().includes(t2.toLowerCase());
  function ei({ text: e2, className: t2, reduce: a2 }) {
    return (0, r.jsx)("span", {
      className: [D().swap, t2].filter(Boolean).join(" "),
      children: (0, r.jsx)(h.N, {
        mode: "popLayout",
        initial: false,
        children: (0, r.jsx)(
          m.PY1.span,
          {
            className: D().swapText,
            initial: a2 ? { opacity: 0 } : { opacity: 0, y: "0.35em", filter: `blur(${H.soft}px)` },
            animate: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: a2 ? { opacity: 0, transition: U } : {
              opacity: 0,
              y: "-0.35em",
              filter: `blur(${H.subtle}px)`,
              transition: { duration: O.fast, ease: W }
            },
            transition: a2 ? U : { duration: O.standard, ease: q },
            children: e2
          },
          e2
        )
      })
    });
  }
  function en({ workspace: e2, small: t2 = false, reduce: a2 }) {
    return (0, r.jsx)("span", {
      className: [D().mark, t2 ? D().markSmall : ""].filter(Boolean).join(" "),
      "aria-hidden": "true",
      children: (0, r.jsx)(h.N, {
        initial: false,
        children: (0, r.jsx)(
          m.PY1.span,
          {
            className: D().markFace,
            "data-photo": e2.photo ? "" : void 0,
            "data-logo": e2.logo ? "" : void 0,
            style: e2.logo ? { background: e2.logo.color } : void 0,
            initial: a2 ? { opacity: 0 } : { opacity: 0, scale: 0.72, filter: `blur(${H.subtle}px)` },
            animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
            exit: a2 ? { opacity: 0, transition: U } : {
              opacity: 0,
              scale: 0.72,
              filter: `blur(${H.subtle}px)`,
              transition: { duration: O.fast, ease: W }
            },
            transition: a2 ? U : {
              ...B.snappy,
              opacity: { duration: O.fast },
              filter: { duration: O.fast }
            },
            children: e2.photo ? (0, r.jsx)(i.default, {
              src: e2.photo,
              alt: "",
              fill: true,
              sizes: t2 ? "28px" : "32px"
            }) : e2.logo ? e2.logo.glyph : e2.initial
          },
          e2.id
        )
      })
    });
  }
  function es({ name: e2, query: t2, unread: a2 = false }) {
    let i2 = t2 ? e2.toLowerCase().indexOf(t2.toLowerCase()) : -1;
    return (0, r.jsx)("span", {
      className: D().name,
      "data-searching": t2 ? "" : void 0,
      "data-unread": a2 ? "" : void 0,
      children: i2 < 0 ? e2 : (0, r.jsxs)(r.Fragment, {
        children: [
          e2.slice(0, i2),
          (0, r.jsx)("mark", { children: e2.slice(i2, i2 + t2.length) }),
          e2.slice(i2 + t2.length)
        ]
      })
    });
  }
  function eo({ reduce: e2 }) {
    return (0, r.jsx)(m.PY1.span, {
      layoutId: "active",
      className: D().highlight,
      "aria-hidden": "true",
      transition: e2 ? U : B.morph
    });
  }
  function el({ id: e2, text: t2, rail: a2, reduce: i2 }) {
    return (0, r.jsxs)(m.PY1.h2, {
      id: e2,
      className: D().sectionTitle,
      initial: false,
      animate: { height: a2 ? 17 : 32 },
      transition: i2 ? U : B.smooth,
      children: [
        (0, r.jsx)("span", { className: D().sectionText, children: t2 }),
        (0, r.jsx)("span", { className: D().divider, "aria-hidden": "true" })
      ]
    });
  }
  function ec({
    workspace: e2,
    lists: t2,
    query: a2,
    reduce: i2,
    rail: s2,
    onExpand: o2,
    onSelect: l2,
    onReorder: c2,
    onMoved: d2,
    onCreate: u2,
    onClear: p2
  }) {
    let b2 = (0, n.useId)(), y2 = (0, f.tF)(), g2 = (0, n.useRef)(/* @__PURE__ */ new Map()), j2 = (0, n.useRef)(null), [v2, w2] = (0, n.useState)(0), [k2, N2] = (0, n.useState)(null), T2 = t2.favorites.filter((e3) => er(e3.name, a2)), C2 = t2.projects.filter((e3) => er(e3.name, a2)), S2 = !!a2 && 0 === T2.length && 0 === C2.length, P2 = (e3) => (t3) => {
      t3 ? (g2.current.set(e3, t3), j2.current === e3 && (j2.current = null, t3.focus({ preventScroll: true }))) : g2.current.delete(e3);
    };
    return (0, r.jsx)(m.PY1.div, {
      className: D().panel,
      inert: !y2,
      "aria-hidden": !y2 || void 0,
      initial: i2 ? { opacity: 0 } : { opacity: 0, y: 8, filter: `blur(${H.soft}px)` },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: i2 ? { opacity: 0, transition: U } : {
        opacity: 0,
        y: -4,
        filter: `blur(${H.subtle}px)`,
        transition: { duration: O.fast, ease: W }
      },
      transition: i2 ? U : { duration: O.standard + 0.04, ease: q },
      children: (0, r.jsx)(_.o, {
        id: b2,
        children: (0, r.jsxs)(h.N, {
          initial: false,
          children: [
            T2.length > 0 && (0, r.jsxs)(
              m.PY1.section,
              {
                className: D().section,
                "aria-labelledby": `${b2}-favorites`,
                initial: K,
                animate: V,
                exit: X,
                transition: i2 ? U : J,
                children: [
                  (0, r.jsx)(el, {
                    id: `${b2}-favorites`,
                    text: "Favorites",
                    rail: s2,
                    reduce: i2
                  }),
                  (0, r.jsx)("p", {
                    id: `${b2}-hint`,
                    className: D().srOnly,
                    children: "Drag, or press Alt with the up and down arrows, to reorder."
                  }),
                  (0, r.jsx)(x.x, {
                    as: "ul",
                    axis: "y",
                    values: t2.favorites,
                    onReorder: (t3) => c2(e2.id, t3),
                    className: D().list,
                    children: (0, r.jsx)(h.N, {
                      initial: false,
                      children: T2.map(
                        (n2) => (0, r.jsx)(
                          ed,
                          {
                            item: n2,
                            query: a2,
                            active: t2.active === n2.id,
                            draggable: !a2,
                            reduce: i2,
                            rail: s2,
                            hint: `${b2}-hint`,
                            buttonRef: P2(n2.id),
                            onSelect: () => l2(e2.id, n2.id, n2.name),
                            onMove: (a3) => (function(a4, r2) {
                              let i3 = t2.favorites.findIndex(
                                (e3) => e3.id === a4
                              ), n3 = i3 + r2;
                              if (i3 < 0 || n3 < 0 || n3 >= t2.favorites.length)
                                return;
                              let s3 = [...t2.favorites];
                              [s3[i3], s3[n3]] = [s3[n3], s3[i3]], c2(e2.id, s3), d2(e2.id, a4, s3), requestAnimationFrame(
                                () => g2.current.get(a4)?.focus()
                              );
                            })(n2.id, a3),
                            onDropped: () => d2(e2.id, n2.id)
                          },
                          n2.id
                        )
                      )
                    })
                  })
                ]
              },
              "favorites"
            ),
            (C2.length > 0 || !a2) && (0, r.jsxs)(
              m.PY1.section,
              {
                className: D().section,
                "aria-labelledby": `${b2}-projects`,
                initial: K,
                animate: V,
                exit: X,
                transition: i2 ? U : J,
                children: [
                  (0, r.jsx)(el, {
                    id: `${b2}-projects`,
                    text: "Projects",
                    rail: s2,
                    reduce: i2
                  }),
                  (0, r.jsx)("ul", {
                    className: D().list,
                    children: (0, r.jsx)(h.N, {
                      initial: false,
                      children: C2.map(
                        (n2) => (0, r.jsx)(
                          m.PY1.li,
                          {
                            className: D().item,
                            initial: k2 !== n2.id && K,
                            animate: V,
                            exit: X,
                            transition: i2 ? U : J,
                            children: (0, r.jsx)(ee, {
                              enabled: s2,
                              label: n2.name,
                              note: n2.unread ? "New activity" : void 0,
                              children: (0, r.jsxs)("button", {
                                ref: P2(n2.id),
                                type: "button",
                                className: D().row,
                                "aria-current": t2.active === n2.id ? "page" : void 0,
                                onClick: () => l2(e2.id, n2.id, n2.name),
                                children: [
                                  t2.active === n2.id && (0, r.jsx)(eo, { reduce: i2 }),
                                  (0, r.jsx)("span", {
                                    className: D().lead,
                                    children: (0, r.jsx)("span", {
                                      className: D().dot,
                                      "data-tone": n2.tone
                                    })
                                  }),
                                  (0, r.jsx)(es, {
                                    name: n2.name,
                                    query: a2,
                                    unread: n2.unread
                                  }),
                                  (0, r.jsx)("span", {
                                    className: D().trail,
                                    children: (0, r.jsx)(h.N, {
                                      initial: false,
                                      children: n2.unread && (0, r.jsx)(
                                        m.PY1.span,
                                        {
                                          className: D().unread,
                                          initial: {
                                            opacity: 0,
                                            scale: 0.4
                                          },
                                          animate: { opacity: 1, scale: 1 },
                                          exit: { opacity: 0, scale: 0.4 },
                                          transition: i2 ? U : B.snappy,
                                          children: (0, r.jsx)("span", {
                                            className: D().srOnly,
                                            children: ", new activity"
                                          })
                                        },
                                        "unread"
                                      )
                                    })
                                  }),
                                  (0, r.jsx)("span", {
                                    className: D().railDot,
                                    "aria-hidden": "true",
                                    children: (0, r.jsx)(h.N, {
                                      initial: false,
                                      children: n2.unread && (0, r.jsx)(
                                        m.PY1.span,
                                        {
                                          className: D().railDotFace,
                                          initial: { scale: 0 },
                                          animate: { scale: 1 },
                                          exit: { scale: 0 },
                                          transition: i2 ? U : B.snappy
                                        },
                                        "dot"
                                      )
                                    })
                                  })
                                ]
                              })
                            })
                          },
                          n2.id
                        )
                      )
                    })
                  }),
                  (0, r.jsx)(h.N, {
                    initial: false,
                    children: !a2 && (0, r.jsx)(
                      m.PY1.div,
                      {
                        initial: K,
                        animate: V,
                        exit: X,
                        transition: i2 ? U : J,
                        children: (0, r.jsx)(
                          eu,
                          {
                            first: 0 === v2,
                            tone: ea(t2.projects.length),
                            reduce: i2,
                            rail: s2,
                            onExpand: o2,
                            taken: (e3) => t2.projects.find(
                              (t3) => t3.name.toLowerCase() === e3.toLowerCase()
                            )?.name,
                            onCreate: function(t3, a3) {
                              let r2 = u2(e2.id, t3);
                              N2(r2), w2((e3) => e3 + 1), a3 && (j2.current = r2);
                            }
                          },
                          v2
                        )
                      },
                      "composer"
                    )
                  })
                ]
              },
              "projects"
            ),
            S2 && (0, r.jsx)(
              m.PY1.div,
              {
                className: D().empty,
                "data-rail-hidden": "",
                inert: s2,
                initial: i2 ? { opacity: 0 } : { opacity: 0, y: 6, filter: `blur(${H.soft}px)` },
                animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                exit: {
                  opacity: 0,
                  transition: { duration: i2 ? 0 : O.instant }
                },
                transition: i2 ? U : { duration: O.standard, ease: q, delay: O.fast },
                children: (0, r.jsxs)("div", {
                  className: D().emptyBody,
                  children: [
                    (0, r.jsxs)("p", {
                      children: ["Nothing matches \u201C", a2, "\u201D"]
                    }),
                    (0, r.jsxs)("span", {
                      children: [
                        "Search looks at favorites and projects in ",
                        e2.name,
                        "."
                      ]
                    }),
                    (0, r.jsx)(E.$, {
                      type: "button",
                      size: "sm",
                      variant: "secondary",
                      onClick: p2,
                      children: "Show all projects"
                    })
                  ]
                })
              },
              "empty"
            )
          ]
        })
      })
    });
  }
  function ed({
    item: e2,
    query: t2,
    active: a2,
    draggable: i2,
    reduce: s2,
    rail: o2,
    hint: l2,
    buttonRef: c2,
    onSelect: d2,
    onMove: u2,
    onDropped: p2
  }) {
    let m2 = (0, n.useRef)(false), h2 = (0, n.useRef)(null), f2 = (0, n.useRef)(null), _2 = (0, n.useRef)(false), x2 = (0, b.m)(), [g2, j2] = (0, n.useState)(false), v2 = I[e2.kind];
    function w2() {
      f2.current && (window.clearTimeout(f2.current.timer), f2.current = null);
    }
    function k2() {
      w2(), _2.current && requestAnimationFrame(() => {
        _2.current && (_2.current = false, j2(false));
      });
    }
    return (0, n.useEffect)(() => {
      let e3 = h2.current;
      if (!e3) return;
      let t3 = (e4) => {
        _2.current && e4.cancelable && e4.preventDefault();
      };
      return e3.addEventListener("touchmove", t3, { passive: false }), () => {
        e3.removeEventListener("touchmove", t3), f2.current && window.clearTimeout(f2.current.timer);
      };
    }, []), (0, r.jsx)(y.N, {
      ref: h2,
      value: e2,
      as: "li",
      className: D().item,
      "data-lifted": g2 ? "" : void 0,
      drag: !!i2 && "y",
      dragListener: false,
      dragControls: x2,
      dragMomentum: false,
      dragTransition: { bounceStiffness: 520, bounceDamping: 40 },
      initial: K,
      animate: V,
      exit: X,
      transition: s2 ? U : { ...J, layout: B.smooth },
      onPointerDown: function(e3) {
        if (m2.current = false, !i2 || 0 !== e3.button) return;
        if ("touch" !== e3.pointerType) return void x2.start(e3);
        let t3 = e3.nativeEvent;
        w2(), f2.current = {
          x: e3.clientX,
          y: e3.clientY,
          timer: window.setTimeout(() => {
            f2.current = null, _2.current = true, m2.current = true, j2(true), x2.start(t3);
          }, 320)
        };
      },
      onPointerMove: function(e3) {
        f2.current && Math.hypot(e3.clientX - f2.current.x, e3.clientY - f2.current.y) > 8 && w2();
      },
      onPointerUp: k2,
      onPointerCancel: k2,
      onContextMenu: (e3) => {
        (_2.current || f2.current) && e3.preventDefault();
      },
      onDragStart: () => {
        m2.current = true, j2(true);
      },
      onDragEnd: () => {
        _2.current = false, j2(false), p2();
      },
      children: (0, r.jsx)(ee, {
        enabled: o2 && !g2,
        label: e2.name,
        children: (0, r.jsxs)("button", {
          ref: c2,
          type: "button",
          className: D().row,
          "aria-current": a2 ? "page" : void 0,
          "aria-describedby": i2 ? l2 : void 0,
          onKeyDown: function(e3) {
            e3.altKey && i2 && ("ArrowUp" === e3.key || "ArrowDown" === e3.key) && (e3.preventDefault(), u2("ArrowUp" === e3.key ? -1 : 1));
          },
          onClick: () => {
            if (m2.current) {
              m2.current = false;
              return;
            }
            d2();
          },
          children: [
            a2 && (0, r.jsx)(eo, { reduce: s2 }),
            (0, r.jsx)("span", {
              className: D().lead,
              children: (0, r.jsx)(v2, {
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              })
            }),
            (0, r.jsx)(es, { name: e2.name, query: t2 })
          ]
        })
      })
    });
  }
  function eu({
    first: e2,
    tone: t2,
    reduce: a2,
    rail: i2,
    onExpand: s2,
    taken: o2,
    onCreate: l2
  }) {
    let c2 = (0, n.useId)(), [d2, u2] = (0, n.useState)("idle"), [p2, f2] = (0, n.useState)(""), [_2, x2] = (0, n.useState)(""), b2 = (0, n.useRef)(null), y2 = (0, n.useRef)(null), g2 = (0, n.useRef)(0);
    function j2(e3) {
      u2("idle"), f2(""), x2(""), e3 && requestAnimationFrame(() => y2.current?.focus());
    }
    function v2(e3) {
      if (e3?.preventDefault(), "open" !== d2) return;
      let t3 = p2.trim().replace(/\s+/g, " ");
      if (!t3) return void j2(true);
      let r2 = o2(t3);
      if (r2) return void x2(`There is already a project named ${r2}`);
      f2(t3), u2("commit");
      let i3 = !!e3;
      g2.current = window.setTimeout(() => l2(t3, i3), 280 * !a2);
    }
    (0, n.useEffect)(() => () => window.clearTimeout(g2.current), []);
    let w2 = "idle" === d2, N2 = a2 ? { opacity: 0 } : { opacity: 0, y: "0.3em", filter: `blur(${H.soft}px)` }, T2 = a2 ? { opacity: 0, transition: U } : {
      opacity: 0,
      y: "-0.3em",
      filter: `blur(${H.subtle}px)`,
      transition: { duration: O.instant, ease: W }
    };
    return (0, r.jsx)(m.PY1.div, {
      className: D().composerWrap,
      initial: !e2 && !a2 && { opacity: 0, y: -6, filter: `blur(${H.subtle}px)` },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      transition: { duration: O.standard, ease: q, delay: 0.04 },
      children: (0, r.jsxs)("form", {
        className: D().composer,
        "data-state": d2,
        "data-invalid": _2 ? "" : void 0,
        onSubmit: v2,
        children: [
          (0, r.jsx)("span", {
            className: D().lead,
            "aria-hidden": "true",
            children: (0, r.jsx)(h.N, {
              initial: false,
              mode: "popLayout",
              children: w2 ? (0, r.jsx)(
                m.PY1.span,
                {
                  className: D().plus,
                  initial: { opacity: 0, scale: 0.6 },
                  animate: { opacity: 1, scale: 1 },
                  exit: {
                    opacity: 0,
                    scale: 0.6,
                    transition: { duration: a2 ? 0 : O.instant }
                  },
                  transition: a2 ? U : B.snappy,
                  children: (0, r.jsx)(k.A, {
                    size: 15,
                    strokeWidth: 1.75
                  })
                },
                "plus"
              ) : (0, r.jsx)(
                m.PY1.span,
                {
                  className: D().dot,
                  "data-tone": t2,
                  "data-hollow": "open" === d2 ? "" : void 0,
                  initial: { opacity: 0, scale: 0.4 },
                  animate: {
                    opacity: 1,
                    scale: "commit" !== d2 || a2 ? 1 : [1, 1.45, 1]
                  },
                  exit: { opacity: 0, transition: U },
                  transition: a2 ? U : "commit" === d2 ? { duration: 0.32, ease: W } : B.snappy
                },
                "dot"
              )
            })
          }),
          (0, r.jsx)("span", {
            className: D().composerField,
            children: (0, r.jsx)(h.N, {
              initial: false,
              mode: "popLayout",
              children: w2 ? (0, r.jsx)(
                m.PY1.span,
                {
                  className: D().composerLabel,
                  "aria-hidden": "true",
                  initial: N2,
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: T2,
                  transition: a2 ? U : { duration: O.standard, ease: q },
                  children: "New project"
                },
                "label"
              ) : (0, r.jsx)(
                m.PY1.input,
                {
                  ref: b2,
                  id: `${c2}-name`,
                  className: D().composerInput,
                  value: p2,
                  maxLength: 32,
                  readOnly: "commit" === d2,
                  placeholder: "Project name",
                  "aria-label": "Project name",
                  "aria-invalid": !!_2 || void 0,
                  "aria-describedby": _2 ? `${c2}-error` : `${c2}-help`,
                  autoComplete: "off",
                  enterKeyHint: "done",
                  onChange: (e3) => {
                    f2(e3.target.value), _2 && x2("");
                  },
                  onKeyDown: function(e3) {
                    "Escape" === e3.key && (e3.preventDefault(), e3.stopPropagation(), j2(true));
                  },
                  onBlur: () => {
                    "open" === d2 && (p2.trim() && !_2 ? v2() : j2(false));
                  },
                  initial: N2,
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: T2,
                  transition: a2 ? U : { duration: O.standard, ease: q }
                },
                "input"
              )
            })
          }),
          (0, r.jsx)("span", {
            className: D().composerNote,
            "aria-hidden": "true",
            children: (0, r.jsx)(h.N, {
              initial: false,
              children: _2 && (0, r.jsx)(
                m.PY1.span,
                {
                  initial: N2,
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
                  exit: T2,
                  transition: a2 ? U : { duration: O.standard, ease: q },
                  children: "Name taken"
                },
                "taken"
              )
            })
          }),
          w2 && (0, r.jsx)(ee, {
            enabled: i2,
            label: "New project",
            children: (0, r.jsx)("button", {
              ref: y2,
              type: "button",
              className: D().composerTrigger,
              onClick: () => {
                i2 && s2(), u2("open"), requestAnimationFrame(() => b2.current?.focus());
              },
              children: "New project"
            })
          }),
          (0, r.jsx)("span", {
            id: `${c2}-help`,
            className: D().srOnly,
            children: "Press Enter to create the project or Escape to cancel."
          }),
          (0, r.jsx)("span", {
            id: `${c2}-error`,
            className: D().srOnly,
            role: "alert",
            children: _2
          })
        ]
      })
    });
  }
  function ep({
    className: e2,
    onNavigate: t2,
    defaultCollapsed: a2 = false,
    onCollapsedChange: i2
  }) {
    var f2, _2;
    let x2, b2, y2, g2, j2, v2 = (x2 = (0, n.useSyncExternalStore)(
      G,
      () => true,
      () => false
    ), !!(0, c.I)() && x2), w2 = (0, n.useSyncExternalStore)(
      Q,
      () => window.matchMedia(Z).matches,
      () => false
    ), [k2, E2] = (0, n.useState)(a2), [L2, M2] = (0, n.useState)(false), [A2, I2] = (0, n.useState)(false), z2 = (0, n.useRef)(false), H2 = (0, n.useRef)(false), q2 = (0, n.useRef)(false), K2 = k2 && !w2;
    !w2 && (L2 || A2) && (M2(false), I2(false));
    let V2 = (0, n.useId)(), X2 = (0, n.useRef)(null), J2 = (0, n.useRef)(null), es2 = (0, n.useRef)(null), eo2 = (0, n.useRef)(0), el2 = (0, d.d)(-4096), ed2 = (0, d.d)(1), eu2 = (0, n.useRef)(320), em2 = (0, n.useRef)(0), eh2 = (0, n.useRef)(null), ef2 = (0, u.G)(
      [el2, ed2],
      ([e3, t3]) => Math.min(1, Math.max(0, 1 + e3 / eu2.current)) * t3
    ), e_ = (0, n.useRef)(null), ex = (0, n.useRef)(null), eb = (f2 = () => {
      e_.current && delete e_.current.dataset.frozen;
    }, b2 = (0, d.d)(+!K2), y2 = (0, u.G)(b2, (e3) => `calc(64px + (var(--full) - 64px) * ${e3})`), g2 = (0, n.useEffectEvent)(f2), (0, n.useEffect)(() => {
      let e3 = +!K2;
      if (v2) {
        b2.jump(e3), K2 || g2();
        return;
      }
      let t3 = (0, p.i)(b2, e3, {
        ...B.smooth,
        onComplete: () => {
          K2 || g2();
        }
      });
      return () => t3.stop();
    }, [K2, v2, b2]), y2), [ey, eg] = (0, n.useState)("northwind"), [ej, ev] = (0, n.useState)(F), [ew, ek] = (0, n.useState)(""), [eN, eT] = (0, n.useState)(false), [eC, eS] = (0, n.useState)(""), [eP, eE] = (0, n.useState)(null), e$ = (0, n.useRef)(false), eR = (0, n.useRef)(null), eL = Y.find((e3) => e3.id === ey) ?? Y[0], eM = ej[eL.id], eD = eM.projects.find((e3) => e3.id === eM.active) ?? eM.favorites.find((e3) => e3.id === eM.active), eY = Math.round(eL.used / eL.limit * 100), eF = eY >= 90, eA = ew.trim();
    function eI(e3, t3) {
      ev((a3) => ({ ...a3, [e3]: t3(a3[e3]) }));
    }
    function eB() {
      window.clearTimeout(eo2.current);
      let e3 = J2.current;
      e3 && (eu2.current = e3.offsetLeft + e3.offsetWidth + 12), A2 || (el2.jump(-eu2.current), ed2.jump(+!v2)), I2(true), M2(true);
    }
    function eO(e3 = 0) {
      window.clearTimeout(eo2.current);
      let t3 = () => {
        let e4 = document.activeElement;
        z2.current = !e4 || e4 === document.body || !!J2.current?.contains(e4), M2(false);
      };
      e3 && !v2 ? eo2.current = window.setTimeout(t3, e3) : t3();
    }
    function ez(e3) {
      ek(e3);
      let t3 = e3.trim();
      if (!t3) return void eS("Showing all favorites and projects");
      let a3 = ej[ey], r2 = a3.favorites.filter((e4) => er(e4.name, t3)).length + a3.projects.filter((e4) => er(e4.name, t3)).length;
      eS(
        0 === r2 ? `No results for ${t3}` : `${r2} ${1 === r2 ? "result" : "results"}`
      );
    }
    function eH(e3) {
      if (e3 === k2) return;
      let t3 = e_.current;
      !e3 || !t3 || "frozen" in t3.dataset || (t3.style.setProperty("--search-width", `${t3.clientWidth}px`), t3.dataset.frozen = "");
      let a3 = document.activeElement;
      e3 && a3 instanceof HTMLElement && a3.closest("[data-rail-hidden]") && X2.current?.contains(a3) && ex.current?.focus(), E2(e3), eS(e3 ? "Sidebar collapsed" : "Sidebar expanded"), i2?.(e3);
    }
    function eq(e3) {
      let t3 = eh2.current;
      if (!t3 || t3.id !== e3.pointerId || (eh2.current = null, "x" !== t3.axis))
        return;
      let a3 = el2.get();
      "pointercancel" !== e3.type && (a3 < -eu2.current / 3 || t3.velocity < -500) ? (em2.current = t3.velocity, eO()) : (0, p.i)(el2, 0, v2 ? U : { ...B.smooth, velocity: t3.velocity });
    }
    _2 = w2 && L2, (0, n.useEffect)(() => {
      if (!_2) return;
      let e3 = document.documentElement, t3 = { overflow: e3.style.overflow, gutter: e3.style.scrollbarGutter };
      return e3.scrollHeight > e3.clientHeight && (e3.style.scrollbarGutter = "stable"), e3.style.overflow = "hidden", () => {
        e3.style.overflow = t3.overflow, e3.style.scrollbarGutter = t3.gutter;
      };
    }, [_2]), (0, n.useEffect)(() => () => window.clearTimeout(eo2.current), []), (0, n.useEffect)(() => {
      L2 ? J2.current?.focus({ preventScroll: true }) : z2.current && (z2.current = false, es2.current?.focus({ preventScroll: true, focusVisible: false }));
    }, [L2]), (0, n.useEffect)(() => {
      if (!A2) return;
      let e3 = () => {
        L2 || I2(false);
      };
      if (v2) {
        L2 && el2.jump(0);
        let t4 = (0, p.i)(ed2, +!!L2, {
          duration: O.fast,
          ease: W,
          onComplete: () => {
            L2 || el2.jump(-eu2.current), e3();
          }
        });
        return () => t4.stop();
      }
      ed2.jump(1);
      let t3 = em2.current;
      em2.current = 0;
      let a3 = (0, p.i)(el2, L2 ? 0 : -eu2.current, {
        ...B.smooth,
        velocity: t3,
        onComplete: e3
      });
      return () => a3.stop();
    }, [L2, A2, v2, el2, ed2]), j2 = (0, n.useEffectEvent)((e3) => {
      if ("[" !== e3.key || e3.repeat || e3.metaKey || e3.ctrlKey || e3.altKey || e3.defaultPrevented)
        return;
      let t3 = X2.current, a3 = e3.target instanceof HTMLElement ? e3.target : null;
      if (!t3 || a3 && (a3.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(a3.tagName) || a3.closest('[role="menu"], [role="dialog"]')))
        return;
      let r2 = t3.getBoundingClientRect();
      !r2.width || r2.bottom < 0 || r2.top > window.innerHeight || (e3.preventDefault(), (() => {
        w2 ? L2 ? eO() : eB() : eH(!k2);
      })());
    }), (0, n.useEffect)(() => {
      let e3 = (e4) => j2(e4);
      return window.addEventListener("keydown", e3), () => window.removeEventListener("keydown", e3);
    }, []);
    let eW = (0, r.jsxs)(m.PY1.nav, {
      ref: X2,
      id: V2,
      className: [D().sidebar, e2].filter(Boolean).join(" "),
      "aria-label": "Workspace",
      style: w2 ? void 0 : { width: eb },
      "data-rail": K2 || void 0,
      "data-placement": w2 ? "drawer" : "inline",
      children: [
        (0, r.jsxs)("div", {
          className: D().header,
          children: [
            (0, r.jsxs)(o.bL, {
              onOpenChange: (e3) => {
                q2.current = e3, e3 && eE(null);
              },
              children: [
                (0, r.jsx)(ee, {
                  enabled: K2,
                  label: eL.name,
                  note: `${eL.plan} plan`,
                  children: (0, r.jsxs)(o.l9, {
                    ref: eR,
                    className: D().switcher,
                    "aria-label": `${eL.name}, ${eL.plan} plan. Switch workspace`,
                    children: [
                      (0, r.jsx)(en, { workspace: eL, reduce: v2 }),
                      (0, r.jsxs)("span", {
                        className: D().switcherText,
                        children: [
                          (0, r.jsx)(R.g, {
                            className: D().workspaceName,
                            children: eL.name
                          }),
                          (0, r.jsx)(ei, {
                            className: D().workspaceMeta,
                            text: `${eL.plan} \xB7 ${eL.members}`,
                            reduce: v2
                          })
                        ]
                      }),
                      (0, r.jsx)(N.A, {
                        className: D().chevron,
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      })
                    ]
                  })
                }),
                (0, r.jsx)(o.ZL, {
                  children: (0, r.jsxs)(o.UC, {
                    className: D().menu,
                    align: "start",
                    sideOffset: 6,
                    collisionPadding: 12,
                    loop: true,
                    onFocus: function(e3) {
                      let t3 = e3.target instanceof HTMLElement ? e3.target.closest('[role="menuitemradio"]') : null;
                      if (!t3) return void eE(null);
                      let a3 = e$.current;
                      eE((e4) => ({
                        top: t3.offsetTop,
                        height: t3.offsetHeight,
                        glide: a3 && null !== e4
                      }));
                    },
                    onCloseAutoFocus: (e3) => {
                      e$.current && (e3.preventDefault(), eR.current?.focus({
                        preventScroll: true,
                        focusVisible: false
                      }));
                    },
                    onPointerMoveCapture: () => {
                      e$.current = true;
                    },
                    onKeyDownCapture: () => {
                      e$.current = false;
                    },
                    children: [
                      (0, r.jsx)(m.PY1.span, {
                        className: D().menuHighlight,
                        "aria-hidden": "true",
                        initial: false,
                        animate: eP ? { y: eP.top, height: eP.height, opacity: 1 } : { opacity: 0 },
                        transition: {
                          default: eP?.glide && !v2 ? B.snappy : U,
                          opacity: { duration: 0.08 * !v2 }
                        }
                      }),
                      (0, r.jsx)(o.JU, {
                        className: D().menuLabel,
                        children: "Switch workspace"
                      }),
                      (0, r.jsx)(o.z6, {
                        value: ey,
                        onValueChange: function(e3) {
                          let t3 = Y.find((t4) => t4.id === e3);
                          t3 && e3 !== ey && (eg(e3), eS(`Switched to ${t3.name}`));
                        },
                        children: Y.map(
                          (e3, t3) => (0, r.jsxs)(
                            o.hN,
                            {
                              value: e3.id,
                              className: D().menuItem,
                              style: { "--i": t3 },
                              children: [
                                (0, r.jsx)(en, {
                                  workspace: e3,
                                  small: true,
                                  reduce: v2
                                }),
                                (0, r.jsxs)("span", {
                                  className: D().menuText,
                                  children: [
                                    (0, r.jsx)("span", { children: e3.name }),
                                    (0, r.jsxs)("small", {
                                      children: [
                                        e3.plan,
                                        " plan \xB7 ",
                                        e3.members
                                      ]
                                    })
                                  ]
                                }),
                                (0, r.jsx)(o.VF, {
                                  className: D().menuCheck,
                                  children: (0, r.jsx)(T.A, {
                                    size: 16,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  })
                                })
                              ]
                            },
                            e3.id
                          )
                        )
                      })
                    ]
                  })
                })
              ]
            }),
            (0, r.jsxs)("div", {
              className: D().searchRow,
              children: [
                (0, r.jsx)("div", {
                  ref: e_,
                  className: D().searchClip,
                  "data-rail-hidden": "",
                  inert: K2,
                  children: (0, r.jsx)("div", {
                    className: D().search,
                    children: (0, r.jsx)($.L, {
                      label: "Search favorites and projects",
                      placeholder: "Search",
                      value: ew,
                      onValueChange: ez,
                      onKeyDown: (e3) => {
                        "Escape" === e3.key && ew && (e3.preventDefault(), ez(""));
                      }
                    })
                  })
                }),
                w2 ? (0, r.jsx)("button", {
                  ref: ex,
                  type: "button",
                  className: D().toggle,
                  "aria-label": "Close sidebar",
                  onClick: () => eO(),
                  children: (0, r.jsx)(C.A, {
                    size: 18,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                }) : (0, r.jsx)(ee, {
                  label: k2 ? "Expand sidebar" : "Collapse sidebar",
                  shortcut: "[",
                  side: k2 ? "right" : "bottom",
                  children: (0, r.jsx)("button", {
                    ref: ex,
                    type: "button",
                    className: D().toggle,
                    "aria-label": k2 ? "Expand sidebar" : "Collapse sidebar",
                    "aria-expanded": !k2,
                    "aria-keyshortcuts": "[",
                    onClick: () => eH(!k2),
                    children: (0, r.jsx)(et, { collapsed: k2, reduce: v2 })
                  })
                })
              ]
            })
          ]
        }),
        (0, r.jsx)(m.PY1.div, {
          className: D().scroll,
          layoutScroll: true,
          children: (0, r.jsx)("div", {
            className: D().stack,
            children: (0, r.jsx)(h.N, {
              initial: false,
              children: (0, r.jsx)(
                ec,
                {
                  workspace: eL,
                  lists: eM,
                  query: eA,
                  reduce: v2,
                  rail: K2,
                  onExpand: () => eH(false),
                  onSelect: function(e3, a3, r2) {
                    eI(e3, (e4) => ({
                      ...e4,
                      active: a3,
                      projects: e4.projects.map(
                        (e5) => e5.id === a3 ? { ...e5, unread: false } : e5
                      )
                    })), t2?.({ workspace: e3, id: a3, name: r2 }), w2 && eO(140);
                  },
                  onReorder: (e3, t3) => eI(e3, (e4) => ({ ...e4, favorites: t3 })),
                  onMoved: function(e3, t3, a3 = ej[e3].favorites) {
                    let r2 = a3.findIndex((e4) => e4.id === t3);
                    r2 >= 0 && eS(
                      `${a3[r2].name} moved to position ${r2 + 1} of ${a3.length}`
                    );
                  },
                  onCreate: function(e3, a3) {
                    let r2 = ej[e3].projects.length, i3 = {
                      id: `${a3.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${r2}`,
                      name: a3,
                      tone: ea(r2),
                      unread: false
                    };
                    return eI(e3, (e4) => ({
                      ...e4,
                      active: i3.id,
                      projects: [...e4.projects, i3]
                    })), eS(`Created ${a3}`), t2?.({ workspace: e3, id: i3.id, name: a3 }), w2 && eO(420), i3.id;
                  },
                  onClear: () => ez("")
                },
                eL.id
              )
            })
          })
        }),
        (0, r.jsxs)("div", {
          className: D().footer,
          children: [
            (0, r.jsx)(m.PY1.div, {
              className: D().storageFold,
              "data-rail-hidden": "",
              inert: K2,
              initial: false,
              animate: { height: K2 ? 0 : "auto" },
              transition: v2 ? U : B.smooth,
              children: (0, r.jsxs)("div", {
                className: D().storage,
                "data-full": eF ? "" : void 0,
                children: [
                  (0, r.jsxs)("div", {
                    className: D().storageHead,
                    children: [
                      (0, r.jsx)(ei, {
                        className: D().storageLabel,
                        text: eF ? "Storage almost full" : "Storage",
                        reduce: v2
                      }),
                      (0, r.jsx)("span", {
                        className: D().percent,
                        children: (0, r.jsx)(S.q, { value: eY, suffix: "%" })
                      })
                    ]
                  }),
                  (0, r.jsx)("div", {
                    className: D().track,
                    role: "meter",
                    "aria-label": "Storage used",
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    "aria-valuenow": eY,
                    "aria-valuetext": `${eY}%, ${eL.used} of ${eL.limit} GB`,
                    children: (0, r.jsx)(m.PY1.span, {
                      className: D().fill,
                      initial: false,
                      animate: { scaleX: eY / 100 },
                      transition: v2 ? U : B.smooth
                    })
                  }),
                  (0, r.jsx)(ei, {
                    className: D().storageDetail,
                    text: `${eL.used} GB of ${eL.limit} GB`,
                    reduce: v2
                  })
                ]
              })
            }),
            (0, r.jsx)(ee, {
              enabled: K2,
              label: "Emma Collins",
              note: eN ? "Away" : "Active",
              children: (0, r.jsxs)("button", {
                type: "button",
                className: D().user,
                onClick: function() {
                  eT((e3) => !e3), eS(eN ? "Status set to active" : "Status set to away");
                },
                "aria-label": `Emma Collins, ${eN ? "away" : "active"}. Set status to ${eN ? "active" : "away"}`,
                children: [
                  (0, r.jsx)(P.e, {
                    name: "Emma Collins",
                    src: "media/people/emma-collins.svg",
                    size: "md",
                    status: eN ? "offline" : "online"
                  }),
                  (0, r.jsxs)("span", {
                    className: D().userText,
                    children: [
                      (0, r.jsx)("span", {
                        className: D().userName,
                        children: "Emma Collins"
                      }),
                      (0, r.jsx)(R.g, {
                        className: D().userStatus,
                        children: eN ? "Away" : "Active"
                      })
                    ]
                  }),
                  (0, r.jsx)(ei, {
                    className: D().userHint,
                    text: eN ? "Set active" : "Set away",
                    reduce: v2
                  })
                ]
              })
            })
          ]
        }),
        (0, r.jsx)("p", {
          className: D().srOnly,
          role: "status",
          "aria-live": "polite",
          children: eC
        })
      ]
    });
    return w2 ? (0, r.jsxs)(l.Kq, {
      delayDuration: 250,
      skipDelayDuration: 300,
      children: [
        (0, r.jsxs)("div", {
          className: D().topbar,
          inert: L2,
          children: [
            (0, r.jsx)("button", {
              ref: es2,
              type: "button",
              className: D().opener,
              "aria-label": "Open sidebar",
              "aria-expanded": L2,
              "aria-controls": V2,
              "aria-keyshortcuts": "[",
              onClick: eB,
              children: (0, r.jsx)(et, { collapsed: true, reduce: v2 })
            }),
            (0, r.jsx)(en, { workspace: eL, small: true, reduce: v2 }),
            (0, r.jsxs)("span", {
              className: D().topbarText,
              children: [
                (0, r.jsx)(ei, {
                  className: D().topbarPage,
                  text: eD?.name ?? eL.name,
                  reduce: v2
                }),
                (0, r.jsx)(ei, {
                  className: D().topbarWorkspace,
                  text: eL.name,
                  reduce: v2
                })
              ]
            })
          ]
        }),
        (0, s.createPortal)(
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(m.PY1.div, {
                className: D().backdrop,
                "data-open": L2 ? "" : void 0,
                "data-shown": A2 ? "" : void 0,
                "aria-hidden": "true",
                style: { opacity: ef2 },
                onPointerDown: () => {
                  H2.current = !q2.current;
                },
                onClick: () => {
                  H2.current && eO(), H2.current = false;
                }
              }),
              (0, r.jsx)(m.PY1.div, {
                ref: J2,
                className: D().sheet,
                "data-shown": A2 ? "" : void 0,
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Workspace sidebar",
                tabIndex: -1,
                inert: !L2,
                onKeyDown: function(e3) {
                  let t3 = e3.target instanceof Element ? e3.target : null;
                  if (e3.defaultPrevented || !J2.current || !t3 || !J2.current.contains(t3))
                    return;
                  if ("Escape" === e3.key) {
                    e3.preventDefault(), eO();
                    return;
                  }
                  if ("Tab" !== e3.key) return;
                  let a3 = [
                    ...J2.current.querySelectorAll(
                      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
                    )
                  ].filter(
                    (e4) => !e4.closest("[inert]") && e4.getClientRects().length > 0
                  );
                  if (!a3.length) return;
                  let r2 = a3[0], i3 = a3[a3.length - 1];
                  e3.shiftKey && (document.activeElement === r2 || document.activeElement === J2.current) ? (e3.preventDefault(), i3.focus()) : e3.shiftKey || document.activeElement !== i3 || (e3.preventDefault(), r2.focus());
                },
                style: { x: el2, opacity: ed2 },
                onPointerDown: function(e3) {
                  if ("mouse" === e3.pointerType || !L2 || eh2.current) return;
                  let t3 = e3.target instanceof Element ? e3.target : null;
                  t3?.closest("input, textarea, [data-lifted]") || (eh2.current = {
                    id: e3.pointerId,
                    x: e3.clientX,
                    y: e3.clientY,
                    time: e3.timeStamp,
                    axis: null,
                    velocity: 0
                  });
                },
                onPointerMove: function(e3) {
                  let t3 = eh2.current;
                  if (!t3 || t3.id !== e3.pointerId) return;
                  let a3 = e3.clientX - t3.x, r2 = e3.clientY - t3.y;
                  if (!t3.axis) {
                    if (8 > Math.hypot(a3, r2)) return;
                    t3.axis = Math.abs(a3) > 1.2 * Math.abs(r2) && !J2.current?.querySelector("[data-lifted]") ? "x" : "y", "x" === t3.axis && (t3.x = e3.clientX, e3.currentTarget.setPointerCapture(e3.pointerId));
                    return;
                  }
                  if ("x" !== t3.axis) return;
                  let i3 = e3.clientX - t3.x, n2 = i3 > 0 ? 10 * (1 - Math.exp(-i3 / 60)) : i3, s2 = Math.max(1, e3.timeStamp - t3.time);
                  t3.velocity = (n2 - el2.get()) / s2 * 1e3, t3.time = e3.timeStamp, el2.jump(n2);
                },
                onPointerUp: eq,
                onPointerCancel: eq,
                children: eW
              })
            ]
          }),
          document.body
        )
      ]
    }) : (0, r.jsx)(l.Kq, {
      delayDuration: 250,
      skipDelayDuration: 300,
      children: eW
    });
  }
  var em = a(33627), eh = a.n(em);
  function ef() {
    return (0, r.jsx)("div", {
      className: eh().demo,
      children: (0, r.jsx)(ep, { className: eh().sidebar })
    });
  }
}

__m(__module,__exports,__require);
}