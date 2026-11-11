/* semantic-zoom (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(8962, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => k });
  var h = a(51811);
  let d = {
    name: "maximize-2",
    size: 24,
    node: [
      ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
      ["path", { d: "m21 3-7 7", key: "1l2asr" }],
      ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
      ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
    ]
  };
  d.node;
  let k = (0, h.A)(d);
}

__m(__module,__exports,__require);
});
A.regCss(19108, ".root{box-sizing:border-box;width:min(100%,1200px);min-width:0;margin-inline:auto;overflow:hidden;container-type:inline-size;contain-intrinsic-inline-size:1200px;border:1px solid var(--border);border-radius:16px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:13px;letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root *,.root :after,.root :before{box-sizing:border-box}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.header{display:grid;gap:2px;padding:16px 20px;border-bottom:1px solid var(--border)}\n@container (max-width: 600px){.header{padding:16px}\n.title{margin:0;font-size:var(--text-base);font-weight:500;line-height:1.4}\n.lede{margin:0;color:var(--text-secondary);font-size:13px;text-wrap:pretty}\n.body{display:grid}\n@container (min-width: 900px){.body{grid-template-columns:minmax(0,1fr) 264px}\n.panel{border-left:1px solid var(--border)}\n@container (max-width: 899px){.panel{border-top:1px solid var(--border)}\n.panel{display:grid;align-content:start;gap:20px;min-width:0;padding:16px 20px 20px}\n@container (max-width: 899px){.panel{grid-template-columns:minmax(0,1fr) minmax(0,1.2fr);column-gap:32px}\n.panel{grid-template-columns:minmax(0,1fr);padding:16px}\n.stage{position:relative;min-width:0;height:clamp(400px,48cqi,580px);overflow:hidden;background:var(--surface);cursor:grab;touch-action:pan-y;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent}\n.stage[data-zoomed=true]{touch-action:none}\n.stage[data-clickable=true]{cursor:pointer}\n.stage[data-dragging=true]{cursor:grabbing}\n.stage{height:420px}\n.canvas{position:absolute;inset:0;display:block;width:100%;height:100%}\n.crumbs{position:absolute;top:12px;left:12px;z-index:2;max-width:calc(100% - 172px);height:32px;overflow:hidden;border:1px solid var(--border);border-radius:10px;background:var(--surface);box-shadow:var(--shadow-resting);cursor:default}\n.crumbs{max-width:calc(100% - 72px)}\n.crumbList{display:flex;align-items:center;width:max-content;height:100%;margin:0;padding:0 4px;list-style:none}\n.crumb{display:inline-flex;flex:none;align-items:center;white-space:nowrap}\n.crumb:not(:nth-last-child(-n+2)),.crumb:nth-last-child(2) .sep{display:none}\n.sep{flex:none;margin:0 1px;color:var(--text-muted)}\n.crumbBtn,.crumbHere{display:block;max-width:18ch;height:24px;padding:0 8px;overflow:hidden;border-radius:6px;line-height:24px;text-overflow:ellipsis;white-space:nowrap}\n.crumbBtn{border:0;background:transparent;color:var(--text-secondary);font:inherit;letter-spacing:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.crumbBtn:active{background:var(--surface-muted)}\n@media (hover:hover) and (pointer:fine){.crumbBtn:hover,.tour:hover,.zoom button:not(:disabled):hover{color:var(--foreground);background:var(--surface-muted)}\n.crumbBtn{max-width:12ch}\n@media (prefers-reduced-motion:reduce){.card,.crumbBtn,.fill,.hint,.mini,.strip,.tourLabels>span,.tour{transition:none}\n.crumbHere{max-width:26ch;color:var(--foreground);font-weight:500}\n.crumbHere{max-width:16ch}\n.tour{position:absolute;top:12px;right:12px;z-index:2;display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 12px 0 10px;border:1px solid var(--border);border-radius:10px;background:var(--surface);box-shadow:var(--shadow-resting);color:var(--foreground);font:inherit;font-weight:500;letter-spacing:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n.tour:active{background:var(--surface-muted)}\n.tour{width:32px;padding:0;justify-content:center}\n.tourIcon{display:grid;place-items:center;color:var(--text-secondary)}\n.tourLabels{display:grid}\n.tourLabels>span{grid-area:1/1;white-space:nowrap;transition:opacity var(--duration-standard) var(--ease-standard),translate var(--duration-spring) var(--ease-spring)}\n.tourLabels>span[data-on=false]{opacity:0;translate:0 5px}\n.tourLabels{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}\n.card{position:absolute;top:0;left:0;z-index:3;width:252px;padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:var(--surface-raised);box-shadow:var(--shadow-floating);pointer-events:none;opacity:0;scale:.96;transform-origin:0 0;transition:opacity var(--duration-fast) var(--ease-standard),scale var(--duration-spring) var(--ease-spring);will-change:transform}\n.card[data-open=true]{opacity:1;scale:1}\n.cardName{overflow:hidden;font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.cardMeta{display:flex;align-items:center;gap:6px;margin-top:1px;overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);white-space:nowrap;text-overflow:ellipsis}\n.cardRows{display:grid;gap:4px;margin:10px 0 0;padding-top:10px;border-top:1px solid var(--border-subtle)}\n.cardRow{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:20px}\n.cardRow dt{min-width:0;overflow:hidden;color:var(--text-secondary);text-overflow:ellipsis;white-space:nowrap}\n.cardRow dd{flex:none;margin:0;font-weight:500;font-variant-numeric:tabular-nums;text-align:right}\n.soft{color:var(--text-muted);font-weight:400}\n.cardHint{margin:10px 0 0;color:var(--text-muted);font-size:var(--text-xs)}\n.who{display:inline-flex;align-items:center;gap:7px}\n.person{display:flex;align-items:center;gap:10px}\n.person>div{min-width:0}\n.dot{flex:none;width:7px;height:7px;border-radius:50%;background:var(--text-muted)}\n.dot[data-tone=on-track]{background:var(--success)}\n.dot[data-tone=at-risk]{background:var(--warning)}\n.dot[data-tone=off-track]{background:var(--danger)}\n.status{flex:none;width:8px;height:8px;border-radius:50%;box-shadow:inset 0 0 0 1.5px var(--border-strong)}\n.status[data-status=done]{background:var(--success);box-shadow:none}\n.status[data-status=progress],.status[data-status=review]{background:var(--accent);box-shadow:none}\n.status[data-status=blocked]{background:var(--danger);box-shadow:none}\n.face{position:relative;display:inline-grid;flex:none;overflow:hidden;border-radius:50%;background:var(--surface-muted);box-shadow:inset 0 0 0 1px var(--border)}\n.faceImg{width:100%;height:100%;object-fit:cover;object-position:50% 22%}\n.initials{display:grid;place-items:center;width:100%;height:100%;color:var(--text-secondary);font-weight:500;letter-spacing:0}\n.mini{position:absolute;bottom:12px;left:12px;z-index:2;width:172px;height:88px;overflow:hidden;border:1px solid var(--border);border-radius:10px;background:var(--surface);box-shadow:var(--shadow-resting);opacity:0;translate:0 6px;pointer-events:none;transition:opacity var(--duration-standard) var(--ease-standard),translate var(--duration-spring) var(--ease-spring)}\n.mini[data-visible=true]{opacity:1;translate:0 0;pointer-events:auto}\n.mini{width:128px;height:66px}\n.miniCanvas{display:block;width:100%;height:100%;cursor:pointer;touch-action:none}\n.hint{position:absolute;bottom:20px;left:20px;z-index:1;max-width:calc(100% - 240px);margin:0;color:var(--text-muted);font-size:var(--text-xs);pointer-events:none;transition:opacity var(--duration-considered) var(--ease-standard)}\n.hint[data-hidden=true]{opacity:0}\n.hint{max-width:calc(100% - 200px)}\n@container (max-width: 480px){.hint{bottom:56px;left:16px;max-width:calc(100% - 32px)}\n.hintCoarse{display:none}\n.hintCoarse{display:inline}\n@media (pointer:coarse){.hintFine{display:none}\n.zoom{position:absolute;right:12px;bottom:12px;z-index:2;display:flex;align-items:center;gap:2px;padding:2px;border:1px solid var(--border);border-radius:10px;background:var(--surface);box-shadow:var(--shadow-resting)}\n.zoom button{display:grid;place-items:center;width:28px;height:28px;padding:0;border:0;border-radius:8px;background:transparent;color:var(--text-secondary);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n.zoom button:active{background:var(--surface-muted);color:var(--foreground)}\n.zoom button:disabled{opacity:.35;cursor:default}\n.readout{min-width:46px;color:var(--text-secondary);font-size:var(--text-xs);font-variant-numeric:tabular-nums;font-weight:500;text-align:center}\n.readout{min-width:38px}\n.scope{position:relative;min-height:38px}\n.kpiMain,.scope{grid-column:1}\n.scopeInner{display:grid;gap:1px;min-width:0}\n.scopeKind{color:var(--text-muted);font-size:var(--text-xs)}\n.scopeName{overflow:hidden;font-size:var(--text-base);font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.kpiMain{display:grid;gap:4px}\n.kpiLabel{color:var(--text-muted);font-size:var(--text-xs)}\n.kpiValue{font-size:var(--text-2xl);font-weight:500;letter-spacing:-.02em;line-height:1.15;font-variant-numeric:tabular-nums}\n.track{display:block;height:4px;margin-top:8px;overflow:hidden;border-radius:var(--radius-pill);background:var(--border-subtle)}\n.fill{display:block;height:100%;border-radius:inherit;background:var(--accent);transition:width var(--duration-spring) var(--ease-spring)}\n.kpis{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:0;padding-bottom:16px;border-bottom:1px solid var(--border-subtle)}\n.kpis>div{display:grid;gap:2px;min-width:0}\n.kpis dt{color:var(--text-muted);font-size:var(--text-xs);white-space:nowrap}\n.kpis dd{margin:0;font-size:var(--text-base);font-weight:500;white-space:nowrap}\n.kpis dd[data-alert=true]{color:var(--danger)}\n.kpis{grid-column:2;grid-row:1/span 2;align-self:start;padding-bottom:0;border-bottom:0}\n.kpis{grid-column:1;grid-row:auto}\n.people{display:grid;gap:10px}\n.people{grid-column:1/-1;grid-template-columns:auto 1fr;align-items:center;gap:8px 16px;padding-top:18px;border-top:1px solid var(--border-subtle)}\n.people{grid-template-columns:minmax(0,1fr)}\n.peopleHead{display:flex;align-items:baseline;justify-content:space-between;color:var(--text-muted);font-size:var(--text-xs)}\n.peopleHead{gap:8px}\n.peopleCount{color:var(--foreground);font-weight:500}\n.stack{position:relative;display:flex;align-items:center;min-height:34px;margin:0;padding:0;list-style:none}\n.stack>li{display:grid;flex:none;margin-right:-6px;border-radius:50%;box-shadow:0 0 0 2px var(--surface)}\n.more{place-items:center;width:28px;height:28px;background:var(--surface-muted);color:var(--text-secondary);font-size:var(--text-xs);font-variant-numeric:tabular-nums;font-weight:500}\n.peopleNote{margin:0;color:var(--text-muted);font-size:var(--text-xs)}\n.peopleNote{text-align:right}\n.peopleNote{text-align:left}\n.roll{position:relative;display:inline-flex}\n.rollVisual{display:inline-flex;font-variant-numeric:tabular-nums;white-space:nowrap}\n.wheel{display:inline-block;height:1.2em;overflow:hidden;line-height:1.2em}\n.strip{display:flex;flex-direction:column;transform:translateY(calc(var(--d) * -1.2em));transition:transform var(--duration-spring) var(--ease-spring) calc(var(--i) * 26ms)}\n.strip>span{display:block;height:1.2em;text-align:center}\n@starting-style{.strip{transform:translateY(0)}\n.sym{display:inline-block;line-height:1.2em;white-space:pre}", {"root":"root","srOnly":"srOnly","header":"header","title":"title","lede":"lede","body":"body","panel":"panel","stage":"stage","canvas":"canvas","crumbs":"crumbs","crumbList":"crumbList","crumb":"crumb","sep":"sep","crumbBtn":"crumbBtn","crumbHere":"crumbHere","tour":"tour","zoom":"zoom","card":"card","fill":"fill","hint":"hint","mini":"mini","strip":"strip","tourLabels":"tourLabels","tourIcon":"tourIcon","cardName":"cardName","cardMeta":"cardMeta","cardRows":"cardRows","cardRow":"cardRow","soft":"soft","cardHint":"cardHint","who":"who","person":"person","dot":"dot","status":"status","face":"face","faceImg":"faceImg","initials":"initials","miniCanvas":"miniCanvas","hintCoarse":"hintCoarse","hintFine":"hintFine","readout":"readout","scope":"scope","kpiMain":"kpiMain","scopeInner":"scopeInner","scopeKind":"scopeKind","scopeName":"scopeName","kpiLabel":"kpiLabel","kpiValue":"kpiValue","track":"track","kpis":"kpis","people":"people","peopleHead":"peopleHead","peopleCount":"peopleCount","stack":"stack","more":"more","peopleNote":"peopleNote","roll":"roll","rollVisual":"rollVisual","wheel":"wheel","sym":"sym"});
A.reg(67542, function(__module,__exports,__require){
"use strict";
function __m(e, t, s) {
  "use strict";
  let i, a;
  s.r(t), s.d(t, { SemanticZoom: () => ea, default: () => er });
  var r = s(95155), n = s(12115), o = s(5772), h = s(18310), l = s(25354), c = s(80642), d = s(76721), m = s(79267), p = s(36619), u = s(36565), f = s(2125), g = s(8962), x = s(7770);
  let y = ["Company", "Team", "Project", "Task", "Person"], k = {
    done: "Done",
    review: "In review",
    progress: "In progress",
    todo: "To do",
    blocked: "Blocked"
  }, b = {
    "on-track": "On track",
    "at-risk": "At risk",
    "off-track": "Off track"
  }, v = (e2, t2, s2) => {
    let i2 = e2.split(" ");
    return {
      name: e2,
      first: i2[0],
      initials: (i2[0][0] + i2[i2.length - 1][0]).toUpperCase(),
      role: t2,
      portrait: s2
    };
  }, w = [
    v(
      "Jasmine Brooks",
      "Engineering lead",
      "media/people/jasmine-brooks.svg"
    ),
    v("Emma Collins", "Design lead", "media/people/emma-collins.svg"),
    v("Marcus Johnson", "Growth lead", "media/people/marcus-johnson.svg"),
    v("Ava Mitchell", "Mobile lead", "media/people/ava-mitchell.svg"),
    v("Sofia Ramirez", "Data lead", "media/people/sofia-ramirez.svg"),
    v("Nathan Cole", "Staff engineer", "media/people/nathan-cole.svg"),
    v("Daniel Kim", "Backend engineer", "media/people/daniel-kim.svg"),
    v(
      "Olivia Bennett",
      "Site reliability engineer",
      "media/people/olivia-bennett.svg"
    ),
    v("Aiko Tanaka", "Security engineer"),
    v("Chloe Nguyen", "Product designer", "media/people/chloe-nguyen.svg"),
    v("Ben Okafor", "Product designer"),
    v("Hannah Walsh", "Content designer", "media/people/hannah-walsh.svg"),
    v("Mateo Alvarez", "Growth engineer", "media/people/mateo-alvarez.svg"),
    v(
      "Ryan Sullivan",
      "Lifecycle marketer",
      "media/people/ryan-sullivan.svg"
    ),
    v("Andre Williams", "Data analyst", "media/people/andre-williams.svg"),
    v("Tyler Hayes", "iOS engineer", "media/people/tyler-hayes.svg"),
    v("Mei Lin", "Android engineer"),
    v("Jordan Reyes", "Mobile QA engineer", "media/people/jordan-reyes.svg"),
    v("Nina Petrov", "Analytics engineer"),
    v("Elif Kaya", "Data scientist"),
    v("Diane Foster", "Data engineer", "media/people/diane-foster.svg")
  ], j = [
    "Write the spec",
    "Agree on scope",
    "Build behind a flag",
    "Add tests",
    "Review with the team",
    "QA on staging",
    "Update the docs",
    "Ship to 10%"
  ], M = [], _ = [], z = [], S = [
    {
      id: 0,
      kind: 0,
      parent: -1,
      children: [],
      x: 0,
      y: 0,
      w: 1648,
      h: 910,
      ref: 0,
      name: "Northstar Studio"
    }
  ], N = [], T = [], A = [], P = (e2) => {
    let t2 = { ...e2, id: S.length, children: [] };
    return S.push(t2), S[e2.parent].children.push(t2.id), t2.id;
  };
  i = 20260922, a = () => {
    let e2 = Math.imul((i = i + 1831565813 | 0) ^ i >>> 15, 1 | i);
    return (((e2 = e2 + Math.imul(e2 ^ e2 >>> 7, 61 | e2) ^ e2) ^ e2 >>> 14) >>> 0) / 4294967296;
  }, [
    {
      name: "Platform",
      lead: 0,
      members: [0, 5, 6, 7, 8],
      mission: "Billing, identity and the infrastructure under every request.",
      cols: 3,
      rows: 2,
      x: 0,
      y: 0,
      cw: 200,
      projects: [
        {
          name: "Billing v2",
          brief: "Move invoicing onto the new usage ledger.",
          health: "at-risk",
          due: 23,
          done: 0.42,
          blocker: "the ledger schema review with finance",
          tasks: [
            "Backfill invoices into the ledger",
            "Dual-write usage events",
            "Proration for mid-cycle upgrades",
            "Tax lines for EU customers",
            "Invoice PDF renderer",
            "Dunning email retries",
            "Reconcile Stripe payouts",
            "Migrate legacy coupons",
            "Load test month-end close",
            "Finance sign-off on totals"
          ]
        },
        {
          name: "SSO for enterprise",
          brief: "SAML and SCIM for Enterprise workspaces.",
          health: "on-track",
          due: 30,
          done: 0.43,
          blocker: "",
          tasks: [
            "SAML metadata upload",
            "SCIM user provisioning",
            "Group to role mapping",
            "Just-in-time accounts",
            "Enforce SSO setting",
            "Okta integration test",
            "Admin audit events"
          ]
        },
        {
          name: "Edge caching",
          brief: "Serve published pages from 30 edge regions.",
          health: "on-track",
          due: 12,
          done: 0.67,
          blocker: "",
          tasks: [
            "Cache key design",
            "Purge on publish",
            "Stale-while-revalidate headers",
            "Regional failover drill",
            "Cache hit dashboard",
            "Roll out to 10% of workspaces"
          ]
        },
        {
          name: "Postgres 17 upgrade",
          brief: "Upgrade the primary cluster with zero downtime.",
          health: "on-track",
          due: 8,
          done: 0.72,
          blocker: "",
          tasks: [
            "Replica on Postgres 17",
            "Replication lag alerts",
            "Extension compatibility",
            "Cutover runbook",
            "Rehearse cutover on staging",
            "Book maintenance window",
            "Retire old primary"
          ]
        },
        {
          name: "Audit log export",
          brief: "Stream audit events to customer SIEM tools.",
          health: "off-track",
          due: 41,
          done: 0.13,
          blocker: "the event schema sign-off from security",
          tasks: [
            "Event schema v1",
            "Splunk connector",
            "Datadog connector",
            "Retention settings",
            "Export screen in admin",
            "Backfill 90 days of events",
            "Signed delivery with HMAC",
            "Rate limits per workspace"
          ]
        },
        {
          name: "Rate limiting",
          brief: "Fair usage limits for the public API.",
          health: "on-track",
          due: 19,
          done: 0.5,
          blocker: "",
          tasks: [
            "Token bucket per key",
            "Document 429 responses",
            "Burst allowance for Enterprise",
            "Limit headers on responses",
            "Usage alert at 80%",
            "Shadow mode rollout"
          ]
        }
      ]
    },
    {
      name: "Product design",
      lead: 1,
      members: [1, 9, 10, 11],
      mission: "The design system and every first-run experience.",
      cols: 2,
      rows: 2,
      x: 704,
      y: 0,
      cw: 200,
      projects: [
        {
          name: "Design system 3.0",
          brief: "New tokens, dark mode and 40 rebuilt components.",
          health: "on-track",
          due: 27,
          done: 0.56,
          blocker: "",
          tasks: [
            "Color tokens in OKLCH",
            "Dark mode surfaces",
            "Button and input specs",
            "Table component",
            "Motion guidelines",
            "Icon set at 1.75 stroke",
            "Figma library release",
            "Migration guide",
            "Deprecate v2 components"
          ]
        },
        {
          name: "Onboarding redesign",
          brief: "First project in under five minutes.",
          health: "at-risk",
          due: 16,
          done: 0.38,
          blocker: "the template picker API from Platform",
          tasks: [
            "Map current drop-off",
            "Welcome checklist",
            "Template picker",
            "Invite teammates step",
            "Empty state artwork",
            "Usability test with 8 teams",
            "Copy review",
            "A/B test plan"
          ]
        },
        {
          name: "Mobile navigation",
          brief: "One tab bar for iOS and Android.",
          health: "on-track",
          due: 34,
          done: 0.33,
          blocker: "",
          tasks: [
            "Audit current navigation",
            "Tab bar prototype",
            "Search entry point",
            "Gesture spec",
            "Handoff to Mobile",
            "Accessibility review"
          ]
        },
        {
          name: "Accessibility audit",
          brief: "WCAG 2.2 AA across the web app.",
          health: "on-track",
          due: 44,
          done: 0.29,
          blocker: "",
          tasks: [
            "Keyboard paths in editor",
            "Screen reader labels",
            "Contrast in charts",
            "Reduced motion pass",
            "Focus order in dialogs",
            "Report for customers",
            "Fix list for Q4"
          ]
        }
      ]
    },
    {
      name: "Growth",
      lead: 2,
      members: [2, 12, 13, 14],
      mission: "Trials, pricing and the first 30 days.",
      cols: 2,
      rows: 2,
      x: 1192,
      y: 0,
      cw: 200,
      projects: [
        {
          name: "Pricing page test",
          brief: "Test annual-first pricing with 50% of visitors.",
          health: "on-track",
          due: 9,
          done: 0.71,
          blocker: "",
          tasks: [
            "Hypothesis and metrics",
            "Annual toggle design",
            "Experiment flag",
            "Stripe price IDs",
            "QA in five currencies",
            "Launch to 50%",
            "Readout doc"
          ]
        },
        {
          name: "Referral program",
          brief: "A free month for every team that joins.",
          health: "at-risk",
          due: 25,
          done: 0.25,
          blocker: "legal review of the referral terms",
          tasks: [
            "Reward rules",
            "Referral link service",
            "Fraud checks",
            "Invite page",
            "Credit on invoice",
            "Legal review of terms",
            "Launch email",
            "Referral dashboard"
          ]
        },
        {
          name: "Lifecycle emails",
          brief: "Rewrite the first 30 days of email.",
          health: "on-track",
          due: 14,
          done: 0.57,
          blocker: "",
          tasks: [
            "Audit current sends",
            "Day 1 welcome",
            "Day 3 template nudge",
            "Day 7 invite reminder",
            "Day 14 trial ending",
            "Plain text versions",
            "Unsubscribe center"
          ]
        },
        {
          name: "Trial conversion",
          brief: "Lift trial to paid from 18% to 24%.",
          health: "on-track",
          due: 38,
          done: 0.33,
          blocker: "",
          tasks: [
            "Cohort analysis of trials",
            "Paywall moments",
            "In-app upgrade prompt",
            "Sales assist for large teams",
            "Trial extension flow",
            "Win-back offer"
          ]
        }
      ]
    },
    {
      name: "Mobile",
      lead: 3,
      members: [3, 15, 16, 17],
      mission: "Northstar on iOS and Android.",
      cols: 4,
      rows: 1,
      x: 0,
      y: 588,
      cw: 208,
      projects: [
        {
          name: "Offline mode",
          brief: "Edit projects offline and sync later.",
          health: "at-risk",
          due: 31,
          done: 0.25,
          blocker: "sync conflict rules from Platform",
          tasks: [
            "Local database schema",
            "Sync conflict rules",
            "Queue writes offline",
            "Offline banner",
            "Attachment caching",
            "Conflict resolution screen",
            "Airplane mode test plan",
            "Beta for 500 people"
          ]
        },
        {
          name: "iOS widgets",
          brief: "Today and project widgets for the home screen.",
          health: "on-track",
          due: 11,
          done: 0.67,
          blocker: "",
          tasks: [
            "Widget sizes",
            "Timeline provider",
            "Deep links into projects",
            "Lock screen widget",
            "App Store screenshots",
            "Release notes"
          ]
        },
        {
          name: "Android performance",
          brief: "Cold start under 1.5 seconds.",
          health: "on-track",
          due: 20,
          done: 0.5,
          blocker: "",
          tasks: [
            "Baseline profiles",
            "Lazy load the editor",
            "Trace cold start",
            "Reduce APK size",
            "Image cache tuning",
            "Play Console vitals review"
          ]
        },
        {
          name: "Notification settings",
          brief: "Per-project push notification controls.",
          health: "off-track",
          due: 6,
          done: 0.29,
          blocker: "the preferences API migration",
          tasks: [
            "Settings screen",
            "Server-side preferences",
            "Quiet hours",
            "Digest mode",
            "Migrate old settings",
            "Permission prompt timing",
            "QA on 12 devices"
          ]
        }
      ]
    },
    {
      name: "Data and insights",
      lead: 4,
      members: [4, 18, 19, 20],
      mission: "Metrics everyone trusts.",
      cols: 3,
      rows: 1,
      x: 952,
      y: 588,
      cw: 208,
      projects: [
        {
          name: "Usage analytics",
          brief: "Show workspace admins who uses what.",
          health: "on-track",
          due: 18,
          done: 0.5,
          blocker: "",
          tasks: [
            "Event tracking plan",
            "Daily active members chart",
            "Feature adoption table",
            "CSV export",
            "Admin permissions",
            "Loading and empty states",
            "Help center article",
            "Beta feedback review"
          ]
        },
        {
          name: "Revenue dashboard",
          brief: "One trusted view of MRR for leadership.",
          health: "on-track",
          due: 10,
          done: 0.67,
          blocker: "",
          tasks: [
            "MRR definition",
            "Subscription models in dbt",
            "Expansion and churn split",
            "Board deck export",
            "Reconcile with finance",
            "Data freshness alert"
          ]
        },
        {
          name: "Churn model",
          brief: "Flag at-risk accounts two months early.",
          health: "at-risk",
          due: 36,
          done: 0.25,
          blocker: "labelled churn data from Customer success",
          tasks: [
            "Feature set",
            "Label historical churn",
            "Train baseline model",
            "Calibration check",
            "Score accounts nightly",
            "Surface scores in the CRM",
            "Review with success team",
            "Model card"
          ]
        }
      ]
    }
  ].forEach((e2, t2) => {
    let s2 = {
      id: t2,
      name: e2.name,
      lead: e2.lead,
      mission: e2.mission,
      members: e2.members,
      projects: []
    };
    M.push(s2);
    let i2 = 40 + e2.cols * e2.cw + (e2.cols - 1) * 16, r2 = 84 + 218 * e2.rows + (e2.rows - 1) * 16 + 20, n2 = P({
      kind: 1,
      parent: 0,
      x: e2.x,
      y: e2.y,
      w: i2,
      h: r2,
      ref: t2,
      name: e2.name
    });
    N.push(n2), e2.projects.forEach((i3, r3) => {
      let o2 = _.length, h2 = {
        id: o2,
        team: t2,
        name: i3.name,
        brief: i3.brief,
        health: i3.health,
        due: i3.due,
        lead: e2.members[r3 % e2.members.length],
        blocker: i3.blocker,
        tasks: [],
        people: []
      };
      _.push(h2), s2.projects.push(o2);
      let l2 = e2.x + 20 + r3 % e2.cols * (e2.cw + 16), c2 = e2.y + 84 + 234 * Math.floor(r3 / e2.cols), d2 = P({
        kind: 2,
        parent: n2,
        x: l2,
        y: c2,
        w: e2.cw,
        h: 218,
        ref: o2,
        name: i3.name
      });
      T.push(d2);
      let m2 = i3.tasks.length, p2 = Math.round(m2 * i3.done), u2 = "off-track" === i3.health ? 2 : +("at-risk" === i3.health), f2 = (e2.cw - 24 - 8) / 3;
      i3.tasks.forEach((t3, s3) => {
        let r4 = s3 - p2, n3 = r4 < 0 ? "done" : 0 === r4 && m2 - p2 > 3 ? "review" : r4 <= (m2 - p2 > 3 ? 2 : 1) ? "progress" : r4 <= (m2 - p2 > 3 ? 2 : 1) + u2 ? "blocked" : "todo", g3 = e2.members, x2 = 0 === s3 ? h2.lead : g3[Math.floor(a() * g3.length)], y2 = "done" === n3 ? -3 - (p2 - s3) * 3 - Math.floor(3 * a()) : Math.max(
          1,
          Math.round((r4 + 1) / (m2 - p2) * i3.due) - Math.floor(3 * a())
        ), k2 = 3 + Math.floor(3 * a()), b2 = Math.floor(a() * (j.length - k2 + 1)), v2 = j.slice(b2, b2 + k2), w2 = "done" === n3 ? k2 : "review" === n3 ? k2 - 1 : "progress" === n3 ? Math.max(1, Math.floor(k2 / 2)) : +("blocked" === n3), M2 = z.length;
        z.push({
          id: M2,
          project: o2,
          title: t3,
          base: n3,
          assignee: x2,
          due: y2,
          points: [1, 2, 3, 5, 8][Math.floor(5 * a())],
          comments: Math.floor(13 * a()),
          checklist: v2,
          baseChecks: v2.map((e3, t4) => t4 < w2)
        }), h2.tasks.push(M2);
        let _2 = l2 + 12 + s3 % 3 * (f2 + 4), S2 = c2 + 60 + 32 * Math.floor(s3 / 3);
        A.push(
          P({
            kind: 3,
            parent: d2,
            x: _2,
            y: S2,
            w: f2,
            h: 28,
            ref: M2,
            name: t3
          })
        );
      });
      let g2 = [h2.lead, ...h2.tasks.map((e3) => z[e3].assignee)];
      h2.people = g2.filter((e3, t3) => g2.indexOf(e3) === t3).slice(0, 5), h2.people.forEach(
        (e3, t3) => P({
          kind: 4,
          parent: d2,
          x: l2 + 12 + 19 * t3,
          y: c2 + 190,
          w: 16,
          h: 16,
          ref: e3,
          name: w[e3].name
        })
      );
    });
  });
  let $ = [
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
  ];
  function C(e2) {
    let t2 = new Date(Date.UTC(2026, 8, 22 + e2));
    return `${$[t2.getUTCMonth()]} ${t2.getUTCDate()}`;
  }
  class R {
    status(e2) {
      let t2 = z[e2];
      return this.checks[e2].every(Boolean) ? "done" : "done" === t2.base ? "review" : t2.base;
    }
    completion(e2) {
      let t2 = this.checks[e2];
      return "done" === this.status(e2) ? 1 : t2.filter(Boolean).length / t2.length * 0.8;
    }
    toggle(e2, t2) {
      this.checks[e2][t2] = !this.checks[e2][t2];
    }
    done(e2) {
      return this.checks[e2].filter(Boolean).length;
    }
    describe(e2) {
      let t2 = z[e2], s2 = _[t2.project], i2 = M[s2.team], a2 = w[t2.assignee].first, r2 = w[t2.assignee !== s2.lead ? s2.lead : i2.lead !== t2.assignee ? i2.lead : i2.members[1]].first, n2 = this.status(e2), o2 = "done" === n2 ? `Done. ${a2} shipped it ${t2.due < 0 ? `on ${C(t2.due)}` : "today"}.` : "review" === n2 ? `${a2} opened it for review by ${r2}.` : "progress" === n2 ? `${a2} is on it and plans to finish by ${C(t2.due)}.` : "blocked" === n2 ? `Blocked by ${s2.blocker || "an open dependency"}.` : `Not started. ${a2} picks it up before ${C(t2.due)}.`;
      return `${o2} ${s2.name}: ${s2.brief}`;
    }
    tasksOf(e2) {
      let t2 = S[e2];
      return 3 === t2.kind ? [t2.ref] : 2 === t2.kind ? _[t2.ref].tasks : 1 === t2.kind ? M[t2.ref].projects.flatMap((e3) => _[e3].tasks) : 4 === t2.kind ? this.tasksOf(t2.parent).filter((e3) => z[e3].assignee === t2.ref) : z.map((e3) => e3.id);
    }
    stats(e2) {
      let t2 = this.tasksOf(e2), s2 = 0, i2 = 0, a2 = 0, r2 = 0, n2 = 1 / 0;
      for (let e3 of t2) {
        let t3 = this.status(e3), o3 = z[e3].points;
        s2 += o3, i2 += o3 * this.completion(e3), "done" !== t3 && (a2++, n2 = Math.min(n2, z[e3].due)), "blocked" === t3 && r2++;
      }
      let o2 = S[e2], h2 = 0 === o2.kind ? w.map((e3, t3) => t3) : 1 === o2.kind ? M[o2.ref].members : 2 === o2.kind ? _[o2.ref].people : 3 === o2.kind ? [z[o2.ref].assignee] : [o2.ref], l2 = 0 === o2.kind ? _ : 1 === o2.kind ? M[o2.ref].projects.map((e3) => _[e3]) : [];
      return {
        progress: s2 ? i2 / s2 : 0,
        open: a2,
        blocked: r2,
        total: t2.length,
        nextDue: Number.isFinite(n2) ? n2 : null,
        people: h2,
        projects: l2.length,
        atRisk: l2.filter((e3) => "on-track" !== e3.health).length
      };
    }
    constructor() {
      this.checks = z.map((e2) => [...e2.baseChecks]);
    }
  }
  let I = (e2) => {
    let t2 = [];
    for (let s2 = e2; s2 >= 0; s2 = S[s2].parent) t2.unshift(s2);
    return t2;
  }, { spring: H, ease: L } = x.T, F = (e2, t2, s2) => e2 < t2 ? t2 : e2 > s2 ? s2 : e2, W = (e2, t2, s2) => e2 + (t2 - e2) * s2, E = (e2, t2, s2) => {
    let i2 = F((s2 - e2) / (t2 - e2), 0, 1);
    return i2 * i2 * (3 - 2 * i2);
  }, D = (e2) => {
    let t2 = F(e2, 0, 1) - 1;
    return 1 + 2.9 * t2 * t2 * t2 + 1.9 * t2 * t2;
  }, O = (e2, t2) => (1 - 1 / (0.55 * e2 / t2 + 1)) * t2, B = (e2, t2) => e2 >= 0.98 * t2 ? 90 * t2 : (1 / (1 - e2 / t2) - 1) * t2 / 0.55, U = (function([e2, t2, s2, i2]) {
    let a2 = 3 * e2, r2 = 3 * (s2 - e2) - a2, n2 = 1 - a2 - r2, o2 = 3 * t2, h2 = 3 * (i2 - t2) - o2, l2 = 1 - o2 - h2, c2 = (e3) => ((n2 * e3 + r2) * e3 + a2) * e3, d2 = (e3) => (3 * n2 * e3 + 2 * r2) * e3 + a2;
    return (e3) => {
      if (e3 <= 0) return 0;
      if (e3 >= 1) return 1;
      let t3 = e3;
      for (let s3 = 0; s3 < 8; s3++) {
        let s4 = c2(t3) - e3, i3 = d2(t3);
        if (1e-6 > Math.abs(s4) || 1e-6 > Math.abs(i3)) break;
        t3 -= s4 / i3;
      }
      if (t3 < 0 || t3 > 1 || Math.abs(c2(t3) - e3) > 1e-4) {
        let s3 = 0, i3 = 1;
        t3 = e3;
        for (let a3 = 0; a3 < 30; a3++)
          c2(t3) < e3 ? s3 = t3 : i3 = t3, t3 = (s3 + i3) / 2;
      }
      return ((l2 * t3 + h2) * t3 + o2) * t3;
    };
  })(L.inOut), K = [N[0], T[0], A[0], A[6], N[1], T[7], 0];
  class Z {
    constructor(e2, t2, s2, i2, a2) {
      for (const r2 of (this.canvas = e2, this.mini = t2, this.stage = s2, this.model = i2, this.hooks = a2, this.pal = {
        surface: "#fff",
        muted: "#f6f6f6",
        fg: "#111",
        secondary: "#555",
        faint: "#777",
        border: "#e8e8e8",
        subtle: "#f1f1f1",
        strong: "#c8c8c8",
        accent: "#333",
        success: "#1f8a4c",
        warning: "#b7791f",
        danger: "#c53030",
        body: "sans-serif",
        display: "sans-serif"
      }, this.W = 0, this.H = 0, this.dpr = 1, this.mw = 0, this.mh = 0, this.cx = 824, this.cy = 455, this.s = 0.5, this.zt = Math.log(0.5), this.zv = 0, this.anchor = null, this.lastWheel = 0, this.vx = 0, this.vy = 0, this.panTarget = null, this.pvx = 0, this.pvy = 0, this.flight = null, this.drag = null, this.pinch = null, this.pointers = /* @__PURE__ */ new Map(), this.mouse = null, this.raf = 0, this.last = 0, this.visible = false, this.hidden = false, this.reduce = false, this.sized = false, this.introT0 = -1, this.introDone = false, this.view = 0, this.hoverNode = -1, this.hoverItem = -1, this.cursor = -1, this.cursorItem = -1, this.hl = /* @__PURE__ */ new Map(), this.dim = new Float32Array(S.length).fill(1), this.spot = 0, this.spotPerson = -1, this.spotProject = -1, this.shown = new Float32Array(S.length), this.statusT = new Float64Array(z.length).fill(-1e9), this.itemT = z.map(
        (e3) => new Float64Array(e3.checklist.length).fill(-1e9)
      ), this.cache = /* @__PURE__ */ new Map(), this.items = [], this.faces = w.map(() => null), this.widths = /* @__PURE__ */ new Map(), this.prefixes = /* @__PURE__ */ new Map(), this.font = "", this.panel = null, this.pw = 248, this.ph = 160, this.px = 0, this.py = 0, this.panelOn = false, this.readout = null, this.readText = "", this.zoomedFlag = false, this.touring = false, this.tourStep = 0, this.tourTimer = 0, this.dead = false, this.frame = (e3) => {
        this.raf = 0;
        let t3 = e3 - this.last;
        this.last = e3;
        let s3 = this.step(t3 > 0 && t3 < 100 ? t3 / 1e3 : 1 / 60, e3);
        this.draw(e3), s3 && this.wake();
      }, this.lastAnim = -1e9, this.ctx = e2.getContext("2d"), this.mctx = t2?.getContext("2d") ?? null, this.hasSpacing = "letterSpacing" in this.ctx, [0, ...N, ...T]))
        this.shown[r2] = this.stat(r2).progress;
      w.forEach((e3, t3) => {
        if (!e3.portrait) return;
        let s3 = new Image();
        s3.decoding = "async", s3.onload = () => {
          if (this.dead) return;
          let e4 = document.createElement("canvas");
          e4.width = e4.height = 160;
          let i3 = e4.getContext("2d");
          if (!i3) return;
          let a3 = 0.62 * s3.naturalWidth, r2 = (s3.naturalWidth - a3) / 2, n2 = Math.max(0, 0.3 * s3.naturalHeight - a3 / 2);
          i3.beginPath(), i3.arc(80, 80, 80, 0, 2 * Math.PI), i3.clip(), i3.drawImage(s3, r2, n2, a3, a3, 0, 0, 160, 160), this.faces[t3] = e4, this.wake();
        }, s3.src = e3.portrait;
      }), document.fonts?.ready.then(() => {
        this.dead || (this.widths.clear(), this.prefixes.clear(), this.font = "", this.wake());
      });
    }
    stat(e2) {
      let t2 = this.cache.get(e2);
      return t2 || (t2 = this.model.stats(e2), this.cache.set(e2, t2)), t2;
    }
    destroy() {
      this.dead = true, cancelAnimationFrame(this.raf), clearTimeout(this.tourTimer);
    }
    setPalette(e2) {
      (e2.body !== this.pal.body || e2.display !== this.pal.display) && (this.widths.clear(), this.prefixes.clear()), this.pal = e2, this.font = "", this.wake();
    }
    setReduced(e2) {
      this.reduce = e2, e2 && this.flight && this.finishFlight(), this.wake();
    }
    setVisible(e2) {
      this.visible = e2, e2 || this.stopTour(), this.maybeIntro(), this.wake();
    }
    setHidden(e2) {
      this.hidden = e2, e2 && this.stopTour(), this.wake();
    }
    attachPanel(e2) {
      this.panel = e2, e2 && this.measurePanel();
    }
    measurePanel() {
      this.panel && (this.pw = this.panel.offsetWidth, this.ph = this.panel.offsetHeight, this.wake());
    }
    attachReadout(e2) {
      this.readout = e2, this.readText = "", this.wake();
    }
    resize(e2, t2, s2) {
      if (e2 < 2 || t2 < 2) return;
      let i2 = !this.sized, a2 = this.sized ? this.fitS : 0;
      if (this.W = e2, this.H = t2, this.dpr = s2, this.canvas.width = Math.round(e2 * s2), this.canvas.height = Math.round(t2 * s2), this.mini && (this.mw = this.mini.clientWidth, this.mh = this.mini.clientHeight, this.mini.width = Math.round(this.mw * s2), this.mini.height = Math.round(this.mh * s2)), this.font = "", this.sized = true, i2 || 0 === this.view) {
        let [e3, t3] = this.centerFor(0, this.fitS);
        (!this.flight || i2) && (this.cx = e3, this.cy = t3, this.s = this.fitS, this.zt = Math.log(this.s));
      } else
        a2 && (this.s = F(this.s * (this.fitS / a2), this.fitS, this.maxS), this.zt = Math.log(this.s));
      this.maybeIntro(), this.wake();
    }
    maybeIntro() {
      if (this.introDone || !this.visible || !this.sized || (this.introDone = true, this.reduce))
        return;
      this.introT0 = performance.now(), this.s = 0.72 * this.fitS, this.zt = Math.log(this.s);
      let [e2, t2] = this.centerFor(0, this.s);
      this.cx = e2, this.cy = t2, this.flyTo(0, void 0, 1500);
    }
    wake() {
      this.raf || this.dead || !this.visible || this.hidden || !this.sized || (this.raf = requestAnimationFrame(this.frame));
    }
    get insets() {
      let e2 = this.W < 560;
      return { top: e2 ? 56 : 64, bottom: e2 ? 56 : 60, side: e2 ? 12 : 24 };
    }
    get fitS() {
      let { top: e2, bottom: t2, side: s2 } = this.insets;
      return Math.min((this.W - 2 * s2) / 1648, (this.H - e2 - t2) / 910);
    }
    get maxS() {
      let e2 = S[A[0]];
      return 1.7 * this.fitFor(e2);
    }
    fitFor(e2) {
      if (0 === e2.kind) return this.fitS;
      let { top: t2, bottom: s2, side: i2 } = this.insets;
      return Math.min((this.W - 2 * i2) / e2.w, (this.H - t2 - s2) / e2.h) * (3 === e2.kind ? 0.96 : 0.97);
    }
    centerFor(e2, t2) {
      let s2 = S[e2], { top: i2, bottom: a2 } = this.insets, r2 = s2.x + s2.w / 2, n2 = s2.y + s2.h / 2 - (i2 - a2) / 2 / t2, [o2, h2] = this.range(t2, 0), [l2, c2] = this.range(t2, 1);
      return [F(r2, o2, h2), F(n2, l2, c2)];
    }
    range(e2, t2) {
      let { top: s2, bottom: i2, side: a2 } = this.insets;
      if (0 === t2) {
        let t3 = (this.W / 2 - a2) / e2;
        return 2 * t3 >= 1648 ? [824, 824] : [t3, 1648 - t3];
      }
      let r2 = (this.H / 2 - s2) / e2, n2 = 910 - (this.H / 2 - i2) / e2;
      if (r2 > n2) {
        let t3 = 455 - (s2 - i2) / 2 / e2;
        return [t3, t3];
      }
      return [r2, n2];
    }
    band(e2, [t2, s2], i2) {
      let a2 = this.s;
      return e2 < t2 ? t2 - O((t2 - e2) * a2, i2) / a2 : e2 > s2 ? s2 + O((e2 - s2) * a2, i2) / a2 : e2;
    }
    unband(e2, [t2, s2], i2) {
      let a2 = this.s;
      return e2 < t2 ? t2 - B((t2 - e2) * a2, i2) / a2 : e2 > s2 ? s2 + B((e2 - s2) * a2, i2) / a2 : e2;
    }
    toWorld(e2) {
      return {
        x: this.cx + (e2.x - this.W / 2) / this.s,
        y: this.cy + (e2.y - this.H / 2) / this.s
      };
    }
    screenRect(e2) {
      let t2 = this.s, s2 = this.W / 2 - this.cx * t2, i2 = this.H / 2 - this.cy * t2;
      return { x: e2.x * t2 + s2, y: e2.y * t2 + i2, w: e2.w * t2, h: e2.h * t2 };
    }
    flyTo(e2, t2, s2) {
      if (!this.sized) return;
      let i2 = S[e2], a2 = F(0 === e2 ? this.fitS : this.fitFor(i2), this.fitS, this.maxS), [r2, n2] = this.centerFor(e2, a2);
      this.vx = this.vy = 0, this.zv = 0, this.anchor = null, this.panTarget = null, this.setHover(-1, -1), this.cursor >= 0 && S[this.cursor].parent !== e2 && (this.cursor = -1), this.cursorItem = -1;
      let o2 = [r2, n2, this.W / a2], h2 = 4 === i2.kind ? i2.parent : e2, l2 = this.W / this.s;
      if (this.reduce || Math.abs(r2 - this.cx) * a2 < 0.5 && Math.abs(n2 - this.cy) * a2 < 0.5 && 2e-3 > Math.abs(Math.log(this.s / a2))) {
        this.flight = {
          at: () => o2,
          t0: 0,
          dur: 0,
          bump: 0,
          end: o2,
          to: h2,
          done: t2
        }, this.finishFlight();
        return;
      }
      let c2 = (function(e3, t3, s3 = 1.35) {
        let [i3, a3, r3] = e3, [n3, o3, h3] = t3, l3 = n3 - i3, c3 = o3 - a3, d3 = l3 * l3 + c3 * c3, m3 = s3 * s3, p2 = m3 * m3;
        if (d3 < (1e-4 * Math.min(r3, h3)) ** 2) {
          let e4 = Math.log(h3 / r3) / s3;
          return {
            S: Math.abs(e4),
            at: (t4) => [i3 + t4 * l3, a3 + t4 * c3, r3 * Math.exp(s3 * t4 * e4)]
          };
        }
        let u2 = Math.sqrt(d3), f2 = (h3 * h3 - r3 * r3 + p2 * d3) / (2 * r3 * m3 * u2), g2 = (h3 * h3 - r3 * r3 - p2 * d3) / (2 * h3 * m3 * u2), x2 = Math.log(Math.sqrt(f2 * f2 + 1) - f2), y2 = (Math.log(Math.sqrt(g2 * g2 + 1) - g2) - x2) / s3, k2 = Math.cosh(x2), b2 = Math.sinh(x2);
        return {
          S: Math.abs(y2),
          at: (e4) => {
            let t4 = e4 * y2, n4 = r3 / (m3 * u2) * (k2 * Math.tanh(s3 * t4 + x2) - b2);
            return [i3 + n4 * l3, a3 + n4 * c3, r3 * k2 / Math.cosh(s3 * t4 + x2)];
          }
        };
      })([this.cx, this.cy, l2], o2), d2 = s2 ?? F(420 + 400 * c2.S, 560, 1500), m2 = o2[2] < 0.95 * l2 && void 0 === s2 ? 0.05 + 0.035 * Math.min(2, Math.log(l2 / o2[2])) : 0;
      this.flight = {
        at: c2.at,
        t0: performance.now(),
        dur: d2,
        bump: m2,
        end: o2,
        to: h2,
        done: t2
      }, this.wake();
    }
    finishFlight() {
      let e2 = this.flight;
      e2 && (this.flight = null, [this.cx, this.cy] = e2.end, this.s = this.W / e2.end[2], this.zt = Math.log(this.s), this.zv = 0, this.wake(), e2.done?.());
    }
    halt() {
      this.flight = null, this.panTarget = null, this.anchor = null, this.vx = this.vy = 0, this.zv = 0, this.zt = Math.log(this.s);
    }
    zoomBy(e2) {
      this.stopTour(), this.hooks.interact(), this.flight && this.halt();
      let { top: t2, bottom: s2 } = this.insets;
      this.anchor = { x: this.W / 2, y: (t2 + this.H - s2) / 2 };
      let i2 = Math.log(this.fitS), a2 = Math.log(this.maxS), r2 = this.zt + Math.log(e2);
      this.zt = r2 > a2 + 0.01 ? a2 + 0.14 : r2 < i2 - 0.01 ? i2 - 0.14 : F(r2, i2, a2), this.lastWheel = performance.now(), this.reduce && this.applyZoom(F(this.zt, i2, a2)), this.wake();
    }
    fitAll() {
      this.stopTour(), this.hooks.interact(), this.flyTo(0);
    }
    flyOut() {
      if (this.stopTour(), this.hooks.interact(), this.cursor >= 0 || this.cursorItem >= 0) {
        this.cursor = -1, this.cursorItem = -1, this.setHover(-1, -1), this.wake();
        return;
      }
      this.view > 0 && this.flyTo(S[this.view].parent);
    }
    goTo(e2) {
      this.stopTour(), this.hooks.interact(), this.flyTo(e2);
    }
    applyZoom(e2) {
      let t2 = this.s, s2 = Math.exp(e2);
      if (this.anchor) {
        let e3 = this.anchor.x - this.W / 2, i2 = this.anchor.y - this.H / 2;
        this.cx += e3 / t2 - e3 / s2, this.cy += i2 / t2 - i2 / s2;
      }
      this.s = s2;
    }
    step(e2, t2) {
      let s2 = false, i2 = this.flight;
      if (i2) {
        let e3 = F((t2 - i2.t0) / i2.dur, 0, 1);
        if (e3 >= 1) this.finishFlight();
        else {
          let [t3, a3, r3] = i2.at(U(e3));
          this.cx = t3, this.cy = a3, this.s = this.W / (r3 * Math.exp(i2.bump * Math.sin(Math.PI * e3))), s2 = true;
        }
      } else if (!this.drag && !this.pinch) {
        let i3 = Math.max(1, Math.ceil(e2 / (1 / 120))), a3 = e2 / i3, r3 = Math.log(this.fitS), n2 = Math.log(this.maxS);
        t2 - this.lastWheel > 170 && (this.zt = F(this.zt, r3, n2));
        let o2 = this.zt > n2 ? n2 + O(this.zt - n2, 0.35) : this.zt < r3 ? r3 - O(r3 - this.zt, 0.35) : this.zt;
        for (let e3 = 0; e3 < i3; e3++) {
          let e4 = Math.log(this.s);
          if (Math.abs(o2 - e4) > 1e-4 || Math.abs(this.zv) > 1e-3 ? (this.reduce ? (this.applyZoom(o2), this.zv = 0) : (this.zv += (H.responsive.stiffness * (o2 - e4) - H.responsive.damping * this.zv) * a3, this.applyZoom(e4 + this.zv * a3)), s2 = true) : (0 !== this.zv || e4 !== o2) && (this.applyZoom(o2), this.zv = 0), this.panTarget) {
            let e5 = H.gentle.stiffness, t3 = H.gentle.damping;
            this.pvx += (e5 * (this.panTarget.x - this.cx) - t3 * this.pvx) * a3, this.pvy += (e5 * (this.panTarget.y - this.cy) - t3 * this.pvy) * a3, this.cx += this.pvx * a3, this.cy += this.pvy * a3, Math.hypot(
              this.panTarget.x - this.cx,
              this.panTarget.y - this.cy
            ) * this.s < 0.3 && Math.hypot(this.pvx, this.pvy) * this.s < 2 && (this.cx = this.panTarget.x, this.cy = this.panTarget.y, this.panTarget = null, this.pvx = this.pvy = 0), s2 = true;
            continue;
          }
          s2 = this.axis(0, a3) || s2, s2 = this.axis(1, a3) || s2;
        }
      }
      let a2 = this.flight ? this.flight.to : this.viewNode();
      a2 !== this.view && (this.view = a2, this.hooks.path(I(a2)), this.cursor >= 0 && S[this.cursor].parent !== a2 && (this.cursor = -1, this.setHover(-1, -1)));
      let r2 = this.s > 1.06 * this.fitS;
      return r2 !== this.zoomedFlag && (this.zoomedFlag = r2, this.hooks.zoomed(r2)), this.mouse && !this.drag && !this.pinch && !this.flight && s2 && this.cursor < 0 && this.cursorItem < 0 && this.pointerHover(this.mouse, false), this.fades(e2, t2) || s2;
    }
    axis(e2, t2) {
      let [s2, i2] = this.range(this.s, e2), a2 = e2 ? this.cy : this.cx, r2 = e2 ? this.vy : this.vx, n2 = a2 < s2 ? a2 - s2 : a2 > i2 ? a2 - i2 : 0;
      return 0 !== n2 ? this.reduce ? (a2 = F(a2, s2, i2), r2 = 0) : (r2 += (H.gentle.stiffness * n2 * this.s - H.gentle.damping * r2) * t2, a2 -= r2 * t2 / this.s, 0.25 > Math.abs(n2 * this.s) && 4 > Math.abs(r2) && (a2 = F(a2, s2, i2), r2 = 0)) : 0 !== r2 && (r2 *= Math.exp(-3.6 * t2), a2 -= r2 * t2 / this.s, 3 > Math.abs(r2) && (r2 = 0)), e2 ? (this.cy = a2, this.vy = r2) : (this.cx = a2, this.vx = r2), 0 !== n2 || 0 !== r2;
    }
    viewNode() {
      let { top: e2, bottom: t2, side: s2 } = this.insets, i2 = this.W - 2 * s2, a2 = this.H - e2 - t2;
      if (this.s <= 1.06 * this.fitS) return 0;
      let r2 = this.toWorld({ x: this.W / 2, y: (e2 + this.H - t2) / 2 }), n2 = 0;
      for (; ; ) {
        let e3 = S[n2].children.find((e4) => {
          let t3 = S[e4];
          return 4 !== t3.kind && r2.x >= t3.x && r2.x <= t3.x + t3.w && r2.y >= t3.y && r2.y <= t3.y + t3.h && (t3.w * this.s >= 0.55 * i2 || t3.h * this.s >= 0.55 * a2);
        });
        if (void 0 === e3) return n2;
        n2 = e3;
      }
    }
    fades(e2, t2) {
      let s2 = false, i2 = 1 - Math.exp(-e2 * (this.reduce ? 1e3 : 11));
      for (let [e3, t3] of this.hl) {
        let a3 = +(e3 === this.hoverNode), r3 = t3 + (a3 - t3) * i2;
        4e-3 > Math.abs(a3 - r3) ? a3 ? this.hl.set(e3, 1) : this.hl.delete(e3) : (this.hl.set(e3, r3), s2 = true);
      }
      this.hoverNode >= 0 && !this.hl.has(this.hoverNode) && (this.hl.set(this.hoverNode, +!!this.reduce), s2 = true);
      let a2 = I(this.view);
      for (let e3 = 1; e3 < S.length; e3++) {
        let t3 = S[e3];
        if (4 === t3.kind) continue;
        let r3 = t3.kind, n3 = a2[r3] === e3, o2 = !(a2[r3 - 1] === t3.parent && a2.length > r3) || n3 ? 1 : 1 === t3.kind ? 0.42 : 0.5, h2 = this.dim[e3];
        Math.abs(h2 - o2) > 3e-3 ? (this.dim[e3] = h2 + (o2 - h2) * i2 * 0.7, s2 = true) : this.dim[e3] = o2;
      }
      let r2 = this.hoverNode >= 0 && 4 === S[this.hoverNode].kind;
      r2 && (this.spotPerson = S[this.hoverNode].ref, this.spotProject = S[this.hoverNode].parent);
      let n2 = +!!r2;
      for (let t3 of (Math.abs(this.spot - n2) > 3e-3 ? (this.spot += (n2 - this.spot) * i2, s2 = true) : this.spot = n2, [0, ...N, ...T])) {
        let i3 = this.stat(t3).progress, a3 = this.shown[t3];
        Math.abs(i3 - a3) > 5e-4 ? (this.shown[t3] = this.reduce ? i3 : a3 + (i3 - a3) * (1 - Math.exp(-(6 * e2))), s2 = true) : this.shown[t3] = i3;
      }
      return this.introT0 > 0 && t2 - this.introT0 < 2200 && (s2 = true), s2 || t2 - this.lastAnim < 700;
    }
    local(e2) {
      let t2 = this.canvas.getBoundingClientRect();
      return { x: e2.clientX - t2.left, y: e2.clientY - t2.top };
    }
    pointerDown(e2) {
      this.stopTour(), this.hooks.interact();
      let t2 = this.local(e2);
      if (this.pointers.set(e2.pointerId, t2), 2 === this.pointers.size)
        return void this.startPinch();
      if (this.pointers.size > 2) return;
      let s2 = !!this.flight || Math.hypot(this.vx, this.vy) > 90 || !!this.panTarget;
      this.halt(), this.drag = {
        id: e2.pointerId,
        sx: t2.x,
        sy: t2.y,
        rx: this.unband(this.cx, this.range(this.s, 0), this.W),
        ry: this.unband(this.cy, this.range(this.s, 1), this.H),
        moved: false,
        caught: s2,
        samples: [{ x: t2.x, y: t2.y, t: performance.now() }]
      }, this.wake();
    }
    pointerMove(e2) {
      let t2 = this.local(e2);
      if ("mouse" === e2.pointerType && (this.mouse = t2), this.pointers.has(e2.pointerId) && this.pointers.set(e2.pointerId, t2), this.pinch)
        return void this.movePinch();
      let s2 = this.drag;
      if (s2 && s2.id === e2.pointerId) {
        if (!s2.moved && 5 > Math.hypot(t2.x - s2.sx, t2.y - s2.sy)) return;
        s2.moved || (s2.moved = true, this.setHover(-1, -1), this.stage.dataset.dragging = "true"), this.cx = this.band(
          s2.rx - (t2.x - s2.sx) / this.s,
          this.range(this.s, 0),
          this.W
        ), this.cy = this.band(
          s2.ry - (t2.y - s2.sy) / this.s,
          this.range(this.s, 1),
          this.H
        );
        let e3 = performance.now();
        for (s2.samples.push({ x: t2.x, y: t2.y, t: e3 }); s2.samples.length > 2 && e3 - s2.samples[0].t > 90; )
          s2.samples.shift();
        this.wake();
        return;
      }
      s2 || "mouse" !== e2.pointerType || this.flight || this.pointerHover(t2);
    }
    pointerUp(e2, t2 = false) {
      let s2 = this.local(e2);
      if (this.pointers.delete(e2.pointerId), this.pinch) {
        this.pointers.size < 2 && this.endPinch();
        return;
      }
      let i2 = this.drag;
      if (i2 && i2.id === e2.pointerId) {
        if (this.drag = null, delete this.stage.dataset.dragging, i2.moved) {
          if (!this.reduce) {
            let e3 = i2.samples[0], t3 = i2.samples[i2.samples.length - 1], s3 = performance.now();
            if (t3.t > e3.t && s3 - t3.t < 70) {
              let s4 = 1e3 / (t3.t - e3.t);
              this.vx = F((t3.x - e3.x) * s4, -5e3, 5e3), this.vy = F((t3.y - e3.y) * s4, -5e3, 5e3);
            }
          }
        } else i2.caught || t2 || this.click(s2);
        "mouse" !== e2.pointerType || this.flight || this.pointerHover(s2), this.wake();
      }
    }
    pointerLeave() {
      this.mouse = null, !this.drag && this.cursor < 0 && this.setHover(-1, -1);
    }
    startPinch() {
      let [e2, t2] = [...this.pointers.values()];
      this.halt(), this.drag = null;
      let s2 = { x: (e2.x + t2.x) / 2, y: (e2.y + t2.y) / 2 }, i2 = this.toWorld(s2);
      this.pinch = {
        d0: Math.max(10, Math.hypot(e2.x - t2.x, e2.y - t2.y)),
        s0: this.s,
        wx: i2.x,
        wy: i2.y,
        c: s2
      }, this.setHover(-1, -1);
    }
    movePinch() {
      let e2 = this.pinch;
      if (!e2 || this.pointers.size < 2) return;
      let [t2, s2] = [...this.pointers.values()], i2 = Math.log(this.fitS), a2 = Math.log(this.maxS), r2 = Math.log(e2.s0) + Math.log(Math.max(10, Math.hypot(t2.x - s2.x, t2.y - s2.y)) / e2.d0), n2 = r2 > a2 ? a2 + O(r2 - a2, 0.35) : r2 < i2 ? i2 - O(i2 - r2, 0.35) : r2;
      this.s = Math.exp(n2), e2.c = { x: (t2.x + s2.x) / 2, y: (t2.y + s2.y) / 2 }, this.cx = e2.wx - (e2.c.x - this.W / 2) / this.s, this.cy = e2.wy - (e2.c.y - this.H / 2) / this.s, this.wake();
    }
    endPinch() {
      let e2 = this.pinch;
      if (this.pinch = null, !e2) return;
      this.zt = F(
        Math.log(this.s),
        Math.log(this.fitS),
        Math.log(this.maxS)
      ), this.anchor = e2.c, this.lastWheel = 0;
      let t2 = [...this.pointers.entries()][0];
      if (t2) {
        let [e3, s2] = t2;
        this.drag = {
          id: e3,
          sx: s2.x,
          sy: s2.y,
          rx: this.unband(this.cx, this.range(this.s, 0), this.W),
          ry: this.unband(this.cy, this.range(this.s, 1), this.H),
          moved: true,
          caught: true,
          samples: [{ x: s2.x, y: s2.y, t: performance.now() }]
        };
      }
      this.wake();
    }
    wheel(e2) {
      e2.preventDefault(), this.stopTour(), this.hooks.interact(), (this.flight || this.panTarget) && this.halt();
      let t2 = this.local(e2);
      this.mouse = t2;
      let s2 = 1 === e2.deltaMode ? 16 : 2 === e2.deltaMode ? this.H : 1, i2 = e2.deltaX * s2, a2 = e2.deltaY * s2;
      if (!e2.ctrlKey && Math.abs(i2) > Math.abs(a2)) {
        let [e3, t3] = this.range(this.s, 0), s3 = this.cx < e3 || this.cx > t3;
        this.vx = 0, this.cx += i2 / this.s * (s3 ? 0.3 : 1), this.wake();
        return;
      }
      let r2 = Math.log(this.fitS), n2 = Math.log(this.maxS);
      this.anchor = t2, this.lastWheel = performance.now(), this.zt = F(
        this.zt - a2 * (e2.ctrlKey ? 0.012 : 22e-4),
        r2 - 0.7,
        n2 + 0.7
      ), this.reduce && (this.zt = F(this.zt, r2, n2), this.applyZoom(this.zt)), this.wake();
    }
    miniPointer(e2) {
      if (!this.mini || !this.sized) return;
      this.stopTour(), this.hooks.interact();
      let t2 = this.mini.getBoundingClientRect(), { m: s2, ox: i2, oy: a2 } = this.miniFrame(), r2 = (e2.clientX - t2.left - i2) / s2, n2 = (e2.clientY - t2.top - a2) / s2;
      this.flight = null, this.vx = this.vy = 0, this.anchor = null, this.zt = Math.log(this.s), this.zv = 0;
      let { top: o2, bottom: h2 } = this.insets, l2 = F(r2, ...this.range(this.s, 0)), c2 = F(n2 - (o2 - h2) / 2 / this.s, ...this.range(this.s, 1));
      this.reduce ? (this.cx = l2, this.cy = c2) : this.panTarget = { x: l2, y: c2 }, this.wake();
    }
    pick(e2) {
      for (let t3 of this.items)
        if (e2.x >= t3.x && e2.x <= t3.x + t3.w && e2.y >= t3.y && e2.y <= t3.y + t3.h)
          return { node: A[t3.task], item: t3.item };
      let t2 = this.toWorld(e2), s2 = this.s, i2 = (e3) => t2.x >= e3.x && t2.x <= e3.x + e3.w && t2.y >= e3.y && t2.y <= e3.y + e3.h, a2 = S[0].children.find((e3) => i2(S[e3]));
      if (void 0 === a2) return { node: -1, item: -1 };
      let r2 = a2, n2 = S[a2].children.find((e3) => i2(S[e3]));
      if (void 0 === n2 || !(S[n2].w * s2 >= 150 || this.view === a2))
        return { node: r2, item: -1 };
      for (let e3 of (r2 = n2, S[n2].children)) {
        let a3 = S[e3];
        if (4 === a3.kind) {
          let i3 = a3.w / 2;
          if (a3.w * s2 >= 18 && Math.hypot(t2.x - (a3.x + i3), t2.y - (a3.y + i3)) <= i3)
            return { node: e3, item: -1 };
        } else if (i2(a3) && (a3.w * s2 >= 90 || this.view === n2))
          return { node: e3, item: -1 };
      }
      return { node: r2, item: -1 };
    }
    pointerHover(e2, t2 = true) {
      let { node: s2, item: i2 } = this.pick(e2), a2 = s2 === this.view && i2 < 0 ? -1 : s2;
      t2 && (this.cursor = -1, this.cursorItem = -1), this.setHover(a2, i2), this.stage.dataset.clickable = String(
        i2 >= 0 || s2 >= 0 && s2 !== this.view || s2 < 0 && this.view > 0
      );
    }
    setHover(e2, t2) {
      if (e2 === this.hoverNode && t2 === this.hoverItem) return;
      let s2 = this.hoverNode >= 0;
      this.hoverNode = e2, this.hoverItem = t2;
      let i2 = t2 >= 0 ? -1 : e2;
      i2 >= 0 && !s2 && (this.panelOn = false), this.hooks.hover(i2), this.wake();
    }
    click(e2) {
      let { node: t2, item: s2 } = this.pick(e2);
      if (s2 >= 0) return void this.toggle(S[t2].ref, s2);
      if (t2 < 0) {
        this.view > 0 && this.flyTo(S[this.view].parent);
        return;
      }
      this.activate(t2);
    }
    activate(e2) {
      let t2 = S[e2];
      if (4 === t2.kind) {
        let e3 = _[S[t2.parent].ref].tasks.filter((e4) => z[e4].assignee === t2.ref), s2 = ["progress", "review", "blocked", "todo", "done"];
        e3.sort(
          (e4, t3) => s2.indexOf(this.model.status(e4)) - s2.indexOf(this.model.status(t3))
        ), this.flyTo(e3.length ? A[e3[0]] : t2.parent);
        return;
      }
      e2 !== this.view && this.flyTo(e2);
    }
    toggle(e2, t2) {
      let s2 = this.model.status(e2);
      this.model.toggle(e2, t2);
      let i2 = this.model.status(e2), a2 = performance.now();
      this.itemT[e2][t2] = a2, this.lastAnim = a2, i2 !== s2 && (this.statusT[e2] = a2), this.cache.clear();
      let r2 = z[e2], n2 = this.model.done(e2), o2 = r2.checklist[t2];
      this.hooks.changed(), this.hooks.announce(
        `${o2} ${this.model.checks[e2][t2] ? "checked" : "unchecked"}. ${r2.title}: ${n2} of ${r2.checklist.length} done${i2 !== s2 ? `, now ${k[i2].toLowerCase()}` : ""}.`
      ), this.wake();
    }
    moveCursor(e2, t2) {
      this.stopTour(), this.hooks.interact();
      let s2 = S[this.view];
      if (3 === s2.kind) {
        let i3 = z[s2.ref], a3 = i3.checklist.length;
        this.cursorItem = this.cursorItem < 0 ? 0 : F(this.cursorItem + (t2 || e2), 0, a3 - 1), this.cursor = -1, this.setHover(this.view, this.cursorItem), this.hooks.announce(
          `${i3.checklist[this.cursorItem]}, ${this.model.checks[s2.ref][this.cursorItem] ? "checked" : "not checked"}. Press Enter to toggle.`
        );
        return;
      }
      let i2 = s2.children;
      if (!i2.length) return;
      let a2 = i2[0];
      if (this.cursor >= 0 && i2.includes(this.cursor)) {
        let s3 = S[this.cursor], r2 = s3.x + s3.w / 2, n2 = s3.y + s3.h / 2, o2 = 1 / 0;
        for (let s4 of (a2 = this.cursor, i2)) {
          if (s4 === this.cursor) continue;
          let i3 = S[s4], h2 = i3.x + i3.w / 2 - r2, l2 = i3.y + i3.h / 2 - n2, c2 = h2 * e2 + l2 * t2, d2 = Math.abs(h2 * t2) + Math.abs(l2 * e2);
          if (c2 <= 1) continue;
          let m2 = c2 + 2.5 * d2;
          m2 < o2 && (o2 = m2, a2 = s4);
        }
      }
      this.cursor = a2, this.setHover(a2, -1), this.hooks.announce(this.describeNode(a2) + " Press Enter to zoom in.");
    }
    activateCursor() {
      if (this.stopTour(), this.hooks.interact(), 3 === S[this.view].kind && this.cursorItem >= 0)
        return void this.toggle(S[this.view].ref, this.cursorItem);
      if (this.cursor >= 0) {
        let e2 = this.cursor;
        this.cursor = -1, this.activate(e2);
        return;
      }
      this.moveCursor(1, 0);
    }
    describeNode(e2) {
      let t2 = S[e2], s2 = this.stat(e2), i2 = `${Math.round(100 * s2.progress)}% complete`;
      if (1 === t2.kind)
        return `${t2.name} team, ${s2.projects} projects, ${s2.open} open tasks, ${i2}.`;
      if (2 === t2.kind) {
        let e3 = _[t2.ref];
        return `${e3.name}, ${b[e3.health].toLowerCase()}, ${i2}, ${s2.open} open tasks, due ${C(e3.due)}.`;
      }
      if (3 === t2.kind) {
        let e3 = z[t2.ref];
        return `${e3.title}, ${k[this.model.status(t2.ref)].toLowerCase()}, assigned to ${w[e3.assignee].name}, due ${C(e3.due)}, ${this.model.done(t2.ref)} of ${e3.checklist.length} checklist items done.`;
      }
      return 4 === t2.kind ? `${t2.name}, ${w[t2.ref].role}, ${s2.open} open tasks in ${S[t2.parent].name}.` : `Northstar Studio, ${M.length} teams, ${s2.projects} projects, ${s2.open} open tasks, ${i2}.`;
    }
    toggleTour() {
      this.touring ? this.stopTour() : this.startTour();
    }
    startTour() {
      this.touring = true, this.tourStep = 0, this.hooks.tour(true), this.hooks.interact(), this.cursor = -1, this.cursorItem = -1, this.nextStop();
    }
    nextStop() {
      if (!this.touring) return;
      if (this.tourStep >= K.length) return void this.stopTour();
      let e2 = K[this.tourStep++];
      this.flyTo(e2, () => {
        this.touring && (this.tourTimer = window.setTimeout(
          () => this.nextStop(),
          this.tourStep >= K.length ? 0 : this.reduce ? 2400 : 1500
        ));
      });
    }
    stopTour() {
      this.touring && (this.touring = false, clearTimeout(this.tourTimer), this.hooks.tour(false));
    }
    setFont(e2, t2, s2 = false) {
      let i2 = `${t2} ${e2.toFixed(2)}px ${s2 ? this.pal.display : this.pal.body}`;
      i2 !== this.font && (this.font = i2, this.ctx.font = i2, this.hasSpacing && (this.ctx.letterSpacing = `${((s2 ? -0.03 : -0.01) * e2).toFixed(3)}px`));
    }
    width(e2, t2, s2, i2 = false) {
      let a2 = `${s2}${i2 ? "d" : "b"}${e2}`, r2 = this.widths.get(a2);
      return void 0 === r2 && (this.setFont(100, s2, i2), r2 = this.ctx.measureText(e2).width, this.widths.set(a2, r2)), r2 * t2 / 100;
    }
    fit(e2, t2, s2, i2) {
      if (i2 <= 0) return "";
      if (this.width(e2, t2, s2) <= i2) return e2;
      let a2 = `${s2}${e2}`, r2 = this.prefixes.get(a2);
      r2 || (this.setFont(100, s2), r2 = [...e2].map(
        (t3, s3) => this.ctx.measureText(e2.slice(0, s3 + 1)).width
      ), this.prefixes.set(a2, r2));
      let n2 = (i2 - this.width("\u2026", t2, s2)) * 100 / t2, o2 = 0, h2 = r2.length;
      for (; o2 < h2; ) {
        let e3 = o2 + h2 + 1 >> 1;
        r2[e3 - 1] <= n2 ? o2 = e3 : h2 = e3 - 1;
      }
      return o2 ? e2.slice(0, o2).trimEnd() + "\u2026" : "";
    }
    wrap(e2, t2, s2, i2, a2) {
      let r2 = e2.split(" "), n2 = [], o2 = "";
      for (let e3 = 0; e3 < r2.length; e3++) {
        let h2 = o2 ? `${o2} ${r2[e3]}` : r2[e3];
        if (!o2 || this.width(h2, t2, s2) <= i2) {
          o2 = h2;
          continue;
        }
        if (n2.length === a2 - 1)
          return n2.push(this.fit(`${o2} ${r2.slice(e3).join(" ")}`, t2, s2, i2)), n2;
        n2.push(o2), o2 = r2[e3];
      }
      return o2 && n2.push(this.width(o2, t2, s2) > i2 ? this.fit(o2, t2, s2, i2) : o2), n2;
    }
    text(e2, t2, s2, i2, a2, r2, n2 = "left", o2 = false) {
      if (!e2) return;
      this.setFont(i2, a2, o2);
      let h2 = this.ctx;
      h2.fillStyle = r2, h2.textAlign = n2, h2.fillText(e2, t2, s2 + 0.65 * i2 + 0.36 * i2);
    }
    rr(e2, t2, s2, i2, a2) {
      let r2 = this.ctx;
      a2 = Math.max(0, Math.min(a2, s2 / 2, i2 / 2)), r2.beginPath(), r2.roundRect ? r2.roundRect(e2, t2, s2, i2, a2) : (r2.moveTo(e2 + a2, t2), r2.arcTo(e2 + s2, t2, e2 + s2, t2 + i2, a2), r2.arcTo(e2 + s2, t2 + i2, e2, t2 + i2, a2), r2.arcTo(e2, t2 + i2, e2, t2, a2), r2.arcTo(e2, t2, e2 + s2, t2, a2), r2.closePath());
    }
    circle(e2, t2, s2) {
      let i2 = this.ctx;
      i2.beginPath(), i2.arc(e2, t2, Math.max(0, s2), 0, 2 * Math.PI);
    }
    partial(e2, t2) {
      let s2 = this.ctx, i2 = e2.slice(1).map((t3, s3) => Math.hypot(t3[0] - e2[s3][0], t3[1] - e2[s3][1])), a2 = i2.reduce((e3, t3) => e3 + t3, 0) * F(t2, 0, 1);
      s2.beginPath(), s2.moveTo(e2[0][0], e2[0][1]);
      for (let t3 = 0; t3 < i2.length && a2 > 0; t3++) {
        let r2 = Math.min(1, a2 / i2[t3]);
        s2.lineTo(W(e2[t3][0], e2[t3 + 1][0], r2), W(e2[t3][1], e2[t3 + 1][1], r2)), a2 -= i2[t3];
      }
      s2.stroke();
    }
    glyph(e2, t2, s2, i2, a2, r2) {
      let n2 = this.ctx, o2 = i2 / 2, h2 = Math.max(1, 0.12 * i2), l2 = this.pal, c2 = (performance.now() - r2) / 420, d2 = this.reduce || c2 >= 1 ? 1 : D(c2);
      if (n2.globalAlpha = a2, "done" === e2 || "blocked" === e2) {
        this.circle(t2, s2, o2 * ("done" === e2 ? d2 : 1)), n2.fillStyle = "done" === e2 ? l2.success : l2.danger, n2.fill(), n2.strokeStyle = l2.surface, n2.lineWidth = 1.15 * h2, n2.lineCap = "round", n2.lineJoin = "round", "done" === e2 ? this.partial(
          [
            [t2 - 0.4 * o2, s2 + 0.02 * o2],
            [t2 - 0.1 * o2, s2 + 0.32 * o2],
            [t2 + 0.42 * o2, s2 - 0.28 * o2]
          ],
          this.reduce ? 1 : F(1.4 * c2 - 0.15, 0, 1)
        ) : (n2.beginPath(), n2.moveTo(t2 - 0.42 * o2, s2), n2.lineTo(t2 + 0.42 * o2, s2), n2.stroke());
        return;
      }
      this.circle(t2, s2, o2 - h2 / 2), n2.strokeStyle = "todo" === e2 ? l2.strong : l2.accent, n2.lineWidth = h2, n2.stroke(), "todo" !== e2 && (n2.beginPath(), n2.moveTo(t2, s2), n2.arc(
        t2,
        s2,
        0.5 * o2,
        -Math.PI / 2,
        -Math.PI / 2 + Math.PI * ("review" === e2 ? 1.5 : 1)
      ), n2.closePath(), n2.fillStyle = l2.accent, n2.fill());
    }
    avatar(e2, t2, s2, i2, a2, r2 = 0) {
      let n2 = this.ctx, o2 = this.faces[e2], h2 = i2 / 2, l2 = this.pal;
      (n2.globalAlpha = a2, r2 > 0 && (this.circle(t2 + h2, s2 + h2, h2 + r2), n2.fillStyle = l2.surface, n2.fill()), o2 && i2 >= 7) ? n2.drawImage(o2, t2, s2, i2, i2) : (this.circle(t2 + h2, s2 + h2, h2), n2.fillStyle = i2 < 10 ? l2.strong : l2.muted, n2.fill(), i2 >= 10 && (n2.lineWidth = 1, n2.strokeStyle = l2.border, n2.stroke()), i2 >= 16 && this.text(
        w[e2].initials,
        t2 + h2,
        s2 + h2 - 0.4 * i2 * 0.65,
        0.4 * i2,
        500,
        l2.secondary,
        "center"
      ));
    }
    intro(e2, t2) {
      return this.introT0 < 0 ? 1 : 1 - Math.pow(1 - F((t2 - this.introT0 - e2) / 520, 0, 1), 3);
    }
    draw(e2) {
      let { ctx: t2, W: s2, H: i2, dpr: a2, s: r2 } = this;
      if (!this.sized) return;
      t2.setTransform(a2, 0, 0, a2, 0, 0), t2.clearRect(0, 0, s2, i2), this.items = [];
      let n2 = s2 / 2 - this.cx * r2, o2 = i2 / 2 - this.cy * r2;
      if (this.grid(n2, o2), t2.textBaseline = "alphabetic", N.forEach((t3, s3) => this.drawTeam(S[t3], s3, n2, o2, e2)), t2.globalAlpha = 1, this.drawMini(), this.placePanel(), this.readout) {
        let e3 = r2 / this.fitS, t3 = `${e3 < 9.95 ? e3.toFixed(1) : Math.round(e3)}\xD7`;
        t3 !== this.readText && (this.readText = t3, this.readout.textContent = t3);
      }
    }
    grid(e2, t2) {
      let s2 = this.ctx;
      for (let i2 of (s2.fillStyle = this.pal.strong, [8, 32, 128, 512])) {
        let a2 = i2 * this.s;
        if (a2 < 14 || a2 > 420) continue;
        let r2 = E(14, 30, a2) * (1 - E(140, 420, a2)) * 0.55;
        if (r2 < 0.01) continue;
        s2.globalAlpha = r2, s2.beginPath();
        let n2 = (e2 % a2 + a2) % a2, o2 = (t2 % a2 + a2) % a2;
        for (let e3 = n2; e3 < this.W; e3 += a2)
          for (let t3 = o2; t3 < this.H; t3 += a2)
            s2.rect(e3 - 0.75, t3 - 0.75, 1.5, 1.5);
        s2.fill();
      }
    }
    drawTeam(e2, t2, s2, i2, a2) {
      let { ctx: r2, s: n2, pal: o2, W: h2, H: l2 } = this, c2 = this.intro(70 * t2, a2);
      if (c2 <= 0) return;
      let d2 = e2.x * n2 + s2, m2 = e2.y * n2 + i2 + (1 - c2) * 18, p2 = e2.w * n2, u2 = e2.h * n2;
      if (d2 > h2 || m2 > l2 || d2 + p2 < 0 || m2 + u2 < 0) return;
      let f2 = c2 * this.dim[e2.id], g2 = this.hl.get(e2.id) ?? 0;
      r2.globalAlpha = f2, this.rr(d2, m2, p2, u2, F(18 * n2, 6, 30)), r2.fillStyle = o2.muted, r2.fill(), r2.lineWidth = 1, r2.strokeStyle = o2.border, r2.stroke(), g2 > 0 && (r2.globalAlpha = f2 * g2, r2.strokeStyle = o2.strong, r2.stroke());
      let x2 = M[e2.ref], y2 = F(20 * n2, 8, 28), k2 = F(28 * n2, 11, 22), b2 = m2 + F(14 * n2, 2, 36), v2 = Math.round(100 * this.shown[e2.id]);
      r2.globalAlpha = f2, this.text(
        this.fit(x2.name, k2, 500, p2 - 2 * y2 - 44),
        d2 + y2,
        b2,
        k2,
        500,
        o2.fg
      ), r2.globalAlpha = f2;
      let j2 = F(20 * n2, 11, 15);
      this.text(
        `${v2}%`,
        d2 + p2 - y2,
        b2 + (k2 - j2) * 1.01,
        j2,
        500,
        o2.secondary,
        "right"
      );
      let _2 = 20 * n2, z2 = E(8.5, 10.5, _2);
      if (z2 > 0.01) {
        let t3 = F(_2, 11, 13), s3 = Math.max(b2 + 1.3 * k2, m2 + 50 * n2), i3 = 1.45 * t3;
        this.avatar(x2.lead, d2 + y2, s3 + (1.3 * t3 - i3) / 2, i3, f2 * z2), r2.globalAlpha = f2 * z2;
        let a3 = this.stat(e2.id);
        this.text(
          this.fit(
            `${w[x2.lead].name} \xB7 ${a3.projects} projects \xB7 ${a3.open} open tasks`,
            t3,
            400,
            p2 - 2 * y2 - i3 - 6
          ),
          d2 + y2 + i3 + 6,
          s3,
          t3,
          400,
          o2.secondary
        );
      }
      let N2 = Math.min(1, 1.5 * c2);
      for (let r3 of e2.children)
        this.drawCard(S[r3], f2 * N2, t2, s2, i2 + (1 - c2) * 18, a2);
    }
    drawCard(e2, t2, s2, i2, a2, r2) {
      let { ctx: n2, s: o2, pal: h2, W: l2, H: c2 } = this, d2 = e2.x * o2 + i2, m2 = e2.y * o2 + a2, p2 = e2.w * o2, u2 = e2.h * o2;
      if (d2 > l2 || m2 > c2 || d2 + p2 < 0 || m2 + u2 < 0 || p2 < 2) return;
      let f2 = t2 * this.dim[e2.id], g2 = this.hl.get(e2.id) ?? 0, x2 = _[e2.ref];
      n2.globalAlpha = f2, this.rr(d2, m2, p2, u2, F(12 * o2, 2.5, 26)), n2.fillStyle = h2.surface, n2.fill(), n2.lineWidth = 1, n2.strokeStyle = h2.border, n2.stroke(), g2 > 0 && (n2.globalAlpha = f2 * g2, n2.strokeStyle = h2.strong, n2.stroke());
      let y2 = 12 * o2, k2 = p2 - 2 * y2, v2 = 13 * o2, w2 = E(9.6, 12, v2), j2 = 9.5 * o2, z2 = E(8.8, 11, j2), N2 = F(j2, 11, 13), T2 = Math.round(100 * this.shown[e2.id]);
      if (w2 > 0.01) {
        let e3 = F(v2, 12, 20);
        n2.globalAlpha = f2 * w2, this.text(
          this.fit(
            x2.name,
            e3,
            500,
            k2 - (z2 > 0.01 ? this.width(`${T2}%`, N2, 500) + 10 : 0)
          ),
          d2 + y2,
          m2 + 11 * o2,
          e3,
          500,
          h2.fg
        );
      }
      if (z2 > 0.01) {
        let e3 = m2 + 31 * o2, t3 = 0.5 * N2, s3 = "on-track" === x2.health ? h2.success : "at-risk" === x2.health ? h2.warning : h2.danger;
        n2.globalAlpha = f2 * z2, this.circle(d2 + y2 + t3 / 2, e3 + 0.65 * N2, t3 / 2), n2.fillStyle = s3, n2.fill(), this.text(
          `${T2}%`,
          d2 + p2 - y2,
          m2 + 11 * o2 + (F(v2, 12, 20) - N2) * 1.01,
          N2,
          500,
          h2.secondary,
          "right"
        ), n2.globalAlpha = f2 * z2, this.text(
          this.fit(`${b[x2.health]} \xB7 Due ${C(x2.due)}`, N2, 400, k2 - t3 - 6),
          d2 + y2 + t3 + 6,
          e3,
          N2,
          400,
          h2.secondary
        );
      }
      let A2 = m2 + 50 * o2, P2 = F(3 * o2, 1.5, 6);
      n2.globalAlpha = f2, this.rr(d2 + y2, A2, k2, P2, P2 / 2), n2.fillStyle = h2.subtle, n2.fill(), this.rr(d2 + y2, A2, Math.max(P2, k2 * this.shown[e2.id]), P2, P2 / 2), n2.fillStyle = h2.accent, n2.fill();
      let $2 = M[s2].projects.indexOf(e2.ref), R2 = 0;
      for (let t3 of e2.children) {
        let e3 = S[t3];
        if (3 !== e3.kind) continue;
        let n3 = this.intro(70 * s2 + 180 + 45 * $2 + 16 * R2++, r2);
        n3 > 0 && this.drawTile(e3, f2 * n3, i2, a2, n3);
      }
      this.drawPeople(e2, x2.people, f2, d2, m2, p2);
    }
    drawPeople(e2, t2, s2, i2, a2, r2) {
      let { s: n2, pal: o2 } = this, h2 = 16 * n2;
      if (h2 < 3 || a2 + 190 * n2 > this.H || a2 + 206 * n2 < 0) return;
      let l2 = a2 + 190 * n2, c2 = F(0.09 * h2, 0.6, 2.5), d2 = e2.children.filter((e3) => 4 === S[e3].kind);
      for (let e3 = t2.length - 1; e3 >= 0; e3--) {
        let a3 = i2 + (12 + 19 * e3) * n2, r3 = this.hl.get(d2[e3]) ?? 0;
        if (this.avatar(t2[e3], a3, l2, h2, s2, c2), r3 > 0) {
          let e4 = this.ctx;
          e4.globalAlpha = s2 * r3, this.circle(a3 + h2 / 2, l2 + h2 / 2, h2 / 2 + 0.5 * c2), e4.lineWidth = Math.max(1, c2), e4.strokeStyle = o2.fg, e4.stroke();
        }
      }
      let m2 = 9 * n2, p2 = E(8.8, 11, m2);
      if (p2 < 0.01) return;
      let u2 = F(m2, 11, 13), f2 = i2 + (12 + (t2.length - 1) * 19 + 16 + 6) * n2, g2 = t2.length - 1;
      this.ctx.globalAlpha = s2 * p2, this.text(
        this.fit(
          g2 ? `${w[t2[0]].name} and ${g2} ${1 === g2 ? "other" : "others"}` : w[t2[0]].name,
          u2,
          400,
          i2 + r2 - 12 * n2 - f2
        ),
        f2,
        l2 + (h2 - 1.3 * u2) / 2,
        u2,
        400,
        o2.secondary
      );
    }
    drawTile(e2, t2, s2, i2, a2) {
      let { ctx: r2, s: n2, pal: o2, W: h2, H: l2 } = this, c2 = e2.ref, d2 = z[c2], m2 = this.model.status(c2), p2 = e2.x * n2 + s2, u2 = e2.y * n2 + i2, f2 = e2.w * n2, g2 = e2.h * n2;
      if (p2 > h2 || u2 > l2 || p2 + f2 < 0 || u2 + g2 < 0 || f2 < 1) return;
      if (a2 < 1) {
        let e3 = 0.55 + 0.45 * a2;
        p2 += f2 * (1 - e3) / 2, u2 += g2 * (1 - e3) / 2, f2 *= e3, g2 *= e3;
      }
      let x2 = this.spot > 0 && e2.parent === this.spotProject && d2.assignee !== this.spotPerson ? 1 - 0.7 * this.spot : 1, y2 = t2 * this.dim[e2.id] * x2, k2 = this.hl.get(e2.id) ?? 0, b2 = 1 - E(34, 64, f2), v2 = F(4 * n2, 1.5, 20);
      if (this.rr(p2, u2, f2, g2, v2), b2 > 0) {
        let [e3, t3] = "done" === m2 ? [o2.fg, 0.13] : "progress" === m2 ? [o2.accent, 0.85] : "review" === m2 ? [o2.accent, 0.42] : "blocked" === m2 ? [o2.danger, 0.85] : [o2.strong, 0.6];
        r2.globalAlpha = y2 * b2 * t3, r2.fillStyle = e3, r2.fill();
      }
      if (b2 < 1 && (r2.globalAlpha = y2 * (1 - b2), r2.fillStyle = o2.muted, r2.fill()), k2 > 0 && (r2.globalAlpha = y2 * k2, r2.lineWidth = 1, r2.strokeStyle = o2.strong, r2.stroke()), f2 < 70)
        return;
      let w2 = E(70, 100, f2), j2 = E(300, 420, f2), M2 = W(F(0.07 * f2, 6, 12), F(0.045 * f2, 14, 32), j2), _2 = W(F(4.6 * n2, 11, 14), F(0.034 * f2, 16, 28), j2), S2 = 1.28 * _2, N2 = F(0.92 * _2, 10, 14), T2 = (N2 + 6) * (1 - j2), A2 = u2 + M2 + 26 * j2, P2 = F(1.35 * _2, 14, 20), $2 = u2 + g2 - M2 - P2, R2 = j2 > 0.5 ? 2 : F(Math.floor(($2 - 3 - A2) / S2), 1, 2), I2 = j2 > 0.01;
      I2 && (r2.save(), this.rr(p2, u2, f2, g2, v2), r2.clip()), j2 < 0.99 && this.glyph(
        m2,
        p2 + M2 + N2 / 2,
        A2 + S2 / 2,
        N2,
        y2 * w2 * (1 - j2),
        this.statusT[c2]
      ), r2.globalAlpha = y2 * w2;
      let H2 = this.wrap(d2.title, _2, 500, f2 - 2 * M2 - T2, R2);
      H2.forEach((e3, t3) => {
        r2.globalAlpha = y2 * w2, this.text(
          e3,
          p2 + M2 + T2,
          A2 + t3 * S2,
          _2,
          500,
          "done" === m2 ? o2.secondary : o2.fg
        );
      });
      let L2 = w2 * (1 - j2) * E(52, 70, g2);
      if (L2 > 0.01) {
        this.avatar(d2.assignee, p2 + M2, $2, P2, y2 * L2);
        let e3 = F(0.88 * _2, 11, 12.5), t3 = this.model.done(c2);
        r2.globalAlpha = y2 * L2, this.text(
          "blocked" === m2 ? "Blocked" : `${t3}/${d2.checklist.length} \xB7 ${C(d2.due)}`,
          p2 + f2 - M2,
          $2 + (P2 - 1.3 * e3) / 2,
          e3,
          "blocked" === m2 ? 500 : 400,
          "blocked" === m2 ? o2.danger : o2.faint,
          "right"
        );
      }
      I2 && this.drawDetail(c2, m2, p2, u2, f2, g2, M2, A2 + H2.length * S2, y2 * j2), I2 && r2.restore();
    }
    drawDetail(e2, t2, s2, i2, a2, r2, n2, o2, h2) {
      let { ctx: l2, pal: c2 } = this, d2 = z[e2], m2 = _[d2.project], p2 = i2 + r2 - 0.7 * n2, u2 = (e3) => E(-4, 18, p2 - e3);
      this.glyph(
        t2,
        s2 + n2 + 7,
        i2 + n2 + 8.450000000000001,
        14,
        h2,
        this.statusT[e2]
      ), l2.globalAlpha = h2, this.text(
        k[t2],
        s2 + n2 + 14 + 8,
        i2 + n2,
        13,
        500,
        "blocked" === t2 ? c2.danger : c2.fg
      );
      let f2 = this.width(k[t2], 13, 500);
      l2.globalAlpha = h2, this.text(
        `\xB7 Due ${C(d2.due)} \xB7 ${d2.points} ${1 === d2.points ? "point" : "points"}`,
        s2 + n2 + 14 + 8 + f2 + 6,
        i2 + n2,
        13,
        400,
        c2.secondary
      ), l2.globalAlpha = h2, this.text(
        `${d2.comments} ${1 === d2.comments ? "comment" : "comments"}`,
        s2 + a2 - n2,
        i2 + n2,
        13,
        400,
        c2.faint,
        "right"
      );
      let g2 = o2 + 8, x2 = F(0.019 * a2, 13, 15), y2 = 1.5 * x2, b2 = this.wrap(
        this.model.describe(e2),
        x2,
        400,
        Math.min(a2 - 2 * n2, 620),
        3
      );
      b2.forEach((e3, t3) => {
        l2.globalAlpha = h2 * u2(g2 + (t3 + 1) * y2), this.text(e3, s2 + n2, g2 + t3 * y2, x2, 400, c2.secondary);
      });
      let v2 = h2 * u2((g2 += b2.length * y2 + 14) + 58);
      v2 > 0.01 ? (l2.globalAlpha = v2, l2.fillStyle = c2.border, l2.fillRect(s2 + n2, g2, a2 - 2 * n2, 1), g2 += 14, this.avatar(d2.assignee, s2 + n2, g2, 36, v2), l2.globalAlpha = v2, this.text(w[d2.assignee].name, s2 + n2 + 36 + 10, g2 + 1, 14, 500, c2.fg), l2.globalAlpha = v2, this.text(
        w[d2.assignee].role,
        s2 + n2 + 36 + 10,
        g2 + 19,
        13,
        400,
        c2.faint
      ), l2.globalAlpha = v2, this.text(
        this.fit(
          `${m2.name} \xB7 ${M[m2.team].name}`,
          13,
          400,
          a2 - 2 * n2 - 220
        ),
        s2 + a2 - n2,
        g2 + 10,
        13,
        400,
        c2.faint,
        "right"
      ), g2 += 52) : g2 += 66;
      let j2 = h2 * u2(g2 + 20), S2 = this.model.done(e2), N2 = d2.checklist.length;
      l2.globalAlpha = j2, this.text("Checklist", s2 + n2, g2, 13, 500, c2.fg), l2.globalAlpha = j2, this.text(
        `${S2} of ${N2}`,
        s2 + n2 + this.width("Checklist", 13, 500) + 8,
        g2,
        13,
        400,
        c2.faint
      );
      let T2 = Math.min(160, 0.22 * a2), P2 = s2 + a2 - n2 - T2;
      l2.globalAlpha = j2, this.rr(P2, g2 + 7, T2, 4, 2), l2.fillStyle = c2.subtle, l2.fill(), this.rr(P2, g2 + 7, Math.max(4, T2 * S2 / N2), 4, 2), l2.fillStyle = S2 === N2 ? c2.success : c2.accent, l2.fill(), g2 += 26;
      let $2 = performance.now();
      d2.checklist.forEach((t3, i3) => {
        let r3 = h2 * u2(g2 + 26);
        if (r3 < 0.01) {
          g2 += 28;
          return;
        }
        let o3 = this.model.checks[e2][i3], d3 = {
          task: e2,
          item: i3,
          x: s2 + n2 - 8,
          y: g2 - 2,
          w: Math.min(a2 - 2 * n2 + 16, 420),
          h: 28
        };
        (this.hoverItem === i3 && this.hoverNode === A[e2] || this.cursorItem === i3 && this.view === A[e2]) && (l2.globalAlpha = r3, this.rr(d3.x, d3.y, d3.w, d3.h, 9), l2.fillStyle = c2.muted, l2.fill());
        let m3 = this.reduce ? 1 : F(($2 - this.itemT[e2][i3]) / 300, 0, 1), p3 = s2 + n2, f3 = g2 + 4;
        if (l2.globalAlpha = r3, this.rr(p3, f3, 16, 16, 5), o3) {
          let e3 = m3 < 1 ? D(m3) : 1;
          this.rr(
            p3 + 16 * (1 - e3) / 2,
            f3 + 16 * (1 - e3) / 2,
            16 * e3,
            16 * e3,
            5
          ), l2.fillStyle = c2.fg, l2.fill(), l2.strokeStyle = c2.surface, l2.lineWidth = 1.8, l2.lineCap = "round", l2.lineJoin = "round", this.partial(
            [
              [p3 + 4.2, f3 + 8.4],
              [p3 + 7, f3 + 11.2],
              [p3 + 12, f3 + 5.4]
            ],
            F(1.5 * m3 - 0.2, 0, 1)
          );
        } else l2.lineWidth = 1.25, l2.strokeStyle = c2.strong, l2.stroke();
        l2.globalAlpha = r3, this.text(t3, p3 + 16 + 10, g2 + 3, 14, 400, o3 ? c2.faint : c2.fg), r3 > 0.5 && h2 > 0.6 && this.items.push(d3), g2 += 28;
      });
    }
    miniFrame() {
      let e2 = Math.min((this.mw - 12) / 1648, (this.mh - 12) / 910);
      return {
        m: e2,
        ox: (this.mw - 1648 * e2) / 2,
        oy: (this.mh - 910 * e2) / 2
      };
    }
    drawMini() {
      let e2 = this.mctx;
      if (!e2 || !this.mw) return;
      let { m: t2, ox: s2, oy: i2 } = this.miniFrame(), a2 = this.pal;
      for (let r3 of (e2.setTransform(this.dpr, 0, 0, this.dpr, 0, 0), e2.clearRect(0, 0, this.mw, this.mh), e2.globalAlpha = 1, N)) {
        let n3 = S[r3];
        for (let o3 of (e2.globalAlpha = 0.4 + 0.6 * this.dim[r3], e2.beginPath(), e2.roundRect?.(s2 + n3.x * t2, i2 + n3.y * t2, n3.w * t2, n3.h * t2, 3), e2.fillStyle = a2.muted, e2.fill(), e2.lineWidth = 1, e2.strokeStyle = a2.border, e2.stroke(), n3.children)) {
          let r4 = S[o3];
          e2.fillStyle = a2.strong, e2.fillRect(s2 + r4.x * t2, i2 + r4.y * t2, r4.w * t2, r4.h * t2 * 0.7);
        }
      }
      e2.globalAlpha = 1;
      let r2 = this.W / this.s * t2, n2 = this.H / this.s * t2, o2 = s2 + this.cx * t2 - r2 / 2, h2 = i2 + this.cy * t2 - n2 / 2, l2 = r2, c2 = n2;
      l2 < 6 && (o2 -= (6 - l2) / 2, l2 = 6), c2 < 6 && (h2 -= (6 - c2) / 2, c2 = 6);
      let d2 = F(o2, 1, this.mw - 1), m2 = F(h2, 1, this.mh - 1), p2 = F(o2 + l2, 1, this.mw - 1), u2 = F(h2 + c2, 1, this.mh - 1);
      e2.beginPath(), e2.roundRect?.(d2, m2, Math.max(2, p2 - d2), Math.max(2, u2 - m2), 2.5), e2.globalAlpha = 0.14, e2.fillStyle = a2.accent, e2.fill(), e2.globalAlpha = 1, e2.lineWidth = 1.5, e2.strokeStyle = a2.accent, e2.stroke();
    }
    placePanel() {
      let e2, t2, s2 = this.panel;
      if (!s2 || this.hoverNode < 0 || this.hoverItem >= 0) return;
      let { W: i2, H: a2, pw: r2, ph: n2 } = this;
      if (this.cursor >= 0 || !this.mouse) {
        let s3 = this.screenRect(S[this.hoverNode]);
        e2 = s3.x + s3.w + 12 + r2 <= i2 - 8 ? s3.x + s3.w + 12 : s3.x - 12 - r2, t2 = s3.y;
      } else {
        let s3 = this.mouse;
        e2 = s3.x + 18 + r2 <= i2 - 8 ? s3.x + 18 : s3.x - 18 - r2, t2 = s3.y + 18 + n2 <= a2 - 8 ? s3.y + 18 : s3.y - 18 - n2;
      }
      e2 = F(e2, 8, Math.max(8, i2 - r2 - 8)), t2 = F(t2, 60, Math.max(60, a2 - n2 - 8)), !this.panelOn || this.reduce ? (this.px = e2, this.py = t2, this.panelOn = true) : (this.px += (e2 - this.px) * 0.24, this.py += (t2 - this.py) * 0.24, Math.abs(e2 - this.px) + Math.abs(t2 - this.py) > 0.3 && (this.lastAnim = performance.now())), s2.style.transform = `translate3d(${this.px.toFixed(1)}px, ${this.py.toFixed(1)}px, 0)`;
    }
  }
  var V = s(19108), G = s.n(V);
  let { spring: J, duration: Q, ease: Y } = x.T, q = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], X = [...Y.enter];
  function ee({ text: e2 }) {
    let t2 = [...e2];
    return (0, r.jsxs)("span", {
      className: G().roll,
      children: [
        (0, r.jsx)("span", { className: G().srOnly, children: e2 }),
        (0, r.jsx)("span", {
          className: G().rollVisual,
          "aria-hidden": "true",
          children: t2.map((e3, s2) => {
            let i2 = t2.length - 1 - s2;
            return e3 < "0" || e3 > "9" ? (0, r.jsx)(
              "span",
              { className: G().sym, children: e3 },
              `s${i2}${e3}`
            ) : (0, r.jsx)(
              "span",
              {
                className: G().wheel,
                children: (0, r.jsx)("span", {
                  className: G().strip,
                  style: { "--d": e3, "--i": s2 },
                  children: q.map(
                    (e4) => (0, r.jsx)("span", { children: e4 }, e4)
                  )
                })
              },
              `d${i2}`
            );
          })
        })
      ]
    });
  }
  function et({ person: e2, size: t2 }) {
    let s2 = w[e2];
    return (0, r.jsx)("span", {
      className: G().face,
      style: { width: t2, height: t2 },
      children: s2.portrait ? (0, r.jsx)(o.default, {
        src: s2.portrait,
        alt: "",
        width: 2 * t2,
        height: 3 * t2,
        className: G().faceImg
      }) : (0, r.jsx)("span", {
        className: G().initials,
        style: { fontSize: 0.38 * t2 },
        children: s2.initials
      })
    });
  }
  function es({ label: e2, children: t2 }) {
    return (0, r.jsxs)("div", {
      className: G().cardRow,
      children: [
        (0, r.jsx)("dt", { children: e2 }),
        (0, r.jsx)("dd", { children: t2 })
      ]
    });
  }
  function ei({ store: e2, model: t2, version: s2, panelRef: i2, measure: a2 }) {
    let o2 = (0, n.useSyncExternalStore)(e2.subscribe, e2.get, () => -1), [h2, l2] = (0, n.useState)(-1);
    o2 >= 0 && o2 !== h2 && l2(o2);
    let c2 = o2 >= 0 ? o2 : h2;
    (0, n.useLayoutEffect)(() => {
      a2();
    }, [c2, s2, a2]);
    let d2 = c2 >= 0 ? S[c2] : null, m2 = null;
    if (d2) {
      let e3 = t2.stats(c2), s3 = `${Math.round(100 * e3.progress)}%`;
      if (1 === d2.kind) {
        let t3 = M[d2.ref];
        m2 = (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("div", { className: G().cardName, children: t3.name }),
            (0, r.jsx)("div", { className: G().cardMeta, children: t3.mission }),
            (0, r.jsxs)("dl", {
              className: G().cardRows,
              children: [
                (0, r.jsx)(es, {
                  label: "Lead",
                  children: (0, r.jsxs)("span", {
                    className: G().who,
                    children: [
                      (0, r.jsx)(et, { person: t3.lead, size: 18 }),
                      w[t3.lead].name
                    ]
                  })
                }),
                (0, r.jsxs)(es, {
                  label: "Projects",
                  children: [
                    e3.projects,
                    e3.atRisk ? (0, r.jsxs)("span", {
                      className: G().soft,
                      children: [" \xB7 ", e3.atRisk, " need attention"]
                    }) : null
                  ]
                }),
                (0, r.jsx)(es, { label: "Open tasks", children: e3.open }),
                (0, r.jsx)(es, { label: "Progress", children: s3 })
              ]
            }),
            (0, r.jsx)("p", {
              className: G().cardHint,
              children: "Click to zoom into the team"
            })
          ]
        });
      } else if (2 === d2.kind) {
        let t3 = _[d2.ref];
        m2 = (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("div", { className: G().cardName, children: t3.name }),
            (0, r.jsxs)("div", {
              className: G().cardMeta,
              children: [
                (0, r.jsx)("span", {
                  className: G().dot,
                  "data-tone": t3.health
                }),
                b[t3.health],
                " \xB7 Due ",
                C(t3.due)
              ]
            }),
            (0, r.jsxs)("dl", {
              className: G().cardRows,
              children: [
                (0, r.jsx)(es, { label: "Progress", children: s3 }),
                (0, r.jsxs)(es, {
                  label: "Tasks done",
                  children: [e3.total - e3.open, " of ", e3.total]
                }),
                (0, r.jsx)(es, { label: "Blocked", children: e3.blocked }),
                (0, r.jsx)(es, {
                  label: "Lead",
                  children: (0, r.jsxs)("span", {
                    className: G().who,
                    children: [
                      (0, r.jsx)(et, { person: t3.lead, size: 18 }),
                      w[t3.lead].name
                    ]
                  })
                })
              ]
            }),
            (0, r.jsx)("p", {
              className: G().cardHint,
              children: "Click to open the project"
            })
          ]
        });
      } else if (3 === d2.kind) {
        let e4 = z[d2.ref], s4 = t2.status(d2.ref);
        m2 = (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("div", { className: G().cardName, children: e4.title }),
            (0, r.jsxs)("div", {
              className: G().cardMeta,
              children: [
                (0, r.jsx)("span", { className: G().status, "data-status": s4 }),
                k[s4],
                " \xB7 ",
                _[e4.project].name
              ]
            }),
            (0, r.jsxs)("dl", {
              className: G().cardRows,
              children: [
                (0, r.jsx)(es, {
                  label: "Assignee",
                  children: (0, r.jsxs)("span", {
                    className: G().who,
                    children: [
                      (0, r.jsx)(et, { person: e4.assignee, size: 18 }),
                      w[e4.assignee].name
                    ]
                  })
                }),
                (0, r.jsx)(es, { label: "Due", children: C(e4.due) }),
                (0, r.jsxs)(es, {
                  label: "Checklist",
                  children: [t2.done(d2.ref), " of ", e4.checklist.length]
                }),
                (0, r.jsxs)(es, {
                  label: "Estimate",
                  children: [
                    e4.points,
                    " ",
                    1 === e4.points ? "point" : "points"
                  ]
                })
              ]
            }),
            (0, r.jsx)("p", {
              className: G().cardHint,
              children: "Click to open the task"
            })
          ]
        });
      } else if (4 === d2.kind) {
        let s4 = w[d2.ref], i3 = _[S[d2.parent].ref], a3 = i3.tasks.filter((e4) => z[e4].assignee === d2.ref), n2 = a3.filter(
          (e4) => "progress" === t2.status(e4) || "review" === t2.status(e4)
        ).length;
        m2 = (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("div", {
              className: G().person,
              children: [
                (0, r.jsx)(et, { person: d2.ref, size: 36 }),
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("div", {
                      className: G().cardName,
                      children: s4.name
                    }),
                    (0, r.jsx)("div", {
                      className: G().cardMeta,
                      children: s4.role
                    })
                  ]
                })
              ]
            }),
            (0, r.jsxs)("dl", {
              className: G().cardRows,
              children: [
                (0, r.jsx)(es, {
                  label: `Tasks in ${i3.name}`,
                  children: a3.length
                }),
                (0, r.jsx)(es, { label: "Open", children: e3.open }),
                (0, r.jsx)(es, { label: "Active now", children: n2 })
              ]
            }),
            (0, r.jsx)("p", {
              className: G().cardHint,
              children: a3.length ? "Click to jump to their current task" : "Click to open the project"
            })
          ]
        });
      }
    }
    return (0, r.jsx)("div", {
      ref: i2,
      className: G().card,
      "data-open": o2 >= 0,
      "aria-hidden": "true",
      children: m2
    });
  }
  function ea() {
    let e2, t2 = !!(0, h.I)(), s2 = (0, n.useId)(), i2 = `${s2}-title`, a2 = `${s2}-hint`, o2 = (0, n.useRef)(null), x2 = (0, n.useRef)(null), k2 = (0, n.useRef)(null), v2 = (0, n.useRef)(null), j2 = (0, n.useRef)(null), N2 = (0, n.useRef)(null), T2 = (0, n.useRef)(null), A2 = (0, n.useRef)(null), P2 = (0, n.useRef)(null), [$2] = (0, n.useState)(() => {
      let e3, t3;
      return e3 = -1, t3 = /* @__PURE__ */ new Set(), {
        get: () => e3,
        set: (s3) => {
          s3 !== e3 && (e3 = s3, t3.forEach((e4) => e4()));
        },
        subscribe: (e4) => (t3.add(e4), () => {
          t3.delete(e4);
        })
      };
    }), [I2] = (0, n.useState)(() => new R()), [H2, L2] = (0, n.useState)([0]), [F2, W2] = (0, n.useState)(0), [E2, D2] = (0, n.useState)(false), [O2, B2] = (0, n.useState)(false), [U2, K2] = (0, n.useState)(false), [V2, Y2] = (0, n.useState)(""), [q2, es2] = (0, n.useState)(0);
    (0, n.useEffect)(() => {
      let e3 = k2.current, t3 = v2.current, s3 = o2.current, i3 = x2.current;
      if (!e3 || !t3 || !s3 || !i3) return;
      let a3 = new Z(t3, j2.current, e3, I2, {
        hover: $2.set,
        path: L2,
        zoomed: D2,
        interact: () => B2(true),
        tour: K2,
        changed: () => W2((e4) => e4 + 1),
        announce: Y2
      });
      P2.current = a3, a3.attachPanel(N2.current), a3.attachReadout(T2.current);
      let r2 = () => {
        let e4 = getComputedStyle(s3), t4 = (t5, s4) => e4.getPropertyValue(t5).trim() || s4;
        a3.setPalette({
          surface: t4("--surface", "#fff"),
          muted: t4("--surface-muted", "#f6f6f6"),
          fg: t4("--foreground", "#111"),
          secondary: t4("--text-secondary", "#555"),
          faint: t4("--text-muted", "#777"),
          border: t4("--border", "#e8e8e8"),
          subtle: t4("--border-subtle", "#f1f1f1"),
          strong: t4("--border-strong", "#c8c8c8"),
          accent: t4("--accent", "#333"),
          success: t4("--success", "#1f8a4c"),
          warning: t4("--warning", "#b7791f"),
          danger: t4("--danger", "#c53030"),
          body: e4.fontFamily,
          display: getComputedStyle(i3).fontFamily
        });
      };
      r2();
      let n2 = new MutationObserver(r2);
      n2.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme", "data-accent", "class", "style"]
      });
      let h2 = matchMedia("(prefers-color-scheme: dark)");
      h2.addEventListener("change", r2);
      let l2 = new ResizeObserver(
        ([e4]) => a3.resize(
          e4.contentRect.width,
          e4.contentRect.height,
          Math.min(2, window.devicePixelRatio || 1)
        )
      );
      l2.observe(e3);
      let c2 = new IntersectionObserver(
        ([e4]) => a3.setVisible(e4.isIntersecting),
        { threshold: 0.15 }
      );
      c2.observe(e3);
      let d2 = () => a3.setHidden(document.hidden);
      d2(), document.addEventListener("visibilitychange", d2);
      let m2 = (e4) => a3.wheel(e4);
      return e3.addEventListener("wheel", m2, { passive: false }), () => {
        a3.destroy(), P2.current = null, n2.disconnect(), h2.removeEventListener("change", r2), l2.disconnect(), c2.disconnect(), document.removeEventListener("visibilitychange", d2), e3.removeEventListener("wheel", m2);
      };
    }, [$2, I2]), (0, n.useEffect)(() => {
      P2.current?.setReduced(t2);
    }, [t2]), (0, n.useEffect)(() => {
      let e3 = A2.current;
      if (!e3) return;
      let t3 = new ResizeObserver(
        () => es2(Math.ceil(e3.getBoundingClientRect().width))
      );
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    let ea2 = H2[H2.length - 1];
    (0, n.useEffect)(() => {
      let e3 = window.setTimeout(() => {
        let e4 = P2.current;
        e4 && Y2(`Now viewing ${e4.describeNode(ea2)}`);
      }, 450);
      return () => window.clearTimeout(e3);
    }, [ea2]);
    let er2 = (0, n.useCallback)(() => P2.current?.measurePanel(), []), en = (e3) => {
      let t3 = P2.current;
      if (!t3) return;
      let s3 = e3.target.closest("button, [data-overlay]");
      if ("pointerdown" === e3.type) {
        if (s3 || "mouse" === e3.pointerType && 0 !== e3.button) return;
        e3.currentTarget.setPointerCapture(e3.pointerId), t3.pointerDown(e3.nativeEvent);
      } else if ("pointermove" === e3.type) {
        if (s3 && !e3.currentTarget.hasPointerCapture(e3.pointerId))
          return void t3.pointerLeave();
        t3.pointerMove(e3.nativeEvent);
      } else
        "pointerup" === e3.type ? t3.pointerUp(e3.nativeEvent) : t3.pointerUp(e3.nativeEvent, true);
    }, eo = (e3) => {
      "pointerdown" === e3.type ? (e3.currentTarget.setPointerCapture(e3.pointerId), P2.current?.miniPointer(e3.nativeEvent)) : e3.currentTarget.hasPointerCapture(e3.pointerId) && P2.current?.miniPointer(e3.nativeEvent);
    }, eh = I2.stats(ea2), el = S[ea2], ec = Math.round(100 * eh.progress), ed = eh.people.slice(0, 6), em = `Workspace map of Northstar Studio: ${M.length} teams, ${_.length} projects and ${z.length} tasks. Currently viewing ${el.name}. Zoom in to reveal projects, tasks and people.`;
    return (0, r.jsxs)("section", {
      ref: o2,
      className: G().root,
      "aria-labelledby": i2,
      children: [
        (0, r.jsxs)("header", {
          className: G().header,
          children: [
            (0, r.jsx)("h2", {
              id: i2,
              ref: x2,
              className: G().title,
              children: "Studio map"
            }),
            (0, r.jsxs)("p", {
              className: G().lede,
              children: [
                M.length,
                " teams, ",
                _.length,
                " projects and ",
                z.length,
                " tasks. Zoom in for more detail."
              ]
            })
          ]
        }),
        (0, r.jsxs)("div", {
          className: G().body,
          children: [
            (0, r.jsxs)("div", {
              ref: k2,
              className: G().stage,
              "data-zoomed": E2,
              tabIndex: 0,
              role: "application",
              "aria-roledescription": "zoomable map",
              "aria-label": em,
              "aria-describedby": a2,
              onPointerDown: en,
              onPointerMove: en,
              onPointerUp: en,
              onPointerCancel: en,
              onPointerLeave: () => P2.current?.pointerLeave(),
              onKeyDown: (e3) => {
                let t3 = P2.current;
                if (!t3 || e3.target !== e3.currentTarget) return;
                let s3 = {
                  ArrowLeft: [-1, 0],
                  ArrowRight: [1, 0],
                  ArrowUp: [0, -1],
                  ArrowDown: [0, 1]
                }, i3 = true;
                s3[e3.key] ? t3.moveCursor(...s3[e3.key]) : "Enter" === e3.key || " " === e3.key ? t3.activateCursor() : "Escape" === e3.key || "Backspace" === e3.key ? t3.flyOut() : "+" === e3.key || "=" === e3.key ? t3.zoomBy(1.5) : "-" === e3.key || "_" === e3.key ? t3.zoomBy(1 / 1.5) : "0" === e3.key || "Home" === e3.key ? t3.fitAll() : i3 = false, i3 && e3.preventDefault();
              },
              children: [
                (0, r.jsx)("canvas", {
                  ref: v2,
                  className: G().canvas,
                  "aria-hidden": "true"
                }),
                (0, r.jsx)(l.PY1.nav, {
                  className: G().crumbs,
                  "aria-label": "Map location",
                  "data-overlay": "",
                  initial: false,
                  animate: q2 ? { width: q2 + 2 } : void 0,
                  transition: t2 ? { duration: 0 } : J.morph,
                  children: (0, r.jsx)("ol", {
                    ref: A2,
                    className: G().crumbList,
                    children: (0, r.jsx)(c.N, {
                      initial: false,
                      mode: "popLayout",
                      children: H2.map(
                        (e3, s3) => (0, r.jsxs)(
                          l.PY1.li,
                          {
                            className: G().crumb,
                            layout: !t2 && "position",
                            initial: !t2 && { opacity: 0, x: 8 },
                            animate: { opacity: 1, x: 0 },
                            exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                              opacity: 0,
                              transition: { duration: Q.instant }
                            },
                            transition: t2 ? { duration: 0 } : {
                              ...J.smooth,
                              opacity: { duration: Q.standard }
                            },
                            children: [
                              s3 > 0 && (0, r.jsx)(d.A, {
                                className: G().sep,
                                size: 14,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              s3 < H2.length - 1 ? (0, r.jsx)("button", {
                                type: "button",
                                className: G().crumbBtn,
                                onClick: () => P2.current?.goTo(e3),
                                children: S[e3].name
                              }) : (0, r.jsx)("span", {
                                className: G().crumbHere,
                                "aria-current": "location",
                                children: S[e3].name
                              })
                            ]
                          },
                          e3
                        )
                      )
                    })
                  })
                }),
                (0, r.jsxs)("button", {
                  type: "button",
                  className: G().tour,
                  "aria-pressed": U2,
                  onClick: () => P2.current?.toggleTour(),
                  children: [
                    (0, r.jsx)("span", {
                      className: G().tourIcon,
                      "aria-hidden": "true",
                      children: U2 ? (0, r.jsx)(m.A, { size: 16, strokeWidth: 1.75 }) : (0, r.jsx)(p.A, { size: 16, strokeWidth: 1.75 })
                    }),
                    (0, r.jsxs)("span", {
                      className: G().tourLabels,
                      children: [
                        (0, r.jsx)("span", {
                          "data-on": !U2,
                          children: "Take the tour"
                        }),
                        (0, r.jsx)("span", {
                          "data-on": U2,
                          children: "Stop tour"
                        })
                      ]
                    })
                  ]
                }),
                (0, r.jsx)(ei, {
                  store: $2,
                  model: I2,
                  version: F2,
                  panelRef: N2,
                  measure: er2
                }),
                (0, r.jsx)("div", {
                  className: G().mini,
                  "data-visible": E2,
                  "data-overlay": "",
                  "aria-hidden": "true",
                  children: (0, r.jsx)("canvas", {
                    ref: j2,
                    className: G().miniCanvas,
                    onPointerDown: eo,
                    onPointerMove: eo
                  })
                }),
                (0, r.jsxs)("p", {
                  className: G().hint,
                  "data-hidden": O2 || E2,
                  "aria-hidden": "true",
                  children: [
                    (0, r.jsx)("span", {
                      className: G().hintFine,
                      children: "Scroll to zoom, drag to pan, click anything to fly in"
                    }),
                    (0, r.jsx)("span", {
                      className: G().hintCoarse,
                      children: "Pinch to zoom, tap anything to fly in"
                    })
                  ]
                }),
                (0, r.jsxs)("div", {
                  className: G().zoom,
                  "data-overlay": "",
                  children: [
                    (0, r.jsx)("button", {
                      type: "button",
                      "aria-label": "Zoom out",
                      onClick: () => P2.current?.zoomBy(0.625),
                      children: (0, r.jsx)(u.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      })
                    }),
                    (0, r.jsx)("span", {
                      ref: T2,
                      className: G().readout,
                      "aria-hidden": "true",
                      children: "1.0\xD7"
                    }),
                    (0, r.jsx)("button", {
                      type: "button",
                      "aria-label": "Zoom in",
                      onClick: () => P2.current?.zoomBy(1.6),
                      children: (0, r.jsx)(f.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      })
                    }),
                    (0, r.jsx)("button", {
                      type: "button",
                      "aria-label": "Show the whole studio",
                      disabled: !E2 && 1 === H2.length,
                      onClick: () => P2.current?.fitAll(),
                      children: (0, r.jsx)(g.A, {
                        size: 15,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      })
                    })
                  ]
                })
              ]
            }),
            (0, r.jsx)("p", {
              id: a2,
              className: G().srOnly,
              children: "Use the arrow keys to move between items in view, Enter to zoom in or tick a checklist item, Escape to zoom out, plus and minus to zoom, and 0 to see the whole studio."
            }),
            (0, r.jsxs)("aside", {
              className: G().panel,
              "aria-label": "Key numbers for the current view",
              children: [
                (0, r.jsx)("div", {
                  className: G().scope,
                  children: (0, r.jsx)(c.N, {
                    mode: "popLayout",
                    initial: false,
                    children: (0, r.jsxs)(
                      l.PY1.div,
                      {
                        className: G().scopeInner,
                        initial: !t2 && { opacity: 0, y: 4 },
                        animate: { opacity: 1, y: 0 },
                        exit: t2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, transition: { duration: Q.instant } },
                        transition: (e2 = Q.standard, t2 ? { duration: 0 } : { duration: e2, ease: X }),
                        children: [
                          (0, r.jsx)("span", {
                            className: G().scopeKind,
                            children: y[el.kind]
                          }),
                          (0, r.jsx)("span", {
                            className: G().scopeName,
                            children: el.name
                          })
                        ]
                      },
                      ea2
                    )
                  })
                }),
                (0, r.jsxs)("div", {
                  className: G().kpiMain,
                  children: [
                    (0, r.jsx)("span", {
                      className: G().kpiLabel,
                      children: 3 === el.kind ? "Checklist complete" : "Progress"
                    }),
                    (0, r.jsx)("span", {
                      className: G().kpiValue,
                      children: (0, r.jsx)(ee, { text: `${ec}%` })
                    }),
                    (0, r.jsx)("span", {
                      className: G().track,
                      "aria-hidden": "true",
                      children: (0, r.jsx)("span", {
                        className: G().fill,
                        style: { width: `${Math.max(2, ec)}%` }
                      })
                    })
                  ]
                }),
                (0, r.jsxs)("dl", {
                  className: G().kpis,
                  children: [
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("dt", { children: "Open tasks" }),
                        (0, r.jsx)("dd", {
                          children: (0, r.jsx)(ee, {
                            text: eh.open.toLocaleString("en-US")
                          })
                        })
                      ]
                    }),
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("dt", { children: "Blocked" }),
                        (0, r.jsx)("dd", {
                          "data-alert": eh.blocked > 0,
                          children: (0, r.jsx)(ee, {
                            text: eh.blocked.toLocaleString("en-US")
                          })
                        })
                      ]
                    }),
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("dt", { children: "Next due" }),
                        (0, r.jsx)("dd", {
                          children: (0, r.jsx)(ee, {
                            text: null === eh.nextDue ? "None" : C(eh.nextDue)
                          })
                        })
                      ]
                    })
                  ]
                }),
                (0, r.jsxs)("div", {
                  className: G().people,
                  children: [
                    (0, r.jsxs)("div", {
                      className: G().peopleHead,
                      children: [
                        (0, r.jsx)("span", { children: "People" }),
                        (0, r.jsx)("span", {
                          className: G().peopleCount,
                          children: (0, r.jsx)(ee, {
                            text: eh.people.length.toLocaleString("en-US")
                          })
                        })
                      ]
                    }),
                    (0, r.jsx)("ul", {
                      className: G().stack,
                      "aria-label": `${eh.people.length} people: ${eh.people.map((e3) => w[e3].name).join(", ")}`,
                      children: (0, r.jsxs)(c.N, {
                        initial: false,
                        mode: "popLayout",
                        children: [
                          ed.map(
                            (e3) => (0, r.jsx)(
                              l.PY1.li,
                              {
                                layout: !t2 && "position",
                                title: w[e3].name,
                                initial: !t2 && { opacity: 0, scale: 0.9 },
                                animate: { opacity: 1, scale: 1 },
                                exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                                  opacity: 0,
                                  scale: 0.9,
                                  transition: { duration: Q.fast }
                                },
                                transition: t2 ? { duration: 0 } : J.snappy,
                                children: (0, r.jsx)(et, {
                                  person: e3,
                                  size: 28
                                })
                              },
                              e3
                            )
                          ),
                          eh.people.length > ed.length && (0, r.jsxs)(
                            l.PY1.li,
                            {
                              layout: !t2 && "position",
                              className: G().more,
                              initial: !t2 && { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              transition: t2 ? { duration: 0 } : J.snappy,
                              children: ["+", eh.people.length - ed.length]
                            },
                            "more"
                          )
                        ]
                      })
                    }),
                    (0, r.jsx)("p", {
                      className: G().peopleNote,
                      children: 3 === el.kind ? `Assigned to ${w[eh.people[0]].name}` : eh.projects ? `${eh.projects} projects, ${eh.atRisk} need attention` : `Led by ${w[_[el.ref].lead].name}`
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, r.jsx)("div", {
          className: G().srOnly,
          children: (0, r.jsxs)("table", {
            children: [
              (0, r.jsx)("caption", {
                children: "Projects at Northstar Studio by team"
              }),
              (0, r.jsx)("thead", {
                children: (0, r.jsxs)("tr", {
                  children: [
                    (0, r.jsx)("th", { scope: "col", children: "Team" }),
                    (0, r.jsx)("th", { scope: "col", children: "Project" }),
                    (0, r.jsx)("th", { scope: "col", children: "Health" }),
                    (0, r.jsx)("th", { scope: "col", children: "Progress" }),
                    (0, r.jsx)("th", { scope: "col", children: "Open tasks" }),
                    (0, r.jsx)("th", { scope: "col", children: "Blocked" }),
                    (0, r.jsx)("th", { scope: "col", children: "Due" })
                  ]
                })
              }),
              (0, r.jsx)("tbody", {
                children: _.map((e3, t3) => {
                  let s3 = I2.stats(
                    S.findIndex((e4) => 2 === e4.kind && e4.ref === t3)
                  );
                  return (0, r.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, r.jsx)("td", { children: M[e3.team].name }),
                        (0, r.jsx)("th", { scope: "row", children: e3.name }),
                        (0, r.jsx)("td", { children: b[e3.health] }),
                        (0, r.jsxs)("td", {
                          children: [Math.round(100 * s3.progress), "%"]
                        }),
                        (0, r.jsx)("td", { children: s3.open }),
                        (0, r.jsx)("td", { children: s3.blocked }),
                        (0, r.jsx)("td", { children: C(e3.due) })
                      ]
                    },
                    e3.id
                  );
                })
              })
            ]
          })
        }),
        (0, r.jsx)("p", {
          className: G().srOnly,
          "aria-live": "polite",
          children: V2
        })
      ]
    });
  }
  let er = ea;
}

__m(__module,__exports,__require);
});
A.cssFor("semantic-zoom", [19108]);
A.item("semantic-zoom", {entry:67542, export:"SemanticZoom", kind:"block", tier:"pro", unresolved:[]});
})();