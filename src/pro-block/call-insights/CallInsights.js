function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, {
    CallInsights: () => P,
    callInsightsCall: () => M,
    callInsightsMoments: () => j,
    callInsightsNextSteps: () => v,
    callInsightsSpeakers: () => y,
    callInsightsSummary: () => k,
    default: () => R,
    deriveRisk: () => L
  });
  var i = t(95155), s = t(12115), n = t(18310), l = t(98993), r = t(12643), o = t(31861), c = t(11012), d = t(35484), h = t(64962), u = t(36619), p = t(79267), m = t(92298), _ = t(92218), x = t(20530), g = t(73474), f = t(52898);
  let y = [
    {
      id: "ryan",
      name: "Ryan Sullivan",
      title: "Account executive",
      avatar: "media/people/ryan-sullivan.svg",
      side: "internal",
      talk: 38
    },
    {
      id: "hannah",
      name: "Hannah Walsh",
      title: "Solutions engineer",
      avatar: "media/people/hannah-walsh.svg",
      side: "internal",
      talk: 14
    },
    {
      id: "diane",
      name: "Diane Foster",
      title: "VP Finance, Ramp",
      avatar: "media/people/diane-foster.svg",
      side: "external",
      talk: 31
    },
    {
      id: "andre",
      name: "Andre Williams",
      title: "Data engineering lead, Ramp",
      avatar: "media/people/andre-williams.svg",
      side: "external",
      talk: 17
    }
  ], j = [
    {
      id: "m1",
      type: "pricing",
      at: 401,
      speakerId: "diane",
      quote: "If we roll this out to all 400 seats in Q1, what does the per-seat price look like?",
      clip: 6
    },
    {
      id: "m2",
      type: "competitor",
      at: 725,
      speakerId: "andre",
      quote: "We already run Fivetran for the warehouse sync, so you have to beat it on cost per connector.",
      clip: 7
    },
    {
      id: "m3",
      type: "objection",
      at: 1050,
      speakerId: "andre",
      quote: "Security won't sign off without a SOC 2 Type II report and SSO through Okta.",
      clip: 5
    },
    {
      id: "m4",
      type: "pricing",
      at: 1432,
      speakerId: "diane",
      quote: "If we commit to two years, can you hold the per-seat price flat?",
      clip: 5
    },
    {
      id: "m5",
      type: "objection",
      at: 1754,
      speakerId: "diane",
      quote: "Migration is the real cost for us. We can't have broken dashboards during the close.",
      clip: 6
    }
  ], k = "Diane wants one pipeline in place before the Q1 close and asked for 400 seats on a two-year term at a flat per-seat price. Fivetran is the incumbent, so the deal turns on cost per connector and a migration that keeps dashboards live. Security needs SOC 2 Type II and Okta SSO before procurement starts.", v = [
    {
      id: "s1",
      label: "Send SOC 2 Type II report and Okta SSO guide",
      ownerId: "hannah",
      due: "Oct 23"
    },
    {
      id: "s2",
      label: "Draft a two-year, 400-seat proposal",
      ownerId: "ryan",
      due: "Oct 26"
    },
    {
      id: "s3",
      label: "Book a migration scoping session",
      ownerId: "andre",
      due: "Oct 28"
    }
  ], b = { "aria-hidden": true, focusable: false };
  function N(e2) {
    return (0, i.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "#D97757",
      ...b,
      ...e2,
      children: (0, i.jsx)("path", {
        d: "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
      })
    });
  }
  var w = t(6724), T = t.n(w);
  let M = {
    title: "Data platform evaluation",
    company: "Ramp",
    logo: (0, i.jsx)(
      function(e2) {
        return (0, i.jsx)("svg", {
          viewBox: "51.4 -1.6 19 19",
          fill: "currentColor",
          ...b,
          ...e2,
          children: (0, i.jsx)("path", {
            d: "M70.028 15.612v.07h-9.983v-.07c1.439-.82 2.432-1.654 3.327-2.526h4.1zm-2.473-13.11L65.027 0h-.074s.042 4.664-4.205 8.906c-4.156 4.15-9.046 4.16-9.046 4.16v.074l2.578 2.546s4.819.05 9.074-4.16c4.24-4.195 4.205-9.022 4.205-9.022z"
          })
        });
      },
      { width: 20, height: 20 }
    ),
    platform: "Zoom",
    platformMark: (0, i.jsx)(
      function(e2) {
        return (0, i.jsxs)("svg", {
          viewBox: "0 0 24 24",
          ...b,
          ...e2,
          children: [
            (0, i.jsx)("rect", {
              width: "24",
              height: "24",
              rx: "6.5",
              fill: "#0B5CFF"
            }),
            (0, i.jsx)("rect", {
              x: "4.6",
              y: "7.6",
              width: "10.4",
              height: "8.8",
              rx: "2.2",
              fill: "#fff"
            }),
            (0, i.jsx)("path", {
              fill: "#fff",
              d: "m16.1 10.7 2.55-1.86c.42-.3.85-.08.85.44v5.44c0 .52-.43.74-.85.44l-2.55-1.86z"
            })
          ]
        });
      },
      { width: 14, height: 14 }
    ),
    date: "Oct 22, 2026",
    duration: 2052
  }, C = (...e2) => e2.filter(Boolean).join(" "), I = (e2) => String(e2).padStart(2, "0"), S = (e2) => `${I(Math.floor(e2 / 60))}:${I(Math.floor(e2 % 60))}`, O = (e2) => `${Math.floor(e2 / 60)}:${I(Math.floor(e2 % 60))}`, $ = {
    pricing: {
      label: "Pricing",
      icon: (0, i.jsx)(l.A, {
        size: 14,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      })
    },
    competitor: {
      label: "Competitor",
      icon: (0, i.jsx)(r.A, {
        size: 14,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      })
    },
    objection: {
      label: "Objection",
      icon: (0, i.jsx)(o.A, {
        size: 14,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      })
    }
  }, F = {
    high: {
      label: "High risk",
      icon: (0, i.jsx)(c.A, {
        size: 14,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      })
    },
    medium: {
      label: "Medium risk",
      icon: (0, i.jsx)(d.A, {
        size: 14,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      })
    },
    low: {
      label: "Low risk",
      icon: (0, i.jsx)(h.A, {
        size: 14,
        strokeWidth: 1.75,
        "aria-hidden": "true"
      })
    }
  };
  function L(e2, a2) {
    let t2 = e2.filter((e3) => false !== e3.risk), i2 = t2.filter((e3) => !a2[e3.id]).length;
    return 0 === i2 ? "low" : i2 >= Math.max(2, t2.length) ? "high" : "medium";
  }
  function z(e2) {
    return Array.from(
      { length: 52 },
      (a2, t2) => Math.max(
        0.22,
        Math.min(
          1,
          (0.55 * Math.sin(Math.PI * Math.min(1, t2 / 51 * 1.15 + 0.02)) + 0.35) * (0.45 + 0.75 * Math.abs(
            Math.sin(0.9 * t2 + 1.7 * e2) * Math.cos(0.37 * t2 + 0.6 * e2)
          ))
        )
      )
    );
  }
  let A = [4, 6, 3, 7, 5, 8, 4, 6];
  function q() {
    return (0, i.jsxs)("svg", {
      className: T().spinner,
      width: 14,
      height: 14,
      viewBox: "0 0 16 16",
      fill: "none",
      "aria-hidden": "true",
      children: [
        (0, i.jsx)("circle", {
          cx: "8",
          cy: "8",
          r: "6",
          stroke: "currentColor",
          strokeOpacity: ".3",
          strokeWidth: "2"
        }),
        (0, i.jsx)("path", {
          d: "M8 2a6 6 0 0 1 6 6",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round"
        })
      ]
    });
  }
  function E({ title: e2, children: a2 }) {
    return (0, i.jsxs)("div", {
      className: T().sectionHead,
      children: [
        (0, i.jsx)("h3", { className: T().sectionTitle, children: e2 }),
        a2 ? (0, i.jsx)("div", { className: T().sectionMeta, children: a2 }) : null
      ]
    });
  }
  function P({
    call: e2 = M,
    speakers: a2 = y,
    moments: t2 = j,
    summary: l2 = k,
    summaryModel: r2 = "Claude Sonnet 5.5",
    nextSteps: o2 = v,
    risk: c2,
    autoPlay: h2 = true,
    defaultMomentId: b2,
    loadClip: w2,
    onMomentChange: I2,
    onNextStepChange: R2,
    className: D
  }) {
    let W = !!(0, n.I)(), B = (0, s.useRef)(null), [H, Y] = (0, s.useState)(false), [U, X] = (0, s.useState)(false), [K, G] = (0, s.useState)("");
    (0, s.useEffect)(() => {
      let e3 = B.current;
      if (!e3 || "u" < typeof IntersectionObserver) {
        Y(true), X(true);
        return;
      }
      let a3 = new IntersectionObserver(
        ([e4]) => {
          Y(e4.isIntersecting), e4.isIntersecting && X(true);
        },
        { threshold: 0.2 }
      );
      return a3.observe(e3), () => a3.disconnect();
    }, []);
    let Z = (0, s.useMemo)(() => new Map(a2.map((e3) => [e3.id, e3])), [a2]), Q = (0, s.useCallback)(
      (e3) => Z.get(e3) ?? {
        id: e3,
        name: "Unknown speaker",
        side: "external",
        talk: 0
      },
      [Z]
    ), V = (0, s.useMemo)(() => {
      let e3 = a2.reduce((e4, a3) => e4 + Math.max(0, a3.talk), 0) || 1, t3 = [
        ...a2.filter((e4) => "internal" === e4.side),
        ...a2.filter((e4) => "external" === e4.side)
      ], i2 = { internal: 0, external: 0 }, s2 = t3.map((a3) => {
        let t4 = Math.max(0, a3.talk) / e3 * 100, s3 = "internal" === a3.side ? 0 == i2.internal++ ? "var(--series-1)" : "color-mix(in oklab, var(--series-1) 50%, var(--surface))" : 0 == i2.external++ ? "var(--series-2)" : "color-mix(in oklab, var(--series-2) 50%, var(--surface))";
        return { speaker: a3, share: t4, color: s3 };
      }), n2 = Math.round(
        s2.filter((e4) => "internal" === e4.speaker.side).reduce((e4, a3) => e4 + a3.share, 0)
      );
      return { rows: s2, internal: n2, external: 100 - n2 };
    }, [a2]), [J, ee] = (0, s.useState)(), [ea, et] = (0, s.useState)(() => b2 ?? t2[0]?.id), ei = t2.find((e3) => e3.id === ea) ?? t2[0], [es, en] = (0, s.useState)("idle"), [el, er] = (0, s.useState)(0), eo = (0, s.useRef)(0), ec = (0, s.useRef)(null), ed = (0, s.useRef)(null), eh = (0, s.useRef)(void 0), [eu, ep] = (0, s.useState)(h2), em = eu && !W && t2.length > 0, e_ = (0, s.useRef)(em);
    (0, s.useEffect)(() => {
      e_.current = em;
    }, [em]);
    let ex = (0, s.useRef)(false), [eg, ef] = (0, s.useState)(0), ey = (0, s.useCallback)((e3, a3) => {
      eo.current = e3, ec.current?.style.setProperty(
        "--p",
        String(a3 ? Math.min(1, e3 / a3) : 0)
      );
      let t3 = Math.floor(e3);
      er((e4) => e4 === t3 ? e4 : t3);
    }, []), ej = (0, s.useCallback)(
      (e3) => {
        ed.current?.abort(), window.clearTimeout(eh.current), ey(0, e3.clip), en("idle"), et(e3.id), ef((e4) => e4 + 1), I2?.(e3);
      },
      [I2, ey]
    ), ek = (0, s.useCallback)(
      async (e3) => {
        if (window.clearTimeout(eh.current), eo.current >= e3.clip && ey(0, e3.clip), eo.current > 0)
          return void en("playing");
        ed.current?.abort();
        let a3 = new AbortController();
        ed.current = a3, en("loading");
        let t3 = w2 ?? ((e4, a4) => new Promise((e5, t4) => {
          let i2 = window.setTimeout(e5, 260);
          a4.addEventListener(
            "abort",
            () => {
              window.clearTimeout(i2), t4(new DOMException("Aborted", "AbortError"));
            },
            { once: true }
          );
        }));
        try {
          await t3(e3, a3.signal);
        } catch {
          if (a3.signal.aborted) return;
          en("error"), G("The clip could not be loaded.");
          return;
        }
        a3.signal.aborted || (en("playing"), G(
          `Playing the ${S(e3.at)} clip from ${Q(e3.speakerId).name}. Simulated, no audio.`
        ));
      },
      [w2, ey, Q]
    ), ev = (0, s.useCallback)(
      (e3) => {
        en("idle"), eh.current = window.setTimeout(() => {
          if (ey(0, e3.clip), !e_.current) return;
          let a3 = t2.findIndex((a4) => a4.id === e3.id);
          ej(t2[(a3 + 1) % t2.length]);
        }, 520);
      },
      [t2, ey, ej]
    );
    (0, s.useEffect)(() => {
      if ("playing" !== es || !H || !ei) return;
      let e3 = 0, a3 = performance.now(), t3 = (i2) => {
        let s2 = Math.min(ei.clip, eo.current + (i2 - a3) / 1e3);
        (a3 = i2, ey(s2, ei.clip), s2 >= ei.clip) ? ev(ei) : e3 = requestAnimationFrame(t3);
      };
      return e3 = requestAnimationFrame(t3), () => cancelAnimationFrame(e3);
    }, [es, H, ei, ey, ev]), (0, s.useEffect)(() => {
      if (!em || !H || "idle" !== es || !ei || eo.current > 0) return;
      let e3 = window.setTimeout(
        () => {
          ex.current = true, ek(ei);
        },
        ex.current ? 640 : 2200
      );
      return () => window.clearTimeout(e3);
    }, [em, H, es, ei, ek, eg]), (0, s.useEffect)(
      () => () => {
        ed.current?.abort(), window.clearTimeout(eh.current);
      },
      []
    );
    let eb = () => {
      eu && ep(false);
    }, eN = (e3) => {
      if ("pointerdown" === e3.type)
        e3.currentTarget.setPointerCapture(e3.pointerId);
      else if (!e3.currentTarget.hasPointerCapture(e3.pointerId)) return;
      ((e4, a3) => {
        if (!ei || "error" === es || "loading" === es) return;
        let t3 = a3.getBoundingClientRect(), i2 = Math.min(1, Math.max(0, (e4 - t3.left) / t3.width));
        window.clearTimeout(eh.current), ey(i2 * ei.clip, ei.clip), "idle" === es && en("paused");
      })(e3.clientX, e3.currentTarget);
    }, ew = (0, s.useMemo)(() => ei ? z(ei.at % 97) : z(1), [ei]), eT = (0, s.useMemo)(
      () => (function(e3) {
        let a3 = e3.split(/(\s+)/).filter(Boolean), t3 = [], i2 = 0, s2 = 0;
        for (; i2 < a3.length; ) {
          let e4 = 2 * A[s2++ % A.length];
          t3.push(a3.slice(i2, i2 + e4).join("")), i2 += e4;
        }
        return t3;
      })(l2),
      [l2]
    ), [eM, eC] = (0, s.useState)(0), [eI, eS] = (0, s.useState)("waiting"), eO = W ? "done" : eI, e$ = W ? eT.length : eM;
    (0, s.useEffect)(() => {
      if (!l2 || W || !U) return;
      let e3 = 0, a3 = 0, t3 = window.setTimeout(() => {
        eS("streaming"), a3 = window.setInterval(() => {
          eC(e3 += 1), e3 >= eT.length && (window.clearInterval(a3), eS("done"));
        }, 35);
      }, 720);
      return () => {
        window.clearTimeout(t3), window.clearInterval(a3);
      };
    }, [U, W, l2, eT]);
    let [eF, eL] = (0, s.useState)(
      () => Object.fromEntries(o2.map((e3) => [e3.id, !!e3.done]))
    ), ez = c2 ?? L(o2, eF), eA = o2.filter((e3) => eF[e3.id]).length, eq = ei ? $[ei.type] : void 0, eE = S(e2.duration), eP = Math.round(e2.duration / 60);
    return (0, i.jsxs)("section", {
      ref: B,
      className: C(T().root, D),
      "aria-label": `${e2.company} call insights`,
      onPointerDownCapture: eb,
      onKeyDownCapture: eb,
      children: [
        (0, i.jsx)("span", {
          className: T().srOnly,
          role: "status",
          "aria-live": "polite",
          children: K
        }),
        (0, i.jsxs)("header", {
          className: C(T().section, T().header),
          "data-frame-keep": "",
          children: [
            (0, i.jsx)("span", {
              className: T().logo,
              role: "img",
              "aria-label": e2.company,
              children: e2.logo ?? e2.company.slice(0, 1)
            }),
            (0, i.jsxs)("div", {
              className: T().headText,
              children: [
                (0, i.jsx)("h2", { className: T().title, children: e2.title }),
                (0, i.jsxs)("p", {
                  className: T().meta,
                  children: [
                    (0, i.jsxs)("span", {
                      className: T().company,
                      children: [
                        e2.company,
                        (0, i.jsx)("span", {
                          className: T().dot,
                          "aria-hidden": "true",
                          children: "\xB7"
                        })
                      ]
                    }),
                    e2.platformMark ? (0, i.jsx)("span", {
                      className: T().platform,
                      role: "img",
                      "aria-label": e2.platform ?? "Meeting",
                      children: e2.platformMark
                    }) : null,
                    e2.platform ? (0, i.jsx)("span", {
                      className: T().platformName,
                      children: e2.platform
                    }) : null,
                    e2.platform || e2.platformMark ? (0, i.jsx)("span", {
                      className: T().dot,
                      "aria-hidden": "true",
                      children: "\xB7"
                    }) : null,
                    (0, i.jsx)("span", { children: e2.date }),
                    (0, i.jsx)("span", {
                      className: T().dot,
                      "aria-hidden": "true",
                      children: "\xB7"
                    }),
                    (0, i.jsxs)("span", {
                      className: T().num,
                      children: [eP, " min"]
                    })
                  ]
                })
              ]
            }),
            (0, i.jsxs)("div", {
              className: T().headAside,
              children: [
                (0, i.jsx)("span", {
                  className: T().risk,
                  "data-risk": ez,
                  children: Object.keys(F).map(
                    (e3) => (0, i.jsxs)(
                      "span",
                      {
                        className: T().riskFace,
                        "data-active": e3 === ez || void 0,
                        "aria-hidden": e3 !== ez,
                        children: [
                          F[e3].icon,
                          (0, i.jsx)("span", { children: F[e3].label })
                        ]
                      },
                      e3
                    )
                  )
                }),
                (0, i.jsx)("span", {
                  className: T().attendees,
                  role: "img",
                  "aria-label": `${a2.length} attendees: ${a2.map((e3) => e3.name).join(", ")}`,
                  children: a2.slice(0, 4).map(
                    (e3) => (0, i.jsx)(
                      _.e,
                      {
                        name: e3.name,
                        src: e3.avatar,
                        size: "sm",
                        className: T().mini,
                        "aria-hidden": "true"
                      },
                      e3.id
                    )
                  )
                })
              ]
            })
          ]
        }),
        (0, i.jsxs)("div", {
          className: T().section,
          "data-frame-keep": "",
          children: [
            (0, i.jsxs)(E, {
              title: "Talk time",
              children: [
                (0, i.jsxs)("span", {
                  className: T().num,
                  children: ["Your team ", V.internal, "%"]
                }),
                (0, i.jsx)("span", {
                  className: T().dot,
                  "aria-hidden": "true",
                  children: "\xB7"
                }),
                (0, i.jsxs)("span", {
                  children: [
                    e2.company,
                    " ",
                    (0, i.jsxs)("span", {
                      className: T().num,
                      children: [V.external, "%"]
                    })
                  ]
                })
              ]
            }),
            (0, i.jsx)("div", {
              className: T().bar,
              "data-in": U || W || void 0,
              role: "img",
              "aria-label": V.rows.map((e3) => `${e3.speaker.name} ${Math.round(e3.share)}%`).join(", "),
              children: V.rows.map((e3, a3) => {
                let t3 = V.rows[a3 + 1];
                return (0, i.jsx)(
                  "span",
                  {
                    className: T().segment,
                    "data-dim": J && J !== e3.speaker.id || void 0,
                    "data-side-break": t3 && t3.speaker.side !== e3.speaker.side || void 0,
                    style: { flexGrow: e3.share, background: e3.color },
                    onPointerEnter: () => ee(e3.speaker.id),
                    onPointerLeave: () => ee(void 0)
                  },
                  e3.speaker.id
                );
              })
            }),
            (0, i.jsx)("ul", {
              className: T().legend,
              children: V.rows.map(
                (e3) => (0, i.jsxs)(
                  "li",
                  {
                    className: T().legendItem,
                    "data-dim": J && J !== e3.speaker.id || void 0,
                    onPointerEnter: () => ee(e3.speaker.id),
                    onPointerLeave: () => ee(void 0),
                    children: [
                      (0, i.jsx)("span", {
                        className: T().swatch,
                        style: { background: e3.color },
                        "aria-hidden": "true"
                      }),
                      (0, i.jsx)("span", {
                        className: T().legendName,
                        children: e3.speaker.name
                      }),
                      (0, i.jsxs)("span", {
                        className: T().legendShare,
                        children: [Math.round(e3.share), "%"]
                      })
                    ]
                  },
                  e3.speaker.id
                )
              )
            })
          ]
        }),
        (0, i.jsxs)("div", {
          className: T().section,
          "data-frame-keep": "",
          children: [
            (0, i.jsx)(E, {
              title: "Key moments",
              children: (0, i.jsxs)("span", {
                className: T().num,
                children: [t2.length, " flagged"]
              })
            }),
            (0, i.jsxs)("div", {
              className: T().track,
              children: [
                (0, i.jsx)("span", {
                  className: T().rail,
                  "aria-hidden": "true"
                }),
                (0, i.jsx)("span", {
                  className: T().railFill,
                  "aria-hidden": "true",
                  style: {
                    transform: `scaleX(${ei ? ei.at / e2.duration : 0})`
                  }
                }),
                (0, i.jsx)("div", {
                  className: T().markers,
                  role: "radiogroup",
                  "aria-label": "Key moments",
                  children: t2.map(
                    (a3, s2) => (0, i.jsx)(
                      "button",
                      {
                        type: "button",
                        role: "radio",
                        "data-marker": a3.id,
                        "aria-checked": a3.id === ei?.id,
                        tabIndex: a3.id === ei?.id ? 0 : -1,
                        "aria-label": `${$[a3.type].label} at ${S(a3.at)}, ${Q(a3.speakerId).name}`,
                        className: T().marker,
                        style: {
                          left: `clamp(12px, ${a3.at / e2.duration * 100}%, calc(100% - 12px))`
                        },
                        onClick: () => {
                          a3.id !== ei?.id && ej(a3);
                        },
                        onKeyDown: (e3) => {
                          let a4, i2;
                          return a4 = t2.length - 1, void (!((i2 = "ArrowRight" === e3.key || "ArrowDown" === e3.key ? Math.min(a4, s2 + 1) : "ArrowLeft" === e3.key || "ArrowUp" === e3.key ? Math.max(0, s2 - 1) : "Home" === e3.key ? 0 : "End" === e3.key ? a4 : -1) < 0) && (e3.preventDefault(), ej(t2[i2]), B.current?.querySelector(`[data-marker="${t2[i2].id}"]`)?.focus()));
                        },
                        children: $[a3.type].icon
                      },
                      a3.id
                    )
                  )
                })
              ]
            }),
            (0, i.jsxs)("div", {
              className: T().ticks,
              "aria-hidden": "true",
              children: [
                (0, i.jsx)("span", { className: T().num, children: "00:00" }),
                (0, i.jsx)("span", {
                  className: T().types,
                  children: Object.keys($).map(
                    (e3) => (0, i.jsxs)(
                      "span",
                      {
                        className: T().type,
                        children: [$[e3].icon, $[e3].label]
                      },
                      e3
                    )
                  )
                }),
                (0, i.jsx)("span", { className: T().num, children: eE })
              ]
            }),
            (0, i.jsx)("div", {
              className: T().panel,
              children: ei && eq ? (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("div", {
                    className: T().quotes,
                    children: t2.map((e3) => {
                      let a3 = Q(e3.speakerId), t3 = e3.id === ei.id;
                      return (0, i.jsxs)(
                        "figure",
                        {
                          className: T().quote,
                          "data-active": t3 || void 0,
                          "aria-hidden": !t3,
                          children: [
                            (0, i.jsxs)("figcaption", {
                              className: T().quoteHead,
                              children: [
                                (0, i.jsx)(_.e, {
                                  name: a3.name,
                                  src: a3.avatar,
                                  size: "sm",
                                  className: T().mini,
                                  "aria-hidden": "true"
                                }),
                                (0, i.jsx)("span", {
                                  className: T().quoteName,
                                  children: a3.name
                                }),
                                a3.title ? (0, i.jsx)("span", {
                                  className: T().quoteRole,
                                  children: a3.title
                                }) : null,
                                (0, i.jsxs)("span", {
                                  className: T().quoteType,
                                  children: [
                                    $[e3.type].icon,
                                    (0, i.jsx)("span", {
                                      children: $[e3.type].label
                                    }),
                                    (0, i.jsx)("span", {
                                      className: T().dot,
                                      "aria-hidden": "true",
                                      children: "\xB7"
                                    }),
                                    (0, i.jsx)("span", {
                                      className: T().num,
                                      children: S(e3.at)
                                    })
                                  ]
                                })
                              ]
                            }),
                            (0, i.jsx)("blockquote", {
                              className: T().quoteText,
                              children: `\u201C${e3.quote}\u201D`
                            })
                          ]
                        },
                        e3.id
                      );
                    })
                  }),
                  (0, i.jsxs)("div", {
                    className: T().player,
                    "data-state": es,
                    children: [
                      (0, i.jsxs)("button", {
                        type: "button",
                        className: T().play,
                        onClick: () => {
                          if (ei) {
                            if ("playing" === es) {
                              en("paused"), G("Paused.");
                              return;
                            }
                            if ("loading" === es) {
                              ed.current?.abort(), en("idle");
                              return;
                            }
                            "error" === es && ey(0, ei.clip), ek(ei);
                          }
                        },
                        "aria-label": "playing" === es ? "Pause clip" : "loading" === es ? "Cancel loading" : "error" === es ? "Retry clip" : `Play clip at ${S(ei.at)}`,
                        children: [
                          (0, i.jsx)("span", {
                            className: T().playFace,
                            "data-active": "idle" === es || "paused" === es || void 0,
                            children: (0, i.jsx)(u.A, {
                              size: 14,
                              strokeWidth: 1.75,
                              fill: "currentColor",
                              "aria-hidden": "true"
                            })
                          }),
                          (0, i.jsx)("span", {
                            className: T().playFace,
                            "data-active": "playing" === es || void 0,
                            children: (0, i.jsx)(p.A, {
                              size: 14,
                              strokeWidth: 1.75,
                              fill: "currentColor",
                              "aria-hidden": "true"
                            })
                          }),
                          (0, i.jsx)("span", {
                            className: T().playFace,
                            "data-active": "loading" === es || void 0,
                            children: (0, i.jsx)(q, {})
                          }),
                          (0, i.jsx)("span", {
                            className: T().playFace,
                            "data-active": "error" === es || void 0,
                            children: (0, i.jsx)(m.A, {
                              size: 14,
                              strokeWidth: 1.75,
                              "aria-hidden": "true"
                            })
                          })
                        ]
                      }),
                      (0, i.jsxs)("div", {
                        className: T().waveSlot,
                        children: [
                          (0, i.jsxs)("div", {
                            ref: ec,
                            className: T().wave,
                            role: "slider",
                            tabIndex: "error" === es ? -1 : 0,
                            "aria-label": "Clip position",
                            "aria-valuemin": 0,
                            "aria-valuemax": ei.clip,
                            "aria-valuenow": Math.min(el, ei.clip),
                            "aria-valuetext": `${O(el)} of ${O(ei.clip)}`,
                            onPointerDown: eN,
                            onPointerMove: eN,
                            onKeyDown: (e3) => {
                              if (!ei || "error" === es || "loading" === es)
                                return;
                              let a3 = "ArrowRight" === e3.key || "ArrowUp" === e3.key ? 1 : "ArrowLeft" === e3.key || "ArrowDown" === e3.key ? -1 : 0, t3 = a3 ? eo.current + a3 : "Home" === e3.key ? 0 : "End" === e3.key ? ei.clip - 0.01 : -1;
                              (!(t3 < 0) || a3) && (e3.preventDefault(), ey(
                                Math.min(
                                  ei.clip - 0.01,
                                  Math.max(0, t3)
                                ),
                                ei.clip
                              ), "idle" === es && en("paused"));
                            },
                            children: [
                              (0, i.jsx)("span", {
                                className: T().bars,
                                "aria-hidden": "true",
                                children: ew.map(
                                  (e3, a3) => (0, i.jsx)(
                                    "span",
                                    { style: { height: `${100 * e3}%` } },
                                    a3
                                  )
                                )
                              }),
                              (0, i.jsx)("span", {
                                className: C(T().bars, T().played),
                                "aria-hidden": "true",
                                children: ew.map(
                                  (e3, a3) => (0, i.jsx)(
                                    "span",
                                    { style: { height: `${100 * e3}%` } },
                                    a3
                                  )
                                )
                              })
                            ]
                          }),
                          (0, i.jsxs)("span", {
                            className: T().clipError,
                            "aria-hidden": "error" !== es,
                            children: [
                              (0, i.jsx)(d.A, {
                                size: 14,
                                strokeWidth: 1.75,
                                "aria-hidden": "true"
                              }),
                              "Clip unavailable, try again"
                            ]
                          })
                        ]
                      }),
                      (0, i.jsxs)("span", {
                        className: T().clipTime,
                        children: [
                          O(Math.min(el, ei.clip)),
                          (0, i.jsxs)("span", {
                            className: T().clipTotal,
                            children: [" / ", O(ei.clip)]
                          })
                        ]
                      })
                    ]
                  })
                ]
              }) : (0, i.jsx)("p", {
                className: T().empty,
                children: "No key moments were flagged on this call."
              })
            })
          ]
        }),
        (0, i.jsxs)("div", {
          className: T().section,
          "data-frame-keep": "",
          children: [
            (0, i.jsx)(E, {
              title: (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(N, {
                    width: 14,
                    height: 14,
                    className: T().titleMark
                  }),
                  (0, i.jsx)("span", { children: "Summary" }),
                  (0, i.jsx)("span", { className: T().model, children: r2 })
                ]
              }),
              children: l2 ? (0, i.jsx)(g.CopyButton, {
                value: l2,
                label: "Copy summary",
                iconOnly: true,
                variant: "plain",
                className: T().copy,
                disabled: "done" !== eO
              }) : null
            }),
            l2 ? (0, i.jsxs)("div", {
              className: T().summary,
              "aria-busy": "done" !== eO,
              children: [
                (0, i.jsx)("p", {
                  className: T().summaryGhost,
                  "aria-hidden": "true",
                  children: l2
                }),
                (0, i.jsx)("p", {
                  className: T().summaryText,
                  "aria-hidden": "done" !== eO,
                  children: eT.slice(0, e$).map(
                    (e3, a3) => (0, i.jsx)(
                      "span",
                      { className: W ? void 0 : T().chunk, children: e3 },
                      a3
                    )
                  )
                }),
                "done" === eO ? null : (0, i.jsx)("p", {
                  className: T().srOnly,
                  children: "Summarizing the call."
                }),
                (0, i.jsx)("span", {
                  className: T().thinking,
                  "data-active": "waiting" === eO || void 0,
                  "aria-hidden": "true",
                  children: (0, i.jsx)(f.n, {
                    active: "waiting" === eO && U,
                    children: `Summarizing ${eP} min call`
                  })
                })
              ]
            }) : (0, i.jsx)("p", {
              className: T().empty,
              children: "No summary for this call yet."
            })
          ]
        }),
        (0, i.jsxs)("div", {
          className: T().section,
          "data-frame-keep": "",
          children: [
            (0, i.jsx)(E, {
              title: "Next steps",
              children: (0, i.jsxs)("span", {
                className: T().num,
                children: [eA, " of ", o2.length, " done"]
              })
            }),
            o2.length ? (0, i.jsx)("ul", {
              className: T().steps,
              children: o2.map((a3) => {
                let t3 = Q(a3.ownerId), s2 = !!eF[a3.id];
                return (0, i.jsxs)(
                  "li",
                  {
                    className: T().step,
                    "data-done": s2 || void 0,
                    children: [
                      (0, i.jsx)(x.S, {
                        checked: s2,
                        onCheckedChange: (e3) => {
                          var t4;
                          let i2, s3;
                          return t4 = true === e3, eL(i2 = { ...eF, [a3.id]: t4 }), R2?.(a3, t4), s3 = c2 ?? L(o2, i2), void G(
                            `${t4 ? "Done" : "Reopened"}: ${a3.label}.${s3 !== ez ? ` Deal risk is now ${s3}.` : ""}`
                          );
                        },
                        "aria-label": a3.label,
                        className: T().check
                      }),
                      (0, i.jsx)("span", {
                        className: T().stepLabel,
                        children: a3.label
                      }),
                      (0, i.jsxs)("span", {
                        className: T().owner,
                        title: t3.name,
                        children: [
                          (0, i.jsx)(_.e, {
                            name: t3.name,
                            src: t3.avatar,
                            size: "sm",
                            className: T().mini,
                            "aria-hidden": "true"
                          }),
                          (0, i.jsx)("span", {
                            className: T().ownerName,
                            children: t3.name.split(" ")[0]
                          }),
                          (0, i.jsx)("span", {
                            className: T().srOnly,
                            children: `, owner ${t3.name}${"external" === t3.side ? `, ${e2.company}` : ""}`
                          })
                        ]
                      }),
                      (0, i.jsxs)("span", {
                        className: T().due,
                        children: [
                          (0, i.jsx)("span", {
                            className: T().srOnly,
                            children: "due "
                          }),
                          a3.due
                        ]
                      })
                    ]
                  },
                  a3.id
                );
              })
            }) : (0, i.jsx)("p", {
              className: T().empty,
              children: "No next steps yet."
            })
          ]
        })
      ]
    });
  }
  let R = P;
}

__m(__module,__exports,__require);
}