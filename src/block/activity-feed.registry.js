/* activity-feed (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(4214, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => n });
  var r = t(51811);
  let s = {
    name: "git-commit-horizontal",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
      ["line", { x1: "3", x2: "9", y1: "12", y2: "12", key: "1dyftd" }],
      ["line", { x1: "15", x2: "21", y1: "12", y2: "12", key: "oup4p8" }]
    ],
    aliases: ["git-commit"]
  };
  s.node;
  let n = (0, r.A)(s);
}

__m(__module,__exports,__require);
});
A.reg(17143, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  n.d(t, { A: () => l });
  var r = n(51811);
  let o = {
    name: "user-plus",
    size: 24,
    node: [
      [
        "path",
        { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }
      ],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
      ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
      ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
    ]
  };
  o.node;
  let l = (0, r.A)(o);
}

__m(__module,__exports,__require);
});
A.reg(25494, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "message-square",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
          key: "18887p"
        }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(26860, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { ActivityFeed: () => D, default: () => R });
  var i = a(95155), n = a(12115), s = a(5772), r = a(25354), o = a(80642), d = a(18310), l = a(25494), c = a(4214), m = a(44825), h = a(86210), p = a(17143), u = a(68394), y = a(64577), g = a(38158), f = a(65024), v = a(66558), _ = a(98344), x = a(7770), j = a(67752);
  let b = [
    {
      id: "a1",
      type: "comment",
      actor: "emma-collins",
      action: "commented on",
      target: "Pricing page v3",
      project: "Website",
      day: 0,
      time: "10:42",
      unread: true,
      detail: {
        kind: "comment",
        text: "Can we move the annual toggle above the cards? On 13 inch screens it pushes the main button below the fold."
      }
    },
    {
      id: "a2",
      type: "deploy",
      actor: "olivia-bennett",
      action: "deployed",
      target: "atlas-web to Production",
      project: "Atlas",
      day: 0,
      time: "10:05",
      unread: true,
      detail: {
        kind: "deploy",
        environment: "Production",
        commit: "a41f9c2 Cache plan limits per workspace",
        duration: "1m 48s",
        status: "ready"
      }
    },
    {
      id: "a3",
      type: "change",
      actor: "marcus-johnson",
      action: "changed",
      target: "checkout/summary.tsx",
      project: "Atlas",
      day: 0,
      time: "09:31",
      unread: true,
      detail: {
        kind: "diff",
        file: "app/checkout/summary.tsx",
        additions: 3,
        deletions: 2,
        lines: [
          {
            kind: "context",
            text: "const subtotal = sum(items.map(item => item.price * item.qty));"
          },
          { kind: "remove", text: "const tax = subtotal * 0.23;" },
          { kind: "remove", text: "const total = subtotal + tax;" },
          {
            kind: "add",
            text: "const rate = taxRates[address.country] ?? 0;"
          },
          { kind: "add", text: "const tax = round(subtotal * rate, 2);" },
          {
            kind: "add",
            text: "const total = round(subtotal + tax - discount, 2);"
          }
        ]
      }
    },
    {
      id: "a4",
      type: "file",
      actor: "jasmine-brooks",
      action: "added 4 photos to",
      target: "Autumn catalog",
      project: "Brand",
      day: 0,
      time: "08:57",
      unread: true,
      detail: {
        kind: "files",
        photos: [
          "lounge-chair",
          "table-lamp",
          "stoneware-cups",
          "linen-throw"
        ]
      }
    },
    {
      id: "a5",
      type: "member",
      actor: "sofia-ramirez",
      action: "invited Hannah Walsh to",
      target: "Support",
      project: "Workspace",
      day: 1,
      time: "17:20",
      unread: true
    },
    {
      id: "a6",
      type: "deploy",
      actor: "mateo-alvarez",
      action: "failed to deploy",
      target: "atlas-ios to Preview",
      project: "Atlas",
      day: 1,
      time: "16:02",
      unread: true,
      detail: {
        kind: "deploy",
        environment: "Preview",
        commit: "9be07d1 Swap image cache for the new loader",
        duration: "2m 11s",
        status: "failed",
        log: [
          "Compiling ImageLoader.swift",
          "error: cannot find 'DiskCache' in scope",
          "Build failed after 2m 11s"
        ]
      }
    },
    {
      id: "a7",
      type: "comment",
      actor: "chloe-nguyen",
      action: "commented on",
      target: "Q3 retention report",
      project: "Insights",
      day: 1,
      time: "14:48",
      unread: false,
      detail: {
        kind: "comment",
        text: "Week 6 retention is up 4 points for teams that finished onboarding. The dip in August lines up with the pricing test."
      }
    },
    {
      id: "a8",
      type: "change",
      actor: "daniel-kim",
      action: "fixed",
      target: "Webhook retries drop the idempotency key",
      project: "Platform",
      day: 1,
      time: "11:16",
      unread: false,
      detail: {
        kind: "diff",
        file: "services/webhooks/retry.ts",
        additions: 2,
        deletions: 1,
        lines: [
          { kind: "context", text: "for (const attempt of backoff(5)) {" },
          {
            kind: "remove",
            text: "  const response = await send(event.url, event.body);"
          },
          {
            kind: "add",
            text: '  const headers = { "Idempotency-Key": event.id };'
          },
          {
            kind: "add",
            text: "  const response = await send(event.url, event.body, { headers });"
          },
          { kind: "context", text: "  if (response.ok) return response;" }
        ]
      }
    },
    {
      id: "a9",
      type: "comment",
      actor: "ryan-sullivan",
      action: "commented on",
      target: "Lisbon Coffee Co. renewal",
      project: "Sales",
      day: 2,
      time: "15:37",
      unread: false,
      detail: {
        kind: "comment",
        text: "They signed for two years at 40 seats. Finance has the order form; kickoff is booked for October 6."
      }
    },
    {
      id: "a10",
      type: "file",
      actor: "ava-mitchell",
      action: "added 3 photos to",
      target: "Lisbon launch event",
      project: "Marketing",
      day: 2,
      time: "12:03",
      unread: false,
      detail: {
        kind: "files",
        photos: ["lisbon-tram", "lisbon-rooftops", "restaurant"]
      }
    },
    {
      id: "a11",
      type: "deploy",
      actor: "olivia-bennett",
      action: "deployed",
      target: "atlas-api to Production",
      project: "Atlas",
      day: 3,
      time: "18:44",
      unread: false,
      detail: {
        kind: "deploy",
        environment: "Production",
        commit: "e3c1a70 Rate limit exports per workspace",
        duration: "3m 02s",
        status: "ready"
      }
    },
    {
      id: "a12",
      type: "member",
      actor: "nathan-cole",
      action: "made Daniel Kim an admin of",
      target: "Platform",
      project: "Workspace",
      day: 3,
      time: "09:12",
      unread: false
    },
    {
      id: "a13",
      type: "change",
      actor: "emma-collins",
      action: "changed",
      target: "tokens/color.css",
      project: "Design system",
      day: 6,
      time: "16:25",
      unread: false,
      detail: {
        kind: "diff",
        file: "tokens/color.css",
        additions: 2,
        deletions: 2,
        lines: [
          { kind: "remove", text: "--border: oklch(92% 0 0);" },
          { kind: "remove", text: "--border-subtle: oklch(95% 0 0);" },
          { kind: "add", text: "--border: oklch(93.5% 0 0);" },
          { kind: "add", text: "--border-subtle: oklch(96.5% 0 0);" }
        ]
      }
    },
    {
      id: "a14",
      type: "comment",
      actor: "diane-foster",
      action: "commented on",
      target: "2027 hiring plan",
      project: "Operations",
      day: 9,
      time: "10:30",
      unread: false,
      detail: {
        kind: "comment",
        text: "Approved the two platform roles. Let's hold the second designer until Q1 numbers are in."
      }
    },
    {
      id: "a15",
      type: "member",
      actor: "tyler-hayes",
      action: "joined",
      target: "Sales",
      project: "Workspace",
      day: 13,
      time: "08:45",
      unread: false
    }
  ], w = [
    {
      id: "live-1",
      type: "comment",
      actor: "marcus-johnson",
      action: "replied on",
      target: "Pricing page v3",
      project: "Website",
      day: 0,
      time: "Just now",
      unread: true,
      detail: {
        kind: "comment",
        text: "Agreed. I'll move the toggle and keep the cards the same height so nothing jumps."
      }
    },
    {
      id: "live-2",
      type: "deploy",
      actor: "olivia-bennett",
      action: "deployed",
      target: "atlas-web to Preview",
      project: "Atlas",
      day: 0,
      time: "Just now",
      unread: true,
      detail: {
        kind: "deploy",
        environment: "Preview",
        commit: "c7d2e19 Move annual toggle above plan cards",
        duration: "1m 12s",
        status: "ready"
      }
    },
    {
      id: "live-3",
      type: "file",
      actor: "jasmine-brooks",
      action: "added 2 photos to",
      target: "Autumn catalog",
      project: "Brand",
      day: 0,
      time: "Just now",
      unread: true,
      detail: { kind: "files", photos: ["ceramic-lamp", "glass-carafe"] }
    }
  ];
  var k = a(99268), N = a.n(k);
  let A = { comment: l.A, change: c.A, deploy: m.A, file: h.A, member: p.A }, T = [
    { value: "all", label: "All" },
    { value: "comment", label: "Comments" },
    { value: "change", label: "Changes" },
    { value: "deploy", label: "Deploys" },
    { value: "file", label: "Files" }
  ], M = { today: 1, week: 7, month: 30 }, S = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ], C = [
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
  ], P = x.T.ease.inOut;
  function z({ detail: e2 }) {
    return "comment" === e2.kind ? (0, i.jsx)("blockquote", { className: N().comment, children: e2.text }) : "files" === e2.kind ? (0, i.jsx)("div", {
      className: N().photos,
      children: e2.photos.map((e3) => {
        let t2 = (0, j.jW)(e3);
        return (0, i.jsx)(
          "span",
          {
            className: N().photo,
            children: (0, i.jsx)(s.default, {
              src: t2.src,
              alt: t2.alt,
              fill: true,
              sizes: "84px"
            })
          },
          e3
        );
      })
    }) : "diff" === e2.kind ? (0, i.jsxs)("div", {
      className: N().diff,
      children: [
        (0, i.jsxs)("div", {
          className: N().diffHead,
          children: [
            (0, i.jsx)("span", { children: e2.file }),
            (0, i.jsxs)("span", {
              children: [
                (0, i.jsxs)("span", {
                  className: N().plus,
                  children: ["+", e2.additions]
                }),
                " ",
                (0, i.jsxs)("span", {
                  className: N().minus,
                  children: ["\u2212", e2.deletions]
                })
              ]
            })
          ]
        }),
        (0, i.jsx)("pre", {
          children: e2.lines.map(
            (e3, t2) => (0, i.jsxs)(
              "span",
              {
                className: N().diffLine,
                "data-kind": e3.kind,
                children: [
                  (0, i.jsx)("span", {
                    "aria-hidden": "true",
                    children: "add" === e3.kind ? "+" : "remove" === e3.kind ? "\u2212" : " "
                  }),
                  (0, i.jsx)("span", {
                    className: N().srOnly,
                    children: "add" === e3.kind ? "Added: " : "remove" === e3.kind ? "Removed: " : ""
                  }),
                  e3.text,
                  "\n"
                ]
              },
              t2
            )
          )
        })
      ]
    }) : (0, i.jsxs)("div", {
      className: N().deploy,
      children: [
        (0, i.jsxs)("dl", {
          children: [
            (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)("dt", { children: "Status" }),
                (0, i.jsx)("dd", {
                  children: (0, i.jsx)("span", {
                    className: N().state,
                    "data-state": e2.status,
                    children: "ready" === e2.status ? "Ready" : "Failed"
                  })
                })
              ]
            }),
            (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)("dt", { children: "Commit" }),
                (0, i.jsx)("dd", {
                  className: N().mono,
                  children: e2.commit
                })
              ]
            }),
            (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)("dt", { children: "Build time" }),
                (0, i.jsx)("dd", { children: e2.duration })
              ]
            })
          ]
        }),
        e2.log && (0, i.jsx)("pre", {
          className: N().log,
          children: e2.log.join("\n")
        })
      ]
    });
  }
  function I({ item: e2, open: t2, sweepDelay: a2, onToggle: d2, reduce: l2 }) {
    let c2 = (0, j.MV)(e2.actor), m2 = A[e2.type], h2 = `${(0, n.useId)()}-detail`, p2 = e2.detail?.kind === "comment" ? e2.detail.text : e2.detail?.kind === "deploy" ? e2.detail.commit : e2.detail?.kind === "diff" ? e2.detail.file : void 0, u2 = (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsxs)("span", {
          className: N().sentence,
          children: [
            (0, i.jsx)("strong", { children: c2.name }),
            " ",
            e2.action,
            " ",
            (0, i.jsx)("strong", { children: e2.target }),
            (0, i.jsx)("span", {
              className: N().srOnly,
              children: e2.unread ? ", unread" : ""
            })
          ]
        }),
        (0, i.jsxs)("span", {
          className: N().meta,
          children: [
            (0, i.jsx)("span", {
              className: N().metaProject,
              children: e2.project
            }),
            p2 && !t2 && (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("span", {
                  className: N().metaDot,
                  "aria-hidden": "true",
                  children: "\xB7"
                }),
                (0, i.jsx)("span", { children: p2 })
              ]
            })
          ]
        })
      ]
    }), y2 = (0, i.jsxs)("span", {
      className: N().side,
      children: [
        (0, i.jsx)("span", { className: N().time, children: e2.time }),
        (0, i.jsx)("span", {
          className: N().dotSlot,
          "aria-hidden": "true",
          children: (0, i.jsx)("span", { className: N().dot })
        })
      ]
    }), g2 = { "--sweep-delay": `${a2 ?? 0}ms` };
    return (0, i.jsxs)(r.PY1.li, {
      layout: !l2 && "position",
      className: N().item,
      "data-id": e2.id,
      "data-unread": e2.unread,
      style: g2,
      initial: l2 ? { opacity: 0 } : { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0 },
      transition: l2 ? { duration: x.T.duration.instant } : {
        layout: x.T.spring.smooth,
        y: x.T.spring.smooth,
        opacity: { duration: x.T.duration.standard }
      },
      children: [
        (0, i.jsxs)("span", {
          className: N().avatar,
          children: [
            (0, i.jsx)(s.default, {
              src: c2.src,
              alt: c2.name,
              width: 32,
              height: 32
            }),
            (0, i.jsx)("span", {
              className: N().badge,
              "data-tone": (function(e3) {
                if (e3.detail?.kind === "deploy")
                  return "failed" === e3.detail.status ? "danger" : "success";
              })(e2),
              "aria-hidden": "true",
              children: (0, i.jsx)(m2, { size: 10, strokeWidth: 2.25 })
            })
          ]
        }),
        (0, i.jsxs)("div", {
          className: N().body,
          children: [
            e2.detail ? (0, i.jsxs)("button", {
              type: "button",
              className: N().head,
              "aria-expanded": t2,
              "aria-controls": h2,
              onClick: d2,
              children: [
                (0, i.jsx)("span", {
                  className: N().headText,
                  children: u2
                }),
                y2
              ]
            }) : (0, i.jsxs)("div", {
              className: N().head,
              children: [
                (0, i.jsx)("span", {
                  className: N().headText,
                  children: u2
                }),
                y2
              ]
            }),
            (0, i.jsx)(o.N, {
              initial: false,
              children: t2 && e2.detail && (0, i.jsx)(r.PY1.div, {
                id: h2,
                className: N().detailWrap,
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: l2 ? { duration: 0 } : {
                  height: x.T.spring.smooth,
                  opacity: { duration: x.T.duration.standard }
                },
                children: (0, i.jsx)("div", {
                  className: N().detail,
                  children: (0, i.jsx)(z, { detail: e2.detail })
                })
              })
            })
          ]
        })
      ]
    });
  }
  function D({
    items: e2 = b,
    incoming: t2 = w,
    incomingInterval: a2 = 6e3,
    today: l2 = "2026-09-24",
    defaultRange: c2 = "week",
    onRead: m2,
    title: h2 = "Activity",
    className: p2
  }) {
    let k2 = !!(0, d.I)(), [A2, z2] = (0, n.useState)(e2), [R2, $] = (0, n.useState)([]), [O, W] = (0, n.useState)("all"), [E, F] = (0, n.useState)([]), [L, q] = (0, n.useState)(null), [H, G] = (0, n.useState)(""), Y = (0, n.useRef)(null), B = (0, n.useRef)(null), J = (0, n.useRef)(null), V = (0, n.useRef)(/* @__PURE__ */ new Set()), U = (0, n.useCallback)((e3, t3) => {
      let a3 = window.setTimeout(() => {
        V.current.delete(a3), e3();
      }, t3);
      V.current.add(a3);
    }, []);
    (0, n.useEffect)(() => {
      let e3 = V.current;
      return () => e3.forEach((e4) => window.clearTimeout(e4));
    }, []), (0, n.useEffect)(() => {
      if (!t2.length) return;
      let e3 = t2.map(
        (e4, t3) => window.setTimeout(
          () => $((t4) => t4.some((t5) => t5.id === e4.id) ? t4 : [e4, ...t4]),
          a2 * (t3 + 1) - 2e3
        )
      );
      return () => e3.forEach((e4) => window.clearTimeout(e4));
    }, [t2, a2]);
    let K = (0, n.useMemo)(() => A2.filter((e3) => e3.day < M[c2]), [A2, c2]), Q = (0, n.useMemo)(
      () => "all" === O ? K : K.filter((e3) => e3.type === O),
      [K, O]
    ), X = (0, n.useMemo)(() => {
      let e3 = /* @__PURE__ */ new Map();
      for (let t3 of Q) e3.set(t3.day, [...e3.get(t3.day) ?? [], t3]);
      return [...e3.entries()].sort((e4, t3) => e4[0] - t3[0]);
    }, [Q]), Z = (0, n.useMemo)(
      () => T.map((e3) => {
        let t3 = "all" === e3.value ? K.length : K.filter((t4) => t4.type === e3.value).length;
        return {
          value: e3.value,
          label: e3.label,
          accessory: (0, i.jsx)("span", {
            className: N().count,
            children: t3
          })
        };
      }),
      [K]
    ), ee = A2.filter((e3) => e3.unread).length;
    return (0, i.jsxs)("div", {
      className: `${N().root} ${p2 ?? ""}`,
      children: [
        (0, i.jsxs)("div", {
          className: N().frame,
          children: [
            (0, i.jsxs)("header", {
              className: N().header,
              children: [
                (0, i.jsxs)("div", {
                  className: N().titleRow,
                  children: [
                    (0, i.jsx)("h2", { children: h2 }),
                    (0, i.jsxs)("span", {
                      className: N().unread,
                      children: [
                        (0, i.jsx)("span", {
                          className: N().inherit,
                          children: (0, i.jsx)(f.q, { value: ee })
                        }),
                        "\xA0unread"
                      ]
                    })
                  ]
                }),
                (0, i.jsxs)("button", {
                  type: "button",
                  className: N().markAll,
                  onClick: function() {
                    let e3 = A2.filter((e4) => e4.unread).map((e4) => e4.id);
                    if (!e3.length) return;
                    let t3 = B.current, a3 = Y.current, i2 = {}, n2 = 0;
                    if (t3 && a3 && !k2) {
                      let e4 = a3.scrollTop, s2 = Math.min(t3.scrollHeight - e4, a3.clientHeight);
                      n2 = Math.max(700, Math.min(1100, 1.6 * s2));
                      let r2 = t3.getBoundingClientRect().top + e4;
                      t3.querySelectorAll("[data-id]").forEach((e5) => {
                        let t4 = e5.getBoundingClientRect().top - r2;
                        i2[e5.dataset.id] = Math.round(
                          (function(e6) {
                            let [t5, a4, i3, n3] = P, s3 = (e7, t6, a5) => 3 * t6 * e7 * (1 - e7) ** 2 + 3 * a5 * e7 * e7 * (1 - e7) + e7 ** 3, r3 = 0, o2 = 1;
                            for (let t6 = 0; t6 < 24; t6++) {
                              let t7 = (r3 + o2) / 2;
                              s3(t7, a4, n3) < e6 ? r3 = t7 : o2 = t7;
                            }
                            return s3((r3 + o2) / 2, t5, i3);
                          })(Math.min(1, Math.max(0, t4 / s2))) * n2
                        );
                      }), J.current?.animate(
                        [
                          { transform: `translateY(${e4}px)`, opacity: 0 },
                          { opacity: 1, offset: 0.08 },
                          { opacity: 1, offset: 0.88 },
                          { transform: `translateY(${e4 + s2}px)`, opacity: 0 }
                        ],
                        {
                          duration: n2,
                          easing: `cubic-bezier(${P.join(",")})`
                        }
                      );
                    }
                    q({ delays: i2, duration: n2 }), z2(
                      (e4) => e4.map((e5) => e5.unread ? { ...e5, unread: false } : e5)
                    ), m2?.(e3), G(
                      `${e3.length} ${1 === e3.length ? "update" : "updates"} marked read`
                    ), U(() => q(null), n2 + 600);
                  },
                  disabled: !ee,
                  children: [
                    ee ? (0, i.jsx)(u.A, { size: 15, "aria-hidden": "true" }) : (0, i.jsx)(y.A, { size: 15, "aria-hidden": "true" }),
                    (0, i.jsx)(_.g, {
                      children: ee ? "Mark all read" : "All caught up"
                    })
                  ]
                })
              ]
            }),
            (0, i.jsx)("div", {
              className: N().filters,
              children: (0, i.jsx)(v.A, {
                className: N().segment,
                options: Z,
                value: O,
                onValueChange: (e3) => W(e3),
                label: "Filter by type"
              })
            }),
            (0, i.jsx)(o.N, {
              initial: false,
              children: R2.length > 0 && (0, i.jsx)(
                r.PY1.div,
                {
                  className: N().incoming,
                  initial: k2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: k2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                  transition: k2 ? { duration: x.T.duration.fast } : {
                    height: x.T.spring.smooth,
                    opacity: { duration: x.T.duration.standard }
                  },
                  children: (0, i.jsx)("div", {
                    className: N().incomingInner,
                    children: (0, i.jsxs)("button", {
                      type: "button",
                      className: N().pill,
                      onClick: function() {
                        if (!R2.length) return;
                        let e3 = R2.length;
                        z2((e4) => [...R2, ...e4]), $([]), W("all"), Y.current?.scrollTo({
                          top: 0,
                          behavior: k2 ? "auto" : "smooth"
                        }), G(
                          `${e3} new ${1 === e3 ? "update" : "updates"} shown`
                        );
                      },
                      children: [
                        (0, i.jsx)("span", {
                          className: N().stack,
                          "aria-hidden": "true",
                          children: (0, i.jsx)(o.N, {
                            initial: false,
                            children: R2.slice(0, 3).map((e3) => {
                              let t3 = (0, j.MV)(e3.actor);
                              return (0, i.jsx)(
                                r.PY1.span,
                                {
                                  className: N().stackItem,
                                  layout: !k2,
                                  initial: k2 ? { opacity: 0 } : { opacity: 0, scale: 0.6 },
                                  animate: { opacity: 1, scale: 1 },
                                  transition: k2 ? { duration: 0 } : x.T.spring.snappy,
                                  children: (0, i.jsx)(s.default, {
                                    src: t3.src,
                                    alt: "",
                                    width: 22,
                                    height: 22
                                  })
                                },
                                e3.id
                              );
                            })
                          })
                        }),
                        (0, i.jsxs)("span", {
                          className: N().pillText,
                          children: [
                            (0, i.jsx)("span", {
                              className: N().inherit,
                              children: (0, i.jsx)(f.q, { value: R2.length })
                            }),
                            "\xA0new\xA0",
                            (0, i.jsx)(_.g, {
                              children: 1 === R2.length ? "update" : "updates"
                            })
                          ]
                        }),
                        (0, i.jsx)(g.A, { size: 14, "aria-hidden": "true" })
                      ]
                    })
                  })
                },
                "incoming"
              )
            }),
            (0, i.jsx)("div", {
              className: N().main,
              children: (0, i.jsx)("div", {
                ref: Y,
                className: N().scroller,
                children: (0, i.jsxs)("div", {
                  ref: B,
                  className: N().list,
                  "data-sweeping": L ? "" : void 0,
                  children: [
                    (0, i.jsx)("div", {
                      ref: J,
                      className: N().sweepLine,
                      "aria-hidden": "true"
                    }),
                    (0, i.jsx)(o.N, {
                      initial: false,
                      mode: "wait",
                      children: (0, i.jsxs)(
                        r.PY1.div,
                        {
                          initial: k2 ? { opacity: 0 } : { opacity: 0, y: 6 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0 },
                          transition: k2 ? { duration: x.T.duration.instant } : {
                            opacity: { duration: x.T.duration.fast },
                            y: x.T.spring.smooth
                          },
                          children: [
                            (0, i.jsx)(o.N, {
                              initial: false,
                              mode: "popLayout",
                              children: X.map(([e3, t3]) => {
                                let a3, n2, s2 = ((a3 = /* @__PURE__ */ new Date(
                                  `${l2}T12:00:00Z`
                                )).setUTCDate(a3.getUTCDate() - e3), n2 = `${C[a3.getUTCMonth()]} ${a3.getUTCDate()}`, 0 === e3 ? { title: "Today", date: n2 } : 1 === e3 ? { title: "Yesterday", date: n2 } : { title: S[a3.getUTCDay()], date: n2 });
                                return (0, i.jsxs)(
                                  r.PY1.section,
                                  {
                                    layout: !k2 && "position",
                                    className: N().group,
                                    "aria-label": s2.title,
                                    initial: { opacity: 0 },
                                    animate: { opacity: 1 },
                                    exit: { opacity: 0 },
                                    transition: k2 ? { duration: 0 } : {
                                      layout: x.T.spring.smooth,
                                      opacity: {
                                        duration: x.T.duration.standard
                                      }
                                    },
                                    children: [
                                      (0, i.jsxs)("h3", {
                                        className: N().day,
                                        children: [
                                          (0, i.jsx)("span", {
                                            children: s2.title
                                          }),
                                          (0, i.jsx)("span", {
                                            className: N().dayDate,
                                            children: s2.date
                                          })
                                        ]
                                      }),
                                      (0, i.jsx)("ol", {
                                        className: N().items,
                                        children: (0, i.jsx)(o.N, {
                                          initial: false,
                                          mode: "popLayout",
                                          children: t3.map(
                                            (e4) => (0, i.jsx)(
                                              I,
                                              {
                                                item: e4,
                                                open: E.includes(e4.id),
                                                sweepDelay: L?.delays[e4.id],
                                                onToggle: () => {
                                                  F(
                                                    (t4) => t4.includes(e4.id) ? t4.filter(
                                                      (t5) => t5 !== e4.id
                                                    ) : [...t4, e4.id]
                                                  ), e4.unread && (z2(
                                                    (t4) => t4.map(
                                                      (t5) => t5.id === e4.id ? {
                                                        ...t5,
                                                        unread: false
                                                      } : t5
                                                    )
                                                  ), m2?.([e4.id]));
                                                },
                                                reduce: k2
                                              },
                                              e4.id
                                            )
                                          )
                                        })
                                      })
                                    ]
                                  },
                                  e3
                                );
                              })
                            }),
                            !X.length && (0, i.jsxs)("div", {
                              className: N().empty,
                              children: [
                                (0, i.jsx)("p", {
                                  children: "Nothing of this type yet"
                                }),
                                (0, i.jsx)("button", {
                                  type: "button",
                                  className: N().emptyButton,
                                  onClick: () => W("all"),
                                  children: "Show all activity"
                                })
                              ]
                            })
                          ]
                        },
                        O
                      )
                    })
                  ]
                })
              })
            })
          ]
        }),
        (0, i.jsx)("p", {
          className: N().srOnly,
          role: "status",
          "aria-live": "polite",
          children: H
        })
      ]
    });
  }
  let R = D;
}

