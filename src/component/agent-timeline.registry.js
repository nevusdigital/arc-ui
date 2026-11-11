/* agent-timeline (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(18293, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { AgentTimelineDemo: () => er, default: () => es });
  var n = a(95155), r = a(12115), s = a(28245), i = a(92171), l = a(25354), o = a(80642), d = a(18310), c = a(61792), u = a(57990), h = a(90710), m = a(36619), p = a(79267), f = a(94890), g = a(41189), x = a(36408), _ = a(66958), k = a(64962), y = a(92298), v = a(51288), b = a(66558), j = a(52898), w = a(7770);
  let N = {
    title: "Checkout conversion drop on Oct 14",
    agents: [
      {
        id: "lead",
        name: "Orchestrator",
        model: "Claude Opus 5.5",
        role: "Plans the run, delegates and merges results",
        price: 8
      },
      {
        id: "checker",
        name: "Checker",
        model: "GPT-6 Luna",
        role: "Rules out causes outside the codebase",
        price: 0.8
      },
      {
        id: "researcher",
        name: "Researcher",
        model: "Claude Sonnet 5.5",
        role: "Finds recent changes to checkout",
        price: 4
      },
      {
        id: "analyst",
        name: "Analyst",
        model: "Claude Haiku 5.5",
        role: "Measures the drop in the orders database",
        price: 0.2
      },
      {
        id: "writer",
        name: "Writer",
        model: "Gemini 3.8 Flash",
        role: "Drafts the incident summary",
        price: 0.85
      }
    ],
    spans: [
      {
        agentId: "lead",
        kind: "thinking",
        start: 0,
        end: 2,
        label: "Split the investigation into three tracks",
        tokens: 1920
      },
      {
        agentId: "lead",
        kind: "waiting",
        start: 2,
        end: 14.6,
        label: "Waiting on the analyst, researcher and checker"
      },
      {
        agentId: "lead",
        kind: "thinking",
        start: 14.6,
        end: 16.8,
        label: "Merged findings: PR #4812 broke address autofill in Safari",
        tokens: 4380
      },
      {
        agentId: "lead",
        kind: "waiting",
        start: 16.8,
        end: 23,
        label: "Waiting on the writer"
      },
      {
        agentId: "lead",
        kind: "thinking",
        start: 23,
        end: 25.2,
        label: "Reviewed the draft and tightened the timeline",
        tokens: 3140
      },
      {
        agentId: "lead",
        kind: "tool",
        tool: "Notion",
        start: 25.2,
        end: 26.4,
        label: "Published the summary to the incidents page",
        tokens: 260
      },
      {
        agentId: "checker",
        kind: "thinking",
        start: 3.5,
        end: 4.1,
        label: "Listed outside causes to rule out",
        tokens: 480
      },
      {
        agentId: "checker",
        kind: "tool",
        tool: "Web search",
        start: 4.1,
        end: 5.6,
        label: "Searched for payment provider incidents on Oct 14",
        detail: "No matching incidents",
        tokens: 3920
      },
      {
        agentId: "checker",
        kind: "thinking",
        start: 5.6,
        end: 6.3,
        label: "Checked browser releases next",
        tokens: 610
      },
      {
        agentId: "checker",
        kind: "tool",
        tool: "Web search",
        start: 6.3,
        end: 7.7,
        label: "Searched browser release notes for autofill changes",
        tokens: 4460
      },
      {
        agentId: "checker",
        kind: "thinking",
        start: 7.7,
        end: 9.1,
        label: "Ruled out causes outside the codebase",
        tokens: 1180
      },
      {
        agentId: "researcher",
        kind: "thinking",
        start: 2.9,
        end: 3.5,
        label: "Planned the code search",
        tokens: 620
      },
      {
        agentId: "researcher",
        kind: "tool",
        tool: "GitHub",
        start: 3.5,
        end: 4.8,
        label: "Listed 14 merged PRs touching checkout since Oct 10",
        tokens: 2140
      },
      {
        agentId: "researcher",
        kind: "thinking",
        start: 4.8,
        end: 5.5,
        label: "Narrowed to 3 PRs shipped Oct 13 and 14",
        tokens: 980
      },
      {
        agentId: "researcher",
        kind: "tool",
        tool: "GitHub",
        start: 5.5,
        end: 7.5,
        label: "Read the diff of PR #4812, an address autofill refactor",
        tokens: 6850
      },
      {
        agentId: "researcher",
        kind: "thinking",
        start: 7.5,
        end: 8.5,
        label: "Traced the change to the Safari autofill path",
        tokens: 1410
      },
      {
        agentId: "researcher",
        kind: "tool",
        tool: "GitHub",
        start: 8.5,
        end: 9.7,
        label: "Checked deploys: #4812 shipped Oct 13 at 21:40",
        tokens: 1760
      },
      {
        agentId: "researcher",
        kind: "thinking",
        start: 9.7,
        end: 11.9,
        label: "Wrote up the suspect change with evidence",
        tokens: 2230
      },
      {
        agentId: "analyst",
        kind: "thinking",
        start: 2.3,
        end: 3,
        label: "Wrote a conversion query for Oct 7 to 15",
        tokens: 540
      },
      {
        agentId: "analyst",
        kind: "tool",
        tool: "PostgreSQL",
        start: 3,
        end: 5.1,
        label: "Conversion query timed out",
        detail: "Hit the 2s statement timeout on a full scan of orders",
        status: "failed",
        tokens: 410
      },
      {
        agentId: "analyst",
        kind: "thinking",
        start: 5.1,
        end: 5.7,
        label: "Rewrote the query to use the date index",
        tokens: 380
      },
      {
        agentId: "analyst",
        kind: "tool",
        tool: "PostgreSQL",
        start: 5.7,
        end: 7.3,
        label: "Retried: conversion by day and platform",
        detail: "Succeeded on the second attempt",
        retry: true,
        tokens: 1960
      },
      {
        agentId: "analyst",
        kind: "thinking",
        start: 7.3,
        end: 8.3,
        label: "Found the drop is Safari only, down 9.2%",
        tokens: 720
      },
      {
        agentId: "analyst",
        kind: "tool",
        tool: "PostgreSQL",
        start: 8.3,
        end: 9.9,
        label: "Pulled checkout errors by step for Safari",
        tokens: 2310
      },
      {
        agentId: "analyst",
        kind: "thinking",
        start: 9.9,
        end: 11.8,
        label: "Traced the failures to the address step",
        tokens: 860
      },
      {
        agentId: "analyst",
        kind: "tool",
        tool: "PostgreSQL",
        start: 11.8,
        end: 13,
        label: "Counted affected orders: 1,284",
        tokens: 1140
      },
      {
        agentId: "analyst",
        kind: "thinking",
        start: 13,
        end: 14.3,
        label: "Summarized the numbers",
        tokens: 640
      },
      {
        agentId: "writer",
        kind: "thinking",
        start: 17.1,
        end: 17.9,
        label: "Read the merged findings",
        tokens: 1850
      },
      {
        agentId: "writer",
        kind: "tool",
        tool: "GitHub",
        start: 17.9,
        end: 18.8,
        label: "Pulled the PR #4812 description for context",
        tokens: 1120
      },
      {
        agentId: "writer",
        kind: "thinking",
        start: 18.8,
        end: 22.7,
        label: "Drafted the incident summary, 412 words",
        tokens: 2940
      }
    ],
    handoffs: [
      {
        from: "lead",
        to: "analyst",
        at: 2,
        label: "Measure the drop by day and platform"
      },
      {
        from: "lead",
        to: "researcher",
        at: 2.6,
        label: "Find recent changes to checkout"
      },
      {
        from: "lead",
        to: "checker",
        at: 3.2,
        label: "Rule out outside causes"
      },
      {
        from: "checker",
        to: "lead",
        at: 9.4,
        label: "No outside incident on Oct 14"
      },
      {
        from: "researcher",
        to: "lead",
        at: 12.2,
        label: "PR #4812 is the likely cause"
      },
      {
        from: "analyst",
        to: "lead",
        at: 14.6,
        label: "Safari only, 1,284 orders affected"
      },
      {
        from: "lead",
        to: "writer",
        at: 16.8,
        label: "Draft the incident summary"
      },
      { from: "writer", to: "lead", at: 23, label: "Draft ready for review" }
    ]
  };
  function S(e2) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      focusable: "false",
      ...e2,
      children: (0, n.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  function $(e2) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      focusable: "false",
      ...e2,
      children: (0, n.jsx)("path", {
        d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
      })
    });
  }
  function I(e2) {
    let t2 = `gemini-${(0, r.useId)().replace(/[^a-zA-Z0-9-]/g, "")}`;
    return (0, n.jsxs)("svg", {
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      ...e2,
      children: [
        (0, n.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: "#3186FF"
        }),
        (0, n.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: `url(#${t2}-0)`
        }),
        (0, n.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: `url(#${t2}-1)`
        }),
        (0, n.jsx)("path", {
          d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
          fill: `url(#${t2}-2)`
        }),
        (0, n.jsxs)("defs", {
          children: [
            (0, n.jsxs)("linearGradient", {
              gradientUnits: "userSpaceOnUse",
              id: `${t2}-0`,
              x1: "7",
              x2: "11",
              y1: "15.5",
              y2: "12",
              children: [
                (0, n.jsx)("stop", { stopColor: "#08B962" }),
                (0, n.jsx)("stop", {
                  offset: "1",
                  stopColor: "#08B962",
                  stopOpacity: "0"
                })
              ]
            }),
            (0, n.jsxs)("linearGradient", {
              gradientUnits: "userSpaceOnUse",
              id: `${t2}-1`,
              x1: "8",
              x2: "11.5",
              y1: "5.5",
              y2: "11",
              children: [
                (0, n.jsx)("stop", { stopColor: "#F94543" }),
                (0, n.jsx)("stop", {
                  offset: "1",
                  stopColor: "#F94543",
                  stopOpacity: "0"
                })
              ]
            }),
            (0, n.jsxs)("linearGradient", {
              gradientUnits: "userSpaceOnUse",
              id: `${t2}-2`,
              x1: "3.5",
              x2: "17.5",
              y1: "13.5",
              y2: "12",
              children: [
                (0, n.jsx)("stop", { stopColor: "#FABC12" }),
                (0, n.jsx)("stop", {
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
  }
  function C(e2) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      focusable: "false",
      ...e2,
      children: (0, n.jsx)("path", {
        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      })
    });
  }
  function R(e2) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      focusable: "false",
      ...e2,
      children: (0, n.jsx)("path", {
        d: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      })
    });
  }
  function M(e2) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      focusable: "false",
      ...e2,
      children: (0, n.jsx)("path", {
        d: "M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"
      })
    });
  }
  function L(e2) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true",
      focusable: "false",
      ...e2,
      children: (0, n.jsx)("path", {
        d: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
      })
    });
  }
  let P = [
    "var(--series-1)",
    "var(--series-2)",
    "var(--series-3)",
    "var(--series-4)"
  ];
  function A(e2) {
    if (e2 < 100) return `${e2.toFixed(1)}s`;
    let t2 = Math.floor(e2 / 60), a2 = Math.floor(e2 % 60);
    return `${t2}m ${String(a2).padStart(2, "0")}s`;
  }
  let z = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }), F = (e2) => z.format(Math.round(e2)), T = (e2) => `$${e2.toFixed(2)}`, W = (e2) => e2 < 10 ? `${e2.toFixed(1)}s` : A(e2);
  function E(e2, t2) {
    let a2 = Math.max(e2 + 4, t2 + 1, 10), n2 = a2 <= 30 ? 10 : a2 <= 120 ? 30 : 60;
    return Math.ceil(a2 / n2) * n2;
  }
  var B = a(68098), D = a.n(B);
  let O = (e2) => 6 + 44 * e2 + 22, H = (e2) => `${e2} / var(--axis) * 100%`, U = (e2, t2, a2) => Math.min(a2, Math.max(t2, e2)), q = () => () => {
  }, G = [], V = [], K = [], X = { thinking: "Thinking", tool: "Tool call", waiting: "Waiting" };
  function Y({ playing: e2 }) {
    return (0, n.jsxs)("span", {
      className: D().glyph,
      "data-playing": e2 || void 0,
      "aria-hidden": "true",
      children: [
        (0, n.jsx)(m.A, {
          className: D().glyphPlay,
          fill: "currentColor",
          strokeWidth: 1.75
        }),
        (0, n.jsx)(p.A, {
          className: D().glyphPause,
          fill: "currentColor",
          strokeWidth: 1.75
        })
      ]
    });
  }
  function Q() {
    return (0, n.jsxs)(n.Fragment, {
      children: [
        (0, n.jsx)("span", {
          className: D().sep,
          "aria-hidden": "true",
          children: "\xA0\xB7"
        }),
        " "
      ]
    });
  }
  function Z({ value: e2, reserve: t2 }) {
    return (0, n.jsxs)("span", {
      className: D().count,
      children: [
        t2 && t2.length > e2.length ? (0, n.jsx)("span", {
          className: D().countSizer,
          "aria-hidden": "true",
          children: t2
        }) : null,
        (0, n.jsx)("span", { className: D().countValue, children: e2 })
      ]
    });
  }
  let J = (0, r.memo)(function({
    span: e2,
    agentName: t2,
    state: a2,
    dim: r2,
    pinned: s2,
    tabbable: i2,
    showIcon: l2,
    onHover: o2,
    onLeave: d2,
    onFocusSpan: c2,
    onBlurSpan: u2,
    onPick: h2
  }) {
    let m2 = "failed" === e2.status && "done" === a2, p2 = e2.toolInfo, x2 = p2 ? `${X[e2.kind]}, ${p2.name}` : X[e2.kind], _2 = e2.open ? `from ${A(e2.start)}, still running` : `${A(e2.start)} to ${A(e2.end)}`, k2 = `${t2}, ${x2}${m2 ? ", failed" : ""}: ${e2.label}, ${_2}${e2.tokens ? `, ${F(e2.tokens)} tokens` : ""}`;
    return (0, n.jsx)("button", {
      type: "button",
      className: D().span,
      "data-kind": e2.kind,
      "data-state": a2,
      "data-failed": m2 || void 0,
      "data-dim": r2 || void 0,
      "data-span-id": e2.id,
      "aria-pressed": s2,
      "aria-label": k2,
      tabIndex: i2 ? 0 : -1,
      style: { "--s": e2.start, "--d": e2.open ? 1e5 : e2.end - e2.start },
      onPointerEnter: (t3) => {
        "mouse" === t3.pointerType && o2(e2.id);
      },
      onPointerLeave: (e3) => {
        "mouse" === e3.pointerType && d2();
      },
      onFocus: (t3) => c2(e2.id, t3.currentTarget.matches(":focus-visible")),
      onBlur: u2,
      onClick: () => h2(e2.id),
      children: "done" === a2 && l2 && (m2 ? (0, n.jsx)(f.A, {
        className: D().spanIcon,
        "aria-hidden": "true",
        strokeWidth: 2
      }) : e2.retry ? (0, n.jsx)(g.A, {
        className: D().spanIcon,
        "aria-hidden": "true",
        strokeWidth: 2
      }) : null)
    });
  });
  function ee({
    span: e2,
    model: t2,
    now: a2,
    layoutKey: d2,
    reduced: c2,
    rootRef: h2,
    plotRef: m2,
    axisRef: p2
  }) {
    let k2 = (0, s.d)(0), y2 = (0, s.d)(0), v2 = (0, s.d)("0%"), b2 = (0, s.d)("auto"), j2 = (0, r.useRef)(null), N2 = (0, r.useRef)(null);
    (0, r.useLayoutEffect)(() => {
      let t3 = h2.current, a3 = m2.current;
      if (!t3 || !a3) return;
      let n2 = t3.getBoundingClientRect(), r2 = a3.getBoundingClientRect(), s2 = Math.min(280, n2.width - 16), l2 = r2.left - n2.left + e2.start / Math.max(p2.current, 1e-3) * r2.width, o2 = r2.top - n2.top + O(e2.row) - 8, d3 = o2 - 10 - 120 > 0, u2 = U(l2 - 12, 8, n2.width - s2 - 8), f2 = d3 ? o2 - 8 : o2 + 16 + 8, g2 = j2.current;
      if (j2.current = { id: e2.id, above: d3 }, !g2 || c2 || g2.above !== d3 || g2.id === e2.id) {
        k2.jump(u2), y2.jump(f2), v2.jump(d3 ? "-100%" : "0%");
        return;
      }
      (0, i.i)(k2, u2, { type: "spring", visualDuration: 0.26, bounce: 0 }), (0, i.i)(y2, f2, { type: "spring", visualDuration: 0.26, bounce: 0 });
    }, [e2.id, e2.start, e2.row, d2, c2, h2, m2, p2, k2, y2, v2]), (0, r.useEffect)(() => {
      let e3 = N2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = true, a3 = new ResizeObserver(([a4]) => {
        let n2 = a4?.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight;
        if (t3 || c2) {
          b2.jump(n2), t3 = false;
          return;
        }
        (0, i.i)(b2, n2, w.T.spring.smooth);
      });
      return a3.observe(e3), () => a3.disconnect();
    }, [b2, c2]);
    let S2 = t2.agents[e2.row], $2 = e2.toolInfo, I2 = !e2.open && a2 >= e2.end, P2 = "failed" === e2.status && I2, A2 = e2.open ? Math.max(0, a2 - e2.start) : Math.min(a2, e2.end) - e2.start, z2 = t2.connectors.filter(
      (t3) => t3.targetSpan === e2.id && t3.to === e2.row || t3.sourceSpan === e2.id && t3.from === e2.row
    ).filter((e3) => e3.at <= a2 + 0.01);
    return (0, n.jsx)(l.PY1.div, {
      className: D().cardLayer,
      style: { x: k2, y: y2 },
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: { duration: w.T.duration.fast, ease: [...w.T.ease.enter] }
      },
      exit: {
        opacity: 0,
        transition: {
          duration: w.T.duration.instant,
          ease: [...w.T.ease.standard]
        }
      },
      "aria-hidden": "true",
      children: (0, n.jsx)(l.PY1.div, {
        style: { y: v2 },
        children: (0, n.jsx)(l.PY1.div, {
          className: D().card,
          style: { height: b2 },
          initial: !c2 && { y: 3 },
          animate: { y: 0 },
          transition: w.T.spring.smooth,
          children: (0, n.jsx)("div", {
            ref: N2,
            children: (0, n.jsx)(o.N, {
              mode: "popLayout",
              initial: false,
              children: (0, n.jsxs)(
                l.PY1.div,
                {
                  className: D().cardBody,
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: {
                      duration: w.T.duration.fast,
                      ease: [...w.T.ease.enter]
                    }
                  },
                  exit: { opacity: 0, transition: { duration: 0.1 } },
                  children: [
                    (0, n.jsxs)("p", {
                      className: D().cardHead,
                      style: { "--c": S2.color },
                      children: [
                        (0, n.jsx)("span", { className: D().dot }),
                        (0, n.jsx)("span", {
                          className: D().cardAgent,
                          children: S2.name
                        }),
                        S2.model && (0, n.jsx)("span", {
                          className: D().cardModel,
                          children: S2.model
                        })
                      ]
                    }),
                    (0, n.jsx)("p", {
                      className: D().cardLabel,
                      children: e2.label
                    }),
                    (0, n.jsxs)("p", {
                      className: D().cardMeta,
                      children: [
                        $2 ? (0, n.jsxs)("span", {
                          className: D().cardTool,
                          children: [
                            (0, n.jsx)("span", {
                              className: D().mark,
                              children: (function(e3) {
                                if (e3.mark) return e3.mark;
                                let t3 = e3.name.toLowerCase();
                                return t3.includes("github") ? (0, n.jsx)(C, {}) : t3.includes("search") || t3.includes("google") ? (0, n.jsx)(R, {
                                  style: { color: "#4285F4" }
                                }) : t3.includes("postgres") ? (0, n.jsx)(M, {
                                  style: { color: "#4169E1" }
                                }) : t3.includes("notion") ? (0, n.jsx)(L, {}) : (0, n.jsx)(u.A, {
                                  "aria-hidden": "true",
                                  strokeWidth: 1.75
                                });
                              })($2)
                            }),
                            $2.name
                          ]
                        }) : (0, n.jsx)("span", { children: X[e2.kind] }),
                        (0, n.jsx)("span", {
                          className: D().sep,
                          children: "\xB7"
                        }),
                        (0, n.jsx)("span", {
                          className: D().tabular,
                          children: I2 ? W(A2) : `${W(A2)} so far`
                        }),
                        e2.tokens ? (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("span", {
                              className: D().sep,
                              children: "\xB7"
                            }),
                            (0, n.jsxs)("span", {
                              className: D().tabular,
                              children: [F(e2.tokens), " tokens"]
                            })
                          ]
                        }) : null
                      ]
                    }),
                    P2 && (0, n.jsxs)("p", {
                      className: D().cardFailed,
                      children: [
                        (0, n.jsx)(f.A, {
                          "aria-hidden": "true",
                          strokeWidth: 1.75
                        }),
                        (0, n.jsxs)("span", {
                          children: [
                            "Failed",
                            e2.detail ? `: ${e2.detail}` : ""
                          ]
                        })
                      ]
                    }),
                    !P2 && e2.detail && I2 && (0, n.jsxs)("p", {
                      className: D().cardNote,
                      children: [
                        e2.retry && (0, n.jsx)(g.A, {
                          "aria-hidden": "true",
                          strokeWidth: 1.75
                        }),
                        (0, n.jsx)("span", { children: e2.detail })
                      ]
                    }),
                    z2.length > 0 && z2.length <= 2 && z2.map((a3) => {
                      let r2 = a3.targetSpan === e2.id && a3.to === e2.row, s2 = t2.agents[r2 ? a3.from : a3.to], i2 = r2 ? x.A : _.A;
                      return (0, n.jsxs)(
                        "p",
                        {
                          className: D().cardNote,
                          children: [
                            (0, n.jsx)(i2, {
                              "aria-hidden": "true",
                              strokeWidth: 1.75
                            }),
                            (0, n.jsxs)("span", {
                              children: [
                                r2 ? "From" : "To",
                                " ",
                                s2.name.toLowerCase(),
                                a3.handoff.label ? `: ${a3.handoff.label}` : ""
                              ]
                            })
                          ]
                        },
                        a3.id
                      );
                    }),
                    z2.length > 2 && (0, n.jsxs)("p", {
                      className: D().cardNote,
                      children: [
                        (0, n.jsx)(x.A, {
                          "aria-hidden": "true",
                          strokeWidth: 1.75
                        }),
                        (0, n.jsxs)("span", {
                          children: [z2.length, " handoffs during this span"]
                        })
                      ]
                    })
                  ]
                },
                e2.id
              )
            })
          })
        })
      })
    });
  }
  function et({
    run: e2,
    agents: t2,
    spans: a2,
    handoffs: s2,
    title: i2,
    autoPlay: l2,
    speed: u2 = 1,
    speeds: m2 = [1, 2],
    live: p2 = false,
    onSpanSelect: g2,
    onComplete: _2,
    className: w2,
    style: C2
  }) {
    let R2 = e2 ?? (t2 || a2 ? void 0 : N), M2 = t2 ?? R2?.agents ?? G, L2 = a2 ?? R2?.spans ?? V, z2 = s2 ?? R2?.handoffs ?? K, B2 = (0, r.useMemo)(() => {
      var e10;
      let t3, a3, n2, r2, s3, i3, l3, o2, d2, c2, u3;
      return e10 = R2?.duration, t3 = /* @__PURE__ */ new Map(), a3 = M2.map(
        (e11, a4) => (t3.set(e11.id, a4), {
          ...e11,
          index: a4,
          color: e11.color ?? (0 === a4 ? "var(--text-secondary)" : P[(a4 - 1) % P.length])
        })
      ), n2 = [], L2.forEach((e11, r3) => {
        let s4, i4 = t3.get(e11.agentId);
        if (void 0 === i4) return;
        let l4 = a3[i4].price ?? 0;
        n2.push({
          ...e11,
          id: e11.id ?? `${e11.agentId}-${r3}`,
          index: n2.length,
          row: i4,
          open: void 0 === e11.end,
          toolInfo: null == (s4 = e11.tool) ? void 0 : "string" == typeof s4 ? { name: s4 } : s4,
          spanCost: e11.cost ?? (e11.tokens ?? 0) * l4 / 1e6
        });
      }), n2.sort((e11, t4) => e11.start - t4.start || e11.row - t4.row), n2.forEach((e11, t4) => {
        e11.index = t4;
      }), r2 = a3.map(() => []), n2.forEach((e11) => r2[e11.row].push(e11)), s3 = Math.max(
        0,
        ...n2.map((e11) => e11.end ?? e11.start),
        ...z2.map((e11) => e11.at)
      ), i3 = e10 ?? s3, l3 = [], z2.forEach((e11, n3) => {
        let s4 = t3.get(e11.from), i4 = t3.get(e11.to);
        if (void 0 === s4 || void 0 === i4 || s4 === i4) return;
        let { at: o3 } = e11, d3 = r2[s4], c3 = r2[i4], u4 = (e12) => e12.find((e13) => e13.start <= o3 && (e13.open || o3 < e13.end)), h2 = u4(d3) ? void 0 : d3.filter(
          (e12) => !e12.open && e12.end <= o3 + 0.01 && e12.end >= o3 - 1.5
        ).at(-1), m3 = c3.find((e12) => e12.start >= o3 - 0.01 && e12.start <= o3 + 2), p3 = h2 ? o3 - h2.end : 0, f2 = m3 ? m3.start - o3 : 0, g3 = p3 > 0.05 && p3 > f2 ? "in" : !(f2 > 0.05) && (h2 || u4(c3)) ? "line" : "out", x2 = "in" === g3 ? a3[s4].color : a3[i4].color;
        l3.push({
          id: `h${n3}`,
          handoff: e11,
          from: s4,
          to: i4,
          at: o3,
          shape: g3,
          up: i4 < s4,
          color: x2,
          x0: "in" === g3 ? h2.end : o3,
          x1: "out" === g3 ? m3?.start ?? o3 : o3,
          sourceSpan: ("in" === g3 ? h2 : u4(d3) ?? h2)?.id,
          targetSpan: (m3 ?? u4(c3))?.id
        });
      }), o2 = n2.filter((e11) => !e11.open), d2 = n2.reduce((e11, t4) => e11 + (t4.tokens ?? 0), 0), c2 = n2.reduce((e11, t4) => e11 + t4.spanCost, 0), u3 = o2.filter((e11) => "waiting" !== e11.kind).reduce((e11, t4) => e11 + (t4.end - t4.start), 0), {
        agents: a3,
        spans: n2,
        byRow: r2,
        connectors: l3,
        duration: i3,
        totals: { tokens: d2, cost: c2, speedup: i3 > 0 ? u3 / i3 : 0 }
      };
    }, [M2, L2, z2, R2?.duration]), X2 = Math.max(B2.duration, 1e-3), ea2 = R2?.startedAt, en2 = (0, r.useMemo)(
      () => Math.max(0, ...B2.spans.map((e10) => e10.end ?? e10.start)),
      [B2]
    ), er2 = i2 ?? R2?.title ?? "Agent run", es2 = l2 ?? (void 0 === e2 && void 0 === t2 && void 0 === a2), ei = (0, r.useId)(), el = (0, r.useSyncExternalStore)(
      q,
      () => true,
      () => false
    ), eo = (0, d.I)(), ed = el && !!eo, ec = (0, r.useRef)(null), eu = (0, r.useRef)(null), eh = (0, r.useRef)(null), em = (0, r.useRef)(null), ep = (0, r.useRef)(es2 || p2 ? 0 : X2), ef = (0, r.useRef)(p2 ? E(0, 0) : X2), eg = (0, r.useRef)(0), ex = (0, r.useRef)(u2), e_ = (0, r.useRef)(null), ek = (0, r.useRef)({
      auto: 0,
      manualUntil: 0,
      plotLeft: 0,
      plotWidth: 360,
      labels: 0
    }), ey = (0, r.useRef)(0), ev = (0, r.useRef)(0), eb = (0, r.useRef)(!(es2 || p2)), ej = (0, c.W)(ec, { amount: 0.2 }), [ew, eN] = (0, r.useState)(() => es2 || p2 ? 0 : X2), [eS, e$] = (0, r.useState)(es2 && !p2), [eI, eC] = (0, r.useState)(false), [eR, eM] = (0, r.useState)(u2), [eL, eP] = (0, r.useState)(false), [eA, ez] = (0, r.useState)(() => p2 ? E(0, 0) : X2), [eF, eT] = (0, r.useState)(360), [eW, eE] = (0, r.useState)(null), [eB, eD] = (0, r.useState)(null), [eO, eH] = (0, r.useState)(null), [eU, eq] = (0, r.useState)(null), [eG, eV] = (0, r.useState)(0), [eK, eX] = (0, r.useState)(p2);
    eK !== p2 && (eX(p2), p2 || (eN(X2), e$(false), ez(X2)));
    let eY = ed && es2 && !eI && !p2, eQ = eY ? X2 : p2 ? ew : Math.min(ew, X2), eZ = p2 ? eA : X2, eJ = !p2 && eQ >= X2 - 1e-6, e0 = eS && !eY || p2;
    (0, r.useEffect)(() => {
      ex.current = eR;
    }, [eR]), (0, r.useEffect)(() => () => window.clearTimeout(ey.current), []);
    let e1 = (0, r.useCallback)((e10, t3 = false) => {
      ep.current = e10, eh.current?.style.setProperty("--now", e10.toFixed(3));
      let a3 = performance.now();
      (t3 || a3 - eg.current >= 48) && (eg.current = a3, eN(e10));
    }, []), e22 = (0, r.useCallback)((e10) => {
      let t3 = eu.current, a3 = ek.current;
      if (!t3 || t3.scrollWidth <= t3.clientWidth + 1 || performance.now() < a3.manualUntil)
        return;
      let n2 = a3.plotLeft + e10 / Math.max(ef.current, 1e-3) * a3.plotWidth, r2 = t3.clientWidth - a3.labels, s3 = U(n2 - a3.labels - 0.62 * r2, 0, t3.scrollWidth - t3.clientWidth);
      s3 > t3.scrollLeft + 0.5 && (a3.auto = s3, t3.scrollLeft = s3);
    }, []);
    (0, r.useEffect)(() => {
      if (!eS || eY || p2 || eL || !ej) return;
      let e10 = 0, t3 = performance.now(), a3 = (n2) => {
        let r2 = U((n2 - t3) / 1e3, 0, 0.1);
        t3 = n2;
        let s3 = Math.min(X2, ep.current + r2 * ex.current);
        (e1(s3, s3 >= X2), e22(s3), s3 >= X2) ? e$(false) : e10 = requestAnimationFrame(a3);
      };
      return e10 = requestAnimationFrame(a3), () => cancelAnimationFrame(e10);
    }, [eS, eY, p2, eL, ej, X2, e1, e22]), (0, r.useEffect)(() => {
      if (!p2) return;
      ev.current || (ev.current = Date.now());
      let e10 = ea2 ?? ev.current, t3 = eh.current, a3 = 0, n2 = performance.now(), r2 = ef.current, s3 = (i3) => {
        let l3 = U((i3 - n2) / 1e3, 0, 0.1);
        n2 = i3;
        let o2 = Math.max(0, (Date.now() - e10) / 1e3), d2 = E(o2, en2);
        d2 !== r2 && (r2 = d2, ez(d2));
        let c2 = ed ? r2 : ef.current + (r2 - ef.current) * (1 - Math.exp(-(7 * l3)));
        ef.current = 5e-3 > Math.abs(r2 - c2) ? r2 : c2, t3?.style.setProperty("--axis", ef.current.toFixed(3)), e1(o2), e22(o2), a3 = requestAnimationFrame(s3);
      };
      return a3 = requestAnimationFrame(s3), () => {
        cancelAnimationFrame(a3), t3?.style.removeProperty("--axis");
      };
    }, [p2, ea2, en2, ed, e1, e22]), (0, r.useEffect)(() => {
      p2 || (ef.current = X2);
    }, [p2, X2]), (0, r.useLayoutEffect)(() => {
      e0 || eL || (ep.current = eQ, eh.current?.style.setProperty("--now", eQ.toFixed(3)));
    }, [e0, eL, eQ]), (0, r.useEffect)(() => {
      eJ && !eb.current && (eb.current = true, _2?.()), eJ || (eb.current = false);
    }, [eJ, _2]), (0, r.useEffect)(() => {
      let e10 = eh.current, t3 = eu.current;
      if (!e10 || !t3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(() => {
        let a4 = e10.getBoundingClientRect(), n2 = t3.getBoundingClientRect(), r2 = t3.querySelector(`.${D().labels}`)?.offsetWidth ?? 0;
        Object.assign(ek.current, {
          plotLeft: a4.left - n2.left + t3.scrollLeft,
          plotWidth: a4.width,
          labels: r2
        }), eT(Math.round(a4.width));
      });
      return a3.observe(e10), a3.observe(t3), () => a3.disconnect();
    }, []);
    let e4 = (0, r.useMemo)(() => new Map(B2.spans.map((e10) => [e10.id, e10])), [B2]), e5 = (0, r.useMemo)(
      () => (function(e10, t3) {
        if (!t3) return null;
        let a3 = e10.spans.find((e11) => e11.id === t3);
        if (!a3) return null;
        let n2 = /* @__PURE__ */ new Set([a3.id]), r2 = /* @__PURE__ */ new Set(), s3 = a3.end ?? 1 / 0;
        if (0 === a3.row)
          e10.connectors.forEach((e11) => {
            (e11.sourceSpan === a3.id || e11.targetSpan === a3.id) && (r2.add(e11.id), e11.sourceSpan && n2.add(e11.sourceSpan), e11.targetSpan && n2.add(e11.targetSpan));
          });
        else {
          let t4 = e10.connectors.filter((e11) => e11.to === a3.row && e11.at <= a3.start + 0.01).at(-1), i3 = e10.connectors.find(
            (e11) => e11.from === a3.row && e11.at >= s3 - 0.01
          ), l3 = t4?.at ?? -1 / 0, o2 = i3?.at ?? 1 / 0;
          e10.byRow[a3.row].forEach((e11) => {
            e11.start >= l3 - 0.01 && (e11.end ?? 1 / 0) <= o2 + 0.01 && n2.add(e11.id);
          }), [t4, i3].forEach((e11) => {
            e11 && (r2.add(e11.id), e11.sourceSpan && n2.add(e11.sourceSpan), e11.targetSpan && n2.add(e11.targetSpan));
          });
        }
        return { spans: n2, links: r2 };
      })(B2, eO),
      [B2, eO]
    ), e3 = (e10) => e10.start <= eQ + 1e-6, e6 = eW ?? eB ?? eO, e7 = e6 ? e4.get(e6) : void 0, e8 = e7 && e3(e7) ? e7 : void 0, e9 = B2.spans.find(e3), te = eU && e4.get(eU) && e3(e4.get(eU)) ? eU : e9?.id ?? null, [tt] = (0, r.useState)(
      () => new Set(
        B2.connectors.filter((e10) => e10.at <= (es2 || p2 ? 0 : X2)).map((e10) => e10.id)
      )
    ), ta = (0, r.useCallback)((e10) => {
      window.clearTimeout(ey.current), eE(e10);
    }, []), tn = (0, r.useCallback)(() => {
      window.clearTimeout(ey.current), ey.current = window.setTimeout(() => eE(null), 80);
    }, []), tr = (0, r.useCallback)((e10, t3) => {
      eq(e10), t3 && eD(e10);
    }, []), ts = (0, r.useCallback)(() => eD(null), []), ti = (0, r.useCallback)(
      (e10) => {
        let t3 = eO === e10 ? null : e10;
        eH(t3), eq(e10), g2?.(t3 ? e4.get(t3) ?? null : null);
      },
      [eO, g2, e4]
    ), tl = () => {
      eO && (eH(null), g2?.(null));
    }, to = (e10) => {
      let t3 = eh.current?.getBoundingClientRect();
      return !t3 || t3.width <= 0 ? ep.current : U((e10 - t3.left) / t3.width, 0, 1) * X2;
    }, td = (e10) => {
      e_.current?.id === e10.pointerId && (e_.current = null, eP(false), e1(ep.current, true), ep.current >= X2 && e$(false));
    }, tc = 0, tu = 0, th = 0, tm = 0, tp = 0, tf = /* @__PURE__ */ new Set();
    for (let e10 of B2.spans) {
      let t3 = (function(e11, t4) {
        if (t4 <= e11.start) return 0;
        if (e11.open) return 1;
        let a3 = e11.end - e11.start;
        return a3 <= 0 ? 1 : Math.min(1, (t4 - e11.start) / a3);
      })(e10, eQ);
      tc += (e10.tokens ?? 0) * t3, tm += e10.tokens ?? 0, tp += e10.spanCost, tu += e10.spanCost * t3, "waiting" !== e10.kind && e10.start <= eQ && (e10.open || eQ < e10.end) && tf.add(e10.row);
    }
    th = tf.size;
    let tg = B2.totals.speedup, tx = [
      `${B2.agents.length} agents`,
      W(X2),
      tg >= 1.1 ? `${tg.toFixed(1)}x faster than sequential` : null,
      T(B2.totals.cost)
    ].filter(Boolean), t_ = e0 ? "running" : eQ <= 0 ? "ready" : "paused", tk = eJ ? `Run finished: ${tx.join(", ")}` : e0 && eI ? p2 ? "Following the live run" : `Replaying at ${eR}x` : eI && !eL ? `Paused at ${A(eQ)}` : "", ty = (function(e10, t3, a3 = 56) {
      let n2 = [1, 2, 5, 10, 15, 30, 60, 120, 300, 600], r2 = t3 / Math.max(e10, 1e-3);
      return n2.find((e11) => e11 * r2 >= a3) ?? n2.at(-1);
    })(eZ, eF), tv = [];
    for (let e10 = 0; e10 <= eZ + 1e-6; e10 += ty) tv.push(Math.round(100 * e10) / 100);
    let tb = eF / Math.max(eZ, 1e-3), tj = el && !ed, tw = Array.from(/* @__PURE__ */ new Set([...m2, u2])).sort((e10, t3) => e10 - t3).map((e10) => ({ value: String(e10), label: `${e10}x` })), tN = 6 + 44 * B2.agents.length, tS = `${eG}:${eF}:${eA}`;
    return (0, n.jsxs)("section", {
      ref: ec,
      className: [D().root, w2].filter(Boolean).join(" "),
      style: C2,
      "aria-labelledby": `${ei}-title`,
      onKeyDown: (e10) => {
        "Escape" === e10.key && eO && !e10.target.dataset?.spanId && tl();
      },
      children: [
        (0, n.jsxs)("div", {
          className: D().inner,
          children: [
            (0, n.jsxs)("header", {
              className: D().header,
              children: [
                (0, n.jsx)("h3", {
                  id: `${ei}-title`,
                  className: D().title,
                  children: er2
                }),
                (0, n.jsxs)("div", {
                  className: D().status,
                  children: [
                    (0, n.jsxs)("p", {
                      className: D().layer,
                      "data-on": !eJ || void 0,
                      "aria-hidden": eJ || void 0,
                      children: [
                        (0, n.jsxs)("span", {
                          className: D().word,
                          children: [
                            (0, n.jsx)("span", {
                              className: D().wordItem,
                              "data-on": "running" === t_ || void 0,
                              children: (0, n.jsx)(j.n, {
                                active: e0 && !ed,
                                children: p2 ? "Live" : "Running"
                              })
                            }),
                            !p2 && (0, n.jsx)("span", {
                              className: D().wordItem,
                              "data-on": "paused" === t_ || void 0,
                              children: "Paused"
                            }),
                            !p2 && (0, n.jsx)("span", {
                              className: D().wordItem,
                              "data-on": "ready" === t_ || void 0,
                              children: "Ready"
                            })
                          ]
                        }),
                        (0, n.jsx)(Q, {}),
                        (0, n.jsx)("span", {
                          className: D().part,
                          children: (0, n.jsx)(Z, {
                            value: A(eQ),
                            reserve: p2 ? void 0 : A(X2)
                          })
                        }),
                        (0, n.jsx)(Q, {}),
                        (0, n.jsxs)("span", {
                          className: D().part,
                          children: [
                            (0, n.jsx)(Z, {
                              value: F(tc),
                              reserve: p2 ? void 0 : F(tm)
                            }),
                            " ",
                            (0, n.jsx)("span", {
                              className: D().unit,
                              children: "tokens"
                            })
                          ]
                        }),
                        (0, n.jsx)(Q, {}),
                        (0, n.jsx)("span", {
                          className: D().part,
                          children: (0, n.jsx)(Z, {
                            value: T(tu),
                            reserve: p2 ? void 0 : T(tp)
                          })
                        }),
                        th > 0 && e0 ? (0, n.jsxs)("span", {
                          className: D().srOnly,
                          children: [", ", th, " agents working"]
                        }) : null
                      ]
                    }),
                    (0, n.jsxs)("p", {
                      className: D().layer,
                      "data-on": eJ || void 0,
                      "aria-hidden": !eJ || void 0,
                      children: [
                        (0, n.jsx)(k.A, {
                          className: D().doneIcon,
                          "aria-hidden": "true",
                          strokeWidth: 1.75
                        }),
                        (0, n.jsx)("span", {
                          className: D().srOnly,
                          children: "Finished: "
                        }),
                        tx.map(
                          (e10, t3) => (0, n.jsxs)(
                            r.Fragment,
                            {
                              children: [
                                t3 > 0 && (0, n.jsx)(Q, {}),
                                (0, n.jsx)("span", {
                                  className: D().part,
                                  children: e10
                                })
                              ]
                            },
                            e10
                          )
                        )
                      ]
                    })
                  ]
                })
              ]
            }),
            (0, n.jsx)("div", {
              ref: eu,
              className: D().scroller,
              onScroll: () => {
                let e10 = eu.current;
                e10 && (e10.toggleAttribute("data-scrolled", e10.scrollLeft > 1), Math.abs(e10.scrollLeft - ek.current.auto) > 2 && (ek.current.manualUntil = performance.now() + 2500), e8 && eV((e11) => e11 + 1));
              },
              children: (0, n.jsxs)("div", {
                className: D().body,
                style: {
                  "--now": eQ,
                  "--axis": eZ,
                  "--rows-h": `${tN}px`,
                  "--row": "44px",
                  "--bar": "16px",
                  "--pad": "6px",
                  "--axis-h": "30px"
                },
                children: [
                  (0, n.jsx)("div", {
                    className: D().labels,
                    children: B2.agents.map(
                      (e10) => (0, n.jsxs)(
                        "div",
                        {
                          id: `${ei}-row-${e10.index}`,
                          className: D().label,
                          style: { "--c": e10.color },
                          children: [
                            (0, n.jsx)("span", {
                              className: D().dot,
                              "aria-hidden": "true"
                            }),
                            (0, n.jsxs)("span", {
                              className: D().labelText,
                              children: [
                                (0, n.jsx)("span", {
                                  className: D().name,
                                  children: e10.name
                                }),
                                e10.model && (0, n.jsxs)("span", {
                                  className: D().model,
                                  children: [
                                    (0, n.jsx)("span", {
                                      className: D().mark,
                                      "aria-hidden": "true",
                                      children: (function(e11) {
                                        if (e11.mark) return e11.mark;
                                        let t3 = (e11.model ?? "").toLowerCase();
                                        return t3.includes("claude") ? (0, n.jsx)(S, {
                                          style: { color: "#D97757" }
                                        }) : t3.includes("gpt") || t3.includes("openai") ? (0, n.jsx)($, {}) : t3.includes("gemini") ? (0, n.jsx)(I, {}) : (0, n.jsx)(h.A, {
                                          "aria-hidden": "true",
                                          strokeWidth: 1.75
                                        });
                                      })(e10)
                                    }),
                                    (0, n.jsx)("span", {
                                      className: D().modelName,
                                      children: e10.model
                                    })
                                  ]
                                })
                              ]
                            })
                          ]
                        },
                        e10.id
                      )
                    )
                  }),
                  (0, n.jsx)("div", {
                    className: D().track,
                    children: (0, n.jsxs)("div", {
                      ref: eh,
                      className: D().plot,
                      "data-path": e5 ? "" : void 0,
                      onKeyDown: (e10) => {
                        let t3, a3 = e10.target.dataset?.spanId, n2 = a3 ? e4.get(a3) : void 0;
                        if (!n2) return;
                        if ("Escape" === e10.key) {
                          eO && (e10.preventDefault(), tl());
                          return;
                        }
                        let r2 = (e11) => B2.byRow[e11].filter(e3), s3 = (e11) => (e11.start + Math.min(e11.end ?? eQ, eQ)) / 2, i3 = r2(n2.row), l3 = i3.findIndex((e11) => e11.id === n2.id);
                        if ("ArrowRight" === e10.key) t3 = i3[l3 + 1];
                        else if ("ArrowLeft" === e10.key) t3 = i3[l3 - 1];
                        else if ("Home" === e10.key) t3 = i3[0];
                        else if ("End" === e10.key) t3 = i3.at(-1);
                        else {
                          if ("ArrowDown" !== e10.key && "ArrowUp" !== e10.key)
                            return;
                          let a4 = "ArrowDown" === e10.key ? 1 : -1;
                          for (let e11 = n2.row + a4; e11 >= 0 && e11 < B2.agents.length && !t3; e11 += a4)
                            t3 = r2(e11).reduce(
                              (e12, t4) => !e12 || Math.abs(s3(t4) - s3(n2)) < Math.abs(s3(e12) - s3(n2)) ? t4 : e12,
                              void 0
                            );
                        }
                        e10.preventDefault(), t3 && (eq(t3.id), eh.current?.querySelector(
                          `[data-span-id="${CSS.escape(t3.id)}"]`
                        )?.focus());
                      },
                      onClick: (e10) => {
                        e10.target.closest("button") || e10.target.closest(`.${D().axis}`) || tl();
                      },
                      children: [
                        (0, n.jsx)("div", {
                          className: D().grid,
                          "aria-hidden": "true",
                          children: tv.map(
                            (e10) => (0, n.jsx)(
                              "span",
                              {
                                className: D().gridline,
                                style: { left: `calc(${H(e10)})` }
                              },
                              e10
                            )
                          )
                        }),
                        (0, n.jsx)("div", {
                          className: D().links,
                          "aria-hidden": "true",
                          children: B2.connectors.filter((e10) => e10.at <= eQ + 1e-6).map((e10) => {
                            let t3, a3, r2, s3, i3;
                            return (0, n.jsx)(
                              "span",
                              {
                                className: D().link,
                                "data-shape": e10.shape,
                                "data-dir": e10.up ? "up" : "down",
                                "data-draw": tj && (eI || p2 || !tt.has(e10.id)) || void 0,
                                "data-hot": e5?.links.has(e10.id) || void 0,
                                style: (r2 = (e11) => O(e11) - 8, s3 = (e11) => O(e11) + 8, "out" === e10.shape ? [t3, a3] = e10.up ? [O(e10.to) - 0.75, r2(e10.from)] : [s3(e10.from), O(e10.to) + 0.75] : "in" === e10.shape ? [t3, a3] = e10.up ? [s3(e10.to), O(e10.from) + 0.75] : [O(e10.from) - 0.75, r2(e10.to)] : [t3, a3] = e10.up ? [s3(e10.to), r2(e10.from)] : [s3(e10.from), r2(e10.to)], i3 = 0.75 * ("in" !== e10.shape), {
                                  "--c": e10.color,
                                  top: t3,
                                  height: Math.max(0, a3 - t3),
                                  left: `calc(${H(e10.x0)} - ${i3}px)`,
                                  width: "line" === e10.shape ? 1.5 : `calc(${H(e10.x1 - e10.x0)} + 0.75px)`
                                })
                              },
                              e10.id
                            );
                          })
                        }),
                        B2.agents.map(
                          (e10) => (0, n.jsx)(
                            "div",
                            {
                              role: "group",
                              "aria-labelledby": `${ei}-row-${e10.index}`,
                              className: D().row,
                              style: { "--c": e10.color, top: 6 + 44 * e10.index },
                              children: B2.byRow[e10.index].filter(e3).map((t3) => {
                                let a3 = t3.open ? p2 ? "active" : "done" : eQ < t3.end ? "active" : "done";
                                return (0, n.jsx)(
                                  J,
                                  {
                                    span: t3,
                                    agentName: e10.name,
                                    state: a3,
                                    dim: !!e5 && !e5.spans.has(t3.id),
                                    pinned: eO === t3.id,
                                    tabbable: te === t3.id,
                                    showIcon: !t3.open && (t3.end - t3.start) * tb >= 15,
                                    onHover: ta,
                                    onLeave: tn,
                                    onFocusSpan: tr,
                                    onBlurSpan: ts,
                                    onPick: ti
                                  },
                                  t3.id
                                );
                              })
                            },
                            e10.id
                          )
                        ),
                        (0, n.jsx)("div", {
                          className: D().ports,
                          "aria-hidden": "true",
                          children: B2.connectors.filter((e10) => e10.at <= eQ + 1e-6).map((e10) => {
                            let t3, a3, r2;
                            return (0, n.jsx)(
                              "span",
                              {
                                className: D().port,
                                "data-draw": tj && (eI || p2 || !tt.has(e10.id)) || void 0,
                                "data-hot": e5?.links.has(e10.id) || void 0,
                                style: (t3 = "in" === e10.shape ? e10.to : e10.from, e10.shape, a3 = !e10.up, r2 = "in" === e10.shape ? e10.up ? O(t3) + 8 : O(t3) - 8 : a3 ? O(t3) + 8 : O(t3) - 8, {
                                  "--c": e10.color,
                                  top: r2,
                                  left: `calc(${H(e10.at)})`,
                                  "--delay": "in" === e10.shape ? "260ms" : "0ms"
                                })
                              },
                              e10.id
                            );
                          })
                        }),
                        (0, n.jsx)("div", {
                          className: D().playhead,
                          "data-settled": eJ && !eL || void 0,
                          "aria-hidden": "true"
                        }),
                        (0, n.jsxs)("div", {
                          className: D().axis,
                          "data-live": p2 || void 0,
                          onPointerDown: (e10) => {
                            p2 || 0 !== e10.button || (e10.preventDefault(), e10.currentTarget.setPointerCapture(e10.pointerId), em.current?.focus({ preventScroll: true }), e_.current = { id: e10.pointerId }, eC(true), eP(true), eY && e$(false), e1(to(e10.clientX), true));
                          },
                          onPointerMove: (e10) => {
                            e_.current?.id === e10.pointerId && e1(to(e10.clientX));
                          },
                          onPointerUp: td,
                          onPointerCancel: td,
                          children: [
                            tv.map(
                              (e10) => (0, n.jsx)(
                                "span",
                                {
                                  className: D().tick,
                                  style: { left: `calc(${H(e10)})` },
                                  "aria-hidden": "true",
                                  children: (function(e11) {
                                    if (e11 < 60) return `${e11}s`;
                                    let t3 = Math.floor(e11 / 60), a3 = Math.round(e11 % 60);
                                    return a3 ? `${t3}m ${a3}s` : `${t3}m`;
                                  })(e10)
                                },
                                e10
                              )
                            ),
                            (0, n.jsx)("span", {
                              ref: em,
                              className: D().knob,
                              "data-active": eL || void 0,
                              role: "slider",
                              tabIndex: p2 ? -1 : 0,
                              "aria-label": "Run time",
                              "aria-valuemin": 0,
                              "aria-valuemax": Number(X2.toFixed(1)),
                              "aria-valuenow": Number(eQ.toFixed(1)),
                              "aria-valuetext": `${A(eQ)} of ${A(p2 ? eQ : X2)}`,
                              "aria-disabled": p2 || void 0,
                              onKeyDown: (e10) => {
                                if (p2) return;
                                let t3 = e10.shiftKey ? 5 : 0.5, a3 = eY ? X2 : ep.current, n2 = "ArrowRight" === e10.key || "ArrowUp" === e10.key ? a3 + t3 : "ArrowLeft" === e10.key || "ArrowDown" === e10.key ? a3 - t3 : "PageUp" === e10.key ? a3 + 5 : "PageDown" === e10.key ? a3 - 5 : "Home" === e10.key ? 0 : "End" === e10.key ? X2 : null;
                                null !== n2 && (e10.preventDefault(), eC(true), eY && e$(false), e1(U(n2, 0, X2), true));
                              }
                            })
                          ]
                        })
                      ]
                    })
                  })
                ]
              })
            }),
            (0, n.jsxs)("footer", {
              className: D().footer,
              children: [
                !p2 && (0, n.jsxs)("div", {
                  className: D().controls,
                  children: [
                    (0, n.jsx)(v.$, {
                      variant: "secondary",
                      size: "sm",
                      className: D().iconButton,
                      "aria-label": e0 ? "Pause" : eJ || eY ? "Replay" : "Play",
                      onClick: () => {
                        if (eC(true), e0 && !p2) {
                          e1(ep.current, true), e$(false);
                          return;
                        }
                        (eJ || eY) && (e1(0, true), tl(), eE(null), ek.current.manualUntil = 0, eu.current?.scrollTo({
                          left: 0,
                          behavior: ed ? "auto" : "smooth"
                        })), e$(true);
                      },
                      children: (0, n.jsx)(Y, { playing: e0 })
                    }),
                    (0, n.jsx)(v.$, {
                      variant: "ghost",
                      size: "sm",
                      className: D().iconButton,
                      "aria-label": "Restart",
                      onClick: () => {
                        eC(true), e1(0, true), tl(), eE(null), ek.current.manualUntil = 0, eu.current?.scrollTo({
                          left: 0,
                          behavior: ed ? "auto" : "smooth"
                        }), e$(true);
                      },
                      children: (0, n.jsx)(y.A, {
                        "aria-hidden": "true",
                        strokeWidth: 1.75
                      })
                    }),
                    tw.length > 1 && (0, n.jsx)(b.A, {
                      label: "Playback speed",
                      options: tw,
                      value: String(eR),
                      onValueChange: (e10) => eM(Number(e10))
                    })
                  ]
                }),
                (0, n.jsxs)("ul", {
                  className: D().legend,
                  "aria-label": "Legend",
                  children: [
                    (0, n.jsxs)("li", {
                      children: [
                        (0, n.jsx)("span", {
                          className: D().swatch,
                          "data-kind": "thinking",
                          "aria-hidden": "true"
                        }),
                        "Thinking"
                      ]
                    }),
                    (0, n.jsxs)("li", {
                      children: [
                        (0, n.jsx)("span", {
                          className: D().swatch,
                          "data-kind": "tool",
                          "aria-hidden": "true"
                        }),
                        "Tool call"
                      ]
                    }),
                    (0, n.jsxs)("li", {
                      children: [
                        (0, n.jsx)("span", {
                          className: D().swatch,
                          "data-kind": "waiting",
                          "aria-hidden": "true"
                        }),
                        "Waiting"
                      ]
                    }),
                    (0, n.jsxs)("li", {
                      children: [
                        (0, n.jsx)(x.A, {
                          className: D().legendIcon,
                          "aria-hidden": "true",
                          strokeWidth: 1.75
                        }),
                        "Handoff"
                      ]
                    }),
                    B2.spans.some((e10) => "failed" === e10.status) && (0, n.jsxs)("li", {
                      children: [
                        (0, n.jsx)(f.A, {
                          className: D().legendFailed,
                          "aria-hidden": "true",
                          strokeWidth: 1.75
                        }),
                        "Failed"
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, n.jsx)(o.N, {
          children: e8 && (0, n.jsx)(
            ee,
            {
              span: e8,
              model: B2,
              now: eQ,
              layoutKey: tS,
              reduced: ed,
              rootRef: ec,
              plotRef: eh,
              axisRef: ef
            },
            "card"
          )
        }),
        (0, n.jsx)("p", {
          className: D().srOnly,
          "aria-live": "polite",
          children: tk
        })
      ]
    });
  }
  var ea = a(19819), en = a.n(ea);
  function er() {
    return (0, n.jsx)("div", {
      className: en().demo,
      children: (0, n.jsx)(et, {})
    });
  }
  let es = er;
}

__m(__module,__exports,__require);
});
A.regCss(19819, ".demo{display:grid;width:100%;max-width:760px;margin-inline:auto}", {"demo":"demo"});
A.reg(36408, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => l });
  var n = r(51811);
  let a = {
    name: "corner-down-right",
    size: 24,
    node: [
      ["path", { d: "m15 10 5 5-5 5", key: "qqa56n" }],
      ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12", key: "z08zvw" }]
    ]
  };
  a.node;
  let l = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(41189, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var r = a(51811);
  let l = {
    name: "rotate-cw",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
          key: "1p45f6"
        }
      ],
      ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
    ]
  };
  l.node;
  let n = (0, r.A)(l);
}

__m(__module,__exports,__require);
});
A.reg(57990, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => l });
  var r = t(51811);
  let n = {
    name: "wrench",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
          key: "1ngwbx"
        }
      ]
    ]
  };
  n.node;
  let l = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(66958, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var s = a(51811);
  let i = {
    name: "corner-up-left",
    size: 24,
    node: [
      ["path", { d: "M20 20v-7a4 4 0 0 0-4-4H4", key: "1nkjon" }],
      ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }]
    ]
  };
  i.node;
  let n = (0, s.A)(i);
}

