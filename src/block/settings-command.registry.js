/* settings-command (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(15298, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => s });
  var n = r(51811);
  let a = {
    name: "bell",
    size: 24,
    node: [
      ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
      [
        "path",
        {
          d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
          key: "11g9vi"
        }
      ]
    ]
  };
  a.node;
  let s = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(21759, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => n });
  var s = t(51811);
  let i = {
    name: "corner-down-left",
    size: 24,
    node: [
      ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4", key: "6o5b7l" }],
      ["path", { d: "m9 10-5 5 5 5", key: "1kshq7" }]
    ]
  };
  i.node;
  let n = (0, s.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(25854, function(__module,__exports,__require){
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
});
A.reg(50981, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "shield-check",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
          key: "oel41y"
        }
      ],
      ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(52920, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => o });
  var n = r(51811);
  let a = {
    name: "palette",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
          key: "e79jfc"
        }
      ],
      [
        "circle",
        { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }
      ],
      [
        "circle",
        {
          cx: "17.5",
          cy: "10.5",
          r: ".5",
          fill: "currentColor",
          key: "f64h9f"
        }
      ],
      [
        "circle",
        { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }
      ],
      [
        "circle",
        { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }
      ]
    ]
  };
  a.node;
  let o = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(57465, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "users",
    size: 24,
    node: [
      [
        "path",
        { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }
      ],
      ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
      ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(58320, ".settings-command_root__iRtuM{container-type:inline-size;width:min(100%,1000px);min-width:0;margin-inline:auto;color:var(--foreground);font-family:var(--font-body);font-size:13px;letter-spacing:var(--tracking-body)}.settings-command_frame__rjLMP{--control-height-md:var(--control-height-sm);position:relative;display:grid;grid-template-columns:208px minmax(0,1fr);grid-template-rows:56px minmax(0,1fr);height:660px;overflow:hidden;border:1px solid var(--border);border-radius:16px;background:var(--surface)}.settings-command_header__0plr8{grid-column:1/-1;display:flex;min-width:0;align-items:center;justify-content:space-between;gap:16px;border-bottom:1px solid var(--border);padding:0 12px 0 20px}.settings-command_header__0plr8 h2{margin:0;font-size:var(--text-sm);font-weight:500;letter-spacing:-.01em;line-height:1.2;white-space:nowrap}.settings-command_triggerSlot__RFvHI{display:flex;width:min(300px,100%);min-width:0;justify-content:flex-end}.settings-command_trigger__O8CCc{display:flex;width:100%;height:34px;min-width:0;align-items:center;gap:8px;border:1px solid var(--border);border-radius:10px;padding:0 6px 0 11px;background:var(--surface-raised);color:var(--text-muted);font:inherit;font-size:13px;text-align:left;cursor:pointer;box-shadow:var(--shadow-resting);-webkit-tap-highlight-color:transparent;transition:border-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}.settings-command_trigger__O8CCc>span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.settings-command_trigger__O8CCc>svg{flex:none}.settings-command_trigger__O8CCc[data-hidden]{visibility:hidden}@media (hover:hover) and (pointer:fine){.settings-command_trigger__O8CCc:hover{border-color:var(--border-strong);color:var(--text-secondary)}}.settings-command_kbd__DcVjp{display:inline-flex;min-width:20px;height:20px;align-items:center;justify-content:center;border:1px solid var(--border);border-radius:6px;padding:0 5px;background:var(--surface);color:var(--text-muted);font:inherit;font-size:var(--text-xs);line-height:1}.settings-command_nav__aUeDu{min-width:0;min-height:0;overflow-y:auto;border-right:1px solid var(--border);padding:12px 8px;background:color-mix(in oklab,var(--surface-muted) 45%,var(--surface));scrollbar-width:none}.settings-command_nav__aUeDu ul{display:flex;flex-direction:column;gap:1px;margin:0;padding:0;list-style:none}.settings-command_navItem__e55oM{position:relative;isolation:isolate;display:flex;width:100%;height:32px;align-items:center;gap:10px;border:0;border-radius:8px;padding:0 10px;background:transparent;color:var(--text-secondary);font:inherit;font-size:13px;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard)}.settings-command_navItem__e55oM>svg{flex:none;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}.settings-command_navItem__e55oM[aria-current]{color:var(--foreground)}.settings-command_navItem__e55oM[aria-current]>svg{color:var(--accent)}@media (hover:hover) and (pointer:fine){.settings-command_navItem__e55oM:hover,.settings-command_navItem__e55oM:hover>svg{color:var(--foreground)}}.settings-command_navHighlight__z9baK{position:absolute;z-index:-1;inset:0;border:1px solid var(--border);border-radius:inherit;background:var(--surface);box-shadow:var(--shadow-resting)}.settings-command_navLabel__7GZDe{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.settings-command_navDot__lamkP{flex:none;width:6px;height:6px;border-radius:var(--radius-pill);background:var(--accent)}.settings-command_main__P8u1C{position:relative;min-width:0;min-height:0}.settings-command_scroller___OoN6{position:relative;height:100%;overflow-y:auto;overscroll-behavior:contain;padding:8px 32px 120px;scrollbar-width:thin;scrollbar-color:var(--border-strong) transparent}.settings-command_section__JKciQ{max-width:620px;padding-top:20px}.settings-command_section__JKciQ+.settings-command_section__JKciQ{margin-top:20px}.settings-command_sectionHead__OgK7T{margin-bottom:4px}.settings-command_sectionHead__OgK7T h3{margin:0;font-size:var(--text-sm);font-weight:500;letter-spacing:-.01em;line-height:1.4}.settings-command_sectionHead__OgK7T p{margin:2px 0 0;color:var(--text-muted);font-size:13px;line-height:var(--leading-body)}.settings-command_rows___zbpe>*+*{border-top:1px solid var(--border-subtle)}.settings-command_row__qB9C1{position:relative;isolation:isolate;display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:8px 24px;min-height:60px;padding:12px 0}.settings-command_rowWide__cOu7X{grid-template-columns:minmax(0,1fr) minmax(0,240px)}.settings-command_rowText__1_OWn{min-width:0}.settings-command_rowLabel__NNBk3{display:flex;align-items:center;gap:8px}.settings-command_rowLabel__NNBk3 label{font-size:13px;font-weight:500;line-height:20px}.settings-command_rowText__1_OWn p{margin:1px 0 0;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}.settings-command_rowText__1_OWn .settings-command_error__HqcR2{overflow:hidden;margin:0;padding-top:4px;color:var(--danger)}.settings-command_rowControl__2XuX7{display:flex;min-width:0;justify-content:flex-end}.settings-command_dirty__8MpF2{flex:none;width:6px;height:6px;border-radius:var(--radius-pill);background:var(--accent)}.settings-command_row__qB9C1:before{content:\"\";position:absolute;z-index:-1;inset:0 -12px;border-radius:10px;background:var(--accent-subtle);opacity:0;pointer-events:none}.settings-command_pulseA__GT4oH:before{animation:settings-command_settings-command-pulse-a__6_KX5 1.6s var(--ease-in-out) both}.settings-command_pulseB___Yntb:before{animation:settings-command_settings-command-pulse-b__mNDqT 1.6s var(--ease-in-out) both}@keyframes settings-command_settings-command-pulse-a__6_KX5{0%{opacity:0}18%{opacity:1}46%{opacity:.35}66%{opacity:.8}to{opacity:0}}@keyframes settings-command_settings-command-pulse-b__mNDqT{0%{opacity:0}18%{opacity:1}46%{opacity:.35}66%{opacity:.8}to{opacity:0}}.settings-command_segmented__ym2L6{--control-height-sm:26px;--radius-control:10px;--text-sm:13px;max-width:100%;overflow-x:auto;scrollbar-width:none}.settings-command_select__l_DxV{display:inline-flex;width:220px;max-width:100%;min-width:132px}.settings-command_select__l_DxV>div{width:100%;gap:0}.settings-command_select__l_DxV label{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}.settings-command_select__l_DxV .settings-command_selectTrigger__vvHLn{height:32px;min-height:32px;gap:var(--space-2);padding:0 10px;border-radius:9px;font-size:13px}.settings-command_text__LS8Xn{display:flex;width:100%;height:32px;min-width:0;align-items:center;overflow:hidden;border:1px solid var(--border);border-radius:9px;background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard)}.settings-command_text__LS8Xn:focus-within{border-color:color-mix(in oklab,var(--accent) 55%,var(--border))}.settings-command_text__LS8Xn[data-invalid]{border-color:color-mix(in oklab,var(--danger) 55%,var(--border))}.settings-command_prefix__Dmlnv{flex:none;padding-left:10px;color:var(--text-muted);font-size:13px}.settings-command_text__LS8Xn input{width:100%;min-width:0;height:100%;border:0;padding:0 10px;background:transparent;color:var(--foreground);font:inherit;font-size:13px}.settings-command_prefix__Dmlnv+input{padding-left:1px}.settings-command_text__LS8Xn input::placeholder{color:var(--text-muted)}.settings-command_scrim__PXWtn{position:absolute;z-index:14;inset:0;background:color-mix(in oklab,var(--background) 55%,transparent)}.settings-command_palette__Eic_C{position:absolute;z-index:15;top:0;left:0;overflow:hidden;border:1px solid var(--border);background:var(--surface-raised);box-shadow:var(--shadow-floating);will-change:transform}.settings-command_paletteContent__uK0tr{max-width:none}.settings-command_paletteField__7Q_8k{display:flex;height:46px;align-items:center;gap:10px;border-bottom:1px solid var(--border-subtle);padding:0 12px 0 13px;color:var(--text-muted)}.settings-command_paletteField__7Q_8k>svg{flex:none}.settings-command_paletteField__7Q_8k input{flex:1;min-width:0;height:100%;border:0;padding:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm)}.settings-command_paletteField__7Q_8k input::placeholder{color:var(--text-muted)}.settings-command_paletteBody__0qNIM{padding:6px}.settings-command_paletteHint__Kte1o{margin:4px 8px 6px;color:var(--text-muted);font-size:var(--text-xs)}.settings-command_results__gKceT{position:relative;max-height:316px;margin:0;padding:0;overflow-y:auto;list-style:none;scrollbar-width:thin}.settings-command_result__cngzS{position:relative;isolation:isolate;display:grid;grid-template-columns:16px minmax(0,1fr) 16px;align-items:center;gap:12px;min-height:52px;border-radius:9px;padding:7px 10px;color:var(--text-secondary);cursor:pointer;-webkit-tap-highlight-color:transparent}.settings-command_result__cngzS>svg{color:var(--text-muted)}.settings-command_result__cngzS[aria-selected=true]{color:var(--foreground)}.settings-command_result__cngzS[aria-selected=true] .settings-command_resultEnd___hYz5,.settings-command_result__cngzS[aria-selected=true]>svg{color:var(--accent)}.settings-command_resultHighlight__nBrls{position:absolute;z-index:-1;inset:0;border-radius:inherit;background:color-mix(in oklab,var(--accent) 9%,var(--surface-raised))}.settings-command_resultText__pLQMe{display:grid;min-width:0;gap:1px}.settings-command_resultLabel__dleyb{overflow:hidden;color:var(--foreground);font-size:13px;font-weight:500;text-overflow:ellipsis;white-space:nowrap}.settings-command_resultDescription__648Ot{overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap}.settings-command_resultEnd___hYz5{display:grid;place-items:center;color:var(--text-muted)}.settings-command_mark__MIN9L{border-radius:3px;background:var(--accent-subtle);color:var(--accent-strong);box-shadow:0 0 0 1px var(--accent-subtle)}.settings-command_empty__bmv8d{margin:0;padding:28px 12px;color:var(--text-muted);font-size:13px;text-align:center}.settings-command_paletteFoot__1_V1T{display:flex;gap:16px;margin-top:6px;border-top:1px solid var(--border-subtle);padding:8px 8px 2px;color:var(--text-muted);font-size:var(--text-xs)}.settings-command_paletteFoot__1_V1T>span{display:inline-flex;align-items:center;gap:4px}.settings-command_dock__b24oU{position:absolute;z-index:5;right:0;bottom:18px;left:0;display:flex;justify-content:center;padding-inline:16px;pointer-events:none}.settings-command_bar__uFh71{display:flex;max-width:100%;align-items:center;justify-content:center;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface-raised);box-shadow:var(--shadow-floating);pointer-events:auto}.settings-command_barContent__Jlqho{position:relative;display:grid;flex:none;align-items:center;justify-items:center}.settings-command_barContent__Jlqho>*{grid-area:1/1}.settings-command_barEdit__g8Zqg{display:flex;align-items:center;gap:2px;padding:4px 4px 4px 16px;white-space:nowrap}.settings-command_barCount__uOhHA{display:inline-flex;align-items:baseline;margin-right:10px;font-size:13px;font-weight:500;font-variant-numeric:tabular-nums}.settings-command_barFailed__jND28{color:var(--danger)}.settings-command_barSaved__sWeQ9{display:flex;height:40px;align-items:center;gap:8px;padding:0 16px 0 14px;font-size:13px;font-weight:500;white-space:nowrap}.settings-command_barSaved__sWeQ9 svg{flex:none;color:var(--success)}.settings-command_inherit__0rCS9>span{color:inherit;font:inherit;letter-spacing:inherit}.settings-command_srOnly__RoYfq{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@media (prefers-reduced-motion:reduce){.settings-command_pulseA__GT4oH:before,.settings-command_pulseB___Yntb:before{animation-duration:.9s;animation-name:settings-command_settings-command-pulse-reduced__FF4yx}}@media (prefers-reduced-motion:reduce){.settings-command_navItem__e55oM,.settings-command_navItem__e55oM>svg,.settings-command_trigger__O8CCc{transition:none}}@keyframes settings-command_settings-command-pulse-reduced__FF4yx{0%{opacity:0}25%{opacity:.8}to{opacity:0}}", {"root":"settings-command_root__iRtuM","frame":"settings-command_frame__rjLMP","header":"settings-command_header__0plr8","triggerSlot":"settings-command_triggerSlot__RFvHI","trigger":"settings-command_trigger__O8CCc","kbd":"settings-command_kbd__DcVjp","nav":"settings-command_nav__aUeDu","navItem":"settings-command_navItem__e55oM","navHighlight":"settings-command_navHighlight__z9baK","navLabel":"settings-command_navLabel__7GZDe","navDot":"settings-command_navDot__lamkP","main":"settings-command_main__P8u1C","scroller":"settings-command_scroller___OoN6","section":"settings-command_section__JKciQ","sectionHead":"settings-command_sectionHead__OgK7T","rows":"settings-command_rows___zbpe","row":"settings-command_row__qB9C1","rowWide":"settings-command_rowWide__cOu7X","rowText":"settings-command_rowText__1_OWn","rowLabel":"settings-command_rowLabel__NNBk3","error":"settings-command_error__HqcR2","rowControl":"settings-command_rowControl__2XuX7","dirty":"settings-command_dirty__8MpF2","pulseA":"settings-command_pulseA__GT4oH","settings-command-pulse-a":"settings-command_settings-command-pulse-a__6_KX5","pulseB":"settings-command_pulseB___Yntb","settings-command-pulse-b":"settings-command_settings-command-pulse-b__mNDqT","segmented":"settings-command_segmented__ym2L6","select":"settings-command_select__l_DxV","selectTrigger":"settings-command_selectTrigger__vvHLn","text":"settings-command_text__LS8Xn","prefix":"settings-command_prefix__Dmlnv","scrim":"settings-command_scrim__PXWtn","palette":"settings-command_palette__Eic_C","paletteContent":"settings-command_paletteContent__uK0tr","paletteField":"settings-command_paletteField__7Q_8k","paletteBody":"settings-command_paletteBody__0qNIM","paletteHint":"settings-command_paletteHint__Kte1o","results":"settings-command_results__gKceT","result":"settings-command_result__cngzS","resultEnd":"settings-command_resultEnd___hYz5","resultHighlight":"settings-command_resultHighlight__nBrls","resultText":"settings-command_resultText__pLQMe","resultLabel":"settings-command_resultLabel__dleyb","resultDescription":"settings-command_resultDescription__648Ot","mark":"settings-command_mark__MIN9L","empty":"settings-command_empty__bmv8d","paletteFoot":"settings-command_paletteFoot__1_V1T","dock":"settings-command_dock__b24oU","bar":"settings-command_bar__uFh71","barContent":"settings-command_barContent__Jlqho","barEdit":"settings-command_barEdit__g8Zqg","barCount":"settings-command_barCount__uOhHA","barFailed":"settings-command_barFailed__jND28","barSaved":"settings-command_barSaved__sWeQ9","inherit":"settings-command_inherit__0rCS9","srOnly":"settings-command_srOnly__RoYfq","long":"settings-command_long__K8pUv","settings-command-pulse-reduced":"settings-command_settings-command-pulse-reduced__FF4yx"});
A.regCss(64444, ".frame,.frame.frame{position:relative;display:inline-block;box-sizing:content-box;padding:.5em .5em .5em .2em;margin:-.5em -.5em -.5em -.2em;text-align:start;white-space:nowrap;mask-image:linear-gradient(90deg,#000 calc(100% - .5em),transparent)}\n.track{position:relative;display:inline-block;white-space:nowrap}\n.glyph{display:inline-block;white-space:pre;transform-origin:50% 60%}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0;user-select:none}", {});
A.reg(71019, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let a = {
    name: "credit-card",
    size: 24,
    node: [
      [
        "rect",
        { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }
      ],
      ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
      ["path", { d: "M6 14h2", key: "mk7k0u" }]
    ]
  };
  a.node;
  let i = (0, r.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(73051, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, {
    UC: () => J,
    In: () => q,
    q7: () => ev,
    VF: () => ew,
    p4: () => eg,
    ZL: () => Y,
    bL: () => G,
    wn: () => eb,
    PP: () => eS,
    l9: () => W,
    WT: () => z,
    LM: () => eu
  });
  var r = n(12115), o = n(47650);
  function l(e2, [t2, n2]) {
    return Math.min(n2, Math.max(t2, e2));
  }
  (0, Object.defineProperty)(l, "name", { value: "clamp", configurable: true });
  var i = n(70379), a = n(76094), s = n(47527), u = n(68599), c = n(1933), d = n(19416), p = n(32007), f = n(69885), h = n(89971), v = n(80878), m = n(19040), g = n(83935), w = n(55897), x = n(42442), S = n(17347), y = n(59322), b = n(66294);
  function C(e2) {
    let t2 = r.useRef({ value: e2, previous: e2 });
    return r.useMemo(
      () => (t2.current.value !== e2 && (t2.current.previous = t2.current.value, t2.current.value = e2), t2.current.previous),
      [e2]
    );
  }
  (0, Object.defineProperty)(C, "name", {
    value: "usePrevious",
    configurable: true
  });
  var j = n(40562), P = n(22954), T = n(5174), k = n(95155), I = Object.defineProperty, E = (e2, t2) => I(e2, "name", { value: t2, configurable: true }), R = [" ", "Enter", "ArrowUp", "ArrowDown"], M = [" ", "Enter"], D = "Select", [L, K, B] = (0, a.N)(D), [_, H] = (0, u.A)(D, [B, v.Bk]), N = (0, v.Bk)(), [A, O] = _(D), [V, F] = _(D);
  function U(e2) {
    let {
      __scopeSelect: t2,
      children: n2,
      open: o2,
      defaultOpen: l2,
      onOpenChange: i2,
      value: a2,
      defaultValue: s2,
      onValueChange: u2,
      dir: d2,
      name: p2,
      autoComplete: f2,
      disabled: m2,
      required: g2,
      form: w2,
      internal_do_not_use_render: x2
    } = e2, S2 = N(t2), [b2, C2] = r.useState(null), [j2, P2] = r.useState(null), [T2, I2] = r.useState(false), R2 = (0, c.jH)(d2), [M2, K2] = (0, y.i)({
      prop: o2,
      defaultProp: l2 ?? false,
      onChange: i2,
      caller: D
    }), [B2, _2] = (0, y.i)({ prop: a2, defaultProp: s2, onChange: u2, caller: D }), H2 = r.useRef(null), O2 = r.useRef(B2);
    r.useEffect(() => {
      let e3 = w2 ? b2?.ownerDocument.getElementById(w2) : b2?.form;
      if (e3 instanceof HTMLFormElement) {
        let t3 = E(() => _2(O2.current), "reset");
        return e3.addEventListener("reset", t3), () => e3.removeEventListener("reset", t3);
      }
    }, [w2, b2, _2]);
    let F2 = !b2 || !!w2 || !!b2.closest("form"), [U2, G2] = r.useState(/* @__PURE__ */ new Set()), W2 = (0, h.B)(), z2 = Array.from(U2).map((e3) => e3.props.value).join(";"), q2 = r.useCallback((e3) => {
      G2((t3) => new Set(t3).add(e3));
    }, []), Z2 = r.useCallback((e3) => {
      G2((t3) => {
        let n3 = new Set(t3);
        return n3.delete(e3), n3;
      });
    }, []), X2 = {
      required: g2,
      trigger: b2,
      onTriggerChange: C2,
      valueNode: j2,
      onValueNodeChange: P2,
      valueNodeHasChildren: T2,
      onValueNodeHasChildrenChange: I2,
      contentId: W2,
      value: B2,
      onValueChange: _2,
      open: M2,
      onOpenChange: K2,
      dir: R2,
      triggerPointerDownPosRef: H2,
      disabled: m2,
      name: p2,
      autoComplete: f2,
      form: w2,
      nativeOptions: U2,
      nativeSelectKey: z2,
      isFormControl: F2
    };
    return (0, k.jsx)(v.bL, {
      ...S2,
      children: (0, k.jsx)(A, {
        scope: t2,
        ...X2,
        children: (0, k.jsx)(L.Provider, {
          scope: t2,
          children: (0, k.jsx)(V, {
            scope: t2,
            onNativeOptionAdd: q2,
            onNativeOptionRemove: Z2,
            children: eP(x2) ? x2(X2) : n2
          })
        })
      })
    });
  }
  E(U, "SelectProvider");
  var G = E((e2) => {
    let { __scopeSelect: t2, children: n2, ...r2 } = e2;
    return (0, k.jsx)(U, {
      __scopeSelect: t2,
      ...r2,
      internal_do_not_use_render: ({ isFormControl: e3 }) => (0, k.jsxs)(k.Fragment, {
        children: [n2, e3 ? (0, k.jsx)(ej, { __scopeSelect: t2 }) : null]
      })
    });
  }, "Select"), W = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, disabled: o2 = false, ...l2 } = e2, a2 = N(n2), u2 = O("SelectTrigger", n2), c2 = u2.disabled || o2, d2 = (0, s.s)(t2, u2.onTriggerChange), p2 = K(n2), f2 = r.useRef("touch"), [h2, m2, g2] = ek((e3) => {
        let t3 = p2().filter((e4) => !e4.disabled), n3 = t3.find((e4) => e4.value === u2.value), r2 = eI(t3, e3, n3);
        void 0 !== r2 && u2.onValueChange(r2.value);
      }), x2 = E((e3) => {
        c2 || (u2.onOpenChange(true), g2()), e3 && (u2.triggerPointerDownPosRef.current = {
          x: Math.round(e3.pageX),
          y: Math.round(e3.pageY)
        });
      }, "handleOpen");
      return (0, k.jsx)(v.Mz, {
        asChild: true,
        ...a2,
        children: (0, k.jsx)(w.sG.button, {
          type: "button",
          role: "combobox",
          "aria-controls": u2.open ? u2.contentId : void 0,
          "aria-expanded": u2.open,
          "aria-required": u2.required,
          "aria-autocomplete": "none",
          dir: u2.dir,
          "data-state": u2.open ? "open" : "closed",
          disabled: c2,
          "data-disabled": c2 ? "" : void 0,
          "data-placeholder": eT(u2.value) ? "" : void 0,
          ...l2,
          ref: d2,
          onClick: (0, i.mK)(l2.onClick, (e3) => {
            e3.currentTarget.focus(), "mouse" !== f2.current && x2(e3);
          }),
          onPointerDown: (0, i.mK)(l2.onPointerDown, (e3) => {
            f2.current = e3.pointerType;
            let t3 = e3.target;
            t3.hasPointerCapture(e3.pointerId) && t3.releasePointerCapture(e3.pointerId), 0 === e3.button && false === e3.ctrlKey && "mouse" === e3.pointerType && (x2(e3), e3.preventDefault());
          }),
          onKeyDown: (0, i.mK)(l2.onKeyDown, (e3) => {
            let t3 = "" !== h2.current;
            e3.ctrlKey || e3.altKey || e3.metaKey || 1 !== e3.key.length || m2(e3.key), (!t3 || " " !== e3.key) && R.includes(e3.key) && (x2(), e3.preventDefault());
          })
        })
      });
    }, "SelectTrigger")
  ), z = r.forwardRef(
    E(function(e2, t2) {
      let {
        __scopeSelect: n2,
        className: o2,
        style: l2,
        children: i2,
        placeholder: a2 = "",
        ...u2
      } = e2, c2 = O("SelectValue", n2), { onValueNodeHasChildrenChange: d2 } = c2, p2 = void 0 !== i2, f2 = (0, s.s)(t2, c2.onValueNodeChange);
      (0, b.N)(() => {
        d2(p2);
      }, [d2, p2]);
      let h2 = eT(c2.value);
      return (0, k.jsx)(w.sG.span, {
        ...u2,
        asChild: !h2 && u2.asChild,
        ref: f2,
        style: { pointerEvents: "none" },
        children: (0, k.jsx)(
          r.Fragment,
          { children: h2 ? a2 : i2 },
          h2 ? "placeholder" : "value"
        )
      });
    }, "SelectValue")
  ), q = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, children: r2, ...o2 } = e2;
      return (0, k.jsx)(w.sG.span, {
        "aria-hidden": true,
        ...o2,
        ref: t2,
        children: r2 || "\u25BC"
      });
    }, "SelectIcon")
  ), [Z, X] = _("SelectPortal", { forceMount: void 0 }), Y = E((e2) => {
    let { __scopeSelect: t2, forceMount: n2, ...r2 } = e2;
    return (0, k.jsx)(Z, {
      scope: e2.__scopeSelect,
      forceMount: n2,
      children: (0, k.jsx)(m.Z, { asChild: true, ...r2 })
    });
  }, "SelectPortal"), Q = "SelectContent", J = r.forwardRef(
    E(function(e2, t2) {
      let n2 = X(Q, e2.__scopeSelect), { forceMount: o2 = n2.forceMount, ...l2 } = e2, i2 = O(Q, e2.__scopeSelect), [a2, s2] = r.useState();
      return (0, b.N)(() => {
        s2(new DocumentFragment());
      }, []), (0, k.jsx)(g.C, {
        present: o2 || i2.open,
        children: ({ present: e3 }) => e3 ? (0, k.jsx)(er, { ...l2, ref: t2 }) : (0, k.jsx)($, { ...l2, fragment: a2 })
      });
    }, "SelectContent")
  ), $ = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, children: r2, fragment: l2 } = e2;
      return l2 ? o.createPortal(
        (0, k.jsx)(ee, {
          scope: n2,
          children: (0, k.jsx)(L.Slot, {
            scope: n2,
            children: (0, k.jsx)("div", { ref: t2, children: r2 })
          })
        }),
        l2
      ) : null;
    }, "SelectContentFragment")
  ), [ee, et] = _(Q), en = (0, x.TL)("SelectContent.RemoveScroll"), er = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2 } = e2, {
        position: o2 = "item-aligned",
        onCloseAutoFocus: l2,
        onEscapeKeyDown: a2,
        onPointerDownOutside: u2,
        side: c2,
        sideOffset: h2,
        align: v2,
        alignOffset: m2,
        arrowPadding: g2,
        collisionBoundary: w2,
        collisionPadding: x2,
        sticky: S2,
        hideWhenDetached: y2,
        avoidCollisions: b2,
        ...C2
      } = e2, j2 = O(Q, n2), [I2, R2] = r.useState(null), [M2, D2] = r.useState(null), L2 = (0, s.s)(t2, R2), [B2, _2] = r.useState(null), [H2, N2] = r.useState(null), A2 = K(n2), [V2, F2] = r.useState(false), U2 = r.useRef(false);
      r.useEffect(() => {
        if (I2) return (0, P.Eq)(I2);
      }, [I2]), (0, p.Oh)();
      let G2 = r.useCallback(
        (e3) => {
          let [t3, ...n3] = A2().map((e4) => e4.ref.current), [r2] = n3.slice(-1), o3 = document.activeElement;
          for (let n4 of e3)
            if (n4 === o3 || (n4?.scrollIntoView({ block: "nearest" }), n4 === t3 && M2 && (M2.scrollTop = 0), n4 === r2 && M2 && (M2.scrollTop = M2.scrollHeight), n4?.focus(), document.activeElement !== o3))
              return;
        },
        [A2, M2]
      ), W2 = r.useCallback(() => G2([B2, I2]), [G2, B2, I2]);
      r.useEffect(() => {
        V2 && W2();
      }, [V2, W2]);
      let { onOpenChange: z2, triggerPointerDownPosRef: q2 } = j2;
      r.useEffect(() => {
        if (I2) {
          let e3 = { x: 0, y: 0 }, t3 = E((t4) => {
            e3 = {
              x: Math.abs(Math.round(t4.pageX) - (q2.current?.x ?? 0)),
              y: Math.abs(Math.round(t4.pageY) - (q2.current?.y ?? 0))
            };
          }, "handlePointerMove"), n3 = E((n4) => {
            e3.x <= 10 && e3.y <= 10 ? n4.preventDefault() : n4.composedPath().includes(I2) || z2(false), document.removeEventListener("pointermove", t3), q2.current = null;
          }, "handlePointerUp");
          return null !== q2.current && (document.addEventListener("pointermove", t3), document.addEventListener("pointerup", n3, {
            capture: true,
            once: true
          })), () => {
            document.removeEventListener("pointermove", t3), document.removeEventListener("pointerup", n3, {
              capture: true
            });
          };
        }
      }, [I2, z2, q2]), r.useEffect(() => {
        let e3 = E(() => z2(false), "close");
        return window.addEventListener("blur", e3), window.addEventListener("resize", e3), () => {
          window.removeEventListener("blur", e3), window.removeEventListener("resize", e3);
        };
      }, [z2]);
      let [Z2, X2] = ek((e3) => {
        let t3 = A2().filter((e4) => !e4.disabled), n3 = t3.find((e4) => e4.ref.current === document.activeElement), r2 = eI(t3, e3, n3);
        r2 && setTimeout(() => r2.ref.current?.focus());
      }), Y2 = r.useCallback(
        (e3, t3, n3) => {
          let r2 = !U2.current && !n3;
          (void 0 !== j2.value && j2.value === t3 || r2) && (_2(e3), r2 && (U2.current = true));
        },
        [j2.value]
      ), J2 = r.useCallback(() => I2?.focus(), [I2]), $2 = r.useCallback(
        (e3, t3, n3) => {
          let r2 = !U2.current && !n3;
          (void 0 !== j2.value && j2.value === t3 || r2) && N2(e3);
        },
        [j2.value]
      ), et2 = "popper" === o2 ? el : eo;
      return (0, k.jsx)(ee, {
        scope: n2,
        content: I2,
        viewport: M2,
        onViewportChange: D2,
        itemRefCallback: Y2,
        selectedItem: B2,
        onItemLeave: J2,
        itemTextRefCallback: $2,
        focusSelectedItem: W2,
        selectedItemText: H2,
        position: o2,
        isPositioned: V2,
        searchRef: Z2,
        children: (0, k.jsx)(T.A, {
          as: en,
          allowPinchZoom: true,
          children: (0, k.jsx)(f.n, {
            asChild: true,
            trapped: j2.open,
            onMountAutoFocus: (e3) => {
              e3.preventDefault();
            },
            onUnmountAutoFocus: (0, i.mK)(l2, (e3) => {
              j2.trigger?.focus({ preventScroll: true }), e3.preventDefault();
            }),
            children: (0, k.jsx)(d.qW, {
              asChild: true,
              disableOutsidePointerEvents: true,
              onEscapeKeyDown: a2,
              onPointerDownOutside: u2,
              onFocusOutside: (e3) => e3.preventDefault(),
              onDismiss: () => j2.onOpenChange(false),
              children: (0, k.jsx)(et2, {
                role: "listbox",
                id: j2.contentId,
                "data-state": j2.open ? "open" : "closed",
                dir: j2.dir,
                onContextMenu: (e3) => e3.preventDefault(),
                ...C2,
                ...et2 === el ? {
                  side: c2,
                  sideOffset: h2,
                  align: v2,
                  alignOffset: m2,
                  arrowPadding: g2,
                  collisionBoundary: w2,
                  collisionPadding: x2,
                  sticky: S2,
                  hideWhenDetached: y2,
                  avoidCollisions: b2
                } : {},
                onPlaced: () => F2(true),
                ref: L2,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  outline: "none",
                  ...C2.style
                },
                onKeyDown: (0, i.mK)(C2.onKeyDown, (e3) => {
                  let t3 = e3.ctrlKey || e3.altKey || e3.metaKey;
                  if ("Tab" === e3.key && e3.preventDefault(), t3 || 1 !== e3.key.length || X2(e3.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e3.key)) {
                    let t4 = A2().filter((e4) => !e4.disabled).map((e4) => e4.ref.current);
                    if (["ArrowUp", "End"].includes(e3.key) && (t4 = t4.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e3.key)) {
                      let n3 = e3.target, r2 = t4.indexOf(n3);
                      t4 = t4.slice(r2 + 1);
                    }
                    setTimeout(() => G2(t4)), e3.preventDefault();
                  }
                })
              })
            })
          })
        })
      });
    }, "SelectContentImpl")
  ), eo = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, onPlaced: o2, ...i2 } = e2, a2 = O(Q, n2), u2 = et(Q, n2), [c2, d2] = r.useState(null), [p2, f2] = r.useState(null), h2 = (0, s.s)(t2, f2), v2 = K(n2), m2 = r.useRef(false), g2 = r.useRef(true), {
        viewport: x2,
        selectedItem: S2,
        selectedItemText: y2,
        focusSelectedItem: C2
      } = u2, j2 = r.useCallback(() => {
        if (a2.trigger && a2.valueNode && c2 && p2 && x2 && S2 && y2) {
          let e3 = a2.trigger.getBoundingClientRect(), t3 = p2.getBoundingClientRect(), n3 = a2.valueNode.getBoundingClientRect(), r2 = y2.getBoundingClientRect();
          if ("rtl" !== a2.dir) {
            let o3 = r2.left - t3.left, i4 = n3.left - o3, a3 = e3.left - i4, s3 = e3.width + a3, u4 = Math.max(s3, t3.width), d4 = l(i4, [10, Math.max(10, window.innerWidth - 10 - u4)]);
            c2.style.minWidth = s3 + "px", c2.style.left = d4 + "px";
          } else {
            let o3 = t3.right - r2.right, i4 = window.innerWidth - n3.right - o3, a3 = window.innerWidth - e3.right - i4, s3 = e3.width + a3, u4 = Math.max(s3, t3.width), d4 = l(i4, [10, Math.max(10, window.innerWidth - 10 - u4)]);
            c2.style.minWidth = s3 + "px", c2.style.right = d4 + "px";
          }
          let i3 = v2(), s2 = window.innerHeight - 20, u3 = x2.scrollHeight, d3 = window.getComputedStyle(p2), f3 = parseInt(d3.borderTopWidth, 10), h3 = parseInt(d3.paddingTop, 10), g3 = parseInt(d3.borderBottomWidth, 10), w2 = f3 + h3 + u3 + parseInt(d3.paddingBottom, 10) + g3, b2 = Math.min(5 * S2.offsetHeight, w2), C3 = window.getComputedStyle(x2), j3 = parseInt(C3.paddingTop, 10), P3 = parseInt(C3.paddingBottom, 10), T3 = e3.top + e3.height / 2 - 10, k2 = S2.offsetHeight / 2, I3 = f3 + h3 + (S2.offsetTop + k2);
          if (I3 <= T3) {
            let e4 = i3.length > 0 && S2 === i3[i3.length - 1].ref.current;
            c2.style.bottom = "0px";
            let t4 = Math.max(
              s2 - T3,
              k2 + (e4 ? P3 : 0) + (p2.clientHeight - x2.offsetTop - x2.offsetHeight) + g3
            );
            c2.style.height = I3 + t4 + "px";
          } else {
            let e4 = i3.length > 0 && S2 === i3[0].ref.current;
            c2.style.top = "0px";
            let t4 = Math.max(T3, f3 + x2.offsetTop + (e4 ? j3 : 0) + k2);
            c2.style.height = t4 + (w2 - I3) + "px", x2.scrollTop = I3 - T3 + x2.offsetTop;
          }
          c2.style.margin = "10px 0", c2.style.minHeight = b2 + "px", c2.style.maxHeight = s2 + "px", o2?.(), requestAnimationFrame(() => m2.current = true);
        }
      }, [v2, a2.trigger, a2.valueNode, c2, p2, x2, S2, y2, a2.dir, o2]);
      (0, b.N)(() => j2(), [j2]);
      let [P2, T2] = r.useState();
      (0, b.N)(() => {
        p2 && T2(window.getComputedStyle(p2).zIndex);
      }, [p2]);
      let I2 = r.useCallback(
        (e3) => {
          e3 && true === g2.current && (j2(), C2?.(), g2.current = false);
        },
        [j2, C2]
      );
      return (0, k.jsx)(ei, {
        scope: n2,
        contentWrapper: c2,
        shouldExpandOnScrollRef: m2,
        onScrollButtonChange: I2,
        children: (0, k.jsx)("div", {
          ref: d2,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: P2
          },
          children: (0, k.jsx)(w.sG.div, {
            ...i2,
            ref: h2,
            style: { boxSizing: "border-box", maxHeight: "100%", ...i2.style }
          })
        })
      });
    }, "SelectItemAlignedPosition")
  ), el = r.forwardRef(
    E(function(e2, t2) {
      let {
        __scopeSelect: n2,
        align: r2 = "start",
        collisionPadding: o2 = 10,
        ...l2
      } = e2, i2 = N(n2);
      return (0, k.jsx)(v.UC, {
        ...i2,
        ...l2,
        ref: t2,
        align: r2,
        collisionPadding: o2,
        style: {
          boxSizing: "border-box",
          ...l2.style,
          "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width": "var(--radix-popper-available-width)",
          "--radix-select-content-available-height": "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
        }
      });
    }, "SelectPopperPosition")
  ), [ei, ea] = _(Q, {}), es = "SelectViewport", eu = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, nonce: o2, ...l2 } = e2, a2 = et(es, n2), u2 = ea(es, n2), c2 = (0, s.s)(t2, a2.onViewportChange), d2 = r.useRef(0);
      return (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: o2
          }),
          (0, k.jsx)(L.Slot, {
            scope: n2,
            children: (0, k.jsx)(w.sG.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...l2,
              ref: c2,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...l2.style
              },
              onScroll: (0, i.mK)(l2.onScroll, (e3) => {
                let t3 = e3.currentTarget, { contentWrapper: n3, shouldExpandOnScrollRef: r2 } = u2;
                if (r2?.current && n3) {
                  let e4 = Math.abs(d2.current - t3.scrollTop);
                  if (e4 > 0) {
                    let r3 = window.innerHeight - 20, o3 = Math.max(
                      parseFloat(n3.style.minHeight),
                      parseFloat(n3.style.height)
                    );
                    if (o3 < r3) {
                      let l3 = o3 + e4, i2 = Math.min(r3, l3), a3 = l3 - i2;
                      n3.style.height = i2 + "px", "0px" === n3.style.bottom && (t3.scrollTop = a3 > 0 ? a3 : 0, n3.style.justifyContent = "flex-end");
                    }
                  }
                }
                d2.current = t3.scrollTop;
              })
            })
          })
        ]
      });
    }, "SelectViewport")
  ), [ec, ed] = _("SelectGroup"), ep = "SelectItem", [ef, eh] = _(ep), ev = r.forwardRef(
    E(function(e2, t2) {
      let {
        __scopeSelect: n2,
        value: o2,
        disabled: l2 = false,
        textValue: a2,
        ...u2
      } = e2, c2 = O(ep, n2), d2 = et(ep, n2), p2 = c2.value === o2, [f2, v2] = r.useState(a2 ?? ""), [m2, g2] = r.useState(false), x2 = (0, S.c)((e3) => d2.itemRefCallback?.(e3, o2, l2)), y2 = (0, s.s)(t2, x2), b2 = (0, h.B)(), C2 = r.useRef("touch"), j2 = E(() => {
        l2 || (c2.onValueChange(o2), c2.onOpenChange(false));
      }, "handleSelect");
      return (0, k.jsx)(ef, {
        scope: n2,
        value: o2,
        disabled: l2,
        textId: b2,
        isSelected: p2,
        onItemTextChange: r.useCallback((e3) => {
          v2((t3) => t3 || (e3?.textContent ?? "").trim());
        }, []),
        children: (0, k.jsx)(L.ItemSlot, {
          scope: n2,
          value: o2,
          disabled: l2,
          textValue: f2,
          children: (0, k.jsx)(w.sG.div, {
            role: "option",
            "aria-labelledby": b2,
            "data-highlighted": m2 ? "" : void 0,
            "aria-selected": p2 && m2,
            "data-state": p2 ? "checked" : "unchecked",
            "aria-disabled": l2 || void 0,
            "data-disabled": l2 ? "" : void 0,
            tabIndex: l2 ? void 0 : -1,
            ...u2,
            ref: y2,
            onFocus: (0, i.mK)(u2.onFocus, () => g2(true)),
            onBlur: (0, i.mK)(u2.onBlur, () => g2(false)),
            onClick: (0, i.mK)(u2.onClick, () => {
              "mouse" !== C2.current && j2();
            }),
            onPointerUp: (0, i.mK)(u2.onPointerUp, () => {
              "mouse" === C2.current && j2();
            }),
            onPointerDown: (0, i.mK)(u2.onPointerDown, (e3) => {
              C2.current = e3.pointerType;
            }),
            onPointerMove: (0, i.mK)(u2.onPointerMove, (e3) => {
              C2.current = e3.pointerType, l2 ? d2.onItemLeave?.() : "mouse" === C2.current && e3.currentTarget.focus({ preventScroll: true });
            }),
            onPointerLeave: (0, i.mK)(u2.onPointerLeave, (e3) => {
              e3.currentTarget === document.activeElement && d2.onItemLeave?.();
            }),
            onKeyDown: (0, i.mK)(u2.onKeyDown, (e3) => {
              l2 || e3.target !== e3.currentTarget || (d2.searchRef?.current === "" || " " !== e3.key) && (M.includes(e3.key) && j2(), " " === e3.key && e3.preventDefault());
            })
          })
        })
      });
    }, "SelectItem")
  ), em = "SelectItemText", eg = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, className: l2, style: i2, ...a2 } = e2, u2 = O(em, n2), c2 = et(em, n2), d2 = eh(em, n2), p2 = F(em, n2), [f2, h2] = r.useState(null), v2 = (0, S.c)((e3) => c2.itemTextRefCallback?.(e3, d2.value, d2.disabled)), m2 = (0, s.s)(t2, h2, d2.onItemTextChange, v2), g2 = f2?.textContent, x2 = r.useMemo(
        () => (0, k.jsx)(
          "option",
          { value: d2.value, disabled: d2.disabled, children: g2 },
          d2.value
        ),
        [d2.disabled, d2.value, g2]
      ), { onNativeOptionAdd: y2, onNativeOptionRemove: C2 } = p2;
      return (0, b.N)(() => (y2(x2), () => C2(x2)), [y2, C2, x2]), (0, k.jsxs)(k.Fragment, {
        children: [
          (0, k.jsx)(w.sG.span, { id: d2.textId, ...a2, ref: m2 }),
          d2.isSelected && u2.valueNode && !u2.valueNodeHasChildren && !eT(u2.value) ? o.createPortal(a2.children, u2.valueNode) : null
        ]
      });
    }, "SelectItemText")
  ), ew = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, ...r2 } = e2;
      return eh("SelectItemIndicator", n2).isSelected ? (0, k.jsx)(w.sG.span, { "aria-hidden": true, ...r2, ref: t2 }) : null;
    }, "SelectItemIndicator")
  ), ex = "SelectScrollUpButton", eS = r.forwardRef(
    E(function(e2, t2) {
      let n2 = et(ex, e2.__scopeSelect), o2 = ea(ex, e2.__scopeSelect), [l2, i2] = r.useState(false), a2 = (0, s.s)(t2, o2.onScrollButtonChange);
      return (0, b.N)(() => {
        if (n2.viewport && n2.isPositioned) {
          let e3 = function() {
            i2(t3.scrollTop > 0);
          };
          E(e3, "handleScroll");
          let t3 = n2.viewport;
          return e3(), t3.addEventListener("scroll", e3), () => t3.removeEventListener("scroll", e3);
        }
      }, [n2.viewport, n2.isPositioned]), l2 ? (0, k.jsx)(eC, {
        ...e2,
        ref: a2,
        onAutoScroll: () => {
          let { viewport: e3, selectedItem: t3 } = n2;
          e3 && t3 && (e3.scrollTop = e3.scrollTop - t3.offsetHeight);
        }
      }) : null;
    }, "SelectScrollUpButton")
  ), ey = "SelectScrollDownButton", eb = r.forwardRef(
    E(function(e2, t2) {
      let n2 = et(ey, e2.__scopeSelect), o2 = ea(ey, e2.__scopeSelect), [l2, i2] = r.useState(false), a2 = (0, s.s)(t2, o2.onScrollButtonChange);
      return (0, b.N)(() => {
        if (n2.viewport && n2.isPositioned) {
          let e3 = function() {
            let e4 = t3.scrollHeight - t3.clientHeight;
            i2(Math.ceil(t3.scrollTop) < e4);
          };
          E(e3, "handleScroll");
          let t3 = n2.viewport;
          return e3(), t3.addEventListener("scroll", e3), () => t3.removeEventListener("scroll", e3);
        }
      }, [n2.viewport, n2.isPositioned]), l2 ? (0, k.jsx)(eC, {
        ...e2,
        ref: a2,
        onAutoScroll: () => {
          let { viewport: e3, selectedItem: t3 } = n2;
          e3 && t3 && (e3.scrollTop = e3.scrollTop + t3.offsetHeight);
        }
      }) : null;
    }, "SelectScrollDownButton")
  ), eC = r.forwardRef(
    E(function(e2, t2) {
      let { __scopeSelect: n2, onAutoScroll: o2, ...l2 } = e2, a2 = et("SelectScrollButton", n2), s2 = r.useRef(null), u2 = K(n2), c2 = r.useCallback(() => {
        null !== s2.current && (window.clearInterval(s2.current), s2.current = null);
      }, []);
      return r.useEffect(() => () => c2(), [c2]), (0, b.N)(() => {
        let e3 = u2().find((e4) => e4.ref.current === document.activeElement);
        e3?.ref.current?.scrollIntoView({ block: "nearest" });
      }, [u2]), (0, k.jsx)(w.sG.div, {
        "aria-hidden": true,
        ...l2,
        ref: t2,
        style: { flexShrink: 0, ...l2.style },
        onPointerDown: (0, i.mK)(l2.onPointerDown, () => {
          null === s2.current && (s2.current = window.setInterval(o2, 50));
        }),
        onPointerMove: (0, i.mK)(l2.onPointerMove, () => {
          a2.onItemLeave?.(), null === s2.current && (s2.current = window.setInterval(o2, 50));
        }),
        onPointerLeave: (0, i.mK)(l2.onPointerLeave, () => {
          c2();
        })
      });
    }, "SelectScrollButtonImpl")
  ), ej = r.forwardRef(
    E(function({ __scopeSelect: e2, ...t2 }, n2) {
      let o2 = O("SelectBubbleInput", e2), {
        value: l2,
        onValueChange: i2,
        required: a2,
        disabled: u2,
        name: c2,
        autoComplete: d2,
        form: p2
      } = o2, { nativeOptions: f2, nativeSelectKey: h2 } = o2, v2 = r.useRef(null), m2 = (0, s.s)(n2, v2), g2 = l2 ?? "", x2 = C(g2), S2 = Array.from(f2).some((e3) => (e3.props.value ?? "") === "");
      return r.useEffect(() => {
        let e3 = v2.current;
        if (!e3) return;
        let t3 = Object.getOwnPropertyDescriptor(
          window.HTMLSelectElement.prototype,
          "value"
        ).set;
        if (x2 !== g2 && t3) {
          let n3 = new Event("change", { bubbles: true });
          t3.call(e3, g2), e3.dispatchEvent(n3);
        }
      }, [x2, g2]), (0, k.jsxs)(
        w.sG.select,
        {
          "aria-hidden": true,
          required: a2,
          tabIndex: -1,
          name: c2,
          autoComplete: d2,
          disabled: u2,
          form: p2,
          onChange: (e3) => i2(e3.target.value),
          ...t2,
          style: { ...j.Qg, ...t2.style },
          ref: m2,
          defaultValue: g2,
          children: [
            eT(l2) && !S2 ? (0, k.jsx)("option", { value: "" }) : null,
            Array.from(f2)
          ]
        },
        h2
      );
    }, "SelectBubbleInput")
  );
  function eP(e2) {
    return "function" == typeof e2;
  }
  function eT(e2) {
    return "" === e2 || void 0 === e2;
  }
  function ek(e2) {
    let t2 = (0, S.c)(e2), n2 = r.useRef(""), o2 = r.useRef(0), l2 = r.useCallback(
      (e3) => {
        t2(n2.current + e3);
      },
      [t2]
    ), i2 = r.useCallback(() => {
      n2.current = "", window.clearTimeout(o2.current);
    }, []);
    return r.useEffect(() => () => window.clearTimeout(o2.current), []), [n2, l2, i2];
  }
  function eI(e2, t2, n2) {
    let r2 = t2.length > 1 && Array.from(t2).every((e3) => e3 === t2[0]) ? t2[0] : t2, o2 = n2 ? e2.indexOf(n2) : -1, l2 = eE(e2, Math.max(o2, 0));
    1 === r2.length && (l2 = l2.filter((e3) => e3 !== n2));
    let i2 = l2.find(
      (e3) => e3.textValue.toLowerCase().startsWith(r2.toLowerCase())
    );
    return i2 !== n2 ? i2 : void 0;
  }
  function eE(e2, t2) {
    return e2.map((n2, r2) => e2[(t2 + r2) % e2.length]);
  }
  E(eP, "isFunction"), E(eT, "shouldShowPlaceholder"), E(ek, "useTypeaheadSearch"), E(eI, "findNextItem"), E(eE, "wrapArray");
}

