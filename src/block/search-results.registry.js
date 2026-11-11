/* search-results (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(6923, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "clock",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(8117, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var n = a(51811);
  let r = {
    name: "presentation",
    size: 24,
    node: [
      ["path", { d: "M2 3h20", key: "91anmk" }],
      [
        "path",
        { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3", key: "2k9sn8" }
      ],
      ["path", { d: "m7 21 5-5 5 5", key: "bip4we" }]
    ]
  };
  r.node;
  let d = (0, n.A)(r);
}

__m(__module,__exports,__require);
});
A.reg(14225, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "folder",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
          key: "1kt360"
        }
      ]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(20530, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { S: () => c });
  var a = i(95155), r = i(12115), n = i(47279), s = i(18310), o = i(25354), l = i(7770), d = i(42842), u = i.n(d);
  let c = (0, r.forwardRef)(function({
    label: e2,
    description: t2,
    id: i2,
    className: d2,
    checked: c2,
    defaultChecked: p,
    onCheckedChange: m,
    ...h
  }, f) {
    let x = (0, r.useId)(), _ = i2 ?? x, y = (0, s.I)(), [b, g] = (0, r.useState)(p ?? false), j = c2 ?? b, v = false !== j, w = {
      duration: v ? l.T.duration.instant : l.T.duration.fast,
      ease: [...l.T.ease.standard]
    };
    return (0, a.jsxs)("div", {
      className: u().field,
      children: [
        (0, a.jsx)(n.bL, {
          ...h,
          id: _,
          ref: f,
          checked: j,
          onCheckedChange: (e3) => {
            void 0 === c2 && g(e3), m?.(e3);
          },
          className: [u().box, d2].filter(Boolean).join(" "),
          "aria-describedby": t2 ? `${_}-description` : void 0,
          "aria-label": h["aria-label"] ?? (e2 ? void 0 : "Checkbox"),
          children: (0, a.jsxs)("span", {
            className: u().visual,
            "aria-hidden": "true",
            children: [
              (0, a.jsx)(o.PY1.span, {
                className: u().fill,
                initial: false,
                animate: { opacity: +!!v, scale: v ? 1 : 0.6 },
                transition: y ? { duration: 0 } : { scale: l.T.spring.snappy, opacity: w }
              }),
              (0, a.jsx)("svg", {
                className: u().mark,
                viewBox: "0 0 18 18",
                fill: "none",
                focusable: "false",
                children: (0, a.jsx)(o.PY1.path, {
                  initial: false,
                  animate: {
                    d: "indeterminate" === j ? "M4.75 9 L9 9 L13.25 9" : "M4.25 9.25 L7.25 12.25 L13.75 5.75",
                    pathLength: +!!v,
                    opacity: +!!v
                  },
                  transition: y ? { duration: 0 } : {
                    d: l.T.spring.morph,
                    pathLength: l.T.spring.snappy,
                    opacity: w
                  },
                  stroke: "currentColor",
                  strokeWidth: 1.75,
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                })
              })
            ]
          })
        }),
        e2 || t2 ? (0, a.jsxs)("div", {
          className: u().copy,
          children: [
            e2 ? (0, a.jsx)("label", { htmlFor: _, children: e2 }) : null,
            t2 ? (0, a.jsx)("span", { id: `${_}-description`, children: t2 }) : null
          ]
        }) : null
      ]
    });
  });
  c.displayName = "Checkbox";
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
A.reg(31458, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => i });
  var s = t(51811);
  let r = {
    name: "file-spreadsheet",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
          key: "1oefj6"
        }
      ],
      ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
      ["path", { d: "M8 13h2", key: "yr2amv" }],
      ["path", { d: "M14 13h2", key: "un5t4a" }],
      ["path", { d: "M8 17h2", key: "2yhykz" }],
      ["path", { d: "M14 17h2", key: "10kma7" }]
    ]
  };
  r.node;
  let i = (0, s.A)(r);
}

__m(__module,__exports,__require);
});
A.regCss(34050, ".overlay{position:fixed;inset:0;z-index:50;background:oklch(16% 0 0/.34)}\n:root[data-theme=dark] .overlay{background:oklch(0 0 0/.52)}\n.overlay[data-state=closed],.sheet[data-state=closed]{pointer-events:none!important}\n.sheet{position:fixed;z-index:51;right:0;bottom:calc(var(--sheet-extension) * -1);left:0;display:flex;flex-direction:column;width:min(100%,36rem);height:calc(var(--sheet-max) * 100vh + var(--sheet-extension));height:calc(var(--sheet-max) * 100dvh + var(--sheet-extension));margin-inline:auto;overflow:hidden;padding-bottom:calc(var(--sheet-extension) + env(safe-area-inset-bottom, 0px));border:1px solid var(--border);border-bottom:0;border-radius:var(--radius-surface) var(--radius-surface) 0 0;background:var(--surface-raised);color:var(--foreground);box-shadow:var(--shadow-floating);font-family:var(--font-body);letter-spacing:var(--tracking-body);outline:none;will-change:transform}\n.sheet[data-dragging] .header{cursor:grabbing}\n.sheet[data-scrolled] .header:after{opacity:1}\n.sheet[data-dragging] .grabberBar{background:var(--text-muted)}\n.sheet:not([data-expanded]) .body{overflow:hidden;touch-action:none}\n.header{position:relative;flex:none;padding:var(--space-2) var(--space-5) var(--space-4);cursor:grab;touch-action:none;user-select:none;-webkit-user-select:none}\n.header:after{position:absolute;right:0;bottom:0;left:0;height:1px;background:var(--border);content:\"\";opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}\n@media (max-width:40rem){.body,.header{padding-inline:var(--space-4)}\n@media (prefers-reduced-motion:reduce){.close,.grabberBar,.header:after{transition:none}\n.grabber{display:flex;width:3.5rem;height:1.25rem;align-items:center;justify-content:center;margin:0 auto var(--space-1);padding:0;border:0;border-radius:var(--radius-pill);background:transparent;cursor:inherit;-webkit-tap-highlight-color:transparent}\n@media (hover:hover) and (pointer:fine){.grabber:hover .grabberBar{background:var(--text-muted)}\n.grabberBar{width:2.25rem;height:5px;border-radius:var(--radius-pill);background:var(--border-strong);transition:background-color var(--duration-fast) var(--ease-standard)}\n.headRow{display:flex;align-items:flex-start;justify-content:space-between;gap:var(--space-4)}\n.headText{min-width:0}\n.title{margin:0;font-family:var(--font-body);font-size:var(--text-lg);font-weight:500;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.description{margin:2px 0 0;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.close{display:grid;flex:none;width:2rem;height:2rem;place-items:center;margin-top:-2px;padding:0;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface-muted);color:var(--text-secondary);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.close:hover{color:var(--foreground);border-color:var(--border-strong)}\n.close:active{color:var(--foreground)}\n.body{flex:1 1 auto;min-height:0;overflow-y:auto;padding:var(--space-1) var(--space-5) var(--space-6);overscroll-behavior:contain;scrollbar-width:thin;touch-action:pan-y;font-size:var(--text-sm);line-height:var(--leading-body)}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"overlay":"overlay","sheet":"sheet","header":"header","grabberBar":"grabberBar","body":"body","close":"close","grabber":"grabber","headRow":"headRow","headText":"headText","title":"title","description":"description","srOnly":"srOnly"});
A.reg(34594, function(__module,__exports,__require){
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
});
A.reg(37058, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => o });
  var n = r(51811);
  let a = {
    name: "search-x",
    size: 24,
    node: [
      ["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }],
      ["path", { d: "m8.5 8.5 5 5", key: "a8mexj" }],
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
    ]
  };
  a.node;
  let o = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.regCss(42842, ".field{display:inline-flex;align-items:flex-start;gap:0;min-width:0}\n.box{position:relative;flex:0 0 auto;display:grid;place-items:center;width:var(--control-height-md);height:var(--control-height-md);border:0;border-radius:var(--radius-control);padding:0;background:transparent;color:var(--control-glyph);cursor:pointer;-webkit-tap-highlight-color:transparent}\n.box[data-state=checked] .visual,.box[data-state=indeterminate] .visual{border-color:var(--control-on)}\n@media (hover:hover) and (pointer:fine){.box[data-state=unchecked]:hover:not(:disabled) .visual{border-color:var(--text-muted)}\n.box:active:not(:disabled) .visual{transform:scale(.95);transition:border-color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.box:disabled{opacity:.5;cursor:not-allowed}\n@media (prefers-reduced-motion:reduce){.box:active:not(:disabled) .visual,.visual{transition:none;transform:none}\n.visual{position:relative;display:block;width:18px;height:18px;border:1px solid var(--border-strong);border-radius:5px;background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.fill{position:absolute;inset:-1px;border-radius:inherit;background:var(--control-on)}\n.mark{position:absolute;inset:-1px;width:18px;height:18px;overflow:visible}\n.copy{display:grid;gap:2px;min-width:0;margin-left:1px;padding-top:calc((var(--control-height-md) - var(--text-sm) * 1.4) / 2)}\n.copy label{color:var(--foreground);font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);cursor:pointer}\n.copy span{color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}", {});
A.reg(43146, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, {
    UC: () => G,
    VY: () => W,
    ZL: () => P,
    bL: () => D,
    bm: () => K,
    hE: () => F,
    hJ: () => _,
    l9: () => z
  });
  var r = n(12115), o = n(70379), l = n(47527), a = n(68599), i = n(89971), d = n(59322), u = n(19416), c = n(69885), s = n(19040), f = n(83935), p = n(55897), y = n(32007), h = n(66294), m = n(5174), g = n(22954), x = n(42442), v = n(95155), k = Object.defineProperty, M = (e2, t2) => k(e2, "name", { value: t2, configurable: true }), A = "Dialog", [w, b] = (0, a.A)(A), [j, C] = w(A), D = M((e2) => {
    let {
      __scopeDialog: t2,
      children: n2,
      open: o2,
      defaultOpen: l2,
      onOpenChange: a2,
      modal: u2 = true
    } = e2, c2 = r.useRef(null), s2 = r.useRef(null), [f2, p2] = (0, d.i)({
      prop: o2,
      defaultProp: l2 ?? false,
      onChange: a2,
      caller: A
    }), [y2, h2] = r.useState(0), [m2, g2] = r.useState(0);
    return (0, v.jsx)(j, {
      scope: t2,
      triggerRef: c2,
      contentRef: s2,
      contentId: (0, i.B)(),
      titleId: (0, i.B)(),
      descriptionId: (0, i.B)(),
      titlePresent: y2 > 0,
      descriptionPresent: m2 > 0,
      setTitleCount: h2,
      setDescriptionCount: g2,
      open: f2,
      onOpenChange: p2,
      onOpenToggle: r.useCallback(() => p2((e3) => !e3), [p2]),
      modal: u2,
      children: n2
    });
  }, "Dialog"), z = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, a2 = C("DialogTrigger", n2), i2 = (0, l.s)(t2, a2.triggerRef);
      return (0, v.jsx)(p.sG.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a2.open,
        "aria-controls": a2.open ? a2.contentId : void 0,
        "data-state": B(a2.open),
        ...r2,
        ref: i2,
        onClick: (0, o.mK)(e2.onClick, a2.onOpenToggle)
      });
    }, "DialogTrigger")
  ), R = "DialogPortal", [E, O] = w(R, { forceMount: void 0 }), P = M((e2) => {
    let { __scopeDialog: t2, forceMount: n2, children: o2, container: l2 } = e2, a2 = C(R, t2);
    return (0, v.jsx)(E, {
      scope: t2,
      forceMount: n2,
      children: r.Children.map(
        o2,
        (e3) => (0, v.jsx)(f.C, {
          present: n2 || a2.open,
          children: (0, v.jsx)(s.Z, {
            asChild: true,
            container: l2,
            children: e3
          })
        })
      )
    });
  }, "DialogPortal"), I = "DialogOverlay", _ = r.forwardRef(
    M(function(e2, t2) {
      let n2 = O(I, e2.__scopeDialog), { forceMount: r2 = n2.forceMount, ...o2 } = e2, l2 = C(I, e2.__scopeDialog);
      return l2.modal ? (0, v.jsx)(f.C, {
        present: r2 || l2.open,
        children: (0, v.jsx)(T, { ...o2, ref: t2 })
      }) : null;
    }, "DialogOverlay")
  ), S = (0, x.TL)("DialogOverlay.RemoveScroll"), T = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, o2 = C(I, n2), a2 = (0, u.e0)(), i2 = (0, l.s)(t2, a2);
      return (0, v.jsx)(m.A, {
        as: S,
        allowPinchZoom: true,
        shards: [o2.contentRef],
        children: (0, v.jsx)(p.sG.div, {
          "data-state": B(o2.open),
          ...r2,
          ref: i2,
          style: { pointerEvents: "auto", ...r2.style }
        })
      });
    }, "DialogOverlayImpl")
  ), q = "DialogContent", G = r.forwardRef(
    M(function(e2, t2) {
      let n2 = O(q, e2.__scopeDialog), { forceMount: r2 = n2.forceMount, ...o2 } = e2, l2 = C(q, e2.__scopeDialog);
      return (0, v.jsx)(f.C, {
        present: r2 || l2.open,
        children: l2.modal ? (0, v.jsx)(L, { ...o2, ref: t2 }) : (0, v.jsx)(H, { ...o2, ref: t2 })
      });
    }, "DialogContent")
  ), L = r.forwardRef(
    M(function(e2, t2) {
      let n2 = C(q, e2.__scopeDialog), a2 = r.useRef(null), i2 = (0, l.s)(t2, n2.contentRef, a2);
      return r.useEffect(() => {
        let e3 = a2.current;
        if (e3) return (0, g.Eq)(e3);
      }, []), (0, v.jsx)(V, {
        ...e2,
        ref: i2,
        trapFocus: n2.open,
        disableOutsidePointerEvents: n2.open,
        onCloseAutoFocus: (0, o.mK)(e2.onCloseAutoFocus, (e3) => {
          e3.preventDefault(), n2.triggerRef.current?.focus();
        }),
        onPointerDownOutside: (0, o.mK)(e2.onPointerDownOutside, (e3) => {
          let t3 = e3.detail.originalEvent, n3 = 0 === t3.button && true === t3.ctrlKey;
          (2 === t3.button || n3) && e3.preventDefault();
        }),
        onFocusOutside: (0, o.mK)(
          e2.onFocusOutside,
          (e3) => e3.preventDefault()
        )
      });
    }, "DialogContentModal")
  ), H = r.forwardRef(
    M(function(e2, t2) {
      let n2 = C(q, e2.__scopeDialog), o2 = r.useRef(false), l2 = r.useRef(false);
      return (0, v.jsx)(V, {
        ...e2,
        ref: t2,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (t3) => {
          e2.onCloseAutoFocus?.(t3), t3.defaultPrevented || (o2.current || n2.triggerRef.current?.focus(), t3.preventDefault()), o2.current = false, l2.current = false;
        },
        onInteractOutside: (t3) => {
          e2.onInteractOutside?.(t3), t3.defaultPrevented || (o2.current = true, "pointerdown" === t3.detail.originalEvent.type && (l2.current = true));
          let r2 = t3.target;
          n2.triggerRef.current?.contains(r2) && t3.preventDefault(), "focusin" === t3.detail.originalEvent.type && l2.current && t3.preventDefault();
        }
      });
    }, "DialogContentNonModal")
  ), V = r.forwardRef(
    M(function(e2, t2) {
      let {
        __scopeDialog: n2,
        trapFocus: r2,
        onOpenAutoFocus: o2,
        onCloseAutoFocus: l2,
        ...a2
      } = e2, i2 = C(q, n2);
      return (0, y.Oh)(), (0, v.jsx)(v.Fragment, {
        children: (0, v.jsx)(c.n, {
          asChild: true,
          loop: true,
          trapped: r2,
          onMountAutoFocus: o2,
          onUnmountAutoFocus: l2,
          children: (0, v.jsx)(u.qW, {
            role: "dialog",
            id: i2.contentId,
            "aria-describedby": i2.descriptionPresent ? i2.descriptionId : void 0,
            "aria-labelledby": i2.titlePresent ? i2.titleId : void 0,
            "data-state": B(i2.open),
            ...a2,
            ref: t2,
            deferPointerDownOutside: true,
            onDismiss: () => i2.onOpenChange(false)
          })
        })
      });
    }, "DialogContentImpl")
  ), F = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, o2 = C("DialogTitle", n2), { setTitleCount: l2 } = o2;
      return (0, h.N)(() => (l2((e3) => e3 + 1), () => l2((e3) => e3 - 1)), [l2]), (0, v.jsx)(p.sG.h2, { id: o2.titleId, ...r2, ref: t2 });
    }, "DialogTitle")
  ), W = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, o2 = C("DialogDescription", n2), { setDescriptionCount: l2 } = o2;
      return (0, h.N)(() => (l2((e3) => e3 + 1), () => l2((e3) => e3 - 1)), [l2]), (0, v.jsx)(p.sG.p, { id: o2.descriptionId, ...r2, ref: t2 });
    }, "DialogDescription")
  ), K = r.forwardRef(
    M(function(e2, t2) {
      let { __scopeDialog: n2, ...r2 } = e2, l2 = C("DialogClose", n2);
      return (0, v.jsx)(p.sG.button, {
        type: "button",
        ...r2,
        ref: t2,
        onClick: (0, o.mK)(e2.onClick, () => l2.onOpenChange(false))
      });
    }, "DialogClose")
  );
  function B(e2) {
    return e2 ? "open" : "closed";
  }
  M(B, "getState");
}

__m(__module,__exports,__require);
});
A.reg(47279, function(__module,__exports,__require){
"use strict";
function __m(e, t, i) {
  "use strict";
  i.d(t, { bL: () => g });
  var a = i(12115), r = i(47527), n = i(68599), s = i(70379), o = i(59322), l = i(63509), d = i(55897), u = i(95155), c = Object.defineProperty, p = (e2, t2) => c(e2, "name", { value: t2, configurable: true }), m = "Checkbox", [h, f] = (0, n.A)(m), [x, _] = h(m);
  function y(e2) {
    let {
      __scopeCheckbox: t2,
      checked: i2,
      children: r2,
      defaultChecked: n2,
      disabled: s2,
      form: l2,
      name: d2,
      onCheckedChange: c2,
      required: p2,
      value: h2 = "on",
      internal_do_not_use_render: f2
    } = e2, [_2, y2] = (0, o.i)({
      prop: i2,
      defaultProp: n2 ?? false,
      onChange: c2,
      caller: m
    }), [b2, g2] = a.useState(null), [j2, T2] = a.useState(null), k = a.useRef(false), [N, C] = a.useReducer((e3) => e3 + 1, 0), S = !b2 || !!l2 || !!b2.closest("form"), P = {
      checked: _2,
      disabled: s2,
      setChecked: y2,
      control: b2,
      setControl: g2,
      name: d2,
      form: l2,
      value: h2,
      hasConsumerStoppedPropagationRef: k,
      userInteractionCount: N,
      onUserInteraction: C,
      required: p2,
      defaultChecked: !w(n2) && n2,
      isFormControl: S,
      bubbleInput: j2,
      setBubbleInput: T2
    };
    return (0, u.jsx)(x, { scope: t2, ...P, children: v(f2) ? f2(P) : r2 });
  }
  p(y, "CheckboxProvider");
  var b = a.forwardRef(
    p(function({ __scopeCheckbox: e2, onKeyDown: t2, onClick: i2, ...n2 }, o2) {
      let {
        control: l2,
        value: c2,
        disabled: m2,
        checked: h2,
        required: f2,
        setControl: x2,
        setChecked: y2,
        hasConsumerStoppedPropagationRef: b2,
        onUserInteraction: g2,
        isFormControl: j2,
        bubbleInput: v2
      } = _("CheckboxTrigger", e2), k = (0, r.s)(o2, x2), N = a.useRef(h2);
      return a.useEffect(() => {
        let e3 = l2?.form;
        if (e3) {
          let t3 = p(() => y2(N.current), "reset");
          return e3.addEventListener("reset", t3), () => e3.removeEventListener("reset", t3);
        }
      }, [l2, y2]), (0, u.jsx)(d.sG.button, {
        type: "button",
        role: "checkbox",
        "aria-checked": w(h2) ? "mixed" : h2,
        "aria-required": f2,
        "data-state": T(h2),
        "data-disabled": m2 ? "" : void 0,
        disabled: m2,
        value: c2,
        ...n2,
        ref: k,
        onKeyDown: (0, s.mK)(t2, (e3) => {
          "Enter" === e3.key && e3.preventDefault();
        }),
        onClick: (0, s.mK)(i2, (e3) => {
          g2(), y2((e4) => !!w(e4) || !e4), v2 && j2 && (b2.current = e3.isPropagationStopped(), b2.current || e3.stopPropagation());
        })
      });
    }, "CheckboxTrigger")
  ), g = a.forwardRef(
    p(function(e2, t2) {
      let {
        __scopeCheckbox: i2,
        name: a2,
        checked: r2,
        defaultChecked: n2,
        required: s2,
        disabled: o2,
        value: l2,
        onCheckedChange: d2,
        form: c2,
        ...p2
      } = e2;
      return (0, u.jsx)(y, {
        __scopeCheckbox: i2,
        checked: r2,
        defaultChecked: n2,
        disabled: o2,
        required: s2,
        onCheckedChange: d2,
        name: a2,
        form: c2,
        value: l2,
        internal_do_not_use_render: ({ isFormControl: e3 }) => (0, u.jsxs)(u.Fragment, {
          children: [
            (0, u.jsx)(b, { ...p2, ref: t2, __scopeCheckbox: i2 }),
            e3 && (0, u.jsx)(j, { __scopeCheckbox: i2 })
          ]
        })
      });
    }, "Checkbox")
  ), j = a.forwardRef(
    p(function({ __scopeCheckbox: e2, onClick: t2, ...i2 }, n2) {
      let {
        control: o2,
        hasConsumerStoppedPropagationRef: c2,
        userInteractionCount: p2,
        checked: m2,
        defaultChecked: h2,
        required: f2,
        disabled: x2,
        name: y2,
        value: b2,
        form: g2,
        bubbleInput: j2,
        setBubbleInput: v2
      } = _("CheckboxBubbleInput", e2), T2 = (0, r.s)(n2, v2), k = (0, l.X)(o2), N = a.useRef(false), C = a.useRef(m2), S = a.useRef(p2);
      a.useEffect(() => {
        if (!j2) return;
        let e3 = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "checked"
        ).set, t3 = p2 !== S.current;
        S.current = p2;
        let i3 = C.current !== m2;
        C.current = m2;
        let a2 = !(t3 && c2.current);
        if (i3 && e3) {
          N.current = !t3;
          let i4 = new Event("click", { bubbles: a2 });
          j2.indeterminate = w(m2), e3.call(j2, !w(m2) && m2), j2.dispatchEvent(i4), N.current = false;
        }
      }, [j2, m2, c2, p2]);
      let P = a.useRef(!w(m2) && m2);
      return (0, u.jsx)(d.sG.input, {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: h2 ?? P.current,
        required: f2,
        disabled: x2,
        name: y2,
        value: b2,
        form: g2,
        ...i2,
        tabIndex: -1,
        ref: T2,
        onClick: (0, s.mK)(t2, (e3) => {
          N.current && e3.stopPropagation();
        }),
        style: {
          ...i2.style,
          ...k,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          transform: "translateX(-100%)"
        }
      });
    }, "CheckboxBubbleInput")
  );
  function v(e2) {
    return "function" == typeof e2;
  }
  function w(e2) {
    return "indeterminate" === e2;
  }
  function T(e2) {
    return w(e2) ? "indeterminate" : e2 ? "checked" : "unchecked";
  }
  p(v, "isFunction"), p(w, "isIndeterminate"), p(T, "getState");
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
A.regCss(59316, ".root{container-type:inline-size;container-name:search;position:relative;width:100%;height:820px;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body);isolation:isolate}\n.root :where(h3,p,ul,dl,dd,fieldset){margin:0}\n.root :where(ul){padding:0;list-style:none}\n.root :where(fieldset){min-width:0;padding:0;border:0}\n.root :where(legend){padding:0}\n.root :focus,.root :focus-visible{outline:none}\n@media (max-width:719px){.root{height:760px}\n.frame{display:grid;grid-template-columns:minmax(0,1fr);grid-template-rows:auto minmax(0,1fr);height:100%;min-height:0}\n.clearAll,.filterButton,.queryClear,.queryInput{font:inherit;letter-spacing:inherit;color:inherit;-webkit-tap-highlight-color:transparent}\n.queryInput{flex:1 1 auto;min-width:0;height:100%;padding:0;border:0;background:transparent;font-size:var(--text-base)}\n.queryInput::placeholder{color:var(--text-muted);opacity:1}\n.queryInput::-webkit-search-cancel-button{display:none}\n.queryInput{font-size:var(--text-base)}\n.queryClear{display:grid;flex:none;width:36px;height:36px;place-items:center;padding:0;border:0;border-radius:calc(var(--radius-control) - 6px);background:transparent;color:var(--text-muted);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.queryClear:hover{background:var(--surface-muted);color:var(--foreground)}\n.queryClear{width:40px;height:40px}\n.clearAll,.menuEnter,.menuRow,.option,.queryClear,.query,.result:before,.slash{transition:none}\n.clearAll{min-height:28px;padding:0 var(--space-2);margin-right:calc(var(--space-2) * -1);border:0;border-radius:10px;background:transparent;color:var(--text-secondary);cursor:pointer;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.clearAll:disabled{cursor:default}\n@media (hover:hover) and (pointer:fine){.clearAll:not(:disabled):hover{background:var(--surface-muted);color:var(--foreground)}\n.filterButton{position:relative;display:none;flex:none;align-items:center;gap:var(--space-2);height:var(--control-height-lg);padding:0 var(--space-4);border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);font-weight:500;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard)}\n.filterButton:active{background:var(--surface-muted)}\n.filterButton{display:inline-flex;height:var(--control-height-md);padding:0 var(--space-3)}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.num{font-variant-numeric:tabular-nums}\n.top{position:relative;z-index:5;display:flex;align-items:center;gap:var(--space-3);padding:var(--space-4) var(--space-6);border-bottom:1px solid var(--border-subtle)}\n@container search (max-width: 679px){.top{padding:var(--space-3) var(--space-4);gap:var(--space-2)}\n.queryWrap{position:relative;flex:1 1 auto;min-width:0}\n.query{display:flex;align-items:center;gap:var(--space-2);height:var(--control-height-lg);padding:0 var(--space-2) 0 var(--space-4);border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface-muted);transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.query:focus-within{border-color:var(--border-strong);background:var(--surface)}\n@media (hover:hover) and (pointer:fine){.query:hover:not(:focus-within){border-color:var(--border-strong)}\n.query:focus-within .slash{opacity:0}\n.query{height:var(--control-height-md);padding-left:var(--space-3)}\n.queryIcon{flex:none;color:var(--text-muted)}\n.slash{display:inline-grid;flex:none;place-items:center;min-width:24px;height:24px;margin-right:var(--space-2);padding:0 6px;border:1px solid var(--border);border-radius:7px;background:var(--surface);color:var(--text-muted);font-family:var(--font-body);font-size:var(--text-xs);line-height:1;transition:opacity var(--duration-fast) var(--ease-standard)}\n.slash{display:none}\n.menu{position:absolute;top:calc(100% + 6px);left:0;width:min(100%,560px);z-index:30;padding:6px;border:1px solid var(--border);border-radius:calc(var(--radius-panel) - 6px);background:var(--surface-raised);box-shadow:var(--shadow-floating);transform-origin:top center}\n.menuList{display:grid;gap:6px}\n.menuGroup{display:grid;gap:2px}\n.menuLabel{padding:6px 10px 2px;color:var(--text-muted);font-size:var(--text-xs)}\n.menuRows{display:grid;gap:2px}\n.menuRow{display:flex;align-items:center;gap:var(--space-3);min-height:40px;padding:0 var(--space-3);border-radius:calc(var(--radius-panel) - 12px);color:var(--text-secondary);cursor:pointer;transition:background-color var(--duration-instant) var(--ease-standard),color var(--duration-instant) var(--ease-standard)}\n.menuRow[data-active]{background:var(--surface-muted);color:var(--foreground)}\n.menuRow[data-active] .menuEnter{opacity:1}\n.menuRow{min-height:44px}\n.menuText{flex:1 1 auto;min-width:0;overflow:hidden;color:var(--foreground);text-overflow:ellipsis;white-space:nowrap}\n.menuEnter{flex:none;color:var(--text-muted);opacity:0;transition:opacity var(--duration-instant) var(--ease-standard)}\n.filterBadge{display:inline-grid;place-items:center;min-width:20px;height:20px;padding:0 6px;border-radius:var(--radius-pill);background:var(--control-on);color:var(--control-glyph);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.body{display:grid;grid-template-columns:252px minmax(0,1fr) 344px;min-height:0}\n@container search (max-width: 1119px){.body{grid-template-columns:236px minmax(0,1fr)}\n.body{grid-template-columns:minmax(0,1fr)}\n.sidebar{min-height:0;overflow-y:auto;padding:var(--space-5) var(--space-5) var(--space-6) var(--space-6);border-right:1px solid var(--border-subtle);scrollbar-width:thin}\n.sidebar{display:none}\n.main{position:relative;padding:0 var(--space-5) var(--space-6);overscroll-behavior:contain}\n.main,.preview{min-width:0;min-height:0;overflow-y:auto;scrollbar-width:thin}\n.main{padding:0 var(--space-2) var(--space-5)}\n.preview{padding:var(--space-6);border-left:1px solid var(--border-subtle)}\n.preview{display:none}\n.facets{display:grid;align-content:start;gap:var(--space-6)}\n.facetsHead{display:flex;align-items:center;justify-content:space-between;gap:var(--space-3);min-height:28px}\n.facetsTitle{font-size:var(--text-base);font-weight:500}\n.group{display:grid;gap:var(--space-2)}\n.legend{margin-bottom:var(--space-1);color:var(--text-muted);font-size:var(--text-xs)}\n.options{display:grid}\n.option{display:flex;align-items:center;justify-content:space-between;gap:var(--space-3);min-width:0;margin:-5px 0 -5px -13px;transition:opacity var(--duration-fast) var(--ease-standard)}\n.option[data-empty]{opacity:.7}\n.option>:first-child{min-width:0}\n.sheetFacets .option{margin-block:0}\n.optionCount{flex:none;min-width:2ch;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;text-align:right}\n.hint{color:var(--text-muted);font-size:var(--text-xs)}\n.mainHead{position:sticky;top:0;z-index:3;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--space-2) var(--space-4);padding:var(--space-4) var(--space-1) var(--space-3);background:var(--surface)}\n.mainHead{padding:var(--space-3) var(--space-2) var(--space-3)}\n.count{display:inline-flex;align-items:baseline;flex-wrap:wrap;min-height:20px;color:var(--text-secondary);white-space:nowrap}\n.countValue{color:var(--foreground);font-weight:500;font-variant-numeric:tabular-nums}\n.countValue+span{color:var(--foreground);font-weight:500;white-space:pre}\n.countTime{color:var(--text-muted);white-space:pre}\n.countLoading{color:var(--text-muted)}\n.roll{position:relative;display:inline-flex;overflow:hidden;margin-block:-.15em;padding-block:.15em}\n.rollValue{display:inline-block}\n.sort{flex:none}\n.chipsFrame{overflow:hidden}\n.chips{padding:0 var(--space-1) var(--space-3)}\n.chips{padding-inline:var(--space-2)}\n.results{position:relative}\n.list{display:grid;gap:2px;padding:0}\n.result{position:relative;isolation:isolate;scroll-margin-block:72px 16px;display:grid;grid-template-columns:40px minmax(0,1fr);gap:var(--space-4);padding:14px var(--space-4);border-radius:22px;cursor:pointer}\n.result:before{content:\"\";position:absolute;inset:0;z-index:-2;border-radius:inherit;background:var(--surface-muted);opacity:0;transition:opacity var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.result:not([data-active]):hover:before{opacity:.55}\n.result{gap:var(--space-3);padding:var(--space-3);border-radius:18px}\n.cursor{position:absolute;inset:0;z-index:-1;border-radius:inherit;background:var(--surface-muted)}\n.lead{display:grid;width:40px;height:40px;place-items:center}\n.glyph{display:grid;place-items:center;color:var(--text-secondary)}\n.brand{width:14px;height:21px}\n.previewGlyph .brand{width:16px;height:24px}\n.thumb{position:relative;display:block;width:40px;height:40px;overflow:hidden;border:1px solid var(--border-subtle);border-radius:calc(22px - var(--space-4) + 2px);background:var(--surface-muted)}\n.thumb img{object-fit:cover}\n.thumb{border-radius:8px}\n.leadAvatar{width:40px;height:40px}\n.content{display:grid;gap:2px;min-width:0}\n.titleRow{display:flex;align-items:baseline;gap:var(--space-3);min-width:0}\n.title{display:-webkit-box;flex:1 1 auto;min-width:0;overflow:hidden;font-size:var(--text-base);font-weight:500;overflow-wrap:anywhere;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2}\n.meta{overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap}\n.snippet{display:-webkit-box;margin-top:4px;overflow:hidden;color:var(--text-secondary);-webkit-box-orient:vertical;-webkit-line-clamp:2;line-clamp:2}\n.foot{display:flex;align-items:center;gap:6px;min-width:0;margin-top:6px;color:var(--text-muted);font-size:var(--text-xs)}\n.foot>span:last-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.foot .footAvatar{width:18px;height:18px;font-size:9px}\n.mark{padding:0 2px;margin:0 -1px;border-radius:5px;background:var(--accent-subtle);color:var(--accent-strong);-webkit-box-decoration-break:clone;box-decoration-break:clone}\n.keys{display:flex;flex-wrap:wrap;align-items:center;gap:4px;margin-top:var(--space-5);padding:0 var(--space-4);color:var(--text-muted);font-size:var(--text-xs)}\n.facts kbd,.keys kbd{display:inline-grid;place-items:center;min-width:20px;height:20px;padding:0 5px;border:1px solid var(--border);border-radius:6px;background:var(--surface);font-family:var(--font-body);font-size:var(--text-xs);line-height:1}\n.keys kbd+kbd{margin-left:-1px}\n.keys{display:none}\n.facts{display:grid;border-top:1px solid var(--border-subtle)}\n.facts>div{display:flex;align-items:center;justify-content:space-between;gap:var(--space-4);min-height:40px;border-bottom:1px solid var(--border-subtle)}\n.facts dt{flex:none;color:var(--text-muted)}\n.facts dd{min-width:0;text-align:right}\n.skeletons{display:grid;gap:2px}\n.skeletonRow{display:grid;grid-template-columns:40px minmax(0,1fr);gap:var(--space-4);padding:14px var(--space-4)}\n.skeletonRow{gap:var(--space-3);padding:var(--space-3)}\n.skeletonBody{display:grid;gap:8px;align-content:start;padding-top:3px}\n.skeletonBody>:nth-child(2){margin-bottom:4px}\n.bone{display:block;height:10px;border-radius:var(--radius-pill);background:var(--surface-muted);animation:pulse 1.4s var(--ease-in-out) infinite}\n@media (prefers-reduced-motion:reduce){.bone{animation:none}\n.boneSquare{width:24px;height:28px;margin:6px auto 0;border-radius:6px}\n.boneRound{width:40px;height:40px}\n.emptyWrap{display:grid;place-items:center;min-height:420px;padding:var(--space-8) var(--space-4)}\n.emptyWrap{min-height:360px;padding-inline:var(--space-2)}\n.emptyActions{display:flex;flex-wrap:wrap;justify-content:center;gap:var(--space-2)}\n.previewCard{display:grid;gap:var(--space-5)}\n.previewMedia{position:relative;aspect-ratio:4/3;overflow:hidden;border:1px solid var(--border-subtle);border-radius:18px;background:var(--surface-muted)}\n.previewMedia img{object-fit:cover}\n.previewHead{display:flex;align-items:flex-start;gap:var(--space-3);min-width:0}\n.previewGlyph{display:grid;flex:none;width:24px;height:28px;place-items:center;margin-top:1px;color:var(--text-secondary)}\n.previewTitles{display:grid;gap:2px;min-width:0}\n.previewTitle{font-size:var(--text-lg);font-weight:500;line-height:1.3;overflow-wrap:anywhere}\n.previewMeta{color:var(--text-muted);font-size:var(--text-xs)}\n.previewBody{display:grid;gap:var(--space-3);color:var(--text-secondary)}\n.factPerson{display:inline-flex;align-items:center;gap:8px}\n.factPerson>:first-child{width:22px;height:22px;font-size:9px}\n.factMuted{color:var(--text-muted)}\n.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.previewActions{display:flex;flex-wrap:wrap;gap:var(--space-2)}\n.previewSkeleton{display:grid;gap:10px}\n.previewEmpty{padding-top:var(--space-8);color:var(--text-muted);text-align:center}\n.sheetFacets{display:grid;gap:var(--space-6);padding-top:var(--space-2)}\n.sheetFooter{position:sticky;bottom:0;z-index:2;display:grid;grid-template-columns:auto minmax(0,1fr);gap:var(--space-2);margin-inline:calc(var(--space-5) * -1);padding:var(--space-3) var(--space-5) var(--space-4);border-top:1px solid var(--border-subtle);background:var(--surface-raised)}\n@media (max-width:40rem){.sheetFooter{margin-inline:calc(var(--space-4) * -1);padding-inline:var(--space-4)}\n.sheetDone{width:100%}\n.sheetPreview{padding-top:var(--space-1)}", {"root":"root","frame":"frame","clearAll":"clearAll","filterButton":"filterButton","queryClear":"queryClear","queryInput":"queryInput","menuEnter":"menuEnter","menuRow":"menuRow","option":"option","query":"query","result":"result","slash":"slash","srOnly":"srOnly","num":"num","top":"top","queryWrap":"queryWrap","queryIcon":"queryIcon","menu":"menu","menuList":"menuList","menuGroup":"menuGroup","menuLabel":"menuLabel","menuRows":"menuRows","menuText":"menuText","filterBadge":"filterBadge","body":"body","sidebar":"sidebar","main":"main","preview":"preview","facets":"facets","facetsHead":"facetsHead","facetsTitle":"facetsTitle","group":"group","legend":"legend","options":"options","sheetFacets":"sheetFacets","optionCount":"optionCount","hint":"hint","mainHead":"mainHead","count":"count","countValue":"countValue","countTime":"countTime","countLoading":"countLoading","roll":"roll","rollValue":"rollValue","sort":"sort","chipsFrame":"chipsFrame","chips":"chips","results":"results","list":"list","cursor":"cursor","lead":"lead","glyph":"glyph","brand":"brand","previewGlyph":"previewGlyph","thumb":"thumb","leadAvatar":"leadAvatar","content":"content","titleRow":"titleRow","title":"title","meta":"meta","snippet":"snippet","foot":"foot","footAvatar":"footAvatar","mark":"mark","keys":"keys","facts":"facts","skeletons":"skeletons","skeletonRow":"skeletonRow","skeletonBody":"skeletonBody","bone":"bone","boneSquare":"boneSquare","boneRound":"boneRound","emptyWrap":"emptyWrap","emptyActions":"emptyActions","previewCard":"previewCard","previewMedia":"previewMedia","previewHead":"previewHead","previewTitles":"previewTitles","previewTitle":"previewTitle","previewMeta":"previewMeta","previewBody":"previewBody","factPerson":"factPerson","factMuted":"factMuted","truncate":"truncate","previewActions":"previewActions","previewSkeleton":"previewSkeleton","previewEmpty":"previewEmpty","sheetFooter":"sheetFooter","sheetDone":"sheetDone","sheetPreview":"sheetPreview"});
A.reg(62360, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var n = a(51811);
  let r = {
    name: "film",
    size: 24,
    node: [
      [
        "rect",
        { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }
      ],
      ["path", { d: "M7 3v18", key: "bbkbws" }],
      ["path", { d: "M3 7.5h4", key: "zfgn84" }],
      ["path", { d: "M3 12h18", key: "1i2n21" }],
      ["path", { d: "M3 16.5h4", key: "1230mu" }],
      ["path", { d: "M17 3v18", key: "in4fa5" }],
      ["path", { d: "M17 7.5h4", key: "myr1c1" }],
      ["path", { d: "M17 16.5h4", key: "go4c1d" }]
    ]
  };
  r.node;
  let d = (0, n.A)(r);
}

__m(__module,__exports,__require);
});
A.regCss(66754, ".root{--slider-thumb:22px;--slider-track:6px;display:grid;width:100%;min-width:0;color:var(--foreground);font-size:var(--text-sm);line-height:var(--leading-body);letter-spacing:var(--tracking-body);user-select:none;-webkit-user-select:none}\n.root[data-dragging],.root[data-dragging] .control,.root[data-dragging] .thumb{cursor:grabbing}\n.root[data-disabled]{opacity:.5}\n.root[data-disabled] .control,.root[data-disabled] .markLabel,.root[data-disabled] .thumb{cursor:not-allowed}\n.header{display:flex;min-width:0;align-items:baseline;justify-content:space-between;gap:var(--space-4)}\n.label{min-width:0;font-weight:500}\n.readout{display:inline-flex;flex:none;align-items:center;gap:.3em;color:var(--text-secondary);font-variant-numeric:tabular-nums;white-space:nowrap}\n.dash{color:var(--text-muted)}\n.body{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center}\n.start{display:flex;grid-area:1/1;margin-right:var(--space-3)}\n.end{display:flex;grid-area:1/3;margin-left:var(--space-3)}\n.control{position:relative;grid-area:1/2;height:var(--control-height-md);cursor:pointer;touch-action:pan-y;-webkit-tap-highlight-color:transparent}\n.track{position:absolute;top:50%;right:calc(var(--slider-thumb) / 2);left:calc(var(--slider-thumb) / 2);height:var(--slider-track);margin-top:calc(var(--slider-track) / -2);border-radius:var(--radius-pill);background:var(--control-track)}\n.fill{position:absolute;inset:0;border-radius:inherit;background:var(--control-fill)}\n.fill .tick{background:color-mix(in oklab,var(--control-glyph) 60%,transparent)}\n.tick{position:absolute;top:50%;width:4px;height:4px;margin:-2px 0 0 -2px;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--foreground) 30%,transparent)}\n.thumbs{position:absolute;inset:0 calc(var(--slider-thumb) / 2);container-type:inline-size;pointer-events:none}\n.thumbLayer{position:absolute;inset:0}\n.thumb{position:absolute;top:50%;right:0;box-sizing:border-box;width:var(--slider-thumb);height:var(--slider-thumb);translate:50% -50%;border:0;border-radius:var(--radius-pill);background:var(--control-thumb);box-shadow:var(--control-thumb-shadow);pointer-events:auto;cursor:grab;transition:box-shadow var(--duration-fast) var(--ease-standard)}\n.thumb:after{content:\"\";position:absolute;inset:-11px;border-radius:inherit}\n@media (prefers-reduced-motion:reduce){.markLabel,.thumb{transition:none}\n.bubbleAnchor{--edge:calc(var(--slider-thumb) / 2);--x:calc(var(--at, 0) * 1cqw);position:absolute;right:0;bottom:calc(50% + var(--slider-thumb) / 2 + 8px);display:flex;translate:clamp(calc(100% - var(--edge) - var(--x)),50%,calc(100cqw + var(--edge) - var(--x))) 0;pointer-events:none}\n@media (pointer:coarse){.bubbleAnchor{bottom:calc(50% + var(--slider-thumb) / 2 + 18px)}\n.bubble{display:inline-flex;min-height:1.75rem;align-items:center;padding:0 var(--space-3);border:1px solid color-mix(in oklab,var(--background) 14%,var(--foreground));border-radius:var(--radius-pill);background:var(--foreground);color:var(--background);box-shadow:var(--shadow-raised);font-size:var(--text-sm);font-weight:500;white-space:nowrap;transform-origin:50% 100%}\n.marks{position:relative;grid-area:2/2;height:1.25rem;margin:calc(var(--space-1) * -1) calc(var(--slider-thumb) / 2) 0;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.markLabel{position:absolute;top:0;translate:-50% 0;white-space:nowrap;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}\n.markLabel[data-edge=start]{translate:max(-50%,calc(var(--slider-thumb) / -2)) 0}\n.markLabel[data-edge=end]{translate:min(-50%,calc(-100% + var(--slider-thumb) / 2)) 0}\n.markLabel[data-on]{color:var(--text-secondary)}\n@media (hover:hover) and (pointer:fine){.markLabel:hover{color:var(--foreground)}\n.number{display:inline-flex;align-items:center;white-space:nowrap;font-variant-numeric:tabular-nums}\n.column{--feather:.2em;position:relative;display:inline-block;overflow-x:visible;overflow-y:clip;margin-block:calc(var(--feather) * -1);padding-block:var(--feather);mask-image:linear-gradient(to bottom,transparent,#000 calc(var(--feather) * 1.5),#000 calc(100% - var(--feather) * 1.5),transparent)}\n.sizer{visibility:hidden}\n.glyph{position:absolute;inset:var(--feather) 0;text-align:center}\n.symbol{display:inline-block;overflow-x:clip;white-space:pre}", {});
A.reg(66828, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { Us: () => A });
  var n = r(95155), i = r(12115), a = r(76721), l = r(64577), o = r(2125), s = r(78780), c = r(9005), u = r(18310), d = r(28245), p = r(92171), f = r(25354), m = r(80642), h = r(79196), b = r(55809), y = r(7770), _ = r(69112), g = r.n(_);
  let x = { duration: y.T.duration.standard, ease: [...y.T.ease.enter] }, v = { duration: y.T.duration.instant, ease: [...y.T.ease.standard] }, j = { duration: 0 }, w = { duration: y.T.duration.instant, ease: [...y.T.ease.standard] }, T = (e2) => `blur(${e2}px)`, N = (e2) => Math.min(1, Math.max(0, e2)), k = (e2) => "string" == typeof e2 ? { value: e2 } : e2, R = (e2) => ({
    initial: e2 ? { opacity: 0 } : { opacity: 0, y: "0.3em", filter: T(y.T.blur.soft) },
    animate: { opacity: 1, y: 0, filter: T(0) },
    exit: e2 ? { opacity: 0, transition: j } : {
      opacity: 0,
      y: "-0.3em",
      filter: T(y.T.blur.subtle),
      transition: v
    },
    transition: e2 ? w : x
  });
  function S({ text: e2 }) {
    let t2 = (0, u.I)() ?? false, r2 = (0, i.useRef)(null), a2 = (0, d.d)("auto");
    return (0, i.useLayoutEffect)(() => {
      let e3 = r2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let n2 = null, i2 = new ResizeObserver(([r3]) => {
        if (!r3) return;
        let i3 = Math.ceil(
          r3.borderBoxSize?.[0]?.inlineSize ?? e3.offsetWidth
        ), l2 = null !== n2 && n2 !== e3.textContent;
        n2 = e3.textContent, l2 && !t2 ? (0, p.i)(a2, i3, y.T.spring.morph) : a2.jump(i3);
      });
      return i2.observe(e3), () => i2.disconnect();
    }, [t2, a2]), (0, n.jsxs)(f.PY1.span, {
      className: g().morphText,
      style: { width: a2 },
      children: [
        (0, n.jsx)("span", {
          ref: r2,
          className: g().measure,
          "aria-hidden": "true",
          children: e2
        }),
        (0, n.jsx)(m.N, {
          mode: "popLayout",
          initial: false,
          children: (0, n.jsx)(
            f.PY1.span,
            { className: g().morphValue, ...R(t2), children: e2 },
            e2
          )
        })
      ]
    });
  }
  function L({
    rows: e2,
    labelledBy: t2,
    onChoose: r2,
    onBack: a2,
    onLeave: l2,
    radio: o2
  }) {
    let s2 = (0, u.I)() ?? false, c2 = (0, h.tF)(), d2 = (0, i.useRef)(null), p2 = (0, i.useRef)(false), m2 = (0, i.useRef)({ text: "", at: 0 }), [b2, _2] = (0, i.useState)(
      () => Math.max(
        0,
        e2.findIndex((e3) => e3.checked)
      )
    ), [x2, v2] = (0, i.useState)(null), w2 = () => Array.from(d2.current?.querySelectorAll("[data-row]") ?? []);
    return (0, n.jsxs)("div", {
      ref: d2,
      className: g().list,
      role: "menu",
      "aria-labelledby": t2,
      "data-current": c2 ? "" : void 0,
      onKeyDown: function(t3) {
        let n2 = w2(), i2 = n2.indexOf(document.activeElement), l3 = (e3) => {
          var r3;
          let i3;
          t3.preventDefault(), p2.current = false, r3 = n2[e3], i3 = d2.current, r3 && i3 && (r3.focus({ preventScroll: true }), r3.offsetTop < i3.scrollTop ? i3.scrollTop = r3.offsetTop : r3.offsetTop + r3.offsetHeight > i3.scrollTop + i3.clientHeight && (i3.scrollTop = r3.offsetTop + r3.offsetHeight - i3.clientHeight));
        };
        if ("ArrowDown" === t3.key) return l3(i2 < 0 ? 0 : (i2 + 1) % n2.length);
        if ("ArrowUp" === t3.key)
          return l3(i2 < 0 ? n2.length - 1 : (i2 - 1 + n2.length) % n2.length);
        if ("Home" === t3.key) return l3(0);
        if ("End" === t3.key) return l3(n2.length - 1);
        if ("ArrowRight" === t3.key && i2 >= 0 && e2[i2]?.drill) {
          t3.preventDefault(), r2(e2[i2], true);
          return;
        }
        if ("ArrowLeft" === t3.key && a2) {
          t3.preventDefault(), a2(true);
          return;
        }
        if (1 === t3.key.length && /\S/.test(t3.key) && !t3.metaKey && !t3.ctrlKey && !t3.altKey) {
          let e3 = performance.now();
          m2.current = {
            text: e3 - m2.current.at < 700 ? m2.current.text + t3.key.toLowerCase() : t3.key.toLowerCase(),
            at: e3
          };
          let r3 = [
            ...n2.slice(i2 + (m2.current.text.length > 1 ? 0 : 1)),
            ...n2.slice(0, i2 + (m2.current.text.length > 1 ? 0 : 1))
          ].find(
            (e4) => (e4.dataset.text ?? "").toLowerCase().startsWith(m2.current.text)
          );
          r3 && l3(n2.indexOf(r3));
        }
      },
      onFocus: function(e3) {
        let t3 = e3.target.closest("[data-row]");
        if (!t3) return;
        _2(w2().indexOf(t3));
        let r3 = p2.current && !s2, n2 = !p2.current && t3.matches(":focus-visible");
        v2((e4) => ({
          top: t3.offsetTop,
          height: t3.offsetHeight,
          glide: r3 && !!e4?.shown,
          ring: n2,
          shown: true
        }));
      },
      onBlur: function(e3) {
        d2.current?.contains(e3.relatedTarget) || v2((e4) => e4 && { ...e4, glide: false, ring: false, shown: false });
      },
      onPointerLeave: () => {
        p2.current && d2.current?.contains(document.activeElement) && l2();
      },
      children: [
        (0, n.jsx)(f.PY1.span, {
          className: g().highlight,
          "data-ring": x2?.ring || void 0,
          "aria-hidden": "true",
          initial: false,
          animate: x2 ? { y: x2.top, height: x2.height, opacity: +!!x2.shown } : { opacity: 0 },
          transition: {
            default: x2?.glide ? y.T.spring.snappy : j,
            opacity: { duration: 0.08 * !s2 }
          }
        }),
        e2.map(
          (e3, t3) => (0, n.jsxs)(
            "button",
            {
              type: "button",
              className: g().item,
              role: o2 ? "menuitemradio" : "menuitem",
              "aria-checked": o2 ? !!e3.checked : void 0,
              tabIndex: t3 === b2 ? 0 : -1,
              "data-row": e3.key,
              "data-text": e3.label,
              onPointerMove: (e4) => {
                p2.current = true, document.activeElement !== e4.currentTarget && e4.currentTarget.focus({ preventScroll: true });
              },
              onClick: (t4) => r2(e3, 0 === t4.detail),
              children: [
                e3.icon ? (0, n.jsx)("span", {
                  className: g().itemIcon,
                  "aria-hidden": "true",
                  children: e3.icon
                }) : null,
                (0, n.jsx)("span", {
                  className: g().itemLabel,
                  children: e3.label
                }),
                e3.meta ? (0, n.jsx)("span", {
                  className: g().itemMeta,
                  children: e3.meta
                }) : null
              ]
            },
            e3.key
          )
        )
      ]
    });
  }
  function E({
    fields: e2,
    onSelect: t2,
    active: r2 = [],
    label: c2 = "Add filter",
    align: h2 = "end"
  }) {
    let _2 = (0, u.I)() ?? false, S2 = (0, i.useId)(), A2 = `${S2}panel`, C = `${S2}title`, P = (0, i.useRef)(null), M = (0, i.useRef)(null), $ = (0, i.useRef)(null), z = (0, i.useRef)("closed"), O = (0, i.useRef)(0), D = (0, i.useRef)(null), [Y, I] = (0, i.useState)("closed"), [B, H] = (0, i.useState)(null), [W, V] = (0, i.useState)(1), [G, F] = (0, i.useState)(false), [Q, q] = (0, i.useState)("100% 0"), K = (0, d.d)("100%"), U = (0, d.d)("100%"), J = (0, d.d)(0), X = (0, d.d)(0), Z = (0, b.G)(() => X.get() - J.get()), ee = (0, d.d)(0), et = (0, d.d)(0), er = (0, b.G)(() => {
      let e3 = K.get(), t3 = ee.get(), r3 = et.get();
      return "number" != typeof e3 ? 0 : r3 > t3 ? N((e3 - t3) / (r3 - t3)) : 1;
    }), en = (0, b.G)(() => N(er.get() / 0.35)), ei = (0, b.G)(() => N((er.get() - 0.4) / 0.5)), ea = {
      opacity: (0, b.G)(() => 1 - en.get()),
      scale: (0, b.G)(() => 1 - 0.04 * en.get()),
      filter: (0, b.G)(
        () => en.get() ? T(en.get() * y.T.blur.subtle) : "none"
      )
    }, el = {
      opacity: ei,
      transformOrigin: Q,
      scale: (0, b.G)(() => 0.96 + 0.04 * ei.get()),
      y: (0, b.G)(() => (1 - ei.get()) * (G ? -6 : 6)),
      filter: (0, b.G)(
        () => 1 === ei.get() ? "none" : T((1 - ei.get()) * y.T.blur.soft)
      )
    }, eo = "open" === Y, es = e2.find((e3) => e3.id === B) ?? null, ec = (0, i.useCallback)(
      (e3) => {
        let t3 = M.current, r3 = $.current;
        if (!t3 || !r3) return;
        let n2 = t3.getBoundingClientRect(), i2 = r3.offsetWidth + 2, a2 = r3.offsetHeight + 2, l2 = (function(e4) {
          let t4 = {
            left: 0,
            top: 0,
            right: document.documentElement.clientWidth,
            bottom: window.innerHeight
          };
          for (let r4 = e4.parentElement; r4 && r4 !== document.body; r4 = r4.parentElement) {
            let e5 = getComputedStyle(r4);
            if ("visible" === e5.overflowX && "visible" === e5.overflowY)
              continue;
            let n3 = r4.getBoundingClientRect();
            "visible" !== e5.overflowX && (t4.left = Math.max(t4.left, n3.left), t4.right = Math.min(t4.right, n3.right)), "visible" !== e5.overflowY && (t4.top = Math.max(t4.top, n3.top), t4.bottom = Math.min(t4.bottom, n3.bottom));
          }
          return t4;
        })(P.current ?? t3), o2 = l2.left + 16 - n2.left, s2 = l2.right - 16 - n2.left - i2, c3 = n2.width - i2, u2 = "end" === h2 ? c3 >= o2 ? c3 : 0 <= s2 ? 0 : c3 : 0 <= s2 ? 0 : c3 >= o2 ? c3 : 0;
        u2 = Math.round(Math.min(Math.max(u2, o2), Math.max(o2, s2)));
        let d2 = l2.bottom - n2.top, f2 = n2.bottom - l2.top, m2 = d2 < a2 + 16 && f2 > d2;
        "closed" === z.current && (K.jump(n2.width), U.jump(n2.height), J.jump(0)), X.jump(u2), ee.jump(n2.width), et.jump(i2), z.current = "open", O.current += 1, D.current = e3, I("open"), F(m2), H(null), V(-1), q(`${Math.round(n2.width / 2 - u2)}px ${m2 ? "100%" : "0"}`);
        let b2 = _2 ? j : y.T.spring.morph;
        (0, p.i)(J, u2, b2), (0, p.i)(K, i2, b2), (0, p.i)(U, a2, b2);
      },
      [h2, ee, U, J, _2, X, et, K]
    ), eu = (0, i.useCallback)(
      (e3) => {
        let t3 = M.current;
        if ("open" !== z.current || !t3) return;
        z.current = "closing";
        let r3 = O.current += 1;
        I("closing"), e3 && t3.focus({ preventScroll: true, focusVisible: "keyboard" === e3 });
        let n2 = _2 ? j : y.T.spring.snappy;
        (0, p.i)(J, 0, n2);
        let i2 = t3.getBoundingClientRect();
        (0, p.i)(U, i2.height, n2), (0, p.i)(K, i2.width, {
          ...n2,
          onComplete: () => {
            r3 === O.current && (z.current = "closed", K.jump("100%"), U.jump("100%"), I("closed"), H(null));
          }
        });
      },
      [U, J, _2, K]
    );
    function ed(e3) {
      es && (D.current = e3 ? { key: es.id } : "panel", V(-1), H(null));
    }
    (0, i.useLayoutEffect)(() => {
      let e3 = $.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => {
        "open" === z.current && (0, p.i)(U, e3.offsetHeight + 2, _2 ? j : y.T.spring.smooth);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [U, _2]), (0, i.useLayoutEffect)(() => {
      let e3 = D.current, t3 = $.current;
      if (!e3 || !t3 || "open" !== Y) return;
      if (D.current = null, "panel" === e3)
        return void t3.focus({ preventScroll: true });
      let r3 = Array.from(t3.querySelectorAll("[data-current] [data-row]")), n2 = "first" === e3 ? r3[0] : "last" === e3 ? r3.at(-1) : "checked" === e3 ? r3.find((e4) => "true" === e4.getAttribute("aria-checked")) ?? r3[0] : r3.find((t4) => t4.dataset.row === e3.key) ?? r3[0];
      n2?.focus({ preventScroll: true });
    }, [Y, B]), (0, i.useEffect)(() => {
      if ("open" !== Y) return;
      let e3 = (e4) => {
        let t3 = P.current, r3 = e4.target;
        !(!t3 || r3 && t3.contains(r3)) && (eu(false), r3?.closest?.(
          "button, a[href], input, select, textarea, [tabindex], [contenteditable]"
        ) || window.setTimeout(() => {
          let e5 = document.activeElement;
          (!e5 || e5 === document.body || t3.contains(e5)) && M.current?.focus({ preventScroll: true, focusVisible: false });
        }, 0));
      };
      return document.addEventListener("pointerdown", e3, true), () => document.removeEventListener("pointerdown", e3, true);
    }, [eu, Y]);
    let ep = (e3) => r2.find((t3) => t3.id === e3.id)?.value, ef = e2.map((e3) => ({
      key: e3.id,
      label: e3.label,
      icon: e3.icon,
      drill: true,
      meta: (0, n.jsxs)(n.Fragment, {
        children: [
          ep(e3) ? (0, n.jsx)("span", {
            className: g().metaValue,
            children: ep(e3)
          }) : null,
          (0, n.jsx)(a.A, {
            size: 15,
            strokeWidth: 1.8,
            "aria-hidden": "true"
          })
        ]
      })
    })), em = es ? es.options.map(k).map((e3) => {
      let t3 = e3.label ?? e3.value, r3 = ep(es) === t3;
      return {
        key: e3.value,
        label: t3,
        icon: e3.icon,
        checked: r3,
        meta: null != e3.hint || r3 ? (0, n.jsxs)(n.Fragment, {
          children: [
            null != e3.hint ? (0, n.jsx)("span", {
              className: g().hint,
              children: e3.hint
            }) : null,
            (0, n.jsx)("span", {
              className: g().check,
              "data-on": r3 || void 0,
              children: (0, n.jsx)(l.A, {
                size: 15,
                strokeWidth: 2,
                "aria-hidden": "true"
              })
            })
          ]
        }) : null
      };
    }) : [], eh = {
      enter: (e3) => _2 ? { opacity: 0 } : { opacity: 0, x: 18 * e3, filter: T(y.T.blur.soft) },
      center: {
        opacity: 1,
        x: 0,
        filter: T(0),
        transition: _2 ? w : { ...x, x: y.T.spring.smooth }
      },
      exit: (e3) => _2 ? { opacity: 0, transition: j } : {
        opacity: 0,
        x: -18 * e3,
        filter: T(y.T.blur.subtle),
        transition: v
      }
    };
    return (0, n.jsxs)("div", {
      ref: P,
      className: g().menu,
      "data-state": Y,
      "data-y": G ? "up" : "down",
      onKeyDown: (e3) => {
        "Escape" === e3.key && "open" === z.current && (e3.preventDefault(), e3.stopPropagation(), eu("keyboard"));
      },
      onBlur: (e3) => {
        let t3 = e3.relatedTarget;
        "open" === z.current && t3 && !P.current?.contains(t3) && eu(false);
      },
      children: [
        (0, n.jsx)("button", {
          ref: M,
          type: "button",
          className: g().trigger,
          "data-filter-trigger": "",
          "aria-haspopup": "dialog",
          "aria-expanded": eo,
          "aria-controls": A2,
          tabIndex: eo ? -1 : void 0,
          onClick: (e3) => {
            "open" !== z.current && ec(0 === e3.detail ? "first" : "panel");
          },
          onKeyDown: (e3) => {
            ("ArrowDown" === e3.key || "ArrowUp" === e3.key) && (e3.preventDefault(), ec("ArrowDown" === e3.key ? "first" : "last"));
          },
          children: (0, n.jsxs)(f.PY1.span, {
            className: g().face,
            style: ea,
            children: [
              (0, n.jsx)(o.A, {
                size: 15,
                strokeWidth: 1.8,
                "aria-hidden": "true"
              }),
              c2
            ]
          })
        }),
        (0, n.jsx)(f.PY1.div, {
          className: g().surface,
          style: { left: J, width: K, height: U },
          children: (0, n.jsx)(f.PY1.div, {
            ref: $,
            id: A2,
            className: g().panel,
            role: "dialog",
            "aria-labelledby": C,
            tabIndex: -1,
            inert: !eo,
            style: { x: Z },
            onKeyDown: function(e3) {
              if (e3.defaultPrevented) return;
              let t3 = Array.from(
                $.current?.querySelectorAll("[data-current] [data-row]") ?? []
              );
              ("ArrowDown" === e3.key || "ArrowUp" === e3.key) && (e3.preventDefault(), ("ArrowDown" === e3.key ? t3[0] : t3.at(-1))?.focus({
                preventScroll: true
              })), "ArrowLeft" === e3.key && es && (e3.preventDefault(), ed(true));
            },
            children: (0, n.jsxs)(f.PY1.div, {
              style: el,
              children: [
                (0, n.jsxs)("div", {
                  className: g().head,
                  children: [
                    (0, n.jsx)(m.N, {
                      initial: false,
                      children: es ? (0, n.jsx)(
                        f.PY1.button,
                        {
                          type: "button",
                          className: g().back,
                          "aria-label": "Back to fields",
                          onClick: (e3) => ed(0 === e3.detail),
                          initial: _2 ? { opacity: 0, width: 28, marginRight: 2 } : {
                            opacity: 0,
                            width: 0,
                            marginRight: 0,
                            scale: 0.6
                          },
                          animate: {
                            opacity: 1,
                            width: 28,
                            marginRight: 2,
                            scale: 1
                          },
                          exit: _2 ? { opacity: 0, transition: j } : {
                            opacity: 0,
                            width: 0,
                            marginRight: 0,
                            scale: 0.6,
                            transition: {
                              ...y.T.spring.snappy,
                              opacity: v
                            }
                          },
                          transition: _2 ? w : { ...y.T.spring.snappy, opacity: x },
                          children: (0, n.jsx)(s.A, {
                            size: 16,
                            strokeWidth: 1.8,
                            "aria-hidden": "true"
                          })
                        },
                        "back"
                      ) : null
                    }),
                    (0, n.jsx)("span", {
                      className: g().title,
                      id: C,
                      children: (0, n.jsx)(m.N, {
                        mode: "popLayout",
                        initial: false,
                        children: (0, n.jsx)(
                          f.PY1.span,
                          {
                            className: g().titleText,
                            ...R(_2),
                            children: es ? es.label : c2
                          },
                          es?.id ?? "fields"
                        )
                      })
                    })
                  ]
                }),
                (0, n.jsx)("div", {
                  className: g().stage,
                  children: (0, n.jsx)(m.N, {
                    mode: "popLayout",
                    initial: false,
                    custom: W,
                    children: (0, n.jsx)(
                      f.PY1.div,
                      {
                        className: g().step,
                        custom: W,
                        variants: eh,
                        initial: "enter",
                        animate: "center",
                        exit: "exit",
                        children: es ? (0, n.jsx)(L, {
                          rows: em,
                          labelledBy: C,
                          radio: true,
                          onChoose: function(e3, r3) {
                            es && (t2(
                              {
                                id: es.id,
                                label: es.label,
                                value: e3.label
                              },
                              es
                            ), eu(r3 ? "keyboard" : "pointer"));
                          },
                          onBack: ed,
                          onLeave: () => $.current?.focus({ preventScroll: true })
                        }) : (0, n.jsx)(L, {
                          rows: ef,
                          labelledBy: C,
                          onChoose: function(e3, t3) {
                            D.current = t3 ? "checked" : "panel", V(1), H(e3.key);
                          },
                          onLeave: () => $.current?.focus({ preventScroll: true })
                        })
                      },
                      es?.id ?? "fields"
                    )
                  })
                })
              ]
            })
          })
        })
      ]
    });
  }
  function A({
    filters: e2,
    onRemove: t2,
    onClearAll: r2,
    children: a2,
    label: l2 = "Active filters",
    addFilter: o2
  }) {
    let s2, h2 = (0, u.I)() ?? false, b2 = (0, i.useRef)(null), _2 = (0, i.useRef)(null), j2 = (0, i.useRef)(0), w2 = (0, i.useRef)(null), [N2, k2] = (0, i.useState)(e2), [L2, C] = (0, i.useState)("");
    if (N2 !== e2) {
      k2(e2);
      let t3 = (function(e3, t4) {
        let r3 = (e4) => e4.value ? `${e4.label}: ${e4.value}` : e4.label, n2 = e3.filter((e4) => !t4.some((t5) => t5.id === e4.id));
        if (!t4.length && n2.length > 1) return "All filters cleared";
        let i2 = t4.filter((t5) => !e3.some((e4) => e4.id === t5.id)), a3 = t4.filter(
          (t5) => e3.some((e4) => e4.id === t5.id && e4.value !== t5.value)
        );
        return [
          ...i2.map((e4) => `Added ${r3(e4)}`),
          ...a3.map((e4) => `${e4.label} changed to ${e4.value ?? "any"}`),
          ...n2.map((e4) => `Removed ${r3(e4)}`)
        ].join(". ");
      })(N2, e2);
      t3 && C(t3);
    }
    let P = e2.map((e3) => `${e3.id}:${e3.value ?? ""}`).join("|");
    (0, i.useLayoutEffect)(() => {
      j2.current = performance.now() + 900;
    }, [P]);
    let M = (s2 = (0, d.d)("auto"), (0, i.useLayoutEffect)(() => {
      let e3 = _2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = false, r3 = new ResizeObserver(() => {
        let r4 = e3.offsetHeight;
        if (!t3 || h2 || performance.now() > j2.current) {
          t3 = true, s2.jump(r4);
          return;
        }
        (0, p.i)(s2, r4, y.T.spring.smooth);
      });
      return r3.observe(e3), () => r3.disconnect();
    }, [j2, s2, _2, h2]), s2);
    (0, i.useLayoutEffect)(() => {
      let e3 = _2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = /* @__PURE__ */ new Map(), r3 = () => {
        let r4 = performance.now();
        for (let n3 of Array.from(e3.children)) {
          let e4 = n3.offsetLeft, i3 = n3.offsetTop, a4 = t3.get(n3);
          if (!a4) {
            t3.set(n3, { x: e4, y: i3, dx: 0, dy: 0 });
            continue;
          }
          let l3 = a4.x - e4, o3 = a4.y - i3;
          if (a4.x = e4, a4.y = i3, h2 || r4 > j2.current || 1 > Math.abs(o3) && 40 > Math.abs(l3))
            continue;
          a4.stop?.();
          let s3 = a4.dx + l3, c2 = a4.dy + o3, u2 = (e5) => {
            a4.dx = s3 * (1 - e5), a4.dy = c2 * (1 - e5), n3.style.translate = e5 >= 1 ? "" : `${a4.dx}px ${a4.dy}px`;
          };
          u2(0), a4.stop = (0, p.i)(0, 1, {
            ...y.T.spring.smooth,
            onUpdate: u2,
            onComplete: () => u2(1)
          }).stop;
        }
        for (let r5 of t3.keys()) r5.parentElement !== e3 && t3.delete(r5);
      }, n2 = new ResizeObserver(r3), i2 = () => {
        for (let t4 of Array.from(e3.children)) n2.observe(t4);
      }, a3 = new MutationObserver(() => {
        i2(), r3();
      });
      return n2.observe(e3), i2(), a3.observe(e3, { childList: true }), () => {
        for (let e4 of (n2.disconnect(), a3.disconnect(), t3.values()))
          e4.stop?.();
      };
    }, [j2, _2, h2]), (0, i.useLayoutEffect)(() => {
      let t3 = w2.current, r3 = b2.current;
      if (null === t3 || !r3) return;
      w2.current = null;
      let n2 = e2[Math.min(t3, e2.length - 1)], i2 = n2 ? r3.querySelector(`[data-chip-remove="${CSS.escape(n2.id)}"]`) : r3.querySelector("[data-filter-trigger]");
      i2?.focus({ preventScroll: true });
    }, [e2]);
    let $ = { duration: 0 }, z = (e3) => ({
      initial: !h2 && {
        width: 0,
        marginRight: -e3,
        overflow: "clip",
        "--slot-moving": 1
      },
      animate: {
        width: "auto",
        marginRight: 0,
        transitionEnd: { overflow: "visible", "--slot-moving": 0 }
      },
      exit: h2 ? { opacity: 0, transition: $ } : {
        width: 0,
        marginRight: -e3,
        overflow: "clip",
        "--slot-moving": 1,
        pointerEvents: "none",
        transition: { ...y.T.spring.smooth, "--slot-moving": $ }
      },
      transition: h2 ? $ : y.T.spring.smooth
    }), O = {
      initial: !h2 && { opacity: 0, scale: 0.9, filter: T(y.T.blur.soft) },
      animate: { opacity: 1, scale: 1, filter: T(0) },
      exit: h2 ? { opacity: 0, transition: $ } : {
        opacity: 0,
        scale: 0.9,
        filter: T(y.T.blur.subtle),
        transition: v
      },
      transition: h2 ? $ : { ...x, scale: y.T.spring.snappy }
    }, D = h2 ? { ...R(true), initial: false } : R(false), Y = h2 ? D : { ...D, transition: { ...x, delay: 0.75 * y.T.duration.instant } };
    return (0, n.jsxs)("div", {
      ref: b2,
      className: g().toolbar,
      role: "group",
      "aria-label": l2,
      children: [
        (0, n.jsx)(f.PY1.div, {
          className: g().frame,
          style: { height: M },
          children: (0, n.jsxs)("div", {
            ref: _2,
            className: g().chips,
            children: [
              (0, n.jsx)(m.N, {
                initial: false,
                children: e2.map(
                  (e3, r3) => (0, n.jsx)(
                    f.PY1.span,
                    {
                      className: g().slot,
                      ...z(8),
                      children: (0, n.jsxs)(f.PY1.span, {
                        className: g().chip,
                        ...O,
                        children: [
                          (0, n.jsxs)("span", {
                            className: g().chipLabel,
                            children: [
                              e3.label,
                              e3.value ? (0, n.jsxs)("span", {
                                className: g().value,
                                children: [
                                  (0, n.jsx)("span", {
                                    className: g().separator,
                                    children: " \xB7 "
                                  }),
                                  (0, n.jsx)(S, { text: e3.value })
                                ]
                              }) : null
                            ]
                          }),
                          (0, n.jsx)("button", {
                            type: "button",
                            "data-chip-remove": e3.id,
                            "aria-label": `Remove ${e3.label}${e3.value ? `: ${e3.value}` : ""}`,
                            onClick: (n2) => {
                              document.activeElement === n2.currentTarget && (w2.current = r3), t2(e3.id);
                            },
                            children: (0, n.jsx)(c.A, {
                              size: 14,
                              strokeWidth: 1.8,
                              "aria-hidden": "true"
                            })
                          })
                        ]
                      })
                    },
                    e3.id
                  )
                )
              }),
              (0, n.jsx)(m.N, {
                initial: false,
                children: e2.length ? null : (0, n.jsx)(
                  f.PY1.span,
                  {
                    className: g().empty,
                    ...Y,
                    children: "No filters applied"
                  },
                  "empty"
                )
              })
            ]
          })
        }),
        (0, n.jsxs)("div", {
          className: g().actions,
          children: [
            o2 ? (0, n.jsx)(E, {
              fields: o2.fields,
              onSelect: o2.onAdd,
              active: e2,
              label: o2.label,
              align: o2.align
            }) : null,
            a2,
            (0, n.jsx)(m.N, {
              initial: false,
              children: e2.length > 0 ? (0, n.jsx)(
                f.PY1.span,
                {
                  className: g().slot,
                  ...z(12),
                  children: (0, n.jsx)("button", {
                    className: g().clear,
                    type: "button",
                    onClick: () => {
                      w2.current = -1, r2?.();
                    },
                    children: (0, n.jsx)(f.PY1.span, {
                      className: g().clearText,
                      ...D,
                      children: "Clear all"
                    })
                  })
                },
                "clear"
              ) : null
            })
          ]
        }),
        (0, n.jsx)("span", {
          className: g().srOnly,
          role: "status",
          children: L2
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.reg(67026, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { Xn: () => x });
  var n = r(95155), o = r(43146), s = r(12115), a = r(80642), i = r(79196), l = r(18310), u = r(28245), c = r(55809), d = r(92171), h = r(25354), m = r(9005), p = r(7770), f = r(34050), v = r.n(f);
  let b = p.T.spring.smooth, g = { ...p.T.spring.smooth, visualDuration: 0.3 }, y = { duration: p.T.duration.fast, ease: [...p.T.ease.standard] }, _ = (e2, t2, r2) => Math.min(r2, Math.max(t2, e2));
  function x({
    trigger: e2,
    open: t2,
    defaultOpen: r2 = false,
    onOpenChange: i2,
    ...l2
  }) {
    let [u2, c2] = (0, s.useState)(r2), d2 = t2 ?? u2, h2 = (0, s.useCallback)(
      (e3) => {
        void 0 === t2 && c2(e3), i2?.(e3);
      },
      [t2, i2]
    ), m2 = (0, s.useCallback)(() => h2(false), [h2]);
    return (0, n.jsxs)(o.bL, {
      open: d2,
      onOpenChange: h2,
      children: [
        e2 ? (0, n.jsx)(o.l9, { asChild: true, children: e2 }) : null,
        (0, n.jsx)(a.N, {
          children: d2 && (0, n.jsx)(
            o.ZL,
            {
              forceMount: true,
              children: (0, n.jsx)(w, { ...l2, onDismiss: m2 })
            },
            "sheet"
          )
        })
      ]
    });
  }
  function w({
    title: e2,
    description: t2,
    detents: r2 = [0.45, 0.92],
    initialDetent: a2 = 0,
    onDetentChange: p2,
    closeLabel: f2 = "Close",
    className: x2,
    children: j,
    onDismiss: C
  }) {
    let [E, k] = (0, i.xQ)(), M = (0, l.I)() ?? false, L = r2.join(","), T = (0, s.useMemo)(
      () => L.split(",").map(Number).filter((e3) => e3 > 0).sort((e3, t3) => e3 - t3),
      [L]
    ), N = T.length - 1, [S, P] = (0, s.useState)(() => _(Math.round(a2), 0, N)), [R, Y] = (0, s.useState)(""), D = (0, s.useRef)(null), A = (0, s.useRef)(null), H = (0, u.d)(4e3), I = (0, u.d)(0), O = (0, u.d)(1), B = (0, s.useRef)(S), K = (0, s.useRef)(S), z = (0, s.useRef)(null), U = (0, s.useRef)(void 0), F = (0, s.useRef)(false), W = (0, s.useRef)(false), X = (0, s.useRef)({ present: E, at: 0 });
    (0, s.useLayoutEffect)(() => {
      X.current = { present: E, at: performance.now() };
    }, [E]);
    let q = (0, s.useCallback)(
      (e3) => {
        let t3 = I.get();
        return "closed" === e3 ? t3 + 40 : t3 * (1 - T[e3] / T[N]);
      },
      [I, T, N]
    ), J = (0, c.G)([H, I, O], ([e3 = 0, t3 = 0, r3 = 0]) => {
      if (!t3) return 0;
      let n2 = t3 * (1 - T[0] / T[N]);
      return _(
        e3 <= n2 ? 1 - 0.21999999999999997 * (n2 ? e3 / n2 : 0) : 0.78 * (1 - (e3 - n2) / (t3 + 40 - n2)),
        0,
        1
      ) * r3;
    }), V = (0, s.useCallback)(
      (e3, t3, r3) => {
        K.current = e3, U.current = r3;
        let n2 = q(e3), o2 = () => {
          let e4 = U.current;
          U.current = void 0, e4?.();
        };
        if (M) {
          H.jump(n2), o2();
          return;
        }
        (0, d.i)(H, n2, {
          ..."closed" === e3 ? g : b,
          ...void 0 === t3 ? {} : { velocity: t3 },
          onComplete: o2
        });
      },
      [q, M, H]
    ), Z = (0, s.useCallback)(
      (e3, t3) => {
        e3 !== B.current && (B.current = e3, P(e3), p2?.(e3), Y(
          e3 === N ? "Sheet expanded" : 0 === e3 ? "Sheet collapsed" : `Sheet at ${Math.round(100 * T[e3])} percent height`
        ));
        let r3 = A.current;
        e3 !== N && r3 && r3.scrollTop > 0 && r3.scrollTo({ top: 0, behavior: M ? "auto" : "smooth" }), V(e3, t3);
      },
      [V, p2, M, T, N]
    );
    (0, s.useLayoutEffect)(() => {
      let e3 = D.current;
      if (e3) {
        if (!W.current && (W.current = true, I.set(e3.offsetHeight - 160), H.jump(q("closed")), M && (H.jump(q(B.current)), O.jump(0))), E) {
          if (M) {
            H.jump(q(B.current)), (0, d.i)(O, 1, y);
            return;
          }
          O.jump(1), V(B.current);
          return;
        }
        if (M) return void (0, d.i)(O, 0, { ...y, onComplete: k });
        "closed" === K.current && H.isAnimating() ? U.current = k : V("closed", void 0, k);
      }
    }, [V, I, E, q, O, M, k, H]), (0, s.useEffect)(() => {
      let e3 = D.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => {
        let t4 = e3.offsetHeight - 160;
        if (t4 === I.get()) return;
        I.set(t4);
        let r3 = K.current;
        z.current || "closed" === r3 || (H.isAnimating() ? V(r3) : H.jump(q(r3)));
      });
      return t3.observe(e3), () => t3.disconnect();
    }, [V, I, q, H]);
    let G = (0, s.useCallback)(
      (e3, t3) => {
        H.stop();
        let r3 = H.get();
        z.current = {
          startY: e3,
          origin: r3 < 0 ? -((1 / (1 - Math.min(-r3, 119) / 120) - 1) * 120 / 0.55) : r3,
          from: B.current,
          moved: false,
          samples: [{ t: t3, y: e3 }]
        };
      },
      [H]
    ), Q = (0, s.useCallback)(
      (e3, t3) => {
        let r3 = z.current;
        if (!r3) return;
        let n2 = e3 - r3.startY;
        if (!r3.moved) {
          if (3 > Math.abs(n2)) return;
          r3.moved = true, D.current?.setAttribute("data-dragging", "");
        }
        let o2 = r3.origin + n2;
        H.set(o2 < 0 ? -((1 - 1 / (-(0.55 * o2) / 120 + 1)) * 120) : o2), r3.samples.push({ t: t3, y: e3 }), r3.samples.length > 12 && r3.samples.shift();
      },
      [H]
    ), $ = (0, s.useCallback)(
      (e3) => {
        var t3;
        let r3, n2, o2, s2 = z.current;
        if (z.current = null, D.current?.removeAttribute("data-dragging"), !s2)
          return;
        if (!s2.moved) {
          let e4 = K.current;
          "closed" !== e4 && V(e4);
          return;
        }
        F.current = true;
        let a3 = H.get(), i2 = a3 < 0 ? 0 : (t3 = s2.samples, n2 = (r3 = t3.filter((t4) => e3 - t4.t <= 80))[0], o2 = r3[r3.length - 1], n2 && o2 && o2 !== n2 && !(e3 - o2.t > 60) ? (o2.y - n2.y) / ((o2.t - n2.t) / 1e3) : 0), l2 = a3 + 0.2 * i2, u2 = [...T.map((e4, t4) => t4), "closed"].reduce(
          (e4, t4) => Math.abs(q(t4) - l2) < Math.abs(q(e4) - l2) ? t4 : e4
        );
        if (Math.abs(i2) > 320 && u2 === s2.from && (u2 = i2 < 0 ? Math.min(s2.from + 1, N) : 0 === s2.from ? "closed" : s2.from - 1), "closed" === u2) {
          M || V("closed", i2), C();
          return;
        }
        Z(u2, i2);
      },
      [V, q, C, M, Z, T, N, H]
    );
    function ee(e3) {
      e3.currentTarget.hasPointerCapture(e3.pointerId) && e3.currentTarget.releasePointerCapture(e3.pointerId), $(e3.timeStamp);
    }
    (0, s.useEffect)(() => {
      let e3 = A.current;
      if (!e3) return;
      let t3 = null, r3 = (e4) => {
        let r4 = e4.touches[0];
        t3 = 1 === e4.touches.length && r4 ? { x: r4.clientX, y: r4.clientY, mode: "pending" } : null;
      }, n2 = (r4) => {
        let n3 = r4.touches[0];
        if (!t3 || !n3 || 1 !== r4.touches.length) return;
        let o3 = n3.clientX - t3.x, s2 = n3.clientY - t3.y;
        if ("pending" === t3.mode) {
          if (B.current === N) {
            let r5 = e3.scrollHeight > e3.clientHeight + 1;
            t3.mode = Math.abs(s2) >= Math.abs(o3) && (!r5 || e3.scrollTop <= 0 && s2 > 0) ? "sheet" : "native";
          } else {
            if (4 > Math.hypot(o3, s2)) return;
            t3.mode = Math.abs(s2) >= Math.abs(o3) ? "sheet" : "native";
          }
          "sheet" === t3.mode && G(n3.clientY, r4.timeStamp);
        }
        "sheet" === t3.mode && (r4.cancelable && r4.preventDefault(), Q(n3.clientY, r4.timeStamp));
      }, o2 = (e4) => {
        t3?.mode === "sheet" && $(e4.timeStamp), t3 = null;
      };
      return e3.addEventListener("touchstart", r3, { passive: true }), e3.addEventListener("touchmove", n2, { passive: false }), e3.addEventListener("touchend", o2), e3.addEventListener("touchcancel", o2), () => {
        e3.removeEventListener("touchstart", r3), e3.removeEventListener("touchmove", n2), e3.removeEventListener("touchend", o2), e3.removeEventListener("touchcancel", o2);
      };
    }, [G, $, Q, N]), (0, s.useEffect)(() => {
      let e3 = A.current, t3 = D.current;
      if (!e3 || !t3) return;
      let r3 = () => t3.toggleAttribute("data-scrolled", e3.scrollTop > 1);
      return e3.addEventListener("scroll", r3, { passive: true }), () => e3.removeEventListener("scroll", r3);
    }, []);
    let et = S === N, er = {
      y: H,
      opacity: O,
      "--sheet-max": T[N],
      "--sheet-extension": "160px"
    };
    return (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)(o.hJ, {
          asChild: true,
          forceMount: true,
          children: (0, n.jsx)(h.PY1.div, {
            className: v().overlay,
            style: { opacity: J }
          })
        }),
        (0, n.jsx)(o.UC, {
          asChild: true,
          forceMount: true,
          ...t2 ? {} : { "aria-describedby": void 0 },
          onOpenAutoFocus: (e3) => {
            e3.preventDefault(), D.current?.focus({ preventScroll: true });
          },
          onPointerDownOutside: (e3) => {
            let { present: t3, at: r3 } = X.current;
            (!t3 || e3.detail.originalEvent.timeStamp < r3) && e3.preventDefault();
          },
          children: (0, n.jsxs)(h.PY1.div, {
            ref: D,
            className: [v().sheet, x2].filter(Boolean).join(" "),
            style: er,
            "data-expanded": et ? "" : void 0,
            onKeyDown: function(e3) {
              let t3 = A.current;
              if (!t3 || e3.target !== e3.currentTarget && e3.target !== t3)
                return;
              let r3 = "ArrowDown" === e3.key || "PageDown" === e3.key || " " === e3.key && !e3.shiftKey, n2 = "ArrowUp" === e3.key || "PageUp" === e3.key || " " === e3.key && e3.shiftKey;
              if (!r3 && !n2) return;
              if (e3.preventDefault(), r3 && B.current !== N) return void Z(N);
              let o2 = e3.key.startsWith("Arrow") ? 48 : 0.85 * t3.clientHeight;
              t3.scrollBy({ top: r3 ? o2 : -o2, behavior: M ? "auto" : "smooth" });
            },
            children: [
              (0, n.jsxs)("div", {
                className: v().header,
                onPointerDown: function(e3) {
                  let t3 = e3.target instanceof Element ? e3.target : null;
                  if (0 !== e3.button || !e3.isPrimary || t3?.closest(
                    "button, a, input, select, textarea, [role='button']"
                  ) && !t3.closest("[data-grabber]"))
                    return;
                  G(e3.clientY, e3.timeStamp);
                  let r3 = e3.currentTarget, n2 = e3.pointerId, o2 = (e4) => e4.pointerId === n2 && !(e4.target instanceof Node && r3.contains(e4.target)), s2 = (e4) => {
                    if (o2(e4) && z.current && (Q(e4.clientY, e4.timeStamp), z.current?.moved && !r3.hasPointerCapture(n2)))
                      try {
                        r3.setPointerCapture(n2);
                      } catch {
                      }
                  }, a3 = (e4) => {
                    e4.pointerId === n2 && (window.removeEventListener("pointermove", s2), window.removeEventListener("pointerup", a3), window.removeEventListener("pointercancel", a3), o2(e4) && $(e4.timeStamp));
                  };
                  window.addEventListener("pointermove", s2), window.addEventListener("pointerup", a3), window.addEventListener("pointercancel", a3);
                },
                onPointerMove: function(e3) {
                  if (z.current) {
                    if ("mouse" === e3.pointerType && 0 === e3.buttons)
                      return void $(e3.timeStamp);
                    Q(e3.clientY, e3.timeStamp), z.current.moved && !e3.currentTarget.hasPointerCapture(e3.pointerId) && e3.currentTarget.setPointerCapture(e3.pointerId);
                  }
                },
                onPointerUp: ee,
                onPointerCancel: ee,
                children: [
                  (0, n.jsx)("button", {
                    type: "button",
                    className: v().grabber,
                    "data-grabber": "",
                    "aria-label": et ? "Collapse sheet" : "Expand sheet",
                    "aria-expanded": et,
                    onClick: function() {
                      if (F.current) {
                        F.current = false;
                        return;
                      }
                      Z(B.current === N ? 0 : N);
                    },
                    onKeyDown: function(e3) {
                      let t3 = B.current, r3 = "ArrowUp" === e3.key ? Math.min(t3 + 1, N) : "ArrowDown" === e3.key ? Math.max(t3 - 1, 0) : "Home" === e3.key ? N : "End" === e3.key ? 0 : null;
                      null !== r3 && (e3.preventDefault(), Z(r3));
                    },
                    children: (0, n.jsx)("span", {
                      className: v().grabberBar,
                      "aria-hidden": "true"
                    })
                  }),
                  (0, n.jsxs)("div", {
                    className: v().headRow,
                    children: [
                      (0, n.jsxs)("div", {
                        className: v().headText,
                        children: [
                          (0, n.jsx)(o.hE, {
                            className: v().title,
                            children: e2
                          }),
                          t2 ? (0, n.jsx)(o.VY, {
                            className: v().description,
                            children: t2
                          }) : null
                        ]
                      }),
                      (0, n.jsx)(o.bm, {
                        className: v().close,
                        "aria-label": f2,
                        children: (0, n.jsx)(m.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      })
                    ]
                  })
                ]
              }),
              (0, n.jsx)("div", {
                ref: A,
                className: v().body,
                onWheel: function(e3) {
                  B.current !== N && e3.deltaY > 4 && !z.current && Z(N);
                },
                onFocus: function(e3) {
                  B.current !== N && e3.target instanceof Element && e3.target.getBoundingClientRect().bottom > window.innerHeight - 8 && Z(N);
                },
                children: j
              }),
              (0, n.jsx)("span", {
                className: v().srOnly,
                role: "status",
                "aria-live": "polite",
                children: R
              })
            ]
          })
        })
      ]
    });
  }
  o.bm;
}

__m(__module,__exports,__require);
});
A.regCss(69112, ".toolbar{position:relative;display:flex;min-height:var(--control-height-lg);align-items:flex-start;justify-content:space-between;gap:var(--space-4);padding:var(--space-3) var(--space-4);border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface)}\n@media (max-width:520px){.toolbar{align-items:stretch;flex-direction:column}\n.frame{min-width:0;flex:1}\n.frame{flex:none}\n.chips{position:relative;display:flex;min-width:0;min-height:var(--control-height-sm);flex-wrap:wrap;align-items:center;gap:var(--space-2)}\n.slot{display:inline-flex;max-width:100%;min-width:0;flex:none;border-radius:var(--radius-pill)}\n.chip{display:inline-flex;max-width:calc(100% + var(--slot-moving, 0) * 100vw);flex:none;min-height:var(--control-height-sm);align-items:center;gap:var(--space-2);padding:0 var(--space-2) 0 var(--space-3);border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface-muted);color:var(--text-secondary);font-size:var(--text-xs)}\n.chip button{display:grid;width:24px;height:24px;flex:0 0 24px;place-items:center;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-muted);cursor:pointer;transition:background var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.chip button:active{transform:scale(.96);transition-duration:var(--duration-fast),var(--duration-fast),var(--duration-instant);transition-timing-function:var(--ease-standard),var(--ease-standard),var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.chip button:hover{background:var(--border);color:var(--foreground)}\n@media (prefers-reduced-motion:reduce){.back,.chip button,.clear,.surface{transition:none}\n.chip button:active,.clear:active{transform:none}\n.chipLabel{overflow-x:clip;overflow-y:visible;text-overflow:ellipsis;white-space:nowrap}\n.value{color:var(--foreground);font-weight:500}\n.separator{color:var(--text-secondary);font-weight:400}\n.morphText{position:relative;display:inline-flex;overflow-x:clip;overflow-y:visible;white-space:nowrap;vertical-align:bottom}\n.morphValue{display:inline-block;flex:none;white-space:nowrap}\n.measure{position:absolute;top:0;left:0;visibility:hidden;white-space:nowrap;pointer-events:none}\n.empty{position:absolute;top:0;bottom:0;left:0;display:flex;max-width:100%;align-items:center;overflow:hidden;color:var(--text-muted);font-size:var(--text-sm);white-space:nowrap;pointer-events:none}\n.actions{display:inline-flex;flex:0 0 auto;align-items:center;gap:var(--space-3)}\n.actions{justify-content:flex-end}\n.clear{min-height:var(--control-height-sm);padding:0 var(--space-3);border:0;border-radius:var(--radius-control);background:transparent;color:var(--text-muted);font:inherit;font-size:var(--text-sm);line-height:var(--leading-body);letter-spacing:var(--tracking-body);white-space:nowrap;cursor:pointer;transition:background var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-spring) var(--ease-spring)}\n.clear:active{transform:scale(.97);transition-duration:var(--duration-fast),var(--duration-fast),var(--duration-instant);transition-timing-function:var(--ease-standard),var(--ease-standard),var(--ease-standard)}\n.back:hover,.clear:hover{background:var(--surface-muted);color:var(--foreground)}\n.clearText{display:block}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.menu{position:relative;display:inline-flex;flex:none;isolation:isolate}\n.menu:not([data-state=closed]){z-index:30}\n.menu[data-state=open] .trigger{pointer-events:none}\n.menu[data-y=up] .surface{top:auto;bottom:0}\n.menu[data-state=open] .surface{border-radius:var(--radius-panel);background:var(--surface-raised);box-shadow:var(--shadow-floating)}\n.menu[data-state=closed] .trigger:active+.surface{background:color-mix(in oklab,var(--surface-muted),var(--border) 55%)}\n@media (hover:hover) and (pointer:fine){.menu[data-state=closed] .trigger:hover+.surface{background:var(--surface-muted);box-shadow:var(--shadow-resting)}\n.menu[data-y=up] .panel{top:auto;bottom:0}\n.menu[data-state=closed] .panel{visibility:hidden}\n.menu[data-y=up] .head{margin-top:4px}\n.trigger{position:relative;z-index:1;display:inline-flex;min-height:var(--control-height-sm);align-items:center;padding:0 var(--space-3);border:1px solid transparent;border-radius:var(--radius-control);background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body);white-space:nowrap;cursor:pointer;-webkit-tap-highlight-color:transparent}\n.face{display:inline-flex;align-items:center;gap:var(--space-2)}\n.face svg{flex:none}\n.surface{position:absolute;top:0;z-index:0;box-sizing:border-box;overflow:clip;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);transition:background-color var(--duration-fast) var(--ease-standard),border-radius var(--duration-spring) var(--ease-spring),box-shadow var(--duration-standard) var(--ease-standard)}\n.panel{position:absolute;top:0;left:0;width:min(var(--filter-menu-width,16rem),calc(100vw - var(--space-8)));padding:6px;outline:none}\n.head{display:flex;height:32px;align-items:center;padding:0 var(--space-2) 0 10px}\n.back{display:grid;width:28px;height:28px;flex:none;place-items:center;margin-left:-6px;padding:0;border:0;border-radius:var(--radius-pill);background:transparent;color:var(--text-secondary);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.back:active{background:var(--surface-muted);color:var(--foreground)}\n.title{position:relative;display:flex;min-width:0;color:var(--foreground);font-size:var(--text-sm);font-weight:500;letter-spacing:var(--tracking-body);white-space:nowrap}\n.titleText{display:block}\n.stage{position:relative;margin-top:2px}\n.step{width:100%}\n.list{position:relative;display:grid;max-height:min(20rem,55vh);overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}\n.highlight{position:absolute;top:0;right:0;left:0;border-radius:calc(var(--radius-panel) - 6px);background:color-mix(in oklab,var(--foreground) 6%,transparent);opacity:0;pointer-events:none}\n.item:focus-visible{outline:none}\n.item{position:relative;display:flex;min-width:0;min-height:var(--control-height-sm);align-items:center;gap:10px;padding:0 10px;border:0;border-radius:calc(var(--radius-panel) - 6px);background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);text-align:left;cursor:pointer;outline:none;-webkit-tap-highlight-color:transparent}\n.itemIcon{display:inline-flex;min-width:16px;flex:none;align-items:center;justify-content:center;color:var(--text-secondary)}\n.itemLabel{min-width:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.itemMeta{display:inline-flex;min-width:0;flex:none;align-items:center;gap:6px;max-width:50%;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.metaValue{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.hint{min-width:2ch;text-align:right}\n.check{display:inline-flex;width:15px;color:var(--foreground);opacity:0}\n.check[data-on]{opacity:1}", {"toolbar":"toolbar","frame":"frame","chips":"chips","slot":"slot","chip":"chip","back":"back","clear":"clear","surface":"surface","chipLabel":"chipLabel","value":"value","separator":"separator","morphText":"morphText","morphValue":"morphValue","measure":"measure","empty":"empty","actions":"actions","clearText":"clearText","srOnly":"srOnly","menu":"menu","trigger":"trigger","panel":"panel","head":"head","face":"face","title":"title","titleText":"titleText","stage":"stage","step":"step","list":"list","highlight":"highlight","item":"item","itemIcon":"itemIcon","itemLabel":"itemLabel","itemMeta":"itemMeta","metaValue":"metaValue","hint":"hint","check":"check"});
A.reg(72982, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { p: () => k });
  var s = a(95155), i = a(12115), n = a(79196), r = a(25354), l = a(28245), o = a(92171), d = a(18310), c = a(80642), u = a(14225), p = a(7770), h = a(86014), m = a.n(h);
  let b = { duration: p.T.duration.fast, ease: [...p.T.ease.standard] }, g = { opacity: 0, y: "0.3em", filter: `blur(${p.T.blur.soft}px)` }, x = {
    opacity: 0,
    y: "-0.3em",
    filter: `blur(${p.T.blur.subtle}px)`,
    transition: b
  }, _ = { opacity: 0, scale: 0.6, filter: `blur(${p.T.blur.subtle}px)` }, j = { opacity: 1, y: "0em", scale: 1, filter: "blur(0px)" }, y = { opacity: 0, transition: { duration: p.T.duration.instant } };
  function f(e2) {
    let t2 = (0, n.tF)();
    return (0, s.jsx)(r.PY1.span, {
      ...e2,
      "aria-hidden": !t2 || e2["aria-hidden"]
    });
  }
  function v({ reduce: e2, morphKey: t2, children: a2 }) {
    let n2 = (0, i.useRef)(null), d2 = (0, i.useRef)(null), c2 = (0, l.d)("auto"), u2 = (0, i.useRef)(0);
    return (0, i.useLayoutEffect)(() => {
      u2.current = performance.now();
    }, [t2]), (0, i.useEffect)(() => {
      let t3, a3, s2 = d2.current;
      if (!s2 || "u" < typeof ResizeObserver) return;
      let i2 = () => {
        c2.jump("auto"), n2.current && Object.assign(n2.current.style, {
          overflow: "",
          height: "auto"
        });
      }, r2 = new ResizeObserver(([r3]) => {
        if (!r3) return;
        let l2 = r3.borderBoxSize?.[0]?.blockSize ?? s2.offsetHeight, d3 = c2.get(), h2 = "number" == typeof d3 ? d3 : t3;
        if (t3 = l2, a3?.stop(), e2 || void 0 === h2 || h2 === l2 || performance.now() - u2.current > 120)
          return i2();
        n2.current && Object.assign(n2.current.style, {
          overflow: "hidden",
          height: `${h2}px`
        }), a3 = (0, o.i)(c2, [h2, l2], {
          ...p.T.spring.smooth,
          onComplete: i2
        });
      });
      return r2.observe(s2), () => {
        r2.disconnect(), a3?.stop();
      };
    }, [c2, e2]), (0, s.jsx)(r.PY1.div, {
      ref: n2,
      className: m().frame,
      style: { height: c2 },
      children: (0, s.jsx)("div", {
        ref: d2,
        className: m().copy,
        children: a2
      })
    });
  }
  function k({
    title: e2,
    description: t2,
    action: a2,
    icon: n2,
    className: r2,
    label: l2
  }) {
    let o2 = (0, d.I)(), h2 = n2 ?? (0, s.jsx)(u.A, { width: 24, height: 24, strokeWidth: 1.5 }), w = o2 ? { duration: p.T.duration.instant } : { duration: p.T.duration.standard, ease: [...p.T.ease.enter] }, N = {
      initial: o2 ? { opacity: 0 } : g,
      animate: j,
      exit: o2 ? y : x,
      transition: w
    };
    return (0, s.jsxs)("section", {
      className: [m().root, r2].filter(Boolean).join(" "),
      "aria-label": l2,
      children: [
        (0, s.jsx)("div", {
          className: m().icon,
          "aria-hidden": "true",
          children: (0, s.jsx)(c.N, {
            mode: "popLayout",
            initial: false,
            children: (0, s.jsx)(
              f,
              {
                className: m().glyph,
                initial: o2 ? { opacity: 0 } : _,
                animate: j,
                exit: o2 ? y : { ..._, transition: b },
                transition: o2 ? w : p.T.spring.snappy,
                children: h2
              },
              (function(e3) {
                if (!(0, i.isValidElement)(e3)) return "icon";
                let t3 = e3.type;
                return "string" == typeof t3 ? t3 : t3.displayName ?? t3.name ?? "icon";
              })(h2)
            )
          })
        }),
        (0, s.jsxs)(v, {
          reduce: o2,
          morphKey: `${e2}
${t2}`,
          children: [
            (0, s.jsx)("h3", {
              children: (0, s.jsx)(c.N, {
                mode: "popLayout",
                initial: false,
                children: (0, s.jsx)(
                  f,
                  { className: m().line, ...N, children: e2 },
                  e2
                )
              })
            }),
            (0, s.jsx)("p", {
              children: (0, s.jsx)(c.N, {
                mode: "popLayout",
                initial: false,
                children: (0, s.jsx)(
                  f,
                  { className: m().line, ...N, children: t2 },
                  t2
                )
              })
            })
          ]
        }),
        a2 && (0, s.jsx)("div", { className: m().action, children: a2 })
      ]
    });
  }
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
A.regCss(86014, ".empty-state_root__XfbqI{display:flex;width:100%;flex-direction:column;align-items:center;padding:clamp(var(--space-8),8vw,var(--space-12)) var(--space-5);text-align:center}.empty-state_icon__DNrWo{position:relative;display:grid;width:var(--space-12);height:var(--space-12);place-items:center;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface-muted);color:var(--text-secondary);animation:empty-state_empty-state-icon__YVH_T var(--duration-considered) var(--ease-enter) both}.empty-state_glyph__EMeMU{display:grid;place-items:center}.empty-state_frame__QwfP7{width:100%;max-width:100%}.empty-state_copy__WzH6a{display:flow-root}.empty-state_root__XfbqI h3{position:relative;margin:var(--space-5) 0 0;color:var(--foreground);font-size:var(--text-base);font-weight:500;line-height:var(--leading-body)}.empty-state_root__XfbqI p{position:relative;max-width:18rem;margin:var(--space-2) auto 0;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}.empty-state_line__tnvL7{display:block;text-wrap:balance}.empty-state_action__Wqv_Q{display:flex;flex-wrap:wrap;justify-content:center;gap:var(--space-3);margin-top:var(--space-5)}@keyframes empty-state_empty-state-icon__YVH_T{0%{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}@media (prefers-reduced-motion:reduce){.empty-state_icon__DNrWo{animation:none}}", {"root":"empty-state_root__XfbqI","icon":"empty-state_icon__DNrWo","empty-state-icon":"empty-state_empty-state-icon__YVH_T","glyph":"empty-state_glyph__EMeMU","frame":"empty-state_frame__QwfP7","copy":"empty-state_copy__WzH6a","line":"empty-state_line__tnvL7","action":"empty-state_action__Wqv_Q"});
A.reg(94274, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => D });
  var i = a(95155), r = a(12115), n = a(55809), l = a(25354), s = a(18310), u = a(28245), o = a(92171), d = a(80642), c = a(7770), p = a(66754), m = a.n(p);
  let { spring: h, duration: f, blur: b } = c.T, x = [...c.T.ease.enter], g = [...c.T.ease.standard], y = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], _ = ({ visualDuration: e2, bounce: t2 }) => {
    let a2 = 2 * Math.PI / (1.2 * e2);
    return {
      type: "spring",
      stiffness: a2 * a2,
      damping: 2 * (1 - t2) * a2,
      restDelta: 2e-3,
      restSpeed: 0.02
    };
  }, v = _(h.snappy), j = _(h.morph), w = 9, N = (e2) => (String(e2).split(".")[1] ?? "").length, k = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), $ = (e2) => e2 >= "0" && e2 <= "9", M = {
    enter: (e2) => ({
      width: 0,
      scale: 0.6,
      opacity: 0,
      y: `${0.3 * e2}em`,
      filter: `blur(${b.soft}px)`
    }),
    center: {
      width: "auto",
      scale: 1,
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transitionEnd: { filter: "none" },
      transition: {
        width: h.morph,
        scale: h.morph,
        opacity: h.morph,
        y: h.snappy,
        filter: { duration: f.standard, ease: x }
      }
    },
    exit: (e2) => ({
      width: 0,
      scale: 0.6,
      opacity: 0,
      y: `${-0.3 * e2}em`,
      filter: `blur(${b.subtle}px)`,
      transition: {
        width: h.smooth,
        scale: h.smooth,
        y: { duration: f.fast, ease: g },
        opacity: { duration: f.instant },
        filter: { duration: f.instant }
      }
    })
  }, P = {
    enter: { width: "auto", scale: 1, opacity: 0, y: 0, filter: "none" },
    center: {
      width: "auto",
      scale: 1,
      opacity: 1,
      y: 0,
      filter: "none",
      transition: { duration: f.instant }
    },
    exit: { width: 0, opacity: 0, transition: { duration: 0 } }
  };
  function F({ position: e2, digit: t2 }) {
    let a2 = (e3) => ((t2 - e3) % 10 + 15) % 10 - 5, r2 = (0, n.G)(e2, (e3) => `${1.05 * a2(e3)}em`), s2 = (0, n.G)(e2, (e3) => Math.max(0, 1 - Math.abs(a2(e3)) ** 1.5 * 1.1)), u2 = (0, n.G)(e2, (e3) => Math.abs(a2(e3)) >= 1 ? "hidden" : "visible"), o2 = (0, n.G)(e2, (e3) => {
      let t3 = Math.abs(a2(e3));
      return t3 < 0.02 || t3 >= 1 ? "none" : `blur(${(t3 * b.soft * 0.75).toFixed(2)}px)`;
    });
    return (0, i.jsx)(l.PY1.span, {
      className: m().glyph,
      style: { y: r2, opacity: s2, filter: o2, visibility: u2 },
      children: t2
    });
  }
  function S({ digit: e2, direction: t2 }) {
    let a2 = (0, s.I)(), n2 = (0, u.d)(e2), l2 = (0, r.useRef)({ digit: e2, target: e2 });
    return (0, r.useLayoutEffect)(() => {
      let i2 = l2.current;
      i2.digit !== e2 && (i2.target += t2 > 0 ? (e2 - i2.digit + 10) % 10 : -((i2.digit - e2 + 10) % 10), i2.digit = e2, a2 ? n2.jump(i2.target) : (0, o.i)(n2, i2.target, v));
    }, [e2, t2, n2, a2]), (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("span", { className: m().sizer, children: "0" }),
        y.map((e3) => (0, i.jsx)(F, { position: n2, digit: e3 }, e3))
      ]
    });
  }
  function I({ value: e2, text: t2 }) {
    let a2, n2, u2, o2, c2 = (0, s.I)(), [p2, h2] = (0, r.useState)({ value: e2, direction: 1 });
    p2.value !== e2 && h2({ value: e2, direction: e2 > p2.value ? 1 : -1 });
    let f2 = p2.value === e2 ? p2.direction : e2 > p2.value ? 1 : -1;
    return (0, i.jsx)("span", {
      className: m().number,
      children: (0, i.jsx)(d.N, {
        initial: false,
        custom: f2,
        children: (n2 = (a2 = [...t2]).findIndex($), u2 = a2.length - 1 - [...a2].reverse().findIndex($), o2 = a2.filter($).length, a2.map(
          (e3, t3) => n2 < 0 || t3 < n2 ? { key: `p${t3}${e3}`, text: e3 } : t3 > u2 ? { key: `s${a2.length - t3}${e3}`, text: e3 } : $(e3) ? { key: `d${--o2}`, digit: Number(e3) } : { key: `g${o2}${e3}`, text: e3 }
        )).map(
          (e3) => (0, i.jsx)(
            l.PY1.span,
            {
              className: "digit" in e3 ? m().column : m().symbol,
              custom: f2,
              variants: c2 ? P : M,
              initial: "enter",
              animate: "center",
              exit: "exit",
              children: "digit" in e3 ? (0, i.jsx)(S, { digit: e3.digit, direction: f2 }) : e3.text
            },
            e3.key
          )
        )
      })
    });
  }
  let A = { opacity: 0, scale: 0.6, y: 6, filter: `blur(${b.subtle}px)` }, L = {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transitionEnd: { filter: "none" }
  }, G = {
    opacity: 0,
    scale: 0.8,
    y: 4,
    filter: `blur(${b.subtle}px)`,
    transition: { duration: f.instant, ease: g }
  }, R = {
    ...h.snappy,
    opacity: { duration: f.fast, ease: x },
    filter: { duration: f.fast, ease: x }
  };
  function C({
    quiet: e2,
    index: t2,
    shown: a2,
    value: r2,
    text: u2,
    low: o2,
    high: c2,
    ariaLabel: p2,
    labelledBy: b2,
    active: x2,
    lifted: g2,
    bubble: y2,
    disabled: _2,
    onKeyDown: v2,
    onFocus: j2,
    onBlur: w2
  }) {
    let N2 = (0, s.I)(), k2 = (0, n.G)(a2, (e3) => `${e3 - 100}%`);
    return (0, i.jsxs)(l.PY1.div, {
      className: m().thumbLayer,
      style: { x: k2, zIndex: x2 ? 2 : 1 },
      children: [
        (0, i.jsx)(l.PY1.div, {
          role: "slider",
          "data-thumb": "",
          "data-index": t2,
          "data-active": g2 || void 0,
          "data-quiet": e2 || void 0,
          className: m().thumb,
          tabIndex: _2 ? -1 : 0,
          "aria-label": p2,
          "aria-labelledby": p2 ? void 0 : b2,
          "aria-valuemin": o2,
          "aria-valuemax": c2,
          "aria-valuenow": r2,
          "aria-valuetext": u2,
          "aria-orientation": "horizontal",
          "aria-disabled": _2 || void 0,
          initial: false,
          animate: { scale: g2 ? 1.16 : 1 },
          transition: N2 ? { duration: 0 } : h.snappy,
          onKeyDown: v2,
          onFocus: j2,
          onBlur: w2
        }),
        (0, i.jsx)(l.PY1.span, {
          className: m().bubbleAnchor,
          style: { "--at": a2 },
          children: (0, i.jsx)(d.N, {
            children: y2 && (0, i.jsx)(
              l.PY1.span,
              {
                className: m().bubble,
                "aria-hidden": "true",
                initial: N2 ? { opacity: 0 } : A,
                animate: L,
                exit: N2 ? { opacity: 0, transition: { duration: f.instant } } : G,
                transition: N2 ? { duration: f.instant } : R,
                children: (0, i.jsx)(I, { value: r2, text: u2 })
              },
              "bubble"
            )
          })
        })
      ]
    });
  }
  function D({
    label: e2,
    value: t2,
    defaultValue: a2,
    onValueChange: d2,
    onValueCommit: c2,
    min: p2 = 0,
    max: h2 = 100,
    step: f2 = 1,
    largeStep: b2,
    marks: x2,
    minStepsBetweenThumbs: g2 = 0,
    format: y2,
    showValue: _2 = true,
    thumbLabels: $2,
    start: M2,
    end: P2,
    name: F2,
    disabled: S2,
    className: A2
  }) {
    let L2 = (0, s.I)(), G2 = (0, r.useId)(), R2 = f2 > 0 ? f2 : 1, E = h2 - p2 || 1, T = Array.isArray(t2 ?? a2), z = (e3) => void 0 === e3 ? [p2, h2].slice(0, T ? 2 : 1) : Array.isArray(e3) ? [e3[0], e3[1]] : [e3], [B, Y] = (0, r.useState)(() => z(a2)), Z = void 0 === t2 ? B : z(t2), q = Math.max(N(R2), N(p2)), U = y2 ?? ((e3) => e3.toLocaleString("en-US", {
      minimumFractionDigits: q,
      maximumFractionDigits: q
    })), V = T ? g2 * R2 : 0, K = (e3) => (e3 - p2) / E * 100, X = (e3) => p2 + e3 / 100 * E, H = (e3) => Number((p2 + Math.round((e3 - p2) / R2) * R2).toFixed(q)), Q = (e3, t3) => 1 === e3 ? t3[0] + V : p2, W = (e3, t3) => 0 === e3 && T ? t3[1] - V : h2, O = (e3, t3, a3) => k(H(k(t3, p2, h2)), Q(e3, a3), W(e3, a3)), J = (0, r.useRef)(null), ee = (0, r.useRef)(null), et = (0, r.useRef)(Z), ea = (0, r.useRef)(Z.map(K)), ei = (0, r.useRef)(null), er = (0, r.useRef)(false), en = (0, r.useRef)(void 0), [el, es] = (0, r.useState)(null), [eu, eo] = (0, r.useState)(null), [ed, ec] = (0, r.useState)(null), [ep, em] = (0, r.useState)(+!!T), [eh, ef] = (0, r.useState)(null), eb = (0, u.d)(K(Z[0])), ex = (0, u.d)(K(Z[1] ?? Z[0])), eg = (0, u.d)(0), ey = (0, u.d)(0), e_ = (0, n.G)(() => eb.get() + eg.get()), ev = (0, n.G)(() => ex.get() + ey.get()), ej = (0, n.G)(() => {
      let e3 = T ? k(e_.get(), 0, 100) : 0, t3 = k((T ? ev : e_).get(), 0, 100);
      return `inset(0 ${(100 - t3).toFixed(3)}% 0 ${e3.toFixed(3)}% round 999px)`;
    }), ew = [
      { pos: eb, lag: eg, shown: e_ },
      { pos: ex, lag: ey, shown: ev }
    ], eN = (e3) => T ? [e3[0], e3[1]] : e3[0];
    function ek(e3, a3) {
      let i2 = et.current;
      if (i2[e3] === a3) return;
      let r2 = i2.map((t3, i3) => i3 === e3 ? a3 : t3);
      et.current = r2, void 0 === t2 && Y(r2), d2?.(eN(r2));
    }
    function e$(e3) {
      let t3 = ee.current?.querySelector(`[data-index="${e3}"]`);
      t3 && document.activeElement !== t3 && (ef(e3), er.current = true, t3.focus({ preventScroll: true }), er.current = false);
    }
    (0, r.useLayoutEffect)(() => {
      et.current = Z, Z.forEach((e3, t3) => {
        let a3 = K(e3), i2 = ew[t3];
        if (ei.current?.index === t3 || ea.current[t3] === a3) return;
        ea.current[t3] = a3;
        let r2 = i2.pos.get() + i2.lag.get();
        i2.lag.jump(0), i2.pos.jump(r2), L2 ? i2.pos.jump(a3) : (0, o.i)(i2.pos, a3, v);
      });
    }), (0, r.useEffect)(() => () => window.clearTimeout(en.current), []);
    let eM = () => J.current?.getBoundingClientRect().width || 1;
    function eP(e3, t3) {
      if (!T) return 0;
      let a3 = Math.abs(e3 - K(t3[0])), i2 = Math.abs(e3 - K(t3[1]));
      return a3 === i2 ? e3 < K(t3[0]) ? 0 : 1 : a3 < i2 ? 0 : 1;
    }
    function eF(e3, t3, a3, i2) {
      let r2 = ew[t3], n2 = r2.pos.get() + r2.lag.get();
      e3.index = t3, e3.grab = i2 ? 0 : a3 - n2, r2.lag.jump(0), r2.pos.jump(n2), es(t3), em(t3), window.clearTimeout(en.current), ec(null), e$(t3), i2 && eS(e3, a3, 0, true);
    }
    function eS(e3, t3, a3, i2 = false) {
      let r2 = e3.index;
      if (null === r2) return;
      let n2 = ew[r2], l2 = et.current, s2 = eM(), u2 = t3 - e3.grab, d3 = k(u2, K(Q(r2, l2)), K(W(r2, l2))), c3 = L2 ? d3 : d3 + ((e4, t4 = w) => Math.sign(e4) * (1 - 1 / (0.55 * Math.abs(e4) / t4 + 1)) * t4)(
        (u2 - d3) / 100 * s2
      ) / s2 * 100;
      if (i2 && !L2) {
        let e4 = n2.pos.get();
        n2.pos.jump(c3), n2.lag.jump(e4 - c3), (0, o.i)(n2.lag, 0, v);
      } else n2.pos.set(c3);
      e3.raw = u2, e3.samples.push({ t: a3, p: c3 }), e3.samples.length > 6 && e3.samples.shift(), ek(r2, O(r2, X(u2), l2));
    }
    function eI(e3) {
      let t3 = ei.current;
      if (!t3 || t3.pointer !== e3.pointerId) return;
      ei.current = null;
      let a3 = t3.index;
      if (null === a3) return;
      let i2 = ew[a3], r2 = et.current, n2 = eM(), l2 = t3.samples, s2 = l2[0], u2 = l2[l2.length - 1], d3 = u2 && s2 ? (u2.t - s2.t) / 1e3 : 0, p3 = (u2 && s2 && d3 > 8e-3 && e3.timeStamp - u2.t < 60 ? (u2.p - s2.p) / d3 : 0) + i2.lag.getVelocity(), m2 = R2 / E * 100, h3 = "pointerup" === e3.type && m2 / 100 * n2 >= 12 ? k(0.099 * p3, -m2, m2) : 0, f3 = O(a3, X(t3.raw + h3), r2), b3 = i2.pos.get() + i2.lag.get(), x3 = K(f3);
      i2.lag.jump(0), i2.pos.jump(b3), ea.current[a3] = x3, L2 ? i2.pos.jump(x3) : (0, o.i)(i2.pos, x3, { ...v, velocity: p3 }), ek(a3, f3), es(null), window.clearTimeout(en.current), ec(a3), en.current = window.setTimeout(() => ec(null), 700), c2?.(eN(et.current));
    }
    let eA = (x2 ?? []).map((e3) => "number" == typeof e3 ? { value: e3 } : e3).filter((e3) => e3.value >= p2 && e3.value <= h2), eL = eA.filter((e3) => e3.value > p2 && e3.value < h2), eG = eA.filter((e3) => e3.label), eR = $2 ?? [`${e2}, minimum`, `${e2}, maximum`];
    return (0, i.jsxs)("div", {
      className: [m().root, A2].filter(Boolean).join(" "),
      "data-disabled": S2 || void 0,
      "data-dragging": null !== el || void 0,
      "data-marks": eG.length > 0 || void 0,
      children: [
        (0, i.jsxs)("div", {
          className: m().header,
          children: [
            (0, i.jsx)("span", { id: G2, className: m().label, children: e2 }),
            _2 && (0, i.jsxs)("span", {
              className: m().readout,
              "aria-hidden": "true",
              children: [
                (0, i.jsx)(I, { value: Z[0], text: U(Z[0]) }),
                T && (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("span", {
                      className: m().dash,
                      children: "\u2013"
                    }),
                    (0, i.jsx)(I, { value: Z[1], text: U(Z[1]) })
                  ]
                })
              ]
            })
          ]
        }),
        (0, i.jsxs)("div", {
          className: m().body,
          children: [
            M2 && (0, i.jsx)("div", { className: m().start, children: M2 }),
            (0, i.jsxs)("div", {
              className: m().control,
              onPointerDown: function(e3) {
                if (S2 || 0 !== e3.button || !e3.isPrimary) return;
                let t3 = J.current?.getBoundingClientRect();
                if (!t3) return;
                let a3 = (e3.clientX - t3.left) / (t3.width || 1) * 100, i2 = e3.target.closest("[data-thumb]"), r2 = et.current;
                e3.currentTarget.setPointerCapture(e3.pointerId);
                let n2 = {
                  pointer: e3.pointerId,
                  index: null,
                  grab: 0,
                  x: e3.clientX,
                  raw: a3,
                  samples: []
                };
                (ei.current = n2, i2 && T && r2[0] === r2[1]) ? e$(Number(i2.dataset.index)) : (eF(n2, i2 ? Number(i2.dataset.index) : eP(a3, r2), a3, !i2), n2.samples = [
                  { t: e3.timeStamp, p: ew[n2.index ?? 0].pos.get() }
                ]);
              },
              onPointerMove: function(e3) {
                let t3 = ei.current;
                if (!t3 || t3.pointer !== e3.pointerId) return;
                let a3 = J.current?.getBoundingClientRect();
                if (!a3) return;
                let i2 = (e3.clientX - a3.left) / (a3.width || 1) * 100;
                if (null === t3.index) {
                  let r2 = e3.clientX - t3.x;
                  if (2 > Math.abs(r2)) return;
                  eF(t3, r2 < 0 ? 0 : 1, i2 - r2 / (a3.width || 1) * 100, false);
                }
                eS(t3, i2, e3.timeStamp);
              },
              onPointerUp: eI,
              onPointerCancel: eI,
              onLostPointerCapture: eI,
              onMouseDown: (e3) => e3.preventDefault(),
              children: [
                (0, i.jsxs)("div", {
                  ref: J,
                  className: m().track,
                  children: [
                    eL.map(
                      (e3) => (0, i.jsx)(
                        "span",
                        {
                          className: m().tick,
                          style: { left: `${K(e3.value)}%` }
                        },
                        e3.value
                      )
                    ),
                    (0, i.jsx)(l.PY1.div, {
                      className: m().fill,
                      style: { clipPath: ej },
                      children: eL.map(
                        (e3) => (0, i.jsx)(
                          "span",
                          {
                            className: m().tick,
                            style: { left: `${K(e3.value)}%` }
                          },
                          e3.value
                        )
                      )
                    })
                  ]
                }),
                (0, i.jsx)("div", {
                  ref: ee,
                  className: m().thumbs,
                  children: Z.map(
                    (e3, t3) => (0, i.jsx)(
                      C,
                      {
                        quiet: eh === t3,
                        index: t3,
                        shown: ew[t3].shown,
                        value: e3,
                        text: U(e3),
                        low: Q(t3, Z),
                        high: W(t3, Z),
                        ariaLabel: T ? eR[t3] : void 0,
                        labelledBy: G2,
                        active: ep === t3,
                        lifted: el === t3,
                        bubble: el === t3 || eu === t3 || ed === t3,
                        disabled: S2,
                        onKeyDown: (e4) => (function(e5, t4) {
                          let a3;
                          if (S2) return;
                          let i2 = et.current, r2 = i2[e5], n2 = b2 ?? Math.max(R2, H(p2 + E / 10) - p2), l2 = {
                            ArrowRight: R2,
                            ArrowUp: R2,
                            ArrowLeft: -R2,
                            ArrowDown: -R2,
                            PageUp: n2,
                            PageDown: -n2
                          };
                          if ("Home" === t4.key) a3 = Q(e5, i2);
                          else if ("End" === t4.key) a3 = W(e5, i2);
                          else {
                            if (!(t4.key in l2)) return;
                            a3 = r2 + (t4.shiftKey && /^Arrow/.test(t4.key) ? Math.sign(l2[t4.key]) * n2 : l2[t4.key]);
                          }
                          t4.preventDefault(), eo(e5), ef(null), em(e5);
                          let s2 = O(e5, a3, i2);
                          if (s2 === r2) {
                            let t5 = Math.sign(a3 - r2);
                            t5 && !L2 && (0, o.i)(ew[e5].pos, ea.current[e5], {
                              ...j,
                              velocity: 150 * t5 / eM() * 100
                            });
                            return;
                          }
                          ek(e5, s2), c2?.(eN(et.current));
                        })(t3, e4),
                        onFocus: (e4) => {
                          !er.current && e4.currentTarget.matches(":focus-visible") && eo(t3);
                        },
                        onBlur: () => {
                          eo((e4) => e4 === t3 ? null : e4), ef((e4) => e4 === t3 ? null : e4);
                        }
                      },
                      t3
                    )
                  )
                })
              ]
            }),
            P2 && (0, i.jsx)("div", { className: m().end, children: P2 }),
            eG.length > 0 && (0, i.jsx)("div", {
              className: m().marks,
              "aria-hidden": "true",
              children: eG.map((e3) => {
                let t3;
                return (0, i.jsx)(
                  "span",
                  {
                    className: m().markLabel,
                    "data-on": (t3 = e3.value, (T ? t3 >= Z[0] && t3 <= Z[1] : t3 <= Z[0]) || void 0),
                    "data-edge": e3.value === p2 ? "start" : e3.value === h2 ? "end" : void 0,
                    style: { left: `${K(e3.value)}%` },
                    onClick: () => (function(e4) {
                      if (S2) return;
                      let t4 = et.current, a3 = eP(K(e4), t4), i2 = O(a3, e4, t4);
                      em(a3), e$(a3), i2 !== t4[a3] && (ek(a3, i2), c2?.(eN(et.current)));
                    })(e3.value),
                    children: e3.label
                  },
                  e3.value
                );
              })
            })
          ]
        }),
        F2 && Z.map(
          (e3, t3) => (0, i.jsx)(
            "input",
            { type: "hidden", name: F2, value: e3, disabled: S2 },
            t3
          )
        )
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.cssFor("search-results", [34050,42842,59316,66754,69112,86014]);
A.item("search-results", {entry:34594, export:"SearchResults", kind:"block", tier:"pro", unresolved:[]});
})();