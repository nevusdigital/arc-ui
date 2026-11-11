/* agent-handoff (pro component) */
(function(){var A=globalThis.__ARC__;
A.regCss(48734, ".demo{display:flex;flex-direction:column;align-items:center;gap:16px;width:100%}", {"demo":"demo"});
A.reg(82113, function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { AgentHandoffDemo: () => en, default: () => es });
  var n = t(95155), s = t(12115), r = t(18310), i = t(80642), o = t(25354), l = t(28245), d = t(92171), c = t(64962), h = t(51811);
  let u = {
    name: "headset",
    size: 24,
    node: [
      [
        "path",
        {
          d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",
          key: "12oyoe"
        }
      ],
      ["path", { d: "M21 16v2a4 4 0 0 1-4 4h-5", key: "1x7m43" }]
    ]
  };
  u.node;
  let m = (0, h.A)(u);
  var f = t(92298), g = t(35484), p = t(12363), y = t(90710), v = t(92571), _ = t(38158), k = t(7770), x = t(92218), b = t(51288), w = t(52898);
  function j({ title: e2 = "Claude", ...a2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...a2,
      children: (0, n.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  function N({ title: e2 = "Intercom", ...a2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...a2,
      children: (0, n.jsx)("path", {
        d: "M21 0H3C1.343 0 0 1.343 0 3v18c0 1.658 1.343 3 3 3h18c1.658 0 3-1.342 3-3V3c0-1.657-1.342-3-3-3zm-5.801 4.399c0-.44.36-.8.802-.8.44 0 .8.36.8.8v10.688c0 .442-.36.801-.8.801-.443 0-.802-.359-.802-.801V4.399zM11.2 3.994c0-.44.357-.799.8-.799s.8.359.8.799v11.602c0 .44-.357.8-.8.8s-.8-.36-.8-.8V3.994zm-4 .405c0-.44.359-.8.799-.8.443 0 .802.36.802.8v10.688c0 .442-.36.801-.802.801-.44 0-.799-.359-.799-.801V4.399zM3.199 6c0-.442.36-.8.802-.8.44 0 .799.358.799.8v7.195c0 .441-.359.8-.799.8-.443 0-.802-.36-.802-.8V6zM20.52 18.202c-.123.105-3.086 2.593-8.52 2.593-5.433 0-8.397-2.486-8.521-2.593-.335-.288-.375-.792-.086-1.128.285-.334.79-.375 1.125-.09.047.041 2.693 2.211 7.481 2.211 4.848 0 7.456-2.186 7.479-2.207.334-.289.839-.25 1.128.086.289.336.25.84-.086 1.128zm.281-5.007c0 .441-.36.8-.801.8-.441 0-.801-.36-.801-.8V6c0-.442.361-.8.801-.8.441 0 .801.357.801.8v7.195z"
      })
    });
  }
  function A({ title: e2 = "Zendesk", ...a2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...a2,
      children: (0, n.jsx)("path", {
        d: "M12.914 2.904V16.29L24 2.905H12.914zM0 2.906C0 5.966 2.483 8.45 5.543 8.45s5.542-2.484 5.543-5.544H0zm11.086 4.807L0 21.096h11.086V7.713zm7.37 7.84c-3.063 0-5.542 2.48-5.542 5.543H24c0-3.06-2.48-5.543-5.543-5.543z"
      })
    });
  }
  function C({ title: e2 = "Northwind", ...a2 }) {
    let t2 = (0, s.useId)().replace(/:/g, "");
    return (0, n.jsxs)("svg", {
      viewBox: "0 0 24 24",
      width: 16,
      height: 16,
      role: "img",
      "aria-label": e2,
      ...a2,
      children: [
        (0, n.jsxs)("defs", {
          children: [
            (0, n.jsxs)("linearGradient", {
              id: `${t2}-light`,
              x1: "8",
              y1: "3",
              x2: "8",
              y2: "21",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, n.jsx)("stop", {
                  offset: "0",
                  stopColor: "currentColor",
                  stopOpacity: ".42"
                }),
                (0, n.jsx)("stop", {
                  offset: "1",
                  stopColor: "currentColor",
                  stopOpacity: ".72"
                })
              ]
            }),
            (0, n.jsxs)("linearGradient", {
              id: `${t2}-dark`,
              x1: "16",
              y1: "3",
              x2: "16",
              y2: "21",
              gradientUnits: "userSpaceOnUse",
              children: [
                (0, n.jsx)("stop", {
                  offset: "0",
                  stopColor: "currentColor",
                  stopOpacity: ".88"
                }),
                (0, n.jsx)("stop", {
                  offset: "1",
                  stopColor: "currentColor",
                  stopOpacity: "1"
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("path", {
          d: "M12 2.5 4.75 20.75 12 16.9Z",
          fill: `url(#${t2}-light)`
        }),
        (0, n.jsx)("path", {
          d: "M12 2.5 19.25 20.75 12 16.9Z",
          fill: `url(#${t2}-dark)`
        })
      ]
    });
  }
  let M = {
    name: "Jordan Reyes",
    role: "Support specialist",
    avatar: (0, t(67752).my)("jordan-reyes"),
    joinedAt: "14:05"
  }, T = {
    issue: "Halden desk in white oak arrived with a cracked leg and a scratched top. Priya wants a full refund, not a replacement.",
    fields: [
      { label: "Order", value: "NW-48213 \xB7 delivered Oct 27" },
      { label: "Paid", value: "$649 \xB7 $150 gift card, $499 Visa 4417" },
      { label: "Asks for", value: "Full refund" }
    ]
  }, I = {
    issue: "Halden desk in white oak arrived with a cracked leg. Priya asked to talk to a person before choosing a fix.",
    fields: [
      { label: "Order", value: "NW-48213 \xB7 delivered Oct 27" },
      { label: "Paid", value: "$649 \xB7 $150 gift card, $499 Visa 4417" },
      { label: "Asks for", value: "Not decided yet" }
    ]
  }, R = (e2) => ({
    runId: e2,
    stage: "assistant",
    messages: [],
    agentMessages: [],
    typing: null,
    summary: T,
    notice: ""
  });
  class S extends Error {
  }
  var $ = t(82930), E = t.n($);
  let z = [...k.T.ease.standard], L = { type: "spring", visualDuration: 0.24, bounce: 0 }, O = { duration: k.T.duration.fast, ease: z }, W = {
    initial: { opacity: 0, y: 2 },
    animate: { opacity: 1, y: 0, transition: O },
    exit: { opacity: 0, transition: { duration: 0.1, ease: z } }
  }, P = { name: "Assistant", model: "Claude Sonnet 5.5" };
  function H(e2) {
    return void 0 === e2.stage ? (0, n.jsx)(V, { ...e2 }) : (0, n.jsx)(Y, { ...e2, stage: e2.stage });
  }
  function V(e2) {
    let a2 = !!(0, r.I)(), t2 = (function(e3, a3) {
      let [t3, n2] = (0, s.useState)(() => R(0)), r2 = (0, s.useRef)(true), i2 = (0, s.useRef)(null), o2 = (0, s.useRef)({ askedRefund: false, interacted: false, retried: false }), l2 = (0, s.useRef)(0), d2 = (0, s.useRef)(a3);
      (0, s.useEffect)(() => {
        d2.current = a3;
      }, [a3]);
      let c2 = (0, s.useCallback)(
        (e4) => n2((a4) => ({ ...a4, ..."function" == typeof e4 ? e4(a4) : e4 })),
        []
      ), h2 = (0, s.useCallback)(async (e4, a4) => {
        let t4 = e4;
        for (; t4 > 0; ) {
          let e5 = Math.min(t4, 80);
          if (await new Promise((t5, n3) => {
            let s2 = setTimeout(t5, e5);
            a4.addEventListener(
              "abort",
              () => {
                clearTimeout(s2), n3(new S());
              },
              { once: true }
            );
          }), a4.aborted)
            throw new S();
          r2.current && (t4 -= e5);
        }
      }, []), u2 = (0, s.useCallback)(
        (e4, a4) => {
          let t4 = `m${++l2.current}`;
          return c2((n3) => ({ [e4]: [...n3[e4], { ...a4, id: t4 }] })), t4;
        },
        [c2]
      ), m2 = (0, s.useCallback)(
        async (e4, a4, t4, n3) => {
          if (d2.current)
            return void u2(e4, { from: "assistant", text: a4, time: n3 });
          let s2 = u2(e4, {
            from: "assistant",
            text: "",
            time: n3,
            streaming: true
          }), r3 = "";
          try {
            for (let n4 of (function(e5) {
              let a5 = e5.split(/(?<=\s)/), t5 = [];
              for (let e6 = 0; e6 < a5.length; ) {
                let n5 = 3 + (7 * e6 + a5.length) % 6;
                t5.push(a5.slice(e6, e6 + n5).join("")), e6 += n5;
              }
              return t5;
            })(a4)) {
              await h2(34, t4);
              let a5 = r3 += n4;
              c2((t5) => ({
                [e4]: t5[e4].map((e5) => e5.id === s2 ? { ...e5, text: a5 } : e5)
              }));
            }
          } finally {
            c2((a5) => ({
              [e4]: a5[e4].map((e5) => e5.id === s2 ? { ...e5, streaming: false } : e5).filter((e5) => e5.text)
            }));
          }
        },
        [u2, c2, h2]
      ), f2 = (0, s.useCallback)(
        async (e4, a4, t4) => {
          c2({ typing: e4 });
          try {
            await h2(a4, t4);
          } finally {
            c2({ typing: null });
          }
        },
        [c2, h2]
      ), g2 = (0, s.useCallback)((e4) => {
        i2.current?.abort();
        let a4 = new AbortController();
        i2.current = a4, e4(a4.signal).catch((e5) => {
          if (!(e5 instanceof S)) throw e5;
        });
      }, []), p2 = (0, s.useCallback)(
        async (e4) => {
          c2({
            stage: "connected",
            notice: `${M.name} joined the conversation.`
          });
          let a4 = o2.current.askedRefund;
          await h2(500, e4), await f2("agent", 950, e4), u2("agentMessages", {
            from: "agent",
            text: a4 ? "Hi Priya, I'm Jordan. I read the summary, so no need to repeat anything. I've refunded $150 to your gift card and $499 to your Visa ending 4417." : "Hi Priya, I'm Jordan. I read the summary, so no need to repeat anything. Would you like a replacement leg, or a full refund?",
            time: "14:05"
          }), a4 && (c2({ notice: "Refund issued. Simulated, no money moved." }), await h2(600, e4), await f2("agent", 1200, e4), u2("agentMessages", {
            from: "agent",
            text: "The Visa refund shows up in 3 to 5 business days. A courier picks up the desk on Thursday, Oct 29, between 9:00 and 12:00.",
            time: "14:06"
          }), await h2(1400, e4), u2("agentMessages", {
            from: "customer",
            text: "That's perfect, thank you!",
            time: "14:06"
          }), await h2(700, e4), c2({ stage: "resolved", notice: `Resolved by ${M.name}.` }));
        },
        [u2, c2, f2, h2]
      ), y2 = (0, s.useCallback)(
        async (a4, t4 = 2600) => {
          (c2({
            stage: "transferring",
            summary: o2.current.askedRefund ? T : I,
            notice: "Transferring to a person through Intercom. Simulated, nothing was sent."
          }), await h2(t4, a4), "unavailable" !== e3 || o2.current.retried) ? await p2(a4) : c2({
            stage: "unavailable",
            notice: "No one is available right now. Try again, or keep writing and the team replies by email."
          });
        },
        [p2, c2, e3, h2]
      ), v2 = (0, s.useRef)(() => {
      }), _2 = (0, s.useCallback)(
        (e4) => (async () => {
          await h2(350, e4), u2("messages", {
            from: "customer",
            text: "Hi, my Halden desk arrived this morning with a cracked leg. Order NW-48213.",
            time: "14:02"
          }), await h2(350, e4), await f2("assistant", 750, e4), await m2(
            "messages",
            "Sorry about that, Priya. I found order NW-48213, the Halden desk in white oak, delivered today at 11:42. I can ship a replacement leg in 2 business days, or start a return.",
            e4,
            "14:02"
          ), await h2(1500, e4), u2("messages", {
            from: "customer",
            text: "The top is scratched too, so I'd rather have a refund. I paid with a $150 gift card and my Visa.",
            time: "14:03"
          }), o2.current.askedRefund = true, await h2(350, e4), await f2("assistant", 850, e4), await m2(
            "messages",
            "Refunds split across a gift card and a card need someone on our team. I'm passing everything along, so you won't have to repeat yourself.",
            e4,
            "14:03"
          ), await h2(900, e4), await y2(e4), o2.current.interacted || d2.current || (await h2(4200, e4), o2.current.interacted || v2.current());
        })(),
        [u2, m2, f2, y2, h2]
      ), k2 = (0, s.useCallback)(() => {
        o2.current = { askedRefund: false, interacted: false, retried: false }, n2((e4) => R(e4.runId + 1)), g2(_2);
      }, [_2, g2]);
      (0, s.useEffect)(() => {
        v2.current = k2;
      }, [k2]), (0, s.useEffect)(() => (g2(_2), () => i2.current?.abort()), []);
      let x2 = (0, s.useRef)(e3);
      (0, s.useEffect)(() => {
        x2.current !== e3 && (x2.current = e3, k2());
      }, [k2, e3]);
      let b2 = () => {
        o2.current.interacted = true;
      }, w2 = (0, s.useCallback)(() => {
        b2(), g2(async (e4) => {
          u2("messages", {
            from: "customer",
            text: "Can I talk to a person?",
            time: "14:04"
          }), await h2(300, e4), await f2("assistant", 650, e4), await m2(
            "messages",
            "Of course. I'm passing along everything we covered, so you won't have to repeat yourself.",
            e4,
            "14:04"
          ), await h2(600, e4), await y2(e4);
        });
      }, [u2, g2, m2, f2, y2, h2]), j2 = (0, s.useCallback)(() => {
        b2(), g2(async (e4) => {
          c2({
            stage: "assistant",
            agentMessages: [],
            notice: "Transfer canceled. The assistant is still here."
          }), await h2(250, e4), await f2("assistant", 600, e4), await m2(
            "messages",
            "No problem, I'm still here. Ask for a person whenever you're ready and I'll pass this along.",
            e4,
            "14:04"
          );
        });
      }, [c2, g2, m2, f2, h2]), N2 = (0, s.useCallback)(() => {
        b2(), o2.current.retried = true, g2((e4) => y2(e4, 1600));
      }, [g2, y2]), A2 = (0, s.useCallback)(
        (e4) => {
          let a4 = t3.stage;
          if ("transferring" === a4) {
            u2("agentMessages", {
              from: "customer",
              text: e4,
              time: "14:04"
            }), c2({
              notice: "Added for the team. Simulated, nothing was sent."
            });
            return;
          }
          if ("unavailable" === a4) {
            u2("agentMessages", {
              from: "customer",
              text: e4,
              time: "14:05"
            }), c2({
              notice: "Saved. The team replies by email. Simulated, nothing was sent."
            });
            return;
          }
          (b2(), "assistant" === a4) ? g2(async (a5) => {
            u2("messages", {
              from: "customer",
              text: e4,
              time: "14:04"
            }), c2({
              notice: "Message sent to the assistant. Simulated, nothing was sent."
            }), await h2(300, a5), await f2("assistant", 700, a5), await m2(
              "messages",
              "Thanks, I've noted that. I can also bring in a person from our team if you'd like.",
              a5,
              "14:04"
            );
          }) : g2(async (a5) => {
            u2("agentMessages", {
              from: "customer",
              text: e4,
              time: "14:07"
            }), c2({
              stage: "connected",
              notice: `Message sent to ${M.name}. Simulated, nothing was sent.`
            }), await h2(400, a5), await f2("agent", 1100, a5), u2("agentMessages", {
              from: "agent",
              text: "Thanks, Priya. I've added that to your case.",
              time: "14:07"
            });
          });
        },
        [u2, c2, g2, t3.stage, m2, f2, h2]
      ), C2 = (0, s.useCallback)((e4) => {
        r2.current = e4;
      }, []);
      return {
        ...t3,
        onRequestHuman: w2,
        onCancelTransfer: j2,
        onRetry: N2,
        onSend: A2,
        onReplay: k2,
        setVisible: C2
      };
    })(e2.scenario ?? "handoff", a2);
    return (0, n.jsx)(Y, {
      title: "Order NW-48213",
      subtitle: "Northwind Home support",
      logo: (0, n.jsx)(C, { "aria-hidden": "true" }),
      agent: M,
      ...e2,
      stage: t2.stage,
      messages: t2.messages,
      agentMessages: t2.agentMessages,
      typing: t2.typing,
      summary: t2.summary,
      notice: t2.notice,
      onSend: t2.onSend,
      onRequestHuman: t2.onRequestHuman,
      onCancelTransfer: t2.onCancelTransfer,
      onRetry: t2.onRetry,
      runKey: t2.runId,
      onReplay: t2.onReplay,
      onVisibleChange: t2.setVisible
    });
  }
  let B = (e2) => e2?.kind === "message" ? e2.message.from : e2?.kind === "typing" ? e2.who : e2?.kind === "ask" ? "customer" : void 0, D = (e2) => e2?.kind === "assistant-node" || e2?.kind === "agent-node" || e2?.kind === "resolved-node";
  function Y({
    stage: e2,
    messages: a2 = [],
    agentMessages: t2 = [],
    typing: l2 = null,
    summary: d2,
    assistant: h2,
    agent: u2,
    provider: g2 = "intercom",
    replyEstimate: p2 = "2 min",
    title: y2 = "Support chat",
    subtitle: v2,
    logo: _2,
    onSend: k2,
    onRequestHuman: C2,
    onCancelTransfer: M2,
    onRetry: T2,
    placeholder: I2,
    height: R2 = 600,
    notice: S2,
    className: $2,
    runKey: L2 = 0,
    onReplay: W2,
    onVisibleChange: H2
  }) {
    let V2 = !!(0, r.I)(), G2 = (0, s.useRef)(null), [X2, ee2] = (0, s.useState)(false), ea2 = (0, s.useRef)(H2);
    (0, s.useEffect)(() => {
      ea2.current = H2;
    }, [H2]), (0, s.useEffect)(() => {
      let e3 = G2.current;
      if (!e3 || "u" < typeof IntersectionObserver) return;
      let a3 = new IntersectionObserver(([e4]) => {
        ee2(!e4.isIntersecting), ea2.current?.(e4.isIntersecting);
      });
      return a3.observe(e3), () => a3.disconnect();
    }, []);
    let et2 = { ...P, ...h2 }, en2 = "intercom" === g2 ? { name: "Intercom", mark: (0, n.jsx)(N, { "aria-hidden": "true" }) } : "zendesk" === g2 ? {
      name: "Zendesk",
      mark: (0, n.jsx)(A, { "aria-hidden": "true" })
    } : g2, es2 = u2 ?? { name: "Support" }, er = es2.name.split(" ")[0], ei = (function(e3) {
      let a3 = [], t3 = "assistant" !== e3.stage, n2 = "connected" === e3.stage || "resolved" === e3.stage;
      for (let n3 of ((e3.messages.length || "assistant" === e3.typing && !t3) && a3.push({ kind: "assistant-node", key: "assistant-node" }), e3.messages))
        a3.push({ kind: "message", key: n3.id, message: n3 });
      if (t3) {
        a3.push({ kind: "handoff", key: "handoff" });
        let t4 = false;
        for (let s3 of e3.agentMessages)
          n2 && !t4 && "agent" === s3.from && (a3.push({ kind: "agent-node", key: "agent-node" }), t4 = true), a3.push({ kind: "message", key: s3.id, message: s3 });
        n2 && !t4 && a3.push({ kind: "agent-node", key: "agent-node" });
      }
      "assistant" !== e3.typing || t3 || a3.push({ kind: "typing", key: "typing-assistant", who: "assistant" }), "agent" === e3.typing && n2 && a3.push({ kind: "typing", key: "typing-agent", who: "agent" }), "resolved" === e3.stage && a3.push({ kind: "resolved-node", key: "resolved-node" });
      let s2 = e3.messages.some((e4) => e4.streaming);
      return "assistant" === e3.stage && e3.canAsk && !e3.typing && !s2 && e3.messages.length && a3.push({ kind: "ask", key: "ask" }), a3;
    })({ stage: e2, messages: a2, agentMessages: t2, typing: l2, canAsk: !!C2 }), eo = 0 === ei.length, el = a2[0]?.time, ed = { "--handoff-height": "number" == typeof R2 ? `${R2}px` : R2 };
    return (0, n.jsxs)("section", {
      ref: G2,
      className: [E().root, $2].filter(Boolean).join(" "),
      style: ed,
      "data-paused": X2 || void 0,
      "data-reduced": V2 || void 0,
      "aria-label": y2,
      children: [
        (0, n.jsxs)("header", {
          className: E().header,
          children: [
            _2 && (0, n.jsx)("span", { className: E().logo, children: _2 }),
            (0, n.jsxs)("div", {
              className: E().heading,
              children: [
                (0, n.jsx)("h3", { className: E().title, children: y2 }),
                v2 && (0, n.jsx)("p", { className: E().subtitle, children: v2 })
              ]
            }),
            (0, n.jsxs)("div", {
              className: E().headerEnd,
              children: [
                (0, n.jsx)(K, { stage: e2, name: er }),
                W2 && (0, n.jsx)(b.$, {
                  variant: "ghost",
                  size: "sm",
                  "aria-label": "Replay the demo",
                  title: "Replay",
                  onClick: W2,
                  children: (0, n.jsx)(f.A, { "aria-hidden": "true" })
                })
              ]
            })
          ]
        }),
        (0, n.jsx)("div", {
          className: E().scroll,
          role: "log",
          "aria-live": "off",
          "aria-label": "Conversation",
          tabIndex: 0,
          children: (0, n.jsx)("div", {
            className: E().fill,
            children: (0, n.jsx)(i.N, {
              mode: "wait",
              initial: false,
              children: (0, n.jsx)(
                o.PY1.div,
                {
                  className: E().run,
                  initial: { opacity: 0 },
                  animate: { opacity: 1, transition: O },
                  exit: { opacity: 0, transition: { duration: 0.12, ease: z } },
                  children: eo ? (0, n.jsxs)("div", {
                    className: E().empty,
                    children: [
                      (0, n.jsx)("span", {
                        className: E().modelMark,
                        children: et2.mark ?? (0, n.jsx)(j, { "aria-hidden": "true" })
                      }),
                      (0, n.jsxs)("p", {
                        className: E().emptyTitle,
                        children: [
                          "Ask the ",
                          et2.name.toLowerCase(),
                          " anything"
                        ]
                      }),
                      (0, n.jsx)("p", {
                        className: E().emptyMeta,
                        children: "A person from the team can join at any time."
                      })
                    ]
                  }) : (0, n.jsx)(Q, {
                    reduced: V2,
                    children: (0, n.jsx)("ol", {
                      className: E().thread,
                      children: (0, n.jsx)(i.N, {
                        initial: false,
                        children: ei.map((a3, t3) => {
                          var s2;
                          return (0, n.jsx)(
                            q,
                            {
                              row: a3,
                              gap: (s2 = ei[t3 - 1]) ? D(a3) || "handoff" === a3.kind || "handoff" === s2.kind ? 16 : D(s2) ? 8 : B(a3) === B(s2) ? 4 : 12 : 0,
                              travel: "handoff" === a3.kind && "transferring" === e2 && !V2,
                              children: ((a4) => {
                                switch (a4.kind) {
                                  case "assistant-node":
                                    return (0, n.jsx)(F, {
                                      mark: (0, n.jsx)("span", {
                                        className: E().modelMark,
                                        children: et2.mark ?? (0, n.jsx)(j, {
                                          "aria-hidden": "true"
                                        })
                                      }),
                                      title: et2.name,
                                      meta: et2.model,
                                      time: el
                                    });
                                  case "agent-node":
                                    return (0, n.jsx)(F, {
                                      mark: (0, n.jsx)(x.e, {
                                        name: es2.name,
                                        src: es2.avatar,
                                        size: "sm",
                                        className: E().nodeAvatar
                                      }),
                                      title: `${es2.name} joined`,
                                      meta: es2.role,
                                      time: es2.joinedAt
                                    });
                                  case "resolved-node":
                                    return (0, n.jsx)(F, {
                                      mark: (0, n.jsx)(c.A, {
                                        className: E().resolvedIcon,
                                        "aria-hidden": "true"
                                      }),
                                      title: "Resolved",
                                      meta: `by ${es2.name}`
                                    });
                                  case "message":
                                    return (0, n.jsx)(Z, {
                                      message: a4.message,
                                      reduced: V2
                                    });
                                  case "typing":
                                    return "assistant" === a4.who ? (0, n.jsx)("div", {
                                      className: E().thinking,
                                      children: (0, n.jsx)(w.n, {
                                        duration: 1.4,
                                        children: "Thinking"
                                      })
                                    }) : (0, n.jsxs)("div", {
                                      className: E().bubble,
                                      "data-from": "agent",
                                      "data-typing": "",
                                      role: "img",
                                      "aria-label": `${er} is typing`,
                                      children: [
                                        (0, n.jsx)("i", {}),
                                        (0, n.jsx)("i", {}),
                                        (0, n.jsx)("i", {})
                                      ]
                                    });
                                  case "ask":
                                    return (0, n.jsx)("div", {
                                      className: E().askRow,
                                      children: (0, n.jsxs)("button", {
                                        type: "button",
                                        className: E().ask,
                                        onClick: C2,
                                        children: [
                                          (0, n.jsx)(m, {
                                            "aria-hidden": "true"
                                          }),
                                          "Talk to a person"
                                        ]
                                      })
                                    });
                                  case "handoff":
                                    return (0, n.jsx)(U, {
                                      stage: e2,
                                      summary: d2,
                                      desk: en2,
                                      personName: es2.name,
                                      replyEstimate: p2,
                                      onCancel: M2,
                                      onRetry: T2
                                    });
                                }
                              })(a3)
                            },
                            a3.key
                          );
                        })
                      })
                    })
                  })
                },
                L2
              )
            })
          })
        }),
        k2 && (0, n.jsx)(J, {
          stage: e2,
          name: er,
          assistantName: et2.name,
          placeholder: I2,
          onSend: k2
        }),
        (0, n.jsx)("p", {
          className: E().srOnly,
          role: "status",
          "aria-live": "polite",
          children: S2
        })
      ]
    });
  }
  function q({ row: e2, gap: a2, travel: t2, children: s2 }) {
    let r2 = D(e2) || "handoff" === e2.kind;
    return (0, n.jsxs)(o.PY1.li, {
      className: E().row,
      "data-kind": e2.kind,
      "data-node": r2 || void 0,
      style: { paddingTop: a2, "--gap": `${a2}px` },
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: O,
      children: [
        (0, n.jsx)("div", {
          className: E().gutter,
          "aria-hidden": "true",
          children: t2 && (0, n.jsx)("span", {
            className: E().travel,
            children: (0, n.jsx)("i", {})
          })
        }),
        (0, n.jsx)("div", { className: E().body, children: s2 })
      ]
    });
  }
  function F({ mark: e2, title: a2, meta: t2, time: s2 }) {
    return (0, n.jsxs)("div", {
      className: E().node,
      children: [
        (0, n.jsx)("span", { className: E().nodeMark, children: e2 }),
        (0, n.jsxs)("span", {
          className: E().nodeText,
          children: [
            (0, n.jsx)("span", { className: E().nodeTitle, children: a2 }),
            t2 && (0, n.jsx)("span", { className: E().nodeMeta, children: t2 })
          ]
        }),
        s2 && (0, n.jsx)("time", { className: E().time, children: s2 })
      ]
    });
  }
  function Z({ message: e2, reduced: a2 }) {
    return (0, n.jsx)("div", {
      className: E().bubble,
      "data-from": e2.from,
      "data-streaming": e2.streaming || void 0,
      children: (0, n.jsx)(G, { text: e2.text, streaming: !!e2.streaming && !a2 })
    });
  }
  function G({ text: e2, streaming: a2 }) {
    let [t2, r2] = (0, s.useState)(() => ({ seen: e2, chunks: e2 ? [e2] : [] })), i2 = t2.chunks;
    return (t2.seen !== e2 && (i2 = e2.startsWith(t2.seen) ? [...t2.chunks, e2.slice(t2.seen.length)] : [e2], r2({ seen: e2, chunks: i2 })), a2) ? (0, n.jsx)(n.Fragment, {
      children: i2.map(
        (e3, a3) => (0, n.jsx)("span", { className: E().chunk, children: e3 }, a3)
      )
    }) : (0, n.jsx)(n.Fragment, { children: e2 });
  }
  function U({
    stage: e2,
    summary: a2,
    desk: t2,
    personName: r2,
    replyEstimate: l2,
    onCancel: d2,
    onRetry: h2
  }) {
    let [u2, m2] = (0, s.useState)(true), f2 = "transferring" === e2 ? {
      key: "transferring",
      title: (0, n.jsx)(w.n, {
        duration: 1.6,
        children: "Transferring to a person"
      }),
      meta: `${t2.name} \xB7 typical reply in ${l2}`
    } : "unavailable" === e2 ? {
      key: "unavailable",
      title: "No one is available right now",
      meta: `${t2.name} \xB7 the team replies by email`
    } : {
      key: "done",
      title: `Transferred to ${r2}`,
      meta: `${t2.name} \xB7 summary read`
    }, y2 = "transferring" === e2 && d2 ? (0, n.jsx)(
      b.$,
      {
        variant: "secondary",
        size: "sm",
        onClick: d2,
        children: "Cancel"
      },
      "cancel"
    ) : "unavailable" === e2 && h2 ? (0, n.jsx)(
      b.$,
      {
        variant: "primary",
        size: "sm",
        onClick: h2,
        children: "Try again"
      },
      "retry"
    ) : null, v2 = (0, s.useId)();
    return (0, n.jsxs)("div", {
      className: E().handoff,
      children: [
        (0, n.jsx)("span", {
          className: E().deskMark,
          "aria-hidden": "true",
          children: t2.mark
        }),
        (0, n.jsxs)("section", {
          className: E().card,
          "aria-label": "Handoff to a person",
          children: [
            (0, n.jsxs)("div", {
              className: E().cardHead,
              children: [
                (0, n.jsx)("div", {
                  className: E().cardStatus,
                  children: (0, n.jsx)(i.N, {
                    mode: "popLayout",
                    initial: false,
                    children: (0, n.jsxs)(
                      o.PY1.div,
                      {
                        className: E().cardStatusInner,
                        ...W,
                        children: [
                          (0, n.jsxs)("span", {
                            className: E().cardTitle,
                            children: [
                              "unavailable" === e2 && (0, n.jsx)(g.A, {
                                className: E().warnIcon,
                                "aria-hidden": "true"
                              }),
                              ("connected" === e2 || "resolved" === e2) && (0, n.jsx)(c.A, {
                                className: E().okIcon,
                                "aria-hidden": "true"
                              }),
                              f2.title
                            ]
                          }),
                          (0, n.jsx)("span", {
                            className: E().cardMeta,
                            children: f2.meta
                          })
                        ]
                      },
                      f2.key
                    )
                  })
                }),
                (0, n.jsx)("div", {
                  className: E().cardAction,
                  children: (0, n.jsx)(i.N, {
                    mode: "popLayout",
                    initial: false,
                    children: y2 && (0, n.jsx)(o.PY1.div, { ...W, children: y2 }, y2.key)
                  })
                })
              ]
            }),
            a2 && (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsxs)("button", {
                  type: "button",
                  className: E().summaryToggle,
                  "aria-expanded": u2,
                  "aria-controls": v2,
                  onClick: () => m2((e3) => !e3),
                  children: [
                    (0, n.jsx)("span", {
                      children: "Summary shared with the team"
                    }),
                    (0, n.jsx)(p.A, {
                      className: E().chevron,
                      "data-open": u2 || void 0,
                      "aria-hidden": "true"
                    })
                  ]
                }),
                (0, n.jsx)(i.N, {
                  initial: false,
                  children: u2 && (0, n.jsxs)(o.PY1.div, {
                    id: v2,
                    className: E().summary,
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: O,
                    children: [
                      (0, n.jsx)("p", {
                        className: E().issue,
                        children: a2.issue
                      }),
                      !!a2.fields?.length && (0, n.jsx)("dl", {
                        className: E().fields,
                        children: a2.fields.map(
                          (e3) => (0, n.jsxs)(
                            "div",
                            {
                              className: E().field,
                              children: [
                                (0, n.jsx)("dt", { children: e3.label }),
                                (0, n.jsx)("dd", { children: e3.value })
                              ]
                            },
                            e3.label
                          )
                        )
                      })
                    ]
                  })
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function K({ stage: e2, name: a2 }) {
    let t2 = {
      assistant: {
        icon: (0, n.jsx)(y.A, { "aria-hidden": "true" }),
        label: "Assistant"
      },
      transferring: {
        icon: (0, n.jsx)(v.A, { className: E().spin, "aria-hidden": "true" }),
        label: "Transferring"
      },
      connected: {
        icon: (0, n.jsx)(m, { "aria-hidden": "true" }),
        label: `With ${a2}`
      },
      resolved: {
        icon: (0, n.jsx)(c.A, { className: E().okIcon, "aria-hidden": "true" }),
        label: "Resolved"
      },
      unavailable: {
        icon: (0, n.jsx)(g.A, {
          className: E().warnIcon,
          "aria-hidden": "true"
        }),
        label: "No one available"
      }
    }[e2];
    return (0, n.jsx)("span", {
      className: E().chip,
      children: (0, n.jsx)(i.N, {
        mode: "popLayout",
        initial: false,
        children: (0, n.jsxs)(
          o.PY1.span,
          { className: E().chipInner, ...W, children: [t2.icon, t2.label] },
          e2
        )
      })
    });
  }
  function J({
    stage: e2,
    name: a2,
    assistantName: t2,
    placeholder: r2,
    onSend: i2
  }) {
    let [o2, l2] = (0, s.useState)(""), d2 = r2 ?? {
      assistant: `Message the ${t2.toLowerCase()}`,
      transferring: "Add details for the team",
      connected: `Message ${a2}`,
      resolved: `Reply to ${a2}`,
      unavailable: "Leave a message for the team"
    }[e2];
    return (0, n.jsxs)("form", {
      className: E().composer,
      onSubmit: (e3) => {
        e3.preventDefault();
        let a3 = o2.trim();
        a3 && (i2(a3), l2(""));
      },
      children: [
        (0, n.jsx)("input", {
          className: E().input,
          value: o2,
          onChange: (e3) => l2(e3.target.value),
          placeholder: d2,
          "aria-label": "Message",
          enterKeyHint: "send",
          autoComplete: "off"
        }),
        (0, n.jsx)(b.$, {
          type: "submit",
          variant: "primary",
          size: "sm",
          className: E().send,
          "aria-label": "Send",
          disabled: !o2.trim(),
          children: (0, n.jsx)(_.A, { "aria-hidden": "true" })
        })
      ]
    });
  }
  function Q({ children: e2, reduced: a2 }) {
    let t2 = (0, s.useRef)(null), r2 = (0, l.d)("auto");
    return (0, s.useLayoutEffect)(() => {
      let e3, n2 = t2.current;
      if (!n2 || "u" < typeof ResizeObserver) return;
      let s2 = true, i2 = new ResizeObserver(() => {
        let t3 = n2.offsetHeight;
        if (s2 || a2) {
          e3?.stop(), r2.set(t3), s2 = false;
          return;
        }
        e3?.stop(), e3 = (0, d.i)(r2, t3, L);
      });
      return i2.observe(n2), () => {
        i2.disconnect(), e3?.stop();
      };
    }, [r2, a2]), (0, n.jsx)(o.PY1.div, {
      className: E().clip,
      style: { height: r2 },
      children: (0, n.jsx)("div", { ref: t2, children: e2 })
    });
  }
  var X = t(66558), ee = t(48734), ea = t.n(ee);
  let et = [
    { value: "handoff", label: "Person joins" },
    { value: "unavailable", label: "No one available" }
  ];
  function en() {
    let [e2, a2] = (0, s.useState)("handoff");
    return (0, n.jsxs)("div", {
      className: ea().demo,
      children: [
        (0, n.jsx)(X.A, {
          options: et,
          value: e2,
          onValueChange: (e3) => a2(e3),
          label: "Demo story"
        }),
        (0, n.jsx)(H, { scenario: e2 })
      ]
    });
  }
  let es = en;
}

__m(__module,__exports,__require);
});
A.regCss(82930, ".agent-handoff_root__2RaBb{--rail:28px;--rail-x:13.5px;--bubble-max:min(85%,440px);display:flex;flex-direction:column;width:100%;max-width:560px;height:var(--handoff-height,600px);overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-size:14px;line-height:20px}.agent-handoff_root__2RaBb svg{flex:none}.agent-handoff_header__7FnbH{display:flex;align-items:center;gap:12px;min-height:64px;padding:12px 12px 12px 20px;border-bottom:1px solid var(--border-subtle)}.agent-handoff_logo__nIsxZ{display:grid;flex:none;place-items:center;color:var(--foreground)}.agent-handoff_logo__nIsxZ svg{width:28px;height:28px}.agent-handoff_heading__DeRSy{display:grid;min-width:0}.agent-handoff_subtitle__J9BsQ,.agent-handoff_title__32WQw{overflow:hidden;margin:0;white-space:nowrap;text-overflow:ellipsis}.agent-handoff_title__32WQw{font-size:14px;line-height:20px;font-weight:500}.agent-handoff_subtitle__J9BsQ{color:var(--text-muted);font-size:12px;line-height:16px}.agent-handoff_headerEnd__qmgLM{display:flex;flex:none;align-items:center;gap:4px;margin-left:auto}.agent-handoff_headerEnd__qmgLM button svg{width:14px;height:14px}.agent-handoff_chip__dR0Xh{position:relative;display:inline-flex;justify-content:flex-end;height:32px;align-items:center;padding-inline:4px;color:var(--text-secondary);font-size:12px;line-height:16px}.agent-handoff_chipInner__OYC2D{display:inline-flex;align-items:center;gap:6px;white-space:nowrap}.agent-handoff_chip__dR0Xh svg{width:14px;height:14px}.agent-handoff_scroll__2xgfO{display:flex;flex:1;flex-direction:column-reverse;min-height:0;overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:var(--border) transparent}.agent-handoff_fill__UeUb_,.agent-handoff_run__ykxcK{display:flex;flex:1 0 auto;flex-direction:column}.agent-handoff_clip__gKb2C{overflow:hidden}.agent-handoff_thread__xslYe{margin:0;padding:20px 20px 20px 12px;list-style:none}.agent-handoff_row__ckEUG{position:relative;display:grid;grid-template-columns:var(--rail) minmax(0,1fr);column-gap:12px}.agent-handoff_row__ckEUG:before{content:\"\";position:absolute;top:0;bottom:0;left:var(--rail-x);width:1px;background:var(--border)}.agent-handoff_row__ckEUG:first-child:before{top:14px}.agent-handoff_row__ckEUG[data-kind=handoff]:first-child:before{top:22px}.agent-handoff_row__ckEUG:last-child[data-kind$=-node]:before{bottom:14px}.agent-handoff_gutter__zZCIp{position:relative}.agent-handoff_body__jw8Zv{min-width:0}.agent-handoff_node__t0oSA{display:flex;align-items:center;gap:8px;min-height:28px}.agent-handoff_deskMark__LobOG,.agent-handoff_nodeMark__44qxR{position:absolute;left:4px;display:grid;width:20px;height:20px;place-items:center;border-radius:var(--radius-pill,999px);background:var(--surface)}.agent-handoff_nodeMark__44qxR{top:calc(var(--gap) + 4px)}.agent-handoff_deskMark__LobOG{top:calc(var(--gap) + 13px);color:var(--foreground)}.agent-handoff_deskMark__LobOG svg,.agent-handoff_nodeMark__44qxR svg{width:14px;height:14px}.agent-handoff_nodeMark__44qxR .agent-handoff_nodeAvatar__cEXyH{width:20px;height:20px;min-width:20px;font-size:9px}.agent-handoff_modelMark__fgWF3{display:inline-grid;place-items:center;color:#d97757}.agent-handoff_okIcon__NhZQk,.agent-handoff_resolvedIcon__gjNqz{color:var(--success)}.agent-handoff_warnIcon__YhIA0{color:var(--warning)}.agent-handoff_nodeText__QneCI{display:flex;min-width:0;flex:1;align-items:baseline;gap:6px;font-size:12px;line-height:16px}.agent-handoff_nodeTitle__wT8Az{flex:none;font-weight:500}.agent-handoff_nodeMeta__hD53k{overflow:hidden;min-width:0;color:var(--text-muted);white-space:nowrap;text-overflow:ellipsis}.agent-handoff_time__f5ky4{flex:none;margin-left:auto;font-variant-numeric:tabular-nums;color:var(--text-muted);font-size:12px;line-height:16px}.agent-handoff_bubble__QsBoz{width:fit-content;max-width:var(--bubble-max);min-height:36px;padding:8px 12px;border-radius:var(--radius-control);background:var(--surface-muted);color:var(--foreground);overflow-wrap:anywhere}.agent-handoff_bubble__QsBoz[data-from=customer]{margin-left:auto;background:var(--accent);color:var(--accent-foreground)}.agent-handoff_bubble__QsBoz[data-streaming]{width:var(--bubble-max)}.agent-handoff_chunk__7iHYj{animation:agent-handoff_handoff-chunk__LT6S1 .14s ease-out both}.agent-handoff_thinking__m1eqS{min-height:36px;padding:8px 12px;color:var(--text-muted)}.agent-handoff_bubble__QsBoz[data-typing]{display:flex;align-items:center;gap:4px}.agent-handoff_bubble__QsBoz[data-typing] i{width:6px;height:6px;border-radius:50%;background:var(--text-muted);animation:agent-handoff_handoff-dot__B_g8V 1s ease-in-out infinite}.agent-handoff_bubble__QsBoz[data-typing] i:nth-child(2){animation-delay:.15s}.agent-handoff_bubble__QsBoz[data-typing] i:nth-child(3){animation-delay:.3s}.agent-handoff_askRow__ckmSp{display:flex;justify-content:flex-end}.agent-handoff_ask__R0e7e{display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 14px 0 12px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);color:var(--foreground);font:inherit;cursor:pointer;transition:background-color .12s ease-out,transform .12s ease-out}.agent-handoff_ask__R0e7e svg{width:14px;height:14px;color:var(--text-secondary)}.agent-handoff_ask__R0e7e:hover{background:var(--surface-muted)}.agent-handoff_ask__R0e7e:active{transform:scale(.98)}.agent-handoff_card__fO1WI{overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface)}.agent-handoff_cardHead__3Ng8y{display:flex;align-items:center;gap:12px;min-height:62px;padding:12px 12px 12px 16px}.agent-handoff_cardStatus__d35mI{position:relative;flex:1;min-width:0}.agent-handoff_cardStatusInner__nRhig{display:grid;min-width:0}.agent-handoff_cardTitle__5T7tc{display:flex;align-items:center;gap:6px;overflow:hidden;min-width:0;font-weight:500;white-space:nowrap}.agent-handoff_cardTitle__5T7tc svg{width:14px;height:14px}.agent-handoff_cardMeta__nLKMx{overflow:hidden;color:var(--text-muted);font-size:12px;line-height:16px;white-space:nowrap;text-overflow:ellipsis}.agent-handoff_cardAction__Pp5yP{position:relative;display:flex;flex:none;justify-content:flex-end}.agent-handoff_summaryToggle__0RwyG{display:flex;width:100%;align-items:center;justify-content:space-between;gap:8px;padding:8px 12px 8px 16px;border:0;border-top:1px solid var(--border-subtle);background:transparent;color:var(--text-secondary);font:inherit;font-size:12px;line-height:16px;font-weight:500;text-align:left;cursor:pointer;transition:color .12s ease-out,background-color .12s ease-out}.agent-handoff_summaryToggle__0RwyG:hover{background:color-mix(in oklab,var(--surface-muted) 60%,transparent);color:var(--foreground)}.agent-handoff_chevron__w8kUc{width:14px;height:14px;transition:transform .2s cubic-bezier(.22,1,.36,1)}.agent-handoff_chevron__w8kUc[data-open]{transform:rotate(180deg)}.agent-handoff_summary__FwB38{padding:0 16px 16px}.agent-handoff_issue__WTngT{margin:0;color:var(--foreground)}.agent-handoff_fields__xvbQV{display:grid;gap:4px;margin:12px 0 0}.agent-handoff_field__L84de{display:grid;grid-template-columns:64px minmax(0,1fr);gap:12px;font-size:12px;line-height:16px}.agent-handoff_field__L84de dt{color:var(--text-muted)}.agent-handoff_field__L84de dd{margin:0;color:var(--text-secondary)}.agent-handoff_travel__4ZejE{position:absolute;top:32px;right:0;bottom:0;left:0;overflow:hidden}.agent-handoff_travel__4ZejE i{position:absolute;inset:0;animation:agent-handoff_handoff-travel__50T9J 1.4s cubic-bezier(.65,0,.35,1) infinite}.agent-handoff_travel__4ZejE i:after{content:\"\";position:absolute;bottom:0;left:calc(var(--rail-x) - 2px);width:5px;height:5px;border-radius:50%;background:var(--accent)}.agent-handoff_empty__xk5S0{display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;gap:4px;padding:24px;text-align:center}.agent-handoff_empty__xk5S0 .agent-handoff_modelMark__fgWF3 svg{width:20px;height:20px;margin-bottom:8px}.agent-handoff_emptyMeta___4lOI,.agent-handoff_emptyTitle__2wtOV{margin:0}.agent-handoff_emptyTitle__2wtOV{font-weight:500}.agent-handoff_emptyMeta___4lOI{color:var(--text-muted);font-size:12px;line-height:16px}.agent-handoff_composer__YTarO{display:flex;align-items:center;gap:8px;height:42px;margin:12px;padding:0 4px 0 16px;border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface);transition:border-color .12s ease-out}.agent-handoff_composer__YTarO:focus-within{border-color:var(--border-strong,var(--text-muted))}.agent-handoff_input__I_X7Z{flex:1;min-width:0;height:100%;border:0;outline:none;background:transparent;color:var(--foreground);font:inherit}.agent-handoff_input__I_X7Z::placeholder{color:var(--text-muted)}.agent-handoff_composer__YTarO .agent-handoff_send__8EOqE{width:32px;min-width:32px;padding:0;border-radius:14px}.agent-handoff_send__8EOqE svg{width:16px;height:16px}.agent-handoff_spin__SmYIv{animation:agent-handoff_handoff-spin__NNGBQ 1s linear infinite}.agent-handoff_srOnly___Do8j{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}.agent-handoff_root__2RaBb[data-paused] *,.agent-handoff_root__2RaBb[data-paused] :after{animation-play-state:paused!important}@keyframes agent-handoff_handoff-chunk__LT6S1{0%{opacity:0}}@keyframes agent-handoff_handoff-dot__B_g8V{0%,to{opacity:.3}40%{opacity:1}}@keyframes agent-handoff_handoff-spin__NNGBQ{to{transform:rotate(1turn)}}@keyframes agent-handoff_handoff-travel__50T9J{0%{transform:translateY(-100%);opacity:0}15%{opacity:1}80%{opacity:1}to{transform:translateY(0);opacity:0}}@media (max-width:420px){.agent-handoff_header__7FnbH{padding-left:16px}}@media (max-width:420px){.agent-handoff_thread__xslYe{padding:16px 16px 16px 8px}}@media (max-width:420px){.agent-handoff_root__2RaBb{--bubble-max:88%}}@media (prefers-reduced-motion:reduce){.agent-handoff_bubble__QsBoz[data-typing] i,.agent-handoff_chunk__7iHYj,.agent-handoff_spin__SmYIv,.agent-handoff_travel__4ZejE{animation:none}}@media (prefers-reduced-motion:reduce){.agent-handoff_ask__R0e7e,.agent-handoff_chevron__w8kUc,.agent-handoff_summaryToggle__0RwyG{transition:none}}", {"root":"agent-handoff_root__2RaBb","header":"agent-handoff_header__7FnbH","logo":"agent-handoff_logo__nIsxZ","heading":"agent-handoff_heading__DeRSy","title":"agent-handoff_title__32WQw","subtitle":"agent-handoff_subtitle__J9BsQ","headerEnd":"agent-handoff_headerEnd__qmgLM","chip":"agent-handoff_chip__dR0Xh","chipInner":"agent-handoff_chipInner__OYC2D","scroll":"agent-handoff_scroll__2xgfO","fill":"agent-handoff_fill__UeUb_","run":"agent-handoff_run__ykxcK","clip":"agent-handoff_clip__gKb2C","thread":"agent-handoff_thread__xslYe","row":"agent-handoff_row__ckEUG","gutter":"agent-handoff_gutter__zZCIp","body":"agent-handoff_body__jw8Zv","node":"agent-handoff_node__t0oSA","nodeMark":"agent-handoff_nodeMark__44qxR","deskMark":"agent-handoff_deskMark__LobOG","nodeAvatar":"agent-handoff_nodeAvatar__cEXyH","modelMark":"agent-handoff_modelMark__fgWF3","resolvedIcon":"agent-handoff_resolvedIcon__gjNqz","okIcon":"agent-handoff_okIcon__NhZQk","warnIcon":"agent-handoff_warnIcon__YhIA0","nodeText":"agent-handoff_nodeText__QneCI","nodeTitle":"agent-handoff_nodeTitle__wT8Az","nodeMeta":"agent-handoff_nodeMeta__hD53k","time":"agent-handoff_time__f5ky4","bubble":"agent-handoff_bubble__QsBoz","chunk":"agent-handoff_chunk__7iHYj","handoff-chunk":"agent-handoff_handoff-chunk__LT6S1","thinking":"agent-handoff_thinking__m1eqS","handoff-dot":"agent-handoff_handoff-dot__B_g8V","askRow":"agent-handoff_askRow__ckmSp","ask":"agent-handoff_ask__R0e7e","card":"agent-handoff_card__fO1WI","cardHead":"agent-handoff_cardHead__3Ng8y","cardStatus":"agent-handoff_cardStatus__d35mI","cardStatusInner":"agent-handoff_cardStatusInner__nRhig","cardTitle":"agent-handoff_cardTitle__5T7tc","cardMeta":"agent-handoff_cardMeta__nLKMx","cardAction":"agent-handoff_cardAction__Pp5yP","summaryToggle":"agent-handoff_summaryToggle__0RwyG","chevron":"agent-handoff_chevron__w8kUc","summary":"agent-handoff_summary__FwB38","issue":"agent-handoff_issue__WTngT","fields":"agent-handoff_fields__xvbQV","field":"agent-handoff_field__L84de","travel":"agent-handoff_travel__4ZejE","handoff-travel":"agent-handoff_handoff-travel__50T9J","empty":"agent-handoff_empty__xk5S0","emptyTitle":"agent-handoff_emptyTitle__2wtOV","emptyMeta":"agent-handoff_emptyMeta___4lOI","composer":"agent-handoff_composer__YTarO","input":"agent-handoff_input__I_X7Z","send":"agent-handoff_send__8EOqE","spin":"agent-handoff_spin__SmYIv","handoff-spin":"agent-handoff_handoff-spin__NNGBQ","srOnly":"agent-handoff_srOnly___Do8j"});
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
A.cssFor("agent-handoff", [48734,82930]);
A.item("agent-handoff", {entry:82113, export:"AgentHandoffDemo", kind:"component", tier:"pro", unresolved:[]});
})();