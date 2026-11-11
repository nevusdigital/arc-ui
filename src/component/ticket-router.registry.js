/* ticket-router (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(17356, function(__module,__exports,__require){
"use strict";
function __m(e, t, o) {
  o.d(t, { A: () => a });
  var r = o(51811);
  let n = {
    name: "circle-question-mark",
    size: 24,
    node: [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
      ["path", { d: "M12 17h.01", key: "p32p05" }]
    ],
    aliases: ["help-circle", "circle-help"]
  };
  n.node;
  let a = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(19734, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { TicketRouterDemo: () => en, default: () => es });
  var i = a(95155), n = a(12115), s = a(80642), r = a(25354), l = a(18310), o = a(71019), c = a(68319), d = a(34e3), u = a(95097), h = a(96915), m = a(74024), p = a(50084), g = a(64962), f = a(61665), v = a(35484), _ = a(92298), w = a(90467), b = a(17356), j = a(36619), x = a(79267), k = a(92218), y = a(51288), N = a(52898), A = a(7770), z = a(67752);
  let T = {
    billing: "Billing",
    bug: "Bug",
    feature: "Feature request",
    refund: "Refund"
  }, S = { positive: "Positive", neutral: "Neutral", negative: "Frustrated" }, C = {
    email: "Gmail",
    intercom: "Intercom",
    slack: "Slack",
    zendesk: "Zendesk"
  }, M = [
    {
      id: "billing",
      label: "Billing",
      count: 14,
      assignees: [
        { name: "Andre Williams", avatar: (0, z.my)("andre-williams") },
        { name: "Sofia Ramirez", avatar: (0, z.my)("sofia-ramirez") }
      ]
    },
    {
      id: "engineering",
      label: "Engineering",
      count: 9,
      assignees: [
        { name: "Daniel Kim", avatar: (0, z.my)("daniel-kim") },
        { name: "Olivia Bennett", avatar: (0, z.my)("olivia-bennett") }
      ]
    },
    {
      id: "success",
      label: "Success",
      count: 6,
      assignees: [
        { name: "Hannah Walsh", avatar: (0, z.my)("hannah-walsh") },
        { name: "Jordan Reyes", avatar: (0, z.my)("jordan-reyes") }
      ]
    },
    { id: "review", label: "Needs review", count: 1, review: true }
  ], $ = [
    {
      id: "t-4821",
      channel: "email",
      customer: "Priya Raman",
      company: "Northwind Logistics",
      receivedAt: "9:41",
      subject: "Charged twice for the October invoice",
      preview: "Hi team, our Visa ending 4417 was billed $1,240 twice on Oct 24 for the Growth plan. Could you reverse the duplicate charge?",
      sample: { intent: "billing", sentiment: "negative", confidence: 0.97 }
    },
    {
      id: "t-4822",
      channel: "intercom",
      customer: "Lukas Meyer",
      company: "Fernhill",
      receivedAt: "9:42",
      subject: "CSV export fails above 10,000 rows",
      preview: "Exporting the Q3 deals view returns a 504 after about 30 seconds. Smaller views export fine. It started after Tuesday's release.",
      sample: { intent: "bug", sentiment: "negative", confidence: 0.94 }
    },
    {
      id: "t-4823",
      channel: "slack",
      customer: "Aiko Tanaka",
      company: "Brightline",
      receivedAt: "9:42",
      subject: "Group provisioning through Okta",
      preview: "We are adding 140 seats in November and would love SCIM group sync with Okta so new hires land in the right workspace.",
      sample: { intent: "feature", sentiment: "positive", confidence: 0.91 }
    },
    {
      id: "t-4824",
      channel: "email",
      customer: "Marco Bellini",
      company: "Atelier Nove",
      receivedAt: "9:43",
      subject: "Refund for unused seats",
      preview: "We went from 25 to 12 seats on Oct 3 but were charged for the full month. Requesting a prorated refund of $312.",
      sample: { intent: "refund", sentiment: "neutral", confidence: 0.89 }
    },
    {
      id: "t-4825",
      channel: "intercom",
      customer: "Grace Okafor",
      company: "Lumen Health",
      receivedAt: "9:44",
      subject: "Something feels off with reminders",
      preview: "A few patients said reminders arrived late yesterday. Not sure if it is on our side or yours, can someone take a look?",
      sample: { intent: "bug", sentiment: "neutral", confidence: 0.54 }
    },
    {
      id: "t-4826",
      channel: "slack",
      customer: "Tom Becker",
      company: "Parcelwise",
      receivedAt: "9:44",
      subject: "Webhooks arrive twice",
      preview: "Since Oct 25 every order.updated webhook arrives twice, about 200ms apart, with the same event id.",
      sample: {
        intent: "bug",
        sentiment: "negative",
        confidence: 0.95,
        failOnce: true
      }
    },
    {
      id: "t-4827",
      channel: "zendesk",
      customer: "Elena Petrova",
      company: "Quill & Co",
      receivedAt: "9:45",
      subject: "Weekly PDF of the new dashboard",
      preview: "The new reporting dashboard is great. Could we schedule it as a weekly PDF for our leadership team on Mondays?",
      sample: { intent: "feature", sentiment: "positive", confidence: 0.88 }
    },
    {
      id: "t-4828",
      channel: "intercom",
      customer: "Sam Whitfield",
      company: "Harbor Labs",
      receivedAt: "9:46",
      subject: "Invoice shows our old VAT number",
      preview: "Our October invoice lists the old VAT ID. Please reissue it with GB 293 4471 09 before month end.",
      sample: { intent: "billing", sentiment: "neutral", confidence: 0.93 }
    },
    {
      id: "t-4829",
      channel: "email",
      customer: "Nina Alvarez",
      company: "Orbital",
      receivedAt: "9:46",
      subject: "Wrong plan, can we switch?",
      preview: "We picked the annual plan on Oct 20 by mistake and meant monthly. Can you switch us and sort out the difference?",
      sample: { intent: "refund", sentiment: "neutral", confidence: 0.62 }
    }
  ], R = (e2) => M.find((t2) => t2.id === e2), I = [
    {
      id: "t-4814",
      channel: "intercom",
      customer: "Ravi Shah",
      company: "Kitebird",
      receivedAt: "9:31",
      subject: "Update the card on file",
      preview: "",
      classification: {
        intent: "billing",
        sentiment: "neutral",
        confidence: 0.96
      },
      lane: "billing",
      assignee: R("billing").assignees[1]
    },
    {
      id: "t-4816",
      channel: "email",
      customer: "Helen Price",
      company: "Daybreak",
      receivedAt: "9:34",
      subject: "Receipt is missing our address",
      preview: "",
      classification: {
        intent: "billing",
        sentiment: "neutral",
        confidence: 0.92
      },
      lane: "billing",
      assignee: R("billing").assignees[0]
    },
    {
      id: "t-4815",
      channel: "slack",
      customer: "Owen Hart",
      company: "Relay",
      receivedAt: "9:32",
      subject: "SAML login loops on Safari 19",
      preview: "",
      classification: {
        intent: "bug",
        sentiment: "negative",
        confidence: 0.95
      },
      lane: "engineering",
      assignee: R("engineering").assignees[1]
    },
    {
      id: "t-4818",
      channel: "zendesk",
      customer: "Mia Larsen",
      company: "Fjord",
      receivedAt: "9:37",
      subject: "API returns 429 since 14:00 UTC",
      preview: "",
      classification: {
        intent: "bug",
        sentiment: "negative",
        confidence: 0.93
      },
      lane: "engineering",
      assignee: R("engineering").assignees[0]
    },
    {
      id: "t-4817",
      channel: "intercom",
      customer: "Leo Grant",
      company: "Plainsight",
      receivedAt: "9:35",
      subject: "Dark mode for the mobile app",
      preview: "",
      classification: {
        intent: "feature",
        sentiment: "positive",
        confidence: 0.9
      },
      lane: "success",
      assignee: R("success").assignees[1]
    },
    {
      id: "t-4819",
      channel: "email",
      customer: "Ines Duarte",
      company: "Mareva",
      receivedAt: "9:38",
      subject: "Question about our account",
      preview: "",
      classification: {
        intent: "feature",
        sentiment: "neutral",
        confidence: 0.48
      },
      lane: "review",
      suggestedLane: "success"
    }
  ];
  function W({ title: e2 = "Gmail", ...t2 }) {
    return (0, i.jsx)("svg", {
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, i.jsx)("path", {
        fill: "#EA4335",
        d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
      })
    });
  }
  function E({ title: e2 = "Intercom", ...t2 }) {
    return (0, i.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, i.jsx)("path", {
        d: "M21 0H3C1.343 0 0 1.343 0 3v18c0 1.658 1.343 3 3 3h18c1.658 0 3-1.342 3-3V3c0-1.657-1.342-3-3-3zm-5.801 4.399c0-.44.36-.8.802-.8.44 0 .8.36.8.8v10.688c0 .442-.36.801-.8.801-.443 0-.802-.359-.802-.801V4.399zM11.2 3.994c0-.44.357-.799.8-.799s.8.359.8.799v11.602c0 .44-.357.8-.8.8s-.8-.36-.8-.8V3.994zm-4 .405c0-.44.359-.8.799-.8.443 0 .802.36.802.8v10.688c0 .442-.36.801-.802.801-.44 0-.799-.359-.799-.801V4.399zM3.199 6c0-.442.36-.8.802-.8.44 0 .799.358.799.8v7.195c0 .441-.359.8-.799.8-.443 0-.802-.36-.802-.8V6zM20.52 18.202c-.123.105-3.086 2.593-8.52 2.593-5.433 0-8.397-2.486-8.521-2.593-.335-.288-.375-.792-.086-1.128.285-.334.79-.375 1.125-.09.047.041 2.693 2.211 7.481 2.211 4.848 0 7.456-2.186 7.479-2.207.334-.289.839-.25 1.128.086.289.336.25.84-.086 1.128zm.281-5.007c0 .441-.36.8-.801.8-.441 0-.801-.36-.801-.8V6c0-.442.361-.8.801-.8.441 0 .801.357.801.8v7.195z"
      })
    });
  }
  function L({ title: e2 = "Slack", ...t2 }) {
    return (0, i.jsxs)("svg", {
      viewBox: "0 0 24 24",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: [
        (0, i.jsx)("path", {
          fill: "#E01E5A",
          d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
        }),
        (0, i.jsx)("path", {
          fill: "#36C5F0",
          d: "M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
        }),
        (0, i.jsx)("path", {
          fill: "#2EB67D",
          d: "M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
        }),
        (0, i.jsx)("path", {
          fill: "#ECB22E",
          d: "M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
        })
      ]
    });
  }
  function P({ title: e2 = "Zendesk", ...t2 }) {
    return (0, i.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, i.jsx)("path", {
        d: "M12.914 2.904V16.29L24 2.905H12.914zM0 2.906C0 5.966 2.483 8.45 5.543 8.45s5.542-2.484 5.543-5.544H0zm11.086 4.807L0 21.096h11.086V7.713zm7.37 7.84c-3.063 0-5.542 2.48-5.542 5.543H24c0-3.06-2.48-5.543-5.543-5.543z"
      })
    });
  }
  function B({ title: e2 = "Claude", ...t2 }) {
    return (0, i.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, i.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  var O = a(24241), F = a.n(O);
  let H = (...e2) => e2.filter(Boolean).join(" "), Y = (e2) => `${Math.round(100 * e2)}%`, V = [...A.T.ease.standard], D = { type: "spring", visualDuration: 0.24, bounce: 0 }, G = {
    email: (e2) => (0, i.jsx)(W, { ...e2 }),
    intercom: (e2) => (0, i.jsx)(E, { ...e2 }),
    slack: (e2) => (0, i.jsx)(L, { ...e2 }),
    zendesk: (e2) => (0, i.jsx)(P, { ...e2 })
  };
  function Z({ channel: e2, size: t2 = 16 }) {
    return (0, i.jsx)("span", {
      className: F().mark,
      style: { width: t2, height: t2 },
      children: G[e2]({ width: t2, height: t2, title: C[e2] })
    });
  }
  let K = { billing: o.A, bug: c.A, feature: d.A, refund: u.A }, J = { positive: h.A, neutral: m.A, negative: p.A };
  function q({ value: e2, reduced: t2 }) {
    let a2 = String(e2);
    return (0, i.jsx)("span", {
      className: F().roll,
      style: { minWidth: `${Math.max(2, a2.length)}ch` },
      children: (0, i.jsx)(s.N, {
        initial: false,
        mode: "popLayout",
        children: (0, i.jsx)(
          r.PY1.span,
          {
            className: F().rollValue,
            initial: t2 ? { opacity: 0 } : { opacity: 0, y: "70%" },
            animate: { opacity: 1, y: 0 },
            exit: t2 ? { opacity: 0 } : { opacity: 0, y: "-70%" },
            transition: { duration: t2 ? 0 : A.T.duration.fast, ease: V },
            children: a2
          },
          a2
        )
      })
    });
  }
  function Q({
    swapKey: e2,
    children: t2,
    className: a2,
    reduced: n2,
    travel: l2 = 2
  }) {
    return (0, i.jsx)(s.N, {
      initial: false,
      children: (0, i.jsx)(
        r.PY1.div,
        {
          className: H(F().swap, a2),
          initial: n2 ? { opacity: 0 } : { opacity: 0, y: -l2 },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: n2 ? 0 : A.T.duration.fast,
              ease: V,
              delay: 0.04 * !n2
            }
          },
          exit: n2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: 2 * l2, transition: { duration: 0.1, ease: V } },
          children: t2
        },
        e2
      )
    });
  }
  function X({ value: e2, low: t2 }) {
    return (0, i.jsxs)("span", {
      className: F().chip,
      "data-low": t2 || void 0,
      children: [
        (0, i.jsx)("span", {
          className: F().meter,
          "aria-hidden": "true",
          children: (0, i.jsx)("span", {
            className: F().meterFill,
            style: { transform: `scaleX(${Math.max(0.04, Math.min(1, e2))})` }
          })
        }),
        (0, i.jsx)("span", { className: F().chipNum, children: Y(e2) }),
        (0, i.jsxs)("span", {
          className: F().srOnly,
          children: ["confidence", t2 ? ", low" : ""]
        })
      ]
    });
  }
  function U({ result: e2, low: t2, reduced: a2 }) {
    let n2 = K[e2.intent], s2 = J[e2.sentiment], l2 = [
      (0, i.jsxs)(
        "span",
        {
          className: F().chip,
          children: [
            (0, i.jsx)(n2, {
              size: 14,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            T[e2.intent]
          ]
        },
        "intent"
      ),
      (0, i.jsxs)(
        "span",
        {
          className: F().chip,
          "data-sentiment": e2.sentiment,
          children: [
            (0, i.jsx)(s2, {
              size: 14,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            S[e2.sentiment]
          ]
        },
        "sentiment"
      ),
      (0, i.jsx)(X, { value: e2.confidence, low: t2 }, "confidence")
    ];
    return (0, i.jsx)("span", {
      className: F().chips,
      children: l2.map(
        (e3, t3) => (0, i.jsx)(
          r.PY1.span,
          {
            className: F().chipSlot,
            initial: !a2 && { opacity: 0 },
            animate: { opacity: 1 },
            transition: {
              duration: A.T.duration.fast,
              ease: V,
              delay: 0.05 * t3
            },
            children: e3
          },
          e3.key
        )
      )
    });
  }
  function ee({
    tickets: e2,
    lanes: t2 = M,
    initialRouted: a2,
    classify: o2,
    route: c2,
    reviewThreshold: d2 = 0.7,
    loop: u2,
    paused: h2,
    defaultPaused: m2 = false,
    onPausedChange: p2,
    onRoute: z2,
    onReview: T2,
    onError: S2,
    maxVisible: C2 = 3,
    speed: R2 = 1,
    title: W2 = "Ticket routing",
    model: E2 = "Claude Haiku 5.5",
    modelMark: L2,
    className: P2
  }) {
    let O2 = (0, l.I)() ?? false, Y2 = (0, n.useId)(), G2 = e2 ?? $, K2 = u2 ?? !e2, J2 = !o2, [X2, ea2] = (0, n.useState)(m2), ei2 = h2 ?? X2, [en2, es2] = (0, n.useState)(true), [er, el] = (0, n.useState)("connecting"), [eo, ec] = (0, n.useState)(null), [ed, eu] = (0, n.useState)(null), [eh, em] = (0, n.useState)(null), [ep, eg] = (0, n.useState)(""), [ef, ev] = (0, n.useState)(0), [e_, ew] = (0, n.useState)(
      () => a2 ?? (e2 ? [] : [...I].sort((e3, t3) => t3.id.localeCompare(e3.id)))
    ), [eb, ej] = (0, n.useState)(
      () => Object.fromEntries(t2.map((e3) => [e3.id, e3.count ?? 0]))
    ), [ex, ek] = (0, n.useState)(() => /* @__PURE__ */ new Set()), [ey, eN] = (0, n.useState)(0), [eA, ez] = (0, n.useState)(""), eT = (0, n.useRef)(null), eS = (0, n.useRef)(0), eC = (0, n.useRef)(/* @__PURE__ */ new Set()), eM = (0, n.useRef)(/* @__PURE__ */ new Set()), e$ = (0, n.useRef)({}), eR = (0, n.useRef)({
      classify: o2,
      route: c2,
      onRoute: z2,
      onReview: T2,
      onError: S2
    });
    (0, n.useEffect)(() => {
      eR.current = {
        classify: o2,
        route: c2,
        onRoute: z2,
        onReview: T2,
        onError: S2
      };
    });
    let eI = t2.find((e3) => e3.review), eW = (0, n.useCallback)((e3) => t2.find((t3) => t3.id === e3), [t2]), eE = (e3) => e3 / Math.max(0.25, R2), [eL, eP] = (0, n.useState)(false);
    (0, n.useEffect)(() => {
      let e3 = eT.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([e4]) => eP(e4.contentRect.width <= 600));
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    let eB = eL ? Math.min(2, C2) : C2;
    (0, n.useEffect)(() => {
      let e3 = eT.current;
      if (!e3 || "u" < typeof IntersectionObserver) return;
      let t3 = new IntersectionObserver(([e4]) => es2(e4.isIntersecting), {
        rootMargin: "80px"
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []);
    let eO = (0, n.useCallback)(() => {
      if (!G2.length) return null;
      if (K2) {
        let e3 = eS.current % G2.length, t3 = Math.floor(eS.current / G2.length);
        eS.current += 1;
        let a3 = G2[e3];
        return t3 ? { ...a3, id: `${a3.id}-${t3}`, receivedAt: void 0 } : a3;
      }
      return G2.find((e3) => !eC.current.has(e3.id)) ?? null;
    }, [G2, K2]), eF = (0, n.useCallback)(() => {
      let e3 = eO();
      eu(null), em(null), eg(""), ev(0), ec(e3), el(e3 ? "arriving" : "idle");
    }, [eO]), eH = (0, n.useCallback)(
      (e3) => {
        let t3 = eW(e3)?.assignees ?? [];
        if (!t3.length) return;
        let a3 = e$.current[e3] ?? 0;
        return e$.current[e3] = a3 + 1, t3[a3 % t3.length];
      },
      [eW]
    ), eY = (0, n.useCallback)(
      (e3, a3) => {
        let i2, n2 = eR.current.route?.(e3, a3) ?? ("bug" === (i2 = a3.intent) ? "engineering" : "feature" === i2 ? "success" : "billing"), s2 = eW(n2) ? n2 : t2.find((e4) => !e4.review)?.id ?? n2;
        return eI && a3.confidence < d2 ? { lane: eI.id, suggestedLane: s2 } : { lane: s2, assignee: eH(s2) };
      },
      [eW, t2, eI, d2, eH]
    ), eV = (0, n.useCallback)(
      (e3, t3, a3) => {
        let i2 = {
          ...e3,
          classification: t3,
          lane: a3.lane,
          assignee: a3.assignee,
          suggestedLane: a3.suggestedLane
        };
        eC.current.add(e3.id), ew((e4) => [i2, ...e4].slice(0, 80)), ej((e4) => ({ ...e4, [a3.lane]: (e4[a3.lane] ?? 0) + 1 })), ek((t4) => new Set(t4).add(e3.id)), eN((e4) => e4 + 1);
        let n2 = eW(a3.lane)?.label ?? a3.lane;
        ez(
          `${e3.subject}: routed to ${n2}${a3.assignee ? `, assigned to ${a3.assignee.name}` : ""}.${J2 ? " Simulated, nothing was sent." : ""}`
        ), eR.current.onRoute?.(i2);
      },
      [eW, J2]
    );
    (0, n.useEffect)(() => {
      let e3;
      if (ei2 || !en2) return;
      let t3 = (t4, a3) => {
        e3 = window.setTimeout(a3, eE(t4));
      };
      if ("connecting" === er) t3(560, eF);
      else if ("arriving" === er) t3(220, () => el("classifying"));
      else if ("labeled" === er) t3(420, () => el("routing"));
      else if ("routing" === er && eo && eh)
        t3(560, () => {
          eV(eo, ed ?? void 0, eh), eF();
        });
      else if ("error" === er && J2)
        t3(1700, () => {
          ev((e4) => e4 + 1), el("classifying");
        });
      else if ("idle" === er)
        G2.length > 0 && (K2 || G2.some((e4) => !eC.current.has(e4.id))) && t3(220, eF);
      else if ("classifying" === er && eo) {
        let t4 = new AbortController();
        return (eR.current.classify ? eR.current.classify(eo, { signal: t4.signal }) : new Promise((t5, a3) => {
          e3 = window.setTimeout(() => {
            if (eo.sample?.failOnce && !eM.current.has(eo.id))
              eM.current.add(eo.id), a3(Error("The classifier timed out after 8s."));
            else {
              let e4;
              t5(
                eo.sample ? {
                  intent: eo.sample.intent,
                  sentiment: eo.sample.sentiment,
                  confidence: eo.sample.confidence
                } : (e4 = `${eo.subject} ${eo.preview}`.toLowerCase(), {
                  intent: /refund|cancel/.test(e4) ? "refund" : /invoice|charge|billing|card|vat|plan/.test(e4) ? "billing" : /error|fail|bug|broken|crash|5\d\d|twice/.test(
                    e4
                  ) ? "bug" : "feature",
                  sentiment: /love|great|thanks|would love/.test(e4) ? "positive" : /twice|again|still|urgent|broken/.test(e4) ? "negative" : "neutral",
                  confidence: 0.66
                })
              );
            }
          }, eE(720));
        })).then(
          (e4) => {
            t4.signal.aborted || (eu(e4), em(eY(eo, e4)), el("labeled"));
          },
          (e4) => {
            t4.signal.aborted || (eg(
              e4 instanceof Error && e4.message ? e4.message : "The classifier could not label this ticket."
            ), el("error"), ez(`${eo.subject}: classification failed.`), eR.current.onError?.(eo, e4));
          }
        ), () => {
          t4.abort(), window.clearTimeout(e3);
        };
      }
      return () => window.clearTimeout(e3);
    }, [er, eo, eh, ef, ei2, en2, J2, G2, eF, eY, eV]);
    let eD = (e3) => {
      let t3 = e3.suggestedLane;
      if (!t3 || !eW(t3)) return;
      let a3 = eH(t3), i2 = { ...e3, lane: t3, assignee: a3, suggestedLane: void 0 };
      ew((t4) => [i2, ...t4.filter((t5) => t5.id !== e3.id)]), ej((a4) => ({
        ...a4,
        [e3.lane]: Math.max(0, (a4[e3.lane] ?? 0) - 1),
        [t3]: (a4[t3] ?? 0) + 1
      })), ek((t4) => new Set(t4).add(e3.id));
      let n2 = eW(t3)?.label ?? t3;
      ez(
        `${e3.subject}: moved to ${n2}${a3 ? `, assigned to ${a3.name}` : ""}.${J2 ? " Simulated, nothing was sent." : ""}`
      ), eR.current.onReview?.(i2, t3);
    }, eG = Object.values(eb).reduce((e3, t3) => e3 + t3, 0), eZ = !!ed && ed.confidence < d2 && !!eI, eK = eh ? t2.findIndex((e3) => e3.id === eh.lane) : -1, eJ = eW(eh?.lane), eq = "routing" === er && !!eh, eQ = "connecting" === er ? "connecting" : eo ? `ticket-${eo.id}` : ey ? "done" : "empty", eX = eo ? "error" === er ? "error" : ("labeled" === er || "routing" === er) && ed ? "labels" : "classifying" : "none", eU = "connecting" === er ? (0, i.jsx)("div", {
      className: F().placeholder,
      children: (0, i.jsx)(N.n, {
        className: F().placeholderText,
        children: "Connecting to Gmail, Intercom, Slack and Zendesk"
      })
    }) : eo ? (0, i.jsxs)("div", {
      className: F().ticket,
      children: [
        (0, i.jsxs)("div", {
          className: F().from,
          children: [
            (0, i.jsx)(Z, { channel: eo.channel }),
            (0, i.jsxs)("span", {
              className: F().fromText,
              children: [
                (0, i.jsx)("span", {
                  className: F().customer,
                  children: eo.customer
                }),
                eo.company ? (0, i.jsx)("span", {
                  className: F().company,
                  children: eo.company
                }) : null
              ]
            }),
            (0, i.jsx)("span", {
              className: F().time,
              children: eo.receivedAt ?? "now"
            })
          ]
        }),
        (0, i.jsx)("p", {
          className: F().subject,
          children: eo.subject
        }),
        (0, i.jsx)("p", {
          className: F().preview,
          children: eo.preview
        })
      ]
    }) : (0, i.jsxs)("div", {
      className: F().placeholder,
      children: [
        ey ? (0, i.jsx)(g.A, {
          size: 16,
          strokeWidth: 1.75,
          className: F().doneIcon,
          "aria-hidden": "true"
        }) : (0, i.jsx)(f.A, {
          size: 16,
          strokeWidth: 1.75,
          className: F().mutedIcon,
          "aria-hidden": "true"
        }),
        (0, i.jsx)("span", {
          className: F().placeholderTitle,
          children: ey ? "All caught up" : "Inbox is clear"
        }),
        (0, i.jsx)("span", {
          className: F().placeholderText,
          children: ey ? `Routed ${ey} ${1 === ey ? "ticket" : "tickets"} this session.` : "New messages are classified and routed as they arrive."
        })
      ]
    }), e0 = "none" === eX ? null : "error" === eX ? (0, i.jsxs)("div", {
      className: F().rowInner,
      children: [
        (0, i.jsxs)("span", {
          className: F().errorText,
          children: [
            (0, i.jsx)(v.A, {
              size: 14,
              strokeWidth: 1.75,
              "aria-hidden": "true"
            }),
            (0, i.jsxs)("span", {
              className: F().truncate,
              children: [ep, J2 ? " Retrying." : ""]
            })
          ]
        }),
        (0, i.jsxs)("span", {
          className: F().rowActions,
          children: [
            eI ? (0, i.jsx)(y.$, {
              variant: "ghost",
              size: "sm",
              onClick: () => {
                eo && eI && (eV(eo, void 0, { lane: eI.id }), eF());
              },
              children: "Send to review"
            }) : null,
            (0, i.jsxs)(y.$, {
              variant: "secondary",
              size: "sm",
              onClick: () => {
                eg(""), ev((e3) => e3 + 1), el("classifying");
              },
              children: [
                (0, i.jsx)(_.A, {
                  size: 14,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                "Retry"
              ]
            })
          ]
        })
      ]
    }) : "labels" === eX && ed ? (0, i.jsxs)("div", {
      className: F().rowInner,
      children: [
        (0, i.jsx)(U, { result: ed, low: eZ, reduced: O2 }),
        (0, i.jsx)("span", {
          className: F().routeSlot,
          children: (0, i.jsx)(s.N, {
            initial: false,
            children: eq && eh ? (0, i.jsxs)(
              r.PY1.span,
              {
                className: F().route,
                initial: O2 ? { opacity: 0 } : { opacity: 0, x: -4 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0 },
                transition: {
                  duration: O2 ? 0 : A.T.duration.fast,
                  ease: V
                },
                children: [
                  (0, i.jsx)(w.A, {
                    size: 14,
                    strokeWidth: 1.75,
                    className: F().mutedIcon,
                    "aria-hidden": "true"
                  }),
                  eJ?.review ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(b.A, {
                        size: 14,
                        strokeWidth: 1.75,
                        className: F().reviewIcon,
                        "aria-hidden": "true"
                      }),
                      (0, i.jsx)("span", {
                        className: F().routeLane,
                        children: eJ.label
                      })
                    ]
                  }) : (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)("span", {
                        className: F().routeLane,
                        children: eJ?.label
                      }),
                      eh.assignee ? (0, i.jsxs)("span", {
                        className: F().routeWho,
                        children: [
                          (0, i.jsx)(k.e, {
                            name: eh.assignee.name,
                            src: eh.assignee.avatar,
                            size: "sm",
                            className: F().avatar20
                          }),
                          (0, i.jsx)("span", {
                            className: F().truncate,
                            children: eh.assignee.name
                          })
                        ]
                      }) : null
                    ]
                  })
                ]
              },
              "route"
            ) : null
          })
        })
      ]
    }) : (0, i.jsx)("div", {
      className: F().rowInner,
      children: (0, i.jsx)(N.n, {
        active: !ei2 && "idle" !== er && "error" !== er,
        className: F().classifying,
        children: ei2 ? "Paused before classifying" : `Classifying with ${E2}`
      })
    }), e22 = { "--n": t2.length };
    return (0, i.jsxs)("section", {
      ref: eT,
      className: H(F().root, P2),
      "aria-labelledby": `${Y2}-title`,
      "data-paused": ei2 || void 0,
      style: { "--rows": C2 },
      children: [
        (0, i.jsxs)("header", {
          className: F().header,
          children: [
            (0, i.jsx)("span", {
              className: F().modelMark,
              "aria-hidden": "true",
              children: L2 ?? (0, i.jsx)(B, { width: 16, height: 16, title: "" })
            }),
            (0, i.jsxs)("span", {
              className: F().heading,
              children: [
                (0, i.jsx)("span", {
                  id: `${Y2}-title`,
                  className: F().title,
                  children: W2
                }),
                (0, i.jsx)("span", { className: F().model, children: E2 })
              ]
            }),
            (0, i.jsxs)("span", {
              className: F().total,
              children: [
                (0, i.jsx)(q, { value: eG, reduced: O2 }),
                " routed today"
              ]
            }),
            (0, i.jsxs)(y.$, {
              variant: "secondary",
              size: "sm",
              className: F().pause,
              onClick: () => {
                var e3;
                return e3 = !ei2, void (void 0 === h2 && ea2(e3), p2?.(e3), ez(
                  e3 ? "Paused. New tickets wait in the queue." : "Resumed routing."
                ));
              },
              children: [
                ei2 ? (0, i.jsx)(j.A, {
                  size: 14,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }) : (0, i.jsx)(x.A, {
                  size: 14,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }),
                ei2 ? "Resume" : "Pause"
              ]
            })
          ]
        }),
        (0, i.jsx)("div", {
          className: F().incoming,
          "data-phase": er,
          "data-low": eZ || void 0,
          children: (0, i.jsx)("div", {
            className: F().stage,
            children: (0, i.jsx)(Q, {
              swapKey: eQ,
              reduced: O2,
              travel: 3,
              children: eo && "connecting" !== er ? (0, i.jsxs)(i.Fragment, {
                children: [
                  eU,
                  (0, i.jsx)("div", {
                    className: F().classifyRow,
                    children: (0, i.jsx)(Q, {
                      swapKey: eX,
                      reduced: O2,
                      children: e0
                    })
                  })
                ]
              }) : eU
            })
          })
        }),
        (0, i.jsxs)("div", {
          className: F().connector,
          style: e22,
          "aria-hidden": "true",
          children: [
            (0, i.jsx)("span", { className: F().stubTop }),
            (0, i.jsx)("span", { className: F().rail }),
            t2.map(
              (e3, t3) => (0, i.jsx)(
                "span",
                { className: F().stub, style: { "--i": t3 } },
                e3.id
              )
            ),
            (0, i.jsx)(s.N, {
              children: eq && eK >= 0 && eo ? (0, i.jsxs)(
                r.PY1.span,
                {
                  className: F().pulse,
                  "data-review": eJ?.review || void 0,
                  style: { "--i": eK },
                  initial: { opacity: 1 },
                  animate: { opacity: 1 },
                  exit: {
                    opacity: 0,
                    transition: { duration: A.T.duration.fast }
                  },
                  children: [
                    (0, i.jsx)(r.PY1.span, {
                      className: F().pulseTop,
                      initial: !O2 && { scaleY: 0 },
                      animate: { scaleY: 1 },
                      transition: { duration: 0.08, ease: "linear" }
                    }),
                    (0, i.jsx)(r.PY1.span, {
                      className: F().pulseRail,
                      "data-side": (eK + 0.5) / t2.length < 0.5 ? "left" : "right",
                      initial: !O2 && { scaleX: 0 },
                      animate: { scaleX: 1 },
                      transition: {
                        duration: 0.16,
                        ease: "linear",
                        delay: 0.08
                      }
                    }),
                    (0, i.jsx)(r.PY1.span, {
                      className: F().pulseStub,
                      initial: !O2 && { scaleY: 0 },
                      animate: { scaleY: 1 },
                      transition: {
                        duration: 0.08,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.24
                      }
                    })
                  ]
                },
                eo.id
              ) : null
            })
          ]
        }),
        (0, i.jsx)("div", {
          className: F().lanes,
          style: e22,
          children: t2.map((e3) => {
            let t3 = e_.filter((t4) => t4.lane === e3.id).slice(0, eB), a3 = eb[e3.id] ?? 0;
            return (0, i.jsxs)(
              "div",
              {
                className: F().lane,
                "data-target": eq && eh?.lane === e3.id || void 0,
                "data-review": e3.review || void 0,
                children: [
                  (0, i.jsxs)("div", {
                    className: F().laneHead,
                    children: [
                      (0, i.jsx)("span", {
                        className: F().laneName,
                        children: e3.label
                      }),
                      (0, i.jsx)("span", {
                        className: F().laneCount,
                        children: (0, i.jsx)(q, { value: a3, reduced: O2 })
                      })
                    ]
                  }),
                  (0, i.jsxs)("ul", {
                    className: F().laneBody,
                    "aria-label": `${e3.label}, ${a3} ${1 === a3 ? "ticket" : "tickets"}`,
                    children: [
                      (0, i.jsx)(s.N, {
                        initial: false,
                        children: t3.map(
                          (t4) => (0, i.jsx)(
                            r.PY1.li,
                            {
                              className: F().rowItem,
                              initial: O2 ? { opacity: 0 } : { opacity: 0, height: 0 },
                              animate: { opacity: 1, height: "auto" },
                              exit: O2 ? { opacity: 0 } : { opacity: 0, height: 0 },
                              transition: O2 ? { duration: 0 } : {
                                height: D,
                                opacity: {
                                  duration: A.T.duration.fast,
                                  ease: V
                                }
                              },
                              children: (0, i.jsx)(et, {
                                ticket: t4,
                                lane: e3,
                                fresh: ex.has(t4.id),
                                suggested: eW(t4.suggestedLane),
                                onConfirm: eD
                              })
                            },
                            t4.id
                          )
                        )
                      }),
                      t3.length ? null : (0, i.jsx)("li", {
                        className: F().laneEmpty,
                        children: "No tickets yet"
                      })
                    ]
                  })
                ]
              },
              e3.id
            );
          })
        }),
        (0, i.jsx)("span", {
          className: F().srOnly,
          role: "status",
          "aria-live": "polite",
          children: eA
        })
      ]
    });
  }
  function et({ ticket: e2, lane: t2, fresh: a2, suggested: n2, onConfirm: s2 }) {
    let r2 = e2.classification ? Y(e2.classification.confidence) : void 0, l2 = (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)(Z, { channel: e2.channel, size: 14 }),
        (0, i.jsx)("span", {
          className: F().rowSubject,
          children: e2.subject
        }),
        (0, i.jsx)("span", {
          className: F().rowWho,
          children: t2.review ? (0, i.jsx)(b.A, {
            size: 14,
            strokeWidth: 1.75,
            className: F().reviewIcon,
            "aria-hidden": "true"
          }) : e2.assignee ? (0, i.jsx)(k.e, {
            name: e2.assignee.name,
            src: e2.assignee.avatar,
            size: "sm",
            className: F().avatar16
          }) : null
        }),
        (0, i.jsx)("span", {
          className: F().rowMeta,
          children: t2.review ? n2 ? (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("span", {
                className: F().rowMetaStrong,
                children: n2.label
              }),
              "?",
              (0, i.jsx)("span", {
                className: F().srOnly,
                children: " suggested"
              })
            ]
          }) : "Not classified" : e2.assignee ? e2.assignee.name.split(" ")[0] : "Unassigned"
        }),
        (0, i.jsxs)("span", {
          className: F().rowPct,
          children: [
            n2 ? (0, i.jsx)(w.A, {
              size: 14,
              strokeWidth: 1.75,
              className: F().rowGo,
              "aria-hidden": "true"
            }) : null,
            (0, i.jsx)("span", { children: r2 })
          ]
        })
      ]
    });
    return t2.review && n2 ? (0, i.jsx)("button", {
      type: "button",
      className: F().row,
      "data-fresh": a2 || void 0,
      onClick: () => s2(e2),
      "aria-label": `${e2.subject}, from ${e2.customer}. ${r2 ?? ""} confidence. Route to ${n2.label}`,
      title: `Route to ${n2.label}`,
      children: l2
    }) : (0, i.jsx)("div", {
      className: F().row,
      "data-fresh": a2 || void 0,
      "aria-label": `${e2.subject}, from ${e2.customer}${e2.assignee ? `, assigned to ${e2.assignee.name}` : ""}`,
      role: "group",
      children: l2
    });
  }
  var ea = a(36994), ei = a.n(ea);
  function en() {
    return (0, i.jsx)("div", {
      className: ei().demo,
      children: (0, i.jsx)(ee, {})
    });
  }
  let es = en;
}

