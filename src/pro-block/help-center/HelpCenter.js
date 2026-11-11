function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { HelpCenter: () => G, default: () => J, searchArticles: () => D });
  var s = a(95155), n = a(12115), i = a(18310), r = a(80642), o = a(25354), l = a(57700), c = a(28245), d = a(92171), h = a(44825), p = a(71019), u = a(57465), m = a(55737), y = a(51811);
  let g = {
    name: "shield",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
          key: "oel41y"
        }
      ]
    ]
  };
  g.node;
  let k = (0, y.A)(g);
  var x = a(57990), _ = a(49237), b = a(31966), j = a(36483), f = a(76721), v = a(92571), w = a(64577), N = a(65377), S = a(9005), A = a(6923), C = a(90467), T = a(62818), I = a(70105), M = a(7770);
  let z = [
    {
      id: "start",
      name: "Getting started",
      description: "Set up your workspace and invite your team.",
      icon: "start"
    },
    {
      id: "billing",
      name: "Account and billing",
      description: "Plans, invoices, payment methods, and receipts.",
      icon: "billing"
    },
    {
      id: "team",
      name: "Workspaces and teams",
      description: "Roles, permissions, and guest access.",
      icon: "team"
    },
    {
      id: "integrations",
      name: "Integrations",
      description: "Connect Slack, GitHub, Google Drive, and more.",
      icon: "integrations"
    },
    {
      id: "security",
      name: "Security and privacy",
      description: "Single sign-on, two-factor, and data exports.",
      icon: "security"
    },
    {
      id: "troubleshooting",
      name: "Troubleshooting",
      description: "Fix sync issues, sign-in problems, and errors.",
      icon: "troubleshooting"
    }
  ], R = [
    {
      id: "invite-teammates",
      title: "Invite teammates to your workspace",
      categoryId: "start",
      summary: "Send invites by email or share a link, and choose what each person can do.",
      updated: "Sep 18, 2026",
      minutes: 3,
      popular: true,
      sections: [
        {
          id: "before",
          heading: "Before you start",
          paragraphs: [
            "Only workspace owners and admins can invite people. Members can request an invite, and an admin approves it from Settings, then Members.",
            "Each invite uses a seat on paid plans. Guests do not use a seat and can only see the projects you share with them."
          ]
        },
        {
          id: "email",
          heading: "Invite by email",
          paragraphs: [
            "Invites expire after 7 days. You can resend or revoke a pending invite at any time."
          ],
          steps: [
            "Open Settings, then Members.",
            "Select Invite people and enter one or more email addresses.",
            "Choose a role for everyone on the list.",
            "Select Send invites."
          ]
        },
        {
          id: "link",
          heading: "Share an invite link",
          paragraphs: [
            "An invite link lets anyone with an allowed email domain join as a member. Turn on the link under Settings, then Members, then Invite link, and add your company domain.",
            "Reset the link if it was shared somewhere it should not be. The old link stops working right away."
          ]
        },
        {
          id: "roles",
          heading: "Choose the right role",
          paragraphs: [
            "Owners manage billing and can delete the workspace. Admins manage members and settings. Members create and edit projects. Guests only see what is shared with them.",
            "You can change someone's role later from the Members list."
          ]
        }
      ]
    },
    {
      id: "update-payment",
      title: "Update your payment method",
      categoryId: "billing",
      summary: "Change the card on file or switch to invoice billing for annual plans.",
      updated: "Sep 2, 2026",
      minutes: 2,
      popular: true,
      sections: [
        {
          id: "card",
          heading: "Change the card on file",
          paragraphs: [
            "Your new card is charged from the next billing date. We never store full card numbers."
          ],
          steps: [
            "Open Settings, then Billing.",
            "Select Update next to your current card.",
            "Enter the new card details and select Save."
          ]
        },
        {
          id: "invoice",
          heading: "Pay by invoice",
          paragraphs: [
            "Annual plans with 20 seats or more can pay by bank transfer. Contact us from this page and we will switch your workspace to invoice billing within one business day."
          ]
        },
        {
          id: "failed",
          heading: "If a payment fails",
          paragraphs: [
            "We retry a failed payment three times over 10 days and email the billing contact each time. Your workspace stays fully available while we retry."
          ]
        }
      ]
    },
    {
      id: "download-invoices",
      title: "Download invoices and receipts",
      categoryId: "billing",
      summary: "Find every invoice in one place and add your company details.",
      updated: "Aug 27, 2026",
      minutes: 2,
      popular: true,
      sections: [
        {
          id: "find",
          heading: "Find your invoices",
          paragraphs: [
            "Every invoice is listed under Settings, then Billing, then Invoices. Select Download to save a PDF."
          ]
        },
        {
          id: "details",
          heading: "Add company details",
          paragraphs: [
            "Add your legal company name, address, and VAT number under Billing details. They appear on every invoice from then on."
          ]
        }
      ]
    },
    {
      id: "sso",
      title: "Set up single sign-on with SAML",
      categoryId: "security",
      summary: "Let your team sign in with Okta, Microsoft Entra ID, or Google Workspace.",
      updated: "Sep 20, 2026",
      minutes: 6,
      popular: true,
      sections: [
        {
          id: "requirements",
          heading: "Requirements",
          paragraphs: [
            "Single sign-on is available on the Business and Enterprise plans. You need to be a workspace owner and an admin in your identity provider.",
            "Verify your email domain first, under Settings, then Security, then Domains."
          ]
        },
        {
          id: "configure",
          heading: "Configure your identity provider",
          paragraphs: [
            "Create a new SAML application in your identity provider and paste the values from Settings, then Security, then Single sign-on."
          ],
          steps: [
            "Copy the ACS URL and Entity ID from Northwind.",
            "Paste them into a new SAML app in your provider.",
            "Map the email attribute to the user's primary email.",
            "Download the metadata XML from your provider."
          ]
        },
        {
          id: "connect",
          heading: "Connect Northwind",
          paragraphs: [
            "Upload the metadata XML in Northwind and select Test connection. You will be asked to sign in through your provider once.",
            "When the test passes, choose whether single sign-on is optional or required for everyone on your domain."
          ]
        },
        {
          id: "enforce",
          heading: "Enforce sign-in",
          paragraphs: [
            "When single sign-on is required, people with a verified domain email can only sign in through your provider. Owners keep a backup password so you never lock yourself out."
          ]
        }
      ]
    },
    {
      id: "two-factor",
      title: "Turn on two-factor authentication",
      categoryId: "security",
      summary: "Protect your account with an authenticator app or a security key.",
      updated: "Jul 14, 2026",
      minutes: 3,
      sections: [
        {
          id: "app",
          heading: "Use an authenticator app",
          paragraphs: [
            "Open Account, then Security, and select Turn on two-factor. Scan the code with your authenticator app and enter the six digit code it shows."
          ]
        },
        {
          id: "backup",
          heading: "Save your backup codes",
          paragraphs: [
            "Store your backup codes somewhere safe. Each code works once if you lose access to your phone."
          ]
        }
      ]
    },
    {
      id: "connect-slack",
      title: "Connect Slack",
      categoryId: "integrations",
      summary: "Get project updates in a channel and create tasks from messages.",
      updated: "Sep 11, 2026",
      minutes: 4,
      popular: true,
      sections: [
        {
          id: "install",
          heading: "Install the app",
          paragraphs: [
            "Open Settings, then Integrations, and select Connect next to Slack. Sign in to Slack and choose the workspace to connect."
          ]
        },
        {
          id: "channels",
          heading: "Send updates to a channel",
          paragraphs: [
            "In any project, open the menu and select Notifications. Pick a channel and the events you want to post, such as new tasks, comments, and status changes."
          ]
        },
        {
          id: "tasks",
          heading: "Create tasks from messages",
          paragraphs: [
            "Hover a Slack message, open More actions, and select Create task. The message and a link back to it are added to the task."
          ]
        }
      ]
    },
    {
      id: "github",
      title: "Link GitHub pull requests",
      categoryId: "integrations",
      summary: "Show pull request status on tasks and close them when code merges.",
      updated: "Aug 30, 2026",
      minutes: 3,
      sections: [
        {
          id: "connect",
          heading: "Connect a repository",
          paragraphs: [
            "Select Connect next to GitHub, install the Northwind app on your organization, and pick the repositories to share."
          ]
        },
        {
          id: "link",
          heading: "Link a pull request",
          paragraphs: [
            "Add the task key, like WEB-214, to a branch name or pull request title. The task shows the pull request and its checks, and moves to Done when it merges."
          ]
        }
      ]
    },
    {
      id: "roles",
      title: "Roles and permissions",
      categoryId: "team",
      summary: "What owners, admins, members, and guests can do.",
      updated: "Sep 5, 2026",
      minutes: 4,
      sections: [
        {
          id: "overview",
          heading: "Overview",
          paragraphs: [
            "Every person in a workspace has one role. Roles decide who can manage billing, invite people, and change settings."
          ]
        },
        {
          id: "guests",
          heading: "Guests",
          paragraphs: [
            "Guests are ideal for clients and contractors. They only see the projects you share with them and cannot browse the rest of the workspace."
          ]
        }
      ]
    },
    {
      id: "sync-issues",
      title: "Changes are not syncing",
      categoryId: "troubleshooting",
      summary: "What to check when edits do not appear for your teammates.",
      updated: "Sep 21, 2026",
      minutes: 3,
      popular: true,
      sections: [
        {
          id: "status",
          heading: "Check the connection",
          paragraphs: [
            "A small cloud icon in the sidebar shows your sync status. If it shows a slash, you are offline and changes are saved locally until you reconnect."
          ]
        },
        {
          id: "refresh",
          heading: "Refresh and sign in again",
          paragraphs: [
            "Reload the page. If changes still do not appear, sign out and sign back in to refresh your session."
          ]
        },
        {
          id: "extensions",
          heading: "Browser extensions",
          paragraphs: [
            "Ad blockers and privacy extensions can block the sync connection. Allow northwind.app in the extension, or try a private window to confirm."
          ]
        }
      ]
    },
    {
      id: "reset-password",
      title: "Reset your password",
      categoryId: "troubleshooting",
      summary: "Get back into your account when you cannot sign in.",
      updated: "Jun 30, 2026",
      minutes: 1,
      sections: [
        {
          id: "reset",
          heading: "Send a reset link",
          paragraphs: [
            "On the sign-in page select Forgot password and enter your email. The link is valid for 30 minutes."
          ]
        },
        {
          id: "sso",
          heading: "Signing in with single sign-on",
          paragraphs: [
            "If your company uses single sign-on, reset your password with your identity provider instead."
          ]
        }
      ]
    },
    {
      id: "create-workspace",
      title: "Create your first workspace",
      categoryId: "start",
      summary: "Name your workspace, pick a URL, and set up your first project.",
      updated: "Sep 1, 2026",
      minutes: 2,
      sections: [
        {
          id: "create",
          heading: "Create the workspace",
          paragraphs: [
            "After you sign up, choose a name and a URL for your workspace. You can change both later in Settings."
          ]
        },
        {
          id: "project",
          heading: "Start a project",
          paragraphs: [
            "Select New project, pick a template or start blank, and invite the people you work with."
          ]
        }
      ]
    }
  ];
  var W = a(86088), B = a.n(W);
  let L = {
    start: (0, s.jsx)(h.A, { size: 18, strokeWidth: 1.75 }),
    billing: (0, s.jsx)(p.A, { size: 18, strokeWidth: 1.75 }),
    team: (0, s.jsx)(u.A, { size: 18, strokeWidth: 1.75 }),
    integrations: (0, s.jsx)(m.A, { size: 18, strokeWidth: 1.75 }),
    security: (0, s.jsx)(k, { size: 18, strokeWidth: 1.75 }),
    troubleshooting: (0, s.jsx)(x.A, { size: 18, strokeWidth: 1.75 })
  }, O = [...M.T.ease.enter], q = [...M.T.ease.standard], H = { duration: 0 }, E = (e2) => "home" === e2.kind ? 0 : "category" === e2.kind ? 1 : 2;
  function D(e2, t2) {
    let a2 = e2.toLowerCase().split(/\s+/).filter(Boolean);
    return a2.length ? t2.map((e3) => {
      let t3 = e3.title.toLowerCase(), s2 = e3.summary.toLowerCase(), n2 = e3.sections.map(
        (e4) => `${e4.heading} ${e4.paragraphs.join(" ")} ${(e4.steps ?? []).join(" ")}`
      ).join(" ").toLowerCase(), i2 = 0;
      for (let r2 of a2)
        if (t3.includes(r2)) i2 += t3.startsWith(r2) ? 6 : 4;
        else if (s2.includes(r2)) i2 += 2;
        else {
          if (!n2.includes(r2)) return { article: e3, score: 0 };
          i2 += 1;
        }
      return { article: e3, score: i2 + 0.5 * !!e3.popular };
    }).filter((e3) => e3.score > 0).sort((e3, t3) => t3.score - e3.score).map((e3) => e3.article) : [];
  }
  function $({ text: e2, query: t2 }) {
    let a2 = t2.trim().split(/\s+/).filter(Boolean).map((e3) => e3.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    if (!a2.length) return (0, s.jsx)(s.Fragment, { children: e2 });
    let i2 = e2.split(RegExp(`(${a2.join("|")})`, "gi"));
    return (0, s.jsx)(s.Fragment, {
      children: i2.map(
        (e3, t3) => t3 % 2 ? (0, s.jsx)("mark", { children: e3 }, t3) : (0, s.jsx)(n.Fragment, { children: e3 }, t3)
      )
    });
  }
  function G({
    articles: e2 = R,
    categories: t2 = z,
    brand: a2 = "Northwind",
    heading: l2 = "How can we help?",
    defaultArticleId: c2,
    search: d2 = D,
    onFeedback: h2,
    onContact: p2,
    onArticleOpen: u2,
    suggestions: m2 = ["invoice", "single sign-on", "slack"],
    className: y2
  }) {
    let g2, k2, x2 = !!(0, i.I)(), [j2, f2] = (0, n.useState)(
      c2 ? { kind: "article", id: c2 } : { kind: "home" }
    ), [v2, w2] = (0, n.useState)(1), N2 = (0, n.useRef)(null), S2 = (0, n.useMemo)(() => new Map(e2.map((e3) => [e3.id, e3])), [e2]), A2 = (e3) => t2.find((t3) => t3.id === e3), C2 = (e3) => {
      if (w2(E(e3) >= E(j2) ? 1 : -1), f2(e3), "article" === e3.kind) {
        let t3 = S2.get(e3.id);
        t3 && u2?.(t3);
      }
    }, T2 = (e3) => C2({ kind: "article", id: e3.id }), I2 = "article" === j2.kind ? S2.get(j2.id) : void 0, W2 = e2.filter((e3) => e3.popular).slice(0, 6), H2 = 16 * !x2;
    return (0, s.jsxs)("div", {
      className: [B().root, y2].filter(Boolean).join(" "),
      children: [
        (0, s.jsxs)("header", {
          className: B().top,
          children: [
            (0, s.jsxs)("button", {
              type: "button",
              className: B().brand,
              onClick: () => C2({ kind: "home" }),
              children: [
                (0, s.jsx)(_.A, {
                  size: 18,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                (0, s.jsx)("span", { children: a2 }),
                (0, s.jsx)("span", {
                  className: B().brandMuted,
                  children: "Help"
                })
              ]
            }),
            (0, s.jsx)(r.N, {
              initial: false,
              children: "home" !== j2.kind && (0, s.jsx)(
                o.PY1.div,
                {
                  className: B().topSearch,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: {
                    opacity: 0,
                    transition: { duration: M.T.duration.instant }
                  },
                  transition: { duration: x2 ? 0 : M.T.duration.fast },
                  children: (0, s.jsx)(P, {
                    size: "sm",
                    articles: e2,
                    categories: t2,
                    search: d2,
                    onOpen: T2,
                    reduced: x2
                  })
                },
                "search"
              )
            })
          ]
        }),
        (0, s.jsx)("div", {
          ref: N2,
          className: B().scroll,
          children: (0, s.jsx)(r.N, {
            mode: "wait",
            initial: false,
            custom: v2,
            onExitComplete: () => N2.current?.scrollTo({ top: 0 }),
            children: (0, s.jsxs)(
              o.PY1.div,
              {
                className: B().view,
                initial: { opacity: 0, x: v2 * H2 },
                animate: { opacity: 1, x: 0 },
                exit: {
                  opacity: 0,
                  x: -(v2 * H2) / 2,
                  transition: {
                    duration: x2 ? 0 : M.T.duration.instant,
                    ease: q
                  }
                },
                transition: x2 ? { duration: M.T.duration.fast } : { duration: M.T.duration.standard, ease: O },
                children: [
                  "home" === j2.kind && (0, s.jsxs)("div", {
                    className: B().home,
                    children: [
                      (0, s.jsxs)("section", {
                        className: B().hero,
                        children: [
                          (0, s.jsx)("h2", { children: l2 }),
                          (0, s.jsx)(P, {
                            size: "lg",
                            articles: e2,
                            categories: t2,
                            search: d2,
                            onOpen: T2,
                            reduced: x2,
                            suggestions: m2
                          })
                        ]
                      }),
                      (0, s.jsxs)("section", {
                        "aria-labelledby": "help-categories",
                        className: B().section,
                        children: [
                          (0, s.jsx)("h3", {
                            id: "help-categories",
                            className: B().sectionTitle,
                            children: "Browse by topic"
                          }),
                          (0, s.jsx)("ul", {
                            className: B().categories,
                            children: t2.map((t3) => {
                              let a3 = e2.filter(
                                (e3) => e3.categoryId === t3.id
                              ).length;
                              return (0, s.jsx)(
                                "li",
                                {
                                  children: (0, s.jsxs)("button", {
                                    type: "button",
                                    className: B().category,
                                    onClick: () => C2({ kind: "category", id: t3.id }),
                                    children: [
                                      (0, s.jsx)("span", {
                                        className: B().categoryIcon,
                                        "aria-hidden": "true",
                                        children: L[t3.icon]
                                      }),
                                      (0, s.jsx)("span", {
                                        className: B().categoryName,
                                        children: t3.name
                                      }),
                                      (0, s.jsx)("span", {
                                        className: B().categoryText,
                                        children: t3.description
                                      }),
                                      (0, s.jsxs)("span", {
                                        className: B().categoryCount,
                                        children: [
                                          a3,
                                          " ",
                                          1 === a3 ? "article" : "articles"
                                        ]
                                      })
                                    ]
                                  })
                                },
                                t3.id
                              );
                            })
                          })
                        ]
                      }),
                      (0, s.jsxs)("section", {
                        "aria-labelledby": "help-popular",
                        className: B().section,
                        children: [
                          (0, s.jsx)("h3", {
                            id: "help-popular",
                            className: B().sectionTitle,
                            children: "Popular articles"
                          }),
                          (0, s.jsx)(Y, {
                            articles: W2,
                            category: A2,
                            onOpen: T2
                          })
                        ]
                      }),
                      (0, s.jsx)(F, { onContact: p2 })
                    ]
                  }),
                  "category" === j2.kind && (g2 = A2(j2.id), k2 = e2.filter((e3) => e3.categoryId === j2.id), (0, s.jsxs)("div", {
                    className: B().narrow,
                    children: [
                      (0, s.jsx)("nav", {
                        className: B().crumbs,
                        "aria-label": "Breadcrumb",
                        children: (0, s.jsxs)("button", {
                          type: "button",
                          onClick: () => C2({ kind: "home" }),
                          children: [
                            (0, s.jsx)(b.A, {
                              size: 15,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            }),
                            "All topics"
                          ]
                        })
                      }),
                      (0, s.jsxs)("div", {
                        className: B().categoryHead,
                        children: [
                          (0, s.jsx)("span", {
                            className: B().categoryIcon,
                            "aria-hidden": "true",
                            children: g2 && L[g2.icon]
                          }),
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("h2", { children: g2?.name }),
                              (0, s.jsx)("p", { children: g2?.description })
                            ]
                          })
                        ]
                      }),
                      (0, s.jsx)(Y, {
                        articles: k2,
                        category: A2,
                        onOpen: T2,
                        showSummary: true
                      })
                    ]
                  })),
                  "article" === j2.kind && I2 && (0, s.jsx)(
                    U,
                    {
                      article: I2,
                      category: A2(I2.categoryId),
                      related: e2.filter(
                        (e3) => e3.categoryId === I2.categoryId && e3.id !== I2.id
                      ).slice(0, 3),
                      scroller: N2,
                      reduced: x2,
                      onBack: () => C2({ kind: "category", id: I2.categoryId }),
                      onHome: () => C2({ kind: "home" }),
                      onOpen: T2,
                      onFeedback: h2
                    },
                    I2.id
                  ),
                  "article" === j2.kind && !I2 && (0, s.jsxs)("div", {
                    className: B().narrow,
                    children: [
                      (0, s.jsx)("p", {
                        children: "This article was moved or deleted."
                      }),
                      (0, s.jsx)("button", {
                        type: "button",
                        className: B().secondary,
                        onClick: () => C2({ kind: "home" }),
                        children: "Back to help center"
                      })
                    ]
                  })
                ]
              },
              "home" === j2.kind ? "home" : `${j2.kind}-${j2.id}`
            )
          })
        })
      ]
    });
  }
  function Y({ articles: e2, category: t2, onOpen: a2, showSummary: n2 }) {
    return (0, s.jsx)("ul", {
      className: B().articles,
      children: e2.map(
        (e3) => (0, s.jsx)(
          "li",
          {
            children: (0, s.jsxs)("button", {
              type: "button",
              className: B().articleRow,
              onClick: () => a2(e3),
              children: [
                (0, s.jsx)(j.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                (0, s.jsxs)("span", {
                  className: B().articleRowText,
                  children: [
                    (0, s.jsx)("span", {
                      className: B().articleRowTitle,
                      children: e3.title
                    }),
                    (0, s.jsx)("span", {
                      className: B().muted,
                      children: n2 ? e3.summary : t2(e3.categoryId)?.name
                    })
                  ]
                }),
                (0, s.jsx)(f.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true",
                  className: B().chevron
                })
              ]
            })
          },
          e3.id
        )
      )
    });
  }
  function F({ onContact: e2 }) {
    let [t2, a2] = (0, n.useState)("idle"), i2 = async () => {
      if ("idle" === t2) {
        a2("busy");
        try {
          e2 ? await e2() : await new Promise((e3) => setTimeout(e3, 700)), a2("sent");
        } catch {
          a2("idle");
        }
      }
    };
    return (0, s.jsxs)("section", {
      className: B().contact,
      children: [
        (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)("h3", { children: "Still need help?" }),
            (0, s.jsx)("p", {
              className: B().muted,
              children: "sent" === t2 ? "Request sent. We reply by email within one business day." : "Our support team replies within one business day."
            })
          ]
        }),
        (0, s.jsx)("button", {
          type: "button",
          className: B().primary,
          onClick: i2,
          disabled: "sent" === t2,
          "aria-live": "polite",
          children: (0, s.jsxs)("span", {
            className: B().stack,
            children: [
              (0, s.jsx)("span", {
                "data-shown": "idle" === t2,
                children: "Contact support"
              }),
              (0, s.jsxs)("span", {
                "data-shown": "busy" === t2,
                children: [
                  (0, s.jsx)(v.A, {
                    size: 15,
                    strokeWidth: 1.75,
                    className: B().spin,
                    "aria-hidden": "true"
                  }),
                  "Sending"
                ]
              }),
              (0, s.jsxs)("span", {
                "data-shown": "sent" === t2,
                children: [
                  (0, s.jsx)(w.A, {
                    size: 15,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  }),
                  "Request sent"
                ]
              })
            ]
          })
        })
      ]
    });
  }
  function P({
    size: e2,
    articles: t2,
    categories: a2,
    search: i2,
    onOpen: l2,
    reduced: c2,
    suggestions: d2
  }) {
    let [h2, p2] = (0, n.useState)(""), [u2, m2] = (0, n.useState)(false), [y2, g2] = (0, n.useState)(0), k2 = (0, n.useRef)(null), x2 = (0, n.useId)(), _2 = (0, n.useMemo)(() => i2(h2, t2).slice(0, 6), [i2, h2, t2]), b2 = u2 && h2.trim().length > 0, j2 = Math.min(y2, Math.max(0, _2.length - 1)), f2 = (e3) => {
      p2(""), m2(false), k2.current?.blur(), l2(e3);
    };
    return (0, s.jsxs)("div", {
      className: B().search,
      "data-size": e2,
      "data-open": b2 || void 0,
      onBlur: (e3) => {
        e3.currentTarget.contains(e3.relatedTarget) || m2(false);
      },
      children: [
        (0, s.jsxs)("div", {
          className: B().field,
          children: [
            (0, s.jsx)(N.A, {
              size: "lg" === e2 ? 18 : 15,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            (0, s.jsx)("input", {
              ref: k2,
              type: "text",
              role: "combobox",
              "aria-expanded": b2,
              "aria-controls": x2,
              "aria-autocomplete": "list",
              "aria-activedescendant": b2 && _2[j2] ? `${x2}-${_2[j2].id}` : void 0,
              value: h2,
              onChange: (e3) => {
                p2(e3.target.value), g2(0);
              },
              onFocus: () => m2(true),
              onKeyDown: (e3) => {
                "ArrowDown" === e3.key || "ArrowUp" === e3.key ? _2.length && (e3.preventDefault(), g2(
                  (j2 + ("ArrowDown" === e3.key ? 1 : -1) + _2.length) % _2.length
                )) : "Enter" === e3.key ? _2[j2] && (e3.preventDefault(), f2(_2[j2])) : "Escape" === e3.key && (h2 ? (e3.preventDefault(), p2("")) : k2.current?.blur());
              },
              placeholder: "lg" === e2 ? "Search articles, like invite or SSO" : "Search help",
              "aria-label": "Search help articles",
              autoComplete: "off",
              spellCheck: false
            }),
            h2 && (0, s.jsx)("button", {
              type: "button",
              className: B().clear,
              onClick: () => {
                p2(""), k2.current?.focus();
              },
              "aria-label": "Clear search",
              children: (0, s.jsx)(S.A, { size: 14, strokeWidth: 1.75 })
            })
          ]
        }),
        d2 && (0, s.jsxs)("p", {
          className: B().suggest,
          children: [
            "Try ",
            d2.map(
              (e3) => (0, s.jsx)(
                "button",
                {
                  type: "button",
                  className: B().suggestion,
                  onClick: () => {
                    p2(e3), g2(0), k2.current?.focus();
                  },
                  children: e3
                },
                e3
              )
            )
          ]
        }),
        (0, s.jsx)(r.N, {
          children: b2 && (0, s.jsxs)(o.PY1.div, {
            className: B().results,
            initial: c2 ? { opacity: 0 } : { opacity: 0, y: -4, scale: 0.985 },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: {
              opacity: 0,
              transition: { duration: M.T.duration.instant }
            },
            transition: c2 ? H : { duration: M.T.duration.fast, ease: O },
            children: [
              (0, s.jsx)("ul", {
                id: x2,
                role: "listbox",
                "aria-label": "Matching articles",
                children: _2.map((e3, t3) => {
                  let n2, i3;
                  return (0, s.jsxs)(
                    "li",
                    {
                      id: `${x2}-${e3.id}`,
                      role: "option",
                      "aria-selected": t3 === j2,
                      className: B().result,
                      onMouseDown: (e4) => e4.preventDefault(),
                      onMouseMove: () => {
                        t3 !== j2 && g2(t3);
                      },
                      onClick: () => f2(e3),
                      children: [
                        (0, s.jsx)("span", {
                          className: B().resultTitle,
                          children: (0, s.jsx)($, {
                            text: e3.title,
                            query: h2
                          })
                        }),
                        (0, s.jsx)("span", {
                          className: B().resultSnippet,
                          children: (0, s.jsx)($, {
                            text: (n2 = h2.toLowerCase().split(/\s+/).filter((e4) => e4.length > 1), e3.sections.flatMap((e4) => [
                              ...e4.paragraphs,
                              ...e4.steps ?? []
                            ]).join(" ").split(/(?<=\.)\s+/).find(
                              (e4) => n2.some((t4) => e4.toLowerCase().includes(t4))
                            ) ?? e3.summary),
                            query: h2
                          })
                        }),
                        (0, s.jsx)("span", {
                          className: B().resultMeta,
                          children: (i3 = e3.categoryId, a2.find((e4) => e4.id === i3)?.name)
                        })
                      ]
                    },
                    e3.id
                  );
                })
              }),
              !_2.length && (0, s.jsxs)("p", {
                className: B().noResults,
                children: [
                  "No articles match \u201C",
                  h2.trim(),
                  "\u201D. Try fewer words."
                ]
              }),
              (0, s.jsxs)("p", {
                className: B().srOnly,
                role: "status",
                "aria-live": "polite",
                children: [
                  _2.length,
                  " ",
                  1 === _2.length ? "result" : "results"
                ]
              })
            ]
          })
        })
      ]
    });
  }
  function U({
    article: e2,
    category: t2,
    related: a2,
    scroller: i2,
    reduced: r2,
    onBack: c2,
    onHome: d2,
    onOpen: h2,
    onFeedback: p2
  }) {
    let [u2, m2] = (0, n.useState)(e2.sections[0]?.id), y2 = (0, n.useId)(), g2 = (0, n.useRef)(null), k2 = (0, n.useRef)(0);
    return (0, n.useEffect)(() => {
      let e3 = i2.current;
      if (!e3) return;
      let t3 = () => {
        if (performance.now() < k2.current) return;
        let t4 = e3.getBoundingClientRect().top + 96, a3 = [...g2.current?.querySelectorAll("[data-section]") ?? []], s2 = e3.scrollTop + e3.clientHeight >= e3.scrollHeight - 4 ? a3[a3.length - 1] : a3.filter((e4) => e4.getBoundingClientRect().top <= t4).pop() ?? a3[0];
        s2 && m2(s2.dataset.section);
      };
      return e3.addEventListener("scroll", t3, { passive: true }), () => e3.removeEventListener("scroll", t3);
    }, [i2]), (0, s.jsxs)("div", {
      className: B().articleLayout,
      children: [
        (0, s.jsxs)("article", {
          className: B().article,
          children: [
            (0, s.jsxs)("nav", {
              className: B().crumbs,
              "aria-label": "Breadcrumb",
              children: [
                (0, s.jsx)("button", {
                  type: "button",
                  onClick: d2,
                  children: "Help"
                }),
                (0, s.jsx)(f.A, {
                  size: 14,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                (0, s.jsx)("button", {
                  type: "button",
                  onClick: c2,
                  children: t2?.name ?? "Articles"
                })
              ]
            }),
            (0, s.jsx)("h2", {
              className: B().articleTitle,
              children: e2.title
            }),
            (0, s.jsxs)("p", {
              className: B().articleMeta,
              children: [
                (0, s.jsxs)("span", { children: ["Updated ", e2.updated] }),
                (0, s.jsx)("span", {
                  "aria-hidden": "true",
                  children: "\xB7"
                }),
                (0, s.jsxs)("span", {
                  className: B().metaIcon,
                  children: [
                    (0, s.jsx)(A.A, {
                      size: 13,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    e2.minutes,
                    " min read"
                  ]
                })
              ]
            }),
            (0, s.jsx)("p", { className: B().lede, children: e2.summary }),
            (0, s.jsx)("div", {
              ref: g2,
              className: B().prose,
              children: e2.sections.map(
                (e3) => (0, s.jsxs)(
                  "section",
                  {
                    "aria-labelledby": `${y2}-${e3.id}`,
                    children: [
                      (0, s.jsx)("h3", {
                        id: `${y2}-${e3.id}`,
                        "data-section": e3.id,
                        tabIndex: -1,
                        children: e3.heading
                      }),
                      e3.paragraphs.map(
                        (e4) => (0, s.jsx)("p", { children: e4 }, e4)
                      ),
                      e3.steps && (0, s.jsx)("ol", {
                        children: e3.steps.map(
                          (e4) => (0, s.jsx)("li", { children: e4 }, e4)
                        )
                      })
                    ]
                  },
                  e3.id
                )
              )
            }),
            (0, s.jsx)(
              V,
              { articleId: e2.id, reduced: r2, onFeedback: p2 },
              e2.id
            ),
            a2.length > 0 && (0, s.jsxs)("section", {
              className: B().related,
              "aria-labelledby": `${y2}-related`,
              children: [
                (0, s.jsx)("h3", {
                  id: `${y2}-related`,
                  className: B().sectionTitle,
                  children: "Related articles"
                }),
                (0, s.jsx)("ul", {
                  children: a2.map(
                    (e3) => (0, s.jsx)(
                      "li",
                      {
                        children: (0, s.jsxs)("button", {
                          type: "button",
                          onClick: () => h2(e3),
                          children: [
                            e3.title,
                            (0, s.jsx)(C.A, {
                              size: 14,
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
              ]
            })
          ]
        }),
        e2.sections.length > 1 && (0, s.jsxs)("aside", {
          className: B().toc,
          "aria-label": "On this page",
          children: [
            (0, s.jsx)("p", {
              className: B().tocTitle,
              children: "On this page"
            }),
            (0, s.jsx)(l.o, {
              id: y2,
              children: (0, s.jsx)("ul", {
                children: e2.sections.map(
                  (e3) => (0, s.jsx)(
                    "li",
                    {
                      children: (0, s.jsxs)("button", {
                        type: "button",
                        "aria-current": u2 === e3.id ? "location" : void 0,
                        onClick: (t3) => {
                          var a3, s2;
                          let n2, o2;
                          return a3 = e3.id, s2 = t3.timeStamp, n2 = i2.current, o2 = g2.current?.querySelector(
                            `[data-section="${a3}"]`
                          ), void (n2 && o2 && (m2(a3), k2.current = s2 + (r2 ? 50 : 700), n2.scrollTo({
                            top: n2.scrollTop + o2.getBoundingClientRect().top - n2.getBoundingClientRect().top - 20,
                            behavior: r2 ? "auto" : "smooth"
                          }), o2.focus({ preventScroll: true })));
                        },
                        children: [
                          u2 === e3.id && (0, s.jsx)(o.PY1.span, {
                            layoutId: "toc-bar",
                            className: B().tocBar,
                            transition: r2 ? H : M.T.spring.snappy
                          }),
                          e3.heading
                        ]
                      })
                    },
                    e3.id
                  )
                )
              })
            })
          ]
        })
      ]
    });
  }
  function V({ articleId: e2, reduced: t2, onFeedback: a2 }) {
    let [i2, l2] = (0, n.useState)("ask"), [h2, p2] = (0, n.useState)(""), [u2, m2] = (0, n.useState)(false), y2 = (0, n.useRef)(null), g2 = (0, n.useRef)(null), k2 = (0, c.d)("auto");
    (0, n.useEffect)(() => {
      let e3 = g2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let a3 = false, s2 = new ResizeObserver(() => {
        let s3 = e3.offsetHeight;
        if (!a3 || t2) {
          a3 = s3 > 0, k2.jump(s3 || "auto");
          return;
        }
        (0, d.i)(k2, s3, M.T.spring.smooth);
      });
      return s2.observe(e3), () => s2.disconnect();
    }, [k2, t2]);
    let x2 = async (t3, s2) => {
      m2(true);
      try {
        await a2?.(e2, t3, s2), l2("thanks");
      } catch {
      }
      m2(false);
    }, _2 = {
      initial: t2 ? { opacity: 0 } : { opacity: 0, y: 6, filter: `blur(${M.T.blur.subtle}px)` },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: { opacity: 0, transition: { duration: M.T.duration.instant } },
      transition: t2 ? H : { duration: M.T.duration.standard, ease: O }
    };
    return (0, s.jsx)(o.PY1.section, {
      className: B().feedback,
      "aria-live": "polite",
      style: { height: k2 },
      children: (0, s.jsx)("div", {
        ref: g2,
        className: B().feedbackInner,
        children: (0, s.jsxs)(r.N, {
          mode: "wait",
          initial: false,
          children: [
            "ask" === i2 && (0, s.jsxs)(
              o.PY1.div,
              {
                className: B().feedbackRow,
                ..._2,
                children: [
                  (0, s.jsx)("p", { children: "Was this article helpful?" }),
                  (0, s.jsxs)("div", {
                    className: B().votes,
                    children: [
                      (0, s.jsxs)("button", {
                        type: "button",
                        className: B().vote,
                        onClick: () => x2(true),
                        disabled: u2,
                        children: [
                          (0, s.jsx)(T.A, {
                            size: 15,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          "Yes"
                        ]
                      }),
                      (0, s.jsxs)("button", {
                        type: "button",
                        className: B().vote,
                        onClick: () => {
                          l2("comment"), requestAnimationFrame(() => y2.current?.focus());
                        },
                        children: [
                          (0, s.jsx)(I.A, {
                            size: 15,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          "No"
                        ]
                      })
                    ]
                  })
                ]
              },
              "ask"
            ),
            "comment" === i2 && (0, s.jsxs)(
              o.PY1.form,
              {
                className: B().feedbackForm,
                ..._2,
                onSubmit: (e3) => {
                  e3.preventDefault(), x2(false, h2.trim() || void 0);
                },
                children: [
                  (0, s.jsx)("label", {
                    htmlFor: `${e2}-comment`,
                    children: "What was missing?"
                  }),
                  (0, s.jsx)("textarea", {
                    ref: y2,
                    id: `${e2}-comment`,
                    value: h2,
                    onChange: (e3) => p2(e3.target.value),
                    rows: 3,
                    placeholder: "Tell us what you were looking for"
                  }),
                  (0, s.jsxs)("div", {
                    className: B().votes,
                    children: [
                      (0, s.jsx)("button", {
                        type: "button",
                        className: B().vote,
                        onClick: () => l2("ask"),
                        children: "Back"
                      }),
                      (0, s.jsx)("button", {
                        type: "submit",
                        className: B().primary,
                        disabled: u2,
                        children: "Send feedback"
                      })
                    ]
                  })
                ]
              },
              "comment"
            ),
            "thanks" === i2 && (0, s.jsx)(
              o.PY1.div,
              {
                className: B().feedbackRow,
                ..._2,
                children: (0, s.jsxs)("p", {
                  className: B().thanks,
                  children: [
                    (0, s.jsx)(w.A, {
                      size: 16,
                      strokeWidth: 1.75,
                      "aria-hidden": "true"
                    }),
                    "Thanks for the feedback."
                  ]
                })
              },
              "thanks"
            )
          ]
        })
      })
    });
  }
  let J = G;
}

__m(__module,__exports,__require);
}