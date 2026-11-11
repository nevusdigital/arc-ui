function(__module,__exports,__require){
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
}