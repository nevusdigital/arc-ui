function(__module,__exports,__require){
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
}