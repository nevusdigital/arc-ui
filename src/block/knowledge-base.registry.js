/* knowledge-base (pro block) */
(function(){var A=globalThis.__ARC__;
A.regCss(9146, ".dropdown-menu_trigger__tHHfW{display:inline-flex;max-width:100%;min-height:var(--control-height-sm);align-items:center;gap:var(--space-2);padding:0 var(--space-3);border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);font-weight:500;cursor:pointer;transition:background-color var(--duration-instant) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.dropdown-menu_trigger__tHHfW:hover{border-color:var(--border-strong);background:var(--surface-muted);box-shadow:var(--shadow-resting)}}.dropdown-menu_trigger__tHHfW[data-state=open]{border-color:var(--border-strong);background:var(--surface-muted);box-shadow:none}.dropdown-menu_trigger__tHHfW:active{border-color:var(--border-strong);background:color-mix(in oklab,var(--surface-muted),var(--border) 55%);box-shadow:none}.dropdown-menu_item__2mM29:focus-visible{outline:none}.dropdown-menu_triggerIcon__ePoI_{display:inline-flex;flex:none;color:var(--text-secondary)}.dropdown-menu_label__E6np5{position:relative;display:inline-flex;min-width:0;flex:0 1 auto;overflow-x:clip}.dropdown-menu_labelMeasure__xGL22{position:absolute;top:0;left:0;visibility:hidden;white-space:nowrap;pointer-events:none}.dropdown-menu_labelText__77jcs{display:block;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dropdown-menu_chevron__4EgVP{flex:none;color:var(--text-muted);transition:transform var(--duration-spring) var(--ease-spring),color var(--duration-fast) var(--ease-standard)}.dropdown-menu_trigger__tHHfW[data-state=open] .dropdown-menu_chevron__4EgVP{transform:rotate(180deg)}.dropdown-menu_menu__N7a5H{--menu-x:0px;--menu-y:-5px;position:relative;z-index:60;min-width:min(12rem,var(--radix-dropdown-menu-content-available-width));max-width:var(--radix-dropdown-menu-content-available-width);padding:5px;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface-raised);box-shadow:var(--shadow-floating);transform-origin:var(--radix-dropdown-menu-content-transform-origin);transition:opacity var(--duration-fast) var(--ease-enter),transform var(--duration-spring) var(--ease-spring)}.dropdown-menu_menu__N7a5H[data-side=top]{--menu-y:5px}.dropdown-menu_menu__N7a5H[data-side=left]{--menu-x:5px;--menu-y:0px}.dropdown-menu_menu__N7a5H[data-side=right]{--menu-x:-5px;--menu-y:0px}.dropdown-menu_menu__N7a5H[data-state=closed]{opacity:0;transform:translate(calc(var(--menu-x) * .5),calc(var(--menu-y) * .5)) scale(.985);transition:opacity .13s var(--ease-standard),transform .13s var(--ease-standard);animation:dropdown-menu_menu-exit__njtoa .13s linear both;pointer-events:none}.dropdown-menu_highlight___o21W{position:absolute;top:0;right:5px;left:5px;border-radius:calc(var(--radius-panel) - 6px);background:var(--surface-muted);opacity:0;pointer-events:none;transition:background-color var(--duration-fast) var(--ease-standard)}.dropdown-menu_highlight___o21W[data-tone=danger]{background:color-mix(in oklab,var(--danger) 8%,var(--surface))}.dropdown-menu_item__2mM29{position:relative;display:flex;min-height:36px;align-items:center;gap:10px;padding:0 11px;border-radius:calc(var(--radius-panel) - 6px);color:var(--foreground);font-size:var(--text-sm);cursor:pointer;outline:none;transition:color var(--duration-fast) var(--ease-standard),opacity var(--duration-standard) var(--ease-enter) calc(min(var(--i, 0), 4) * 35ms),transform var(--duration-standard) var(--ease-enter) calc(min(var(--i, 0), 4) * 35ms)}.dropdown-menu_icon__HqlVs{display:inline-flex;width:17px;color:var(--text-secondary)}.dropdown-menu_separator__hTmo3{height:1px;margin:var(--space-1) calc(var(--space-1) * -1);background:var(--border-subtle)}.dropdown-menu_destructive__sBler,.dropdown-menu_destructive__sBler .dropdown-menu_icon__HqlVs{color:var(--danger)}.dropdown-menu_item__2mM29[data-disabled]{opacity:.45;cursor:default}@keyframes dropdown-menu_menu-exit__njtoa{to{--menu-exit:1}}@media (prefers-reduced-transparency:reduce){.dropdown-menu_menu__N7a5H{background:var(--surface-raised);backdrop-filter:none;-webkit-backdrop-filter:none}}@media (prefers-reduced-motion:reduce){.dropdown-menu_chevron__4EgVP,.dropdown-menu_highlight___o21W,.dropdown-menu_item__2mM29,.dropdown-menu_trigger__tHHfW{transition:none}}@media (prefers-reduced-motion:reduce){.dropdown-menu_menu__N7a5H,.dropdown-menu_menu__N7a5H[data-state=closed]{transform:none;transition:opacity var(--duration-instant) linear}}", {"trigger":"dropdown-menu_trigger__tHHfW","item":"dropdown-menu_item__2mM29","triggerIcon":"dropdown-menu_triggerIcon__ePoI_","label":"dropdown-menu_label__E6np5","labelMeasure":"dropdown-menu_labelMeasure__xGL22","labelText":"dropdown-menu_labelText__77jcs","chevron":"dropdown-menu_chevron__4EgVP","menu":"dropdown-menu_menu__N7a5H","menu-exit":"dropdown-menu_menu-exit__njtoa","highlight":"dropdown-menu_highlight___o21W","icon":"dropdown-menu_icon__HqlVs","separator":"dropdown-menu_separator__hTmo3","destructive":"dropdown-menu_destructive__sBler"});
A.reg(12592, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, {
    KnowledgeBase: () => ew,
    chunksFor: () => eu,
    default: () => ek
  });
  var a = n(95155), s = n(12115), i = n(28245), r = n(55809), o = n(92171), l = n(25354), d = n(80642), c = n(18310), u = n(35484), h = n(38158), p = n(19805), m = n(36483), g = n(50626), x = n(68562), b = n(80846), f = n(2125), _ = n(64577), y = n(59103), w = n(65377), k = n(9005), v = n(21759), j = n(7770), N = n(51288), S = n(73474), T = n(60466), I = n(83978), C = n(66558), M = n(96220), R = n(94274), q = n(50680), A = n(52898);
  let L = {
    chunkSize: 512,
    overlap: 64,
    topK: 4,
    hybrid: true,
    rerank: false,
    embeddingModel: "general-v2"
  }, E = [
    { value: "general-v2", label: "General embed v2, 1,024 dims" },
    {
      value: "general-v2-large",
      label: "General embed v2 large, 3,072 dims"
    },
    { value: "multilingual-v2", label: "Multilingual embed v2, 1,024 dims" },
    { value: "compact-v2", label: "Compact embed v2, 384 dims" }
  ], P = [
    {
      id: "refunds",
      name: "Refund and cancellation policy.pdf",
      kind: "pdf",
      pages: 12,
      chunks: 45,
      tokens: 19840,
      status: "indexed",
      note: "Uploaded Oct 14"
    },
    {
      id: "soc2",
      name: "SOC 2 Type II report summary.pdf",
      kind: "pdf",
      pages: 38,
      chunks: 159,
      tokens: 71230,
      status: "indexed",
      note: "Uploaded Oct 9"
    },
    {
      id: "onboarding",
      name: "Employee onboarding guide",
      kind: "notion",
      pages: 24,
      chunks: 82,
      tokens: 36510,
      status: "indexed",
      note: "Synced 2h ago"
    },
    {
      id: "questionnaire",
      name: "Security questionnaire answers",
      kind: "drive",
      pages: 18,
      chunks: 68,
      tokens: 30120,
      status: "failed",
      failedStep: "embed",
      progress: 0.6,
      error: "Embedding timed out after 41 of 68 chunks"
    },
    {
      id: "help",
      name: "help.copperline.dev",
      kind: "web",
      pages: 86,
      chunks: 296,
      tokens: 132400,
      status: "parse",
      progress: 0.7
    }
  ], O = [
    {
      id: "refunds-1",
      sourceId: "refunds",
      index: 1,
      location: "p. 1",
      overview: true,
      text: "Contents. 1 Scope. 2 Annual plans and refunds after 30 days. 3 Monthly plans. 4 Usage credits. 5 How to request a refund. 6 Chargebacks and disputes. Refund and cancellation policy, effective October 1, 2026."
    },
    {
      id: "refunds-12",
      sourceId: "refunds",
      index: 12,
      location: "p. 2",
      text: "Scope. This policy covers every Copperline subscription bought directly on copperline.dev, including monthly and annual plans, seat add-ons and usage credits. Purchases made through a reseller follow the reseller's own terms."
    },
    {
      id: "refunds-13",
      sourceId: "refunds",
      index: 13,
      location: "p. 3",
      text: "Annual plans. Annual plans can be refunded in full within 30 days of the original purchase date. After 30 days, we refund the unused months on a prorated basis when you cancel, minus any discount applied at checkout."
    },
    {
      id: "refunds-14",
      sourceId: "refunds",
      index: 14,
      location: "p. 3",
      text: "Monthly plans. Monthly plans are not refunded for partial months. When you cancel, your workspace stays active until the end of the current billing period and you will not be charged again."
    },
    {
      id: "refunds-15",
      sourceId: "refunds",
      index: 15,
      location: "p. 4",
      text: "Usage credits. Unused usage credits expire 12 months after purchase and are non-refundable, except where the law requires it. Credits granted as part of a promotion have no cash value."
    },
    {
      id: "refunds-16",
      sourceId: "refunds",
      index: 16,
      location: "p. 4",
      text: "Requesting a refund. Workspace owners can request a refund from Settings, Billing, Request refund, or by emailing billing@copperline.dev with the invoice number. Approved refunds reach the original payment method within 5 to 10 business days."
    },
    {
      id: "refunds-17",
      sourceId: "refunds",
      index: 17,
      location: "p. 5",
      text: "Chargebacks and disputes. If you open a chargeback while a refund request is pending, we pause the request until the dispute closes. Workspaces with an open dispute switch to read only."
    },
    {
      id: "soc2-2",
      sourceId: "soc2",
      index: 2,
      location: "p. 2",
      overview: true,
      text: "Glossary. Encryption at rest: data encrypted while it is stored. Encryption in transit: data encrypted while it moves between systems. Customer data: any data a customer uploads to or creates in Copperline."
    },
    {
      id: "soc2-30",
      sourceId: "soc2",
      index: 30,
      location: "p. 6",
      overview: true,
      text: "System description. Copperline runs in two cloud regions, one in the United States and one in the European Union. Customer data is stored in managed PostgreSQL databases and object storage, with nightly snapshots kept for 35 days."
    },
    {
      id: "soc2-31",
      sourceId: "soc2",
      index: 31,
      location: "p. 7",
      text: "Control CC6.1, encryption. Customer data is encrypted at rest with AES-256, using keys held in a managed key service and rotated every 365 days. Data in transit is protected with TLS 1.2 or higher."
    },
    {
      id: "soc2-32",
      sourceId: "soc2",
      index: 32,
      location: "p. 7",
      text: "Control CC6.6, access. Production access requires single sign-on with a hardware security key and is granted just in time for up to 4 hours. Every session is logged and reviewed weekly by the security team."
    },
    {
      id: "soc2-33",
      sourceId: "soc2",
      index: 33,
      location: "p. 8",
      text: "Control CC7.2, monitoring. Security events are centralized and page the on-call engineer within 5 minutes. The auditor tested 25 sampled alerts and found no exceptions."
    },
    {
      id: "soc2-34",
      sourceId: "soc2",
      index: 34,
      location: "p. 8",
      text: "Exceptions noted. For 2 of 25 sampled leavers, access was removed after the 24 hour target, at 36 and 41 hours. Management has since automated deprovisioning from the HR system."
    },
    {
      id: "onboarding-3",
      sourceId: "onboarding",
      index: 3,
      location: "Welcome",
      overview: true,
      text: "Welcome to Copperline. This guide covers your first weeks: what happens before day one, your first week, the accounts and laptop you get, and who to ask. We update it every quarter."
    },
    {
      id: "onboarding-4",
      sourceId: "onboarding",
      index: 4,
      location: "Before day one",
      text: "Before day one. IT ships your laptop to arrive two business days before your start date. Sign in with the temporary password from your welcome email, then register your hardware security key."
    },
    {
      id: "onboarding-5",
      sourceId: "onboarding",
      index: 5,
      location: "Week one",
      text: "Week one. Day 1 is setup and a team lunch. Day 2 is a product walkthrough with your onboarding buddy. On day 3 you shadow two customer calls, and by day 5 you ship your first small change."
    },
    {
      id: "onboarding-6",
      sourceId: "onboarding",
      index: 6,
      location: "Equipment",
      text: "Equipment. Engineers choose a 14 or 16 inch laptop; everyone else gets a 14 inch. Need a new laptop, a second monitor or a different keyboard? Ask in #it-help. Your manager approves anything over $500."
    },
    {
      id: "onboarding-7",
      sourceId: "onboarding",
      index: 7,
      location: "Accounts",
      text: "Accounts. Slack, Notion, Linear, Google Workspace and the HR portal are ready on day one. Production access is requested separately and needs the security training completed first."
    },
    {
      id: "onboarding-8",
      sourceId: "onboarding",
      index: 8,
      location: "First 30 days",
      text: "Your first 30 days. By day 30 you should know the product end to end, have met everyone on your team one to one, and agreed on 90 day goals with your manager."
    },
    {
      id: "questionnaire-13",
      sourceId: "questionnaire",
      index: 13,
      location: "Q13",
      text: "Q13. Do you hold a current SOC 2 Type II report? Yes. Our latest report covers April 1 to September 30, 2026 and is available under NDA from the trust center."
    },
    {
      id: "questionnaire-14",
      sourceId: "questionnaire",
      index: 14,
      location: "Q14",
      text: "Q14. Do you encrypt customer data at rest? Yes. All customer data, including backups, is encrypted at rest with AES-256. Keys are managed in a cloud key service and rotated yearly."
    },
    {
      id: "questionnaire-15",
      sourceId: "questionnaire",
      index: 15,
      location: "Q15",
      text: "Q15. Do you support customer managed encryption keys? Not today. Customer managed keys are planned for the Enterprise plan in the first half of 2027."
    },
    {
      id: "questionnaire-16",
      sourceId: "questionnaire",
      index: 16,
      location: "Q16",
      text: "Q16. Where is customer data stored? Customers choose a US or EU region when they create a workspace. Data stays in that region, and backups stay in the same jurisdiction."
    },
    {
      id: "help-40",
      sourceId: "help",
      index: 40,
      location: "/docs/billing/cancel",
      text: "Cancel your subscription. Workspace owners can cancel from Settings, Billing. Your plan stays active until the end of the billing period. For refunds after 30 days, see the refund policy."
    },
    {
      id: "help-41",
      sourceId: "help",
      index: 41,
      location: "/docs/billing/invoices",
      text: "Download invoices. Every invoice is listed under Settings, Billing, Invoices as a PDF. Add a VAT number or a billing address before the next renewal and it appears on future invoices."
    },
    {
      id: "help-88",
      sourceId: "help",
      index: 88,
      location: "/docs/api-keys",
      text: "Rotate an API key. Open Settings, API keys and choose Rotate next to the key. The old key keeps working for 24 hours, so you can deploy the new one without downtime."
    },
    {
      id: "help-89",
      sourceId: "help",
      index: 89,
      location: "/docs/api-keys",
      text: "Restrict an API key. Keys can be limited to read only scopes or to a list of IP ranges. A restricted key returns a 403 error with the reason when a request falls outside its scope."
    },
    {
      id: "help-120",
      sourceId: "help",
      index: 120,
      location: "/docs/security/encryption",
      text: "Encryption. Copperline encrypts customer data at rest and in transit. Enterprise workspaces can request the latest SOC 2 report and the security questionnaire from the trust center."
    }
  ], B = [
    { query: "Can I get a refund after 30 days?", sourceId: "refunds" },
    { query: "Is customer data encrypted at rest?", sourceId: "soc2" },
    { query: "Who approves a new laptop?", sourceId: "onboarding" },
    { query: "How do I rotate an API key?", sourceId: "help" }
  ], F = {
    "can i get a refund after 30 days": {
      "refunds-1": [0.86, 0.08],
      "help-40": [0.82, 0.47],
      "refunds-14": [0.8, 0.22],
      "refunds-13": [0.79, 0.96],
      "refunds-16": [0.76, 0.61],
      "refunds-15": [0.71, 0.12],
      "refunds-12": [0.68, 0.05],
      "refunds-17": [0.62, 0.04]
    },
    "is customer data encrypted at rest": {
      "soc2-2": [0.88, 0.11],
      "soc2-30": [0.82, 0.27],
      "help-120": [0.81, 0.52],
      "soc2-31": [0.8, 0.97],
      "questionnaire-16": [0.78, 0.31],
      "questionnaire-14": [0.77, 0.95],
      "soc2-32": [0.7, 0.09],
      "questionnaire-15": [0.69, 0.4]
    },
    "who approves a new laptop": {
      "onboarding-3": [0.84, 0.06],
      "onboarding-4": [0.83, 0.33],
      "onboarding-7": [0.76, 0.07],
      "onboarding-6": [0.75, 0.95],
      "onboarding-5": [0.71, 0.04],
      "onboarding-8": [0.66, 0.1]
    },
    "how do i rotate an api key": {
      "help-89": [0.87, 0.18],
      "soc2-31": [0.8, 0.06],
      "help-88": [0.79, 0.97],
      "soc2-32": [0.72, 0.05],
      "questionnaire-14": [0.7, 0.04]
    },
    "what is the hotel limit in new york": {
      "travel-2": [0.82, 0.07],
      "travel-4": [0.81, 0.96],
      "travel-5": [0.74, 0.11],
      "travel-6": [0.7, 0.05]
    },
    "who do i page for a sev2": {
      "runbook-1": [0.83, 0.09],
      "runbook-3": [0.8, 0.94],
      "runbook-2": [0.79, 0.38],
      "runbook-4": [0.68, 0.07]
    },
    "do existing customers keep their price": {
      "pricing-1": [0.84, 0.1],
      "pricing-3": [0.8, 0.95],
      "pricing-2": [0.77, 0.3],
      "pricing-4": [0.66, 0.06]
    },
    "what shipped in october": {
      "changelog-1": [0.85, 0.12],
      "changelog-3": [0.8, 0.93],
      "changelog-2": [0.78, 0.44],
      "changelog-4": [0.7, 0.2]
    }
  }, $ = {
    pdf: {
      source: {
        id: "travel",
        name: "Travel and expense policy.pdf",
        kind: "pdf",
        pages: 9,
        chunks: 30,
        tokens: 13420,
        note: "Uploaded just now"
      },
      suggestion: "What is the hotel limit in New York?",
      chunks: [
        {
          id: "travel-2",
          sourceId: "travel",
          index: 2,
          location: "p. 1",
          overview: true,
          text: "Contents. 1 Booking travel. 2 Hotel limits by city. 3 Meals and per diem. 4 Submitting expenses. Travel and expense policy, effective November 1, 2026."
        },
        {
          id: "travel-3",
          sourceId: "travel",
          index: 3,
          location: "p. 2",
          text: "Booking travel. Book flights and hotels through the travel portal at least 14 days ahead. Economy class for flights under 6 hours; premium economy above that."
        },
        {
          id: "travel-4",
          sourceId: "travel",
          index: 4,
          location: "p. 3",
          text: "Hotel limits. Nightly limits are $250 in most US cities and $325 in New York, San Francisco and London. Anything above the limit needs your manager's approval before you book."
        },
        {
          id: "travel-5",
          sourceId: "travel",
          index: 5,
          location: "p. 4",
          text: "Meals. The daily meal allowance is $75 when you travel overnight. Alcohol is not reimbursed except at approved client dinners."
        },
        {
          id: "travel-6",
          sourceId: "travel",
          index: 6,
          location: "p. 5",
          text: "Submitting expenses. Submit receipts in the expense tool within 30 days. Reimbursements are paid with the next payroll run."
        }
      ]
    },
    notion: {
      source: {
        id: "runbook",
        name: "Incident response runbook",
        kind: "notion",
        pages: 15,
        chunks: 50,
        tokens: 21960,
        note: "Synced just now"
      },
      suggestion: "Who do I page for a SEV2?",
      chunks: [
        {
          id: "runbook-1",
          sourceId: "runbook",
          index: 1,
          location: "Overview",
          overview: true,
          text: "Incident response runbook. Use this page when something is broken for customers: how to grade severity, who to page, and how to communicate until the incident is resolved."
        },
        {
          id: "runbook-2",
          sourceId: "runbook",
          index: 2,
          location: "Severity",
          text: "Severity levels. SEV1: customer data at risk or a full outage. SEV2: a core feature down for many customers. SEV3: degraded performance, or a workaround exists."
        },
        {
          id: "runbook-3",
          sourceId: "runbook",
          index: 3,
          location: "Paging",
          text: "Paging. For SEV1 and SEV2, page the on-call engineer through the paging tool and open a channel named #inc-date-topic. Post the first customer update within 30 minutes."
        },
        {
          id: "runbook-4",
          sourceId: "runbook",
          index: 4,
          location: "Review",
          text: "After the incident. Write the review within 5 business days. Reviews are blameless and list the follow-up tasks with an owner and a due date."
        }
      ]
    },
    drive: {
      source: {
        id: "pricing",
        name: "Q4 pricing FAQ",
        kind: "drive",
        pages: 6,
        chunks: 18,
        tokens: 7840,
        note: "Synced just now"
      },
      suggestion: "Do existing customers keep their price?",
      chunks: [
        {
          id: "pricing-1",
          sourceId: "pricing",
          index: 1,
          location: "p. 1",
          overview: true,
          text: "Q4 pricing FAQ. Answers for the sales and support teams about the new plans announced on October 15, 2026. Share the public version with customers, not this document."
        },
        {
          id: "pricing-2",
          sourceId: "pricing",
          index: 2,
          location: "p. 2",
          text: "What changes? The Team plan moves from $12 to $14 per seat per month. Business stays at $24. Usage credits now roll over for 12 months instead of 6."
        },
        {
          id: "pricing-3",
          sourceId: "pricing",
          index: 3,
          location: "p. 2",
          text: "Do existing customers keep their price? Yes. Annual plans keep their current price until renewal. Monthly plans move to the new price on January 1, 2027, with 60 days notice."
        },
        {
          id: "pricing-4",
          sourceId: "pricing",
          index: 4,
          location: "p. 3",
          text: "Discounts. Nonprofits and schools keep 50% off. Startup credits stay available through the partner program."
        }
      ]
    },
    web: {
      source: {
        id: "changelog",
        name: "copperline.dev/changelog",
        kind: "web",
        pages: 40,
        chunks: 87,
        tokens: 38700,
        note: "Crawled just now"
      },
      suggestion: "What shipped in October?",
      chunks: [
        {
          id: "changelog-1",
          sourceId: "changelog",
          index: 1,
          location: "/changelog",
          overview: true,
          text: "Changelog. Everything we shipped, newest first. Subscribe to the RSS feed or the monthly email to hear about releases."
        },
        {
          id: "changelog-2",
          sourceId: "changelog",
          index: 2,
          location: "/changelog/2026-10",
          text: "October 2026. Workspace exports now include comments and attachments, and large exports run in the background with an email when they are ready."
        },
        {
          id: "changelog-3",
          sourceId: "changelog",
          index: 3,
          location: "/changelog/2026-10",
          text: "Also in October. Restricted API keys, SAML single sign-on for the Business plan, and a new audit log that keeps 400 days of history."
        },
        {
          id: "changelog-4",
          sourceId: "changelog",
          index: 4,
          location: "/changelog/2026-09",
          text: "September 2026. Faster search across projects, keyboard shortcuts for every view, and a redesigned billing page."
        }
      ]
    }
  };
  function z(e2) {
    return (0, a.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ...e2,
      children: (0, a.jsx)("path", {
        d: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
      })
    });
  }
  function D(e2) {
    return (0, a.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      ...e2,
      children: (0, a.jsx)("path", {
        d: "M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z"
      })
    });
  }
  let W = {
    pdf: "PDF",
    notion: "Notion page",
    drive: "Google Drive doc",
    web: "Website crawl",
    file: "File"
  };
  function H({ kind: e2, className: t2 }) {
    return "notion" === e2 ? (0, a.jsx)(z, { className: t2 }) : "drive" === e2 ? (0, a.jsx)(D, { className: t2 }) : "web" === e2 ? (0, a.jsx)(g.A, {
      className: t2,
      strokeWidth: 1.75,
      "aria-hidden": "true"
    }) : (0, a.jsx)(m.A, {
      className: t2,
      strokeWidth: 1.75,
      "aria-hidden": "true"
    });
  }
  let Y = new Set(
    "a an the is are was were be been am i me my we our you your it its of to in on at by for from with and or but if then so do does did can could would should will shall may might must what which who whom whose when where why how this that these those there here any some all about into over under after before than too very just not no yes get got has have had".split(
      " "
    )
  );
  function U(e2) {
    let t2 = e2.toLowerCase();
    for (let e3 of [
      "ations",
      "ation",
      "ions",
      "ion",
      "ings",
      "ing",
      "able",
      "edly",
      "ed",
      "ies",
      "es",
      "s",
      "e",
      "y"
    ])
      if (t2.length - e3.length >= 3 && t2.endsWith(e3)) {
        t2 = t2.slice(0, -e3.length);
        break;
      }
    return t2;
  }
  function V(e2) {
    return [
      ...new Set(
        (e2.toLowerCase().match(/[a-z0-9$]+/g) ?? []).filter((e3) => !Y.has(e3) && (e3.length > 1 || /\d/.test(e3))).map(U)
      )
    ];
  }
  function G(e2) {
    let t2 = 2166136261;
    for (let n2 = 0; n2 < e2.length; n2++)
      t2 = Math.imul(t2 ^ e2.charCodeAt(n2), 16777619);
    return (t2 >>> 0) % 1e3 / 1e3;
  }
  let Q = (e2) => Math.round(100 * e2) / 100, K = (e2, t2 = 0, n2 = 1) => Math.min(n2, Math.max(t2, e2));
  var X = n(64622), Z = n.n(X);
  let { spring: J, duration: ee, ease: et } = j.T, en = [...et.standard], ea = (...e2) => e2.filter(Boolean).join(" "), es = { type: "spring", visualDuration: 0.32, bounce: 0 }, ei = { duration: ee.fast, ease: en }, er = { duration: 0.1, ease: en }, eo = ["parse", "chunk", "embed", "index"], el = { parse: "Parse", chunk: "Chunk", embed: "Embed", index: "Index" }, ed = /\.(pdf|docx?|md|markdown|txt|html?)$/i, ec = (e2, t2) => `${e2.toLocaleString("en-US")} ${t2}${1 === e2 ? "" : "s"}`, eu = (e2, t2) => Math.max(1, Math.ceil(e2 / Math.max(32, t2.chunkSize - t2.overlap)));
  function eh({ value: e2, format: t2 = String, reduced: n2 }) {
    let d2 = (0, i.d)(e2), c2 = (0, r.G)(d2, (e3) => t2(e3));
    return (0, s.useEffect)(() => {
      if (n2) return void d2.jump(e2);
      let t3 = (0, o.i)(d2, e2, { duration: 0.5, ease: en });
      return () => t3.stop();
    }, [e2, n2, d2]), (0, a.jsx)(l.PY1.span, { className: Z().tabular, children: c2 });
  }
  function ep({ id: e2, children: t2, className: n2, reduced: s2 }) {
    return (0, a.jsx)("span", {
      className: ea(Z().swap, n2),
      children: (0, a.jsx)(d.N, {
        initial: false,
        mode: "popLayout",
        children: (0, a.jsx)(
          l.PY1.span,
          {
            className: Z().swapItem,
            initial: { opacity: 0, y: 2 * !s2 },
            animate: { opacity: 1, y: 0, transition: s2 ? { duration: 0 } : ei },
            exit: { opacity: 0, transition: s2 ? { duration: 0 } : er },
            children: t2
          },
          e2
        )
      })
    });
  }
  function em({ open: e2, reduced: t2, children: n2, className: s2 }) {
    return (0, a.jsx)(d.N, {
      initial: false,
      children: e2 && (0, a.jsx)(l.PY1.div, {
        className: ea(Z().collapse, s2),
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        transition: t2 ? { duration: 0 } : { height: J.smooth, opacity: { duration: ee.fast, ease: en } },
        children: n2
      })
    });
  }
  function eg({ source: e2 }) {
    let t2, n2 = "failed" === e2.status ? eo.indexOf(e2.failedStep ?? "parse") : -1, s2 = "indexed" === e2.status ? 4 : "queued" === e2.status ? 0 : "failed" === e2.status ? n2 : eo.indexOf(e2.status), i2 = Math.min(1, Math.max(0, e2.progress ?? 0)), r2 = "indexed" === e2.status ? 100 : Math.round(
      (s2 + ((t2 = e2.status, eo.includes(t2) || "failed" === e2.status) ? i2 : 0)) / 4 * 100
    ), o2 = "indexed" === e2.status ? "Indexed" : "queued" === e2.status ? "Queued" : "failed" === e2.status ? `Failed at ${el[e2.failedStep ?? "parse"].toLowerCase()}` : `${el[e2.status]}, step ${s2 + 1} of 4`;
    return (0, a.jsx)("span", {
      className: Z().pipeline,
      role: "progressbar",
      "aria-label": `${e2.name} ingestion`,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": r2,
      "aria-valuetext": o2,
      children: eo.map((t3, n3) => {
        let r3 = n3 < s2 ? "done" : n3 === s2 ? "failed" === e2.status ? "failed" : "queued" === e2.status ? "pending" : "active" : "pending", o3 = "done" === r3 ? 1 : "active" === r3 || "failed" === r3 ? Math.max(i2, 0.12 * ("failed" === r3)) : 0;
        return (0, a.jsx)(
          "span",
          {
            className: Z().segment,
            "data-state": r3,
            "data-complete": "indexed" === e2.status || void 0,
            children: (0, a.jsx)("span", {
              className: Z().segmentFill,
              style: { transform: `scaleX(${o3})` }
            })
          },
          t3
        );
      })
    });
  }
  function ex({ source: e2 }) {
    let t2 = Math.min(1, e2.progress ?? 0);
    switch (e2.status) {
      case "queued":
        return (0, a.jsxs)(a.Fragment, {
          children: ["Queued", (0, a.jsx)(eb, {}), ec(e2.pages, "page")]
        });
      case "parse":
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(A.n, { children: "Parsing" }),
            (0, a.jsx)(eb, {}),
            (0, a.jsx)("span", {
              className: Z().count,
              children: Math.floor(e2.pages * t2)
            }),
            "\xA0of ",
            ec(e2.pages, "page")
          ]
        });
      case "chunk":
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(A.n, { children: "Chunking" }),
            (0, a.jsx)(eb, {}),
            (0, a.jsx)("span", {
              className: Z().count,
              children: Math.floor(e2.chunks * t2)
            }),
            "\xA0chunks"
          ]
        });
      case "embed":
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(A.n, { children: "Embedding" }),
            (0, a.jsx)(eb, {}),
            (0, a.jsx)("span", {
              className: Z().count,
              children: Math.floor(e2.chunks * t2)
            }),
            "\xA0of ",
            ec(e2.chunks, "chunk")
          ]
        });
      case "index":
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(A.n, { children: "Writing to the index" }),
            (0, a.jsx)(eb, {}),
            ec(e2.chunks, "chunk")
          ]
        });
      case "failed":
        return (0, a.jsxs)("span", {
          className: Z().failText,
          children: [
            (0, a.jsx)(u.A, { "aria-hidden": "true" }),
            e2.error ?? "Ingestion failed"
          ]
        });
      default:
        let n2;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            ec(e2.pages, "page"),
            (0, a.jsx)(eb, {}),
            ec(e2.chunks, "chunk"),
            (0, a.jsx)(eb, {}),
            (n2 = e2.tokens) >= 1e3 ? `${(n2 / 1e3).toFixed(n2 >= 1e5 ? 0 : 1)}K` : String(Math.round(n2)),
            " tokens",
            e2.note && (0, a.jsxs)("span", {
              className: Z().note,
              children: [(0, a.jsx)(eb, {}), e2.note]
            })
          ]
        });
    }
  }
  let eb = () => (0, a.jsx)("span", { className: Z().dot, "aria-hidden": "true" });
  function ef({ text: e2, terms: t2, open: n2, reduced: r2 }) {
    let d2 = (0, s.useRef)(null), [c2, u2] = (0, s.useState)(null);
    (0, s.useLayoutEffect)(() => {
      let e3 = d2.current;
      if (!e3) return;
      let t3 = () => {
        let t4 = parseFloat(getComputedStyle(e3).lineHeight) || 21, n4 = Math.ceil(e3.getBoundingClientRect().height);
        u2(
          (e4) => e4 && e4.full === n4 ? e4 : { full: n4, clamp: Math.min(n4, Math.round(2 * t4)) }
        );
      };
      t3();
      let n3 = new ResizeObserver(t3);
      return n3.observe(e3), () => n3.disconnect();
    }, []);
    let h2 = !c2 || c2.full > c2.clamp + 1, p2 = (0, s.useMemo)(
      () => (function(e3, t3) {
        if (!t3.length) return [{ text: e3, hit: false }];
        let n3 = new Set(t3), a2 = [], s2 = 0;
        for (let t4 of e3.matchAll(/[A-Za-z0-9$]+/g)) {
          let i2 = t4[0];
          if (Y.has(i2.toLowerCase()) || !n3.has(U(i2))) continue;
          let r3 = t4.index ?? 0, o2 = a2[a2.length - 1], l2 = e3.slice(s2, r3);
          o2?.hit && /^\s+$/.test(l2) ? o2.text += l2 + i2 : (l2 && a2.push({ text: l2, hit: false }), a2.push({ text: i2, hit: true })), s2 = r3 + i2.length;
        }
        return s2 < e3.length && a2.push({ text: e3.slice(s2), hit: false }), a2;
      })(e2, t2),
      [e2, t2]
    ), m2 = (0, i.d)("auto"), g2 = (0, s.useRef)(null);
    return (0, s.useLayoutEffect)(() => {
      if (!c2) return;
      let e3 = n2 ? c2.full : c2.clamp, t3 = null !== g2.current && g2.current !== n2;
      if (g2.current = n2, !t3 || r2) return void m2.jump(e3);
      let a2 = (0, o.i)(m2, e3, J.smooth);
      return () => a2.stop();
    }, [n2, c2, r2, m2]), (0, a.jsx)(l.PY1.div, {
      className: Z().excerptClip,
      "data-clipped": !n2 && h2 || void 0,
      style: { height: m2 },
      children: (0, a.jsx)("p", {
        ref: d2,
        className: Z().excerpt,
        children: p2.map(
          (e3, t3) => e3.hit ? (0, a.jsx)("mark", { className: Z().hit, children: e3.text }, t3) : (0, a.jsx)("span", { children: e3.text }, t3)
        )
      })
    });
  }
  function e_({ value: e2, kind: t2, reduced: n2 }) {
    return (0, a.jsxs)("span", {
      className: Z().score,
      "data-kind": t2,
      children: [
        (0, a.jsx)("span", {
          className: Z().scoreTrack,
          "aria-hidden": "true",
          children: (0, a.jsx)(l.PY1.span, {
            className: Z().scoreFill,
            initial: false,
            animate: { scaleX: Math.max(0.02, Math.min(1, e2)) },
            transition: n2 ? { duration: 0 } : J.smooth
          })
        }),
        (0, a.jsx)("span", {
          className: Z().scoreValue,
          children: (0, a.jsx)(eh, {
            value: e2,
            format: (e3) => e3.toFixed(2),
            reduced: n2
          })
        })
      ]
    });
  }
  function ey({
    result: e2,
    source: t2,
    open: n2,
    onToggle: i2,
    terms: r2,
    reranked: o2,
    kind: c2,
    settings: u2,
    reduced: m2,
    enterDelay: g2
  }) {
    let x2 = (0, s.useId)(), { item: b2, rank: f2, vectorRank: _2 } = e2, y2 = o2 ? _2 - f2 : 0, w2 = t2?.name ?? "Removed source";
    return (0, a.jsxs)(l.PY1.li, {
      layout: "position",
      className: Z().result,
      "data-open": n2 || void 0,
      style: { zIndex: y2 > 0 ? 2 : 1 },
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: m2 ? { duration: 0 } : { ...ei, delay: g2 }
      },
      exit: { opacity: 0, transition: m2 ? { duration: 0 } : er },
      transition: { layout: m2 ? { duration: 0 } : es },
      children: [
        (0, a.jsxs)("button", {
          type: "button",
          className: Z().resultHead,
          "aria-expanded": n2,
          "aria-controls": x2,
          onClick: i2,
          children: [
            (0, a.jsx)(ep, {
              id: String(f2),
              className: Z().rank,
              reduced: m2,
              children: f2
            }),
            (0, a.jsxs)("span", {
              className: Z().where,
              children: [
                (0, a.jsx)(H, {
                  kind: t2?.kind ?? "file",
                  className: Z().resultMark
                }),
                (0, a.jsx)("span", { className: Z().whereName, children: w2 }),
                b2.location && (0, a.jsx)("span", {
                  className: Z().whereLoc,
                  children: b2.location
                })
              ]
            }),
            (0, a.jsx)("span", {
              className: Z().deltaSlot,
              children: (0, a.jsx)(d.N, {
                initial: false,
                children: 0 !== y2 && (0, a.jsxs)(
                  l.PY1.span,
                  {
                    className: Z().delta,
                    "data-dir": y2 > 0 ? "up" : "down",
                    initial: { opacity: 0, y: m2 ? 0 : y2 > 0 ? 3 : -3 },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: m2 ? { duration: 0 } : { ...ei, delay: 0.12 }
                    },
                    exit: { opacity: 0, transition: er },
                    children: [
                      y2 > 0 ? (0, a.jsx)(h.A, { "aria-hidden": "true" }) : (0, a.jsx)(p.A, { "aria-hidden": "true" }),
                      (0, a.jsx)("span", {
                        className: Z().tabular,
                        children: Math.abs(y2)
                      }),
                      (0, a.jsxs)("span", {
                        className: Z().srOnly,
                        children: [
                          y2 > 0 ? `Up ${y2}` : `Down ${-y2}`,
                          " after reranking, was ",
                          _2
                        ]
                      })
                    ]
                  },
                  y2 > 0 ? "up" : "down"
                )
              })
            }),
            (0, a.jsx)(e_, { value: e2.score, kind: c2, reduced: m2 }),
            (0, a.jsxs)("span", {
              className: Z().srOnly,
              children: [
                "relevance" === c2 ? "Reranker score" : "Similarity",
                " ",
                e2.score.toFixed(2)
              ]
            })
          ]
        }),
        (0, a.jsxs)("div", {
          id: x2,
          className: Z().resultBody,
          onClick: (e3) => {
            e3.target.closest("button, a") || window.getSelection()?.toString() || i2();
          },
          children: [
            (0, a.jsx)(em, {
              open: n2 && !!b2.before,
              reduced: m2,
              children: b2.before && (0, a.jsxs)("div", {
                className: Z().neighbour,
                "data-pos": "before",
                children: [
                  (0, a.jsxs)("span", {
                    className: Z().ctxLabel,
                    children: [
                      "Previous chunk",
                      b2.before.location ? `, ${b2.before.location}` : ""
                    ]
                  }),
                  (0, a.jsx)("p", {
                    className: Z().neighbourText,
                    children: b2.before.text
                  })
                ]
              })
            }),
            (0, a.jsx)("div", {
              className: Z().focus,
              children: (0, a.jsx)(ef, {
                text: b2.text,
                terms: r2,
                open: n2,
                reduced: m2
              })
            }),
            (0, a.jsxs)(em, {
              open: n2,
              reduced: m2,
              children: [
                b2.after && (0, a.jsxs)("div", {
                  className: Z().neighbour,
                  "data-pos": "after",
                  children: [
                    (0, a.jsxs)("span", {
                      className: Z().ctxLabel,
                      children: [
                        "Next chunk",
                        b2.after.location ? `, ${b2.after.location}` : ""
                      ]
                    }),
                    (0, a.jsx)("p", {
                      className: Z().neighbourText,
                      children: b2.after.text
                    })
                  ]
                }),
                (0, a.jsxs)("div", {
                  className: Z().ctxFoot,
                  children: [
                    (0, a.jsxs)("span", {
                      className: Z().ctxMeta,
                      children: [
                        (0, a.jsxs)("span", {
                          children: [
                            "Similarity ",
                            (0, a.jsx)("span", {
                              className: Z().tabular,
                              children: b2.similarity.toFixed(2)
                            })
                          ]
                        }),
                        void 0 !== b2.relevance && (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(eb, {}),
                            (0, a.jsxs)("span", {
                              children: [
                                "Reranker ",
                                (0, a.jsx)("span", {
                                  className: Z().tabular,
                                  children: b2.relevance.toFixed(2)
                                })
                              ]
                            })
                          ]
                        }),
                        (0, a.jsx)(eb, {}),
                        (0, a.jsxs)("span", {
                          children: [u2.overlap, " token overlap"]
                        })
                      ]
                    }),
                    (0, a.jsx)(S.CopyButton, {
                      value: b2.text,
                      label: "Copy chunk",
                      variant: "plain"
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function ew({
    title: e2 = "Support knowledge base",
    sources: t2,
    chunks: n2,
    settings: i2,
    defaultSettings: r2,
    onSettingsChange: o2,
    embeddingModels: h2 = E,
    suggestions: p2,
    onQuery: j2,
    onAddSource: S2,
    onRetrySource: Y2,
    onRemoveSource: X2,
    onReindex: et2,
    defaultView: es2 = "sources",
    className: ef2
  }) {
    let e_2 = (0, c.I)() ?? false, ek2 = void 0 === t2, ev = (0, s.useRef)(null), ej = (0, s.useRef)(null), eN = (0, s.useRef)(0), eS = (0, s.useRef)([]);
    (0, s.useEffect)(
      () => () => eS.current.forEach((e10) => window.clearTimeout(e10)),
      []
    );
    let [eT, eI] = (0, s.useState)(() => ({ ...L, ...r2 })), eC = i2 ?? eT, eM = (0, s.useRef)(eC);
    eM.current = eC;
    let [eR, eq] = (0, s.useState)(() => ({
      chunkSize: eC.chunkSize,
      overlap: eC.overlap,
      embeddingModel: eC.embeddingModel
    })), eA = eR.chunkSize !== eC.chunkSize || eR.overlap !== eC.overlap || eR.embeddingModel !== eC.embeddingModel, eL = (e10) => {
      let t3 = { ...eM.current, ...e10 };
      return t3.overlap > t3.chunkSize / 2 && (t3.overlap = 16 * Math.floor(t3.chunkSize / 2 / 16)), eM.current = t3, i2 || eI(t3), o2?.(t3), t3;
    }, [eE, eP] = (0, s.useState)(() => P), [eO, eB] = (0, s.useState)(() => O), [eF, e$] = (0, s.useState)({}), ez = t2 ?? eE, eD = (0, s.useMemo)(() => n2 ?? (ek2 ? eO : []), [n2, ek2, eO]), eW = ek2 && eE.some((e10) => {
      let t3;
      return "queued" === e10.status || (t3 = e10.status, eo.includes(t3));
    });
    (0, s.useEffect)(() => {
      if (!eW) return;
      let e10 = 0, t3 = performance.now(), n3 = (a2) => {
        let s2 = Math.min(64, a2 - t3);
        t3 = a2, eP((e11) => {
          let t4;
          return t4 = e11.filter((e12) => {
            let t5;
            return t5 = e12.status, eo.includes(t5);
          }).length, e11.map((e12) => {
            let n4;
            if ("queued" === e12.status)
              return t4 >= 2 ? e12 : (t4++, { ...e12, status: "parse", progress: 0 });
            if (n4 = e12.status, !eo.includes(n4)) return e12;
            let a3 = e12.status, i3 = (e12.progress ?? 0) + s2 / (function(e13, t5) {
              switch (t5) {
                case "parse":
                  return 520 + 18 * e13.pages;
                case "chunk":
                  return 420 + 2.5 * e13.chunks;
                case "embed":
                  return 900 + 12 * e13.chunks;
                case "index":
                  return 420;
              }
            })(e12, a3);
            if (e12.failAt?.step === a3 && i3 >= e12.failAt.at)
              return {
                ...e12,
                status: "failed",
                failedStep: a3,
                progress: e12.failAt.at,
                error: e12.failAt.error,
                failAt: void 0
              };
            if (i3 < 1) return { ...e12, progress: i3 };
            let r3 = eo[eo.indexOf(a3) + 1];
            return r3 ? { ...e12, status: r3, progress: 0 } : { ...e12, status: "indexed", progress: 1 };
          });
        }), e10 = requestAnimationFrame(n3);
      };
      return e10 = requestAnimationFrame(n3), () => cancelAnimationFrame(e10);
    }, [eW]);
    let [eH, eY] = (0, s.useState)(
      () => new Set(ez.filter((e10) => "indexed" === e10.status).map((e10) => e10.id))
    ), [eU, eV] = (0, s.useState)("");
    (0, s.useEffect)(() => {
      let e10 = ez.filter((e11) => "indexed" === e11.status && !eH.has(e11.id)), t3 = [...eH].filter((e11) => !ez.some((t4) => t4.id === e11));
      (e10.length || t3.length) && (eY((n3) => {
        let a2 = new Set(n3);
        return e10.forEach((e11) => a2.add(e11.id)), t3.forEach((e11) => a2.delete(e11)), a2;
      }), e10.length && eV(`${e10.map((e11) => e11.name).join(", ")} indexed and searchable.`));
    }, [ez, eH]);
    let eG = (0, s.useRef)(/* @__PURE__ */ new Map());
    (0, s.useEffect)(() => {
      for (let e10 of ez) {
        let t3 = eG.current.get(e10.id);
        t3 && "failed" !== t3 && "failed" === e10.status && eV(`${e10.name} failed: ${e10.error ?? "ingestion failed"}.`), eG.current.set(e10.id, e10.status);
      }
    }, [ez]);
    let eQ = ez.filter((e10) => eH.has(e10.id)), eK = eQ.reduce((e10, t3) => e10 + t3.chunks, 0), eX = ez.filter((e10) => {
      let t3;
      return "queued" === e10.status || (t3 = e10.status, eo.includes(t3));
    }).length, eZ = ez.filter((e10) => "failed" === e10.status).length, eJ = (0, s.useMemo)(() => eD.filter((e10) => eH.has(e10.sourceId)), [eD, eH]), e0 = 1e3 * eH.size + eJ.length, e1 = (0, s.useMemo)(() => new Map(ez.map((e10) => [e10.id, e10])), [ez]), e22 = (h2.find((e10) => e10.value === eC.embeddingModel)?.label ?? eC.embeddingModel).split(",")[0], [e3, e4] = (0, s.useState)(es2), [e5, e6] = (0, s.useState)(false);
    function e7(e10) {
      if (S2?.({ kind: e10 }), e4("sources"), !ek2) return;
      let t3 = $[e10], n3 = eM.current;
      eP((e11) => [
        {
          ...t3.source,
          chunks: eu(t3.source.tokens, n3),
          status: "queued",
          progress: 0
        },
        ...e11
      ]), eB((e11) => [...e11, ...t3.chunks]), e$((t4) => ({ ...t4, [e10]: true })), eV(`Simulated: ${t3.source.name} added. Ingestion started.`);
    }
    function e8(e10) {
      if (!e10.length || (e4("sources"), e10.forEach((e11) => S2?.({ kind: "file", file: e11 })), !ek2))
        return;
      let t3 = eM.current, n3 = e10.map((e11, n4) => {
        let a2 = Math.max(1, Math.round(e11.size / 48e3)), s2 = 1650 * a2, i3 = ed.test(e11.name);
        return {
          id: `file-${Date.now()}-${n4}`,
          name: e11.name,
          kind: /\.pdf$/i.test(e11.name) ? "pdf" : "file",
          pages: a2,
          tokens: s2,
          chunks: eu(s2, t3),
          status: "queued",
          progress: 0,
          note: "Uploaded just now",
          retryable: i3,
          failAt: i3 ? void 0 : {
            step: "parse",
            at: 0.35,
            error: "Unsupported file type. Use PDF, DOCX, Markdown or TXT"
          }
        };
      });
      eP((e11) => [...n3, ...e11]), eV(
        `Simulated: ${ec(e10.length, "file")} added. Files stay in this browser.`
      );
    }
    function e9() {
      let e10 = eM.current;
      eq({
        chunkSize: e10.chunkSize,
        overlap: e10.overlap,
        embeddingModel: e10.embeddingModel
      }), et2?.(e10), ek2 && (eP(
        (t3) => t3.map(
          (t4) => "indexed" === t4.status ? {
            ...t4,
            status: "queued",
            progress: 0,
            chunks: eu(t4.tokens, e10)
          } : t4
        )
      ), e4("sources"), eV(
        "Simulated: re-indexing with the new settings. Search keeps using the current index until each source finishes."
      ));
    }
    let [te, tt] = (0, s.useState)(""), [tn, ta] = (0, s.useState)(null), [ts, ti] = (0, s.useState)(null), [tr, to] = (0, s.useState)(false);
    async function tl(e10, t3 = eM.current) {
      let n3 = e10.trim();
      if (!n3) return;
      let a2 = ++eN.current;
      tt(n3), tn?.query !== n3 && ti(null), ta((e11) => ({
        query: n3,
        status: "searching",
        candidates: e11?.query === n3 ? e11.candidates : [],
        version: e0
      }));
      let s2 = performance.now();
      try {
        let e11;
        if (j2 ? e11 = await j2(n3, t3) : (await new Promise(
          (e12) => window.setTimeout(e12, 360 + 280 * Math.random())
        ), e11 = (function(e12, t4, n4, a3) {
          let s3 = V(e12), i4 = a3[e12.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim().replace(/^what s /, "what is ")], r4 = [];
          for (let a4 of t4) {
            let o3, l2, d2 = new Set(
              (a4.text.toLowerCase().match(/[a-z0-9$]+/g) ?? []).map(U)
            ), c2 = s3.filter((e13) => d2.has(e13)).length, u2 = s3.length ? c2 / s3.length : 0;
            if (i4) {
              let e13 = i4[a4.id];
              if (!e13) continue;
              [o3, l2] = e13;
            } else {
              if (!c2) continue;
              let t5 = 0.05 * G(a4.id + e12);
              o3 = K(
                0.46 + 0.34 * u2 + 0.07 * !!a4.overview + t5,
                0,
                0.93
              ), l2 = 1 / (1 + Math.exp(
                -((u2 - 0.5) * 7 + (a4.overview ? -2.2 : 0.6) + (G(e12 + a4.id) - 0.5))
              ));
            }
            n4.hybrid && (o3 = K(0.85 * o3 + 0.15 * u2 + 0.02, 0, 0.99)), r4.push({
              id: a4.id,
              sourceId: a4.sourceId,
              text: a4.text,
              location: a4.location,
              index: a4.index,
              similarity: Q(o3),
              relevance: Q(K(l2, 0.01, 0.99)),
              ...(function(e13, t5) {
                let n5 = t5.filter((t6) => t6.sourceId === e13.sourceId), a5 = n5.find((t6) => t6.index === e13.index - 1), s4 = n5.find((t6) => t6.index === e13.index + 1), i5 = (e14) => e14 ? {
                  text: e14.text,
                  location: e14.location,
                  index: e14.index
                } : void 0;
                return { before: i5(a5), after: i5(s4) };
              })(a4, t4)
            });
          }
          return r4.sort((e13, t5) => t5.similarity - e13.similarity);
        })(n3, eJ, t3, F)), a2 !== eN.current)
          return;
        let i3 = Math.round(performance.now() - s2);
        ta({ query: n3, status: "done", candidates: e11, ms: i3, version: e0 });
        let r3 = Math.min(t3.topK, e11.length);
        eV(
          r3 ? `${ec(r3, "chunk")} retrieved in ${i3} milliseconds.` : "No chunks matched."
        );
      } catch (e11) {
        if (a2 !== eN.current) return;
        ta((t4) => ({
          query: n3,
          status: "error",
          candidates: t4?.candidates ?? [],
          error: e11 instanceof Error ? e11.message : "The retriever did not respond",
          version: e0
        })), eV("Search failed.");
      }
    }
    function td() {
      eN.current++, tt(""), ta(null), ti(null), ej.current?.focus();
    }
    function tc(e10) {
      var t3;
      (eL({ rerank: e10 }), e10 && tn && "done" === tn.status && tn.candidates.length) ? (to(true), t3 = e_2 ? 120 : 420, eS.current.push(
        window.setTimeout(() => {
          to(false), eM.current.rerank && eV("Results reordered by the reranker.");
        }, t3)
      )) : to(false);
    }
    let tu = (0, s.useMemo)(() => tn?.candidates ?? [], [tn]), th = (0, s.useMemo)(
      () => [...tu].sort((e10, t3) => t3.similarity - e10.similarity),
      [tu]
    ), tp = eC.rerank && !tr && tu.some((e10) => void 0 !== e10.relevance), tm = tp ? [...th].sort((e10, t3) => (t3.relevance ?? 0) - (e10.relevance ?? 0)) : th, tg = new Map(th.map((e10, t3) => [e10.id, t3 + 1])), tx = tm.slice(0, eC.topK).map((e10, t3) => ({
      item: e10,
      rank: t3 + 1,
      vectorRank: tg.get(e10.id) ?? t3 + 1,
      score: tp ? e10.relevance ?? e10.similarity : e10.similarity
    })), tb = (0, s.useMemo)(() => V(tn?.query ?? ""), [tn?.query]), tf = tn?.status === "done" && tn.version !== e0, t_ = p2 ? p2.map((e10) => ({ query: e10, kind: "file" })) : [
      ...B,
      ...Object.values($).map((e10) => ({
        query: e10.suggestion,
        sourceId: e10.source.id
      }))
    ].filter((e10) => eH.has(e10.sourceId)).map((e10) => ({
      query: e10.query,
      kind: e1.get(e10.sourceId)?.kind ?? "file"
    })), ty = (0, s.useRef)(0), tw = (e10) => Array.from(e10.dataTransfer?.types ?? []).includes("Files"), tk = (0, s.useId)(), tv = tn ? "searching" === tn.status ? "searching" : "error" === tn.status ? "error" : tr ? "reranking" : tf ? "stale" : "done" : "idle", tj = ez.filter((e10) => "indexed" === e10.status).length, tN = [
      {
        label: eF.pdf ? "PDF added" : "PDF document",
        icon: (0, a.jsx)(m.A, { size: 16, strokeWidth: 1.75 }),
        onSelect: () => e7("pdf"),
        disabled: ek2 && eF.pdf
      },
      {
        label: eF.notion ? "Notion page added" : "Notion page",
        icon: (0, a.jsx)(z, { width: 16, height: 16 }),
        onSelect: () => e7("notion"),
        disabled: ek2 && eF.notion
      },
      {
        label: eF.drive ? "Drive doc added" : "Google Drive doc",
        icon: (0, a.jsx)(D, { width: 16, height: 16 }),
        onSelect: () => e7("drive"),
        disabled: ek2 && eF.drive
      },
      {
        label: eF.web ? "Website added" : "Website crawl",
        icon: (0, a.jsx)(g.A, { size: 16, strokeWidth: 1.75 }),
        onSelect: () => e7("web"),
        disabled: ek2 && eF.web
      },
      {
        label: "Upload from computer",
        icon: (0, a.jsx)(x.A, { size: 16, strokeWidth: 1.75 }),
        onSelect: () => ev.current?.click(),
        separatorBefore: true
      }
    ];
    return (0, a.jsxs)("section", {
      className: ea(Z().root, ef2),
      "aria-label": e2,
      "data-drag": e5 || void 0,
      onDragEnter: (e10) => {
        tw(e10) && (e10.preventDefault(), ty.current++, e6(true), e4("sources"));
      },
      onDragLeave: (e10) => {
        tw(e10) && (ty.current = Math.max(0, ty.current - 1), ty.current || e6(false));
      },
      onDragOver: (e10) => {
        tw(e10) && (e10.preventDefault(), e10.dataTransfer.dropEffect = "copy");
      },
      onDrop: (e10) => {
        tw(e10) && (e10.preventDefault(), ty.current = 0, e6(false), e8(Array.from(e10.dataTransfer.files)));
      },
      children: [
        (0, a.jsxs)("header", {
          className: Z().header,
          children: [
            (0, a.jsxs)("div", {
              className: Z().titleBlock,
              children: [
                (0, a.jsx)("h2", { className: Z().title, children: e2 }),
                (0, a.jsxs)("p", {
                  className: Z().summary,
                  children: [
                    (0, a.jsx)("span", { children: ec(ez.length, "source") }),
                    (0, a.jsx)(eb, {}),
                    (0, a.jsxs)("span", {
                      children: [
                        (0, a.jsx)(eh, {
                          value: eK,
                          format: (e10) => Math.round(e10).toLocaleString("en-US"),
                          reduced: e_2
                        }),
                        " chunks"
                      ]
                    }),
                    (0, a.jsx)(eb, {}),
                    (0, a.jsx)("span", {
                      className: Z().summaryModel,
                      children: e22
                    })
                  ]
                })
              ]
            }),
            (0, a.jsxs)("div", {
              className: Z().actions,
              children: [
                (0, a.jsxs)(I.AM, {
                  children: [
                    (0, a.jsx)(I.Wv, {
                      asChild: true,
                      children: (0, a.jsxs)("button", {
                        type: "button",
                        className: Z().iconButton,
                        "aria-label": eA ? "Retrieval settings, re-index needed" : "Retrieval settings",
                        children: [
                          (0, a.jsx)(b.A, { "aria-hidden": "true" }),
                          eA && (0, a.jsx)("span", {
                            className: Z().badgeDot,
                            "aria-hidden": "true"
                          })
                        ]
                      })
                    }),
                    (0, a.jsxs)(I.hl, {
                      align: "end",
                      className: Z().settings,
                      "aria-labelledby": tk,
                      children: [
                        (0, a.jsx)("p", {
                          id: tk,
                          className: Z().settingsTitle,
                          children: "Retrieval settings"
                        }),
                        (0, a.jsxs)("div", {
                          className: Z().settingsGroup,
                          children: [
                            (0, a.jsx)(R.A, {
                              label: "Chunk size",
                              value: eC.chunkSize,
                              min: 128,
                              max: 2048,
                              step: 64,
                              format: (e10) => `${e10} tokens`,
                              onValueChange: (e10) => eL({ chunkSize: e10 })
                            }),
                            (0, a.jsx)(R.A, {
                              label: "Overlap",
                              value: eC.overlap,
                              min: 0,
                              max: Math.max(
                                16,
                                16 * Math.floor(eC.chunkSize / 2 / 16)
                              ),
                              step: 16,
                              format: (e10) => `${e10} tokens`,
                              onValueChange: (e10) => eL({ overlap: e10 })
                            }),
                            (0, a.jsx)(R.A, {
                              label: "Top k",
                              value: eC.topK,
                              min: 1,
                              max: 10,
                              step: 1,
                              onValueChange: (e10) => eL({ topK: e10 })
                            })
                          ]
                        }),
                        (0, a.jsxs)("div", {
                          className: Z().toggles,
                          children: [
                            (0, a.jsxs)("label", {
                              className: Z().toggleRow,
                              children: [
                                (0, a.jsxs)("span", {
                                  className: Z().toggleText,
                                  children: [
                                    (0, a.jsx)("span", {
                                      children: "Hybrid search"
                                    }),
                                    (0, a.jsx)("span", {
                                      className: Z().toggleHint,
                                      children: "Blend keyword matches with vectors"
                                    })
                                  ]
                                }),
                                (0, a.jsx)(q.d, {
                                  checked: eC.hybrid,
                                  onCheckedChange: function(e10) {
                                    let t3 = eL({ hybrid: e10 });
                                    tn && "searching" !== tn.status && tl(tn.query, t3);
                                  },
                                  "aria-label": "Hybrid search"
                                })
                              ]
                            }),
                            (0, a.jsxs)("label", {
                              className: Z().toggleRow,
                              children: [
                                (0, a.jsxs)("span", {
                                  className: Z().toggleText,
                                  children: [
                                    (0, a.jsx)("span", {
                                      children: "Reranking"
                                    }),
                                    (0, a.jsx)("span", {
                                      className: Z().toggleHint,
                                      children: "Re-score the top 20 with a cross-encoder"
                                    })
                                  ]
                                }),
                                (0, a.jsx)(q.d, {
                                  checked: eC.rerank,
                                  onCheckedChange: tc,
                                  "aria-label": "Reranking"
                                })
                              ]
                            })
                          ]
                        }),
                        (0, a.jsx)(M.l, {
                          label: "Embedding model",
                          options: h2,
                          value: eC.embeddingModel,
                          onValueChange: (e10) => eL({ embeddingModel: e10 })
                        }),
                        (0, a.jsx)(em, {
                          open: eA,
                          reduced: e_2,
                          children: (0, a.jsxs)("div", {
                            className: Z().reindex,
                            children: [
                              (0, a.jsxs)("p", {
                                children: [
                                  "Chunking or the model changed. Re-index ",
                                  ec(tj, "source"),
                                  " to apply it."
                                ]
                              }),
                              (0, a.jsx)("button", {
                                type: "button",
                                className: Z().accentButton,
                                onClick: e9,
                                children: "Re-index"
                              })
                            ]
                          })
                        })
                      ]
                    })
                  ]
                }),
                (0, a.jsx)(T.r, {
                  label: "Add source",
                  icon: (0, a.jsx)(f.A, { size: 16, strokeWidth: 1.75 }),
                  items: tN
                }),
                (0, a.jsx)("input", {
                  ref: ev,
                  type: "file",
                  multiple: true,
                  hidden: true,
                  accept: ".pdf,.doc,.docx,.md,.markdown,.txt,.html",
                  onChange: (e10) => {
                    e8(Array.from(e10.target.files ?? [])), e10.target.value = "";
                  }
                })
              ]
            })
          ]
        }),
        (0, a.jsxs)("div", {
          className: Z().tabs,
          children: [
            (0, a.jsx)(C.A, {
              label: "View",
              value: e3,
              onValueChange: (e10) => e4(e10),
              options: [
                {
                  value: "sources",
                  label: "Sources",
                  accessory: (0, a.jsx)("span", {
                    className: Z().tabCount,
                    children: ez.length
                  })
                },
                { value: "retrieval", label: "Test retrieval" }
              ]
            }),
            (0, a.jsx)("span", {
              className: Z().tabStatus,
              children: (0, a.jsx)(ep, {
                id: eX ? `w${eX}` : eZ ? `f${eZ}` : "ok",
                reduced: e_2,
                children: eX ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("span", {
                      className: Z().spinner,
                      "aria-hidden": "true"
                    }),
                    eX,
                    " indexing"
                  ]
                }) : eZ ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(u.A, {
                      className: Z().failIcon,
                      "aria-hidden": "true"
                    }),
                    eZ,
                    " failed"
                  ]
                }) : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(_.A, {
                      className: Z().okIcon,
                      "aria-hidden": "true"
                    }),
                    "All indexed"
                  ]
                })
              })
            })
          ]
        }),
        (0, a.jsx)("div", {
          className: Z().body,
          children: (0, a.jsx)(d.N, {
            initial: false,
            mode: "popLayout",
            children: "sources" === e3 ? (0, a.jsxs)(
              l.PY1.div,
              {
                className: Z().panel,
                initial: { opacity: 0 },
                animate: {
                  opacity: 1,
                  transition: e_2 ? { duration: 0 } : ei
                },
                exit: {
                  opacity: 0,
                  transition: e_2 ? { duration: 0 } : er
                },
                children: [
                  ez.length > 0 && (0, a.jsxs)("div", {
                    className: Z().columns,
                    "aria-hidden": "true",
                    children: [
                      (0, a.jsx)("span", { children: "Source" }),
                      (0, a.jsx)("span", {
                        className: Z().stepLabels,
                        children: eo.map(
                          (e10) => (0, a.jsx)("span", { children: el[e10] }, e10)
                        )
                      }),
                      (0, a.jsx)("span", {})
                    ]
                  }),
                  (0, a.jsx)(em, {
                    open: eA && tj > 0,
                    reduced: e_2,
                    children: (0, a.jsxs)("div", {
                      className: Z().notice,
                      children: [
                        (0, a.jsx)("span", {
                          children: "Settings changed since the last index. Search uses the old chunks until you re-index."
                        }),
                        (0, a.jsxs)("button", {
                          type: "button",
                          className: Z().accentButton,
                          onClick: e9,
                          children: ["Re-index ", tj]
                        })
                      ]
                    })
                  }),
                  (0, a.jsx)("ul", {
                    className: Z().sourceList,
                    children: (0, a.jsx)(d.N, {
                      initial: false,
                      children: ez.map(
                        (e10) => (0, a.jsx)(
                          l.PY1.li,
                          {
                            className: Z().sourceItem,
                            initial: { height: 0, opacity: 0 },
                            animate: { height: "auto", opacity: 1 },
                            exit: { height: 0, opacity: 0 },
                            transition: e_2 ? { duration: 0 } : {
                              height: J.smooth,
                              opacity: {
                                duration: ee.fast,
                                ease: en
                              }
                            },
                            children: (0, a.jsxs)("div", {
                              className: Z().sourceRow,
                              "data-status": e10.status,
                              children: [
                                (0, a.jsx)(H, {
                                  kind: e10.kind,
                                  className: Z().sourceMark
                                }),
                                (0, a.jsxs)("div", {
                                  className: Z().sourceMain,
                                  children: [
                                    (0, a.jsxs)("span", {
                                      className: Z().sourceName,
                                      title: e10.name,
                                      children: [
                                        e10.name,
                                        (0, a.jsxs)("span", {
                                          className: Z().srOnly,
                                          children: [", ", W[e10.kind]]
                                        })
                                      ]
                                    }),
                                    (0, a.jsx)(ep, {
                                      id: e10.status,
                                      className: Z().sourceMeta,
                                      reduced: e_2,
                                      children: (0, a.jsx)(ex, {
                                        source: e10
                                      })
                                    })
                                  ]
                                }),
                                (0, a.jsx)(eg, { source: e10 }),
                                (0, a.jsx)("span", {
                                  className: Z().sourceEnd,
                                  children: (0, a.jsx)(ep, {
                                    id: "failed" === e10.status ? false === e10.retryable ? "remove" : "retry" : "indexed" === e10.status ? "done" : "queued" === e10.status ? "queued" : "work",
                                    reduced: e_2,
                                    children: "indexed" === e10.status ? (0, a.jsx)(_.A, {
                                      className: Z().okIcon,
                                      "aria-label": "Indexed"
                                    }) : "queued" === e10.status ? (0, a.jsx)(y.A, {
                                      className: Z().mutedIcon,
                                      "aria-label": "Queued"
                                    }) : "failed" === e10.status ? false === e10.retryable ? (0, a.jsx)("button", {
                                      type: "button",
                                      className: Z().rowAction,
                                      onClick: () => {
                                        var t3;
                                        return t3 = e10.id, void (X2?.(t3), ek2 && (eP(
                                          (e11) => e11.filter(
                                            (e12) => e12.id !== t3
                                          )
                                        ), eV(
                                          `${e1.get(t3)?.name ?? "Source"} removed.`
                                        )));
                                      },
                                      "aria-label": `Remove ${e10.name}`,
                                      children: "Remove"
                                    }) : (0, a.jsx)("button", {
                                      type: "button",
                                      className: Z().rowAction,
                                      onClick: () => {
                                        var t3;
                                        return t3 = e10.id, void (Y2?.(t3), ek2 && (eP(
                                          (e11) => e11.map(
                                            (e12) => e12.id === t3 ? {
                                              ...e12,
                                              status: e12.failedStep ?? "parse",
                                              progress: "embed" === e12.failedStep ? Math.min(
                                                0.95,
                                                e12.progress ?? 0
                                              ) : 0,
                                              error: void 0,
                                              failedStep: void 0
                                            } : e12
                                          )
                                        ), eV(
                                          `Retrying ${e1.get(t3)?.name ?? "source"}.`
                                        )));
                                      },
                                      "aria-label": `Retry ${e10.name}`,
                                      children: "Retry"
                                    }) : (0, a.jsxs)("span", {
                                      className: Z().percent,
                                      children: [
                                        Math.round(
                                          (eo.indexOf(
                                            e10.status
                                          ) + Math.min(
                                            1,
                                            e10.progress ?? 0
                                          )) / 4 * 100
                                        ),
                                        "%"
                                      ]
                                    })
                                  })
                                })
                              ]
                            })
                          },
                          e10.id
                        )
                      )
                    })
                  }),
                  (0, a.jsxs)("div", {
                    className: Z().drop,
                    "data-over": e5 || void 0,
                    "data-empty": 0 === ez.length || void 0,
                    children: [
                      (0, a.jsx)(x.A, {
                        className: Z().dropIcon,
                        "aria-hidden": "true"
                      }),
                      (0, a.jsxs)("span", {
                        className: Z().dropText,
                        children: [
                          0 === ez.length ? (0, a.jsx)("span", {
                            className: Z().dropTitle,
                            children: "No sources yet"
                          }) : null,
                          (0, a.jsx)("span", {
                            children: e5 ? "Drop to add to this knowledge base" : (0, a.jsxs)(a.Fragment, {
                              children: [
                                "Drop files here, or ",
                                (0, a.jsx)("button", {
                                  type: "button",
                                  className: Z().link,
                                  onClick: () => ev.current?.click(),
                                  children: "browse"
                                })
                              ]
                            })
                          }),
                          (0, a.jsxs)("span", {
                            className: Z().dropHint,
                            children: [
                              "PDF, DOCX, Markdown or TXT",
                              ek2 ? ". Demo files stay in your browser" : ""
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              },
              "sources"
            ) : (0, a.jsxs)(
              l.PY1.div,
              {
                className: Z().panel,
                initial: { opacity: 0 },
                animate: {
                  opacity: 1,
                  transition: e_2 ? { duration: 0 } : ei
                },
                exit: {
                  opacity: 0,
                  transition: e_2 ? { duration: 0 } : er
                },
                children: [
                  (0, a.jsxs)("form", {
                    className: Z().query,
                    role: "search",
                    onSubmit: (e10) => {
                      e10.preventDefault(), tl(te);
                    },
                    children: [
                      (0, a.jsx)(w.A, {
                        className: Z().queryIcon,
                        "aria-hidden": "true"
                      }),
                      (0, a.jsx)("input", {
                        ref: ej,
                        className: Z().queryInput,
                        value: te,
                        onChange: (e10) => tt(e10.target.value),
                        onKeyDown: (e10) => {
                          "Escape" === e10.key && te && (e10.preventDefault(), td());
                        },
                        placeholder: "Ask what a customer would ask",
                        "aria-label": "Test query",
                        enterKeyHint: "search",
                        autoComplete: "off",
                        spellCheck: false
                      }),
                      (0, a.jsx)("span", {
                        className: Z().clearSlot,
                        children: (0, a.jsx)(d.N, {
                          initial: false,
                          children: te && (0, a.jsx)(
                            l.PY1.button,
                            {
                              type: "button",
                              className: Z().clear,
                              "aria-label": "Clear query",
                              onClick: td,
                              initial: { opacity: 0 },
                              animate: { opacity: 1, transition: ei },
                              exit: { opacity: 0, transition: er },
                              children: (0, a.jsx)(k.A, {
                                "aria-hidden": "true"
                              })
                            },
                            "clear"
                          )
                        })
                      }),
                      (0, a.jsx)("button", {
                        type: "submit",
                        className: Z().accentButton,
                        disabled: !te.trim() || 0 === eQ.length,
                        children: "Search"
                      })
                    ]
                  }),
                  (0, a.jsxs)("div", {
                    className: Z().resultsBar,
                    children: [
                      (0, a.jsx)("span", {
                        className: Z().resultsStatus,
                        "aria-hidden": "true",
                        children: (0, a.jsx)(ep, {
                          id: tv,
                          reduced: e_2,
                          children: "idle" === tv ? (0, a.jsxs)(a.Fragment, {
                            children: [
                              eK.toLocaleString("en-US"),
                              " chunks from ",
                              ec(eQ.length, "source")
                            ]
                          }) : "searching" === tv ? (0, a.jsx)(A.n, {
                            children: `Searching ${eK.toLocaleString("en-US")} chunks`
                          }) : "reranking" === tv ? (0, a.jsx)(A.n, {
                            children: `Reranking ${ec(Math.min(20, tu.length), "candidate")}`
                          }) : "error" === tv ? (0, a.jsxs)("span", {
                            className: Z().failText,
                            children: [
                              (0, a.jsx)(u.A, {
                                "aria-hidden": "true"
                              }),
                              "Search failed"
                            ]
                          }) : "stale" === tv ? (0, a.jsxs)(a.Fragment, {
                            children: [
                              "Index updated",
                              (0, a.jsx)(eb, {}),
                              (0, a.jsx)("button", {
                                type: "button",
                                className: Z().link,
                                onClick: () => void tl(tn?.query ?? te),
                                children: "Run again"
                              })
                            ]
                          }) : (0, a.jsxs)(a.Fragment, {
                            children: [
                              tx.length ? `Top ${tx.length} of ${tu.length}` : "No matches",
                              (0, a.jsx)(eb, {}),
                              (0, a.jsxs)("span", {
                                className: Z().tabular,
                                children: [
                                  tn?.ms ?? 0,
                                  " ms"
                                ]
                              }),
                              (0, a.jsx)(eb, {}),
                              tp ? "by reranker" : "by similarity"
                            ]
                          })
                        })
                      }),
                      (0, a.jsxs)("label", {
                        className: Z().rerank,
                        children: [
                          (0, a.jsx)("span", { children: "Rerank" }),
                          (0, a.jsx)(q.d, {
                            checked: eC.rerank,
                            onCheckedChange: tc,
                            "aria-label": "Rerank results"
                          })
                        ]
                      })
                    ]
                  }),
                  0 === eQ.length ? (0, a.jsxs)("div", {
                    className: Z().empty,
                    children: [
                      (0, a.jsx)("p", {
                        className: Z().emptyTitle,
                        children: "Nothing is indexed yet"
                      }),
                      (0, a.jsx)("p", {
                        className: Z().emptyText,
                        children: "Sources become searchable as soon as they finish indexing."
                      }),
                      (0, a.jsx)(N.$, {
                        variant: "secondary",
                        size: "sm",
                        onClick: () => e4("sources"),
                        children: "View sources"
                      })
                    ]
                  }) : tn ? "error" === tn.status ? (0, a.jsxs)("div", {
                    className: Z().empty,
                    children: [
                      (0, a.jsx)("p", {
                        className: Z().emptyTitle,
                        children: "The retriever did not answer"
                      }),
                      (0, a.jsxs)("p", {
                        className: Z().emptyText,
                        children: [
                          tn.error,
                          ". Nothing was changed."
                        ]
                      }),
                      (0, a.jsx)(N.$, {
                        variant: "secondary",
                        size: "sm",
                        onClick: () => void tl(tn.query),
                        children: "Try again"
                      })
                    ]
                  }) : "searching" !== tn.status || tu.length ? "done" !== tn.status || tx.length ? (0, a.jsx)(d.N, {
                    mode: "wait",
                    initial: false,
                    children: (0, a.jsx)(
                      l.PY1.ul,
                      {
                        className: Z().results,
                        "data-busy": "searching" === tn.status || tr || void 0,
                        exit: {
                          opacity: 0,
                          transition: e_2 ? { duration: 0 } : er
                        },
                        children: (0, a.jsx)(d.N, {
                          mode: "popLayout",
                          children: tx.map(
                            (e10, t3) => (0, a.jsx)(
                              ey,
                              {
                                result: e10,
                                source: e1.get(
                                  e10.item.sourceId
                                ),
                                open: ts === e10.item.id,
                                onToggle: () => ti(
                                  (t4) => t4 === e10.item.id ? null : e10.item.id
                                ),
                                terms: tb,
                                reranked: tp,
                                kind: tp ? "relevance" : "similarity",
                                settings: eC,
                                reduced: e_2,
                                enterDelay: tp ? 0.16 : Math.min(0.02 * t3, 0.2)
                              },
                              e10.item.id
                            )
                          )
                        })
                      },
                      tn.query
                    )
                  }) : (0, a.jsxs)("div", {
                    className: Z().empty,
                    children: [
                      (0, a.jsx)("p", {
                        className: Z().emptyTitle,
                        children: "No chunks matched"
                      }),
                      (0, a.jsx)("p", {
                        className: Z().emptyText,
                        children: eC.hybrid ? "Try other words, or add a source that covers this." : "Try other words, or turn on hybrid search to match exact terms."
                      })
                    ]
                  }) : (0, a.jsx)("ul", {
                    className: Z().skeletons,
                    "aria-hidden": "true",
                    children: [0, 1, 2].map(
                      (e10) => (0, a.jsxs)(
                        "li",
                        {
                          className: Z().skeleton,
                          style: {
                            animationDelay: `${90 * e10}ms`
                          },
                          children: [
                            (0, a.jsx)("span", {}),
                            (0, a.jsx)("span", {}),
                            (0, a.jsx)("span", {})
                          ]
                        },
                        e10
                      )
                    )
                  }) : (0, a.jsxs)("div", {
                    className: Z().idle,
                    children: [
                      (0, a.jsx)("p", {
                        className: Z().idleText,
                        children: "See which chunks a question pulls back, and how reranking changes the order."
                      }),
                      (0, a.jsx)("ul", {
                        className: Z().suggestions,
                        children: (0, a.jsx)(d.N, {
                          initial: false,
                          children: t_.map(
                            (e10) => (0, a.jsx)(
                              l.PY1.li,
                              {
                                initial: { height: 0, opacity: 0 },
                                animate: {
                                  height: "auto",
                                  opacity: 1
                                },
                                exit: { height: 0, opacity: 0 },
                                transition: e_2 ? { duration: 0 } : {
                                  height: J.smooth,
                                  opacity: {
                                    duration: ee.fast
                                  }
                                },
                                children: (0, a.jsxs)("button", {
                                  type: "button",
                                  className: Z().suggestion,
                                  onClick: () => void tl(e10.query),
                                  children: [
                                    (0, a.jsx)(H, {
                                      kind: e10.kind,
                                      className: Z().suggestionMark
                                    }),
                                    (0, a.jsx)("span", {
                                      className: Z().suggestionText,
                                      children: e10.query
                                    }),
                                    (0, a.jsx)(v.A, {
                                      className: Z().suggestionGo,
                                      "aria-hidden": "true"
                                    })
                                  ]
                                })
                              },
                              e10.query
                            )
                          )
                        })
                      })
                    ]
                  })
                ]
              },
              "retrieval"
            )
          })
        }),
        (0, a.jsx)("p", {
          className: Z().srOnly,
          role: "status",
          "aria-live": "polite",
          children: eU
        })
      ]
    });
  }
  let ek = ew;
}

__m(__module,__exports,__require);
});
A.reg(19805, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var r = a(51811);
  let n = {
    name: "arrow-down",
    size: 24,
    node: [
      ["path", { d: "M12 5v14", key: "s699le" }],
      ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
    ]
  };
  n.node;
  let d = (0, r.A)(n);
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
A.regCss(25898, ".popover_anchor__Mcc5T:active:not(:disabled){transform:none}.popover_content__FmDK_{--popover-x:0px;--popover-y:-5px;z-index:80;min-width:12rem;max-width:min(22rem,calc(100vw - 20px));padding:1rem;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface-raised);color:var(--foreground);box-shadow:var(--shadow-floating);transform-origin:var(--radix-popover-content-transform-origin);transition:opacity var(--duration-fast) var(--ease-enter),transform var(--duration-spring) var(--ease-spring)}.popover_content__FmDK_[data-side=top]{--popover-y:5px}.popover_content__FmDK_[data-side=left]{--popover-x:5px;--popover-y:0px}.popover_content__FmDK_[data-side=right]{--popover-x:-5px;--popover-y:0px}.popover_content__FmDK_[data-state=closed]{opacity:0;transform:translate(calc(var(--popover-x) * .5),calc(var(--popover-y) * .5)) scale(.98);transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard);animation:popover_popover-exit__j6_xO var(--duration-fast) linear both;pointer-events:none}.popover_content__FmDK_:focus{outline:none}@keyframes popover_popover-exit__j6_xO{to{--popover-exit:1}}@media (prefers-reduced-motion:reduce){.popover_content__FmDK_,.popover_content__FmDK_[data-state=closed]{transform:none;transition:opacity var(--duration-instant) var(--ease-standard)}}", {"anchor":"popover_anchor__Mcc5T","content":"popover_content__FmDK_","popover-exit":"popover_popover-exit__j6_xO"});
A.reg(40093, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, {
    Mz: () => Z,
    UC: () => H,
    ZL: () => q,
    bL: () => K,
    bm: () => Q,
    i3: () => U,
    l9: () => $
  });
  var r = n(12115), o = n(70379), a = n(47527), i = n(68599), s = n(19416), l = n(32007), u = n(69885), c = n(89971), d = n(80878), p = n(19040), f = n(83935), h = n(55897), b = n(42442), y = n(59322), v = n(22954), m = n(5174), _ = n(95155), g = Object.defineProperty, x = (e2, t2) => g(e2, "name", { value: t2, configurable: true }), j = "Popover", [C, P] = (0, i.A)(j, [d.Bk]), A = (0, d.Bk)(), [O, w] = C(j), k = x((e2) => {
    let {
      __scopePopover: t2,
      children: n2,
      open: o2,
      defaultOpen: a2,
      onOpenChange: i2,
      modal: s2 = false
    } = e2, l2 = A(t2), u2 = r.useRef(null), [p2, f2] = r.useState(false), [h2, b2] = (0, y.i)({
      prop: o2,
      defaultProp: a2 ?? false,
      onChange: i2,
      caller: j
    });
    return (0, _.jsx)(d.bL, {
      ...l2,
      children: (0, _.jsx)(O, {
        scope: t2,
        contentId: (0, c.B)(),
        triggerRef: u2,
        open: h2,
        onOpenChange: b2,
        onOpenToggle: r.useCallback(() => b2((e3) => !e3), [b2]),
        hasCustomAnchor: p2,
        onCustomAnchorAdd: r.useCallback(() => f2(true), []),
        onCustomAnchorRemove: r.useCallback(() => f2(false), []),
        modal: s2,
        children: n2
      })
    });
  }, "Popover"), R = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...o2 } = e2, a2 = w("PopoverAnchor", n2), i2 = A(n2), { onCustomAnchorAdd: s2, onCustomAnchorRemove: l2 } = a2;
      return r.useEffect(() => (s2(), () => l2()), [s2, l2]), (0, _.jsx)(d.Mz, { ...i2, ...o2, ref: t2 });
    }, "PopoverAnchor")
  ), N = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...r2 } = e2, i2 = w("PopoverTrigger", n2), s2 = A(n2), l2 = (0, a.s)(t2, i2.triggerRef), u2 = (0, _.jsx)(h.sG.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i2.open,
        "aria-controls": i2.open ? i2.contentId : void 0,
        "data-state": Y(i2.open),
        ...r2,
        ref: l2,
        onClick: (0, o.mK)(e2.onClick, i2.onOpenToggle)
      });
      return i2.hasCustomAnchor ? u2 : (0, _.jsx)(d.Mz, { asChild: true, ...s2, children: u2 });
    }, "PopoverTrigger")
  ), E = "PopoverPortal", [T, F] = C(E, { forceMount: void 0 }), M = x((e2) => {
    let { __scopePopover: t2, forceMount: n2, children: r2, container: o2 } = e2, a2 = w(E, t2);
    return (0, _.jsx)(T, {
      scope: t2,
      forceMount: n2,
      children: (0, _.jsx)(f.C, {
        present: n2 || a2.open,
        children: (0, _.jsx)(p.Z, { asChild: true, container: o2, children: r2 })
      })
    });
  }, "PopoverPortal"), L = "PopoverContent", D = r.forwardRef(
    x(function(e2, t2) {
      let n2 = F(L, e2.__scopePopover), { forceMount: r2 = n2.forceMount, ...o2 } = e2, a2 = w(L, e2.__scopePopover);
      return (0, _.jsx)(f.C, {
        present: r2 || a2.open,
        children: a2.modal ? (0, _.jsx)(I, { ...o2, ref: t2 }) : (0, _.jsx)(z, { ...o2, ref: t2 })
      });
    }, "PopoverContent")
  ), S = (0, b.TL)("PopoverContent.RemoveScroll"), I = r.forwardRef(
    x(function(e2, t2) {
      let n2 = w(L, e2.__scopePopover), i2 = r.useRef(null), s2 = (0, a.s)(t2, i2), l2 = r.useRef(false);
      return r.useEffect(() => {
        let e3 = i2.current;
        if (e3) return (0, v.Eq)(e3);
      }, []), (0, _.jsx)(m.A, {
        as: S,
        allowPinchZoom: true,
        children: (0, _.jsx)(B, {
          ...e2,
          ref: s2,
          trapFocus: n2.open,
          disableOutsidePointerEvents: true,
          onCloseAutoFocus: (0, o.mK)(e2.onCloseAutoFocus, (e3) => {
            e3.preventDefault(), l2.current || n2.triggerRef.current?.focus();
          }),
          onPointerDownOutside: (0, o.mK)(
            e2.onPointerDownOutside,
            (e3) => {
              let t3 = e3.detail.originalEvent, n3 = 0 === t3.button && true === t3.ctrlKey;
              l2.current = 2 === t3.button || n3;
            },
            { checkForDefaultPrevented: false }
          ),
          onFocusOutside: (0, o.mK)(
            e2.onFocusOutside,
            (e3) => e3.preventDefault(),
            { checkForDefaultPrevented: false }
          )
        })
      });
    }, "PopoverContentModal")
  ), z = r.forwardRef(
    x(function(e2, t2) {
      let n2 = w(L, e2.__scopePopover), o2 = r.useRef(false), a2 = r.useRef(false);
      return (0, _.jsx)(B, {
        ...e2,
        ref: t2,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (t3) => {
          e2.onCloseAutoFocus?.(t3), t3.defaultPrevented || (o2.current || n2.triggerRef.current?.focus(), t3.preventDefault()), o2.current = false, a2.current = false;
        },
        onInteractOutside: (t3) => {
          e2.onInteractOutside?.(t3), t3.defaultPrevented || (o2.current = true, "pointerdown" === t3.detail.originalEvent.type && (a2.current = true));
          let r2 = t3.target;
          n2.triggerRef.current?.contains(r2) && t3.preventDefault(), "focusin" === t3.detail.originalEvent.type && a2.current && t3.preventDefault();
        }
      });
    }, "PopoverContentNonModal")
  ), B = r.forwardRef(
    x(function(e2, t2) {
      let {
        __scopePopover: n2,
        trapFocus: r2,
        onOpenAutoFocus: o2,
        onCloseAutoFocus: a2,
        disableOutsidePointerEvents: i2,
        onEscapeKeyDown: c2,
        onPointerDownOutside: p2,
        onFocusOutside: f2,
        onInteractOutside: h2,
        ...b2
      } = e2, y2 = w(L, n2), v2 = A(n2);
      return (0, l.Oh)(), (0, _.jsx)(u.n, {
        asChild: true,
        loop: true,
        trapped: r2,
        onMountAutoFocus: o2,
        onUnmountAutoFocus: a2,
        children: (0, _.jsx)(s.qW, {
          asChild: true,
          disableOutsidePointerEvents: i2,
          onInteractOutside: h2,
          onEscapeKeyDown: c2,
          onPointerDownOutside: p2,
          onFocusOutside: f2,
          onDismiss: () => y2.onOpenChange(false),
          deferPointerDownOutside: true,
          children: (0, _.jsx)(d.UC, {
            "data-state": Y(y2.open),
            role: "dialog",
            id: y2.contentId,
            ...v2,
            ...b2,
            ref: t2,
            style: {
              ...b2.style,
              "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
              "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
              "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
            }
          })
        })
      });
    }, "PopoverContentImpl")
  ), W = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...r2 } = e2, a2 = w("PopoverClose", n2);
      return (0, _.jsx)(h.sG.button, {
        type: "button",
        ...r2,
        ref: t2,
        onClick: (0, o.mK)(e2.onClick, () => a2.onOpenChange(false))
      });
    }, "PopoverClose")
  ), G = r.forwardRef(
    x(function(e2, t2) {
      let { __scopePopover: n2, ...r2 } = e2, o2 = A(n2);
      return (0, _.jsx)(d.i3, { ...o2, ...r2, ref: t2 });
    }, "PopoverArrow")
  );
  function Y(e2) {
    return e2 ? "open" : "closed";
  }
  x(Y, "getState");
  var K = k, Z = R, $ = N, q = M, H = D, Q = W, U = G;
}

