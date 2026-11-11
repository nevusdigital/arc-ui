/* agent-status (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(797, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => h });
  var d = t(51811);
  let l = {
    name: "file-pen",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",
          key: "o6klzx"
        }
      ],
      ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
      [
        "path",
        {
          d: "M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",
          key: "zhnas1"
        }
      ]
    ],
    aliases: ["file-edit"]
  };
  l.node;
  let h = (0, d.A)(l);
}

__m(__module,__exports,__require);
});
A.reg(8143, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => h });
  var d = t(51811);
  let l = {
    name: "list-checks",
    size: 24,
    node: [
      ["path", { d: "M13 5h8", key: "a7qcls" }],
      ["path", { d: "M13 12h8", key: "h98zly" }],
      ["path", { d: "M13 19h8", key: "c3s6r1" }],
      ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
      ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]
    ]
  };
  l.node;
  let h = (0, d.A)(l);
}

__m(__module,__exports,__require);
});
A.reg(10323, function(__module,__exports,__require){
"use strict";
function __m(e, t, s) {
  "use strict";
  s.r(t), s.d(t, { AgentStatusDemo: () => ed, default: () => eu });
  var a = s(95155), n = s(12115), i = s(92298), r = s(79196), o = s(25354), l = s(18310), d = s(28245), u = s(7890), c = s(92171), p = s(80642), h = s(91906), m = s(79267), g = s(36619), f = s(64577), x = s(40852), v = s(9005), _ = s(9751), y = s(7770), b = s(51288);
  function j() {
    let e2, t2, s2 = Date.now(), a2 = false, n2 = 0, i2 = [], r2 = /* @__PURE__ */ new Set(), o2 = () => {
      let e3 = i2[i2.length - 1];
      return e3 && void 0 === e3[1] ? e3 : void 0;
    }, l2 = () => {
      let e3 = t2 ?? o2()?.[0] ?? Date.now();
      e3 !== s2 && (s2 = e3, r2.forEach((e4) => e4()));
    }, d2 = () => {
      window.clearInterval(n2), a2 && r2.size && (n2 = window.setInterval(l2, 250));
    };
    return {
      subscribe: (e3) => (r2.add(e3), d2(), l2(), () => {
        r2.delete(e3), d2();
      }),
      getSnapshot: () => s2,
      sync(s3) {
        let n3 = Date.now();
        s3.startedAt !== e2 && (e2 = s3.startedAt, i2.length = 0, t2 = void 0);
        let r3 = "paused" === s3.status || "failed" === s3.status, u2 = o2();
        r3 && !u2 && i2.push([n3, void 0]), !r3 && u2 && (u2[1] = n3), t2 = "done" === s3.status || "stopped" === s3.status ? s3.endedAt ?? t2 ?? n3 : void 0, a2 = "working" === s3.status || "needs-input" === s3.status, d2(), l2();
      },
      since(e3, t3) {
        if (void 0 === e3) return 0;
        let s3 = 0;
        for (let [a3, n3] of i2)
          s3 += Math.max(0, Math.min(n3 ?? t3, t3) - Math.max(a3, e3));
        return Math.max(0, t3 - e3 - s3);
      }
    };
  }
  let w = (e2) => String(e2).padStart(2, "0");
  function k(e2) {
    let t2 = Math.floor(e2 / 1e3), s2 = Math.floor(t2 / 3600), a2 = Math.floor(t2 % 3600 / 60), n2 = t2 % 60;
    return s2 ? `${s2}h ${a2}m` : a2 ? `${a2}m ${n2}s` : `${n2}s`;
  }
  function N(e2) {
    let t2 = Math.floor(e2 / 1e3), s2 = Math.floor(t2 / 60), a2 = t2 % 60, n2 = (e3, t3) => `${e3} ${t3}${1 === e3 ? "" : "s"}`;
    return s2 ? `${n2(s2, "minute")} ${n2(a2, "second")}` : n2(a2, "second");
  }
  var $ = s(66060), A = s.n($);
  let R = [...y.T.ease.standard], S = [...y.T.ease.enter];
  function L({ state: e2, mark: t2, reduced: s2 }) {
    let n2 = "done" === e2 ? "check" : "failed" === e2 ? "cross" : "stopped" === e2 ? "stop" : "mark", i2 = "done" === e2 || "failed" === e2, r2 = s2 ? { duration: y.T.duration.instant } : { type: "spring", visualDuration: 0.22, bounce: 0 };
    return (0, a.jsxs)("span", {
      className: A().orb,
      "data-state": e2,
      "aria-hidden": "true",
      children: [
        (0, a.jsxs)("svg", {
          className: A().ring,
          viewBox: "0 0 24 24",
          fill: "none",
          children: [
            (0, a.jsx)("circle", {
              className: A().track,
              cx: "12",
              cy: "12",
              r: "10.75"
            }),
            (0, a.jsx)("g", {
              className: A().spinner,
              children: (0, a.jsx)("circle", {
                className: A().arc,
                cx: "12",
                cy: "12",
                r: "10.75",
                pathLength: 100,
                strokeDasharray: "24 76"
              })
            }),
            (0, a.jsx)(o.PY1.circle, {
              className: A().closed,
              cx: "12",
              cy: "12",
              r: "10.75",
              initial: false,
              animate: { pathLength: +!!i2, opacity: +!!i2 },
              transition: s2 ? { duration: 0 } : {
                pathLength: { duration: 0.42, ease: S },
                opacity: { duration: y.T.duration.instant }
              }
            })
          ]
        }),
        (0, a.jsx)(p.N, {
          initial: false,
          children: (0, a.jsx)(
            o.PY1.span,
            {
              className: A().glyph,
              "data-glyph": n2,
              initial: s2 ? { opacity: 0 } : { opacity: 0, scale: 0.4 },
              animate: { opacity: 1, scale: 1 },
              exit: s2 ? { opacity: 0, transition: { duration: 0 } } : {
                opacity: 0,
                scale: 0.4,
                transition: { duration: y.T.duration.instant, ease: R }
              },
              transition: r2,
              children: "mark" === n2 ? t2 : "stop" === n2 ? (0, a.jsx)("span", { className: A().stopGlyph }) : (0, a.jsx)("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                children: (0, a.jsx)(o.PY1.path, {
                  d: "check" === n2 ? "M5.5 12.5l4.25 4.25L18.5 7.75" : "M7.5 7.5l9 9M16.5 7.5l-9 9",
                  initial: !s2 && { pathLength: 0 },
                  animate: { pathLength: 1 },
                  transition: { duration: 0.28, delay: 0.12, ease: S }
                })
              })
            },
            n2
          )
        }),
        (0, a.jsx)(p.N, {
          children: "needs-input" === e2 ? (0, a.jsx)(
            o.PY1.span,
            {
              className: A().dot,
              initial: s2 ? { opacity: 0 } : { opacity: 0, scale: 0 },
              animate: { opacity: 1, scale: 1 },
              exit: {
                opacity: 0,
                scale: +!!s2,
                transition: { duration: y.T.duration.instant }
              },
              transition: r2
            },
            "dot"
          ) : null
        })
      ]
    });
  }
  function C({ view: e2, reduced: t2 }) {
    let s2 = e2.icon;
    return (0, a.jsx)("span", {
      className: A().labelSlot,
      children: (0, a.jsx)(p.N, {
        mode: "popLayout",
        initial: false,
        children: (0, a.jsxs)(
          o.PY1.span,
          {
            className: A().labelUnit,
            "data-tone": e2.tone,
            initial: t2 ? { opacity: 0 } : { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            exit: t2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -12, transition: { duration: 0.14, ease: R } },
            transition: { duration: t2 ? y.T.duration.instant : 0.18, ease: R },
            children: [
              s2 ? (0, a.jsx)(s2, {
                className: A().labelIcon,
                size: 16,
                strokeWidth: 1.75,
                "aria-hidden": "true"
              }) : null,
              (0, a.jsxs)("span", {
                className: A().labelText,
                children: [
                  e2.text,
                  e2.progress ? (0, a.jsxs)("span", {
                    className: A().count,
                    children: [
                      " ",
                      e2.progress.value,
                      " of ",
                      e2.progress.total
                    ]
                  }) : null
                ]
              })
            ]
          },
          e2.key
        )
      })
    });
  }
  function D({ view: e2 }) {
    let t2 = e2.icon;
    return (0, a.jsx)("span", {
      className: A().labelSlot,
      children: (0, a.jsxs)("span", {
        className: A().labelUnit,
        "data-tone": e2.tone,
        children: [
          t2 ? (0, a.jsx)(t2, {
            className: A().labelIcon,
            size: 16,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          }) : null,
          (0, a.jsxs)("span", {
            className: A().labelText,
            children: [
              e2.text,
              e2.progress ? (0, a.jsxs)("span", {
                className: A().count,
                children: [" ", e2.progress.value, " of ", e2.progress.total]
              }) : null
            ]
          })
        ]
      })
    });
  }
  function T({ steps: e2, progress: t2 }) {
    let s2 = e2.filter(
      (e3) => "done" === e3.status || "skipped" === e3.status
    ).length;
    return (0, a.jsx)("div", {
      className: A().segments,
      role: "progressbar",
      "aria-label": "Run progress",
      "aria-valuemin": 0,
      "aria-valuemax": e2.length,
      "aria-valuenow": s2,
      "aria-valuetext": `${s2} of ${e2.length} steps finished`,
      children: e2.map((e3) => {
        let s3 = "done" === e3.status || "skipped" === e3.status || "failed" === e3.status ? 1 : "active" === e3.status && t2 ? t2.value / t2.total : 0;
        return (0, a.jsx)(
          "span",
          {
            className: A().segment,
            "data-status": e3.status,
            children: (0, a.jsx)("span", {
              className: A().segmentFill,
              style: { transform: `scaleX(${s3})` }
            })
          },
          e3.id
        );
      })
    });
  }
  function O({
    steps: e2,
    progress: t2,
    running: s2,
    clock: n2,
    now: i2,
    reduced: r2,
    limit: l2
  }) {
    let d2 = e2.filter((e3) => "pending" !== e3.status).slice(-l2), u2 = r2 ? { duration: 0 } : y.T.spring.smooth;
    return (0, a.jsx)("ol", {
      className: A().steps,
      children: (0, a.jsx)(p.N, {
        mode: "popLayout",
        initial: false,
        children: d2.map((e3) => {
          let l3 = e3.icon, d3 = "active" === e3.status || "waiting" === e3.status, c2 = d3 ? n2.since(e3.startedAt, i2) : e3.durationMs;
          return (0, a.jsxs)(
            o.PY1.li,
            {
              layout: "position",
              className: A().step,
              "data-status": e3.status,
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: {
                opacity: 0,
                transition: { duration: y.T.duration.instant }
              },
              transition: {
                layout: u2,
                opacity: { duration: 0.18 * !r2, ease: R }
              },
              children: [
                (0, a.jsx)("span", {
                  className: A().stepIcon,
                  children: l3 ? (0, a.jsx)(l3, {
                    size: 16,
                    strokeWidth: 1.75,
                    "aria-hidden": "true"
                  }) : null
                }),
                (0, a.jsx)("span", {
                  className: A().stepText,
                  children: (0, a.jsx)(p.N, {
                    mode: "popLayout",
                    initial: false,
                    children: (0, a.jsxs)(
                      o.PY1.span,
                      {
                        className: s2 && "active" === e3.status ? `${A().stepLabel} ${A().shimmer}` : A().stepLabel,
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0, transition: { duration: 0.1 } },
                        transition: { duration: 0.16 * !r2, ease: R },
                        children: [
                          e3.label,
                          "active" === e3.status && t2 ? (0, a.jsxs)("span", {
                            className: A().count,
                            children: [" ", t2.value, " of ", t2.total]
                          }) : null
                        ]
                      },
                      e3.label
                    )
                  })
                }),
                (0, a.jsx)("span", {
                  className: A().stepTime,
                  children: void 0 !== c2 && (d3 || c2 > 0) ? d3 ? `${Math.floor(c2 / 1e3)}s` : c2 < 1e4 ? `${(Math.floor(c2 / 100) / 10).toFixed(1)}s` : k(c2) : ""
                })
              ]
            },
            e3.id
          );
        })
      })
    });
  }
  var I = s(48246), M = s(65377), E = s(797), B = s(55328), z = s(84824), P = s(94179), W = s(8143), F = s(50626), q = s(40557), U = s(87791), Y = s(55776);
  let V = "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z", G = {
    coding: {
      id: "coding",
      name: "Coding agent",
      agent: {
        name: "Claude Sonnet 5.5",
        mark: (0, a.jsx)(
          function(e2) {
            return (0, a.jsx)("svg", {
              viewBox: "0 0 24 24",
              fill: "currentColor",
              "aria-hidden": "true",
              focusable: "false",
              ...e2,
              children: (0, a.jsx)("path", {
                d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
              })
            });
          },
          { style: { color: "#D97757" } }
        )
      },
      steps: [
        {
          id: "read",
          icon: I.A,
          active: "Reading 12 files",
          done: "Read 12 files",
          ms: 1900
        },
        {
          id: "search",
          icon: M.A,
          active: "Searching for prorateInvoice",
          done: "Found 4 call sites",
          ms: 1500
        },
        {
          id: "edit",
          icon: E.A,
          active: "Editing src/billing/invoice.ts",
          done: "Edited src/billing/invoice.ts",
          ms: 2500
        },
        {
          id: "tests-edit",
          icon: B.A,
          active: "Updating 5 test files",
          done: "Updated 5 test files",
          ms: 1900
        },
        {
          id: "tests",
          icon: z.A,
          active: "Running tests",
          done: "Passed 12 of 12 tests",
          ms: 3300,
          count: 12
        },
        {
          id: "push",
          icon: P.A,
          active: "Pushing fix/proration-rounding",
          done: "Pushed fix/proration-rounding",
          ms: 1400,
          approval: {
            request: "Needs your approval to run git push",
            waiting: "Waiting for approval to run git push",
            denied: "Skipped git push"
          }
        }
      ],
      detail: "6 files changed",
      deniedDetail: "6 files changed, not pushed"
    },
    research: {
      id: "research",
      name: "Research agent",
      agent: {
        name: "Gemini 4 Argon",
        mark: (0, a.jsx)(function(e2) {
          let t2 = (0, n.useId)().replace(/[^a-zA-Z0-9_-]/g, "");
          return (0, a.jsxs)("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            focusable: "false",
            ...e2,
            children: [
              (0, a.jsx)("path", { d: V, fill: "#3186FF" }),
              (0, a.jsx)("path", { d: V, fill: `url(#${t2}-a)` }),
              (0, a.jsx)("path", { d: V, fill: `url(#${t2}-b)` }),
              (0, a.jsx)("path", { d: V, fill: `url(#${t2}-c)` }),
              (0, a.jsxs)("defs", {
                children: [
                  (0, a.jsxs)("linearGradient", {
                    gradientUnits: "userSpaceOnUse",
                    id: `${t2}-a`,
                    x1: "7",
                    x2: "11",
                    y1: "15.5",
                    y2: "12",
                    children: [
                      (0, a.jsx)("stop", { stopColor: "#08B962" }),
                      (0, a.jsx)("stop", {
                        offset: "1",
                        stopColor: "#08B962",
                        stopOpacity: "0"
                      })
                    ]
                  }),
                  (0, a.jsxs)("linearGradient", {
                    gradientUnits: "userSpaceOnUse",
                    id: `${t2}-b`,
                    x1: "8",
                    x2: "11.5",
                    y1: "5.5",
                    y2: "11",
                    children: [
                      (0, a.jsx)("stop", { stopColor: "#F94543" }),
                      (0, a.jsx)("stop", {
                        offset: "1",
                        stopColor: "#F94543",
                        stopOpacity: "0"
                      })
                    ]
                  }),
                  (0, a.jsxs)("linearGradient", {
                    gradientUnits: "userSpaceOnUse",
                    id: `${t2}-c`,
                    x1: "3.5",
                    x2: "17.5",
                    y1: "13.5",
                    y2: "12",
                    children: [
                      (0, a.jsx)("stop", { stopColor: "#FABC12" }),
                      (0, a.jsx)("stop", {
                        offset: ".46",
                        stopColor: "#FABC12",
                        stopOpacity: "0"
                      })
                    ]
                  })
                ]
              })
            ]
          });
        }, {})
      },
      steps: [
        {
          id: "plan",
          icon: W.A,
          active: "Planning 4 research questions",
          done: "Planned 4 questions",
          ms: 1400
        },
        {
          id: "search",
          icon: F.A,
          active: "Searching the web",
          done: "Found 18 results",
          ms: 1900
        },
        {
          id: "read",
          icon: q.A,
          active: "Reading sources",
          done: "Read 9 sources",
          ms: 3200,
          count: 9,
          failOnce: {
            at: 0.56,
            summary: "Fetch failed \xB7 2 sources timed out",
            step: "2 sources timed out"
          }
        },
        {
          id: "compare",
          icon: U.A,
          active: "Comparing pricing across 5 vendors",
          done: "Compared 5 vendors",
          ms: 2200
        },
        {
          id: "write",
          icon: Y.A,
          active: "Writing the brief",
          done: "Wrote a 640 word brief",
          ms: 2300
        }
      ],
      detail: "9 sources cited"
    }
  }, H = (e2) => ({
    scenario: e2,
    status: "idle",
    index: 0,
    progress: 0,
    results: e2.steps.map((e3) => ({ status: "pending", label: e3.active }))
  });
  function X(e2 = "coding", t2 = 900) {
    let s2, [a2, i2] = (0, n.useState)(() => H(G[e2])), r2 = (0, n.useRef)(null);
    (0, n.useEffect)(() => {
      let e3 = (function(e4) {
        let t3 = H(G.coding), s3 = 0, a3 = 0, n2 = 0, i3 = 0, r3 = /* @__PURE__ */ new Set(), o3 = /* @__PURE__ */ new Set(), l3 = false, d3 = (s4) => {
          t3 = { ...t3, notice: void 0, ...s4 }, window.clearInterval(n2), "working" === t3.status && (n2 = window.setInterval(p3, 60)), e4(t3);
        }, u3 = (e5, s4) => t3.results.map((t4, a4) => a4 === e5 ? s4 : t4);
        function c3(e5, n3) {
          let i4 = t3.scenario.steps[e5];
          i4 ? i4.approval && !o3.has(i4.id) ? d3({
            status: "needs-input",
            index: e5,
            progress: 0,
            results: u3(e5, {
              status: "waiting",
              label: i4.approval.waiting,
              startedAt: n3
            })
          }) : (s3 = 0, a3 = n3, d3({
            status: "working",
            index: e5,
            progress: +!!i4.count,
            results: u3(e5, {
              status: "active",
              label: i4.active,
              startedAt: n3
            })
          })) : d3({
            status: "done",
            index: e5,
            endedAt: n3,
            detail: l3 ? t3.scenario.deniedDetail ?? t3.scenario.detail : t3.scenario.detail
          });
        }
        function p3() {
          if ("working" !== t3.status) return;
          let e5 = t3.scenario.steps[t3.index];
          if (!e5) return;
          let n3 = Date.now(), i4 = s3 + n3 - a3;
          if (e5.failOnce && !r3.has(e5.id) && i4 >= e5.failOnce.at * e5.ms) {
            r3.add(e5.id), s3 = i4;
            let a4 = t3.results[t3.index];
            d3({
              status: "failed",
              results: u3(t3.index, {
                status: "failed",
                label: e5.failOnce.step,
                startedAt: a4?.startedAt
              })
            });
            return;
          }
          if (i4 >= e5.ms)
            return void c3(
              (t3 = {
                ...t3,
                results: u3(t3.index, {
                  status: "done",
                  label: e5.done,
                  durationMs: Math.round(i4)
                })
              }).index + 1,
              n3
            );
          if (e5.count) {
            let s4 = Math.min(e5.count, Math.floor(i4 / e5.ms * e5.count) + 1);
            s4 !== t3.progress && d3({ progress: s4 });
          }
        }
        return {
          load(e5, s4) {
            window.clearTimeout(i3), r3.clear(), o3.clear(), l3 = false, t3 = H(e5), d3({}), i3 = window.setTimeout(() => {
              d3({ startedAt: Date.now() }), c3(0, Date.now());
            }, s4);
          },
          pause() {
            "working" === t3.status && (s3 += Date.now() - a3, d3({
              status: "paused",
              notice: "Paused. The simulated run waits where it stopped."
            }));
          },
          resume() {
            "paused" === t3.status && (a3 = Date.now(), d3({ status: "working", notice: "Resumed." }));
          },
          stop() {
            if (!["working", "paused", "needs-input"].includes(t3.status))
              return;
            let e5 = t3.results[t3.index];
            d3({
              status: "stopped",
              endedAt: Date.now(),
              results: u3(t3.index, {
                status: "skipped",
                label: "Stopped by you",
                startedAt: e5?.startedAt
              }),
              notice: "Run stopped. Nothing else runs in this simulation."
            });
          },
          approve() {
            let s4 = t3.scenario.steps[t3.index];
            "needs-input" === t3.status && s4 && (o3.add(s4.id), c3(t3.index, Date.now()), e4(
              t3 = {
                ...t3,
                notice: "Approved. The push is simulated in this preview."
              }
            ));
          },
          deny() {
            let s4 = t3.scenario.steps[t3.index];
            "needs-input" === t3.status && s4?.approval && (l3 = true, c3(
              (t3 = {
                ...t3,
                results: u3(t3.index, {
                  status: "skipped",
                  label: s4.approval.denied,
                  durationMs: 0
                })
              }).index + 1,
              Date.now()
            ), e4(t3 = { ...t3, notice: "Denied. Nothing was pushed." }));
          },
          retry() {
            let e5 = t3.scenario.steps[t3.index];
            if ("failed" !== t3.status || !e5) return;
            a3 = Date.now();
            let s4 = t3.results[t3.index];
            d3({
              status: "working",
              results: u3(t3.index, {
                status: "active",
                label: e5.active,
                startedAt: s4?.startedAt
              }),
              notice: "Retrying the sources that timed out."
            });
          },
          note(s4) {
            e4(t3 = { ...t3, notice: s4 });
          },
          dispose() {
            window.clearInterval(n2), window.clearTimeout(i3);
          }
        };
      })(i2);
      return r2.current = e3, () => {
        e3.dispose(), r2.current = null;
      };
    }, []), (0, n.useEffect)(() => {
      r2.current?.load(G[e2], t2);
    }, [e2, t2]);
    let o2 = (0, n.useCallback)(() => {
      r2.current?.load(G[e2], 500);
    }, [e2]), l2 = (0, n.useCallback)(() => r2.current?.pause(), []), d2 = (0, n.useCallback)(() => r2.current?.resume(), []), u2 = (0, n.useCallback)(() => r2.current?.stop(), []), c2 = (0, n.useCallback)(() => r2.current?.approve(), []), p2 = (0, n.useCallback)(() => r2.current?.deny(), []), h2 = (0, n.useCallback)(() => r2.current?.retry(), []), m2 = (0, n.useCallback)(
      () => r2.current?.note("Opening the run log is simulated in this preview."),
      []
    ), { scenario: g2, status: f2, index: x2, progress: v2, results: _2 } = a2, y2 = g2.steps[x2];
    return y2 && ("working" === f2 || "paused" === f2) ? s2 = {
      label: y2.active,
      icon: y2.icon,
      progress: y2.count ? { value: v2, total: y2.count } : void 0
    } : y2 && "needs-input" === f2 && y2.approval ? s2 = { label: y2.approval.request, icon: y2.icon } : y2 && "failed" === f2 && y2.failOnce ? s2 = { label: y2.failOnce.summary, icon: y2.icon } : "done" === f2 && (s2 = { label: a2.detail ?? g2.detail }), {
      status: f2,
      activity: s2,
      steps: g2.steps.map((e3, t3) => ({
        id: e3.id,
        icon: e3.icon,
        ..._2[t3] ?? { status: "pending", label: e3.active }
      })),
      startedAt: a2.startedAt,
      endedAt: a2.endedAt,
      agent: g2.agent,
      notice: a2.notice,
      onPause: l2,
      onResume: d2,
      onStop: u2,
      onApprove: c2,
      onDeny: p2,
      onRetry: h2,
      onOpenRun: m2,
      replay: o2
    };
  }
  let K = () => 0, Z = { name: "Agent" }, Q = (e2) => e2 instanceof Date ? e2.getTime() : e2, J = (e2) => 2 * Math.ceil(e2 / 2), ee = [...y.T.ease.standard];
  function et(e2) {
    return void 0 === e2.status ? (0, a.jsx)(es, { ...e2 }) : (0, a.jsx)(en, { ...e2, status: e2.status });
  }
  function es(e2) {
    let t2 = X("coding");
    return (0, a.jsx)(en, {
      ...e2,
      status: t2.status,
      activity: t2.activity,
      steps: t2.steps,
      startedAt: t2.startedAt,
      endedAt: t2.endedAt,
      agent: t2.agent,
      notice: t2.notice,
      onPause: t2.onPause,
      onResume: t2.onResume,
      onStop: t2.onStop,
      onApprove: t2.onApprove,
      onDeny: t2.onDeny,
      onRetry: t2.onRetry,
      onOpenRun: t2.onOpenRun
    });
  }
  function ea({ children: e2, className: t2, onLeave: s2, reduced: i2 }) {
    let l2 = (0, r.tF)(), d2 = (0, n.useRef)(null);
    return (0, n.useEffect)(() => {
      !l2 && d2.current?.contains(document.activeElement) && s2();
    }, [l2, s2]), (0, a.jsx)(o.PY1.span, {
      ref: d2,
      className: t2,
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: {
          duration: i2 ? 0 : y.T.duration.fast,
          delay: 0.06 * !i2,
          ease: ee
        }
      },
      exit: { opacity: 0, transition: { duration: 0.1 * !i2, ease: ee } },
      children: e2
    });
  }
  function en({
    status: e2,
    activity: t2,
    steps: s2 = [],
    startedAt: r2,
    endedAt: $2,
    agent: R2 = Z,
    onPause: S2,
    onResume: I2,
    onStop: M2,
    onApprove: E2,
    onDeny: B2,
    onRetry: z2,
    onOpenRun: P2,
    settleAfter: W2 = 4e3,
    align: F2 = "center",
    expanded: q2,
    defaultExpanded: U2 = false,
    onExpandedChange: Y2,
    maxSteps: V2 = 5,
    notice: G2,
    className: H2
  }) {
    let X2, et2, es2, ei2, er2, eo2 = (0, l.I)() ?? false, el2 = (0, n.useId)(), ed2 = Q(r2), eu2 = Q($2), ec = (0, n.useRef)(null), ep = (0, n.useRef)(null), eh = (0, n.useRef)(null), em = (0, n.useRef)(null), eg = (0, n.useRef)(null), [ef, ex] = (0, n.useState)(U2), ev = q2 ?? ef, e_ = (0, n.useCallback)(
      (e10) => {
        void 0 === q2 && ex(e10), Y2?.(e10);
      },
      [q2, Y2]
    ), ey = (0, n.useCallback)(
      () => eh.current?.focus({ preventScroll: true }),
      []
    ), eb = "done" === e2 || "stopped" === e2 ? `${e2}:${eu2 ?? ed2 ?? 0}` : null, [ej, ew] = (0, n.useState)(null);
    (0, n.useEffect)(() => {
      if (!eb || null == W2) return;
      let e10 = window.setTimeout(() => ew(eb), W2);
      return () => window.clearTimeout(e10);
    }, [eb, W2]);
    let ek = eb && ej === eb ? "idle" : e2, [eN] = (0, n.useState)(j);
    (0, n.useEffect)(() => {
      eN.sync({ startedAt: ed2, status: e2, endedAt: eu2 });
    }, [eN, ed2, e2, eu2]);
    let e$ = (0, n.useSyncExternalStore)(eN.subscribe, eN.getSnapshot, K), eA = eN.since(ed2, e$), eR = (es2 = Math.floor((et2 = Math.floor(eA / 1e3)) / 3600), ei2 = Math.floor(et2 % 3600 / 60), er2 = et2 % 60, es2 ? `${es2}:${w(ei2)}:${w(er2)}` : `${ei2}:${w(er2)}`);
    X2 = "working" === ek ? {
      key: `working:${t2?.label ?? ""}`,
      text: t2?.label ?? "Working",
      icon: t2?.icon,
      progress: t2?.progress,
      tone: "live"
    } : "needs-input" === ek ? {
      key: `input:${t2?.label ?? ""}`,
      text: t2?.label ?? "Needs your input",
      icon: t2?.icon ?? h.A,
      tone: "plain"
    } : "paused" === ek ? { key: "paused", text: "Paused", icon: m.A, tone: "quiet" } : "done" === ek ? {
      key: `done:${t2?.label ?? ""}`,
      text: `Done in ${k(eA)}${t2?.label ? ` \xB7 ${t2.label}` : ""}`,
      tone: "plain"
    } : "failed" === ek ? {
      key: `failed:${t2?.label ?? ""}`,
      text: t2?.label ?? "Run failed",
      tone: "plain"
    } : "stopped" === ek ? {
      key: "stopped",
      text: `Stopped after ${k(eA)}`,
      tone: "quiet"
    } : { key: "idle", text: "Ready", tone: "quiet" };
    let [eS, eL] = (0, n.useState)({ collapsed: 0, expanded: 0 }), [eC, eD] = (0, n.useState)(0), [eT, eO] = (0, n.useState)(0);
    (0, n.useLayoutEffect)(() => {
      let e10 = em.current, t3 = eg.current, s3 = ec.current?.parentElement;
      if (!e10 || !t3 || "u" < typeof ResizeObserver) return;
      let a2 = new ResizeObserver(
        () => eL((s4) => {
          let a3 = J(e10.getBoundingClientRect().width), n3 = J(t3.getBoundingClientRect().width);
          return s4.collapsed === a3 && s4.expanded === n3 ? s4 : { collapsed: a3, expanded: n3 };
        })
      );
      a2.observe(e10), a2.observe(t3);
      let n2 = new ResizeObserver(([e11]) => {
        e11 && eD(Math.floor(e11.contentRect.width));
      });
      return s3 && n2.observe(s3), () => {
        a2.disconnect(), n2.disconnect();
      };
    }, []);
    let eI = (0, n.useCallback)((e10) => {
      if (!e10 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(() => eO(Math.ceil(e10.offsetHeight)));
      return t3.observe(e10), () => t3.disconnect();
    }, []), eM = eC > 0 && eC < 400, eE = "needs-input" === ek && (E2 || B2) ? "approval" : "failed" === ek && z2 ? "retry" : null, eB = ev ? null : eE, ez = void 0 !== ed2 && ("working" === ek || "paused" === ek || "needs-input" === ek), eP = ez && !(eM && eE), eW = ev ? ez : eP, eF = eS.collapsed ? eC ? Math.min(eS.collapsed, eC) : eS.collapsed : 0, [eq, eU] = (0, n.useState)(384), eY = eC ? Math.min(eC, eq) : eq, eV = ev ? eY : eF, eG = ev && eT ? 40 + eT : 40, eH = (0, d.d)("max-content"), eX = (0, d.d)("auto"), eK = (0, d.d)(40), eZ = (0, n.useRef)(false), eQ = (0, n.useRef)(ev), eJ = (0, n.useRef)(0), e0 = (0, n.useCallback)((e10) => {
      let t3 = ep.current;
      if (!t3) return;
      let s3 = "number" == typeof e10 ? e10 : eJ.current;
      t3.style.setProperty(
        "--fade",
        `${Math.min(24, Math.max(0, eJ.current - s3))}px`
      );
    }, []);
    (0, u.L)(eH, "change", e0), (0, n.useLayoutEffect)(() => {
      if (!eF) return;
      let e10 = eQ.current !== ev;
      if (eQ.current = ev, !eZ.current || eo2) {
        eZ.current = true, eH.jump(eV), eX.jump(eF);
        return;
      }
      (0, c.i)(
        eH,
        eV,
        e10 ? y.T.spring.smooth : { type: "spring", visualDuration: 0.26, bounce: 0 }
      ), (0, c.i)(eX, eF, {
        type: "spring",
        visualDuration: 0.26,
        bounce: 0
      });
    }, [eV, eF, ev, eo2, eH, eX]), (0, n.useLayoutEffect)(() => {
      !eZ.current || eo2 ? eK.jump(eG) : (0, c.i)(eK, eG, y.T.spring.smooth);
    }, [eG, eo2, eK]), (0, n.useLayoutEffect)(() => {
      eJ.current = ev ? eS.expanded : eS.collapsed, e0(eH.get());
    }, [ev, eS, e0, eH]), (0, n.useEffect)(() => {
      if (!ev) return;
      let e10 = (e11) => {
        ep.current?.contains(e11.target) || e_(false);
      };
      return document.addEventListener("pointerdown", e10), () => document.removeEventListener("pointerdown", e10);
    }, [ev, e_]);
    let [e1, e22] = (0, n.useState)(false);
    (0, n.useEffect)(() => {
      if (!e1) return;
      let e10 = window.setTimeout(() => e22(false), 1600);
      return () => window.clearTimeout(e10);
    }, [e1]);
    let e5 = "working" === ek && S2 ? { label: "Pause", Icon: m.A, run: S2, accent: false } : "paused" === ek && I2 ? { label: "Resume", Icon: g.A, run: I2, accent: true } : "needs-input" === ek && E2 ? { label: "Approve", Icon: f.A, run: E2, accent: true } : "failed" === ek && z2 ? { label: "Retry", Icon: i.A, run: z2, accent: true } : null, e4 = ("working" === ek || "paused" === ek) && M2 ? { label: "Stop", Icon: x.A, run: M2 } : "needs-input" === ek && B2 ? { label: "Deny", Icon: v.A, run: B2 } : null, e6 = (e10) => {
      let t3 = e10 ? -1 : void 0;
      return "retry" === eE ? (0, a.jsxs)(b.$, {
        variant: "primary",
        size: "sm",
        tabIndex: t3,
        className: `${A().inlineButton} ${A().accentButton} ${eM ? A().iconButton : ""}`,
        "aria-label": eM ? "Retry" : void 0,
        onClick: z2,
        children: [
          (0, a.jsx)(i.A, {
            size: 16,
            strokeWidth: 1.75,
            "aria-hidden": "true"
          }),
          eM ? null : "Retry"
        ]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [
          B2 ? (0, a.jsx)(b.$, {
            variant: "secondary",
            size: "sm",
            tabIndex: t3,
            className: `${A().inlineButton} ${eM ? A().iconButton : ""}`,
            "aria-label": eM ? "Deny" : void 0,
            onClick: B2,
            children: eM ? (0, a.jsx)(v.A, {
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }) : "Deny"
          }) : null,
          E2 ? (0, a.jsx)(b.$, {
            variant: "primary",
            size: "sm",
            tabIndex: t3,
            className: `${A().inlineButton} ${A().accentButton} ${eM ? A().iconButton : ""}`,
            "aria-label": eM ? "Approve" : void 0,
            onClick: E2,
            children: eM ? (0, a.jsx)(f.A, {
              size: 16,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }) : "Approve"
          }) : null
        ]
      });
    }, e7 = s2.some((e10) => "pending" !== e10.status), e3 = s2.findIndex(
      (e10) => "active" === e10.status || "waiting" === e10.status || "failed" === e10.status
    ), e8 = s2.filter(
      (e10) => "done" === e10.status || "skipped" === e10.status
    ).length, e9 = s2.length ? e3 >= 0 ? `Step ${e3 + 1} of ${s2.length}` : `${e8} of ${s2.length} steps` : "", te = "done" === ek ? `${R2.name}: done in ${N(eA)}${t2?.label ? `, ${t2.label}` : ""}` : "stopped" === ek ? `${R2.name}: stopped after ${N(eA)}` : `${R2.name}: ${X2.text}`, tt = `${R2.name}: ${X2.text}${X2.progress ? ` ${X2.progress.value} of ${X2.progress.total}` : ""}${eW ? `, ${eR} elapsed` : ""}`, ts = { width: eH, height: eK, "--panel-w": `${eY - 2}px` };
    return (0, a.jsxs)(o.PY1.div, {
      ref: ec,
      className: [A().root, H2].filter(Boolean).join(" "),
      "data-align": F2,
      style: { width: eX },
      children: [
        (0, a.jsxs)(o.PY1.div, {
          ref: ep,
          className: A().surface,
          "data-expanded": ev,
          "data-state": ek,
          style: ts,
          onKeyDown: (e10) => {
            "Escape" === e10.key && ev && (e10.stopPropagation(), e_(false), ey());
          },
          onBlur: (e10) => {
            if (e10.relatedTarget || !ev) return;
            let t3 = e10.target;
            requestAnimationFrame(() => {
              t3.isConnected || document.activeElement !== document.body || ey();
            });
          },
          children: [
            (0, a.jsxs)("div", {
              className: A().row,
              children: [
                (0, a.jsxs)("button", {
                  ref: eh,
                  type: "button",
                  className: A().head,
                  "data-actions": eB ? "" : void 0,
                  "aria-expanded": ev,
                  "aria-controls": ev ? el2 : void 0,
                  "aria-label": tt,
                  onClick: () => {
                    ev || eU(Math.max(384, eF)), e_(!ev);
                  },
                  children: [
                    (0, a.jsx)(L, { state: ek, mark: R2.mark, reduced: eo2 }),
                    (0, a.jsx)(C, { view: X2, reduced: eo2 }),
                    (0, a.jsx)(p.N, {
                      mode: "popLayout",
                      initial: false,
                      children: eW ? (0, a.jsx)(
                        o.PY1.span,
                        {
                          className: A().timer,
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: {
                            opacity: 0,
                            transition: { duration: 0.1 * !eo2 }
                          },
                          transition: {
                            duration: eo2 ? 0 : y.T.duration.fast,
                            ease: ee
                          },
                          children: eR
                        },
                        "timer"
                      ) : null
                    })
                  ]
                }),
                (0, a.jsx)(p.N, {
                  mode: "popLayout",
                  initial: false,
                  children: eB ? (0, a.jsx)(
                    ea,
                    {
                      className: A().actions,
                      onLeave: ey,
                      reduced: eo2,
                      children: e6(false)
                    },
                    `${eB}:${eM}`
                  ) : null
                })
              ]
            }),
            (0, a.jsx)(p.N, {
              initial: false,
              children: ev ? (0, a.jsxs)(
                o.PY1.div,
                {
                  ref: eI,
                  id: el2,
                  role: "region",
                  "aria-label": `${R2.name} run details`,
                  className: A().body,
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: {
                      duration: 0.2 * !eo2,
                      delay: 0.08 * !eo2,
                      ease: ee
                    }
                  },
                  exit: {
                    opacity: 0,
                    transition: { duration: 0.1 * !eo2, ease: ee }
                  },
                  children: [
                    e7 ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsxs)("div", {
                          className: A().progress,
                          children: [
                            (0, a.jsxs)("div", {
                              className: A().meta,
                              children: [
                                (0, a.jsx)("span", {
                                  className: A().agentName,
                                  children: R2.name
                                }),
                                (0, a.jsx)("span", { children: e9 })
                              ]
                            }),
                            (0, a.jsx)(T, {
                              steps: s2,
                              progress: t2?.progress
                            })
                          ]
                        }),
                        (0, a.jsx)(O, {
                          steps: s2,
                          progress: "working" === ek || "paused" === ek ? t2?.progress : void 0,
                          running: "working" === ek,
                          clock: eN,
                          now: e$,
                          reduced: eo2,
                          limit: V2
                        })
                      ]
                    }) : (0, a.jsx)("p", {
                      className: A().empty,
                      children: "idle" === ek ? `No run yet. Steps show here while ${R2.name} works.` : `Steps show here as ${R2.name} works.`
                    }),
                    e5 || e4 || P2 && e7 ? (0, a.jsxs)("div", {
                      className: A().footer,
                      children: [
                        (0, a.jsxs)(p.N, {
                          mode: "popLayout",
                          initial: false,
                          children: [
                            e5 ? (0, a.jsx)(
                              ea,
                              {
                                className: A().slot,
                                onLeave: ey,
                                reduced: eo2,
                                children: (0, a.jsxs)(b.$, {
                                  variant: e5.accent ? "primary" : "secondary",
                                  size: "sm",
                                  className: e5.accent ? A().accentButton : void 0,
                                  onClick: e5.run,
                                  children: [
                                    (0, a.jsx)(e5.Icon, {
                                      size: 16,
                                      strokeWidth: 1.75,
                                      "aria-hidden": "true"
                                    }),
                                    e5.label
                                  ]
                                })
                              },
                              "primary"
                            ) : null,
                            e4 ? (0, a.jsx)(
                              ea,
                              {
                                className: A().slot,
                                onLeave: ey,
                                reduced: eo2,
                                children: (0, a.jsxs)(b.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  onClick: e4.run,
                                  children: [
                                    (0, a.jsx)(e4.Icon, {
                                      size: 16,
                                      strokeWidth: 1.75,
                                      "aria-hidden": "true"
                                    }),
                                    e4.label
                                  ]
                                })
                              },
                              "secondary"
                            ) : null
                          ]
                        }),
                        P2 && e7 ? (0, a.jsx)(b.$, {
                          variant: "ghost",
                          size: "sm",
                          className: eM ? `${A().open} ${A().openIcon}` : A().open,
                          "aria-label": eM ? e1 ? "Opened" : "Open run" : void 0,
                          onClick: () => {
                            P2(), e22(true);
                          },
                          children: eM ? e1 ? (0, a.jsx)(f.A, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }) : (0, a.jsx)(_.A, {
                            size: 16,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }) : e1 ? (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)(f.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              "Opened"
                            ]
                          }) : (0, a.jsxs)(a.Fragment, {
                            children: [
                              "Open run",
                              (0, a.jsx)(_.A, {
                                size: 16,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              })
                            ]
                          })
                        }) : null
                      ]
                    }) : null
                  ]
                },
                "body"
              ) : null
            })
          ]
        }),
        (0, a.jsxs)("div", {
          className: A().ghosts,
          "aria-hidden": "true",
          inert: true,
          children: [
            (0, a.jsxs)("div", {
              ref: em,
              className: A().ghost,
              children: [
                (0, a.jsxs)("span", {
                  className: A().head,
                  "data-actions": eE ? "" : void 0,
                  children: [
                    (0, a.jsx)("span", { className: A().orbSpace }),
                    (0, a.jsx)(D, { view: X2 }),
                    eP ? (0, a.jsx)("span", {
                      className: A().timer,
                      children: eR
                    }) : null
                  ]
                }),
                eE ? (0, a.jsx)("span", {
                  className: A().actions,
                  children: e6(true)
                }) : null
              ]
            }),
            (0, a.jsx)("div", {
              ref: eg,
              className: A().ghost,
              children: (0, a.jsxs)("span", {
                className: A().head,
                children: [
                  (0, a.jsx)("span", { className: A().orbSpace }),
                  (0, a.jsx)(D, { view: X2 }),
                  ez ? (0, a.jsx)("span", { className: A().timer, children: eR }) : null
                ]
              })
            })
          ]
        }),
        (0, a.jsx)("span", {
          className: A().srOnly,
          role: "status",
          children: [te, G2].filter(Boolean).join(". ")
        })
      ]
    });
  }
  var ei = s(66558), er = s(53514), eo = s.n(er);
  let el = [
    { value: "coding", label: "Coding agent" },
    { value: "research", label: "Research agent" }
  ];
  function ed() {
    let [e2, t2] = (0, n.useState)("coding"), s2 = X(e2);
    return (0, a.jsxs)("div", {
      className: eo().demo,
      "data-canvas": "wide",
      children: [
        (0, a.jsx)("div", {
          className: eo().stage,
          children: (0, a.jsx)(et, {
            status: s2.status,
            activity: s2.activity,
            steps: s2.steps,
            startedAt: s2.startedAt,
            endedAt: s2.endedAt,
            agent: s2.agent,
            notice: s2.notice,
            onPause: s2.onPause,
            onResume: s2.onResume,
            onStop: s2.onStop,
            onApprove: s2.onApprove,
            onDeny: s2.onDeny,
            onRetry: s2.onRetry,
            onOpenRun: s2.onOpenRun
          })
        }),
        (0, a.jsxs)("div", {
          className: eo().controls,
          children: [
            (0, a.jsx)(ei.A, {
              label: "Scenario",
              options: el,
              value: e2,
              onValueChange: (e3) => t2(e3)
            }),
            (0, a.jsxs)(b.$, {
              variant: "secondary",
              size: "sm",
              onClick: s2.replay,
              children: [
                (0, a.jsx)(i.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                "Replay"
              ]
            })
          ]
        })
      ]
    });
  }
  let eu = ed;
}