__m(__module,__exports,__require);
});
A.regCss(24241, ".ticket-router_root__s5E84{--tr-row:56px;--tr-gap:8px;--tr-stage:145px;--tr-lane-bg:color-mix(in oklab,var(--surface-muted) 62%,var(--surface));container-type:inline-size;box-sizing:border-box;width:100%;max-width:840px;min-width:0;padding:8px;border:1px solid var(--border);border-radius:var(--radius-panel,26px);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:20px}.ticket-router_root__s5E84 *,.ticket-router_root__s5E84 :after,.ticket-router_root__s5E84 :before{box-sizing:border-box}.ticket-router_srOnly__2X1_O{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}.ticket-router_truncate__QGDGa{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ticket-router_mutedIcon__xEJvz{flex:none;color:var(--text-muted)}.ticket-router_reviewIcon__Lb4M2{flex:none;color:var(--warning)}.ticket-router_doneIcon__MoZeb{flex:none;color:var(--success)}.ticket-router_mark__3upzW{display:inline-grid;flex:none;place-items:center;color:var(--foreground)}.ticket-router_mark__3upzW svg{display:block}.ticket-router_header__wXieB{display:flex;min-height:48px;align-items:center;gap:8px;padding:0 0 0 12px}.ticket-router_modelMark__tS_yv{display:grid;flex:none;width:16px;height:16px;place-items:center;color:#d97757}.ticket-router_modelMark__tS_yv svg{display:block;width:16px;height:16px}.ticket-router_heading__B2PfZ{display:flex;min-width:0;flex:1;align-items:baseline;gap:8px}.ticket-router_title__YeNNf{flex:none;font-weight:500}.ticket-router_model__MiNlg{min-width:0;overflow:hidden;text-overflow:ellipsis}.ticket-router_model__MiNlg,.ticket-router_total__QZ7Mn{color:var(--text-muted);font-size:var(--text-xs);white-space:nowrap}.ticket-router_total__QZ7Mn{display:inline-flex;flex:none;align-items:baseline;gap:4px}.ticket-router_total__QZ7Mn .ticket-router_roll__JDoIf{min-width:0!important}.ticket-router_pause__AYEAA{flex:none;min-width:92px}.ticket-router_roll__JDoIf{position:relative;display:inline-flex;justify-content:flex-end;overflow:hidden;font-variant-numeric:tabular-nums;vertical-align:bottom}.ticket-router_rollValue__6Y6z7{display:inline-block}.ticket-router_swap__A2ZD_{position:absolute;inset:0;min-width:0}.ticket-router_incoming__nVIzG{position:relative;padding:12px 11px;border:1px solid var(--border);border-radius:18px;background:var(--surface-raised,var(--surface))}.ticket-router_stage__OYe8x{position:relative;height:var(--tr-stage)}.ticket-router_ticket__fbsuk{display:flex;height:88px;flex-direction:column;min-width:0}.ticket-router_from__yvtnA{display:flex;height:18px;align-items:center;gap:8px;min-width:0;font-size:var(--text-xs);line-height:18px}.ticket-router_fromText__IBq5k{display:flex;min-width:0;flex:1;align-items:baseline;gap:6px;overflow:hidden;white-space:nowrap}.ticket-router_customer___GeKt{flex:none;font-weight:500}.ticket-router_company__Q3i1Y{min-width:0;overflow:hidden;color:var(--text-muted);text-overflow:ellipsis}.ticket-router_time__Pf0YV{flex:none;color:var(--text-muted);font-variant-numeric:tabular-nums}.ticket-router_subject__CYrn4{margin:8px 0 0;overflow:hidden;font-weight:500;text-overflow:ellipsis;white-space:nowrap}.ticket-router_preview__Lrm0H{display:-webkit-box;margin:2px 0 0;overflow:hidden;color:var(--text-secondary);-webkit-box-orient:vertical;-webkit-line-clamp:2}.ticket-router_classifyRow__5HBaa{position:relative;margin-top:12px;padding-top:12px;border-top:1px solid var(--border-subtle)}.ticket-router_classifyRow__5HBaa:after{content:\"\";display:block;height:32px}.ticket-router_classifyRow__5HBaa>.ticket-router_swap__A2ZD_{top:12px}.ticket-router_rowInner__dK0sF{display:flex;height:100%;align-items:center;justify-content:space-between;gap:12px;min-width:0}.ticket-router_classifying__jBWtx{color:var(--text-secondary);font-size:var(--text-xs)}.ticket-router_chips__3tY4c{display:flex;min-width:0;align-items:center;gap:6px}.ticket-router_chipSlot__ZAoYT{display:inline-flex;flex:none}.ticket-router_chip__9z4tR{display:inline-flex;height:24px;align-items:center;gap:6px;padding:0 8px;border-radius:8px;background:var(--surface-muted);color:var(--text-secondary);font-size:var(--text-xs);line-height:16px;white-space:nowrap}.ticket-router_chip__9z4tR svg{flex:none}.ticket-router_chip__9z4tR[data-sentiment=positive] svg{color:var(--success)}.ticket-router_chip__9z4tR[data-sentiment=negative] svg{color:var(--warning)}.ticket-router_chip__9z4tR[data-sentiment=neutral] svg{color:var(--text-muted)}.ticket-router_meter__0HK5r{position:relative;width:24px;height:4px;overflow:hidden;border-radius:2px;background:color-mix(in oklab,var(--foreground) 12%,transparent)}.ticket-router_meterFill__yM_i1{position:absolute;inset:0;border-radius:inherit;background:var(--accent);transform-origin:left center}.ticket-router_chip__9z4tR[data-low] .ticket-router_meterFill__yM_i1{background:var(--warning)}.ticket-router_chipNum__ekgci{min-width:3ch;font-variant-numeric:tabular-nums;text-align:right}.ticket-router_routeSlot__IOSQg{position:relative;display:flex;min-width:0;flex:0 1 auto;justify-content:flex-end}.ticket-router_route__6sDyZ{display:inline-flex;min-width:0;align-items:center;gap:6px;white-space:nowrap}.ticket-router_routeLane__Ec9Sn{flex:none;font-weight:500}.ticket-router_routeWho__txYet{display:inline-flex;min-width:0;align-items:center;gap:6px;margin-left:2px;color:var(--text-secondary)}.ticket-router_errorText__zSfNJ{display:inline-flex;min-width:0;align-items:center;gap:6px;color:var(--danger);font-size:var(--text-xs)}.ticket-router_rowActions__h90wR{display:inline-flex;flex:none;align-items:center;gap:6px}.ticket-router_placeholder__D4qRu{display:flex;height:100%;flex-direction:column;align-items:center;justify-content:center;gap:4px;padding:0 12px;text-align:center}.ticket-router_placeholderTitle__5lYTF{margin-top:4px;font-weight:500}.ticket-router_placeholderText__5jF4l{color:var(--text-secondary);font-size:var(--text-xs);line-height:18px}.ticket-router_connector__LlpW8{--col:calc((100% - (var(--n) - 1) * var(--tr-gap)) / var(--n));position:relative;height:16px}.ticket-router_pulseRail__47rvk,.ticket-router_pulseStub__FCnsC,.ticket-router_pulseTop__I_raN,.ticket-router_rail__cK1kd,.ticket-router_stubTop__WzKZZ,.ticket-router_stub___Kppu{position:absolute;display:block;background:var(--border)}.ticket-router_stubTop__WzKZZ{top:0;left:50%;width:1px;height:8px;margin-left:-.5px}.ticket-router_rail__cK1kd{top:8px;left:calc(var(--col) / 2);right:calc(var(--col) / 2);height:1px}.ticket-router_stub___Kppu{top:8px;left:var(--x);width:1px;height:8px;margin-left:-.5px}.ticket-router_pulse__M0DZP,.ticket-router_stub___Kppu{--x:calc(var(--i) * (var(--col) + var(--tr-gap)) + var(--col) / 2)}.ticket-router_pulse__M0DZP{position:absolute;inset:0}.ticket-router_pulseRail__47rvk,.ticket-router_pulseStub__FCnsC,.ticket-router_pulseTop__I_raN{background:var(--accent)}.ticket-router_pulse__M0DZP[data-review] .ticket-router_pulseRail__47rvk,.ticket-router_pulse__M0DZP[data-review] .ticket-router_pulseStub__FCnsC,.ticket-router_pulse__M0DZP[data-review] .ticket-router_pulseTop__I_raN{background:var(--warning)}.ticket-router_pulseTop__I_raN{top:0;left:50%;width:1px;height:9px;margin-left:-.5px;transform-origin:top center}.ticket-router_pulseRail__47rvk{top:8px;height:1px}.ticket-router_pulseRail__47rvk[data-side=left]{left:var(--x);right:50%;transform-origin:right center}.ticket-router_pulseRail__47rvk[data-side=right]{left:50%;right:calc(100% - var(--x));transform-origin:left center}.ticket-router_pulseStub__FCnsC{top:8px;left:var(--x);width:1px;height:8px;margin-left:-.5px;transform-origin:top center}.ticket-router_lanes__7Waw0{display:grid;grid-template-columns:repeat(var(--n),minmax(0,1fr));gap:var(--tr-gap)}.ticket-router_lane__gRdn_{min-width:0;padding:3px;border:1px solid transparent;border-radius:18px;background:var(--tr-lane-bg);transition:border-color var(--duration-fast,.16s) var(--ease-standard,ease-out),background-color var(--duration-fast,.16s) var(--ease-standard,ease-out)}.ticket-router_lane__gRdn_[data-target]{border-color:color-mix(in oklab,var(--accent) 50%,transparent);background:color-mix(in oklab,var(--accent) 5%,var(--tr-lane-bg))}.ticket-router_lane__gRdn_[data-target][data-review]{border-color:color-mix(in oklab,var(--warning) 55%,transparent);background:color-mix(in oklab,var(--warning) 5%,var(--tr-lane-bg))}.ticket-router_laneHead__qS0hZ{display:flex;height:32px;align-items:center;justify-content:space-between;gap:8px;padding:0 8px}.ticket-router_laneName__d2MIA{min-width:0;overflow:hidden;font-weight:500;text-overflow:ellipsis;white-space:nowrap}.ticket-router_laneCount__uWV49{flex:none;color:var(--text-secondary);font-size:var(--text-xs)}.ticket-router_laneBody__0jBsg{position:relative;height:calc(var(--rows) * var(--tr-row));margin:0;padding:0;overflow:hidden;list-style:none}.ticket-router_rowItem__q6aYO{overflow:hidden}.ticket-router_laneEmpty__Pi6FU{display:flex;height:var(--tr-row);align-items:center;padding:0 8px;color:var(--text-muted);font-size:var(--text-xs)}.ticket-router_row__MyvB_{--focus-outline-offset:-2px;display:grid;width:100%;height:var(--tr-row);grid-template-columns:16px minmax(0,1fr) auto;grid-template-rows:20px 18px;align-content:center;align-items:center;column-gap:8px;row-gap:2px;margin:0;padding:0 8px;border:0;border-radius:14px;background:transparent;color:inherit;font:inherit;letter-spacing:inherit;text-align:left}.ticket-router_row__MyvB_>.ticket-router_mark__3upzW{justify-self:center}.ticket-router_rowSubject__hzxHq{grid-column:2/4;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ticket-router_rowWho__xilIe{display:grid;width:16px;height:16px;place-items:center}.ticket-router_rowMeta__O9fL_{min-width:0;overflow:hidden;color:var(--text-secondary);font-size:var(--text-xs);line-height:18px;text-overflow:ellipsis;white-space:nowrap}.ticket-router_rowMetaStrong__LIjHl{color:var(--foreground)}.ticket-router_rowPct__2lHvN{display:grid;justify-items:end;color:var(--text-muted);font-size:var(--text-xs);font-variant-numeric:tabular-nums;line-height:18px}.ticket-router_rowPct__2lHvN>*{grid-area:1/1}.ticket-router_rowGo__6xyuB{opacity:0;color:var(--accent);transition:opacity var(--duration-fast,.16s) var(--ease-standard,ease-out)}.ticket-router_row__MyvB_[data-fresh]{animation:ticket-router_tr-land__bFSuH .9s var(--ease-standard,ease-out) both}button.ticket-router_row__MyvB_{cursor:pointer;-webkit-tap-highlight-color:transparent;transition:background-color var(--duration-fast,.16s) var(--ease-standard,ease-out)}button.ticket-router_row__MyvB_:active{background:color-mix(in oklab,var(--foreground) 8%,transparent)}button.ticket-router_row__MyvB_:focus-visible .ticket-router_rowGo__6xyuB{opacity:1}button.ticket-router_row__MyvB_:focus-visible .ticket-router_rowPct__2lHvN{color:transparent}@media (hover:hover) and (pointer:fine){button.ticket-router_row__MyvB_:hover{background:color-mix(in oklab,var(--foreground) 5%,transparent)}}@media (hover:hover) and (pointer:fine){button.ticket-router_row__MyvB_:hover .ticket-router_rowGo__6xyuB{opacity:1}}@media (hover:hover) and (pointer:fine){button.ticket-router_row__MyvB_:hover .ticket-router_rowPct__2lHvN{color:transparent}}.ticket-router_rowPct__2lHvN{transition:color var(--duration-fast,.16s) var(--ease-standard,ease-out)}.ticket-router_root__s5E84 .ticket-router_avatar16__E7akN{width:16px;height:16px;font-size:8px}.ticket-router_root__s5E84 .ticket-router_avatar20__X82tJ{width:20px;height:20px;font-size:9px}@keyframes ticket-router_tr-land__bFSuH{0%{background-color:color-mix(in oklab,var(--accent) 14%,transparent)}to{background-color:transparent}}@media (prefers-reduced-motion:reduce){.ticket-router_row__MyvB_[data-fresh]{animation-duration:.01s}}@media (prefers-reduced-motion:reduce){.ticket-router_lane__gRdn_,.ticket-router_rowGo__6xyuB,.ticket-router_rowPct__2lHvN,button.ticket-router_row__MyvB_{transition:none}}", {"root":"ticket-router_root__s5E84","srOnly":"ticket-router_srOnly__2X1_O","truncate":"ticket-router_truncate__QGDGa","mutedIcon":"ticket-router_mutedIcon__xEJvz","reviewIcon":"ticket-router_reviewIcon__Lb4M2","doneIcon":"ticket-router_doneIcon__MoZeb","mark":"ticket-router_mark__3upzW","header":"ticket-router_header__wXieB","modelMark":"ticket-router_modelMark__tS_yv","heading":"ticket-router_heading__B2PfZ","title":"ticket-router_title__YeNNf","model":"ticket-router_model__MiNlg","total":"ticket-router_total__QZ7Mn","roll":"ticket-router_roll__JDoIf","pause":"ticket-router_pause__AYEAA","rollValue":"ticket-router_rollValue__6Y6z7","swap":"ticket-router_swap__A2ZD_","incoming":"ticket-router_incoming__nVIzG","stage":"ticket-router_stage__OYe8x","ticket":"ticket-router_ticket__fbsuk","from":"ticket-router_from__yvtnA","fromText":"ticket-router_fromText__IBq5k","customer":"ticket-router_customer___GeKt","company":"ticket-router_company__Q3i1Y","time":"ticket-router_time__Pf0YV","subject":"ticket-router_subject__CYrn4","preview":"ticket-router_preview__Lrm0H","classifyRow":"ticket-router_classifyRow__5HBaa","rowInner":"ticket-router_rowInner__dK0sF","classifying":"ticket-router_classifying__jBWtx","chips":"ticket-router_chips__3tY4c","chipSlot":"ticket-router_chipSlot__ZAoYT","chip":"ticket-router_chip__9z4tR","meter":"ticket-router_meter__0HK5r","meterFill":"ticket-router_meterFill__yM_i1","chipNum":"ticket-router_chipNum__ekgci","routeSlot":"ticket-router_routeSlot__IOSQg","route":"ticket-router_route__6sDyZ","routeLane":"ticket-router_routeLane__Ec9Sn","routeWho":"ticket-router_routeWho__txYet","errorText":"ticket-router_errorText__zSfNJ","rowActions":"ticket-router_rowActions__h90wR","placeholder":"ticket-router_placeholder__D4qRu","placeholderTitle":"ticket-router_placeholderTitle__5lYTF","placeholderText":"ticket-router_placeholderText__5jF4l","connector":"ticket-router_connector__LlpW8","stubTop":"ticket-router_stubTop__WzKZZ","rail":"ticket-router_rail__cK1kd","stub":"ticket-router_stub___Kppu","pulseTop":"ticket-router_pulseTop__I_raN","pulseRail":"ticket-router_pulseRail__47rvk","pulseStub":"ticket-router_pulseStub__FCnsC","pulse":"ticket-router_pulse__M0DZP","lanes":"ticket-router_lanes__7Waw0","lane":"ticket-router_lane__gRdn_","laneHead":"ticket-router_laneHead__qS0hZ","laneName":"ticket-router_laneName__d2MIA","laneCount":"ticket-router_laneCount__uWV49","laneBody":"ticket-router_laneBody__0jBsg","rowItem":"ticket-router_rowItem__q6aYO","laneEmpty":"ticket-router_laneEmpty__Pi6FU","row":"ticket-router_row__MyvB_","rowSubject":"ticket-router_rowSubject__hzxHq","rowWho":"ticket-router_rowWho__xilIe","rowMeta":"ticket-router_rowMeta__O9fL_","rowMetaStrong":"ticket-router_rowMetaStrong__LIjHl","rowPct":"ticket-router_rowPct__2lHvN","rowGo":"ticket-router_rowGo__6xyuB","tr-land":"ticket-router_tr-land__bFSuH","avatar16":"ticket-router_avatar16__E7akN","avatar20":"ticket-router_avatar20__X82tJ"});
A.regCss(36994, ".demo{display:flex;justify-content:center;width:100%}", {"demo":"demo"});
A.reg(50084, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => l });
  var r = a(51811);
  let n = {
    name: "face-slightly-frowning",
    size: 24,
    node: [
      ["path", { d: "M15 10V9", key: "4dkmfx" }],
      ["path", { d: "M9 10V9", key: "1lazqi" }],
      ["path", { d: "M9 16a5 5 0 016 0", key: "34mdxb" }],
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
    ],
    aliases: ["frown"]
  };
  n.node;
  let l = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(61665, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => n });
  var s = t(51811);
  let i = {
    name: "inbox",
    size: 24,
    node: [
      [
        "polyline",
        { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }
      ],
      [
        "path",
        {
          d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
          key: "oot6mr"
        }
      ]
    ]
  };
  i.node;
  let n = (0, s.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(68319, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => l });
  var r = a(51811);
  let n = {
    name: "bug",
    size: 24,
    node: [
      ["path", { d: "M12 20v-9", key: "1qisl0" }],
      [
        "path",
        {
          d: "M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",
          key: "uouzyp"
        }
      ],
      ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
      ["path", { d: "M21 21a4 4 0 0 0-3.81-4", key: "1b0z45" }],
      ["path", { d: "M21 5a4 4 0 0 1-3.55 3.97", key: "5cxbf6" }],
      ["path", { d: "M22 13h-4", key: "1jl80f" }],
      ["path", { d: "M3 21a4 4 0 0 1 3.81-4", key: "1fjd4g" }],
      ["path", { d: "M3 5a4 4 0 0 0 3.55 3.97", key: "1d7oge" }],
      ["path", { d: "M6 13H2", key: "82j7cp" }],
      ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
      ["path", { d: "M9 7.13V6a3 3 0 1 1 6 0v1.13", key: "1vgav8" }]
    ]
  };
  n.node;
  let l = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(71019, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.d(t, { A: () => i });
  var r = n(51811);
  let a = {
    name: "credit-card",
    size: 24,
    node: [
      [
        "rect",
        { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }
      ],
      ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
      ["path", { d: "M6 14h2", key: "mk7k0u" }]
    ]
  };
  a.node;
  let i = (0, r.A)(a);
}

