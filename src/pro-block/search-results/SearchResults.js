function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { SearchResults: () => eu, default: () => em });
  var s = a(95155), i = a(12115), n = a(5772), r = a(18310), o = a(25354), l = a(80642), d = a(57700), c = a(31458), h = a(62360), p = a(8117), u = a(36483), m = a(64577), g = a(51128), f = a(65377), w = a(9005), x = a(6923), y = a(21759), _ = a(80846), v = a(37058), b = a(7770), j = a(92218), k = a(67026), N = a(51288), $ = a(20530), C = a(72982), T = a(66828), A = a(66558), M = a(94274), S = a(67752);
  let L = [
    { id: "success", label: "Customer success" },
    { id: "design", label: "Design" },
    { id: "engineering", label: "Engineering" },
    { id: "growth", label: "Growth" },
    { id: "operations", label: "Operations" },
    { id: "finance", label: "Finance" }
  ], z = ["onboarding", "Lisbon offsite", "pricing page", "Marcus"], E = ["roadmap", "brand guidelines", "invoice template", "hiring plan"], B = (e2) => (0, S.MV)(e2), D = [
    {
      id: "doc-onboarding-playbook",
      kind: "doc",
      team: "success",
      title: "Customer onboarding playbook",
      path: "Customer success / Playbooks",
      snippet: "Every new enterprise account gets a named lead for the first 30 days. The onboarding call covers workspace setup, SSO, and the first import.",
      body: [
        "Every new enterprise account gets a named lead for the first 30 days. The onboarding call covers workspace setup, SSO, and the first import.",
        "By day 14 the account should have three active teams. If it does not, the lead books a second onboarding session and loops in solutions engineering.",
        "Close the onboarding phase with a short review: what the team shipped, where they got stuck, and who owns the account from here."
      ],
      author: "hannah-walsh",
      updated: "2026-09-22",
      readMinutes: 6
    },
    {
      id: "person-hannah",
      kind: "person",
      team: "success",
      person: "hannah-walsh",
      title: B("hannah-walsh").name,
      role: "Customer success lead",
      snippet: "Leads onboarding for enterprise accounts in Europe. Ask about SSO rollouts, data imports, and renewal health.",
      email: "hannah@northwind.co",
      location: "Dublin",
      owns: 42
    },
    {
      id: "file-onboarding-flow",
      kind: "file",
      team: "design",
      title: "Onboarding flow v3.fig",
      ext: "fig",
      size: "18.2 MB",
      snippet: "Frames: Welcome, Invite your team, Connect Slack, First project. The onboarding checklist moves into the sidebar.",
      owner: "emma-collins",
      updated: "2026-09-18"
    },
    {
      id: "doc-eng-onboarding",
      kind: "doc",
      team: "engineering",
      title: "Onboarding checklist for new engineers",
      path: "Engineering / Handbook",
      snippet: "Your first week: get repo access, run the app locally, ship a small fix, and pair with your onboarding buddy on a production deploy.",
      body: [
        "Your first week: get repo access, run the app locally, ship a small fix, and pair with your onboarding buddy on a production deploy.",
        "Week two is about context. Read the last three incident reviews and sit in on a planning session with your team.",
        "By the end of your first month you should own one small service end to end, including its alerts and runbook."
      ],
      author: "nathan-cole",
      updated: "2026-08-30",
      readMinutes: 4
    },
    {
      id: "file-onboarding-metrics",
      kind: "file",
      team: "growth",
      title: "Q3 onboarding metrics.xlsx",
      ext: "xlsx",
      size: "412 KB",
      snippet: "Activation rose from 41% to 48% after the new onboarding checklist. Time to first project fell to 2.3 days.",
      owner: "chloe-nguyen",
      updated: "2026-09-12"
    },
    {
      id: "person-chloe",
      kind: "person",
      team: "growth",
      person: "chloe-nguyen",
      title: B("chloe-nguyen").name,
      role: "Data analyst",
      snippet: "Owns the activation dashboards and the weekly onboarding funnel report. Happy to pull numbers for any experiment.",
      email: "chloe@northwind.co",
      location: "Toronto",
      owns: 27
    },
    {
      id: "file-welcome-kit",
      kind: "file",
      team: "operations",
      title: "Welcome kit for new hires.pdf",
      ext: "pdf",
      size: "3.1 MB",
      pages: 14,
      snippet: "Page 2: What to expect in your first week, from laptop setup to your onboarding lunch with the team.",
      owner: "sofia-ramirez",
      updated: "2026-06-04"
    },
    {
      id: "doc-onboarding-emails",
      kind: "doc",
      team: "growth",
      title: "Onboarding email sequence",
      path: "Growth / Lifecycle",
      snippet: "Five emails over 14 days. Each one points to a single next step, and the sequence stops as soon as the workspace is active.",
      body: [
        "Five emails over 14 days. Each one points to a single next step, and the sequence stops as soon as the workspace is active.",
        "Day 1 welcomes the admin and links to the import guide. Day 3 suggests inviting two teammates.",
        "We measure the onboarding sequence by activation, not by opens. Anything that does not move activation gets cut."
      ],
      author: "ava-mitchell",
      updated: "2026-07-19",
      readMinutes: 3
    },
    {
      id: "file-onboarding-walkthrough",
      kind: "file",
      team: "success",
      title: "Admin onboarding walkthrough.mp4",
      ext: "mp4",
      size: "248 MB",
      snippet: "A 12 minute recording of the admin console: roles, SSO, audit log, and billing. Used in every onboarding call.",
      owner: "jordan-reyes",
      updated: "2026-03-11"
    },
    {
      id: "doc-lisbon-agenda",
      kind: "doc",
      team: "operations",
      title: "Lisbon offsite agenda",
      path: "Operations / Events",
      snippet: "Three days in Lisbon, 14 to 16 October. Day one is planning, day two is team time, day three is a walk to Bel\xE9m and dinner.",
      body: [
        "Three days in Lisbon, 14 to 16 October. Day one is planning, day two is team time, day three is a walk to Bel\xE9m and dinner.",
        "Flights land on the 13th. We are staying in Chiado, ten minutes on foot from the venue.",
        "Please add dietary needs to the offsite sheet by 1 October."
      ],
      author: "sofia-ramirez",
      updated: "2026-09-20",
      readMinutes: 2
    },
    {
      id: "file-lisbon-rooftops",
      kind: "file",
      team: "operations",
      title: "Lisbon rooftops.jpg",
      ext: "jpg",
      size: "4.8 MB",
      photo: "lisbon-rooftops",
      snippet: "Venue scouting photo from the Lisbon offsite trip, taken from the Gra\xE7a viewpoint.",
      owner: "sofia-ramirez",
      updated: "2026-08-14"
    },
    {
      id: "file-lisbon-tram",
      kind: "file",
      team: "operations",
      title: "Tram 28 route.jpg",
      ext: "jpg",
      size: "3.9 MB",
      photo: "lisbon-tram",
      keywords: "lisbon offsite",
      snippet: "Photo for the offsite guide: the tram route from the hotel to the venue.",
      owner: "sofia-ramirez",
      updated: "2026-08-14"
    },
    {
      id: "person-sofia",
      kind: "person",
      team: "operations",
      person: "sofia-ramirez",
      title: B("sofia-ramirez").name,
      role: "Operations lead",
      snippet: "Runs travel, offices, and the Lisbon offsite. Send questions about flights and hotels here.",
      email: "sofia@northwind.co",
      location: "Lisbon",
      owns: 35
    },
    {
      id: "doc-pricing-page",
      kind: "doc",
      team: "growth",
      title: "Pricing page rewrite",
      path: "Growth / Website",
      snippet: "Lead with the Team plan, move seat pricing above the fold, and answer the three most common pricing questions right under the table.",
      body: [
        "Lead with the Team plan, move seat pricing above the fold, and answer the three most common pricing questions right under the table.",
        "The current page asks visitors to compare nine rows before they see a price. The rewrite cuts that to four.",
        "We will run the new pricing page as a two week test with 50% of traffic."
      ],
      author: "tyler-hayes",
      updated: "2026-09-09",
      readMinutes: 5
    },
    {
      id: "file-pricing-model",
      kind: "file",
      team: "finance",
      title: "Pricing model 2027.xlsx",
      ext: "xlsx",
      size: "1.2 MB",
      snippet: "Seat price scenarios for the Team and Business plans, with discount bands and expected pricing impact on net revenue.",
      owner: "andre-williams",
      updated: "2026-09-02"
    },
    {
      id: "person-andre",
      kind: "person",
      team: "finance",
      person: "andre-williams",
      title: B("andre-williams").name,
      role: "Finance partner",
      snippet: "Partners with growth on pricing, discounts, and plan packaging. Keeper of the revenue model.",
      email: "andre@northwind.co",
      location: "New York",
      owns: 19
    },
    {
      id: "doc-roadmap",
      kind: "doc",
      team: "engineering",
      title: "Q4 product roadmap",
      path: "Product / Planning",
      snippet: "Three bets for Q4: faster search, a calmer inbox, and offline mode for mobile. Each roadmap item lists an owner and a ship date.",
      body: [
        "Three bets for Q4: faster search, a calmer inbox, and offline mode for mobile. Each roadmap item lists an owner and a ship date.",
        "Search ships first. The goal is results in under 200 milliseconds for workspaces with a million items.",
        "The roadmap is reviewed every two weeks. Changes are posted in the product channel."
      ],
      author: "diane-foster",
      updated: "2026-09-16",
      readMinutes: 7
    },
    {
      id: "file-roadmap-deck",
      kind: "file",
      team: "engineering",
      title: "Roadmap review, September.key",
      ext: "key",
      size: "36.5 MB",
      pages: 22,
      snippet: "Slide 4: search latency by workspace size. Slide 9: roadmap risks and what we cut.",
      owner: "nathan-cole",
      updated: "2026-09-10"
    },
    {
      id: "person-marcus",
      kind: "person",
      team: "engineering",
      person: "marcus-johnson",
      title: B("marcus-johnson").name,
      role: "Frontend engineer",
      snippet: "Building the new search experience and the keyboard shortcuts across the app.",
      email: "marcus@northwind.co",
      location: "Berlin",
      owns: 23
    },
    {
      id: "doc-brand",
      kind: "doc",
      team: "design",
      title: "Brand guidelines",
      path: "Design / Brand",
      snippet: "Our voice is plain and warm. Use sentence case, short words, and one idea per sentence. Logos keep a clear space of one cap height.",
      body: [
        "Our voice is plain and warm. Use sentence case, short words, and one idea per sentence. Logos keep a clear space of one cap height.",
        "Photography shows real places and people at work. No stock handshakes.",
        "When in doubt, ask the brand channel before a launch."
      ],
      author: "jasmine-brooks",
      updated: "2026-05-27",
      readMinutes: 8
    },
    {
      id: "person-jasmine",
      kind: "person",
      team: "design",
      person: "jasmine-brooks",
      title: B("jasmine-brooks").name,
      role: "Design lead",
      snippet: "Leads product design and keeps the brand guidelines current. Reviews every launch before it ships.",
      email: "jasmine@northwind.co",
      location: "London",
      owns: 51
    },
    {
      id: "file-invoice-template",
      kind: "file",
      team: "finance",
      title: "Invoice template.pdf",
      ext: "pdf",
      size: "220 KB",
      pages: 1,
      snippet: "The standard invoice template with VAT fields for EU customers and a purchase order line.",
      owner: "andre-williams",
      updated: "2025-11-06"
    },
    {
      id: "doc-hiring-plan",
      kind: "doc",
      team: "operations",
      title: "2027 hiring plan",
      path: "People / Planning",
      snippet: "Twelve roles next year, most in engineering and customer success. Each hiring manager owns a scorecard and an onboarding plan.",
      body: [
        "Twelve roles next year, most in engineering and customer success. Each hiring manager owns a scorecard and an onboarding plan.",
        "We hire in Europe and North America, with a preference for overlap with the Lisbon and New York hubs.",
        "Offers are approved by the hiring manager and finance within two working days."
      ],
      author: "diane-foster",
      updated: "2026-09-05",
      readMinutes: 5
    },
    {
      id: "person-mateo",
      kind: "person",
      team: "engineering",
      person: "mateo-alvarez",
      title: B("mateo-alvarez").name,
      role: "Mobile engineer",
      snippet: "Working on offline mode for the mobile apps. Previously built the onboarding screens on iOS.",
      email: "mateo@northwind.co",
      location: "Madrid",
      owns: 16
    },
    {
      id: "file-office-photo",
      kind: "file",
      team: "operations",
      title: "New Dublin office.jpg",
      ext: "jpg",
      size: "5.2 MB",
      photo: "home-office",
      snippet: "The quiet room on the second floor, ready for the new hires starting in October.",
      owner: "sofia-ramirez",
      updated: "2026-01-21"
    }
  ];
  function F(e2) {
    return (0, S.MV)(e2);
  }
  function P(e2) {
    return (0, S.jW)(e2);
  }
  var R = a(59316), O = a.n(R), W = a(55665);
  let q = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ], H = { doc: "Docs", person: "People", file: "Files" }, Y = ["doc", "person", "file"], I = [
    { value: "relevance", label: "Best match" },
    { value: "newest", label: "Newest" },
    { value: "title", label: "A to Z" }
  ], V = {
    pdf: "PDF",
    fig: "Figma",
    xlsx: "Spreadsheet",
    jpg: "Image",
    mp4: "Video",
    key: "Keynote"
  }, U = (...e2) => e2.filter(Boolean).join(" ");
  function K(e2) {
    let [t2, a2, s2] = e2.split("-").map(Number);
    return { y: t2, m: a2, d: s2, t: Date.UTC(t2, a2 - 1, s2) };
  }
  function G(e2, t2) {
    return Math.round((K(t2).t - K(e2).t) / 864e5);
  }
  function J(e2, t2, a2 = false) {
    let s2 = K(e2), i2 = K(t2), n2 = G(e2, t2), r2 = n2 <= 0 ? "Today" : 1 === n2 ? "Yesterday" : n2 < 7 ? `${n2} days ago` : n2 < 14 ? "Last week" : n2 < 31 ? `${Math.floor(n2 / 7)} weeks ago` : null;
    if (r2) return a2 ? r2.toLowerCase() : r2;
    let o2 = `${q[s2.m - 1]} ${s2.d}${s2.y === i2.y ? "" : `, ${s2.y}`}`;
    return a2 ? `on ${o2}` : o2;
  }
  function Z(e2, t2) {
    let a2 = K(t2), s2 = 12 * a2.y + (a2.m - 1) - (12 - e2);
    return `${q[s2 % 12]} ${Math.floor(s2 / 12)}`;
  }
  let X = (e2) => e2.toLowerCase().split(/\s+/).map((e3) => e3.replace(/[^\p{L}\p{N}]/gu, "")).filter(Boolean), Q = (e2) => e2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), ee = (e2) => "person" === e2.kind ? null : e2.updated;
  function et(e2, t2) {
    let a2 = e2.title.toLowerCase();
    return t2.reduce(
      (t3, s2) => t3 + 3 * !!a2.includes(s2) + +!!e2.snippet.toLowerCase().includes(s2),
      0
    );
  }
  function ea(e2, t2) {
    return t2.length ? (e2.match(RegExp(t2.map(Q).join("|"), "gi")) ?? []).length : 0;
  }
  function es({ text: e2, terms: t2 }) {
    if (!t2.length) return (0, s.jsx)(s.Fragment, { children: e2 });
    let a2 = RegExp(`(${t2.map(Q).join("|")})`, "gi");
    return (0, s.jsx)(s.Fragment, {
      children: e2.split(a2).map(
        (e3, t3) => t3 % 2 ? (0, s.jsx)("mark", { className: O().mark, children: e3 }, t3) : (0, s.jsx)(i.Fragment, { children: e3 }, t3)
      )
    });
  }
  function ei() {
    return (0, s.jsxs)("svg", {
      className: O().brand,
      viewBox: "0 0 38 57",
      "aria-hidden": "true",
      children: [
        (0, s.jsx)("path", {
          fill: "#1ABCFE",
          d: "M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z"
        }),
        (0, s.jsx)("path", {
          fill: "#0ACF83",
          d: "M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z"
        }),
        (0, s.jsx)("path", {
          fill: "#FF7262",
          d: "M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z"
        }),
        (0, s.jsx)("path", {
          fill: "#F24E1E",
          d: "M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z"
        }),
        (0, s.jsx)("path", {
          fill: "#A259FF",
          d: "M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z"
        })
      ]
    });
  }
  function en({ file: e2, size: t2 = 20 }) {
    let a2 = { size: t2, strokeWidth: 1.75, "aria-hidden": true };
    return "fig" === e2.ext ? (0, s.jsx)(ei, {}) : "xlsx" === e2.ext ? (0, s.jsx)(c.A, { ...a2 }) : "mp4" === e2.ext ? (0, s.jsx)(h.A, { ...a2 }) : "key" === e2.ext ? (0, s.jsx)(p.A, { ...a2 }) : (0, s.jsx)(u.A, { ...a2 });
  }
  function er({ result: e2 }) {
    if ("person" === e2.kind) {
      let t2 = F(e2.person);
      return (0, s.jsx)(j.e, {
        name: t2.name,
        src: t2.src,
        size: "md",
        className: O().leadAvatar
      });
    }
    if ("file" === e2.kind && e2.photo) {
      let t2 = P(e2.photo);
      return (0, s.jsx)("span", {
        className: O().thumb,
        children: (0, s.jsx)(n.default, {
          src: t2.src,
          alt: "",
          fill: true,
          sizes: "40px"
        })
      });
    }
    return (0, s.jsx)("span", {
      className: O().glyph,
      children: "doc" === e2.kind ? (0, s.jsx)(u.A, {
        size: 20,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      }) : (0, s.jsx)(en, { file: e2 })
    });
  }
  function eo(e2, t2) {
    return "doc" === e2.kind ? `Doc in ${e2.path}` : "person" === e2.kind ? `${e2.role}, ${e2.location}` : [
      V[e2.ext],
      e2.pages ? `${e2.pages} ${1 === e2.pages ? "page" : "pages"}` : null,
      e2.size,
      t2(e2.team)
    ].filter(Boolean).join(", ");
  }
  function el({
    inSheet: e2 = false,
    idPrefix: t2,
    facets: a2,
    teams: i2,
    typeCounts: n2,
    teamCounts: l2,
    today: d2,
    active: c2,
    onToggleType: h2,
    onToggleTeam: p2,
    onRange: u2,
    onClear: m2
  }) {
    let g2 = (0, r.I)();
    return (0, s.jsxs)("div", {
      className: O().facets,
      children: [
        e2 ? null : (0, s.jsxs)("div", {
          className: O().facetsHead,
          children: [
            (0, s.jsx)("h3", {
              className: O().facetsTitle,
              children: "Filters"
            }),
            (0, s.jsx)(o.PY1.button, {
              type: "button",
              className: O().clearAll,
              onClick: m2,
              disabled: !c2,
              initial: false,
              animate: { opacity: +!!c2 },
              transition: g2 ? { duration: 0 } : {
                duration: b.T.duration.fast,
                ease: [...b.T.ease.standard]
              },
              "aria-hidden": !c2,
              tabIndex: c2 ? 0 : -1,
              children: "Clear all"
            })
          ]
        }),
        (0, s.jsxs)("fieldset", {
          className: O().group,
          children: [
            (0, s.jsx)("legend", { className: O().legend, children: "Type" }),
            (0, s.jsx)("div", {
              className: O().options,
              children: Y.map((e3) => {
                let i3 = a2.types.includes(e3), r2 = n2[e3];
                return (0, s.jsxs)(
                  "div",
                  {
                    className: O().option,
                    "data-empty": 0 !== r2 || i3 ? void 0 : "",
                    children: [
                      (0, s.jsx)($.S, {
                        id: `${t2}-type-${e3}`,
                        label: H[e3],
                        checked: i3,
                        disabled: 0 === r2 && !i3,
                        onCheckedChange: (t3) => h2(e3, true === t3)
                      }),
                      (0, s.jsx)("span", {
                        className: O().optionCount,
                        "aria-hidden": "true",
                        children: r2
                      })
                    ]
                  },
                  e3
                );
              })
            })
          ]
        }),
        (0, s.jsxs)("fieldset", {
          className: O().group,
          children: [
            (0, s.jsx)("legend", { className: O().legend, children: "Team" }),
            (0, s.jsx)("div", {
              className: O().options,
              children: i2.map((e3) => {
                let i3 = a2.teams.includes(e3.id), n3 = l2[e3.id] ?? 0;
                return (0, s.jsxs)(
                  "div",
                  {
                    className: O().option,
                    "data-empty": 0 !== n3 || i3 ? void 0 : "",
                    children: [
                      (0, s.jsx)($.S, {
                        id: `${t2}-team-${e3.id}`,
                        label: e3.label,
                        checked: i3,
                        disabled: 0 === n3 && !i3,
                        onCheckedChange: (t3) => p2(e3.id, true === t3)
                      }),
                      (0, s.jsx)("span", {
                        className: O().optionCount,
                        "aria-hidden": "true",
                        children: n3
                      })
                    ]
                  },
                  e3.id
                );
              })
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: O().group,
          children: [
            (0, s.jsx)(M.A, {
              label: "Edited",
              value: a2.edited,
              onValueChange: u2,
              min: 0,
              max: 12,
              step: 1,
              format: (e3) => Z(e3, d2),
              thumbLabels: ["Edited after", "Edited before"]
            }),
            (0, s.jsx)("p", {
              className: O().hint,
              children: "Applies to docs and files"
            })
          ]
        })
      ]
    });
  }
  function ed({ result: e2, terms: t2, today: a2, teamLabel: r2, onOpen: o2 }) {
    let l2, [d2, c2] = (0, i.useState)("idle"), [h2, p2] = (0, i.useState)("idle"), u2 = (0, i.useRef)([]);
    (0, i.useEffect)(
      () => () => u2.current.forEach((e3) => window.clearTimeout(e3)),
      []
    );
    let f2 = (e3, t3) => {
      u2.current.push(window.setTimeout(e3, t3));
    }, w2 = "doc" === e2.kind ? ["Open doc", "Opened"] : "person" === e2.kind ? ["View profile", "Profile opened"] : ["Download", "Downloaded"], x2 = "doc" === e2.kind ? ea(`${e2.title} ${e2.body.join(" ")}`, t2) : ea(`${e2.title} ${e2.snippet}`, t2), y2 = "doc" === e2.kind ? F(e2.author) : "file" === e2.kind ? F(e2.owner) : null;
    return (0, s.jsxs)("article", {
      className: O().previewCard,
      "aria-label": `Preview of ${e2.title}`,
      children: [
        "file" === e2.kind && e2.photo ? (0, s.jsx)("div", {
          className: O().previewMedia,
          children: (0, s.jsx)(n.default, {
            src: P(e2.photo).src,
            alt: P(e2.photo).alt,
            fill: true,
            sizes: "(max-width: 720px) 100vw, 320px"
          })
        }) : null,
        (0, s.jsxs)("header", {
          className: O().previewHead,
          children: [
            "person" === e2.kind ? (0, s.jsx)(j.e, {
              name: e2.title,
              src: F(e2.person).src,
              size: "lg"
            }) : "file" !== e2.kind || e2.photo ? null : (0, s.jsx)("span", {
              className: O().previewGlyph,
              children: (0, s.jsx)(en, { file: e2, size: 24 })
            }),
            (0, s.jsxs)("div", {
              className: O().previewTitles,
              children: [
                (0, s.jsx)("h3", {
                  className: O().previewTitle,
                  children: (0, s.jsx)(es, { text: e2.title, terms: t2 })
                }),
                (0, s.jsx)("p", {
                  className: O().previewMeta,
                  children: eo(e2, r2)
                })
              ]
            })
          ]
        }),
        "doc" === e2.kind ? (0, s.jsx)("div", {
          className: O().previewBody,
          children: e2.body.map(
            (e3, a3) => (0, s.jsx)(
              "p",
              { children: (0, s.jsx)(es, { text: e3, terms: t2 }) },
              a3
            )
          )
        }) : (0, s.jsx)("div", {
          className: O().previewBody,
          children: (0, s.jsx)("p", {
            children: (0, s.jsx)(es, { text: e2.snippet, terms: t2 })
          })
        }),
        (0, s.jsxs)("dl", {
          className: O().facts,
          children: [
            x2 > 0 ? (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("dt", { children: "Matches" }),
                (0, s.jsx)("dd", { className: O().num, children: x2 })
              ]
            }) : null,
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("dt", { children: "Team" }),
                (0, s.jsx)("dd", { children: r2(e2.team) })
              ]
            }),
            y2 ? (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("dt", {
                  children: "doc" === e2.kind ? "Author" : "Owner"
                }),
                (0, s.jsxs)("dd", {
                  className: O().factPerson,
                  children: [
                    (0, s.jsx)(j.e, {
                      name: y2.name,
                      src: y2.src,
                      size: "sm"
                    }),
                    y2.name
                  ]
                })
              ]
            }) : null,
            "doc" === e2.kind ? (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("dt", { children: "Length" }),
                (0, s.jsxs)("dd", {
                  className: O().num,
                  children: [e2.readMinutes, " min read"]
                })
              ]
            }) : null,
            "person" === e2.kind ? (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("dt", { children: "Email" }),
                    (0, s.jsx)("dd", {
                      className: O().truncate,
                      title: e2.email,
                      children: e2.email
                    })
                  ]
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("dt", { children: "Owns" }),
                    (0, s.jsxs)("dd", {
                      className: O().num,
                      children: [e2.owns, " docs and files"]
                    })
                  ]
                })
              ]
            }) : null,
            "person" !== e2.kind ? (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)("dt", { children: "Last edited" }),
                (0, s.jsxs)("dd", {
                  className: O().num,
                  children: [
                    (l2 = K(e2.updated), `${q[l2.m - 1]} ${l2.d}, ${l2.y}`),
                    31 > G(e2.updated, a2) ? (0, s.jsxs)("span", {
                      className: O().factMuted,
                      children: [", ", J(e2.updated, a2, true)]
                    }) : null
                  ]
                })
              ]
            }) : null
          ]
        }),
        (0, s.jsxs)("div", {
          className: O().previewActions,
          children: [
            (0, s.jsx)(N.$, {
              variant: "primary",
              loading: "busy" === d2,
              onClick: () => {
                "idle" === d2 && (c2("busy"), f2(() => {
                  c2("done"), o2?.(e2), f2(() => c2("idle"), 1800);
                }, 650));
              },
              children: "done" === d2 ? (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(m.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  }),
                  w2[1]
                ]
              }) : w2[0]
            }),
            (0, s.jsx)(N.$, {
              variant: "secondary",
              onClick: () => {
                let t3 = `https://northwind.co/${e2.kind}/${e2.id}`, a3 = (e3) => {
                  p2(e3), f2(() => p2("idle"), 1600);
                };
                (0, W.a)(t3).then(
                  () => a3("done"),
                  () => a3("error")
                );
              },
              "aria-label": "done" === h2 ? "Link copied" : "error" === h2 ? "Copy failed" : "Copy link",
              children: "done" === h2 ? (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(m.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  }),
                  "Copied"
                ]
              }) : "error" === h2 ? "Copy failed" : (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(g.A, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  }),
                  "Copy link"
                ]
              })
            })
          ]
        }),
        (0, s.jsx)("p", {
          className: O().srOnly,
          role: "status",
          children: "done" === d2 ? `${w2[1]}: ${e2.title}` : "done" === h2 ? "Link copied" : "error" === h2 ? "Copy failed" : ""
        })
      ]
    });
  }
  function ec({ value: e2 }) {
    let t2 = (0, r.I)(), [a2, n2] = (0, i.useState)({ value: e2, direction: 1 });
    a2.value !== e2 && n2({ value: e2, direction: e2 > a2.value ? 1 : -1 });
    let d2 = a2.direction;
    return (0, s.jsx)("span", {
      className: O().roll,
      children: (0, s.jsx)(l.N, {
        mode: "popLayout",
        initial: false,
        custom: d2,
        children: (0, s.jsx)(
          o.PY1.span,
          {
            className: O().rollValue,
            custom: d2,
            variants: {
              enter: (e3) => ({ y: t2 ? 0 : `${0.7 * e3}em`, opacity: 0 }),
              center: { y: 0, opacity: 1 },
              exit: (e3) => ({
                y: t2 ? 0 : `${-0.7 * e3}em`,
                opacity: 0,
                transition: {
                  duration: t2 ? 0 : b.T.duration.exit,
                  ease: [...b.T.ease.exit]
                }
              })
            },
            initial: "enter",
            animate: "center",
            exit: "exit",
            transition: t2 ? { duration: 0 } : b.T.spring.smooth,
            children: e2
          },
          e2
        )
      })
    });
  }
  let eh = [
    { lead: "square", title: 62, meta: 38, lines: [96, 71] },
    { lead: "round", title: 34, meta: 44, lines: [88, 52] },
    { lead: "square", title: 48, meta: 30, lines: [92, 64] },
    { lead: "square", title: 56, meta: 40, lines: [84, 58] },
    { lead: "round", title: 30, meta: 36, lines: [90, 44] }
  ];
  function ep() {
    return (0, s.jsx)("ul", {
      className: O().skeletons,
      "aria-hidden": "true",
      children: eh.map(
        (e2, t2) => (0, s.jsxs)(
          "li",
          {
            className: O().skeletonRow,
            children: [
              (0, s.jsx)("span", {
                className: U(
                  O().bone,
                  "round" === e2.lead ? O().boneRound : O().boneSquare
                )
              }),
              (0, s.jsxs)("span", {
                className: O().skeletonBody,
                children: [
                  (0, s.jsx)("span", {
                    className: O().bone,
                    style: { width: `${e2.title}%`, height: 14 }
                  }),
                  (0, s.jsx)("span", {
                    className: O().bone,
                    style: { width: `${e2.meta}%`, height: 10 }
                  }),
                  e2.lines.map(
                    (e3, t3) => (0, s.jsx)(
                      "span",
                      {
                        className: O().bone,
                        style: { width: `${e3}%`, height: 10 }
                      },
                      t3
                    )
                  )
                ]
              })
            ]
          },
          t2
        )
      )
    });
  }
  function eu({
    results: e2 = D,
    teams: t2 = L,
    recentSearches: a2 = z,
    suggestedSearches: n2 = E,
    defaultQuery: c2 = "onboarding",
    defaultSort: h2 = "relevance",
    today: p2 = "2026-09-24",
    workspace: u2 = "Northwind",
    latency: m2 = 650,
    onSearch: g2,
    onOpen: $2,
    className: M2
  }) {
    let S2 = (0, i.useId)().replace(/:/g, ""), B2 = (0, r.I)() ?? false, P2 = (0, i.useRef)(null), R2 = (0, i.useRef)(null), W2 = (0, i.useRef)(null), q2 = (0, i.useRef)(null), G2 = (0, i.useRef)(void 0), [Q2, ea2] = (0, i.useState)(c2), [ei2, en2] = (0, i.useState)(c2), [eh2, em2] = (0, i.useState)(a2), [eg, ef] = (0, i.useState)(false), [ew, ex] = (0, i.useState)(-1), [ey, e_] = (0, i.useState)(false), [ev, eb] = (0, i.useState)(h2), [ej, ek] = (0, i.useState)({ types: [], teams: [], edited: [0, 12] }), [eN, e$] = (0, i.useState)(null), [eC, eT] = (0, i.useState)(false), [eA, eM] = (0, i.useState)(true), [eS, eL] = (0, i.useState)(false), [ez, eE] = (0, i.useState)(false);
    (0, i.useEffect)(() => () => window.clearTimeout(G2.current), []), (0, i.useEffect)(() => {
      let e3 = P2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([e8]) => eM(e8.contentRect.width >= 1120));
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, i.useEffect)(() => {
      let e3 = (e8) => {
        if ("/" !== e8.key || e8.metaKey || e8.ctrlKey || e8.altKey) return;
        let t3 = e8.target;
        if (t3 && (t3.isContentEditable || /^(input|textarea|select)$/i.test(t3.tagName)))
          return;
        let a3 = P2.current?.getBoundingClientRect();
        !a3 || a3.bottom < 0 || a3.top > window.innerHeight || (e8.preventDefault(), R2.current?.focus(), R2.current?.select());
      };
      return window.addEventListener("keydown", e3), () => window.removeEventListener("keydown", e3);
    }, []);
    let eB = (0, i.useCallback)(
      (e3) => t2.find((t3) => t3.id === e3)?.label ?? e3,
      [t2]
    ), eD = (0, i.useMemo)(() => X(ei2), [ei2]), eF = (0, i.useMemo)(
      () => e2.filter((e3) => {
        let t3, a3 = (t3 = "doc" === e3.kind ? `${e3.path} ${e3.body.join(" ")}` : "person" === e3.kind ? `${e3.role} ${e3.location}` : V[e3.ext], `${e3.title} ${e3.snippet} ${t3} ${e3.keywords ?? ""}`.toLowerCase());
        return eD.every((e8) => a3.includes(e8));
      }),
      [e2, eD]
    ), eP = 0 === ej.edited[0] && 12 === ej.edited[1], eR = (0, i.useCallback)(
      (e3, t3) => {
        if ("types" !== t3 && ej.types.length && !ej.types.includes(e3.kind) || "teams" !== t3 && ej.teams.length && !ej.teams.includes(e3.team))
          return false;
        let a3 = ee(e3);
        if (!eP && a3) {
          let e8, t4, s2 = (e8 = K(a3), 12 - (((t4 = K(p2)).y - e8.y) * 12 + (t4.m - e8.m)));
          if (s2 < ej.edited[0] || s2 > ej.edited[1]) return false;
        }
        return true;
      },
      [ej, eP, p2]
    ), eO = (0, i.useMemo)(() => {
      let t3 = eF.filter((e3) => eR(e3)), a3 = new Map(e2.map((e3, t4) => [e3.id, t4])), s2 = (e3, t4) => (a3.get(e3.id) ?? 0) - (a3.get(t4.id) ?? 0);
      return "title" === ev ? [...t3].sort((e3, t4) => e3.title.localeCompare(t4.title, "en")) : "newest" === ev ? [...t3].sort(
        (e3, t4) => (ee(t4) ?? "").localeCompare(ee(e3) ?? "") || s2(e3, t4)
      ) : [...t3].sort((e3, t4) => et(t4, eD) - et(e3, eD) || s2(e3, t4));
    }, [eF, eR, e2, ev, eD]), eW = (0, i.useMemo)(() => {
      let e3 = { doc: 0, person: 0, file: 0 };
      return eF.forEach((t3) => {
        eR(t3, "types") && (e3[t3.kind] += 1);
      }), e3;
    }, [eF, eR]), eq = (0, i.useMemo)(() => {
      let e3 = {};
      return eF.forEach((t3) => {
        eR(t3, "teams") && (e3[t3.team] = (e3[t3.team] ?? 0) + 1);
      }), e3;
    }, [eF, eR]), eH = ej.types.length + ej.teams.length + +!eP, eY = (0, i.useMemo)(
      () => [
        ...ej.types.map((e3) => ({
          id: `type:${e3}`,
          label: "Type",
          value: H[e3]
        })),
        ...ej.teams.map((e3) => ({
          id: `team:${e3}`,
          label: "Team",
          value: eB(e3)
        })),
        ...eP ? [] : [
          {
            id: "edited",
            label: "Edited",
            value: ej.edited[0] === ej.edited[1] ? Z(ej.edited[0], p2) : `${Z(ej.edited[0], p2)} to ${Z(ej.edited[1], p2)}`
          }
        ]
      ],
      [ej, eP, eB, p2]
    ), eI = eO.find((e3) => e3.id === eN) ?? eO[0] ?? null, eV = eI ? eO.indexOf(eI) : -1, eU = `${ei2}|${ev}|${eY.map((e3) => e3.id + e3.value).join(",")}`, eK = (function(e3) {
      let t3 = 0;
      for (let a3 = 0; a3 < e3.length; a3++) t3 = 31 * t3 + e3.charCodeAt(a3) >>> 0;
      return (6 + t3 % 19) / 100;
    })(eU), eG = (0, i.useMemo)(() => {
      let e3 = Q2.trim().toLowerCase(), t3 = e3 && e3 !== ei2.trim().toLowerCase(), a3 = (a4) => !t3 || a4.toLowerCase().includes(e3), s2 = eh2.filter(a3).slice(0, 4).map((e8, t4) => ({ id: `r${t4}`, text: e8, group: "recent" })), i2 = new Set(s2.map((e8) => e8.text.toLowerCase()));
      return [
        ...s2,
        ...n2.filter((e8) => a3(e8) && !i2.has(e8.toLowerCase())).slice(0, 4).map((e8, t4) => ({ id: `s${t4}`, text: e8, group: "suggested" }))
      ];
    }, [Q2, ei2, eh2, n2]), eJ = eg && eG.length > 0, eZ = (0, i.useCallback)(
      (e3) => {
        let t3 = e3.trim();
        ea2(t3), ef(false), ex(-1), e$(null), en2(t3), t3 && em2(
          (e8) => [
            t3,
            ...e8.filter((e10) => e10.toLowerCase() !== t3.toLowerCase())
          ].slice(0, 5)
        ), g2?.(t3), q2.current?.scrollTo({ top: 0 }), window.clearTimeout(G2.current), m2 > 0 && (e_(true), G2.current = window.setTimeout(() => e_(false), m2));
      },
      [m2, g2]
    ), eX = (0, i.useCallback)(
      () => ek({ types: [], teams: [], edited: [0, 12] }),
      []
    ), eQ = (e3) => {
      e$(e3.id), eA || eL(true);
    }, e0 = (e3) => {
      let t3 = eO[Math.max(0, Math.min(eO.length - 1, e3))];
      t3 && (e$(t3.id), requestAnimationFrame(
        () => document.getElementById(`${S2}-r-${t3.id}`)?.scrollIntoView({ block: "nearest" })
      ));
    }, e1 = (0, i.useMemo)(
      () => Array.from(
        new Set(
          e2.flatMap((e3) => X(`${e3.title} ${e3.snippet}`)).filter((e3) => e3.length > 3)
        )
      ),
      [e2]
    ), e22 = eO.length ? null : (function(e3, t3) {
      if (!e3.length) return null;
      let a3 = false, s2 = e3.map((e8) => {
        if (t3.includes(e8)) return e8;
        let s3 = e8, i2 = e8.length > 5 ? 3 : 2;
        for (let a4 of t3) {
          let t4 = (function(e10, t5) {
            let a5 = Array.from({ length: t5.length + 1 }, (e11, t6) => t6);
            for (let s4 = 1; s4 <= e10.length; s4++) {
              let i3 = a5[0];
              a5[0] = s4;
              for (let n3 = 1; n3 <= t5.length; n3++) {
                let r2 = a5[n3];
                a5[n3] = Math.min(
                  a5[n3] + 1,
                  a5[n3 - 1] + 1,
                  i3 + +(e10[s4 - 1] !== t5[n3 - 1])
                ), i3 = r2;
              }
            }
            return a5[t5.length];
          })(e8, a4);
          t4 < i2 && (s3 = a4, i2 = t4);
        }
        return s3 !== e8 && (a3 = true), s3;
      });
      return a3 ? s2.join(" ") : null;
    })(eD, e1), e5 = eH ? eF.length : 0, e6 = B2 ? { duration: 0 } : { duration: b.T.duration.standard, ease: [...b.T.ease.enter] }, e9 = B2 ? { duration: 0 } : b.T.spring.smooth, e4 = `${S2}-suggestions`, e7 = {
      facets: ej,
      teams: t2,
      typeCounts: eW,
      teamCounts: eq,
      today: p2,
      active: eH > 0,
      onToggleType: (e3, t3) => ek((a3) => ({
        ...a3,
        types: t3 ? Y.filter((t4) => t4 === e3 || a3.types.includes(t4)) : a3.types.filter((t4) => t4 !== e3)
      })),
      onToggleTeam: (e3, a3) => ek((s2) => ({
        ...s2,
        teams: a3 ? t2.map((e8) => e8.id).filter((t3) => t3 === e3 || s2.teams.includes(t3)) : s2.teams.filter((t3) => t3 !== e3)
      })),
      onRange: (e3) => ek((t3) => ({ ...t3, edited: e3 })),
      onClear: eX
    };
    return (0, s.jsxs)("section", {
      ref: P2,
      className: U(O().root, M2),
      "aria-label": `Search ${u2}`,
      children: [
        (0, s.jsxs)("div", {
          className: O().frame,
          children: [
            (0, s.jsxs)("header", {
              className: O().top,
              children: [
                (0, s.jsxs)("div", {
                  className: O().queryWrap,
                  children: [
                    (0, s.jsxs)("form", {
                      className: O().query,
                      role: "search",
                      onSubmit: (e3) => {
                        e3.preventDefault(), eZ(Q2);
                      },
                      "data-open": eJ ? "" : void 0,
                      children: [
                        (0, s.jsx)(f.A, {
                          className: O().queryIcon,
                          size: 18,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        }),
                        (0, s.jsxs)("label", {
                          htmlFor: `${S2}-q`,
                          className: O().srOnly,
                          children: ["Search ", u2]
                        }),
                        (0, s.jsx)("input", {
                          ref: R2,
                          id: `${S2}-q`,
                          className: O().queryInput,
                          type: "text",
                          inputMode: "search",
                          enterKeyHint: "search",
                          autoComplete: "off",
                          spellCheck: false,
                          placeholder: `Search docs, people, and files in ${u2}`,
                          value: Q2,
                          role: "combobox",
                          "aria-expanded": eJ,
                          "aria-controls": e4,
                          "aria-autocomplete": "list",
                          "aria-activedescendant": eJ && ew >= 0 ? `${e4}-${eG[ew]?.id}` : void 0,
                          onChange: (e3) => {
                            ea2(e3.target.value), ef(true), ex(-1);
                          },
                          onFocus: () => ef(true),
                          onBlur: () => {
                            ef(false), ex(-1);
                          },
                          onKeyDown: (e3) => {
                            if ("ArrowDown" === e3.key) {
                              e3.preventDefault(), eJ ? ex((e8) => (e8 + 1) % eG.length) : !eg && eG.length && Q2.trim() !== ei2 ? (ef(true), ex(0)) : eO.length && !ey && (ef(false), W2.current?.focus());
                              return;
                            }
                            if ("ArrowUp" === e3.key && eJ) {
                              e3.preventDefault(), ex((e8) => e8 <= 0 ? eG.length - 1 : e8 - 1);
                              return;
                            }
                            if ("Enter" === e3.key) {
                              e3.preventDefault();
                              let t3 = eJ && ew >= 0 ? eG[ew] : null;
                              eZ(t3 ? t3.text : Q2);
                              return;
                            }
                            "Escape" === e3.key && (eJ ? (e3.preventDefault(), ef(false), ex(-1)) : Q2 && (e3.preventDefault(), ea2(""), ef(true)));
                          }
                        }),
                        (0, s.jsx)(l.N, {
                          initial: false,
                          children: Q2 ? (0, s.jsx)(
                            o.PY1.button,
                            {
                              type: "button",
                              className: O().queryClear,
                              "aria-label": "Clear search text",
                              onMouseDown: (e3) => e3.preventDefault(),
                              onClick: () => {
                                ea2(""), ef(true), R2.current?.focus();
                              },
                              initial: B2 ? { opacity: 0 } : { opacity: 0, scale: 0.6 },
                              animate: { opacity: 1, scale: 1 },
                              exit: B2 ? { opacity: 0 } : {
                                opacity: 0,
                                scale: 0.6,
                                transition: {
                                  duration: b.T.duration.exit,
                                  ease: [...b.T.ease.exit]
                                }
                              },
                              transition: B2 ? { duration: 0 } : b.T.spring.snappy,
                              children: (0, s.jsx)(w.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            },
                            "clear"
                          ) : null
                        }),
                        (0, s.jsx)("kbd", {
                          className: O().slash,
                          "aria-hidden": "true",
                          children: "/"
                        })
                      ]
                    }),
                    (0, s.jsx)(l.N, {
                      children: eJ ? (0, s.jsx)(
                        o.PY1.div,
                        {
                          className: O().menu,
                          initial: B2 ? { opacity: 0 } : { opacity: 0, y: -4, scale: 0.98 },
                          animate: { opacity: 1, y: 0, scale: 1 },
                          exit: B2 ? { opacity: 0, transition: { duration: 0 } } : {
                            opacity: 0,
                            y: -4,
                            scale: 0.98,
                            transition: {
                              duration: b.T.duration.exit,
                              ease: [...b.T.ease.exit]
                            }
                          },
                          transition: B2 ? { duration: 0 } : b.T.spring.smooth,
                          children: (0, s.jsx)("ul", {
                            id: e4,
                            role: "listbox",
                            "aria-label": "Search suggestions",
                            className: O().menuList,
                            children: ["recent", "suggested"].map((e3) => {
                              let t3 = eG.filter((t4) => t4.group === e3);
                              return t3.length ? (0, s.jsxs)(
                                "li",
                                {
                                  role: "presentation",
                                  className: O().menuGroup,
                                  children: [
                                    (0, s.jsx)("span", {
                                      className: O().menuLabel,
                                      id: `${e4}-${e3}`,
                                      "aria-hidden": "true",
                                      children: "recent" === e3 ? "Recent" : "Suggested"
                                    }),
                                    (0, s.jsx)("ul", {
                                      role: "group",
                                      "aria-labelledby": `${e4}-${e3}`,
                                      className: O().menuRows,
                                      children: t3.map((t4) => {
                                        let a3 = eG.indexOf(t4);
                                        return (0, s.jsxs)(
                                          "li",
                                          {
                                            id: `${e4}-${t4.id}`,
                                            role: "option",
                                            "aria-selected": a3 === ew,
                                            className: O().menuRow,
                                            "data-active": a3 === ew ? "" : void 0,
                                            onMouseDown: (e8) => e8.preventDefault(),
                                            onMouseMove: () => ex(a3),
                                            onClick: () => eZ(t4.text),
                                            children: [
                                              "recent" === e3 ? (0, s.jsx)(x.A, {
                                                size: 16,
                                                strokeWidth: 1.75,
                                                "aria-hidden": "true"
                                              }) : (0, s.jsx)(f.A, {
                                                size: 16,
                                                strokeWidth: 1.75,
                                                "aria-hidden": "true"
                                              }),
                                              (0, s.jsx)("span", {
                                                className: O().menuText,
                                                children: (0, s.jsx)(
                                                  es,
                                                  {
                                                    text: t4.text,
                                                    terms: Q2.trim().toLowerCase() === ei2.trim().toLowerCase() ? [] : X(Q2)
                                                  }
                                                )
                                              }),
                                              (0, s.jsx)(y.A, {
                                                className: O().menuEnter,
                                                size: 14,
                                                strokeWidth: 1.75,
                                                "aria-hidden": "true"
                                              })
                                            ]
                                          },
                                          t4.id
                                        );
                                      })
                                    })
                                  ]
                                },
                                e3
                              ) : null;
                            })
                          })
                        },
                        "menu"
                      ) : null
                    })
                  ]
                }),
                (0, s.jsx)(k.Xn, {
                  open: ez,
                  onOpenChange: eE,
                  title: "Filters",
                  detents: [0.9],
                  trigger: (0, s.jsxs)("button", {
                    type: "button",
                    className: O().filterButton,
                    "aria-label": eH ? `Filters, ${eH} applied` : "Filters",
                    children: [
                      (0, s.jsx)(_.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Filters",
                      eH ? (0, s.jsx)("span", {
                        className: O().filterBadge,
                        children: eH
                      }) : null
                    ]
                  }),
                  children: (0, s.jsxs)("div", {
                    className: O().sheetFacets,
                    children: [
                      (0, s.jsx)(el, {
                        idPrefix: `${S2}-sheet`,
                        inSheet: true,
                        ...e7
                      }),
                      (0, s.jsxs)("div", {
                        className: O().sheetFooter,
                        children: [
                          (0, s.jsx)(N.$, {
                            variant: "secondary",
                            onClick: eX,
                            disabled: !eH,
                            children: "Clear all"
                          }),
                          (0, s.jsx)(N.$, {
                            variant: "primary",
                            className: O().sheetDone,
                            onClick: () => eE(false),
                            children: 1 === eO.length ? "Show 1 result" : `Show ${eO.length} results`
                          })
                        ]
                      })
                    ]
                  })
                })
              ]
            }),
            (0, s.jsxs)("div", {
              className: O().body,
              children: [
                (0, s.jsx)("aside", {
                  className: O().sidebar,
                  "aria-label": "Filters",
                  children: (0, s.jsx)(el, { idPrefix: `${S2}-side`, ...e7 })
                }),
                (0, s.jsxs)("div", {
                  ref: q2,
                  className: O().main,
                  children: [
                    (0, s.jsxs)("div", {
                      className: O().mainHead,
                      children: [
                        (0, s.jsx)("p", {
                          className: O().count,
                          children: ey ? (0, s.jsx)("span", {
                            className: O().countLoading,
                            children: "Searching"
                          }) : (0, s.jsxs)(s.Fragment, {
                            children: [
                              (0, s.jsx)("span", {
                                className: O().countValue,
                                children: (0, s.jsx)(ec, {
                                  value: eO.length
                                })
                              }),
                              (0, s.jsx)("span", {
                                children: 1 === eO.length ? " result" : " results"
                              }),
                              (0, s.jsxs)("span", {
                                className: O().countTime,
                                children: [
                                  " in ",
                                  (0, s.jsx)("span", {
                                    className: O().num,
                                    children: eK.toFixed(2)
                                  }),
                                  " seconds"
                                ]
                              })
                            ]
                          })
                        }),
                        (0, s.jsx)(A.A, {
                          label: "Sort results",
                          options: I,
                          value: ev,
                          onValueChange: (e3) => eb(e3),
                          className: O().sort
                        })
                      ]
                    }),
                    (0, s.jsx)("p", {
                      className: O().srOnly,
                      role: "status",
                      children: ey ? `Searching for ${ei2}` : `${eO.length} ${1 === eO.length ? "result" : "results"}${ei2 ? ` for ${ei2}` : ""}`
                    }),
                    (0, s.jsx)(l.N, {
                      initial: false,
                      children: eY.length ? (0, s.jsx)(
                        o.PY1.div,
                        {
                          className: O().chipsFrame,
                          initial: B2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                          animate: { height: "auto", opacity: 1 },
                          exit: B2 ? { opacity: 0, transition: { duration: 0 } } : {
                            height: 0,
                            opacity: 0,
                            transition: {
                              ...b.T.spring.smooth,
                              opacity: { duration: b.T.duration.exit }
                            }
                          },
                          transition: B2 ? { duration: 0 } : b.T.spring.smooth,
                          children: (0, s.jsx)("div", {
                            className: O().chips,
                            children: (0, s.jsx)(T.Us, {
                              filters: eY,
                              onRemove: (e3) => ek((t3) => {
                                if ("edited" === e3)
                                  return { ...t3, edited: [0, 12] };
                                let [a3, s2] = e3.split(":");
                                return "type" === a3 ? {
                                  ...t3,
                                  types: t3.types.filter(
                                    (e8) => e8 !== s2
                                  )
                                } : {
                                  ...t3,
                                  teams: t3.teams.filter(
                                    (e8) => e8 !== s2
                                  )
                                };
                              }),
                              onClearAll: eX
                            })
                          })
                        },
                        "chips"
                      ) : null
                    }),
                    (0, s.jsx)("div", {
                      className: O().results,
                      "aria-busy": ey || void 0,
                      children: (0, s.jsx)(l.N, {
                        mode: "popLayout",
                        initial: false,
                        children: ey ? (0, s.jsx)(
                          o.PY1.div,
                          {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: {
                              opacity: 0,
                              transition: {
                                duration: B2 ? 0 : b.T.duration.exit
                              }
                            },
                            transition: e6,
                            children: (0, s.jsx)(ep, {})
                          },
                          "loading"
                        ) : eO.length ? (0, s.jsxs)(
                          o.PY1.div,
                          {
                            initial: B2 ? { opacity: 0 } : { opacity: 0, y: 6 },
                            animate: { opacity: 1, y: 0 },
                            exit: {
                              opacity: 0,
                              transition: {
                                duration: B2 ? 0 : b.T.duration.exit
                              }
                            },
                            transition: e6,
                            children: [
                              (0, s.jsx)(d.o, {
                                id: `${S2}-cursor-${eU}`,
                                children: (0, s.jsx)("ul", {
                                  ref: (e3) => {
                                    e3 && (W2.current = e3);
                                  },
                                  className: O().list,
                                  role: "listbox",
                                  tabIndex: 0,
                                  "aria-label": ei2 ? `Results for ${ei2}` : "Results",
                                  "aria-activedescendant": eI ? `${S2}-r-${eI.id}` : void 0,
                                  onKeyDown: (e3) => {
                                    let t3 = e3.key;
                                    "ArrowDown" === t3 || "j" === t3 ? (e3.preventDefault(), e0(eV + 1)) : "ArrowUp" === t3 || "k" === t3 ? (e3.preventDefault(), eV <= 0 ? R2.current?.focus() : e0(eV - 1)) : "Home" === t3 ? (e3.preventDefault(), e0(0)) : "End" === t3 ? (e3.preventDefault(), e0(eO.length - 1)) : "Enter" === t3 || " " === t3 ? (e3.preventDefault(), eI && eQ(eI)) : ("Escape" === t3 || "/" === t3) && (e3.preventDefault(), R2.current?.focus(), R2.current?.select());
                                  },
                                  onFocus: () => eT(true),
                                  onBlur: () => eT(false),
                                  "data-focused": eC ? "" : void 0,
                                  children: eO.map((e3) => {
                                    let t3 = e3.id === eI?.id, a3 = "doc" === e3.kind ? {
                                      who: F(e3.author),
                                      text: `edited ${J(e3.updated, p2, true)}`
                                    } : "file" === e3.kind ? {
                                      who: F(e3.owner),
                                      text: `uploaded ${J(e3.updated, p2, true)}`
                                    } : null;
                                    return (0, s.jsxs)(
                                      "li",
                                      {
                                        id: `${S2}-r-${e3.id}`,
                                        role: "option",
                                        "aria-selected": t3,
                                        className: O().result,
                                        "data-active": t3 ? "" : void 0,
                                        "data-kind": e3.kind,
                                        onClick: () => eQ(e3),
                                        children: [
                                          t3 ? (0, s.jsx)(o.PY1.span, {
                                            layoutId: "cursor",
                                            className: O().cursor,
                                            transition: e9,
                                            "aria-hidden": "true"
                                          }) : null,
                                          (0, s.jsx)("span", {
                                            className: O().lead,
                                            children: (0, s.jsx)(er, {
                                              result: e3
                                            })
                                          }),
                                          (0, s.jsxs)("span", {
                                            className: O().content,
                                            children: [
                                              (0, s.jsx)("span", {
                                                className: O().titleRow,
                                                children: (0, s.jsx)(
                                                  "span",
                                                  {
                                                    className: O().title,
                                                    children: (0, s.jsx)(
                                                      es,
                                                      {
                                                        text: e3.title,
                                                        terms: eD
                                                      }
                                                    )
                                                  }
                                                )
                                              }),
                                              (0, s.jsx)("span", {
                                                className: O().meta,
                                                children: eo(e3, eB)
                                              }),
                                              (0, s.jsx)("span", {
                                                className: O().snippet,
                                                children: (0, s.jsx)(es, {
                                                  text: e3.snippet,
                                                  terms: eD
                                                })
                                              }),
                                              a3 ? (0, s.jsxs)("span", {
                                                className: O().foot,
                                                children: [
                                                  (0, s.jsx)(j.e, {
                                                    name: a3.who.name,
                                                    src: a3.who.src,
                                                    size: "sm",
                                                    className: O().footAvatar,
                                                    "aria-hidden": "true"
                                                  }),
                                                  (0, s.jsxs)(
                                                    "span",
                                                    {
                                                      children: [
                                                        a3.who.name,
                                                        " ",
                                                        a3.text
                                                      ]
                                                    }
                                                  )
                                                ]
                                              }) : "person" === e3.kind ? (0, s.jsx)("span", {
                                                className: O().foot,
                                                children: (0, s.jsx)("span", {
                                                  children: e3.email
                                                })
                                              }) : null
                                            ]
                                          })
                                        ]
                                      },
                                      e3.id
                                    );
                                  })
                                })
                              }),
                              (0, s.jsxs)("p", {
                                className: O().keys,
                                "aria-hidden": "true",
                                children: [
                                  (0, s.jsx)("kbd", { children: "\u2191" }),
                                  (0, s.jsx)("kbd", { children: "\u2193" }),
                                  " to move, ",
                                  (0, s.jsx)("kbd", { children: "\u21B5" }),
                                  " to open, ",
                                  (0, s.jsx)("kbd", { children: "/" }),
                                  " to search"
                                ]
                              })
                            ]
                          },
                          eU
                        ) : (0, s.jsx)(
                          o.PY1.div,
                          {
                            className: O().emptyWrap,
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: {
                              opacity: 0,
                              transition: {
                                duration: B2 ? 0 : b.T.duration.exit
                              }
                            },
                            transition: e6,
                            children: (0, s.jsx)(C.p, {
                              icon: (0, s.jsx)(v.A, {
                                width: 24,
                                height: 24,
                                strokeWidth: 1.5
                              }),
                              title: ei2 ? `No results for \u201C${ei2}\u201D` : "Nothing matches these filters",
                              description: e5 ? `Your filters hide ${1 === e5 ? "1 result" : `${e5} results`}. Clear them to see everything that matches.` : e22 ? "Check the spelling, or try one of these searches." : "Try a broader word, or one of these searches.",
                              action: (0, s.jsxs)("div", {
                                className: O().emptyActions,
                                children: [
                                  e5 ? (0, s.jsx)(N.$, {
                                    variant: "primary",
                                    size: "sm",
                                    onClick: eX,
                                    children: "Clear filters"
                                  }) : null,
                                  !e5 && e22 ? (0, s.jsxs)(N.$, {
                                    variant: "primary",
                                    size: "sm",
                                    onClick: () => eZ(e22),
                                    children: [
                                      "Search for \u201C",
                                      e22,
                                      "\u201D"
                                    ]
                                  }) : null,
                                  e5 ? null : n2.slice(0, 3).map(
                                    (e3) => (0, s.jsx)(
                                      N.$,
                                      {
                                        variant: "secondary",
                                        size: "sm",
                                        onClick: () => eZ(e3),
                                        children: e3
                                      },
                                      e3
                                    )
                                  )
                                ]
                              })
                            })
                          },
                          `empty-${eU}`
                        )
                      })
                    })
                  ]
                }),
                (0, s.jsx)("aside", {
                  className: O().preview,
                  "aria-label": "Preview",
                  children: (0, s.jsx)(l.N, {
                    mode: "popLayout",
                    initial: false,
                    children: ey ? (0, s.jsxs)(
                      o.PY1.div,
                      {
                        className: O().previewSkeleton,
                        "aria-hidden": "true",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: {
                          opacity: 0,
                          transition: {
                            duration: B2 ? 0 : b.T.duration.exit
                          }
                        },
                        children: [
                          (0, s.jsx)("span", {
                            className: O().bone,
                            style: { width: "70%", height: 18 }
                          }),
                          (0, s.jsx)("span", {
                            className: O().bone,
                            style: { width: "45%", height: 10 }
                          }),
                          (0, s.jsx)("span", {
                            className: O().bone,
                            style: {
                              width: "100%",
                              height: 10,
                              marginTop: 12
                            }
                          }),
                          (0, s.jsx)("span", {
                            className: O().bone,
                            style: { width: "92%", height: 10 }
                          }),
                          (0, s.jsx)("span", {
                            className: O().bone,
                            style: { width: "64%", height: 10 }
                          })
                        ]
                      },
                      "loading"
                    ) : eI ? (0, s.jsx)(
                      o.PY1.div,
                      {
                        initial: B2 ? { opacity: 0 } : { opacity: 0, y: 6 },
                        animate: { opacity: 1, y: 0 },
                        exit: {
                          opacity: 0,
                          transition: {
                            duration: B2 ? 0 : b.T.duration.instant
                          }
                        },
                        transition: e6,
                        children: (0, s.jsx)(ed, {
                          result: eI,
                          terms: eD,
                          today: p2,
                          teamLabel: eB,
                          onOpen: $2
                        })
                      },
                      eI.id
                    ) : (0, s.jsx)(
                      o.PY1.p,
                      {
                        className: O().previewEmpty,
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        children: eO.length ? "Select a result to preview it here" : "Nothing to preview"
                      },
                      "none"
                    )
                  })
                })
              ]
            })
          ]
        }),
        (0, s.jsx)(k.Xn, {
          open: eS && !eA && !!eI,
          onOpenChange: eL,
          title: eI ? "doc" === eI.kind ? "Doc" : "person" === eI.kind ? "Person" : "File" : "Preview",
          detents: [0.62, 0.92],
          children: eI ? (0, s.jsx)("div", {
            className: O().sheetPreview,
            children: (0, s.jsx)(
              ed,
              { result: eI, terms: eD, today: p2, teamLabel: eB, onOpen: $2 },
              eI.id
            )
          }) : (0, s.jsx)("span", {})
        })
      ]
    });
  }
  let em = eu;
}

__m(__module,__exports,__require);
}