__m(__module,__exports,__require);
});
A.reg(50626, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var r = n(51811);
  let o = {
    name: "globe",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      [
        "path",
        { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }
      ],
      ["path", { d: "M2 12h20", key: "9i4pu4" }]
    ]
  };
  o.node;
  let a = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(59103, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "clock-3",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 6v6h4", key: "135r8i" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(60466, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { r: () => f });
  var r = n(95155), a = n(12115), i = n(57793), o = n(18310), s = n(25354), l = n(80642), u = n(12363), d = n(7770), c = n(9146), m = n.n(c);
  function p({ text: e2 }) {
    let t2 = (0, o.I)(), n2 = (0, a.useRef)(null), i2 = (0, a.useRef)(null), [u2, c2] = (0, a.useState)({ width: "auto", animate: false });
    return (0, a.useLayoutEffect)(() => {
      let e3 = n2.current;
      if (!e3) return;
      let t3 = new ResizeObserver(([t4]) => {
        if (!t4) return;
        let n3 = e3.textContent, r2 = null !== i2.current && i2.current !== n3;
        i2.current = n3, c2({
          width: Math.ceil(
            t4.borderBoxSize?.[0]?.inlineSize ?? e3.offsetWidth
          ),
          animate: r2
        });
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, r.jsxs)(s.PY1.span, {
      className: m().label,
      initial: false,
      animate: { width: u2.width },
      transition: u2.animate && !t2 ? d.T.spring.morph : { duration: 0 },
      children: [
        (0, r.jsx)("span", {
          ref: n2,
          className: m().labelMeasure,
          "aria-hidden": "true",
          children: e2
        }),
        (0, r.jsx)(l.N, {
          mode: "popLayout",
          initial: false,
          children: (0, r.jsx)(
            s.PY1.span,
            {
              className: m().labelText,
              initial: !t2 && {
                opacity: 0,
                y: "0.3em",
                filter: `blur(${d.T.blur.soft}px)`
              },
              animate: { opacity: 1, y: 0, filter: "blur(0px)" },
              exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
                opacity: 0,
                y: "-0.3em",
                filter: `blur(${d.T.blur.subtle}px)`,
                transition: {
                  duration: d.T.duration.fast,
                  ease: [...d.T.ease.standard]
                }
              },
              transition: {
                duration: d.T.duration.standard,
                ease: [...d.T.ease.enter]
              },
              children: e2
            },
            e2
          )
        })
      ]
    });
  }
  function f({ label: e2, items: t2, icon: n2 }) {
    let l2 = (0, o.I)(), [c2, h] = (0, a.useState)(null), _ = (0, a.useRef)(false), x = (0, a.useRef)(0);
    return (0, a.useEffect)(() => () => window.clearTimeout(x.current), []), (0, r.jsxs)(i.bL, {
      onOpenChange: (e3) => {
        e3 && (window.clearTimeout(x.current), h(null));
      },
      children: [
        (0, r.jsxs)(i.l9, {
          className: m().trigger,
          type: "button",
          children: [
            n2 && (0, r.jsx)("span", {
              className: m().triggerIcon,
              "aria-hidden": "true",
              children: n2
            }),
            (0, r.jsx)(p, { text: e2 }),
            (0, r.jsx)(u.A, {
              className: m().chevron,
              size: 15,
              strokeWidth: 1.8,
              "aria-hidden": "true"
            })
          ]
        }),
        (0, r.jsx)(i.ZL, {
          children: (0, r.jsxs)(i.UC, {
            className: m().menu,
            sideOffset: 6,
            align: "end",
            collisionPadding: 12,
            loop: true,
            onFocus: function(e3) {
              let t3 = e3.target instanceof HTMLElement ? e3.target.closest('[role="menuitem"]') : null;
              if (window.clearTimeout(x.current), !t3) {
                x.current = window.setTimeout(
                  () => h(null),
                  70 * !!_.current
                );
                return;
              }
              let n3 = {
                top: t3.offsetTop,
                height: t3.offsetHeight,
                danger: "danger" === t3.dataset.tone
              }, r2 = _.current;
              h((e4) => ({ ...n3, glide: r2 && null !== e4 }));
            },
            onPointerMoveCapture: () => {
              _.current = true;
            },
            onKeyDownCapture: () => {
              _.current = false;
            },
            children: [
              (0, r.jsx)(s.PY1.span, {
                className: m().highlight,
                "data-tone": c2?.danger ? "danger" : void 0,
                "aria-hidden": "true",
                initial: false,
                animate: c2 ? { y: c2.top, height: c2.height, opacity: 1 } : { opacity: 0 },
                transition: {
                  default: c2?.glide && !l2 ? d.T.spring.snappy : { duration: 0 },
                  opacity: { duration: 0.08 * !l2 }
                }
              }),
              t2.map(
                (e3, t3) => (0, r.jsxs)(
                  a.Fragment,
                  {
                    children: [
                      e3.separatorBefore && (0, r.jsx)(i.wv, { className: m().separator }),
                      (0, r.jsxs)(i.q7, {
                        className: [
                          m().item,
                          e3.destructive ? m().destructive : ""
                        ].filter(Boolean).join(" "),
                        "data-tone": e3.destructive ? "danger" : void 0,
                        style: { "--i": t3 },
                        disabled: e3.disabled,
                        onSelect: e3.onSelect,
                        children: [
                          e3.icon && (0, r.jsx)("span", {
                            className: m().icon,
                            "aria-hidden": "true",
                            children: e3.icon
                          }),
                          e3.label
                        ]
                      })
                    ]
                  },
                  e3.label
                )
              )
            ]
          })
        })
      ]
    });
  }
}

__m(__module,__exports,__require);
});
A.regCss(64622, ".root{--gutter:20px;--hover:color-mix(in oklab,var(--foreground) 5%,transparent);--cols:18px minmax(0,1fr) 168px 52px;position:relative;display:flex;flex-direction:column;box-sizing:border-box;width:100%;max-width:720px;min-width:0;margin-inline:auto;border:1px solid var(--border);border-radius:24px;background:var(--surface);color:var(--foreground);font-family:var(--font-body);letter-spacing:var(--tracking-body);container:kb/inline-size}\n.root *,.root :after,.root :before{box-sizing:border-box}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n.tabular{font-variant-numeric:tabular-nums}\n.dot{display:inline-block;flex:none;width:3px;height:3px;margin:0 7px;border-radius:50%;background:currentColor;opacity:.45;vertical-align:.22em}\n.dot:has(+.summaryModel),.summaryModel{display:none}\n.collapse{overflow:hidden}\n.settings>.collapse{margin-top:0}\n.swap{position:relative;display:inline-flex;min-width:0;max-width:100%}\n.swapItem{display:inline-flex;align-items:center;min-width:0}\n.tabStatus .swapItem{gap:6px}\n.sourceMeta>.swapItem{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.sourceRow[data-status=failed] .sourceMeta>.swapItem{white-space:normal}\n.resultsStatus .swapItem{white-space:nowrap}\n.resultsStatus .swapItem{flex-wrap:wrap;white-space:normal}\n.sourceMeta>.swapItem{white-space:normal}\n.link{padding:0;border:0;background:none;color:var(--foreground);font:inherit;text-decoration:underline;text-decoration-color:var(--border-strong);text-underline-offset:2px;cursor:pointer;transition:text-decoration-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.link:hover{text-decoration-color:currentColor}\n.accentButton,.clear,.dropIcon,.drop,.focus:before,.iconButton,.link,.query,.result,.results,.rowAction,.scoreFill,.suggestionGo{transition:none}\n.accentButton{display:inline-flex;flex:none;align-items:center;justify-content:center;height:32px;padding:0 14px;border:0;border-radius:var(--radius-pill);background:var(--accent);color:var(--accent-foreground);font:inherit;font-size:var(--text-sm);font-weight:500;white-space:nowrap;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),opacity var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n.accentButton:active:not(:disabled){transform:scale(.97)}\n.accentButton:disabled{opacity:.4;cursor:default}\n@media (hover:hover) and (pointer:fine){.accentButton:hover:not(:disabled){background:var(--accent-strong)}\n.query .accentButton{height:36px}\n.accentButton:active:not(:disabled){transform:none}\n.okIcon{flex:none;width:16px;height:16px;color:var(--success);stroke-width:1.75}\n.tabStatus .failIcon,.tabStatus .okIcon{width:14px;height:14px}\n.failIcon{flex:none;width:14px;height:14px;color:var(--danger);stroke-width:1.75}\n.mutedIcon{flex:none;width:16px;height:16px;color:var(--text-muted);stroke-width:1.75}\n.spinner{flex:none;width:12px;height:12px;border:1.5px solid color-mix(in oklab,currentColor 28%,transparent);border-top-color:currentcolor;border-radius:50%;animation:spin .8s linear infinite}\n@media (prefers-reduced-motion:reduce){.spinner{animation:none;border-top-color:color-mix(in oklab,currentColor 28%,transparent);border-right-color:currentColor}\n.header{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:12px 16px;padding:18px var(--gutter) 0 22px}\n@container kb (max-width: 440px){.body,.header,.tabs{--gutter:16px}\n.header{padding-left:var(--gutter)}\n.titleBlock{display:grid;gap:2px;min-width:0}\n.title{margin:0;color:var(--foreground);font-size:var(--text-base);font-weight:500;line-height:1.35;text-wrap:balance}\n.summary{display:flex;flex-wrap:wrap;align-items:center;margin:0;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.actions{display:flex;flex:none;align-items:center;gap:8px}\n.iconButton{position:relative;display:grid;flex:none;place-items:center;width:36px;height:36px;padding:0;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);color:var(--text-secondary);cursor:pointer;transition:background-color var(--duration-instant) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n.iconButton svg{width:16px;height:16px;stroke-width:1.75}\n.iconButton[data-state=open]{border-color:var(--border-strong);background:var(--surface-muted);color:var(--foreground)}\n@media (hover:hover) and (pointer:fine){.iconButton:hover{border-color:var(--border-strong);background:var(--surface-muted);color:var(--foreground)}\n.badgeDot{position:absolute;top:6px;right:6px;width:7px;height:7px;border-radius:50%;background:var(--warning);box-shadow:0 0 0 2px var(--surface)}\n.tabs{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px var(--gutter) 14px;border-bottom:1px solid var(--border-subtle)}\n.tabCount{color:var(--text-muted);font-weight:400;font-variant-numeric:tabular-nums}\n.tabStatus{display:inline-flex;min-width:0;color:var(--text-muted);font-size:var(--text-xs);white-space:nowrap}\n.tabStatus{display:none}\n.body{position:relative;min-height:452px}\n.panel{padding:0 0 20px}\n.columns{display:grid;grid-template-columns:var(--cols);gap:12px;padding:12px var(--gutter) 4px;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.columns>span:first-child{grid-column:1/3}\n.columns{display:none}\n.stepLabels{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px}\n.notice{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:8px var(--gutter) 6px;padding:10px 10px 10px 14px;border:1px solid var(--border);border-radius:16px;color:var(--text-secondary);font-size:var(--text-xs);line-height:var(--leading-body)}\n.notice{flex-direction:column;align-items:flex-start}\n.sourceList{margin:0;padding:0;list-style:none}\n.sourceItem{overflow:hidden}\n.sourceItem+.sourceItem .sourceRow:before{content:\"\";position:absolute;top:0;right:var(--gutter);left:var(--gutter);height:1px;background:var(--border-subtle)}\n.sourceRow{position:relative;display:grid;grid-template-columns:var(--cols);grid-template-areas:\"mark main pipe end\";align-items:center;gap:0 12px;padding:11px var(--gutter)}\n@container kb (max-width: 560px){.sourceRow{--cols:18px minmax(0,1fr) auto}\n.sourceRow{grid-template-areas:\"mark main end\" \". pipe pipe\";row-gap:9px}\n.sourceMark{grid-area:mark;align-self:start;width:18px;height:18px;margin-top:1px;color:var(--text-secondary)}\n.sourceMain{grid-area:main;display:grid;gap:1px;min-width:0}\n.sourceName{min-width:0;overflow:hidden;color:var(--foreground);font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);text-overflow:ellipsis;white-space:nowrap}\n.sourceMeta{display:flex;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.count{display:inline-block;text-align:right;font-variant-numeric:tabular-nums}\n.note{white-space:nowrap}\n.note{display:none}\n.failText{color:var(--text-secondary)}\n.failText svg{display:inline-block;width:13px;height:13px;margin-right:5px;color:var(--danger);stroke-width:1.75;vertical-align:-2px}\n.pipeline{grid-area:pipe;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px}\n.segment{display:block;height:4px;overflow:hidden;border-radius:var(--radius-pill);background:var(--border)}\n.segment[data-state=done] .segmentFill{background:color-mix(in oklab,var(--foreground) 46%,transparent)}\n.segment[data-complete] .segmentFill{background:color-mix(in oklab,var(--foreground) 26%,transparent)}\n.segment[data-state=failed] .segmentFill{background:var(--danger)}\n.segmentFill{display:block;width:100%;height:100%;border-radius:inherit;background:var(--series-1);transform-origin:left center;will-change:transform}\n.sourceEnd{grid-area:end;display:flex;justify-content:flex-end}\n.percent{color:var(--text-secondary);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.rowAction{height:28px;padding:0 11px;border:1px solid var(--border);border-radius:var(--radius-pill);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-xs);font-weight:500;cursor:pointer;transition:background-color var(--duration-instant) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n@media (hover:hover) and (pointer:fine){.rowAction:hover{border-color:var(--border-strong);background:var(--surface-muted)}\n.drop{display:flex;align-items:center;gap:12px;margin:10px var(--gutter) 0;padding:14px 16px;border:1px dashed var(--border-strong);border-radius:16px;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body);transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard)}\n.drop[data-over]{border-color:var(--series-1);background:color-mix(in oklab,var(--series-1) 6%,transparent)}\n.drop[data-empty]{flex-direction:column;justify-content:center;min-height:260px;margin-top:16px;text-align:center}\n.drop[data-over] .dropIcon{color:var(--series-1)}\n.dropIcon{flex:none;width:18px;height:18px;color:var(--text-muted);stroke-width:1.75;transition:color var(--duration-fast) var(--ease-standard)}\n.dropText{display:grid;gap:1px;min-width:0}\n.dropTitle{color:var(--foreground);font-weight:500}\n.dropHint{color:var(--text-muted);font-size:var(--text-xs)}\n.query{display:flex;align-items:center;gap:8px;height:48px;margin:14px var(--gutter) 0;padding:0 6px 0 14px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard)}\n.query:focus-within{border-color:var(--border-strong)}\n.queryIcon{flex:none;width:17px;height:17px;color:var(--text-muted);stroke-width:1.75}\n.queryInput{flex:1;min-width:0;height:100%;padding:0;border:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);outline:none}\n.queryInput::placeholder{color:var(--text-muted)}\n.queryInput::-webkit-search-cancel-button{display:none}\n@media (pointer:coarse){.queryInput{font-size:var(--text-base)}\n.clearSlot{display:grid;flex:none;place-items:center;width:28px;height:28px}\n.clear{display:grid;place-items:center;width:28px;height:28px;padding:0;border:0;border-radius:50%;background:transparent;color:var(--text-muted);cursor:pointer;transition:background-color var(--duration-instant) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n.clear svg{width:15px;height:15px;stroke-width:1.75}\n@media (hover:hover) and (pointer:fine){.clear:hover{background:var(--hover);color:var(--foreground)}\n.resultsBar{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:44px;padding:6px var(--gutter) 2px;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.resultsStatus{display:flex;min-width:0}\n.rerank{display:inline-flex;flex:none;align-items:center;gap:10px;color:var(--text-secondary);font-size:var(--text-sm);cursor:pointer}\n.results{position:relative;margin:0;padding:0;list-style:none;transition:opacity var(--duration-fast) var(--ease-standard)}\n.results[data-busy]{opacity:.55}\n.result{position:relative;background:var(--surface);transition:background-color var(--duration-fast) var(--ease-standard)}\n.result+.result:before{content:\"\";position:absolute;top:0;right:var(--gutter);left:var(--gutter);height:1px;background:var(--border-subtle)}\n.result[data-open]{background:color-mix(in oklab,var(--foreground) 2.5%,var(--surface))}\n@media (hover:hover) and (pointer:fine){.result:not([data-open]):hover{background:color-mix(in oklab,var(--foreground) 1.8%,var(--surface))}\n.result[data-open] .excerpt{color:var(--foreground)}\n.result[data-open] .focus:before{background:var(--series-1)}\n.result[data-open] .focus{box-shadow:inset 2px 0 var(--series-1)}\n.result[data-open] .focus .excerptClip{padding-left:10px}\n.resultHead{--focus-outline-offset:-2px;display:grid;grid-template-columns:14px minmax(0,1fr) 30px auto;align-items:center;gap:12px;width:100%;padding:13px var(--gutter) 4px;border:0;border-radius:14px;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent}\n.resultHead{grid-template-columns:12px minmax(0,1fr) 26px auto;gap:10px}\n.rank{justify-self:start;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.where{display:flex;align-items:center;gap:8px;min-width:0;font-size:var(--text-sm);line-height:var(--leading-body)}\n.resultMark{flex:none;width:15px;height:15px;color:var(--text-secondary)}\n.whereName{min-width:0;overflow:hidden;color:var(--foreground);font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.whereLoc{flex:none;color:var(--text-muted);font-size:var(--text-xs);white-space:nowrap}\n.whereLoc{flex:0 1 auto;max-width:40%;overflow:hidden;text-overflow:ellipsis}\n.deltaSlot{display:flex;justify-content:flex-end}\n.delta{display:inline-flex;align-items:center;gap:2px;color:var(--text-secondary);font-size:var(--text-xs)}\n.delta svg{width:12px;height:12px;stroke-width:2}\n.delta[data-dir=up] svg{color:var(--success)}\n.delta[data-dir=down] svg{color:var(--text-muted)}\n.score{display:inline-flex;align-items:center;gap:8px}\n.score[data-kind=relevance] .scoreFill{background:var(--series-2)}\n.scoreTrack{display:block;width:52px;height:4px;overflow:hidden;border-radius:var(--radius-pill);background:var(--border)}\n.scoreTrack{width:36px}\n.scoreFill{display:block;width:100%;height:100%;border-radius:inherit;background:var(--series-1);transform-origin:left center;transition:background-color var(--duration-standard) var(--ease-standard)}\n.scoreValue{min-width:4ch;color:var(--foreground);font-size:var(--text-xs);font-variant-numeric:tabular-nums;text-align:right}\n.resultBody{padding:0 var(--gutter) 14px calc(var(--gutter) + 26px);cursor:pointer}\n.resultBody{padding-left:var(--gutter)}\n.excerptClip{overflow:hidden;font-size:var(--text-sm);line-height:1.55}\n.excerptClip[data-clipped]{-webkit-mask-image:linear-gradient(#000,#000),linear-gradient(90deg,#000 calc(100% - 72px),transparent);mask-image:linear-gradient(#000,#000),linear-gradient(90deg,#000 calc(100% - 72px),transparent);-webkit-mask-size:100% calc(100% - 1lh),100% 1lh;mask-size:100% calc(100% - 1lh),100% 1lh;-webkit-mask-position:top,bottom;mask-position:top,bottom;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}\n.excerpt{margin:0;color:var(--text-secondary);font-size:var(--text-sm);line-height:1.55;text-wrap:pretty}\n.hit{padding:0 1px;margin:0 -1px;border-radius:3px;background:color-mix(in oklab,var(--series-3) 24%,transparent);color:var(--foreground);-webkit-box-decoration-break:clone;box-decoration-break:clone}\n.focus{position:relative}\n.focus:before,.neighbour:before{content:\"\";position:absolute;left:-12px;width:2px;border-radius:1px}\n.focus:before{top:3px;bottom:3px;background:transparent;transition:background-color var(--duration-standard) var(--ease-standard)}\n.focus:before,.neighbour:before{display:none}\n.neighbour{position:relative}\n.neighbour[data-pos=before]{padding-bottom:10px}\n.neighbour[data-pos=before]:before{top:3px;bottom:13px;background:var(--border-strong)}\n.neighbour[data-pos=after]{padding-top:10px}\n.neighbour[data-pos=after]:before{top:13px;bottom:3px;background:var(--border-strong)}\n.neighbour{padding-left:10px;box-shadow:inset 2px 0 var(--border-strong)}\n.ctxLabel{display:block;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body)}\n.neighbourText{display:-webkit-box;margin:2px 0 0;overflow:hidden;color:var(--text-muted);font-size:var(--text-sm);line-height:1.55;-webkit-box-orient:vertical;-webkit-line-clamp:3}\n.ctxFoot{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:4px 12px;padding-top:10px;color:var(--text-muted);font-size:var(--text-xs);line-height:var(--leading-body);cursor:default}\n.ctxMeta{display:inline-flex;flex-wrap:wrap;align-items:center}\n.idle{padding:6px var(--gutter) 0}\n.idleText{margin:0 0 8px;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body)}\n.suggestions{margin:0 -10px;padding:0;list-style:none}\n.suggestions>li{overflow:hidden}\n.suggestion{--focus-outline-offset:-2px;display:grid;grid-template-columns:16px minmax(0,1fr) 16px;align-items:center;gap:12px;width:100%;min-height:44px;padding:0 10px;border:0;border-radius:12px;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);text-align:left;cursor:pointer;transition:background-color var(--duration-instant) var(--ease-standard);-webkit-tap-highlight-color:transparent}\n.suggestion:focus-visible .suggestionGo{opacity:1}\n.suggestion:active{background:var(--hover)}\n@media (hover:hover) and (pointer:fine){.suggestion:hover{background:var(--hover)}\n.suggestion:hover .suggestionGo{opacity:1}\n.suggestionMark{width:16px;height:16px;color:var(--text-secondary)}\n.suggestionText{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.suggestionGo{width:15px;height:15px;color:var(--text-muted);opacity:0;stroke-width:1.75;transition:opacity var(--duration-fast) var(--ease-standard)}\n.empty{display:grid;justify-items:center;gap:4px;padding:56px var(--gutter) 24px;text-align:center}\n.emptyTitle{margin:0;color:var(--foreground);font-size:var(--text-sm);font-weight:500}\n.emptyText{max-width:38ch;margin:0 0 10px;color:var(--text-secondary);font-size:var(--text-sm);line-height:var(--leading-body);text-wrap:pretty}\n.skeletons{margin:0;padding:0;list-style:none}\n.skeleton{display:grid;gap:9px;padding:16px var(--gutter) 16px calc(var(--gutter) + 26px);animation:pulse 1.3s var(--ease-in-out) infinite alternate}\n.skeleton>span{display:block;height:9px;border-radius:5px;background:var(--surface-muted)}\n.skeleton>span:first-child{width:38%}\n.skeleton>span:nth-child(2){width:94%}\n.skeleton>span:nth-child(3){width:72%}\n.skeleton+.skeleton{box-shadow:inset 0 1px var(--border-subtle)}\n.skeleton{animation:none;opacity:.75}\n.settings{width:min(21rem,calc(100vw - 20px));padding:16px 16px 18px}\n.settings>*+*{margin-top:16px}\n.settingsTitle{margin:0;color:var(--foreground);font-size:var(--text-sm);font-weight:500}\n.settingsGroup{display:grid;gap:12px}\n.toggles{display:grid;gap:2px}\n.toggleRow{display:flex;align-items:center;justify-content:space-between;gap:12px;cursor:pointer}\n.toggleText{display:grid;gap:1px;color:var(--foreground);font-size:var(--text-sm);line-height:var(--leading-body)}\n.toggleHint{color:var(--text-muted);font-size:var(--text-xs)}\n.reindex{display:grid;justify-items:start;gap:10px;margin-top:16px;padding:12px;border:1px solid var(--border);border-radius:14px;color:var(--text-secondary);font-size:var(--text-xs);line-height:var(--leading-body)}\n.reindex p{margin:0}", {"root":"root","srOnly":"srOnly","tabular":"tabular","dot":"dot","summaryModel":"summaryModel","collapse":"collapse","settings":"settings","swap":"swap","swapItem":"swapItem","tabStatus":"tabStatus","sourceMeta":"sourceMeta","sourceRow":"sourceRow","resultsStatus":"resultsStatus","link":"link","accentButton":"accentButton","clear":"clear","dropIcon":"dropIcon","drop":"drop","focus":"focus","iconButton":"iconButton","query":"query","result":"result","results":"results","rowAction":"rowAction","scoreFill":"scoreFill","suggestionGo":"suggestionGo","okIcon":"okIcon","failIcon":"failIcon","mutedIcon":"mutedIcon","spinner":"spinner","header":"header","body":"body","tabs":"tabs","titleBlock":"titleBlock","title":"title","summary":"summary","actions":"actions","badgeDot":"badgeDot","tabCount":"tabCount","panel":"panel","columns":"columns","stepLabels":"stepLabels","notice":"notice","sourceList":"sourceList","sourceItem":"sourceItem","sourceMark":"sourceMark","sourceMain":"sourceMain","sourceName":"sourceName","count":"count","note":"note","failText":"failText","pipeline":"pipeline","segment":"segment","segmentFill":"segmentFill","sourceEnd":"sourceEnd","percent":"percent","dropText":"dropText","dropTitle":"dropTitle","dropHint":"dropHint","queryIcon":"queryIcon","queryInput":"queryInput","clearSlot":"clearSlot","resultsBar":"resultsBar","rerank":"rerank","excerpt":"excerpt","excerptClip":"excerptClip","resultHead":"resultHead","rank":"rank","where":"where","resultMark":"resultMark","whereName":"whereName","whereLoc":"whereLoc","deltaSlot":"deltaSlot","delta":"delta","score":"score","scoreTrack":"scoreTrack","scoreValue":"scoreValue","resultBody":"resultBody","hit":"hit","neighbour":"neighbour","ctxLabel":"ctxLabel","neighbourText":"neighbourText","ctxFoot":"ctxFoot","ctxMeta":"ctxMeta","idle":"idle","idleText":"idleText","suggestions":"suggestions","suggestion":"suggestion","suggestionMark":"suggestionMark","suggestionText":"suggestionText","empty":"empty","emptyTitle":"emptyTitle","emptyText":"emptyText","skeletons":"skeletons","skeleton":"skeleton","settingsTitle":"settingsTitle","settingsGroup":"settingsGroup","toggles":"toggles","toggleRow":"toggleRow","toggleText":"toggleText","toggleHint":"toggleHint","reindex":"reindex"});
A.regCss(66754, ".root{--slider-thumb:22px;--slider-track:6px;display:grid;width:100%;min-width:0;color:var(--foreground);font-size:var(--text-sm);line-height:var(--leading-body);letter-spacing:var(--tracking-body);user-select:none;-webkit-user-select:none}\n.root[data-dragging],.root[data-dragging] .control,.root[data-dragging] .thumb{cursor:grabbing}\n.root[data-disabled]{opacity:.5}\n.root[data-disabled] .control,.root[data-disabled] .markLabel,.root[data-disabled] .thumb{cursor:not-allowed}\n.header{display:flex;min-width:0;align-items:baseline;justify-content:space-between;gap:var(--space-4)}\n.label{min-width:0;font-weight:500}\n.readout{display:inline-flex;flex:none;align-items:center;gap:.3em;color:var(--text-secondary);font-variant-numeric:tabular-nums;white-space:nowrap}\n.dash{color:var(--text-muted)}\n.body{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center}\n.start{display:flex;grid-area:1/1;margin-right:var(--space-3)}\n.end{display:flex;grid-area:1/3;margin-left:var(--space-3)}\n.control{position:relative;grid-area:1/2;height:var(--control-height-md);cursor:pointer;touch-action:pan-y;-webkit-tap-highlight-color:transparent}\n.track{position:absolute;top:50%;right:calc(var(--slider-thumb) / 2);left:calc(var(--slider-thumb) / 2);height:var(--slider-track);margin-top:calc(var(--slider-track) / -2);border-radius:var(--radius-pill);background:var(--control-track)}\n.fill{position:absolute;inset:0;border-radius:inherit;background:var(--control-fill)}\n.fill .tick{background:color-mix(in oklab,var(--control-glyph) 60%,transparent)}\n.tick{position:absolute;top:50%;width:4px;height:4px;margin:-2px 0 0 -2px;border-radius:var(--radius-pill);background:color-mix(in oklab,var(--foreground) 30%,transparent)}\n.thumbs{position:absolute;inset:0 calc(var(--slider-thumb) / 2);container-type:inline-size;pointer-events:none}\n.thumbLayer{position:absolute;inset:0}\n.thumb{position:absolute;top:50%;right:0;box-sizing:border-box;width:var(--slider-thumb);height:var(--slider-thumb);translate:50% -50%;border:0;border-radius:var(--radius-pill);background:var(--control-thumb);box-shadow:var(--control-thumb-shadow);pointer-events:auto;cursor:grab;transition:box-shadow var(--duration-fast) var(--ease-standard)}\n.thumb:after{content:\"\";position:absolute;inset:-11px;border-radius:inherit}\n@media (prefers-reduced-motion:reduce){.markLabel,.thumb{transition:none}\n.bubbleAnchor{--edge:calc(var(--slider-thumb) / 2);--x:calc(var(--at, 0) * 1cqw);position:absolute;right:0;bottom:calc(50% + var(--slider-thumb) / 2 + 8px);display:flex;translate:clamp(calc(100% - var(--edge) - var(--x)),50%,calc(100cqw + var(--edge) - var(--x))) 0;pointer-events:none}\n@media (pointer:coarse){.bubbleAnchor{bottom:calc(50% + var(--slider-thumb) / 2 + 18px)}\n.bubble{display:inline-flex;min-height:1.75rem;align-items:center;padding:0 var(--space-3);border:1px solid color-mix(in oklab,var(--background) 14%,var(--foreground));border-radius:var(--radius-pill);background:var(--foreground);color:var(--background);box-shadow:var(--shadow-raised);font-size:var(--text-sm);font-weight:500;white-space:nowrap;transform-origin:50% 100%}\n.marks{position:relative;grid-area:2/2;height:1.25rem;margin:calc(var(--space-1) * -1) calc(var(--slider-thumb) / 2) 0;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.markLabel{position:absolute;top:0;translate:-50% 0;white-space:nowrap;cursor:pointer;transition:color var(--duration-fast) var(--ease-standard)}\n.markLabel[data-edge=start]{translate:max(-50%,calc(var(--slider-thumb) / -2)) 0}\n.markLabel[data-edge=end]{translate:min(-50%,calc(-100% + var(--slider-thumb) / 2)) 0}\n.markLabel[data-on]{color:var(--text-secondary)}\n@media (hover:hover) and (pointer:fine){.markLabel:hover{color:var(--foreground)}\n.number{display:inline-flex;align-items:center;white-space:nowrap;font-variant-numeric:tabular-nums}\n.column{--feather:.2em;position:relative;display:inline-block;overflow-x:visible;overflow-y:clip;margin-block:calc(var(--feather) * -1);padding-block:var(--feather);mask-image:linear-gradient(to bottom,transparent,#000 calc(var(--feather) * 1.5),#000 calc(100% - var(--feather) * 1.5),transparent)}\n.sizer{visibility:hidden}\n.glyph{position:absolute;inset:var(--feather) 0;text-align:center}\n.symbol{display:inline-block;overflow-x:clip;white-space:pre}", {});
A.reg(68562, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "upload",
    size: 24,
    node: [
      ["path", { d: "M12 3v12", key: "1x0j5s" }],
      ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
      [
        "path",
        { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
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
A.regCss(82016, ".select_field__6HUm4{display:grid;gap:var(--space-2);min-width:0}.select_field__6HUm4 label{font-size:var(--text-sm);font-weight:500}.select_trigger__Gw0L9{position:relative;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;gap:var(--space-3);width:100%;min-height:var(--control-height-md);border:1px solid var(--border);border-radius:var(--radius-control);padding:0 var(--space-3);background:var(--surface);color:var(--foreground);font:inherit;font-size:var(--text-sm);text-align:left;cursor:pointer;transition:border-color var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard)}@media (hover:hover) and (pointer:fine){.select_trigger__Gw0L9:hover:not([data-disabled]){border-color:var(--border-strong);background:var(--surface-muted)}}.select_trigger__Gw0L9:active:not([data-disabled]),.select_trigger__Gw0L9[data-state=open]{border-color:var(--border-strong);background:var(--surface-muted)}.select_trigger__Gw0L9:focus-visible{border-color:var(--border-strong)}.select_trigger__Gw0L9[data-disabled]{opacity:.5;cursor:not-allowed}.select_valueText__zg_oX{display:grid;flex:1;min-width:0;grid-template-columns:minmax(0,1fr)}.select_valueText__zg_oX>span{grid-area:1/1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.select_valueText__zg_oX>[data-placeholder]{color:var(--text-muted)}.select_srOnly__RlNRP{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}.select_chevron__dL2_9{display:inline-flex;flex:0 0 auto;color:var(--text-muted);transition:transform var(--duration-spring) var(--ease-spring),color var(--duration-fast) var(--ease-standard)}.select_trigger__Gw0L9[data-state=open] .select_chevron__dL2_9{transform:rotate(180deg)}.select_hint__5UCeN{color:var(--text-muted);font-size:var(--text-xs)}.select_content__WtPtB{--menu-x:0px;--menu-y:-6px;box-sizing:border-box;z-index:1000;width:var(--radix-select-trigger-width);min-width:var(--radix-select-trigger-width);max-width:min(24rem,calc(100vw - 20px));max-height:min(320px,var(--radix-select-content-available-height));overflow:hidden;border:1px solid var(--border);border-radius:calc(var(--radius-control) + 2px);padding:6px;background:var(--surface-raised);color:var(--foreground);box-shadow:var(--shadow-floating);transform-origin:var(--radix-select-content-transform-origin);animation:select_select-in__Ra6uS var(--duration-standard) var(--ease-enter) both}.select_content__WtPtB[data-side=top]{--menu-y:6px}.select_content__WtPtB[data-side=left]{--menu-x:6px;--menu-y:0px}.select_content__WtPtB[data-side=right]{--menu-x:-6px;--menu-y:0px}.select_content__WtPtB[data-state=closed]{animation:select_select-out__lvI9W var(--duration-instant) var(--ease-standard) both}.select_viewport__b3IkZ{padding:2px 0}.select_item__vx_F9{position:relative;display:flex;align-items:center;min-height:36px;border-radius:calc(var(--radius-control) - 4px);padding:0 34px 0 11px;color:var(--foreground);font-size:var(--text-sm);cursor:default;outline:none;user-select:none;transition:background-color var(--duration-instant) var(--ease-standard),color var(--duration-instant) var(--ease-standard)}.select_item__vx_F9[data-highlighted]{background:var(--surface-muted)}.select_item__vx_F9[data-disabled]{opacity:.45}.select_indicator__4VhG0{position:absolute;right:10px;display:inline-flex;align-items:center;color:var(--foreground);animation:select_indicator-in__IatY1 var(--duration-standard) var(--ease-enter) 40ms both}.select_scrollButton__pH7Sy{display:grid;height:28px;place-items:center;color:var(--text-muted)}@keyframes select_select-in__Ra6uS{0%{opacity:0;transform:translate(var(--menu-x),var(--menu-y)) scale(.97)}}@keyframes select_select-out__lvI9W{to{opacity:0;transform:translate(calc(var(--menu-x) / 2),calc(var(--menu-y) / 2)) scale(.98)}}@keyframes select_indicator-in__IatY1{0%{opacity:0;transform:scale(.6);filter:blur(2px)}}@media (prefers-reduced-transparency:reduce){.select_content__WtPtB{background:var(--surface-raised);backdrop-filter:none;-webkit-backdrop-filter:none}}@media (prefers-reduced-motion:reduce){.select_chevron__dL2_9,.select_item__vx_F9,.select_trigger__Gw0L9{transition:none}}@media (prefers-reduced-motion:reduce){.select_content__WtPtB{animation:select_select-fade__CoMTe var(--duration-instant) var(--ease-standard) both}}@media (prefers-reduced-motion:reduce){.select_content__WtPtB[data-state=closed]{animation:select_select-fade-out__ZTnwf var(--duration-instant) var(--ease-standard) both}}@media (prefers-reduced-motion:reduce){.select_indicator__4VhG0{animation:none}}@keyframes select_select-fade__CoMTe{0%{opacity:0}}@keyframes select_select-fade-out__ZTnwf{to{opacity:0}}", {"field":"select_field__6HUm4","trigger":"select_trigger__Gw0L9","valueText":"select_valueText__zg_oX","srOnly":"select_srOnly__RlNRP","chevron":"select_chevron__dL2_9","hint":"select_hint__5UCeN","content":"select_content__WtPtB","select-in":"select_select-in__Ra6uS","select-out":"select_select-out__lvI9W","viewport":"select_viewport__b3IkZ","item":"select_item__vx_F9","indicator":"select_indicator__4VhG0","indicator-in":"select_indicator-in__IatY1","scrollButton":"select_scrollButton__pH7Sy","select-fade":"select_select-fade__CoMTe","select-fade-out":"select_select-fade-out__ZTnwf"});
A.reg(83978, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { AM: () => l, Wv: () => u, hl: () => c, iN: () => d });
  var a = r(95155), n = r(40093), i = r(12115), s = r(25898), o = r.n(s);
  let l = n.bL, d = n.bm, u = (0, i.forwardRef)(function({ className: e2, ...t2 }, r2) {
    return (0, a.jsx)(n.l9, {
      ...t2,
      ref: r2,
      className: [o().anchor, e2].filter(Boolean).join(" ")
    });
  });
  u.displayName = "PopoverTrigger";
  let c = (0, i.forwardRef)(function({
    className: e2,
    align: t2 = "start",
    sideOffset: r2 = 6,
    collisionPadding: i2 = 10,
    ...s2
  }, l2) {
    return (0, a.jsx)(n.ZL, {
      children: (0, a.jsx)(n.UC, {
        ...s2,
        ref: l2,
        align: t2,
        sideOffset: r2,
        collisionPadding: i2,
        className: [o().content, e2].filter(Boolean).join(" ")
      })
    });
  });
  c.displayName = "PopoverContent";
}

__m(__module,__exports,__require);
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
A.cssFor("knowledge-base", [9146,25898,64622,66754,82016]);
A.item("knowledge-base", {entry:12592, export:"KnowledgeBase", kind:"block", tier:"pro", unresolved:[]});
})();