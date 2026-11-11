function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, {
    CatchUp: () => X,
    default: () => en,
    demoCounts: () => A,
    demoDigest: () => H,
    demoRanges: () => T
  });
  var i = a(95155), n = a(12115), r = a(18310), s = a(80642), o = a(25354), l = a(35484), c = a(87791), d = a(54154), u = a(14577), h = a(64577), p = a(9751), m = a(7770), f = a(51288), _ = a(66558), g = a(52898), y = a(36690);
  let x = {
    slack: function({ title: e2 = "Slack", ...t2 }) {
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
    },
    linear: function({ title: e2 = "Linear", ...t2 }) {
      return (0, i.jsx)("svg", {
        viewBox: "0 0 24 24",
        role: "img",
        "aria-label": e2,
        ...t2,
        children: (0, i.jsx)("path", {
          fill: "#5E6AD2",
          d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
        })
      });
    },
    github: function({ title: e2 = "GitHub", ...t2 }) {
      return (0, i.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...t2,
        children: (0, i.jsx)("path", {
          d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        })
      });
    },
    gmail: function({ title: e2 = "Gmail", ...t2 }) {
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
  };
  function b({ source: e2, className: t2, decorative: a2 = true }) {
    let n2 = x[e2];
    return (0, i.jsx)(n2, {
      className: t2,
      "aria-hidden": a2 || void 0,
      role: a2 ? void 0 : "img"
    });
  }
  let v = ["slack", "linear", "github", "gmail"], w = { slack: "Slack", linear: "Linear", github: "GitHub", gmail: "Gmail" }, j = {
    slack: ["message", "messages"],
    linear: ["issue", "issues"],
    github: ["PR", "PRs"],
    gmail: ["thread", "threads"]
  }, N = ["needs-you", "decisions", "shipped", "fyi"], k = {
    "needs-you": "Needs you",
    decisions: "Decisions made",
    shipped: "Shipped",
    fyi: "FYI"
  }, T = [
    { value: "1d", label: "1 day", since: "Sun 26 Oct" },
    { value: "3d", label: "3 days", since: "Fri 24 Oct" },
    { value: "1w", label: "1 week", since: "Mon 20 Oct" }
  ], A = {
    "1d": { slack: 31, linear: 9, github: 6, gmail: 4 },
    "3d": { slack: 86, linear: 31, github: 18, gmail: 7 },
    "1w": { slack: 214, linear: 77, github: 46, gmail: 19 }
  }, M = (e2, t2) => ({ name: e2, avatar: `media/people/${t2}.svg` }), S = M("Nathan Cole", "nathan-cole"), $ = M("Diane Foster", "diane-foster"), E = M("Ava Mitchell", "ava-mitchell"), C = M("Jasmine Brooks", "jasmine-brooks"), I = M("Emma Collins", "emma-collins"), R = M("Marcus Johnson", "marcus-johnson"), z = M("Olivia Bennett", "olivia-bennett"), B = M("Daniel Kim", "daniel-kim"), P = M("Chloe Nguyen", "chloe-nguyen"), L = M("Andre Williams", "andre-williams"), O = M("Ryan Sullivan", "ryan-sullivan"), W = [
    {
      id: "eng-2814",
      age: 1.4,
      section: "needs-you",
      source: "linear",
      text: "Nathan wants a fix plan for the checkout timeout before Tuesday's release cut.",
      context: "ENG-2814",
      when: "07:48",
      people: [S]
    },
    {
      id: "pricing-copy",
      age: 20,
      section: "needs-you",
      source: "slack",
      text: "Diane needs your sign-off on the Q4 pricing page copy by noon today.",
      context: "#launch-q4",
      when: "Sun 13:10",
      people: [$, E]
    },
    {
      id: "stripe-tax",
      age: 94,
      section: "needs-you",
      source: "gmail",
      text: "Stripe needs an updated tax ID by 31 Oct to keep payouts running.",
      context: "Stripe billing",
      when: "Thu 11:05",
      people: [L]
    },
    {
      id: "dark-mode",
      age: 41,
      section: "decisions",
      source: "slack",
      text: "Dark mode ships behind a flag first, and the beta waitlist is dropped.",
      context: "#design-system",
      when: "Sat 16:40",
      people: [C, I, R]
    },
    {
      id: "infra-412",
      age: 60,
      section: "decisions",
      source: "linear",
      text: "The Postgres 17 upgrade moves to November so the release keeps its date.",
      context: "INFRA-412",
      when: "Fri 21:05",
      people: [z, B]
    },
    {
      id: "northwind-dpa",
      age: 90,
      section: "decisions",
      source: "gmail",
      text: "Legal approved the revised Northwind DPA, so the contract goes out this week.",
      context: "Re: Northwind DPA",
      when: "Thu 15:20",
      people: [L, O]
    },
    {
      id: "pr-1482",
      age: 3,
      section: "shipped",
      source: "github",
      text: "The new onboarding flow is merged and preview deploys are green.",
      context: "web #1482",
      when: "06:02",
      people: [R]
    },
    {
      id: "api-2-14",
      age: 45,
      section: "shipped",
      source: "github",
      text: "API v2.14 is live with rate limit headers and 38% faster search.",
      context: "api v2.14.0",
      when: "Sat 12:10",
      people: [B, P]
    },
    {
      id: "acme-renewal",
      age: 22,
      section: "fyi",
      source: "gmail",
      text: "Acme renewed for two years at $84k ARR, with Ryan running the kickoff.",
      context: "Acme renewal",
      when: "Sun 11:10",
      people: [O, M("Tyler Hayes", "tyler-hayes")]
    },
    {
      id: "support-volume",
      age: 66,
      section: "fyi",
      source: "slack",
      text: "Support tickets are up 18% since the pricing email, mostly about seat limits.",
      context: "#support",
      when: "Fri 15:20",
      people: [
        M("Hannah Walsh", "hannah-walsh"),
        M("Jordan Reyes", "jordan-reyes")
      ]
    }
  ], D = { "1d": 24, "3d": 72, "1w": 168 };
  function H(e2) {
    let t2 = D[e2] ?? 72;
    return W.filter((e3) => e3.age <= t2).map((e3) => {
      let { age: t3, ...a2 } = e3;
      return a2;
    });
  }
  var Y = a(19612), F = a.n(Y);
  let G = { "needs-you": l.A, decisions: c.A, shipped: d.A, fyi: u.A }, J = [...m.T.ease.standard], V = { type: "spring", visualDuration: 0.24, bounce: 0 }, q = { duration: 0.2, ease: J }, Z = { duration: 0.16, ease: J }, K = {
    name: "Claude Haiku 5.5",
    mark: (0, i.jsx)(
      function({ title: e2 = "Claude", ...t2 }) {
        return (0, i.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "#D97757",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, i.jsx)("path", {
            d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
          })
        });
      },
      { className: F().modelMark, "aria-hidden": true }
    )
  }, Q = (e2, [t2, a2]) => `${e2} ${1 === e2 ? t2 : a2}`, U = (e2) => v.reduce((t2, a2) => t2 + (e2[a2] ?? 0), 0);
  function X({
    generate: e2,
    ranges: t2 = T,
    range: a2,
    defaultRange: c2,
    onRangeChange: d2,
    counts: u2 = A,
    onOpen: m2,
    onMarkRead: y2,
    model: x2 = K,
    title: M2 = "Welcome back",
    autoStart: S2,
    className: $2
  }) {
    let E2 = (0, n.useId)(), C2 = (0, r.I)() ?? false, I2 = !e2, [R2, z2] = (0, n.useState)(c2 ?? t2[1]?.value ?? t2[0]?.value ?? ""), B2 = a2 ?? R2, P2 = t2.find((e3) => e3.value === B2) ?? t2[0], L2 = U(u2[B2] ?? {}), [O2, W2] = (0, n.useState)("idle"), [D2, Y2] = (0, n.useState)([]), [V2, et2] = (0, n.useState)(() => /* @__PURE__ */ new Set()), [en2, er] = (0, n.useState)(0), [es, eo] = (0, n.useState)(0), [el, ec] = (0, n.useState)(""), [ed, eu] = (0, n.useState)(""), [eh, ep] = (0, n.useState)(""), [em, ef] = (0, n.useState)(false), e_ = (0, n.useRef)(null), eg = (0, n.useRef)(null), ey = (0, n.useRef)(null), ex = (0, n.useRef)({ instant: 0, flash: 0 }), eb = (0, n.useMemo)(() => {
      let e3 = 0, t3 = N.map((e4) => ({
        id: e4,
        items: D2.filter((t4) => t4.section === e4)
      })).filter((e4) => e4.items.length), a3 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map();
      for (let n2 of t3)
        for (let t4 of (i2.set(n2.id, e3), n2.items)) {
          let i3 = t4.text.split(/\s+/).filter(Boolean);
          a3.set(t4.id, { start: e3, words: i3 }), e3 += i3.length + 3;
        }
      return {
        sections: t3,
        entries: a3,
        starts: i2,
        order: t3.flatMap((e4) => e4.items),
        end: e3
      };
    }, [D2]), ev = eb.order.filter((e3) => !V2.has(e3.id)), ew = D2.filter((e3) => "needs-you" === e3.section).length, ej = (0, n.useCallback)(
      async (a3) => {
        e_.current?.abort();
        let i2 = new AbortController();
        e_.current = i2;
        let { signal: n2 } = i2, r2 = t2.find((e3) => e3.value === a3)?.label ?? a3, s2 = U(u2[a3] ?? {});
        W2("reading"), Y2([]), et2(/* @__PURE__ */ new Set()), er(0), ec(""), ep(""), eo(C2 ? v.length : 0), eu(`Reading ${s2} updates from the last ${r2}.`);
        let o2 = C2 ? 0 : window.setInterval(
          () => eo((e3) => Math.min(v.length, e3 + 1)),
          170
        ), l2 = performance.now();
        try {
          let t3 = e2 ? await e2(a3, n2) : H(a3), i3 = 860 - (performance.now() - l2);
          if (i3 > 0 && !C2 && await new Promise((e3) => {
            let t4 = window.setTimeout(e3, i3);
            n2.addEventListener(
              "abort",
              () => {
                window.clearTimeout(t4), e3();
              },
              { once: true }
            );
          }), n2.aborted)
            return;
          if (eo(v.length), Y2(t3), !t3.length) {
            W2("empty"), eu(`Nothing needs you from the last ${r2}.`);
            return;
          }
          W2("streaming");
        } catch (e3) {
          if (n2.aborted) return;
          W2("error"), ec(
            e3 instanceof Error && e3.message ? e3.message : "One of your sources did not respond."
          ), eu("Couldn't build your digest.");
        } finally {
          window.clearInterval(o2);
        }
      },
      [u2, e2, t2, C2]
    );
    (0, n.useEffect)(() => {
      if ("streaming" !== O2) return;
      let e3 = 0, t3 = 0, a3 = () => {
        if (er(e3 = C2 ? eb.end : Math.min(eb.end, e3 + 4)), e3 < eb.end) {
          t3 = window.setTimeout(a3, 34);
          return;
        }
        W2("ready"), eu(
          `Digest ready: ${Q(eb.order.length, ["item", "items"])}, ${ew} ${1 === ew ? "needs" : "need"} you.${I2 ? " Simulated, nothing was read from your accounts." : ""}`
        );
      };
      return t3 = window.setTimeout(a3, 34 * !C2), () => window.clearTimeout(t3);
    }, [O2, C2, eb, ew, I2]);
    let eN = S2 ?? I2, ek = (0, n.useRef)(false);
    (0, n.useEffect)(() => {
      let e3 = eg.current;
      if (!eN || !e3 || "u" < typeof IntersectionObserver) return;
      let t3 = 0, a3 = new IntersectionObserver(
        ([e4]) => {
          e4?.isIntersecting && !ek.current && (ek.current = true, a3.disconnect(), t3 = window.setTimeout(() => {
            ej(B2);
          }, 700));
        },
        { threshold: 0.5 }
      );
      return a3.observe(e3), () => {
        a3.disconnect(), window.clearTimeout(t3);
      };
    }, [eN, ej, B2]), (0, n.useEffect)(() => {
      let e3 = ex.current;
      return () => {
        e_.current?.abort(), window.clearTimeout(e3.instant), window.clearTimeout(e3.flash);
      };
    }, []);
    let eT = (e3, t3) => {
      let a3 = new Set(V2);
      e3.forEach((e4) => a3.add(e4));
      let i2 = eb.order.filter((e4) => !a3.has(e4.id));
      if (y2?.(e3), !i2.length) {
        et2(a3), W2("done"), eu(
          `You're all caught up.${I2 ? " Simulated, nothing was changed in your apps." : ""}`
        ), requestAnimationFrame(() => ey.current?.focus());
        return;
      }
      if (ef(true), window.clearTimeout(ex.current.instant), ex.current.instant = window.setTimeout(() => ef(false), 320), et2(a3), eu(`Marked as read. ${i2.length} left.`), t3) {
        let e4 = ev.findIndex((e5) => e5.id === t3), i3 = ev.slice(e4 + 1).find((e5) => !a3.has(e5.id)) ?? ev.slice(0, e4).reverse().find((e5) => !a3.has(e5.id));
        i3 && requestAnimationFrame(
          () => document.getElementById(`${E2}-read-${i3.id}`)?.focus()
        );
      }
    }, eA = "reading" === O2 || "streaming" === O2 ? { label: "Stop", variant: "secondary" } : "ready" === O2 ? { label: "Mark all as read", variant: "primary" } : "error" === O2 ? { label: "Try again", variant: "primary" } : "done" === O2 || "empty" === O2 ? { label: "Start over", variant: "secondary" } : {
      label: `Catch up on ${P2?.label ?? ""}`.trim(),
      variant: "primary"
    }, eM = P2?.since ?? "", eS = "reading" === O2 ? `Reading ${L2} updates` : "streaming" === O2 || "ready" === O2 ? `${eb.order.length} worth your time, from ${L2} updates` : "done" === O2 ? `All ${eb.order.length} cleared, from ${L2} updates` : "empty" === O2 ? `Nothing new since ${eM}` : `${L2} updates since ${eM}`, e$ = "streaming" === O2 || "ready" === O2 ? "digest" : "done" === O2 || "empty" === O2 || "error" === O2 ? O2 : "sources";
    return (0, i.jsxs)("div", {
      ref: eg,
      className: [F().root, $2].filter(Boolean).join(" "),
      "data-phase": O2,
      children: [
        (0, i.jsxs)("header", {
          className: F().header,
          children: [
            (0, i.jsxs)("div", {
              className: F().heading,
              children: [
                (0, i.jsx)("h2", { className: F().title, children: M2 }),
                (0, i.jsx)(ea, {
                  id: eS,
                  reduced: C2,
                  className: F().summary,
                  children: "reading" === O2 ? (0, i.jsx)(g.n, {
                    className: F().shimmer,
                    children: eS
                  }) : eS
                })
              ]
            }),
            (0, i.jsx)(_.A, {
              className: F().ranges,
              label: "Time range",
              value: B2,
              onValueChange: (e3) => {
                e3 !== B2 && (void 0 === a2 && z2(e3), d2?.(e3), ek.current = true, "idle" !== O2 && ej(e3));
              },
              options: t2.map((e3) => ({ value: e3.value, label: e3.label }))
            })
          ]
        }),
        (0, i.jsx)(ei, {
          reduced: C2,
          instant: em,
          children: (0, i.jsx)(s.N, {
            mode: "wait",
            initial: false,
            children: (0, i.jsx)(
              o.PY1.div,
              {
                className: F().body,
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: Z },
                exit: { opacity: 0, transition: { duration: 0.1, ease: J } },
                children: "sources" === e$ ? (0, i.jsx)("ul", {
                  className: F().sources,
                  "aria-label": "Sources",
                  children: v.map((e3, t3) => {
                    let a3 = u2[B2]?.[e3] ?? 0, n2 = "reading" === O2 ? t3 < es ? "read" : "reading" : "idle";
                    return (0, i.jsxs)(
                      "li",
                      {
                        className: F().source,
                        children: [
                          (0, i.jsx)(b, {
                            source: e3,
                            className: F().mark
                          }),
                          (0, i.jsxs)("span", {
                            className: F().sourceText,
                            children: [
                              (0, i.jsx)("span", {
                                className: F().sourceName,
                                children: w[e3]
                              }),
                              (0, i.jsx)(ea, {
                                id: `${B2}-${a3}`,
                                reduced: C2,
                                className: F().sourceCount,
                                children: Q(a3, j[e3])
                              })
                            ]
                          }),
                          (0, i.jsx)("span", {
                            className: F().sourceState,
                            "aria-hidden": "true",
                            children: (0, i.jsx)(s.N, {
                              initial: false,
                              children: "reading" === n2 ? (0, i.jsx)(
                                o.PY1.span,
                                {
                                  className: F().spinner,
                                  initial: { opacity: 0 },
                                  animate: { opacity: 1 },
                                  exit: { opacity: 0 },
                                  transition: Z
                                },
                                "reading"
                              ) : "read" === n2 ? (0, i.jsx)(
                                o.PY1.span,
                                {
                                  className: F().checkIcon,
                                  initial: C2 ? { opacity: 0 } : { opacity: 0, scale: 0.8 },
                                  animate: {
                                    opacity: 1,
                                    scale: 1
                                  },
                                  exit: { opacity: 0 },
                                  transition: Z,
                                  children: (0, i.jsx)(h.A, {
                                    size: 14,
                                    strokeWidth: 2.25
                                  })
                                },
                                "read"
                              ) : null
                            })
                          })
                        ]
                      },
                      e3
                    );
                  })
                }) : "digest" === e$ ? (0, i.jsx)("div", {
                  className: F().digest,
                  children: (0, i.jsx)(s.N, {
                    initial: false,
                    children: eb.sections.map((e3) => {
                      let t3 = e3.items.filter((e4) => !V2.has(e4.id));
                      if (!t3.length) return null;
                      let a3 = G[e3.id], n2 = `${E2}-${e3.id}`;
                      return (0, i.jsx)(
                        o.PY1.section,
                        {
                          className: F().section,
                          "aria-labelledby": n2,
                          initial: false,
                          exit: C2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                          transition: q,
                          children: (0, i.jsxs)("div", {
                            className: F().sectionInner,
                            children: [
                              (0, i.jsxs)("h3", {
                                id: n2,
                                className: F().sectionHead,
                                "data-section": e3.id,
                                "data-on": en2 >= (eb.starts.get(e3.id) ?? 0) || void 0,
                                children: [
                                  (0, i.jsx)(a3, {
                                    size: 14,
                                    strokeWidth: 2,
                                    "aria-hidden": "true",
                                    className: F().sectionIcon
                                  }),
                                  (0, i.jsx)("span", {
                                    children: k[e3.id]
                                  }),
                                  (0, i.jsx)(ea, {
                                    id: String(t3.length),
                                    reduced: C2,
                                    className: F().sectionCount,
                                    children: t3.length
                                  })
                                ]
                              }),
                              (0, i.jsx)("ul", {
                                className: F().items,
                                children: (0, i.jsx)(s.N, {
                                  initial: false,
                                  children: t3.map((e4) => {
                                    let t4 = eb.entries.get(e4.id) ?? {
                                      start: 0,
                                      words: []
                                    };
                                    return (0, i.jsx)(
                                      o.PY1.li,
                                      {
                                        className: F().item,
                                        initial: false,
                                        exit: C2 ? { opacity: 0 } : { height: 0, opacity: 0 },
                                        transition: q,
                                        children: (0, i.jsx)(ee, {
                                          item: e4,
                                          words: t4.words,
                                          shown: Math.max(
                                            0,
                                            Math.min(
                                              t4.words.length,
                                              en2 - t4.start
                                            )
                                          ),
                                          started: en2 > t4.start,
                                          uid: E2,
                                          hrefMode: !!(e4.href && !m2),
                                          onOpen: () => ((e5) => {
                                            if (m2) return void m2(e5);
                                            let t5 = `${e5.context ? `${e5.context} in ` : ""}${w[e5.source]}`;
                                            e5.href || (ep(`Would open ${t5}`), window.clearTimeout(
                                              ex.current.flash
                                            ), ex.current.flash = window.setTimeout(
                                              () => ep(""),
                                              2400
                                            ), eu(
                                              `Simulated, would open ${t5}.`
                                            ));
                                          })(e4),
                                          onRead: () => eT([e4.id], e4.id)
                                        })
                                      },
                                      e4.id
                                    );
                                  })
                                })
                              })
                            ]
                          })
                        },
                        e3.id
                      );
                    })
                  })
                }) : (0, i.jsxs)("div", {
                  className: F().outcome,
                  "data-tone": "error" === O2 ? "danger" : "success",
                  children: [
                    "error" === O2 ? (0, i.jsx)(l.A, {
                      size: 16,
                      strokeWidth: 2,
                      "aria-hidden": "true",
                      className: F().outcomeIcon
                    }) : (0, i.jsx)(h.A, {
                      size: 16,
                      strokeWidth: 2.25,
                      "aria-hidden": "true",
                      className: F().outcomeIcon
                    }),
                    (0, i.jsx)("p", {
                      className: F().outcomeTitle,
                      children: "error" === O2 ? "Couldn't build your digest" : "empty" === O2 ? "Nothing needs you" : "You're all caught up"
                    }),
                    (0, i.jsx)("p", {
                      className: F().outcomeText,
                      children: "error" === O2 ? el : "empty" === O2 ? `${L2} updates, none worth your time.` : "Your next digest is ready tomorrow at 09:00."
                    })
                  ]
                })
              },
              e$
            )
          })
        }),
        (0, i.jsxs)("footer", {
          className: F().footer,
          children: [
            (0, i.jsx)(ea, {
              id: eh || "model",
              reduced: C2,
              className: F().status,
              children: eh ? (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(p.A, {
                    size: 14,
                    strokeWidth: 2,
                    "aria-hidden": "true",
                    className: F().statusIcon
                  }),
                  (0, i.jsxs)("span", {
                    className: F().statusText,
                    children: [
                      eh,
                      (0, i.jsx)("span", {
                        className: F().simTag,
                        children: " \xB7 simulated"
                      })
                    ]
                  })
                ]
              }) : (0, i.jsxs)(i.Fragment, {
                children: [
                  x2.mark ?? null,
                  (0, i.jsx)("span", {
                    className: F().statusText,
                    children: x2.name
                  })
                ]
              })
            }),
            (0, i.jsx)(f.$, {
              ref: ey,
              className: F().action,
              variant: eA.variant,
              onClick: () => {
                "reading" === O2 || "streaming" === O2 ? (e_.current?.abort(), W2("idle"), Y2([]), er(0), eo(0), eu("Stopped.")) : "ready" === O2 ? eT(ev.map((e3) => e3.id)) : "done" === O2 || "empty" === O2 ? (W2("idle"), Y2([]), et2(/* @__PURE__ */ new Set()), er(0), eo(0), eu("")) : ej(B2);
              },
              children: eA.label
            })
          ]
        }),
        (0, i.jsx)("p", {
          className: F().srOnly,
          "aria-live": "polite",
          "aria-atomic": "true",
          children: ed
        })
      ]
    });
  }
  function ee({
    item: e2,
    words: t2,
    shown: a2,
    started: n2,
    uid: r2,
    hrefMode: s2,
    onOpen: o2,
    onRead: l2
  }) {
    let c2 = a2 >= t2.length, d2 = e2.people ?? [], u2 = d2[0]?.name, m2 = [
      u2 ? `${u2}${d2.length > 1 ? ` +${d2.length - 1}` : ""}` : "",
      e2.context ?? "",
      e2.when ?? ""
    ].filter(Boolean), f2 = w[e2.source], _2 = `Open in ${f2}`, g2 = { tabIndex: c2 ? 0 : -1, "aria-hidden": !c2 || void 0 };
    return (0, i.jsxs)("div", {
      className: F().row,
      "data-started": n2 || void 0,
      "data-complete": c2 || void 0,
      children: [
        (0, i.jsx)(b, {
          source: e2.source,
          className: [F().mark, F().rowMark].join(" ")
        }),
        (0, i.jsxs)("div", {
          className: F().rowBody,
          children: [
            (0, i.jsxs)("p", {
              className: F().text,
              "aria-hidden": !n2 || void 0,
              children: [
                (0, i.jsxs)("span", {
                  className: F().srOnly,
                  children: [f2, ": "]
                }),
                t2.map(
                  (e3, n3) => (0, i.jsxs)(
                    "span",
                    {
                      className: F().word,
                      "data-on": n3 < a2 || void 0,
                      children: [e3, n3 < t2.length - 1 ? " " : ""]
                    },
                    n3
                  )
                ),
                (0, i.jsx)("span", {
                  className: F().skeletonText,
                  "aria-hidden": "true"
                })
              ]
            }),
            (0, i.jsxs)("p", {
              className: F().meta,
              "aria-hidden": !c2 || void 0,
              children: [
                d2.length ? (0, i.jsx)("span", {
                  className: F().faces,
                  children: d2.slice(0, 3).map((e3) => (0, i.jsx)(et, { person: e3 }, e3.name))
                }) : null,
                (0, i.jsx)("span", {
                  className: F().metaText,
                  children: m2.join(" \xB7 ")
                }),
                (0, i.jsx)("span", {
                  className: F().skeletonMeta,
                  "aria-hidden": "true"
                })
              ]
            })
          ]
        }),
        (0, i.jsxs)("div", {
          className: F().actions,
          children: [
            (0, i.jsx)(y.m, {
              content: _2,
              children: s2 ? (0, i.jsx)("a", {
                className: F().iconButton,
                href: e2.href,
                target: "_blank",
                rel: "noreferrer",
                "aria-label": _2,
                ...g2,
                children: (0, i.jsx)(p.A, {
                  size: 16,
                  strokeWidth: 2,
                  "aria-hidden": "true"
                })
              }) : (0, i.jsx)("button", {
                type: "button",
                className: F().iconButton,
                "aria-label": _2,
                onClick: o2,
                ...g2,
                children: (0, i.jsx)(p.A, {
                  size: 16,
                  strokeWidth: 2,
                  "aria-hidden": "true"
                })
              })
            }),
            (0, i.jsx)(y.m, {
              content: "Mark as read",
              children: (0, i.jsx)("button", {
                type: "button",
                id: `${r2}-read-${e2.id}`,
                className: F().iconButton,
                "aria-label": "Mark as read",
                onClick: l2,
                ...g2,
                children: (0, i.jsx)(h.A, {
                  size: 16,
                  strokeWidth: 2,
                  "aria-hidden": "true"
                })
              })
            })
          ]
        })
      ]
    });
  }
  function et({ person: e2 }) {
    let t2 = e2.name.split(/\s+/).map((e3) => e3[0] ?? "").join("").slice(0, 2).toUpperCase();
    return e2.avatar ? (0, i.jsx)("img", {
      className: F().face,
      src: e2.avatar,
      alt: "",
      title: e2.name,
      width: 18,
      height: 18,
      loading: "lazy",
      decoding: "async"
    }) : (0, i.jsx)("span", {
      className: F().face,
      title: e2.name,
      "aria-hidden": "true",
      children: t2
    });
  }
  function ea({ id: e2, reduced: t2, className: a2, children: n2 }) {
    return (0, i.jsx)("span", {
      className: [F().swap, a2].filter(Boolean).join(" "),
      children: (0, i.jsx)(s.N, {
        mode: "popLayout",
        initial: false,
        children: (0, i.jsx)(
          o.PY1.span,
          {
            className: F().swapItem,
            initial: t2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: { opacity: 1, y: 0, transition: Z },
            exit: { opacity: 0, transition: { duration: 0.1, ease: J } },
            children: n2
          },
          e2
        )
      })
    });
  }
  function ei({ children: e2, reduced: t2, instant: a2 }) {
    let r2 = (0, n.useRef)(null), [s2, l2] = (0, n.useState)("auto");
    return (0, n.useLayoutEffect)(() => {
      let e3 = r2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let t3 = new ResizeObserver(([t4]) => {
        t4 && l2(t4.borderBoxSize?.[0]?.blockSize ?? e3.offsetHeight);
      });
      return t3.observe(e3), () => t3.disconnect();
    }, []), (0, i.jsx)(o.PY1.div, {
      className: F().autoHeight,
      initial: false,
      animate: { height: s2 },
      transition: t2 || a2 ? { duration: 0 } : V,
      children: (0, i.jsx)("div", { ref: r2, children: e2 })
    });
  }
  let en = X;
}

__m(__module,__exports,__require);
}