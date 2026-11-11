function(__module,__exports,__require){
"use strict";
const __m = (e, t, i) => {
  "use strict";
  i.r(t), i.d(t, { InvitePeople: () => ee, default: () => et });
  var a = i(95155), n = i(12115), s = i(5772), r = i(18310), l = i(25354), o = i(80642), d = i(9937), p = i(57700), c = i(35484), m = i(9005), h = i(12363), u = i(75796), g = i(39421), y = i(92298), v = i(9383), _ = i(92571), f = i(64577), x = i(65024), k = i(7770), j = i(67752);
  let b = [
    {
      value: "admin",
      label: "Admin",
      description: "Manages members and billing"
    },
    {
      value: "member",
      label: "Member",
      description: "Creates and edits projects"
    },
    {
      value: "guest",
      label: "Guest",
      description: "Views shared projects only"
    }
  ], w = (e2) => b.find((t2) => t2.value === e2).label, N = "fieldwork.example", $ = (e2) => `${e2.replace("-", ".")}@${N}`, A = j.c0.map((e2) => ({
    email: $(e2.id),
    name: e2.name,
    title: e2.role,
    src: e2.src
  })), S = (e2) => A.find((t2) => t2.email === $(e2)), P = [
    "diane-foster",
    "nathan-cole",
    "jasmine-brooks",
    "daniel-kim",
    "chloe-nguyen"
  ].map(S), T = { entry: S("tyler-hayes"), role: "member", note: "Sent 2 days ago" }, I = {
    starter: { name: "Starter", seats: 10 },
    team: { name: "Team", seats: 25 }
  }, C = /^[^\s@<>(),;:"]+@[^\s@<>(),;:"]+\.[a-z]{2,}$/i;
  function R(e2) {
    return /[,;\n]/.test(e2) ? e2.split(/[,;\n]+/) : (e2.match(/@/g)?.length ?? 0) > 1 ? e2.split(/\s+/) : [e2];
  }
  var M = i(59752), z = i.n(M);
  let { spring: E, duration: L, ease: D, blur: O } = k.T, W = [...D.enter], Y = { type: "spring", visualDuration: 0.5, bounce: 0 }, H = [
    [0, -6, 6, -4, 4, -2, 0],
    [0, 6, -6, 4, -4, 2, 0]
  ], B = { size: 16, strokeWidth: 1.75, "aria-hidden": true }, F = (...e2) => e2.filter(Boolean).join(" "), V = (e2, t2, i2 = `${t2}s`) => `${e2} ${1 === e2 ? t2 : i2}`, U = () => () => {
  };
  function q() {
    let e2 = (0, n.useSyncExternalStore)(
      U,
      () => true,
      () => false
    );
    return !!(0, r.I)() && e2;
  }
  function K({ children: e2, className: t2 }) {
    let i2 = q(), s2 = (0, n.useRef)(null), [r2, o2] = (0, n.useState)("auto");
    return (0, n.useLayoutEffect)(() => {
      let e3 = s2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => o2(e3.offsetWidth));
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, a.jsx)(l.PY1.span, {
      className: F(z().autoWidth, t2),
      initial: false,
      animate: { width: r2 },
      transition: i2 ? { duration: 0 } : E.morph,
      children: (0, a.jsx)("span", {
        ref: s2,
        className: z().autoWidthInner,
        children: e2
      })
    });
  }
  function G({ children: e2, className: t2, decor: i2 }) {
    let s2 = q(), r2 = (0, n.useRef)(null), [o2, d2] = (0, n.useState)("auto");
    return (0, n.useLayoutEffect)(() => {
      let e3 = r2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => d2(e3.offsetHeight));
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, a.jsxs)(l.PY1.div, {
      className: t2,
      initial: false,
      animate: { height: o2 },
      transition: s2 ? { duration: 0 } : E.smooth,
      children: [i2, (0, a.jsx)("div", { ref: r2, children: e2 })]
    });
  }
  function J({ id: e2, children: t2 }) {
    let i2 = q();
    return (0, a.jsx)("span", {
      className: z().swap,
      children: (0, a.jsx)(o.N, {
        initial: false,
        mode: "popLayout",
        children: (0, a.jsx)(
          l.PY1.span,
          {
            className: z().swapItem,
            initial: i2 ? { opacity: 0 } : { opacity: 0, y: "0.4em", filter: `blur(${O.subtle}px)` },
            animate: {
              opacity: 1,
              y: "0em",
              filter: "blur(0px)",
              transitionEnd: { filter: "none" }
            },
            exit: i2 ? { opacity: 0, transition: { duration: 0 } } : {
              opacity: 0,
              y: "-0.4em",
              filter: `blur(${O.subtle}px)`,
              transition: { duration: L.fast }
            },
            transition: i2 ? { duration: L.instant } : { duration: L.standard, ease: W },
            children: t2
          },
          e2
        )
      })
    });
  }
  function Q({ children: e2, className: t2 }) {
    let i2 = q();
    return (0, a.jsx)(l.PY1.div, {
      className: F(z().collapse, t2),
      initial: { height: 0, opacity: 0 },
      animate: { height: "auto", opacity: 1 },
      exit: { height: 0, opacity: 0 },
      transition: i2 ? { duration: 0 } : { height: E.smooth, opacity: { duration: L.standard } },
      children: e2
    });
  }
  function X({ entry: e2, size: t2, layoutId: i2, alt: n2 = "" }) {
    return (0, a.jsx)(l.PY1.span, {
      layoutId: i2,
      className: z().avatar,
      style: { width: t2, height: t2, borderRadius: "50%" },
      transition: { layout: Y },
      children: e2.src ? (0, a.jsx)(s.default, {
        src: e2.src,
        alt: n2,
        width: t2,
        height: t2,
        sizes: `${t2}px`,
        draggable: false
      }) : (0, a.jsx)("span", {
        className: z().initial,
        "aria-hidden": !n2 || void 0,
        role: n2 ? "img" : void 0,
        "aria-label": n2 || void 0,
        children: e2.email.charAt(0).toUpperCase()
      })
    });
  }
  let Z = () => [
    {
      key: T.entry.email,
      entry: T.entry,
      role: T.role,
      status: "sent",
      note: T.note
    }
  ];
  function ee() {
    let e2 = (0, n.useId)(), t2 = q(), i2 = (0, n.useRef)(null), s2 = (0, n.useRef)(null), r2 = (0, n.useRef)(null), k2 = (0, n.useRef)(null), j2 = (0, n.useRef)(null), $2 = (0, n.useRef)(0), S2 = (0, n.useRef)(false), T2 = (0, n.useRef)([]), [M2, D2] = (0, n.useState)(P), [O2, W2] = (0, n.useState)(Z), [Y2, U2] = (0, n.useState)([]), [ee2, et2] = (0, n.useState)("starter"), [ei, ea] = (0, n.useState)(""), [en, es] = (0, n.useState)(false), [er, el] = (0, n.useState)(false), [eo, ed] = (0, n.useState)(0), [ep, ec] = (0, n.useState)(false), [em, eh] = (0, n.useState)(null), [eu, eg] = (0, n.useState)(null), [ey, ev] = (0, n.useState)(0), [e_, ef] = (0, n.useState)(0), [ex, ek] = (0, n.useState)({}), [ej, eb] = (0, n.useState)(""), ew = (0, n.useRef)(O2);
    (0, n.useEffect)(() => {
      ew.current = O2;
    }), (0, n.useEffect)(() => {
      let e3 = T2.current;
      return () => e3.forEach((e8) => window.clearTimeout(e8));
    }, []);
    let eN = (e3, t3) => {
      T2.current.push(window.setTimeout(t3, e3));
    }, e$ = (t3) => `${e2}-avatar-${t3}`, eA = Y2.filter((e3) => "ok" === e3.kind), eS = Y2.filter((e3) => "error" === e3.kind), eP = (0, n.useMemo)(() => new Set(M2.map((e3) => e3.email)), [M2]), eT = (0, n.useMemo)(() => new Set(O2.map((e3) => e3.key)), [O2]), eI = O2.filter((e3) => "joined" === e3.status).length, eC = M2.length + eI, eR = O2.length - eI, eM = eA.length, ez = I[ee2].seats, eE = eC + eR + eM, eL = Math.max(0, eE - ez), eD = 0 === eM || eS.length > 0 || eL > 0, eO = (0, n.useMemo)(() => {
      let e3 = ei.trim().toLowerCase(), t3 = new Set(Y2.map((e8) => e8.key)), i3 = (e8) => eP.has(e8.email) ? "On the team" : eT.has(e8.email) ? "Invited" : t3.has(e8.email) ? "Added" : null;
      if (!e3)
        return A.filter((e8) => !i3(e8)).slice(0, 4).map((e8) => ({
          id: e8.email,
          kind: "person",
          entry: e8,
          note: e8.title ?? ""
        }));
      let a2 = A.filter(
        (t4) => t4.name.toLowerCase().includes(e3) || t4.email.includes(e3)
      ).map((e8) => {
        let t4 = i3(e8);
        return {
          id: e8.email,
          kind: t4 ? "blocked" : "person",
          entry: e8,
          note: t4 ?? e8.title ?? ""
        };
      }).sort(
        (e8, t4) => Number("blocked" === e8.kind) - Number("blocked" === t4.kind)
      ).slice(0, 5);
      return !C.test(e3) || A.some((t4) => t4.email === e3) || t3.has(e3) || a2.unshift({
        id: `new:${e3}`,
        kind: "email",
        entry: { email: e3 },
        note: "Invite by email"
      }), a2;
    }, [Y2, eT, ei, eP]), eW = eO.findIndex((e3) => "blocked" !== e3.kind), eY = eO[eo] && "blocked" !== eO[eo].kind ? eo : eW, eH = en && !er && (eO.length > 0 || !!ei.trim()), eB = `${e2}-list`, eF = `${e2}-hint`, eV = `${e2}-errors`, eU = `${e2}-seats`, eq = `${e2}-pending`, eK = (e3) => {
      eg(e3), eN(3200, () => eg((t3) => t3 === e3 ? null : t3));
    }, eG = (e3) => {
      let t3 = { team: eP, pending: eT }, i3 = [...Y2], a2 = 0, n2 = 0, s3 = 0;
      for (let r4 of R(e3)) {
        let e8 = (function(e10, t4) {
          let i4 = e10.match(/<\s*([^<>\s]+)\s*>/), a3 = (i4 ? i4[1] : e10).trim().replace(/^["']+|["']+$/g, "").trim();
          if (!a3) return null;
          let n3 = a3.toLowerCase().replace(/\s+/g, " "), s4 = A.find((e11) => e11.name?.toLowerCase() === n3) ?? (C.test(a3) ? A.find((e11) => e11.email === n3) ?? { email: n3 } : void 0);
          if (s4) {
            let e11 = s4.name ?? s4.email;
            return t4.team.has(s4.email) ? {
              kind: "error",
              text: a3,
              message: `${e11} is already on the team`
            } : t4.pending.has(s4.email) ? {
              kind: "error",
              text: a3,
              message: `${e11} already has a pending invite`
            } : { kind: "ok", entry: s4 };
          }
          let r5 = `\u201C${a3}\u201D`;
          if (!a3.includes("@"))
            return {
              kind: "error",
              text: a3,
              message: `${r5} isn\u2019t an email address`
            };
          let l2 = a3.lastIndexOf("@"), o2 = a3.slice(0, l2), d2 = a3.slice(l2 + 1);
          return o2 ? d2 ? d2.includes(".") ? {
            kind: "error",
            text: a3,
            message: `${r5} isn\u2019t a valid email address`
          } : {
            kind: "error",
            text: a3,
            message: `${r5} needs a full domain, like ${N}`
          } : {
            kind: "error",
            text: a3,
            message: `${r5} is missing a domain`
          } : {
            kind: "error",
            text: a3,
            message: `${r5} is missing a name before the @`
          };
        })(r4, t3);
        if (e8)
          if ("ok" === e8.kind) {
            if (i3.some((t4) => t4.key === e8.entry.email)) {
              s3++;
              continue;
            }
            i3.push({
              kind: "ok",
              key: e8.entry.email,
              entry: e8.entry,
              role: "member",
              flown: false
            }), a2++;
          } else {
            if (i3.some(
              (t4) => "error" === t4.kind && t4.text.toLowerCase() === e8.text.toLowerCase()
            )) {
              s3++;
              continue;
            }
            i3.push({
              kind: "error",
              key: `error-${$2.current++}`,
              text: e8.text,
              message: e8.message
            }), n2++;
          }
      }
      U2(i3), ec(false);
      let r3 = [
        a2 && `Added ${V(a2, "person", "people")}`,
        n2 && `${V(n2, "entry", "entries")} need a fix`,
        s3 && `skipped ${V(s3, "duplicate")}`
      ].filter(Boolean);
      if (r3.length) {
        let e8 = r3.join(", ").replace(/^./, (e10) => e10.toUpperCase());
        eb(e8), (r3.length > 1 || s3) && eK(e8);
      }
    }, eJ = (e3) => {
      e3 && "blocked" !== e3.kind && (U2(
        (t3) => t3.some((t4) => t4.key === e3.entry.email) ? t3 : [
          ...t3,
          {
            kind: "ok",
            key: e3.entry.email,
            entry: e3.entry,
            role: "member",
            flown: "person" === e3.kind
          }
        ]
      ), ea(""), ed(0), ec(false), eb(`Added ${e3.entry.name ?? e3.entry.email}`));
    }, eQ = (e3, t3) => {
      U2((t4) => t4.filter((t5) => t5.key !== e3)), ec(false), eb(`Removed ${t3}`), s2.current?.focus({ preventScroll: true });
    }, eX = (e3, t3) => {
      let a2 = i2.current;
      if (!a2) return;
      if (em?.key === e3) return void eh(null);
      let n2 = a2.getBoundingClientRect(), s3 = t3.getBoundingClientRect();
      k2.current = t3, eh({
        key: e3,
        x: Math.max(8, Math.min(s3.left - n2.left - 8, n2.width - 232 - 8)),
        y: s3.bottom - n2.top + 6
      });
    }, eZ = (e3) => {
      eh(null), e3 && k2.current?.focus({ preventScroll: true });
    }, e0 = em ? eA.find((e3) => e3.key === em.key) : void 0, e1 = e0?.key;
    (0, n.useEffect)(() => {
      if (!e1) return;
      r2.current?.querySelector('[aria-checked="true"]')?.focus({ preventScroll: true });
      let e3 = (e8) => {
        let t3 = e8.target;
        r2.current?.contains(t3) || k2.current?.contains(t3) || eh(null);
      };
      return document.addEventListener("pointerdown", e3), () => document.removeEventListener("pointerdown", e3);
    }, [e1]);
    let e22 = t2 ? { duration: 0 } : E.smooth, e5 = t2 ? { duration: 0 } : E.snappy, e6 = t2 ? { duration: 0 } : E.smooth, e7 = M2.slice(0, 5), e4 = M2.length - e7.length, e9 = (e3) => `${Math.min(100, e3 / ez * 100)}%`;
    return (0, a.jsx)(d.x, {
      reducedMotion: "user",
      children: (0, a.jsx)(p.o, {
        id: e2,
        children: (0, a.jsxs)("section", {
          ref: i2,
          className: z().root,
          "aria-labelledby": `${e2}-title`,
          children: [
            (0, a.jsxs)("header", {
              className: z().header,
              children: [
                (0, a.jsxs)("div", {
                  className: z().heading,
                  children: [
                    (0, a.jsx)("h2", {
                      id: `${e2}-title`,
                      className: z().title,
                      children: "Invite teammates"
                    }),
                    (0, a.jsx)("p", {
                      className: z().subtitle,
                      children: "Add people to Fieldwork by name or email"
                    })
                  ]
                }),
                (0, a.jsx)("ul", {
                  className: z().team,
                  "aria-label": `Team, ${V(M2.length, "member")}`,
                  children: (0, a.jsxs)(o.N, {
                    initial: false,
                    mode: "popLayout",
                    children: [
                      e7.map(
                        (e3) => (0, a.jsx)(
                          l.PY1.li,
                          {
                            layout: "position",
                            className: z().teamItem,
                            initial: false,
                            animate: { opacity: 1, scale: 1 },
                            exit: { opacity: 0, scale: 0.9 },
                            transition: { ...e5, layout: e6 },
                            children: (0, a.jsx)(X, {
                              entry: e3,
                              size: 28,
                              layoutId: e$(e3.email),
                              alt: e3.name ?? e3.email
                            })
                          },
                          e3.email
                        )
                      ),
                      e4 > 0 && (0, a.jsxs)(
                        l.PY1.li,
                        {
                          layout: "position",
                          className: F(z().teamItem, z().teamMore),
                          initial: { opacity: 0, scale: 0.9 },
                          animate: { opacity: 1, scale: 1 },
                          exit: { opacity: 0, scale: 0.9 },
                          transition: { ...e5, layout: e6 },
                          children: [
                            (0, a.jsxs)("span", {
                              "aria-hidden": "true",
                              children: ["+", e4]
                            }),
                            (0, a.jsxs)("span", {
                              className: z().srOnly,
                              children: ["and ", e4, " more"]
                            })
                          ]
                        },
                        "more"
                      )
                    ]
                  })
                })
              ]
            }),
            (0, a.jsxs)("div", {
              className: z().fieldWrap,
              children: [
                (0, a.jsx)(G, {
                  className: z().fieldShell,
                  decor: (0, a.jsx)("span", {
                    className: z().fieldSkin,
                    "aria-hidden": "true"
                  }),
                  children: (0, a.jsx)("div", {
                    className: z().field,
                    "data-focused": en || void 0,
                    onClick: (e3) => {
                      e3.target.closest("button, input") || s2.current?.focus();
                    },
                    children: (0, a.jsxs)("ul", {
                      className: z().chips,
                      "aria-label": "People to invite",
                      children: [
                        (0, a.jsx)(o.N, {
                          initial: false,
                          mode: "popLayout",
                          children: Y2.map((e3) => {
                            if ("error" === e3.kind)
                              return (0, a.jsxs)(
                                l.PY1.li,
                                {
                                  layout: "position",
                                  className: z().chip,
                                  "data-kind": "error",
                                  "data-armed": ep && e3 === Y2[Y2.length - 1] || void 0,
                                  initial: { opacity: 0, x: 0 },
                                  animate: { opacity: 1, x: t2 ? 0 : H[ey % 2] },
                                  exit: {
                                    opacity: 0,
                                    scale: 0.92,
                                    transition: { duration: L.fast }
                                  },
                                  transition: {
                                    opacity: { duration: L.fast },
                                    x: { duration: 0.42, ease: "easeOut" },
                                    layout: e6
                                  },
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: z().chipSkin,
                                      "aria-hidden": "true"
                                    }),
                                    (0, a.jsxs)("button", {
                                      type: "button",
                                      className: z().errorEdit,
                                      onClick: () => {
                                        let t3;
                                        return U2(
                                          (t4) => t4.filter((t5) => t5.key !== e3.key)
                                        ), ea(e3.text), el(false), eb(`Editing ${e3.text}`), void ((t3 = s2.current) && (t3.focus({ preventScroll: true }), requestAnimationFrame(
                                          () => t3.setSelectionRange(
                                            e3.text.length,
                                            e3.text.length
                                          )
                                        )));
                                      },
                                      "aria-label": `Edit ${e3.text}. ${e3.message}`,
                                      title: "Edit",
                                      children: [
                                        (0, a.jsx)(c.A, {
                                          size: 14,
                                          strokeWidth: 1.75,
                                          "aria-hidden": "true"
                                        }),
                                        (0, a.jsx)("span", {
                                          className: z().chipLabel,
                                          children: e3.text
                                        })
                                      ]
                                    }),
                                    (0, a.jsx)("button", {
                                      type: "button",
                                      className: z().chipRemove,
                                      "aria-label": `Remove ${e3.text}`,
                                      onClick: () => eQ(e3.key, e3.text),
                                      children: (0, a.jsx)(m.A, {
                                        size: 14,
                                        strokeWidth: 1.75,
                                        "aria-hidden": "true"
                                      })
                                    })
                                  ]
                                },
                                e3.key
                              );
                            let i3 = e3.entry.name ?? e3.entry.email, n2 = em?.key === e3.key;
                            return (0, a.jsxs)(
                              l.PY1.li,
                              {
                                layout: "position",
                                className: z().chip,
                                "data-armed": ep && e3 === Y2[Y2.length - 1] || void 0,
                                initial: !e3.flown && { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: {
                                  opacity: 0,
                                  transition: { duration: L.fast }
                                },
                                transition: {
                                  opacity: { duration: L.fast },
                                  layout: e6
                                },
                                children: [
                                  (0, a.jsx)(l.PY1.span, {
                                    className: z().chipSkin,
                                    "aria-hidden": "true",
                                    initial: !t2 && { opacity: 0, scale: 0.9 },
                                    animate: { opacity: 1, scale: 1 },
                                    transition: e5
                                  }),
                                  (0, a.jsx)(X, {
                                    entry: e3.entry,
                                    size: 22,
                                    layoutId: e$(e3.entry.email)
                                  }),
                                  (0, a.jsxs)(l.PY1.span, {
                                    className: z().chipBody,
                                    initial: !t2 && { opacity: 0, x: -4 },
                                    animate: { opacity: 1, x: 0 },
                                    transition: t2 ? { duration: 0 } : {
                                      ...E.smooth,
                                      delay: 0.08 * !!e3.flown
                                    },
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: z().chipLabel,
                                        title: e3.entry.email,
                                        children: i3
                                      }),
                                      (0, a.jsxs)("button", {
                                        type: "button",
                                        className: z().role,
                                        "aria-haspopup": "menu",
                                        "aria-expanded": n2,
                                        "aria-label": `Role for ${i3}: ${w(e3.role)}`,
                                        "data-open": n2 || void 0,
                                        onClick: (t3) => eX(e3.key, t3.currentTarget),
                                        onKeyDown: (t3) => {
                                          "ArrowDown" !== t3.key || n2 || (t3.preventDefault(), eX(e3.key, t3.currentTarget));
                                        },
                                        children: [
                                          (0, a.jsx)(K, {
                                            children: (0, a.jsx)(J, {
                                              id: e3.role,
                                              children: w(e3.role)
                                            })
                                          }),
                                          (0, a.jsx)(h.A, {
                                            size: 12,
                                            strokeWidth: 1.75,
                                            "aria-hidden": "true"
                                          })
                                        ]
                                      }),
                                      (0, a.jsx)("button", {
                                        type: "button",
                                        className: z().chipRemove,
                                        "aria-label": `Remove ${i3}`,
                                        onClick: () => eQ(e3.key, i3),
                                        children: (0, a.jsx)(m.A, {
                                          size: 14,
                                          strokeWidth: 1.75,
                                          "aria-hidden": "true"
                                        })
                                      })
                                    ]
                                  })
                                ]
                              },
                              e3.key
                            );
                          })
                        }),
                        (0, a.jsx)(l.PY1.li, {
                          layout: "position",
                          transition: { layout: e6 },
                          className: z().inputItem,
                          children: (0, a.jsx)("input", {
                            ref: s2,
                            className: z().input,
                            type: "text",
                            role: "combobox",
                            "aria-label": "Emails or names",
                            "aria-expanded": eH,
                            "aria-controls": eB,
                            "aria-autocomplete": "list",
                            "aria-activedescendant": eH && eY >= 0 ? `${eB}-${eY}` : void 0,
                            "aria-describedby": eF,
                            placeholder: Y2.length ? "Add more" : "Name or email, like emma@fieldwork.example",
                            value: ei,
                            autoComplete: "off",
                            spellCheck: false,
                            onChange: (e3) => {
                              ea(e3.target.value), ed(0), el(false), ec(false);
                            },
                            onKeyDown: (e3) => {
                              if ("ArrowDown" === e3.key || "ArrowUp" === e3.key) {
                                if (e3.preventDefault(), !eH)
                                  return void el(false);
                                ((e8) => {
                                  let t3 = eO.map(
                                    (e10, t4) => "blocked" === e10.kind ? -1 : t4
                                  ).filter((e10) => e10 >= 0);
                                  if (!t3.length) return;
                                  let i3 = t3.indexOf(eY);
                                  ed(t3[(i3 + e8 + t3.length) % t3.length]);
                                })("ArrowDown" === e3.key ? 1 : -1);
                              } else if ("Enter" === e3.key) {
                                e3.preventDefault();
                                let t3 = eH && eY >= 0 ? eO[eY] : void 0;
                                if (t3 && (ei.trim() || "person" === t3.kind))
                                  return void eJ(t3);
                                ei.trim() && (eG(ei), ea(""));
                              } else if (("," === e3.key || ";" === e3.key) && ei.trim())
                                e3.preventDefault(), eG(ei), ea("");
                              else if ("Backspace" === e3.key && !ei && Y2.length) {
                                let e8 = Y2[Y2.length - 1];
                                ep ? eQ(
                                  e8.key,
                                  "ok" === e8.kind ? e8.entry.name ?? e8.entry.email : e8.text
                                ) : (ec(true), eb(
                                  `Press backspace again to remove ${"ok" === e8.kind ? e8.entry.name ?? e8.entry.email : e8.text}`
                                ));
                              } else
                                "Escape" === e3.key && (eH ? (e3.preventDefault(), el(true)) : ei && (e3.preventDefault(), ea("")));
                            },
                            onPaste: (e3) => {
                              let t3 = e3.clipboardData.getData("text");
                              R(t3).length < 2 || (e3.preventDefault(), eG(t3));
                            },
                            onFocus: () => {
                              es(true), el(false);
                            },
                            onBlur: () => {
                              es(false), ec(false);
                            }
                          })
                        })
                      ]
                    })
                  })
                }),
                (0, a.jsx)(o.N, {
                  children: eH && (0, a.jsxs)(
                    l.PY1.div,
                    {
                      className: z().popover,
                      onPointerDown: (e3) => e3.preventDefault(),
                      initial: t2 ? { opacity: 0 } : { opacity: 0, y: -4, scale: 0.98 },
                      animate: { opacity: 1, y: 0, scale: 1 },
                      exit: t2 ? { opacity: 0 } : {
                        opacity: 0,
                        y: -4,
                        scale: 0.98,
                        transition: { duration: L.fast }
                      },
                      transition: t2 ? { duration: L.instant } : E.snappy,
                      children: [
                        !ei.trim() && (0, a.jsx)("p", {
                          className: z().popHeading,
                          children: "Suggested"
                        }),
                        (0, a.jsx)("ul", {
                          id: eB,
                          className: z().options,
                          role: "listbox",
                          "aria-label": "Suggestions",
                          children: eO.map(
                            (i3, n2) => (0, a.jsxs)(
                              l.PY1.li,
                              {
                                id: `${eB}-${n2}`,
                                role: "option",
                                "aria-selected": n2 === eY,
                                "aria-disabled": "blocked" === i3.kind || void 0,
                                className: z().option,
                                "data-kind": i3.kind,
                                layout: "position",
                                transition: { layout: e6 },
                                onPointerMove: () => {
                                  "blocked" !== i3.kind && n2 !== eY && ed(n2);
                                },
                                onClick: () => eJ(i3),
                                children: [
                                  n2 === eY && (0, a.jsx)(l.PY1.span, {
                                    layoutId: `${e2}-highlight`,
                                    className: z().optionHighlight,
                                    transition: t2 ? { duration: 0 } : E.morph,
                                    "aria-hidden": "true"
                                  }),
                                  "email" === i3.kind ? (0, a.jsx)("span", {
                                    className: F(
                                      z().avatar,
                                      z().mailAvatar
                                    ),
                                    style: { width: 30, height: 30 },
                                    children: (0, a.jsx)(u.A, {
                                      size: 15,
                                      strokeWidth: 1.75,
                                      "aria-hidden": "true"
                                    })
                                  }) : (0, a.jsx)(X, {
                                    entry: i3.entry,
                                    size: 30,
                                    layoutId: "person" === i3.kind ? e$(i3.entry.email) : void 0
                                  }),
                                  (0, a.jsxs)("span", {
                                    className: z().optionText,
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: z().optionName,
                                        children: "email" === i3.kind ? i3.entry.email : i3.entry.name
                                      }),
                                      (0, a.jsx)("span", {
                                        className: z().optionEmail,
                                        children: "email" === i3.kind ? "Invite by email" : i3.entry.email
                                      })
                                    ]
                                  }),
                                  "email" !== i3.kind && (0, a.jsx)("span", {
                                    className: z().optionNote,
                                    children: i3.note
                                  })
                                ]
                              },
                              i3.id
                            )
                          )
                        }),
                        !eO.length && (0, a.jsxs)("p", {
                          className: z().popEmpty,
                          children: [
                            "No one matches \u201C",
                            ei.trim(),
                            "\u201D. Type a full email to invite them."
                          ]
                        })
                      ]
                    },
                    "list"
                  )
                })
              ]
            }),
            (0, a.jsxs)("div", {
              className: z().hintRow,
              children: [
                (0, a.jsx)("p", {
                  id: eF,
                  className: z().hint,
                  children: (0, a.jsx)(J, {
                    id: eu ?? "default",
                    children: eu ?? "Separate with commas, or paste a whole list"
                  })
                }),
                (0, a.jsxs)("button", {
                  type: "button",
                  className: z().textButton,
                  onClick: () => eG(
                    "emma.collins@fieldwork.example, Marcus Johnson, sofia.ramirez@fieldwork.example, olivia@northwind, jordan.reyes@, Nathan Cole, Ava Mitchell <ava.mitchell@fieldwork.example>, hannah.walsh@fieldwork.example, alex turner, emma.collins@fieldwork.example"
                  ),
                  children: [
                    (0, a.jsx)(g.A, { ...B, size: 14 }),
                    "Paste a sample list"
                  ]
                })
              ]
            }),
            (0, a.jsx)(o.N, {
              initial: false,
              children: eS.length > 0 && (0, a.jsx)(
                Q,
                {
                  children: (0, a.jsxs)("div", {
                    id: eV,
                    className: z().errors,
                    children: [
                      (0, a.jsxs)("div", {
                        className: z().errorsHead,
                        children: [
                          (0, a.jsxs)("span", {
                            className: z().errorsTitle,
                            children: [
                              (0, a.jsx)(c.A, { ...B }),
                              (0, a.jsx)(K, {
                                children: (0, a.jsxs)(J, {
                                  id: String(eS.length),
                                  children: [
                                    V(eS.length, "entry", "entries"),
                                    " can\u2019t be invited"
                                  ]
                                })
                              })
                            ]
                          }),
                          (0, a.jsx)("button", {
                            type: "button",
                            className: z().textButton,
                            onClick: () => {
                              U2((e3) => e3.filter((e8) => "ok" === e8.kind)), eb(
                                `Removed ${V(eS.length, "entry", "entries")}`
                              );
                            },
                            children: "Remove invalid"
                          })
                        ]
                      }),
                      (0, a.jsx)("ul", {
                        className: z().errorList,
                        children: (0, a.jsx)(o.N, {
                          initial: false,
                          children: eS.map(
                            (e3) => (0, a.jsx)(
                              l.PY1.li,
                              {
                                className: z().collapse,
                                initial: { height: 0, opacity: 0 },
                                animate: { height: "auto", opacity: 1 },
                                exit: { height: 0, opacity: 0 },
                                transition: t2 ? { duration: 0 } : {
                                  height: E.smooth,
                                  opacity: { duration: L.fast }
                                },
                                children: (0, a.jsx)("span", {
                                  className: z().errorLine,
                                  children: e3.message
                                })
                              },
                              e3.key
                            )
                          )
                        })
                      }),
                      (0, a.jsx)("p", {
                        className: z().errorsFoot,
                        children: "Select an entry to fix it"
                      })
                    ]
                  })
                },
                "errors"
              )
            }),
            (0, a.jsxs)("div", {
              className: z().seats,
              id: eU,
              children: [
                (0, a.jsxs)("div", {
                  className: z().seatsHead,
                  children: [
                    (0, a.jsxs)("span", {
                      className: z().seatsCount,
                      "data-over": eL > 0 || void 0,
                      children: [
                        (0, a.jsx)("span", {
                          className: z().num,
                          children: (0, a.jsx)(x.q, { value: eE })
                        }),
                        (0, a.jsx)("span", {
                          className: z().seatsOf,
                          children: "of"
                        }),
                        (0, a.jsx)("span", {
                          className: z().num,
                          children: (0, a.jsx)(x.q, { value: ez })
                        }),
                        (0, a.jsx)("span", {
                          className: z().seatsOf,
                          children: "seats"
                        })
                      ]
                    }),
                    (0, a.jsx)("span", {
                      className: z().plan,
                      children: (0, a.jsxs)(J, {
                        id: ee2,
                        children: [I[ee2].name, " plan"]
                      })
                    })
                  ]
                }),
                (0, a.jsxs)("div", {
                  className: z().track,
                  role: "meter",
                  "aria-label": "Seats",
                  "aria-valuemin": 0,
                  "aria-valuemax": ez,
                  "aria-valuenow": Math.min(eE, ez),
                  "aria-valuetext": `${eE} of ${ez} seats${eL ? `, ${eL} over the limit` : ""}`,
                  children: [
                    (0, a.jsx)(l.PY1.span, {
                      className: z().segment,
                      "data-kind": eL ? "over" : "new",
                      initial: false,
                      animate: { width: e9(eE) },
                      transition: e22
                    }),
                    (0, a.jsx)(l.PY1.span, {
                      className: z().segment,
                      "data-kind": "pending",
                      "data-edge": eM > 0 || void 0,
                      initial: false,
                      animate: { width: e9(eC + eR) },
                      transition: e22
                    }),
                    (0, a.jsx)(l.PY1.span, {
                      className: z().segment,
                      "data-kind": "members",
                      "data-edge": eR + eM > 0 || void 0,
                      initial: false,
                      animate: { width: e9(eC) },
                      transition: e22
                    })
                  ]
                }),
                (0, a.jsxs)("ul", {
                  className: z().legend,
                  "aria-hidden": "true",
                  children: [
                    (0, a.jsxs)("li", {
                      children: [
                        (0, a.jsx)("span", {
                          className: z().swatch,
                          "data-kind": "members"
                        }),
                        V(eC, "member")
                      ]
                    }),
                    (0, a.jsxs)("li", {
                      children: [
                        (0, a.jsx)("span", {
                          className: z().swatch,
                          "data-kind": "pending"
                        }),
                        eR,
                        " pending"
                      ]
                    }),
                    (0, a.jsxs)("li", {
                      children: [
                        (0, a.jsx)("span", {
                          className: z().swatch,
                          "data-kind": eL ? "over" : "new"
                        }),
                        eM,
                        " new"
                      ]
                    })
                  ]
                }),
                (0, a.jsx)(o.N, {
                  initial: false,
                  children: eL > 0 && (0, a.jsx)(
                    Q,
                    {
                      children: (0, a.jsxs)(l.PY1.div, {
                        className: z().over,
                        animate: { x: t2 || !e_ ? 0 : H[e_ % 2] },
                        transition: { duration: 0.42, ease: "easeOut" },
                        children: [
                          (0, a.jsx)(c.A, { ...B }),
                          (0, a.jsxs)("span", {
                            className: z().overText,
                            children: [
                              (0, a.jsx)(K, {
                                children: (0, a.jsxs)(J, {
                                  id: String(eL),
                                  children: [V(eL, "seat"), " over"]
                                })
                              }),
                              " the ",
                              I[ee2].name,
                              " plan"
                            ]
                          }),
                          "starter" === ee2 ? (0, a.jsx)("button", {
                            type: "button",
                            className: z().ghost,
                            onClick: () => {
                              et2("team"), eb(
                                `Upgraded to the Team plan with ${I.team.seats} seats.`
                              ), eK("Upgraded to Team");
                            },
                            children: "Upgrade to Team"
                          }) : (0, a.jsx)("span", {
                            className: z().overHelp,
                            children: "Remove people to send"
                          })
                        ]
                      })
                    },
                    "over"
                  )
                })
              ]
            }),
            (0, a.jsx)("footer", {
              className: z().footer,
              children: (0, a.jsxs)("div", {
                className: z().footerActions,
                children: [
                  (0, a.jsx)("button", {
                    type: "button",
                    className: z().iconButton,
                    onClick: () => {
                      T2.current.splice(0).forEach((e3) => window.clearTimeout(e3)), S2.current = false, D2(P), W2(Z()), U2([]), et2("starter"), ea(""), eh(null), eg(null), ek({}), ec(false), eb("Preview reset");
                    },
                    "aria-label": "Reset preview",
                    title: "Reset preview",
                    children: (0, a.jsx)(y.A, { ...B })
                  }),
                  (0, a.jsxs)("button", {
                    type: "button",
                    className: z().send,
                    onClick: () => {
                      if (!eM) return void s2.current?.focus();
                      if (eS.length) {
                        ev((e8) => e8 + 1), eb(
                          `Fix or remove ${V(eS.length, "entry", "entries")} before sending`
                        );
                        return;
                      }
                      if (eL) {
                        ef((e8) => e8 + 1), eb(
                          `${V(eL, "seat")} over the ${I[ee2].name} plan. Upgrade or remove people to send.`
                        );
                        return;
                      }
                      let e3 = eA.map((e8) => ({
                        key: e8.key,
                        entry: e8.entry,
                        role: e8.role,
                        status: "sending",
                        note: "Sending"
                      }));
                      eh(null), U2([]), ea(""), W2((t3) => [...e3, ...t3]), eb(`Sending ${V(e3.length, "invite")}`);
                      let i3 = 160 * !t2, a2 = t2 ? 300 : 700;
                      e3.forEach(
                        (e8, t3) => eN(
                          a2 + t3 * i3,
                          () => W2(
                            (t4) => t4.map(
                              (t5) => t5.key === e8.key && "sending" === t5.status ? {
                                ...t5,
                                status: "sent",
                                note: "Sent just now"
                              } : t5
                            )
                          )
                        )
                      );
                      let n2 = a2 + e3.length * i3;
                      if (eN(n2, () => eb(`${V(e3.length, "invite")} sent`)), S2.current)
                        return;
                      S2.current = true;
                      let r3 = e3[0], l2 = r3.entry.name ?? r3.entry.email;
                      eN(n2 + 2400, () => {
                        if (!ew.current.some(
                          (e8) => e8.key === r3.key && "sent" === e8.status
                        )) {
                          S2.current = false;
                          return;
                        }
                        W2(
                          (e8) => e8.map(
                            (e10) => e10.key === r3.key ? { ...e10, status: "joined", note: "Joined" } : e10
                          )
                        ), eb(`${l2} accepted and joined Fieldwork`), eN(1200, () => {
                          ew.current.some(
                            (e8) => e8.key === r3.key && "joined" === e8.status
                          ) && (W2((e8) => e8.filter((e10) => e10.key !== r3.key)), D2((e8) => [r3.entry, ...e8]));
                        });
                      });
                    },
                    "aria-disabled": eD || void 0,
                    "aria-describedby": eS.length ? eV : eL ? eU : void 0,
                    "aria-label": eM ? `Send ${V(eM, "invite")}` : "Send invites",
                    children: [
                      (0, a.jsx)(v.A, { ...B }),
                      (0, a.jsxs)("span", {
                        className: z().sendLabel,
                        "aria-hidden": "true",
                        children: [
                          "Send",
                          (0, a.jsx)(l.PY1.span, {
                            className: z().sendCount,
                            initial: false,
                            animate: { width: eM ? "auto" : 0, opacity: +!!eM },
                            transition: t2 ? { duration: 0 } : E.morph,
                            children: (0, a.jsx)("span", {
                              className: z().num,
                              children: (0, a.jsx)(x.q, {
                                value: Math.max(1, eM)
                              })
                            })
                          }),
                          (0, a.jsx)(K, {
                            className: z().sendWord,
                            children: (0, a.jsx)(J, {
                              id: 1 === eM ? "one" : "many",
                              children: 1 === eM ? "invite" : "invites"
                            })
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            }),
            (0, a.jsxs)("section", {
              className: z().pending,
              "aria-labelledby": eq,
              children: [
                (0, a.jsxs)("h3", {
                  id: eq,
                  ref: j2,
                  tabIndex: -1,
                  className: z().pendingHead,
                  children: [
                    "Pending ",
                    (0, a.jsx)("span", {
                      className: z().pendingCount,
                      children: (0, a.jsx)("span", {
                        className: z().num,
                        children: (0, a.jsx)(x.q, { value: eR })
                      })
                    })
                  ]
                }),
                (0, a.jsx)("ul", {
                  className: z().rows,
                  children: (0, a.jsx)(o.N, {
                    initial: false,
                    children: O2.map((e3) => {
                      let i3 = e3.entry.name ?? e3.entry.email, n2 = !!ex[e3.key];
                      return (0, a.jsx)(
                        l.PY1.li,
                        {
                          className: z().row,
                          initial: { height: 0 },
                          animate: { height: "auto", opacity: 1 },
                          exit: { height: 0, opacity: 0 },
                          transition: t2 ? { duration: 0 } : {
                            height: E.smooth,
                            opacity: { duration: L.fast }
                          },
                          children: (0, a.jsxs)("div", {
                            className: z().rowInner,
                            children: [
                              (0, a.jsx)(X, {
                                entry: e3.entry,
                                size: 36,
                                layoutId: e$(e3.entry.email)
                              }),
                              (0, a.jsxs)(l.PY1.div, {
                                className: z().rowText,
                                initial: !t2 && { opacity: 0 },
                                animate: { opacity: 1 },
                                transition: {
                                  duration: L.standard,
                                  delay: 0.12
                                },
                                children: [
                                  (0, a.jsx)("span", {
                                    className: z().rowName,
                                    children: i3
                                  }),
                                  (0, a.jsxs)("span", {
                                    className: z().rowMeta,
                                    children: [
                                      w(e3.role),
                                      e3.entry.name ? ` \xB7 ${e3.entry.email}` : ""
                                    ]
                                  })
                                ]
                              }),
                              (0, a.jsx)(l.PY1.span, {
                                className: z().status,
                                "data-status": e3.status,
                                initial: !t2 && { opacity: 0 },
                                animate: { opacity: 1 },
                                transition: {
                                  duration: L.standard,
                                  delay: 0.12
                                },
                                children: (0, a.jsx)(K, {
                                  children: (0, a.jsx)(J, {
                                    id: e3.status + e3.note,
                                    children: (0, a.jsxs)("span", {
                                      className: z().statusInner,
                                      children: [
                                        "sending" === e3.status && (0, a.jsx)(_.A, {
                                          className: z().spin,
                                          size: 13,
                                          strokeWidth: 1.75,
                                          "aria-hidden": "true"
                                        }),
                                        "joined" === e3.status && (0, a.jsx)(f.A, {
                                          size: 13,
                                          strokeWidth: 2,
                                          "aria-hidden": "true"
                                        }),
                                        e3.note
                                      ]
                                    })
                                  })
                                })
                              }),
                              (0, a.jsxs)(l.PY1.div, {
                                className: z().rowActions,
                                "data-hidden": "joined" === e3.status || void 0,
                                initial: !t2 && { opacity: 0 },
                                animate: { opacity: +("joined" !== e3.status) },
                                transition: {
                                  duration: "joined" === e3.status ? L.fast : L.standard,
                                  delay: 0.12 * ("joined" !== e3.status)
                                },
                                children: [
                                  (0, a.jsx)("button", {
                                    type: "button",
                                    className: z().textButton,
                                    onClick: () => {
                                      n2 || (ek((t3) => ({ ...t3, [e3.key]: true })), eb(
                                        `Invite sent again to ${e3.entry.name ?? e3.entry.email}`
                                      ), eN(
                                        2e3,
                                        () => ek((t3) => ({ ...t3, [e3.key]: false }))
                                      ));
                                    },
                                    disabled: "sent" !== e3.status,
                                    "aria-disabled": n2 || void 0,
                                    "aria-label": n2 ? `Invite sent again to ${i3}` : `Resend invite to ${i3}`,
                                    children: (0, a.jsxs)("span", {
                                      className: z().stack,
                                      children: [
                                        (0, a.jsx)("span", {
                                          "data-on": !n2 || void 0,
                                          children: "Resend"
                                        }),
                                        (0, a.jsxs)("span", {
                                          "data-on": n2 || void 0,
                                          children: [
                                            (0, a.jsx)(f.A, {
                                              size: 13,
                                              strokeWidth: 2,
                                              "aria-hidden": "true"
                                            }),
                                            "Sent again"
                                          ]
                                        })
                                      ]
                                    })
                                  }),
                                  (0, a.jsx)("button", {
                                    type: "button",
                                    className: z().iconButton,
                                    "data-size": "sm",
                                    onClick: () => {
                                      W2(
                                        (t3) => t3.filter((t4) => t4.key !== e3.key)
                                      ), eb(
                                        `Revoked the invite for ${e3.entry.name ?? e3.entry.email}. One seat freed.`
                                      ), j2.current?.focus({
                                        preventScroll: true
                                      });
                                    },
                                    disabled: "sent" !== e3.status,
                                    "aria-label": `Revoke invite for ${i3}`,
                                    title: "Revoke invite",
                                    children: (0, a.jsx)(m.A, {
                                      size: 15,
                                      strokeWidth: 1.75,
                                      "aria-hidden": "true"
                                    })
                                  })
                                ]
                              })
                            ]
                          })
                        },
                        e3.key
                      );
                    })
                  })
                }),
                (0, a.jsx)(o.N, {
                  initial: false,
                  children: 0 === O2.length && (0, a.jsx)(
                    Q,
                    {
                      children: (0, a.jsx)("p", {
                        className: z().empty,
                        children: "No pending invites"
                      })
                    },
                    "empty"
                  )
                })
              ]
            }),
            (0, a.jsx)(o.N, {
              children: em && e0 && (0, a.jsx)(
                l.PY1.div,
                {
                  ref: r2,
                  className: z().menu,
                  role: "menu",
                  "aria-label": `Role for ${e0.entry.name ?? e0.entry.email}`,
                  style: { left: em.x, top: em.y },
                  onKeyDown: (e3) => {
                    let t3 = Array.from(
                      e3.currentTarget.querySelectorAll(
                        '[role="menuitemradio"]'
                      )
                    ), i3 = t3.indexOf(document.activeElement), a2 = (i4) => {
                      e3.preventDefault(), t3[(i4 + t3.length) % t3.length]?.focus();
                    };
                    "ArrowDown" === e3.key ? a2(i3 + 1) : "ArrowUp" === e3.key ? a2(i3 - 1) : "Home" === e3.key ? a2(0) : "End" === e3.key ? a2(t3.length - 1) : "Escape" === e3.key ? (e3.preventDefault(), eZ(true)) : "Tab" === e3.key && eh(null);
                  },
                  initial: t2 ? { opacity: 0 } : { opacity: 0, y: -4, scale: 0.97 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                    opacity: 0,
                    y: -4,
                    scale: 0.97,
                    transition: { duration: L.fast }
                  },
                  transition: t2 ? { duration: L.instant } : E.snappy,
                  children: b.map(
                    (e3) => (0, a.jsxs)(
                      "button",
                      {
                        type: "button",
                        role: "menuitemradio",
                        "aria-checked": e0.role === e3.value,
                        className: z().menuItem,
                        onPointerMove: (e8) => {
                          document.activeElement !== e8.currentTarget && e8.currentTarget.focus({ preventScroll: true });
                        },
                        onClick: () => {
                          var t3;
                          return t3 = e3.value, void (e0 && (U2(
                            (e8) => e8.map(
                              (e10) => e10.key === e0.key && "ok" === e10.kind ? { ...e10, role: t3 } : e10
                            )
                          ), eb(
                            `${e0.entry.name ?? e0.entry.email} will join as ${w(t3).toLowerCase()}`
                          ), eZ(true)));
                        },
                        children: [
                          (0, a.jsx)("span", {
                            className: z().menuLabel,
                            children: e3.label
                          }),
                          (0, a.jsx)("span", {
                            className: z().menuDescription,
                            children: e3.description
                          }),
                          e0.role === e3.value && (0, a.jsx)(f.A, {
                            className: z().menuCheck,
                            size: 15,
                            strokeWidth: 2,
                            "aria-hidden": "true"
                          })
                        ]
                      },
                      e3.value
                    )
                  )
                },
                "menu"
              )
            }),
            (0, a.jsx)("p", {
              className: z().srOnly,
              "aria-live": "polite",
              children: ej
            })
          ]
        })
      })
    });
  }
  let et = ee;
};

__m(__module,__exports,__require);
}