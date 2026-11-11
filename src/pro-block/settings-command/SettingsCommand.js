function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.r(t), i.d(t, { SettingsCommand: () => W, default: () => Y });
  var n = i(95155), a = i(12115), s = i(28245), r = i(92171), l = i(25354), o = i(57700), d = i(18310), c = i(80642), u = i(80846), m = i(52920), p = i(15298), h = i(50981), g = i(57465), f = i(71019), b = i(65377), y = i(21759), _ = i(65024), x = i(51288), v = i(66558), w = i(96220), j = i(50680), k = i(98344), N = i(7770);
  let T = [
    {
      id: "general",
      label: "General",
      description: "Name, address, and regional defaults for Northwind Studio."
    },
    {
      id: "appearance",
      label: "Appearance",
      description: "How the app looks for you on this device."
    },
    {
      id: "notifications",
      label: "Notifications",
      description: "Choose what reaches you and how often."
    },
    {
      id: "security",
      label: "Security",
      description: "Sign in rules and session policy for everyone."
    },
    {
      id: "members",
      label: "Members",
      description: "Who can join and what new people can do."
    },
    {
      id: "billing",
      label: "Billing",
      description: "Where invoices go and how they are issued."
    }
  ], S = [
    {
      id: "workspace-name",
      section: "general",
      label: "Workspace name",
      description: "Shown in the sidebar, invites, and emails.",
      kind: "text",
      keywords: ["title", "company", "rename"]
    },
    {
      id: "workspace-url",
      section: "general",
      label: "Workspace URL",
      description: "Changing it breaks old links for 30 days.",
      kind: "text",
      prefix: "arc.so/",
      keywords: ["slug", "address", "domain", "link"]
    },
    {
      id: "language",
      section: "general",
      label: "Language",
      description: "Used for dates, numbers, and interface text.",
      kind: "select",
      options: [
        { value: "en-us", label: "English (US)" },
        { value: "en-gb", label: "English (UK)" },
        { value: "de", label: "Deutsch" },
        { value: "fr", label: "Fran\xE7ais" },
        { value: "pt", label: "Portugu\xEAs" },
        { value: "ja", label: "\u65E5\u672C\u8A9E" }
      ],
      keywords: ["locale", "translation", "english"]
    },
    {
      id: "timezone",
      section: "general",
      label: "Time zone",
      description: "Due dates and digests follow this zone.",
      kind: "select",
      options: [
        { value: "lisbon", label: "Lisbon (GMT+1)" },
        { value: "london", label: "London (GMT+1)" },
        { value: "berlin", label: "Berlin (GMT+2)" },
        { value: "new-york", label: "New York (GMT-4)" },
        { value: "san-francisco", label: "San Francisco (GMT-7)" },
        { value: "tokyo", label: "Tokyo (GMT+9)" }
      ],
      keywords: ["timezone", "clock", "region", "utc", "gmt"]
    },
    {
      id: "week-start",
      section: "general",
      label: "Week starts on",
      description: "Affects calendars and weekly reports.",
      kind: "segmented",
      options: [
        { value: "mon", label: "Monday" },
        { value: "sun", label: "Sunday" }
      ],
      keywords: ["calendar", "monday", "sunday"]
    },
    {
      id: "theme",
      section: "appearance",
      label: "Theme",
      description: "Match the system or pick one.",
      kind: "segmented",
      options: [
        { value: "light", label: "Light" },
        { value: "dark", label: "Dark" },
        { value: "system", label: "System" }
      ],
      keywords: ["dark mode", "light mode", "color", "night"]
    },
    {
      id: "density",
      section: "appearance",
      label: "Density",
      description: "Compact fits more rows in lists and tables.",
      kind: "segmented",
      options: [
        { value: "comfortable", label: "Comfortable" },
        { value: "compact", label: "Compact" }
      ],
      keywords: ["spacing", "rows", "dense"]
    },
    {
      id: "font-size",
      section: "appearance",
      label: "Text size",
      description: "Scales text across the app.",
      kind: "select",
      options: [
        { value: "sm", label: "Small" },
        { value: "md", label: "Default" },
        { value: "lg", label: "Large" }
      ],
      keywords: ["font", "zoom", "accessibility"]
    },
    {
      id: "sidebar-counts",
      section: "appearance",
      label: "Sidebar counts",
      description: "Show unread counts beside each view.",
      kind: "switch",
      keywords: ["badges", "numbers", "navigation"]
    },
    {
      id: "smooth-motion",
      section: "appearance",
      label: "Interface motion",
      description: "Turn off to swap movement for fades.",
      kind: "switch",
      keywords: ["animation", "reduce motion", "accessibility"]
    },
    {
      id: "mentions",
      section: "notifications",
      label: "Mentions",
      description: "When someone @mentions you or your team.",
      kind: "switch",
      keywords: ["at", "tag", "ping"]
    },
    {
      id: "assigned",
      section: "notifications",
      label: "Assigned to me",
      description: "New issues and reviews that land on you.",
      kind: "switch",
      keywords: ["assignee", "tasks", "review"]
    },
    {
      id: "deploy-failures",
      section: "notifications",
      label: "Failed deploys",
      description: "Builds that fail on a branch you own.",
      kind: "switch",
      keywords: ["ci", "build", "error", "release"]
    },
    {
      id: "weekly-digest",
      section: "notifications",
      label: "Weekly digest",
      description: "A Monday summary of what shipped.",
      kind: "switch",
      keywords: ["summary", "newsletter", "report"]
    },
    {
      id: "email-cadence",
      section: "notifications",
      label: "Email delivery",
      description: "Batch emails to cut down on noise.",
      kind: "select",
      options: [
        { value: "instant", label: "Right away" },
        { value: "hourly", label: "Hourly digest" },
        { value: "daily", label: "Daily digest" },
        { value: "never", label: "Never" }
      ],
      keywords: ["frequency", "inbox", "batch", "digest"]
    },
    {
      id: "two-step",
      section: "security",
      label: "Require two-step sign in",
      description: "Everyone adds an authenticator app or key.",
      kind: "switch",
      keywords: ["2fa", "mfa", "otp", "authenticator", "passkey"]
    },
    {
      id: "saml",
      section: "security",
      label: "Enforce SAML single sign-on",
      description: "Members sign in through Okta only.",
      kind: "switch",
      keywords: ["sso", "okta", "identity", "login"]
    },
    {
      id: "session-length",
      section: "security",
      label: "Session length",
      description: "Idle people are signed out after this.",
      kind: "select",
      options: [
        { value: "1h", label: "1 hour" },
        { value: "8h", label: "8 hours" },
        { value: "24h", label: "24 hours" },
        { value: "7d", label: "7 days" },
        { value: "30d", label: "30 days" }
      ],
      keywords: ["timeout", "logout", "idle", "expire"]
    },
    {
      id: "ip-allowlist",
      section: "security",
      label: "IP allowlist",
      description: "Only office and VPN addresses can sign in.",
      kind: "switch",
      keywords: ["network", "firewall", "vpn", "ip address"]
    },
    {
      id: "audit-retention",
      section: "security",
      label: "Audit log retention",
      description: "How long sign ins and changes are kept.",
      kind: "select",
      options: [
        { value: "90d", label: "90 days" },
        { value: "1y", label: "1 year" },
        { value: "2y", label: "2 years" }
      ],
      keywords: ["history", "compliance", "logs", "soc 2"]
    },
    {
      id: "default-role",
      section: "members",
      label: "Default role",
      description: "Given to everyone who joins by invite link.",
      kind: "select",
      options: [
        { value: "viewer", label: "Viewer" },
        { value: "member", label: "Member" },
        { value: "admin", label: "Admin" }
      ],
      keywords: ["permissions", "access", "new members"]
    },
    {
      id: "invite-policy",
      section: "members",
      label: "Who can invite",
      description: "Admins approve requests from everyone else.",
      kind: "segmented",
      options: [
        { value: "admins", label: "Admins" },
        { value: "everyone", label: "Everyone" }
      ],
      keywords: ["invitations", "permissions", "join"]
    },
    {
      id: "guests",
      section: "members",
      label: "Guest access",
      description: "Guests see only projects shared with them.",
      kind: "switch",
      keywords: ["external", "clients", "contractors"]
    },
    {
      id: "domains",
      section: "members",
      label: "Allowed email domains",
      description: "People with these addresses join without an invite.",
      kind: "text",
      placeholder: "example.com",
      keywords: ["domain", "auto join", "email"]
    },
    {
      id: "billing-email",
      section: "billing",
      label: "Billing email",
      description: "Receipts and payment alerts go here.",
      kind: "text",
      keywords: ["invoice", "finance", "receipt", "accounting"]
    },
    {
      id: "currency",
      section: "billing",
      label: "Invoice currency",
      description: "Applies from the next billing period.",
      kind: "select",
      options: [
        { value: "eur", label: "Euro (EUR)" },
        { value: "usd", label: "US dollar (USD)" },
        { value: "gbp", label: "Pound sterling (GBP)" },
        { value: "chf", label: "Swiss franc (CHF)" }
      ],
      keywords: ["money", "euro", "dollar", "pricing"]
    },
    {
      id: "spend-alerts",
      section: "billing",
      label: "Spend alerts",
      description: "Email admins at 80% of the monthly budget.",
      kind: "switch",
      keywords: ["budget", "limit", "usage", "cost"]
    },
    {
      id: "tax-id",
      section: "billing",
      label: "VAT number",
      description: "Printed on every invoice.",
      kind: "text",
      placeholder: "PT 000 000 000",
      keywords: ["tax", "vat", "company", "invoice"]
    }
  ], C = {
    "workspace-name": "Northwind Studio",
    "workspace-url": "northwind",
    language: "en-gb",
    timezone: "lisbon",
    "week-start": "mon",
    theme: "system",
    density: "comfortable",
    "font-size": "md",
    "sidebar-counts": true,
    "smooth-motion": true,
    mentions: true,
    assigned: true,
    "deploy-failures": true,
    "weekly-digest": false,
    "email-cadence": "hourly",
    "two-step": true,
    saml: false,
    "session-length": "24h",
    "ip-allowlist": false,
    "audit-retention": "1y",
    "default-role": "member",
    "invite-policy": "admins",
    guests: true,
    domains: "northwind.studio",
    "billing-email": "finance@northwind.studio",
    currency: "eur",
    "spend-alerts": true,
    "tax-id": "PT 516 283 947"
  }, $ = [
    "two-step",
    "theme",
    "billing-email",
    "session-length",
    "email-cadence"
  ];
  var M = i(58320), R = i.n(M);
  let P = {
    general: u.A,
    appearance: m.A,
    notifications: p.A,
    security: h.A,
    members: g.A,
    billing: f.A
  }, L = [...N.T.ease.enter], E = { type: "spring", visualDuration: 0.46, bounce: 0.1 }, D = (e2) => `blur(${e2}px)`, z = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  function F({ text: e2, match: t2 }) {
    return t2 ? (0, n.jsxs)(n.Fragment, {
      children: [
        e2.slice(0, t2[0]),
        (0, n.jsx)("mark", {
          className: R().mark,
          children: e2.slice(t2[0], t2[1])
        }),
        e2.slice(t2[1])
      ]
    }) : (0, n.jsx)(n.Fragment, { children: e2 });
  }
  function O(e2, t2) {
    let i2 = e2.getBoundingClientRect(), n2 = t2.getBoundingClientRect();
    return {
      x: i2.left - n2.left,
      y: i2.top - n2.top,
      width: i2.width,
      height: i2.height
    };
  }
  function A({
    uid: e2,
    origin: t2,
    frameWidth: i2,
    closing: d2,
    onClosed: c2,
    query: u2,
    onQuery: m2,
    results: p2,
    suggestions: h2,
    active: g2,
    onActive: f2,
    onPick: _2,
    onClose: x2,
    reduce: v2
  }) {
    let w2 = Math.min(560, i2 - 24), j2 = { x: (i2 - w2) / 2, y: 12, width: w2 }, k2 = (0, s.d)(v2 ? j2.x : t2.x), T2 = (0, s.d)(v2 ? j2.y : t2.y), S2 = (0, s.d)(v2 ? j2.width : t2.width), C2 = (0, s.d)(t2.height), $2 = (0, s.d)(v2 ? 14 : 10), M2 = (0, s.d)(+!v2), D2 = (0, s.d)(0), z2 = (0, a.useRef)(null), O2 = (0, a.useRef)(null), H2 = (0, a.useRef)(null), B2 = u2.trim() ? p2 : h2;
    (0, a.useLayoutEffect)(() => {
      if (d2) return;
      let e3 = z2.current;
      if (!e3) return;
      let t3 = (t4) => {
        let i4 = e3.offsetHeight;
        if (v2) {
          k2.jump(j2.x), T2.jump(j2.y), S2.jump(j2.width), C2.jump(i4), $2.jump(14);
          return;
        }
        (0, r.i)(k2, j2.x, E), (0, r.i)(T2, j2.y, E), (0, r.i)(S2, j2.width, E), (0, r.i)(C2, i4, t4 ? E : N.T.spring.smooth), (0, r.i)($2, 14, E);
      };
      if (t3(true), "u" < typeof ResizeObserver) return;
      let i3 = new ResizeObserver(() => t3(false));
      return i3.observe(e3), () => i3.disconnect();
    }, [d2, v2, j2.x, j2.y, j2.width, k2, T2, S2, C2, $2]), (0, a.useEffect)(() => {
      d2 || ((0, r.i)(M2, 1, { duration: v2 ? N.T.duration.fast : 0 }), (0, r.i)(D2, 1, {
        duration: v2 ? N.T.duration.fast : N.T.duration.standard,
        delay: 0.06 * !v2,
        ease: L
      }));
    }, [D2, d2, v2, M2]), (0, a.useEffect)(() => {
      if (!d2) return;
      if (v2) {
        let e4 = (0, r.i)(M2, 0, { duration: N.T.duration.fast });
        return e4.then(c2), () => e4.stop();
      }
      let { to: e3, mode: t3 } = d2;
      (0, r.i)(D2, 0, { duration: N.T.duration.instant });
      let i3 = "row" === t3 ? E : N.T.spring.smooth;
      (0, r.i)(k2, e3.x, i3), (0, r.i)(T2, e3.y, i3), (0, r.i)(S2, e3.width, i3), (0, r.i)(C2, e3.height, i3), (0, r.i)($2, 10, i3);
      let n2 = (0, r.i)(
        M2,
        0,
        "row" === t3 ? { duration: 0.22, delay: 0.2 } : { duration: 0.1, delay: 0.24 }
      );
      return n2.then(c2), () => n2.stop();
    }, [D2, d2, C2, c2, v2, M2, S2, k2, T2, $2]), (0, a.useEffect)(() => {
      O2.current?.focus({ preventScroll: true });
    }, []), (0, a.useEffect)(() => {
      let e3 = H2.current, t3 = e3?.querySelector(`[data-index="${g2}"]`);
      e3 && t3 && (t3.offsetTop < e3.scrollTop ? e3.scrollTop = t3.offsetTop : t3.offsetTop + t3.offsetHeight > e3.scrollTop + e3.clientHeight && (e3.scrollTop = t3.offsetTop + t3.offsetHeight - e3.clientHeight));
    }, [g2]);
    let I2 = `${e2}-results`;
    return (0, n.jsx)(l.PY1.div, {
      className: R().palette,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Search settings",
      style: { x: k2, y: T2, width: S2, height: C2, borderRadius: $2, opacity: M2 },
      children: (0, n.jsxs)("div", {
        ref: z2,
        className: R().paletteContent,
        style: { width: j2.width },
        children: [
          (0, n.jsxs)("div", {
            className: R().paletteField,
            children: [
              (0, n.jsx)(b.A, { size: 16, "aria-hidden": "true" }),
              (0, n.jsx)("input", {
                ref: O2,
                value: u2,
                onChange: (e3) => {
                  m2(e3.target.value), f2(0);
                },
                onKeyDown: function(e3) {
                  "ArrowDown" === e3.key || "ArrowUp" === e3.key ? (e3.preventDefault(), B2.length && f2(
                    (g2 + ("ArrowDown" === e3.key ? 1 : -1) + B2.length) % B2.length
                  )) : "Enter" === e3.key ? (e3.preventDefault(), B2[g2] && _2(B2[g2])) : "Escape" === e3.key ? (e3.preventDefault(), x2()) : "Tab" === e3.key && e3.preventDefault();
                },
                placeholder: "Search settings",
                role: "combobox",
                "aria-expanded": "true",
                "aria-controls": I2,
                "aria-autocomplete": "list",
                "aria-activedescendant": B2[g2] ? `${e2}-option-${B2[g2].def.id}` : void 0,
                spellCheck: false,
                autoComplete: "off"
              }),
              (0, n.jsx)("kbd", { className: R().kbd, children: "Esc" })
            ]
          }),
          (0, n.jsxs)(l.PY1.div, {
            className: R().paletteBody,
            style: { opacity: D2 },
            children: [
              !u2.trim() && (0, n.jsx)("p", {
                className: R().paletteHint,
                children: "Suggested"
              }),
              B2.length ? (0, n.jsx)(o.o, {
                id: `${e2}-palette`,
                children: (0, n.jsx)("ul", {
                  ref: H2,
                  id: I2,
                  role: "listbox",
                  "aria-label": "Matching settings",
                  className: R().results,
                  children: B2.map((t3, i3) => {
                    let a2 = P[t3.def.section], s2 = i3 === g2;
                    return (0, n.jsxs)(
                      "li",
                      {
                        id: `${e2}-option-${t3.def.id}`,
                        "data-index": i3,
                        role: "option",
                        "aria-selected": s2,
                        className: R().result,
                        onPointerMove: () => {
                          s2 || f2(i3);
                        },
                        onPointerDown: (e3) => e3.preventDefault(),
                        onClick: () => _2(t3),
                        children: [
                          s2 && (0, n.jsx)(l.PY1.span, {
                            className: R().resultHighlight,
                            layoutId: "active",
                            transition: v2 ? { duration: 0 } : N.T.spring.snappy,
                            "aria-hidden": "true"
                          }),
                          (0, n.jsx)(a2, {
                            size: 15,
                            "aria-hidden": "true"
                          }),
                          (0, n.jsxs)("span", {
                            className: R().resultText,
                            children: [
                              (0, n.jsx)("span", {
                                className: R().resultLabel,
                                children: (0, n.jsx)(F, {
                                  text: t3.def.label,
                                  match: t3.match
                                })
                              }),
                              (0, n.jsx)("span", {
                                className: R().resultDescription,
                                children: t3.def.description
                              })
                            ]
                          }),
                          (0, n.jsx)("span", {
                            className: R().resultEnd,
                            "aria-hidden": "true",
                            children: s2 ? (0, n.jsx)(y.A, { size: 14 }) : null
                          })
                        ]
                      },
                      t3.def.id
                    );
                  })
                })
              }) : (0, n.jsxs)("p", {
                className: R().empty,
                role: "status",
                children: ["No settings match \u201C", u2.trim(), "\u201D"]
              }),
              (0, n.jsxs)("div", {
                className: R().paletteFoot,
                "aria-hidden": "true",
                children: [
                  (0, n.jsxs)("span", {
                    children: [
                      (0, n.jsx)("kbd", { className: R().kbd, children: "\u2191" }),
                      (0, n.jsx)("kbd", { className: R().kbd, children: "\u2193" }),
                      " Move"
                    ]
                  }),
                  (0, n.jsxs)("span", {
                    children: [
                      (0, n.jsx)("kbd", { className: R().kbd, children: "\u21B5" }),
                      " Jump to setting"
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    });
  }
  function H({ def: e2, id: t2, value: i2, error: a2, onChange: s2, labelId: r2 }) {
    let l2 = `${t2}-hint${a2 ? ` ${t2}-error` : ""}`;
    return "switch" === e2.kind ? (0, n.jsx)(j.d, {
      id: t2,
      checked: true === i2,
      onCheckedChange: s2,
      "aria-labelledby": r2,
      "aria-describedby": l2
    }) : "segmented" === e2.kind ? (0, n.jsx)("div", {
      className: R().segmented,
      children: (0, n.jsx)(v.A, {
        options: e2.options ?? [],
        value: String(i2),
        onValueChange: s2,
        label: e2.label
      })
    }) : "select" === e2.kind ? (0, n.jsx)("div", {
      className: R().select,
      children: (0, n.jsx)(w.l, {
        id: t2,
        label: e2.label,
        className: R().selectTrigger,
        value: String(i2),
        options: e2.options ?? [],
        onValueChange: s2
      })
    }) : (0, n.jsxs)("span", {
      className: R().text,
      "data-invalid": a2 ? "" : void 0,
      children: [
        e2.prefix && (0, n.jsx)("span", {
          className: R().prefix,
          "aria-hidden": "true",
          children: e2.prefix
        }),
        (0, n.jsx)("input", {
          id: t2,
          value: String(i2),
          placeholder: e2.placeholder,
          onChange: (e3) => s2(e3.target.value),
          "aria-labelledby": r2,
          "aria-describedby": l2,
          "aria-invalid": !!a2 || void 0,
          spellCheck: false,
          autoComplete: "off"
        })
      ]
    });
  }
  function B({
    def: e2,
    uid: t2,
    value: i2,
    dirty: a2,
    error: s2,
    pulse: r2,
    onChange: o2,
    rowRef: u2
  }) {
    let m2 = (0, d.I)(), p2 = `${t2}-${e2.id}`, h2 = `${p2}-label`, g2 = r2 ? r2 % 2 ? R().pulseA : R().pulseB : "";
    return (0, n.jsxs)("div", {
      ref: u2,
      className: `${R().row} ${"text" === e2.kind ? R().rowWide : ""} ${g2}`,
      "data-setting": e2.id,
      "data-kind": e2.kind,
      children: [
        (0, n.jsxs)("div", {
          className: R().rowText,
          children: [
            (0, n.jsxs)("span", {
              className: R().rowLabel,
              children: [
                (0, n.jsx)("label", {
                  id: h2,
                  htmlFor: "segmented" === e2.kind || "select" === e2.kind ? void 0 : p2,
                  children: e2.label
                }),
                (0, n.jsx)(c.N, {
                  initial: false,
                  children: a2 && (0, n.jsx)(l.PY1.span, {
                    className: R().dirty,
                    initial: { opacity: 0, scale: 0.4 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 0.4 },
                    transition: m2 ? { duration: 0 } : N.T.spring.snappy,
                    children: (0, n.jsx)("span", {
                      className: R().srOnly,
                      children: "Edited"
                    })
                  })
                })
              ]
            }),
            (0, n.jsx)("p", { id: `${p2}-hint`, children: e2.description }),
            (0, n.jsx)(c.N, {
              initial: false,
              children: s2 && (0, n.jsx)(l.PY1.p, {
                id: `${p2}-error`,
                className: R().error,
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                transition: m2 ? { duration: 0 } : N.T.spring.smooth,
                children: s2
              })
            })
          ]
        }),
        (0, n.jsx)("div", {
          className: R().rowControl,
          children: (0, n.jsx)(H, {
            def: e2,
            id: p2,
            value: i2,
            error: s2,
            onChange: o2,
            labelId: h2
          })
        })
      ]
    });
  }
  function I({
    state: e2,
    count: t2,
    invalid: i2,
    onDiscard: o2,
    onSave: u2,
    shake: m2,
    barRef: p2
  }) {
    let h2 = (0, d.I)(), g2 = (0, a.useRef)(null), f2 = (0, s.d)(44), b2 = (0, s.d)(44), y2 = "saved" === e2 ? "saved" : "edit";
    (0, a.useLayoutEffect)(() => {
      let e3 = g2.current?.querySelector(`[data-phase="${y2}"]`);
      if (!e3) return;
      let t3 = () => {
        let t4 = { width: e3.offsetWidth + 2, height: e3.offsetHeight + 2 };
        if (h2) {
          f2.jump(t4.width), b2.jump(t4.height);
          return;
        }
        (0, r.i)(f2, t4.width, N.T.spring.morph), (0, r.i)(b2, t4.height, N.T.spring.morph);
      };
      if (t3(), "u" < typeof ResizeObserver) return;
      let i3 = new ResizeObserver(t3);
      return i3.observe(e3), () => i3.disconnect();
    }, [y2, b2, h2, f2]);
    let v2 = h2 ? {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    } : {
      initial: { opacity: 0, filter: D(N.T.blur.soft) },
      animate: { opacity: 1, filter: D(0) },
      exit: { opacity: 0, filter: D(N.T.blur.soft) }
    }, w2 = {
      duration: h2 ? N.T.duration.instant : N.T.duration.standard,
      ease: L
    };
    return (0, n.jsx)(l.PY1.div, {
      ref: p2,
      className: R().bar,
      role: "group",
      "aria-label": "saved" === e2 ? "Save status" : "Unsaved changes",
      style: { width: f2, height: b2, x: m2 },
      initial: h2 ? { opacity: 0 } : { opacity: 0, y: 24, filter: D(N.T.blur.soft) },
      animate: { opacity: 1, y: 0, filter: D(0) },
      exit: h2 ? { opacity: 0, transition: { duration: N.T.duration.instant } } : {
        opacity: 0,
        y: 16,
        width: 44,
        height: 44,
        filter: D(N.T.blur.soft),
        transition: {
          width: N.T.spring.smooth,
          height: N.T.spring.smooth,
          y: { ...N.T.spring.smooth, delay: 0.06 },
          opacity: { duration: N.T.duration.exit, delay: 0.1 },
          filter: { duration: N.T.duration.exit, delay: 0.1 }
        }
      },
      transition: h2 ? { duration: N.T.duration.instant } : {
        y: N.T.spring.smooth,
        opacity: { duration: N.T.duration.fast },
        filter: { duration: N.T.duration.standard }
      },
      children: (0, n.jsx)("div", {
        ref: g2,
        className: R().barContent,
        children: (0, n.jsx)(c.N, {
          initial: false,
          children: "saved" === e2 ? (0, n.jsxs)(
            l.PY1.div,
            {
              "data-phase": "saved",
              className: R().barSaved,
              ...v2,
              transition: w2,
              children: [
                (0, n.jsx)("svg", {
                  viewBox: "0 0 24 24",
                  width: "16",
                  height: "16",
                  "aria-hidden": "true",
                  children: (0, n.jsx)(l.PY1.path, {
                    d: "M5 12.5 9.5 17 19 7.5",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    initial: { pathLength: +!!h2 },
                    animate: { pathLength: 1 },
                    transition: {
                      duration: 0.32 * !h2,
                      delay: 0.08 * !h2,
                      ease: L
                    }
                  })
                }),
                (0, n.jsx)("span", { children: "Settings saved" })
              ]
            },
            "saved"
          ) : (0, n.jsxs)(
            l.PY1.div,
            {
              "data-phase": "edit",
              className: R().barEdit,
              ...v2,
              transition: w2,
              children: [
                (0, n.jsx)("span", {
                  className: R().barCount,
                  children: "failed" === e2 ? (0, n.jsx)("span", {
                    className: R().barFailed,
                    children: "Could not save"
                  }) : i2 ? (0, n.jsx)("span", {
                    className: R().barFailed,
                    children: "Fix the highlighted field"
                  }) : (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)("span", {
                        className: R().inherit,
                        children: (0, n.jsx)(_.q, { value: t2 })
                      }),
                      "\xA0",
                      (0, n.jsx)("span", {
                        className: R().long,
                        children: "unsaved\xA0"
                      }),
                      (0, n.jsx)(k.g, {
                        children: 1 === t2 ? "change" : "changes"
                      })
                    ]
                  })
                }),
                (0, n.jsx)(x.$, {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  disabled: "saving" === e2,
                  onClick: o2,
                  children: "Discard"
                }),
                (0, n.jsx)(x.$, {
                  type: "button",
                  size: "sm",
                  loading: "saving" === e2,
                  onClick: u2,
                  children: "saving" === e2 ? "Saving" : "failed" === e2 ? "Retry" : "Save"
                })
              ]
            },
            "edit"
          )
        })
      })
    });
  }
  function W({
    sections: e2 = T,
    settings: t2 = S,
    defaultValues: i2 = C,
    suggested: u2 = $,
    onSave: m2,
    onValuesChange: p2,
    title: h2 = "Settings",
    className: g2
  }) {
    let f2 = (0, a.useId)().replace(/:/g, ""), y2 = !!(0, d.I)(), [_2, x2] = (0, a.useState)(i2), [v2, w2] = (0, a.useState)(i2), [j2, k2] = (0, a.useState)(e2[0]?.id ?? "general"), [M2, L2] = (0, a.useState)(null), [E2, D2] = (0, a.useState)(null), [F2, H2] = (0, a.useState)(0), [Y2, G] = (0, a.useState)(""), [U, q] = (0, a.useState)(0), [K, V] = (0, a.useState)({ id: "", tick: 0 }), [X, Q] = (0, a.useState)("idle"), [Z, J] = (0, a.useState)(false), [ee, et] = (0, a.useState)(""), ei = (0, a.useRef)(null), en = (0, a.useRef)(null), ea = (0, a.useRef)(null), es = (0, a.useRef)(null), er = (0, a.useRef)(/* @__PURE__ */ new Map()), el = (0, a.useRef)(/* @__PURE__ */ new Map()), eo = (0, a.useRef)(/* @__PURE__ */ new Set()), ed = (0, a.useRef)(0), ec = (0, s.d)(0), eu = t2.filter((e3) => v2[e3.id] !== _2[e3.id]).map((e3) => e3.id), em = (0, a.useMemo)(
      () => Object.fromEntries(
        t2.flatMap((e3) => {
          let t3 = (function(e4, t4) {
            if ("string" != typeof t4) return;
            let i3 = t4.trim();
            return "workspace-name" !== e4.id || i3 ? "workspace-url" !== e4.id || /^[a-z0-9](?:[a-z0-9-]{1,30}[a-z0-9])$/.test(i3) ? "billing-email" !== e4.id || z.test(i3) ? "domains" === e4.id && i3 && !i3.split(/[\s,]+/).filter(Boolean).every((e5) => /^[a-z0-9-]+(\.[a-z0-9-]+)+$/i.test(e5)) ? "Separate domains with commas, like northwind.studio" : void 0 : "Enter a valid email address" : "Use 3 to 32 lowercase letters, numbers, or dashes" : "Enter a workspace name";
          })(e3, v2[e3.id]);
          return t3 ? [[e3.id, t3]] : [];
        })
      ),
      [v2, t2]
    ), ep = t2.find((e3) => em[e3.id]), eh = (0, a.useMemo)(
      () => (function(e3, t3, i3) {
        let n2 = i3.trim().toLowerCase();
        if (!n2) return [];
        let a2 = n2.split(/\s+/), s2 = new Map(t3.map((e4) => [e4.id, e4.label.toLowerCase()]));
        return e3.flatMap((e4) => {
          let t4 = e4.label.toLowerCase(), i4 = [
            t4,
            e4.description.toLowerCase(),
            s2.get(e4.section) ?? "",
            ...e4.keywords ?? []
          ].join(" ");
          if (!a2.every((e5) => i4.includes(e5))) return [];
          let r2 = 0;
          for (let i5 of (t4.startsWith(n2) ? r2 += 8 : t4.includes(n2) && (r2 += 5), a2))
            t4.split(/\s+/).some((e5) => e5.startsWith(i5)) ? r2 += 3 : e4.keywords?.some((e5) => e5.startsWith(i5)) ? r2 += 2 : r2 += 0.5;
          let l2 = t4.indexOf(n2), o2 = t4.indexOf(a2[0]);
          return [
            {
              def: e4,
              score: r2,
              match: l2 >= 0 ? [l2, l2 + n2.length] : o2 >= 0 ? [o2, o2 + a2[0].length] : null
            }
          ];
        }).sort((e4, t4) => t4.score - e4.score).slice(0, 8);
      })(t2, e2, Y2),
      [Y2, e2, t2]
    ), eg = (0, a.useMemo)(
      () => u2.flatMap((e3) => {
        let i3 = t2.find((t3) => t3.id === e3);
        return i3 ? [{ def: i3, score: 0, match: null }] : [];
      }),
      [t2, u2]
    ), ef = "saving" === X ? "saving" : "failed" === X && eu.length ? "failed" : eu.length ? "edit" : "saved" === X ? "saved" : null;
    (0, a.useEffect)(() => {
      let e3 = eo.current;
      return () => {
        e3.forEach((e4) => window.clearTimeout(e4)), cancelAnimationFrame(ed.current);
      };
    }, []), (0, a.useEffect)(() => {
      let e3 = ei.current;
      if (!e3) return;
      let t3 = () => H2(e3.offsetWidth);
      if (t3(), "u" < typeof ResizeObserver) return;
      let i3 = new ResizeObserver(t3);
      return i3.observe(e3), () => i3.disconnect();
    }, []), (0, a.useEffect)(() => {
      "edit" !== ef && "saving" !== ef && "failed" !== ef && es.current?.contains(document.activeElement) && ea.current?.focus({ preventScroll: true });
    }, [ef]);
    let eb = (0, a.useCallback)((e3, t3) => {
      let i3 = window.setTimeout(() => {
        eo.current.delete(i3), e3();
      }, t3);
      eo.current.add(i3);
    }, []);
    function ey() {
      ei.current && ea.current && (G(""), q(0), D2(null), L2((e3) => e3 ?? { origin: O(ea.current, ei.current) }));
    }
    function e_() {
      ei.current && ea.current && (D2({ to: O(ea.current, ei.current), mode: "trigger" }), eb(() => ea.current?.focus({ preventScroll: true }), 200 * !y2));
    }
    function ex(e3, t3) {
      let i3 = en.current, n2 = er.current.get(e3), a2 = ei.current;
      if (!i3 || !n2 || !a2) return null;
      let s2 = Math.max(
        0,
        Math.min(
          n2.offsetTop - 0.28 * i3.clientHeight,
          i3.scrollHeight - i3.clientHeight
        )
      );
      i3.scrollTo({ top: s2, behavior: y2 ? "auto" : "smooth" });
      let r2 = O(i3, a2);
      return eb(() => V((t4) => ({ id: e3, tick: t4.tick + 1 })), 280 * !y2), t3 && eb(
        () => n2.querySelector("input, button")?.focus({ preventScroll: true }),
        480 * !y2
      ), {
        x: r2.x + n2.offsetLeft - 12,
        y: r2.y + n2.offsetTop - s2,
        width: n2.offsetWidth + 24,
        height: n2.offsetHeight
      };
    }
    let ev = (0, a.useCallback)(() => {
      L2(null), D2(null);
    }, []), ew = (0, a.useMemo)(
      () => e2.map((e3) => ({
        section: e3,
        defs: t2.filter((t3) => t3.section === e3.id)
      })),
      [e2, t2]
    );
    return (0, n.jsxs)("div", {
      className: `${R().root} ${g2 ?? ""}`,
      onKeyDown: function(e3) {
        if (M2 && !E2) return;
        let t3 = e3.target.closest("input, textarea");
        ((e3.metaKey || e3.ctrlKey) && "k" === e3.key.toLowerCase() || "/" === e3.key && !t3) && (e3.preventDefault(), ey());
      },
      children: [
        (0, n.jsxs)("div", {
          ref: ei,
          className: R().frame,
          children: [
            (0, n.jsxs)("header", {
              className: R().header,
              children: [
                (0, n.jsx)("h2", { children: h2 }),
                (0, n.jsx)("div", {
                  className: R().triggerSlot,
                  children: (0, n.jsxs)("button", {
                    ref: ea,
                    type: "button",
                    className: R().trigger,
                    "data-hidden": M2 ? "" : void 0,
                    onClick: ey,
                    "aria-haspopup": "dialog",
                    "aria-keyshortcuts": "Meta+K Control+K /",
                    children: [
                      (0, n.jsx)(b.A, { size: 15, "aria-hidden": "true" }),
                      (0, n.jsx)("span", { children: "Search settings" }),
                      (0, n.jsx)("kbd", {
                        className: R().kbd,
                        "aria-hidden": "true",
                        children: "\u2318K"
                      })
                    ]
                  })
                })
              ]
            }),
            (0, n.jsx)("nav", {
              className: R().nav,
              "aria-label": "Settings sections",
              children: (0, n.jsx)(o.o, {
                id: `${f2}-nav`,
                children: (0, n.jsx)("ul", {
                  children: ew.map(({ section: e3, defs: t3 }) => {
                    let i3 = P[e3.id], a2 = j2 === e3.id, s2 = t3.filter((e4) => eu.includes(e4.id)).length;
                    return (0, n.jsx)(
                      "li",
                      {
                        children: (0, n.jsxs)("button", {
                          type: "button",
                          className: R().navItem,
                          "aria-current": a2 ? "true" : void 0,
                          onClick: () => {
                            var t4;
                            let i4, n2;
                            return t4 = e3.id, i4 = en.current, n2 = el.current.get(t4), void (i4 && n2 && (k2(t4), i4.scrollTo({
                              top: Math.max(0, n2.offsetTop - 16),
                              behavior: y2 ? "auto" : "smooth"
                            })));
                          },
                          children: [
                            a2 && (0, n.jsx)(l.PY1.span, {
                              className: R().navHighlight,
                              layoutId: "highlight",
                              transition: y2 ? { duration: 0 } : N.T.spring.morph,
                              "aria-hidden": "true"
                            }),
                            (0, n.jsx)(i3, { size: 15, "aria-hidden": "true" }),
                            (0, n.jsx)("span", {
                              className: R().navLabel,
                              children: e3.label
                            }),
                            (0, n.jsx)(c.N, {
                              initial: false,
                              children: s2 > 0 && (0, n.jsx)(l.PY1.span, {
                                className: R().navDot,
                                initial: { opacity: 0, scale: 0.4 },
                                animate: { opacity: 1, scale: 1 },
                                exit: { opacity: 0, scale: 0.4 },
                                transition: y2 ? { duration: 0 } : N.T.spring.snappy,
                                children: (0, n.jsxs)("span", {
                                  className: R().srOnly,
                                  children: [s2, " edited"]
                                })
                              })
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
            (0, n.jsxs)("div", {
              className: R().main,
              children: [
                (0, n.jsx)("div", {
                  ref: en,
                  className: R().scroller,
                  onScroll: function() {
                    ed.current || (ed.current = requestAnimationFrame(() => {
                      ed.current = 0;
                      let t3 = en.current;
                      if (!t3) return;
                      let i3 = e2[0]?.id;
                      for (let n2 of e2) {
                        let e3 = el.current.get(n2.id);
                        e3 && e3.offsetTop <= t3.scrollTop + 0.3 * t3.clientHeight && (i3 = n2.id);
                      }
                      t3.scrollTop + t3.clientHeight >= t3.scrollHeight - 2 && (i3 = e2[e2.length - 1]?.id), i3 && k2((e3) => e3 === i3 ? e3 : i3);
                    }));
                  },
                  children: ew.map(
                    ({ section: e3, defs: t3 }) => (0, n.jsxs)(
                      "section",
                      {
                        ref: (t4) => {
                          t4 ? el.current.set(e3.id, t4) : el.current.delete(e3.id);
                        },
                        className: R().section,
                        "aria-labelledby": `${f2}-section-${e3.id}`,
                        children: [
                          (0, n.jsxs)("div", {
                            className: R().sectionHead,
                            children: [
                              (0, n.jsx)("h3", {
                                id: `${f2}-section-${e3.id}`,
                                children: e3.label
                              }),
                              (0, n.jsx)("p", { children: e3.description })
                            ]
                          }),
                          (0, n.jsx)("div", {
                            className: R().rows,
                            children: t3.map(
                              (e4) => (0, n.jsx)(
                                B,
                                {
                                  def: e4,
                                  uid: f2,
                                  value: v2[e4.id] ?? "",
                                  dirty: eu.includes(e4.id),
                                  error: Z || eu.includes(e4.id) ? em[e4.id] : void 0,
                                  pulse: K.id === e4.id ? K.tick : 0,
                                  onChange: (t4) => {
                                    var i3;
                                    return i3 = e4.id, void (w2((e5) => {
                                      let n2 = { ...e5, [i3]: t4 };
                                      return p2?.(n2), n2;
                                    }), ("saved" === X || "failed" === X) && Q("idle"));
                                  },
                                  rowRef: (t4) => {
                                    t4 ? er.current.set(e4.id, t4) : er.current.delete(e4.id);
                                  }
                                },
                                e4.id
                              )
                            )
                          })
                        ]
                      },
                      e3.id
                    )
                  )
                }),
                (0, n.jsx)("div", {
                  className: R().dock,
                  children: (0, n.jsx)(c.N, {
                    children: ef && (0, n.jsx)(
                      I,
                      {
                        state: ef,
                        count: eu.length,
                        invalid: Z && !!ep,
                        onDiscard: function() {
                          "saving" !== X && (w2(_2), p2?.(_2), J(false), Q("idle"), et("Changes discarded"));
                        },
                        onSave: function() {
                          if (!eu.length || "saving" === X) return;
                          if (ep) {
                            J(true), et(`${em[ep.id]} before saving`), y2 || (0, r.i)(ec, [0, -6, 5, -3, 2, 0], {
                              duration: 0.4,
                              ease: "easeOut"
                            }), ex(ep.id, true);
                            return;
                          }
                          Q("saving"), et("Saving settings");
                          let e3 = () => {
                            x2(v2), J(false), Q("saved"), et(
                              `${eu.length} ${1 === eu.length ? "change" : "changes"} saved`
                            ), eb(
                              () => Q((e4) => "saved" === e4 ? "idle" : e4),
                              1800
                            );
                          };
                          m2 ? Promise.resolve().then(() => m2(v2, eu)).then(e3, () => {
                            Q("failed"), et("Could not save. Try again.");
                          }) : eb(e3, 900);
                        },
                        shake: ec,
                        barRef: es
                      },
                      "bar"
                    )
                  })
                })
              ]
            }),
            (0, n.jsx)(c.N, {
              children: M2 && !E2 && (0, n.jsx)(
                l.PY1.div,
                {
                  className: R().scrim,
                  onPointerDown: e_,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: {
                    duration: y2 ? N.T.duration.instant : N.T.duration.standard
                  },
                  "aria-hidden": "true"
                },
                "scrim"
              )
            }),
            M2 && F2 > 0 && (0, n.jsx)(A, {
              uid: f2,
              origin: M2.origin,
              frameWidth: F2,
              closing: E2,
              onClosed: ev,
              query: Y2,
              onQuery: G,
              results: eh,
              suggestions: eg,
              active: U,
              onActive: q,
              onPick: function(t3) {
                let i3 = ex(t3.def.id, true);
                et(
                  `${t3.def.label}, in ${e2.find((e3) => e3.id === t3.def.section)?.label ?? "settings"}`
                ), i3 ? D2({ to: i3, mode: "row" }) : e_();
              },
              onClose: e_,
              reduce: y2
            })
          ]
        }),
        (0, n.jsx)("p", {
          className: R().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ee
        })
      ]
    });
  }
  let Y = W;
}

__m(__module,__exports,__require);
}