__m(__module,__exports,__require);
});
A.regCss(68098, ".agent-timeline_root__OFvYA{--tint:24%;--shine:color-mix(in oklab,var(--background) 62%,transparent);position:relative;container-type:inline-size;width:100%;min-width:0;border:1px solid var(--border);border-radius:var(--radius-surface);background:var(--surface);color:var(--foreground);font-size:var(--text-sm);line-height:var(--leading-body);letter-spacing:var(--tracking-body)}[data-theme=dark] .agent-timeline_root__OFvYA{--tint:34%;--shine:color-mix(in oklab,var(--foreground) 22%,transparent)}.agent-timeline_inner__uC_jD{--gutter:var(--space-6);--label-w:176px;--plot-min:320px;display:grid;min-width:0;gap:var(--space-4);padding-block:var(--space-5)}.agent-timeline_header__00vvG{display:grid;min-width:0;gap:2px;padding-inline:var(--gutter)}.agent-timeline_title__ntHdf{margin:0;color:var(--foreground);font-size:var(--text-base);font-weight:500;line-height:var(--leading-body);letter-spacing:var(--tracking-body)}.agent-timeline_status__tvxKL{display:grid;min-width:0;color:var(--text-secondary)}.agent-timeline_layer__mX6Q9{grid-area:1/1;min-width:0;margin:0;opacity:0;visibility:hidden;transition:opacity .1s var(--ease-standard),visibility 0s linear .1s}.agent-timeline_layer__mX6Q9[data-on]{opacity:1;visibility:visible;transition:opacity var(--duration-fast) var(--ease-enter),visibility 0s}.agent-timeline_word__0GfmO{display:inline-grid;color:var(--foreground)}.agent-timeline_part__Q8hEC{color:var(--foreground);white-space:nowrap}.agent-timeline_unit__DHffe{color:var(--text-secondary)}.agent-timeline_wordItem__H6w2P{grid-area:1/1;opacity:0;transition:opacity .1s var(--ease-standard)}.agent-timeline_wordItem__H6w2P[data-on]{opacity:1;transition:opacity var(--duration-fast) var(--ease-enter)}.agent-timeline_count__bKQQf{display:inline-grid;justify-items:end;font-variant-numeric:tabular-nums;white-space:nowrap}.agent-timeline_count__bKQQf>*{grid-area:1/1}.agent-timeline_countSizer__0VWf4{visibility:hidden}.agent-timeline_countValue__gWiCJ{color:var(--foreground)}.agent-timeline_sep__dhlYZ{color:var(--text-muted)}.agent-timeline_tabular__E1GUF{font-variant-numeric:tabular-nums}.agent-timeline_doneIcon__I7rF3{display:inline-block;width:16px;height:16px;margin-right:6px;color:var(--success);vertical-align:-3px}.agent-timeline_scroller__pJH4D{min-width:0;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scrollbar-width:thin;scrollbar-color:var(--border-strong) transparent}.agent-timeline_body__i5OnD{display:grid;min-width:0;grid-template-columns:var(--label-w) minmax(calc(var(--plot-min) + 12px + var(--gutter)),1fr)}.agent-timeline_labels__1uDhv{position:sticky;left:0;z-index:6;min-width:0;padding:var(--pad) var(--space-3) var(--axis-h) var(--gutter);background:var(--surface);transition:box-shadow var(--duration-fast) var(--ease-standard)}.agent-timeline_scroller__pJH4D[data-scrolled] .agent-timeline_labels__1uDhv{box-shadow:1px 0 0 var(--border)}.agent-timeline_label__dXmae{display:grid;height:var(--row);min-width:0;grid-template-columns:8px minmax(0,1fr);grid-template-areas:\"dot name\" \". model\";align-content:center;align-items:center;column-gap:10px}.agent-timeline_labelText__06m0A{display:contents}.agent-timeline_dot__EHYeO{grid-area:dot;width:8px;height:8px;flex:none;border-radius:50%;background:var(--c)}.agent-timeline_name__R54_5{grid-area:name;overflow:hidden;color:var(--foreground);font-weight:500;text-overflow:ellipsis;white-space:nowrap}.agent-timeline_model__ghXRX{grid-area:model;display:flex;min-width:0;align-items:center;gap:5px;color:var(--text-muted);font-size:var(--text-xs)}.agent-timeline_modelName__ZXzba{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.agent-timeline_mark__nx6sa{display:inline-grid;width:12px;height:12px;flex:none;color:var(--text-secondary)}.agent-timeline_mark__nx6sa>svg{width:100%;height:100%}.agent-timeline_track__bktrb{min-width:0;padding:0 var(--gutter) 0 12px}.agent-timeline_plot__zkf66{position:relative;height:calc(var(--rows-h) + var(--axis-h))}.agent-timeline_grid__7uI9V{position:absolute;inset:0 0 var(--axis-h);pointer-events:none}.agent-timeline_gridline__cqugt{position:absolute;top:0;bottom:0;width:1px;margin-left:-.5px;background:var(--border-subtle)}.agent-timeline_row__PO8PV{position:absolute;left:0;right:0;z-index:2;height:var(--row);pointer-events:none}.agent-timeline_span__SgslB{--fill:color-mix(in oklab,var(--c) var(--tint),var(--surface));position:absolute;top:calc((var(--row) - var(--bar)) / 2);left:calc(var(--s) / var(--axis) * 100% + .75px);display:grid;width:max(0px,calc(clamp(0, var(--now) - var(--s), var(--d)) / var(--axis) * 100% - 1.5px));height:var(--bar);place-items:center;overflow:hidden;padding:0;border:0;border-radius:5px;background:var(--fill);color:var(--surface);cursor:pointer;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity var(--duration-fast) var(--ease-standard),background-color var(--duration-fast) var(--ease-standard),box-shadow var(--duration-fast) var(--ease-standard),border-radius var(--duration-fast) var(--ease-standard)}.agent-timeline_span__SgslB[data-kind=tool]{--fill:var(--c)}.agent-timeline_span__SgslB[data-kind=waiting]{background:repeating-linear-gradient(-45deg,color-mix(in oklab,var(--c) 30%,transparent) 0 1px,transparent 1px 5px),color-mix(in oklab,var(--c) 5%,var(--surface));box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--c) 24%,transparent)}.agent-timeline_span__SgslB[data-state=active]{border-start-end-radius:1.5px;border-end-end-radius:1.5px;box-shadow:inset -2px 0 0 var(--c)}.agent-timeline_span__SgslB[data-kind=tool][data-state=active]{box-shadow:inset -2px 0 0 color-mix(in oklab,var(--c) 70%,var(--foreground))}.agent-timeline_span__SgslB[data-kind=waiting][data-state=active]{box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--c) 24%,transparent),inset -2px 0 0 var(--c)}.agent-timeline_span__SgslB[data-state=active]:not([data-kind=waiting]):after{content:\"\";position:absolute;inset:0;background:linear-gradient(90deg,transparent,var(--shine),transparent) no-repeat;background-size:28px 100%;animation:agent-timeline_shine__DBwf7 1.5s var(--ease-in-out) infinite}.agent-timeline_span__SgslB[data-failed]{background:color-mix(in oklab,var(--danger) 14%,var(--surface));box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--danger) 55%,transparent);color:var(--danger)}.agent-timeline_span__SgslB[data-dim]{opacity:.28}.agent-timeline_spanIcon__nUOg4{width:11px;height:11px;animation:agent-timeline_appear__TBhLZ var(--duration-fast) var(--ease-enter)}@media (hover:hover) and (pointer:fine){.agent-timeline_span__SgslB:hover{--fill:color-mix(in oklab,var(--c) calc(var(--tint) + 10%),var(--surface))}}@media (hover:hover) and (pointer:fine){.agent-timeline_span__SgslB[data-kind=tool]:hover{--fill:color-mix(in oklab,var(--c) 86%,var(--foreground))}}.agent-timeline_links__Sp3nX,.agent-timeline_ports__AAq57{position:absolute;inset:0;pointer-events:none}.agent-timeline_links__Sp3nX{z-index:1}.agent-timeline_ports__AAq57{z-index:3}.agent-timeline_link__8OIHM{position:absolute;box-sizing:border-box;border:0 solid var(--c);transition:opacity var(--duration-fast) var(--ease-standard)}.agent-timeline_link__8OIHM[data-shape=out][data-dir=down]{border-bottom-width:1.5px;border-left-width:1.5px;border-bottom-left-radius:7px}.agent-timeline_link__8OIHM[data-shape=out][data-dir=up]{border-top-width:1.5px;border-left-width:1.5px;border-top-left-radius:7px}.agent-timeline_link__8OIHM[data-shape=in][data-dir=up]{border-right-width:1.5px;border-bottom-width:1.5px;border-bottom-right-radius:7px}.agent-timeline_link__8OIHM[data-shape=in][data-dir=down]{border-top-width:1.5px;border-right-width:1.5px;border-top-right-radius:7px}.agent-timeline_link__8OIHM[data-shape=line]{border-left-width:1.5px}.agent-timeline_link__8OIHM[data-draw][data-dir=down]{animation:agent-timeline_draw-down__soKu0 .36s var(--ease-standard) backwards}.agent-timeline_link__8OIHM[data-draw][data-dir=up]{animation:agent-timeline_draw-up__76jpP .36s var(--ease-standard) backwards}.agent-timeline_port__pdfiC{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--c);box-shadow:0 0 0 1.5px var(--surface);transition:opacity var(--duration-fast) var(--ease-standard)}.agent-timeline_port__pdfiC[data-draw]{animation:agent-timeline_port-in__pGDXm var(--duration-fast) var(--ease-enter) var(--delay) backwards}.agent-timeline_plot__zkf66[data-path] .agent-timeline_link__8OIHM:not([data-hot]),.agent-timeline_plot__zkf66[data-path] .agent-timeline_port__pdfiC:not([data-hot]){opacity:.16}.agent-timeline_playhead___cDT1{position:absolute;z-index:4;top:0;left:calc(min(var(--now), var(--axis)) / var(--axis) * 100%);width:1px;height:var(--rows-h);margin-left:-.5px;background:var(--foreground);opacity:.5;pointer-events:none;transition:opacity var(--duration-standard) var(--ease-standard)}.agent-timeline_playhead___cDT1[data-settled]{opacity:0}.agent-timeline_axis__LjdXM{position:absolute;z-index:5;top:var(--rows-h);right:0;left:0;height:var(--axis-h);border-top:1px solid var(--border);cursor:ew-resize;touch-action:none;user-select:none}.agent-timeline_axis__LjdXM[data-live]{cursor:default}.agent-timeline_tick__HuIPh{position:absolute;top:9px;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;line-height:1;white-space:nowrap;transform:translateX(-50%);pointer-events:none}.agent-timeline_knob__mWvw_{position:absolute;top:-1px;left:calc(min(var(--now), var(--axis)) / var(--axis) * 100%);width:9px;height:9px;margin:-4.5px 0 0 -4.5px;border-radius:50%;background:var(--foreground);box-shadow:0 0 0 2px var(--surface);pointer-events:none;transition:transform var(--duration-fast) var(--ease-standard)}.agent-timeline_knob__mWvw_:focus-visible{transform:scale(1.3)}.agent-timeline_knob__mWvw_[data-active]{transform:scale(1.3)}@media (hover:hover) and (pointer:fine){.agent-timeline_axis__LjdXM:not([data-live]):hover .agent-timeline_knob__mWvw_{transform:scale(1.3)}}.agent-timeline_footer__3KbKn{display:flex;min-width:0;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:var(--space-3) var(--space-4);padding-inline:var(--gutter)}.agent-timeline_controls__2MDy4{display:flex;align-items:center;gap:6px}.agent-timeline_controls__2MDy4 .agent-timeline_iconButton__hNB_G{width:var(--control-height-sm);padding:0}.agent-timeline_controls__2MDy4 .agent-timeline_iconButton__hNB_G svg{width:16px;height:16px}.agent-timeline_glyph__f_kjw{display:grid;width:16px;height:16px}.agent-timeline_glyph__f_kjw>svg{grid-area:1/1;transition:opacity .1s var(--ease-standard)}.agent-timeline_glyphPlay__rr0xy{translate:.5px 0;transition-duration:var(--duration-fast)}.agent-timeline_glyphPause__fPpY_{opacity:0}.agent-timeline_glyph__f_kjw[data-playing] .agent-timeline_glyphPlay__rr0xy{opacity:0;transition-duration:.1s}.agent-timeline_glyph__f_kjw[data-playing] .agent-timeline_glyphPause__fPpY_{opacity:1;transition-duration:var(--duration-fast)}.agent-timeline_legend__ogx_p{display:flex;flex-wrap:wrap;align-items:center;gap:4px 14px;margin:0;padding:0;color:var(--text-secondary);font-size:var(--text-xs);list-style:none}.agent-timeline_legend__ogx_p li{display:inline-flex;align-items:center;gap:6px;white-space:nowrap}.agent-timeline_swatch__91KiA{--c:var(--text-secondary);width:14px;height:8px;border-radius:3px}.agent-timeline_swatch__91KiA[data-kind=thinking]{background:color-mix(in oklab,var(--c) 28%,var(--surface))}.agent-timeline_swatch__91KiA[data-kind=tool]{background:var(--c)}.agent-timeline_swatch__91KiA[data-kind=waiting]{background:repeating-linear-gradient(-45deg,color-mix(in oklab,var(--c) 40%,transparent) 0 1px,transparent 1px 4px);box-shadow:inset 0 0 0 1px color-mix(in oklab,var(--c) 30%,transparent)}.agent-timeline_legendFailed__PLfi0,.agent-timeline_legendIcon__YXoyb{width:13px;height:13px}.agent-timeline_legendIcon__YXoyb{color:var(--text-muted)}.agent-timeline_legendFailed__PLfi0{color:var(--danger)}.agent-timeline_cardLayer__MmkbP{position:absolute;z-index:20;top:0;left:0;width:min(280px,calc(100% - 16px));pointer-events:none}.agent-timeline_card__nU6Rv{position:relative;box-sizing:content-box;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface-raised);box-shadow:var(--shadow-floating)}.agent-timeline_cardBody__lesnE{display:grid;gap:3px;padding:12px 14px}.agent-timeline_cardHead__mpPB9{display:flex;min-width:0;align-items:center;gap:6px;margin:0;font-size:var(--text-xs)}.agent-timeline_cardAgent__mzb_s{flex:none;color:var(--foreground);font-weight:500}.agent-timeline_cardModel__pzZuW{overflow:hidden;color:var(--text-muted);text-overflow:ellipsis;white-space:nowrap}.agent-timeline_cardLabel__rWiIz{margin:0;color:var(--foreground)}.agent-timeline_cardMeta__5B4Ug{display:flex;flex-wrap:wrap;align-items:center;gap:2px 6px;margin:2px 0 0;color:var(--text-secondary);font-size:var(--text-xs)}.agent-timeline_cardTool__B4Zsd{display:inline-flex;align-items:center;gap:5px}.agent-timeline_cardFailed__C1ds8,.agent-timeline_cardNote__fbOtn{display:flex;align-items:flex-start;gap:6px;margin:2px 0 0;color:var(--text-secondary);font-size:var(--text-xs)}.agent-timeline_cardFailed__C1ds8{color:var(--danger)}.agent-timeline_cardFailed__C1ds8 svg,.agent-timeline_cardNote__fbOtn svg{width:13px;height:13px;flex:none;margin-top:1.5px}.agent-timeline_srOnly__mHk9X{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}@keyframes agent-timeline_shine__DBwf7{0%{background-position:-28px 0}70%,to{background-position:calc(100% + 28px) 0}}@keyframes agent-timeline_draw-down__soKu0{0%{clip-path:inset(0 0 100% 0)}to{clip-path:inset(0)}}@keyframes agent-timeline_draw-up__76jpP{0%{clip-path:inset(100% 0 0 0)}to{clip-path:inset(0)}}@keyframes agent-timeline_port-in__pGDXm{0%{opacity:0;transform:scale(.4)}to{opacity:1;transform:scale(1)}}@keyframes agent-timeline_appear__TBhLZ{0%{opacity:0}to{opacity:1}}@media (prefers-reduced-motion:reduce){.agent-timeline_span__SgslB[data-state=active]:after{display:none}}@media (prefers-reduced-motion:reduce){.agent-timeline_link__8OIHM[data-draw],.agent-timeline_port__pdfiC[data-draw],.agent-timeline_spanIcon__nUOg4{animation:none}}@media (prefers-reduced-motion:reduce){.agent-timeline_glyph__f_kjw>svg,.agent-timeline_knob__mWvw_,.agent-timeline_layer__mX6Q9,.agent-timeline_link__8OIHM,.agent-timeline_playhead___cDT1,.agent-timeline_port__pdfiC,.agent-timeline_span__SgslB,.agent-timeline_wordItem__H6w2P{transition:none}}", {"root":"agent-timeline_root__OFvYA","inner":"agent-timeline_inner__uC_jD","header":"agent-timeline_header__00vvG","title":"agent-timeline_title__ntHdf","status":"agent-timeline_status__tvxKL","layer":"agent-timeline_layer__mX6Q9","word":"agent-timeline_word__0GfmO","part":"agent-timeline_part__Q8hEC","unit":"agent-timeline_unit__DHffe","wordItem":"agent-timeline_wordItem__H6w2P","count":"agent-timeline_count__bKQQf","countSizer":"agent-timeline_countSizer__0VWf4","countValue":"agent-timeline_countValue__gWiCJ","sep":"agent-timeline_sep__dhlYZ","tabular":"agent-timeline_tabular__E1GUF","doneIcon":"agent-timeline_doneIcon__I7rF3","scroller":"agent-timeline_scroller__pJH4D","body":"agent-timeline_body__i5OnD","labels":"agent-timeline_labels__1uDhv","label":"agent-timeline_label__dXmae","labelText":"agent-timeline_labelText__06m0A","dot":"agent-timeline_dot__EHYeO","name":"agent-timeline_name__R54_5","model":"agent-timeline_model__ghXRX","modelName":"agent-timeline_modelName__ZXzba","mark":"agent-timeline_mark__nx6sa","track":"agent-timeline_track__bktrb","plot":"agent-timeline_plot__zkf66","grid":"agent-timeline_grid__7uI9V","gridline":"agent-timeline_gridline__cqugt","row":"agent-timeline_row__PO8PV","span":"agent-timeline_span__SgslB","shine":"agent-timeline_shine__DBwf7","spanIcon":"agent-timeline_spanIcon__nUOg4","appear":"agent-timeline_appear__TBhLZ","links":"agent-timeline_links__Sp3nX","ports":"agent-timeline_ports__AAq57","link":"agent-timeline_link__8OIHM","draw-down":"agent-timeline_draw-down__soKu0","draw-up":"agent-timeline_draw-up__76jpP","port":"agent-timeline_port__pdfiC","port-in":"agent-timeline_port-in__pGDXm","playhead":"agent-timeline_playhead___cDT1","axis":"agent-timeline_axis__LjdXM","tick":"agent-timeline_tick__HuIPh","knob":"agent-timeline_knob__mWvw_","footer":"agent-timeline_footer__3KbKn","controls":"agent-timeline_controls__2MDy4","iconButton":"agent-timeline_iconButton__hNB_G","glyph":"agent-timeline_glyph__f_kjw","glyphPlay":"agent-timeline_glyphPlay__rr0xy","glyphPause":"agent-timeline_glyphPause__fPpY_","legend":"agent-timeline_legend__ogx_p","swatch":"agent-timeline_swatch__91KiA","legendIcon":"agent-timeline_legendIcon__YXoyb","legendFailed":"agent-timeline_legendFailed__PLfi0","cardLayer":"agent-timeline_cardLayer__MmkbP","card":"agent-timeline_card__nU6Rv","cardBody":"agent-timeline_cardBody__lesnE","cardHead":"agent-timeline_cardHead__mpPB9","cardAgent":"agent-timeline_cardAgent__mzb_s","cardModel":"agent-timeline_cardModel__pzZuW","cardLabel":"agent-timeline_cardLabel__rWiIz","cardMeta":"agent-timeline_cardMeta__5B4Ug","cardTool":"agent-timeline_cardTool__B4Zsd","cardFailed":"agent-timeline_cardFailed__C1ds8","cardNote":"agent-timeline_cardNote__fbOtn","srOnly":"agent-timeline_srOnly__mHk9X"});
A.reg(90710, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  t.d(a, { A: () => r });
  var d = t(51811);
  let n = {
    name: "bot",
    size: 24,
    node: [
      ["path", { d: "M12 8V4H8", key: "hb8ula" }],
      [
        "rect",
        { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }
      ],
      ["path", { d: "M2 14h2", key: "vft8re" }],
      ["path", { d: "M20 14h2", key: "4cs60a" }],
      ["path", { d: "M15 13v2", key: "1xurst" }],
      ["path", { d: "M9 13v2", key: "rq6x2g" }]
    ]
  };
  n.node;
  let r = (0, d.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(94890, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => s });
  var r = a(51811);
  let n = {
    name: "circle-x",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
      ["path", { d: "m9 9 6 6", key: "z0biqf" }]
    ],
    aliases: ["x-circle"]
  };
  n.node;
  let s = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.cssFor("agent-timeline", [19819,68098]);
A.item("agent-timeline", {entry:18293, export:"AgentTimelineDemo", kind:"component", tier:"pro", unresolved:[]});
})();