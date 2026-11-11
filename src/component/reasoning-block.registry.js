/* reasoning-block (pro component) */
(function(){var A=globalThis.__ARC__;
A.reg(12238, function(__module,__exports,__require){
"use strict";
function __m(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { ReasoningBlockDemo: () => G, default: () => U });
  var a = n(95155), i = n(12115), r = n(28245), s = n(92171), o = n(25354), l = n(80642), c = n(18310), d = n(61792), u = n(60340), h = n(35484), p = n(40852), m = n(12363), f = n(64577), g = n(51288), y = n(73474), x = n(52898), v = n(7770);
  let b = [
    {
      model: "Claude Opus 5.5",
      steps: [
        {
          title: "Reading the webhook handler",
          text: "The handler in api/billing/webhook.ts verifies the signature, then calls fulfillOrder for every invoice.paid event. Nothing records which events were already handled, so a redelivered event runs the whole path a second time."
        },
        {
          title: "Checking when Stripe retries",
          text: "Stripe redelivers an event when the endpoint times out or answers with an error. The logs for Oct 23 show fulfillOrder taking 11.4s on average, because the PDF receipt renders inline before the handler responds."
        },
        {
          title: "Tracing the second charge",
          text: "All 37 double charges line up with a redelivery. Each retry calls createUsageCharge again with an idempotency key built from Date.now(), so Stripe sees a brand new request instead of a repeat."
        },
        {
          title: "Choosing a fix",
          text: "Record event.id in processed_events inside the same transaction, derive the idempotency key from the invoice id, and move the receipt render to a queue so the handler answers in well under a second."
        }
      ]
    },
    {
      model: "Claude Sonnet 5.5",
      steps: [
        {
          title: "Checking calendars",
          text: "Of the 14 people invited to the Zurich offsite, 11 are free on Nov 12. Priya Raman and Marco Bianchi are at KubeCon that week, and Lena Vogel is out until Nov 14."
        },
        {
          title: "Comparing venue options",
          text: "Kraftwerk holds the main room until Oct 31 for CHF 4,200. Moving the date keeps the price, but it needs a fresh deposit of CHF 800 by Friday."
        },
        {
          title: "Weighing the trade off",
          text: "Nov 19 works for all 14 people and the room is free that day. One extra week costs nothing and keeps Priya, who runs the roadmap session the offsite is built around."
        },
        {
          title: "Drafting the answer",
          text: "Recommend Nov 19, name the three people Nov 12 would leave out, and offer to send the calendar update and the venue email together."
        }
      ]
    },
    {
      model: "Claude Fable 5.1",
      steps: [
        {
          title: "Splitting churn by plan",
          text: "Team churn rose from 2.1% in August to 3.4% in September, while Pro and Enterprise stayed flat. The spike sits in one plan, not across the whole base."
        },
        {
          title: "Lining it up with releases",
          text: "Seat based pricing shipped on Sep 9. Of the 61 Team accounts that cancelled, 44 had five or more inactive seats and saw their invoice grow by at least 30%."
        },
        {
          title: "Reading the exit survey",
          text: "Price is the top reason at 52%, and 18 responses mention paying for seats nobody uses. Only 4 mention a competitor by name."
        },
        {
          title: "Forming the answer",
          text: "The spike is mostly the pricing change landing on accounts with idle seats. Suggest removing seats inactive for 60 days automatically and emailing the 112 Team accounts that match the same pattern."
        }
      ]
    }
  ];
  function _({ title: e2 = "Claude", mono: t2 = false, ...n2 }) {
    return (0, a.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: t2 ? "currentColor" : "#D97757",
      role: "img",
      "aria-label": e2,
      ...n2,
      children: (0, a.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  var k = n(60530), j = n.n(k);
  let w = (...e2) => e2.filter(Boolean).join(" "), N = { name: "Claude Opus 5.5" };
  function T(e2) {
    let t2 = Math.max(0, Math.round(e2));
    return t2 < 60 ? `${t2}s` : `${Math.floor(t2 / 60)}m ${t2 % 60}s`;
  }
  let C = /^(?:\*\*(.+?)\*\*:?|#{1,4}\s+(.+))\s*$/, S = /^\*\*([^*\n]*)\*?$/, R = (e2) => e2 ? e2.split(/\n{2,}/) : [], A = { type: "spring", visualDuration: 0.26, bounce: 0 }, E = (e2) => e2 ? { duration: 0 } : {
    height: A,
    opacity: {
      duration: v.T.duration.fast,
      ease: [...v.T.ease.standard]
    }
  }, $ = { duration: v.T.duration.fast, ease: [...v.T.ease.enter] }, L = { duration: 0.1, ease: [...v.T.ease.standard] };
  function M({ text: e2, live: t2, enter: n2 = false }) {
    let [r2, s2] = (0, i.useState)(() => ({
      text: e2,
      cuts: [{ at: 0, fade: t2 && n2 }]
    })), o2 = r2;
    return r2.text !== e2 && s2(
      o2 = t2 && e2.length > r2.text.length && e2.startsWith(r2.text) ? { text: e2, cuts: [...r2.cuts, { at: r2.text.length, fade: true }] } : { text: e2, cuts: [{ at: 0, fade: t2 && !r2.text }] }
    ), (0, a.jsx)(a.Fragment, {
      children: o2.cuts.map((t3, n3) => {
        let r3 = e2.slice(t3.at, o2.cuts[n3 + 1]?.at ?? e2.length);
        return t3.fade ? (0, a.jsx)("span", { className: j().chunk, children: r3 }, n3) : (0, a.jsx)(i.Fragment, { children: r3 }, n3);
      })
    });
  }
  function O({ text: e2, reduced: t2 }) {
    let n2 = (0, i.useRef)(null), l2 = (0, i.useRef)(null), c2 = (0, r.d)(0), [d2, u2] = (0, i.useState)(false);
    return (0, i.useEffect)(() => {
      let e3, a2 = n2.current, i2 = l2.current;
      if (!a2 || !i2 || "u" < typeof ResizeObserver) return;
      let r2 = Math.max(0, i2.offsetHeight - a2.clientHeight), o2 = i2.offsetWidth, d3 = new ResizeObserver(() => {
        let n3 = Math.max(0, i2.offsetHeight - a2.clientHeight), l3 = i2.offsetWidth !== o2;
        o2 = i2.offsetWidth;
        let d4 = n3 - r2;
        r2 = n3, u2(n3 > 0), d4 <= 0 || t2 || l3 || (e3?.stop(), c2.jump(c2.get() + d4), i2.style.transform = `translateY(${c2.get()}px)`, e3 = (0, s.i)(c2, 0, {
          type: "spring",
          visualDuration: 0.24,
          bounce: 0
        }));
      });
      return d3.observe(i2), () => {
        d3.disconnect(), e3?.stop();
      };
    }, [t2, c2]), (0, a.jsx)("div", {
      ref: n2,
      className: j().liveSlot,
      "data-overflow": d2 || void 0,
      children: (0, a.jsx)(o.PY1.div, {
        ref: l2,
        className: j().liveTail,
        style: { y: c2 },
        children: (0, a.jsx)(M, { text: e2, live: true })
      })
    });
  }
  function W({ seconds: e2, reduced: t2 }) {
    let n2 = T(e2);
    return (0, a.jsx)("span", {
      className: j().counter,
      "aria-hidden": "true",
      children: (0, a.jsx)(l.N, {
        initial: false,
        children: (0, a.jsx)(
          o.PY1.span,
          {
            className: j().counterValue,
            initial: t2 ? { opacity: 0 } : { opacity: 0, y: 4 },
            animate: { opacity: 1, y: 0, transition: t2 ? { duration: 0 } : $ },
            exit: t2 ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -4, transition: L },
            children: n2
          },
          n2
        )
      })
    });
  }
  let z = (e2) => ({
    scene: e2,
    step: 0,
    words: 0,
    ms: 0,
    status: "thinking",
    phase: "wait",
    open: false,
    touched: false
  }), F = b.map((e2) => e2.steps.map((e3) => e3.text.split(" "))), I = () => 3 + Math.floor(6 * Math.random());
  function P({
    reasoning: e2,
    status: t2,
    seconds: n2,
    model: r2,
    open: s2,
    defaultOpen: f2 = false,
    onOpenChange: y2,
    onStop: v2,
    onRetry: k2,
    error: R2,
    variant: M2 = "card",
    className: Y2
  }) {
    let B2 = (0, i.useRef)(null), q2 = (0, c.I)() ?? false, V2 = (0, d.W)(B2, { margin: "80px" }), K2 = (0, u.h)(), H2 = void 0 === e2 && void 0 === t2, G2 = (function(e3, t3) {
      let [n3, a2] = (0, i.useState)(() => z(0));
      (0, i.useEffect)(() => {
        let i2;
        if (!e3 || !t3) return;
        let r4 = F[n3.scene], s3 = (e4) => z((e4 + 1) % b.length), o2 = 0;
        switch (n3.phase) {
          case "wait":
            o2 = 900, i2 = (e4) => ({ ...e4, phase: "stream", words: I() });
            break;
          case "stream":
            o2 = 30 + Math.floor(10 * Math.random()), i2 = (e4) => {
              let t4 = r4[e4.step].length, n4 = Math.min(t4, e4.words + I());
              return n4 < t4 ? { ...e4, words: n4 } : e4.step === r4.length - 1 ? { ...e4, words: n4, status: "done", phase: "settle" } : { ...e4, words: n4, phase: "pause" };
            };
            break;
          case "pause":
            o2 = 780, i2 = (e4) => ({
              ...e4,
              step: e4.step + 1,
              words: I(),
              phase: "stream"
            });
            break;
          case "settle":
            o2 = 1100, i2 = (e4) => e4.touched ? { ...e4, phase: "hold" } : { ...e4, open: true, phase: "reveal" };
            break;
          case "reveal":
            o2 = 4600, i2 = (e4) => e4.touched ? { ...e4, phase: "hold" } : { ...e4, open: false, phase: "rest" };
            break;
          case "rest":
            o2 = 900, i2 = (e4) => e4.touched ? { ...e4, phase: "hold" } : s3(e4.scene);
            break;
          case "hold":
          case "stopped":
            if (n3.open) return;
            o2 = "stopped" === n3.phase ? 2800 : 2400, i2 = (e4) => e4.open ? e4 : s3(e4.scene);
        }
        let l2 = window.setTimeout(
          () => a2((e4) => {
            let t4 = i2(e4);
            return "thinking" === e4.status ? { ...t4, ms: e4.ms + o2 } : t4;
          }),
          o2
        );
        return () => window.clearTimeout(l2);
      }, [e3, t3, n3]);
      let r3 = b[n3.scene];
      return {
        steps: (0, i.useMemo)(
          () => "wait" === n3.phase ? [] : r3.steps.slice(0, n3.step + 1).map(
            (e4, t4) => t4 < n3.step ? e4 : {
              title: e4.title,
              text: F[n3.scene][t4].slice(0, n3.words).join(" ")
            }
          ),
          [r3, n3.scene, n3.step, n3.words, n3.phase]
        ),
        status: n3.status,
        seconds: Math.floor(n3.ms / 1e3),
        open: n3.open,
        model: r3.model,
        scene: n3.scene,
        toggle: () => a2((e4) => ({ ...e4, open: !e4.open, touched: true })),
        stop: () => a2(
          (e4) => "thinking" === e4.status ? { ...e4, status: "stopped", phase: "stopped" } : e4
        )
      };
    })(H2, V2 && K2), U2 = (0, i.useId)(), X = `${U2}-label`, Z = `${U2}-panel`, Q = (0, i.useMemo)(
      () => (function(e3) {
        if (!e3) return [];
        if (Array.isArray(e3)) return e3.filter((e4) => e4.title || e4.text);
        let t3 = [], n3 = e3.replace(/\r\n/g, "\n").split(/\n{2,}/);
        return n3.forEach((e4, a2) => {
          let i2 = e4.trim();
          if (!i2) return;
          let [r3, ...s3] = i2.split("\n"), o2 = r3.match(C) ?? (a2 !== n3.length - 1 || s3.length ? null : r3.match(S));
          if (o2)
            return void t3.push({
              title: (o2[1] ?? o2[2] ?? "").trim(),
              text: s3.join(" ").trim()
            });
          let l2 = t3[t3.length - 1];
          l2 ? l2.text = l2.text ? `${l2.text}

${i2.replace(/\n/g, " ")}` : i2.replace(/\n/g, " ") : t3.push({ text: i2.replace(/\n/g, " ") });
        }), t3;
      })(e2),
      [e2]
    ), J = H2 ? G2.status : t2 ?? "done", ee = (function(e3, t3) {
      let [n3, a2] = (0, i.useState)({
        status: e3,
        elapsed: "thinking" === e3 ? 0 : void 0
      }), r3 = n3;
      return n3.status !== e3 && a2(r3 = { status: e3, elapsed: "thinking" === e3 ? 0 : n3.elapsed }), (0, i.useEffect)(() => {
        if (void 0 !== t3 || "thinking" !== e3) return;
        let n4 = performance.now(), i2 = window.setInterval(() => {
          let e4 = Math.floor((performance.now() - n4) / 1e3);
          a2((t4) => t4.elapsed === e4 ? t4 : { ...t4, elapsed: e4 });
        }, 250);
        return () => window.clearInterval(i2);
      }, [e3, t3]), t3 ?? r3.elapsed;
    })(J, n2), et = H2 ? G2.seconds : ee, en = H2 ? G2.steps : Q, ea = H2 ? { name: G2.model } : r2 ?? N, [ei, er] = (0, i.useState)(f2), es = H2 ? G2.open : s2 ?? ei, eo = en.length > 0, el = "thinking" === J, ec = H2 ? G2.stop : v2, ed = en[en.length - 1], eu = ed && (ed.text || ed.title) || "", eh = el && !es && !!eu, ep = "thinking" === J ? `${ea.name} is thinking` : "done" === J ? void 0 !== et ? `Thought for ${((e3) => {
      let t3 = Math.max(1, Math.round(e3));
      if (t3 < 60) return `${t3} second${1 === t3 ? "" : "s"}`;
      let n3 = Math.floor(t3 / 60), a2 = t3 % 60;
      return `${n3} minute${1 === n3 ? "" : "s"}${a2 ? ` ${a2} seconds` : ""}`;
    })(et)}` : "Finished thinking" : "stopped" === J ? "Stopped thinking" : "Thinking interrupted", em = "thinking" === J ? (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)(x.n, {
          className: j().shimmer,
          children: "Thinking"
        }),
        void 0 !== et ? (0, a.jsx)(W, { seconds: et, reduced: q2 }) : null
      ]
    }) : "done" === J ? (0, a.jsx)("span", {
      className: j().labelText,
      children: void 0 !== et ? `Thought for ${T(Math.max(1, et))}` : "Thought process"
    }) : "stopped" === J ? (0, a.jsx)("span", {
      className: j().labelText,
      children: et ? `Stopped after ${T(et)}` : "Stopped thinking"
    }) : (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)(h.A, {
          className: j().alert,
          size: 16,
          strokeWidth: 1.75,
          "aria-hidden": "true"
        }),
        (0, a.jsx)("span", {
          className: j().labelText,
          children: "Thinking interrupted"
        })
      ]
    });
    return (0, a.jsxs)("div", {
      ref: B2,
      role: "group",
      "aria-label": `${ea.name} reasoning`,
      className: w(j().root, Y2),
      "data-variant": M2,
      "data-status": J,
      "data-open": es || void 0,
      children: [
        (0, a.jsxs)("div", {
          className: j().top,
          "data-expandable": eo || void 0,
          children: [
            eo ? (0, a.jsx)("button", {
              type: "button",
              className: j().toggle,
              "aria-expanded": es,
              "aria-controls": Z,
              "aria-labelledby": X,
              onClick: () => {
                if (eo) {
                  if (H2) return void G2.toggle();
                  void 0 === s2 && er(!es), y2?.(!es);
                }
              }
            }) : null,
            (0, a.jsxs)("div", {
              className: j().head,
              children: [
                (0, a.jsx)("span", {
                  className: j().mark,
                  "aria-hidden": "true",
                  children: ea.mark ?? (0, a.jsx)(_, { width: 18, height: 18, title: ea.name })
                }),
                (0, a.jsx)("span", {
                  className: j().label,
                  id: X,
                  children: (0, a.jsx)(l.N, {
                    initial: false,
                    mode: "popLayout",
                    children: (0, a.jsx)(
                      o.PY1.span,
                      {
                        className: j().labelInner,
                        initial: { opacity: 0, y: 2 * !q2 },
                        animate: {
                          opacity: 1,
                          y: 0,
                          transition: q2 ? { duration: 0 } : $
                        },
                        exit: {
                          opacity: 0,
                          transition: q2 ? { duration: 0 } : L
                        },
                        children: em
                      },
                      J
                    )
                  })
                }),
                (0, a.jsx)("span", {
                  className: j().actions,
                  children: (0, a.jsxs)(l.N, {
                    initial: false,
                    mode: "popLayout",
                    children: [
                      el && ec ? (0, a.jsx)(
                        o.PY1.span,
                        {
                          initial: { opacity: 0 },
                          animate: { opacity: 1, transition: $ },
                          exit: { opacity: 0, transition: L },
                          children: (0, a.jsxs)(g.$, {
                            variant: "ghost",
                            size: "sm",
                            className: j().action,
                            onClick: ec,
                            children: [
                              (0, a.jsx)(p.A, {
                                size: 10,
                                strokeWidth: 0,
                                fill: "currentColor",
                                "aria-hidden": "true"
                              }),
                              "Stop"
                            ]
                          })
                        },
                        "stop"
                      ) : null,
                      "error" === J && k2 ? (0, a.jsx)(
                        o.PY1.span,
                        {
                          initial: { opacity: 0 },
                          animate: { opacity: 1, transition: $ },
                          exit: { opacity: 0, transition: L },
                          children: (0, a.jsx)(g.$, {
                            variant: "secondary",
                            size: "sm",
                            className: j().action,
                            onClick: k2,
                            children: "Retry"
                          })
                        },
                        "retry"
                      ) : null
                    ]
                  })
                }),
                eo ? (0, a.jsx)(m.A, {
                  className: j().chevron,
                  size: 16,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                }) : (0, a.jsx)("span", { "aria-hidden": "true" })
              ]
            }),
            (0, a.jsx)(l.N, {
              initial: false,
              children: eh ? (0, a.jsx)(
                o.PY1.div,
                {
                  className: j().liveClip,
                  "aria-hidden": "true",
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: {
                    height: 0,
                    opacity: 0,
                    transition: q2 ? { duration: 0 } : { height: A, opacity: L }
                  },
                  transition: E(q2),
                  children: (0, a.jsx)("div", {
                    className: j().live,
                    children: (0, a.jsx)(l.N, {
                      initial: false,
                      children: (0, a.jsx)(
                        o.PY1.div,
                        {
                          className: j().liveLayer,
                          initial: { opacity: 0 },
                          animate: {
                            opacity: 1,
                            transition: q2 ? { duration: 0 } : $
                          },
                          exit: {
                            opacity: 0,
                            transition: q2 ? { duration: 0 } : L
                          },
                          children: (0, a.jsx)(O, { text: eu, reduced: q2 })
                        },
                        `${H2 ? G2.scene : 0}-${en.length}`
                      )
                    })
                  })
                },
                "tail"
              ) : null
            })
          ]
        }),
        (0, a.jsx)(l.N, {
          initial: false,
          children: es && eo ? (0, a.jsx)(
            o.PY1.div,
            {
              id: Z,
              role: "region",
              "aria-labelledby": X,
              "aria-busy": el || void 0,
              className: j().panelClip,
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: {
                height: 0,
                opacity: 0,
                transition: q2 ? { duration: 0 } : { height: A, opacity: L }
              },
              transition: E(q2),
              children: (0, a.jsx)(D, {
                steps: en,
                status: J,
                error: R2,
                reduced: q2
              })
            },
            "panel"
          ) : null
        }),
        (0, a.jsx)("span", {
          className: j().srOnly,
          role: "status",
          "aria-live": "polite",
          children: H2 ? `${ep}. Simulated, nothing was sent to a model.` : ep
        })
      ]
    });
  }
  function D({ steps: e2, status: t2, error: n2, reduced: r2 }) {
    let s2 = "thinking" === t2, [c2] = (0, i.useState)(() => e2.map((e3) => R(e3.text).length));
    return (0, a.jsxs)("div", {
      className: j().panel,
      children: [
        (0, a.jsx)("ol", {
          className: j().steps,
          children: e2.map((t3, n3) => {
            let i2 = s2 && n3 === e2.length - 1, r3 = s2 && n3 >= c2.length;
            return (0, a.jsxs)(
              "li",
              {
                className: j().step,
                "data-current": i2 || void 0,
                children: [
                  (0, a.jsx)("span", {
                    className: w(j().dot, r3 && j().chunk),
                    "aria-hidden": "true"
                  }),
                  t3.title ? (0, a.jsx)("h4", {
                    className: w(j().stepTitle, r3 && j().chunk),
                    children: t3.title
                  }) : null,
                  R(t3.text).map(
                    (e3, t4) => (0, a.jsx)(
                      "p",
                      {
                        className: j().para,
                        children: (0, a.jsx)(M, {
                          text: e3,
                          live: s2,
                          enter: r3 || t4 >= (c2[n3] ?? 0)
                        })
                      },
                      t4
                    )
                  )
                ]
              },
              n3
            );
          })
        }),
        (0, a.jsx)(l.N, {
          initial: false,
          children: s2 ? null : (0, a.jsxs)(
            o.PY1.div,
            {
              className: j().foot,
              "data-status": t2,
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: r2 ? { duration: 0 } : $,
              children: [
                (0, a.jsx)("span", {
                  className: j().footIcon,
                  "aria-hidden": "true",
                  children: "done" === t2 ? (0, a.jsx)(f.A, { size: 14, strokeWidth: 2 }) : "stopped" === t2 ? (0, a.jsx)(p.A, {
                    size: 9,
                    strokeWidth: 0,
                    fill: "currentColor"
                  }) : (0, a.jsx)(h.A, { size: 14, strokeWidth: 1.75 })
                }),
                (0, a.jsx)("span", {
                  className: j().footText,
                  children: "done" === t2 ? "Done" : "stopped" === t2 ? "Stopped before finishing" : n2 ?? "The connection dropped before the model finished."
                }),
                (0, a.jsx)(y.CopyButton, {
                  value: e2.map(
                    (e3) => [e3.title, e3.text].filter(Boolean).join("\n")
                  ).join("\n\n"),
                  label: "Copy reasoning",
                  iconOnly: true,
                  variant: "plain",
                  className: j().copy
                })
              ]
            },
            t2
          )
        })
      ]
    });
  }
  var Y = n(66558), B = n(39856), q = n.n(B);
  let V = [
    { value: "live", label: "Live" },
    { value: "done", label: "Finished" },
    { value: "error", label: "Interrupted" }
  ], K = b[0].steps, H = [
    K[0],
    { title: K[1].title, text: K[1].text.split(" ").slice(0, 14).join(" ") }
  ];
  function G() {
    let [e2, t2] = (0, i.useState)("live");
    return (0, a.jsxs)("div", {
      className: q().demo,
      children: [
        (0, a.jsx)(Y.A, {
          label: "Reasoning state",
          options: V,
          value: e2,
          onValueChange: t2
        }),
        (0, a.jsx)("div", {
          className: q().stage,
          children: "live" === e2 ? (0, a.jsx)(P, {}, "live") : "done" === e2 ? (0, a.jsx)(
            P,
            {
              reasoning: K,
              status: "done",
              seconds: 7,
              defaultOpen: true
            },
            "done"
          ) : (0, a.jsx)(
            P,
            {
              reasoning: H,
              status: "error",
              seconds: 3,
              error: "The connection dropped before Claude finished. Retry to think again.",
              onRetry: () => t2("live")
            },
            "error"
          )
        })
      ]
    });
  }
  let U = G;
}