__m(__module,__exports,__require);
});
A.reg(40557, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "book-open",
    size: 24,
    node: [
      ["path", { d: "M12 5v16", key: "1f6ucr" }],
      [
        "path",
        {
          d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",
          key: "1fyvmf"
        }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(48246, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => h });
  var d = t(51811);
  let l = {
    name: "file-search",
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
      ["circle", { cx: "11.5", cy: "14.5", r: "2.5", key: "1bq0ko" }],
      ["path", { d: "M13.3 16.3 15 18", key: "2quom7" }]
    ]
  };
  l.node;
  let h = (0, d.A)(l);
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
A.regCss(53514, ".demo{display:grid;justify-items:center;gap:var(--space-6);width:100%;max-width:720px;margin-inline:auto}\n.stage{display:flex;justify-content:center;align-items:flex-start;width:100%;min-height:360px;padding-top:var(--space-16);box-sizing:border-box}\n@media (max-width:480px){.stage{min-height:380px;padding-top:var(--space-10)}\n.controls{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:var(--space-2);max-width:100%}", {"demo":"demo","stage":"stage","controls":"controls"});
A.reg(55328, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => h });
  var d = t(51811);
  let l = {
    name: "files",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",
          key: "14sh0y"
        }
      ],
      [
        "path",
        {
          d: "M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",
          key: "1970lx"
        }
      ],
      [
        "path",
        {
          d: "M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1",
          key: "l4dndm"
        }
      ]
    ]
  };
  l.node;
  let h = (0, d.A)(l);
}

