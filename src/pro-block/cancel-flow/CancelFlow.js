function(__module,__exports,__require){
"use strict";
function __m(e, a, t) {
  "use strict";
  t.r(a), t.d(a, { CancelFlow: () => G, default: () => ea });
  var n = t(95155), i = t(12115), r = t(79196), s = t(25354), o = t(18310), l = t(80642), c = t(28245), d = t(92171), u = t(57700), p = t(51752), h = t(5736), m = t(25879), f = t(36565), x = t(2125), _ = t(64577), y = t(31966), j = t(92298), w = t(50825), g = t(65024), v = t(92218), b = t(90034), N = t(51288), $ = t(70614), k = t(87796), T = t(7770), S = t(73928), O = t.n(S);
  let { spring: P, duration: C, ease: Y, blur: E, stagger: D } = T.T, A = [...Y.enter], L = [...Y.standard], R = "sofia@halcyon.studio", I = ["Nov 14, 2026", "Dec 14, 2026", "Jan 14, 2027"], B = ["Reason", "Offer", "Confirm"], W = { reason: 0, offer: 1, confirm: 2, cancelled: 3, kept: 3 }, F = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }), z = { size: 16, strokeWidth: 1.75, "aria-hidden": true }, M = [
    {
      id: "price",
      label: "Too expensive",
      detail: "The cost is hard to justify right now",
      prompt: "What would feel like a fair price for your team?",
      placeholder: "For example, $60 a month would work for us"
    },
    {
      id: "usage",
      label: "Not using it enough",
      detail: "Our work is seasonal or has slowed down",
      prompt: "When do you expect to need it again?",
      placeholder: "For example, after our January launch"
    },
    {
      id: "feature",
      label: "Missing a feature",
      detail: "Something we need isn't there yet",
      prompt: "Which feature would keep you here? Emma from product reads these.",
      placeholder: "For example, client approvals on shared boards"
    },
    {
      id: "switching",
      label: "Moving to another tool",
      detail: "We're consolidating on one product",
      prompt: "Which tool are you moving to?",
      placeholder: "For example, the suite our agency partner uses"
    }
  ], H = [
    {
      Icon: p.A,
      title: "Full access until Oct 14, 2026",
      detail: "The $96 renewal won't be charged.",
      danger: false
    },
    {
      Icon: h.A,
      title: "Read-only from Oct 14",
      detail: "All 8 members can still open and export the 42 projects.",
      danger: false
    },
    {
      Icon: m.A,
      title: "Deleted on Nov 13, 2026",
      detail: "Projects, files and history are removed 30 days after the plan ends.",
      danger: true
    }
  ], V = [
    {
      date: "Today",
      title: "Cancellation confirmed",
      detail: "No more charges. Your team keeps full access for now.",
      done: true
    },
    {
      date: "Oct 14",
      title: "Workspace turns read-only",
      detail: "Everyone can still open and export projects.",
      done: false
    },
    {
      date: "Nov 13",
      title: "Data is deleted",
      detail: "Reactivate before then to keep all 42 projects.",
      done: false
    }
  ];
  function U({ children: e2, className: a2, reduce: t2, ref: i2 }) {
    let o2 = (0, r.tF)();
    return (0, n.jsx)(s.PY1.span, {
      ref: i2,
      className: a2,
      "aria-hidden": !o2 || void 0,
      initial: t2 ? { opacity: 0 } : { opacity: 0, y: "0.35em", filter: `blur(${E.soft}px)` },
      animate: { opacity: 1, y: "0em", filter: "blur(0px)" },
      exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
        opacity: 0,
        y: "-0.3em",
        filter: `blur(${E.subtle}px)`,
        transition: { duration: C.fast, ease: L }
      },
      transition: t2 ? { duration: 0 } : { duration: C.standard, ease: A },
      children: e2
    });
  }
  function q({ children: e2, className: a2 }) {
    let t2 = !!(0, o.I)();
    return (0, n.jsx)("span", {
      className: [O().swap, a2].filter(Boolean).join(" "),
      children: (0, n.jsx)(l.N, {
        mode: "popLayout",
        initial: false,
        children: (0, n.jsx)(
          U,
          { className: O().swapText, reduce: t2, children: e2 },
          e2
        )
      })
    });
  }
  function J({ children: e2, className: a2 }) {
    let t2 = (0, o.I)(), r2 = (0, i.useRef)(null), [l2, c2] = (0, i.useState)("auto");
    return (0, i.useLayoutEffect)(() => {
      let e3 = r2.current;
      if (!e3 || "u" < typeof ResizeObserver) return;
      let a3 = new ResizeObserver(() => c2(e3.offsetHeight));
      return a3.observe(e3), () => a3.disconnect();
    }, []), (0, n.jsx)(s.PY1.div, {
      className: [O().morph, a2].filter(Boolean).join(" "),
      initial: false,
      animate: { height: l2 },
      transition: t2 ? { duration: 0 } : P.smooth,
      children: (0, n.jsx)("div", {
        ref: r2,
        className: O().morphInner,
        children: e2
      })
    });
  }
  function K({ step: e2, children: a2 }) {
    let t2 = (0, o.I)(), r2 = (0, i.useRef)(null), l2 = (0, i.useRef)(0), u2 = (0, c.d)("auto");
    return (0, i.useLayoutEffect)(() => {
      l2.current = performance.now() + 700;
    }, [e2]), (0, i.useEffect)(() => {
      let e3, a3 = r2.current;
      if (!a3 || "u" < typeof ResizeObserver) return;
      let n2 = false, i2 = new ResizeObserver(() => {
        let i3 = a3.offsetHeight;
        if (e3?.stop(), !n2 || t2 || performance.now() > l2.current) {
          n2 = true, u2.jump(i3);
          return;
        }
        e3 = (0, d.i)(u2, i3, P.smooth);
      });
      return i2.observe(a3), () => {
        i2.disconnect(), e3?.stop();
      };
    }, [u2, t2]), (0, n.jsx)(s.PY1.div, {
      className: O().region,
      style: { height: u2 },
      children: (0, n.jsx)("div", {
        ref: r2,
        className: O().regionInner,
        children: a2
      })
    });
  }
  function X({ at: e2, reduce: a2 }) {
    let [t2, r2] = (0, i.useState)({ to: e2, from: e2 });
    t2.to !== e2 && r2({ to: e2, from: t2.to });
    let { from: o2 } = t2;
    return (0, n.jsx)("ol", {
      className: O().progress,
      "aria-label": "Cancellation steps",
      children: B.map((t3, i2) => {
        let r3 = i2 < e2 ? "complete" : i2 === e2 ? "current" : "upcoming";
        return (0, n.jsxs)(
          "li",
          {
            className: O().step,
            "data-status": r3,
            "aria-current": i2 === e2 ? "step" : void 0,
            children: [
              (0, n.jsx)("span", {
                className: O().bar,
                "aria-hidden": "true",
                children: (0, n.jsx)(s.PY1.span, {
                  className: O().barFill,
                  initial: false,
                  animate: { scaleX: +(i2 <= e2) },
                  transition: a2 ? { duration: 0 } : {
                    ...P.smooth,
                    delay: a2 ? 0 : e2 > o2 ? Math.max(0, i2 - o2 - 1) * D.line : Math.max(0, o2 - i2 - 1) * D.line
                  }
                })
              }),
              (0, n.jsxs)("span", {
                className: O().stepLabel,
                children: [
                  t3,
                  "complete" === r3 && (0, n.jsx)("span", {
                    className: O().srOnly,
                    children: ", done"
                  })
                ]
              })
            ]
          },
          t3
        );
      })
    });
  }
  function Z() {
    let e2 = (0, o.I)();
    return (0, n.jsx)("svg", {
      width: 20,
      height: 20,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: (0, n.jsx)(s.PY1.path, {
        d: "M4.5 12.5l5 5L19.5 7",
        initial: { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1 },
        transition: e2 ? { duration: 0 } : {
          pathLength: { duration: 0.34, ease: A, delay: 0.14 },
          opacity: { duration: 0.05, delay: 0.14 }
        }
      })
    });
  }
  function Q({ rows: e2, note: a2 }) {
    let t2 = (0, o.I)();
    return (0, n.jsxs)("div", {
      className: O().receipt,
      children: [
        (0, n.jsx)(s.PY1.span, {
          className: O().mark,
          "aria-hidden": "true",
          initial: { scale: 0.6, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: t2 ? { duration: 0 } : { scale: P.snappy, opacity: { duration: C.fast } },
          children: (0, n.jsx)(Z, {})
        }),
        (0, n.jsx)("dl", {
          className: O().rows,
          children: e2.map(
            ([e3, a3], i2) => (0, n.jsxs)(
              s.PY1.div,
              {
                className: O().row,
                initial: { opacity: 0, y: 6 },
                animate: { opacity: 1, y: 0 },
                transition: t2 ? { duration: 0 } : { duration: C.standard, ease: A, delay: 0.12 + i2 * D.item },
                children: [
                  (0, n.jsx)("dt", { children: e3 }),
                  (0, n.jsx)("dd", { children: a3 })
                ]
              },
              e3
            )
          )
        }),
        a2 ? (0, n.jsx)("p", { className: O().footnote, children: a2 }) : null
      ]
    });
  }
  function G() {
    let e2 = (0, i.useId)(), a2 = (0, i.useId)(), t2 = !!(0, o.I)(), [r2, c2] = (0, i.useState)("reason"), [d2, p2] = (0, i.useState)(1), [h2, m2] = (0, i.useState)(null), [T2, S2] = (0, i.useState)(""), [Y2, B2] = (0, i.useState)(2), [U2, Z2] = (0, i.useState)("idle"), [G2, ea2] = (0, i.useState)(false), [et, en] = (0, i.useState)(false), [ei, er] = (0, i.useState)("stayed"), [es, eo] = (0, i.useState)("idle"), [el, ec] = (0, i.useState)(""), [ed, eu] = (0, i.useState)(0), ep = (0, i.useRef)(/* @__PURE__ */ new Map()), eh = (0, i.useRef)(null), em = (0, i.useRef)(/* @__PURE__ */ new Set());
    (0, i.useEffect)(() => {
      let e3 = eh.current;
      e3 && (eh.current = null, document.getElementById(e3)?.focus({ preventScroll: true }));
    }), (0, i.useEffect)(() => {
      let e3 = em.current;
      return () => e3.forEach((e4) => window.clearTimeout(e4));
    }, []);
    let ef = (e3, a3) => {
      let t3 = window.setTimeout(() => {
        em.current.delete(t3), e3();
      }, a3);
      em.current.add(t3);
    }, ex = T2.trim(), e_ = h2 ? (function(e3, a3, t3) {
      if ("usage" === e3) {
        let e4 = 1 === a3 ? "month" : "months";
        return {
          title: "Pause instead of cancelling",
          lead: "Stop billing while things are quiet. Projects, members and integrations stay exactly where they are.",
          figure: { value: a3, unit: e4 },
          facts: [
            `Skips ${1 === a3 ? "the Oct 14 invoice" : `${a3} invoices`}, saving ${F.format(96 * a3)}`,
            `Billing resumes on ${I[a3 - 1]}`,
            "Resume early any time from Billing"
          ],
          accept: `Pause for ${a3} ${e4}`,
          done: {
            title: `Paused until ${I[a3 - 1].replace(/, \d+$/, "")}`,
            lead: `No charges until ${I[a3 - 1]}. We'll remind ${R} a week before billing resumes.`,
            rows: [
              ["Paused from", "Oct 14, 2026"],
              ["Billing resumes", I[a3 - 1]],
              ["Saved while paused", F.format(96 * a3)]
            ],
            badge: `Paused until ${I[a3 - 1].replace(/, \d+$/, "")}`,
            tone: "info",
            announce: `Plan paused for ${a3} ${e4}. Billing resumes on ${I[a3 - 1]}.`
          }
        };
      }
      return "feature" === e3 ? {
        title: "Tell our product lead what's missing",
        lead: "Emma reads every note and replies within one business day. October is on us while you wait.",
        figure: {
          prefix: "$",
          value: 0,
          unit: "for October",
          was: "$96"
        },
        facts: [
          "Your Oct 14 invoice is waived",
          "Emma replies by Wednesday, Sep 23",
          "Early access if it's already on the roadmap"
        ],
        accept: "Claim free month",
        done: {
          title: "October is on us",
          lead: t3 ? "Emma has your note and will reply by Wednesday. Your Oct 14 invoice is waived." : "Emma will email you by Wednesday to hear what's missing. Your Oct 14 invoice is waived.",
          rows: [
            ["Oct 14 invoice", "$0.00"],
            ["Note sent to", "Emma Collins"],
            ["Reply by", "Sep 23"]
          ],
          badge: "October waived",
          tone: "success",
          announce: "October invoice waived and your note sent to Emma Collins."
        }
      } : "switching" === e3 ? {
        title: "Keep your history on Starter",
        lead: "Moving tools takes a while. Starter keeps every project searchable for less than a third of the price.",
        figure: {
          prefix: "$",
          value: 29,
          unit: "a month",
          was: "$96"
        },
        facts: [
          "All 42 projects and their history stay",
          "3 editor seats, everyone else becomes a viewer",
          "Saves $67 a month from Oct 14"
        ],
        accept: "Switch to Starter",
        done: {
          title: "Starter starts on Oct 14",
          lead: "Your team keeps working on Team until then. From Oct 14 the invoice is $29.",
          rows: [
            ["Plan from Oct 14", "Starter"],
            ["New price", "$29 a month"],
            ["Projects kept", "42"]
          ],
          badge: "Starter from Oct 14",
          tone: "info",
          announce: "Moving to Starter on Oct 14 at $29 a month."
        }
      } : {
        title: "Stay for 30% less",
        lead: "Keep every project, seat and integration for $67.20 a month through the end of the year.",
        figure: {
          prefix: "$",
          value: 67.2,
          decimals: 2,
          unit: "a month",
          was: "$96"
        },
        facts: [
          "Applies to your Oct, Nov and Dec invoices",
          "Saves $86.40 across the three months",
          "Returns to $96 a month on Jan 14, 2027"
        ],
        accept: "Apply 30% off",
        done: {
          title: "30% off is applied",
          lead: "Your next three invoices drop to $67.20. Nothing else about your workspace changes.",
          rows: [
            ["Next invoice, Oct 14", "$67.20"],
            ["Discount ends", "Jan 13, 2027"],
            ["Saved in total", "$86.40"]
          ],
          badge: "30% off until Jan 14",
          tone: "success",
          announce: "30% off applied to the next three invoices."
        }
      };
    })(h2, Y2, ex) : null, ey = "offer" === r2 && "applied" === U2, ej = "applying" === U2 || et && "confirm" === r2, ew = ey ? 3 : W[r2], eg = et ? { text: "Ends Oct 14", tone: "warning" } : ey && e_ ? { text: e_.done.badge, tone: e_.done.tone } : { text: "Renews Oct 14", tone: "neutral" }, ev = M.find((e3) => e3.id === h2);
    function eb(a3, t3, n2) {
      p2(t3), "reason" === a3 && eu((e3) => e3 + 1), c2(a3), ec(n2), eh.current = `${e2}-${a3}`;
    }
    function eN(e3) {
      let a3 = M.map((e4) => e4.id), t3 = a3.indexOf(e3.target.dataset.reason), n2 = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e3.key], i2 = "Home" === e3.key ? a3[0] : "End" === e3.key ? a3[a3.length - 1] : n2 ? a3[(Math.max(t3, 0) + n2 + a3.length) % a3.length] : void 0;
      i2 && (e3.preventDefault(), m2(i2), ep.current.get(i2)?.focus());
    }
    function e$(e3) {
      let a3 = Math.min(3, Math.max(1, Y2 + e3));
      a3 !== Y2 && "idle" === U2 && (B2(a3), ec(
        `Pause for ${a3} ${1 === a3 ? "month" : "months"}. Billing resumes on ${I[a3 - 1]}.`
      ));
    }
    function ek(e3) {
      let a3 = {
        ArrowUp: 1,
        ArrowRight: 1,
        ArrowDown: -1,
        ArrowLeft: -1,
        Home: -2,
        End: 2
      }[e3.key];
      a3 && (e3.preventDefault(), e$(a3));
    }
    function eT() {
      if (!e_ || "idle" !== U2) return;
      let a3 = e_.done.announce;
      Z2("applying"), ef(() => {
        Z2("applied"), ec(a3), eh.current = `${e2}-undo`;
      }, 900);
    }
    function eS() {
      Z2("idle"), ec("Offer removed. Your plan is back to $96 a month."), eh.current = `${e2}-accept`;
    }
    function eO() {
      en(true), ea2(false), ec("Team plan cancelled."), ef(
        () => eb(
          "cancelled",
          1,
          "Your plan ends on Oct 14. Here is what happens next."
        ),
        900
      );
    }
    function eP() {
      "idle" === es && (eo("working"), ef(() => {
        eo("done"), ec(`Export requested. A download link is on its way to ${R}.`);
      }, 1100));
    }
    function eC() {
      er("reactivated"), en(false), eo("idle"), eb("kept", 1, "Plan reactivated. It renews on Oct 14.");
    }
    function eY() {
      m2(null), S2(""), B2(2), Z2("idle"), en(false), eo("idle"), eb("reason", -1, "Step 1 of 3: why are you cancelling?");
    }
    let eE = (a3) => (0, n.jsx)("h2", {
      id: `${e2}-${r2}`,
      tabIndex: -1,
      className: O().title,
      children: a3
    }), eD = (e3) => ({
      initial: { opacity: 0, y: 6 },
      animate: { opacity: 1, y: 0 },
      transition: t2 ? { duration: 0 } : { duration: C.standard, ease: A, delay: 0.1 + e3 * D.line }
    }), eA = {
      initial: t2 ? { opacity: 0 } : { opacity: 0, y: 8, filter: `blur(${E.soft}px)` },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: t2 ? { opacity: 0, transition: { duration: 0 } } : {
        opacity: 0,
        y: -4,
        filter: `blur(${E.subtle}px)`,
        transition: { duration: C.exit, ease: L }
      },
      transition: t2 ? { duration: 0 } : { duration: C.standard, ease: A, delay: 0.06 }
    }, eL = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: t2 ? 0 : C.instant } },
      transition: { duration: t2 ? 0 : C.fast }
    }, eR = { dir: d2, reduce: t2 };
    return (0, n.jsx)("section", {
      className: O().root,
      "aria-label": "Cancel subscription",
      children: (0, n.jsxs)("div", {
        className: O().card,
        children: [
          (0, n.jsxs)("div", {
            className: O().top,
            children: [
              (0, n.jsxs)("div", {
                className: O().plan,
                children: [
                  (0, n.jsx)("p", {
                    className: O().planName,
                    children: "Team plan"
                  }),
                  (0, n.jsx)("p", {
                    className: O().planMeta,
                    children: "Halcyon Studio \xB7 8 seats \xB7 $96 a month"
                  })
                ]
              }),
              (0, n.jsx)(b.E, { size: "sm", tone: eg.tone, children: eg.text })
            ]
          }),
          (0, n.jsx)(X, { at: ew, reduce: t2 }),
          (0, n.jsx)(K, {
            step: r2,
            children: (0, n.jsx)(l.N, {
              mode: "popLayout",
              initial: false,
              custom: eR,
              children: (0, n.jsx)(
                s.PY1.div,
                {
                  className: O().view,
                  custom: eR,
                  variants: ee,
                  initial: "enter",
                  animate: "center",
                  exit: "exit",
                  children: (function() {
                    if ("reason" === r2)
                      return (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsxs)("header", {
                            className: O().head,
                            children: [
                              eE("Why are you cancelling?"),
                              (0, n.jsx)("p", {
                                className: O().lead,
                                children: "Your answer shapes what we suggest next. Nothing changes until you confirm on the last step."
                              })
                            ]
                          }),
                          (0, n.jsx)(u.o, {
                            id: a2,
                            children: (0, n.jsx)("div", {
                              className: O().reasons,
                              role: "radiogroup",
                              "aria-labelledby": `${e2}-reason`,
                              onKeyDown: eN,
                              children: M.map((e3, a3) => {
                                let i2 = h2 === e3.id;
                                return (0, n.jsxs)(
                                  "button",
                                  {
                                    ref: (a4) => {
                                      a4 ? ep.current.set(e3.id, a4) : ep.current.delete(e3.id);
                                    },
                                    type: "button",
                                    role: "radio",
                                    "aria-checked": i2,
                                    tabIndex: i2 || !h2 && 0 === a3 ? 0 : -1,
                                    "data-reason": e3.id,
                                    className: O().reason,
                                    onClick: () => m2(e3.id),
                                    children: [
                                      i2 && (0, n.jsx)(s.PY1.span, {
                                        layoutId: `reason-highlight-${ed}`,
                                        className: O().highlight,
                                        style: { borderRadius: 13 },
                                        transition: t2 ? { duration: 0 } : P.morph
                                      }),
                                      (0, n.jsxs)("span", {
                                        className: O().reasonHead,
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: O().reasonLabel,
                                            children: e3.label
                                          }),
                                          (0, n.jsx)("span", {
                                            className: O().radio,
                                            "aria-hidden": "true"
                                          })
                                        ]
                                      }),
                                      (0, n.jsx)("span", {
                                        className: O().reasonDetail,
                                        children: e3.detail
                                      })
                                    ]
                                  },
                                  e3.id
                                );
                              })
                            })
                          }),
                          (0, n.jsx)(l.N, {
                            initial: false,
                            children: ev && (0, n.jsx)(
                              s.PY1.div,
                              {
                                className: O().noteSlot,
                                initial: { height: 0, opacity: 0 },
                                animate: { height: "auto", opacity: 1 },
                                exit: { height: 0, opacity: 0 },
                                transition: t2 ? { duration: 0 } : {
                                  height: P.smooth,
                                  opacity: {
                                    duration: C.standard,
                                    ease: A
                                  }
                                },
                                children: (0, n.jsx)("div", {
                                  className: O().note,
                                  children: (0, n.jsx)(k.T, {
                                    id: `${e2}-note`,
                                    label: "Add a note (optional)",
                                    description: ev.prompt,
                                    placeholder: ev.placeholder,
                                    rows: 3,
                                    maxLength: 280,
                                    value: T2,
                                    onChange: (e3) => S2(e3.target.value)
                                  })
                                })
                              },
                              "note"
                            )
                          }),
                          (0, n.jsx)("div", {
                            className: O().actions,
                            children: (0, n.jsx)("div", {
                              className: O().actionsEnd,
                              children: (0, n.jsx)(N.$, {
                                disabled: !h2,
                                onClick: () => {
                                  h2 && (Z2("idle"), eb(
                                    "offer",
                                    1,
                                    "Step 2 of 3: an offer based on your reason."
                                  ));
                                },
                                children: "Continue"
                              })
                            })
                          })
                        ]
                      });
                    if ("offer" === r2 && e_ && h2) {
                      let a3 = "usage" === h2;
                      return (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsxs)("header", {
                            className: O().head,
                            children: [
                              (0, n.jsx)(J, {
                                children: eE(
                                  (0, n.jsx)(q, {
                                    children: ey ? e_.done.title : e_.title
                                  })
                                )
                              }),
                              (0, n.jsx)(J, {
                                children: (0, n.jsx)("p", {
                                  className: O().lead,
                                  children: (0, n.jsx)(q, {
                                    children: ey ? e_.done.lead : e_.lead
                                  })
                                })
                              })
                            ]
                          }),
                          (0, n.jsx)(J, {
                            className: O().panel,
                            children: (0, n.jsx)(l.N, {
                              mode: "popLayout",
                              initial: false,
                              children: ey ? (0, n.jsx)(
                                s.PY1.div,
                                {
                                  ...eA,
                                  children: (0, n.jsx)(Q, {
                                    rows: e_.done.rows
                                  })
                                },
                                "done"
                              ) : (0, n.jsxs)(
                                s.PY1.div,
                                {
                                  className: O().offerBody,
                                  ...eA,
                                  children: [
                                    (0, n.jsxs)("div", {
                                      className: O().figureRow,
                                      children: [
                                        (0, n.jsxs)("div", {
                                          className: O().figure,
                                          role: a3 ? "spinbutton" : void 0,
                                          tabIndex: a3 ? 0 : void 0,
                                          "aria-label": a3 ? "Pause length" : void 0,
                                          "aria-valuemin": a3 ? 1 : void 0,
                                          "aria-valuemax": a3 ? 3 : void 0,
                                          "aria-valuenow": a3 ? Y2 : void 0,
                                          "aria-valuetext": a3 ? `${Y2} ${e_.figure.unit}, resumes ${I[Y2 - 1]}` : void 0,
                                          onKeyDown: a3 ? ek : void 0,
                                          children: [
                                            (0, n.jsx)("span", {
                                              className: O().figureNum,
                                              children: (0, n.jsx)(g.q, {
                                                value: e_.figure.value,
                                                prefix: e_.figure.prefix,
                                                decimals: e_.figure.decimals,
                                                animateOnView: true
                                              })
                                            }),
                                            (0, n.jsx)(q, {
                                              className: O().figureUnit,
                                              children: e_.figure.unit
                                            })
                                          ]
                                        }),
                                        a3 ? (0, n.jsxs)("div", {
                                          className: O().monthControls,
                                          children: [
                                            (0, n.jsx)(N.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              className: O().iconButton,
                                              "aria-label": "Pause one month less",
                                              "aria-disabled": 1 === Y2 || ej || void 0,
                                              onClick: () => e$(-1),
                                              children: (0, n.jsx)(
                                                f.A,
                                                { ...z }
                                              )
                                            }),
                                            (0, n.jsx)(N.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              className: O().iconButton,
                                              "aria-label": "Pause one month more",
                                              "aria-disabled": 3 === Y2 || ej || void 0,
                                              onClick: () => e$(1),
                                              children: (0, n.jsx)(
                                                x.A,
                                                { ...z }
                                              )
                                            })
                                          ]
                                        }) : e_.figure.was ? (0, n.jsxs)("p", {
                                          className: O().was,
                                          children: [
                                            (0, n.jsx)("span", {
                                              className: O().srOnly,
                                              children: "Instead of "
                                            }),
                                            (0, n.jsx)("s", {
                                              children: e_.figure.was
                                            })
                                          ]
                                        }) : null
                                      ]
                                    }),
                                    "feature" === h2 && (0, n.jsxs)("div", {
                                      className: O().person,
                                      children: [
                                        (0, n.jsx)(v.e, {
                                          name: "Emma Collins",
                                          src: "media/people/emma-collins.svg"
                                        }),
                                        (0, n.jsxs)("div", {
                                          children: [
                                            (0, n.jsxs)("p", {
                                              className: O().personName,
                                              children: [
                                                "Emma Collins ",
                                                (0, n.jsx)("span", {
                                                  children: "Product lead"
                                                })
                                              ]
                                            }),
                                            (0, n.jsx)("p", {
                                              className: O().quote,
                                              children: ex ? `Your note: \u201C${ex}\u201D` : "No note yet. Go back to add one, or Emma will ask when she replies."
                                            })
                                          ]
                                        })
                                      ]
                                    }),
                                    (0, n.jsx)("ul", {
                                      className: O().facts,
                                      children: e_.facts.map(
                                        (e3, a4) => (0, n.jsxs)(
                                          "li",
                                          {
                                            children: [
                                              (0, n.jsx)(_.A, {
                                                size: 16,
                                                strokeWidth: 2,
                                                "aria-hidden": "true"
                                              }),
                                              (0, n.jsx)(q, {
                                                children: e3
                                              })
                                            ]
                                          },
                                          a4
                                        )
                                      )
                                    })
                                  ]
                                },
                                "offer"
                              )
                            })
                          }),
                          (0, n.jsxs)("div", {
                            className: O().actions,
                            children: [
                              (0, n.jsx)(l.N, {
                                mode: "popLayout",
                                initial: false,
                                children: !ey && (0, n.jsx)(
                                  s.PY1.div,
                                  {
                                    ...eL,
                                    children: (0, n.jsxs)(N.$, {
                                      variant: "ghost",
                                      className: O().inert,
                                      "aria-disabled": ej || void 0,
                                      onClick: () => {
                                        ej || eb(
                                          "reason",
                                          -1,
                                          "Step 1 of 3: why are you cancelling?"
                                        );
                                      },
                                      children: [
                                        (0, n.jsx)(y.A, { ...z }),
                                        "Back"
                                      ]
                                    })
                                  },
                                  "back"
                                )
                              }),
                              (0, n.jsx)(l.N, {
                                mode: "popLayout",
                                initial: false,
                                children: ey ? (0, n.jsx)(
                                  s.PY1.div,
                                  {
                                    className: O().actionsEnd,
                                    ...eL,
                                    children: (0, n.jsxs)(N.$, {
                                      id: `${e2}-undo`,
                                      variant: "secondary",
                                      onClick: eS,
                                      children: [
                                        (0, n.jsx)(j.A, { ...z }),
                                        "Undo"
                                      ]
                                    })
                                  },
                                  "undo"
                                ) : (0, n.jsxs)(
                                  s.PY1.div,
                                  {
                                    className: O().actionsEnd,
                                    ...eL,
                                    children: [
                                      (0, n.jsx)(N.$, {
                                        variant: "ghost",
                                        className: O().inert,
                                        "aria-disabled": ej || void 0,
                                        onClick: () => {
                                          ej || eb(
                                            "confirm",
                                            1,
                                            "Step 3 of 3: confirm cancellation."
                                          );
                                        },
                                        children: "Continue to cancel"
                                      }),
                                      (0, n.jsx)(N.$, {
                                        id: `${e2}-accept`,
                                        loading: "applying" === U2,
                                        onClick: eT,
                                        children: e_.accept
                                      })
                                    ]
                                  },
                                  "choose"
                                )
                              })
                            ]
                          })
                        ]
                      });
                    }
                    return "confirm" === r2 ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsxs)("header", {
                          className: O().head,
                          children: [
                            eE("Before you cancel"),
                            (0, n.jsx)("p", {
                              className: O().lead,
                              children: "Your team keeps full access until the end of this billing period. Here is what changes after that."
                            })
                          ]
                        }),
                        (0, n.jsx)("ul", {
                          className: O().impacts,
                          children: H.map(
                            ({ Icon: e3, title: a3, detail: t3, danger: i2 }, r3) => (0, n.jsxs)(
                              s.PY1.li,
                              {
                                className: O().impact,
                                "data-danger": i2 || void 0,
                                ...eD(r3),
                                children: [
                                  (0, n.jsx)(e3, {
                                    size: 16,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                  }),
                                  (0, n.jsxs)("div", {
                                    children: [
                                      (0, n.jsx)("p", {
                                        className: O().impactTitle,
                                        children: a3
                                      }),
                                      (0, n.jsx)("p", {
                                        className: O().impactDetail,
                                        children: t3
                                      })
                                    ]
                                  })
                                ]
                              },
                              a3
                            )
                          )
                        }),
                        (0, n.jsxs)("div", {
                          className: O().actions,
                          children: [
                            (0, n.jsxs)(N.$, {
                              variant: "ghost",
                              className: O().inert,
                              "aria-disabled": ej || void 0,
                              onClick: () => {
                                ej || eb(
                                  "offer",
                                  -1,
                                  "Step 2 of 3: an offer based on your reason."
                                );
                              },
                              children: [(0, n.jsx)(y.A, { ...z }), "Back"]
                            }),
                            (0, n.jsxs)("div", {
                              className: O().actionsEnd,
                              children: [
                                (0, n.jsx)(N.$, {
                                  variant: "secondary",
                                  className: O().inert,
                                  "aria-disabled": ej || void 0,
                                  onClick: () => {
                                    ej || (er("stayed"), eb(
                                      "kept",
                                      1,
                                      "Nothing changed. Your Team plan stays active."
                                    ));
                                  },
                                  children: "Keep my plan"
                                }),
                                (0, n.jsx)($.j, {
                                  label: "Hold to cancel plan",
                                  confirmedLabel: "Plan cancelled",
                                  confirmed: et,
                                  onConfirm: eO,
                                  onHoldChange: ea2
                                })
                              ]
                            })
                          ]
                        }),
                        (0, n.jsx)("p", {
                          className: O().hint,
                          "aria-hidden": "true",
                          children: (0, n.jsx)(q, {
                            children: et ? "Cancelled. Wrapping up" : G2 ? "Keep holding" : "Hold for 1.2 seconds"
                          })
                        })
                      ]
                    }) : "cancelled" === r2 ? (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsxs)("header", {
                          className: O().head,
                          children: [
                            eE("Your plan ends on Oct 14"),
                            (0, n.jsxs)("p", {
                              className: O().lead,
                              children: [
                                "Thanks for building with us. A confirmation is on its way to ",
                                R,
                                "."
                              ]
                            })
                          ]
                        }),
                        (0, n.jsx)("h3", {
                          className: O().subhead,
                          children: "What happens next"
                        }),
                        (0, n.jsx)("ol", {
                          className: O().timeline,
                          children: V.map(
                            (e3, a3) => (0, n.jsxs)(
                              s.PY1.li,
                              {
                                className: O().event,
                                "data-done": e3.done || void 0,
                                ...eD(a3),
                                children: [
                                  (0, n.jsx)("span", {
                                    className: O().eventDate,
                                    children: e3.date
                                  }),
                                  (0, n.jsx)("span", {
                                    className: O().eventDot,
                                    "aria-hidden": "true",
                                    children: e3.done && (0, n.jsx)(_.A, {
                                      size: 10,
                                      strokeWidth: 3
                                    })
                                  }),
                                  (0, n.jsxs)("div", {
                                    children: [
                                      (0, n.jsxs)("p", {
                                        className: O().eventTitle,
                                        children: [
                                          e3.title,
                                          e3.done && (0, n.jsx)("span", {
                                            className: O().srOnly,
                                            children: ", done"
                                          })
                                        ]
                                      }),
                                      (0, n.jsx)("p", {
                                        className: O().eventDetail,
                                        children: e3.detail
                                      })
                                    ]
                                  })
                                ]
                              },
                              e3.title
                            )
                          )
                        }),
                        (0, n.jsxs)("div", {
                          className: O().actions,
                          children: [
                            (0, n.jsx)(N.$, {
                              variant: "secondary",
                              loading: "working" === es,
                              onClick: eP,
                              children: "done" === es ? (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsx)(_.A, { ...z }),
                                  "Export requested"
                                ]
                              }) : (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsx)(w.A, { ...z }),
                                  "Export data"
                                ]
                              })
                            }),
                            (0, n.jsx)("div", {
                              className: O().actionsEnd,
                              children: (0, n.jsxs)(N.$, {
                                variant: "secondary",
                                onClick: eC,
                                children: [
                                  (0, n.jsx)(j.A, { ...z }),
                                  "Reactivate plan"
                                ]
                              })
                            })
                          ]
                        })
                      ]
                    }) : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsxs)("header", {
                          className: O().head,
                          children: [
                            eE(
                              "stayed" === ei ? "Your Team plan stays active" : "Your plan is active again"
                            ),
                            (0, n.jsx)("p", {
                              className: O().lead,
                              children: "stayed" === ei ? "Nothing changed. Your projects, members and integrations carry on as before." : "The cancellation is undone and nothing will be deleted."
                            })
                          ]
                        }),
                        (0, n.jsx)("div", {
                          className: O().panel,
                          children: (0, n.jsx)(Q, {
                            rows: [
                              ["Plan", "Team, 8 seats"],
                              ["Next invoice", "Oct 14, 2026"],
                              ["Amount", "$96.00"]
                            ],
                            note: "stayed" === ei ? "No changes were made." : void 0
                          })
                        }),
                        (0, n.jsx)("div", {
                          className: O().actions,
                          children: (0, n.jsx)("div", {
                            className: O().actionsEnd,
                            children: (0, n.jsxs)(N.$, {
                              variant: "ghost",
                              onClick: eY,
                              children: [
                                (0, n.jsx)(j.A, { ...z }),
                                "Start over"
                              ]
                            })
                          })
                        })
                      ]
                    });
                  })()
                },
                r2
              )
            })
          }),
          (0, n.jsx)("p", {
            className: O().srOnly,
            role: "status",
            "aria-live": "polite",
            children: el
          })
        ]
      })
    });
  }
  let ee = {
    enter: ({ dir: e2, reduce: a2 }) => a2 ? { opacity: 0 } : { opacity: 0, x: 28 * e2, filter: `blur(${E.soft}px)` },
    center: ({ reduce: e2 }) => ({
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: e2 ? { duration: 0 } : {
        x: P.smooth,
        opacity: { duration: C.standard, ease: A },
        filter: { duration: C.standard, ease: A }
      }
    }),
    exit: ({ dir: e2, reduce: a2 }) => a2 ? { opacity: 0, transition: { duration: 0 } } : {
      opacity: 0,
      x: -20 * e2,
      filter: `blur(${E.subtle}px)`,
      transition: { duration: C.exit, ease: L }
    }
  }, ea = G;
}

__m(__module,__exports,__require);
}