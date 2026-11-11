function(__module,__exports,__require){
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
}