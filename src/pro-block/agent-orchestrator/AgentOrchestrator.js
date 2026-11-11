function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, {
    AgentOrchestrator: () => eT,
    default: () => eA,
    simulateOrchestration: () => O
  });
  var r = a(95155), n = a(12115), s = a(80642), i = a(25354), o = a(61792), l = a(92298), d = a(12363), c = a(40852), u = a(36619), p = a(49804), h = a(51288), m = a(73474), g = a(66558), f = a(52898);
  function y({ title: e2 = "Claude", ...t2 }) {
    return (0, r.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, r.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  var x = a(18310), _ = a(28245), b = a(55809), k = a(92171), j = a(65377), v = a(50626), w = a(36483), $ = a(797), N = a(57990), T = a(7770);
  let A = [
    {
      id: "notewise",
      title: "Notewise seat pricing",
      instruction: "Compare Notewise seat pricing and limits with our Team plan",
      workerId: "sonnet"
    },
    {
      id: "paperlane",
      title: "Paperlane free tier",
      instruction: "Check what the Paperlane free tier includes and caps",
      workerId: "haiku"
    },
    {
      id: "quillstack",
      title: "Quillstack discounts",
      instruction: "Find the Quillstack annual discount and trial terms",
      workerId: "flash"
    },
    {
      id: "driftboard",
      title: "Driftboard add-ons",
      instruction: "Map the Driftboard business tier and its paid add-ons",
      workerId: "luna"
    }
  ], M = {
    opus: { input: 4, output: 20 },
    sonnet: { input: 2, output: 10 },
    haiku: { input: 0.1, output: 0.5 },
    flash: { input: 0.3, output: 2.5 },
    luna: { input: 0.4, output: 2 }
  }, R = {
    notewise: {
      steps: [
        {
          tool: "search",
          target: "notewise pricing per seat 2026",
          ms: 1500,
          output: "The pricing page and a September changelog post are the top results",
          detail: "6 results",
          input: 3200,
          outputTokens: 240
        },
        {
          tool: "fetch",
          target: "notewise.io/pricing",
          ms: 2300,
          output: "Team is $10 per seat on yearly billing and includes unlimited guests",
          detail: "Read 3,140 words",
          input: 14800,
          outputTokens: 420
        },
        {
          tool: "read",
          target: "docs/pricing.md",
          ms: 1600,
          output: "Our Team plan is $12 per seat and caps guests at 5 per workspace",
          detail: "Read 212 lines",
          input: 8600,
          outputTokens: 310
        },
        {
          tool: "write",
          ms: 1900,
          output: "Notewise undercuts our Team plan by $2 per seat and adds unlimited guests",
          input: 2400,
          outputTokens: 1180
        }
      ],
      result: "Notewise undercuts our Team plan by $2 per seat and adds unlimited guests."
    },
    paperlane: {
      steps: [
        {
          tool: "fetch",
          target: "paperlane.com/pricing",
          ms: 1900,
          output: "The free plan allows 5 members, 2 GB of storage and 30 days of history",
          detail: "Read 2,260 words",
          input: 9600,
          outputTokens: 260
        },
        {
          tool: "search",
          target: "paperlane free plan limits",
          ms: 1500,
          output: "A help article confirms the free plan has no guest seats",
          detail: "4 results",
          input: 3100,
          outputTokens: 180
        },
        {
          tool: "read",
          target: "docs/pricing.md",
          ms: 1300,
          output: "Our free plan stops at 3 members and 1 GB of storage",
          detail: "Read 212 lines",
          input: 4300,
          outputTokens: 150
        },
        {
          tool: "write",
          ms: 1600,
          output: "Paperlane fits 5 members on its free plan where ours stops at 3",
          input: 1200,
          outputTokens: 690
        }
      ],
      result: "Paperlane fits 5 members on its free plan where ours stops at 3."
    },
    quillstack: {
      steps: [
        {
          tool: "search",
          target: "quillstack annual billing discount",
          ms: 1400,
          output: "The pricing page and a billing FAQ both cover yearly plans",
          detail: "5 results",
          input: 2900,
          outputTokens: 210
        },
        {
          tool: "fetch",
          target: "quillstack.dev/pricing",
          ms: 1700,
          output: "Annual billing saves 20 percent and the trial runs for 14 days",
          detail: "Read 1,980 words",
          input: 12400,
          outputTokens: 380,
          failsWith: "The page returned 503 Service Unavailable"
        },
        {
          tool: "write",
          ms: 1500,
          output: "Quillstack leads with a 20 percent yearly saving, and we never show ours",
          input: 2100,
          outputTokens: 820
        }
      ],
      result: "Quillstack leads with a 20 percent yearly saving, and we never show ours."
    },
    driftboard: {
      steps: [
        {
          tool: "search",
          target: "driftboard business plan sso",
          ms: 1400,
          output: "Found the pricing page and an add-ons comparison table",
          detail: "7 results",
          input: 3e3,
          outputTokens: 220
        },
        {
          tool: "fetch",
          target: "driftboard.app/pricing",
          ms: 2100,
          output: "Business is $18 per seat, and SSO is a $4 add-on per seat",
          detail: "Read 2,710 words",
          input: 13100,
          outputTokens: 390
        },
        {
          tool: "read",
          target: "docs/pricing.md",
          ms: 1400,
          output: "We include SSO only on Enterprise, which has no public price",
          detail: "Read 212 lines",
          input: 5200,
          outputTokens: 170
        },
        {
          tool: "write",
          ms: 1700,
          output: "Driftboard sells SSO as a $4 add-on, while ours needs a sales call",
          input: 1900,
          outputTokens: 760
        }
      ],
      result: "Driftboard sells SSO as a $4 add-on, while ours needs a sales call."
    }
  }, I = {
    steps: [
      {
        tool: "search",
        target: "background for this subtask",
        ms: 1400,
        output: "Found a handful of relevant pages to read",
        detail: "5 results",
        input: 3e3,
        outputTokens: 200
      },
      {
        tool: "fetch",
        target: "the most relevant page",
        ms: 1800,
        output: "Read the page and pulled out the numbers that matter",
        detail: "Read 2,000 words",
        input: 11e3,
        outputTokens: 340
      },
      {
        tool: "write",
        ms: 1400,
        output: "Wrote a short finding for the lead agent",
        input: 1800,
        outputTokens: 640
      }
    ],
    result: "Wrote a short finding for the lead agent."
  };
  class S extends Error {
  }
  let C = (e2, t2, a2) => (t2 * e2.input + a2 * e2.output) / 1e6;
  function E(e2, t2 = 48) {
    let a2 = e2.match(/\S+\s*/g) ?? [], r2 = [], n2 = "";
    for (let e3 of a2) (n2 += e3).length >= t2 && (r2.push(n2), n2 = "");
    return n2 && r2.push(n2), r2;
  }
  let O = ({ plan: e2, workers: t2, concurrency: a2, signal: r2 }) => {
    let n2, s2, i2, o2, l2 = (n2 = [], s2 = null, i2 = false, o2 = () => {
      let e3 = s2;
      s2 = null, e3?.();
    }, {
      push(e3) {
        i2 || (n2.push(e3), o2());
      },
      close() {
        i2 = true, o2();
      },
      async *[Symbol.asyncIterator]() {
        for (; ; ) {
          if (n2.length) {
            yield n2.shift();
            continue;
          }
          if (i2) return;
          await new Promise((e3) => {
            s2 = e3;
          });
        }
      }
    }), d2 = (e3) => {
      r2.aborted || l2.push(e3);
    }, c2 = (e3) => new Promise((t3, a3) => {
      if (r2.aborted) return void a3(new S());
      let n3 = setTimeout(() => {
        r2.removeEventListener("abort", s3), t3();
      }, e3);
      function s3() {
        clearTimeout(n3), a3(new S());
      }
      r2.addEventListener("abort", s3, { once: true });
    }), u2 = M.opus, p2 = (e3, a3) => e3.workerId ?? t2[a3]?.id ?? "";
    async function h2(e3, t3) {
      let a3 = R[e3.id] ?? I, r3 = M[p2(e3, t3)] ?? { input: 1, output: 5 }, n3 = e3.id;
      await c2(460);
      let s3 = 1;
      for (let e4 of a3.steps) {
        let t4 = !!e4.failsWith;
        for (; ; ) {
          d2({ type: "tool", subtaskId: n3, tool: e4.tool, target: e4.target });
          let a4 = false;
          for (let s4 = 0; s4 < 4; s4++) {
            if (await c2(e4.ms / 4), t4 && 2 === s4) {
              d2({
                type: "usage",
                subtaskId: n3,
                tokens: Math.round(0.3 * e4.input),
                cost: C(r3, 0.3 * e4.input, 0)
              }), d2({
                type: "error",
                subtaskId: n3,
                message: e4.failsWith,
                retryInMs: 2e3
              }), a4 = true;
              break;
            }
            let i3 = e4.input / 4, o3 = e4.outputTokens / 4;
            if (d2({
              type: "usage",
              subtaskId: n3,
              tokens: Math.round(i3 + o3),
              cost: C(r3, i3, o3)
            }), 0 === s4)
              for (let [t5, a5] of E(e4.output).entries())
                d2({ type: "output", subtaskId: n3, delta: a5, newLine: 0 === t5 });
          }
          if (!a4) {
            d2({ type: "toolResult", subtaskId: n3, detail: e4.detail });
            break;
          }
          await c2(2e3), t4 = false, d2({ type: "retry", subtaskId: n3, attempt: s3 += 1 });
        }
      }
      d2({ type: "result", subtaskId: n3, text: a3.result });
    }
    return (async function() {
      for (let [t4, a3] of (await c2(520), e2.entries())) {
        d2({ type: "plan", subtask: { ...a3, workerId: p2(a3, t4) } });
        let r3 = 1 / e2.length;
        d2({
          type: "usage",
          tokens: Math.round(4720 * r3),
          cost: C(u2, 4100 * r3, 620 * r3)
        }), await c2(t4 === e2.length - 1 ? 360 : 230);
      }
      let t3 = e2.map((e3, t4) => ({ subtask: e3, index: t4 })), n3 = [], s3 = 0, i3 = () => {
      };
      for (; t3.length || s3; ) {
        if (t3.length && s3 < Math.max(1, a2())) {
          let { subtask: e3, index: a3 } = t3.shift();
          s3 += 1, d2({ type: "dispatch", subtaskId: e3.id }), n3.push(
            h2(e3, a3).catch(() => {
            }).finally(() => {
              s3 -= 1, i3();
            })
          ), await c2(110);
          continue;
        }
        await Promise.race([
          new Promise((e3) => {
            i3 = e3;
          }),
          c2(150)
        ]);
      }
      if (await Promise.all(n3), r2.aborted) return;
      await c2(600);
      let o3 = E(
        "We charge more than Notewise and Quillstack for a smaller package, and our free plan is the tightest of the five. Three changes would close the gap:\n- Cut Team to $10 per seat on yearly billing to match Notewise.\n- Raise the free plan from 3 to 5 members, as Paperlane does.\n- Show the yearly saving on the page and sell SSO as a paid add-on.",
        36
      );
      for (let [e3, t4] of o3.entries()) {
        d2({ type: "summary", delta: t4 });
        let a3 = 1 / o3.length;
        d2({
          type: "usage",
          tokens: Math.round(10680 * a3),
          cost: C(u2, 9800 * a3, 880 * a3)
        }), e3 < o3.length - 1 && await c2(70);
      }
      d2({ type: "done" });
    })().catch(() => {
    }).finally(() => l2.close()), l2;
  };
  var z = a(8102), B = a.n(z);
  let { duration: L, ease: P } = T.T, W = [...P.enter], F = [...P.standard], D = { type: "spring", visualDuration: 0.26, bounce: 0 }, q = { duration: L.fast, ease: W }, G = { duration: 0.1, ease: F }, H = { duration: 0 };
  function Q(e2) {
    return {
      initial: e2 ? { opacity: 0 } : { opacity: 0, y: 2 },
      animate: { opacity: 1, y: 0, transition: e2 ? H : q },
      exit: { opacity: 0, transition: e2 ? H : G }
    };
  }
  let Y = () => () => {
  }, K = (...e2) => e2.filter(Boolean).join(" ");
  function V({ kind: e2, reduced: t2 }) {
    switch (e2) {
      case "active":
        return (0, r.jsxs)("svg", {
          viewBox: "0 0 16 16",
          className: t2 ? void 0 : B().spin,
          "aria-hidden": "true",
          children: [
            (0, r.jsx)("circle", {
              cx: "8",
              cy: "8",
              r: "6.25",
              className: B().gTrack
            }),
            (0, r.jsx)("path", {
              d: "M8 1.75a6.25 6.25 0 0 1 6.25 6.25",
              className: B().gArc
            })
          ]
        });
      case "queued":
        return (0, r.jsxs)("svg", {
          viewBox: "0 0 16 16",
          "aria-hidden": "true",
          children: [
            (0, r.jsx)("circle", {
              cx: "8",
              cy: "8",
              r: "6.25",
              className: B().gQueued
            }),
            (0, r.jsx)("path", { d: "M8 5v3.2l2 1.3", className: B().gHands })
          ]
        });
      case "done":
        return (0, r.jsxs)("svg", {
          viewBox: "0 0 16 16",
          "aria-hidden": "true",
          children: [
            (0, r.jsx)("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              className: B().gDone
            }),
            (0, r.jsx)(i.PY1.path, {
              d: "M5 8.25 7.1 10.3 11 6",
              className: B().gInk,
              initial: { pathLength: +!!t2 },
              animate: { pathLength: 1 },
              transition: t2 ? H : { duration: 0.22, ease: W, delay: 0.04 }
            })
          ]
        });
      case "error":
        return (0, r.jsxs)("svg", {
          viewBox: "0 0 16 16",
          "aria-hidden": "true",
          children: [
            (0, r.jsx)("circle", {
              cx: "8",
              cy: "8",
              r: "7",
              className: B().gError
            }),
            (0, r.jsx)("path", { d: "M8 4.9v3.6", className: B().gInk }),
            (0, r.jsx)("circle", {
              cx: "8",
              cy: "11.1",
              r: ".95",
              className: B().gInkDot
            })
          ]
        });
      case "stopped":
        return (0, r.jsxs)("svg", {
          viewBox: "0 0 16 16",
          "aria-hidden": "true",
          children: [
            (0, r.jsx)("circle", {
              cx: "8",
              cy: "8",
              r: "6.25",
              className: B().gIdle
            }),
            (0, r.jsx)("rect", {
              x: "5.6",
              y: "5.6",
              width: "4.8",
              height: "4.8",
              rx: "1",
              className: B().gStop
            })
          ]
        });
      default:
        return (0, r.jsx)("svg", {
          viewBox: "0 0 16 16",
          "aria-hidden": "true",
          children: (0, r.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "6.25",
            className: B().gIdle
          })
        });
    }
  }
  let U = {
    search: "Web search",
    fetch: "Fetch page",
    read: "Read file",
    write: "Write findings"
  }, Z = (e2) => U[e2] ?? e2.charAt(0).toUpperCase() + e2.slice(1);
  function X({ kind: e2, size: t2 = 14 }) {
    let a2 = "search" === e2 ? j.A : "fetch" === e2 ? v.A : "read" === e2 ? w.A : "write" === e2 ? $.A : N.A;
    return (0, r.jsx)(a2, { size: t2, strokeWidth: 1.75, "aria-hidden": "true" });
  }
  let J = (e2) => e2 < 1e3 ? String(Math.round(e2)) : `${(e2 / 1e3).toFixed(1)}k`, ee = (e2) => `$${e2.toFixed(e2 < 0.1 ? 3 : 2)}`, et = (e2) => `${(Math.max(0, e2) / 1e3).toFixed(1)}s`;
  function ea(e2, t2 = 100) {
    let [a2, r2] = (0, n.useState)(
      () => "u" < typeof performance ? 0 : performance.now()
    );
    return (0, n.useEffect)(() => {
      if (!e2) return;
      let a3 = window.setInterval(() => r2(performance.now()), t2);
      return () => window.clearInterval(a3);
    }, [e2, t2]), a2;
  }
  function er({ from: e2, to: t2, className: a2 }) {
    let n2 = ea(void 0 !== e2 && void 0 === t2), s2 = void 0 === e2 ? 0 : (t2 ?? Math.max(n2, e2)) - e2;
    return (0, r.jsx)("span", {
      className: K(B().tabular, a2),
      children: et(s2)
    });
  }
  function en({ at: e2 }) {
    let t2 = ea(true, 200);
    return (0, r.jsxs)("span", {
      className: B().tabular,
      children: [Math.max(1, Math.ceil((e2 - t2) / 1e3)), "s"]
    });
  }
  function es({ value: e2, format: t2, reduced: a2, className: s2 }) {
    let o2 = (0, _.d)(e2), l2 = (0, b.G)(o2, t2);
    return (0, n.useEffect)(() => {
      if (a2 || e2 < o2.get()) return void o2.jump(e2);
      let t3 = (0, k.i)(o2, e2, { duration: 0.42, ease: W });
      return () => t3.stop();
    }, [e2, a2, o2]), (0, r.jsx)(i.PY1.span, { className: K(B().tabular, s2), children: l2 });
  }
  function ei(e2) {
    let t2 = e2.match(/\S+\s*/g) ?? [], a2 = [4, 3, 5, 4, 6], r2 = [], n2 = "", s2 = 0;
    for (let e3 of t2)
      n2 += e3, ((s2 += 1) >= a2[r2.length % a2.length] || n2.length >= 36) && (r2.push(n2), n2 = "", s2 = 0);
    return n2 && r2.push(n2), r2;
  }
  function eo(e2, t2) {
    let [a2, r2] = (0, n.useState)(t2 ? e2 : 0), s2 = (0, n.useRef)(t2 ? e2 : 0);
    return (0, n.useEffect)(() => {
      if (t2) {
        s2.current = e2;
        return;
      }
      if (s2.current > e2 && (s2.current = e2), s2.current >= e2) return;
      let a3 = 0, n2 = performance.now() - 36, i2 = (t3) => {
        let o2 = Math.floor((t3 - n2) / 36);
        if (o2 > 0) {
          let t4 = e2 - s2.current;
          s2.current = Math.min(e2, s2.current + o2 + Math.floor(t4 / 12)), n2 += 36 * o2, r2(s2.current);
        }
        s2.current < e2 && (a3 = requestAnimationFrame(i2));
      };
      return a3 = requestAnimationFrame(i2), () => cancelAnimationFrame(a3);
    }, [e2, t2]), t2 ? e2 : Math.min(a2, e2);
  }
  function el({ text: e2, reduced: t2, settled: a2 }) {
    let s2 = (0, n.useMemo)(() => ei(e2), [e2]), i2 = eo(s2.length, t2 || !!a2), o2 = (0, n.useRef)(null), l2 = (0, n.useRef)(null);
    return (0, n.useLayoutEffect)(() => {
      let e3 = o2.current, t3 = l2.current;
      if (!e3 || !t3 || a2) return;
      let r2 = Math.max(0, Math.ceil(t3.scrollWidth - e3.clientWidth));
      t3.style.transform = r2 ? `translateX(${-r2}px)` : "", e3.toggleAttribute("data-shifted", r2 > 0);
    }), (0, r.jsx)("span", {
      ref: o2,
      className: B().ticker,
      "data-settled": a2 || void 0,
      children: (0, r.jsx)("span", {
        ref: l2,
        className: B().tickerText,
        "data-still": t2 || void 0,
        children: s2.slice(0, i2).map(
          (e3, n2) => (0, r.jsx)(
            "span",
            { className: a2 || t2 ? void 0 : B().chunk, children: e3 },
            n2
          )
        )
      })
    });
  }
  function ed({ text: e2, reduced: t2 }) {
    let a2 = (0, n.useMemo)(() => ei(e2), [e2]), s2 = eo(a2.length, t2);
    return (0, r.jsx)(r.Fragment, {
      children: a2.slice(0, s2).map(
        (e3, a3) => (0, r.jsx)(
          "span",
          { className: t2 ? void 0 : B().chunk, children: e3 },
          a3
        )
      )
    });
  }
  function ec({ text: e2, reduced: t2, complete: a2, onSettled: s2 }) {
    let i2 = (0, n.useMemo)(
      () => e2.split("\n").flatMap((e3, t3) => {
        let a3 = e3.startsWith("- ");
        return ei(a3 ? e3.slice(2) : e3).map((e4, r2) => ({
          row: t3,
          item: a3,
          chunk: e4,
          key: `${t3}-${r2}`
        }));
      }),
      [e2]
    ), o2 = eo(i2.length, t2), l2 = (0, n.useRef)(s2);
    (0, n.useEffect)(() => {
      l2.current = s2;
    }), (0, n.useEffect)(() => {
      a2 && o2 >= i2.length && l2.current?.();
    }, [a2, o2, i2.length]);
    let d2 = i2.slice(0, o2), c2 = [];
    for (let e3 of d2) {
      let t3 = c2[c2.length - 1];
      t3 && t3.row === e3.row ? t3.chunks.push(e3) : c2.push({ row: e3.row, item: e3.item, chunks: [e3] });
    }
    let u2 = c2.filter((e3) => !e3.item), p2 = c2.filter((e3) => e3.item), h2 = (e3) => e3.chunks.map(
      (e4) => (0, r.jsx)(
        "span",
        { className: t2 ? void 0 : B().chunk, children: e4.chunk },
        e4.key
      )
    );
    return (0, r.jsxs)("div", {
      className: B().summaryText,
      children: [
        u2.map((e3) => (0, r.jsx)("p", { children: h2(e3) }, e3.row)),
        p2.length > 0 && (0, r.jsx)("ul", {
          children: p2.map((e3) => (0, r.jsx)("li", { children: h2(e3) }, e3.row))
        })
      ]
    });
  }
  let eu = (e2) => Math.round(e2) + 0.5;
  function ep({ pulse: e2, onDone: t2 }) {
    let a2 = (0, n.useRef)(null), s2 = (0, n.useRef)(t2);
    return (0, n.useEffect)(() => {
      s2.current = t2;
    }), (0, n.useLayoutEffect)(() => {
      let t3 = a2.current;
      if (!t3 || "function" != typeof t3.animate) return void s2.current(e2.id);
      let r2 = t3.getTotalLength();
      t3.style.strokeDasharray = `18 ${r2 + 18}`, t3.style.strokeDashoffset = "18";
      let n2 = t3.animate(
        [{ strokeDashoffset: 18 }, { strokeDashoffset: -r2 }],
        {
          duration: 460,
          easing: "cubic-bezier(.65,0,.35,1)",
          fill: "forwards"
        }
      );
      return n2.onfinish = () => s2.current(e2.id), () => n2.cancel();
    }, [e2.id]), (0, r.jsx)("path", {
      ref: a2,
      d: e2.d,
      className: B().pulse,
      style: { stroke: e2.color }
    });
  }
  function eh({ lead: e2, summary: t2, nodes: a2, lanes: s2, reduced: i2 }) {
    let o2 = (0, n.useRef)(null), [l2, d2] = (0, n.useState)(null), c2 = (0, n.useRef)(null), [u2, p2] = (0, n.useState)([]), h2 = (0, n.useRef)([]), m2 = s2.length;
    (0, n.useLayoutEffect)(() => {
      let r2 = o2.current?.parentElement, n2 = e2.current, s3 = t2.current;
      if (!r2 || !n2 || !s3) return;
      let i3 = () => {
        let e3 = (function(e4, t3, a3, r3) {
          if (!r3.length) return null;
          let n3 = e4.getBoundingClientRect(), s4 = t3.getBoundingClientRect(), i4 = a3.getBoundingClientRect(), o3 = eu(s4.left + s4.width / 2 - n3.left), l4 = Math.round(s4.bottom - n3.top) + 6, d3 = eu(i4.left + i4.width / 2 - n3.left), c3 = Math.round(i4.top - n3.top) - 6, u3 = r3.map((e5) => {
            let t4 = e5.getBoundingClientRect();
            return {
              left: Math.round(t4.left - n3.left),
              right: Math.round(t4.right - n3.left),
              top: Math.round(t4.top - n3.top),
              bottom: Math.round(t4.bottom - n3.top)
            };
          }), p3 = u3.length > 1 && 2 > Math.abs(u3[1].top - u3[0].top), h3 = { width: Math.round(n3.width), height: Math.round(n3.height) };
          if (p3) {
            let e5 = Math.min(...u3.map((e6) => e6.top)), t4 = Math.max(...u3.map((e6) => e6.bottom)), a4 = eu(e5 - 20), r4 = eu(t4 + 20), n4 = u3.map((e6) => eu((e6.left + e6.right) / 2)), s5 = n4[n4.length - 1], i5 = `M${o3} ${l4}V${a4 - 8}Q${o3} ${a4} ${o3 + 8} ${a4}H${s5 - 8}M${s5 - 8} ${r4}H${d3 + 8}Q${d3} ${r4} ${d3} ${r4 + 8}V${c3}`;
            return {
              ...h3,
              trunk: i5,
              lanes: u3.map((e6, t5) => {
                let s6 = n4[t5], i6 = t5 === u3.length - 1;
                return {
                  out: i6 ? `M${s6 - 8} ${a4}Q${s6} ${a4} ${s6} ${a4 + 8}V${e6.top}` : `M${s6} ${a4}V${e6.top}`,
                  back: i6 ? `M${s6} ${e6.bottom}V${r4 - 8}Q${s6} ${r4} ${s6 - 8} ${r4}` : `M${s6} ${e6.bottom}V${r4}`,
                  port: [s6, e6.top + 0.5],
                  backPort: [s6, e6.bottom - 0.5],
                  pulseOut: `M${o3} ${l4}V${a4 - 8}Q${o3} ${a4} ${o3 + 8} ${a4}${i6 ? `H${s6 - 8}Q${s6} ${a4} ${s6} ${a4 + 8}` : `H${s6}`}V${e6.top}`,
                  pulseBack: `M${s6} ${e6.bottom}${i6 ? `V${r4 - 8}Q${s6} ${r4} ${s6 - 8} ${r4}` : `V${r4}`}H${d3 + 8}Q${d3} ${r4} ${d3} ${r4 + 8}V${c3}`
                };
              })
            };
          }
          return {
            ...h3,
            trunk: `M${o3} ${l4}V${c3}`,
            lanes: u3.map((e5) => {
              let t4 = eu(e5.top + 21), a4 = e5.left;
              return {
                out: `M${o3} ${t4}H${a4}`,
                port: [a4 + 0.5, t4],
                pulseOut: `M${o3} ${l4}V${t4}H${a4}`,
                pulseBack: `M${a4} ${t4}H${o3}V${c3}`
              };
            })
          };
        })(
          r2,
          n2,
          s3,
          (a2.current ?? []).slice(0, m2).filter((e4) => !!e4)
        );
        c2.current = e3, d2(
          (t3) => t3 && e3 && JSON.stringify(t3) === JSON.stringify(e3) ? t3 : e3
        );
      };
      if (i3(), "u" < typeof ResizeObserver) return;
      let l3 = new ResizeObserver(i3);
      for (let e3 of (l3.observe(r2), a2.current ?? [])) e3 && l3.observe(e3);
      return () => l3.disconnect();
    }, [e2, t2, a2, m2]);
    let g2 = s2.map((e3) => `${e3.dispatchKey ?? ""}:${e3.returnKey ?? ""}`).join("|");
    (0, n.useEffect)(() => {
      let e3 = [];
      s2.forEach((t3, a3) => {
        let r2 = h2.current[a3] ?? {}, n2 = c2.current?.lanes[a3];
        void 0 !== t3.dispatchKey && t3.dispatchKey !== r2.out && n2 && !i2 && e3.push({
          id: t3.dispatchKey + 1e-3 * a3,
          d: n2.pulseOut,
          color: t3.color
        }), void 0 !== t3.returnKey && t3.returnKey !== r2.back && n2 && !i2 && e3.push({
          id: t3.returnKey + 1e-3 * a3 + 5e-4,
          d: n2.pulseBack,
          color: t3.color
        }), h2.current[a3] = { out: t3.dispatchKey, back: t3.returnKey };
      }), e3.length && p2((t3) => [...t3, ...e3]);
    }, [g2, i2]);
    let f2 = (e3) => p2((t3) => t3.filter((t4) => t4.id !== e3));
    return l2 ? (0, r.jsxs)("svg", {
      ref: o2,
      className: B().wires,
      width: l2.width,
      height: l2.height,
      viewBox: `0 0 ${l2.width} ${l2.height}`,
      "aria-hidden": "true",
      children: [
        (0, r.jsx)("path", { d: l2.trunk, className: B().trunk }),
        l2.lanes.map((e3, t3) => {
          let a3 = s2[t3];
          if (!a3) return null;
          let n2 = { "--wire": a3.color };
          return (0, r.jsxs)(
            "g",
            {
              style: n2,
              children: [
                (0, r.jsx)("path", {
                  d: e3.out,
                  className: B().branch,
                  "data-on": (e3.back ? a3.out : a3.out || a3.back) || void 0
                }),
                e3.back && (0, r.jsx)("path", {
                  d: e3.back,
                  className: B().branch,
                  "data-on": a3.back || void 0
                })
              ]
            },
            t3
          );
        }),
        u2.map((e3) => (0, r.jsx)(ep, { pulse: e3, onDone: f2 }, e3.id)),
        l2.lanes.map((e3, t3) => {
          let a3 = s2[t3];
          if (!a3) return null;
          let n2 = { "--wire": a3.color };
          return (0, r.jsxs)(
            "g",
            {
              style: n2,
              children: [
                (0, r.jsx)("circle", {
                  cx: e3.port[0],
                  cy: e3.port[1],
                  r: 3.5,
                  className: B().port,
                  "data-on": (e3.back ? a3.out : a3.out || a3.back) || void 0
                }),
                e3.backPort && (0, r.jsx)("circle", {
                  cx: e3.backPort[0],
                  cy: e3.backPort[1],
                  r: 3.5,
                  className: B().port,
                  "data-on": a3.back || void 0
                })
              ]
            },
            t3
          );
        })
      ]
    }) : (0, r.jsx)("svg", {
      ref: o2,
      className: B().wires,
      width: 0,
      height: 0,
      "aria-hidden": "true"
    });
  }
  let em = {
    name: "Claude Opus 5.5",
    mark: (0, r.jsx)(y, { className: B().claude })
  }, eg = [
    {
      id: "sonnet",
      name: "Claude Sonnet 5.5",
      mark: (0, r.jsx)(y, { className: B().claude })
    },
    {
      id: "haiku",
      name: "Claude Haiku 5.5",
      mark: (0, r.jsx)(y, { className: B().claude })
    },
    {
      id: "flash",
      name: "Gemini 3.8 Flash",
      mark: (0, r.jsx)(function({ title: e2 = "Gemini", ...t2 }) {
        let a2 = (0, n.useId)().replace(/[^a-zA-Z0-9_-]/g, "");
        return (0, r.jsxs)("svg", {
          viewBox: "0 0 24 24",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: [
            (0, r.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: "#3186FF"
            }),
            (0, r.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: `url(#arena-gemini-0-${a2})`
            }),
            (0, r.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: `url(#arena-gemini-1-${a2})`
            }),
            (0, r.jsx)("path", {
              d: "M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z",
              fill: `url(#arena-gemini-2-${a2})`
            }),
            (0, r.jsxs)("defs", {
              children: [
                (0, r.jsxs)("linearGradient", {
                  gradientUnits: "userSpaceOnUse",
                  id: `arena-gemini-0-${a2}`,
                  x1: "7",
                  x2: "11",
                  y1: "15.5",
                  y2: "12",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#08B962" }),
                    (0, r.jsx)("stop", {
                      offset: "1",
                      stopColor: "#08B962",
                      stopOpacity: "0"
                    })
                  ]
                }),
                (0, r.jsxs)("linearGradient", {
                  gradientUnits: "userSpaceOnUse",
                  id: `arena-gemini-1-${a2}`,
                  x1: "8",
                  x2: "11.5",
                  y1: "5.5",
                  y2: "11",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#F94543" }),
                    (0, r.jsx)("stop", {
                      offset: "1",
                      stopColor: "#F94543",
                      stopOpacity: "0"
                    })
                  ]
                }),
                (0, r.jsxs)("linearGradient", {
                  gradientUnits: "userSpaceOnUse",
                  id: `arena-gemini-2-${a2}`,
                  x1: "3.5",
                  x2: "17.5",
                  y1: "13.5",
                  y2: "12",
                  children: [
                    (0, r.jsx)("stop", { stopColor: "#FABC12" }),
                    (0, r.jsx)("stop", {
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
    {
      id: "luna",
      name: "GPT-6 Luna",
      mark: (0, r.jsx)(function({ title: e2 = "OpenAI", ...t2 }) {
        return (0, r.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, r.jsx)("path", {
            d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
          })
        });
      }, {})
    }
  ], ef = () => ({
    phase: "waiting",
    line: "",
    lineKey: 0,
    tokens: 0,
    cost: 0,
    attempt: 1,
    log: [],
    tools: 0
  });
  function ey(e2) {
    return {
      run: 0,
      phase: "idle",
      simulated: true,
      order: e2.map((e3) => e3.id),
      names: Object.fromEntries(e2.map((e3) => [e3.id, e3.name])),
      plan: [],
      lanes: Object.fromEntries(e2.map((e3) => [e3.id, ef()])),
      owner: {},
      summary: "",
      leadTokens: 0,
      leadCost: 0,
      notice: ""
    };
  }
  let ex = (e2) => "planning" === e2 || "running" === e2 || "synthesizing" === e2, e_ = (e2) => "starting" === e2 || "working" === e2 || "error" === e2;
  function eb(e2, t2, a2 = {}) {
    let r2 = e2.findLastIndex((e3) => "tool" === e3.kind && void 0 === e3.end);
    return r2 < 0 ? e2 : e2.map((e3, n2) => n2 === r2 ? { ...e3, end: t2, ...a2 } : e3);
  }
  function ek(e2, t2) {
    if ("workers" === t2.type)
      return ex(e2.phase) ? e2 : { ...ey(t2.workers), run: e2.run };
    if ("reset" === t2.type)
      return {
        ...ey(e2.order.map((t3) => ({ id: t3, name: e2.names[t3] ?? t3 }))),
        run: e2.run + 1,
        phase: "planning",
        simulated: t2.simulated,
        startedAt: t2.now,
        notice: t2.simulated ? "Planning. This is a simulated run; nothing is sent." : "Planning"
      };
    if ("stop" === t2.type) {
      if (!ex(e2.phase)) return e2;
      let a3 = Object.fromEntries(
        Object.entries(e2.lanes).map(([e3, a4]) => [
          e3,
          e_(a4.phase) || "planned" === a4.phase ? {
            ...a4,
            phase: "stopped",
            endedAt: a4.dispatchedAt ? t2.now : void 0,
            log: eb(a4.log, t2.now)
          } : a4
        ])
      );
      return {
        ...e2,
        phase: "stopped",
        lanes: a3,
        endedAt: t2.now,
        notice: "Stopped"
      };
    }
    let { event: a2, now: r2 } = t2, n2 = "subtaskId" in a2 && a2.subtaskId ? e2.owner[a2.subtaskId] : void 0, s2 = n2 ? e2.lanes[n2] : void 0, i2 = (t3, a3 = {}) => n2 && s2 ? { ...e2, ...a3, lanes: { ...e2.lanes, [n2]: { ...s2, ...t3 } } } : e2, o2 = n2 ? e2.names[n2] ?? "A subagent" : "A subagent";
    switch (a2.type) {
      case "plan": {
        let t3 = (a2.subtask.workerId && e2.lanes[a2.subtask.workerId] ? a2.subtask.workerId : void 0) ?? e2.order.find((t4) => !Object.values(e2.owner).includes(t4));
        if (!t3) return e2;
        let r3 = [...e2.plan, a2.subtask];
        return {
          ...e2,
          plan: r3,
          owner: { ...e2.owner, [a2.subtask.id]: t3 },
          lanes: {
            ...e2.lanes,
            [t3]: { ...e2.lanes[t3], subtask: a2.subtask, phase: "planned" }
          }
        };
      }
      case "dispatch":
        return i2(
          { phase: "starting", dispatchedAt: r2 },
          {
            phase: "planning" === e2.phase ? "running" : e2.phase,
            firstDispatchAt: e2.firstDispatchAt ?? r2,
            notice: e2.firstDispatchAt ? e2.notice : `Plan ready. Dispatching ${e2.plan.length} subtasks.`
          }
        );
      case "tool":
        if (!s2) return e2;
        return i2({
          phase: "working",
          error: void 0,
          retryAt: void 0,
          tools: s2.tools + 1,
          tool: {
            kind: a2.tool,
            target: a2.target,
            retry: "working" === s2.phase && s2.log.at(-1)?.kind === "retry"
          },
          log: [
            ...eb(s2.log, r2),
            {
              id: s2.log.length,
              kind: "tool",
              tool: a2.tool,
              target: a2.target,
              at: r2
            }
          ]
        });
      case "toolResult":
        return s2 ? i2({ log: eb(s2.log, r2, { detail: a2.detail }) }) : e2;
      case "output":
        if (!s2) return e2;
        return i2(
          a2.newLine || !s2.line ? { line: a2.delta, lineKey: s2.lineKey + 1 } : { line: s2.line + a2.delta }
        );
      case "usage":
        if (!a2.subtaskId)
          return {
            ...e2,
            leadTokens: e2.leadTokens + a2.tokens,
            leadCost: e2.leadCost + a2.cost
          };
        return s2 ? i2({ tokens: s2.tokens + a2.tokens, cost: s2.cost + a2.cost }) : e2;
      case "error":
        if (!s2) return e2;
        return i2(
          {
            phase: "error",
            error: a2.message,
            retryAt: a2.retryInMs ? r2 + a2.retryInMs : void 0,
            log: eb(s2.log, r2, { failed: true, detail: a2.message })
          },
          {
            notice: `${o2} hit an error: ${a2.message}.${a2.retryInMs ? " Retrying." : ""}`
          }
        );
      case "retry":
        if (!s2) return e2;
        return i2(
          {
            phase: "working",
            attempt: a2.attempt,
            error: void 0,
            retryAt: void 0,
            tool: void 0,
            log: [
              ...s2.log,
              {
                id: s2.log.length,
                kind: "retry",
                detail: `Attempt ${a2.attempt}`,
                at: r2,
                end: r2
              }
            ]
          },
          { notice: `${o2} is retrying` }
        );
      case "result": {
        if (!s2) return e2;
        let t3 = Object.values(e2.lanes).filter(
          (e3) => "done" === e3.phase || "failed" === e3.phase
        ).length + 1, n3 = a2.text ?? s2.line;
        return i2(
          {
            phase: "done",
            endedAt: r2,
            error: void 0,
            line: n3 || s2.line,
            log: [
              ...eb(s2.log, r2),
              { id: s2.log.length, kind: "result", detail: n3, at: r2, end: r2 }
            ]
          },
          {
            lastReturnAt: r2,
            notice: `${o2} returned. ${t3} of ${e2.plan.length} done.`
          }
        );
      }
      case "fail":
        if (!s2) return e2;
        return i2(
          {
            phase: "failed",
            endedAt: r2,
            error: a2.message,
            log: [
              ...eb(s2.log, r2, { failed: true }),
              {
                id: s2.log.length,
                kind: "fail",
                detail: a2.message,
                at: r2,
                end: r2
              }
            ]
          },
          { lastReturnAt: r2, notice: `${o2} failed: ${a2.message}` }
        );
      case "summary":
        return {
          ...e2,
          phase: "synthesizing",
          summary: e2.summary + a2.delta,
          notice: "synthesizing" === e2.phase ? e2.notice : "Every subagent returned. Writing the summary."
        };
      case "done":
        return { ...e2, phase: "done", endedAt: r2 };
    }
  }
  let ej = {
    waiting: "Waiting for the plan",
    planned: "Planned",
    queued: "Queued",
    starting: "Starting",
    working: "Working",
    error: "Failed, retrying",
    done: "Returned",
    failed: "Gave up",
    stopped: "Stopped"
  };
  function ev({ lane: e2, queue: t2, reduced: a2 }) {
    let n2, o2, l2, d2, c2 = Q(a2), u2 = "error" === e2.phase && void 0 !== e2.retryAt;
    if (t2 > 0)
      n2 = `queued-${t2}`, o2 = (0, r.jsx)(V, { kind: "queued", reduced: a2 }), l2 = 1 === t2 ? "Queued, next in line" : `Queued, ${2 === t2 ? "2nd" : 3 === t2 ? "3rd" : `${t2}th`} in line`;
    else
      switch (e2.phase) {
        case "waiting":
          n2 = "waiting", o2 = (0, r.jsx)(V, { kind: "idle", reduced: a2 }), l2 = "Waiting for the plan";
          break;
        case "planned":
          n2 = "planned", o2 = (0, r.jsx)(V, { kind: "idle", reduced: a2 }), l2 = "Planned";
          break;
        case "starting":
          n2 = "starting", o2 = (0, r.jsx)(V, { kind: "active", reduced: a2 }), l2 = (0, r.jsx)(f.n, {
            className: B().shimmer,
            children: "Starting"
          });
          break;
        case "working": {
          let t3 = e2.tool;
          n2 = `tool-${e2.tools}-${t3?.kind ?? "retry"}`, o2 = t3 ? (0, r.jsx)(X, { kind: t3.kind }) : (0, r.jsx)(V, { kind: "active", reduced: a2 });
          let s2 = t3 ? `${Z(t3.kind)}${t3.retry ? `, attempt ${e2.attempt}` : ""}${t3.target ? ` \xB7 ${t3.target}` : ""}` : "Retrying";
          l2 = (0, r.jsx)(f.n, { className: B().shimmer, children: s2 });
          break;
        }
        case "error":
          n2 = "error", d2 = "danger", o2 = (0, r.jsx)(V, { kind: "error", reduced: a2 }), l2 = u2 ? (0, r.jsxs)(r.Fragment, {
            children: [
              "Failed, retrying in ",
              (0, r.jsx)(en, { at: e2.retryAt })
            ]
          }) : "Failed";
          break;
        case "done":
          n2 = "done", d2 = "success", o2 = (0, r.jsx)(V, { kind: "done", reduced: a2 }), l2 = `Returned after ${e2.tools} tool ${1 === e2.tools ? "call" : "calls"}`;
          break;
        case "failed":
          n2 = "failed", d2 = "danger", o2 = (0, r.jsx)(V, { kind: "error", reduced: a2 }), l2 = "Gave up";
          break;
        default:
          n2 = "stopped", o2 = (0, r.jsx)(V, { kind: "stopped", reduced: a2 }), l2 = e2.dispatchedAt ? "Stopped" : "Not started";
      }
    return (0, r.jsx)("span", {
      className: B().swapBox,
      children: (0, r.jsx)(s.N, {
        initial: false,
        mode: "popLayout",
        children: (0, r.jsxs)(
          i.PY1.span,
          {
            className: B().activity,
            "data-tone": d2,
            ...c2,
            children: [
              (0, r.jsx)("span", { className: B().activityIcon, children: o2 }),
              (0, r.jsx)("span", { className: B().activityLabel, children: l2 })
            ]
          },
          n2
        )
      })
    });
  }
  function ew({ lane: e2, reduced: t2 }) {
    let a2, n2, o2, l2 = Q(t2), d2 = e2.subtask?.instruction ?? e2.subtask?.title;
    return ("error" === e2.phase || "failed" === e2.phase) && e2.error ? (a2 = "error", o2 = "danger", n2 = (0, r.jsx)("span", { className: B().clip, children: e2.error })) : e2.line && ("working" === e2.phase || "starting" === e2.phase || "error" === e2.phase) ? (a2 = `line-${e2.lineKey}`, n2 = (0, r.jsx)(el, { text: e2.line, reduced: t2 })) : e2.line ? (a2 = `rest-${e2.lineKey}`, n2 = (0, r.jsx)(el, { text: e2.line, reduced: t2, settled: true })) : (a2 = d2 ? "hint" : "empty", o2 = "muted", n2 = (0, r.jsx)("span", {
      className: B().clip,
      children: d2 ?? "\xA0"
    })), (0, r.jsx)("span", {
      className: B().swapBox,
      children: (0, r.jsx)(s.N, {
        initial: false,
        mode: "popLayout",
        children: (0, r.jsx)(
          i.PY1.span,
          { className: B().output, "data-tone": o2, ...l2, children: n2 },
          a2
        )
      })
    });
  }
  function e$({ lane: e2, reduced: t2 }) {
    return e2.log.length ? (0, r.jsx)("ol", {
      className: B().log,
      children: e2.log.map((e3) => {
        let a2, n2, s2;
        return "tool" === e3.kind ? (a2 = e3.failed ? (0, r.jsx)(V, { kind: "error", reduced: t2 }) : (0, r.jsx)(X, { kind: e3.tool ?? "" }), n2 = `${Z(e3.tool ?? "Tool")}${e3.failed ? " failed" : ""}`, s2 = e3.failed ? "danger" : void 0) : "retry" === e3.kind ? (a2 = (0, r.jsx)(l.A, {
          size: 14,
          strokeWidth: 1.75,
          "aria-hidden": "true"
        }), n2 = "Retried") : "result" === e3.kind ? (a2 = (0, r.jsx)(V, { kind: "done", reduced: true }), n2 = "Returned to the lead", s2 = "success") : (a2 = (0, r.jsx)(V, { kind: "error", reduced: true }), n2 = "Gave up", s2 = "danger"), (0, r.jsxs)(
          "li",
          {
            className: B().logRow,
            "data-tone": s2,
            children: [
              (0, r.jsx)("span", { className: B().logIcon, children: a2 }),
              (0, r.jsxs)("span", {
                className: B().logMain,
                children: [
                  (0, r.jsxs)("span", {
                    className: B().logTitle,
                    children: [
                      n2,
                      e3.target && (0, r.jsxs)("span", {
                        className: B().logTarget,
                        children: [" ", e3.target]
                      })
                    ]
                  }),
                  e3.detail && (0, r.jsx)("span", {
                    className: B().logDetail,
                    children: e3.detail
                  })
                ]
              }),
              "tool" === e3.kind && (0, r.jsx)(er, {
                from: e3.at,
                to: e3.end,
                className: B().logTime
              })
            ]
          },
          e3.id
        );
      })
    }) : (0, r.jsx)("p", {
      className: B().logEmpty,
      children: e2.subtask ? "No tool calls yet." : "This lane has no subtask yet."
    });
  }
  function eN({
    worker: e2,
    lane: t2,
    index: a2,
    queue: o2,
    open: l2,
    reduced: c2,
    onToggle: u2,
    nodeRef: p2
  }) {
    let h2 = (0, n.useId)(), m2 = void 0 !== t2.dispatchedAt, g2 = o2 > 0 ? "queued" : t2.phase;
    return (0, r.jsxs)("div", {
      ref: p2,
      className: B().lane,
      "data-phase": g2,
      style: { "--lane": `var(--series-${a2 % 4 + 1})` },
      children: [
        (0, r.jsxs)("button", {
          type: "button",
          className: B().laneButton,
          "aria-expanded": l2,
          "aria-controls": h2,
          onClick: u2,
          "aria-label": `${t2.subtask?.title ?? "Unassigned"}, ${e2.name}. ${ej[g2]}. ${l2 ? "Hide" : "Show"} transcript`,
          children: [
            (0, r.jsxs)("span", {
              className: B().laneHead,
              children: [
                (0, r.jsx)("span", {
                  className: B().laneMark,
                  "aria-hidden": "true",
                  children: e2.mark
                }),
                (0, r.jsx)("span", {
                  className: B().laneModel,
                  children: e2.name
                }),
                (0, r.jsx)("span", {
                  className: B().laneTime,
                  "data-hidden": !m2 || void 0,
                  children: (0, r.jsx)(er, {
                    from: t2.dispatchedAt,
                    to: t2.endedAt
                  })
                })
              ]
            }),
            (0, r.jsx)("span", {
              className: B().laneTitle,
              "data-muted": !t2.subtask || void 0,
              children: (0, r.jsx)("span", {
                className: B().swapBox,
                children: (0, r.jsx)(s.N, {
                  initial: false,
                  mode: "popLayout",
                  children: (0, r.jsx)(
                    i.PY1.span,
                    {
                      className: B().laneTitleText,
                      ...Q(c2),
                      children: t2.subtask?.title ?? "Unassigned"
                    },
                    t2.subtask?.id ?? "none"
                  )
                })
              })
            }),
            (0, r.jsx)(ev, { lane: t2, queue: o2, reduced: c2 }),
            (0, r.jsx)(ew, { lane: t2, reduced: c2 }),
            (0, r.jsxs)("span", {
              className: B().laneFoot,
              children: [
                (0, r.jsxs)("span", {
                  className: B().laneMetrics,
                  "data-hidden": !m2 || void 0,
                  children: [
                    (0, r.jsxs)("span", {
                      children: [
                        (0, r.jsx)(es, {
                          value: t2.tokens,
                          format: J,
                          reduced: c2
                        }),
                        " tokens"
                      ]
                    }),
                    (0, r.jsx)("span", {
                      className: B().dot,
                      "aria-hidden": "true"
                    }),
                    (0, r.jsx)(es, { value: t2.cost, format: ee, reduced: c2 })
                  ]
                }),
                (0, r.jsx)(d.A, {
                  className: B().chevron,
                  "data-open": l2 || void 0,
                  size: 14,
                  strokeWidth: 1.75,
                  "aria-hidden": "true"
                })
              ]
            })
          ]
        }),
        (0, r.jsx)(i.PY1.div, {
          id: h2,
          className: B().collapse,
          initial: false,
          animate: { height: l2 ? "auto" : 0, opacity: +!!l2 },
          transition: c2 ? H : { height: D, opacity: l2 ? q : G },
          inert: !l2 || void 0,
          children: (0, r.jsx)("div", {
            className: B().transcript,
            children: (0, r.jsx)(e$, { lane: t2, reduced: c2 })
          })
        })
      ]
    });
  }
  function eT({
    goal: e2 = "Compare our pricing page with four competitors and suggest changes",
    plan: t2,
    workers: a2 = eg,
    lead: d2 = em,
    run: y2,
    concurrency: _2,
    defaultConcurrency: b2,
    onConcurrencyChange: k2,
    autoStart: j2 = true,
    onComplete: v2,
    className: w2
  }) {
    let $2, N2, T2, M2, R2, I2, S2, C2 = ($2 = (0, x.I)(), !!((0, n.useSyncExternalStore)(
      Y,
      () => true,
      () => false
    ) && $2)), [E2, z2] = (0, n.useReducer)(ek, a2, ey), [L2, P2] = (0, n.useState)({}), [W2, F2] = (0, n.useState)(-1), U2 = Math.max(1, Math.min(4, a2.length)), [Z2, X2] = (0, n.useState)(() => Math.min(U2, b2 ?? U2)), ea2 = Math.min(U2, Math.max(1, _2 ?? Z2)), en2 = (0, n.useRef)(ea2), es2 = (0, n.useRef)(null), ei2 = (0, n.useRef)(null), eo2 = (0, n.useRef)(null), el2 = (0, n.useRef)(null), eu2 = (0, n.useRef)([]), ep2 = (0, n.useRef)(v2), eb2 = (0, o.W)(ei2, { once: true, amount: 0.3 }), ej2 = (0, n.useRef)(false);
    (0, n.useEffect)(() => {
      en2.current = ea2;
    }, [ea2]), (0, n.useEffect)(() => {
      ep2.current = v2;
    });
    let ev2 = a2.map((e3) => `${e3.id}:${e3.name}`).join("|"), ew2 = (0, n.useRef)(a2);
    (0, n.useEffect)(() => {
      ew2.current = a2;
    }), (0, n.useEffect)(() => {
      z2({ type: "workers", workers: ew2.current });
    }, [ev2]);
    let e$2 = (0, n.useCallback)(() => {
      es2.current?.abort();
      let a3 = new AbortController();
      es2.current = a3, z2({ type: "reset", now: performance.now(), simulated: !y2 });
      let r2 = y2 ?? O, n2 = {
        goal: e2,
        plan: t2 ?? A,
        workers: ew2.current.map(({ id: e3, name: t3 }) => ({
          id: e3,
          name: t3
        })),
        concurrency: () => en2.current,
        signal: a3.signal
      };
      (async () => {
        try {
          for await (let e3 of r2(n2)) {
            if (a3.signal.aborted) break;
            z2({ type: "event", event: e3, now: performance.now() });
          }
        } catch {
          a3.signal.aborted || z2({ type: "stop", now: performance.now() });
        }
      })();
    }, [y2, e2, t2]), eA2 = (0, n.useCallback)(() => {
      es2.current?.abort(), z2({ type: "stop", now: performance.now() });
    }, []);
    (0, n.useEffect)(() => () => es2.current?.abort(), []), (0, n.useEffect)(() => {
      if (!j2 || C2 || !eb2 || ej2.current) return;
      let e3 = window.setTimeout(() => {
        ej2.current = true, e$2();
      }, 450);
      return () => window.clearTimeout(e3);
    }, [j2, C2, eb2, e$2]);
    let eM = (N2 = Object.values(E2.lanes), T2 = E2.leadTokens + N2.reduce((e3, t3) => e3 + t3.tokens, 0), M2 = E2.leadCost + N2.reduce((e3, t3) => e3 + t3.cost, 0), R2 = (E2.endedAt ?? 0) - (E2.startedAt ?? 0), I2 = N2.reduce(
      (e3, t3) => e3 + (void 0 !== t3.dispatchedAt && void 0 !== t3.endedAt ? t3.endedAt - t3.dispatchedAt : 0),
      0
    ), S2 = Math.max(
      R2,
      R2 - (void 0 !== E2.firstDispatchAt && void 0 !== E2.lastReturnAt ? E2.lastReturnAt - E2.firstDispatchAt : 0) + I2
    ), {
      tokens: T2,
      cost: M2,
      wallMs: R2,
      sequentialMs: S2,
      speedup: R2 > 0 ? S2 / R2 : 1
    }), eR = "done" === E2.phase && W2 === E2.run, eI = (0, n.useRef)(-1);
    (0, n.useEffect)(() => {
      eR && eI.current !== E2.run && (eI.current = E2.run, ep2.current?.({
        summary: E2.summary,
        ...eM,
        lanes: E2.plan.map((e3) => {
          let t3 = E2.owner[e3.id] ?? "", a3 = E2.lanes[t3] ?? ef();
          return {
            subtaskId: e3.id,
            workerId: t3,
            status: "done" === a3.phase ? "done" : "failed" === a3.phase ? "failed" : "stopped",
            text: a3.line,
            tokens: a3.tokens,
            cost: a3.cost,
            ms: (a3.endedAt ?? 0) - (a3.dispatchedAt ?? 0)
          };
        })
      }));
    });
    let eS = void 0 !== E2.firstDispatchAt && ex(E2.phase), eC = E2.order.filter((e3) => e_(E2.lanes[e3]?.phase ?? "waiting")).length, eE = E2.order.filter(
      (e3) => eS && eC >= ea2 && E2.lanes[e3]?.phase === "planned"
    ), eO = E2.order.map((e3) => E2.lanes[e3] ?? ef()).filter((e3) => "done" === e3.phase || "failed" === e3.phase).length, ez = "planning" === E2.phase || "idle" === E2.phase ? Math.max(E2.plan.length, (t2 ?? A).length) : E2.plan.length, eB = E2.order.map((e3, t3) => {
      let a3 = E2.lanes[e3] ?? ef();
      return {
        color: `var(--series-${t3 % 4 + 1})`,
        out: "working" === a3.phase || "error" === a3.phase || "done" === a3.phase || "failed" === a3.phase || "stopped" === a3.phase && void 0 !== a3.dispatchedAt,
        back: "done" === a3.phase,
        dispatchKey: a3.dispatchedAt,
        returnKey: "done" === a3.phase ? a3.endedAt : void 0
      };
    }), eL = "idle", eP, eW = false;
    switch (E2.phase) {
      case "idle":
        eP = "Ready";
        break;
      case "planning":
        eL = "active", eP = "Planning", eW = true;
        break;
      case "running":
        eL = "active", eP = eC ? `${eC} working${eE.length ? `, ${eE.length} queued` : ""}` : "Merging results";
        break;
      case "synthesizing":
        eL = "active", eP = "Writing summary", eW = true;
        break;
      case "done":
        eL = "done", eP = "Done";
        break;
      default:
        eL = "stopped", eP = "Stopped";
    }
    let eF = "idle", eD;
    "idle" === E2.phase || "planning" === E2.phase ? eD = `Waits for ${1 === ez ? "one result" : `${ez} results`}` : "running" === E2.phase ? eD = `${eO} of ${E2.plan.length} returned` : "synthesizing" === E2.phase ? (eF = "active", eD = `Merging ${eO} results`) : "done" === E2.phase ? (eF = "done", eD = `Merged ${eO} results`) : (eF = "stopped", eD = `${eO} of ${E2.plan.length} returned`);
    let eq = Q(C2), eG = ex(E2.phase), eH = eM.speedup >= 1.05 ? `${eM.speedup.toFixed(1)}x faster than running in sequence` : "About the same as running in sequence";
    return (0, r.jsxs)("div", {
      ref: ei2,
      className: K(B().root, w2),
      "data-lanes": a2.length,
      children: [
        (0, r.jsxs)("header", {
          className: B().header,
          children: [
            (0, r.jsx)("h3", { className: B().goal, children: e2 }),
            (0, r.jsxs)("div", {
              className: B().toolbar,
              children: [
                (0, r.jsxs)("div", {
                  className: B().limit,
                  children: [
                    (0, r.jsx)("span", {
                      className: B().limitLabel,
                      "aria-hidden": "true",
                      children: "Concurrency"
                    }),
                    (0, r.jsx)(g.A, {
                      label: "Concurrency limit",
                      value: String(ea2),
                      onValueChange: (e3) => {
                        let t3 = Number(e3);
                        void 0 === _2 && X2(t3), k2?.(t3);
                      },
                      options: Array.from({ length: U2 }, (e3, t3) => ({
                        value: String(t3 + 1),
                        label: String(t3 + 1)
                      }))
                    })
                  ]
                }),
                (0, r.jsx)(h.$, {
                  className: B().run,
                  variant: eG ? "secondary" : "primary",
                  onClick: eG ? eA2 : e$2,
                  children: eG ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(c.A, {
                        size: 14,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Stop"
                    ]
                  }) : "idle" === E2.phase ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(u.A, {
                        size: 14,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Run"
                    ]
                  }) : (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(l.A, {
                        size: 14,
                        strokeWidth: 1.75,
                        "aria-hidden": "true"
                      }),
                      "Run again"
                    ]
                  })
                })
              ]
            })
          ]
        }),
        (0, r.jsxs)("div", {
          className: B().flow,
          children: [
            (0, r.jsxs)("section", {
              className: B().node,
              "aria-label": "Lead agent",
              children: [
                (0, r.jsxs)("div", {
                  className: B().nodeRow,
                  children: [
                    (0, r.jsx)("span", {
                      ref: eo2,
                      className: B().nodeMark,
                      "aria-hidden": "true",
                      children: d2.mark
                    }),
                    (0, r.jsxs)("span", {
                      className: B().nodeName,
                      children: [
                        d2.name,
                        (0, r.jsx)("span", {
                          className: B().nodeRole,
                          children: "Lead"
                        })
                      ]
                    }),
                    (0, r.jsxs)("span", {
                      className: B().nodeStatus,
                      children: [
                        (0, r.jsx)("span", {
                          className: B().swapBox,
                          children: (0, r.jsx)(s.N, {
                            initial: false,
                            mode: "popLayout",
                            children: (0, r.jsxs)(
                              i.PY1.span,
                              {
                                className: B().statusInner,
                                ...eq,
                                children: [
                                  (0, r.jsx)("span", {
                                    className: B().activityIcon,
                                    children: (0, r.jsx)(V, {
                                      kind: eL,
                                      reduced: C2
                                    })
                                  }),
                                  eW ? (0, r.jsx)(f.n, {
                                    className: B().shimmer,
                                    children: eP
                                  }) : (0, r.jsx)("span", { children: eP })
                                ]
                              },
                              `${eL}-${eP}`
                            )
                          })
                        }),
                        void 0 !== E2.startedAt && (0, r.jsx)(er, {
                          from: E2.startedAt,
                          to: E2.endedAt,
                          className: B().nodeTime
                        })
                      ]
                    })
                  ]
                }),
                (0, r.jsxs)("div", {
                  className: B().nodeBody,
                  children: [
                    (0, r.jsx)(s.N, {
                      initial: false,
                      children: "idle" === E2.phase && (0, r.jsx)(
                        i.PY1.p,
                        {
                          className: B().hint,
                          initial: C2 ? { opacity: 0 } : { opacity: 0, height: 0 },
                          animate: { opacity: 1, height: "auto" },
                          exit: C2 ? { opacity: 0, transition: H } : {
                            opacity: 0,
                            height: 0,
                            transition: { height: D, opacity: G }
                          },
                          transition: C2 ? H : { height: D, opacity: q },
                          children: (0, r.jsxs)("span", {
                            className: B().hintInner,
                            children: [
                              "Writes a plan, then splits it across ",
                              a2.length,
                              " subagents."
                            ]
                          })
                        },
                        "hint"
                      )
                    }),
                    (0, r.jsx)("ol", {
                      className: B().plan,
                      "aria-label": "Plan",
                      children: (0, r.jsx)(s.N, {
                        initial: false,
                        children: E2.plan.map((e3) => {
                          let t3 = E2.order.indexOf(E2.owner[e3.id] ?? "");
                          return (0, r.jsx)(
                            i.PY1.li,
                            {
                              className: B().planItem,
                              initial: C2 ? { opacity: 0 } : { opacity: 0, height: 0 },
                              animate: { opacity: 1, height: "auto" },
                              exit: C2 ? { opacity: 0, transition: H } : {
                                opacity: 0,
                                height: 0,
                                transition: { height: D, opacity: G }
                              },
                              transition: C2 ? H : { height: D, opacity: q },
                              children: (0, r.jsxs)("span", {
                                className: B().planInner,
                                children: [
                                  (0, r.jsx)("span", {
                                    className: B().planDot,
                                    style: {
                                      "--lane": `var(--series-${Math.max(0, t3) % 4 + 1})`
                                    },
                                    "aria-hidden": "true"
                                  }),
                                  (0, r.jsx)("span", {
                                    className: B().planText,
                                    children: (0, r.jsx)(ed, {
                                      text: e3.instruction ?? e3.title,
                                      reduced: C2
                                    })
                                  })
                                ]
                              })
                            },
                            `${E2.run}-${e3.id}`
                          );
                        })
                      })
                    })
                  ]
                })
              ]
            }),
            (0, r.jsx)("div", {
              className: B().lanes,
              style: { "--count": a2.length },
              children: a2.map((e3, t3) => {
                let a3;
                return (0, r.jsx)(
                  eN,
                  {
                    worker: e3,
                    index: t3,
                    lane: E2.lanes[e3.id] ?? ef(),
                    queue: (a3 = e3.id, eE.indexOf(a3) + 1),
                    open: !!L2[e3.id],
                    reduced: C2,
                    onToggle: () => P2((t4) => ({ ...t4, [e3.id]: !t4[e3.id] })),
                    nodeRef: (e4) => {
                      eu2.current[t3] = e4;
                    }
                  },
                  e3.id
                );
              })
            }),
            (0, r.jsxs)("section", {
              className: B().node,
              "aria-label": "Summary",
              children: [
                (0, r.jsxs)("div", {
                  className: B().nodeRow,
                  children: [
                    (0, r.jsx)("span", {
                      ref: el2,
                      className: B().nodeMark,
                      "aria-hidden": "true",
                      children: d2.mark
                    }),
                    (0, r.jsx)("span", {
                      className: B().nodeName,
                      children: "Summary"
                    }),
                    (0, r.jsx)("span", {
                      className: B().nodeStatus,
                      children: (0, r.jsx)("span", {
                        className: B().swapBox,
                        children: (0, r.jsx)(s.N, {
                          initial: false,
                          mode: "popLayout",
                          children: (0, r.jsxs)(
                            i.PY1.span,
                            {
                              className: B().statusInner,
                              ...eq,
                              children: [
                                (0, r.jsx)("span", {
                                  className: B().activityIcon,
                                  children: (0, r.jsx)(V, {
                                    kind: eF,
                                    reduced: C2
                                  })
                                }),
                                (0, r.jsx)("span", { children: eD })
                              ]
                            },
                            `${eF}-${eD}`
                          )
                        })
                      })
                    })
                  ]
                }),
                (0, r.jsxs)("div", {
                  className: B().nodeBody,
                  children: [
                    (0, r.jsx)(s.N, {
                      initial: false,
                      mode: "popLayout",
                      children: E2.summary ? (0, r.jsx)(
                        i.PY1.div,
                        {
                          initial: { opacity: 1 },
                          exit: { opacity: 0, transition: C2 ? H : G },
                          children: (0, r.jsx)(ec, {
                            text: E2.summary,
                            reduced: C2,
                            complete: "done" === E2.phase,
                            onSettled: () => F2(E2.run)
                          })
                        },
                        `summary-${E2.run}`
                      ) : (0, r.jsx)(
                        i.PY1.p,
                        {
                          className: B().hint,
                          ...eq,
                          children: "stopped" === E2.phase ? "Stopped before the lead could merge the results." : "The lead merges what the subagents return here."
                        },
                        "hint"
                      )
                    }),
                    (0, r.jsx)(s.N, {
                      initial: false,
                      children: eR && (0, r.jsx)(
                        i.PY1.div,
                        {
                          className: B().totalsWrap,
                          initial: C2 ? { opacity: 0 } : { opacity: 0, height: 0 },
                          animate: { opacity: 1, height: "auto" },
                          exit: C2 ? { opacity: 0, transition: H } : {
                            opacity: 0,
                            height: 0,
                            transition: { height: D, opacity: G }
                          },
                          transition: C2 ? H : { height: D, opacity: { ...q, delay: 0.04 } },
                          children: (0, r.jsxs)("div", {
                            className: B().totals,
                            children: [
                              (0, r.jsxs)("dl", {
                                className: B().stats,
                                children: [
                                  (0, r.jsxs)("div", {
                                    children: [
                                      (0, r.jsx)("dt", {
                                        children: "Tokens"
                                      }),
                                      (0, r.jsx)("dd", {
                                        className: B().tabular,
                                        children: J(eM.tokens)
                                      })
                                    ]
                                  }),
                                  (0, r.jsxs)("div", {
                                    children: [
                                      (0, r.jsx)("dt", { children: "Cost" }),
                                      (0, r.jsx)("dd", {
                                        className: B().tabular,
                                        children: ee(eM.cost)
                                      })
                                    ]
                                  }),
                                  (0, r.jsxs)("div", {
                                    children: [
                                      (0, r.jsx)("dt", {
                                        children: "Wall time"
                                      }),
                                      (0, r.jsx)("dd", {
                                        className: B().tabular,
                                        children: et(eM.wallMs)
                                      })
                                    ]
                                  }),
                                  (0, r.jsxs)("div", {
                                    children: [
                                      (0, r.jsx)("dt", {
                                        children: "In sequence"
                                      }),
                                      (0, r.jsx)("dd", {
                                        className: B().tabular,
                                        children: et(eM.sequentialMs)
                                      })
                                    ]
                                  })
                                ]
                              }),
                              (0, r.jsxs)("div", {
                                className: B().speedRow,
                                children: [
                                  (0, r.jsxs)("span", {
                                    className: B().speed,
                                    children: [
                                      (0, r.jsx)(p.A, {
                                        size: 14,
                                        strokeWidth: 1.75,
                                        "aria-hidden": "true"
                                      }),
                                      eH
                                    ]
                                  }),
                                  (0, r.jsx)(m.CopyButton, {
                                    value: E2.summary,
                                    label: "Copy summary",
                                    variant: "plain",
                                    className: B().copy
                                  })
                                ]
                              })
                            ]
                          })
                        },
                        `totals-${E2.run}`
                      )
                    })
                  ]
                })
              ]
            }),
            (0, r.jsx)(eh, {
              lead: eo2,
              summary: el2,
              nodes: eu2,
              lanes: eB,
              reduced: C2
            })
          ]
        }),
        (0, r.jsx)("p", {
          className: B().srOnly,
          role: "status",
          "aria-live": "polite",
          children: "done" === E2.phase && eR ? `Done in ${et(eM.wallMs)}, ${eH}.` : E2.notice
        })
      ]
    });
  }
  let eA = eT;
}

__m(__module,__exports,__require);
}