__m(__module,__exports,__require);
});
A.reg(55776, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var i = a(51811);
  let s = {
    name: "notebook-pen",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",
          key: "re6nr2"
        }
      ],
      ["path", { d: "M2 6h4", key: "aawbzj" }],
      ["path", { d: "M2 10h4", key: "l0bgd4" }],
      ["path", { d: "M2 14h4", key: "1gsvsf" }],
      ["path", { d: "M2 18h4", key: "1bu2t1" }],
      [
        "path",
        {
          d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
          key: "pqwjuv"
        }
      ]
    ]
  };
  s.node;
  let n = (0, i.A)(s);
}

__m(__module,__exports,__require);
});
A.regCss(66060, ".root{position:relative;display:inline-flex;flex:none;height:40px;max-width:100%;vertical-align:middle;font-family:var(--font-body);font-size:var(--text-sm);line-height:var(--leading-body);letter-spacing:var(--tracking-body);color:var(--foreground)}\n.root[data-align=center] .surface{left:50%;translate:-50% 0}\n.root[data-align=start] .surface{left:0}\n.root[data-align=end] .surface{right:0}\n.root[data-align=center] .body{margin-left:calc((100% - var(--panel-w)) / 2)}\n.root[data-align=end] .body{margin-left:calc(100% - var(--panel-w))}\n.surface{--shimmer-base:color-mix(in oklab,var(--foreground) 50%,var(--surface));position:absolute;top:0;z-index:1;box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--border);border-radius:20px;background:var(--surface);transition:border-radius var(--duration-considered) var(--ease-standard),box-shadow var(--duration-standard) var(--ease-standard)}\n.surface[data-expanded=true]{z-index:30;border-radius:22px;box-shadow:var(--shadow-floating)}\n@media (hover:hover) and (pointer:fine){.surface[data-expanded=false] .head:hover{background:color-mix(in oklab,var(--surface-muted) 70%,var(--surface))}\n.surface[data-expanded=false] .head:active{background:var(--surface-muted)}\n.surface .inlineButton{min-height:30px;height:30px;gap:6px;padding-inline:12px;border-radius:15px}\n.surface .iconButton{width:30px;padding:0}\n.surface .accentButton{border-color:var(--accent);background:var(--accent);color:var(--accent-foreground)}\n@media (prefers-reduced-motion:reduce){.arc,.glyph>svg,.head,.segmentFill,.segment,.surface,.track{transition:none}\n.row{flex:none}\n.head,.row{position:relative;display:flex;align-items:center;height:38px;min-width:0}\n.head{--focus-outline-offset:-2px;flex:1 1 auto;gap:8px;box-sizing:border-box;padding:0 14px 0 7px;border:0;border-radius:19px;background:transparent;color:inherit;font:inherit;text-align:start;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard)}\n.head[data-actions]{padding-right:10px}\n.ghost .head{flex:none;cursor:default}\n.orbSpace,.orb{position:relative;display:grid;flex:none;width:24px;height:24px;place-items:center}\n.orb[data-state=working] .spinner{animation-play-state:running}\n.orb:is([data-state=working],[data-state=paused],[data-state=needs-input]) .track{opacity:1}\n.orb:is([data-state=working],[data-state=paused]) .arc{opacity:1}\n.orb[data-state=paused] .arc{stroke:var(--text-muted)}\n.orb[data-state=done] .closed{stroke:var(--success);transition:none}\n.orb[data-state=failed] .closed{stroke:var(--danger);transition:none}\n.orb[data-state=paused] .glyph[data-glyph=mark]>svg{opacity:.5}\n.ring{position:absolute;inset:0;width:100%;height:100%;overflow:visible;stroke-width:1.5}\n.track{stroke:var(--border);opacity:0;transition:opacity var(--duration-standard) var(--ease-standard)}\n.spinner{transform-origin:12px 12px;transform-box:view-box;animation:spin .9s linear infinite;animation-play-state:paused}\n.spinner{animation:none}\n.arc{stroke:var(--foreground);stroke-linecap:round;opacity:0;transition:opacity var(--duration-standard) var(--ease-standard),stroke var(--duration-standard) var(--ease-standard)}\n.closed{stroke:var(--success);stroke-linecap:round;transform:rotate(-90deg);transform-origin:12px 12px;transform-box:view-box;transition:stroke 0s linear var(--duration-standard)}\n.glyph{position:absolute;inset:0;display:grid;place-items:center}\n.glyph>svg{width:12px;height:12px;transition:opacity var(--duration-standard) var(--ease-standard)}\n.glyph:is([data-glyph=check],[data-glyph=cross])>svg{width:14px;height:14px;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\n.glyph[data-glyph=check]{color:var(--success)}\n.glyph[data-glyph=cross]{color:var(--danger)}\n.stopGlyph{width:8px;height:8px;border-radius:2px;background:var(--text-secondary)}\n.dot{position:absolute;top:0;right:0;width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 2px var(--surface)}\n.dot:after{content:\"\";position:absolute;inset:0;border-radius:inherit;background:var(--accent);animation:ping .9s var(--ease-standard) .1s 1 both}\n.dot:after{display:none}\n.labelSlot{position:relative;display:flex;flex:0 1 auto;align-items:center;min-width:0;height:20px;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,#000 calc(100% - var(--fade, 0px)),transparent);mask-image:linear-gradient(90deg,#000 calc(100% - var(--fade, 0px)),transparent)}\n.ghost .labelSlot{flex:none;-webkit-mask-image:none;mask-image:none}\n.labelUnit{display:inline-flex;flex:none;align-items:center;gap:6px;height:20px;white-space:nowrap}\n.labelUnit[data-tone=quiet] .labelText{color:var(--text-secondary)}\n.labelUnit[data-tone=live] .labelText,.shimmer{color:transparent;background-image:linear-gradient(90deg,var(--shimmer-base) 0,var(--shimmer-base) 38%,var(--foreground) 50%,var(--shimmer-base) 62%,var(--shimmer-base) 100%);background-size:300% 100%;background-position:100% 0;-webkit-background-clip:text;background-clip:text;animation:shimmer 2.4s var(--ease-in-out) infinite}\n.labelUnit[data-tone=live] .labelText,.shimmer{animation:none;background:none;color:var(--foreground)}\n.labelIcon{flex:none;color:var(--text-secondary)}\n.labelText{color:var(--foreground);font-size:var(--text-sm);font-weight:400;line-height:20px}\n.count{font-variant-numeric:tabular-nums}\n.timer{flex:none;margin-left:auto;padding-left:4px;color:var(--text-muted);font-size:var(--text-sm);line-height:20px;font-variant-numeric:tabular-nums;white-space:nowrap}\n.actions{display:flex;flex:none;align-items:center;gap:4px;padding-right:4px}\n.body{box-sizing:border-box;display:grid;flex:none;grid-template-columns:minmax(0,1fr);gap:12px;width:var(--panel-w);padding:6px 12px 12px}\n.progress{display:grid;gap:8px;padding-top:2px}\n.meta{display:flex;justify-content:space-between;gap:12px;padding-inline:2px;color:var(--text-muted);font-size:var(--text-xs);line-height:16px;font-variant-numeric:tabular-nums;white-space:nowrap}\n.agentName{overflow:hidden;text-overflow:ellipsis}\n.segments{display:flex;gap:3px;height:3px}\n.segment{position:relative;flex:1 1 0;overflow:hidden;border-radius:var(--radius-pill);background:var(--border);transition:background-color var(--duration-standard) var(--ease-standard)}\n.segment:is([data-status=active],[data-status=waiting]){background:color-mix(in oklab,var(--accent) 24%,var(--border))}\n.segment[data-status=failed] .segmentFill{background:var(--danger)}\n.segment[data-status=skipped] .segmentFill{background:var(--text-muted)}\n.segmentFill{position:absolute;inset:0;border-radius:inherit;background:var(--accent);transform-origin:left center;transition:transform var(--duration-considered) var(--ease-standard),background-color var(--duration-standard) var(--ease-standard)}\n.steps{position:relative;display:grid;margin:0;padding:0;list-style:none}\n.step{display:grid;grid-template-columns:16px minmax(0,1fr) auto;column-gap:12px;align-items:start;padding-block:4px}\n.step:is([data-status=active],[data-status=waiting],[data-status=failed]) .stepIcon{color:var(--foreground)}\n.step[data-status=waiting] .stepIcon{color:var(--accent)}\n.step[data-status=failed] .stepIcon{color:var(--danger)}\n.step:is([data-status=waiting],[data-status=failed]) .stepText{color:var(--foreground)}\n.step[data-status=skipped] .stepText{color:var(--text-muted)}\n.stepIcon{display:grid;height:20px;place-items:center;color:var(--text-muted)}\n.stepText{position:relative;min-width:0;color:var(--text-secondary);font-size:var(--text-sm);line-height:20px}\n.stepLabel{display:block;overflow-wrap:anywhere}\n.stepTime{min-width:3ch;color:var(--text-muted);font-size:var(--text-xs);line-height:20px;font-variant-numeric:tabular-nums;text-align:right;white-space:nowrap}\n.empty{margin:0;padding:4px 2px 0;color:var(--text-secondary);font-size:var(--text-sm)}\n.footer{display:flex;align-items:center;gap:6px;min-height:var(--control-height-sm)}\n.footer .open{margin-left:auto}\n.footer .openIcon{width:var(--control-height-sm);padding:0}\n.slot{display:inline-flex}\n.ghosts{position:absolute;top:0;left:0;width:0;height:0;overflow:hidden;visibility:hidden;pointer-events:none}\n.ghost{position:absolute;top:0;left:0;display:flex;box-sizing:border-box;width:max-content;height:40px;align-items:center;border:1px solid transparent}\n.srOnly{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}", {"root":"root","surface":"surface","body":"body","head":"head","inlineButton":"inlineButton","iconButton":"iconButton","accentButton":"accentButton","arc":"arc","glyph":"glyph","segmentFill":"segmentFill","segment":"segment","track":"track","row":"row","ghost":"ghost","orbSpace":"orbSpace","orb":"orb","spinner":"spinner","closed":"closed","ring":"ring","stopGlyph":"stopGlyph","dot":"dot","labelSlot":"labelSlot","labelUnit":"labelUnit","labelText":"labelText","shimmer":"shimmer","labelIcon":"labelIcon","count":"count","timer":"timer","actions":"actions","progress":"progress","meta":"meta","agentName":"agentName","segments":"segments","steps":"steps","step":"step","stepIcon":"stepIcon","stepText":"stepText","stepLabel":"stepLabel","stepTime":"stepTime","empty":"empty","footer":"footer","open":"open","openIcon":"openIcon","slot":"slot","ghosts":"ghosts","srOnly":"srOnly"});
A.reg(84824, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "flask-conical",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
          key: "18mbvz"
        }
      ],
      ["path", { d: "M6.453 15h11.094", key: "3shlmq" }],
      ["path", { d: "M8.5 2h7", key: "csnxdl" }]
    ]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(87791, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => h });
  var d = t(51811);
  let l = {
    name: "scale",
    size: 24,
    node: [
      ["path", { d: "M12 3v18", key: "108xh3" }],
      ["path", { d: "m19 8 3 8a5 5 0 0 1-6 0zV7", key: "zcdpyk" }],
      [
        "path",
        { d: "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1", key: "1yorad" }
      ],
      ["path", { d: "m5 8 3 8a5 5 0 0 1-6 0zV7", key: "eua70x" }],
      ["path", { d: "M7 21h10", key: "1b0cd5" }]
    ]
  };
  l.node;
  let h = (0, d.A)(l);
}

__m(__module,__exports,__require);
});
A.reg(91906, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "hand",
    size: 24,
    node: [
      ["path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2", key: "1fvzgz" }],
      ["path", { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2", key: "1kc0my" }],
      [
        "path",
        { d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8", key: "10h0bg" }
      ],
      [
        "path",
        {
          d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
          key: "1s1gnw"
        }
      ]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(94179, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => h });
  var d = t(51811);
  let l = {
    name: "square-terminal",
    size: 24,
    node: [
      ["path", { d: "m7 11 2-2-2-2", key: "1lz0vl" }],
      ["path", { d: "M11 13h4", key: "1p7l4v" }],
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
      ]
    ],
    aliases: ["terminal-square"]
  };
  l.node;
  let h = (0, d.A)(l);
}

__m(__module,__exports,__require);
});
A.cssFor("agent-status", [53514,66060]);
A.item("agent-status", {entry:10323, export:"AgentStatusDemo", kind:"component", tier:"pro", unresolved:[]});
})();