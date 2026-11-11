function(__module,__exports,__require){
"use strict";
const __m = (e, t, r) => {
  "use strict";
  r.r(t), r.d(t, { ReferralCardDemo: () => B, default: () => G });
  var a = r(95155), i = r(12115), n = r(92298), s = r(51288), l = r(28245), o = r(55809), c = r(92171), d = r(25354), u = r(80642), m = r(18310), h = r(75796), p = r(20292), f = r(64962), _ = r(64577), x = r(9005), y = r(35484), v = r(17007), g = r(92218), j = r(73474), b = r(36690);
  let k = [
    {
      id: "ref-ryan",
      name: "Ryan Sullivan",
      email: "ryan@ledgerly.com",
      avatar: "media/people/ryan-sullivan.svg",
      stage: "invited",
      invitedAt: "2026-10-26T09:12:00Z"
    },
    {
      id: "ref-chloe",
      name: "Chloe Nguyen",
      email: "chloe@parcel.so",
      avatar: "media/people/chloe-nguyen.svg",
      stage: "signed-up",
      invitedAt: "2026-10-23T15:40:00Z"
    },
    {
      id: "ref-priya",
      name: "Priya Shah",
      email: "priya@hexwork.io",
      stage: "invited",
      invitedAt: "2026-10-21T11:05:00Z"
    },
    {
      id: "ref-daniel",
      name: "Daniel Kim",
      email: "daniel@fieldnote.studio",
      avatar: "media/people/daniel-kim.svg",
      stage: "earned",
      invitedAt: "2026-10-17T08:30:00Z"
    },
    {
      id: "ref-jasmine",
      name: "Jasmine Brooks",
      email: "jasmine@lumen.dev",
      avatar: "media/people/jasmine-brooks.svg",
      stage: "earned",
      invitedAt: "2026-10-12T17:20:00Z"
    },
    {
      id: "ref-marcus",
      name: "Marcus Johnson",
      email: "marcus@tidewater.co",
      avatar: "media/people/marcus-johnson.svg",
      stage: "earned",
      invitedAt: "2026-10-06T10:00:00Z"
    }
  ], w = [
    { at: 1400, id: "ref-chloe", stage: "earned" },
    { at: 2900, id: "ref-ryan", stage: "signed-up" },
    { at: 4400, id: "ref-ryan", stage: "earned" }
  ];
  var N = r(21842), C = r.n(N);
  let A = {
    goal: 5,
    reward: "3 months free",
    detail: "Applied to your next invoice"
  }, T = /^[^\s@,;]+@[^\s@,;]+\.[^\s@,;]{2,}$/, S = [0.22, 1, 0.36, 1], I = { duration: 0.16, ease: S }, z = { duration: 0.1, ease: S }, R = { duration: 0 }, $ = { type: "spring", visualDuration: 0.24, bounce: 0 }, E = [
    {
      id: "x",
      label: "Post on X",
      done: "Opened an X post draft",
      icon: (0, a.jsx)(
        function({ size: e2 = 16, ...t2 }) {
          return (0, a.jsx)("svg", {
            width: e2,
            height: e2,
            viewBox: "0 0 24 24",
            fill: "currentColor",
            "aria-hidden": "true",
            ...t2,
            children: (0, a.jsx)("path", {
              d: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
            })
          });
        },
        { size: 14 }
      )
    },
    {
      id: "linkedin",
      label: "Share on LinkedIn",
      done: "Opened a LinkedIn share",
      icon: (0, a.jsx)(
        function({ size: e2 = 16, ...t2 }) {
          return (0, a.jsx)("svg", {
            width: e2,
            height: e2,
            viewBox: "0 0 24 24",
            fill: "currentColor",
            "aria-hidden": "true",
            ...t2,
            children: (0, a.jsx)("path", {
              d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.73 1.637-1.665 3.37-1.665 3.6 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            })
          });
        },
        { size: 15 }
      )
    },
    {
      id: "email",
      label: "Share by email",
      done: "Opened an email draft",
      icon: (0, a.jsx)(h.A, { size: 16, strokeWidth: 1.75 })
    }
  ], M = {
    invited: {
      label: () => "Invited",
      icon: (0, a.jsx)(h.A, { size: 14, strokeWidth: 1.75 })
    },
    "signed-up": {
      label: () => "Signed up",
      icon: (0, a.jsx)(p.A, { size: 14, strokeWidth: 1.75 })
    },
    earned: {
      label: (e2) => `Earned ${e2}`,
      icon: (0, a.jsx)(f.A, { size: 14, strokeWidth: 1.75 })
    }
  };
  function O({ value: e2, format: t2, reduced: r2 }) {
    let n2 = (0, l.d)(e2), s2 = (0, o.G)(n2, (e3) => t2(Math.round(e3)));
    return (0, i.useEffect)(() => {
      if (r2) return void n2.set(e2);
      let t3 = (0, c.i)(n2, e2, { duration: 0.6, ease: S });
      return () => t3.stop();
    }, [n2, e2, r2]), (0, a.jsx)(d.PY1.span, { children: s2 });
  }
  function D({ id: e2, reduced: t2, className: r2, children: i2 }) {
    return (0, a.jsx)("span", {
      className: [C().swap, r2].filter(Boolean).join(" "),
      children: (0, a.jsx)(u.N, {
        initial: false,
        children: (0, a.jsx)(
          d.PY1.span,
          {
            className: C().swapItem,
            initial: t2 ? { opacity: 0 } : { opacity: 0, y: 2 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, transition: t2 ? R : z },
            transition: t2 ? R : I,
            children: i2
          },
          e2
        )
      })
    });
  }
  let L = { tone: "idle", text: "Press Enter after each address" };
  function P({
    link: e2 = "https://northwind.app/r/emma20",
    reward: t2 = 20,
    currency: r2 = "USD",
    title: n2,
    description: l2,
    referrals: o2,
    milestone: c2 = A,
    shareMessage: h2 = "I use Northwind to run our team's planning. Here is $20 off your first month.",
    maxInvites: p2 = 10,
    simulate: N2,
    onCopy: S2,
    onShare: W2,
    onInvite: F2,
    onMilestone: B2,
    className: G2
  }) {
    let Y = (0, m.I)() ?? false, U = N2 ?? void 0 === o2, Z = (0, i.useCallback)(
      (e3) => new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: r2,
        maximumFractionDigits: 0
      }).format(e3),
      [r2]
    ), H = Z(t2), q = n2 ?? `Give ${H}, get ${H}`, V = l2 ?? `Friends get ${H} off their first month. You get ${H} in credit for each friend who subscribes.`, [J, K] = (0, i.useState)(o2 ?? k), [X, Q] = (0, i.useState)(o2);
    o2 !== X && (Q(o2), o2 && K(o2));
    let ee = J.length, et = J.filter((e3) => "invited" !== e3.stage).length, er = J.filter((e3) => "earned" === e3.stage).length, ea = Math.max(1, c2.goal), ei = er >= ea, en = Math.max(0, ea - er), es = (0, i.useRef)(null), el = (0, i.useRef)([]), eo = (0, i.useCallback)((e3, t3, r3) => {
      el.current.push(
        window.setTimeout(
          () => K((r4) => r4.map((r5) => r5.id === e3 ? { ...r5, stage: t3 } : r5)),
          r3
        )
      );
    }, []);
    (0, i.useEffect)(
      () => () => {
        el.current.forEach(window.clearTimeout), el.current = [];
      },
      []
    );
    let ec = (0, i.useRef)(false);
    (0, i.useEffect)(() => {
      if (!U || void 0 !== o2 || ec.current) return;
      let e3 = es.current, t3 = () => {
        ec.current || (ec.current = true, w.forEach((e4) => eo(e4.id, e4.stage, Y ? e4.at / 2 : e4.at)));
      };
      if (!e3 || "u" < typeof IntersectionObserver) return void t3();
      let r3 = new IntersectionObserver(
        (e4) => {
          e4.some((e5) => e5.isIntersecting) && (t3(), r3.disconnect());
        },
        { threshold: 0.4 }
      );
      return r3.observe(e3), () => r3.disconnect();
    }, [U, o2, eo, Y]);
    let ed = (0, i.useRef)(ei);
    (0, i.useEffect)(() => {
      ei && !ed.current && (ed.current = true, B2?.(c2)), ei || (ed.current = false);
    }, [ei, c2, B2]);
    let [eu, em] = (0, i.useState)(null), [eh, ep] = (0, i.useState)(""), ef = (0, i.useRef)(void 0);
    (0, i.useEffect)(() => () => window.clearTimeout(ef.current), []);
    let [e_, ex] = (0, i.useState)([]), [ey, ev] = (0, i.useState)(""), [eg, ej] = (0, i.useState)(L), [eb, ek] = (0, i.useState)(false), ew = (0, i.useRef)(null), eN = (0, i.useRef)(null), eC = (0, i.useRef)(null), eA = (0, i.useRef)(void 0);
    (0, i.useEffect)(
      () => () => {
        eC.current?.abort(), window.clearTimeout(eA.current);
      },
      []
    );
    let eT = (0, i.useId)();
    function eS(e3, t3 = 0) {
      window.clearTimeout(eA.current), ej(e3), t3 && (eA.current = window.setTimeout(() => ej(L), t3));
    }
    function eI(e3) {
      let t3 = e3.split(/[\s,;]+/).map((e4) => e4.trim().toLowerCase()).filter(Boolean);
      if (!t3.length) return e_;
      let r3 = [...e_];
      for (let e4 of t3) {
        if (!T.test(e4))
          return ev(e4), eS({ tone: "error", text: `${e4} is not a full email address` }), null;
        if (!r3.includes(e4)) {
          if (J.some((t4) => t4.email.toLowerCase() === e4))
            return ev(e4), eS({ tone: "error", text: `${e4} was already invited` }), null;
          if (r3.length >= p2)
            return ev(""), ex(r3), eS({ tone: "error", text: `Up to ${p2} addresses per send` }), null;
          r3.push(e4);
        }
      }
      return ex(r3), ev(""), "error" === eg.tone && eS(L), requestAnimationFrame(() => {
        let e4 = eN.current;
        e4 && (e4.scrollLeft = e4.scrollWidth);
      }), r3;
    }
    async function ez() {
      if (eb) return;
      let e3 = ey.trim() ? eI(ey) : e_;
      if (!e3) return;
      if (!e3.length) {
        eS({ tone: "error", text: "Add at least one email address" }), ew.current?.focus();
        return;
      }
      eC.current?.abort();
      let t3 = new AbortController();
      eC.current = t3, ek(true), eS(L);
      try {
        if (F2 ? await F2(e3, { signal: t3.signal }) : await new Promise((e4) => setTimeout(e4, 700)), t3.signal.aborted)
          return;
        let r3 = (/* @__PURE__ */ new Date()).toISOString(), a2 = e3.map((e4, t4) => ({
          id: `invite-${Date.now()}-${t4}`,
          email: e4,
          stage: "invited",
          invitedAt: r3
        }));
        K((e4) => [...a2, ...e4]), ex([]);
        let i2 = `${e3.length} invite${1 === e3.length ? "" : "s"}`;
        eS(
          {
            tone: "success",
            text: F2 ? `Sent ${i2}` : `Sent ${i2}. Simulated, nothing was sent.`
          },
          4200
        ), U && (eo(a2[0].id, "signed-up", 2600), eo(a2[0].id, "earned", 4600));
      } catch (e4) {
        if (t3.signal.aborted) return;
        eS({
          tone: "error",
          text: e4 instanceof Error && e4.message ? e4.message : "Could not send the invites. Try again."
        });
      } finally {
        t3.signal.aborted || ek(false);
      }
    }
    let eR = e2.replace(/^https?:\/\//, ""), e$ = eR.lastIndexOf("/") + 1, eE = Math.min(ea, 12), eM = Math.min(er, ea) / ea * eE;
    return (0, a.jsxs)("div", {
      ref: es,
      className: [C().root, G2].filter(Boolean).join(" "),
      children: [
        (0, a.jsxs)("div", {
          className: C().card,
          children: [
            (0, a.jsxs)("header", {
              className: C().header,
              children: [
                (0, a.jsx)("h3", { className: C().title, children: q }),
                (0, a.jsx)("p", { className: C().description, children: V })
              ]
            }),
            (0, a.jsxs)("div", {
              className: C().actions,
              children: [
                (0, a.jsxs)("div", {
                  className: C().linkRow,
                  children: [
                    (0, a.jsxs)("div", {
                      className: C().linkField,
                      children: [
                        (0, a.jsxs)("span", {
                          className: C().linkText,
                          title: e2,
                          children: [
                            (0, a.jsx)("span", {
                              className: C().linkBase,
                              children: eR.slice(0, e$)
                            }),
                            eR.slice(e$)
                          ]
                        }),
                        (0, a.jsx)(j.CopyButton, {
                          value: e2,
                          label: "Copy",
                          variant: "plain",
                          className: C().copy,
                          onCopied: () => S2?.(e2)
                        })
                      ]
                    }),
                    (0, a.jsx)("div", {
                      className: C().shareGroup,
                      role: "group",
                      "aria-label": "Share your link",
                      children: E.map(
                        (t3) => (0, a.jsx)(
                          b.m,
                          {
                            content: t3.label,
                            children: (0, a.jsx)("button", {
                              type: "button",
                              className: C().share,
                              "aria-label": t3.label,
                              onClick: () => {
                                var r3;
                                let a2, i2, n3, s2;
                                return r3 = t3.id, a2 = E.find((e3) => e3.id === r3), i2 = encodeURIComponent(h2), n3 = encodeURIComponent(e2), s2 = "x" === r3 ? `https://x.com/intent/post?text=${i2}&url=${n3}` : "linkedin" === r3 ? `https://www.linkedin.com/sharing/share-offsite/?url=${n3}` : `mailto:?subject=${encodeURIComponent("An invite for you")}&body=${encodeURIComponent(`${h2}

${e2}`)}`, void (W2 ? (W2(r3, s2), ep(`${a2.done}.`)) : ep(
                                  `${a2.done}. Simulated, nothing was posted.`
                                ), em(r3), window.clearTimeout(ef.current), ef.current = window.setTimeout(
                                  () => em(null),
                                  1600
                                ));
                              },
                              "data-done": eu === t3.id || void 0,
                              children: (0, a.jsx)(D, {
                                id: eu === t3.id ? "done" : "idle",
                                reduced: Y,
                                className: C().shareIcon,
                                children: eu === t3.id ? (0, a.jsx)(_.A, {
                                  size: 16,
                                  strokeWidth: 1.75
                                }) : t3.icon
                              })
                            })
                          },
                          t3.id
                        )
                      )
                    })
                  ]
                }),
                (0, a.jsxs)("div", {
                  className: C().inviteRow,
                  children: [
                    (0, a.jsx)("div", {
                      className: C().chipField,
                      "data-invalid": "error" === eg.tone || void 0,
                      onMouseDown: (e3) => {
                        (e3.target === e3.currentTarget || e3.target === eN.current) && (e3.preventDefault(), ew.current?.focus());
                      },
                      children: (0, a.jsxs)("div", {
                        ref: eN,
                        className: C().chipTrack,
                        children: [
                          (0, a.jsx)(u.N, {
                            initial: false,
                            children: e_.map(
                              (e3) => (0, a.jsxs)(
                                d.PY1.span,
                                {
                                  className: C().chip,
                                  initial: Y ? { opacity: 0 } : { opacity: 0, scale: 0.94 },
                                  animate: { opacity: 1, scale: 1 },
                                  exit: { opacity: 0, transition: Y ? R : z },
                                  transition: Y ? R : I,
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: C().chipText,
                                      children: e3
                                    }),
                                    (0, a.jsx)("button", {
                                      type: "button",
                                      className: C().chipRemove,
                                      "aria-label": `Remove ${e3}`,
                                      onClick: () => {
                                        ex((t3) => t3.filter((t4) => t4 !== e3)), ew.current?.focus();
                                      },
                                      disabled: eb,
                                      children: (0, a.jsx)(x.A, {
                                        size: 12,
                                        strokeWidth: 2
                                      })
                                    })
                                  ]
                                },
                                e3
                              )
                            )
                          }),
                          (0, a.jsx)("input", {
                            ref: ew,
                            className: C().chipInput,
                            type: "email",
                            inputMode: "email",
                            autoComplete: "off",
                            spellCheck: false,
                            value: ey,
                            placeholder: e_.length ? "" : "Invite by email",
                            "aria-label": "Invite by email",
                            "aria-describedby": eT,
                            "aria-invalid": "error" === eg.tone || void 0,
                            readOnly: eb,
                            onChange: (e3) => {
                              ev(e3.target.value), "error" === eg.tone && eS(L);
                            },
                            onKeyDown: function(e3) {
                              if ("Enter" === e3.key || "," === e3.key || ";" === e3.key || " " === e3.key && ey || "Tab" === e3.key && ey.trim() && !e3.shiftKey) {
                                if ("Enter" === e3.key && !ey.trim()) {
                                  e3.preventDefault(), e_.length && ez();
                                  return;
                                }
                                e3.preventDefault(), eI(ey);
                              } else
                                "Backspace" === e3.key && !ey && e_.length && (e3.preventDefault(), ex(e_.slice(0, -1)));
                            },
                            onPaste: function(e3) {
                              let t3 = e3.clipboardData.getData("text");
                              /[\s,;]/.test(t3.trim()) && (e3.preventDefault(), eI(`${ey} ${t3}`));
                            },
                            onBlur: () => {
                              ey.trim() && T.test(ey.trim()) && eI(ey);
                            }
                          })
                        ]
                      })
                    }),
                    (0, a.jsx)(s.$, {
                      size: "md",
                      className: C().send,
                      loading: eb,
                      onClick: () => void ez(),
                      children: "Send"
                    })
                  ]
                }),
                (0, a.jsx)("p", {
                  id: eT,
                  className: C().hint,
                  "data-tone": eg.tone,
                  role: "status",
                  "aria-live": "polite",
                  children: (0, a.jsxs)(D, {
                    id: `${eg.tone}:${eg.text}`,
                    reduced: Y,
                    children: [
                      "idle" !== eg.tone && (0, a.jsx)("span", {
                        className: C().hintIcon,
                        children: "error" === eg.tone ? (0, a.jsx)(y.A, { size: 14, strokeWidth: 1.75 }) : (0, a.jsx)(f.A, {
                          size: 14,
                          strokeWidth: 1.75
                        })
                      }),
                      (0, a.jsx)("span", {
                        className: C().hintText,
                        children: eg.text
                      })
                    ]
                  })
                })
              ]
            }),
            (0, a.jsxs)("div", {
              className: C().progress,
              children: [
                (0, a.jsxs)("dl", {
                  className: C().stats,
                  children: [
                    (0, a.jsxs)("div", {
                      className: C().stat,
                      children: [
                        (0, a.jsx)("dt", { children: "Invited" }),
                        (0, a.jsx)("dd", {
                          children: (0, a.jsx)(O, {
                            value: ee,
                            format: String,
                            reduced: Y
                          })
                        })
                      ]
                    }),
                    (0, a.jsxs)("div", {
                      className: C().stat,
                      children: [
                        (0, a.jsx)("dt", { children: "Signed up" }),
                        (0, a.jsx)("dd", {
                          children: (0, a.jsx)(O, {
                            value: et,
                            format: String,
                            reduced: Y
                          })
                        })
                      ]
                    }),
                    (0, a.jsxs)("div", {
                      className: C().stat,
                      children: [
                        (0, a.jsx)("dt", { children: "Earned" }),
                        (0, a.jsx)("dd", {
                          children: (0, a.jsx)(O, {
                            value: er * t2,
                            format: Z,
                            reduced: Y
                          })
                        })
                      ]
                    })
                  ]
                }),
                (0, a.jsxs)("div", {
                  className: C().milestone,
                  "data-unlocked": ei || void 0,
                  children: [
                    (0, a.jsxs)("div", {
                      className: C().milestoneHead,
                      children: [
                        (0, a.jsxs)(D, {
                          id: ei ? "unlocked" : `left-${en}`,
                          reduced: Y,
                          className: C().milestoneText,
                          children: [
                            (0, a.jsx)("span", {
                              className: C().milestoneIcon,
                              children: ei ? (0, a.jsx)(f.A, {
                                size: 16,
                                strokeWidth: 1.75
                              }) : (0, a.jsx)(v.A, {
                                size: 16,
                                strokeWidth: 1.75
                              })
                            }),
                            (0, a.jsx)("span", {
                              className: C().milestoneCopy,
                              children: ei ? (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsxs)("span", {
                                    className: C().milestoneStrong,
                                    children: [c2.reward, " unlocked"]
                                  }),
                                  c2.detail && (0, a.jsx)("span", {
                                    className: C().milestoneDetail,
                                    children: c2.detail
                                  })
                                ]
                              }) : (0, a.jsxs)("span", {
                                children: [
                                  en,
                                  " more paid referral",
                                  1 === en ? "" : "s",
                                  " to unlock ",
                                  c2.reward
                                ]
                              })
                            })
                          ]
                        }),
                        (0, a.jsxs)("span", {
                          className: C().milestoneCount,
                          children: [
                            (0, a.jsx)(O, {
                              value: Math.min(er, ea),
                              format: String,
                              reduced: Y
                            }),
                            " of ",
                            ea
                          ]
                        })
                      ]
                    }),
                    (0, a.jsx)("div", {
                      className: C().segments,
                      role: "progressbar",
                      "aria-label": "Milestone progress",
                      "aria-valuemin": 0,
                      "aria-valuemax": ea,
                      "aria-valuenow": Math.min(er, ea),
                      "aria-valuetext": ei ? `${c2.reward} unlocked` : `${er} of ${ea} paid referrals`,
                      children: Array.from(
                        { length: eE },
                        (e3, t3) => (0, a.jsx)(
                          "span",
                          {
                            className: C().segment,
                            children: (0, a.jsx)("span", {
                              className: C().segmentFill,
                              style: {
                                transform: `scaleX(${Math.max(0, Math.min(1, eM - t3))})`
                              }
                            })
                          },
                          t3
                        )
                      )
                    })
                  ]
                }),
                (0, a.jsxs)("ul", {
                  className: C().list,
                  "aria-label": "Referrals",
                  children: [
                    0 === J.length && (0, a.jsx)("li", {
                      className: C().empty,
                      children: "No invites yet. Share your link or invite someone by email."
                    }),
                    (0, a.jsx)(u.N, {
                      initial: false,
                      children: J.map((e3) => {
                        let t3, r3 = M[e3.stage];
                        return (0, a.jsx)(
                          d.PY1.li,
                          {
                            className: C().item,
                            initial: Y ? { opacity: 0 } : { opacity: 0, height: 0 },
                            animate: { opacity: 1, height: 52 },
                            exit: { opacity: 0, height: 0 },
                            transition: Y ? R : { height: $, opacity: I },
                            children: (0, a.jsxs)("div", {
                              className: C().row,
                              children: [
                                (0, a.jsx)(g.e, {
                                  name: e3.name ?? e3.email,
                                  src: e3.avatar,
                                  size: "sm"
                                }),
                                (0, a.jsxs)("div", {
                                  className: C().who,
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: C().name,
                                      children: e3.name ?? e3.email
                                    }),
                                    (0, a.jsxs)("span", {
                                      className: C().meta,
                                      children: [
                                        e3.name ? (0, a.jsx)("span", {
                                          className: C().metaEmail,
                                          children: e3.email
                                        }) : (0, a.jsx)("span", {
                                          children: "Invited"
                                        }),
                                        (0, a.jsxs)("span", {
                                          className: C().metaDate,
                                          children: [
                                            e3.name ? "\xB7 " : "",
                                            Number.isNaN(
                                              t3 = new Date(
                                                e3.invitedAt
                                              ).getTime()
                                            ) ? "" : Date.now() - t3 >= 0 && Date.now() - t3 < 36e5 ? "just now" : new Intl.DateTimeFormat(
                                              "en-US",
                                              {
                                                month: "short",
                                                day: "numeric",
                                                timeZone: "UTC"
                                              }
                                            ).format(t3)
                                          ]
                                        })
                                      ]
                                    })
                                  ]
                                }),
                                (0, a.jsx)(D, {
                                  id: e3.stage,
                                  reduced: Y,
                                  className: C().stage,
                                  children: (0, a.jsxs)("span", {
                                    className: C().stageInner,
                                    "data-stage": e3.stage,
                                    children: [
                                      r3.icon,
                                      (0, a.jsx)("span", {
                                        children: r3.label(H)
                                      })
                                    ]
                                  })
                                })
                              ]
                            })
                          },
                          e3.id
                        );
                      })
                    })
                  ]
                })
              ]
            })
          ]
        }),
        (0, a.jsx)("span", {
          className: C().srOnly,
          role: "status",
          "aria-live": "polite",
          children: eh
        })
      ]
    });
  }
  var W = r(41046), F = r.n(W);
  function B() {
    let [e2, t2] = (0, i.useState)(0);
    return (0, a.jsxs)("div", {
      className: F().demo,
      children: [
        (0, a.jsx)(P, {}, e2),
        (0, a.jsxs)(s.$, {
          variant: "ghost",
          size: "sm",
          className: F().replay,
          onClick: () => t2((e3) => e3 + 1),
          children: [
            (0, a.jsx)(n.A, { size: 14, strokeWidth: 1.75 }),
            "Replay"
          ]
        })
      ]
    });
  }
  let G = B;
};

__m(__module,__exports,__require);
}