/* support-widget (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(14577, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "info",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M12 16v-4", key: "1dtifu" }],
      ["path", { d: "M12 8h.01", key: "e9boi3" }]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(40638, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => r });
  var i = a(51811);
  let n = {
    name: "message-circle-question-mark",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
          key: "1sd12s"
        }
      ],
      ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
      ["path", { d: "M12 17h.01", key: "p32p05" }]
    ],
    aliases: ["message-circle-question"]
  };
  n.node;
  let r = (0, i.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(43298, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { L: () => h });
  var s = a(95155), r = a(12115), i = a(18310), n = a(80642), o = a(25354), l = a(65377), d = a(9005), c = a(7770), u = a(79698), p = a.n(u);
  let h = (0, r.forwardRef)(function({ label: e2, value: t2, onValueChange: a2, id: u2, className: h2, ...m }, y) {
    let g = (0, r.useId)(), w = u2 ?? g, x = (0, i.I)(), f = (0, r.useRef)(null);
    return (0, s.jsxs)("div", {
      className: p().field,
      children: [
        (0, s.jsx)("label", { htmlFor: w, children: e2 }),
        (0, s.jsxs)("div", {
          className: p().shell,
          "data-filled": t2 ? "true" : void 0,
          children: [
            (0, s.jsx)(l.A, { width: 18, height: 18, "aria-hidden": "true" }),
            (0, s.jsx)("input", {
              ...m,
              ref: (e3) => {
                f.current = e3, "function" == typeof y ? y(e3) : y && (y.current = e3);
              },
              id: w,
              type: "search",
              value: t2,
              onChange: (e3) => a2(e3.target.value),
              className: [p().input, h2].filter(Boolean).join(" ")
            }),
            (0, s.jsx)("span", {
              className: p().clearSlot,
              children: (0, s.jsx)(n.N, {
                initial: false,
                children: t2 ? (0, s.jsx)(
                  o.PY1.button,
                  {
                    type: "button",
                    tabIndex: 0,
                    onClick: function() {
                      a2(""), f.current?.focus();
                    },
                    "aria-label": "Clear search",
                    initial: x ? { opacity: 0 } : {
                      opacity: 0,
                      scale: 0.8,
                      filter: `blur(${c.T.blur.subtle}px)`
                    },
                    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
                    exit: x ? { opacity: 0, transition: { duration: 0 } } : {
                      opacity: 0,
                      scale: 0.8,
                      filter: `blur(${c.T.blur.subtle}px)`,
                      transition: {
                        duration: c.T.duration.instant,
                        ease: [...c.T.ease.standard]
                      }
                    },
                    whileTap: x ? void 0 : {
                      scale: 0.96,
                      transition: {
                        duration: c.T.duration.instant,
                        ease: [...c.T.ease.standard]
                      }
                    },
                    transition: x ? { duration: c.T.duration.instant } : {
                      ...c.T.spring.snappy,
                      opacity: { duration: c.T.duration.fast },
                      filter: { duration: c.T.duration.fast }
                    },
                    children: (0, s.jsx)(d.A, {
                      width: 16,
                      height: 16,
                      "aria-hidden": "true"
                    })
                  },
                  "clear"
                ) : null
              })
            })
          ]
        })
      ]
    });
  });
}

__m(__module,__exports,__require);
});
A.regCss(64444, ".frame,.frame.frame{position:relative;display:inline-block;box-sizing:content-box;padding:.5em .5em .5em .2em;margin:-.5em -.5em -.5em -.2em;text-align:start;white-space:nowrap;mask-image:linear-gradient(90deg,#000 calc(100% - .5em),transparent)}\n.track{position:relative;display:inline-block;white-space:nowrap}\n.glyph{display:inline-block;white-space:pre;transform-origin:50% 60%}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0;user-select:none}", {});
A.reg(69574, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { SupportWidget: () => X, default: () => Z });
  var s = a(95155), r = a(12115), i = a(79196), n = a(25354), o = a(18310), l = a(80642), d = a(57700), c = a(76721), u = a(14577), p = a(64962), h = a(78780), m = a(12363), y = a(38158), g = a(11012), w = a(40638), x = a(65024), f = a(92218), _ = a(51288), k = a(43298), v = a(98344), j = a(7770);
  let b = "Ava Mitchell", S = "media/people/ava-mitchell.svg", N = "Marcus Johnson", A = "media/people/marcus-johnson.svg", I = { name: "Sofia Ramirez", src: "media/people/sofia-ramirez.svg" }, C = { name: "Emma Collins", src: "media/people/emma-collins.svg" }, T = { name: "Jasmine Brooks", src: "media/people/jasmine-brooks.svg" }, P = [
    {
      id: "export-missing",
      title: "Why didn\u2019t my scheduled export arrive?",
      category: "Troubleshooting",
      minutes: 2,
      updated: "Sep 18, 2026",
      author: I,
      summary: "Check the run history, the recipient list, and your email provider\u2019s spam filter.",
      intro: "Most missing exports come from a paused schedule, a changed data source, or a filter at the recipient\u2019s email provider.",
      steps: [
        "Open Exports, then History, and find the run.",
        "If it says Paused, fix the error it shows and choose Resume.",
        "If it says Delivered, ask the recipient to check spam and allow exports@harbor.example.",
        "Choose Run now to send a fresh copy while you wait."
      ],
      note: "History keeps 90 days of runs, with the file size and who received each copy.",
      keywords: "missing email failed paused not arrived spam csv pdf"
    },
    {
      id: "schedule-export",
      title: "Schedule a recurring export",
      category: "Exports",
      minutes: 3,
      updated: "Sep 12, 2026",
      author: C,
      summary: "Send any report as a CSV or PDF every day, week, or month.",
      intro: "Scheduled exports run in your workspace time zone and send a fresh copy of the report to everyone on the list.",
      steps: [
        "Open the report and choose Export, then Schedule.",
        "Pick CSV or PDF and how often it should run.",
        "Add recipients. People outside your workspace get a secure download link.",
        "Choose Save schedule. The first export runs at the next 6:00."
      ],
      note: "An export that fails twice in a row pauses on its own, so nobody receives an empty file.",
      keywords: "csv pdf email send weekly daily monthly time zone report"
    },
    {
      id: "okta-sso",
      title: "Set up single sign-on with Okta",
      category: "Security",
      minutes: 5,
      updated: "Aug 30, 2026",
      author: T,
      summary: "Connect Okta over SAML 2.0 and require it for your whole workspace.",
      intro: "You need Owner access in Harbor and admin access in Okta. Setup takes about ten minutes.",
      steps: [
        "In Okta, add a SAML 2.0 app and paste Harbor\u2019s ACS URL and entity ID.",
        "Download the Okta metadata XML file.",
        "In Harbor, open Settings, then Security, and upload the file under Single sign-on.",
        "Sign in once with your own account, then turn on Require SSO."
      ],
      note: "Keep one owner on password sign-in until everyone has signed in with SSO at least once.",
      keywords: "sso saml login sign in okta identity security"
    },
    {
      id: "roles",
      title: "Invite teammates and choose roles",
      category: "Workspace",
      minutes: 2,
      updated: "Sep 4, 2026",
      author: I,
      summary: "Owners, editors, and viewers, and what each of them can change.",
      intro: "Everyone you invite takes a seat, except viewers on the Growth and Scale plans.",
      steps: [
        "Open Settings, then Members, and choose Invite.",
        "Enter one or more email addresses.",
        "Pick a role: Owner, Editor, or Viewer.",
        "Choose Send invites. Invitations expire after 7 days."
      ],
      note: "Only owners can change billing, security settings, or another owner\u2019s role.",
      keywords: "invite seat seats member team permission viewer editor owner"
    },
    {
      id: "change-plan",
      title: "Change your plan or billing cycle",
      category: "Billing",
      minutes: 2,
      updated: "Sep 9, 2026",
      author: C,
      summary: "Upgrades are prorated right away. Downgrades take effect at renewal.",
      intro: "Any owner can change the plan. The new limits apply the moment an upgrade goes through.",
      steps: [
        "Open Settings, then Billing, and choose Change plan.",
        "Pick a plan and monthly or yearly billing.",
        "Review the prorated amount, then confirm."
      ],
      note: "Yearly billing costs 20% less and keeps your price for twelve months.",
      keywords: "upgrade downgrade seats price yearly monthly subscription plan billing"
    },
    {
      id: "invoices",
      title: "Download invoices and receipts",
      category: "Billing",
      minutes: 1,
      updated: "Jul 22, 2026",
      author: T,
      summary: "Every invoice since your first payment, as a PDF you can forward.",
      intro: "Invoices are issued on your renewal date and show your VAT ID once you add it.",
      steps: [
        "Open Settings, then Billing, then Invoices.",
        "Choose Download next to any invoice.",
        "To have them sent automatically, add an address under Billing contacts."
      ],
      note: "Need a different company name or address on past invoices? Ask us and we\u2019ll reissue them.",
      keywords: "invoice receipt vat tax pdf billing"
    },
    {
      id: "postgres",
      title: "Connect a Postgres database",
      category: "Data sources",
      minutes: 4,
      updated: "Sep 15, 2026",
      author: T,
      summary: "Use read-only credentials, allow Harbor\u2019s IP addresses, and keep SSL on.",
      intro: "Harbor only reads from your database, so a read-only user is all it needs.",
      steps: [
        "Create a read-only user for Harbor in your database.",
        "Allow connections from 34.120.18.7 and 34.120.18.9.",
        "In Harbor, open Data sources, choose Add, then Postgres, and enter the host and credentials.",
        "Keep Require SSL on and choose Test connection."
      ],
      note: "When a password changes, update it here too. Exports that read from the source pause until you do.",
      keywords: "postgres database sql connection warehouse ssl ip password"
    },
    {
      id: "slow-dashboard",
      title: "Speed up a slow dashboard",
      category: "Troubleshooting",
      minutes: 3,
      updated: "Aug 26, 2026",
      author: I,
      summary: "Cached queries, row limits, and when to split one dashboard into two.",
      intro: "A dashboard loads as fast as its slowest chart. Start by finding that one.",
      steps: [
        "Open the dashboard and choose Performance to see each chart\u2019s query time.",
        "Turn on caching for charts that don\u2019t need live data.",
        "Add a date filter so charts read fewer rows.",
        "Move charts slower than 5 seconds to a dashboard of their own."
      ],
      note: "Dashboards with more than 25 charts load in pages of 10.",
      keywords: "slow performance cache loading speed dashboard"
    },
    {
      id: "public-link",
      title: "Share a dashboard with a public link",
      category: "Sharing",
      minutes: 2,
      updated: "Sep 2, 2026",
      author: C,
      summary: "Links can expire, ask for a password, and hide your filters.",
      intro: "Anyone with a public link can view the dashboard without a Harbor account.",
      steps: [
        "Open the dashboard and choose Share.",
        "Turn on Public link.",
        "Set an expiry date and, if you like, a password.",
        "Copy the link. You can turn it off at any time."
      ],
      note: "Owners can turn off public links for the whole workspace under Settings, then Security.",
      keywords: "share link public password embed dashboard"
    },
    {
      id: "api-key",
      title: "Create and rotate API keys",
      category: "Developers",
      minutes: 3,
      updated: "Aug 19, 2026",
      author: T,
      summary: "Give each integration its own key and rotate it without downtime.",
      intro: "Keys belong to the workspace, not to a person, so they keep working when someone leaves.",
      steps: [
        "Open Settings, then API keys, and choose Create key.",
        "Name it after the integration and pick its scopes.",
        "Copy the secret now. It is shown only once.",
        "To rotate, create a new key, update the integration, then revoke the old one."
      ],
      note: "Keys that haven\u2019t been used for 90 days are flagged in the list.",
      keywords: "api key token secret developer rotate revoke integration"
    }
  ], R = [
    "export-missing",
    "schedule-export",
    "okta-sso",
    "roles",
    "change-plan"
  ], O = [
    "Our Churned accounts export didn\u2019t arrive",
    "Can we add two more seats?"
  ], D = (e2) => e2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), M = (e2) => Array.from(new Set(e2.toLowerCase().split(/\s+/).filter(Boolean))).slice(
    0,
    6
  );
  var $ = a(88690), z = a.n($);
  let { spring: Y, duration: E, ease: H, blur: F } = j.T, B = [...H.enter], L = [...H.standard], W = [
    {
      name: "Weekly revenue summary",
      detail: "PDF \xB7 Mondays at 6:00",
      status: "Delivered Sep 21",
      ok: true
    },
    {
      name: "Churned accounts",
      detail: "CSV \xB7 Daily at 6:00",
      status: "Paused Sep 21",
      ok: false
    },
    {
      name: "Wholesale orders",
      detail: "CSV \xB7 Fridays at 6:00",
      status: "Delivered Sep 18",
      ok: true
    },
    {
      name: "Board metrics pack",
      detail: "PDF \xB7 1st of the month",
      status: "Delivered Sep 1",
      ok: true
    }
  ], U = {
    enter: (e2) => ({ x: 32 * e2, opacity: 0, filter: `blur(${F.subtle}px)` }),
    center: { x: 0, opacity: 1, filter: "blur(0px)" },
    exit: (e2) => ({
      x: -32 * e2,
      opacity: 0,
      filter: `blur(${F.subtle}px)`,
      transition: {
        x: Y.smooth,
        opacity: { duration: E.fast, ease: L },
        filter: { duration: E.fast }
      }
    })
  }, J = {
    enter: { x: 0, opacity: 0, filter: "blur(0px)" },
    center: { x: 0, opacity: 1, filter: "blur(0px)" },
    exit: {
      x: 0,
      opacity: 0,
      filter: "blur(0px)",
      transition: { duration: E.instant }
    }
  };
  function q({ children: e2, reduced: t2, ref: a2 }) {
    let r2 = (0, i.tF)();
    return (0, s.jsx)(n.PY1.span, {
      ref: a2,
      className: z().swapItem,
      "aria-hidden": !r2 || void 0,
      initial: t2 ? { opacity: 0 } : { opacity: 0, y: 6, filter: `blur(${F.soft}px)` },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
        opacity: 0,
        y: -4,
        filter: `blur(${F.soft}px)`,
        transition: { duration: E.fast, ease: L }
      },
      transition: t2 ? { duration: E.instant } : { duration: E.standard, ease: B },
      children: e2
    });
  }
  function K({ id: e2, children: t2, className: a2 }) {
    let r2 = !!(0, o.I)();
    return (0, s.jsx)("span", {
      className: [z().swap, a2].filter(Boolean).join(" "),
      children: (0, s.jsx)(l.N, {
        mode: "popLayout",
        initial: false,
        children: (0, s.jsx)(q, { reduced: r2, children: t2 }, e2)
      })
    });
  }
  function V({ text: e2, matcher: t2 }) {
    return t2 ? (0, s.jsx)(s.Fragment, {
      children: e2.split(t2).map(
        (e3, t3) => t3 % 2 ? (0, s.jsx)("mark", { children: e3 }, t3) : e3
      )
    }) : (0, s.jsx)(s.Fragment, { children: e2 });
  }
  function X({ onSend: e2, onOpenChange: t2 }) {
    let a2 = !!(0, o.I)(), i2 = (0, r.useId)(), j2 = (0, r.useId)(), C2 = (0, r.useId)(), [T2, $2] = (0, r.useState)({ w: 0, h: 0 }), [H2, q2] = (0, r.useState)(false), [Z2, G] = (0, r.useState)("home"), [Q, ee] = (0, r.useState)("home"), [et, ea] = (0, r.useState)(1), [es, er] = (0, r.useState)(P[0].id), [ei, en] = (0, r.useState)(""), [eo, el] = (0, r.useState)({}), [ed, ec] = (0, r.useState)([]), [eu, ep] = (0, r.useState)(false), [eh, em] = (0, r.useState)(""), [ey, eg] = (0, r.useState)(O), [ew, ex] = (0, r.useState)(0), [ef, e_] = (0, r.useState)(""), ek = (0, r.useRef)(null), ev = (0, r.useRef)(null), ej = (0, r.useRef)(null), eb = (0, r.useRef)(null), eS = (0, r.useRef)(null), eN = (0, r.useRef)(null), eA = (0, r.useRef)(null), eI = (0, r.useRef)(null), eC = (0, r.useRef)({ open: false, view: "home" }), eT = (0, r.useRef)(/* @__PURE__ */ new Set()), eP = (0, r.useRef)(0), eR = (0, r.useRef)(1), eO = (0, r.useRef)(42), eD = (0, r.useRef)(false), eM = (0, r.useRef)(false), e$ = P.find((e3) => e3.id === es) ?? P[0], ez = (0, r.useMemo)(() => {
      let e3;
      return (e3 = M(ei)).length ? P.map((t3, a3) => {
        let s2 = t3.title.toLowerCase(), r2 = t3.summary.toLowerCase(), i3 = `${s2} ${r2} ${t3.category.toLowerCase()} ${t3.keywords}`;
        return e3.every((e7) => i3.includes(e7)) ? {
          article: t3,
          score: e3.reduce(
            (e7, t4) => e7 + 3 * !!s2.includes(t4) + +!!r2.includes(t4),
            0
          ),
          index: a3
        } : null;
      }).filter((e7) => null !== e7).sort((e7, t3) => t3.score - e7.score || e7.index - t3.index).map((e7) => e7.article) : R.map((e7) => P.find((t3) => t3.id === e7));
    }, [ei]), eY = (0, r.useMemo)(() => {
      let e3;
      return (e3 = M(ei)).length ? RegExp(`(${e3.map(D).join("|")})`, "gi") : null;
    }, [ei]), eE = ei.trim().length > 0, eH = "chat" === Z2, eF = eH ? Q : Z2, eB = T2.w && T2.w + 2 < 520 ? 12 : 20, eL = T2.w ? Math.min(384, T2.w - 2 * eB) : 384, eW = T2.h ? Math.min(600, T2.h - 2 * eB) : 600, eU = eW - 2 - 60;
    (0, r.useEffect)(() => {
      let e3 = ek.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(
        ([e7]) => $2({
          w: Math.round(e7.contentRect.width),
          h: Math.round(e7.contentRect.height)
        })
      );
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, r.useEffect)(() => {
      eC.current = { open: H2, view: Z2 };
    }, [H2, Z2]), (0, r.useEffect)(() => {
      let e3 = eT.current;
      return () => e3.forEach(window.clearTimeout);
    }, []), (0, r.useEffect)(() => {
      let e3 = eI.current;
      if (!e3) return;
      eI.current = null;
      let t3 = ev.current, a3 = "launcher" === e3 ? ej.current : "search" === e3 ? eb.current : "composer" === e3 ? eS.current : "talk" === e3 ? eN.current : "panel" === e3 ? t3 : "article" === e3 ? t3?.querySelector('[data-view="article"] h3') : "feedback" === e3 ? t3?.querySelector(
        '[data-view="article"] [data-feedback]'
      ) : t3?.querySelector(
        `[data-view="home"] [data-article="${e3.slice(5)}"]`
      ) ?? eb.current;
      a3?.focus({ preventScroll: true });
    }, [H2, Z2, es, eo]), (0, r.useEffect)(() => {
      let e3 = eA.current;
      e3 && e3.scrollTo({ top: e3.scrollHeight, behavior: a2 ? "auto" : "smooth" });
    }, [ed, eu, H2, Z2, a2]);
    let eJ = (e3) => window.matchMedia("(pointer: coarse)").matches ? "panel" : e3;
    function eq(e3, t3) {
      let a3 = window.setTimeout(() => {
        eT.current.delete(a3), t3();
      }, e3);
      eT.current.add(a3);
    }
    function eK() {
      let e3 = 600 + eO.current++;
      return `${Math.floor(e3 / 60)}:${String(e3 % 60).padStart(2, "0")}`;
    }
    function eV(e3) {
      let t3 = eR.current++, a3 = eK();
      ec((s2) => [...s2, { id: t3, from: "ava", text: e3, time: a3 }]), eP.current = Math.max(0, eP.current - 1), ep(eP.current > 0), eC.current.open && "chat" === eC.current.view || (ex((e7) => e7 + 1), e_("Ava replied. Open help to read it."));
    }
    function eX() {
      ev.current?.contains(document.activeElement) && (eI.current = "launcher"), q2(false), t2?.(false), eH && eD.current && 0 === eP.current && !eM.current && (eM.current = true, eP.current += 1, eq(
        1600,
        () => eV(
          "No rush, Jordan. I\u2019ll keep this conversation open, and my replies will wait for you here."
        )
      ));
    }
    function eZ(e3) {
      er(e3), ea(1), G("article"), eI.current = "article";
    }
    function eG(e3) {
      let t3 = "article" === Z2 ? "article" : "home";
      ee(t3), G("chat"), ex(0), e3 && em(e3), eI.current = eJ("composer"), eD.current || (eD.current = true, eP.current += 1, ep(true), eq(900, () => {
        let e7;
        return eV(
          (e7 = "article" === t3 ? e$ : void 0) ? `Hi Jordan, I\u2019m Ava. I have \u201C${e7.title}\u201D open too, so we can pick up from there. What\u2019s going on?` : "Hi Jordan, I\u2019m Ava from Harbor support. What can I help with today?"
        );
      }));
    }
    function eQ(t3) {
      let a3 = t3.trim();
      if (!a3) return;
      let s2 = eR.current++;
      ec((e3) => [
        ...e3,
        { id: s2, from: "you", text: a3, time: eK(), status: "Sent" }
      ]), em(""), eg((e3) => e3.filter((e7) => e7 !== t3)), e2?.(a3), eP.current += 1, eq(700, () => {
        ec((e3) => e3.map((e7) => e7.id === s2 ? { ...e7, status: "Seen" } : e7)), ep(true);
      }), eq(2200, () => {
        let e3;
        return eV(
          (e3 = a3.toLowerCase(), /export|arrive|csv|pdf|report|churn/.test(e3) ? "Found it. The Churned accounts export paused on Sep 21 because the Postgres password changed. Update it under Data sources and I\u2019ll rerun the export for you." : /seat|plan|invite|billing|upgrade|invoice/.test(e3) ? "You\u2019re using 12 of 15 seats on Growth, so two more fit without changing plans. Invite them from Settings, then Members." : /sso|okta|saml|login|sign in/.test(e3) ? "Happy to help with SSO. Send me the error from Okta\u2019s sign-in log and I\u2019ll check the SAML settings on our side." : /thank|great|perfect|works|worked/.test(e3) ? "Anytime, Jordan. I\u2019ll keep this thread open in case anything else comes up." : "Thanks, Jordan. I\u2019m looking at your workspace now and will reply here within a few minutes.")
        );
      });
    }
    function e0(e3) {
      el((t3) => ({ ...t3, [es]: e3 })), eI.current = "feedback";
    }
    let e1 = a2 ? { duration: E.instant } : {
      x: Y.smooth,
      opacity: { duration: E.standard, ease: B },
      filter: { duration: E.standard, ease: B }
    }, e22 = eE ? ez.length ? "results" : "none" : "popular", e6 = eo[e$.id], e8 = (0, s.jsxs)(
      n.PY1.div,
      {
        "data-view": "home",
        className: z().view,
        layoutScroll: true,
        custom: et,
        variants: a2 ? J : U,
        initial: "enter",
        animate: "center",
        exit: "exit",
        transition: e1,
        children: [
          (0, s.jsxs)("div", {
            className: z().greeting,
            children: [
              (0, s.jsx)("p", { children: "Hi Jordan" }),
              (0, s.jsx)("h2", { children: "How can we help?" })
            ]
          }),
          (0, s.jsx)("div", {
            className: z().search,
            children: (0, s.jsx)(k.L, {
              ref: eb,
              label: "Search help articles",
              placeholder: "Search for answers",
              value: ei,
              onValueChange: en,
              onKeyDown: function(e3) {
                "ArrowDown" === e3.key && (e3.preventDefault(), ev.current?.querySelector('[data-view="home"] [data-article]')?.focus()), "Enter" === e3.key && eE && ez[0] && (e3.preventDefault(), eZ(ez[0].id));
              },
              autoComplete: "off",
              "aria-controls": j2
            })
          }),
          (0, s.jsx)("p", {
            className: z().listHead,
            children: (0, s.jsx)(K, {
              id: e22,
              children: "popular" === e22 ? "Popular articles" : "none" === e22 ? "No matching articles" : (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("span", {
                    className: z().count,
                    children: (0, s.jsx)(x.q, { value: ez.length })
                  }),
                  1 === ez.length ? " article" : " articles"
                ]
              })
            })
          }),
          ez.length ? (0, s.jsx)("ul", {
            id: j2,
            className: z().list,
            "aria-label": eE ? "Search results" : "Popular articles",
            onKeyDown: function(e3) {
              if ("ArrowDown" !== e3.key && "ArrowUp" !== e3.key) return;
              let t3 = Array.from(
                e3.currentTarget.querySelectorAll("[data-article]")
              ), a3 = t3.indexOf(document.activeElement);
              if (a3 < 0) return;
              e3.preventDefault();
              let s2 = a3 + ("ArrowDown" === e3.key ? 1 : -1);
              s2 < 0 ? eb.current?.focus() : t3[Math.min(s2, t3.length - 1)]?.focus();
            },
            children: (0, s.jsx)(l.N, {
              mode: "popLayout",
              initial: false,
              children: ez.map(
                (e3) => (0, s.jsx)(
                  n.PY1.li,
                  {
                    layout: "position",
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: {
                      opacity: 0,
                      transition: { duration: a2 ? 0 : E.instant }
                    },
                    transition: a2 ? { duration: 0 } : {
                      layout: Y.smooth,
                      opacity: { duration: E.standard, ease: B }
                    },
                    children: (0, s.jsxs)("button", {
                      type: "button",
                      className: z().card,
                      "data-article": e3.id,
                      onClick: () => eZ(e3.id),
                      children: [
                        (0, s.jsxs)("span", {
                          className: z().cardText,
                          children: [
                            (0, s.jsx)("strong", {
                              children: (0, s.jsx)(V, {
                                text: e3.title,
                                matcher: eY
                              })
                            }),
                            (0, s.jsx)("span", {
                              children: (0, s.jsx)(V, {
                                text: e3.summary,
                                matcher: eY
                              })
                            })
                          ]
                        }),
                        (0, s.jsx)(c.A, {
                          size: 16,
                          strokeWidth: 1.75,
                          "aria-hidden": "true"
                        })
                      ]
                    })
                  },
                  e3.id
                )
              )
            })
          }) : (0, s.jsxs)("div", {
            className: z().empty,
            children: [
              (0, s.jsxs)("p", {
                children: [
                  "Nothing in the help center mentions \u201C",
                  ei.trim(),
                  "\u201D yet. Ava can answer it directly."
                ]
              }),
              (0, s.jsx)(_.$, {
                variant: "secondary",
                size: "sm",
                onClick: () => eG(ei.trim()),
                children: "Ask Ava"
              })
            ]
          })
        ]
      },
      "home"
    ), e5 = (0, s.jsx)(
      n.PY1.div,
      {
        "data-view": "article",
        className: z().view,
        custom: et,
        variants: a2 ? J : U,
        initial: "enter",
        animate: "center",
        exit: "exit",
        transition: e1,
        children: (0, s.jsxs)("article", {
          className: z().article,
          children: [
            (0, s.jsxs)("p", {
              className: z().meta,
              children: [e$.category, " \xB7 ", e$.minutes, " min read"]
            }),
            (0, s.jsx)("h3", {
              tabIndex: -1,
              children: (0, s.jsx)(V, { text: e$.title, matcher: eY })
            }),
            (0, s.jsxs)("div", {
              className: z().byline,
              children: [
                (0, s.jsx)(f.e, {
                  name: e$.author.name,
                  src: e$.author.src,
                  size: "sm"
                }),
                (0, s.jsxs)("span", {
                  children: [e$.author.name, " \xB7 Updated ", e$.updated]
                })
              ]
            }),
            (0, s.jsx)("p", {
              children: (0, s.jsx)(V, { text: e$.intro, matcher: eY })
            }),
            (0, s.jsx)("ol", {
              className: z().steps,
              children: e$.steps.map(
                (e3, t3) => (0, s.jsxs)(
                  "li",
                  {
                    children: [
                      (0, s.jsx)("span", {
                        "aria-hidden": "true",
                        children: t3 + 1
                      }),
                      (0, s.jsx)("p", {
                        children: (0, s.jsx)(V, { text: e3, matcher: eY })
                      })
                    ]
                  },
                  e3
                )
              )
            }),
            (0, s.jsxs)("p", {
              className: z().note,
              children: [
                (0, s.jsx)(u.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                (0, s.jsx)("span", {
                  children: (0, s.jsx)(V, { text: e$.note, matcher: eY })
                })
              ]
            }),
            (0, s.jsx)("div", {
              className: z().feedback,
              "data-feedback": true,
              tabIndex: -1,
              children: (0, s.jsx)(K, {
                id: e6 ?? "ask",
                children: e6 ? (0, s.jsx)("span", {
                  className: z().rated,
                  children: "yes" === e6 ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(p.A, {
                        size: 16,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Thanks, glad it helped."
                    ]
                  }) : "Sorry it missed. Ava can take it from here."
                }) : (0, s.jsxs)("span", {
                  className: z().ask,
                  children: [
                    (0, s.jsx)("span", { children: "Was this helpful?" }),
                    (0, s.jsxs)("span", {
                      className: z().askButtons,
                      children: [
                        (0, s.jsx)(_.$, {
                          variant: "secondary",
                          size: "sm",
                          onClick: () => e0("yes"),
                          children: "Yes"
                        }),
                        (0, s.jsx)(_.$, {
                          variant: "secondary",
                          size: "sm",
                          onClick: () => e0("no"),
                          children: "No"
                        })
                      ]
                    })
                  ]
                })
              })
            })
          ]
        })
      },
      `article-${e$.id}`
    ), e4 = (0, s.jsx)(
      n.PY1.div,
      {
        ref: ev,
        className: z().panel,
        style: { width: eL - 2, height: eW - 2 },
        role: "dialog",
        "aria-label": eH ? "Conversation with Ava Mitchell" : "Help",
        tabIndex: -1,
        onKeyDown: function(e3) {
          "Escape" === e3.key && (e3.preventDefault(), e3.stopPropagation(), eX());
        },
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            duration: a2 ? E.instant : E.standard,
            delay: 0.06 * !a2,
            ease: B
          }
        },
        exit: {
          opacity: 0,
          transition: { duration: a2 ? 0 : E.instant, ease: L }
        },
        children: (0, s.jsxs)(d.o, {
          id: i2,
          children: [
            (0, s.jsxs)("header", {
              className: z().header,
              children: [
                (0, s.jsx)(n.PY1.div, {
                  className: z().backSlot,
                  inert: "home" === Z2,
                  initial: false,
                  animate: {
                    width: 40 * ("home" !== Z2),
                    opacity: +("home" !== Z2)
                  },
                  transition: a2 ? { duration: 0 } : Y.morph,
                  children: (0, s.jsx)("button", {
                    type: "button",
                    className: z().iconButton,
                    onClick: function() {
                      if (eH) {
                        G(Q), eI.current = "talk";
                        return;
                      }
                      ea(-1), G("home"), eI.current = `card:${es}`;
                    },
                    "aria-label": eH ? "Back to help" : "Back to articles",
                    children: (0, s.jsx)(h.A, {
                      size: 18,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    })
                  })
                }),
                (0, s.jsx)(n.PY1.span, {
                  className: z().faceSlot,
                  initial: false,
                  animate: { width: 40 * !!eH },
                  transition: a2 ? { duration: 0 } : Y.morph,
                  children: eH && (0, s.jsx)(n.PY1.span, {
                    layoutId: "ava",
                    className: z().face,
                    transition: a2 ? { duration: 0 } : Y.morph,
                    children: (0, s.jsx)(f.e, {
                      name: b,
                      src: S,
                      status: "online"
                    })
                  })
                }),
                (0, s.jsx)("div", {
                  className: z().headTitle,
                  children: (0, s.jsx)(K, {
                    id: eH ? "chat" : "article" === Z2 ? `article-${e$.category}` : "home",
                    children: eH ? (0, s.jsxs)("span", {
                      className: z().headStack,
                      children: [
                        (0, s.jsx)("strong", {
                          children: "Ava Mitchell"
                        }),
                        (0, s.jsx)("span", {
                          children: "Support engineer \xB7 replies in about 4 min"
                        })
                      ]
                    }) : (0, s.jsx)("strong", {
                      children: "article" === Z2 ? e$.category : "Help"
                    })
                  })
                }),
                (0, s.jsx)("button", {
                  type: "button",
                  className: z().iconButton,
                  onClick: eX,
                  "aria-label": "Close help",
                  children: (0, s.jsx)(m.A, {
                    size: 18,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  })
                })
              ]
            }),
            (0, s.jsx)("div", {
              className: z().body,
              inert: eH,
              children: (0, s.jsx)(l.N, {
                initial: false,
                custom: et,
                children: "article" === eF ? e5 : e8
              })
            }),
            (0, s.jsx)(n.PY1.div, {
              className: z().sheet,
              "data-chat": eH || void 0,
              initial: false,
              animate: { height: eH ? eU : 76 },
              transition: a2 ? { duration: 0 } : Y.smooth,
              children: (0, s.jsxs)("div", {
                className: z().sheetInner,
                style: { height: eU },
                children: [
                  (0, s.jsx)(l.N, {
                    initial: false,
                    children: eH && (0, s.jsxs)(
                      n.PY1.div,
                      {
                        className: z().chatBody,
                        initial: { opacity: 0 },
                        animate: {
                          opacity: 1,
                          transition: {
                            duration: a2 ? E.instant : E.standard,
                            delay: 0.08 * !a2,
                            ease: B
                          }
                        },
                        exit: {
                          opacity: 0,
                          transition: { duration: a2 ? 0 : E.instant }
                        },
                        children: [
                          (0, s.jsxs)("div", {
                            className: z().thread,
                            ref: eA,
                            role: "log",
                            "aria-label": "Messages with Ava",
                            children: [
                              (0, s.jsx)("p", {
                                className: z().threadMeta,
                                children: "Today"
                              }),
                              (0, s.jsx)(l.N, {
                                initial: false,
                                children: ed.map(
                                  (e3) => (0, s.jsxs)(
                                    n.PY1.div,
                                    {
                                      className: "you" === e3.from ? z().mine : z().theirs,
                                      initial: a2 ? { opacity: 0 } : { opacity: 0, y: 10 },
                                      animate: { opacity: 1, y: 0 },
                                      transition: a2 ? { duration: E.instant } : {
                                        y: Y.smooth,
                                        opacity: {
                                          duration: E.standard,
                                          ease: B
                                        }
                                      },
                                      children: [
                                        (0, s.jsx)("p", {
                                          className: z().bubble,
                                          children: e3.text
                                        }),
                                        (0, s.jsx)("span", {
                                          className: z().stamp,
                                          children: "you" === e3.from ? (0, s.jsxs)(K, {
                                            id: e3.status ?? "Sent",
                                            children: [
                                              e3.status,
                                              " \xB7 ",
                                              e3.time
                                            ]
                                          }) : `Ava \xB7 ${e3.time}`
                                        })
                                      ]
                                    },
                                    e3.id
                                  )
                                )
                              }),
                              (0, s.jsx)(l.N, {
                                initial: false,
                                children: eu && (0, s.jsxs)(
                                  n.PY1.div,
                                  {
                                    className: z().typing,
                                    initial: a2 ? { opacity: 0 } : { opacity: 0, y: 8 },
                                    animate: { opacity: 1, y: 0 },
                                    exit: {
                                      opacity: 0,
                                      transition: { duration: E.instant }
                                    },
                                    transition: a2 ? { duration: E.instant } : Y.snappy,
                                    children: [
                                      (0, s.jsx)("span", {
                                        "aria-hidden": "true"
                                      }),
                                      (0, s.jsx)("span", {
                                        "aria-hidden": "true"
                                      }),
                                      (0, s.jsx)("span", {
                                        "aria-hidden": "true"
                                      }),
                                      (0, s.jsx)("span", {
                                        className: z().srOnly,
                                        children: "Ava is typing"
                                      })
                                    ]
                                  },
                                  "typing"
                                )
                              })
                            ]
                          }),
                          ed.length > 0 && ey.length > 0 && (0, s.jsx)("div", {
                            className: z().suggestions,
                            "aria-label": "Suggested replies",
                            role: "group",
                            children: (0, s.jsx)(l.N, {
                              mode: "popLayout",
                              initial: false,
                              children: ey.map(
                                (e3) => (0, s.jsx)(
                                  n.PY1.button,
                                  {
                                    type: "button",
                                    layout: "position",
                                    initial: { opacity: 0 },
                                    animate: { opacity: 1 },
                                    exit: {
                                      opacity: 0,
                                      transition: { duration: E.instant }
                                    },
                                    transition: a2 ? { duration: 0 } : {
                                      layout: Y.smooth,
                                      opacity: {
                                        duration: E.standard
                                      }
                                    },
                                    onClick: () => eQ(e3),
                                    children: e3
                                  },
                                  e3
                                )
                              )
                            })
                          })
                        ]
                      },
                      "chat"
                    )
                  }),
                  (0, s.jsxs)("div", {
                    className: z().dockRow,
                    children: [
                      (0, s.jsxs)(n.PY1.form, {
                        className: z().composer,
                        onSubmit: function(e3) {
                          e3.preventDefault(), eQ(eh);
                        },
                        inert: !eH,
                        initial: false,
                        animate: { opacity: +!!eH },
                        transition: a2 ? { duration: eH ? E.instant : 0 } : eH ? { duration: E.standard, ease: B } : { duration: E.fast, ease: L },
                        children: [
                          (0, s.jsx)("label", {
                            className: z().srOnly,
                            htmlFor: C2,
                            children: "Message Ava"
                          }),
                          (0, s.jsx)("input", {
                            ref: eS,
                            id: C2,
                            type: "text",
                            value: eh,
                            onChange: (e3) => em(e3.target.value),
                            placeholder: "Message Ava",
                            autoComplete: "off"
                          }),
                          (0, s.jsx)("button", {
                            type: "submit",
                            className: z().send,
                            disabled: !eh.trim(),
                            "aria-label": "Send message",
                            children: (0, s.jsx)(y.A, {
                              size: 16,
                              strokeWidth: 2,
                              "aria-hidden": "true"
                            })
                          })
                        ]
                      }),
                      (0, s.jsxs)(n.PY1.button, {
                        ref: eN,
                        type: "button",
                        className: z().talk,
                        onClick: () => eG(),
                        inert: eH,
                        "aria-label": ew ? `Talk to us, ${ew} new ${1 === ew ? "reply" : "replies"} from Ava` : "Talk to us",
                        initial: false,
                        animate: {
                          opacity: +!eH,
                          filter: eH && !a2 ? `blur(${F.subtle}px)` : "blur(0px)"
                        },
                        transition: a2 ? { duration: eH ? 0 : E.instant } : eH ? { duration: E.fast, ease: L } : { duration: E.standard, delay: 0.1, ease: B },
                        children: [
                          (0, s.jsxs)("span", {
                            className: z().stack,
                            "aria-hidden": "true",
                            children: [
                              (0, s.jsx)(n.PY1.span, {
                                layoutId: "ava",
                                className: z().stackFace,
                                transition: a2 ? { duration: 0 } : Y.morph,
                                children: (0, s.jsx)(f.e, {
                                  name: b,
                                  src: S,
                                  size: "sm"
                                })
                              }),
                              (0, s.jsx)("span", {
                                className: z().stackFace,
                                children: (0, s.jsx)(f.e, {
                                  name: N,
                                  src: A,
                                  size: "sm"
                                })
                              }),
                              (0, s.jsx)("span", {
                                className: z().stackFace,
                                children: (0, s.jsx)(f.e, {
                                  name: I.name,
                                  src: I.src,
                                  size: "sm"
                                })
                              })
                            ]
                          }),
                          (0, s.jsx)(v.g, {
                            className: z().talkLabel,
                            children: ew ? "Ava replied" : "Talk to us"
                          }),
                          (0, s.jsx)(K, {
                            id: ew ? "new" : "time",
                            className: z().talkMeta,
                            children: ew ? `${ew} new` : "About 4 min"
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            })
          ]
        })
      },
      "panel"
    );
    return (0, s.jsxs)("section", {
      className: z().root,
      "aria-label": "Support widget",
      children: [
        (0, s.jsxs)("div", {
          className: z().stage,
          ref: ek,
          children: [
            (0, s.jsxs)("div", {
              className: z().app,
              role: "group",
              "aria-label": "Sample app page",
              children: [
                (0, s.jsxs)("div", {
                  className: z().appBar,
                  children: [
                    (0, s.jsx)("strong", { children: "Harbor" }),
                    (0, s.jsxs)("span", {
                      className: z().appNav,
                      children: [
                        (0, s.jsx)("span", { children: "Dashboards" }),
                        (0, s.jsx)("span", { children: "Reports" }),
                        (0, s.jsx)("span", {
                          "aria-current": "page",
                          children: "Exports"
                        })
                      ]
                    }),
                    (0, s.jsx)("span", {
                      className: z().appUser,
                      children: "Fieldstone Roasters"
                    })
                  ]
                }),
                (0, s.jsxs)("div", {
                  className: z().appHead,
                  children: [
                    (0, s.jsx)("h2", { children: "Scheduled exports" }),
                    (0, s.jsx)("p", {
                      children: "4 schedules \xB7 times in UTC"
                    })
                  ]
                }),
                (0, s.jsx)("ul", {
                  className: z().appRows,
                  children: W.map(
                    (e3) => (0, s.jsxs)(
                      "li",
                      {
                        children: [
                          (0, s.jsxs)("span", {
                            children: [
                              (0, s.jsx)("strong", { children: e3.name }),
                              (0, s.jsx)("small", { children: e3.detail })
                            ]
                          }),
                          (0, s.jsxs)("span", {
                            className: z().appStatus,
                            "data-tone": e3.ok ? "success" : "warning",
                            children: [
                              e3.ok ? (0, s.jsx)(p.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }) : (0, s.jsx)(g.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              e3.status
                            ]
                          })
                        ]
                      },
                      e3.name
                    )
                  )
                })
              ]
            }),
            (0, s.jsxs)("div", {
              className: z().dock,
              children: [
                (0, s.jsx)(n.PY1.div, {
                  className: z().widget,
                  "data-open": H2 || void 0,
                  initial: false,
                  animate: {
                    width: H2 ? eL : 56,
                    height: H2 ? eW : 56,
                    borderRadius: H2 ? 16 : 28
                  },
                  transition: a2 ? { duration: 0 } : H2 ? Y.morph : Y.smooth,
                  children: (0, s.jsx)(l.N, {
                    initial: false,
                    children: H2 ? e4 : (0, s.jsx)(
                      n.PY1.button,
                      {
                        ref: ej,
                        type: "button",
                        className: z().launcher,
                        onClick: function() {
                          let e3 = ew > 0 || "chat" === Z2;
                          ew > 0 && "chat" !== Z2 && (ee(Z2), G("chat")), ex(0), eI.current = eJ(
                            e3 ? "composer" : "article" === Z2 ? "article" : "search"
                          ), q2(true), t2?.(true), e_(
                            ew > 0 ? "Help opened on your conversation with Ava." : ""
                          );
                        },
                        "aria-haspopup": "dialog",
                        "aria-label": ew ? `Open help, ${ew} unread ${1 === ew ? "reply" : "replies"} from Ava` : "Open help",
                        initial: { opacity: 0 },
                        animate: {
                          opacity: 1,
                          transition: {
                            duration: a2 ? E.instant : E.fast,
                            delay: 0.12 * !a2
                          }
                        },
                        exit: {
                          opacity: 0,
                          transition: { duration: 0.08 * !a2 }
                        },
                        children: (0, s.jsx)(n.PY1.span, {
                          className: z().launcherIcon,
                          initial: a2 ? { opacity: 0 } : { opacity: 0, scale: 0.85, rotate: -12 },
                          animate: { opacity: 1, scale: 1, rotate: 0 },
                          transition: a2 ? { duration: E.instant } : { ...Y.snappy, delay: 0.12 },
                          children: (0, s.jsx)(w.A, {
                            size: 24,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          })
                        })
                      },
                      "launcher"
                    )
                  })
                }),
                (0, s.jsx)(l.N, {
                  children: !H2 && ew > 0 && (0, s.jsx)(
                    n.PY1.span,
                    {
                      className: z().unread,
                      "aria-hidden": "true",
                      initial: a2 ? { opacity: 0 } : { opacity: 0, scale: 0.8 },
                      animate: { opacity: 1, scale: 1 },
                      exit: {
                        opacity: 0,
                        scale: a2 ? 1 : 0.8,
                        transition: { duration: E.instant }
                      },
                      transition: a2 ? { duration: E.instant } : { ...Y.snappy, delay: 0.2 },
                      children: (0, s.jsx)(K, {
                        id: String(ew),
                        children: ew
                      })
                    },
                    "unread"
                  )
                })
              ]
            })
          ]
        }),
        (0, s.jsx)("span", {
          className: z().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ef
        })
      ]
    });
  }
  let Z = X;
}

__m(__module,__exports,__require);
});
A.regCss(79698, ".field{display:grid;gap:var(--space-2);min-width:0}\n.field label{font-size:var(--text-sm);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body)}\n.shell{display:flex;min-height:var(--control-height-md);align-items:center;gap:var(--space-2);border:1px solid var(--border-strong);border-radius:var(--radius-control);padding:0 var(--space-3);background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.shell:hover:not(:focus-within){border-color:var(--foreground)}\n.shell:focus-within{border-color:var(--foreground)}\n.shell>svg{flex:0 0 auto;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard)}\n.shell:focus-within>svg,.shell[data-filled=true]>svg{color:var(--foreground)}\n.clearSlot,.shell button{display:grid;width:24px;height:24px;flex:0 0 auto;place-items:center}\n.shell button{border:0;border-radius:var(--radius-control);background:transparent;color:var(--text-muted);transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.shell button:hover{background:var(--surface-muted);color:var(--foreground)}\n@media (prefers-reduced-motion:reduce){.shell,.shell button,.shell>svg{transition:none}\n.input{width:100%;min-width:0;border:0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);letter-spacing:var(--tracking-body);outline:0}\n.input:focus-visible{outline:0}\n.input::placeholder{color:var(--text-muted)}\n.input::-webkit-search-cancel-button{display:none}", {});
A.regCss(88690, ".root{container:widget/inline-size;width:min(100%,1100px);min-width:0;margin-inline:auto;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:var(--leading-body)}\n.root mark{margin:0 -1px;padding:0 1px;border-radius:4px;background:var(--accent-subtle);color:inherit;box-decoration-break:clone;-webkit-box-decoration-break:clone}\n.stage{position:relative;height:680px;overflow:hidden;border:1px solid var(--border);border-radius:16px;background:var(--background)}\n@container widget (max-width: 519px){.stage{height:640px}\n.app{position:absolute;inset:0;display:flex;flex-direction:column;gap:var(--space-8);padding:var(--space-5) var(--space-8)}\n.app{padding:var(--space-4);gap:var(--space-6)}\n.appBar{display:flex;align-items:center;gap:var(--space-6);min-height:var(--control-height-sm);border-bottom:1px solid var(--border-subtle);padding-bottom:var(--space-4);color:var(--text-secondary)}\n.appBar strong{color:var(--foreground);font-weight:500}\n.appNav{display:flex;gap:var(--space-5)}\n.appNav [aria-current]{color:var(--foreground)}\n.appNav,.appUser{display:none}\n.appUser{margin-left:auto}\n.appHead h2{margin:0;font-size:var(--text-xl);font-weight:500;line-height:1.25}\n.appHead p{margin:var(--space-1) 0 0;color:var(--text-secondary)}\n.appRows{display:grid;max-width:560px;margin:0;padding:0;list-style:none}\n.appRows li{display:flex;align-items:center;justify-content:space-between;gap:var(--space-4);padding:var(--space-4) 0;border-bottom:1px solid var(--border)}\n.appRows li>span:first-child{display:grid;gap:2px;min-width:0}\n.appRows strong{font-weight:500}\n.appRows small{color:var(--text-muted);font-size:var(--text-xs)}\n.appRows li{align-items:flex-start;flex-direction:column;gap:var(--space-1)}\n.appStatus{display:inline-flex;flex:none;align-items:center;gap:var(--space-2);color:var(--text-secondary);font-size:var(--text-xs)}\n.appStatus[data-tone=success] svg{color:var(--success)}\n.appStatus[data-tone=warning]{color:var(--foreground)}\n.appStatus[data-tone=warning] svg{color:var(--warning)}\n.dock{position:absolute;right:var(--space-5);bottom:var(--space-5);z-index:2}\n.dock{right:var(--space-3);bottom:var(--space-3)}\n.widget{position:relative;box-sizing:border-box;width:56px;height:56px;overflow:hidden;border:1px solid var(--accent);border-radius:28px;background:var(--accent);color:var(--accent-foreground);box-shadow:var(--shadow-floating);transition:background-color var(--duration-standard) var(--ease-standard),border-color var(--duration-standard) var(--ease-standard),color var(--duration-standard) var(--ease-standard)}\n.widget[data-open]{border-color:var(--border);background:var(--surface-raised);color:var(--foreground)}\n@media (hover:hover) and (pointer:fine){.widget:not([data-open]):hover{border-color:color-mix(in oklab,var(--foreground) 84%,var(--background));background:color-mix(in oklab,var(--foreground) 84%,var(--background))}\n@media (prefers-reduced-motion:reduce){.card,.card>svg,.composer,.iconButton,.send,.sheet,.suggestions button,.talk,.widget{transition:none}\n.launcher{position:absolute;inset:0;display:block;padding:0;border:0;border-radius:inherit;background:transparent;color:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent}\n.launcherIcon{position:absolute;right:0;bottom:0;display:grid;width:54px;height:54px;place-items:center}\n.unread{position:absolute;right:-4px;bottom:40px;z-index:3;display:grid;min-width:20px;height:20px;place-items:center;padding:0 6px;border-radius:var(--radius-pill);background:var(--accent);color:var(--accent-foreground);box-shadow:0 0 0 2px var(--background);font-size:var(--text-xs);font-weight:500;line-height:20px;font-variant-numeric:tabular-nums;pointer-events:none}\n.panel{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;overflow:hidden}\n.header{position:relative;z-index:2;display:flex;flex:none;align-items:center;height:60px;box-sizing:border-box;padding:0 var(--space-3);border-bottom:1px solid var(--border)}\n.backSlot{display:flex;flex:none;overflow:hidden}\n.faceSlot{position:relative;flex:none;align-self:stretch}\n.face{position:absolute;top:11px;left:0;display:block;width:36px;height:36px;border-radius:var(--radius-pill)}\n.face>span,.stackFace>span{display:block}\n.headTitle{flex:1;min-width:0;padding-left:var(--space-2)}\n.headTitle strong{display:block;font-weight:500}\n.headStack{display:grid;min-width:0}\n.headStack>span{overflow:hidden;color:var(--text-muted);font-size:var(--text-xs);text-overflow:ellipsis;white-space:nowrap}\n.iconButton{display:grid;flex:none;width:32px;height:32px;place-items:center;padding:0;border:0;border-radius:9px;background:transparent;color:var(--text-secondary);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.iconButton:hover{background:var(--surface-muted);color:var(--foreground)}\n.iconButton:active{background:var(--surface-muted)}\n.swap{position:relative;display:block;min-width:0}\n.swapItem{display:block}\n.body{position:relative;flex:1;min-height:0}\n.view{position:absolute;inset:0;overflow-y:auto;overscroll-behavior:contain;padding:var(--space-5) var(--space-5) calc(76px + var(--space-5));scrollbar-width:thin;scrollbar-color:var(--border-strong) transparent}\n.view{padding-right:var(--space-4);padding-left:var(--space-4)}\n.greeting p{margin:0;color:var(--text-secondary)}\n.greeting h2{margin:2px 0 0;font-family:var(--font-body);font-size:var(--text-xl);font-weight:500;letter-spacing:var(--tracking-body);line-height:1.25}\n.search{margin-top:var(--space-5)}\n.search label{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.listHead{margin:var(--space-5) 0 var(--space-1);color:var(--text-secondary);font-size:var(--text-xs);font-weight:500}\n.count{display:inline-flex;vertical-align:bottom}\n.count>span{color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit}\n.list{position:relative;margin:0;padding:0;list-style:none}\n.list li{border-bottom:1px solid var(--border)}\n.card{display:flex;align-items:center;gap:var(--space-3);width:calc(100% + var(--space-4));margin:0 calc(var(--space-2) * -1);padding:var(--space-3) var(--space-2);border:0;border-radius:10px;background:transparent;color:var(--foreground);font:inherit;text-align:left;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard)}\n.card>svg{flex:none;color:var(--text-muted);transition:color var(--duration-fast) var(--ease-standard),transform var(--duration-standard) var(--ease-spring)}\n@media (hover:hover) and (pointer:fine){.card:hover{background:var(--surface-muted)}\n.card:hover>svg{color:var(--foreground);transform:translateX(2px)}\n.card:active{background:var(--surface-muted)}\n.cardText{display:grid;flex:1;gap:2px;min-width:0}\n.cardText strong{font-weight:500}\n.cardText span{display:-webkit-box;overflow:hidden;color:var(--text-secondary);font-size:var(--text-xs);-webkit-box-orient:vertical;-webkit-line-clamp:2}\n.empty{display:grid;justify-items:start;gap:var(--space-3);padding:var(--space-3) 0}\n.empty p{margin:0;color:var(--text-secondary)}\n.article>p{margin:0 0 var(--space-4);font-size:var(--text-sm);line-height:1.55}\n.article>.meta{margin:0;color:var(--text-muted);font-size:var(--text-xs)}\n.article h3{margin:var(--space-1) 0 0;font-size:var(--text-lg);font-weight:500;letter-spacing:var(--tracking-body);line-height:1.25}\n.article>.note{display:flex;gap:var(--space-2);padding-top:var(--space-4);border-top:1px solid var(--border);color:var(--text-secondary);font-size:var(--text-xs)}\n.byline{display:flex;align-items:center;gap:var(--space-2);margin:var(--space-3) 0 var(--space-5);color:var(--text-secondary);font-size:var(--text-xs)}\n.steps{display:grid;gap:var(--space-3);margin:0 0 var(--space-5);padding:0;list-style:none}\n.steps li{display:grid;grid-template-columns:var(--space-6) 1fr}\n.steps li>span{color:var(--text-muted);font-size:var(--text-xs);line-height:1.8;font-variant-numeric:tabular-nums}\n.steps p{margin:0;font-size:var(--text-sm);line-height:1.55}\n.note svg{flex:none;margin-top:1px;color:var(--text-muted)}\n.feedback{min-height:var(--control-height-sm);margin-top:var(--space-2)}\n.ask{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--space-2) var(--space-3);color:var(--text-secondary)}\n.askButtons{display:flex;gap:var(--space-2)}\n.askButtons button,.rated{min-height:var(--control-height-sm)}\n.rated{display:flex;align-items:center;gap:var(--space-2);color:var(--text-secondary)}\n.rated svg{color:var(--success)}\n.sheet{position:absolute;right:0;bottom:0;left:0;z-index:1;overflow:hidden;border-top:1px solid var(--border);background:var(--surface-raised);transition:border-color var(--duration-fast) var(--ease-standard)}\n.sheet[data-chat]{border-top-color:transparent}\n.sheetInner{position:absolute;right:0;bottom:0;left:0}\n.chatBody{position:absolute;top:0;right:0;bottom:76px;left:0;display:flex;flex-direction:column}\n.thread{display:flex;flex:1;flex-direction:column;gap:var(--space-3);min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:var(--space-4) var(--space-4) var(--space-2);scrollbar-width:thin;scrollbar-color:var(--border-strong) transparent;scrollbar-gutter:stable}\n.threadMeta{margin:0 0 var(--space-1);color:var(--text-muted);font-size:var(--text-xs);text-align:center}\n.mine,.theirs{display:grid;max-width:86%;gap:var(--space-1)}\n.theirs{align-self:flex-start}\n.mine{align-self:flex-end;justify-items:end}\n.mine .bubble{border-radius:12px 12px 4px 12px;background:var(--accent);color:var(--accent-foreground)}\n.bubble{margin:0;padding:9px 12px;border-radius:12px 12px 12px 4px;background:var(--surface-muted);font-size:var(--text-sm);line-height:var(--leading-body);overflow-wrap:anywhere}\n.stamp{padding:0 var(--space-1);color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums}\n.typing{display:flex;align-self:flex-start;align-items:center;gap:var(--space-1);height:34px;padding:0 12px;border-radius:12px 12px 12px 4px;background:var(--surface-muted)}\n.typing>span[aria-hidden]{width:6px;height:6px;border-radius:var(--radius-pill);background:var(--text-muted);animation:typing 1.2s var(--ease-in-out) infinite}\n.typing>span[aria-hidden]:nth-child(2){animation-delay:.15s}\n.typing>span[aria-hidden]:nth-child(3){animation-delay:.3s}\n.typing>span[aria-hidden]{animation:none;opacity:.7}\n.suggestions{position:relative;display:flex;flex-wrap:wrap;justify-content:flex-end;gap:var(--space-2);padding:var(--space-1) var(--space-4) var(--space-3)}\n.suggestions button{padding:6px var(--space-3);border:1px solid var(--border);border-radius:8px;background:var(--surface);color:var(--text-secondary);font:inherit;font-size:var(--text-xs);cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.suggestions button:hover{border-color:var(--border-strong);color:var(--foreground)}\n.suggestions button:active{background:var(--surface-muted);transform:scale(.97)}\n.send:active,.suggestions button:active,.talk:active{transform:none}\n.dockRow{position:absolute;right:14px;bottom:14px;left:14px;height:48px}\n.composer,.talk{position:absolute;inset:0;box-sizing:border-box;border-radius:14px}\n.talk{display:flex;align-items:center;gap:var(--space-3);padding:0 var(--space-4) 0 10px;border:0;background:var(--foreground);color:var(--background);font:inherit;font-weight:500;cursor:pointer;transition:background-color var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.talk:hover{background:color-mix(in oklab,var(--foreground) 86%,var(--background))}\n.talk:active{transform:scale(.985);background:color-mix(in oklab,var(--foreground) 80%,var(--background))}\n.composer{display:flex;align-items:center;gap:var(--space-2);padding:0 5px 0 var(--space-4);border:1px solid var(--border);background:var(--surface);transition:border-color var(--duration-fast) var(--ease-standard)}\n.composer:focus-within{border-color:var(--border-strong)}\n.composer input{flex:1;min-width:0;padding:0;border:0;background:transparent;color:var(--foreground);font:inherit;outline:0}\n.composer input::placeholder{color:var(--text-muted)}\n.stack{display:flex;flex:none}\n.stackFace{display:block;width:28px;height:28px;border-radius:var(--radius-pill);box-shadow:0 0 0 2px var(--foreground)}\n.stackFace+.stackFace{margin-left:-8px}\n.talkLabel{flex:none}\n.talkMeta{margin-left:auto;color:color-mix(in oklab,var(--background) 62%,var(--foreground));font-size:var(--text-xs);font-weight:400;white-space:nowrap}\n.send{display:grid;flex:none;width:36px;height:36px;place-items:center;padding:0;border:0;border-radius:10px;background:var(--accent);color:var(--accent-foreground);cursor:pointer;transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}\n.send:active:not(:disabled){transform:scale(.94)}\n.send:disabled{opacity:.3;cursor:default}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"root":"root","stage":"stage","app":"app","appBar":"appBar","appNav":"appNav","appUser":"appUser","appHead":"appHead","appRows":"appRows","appStatus":"appStatus","dock":"dock","widget":"widget","card":"card","composer":"composer","iconButton":"iconButton","send":"send","sheet":"sheet","suggestions":"suggestions","talk":"talk","launcher":"launcher","launcherIcon":"launcherIcon","unread":"unread","panel":"panel","header":"header","backSlot":"backSlot","faceSlot":"faceSlot","face":"face","stackFace":"stackFace","headTitle":"headTitle","headStack":"headStack","swap":"swap","swapItem":"swapItem","body":"body","view":"view","greeting":"greeting","search":"search","listHead":"listHead","count":"count","list":"list","cardText":"cardText","empty":"empty","article":"article","meta":"meta","note":"note","byline":"byline","steps":"steps","feedback":"feedback","ask":"ask","askButtons":"askButtons","rated":"rated","sheetInner":"sheetInner","chatBody":"chatBody","thread":"thread","threadMeta":"threadMeta","mine":"mine","theirs":"theirs","bubble":"bubble","stamp":"stamp","typing":"typing","dockRow":"dockRow","stack":"stack","talkLabel":"talkLabel","talkMeta":"talkMeta","srOnly":"srOnly"});
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
A.cssFor("support-widget", [64444,79698,88690]);
A.item("support-widget", {entry:69574, export:"SupportWidget", kind:"block", tier:"pro", unresolved:[]});
})();