__m(__module,__exports,__require);
});
A.reg(74024, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  a.d(t, { A: () => l });
  var r = a(51811);
  let n = {
    name: "face-neutral",
    size: 24,
    node: [
      ["path", { d: "M15 10V9", key: "4dkmfx" }],
      ["path", { d: "M8 16h8", key: "10ke2u" }],
      ["path", { d: "M9 10V9", key: "1lazqi" }],
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
    ],
    aliases: ["meh"]
  };
  n.node;
  let l = (0, r.A)(n);
}

__m(__module,__exports,__require);
});
A.reg(95097, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.d(a, { A: () => n });
  var s = t(51811);
  let i = {
    name: "receipt",
    size: 24,
    node: [
      ["path", { d: "M12 17V7", key: "pyj7ub" }],
      [
        "path",
        { d: "M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8", key: "1elt7d" }
      ],
      [
        "path",
        {
          d: "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",
          key: "ycz6yz"
        }
      ]
    ]
  };
  i.node;
  let n = (0, s.A)(i);
}

__m(__module,__exports,__require);
});
A.reg(96915, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  r.d(t, { A: () => i });
  var n = r(51811);
  let a = {
    name: "face-slightly-smiling",
    size: 24,
    node: [
      ["path", { d: "M15 10V9", key: "4dkmfx" }],
      ["path", { d: "M16.472 15a6 6 0 01-8.943 0", key: "7qomzy" }],
      ["path", { d: "M9 10V9", key: "1lazqi" }],
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
    ],
    aliases: ["smile"]
  };
  a.node;
  let i = (0, n.A)(a);
}

__m(__module,__exports,__require);
});
A.cssFor("ticket-router", [24241,36994]);
A.item("ticket-router", {entry:19734, export:"TicketRouterDemo", kind:"component", tier:"pro", unresolved:[]});
})();