__m(__module,__exports,__require);
});
A.reg(80846, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let o = {
    name: "sliders-horizontal",
    size: 24,
    node: [
      ["path", { d: "M10 5H3", key: "1qgfaw" }],
      ["path", { d: "M12 19H3", key: "yhmn1j" }],
      ["path", { d: "M14 3v4", key: "1sua03" }],
      ["path", { d: "M16 17v4", key: "1q0r14" }],
      ["path", { d: "M21 12h-9", key: "1o4lsq" }],
      ["path", { d: "M21 19h-5", key: "1rlt1p" }],
      ["path", { d: "M21 5h-7", key: "1oszz2" }],
      ["path", { d: "M8 10v4", key: "tgpxqk" }],
      ["path", { d: "M8 12H3", key: "a7s4jb" }]
    ]
  };
  o.node;
  let i = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(82016, function(__module,__exports,__require){
"use strict";
var __m=(e=>{e.exports={field:"select_field__6HUm4",trigger:"select_trigger__Gw0L9",valueText:"select_valueText__zg_oX",srOnly:"select_srOnly__RlNRP",chevron:"select_chevron__dL2_9",hint:"select_hint__5UCeN",content:"select_content__WtPtB","select-in":"select_select-in__Ra6uS","select-out":"select_select-out__lvI9W",viewport:"select_viewport__b3IkZ",item:"select_item__vx_F9",indicator:"select_indicator__4VhG0","indicator-in":"select_indicator-in__IatY1",scrollButton:"select_scrollButton__pH7Sy","select-fade":"select_select-fade__CoMTe","select-fade-out":"select_select-fade-out__ZTnwf"}});if(typeof __m==="function"){__m(__module,__exports,__require);}else{__module.exports=__m;}
});
A.reg(94088, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => i });
  var s = t(51811);
  let r = {
    name: "chevron-up",
    size: 24,
    node: [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]
  };
  r.node;
  let i = (0, s.A)(r);
}

