function(__module,__exports,__require){
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
}