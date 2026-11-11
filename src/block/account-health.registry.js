/* account-health (pro block) */
(function(){var A=globalThis.__ARC__;
A.reg(13062, function(__module,__exports,__require){
"use strict";
function __m(e, t, a) {
  "use strict";
  a.r(t), a.d(t, {
    AccountHealth: () => D,
    default: () => W,
    demoAccount: () => N,
    demoPeriods: () => T
  });
  var n = a(95155), s = a(12115), r = a(18310), i = a(28245), l = a(55809), o = a(92171), c = a(25354), u = a(80642), d = a(64962), h = a(35484), m = a(11012), p = a(71556), g = a(9751), _ = a(36565), f = a(41189), b = a(64577), y = a(7770), x = a(51288), v = a(66558), j = a(52898);
  function w({ title: e2 = "Claude", ...t2 }) {
    return (0, n.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "currentColor",
      role: "img",
      "aria-label": e2,
      ...t2,
      children: (0, n.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  let N = {
    name: "Linear",
    plan: "Enterprise",
    arr: "$184,000 ARR",
    logo: (0, n.jsx)(function({ title: e2 = "Linear", ...t2 }) {
      return (0, n.jsx)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        role: "img",
        "aria-label": e2,
        ...t2,
        children: (0, n.jsx)("path", {
          d: "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z"
        })
      });
    }, {}),
    termStart: "2025-12-13",
    renewalDate: "2026-12-13"
  }, k = {
    posthog: {
      source: (0, n.jsx)(function({ title: e2 = "PostHog", ...t2 }) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, n.jsx)("path", {
            d: "M9.854 14.5 5 9.647.854 5.5A.5.5 0 0 0 0 5.854V8.44a.5.5 0 0 0 .146.353L5 13.647l.147.146L9.854 18.5l.146.147v-.049c.065.03.134.049.207.049h2.586a.5.5 0 0 0 .353-.854L9.854 14.5zm0-5-4-4a.487.487 0 0 0-.409-.144.515.515 0 0 0-.356.21.493.493 0 0 0-.089.288V8.44a.5.5 0 0 0 .147.353l9 9a.5.5 0 0 0 .853-.354v-2.585a.5.5 0 0 0-.146-.354l-5-5zm1-4a.5.5 0 0 0-.854.354V8.44a.5.5 0 0 0 .147.353l4 4a.5.5 0 0 0 .853-.354V9.854a.5.5 0 0 0-.146-.354l-4-4zm12.647 11.515a3.863 3.863 0 0 1-2.232-1.1l-4.708-4.707a.5.5 0 0 0-.854.354v6.585a.5.5 0 0 0 .5.5H23.5a.5.5 0 0 0 .5-.5v-.6c0-.276-.225-.497-.499-.532zm-5.394.032a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zM.854 15.5a.5.5 0 0 0-.854.354v2.293a.5.5 0 0 0 .5.5h2.293c.222 0 .39-.135.462-.309a.493.493 0 0 0-.109-.545L.854 15.501zM5 14.647.854 10.5a.5.5 0 0 0-.854.353v2.586a.5.5 0 0 0 .146.353L4.854 18.5l.146.147h2.793a.5.5 0 0 0 .353-.854L5 14.647z"
          })
        });
      }, {}),
      sourceLabel: "From PostHog"
    },
    okta: {
      source: (0, n.jsx)(function({ title: e2 = "Okta", ...t2 }) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, n.jsx)("path", {
            d: "M12 0C5.389 0 0 5.35 0 12s5.35 12 12 12 12-5.35 12-12S18.611 0 12 0zm0 18c-3.325 0-6-2.675-6-6s2.675-6 6-6 6 2.675 6 6-2.675 6-6 6z"
          })
        });
      }, {}),
      sourceLabel: "From Okta"
    },
    zendesk: {
      source: (0, n.jsx)(function({ title: e2 = "Zendesk", ...t2 }) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, n.jsx)("path", {
            d: "M12.914 2.904V16.29L24 2.905H12.914zM0 2.906C0 5.966 2.483 8.45 5.543 8.45s5.542-2.484 5.543-5.544H0zm11.086 4.807L0 21.096h11.086V7.713zm7.37 7.84c-3.063 0-5.542 2.48-5.542 5.543H24c0-3.06-2.48-5.543-5.543-5.543z"
          })
        });
      }, {}),
      sourceLabel: "From Zendesk"
    },
    intercom: {
      source: (0, n.jsx)(function({ title: e2 = "Intercom", ...t2 }) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, n.jsx)("path", {
            d: "M21 0H3C1.343 0 0 1.343 0 3v18c0 1.658 1.343 3 3 3h18c1.658 0 3-1.342 3-3V3c0-1.657-1.342-3-3-3zm-5.801 4.399c0-.44.36-.8.802-.8.44 0 .8.36.8.8v10.688c0 .442-.36.801-.8.801-.443 0-.802-.359-.802-.801V4.399zM11.2 3.994c0-.44.357-.799.8-.799s.8.359.8.799v11.602c0 .44-.357.8-.8.8s-.8-.36-.8-.8V3.994zm-4 .405c0-.44.359-.8.799-.8.443 0 .802.36.802.8v10.688c0 .442-.36.801-.802.801-.44 0-.799-.359-.799-.801V4.399zM3.199 6c0-.442.36-.8.802-.8.44 0 .799.358.799.8v7.195c0 .441-.359.8-.799.8-.443 0-.802-.36-.802-.8V6zM20.52 18.202c-.123.105-3.086 2.593-8.52 2.593-5.433 0-8.397-2.486-8.521-2.593-.335-.288-.375-.792-.086-1.128.285-.334.79-.375 1.125-.09.047.041 2.693 2.211 7.481 2.211 4.848 0 7.456-2.186 7.479-2.207.334-.289.839-.25 1.128.086.289.336.25.84-.086 1.128zm.281-5.007c0 .441-.36.8-.801.8-.441 0-.801-.36-.801-.8V6c0-.442.361-.8.801-.8.441 0 .801.357.801.8v7.195z"
          })
        });
      }, {}),
      sourceLabel: "From Intercom"
    },
    stripe: {
      source: (0, n.jsx)(function({ title: e2 = "Stripe", ...t2 }) {
        return (0, n.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          role: "img",
          "aria-label": e2,
          ...t2,
          children: (0, n.jsx)("path", {
            d: "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"
          })
        });
      }, {}),
      sourceLabel: "From Stripe"
    }
  }, T = [
    {
      id: "30d",
      label: "30d",
      spanLabel: "30 days",
      score: 62,
      previousScore: 71,
      signals: [
        {
          id: "usage",
          label: "Product usage",
          detail: "Analytics down 18%",
          value: "61%",
          status: "risk",
          trend: [78, 77, 79, 76, 75, 74, 72, 70, 68, 66, 63, 61],
          ...k.posthog
        },
        {
          id: "seats",
          label: "Seat utilization",
          detail: "188 of 212 seats active",
          value: "89%",
          status: "good",
          trend: [84, 85, 85, 86, 87, 86, 88, 88, 89, 88, 89, 89],
          ...k.okta
        },
        {
          id: "support",
          label: "Support tickets",
          detail: "3 P1 on CSV exports",
          value: "14 open",
          status: "risk",
          trend: [5, 6, 5, 7, 6, 8, 9, 8, 10, 11, 13, 14],
          ...k.zendesk
        },
        {
          id: "nps",
          label: "NPS",
          detail: "Was +41 last quarter",
          value: "+32",
          status: "watch",
          trend: [44, 43, 41, 42, 40, 39, 38, 37, 36, 34, 33, 32],
          ...k.intercom
        },
        {
          id: "invoice",
          label: "Invoice status",
          detail: "Paid Oct 1, net 30",
          value: "Paid",
          status: "good",
          trend: [12, 11, 13, 12, 10, 11, 9, 10, 9, 8, 9, 8],
          ...k.stripe
        }
      ],
      summary: "Analytics usage fell 18% after their data team moved weekly reporting to Looker, and 3 P1 tickets about CSV export timeouts are still open. Seats and billing are healthy, so this reads as a product gap, not a budget cut.",
      action: {
        label: "Schedule QBR",
        title: "Schedule a QBR with Linear",
        reason: "Usage dropped 18% in Analytics",
        doneLabel: "Invite drafted for Tue, Nov 3, 10:00"
      }
    },
    {
      id: "90d",
      label: "90d",
      spanLabel: "90 days",
      score: 62,
      previousScore: 76,
      signals: [
        {
          id: "usage",
          label: "Product usage",
          detail: "Analytics down 31% since July",
          value: "61%",
          status: "risk",
          trend: [84, 85, 83, 82, 80, 79, 77, 75, 72, 68, 64, 61],
          ...k.posthog
        },
        {
          id: "seats",
          label: "Seat utilization",
          detail: "Up from 171 seats in July",
          value: "89%",
          status: "good",
          trend: [78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
          ...k.okta
        },
        {
          id: "support",
          label: "Support tickets",
          detail: "Tripled since July",
          value: "14 open",
          status: "risk",
          trend: [4, 4, 5, 4, 5, 6, 6, 7, 9, 10, 12, 14],
          ...k.zendesk
        },
        {
          id: "nps",
          label: "NPS",
          detail: "Was +48 in July",
          value: "+32",
          status: "watch",
          trend: [48, 48, 47, 46, 45, 43, 42, 40, 38, 36, 34, 32],
          ...k.intercom
        },
        {
          id: "invoice",
          label: "Invoice status",
          detail: "3 of 3 paid on time",
          value: "Paid",
          status: "good",
          trend: [10, 11, 10, 9, 10, 9, 9, 8, 9, 8, 8, 8],
          ...k.stripe
        }
      ],
      summary: "Health has slid for a full quarter. Analytics usage is down 31% since July while tickets tripled, mostly CSV export timeouts. Seat growth and on time payments show the budget is there, so fix exports before the December renewal.",
      action: {
        label: "Schedule QBR",
        title: "Schedule a QBR with Linear",
        reason: "Usage down 31% in Analytics since July",
        doneLabel: "Invite drafted for Tue, Nov 3, 10:00"
      }
    }
  ];
  var L = a(70602), S = a.n(L);
  let A = [...y.T.ease.standard], C = { duration: y.T.duration.fast, ease: A }, M = { name: "Claude Sonnet 5.5" }, z = (e2) => "string" == typeof e2 ? /* @__PURE__ */ new Date(`${10 === e2.length ? `${e2}T00:00:00` : e2}`) : e2, $ = (e2) => new Date(e2.getFullYear(), e2.getMonth(), e2.getDate()).getTime(), E = () => () => {
  }, B = () => $(/* @__PURE__ */ new Date()), R = () => null, I = {
    good: { label: "Good", Icon: d.A },
    watch: { label: "Watch", Icon: h.A },
    risk: { label: "At risk", Icon: m.A }
  };
  function P(e2, t2) {
    return new Promise((a2, n2) => {
      let s2 = window.setTimeout(a2, e2);
      t2.addEventListener(
        "abort",
        () => {
          window.clearTimeout(s2), n2(new DOMException("Aborted", "AbortError"));
        },
        { once: true }
      );
    });
  }
  function D({
    account: e2 = N,
    periods: t2 = T,
    period: a2,
    defaultPeriod: u2,
    onPeriodChange: d2,
    summarize: m2,
    onAction: k2,
    model: L2 = M,
    asOf: C2,
    className: I2
  }) {
    var W2;
    let H = (0, r.I)() ?? false, Y = (0, s.useRef)(null), G = e2 === N, [Z, q] = (0, s.useState)(u2 ?? t2[0]?.id ?? ""), Q = a2 ?? Z, J = t2.find((e3) => e3.id === Q) ?? t2[0], K = (0, s.useCallback)(
      (e3) => {
        void 0 === a2 && q(e3), d2?.(e3);
      },
      [a2, d2]
    ), [X, U] = (0, s.useState)(false);
    (0, s.useEffect)(() => {
      let e3 = Y.current;
      if (!e3 || X) return;
      if ("u" < typeof IntersectionObserver) {
        let e4 = requestAnimationFrame(() => U(true));
        return () => cancelAnimationFrame(e4);
      }
      let t3 = new IntersectionObserver(
        (e4) => {
          e4.some((e5) => e5.isIntersecting) && (U(true), t3.disconnect());
        },
        { threshold: 0.35 }
      );
      return t3.observe(e3), () => t3.disconnect();
    }, [X]);
    let ee = (0, s.useSyncExternalStore)(E, B, R), et = C2 ? $(z(C2)) : G ? $(z("2026-10-27")) : ee, ea = z(e2.renewalDate), en = null === et ? null : Math.round(($(ea) - et) / 864e5), es = e2.termStart ? z(e2.termStart) : new Date(ea.getFullYear() - 1, ea.getMonth(), ea.getDate()), er = Math.max(1, $(ea) - $(es)), ei = null === et ? 0 : Math.min(1, Math.max(0, (et - $(es)) / er)), el = (0, i.d)(0), eo = (0, l.G)(el, (e3) => String(Math.round(e3))), ec = (0, l.G)(el, (e3) => Math.max(0, Math.min(1, e3 / 100))), eu = (0, l.G)(el, (e3) => e3 < 0.5 ? 0 : 1), ed = (0, s.useRef)(true), eh = J?.score ?? 0;
    (0, s.useEffect)(() => {
      if (!X) return;
      if (H) {
        el.jump(eh), ed.current = false;
        return;
      }
      let e3 = (0, o.i)(
        el,
        eh,
        ed.current ? { duration: 0.56, ease: A } : { duration: y.T.duration.standard, ease: A }
      );
      return ed.current = false, () => e3.stop();
    }, [X, eh, H, el]);
    let [em, ep] = (0, s.useState)({ status: "idle", chunks: [], shown: 0 }), [eg, e_] = (0, s.useState)(0), [ef, eb] = (0, s.useState)(false), [ey, ex] = (0, s.useState)(""), ev = (0, s.useRef)({ summarize: m2, account: e2, current: J, reduced: H });
    (0, s.useEffect)(() => {
      ev.current = { summarize: m2, account: e2, current: J, reduced: H };
    }), (0, s.useEffect)(() => {
      let { current: e3 } = ev.current;
      if (!X || !e3) return;
      let t3 = new AbortController(), a3 = 0;
      return ep({ status: "thinking", chunks: [], shown: 0 }), (async () => {
        try {
          let { summarize: n2, account: s2, reduced: r2 } = ev.current, i2 = n2 ? await n2({ account: s2, period: e3 }, t3.signal) : (await P(900, t3.signal), e3.summary ?? "");
          if (t3.signal.aborted) return;
          let l2 = (function(e4) {
            let t4 = e4.split(/(\s+)/).filter(Boolean), a4 = [4, 6, 3, 5], n3 = [], s3 = 0;
            for (; s3 < t4.length; ) {
              let e5 = a4[n3.length % a4.length], r3 = "";
              for (let a5 = 0; s3 < t4.length && a5 < e5; s3++)
                r3 += t4[s3], /\S/.test(t4[s3]) && a5++;
              for (; s3 < t4.length && !/\S/.test(t4[s3]); ) r3 += t4[s3++];
              n3.push(r3);
            }
            return n3;
          })(i2.trim());
          if (r2 || !l2.length) {
            ep({ status: "done", chunks: l2, shown: l2.length }), eb(true);
            return;
          }
          let o2 = 1;
          ep({ status: "streaming", chunks: l2, shown: o2 }), a3 = window.setInterval(() => {
            let e4 = (o2 += 1) >= l2.length;
            ep({
              status: e4 ? "done" : "streaming",
              chunks: l2,
              shown: o2
            }), e4 && (window.clearInterval(a3), eb(true));
          }, 34);
        } catch {
          if (t3.signal.aborted) return;
          ep({ status: "error", chunks: [], shown: 0 }), ex("The summary could not be written. Try again.");
        }
      })(), () => {
        t3.abort(), window.clearInterval(a3);
      };
    }, [X, Q, eg]);
    let [ej, ew] = (0, s.useState)("idle"), eN = (0, s.useRef)(null);
    (0, s.useEffect)(() => () => eN.current?.abort(), []);
    let ek = (0, s.useCallback)(async () => {
      if (!J?.action || "running" === ej || "done" === ej) return;
      let t3 = new AbortController();
      eN.current?.abort(), eN.current = t3, ew("running"), ex("");
      try {
        if (k2 ? await k2(J.action, { account: e2, period: J }, t3.signal) : await P(900, t3.signal), t3.signal.aborted)
          return;
        ew("done"), ex(
          k2 ? `${J.action.label} done.` : `${J.action.label} done. Simulated, no invite was sent.`
        );
      } catch {
        if (t3.signal.aborted) return;
        ew("error"), ex(`${J.action.label} failed. Try again.`);
      }
    }, [ej, J, k2, e2]);
    if (!J)
      return (0, n.jsx)("section", {
        ref: Y,
        className: [S().root, I2].filter(Boolean).join(" "),
        "aria-label": `${e2.name} account health`,
        children: (0, n.jsxs)("p", {
          className: S().empty,
          children: [
            "No health data for ",
            e2.name,
            " yet. Signals appear after the first sync."
          ]
        })
      });
    let eT = (W2 = J.score) >= 75 ? { status: "good", label: "Healthy" } : W2 >= 50 ? { status: "watch", label: "Needs attention" } : { status: "risk", label: "At risk" }, eL = J.score - J.previousScore, eS = eL < 0 ? p.A : eL > 0 ? g.A : _.A, eA = J.spanLabel ?? J.label, eC = 0 === eL ? `No change in ${eA}` : `${eL > 0 ? "Up" : "Down"} ${Math.abs(eL)} pts in ${eA}`, eM = "thinking" === em.status || "idle" === em.status, ez = eM || "streaming" === em.status, e$ = "error" === em.status ? "Summary unavailable" : eM ? `Reading ${J.signals.length} signals` : "Risk summary", eE = t2.map((e3) => e3.summary).filter((e3) => !!e3), eB = em.chunks.join("");
    eB && !eE.includes(eB) && eE.push(eB);
    let eR = J.action, eI = ef && !!eR, eP = "done" === ej ? eR?.doneLabel ?? "Done" : "error" === ej ? "Could not complete. Try again." : eR?.reason ?? "", eD = "done" === ej || "error" === ej ? ej : `reason:${J.id}`;
    return (0, n.jsxs)("section", {
      ref: Y,
      className: [S().root, I2].filter(Boolean).join(" "),
      "aria-label": `${e2.name} account health`,
      children: [
        (0, n.jsxs)("div", {
          className: S().top,
          children: [
            (0, n.jsxs)("header", {
              className: S().header,
              children: [
                e2.logo ? (0, n.jsx)("span", {
                  className: S().logo,
                  "aria-hidden": "true",
                  children: e2.logo
                }) : null,
                (0, n.jsxs)("div", {
                  className: S().identity,
                  children: [
                    (0, n.jsx)("h3", { className: S().name, children: e2.name }),
                    (0, n.jsx)("p", {
                      className: S().meta,
                      children: [e2.plan, e2.arr].filter(Boolean).join(" \xB7 ")
                    })
                  ]
                }),
                t2.length > 1 ? (0, n.jsx)(v.A, {
                  className: S().periods,
                  label: "Time range",
                  value: J.id,
                  onValueChange: K,
                  options: t2.map((e3) => ({ value: e3.id, label: e3.label }))
                }) : null
              ]
            }),
            (0, n.jsxs)("div", {
              className: S().overview,
              children: [
                (0, n.jsxs)("div", {
                  className: S().scoreCell,
                  children: [
                    (0, n.jsxs)("div", {
                      className: S().gauge,
                      role: "img",
                      "aria-label": `Health score ${J.score} out of 100, ${eT.label.toLowerCase()}`,
                      children: [
                        (0, n.jsxs)("svg", {
                          viewBox: "0 0 112 60",
                          width: "112",
                          height: "60",
                          "aria-hidden": "true",
                          children: [
                            (0, n.jsx)("path", {
                              className: S().gaugeTrack,
                              d: "M8 56a48 48 0 0 1 96 0"
                            }),
                            (0, n.jsx)(c.PY1.path, {
                              className: S().gaugeValue,
                              "data-status": eT.status,
                              d: "M8 56a48 48 0 0 1 96 0",
                              style: { pathLength: ec, opacity: eu }
                            })
                          ]
                        }),
                        (0, n.jsx)(c.PY1.span, {
                          className: S().scoreNumber,
                          "aria-hidden": "true",
                          children: eo
                        })
                      ]
                    }),
                    (0, n.jsxs)("div", {
                      className: S().scoreText,
                      children: [
                        (0, n.jsxs)("span", {
                          className: S().band,
                          "data-status": eT.status,
                          children: [
                            (0, n.jsx)(F, { status: eT.status }),
                            (0, n.jsx)("span", {
                              className: S().truncate,
                              children: eT.label
                            })
                          ]
                        }),
                        (0, n.jsxs)(V, {
                          swapKey: `${J.id}:${eL}`,
                          className: S().trend,
                          reduced: H,
                          children: [
                            (0, n.jsx)(eS, {
                              size: 14,
                              strokeWidth: 2,
                              "aria-hidden": "true"
                            }),
                            (0, n.jsx)("span", {
                              className: S().truncate,
                              children: eC
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                (0, n.jsxs)("div", {
                  className: S().renewalCell,
                  children: [
                    (0, n.jsx)("p", {
                      className: S().renewalLabel,
                      children: (0, n.jsxs)("span", {
                        className: S().truncate,
                        children: [
                          "Renews ",
                          ea.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                          })
                        ]
                      })
                    }),
                    (0, n.jsx)("span", {
                      className: S().term,
                      "aria-hidden": "true",
                      children: (0, n.jsx)(c.PY1.span, {
                        className: S().termFill,
                        initial: { scaleX: 0 },
                        animate: { scaleX: X ? ei : 0 },
                        transition: H ? { duration: 0 } : { duration: 0.56, ease: A }
                      })
                    }),
                    (0, n.jsx)("p", {
                      className: S().renewalDays,
                      "aria-label": null === en ? void 0 : `${en} days until renewal`,
                      children: null === en ? (0, n.jsx)("span", {
                        className: S().placeholder,
                        children: "\xA0"
                      }) : en > 0 ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("span", {
                            className: S().bigNumber,
                            children: en
                          }),
                          (0, n.jsx)("span", {
                            className: S().unit,
                            children: 1 === en ? "day left" : "days left"
                          })
                        ]
                      }) : (0, n.jsx)("span", {
                        className: S().unit,
                        children: 0 === en ? "Renews today" : `Overdue by ${-en} days`
                      })
                    })
                  ]
                })
              ]
            })
          ]
        }),
        J.signals.length ? (0, n.jsx)("ul", {
          className: S().signals,
          "aria-label": "Signals",
          children: J.signals.map(
            (e3, t3) => (0, n.jsx)(
              O,
              { signal: e3, index: t3, started: X, reduced: H },
              e3.id
            )
          )
        }) : (0, n.jsx)("p", {
          className: S().noSignals,
          children: "No signals synced for this period yet."
        }),
        (0, n.jsxs)("div", {
          className: S().ai,
          children: [
            (0, n.jsxs)("div", {
              className: S().aiHead,
              children: [
                (0, n.jsx)("span", {
                  className: S().modelMark,
                  "aria-hidden": "true",
                  children: L2.mark ?? (0, n.jsx)(w, {})
                }),
                (0, n.jsx)(V, {
                  swapKey: e$,
                  className: S().aiLabel,
                  reduced: H,
                  children: eM ? (0, n.jsx)(j.n, { children: e$ }) : (0, n.jsx)("span", {
                    className: S().truncate,
                    children: e$
                  })
                }),
                (0, n.jsx)("span", {
                  className: S().modelName,
                  children: L2.name
                }),
                (0, n.jsx)(x.$, {
                  variant: "ghost",
                  size: "sm",
                  className: S().regenerate,
                  "aria-label": "Regenerate summary",
                  disabled: ez,
                  onClick: () => {
                    ex(""), e_((e3) => e3 + 1);
                  },
                  children: (0, n.jsx)(f.A, {
                    size: 14,
                    strokeWidth: 2,
                    "aria-hidden": "true"
                  })
                })
              ]
            }),
            (0, n.jsxs)("div", {
              className: S().summary,
              "aria-busy": ez || void 0,
              children: [
                eE.map(
                  (e3, t3) => (0, n.jsx)(
                    "p",
                    {
                      className: S().ghost,
                      "aria-hidden": "true",
                      children: e3
                    },
                    t3
                  )
                ),
                "error" === em.status ? (0, n.jsxs)("p", {
                  className: S().summaryError,
                  children: [
                    (0, n.jsx)(h.A, {
                      size: 14,
                      strokeWidth: 2,
                      "aria-hidden": "true"
                    }),
                    (0, n.jsx)("span", {
                      children: "Claude did not respond. Your signals are unchanged, so try again in a moment."
                    })
                  ]
                }) : (0, n.jsx)("p", {
                  className: S().summaryText,
                  children: em.chunks.slice(0, em.shown).map(
                    (e3, t3) => (0, n.jsx)(
                      c.PY1.span,
                      {
                        initial: !H && { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { duration: 0.14, ease: "linear" },
                        children: e3
                      },
                      `${eg}:${Q}:${t3}`
                    )
                  )
                })
              ]
            }),
            eR ? (0, n.jsxs)(c.PY1.div, {
              className: S().action,
              initial: false,
              animate: { opacity: +!!eI, y: eI || H ? 0 : 2 },
              transition: H ? { duration: 0 } : { duration: 0.2, ease: A },
              "aria-hidden": !eI || void 0,
              inert: !eI || void 0,
              children: [
                (0, n.jsxs)("div", {
                  className: S().actionText,
                  children: [
                    (0, n.jsx)("p", {
                      className: S().actionTitle,
                      children: eR.title
                    }),
                    (0, n.jsxs)(V, {
                      swapKey: eD,
                      className: S().actionMeta,
                      reduced: H,
                      "data-tone": "error" === ej || "done" === ej ? ej : void 0,
                      children: [
                        "done" === ej ? (0, n.jsx)(b.A, {
                          size: 14,
                          strokeWidth: 2,
                          "aria-hidden": "true"
                        }) : "error" === ej ? (0, n.jsx)(h.A, {
                          size: 14,
                          strokeWidth: 2,
                          "aria-hidden": "true"
                        }) : null,
                        (0, n.jsx)("span", {
                          className: S().truncate,
                          children: eP
                        })
                      ]
                    })
                  ]
                }),
                (0, n.jsx)(x.$, {
                  size: "sm",
                  variant: "done" === ej ? "secondary" : "primary",
                  className: S().actionButton,
                  loading: "running" === ej,
                  "aria-disabled": "done" === ej || void 0,
                  onClick: ek,
                  children: "done" === ej ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(b.A, {
                        size: 14,
                        strokeWidth: 2,
                        "aria-hidden": "true"
                      }),
                      "Scheduled"
                    ]
                  }) : "error" === ej ? "Try again" : eR.label
                })
              ]
            }) : null
          ]
        }),
        (0, n.jsx)("p", {
          className: S().srOnly,
          role: "status",
          "aria-live": "polite",
          children: ey
        })
      ]
    });
  }
  function F({ status: e2 }) {
    let { Icon: t2 } = I[e2];
    return (0, n.jsx)(t2, {
      className: S().statusIcon,
      "data-status": e2,
      size: 14,
      strokeWidth: 2,
      "aria-hidden": "true"
    });
  }
  function V({ swapKey: e2, className: t2, reduced: a2, children: s2, ...r2 }) {
    return (0, n.jsx)("span", {
      className: [S().swap, t2].filter(Boolean).join(" "),
      ...r2,
      children: (0, n.jsx)(u.N, {
        initial: false,
        children: (0, n.jsx)(
          c.PY1.span,
          {
            className: S().swapItem,
            initial: a2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: {
              opacity: 1,
              y: 0,
              transition: a2 ? { duration: 0.1 } : C
            },
            exit: { opacity: 0, transition: { duration: 0.1, ease: A } },
            children: s2
          },
          e2
        )
      })
    });
  }
  function O({ signal: e2, index: t2, started: a2, reduced: r2 }) {
    let i2 = I[e2.status], l2 = (0, s.useMemo)(() => {
      var t3;
      let a3, n2, s2;
      return n2 = Math.min(
        ...a3 = (t3 = e2.trend ?? []).length > 1 ? t3 : [t3[0] ?? 0, t3[0] ?? 0]
      ), s2 = Math.max(...a3) - n2 || 1, a3.map((e3, t4) => [
        +(2 + t4 / (a3.length - 1) * 60).toFixed(2),
        +(2 + (1 - (e3 - n2) / s2) * 16).toFixed(2)
      ]);
    }, [e2.trend]), o2 = l2.map(([e3, t3], a3) => `${a3 ? "L" : "M"}${e3} ${t3}`).join(" "), u2 = l2[l2.length - 1], d2 = r2 ? { duration: 0 } : { duration: y.T.duration.standard, ease: A }, h2 = r2 ? { duration: 0 } : { duration: 0.4, ease: A, delay: 0.04 * t2 };
    return (0, n.jsxs)("li", {
      className: S().signal,
      children: [
        (0, n.jsx)("span", {
          className: S().source,
          "aria-hidden": "true",
          children: e2.source
        }),
        (0, n.jsxs)("span", {
          className: S().signalText,
          children: [
            (0, n.jsxs)("span", {
              className: S().signalLabel,
              children: [
                e2.label,
                e2.sourceLabel ? (0, n.jsxs)("span", {
                  className: S().srOnly,
                  children: [", ", e2.sourceLabel.toLowerCase()]
                }) : null
              ]
            }),
            e2.detail ? (0, n.jsx)("span", {
              className: S().signalDetail,
              children: e2.detail
            }) : null
          ]
        }),
        (0, n.jsx)("span", {
          className: S().spark,
          "data-status": e2.status,
          "aria-hidden": "true",
          children: e2.trend?.length ? (0, n.jsxs)("svg", {
            viewBox: "0 0 64 20",
            width: 64,
            height: 20,
            children: [
              (0, n.jsx)(c.PY1.path, {
                d: o2,
                initial: { d: o2, pathLength: 0 },
                animate: { d: o2, pathLength: +!!a2 },
                transition: { d: d2, pathLength: h2 }
              }),
              u2 ? (0, n.jsx)(c.PY1.circle, {
                r: 2.25,
                initial: { cx: u2[0], cy: u2[1], opacity: 0 },
                animate: { cx: u2[0], cy: u2[1], opacity: +!!a2 },
                transition: {
                  cx: d2,
                  cy: d2,
                  opacity: r2 ? { duration: 0 } : { duration: 0.16, delay: 0.32 + 0.04 * t2 }
                }
              }) : null
            ]
          }) : null
        }),
        (0, n.jsx)("span", { className: S().value, children: e2.value }),
        (0, n.jsxs)("span", {
          className: S().status,
          "data-status": e2.status,
          children: [
            (0, n.jsx)(F, { status: e2.status }),
            (0, n.jsx)("span", { children: i2.label })
          ]
        })
      ]
    });
  }
  let W = D;
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
A.regCss(70602, ".root{--ah-pad:24px;--ah-claude:#d97757;--ah-track:color-mix(in oklab,var(--foreground) 9%,transparent);--shimmer-base:color-mix(in oklab,var(--foreground) 50%,var(--surface));container-type:inline-size;position:relative;box-sizing:border-box;width:100%;max-width:600px;margin-inline:auto;overflow:hidden;border:1px solid var(--border);border-radius:var(--radius-panel);background:var(--surface);color:var(--foreground);font-family:var(--font-body);font-size:14px;line-height:20px;letter-spacing:var(--tracking-body)}\n.root :where(p,h3,ul){margin:0;padding:0}\n.root [data-status=good]{--ah-tone:var(--success)}\n.root [data-status=watch]{--ah-tone:var(--warning)}\n.root [data-status=risk]{--ah-tone:var(--danger)}\n.truncate{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.statusIcon{flex:none;color:var(--ah-tone)}\n.top{display:flex;flex-direction:column;gap:24px;padding:var(--ah-pad) var(--ah-pad) var(--ah-pad)}\n@container (max-width: 520px){.ai,.noSignals,.signals,.top{--ah-pad:16px}\n.header{display:flex;align-items:center;gap:12px;min-width:0}\n.logo{display:grid;flex:none;width:24px;height:24px;place-items:center;color:var(--foreground)}\n.logo>svg{width:24px;height:24px}\n.identity{display:flex;flex:1 1 auto;flex-direction:column;min-width:0}\n.name{font-size:14px;font-weight:500;line-height:20px}\n.meta,.name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.meta{color:var(--text-muted);font-size:13px;line-height:18px}\n.periods{flex:none}\n.overview{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr)}\n@container (max-width: 440px){.overview{grid-template-columns:minmax(0,1fr);row-gap:16px}\n.scoreCell{display:flex;align-items:stretch;gap:16px;min-width:0;padding-right:24px}\n.scoreCell{padding-right:0}\n.renewalCell{display:flex;flex-direction:column;justify-content:space-between;min-width:0;height:60px;padding-left:24px;border-left:1px solid var(--border-subtle)}\n.renewalCell{padding:16px 0 0;border-top:1px solid var(--border-subtle);border-left:0;height:auto;gap:8px}\n.gauge{position:relative;flex:none;width:112px;height:60px}\n.gauge>svg{display:block;overflow:visible}\n.gaugeTrack,.gaugeValue{fill:none;stroke-width:8;stroke-linecap:round}\n.gaugeTrack{stroke:var(--ah-track)}\n.gaugeValue{stroke:var(--ah-tone)}\n.bigNumber,.scoreNumber{font-size:28px;font-weight:400;line-height:28px;letter-spacing:-.02em;font-variant-numeric:tabular-nums}\n.scoreNumber{position:absolute;bottom:0;left:0;width:100%;text-align:center}\n.scoreText{display:flex;flex-direction:column;justify-content:space-between;min-width:0;padding-block:2px 4px}\n.band{display:flex;align-items:center;gap:6px;min-width:0;height:20px}\n.trend{color:var(--text-muted);font-size:13px;line-height:18px}\n.trend svg{flex:none}\n.renewalLabel{display:flex;min-width:0;height:18px;padding-top:2px;color:var(--text-muted);font-size:13px;line-height:18px}\n.term{position:relative;display:block;height:4px;overflow:hidden;border-radius:2px;background:var(--ah-track)}\n.termFill{position:absolute;inset:0;border-radius:inherit;background:var(--text-secondary);transform-origin:left center}\n.renewalDays{display:flex;align-items:baseline;gap:6px;min-width:0;height:28px;white-space:nowrap}\n.unit{color:var(--text-muted);font-size:13px;line-height:18px}\n.placeholder{display:block;width:3ch;height:28px}\n.swap{display:grid;min-width:0}\n.swapItem{display:flex;grid-area:1/1;align-items:center;gap:6px;min-width:0}\n.signals{list-style:none;padding:0 var(--ah-pad);border-top:1px solid var(--border-subtle)}\n.signal{display:grid;grid-template-columns:14px minmax(0,1fr) 64px 56px 72px;column-gap:12px;align-items:center;height:56px}\n.signal+.signal{border-top:1px solid var(--border-subtle)}\n.signal{grid-template-columns:14px minmax(0,1fr) 64px 72px}\n.source{display:grid;width:14px;height:14px;place-items:center;color:var(--text-muted)}\n.source>svg{width:14px;height:14px}\n.signalText{display:flex;flex-direction:column;min-width:0}\n.signalDetail,.signalLabel{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.signalDetail{color:var(--text-muted);font-size:13px;line-height:18px}\n.spark{display:block;width:64px;height:20px;color:var(--text-muted)}\n.spark[data-status=risk],.spark[data-status=watch]{color:var(--ah-tone)}\n.spark svg{display:block;overflow:visible}\n.spark path{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}\n.spark circle{fill:currentColor}\n.spark{display:none}\n.value{overflow:hidden;font-variant-numeric:tabular-nums;text-align:right;text-overflow:ellipsis;white-space:nowrap}\n.status{display:flex;align-items:center;gap:6px;min-width:0;color:var(--text-secondary);font-size:13px;line-height:18px;white-space:nowrap}\n.empty,.noSignals{padding:24px var(--ah-pad);border-top:1px solid var(--border-subtle);color:var(--text-muted);font-size:13px;line-height:18px;text-align:center}\n.empty{border-top:0}\n.ai{display:flex;flex-direction:column;gap:8px;padding:16px var(--ah-pad) var(--ah-pad);border-top:1px solid var(--border-subtle)}\n.aiHead{display:flex;align-items:center;gap:8px;height:28px;margin-right:-6px}\n.modelMark{display:grid;flex:none;width:14px;height:14px;place-items:center;color:var(--ah-claude)}\n.modelMark>svg{width:14px;height:14px}\n.aiLabel{flex:1 1 auto;font-size:13px;line-height:18px}\n.modelName{flex:none;color:var(--text-muted);font-size:13px;line-height:18px;white-space:nowrap}\n.modelName{display:none}\n.regenerate{flex:none;color:var(--text-secondary)}\n.summary{display:grid;min-width:0}\n.ghost,.summaryError,.summaryText{grid-area:1/1}\n.ghost{visibility:hidden}\n.summaryText{color:var(--text-secondary);text-wrap:pretty}\n.summaryError{display:flex;align-items:flex-start;gap:8px;color:var(--text-secondary)}\n.summaryError svg{flex:none;margin-top:3px;color:var(--danger)}\n.action{display:flex;align-items:center;gap:16px;margin-top:8px;padding-top:16px;border-top:1px solid var(--border-subtle)}\n.action{flex-wrap:wrap;row-gap:12px}\n.actionText{display:flex;flex:1 1 auto;flex-direction:column;min-width:0}\n.actionText{flex-basis:100%}\n.actionTitle{overflow:hidden;font-weight:500;text-overflow:ellipsis;white-space:nowrap}\n.actionMeta{color:var(--text-muted);font-size:13px;line-height:18px}\n.actionMeta svg{flex:none}\n.actionMeta[data-tone=error] svg{color:var(--danger)}\n.actionMeta[data-tone=done] svg{color:var(--success)}\n.actionButton{flex:none;min-width:128px}\n.actionButton{width:100%}", {"root":"root","truncate":"truncate","srOnly":"srOnly","statusIcon":"statusIcon","top":"top","ai":"ai","noSignals":"noSignals","signals":"signals","header":"header","logo":"logo","identity":"identity","name":"name","meta":"meta","periods":"periods","overview":"overview","scoreCell":"scoreCell","renewalCell":"renewalCell","gauge":"gauge","gaugeTrack":"gaugeTrack","gaugeValue":"gaugeValue","bigNumber":"bigNumber","scoreNumber":"scoreNumber","scoreText":"scoreText","band":"band","trend":"trend","renewalLabel":"renewalLabel","term":"term","termFill":"termFill","renewalDays":"renewalDays","unit":"unit","placeholder":"placeholder","swap":"swap","swapItem":"swapItem","signal":"signal","source":"source","signalText":"signalText","signalDetail":"signalDetail","signalLabel":"signalLabel","spark":"spark","value":"value","status":"status","empty":"empty","aiHead":"aiHead","modelMark":"modelMark","aiLabel":"aiLabel","modelName":"modelName","regenerate":"regenerate","summary":"summary","ghost":"ghost","summaryError":"summaryError","summaryText":"summaryText","action":"action","actionText":"actionText","actionTitle":"actionTitle","actionMeta":"actionMeta","actionButton":"actionButton"});
A.reg(71556, function(__module,__exports,__require){
"use strict";
function __m(e, t, r) {
  "use strict";
  r.d(t, { A: () => n });
  var a = r(51811);
  let i = {
    name: "arrow-down-right",
    size: 24,
    node: [
      ["path", { d: "m7 7 10 10", key: "1fmybs" }],
      ["path", { d: "M17 7v10H7", key: "6fjiku" }]
    ]
  };
  i.node;
  let n = (0, a.A)(i);
}

__m(__module,__exports,__require);
});
A.cssFor("account-health", [70602]);
A.item("account-health", {entry:13062, export:"AccountHealth", kind:"block", tier:"pro", unresolved:[]});
})();