__m(__module,__exports,__require);
});
A.reg(44825, function(__module,__exports,__require){
"use strict";
function __m(e, t, o) {
  o.d(t, { A: () => a });
  var r = o(51811);
  let n = {
    name: "rocket",
    size: 24,
    node: [
      ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
      [
        "path",
        {
          d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
          key: "u4xsad"
        }
      ],
      [
        "path",
        {
          d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
          key: "676m9"
        }
      ],
      [
        "path",
        { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05", key: "92ym6u" }
      ]
    ]
  };
  n.node;
  let a = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.regCss(64444, ".frame,.frame.frame{position:relative;display:inline-block;box-sizing:content-box;padding:.5em .5em .5em .2em;margin:-.5em -.5em -.5em -.2em;text-align:start;white-space:nowrap;mask-image:linear-gradient(90deg,#000 calc(100% - .5em),transparent)}\n.track{position:relative;display:inline-block;white-space:nowrap}\n.glyph{display:inline-block;white-space:pre;transform-origin:50% 60%}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0;user-select:none}", {"frame":"frame","track":"track","glyph":"glyph","srOnly":"srOnly"});
A.reg(68394, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var i = a(51811);
  let n = {
    name: "check-check",
    size: 24,
    node: [
      ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
      ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
    ]
  };
  n.node;
  let s = (0, i.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(86210, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "image",
    size: 24,
    node: [
      [
        "rect",
        {
          width: "18",
          height: "18",
          x: "3",
          y: "3",
          rx: "2",
          ry: "2",
          key: "1m3agn"
        }
      ],
      ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
      [
        "path",
        { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
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
A.regCss(99268, ".root{container-type:inline-size;width:min(100%,720px);min-width:0;margin-inline:auto;color:var(--foreground);font-family:var(--font-body);font-size:13px;letter-spacing:var(--tracking-body)}\n.frame{display:grid;grid-template-columns:minmax(0,1fr);grid-template-rows:auto auto auto minmax(0,1fr);height:660px;overflow:hidden;border:1px solid var(--border);border-radius:20px;background:var(--surface)}\n.header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:18px 16px 14px 24px}\n@container (max-width: 440px){.header{padding-left:16px;padding-right:12px}\n.titleRow{display:flex;min-width:0;align-items:baseline;gap:10px}\n.titleRow h2{margin:0;font-size:var(--text-base);font-weight:500;letter-spacing:var(--tracking-body);line-height:1.4}\n.unread{display:inline-flex;align-items:baseline;color:var(--text-muted);font-size:var(--text-sm);font-variant-numeric:tabular-nums;white-space:nowrap}\n@container (max-width: 360px){.unread{display:none}\n.inherit>span{color:inherit;font:inherit;letter-spacing:inherit}\n.markAll{display:inline-flex;height:32px;flex:none;align-items:center;gap:7px;border:1px solid var(--border);border-radius:10px;padding:0 12px 0 10px;background:var(--surface);color:var(--foreground);font:inherit;font-size:13px;font-weight:500;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.markAll>svg{flex:none;color:var(--accent);transition:color var(--duration-fast) var(--ease-standard)}\n.markAll:active:not(:disabled){transform:scale(.97)}\n.markAll:disabled{border-color:transparent;color:var(--text-muted);cursor:default}\n.markAll:disabled>svg{color:var(--success)}\n@media (hover:hover) and (pointer:fine){.markAll:not(:disabled):hover{border-color:var(--border-strong);background:var(--surface-muted)}\n@media (prefers-reduced-motion:reduce){.chevron,.dot,.item,.markAll,.markAll>svg,.pill,.sentence strong{transition-duration:0s;transition-delay:0s}\n.filters{display:flex;align-items:center;border-bottom:1px solid var(--border-subtle);padding:0 24px 14px}\n.day,.filters{padding-inline:16px}\n.segment{--control-height-sm:28px;--radius-control:11px;--text-sm:13px;display:flex;min-width:0;max-width:100%}\n.count{color:var(--text-muted);font-weight:400;font-variant-numeric:tabular-nums}\n@container (max-width: 520px){.count{display:none}\n.incoming{overflow:hidden}\n.incomingInner{display:flex;justify-content:center;padding:12px 24px 0}\n.pill{display:inline-flex;height:32px;align-items:center;gap:8px;border:0;border-radius:var(--radius-pill);padding:0 14px 0 6px;background:var(--accent);color:var(--accent-foreground);font:inherit;font-size:13px;font-weight:500;white-space:nowrap;cursor:pointer;font-variant-numeric:tabular-nums;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)}\n.pill:active{transform:scale(.97)}\n@media (hover:hover) and (pointer:fine){.pill:hover{background:var(--accent-strong)}\n.pillText{display:inline-flex;align-items:baseline}\n.stack{display:inline-flex;flex:none;align-items:center}\n.stack>*+*{margin-left:-6px}\n.stackItem{display:block;width:22px;height:22px;flex:none;overflow:hidden;border-radius:50%;box-shadow:0 0 0 2px var(--accent)}\n.stackItem img{display:block;width:100%;height:100%;object-fit:cover}\n.main{position:relative;min-height:0}\n.scroller{height:100%;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:var(--border-strong) transparent;-webkit-mask-image:linear-gradient(180deg,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(180deg,#000 calc(100% - 40px),transparent)}\n.list{position:relative;padding:4px 0 40px}\n.sweepLine{position:absolute;z-index:3;top:0;right:16px;left:16px;height:1px;background:var(--accent);opacity:0;pointer-events:none}\n.group{position:relative}\n.day{display:flex;align-items:baseline;gap:8px;margin:0;padding:16px 24px 6px;color:var(--text-secondary);font-size:12px;font-weight:500}\n.dayDate{color:var(--text-muted);font-weight:400}\n.items{position:relative;isolation:isolate;margin:0;padding:0 12px;list-style:none}\n.items{padding-inline:4px}\n.item{position:relative;display:grid;grid-template-columns:32px minmax(0,1fr);gap:0 12px;border-radius:14px;padding:10px 12px;transition:background-color var(--duration-fast) var(--ease-standard)}\n.item:after{content:\"\";position:absolute;z-index:-1;top:48px;bottom:-6px;left:28px;width:1px;background:var(--border-subtle)}\n.item:last-child:after{display:none}\n@media (hover:hover) and (pointer:fine){.item:has(>.body>button.head:hover){background:color-mix(in oklab,var(--surface-muted) 70%,transparent)}\n.item[data-unread=false] .sentence strong{color:color-mix(in oklab,var(--foreground) 78%,var(--text-secondary))}\n.item[data-unread=true] .dot{opacity:1;transform:scale(1);transition-delay:0s}\n.body{min-width:0}\n.head{display:grid;width:100%;grid-template-columns:minmax(0,1fr) auto;align-items:start;gap:12px;border:0;padding:0;background:transparent;color:inherit;font:inherit;text-align:left}\nbutton.head{cursor:pointer;-webkit-tap-highlight-color:transparent;--focus-outline-offset:4px;border-radius:6px}\n.head[aria-expanded=true] .chevron{opacity:1;transform:rotate(180deg)}\n@media (hover:hover) and (pointer:fine){button.head:hover .chevron{opacity:1;color:var(--foreground)}\n.avatar{position:relative;width:32px;height:32px;align-self:start}\n.avatar>img{display:block;width:32px;height:32px;border-radius:50%;object-fit:cover;box-shadow:0 0 0 1px color-mix(in oklab,var(--foreground) 8%,transparent)}\n.badge{position:absolute;right:-4px;bottom:-3px;display:grid;width:17px;height:17px;place-items:center;border-radius:50%;background:var(--surface-raised);box-shadow:0 0 0 2px var(--surface),inset 0 0 0 1px var(--border);color:var(--text-secondary)}\n.badge[data-tone=success]{color:var(--success)}\n.badge[data-tone=danger]{color:var(--danger)}\n.headText{display:grid;min-width:0;gap:2px}\n.sentence{color:var(--text-secondary);font-size:var(--text-sm);line-height:1.45}\n.sentence strong{color:var(--foreground);font-weight:500;transition:color .36s var(--ease-standard) var(--sweep-delay,0s)}\n.meta{display:flex;min-width:0;align-items:center;gap:6px;color:var(--text-muted);font-size:12px;line-height:1.5}\n.meta>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.metaDot,.metaProject{flex:none}\n.side{display:inline-flex;align-items:center;gap:8px;padding-top:2px}\n.time{color:var(--text-muted);font-size:12px;font-variant-numeric:tabular-nums;white-space:nowrap}\n.time{display:none}\n.dotSlot{display:grid;width:8px;height:16px;place-items:center}\n.dot{width:7px;height:7px;border-radius:50%;background:var(--accent);opacity:0;transform:scale(.2);transition:opacity .22s var(--ease-standard) var(--sweep-delay,0s),transform var(--duration-spring) var(--ease-spring) var(--sweep-delay,0s)}\n.chevron{flex:none;color:var(--text-muted);opacity:0;transition:opacity var(--duration-fast) var(--ease-standard),transform var(--duration-standard) var(--ease-standard)}\n@media (hover:none){.chevron{opacity:1}\n.chevronSpace{width:14px}\n.detailWrap{overflow:hidden}\n.detail{padding-top:10px}\n.comment{margin:0;border:1px solid var(--border-subtle);border-radius:12px;padding:10px 14px;background:var(--surface-muted);color:var(--foreground);font-size:var(--text-sm);line-height:1.5}\n.photos{display:grid;grid-template-columns:repeat(auto-fill,minmax(68px,84px));gap:6px}\n.photo{position:relative;overflow:hidden;aspect-ratio:1;border-radius:10px;background:var(--surface-muted);box-shadow:inset 0 0 0 1px var(--border-subtle)}\n.photo img{object-fit:cover}\n.diff{overflow:hidden;border:1px solid var(--border-subtle);border-radius:12px;background:var(--surface-muted)}\n.diff pre{margin:0;overflow-x:auto;padding:6px 0;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11.5px;line-height:1.65}\n.diffHead{display:flex;justify-content:space-between;gap:12px;border-bottom:1px solid var(--border-subtle);padding:7px 12px;color:var(--text-secondary);font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px}\n.diffHead>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.plus{color:var(--success)}\n.minus{color:var(--danger)}\n.diffLine{display:block;padding:0 12px;white-space:pre}\n.diffLine>span:first-child{display:inline-block;width:14px;color:var(--text-muted)}\n.diffLine[data-kind=add]{background:color-mix(in oklab,var(--success) 10%,transparent)}\n.diffLine[data-kind=add]>span:first-child{color:var(--success)}\n.diffLine[data-kind=remove]{background:color-mix(in oklab,var(--danger) 9%,transparent)}\n.diffLine[data-kind=remove]>span:first-child{color:var(--danger)}\n.deploy{border:1px solid var(--border-subtle);border-radius:12px;padding:10px 14px;background:var(--surface-muted)}\n.deploy dl{display:grid;gap:6px;margin:0}\n.deploy dl>div{display:grid;grid-template-columns:76px minmax(0,1fr);gap:8px;align-items:baseline}\n.deploy dt{color:var(--text-muted);font-size:12px}\n.deploy dd{min-width:0;margin:0;overflow:hidden;font-size:12px;text-overflow:ellipsis;white-space:nowrap}\n.mono{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11.5px!important}\n.state{display:inline-flex;align-items:center;gap:6px}\n.state:before{content:\"\";width:6px;height:6px;border-radius:50%;background:var(--success)}\n.state[data-state=failed]:before{background:var(--danger)}\n.log{margin:10px 0 0;overflow-x:auto;border-top:1px solid var(--border-subtle);padding:8px 0 0;color:var(--text-secondary);font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11.5px;line-height:1.6}\n.empty{display:grid;justify-items:center;gap:12px;padding:72px 20px;color:var(--text-muted);text-align:center}\n.empty p{margin:0}\n.emptyButton{height:32px;border:1px solid var(--border);border-radius:10px;padding:0 12px;background:var(--surface);color:var(--foreground);font:inherit;font-size:13px;cursor:pointer}\n@media (hover:hover) and (pointer:fine){.emptyButton:hover{border-color:var(--border-strong)}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}", {"root":"root","frame":"frame","header":"header","titleRow":"titleRow","unread":"unread","inherit":"inherit","markAll":"markAll","chevron":"chevron","dot":"dot","item":"item","pill":"pill","sentence":"sentence","filters":"filters","day":"day","segment":"segment","count":"count","incoming":"incoming","incomingInner":"incomingInner","pillText":"pillText","stack":"stack","stackItem":"stackItem","main":"main","scroller":"scroller","list":"list","sweepLine":"sweepLine","group":"group","dayDate":"dayDate","items":"items","body":"body","head":"head","avatar":"avatar","badge":"badge","headText":"headText","meta":"meta","metaDot":"metaDot","metaProject":"metaProject","side":"side","time":"time","dotSlot":"dotSlot","chevronSpace":"chevronSpace","detailWrap":"detailWrap","detail":"detail","comment":"comment","photos":"photos","photo":"photo","diff":"diff","diffHead":"diffHead","plus":"plus","minus":"minus","diffLine":"diffLine","deploy":"deploy","mono":"mono","state":"state","log":"log","empty":"empty","emptyButton":"emptyButton","srOnly":"srOnly"});
A.cssFor("activity-feed", [64444,99268]);
A.item("activity-feed", {entry:26860, export:"ActivityFeed", kind:"block", tier:"pro", unresolved:[]});
})();