__m(__module,__exports,__require);
});
A.reg(96220, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { l: () => f });
  var s = t(95155), r = t(12115), i = t(73051), n = t(18310), l = t(80642), o = t(25354), d = t(12363), p = t(94088), c = t(64577), m = t(7770), u = t(82016), h = t.n(u);
  let _ = {
    enter: (e2) => ({
      opacity: 0,
      y: `${0.35 * e2}em`,
      filter: `blur(${m.T.blur.soft}px)`
    }),
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: m.T.duration.standard,
        ease: [...m.T.ease.enter]
      }
    },
    exit: (e2) => ({
      opacity: 0,
      y: `${-0.3 * e2}em`,
      filter: `blur(${m.T.blur.subtle}px)`,
      transition: {
        duration: m.T.duration.fast,
        ease: [...m.T.ease.standard]
      }
    })
  }, x = {
    enter: { opacity: 0 },
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: m.T.duration.instant }
    },
    exit: { opacity: 0, transition: { duration: m.T.duration.instant } }
  }, f = (0, r.forwardRef)(function({
    label: e2,
    description: a2,
    placeholder: t2 = "Select an option",
    options: m2,
    id: u2,
    className: f2,
    disabled: y,
    onValueChange: j,
    ...b
  }, g) {
    let v = (0, r.useId)(), N = u2 ?? v, w = a2 ? `${N}-description` : void 0, k = (0, n.I)(), [S, T] = (0, r.useState)(b.defaultValue ?? ""), R = b.value ?? S, A = m2.findIndex((e3) => e3.value === R), z = R ? m2[A]?.label ?? "" : t2, [P, I] = (0, r.useState)(A), [M, C] = (0, r.useState)(1);
    return P !== A && (I(A), C(A > P ? 1 : -1)), (0, s.jsxs)("div", {
      className: h().field,
      children: [
        (0, s.jsx)("label", { htmlFor: N, children: e2 }),
        (0, s.jsxs)(i.bL, {
          ...b,
          disabled: y,
          onValueChange: (e3) => {
            T(e3), j?.(e3);
          },
          children: [
            (0, s.jsxs)(i.l9, {
              ref: g,
              id: N,
              "aria-describedby": w,
              className: [h().trigger, f2].filter(Boolean).join(" "),
              children: [
                (0, s.jsx)("span", {
                  className: h().srOnly,
                  children: (0, s.jsx)(i.WT, { placeholder: t2 })
                }),
                (0, s.jsx)("span", {
                  className: h().valueText,
                  "aria-hidden": "true",
                  children: (0, s.jsx)(l.N, {
                    initial: false,
                    custom: M,
                    children: (0, s.jsx)(
                      o.PY1.span,
                      {
                        "data-placeholder": R ? void 0 : "",
                        custom: M,
                        variants: k ? x : _,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        children: z
                      },
                      R ? `value-${R}` : "placeholder"
                    )
                  })
                }),
                (0, s.jsx)(i.In, {
                  className: h().chevron,
                  children: (0, s.jsx)(d.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                })
              ]
            }),
            (0, s.jsx)(i.ZL, {
              children: (0, s.jsxs)(i.UC, {
                className: h().content,
                position: "popper",
                sideOffset: 4,
                collisionPadding: 12,
                children: [
                  (0, s.jsx)(i.PP, {
                    className: h().scrollButton,
                    children: (0, s.jsx)(p.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  }),
                  (0, s.jsx)(i.LM, {
                    className: h().viewport,
                    children: m2.map(
                      (e3) => (0, s.jsxs)(
                        i.q7,
                        {
                          value: e3.value,
                          disabled: e3.disabled,
                          className: h().item,
                          children: [
                            (0, s.jsx)(i.p4, { children: e3.label }),
                            (0, s.jsx)(i.VF, {
                              className: h().indicator,
                              children: (0, s.jsx)(c.A, {
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
                  (0, s.jsx)(i.wn, {
                    className: h().scrollButton,
                    children: (0, s.jsx)(d.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  })
                ]
              })
            })
          ]
        }),
        a2 && (0, s.jsx)("span", { id: w, className: h().hint, children: a2 })
      ]
    });
  });
}

__m(__module,__exports,__require);
});
A.reg(98344, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { g: () => w });
  var s = a(95155), r = a(12115), i = a(18310), n = a(92171), o = a(80642), l = a(25354), d = a(7770), c = a(64444), u = a.n(c);
  let p = [...d.T.ease.enter], h = [...d.T.ease.standard], m = `blur(${d.T.blur.soft}px)`;
  function y(e2) {
    let t2 = /* @__PURE__ */ new Map();
    return Array.from(e2).map((e3) => {
      let a2 = t2.get(e3) ?? 0;
      return t2.set(e3, a2 + 1), { char: e3, key: `${e3}-${a2}` };
    });
  }
  let g = (e2) => parseFloat(getComputedStyle(e2).width);
  function w({ children: e2, as: t2 = "span", className: a2, id: c2 }) {
    let x = (0, i.I)(), f = (0, r.useRef)(null), _ = (0, r.useRef)(null), k = (0, r.useRef)(0), v = (0, r.useRef)(null), j = (0, r.useMemo)(() => y(e2), [e2]), [b, S] = (0, r.useState)({ current: e2, previous: e2 });
    b.current !== e2 && S({ current: e2, previous: b.current });
    let N = (0, r.useMemo)(
      () => new Set(y(b.previous).map((e3) => e3.key)),
      [b.previous]
    ), A = 0;
    return (0, r.useLayoutEffect)(() => {
      let e3 = f.current, t3 = _.current;
      if (!e3 || !t3) return;
      let a3 = g(t3);
      Number.isFinite(a3) && (k.current && Math.abs(a3 - k.current) > 0.5 && !x ? v.current = (0, n.i)(e3, { width: a3 }, d.T.spring.morph) : (v.current?.stop(), e3.style.width = `${a3}px`), k.current = a3);
    }, [e2, x]), (0, r.useEffect)(() => {
      let e3 = f.current, t3 = _.current;
      if (!e3 || !t3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(() => {
        let a4 = g(t3);
        !Number.isFinite(a4) || 0.5 > Math.abs(a4 - k.current) || (v.current?.stop(), e3.style.width = `${a4}px`, k.current = a4);
      });
      return a3.observe(t3), () => a3.disconnect();
    }, []), (0, s.jsxs)(t2, {
      id: c2,
      className: a2,
      children: [
        (0, s.jsx)("span", { className: u().srOnly, children: e2 }),
        (0, s.jsx)("span", {
          ref: f,
          className: u().frame,
          "aria-hidden": "true",
          children: (0, s.jsx)("span", {
            ref: _,
            className: u().track,
            children: (0, s.jsx)(o.N, {
              mode: "popLayout",
              initial: false,
              children: j.map(({ char: e3, key: t3 }) => {
                let a3 = N.has(t3) ? 0 : A++;
                return (0, s.jsx)(
                  l.PY1.span,
                  {
                    layout: "position",
                    className: u().glyph,
                    initial: !x && {
                      opacity: 0,
                      scale: 0.8,
                      y: "0.14em",
                      filter: m
                    },
                    animate: {
                      opacity: 1,
                      scale: 1,
                      y: "0em",
                      filter: "blur(0px)"
                    },
                    exit: x ? { opacity: 0, transition: { duration: 0 } } : {
                      opacity: 0,
                      scale: 0.86,
                      y: "-0.1em",
                      filter: m,
                      transition: {
                        duration: d.T.duration.exit,
                        ease: h
                      }
                    },
                    transition: x ? { duration: 0 } : {
                      layout: d.T.spring.morph,
                      default: {
                        duration: d.T.duration.standard + 0.04,
                        ease: p,
                        delay: 0.05 + Math.min(a3, 8) * d.T.stagger.char * 2
                      }
                    },
                    children: " " === e3 ? "\xA0" : e3
                  },
                  t3
                );
              })
            })
          })
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.cssFor("settings-command", [58320,64444]);
A.item("settings-command", {entry:25854, export:"SettingsCommand", kind:"block", tier:"pro", unresolved:[]});
})();