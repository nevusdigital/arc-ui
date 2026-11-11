function(__module,__exports,__require){
"use strict";
function __m(e, i, t) {
  "use strict";
  t.r(i), t.d(i, { SettingsPage: () => Q, default: () => X });
  var a = t(95155), s = t(12115), n = t(18310), l = t(80642), r = t(25354), o = t(28245), c = t(92171), d = t(57700), u = t(88359), h = t(15298), p = t(50981), g = t(71019), m = t(85633), _ = t(95e3), x = t(33533), v = t(70299), y = t(95438), b = t(11012), f = t(65024), j = t(92218), w = t(51288), N = t(35978), T = t(66558), k = t(96220), C = t(50680), S = t(98344), $ = t(7770), P = t(66576), A = t.n(P);
  let E = [
    {
      id: "profile",
      label: "Profile",
      description: "How you appear to teammates across Northwind.",
      icon: u.A
    },
    {
      id: "notifications",
      label: "Notifications",
      description: "Choose what reaches you, and when.",
      icon: h.A
    },
    {
      id: "security",
      label: "Security",
      description: "Protect your account and review where you are signed in.",
      icon: p.A
    },
    {
      id: "billing",
      label: "Billing",
      description: "Your plan, payment method, and invoice details.",
      icon: g.A
    }
  ], L = {
    photo: "media/people/emma-collins.svg",
    name: "Emma Collins",
    title: "Product designer",
    email: "emma@northwind.studio",
    timezone: "lisbon",
    mentions: true,
    summary: true,
    news: false,
    messages: true,
    reminders: false,
    quiet: false,
    quietHours: "22-7",
    twoStep: true,
    alerts: true,
    timeout: "8h",
    signedOut: [],
    cycle: "monthly",
    billingEmail: "billing@northwind.studio",
    company: "Northwind Studio Lda.",
    country: "pt",
    vat: "PT 516 283 947"
  }, R = {
    photo: "profile",
    name: "profile",
    title: "profile",
    email: "profile",
    timezone: "profile",
    mentions: "notifications",
    summary: "notifications",
    news: "notifications",
    messages: "notifications",
    reminders: "notifications",
    quiet: "notifications",
    quietHours: "notifications",
    twoStep: "security",
    alerts: "security",
    timeout: "security",
    signedOut: "security",
    cycle: "billing",
    billingEmail: "billing",
    company: "billing",
    country: "billing",
    vat: "billing"
  }, z = [
    { value: "lisbon", label: "Lisbon (GMT+1)" },
    { value: "london", label: "London (GMT+1)" },
    { value: "berlin", label: "Berlin (GMT+2)" },
    { value: "new-york", label: "New York (GMT\u22124)" },
    { value: "san-francisco", label: "San Francisco (GMT\u22127)" },
    { value: "tokyo", label: "Tokyo (GMT+9)" }
  ], I = [
    { value: "21-8", label: "9 PM to 8 AM" },
    { value: "22-7", label: "10 PM to 7 AM" },
    { value: "23-6", label: "11 PM to 6 AM" },
    { value: "0-8", label: "Midnight to 8 AM" }
  ], O = [
    { value: "1h", label: "After 1 hour" },
    { value: "8h", label: "After 8 hours" },
    { value: "24h", label: "After 24 hours" },
    { value: "7d", label: "After 7 days" }
  ], F = [
    { value: "pt", label: "Portugal" },
    { value: "de", label: "Germany" },
    { value: "nl", label: "Netherlands" },
    { value: "gb", label: "United Kingdom" },
    { value: "us", label: "United States" }
  ], Y = [
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" }
  ], M = [
    {
      id: "mac",
      device: "MacBook Pro",
      app: "Safari",
      place: "Lisbon, Portugal",
      seen: "Active now",
      icon: m.A,
      current: true
    },
    {
      id: "iphone",
      device: "iPhone 16",
      app: "Northwind for iOS",
      place: "Lisbon, Portugal",
      seen: "2 hours ago",
      icon: _.A
    },
    {
      id: "ipad",
      device: "iPad Air",
      app: "Safari",
      place: "Porto, Portugal",
      seen: "Yesterday",
      icon: x.A
    },
    {
      id: "windows",
      device: "Windows PC",
      app: "Chrome",
      place: "Berlin, Germany",
      seen: "12 days ago",
      icon: v.A
    }
  ], B = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, U = (e2) => `blur(${e2}px)`, D = [...$.T.ease.enter], W = [...$.T.ease.standard], q = {
    enter: ({ direction: e2, axis: i2, reduce: t2 }) => t2 ? { opacity: 0 } : {
      opacity: 0,
      ..."x" === i2 ? { x: 16 * e2 } : { y: 14 * e2 },
      filter: U($.T.blur.subtle)
    },
    center: ({ reduce: e2 }) => ({
      opacity: 1,
      x: 0,
      y: 0,
      filter: U(0),
      transition: e2 ? { duration: $.T.duration.instant } : {
        x: $.T.spring.smooth,
        y: $.T.spring.smooth,
        opacity: { duration: $.T.duration.standard, ease: D },
        filter: { duration: $.T.duration.standard, ease: D }
      }
    }),
    exit: ({ direction: e2, axis: i2, reduce: t2 }) => t2 ? { opacity: 0, transition: { duration: $.T.duration.instant } } : {
      opacity: 0,
      ..."x" === i2 ? { x: -10 * e2 } : { y: -8 * e2 },
      filter: U($.T.blur.subtle),
      transition: { duration: $.T.duration.fast, ease: W }
    }
  }, H = {
    initial: { opacity: 0, y: 6, filter: U($.T.blur.soft) },
    animate: { opacity: 1, y: 0, filter: U(0) },
    exit: { opacity: 0, y: -4, filter: U($.T.blur.subtle) }
  };
  function G({ show: e2, className: i2, children: t2 }) {
    let s2 = (0, n.I)();
    return (0, a.jsx)(l.N, {
      initial: false,
      children: e2 && (0, a.jsx)(r.PY1.div, {
        className: A().reveal,
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: s2 ? { duration: 0 } : {
          height: $.T.spring.smooth,
          opacity: { duration: $.T.duration.standard }
        },
        children: (0, a.jsx)("div", { className: i2, children: t2 })
      })
    });
  }
  function V({ id: e2, title: i2, children: t2, footer: s2 }) {
    return (0, a.jsxs)("section", {
      className: A().group,
      "aria-labelledby": e2,
      children: [
        (0, a.jsx)("h4", { id: e2, children: i2 }),
        (0, a.jsx)("div", { className: A().rows, children: t2 }),
        s2
      ]
    });
  }
  function K({
    id: e2,
    label: i2,
    description: t2,
    checked: s2,
    onChange: n2,
    children: l2
  }) {
    return (0, a.jsxs)("div", {
      className: A().row,
      children: [
        (0, a.jsxs)("div", {
          className: A().rowText,
          children: [
            (0, a.jsx)("label", { htmlFor: e2, children: i2 }),
            (0, a.jsx)("p", { id: `${e2}-hint`, children: t2 }),
            l2
          ]
        }),
        (0, a.jsx)(C.d, {
          id: e2,
          checked: s2,
          onCheckedChange: n2,
          "aria-describedby": `${e2}-hint`
        })
      ]
    });
  }
  function Z({
    state: e2,
    count: i2,
    onDiscard: t2,
    onSave: d2,
    shake: u2,
    barRef: h2
  }) {
    let p2 = (0, n.I)(), g2 = (0, s.useRef)(null), m2 = (0, o.d)(52), _2 = (0, o.d)(52);
    (0, s.useLayoutEffect)(() => {
      let e3 = g2.current;
      if (!e3) return;
      let i3 = () => {
        let i4 = { width: e3.offsetWidth + 2, height: e3.offsetHeight + 2 };
        if (p2) {
          m2.jump(i4.width), _2.jump(i4.height);
          return;
        }
        (0, c.i)(m2, i4.width, $.T.spring.morph), (0, c.i)(_2, i4.height, $.T.spring.morph);
      };
      if (i3(), "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(i3);
      return t3.observe(e3), () => t3.disconnect();
    }, [_2, p2, m2]);
    let x2 = p2 ? {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    } : {
      initial: { opacity: 0, scale: 0.96, filter: U($.T.blur.soft) },
      animate: { opacity: 1, scale: 1, filter: U(0) },
      exit: { opacity: 0, scale: 0.96, filter: U($.T.blur.soft) }
    }, v2 = {
      duration: p2 ? $.T.duration.instant : $.T.duration.standard,
      ease: D
    };
    return (0, a.jsx)(r.PY1.div, {
      ref: h2,
      className: A().bar,
      role: "group",
      "aria-label": "saved" === e2 ? "Save status" : "Unsaved changes",
      style: { width: m2, height: _2, x: u2 },
      initial: p2 ? { opacity: 0 } : { opacity: 0, y: 28, filter: U($.T.blur.soft) },
      animate: { opacity: 1, y: 0, filter: U(0) },
      exit: p2 ? { opacity: 0, transition: { duration: $.T.duration.instant } } : {
        opacity: 0,
        y: 20,
        width: 52,
        height: 52,
        filter: U($.T.blur.soft),
        transition: {
          width: $.T.spring.smooth,
          height: $.T.spring.smooth,
          y: { ...$.T.spring.smooth, delay: 0.06 },
          opacity: { duration: $.T.duration.exit, delay: 0.1 },
          filter: { duration: $.T.duration.exit, delay: 0.1 }
        }
      },
      transition: p2 ? { duration: $.T.duration.instant } : {
        y: $.T.spring.smooth,
        opacity: { duration: $.T.duration.fast },
        filter: { duration: $.T.duration.standard }
      },
      children: (0, a.jsx)("div", {
        ref: g2,
        className: A().barContent,
        children: (0, a.jsx)(l.N, {
          mode: "popLayout",
          initial: false,
          children: "saved" === e2 ? (0, a.jsxs)(
            r.PY1.div,
            {
              className: A().barSaved,
              ...x2,
              transition: v2,
              children: [
                (0, a.jsx)("svg", {
                  viewBox: "0 0 24 24",
                  width: "18",
                  height: "18",
                  "aria-hidden": "true",
                  children: (0, a.jsx)(r.PY1.path, {
                    d: "M5 12.5 9.5 17 19 7.5",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    initial: { pathLength: +!!p2 },
                    animate: { pathLength: 1 },
                    transition: {
                      duration: 0.34 * !p2,
                      delay: 0.08 * !p2,
                      ease: D
                    }
                  })
                }),
                (0, a.jsx)("span", { children: "Changes saved" })
              ]
            },
            "saved"
          ) : (0, a.jsxs)(
            r.PY1.div,
            {
              className: A().barEdit,
              ...x2,
              transition: v2,
              children: [
                (0, a.jsxs)("span", {
                  className: A().barCount,
                  children: [
                    (0, a.jsx)("span", {
                      className: A().inherit,
                      children: (0, a.jsx)(f.q, { value: i2 })
                    }),
                    (0, a.jsx)("span", {
                      className: A().unsaved,
                      children: "\xA0unsaved"
                    }),
                    "\xA0",
                    (0, a.jsx)(S.g, {
                      children: 1 === i2 ? "change" : "changes"
                    })
                  ]
                }),
                (0, a.jsx)(w.$, {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  disabled: "saving" === e2,
                  onClick: t2,
                  children: "Discard"
                }),
                (0, a.jsx)(w.$, {
                  type: "button",
                  size: "sm",
                  loading: "saving" === e2,
                  onClick: d2,
                  children: "saving" === e2 ? "Saving" : (0, a.jsxs)("span", {
                    children: [
                      "Save",
                      (0, a.jsx)("span", {
                        className: A().long,
                        children: "\xA0changes"
                      })
                    ]
                  })
                })
              ]
            },
            "edit"
          )
        })
      })
    });
  }
  function Q() {
    let e2, i2 = (0, s.useId)(), t2 = (0, s.useId)(), u2 = (0, n.I)(), [h2, p2] = (0, s.useState)("profile"), [m2, _2] = (0, s.useState)({ direction: 1, axis: "y" }), [x2, v2] = (0, s.useState)(L), [C2, P2] = (0, s.useState)(L), [W2, Q2] = (0, s.useState)("idle"), [X2, J] = (0, s.useState)([]), [ee, ei] = (0, s.useState)({ tick: 0, keys: [] }), [et, ea] = (0, s.useState)(""), [es, en] = (0, s.useState)(""), el = (0, s.useRef)(null), er = (0, s.useRef)([]), eo = (0, s.useRef)(null), ec = (0, s.useRef)(null), ed = (0, s.useRef)(null), eu = (0, s.useRef)(null), eh = (0, s.useRef)(null), ep = (0, s.useRef)(/* @__PURE__ */ new Set()), eg = (0, s.useRef)(/* @__PURE__ */ new Set()), em = (0, o.d)(0), e_ = Object.keys(x2).filter((e3) => "signedOut" !== e3 && x2[e3] !== C2[e3]), ex = C2.signedOut.filter((e3) => !x2.signedOut.includes(e3)).length + x2.signedOut.filter((e3) => !C2.signedOut.includes(e3)).length, ev = e_.length + ex, ey = (e2 = {}, C2.name.trim() || (e2.name = "Enter your full name"), B.test(C2.email.trim()) || (e2.email = "Enter a valid email address"), B.test(C2.billingEmail.trim()) || (e2.billingEmail = "Enter a valid billing email"), e2), eb = "saving" === W2 ? "saving" : ev ? "edit" : "saved" === W2 ? "saved" : null, ef = E.find((e3) => e3.id === h2) ?? E[0], ej = M.filter((e3) => !C2.signedOut.includes(e3.id)), ew = "yearly" === C2.cycle ? 1440 : 144, eN = { ...m2, reduce: !!u2 };
    function eT(e3, i3) {
      let t3 = window.setTimeout(() => {
        ep.current.delete(t3), e3();
      }, i3);
      ep.current.add(t3);
    }
    function ek(e3, i3) {
      P2((t3) => ({ ...t3, [e3]: i3 }));
    }
    (0, s.useEffect)(() => {
      let e3 = ep.current, i3 = eg.current;
      return () => {
        e3.forEach((e4) => window.clearTimeout(e4)), i3.forEach((e4) => URL.revokeObjectURL(e4));
      };
    }, []), (0, s.useEffect)(() => {
      "edit" !== eb && "saving" !== eb && ed.current?.contains(document.activeElement) && ec.current?.focus({ preventScroll: true });
    }, [eb]);
    let eC = (e3) => J((i3) => i3.includes(e3) ? i3 : [...i3, e3]), eS = (e3) => X2.includes(e3) ? ey[e3] : void 0, e$ = (e3) => ee.keys.includes(e3) ? ee.tick % 2 ? A().revertA : A().revertB : void 0, eP = (e3) => requestAnimationFrame(
      () => requestAnimationFrame(() => document.getElementById(e3)?.focus())
    );
    function eA(e3, i3) {
      if (e3 === h2) {
        i3 && eP(i3);
        return;
      }
      let t3 = E.findIndex((e4) => e4.id === h2), a2 = E.findIndex((i4) => i4.id === e3), s2 = el.current, n2 = !!s2 && "row" === getComputedStyle(s2).flexDirection;
      _2({ direction: a2 > t3 ? 1 : -1, axis: n2 ? "x" : "y" }), p2(e3), ei((e4) => e4.keys.length ? { ...e4, keys: [] } : e4), eh.current = i3 ?? null, n2 && er.current[a2]?.scrollIntoView({
        block: "nearest",
        inline: "nearest",
        behavior: u2 ? "auto" : "smooth"
      });
    }
    function eE() {
      if (!ev || "saving" === W2) return;
      let e3 = Object.keys(ey);
      if (e3.length) {
        J((i3) => [.../* @__PURE__ */ new Set([...i3, ...e3])]), en(`${ey[e3[0]]} before saving`), u2 || (0, c.i)(em, [0, -7, 6, -4, 2, 0], {
          duration: 0.42,
          ease: "easeOut"
        }), eA(R[e3[0]], `${i2}-${e3[0]}`);
        return;
      }
      Q2("saving"), en("Saving changes"), eT(() => {
        v2(C2), Q2("saved"), J([]), en(`${ev} ${1 === ev ? "change" : "changes"} saved.`), eT(() => Q2((e4) => "saved" === e4 ? "idle" : e4), 1800);
      }, 900);
    }
    return (0, a.jsx)("section", {
      className: A().root,
      "aria-labelledby": `${i2}-title`,
      onKeyDown: (e3) => {
        (e3.metaKey || e3.ctrlKey) && "s" === e3.key.toLowerCase() && (e3.preventDefault(), eE());
      },
      children: (0, a.jsxs)("div", {
        className: A().settings,
        children: [
          (0, a.jsxs)("aside", {
            className: A().sidebar,
            children: [
              (0, a.jsxs)("div", {
                className: A().sidebarHead,
                children: [
                  (0, a.jsx)("h2", { id: `${i2}-title`, children: "Settings" }),
                  (0, a.jsx)("span", {
                    className: A().headAvatar,
                    children: (0, a.jsx)(j.e, {
                      name: x2.name,
                      src: x2.photo ?? void 0,
                      size: "sm"
                    })
                  })
                ]
              }),
              (0, a.jsx)(d.o, {
                id: t2,
                children: (0, a.jsx)("nav", {
                  "aria-label": "Settings sections",
                  children: (0, a.jsx)(r.PY1.ul, {
                    ref: el,
                    className: A().navList,
                    layoutScroll: true,
                    children: E.map((e3, i3) => {
                      let t3, s2 = e3.icon, n2 = (t3 = e3.id, e_.filter((e4) => R[e4] === t3).length + ("security" === t3 ? ex : 0));
                      return (0, a.jsx)(
                        "li",
                        {
                          children: (0, a.jsxs)("button", {
                            ref: (e4) => {
                              er.current[i3] = e4;
                            },
                            type: "button",
                            className: A().navItem,
                            "aria-current": h2 === e3.id ? "page" : void 0,
                            onClick: () => eA(e3.id),
                            onKeyDown: (e4) => {
                              let t4, a2;
                              return t4 = {
                                ArrowDown: 1,
                                ArrowRight: 1,
                                ArrowUp: -1,
                                ArrowLeft: -1
                              }, void (!((a2 = e4.key in t4 ? (i3 + t4[e4.key] + E.length) % E.length : "Home" === e4.key ? 0 : "End" === e4.key ? E.length - 1 : -1) < 0) && (e4.preventDefault(), er.current[a2]?.focus(), eA(E[a2].id)));
                            },
                            children: [
                              h2 === e3.id && (0, a.jsx)(r.PY1.span, {
                                layoutId: "settings-section",
                                layoutDependency: h2,
                                className: A().highlight,
                                transition: u2 ? { duration: 0 } : $.T.spring.morph,
                                "aria-hidden": "true"
                              }),
                              (0, a.jsx)(s2, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              (0, a.jsx)("span", {
                                className: A().navLabel,
                                children: e3.label
                              }),
                              (0, a.jsx)(l.N, {
                                initial: false,
                                children: n2 > 0 && (0, a.jsx)(
                                  r.PY1.span,
                                  {
                                    className: A().navDot,
                                    "aria-hidden": "true",
                                    initial: { opacity: 0, scale: 0.2 },
                                    animate: { opacity: 1, scale: 1 },
                                    exit: { opacity: 0, scale: 0.2 },
                                    transition: u2 ? { duration: 0 } : $.T.spring.snappy
                                  },
                                  "dot"
                                )
                              }),
                              n2 > 0 && (0, a.jsxs)("span", {
                                className: A().srOnly,
                                children: [", ", n2, " unsaved"]
                              })
                            ]
                          })
                        },
                        e3.id
                      );
                    })
                  })
                })
              }),
              (0, a.jsxs)("div", {
                className: A().account,
                children: [
                  (0, a.jsx)(j.e, {
                    name: x2.name,
                    src: x2.photo ?? void 0,
                    size: "md"
                  }),
                  (0, a.jsxs)("span", {
                    children: [
                      (0, a.jsx)("strong", { children: x2.name }),
                      (0, a.jsx)("small", { children: "Team plan \xB7 Admin" })
                    ]
                  })
                ]
              })
            ]
          }),
          (0, a.jsxs)("div", {
            className: A().main,
            children: [
              (0, a.jsx)("div", {
                ref: eo,
                className: A().scroller,
                role: "region",
                "aria-labelledby": `${i2}-heading`,
                children: (0, a.jsx)(l.N, {
                  mode: "wait",
                  initial: false,
                  custom: eN,
                  onExitComplete: function() {
                    eo.current?.scrollTo({ top: 0 }), eh.current && (eP(eh.current), eh.current = null);
                  },
                  children: (0, a.jsxs)(
                    r.PY1.div,
                    {
                      className: A().pane,
                      custom: eN,
                      variants: q,
                      initial: "enter",
                      animate: "center",
                      exit: "exit",
                      children: [
                        (0, a.jsxs)("header", {
                          className: A().paneHead,
                          children: [
                            (0, a.jsx)("h3", {
                              id: `${i2}-heading`,
                              ref: ec,
                              tabIndex: -1,
                              children: ef.label
                            }),
                            (0, a.jsx)("p", { children: ef.description })
                          ]
                        }),
                        "profile" === h2 && (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsxs)("div", {
                              className: A().identity,
                              children: [
                                (0, a.jsx)("div", {
                                  className: A().photo,
                                  children: (0, a.jsx)(l.N, {
                                    initial: false,
                                    mode: "popLayout",
                                    children: (0, a.jsx)(
                                      r.PY1.span,
                                      {
                                        className: A().photoFrame,
                                        initial: {
                                          opacity: 0,
                                          scale: 0.9,
                                          filter: U($.T.blur.soft)
                                        },
                                        animate: {
                                          opacity: 1,
                                          scale: 1,
                                          filter: U(0)
                                        },
                                        exit: {
                                          opacity: 0,
                                          scale: 1.04,
                                          filter: U($.T.blur.soft)
                                        },
                                        transition: u2 ? { duration: 0 } : {
                                          scale: $.T.spring.smooth,
                                          opacity: {
                                            duration: $.T.duration.standard
                                          },
                                          filter: {
                                            duration: $.T.duration.standard
                                          }
                                        },
                                        children: (0, a.jsx)(j.e, {
                                          name: C2.name.trim() || x2.name,
                                          src: C2.photo ?? void 0,
                                          size: "xl"
                                        })
                                      },
                                      C2.photo ?? "initials"
                                    )
                                  })
                                }),
                                (0, a.jsxs)("div", {
                                  className: A().identityText,
                                  children: [
                                    (0, a.jsx)("strong", {
                                      children: C2.name.trim() || "Your name"
                                    }),
                                    (0, a.jsxs)("span", {
                                      children: [
                                        C2.title.trim() || "No job title",
                                        " \xB7 Northwind Studio"
                                      ]
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: A().photoActions,
                                      children: [
                                        (0, a.jsxs)(w.$, {
                                          id: `${i2}-change-photo`,
                                          type: "button",
                                          variant: "secondary",
                                          size: "sm",
                                          onClick: () => eu.current?.click(),
                                          children: [
                                            (0, a.jsx)(y.A, {
                                              size: 15,
                                              strokeWidth: 1.8,
                                              "aria-hidden": "true"
                                            }),
                                            "Change photo"
                                          ]
                                        }),
                                        C2.photo && (0, a.jsx)(w.$, {
                                          type: "button",
                                          variant: "ghost",
                                          size: "sm",
                                          onClick: function() {
                                            ek("photo", null), ea(""), en(
                                              "Photo removed. Your initials will show instead."
                                            ), eP(`${i2}-change-photo`);
                                          },
                                          children: "Remove"
                                        })
                                      ]
                                    }),
                                    (0, a.jsx)("input", {
                                      ref: eu,
                                      type: "file",
                                      accept: "image/png,image/jpeg,image/webp",
                                      hidden: true,
                                      onChange: function(e3) {
                                        let i3 = e3.target.files?.[0];
                                        if (e3.target.value = "", !i3)
                                          return;
                                        if (!/^image\/(png|jpeg|webp)$/.test(
                                          i3.type
                                        ))
                                          return void ea(
                                            "Choose a JPG, PNG, or WebP image"
                                          );
                                        if (i3.size > 5242880)
                                          return void ea(
                                            "Choose an image under 5 MB"
                                          );
                                        let t3 = URL.createObjectURL(i3);
                                        eg.current.add(t3), ea(""), ek("photo", t3), en("New photo ready to save");
                                      }
                                    }),
                                    (0, a.jsx)(G, {
                                      show: !!et,
                                      className: A().photoError,
                                      children: (0, a.jsx)("span", {
                                        role: "alert",
                                        children: et
                                      })
                                    })
                                  ]
                                })
                              ]
                            }),
                            (0, a.jsxs)("div", {
                              className: A().fields,
                              children: [
                                (0, a.jsx)(N.p, {
                                  id: `${i2}-name`,
                                  label: "Full name",
                                  value: C2.name,
                                  autoComplete: "name",
                                  className: e$("name"),
                                  error: eS("name"),
                                  onBlur: () => eC("name"),
                                  onChange: (e3) => ek("name", e3.target.value)
                                }),
                                (0, a.jsx)(N.p, {
                                  id: `${i2}-title-field`,
                                  label: "Job title",
                                  value: C2.title,
                                  autoComplete: "organization-title",
                                  className: e$("title"),
                                  onChange: (e3) => ek("title", e3.target.value)
                                }),
                                (0, a.jsx)(N.p, {
                                  id: `${i2}-email`,
                                  label: "Email",
                                  type: "email",
                                  value: C2.email,
                                  autoComplete: "email",
                                  spellCheck: false,
                                  description: "Used for sign-in and notifications.",
                                  className: e$("email"),
                                  error: eS("email"),
                                  onBlur: () => eC("email"),
                                  onChange: (e3) => ek("email", e3.target.value)
                                }),
                                (0, a.jsx)(k.l, {
                                  label: "Time zone",
                                  value: C2.timezone,
                                  options: z,
                                  onValueChange: (e3) => ek("timezone", e3)
                                })
                              ]
                            })
                          ]
                        }),
                        "notifications" === h2 && (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsxs)(V, {
                              id: `${i2}-email-group`,
                              title: "Email",
                              children: [
                                (0, a.jsx)(K, {
                                  id: `${i2}-mentions`,
                                  label: "Comments and mentions",
                                  description: "Replies to your comments and anyone who mentions you.",
                                  checked: C2.mentions,
                                  onChange: (e3) => ek("mentions", e3)
                                }),
                                (0, a.jsx)(K, {
                                  id: `${i2}-summary`,
                                  label: "Weekly summary",
                                  description: "A Monday recap of what moved in your projects.",
                                  checked: C2.summary,
                                  onChange: (e3) => ek("summary", e3)
                                }),
                                (0, a.jsx)(K, {
                                  id: `${i2}-news`,
                                  label: "Product news",
                                  description: "New features and changes, about once a month.",
                                  checked: C2.news,
                                  onChange: (e3) => ek("news", e3)
                                })
                              ]
                            }),
                            (0, a.jsxs)(V, {
                              id: `${i2}-device-group`,
                              title: "On your devices",
                              children: [
                                (0, a.jsx)(K, {
                                  id: `${i2}-messages`,
                                  label: "Direct messages",
                                  description: "Messages sent to you or to a group you are in.",
                                  checked: C2.messages,
                                  onChange: (e3) => ek("messages", e3)
                                }),
                                (0, a.jsx)(K, {
                                  id: `${i2}-reminders`,
                                  label: "Reminders",
                                  description: "Due dates and meetings, 15 minutes ahead.",
                                  checked: C2.reminders,
                                  onChange: (e3) => ek("reminders", e3)
                                })
                              ]
                            }),
                            (0, a.jsx)(V, {
                              id: `${i2}-quiet-group`,
                              title: "Quiet hours",
                              footer: (0, a.jsx)(G, {
                                show: C2.quiet,
                                className: A().revealField,
                                children: (0, a.jsx)(k.l, {
                                  label: "Pause between",
                                  value: C2.quietHours,
                                  options: I,
                                  onValueChange: (e3) => ek("quietHours", e3)
                                })
                              }),
                              children: (0, a.jsx)(K, {
                                id: `${i2}-quiet`,
                                label: "Pause overnight",
                                description: "Hold notifications and deliver them together in the morning.",
                                checked: C2.quiet,
                                onChange: (e3) => ek("quiet", e3)
                              })
                            })
                          ]
                        }),
                        "security" === h2 && (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsxs)(V, {
                              id: `${i2}-signin-group`,
                              title: "Sign-in",
                              children: [
                                (0, a.jsx)(K, {
                                  id: `${i2}-two-step`,
                                  label: "Two-step verification",
                                  description: "Ask for a code from your authenticator app on new devices.",
                                  checked: C2.twoStep,
                                  onChange: (e3) => ek("twoStep", e3),
                                  children: (0, a.jsxs)(G, {
                                    show: !C2.twoStep,
                                    className: A().warning,
                                    children: [
                                      (0, a.jsx)(b.A, {
                                        size: 14,
                                        strokeWidth: 1.9,
                                        "aria-hidden": "true"
                                      }),
                                      "Anyone with your password could sign in."
                                    ]
                                  })
                                }),
                                (0, a.jsx)(K, {
                                  id: `${i2}-alerts`,
                                  label: "Sign-in alerts",
                                  description: "Email you when a new device signs in.",
                                  checked: C2.alerts,
                                  onChange: (e3) => ek("alerts", e3)
                                })
                              ]
                            }),
                            (0, a.jsx)("div", {
                              className: A().inlineField,
                              children: (0, a.jsx)(k.l, {
                                label: "Sign out idle sessions",
                                value: C2.timeout,
                                options: O,
                                description: "Applies to every device except this one.",
                                onValueChange: (e3) => ek("timeout", e3)
                              })
                            }),
                            (0, a.jsxs)("section", {
                              className: A().group,
                              "aria-labelledby": `${i2}-devices`,
                              children: [
                                (0, a.jsx)("h4", {
                                  id: `${i2}-devices`,
                                  tabIndex: -1,
                                  children: "Where you are signed in"
                                }),
                                (0, a.jsx)("ul", {
                                  className: A().sessions,
                                  children: (0, a.jsx)(l.N, {
                                    initial: false,
                                    children: ej.map((e3) => {
                                      let t3 = e3.icon;
                                      return (0, a.jsx)(
                                        r.PY1.li,
                                        {
                                          className: A().session,
                                          initial: { height: 0, opacity: 0 },
                                          animate: {
                                            height: "auto",
                                            opacity: 1
                                          },
                                          exit: { height: 0, opacity: 0 },
                                          transition: u2 ? { duration: 0 } : {
                                            height: $.T.spring.smooth,
                                            opacity: {
                                              duration: $.T.duration.fast
                                            }
                                          },
                                          children: (0, a.jsxs)("div", {
                                            className: A().sessionInner,
                                            children: [
                                              (0, a.jsx)(t3, {
                                                size: 16,
                                                strokeWidth: 1.75,
                                                "aria-hidden": "true"
                                              }),
                                              (0, a.jsxs)("span", {
                                                className: A().sessionText,
                                                children: [
                                                  (0, a.jsxs)("strong", {
                                                    children: [
                                                      e3.device,
                                                      " \xB7 ",
                                                      e3.app
                                                    ]
                                                  }),
                                                  (0, a.jsxs)("span", {
                                                    children: [
                                                      e3.place,
                                                      " \xB7 ",
                                                      e3.seen
                                                    ]
                                                  })
                                                ]
                                              }),
                                              e3.current ? (0, a.jsx)("span", {
                                                className: A().thisDevice,
                                                children: "This device"
                                              }) : (0, a.jsx)(w.$, {
                                                id: `${i2}-signout-${e3.id}`,
                                                type: "button",
                                                variant: "ghost",
                                                size: "sm",
                                                "aria-label": `Sign out ${e3.device}`,
                                                onClick: () => {
                                                  let t4, a2, s2;
                                                  return a2 = (t4 = ej.filter(
                                                    (e4) => !e4.current
                                                  )).findIndex(
                                                    (i3) => i3.id === e3.id
                                                  ), s2 = t4[a2 + 1] ?? t4[a2 - 1], void (ek(
                                                    "signedOut",
                                                    [
                                                      ...C2.signedOut,
                                                      e3.id
                                                    ]
                                                  ), en(
                                                    `${e3.device} will be signed out when you save`
                                                  ), eP(
                                                    s2 ? `${i2}-signout-${s2.id}` : `${i2}-devices`
                                                  ));
                                                },
                                                children: "Sign out"
                                              })
                                            ]
                                          })
                                        },
                                        e3.id
                                      );
                                    })
                                  })
                                })
                              ]
                            })
                          ]
                        }),
                        "billing" === h2 && (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsxs)("div", {
                              className: A().plan,
                              children: [
                                (0, a.jsxs)("div", {
                                  className: A().planText,
                                  children: [
                                    (0, a.jsx)("strong", {
                                      children: "Team plan"
                                    }),
                                    (0, a.jsxs)("span", {
                                      children: [
                                        "8 seats at\xA0",
                                        (0, a.jsx)("span", {
                                          className: A().inherit,
                                          children: (0, a.jsx)(f.q, {
                                            value: "yearly" === C2.cycle ? 15 : 18,
                                            prefix: "$"
                                          })
                                        }),
                                        "\xA0each"
                                      ]
                                    })
                                  ]
                                }),
                                (0, a.jsxs)("div", {
                                  className: A().price,
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: A().priceValue,
                                      children: (0, a.jsx)(f.q, {
                                        value: ew,
                                        prefix: "$"
                                      })
                                    }),
                                    (0, a.jsx)(S.g, {
                                      className: A().priceUnit,
                                      children: "yearly" === C2.cycle ? "per year" : "per month"
                                    })
                                  ]
                                })
                              ]
                            }),
                            (0, a.jsxs)("div", {
                              className: A().cycle,
                              children: [
                                (0, a.jsx)(T.A, {
                                  label: "Billing cycle",
                                  value: C2.cycle,
                                  options: Y,
                                  onValueChange: (e3) => ek("cycle", e3)
                                }),
                                (0, a.jsx)("span", {
                                  className: A().cycleNote,
                                  children: (0, a.jsx)(l.N, {
                                    mode: "popLayout",
                                    initial: false,
                                    children: (0, a.jsx)(
                                      r.PY1.span,
                                      {
                                        ...H,
                                        transition: {
                                          duration: u2 ? 0 : $.T.duration.standard,
                                          ease: D
                                        },
                                        children: "yearly" === C2.cycle ? "You save $288 a year" : "Save $288 a year with yearly billing"
                                      },
                                      C2.cycle
                                    )
                                  })
                                })
                              ]
                            }),
                            (0, a.jsxs)("div", {
                              className: A().payment,
                              children: [
                                (0, a.jsx)(g.A, {
                                  size: 16,
                                  strokeWidth: 1.75,
                                  "aria-hidden": "true"
                                }),
                                (0, a.jsxs)("span", {
                                  children: [
                                    (0, a.jsx)("strong", {
                                      children: "Visa ending in 4242"
                                    }),
                                    (0, a.jsx)("span", {
                                      children: "Expires 08/2028 \xB7 next invoice on October 1"
                                    })
                                  ]
                                })
                              ]
                            }),
                            (0, a.jsxs)("div", {
                              className: A().fields,
                              children: [
                                (0, a.jsx)(N.p, {
                                  id: `${i2}-billingEmail`,
                                  label: "Billing email",
                                  type: "email",
                                  value: C2.billingEmail,
                                  autoComplete: "email",
                                  spellCheck: false,
                                  description: "Invoices and receipts are sent here.",
                                  className: e$("billingEmail"),
                                  error: eS("billingEmail"),
                                  onBlur: () => eC("billingEmail"),
                                  onChange: (e3) => ek("billingEmail", e3.target.value)
                                }),
                                (0, a.jsx)(N.p, {
                                  id: `${i2}-company`,
                                  label: "Company name",
                                  value: C2.company,
                                  autoComplete: "organization",
                                  className: e$("company"),
                                  onChange: (e3) => ek("company", e3.target.value)
                                }),
                                (0, a.jsx)(k.l, {
                                  label: "Country",
                                  value: C2.country,
                                  options: F,
                                  onValueChange: (e3) => ek("country", e3)
                                }),
                                (0, a.jsx)(N.p, {
                                  id: `${i2}-vat`,
                                  label: "VAT number",
                                  value: C2.vat,
                                  spellCheck: false,
                                  className: e$("vat"),
                                  onChange: (e3) => ek("vat", e3.target.value)
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    },
                    h2
                  )
                })
              }),
              (0, a.jsx)("div", {
                className: A().dock,
                children: (0, a.jsx)(l.N, {
                  children: eb && (0, a.jsx)(
                    Z,
                    {
                      barRef: ed,
                      state: eb,
                      count: ev,
                      shake: em,
                      onDiscard: function() {
                        "saving" !== W2 && (ei((e3) => ({ tick: e3.tick + 1, keys: e_ })), P2(x2), J([]), ea(""), en(
                          `${ev} ${1 === ev ? "change" : "changes"} discarded`
                        ));
                      },
                      onSave: eE
                    },
                    "bar"
                  )
                })
              }),
              (0, a.jsx)("p", {
                className: A().srOnly,
                role: "status",
                "aria-live": "polite",
                children: es
              })
            ]
          })
        ]
      })
    });
  }
  let X = Q;
}

__m(__module,__exports,__require);
}