__m(__module,__exports,__require);
});
A.regCss(39856, ".demo{display:flex;width:100%;flex-direction:column;align-items:center;gap:20px}\n.stage{width:100%;max-width:580px;min-height:500px}\n@media (max-width:600px){.stage{min-height:620px}\n@media (max-width:480px){.stage{min-height:790px}", {"demo":"demo","stage":"stage"});
A.regCss(60530, ".reasoning-block_root__RkC8F{--rb-pad:16px;--rb-col:20px;--rb-gap:10px;position:relative;width:100%;min-width:0;color:var(--foreground);font-family:var(--font-body);font-size:var(--text-sm);letter-spacing:var(--tracking-body);line-height:20px}.reasoning-block_root__RkC8F[data-variant=card]{border:1px solid var(--border);border-radius:var(--radius-control);background:var(--surface)}.reasoning-block_root__RkC8F[data-variant=plain]{--rb-pad:0px}.reasoning-block_srOnly__xVeaE{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}.reasoning-block_top__gSiwm{position:relative;padding-bottom:12px;border-radius:calc(var(--radius-control) - 1px)}.reasoning-block_root__RkC8F[data-variant=plain] .reasoning-block_top__gSiwm{padding-bottom:8px}.reasoning-block_root__RkC8F[data-open] .reasoning-block_top__gSiwm{border-radius:calc(var(--radius-control) - 1px) calc(var(--radius-control) - 1px) 8px 8px}.reasoning-block_toggle__QRemO{position:absolute;inset:0;z-index:0;margin:0;border:0;padding:0;border-radius:inherit;background:transparent;cursor:pointer;-webkit-tap-highlight-color:transparent;--focus-outline-offset:-2px;transition:background-color var(--duration-fast) var(--ease-standard)}.reasoning-block_top__gSiwm>:not(.reasoning-block_toggle__QRemO){position:relative;z-index:1;pointer-events:none}.reasoning-block_root__RkC8F[data-variant=card] .reasoning-block_toggle__QRemO:active{background:var(--surface-muted)}@media (hover:hover) and (pointer:fine){.reasoning-block_root__RkC8F[data-variant=card] .reasoning-block_toggle__QRemO:hover{background:color-mix(in oklab,var(--surface-muted) 70%,transparent)}}@media (hover:hover) and (pointer:fine){.reasoning-block_toggle__QRemO:hover~.reasoning-block_head__ucP_E .reasoning-block_chevron__XIaO_{color:var(--text-secondary)}}.reasoning-block_head__ucP_E{display:grid;grid-template-columns:var(--rb-col) minmax(0,1fr) auto 16px;align-items:center;column-gap:var(--rb-gap);height:32px;padding:12px var(--rb-pad) 0}.reasoning-block_root__RkC8F[data-variant=plain] .reasoning-block_head__ucP_E{height:28px;padding-top:8px}.reasoning-block_mark__T8_UW{display:grid;width:var(--rb-col);height:20px;place-items:center}.reasoning-block_mark__T8_UW svg{display:block;width:18px;height:18px}.reasoning-block_label__F6vhS{position:relative;display:flex;min-width:0;align-items:center;height:20px}.reasoning-block_labelInner__a6xVH{display:inline-flex;min-width:0;align-items:center;gap:6px;white-space:nowrap}.reasoning-block_labelText__WrTRM{overflow:hidden;text-overflow:ellipsis}.reasoning-block_root__RkC8F[data-status=done] .reasoning-block_labelText__WrTRM,.reasoning-block_root__RkC8F[data-status=stopped] .reasoning-block_labelText__WrTRM{color:var(--text-secondary)}.reasoning-block_shimmer__auQTn{color:var(--foreground)}.reasoning-block_alert__iEiKM{flex:none;color:var(--danger)}.reasoning-block_counter__lFCxq{display:inline-grid;min-width:3.4ch;color:var(--text-muted);font-variant-numeric:tabular-nums}.reasoning-block_counterValue__VpM_G{grid-area:1/1}.reasoning-block_actions__r71wM{height:20px;align-items:center;justify-content:flex-end}.reasoning-block_actions__r71wM,.reasoning-block_actions__r71wM>*{display:inline-flex;pointer-events:auto}.reasoning-block_action__fDKKy.reasoning-block_action__fDKKy{flex:none;height:28px;min-height:28px;gap:6px;padding-inline:10px;font-size:var(--text-xs)}.reasoning-block_chevron__XIaO_{color:var(--text-muted);transition:transform var(--duration-standard) var(--ease-standard),color var(--duration-fast) var(--ease-standard)}.reasoning-block_root__RkC8F[data-open] .reasoning-block_chevron__XIaO_{transform:rotate(180deg)}.reasoning-block_liveClip__AFh2L{overflow:hidden}.reasoning-block_live__RuJfB{position:relative;height:40px;margin:4px var(--rb-pad) 0 calc(var(--rb-pad) + var(--rb-col) + var(--rb-gap));color:var(--text-muted)}.reasoning-block_liveLayer__8eDbn{position:absolute;inset:0}.reasoning-block_liveSlot__MIbET{position:absolute;inset:0;display:flex;overflow:hidden;flex-direction:column;justify-content:flex-end}.reasoning-block_liveSlot__MIbET[data-overflow]{-webkit-mask-image:linear-gradient(180deg,transparent 0,#000 16px);mask-image:linear-gradient(180deg,transparent 0,#000 16px)}.reasoning-block_liveTail__sW5Zg{flex:none;min-height:100%;overflow-wrap:anywhere}.reasoning-block_chunk__sFpwD{animation:reasoning-block_rb-chunk__EXm6s .14s var(--ease-standard,ease-out) both}@keyframes reasoning-block_rb-chunk__EXm6s{0%{opacity:0}}.reasoning-block_panelClip__8BuYa{overflow:hidden}.reasoning-block_panel__zaz3d{padding:4px var(--rb-pad) 16px}.reasoning-block_root__RkC8F[data-variant=plain] .reasoning-block_panel__zaz3d{padding-block:4px 8px}.reasoning-block_steps__d6Fcc{display:grid;gap:16px;margin:0;padding:0;list-style:none}.reasoning-block_step__QJXFK:not(:last-child):before{content:\"\";position:absolute;top:10px;bottom:-26px;left:calc(var(--rb-col) / 2);width:1px;background:var(--border)}.reasoning-block_step__QJXFK{position:relative;min-width:0;padding-left:calc(var(--rb-col) + var(--rb-gap))}.reasoning-block_dot__TSRih{position:absolute;z-index:1;top:7px;left:calc(var(--rb-col) / 2 - 3px);width:7px;height:7px;border-radius:50%;background:var(--surface);box-shadow:inset 0 0 0 1.5px var(--text-muted);transition:box-shadow var(--duration-standard) var(--ease-standard)}.reasoning-block_root__RkC8F[data-variant=plain] .reasoning-block_dot__TSRih{background:var(--background)}.reasoning-block_step__QJXFK[data-current] .reasoning-block_dot__TSRih{box-shadow:inset 0 0 0 1.5px var(--foreground),0 0 0 3px color-mix(in oklab,var(--foreground) 8%,transparent)}.reasoning-block_stepTitle__X0bZU{margin:0;color:var(--foreground);font-size:var(--text-sm);font-weight:500;line-height:20px;letter-spacing:inherit}.reasoning-block_para__g4qRU{margin:2px 0 0;color:var(--text-secondary);line-height:22px;overflow-wrap:anywhere;text-wrap:pretty}.reasoning-block_para__g4qRU+.reasoning-block_para__g4qRU{margin-top:8px}.reasoning-block_dot__TSRih+.reasoning-block_para__g4qRU{margin-top:0}.reasoning-block_foot__6cdWa{display:grid;grid-template-columns:var(--rb-col) minmax(0,1fr) auto;align-items:center;column-gap:var(--rb-gap);min-height:28px;margin-top:12px;color:var(--text-secondary);font-size:var(--text-xs)}.reasoning-block_footIcon__gQYkA{display:grid;place-items:center}.reasoning-block_foot__6cdWa[data-status=done] .reasoning-block_footIcon__gQYkA{color:var(--success)}.reasoning-block_foot__6cdWa[data-status=stopped] .reasoning-block_footIcon__gQYkA{color:var(--text-muted)}.reasoning-block_foot__6cdWa[data-status=error] .reasoning-block_footIcon__gQYkA{color:var(--danger)}.reasoning-block_footText__2KqKu{min-width:0}.reasoning-block_copy___zYIy{margin-block:-4px;margin-right:-8px;color:var(--text-muted)}@media (prefers-reduced-motion:reduce){.reasoning-block_chunk__sFpwD{animation:none}}@media (prefers-reduced-motion:reduce){.reasoning-block_chevron__XIaO_,.reasoning-block_dot__TSRih,.reasoning-block_toggle__QRemO{transition:none}}@media (forced-colors:active){.reasoning-block_dot__TSRih{border:1px solid CanvasText;box-shadow:none}}@media (forced-colors:active){.reasoning-block_step__QJXFK:before{background:CanvasText}}", {"root":"reasoning-block_root__RkC8F","srOnly":"reasoning-block_srOnly__xVeaE","top":"reasoning-block_top__gSiwm","toggle":"reasoning-block_toggle__QRemO","head":"reasoning-block_head__ucP_E","chevron":"reasoning-block_chevron__XIaO_","mark":"reasoning-block_mark__T8_UW","label":"reasoning-block_label__F6vhS","labelInner":"reasoning-block_labelInner__a6xVH","labelText":"reasoning-block_labelText__WrTRM","shimmer":"reasoning-block_shimmer__auQTn","alert":"reasoning-block_alert__iEiKM","counter":"reasoning-block_counter__lFCxq","counterValue":"reasoning-block_counterValue__VpM_G","actions":"reasoning-block_actions__r71wM","action":"reasoning-block_action__fDKKy","liveClip":"reasoning-block_liveClip__AFh2L","live":"reasoning-block_live__RuJfB","liveLayer":"reasoning-block_liveLayer__8eDbn","liveSlot":"reasoning-block_liveSlot__MIbET","liveTail":"reasoning-block_liveTail__sW5Zg","chunk":"reasoning-block_chunk__sFpwD","rb-chunk":"reasoning-block_rb-chunk__EXm6s","panelClip":"reasoning-block_panelClip__8BuYa","panel":"reasoning-block_panel__zaz3d","steps":"reasoning-block_steps__d6Fcc","step":"reasoning-block_step__QJXFK","dot":"reasoning-block_dot__TSRih","stepTitle":"reasoning-block_stepTitle__X0bZU","para":"reasoning-block_para__g4qRU","foot":"reasoning-block_foot__6cdWa","footIcon":"reasoning-block_footIcon__gQYkA","footText":"reasoning-block_footText__2KqKu","copy":"reasoning-block_copy___zYIy"});
A.cssFor("reasoning-block", [39856,60530]);
A.item("reasoning-block", {entry:12238, export:"ReasoningBlockDemo", kind:"component", tier:"pro", unresolved:[]});
})();