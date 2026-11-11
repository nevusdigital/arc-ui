function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { EvalSuite: () => e_, default: () => eb });
  var s = a(95155), r = a(12115), n = a(18310), i = a(80642), l = a(25354), o = a(35484), d = a(90467), u = a(64577), c = a(12363), h = a(7770), p = a(51288), m = a(52898);
  let f = "pass", g = "fail", v = "error", _ = {
    Refunds: [
      ["Refund for a damaged blender", f, f],
      ["Refund after partial shipment", f, g],
      ["Refund outside the 30 day window", g, g],
      ["Duplicate charge on one order", f, f],
      ["Refund to an expired card", f, g],
      ["Gift card purchase refund", f, f],
      ["Refund for a late delivery", f, f],
      ["Return label never arrived", f, f],
      ["Refund for an opened item", f, f],
      ["Store credit instead of a refund", f, f],
      ["Refund status after 10 days", f, f],
      ["Cancel and refund a preorder", f, f],
      ["Refund for a missing accessory", f, f],
      ["Partial refund on a bundle", f, g],
      ["Refund in a different currency", f, f],
      ["Refund after a price drop", f, f],
      ["Subscription refund mid cycle", f, g],
      ["Refund for the wrong size", f, f],
      ["Chargeback already filed", g, g],
      ["Refund for a final sale item", f, f],
      ["Refund to a closed account", f, f],
      ["Shipping fee refund", f, f],
      ["Refund for a recalled kettle", f, f],
      ["Refund split across two cards", f, f]
    ],
    Shipping: [
      ["Delivered but not received", f, f],
      ["Change address after dispatch", f, f],
      ["Express upgrade on an open order", f, f],
      ["Customs fees on an EU order", g, f],
      ["Tracking stuck for 6 days", f, f],
      ["Ship to a parcel locker", f, f],
      ["Split shipment arriving apart", f, f],
      ["Delivery window for Zurich", f, f],
      ["Lost package claim", g, f],
      ["Wrong item in the box", f, f],
      ["Shipping to a PO box", f, f],
      ["Holiday cutoff dates", f, f],
      ["Left with a neighbor", f, f],
      ["Damaged outer box", f, f],
      ["International shipping rates", f, f],
      ["Reschedule a delivery", f, f],
      ["Signature required delivery", f, f],
      ["Not shipped after 5 days", f, f],
      ["Combine two orders", f, f],
      ["Oversized item freight", g, g],
      ["Return pickup scheduling", f, f],
      ["Pickup point opening hours", f, f],
      ["Shipping to a hotel", f, f],
      ["Backordered item date", f, f]
    ],
    Tone: [
      ["Angry customer, third contact", f, f],
      ["Customer writes in German", g, f],
      ["Sarcastic complaint about delays", f, f],
      ["Thank you message only", f, f],
      ["Customer mentions a bereavement", g, f],
      ["Message written in capitals", f, f],
      ["Threat of a bad review", f, f],
      ["Unclear request from an older customer", f, f],
      ["Customer uses profanity", f, f],
      ["One word replies", f, f],
      ["Customer asks for a human", g, g],
      ["Apology for a repeated mistake", f, f],
      ["Comparison to a competitor", f, f],
      ["Very long, rambling message", f, f],
      ["Customer in a hurry", f, f],
      ["Polite follow-up after silence", f, f],
      ["Customer shares a medical need", f, f],
      ["Joke in the opening line", f, f],
      ["Frustrated by bots", f, f],
      ["Formal business inquiry", f, f],
      ["Parent asks about a teen's order", f, f],
      ["Customer corrects the agent", f, f],
      ["Mixed English and Spanish", g, f],
      ["Praise with a small complaint", f, f]
    ],
    Escalation: [
      ["Legal threat over a refund", f, g],
      ["Suspected account takeover", g, f],
      ["Injury from a product", f, f],
      ["Press inquiry", f, f],
      ["Repeated failed deliveries", f, f],
      ["Request for a manager", f, f],
      ["Data deletion request", g, f],
      ["Fraudulent order report", f, f],
      ["Bulk order over 50 units", f, f],
      ["Safety recall question", f, f],
      ["Payment dispute", f, f],
      ["Complaint from a key account", f, f],
      ["Accessibility complaint", f, f],
      ["Courier harassment report", f, f],
      ["Order over $5,000", f, f],
      ["Agent loop, fourth attempt", v, g],
      ["Warranty claim denied twice", f, f],
      ["Duplicate account merge", f, f],
      ["Chargeback threat", f, f],
      ["Reseller partner issue", f, f],
      ["Staff conduct report", f, f],
      ["Allergic reaction report", f, f],
      ["Subpoena for order records", g, g],
      ["Complaint to a regulator", g, g]
    ],
    "Tool use": [
      ["Look up an order by email", f, f],
      ["Issue a refund with the payments tool", f, f],
      ["Create a return label", f, f],
      ["Check stock in two warehouses", f, f],
      ["Update a shipping address", f, f],
      ["Apply a discount code", f, f],
      ["Cancel a subscription", f, f],
      ["Fetch tracking events", f, f],
      ["Search the help center", f, f],
      ["Merge duplicate tickets", f, f],
      ["Verify identity before changes", f, f],
      ["Retry after a tool timeout", g, f],
      ["Handle an empty search result", f, f],
      ["Chain a lookup and a refund", f, f],
      ["Tool returns malformed JSON", v, f],
      ["Skip tools for a simple question", f, f],
      ["Pass the right order id", f, f],
      ["Paginate order history", g, f],
      ["Confirm before a destructive call", f, g],
      ["Parallel lookups for two orders", g, v],
      ["Read a PDF invoice", f, f],
      ["Rate limited payments API", v, v],
      ["Choose between two tools", g, f],
      ["Summarize tool output", f, f]
    ]
  }, x = {
    Refunds: "refunds",
    Shipping: "shipping",
    Tone: "tone",
    Escalation: "escalation",
    "Tool use": "tools"
  }, b = (e2, t2) => `${x[e2] ?? e2.toLowerCase()}-${String(t2 + 1).padStart(2, "0")}`, y = ["Correctness", "Policy", "Tone", "Completeness"], j = {
    "refunds-02": {
      input: "Only 2 of my 3 items arrived (order #48213). The candle set is still missing. Can I get my money back for that part?",
      expected: "Refund only the missing candle set ($34.00), not the whole order, and give the 5 to 7 business day timeline.",
      baselineOutput: "I'm sorry the candle set hasn't arrived. I've refunded $34.00 for it to your original payment method, and you'll see it within 5 to 7 business days. The other two items are yours to keep.",
      output: "I'm sorry the candle set hasn't arrived. I've refunded $112.50 for order #48213 to your original payment method, and you'll see it within 5 to 7 business days.",
      baselineScores: [5, 5, 4, 5],
      scores: [1, 1, 4, 3],
      rationale: "v12 refunds the full order total ($112.50) when only the candle set ($34.00) was missing. The refund policy covers undelivered items only. Tone is unchanged. Three other refund cases show the same full refund pattern."
    },
    "refunds-05": {
      input: "You refunded my order but the card I used expired last month. Where does the money go?",
      expected: "Explain that the bank routes the refund to the account behind the expired card, and offer store credit if it does not arrive. Never ask for card details.",
      baselineOutput: "Good question. Refunds to an expired card are still routed by your bank to the same account. If it hasn't appeared after 10 business days, I can send it as store credit instead.",
      output: "No problem. Reply with your new card number and expiry date and I'll move the refund over to it.",
      baselineScores: [4, 5, 4, 4],
      scores: [2, 1, 4, 2],
      rationale: "v12 asks the customer to send a full card number in chat, which breaks the payment data policy. v11 explained the bank reroute and offered store credit."
    },
    "refunds-14": {
      input: "I returned just the mouse from the desk bundle. How much will I get back?",
      expected: "Refund the mouse at its share of the bundle price ($18.40), not its standalone price.",
      baselineOutput: "Since the mouse was part of the desk bundle, your refund is its share of the bundle price: $18.40. It will reach your card within 5 to 7 business days.",
      output: "You'll get $29.00 back for the mouse, its regular price. It will reach your card within 5 to 7 business days.",
      baselineScores: [5, 5, 4, 5],
      scores: [2, 2, 4, 4],
      rationale: "v12 refunds the standalone price instead of the mouse's share of the bundle, $10.60 too much. The timeline is correct."
    },
    "refunds-17": {
      input: "I cancelled my coffee subscription halfway through the month. Do I get anything back?",
      expected: "Refund the unused half of the month ($12.00) and confirm the cancellation date.",
      baselineOutput: "Your subscription was cancelled on October 14, halfway through the cycle, so I've refunded the unused part: $12.00.",
      output: "Your subscription was cancelled on October 14. I've refunded your full monthly charge of $24.00.",
      baselineScores: [5, 5, 4, 5],
      scores: [2, 1, 4, 4],
      rationale: "v12 refunds the whole month instead of the unused half. It is the same full refund pattern as the partial shipment case."
    },
    "escalation-01": {
      input: "This is the third time I'm asking. If the refund isn't processed today my lawyer will be in touch.",
      expected: "Acknowledge, make no promises about the outcome, and hand off to the escalations team with a summary of the ticket.",
      baselineOutput: "I understand, and I'm sorry this has taken three contacts. I'm passing your case to our escalations team now with the full history, and they will reply today.",
      output: "I understand your frustration. Your refund of $64.00 has been processed and should arrive in 5 to 7 business days, so there's no need to involve a lawyer.",
      baselineScores: [5, 5, 5, 4],
      scores: [2, 1, 3, 3],
      rationale: "A legal threat must go to the escalations team. v12 handles it alone, promises a refund it has not verified and comments on the lawyer, which the policy rules out."
    },
    "tools-19": {
      input: "Cancel my subscription, I guess. Or maybe pause it? Not sure.",
      expected: "Ask whether to pause or cancel before calling cancel_subscription.",
      baselineOutput: "Happy to help. Would you like to pause it for up to 3 months, or cancel it completely? Pausing keeps your current price.",
      output: "Done. I've cancelled your subscription, and you won't be charged again.",
      baselineScores: [4, 5, 4, 4],
      scores: [1, 1, 4, 2],
      rationale: "The customer was unsure, yet v12 called cancel_subscription without asking. The policy requires a confirmation before any irreversible tool call."
    },
    "tone-02": {
      input: "Hallo, meine Bestellung ist noch nicht angekommen. K\xF6nnen Sie bitte nachsehen?",
      expected: "Reply in German with the order status and the delivery date.",
      baselineOutput: "Hi! Your order #51022 shipped on October 15 and should arrive on October 21.",
      output: "Hallo! Ihre Bestellung #51022 wurde am 15. Oktober versandt und sollte am 21. Oktober ankommen.",
      baselineScores: [4, 3, 2, 4],
      scores: [5, 5, 5, 5],
      rationale: "v12 answers in the customer's language, as the tone guide asks. v11 had the right facts but replied in English."
    },
    "tools-12": {
      input: "Where is order #49870? It said out for delivery this morning.",
      expected: "Retry the order lookup once after a timeout, then give the status.",
      baselineOutput: "Sorry, I couldn't look up your order right now. Please try again later.",
      output: "The first lookup timed out, so I tried again. Order #49870 is out for delivery and should arrive by 6 pm today.",
      baselineScores: [2, 4, 4, 2],
      scores: [5, 5, 4, 5],
      rationale: "v12 retries the timed out lookup once and answers. v11 gave up after the first timeout."
    },
    "tools-20": {
      input: "Can you check orders #50112 and #50177? Both were meant to come this week.",
      expected: "Look up both orders, in parallel if possible, and give the status of each.",
      baselineOutput: "Order #50112 arrives tomorrow. I couldn't find order #50177; could you check the number?",
      baselineScores: [3, 5, 4, 2],
      error: "orders.lookup timed out after 30 s on the second call, so the judge had no reply to score."
    }
  }, N = (e2) => 0.0212 + 37 * e2 % 11 * 8e-4, w = (function() {
    let e2 = [], t2 = {}, a2 = 0;
    for (let [s2, r2] of Object.entries(_))
      r2.forEach(([r3, n2, i2], l2) => {
        let o2 = b(s2, l2), d2 = j[o2];
        e2.push({
          id: o2,
          category: s2,
          title: r3,
          baseline: n2,
          ...d2 ? {
            input: d2.input,
            expected: d2.expected,
            baselineOutput: d2.baselineOutput,
            baselineScores: d2.baselineScores
          } : {}
        }), t2[o2] = {
          caseId: o2,
          outcome: i2,
          costUsd: N(a2++),
          ...d2 ? {
            output: d2.output,
            scores: d2.scores,
            rationale: d2.rationale,
            error: d2.error
          } : {}
        };
      });
    return { cases: e2, results: t2 };
  })(), k = {
    name: "Support agent",
    candidate: {
      version: "v12",
      model: { name: "Claude Sonnet 5.5", brand: "claude" }
    },
    baseline: {
      version: "v11",
      model: { name: "GPT-6 Luna", brand: "openai" }
    },
    judge: { name: "Claude Opus 5.5", brand: "claude" },
    categories: Object.keys(_),
    rubric: y,
    cases: w.cases,
    estimate: { costUsd: 2.9, seconds: 190 }
  }, $ = w.results, S = [
    { id: "run-v5", label: "v5", score: 76.7, date: "Sep 8" },
    { id: "run-v6", label: "v6", score: 79.2, date: "Sep 15" },
    { id: "run-v7", label: "v7", score: 78.3, date: "Sep 22" },
    { id: "run-v8", label: "v8", score: 81.7, date: "Sep 29" },
    { id: "run-v9", label: "v9", score: 80.8, date: "Oct 6" },
    { id: "run-v10", label: "v10", score: 82.5, date: "Oct 13" },
    { id: "run-v11", label: "v11", score: 83.3, date: "Oct 17" }
  ], T = (e2, t2) => t2 ? e2 / t2 * 100 : 0;
  function M(e2) {
    let t2 = Math.round(10 * e2) / 10;
    return 0 === t2 ? "0.0" : `${t2 > 0 ? "+" : "\u2212"}${Math.abs(t2).toFixed(1)}`;
  }
  let I = { pass: "Pass", fail: "Fail", error: "Error" };
  var C = a(92298);
  function A({ title: e2 = "Claude", ...t2 }) {
    return (0, s.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, s.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  function R({ title: e2 = "OpenAI", ...t2 }) {
    return (0, s.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, s.jsx)("path", {
        d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
      })
    });
  }
  function L({ title: e2 = "Linear", ...t2 }) {
    return (0, s.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, s.jsx)("path", {
        d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
      })
    });
  }
  var O = a(28245), E = a(55809), P = a(92171), D = a(57700), B = a(36619), F = a(40852), z = a(38158), K = a(19805), Y = a(36565), H = a(59564), q = a.n(H);
  let W = { type: "spring", visualDuration: 0.22, bounce: 0 }, U = { duration: 0 }, V = (...e2) => e2.filter(Boolean).join(" "), Z = {
    pass: "M3.4 6.3 5.2 8.1 8.7 4.2",
    fail: "M4 4l4 4M8 4 4 8",
    error: "M6 3.4v3.1M6 8.55v.05"
  };
  function G({ outcome: e2, className: t2 }) {
    return (0, s.jsx)("svg", {
      className: V(q().glyph, t2),
      viewBox: "0 0 12 12",
      "aria-hidden": "true",
      focusable: "false",
      children: (0, s.jsx)("path", { d: Z[e2] })
    });
  }
  function J({ outcome: e2, strong: t2 }) {
    return (0, s.jsx)("span", {
      className: q().mini,
      "data-outcome": e2,
      "data-strong": t2 || void 0,
      "aria-hidden": "true",
      children: e2 && (0, s.jsx)(G, { outcome: e2 })
    });
  }
  let Q = (e2) => `${e2.toFixed(1)}`, X = (e2) => `${Math.round(e2)}%`, ee = (e2) => `$${e2.toFixed(2)}`;
  function et({ value: e2, format: t2, className: a2 }) {
    let i2 = (0, n.I)(), o2 = (0, O.d)(e2), d2 = (0, E.G)(o2, t2);
    return (0, r.useEffect)(() => {
      if (i2 || 0 === e2) return void o2.jump(e2);
      let t3 = (0, P.i)(o2, e2, {
        type: "spring",
        visualDuration: 0.45,
        bounce: 0
      });
      return () => t3.stop();
    }, [e2, i2, o2]), (0, s.jsxs)("span", {
      className: V(q().count, a2),
      children: [
        (0, s.jsx)("span", { className: q().srOnly, children: t2(e2) }),
        (0, s.jsx)(l.PY1.span, { "aria-hidden": "true", children: d2 })
      ]
    });
  }
  function ea({ children: e2, armKey: t2, className: a2 }) {
    let i2 = (0, n.I)(), o2 = (0, r.useRef)(null), [d2, u2] = (0, r.useState)("auto"), [c2, p2] = (0, r.useState)(t2), [m2, f2] = (0, r.useState)(false);
    return t2 !== c2 && (p2(t2), f2(true)), (0, r.useLayoutEffect)(() => {
      let e3 = o2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && u2(Math.ceil(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight));
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, r.useEffect)(() => {
      if (!m2) return;
      let e3 = window.setTimeout(() => f2(false), 600);
      return () => window.clearTimeout(e3);
    }, [m2, c2]), (0, s.jsx)(l.PY1.div, {
      className: V(q().autoHeight, a2),
      initial: false,
      animate: { height: d2 },
      transition: m2 && !i2 ? h.T.spring.smooth : U,
      children: (0, s.jsx)("div", { ref: o2, children: e2 })
    });
  }
  function es({ options: e2, value: t2, onChange: a2, label: i2, controls: o2 }) {
    let d2 = (0, n.I)(), u2 = (0, r.useRef)([]), c2 = Math.max(
      0,
      e2.findIndex((e3) => e3.value === t2)
    );
    function h2(t3) {
      a2(e2[t3].value);
      let s2 = u2.current[t3];
      s2?.focus({ preventScroll: true }), s2?.scrollIntoView({
        block: "nearest",
        inline: "nearest",
        behavior: d2 ? "auto" : "smooth"
      });
    }
    function p2(t3) {
      let a3 = e2.length - 1, s2 = "ArrowRight" === t3.key || "ArrowDown" === t3.key ? c2 === a3 ? 0 : c2 + 1 : "ArrowLeft" === t3.key || "ArrowUp" === t3.key ? 0 === c2 ? a3 : c2 - 1 : "Home" === t3.key ? 0 : "End" === t3.key ? a3 : -1;
      s2 < 0 || (t3.preventDefault(), h2(s2));
    }
    return (0, s.jsx)(D.o, {
      id: i2,
      children: (0, s.jsx)("div", {
        className: q().seg,
        role: "radiogroup",
        "aria-label": i2,
        "aria-controls": o2,
        children: e2.map((e3, t3) => {
          let a3 = t3 === c2;
          return (0, s.jsxs)(
            "button",
            {
              ref: (e4) => {
                u2.current[t3] = e4;
              },
              type: "button",
              className: q().segOption,
              role: "radio",
              "aria-checked": a3,
              tabIndex: a3 ? 0 : -1,
              "data-on": a3 || void 0,
              onClick: () => h2(t3),
              onKeyDown: p2,
              children: [
                a3 && (0, s.jsx)(l.PY1.span, {
                  layoutId: "filter-highlight",
                  className: q().segHighlight,
                  style: { borderRadius: 999 },
                  transition: d2 ? U : W,
                  "aria-hidden": "true"
                }),
                (0, s.jsxs)("span", {
                  className: q().segLabel,
                  children: [
                    e3.label,
                    void 0 !== e3.count && (0, s.jsx)("span", {
                      className: q().segCount,
                      children: e3.count
                    })
                  ]
                })
              ]
            },
            e3.value
          );
        })
      })
    });
  }
  let er = [
    ["run", "Run"],
    ["stop", "Stop"],
    ["again", "Run again"]
  ];
  function en({ which: e2, onClick: t2, label: a2 }) {
    let i2 = (0, n.I)(), o2 = (0, r.useRef)({}), [d2, u2] = (0, r.useState)({}), [c2, h2] = (0, r.useState)(e2), [p2, m2] = (0, r.useState)(false);
    e2 !== c2 && (h2(e2), m2(true)), (0, r.useLayoutEffect)(() => {
      if ("u" < typeof ResizeObserver) return;
      let e3 = new ResizeObserver(
        () => u2(
          Object.fromEntries(
            er.map(([e4]) => [e4, o2.current[e4]?.offsetWidth ?? 0])
          )
        )
      );
      return er.forEach(([t3]) => {
        let a3 = o2.current[t3];
        a3 && e3.observe(a3);
      }), () => e3.disconnect();
    }, []);
    let f2 = d2[e2];
    return (0, s.jsxs)("button", {
      type: "button",
      className: q().run,
      "data-running": "stop" === e2 || void 0,
      onClick: t2,
      "aria-label": a2,
      children: [
        (0, s.jsxs)("span", {
          className: q().runIcon,
          "aria-hidden": "true",
          children: [
            (0, s.jsx)(B.A, { "data-on": "run" === e2 || void 0 }),
            (0, s.jsx)(F.A, { "data-on": "stop" === e2 || void 0 }),
            (0, s.jsx)(C.A, { "data-on": "again" === e2 || void 0 })
          ]
        }),
        (0, s.jsx)(l.PY1.span, {
          className: q().runLabel,
          "aria-hidden": "true",
          initial: false,
          animate: { width: f2 || "auto" },
          transition: p2 && !i2 ? W : U,
          children: er.map(
            ([t3, a3]) => (0, s.jsx)(
              "span",
              {
                ref: (e3) => {
                  o2.current[t3] = e3;
                },
                "data-on": t3 === e2 || void 0,
                children: a3
              },
              t3
            )
          )
        })
      ]
    });
  }
  function ei({ model: e2 }) {
    return e2.mark ? (0, s.jsx)("span", {
      className: q().mark,
      "aria-hidden": "true",
      children: e2.mark
    }) : "claude" === e2.brand ? (0, s.jsx)(A, {
      className: q().mark,
      "data-brand": "claude",
      "aria-hidden": "true",
      title: ""
    }) : "openai" === e2.brand ? (0, s.jsx)(R, {
      className: q().mark,
      "aria-hidden": "true",
      title: ""
    }) : null;
  }
  function el({ model: e2, version: t2 }) {
    return (0, s.jsxs)("span", {
      className: q().chip,
      children: [
        (0, s.jsx)(ei, { model: e2 }),
        (0, s.jsx)("span", { className: q().chipName, children: e2.name }),
        t2 && (0, s.jsx)("span", { className: q().chipVersion, children: t2 })
      ]
    });
  }
  let eo = (e2) => 0.05 > Math.abs(e2) ? "flat" : e2 > 0 ? "up" : "down";
  function ed({ value: e2, baseline: t2, tone: a2, className: r2 }) {
    return (0, s.jsxs)("span", {
      className: V(q().bar, r2),
      "data-tone": a2,
      "aria-hidden": "true",
      children: [
        (0, s.jsx)("span", {
          className: q().barFill,
          style: { "--p": Math.max(0, Math.min(1, e2)) }
        }),
        void 0 !== t2 && (0, s.jsx)("span", {
          className: q().ghost,
          style: { "--b": Math.max(0, Math.min(1, t2)) }
        })
      ]
    });
  }
  function eu({ value: e2, unit: t2, className: a2 }) {
    let r2 = eo(e2), n2 = "up" === r2 ? z.A : "down" === r2 ? K.A : Y.A, i2 = M(e2).replace(/^[+−]/, "");
    return (0, s.jsxs)("span", {
      className: V(q().delta, a2),
      "data-dir": r2,
      children: [
        (0, s.jsx)(n2, { className: q().deltaIcon, "aria-hidden": "true" }),
        (0, s.jsxs)("span", { children: [i2, t2 ? " pts" : ""] })
      ]
    });
  }
  let ec = (e2) => {
    let t2 = eo(e2), a2 = M(e2).replace(/^[+−]/, "");
    return "flat" === t2 ? "no change" : `${t2} ${a2} points`;
  };
  function eh({ runs: e2, current: t2, currentLabel: a2, tone: i2 }) {
    let o2 = (0, n.I)(), d2 = e2.slice(-7), u2 = [
      ...d2.map((e3) => ({ label: e3.label, score: e3.score, date: e3.date })),
      { label: a2, score: t2, date: void 0 }
    ], c2 = u2.map((e3) => e3.score).filter((e3) => null !== e3), p2 = Math.min(...c2), m2 = Math.max(...c2), f2 = Math.max(2, (m2 - p2) * 0.18), g2 = p2 - f2, v2 = m2 + f2;
    if (v2 - g2 < 8) {
      let e3 = (v2 + g2) / 2;
      g2 = e3 - 4, v2 = e3 + 4;
    }
    let _2 = u2.length, x2 = (e3) => _2 > 1 ? e3 / (_2 - 1) * 100 : 50, b2 = (e3) => 100 - (e3 - g2) / (v2 - g2) * 100, y2 = d2.map(
      (e3, t3) => `${t3 ? "L" : "M"}${x2(t3).toFixed(2)} ${b2(e3.score).toFixed(2)}`
    ).join(" "), j2 = d2.length - 1, N2 = null !== t2 && j2 >= 0 ? `M${x2(j2).toFixed(2)} ${b2(d2[j2].score).toFixed(2)} L${x2(_2 - 1).toFixed(2)} ${b2(t2).toFixed(2)}` : null, [w2, k2] = (0, r.useState)(null), $2 = (0, r.useRef)(null), S2 = w2 ?? (null !== t2 ? _2 - 1 : j2), T2 = u2[Math.max(0, S2)], M2 = T2 ? `${T2.label}${S2 === j2 && j2 < _2 - 1 ? " baseline" : ""} \xB7 ${null === T2.score ? "not run" : `${T2.score.toFixed(1)}%`}${T2.date ? ` \xB7 ${T2.date}` : ""}` : "";
    return (0, s.jsxs)("div", {
      className: q().spark,
      children: [
        (0, s.jsxs)("div", {
          className: q().statLabel,
          children: [
            (0, s.jsxs)("span", { children: ["Last ", _2, " runs"] }),
            (0, s.jsx)("span", {
              className: q().sparkReadout,
              "aria-hidden": "true",
              children: M2
            })
          ]
        }),
        (0, s.jsxs)("div", {
          ref: $2,
          className: q().sparkPlot,
          role: "slider",
          tabIndex: 0,
          "aria-label": "Run history",
          "aria-valuemin": 1,
          "aria-valuemax": _2,
          "aria-valuenow": S2 + 1,
          "aria-valuetext": M2,
          onPointerMove: (e3) => {
            var t3;
            let a3;
            return k2(
              (t3 = e3.clientX, a3 = $2.current?.getBoundingClientRect(), a3?.width ? Math.max(
                0,
                Math.min(
                  _2 - 1,
                  Math.round((t3 - a3.left) / a3.width * (_2 - 1))
                )
              ) : null)
            );
          },
          onPointerLeave: () => k2(null),
          onBlur: () => k2(null),
          onKeyDown: function(e3) {
            let t3 = w2 ?? S2, a3 = {
              ArrowLeft: t3 - 1,
              ArrowDown: t3 - 1,
              ArrowRight: t3 + 1,
              ArrowUp: t3 + 1,
              Home: 0,
              End: _2 - 1
            }[e3.key];
            "Escape" === e3.key ? k2(null) : void 0 !== a3 && (e3.preventDefault(), k2(Math.max(0, Math.min(_2 - 1, a3))));
          },
          children: [
            (0, s.jsxs)("svg", {
              className: q().sparkSvg,
              viewBox: "0 0 100 100",
              preserveAspectRatio: "none",
              "aria-hidden": "true",
              focusable: "false",
              children: [
                (0, s.jsx)("path", {
                  className: q().sparkLine,
                  d: y2,
                  vectorEffect: "non-scaling-stroke"
                }),
                N2 && (0, s.jsx)(
                  l.PY1.path,
                  {
                    className: q().sparkTail,
                    "data-tone": i2,
                    d: N2,
                    vectorEffect: "non-scaling-stroke",
                    initial: !o2 && { pathLength: 0 },
                    animate: { pathLength: 1 },
                    transition: {
                      duration: h.T.duration.standard,
                      ease: [...h.T.ease.standard]
                    }
                  },
                  N2
                )
              ]
            }),
            null === t2 && (0, s.jsx)("span", {
              className: q().sparkSlot,
              style: { left: `${x2(_2 - 1)}%` },
              "aria-hidden": "true"
            }),
            u2.map(
              (e3, t3) => null === e3.score ? null : (0, s.jsx)(
                "span",
                {
                  "aria-hidden": "true",
                  className: q().sparkDot,
                  "data-kind": t3 === _2 - 1 ? "current" : t3 === j2 ? "baseline" : void 0,
                  "data-tone": t3 === _2 - 1 ? i2 : void 0,
                  "data-active": w2 === t3 || void 0,
                  style: { left: `${x2(t3)}%`, top: `${b2(e3.score)}%` }
                },
                e3.label + t3
              )
            )
          ]
        }),
        (0, s.jsxs)("div", {
          className: q().sparkAxis,
          "aria-hidden": "true",
          children: [
            (0, s.jsx)("span", { children: u2[0]?.label }),
            (0, s.jsx)("span", { children: a2 })
          ]
        })
      ]
    });
  }
  function ep({ kind: e2, text: t2 }) {
    let a2 = t2.trimEnd(), r2 = t2.slice(a2.length);
    return (0, s.jsxs)(s.Fragment, {
      children: [
        "add" === e2 ? (0, s.jsx)("ins", { className: q().diffAdd, children: a2 }) : (0, s.jsx)("del", { className: q().diffDel, children: a2 }),
        r2
      ]
    });
  }
  function em({
    suite: e2,
    item: t2,
    result: a2,
    rubric: n2,
    triage: i2,
    onTriage: l2,
    onUndo: d2,
    simulated: c2
  }) {
    let h2 = t2.baselineOutput, m2 = a2?.output, f2 = (0, r.useMemo)(
      () => h2 && m2 ? (function(e3, t3) {
        let a3 = e3.match(/\S+\s*/g) ?? [], s2 = t3.match(/\S+\s*/g) ?? [], r2 = (e4, t4) => a3[e4].trimEnd() === s2[t4].trimEnd(), n3 = Array.from(
          { length: a3.length + 1 },
          () => Array(s2.length + 1).fill(0)
        );
        for (let e4 = a3.length - 1; e4 >= 0; e4--)
          for (let t4 = s2.length - 1; t4 >= 0; t4--)
            n3[e4][t4] = r2(e4, t4) ? n3[e4 + 1][t4 + 1] + 1 : Math.max(n3[e4 + 1][t4], n3[e4][t4 + 1]);
        let i3 = [], l3 = (e4, t4 = "", a4 = "") => {
          let s3 = i3[i3.length - 1];
          s3 && s3.type === e4 ? (s3.before += t4, s3.after += a4) : i3.push({ type: e4, before: t4, after: a4 });
        }, o2 = 0, d3 = 0;
        for (; o2 < a3.length && d3 < s2.length; )
          r2(o2, d3) ? l3("same", a3[o2++], s2[d3++]) : n3[o2 + 1][d3] >= n3[o2][d3 + 1] ? l3("change", a3[o2++]) : l3("change", "", s2[d3++]);
        for (; o2 < a3.length; ) l3("change", a3[o2++]);
        for (; d3 < s2.length; ) l3("change", "", s2[d3++]);
        for (let e4 = true; e4; ) {
          e4 = false;
          for (let t4 = 1; t4 < i3.length - 1; t4++) {
            let a4 = i3[t4];
            if ("same" !== a4.type || a4.before.trim().split(/\s+/).length > 1 || "change" !== i3[t4 - 1].type || "change" !== i3[t4 + 1].type)
              continue;
            let s3 = i3[t4 - 1], r3 = i3[t4 + 1];
            i3 = [
              ...i3.slice(0, t4 - 1),
              {
                type: "change",
                before: s3.before + a4.before + r3.before,
                after: s3.after + a4.after + r3.after
              },
              ...i3.slice(t4 + 2)
            ], e4 = true;
            break;
          }
        }
        let u2 = i3.reduce(
          (e4, t4) => e4 + ("same" === t4.type ? t4.after.length : 0),
          0
        );
        return {
          parts: i3,
          rewritten: u2 / Math.max(1, e3.length, t3.length) < 0.3
        };
      })(h2, m2) : null,
      [h2, m2]
    ), g2 = t2.baseline, v2 = a2?.outcome, _2 = !!a2?.scores?.length, x2 = i2?.status === "pending" ? i2.action : null, b2 = (0, r.useRef)(null), y2 = (0, r.useRef)(false), j2 = (e3) => {
      y2.current = true, e3();
    }, N2 = i2?.status ?? "none";
    return (0, r.useEffect)(() => {
      if ("pending" === N2 || !y2.current) return;
      y2.current = false;
      let e3 = b2.current;
      (e3?.querySelector("button:not(:disabled)") ?? e3?.querySelector("[tabindex='-1']"))?.focus({ preventScroll: true });
    }, [N2]), (0, s.jsxs)("div", {
      className: q().detail,
      children: [
        (0, s.jsxs)("dl", {
          className: q().defs,
          children: [
            (0, s.jsxs)("div", {
              className: q().def,
              children: [
                (0, s.jsx)("dt", { children: "Input" }),
                (0, s.jsx)("dd", { className: q().quote, children: t2.input })
              ]
            }),
            t2.expected && (0, s.jsxs)("div", {
              className: q().def,
              children: [
                (0, s.jsx)("dt", { children: "Expected" }),
                (0, s.jsx)("dd", { children: t2.expected })
              ]
            })
          ]
        }),
        (0, s.jsxs)("div", {
          className: q().compare,
          children: [
            (0, s.jsxs)("section", {
              className: q().pane,
              "aria-label": `${e2.baseline.version} output`,
              children: [
                (0, s.jsxs)("header", {
                  className: q().paneHead,
                  children: [
                    (0, s.jsxs)("span", {
                      className: q().paneTitle,
                      children: [
                        (0, s.jsx)(ei, { model: e2.baseline.model }),
                        e2.baseline.version,
                        (0, s.jsx)("span", {
                          className: q().paneModel,
                          children: e2.baseline.model.name
                        })
                      ]
                    }),
                    (0, s.jsxs)("span", {
                      className: q().outcomeTag,
                      "data-outcome": g2,
                      children: [(0, s.jsx)(G, { outcome: g2 }), I[g2]]
                    })
                  ]
                }),
                (0, s.jsx)("p", {
                  className: q().paneBody,
                  children: f2 && !f2.rewritten ? f2.parts.map(
                    (e3, t3) => "change" === e3.type ? e3.before && (0, s.jsx)(
                      ep,
                      { kind: "del", text: e3.before },
                      t3
                    ) : (0, s.jsx)("span", { children: e3.before }, t3)
                  ) : t2.baselineOutput
                })
              ]
            }),
            (0, s.jsxs)("section", {
              className: q().pane,
              "aria-label": `${e2.candidate.version} output`,
              children: [
                (0, s.jsxs)("header", {
                  className: q().paneHead,
                  children: [
                    (0, s.jsxs)("span", {
                      className: q().paneTitle,
                      children: [
                        (0, s.jsx)(ei, { model: e2.candidate.model }),
                        e2.candidate.version,
                        (0, s.jsx)("span", {
                          className: q().paneModel,
                          children: e2.candidate.model.name
                        })
                      ]
                    }),
                    v2 && (0, s.jsxs)("span", {
                      className: q().outcomeTag,
                      "data-outcome": v2,
                      children: [(0, s.jsx)(G, { outcome: v2 }), I[v2]]
                    })
                  ]
                }),
                a2?.error && !a2.output ? (0, s.jsxs)("p", {
                  className: q().paneError,
                  children: [
                    (0, s.jsx)(o.A, { "aria-hidden": "true" }),
                    a2.error
                  ]
                }) : (0, s.jsx)("p", {
                  className: q().paneBody,
                  children: f2 && !f2.rewritten ? f2.parts.map(
                    (e3, t3) => "change" === e3.type ? e3.after && (0, s.jsx)(
                      ep,
                      { kind: "add", text: e3.after },
                      t3
                    ) : (0, s.jsx)(
                      "span",
                      { children: e3.after },
                      t3
                    )
                  ) : a2?.output ?? (0, s.jsx)("span", {
                    className: q().muted,
                    children: "Not run yet"
                  })
                })
              ]
            })
          ]
        }),
        (0, s.jsxs)("section", {
          className: q().judge,
          "aria-label": `Judge, ${e2.judge.name}`,
          children: [
            (0, s.jsx)("div", {
              className: q().judgeHead,
              "aria-hidden": "true",
              children: "Judge"
            }),
            (0, s.jsxs)("div", {
              className: q().judgeBody,
              children: [
                (0, s.jsxs)("p", {
                  className: q().judgeModel,
                  children: [
                    (0, s.jsx)("span", {
                      className: q().judgeKey,
                      children: "Judge"
                    }),
                    (0, s.jsx)(ei, { model: e2.judge }),
                    (0, s.jsx)("span", {
                      className: q().judgeName,
                      children: e2.judge.name
                    }),
                    _2 && t2.baselineScores && (0, s.jsxs)("span", {
                      className: q().judgeLegend,
                      "aria-hidden": "true",
                      children: [
                        (0, s.jsx)("span", { className: q().ghostKey }),
                        e2.baseline.version
                      ]
                    })
                  ]
                }),
                _2 ? (0, s.jsx)("ul", {
                  className: q().rubric,
                  children: n2.map((r2, n3) => {
                    let i3 = a2?.scores?.[n3], l3 = t2.baselineScores?.[n3];
                    if (void 0 === i3) return null;
                    let o2 = void 0 === l3 ? 0 : i3 - l3;
                    return (0, s.jsxs)(
                      "li",
                      {
                        className: q().rubricRow,
                        children: [
                          (0, s.jsx)("span", {
                            className: q().rubricName,
                            children: r2
                          }),
                          (0, s.jsx)(ed, {
                            value: i3 / 5,
                            baseline: void 0 === l3 ? void 0 : l3 / 5,
                            tone: eo(o2),
                            className: q().rubricBar
                          }),
                          (0, s.jsxs)("span", {
                            className: q().rubricScore,
                            children: [
                              (0, s.jsx)("span", {
                                className: q().srOnly,
                                children: `${e2.candidate.version} ${i3} of 5${void 0 === l3 ? "" : `, ${e2.baseline.version} ${l3}`}`
                              }),
                              (0, s.jsxs)("span", {
                                "aria-hidden": "true",
                                children: [
                                  i3,
                                  (0, s.jsx)("span", {
                                    className: q().muted,
                                    children: " / 5"
                                  })
                                ]
                              })
                            ]
                          }),
                          (0, s.jsx)("span", {
                            className: q().rubricDelta,
                            "aria-hidden": "true",
                            children: void 0 !== l3 && 0 !== o2 ? (0, s.jsx)(eu, { value: o2 }) : (0, s.jsx)("span", {
                              className: q().muted,
                              children: "Same"
                            })
                          })
                        ]
                      },
                      r2
                    );
                  })
                }) : (0, s.jsx)("p", {
                  className: q().rationale,
                  children: a2?.error ? "Not scored. The case errored before the judge could read a reply." : "Scores appear once the case runs."
                }),
                a2?.rationale && (0, s.jsx)("p", {
                  className: q().rationale,
                  children: a2.rationale
                })
              ]
            })
          ]
        }),
        (0, s.jsx)("div", {
          ref: b2,
          className: q().actions,
          children: i2?.status === "done" ? (0, s.jsxs)("p", {
            className: q().triaged,
            tabIndex: -1,
            children: [
              (0, s.jsxs)("span", {
                className: q().triagedMain,
                children: [
                  (0, s.jsx)("span", {
                    className: q().triagedIcon,
                    children: "expected" === i2.action ? (0, s.jsx)(u.A, { "aria-hidden": "true" }) : (0, s.jsx)(L, {
                      className: q().linear,
                      "aria-hidden": "true",
                      title: ""
                    })
                  }),
                  (0, s.jsx)("span", {
                    className: q().triagedText,
                    children: "expected" === i2.action ? "Marked as expected. Later runs will not count it as a regression." : `${i2.issueKey ?? "Issue"} opened in Linear${c2 ? " (simulated)" : ""}`
                  })
                ]
              }),
              "expected" === i2.action && (0, s.jsxs)(p.$, {
                variant: "ghost",
                size: "sm",
                className: q().undo,
                onClick: () => j2(d2),
                children: [
                  (0, s.jsx)(C.A, { "aria-hidden": "true" }),
                  "Undo"
                ]
              })
            ]
          }) : (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)(p.$, {
                variant: "secondary",
                size: "sm",
                loading: "expected" === x2,
                disabled: !!x2 && "expected" !== x2,
                onClick: () => j2(() => l2("expected")),
                children: [
                  (0, s.jsx)(u.A, { "aria-hidden": "true" }),
                  "Mark as expected"
                ]
              }),
              (0, s.jsxs)(p.$, {
                variant: "secondary",
                size: "sm",
                loading: "issue" === x2,
                disabled: !!x2 && "issue" !== x2,
                onClick: () => j2(() => l2("issue")),
                children: [
                  (0, s.jsx)(L, {
                    className: q().linear,
                    "aria-hidden": "true",
                    title: ""
                  }),
                  "Open issue"
                ]
              })
            ]
          })
        })
      ]
    });
  }
  let ef = {
    status: "idle",
    results: {},
    inflight: [],
    elapsed: 0,
    simulated: true,
    id: 0
  }, eg = { duration: h.T.duration.fast, ease: [...h.T.ease.enter] }, ev = {
    all: "All",
    failed: "Failed",
    regressions: "Regressions",
    improved: "Improved"
  };
  function e_({
    suite: e2,
    runs: t2 = S,
    onRun: a2,
    onTriage: f2,
    defaultFilter: g2 = "regressions",
    className: v2
  }) {
    var _2, x2, b2, j2;
    let N2, w2, M2, I2 = e2 ?? k, C2 = (0, r.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), A2 = (0, n.I)(), R2 = I2.rubric ?? y, { candidate: L2, baseline: O2 } = I2, {
      state: E2,
      start: P2,
      stop: D2
    } = (function(e3, t3, a3) {
      let [s2, n2] = (0, r.useState)(ef), i2 = (0, r.useRef)(null), l2 = (0, r.useRef)([]), o2 = (0, r.useRef)(0), d2 = (0, r.useCallback)(() => {
        i2.current?.abort(), i2.current = null, l2.current.forEach((e4) => window.clearTimeout(e4)), l2.current = [];
      }, []);
      return (0, r.useEffect)(() => d2, [d2]), {
        state: s2,
        start: (0, r.useCallback)(() => {
          d2();
          let s3 = ++o2.current, r2 = new AbortController();
          i2.current = r2;
          let u2 = performance.now();
          n2({
            status: "running",
            results: {},
            inflight: [],
            elapsed: 0,
            simulated: !t3,
            id: s3
          });
          let c2 = (e4) => n2((t4) => t4.id === s3 ? e4(t4) : t4);
          if (!t3) {
            let t4 = (function(e4) {
              let t5 = /* @__PURE__ */ new Map();
              for (let a5 of e4)
                t5.set(a5.category, [...t5.get(a5.category) ?? [], a5]);
              let a4 = [...t5.values()], s5 = Math.max(0, ...a4.map((e5) => e5.length)), r3 = [];
              for (let e5 = 0; e5 < s5; e5++)
                for (let t6 of a4) t6[e5] && r3.push(t6[e5]);
              return r3;
            })(e3.cases), s4 = t4.length, n3 = e3.estimate?.seconds ?? 190, i3 = Math.max(1.6, Math.min(4.2, 0.034 * s4)), o3 = n3 / i3, d3 = 1e3 * i3 * 8 / Math.max(1, s4), h3 = 0, p3 = 0, m2 = () => {
              if (r2.signal.aborted) return;
              let e4 = t4[h3++];
              if (!e4) return;
              let i4 = a3(e4), f3 = d3 * (0.55 + 0.9 * (function(e5) {
                let t5 = 2166136261;
                for (let a4 = 0; a4 < e5.length; a4++)
                  t5 = Math.imul(t5 ^ e5.charCodeAt(a4), 16777619);
                return (t5 >>> 0) % 1e3 / 1e3;
              })(e4.id)) * ("error" === i4.outcome ? 1.6 : 1);
              c2((t5) => ({ ...t5, inflight: [...t5.inflight, e4.id] })), l2.current.push(
                window.setTimeout(() => {
                  if (r2.signal.aborted) return;
                  let t5 = ++p3 === s4, a4 = t5 ? n3 : (performance.now() - u2) / 1e3 * o3;
                  c2((s5) => ({
                    ...s5,
                    results: { ...s5.results, [e4.id]: i4 },
                    inflight: s5.inflight.filter((t6) => t6 !== e4.id),
                    elapsed: Math.min(n3, Math.max(s5.elapsed, a4)),
                    status: t5 ? "done" : s5.status
                  })), m2();
                }, f3)
              );
            };
            for (let e4 = 0; e4 < Math.min(8, s4); e4++)
              l2.current.push(window.setTimeout(m2, 40 * e4));
            s4 || c2((e4) => ({ ...e4, status: "done" }));
            return;
          }
          let h2 = (e4) => c2(
            (t4) => t4.inflight.includes(e4) ? t4 : { ...t4, inflight: [...t4.inflight, e4] }
          ), p2 = (e4) => c2((t4) => ({
            ...t4,
            results: { ...t4.results, [e4.caseId]: e4 },
            inflight: t4.inflight.filter((t5) => t5 !== e4.caseId),
            elapsed: (performance.now() - u2) / 1e3
          }));
          (async () => {
            try {
              let a4 = t3(e3, { signal: r2.signal, started: h2 });
              if (a4 && "function" == typeof a4[Symbol.asyncIterator])
                for await (let e4 of a4) {
                  if (r2.signal.aborted) return;
                  p2(e4);
                }
              else {
                let e4 = await a4;
                if (r2.signal.aborted) return;
                e4.forEach(p2);
              }
              r2.signal.aborted || c2((e4) => ({
                ...e4,
                status: "done",
                inflight: [],
                elapsed: (performance.now() - u2) / 1e3
              }));
            } catch (e4) {
              if (r2.signal.aborted) return;
              c2((t4) => ({
                ...t4,
                status: "failed",
                inflight: [],
                error: e4 instanceof Error ? e4.message : "The run failed."
              }));
            }
          })();
        }, [d2, t3, a3, e3]),
        stop: (0, r.useCallback)(() => {
          d2(), n2(
            (e4) => "running" === e4.status ? { ...e4, status: "stopped", inflight: [] } : e4
          );
        }, [d2])
      };
    })(
      I2,
      a2,
      (0, r.useCallback)(
        (t3) => (e2 ? void 0 : $[t3.id]) ?? {
          caseId: t3.id,
          outcome: t3.baseline,
          costUsd: 0.024
        },
        [e2]
      )
    ), B2 = "running" === E2.status, F2 = "done" === E2.status, z2 = E2.results, K2 = I2.cases.length, Y2 = (0, r.useMemo)(
      () => new Map(I2.cases.map((e3) => [e3.id, e3])),
      [I2.cases]
    ), H2 = (0, r.useMemo)(
      () => I2.categories ?? [...new Set(I2.cases.map((e3) => e3.category))],
      [I2]
    ), W2 = (0, r.useMemo)(() => new Set(E2.inflight), [E2.inflight]), Z2 = (0, r.useCallback)(
      (e3) => {
        let t3 = z2[e3.id];
        if (!t3) return null;
        let a3 = "pass" === e3.baseline, s2 = "pass" === t3.outcome;
        return a3 && !s2 ? "regression" : !a3 && s2 ? "improved" : null;
      },
      [z2]
    ), er2 = (0, r.useMemo)(() => {
      let e3 = { pass: 0, fail: 0, error: 0 }, t3 = 0, a3 = 0, s2 = 0;
      for (let r3 of Object.values(z2)) {
        e3[r3.outcome]++, s2 += r3.costUsd ?? 0;
        let n2 = Y2.get(r3.caseId);
        n2 && ("pass" === n2.baseline && "pass" !== r3.outcome && t3++, "pass" !== n2.baseline && "pass" === r3.outcome && a3++);
      }
      let r2 = I2.cases.filter((e4) => "pass" === e4.baseline).length;
      return {
        counts: e3,
        regressions: t3,
        improved: a3,
        cost: s2,
        completed: Object.keys(z2).length,
        baselinePass: r2
      };
    }, [z2, Y2, I2.cases]), ei2 = er2.completed > 0, ep2 = T(er2.counts.pass, K2), em2 = T(er2.baselinePass, K2), eb2 = ep2 - em2, ey = eo(eb2), ej = (0, r.useMemo)(
      () => H2.map((e3) => {
        let t3 = I2.cases.filter((t4) => t4.category === e3), a3 = 0, s2 = 0, r2 = 0, n2 = 0;
        for (let e4 of t3) {
          let t4 = z2[e4.id]?.outcome;
          t4 && (n2++, "pass" === t4 ? a3++ : "fail" === t4 ? s2++ : r2++);
        }
        let i2 = t3.filter((e4) => "pass" === e4.baseline).length;
        return {
          name: e3,
          items: t3,
          pass: a3,
          fail: s2,
          error: r2,
          scored: n2,
          baselinePass: i2,
          total: t3.length
        };
      }),
      [H2, I2.cases, z2]
    ), [eN, ew] = (0, r.useState)(g2), [ek, e$] = (0, r.useState)(null), [eS, eT] = (0, r.useState)(null), eM = (0, r.useMemo)(
      () => new Map(Object.keys(z2).map((e3, t3) => [e3, t3])),
      [z2]
    ), eI = (0, r.useCallback)(
      (e3, t3) => {
        if ("all" === t3) return true;
        let a3 = z2[e3.id];
        return !!a3 && ("failed" === t3 ? "pass" !== a3.outcome : Z2(e3) === ("regressions" === t3 ? "regression" : "improved"));
      },
      [z2, Z2]
    ), eC = (0, r.useCallback)(
      (e3) => "all" === e3 ? I2.cases : I2.cases.filter((t3) => eI(t3, e3)).sort((e4, t3) => (eM.get(e4.id) ?? 0) - (eM.get(t3.id) ?? 0)),
      [I2.cases, eI, eM]
    ), eA = (0, r.useMemo)(() => eC(eN), [eC, eN]), eR = ek === eN, eL = eR ? eA : eA.slice(0, 8), eO = eA.length - eL.length, eE = {
      all: K2,
      failed: er2.counts.fail + er2.counts.error,
      regressions: er2.regressions,
      improved: er2.improved
    }, [eP, eD] = (0, r.useState)({}), eB = (0, r.useRef)(2481), [eF, ez] = (0, r.useState)(""), eK = I2.cases.filter(
      (e3) => eP[e3.id]?.status === "done" && "regression" === Z2(e3)
    ).length, [eY, eH] = (0, r.useState)(E2.status);
    if (eY !== E2.status) {
      eH(E2.status);
      let e3 = "running" === E2.status ? `Running ${K2} cases${E2.simulated ? ", simulated" : ""}` : "done" === E2.status ? `Run finished. Score ${ep2.toFixed(1)} percent, ${ec(eb2)} against ${O2.version}. ${er2.regressions} regressions, ${er2.improved} improved.` : "stopped" === E2.status ? `Run stopped after ${er2.completed} of ${K2} cases` : "failed" === E2.status ? `Run failed. ${E2.error ?? ""}` : "";
      e3 && ez(e3);
    }
    let [eq, eW] = (0, r.useState)(null), eU = eq ? Y2.get(eq) : void 0, eV = (e3) => `${C2}-row-${e3}`;
    function eZ(e3) {
      let t3 = e3.target;
      return t3?.closest("[data-case]")?.dataset.case ?? null;
    }
    let eG = B2 ? null : "stopped" === E2.status ? `Partial score, ${er2.completed} of ${K2}` : "failed" === E2.status ? "Run failed" : "Score", eJ = (_2 = eN, x2 = E2.status, b2 = ei2, j2 = O2.version, b2 || "running" === x2 ? "running" === x2 ? { text: "None so far.", done: false } : "stopped" === x2 ? { text: "None in the cases scored before the stop.", done: false } : "regressions" === _2 ? {
      text: `No regressions. Every case that passed on ${j2} still passes.`,
      done: true
    } : "failed" === _2 ? { text: "Every case passed.", done: true } : {
      text: `No case went from failing on ${j2} to passing.`,
      done: false
    } : {
      text: `Run the suite to compare every case with ${j2}.`,
      done: false
    }), eQ = B2 ? "Stop" : "idle" === E2.status ? "Run" : "Run again";
    return (0, s.jsx)("div", {
      className: V(q().root, v2),
      children: (0, s.jsxs)("section", {
        className: q().card,
        "aria-labelledby": `${C2}-title`,
        "aria-busy": B2 || void 0,
        children: [
          (0, s.jsxs)("header", {
            className: q().header,
            children: [
              (0, s.jsx)("h2", {
                id: `${C2}-title`,
                className: q().title,
                children: I2.name
              }),
              (0, s.jsxs)("p", {
                className: q().subtitle,
                children: [
                  (0, s.jsxs)("span", {
                    children: [L2.version, " against ", O2.version]
                  }),
                  (0, s.jsx)("span", {
                    className: q().subDot,
                    "aria-hidden": "true",
                    children: "\xB7"
                  }),
                  (0, s.jsxs)("span", { children: [K2, " test cases"] })
                ]
              }),
              (0, s.jsx)(en, {
                which: B2 ? "stop" : "idle" === E2.status ? "run" : "again",
                onClick: function() {
                  B2 ? D2() : (eW(null), P2());
                },
                label: B2 ? "Stop run" : `${eQ}, ${K2} cases`
              }),
              (0, s.jsxs)("div", {
                className: q().meta,
                children: [
                  (0, s.jsxs)("span", {
                    className: q().metaItem,
                    children: [
                      (0, s.jsx)("span", {
                        className: q().metaKey,
                        children: L2.version
                      }),
                      (0, s.jsx)(el, { model: L2.model, version: L2.version })
                    ]
                  }),
                  (0, s.jsx)("span", {
                    className: q().metaAgainst,
                    children: "against"
                  }),
                  (0, s.jsxs)("span", {
                    className: q().metaItem,
                    children: [
                      (0, s.jsx)("span", {
                        className: q().metaKey,
                        children: O2.version
                      }),
                      (0, s.jsx)(el, { model: O2.model, version: O2.version })
                    ]
                  }),
                  (0, s.jsx)("span", {
                    className: q().metaDivider,
                    "aria-hidden": "true"
                  }),
                  (0, s.jsxs)("span", {
                    className: q().metaItem,
                    children: [
                      (0, s.jsx)("span", {
                        className: q().metaKey,
                        "data-keep": "",
                        children: "Judge"
                      }),
                      (0, s.jsx)(el, { model: I2.judge })
                    ]
                  })
                ]
              })
            ]
          }),
          (0, s.jsxs)("div", {
            className: q().summary,
            children: [
              (0, s.jsxs)("div", {
                className: q().scoreStat,
                children: [
                  (0, s.jsx)("div", {
                    className: q().statLabel,
                    children: B2 ? (0, s.jsxs)("span", {
                      className: q().scoring,
                      children: [
                        (0, s.jsx)(m.n, { children: "Scoring" }),
                        (0, s.jsxs)("span", {
                          className: q().scoringCount,
                          children: [er2.completed, " of ", K2]
                        })
                      ]
                    }) : (0, s.jsx)("span", { children: eG })
                  }),
                  (0, s.jsxs)("div", {
                    className: q().scoreLine,
                    children: [
                      ei2 || B2 ? (0, s.jsxs)(
                        "span",
                        {
                          className: q().score,
                          children: [
                            (0, s.jsx)(et, { value: ep2, format: Q }),
                            (0, s.jsx)("span", {
                              className: q().scoreUnit,
                              children: "%"
                            })
                          ]
                        },
                        "score"
                      ) : (0, s.jsx)(
                        "span",
                        {
                          className: q().scoreEmpty,
                          children: "Not run yet"
                        },
                        "empty"
                      ),
                      (0, s.jsxs)("span", {
                        className: q().scoreDelta,
                        "data-on": F2 || void 0,
                        "aria-hidden": !F2 || void 0,
                        children: [
                          (0, s.jsx)(eu, { value: eb2, unit: true }),
                          (0, s.jsxs)("span", {
                            className: q().srOnly,
                            children: [ec(eb2), " against ", O2.version]
                          })
                        ]
                      })
                    ]
                  }),
                  (0, s.jsxs)("div", {
                    className: q().baselineLine,
                    children: [
                      (0, s.jsx)("span", {
                        className: q().ghostKey,
                        "aria-hidden": "true"
                      }),
                      (0, s.jsxs)("span", {
                        children: [O2.version, " scored ", em2.toFixed(1), "%"]
                      })
                    ]
                  })
                ]
              }),
              (0, s.jsx)(eh, {
                runs: t2,
                current: F2 ? ep2 : null,
                currentLabel: L2.version,
                tone: ey
              }),
              (0, s.jsxs)("dl", {
                className: q().costStat,
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("dt", {
                        className: q().statLabel,
                        children: "Cost"
                      }),
                      (0, s.jsx)("dd", {
                        className: q().costValue,
                        "data-estimate": !ei2 || void 0,
                        children: ei2 ? (0, s.jsx)(et, { value: er2.cost, format: ee }) : I2.estimate ? `About ${N2 = I2.estimate.costUsd, `$${N2.toFixed(2)}`}` : "Not run"
                      })
                    ]
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("dt", {
                        className: q().statLabel,
                        children: "Time"
                      }),
                      (0, s.jsx)("dd", {
                        className: q().costValue,
                        "data-estimate": !ei2 || void 0,
                        children: ei2 ? (M2 = Math.floor(
                          (w2 = Math.max(0, Math.round(E2.elapsed))) / 60
                        )) ? `${M2}m ${String(w2 % 60).padStart(2, "0")}s` : `${w2}s` : I2.estimate ? `About ${Math.round(I2.estimate.seconds / 60)} min` : "Not run"
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          (0, s.jsx)(i.N, {
            initial: false,
            children: "failed" === E2.status && (0, s.jsx)(
              l.PY1.div,
              {
                className: q().alertWrap,
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: A2 ? U : h.T.spring.smooth,
                children: (0, s.jsxs)("div", {
                  className: q().alert,
                  role: "alert",
                  children: [
                    (0, s.jsx)(o.A, { "aria-hidden": "true" }),
                    (0, s.jsxs)("span", {
                      className: q().alertText,
                      children: [
                        E2.error ?? "The run failed.",
                        " ",
                        er2.completed ? `${er2.completed} of ${K2} cases were scored.` : ""
                      ]
                    }),
                    (0, s.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      onClick: P2,
                      children: "Try again"
                    })
                  ]
                })
              },
              "failed"
            )
          }),
          (0, s.jsxs)("div", {
            className: q().gridSection,
            children: [
              (0, s.jsx)("div", {
                className: q().rows,
                "data-running": B2 || void 0,
                onPointerOver: (e3) => eW(eZ(e3)),
                onPointerLeave: () => eW(null),
                onClick: (e3) => {
                  let t3 = eZ(e3);
                  t3 && (function(e4) {
                    let t4 = Y2.get(e4);
                    if (!t4?.input) return;
                    let a3 = z2[e4], s2 = Z2(t4), r2 = "regression" === s2 ? "regressions" : "improved" === s2 ? "improved" : a3 && "pass" !== a3.outcome ? "failed" : "all";
                    ew(r2), eT(e4), eC(r2).indexOf(t4) >= 8 && e$(r2), window.requestAnimationFrame(() => {
                      let t5 = document.getElementById(eV(e4));
                      t5?.focus({ preventScroll: true }), t5?.scrollIntoView({
                        block: "nearest",
                        behavior: A2 ? "auto" : "smooth"
                      });
                    });
                  })(t3);
                },
                children: ej.map((e3) => {
                  let t3 = T(e3.pass, e3.total), a3 = t3 - T(e3.baselinePass, e3.total), r2 = e3.scored ? `${e3.name}: ${e3.pass} of ${e3.total} passed, ${e3.fail} failed, ${e3.error} ${1 === e3.error ? "error" : "errors"}${e3.scored < e3.total ? `, ${e3.total - e3.scored} not scored yet` : ""}. ${Math.round(t3)} percent${F2 ? `, ${ec(a3)} against ${O2.version}` : ""}.` : `${e3.name}: ${e3.total} cases, ${B2 ? "waiting" : "not run"}. ${O2.version} passed ${e3.baselinePass}.`;
                  return (0, s.jsxs)(
                    "div",
                    {
                      className: q().catRow,
                      role: "img",
                      "aria-label": r2,
                      children: [
                        (0, s.jsx)("span", {
                          className: q().catLabel,
                          children: e3.name
                        }),
                        (0, s.jsx)("span", {
                          className: q().cells,
                          style: {
                            "--n": e3.total,
                            "--half": Math.ceil(e3.total / 2)
                          },
                          children: e3.items.map((e4) => {
                            let t4 = z2[e4.id]?.outcome, a4 = Z2(e4), r3 = !B2 && ei2 && "all" !== eN && !eI(e4, eN);
                            return (0, s.jsx)(
                              "span",
                              {
                                className: q().cell,
                                "data-case": e4.id,
                                "data-outcome": t4,
                                "data-running": !t4 && W2.has(e4.id) || void 0,
                                "data-strong": "regression" === a4 || void 0,
                                "data-dim": r3 || void 0,
                                "data-selected": eS === e4.id || void 0,
                                "data-hover": eq === e4.id || void 0,
                                "data-clickable": !!e4.input && !!t4 || void 0,
                                children: t4 && (0, s.jsx)(G, { outcome: t4 })
                              },
                              e4.id
                            );
                          })
                        }),
                        (0, s.jsxs)("span", {
                          className: q().catStats,
                          children: [
                            (0, s.jsx)(ed, {
                              value: e3.pass / Math.max(1, e3.total),
                              baseline: e3.baselinePass / Math.max(1, e3.total),
                              tone: F2 ? eo(a3) : void 0,
                              className: q().catBar
                            }),
                            (0, s.jsx)("span", {
                              className: q().catPct,
                              children: e3.scored ? (0, s.jsx)(et, { value: t3, format: X }) : (0, s.jsx)("span", {
                                className: q().muted,
                                children: "\u2013"
                              })
                            }),
                            (0, s.jsx)("span", {
                              className: q().catDelta,
                              "data-on": F2 || void 0,
                              children: (0, s.jsx)(eu, { value: a3 })
                            })
                          ]
                        })
                      ]
                    },
                    e3.name
                  );
                })
              }),
              (0, s.jsxs)("div", {
                className: q().readout,
                "aria-hidden": "true",
                children: [
                  (0, s.jsxs)("div", {
                    className: q().legend,
                    "data-hidden": eU ? "" : void 0,
                    children: [
                      (0, s.jsxs)("span", {
                        className: q().legendItem,
                        children: [
                          (0, s.jsx)(J, { outcome: "pass" }),
                          ei2 ? `${er2.counts.pass} passed` : "Pass"
                        ]
                      }),
                      (0, s.jsxs)("span", {
                        className: q().legendItem,
                        children: [
                          (0, s.jsx)(J, { outcome: "fail" }),
                          ei2 ? `${er2.counts.fail} failed` : "Fail"
                        ]
                      }),
                      (0, s.jsxs)("span", {
                        className: q().legendItem,
                        children: [
                          (0, s.jsx)(J, { outcome: "error" }),
                          ei2 ? `${er2.counts.error} ${1 === er2.counts.error ? "error" : "errors"}` : "Error"
                        ]
                      }),
                      (0, s.jsxs)("span", {
                        className: q().legendItem,
                        children: [
                          (0, s.jsx)(J, { outcome: "fail", strong: true }),
                          ei2 ? `${er2.regressions} ${1 === er2.regressions ? "regression" : "regressions"}` : "Regression"
                        ]
                      }),
                      (0, s.jsxs)("span", {
                        className: q().legendItem,
                        children: [
                          (0, s.jsx)("span", { className: q().ghostKey }),
                          O2.version
                        ]
                      })
                    ]
                  }),
                  (0, s.jsx)("div", {
                    className: q().hoverLine,
                    "data-hidden": eU ? void 0 : "",
                    children: eU && (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)("span", {
                          className: q().hoverTitle,
                          children: eU.title
                        }),
                        (0, s.jsxs)("span", {
                          className: q().hoverOutcomes,
                          children: [
                            (0, s.jsx)(J, { outcome: eU.baseline }),
                            O2.version,
                            (0, s.jsx)(d.A, { className: q().transArrow }),
                            (0, s.jsx)(J, {
                              outcome: z2[eU.id]?.outcome,
                              strong: "regression" === Z2(eU)
                            }),
                            z2[eU.id] ? L2.version : `${L2.version} not run`
                          ]
                        })
                      ]
                    })
                  })
                ]
              })
            ]
          }),
          (0, s.jsxs)("div", {
            className: q().cases,
            children: [
              (0, s.jsxs)("div", {
                className: q().casesBar,
                children: [
                  (0, s.jsx)(es, {
                    label: "Filter cases",
                    controls: `${C2}-list`,
                    value: eN,
                    onChange: (e3) => ew(e3),
                    options: Object.keys(ev).map((e3) => ({
                      value: e3,
                      label: ev[e3],
                      count: "all" === e3 || ei2 ? eE[e3] : void 0
                    }))
                  }),
                  "regressions" === eN && F2 && er2.regressions > 0 && (0, s.jsxs)("span", {
                    className: q().casesNote,
                    children: [eK, " of ", er2.regressions, " triaged"]
                  })
                ]
              }),
              (0, s.jsx)(ea, {
                armKey: `${eN}-${eR}`,
                children: (0, s.jsxs)("div", {
                  id: `${C2}-list`,
                  children: [
                    eL.length ? (0, s.jsx)(
                      "ul",
                      {
                        className: q().list,
                        children: (0, s.jsx)(i.N, {
                          initial: false,
                          children: eL.map(
                            (e3) => (0, s.jsx)(
                              ex,
                              {
                                id: eV(e3.id),
                                item: e3,
                                suite: I2,
                                rubric: R2,
                                result: z2[e3.id],
                                change: Z2(e3),
                                open: eS === e3.id,
                                triage: eP[e3.id],
                                simulated: !f2,
                                onToggle: () => eT((t3) => t3 === e3.id ? null : e3.id),
                                onTriage: (t3) => {
                                  let a3, s2, r2;
                                  return a3 = e3.id, eD((e4) => ({
                                    ...e4,
                                    [a3]: { action: t3, status: "pending" }
                                  })), s2 = `SUP-${eB.current++}`, r2 = (r3) => {
                                    let n2 = r3 ?? s2;
                                    eD((e4) => ({
                                      ...e4,
                                      [a3]: {
                                        action: t3,
                                        status: "done",
                                        issueKey: n2
                                      }
                                    })), ez(
                                      "expected" === t3 ? `${e3.title} marked as expected` : `Issue ${n2} opened in Linear for ${e3.title}${f2 ? "" : ", simulated"}`
                                    );
                                  }, void (f2 ? Promise.resolve(f2(a3, t3)).then(
                                    (e4) => r2(
                                      "string" == typeof e4 ? e4 : void 0
                                    ),
                                    () => {
                                      eD((e4) => {
                                        let t4 = { ...e4 };
                                        return delete t4[a3], t4;
                                      }), ez(
                                        `Could not ${"expected" === t3 ? "mark the case as expected" : "open the issue"}. Try again.`
                                      );
                                    }
                                  ) : window.setTimeout(
                                    () => r2(),
                                    "issue" === t3 ? 700 : 260
                                  ));
                                },
                                onUndo: () => {
                                  eD((t3) => {
                                    let a3 = { ...t3 };
                                    return delete a3[e3.id], a3;
                                  }), ez(`${e3.title} is a regression again`);
                                }
                              },
                              e3.id
                            )
                          )
                        })
                      },
                      eN
                    ) : (0, s.jsxs)(
                      l.PY1.p,
                      {
                        className: q().empty,
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: A2 ? U : eg,
                        children: [
                          eJ.done && (0, s.jsx)(u.A, { "aria-hidden": "true" }),
                          eJ.text
                        ]
                      },
                      `${eN}-${E2.status}`
                    ),
                    (eO > 0 || eR && eA.length > 8) && (0, s.jsxs)("button", {
                      type: "button",
                      className: q().more,
                      onClick: () => e$(eR ? null : eN),
                      "aria-controls": `${C2}-list`,
                      children: [
                        eR ? "Show fewer" : `Show ${eO} more`,
                        (0, s.jsx)(c.A, {
                          className: q().moreIcon,
                          "data-flip": eR || void 0,
                          "aria-hidden": "true"
                        })
                      ]
                    })
                  ]
                })
              })
            ]
          }),
          (0, s.jsx)("p", {
            className: q().srOnly,
            role: "status",
            "aria-live": "polite",
            children: eF
          })
        ]
      })
    });
  }
  function ex({
    id: e2,
    item: t2,
    suite: a2,
    rubric: r2,
    result: o2,
    change: p2,
    open: m2,
    triage: f2,
    simulated: g2,
    onToggle: v2,
    onTriage: _2,
    onUndo: x2
  }) {
    let b2 = (0, n.I)(), y2 = !!t2.input, j2 = `${e2}-panel`, N2 = o2?.outcome, w2 = `${a2.baseline.version} ${I[t2.baseline].toLowerCase()}, ${a2.candidate.version} ${N2 ? I[N2].toLowerCase() : "not run"}${"regression" === p2 ? ", regression" : "improved" === p2 ? ", improved" : ""}`, k2 = f2?.status === "done" ? f2 : void 0, $2 = (0, s.jsxs)(s.Fragment, {
      children: [
        (0, s.jsxs)("span", {
          className: q().trans,
          "aria-hidden": "true",
          children: [
            (0, s.jsx)(J, { outcome: t2.baseline }),
            (0, s.jsx)(d.A, { className: q().transArrow }),
            (0, s.jsx)(J, { outcome: N2, strong: "regression" === p2 })
          ]
        }),
        (0, s.jsxs)("span", {
          className: q().rowTitle,
          children: [
            t2.title,
            (0, s.jsxs)("span", {
              className: q().srOnly,
              children: [
                ". ",
                t2.category,
                ". ",
                w2,
                k2 ? `. ${"expected" === k2.action ? "Marked as expected" : `Issue ${k2.issueKey}`}` : ""
              ]
            })
          ]
        }),
        k2 && (0, s.jsx)("span", {
          className: q().rowTag,
          "aria-hidden": "true",
          children: "expected" === k2.action ? (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(u.A, {}),
              (0, s.jsx)("span", {
                className: q().rowTagText,
                children: "Expected"
              })
            ]
          }) : (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(L, { title: "", className: q().linear }),
              (0, s.jsx)("span", {
                className: q().rowTagText,
                children: k2.issueKey
              })
            ]
          })
        }),
        (0, s.jsx)("span", {
          className: q().rowCategory,
          "aria-hidden": "true",
          children: t2.category
        }),
        y2 ? (0, s.jsx)(c.A, { className: q().chevron, "aria-hidden": "true" }) : (0, s.jsx)("span", {
          className: q().chevronSpace,
          "aria-hidden": "true"
        })
      ]
    });
    return (0, s.jsxs)(l.PY1.li, {
      className: q().item,
      "data-open": m2 || void 0,
      initial: b2 ? { opacity: 0 } : { height: 0, opacity: 0 },
      animate: { height: "auto", opacity: 1 },
      exit: b2 ? { opacity: 0 } : { height: 0, opacity: 0 },
      transition: b2 ? U : { height: h.T.spring.smooth, opacity: eg },
      children: [
        y2 ? (0, s.jsx)("button", {
          type: "button",
          id: e2,
          className: q().rowButton,
          "aria-expanded": m2,
          "aria-controls": j2,
          onClick: v2,
          children: $2
        }) : (0, s.jsx)("div", { id: e2, className: q().rowStatic, children: $2 }),
        (0, s.jsx)(i.N, {
          initial: false,
          children: m2 && y2 && (0, s.jsx)(
            l.PY1.div,
            {
              id: j2,
              role: "region",
              "aria-labelledby": e2,
              className: q().detailWrap,
              initial: b2 ? { opacity: 0 } : { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: b2 ? { opacity: 0 } : { height: 0, opacity: 0 },
              transition: b2 ? U : { height: h.T.spring.smooth, opacity: eg },
              children: (0, s.jsx)(em, {
                suite: a2,
                item: t2,
                result: o2,
                rubric: r2,
                triage: f2,
                simulated: g2,
                onTriage: _2,
                onUndo: x2
              })
            },
            "detail"
          )
        })
      ]
    });
  }
  let eb = e_;
}

__m(__module,__exports,__require);
}