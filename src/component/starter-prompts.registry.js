/* starter-prompts (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(67, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { StarterPromptsDemo: () => D, default: () => F });
  var r = a(95155), s = a(12115), i = a(66558), n = a(18310), o = a(92171), l = a(80642), p = a(25354), d = a(58081), c = a(92782), u = a(51452), m = a(16420), h = a(73246), y = a(64577), f = a(35484), g = a(92298), b = a(38158), _ = a(51288), v = a(52898), w = a(7770);
  let x = [
    {
      id: "reply-priya",
      category: "write",
      app: "gmail",
      title: "Reply to Priya about the launch",
      description: "Confirm the new date from her Gmail thread",
      prompt: "Draft a reply to Priya Raman's latest Gmail thread confirming we're moving the Halcyon launch to Tuesday, November 10. Keep it warm and under 120 words."
    },
    {
      id: "release-notes",
      category: "write",
      app: "github",
      title: "Write release notes for v2.14",
      description: "Turn this week's merged PRs into a changelog",
      prompt: "Write customer-facing release notes for v2.14 from the pull requests merged into acme/web this week. Group them into New, Improved and Fixed."
    },
    {
      id: "series-a",
      category: "write",
      title: "Announce our Series A",
      description: "Two short versions for LinkedIn and X",
      prompt: "Write a short announcement of our $18M Series A led by Northwind Ventures for LinkedIn and X. Confident, no buzzwords, two versions."
    },
    {
      id: "tighten",
      category: "write",
      title: "Tighten a paragraph",
      description: "Clearer and shorter, same voice",
      prompt: "Rewrite the paragraph below so it is clearer and about 30% shorter, keeping my voice:\n\n"
    },
    {
      id: "follow-up",
      category: "write",
      app: "gmail",
      title: "Follow up with Lumen Health",
      description: "A nudge on the pilot proposal from October 14",
      prompt: "Write a short follow-up to Daniel Okafor at Lumen Health about the pilot proposal I sent on October 14. Offer two call slots next week."
    },
    {
      id: "job-post",
      category: "write",
      app: "notion",
      title: "Draft a job post",
      description: "Senior product designer, from the hiring brief",
      prompt: "Draft a job post for a senior product designer from the hiring brief in Notion. Lead with the work, list the salary range and keep it under 400 words."
    },
    {
      id: "review-pr",
      category: "code",
      app: "github",
      title: "Review PR #482 in acme/web",
      description: "Flag bugs, risky changes and missing tests",
      prompt: "Review pull request #482 in acme/web. Flag bugs, risky changes and missing tests, and suggest fixes as inline comments."
    },
    {
      id: "churn-sql",
      category: "code",
      title: "Write a churn query",
      description: "Monthly logo churn by plan in Postgres",
      prompt: "Write a Postgres query for monthly logo churn by plan from the subscriptions table, January through October 2026."
    },
    {
      id: "flaky-test",
      category: "code",
      app: "github",
      title: "Fix the flaky checkout test",
      description: "It fails on CI about one run in five",
      prompt: "checkout.spec.ts in acme/web fails on CI about one run in five. Read the last 10 failed runs, find the cause and propose a fix."
    },
    {
      id: "regex",
      category: "code",
      title: "Explain a regex",
      description: "Piece by piece, with examples that pass and fail",
      prompt: "Explain what this regular expression matches, piece by piece, with two examples that pass and two that fail:\n\n"
    },
    {
      id: "migrate-hooks",
      category: "code",
      title: "Convert a class to hooks",
      description: "Keep behavior identical, add types",
      prompt: "Convert the React class component below to a function component with hooks. Keep the behavior identical and add TypeScript types:\n\n"
    },
    {
      id: "issue-triage",
      category: "code",
      app: "linear",
      title: "Triage new bug reports",
      description: "Label and route the 23 untriaged issues",
      prompt: "Go through the 23 untriaged issues in Linear. Label each one, set a priority, and route it to the right team with a one-line reason."
    },
    {
      id: "interview-themes",
      category: "analyze",
      app: "notion",
      title: "Find themes in user interviews",
      description: "Summarize the 14 notes in the Research hub",
      prompt: "Read the 14 user interview notes in the Notion Research hub and give me the five most common themes, each with two direct quotes."
    },
    {
      id: "signup-drop",
      category: "analyze",
      title: "Explain last week's signup drop",
      description: "Compare the funnel with the prior four weeks",
      prompt: "Signups dropped 18% in the week of October 19. Compare each funnel step with the prior four weeks and tell me where the drop starts."
    },
    {
      id: "inbox-summary",
      category: "analyze",
      app: "gmail",
      title: "Summarize my unread email",
      description: "Group threads by who needs a reply",
      prompt: "Summarize my unread Gmail from the last 48 hours. Group threads by whether they need a reply from me today, this week, or never."
    },
    {
      id: "vendor-quotes",
      category: "analyze",
      title: "Compare two vendor quotes",
      description: "Cost, terms and the fine print side by side",
      prompt: "Compare the two attached vendor quotes side by side: total cost over 24 months, payment terms, cancellation, and anything unusual in the fine print."
    },
    {
      id: "pr-velocity",
      category: "analyze",
      app: "github",
      title: "Check review turnaround",
      description: "Median time to first review, by team",
      prompt: "Using pull requests in acme/web from September and October 2026, show the median time to first review by team and call out the slowest repos."
    },
    {
      id: "nps-comments",
      category: "analyze",
      title: "Sort NPS comments",
      description: "312 responses from the October survey",
      prompt: "Sort the 312 comments from our October NPS survey into themes, with counts, the average score per theme, and one representative quote each."
    },
    {
      id: "sprint",
      category: "plan",
      app: "linear",
      title: "Plan the next sprint",
      description: "Fit the backlog into 34 points of capacity",
      prompt: "Plan our next two-week sprint from the Linear backlog. We have 34 points of capacity; prioritize P1 bugs and explain what you left out."
    },
    {
      id: "offsite",
      category: "plan",
      app: "notion",
      title: "Draft the Q1 offsite agenda",
      description: "Two days in Lisbon for 12 people",
      prompt: "Draft a two-day agenda for our Q1 product offsite in Lisbon for 12 people, and put it in a new Notion page under Team."
    },
    {
      id: "focus-time",
      category: "plan",
      app: "calendar",
      title: "Find focus time this week",
      description: "Two hours a day around existing meetings",
      prompt: "Look at my Google Calendar for the week of November 2 and block two hours of focus time each day around existing meetings."
    },
    {
      id: "launch-checklist",
      category: "plan",
      title: "Make a launch checklist",
      description: "Everything for the November 10 release",
      prompt: "Make a launch checklist for the Halcyon release on November 10, split into engineering, marketing and support, with an owner for each item."
    },
    {
      id: "onboarding",
      category: "plan",
      app: "notion",
      title: "Plan a new hire's first week",
      description: "Day by day, for Mei joining on November 2",
      prompt: "Plan Mei Tanaka's first week as a product engineer starting November 2: day by day, who she meets, and what she ships by Friday."
    },
    {
      id: "roadmap",
      category: "plan",
      title: "Outline the Q1 roadmap",
      description: "Three bets, with what we will not do",
      prompt: "Outline a Q1 2027 roadmap with three bets, the metric each one moves, rough sizing, and a short list of what we will not do."
    }
  ];
  function j(e2) {
    return (0, r.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "#D97757",
      "aria-hidden": "true",
      ...e2,
      children: (0, r.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  let N = {
    gmail: "Gmail",
    github: "GitHub",
    notion: "Notion",
    linear: "Linear",
    calendar: "Google Calendar"
  }, k = {
    gmail: function(e2) {
      return (0, r.jsxs)("svg", {
        viewBox: "52 42 88 66",
        "aria-hidden": "true",
        ...e2,
        children: [
          (0, r.jsx)("path", {
            fill: "#4285F4",
            d: "M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"
          }),
          (0, r.jsx)("path", {
            fill: "#34A853",
            d: "M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"
          }),
          (0, r.jsx)("path", {
            fill: "#FBBC04",
            d: "M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"
          }),
          (0, r.jsx)("path", {
            fill: "#EA4335",
            d: "M72 74V48l24 18 24-18v26L96 92"
          }),
          (0, r.jsx)("path", {
            fill: "#C5221F",
            d: "M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
          })
        ]
      });
    },
    github: function(e2) {
      return (0, r.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ...e2,
        children: (0, r.jsx)("path", {
          d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        })
      });
    },
    notion: function(e2) {
      return (0, r.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ...e2,
        children: (0, r.jsx)("path", {
          d: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
        })
      });
    },
    linear: function(e2) {
      return (0, r.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ...e2,
        children: (0, r.jsx)("path", {
          d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
        })
      });
    },
    calendar: function(e2) {
      return (0, r.jsx)("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...e2,
        children: (0, r.jsx)("path", {
          fill: "#4285F4",
          d: "M18.316 5.684H24v12.632h-5.684V5.684zM5.684 24h12.632v-5.684H5.684V24zM18.316 5.684V0H1.895A1.894 1.894 0 0 0 0 1.895v16.421h5.684V5.684h12.632zm-7.207 6.25v-.065c.272-.144.5-.349.687-.617s.279-.595.279-.982c0-.379-.099-.72-.3-1.025a2.05 2.05 0 0 0-.832-.714 2.703 2.703 0 0 0-1.197-.257c-.6 0-1.094.156-1.481.467-.386.311-.65.671-.793 1.078l1.085.452c.086-.249.224-.461.413-.633.189-.172.445-.257.767-.257.33 0 .602.088.816.264a.86.86 0 0 1 .322.703c0 .33-.12.589-.36.778-.24.19-.535.284-.886.284h-.567v1.085h.633c.407 0 .748.109 1.02.327.272.218.407.499.407.843 0 .336-.129.614-.387.832s-.565.327-.924.327c-.351 0-.651-.103-.897-.311-.248-.208-.422-.502-.521-.881l-1.096.452c.178.616.505 1.082.977 1.401.472.319.984.478 1.538.477a2.84 2.84 0 0 0 1.293-.291c.382-.193.684-.458.902-.794.218-.336.327-.72.327-1.149 0-.429-.115-.797-.344-1.105a2.067 2.067 0 0 0-.881-.689zm2.093-1.931l.602.913L15 10.045v5.744h1.187V8.446h-.827l-2.158 1.557zM22.105 0h-3.289v5.184H24V1.895A1.894 1.894 0 0 0 22.105 0zm-3.289 23.5l4.684-4.684h-4.684V23.5zM0 22.105C0 23.152.848 24 1.895 24h3.289v-5.184H0v3.289z"
        })
      });
    }
  };
  function S({ app: e2, size: t2 = 14, className: a2 }) {
    let s2 = k[e2];
    return (0, r.jsx)(s2, { width: t2, height: t2, className: a2 });
  }
  var L = a(76946), C = a.n(L);
  let T = (...e2) => e2.filter(Boolean).join(" "), M = { size: 14, strokeWidth: 1.75, "aria-hidden": true }, z = [
    { id: "write", label: "Write", icon: (0, r.jsx)(d.A, { ...M }) },
    { id: "code", label: "Code", icon: (0, r.jsx)(c.A, { ...M }) },
    { id: "analyze", label: "Analyze", icon: (0, r.jsx)(u.A, { ...M }) },
    { id: "plan", label: "Plan", icon: (0, r.jsx)(m.A, { ...M }) }
  ], A = { name: "Claude Sonnet 5.5" };
  function $() {
    return (0, r.jsxs)("svg", {
      className: C().spinner,
      width: 16,
      height: 16,
      viewBox: "0 0 16 16",
      fill: "none",
      "aria-hidden": "true",
      children: [
        (0, r.jsx)("circle", {
          cx: "8",
          cy: "8",
          r: "6",
          stroke: "currentColor",
          strokeOpacity: ".25",
          strokeWidth: "1.75"
        }),
        (0, r.jsx)("path", {
          d: "M8 2a6 6 0 0 1 6 6",
          stroke: "currentColor",
          strokeWidth: "1.75",
          strokeLinecap: "round"
        })
      ]
    });
  }
  function E({
    greeting: e2 = "What are we working on, Maya?",
    description: t2 = "Pick a starter or write your own. Cards with an app mark use your connected tools.",
    prompts: a2 = x,
    categories: d2 = z,
    defaultCategory: c2 = "all",
    count: u2 = 4,
    loading: m2 = false,
    value: k2,
    defaultValue: L2 = "",
    onValueChange: M2,
    onSelect: P2,
    onSubmit: W2,
    model: R2 = A,
    placeholder: I2 = "Ask anything, or pick a starter above",
    className: D2
  }) {
    let F2 = (0, n.I)() ?? false, O = (0, s.useId)(), [V, q] = (0, s.useState)(c2), [B, H] = (0, s.useState)(null), [K, G] = (0, s.useState)(L2), Q = k2 ?? K, [U, Y] = (0, s.useState)(null), [J, X] = (0, s.useState)("idle"), [Z, ee] = (0, s.useState)(""), [et, ea] = (0, s.useState)(""), er = (0, s.useRef)(null), es = (0, s.useRef)(null), ei = (0, s.useRef)(void 0);
    (0, s.useEffect)(
      () => () => {
        es.current?.abort(), window.clearTimeout(ei.current);
      },
      []
    );
    let en = (0, s.useMemo)(
      () => new Map(d2.map((e3, t3) => [e3.id, { ...e3, series: t3 % 4 + 1 }])),
      [d2]
    ), eo = (0, s.useMemo)(
      () => "all" === V ? (function(e3, t3) {
        let a3 = t3.map((t4) => e3.filter((e4) => e4.category === t4)), r2 = e3.filter((e4) => !t3.includes(e4.category)), s2 = [];
        for (let e4 = 0; a3.some((t4) => t4[e4]); e4++)
          for (let t4 of a3) t4[e4] && s2.push(t4[e4]);
        return [...s2, ...r2];
      })(
        a2,
        d2.map((e3) => e3.id)
      ) : a2.filter((e3) => e3.category === V),
      [a2, d2, V]
    ), el = (0, s.useMemo)(() => {
      let e3 = new Map(eo.map((e4) => [e4.id, e4])), t3 = B && B.category === V ? B.ids.map((t4) => e3.get(t4)).filter((e4) => !!e4) : [], a3 = eo.filter((e4) => !t3.includes(e4));
      return [...t3, ...a3].slice(0, u2);
    }, [eo, B, V, u2]), ep = [
      { value: "all", label: "All" },
      ...d2.filter((e3) => a2.some((t3) => t3.category === e3.id) || e3.id === V).map((e3) => ({ value: e3.id, label: e3.label }))
    ], ed = en.get(V)?.label ?? "All", ec = !m2 && eo.length > u2, eu = "sending" === J, em = (e3) => {
      void 0 === k2 && G(e3), M2?.(e3);
    }, eh = (e3) => {
      q(e3), H(null);
    }, ey = () => {
      let e3 = er.current;
      if (!e3) return;
      e3.focus({ preventScroll: true });
      let t3 = e3.value.length;
      e3.setSelectionRange(t3, t3), e3.scrollTop = 0, F2 || (0, o.i)(
        e3,
        { opacity: [0.35, 1] },
        { duration: w.T.duration.fast, ease: [...w.T.ease.enter] }
      );
    }, ef = async () => {
      let e3 = Q.trim();
      if (!e3 || eu) return;
      window.clearTimeout(ei.current);
      let t3 = new AbortController();
      es.current = t3, X("sending"), ee(""), ea(`Sending to ${R2.name}.`);
      try {
        if (W2) await W2(e3, { prompt: U, signal: t3.signal });
        else {
          let e4;
          await (e4 = t3.signal, new Promise((t4, a3) => {
            let r2 = window.setTimeout(t4, 1100);
            e4.addEventListener(
              "abort",
              () => {
                window.clearTimeout(r2), a3(new DOMException("Stopped", "AbortError"));
              },
              { once: true }
            );
          }));
        }
        if (t3.signal.aborted) return;
        X("sent"), em(""), Y(null), ea(W2 ? "Sent." : "Sent. Simulated, nothing was sent."), ei.current = window.setTimeout(
          () => X((e4) => "sent" === e4 ? "idle" : e4),
          2600
        );
      } catch (a3) {
        if (t3.signal.aborted) return;
        let e4 = a3 instanceof Error && a3.message ? a3.message : "Couldn't send. Check your connection and try again.";
        X("error"), ee(e4), ea(`Not sent. ${e4}`);
      } finally {
        es.current === t3 && (es.current = null);
      }
    }, eg = () => {
      es.current?.abort(), es.current = null, X("idle"), ea("Stopped. Your message is still in the composer."), er.current?.focus();
    }, eb = F2 ? { duration: 0 } : { duration: w.T.duration.fast, ease: [...w.T.ease.standard] }, e_ = !m2 && 0 === eo.length, ev = Q.trim().length > 0, ew = U?.app;
    return (0, r.jsxs)("section", {
      className: T(C().root, D2),
      "aria-labelledby": `${O}-title`,
      children: [
        (0, r.jsxs)("header", {
          className: C().header,
          children: [
            (0, r.jsx)("h2", {
              id: `${O}-title`,
              className: C().greeting,
              children: e2
            }),
            t2 ? (0, r.jsx)("p", { className: C().description, children: t2 }) : null
          ]
        }),
        (0, r.jsxs)("div", {
          className: C().toolbar,
          children: [
            (0, r.jsx)(i.A, {
              className: C().tabs,
              label: "Filter starters",
              options: ep,
              value: V,
              onValueChange: eh
            }),
            (0, r.jsxs)(_.$, {
              variant: "ghost",
              size: "sm",
              className: C().shuffle,
              onClick: () => {
                var e3;
                let t3, a3, r2;
                if (!ec) return;
                let s2 = (e3 = el.map((e4) => e4.id), t3 = eo.filter((t4) => !e3.includes(t4.id)), a3 = eo.filter((t4) => e3.includes(t4.id)), [
                  ...(r2 = (e4) => e4.map((e5) => [Math.random(), e5]).sort((e5, t4) => e5[0] - t4[0]).map(([, e5]) => e5))(t3),
                  ...r2(a3)
                ].slice(0, u2).map((e4) => e4.id));
                H({ category: V, ids: s2 }), ea(
                  `Showing ${s2.length} new ${"all" === V ? "" : `${ed.toLowerCase()} `}starters.`
                );
              },
              disabled: !ec,
              "aria-label": "Shuffle starters",
              children: [
                (0, r.jsx)(h.A, {
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                (0, r.jsx)("span", {
                  className: C().shuffleLabel,
                  children: "Shuffle"
                })
              ]
            })
          ]
        }),
        (0, r.jsxs)("div", {
          className: C().gridWrap,
          children: [
            (0, r.jsx)("ul", {
              className: C().grid,
              "aria-label": `${ed} starters`,
              "aria-busy": m2 || void 0,
              children: Array.from({ length: u2 }, (e3, t3) => {
                let a3 = m2 ? void 0 : el[t3];
                if (m2)
                  return (0, r.jsx)(
                    "li",
                    {
                      className: C().slot,
                      "aria-hidden": "true",
                      children: (0, r.jsx)("span", {
                        className: T(C().card, C().skeleton),
                        children: (0, r.jsxs)("span", {
                          className: C().content,
                          children: [
                            (0, r.jsx)("span", {
                              className: C().meta,
                              children: (0, r.jsx)("span", {
                                className: C().bone,
                                style: { width: 64 }
                              })
                            }),
                            (0, r.jsx)("span", {
                              className: T(C().bone, C().boneTitle),
                              style: { width: `${68 - 7 * t3}%` }
                            }),
                            (0, r.jsx)("span", {
                              className: T(C().bone, C().boneLine),
                              style: { width: `${82 - 5 * t3}%` }
                            })
                          ]
                        })
                      })
                    },
                    t3
                  );
                if (!a3)
                  return (0, r.jsx)(
                    "li",
                    {
                      className: C().slot,
                      "aria-hidden": "true",
                      "data-empty": ""
                    },
                    t3
                  );
                let s2 = en.get(a3.category);
                return (0, r.jsx)(
                  "li",
                  {
                    className: C().slot,
                    children: (0, r.jsx)("button", {
                      type: "button",
                      className: C().card,
                      onClick: () => {
                        !eu && (window.clearTimeout(ei.current), em(a3.prompt), Y(a3), X("idle"), ee(""), P2?.(a3), ea(
                          `Added "${a3.title}" to the message. Edit it or press Enter to send.`
                        ), requestAnimationFrame(ey));
                      },
                      disabled: eu,
                      "aria-label": `${a3.title}${a3.app ? `, uses ${N[a3.app]}` : ""}. ${s2?.label ?? ""}`,
                      "data-picked": U?.id === a3.id || void 0,
                      children: (0, r.jsx)(l.N, {
                        initial: false,
                        children: (0, r.jsxs)(
                          p.PY1.span,
                          {
                            className: C().content,
                            initial: F2 ? { opacity: 0 } : { opacity: 0, y: 2 },
                            animate: {
                              opacity: 1,
                              y: 0,
                              transition: F2 ? { duration: 0 } : {
                                duration: w.T.duration.fast,
                                ease: [...w.T.ease.enter],
                                delay: 0.06 + 0.035 * t3
                              }
                            },
                            exit: {
                              opacity: 0,
                              transition: F2 ? { duration: 0 } : {
                                duration: 0.1,
                                ease: [...w.T.ease.standard],
                                delay: 0.035 * t3
                              }
                            },
                            "aria-hidden": "true",
                            children: [
                              (0, r.jsxs)("span", {
                                className: C().meta,
                                children: [
                                  s2?.icon ? (0, r.jsx)("span", {
                                    className: C().categoryIcon,
                                    "data-series": s2.series,
                                    children: s2.icon
                                  }) : null,
                                  (0, r.jsx)("span", {
                                    className: C().categoryLabel,
                                    children: s2?.label ?? a3.category
                                  }),
                                  a3.app ? (0, r.jsxs)("span", {
                                    className: C().app,
                                    children: [
                                      (0, r.jsx)(S, {
                                        app: a3.app,
                                        className: C().appMark
                                      }),
                                      (0, r.jsx)("span", {
                                        className: C().appName,
                                        children: N[a3.app]
                                      })
                                    ]
                                  }) : null
                                ]
                              }),
                              (0, r.jsx)("span", {
                                className: C().title,
                                children: a3.title
                              }),
                              a3.description ? (0, r.jsx)("span", {
                                className: C().cardDescription,
                                children: a3.description
                              }) : null
                            ]
                          },
                          a3.id
                        )
                      })
                    })
                  },
                  t3
                );
              })
            }),
            (0, r.jsx)(l.N, {
              initial: false,
              children: e_ ? (0, r.jsxs)(
                p.PY1.div,
                {
                  className: C().empty,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: eb,
                  children: [
                    (0, r.jsxs)("p", {
                      className: C().emptyTitle,
                      children: [
                        "No ",
                        "all" === V ? "" : `${ed.toLowerCase()} `,
                        "starters yet"
                      ]
                    }),
                    (0, r.jsxs)("p", {
                      className: C().emptyCopy,
                      children: [
                        "Write your own below",
                        "all" === V ? "." : ", or look through every category."
                      ]
                    }),
                    "all" !== V ? (0, r.jsx)(_.$, {
                      variant: "secondary",
                      size: "sm",
                      onClick: () => eh("all"),
                      children: "Show all"
                    }) : null
                  ]
                },
                "empty"
              ) : null
            })
          ]
        }),
        (0, r.jsxs)("form", {
          className: C().composer,
          "data-status": J,
          onSubmit: (e3) => {
            e3.preventDefault(), ef();
          },
          children: [
            (0, r.jsxs)("label", {
              htmlFor: `${O}-input`,
              className: C().srOnly,
              children: ["Message ", R2.name]
            }),
            (0, r.jsx)("textarea", {
              ref: er,
              id: `${O}-input`,
              className: C().input,
              value: Q,
              placeholder: I2,
              rows: 3,
              readOnly: eu,
              onChange: (e3) => {
                em(e3.target.value), e3.target.value || Y(null), ("error" === J || "sent" === J) && X("idle");
              },
              onKeyDown: (e3) => {
                if ("Escape" === e3.key && eu) {
                  e3.preventDefault(), eg();
                  return;
                }
                "Enter" !== e3.key || e3.shiftKey || e3.nativeEvent.isComposing || (e3.preventDefault(), ef());
              },
              "aria-describedby": `${O}-status`
            }),
            (0, r.jsxs)("div", {
              className: C().footer,
              children: [
                (0, r.jsx)("div", {
                  className: C().footerStatus,
                  id: `${O}-status`,
                  children: (0, r.jsx)(l.N, {
                    initial: false,
                    mode: "popLayout",
                    children: (0, r.jsx)(
                      p.PY1.span,
                      {
                        className: C().statusInner,
                        initial: { opacity: 0 },
                        animate: {
                          opacity: 1,
                          transition: F2 ? { duration: 0 } : { duration: w.T.duration.fast, delay: 0.04 }
                        },
                        exit: {
                          opacity: 0,
                          transition: F2 ? { duration: 0 } : { duration: 0.1 }
                        },
                        children: "idle" === J ? (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsxs)("span", {
                              className: C().model,
                              children: [
                                (0, r.jsx)("span", {
                                  className: C().modelMark,
                                  children: R2.mark ?? (0, r.jsx)(j, {
                                    width: 14,
                                    height: 14
                                  })
                                }),
                                (0, r.jsx)("span", {
                                  className: C().ellipsis,
                                  children: R2.name
                                })
                              ]
                            }),
                            (0, r.jsx)(l.N, {
                              initial: false,
                              mode: "popLayout",
                              children: ew ? (0, r.jsxs)(
                                p.PY1.span,
                                {
                                  className: C().chip,
                                  initial: F2 ? { opacity: 0 } : { opacity: 0, scale: 0.96 },
                                  animate: { opacity: 1, scale: 1 },
                                  exit: { opacity: 0, scale: 0.96 },
                                  transition: F2 ? { duration: 0 } : {
                                    ...w.T.spring.snappy,
                                    opacity: {
                                      duration: w.T.duration.fast
                                    }
                                  },
                                  children: [
                                    (0, r.jsx)(S, {
                                      app: ew,
                                      className: C().appMark
                                    }),
                                    (0, r.jsxs)("span", {
                                      className: C().ellipsis,
                                      children: ["Uses ", N[ew]]
                                    })
                                  ]
                                },
                                ew
                              ) : null
                            })
                          ]
                        }) : "sending" === J ? (0, r.jsx)(v.n, {
                          className: C().ellipsis,
                          children: `Sending to ${R2.name}`
                        }) : "sent" === J ? (0, r.jsxs)("span", {
                          className: C().done,
                          children: [
                            (0, r.jsx)(y.A, {
                              size: 14,
                              strokeWidth: 2,
                              "aria-hidden": "true",
                              className: C().doneIcon
                            }),
                            (0, r.jsx)("span", {
                              className: C().ellipsis,
                              children: W2 ? "Sent" : "Sent. Simulated, nothing was sent."
                            })
                          ]
                        }) : (0, r.jsxs)("span", {
                          className: C().failed,
                          children: [
                            (0, r.jsx)(f.A, {
                              size: 14,
                              strokeWidth: 1.75,
                              "aria-hidden": "true",
                              className: C().failedIcon
                            }),
                            (0, r.jsx)("span", {
                              className: C().ellipsis,
                              children: Z
                            })
                          ]
                        })
                      },
                      J
                    )
                  })
                }),
                (0, r.jsx)(l.N, {
                  initial: false,
                  children: "error" === J ? (0, r.jsx)(
                    p.PY1.span,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      transition: eb,
                      children: (0, r.jsxs)(_.$, {
                        type: "submit",
                        variant: "ghost",
                        size: "sm",
                        className: C().retry,
                        children: [
                          (0, r.jsx)(g.A, {
                            size: 14,
                            strokeWidth: 1.75,
                            "aria-hidden": "true"
                          }),
                          "Retry"
                        ]
                      })
                    },
                    "retry"
                  ) : null
                }),
                (0, r.jsx)("button", {
                  type: eu ? "button" : "submit",
                  className: C().send,
                  onClick: eu ? eg : void 0,
                  disabled: !eu && !ev,
                  "aria-label": eu ? "Stop sending" : "Send message",
                  "data-busy": eu || void 0,
                  children: (0, r.jsx)(l.N, {
                    initial: false,
                    mode: "popLayout",
                    children: (0, r.jsx)(
                      p.PY1.span,
                      {
                        className: C().sendIcon,
                        initial: F2 ? { opacity: 0 } : { opacity: 0, scale: 0.7 },
                        animate: { opacity: 1, scale: 1 },
                        exit: F2 ? { opacity: 0 } : { opacity: 0, scale: 0.7 },
                        transition: F2 ? { duration: 0 } : {
                          ...w.T.spring.snappy,
                          opacity: { duration: w.T.duration.instant }
                        },
                        children: eu ? (0, r.jsxs)("span", {
                          className: C().stopWrap,
                          children: [
                            (0, r.jsx)($, {}),
                            (0, r.jsx)("span", {
                              className: C().stopSquare
                            })
                          ]
                        }) : (0, r.jsx)(b.A, {
                          size: 16,
                          strokeWidth: 2,
                          "aria-hidden": "true"
                        })
                      },
                      eu ? "stop" : "send"
                    )
                  })
                })
              ]
            })
          ]
        }),
        (0, r.jsx)("span", {
          className: C().srOnly,
          role: "status",
          "aria-live": "polite",
          children: et
        })
      ]
    });
  }
  var P = a(45253), W = a.n(P);
  let R = [
    { value: "live", label: "Live" },
    { value: "loading", label: "Loading" },
    { value: "empty", label: "Empty" },
    { value: "fails", label: "Send fails" }
  ], I = (e2, { signal: t2 }) => new Promise((e3, a2) => {
    let r2 = window.setTimeout(
      () => a2(Error("Couldn't reach the model. Simulated, nothing was sent.")),
      900
    );
    t2.addEventListener("abort", () => window.clearTimeout(r2), { once: true });
  });
  function D() {
    let [e2, t2] = (0, s.useState)("live");
    return (0, r.jsxs)("div", {
      className: W().demo,
      children: [
        (0, r.jsx)(
          E,
          {
            loading: "loading" === e2,
            prompts: "empty" === e2 ? [] : void 0,
            onSubmit: "fails" === e2 ? I : void 0
          },
          e2
        ),
        (0, r.jsx)(i.A, {
          label: "Preview state",
          options: R,
          value: e2,
          onValueChange: (e3) => t2(e3)
        })
      ]
    });
  }
  let F = D;
}

__m(__module,__exports,__require);
});
A.reg(16420, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => o });
  var n = r(51811);
  let l = {
    name: "list-todo",
    size: 24,
    node: [
      ["path", { d: "M13 5h8", key: "a7qcls" }],
      ["path", { d: "M13 12h8", key: "h98zly" }],
      ["path", { d: "M13 19h8", key: "c3s6r1" }],
      ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
      [
        "rect",
        { x: "3", y: "4", width: "6", height: "6", rx: "1", key: "cif1o7" }
      ]
    ]
  };
  l.node;
  let o = (0, n.A)(l);
}

__m(__module,__exports,__require);
});
A.regCss(45253, ".demo{display:flex;flex-direction:column;align-items:center;gap:16px;width:100%}", {"demo":"demo"});
A.reg(51452, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => r });
  var o = a(51811);
  let l = {
    name: "chart-no-axes-column",
    size: 24,
    node: [
      ["path", { d: "M5 21v-6", key: "1hz6c0" }],
      ["path", { d: "M12 21V3", key: "1lcnhd" }],
      ["path", { d: "M19 21V9", key: "unv183" }]
    ],
    aliases: ["bar-chart-2"]
  };
  l.node;
  let r = (0, o.A)(l);
}

__m(__module,__exports,__require);
});
A.reg(58081, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => d });
  var r = a(51811);
  let n = {
    name: "pen-line",
    size: 24,
    node: [
      ["path", { d: "M13 21h8", key: "1jsn5i" }],
      [
        "path",
        {
          d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
          key: "1a8usu"
        }
      ]
    ],
    aliases: ["edit-3"]
  };
  n.node;
  let d = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(73246, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.d(t, { A: () => n });
  var r = a(51811);
  let i = {
    name: "shuffle",
    size: 24,
    node: [
      ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }],
      ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
      [
        "path",
        {
          d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",
          key: "1ailkh"
        }
      ],
      ["path", { d: "M2 6h1.972a4 4 0 0 1 3.6 2.2", key: "km57vx" }],
      [
        "path",
        { d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45", key: "os18l9" }
      ]
    ]
  };
  i.node;
  let n = (0, r.A)(i);
}

__m(__module,__exports,__require);
});
A.regCss(76946, ".root{container-type:inline-size;box-sizing:border-box;width:100%;max-width:720px;border:1px solid var(--border);border-radius:var(--radius-surface);padding:24px;background:var(--surface);color:var(--foreground);font-size:var(--text-sm);line-height:20px}\n.root *,.root :after,.root :before{box-sizing:border-box}\n@media (max-width:480px){.root{border-radius:var(--radius-panel);padding:16px}\n.header{display:grid;gap:4px}\n.greeting{margin:0;font-size:var(--text-xl);line-height:28px;font-weight:500;letter-spacing:-.01em;text-wrap:balance}\n.description{margin:0;color:var(--text-muted);text-wrap:pretty}\n.toolbar{display:flex;align-items:center;gap:8px;margin-top:24px}\n.toolbar{margin-top:16px}\n.tabs{flex:0 1 auto}\n.shuffle{flex:none;margin-left:auto}\n.shuffle svg{flex:none}\n.shuffle{width:var(--control-height-sm);padding-inline:0}\n.gridWrap{position:relative;margin-top:12px}\n.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin:0;padding:0;list-style:none}\n@container (max-width: 560px){.grid{grid-template-columns:minmax(0,1fr)}\n.slot{min-width:0}\n.slot[data-empty]{visibility:hidden;height:98px}\n.card{position:relative;display:block;width:100%;height:98px;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-control);padding:0;background:var(--surface);color:inherit;font:inherit;text-align:left;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard),transform .12s var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.card:hover:not(:disabled){border-color:color-mix(in oklab,var(--foreground) 18%,var(--border));background:color-mix(in oklab,var(--surface-muted) 70%,var(--surface))}\n.card:active:not(:disabled){transform:scale(.985);background:var(--surface-muted)}\n.card:disabled{cursor:default}\n.card:disabled .content{opacity:.55}\n.card[data-picked]{border-color:color-mix(in oklab,var(--accent) 45%,var(--border))}\n@media (prefers-reduced-motion:reduce){.card,.composer,.content,.send{transition:none}\n.content{position:absolute;inset:0;display:flex;flex-direction:column;padding:14px 16px;transition:opacity var(--duration-fast) var(--ease-standard)}\n.meta{display:flex;align-items:center;gap:6px;min-width:0;height:16px;color:var(--text-muted);font-size:var(--text-xs);line-height:16px}\n.meta .bone{height:8px}\n.categoryIcon{display:inline-flex;flex:none;width:14px;height:14px;color:var(--text-muted)}\n.categoryIcon[data-series=\"1\"]{color:var(--series-1)}\n.categoryIcon[data-series=\"2\"]{color:var(--series-2)}\n.categoryIcon[data-series=\"3\"]{color:var(--series-3)}\n.categoryIcon[data-series=\"4\"]{color:var(--series-4)}\n.categoryLabel{flex:none}\n.app{display:inline-flex;align-items:center;gap:6px;min-width:0;margin-left:auto;padding-left:8px}\n.appMark{display:block;flex:none;color:var(--foreground)}\n.appName,.title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.title{margin-top:10px;color:var(--foreground);font-weight:500}\n.cardDescription{margin-top:2px;overflow:hidden;color:var(--text-muted);text-overflow:ellipsis;white-space:nowrap}\n.skeleton{cursor:default}\n.bone{display:block;height:10px;border-radius:999px;background:var(--surface-muted);animation:breathe 1.4s var(--ease-standard) infinite alternate}\n.bone,.spinner{animation:none}\n.boneTitle{height:10px;margin-top:15px}\n.boneLine{height:10px;margin-top:12px;animation-delay:.15s}\n.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;border:1px dashed var(--border);border-radius:var(--radius-control);padding:16px;background:var(--surface);text-align:center}\n.emptyTitle{margin:0;font-weight:500}\n.emptyCopy{margin:0 0 8px;color:var(--text-muted)}\n.composer{margin-top:16px;border:1px solid var(--border);border-radius:var(--radius-panel);padding:14px 8px 8px 16px;background:var(--surface);cursor:text;transition:border-color var(--duration-fast) var(--ease-standard)}\n.composer:focus-within{border-color:color-mix(in oklab,var(--foreground) 34%,var(--border))}\n.composer{padding-left:14px}\n.input{display:block;width:100%;height:60px;margin:0;border:0;padding:0 8px 0 0;background:transparent;color:var(--foreground);font:inherit;font-size:var(--text-sm);line-height:20px;resize:none;outline:none;overflow-y:auto;scrollbar-width:thin}\n.input::placeholder{color:var(--text-muted);opacity:1}\n.input[readonly]{color:var(--text-secondary)}\n.footer{display:flex;align-items:center;gap:8px;height:36px;margin-top:8px}\n.footerStatus{position:relative;display:flex;flex:1;align-items:center;min-width:0;height:100%;color:var(--text-muted);font-size:var(--text-xs);line-height:16px}\n.statusInner{display:flex;align-items:center;gap:8px;min-width:0;max-width:100%}\n.ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.model{display:inline-flex;align-items:center;gap:6px;min-width:0}\n.modelMark{display:inline-flex;flex:none}\n.modelMark svg{display:block;width:14px;height:14px}\n.chip{height:24px;border:1px solid var(--border);border-radius:999px;padding:0 9px 0 7px;color:var(--text-secondary)}\n.chip,.done,.failed{display:inline-flex;align-items:center;gap:6px;min-width:0}\n.done{color:var(--text-secondary)}\n.failed{color:var(--danger)}\n.doneIcon{flex:none;color:var(--success)}\n.failedIcon,.retry{flex:none}\n.send{position:relative;display:grid;flex:none;place-items:center;width:36px;height:36px;border:0;border-radius:50%;padding:0;background:var(--accent);color:var(--accent-foreground);cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),transform .12s var(--ease-standard),opacity var(--duration-fast) var(--ease-standard)}\n@media (hover:hover) and (pointer:fine){.send:hover:not(:disabled){opacity:.9}\n.send:active:not(:disabled){transform:scale(.94)}\n.send:disabled{background:var(--surface-muted);color:var(--text-muted);cursor:not-allowed}\n.sendIcon{display:grid;place-items:center;grid-area:1/1}\n.stopWrap{position:relative;display:grid;place-items:center;width:16px;height:16px}\n.stopSquare{position:absolute;width:6px;height:6px;border-radius:1.5px;background:currentColor}\n.spinner{position:absolute;inset:0;animation:spin .8s linear infinite}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}\n@container (max-width: 440px){.shuffleLabel{display:none}", {"root":"root","header":"header","greeting":"greeting","description":"description","toolbar":"toolbar","tabs":"tabs","shuffle":"shuffle","gridWrap":"gridWrap","grid":"grid","slot":"slot","card":"card","content":"content","composer":"composer","send":"send","meta":"meta","bone":"bone","categoryIcon":"categoryIcon","categoryLabel":"categoryLabel","app":"app","appMark":"appMark","appName":"appName","title":"title","cardDescription":"cardDescription","skeleton":"skeleton","spinner":"spinner","boneTitle":"boneTitle","boneLine":"boneLine","empty":"empty","emptyTitle":"emptyTitle","emptyCopy":"emptyCopy","input":"input","footer":"footer","footerStatus":"footerStatus","statusInner":"statusInner","ellipsis":"ellipsis","model":"model","modelMark":"modelMark","chip":"chip","done":"done","failed":"failed","doneIcon":"doneIcon","failedIcon":"failedIcon","retry":"retry","sendIcon":"sendIcon","stopWrap":"stopWrap","stopSquare":"stopSquare","srOnly":"srOnly","shuffleLabel":"shuffleLabel"});
A.reg(92782, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => l });
  var r = t(51811);
  let n = {
    name: "code-xml",
    size: 24,
    node: [
      ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
      ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
      ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
    ],
    aliases: ["code-2"]
  };
  n.node;
  let l = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.cssFor("starter-prompts", [45253,76946]);
A.item("starter-prompts", {entry:67, export:"StarterPromptsDemo", kind:"component", tier:"pro", unresolved:[]});
})();